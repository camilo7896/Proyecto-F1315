function IR(i,e){for(var t=0;t<e.length;t++){const r=e[t];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in i)){const l=Object.getOwnPropertyDescriptor(r,a);l&&Object.defineProperty(i,a,l.get?l:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function t1(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var np={exports:{}},su={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fb;function RR(){if(fb)return su;fb=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(r,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var m in a)m!=="key"&&(l[m]=a[m])}else l=a;return a=l.ref,{$$typeof:i,type:r,key:c,ref:a!==void 0?a:null,props:l}}return su.Fragment=e,su.jsx=t,su.jsxs=t,su}var db;function CR(){return db||(db=1,np.exports=RR()),np.exports}var w=CR(),ip={exports:{}},xe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mb;function xR(){if(mb)return xe;mb=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),E=Symbol.iterator;function S(O){return O===null||typeof O!="object"?null:(O=E&&O[E]||O["@@iterator"],typeof O=="function"?O:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F=Object.assign,K={};function V(O,te,ue){this.props=O,this.context=te,this.refs=K,this.updater=ue||U}V.prototype.isReactComponent={},V.prototype.setState=function(O,te){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,te,"setState")},V.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function G(){}G.prototype=V.prototype;function X(O,te,ue){this.props=O,this.context=te,this.refs=K,this.updater=ue||U}var W=X.prototype=new G;W.constructor=X,F(W,V.prototype),W.isPureReactComponent=!0;var ce=Array.isArray,oe={H:null,A:null,T:null,S:null,V:null},de=Object.prototype.hasOwnProperty;function D(O,te,ue,se,ve,De){return ue=De.ref,{$$typeof:i,type:O,key:te,ref:ue!==void 0?ue:null,props:De}}function I(O,te){return D(O.type,te,void 0,void 0,void 0,O.props)}function R(O){return typeof O=="object"&&O!==null&&O.$$typeof===i}function N(O){var te={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ue){return te[ue]})}var k=/\/+/g;function M(O,te){return typeof O=="object"&&O!==null&&O.key!=null?N(""+O.key):te.toString(36)}function x(){}function Ft(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(x,x):(O.status="pending",O.then(function(te){O.status==="pending"&&(O.status="fulfilled",O.value=te)},function(te){O.status==="pending"&&(O.status="rejected",O.reason=te)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function ht(O,te,ue,se,ve){var De=typeof O;(De==="undefined"||De==="boolean")&&(O=null);var we=!1;if(O===null)we=!0;else switch(De){case"bigint":case"string":case"number":we=!0;break;case"object":switch(O.$$typeof){case i:case e:we=!0;break;case v:return we=O._init,ht(we(O._payload),te,ue,se,ve)}}if(we)return ve=ve(O),we=se===""?"."+M(O,0):se,ce(ve)?(ue="",we!=null&&(ue=we.replace(k,"$&/")+"/"),ht(ve,te,ue,"",function(Xn){return Xn})):ve!=null&&(R(ve)&&(ve=I(ve,ue+(ve.key==null||O&&O.key===ve.key?"":(""+ve.key).replace(k,"$&/")+"/")+we)),te.push(ve)),1;we=0;var Mt=se===""?".":se+":";if(ce(O))for(var it=0;it<O.length;it++)se=O[it],De=Mt+M(se,it),we+=ht(se,te,ue,De,ve);else if(it=S(O),typeof it=="function")for(O=it.call(O),it=0;!(se=O.next()).done;)se=se.value,De=Mt+M(se,it++),we+=ht(se,te,ue,De,ve);else if(De==="object"){if(typeof O.then=="function")return ht(Ft(O),te,ue,se,ve);throw te=String(O),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.")}return we}function Y(O,te,ue){if(O==null)return O;var se=[],ve=0;return ht(O,se,"","",function(De){return te.call(ue,De,ve++)}),se}function le(O){if(O._status===-1){var te=O._result;te=te(),te.then(function(ue){(O._status===0||O._status===-1)&&(O._status=1,O._result=ue)},function(ue){(O._status===0||O._status===-1)&&(O._status=2,O._result=ue)}),O._status===-1&&(O._status=0,O._result=te)}if(O._status===1)return O._result.default;throw O._result}var ye=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var te=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(te))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function He(){}return xe.Children={map:Y,forEach:function(O,te,ue){Y(O,function(){te.apply(this,arguments)},ue)},count:function(O){var te=0;return Y(O,function(){te++}),te},toArray:function(O){return Y(O,function(te){return te})||[]},only:function(O){if(!R(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},xe.Component=V,xe.Fragment=t,xe.Profiler=a,xe.PureComponent=X,xe.StrictMode=r,xe.Suspense=p,xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=oe,xe.__COMPILER_RUNTIME={__proto__:null,c:function(O){return oe.H.useMemoCache(O)}},xe.cache=function(O){return function(){return O.apply(null,arguments)}},xe.cloneElement=function(O,te,ue){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var se=F({},O.props),ve=O.key,De=void 0;if(te!=null)for(we in te.ref!==void 0&&(De=void 0),te.key!==void 0&&(ve=""+te.key),te)!de.call(te,we)||we==="key"||we==="__self"||we==="__source"||we==="ref"&&te.ref===void 0||(se[we]=te[we]);var we=arguments.length-2;if(we===1)se.children=ue;else if(1<we){for(var Mt=Array(we),it=0;it<we;it++)Mt[it]=arguments[it+2];se.children=Mt}return D(O.type,ve,void 0,void 0,De,se)},xe.createContext=function(O){return O={$$typeof:c,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:l,_context:O},O},xe.createElement=function(O,te,ue){var se,ve={},De=null;if(te!=null)for(se in te.key!==void 0&&(De=""+te.key),te)de.call(te,se)&&se!=="key"&&se!=="__self"&&se!=="__source"&&(ve[se]=te[se]);var we=arguments.length-2;if(we===1)ve.children=ue;else if(1<we){for(var Mt=Array(we),it=0;it<we;it++)Mt[it]=arguments[it+2];ve.children=Mt}if(O&&O.defaultProps)for(se in we=O.defaultProps,we)ve[se]===void 0&&(ve[se]=we[se]);return D(O,De,void 0,void 0,null,ve)},xe.createRef=function(){return{current:null}},xe.forwardRef=function(O){return{$$typeof:m,render:O}},xe.isValidElement=R,xe.lazy=function(O){return{$$typeof:v,_payload:{_status:-1,_result:O},_init:le}},xe.memo=function(O,te){return{$$typeof:g,type:O,compare:te===void 0?null:te}},xe.startTransition=function(O){var te=oe.T,ue={};oe.T=ue;try{var se=O(),ve=oe.S;ve!==null&&ve(ue,se),typeof se=="object"&&se!==null&&typeof se.then=="function"&&se.then(He,ye)}catch(De){ye(De)}finally{oe.T=te}},xe.unstable_useCacheRefresh=function(){return oe.H.useCacheRefresh()},xe.use=function(O){return oe.H.use(O)},xe.useActionState=function(O,te,ue){return oe.H.useActionState(O,te,ue)},xe.useCallback=function(O,te){return oe.H.useCallback(O,te)},xe.useContext=function(O){return oe.H.useContext(O)},xe.useDebugValue=function(){},xe.useDeferredValue=function(O,te){return oe.H.useDeferredValue(O,te)},xe.useEffect=function(O,te,ue){var se=oe.H;if(typeof ue=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return se.useEffect(O,te)},xe.useId=function(){return oe.H.useId()},xe.useImperativeHandle=function(O,te,ue){return oe.H.useImperativeHandle(O,te,ue)},xe.useInsertionEffect=function(O,te){return oe.H.useInsertionEffect(O,te)},xe.useLayoutEffect=function(O,te){return oe.H.useLayoutEffect(O,te)},xe.useMemo=function(O,te){return oe.H.useMemo(O,te)},xe.useOptimistic=function(O,te){return oe.H.useOptimistic(O,te)},xe.useReducer=function(O,te,ue){return oe.H.useReducer(O,te,ue)},xe.useRef=function(O){return oe.H.useRef(O)},xe.useState=function(O){return oe.H.useState(O)},xe.useSyncExternalStore=function(O,te,ue){return oe.H.useSyncExternalStore(O,te,ue)},xe.useTransition=function(){return oe.H.useTransition()},xe.version="19.1.0",xe}var pb;function kg(){return pb||(pb=1,ip.exports=xR()),ip.exports}var ne=kg();const Uu=t1(ne),NR=IR({__proto__:null,default:Uu},[ne]);var rp={exports:{}},au={},sp={exports:{}},ap={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gb;function OR(){return gb||(gb=1,function(i){function e(Y,le){var ye=Y.length;Y.push(le);e:for(;0<ye;){var He=ye-1>>>1,O=Y[He];if(0<a(O,le))Y[He]=le,Y[ye]=O,ye=He;else break e}}function t(Y){return Y.length===0?null:Y[0]}function r(Y){if(Y.length===0)return null;var le=Y[0],ye=Y.pop();if(ye!==le){Y[0]=ye;e:for(var He=0,O=Y.length,te=O>>>1;He<te;){var ue=2*(He+1)-1,se=Y[ue],ve=ue+1,De=Y[ve];if(0>a(se,ye))ve<O&&0>a(De,se)?(Y[He]=De,Y[ve]=ye,He=ve):(Y[He]=se,Y[ue]=ye,He=ue);else if(ve<O&&0>a(De,ye))Y[He]=De,Y[ve]=ye,He=ve;else break e}}return le}function a(Y,le){var ye=Y.sortIndex-le.sortIndex;return ye!==0?ye:Y.id-le.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;i.unstable_now=function(){return l.now()}}else{var c=Date,m=c.now();i.unstable_now=function(){return c.now()-m}}var p=[],g=[],v=1,E=null,S=3,U=!1,F=!1,K=!1,V=!1,G=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,W=typeof setImmediate<"u"?setImmediate:null;function ce(Y){for(var le=t(g);le!==null;){if(le.callback===null)r(g);else if(le.startTime<=Y)r(g),le.sortIndex=le.expirationTime,e(p,le);else break;le=t(g)}}function oe(Y){if(K=!1,ce(Y),!F)if(t(p)!==null)F=!0,de||(de=!0,M());else{var le=t(g);le!==null&&ht(oe,le.startTime-Y)}}var de=!1,D=-1,I=5,R=-1;function N(){return V?!0:!(i.unstable_now()-R<I)}function k(){if(V=!1,de){var Y=i.unstable_now();R=Y;var le=!0;try{e:{F=!1,K&&(K=!1,X(D),D=-1),U=!0;var ye=S;try{t:{for(ce(Y),E=t(p);E!==null&&!(E.expirationTime>Y&&N());){var He=E.callback;if(typeof He=="function"){E.callback=null,S=E.priorityLevel;var O=He(E.expirationTime<=Y);if(Y=i.unstable_now(),typeof O=="function"){E.callback=O,ce(Y),le=!0;break t}E===t(p)&&r(p),ce(Y)}else r(p);E=t(p)}if(E!==null)le=!0;else{var te=t(g);te!==null&&ht(oe,te.startTime-Y),le=!1}}break e}finally{E=null,S=ye,U=!1}le=void 0}}finally{le?M():de=!1}}}var M;if(typeof W=="function")M=function(){W(k)};else if(typeof MessageChannel<"u"){var x=new MessageChannel,Ft=x.port2;x.port1.onmessage=k,M=function(){Ft.postMessage(null)}}else M=function(){G(k,0)};function ht(Y,le){D=G(function(){Y(i.unstable_now())},le)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(Y){Y.callback=null},i.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<Y?Math.floor(1e3/Y):5},i.unstable_getCurrentPriorityLevel=function(){return S},i.unstable_next=function(Y){switch(S){case 1:case 2:case 3:var le=3;break;default:le=S}var ye=S;S=le;try{return Y()}finally{S=ye}},i.unstable_requestPaint=function(){V=!0},i.unstable_runWithPriority=function(Y,le){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var ye=S;S=Y;try{return le()}finally{S=ye}},i.unstable_scheduleCallback=function(Y,le,ye){var He=i.unstable_now();switch(typeof ye=="object"&&ye!==null?(ye=ye.delay,ye=typeof ye=="number"&&0<ye?He+ye:He):ye=He,Y){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=ye+O,Y={id:v++,callback:le,priorityLevel:Y,startTime:ye,expirationTime:O,sortIndex:-1},ye>He?(Y.sortIndex=ye,e(g,Y),t(p)===null&&Y===t(g)&&(K?(X(D),D=-1):K=!0,ht(oe,ye-He))):(Y.sortIndex=O,e(p,Y),F||U||(F=!0,de||(de=!0,M()))),Y},i.unstable_shouldYield=N,i.unstable_wrapCallback=function(Y){var le=S;return function(){var ye=S;S=le;try{return Y.apply(this,arguments)}finally{S=ye}}}}(ap)),ap}var yb;function DR(){return yb||(yb=1,sp.exports=OR()),sp.exports}var op={exports:{}},Zt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vb;function PR(){if(vb)return Zt;vb=1;var i=kg();function e(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var r={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(p,g,v){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:E==null?null:""+E,children:p,containerInfo:g,implementation:v}}var c=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Zt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Zt.createPortal=function(p,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return l(p,g,null,v)},Zt.flushSync=function(p){var g=c.T,v=r.p;try{if(c.T=null,r.p=2,p)return p()}finally{c.T=g,r.p=v,r.d.f()}},Zt.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,r.d.C(p,g))},Zt.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},Zt.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var v=g.as,E=m(v,g.crossOrigin),S=typeof g.integrity=="string"?g.integrity:void 0,U=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?r.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:E,integrity:S,fetchPriority:U}):v==="script"&&r.d.X(p,{crossOrigin:E,integrity:S,fetchPriority:U,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Zt.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=m(g.as,g.crossOrigin);r.d.M(p,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&r.d.M(p)},Zt.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,E=m(v,g.crossOrigin);r.d.L(p,v,{crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Zt.preloadModule=function(p,g){if(typeof p=="string")if(g){var v=m(g.as,g.crossOrigin);r.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else r.d.m(p)},Zt.requestFormReset=function(p){r.d.r(p)},Zt.unstable_batchedUpdates=function(p,g){return p(g)},Zt.useFormState=function(p,g,v){return c.H.useFormState(p,g,v)},Zt.useFormStatus=function(){return c.H.useHostTransitionStatus()},Zt.version="19.1.0",Zt}var _b;function n1(){if(_b)return op.exports;_b=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),op.exports=PR(),op.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bb;function kR(){if(bb)return au;bb=1;var i=DR(),e=kg(),t=n1();function r(n){var s="https://react.dev/errors/"+n;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+n+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var s=n,o=n;if(n.alternate)for(;s.return;)s=s.return;else{n=s;do s=n,(s.flags&4098)!==0&&(o=s.return),n=s.return;while(n)}return s.tag===3?o:null}function c(n){if(n.tag===13){var s=n.memoizedState;if(s===null&&(n=n.alternate,n!==null&&(s=n.memoizedState)),s!==null)return s.dehydrated}return null}function m(n){if(l(n)!==n)throw Error(r(188))}function p(n){var s=n.alternate;if(!s){if(s=l(n),s===null)throw Error(r(188));return s!==n?null:n}for(var o=n,u=s;;){var f=o.return;if(f===null)break;var d=f.alternate;if(d===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===d.child){for(d=f.child;d;){if(d===o)return m(f),n;if(d===u)return m(f),s;d=d.sibling}throw Error(r(188))}if(o.return!==u.return)o=f,u=d;else{for(var b=!1,T=f.child;T;){if(T===o){b=!0,o=f,u=d;break}if(T===u){b=!0,u=f,o=d;break}T=T.sibling}if(!b){for(T=d.child;T;){if(T===o){b=!0,o=d,u=f;break}if(T===u){b=!0,u=d,o=f;break}T=T.sibling}if(!b)throw Error(r(189))}}if(o.alternate!==u)throw Error(r(190))}if(o.tag!==3)throw Error(r(188));return o.stateNode.current===o?n:s}function g(n){var s=n.tag;if(s===5||s===26||s===27||s===6)return n;for(n=n.child;n!==null;){if(s=g(n),s!==null)return s;n=n.sibling}return null}var v=Object.assign,E=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),U=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),K=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),G=Symbol.for("react.provider"),X=Symbol.for("react.consumer"),W=Symbol.for("react.context"),ce=Symbol.for("react.forward_ref"),oe=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),N=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function M(n){return n===null||typeof n!="object"?null:(n=k&&n[k]||n["@@iterator"],typeof n=="function"?n:null)}var x=Symbol.for("react.client.reference");function Ft(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===x?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case F:return"Fragment";case V:return"Profiler";case K:return"StrictMode";case oe:return"Suspense";case de:return"SuspenseList";case R:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case U:return"Portal";case W:return(n.displayName||"Context")+".Provider";case X:return(n._context.displayName||"Context")+".Consumer";case ce:var s=n.render;return n=n.displayName,n||(n=s.displayName||s.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case D:return s=n.displayName||null,s!==null?s:Ft(n.type)||"Memo";case I:s=n._payload,n=n._init;try{return Ft(n(s))}catch{}}return null}var ht=Array.isArray,Y=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ye={pending:!1,data:null,method:null,action:null},He=[],O=-1;function te(n){return{current:n}}function ue(n){0>O||(n.current=He[O],He[O]=null,O--)}function se(n,s){O++,He[O]=n.current,n.current=s}var ve=te(null),De=te(null),we=te(null),Mt=te(null);function it(n,s){switch(se(we,s),se(De,n),se(ve,null),s.nodeType){case 9:case 11:n=(n=s.documentElement)&&(n=n.namespaceURI)?z0(n):0;break;default:if(n=s.tagName,s=s.namespaceURI)s=z0(s),n=B0(s,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}ue(ve),se(ve,n)}function Xn(){ue(ve),ue(De),ue(we)}function gr(n){n.memoizedState!==null&&se(Mt,n);var s=ve.current,o=B0(s,n.type);s!==o&&(se(De,n),se(ve,o))}function xi(n){De.current===n&&(ue(ve),ue(De)),Mt.current===n&&(ue(Mt),eu._currentValue=ye)}var Es=Object.prototype.hasOwnProperty,Ts=i.unstable_scheduleCallback,As=i.unstable_cancelCallback,Wo=i.unstable_shouldYield,Zu=i.unstable_requestPaint,Rn=i.unstable_now,nd=i.unstable_getCurrentPriorityLevel,Jo=i.unstable_ImmediatePriority,ba=i.unstable_UserBlockingPriority,Ss=i.unstable_NormalPriority,id=i.unstable_LowPriority,Ea=i.unstable_IdlePriority,Zo=i.log,ec=i.unstable_setDisableYieldValue,ft=null,Ye=null;function gn(n){if(typeof Zo=="function"&&ec(n),Ye&&typeof Ye.setStrictMode=="function")try{Ye.setStrictMode(ft,n)}catch{}}var Wt=Math.clz32?Math.clz32:ws,tc=Math.log,rd=Math.LN2;function ws(n){return n>>>=0,n===0?32:31-(tc(n)/rd|0)|0}var Is=256,Rs=4194304;function Bn(n){var s=n&42;if(s!==0)return s;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Ta(n,s,o){var u=n.pendingLanes;if(u===0)return 0;var f=0,d=n.suspendedLanes,b=n.pingedLanes;n=n.warmLanes;var T=u&134217727;return T!==0?(u=T&~d,u!==0?f=Bn(u):(b&=T,b!==0?f=Bn(b):o||(o=T&~n,o!==0&&(f=Bn(o))))):(T=u&~d,T!==0?f=Bn(T):b!==0?f=Bn(b):o||(o=u&~n,o!==0&&(f=Bn(o)))),f===0?0:s!==0&&s!==f&&(s&d)===0&&(d=f&-f,o=s&-s,d>=o||d===32&&(o&4194048)!==0)?s:f}function Cs(n,s){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&s)===0}function el(n,s){switch(n){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tl(){var n=Is;return Is<<=1,(Is&4194048)===0&&(Is=256),n}function nl(){var n=Rs;return Rs<<=1,(Rs&62914560)===0&&(Rs=4194304),n}function Ni(n){for(var s=[],o=0;31>o;o++)s.push(n);return s}function Oi(n,s){n.pendingLanes|=s,s!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function il(n,s,o,u,f,d){var b=n.pendingLanes;n.pendingLanes=o,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=o,n.entangledLanes&=o,n.errorRecoveryDisabledLanes&=o,n.shellSuspendCounter=0;var T=n.entanglements,C=n.expirationTimes,B=n.hiddenUpdates;for(o=b&~o;0<o;){var Q=31-Wt(o),Z=1<<Q;T[Q]=0,C[Q]=-1;var q=B[Q];if(q!==null)for(B[Q]=null,Q=0;Q<q.length;Q++){var H=q[Q];H!==null&&(H.lane&=-536870913)}o&=~Z}u!==0&&Wn(n,u,0),d!==0&&f===0&&n.tag!==0&&(n.suspendedLanes|=d&~(b&~s))}function Wn(n,s,o){n.pendingLanes|=s,n.suspendedLanes&=~s;var u=31-Wt(s);n.entangledLanes|=s,n.entanglements[u]=n.entanglements[u]|1073741824|o&4194090}function rl(n,s){var o=n.entangledLanes|=s;for(n=n.entanglements;o;){var u=31-Wt(o),f=1<<u;f&s|n[u]&s&&(n[u]|=s),o&=~f}}function yr(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Aa(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function vr(){var n=le.p;return n!==0?n:(n=window.event,n===void 0?32:ab(n.type))}function nc(n,s){var o=le.p;try{return le.p=n,s()}finally{le.p=o}}var at=Math.random().toString(36).slice(2),Ct="__reactFiber$"+at,bt="__reactProps$"+at,Cn="__reactContainer$"+at,sl="__reactEvents$"+at,sd="__reactListeners$"+at,_r="__reactHandles$"+at,ic="__reactResources$"+at,xs="__reactMarker$"+at;function br(n){delete n[Ct],delete n[bt],delete n[sl],delete n[sd],delete n[_r]}function Di(n){var s=n[Ct];if(s)return s;for(var o=n.parentNode;o;){if(s=o[Cn]||o[Ct]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(n=G0(n);n!==null;){if(o=n[Ct])return o;n=G0(n)}return s}n=o,o=n.parentNode}return null}function Jn(n){if(n=n[Ct]||n[Cn]){var s=n.tag;if(s===5||s===6||s===13||s===26||s===27||s===3)return n}return null}function Zn(n){var s=n.tag;if(s===5||s===26||s===27||s===6)return n.stateNode;throw Error(r(33))}function an(n){var s=n[ic];return s||(s=n[ic]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function pt(n){n[xs]=!0}var al=new Set,Sa={};function Fn(n,s){Pi(n,s),Pi(n+"Capture",s)}function Pi(n,s){for(Sa[n]=s,n=0;n<s.length;n++)al.add(s[n])}var rc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),sc={},Ns={};function ac(n){return Es.call(Ns,n)?!0:Es.call(sc,n)?!1:rc.test(n)?Ns[n]=!0:(sc[n]=!0,!1)}function Er(n,s,o){if(ac(s))if(o===null)n.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":n.removeAttribute(s);return;case"boolean":var u=s.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){n.removeAttribute(s);return}}n.setAttribute(s,""+o)}}function ei(n,s,o){if(o===null)n.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(s);return}n.setAttribute(s,""+o)}}function qt(n,s,o,u){if(u===null)n.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(o);return}n.setAttributeNS(s,o,""+u)}}var Os,oc;function ki(n){if(Os===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);Os=s&&s[1]||"",oc=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Os+n+oc}var wa=!1;function Ia(n,s){if(!n||wa)return"";wa=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(s){var Z=function(){throw Error()};if(Object.defineProperty(Z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Z,[])}catch(H){var q=H}Reflect.construct(n,[],Z)}else{try{Z.call()}catch(H){q=H}n.call(Z.prototype)}}else{try{throw Error()}catch(H){q=H}(Z=n())&&typeof Z.catch=="function"&&Z.catch(function(){})}}catch(H){if(H&&q&&typeof H.stack=="string")return[H.stack,q.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=u.DetermineComponentFrameRoot(),b=d[0],T=d[1];if(b&&T){var C=b.split(`
`),B=T.split(`
`);for(f=u=0;u<C.length&&!C[u].includes("DetermineComponentFrameRoot");)u++;for(;f<B.length&&!B[f].includes("DetermineComponentFrameRoot");)f++;if(u===C.length||f===B.length)for(u=C.length-1,f=B.length-1;1<=u&&0<=f&&C[u]!==B[f];)f--;for(;1<=u&&0<=f;u--,f--)if(C[u]!==B[f]){if(u!==1||f!==1)do if(u--,f--,0>f||C[u]!==B[f]){var Q=`
`+C[u].replace(" at new "," at ");return n.displayName&&Q.includes("<anonymous>")&&(Q=Q.replace("<anonymous>",n.displayName)),Q}while(1<=u&&0<=f);break}}}finally{wa=!1,Error.prepareStackTrace=o}return(o=n?n.displayName||n.name:"")?ki(o):""}function ol(n){switch(n.tag){case 26:case 27:case 5:return ki(n.type);case 16:return ki("Lazy");case 13:return ki("Suspense");case 19:return ki("SuspenseList");case 0:case 15:return Ia(n.type,!1);case 11:return Ia(n.type.render,!1);case 1:return Ia(n.type,!0);case 31:return ki("Activity");default:return""}}function Ra(n){try{var s="";do s+=ol(n),n=n.return;while(n);return s}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function on(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ll(n){var s=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function ad(n){var s=ll(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,s),u=""+n[s];if(!n.hasOwnProperty(s)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,d=o.set;return Object.defineProperty(n,s,{configurable:!0,get:function(){return f.call(this)},set:function(b){u=""+b,d.call(this,b)}}),Object.defineProperty(n,s,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(b){u=""+b},stopTracking:function(){n._valueTracker=null,delete n[s]}}}}function Ca(n){n._valueTracker||(n._valueTracker=ad(n))}function ul(n){if(!n)return!1;var s=n._valueTracker;if(!s)return!0;var o=s.getValue(),u="";return n&&(u=ll(n)?n.checked?"true":"false":n.value),n=u,n!==o?(s.setValue(n),!0):!1}function Ds(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var od=/[\n"\\]/g;function Et(n){return n.replace(od,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function yn(n,s,o,u,f,d,b,T){n.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?n.type=b:n.removeAttribute("type"),s!=null?b==="number"?(s===0&&n.value===""||n.value!=s)&&(n.value=""+on(s)):n.value!==""+on(s)&&(n.value=""+on(s)):b!=="submit"&&b!=="reset"||n.removeAttribute("value"),s!=null?Tr(n,b,on(s)):o!=null?Tr(n,b,on(o)):u!=null&&n.removeAttribute("value"),f==null&&d!=null&&(n.defaultChecked=!!d),f!=null&&(n.checked=f&&typeof f!="function"&&typeof f!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?n.name=""+on(T):n.removeAttribute("name")}function Ps(n,s,o,u,f,d,b,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(n.type=d),s!=null||o!=null){if(!(d!=="submit"&&d!=="reset"||s!=null))return;o=o!=null?""+on(o):"",s=s!=null?""+on(s):o,T||s===n.value||(n.value=s),n.defaultValue=s}u=u??f,u=typeof u!="function"&&typeof u!="symbol"&&!!u,n.checked=T?n.checked:!!u,n.defaultChecked=!!u,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(n.name=b)}function Tr(n,s,o){s==="number"&&Ds(n.ownerDocument)===n||n.defaultValue===""+o||(n.defaultValue=""+o)}function Mi(n,s,o,u){if(n=n.options,s){s={};for(var f=0;f<o.length;f++)s["$"+o[f]]=!0;for(o=0;o<n.length;o++)f=s.hasOwnProperty("$"+n[o].value),n[o].selected!==f&&(n[o].selected=f),f&&u&&(n[o].defaultSelected=!0)}else{for(o=""+on(o),s=null,f=0;f<n.length;f++){if(n[f].value===o){n[f].selected=!0,u&&(n[f].defaultSelected=!0);return}s!==null||n[f].disabled||(s=n[f])}s!==null&&(s.selected=!0)}}function We(n,s,o){if(s!=null&&(s=""+on(s),s!==n.value&&(n.value=s),o==null)){n.defaultValue!==s&&(n.defaultValue=s);return}n.defaultValue=o!=null?""+on(o):""}function ks(n,s,o,u){if(s==null){if(u!=null){if(o!=null)throw Error(r(92));if(ht(u)){if(1<u.length)throw Error(r(93));u=u[0]}o=u}o==null&&(o=""),s=o}o=on(s),n.defaultValue=o,u=n.textContent,u===o&&u!==""&&u!==null&&(n.value=u)}function xn(n,s){if(s){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=s;return}}n.textContent=s}var Ms=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function lc(n,s,o){var u=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?n.setProperty(s,""):s==="float"?n.cssFloat="":n[s]="":u?n.setProperty(s,o):typeof o!="number"||o===0||Ms.has(s)?s==="float"?n.cssFloat=o:n[s]=(""+o).trim():n[s]=o+"px"}function cl(n,s,o){if(s!=null&&typeof s!="object")throw Error(r(62));if(n=n.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||s!=null&&s.hasOwnProperty(u)||(u.indexOf("--")===0?n.setProperty(u,""):u==="float"?n.cssFloat="":n[u]="");for(var f in s)u=s[f],s.hasOwnProperty(f)&&o[f]!==u&&lc(n,f,u)}else for(var d in s)s.hasOwnProperty(d)&&lc(n,d,s[d])}function hl(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ld=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ud=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function xa(n){return ud.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var Vi=null;function Nn(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Li=null,Ui=null;function fl(n){var s=Jn(n);if(s&&(n=s.stateNode)){var o=n[bt]||null;e:switch(n=s.stateNode,s.type){case"input":if(yn(n,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Et(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var u=o[s];if(u!==n&&u.form===n.form){var f=u[bt]||null;if(!f)throw Error(r(90));yn(u,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(s=0;s<o.length;s++)u=o[s],u.form===n.form&&ul(u)}break e;case"textarea":We(n,o.value,o.defaultValue);break e;case"select":s=o.value,s!=null&&Mi(n,!!o.multiple,s,!1)}}}var ti=!1;function uc(n,s,o){if(ti)return n(s,o);ti=!0;try{var u=n(s);return u}finally{if(ti=!1,(Li!==null||Ui!==null)&&(nh(),Li&&(s=Li,n=Ui,Ui=Li=null,fl(s),n)))for(s=0;s<n.length;s++)fl(n[s])}}function Vs(n,s){var o=n.stateNode;if(o===null)return null;var u=o[bt]||null;if(u===null)return null;o=u[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(r(231,s,typeof o));return o}var qn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),On=!1;if(qn)try{var Ls={};Object.defineProperty(Ls,"passive",{get:function(){On=!0}}),window.addEventListener("test",Ls,Ls),window.removeEventListener("test",Ls,Ls)}catch{On=!1}var ni=null,Ar=null,ji=null;function dl(){if(ji)return ji;var n,s=Ar,o=s.length,u,f="value"in ni?ni.value:ni.textContent,d=f.length;for(n=0;n<o&&s[n]===f[n];n++);var b=o-n;for(u=1;u<=b&&s[o-u]===f[d-u];u++);return ji=f.slice(n,1<u?1-u:void 0)}function ii(n){var s=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&s===13&&(n=13)):n=s,n===10&&(n=13),32<=n||n===13?n:0}function ri(){return!0}function ml(){return!1}function Vt(n){function s(o,u,f,d,b){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=d,this.target=b,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(o=n[T],this[T]=o?o(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ri:ml,this.isPropagationStopped=ml,this}return v(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ri)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ri)},persist:function(){},isPersistent:ri}),s}var $e={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Na=Vt($e),Us=v({},$e,{view:0,detail:0}),cc=Vt(Us),Oa,Da,si,js=v({},Us,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fs,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==si&&(si&&n.type==="mousemove"?(Oa=n.screenX-si.screenX,Da=n.screenY-si.screenY):Da=Oa=0,si=n),Oa)},movementY:function(n){return"movementY"in n?n.movementY:Da}}),Dn=Vt(js),hc=v({},js,{dataTransfer:0}),cd=Vt(hc),zs=v({},Us,{relatedTarget:0}),Pa=Vt(zs),pl=v({},$e,{animationName:0,elapsedTime:0,pseudoElement:0}),ka=Vt(pl),fc=v({},$e,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Ma=Vt(fc),hd=v({},$e,{data:0}),gl=Vt(hd),Bs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yl(n){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(n):(n=mc[n])?!!s[n]:!1}function Fs(){return yl}var pc=v({},Us,{key:function(n){if(n.key){var s=Bs[n.key]||n.key;if(s!=="Unidentified")return s}return n.type==="keypress"?(n=ii(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?dc[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fs,charCode:function(n){return n.type==="keypress"?ii(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ii(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Va=Vt(pc),gc=v({},js,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vl=Vt(gc),zi=v({},Us,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fs}),yc=Vt(zi),vc=v({},$e,{propertyName:0,elapsedTime:0,pseudoElement:0}),_c=Vt(vc),bc=v({},js,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),La=Vt(bc),ln=v({},$e,{newState:0,oldState:0}),Ec=Vt(ln),Tc=[9,13,27,32],ai=qn&&"CompositionEvent"in window,h=null;qn&&"documentMode"in document&&(h=document.documentMode);var y=qn&&"TextEvent"in window&&!h,_=qn&&(!ai||h&&8<h&&11>=h),A=" ",j=!1;function $(n,s){switch(n){case"keyup":return Tc.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ae(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var je=!1;function xt(n,s){switch(n){case"compositionend":return ae(s);case"keypress":return s.which!==32?null:(j=!0,A);case"textInput":return n=s.data,n===A&&j?null:n;default:return null}}function ze(n,s){if(je)return n==="compositionend"||!ai&&$(n,s)?(n=dl(),ji=Ar=ni=null,je=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return _&&s.locale!=="ko"?null:s.data;default:return null}}var Lt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nt(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s==="input"?!!Lt[n.type]:s==="textarea"}function Bi(n,s,o,u){Li?Ui?Ui.push(u):Ui=[u]:Li=u,s=lh(s,"onChange"),0<s.length&&(o=new Na("onChange","change",null,o,u),n.push({event:o,listeners:s}))}var Ht=null,oi=null;function _l(n){M0(n,0)}function Ac(n){var s=Zn(n);if(ul(s))return n}function nv(n,s){if(n==="change")return s}var iv=!1;if(qn){var fd;if(qn){var dd="oninput"in document;if(!dd){var rv=document.createElement("div");rv.setAttribute("oninput","return;"),dd=typeof rv.oninput=="function"}fd=dd}else fd=!1;iv=fd&&(!document.documentMode||9<document.documentMode)}function sv(){Ht&&(Ht.detachEvent("onpropertychange",av),oi=Ht=null)}function av(n){if(n.propertyName==="value"&&Ac(oi)){var s=[];Bi(s,oi,n,Nn(n)),uc(_l,s)}}function nI(n,s,o){n==="focusin"?(sv(),Ht=s,oi=o,Ht.attachEvent("onpropertychange",av)):n==="focusout"&&sv()}function iI(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ac(oi)}function rI(n,s){if(n==="click")return Ac(s)}function sI(n,s){if(n==="input"||n==="change")return Ac(s)}function aI(n,s){return n===s&&(n!==0||1/n===1/s)||n!==n&&s!==s}var vn=typeof Object.is=="function"?Object.is:aI;function bl(n,s){if(vn(n,s))return!0;if(typeof n!="object"||n===null||typeof s!="object"||s===null)return!1;var o=Object.keys(n),u=Object.keys(s);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!Es.call(s,f)||!vn(n[f],s[f]))return!1}return!0}function ov(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function lv(n,s){var o=ov(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=s&&u>=s)return{node:o,offset:s-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=ov(o)}}function uv(n,s){return n&&s?n===s?!0:n&&n.nodeType===3?!1:s&&s.nodeType===3?uv(n,s.parentNode):"contains"in n?n.contains(s):n.compareDocumentPosition?!!(n.compareDocumentPosition(s)&16):!1:!1}function cv(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var s=Ds(n.document);s instanceof n.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)n=s.contentWindow;else break;s=Ds(n.document)}return s}function md(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s&&(s==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||s==="textarea"||n.contentEditable==="true")}var oI=qn&&"documentMode"in document&&11>=document.documentMode,Ua=null,pd=null,El=null,gd=!1;function hv(n,s,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;gd||Ua==null||Ua!==Ds(u)||(u=Ua,"selectionStart"in u&&md(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),El&&bl(El,u)||(El=u,u=lh(pd,"onSelect"),0<u.length&&(s=new Na("onSelect","select",null,s,o),n.push({event:s,listeners:u}),s.target=Ua)))}function qs(n,s){var o={};return o[n.toLowerCase()]=s.toLowerCase(),o["Webkit"+n]="webkit"+s,o["Moz"+n]="moz"+s,o}var ja={animationend:qs("Animation","AnimationEnd"),animationiteration:qs("Animation","AnimationIteration"),animationstart:qs("Animation","AnimationStart"),transitionrun:qs("Transition","TransitionRun"),transitionstart:qs("Transition","TransitionStart"),transitioncancel:qs("Transition","TransitionCancel"),transitionend:qs("Transition","TransitionEnd")},yd={},fv={};qn&&(fv=document.createElement("div").style,"AnimationEvent"in window||(delete ja.animationend.animation,delete ja.animationiteration.animation,delete ja.animationstart.animation),"TransitionEvent"in window||delete ja.transitionend.transition);function Hs(n){if(yd[n])return yd[n];if(!ja[n])return n;var s=ja[n],o;for(o in s)if(s.hasOwnProperty(o)&&o in fv)return yd[n]=s[o];return n}var dv=Hs("animationend"),mv=Hs("animationiteration"),pv=Hs("animationstart"),lI=Hs("transitionrun"),uI=Hs("transitionstart"),cI=Hs("transitioncancel"),gv=Hs("transitionend"),yv=new Map,vd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vd.push("scrollEnd");function Hn(n,s){yv.set(n,s),Fn(s,[n])}var vv=new WeakMap;function Pn(n,s){if(typeof n=="object"&&n!==null){var o=vv.get(n);return o!==void 0?o:(s={value:n,source:s,stack:Ra(s)},vv.set(n,s),s)}return{value:n,source:s,stack:Ra(s)}}var kn=[],za=0,_d=0;function Sc(){for(var n=za,s=_d=za=0;s<n;){var o=kn[s];kn[s++]=null;var u=kn[s];kn[s++]=null;var f=kn[s];kn[s++]=null;var d=kn[s];if(kn[s++]=null,u!==null&&f!==null){var b=u.pending;b===null?f.next=f:(f.next=b.next,b.next=f),u.pending=f}d!==0&&_v(o,f,d)}}function wc(n,s,o,u){kn[za++]=n,kn[za++]=s,kn[za++]=o,kn[za++]=u,_d|=u,n.lanes|=u,n=n.alternate,n!==null&&(n.lanes|=u)}function bd(n,s,o,u){return wc(n,s,o,u),Ic(n)}function Ba(n,s){return wc(n,null,null,s),Ic(n)}function _v(n,s,o){n.lanes|=o;var u=n.alternate;u!==null&&(u.lanes|=o);for(var f=!1,d=n.return;d!==null;)d.childLanes|=o,u=d.alternate,u!==null&&(u.childLanes|=o),d.tag===22&&(n=d.stateNode,n===null||n._visibility&1||(f=!0)),n=d,d=d.return;return n.tag===3?(d=n.stateNode,f&&s!==null&&(f=31-Wt(o),n=d.hiddenUpdates,u=n[f],u===null?n[f]=[s]:u.push(s),s.lane=o|536870912),d):null}function Ic(n){if(50<$l)throw $l=0,Im=null,Error(r(185));for(var s=n.return;s!==null;)n=s,s=n.return;return n.tag===3?n.stateNode:null}var Fa={};function hI(n,s,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _n(n,s,o,u){return new hI(n,s,o,u)}function Ed(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Fi(n,s){var o=n.alternate;return o===null?(o=_n(n.tag,s,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=s,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&65011712,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,s=n.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o.refCleanup=n.refCleanup,o}function bv(n,s){n.flags&=65011714;var o=n.alternate;return o===null?(n.childLanes=0,n.lanes=s,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=o.childLanes,n.lanes=o.lanes,n.child=o.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=o.memoizedProps,n.memoizedState=o.memoizedState,n.updateQueue=o.updateQueue,n.type=o.type,s=o.dependencies,n.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),n}function Rc(n,s,o,u,f,d){var b=0;if(u=n,typeof n=="function")Ed(n)&&(b=1);else if(typeof n=="string")b=dR(n,o,ve.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case R:return n=_n(31,o,s,f),n.elementType=R,n.lanes=d,n;case F:return Gs(o.children,f,d,s);case K:b=8,f|=24;break;case V:return n=_n(12,o,s,f|2),n.elementType=V,n.lanes=d,n;case oe:return n=_n(13,o,s,f),n.elementType=oe,n.lanes=d,n;case de:return n=_n(19,o,s,f),n.elementType=de,n.lanes=d,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case G:case W:b=10;break e;case X:b=9;break e;case ce:b=11;break e;case D:b=14;break e;case I:b=16,u=null;break e}b=29,o=Error(r(130,n===null?"null":typeof n,"")),u=null}return s=_n(b,o,s,f),s.elementType=n,s.type=u,s.lanes=d,s}function Gs(n,s,o,u){return n=_n(7,n,u,s),n.lanes=o,n}function Td(n,s,o){return n=_n(6,n,null,s),n.lanes=o,n}function Ad(n,s,o){return s=_n(4,n.children!==null?n.children:[],n.key,s),s.lanes=o,s.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},s}var qa=[],Ha=0,Cc=null,xc=0,Mn=[],Vn=0,$s=null,qi=1,Hi="";function Ks(n,s){qa[Ha++]=xc,qa[Ha++]=Cc,Cc=n,xc=s}function Ev(n,s,o){Mn[Vn++]=qi,Mn[Vn++]=Hi,Mn[Vn++]=$s,$s=n;var u=qi;n=Hi;var f=32-Wt(u)-1;u&=~(1<<f),o+=1;var d=32-Wt(s)+f;if(30<d){var b=f-f%5;d=(u&(1<<b)-1).toString(32),u>>=b,f-=b,qi=1<<32-Wt(s)+f|o<<f|u,Hi=d+n}else qi=1<<d|o<<f|u,Hi=n}function Sd(n){n.return!==null&&(Ks(n,1),Ev(n,1,0))}function wd(n){for(;n===Cc;)Cc=qa[--Ha],qa[Ha]=null,xc=qa[--Ha],qa[Ha]=null;for(;n===$s;)$s=Mn[--Vn],Mn[Vn]=null,Hi=Mn[--Vn],Mn[Vn]=null,qi=Mn[--Vn],Mn[Vn]=null}var un=null,dt=null,Ge=!1,Ys=null,li=!1,Id=Error(r(519));function Qs(n){var s=Error(r(418,""));throw Sl(Pn(s,n)),Id}function Tv(n){var s=n.stateNode,o=n.type,u=n.memoizedProps;switch(s[Ct]=n,s[bt]=u,o){case"dialog":Ve("cancel",s),Ve("close",s);break;case"iframe":case"object":case"embed":Ve("load",s);break;case"video":case"audio":for(o=0;o<Yl.length;o++)Ve(Yl[o],s);break;case"source":Ve("error",s);break;case"img":case"image":case"link":Ve("error",s),Ve("load",s);break;case"details":Ve("toggle",s);break;case"input":Ve("invalid",s),Ps(s,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),Ca(s);break;case"select":Ve("invalid",s);break;case"textarea":Ve("invalid",s),ks(s,u.value,u.defaultValue,u.children),Ca(s)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||u.suppressHydrationWarning===!0||j0(s.textContent,o)?(u.popover!=null&&(Ve("beforetoggle",s),Ve("toggle",s)),u.onScroll!=null&&Ve("scroll",s),u.onScrollEnd!=null&&Ve("scrollend",s),u.onClick!=null&&(s.onclick=uh),s=!0):s=!1,s||Qs(n)}function Av(n){for(un=n.return;un;)switch(un.tag){case 5:case 13:li=!1;return;case 27:case 3:li=!0;return;default:un=un.return}}function Tl(n){if(n!==un)return!1;if(!Ge)return Av(n),Ge=!0,!1;var s=n.tag,o;if((o=s!==3&&s!==27)&&((o=s===5)&&(o=n.type,o=!(o!=="form"&&o!=="button")||Fm(n.type,n.memoizedProps)),o=!o),o&&dt&&Qs(n),Av(n),s===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(r(317));e:{for(n=n.nextSibling,s=0;n;){if(n.nodeType===8)if(o=n.data,o==="/$"){if(s===0){dt=$n(n.nextSibling);break e}s--}else o!=="$"&&o!=="$!"&&o!=="$?"||s++;n=n.nextSibling}dt=null}}else s===27?(s=dt,jr(n.type)?(n=$m,$m=null,dt=n):dt=s):dt=un?$n(n.stateNode.nextSibling):null;return!0}function Al(){dt=un=null,Ge=!1}function Sv(){var n=Ys;return n!==null&&(fn===null?fn=n:fn.push.apply(fn,n),Ys=null),n}function Sl(n){Ys===null?Ys=[n]:Ys.push(n)}var Rd=te(null),Xs=null,Gi=null;function Sr(n,s,o){se(Rd,s._currentValue),s._currentValue=o}function $i(n){n._currentValue=Rd.current,ue(Rd)}function Cd(n,s,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&s)!==s?(n.childLanes|=s,u!==null&&(u.childLanes|=s)):u!==null&&(u.childLanes&s)!==s&&(u.childLanes|=s),n===o)break;n=n.return}}function xd(n,s,o,u){var f=n.child;for(f!==null&&(f.return=n);f!==null;){var d=f.dependencies;if(d!==null){var b=f.child;d=d.firstContext;e:for(;d!==null;){var T=d;d=f;for(var C=0;C<s.length;C++)if(T.context===s[C]){d.lanes|=o,T=d.alternate,T!==null&&(T.lanes|=o),Cd(d.return,o,n),u||(b=null);break e}d=T.next}}else if(f.tag===18){if(b=f.return,b===null)throw Error(r(341));b.lanes|=o,d=b.alternate,d!==null&&(d.lanes|=o),Cd(b,o,n),b=null}else b=f.child;if(b!==null)b.return=f;else for(b=f;b!==null;){if(b===n){b=null;break}if(f=b.sibling,f!==null){f.return=b.return,b=f;break}b=b.return}f=b}}function wl(n,s,o,u){n=null;for(var f=s,d=!1;f!==null;){if(!d){if((f.flags&524288)!==0)d=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var b=f.alternate;if(b===null)throw Error(r(387));if(b=b.memoizedProps,b!==null){var T=f.type;vn(f.pendingProps.value,b.value)||(n!==null?n.push(T):n=[T])}}else if(f===Mt.current){if(b=f.alternate,b===null)throw Error(r(387));b.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(n!==null?n.push(eu):n=[eu])}f=f.return}n!==null&&xd(s,n,o,u),s.flags|=262144}function Nc(n){for(n=n.firstContext;n!==null;){if(!vn(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Ws(n){Xs=n,Gi=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Jt(n){return wv(Xs,n)}function Oc(n,s){return Xs===null&&Ws(n),wv(n,s)}function wv(n,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},Gi===null){if(n===null)throw Error(r(308));Gi=s,n.dependencies={lanes:0,firstContext:s},n.flags|=524288}else Gi=Gi.next=s;return o}var fI=typeof AbortController<"u"?AbortController:function(){var n=[],s=this.signal={aborted:!1,addEventListener:function(o,u){n.push(u)}};this.abort=function(){s.aborted=!0,n.forEach(function(o){return o()})}},dI=i.unstable_scheduleCallback,mI=i.unstable_NormalPriority,Ot={$$typeof:W,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Nd(){return{controller:new fI,data:new Map,refCount:0}}function Il(n){n.refCount--,n.refCount===0&&dI(mI,function(){n.controller.abort()})}var Rl=null,Od=0,Ga=0,$a=null;function pI(n,s){if(Rl===null){var o=Rl=[];Od=0,Ga=Pm(),$a={status:"pending",value:void 0,then:function(u){o.push(u)}}}return Od++,s.then(Iv,Iv),s}function Iv(){if(--Od===0&&Rl!==null){$a!==null&&($a.status="fulfilled");var n=Rl;Rl=null,Ga=0,$a=null;for(var s=0;s<n.length;s++)(0,n[s])()}}function gI(n,s){var o=[],u={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return n.then(function(){u.status="fulfilled",u.value=s;for(var f=0;f<o.length;f++)(0,o[f])(s)},function(f){for(u.status="rejected",u.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),u}var Rv=Y.S;Y.S=function(n,s){typeof s=="object"&&s!==null&&typeof s.then=="function"&&pI(n,s),Rv!==null&&Rv(n,s)};var Js=te(null);function Dd(){var n=Js.current;return n!==null?n:rt.pooledCache}function Dc(n,s){s===null?se(Js,Js.current):se(Js,s.pool)}function Cv(){var n=Dd();return n===null?null:{parent:Ot._currentValue,pool:n}}var Cl=Error(r(460)),xv=Error(r(474)),Pc=Error(r(542)),Pd={then:function(){}};function Nv(n){return n=n.status,n==="fulfilled"||n==="rejected"}function kc(){}function Ov(n,s,o){switch(o=n[o],o===void 0?n.push(s):o!==s&&(s.then(kc,kc),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw n=s.reason,Pv(n),n;default:if(typeof s.status=="string")s.then(kc,kc);else{if(n=rt,n!==null&&100<n.shellSuspendCounter)throw Error(r(482));n=s,n.status="pending",n.then(function(u){if(s.status==="pending"){var f=s;f.status="fulfilled",f.value=u}},function(u){if(s.status==="pending"){var f=s;f.status="rejected",f.reason=u}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw n=s.reason,Pv(n),n}throw xl=s,Cl}}var xl=null;function Dv(){if(xl===null)throw Error(r(459));var n=xl;return xl=null,n}function Pv(n){if(n===Cl||n===Pc)throw Error(r(483))}var wr=!1;function kd(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Md(n,s){n=n.updateQueue,s.updateQueue===n&&(s.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Ir(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Rr(n,s,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Qe&2)!==0){var f=u.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s,s=Ic(n),_v(n,null,o),s}return wc(n,u,s,o),Ic(n)}function Nl(n,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194048)!==0)){var u=s.lanes;u&=n.pendingLanes,o|=u,s.lanes=o,rl(n,o)}}function Vd(n,s){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,d=null;if(o=o.firstBaseUpdate,o!==null){do{var b={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};d===null?f=d=b:d=d.next=b,o=o.next}while(o!==null);d===null?f=d=s:d=d.next=s}else f=d=s;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:d,shared:u.shared,callbacks:u.callbacks},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=s:n.next=s,o.lastBaseUpdate=s}var Ld=!1;function Ol(){if(Ld){var n=$a;if(n!==null)throw n}}function Dl(n,s,o,u){Ld=!1;var f=n.updateQueue;wr=!1;var d=f.firstBaseUpdate,b=f.lastBaseUpdate,T=f.shared.pending;if(T!==null){f.shared.pending=null;var C=T,B=C.next;C.next=null,b===null?d=B:b.next=B,b=C;var Q=n.alternate;Q!==null&&(Q=Q.updateQueue,T=Q.lastBaseUpdate,T!==b&&(T===null?Q.firstBaseUpdate=B:T.next=B,Q.lastBaseUpdate=C))}if(d!==null){var Z=f.baseState;b=0,Q=B=C=null,T=d;do{var q=T.lane&-536870913,H=q!==T.lane;if(H?(Be&q)===q:(u&q)===q){q!==0&&q===Ga&&(Ld=!0),Q!==null&&(Q=Q.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var Ae=n,be=T;q=s;var et=o;switch(be.tag){case 1:if(Ae=be.payload,typeof Ae=="function"){Z=Ae.call(et,Z,q);break e}Z=Ae;break e;case 3:Ae.flags=Ae.flags&-65537|128;case 0:if(Ae=be.payload,q=typeof Ae=="function"?Ae.call(et,Z,q):Ae,q==null)break e;Z=v({},Z,q);break e;case 2:wr=!0}}q=T.callback,q!==null&&(n.flags|=64,H&&(n.flags|=8192),H=f.callbacks,H===null?f.callbacks=[q]:H.push(q))}else H={lane:q,tag:T.tag,payload:T.payload,callback:T.callback,next:null},Q===null?(B=Q=H,C=Z):Q=Q.next=H,b|=q;if(T=T.next,T===null){if(T=f.shared.pending,T===null)break;H=T,T=H.next,H.next=null,f.lastBaseUpdate=H,f.shared.pending=null}}while(!0);Q===null&&(C=Z),f.baseState=C,f.firstBaseUpdate=B,f.lastBaseUpdate=Q,d===null&&(f.shared.lanes=0),Mr|=b,n.lanes=b,n.memoizedState=Z}}function kv(n,s){if(typeof n!="function")throw Error(r(191,n));n.call(s)}function Mv(n,s){var o=n.callbacks;if(o!==null)for(n.callbacks=null,n=0;n<o.length;n++)kv(o[n],s)}var Ka=te(null),Mc=te(0);function Vv(n,s){n=Zi,se(Mc,n),se(Ka,s),Zi=n|s.baseLanes}function Ud(){se(Mc,Zi),se(Ka,Ka.current)}function jd(){Zi=Mc.current,ue(Ka),ue(Mc)}var Cr=0,Ne=null,Je=null,Tt=null,Vc=!1,Ya=!1,Zs=!1,Lc=0,Pl=0,Qa=null,yI=0;function gt(){throw Error(r(321))}function zd(n,s){if(s===null)return!1;for(var o=0;o<s.length&&o<n.length;o++)if(!vn(n[o],s[o]))return!1;return!0}function Bd(n,s,o,u,f,d){return Cr=d,Ne=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Y.H=n===null||n.memoizedState===null?__:b_,Zs=!1,d=o(u,f),Zs=!1,Ya&&(d=Uv(s,o,u,f)),Lv(n),d}function Lv(n){Y.H=qc;var s=Je!==null&&Je.next!==null;if(Cr=0,Tt=Je=Ne=null,Vc=!1,Pl=0,Qa=null,s)throw Error(r(300));n===null||Ut||(n=n.dependencies,n!==null&&Nc(n)&&(Ut=!0))}function Uv(n,s,o,u){Ne=n;var f=0;do{if(Ya&&(Qa=null),Pl=0,Ya=!1,25<=f)throw Error(r(301));if(f+=1,Tt=Je=null,n.updateQueue!=null){var d=n.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}Y.H=SI,d=s(o,u)}while(Ya);return d}function vI(){var n=Y.H,s=n.useState()[0];return s=typeof s.then=="function"?kl(s):s,n=n.useState()[0],(Je!==null?Je.memoizedState:null)!==n&&(Ne.flags|=1024),s}function Fd(){var n=Lc!==0;return Lc=0,n}function qd(n,s,o){s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~o}function Hd(n){if(Vc){for(n=n.memoizedState;n!==null;){var s=n.queue;s!==null&&(s.pending=null),n=n.next}Vc=!1}Cr=0,Tt=Je=Ne=null,Ya=!1,Pl=Lc=0,Qa=null}function cn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tt===null?Ne.memoizedState=Tt=n:Tt=Tt.next=n,Tt}function At(){if(Je===null){var n=Ne.alternate;n=n!==null?n.memoizedState:null}else n=Je.next;var s=Tt===null?Ne.memoizedState:Tt.next;if(s!==null)Tt=s,Je=n;else{if(n===null)throw Ne.alternate===null?Error(r(467)):Error(r(310));Je=n,n={memoizedState:Je.memoizedState,baseState:Je.baseState,baseQueue:Je.baseQueue,queue:Je.queue,next:null},Tt===null?Ne.memoizedState=Tt=n:Tt=Tt.next=n}return Tt}function Gd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function kl(n){var s=Pl;return Pl+=1,Qa===null&&(Qa=[]),n=Ov(Qa,n,s),s=Ne,(Tt===null?s.memoizedState:Tt.next)===null&&(s=s.alternate,Y.H=s===null||s.memoizedState===null?__:b_),n}function Uc(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return kl(n);if(n.$$typeof===W)return Jt(n)}throw Error(r(438,String(n)))}function $d(n){var s=null,o=Ne.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var u=Ne.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(s={data:u.data.map(function(f){return f.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=Gd(),Ne.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(n),u=0;u<n;u++)o[u]=N;return s.index++,o}function Ki(n,s){return typeof s=="function"?s(n):s}function jc(n){var s=At();return Kd(s,Je,n)}function Kd(n,s,o){var u=n.queue;if(u===null)throw Error(r(311));u.lastRenderedReducer=o;var f=n.baseQueue,d=u.pending;if(d!==null){if(f!==null){var b=f.next;f.next=d.next,d.next=b}s.baseQueue=f=d,u.pending=null}if(d=n.baseState,f===null)n.memoizedState=d;else{s=f.next;var T=b=null,C=null,B=s,Q=!1;do{var Z=B.lane&-536870913;if(Z!==B.lane?(Be&Z)===Z:(Cr&Z)===Z){var q=B.revertLane;if(q===0)C!==null&&(C=C.next={lane:0,revertLane:0,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),Z===Ga&&(Q=!0);else if((Cr&q)===q){B=B.next,q===Ga&&(Q=!0);continue}else Z={lane:0,revertLane:B.revertLane,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},C===null?(T=C=Z,b=d):C=C.next=Z,Ne.lanes|=q,Mr|=q;Z=B.action,Zs&&o(d,Z),d=B.hasEagerState?B.eagerState:o(d,Z)}else q={lane:Z,revertLane:B.revertLane,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},C===null?(T=C=q,b=d):C=C.next=q,Ne.lanes|=Z,Mr|=Z;B=B.next}while(B!==null&&B!==s);if(C===null?b=d:C.next=T,!vn(d,n.memoizedState)&&(Ut=!0,Q&&(o=$a,o!==null)))throw o;n.memoizedState=d,n.baseState=b,n.baseQueue=C,u.lastRenderedState=d}return f===null&&(u.lanes=0),[n.memoizedState,u.dispatch]}function Yd(n){var s=At(),o=s.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=n;var u=o.dispatch,f=o.pending,d=s.memoizedState;if(f!==null){o.pending=null;var b=f=f.next;do d=n(d,b.action),b=b.next;while(b!==f);vn(d,s.memoizedState)||(Ut=!0),s.memoizedState=d,s.baseQueue===null&&(s.baseState=d),o.lastRenderedState=d}return[d,u]}function jv(n,s,o){var u=Ne,f=At(),d=Ge;if(d){if(o===void 0)throw Error(r(407));o=o()}else o=s();var b=!vn((Je||f).memoizedState,o);b&&(f.memoizedState=o,Ut=!0),f=f.queue;var T=Fv.bind(null,u,f,n);if(Ml(2048,8,T,[n]),f.getSnapshot!==s||b||Tt!==null&&Tt.memoizedState.tag&1){if(u.flags|=2048,Xa(9,zc(),Bv.bind(null,u,f,o,s),null),rt===null)throw Error(r(349));d||(Cr&124)!==0||zv(u,s,o)}return o}function zv(n,s,o){n.flags|=16384,n={getSnapshot:s,value:o},s=Ne.updateQueue,s===null?(s=Gd(),Ne.updateQueue=s,s.stores=[n]):(o=s.stores,o===null?s.stores=[n]:o.push(n))}function Bv(n,s,o,u){s.value=o,s.getSnapshot=u,qv(s)&&Hv(n)}function Fv(n,s,o){return o(function(){qv(s)&&Hv(n)})}function qv(n){var s=n.getSnapshot;n=n.value;try{var o=s();return!vn(n,o)}catch{return!0}}function Hv(n){var s=Ba(n,2);s!==null&&Sn(s,n,2)}function Qd(n){var s=cn();if(typeof n=="function"){var o=n;if(n=o(),Zs){gn(!0);try{o()}finally{gn(!1)}}}return s.memoizedState=s.baseState=n,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:n},s}function Gv(n,s,o,u){return n.baseState=o,Kd(n,Je,typeof u=="function"?u:Ki)}function _I(n,s,o,u,f){if(Fc(n))throw Error(r(485));if(n=s.action,n!==null){var d={payload:f,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){d.listeners.push(b)}};Y.T!==null?o(!0):d.isTransition=!1,u(d),o=s.pending,o===null?(d.next=s.pending=d,$v(s,d)):(d.next=o.next,s.pending=o.next=d)}}function $v(n,s){var o=s.action,u=s.payload,f=n.state;if(s.isTransition){var d=Y.T,b={};Y.T=b;try{var T=o(f,u),C=Y.S;C!==null&&C(b,T),Kv(n,s,T)}catch(B){Xd(n,s,B)}finally{Y.T=d}}else try{d=o(f,u),Kv(n,s,d)}catch(B){Xd(n,s,B)}}function Kv(n,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){Yv(n,s,u)},function(u){return Xd(n,s,u)}):Yv(n,s,o)}function Yv(n,s,o){s.status="fulfilled",s.value=o,Qv(s),n.state=o,s=n.pending,s!==null&&(o=s.next,o===s?n.pending=null:(o=o.next,s.next=o,$v(n,o)))}function Xd(n,s,o){var u=n.pending;if(n.pending=null,u!==null){u=u.next;do s.status="rejected",s.reason=o,Qv(s),s=s.next;while(s!==u)}n.action=null}function Qv(n){n=n.listeners;for(var s=0;s<n.length;s++)(0,n[s])()}function Xv(n,s){return s}function Wv(n,s){if(Ge){var o=rt.formState;if(o!==null){e:{var u=Ne;if(Ge){if(dt){t:{for(var f=dt,d=li;f.nodeType!==8;){if(!d){f=null;break t}if(f=$n(f.nextSibling),f===null){f=null;break t}}d=f.data,f=d==="F!"||d==="F"?f:null}if(f){dt=$n(f.nextSibling),u=f.data==="F!";break e}}Qs(u)}u=!1}u&&(s=o[0])}}return o=cn(),o.memoizedState=o.baseState=s,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xv,lastRenderedState:s},o.queue=u,o=g_.bind(null,Ne,u),u.dispatch=o,u=Qd(!1),d=tm.bind(null,Ne,!1,u.queue),u=cn(),f={state:s,dispatch:null,action:n,pending:null},u.queue=f,o=_I.bind(null,Ne,f,d,o),f.dispatch=o,u.memoizedState=n,[s,o,!1]}function Jv(n){var s=At();return Zv(s,Je,n)}function Zv(n,s,o){if(s=Kd(n,s,Xv)[0],n=jc(Ki)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var u=kl(s)}catch(b){throw b===Cl?Pc:b}else u=s;s=At();var f=s.queue,d=f.dispatch;return o!==s.memoizedState&&(Ne.flags|=2048,Xa(9,zc(),bI.bind(null,f,o),null)),[u,d,n]}function bI(n,s){n.action=s}function e_(n){var s=At(),o=Je;if(o!==null)return Zv(s,o,n);At(),s=s.memoizedState,o=At();var u=o.queue.dispatch;return o.memoizedState=n,[s,u,!1]}function Xa(n,s,o,u){return n={tag:n,create:o,deps:u,inst:s,next:null},s=Ne.updateQueue,s===null&&(s=Gd(),Ne.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,s.lastEffect=n),n}function zc(){return{destroy:void 0,resource:void 0}}function t_(){return At().memoizedState}function Bc(n,s,o,u){var f=cn();u=u===void 0?null:u,Ne.flags|=n,f.memoizedState=Xa(1|s,zc(),o,u)}function Ml(n,s,o,u){var f=At();u=u===void 0?null:u;var d=f.memoizedState.inst;Je!==null&&u!==null&&zd(u,Je.memoizedState.deps)?f.memoizedState=Xa(s,d,o,u):(Ne.flags|=n,f.memoizedState=Xa(1|s,d,o,u))}function n_(n,s){Bc(8390656,8,n,s)}function i_(n,s){Ml(2048,8,n,s)}function r_(n,s){return Ml(4,2,n,s)}function s_(n,s){return Ml(4,4,n,s)}function a_(n,s){if(typeof s=="function"){n=n();var o=s(n);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return n=n(),s.current=n,function(){s.current=null}}function o_(n,s,o){o=o!=null?o.concat([n]):null,Ml(4,4,a_.bind(null,s,n),o)}function Wd(){}function l_(n,s){var o=At();s=s===void 0?null:s;var u=o.memoizedState;return s!==null&&zd(s,u[1])?u[0]:(o.memoizedState=[n,s],n)}function u_(n,s){var o=At();s=s===void 0?null:s;var u=o.memoizedState;if(s!==null&&zd(s,u[1]))return u[0];if(u=n(),Zs){gn(!0);try{n()}finally{gn(!1)}}return o.memoizedState=[u,s],u}function Jd(n,s,o){return o===void 0||(Cr&1073741824)!==0?n.memoizedState=s:(n.memoizedState=o,n=f0(),Ne.lanes|=n,Mr|=n,o)}function c_(n,s,o,u){return vn(o,s)?o:Ka.current!==null?(n=Jd(n,o,u),vn(n,s)||(Ut=!0),n):(Cr&42)===0?(Ut=!0,n.memoizedState=o):(n=f0(),Ne.lanes|=n,Mr|=n,s)}function h_(n,s,o,u,f){var d=le.p;le.p=d!==0&&8>d?d:8;var b=Y.T,T={};Y.T=T,tm(n,!1,s,o);try{var C=f(),B=Y.S;if(B!==null&&B(T,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var Q=gI(C,u);Vl(n,s,Q,An(n))}else Vl(n,s,u,An(n))}catch(Z){Vl(n,s,{then:function(){},status:"rejected",reason:Z},An())}finally{le.p=d,Y.T=b}}function EI(){}function Zd(n,s,o,u){if(n.tag!==5)throw Error(r(476));var f=f_(n).queue;h_(n,f,s,ye,o===null?EI:function(){return d_(n),o(u)})}function f_(n){var s=n.memoizedState;if(s!==null)return s;s={memoizedState:ye,baseState:ye,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:ye},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:o},next:null},n.memoizedState=s,n=n.alternate,n!==null&&(n.memoizedState=s),s}function d_(n){var s=f_(n).next.queue;Vl(n,s,{},An())}function em(){return Jt(eu)}function m_(){return At().memoizedState}function p_(){return At().memoizedState}function TI(n){for(var s=n.return;s!==null;){switch(s.tag){case 24:case 3:var o=An();n=Ir(o);var u=Rr(s,n,o);u!==null&&(Sn(u,s,o),Nl(u,s,o)),s={cache:Nd()},n.payload=s;return}s=s.return}}function AI(n,s,o){var u=An();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},Fc(n)?y_(s,o):(o=bd(n,s,o,u),o!==null&&(Sn(o,n,u),v_(o,s,u)))}function g_(n,s,o){var u=An();Vl(n,s,o,u)}function Vl(n,s,o,u){var f={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(Fc(n))y_(s,f);else{var d=n.alternate;if(n.lanes===0&&(d===null||d.lanes===0)&&(d=s.lastRenderedReducer,d!==null))try{var b=s.lastRenderedState,T=d(b,o);if(f.hasEagerState=!0,f.eagerState=T,vn(T,b))return wc(n,s,f,0),rt===null&&Sc(),!1}catch{}finally{}if(o=bd(n,s,f,u),o!==null)return Sn(o,n,u),v_(o,s,u),!0}return!1}function tm(n,s,o,u){if(u={lane:2,revertLane:Pm(),action:u,hasEagerState:!1,eagerState:null,next:null},Fc(n)){if(s)throw Error(r(479))}else s=bd(n,o,u,2),s!==null&&Sn(s,n,2)}function Fc(n){var s=n.alternate;return n===Ne||s!==null&&s===Ne}function y_(n,s){Ya=Vc=!0;var o=n.pending;o===null?s.next=s:(s.next=o.next,o.next=s),n.pending=s}function v_(n,s,o){if((o&4194048)!==0){var u=s.lanes;u&=n.pendingLanes,o|=u,s.lanes=o,rl(n,o)}}var qc={readContext:Jt,use:Uc,useCallback:gt,useContext:gt,useEffect:gt,useImperativeHandle:gt,useLayoutEffect:gt,useInsertionEffect:gt,useMemo:gt,useReducer:gt,useRef:gt,useState:gt,useDebugValue:gt,useDeferredValue:gt,useTransition:gt,useSyncExternalStore:gt,useId:gt,useHostTransitionStatus:gt,useFormState:gt,useActionState:gt,useOptimistic:gt,useMemoCache:gt,useCacheRefresh:gt},__={readContext:Jt,use:Uc,useCallback:function(n,s){return cn().memoizedState=[n,s===void 0?null:s],n},useContext:Jt,useEffect:n_,useImperativeHandle:function(n,s,o){o=o!=null?o.concat([n]):null,Bc(4194308,4,a_.bind(null,s,n),o)},useLayoutEffect:function(n,s){return Bc(4194308,4,n,s)},useInsertionEffect:function(n,s){Bc(4,2,n,s)},useMemo:function(n,s){var o=cn();s=s===void 0?null:s;var u=n();if(Zs){gn(!0);try{n()}finally{gn(!1)}}return o.memoizedState=[u,s],u},useReducer:function(n,s,o){var u=cn();if(o!==void 0){var f=o(s);if(Zs){gn(!0);try{o(s)}finally{gn(!1)}}}else f=s;return u.memoizedState=u.baseState=f,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:f},u.queue=n,n=n.dispatch=AI.bind(null,Ne,n),[u.memoizedState,n]},useRef:function(n){var s=cn();return n={current:n},s.memoizedState=n},useState:function(n){n=Qd(n);var s=n.queue,o=g_.bind(null,Ne,s);return s.dispatch=o,[n.memoizedState,o]},useDebugValue:Wd,useDeferredValue:function(n,s){var o=cn();return Jd(o,n,s)},useTransition:function(){var n=Qd(!1);return n=h_.bind(null,Ne,n.queue,!0,!1),cn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,s,o){var u=Ne,f=cn();if(Ge){if(o===void 0)throw Error(r(407));o=o()}else{if(o=s(),rt===null)throw Error(r(349));(Be&124)!==0||zv(u,s,o)}f.memoizedState=o;var d={value:o,getSnapshot:s};return f.queue=d,n_(Fv.bind(null,u,d,n),[n]),u.flags|=2048,Xa(9,zc(),Bv.bind(null,u,d,o,s),null),o},useId:function(){var n=cn(),s=rt.identifierPrefix;if(Ge){var o=Hi,u=qi;o=(u&~(1<<32-Wt(u)-1)).toString(32)+o,s="«"+s+"R"+o,o=Lc++,0<o&&(s+="H"+o.toString(32)),s+="»"}else o=yI++,s="«"+s+"r"+o.toString(32)+"»";return n.memoizedState=s},useHostTransitionStatus:em,useFormState:Wv,useActionState:Wv,useOptimistic:function(n){var s=cn();s.memoizedState=s.baseState=n;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=tm.bind(null,Ne,!0,o),o.dispatch=s,[n,s]},useMemoCache:$d,useCacheRefresh:function(){return cn().memoizedState=TI.bind(null,Ne)}},b_={readContext:Jt,use:Uc,useCallback:l_,useContext:Jt,useEffect:i_,useImperativeHandle:o_,useInsertionEffect:r_,useLayoutEffect:s_,useMemo:u_,useReducer:jc,useRef:t_,useState:function(){return jc(Ki)},useDebugValue:Wd,useDeferredValue:function(n,s){var o=At();return c_(o,Je.memoizedState,n,s)},useTransition:function(){var n=jc(Ki)[0],s=At().memoizedState;return[typeof n=="boolean"?n:kl(n),s]},useSyncExternalStore:jv,useId:m_,useHostTransitionStatus:em,useFormState:Jv,useActionState:Jv,useOptimistic:function(n,s){var o=At();return Gv(o,Je,n,s)},useMemoCache:$d,useCacheRefresh:p_},SI={readContext:Jt,use:Uc,useCallback:l_,useContext:Jt,useEffect:i_,useImperativeHandle:o_,useInsertionEffect:r_,useLayoutEffect:s_,useMemo:u_,useReducer:Yd,useRef:t_,useState:function(){return Yd(Ki)},useDebugValue:Wd,useDeferredValue:function(n,s){var o=At();return Je===null?Jd(o,n,s):c_(o,Je.memoizedState,n,s)},useTransition:function(){var n=Yd(Ki)[0],s=At().memoizedState;return[typeof n=="boolean"?n:kl(n),s]},useSyncExternalStore:jv,useId:m_,useHostTransitionStatus:em,useFormState:e_,useActionState:e_,useOptimistic:function(n,s){var o=At();return Je!==null?Gv(o,Je,n,s):(o.baseState=n,[n,o.queue.dispatch])},useMemoCache:$d,useCacheRefresh:p_},Wa=null,Ll=0;function Hc(n){var s=Ll;return Ll+=1,Wa===null&&(Wa=[]),Ov(Wa,n,s)}function Ul(n,s){s=s.props.ref,n.ref=s!==void 0?s:null}function Gc(n,s){throw s.$$typeof===E?Error(r(525)):(n=Object.prototype.toString.call(s),Error(r(31,n==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":n)))}function E_(n){var s=n._init;return s(n._payload)}function T_(n){function s(L,P){if(n){var z=L.deletions;z===null?(L.deletions=[P],L.flags|=16):z.push(P)}}function o(L,P){if(!n)return null;for(;P!==null;)s(L,P),P=P.sibling;return null}function u(L){for(var P=new Map;L!==null;)L.key!==null?P.set(L.key,L):P.set(L.index,L),L=L.sibling;return P}function f(L,P){return L=Fi(L,P),L.index=0,L.sibling=null,L}function d(L,P,z){return L.index=z,n?(z=L.alternate,z!==null?(z=z.index,z<P?(L.flags|=67108866,P):z):(L.flags|=67108866,P)):(L.flags|=1048576,P)}function b(L){return n&&L.alternate===null&&(L.flags|=67108866),L}function T(L,P,z,J){return P===null||P.tag!==6?(P=Td(z,L.mode,J),P.return=L,P):(P=f(P,z),P.return=L,P)}function C(L,P,z,J){var fe=z.type;return fe===F?Q(L,P,z.props.children,J,z.key):P!==null&&(P.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===I&&E_(fe)===P.type)?(P=f(P,z.props),Ul(P,z),P.return=L,P):(P=Rc(z.type,z.key,z.props,null,L.mode,J),Ul(P,z),P.return=L,P)}function B(L,P,z,J){return P===null||P.tag!==4||P.stateNode.containerInfo!==z.containerInfo||P.stateNode.implementation!==z.implementation?(P=Ad(z,L.mode,J),P.return=L,P):(P=f(P,z.children||[]),P.return=L,P)}function Q(L,P,z,J,fe){return P===null||P.tag!==7?(P=Gs(z,L.mode,J,fe),P.return=L,P):(P=f(P,z),P.return=L,P)}function Z(L,P,z){if(typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint")return P=Td(""+P,L.mode,z),P.return=L,P;if(typeof P=="object"&&P!==null){switch(P.$$typeof){case S:return z=Rc(P.type,P.key,P.props,null,L.mode,z),Ul(z,P),z.return=L,z;case U:return P=Ad(P,L.mode,z),P.return=L,P;case I:var J=P._init;return P=J(P._payload),Z(L,P,z)}if(ht(P)||M(P))return P=Gs(P,L.mode,z,null),P.return=L,P;if(typeof P.then=="function")return Z(L,Hc(P),z);if(P.$$typeof===W)return Z(L,Oc(L,P),z);Gc(L,P)}return null}function q(L,P,z,J){var fe=P!==null?P.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return fe!==null?null:T(L,P,""+z,J);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case S:return z.key===fe?C(L,P,z,J):null;case U:return z.key===fe?B(L,P,z,J):null;case I:return fe=z._init,z=fe(z._payload),q(L,P,z,J)}if(ht(z)||M(z))return fe!==null?null:Q(L,P,z,J,null);if(typeof z.then=="function")return q(L,P,Hc(z),J);if(z.$$typeof===W)return q(L,P,Oc(L,z),J);Gc(L,z)}return null}function H(L,P,z,J,fe){if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return L=L.get(z)||null,T(P,L,""+J,fe);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case S:return L=L.get(J.key===null?z:J.key)||null,C(P,L,J,fe);case U:return L=L.get(J.key===null?z:J.key)||null,B(P,L,J,fe);case I:var Pe=J._init;return J=Pe(J._payload),H(L,P,z,J,fe)}if(ht(J)||M(J))return L=L.get(z)||null,Q(P,L,J,fe,null);if(typeof J.then=="function")return H(L,P,z,Hc(J),fe);if(J.$$typeof===W)return H(L,P,z,Oc(P,J),fe);Gc(P,J)}return null}function Ae(L,P,z,J){for(var fe=null,Pe=null,pe=P,Ee=P=0,zt=null;pe!==null&&Ee<z.length;Ee++){pe.index>Ee?(zt=pe,pe=null):zt=pe.sibling;var qe=q(L,pe,z[Ee],J);if(qe===null){pe===null&&(pe=zt);break}n&&pe&&qe.alternate===null&&s(L,pe),P=d(qe,P,Ee),Pe===null?fe=qe:Pe.sibling=qe,Pe=qe,pe=zt}if(Ee===z.length)return o(L,pe),Ge&&Ks(L,Ee),fe;if(pe===null){for(;Ee<z.length;Ee++)pe=Z(L,z[Ee],J),pe!==null&&(P=d(pe,P,Ee),Pe===null?fe=pe:Pe.sibling=pe,Pe=pe);return Ge&&Ks(L,Ee),fe}for(pe=u(pe);Ee<z.length;Ee++)zt=H(pe,L,Ee,z[Ee],J),zt!==null&&(n&&zt.alternate!==null&&pe.delete(zt.key===null?Ee:zt.key),P=d(zt,P,Ee),Pe===null?fe=zt:Pe.sibling=zt,Pe=zt);return n&&pe.forEach(function(Hr){return s(L,Hr)}),Ge&&Ks(L,Ee),fe}function be(L,P,z,J){if(z==null)throw Error(r(151));for(var fe=null,Pe=null,pe=P,Ee=P=0,zt=null,qe=z.next();pe!==null&&!qe.done;Ee++,qe=z.next()){pe.index>Ee?(zt=pe,pe=null):zt=pe.sibling;var Hr=q(L,pe,qe.value,J);if(Hr===null){pe===null&&(pe=zt);break}n&&pe&&Hr.alternate===null&&s(L,pe),P=d(Hr,P,Ee),Pe===null?fe=Hr:Pe.sibling=Hr,Pe=Hr,pe=zt}if(qe.done)return o(L,pe),Ge&&Ks(L,Ee),fe;if(pe===null){for(;!qe.done;Ee++,qe=z.next())qe=Z(L,qe.value,J),qe!==null&&(P=d(qe,P,Ee),Pe===null?fe=qe:Pe.sibling=qe,Pe=qe);return Ge&&Ks(L,Ee),fe}for(pe=u(pe);!qe.done;Ee++,qe=z.next())qe=H(pe,L,Ee,qe.value,J),qe!==null&&(n&&qe.alternate!==null&&pe.delete(qe.key===null?Ee:qe.key),P=d(qe,P,Ee),Pe===null?fe=qe:Pe.sibling=qe,Pe=qe);return n&&pe.forEach(function(wR){return s(L,wR)}),Ge&&Ks(L,Ee),fe}function et(L,P,z,J){if(typeof z=="object"&&z!==null&&z.type===F&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case S:e:{for(var fe=z.key;P!==null;){if(P.key===fe){if(fe=z.type,fe===F){if(P.tag===7){o(L,P.sibling),J=f(P,z.props.children),J.return=L,L=J;break e}}else if(P.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===I&&E_(fe)===P.type){o(L,P.sibling),J=f(P,z.props),Ul(J,z),J.return=L,L=J;break e}o(L,P);break}else s(L,P);P=P.sibling}z.type===F?(J=Gs(z.props.children,L.mode,J,z.key),J.return=L,L=J):(J=Rc(z.type,z.key,z.props,null,L.mode,J),Ul(J,z),J.return=L,L=J)}return b(L);case U:e:{for(fe=z.key;P!==null;){if(P.key===fe)if(P.tag===4&&P.stateNode.containerInfo===z.containerInfo&&P.stateNode.implementation===z.implementation){o(L,P.sibling),J=f(P,z.children||[]),J.return=L,L=J;break e}else{o(L,P);break}else s(L,P);P=P.sibling}J=Ad(z,L.mode,J),J.return=L,L=J}return b(L);case I:return fe=z._init,z=fe(z._payload),et(L,P,z,J)}if(ht(z))return Ae(L,P,z,J);if(M(z)){if(fe=M(z),typeof fe!="function")throw Error(r(150));return z=fe.call(z),be(L,P,z,J)}if(typeof z.then=="function")return et(L,P,Hc(z),J);if(z.$$typeof===W)return et(L,P,Oc(L,z),J);Gc(L,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,P!==null&&P.tag===6?(o(L,P.sibling),J=f(P,z),J.return=L,L=J):(o(L,P),J=Td(z,L.mode,J),J.return=L,L=J),b(L)):o(L,P)}return function(L,P,z,J){try{Ll=0;var fe=et(L,P,z,J);return Wa=null,fe}catch(pe){if(pe===Cl||pe===Pc)throw pe;var Pe=_n(29,pe,null,L.mode);return Pe.lanes=J,Pe.return=L,Pe}finally{}}}var Ja=T_(!0),A_=T_(!1),Ln=te(null),ui=null;function xr(n){var s=n.alternate;se(Dt,Dt.current&1),se(Ln,n),ui===null&&(s===null||Ka.current!==null||s.memoizedState!==null)&&(ui=n)}function S_(n){if(n.tag===22){if(se(Dt,Dt.current),se(Ln,n),ui===null){var s=n.alternate;s!==null&&s.memoizedState!==null&&(ui=n)}}else Nr()}function Nr(){se(Dt,Dt.current),se(Ln,Ln.current)}function Yi(n){ue(Ln),ui===n&&(ui=null),ue(Dt)}var Dt=te(0);function $c(n){for(var s=n;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||Gm(o)))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}function nm(n,s,o,u){s=n.memoizedState,o=o(u,s),o=o==null?s:v({},s,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var im={enqueueSetState:function(n,s,o){n=n._reactInternals;var u=An(),f=Ir(u);f.payload=s,o!=null&&(f.callback=o),s=Rr(n,f,u),s!==null&&(Sn(s,n,u),Nl(s,n,u))},enqueueReplaceState:function(n,s,o){n=n._reactInternals;var u=An(),f=Ir(u);f.tag=1,f.payload=s,o!=null&&(f.callback=o),s=Rr(n,f,u),s!==null&&(Sn(s,n,u),Nl(s,n,u))},enqueueForceUpdate:function(n,s){n=n._reactInternals;var o=An(),u=Ir(o);u.tag=2,s!=null&&(u.callback=s),s=Rr(n,u,o),s!==null&&(Sn(s,n,o),Nl(s,n,o))}};function w_(n,s,o,u,f,d,b){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,d,b):s.prototype&&s.prototype.isPureReactComponent?!bl(o,u)||!bl(f,d):!0}function I_(n,s,o,u){n=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,u),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,u),s.state!==n&&im.enqueueReplaceState(s,s.state,null)}function ea(n,s){var o=s;if("ref"in s){o={};for(var u in s)u!=="ref"&&(o[u]=s[u])}if(n=n.defaultProps){o===s&&(o=v({},o));for(var f in n)o[f]===void 0&&(o[f]=n[f])}return o}var Kc=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function R_(n){Kc(n)}function C_(n){console.error(n)}function x_(n){Kc(n)}function Yc(n,s){try{var o=n.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(u){setTimeout(function(){throw u})}}function N_(n,s,o){try{var u=n.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function rm(n,s,o){return o=Ir(o),o.tag=3,o.payload={element:null},o.callback=function(){Yc(n,s)},o}function O_(n){return n=Ir(n),n.tag=3,n}function D_(n,s,o,u){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var d=u.value;n.payload=function(){return f(d)},n.callback=function(){N_(s,o,u)}}var b=o.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(n.callback=function(){N_(s,o,u),typeof f!="function"&&(Vr===null?Vr=new Set([this]):Vr.add(this));var T=u.stack;this.componentDidCatch(u.value,{componentStack:T!==null?T:""})})}function wI(n,s,o,u,f){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(s=o.alternate,s!==null&&wl(s,o,f,!0),o=Ln.current,o!==null){switch(o.tag){case 13:return ui===null?Cm():o.alternate===null&&mt===0&&(mt=3),o.flags&=-257,o.flags|=65536,o.lanes=f,u===Pd?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([u]):s.add(u),Nm(n,u,f)),!1;case 22:return o.flags|=65536,u===Pd?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([u]):o.add(u)),Nm(n,u,f)),!1}throw Error(r(435,o.tag))}return Nm(n,u,f),Cm(),!1}if(Ge)return s=Ln.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=f,u!==Id&&(n=Error(r(422),{cause:u}),Sl(Pn(n,o)))):(u!==Id&&(s=Error(r(423),{cause:u}),Sl(Pn(s,o))),n=n.current.alternate,n.flags|=65536,f&=-f,n.lanes|=f,u=Pn(u,o),f=rm(n.stateNode,u,f),Vd(n,f),mt!==4&&(mt=2)),!1;var d=Error(r(520),{cause:u});if(d=Pn(d,o),Gl===null?Gl=[d]:Gl.push(d),mt!==4&&(mt=2),s===null)return!0;u=Pn(u,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,n=f&-f,o.lanes|=n,n=rm(o.stateNode,u,n),Vd(o,n),!1;case 1:if(s=o.type,d=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Vr===null||!Vr.has(d))))return o.flags|=65536,f&=-f,o.lanes|=f,f=O_(f),D_(f,n,o,u),Vd(o,f),!1}o=o.return}while(o!==null);return!1}var P_=Error(r(461)),Ut=!1;function Gt(n,s,o,u){s.child=n===null?A_(s,null,o,u):Ja(s,n.child,o,u)}function k_(n,s,o,u,f){o=o.render;var d=s.ref;if("ref"in u){var b={};for(var T in u)T!=="ref"&&(b[T]=u[T])}else b=u;return Ws(s),u=Bd(n,s,o,b,d,f),T=Fd(),n!==null&&!Ut?(qd(n,s,f),Qi(n,s,f)):(Ge&&T&&Sd(s),s.flags|=1,Gt(n,s,u,f),s.child)}function M_(n,s,o,u,f){if(n===null){var d=o.type;return typeof d=="function"&&!Ed(d)&&d.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=d,V_(n,s,d,u,f)):(n=Rc(o.type,null,u,s,s.mode,f),n.ref=s.ref,n.return=s,s.child=n)}if(d=n.child,!fm(n,f)){var b=d.memoizedProps;if(o=o.compare,o=o!==null?o:bl,o(b,u)&&n.ref===s.ref)return Qi(n,s,f)}return s.flags|=1,n=Fi(d,u),n.ref=s.ref,n.return=s,s.child=n}function V_(n,s,o,u,f){if(n!==null){var d=n.memoizedProps;if(bl(d,u)&&n.ref===s.ref)if(Ut=!1,s.pendingProps=u=d,fm(n,f))(n.flags&131072)!==0&&(Ut=!0);else return s.lanes=n.lanes,Qi(n,s,f)}return sm(n,s,o,u,f)}function L_(n,s,o){var u=s.pendingProps,f=u.children,d=n!==null?n.memoizedState:null;if(u.mode==="hidden"){if((s.flags&128)!==0){if(u=d!==null?d.baseLanes|o:o,n!==null){for(f=s.child=n.child,d=0;f!==null;)d=d|f.lanes|f.childLanes,f=f.sibling;s.childLanes=d&~u}else s.childLanes=0,s.child=null;return U_(n,s,u,o)}if((o&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},n!==null&&Dc(s,d!==null?d.cachePool:null),d!==null?Vv(s,d):Ud(),S_(s);else return s.lanes=s.childLanes=536870912,U_(n,s,d!==null?d.baseLanes|o:o,o)}else d!==null?(Dc(s,d.cachePool),Vv(s,d),Nr(),s.memoizedState=null):(n!==null&&Dc(s,null),Ud(),Nr());return Gt(n,s,f,o),s.child}function U_(n,s,o,u){var f=Dd();return f=f===null?null:{parent:Ot._currentValue,pool:f},s.memoizedState={baseLanes:o,cachePool:f},n!==null&&Dc(s,null),Ud(),S_(s),n!==null&&wl(n,s,u,!0),null}function Qc(n,s){var o=s.ref;if(o===null)n!==null&&n.ref!==null&&(s.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(r(284));(n===null||n.ref!==o)&&(s.flags|=4194816)}}function sm(n,s,o,u,f){return Ws(s),o=Bd(n,s,o,u,void 0,f),u=Fd(),n!==null&&!Ut?(qd(n,s,f),Qi(n,s,f)):(Ge&&u&&Sd(s),s.flags|=1,Gt(n,s,o,f),s.child)}function j_(n,s,o,u,f,d){return Ws(s),s.updateQueue=null,o=Uv(s,u,o,f),Lv(n),u=Fd(),n!==null&&!Ut?(qd(n,s,d),Qi(n,s,d)):(Ge&&u&&Sd(s),s.flags|=1,Gt(n,s,o,d),s.child)}function z_(n,s,o,u,f){if(Ws(s),s.stateNode===null){var d=Fa,b=o.contextType;typeof b=="object"&&b!==null&&(d=Jt(b)),d=new o(u,d),s.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=im,s.stateNode=d,d._reactInternals=s,d=s.stateNode,d.props=u,d.state=s.memoizedState,d.refs={},kd(s),b=o.contextType,d.context=typeof b=="object"&&b!==null?Jt(b):Fa,d.state=s.memoizedState,b=o.getDerivedStateFromProps,typeof b=="function"&&(nm(s,o,b,u),d.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(b=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),b!==d.state&&im.enqueueReplaceState(d,d.state,null),Dl(s,u,d,f),Ol(),d.state=s.memoizedState),typeof d.componentDidMount=="function"&&(s.flags|=4194308),u=!0}else if(n===null){d=s.stateNode;var T=s.memoizedProps,C=ea(o,T);d.props=C;var B=d.context,Q=o.contextType;b=Fa,typeof Q=="object"&&Q!==null&&(b=Jt(Q));var Z=o.getDerivedStateFromProps;Q=typeof Z=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=s.pendingProps!==T,Q||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||B!==b)&&I_(s,d,u,b),wr=!1;var q=s.memoizedState;d.state=q,Dl(s,u,d,f),Ol(),B=s.memoizedState,T||q!==B||wr?(typeof Z=="function"&&(nm(s,o,Z,u),B=s.memoizedState),(C=wr||w_(s,o,C,u,q,B,b))?(Q||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(s.flags|=4194308)):(typeof d.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=u,s.memoizedState=B),d.props=u,d.state=B,d.context=b,u=C):(typeof d.componentDidMount=="function"&&(s.flags|=4194308),u=!1)}else{d=s.stateNode,Md(n,s),b=s.memoizedProps,Q=ea(o,b),d.props=Q,Z=s.pendingProps,q=d.context,B=o.contextType,C=Fa,typeof B=="object"&&B!==null&&(C=Jt(B)),T=o.getDerivedStateFromProps,(B=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(b!==Z||q!==C)&&I_(s,d,u,C),wr=!1,q=s.memoizedState,d.state=q,Dl(s,u,d,f),Ol();var H=s.memoizedState;b!==Z||q!==H||wr||n!==null&&n.dependencies!==null&&Nc(n.dependencies)?(typeof T=="function"&&(nm(s,o,T,u),H=s.memoizedState),(Q=wr||w_(s,o,Q,u,q,H,C)||n!==null&&n.dependencies!==null&&Nc(n.dependencies))?(B||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(u,H,C),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(u,H,C)),typeof d.componentDidUpdate=="function"&&(s.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof d.componentDidUpdate!="function"||b===n.memoizedProps&&q===n.memoizedState||(s.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||b===n.memoizedProps&&q===n.memoizedState||(s.flags|=1024),s.memoizedProps=u,s.memoizedState=H),d.props=u,d.state=H,d.context=C,u=Q):(typeof d.componentDidUpdate!="function"||b===n.memoizedProps&&q===n.memoizedState||(s.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||b===n.memoizedProps&&q===n.memoizedState||(s.flags|=1024),u=!1)}return d=u,Qc(n,s),u=(s.flags&128)!==0,d||u?(d=s.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:d.render(),s.flags|=1,n!==null&&u?(s.child=Ja(s,n.child,null,f),s.child=Ja(s,null,o,f)):Gt(n,s,o,f),s.memoizedState=d.state,n=s.child):n=Qi(n,s,f),n}function B_(n,s,o,u){return Al(),s.flags|=256,Gt(n,s,o,u),s.child}var am={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function om(n){return{baseLanes:n,cachePool:Cv()}}function lm(n,s,o){return n=n!==null?n.childLanes&~o:0,s&&(n|=Un),n}function F_(n,s,o){var u=s.pendingProps,f=!1,d=(s.flags&128)!==0,b;if((b=d)||(b=n!==null&&n.memoizedState===null?!1:(Dt.current&2)!==0),b&&(f=!0,s.flags&=-129),b=(s.flags&32)!==0,s.flags&=-33,n===null){if(Ge){if(f?xr(s):Nr(),Ge){var T=dt,C;if(C=T){e:{for(C=T,T=li;C.nodeType!==8;){if(!T){T=null;break e}if(C=$n(C.nextSibling),C===null){T=null;break e}}T=C}T!==null?(s.memoizedState={dehydrated:T,treeContext:$s!==null?{id:qi,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},C=_n(18,null,null,0),C.stateNode=T,C.return=s,s.child=C,un=s,dt=null,C=!0):C=!1}C||Qs(s)}if(T=s.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return Gm(T)?s.lanes=32:s.lanes=536870912,null;Yi(s)}return T=u.children,u=u.fallback,f?(Nr(),f=s.mode,T=Xc({mode:"hidden",children:T},f),u=Gs(u,f,o,null),T.return=s,u.return=s,T.sibling=u,s.child=T,f=s.child,f.memoizedState=om(o),f.childLanes=lm(n,b,o),s.memoizedState=am,u):(xr(s),um(s,T))}if(C=n.memoizedState,C!==null&&(T=C.dehydrated,T!==null)){if(d)s.flags&256?(xr(s),s.flags&=-257,s=cm(n,s,o)):s.memoizedState!==null?(Nr(),s.child=n.child,s.flags|=128,s=null):(Nr(),f=u.fallback,T=s.mode,u=Xc({mode:"visible",children:u.children},T),f=Gs(f,T,o,null),f.flags|=2,u.return=s,f.return=s,u.sibling=f,s.child=u,Ja(s,n.child,null,o),u=s.child,u.memoizedState=om(o),u.childLanes=lm(n,b,o),s.memoizedState=am,s=f);else if(xr(s),Gm(T)){if(b=T.nextSibling&&T.nextSibling.dataset,b)var B=b.dgst;b=B,u=Error(r(419)),u.stack="",u.digest=b,Sl({value:u,source:null,stack:null}),s=cm(n,s,o)}else if(Ut||wl(n,s,o,!1),b=(o&n.childLanes)!==0,Ut||b){if(b=rt,b!==null&&(u=o&-o,u=(u&42)!==0?1:yr(u),u=(u&(b.suspendedLanes|o))!==0?0:u,u!==0&&u!==C.retryLane))throw C.retryLane=u,Ba(n,u),Sn(b,n,u),P_;T.data==="$?"||Cm(),s=cm(n,s,o)}else T.data==="$?"?(s.flags|=192,s.child=n.child,s=null):(n=C.treeContext,dt=$n(T.nextSibling),un=s,Ge=!0,Ys=null,li=!1,n!==null&&(Mn[Vn++]=qi,Mn[Vn++]=Hi,Mn[Vn++]=$s,qi=n.id,Hi=n.overflow,$s=s),s=um(s,u.children),s.flags|=4096);return s}return f?(Nr(),f=u.fallback,T=s.mode,C=n.child,B=C.sibling,u=Fi(C,{mode:"hidden",children:u.children}),u.subtreeFlags=C.subtreeFlags&65011712,B!==null?f=Fi(B,f):(f=Gs(f,T,o,null),f.flags|=2),f.return=s,u.return=s,u.sibling=f,s.child=u,u=f,f=s.child,T=n.child.memoizedState,T===null?T=om(o):(C=T.cachePool,C!==null?(B=Ot._currentValue,C=C.parent!==B?{parent:B,pool:B}:C):C=Cv(),T={baseLanes:T.baseLanes|o,cachePool:C}),f.memoizedState=T,f.childLanes=lm(n,b,o),s.memoizedState=am,u):(xr(s),o=n.child,n=o.sibling,o=Fi(o,{mode:"visible",children:u.children}),o.return=s,o.sibling=null,n!==null&&(b=s.deletions,b===null?(s.deletions=[n],s.flags|=16):b.push(n)),s.child=o,s.memoizedState=null,o)}function um(n,s){return s=Xc({mode:"visible",children:s},n.mode),s.return=n,n.child=s}function Xc(n,s){return n=_n(22,n,null,s),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function cm(n,s,o){return Ja(s,n.child,null,o),n=um(s,s.pendingProps.children),n.flags|=2,s.memoizedState=null,n}function q_(n,s,o){n.lanes|=s;var u=n.alternate;u!==null&&(u.lanes|=s),Cd(n.return,s,o)}function hm(n,s,o,u,f){var d=n.memoizedState;d===null?n.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(d.isBackwards=s,d.rendering=null,d.renderingStartTime=0,d.last=u,d.tail=o,d.tailMode=f)}function H_(n,s,o){var u=s.pendingProps,f=u.revealOrder,d=u.tail;if(Gt(n,s,u.children,o),u=Dt.current,(u&2)!==0)u=u&1|2,s.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=s.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&q_(n,o,s);else if(n.tag===19)q_(n,o,s);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===s)break e;for(;n.sibling===null;){if(n.return===null||n.return===s)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}switch(se(Dt,u),f){case"forwards":for(o=s.child,f=null;o!==null;)n=o.alternate,n!==null&&$c(n)===null&&(f=o),o=o.sibling;o=f,o===null?(f=s.child,s.child=null):(f=o.sibling,o.sibling=null),hm(s,!1,f,o,d);break;case"backwards":for(o=null,f=s.child,s.child=null;f!==null;){if(n=f.alternate,n!==null&&$c(n)===null){s.child=f;break}n=f.sibling,f.sibling=o,o=f,f=n}hm(s,!0,o,null,d);break;case"together":hm(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Qi(n,s,o){if(n!==null&&(s.dependencies=n.dependencies),Mr|=s.lanes,(o&s.childLanes)===0)if(n!==null){if(wl(n,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(n!==null&&s.child!==n.child)throw Error(r(153));if(s.child!==null){for(n=s.child,o=Fi(n,n.pendingProps),s.child=o,o.return=s;n.sibling!==null;)n=n.sibling,o=o.sibling=Fi(n,n.pendingProps),o.return=s;o.sibling=null}return s.child}function fm(n,s){return(n.lanes&s)!==0?!0:(n=n.dependencies,!!(n!==null&&Nc(n)))}function II(n,s,o){switch(s.tag){case 3:it(s,s.stateNode.containerInfo),Sr(s,Ot,n.memoizedState.cache),Al();break;case 27:case 5:gr(s);break;case 4:it(s,s.stateNode.containerInfo);break;case 10:Sr(s,s.type,s.memoizedProps.value);break;case 13:var u=s.memoizedState;if(u!==null)return u.dehydrated!==null?(xr(s),s.flags|=128,null):(o&s.child.childLanes)!==0?F_(n,s,o):(xr(s),n=Qi(n,s,o),n!==null?n.sibling:null);xr(s);break;case 19:var f=(n.flags&128)!==0;if(u=(o&s.childLanes)!==0,u||(wl(n,s,o,!1),u=(o&s.childLanes)!==0),f){if(u)return H_(n,s,o);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),se(Dt,Dt.current),u)break;return null;case 22:case 23:return s.lanes=0,L_(n,s,o);case 24:Sr(s,Ot,n.memoizedState.cache)}return Qi(n,s,o)}function G_(n,s,o){if(n!==null)if(n.memoizedProps!==s.pendingProps)Ut=!0;else{if(!fm(n,o)&&(s.flags&128)===0)return Ut=!1,II(n,s,o);Ut=(n.flags&131072)!==0}else Ut=!1,Ge&&(s.flags&1048576)!==0&&Ev(s,xc,s.index);switch(s.lanes=0,s.tag){case 16:e:{n=s.pendingProps;var u=s.elementType,f=u._init;if(u=f(u._payload),s.type=u,typeof u=="function")Ed(u)?(n=ea(u,n),s.tag=1,s=z_(null,s,u,n,o)):(s.tag=0,s=sm(null,s,u,n,o));else{if(u!=null){if(f=u.$$typeof,f===ce){s.tag=11,s=k_(null,s,u,n,o);break e}else if(f===D){s.tag=14,s=M_(null,s,u,n,o);break e}}throw s=Ft(u)||u,Error(r(306,s,""))}}return s;case 0:return sm(n,s,s.type,s.pendingProps,o);case 1:return u=s.type,f=ea(u,s.pendingProps),z_(n,s,u,f,o);case 3:e:{if(it(s,s.stateNode.containerInfo),n===null)throw Error(r(387));u=s.pendingProps;var d=s.memoizedState;f=d.element,Md(n,s),Dl(s,u,null,o);var b=s.memoizedState;if(u=b.cache,Sr(s,Ot,u),u!==d.cache&&xd(s,[Ot],o,!0),Ol(),u=b.element,d.isDehydrated)if(d={element:u,isDehydrated:!1,cache:b.cache},s.updateQueue.baseState=d,s.memoizedState=d,s.flags&256){s=B_(n,s,u,o);break e}else if(u!==f){f=Pn(Error(r(424)),s),Sl(f),s=B_(n,s,u,o);break e}else{switch(n=s.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(dt=$n(n.firstChild),un=s,Ge=!0,Ys=null,li=!0,o=A_(s,null,u,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(Al(),u===f){s=Qi(n,s,o);break e}Gt(n,s,u,o)}s=s.child}return s;case 26:return Qc(n,s),n===null?(o=Q0(s.type,null,s.pendingProps,null))?s.memoizedState=o:Ge||(o=s.type,n=s.pendingProps,u=ch(we.current).createElement(o),u[Ct]=s,u[bt]=n,Kt(u,o,n),pt(u),s.stateNode=u):s.memoizedState=Q0(s.type,n.memoizedProps,s.pendingProps,n.memoizedState),null;case 27:return gr(s),n===null&&Ge&&(u=s.stateNode=$0(s.type,s.pendingProps,we.current),un=s,li=!0,f=dt,jr(s.type)?($m=f,dt=$n(u.firstChild)):dt=f),Gt(n,s,s.pendingProps.children,o),Qc(n,s),n===null&&(s.flags|=4194304),s.child;case 5:return n===null&&Ge&&((f=u=dt)&&(u=eR(u,s.type,s.pendingProps,li),u!==null?(s.stateNode=u,un=s,dt=$n(u.firstChild),li=!1,f=!0):f=!1),f||Qs(s)),gr(s),f=s.type,d=s.pendingProps,b=n!==null?n.memoizedProps:null,u=d.children,Fm(f,d)?u=null:b!==null&&Fm(f,b)&&(s.flags|=32),s.memoizedState!==null&&(f=Bd(n,s,vI,null,null,o),eu._currentValue=f),Qc(n,s),Gt(n,s,u,o),s.child;case 6:return n===null&&Ge&&((n=o=dt)&&(o=tR(o,s.pendingProps,li),o!==null?(s.stateNode=o,un=s,dt=null,n=!0):n=!1),n||Qs(s)),null;case 13:return F_(n,s,o);case 4:return it(s,s.stateNode.containerInfo),u=s.pendingProps,n===null?s.child=Ja(s,null,u,o):Gt(n,s,u,o),s.child;case 11:return k_(n,s,s.type,s.pendingProps,o);case 7:return Gt(n,s,s.pendingProps,o),s.child;case 8:return Gt(n,s,s.pendingProps.children,o),s.child;case 12:return Gt(n,s,s.pendingProps.children,o),s.child;case 10:return u=s.pendingProps,Sr(s,s.type,u.value),Gt(n,s,u.children,o),s.child;case 9:return f=s.type._context,u=s.pendingProps.children,Ws(s),f=Jt(f),u=u(f),s.flags|=1,Gt(n,s,u,o),s.child;case 14:return M_(n,s,s.type,s.pendingProps,o);case 15:return V_(n,s,s.type,s.pendingProps,o);case 19:return H_(n,s,o);case 31:return u=s.pendingProps,o=s.mode,u={mode:u.mode,children:u.children},n===null?(o=Xc(u,o),o.ref=s.ref,s.child=o,o.return=s,s=o):(o=Fi(n.child,u),o.ref=s.ref,s.child=o,o.return=s,s=o),s;case 22:return L_(n,s,o);case 24:return Ws(s),u=Jt(Ot),n===null?(f=Dd(),f===null&&(f=rt,d=Nd(),f.pooledCache=d,d.refCount++,d!==null&&(f.pooledCacheLanes|=o),f=d),s.memoizedState={parent:u,cache:f},kd(s),Sr(s,Ot,f)):((n.lanes&o)!==0&&(Md(n,s),Dl(s,null,null,o),Ol()),f=n.memoizedState,d=s.memoizedState,f.parent!==u?(f={parent:u,cache:u},s.memoizedState=f,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=f),Sr(s,Ot,u)):(u=d.cache,Sr(s,Ot,u),u!==f.cache&&xd(s,[Ot],o,!0))),Gt(n,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(r(156,s.tag))}function Xi(n){n.flags|=4}function $_(n,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!eb(s)){if(s=Ln.current,s!==null&&((Be&4194048)===Be?ui!==null:(Be&62914560)!==Be&&(Be&536870912)===0||s!==ui))throw xl=Pd,xv;n.flags|=8192}}function Wc(n,s){s!==null&&(n.flags|=4),n.flags&16384&&(s=n.tag!==22?nl():536870912,n.lanes|=s,no|=s)}function jl(n,s){if(!Ge)switch(n.tailMode){case"hidden":s=n.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?s||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function ut(n){var s=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(s)for(var f=n.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&65011712,u|=f.flags&65011712,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=u,n.childLanes=o,s}function RI(n,s,o){var u=s.pendingProps;switch(wd(s),s.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ut(s),null;case 1:return ut(s),null;case 3:return o=s.stateNode,u=null,n!==null&&(u=n.memoizedState.cache),s.memoizedState.cache!==u&&(s.flags|=2048),$i(Ot),Xn(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(n===null||n.child===null)&&(Tl(s)?Xi(s):n===null||n.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Sv())),ut(s),null;case 26:return o=s.memoizedState,n===null?(Xi(s),o!==null?(ut(s),$_(s,o)):(ut(s),s.flags&=-16777217)):o?o!==n.memoizedState?(Xi(s),ut(s),$_(s,o)):(ut(s),s.flags&=-16777217):(n.memoizedProps!==u&&Xi(s),ut(s),s.flags&=-16777217),null;case 27:xi(s),o=we.current;var f=s.type;if(n!==null&&s.stateNode!=null)n.memoizedProps!==u&&Xi(s);else{if(!u){if(s.stateNode===null)throw Error(r(166));return ut(s),null}n=ve.current,Tl(s)?Tv(s):(n=$0(f,u,o),s.stateNode=n,Xi(s))}return ut(s),null;case 5:if(xi(s),o=s.type,n!==null&&s.stateNode!=null)n.memoizedProps!==u&&Xi(s);else{if(!u){if(s.stateNode===null)throw Error(r(166));return ut(s),null}if(n=ve.current,Tl(s))Tv(s);else{switch(f=ch(we.current),n){case 1:n=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:n=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":n=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":n=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":n=f.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof u.is=="string"?f.createElement("select",{is:u.is}):f.createElement("select"),u.multiple?n.multiple=!0:u.size&&(n.size=u.size);break;default:n=typeof u.is=="string"?f.createElement(o,{is:u.is}):f.createElement(o)}}n[Ct]=s,n[bt]=u;e:for(f=s.child;f!==null;){if(f.tag===5||f.tag===6)n.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===s)break e;for(;f.sibling===null;){if(f.return===null||f.return===s)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}s.stateNode=n;e:switch(Kt(n,o,u),o){case"button":case"input":case"select":case"textarea":n=!!u.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Xi(s)}}return ut(s),s.flags&=-16777217,null;case 6:if(n&&s.stateNode!=null)n.memoizedProps!==u&&Xi(s);else{if(typeof u!="string"&&s.stateNode===null)throw Error(r(166));if(n=we.current,Tl(s)){if(n=s.stateNode,o=s.memoizedProps,u=null,f=un,f!==null)switch(f.tag){case 27:case 5:u=f.memoizedProps}n[Ct]=s,n=!!(n.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||j0(n.nodeValue,o)),n||Qs(s)}else n=ch(n).createTextNode(u),n[Ct]=s,s.stateNode=n}return ut(s),null;case 13:if(u=s.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(f=Tl(s),u!==null&&u.dehydrated!==null){if(n===null){if(!f)throw Error(r(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[Ct]=s}else Al(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;ut(s),f=!1}else f=Sv(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=f),f=!0;if(!f)return s.flags&256?(Yi(s),s):(Yi(s),null)}if(Yi(s),(s.flags&128)!==0)return s.lanes=o,s;if(o=u!==null,n=n!==null&&n.memoizedState!==null,o){u=s.child,f=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(f=u.alternate.memoizedState.cachePool.pool);var d=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(d=u.memoizedState.cachePool.pool),d!==f&&(u.flags|=2048)}return o!==n&&o&&(s.child.flags|=8192),Wc(s,s.updateQueue),ut(s),null;case 4:return Xn(),n===null&&Lm(s.stateNode.containerInfo),ut(s),null;case 10:return $i(s.type),ut(s),null;case 19:if(ue(Dt),f=s.memoizedState,f===null)return ut(s),null;if(u=(s.flags&128)!==0,d=f.rendering,d===null)if(u)jl(f,!1);else{if(mt!==0||n!==null&&(n.flags&128)!==0)for(n=s.child;n!==null;){if(d=$c(n),d!==null){for(s.flags|=128,jl(f,!1),n=d.updateQueue,s.updateQueue=n,Wc(s,n),s.subtreeFlags=0,n=o,o=s.child;o!==null;)bv(o,n),o=o.sibling;return se(Dt,Dt.current&1|2),s.child}n=n.sibling}f.tail!==null&&Rn()>eh&&(s.flags|=128,u=!0,jl(f,!1),s.lanes=4194304)}else{if(!u)if(n=$c(d),n!==null){if(s.flags|=128,u=!0,n=n.updateQueue,s.updateQueue=n,Wc(s,n),jl(f,!0),f.tail===null&&f.tailMode==="hidden"&&!d.alternate&&!Ge)return ut(s),null}else 2*Rn()-f.renderingStartTime>eh&&o!==536870912&&(s.flags|=128,u=!0,jl(f,!1),s.lanes=4194304);f.isBackwards?(d.sibling=s.child,s.child=d):(n=f.last,n!==null?n.sibling=d:s.child=d,f.last=d)}return f.tail!==null?(s=f.tail,f.rendering=s,f.tail=s.sibling,f.renderingStartTime=Rn(),s.sibling=null,n=Dt.current,se(Dt,u?n&1|2:n&1),s):(ut(s),null);case 22:case 23:return Yi(s),jd(),u=s.memoizedState!==null,n!==null?n.memoizedState!==null!==u&&(s.flags|=8192):u&&(s.flags|=8192),u?(o&536870912)!==0&&(s.flags&128)===0&&(ut(s),s.subtreeFlags&6&&(s.flags|=8192)):ut(s),o=s.updateQueue,o!==null&&Wc(s,o.retryQueue),o=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),u=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(u=s.memoizedState.cachePool.pool),u!==o&&(s.flags|=2048),n!==null&&ue(Js),null;case 24:return o=null,n!==null&&(o=n.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),$i(Ot),ut(s),null;case 25:return null;case 30:return null}throw Error(r(156,s.tag))}function CI(n,s){switch(wd(s),s.tag){case 1:return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 3:return $i(Ot),Xn(),n=s.flags,(n&65536)!==0&&(n&128)===0?(s.flags=n&-65537|128,s):null;case 26:case 27:case 5:return xi(s),null;case 13:if(Yi(s),n=s.memoizedState,n!==null&&n.dehydrated!==null){if(s.alternate===null)throw Error(r(340));Al()}return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 19:return ue(Dt),null;case 4:return Xn(),null;case 10:return $i(s.type),null;case 22:case 23:return Yi(s),jd(),n!==null&&ue(Js),n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 24:return $i(Ot),null;case 25:return null;default:return null}}function K_(n,s){switch(wd(s),s.tag){case 3:$i(Ot),Xn();break;case 26:case 27:case 5:xi(s);break;case 4:Xn();break;case 13:Yi(s);break;case 19:ue(Dt);break;case 10:$i(s.type);break;case 22:case 23:Yi(s),jd(),n!==null&&ue(Js);break;case 24:$i(Ot)}}function zl(n,s){try{var o=s.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&n)===n){u=void 0;var d=o.create,b=o.inst;u=d(),b.destroy=u}o=o.next}while(o!==f)}}catch(T){nt(s,s.return,T)}}function Or(n,s,o){try{var u=s.updateQueue,f=u!==null?u.lastEffect:null;if(f!==null){var d=f.next;u=d;do{if((u.tag&n)===n){var b=u.inst,T=b.destroy;if(T!==void 0){b.destroy=void 0,f=s;var C=o,B=T;try{B()}catch(Q){nt(f,C,Q)}}}u=u.next}while(u!==d)}}catch(Q){nt(s,s.return,Q)}}function Y_(n){var s=n.updateQueue;if(s!==null){var o=n.stateNode;try{Mv(s,o)}catch(u){nt(n,n.return,u)}}}function Q_(n,s,o){o.props=ea(n.type,n.memoizedProps),o.state=n.memoizedState;try{o.componentWillUnmount()}catch(u){nt(n,s,u)}}function Bl(n,s){try{var o=n.ref;if(o!==null){switch(n.tag){case 26:case 27:case 5:var u=n.stateNode;break;case 30:u=n.stateNode;break;default:u=n.stateNode}typeof o=="function"?n.refCleanup=o(u):o.current=u}}catch(f){nt(n,s,f)}}function ci(n,s){var o=n.ref,u=n.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(f){nt(n,s,f)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){nt(n,s,f)}else o.current=null}function X_(n){var s=n.type,o=n.memoizedProps,u=n.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(f){nt(n,n.return,f)}}function dm(n,s,o){try{var u=n.stateNode;QI(u,n.type,o,s),u[bt]=s}catch(f){nt(n,n.return,f)}}function W_(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&jr(n.type)||n.tag===4}function mm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||W_(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&jr(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function pm(n,s,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,s?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(n,s):(s=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,s.appendChild(n),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=uh));else if(u!==4&&(u===27&&jr(n.type)&&(o=n.stateNode,s=null),n=n.child,n!==null))for(pm(n,s,o),n=n.sibling;n!==null;)pm(n,s,o),n=n.sibling}function Jc(n,s,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,s?o.insertBefore(n,s):o.appendChild(n);else if(u!==4&&(u===27&&jr(n.type)&&(o=n.stateNode),n=n.child,n!==null))for(Jc(n,s,o),n=n.sibling;n!==null;)Jc(n,s,o),n=n.sibling}function J_(n){var s=n.stateNode,o=n.memoizedProps;try{for(var u=n.type,f=s.attributes;f.length;)s.removeAttributeNode(f[0]);Kt(s,u,o),s[Ct]=n,s[bt]=o}catch(d){nt(n,n.return,d)}}var Wi=!1,yt=!1,gm=!1,Z_=typeof WeakSet=="function"?WeakSet:Set,jt=null;function xI(n,s){if(n=n.containerInfo,zm=gh,n=cv(n),md(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,d=u.focusNode;u=u.focusOffset;try{o.nodeType,d.nodeType}catch{o=null;break e}var b=0,T=-1,C=-1,B=0,Q=0,Z=n,q=null;t:for(;;){for(var H;Z!==o||f!==0&&Z.nodeType!==3||(T=b+f),Z!==d||u!==0&&Z.nodeType!==3||(C=b+u),Z.nodeType===3&&(b+=Z.nodeValue.length),(H=Z.firstChild)!==null;)q=Z,Z=H;for(;;){if(Z===n)break t;if(q===o&&++B===f&&(T=b),q===d&&++Q===u&&(C=b),(H=Z.nextSibling)!==null)break;Z=q,q=Z.parentNode}Z=H}o=T===-1||C===-1?null:{start:T,end:C}}else o=null}o=o||{start:0,end:0}}else o=null;for(Bm={focusedElem:n,selectionRange:o},gh=!1,jt=s;jt!==null;)if(s=jt,n=s.child,(s.subtreeFlags&1024)!==0&&n!==null)n.return=s,jt=n;else for(;jt!==null;){switch(s=jt,d=s.alternate,n=s.flags,s.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&d!==null){n=void 0,o=s,f=d.memoizedProps,d=d.memoizedState,u=o.stateNode;try{var Ae=ea(o.type,f,o.elementType===o.type);n=u.getSnapshotBeforeUpdate(Ae,d),u.__reactInternalSnapshotBeforeUpdate=n}catch(be){nt(o,o.return,be)}}break;case 3:if((n&1024)!==0){if(n=s.stateNode.containerInfo,o=n.nodeType,o===9)Hm(n);else if(o===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Hm(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(r(163))}if(n=s.sibling,n!==null){n.return=s.return,jt=n;break}jt=s.return}}function e0(n,s,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:Dr(n,o),u&4&&zl(5,o);break;case 1:if(Dr(n,o),u&4)if(n=o.stateNode,s===null)try{n.componentDidMount()}catch(b){nt(o,o.return,b)}else{var f=ea(o.type,s.memoizedProps);s=s.memoizedState;try{n.componentDidUpdate(f,s,n.__reactInternalSnapshotBeforeUpdate)}catch(b){nt(o,o.return,b)}}u&64&&Y_(o),u&512&&Bl(o,o.return);break;case 3:if(Dr(n,o),u&64&&(n=o.updateQueue,n!==null)){if(s=null,o.child!==null)switch(o.child.tag){case 27:case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}try{Mv(n,s)}catch(b){nt(o,o.return,b)}}break;case 27:s===null&&u&4&&J_(o);case 26:case 5:Dr(n,o),s===null&&u&4&&X_(o),u&512&&Bl(o,o.return);break;case 12:Dr(n,o);break;case 13:Dr(n,o),u&4&&i0(n,o),u&64&&(n=o.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(o=UI.bind(null,o),nR(n,o))));break;case 22:if(u=o.memoizedState!==null||Wi,!u){s=s!==null&&s.memoizedState!==null||yt,f=Wi;var d=yt;Wi=u,(yt=s)&&!d?Pr(n,o,(o.subtreeFlags&8772)!==0):Dr(n,o),Wi=f,yt=d}break;case 30:break;default:Dr(n,o)}}function t0(n){var s=n.alternate;s!==null&&(n.alternate=null,t0(s)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(s=n.stateNode,s!==null&&br(s)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var ot=null,hn=!1;function Ji(n,s,o){for(o=o.child;o!==null;)n0(n,s,o),o=o.sibling}function n0(n,s,o){if(Ye&&typeof Ye.onCommitFiberUnmount=="function")try{Ye.onCommitFiberUnmount(ft,o)}catch{}switch(o.tag){case 26:yt||ci(o,s),Ji(n,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:yt||ci(o,s);var u=ot,f=hn;jr(o.type)&&(ot=o.stateNode,hn=!1),Ji(n,s,o),Xl(o.stateNode),ot=u,hn=f;break;case 5:yt||ci(o,s);case 6:if(u=ot,f=hn,ot=null,Ji(n,s,o),ot=u,hn=f,ot!==null)if(hn)try{(ot.nodeType===9?ot.body:ot.nodeName==="HTML"?ot.ownerDocument.body:ot).removeChild(o.stateNode)}catch(d){nt(o,s,d)}else try{ot.removeChild(o.stateNode)}catch(d){nt(o,s,d)}break;case 18:ot!==null&&(hn?(n=ot,H0(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,o.stateNode),ru(n)):H0(ot,o.stateNode));break;case 4:u=ot,f=hn,ot=o.stateNode.containerInfo,hn=!0,Ji(n,s,o),ot=u,hn=f;break;case 0:case 11:case 14:case 15:yt||Or(2,o,s),yt||Or(4,o,s),Ji(n,s,o);break;case 1:yt||(ci(o,s),u=o.stateNode,typeof u.componentWillUnmount=="function"&&Q_(o,s,u)),Ji(n,s,o);break;case 21:Ji(n,s,o);break;case 22:yt=(u=yt)||o.memoizedState!==null,Ji(n,s,o),yt=u;break;default:Ji(n,s,o)}}function i0(n,s){if(s.memoizedState===null&&(n=s.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{ru(n)}catch(o){nt(s,s.return,o)}}function NI(n){switch(n.tag){case 13:case 19:var s=n.stateNode;return s===null&&(s=n.stateNode=new Z_),s;case 22:return n=n.stateNode,s=n._retryCache,s===null&&(s=n._retryCache=new Z_),s;default:throw Error(r(435,n.tag))}}function ym(n,s){var o=NI(n);s.forEach(function(u){var f=jI.bind(null,n,u);o.has(u)||(o.add(u),u.then(f,f))})}function bn(n,s){var o=s.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u],d=n,b=s,T=b;e:for(;T!==null;){switch(T.tag){case 27:if(jr(T.type)){ot=T.stateNode,hn=!1;break e}break;case 5:ot=T.stateNode,hn=!1;break e;case 3:case 4:ot=T.stateNode.containerInfo,hn=!0;break e}T=T.return}if(ot===null)throw Error(r(160));n0(d,b,f),ot=null,hn=!1,d=f.alternate,d!==null&&(d.return=null),f.return=null}if(s.subtreeFlags&13878)for(s=s.child;s!==null;)r0(s,n),s=s.sibling}var Gn=null;function r0(n,s){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:bn(s,n),En(n),u&4&&(Or(3,n,n.return),zl(3,n),Or(5,n,n.return));break;case 1:bn(s,n),En(n),u&512&&(yt||o===null||ci(o,o.return)),u&64&&Wi&&(n=n.updateQueue,n!==null&&(u=n.callbacks,u!==null&&(o=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var f=Gn;if(bn(s,n),En(n),u&512&&(yt||o===null||ci(o,o.return)),u&4){var d=o!==null?o.memoizedState:null;if(u=n.memoizedState,o===null)if(u===null)if(n.stateNode===null){e:{u=n.type,o=n.memoizedProps,f=f.ownerDocument||f;t:switch(u){case"title":d=f.getElementsByTagName("title")[0],(!d||d[xs]||d[Ct]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=f.createElement(u),f.head.insertBefore(d,f.querySelector("head > title"))),Kt(d,u,o),d[Ct]=n,pt(d),u=d;break e;case"link":var b=J0("link","href",f).get(u+(o.href||""));if(b){for(var T=0;T<b.length;T++)if(d=b[T],d.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&d.getAttribute("rel")===(o.rel==null?null:o.rel)&&d.getAttribute("title")===(o.title==null?null:o.title)&&d.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){b.splice(T,1);break t}}d=f.createElement(u),Kt(d,u,o),f.head.appendChild(d);break;case"meta":if(b=J0("meta","content",f).get(u+(o.content||""))){for(T=0;T<b.length;T++)if(d=b[T],d.getAttribute("content")===(o.content==null?null:""+o.content)&&d.getAttribute("name")===(o.name==null?null:o.name)&&d.getAttribute("property")===(o.property==null?null:o.property)&&d.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&d.getAttribute("charset")===(o.charSet==null?null:o.charSet)){b.splice(T,1);break t}}d=f.createElement(u),Kt(d,u,o),f.head.appendChild(d);break;default:throw Error(r(468,u))}d[Ct]=n,pt(d),u=d}n.stateNode=u}else Z0(f,n.type,n.stateNode);else n.stateNode=W0(f,u,n.memoizedProps);else d!==u?(d===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):d.count--,u===null?Z0(f,n.type,n.stateNode):W0(f,u,n.memoizedProps)):u===null&&n.stateNode!==null&&dm(n,n.memoizedProps,o.memoizedProps)}break;case 27:bn(s,n),En(n),u&512&&(yt||o===null||ci(o,o.return)),o!==null&&u&4&&dm(n,n.memoizedProps,o.memoizedProps);break;case 5:if(bn(s,n),En(n),u&512&&(yt||o===null||ci(o,o.return)),n.flags&32){f=n.stateNode;try{xn(f,"")}catch(H){nt(n,n.return,H)}}u&4&&n.stateNode!=null&&(f=n.memoizedProps,dm(n,f,o!==null?o.memoizedProps:f)),u&1024&&(gm=!0);break;case 6:if(bn(s,n),En(n),u&4){if(n.stateNode===null)throw Error(r(162));u=n.memoizedProps,o=n.stateNode;try{o.nodeValue=u}catch(H){nt(n,n.return,H)}}break;case 3:if(dh=null,f=Gn,Gn=hh(s.containerInfo),bn(s,n),Gn=f,En(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{ru(s.containerInfo)}catch(H){nt(n,n.return,H)}gm&&(gm=!1,s0(n));break;case 4:u=Gn,Gn=hh(n.stateNode.containerInfo),bn(s,n),En(n),Gn=u;break;case 12:bn(s,n),En(n);break;case 13:bn(s,n),En(n),n.child.flags&8192&&n.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Am=Rn()),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,ym(n,u)));break;case 22:f=n.memoizedState!==null;var C=o!==null&&o.memoizedState!==null,B=Wi,Q=yt;if(Wi=B||f,yt=Q||C,bn(s,n),yt=Q,Wi=B,En(n),u&8192)e:for(s=n.stateNode,s._visibility=f?s._visibility&-2:s._visibility|1,f&&(o===null||C||Wi||yt||ta(n)),o=null,s=n;;){if(s.tag===5||s.tag===26){if(o===null){C=o=s;try{if(d=C.stateNode,f)b=d.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{T=C.stateNode;var Z=C.memoizedProps.style,q=Z!=null&&Z.hasOwnProperty("display")?Z.display:null;T.style.display=q==null||typeof q=="boolean"?"":(""+q).trim()}}catch(H){nt(C,C.return,H)}}}else if(s.tag===6){if(o===null){C=s;try{C.stateNode.nodeValue=f?"":C.memoizedProps}catch(H){nt(C,C.return,H)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===n)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break e;for(;s.sibling===null;){if(s.return===null||s.return===n)break e;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}u&4&&(u=n.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,ym(n,o))));break;case 19:bn(s,n),En(n),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,ym(n,u)));break;case 30:break;case 21:break;default:bn(s,n),En(n)}}function En(n){var s=n.flags;if(s&2){try{for(var o,u=n.return;u!==null;){if(W_(u)){o=u;break}u=u.return}if(o==null)throw Error(r(160));switch(o.tag){case 27:var f=o.stateNode,d=mm(n);Jc(n,d,f);break;case 5:var b=o.stateNode;o.flags&32&&(xn(b,""),o.flags&=-33);var T=mm(n);Jc(n,T,b);break;case 3:case 4:var C=o.stateNode.containerInfo,B=mm(n);pm(n,B,C);break;default:throw Error(r(161))}}catch(Q){nt(n,n.return,Q)}n.flags&=-3}s&4096&&(n.flags&=-4097)}function s0(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var s=n;s0(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),n=n.sibling}}function Dr(n,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)e0(n,s.alternate,s),s=s.sibling}function ta(n){for(n=n.child;n!==null;){var s=n;switch(s.tag){case 0:case 11:case 14:case 15:Or(4,s,s.return),ta(s);break;case 1:ci(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&Q_(s,s.return,o),ta(s);break;case 27:Xl(s.stateNode);case 26:case 5:ci(s,s.return),ta(s);break;case 22:s.memoizedState===null&&ta(s);break;case 30:ta(s);break;default:ta(s)}n=n.sibling}}function Pr(n,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var u=s.alternate,f=n,d=s,b=d.flags;switch(d.tag){case 0:case 11:case 15:Pr(f,d,o),zl(4,d);break;case 1:if(Pr(f,d,o),u=d,f=u.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(B){nt(u,u.return,B)}if(u=d,f=u.updateQueue,f!==null){var T=u.stateNode;try{var C=f.shared.hiddenCallbacks;if(C!==null)for(f.shared.hiddenCallbacks=null,f=0;f<C.length;f++)kv(C[f],T)}catch(B){nt(u,u.return,B)}}o&&b&64&&Y_(d),Bl(d,d.return);break;case 27:J_(d);case 26:case 5:Pr(f,d,o),o&&u===null&&b&4&&X_(d),Bl(d,d.return);break;case 12:Pr(f,d,o);break;case 13:Pr(f,d,o),o&&b&4&&i0(f,d);break;case 22:d.memoizedState===null&&Pr(f,d,o),Bl(d,d.return);break;case 30:break;default:Pr(f,d,o)}s=s.sibling}}function vm(n,s){var o=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),n=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(n=s.memoizedState.cachePool.pool),n!==o&&(n!=null&&n.refCount++,o!=null&&Il(o))}function _m(n,s){n=null,s.alternate!==null&&(n=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==n&&(s.refCount++,n!=null&&Il(n))}function hi(n,s,o,u){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)a0(n,s,o,u),s=s.sibling}function a0(n,s,o,u){var f=s.flags;switch(s.tag){case 0:case 11:case 15:hi(n,s,o,u),f&2048&&zl(9,s);break;case 1:hi(n,s,o,u);break;case 3:hi(n,s,o,u),f&2048&&(n=null,s.alternate!==null&&(n=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==n&&(s.refCount++,n!=null&&Il(n)));break;case 12:if(f&2048){hi(n,s,o,u),n=s.stateNode;try{var d=s.memoizedProps,b=d.id,T=d.onPostCommit;typeof T=="function"&&T(b,s.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(C){nt(s,s.return,C)}}else hi(n,s,o,u);break;case 13:hi(n,s,o,u);break;case 23:break;case 22:d=s.stateNode,b=s.alternate,s.memoizedState!==null?d._visibility&2?hi(n,s,o,u):Fl(n,s):d._visibility&2?hi(n,s,o,u):(d._visibility|=2,Za(n,s,o,u,(s.subtreeFlags&10256)!==0)),f&2048&&vm(b,s);break;case 24:hi(n,s,o,u),f&2048&&_m(s.alternate,s);break;default:hi(n,s,o,u)}}function Za(n,s,o,u,f){for(f=f&&(s.subtreeFlags&10256)!==0,s=s.child;s!==null;){var d=n,b=s,T=o,C=u,B=b.flags;switch(b.tag){case 0:case 11:case 15:Za(d,b,T,C,f),zl(8,b);break;case 23:break;case 22:var Q=b.stateNode;b.memoizedState!==null?Q._visibility&2?Za(d,b,T,C,f):Fl(d,b):(Q._visibility|=2,Za(d,b,T,C,f)),f&&B&2048&&vm(b.alternate,b);break;case 24:Za(d,b,T,C,f),f&&B&2048&&_m(b.alternate,b);break;default:Za(d,b,T,C,f)}s=s.sibling}}function Fl(n,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=n,u=s,f=u.flags;switch(u.tag){case 22:Fl(o,u),f&2048&&vm(u.alternate,u);break;case 24:Fl(o,u),f&2048&&_m(u.alternate,u);break;default:Fl(o,u)}s=s.sibling}}var ql=8192;function eo(n){if(n.subtreeFlags&ql)for(n=n.child;n!==null;)o0(n),n=n.sibling}function o0(n){switch(n.tag){case 26:eo(n),n.flags&ql&&n.memoizedState!==null&&pR(Gn,n.memoizedState,n.memoizedProps);break;case 5:eo(n);break;case 3:case 4:var s=Gn;Gn=hh(n.stateNode.containerInfo),eo(n),Gn=s;break;case 22:n.memoizedState===null&&(s=n.alternate,s!==null&&s.memoizedState!==null?(s=ql,ql=16777216,eo(n),ql=s):eo(n));break;default:eo(n)}}function l0(n){var s=n.alternate;if(s!==null&&(n=s.child,n!==null)){s.child=null;do s=n.sibling,n.sibling=null,n=s;while(n!==null)}}function Hl(n){var s=n.deletions;if((n.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var u=s[o];jt=u,c0(u,n)}l0(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)u0(n),n=n.sibling}function u0(n){switch(n.tag){case 0:case 11:case 15:Hl(n),n.flags&2048&&Or(9,n,n.return);break;case 3:Hl(n);break;case 12:Hl(n);break;case 22:var s=n.stateNode;n.memoizedState!==null&&s._visibility&2&&(n.return===null||n.return.tag!==13)?(s._visibility&=-3,Zc(n)):Hl(n);break;default:Hl(n)}}function Zc(n){var s=n.deletions;if((n.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var u=s[o];jt=u,c0(u,n)}l0(n)}for(n=n.child;n!==null;){switch(s=n,s.tag){case 0:case 11:case 15:Or(8,s,s.return),Zc(s);break;case 22:o=s.stateNode,o._visibility&2&&(o._visibility&=-3,Zc(s));break;default:Zc(s)}n=n.sibling}}function c0(n,s){for(;jt!==null;){var o=jt;switch(o.tag){case 0:case 11:case 15:Or(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:Il(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,jt=u;else e:for(o=n;jt!==null;){u=jt;var f=u.sibling,d=u.return;if(t0(u),u===o){jt=null;break e}if(f!==null){f.return=d,jt=f;break e}jt=d}}}var OI={getCacheForType:function(n){var s=Jt(Ot),o=s.data.get(n);return o===void 0&&(o=n(),s.data.set(n,o)),o}},DI=typeof WeakMap=="function"?WeakMap:Map,Qe=0,rt=null,Me=null,Be=0,Xe=0,Tn=null,kr=!1,to=!1,bm=!1,Zi=0,mt=0,Mr=0,na=0,Em=0,Un=0,no=0,Gl=null,fn=null,Tm=!1,Am=0,eh=1/0,th=null,Vr=null,$t=0,Lr=null,io=null,ro=0,Sm=0,wm=null,h0=null,$l=0,Im=null;function An(){if((Qe&2)!==0&&Be!==0)return Be&-Be;if(Y.T!==null){var n=Ga;return n!==0?n:Pm()}return vr()}function f0(){Un===0&&(Un=(Be&536870912)===0||Ge?tl():536870912);var n=Ln.current;return n!==null&&(n.flags|=32),Un}function Sn(n,s,o){(n===rt&&(Xe===2||Xe===9)||n.cancelPendingCommit!==null)&&(so(n,0),Ur(n,Be,Un,!1)),Oi(n,o),((Qe&2)===0||n!==rt)&&(n===rt&&((Qe&2)===0&&(na|=o),mt===4&&Ur(n,Be,Un,!1)),fi(n))}function d0(n,s,o){if((Qe&6)!==0)throw Error(r(327));var u=!o&&(s&124)===0&&(s&n.expiredLanes)===0||Cs(n,s),f=u?MI(n,s):xm(n,s,!0),d=u;do{if(f===0){to&&!u&&Ur(n,s,0,!1);break}else{if(o=n.current.alternate,d&&!PI(o)){f=xm(n,s,!1),d=!1;continue}if(f===2){if(d=s,n.errorRecoveryDisabledLanes&d)var b=0;else b=n.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){s=b;e:{var T=n;f=Gl;var C=T.current.memoizedState.isDehydrated;if(C&&(so(T,b).flags|=256),b=xm(T,b,!1),b!==2){if(bm&&!C){T.errorRecoveryDisabledLanes|=d,na|=d,f=4;break e}d=fn,fn=f,d!==null&&(fn===null?fn=d:fn.push.apply(fn,d))}f=b}if(d=!1,f!==2)continue}}if(f===1){so(n,0),Ur(n,s,0,!0);break}e:{switch(u=n,d=f,d){case 0:case 1:throw Error(r(345));case 4:if((s&4194048)!==s)break;case 6:Ur(u,s,Un,!kr);break e;case 2:fn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((s&62914560)===s&&(f=Am+300-Rn(),10<f)){if(Ur(u,s,Un,!kr),Ta(u,0,!0)!==0)break e;u.timeoutHandle=F0(m0.bind(null,u,o,fn,th,Tm,s,Un,na,no,kr,d,2,-0,0),f);break e}m0(u,o,fn,th,Tm,s,Un,na,no,kr,d,0,-0,0)}}break}while(!0);fi(n)}function m0(n,s,o,u,f,d,b,T,C,B,Q,Z,q,H){if(n.timeoutHandle=-1,Z=s.subtreeFlags,(Z&8192||(Z&16785408)===16785408)&&(Zl={stylesheets:null,count:0,unsuspend:mR},o0(s),Z=gR(),Z!==null)){n.cancelPendingCommit=Z(E0.bind(null,n,s,d,o,u,f,b,T,C,Q,1,q,H)),Ur(n,d,b,!B);return}E0(n,s,d,o,u,f,b,T,C)}function PI(n){for(var s=n;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var f=o[u],d=f.getSnapshot;f=f.value;try{if(!vn(d(),f))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Ur(n,s,o,u){s&=~Em,s&=~na,n.suspendedLanes|=s,n.pingedLanes&=~s,u&&(n.warmLanes|=s),u=n.expirationTimes;for(var f=s;0<f;){var d=31-Wt(f),b=1<<d;u[d]=-1,f&=~b}o!==0&&Wn(n,o,s)}function nh(){return(Qe&6)===0?(Kl(0),!1):!0}function Rm(){if(Me!==null){if(Xe===0)var n=Me.return;else n=Me,Gi=Xs=null,Hd(n),Wa=null,Ll=0,n=Me;for(;n!==null;)K_(n.alternate,n),n=n.return;Me=null}}function so(n,s){var o=n.timeoutHandle;o!==-1&&(n.timeoutHandle=-1,WI(o)),o=n.cancelPendingCommit,o!==null&&(n.cancelPendingCommit=null,o()),Rm(),rt=n,Me=o=Fi(n.current,null),Be=s,Xe=0,Tn=null,kr=!1,to=Cs(n,s),bm=!1,no=Un=Em=na=Mr=mt=0,fn=Gl=null,Tm=!1,(s&8)!==0&&(s|=s&32);var u=n.entangledLanes;if(u!==0)for(n=n.entanglements,u&=s;0<u;){var f=31-Wt(u),d=1<<f;s|=n[f],u&=~d}return Zi=s,Sc(),o}function p0(n,s){Ne=null,Y.H=qc,s===Cl||s===Pc?(s=Dv(),Xe=3):s===xv?(s=Dv(),Xe=4):Xe=s===P_?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,Tn=s,Me===null&&(mt=1,Yc(n,Pn(s,n.current)))}function g0(){var n=Y.H;return Y.H=qc,n===null?qc:n}function y0(){var n=Y.A;return Y.A=OI,n}function Cm(){mt=4,kr||(Be&4194048)!==Be&&Ln.current!==null||(to=!0),(Mr&134217727)===0&&(na&134217727)===0||rt===null||Ur(rt,Be,Un,!1)}function xm(n,s,o){var u=Qe;Qe|=2;var f=g0(),d=y0();(rt!==n||Be!==s)&&(th=null,so(n,s)),s=!1;var b=mt;e:do try{if(Xe!==0&&Me!==null){var T=Me,C=Tn;switch(Xe){case 8:Rm(),b=6;break e;case 3:case 2:case 9:case 6:Ln.current===null&&(s=!0);var B=Xe;if(Xe=0,Tn=null,ao(n,T,C,B),o&&to){b=0;break e}break;default:B=Xe,Xe=0,Tn=null,ao(n,T,C,B)}}kI(),b=mt;break}catch(Q){p0(n,Q)}while(!0);return s&&n.shellSuspendCounter++,Gi=Xs=null,Qe=u,Y.H=f,Y.A=d,Me===null&&(rt=null,Be=0,Sc()),b}function kI(){for(;Me!==null;)v0(Me)}function MI(n,s){var o=Qe;Qe|=2;var u=g0(),f=y0();rt!==n||Be!==s?(th=null,eh=Rn()+500,so(n,s)):to=Cs(n,s);e:do try{if(Xe!==0&&Me!==null){s=Me;var d=Tn;t:switch(Xe){case 1:Xe=0,Tn=null,ao(n,s,d,1);break;case 2:case 9:if(Nv(d)){Xe=0,Tn=null,_0(s);break}s=function(){Xe!==2&&Xe!==9||rt!==n||(Xe=7),fi(n)},d.then(s,s);break e;case 3:Xe=7;break e;case 4:Xe=5;break e;case 7:Nv(d)?(Xe=0,Tn=null,_0(s)):(Xe=0,Tn=null,ao(n,s,d,7));break;case 5:var b=null;switch(Me.tag){case 26:b=Me.memoizedState;case 5:case 27:var T=Me;if(!b||eb(b)){Xe=0,Tn=null;var C=T.sibling;if(C!==null)Me=C;else{var B=T.return;B!==null?(Me=B,ih(B)):Me=null}break t}}Xe=0,Tn=null,ao(n,s,d,5);break;case 6:Xe=0,Tn=null,ao(n,s,d,6);break;case 8:Rm(),mt=6;break e;default:throw Error(r(462))}}VI();break}catch(Q){p0(n,Q)}while(!0);return Gi=Xs=null,Y.H=u,Y.A=f,Qe=o,Me!==null?0:(rt=null,Be=0,Sc(),mt)}function VI(){for(;Me!==null&&!Wo();)v0(Me)}function v0(n){var s=G_(n.alternate,n,Zi);n.memoizedProps=n.pendingProps,s===null?ih(n):Me=s}function _0(n){var s=n,o=s.alternate;switch(s.tag){case 15:case 0:s=j_(o,s,s.pendingProps,s.type,void 0,Be);break;case 11:s=j_(o,s,s.pendingProps,s.type.render,s.ref,Be);break;case 5:Hd(s);default:K_(o,s),s=Me=bv(s,Zi),s=G_(o,s,Zi)}n.memoizedProps=n.pendingProps,s===null?ih(n):Me=s}function ao(n,s,o,u){Gi=Xs=null,Hd(s),Wa=null,Ll=0;var f=s.return;try{if(wI(n,f,s,o,Be)){mt=1,Yc(n,Pn(o,n.current)),Me=null;return}}catch(d){if(f!==null)throw Me=f,d;mt=1,Yc(n,Pn(o,n.current)),Me=null;return}s.flags&32768?(Ge||u===1?n=!0:to||(Be&536870912)!==0?n=!1:(kr=n=!0,(u===2||u===9||u===3||u===6)&&(u=Ln.current,u!==null&&u.tag===13&&(u.flags|=16384))),b0(s,n)):ih(s)}function ih(n){var s=n;do{if((s.flags&32768)!==0){b0(s,kr);return}n=s.return;var o=RI(s.alternate,s,Zi);if(o!==null){Me=o;return}if(s=s.sibling,s!==null){Me=s;return}Me=s=n}while(s!==null);mt===0&&(mt=5)}function b0(n,s){do{var o=CI(n.alternate,n);if(o!==null){o.flags&=32767,Me=o;return}if(o=n.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(n=n.sibling,n!==null)){Me=n;return}Me=n=o}while(n!==null);mt=6,Me=null}function E0(n,s,o,u,f,d,b,T,C){n.cancelPendingCommit=null;do rh();while($t!==0);if((Qe&6)!==0)throw Error(r(327));if(s!==null){if(s===n.current)throw Error(r(177));if(d=s.lanes|s.childLanes,d|=_d,il(n,o,d,b,T,C),n===rt&&(Me=rt=null,Be=0),io=s,Lr=n,ro=o,Sm=d,wm=f,h0=u,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,zI(Ss,function(){return I0(),null})):(n.callbackNode=null,n.callbackPriority=0),u=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||u){u=Y.T,Y.T=null,f=le.p,le.p=2,b=Qe,Qe|=4;try{xI(n,s,o)}finally{Qe=b,le.p=f,Y.T=u}}$t=1,T0(),A0(),S0()}}function T0(){if($t===1){$t=0;var n=Lr,s=io,o=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||o){o=Y.T,Y.T=null;var u=le.p;le.p=2;var f=Qe;Qe|=4;try{r0(s,n);var d=Bm,b=cv(n.containerInfo),T=d.focusedElem,C=d.selectionRange;if(b!==T&&T&&T.ownerDocument&&uv(T.ownerDocument.documentElement,T)){if(C!==null&&md(T)){var B=C.start,Q=C.end;if(Q===void 0&&(Q=B),"selectionStart"in T)T.selectionStart=B,T.selectionEnd=Math.min(Q,T.value.length);else{var Z=T.ownerDocument||document,q=Z&&Z.defaultView||window;if(q.getSelection){var H=q.getSelection(),Ae=T.textContent.length,be=Math.min(C.start,Ae),et=C.end===void 0?be:Math.min(C.end,Ae);!H.extend&&be>et&&(b=et,et=be,be=b);var L=lv(T,be),P=lv(T,et);if(L&&P&&(H.rangeCount!==1||H.anchorNode!==L.node||H.anchorOffset!==L.offset||H.focusNode!==P.node||H.focusOffset!==P.offset)){var z=Z.createRange();z.setStart(L.node,L.offset),H.removeAllRanges(),be>et?(H.addRange(z),H.extend(P.node,P.offset)):(z.setEnd(P.node,P.offset),H.addRange(z))}}}}for(Z=[],H=T;H=H.parentNode;)H.nodeType===1&&Z.push({element:H,left:H.scrollLeft,top:H.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<Z.length;T++){var J=Z[T];J.element.scrollLeft=J.left,J.element.scrollTop=J.top}}gh=!!zm,Bm=zm=null}finally{Qe=f,le.p=u,Y.T=o}}n.current=s,$t=2}}function A0(){if($t===2){$t=0;var n=Lr,s=io,o=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||o){o=Y.T,Y.T=null;var u=le.p;le.p=2;var f=Qe;Qe|=4;try{e0(n,s.alternate,s)}finally{Qe=f,le.p=u,Y.T=o}}$t=3}}function S0(){if($t===4||$t===3){$t=0,Zu();var n=Lr,s=io,o=ro,u=h0;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?$t=5:($t=0,io=Lr=null,w0(n,n.pendingLanes));var f=n.pendingLanes;if(f===0&&(Vr=null),Aa(o),s=s.stateNode,Ye&&typeof Ye.onCommitFiberRoot=="function")try{Ye.onCommitFiberRoot(ft,s,void 0,(s.current.flags&128)===128)}catch{}if(u!==null){s=Y.T,f=le.p,le.p=2,Y.T=null;try{for(var d=n.onRecoverableError,b=0;b<u.length;b++){var T=u[b];d(T.value,{componentStack:T.stack})}}finally{Y.T=s,le.p=f}}(ro&3)!==0&&rh(),fi(n),f=n.pendingLanes,(o&4194090)!==0&&(f&42)!==0?n===Im?$l++:($l=0,Im=n):$l=0,Kl(0)}}function w0(n,s){(n.pooledCacheLanes&=s)===0&&(s=n.pooledCache,s!=null&&(n.pooledCache=null,Il(s)))}function rh(n){return T0(),A0(),S0(),I0()}function I0(){if($t!==5)return!1;var n=Lr,s=Sm;Sm=0;var o=Aa(ro),u=Y.T,f=le.p;try{le.p=32>o?32:o,Y.T=null,o=wm,wm=null;var d=Lr,b=ro;if($t=0,io=Lr=null,ro=0,(Qe&6)!==0)throw Error(r(331));var T=Qe;if(Qe|=4,u0(d.current),a0(d,d.current,b,o),Qe=T,Kl(0,!1),Ye&&typeof Ye.onPostCommitFiberRoot=="function")try{Ye.onPostCommitFiberRoot(ft,d)}catch{}return!0}finally{le.p=f,Y.T=u,w0(n,s)}}function R0(n,s,o){s=Pn(o,s),s=rm(n.stateNode,s,2),n=Rr(n,s,2),n!==null&&(Oi(n,2),fi(n))}function nt(n,s,o){if(n.tag===3)R0(n,n,o);else for(;s!==null;){if(s.tag===3){R0(s,n,o);break}else if(s.tag===1){var u=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Vr===null||!Vr.has(u))){n=Pn(o,n),o=O_(2),u=Rr(s,o,2),u!==null&&(D_(o,u,s,n),Oi(u,2),fi(u));break}}s=s.return}}function Nm(n,s,o){var u=n.pingCache;if(u===null){u=n.pingCache=new DI;var f=new Set;u.set(s,f)}else f=u.get(s),f===void 0&&(f=new Set,u.set(s,f));f.has(o)||(bm=!0,f.add(o),n=LI.bind(null,n,s,o),s.then(n,n))}function LI(n,s,o){var u=n.pingCache;u!==null&&u.delete(s),n.pingedLanes|=n.suspendedLanes&o,n.warmLanes&=~o,rt===n&&(Be&o)===o&&(mt===4||mt===3&&(Be&62914560)===Be&&300>Rn()-Am?(Qe&2)===0&&so(n,0):Em|=o,no===Be&&(no=0)),fi(n)}function C0(n,s){s===0&&(s=nl()),n=Ba(n,s),n!==null&&(Oi(n,s),fi(n))}function UI(n){var s=n.memoizedState,o=0;s!==null&&(o=s.retryLane),C0(n,o)}function jI(n,s){var o=0;switch(n.tag){case 13:var u=n.stateNode,f=n.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=n.stateNode;break;case 22:u=n.stateNode._retryCache;break;default:throw Error(r(314))}u!==null&&u.delete(s),C0(n,o)}function zI(n,s){return Ts(n,s)}var sh=null,oo=null,Om=!1,ah=!1,Dm=!1,ia=0;function fi(n){n!==oo&&n.next===null&&(oo===null?sh=oo=n:oo=oo.next=n),ah=!0,Om||(Om=!0,FI())}function Kl(n,s){if(!Dm&&ah){Dm=!0;do for(var o=!1,u=sh;u!==null;){if(n!==0){var f=u.pendingLanes;if(f===0)var d=0;else{var b=u.suspendedLanes,T=u.pingedLanes;d=(1<<31-Wt(42|n)+1)-1,d&=f&~(b&~T),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(o=!0,D0(u,d))}else d=Be,d=Ta(u,u===rt?d:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(d&3)===0||Cs(u,d)||(o=!0,D0(u,d));u=u.next}while(o);Dm=!1}}function BI(){x0()}function x0(){ah=Om=!1;var n=0;ia!==0&&(XI()&&(n=ia),ia=0);for(var s=Rn(),o=null,u=sh;u!==null;){var f=u.next,d=N0(u,s);d===0?(u.next=null,o===null?sh=f:o.next=f,f===null&&(oo=o)):(o=u,(n!==0||(d&3)!==0)&&(ah=!0)),u=f}Kl(n)}function N0(n,s){for(var o=n.suspendedLanes,u=n.pingedLanes,f=n.expirationTimes,d=n.pendingLanes&-62914561;0<d;){var b=31-Wt(d),T=1<<b,C=f[b];C===-1?((T&o)===0||(T&u)!==0)&&(f[b]=el(T,s)):C<=s&&(n.expiredLanes|=T),d&=~T}if(s=rt,o=Be,o=Ta(n,n===s?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u=n.callbackNode,o===0||n===s&&(Xe===2||Xe===9)||n.cancelPendingCommit!==null)return u!==null&&u!==null&&As(u),n.callbackNode=null,n.callbackPriority=0;if((o&3)===0||Cs(n,o)){if(s=o&-o,s===n.callbackPriority)return s;switch(u!==null&&As(u),Aa(o)){case 2:case 8:o=ba;break;case 32:o=Ss;break;case 268435456:o=Ea;break;default:o=Ss}return u=O0.bind(null,n),o=Ts(o,u),n.callbackPriority=s,n.callbackNode=o,s}return u!==null&&u!==null&&As(u),n.callbackPriority=2,n.callbackNode=null,2}function O0(n,s){if($t!==0&&$t!==5)return n.callbackNode=null,n.callbackPriority=0,null;var o=n.callbackNode;if(rh()&&n.callbackNode!==o)return null;var u=Be;return u=Ta(n,n===rt?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u===0?null:(d0(n,u,s),N0(n,Rn()),n.callbackNode!=null&&n.callbackNode===o?O0.bind(null,n):null)}function D0(n,s){if(rh())return null;d0(n,s,!0)}function FI(){JI(function(){(Qe&6)!==0?Ts(Jo,BI):x0()})}function Pm(){return ia===0&&(ia=tl()),ia}function P0(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:xa(""+n)}function k0(n,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,n.id&&o.setAttribute("form",n.id),s.parentNode.insertBefore(o,s),n=new FormData(n),o.parentNode.removeChild(o),n}function qI(n,s,o,u,f){if(s==="submit"&&o&&o.stateNode===f){var d=P0((f[bt]||null).action),b=u.submitter;b&&(s=(s=b[bt]||null)?P0(s.formAction):b.getAttribute("formAction"),s!==null&&(d=s,b=null));var T=new Na("action","action",null,u,f);n.push({event:T,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(ia!==0){var C=b?k0(f,b):new FormData(f);Zd(o,{pending:!0,data:C,method:f.method,action:d},null,C)}}else typeof d=="function"&&(T.preventDefault(),C=b?k0(f,b):new FormData(f),Zd(o,{pending:!0,data:C,method:f.method,action:d},d,C))},currentTarget:f}]})}}for(var km=0;km<vd.length;km++){var Mm=vd[km],HI=Mm.toLowerCase(),GI=Mm[0].toUpperCase()+Mm.slice(1);Hn(HI,"on"+GI)}Hn(dv,"onAnimationEnd"),Hn(mv,"onAnimationIteration"),Hn(pv,"onAnimationStart"),Hn("dblclick","onDoubleClick"),Hn("focusin","onFocus"),Hn("focusout","onBlur"),Hn(lI,"onTransitionRun"),Hn(uI,"onTransitionStart"),Hn(cI,"onTransitionCancel"),Hn(gv,"onTransitionEnd"),Pi("onMouseEnter",["mouseout","mouseover"]),Pi("onMouseLeave",["mouseout","mouseover"]),Pi("onPointerEnter",["pointerout","pointerover"]),Pi("onPointerLeave",["pointerout","pointerover"]),Fn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Fn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Fn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Fn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Fn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Fn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$I=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Yl));function M0(n,s){s=(s&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],f=u.event;u=u.listeners;e:{var d=void 0;if(s)for(var b=u.length-1;0<=b;b--){var T=u[b],C=T.instance,B=T.currentTarget;if(T=T.listener,C!==d&&f.isPropagationStopped())break e;d=T,f.currentTarget=B;try{d(f)}catch(Q){Kc(Q)}f.currentTarget=null,d=C}else for(b=0;b<u.length;b++){if(T=u[b],C=T.instance,B=T.currentTarget,T=T.listener,C!==d&&f.isPropagationStopped())break e;d=T,f.currentTarget=B;try{d(f)}catch(Q){Kc(Q)}f.currentTarget=null,d=C}}}}function Ve(n,s){var o=s[sl];o===void 0&&(o=s[sl]=new Set);var u=n+"__bubble";o.has(u)||(V0(s,n,2,!1),o.add(u))}function Vm(n,s,o){var u=0;s&&(u|=4),V0(o,n,u,s)}var oh="_reactListening"+Math.random().toString(36).slice(2);function Lm(n){if(!n[oh]){n[oh]=!0,al.forEach(function(o){o!=="selectionchange"&&($I.has(o)||Vm(o,!1,n),Vm(o,!0,n))});var s=n.nodeType===9?n:n.ownerDocument;s===null||s[oh]||(s[oh]=!0,Vm("selectionchange",!1,s))}}function V0(n,s,o,u){switch(ab(s)){case 2:var f=_R;break;case 8:f=bR;break;default:f=Wm}o=f.bind(null,s,o,n),f=void 0,!On||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),u?f!==void 0?n.addEventListener(s,o,{capture:!0,passive:f}):n.addEventListener(s,o,!0):f!==void 0?n.addEventListener(s,o,{passive:f}):n.addEventListener(s,o,!1)}function Um(n,s,o,u,f){var d=u;if((s&1)===0&&(s&2)===0&&u!==null)e:for(;;){if(u===null)return;var b=u.tag;if(b===3||b===4){var T=u.stateNode.containerInfo;if(T===f)break;if(b===4)for(b=u.return;b!==null;){var C=b.tag;if((C===3||C===4)&&b.stateNode.containerInfo===f)return;b=b.return}for(;T!==null;){if(b=Di(T),b===null)return;if(C=b.tag,C===5||C===6||C===26||C===27){u=d=b;continue e}T=T.parentNode}}u=u.return}uc(function(){var B=d,Q=Nn(o),Z=[];e:{var q=yv.get(n);if(q!==void 0){var H=Na,Ae=n;switch(n){case"keypress":if(ii(o)===0)break e;case"keydown":case"keyup":H=Va;break;case"focusin":Ae="focus",H=Pa;break;case"focusout":Ae="blur",H=Pa;break;case"beforeblur":case"afterblur":H=Pa;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=Dn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=cd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=yc;break;case dv:case mv:case pv:H=ka;break;case gv:H=_c;break;case"scroll":case"scrollend":H=cc;break;case"wheel":H=La;break;case"copy":case"cut":case"paste":H=Ma;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=vl;break;case"toggle":case"beforetoggle":H=Ec}var be=(s&4)!==0,et=!be&&(n==="scroll"||n==="scrollend"),L=be?q!==null?q+"Capture":null:q;be=[];for(var P=B,z;P!==null;){var J=P;if(z=J.stateNode,J=J.tag,J!==5&&J!==26&&J!==27||z===null||L===null||(J=Vs(P,L),J!=null&&be.push(Ql(P,J,z))),et)break;P=P.return}0<be.length&&(q=new H(q,Ae,null,o,Q),Z.push({event:q,listeners:be}))}}if((s&7)===0){e:{if(q=n==="mouseover"||n==="pointerover",H=n==="mouseout"||n==="pointerout",q&&o!==Vi&&(Ae=o.relatedTarget||o.fromElement)&&(Di(Ae)||Ae[Cn]))break e;if((H||q)&&(q=Q.window===Q?Q:(q=Q.ownerDocument)?q.defaultView||q.parentWindow:window,H?(Ae=o.relatedTarget||o.toElement,H=B,Ae=Ae?Di(Ae):null,Ae!==null&&(et=l(Ae),be=Ae.tag,Ae!==et||be!==5&&be!==27&&be!==6)&&(Ae=null)):(H=null,Ae=B),H!==Ae)){if(be=Dn,J="onMouseLeave",L="onMouseEnter",P="mouse",(n==="pointerout"||n==="pointerover")&&(be=vl,J="onPointerLeave",L="onPointerEnter",P="pointer"),et=H==null?q:Zn(H),z=Ae==null?q:Zn(Ae),q=new be(J,P+"leave",H,o,Q),q.target=et,q.relatedTarget=z,J=null,Di(Q)===B&&(be=new be(L,P+"enter",Ae,o,Q),be.target=z,be.relatedTarget=et,J=be),et=J,H&&Ae)t:{for(be=H,L=Ae,P=0,z=be;z;z=lo(z))P++;for(z=0,J=L;J;J=lo(J))z++;for(;0<P-z;)be=lo(be),P--;for(;0<z-P;)L=lo(L),z--;for(;P--;){if(be===L||L!==null&&be===L.alternate)break t;be=lo(be),L=lo(L)}be=null}else be=null;H!==null&&L0(Z,q,H,be,!1),Ae!==null&&et!==null&&L0(Z,et,Ae,be,!0)}}e:{if(q=B?Zn(B):window,H=q.nodeName&&q.nodeName.toLowerCase(),H==="select"||H==="input"&&q.type==="file")var fe=nv;else if(Nt(q))if(iv)fe=sI;else{fe=iI;var Pe=nI}else H=q.nodeName,!H||H.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?B&&hl(B.elementType)&&(fe=nv):fe=rI;if(fe&&(fe=fe(n,B))){Bi(Z,fe,o,Q);break e}Pe&&Pe(n,q,B),n==="focusout"&&B&&q.type==="number"&&B.memoizedProps.value!=null&&Tr(q,"number",q.value)}switch(Pe=B?Zn(B):window,n){case"focusin":(Nt(Pe)||Pe.contentEditable==="true")&&(Ua=Pe,pd=B,El=null);break;case"focusout":El=pd=Ua=null;break;case"mousedown":gd=!0;break;case"contextmenu":case"mouseup":case"dragend":gd=!1,hv(Z,o,Q);break;case"selectionchange":if(oI)break;case"keydown":case"keyup":hv(Z,o,Q)}var pe;if(ai)e:{switch(n){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else je?$(n,o)&&(Ee="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(Ee="onCompositionStart");Ee&&(_&&o.locale!=="ko"&&(je||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&je&&(pe=dl()):(ni=Q,Ar="value"in ni?ni.value:ni.textContent,je=!0)),Pe=lh(B,Ee),0<Pe.length&&(Ee=new gl(Ee,n,null,o,Q),Z.push({event:Ee,listeners:Pe}),pe?Ee.data=pe:(pe=ae(o),pe!==null&&(Ee.data=pe)))),(pe=y?xt(n,o):ze(n,o))&&(Ee=lh(B,"onBeforeInput"),0<Ee.length&&(Pe=new gl("onBeforeInput","beforeinput",null,o,Q),Z.push({event:Pe,listeners:Ee}),Pe.data=pe)),qI(Z,n,B,o,Q)}M0(Z,s)})}function Ql(n,s,o){return{instance:n,listener:s,currentTarget:o}}function lh(n,s){for(var o=s+"Capture",u=[];n!==null;){var f=n,d=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||d===null||(f=Vs(n,o),f!=null&&u.unshift(Ql(n,f,d)),f=Vs(n,s),f!=null&&u.push(Ql(n,f,d))),n.tag===3)return u;n=n.return}return[]}function lo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function L0(n,s,o,u,f){for(var d=s._reactName,b=[];o!==null&&o!==u;){var T=o,C=T.alternate,B=T.stateNode;if(T=T.tag,C!==null&&C===u)break;T!==5&&T!==26&&T!==27||B===null||(C=B,f?(B=Vs(o,d),B!=null&&b.unshift(Ql(o,B,C))):f||(B=Vs(o,d),B!=null&&b.push(Ql(o,B,C)))),o=o.return}b.length!==0&&n.push({event:s,listeners:b})}var KI=/\r\n?/g,YI=/\u0000|\uFFFD/g;function U0(n){return(typeof n=="string"?n:""+n).replace(KI,`
`).replace(YI,"")}function j0(n,s){return s=U0(s),U0(n)===s}function uh(){}function Ze(n,s,o,u,f,d){switch(o){case"children":typeof u=="string"?s==="body"||s==="textarea"&&u===""||xn(n,u):(typeof u=="number"||typeof u=="bigint")&&s!=="body"&&xn(n,""+u);break;case"className":ei(n,"class",u);break;case"tabIndex":ei(n,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":ei(n,o,u);break;case"style":cl(n,u,d);break;case"data":if(s!=="object"){ei(n,"data",u);break}case"src":case"href":if(u===""&&(s!=="a"||o!=="href")){n.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=xa(""+u),n.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){n.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(o==="formAction"?(s!=="input"&&Ze(n,s,"name",f.name,f,null),Ze(n,s,"formEncType",f.formEncType,f,null),Ze(n,s,"formMethod",f.formMethod,f,null),Ze(n,s,"formTarget",f.formTarget,f,null)):(Ze(n,s,"encType",f.encType,f,null),Ze(n,s,"method",f.method,f,null),Ze(n,s,"target",f.target,f,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=xa(""+u),n.setAttribute(o,u);break;case"onClick":u!=null&&(n.onclick=uh);break;case"onScroll":u!=null&&Ve("scroll",n);break;case"onScrollEnd":u!=null&&Ve("scrollend",n);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(r(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(r(60));n.innerHTML=o}}break;case"multiple":n.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":n.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){n.removeAttribute("xlink:href");break}o=xa(""+u),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""+u):n.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""):n.removeAttribute(o);break;case"capture":case"download":u===!0?n.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,u):n.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?n.setAttribute(o,u):n.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?n.removeAttribute(o):n.setAttribute(o,u);break;case"popover":Ve("beforetoggle",n),Ve("toggle",n),Er(n,"popover",u);break;case"xlinkActuate":qt(n,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":qt(n,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":qt(n,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":qt(n,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":qt(n,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":qt(n,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":qt(n,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":qt(n,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":qt(n,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":Er(n,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=ld.get(o)||o,Er(n,o,u))}}function jm(n,s,o,u,f,d){switch(o){case"style":cl(n,u,d);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(r(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(r(60));n.innerHTML=o}}break;case"children":typeof u=="string"?xn(n,u):(typeof u=="number"||typeof u=="bigint")&&xn(n,""+u);break;case"onScroll":u!=null&&Ve("scroll",n);break;case"onScrollEnd":u!=null&&Ve("scrollend",n);break;case"onClick":u!=null&&(n.onclick=uh);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Sa.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),s=o.slice(2,f?o.length-7:void 0),d=n[bt]||null,d=d!=null?d[o]:null,typeof d=="function"&&n.removeEventListener(s,d,f),typeof u=="function")){typeof d!="function"&&d!==null&&(o in n?n[o]=null:n.hasAttribute(o)&&n.removeAttribute(o)),n.addEventListener(s,u,f);break e}o in n?n[o]=u:u===!0?n.setAttribute(o,""):Er(n,o,u)}}}function Kt(n,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ve("error",n),Ve("load",n);var u=!1,f=!1,d;for(d in o)if(o.hasOwnProperty(d)){var b=o[d];if(b!=null)switch(d){case"src":u=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,s));default:Ze(n,s,d,b,o,null)}}f&&Ze(n,s,"srcSet",o.srcSet,o,null),u&&Ze(n,s,"src",o.src,o,null);return;case"input":Ve("invalid",n);var T=d=b=f=null,C=null,B=null;for(u in o)if(o.hasOwnProperty(u)){var Q=o[u];if(Q!=null)switch(u){case"name":f=Q;break;case"type":b=Q;break;case"checked":C=Q;break;case"defaultChecked":B=Q;break;case"value":d=Q;break;case"defaultValue":T=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(r(137,s));break;default:Ze(n,s,u,Q,o,null)}}Ps(n,d,T,C,B,b,f,!1),Ca(n);return;case"select":Ve("invalid",n),u=b=d=null;for(f in o)if(o.hasOwnProperty(f)&&(T=o[f],T!=null))switch(f){case"value":d=T;break;case"defaultValue":b=T;break;case"multiple":u=T;default:Ze(n,s,f,T,o,null)}s=d,o=b,n.multiple=!!u,s!=null?Mi(n,!!u,s,!1):o!=null&&Mi(n,!!u,o,!0);return;case"textarea":Ve("invalid",n),d=f=u=null;for(b in o)if(o.hasOwnProperty(b)&&(T=o[b],T!=null))switch(b){case"value":u=T;break;case"defaultValue":f=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Ze(n,s,b,T,o,null)}ks(n,u,f,d),Ca(n);return;case"option":for(C in o)if(o.hasOwnProperty(C)&&(u=o[C],u!=null))switch(C){case"selected":n.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:Ze(n,s,C,u,o,null)}return;case"dialog":Ve("beforetoggle",n),Ve("toggle",n),Ve("cancel",n),Ve("close",n);break;case"iframe":case"object":Ve("load",n);break;case"video":case"audio":for(u=0;u<Yl.length;u++)Ve(Yl[u],n);break;case"image":Ve("error",n),Ve("load",n);break;case"details":Ve("toggle",n);break;case"embed":case"source":case"link":Ve("error",n),Ve("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(B in o)if(o.hasOwnProperty(B)&&(u=o[B],u!=null))switch(B){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,s));default:Ze(n,s,B,u,o,null)}return;default:if(hl(s)){for(Q in o)o.hasOwnProperty(Q)&&(u=o[Q],u!==void 0&&jm(n,s,Q,u,o,void 0));return}}for(T in o)o.hasOwnProperty(T)&&(u=o[T],u!=null&&Ze(n,s,T,u,o,null))}function QI(n,s,o,u){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,d=null,b=null,T=null,C=null,B=null,Q=null;for(H in o){var Z=o[H];if(o.hasOwnProperty(H)&&Z!=null)switch(H){case"checked":break;case"value":break;case"defaultValue":C=Z;default:u.hasOwnProperty(H)||Ze(n,s,H,null,u,Z)}}for(var q in u){var H=u[q];if(Z=o[q],u.hasOwnProperty(q)&&(H!=null||Z!=null))switch(q){case"type":d=H;break;case"name":f=H;break;case"checked":B=H;break;case"defaultChecked":Q=H;break;case"value":b=H;break;case"defaultValue":T=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(r(137,s));break;default:H!==Z&&Ze(n,s,q,H,u,Z)}}yn(n,b,T,C,B,Q,d,f);return;case"select":H=b=T=q=null;for(d in o)if(C=o[d],o.hasOwnProperty(d)&&C!=null)switch(d){case"value":break;case"multiple":H=C;default:u.hasOwnProperty(d)||Ze(n,s,d,null,u,C)}for(f in u)if(d=u[f],C=o[f],u.hasOwnProperty(f)&&(d!=null||C!=null))switch(f){case"value":q=d;break;case"defaultValue":T=d;break;case"multiple":b=d;default:d!==C&&Ze(n,s,f,d,u,C)}s=T,o=b,u=H,q!=null?Mi(n,!!o,q,!1):!!u!=!!o&&(s!=null?Mi(n,!!o,s,!0):Mi(n,!!o,o?[]:"",!1));return;case"textarea":H=q=null;for(T in o)if(f=o[T],o.hasOwnProperty(T)&&f!=null&&!u.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ze(n,s,T,null,u,f)}for(b in u)if(f=u[b],d=o[b],u.hasOwnProperty(b)&&(f!=null||d!=null))switch(b){case"value":q=f;break;case"defaultValue":H=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==d&&Ze(n,s,b,f,u,d)}We(n,q,H);return;case"option":for(var Ae in o)if(q=o[Ae],o.hasOwnProperty(Ae)&&q!=null&&!u.hasOwnProperty(Ae))switch(Ae){case"selected":n.selected=!1;break;default:Ze(n,s,Ae,null,u,q)}for(C in u)if(q=u[C],H=o[C],u.hasOwnProperty(C)&&q!==H&&(q!=null||H!=null))switch(C){case"selected":n.selected=q&&typeof q!="function"&&typeof q!="symbol";break;default:Ze(n,s,C,q,u,H)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var be in o)q=o[be],o.hasOwnProperty(be)&&q!=null&&!u.hasOwnProperty(be)&&Ze(n,s,be,null,u,q);for(B in u)if(q=u[B],H=o[B],u.hasOwnProperty(B)&&q!==H&&(q!=null||H!=null))switch(B){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(r(137,s));break;default:Ze(n,s,B,q,u,H)}return;default:if(hl(s)){for(var et in o)q=o[et],o.hasOwnProperty(et)&&q!==void 0&&!u.hasOwnProperty(et)&&jm(n,s,et,void 0,u,q);for(Q in u)q=u[Q],H=o[Q],!u.hasOwnProperty(Q)||q===H||q===void 0&&H===void 0||jm(n,s,Q,q,u,H);return}}for(var L in o)q=o[L],o.hasOwnProperty(L)&&q!=null&&!u.hasOwnProperty(L)&&Ze(n,s,L,null,u,q);for(Z in u)q=u[Z],H=o[Z],!u.hasOwnProperty(Z)||q===H||q==null&&H==null||Ze(n,s,Z,q,u,H)}var zm=null,Bm=null;function ch(n){return n.nodeType===9?n:n.ownerDocument}function z0(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function B0(n,s){if(n===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&s==="foreignObject"?0:n}function Fm(n,s){return n==="textarea"||n==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var qm=null;function XI(){var n=window.event;return n&&n.type==="popstate"?n===qm?!1:(qm=n,!0):(qm=null,!1)}var F0=typeof setTimeout=="function"?setTimeout:void 0,WI=typeof clearTimeout=="function"?clearTimeout:void 0,q0=typeof Promise=="function"?Promise:void 0,JI=typeof queueMicrotask=="function"?queueMicrotask:typeof q0<"u"?function(n){return q0.resolve(null).then(n).catch(ZI)}:F0;function ZI(n){setTimeout(function(){throw n})}function jr(n){return n==="head"}function H0(n,s){var o=s,u=0,f=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(0<u&&8>u){o=u;var b=n.ownerDocument;if(o&1&&Xl(b.documentElement),o&2&&Xl(b.body),o&4)for(o=b.head,Xl(o),b=o.firstChild;b;){var T=b.nextSibling,C=b.nodeName;b[xs]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&b.rel.toLowerCase()==="stylesheet"||o.removeChild(b),b=T}}if(f===0){n.removeChild(d),ru(s);return}f--}else o==="$"||o==="$?"||o==="$!"?f++:u=o.charCodeAt(0)-48;else u=0;o=d}while(o);ru(s)}function Hm(n){var s=n.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Hm(o),br(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}n.removeChild(o)}}function eR(n,s,o,u){for(;n.nodeType===1;){var f=o;if(n.nodeName.toLowerCase()!==s.toLowerCase()){if(!u&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(u){if(!n[xs])switch(s){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(d=n.getAttribute("rel"),d==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(d!==f.rel||n.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||n.getAttribute("title")!==(f.title==null?null:f.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(d=n.getAttribute("src"),(d!==(f.src==null?null:f.src)||n.getAttribute("type")!==(f.type==null?null:f.type)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&d&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(s==="input"&&n.type==="hidden"){var d=f.name==null?null:""+f.name;if(f.type==="hidden"&&n.getAttribute("name")===d)return n}else return n;if(n=$n(n.nextSibling),n===null)break}return null}function tR(n,s,o){if(s==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!o||(n=$n(n.nextSibling),n===null))return null;return n}function Gm(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function nR(n,s){var o=n.ownerDocument;if(n.data!=="$?"||o.readyState==="complete")s();else{var u=function(){s(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),n._reactRetry=u}}function $n(n){for(;n!=null;n=n.nextSibling){var s=n.nodeType;if(s===1||s===3)break;if(s===8){if(s=n.data,s==="$"||s==="$!"||s==="$?"||s==="F!"||s==="F")break;if(s==="/$")return null}}return n}var $m=null;function G0(n){n=n.previousSibling;for(var s=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(s===0)return n;s--}else o==="/$"&&s++}n=n.previousSibling}return null}function $0(n,s,o){switch(s=ch(o),n){case"html":if(n=s.documentElement,!n)throw Error(r(452));return n;case"head":if(n=s.head,!n)throw Error(r(453));return n;case"body":if(n=s.body,!n)throw Error(r(454));return n;default:throw Error(r(451))}}function Xl(n){for(var s=n.attributes;s.length;)n.removeAttributeNode(s[0]);br(n)}var jn=new Map,K0=new Set;function hh(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var er=le.d;le.d={f:iR,r:rR,D:sR,C:aR,L:oR,m:lR,X:cR,S:uR,M:hR};function iR(){var n=er.f(),s=nh();return n||s}function rR(n){var s=Jn(n);s!==null&&s.tag===5&&s.type==="form"?d_(s):er.r(n)}var uo=typeof document>"u"?null:document;function Y0(n,s,o){var u=uo;if(u&&typeof s=="string"&&s){var f=Et(s);f='link[rel="'+n+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),K0.has(f)||(K0.add(f),n={rel:n,crossOrigin:o,href:s},u.querySelector(f)===null&&(s=u.createElement("link"),Kt(s,"link",n),pt(s),u.head.appendChild(s)))}}function sR(n){er.D(n),Y0("dns-prefetch",n,null)}function aR(n,s){er.C(n,s),Y0("preconnect",n,s)}function oR(n,s,o){er.L(n,s,o);var u=uo;if(u&&n&&s){var f='link[rel="preload"][as="'+Et(s)+'"]';s==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+Et(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+Et(o.imageSizes)+'"]')):f+='[href="'+Et(n)+'"]';var d=f;switch(s){case"style":d=co(n);break;case"script":d=ho(n)}jn.has(d)||(n=v({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:n,as:s},o),jn.set(d,n),u.querySelector(f)!==null||s==="style"&&u.querySelector(Wl(d))||s==="script"&&u.querySelector(Jl(d))||(s=u.createElement("link"),Kt(s,"link",n),pt(s),u.head.appendChild(s)))}}function lR(n,s){er.m(n,s);var o=uo;if(o&&n){var u=s&&typeof s.as=="string"?s.as:"script",f='link[rel="modulepreload"][as="'+Et(u)+'"][href="'+Et(n)+'"]',d=f;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=ho(n)}if(!jn.has(d)&&(n=v({rel:"modulepreload",href:n},s),jn.set(d,n),o.querySelector(f)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Jl(d)))return}u=o.createElement("link"),Kt(u,"link",n),pt(u),o.head.appendChild(u)}}}function uR(n,s,o){er.S(n,s,o);var u=uo;if(u&&n){var f=an(u).hoistableStyles,d=co(n);s=s||"default";var b=f.get(d);if(!b){var T={loading:0,preload:null};if(b=u.querySelector(Wl(d)))T.loading=5;else{n=v({rel:"stylesheet",href:n,"data-precedence":s},o),(o=jn.get(d))&&Km(n,o);var C=b=u.createElement("link");pt(C),Kt(C,"link",n),C._p=new Promise(function(B,Q){C.onload=B,C.onerror=Q}),C.addEventListener("load",function(){T.loading|=1}),C.addEventListener("error",function(){T.loading|=2}),T.loading|=4,fh(b,s,u)}b={type:"stylesheet",instance:b,count:1,state:T},f.set(d,b)}}}function cR(n,s){er.X(n,s);var o=uo;if(o&&n){var u=an(o).hoistableScripts,f=ho(n),d=u.get(f);d||(d=o.querySelector(Jl(f)),d||(n=v({src:n,async:!0},s),(s=jn.get(f))&&Ym(n,s),d=o.createElement("script"),pt(d),Kt(d,"link",n),o.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},u.set(f,d))}}function hR(n,s){er.M(n,s);var o=uo;if(o&&n){var u=an(o).hoistableScripts,f=ho(n),d=u.get(f);d||(d=o.querySelector(Jl(f)),d||(n=v({src:n,async:!0,type:"module"},s),(s=jn.get(f))&&Ym(n,s),d=o.createElement("script"),pt(d),Kt(d,"link",n),o.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},u.set(f,d))}}function Q0(n,s,o,u){var f=(f=we.current)?hh(f):null;if(!f)throw Error(r(446));switch(n){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=co(o.href),o=an(f).hoistableStyles,u=o.get(s),u||(u={type:"style",instance:null,count:0,state:null},o.set(s,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){n=co(o.href);var d=an(f).hoistableStyles,b=d.get(n);if(b||(f=f.ownerDocument||f,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(n,b),(d=f.querySelector(Wl(n)))&&!d._p&&(b.instance=d,b.state.loading=5),jn.has(n)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},jn.set(n,o),d||fR(f,n,o,b.state))),s&&u===null)throw Error(r(528,""));return b}if(s&&u!==null)throw Error(r(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=ho(o),o=an(f).hoistableScripts,u=o.get(s),u||(u={type:"script",instance:null,count:0,state:null},o.set(s,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,n))}}function co(n){return'href="'+Et(n)+'"'}function Wl(n){return'link[rel="stylesheet"]['+n+"]"}function X0(n){return v({},n,{"data-precedence":n.precedence,precedence:null})}function fR(n,s,o,u){n.querySelector('link[rel="preload"][as="style"]['+s+"]")?u.loading=1:(s=n.createElement("link"),u.preload=s,s.addEventListener("load",function(){return u.loading|=1}),s.addEventListener("error",function(){return u.loading|=2}),Kt(s,"link",o),pt(s),n.head.appendChild(s))}function ho(n){return'[src="'+Et(n)+'"]'}function Jl(n){return"script[async]"+n}function W0(n,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var u=n.querySelector('style[data-href~="'+Et(o.href)+'"]');if(u)return s.instance=u,pt(u),u;var f=v({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(n.ownerDocument||n).createElement("style"),pt(u),Kt(u,"style",f),fh(u,o.precedence,n),s.instance=u;case"stylesheet":f=co(o.href);var d=n.querySelector(Wl(f));if(d)return s.state.loading|=4,s.instance=d,pt(d),d;u=X0(o),(f=jn.get(f))&&Km(u,f),d=(n.ownerDocument||n).createElement("link"),pt(d);var b=d;return b._p=new Promise(function(T,C){b.onload=T,b.onerror=C}),Kt(d,"link",u),s.state.loading|=4,fh(d,o.precedence,n),s.instance=d;case"script":return d=ho(o.src),(f=n.querySelector(Jl(d)))?(s.instance=f,pt(f),f):(u=o,(f=jn.get(d))&&(u=v({},o),Ym(u,f)),n=n.ownerDocument||n,f=n.createElement("script"),pt(f),Kt(f,"link",u),n.head.appendChild(f),s.instance=f);case"void":return null;default:throw Error(r(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(u=s.instance,s.state.loading|=4,fh(u,o.precedence,n));return s.instance}function fh(n,s,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=u.length?u[u.length-1]:null,d=f,b=0;b<u.length;b++){var T=u[b];if(T.dataset.precedence===s)d=T;else if(d!==f)break}d?d.parentNode.insertBefore(n,d.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(n,s.firstChild))}function Km(n,s){n.crossOrigin==null&&(n.crossOrigin=s.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=s.referrerPolicy),n.title==null&&(n.title=s.title)}function Ym(n,s){n.crossOrigin==null&&(n.crossOrigin=s.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=s.referrerPolicy),n.integrity==null&&(n.integrity=s.integrity)}var dh=null;function J0(n,s,o){if(dh===null){var u=new Map,f=dh=new Map;f.set(o,u)}else f=dh,u=f.get(o),u||(u=new Map,f.set(o,u));if(u.has(n))return u;for(u.set(n,null),o=o.getElementsByTagName(n),f=0;f<o.length;f++){var d=o[f];if(!(d[xs]||d[Ct]||n==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var b=d.getAttribute(s)||"";b=n+b;var T=u.get(b);T?T.push(d):u.set(b,[d])}}return u}function Z0(n,s,o){n=n.ownerDocument||n,n.head.insertBefore(o,s==="title"?n.querySelector("head > title"):null)}function dR(n,s,o){if(o===1||s.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return n=s.disabled,typeof s.precedence=="string"&&n==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function eb(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var Zl=null;function mR(){}function pR(n,s,o){if(Zl===null)throw Error(r(475));var u=Zl;if(s.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=co(o.href),d=n.querySelector(Wl(f));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(u.count++,u=mh.bind(u),n.then(u,u)),s.state.loading|=4,s.instance=d,pt(d);return}d=n.ownerDocument||n,o=X0(o),(f=jn.get(f))&&Km(o,f),d=d.createElement("link"),pt(d);var b=d;b._p=new Promise(function(T,C){b.onload=T,b.onerror=C}),Kt(d,"link",o),s.instance=d}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(s,n),(n=s.state.preload)&&(s.state.loading&3)===0&&(u.count++,s=mh.bind(u),n.addEventListener("load",s),n.addEventListener("error",s))}}function gR(){if(Zl===null)throw Error(r(475));var n=Zl;return n.stylesheets&&n.count===0&&Qm(n,n.stylesheets),0<n.count?function(s){var o=setTimeout(function(){if(n.stylesheets&&Qm(n,n.stylesheets),n.unsuspend){var u=n.unsuspend;n.unsuspend=null,u()}},6e4);return n.unsuspend=s,function(){n.unsuspend=null,clearTimeout(o)}}:null}function mh(){if(this.count--,this.count===0){if(this.stylesheets)Qm(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var ph=null;function Qm(n,s){n.stylesheets=null,n.unsuspend!==null&&(n.count++,ph=new Map,s.forEach(yR,n),ph=null,mh.call(n))}function yR(n,s){if(!(s.state.loading&4)){var o=ph.get(n);if(o)var u=o.get(null);else{o=new Map,ph.set(n,o);for(var f=n.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<f.length;d++){var b=f[d];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(o.set(b.dataset.precedence,b),u=b)}u&&o.set(null,u)}f=s.instance,b=f.getAttribute("data-precedence"),d=o.get(b)||u,d===u&&o.set(null,f),o.set(b,f),this.count++,u=mh.bind(this),f.addEventListener("load",u),f.addEventListener("error",u),d?d.parentNode.insertBefore(f,d.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(f,n.firstChild)),s.state.loading|=4}}var eu={$$typeof:W,Provider:null,Consumer:null,_currentValue:ye,_currentValue2:ye,_threadCount:0};function vR(n,s,o,u,f,d,b,T){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ni(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ni(0),this.hiddenUpdates=Ni(null),this.identifierPrefix=u,this.onUncaughtError=f,this.onCaughtError=d,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function tb(n,s,o,u,f,d,b,T,C,B,Q,Z){return n=new vR(n,s,o,b,T,C,B,Z),s=1,d===!0&&(s|=24),d=_n(3,null,null,s),n.current=d,d.stateNode=n,s=Nd(),s.refCount++,n.pooledCache=s,s.refCount++,d.memoizedState={element:u,isDehydrated:o,cache:s},kd(d),n}function nb(n){return n?(n=Fa,n):Fa}function ib(n,s,o,u,f,d){f=nb(f),u.context===null?u.context=f:u.pendingContext=f,u=Ir(s),u.payload={element:o},d=d===void 0?null:d,d!==null&&(u.callback=d),o=Rr(n,u,s),o!==null&&(Sn(o,n,s),Nl(o,n,s))}function rb(n,s){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<s?o:s}}function Xm(n,s){rb(n,s),(n=n.alternate)&&rb(n,s)}function sb(n){if(n.tag===13){var s=Ba(n,67108864);s!==null&&Sn(s,n,67108864),Xm(n,67108864)}}var gh=!0;function _R(n,s,o,u){var f=Y.T;Y.T=null;var d=le.p;try{le.p=2,Wm(n,s,o,u)}finally{le.p=d,Y.T=f}}function bR(n,s,o,u){var f=Y.T;Y.T=null;var d=le.p;try{le.p=8,Wm(n,s,o,u)}finally{le.p=d,Y.T=f}}function Wm(n,s,o,u){if(gh){var f=Jm(u);if(f===null)Um(n,s,u,yh,o),ob(n,u);else if(TR(f,n,s,o,u))u.stopPropagation();else if(ob(n,u),s&4&&-1<ER.indexOf(n)){for(;f!==null;){var d=Jn(f);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var b=Bn(d.pendingLanes);if(b!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;b;){var C=1<<31-Wt(b);T.entanglements[1]|=C,b&=~C}fi(d),(Qe&6)===0&&(eh=Rn()+500,Kl(0))}}break;case 13:T=Ba(d,2),T!==null&&Sn(T,d,2),nh(),Xm(d,2)}if(d=Jm(u),d===null&&Um(n,s,u,yh,o),d===f)break;f=d}f!==null&&u.stopPropagation()}else Um(n,s,u,null,o)}}function Jm(n){return n=Nn(n),Zm(n)}var yh=null;function Zm(n){if(yh=null,n=Di(n),n!==null){var s=l(n);if(s===null)n=null;else{var o=s.tag;if(o===13){if(n=c(s),n!==null)return n;n=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;n=null}else s!==n&&(n=null)}}return yh=n,null}function ab(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(nd()){case Jo:return 2;case ba:return 8;case Ss:case id:return 32;case Ea:return 268435456;default:return 32}default:return 32}}var ep=!1,zr=null,Br=null,Fr=null,tu=new Map,nu=new Map,qr=[],ER="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ob(n,s){switch(n){case"focusin":case"focusout":zr=null;break;case"dragenter":case"dragleave":Br=null;break;case"mouseover":case"mouseout":Fr=null;break;case"pointerover":case"pointerout":tu.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":nu.delete(s.pointerId)}}function iu(n,s,o,u,f,d){return n===null||n.nativeEvent!==d?(n={blockedOn:s,domEventName:o,eventSystemFlags:u,nativeEvent:d,targetContainers:[f]},s!==null&&(s=Jn(s),s!==null&&sb(s)),n):(n.eventSystemFlags|=u,s=n.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),n)}function TR(n,s,o,u,f){switch(s){case"focusin":return zr=iu(zr,n,s,o,u,f),!0;case"dragenter":return Br=iu(Br,n,s,o,u,f),!0;case"mouseover":return Fr=iu(Fr,n,s,o,u,f),!0;case"pointerover":var d=f.pointerId;return tu.set(d,iu(tu.get(d)||null,n,s,o,u,f)),!0;case"gotpointercapture":return d=f.pointerId,nu.set(d,iu(nu.get(d)||null,n,s,o,u,f)),!0}return!1}function lb(n){var s=Di(n.target);if(s!==null){var o=l(s);if(o!==null){if(s=o.tag,s===13){if(s=c(o),s!==null){n.blockedOn=s,nc(n.priority,function(){if(o.tag===13){var u=An();u=yr(u);var f=Ba(o,u);f!==null&&Sn(f,o,u),Xm(o,u)}});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function vh(n){if(n.blockedOn!==null)return!1;for(var s=n.targetContainers;0<s.length;){var o=Jm(n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);Vi=u,o.target.dispatchEvent(u),Vi=null}else return s=Jn(o),s!==null&&sb(s),n.blockedOn=o,!1;s.shift()}return!0}function ub(n,s,o){vh(n)&&o.delete(s)}function AR(){ep=!1,zr!==null&&vh(zr)&&(zr=null),Br!==null&&vh(Br)&&(Br=null),Fr!==null&&vh(Fr)&&(Fr=null),tu.forEach(ub),nu.forEach(ub)}function _h(n,s){n.blockedOn===s&&(n.blockedOn=null,ep||(ep=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,AR)))}var bh=null;function cb(n){bh!==n&&(bh=n,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){bh===n&&(bh=null);for(var s=0;s<n.length;s+=3){var o=n[s],u=n[s+1],f=n[s+2];if(typeof u!="function"){if(Zm(u||o)===null)continue;break}var d=Jn(o);d!==null&&(n.splice(s,3),s-=3,Zd(d,{pending:!0,data:f,method:o.method,action:u},u,f))}}))}function ru(n){function s(C){return _h(C,n)}zr!==null&&_h(zr,n),Br!==null&&_h(Br,n),Fr!==null&&_h(Fr,n),tu.forEach(s),nu.forEach(s);for(var o=0;o<qr.length;o++){var u=qr[o];u.blockedOn===n&&(u.blockedOn=null)}for(;0<qr.length&&(o=qr[0],o.blockedOn===null);)lb(o),o.blockedOn===null&&qr.shift();if(o=(n.ownerDocument||n).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var f=o[u],d=o[u+1],b=f[bt]||null;if(typeof d=="function")b||cb(o);else if(b){var T=null;if(d&&d.hasAttribute("formAction")){if(f=d,b=d[bt]||null)T=b.formAction;else if(Zm(f)!==null)continue}else T=b.action;typeof T=="function"?o[u+1]=T:(o.splice(u,3),u-=3),cb(o)}}}function tp(n){this._internalRoot=n}Eh.prototype.render=tp.prototype.render=function(n){var s=this._internalRoot;if(s===null)throw Error(r(409));var o=s.current,u=An();ib(o,u,n,s,null,null)},Eh.prototype.unmount=tp.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var s=n.containerInfo;ib(n.current,2,null,n,null,null),nh(),s[Cn]=null}};function Eh(n){this._internalRoot=n}Eh.prototype.unstable_scheduleHydration=function(n){if(n){var s=vr();n={blockedOn:null,target:n,priority:s};for(var o=0;o<qr.length&&s!==0&&s<qr[o].priority;o++);qr.splice(o,0,n),o===0&&lb(n)}};var hb=e.version;if(hb!=="19.1.0")throw Error(r(527,hb,"19.1.0"));le.findDOMNode=function(n){var s=n._reactInternals;if(s===void 0)throw typeof n.render=="function"?Error(r(188)):(n=Object.keys(n).join(","),Error(r(268,n)));return n=p(s),n=n!==null?g(n):null,n=n===null?null:n.stateNode,n};var SR={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:Y,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Th=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Th.isDisabled&&Th.supportsFiber)try{ft=Th.inject(SR),Ye=Th}catch{}}return au.createRoot=function(n,s){if(!a(n))throw Error(r(299));var o=!1,u="",f=R_,d=C_,b=x_,T=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(d=s.onCaughtError),s.onRecoverableError!==void 0&&(b=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(T=s.unstable_transitionCallbacks)),s=tb(n,1,!1,null,null,o,u,f,d,b,T,null),n[Cn]=s.current,Lm(n),new tp(s)},au.hydrateRoot=function(n,s,o){if(!a(n))throw Error(r(299));var u=!1,f="",d=R_,b=C_,T=x_,C=null,B=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(d=o.onUncaughtError),o.onCaughtError!==void 0&&(b=o.onCaughtError),o.onRecoverableError!==void 0&&(T=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(C=o.unstable_transitionCallbacks),o.formState!==void 0&&(B=o.formState)),s=tb(n,1,!0,s,o??null,u,f,d,b,T,C,B),s.context=nb(null),o=s.current,u=An(),u=yr(u),f=Ir(u),f.callback=null,Rr(o,f,u),o=u,s.current.lanes=o,Oi(s,o),fi(s),n[Cn]=s.current,Lm(n),new Eh(s)},au.version="19.1.0",au}var Eb;function MR(){if(Eb)return rp.exports;Eb=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),rp.exports=kR(),rp.exports}var VR=MR();n1();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Su(){return Su=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=t[r])}return i},Su.apply(this,arguments)}var Jr;(function(i){i.Pop="POP",i.Push="PUSH",i.Replace="REPLACE"})(Jr||(Jr={}));const Tb="popstate";function LR(i){i===void 0&&(i={});function e(r,a){let{pathname:l,search:c,hash:m}=r.location;return Pp("",{pathname:l,search:c,hash:m},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(r,a){return typeof a=="string"?a:Kh(a)}return jR(e,t,null,i)}function _t(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}function i1(i,e){if(!i){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function UR(){return Math.random().toString(36).substr(2,8)}function Ab(i,e){return{usr:i.state,key:i.key,idx:e}}function Pp(i,e,t,r){return t===void 0&&(t=null),Su({pathname:typeof i=="string"?i:i.pathname,search:"",hash:""},typeof e=="string"?jo(e):e,{state:t,key:e&&e.key||r||UR()})}function Kh(i){let{pathname:e="/",search:t="",hash:r=""}=i;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function jo(i){let e={};if(i){let t=i.indexOf("#");t>=0&&(e.hash=i.substr(t),i=i.substr(0,t));let r=i.indexOf("?");r>=0&&(e.search=i.substr(r),i=i.substr(0,r)),i&&(e.pathname=i)}return e}function jR(i,e,t,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:l=!1}=r,c=a.history,m=Jr.Pop,p=null,g=v();g==null&&(g=0,c.replaceState(Su({},c.state,{idx:g}),""));function v(){return(c.state||{idx:null}).idx}function E(){m=Jr.Pop;let V=v(),G=V==null?null:V-g;g=V,p&&p({action:m,location:K.location,delta:G})}function S(V,G){m=Jr.Push;let X=Pp(K.location,V,G);g=v()+1;let W=Ab(X,g),ce=K.createHref(X);try{c.pushState(W,"",ce)}catch(oe){if(oe instanceof DOMException&&oe.name==="DataCloneError")throw oe;a.location.assign(ce)}l&&p&&p({action:m,location:K.location,delta:1})}function U(V,G){m=Jr.Replace;let X=Pp(K.location,V,G);g=v();let W=Ab(X,g),ce=K.createHref(X);c.replaceState(W,"",ce),l&&p&&p({action:m,location:K.location,delta:0})}function F(V){let G=a.location.origin!=="null"?a.location.origin:a.location.href,X=typeof V=="string"?V:Kh(V);return X=X.replace(/ $/,"%20"),_t(G,"No window.location.(origin|href) available to create URL for href: "+X),new URL(X,G)}let K={get action(){return m},get location(){return i(a,c)},listen(V){if(p)throw new Error("A history only accepts one active listener");return a.addEventListener(Tb,E),p=V,()=>{a.removeEventListener(Tb,E),p=null}},createHref(V){return e(a,V)},createURL:F,encodeLocation(V){let G=F(V);return{pathname:G.pathname,search:G.search,hash:G.hash}},push:S,replace:U,go(V){return c.go(V)}};return K}var Sb;(function(i){i.data="data",i.deferred="deferred",i.redirect="redirect",i.error="error"})(Sb||(Sb={}));function zR(i,e,t){return t===void 0&&(t="/"),BR(i,e,t)}function BR(i,e,t,r){let a=typeof e=="string"?jo(e):e,l=Mg(a.pathname||"/",t);if(l==null)return null;let c=r1(i);FR(c);let m=null;for(let p=0;m==null&&p<c.length;++p){let g=eC(l);m=WR(c[p],g)}return m}function r1(i,e,t,r){e===void 0&&(e=[]),t===void 0&&(t=[]),r===void 0&&(r="");let a=(l,c,m)=>{let p={relativePath:m===void 0?l.path||"":m,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};p.relativePath.startsWith("/")&&(_t(p.relativePath.startsWith(r),'Absolute route path "'+p.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),p.relativePath=p.relativePath.slice(r.length));let g=es([r,p.relativePath]),v=t.concat(p);l.children&&l.children.length>0&&(_t(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+g+'".')),r1(l.children,e,v,g)),!(l.path==null&&!l.index)&&e.push({path:g,score:QR(g,l.index),routesMeta:v})};return i.forEach((l,c)=>{var m;if(l.path===""||!((m=l.path)!=null&&m.includes("?")))a(l,c);else for(let p of s1(l.path))a(l,c,p)}),e}function s1(i){let e=i.split("/");if(e.length===0)return[];let[t,...r]=e,a=t.endsWith("?"),l=t.replace(/\?$/,"");if(r.length===0)return a?[l,""]:[l];let c=s1(r.join("/")),m=[];return m.push(...c.map(p=>p===""?l:[l,p].join("/"))),a&&m.push(...c),m.map(p=>i.startsWith("/")&&p===""?"/":p)}function FR(i){i.sort((e,t)=>e.score!==t.score?t.score-e.score:XR(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const qR=/^:[\w-]+$/,HR=3,GR=2,$R=1,KR=10,YR=-2,wb=i=>i==="*";function QR(i,e){let t=i.split("/"),r=t.length;return t.some(wb)&&(r+=YR),e&&(r+=GR),t.filter(a=>!wb(a)).reduce((a,l)=>a+(qR.test(l)?HR:l===""?$R:KR),r)}function XR(i,e){return i.length===e.length&&i.slice(0,-1).every((r,a)=>r===e[a])?i[i.length-1]-e[e.length-1]:0}function WR(i,e,t){let{routesMeta:r}=i,a={},l="/",c=[];for(let m=0;m<r.length;++m){let p=r[m],g=m===r.length-1,v=l==="/"?e:e.slice(l.length)||"/",E=JR({path:p.relativePath,caseSensitive:p.caseSensitive,end:g},v),S=p.route;if(!E)return null;Object.assign(a,E.params),c.push({params:a,pathname:es([l,E.pathname]),pathnameBase:rC(es([l,E.pathnameBase])),route:S}),E.pathnameBase!=="/"&&(l=es([l,E.pathnameBase]))}return c}function JR(i,e){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[t,r]=ZR(i.path,i.caseSensitive,i.end),a=e.match(t);if(!a)return null;let l=a[0],c=l.replace(/(.)\/+$/,"$1"),m=a.slice(1);return{params:r.reduce((g,v,E)=>{let{paramName:S,isOptional:U}=v;if(S==="*"){let K=m[E]||"";c=l.slice(0,l.length-K.length).replace(/(.)\/+$/,"$1")}const F=m[E];return U&&!F?g[S]=void 0:g[S]=(F||"").replace(/%2F/g,"/"),g},{}),pathname:l,pathnameBase:c,pattern:i}}function ZR(i,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),i1(i==="*"||!i.endsWith("*")||i.endsWith("/*"),'Route path "'+i+'" will be treated as if it were '+('"'+i.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+i.replace(/\*$/,"/*")+'".'));let r=[],a="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,m,p)=>(r.push({paramName:m,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(r.push({paramName:"*"}),a+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":i!==""&&i!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),r]}function eC(i){try{return i.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return i1(!1,'The URL path "'+i+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),i}}function Mg(i,e){if(e==="/")return i;if(!i.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=i.charAt(t);return r&&r!=="/"?null:i.slice(t)||"/"}function tC(i,e){e===void 0&&(e="/");let{pathname:t,search:r="",hash:a=""}=typeof i=="string"?jo(i):i;return{pathname:t?t.startsWith("/")?t:nC(t,e):e,search:sC(r),hash:aC(a)}}function nC(i,e){let t=e.replace(/\/+$/,"").split("/");return i.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function lp(i,e,t,r){return"Cannot include a '"+i+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function iC(i){return i.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Vg(i,e){let t=iC(i);return e?t.map((r,a)=>a===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function Lg(i,e,t,r){r===void 0&&(r=!1);let a;typeof i=="string"?a=jo(i):(a=Su({},i),_t(!a.pathname||!a.pathname.includes("?"),lp("?","pathname","search",a)),_t(!a.pathname||!a.pathname.includes("#"),lp("#","pathname","hash",a)),_t(!a.search||!a.search.includes("#"),lp("#","search","hash",a)));let l=i===""||a.pathname==="",c=l?"/":a.pathname,m;if(c==null)m=t;else{let E=e.length-1;if(!r&&c.startsWith("..")){let S=c.split("/");for(;S[0]==="..";)S.shift(),E-=1;a.pathname=S.join("/")}m=E>=0?e[E]:"/"}let p=tC(a,m),g=c&&c!=="/"&&c.endsWith("/"),v=(l||c===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(g||v)&&(p.pathname+="/"),p}const es=i=>i.join("/").replace(/\/\/+/g,"/"),rC=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),sC=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,aC=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function oC(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}const a1=["post","put","patch","delete"];new Set(a1);const lC=["get",...a1];new Set(lC);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wu(){return wu=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=t[r])}return i},wu.apply(this,arguments)}const Ug=ne.createContext(null),uC=ne.createContext(null),ys=ne.createContext(null),Af=ne.createContext(null),dr=ne.createContext({outlet:null,matches:[],isDataRoute:!1}),o1=ne.createContext(null);function cC(i,e){let{relative:t}=e===void 0?{}:e;zo()||_t(!1);let{basename:r,navigator:a}=ne.useContext(ys),{hash:l,pathname:c,search:m}=u1(i,{relative:t}),p=c;return r!=="/"&&(p=c==="/"?r:es([r,c])),a.createHref({pathname:p,search:m,hash:l})}function zo(){return ne.useContext(Af)!=null}function ju(){return zo()||_t(!1),ne.useContext(Af).location}function l1(i){ne.useContext(ys).static||ne.useLayoutEffect(i)}function Sf(){let{isDataRoute:i}=ne.useContext(dr);return i?wC():hC()}function hC(){zo()||_t(!1);let i=ne.useContext(Ug),{basename:e,future:t,navigator:r}=ne.useContext(ys),{matches:a}=ne.useContext(dr),{pathname:l}=ju(),c=JSON.stringify(Vg(a,t.v7_relativeSplatPath)),m=ne.useRef(!1);return l1(()=>{m.current=!0}),ne.useCallback(function(g,v){if(v===void 0&&(v={}),!m.current)return;if(typeof g=="number"){r.go(g);return}let E=Lg(g,JSON.parse(c),l,v.relative==="path");i==null&&e!=="/"&&(E.pathname=E.pathname==="/"?e:es([e,E.pathname])),(v.replace?r.replace:r.push)(E,v.state,v)},[e,r,c,l,i])}const fC=ne.createContext(null);function dC(i){let e=ne.useContext(dr).outlet;return e&&ne.createElement(fC.Provider,{value:i},e)}function u1(i,e){let{relative:t}=e===void 0?{}:e,{future:r}=ne.useContext(ys),{matches:a}=ne.useContext(dr),{pathname:l}=ju(),c=JSON.stringify(Vg(a,r.v7_relativeSplatPath));return ne.useMemo(()=>Lg(i,JSON.parse(c),l,t==="path"),[i,c,l,t])}function mC(i,e){return pC(i,e)}function pC(i,e,t,r){zo()||_t(!1);let{navigator:a,static:l}=ne.useContext(ys),{matches:c}=ne.useContext(dr),m=c[c.length-1],p=m?m.params:{};m&&m.pathname;let g=m?m.pathnameBase:"/";m&&m.route;let v=ju(),E;if(e){var S;let G=typeof e=="string"?jo(e):e;g==="/"||(S=G.pathname)!=null&&S.startsWith(g)||_t(!1),E=G}else E=v;let U=E.pathname||"/",F=U;if(g!=="/"){let G=g.replace(/^\//,"").split("/");F="/"+U.replace(/^\//,"").split("/").slice(G.length).join("/")}let K=zR(i,{pathname:F}),V=bC(K&&K.map(G=>Object.assign({},G,{params:Object.assign({},p,G.params),pathname:es([g,a.encodeLocation?a.encodeLocation(G.pathname).pathname:G.pathname]),pathnameBase:G.pathnameBase==="/"?g:es([g,a.encodeLocation?a.encodeLocation(G.pathnameBase).pathname:G.pathnameBase])})),c,t,r);return e&&V?ne.createElement(Af.Provider,{value:{location:wu({pathname:"/",search:"",hash:"",state:null,key:"default"},E),navigationType:Jr.Pop}},V):V}function gC(){let i=SC(),e=oC(i)?i.status+" "+i.statusText:i instanceof Error?i.message:JSON.stringify(i),t=i instanceof Error?i.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return ne.createElement(ne.Fragment,null,ne.createElement("h2",null,"Unexpected Application Error!"),ne.createElement("h3",{style:{fontStyle:"italic"}},e),t?ne.createElement("pre",{style:a},t):null,null)}const yC=ne.createElement(gC,null);class vC extends ne.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?ne.createElement(dr.Provider,{value:this.props.routeContext},ne.createElement(o1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function _C(i){let{routeContext:e,match:t,children:r}=i,a=ne.useContext(Ug);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),ne.createElement(dr.Provider,{value:e},r)}function bC(i,e,t,r){var a;if(e===void 0&&(e=[]),t===void 0&&(t=null),r===void 0&&(r=null),i==null){var l;if(!t)return null;if(t.errors)i=t.matches;else if((l=r)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)i=t.matches;else return null}let c=i,m=(a=t)==null?void 0:a.errors;if(m!=null){let v=c.findIndex(E=>E.route.id&&(m==null?void 0:m[E.route.id])!==void 0);v>=0||_t(!1),c=c.slice(0,Math.min(c.length,v+1))}let p=!1,g=-1;if(t&&r&&r.v7_partialHydration)for(let v=0;v<c.length;v++){let E=c[v];if((E.route.HydrateFallback||E.route.hydrateFallbackElement)&&(g=v),E.route.id){let{loaderData:S,errors:U}=t,F=E.route.loader&&S[E.route.id]===void 0&&(!U||U[E.route.id]===void 0);if(E.route.lazy||F){p=!0,g>=0?c=c.slice(0,g+1):c=[c[0]];break}}}return c.reduceRight((v,E,S)=>{let U,F=!1,K=null,V=null;t&&(U=m&&E.route.id?m[E.route.id]:void 0,K=E.route.errorElement||yC,p&&(g<0&&S===0?(IC("route-fallback"),F=!0,V=null):g===S&&(F=!0,V=E.route.hydrateFallbackElement||null)));let G=e.concat(c.slice(0,S+1)),X=()=>{let W;return U?W=K:F?W=V:E.route.Component?W=ne.createElement(E.route.Component,null):E.route.element?W=E.route.element:W=v,ne.createElement(_C,{match:E,routeContext:{outlet:v,matches:G,isDataRoute:t!=null},children:W})};return t&&(E.route.ErrorBoundary||E.route.errorElement||S===0)?ne.createElement(vC,{location:t.location,revalidation:t.revalidation,component:K,error:U,children:X(),routeContext:{outlet:null,matches:G,isDataRoute:!0}}):X()},null)}var c1=function(i){return i.UseBlocker="useBlocker",i.UseRevalidator="useRevalidator",i.UseNavigateStable="useNavigate",i}(c1||{}),h1=function(i){return i.UseBlocker="useBlocker",i.UseLoaderData="useLoaderData",i.UseActionData="useActionData",i.UseRouteError="useRouteError",i.UseNavigation="useNavigation",i.UseRouteLoaderData="useRouteLoaderData",i.UseMatches="useMatches",i.UseRevalidator="useRevalidator",i.UseNavigateStable="useNavigate",i.UseRouteId="useRouteId",i}(h1||{});function EC(i){let e=ne.useContext(Ug);return e||_t(!1),e}function TC(i){let e=ne.useContext(uC);return e||_t(!1),e}function AC(i){let e=ne.useContext(dr);return e||_t(!1),e}function f1(i){let e=AC(),t=e.matches[e.matches.length-1];return t.route.id||_t(!1),t.route.id}function SC(){var i;let e=ne.useContext(o1),t=TC(),r=f1();return e!==void 0?e:(i=t.errors)==null?void 0:i[r]}function wC(){let{router:i}=EC(c1.UseNavigateStable),e=f1(h1.UseNavigateStable),t=ne.useRef(!1);return l1(()=>{t.current=!0}),ne.useCallback(function(a,l){l===void 0&&(l={}),t.current&&(typeof a=="number"?i.navigate(a):i.navigate(a,wu({fromRouteId:e},l)))},[i,e])}const Ib={};function IC(i,e,t){Ib[i]||(Ib[i]=!0)}function RC(i,e){i==null||i.v7_startTransition,i==null||i.v7_relativeSplatPath}function CC(i){let{to:e,replace:t,state:r,relative:a}=i;zo()||_t(!1);let{future:l,static:c}=ne.useContext(ys),{matches:m}=ne.useContext(dr),{pathname:p}=ju(),g=Sf(),v=Lg(e,Vg(m,l.v7_relativeSplatPath),p,a==="path"),E=JSON.stringify(v);return ne.useEffect(()=>g(JSON.parse(E),{replace:t,state:r,relative:a}),[g,E,a,t,r]),null}function jg(i){return dC(i.context)}function tn(i){_t(!1)}function xC(i){let{basename:e="/",children:t=null,location:r,navigationType:a=Jr.Pop,navigator:l,static:c=!1,future:m}=i;zo()&&_t(!1);let p=e.replace(/^\/*/,"/"),g=ne.useMemo(()=>({basename:p,navigator:l,static:c,future:wu({v7_relativeSplatPath:!1},m)}),[p,m,l,c]);typeof r=="string"&&(r=jo(r));let{pathname:v="/",search:E="",hash:S="",state:U=null,key:F="default"}=r,K=ne.useMemo(()=>{let V=Mg(v,p);return V==null?null:{location:{pathname:V,search:E,hash:S,state:U,key:F},navigationType:a}},[p,v,E,S,U,F,a]);return K==null?null:ne.createElement(ys.Provider,{value:g},ne.createElement(Af.Provider,{children:t,value:K}))}function NC(i){let{children:e,location:t}=i;return mC(kp(e),t)}new Promise(()=>{});function kp(i,e){e===void 0&&(e=[]);let t=[];return ne.Children.forEach(i,(r,a)=>{if(!ne.isValidElement(r))return;let l=[...e,a];if(r.type===ne.Fragment){t.push.apply(t,kp(r.props.children,l));return}r.type!==tn&&_t(!1),!r.props.index||!r.props.children||_t(!1);let c={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(c.children=kp(r.props.children,l)),t.push(c)}),t}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mp(){return Mp=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=t[r])}return i},Mp.apply(this,arguments)}function OC(i,e){if(i==null)return{};var t={},r=Object.keys(i),a,l;for(l=0;l<r.length;l++)a=r[l],!(e.indexOf(a)>=0)&&(t[a]=i[a]);return t}function DC(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function PC(i,e){return i.button===0&&(!e||e==="_self")&&!DC(i)}const kC=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],MC="6";try{window.__reactRouterVersion=MC}catch{}const VC="startTransition",Rb=NR[VC];function LC(i){let{basename:e,children:t,future:r,window:a}=i,l=ne.useRef();l.current==null&&(l.current=LR({window:a,v5Compat:!0}));let c=l.current,[m,p]=ne.useState({action:c.action,location:c.location}),{v7_startTransition:g}=r||{},v=ne.useCallback(E=>{g&&Rb?Rb(()=>p(E)):p(E)},[p,g]);return ne.useLayoutEffect(()=>c.listen(v),[c,v]),ne.useEffect(()=>RC(r),[r]),ne.createElement(xC,{basename:e,children:t,location:m.location,navigationType:m.action,navigator:c,future:r})}const UC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",jC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,zg=ne.forwardRef(function(e,t){let{onClick:r,relative:a,reloadDocument:l,replace:c,state:m,target:p,to:g,preventScrollReset:v,viewTransition:E}=e,S=OC(e,kC),{basename:U}=ne.useContext(ys),F,K=!1;if(typeof g=="string"&&jC.test(g)&&(F=g,UC))try{let W=new URL(window.location.href),ce=g.startsWith("//")?new URL(W.protocol+g):new URL(g),oe=Mg(ce.pathname,U);ce.origin===W.origin&&oe!=null?g=oe+ce.search+ce.hash:K=!0}catch{}let V=cC(g,{relative:a}),G=zC(g,{replace:c,state:m,target:p,preventScrollReset:v,relative:a,viewTransition:E});function X(W){r&&r(W),W.defaultPrevented||G(W)}return ne.createElement("a",Mp({},S,{href:F||V,onClick:K||l?r:X,ref:t,target:p}))});var Cb;(function(i){i.UseScrollRestoration="useScrollRestoration",i.UseSubmit="useSubmit",i.UseSubmitFetcher="useSubmitFetcher",i.UseFetcher="useFetcher",i.useViewTransitionState="useViewTransitionState"})(Cb||(Cb={}));var xb;(function(i){i.UseFetcher="useFetcher",i.UseFetchers="useFetchers",i.UseScrollRestoration="useScrollRestoration"})(xb||(xb={}));function zC(i,e){let{target:t,replace:r,state:a,preventScrollReset:l,relative:c,viewTransition:m}=e===void 0?{}:e,p=Sf(),g=ju(),v=u1(i,{relative:c});return ne.useCallback(E=>{if(PC(E,t)){E.preventDefault();let S=r!==void 0?r:Kh(g)===Kh(v);p(i,{replace:S,state:a,preventScrollReset:l,relative:c,viewTransition:m})}},[g,p,v,r,a,t,i,l,c,m])}const BC=()=>{};var Nb={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d1=function(i){const e=[];let t=0;for(let r=0;r<i.length;r++){let a=i.charCodeAt(r);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&r+1<i.length&&(i.charCodeAt(r+1)&64512)===56320?(a=65536+((a&1023)<<10)+(i.charCodeAt(++r)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},FC=function(i){const e=[];let t=0,r=0;for(;t<i.length;){const a=i[t++];if(a<128)e[r++]=String.fromCharCode(a);else if(a>191&&a<224){const l=i[t++];e[r++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=i[t++],c=i[t++],m=i[t++],p=((a&7)<<18|(l&63)<<12|(c&63)<<6|m&63)-65536;e[r++]=String.fromCharCode(55296+(p>>10)),e[r++]=String.fromCharCode(56320+(p&1023))}else{const l=i[t++],c=i[t++];e[r++]=String.fromCharCode((a&15)<<12|(l&63)<<6|c&63)}}return e.join("")},m1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let a=0;a<i.length;a+=3){const l=i[a],c=a+1<i.length,m=c?i[a+1]:0,p=a+2<i.length,g=p?i[a+2]:0,v=l>>2,E=(l&3)<<4|m>>4;let S=(m&15)<<2|g>>6,U=g&63;p||(U=64,c||(S=64)),r.push(t[v],t[E],t[S],t[U])}return r.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(d1(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):FC(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let a=0;a<i.length;){const l=t[i.charAt(a++)],m=a<i.length?t[i.charAt(a)]:0;++a;const g=a<i.length?t[i.charAt(a)]:64;++a;const E=a<i.length?t[i.charAt(a)]:64;if(++a,l==null||m==null||g==null||E==null)throw new qC;const S=l<<2|m>>4;if(r.push(S),g!==64){const U=m<<4&240|g>>2;if(r.push(U),E!==64){const F=g<<6&192|E;r.push(F)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class qC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const HC=function(i){const e=d1(i);return m1.encodeByteArray(e,!0)},Yh=function(i){return HC(i).replace(/\./g,"")},Bg=function(i){try{return m1.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */const $C=()=>GC().__FIREBASE_DEFAULTS__,KC=()=>{if(typeof process>"u"||typeof Nb>"u")return;const i=Nb.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},YC=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&Bg(i[1]);return e&&JSON.parse(e)},wf=()=>{try{return BC()||$C()||KC()||YC()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},p1=i=>{var e,t;return(t=(e=wf())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},QC=i=>{const e=p1(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},g1=()=>{var i;return(i=wf())===null||i===void 0?void 0:i.config},y1=i=>{var e;return(e=wf())===null||e===void 0?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Bo(i){return i.endsWith(".cloudworkstations.dev")}async function v1(i){return(await fetch(i,{credentials:"include"})).ok}/**
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
 */function WC(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",a=i.iat||0,l=i.sub||i.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},i);return[Yh(JSON.stringify(t)),Yh(JSON.stringify(c)),""].join(".")}const du={};function JC(){const i={prod:[],emulator:[]};for(const e of Object.keys(du))du[e]?i.emulator.push(e):i.prod.push(e);return i}function ZC(i){let e=document.getElementById(i),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),t=!0),{created:t,element:e}}let Ob=!1;function If(i,e){if(typeof window>"u"||typeof document>"u"||!Bo(window.location.host)||du[i]===e||du[i]||Ob)return;du[i]=e;function t(S){return`__firebase__banner__${S}`}const r="__firebase__banner",l=JC().prod.length>0;function c(){const S=document.getElementById(r);S&&S.remove()}function m(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function p(S,U){S.setAttribute("width","24"),S.setAttribute("id",U),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function g(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{Ob=!0,c()},S}function v(S,U){S.setAttribute("id",U),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function E(){const S=ZC(r),U=t("text"),F=document.getElementById(U)||document.createElement("span"),K=t("learnmore"),V=document.getElementById(K)||document.createElement("a"),G=t("preprendIcon"),X=document.getElementById(G)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const W=S.element;m(W),v(V,K);const ce=g();p(X,G),W.append(X,F,V,ce),document.body.appendChild(W)}l?(F.innerText="Preview backend disconnected.",X.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(X.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,F.innerText="Preview backend running in this workspace."),F.setAttribute("id",U)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",E):E()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(tt())}function e2(){var i;const e=(i=wf())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function b1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function E1(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function T1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function A1(){const i=tt();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function t2(){return!e2()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function n2(){try{return typeof indexedDB=="object"}catch{return!1}}function i2(){return new Promise((i,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(r);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(r),i(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var l;e(((l=a.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r2="FirebaseError";class zn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=r2,Object.setPrototypeOf(this,zn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vs.prototype.create)}}class vs{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},a=`${this.service}/${e}`,l=this.errors[e],c=l?s2(l,r):"Error",m=`${this.serviceName}: ${c} (${a}).`;return new zn(a,m,r)}}function s2(i,e){return i.replace(a2,(t,r)=>{const a=e[r];return a!=null?String(a):`<${r}?>`})}const a2=/\{\$([^}]+)}/g;function S1(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function ss(i,e){if(i===e)return!0;const t=Object.keys(i),r=Object.keys(e);for(const a of t){if(!r.includes(a))return!1;const l=i[a],c=e[a];if(Db(l)&&Db(c)){if(!ss(l,c))return!1}else if(l!==c)return!1}for(const a of r)if(!t.includes(a))return!1;return!0}function Db(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(i){const e=[];for(const[t,r]of Object.entries(i))Array.isArray(r)?r.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function o2(i){const e={};return i.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[a,l]=r.split("=");e[decodeURIComponent(a)]=decodeURIComponent(l)}}),e}function w1(i,e){const t=new l2(i,e);return t.subscribe.bind(t)}class l2{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let a;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");u2(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:r},a.next===void 0&&(a.next=up),a.error===void 0&&(a.error=up),a.complete===void 0&&(a.complete=up);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function u2(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function up(){}/**
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
 */function Rt(i){return i&&i._delegate?i._delegate:i}class ar{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ra="[DEFAULT]";/**
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
 */class c2{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new XC;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&r.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(l){if(a)return null;throw l}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(f2(e))try{this.getOrInitializeService({instanceIdentifier:ra})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:a});r.resolve(l)}catch{}}}}clearInstance(e=ra){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ra){return this.instances.has(e)}getOptions(e=ra){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[l,c]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(l);r===m&&c.resolve(a)}return a}onInit(e,t){var r;const a=this.normalizeInstanceIdentifier(t),l=(r=this.onInitCallbacks.get(a))!==null&&r!==void 0?r:new Set;l.add(e),this.onInitCallbacks.set(a,l);const c=this.instances.get(a);return c&&e(c,a),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const a of r)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:h2(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ra){return this.component?this.component.multipleInstances?e:ra:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function h2(i){return i===ra?void 0:i}function f2(i){return i.instantiationMode==="EAGER"}/**
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
 */var ke;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(ke||(ke={}));const m2={debug:ke.DEBUG,verbose:ke.VERBOSE,info:ke.INFO,warn:ke.WARN,error:ke.ERROR,silent:ke.SILENT},p2=ke.INFO,g2={[ke.DEBUG]:"log",[ke.VERBOSE]:"log",[ke.INFO]:"info",[ke.WARN]:"warn",[ke.ERROR]:"error"},y2=(i,e,...t)=>{if(e<i.logLevel)return;const r=new Date().toISOString(),a=g2[e];if(a)console[a](`[${r}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Rf{constructor(e){this.name=e,this._logLevel=p2,this._logHandler=y2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?m2[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ke.DEBUG,...e),this._logHandler(this,ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ke.VERBOSE,...e),this._logHandler(this,ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ke.INFO,...e),this._logHandler(this,ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ke.WARN,...e),this._logHandler(this,ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ke.ERROR,...e),this._logHandler(this,ke.ERROR,...e)}}const v2=(i,e)=>e.some(t=>i instanceof t);let Pb,kb;function _2(){return Pb||(Pb=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function b2(){return kb||(kb=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const I1=new WeakMap,Vp=new WeakMap,R1=new WeakMap,cp=new WeakMap,Fg=new WeakMap;function E2(i){const e=new Promise((t,r)=>{const a=()=>{i.removeEventListener("success",l),i.removeEventListener("error",c)},l=()=>{t(ts(i.result)),a()},c=()=>{r(i.error),a()};i.addEventListener("success",l),i.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&I1.set(t,i)}).catch(()=>{}),Fg.set(e,i),e}function T2(i){if(Vp.has(i))return;const e=new Promise((t,r)=>{const a=()=>{i.removeEventListener("complete",l),i.removeEventListener("error",c),i.removeEventListener("abort",c)},l=()=>{t(),a()},c=()=>{r(i.error||new DOMException("AbortError","AbortError")),a()};i.addEventListener("complete",l),i.addEventListener("error",c),i.addEventListener("abort",c)});Vp.set(i,e)}let Lp={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return Vp.get(i);if(e==="objectStoreNames")return i.objectStoreNames||R1.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ts(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function A2(i){Lp=i(Lp)}function S2(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=i.call(hp(this),e,...t);return R1.set(r,e.sort?e.sort():[e]),ts(r)}:b2().includes(i)?function(...e){return i.apply(hp(this),e),ts(I1.get(this))}:function(...e){return ts(i.apply(hp(this),e))}}function w2(i){return typeof i=="function"?S2(i):(i instanceof IDBTransaction&&T2(i),v2(i,_2())?new Proxy(i,Lp):i)}function ts(i){if(i instanceof IDBRequest)return E2(i);if(cp.has(i))return cp.get(i);const e=w2(i);return e!==i&&(cp.set(i,e),Fg.set(e,i)),e}const hp=i=>Fg.get(i);function I2(i,e,{blocked:t,upgrade:r,blocking:a,terminated:l}={}){const c=indexedDB.open(i,e),m=ts(c);return r&&c.addEventListener("upgradeneeded",p=>{r(ts(c.result),p.oldVersion,p.newVersion,ts(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),m.then(p=>{l&&p.addEventListener("close",()=>l()),a&&p.addEventListener("versionchange",g=>a(g.oldVersion,g.newVersion,g))}).catch(()=>{}),m}const R2=["get","getKey","getAll","getAllKeys","count"],C2=["put","add","delete","clear"],fp=new Map;function Mb(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(fp.get(e))return fp.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,a=C2.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(a||R2.includes(t)))return;const l=async function(c,...m){const p=this.transaction(c,a?"readwrite":"readonly");let g=p.store;return r&&(g=g.index(m.shift())),(await Promise.all([g[t](...m),a&&p.done]))[0]};return fp.set(e,l),l}A2(i=>({...i,get:(e,t,r)=>Mb(e,t)||i.get(e,t,r),has:(e,t)=>!!Mb(e,t)||i.has(e,t)}));/**
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
 */class x2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(N2(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function N2(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Up="@firebase/app",Vb="0.13.0";/**
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
 */const or=new Rf("@firebase/app"),O2="@firebase/app-compat",D2="@firebase/analytics-compat",P2="@firebase/analytics",k2="@firebase/app-check-compat",M2="@firebase/app-check",V2="@firebase/auth",L2="@firebase/auth-compat",U2="@firebase/database",j2="@firebase/data-connect",z2="@firebase/database-compat",B2="@firebase/functions",F2="@firebase/functions-compat",q2="@firebase/installations",H2="@firebase/installations-compat",G2="@firebase/messaging",$2="@firebase/messaging-compat",K2="@firebase/performance",Y2="@firebase/performance-compat",Q2="@firebase/remote-config",X2="@firebase/remote-config-compat",W2="@firebase/storage",J2="@firebase/storage-compat",Z2="@firebase/firestore",ex="@firebase/ai",tx="@firebase/firestore-compat",nx="firebase",ix="11.8.0";/**
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
 */const jp="[DEFAULT]",rx={[Up]:"fire-core",[O2]:"fire-core-compat",[P2]:"fire-analytics",[D2]:"fire-analytics-compat",[M2]:"fire-app-check",[k2]:"fire-app-check-compat",[V2]:"fire-auth",[L2]:"fire-auth-compat",[U2]:"fire-rtdb",[j2]:"fire-data-connect",[z2]:"fire-rtdb-compat",[B2]:"fire-fn",[F2]:"fire-fn-compat",[q2]:"fire-iid",[H2]:"fire-iid-compat",[G2]:"fire-fcm",[$2]:"fire-fcm-compat",[K2]:"fire-perf",[Y2]:"fire-perf-compat",[Q2]:"fire-rc",[X2]:"fire-rc-compat",[W2]:"fire-gcs",[J2]:"fire-gcs-compat",[Z2]:"fire-fst",[tx]:"fire-fst-compat",[ex]:"fire-vertex","fire-js":"fire-js",[nx]:"fire-js-all"};/**
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
 */const Qh=new Map,sx=new Map,zp=new Map;function Lb(i,e){try{i.container.addComponent(e)}catch(t){or.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function as(i){const e=i.name;if(zp.has(e))return or.debug(`There were multiple attempts to register component ${e}.`),!1;zp.set(e,i);for(const t of Qh.values())Lb(t,i);for(const t of sx.values())Lb(t,i);return!0}function zu(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function wt(i){return i==null?!1:i.settings!==void 0}/**
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
 */const ax={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ns=new vs("app","Firebase",ax);/**
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
 */const Ri=ix;function C1(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const r=Object.assign({name:jp,automaticDataCollectionEnabled:!0},e),a=r.name;if(typeof a!="string"||!a)throw ns.create("bad-app-name",{appName:String(a)});if(t||(t=g1()),!t)throw ns.create("no-options");const l=Qh.get(a);if(l){if(ss(t,l.options)&&ss(r,l.config))return l;throw ns.create("duplicate-app",{appName:a})}const c=new d2(a);for(const p of zp.values())c.addComponent(p);const m=new ox(t,r,c);return Qh.set(a,m),m}function qg(i=jp){const e=Qh.get(i);if(!e&&i===jp&&g1())return C1();if(!e)throw ns.create("no-app",{appName:i});return e}function vi(i,e,t){var r;let a=(r=rx[i])!==null&&r!==void 0?r:i;t&&(a+=`-${t}`);const l=a.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const m=[`Unable to register library "${a}" with version "${e}":`];l&&m.push(`library name "${a}" contains illegal characters (whitespace or "/")`),l&&c&&m.push("and"),c&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),or.warn(m.join(" "));return}as(new ar(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
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
 */const lx="firebase-heartbeat-database",ux=1,Iu="firebase-heartbeat-store";let dp=null;function x1(){return dp||(dp=I2(lx,ux,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Iu)}catch(t){console.warn(t)}}}}).catch(i=>{throw ns.create("idb-open",{originalErrorMessage:i.message})})),dp}async function cx(i){try{const t=(await x1()).transaction(Iu),r=await t.objectStore(Iu).get(N1(i));return await t.done,r}catch(e){if(e instanceof zn)or.warn(e.message);else{const t=ns.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});or.warn(t.message)}}}async function Ub(i,e){try{const r=(await x1()).transaction(Iu,"readwrite");await r.objectStore(Iu).put(e,N1(i)),await r.done}catch(t){if(t instanceof zn)or.warn(t.message);else{const r=ns.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});or.warn(r.message)}}}function N1(i){return`${i.name}!${i.options.appId}`}/**
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
 */const hx=1024,fx=30;class dx{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new px(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=jb();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:a}),this._heartbeatsCache.heartbeats.length>fx){const c=gx(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){or.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=jb(),{heartbeatsToSend:r,unsentEntries:a}=mx(this._heartbeatsCache.heartbeats),l=Yh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return or.warn(t),""}}}function jb(){return new Date().toISOString().substring(0,10)}function mx(i,e=hx){const t=[];let r=i.slice();for(const a of i){const l=t.find(c=>c.agent===a.agent);if(l){if(l.dates.push(a.date),zb(t)>e){l.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),zb(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class px{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return n2()?i2().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await cx(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return Ub(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return Ub(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function zb(i){return Yh(JSON.stringify({version:2,heartbeats:i})).length}function gx(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let r=1;r<i.length;r++)i[r].date<t&&(t=i[r].date,e=r);return e}/**
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
 */function yx(i){as(new ar("platform-logger",e=>new x2(e),"PRIVATE")),as(new ar("heartbeat",e=>new dx(e),"PRIVATE")),vi(Up,Vb,i),vi(Up,Vb,"esm2017"),vi("fire-js","")}yx("");function Fo(i,e){var t={};for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&e.indexOf(r)<0&&(t[r]=i[r]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(i);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(i,r[a])&&(t[r[a]]=i[r[a]]);return t}function O1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vx=O1,D1=new vs("auth","Firebase",O1());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xh=new Rf("@firebase/auth");function _x(i,...e){Xh.logLevel<=ke.WARN&&Xh.warn(`Auth (${Ri}): ${i}`,...e)}function Dh(i,...e){Xh.logLevel<=ke.ERROR&&Xh.error(`Auth (${Ri}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(i,...e){throw Gg(i,...e)}function Yn(i,...e){return Gg(i,...e)}function Hg(i,e,t){const r=Object.assign(Object.assign({},vx()),{[e]:t});return new vs("auth","Firebase",r).create(e,{appName:i.name})}function la(i){return Hg(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function bx(i,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ti(i,"argument-error"),Hg(i,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Gg(i,...e){if(typeof i!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=i.name),i._errorFactory.create(t,...r)}return D1.create(i,...e)}function Se(i,e,...t){if(!i)throw Gg(e,...t)}function tr(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Dh(e),new Error(e)}function lr(i,e){i||tr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bp(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function Ex(){return Bb()==="http:"||Bb()==="https:"}function Bb(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function $g(i,e){lr(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let P1=class{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;tr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;tr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;tr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const wx=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Ix=new Bu(3e4,6e4);function Kg(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function qo(i,e,t,r,a={}){return k1(i,a,async()=>{let l={},c={};r&&(e==="GET"?c=r:l={body:JSON.stringify(r)});const m=mr(Object.assign({key:i.config.apiKey},c)).slice(1),p=await i._getAdditionalHeaders();p["Content-Type"]="application/json",i.languageCode&&(p["X-Firebase-Locale"]=i.languageCode);const g=Object.assign({method:e,headers:p},l);return b1()||(g.referrerPolicy="no-referrer"),i.emulatorConfig&&Bo(i.emulatorConfig.host)&&(g.credentials="include"),P1.fetch()(await M1(i,i.config.apiHost,t,m),g)})}async function k1(i,e,t){i._canInitEmulator=!1;const r=Object.assign(Object.assign({},Sx),e);try{const a=new Cx(i),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw Ah(i,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const m=l.ok?c.errorMessage:c.error.message,[p,g]=m.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ah(i,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw Ah(i,"email-already-in-use",c);if(p==="USER_DISABLED")throw Ah(i,"user-disabled",c);const v=r[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw Hg(i,v,g);Ti(i,v)}}catch(a){if(a instanceof zn)throw a;Ti(i,"network-request-failed",{message:String(a)})}}async function Rx(i,e,t,r,a={}){const l=await qo(i,e,t,r,a);return"mfaPendingCredential"in l&&Ti(i,"multi-factor-auth-required",{_serverResponse:l}),l}async function M1(i,e,t,r){const a=`${e}${t}?${r}`,l=i,c=l.config.emulator?$g(i.config,a):`${i.config.apiScheme}://${a}`;return wx.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}let Cx=class{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Yn(this.auth,"network-request-failed")),Ix.get())})}};function Ah(i,e,t){const r={appName:i.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const a=Yn(i,e,r);return a.customData._tokenResponse=t,a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xx(i,e){return qo(i,"POST","/v1/accounts:delete",e)}async function Wh(i,e){return qo(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mu(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Nx(i,e=!1){const t=Rt(i),r=await t.getIdToken(e),a=Yg(r);Se(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:a,token:r,authTime:mu(mp(a.auth_time)),issuedAtTime:mu(mp(a.iat)),expirationTime:mu(mp(a.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function mp(i){return Number(i)*1e3}function Yg(i){const[e,t,r]=i.split(".");if(e===void 0||t===void 0||r===void 0)return Dh("JWT malformed, contained fewer than 3 sections"),null;try{const a=Bg(t);return a?JSON.parse(a):(Dh("Failed to decode base64 JWT payload"),null)}catch(a){return Dh("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function Fb(i){const e=Yg(i);return Se(e,"internal-error"),Se(typeof e.exp<"u","internal-error"),Se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ru(i,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof zn&&Ox(r)&&i.auth.currentUser===i&&await i.auth.signOut(),r}}function Ox({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Fp=class{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=mu(this.lastLoginAt),this.creationTime=mu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};/**
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
 */async function Jh(i){var e;const t=i.auth,r=await i.getIdToken(),a=await Ru(i,Wh(t,{idToken:r}));Se(a==null?void 0:a.users.length,t,"internal-error");const l=a.users[0];i._notifyReloadListener(l);const c=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?V1(l.providerUserInfo):[],m=kx(i.providerData,c),p=i.isAnonymous,g=!(i.email&&l.passwordHash)&&!(m!=null&&m.length),v=p?g:!1,E={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:m,metadata:new Fp(l.createdAt,l.lastLoginAt),isAnonymous:v};Object.assign(i,E)}async function Px(i){const e=Rt(i);await Jh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function kx(i,e){return[...i.filter(r=>!e.some(a=>a.providerId===r.providerId)),...e]}function V1(i){return i.map(e=>{var{providerId:t}=e,r=Fo(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mx(i,e){const t=await k1(i,{},async()=>{const r=mr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=i.config,c=await M1(i,a,"/v1/token",`key=${l}`),m=await i._getAdditionalHeaders();return m["Content-Type"]="application/x-www-form-urlencoded",P1.fetch()(c,{method:"POST",headers:m,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Vx(i,e){return qo(i,"POST","/v2/accounts:revokeToken",Kg(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pp=class qp{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Se(e.idToken,"internal-error"),Se(typeof e.idToken<"u","internal-error"),Se(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Fb(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Se(e.length!==0,"internal-error");const t=Fb(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Se(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:a,expiresIn:l}=await Mx(e,t);this.updateTokensAndExpiration(r,a,Number(l))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:a,expirationTime:l}=t,c=new qp;return r&&(Se(typeof r=="string","internal-error",{appName:e}),c.refreshToken=r),a&&(Se(typeof a=="string","internal-error",{appName:e}),c.accessToken=a),l&&(Se(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qp,this.toJSON())}_performRefresh(){return tr("not implemented")}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(i,e){Se(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}let Eo=class ou{constructor(e){var{uid:t,auth:r,stsTokenManager:a}=e,l=Fo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Dx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Fp(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await Ru(this,this.stsTokenManager.getToken(this.auth,e));return Se(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Nx(this,e)}reload(){return Px(this)}_assign(e){this!==e&&(Se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ou(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Jh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(wt(this.auth.app))return Promise.reject(la(this.auth));const e=await this.getIdToken();return await Ru(this,xx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,a,l,c,m,p,g,v;const E=(r=t.displayName)!==null&&r!==void 0?r:void 0,S=(a=t.email)!==null&&a!==void 0?a:void 0,U=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,F=(c=t.photoURL)!==null&&c!==void 0?c:void 0,K=(m=t.tenantId)!==null&&m!==void 0?m:void 0,V=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,G=(g=t.createdAt)!==null&&g!==void 0?g:void 0,X=(v=t.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:W,emailVerified:ce,isAnonymous:oe,providerData:de,stsTokenManager:D}=t;Se(W&&D,e,"internal-error");const I=pp.fromJSON(this.name,D);Se(typeof W=="string",e,"internal-error"),Gr(E,e.name),Gr(S,e.name),Se(typeof ce=="boolean",e,"internal-error"),Se(typeof oe=="boolean",e,"internal-error"),Gr(U,e.name),Gr(F,e.name),Gr(K,e.name),Gr(V,e.name),Gr(G,e.name),Gr(X,e.name);const R=new ou({uid:W,auth:e,email:S,emailVerified:ce,displayName:E,isAnonymous:oe,photoURL:F,phoneNumber:U,tenantId:K,stsTokenManager:I,createdAt:G,lastLoginAt:X});return de&&Array.isArray(de)&&(R.providerData=de.map(N=>Object.assign({},N))),V&&(R._redirectEventId=V),R}static async _fromIdTokenResponse(e,t,r=!1){const a=new pp;a.updateFromServerResponse(t);const l=new ou({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:r});return await Jh(l),l}static async _fromGetAccountInfoResponse(e,t,r){const a=t.users[0];Se(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?V1(a.providerUserInfo):[],c=!(a.email&&a.passwordHash)&&!(l!=null&&l.length),m=new pp;m.updateFromIdToken(r);const p=new ou({uid:a.localId,auth:e,stsTokenManager:m,isAnonymous:c}),g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new Fp(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,g),p}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qb=new Map;function nr(i){lr(i instanceof Function,"Expected a class definition");let e=qb.get(i);return e?(lr(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,qb.set(i,e),e)}/**
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
 */let L1=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}};L1.type="NONE";const Hb=L1;/**
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
 */function Ph(i,e,t){return`firebase:${i}:${e}:${t}`}let Gb=class kh{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:a,name:l}=this.auth;this.fullUserKey=Ph(this.userKey,a.apiKey,l),this.fullPersistenceKey=Ph("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Wh(this.auth,{idToken:e}).catch(()=>{});return t?Eo._fromGetAccountInfoResponse(this.auth,t,e):null}return Eo._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new kh(nr(Hb),e,r);const a=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=a[0]||nr(Hb);const c=Ph(r,e.config.apiKey,e.name);let m=null;for(const g of t)try{const v=await g._get(c);if(v){let E;if(typeof v=="string"){const S=await Wh(e,{idToken:v}).catch(()=>{});if(!S)break;E=await Eo._fromGetAccountInfoResponse(e,S,v)}else E=Eo._fromJSON(e,v);g!==l&&(m=E),l=g;break}}catch{}const p=a.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new kh(l,e,r):(l=p[0],m&&await l._set(c,m.toJSON()),await Promise.all(t.map(async g=>{if(g!==l)try{await g._remove(c)}catch{}})),new kh(l,e,r))}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $b(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(B1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(U1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(q1(e))return"Blackberry";if(H1(e))return"Webos";if(j1(e))return"Safari";if((e.includes("chrome/")||z1(e))&&!e.includes("edge/"))return"Chrome";if(F1(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=i.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function U1(i=tt()){return/firefox\//i.test(i)}function j1(i=tt()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function z1(i=tt()){return/crios\//i.test(i)}function B1(i=tt()){return/iemobile/i.test(i)}function F1(i=tt()){return/android/i.test(i)}function q1(i=tt()){return/blackberry/i.test(i)}function H1(i=tt()){return/webos/i.test(i)}function Qg(i=tt()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function Lx(i=tt()){var e;return Qg(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ux(){return A1()&&document.documentMode===10}function G1(i=tt()){return Qg(i)||F1(i)||H1(i)||q1(i)||/windows phone/i.test(i)||B1(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $1(i,e=[]){let t;switch(i){case"Browser":t=$b(tt());break;case"Worker":t=`${$b(tt())}-${i}`;break;default:t=i}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ri}/${r}`}/**
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
 */async function zx(i,e={}){return qo(i,"GET","/v2/passwordPolicy",Kg(i,e))}/**
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
 */let qx=class{constructor(e,t,r,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Kb(this),this.idTokenSubscription=new Kb(this),this.beforeStateQueue=new jx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=D1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=nr(t)),this._initializationPromise=this.queue(async()=>{var r,a,l;if(!this._deleted&&(this.persistenceManager=await Gb.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Wh(this,{idToken:e}),r=await Eo._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(wt(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(m,m))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let a=r,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,m=a==null?void 0:a._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===m)&&(p!=null&&p.user)&&(a=p.user,l=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(a)}catch(c){a=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return Se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Jh(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ax()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(wt(this.app))return Promise.reject(la(this));const t=e?Rt(e):null;return t&&Se(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return wt(this.app)?Promise.reject(la(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return wt(this.app)?Promise.reject(la(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(nr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await zx(this),t=new Fx(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new vs("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Vx(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&nr(e)||this._popupRedirectResolver;Se(t,this,"argument-error"),this.redirectPersistenceManager=await Gb.create(this,[nr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(Se(m,this,"internal-error"),m.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,r,a);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){var e;if(wt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&_x(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}};function Cf(i){return Rt(i)}let Kb=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=w1(t=>this.observer=t)}get next(){return Se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xg={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Hx(i){Xg=i}function Gx(i){return Xg.loadJS(i)}function $x(){return Xg.gapiScript}function Kx(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yx(i,e){const t=zu(i,"auth");if(t.isInitialized()){const a=t.getImmediate(),l=t.getOptions();if(ss(l,e??{}))return a;Ti(a,"already-initialized")}return t.initialize({options:e})}function Qx(i,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(nr);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Xx(i,e,t){const r=Cf(i);Se(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const a=!1,l=K1(e),{host:c,port:m}=Wx(e),p=m===null?"":`:${m}`,g={url:`${l}//${c}${p}/`},v=Object.freeze({host:c,port:m,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!r._canInitEmulator){Se(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Se(ss(g,r.config.emulator)&&ss(v,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=g,r.emulatorConfig=v,r.settings.appVerificationDisabledForTesting=!0,Bo(c)?(If("Auth",!0),v1(`${l}//${c}${p}`)):Jx()}function K1(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function Wx(i){const e=K1(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(r);if(a){const l=a[1];return{host:l,port:Yb(r.substr(l.length+1))}}else{const[l,c]=r.split(":");return{host:l,port:Yb(c)}}}function Yb(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function Jx(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Y1=class{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return tr("not implemented")}_getIdTokenResponse(e){return tr("not implemented")}_linkToIdToken(e,t){return tr("not implemented")}_getReauthenticationResolver(e){return tr("not implemented")}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function So(i,e){return Rx(i,"POST","/v1/accounts:signInWithIdp",Kg(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zx="http://localhost";let xf=class Hp extends Y1{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Hp(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ti("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:a}=t,l=Fo(t,["providerId","signInMethod"]);if(!r||!a)return null;const c=new Hp(r,a);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return So(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,So(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,So(e,t)}buildRequest(){const e={requestUri:Zx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=mr(t)}return e}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wg=class{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}};/**
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
 */let Fu=class extends Wg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Q1=class fo extends Fu{constructor(){super("facebook.com")}static credential(e){return xf._fromParams({providerId:fo.PROVIDER_ID,signInMethod:fo.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fo.credentialFromTaggedObject(e)}static credentialFromError(e){return fo.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fo.credential(e.oauthAccessToken)}catch{return null}}};Q1.FACEBOOK_SIGN_IN_METHOD="facebook.com";Q1.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jg=class mo extends Fu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return xf._fromParams({providerId:mo.PROVIDER_ID,signInMethod:mo.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return mo.credentialFromTaggedObject(e)}static credentialFromError(e){return mo.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return mo.credential(t,r)}catch{return null}}};Jg.GOOGLE_SIGN_IN_METHOD="google.com";Jg.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let X1=class po extends Fu{constructor(){super("github.com")}static credential(e){return xf._fromParams({providerId:po.PROVIDER_ID,signInMethod:po.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return po.credentialFromTaggedObject(e)}static credentialFromError(e){return po.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return po.credential(e.oauthAccessToken)}catch{return null}}};X1.GITHUB_SIGN_IN_METHOD="github.com";X1.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let W1=class go extends Fu{constructor(){super("twitter.com")}static credential(e,t){return xf._fromParams({providerId:go.PROVIDER_ID,signInMethod:go.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return go.credentialFromTaggedObject(e)}static credentialFromError(e){return go.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return go.credential(t,r)}catch{return null}}};W1.TWITTER_SIGN_IN_METHOD="twitter.com";W1.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zg=class Gp{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,a=!1){const l=await Eo._fromIdTokenResponse(e,r,a),c=Qb(r);return new Gp({user:l,providerId:c,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const a=Qb(r);return new Gp({user:e,providerId:a,_tokenResponse:r,operationType:t})}};function Qb(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eN=class $p extends zn{constructor(e,t,r,a){var l;super(t.code,t.message),this.operationType=r,this.user=a,Object.setPrototypeOf(this,$p.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,a){return new $p(e,t,r,a)}};function J1(i,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?eN._fromErrorAndOperation(i,l,e,r):l})}async function tN(i,e,t=!1){const r=await Ru(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return Zg._forOperation(i,"link",r)}/**
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
 */async function nN(i,e,t=!1){const{auth:r}=i;if(wt(r.app))return Promise.reject(la(r));const a="reauthenticate";try{const l=await Ru(i,J1(r,a,e,i),t);Se(l.idToken,r,"internal-error");const c=Yg(l.idToken);Se(c,r,"internal-error");const{sub:m}=c;return Se(i.uid===m,r,"user-mismatch"),Zg._forOperation(i,a,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Ti(r,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iN(i,e,t=!1){if(wt(i.app))return Promise.reject(la(i));const r="signIn",a=await J1(i,r,e),l=await Zg._fromIdTokenResponse(i,r,a);return t||await i._updateCurrentUser(l.user),l}function rN(i,e,t,r){return Rt(i).onIdTokenChanged(e,t,r)}function sN(i,e,t){return Rt(i).beforeAuthStateChanged(e,t)}function Z1(i,e,t,r){return Rt(i).onAuthStateChanged(e,t,r)}function aN(i){return Rt(i).signOut()}const Zh="__sak";/**
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
 */function ey(i="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return i+t}/**
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
 */let hN=class{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,c;return new Promise((m,p)=>{const g=ey("",20);a.port1.start();const v=setTimeout(()=>{p(new Error("unsupported_event"))},r);c={messageChannel:a,onMessage(E){const S=E;if(S.data.eventId===g)switch(S.data.status){case"ack":clearTimeout(v),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),m(S.data.response);break;default:clearTimeout(v),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),a.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[a.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(){return window}function fN(i){_i().location.href=i}/**
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
 */function aA(){return typeof _i().WorkerGlobalScope<"u"&&typeof _i().importScripts=="function"}async function dN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mN(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function pN(){return aA()?self:null}/**
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
 */const oA="firebaseLocalStorageDb",gN=1,ef="firebaseLocalStorage",lA="fbase_key";let qu=class{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}};function Nf(i,e){return i.transaction([ef],e?"readwrite":"readonly").objectStore(ef)}function yN(){const i=indexedDB.deleteDatabase(oA);return new qu(i).toPromise()}function Kp(){const i=indexedDB.open(oA,gN);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const r=i.result;try{r.createObjectStore(ef,{keyPath:lA})}catch(a){t(a)}}),i.addEventListener("success",async()=>{const r=i.result;r.objectStoreNames.contains(ef)?e(r):(r.close(),await yN(),e(await Kp()))})})}async function Xb(i,e,t){const r=Nf(i,!0).put({[lA]:e,value:t});return new qu(r).toPromise()}async function vN(i,e){const t=Nf(i,!1).get(e),r=await new qu(t).toPromise();return r===void 0?null:r.value}function Wb(i,e){const t=Nf(i,!0).delete(e);return new qu(t).toPromise()}const _N=800,bN=3;let uA=class{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Kp(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>bN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return aA()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rA._getInstance(pN()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await dN(),!this.activeServiceWorker)return;this.sender=new hN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||mN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Kp();return await Xb(e,Zh,"1"),await Wb(e,Zh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Xb(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>vN(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Wb(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=Nf(a,!1).getAll();return new qu(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)r.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!r.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const a of Array.from(r))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_N)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}};uA.type="LOCAL";const EN=uA;new Bu(3e4,6e4);/**
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
 */function cA(i,e){return e?nr(e):(Se(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */let ty=class extends Y1{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return So(e,this._buildIdpRequest())}_linkToIdToken(e,t){return So(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return So(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}};function TN(i){return iN(i.auth,new ty(i),i.bypassAuthState)}function AN(i){const{auth:e,user:t}=i;return Se(t,e,"internal-error"),nN(t,new ty(i),i.bypassAuthState)}async function SN(i){const{auth:e,user:t}=i;return Se(t,e,"internal-error"),tN(t,new ty(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hA=class{constructor(e,t,r,a,l=!1){this.auth=e,this.resolver=r,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:a,tenantId:l,error:c,type:m}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:r,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return TN;case"linkViaPopup":case"linkViaRedirect":return SN;case"reauthViaPopup":case"reauthViaRedirect":return AN;default:Ti(this.auth,"internal-error")}}resolve(e){lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wN=new Bu(2e3,1e4);async function IN(i,e,t){if(wt(i.app))return Promise.reject(Yn(i,"operation-not-supported-in-this-environment"));const r=Cf(i);bx(i,e,Wg);const a=cA(r,t);return new sa(r,"signInViaPopup",e,a).executeNotNull()}class sa extends hA{constructor(e,t,r,a,l){super(e,t,a,l),this.provider=r,this.authWindow=null,this.pollId=null,sa.currentPopupAction&&sa.currentPopupAction.cancel(),sa.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Se(e,this.auth,"internal-error"),e}async onExecution(){lr(this.filter.length===1,"Popup operations only handle one event");const e=ey();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Yn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Yn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,sa.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Yn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,wN.get())};e()}}sa.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RN="pendingRedirect",Mh=new Map;let CN=class extends hA{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Mh.get(this.auth._key());if(!e){try{const r=await xN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Mh.set(this.auth._key(),e)}return this.bypassAuthState||Mh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}};async function xN(i,e){const t=DN(e),r=ON(i);if(!await r._isAvailable())return!1;const a=await r._get(t)==="true";return await r._remove(t),a}function NN(i,e){Mh.set(i._key(),e)}function ON(i){return nr(i._redirectPersistence)}function DN(i){return Ph(RN,i.config.apiKey,i.name)}async function PN(i,e,t=!1){if(wt(i.app))return Promise.reject(la(i));const r=Cf(i),a=cA(r,e),c=await new CN(r,a,t).execute();return c&&!t&&(delete c.user._redirectEventId,await r._persistUserIfCurrent(c.user),await r._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kN=10*60*1e3;let MN=class{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!VN(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!fA(e)){const a=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Yn(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=kN&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jb(e))}saveEventToCache(e){this.cachedEventUids.add(Jb(e)),this.lastProcessedEventTime=Date.now()}};function Jb(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function fA({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function VN(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fA(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LN(i,e={}){return qo(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jN=/^https?/;async function zN(i){if(i.config.emulator)return;const{authorizedDomains:e}=await LN(i);for(const t of e)try{if(BN(t))return}catch{}Ti(i,"unauthorized-domain")}function BN(i){const e=Bp(),{protocol:t,hostname:r}=new URL(e);if(i.startsWith("chrome-extension://")){const c=new URL(i);return c.hostname===""&&r===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===r}if(!jN.test(t))return!1;if(UN.test(i))return r===i;const a=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(r)}/**
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
 */const FN=new Bu(3e4,6e4);function Zb(){const i=_i().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function qN(i){return new Promise((e,t)=>{var r,a,l;function c(){Zb(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zb(),t(Yn(i,"network-request-failed"))},timeout:FN.get()})}if(!((a=(r=_i().gapi)===null||r===void 0?void 0:r.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((l=_i().gapi)===null||l===void 0)&&l.load)c();else{const m=Kx("iframefcb");return _i()[m]=()=>{gapi.load?c():t(Yn(i,"network-request-failed"))},Gx(`${$x()}?onload=${m}`).catch(p=>t(p))}}).catch(e=>{throw Vh=null,e})}let Vh=null;function HN(i){return Vh=Vh||qN(i),Vh}/**
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
 */const GN=new Bu(5e3,15e3),$N="__/auth/iframe",KN="emulator/auth/iframe",YN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},QN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function XN(i){const e=i.config;Se(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?$g(e,KN):`https://${i.config.authDomain}/${$N}`,r={apiKey:e.apiKey,appName:i.name,v:Ri},a=QN.get(i.config.apiHost);a&&(r.eid=a);const l=i._getFrameworks();return l.length&&(r.fw=l.join(",")),`${t}?${mr(r).slice(1)}`}async function WN(i){const e=await HN(i),t=_i().gapi;return Se(t,i,"internal-error"),e.open({where:document.body,url:XN(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:YN,dontclear:!0},r=>new Promise(async(a,l)=>{await r.restyle({setHideOnLeave:!1});const c=Yn(i,"network-request-failed"),m=_i().setTimeout(()=>{l(c)},GN.get());function p(){_i().clearTimeout(m),a(r)}r.ping(p).then(p,()=>{l(c)})}))}/**
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
 */const JN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ZN=500,eO=600,tO="_blank",nO="http://localhost";class eE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function iO(i,e,t,r=ZN,a=eO){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),c=Math.max((window.screen.availWidth-r)/2,0).toString();let m="";const p=Object.assign(Object.assign({},JN),{width:r.toString(),height:a.toString(),top:l,left:c}),g=tt().toLowerCase();t&&(m=z1(g)?tO:t),U1(g)&&(e=e||nO,p.scrollbars="yes");const v=Object.entries(p).reduce((S,[U,F])=>`${S}${U}=${F},`,"");if(Lx(g)&&m!=="_self")return rO(e||"",m),new eE(null);const E=window.open(e||"",m,v);Se(E,i,"popup-blocked");try{E.focus()}catch{}return new eE(E)}function rO(i,e){const t=document.createElement("a");t.href=i,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const sO="__/auth/handler",aO="emulator/auth/handler",oO=encodeURIComponent("fac");async function tE(i,e,t,r,a,l){Se(i.config.authDomain,i,"auth-domain-config-required"),Se(i.config.apiKey,i,"invalid-api-key");const c={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:r,v:Ri,eventId:a};if(e instanceof Wg){e.setDefaultLanguage(i.languageCode),c.providerId=e.providerId||"",S1(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,E]of Object.entries({}))c[v]=E}if(e instanceof Fu){const v=e.getScopes().filter(E=>E!=="");v.length>0&&(c.scopes=v.join(","))}i.tenantId&&(c.tid=i.tenantId);const m=c;for(const v of Object.keys(m))m[v]===void 0&&delete m[v];const p=await i._getAppCheckToken(),g=p?`#${oO}=${encodeURIComponent(p)}`:"";return`${lO(i)}?${mr(m).slice(1)}${g}`}function lO({config:i}){return i.emulator?$g(i,aO):`https://${i.authDomain}/${sO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gp="webStorageSupport";class uO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=iA,this._completeRedirectFn=PN,this._overrideRedirectResult=NN}async _openPopup(e,t,r,a){var l;lr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const c=await tE(e,t,r,Bp(),a);return iO(e,c,ey())}async _openRedirect(e,t,r,a){await this._originValidation(e);const l=await tE(e,t,r,Bp(),a);return fN(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:l}=this.eventManagers[t];return a?Promise.resolve(a):(lr(l,"If manager is not set, promise should be"),l)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await WN(e),r=new MN(e);return t.register("authEvent",a=>(Se(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:r.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(gp,{type:gp},a=>{var l;const c=(l=a==null?void 0:a[0])===null||l===void 0?void 0:l[gp];c!==void 0&&t(!!c),Ti(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=zN(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return G1()||j1()||Qg()}}const cO=uO;var nE="@firebase/auth",iE="1.10.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function fO(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function dO(i){as(new ar("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:m}=r.options;Se(c&&!c.includes(":"),"invalid-api-key",{appName:r.name});const p={apiKey:c,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$1(i)},g=new qx(r,a,l,p);return Qx(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),as(new ar("auth-internal",e=>{const t=Cf(e.getProvider("auth").getImmediate());return(r=>new hO(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),vi(nE,iE,fO(i)),vi(nE,iE,"esm2017")}/**
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
 */const mO=5*60,pO=y1("authIdTokenMaxAge")||mO;let rE=null;const gO=i=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>pO)return;const a=t==null?void 0:t.token;rE!==a&&(rE=a,await fetch(i,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function ny(i=qg()){const e=zu(i,"auth");if(e.isInitialized())return e.getImmediate();const t=Yx(i,{popupRedirectResolver:cO,persistence:[EN,uN,iA]}),r=y1("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(r,location.origin);if(location.origin===l.origin){const c=gO(l.toString());sN(t,c,()=>c(t.currentUser)),rN(t,m=>c(m))}}const a=p1("auth");return a?Xx(t,`http://${a}`):If("Auth",!1),t}function yO(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}Hx({loadJS(i){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",i),r.onload=e,r.onerror=a=>{const l=Yn("internal-error");l.customData=a,t(l)},r.type="text/javascript",r.charset="UTF-8",yO().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});dO("Browser");var vO="firebase",_O="11.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vi(vO,_O,"app");const bO={apiKey:"AIzaSyBu90rcUqw574sLzB_Ka-IRUlTGWo0sjBk",authDomain:"proyectouno-d09e0.firebaseapp.com",databaseURL:"https://proyectouno-d09e0-default-rtdb.firebaseio.com",projectId:"proyectouno-d09e0",storageBucket:"proyectouno-d09e0.firebasestorage.app",messagingSenderId:"567007730982",appId:"1:567007730982:web:cde41dd58a20780201f5e7",measurementId:"G-BJTNZ2M8DH"},Ci=C1(bO);var sE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var is,dA;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(D,I){function R(){}R.prototype=I.prototype,D.D=I.prototype,D.prototype=new R,D.prototype.constructor=D,D.C=function(N,k,M){for(var x=Array(arguments.length-2),Ft=2;Ft<arguments.length;Ft++)x[Ft-2]=arguments[Ft];return I.prototype[k].apply(N,x)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(D,I,R){R||(R=0);var N=Array(16);if(typeof I=="string")for(var k=0;16>k;++k)N[k]=I.charCodeAt(R++)|I.charCodeAt(R++)<<8|I.charCodeAt(R++)<<16|I.charCodeAt(R++)<<24;else for(k=0;16>k;++k)N[k]=I[R++]|I[R++]<<8|I[R++]<<16|I[R++]<<24;I=D.g[0],R=D.g[1],k=D.g[2];var M=D.g[3],x=I+(M^R&(k^M))+N[0]+3614090360&4294967295;I=R+(x<<7&4294967295|x>>>25),x=M+(k^I&(R^k))+N[1]+3905402710&4294967295,M=I+(x<<12&4294967295|x>>>20),x=k+(R^M&(I^R))+N[2]+606105819&4294967295,k=M+(x<<17&4294967295|x>>>15),x=R+(I^k&(M^I))+N[3]+3250441966&4294967295,R=k+(x<<22&4294967295|x>>>10),x=I+(M^R&(k^M))+N[4]+4118548399&4294967295,I=R+(x<<7&4294967295|x>>>25),x=M+(k^I&(R^k))+N[5]+1200080426&4294967295,M=I+(x<<12&4294967295|x>>>20),x=k+(R^M&(I^R))+N[6]+2821735955&4294967295,k=M+(x<<17&4294967295|x>>>15),x=R+(I^k&(M^I))+N[7]+4249261313&4294967295,R=k+(x<<22&4294967295|x>>>10),x=I+(M^R&(k^M))+N[8]+1770035416&4294967295,I=R+(x<<7&4294967295|x>>>25),x=M+(k^I&(R^k))+N[9]+2336552879&4294967295,M=I+(x<<12&4294967295|x>>>20),x=k+(R^M&(I^R))+N[10]+4294925233&4294967295,k=M+(x<<17&4294967295|x>>>15),x=R+(I^k&(M^I))+N[11]+2304563134&4294967295,R=k+(x<<22&4294967295|x>>>10),x=I+(M^R&(k^M))+N[12]+1804603682&4294967295,I=R+(x<<7&4294967295|x>>>25),x=M+(k^I&(R^k))+N[13]+4254626195&4294967295,M=I+(x<<12&4294967295|x>>>20),x=k+(R^M&(I^R))+N[14]+2792965006&4294967295,k=M+(x<<17&4294967295|x>>>15),x=R+(I^k&(M^I))+N[15]+1236535329&4294967295,R=k+(x<<22&4294967295|x>>>10),x=I+(k^M&(R^k))+N[1]+4129170786&4294967295,I=R+(x<<5&4294967295|x>>>27),x=M+(R^k&(I^R))+N[6]+3225465664&4294967295,M=I+(x<<9&4294967295|x>>>23),x=k+(I^R&(M^I))+N[11]+643717713&4294967295,k=M+(x<<14&4294967295|x>>>18),x=R+(M^I&(k^M))+N[0]+3921069994&4294967295,R=k+(x<<20&4294967295|x>>>12),x=I+(k^M&(R^k))+N[5]+3593408605&4294967295,I=R+(x<<5&4294967295|x>>>27),x=M+(R^k&(I^R))+N[10]+38016083&4294967295,M=I+(x<<9&4294967295|x>>>23),x=k+(I^R&(M^I))+N[15]+3634488961&4294967295,k=M+(x<<14&4294967295|x>>>18),x=R+(M^I&(k^M))+N[4]+3889429448&4294967295,R=k+(x<<20&4294967295|x>>>12),x=I+(k^M&(R^k))+N[9]+568446438&4294967295,I=R+(x<<5&4294967295|x>>>27),x=M+(R^k&(I^R))+N[14]+3275163606&4294967295,M=I+(x<<9&4294967295|x>>>23),x=k+(I^R&(M^I))+N[3]+4107603335&4294967295,k=M+(x<<14&4294967295|x>>>18),x=R+(M^I&(k^M))+N[8]+1163531501&4294967295,R=k+(x<<20&4294967295|x>>>12),x=I+(k^M&(R^k))+N[13]+2850285829&4294967295,I=R+(x<<5&4294967295|x>>>27),x=M+(R^k&(I^R))+N[2]+4243563512&4294967295,M=I+(x<<9&4294967295|x>>>23),x=k+(I^R&(M^I))+N[7]+1735328473&4294967295,k=M+(x<<14&4294967295|x>>>18),x=R+(M^I&(k^M))+N[12]+2368359562&4294967295,R=k+(x<<20&4294967295|x>>>12),x=I+(R^k^M)+N[5]+4294588738&4294967295,I=R+(x<<4&4294967295|x>>>28),x=M+(I^R^k)+N[8]+2272392833&4294967295,M=I+(x<<11&4294967295|x>>>21),x=k+(M^I^R)+N[11]+1839030562&4294967295,k=M+(x<<16&4294967295|x>>>16),x=R+(k^M^I)+N[14]+4259657740&4294967295,R=k+(x<<23&4294967295|x>>>9),x=I+(R^k^M)+N[1]+2763975236&4294967295,I=R+(x<<4&4294967295|x>>>28),x=M+(I^R^k)+N[4]+1272893353&4294967295,M=I+(x<<11&4294967295|x>>>21),x=k+(M^I^R)+N[7]+4139469664&4294967295,k=M+(x<<16&4294967295|x>>>16),x=R+(k^M^I)+N[10]+3200236656&4294967295,R=k+(x<<23&4294967295|x>>>9),x=I+(R^k^M)+N[13]+681279174&4294967295,I=R+(x<<4&4294967295|x>>>28),x=M+(I^R^k)+N[0]+3936430074&4294967295,M=I+(x<<11&4294967295|x>>>21),x=k+(M^I^R)+N[3]+3572445317&4294967295,k=M+(x<<16&4294967295|x>>>16),x=R+(k^M^I)+N[6]+76029189&4294967295,R=k+(x<<23&4294967295|x>>>9),x=I+(R^k^M)+N[9]+3654602809&4294967295,I=R+(x<<4&4294967295|x>>>28),x=M+(I^R^k)+N[12]+3873151461&4294967295,M=I+(x<<11&4294967295|x>>>21),x=k+(M^I^R)+N[15]+530742520&4294967295,k=M+(x<<16&4294967295|x>>>16),x=R+(k^M^I)+N[2]+3299628645&4294967295,R=k+(x<<23&4294967295|x>>>9),x=I+(k^(R|~M))+N[0]+4096336452&4294967295,I=R+(x<<6&4294967295|x>>>26),x=M+(R^(I|~k))+N[7]+1126891415&4294967295,M=I+(x<<10&4294967295|x>>>22),x=k+(I^(M|~R))+N[14]+2878612391&4294967295,k=M+(x<<15&4294967295|x>>>17),x=R+(M^(k|~I))+N[5]+4237533241&4294967295,R=k+(x<<21&4294967295|x>>>11),x=I+(k^(R|~M))+N[12]+1700485571&4294967295,I=R+(x<<6&4294967295|x>>>26),x=M+(R^(I|~k))+N[3]+2399980690&4294967295,M=I+(x<<10&4294967295|x>>>22),x=k+(I^(M|~R))+N[10]+4293915773&4294967295,k=M+(x<<15&4294967295|x>>>17),x=R+(M^(k|~I))+N[1]+2240044497&4294967295,R=k+(x<<21&4294967295|x>>>11),x=I+(k^(R|~M))+N[8]+1873313359&4294967295,I=R+(x<<6&4294967295|x>>>26),x=M+(R^(I|~k))+N[15]+4264355552&4294967295,M=I+(x<<10&4294967295|x>>>22),x=k+(I^(M|~R))+N[6]+2734768916&4294967295,k=M+(x<<15&4294967295|x>>>17),x=R+(M^(k|~I))+N[13]+1309151649&4294967295,R=k+(x<<21&4294967295|x>>>11),x=I+(k^(R|~M))+N[4]+4149444226&4294967295,I=R+(x<<6&4294967295|x>>>26),x=M+(R^(I|~k))+N[11]+3174756917&4294967295,M=I+(x<<10&4294967295|x>>>22),x=k+(I^(M|~R))+N[2]+718787259&4294967295,k=M+(x<<15&4294967295|x>>>17),x=R+(M^(k|~I))+N[9]+3951481745&4294967295,D.g[0]=D.g[0]+I&4294967295,D.g[1]=D.g[1]+(k+(x<<21&4294967295|x>>>11))&4294967295,D.g[2]=D.g[2]+k&4294967295,D.g[3]=D.g[3]+M&4294967295}r.prototype.u=function(D,I){I===void 0&&(I=D.length);for(var R=I-this.blockSize,N=this.B,k=this.h,M=0;M<I;){if(k==0)for(;M<=R;)a(this,D,M),M+=this.blockSize;if(typeof D=="string"){for(;M<I;)if(N[k++]=D.charCodeAt(M++),k==this.blockSize){a(this,N),k=0;break}}else for(;M<I;)if(N[k++]=D[M++],k==this.blockSize){a(this,N),k=0;break}}this.h=k,this.o+=I},r.prototype.v=function(){var D=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);D[0]=128;for(var I=1;I<D.length-8;++I)D[I]=0;var R=8*this.o;for(I=D.length-8;I<D.length;++I)D[I]=R&255,R/=256;for(this.u(D),D=Array(16),I=R=0;4>I;++I)for(var N=0;32>N;N+=8)D[R++]=this.g[I]>>>N&255;return D};function l(D,I){var R=m;return Object.prototype.hasOwnProperty.call(R,D)?R[D]:R[D]=I(D)}function c(D,I){this.h=I;for(var R=[],N=!0,k=D.length-1;0<=k;k--){var M=D[k]|0;N&&M==I||(R[k]=M,N=!1)}this.g=R}var m={};function p(D){return-128<=D&&128>D?l(D,function(I){return new c([I|0],0>I?-1:0)}):new c([D|0],0>D?-1:0)}function g(D){if(isNaN(D)||!isFinite(D))return E;if(0>D)return V(g(-D));for(var I=[],R=1,N=0;D>=R;N++)I[N]=D/R|0,R*=4294967296;return new c(I,0)}function v(D,I){if(D.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(D.charAt(0)=="-")return V(v(D.substring(1),I));if(0<=D.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=g(Math.pow(I,8)),N=E,k=0;k<D.length;k+=8){var M=Math.min(8,D.length-k),x=parseInt(D.substring(k,k+M),I);8>M?(M=g(Math.pow(I,M)),N=N.j(M).add(g(x))):(N=N.j(R),N=N.add(g(x)))}return N}var E=p(0),S=p(1),U=p(16777216);i=c.prototype,i.m=function(){if(K(this))return-V(this).m();for(var D=0,I=1,R=0;R<this.g.length;R++){var N=this.i(R);D+=(0<=N?N:4294967296+N)*I,I*=4294967296}return D},i.toString=function(D){if(D=D||10,2>D||36<D)throw Error("radix out of range: "+D);if(F(this))return"0";if(K(this))return"-"+V(this).toString(D);for(var I=g(Math.pow(D,6)),R=this,N="";;){var k=ce(R,I).g;R=G(R,k.j(I));var M=((0<R.g.length?R.g[0]:R.h)>>>0).toString(D);if(R=k,F(R))return M+N;for(;6>M.length;)M="0"+M;N=M+N}},i.i=function(D){return 0>D?0:D<this.g.length?this.g[D]:this.h};function F(D){if(D.h!=0)return!1;for(var I=0;I<D.g.length;I++)if(D.g[I]!=0)return!1;return!0}function K(D){return D.h==-1}i.l=function(D){return D=G(this,D),K(D)?-1:F(D)?0:1};function V(D){for(var I=D.g.length,R=[],N=0;N<I;N++)R[N]=~D.g[N];return new c(R,~D.h).add(S)}i.abs=function(){return K(this)?V(this):this},i.add=function(D){for(var I=Math.max(this.g.length,D.g.length),R=[],N=0,k=0;k<=I;k++){var M=N+(this.i(k)&65535)+(D.i(k)&65535),x=(M>>>16)+(this.i(k)>>>16)+(D.i(k)>>>16);N=x>>>16,M&=65535,x&=65535,R[k]=x<<16|M}return new c(R,R[R.length-1]&-2147483648?-1:0)};function G(D,I){return D.add(V(I))}i.j=function(D){if(F(this)||F(D))return E;if(K(this))return K(D)?V(this).j(V(D)):V(V(this).j(D));if(K(D))return V(this.j(V(D)));if(0>this.l(U)&&0>D.l(U))return g(this.m()*D.m());for(var I=this.g.length+D.g.length,R=[],N=0;N<2*I;N++)R[N]=0;for(N=0;N<this.g.length;N++)for(var k=0;k<D.g.length;k++){var M=this.i(N)>>>16,x=this.i(N)&65535,Ft=D.i(k)>>>16,ht=D.i(k)&65535;R[2*N+2*k]+=x*ht,X(R,2*N+2*k),R[2*N+2*k+1]+=M*ht,X(R,2*N+2*k+1),R[2*N+2*k+1]+=x*Ft,X(R,2*N+2*k+1),R[2*N+2*k+2]+=M*Ft,X(R,2*N+2*k+2)}for(N=0;N<I;N++)R[N]=R[2*N+1]<<16|R[2*N];for(N=I;N<2*I;N++)R[N]=0;return new c(R,0)};function X(D,I){for(;(D[I]&65535)!=D[I];)D[I+1]+=D[I]>>>16,D[I]&=65535,I++}function W(D,I){this.g=D,this.h=I}function ce(D,I){if(F(I))throw Error("division by zero");if(F(D))return new W(E,E);if(K(D))return I=ce(V(D),I),new W(V(I.g),V(I.h));if(K(I))return I=ce(D,V(I)),new W(V(I.g),I.h);if(30<D.g.length){if(K(D)||K(I))throw Error("slowDivide_ only works with positive integers.");for(var R=S,N=I;0>=N.l(D);)R=oe(R),N=oe(N);var k=de(R,1),M=de(N,1);for(N=de(N,2),R=de(R,2);!F(N);){var x=M.add(N);0>=x.l(D)&&(k=k.add(R),M=x),N=de(N,1),R=de(R,1)}return I=G(D,k.j(I)),new W(k,I)}for(k=E;0<=D.l(I);){for(R=Math.max(1,Math.floor(D.m()/I.m())),N=Math.ceil(Math.log(R)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),M=g(R),x=M.j(I);K(x)||0<x.l(D);)R-=N,M=g(R),x=M.j(I);F(M)&&(M=S),k=k.add(M),D=G(D,x)}return new W(k,D)}i.A=function(D){return ce(this,D).h},i.and=function(D){for(var I=Math.max(this.g.length,D.g.length),R=[],N=0;N<I;N++)R[N]=this.i(N)&D.i(N);return new c(R,this.h&D.h)},i.or=function(D){for(var I=Math.max(this.g.length,D.g.length),R=[],N=0;N<I;N++)R[N]=this.i(N)|D.i(N);return new c(R,this.h|D.h)},i.xor=function(D){for(var I=Math.max(this.g.length,D.g.length),R=[],N=0;N<I;N++)R[N]=this.i(N)^D.i(N);return new c(R,this.h^D.h)};function oe(D){for(var I=D.g.length+1,R=[],N=0;N<I;N++)R[N]=D.i(N)<<1|D.i(N-1)>>>31;return new c(R,D.h)}function de(D,I){var R=I>>5;I%=32;for(var N=D.g.length-R,k=[],M=0;M<N;M++)k[M]=0<I?D.i(M+R)>>>I|D.i(M+R+1)<<32-I:D.i(M+R);return new c(k,D.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,dA=r,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=g,c.fromString=v,is=c}).apply(typeof sE<"u"?sE:typeof self<"u"?self:typeof window<"u"?window:{});var Sh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mA,lu,pA,Lh,Yp,gA,yA,vA;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,y,_){return h==Array.prototype||h==Object.prototype||(h[y]=_.value),h};function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof Sh=="object"&&Sh];for(var y=0;y<h.length;++y){var _=h[y];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var r=t(this);function a(h,y){if(y)e:{var _=r;h=h.split(".");for(var A=0;A<h.length-1;A++){var j=h[A];if(!(j in _))break e;_=_[j]}h=h[h.length-1],A=_[h],y=y(A),y!=A&&y!=null&&e(_,h,{configurable:!0,writable:!0,value:y})}}function l(h,y){h instanceof String&&(h+="");var _=0,A=!1,j={next:function(){if(!A&&_<h.length){var $=_++;return{value:y($,h[$]),done:!1}}return A=!0,{done:!0,value:void 0}}};return j[Symbol.iterator]=function(){return j},j}a("Array.prototype.values",function(h){return h||function(){return l(this,function(y,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},m=this||self;function p(h){var y=typeof h;return y=y!="object"?y:h?Array.isArray(h)?"array":y:"null",y=="array"||y=="object"&&typeof h.length=="number"}function g(h){var y=typeof h;return y=="object"&&h!=null||y=="function"}function v(h,y,_){return h.call.apply(h.bind,arguments)}function E(h,y,_){if(!h)throw Error();if(2<arguments.length){var A=Array.prototype.slice.call(arguments,2);return function(){var j=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(j,A),h.apply(y,j)}}return function(){return h.apply(y,arguments)}}function S(h,y,_){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:E,S.apply(null,arguments)}function U(h,y){var _=Array.prototype.slice.call(arguments,1);return function(){var A=_.slice();return A.push.apply(A,arguments),h.apply(this,A)}}function F(h,y){function _(){}_.prototype=y.prototype,h.aa=y.prototype,h.prototype=new _,h.prototype.constructor=h,h.Qb=function(A,j,$){for(var ae=Array(arguments.length-2),je=2;je<arguments.length;je++)ae[je-2]=arguments[je];return y.prototype[j].apply(A,ae)}}function K(h){const y=h.length;if(0<y){const _=Array(y);for(let A=0;A<y;A++)_[A]=h[A];return _}return[]}function V(h,y){for(let _=1;_<arguments.length;_++){const A=arguments[_];if(p(A)){const j=h.length||0,$=A.length||0;h.length=j+$;for(let ae=0;ae<$;ae++)h[j+ae]=A[ae]}else h.push(A)}}class G{constructor(y,_){this.i=y,this.j=_,this.h=0,this.g=null}get(){let y;return 0<this.h?(this.h--,y=this.g,this.g=y.next,y.next=null):y=this.i(),y}}function X(h){return/^[\s\xa0]*$/.test(h)}function W(){var h=m.navigator;return h&&(h=h.userAgent)?h:""}function ce(h){return ce[" "](h),h}ce[" "]=function(){};var oe=W().indexOf("Gecko")!=-1&&!(W().toLowerCase().indexOf("webkit")!=-1&&W().indexOf("Edge")==-1)&&!(W().indexOf("Trident")!=-1||W().indexOf("MSIE")!=-1)&&W().indexOf("Edge")==-1;function de(h,y,_){for(const A in h)y.call(_,h[A],A,h)}function D(h,y){for(const _ in h)y.call(void 0,h[_],_,h)}function I(h){const y={};for(const _ in h)y[_]=h[_];return y}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(h,y){let _,A;for(let j=1;j<arguments.length;j++){A=arguments[j];for(_ in A)h[_]=A[_];for(let $=0;$<R.length;$++)_=R[$],Object.prototype.hasOwnProperty.call(A,_)&&(h[_]=A[_])}}function k(h){var y=1;h=h.split(":");const _=[];for(;0<y&&h.length;)_.push(h.shift()),y--;return h.length&&_.push(h.join(":")),_}function M(h){m.setTimeout(()=>{throw h},0)}function x(){var h=He;let y=null;return h.g&&(y=h.g,h.g=h.g.next,h.g||(h.h=null),y.next=null),y}class Ft{constructor(){this.h=this.g=null}add(y,_){const A=ht.get();A.set(y,_),this.h?this.h.next=A:this.g=A,this.h=A}}var ht=new G(()=>new Y,h=>h.reset());class Y{constructor(){this.next=this.g=this.h=null}set(y,_){this.h=y,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let le,ye=!1,He=new Ft,O=()=>{const h=m.Promise.resolve(void 0);le=()=>{h.then(te)}};var te=()=>{for(var h;h=x();){try{h.h.call(h.g)}catch(_){M(_)}var y=ht;y.j(h),100>y.h&&(y.h++,h.next=y.g,y.g=h)}ye=!1};function ue(){this.s=this.s,this.C=this.C}ue.prototype.s=!1,ue.prototype.ma=function(){this.s||(this.s=!0,this.N())},ue.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function se(h,y){this.type=h,this.g=this.target=y,this.defaultPrevented=!1}se.prototype.h=function(){this.defaultPrevented=!0};var ve=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var h=!1,y=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const _=()=>{};m.addEventListener("test",_,y),m.removeEventListener("test",_,y)}catch{}return h}();function De(h,y){if(se.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var _=this.type=h.type,A=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=y,y=h.relatedTarget){if(oe){e:{try{ce(y.nodeName);var j=!0;break e}catch{}j=!1}j||(y=null)}}else _=="mouseover"?y=h.fromElement:_=="mouseout"&&(y=h.toElement);this.relatedTarget=y,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:we[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&De.aa.h.call(this)}}F(De,se);var we={2:"touch",3:"pen",4:"mouse"};De.prototype.h=function(){De.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var Mt="closure_listenable_"+(1e6*Math.random()|0),it=0;function Xn(h,y,_,A,j){this.listener=h,this.proxy=null,this.src=y,this.type=_,this.capture=!!A,this.ha=j,this.key=++it,this.da=this.fa=!1}function gr(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function xi(h){this.src=h,this.g={},this.h=0}xi.prototype.add=function(h,y,_,A,j){var $=h.toString();h=this.g[$],h||(h=this.g[$]=[],this.h++);var ae=Ts(h,y,A,j);return-1<ae?(y=h[ae],_||(y.fa=!1)):(y=new Xn(y,this.src,$,!!A,j),y.fa=_,h.push(y)),y};function Es(h,y){var _=y.type;if(_ in h.g){var A=h.g[_],j=Array.prototype.indexOf.call(A,y,void 0),$;($=0<=j)&&Array.prototype.splice.call(A,j,1),$&&(gr(y),h.g[_].length==0&&(delete h.g[_],h.h--))}}function Ts(h,y,_,A){for(var j=0;j<h.length;++j){var $=h[j];if(!$.da&&$.listener==y&&$.capture==!!_&&$.ha==A)return j}return-1}var As="closure_lm_"+(1e6*Math.random()|0),Wo={};function Zu(h,y,_,A,j){if(Array.isArray(y)){for(var $=0;$<y.length;$++)Zu(h,y[$],_,A,j);return null}return _=ec(_),h&&h[Mt]?h.K(y,_,g(A)?!!A.capture:!1,j):Rn(h,y,_,!1,A,j)}function Rn(h,y,_,A,j,$){if(!y)throw Error("Invalid event type");var ae=g(j)?!!j.capture:!!j,je=Ea(h);if(je||(h[As]=je=new xi(h)),_=je.add(y,_,A,ae,$),_.proxy)return _;if(A=nd(),_.proxy=A,A.src=h,A.listener=_,h.addEventListener)ve||(j=ae),j===void 0&&(j=!1),h.addEventListener(y.toString(),A,j);else if(h.attachEvent)h.attachEvent(Ss(y.toString()),A);else if(h.addListener&&h.removeListener)h.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return _}function nd(){function h(_){return y.call(h.src,h.listener,_)}const y=id;return h}function Jo(h,y,_,A,j){if(Array.isArray(y))for(var $=0;$<y.length;$++)Jo(h,y[$],_,A,j);else A=g(A)?!!A.capture:!!A,_=ec(_),h&&h[Mt]?(h=h.i,y=String(y).toString(),y in h.g&&($=h.g[y],_=Ts($,_,A,j),-1<_&&(gr($[_]),Array.prototype.splice.call($,_,1),$.length==0&&(delete h.g[y],h.h--)))):h&&(h=Ea(h))&&(y=h.g[y.toString()],h=-1,y&&(h=Ts(y,_,A,j)),(_=-1<h?y[h]:null)&&ba(_))}function ba(h){if(typeof h!="number"&&h&&!h.da){var y=h.src;if(y&&y[Mt])Es(y.i,h);else{var _=h.type,A=h.proxy;y.removeEventListener?y.removeEventListener(_,A,h.capture):y.detachEvent?y.detachEvent(Ss(_),A):y.addListener&&y.removeListener&&y.removeListener(A),(_=Ea(y))?(Es(_,h),_.h==0&&(_.src=null,y[As]=null)):gr(h)}}}function Ss(h){return h in Wo?Wo[h]:Wo[h]="on"+h}function id(h,y){if(h.da)h=!0;else{y=new De(y,this);var _=h.listener,A=h.ha||h.src;h.fa&&ba(h),h=_.call(A,y)}return h}function Ea(h){return h=h[As],h instanceof xi?h:null}var Zo="__closure_events_fn_"+(1e9*Math.random()>>>0);function ec(h){return typeof h=="function"?h:(h[Zo]||(h[Zo]=function(y){return h.handleEvent(y)}),h[Zo])}function ft(){ue.call(this),this.i=new xi(this),this.M=this,this.F=null}F(ft,ue),ft.prototype[Mt]=!0,ft.prototype.removeEventListener=function(h,y,_,A){Jo(this,h,y,_,A)};function Ye(h,y){var _,A=h.F;if(A)for(_=[];A;A=A.F)_.push(A);if(h=h.M,A=y.type||y,typeof y=="string")y=new se(y,h);else if(y instanceof se)y.target=y.target||h;else{var j=y;y=new se(A,h),N(y,j)}if(j=!0,_)for(var $=_.length-1;0<=$;$--){var ae=y.g=_[$];j=gn(ae,A,!0,y)&&j}if(ae=y.g=h,j=gn(ae,A,!0,y)&&j,j=gn(ae,A,!1,y)&&j,_)for($=0;$<_.length;$++)ae=y.g=_[$],j=gn(ae,A,!1,y)&&j}ft.prototype.N=function(){if(ft.aa.N.call(this),this.i){var h=this.i,y;for(y in h.g){for(var _=h.g[y],A=0;A<_.length;A++)gr(_[A]);delete h.g[y],h.h--}}this.F=null},ft.prototype.K=function(h,y,_,A){return this.i.add(String(h),y,!1,_,A)},ft.prototype.L=function(h,y,_,A){return this.i.add(String(h),y,!0,_,A)};function gn(h,y,_,A){if(y=h.i.g[String(y)],!y)return!0;y=y.concat();for(var j=!0,$=0;$<y.length;++$){var ae=y[$];if(ae&&!ae.da&&ae.capture==_){var je=ae.listener,xt=ae.ha||ae.src;ae.fa&&Es(h.i,ae),j=je.call(xt,A)!==!1&&j}}return j&&!A.defaultPrevented}function Wt(h,y,_){if(typeof h=="function")_&&(h=S(h,_));else if(h&&typeof h.handleEvent=="function")h=S(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(y)?-1:m.setTimeout(h,y||0)}function tc(h){h.g=Wt(()=>{h.g=null,h.i&&(h.i=!1,tc(h))},h.l);const y=h.h;h.h=null,h.m.apply(null,y)}class rd extends ue{constructor(y,_){super(),this.m=y,this.l=_,this.h=null,this.i=!1,this.g=null}j(y){this.h=arguments,this.g?this.i=!0:tc(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ws(h){ue.call(this),this.h=h,this.g={}}F(ws,ue);var Is=[];function Rs(h){de(h.g,function(y,_){this.g.hasOwnProperty(_)&&ba(y)},h),h.g={}}ws.prototype.N=function(){ws.aa.N.call(this),Rs(this)},ws.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Bn=m.JSON.stringify,Ta=m.JSON.parse,Cs=class{stringify(h){return m.JSON.stringify(h,void 0)}parse(h){return m.JSON.parse(h,void 0)}};function el(){}el.prototype.h=null;function tl(h){return h.h||(h.h=h.i())}function nl(){}var Ni={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Oi(){se.call(this,"d")}F(Oi,se);function il(){se.call(this,"c")}F(il,se);var Wn={},rl=null;function yr(){return rl=rl||new ft}Wn.La="serverreachability";function Aa(h){se.call(this,Wn.La,h)}F(Aa,se);function vr(h){const y=yr();Ye(y,new Aa(y))}Wn.STAT_EVENT="statevent";function nc(h,y){se.call(this,Wn.STAT_EVENT,h),this.stat=y}F(nc,se);function at(h){const y=yr();Ye(y,new nc(y,h))}Wn.Ma="timingevent";function Ct(h,y){se.call(this,Wn.Ma,h),this.size=y}F(Ct,se);function bt(h,y){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){h()},y)}function Cn(){this.g=!0}Cn.prototype.xa=function(){this.g=!1};function sl(h,y,_,A,j,$){h.info(function(){if(h.g)if($)for(var ae="",je=$.split("&"),xt=0;xt<je.length;xt++){var ze=je[xt].split("=");if(1<ze.length){var Lt=ze[0];ze=ze[1];var Nt=Lt.split("_");ae=2<=Nt.length&&Nt[1]=="type"?ae+(Lt+"="+ze+"&"):ae+(Lt+"=redacted&")}}else ae=null;else ae=$;return"XMLHTTP REQ ("+A+") [attempt "+j+"]: "+y+`
`+_+`
`+ae})}function sd(h,y,_,A,j,$,ae){h.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+j+"]: "+y+`
`+_+`
`+$+" "+ae})}function _r(h,y,_,A){h.info(function(){return"XMLHTTP TEXT ("+y+"): "+xs(h,_)+(A?" "+A:"")})}function ic(h,y){h.info(function(){return"TIMEOUT: "+y})}Cn.prototype.info=function(){};function xs(h,y){if(!h.g)return y;if(!y)return null;try{var _=JSON.parse(y);if(_){for(h=0;h<_.length;h++)if(Array.isArray(_[h])){var A=_[h];if(!(2>A.length)){var j=A[1];if(Array.isArray(j)&&!(1>j.length)){var $=j[0];if($!="noop"&&$!="stop"&&$!="close")for(var ae=1;ae<j.length;ae++)j[ae]=""}}}}return Bn(_)}catch{return y}}var br={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Di={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Jn;function Zn(){}F(Zn,el),Zn.prototype.g=function(){return new XMLHttpRequest},Zn.prototype.i=function(){return{}},Jn=new Zn;function an(h,y,_,A){this.j=h,this.i=y,this.l=_,this.R=A||1,this.U=new ws(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new pt}function pt(){this.i=null,this.g="",this.h=!1}var al={},Sa={};function Fn(h,y,_){h.L=1,h.v=ks(yn(y)),h.m=_,h.P=!0,Pi(h,null)}function Pi(h,y){h.F=Date.now(),Ns(h),h.A=yn(h.v);var _=h.A,A=h.R;Array.isArray(A)||(A=[String(A)]),fl(_.i,"t",A),h.C=0,_=h.j.J,h.h=new pt,h.g=_c(h.j,_?y:null,!h.m),0<h.O&&(h.M=new rd(S(h.Y,h,h.g),h.O)),y=h.U,_=h.g,A=h.ca;var j="readystatechange";Array.isArray(j)||(j&&(Is[0]=j.toString()),j=Is);for(var $=0;$<j.length;$++){var ae=Zu(_,j[$],A||y.handleEvent,!1,y.h||y);if(!ae)break;y.g[ae.key]=ae}y=h.H?I(h.H):{},h.m?(h.u||(h.u="POST"),y["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,y)):(h.u="GET",h.g.ea(h.A,h.u,null,y)),vr(),sl(h.i,h.u,h.A,h.l,h.R,h.m)}an.prototype.ca=function(h){h=h.target;const y=this.M;y&&Dn(h)==3?y.j():this.Y(h)},an.prototype.Y=function(h){try{if(h==this.g)e:{const Nt=Dn(this.g);var y=this.g.Ba();const Bi=this.g.Z();if(!(3>Nt)&&(Nt!=3||this.g&&(this.h.h||this.g.oa()||hc(this.g)))){this.J||Nt!=4||y==7||(y==8||0>=Bi?vr(3):vr(2)),Er(this);var _=this.g.Z();this.X=_;t:if(rc(this)){var A=hc(this.g);h="";var j=A.length,$=Dn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){qt(this),ei(this);var ae="";break t}this.h.i=new m.TextDecoder}for(y=0;y<j;y++)this.h.h=!0,h+=this.h.i.decode(A[y],{stream:!($&&y==j-1)});A.length=0,this.h.g+=h,this.C=0,ae=this.h.g}else ae=this.g.oa();if(this.o=_==200,sd(this.i,this.u,this.A,this.l,this.R,Nt,_),this.o){if(this.T&&!this.K){t:{if(this.g){var je,xt=this.g;if((je=xt.g?xt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!X(je)){var ze=je;break t}}ze=null}if(_=ze)_r(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Os(this,_);else{this.o=!1,this.s=3,at(12),qt(this),ei(this);break e}}if(this.P){_=!0;let Ht;for(;!this.J&&this.C<ae.length;)if(Ht=sc(this,ae),Ht==Sa){Nt==4&&(this.s=4,at(14),_=!1),_r(this.i,this.l,null,"[Incomplete Response]");break}else if(Ht==al){this.s=4,at(15),_r(this.i,this.l,ae,"[Invalid Chunk]"),_=!1;break}else _r(this.i,this.l,Ht,null),Os(this,Ht);if(rc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Nt!=4||ae.length!=0||this.h.h||(this.s=1,at(16),_=!1),this.o=this.o&&_,!_)_r(this.i,this.l,ae,"[Invalid Chunked Response]"),qt(this),ei(this);else if(0<ae.length&&!this.W){this.W=!0;var Lt=this.j;Lt.g==this&&Lt.ba&&!Lt.M&&(Lt.j.info("Great, no buffering proxy detected. Bytes received: "+ae.length),Fs(Lt),Lt.M=!0,at(11))}}else _r(this.i,this.l,ae,null),Os(this,ae);Nt==4&&qt(this),this.o&&!this.J&&(Nt==4?gc(this.j,this):(this.o=!1,Ns(this)))}else cd(this.g),_==400&&0<ae.indexOf("Unknown SID")?(this.s=3,at(12)):(this.s=0,at(13)),qt(this),ei(this)}}}catch{}finally{}};function rc(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function sc(h,y){var _=h.C,A=y.indexOf(`
`,_);return A==-1?Sa:(_=Number(y.substring(_,A)),isNaN(_)?al:(A+=1,A+_>y.length?Sa:(y=y.slice(A,A+_),h.C=A+_,y)))}an.prototype.cancel=function(){this.J=!0,qt(this)};function Ns(h){h.S=Date.now()+h.I,ac(h,h.I)}function ac(h,y){if(h.B!=null)throw Error("WatchDog timer not null");h.B=bt(S(h.ba,h),y)}function Er(h){h.B&&(m.clearTimeout(h.B),h.B=null)}an.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(ic(this.i,this.A),this.L!=2&&(vr(),at(17)),qt(this),this.s=2,ei(this)):ac(this,this.S-h)};function ei(h){h.j.G==0||h.J||gc(h.j,h)}function qt(h){Er(h);var y=h.M;y&&typeof y.ma=="function"&&y.ma(),h.M=null,Rs(h.U),h.g&&(y=h.g,h.g=null,y.abort(),y.ma())}function Os(h,y){try{var _=h.j;if(_.G!=0&&(_.g==h||ol(_.h,h))){if(!h.K&&ol(_.h,h)&&_.G==3){try{var A=_.Da.g.parse(y)}catch{A=null}if(Array.isArray(A)&&A.length==3){var j=A;if(j[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<h.F)Va(_),ka(_);else break e;yl(_),at(18)}}else _.za=j[1],0<_.za-_.T&&37500>j[2]&&_.F&&_.v==0&&!_.C&&(_.C=bt(S(_.Za,_),6e3));if(1>=Ia(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else zi(_,11)}else if((h.K||_.g==h)&&Va(_),!X(y))for(j=_.Da.g.parse(y),y=0;y<j.length;y++){let ze=j[y];if(_.T=ze[0],ze=ze[1],_.G==2)if(ze[0]=="c"){_.K=ze[1],_.ia=ze[2];const Lt=ze[3];Lt!=null&&(_.la=Lt,_.j.info("VER="+_.la));const Nt=ze[4];Nt!=null&&(_.Aa=Nt,_.j.info("SVER="+_.Aa));const Bi=ze[5];Bi!=null&&typeof Bi=="number"&&0<Bi&&(A=1.5*Bi,_.L=A,_.j.info("backChannelRequestTimeoutMs_="+A)),A=_;const Ht=h.g;if(Ht){const oi=Ht.g?Ht.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(oi){var $=A.h;$.g||oi.indexOf("spdy")==-1&&oi.indexOf("quic")==-1&&oi.indexOf("h2")==-1||($.j=$.l,$.g=new Set,$.h&&(Ra($,$.h),$.h=null))}if(A.D){const _l=Ht.g?Ht.g.getResponseHeader("X-HTTP-Session-Id"):null;_l&&(A.ya=_l,We(A.I,A.D,_l))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-h.F,_.j.info("Handshake RTT: "+_.R+"ms")),A=_;var ae=h;if(A.qa=vc(A,A.J?A.ia:null,A.W),ae.K){on(A.h,ae);var je=ae,xt=A.L;xt&&(je.I=xt),je.B&&(Er(je),Ns(je)),A.g=ae}else mc(A);0<_.i.length&&Ma(_)}else ze[0]!="stop"&&ze[0]!="close"||zi(_,7);else _.G==3&&(ze[0]=="stop"||ze[0]=="close"?ze[0]=="stop"?zi(_,7):pl(_):ze[0]!="noop"&&_.l&&_.l.ta(ze),_.v=0)}}vr(4)}catch{}}var oc=class{constructor(h,y){this.g=h,this.map=y}};function ki(h){this.l=h||10,m.PerformanceNavigationTiming?(h=m.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function wa(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function Ia(h){return h.h?1:h.g?h.g.size:0}function ol(h,y){return h.h?h.h==y:h.g?h.g.has(y):!1}function Ra(h,y){h.g?h.g.add(y):h.h=y}function on(h,y){h.h&&h.h==y?h.h=null:h.g&&h.g.has(y)&&h.g.delete(y)}ki.prototype.cancel=function(){if(this.i=ll(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function ll(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let y=h.i;for(const _ of h.g.values())y=y.concat(_.D);return y}return K(h.i)}function ad(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(p(h)){for(var y=[],_=h.length,A=0;A<_;A++)y.push(h[A]);return y}y=[],_=0;for(A in h)y[_++]=h[A];return y}function Ca(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(p(h)||typeof h=="string"){var y=[];h=h.length;for(var _=0;_<h;_++)y.push(_);return y}y=[],_=0;for(const A in h)y[_++]=A;return y}}}function ul(h,y){if(h.forEach&&typeof h.forEach=="function")h.forEach(y,void 0);else if(p(h)||typeof h=="string")Array.prototype.forEach.call(h,y,void 0);else for(var _=Ca(h),A=ad(h),j=A.length,$=0;$<j;$++)y.call(void 0,A[$],_&&_[$],h)}var Ds=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function od(h,y){if(h){h=h.split("&");for(var _=0;_<h.length;_++){var A=h[_].indexOf("="),j=null;if(0<=A){var $=h[_].substring(0,A);j=h[_].substring(A+1)}else $=h[_];y($,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function Et(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof Et){this.h=h.h,Ps(this,h.j),this.o=h.o,this.g=h.g,Tr(this,h.s),this.l=h.l;var y=h.i,_=new Vi;_.i=y.i,y.g&&(_.g=new Map(y.g),_.h=y.h),Mi(this,_),this.m=h.m}else h&&(y=String(h).match(Ds))?(this.h=!1,Ps(this,y[1]||"",!0),this.o=xn(y[2]||""),this.g=xn(y[3]||"",!0),Tr(this,y[4]),this.l=xn(y[5]||"",!0),Mi(this,y[6]||"",!0),this.m=xn(y[7]||"")):(this.h=!1,this.i=new Vi(null,this.h))}Et.prototype.toString=function(){var h=[],y=this.j;y&&h.push(Ms(y,cl,!0),":");var _=this.g;return(_||y=="file")&&(h.push("//"),(y=this.o)&&h.push(Ms(y,cl,!0),"@"),h.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&h.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&h.push("/"),h.push(Ms(_,_.charAt(0)=="/"?ld:hl,!0))),(_=this.i.toString())&&h.push("?",_),(_=this.m)&&h.push("#",Ms(_,xa)),h.join("")};function yn(h){return new Et(h)}function Ps(h,y,_){h.j=_?xn(y,!0):y,h.j&&(h.j=h.j.replace(/:$/,""))}function Tr(h,y){if(y){if(y=Number(y),isNaN(y)||0>y)throw Error("Bad port number "+y);h.s=y}else h.s=null}function Mi(h,y,_){y instanceof Vi?(h.i=y,uc(h.i,h.h)):(_||(y=Ms(y,ud)),h.i=new Vi(y,h.h))}function We(h,y,_){h.i.set(y,_)}function ks(h){return We(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function xn(h,y){return h?y?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function Ms(h,y,_){return typeof h=="string"?(h=encodeURI(h).replace(y,lc),_&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function lc(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var cl=/[#\/\?@]/g,hl=/[#\?:]/g,ld=/[#\?]/g,ud=/[#\?@]/g,xa=/#/g;function Vi(h,y){this.h=this.g=null,this.i=h||null,this.j=!!y}function Nn(h){h.g||(h.g=new Map,h.h=0,h.i&&od(h.i,function(y,_){h.add(decodeURIComponent(y.replace(/\+/g," ")),_)}))}i=Vi.prototype,i.add=function(h,y){Nn(this),this.i=null,h=ti(this,h);var _=this.g.get(h);return _||this.g.set(h,_=[]),_.push(y),this.h+=1,this};function Li(h,y){Nn(h),y=ti(h,y),h.g.has(y)&&(h.i=null,h.h-=h.g.get(y).length,h.g.delete(y))}function Ui(h,y){return Nn(h),y=ti(h,y),h.g.has(y)}i.forEach=function(h,y){Nn(this),this.g.forEach(function(_,A){_.forEach(function(j){h.call(y,j,A,this)},this)},this)},i.na=function(){Nn(this);const h=Array.from(this.g.values()),y=Array.from(this.g.keys()),_=[];for(let A=0;A<y.length;A++){const j=h[A];for(let $=0;$<j.length;$++)_.push(y[A])}return _},i.V=function(h){Nn(this);let y=[];if(typeof h=="string")Ui(this,h)&&(y=y.concat(this.g.get(ti(this,h))));else{h=Array.from(this.g.values());for(let _=0;_<h.length;_++)y=y.concat(h[_])}return y},i.set=function(h,y){return Nn(this),this.i=null,h=ti(this,h),Ui(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[y]),this.h+=1,this},i.get=function(h,y){return h?(h=this.V(h),0<h.length?String(h[0]):y):y};function fl(h,y,_){Li(h,y),0<_.length&&(h.i=null,h.g.set(ti(h,y),K(_)),h.h+=_.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],y=Array.from(this.g.keys());for(var _=0;_<y.length;_++){var A=y[_];const $=encodeURIComponent(String(A)),ae=this.V(A);for(A=0;A<ae.length;A++){var j=$;ae[A]!==""&&(j+="="+encodeURIComponent(String(ae[A]))),h.push(j)}}return this.i=h.join("&")};function ti(h,y){return y=String(y),h.j&&(y=y.toLowerCase()),y}function uc(h,y){y&&!h.j&&(Nn(h),h.i=null,h.g.forEach(function(_,A){var j=A.toLowerCase();A!=j&&(Li(this,A),fl(this,j,_))},h)),h.j=y}function Vs(h,y){const _=new Cn;if(m.Image){const A=new Image;A.onload=U(On,_,"TestLoadImage: loaded",!0,y,A),A.onerror=U(On,_,"TestLoadImage: error",!1,y,A),A.onabort=U(On,_,"TestLoadImage: abort",!1,y,A),A.ontimeout=U(On,_,"TestLoadImage: timeout",!1,y,A),m.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=h}else y(!1)}function qn(h,y){const _=new Cn,A=new AbortController,j=setTimeout(()=>{A.abort(),On(_,"TestPingServer: timeout",!1,y)},1e4);fetch(h,{signal:A.signal}).then($=>{clearTimeout(j),$.ok?On(_,"TestPingServer: ok",!0,y):On(_,"TestPingServer: server error",!1,y)}).catch(()=>{clearTimeout(j),On(_,"TestPingServer: error",!1,y)})}function On(h,y,_,A,j){try{j&&(j.onload=null,j.onerror=null,j.onabort=null,j.ontimeout=null),A(_)}catch{}}function Ls(){this.g=new Cs}function ni(h,y,_){const A=_||"";try{ul(h,function(j,$){let ae=j;g(j)&&(ae=Bn(j)),y.push(A+$+"="+encodeURIComponent(ae))})}catch(j){throw y.push(A+"type="+encodeURIComponent("_badmap")),j}}function Ar(h){this.l=h.Ub||null,this.j=h.eb||!1}F(Ar,el),Ar.prototype.g=function(){return new ji(this.l,this.j)},Ar.prototype.i=function(h){return function(){return h}}({});function ji(h,y){ft.call(this),this.D=h,this.o=y,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}F(ji,ft),i=ji.prototype,i.open=function(h,y){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=y,this.readyState=1,ri(this)},i.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const y={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(y.body=h),(this.D||m).fetch(new Request(this.A,y)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ii(this)),this.readyState=0},i.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,ri(this)),this.g&&(this.readyState=3,ri(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;dl(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function dl(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}i.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var y=h.value?h.value:new Uint8Array(0);(y=this.v.decode(y,{stream:!h.done}))&&(this.response=this.responseText+=y)}h.done?ii(this):ri(this),this.readyState==3&&dl(this)}},i.Ra=function(h){this.g&&(this.response=this.responseText=h,ii(this))},i.Qa=function(h){this.g&&(this.response=h,ii(this))},i.ga=function(){this.g&&ii(this)};function ii(h){h.readyState=4,h.l=null,h.j=null,h.v=null,ri(h)}i.setRequestHeader=function(h,y){this.u.append(h,y)},i.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],y=this.h.entries();for(var _=y.next();!_.done;)_=_.value,h.push(_[0]+": "+_[1]),_=y.next();return h.join(`\r
`)};function ri(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(ji.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function ml(h){let y="";return de(h,function(_,A){y+=A,y+=":",y+=_,y+=`\r
`}),y}function Vt(h,y,_){e:{for(A in _){var A=!1;break e}A=!0}A||(_=ml(_),typeof h=="string"?_!=null&&encodeURIComponent(String(_)):We(h,y,_))}function $e(h){ft.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}F($e,ft);var Na=/^https?$/i,Us=["POST","PUT"];i=$e.prototype,i.Ha=function(h){this.J=h},i.ea=function(h,y,_,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);y=y?y.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Jn.g(),this.v=this.o?tl(this.o):tl(Jn),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(y,String(h),!0),this.B=!1}catch($){cc(this,$);return}if(h=_||"",_=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var j in A)_.set(j,A[j]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const $ of A.keys())_.set($,A.get($));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(_.keys()).find($=>$.toLowerCase()=="content-type"),j=m.FormData&&h instanceof m.FormData,!(0<=Array.prototype.indexOf.call(Us,y,void 0))||A||j||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[$,ae]of _)this.g.setRequestHeader($,ae);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{js(this),this.u=!0,this.g.send(h),this.u=!1}catch($){cc(this,$)}};function cc(h,y){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=y,h.m=5,Oa(h),si(h)}function Oa(h){h.A||(h.A=!0,Ye(h,"complete"),Ye(h,"error"))}i.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,Ye(this,"complete"),Ye(this,"abort"),si(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),si(this,!0)),$e.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Da(this):this.bb())},i.bb=function(){Da(this)};function Da(h){if(h.h&&typeof c<"u"&&(!h.v[1]||Dn(h)!=4||h.Z()!=2)){if(h.u&&Dn(h)==4)Wt(h.Ea,0,h);else if(Ye(h,"readystatechange"),Dn(h)==4){h.h=!1;try{const ae=h.Z();e:switch(ae){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var y=!0;break e;default:y=!1}var _;if(!(_=y)){var A;if(A=ae===0){var j=String(h.D).match(Ds)[1]||null;!j&&m.self&&m.self.location&&(j=m.self.location.protocol.slice(0,-1)),A=!Na.test(j?j.toLowerCase():"")}_=A}if(_)Ye(h,"complete"),Ye(h,"success");else{h.m=6;try{var $=2<Dn(h)?h.g.statusText:""}catch{$=""}h.l=$+" ["+h.Z()+"]",Oa(h)}}finally{si(h)}}}}function si(h,y){if(h.g){js(h);const _=h.g,A=h.v[0]?()=>{}:null;h.g=null,h.v=null,y||Ye(h,"ready");try{_.onreadystatechange=A}catch{}}}function js(h){h.I&&(m.clearTimeout(h.I),h.I=null)}i.isActive=function(){return!!this.g};function Dn(h){return h.g?h.g.readyState:0}i.Z=function(){try{return 2<Dn(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(h){if(this.g){var y=this.g.responseText;return h&&y.indexOf(h)==0&&(y=y.substring(h.length)),Ta(y)}};function hc(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function cd(h){const y={};h=(h.g&&2<=Dn(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<h.length;A++){if(X(h[A]))continue;var _=k(h[A]);const j=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const $=y[j]||[];y[j]=$,$.push(_)}D(y,function(A){return A.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function zs(h,y,_){return _&&_.internalChannelParams&&_.internalChannelParams[h]||y}function Pa(h){this.Aa=0,this.i=[],this.j=new Cn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=zs("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=zs("baseRetryDelayMs",5e3,h),this.cb=zs("retryDelaySeedMs",1e4,h),this.Wa=zs("forwardChannelMaxRetries",2,h),this.wa=zs("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new ki(h&&h.concurrentRequestLimit),this.Da=new Ls,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Pa.prototype,i.la=8,i.G=1,i.connect=function(h,y,_,A){at(0),this.W=h,this.H=y||{},_&&A!==void 0&&(this.H.OSID=_,this.H.OAID=A),this.F=this.X,this.I=vc(this,null,this.W),Ma(this)};function pl(h){if(fc(h),h.G==3){var y=h.U++,_=yn(h.I);if(We(_,"SID",h.K),We(_,"RID",y),We(_,"TYPE","terminate"),Bs(h,_),y=new an(h,h.j,y),y.L=2,y.v=ks(yn(_)),_=!1,m.navigator&&m.navigator.sendBeacon)try{_=m.navigator.sendBeacon(y.v.toString(),"")}catch{}!_&&m.Image&&(new Image().src=y.v,_=!0),_||(y.g=_c(y.j,null),y.g.ea(y.v)),y.F=Date.now(),Ns(y)}yc(h)}function ka(h){h.g&&(Fs(h),h.g.cancel(),h.g=null)}function fc(h){ka(h),h.u&&(m.clearTimeout(h.u),h.u=null),Va(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&m.clearTimeout(h.s),h.s=null)}function Ma(h){if(!wa(h.h)&&!h.s){h.s=!0;var y=h.Ga;le||O(),ye||(le(),ye=!0),He.add(y,h),h.B=0}}function hd(h,y){return Ia(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=y.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=bt(S(h.Ga,h,y),vl(h,h.B)),h.B++,!0)}i.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const j=new an(this,this.j,h);let $=this.o;if(this.S&&($?($=I($),N($,this.S)):$=this.S),this.m!==null||this.O||(j.H=$,$=null),this.P)e:{for(var y=0,_=0;_<this.i.length;_++){t:{var A=this.i[_];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break t}A=void 0}if(A===void 0)break;if(y+=A,4096<y){y=_;break e}if(y===4096||_===this.i.length-1){y=_+1;break e}}y=1e3}else y=1e3;y=dc(this,j,y),_=yn(this.I),We(_,"RID",h),We(_,"CVER",22),this.D&&We(_,"X-HTTP-Session-Id",this.D),Bs(this,_),$&&(this.O?y="headers="+encodeURIComponent(String(ml($)))+"&"+y:this.m&&Vt(_,this.m,$)),Ra(this.h,j),this.Ua&&We(_,"TYPE","init"),this.P?(We(_,"$req",y),We(_,"SID","null"),j.T=!0,Fn(j,_,null)):Fn(j,_,y),this.G=2}}else this.G==3&&(h?gl(this,h):this.i.length==0||wa(this.h)||gl(this))};function gl(h,y){var _;y?_=y.l:_=h.U++;const A=yn(h.I);We(A,"SID",h.K),We(A,"RID",_),We(A,"AID",h.T),Bs(h,A),h.m&&h.o&&Vt(A,h.m,h.o),_=new an(h,h.j,_,h.B+1),h.m===null&&(_.H=h.o),y&&(h.i=y.D.concat(h.i)),y=dc(h,_,1e3),_.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),Ra(h.h,_),Fn(_,A,y)}function Bs(h,y){h.H&&de(h.H,function(_,A){We(y,A,_)}),h.l&&ul({},function(_,A){We(y,A,_)})}function dc(h,y,_){_=Math.min(h.i.length,_);var A=h.l?S(h.l.Na,h.l,h):null;e:{var j=h.i;let $=-1;for(;;){const ae=["count="+_];$==-1?0<_?($=j[0].g,ae.push("ofs="+$)):$=0:ae.push("ofs="+$);let je=!0;for(let xt=0;xt<_;xt++){let ze=j[xt].g;const Lt=j[xt].map;if(ze-=$,0>ze)$=Math.max(0,j[xt].g-100),je=!1;else try{ni(Lt,ae,"req"+ze+"_")}catch{A&&A(Lt)}}if(je){A=ae.join("&");break e}}}return h=h.i.splice(0,_),y.D=h,A}function mc(h){if(!h.g&&!h.u){h.Y=1;var y=h.Fa;le||O(),ye||(le(),ye=!0),He.add(y,h),h.v=0}}function yl(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=bt(S(h.Fa,h),vl(h,h.v)),h.v++,!0)}i.Fa=function(){if(this.u=null,pc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=bt(S(this.ab,this),h)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,at(10),ka(this),pc(this))};function Fs(h){h.A!=null&&(m.clearTimeout(h.A),h.A=null)}function pc(h){h.g=new an(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var y=yn(h.qa);We(y,"RID","rpc"),We(y,"SID",h.K),We(y,"AID",h.T),We(y,"CI",h.F?"0":"1"),!h.F&&h.ja&&We(y,"TO",h.ja),We(y,"TYPE","xmlhttp"),Bs(h,y),h.m&&h.o&&Vt(y,h.m,h.o),h.L&&(h.g.I=h.L);var _=h.g;h=h.ia,_.L=1,_.v=ks(yn(y)),_.m=null,_.P=!0,Pi(_,h)}i.Za=function(){this.C!=null&&(this.C=null,ka(this),yl(this),at(19))};function Va(h){h.C!=null&&(m.clearTimeout(h.C),h.C=null)}function gc(h,y){var _=null;if(h.g==y){Va(h),Fs(h),h.g=null;var A=2}else if(ol(h.h,y))_=y.D,on(h.h,y),A=1;else return;if(h.G!=0){if(y.o)if(A==1){_=y.m?y.m.length:0,y=Date.now()-y.F;var j=h.B;A=yr(),Ye(A,new Ct(A,_)),Ma(h)}else mc(h);else if(j=y.s,j==3||j==0&&0<y.X||!(A==1&&hd(h,y)||A==2&&yl(h)))switch(_&&0<_.length&&(y=h.h,y.i=y.i.concat(_)),j){case 1:zi(h,5);break;case 4:zi(h,10);break;case 3:zi(h,6);break;default:zi(h,2)}}}function vl(h,y){let _=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(_*=2),_*y}function zi(h,y){if(h.j.info("Error code "+y),y==2){var _=S(h.fb,h),A=h.Xa;const j=!A;A=new Et(A||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||Ps(A,"https"),ks(A),j?Vs(A.toString(),_):qn(A.toString(),_)}else at(2);h.G=0,h.l&&h.l.sa(y),yc(h),fc(h)}i.fb=function(h){h?(this.j.info("Successfully pinged google.com"),at(2)):(this.j.info("Failed to ping google.com"),at(1))};function yc(h){if(h.G=0,h.ka=[],h.l){const y=ll(h.h);(y.length!=0||h.i.length!=0)&&(V(h.ka,y),V(h.ka,h.i),h.h.i.length=0,K(h.i),h.i.length=0),h.l.ra()}}function vc(h,y,_){var A=_ instanceof Et?yn(_):new Et(_);if(A.g!="")y&&(A.g=y+"."+A.g),Tr(A,A.s);else{var j=m.location;A=j.protocol,y=y?y+"."+j.hostname:j.hostname,j=+j.port;var $=new Et(null);A&&Ps($,A),y&&($.g=y),j&&Tr($,j),_&&($.l=_),A=$}return _=h.D,y=h.ya,_&&y&&We(A,_,y),We(A,"VER",h.la),Bs(h,A),A}function _c(h,y,_){if(y&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return y=h.Ca&&!h.pa?new $e(new Ar({eb:_})):new $e(h.pa),y.Ha(h.J),y}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function bc(){}i=bc.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function La(){}La.prototype.g=function(h,y){return new ln(h,y)};function ln(h,y){ft.call(this),this.g=new Pa(y),this.l=h,this.h=y&&y.messageUrlParams||null,h=y&&y.messageHeaders||null,y&&y.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=y&&y.initMessageHeaders||null,y&&y.messageContentType&&(h?h["X-WebChannel-Content-Type"]=y.messageContentType:h={"X-WebChannel-Content-Type":y.messageContentType}),y&&y.va&&(h?h["X-WebChannel-Client-Profile"]=y.va:h={"X-WebChannel-Client-Profile":y.va}),this.g.S=h,(h=y&&y.Sb)&&!X(h)&&(this.g.m=h),this.v=y&&y.supportsCrossDomainXhr||!1,this.u=y&&y.sendRawJson||!1,(y=y&&y.httpSessionIdParam)&&!X(y)&&(this.g.D=y,h=this.h,h!==null&&y in h&&(h=this.h,y in h&&delete h[y])),this.j=new ai(this)}F(ln,ft),ln.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ln.prototype.close=function(){pl(this.g)},ln.prototype.o=function(h){var y=this.g;if(typeof h=="string"){var _={};_.__data__=h,h=_}else this.u&&(_={},_.__data__=Bn(h),h=_);y.i.push(new oc(y.Ya++,h)),y.G==3&&Ma(y)},ln.prototype.N=function(){this.g.l=null,delete this.j,pl(this.g),delete this.g,ln.aa.N.call(this)};function Ec(h){Oi.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var y=h.__sm__;if(y){e:{for(const _ in y){h=_;break e}h=void 0}(this.i=h)&&(h=this.i,y=y!==null&&h in y?y[h]:void 0),this.data=y}else this.data=h}F(Ec,Oi);function Tc(){il.call(this),this.status=1}F(Tc,il);function ai(h){this.g=h}F(ai,bc),ai.prototype.ua=function(){Ye(this.g,"a")},ai.prototype.ta=function(h){Ye(this.g,new Ec(h))},ai.prototype.sa=function(h){Ye(this.g,new Tc)},ai.prototype.ra=function(){Ye(this.g,"b")},La.prototype.createWebChannel=La.prototype.g,ln.prototype.send=ln.prototype.o,ln.prototype.open=ln.prototype.m,ln.prototype.close=ln.prototype.close,vA=function(){return new La},yA=function(){return yr()},gA=Wn,Yp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},br.NO_ERROR=0,br.TIMEOUT=8,br.HTTP_ERROR=6,Lh=br,Di.COMPLETE="complete",pA=Di,nl.EventType=Ni,Ni.OPEN="a",Ni.CLOSE="b",Ni.ERROR="c",Ni.MESSAGE="d",ft.prototype.listen=ft.prototype.K,lu=nl,$e.prototype.listenOnce=$e.prototype.L,$e.prototype.getLastError=$e.prototype.Ka,$e.prototype.getLastErrorCode=$e.prototype.Ba,$e.prototype.getStatus=$e.prototype.Z,$e.prototype.getResponseJson=$e.prototype.Oa,$e.prototype.getResponseText=$e.prototype.oa,$e.prototype.send=$e.prototype.ea,$e.prototype.setWithCredentials=$e.prototype.Ha,mA=$e}).apply(typeof Sh<"u"?Sh:typeof self<"u"?self:typeof window<"u"?window:{});const aE="@firebase/firestore",oE="4.7.15";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Ho="11.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ca=new Rf("@firebase/firestore");function yo(){return ca.logLevel}function he(i,...e){if(ca.logLevel<=ke.DEBUG){const t=e.map(iy);ca.debug(`Firestore (${Ho}): ${i}`,...t)}}function ur(i,...e){if(ca.logLevel<=ke.ERROR){const t=e.map(iy);ca.error(`Firestore (${Ho}): ${i}`,...t)}}function No(i,...e){if(ca.logLevel<=ke.WARN){const t=e.map(iy);ca.warn(`Firestore (${Ho}): ${i}`,...t)}}function iy(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Te(i,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,_A(i,r,t)}function _A(i,e,t){let r=`FIRESTORE (${Ho}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw ur(r),new Error(r)}function Ke(i,e,t,r){let a="Unexpected state";typeof t=="string"?a=t:r=t,i||_A(e,a,r)}function Ce(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ie={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ge extends zn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bA{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class EO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(nn.UNAUTHENTICATED))}shutdown(){}}class TO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class AO{constructor(e){this.t=e,this.currentUser=nn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ke(this.o===void 0,42304);let r=this.i;const a=p=>this.i!==r?(r=this.i,t(p)):Promise.resolve();let l=new rr;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new rr,e.enqueueRetryable(()=>a(this.currentUser))};const c=()=>{const p=l;e.enqueueRetryable(async()=>{await p.promise,await a(this.currentUser)})},m=p=>{he("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(p=>m(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?m(p):(he("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new rr)}},0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(he("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ke(typeof r.accessToken=="string",31837,{l:r}),new bA(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ke(e===null||typeof e=="string",2055,{h:e}),new nn(e)}}class SO{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=nn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class wO{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new SO(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(nn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class lE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class IO{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,wt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ke(this.o===void 0,3512);const r=l=>{l.error!=null&&he("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,he("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>r(l))};const a=l=>{he("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(l=>a(l)),setTimeout(()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?a(l):he("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new lE(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ke(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new lE(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class TA{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const a=RO(40);for(let l=0;l<a.length;++l)r.length<20&&a[l]<t&&(r+=e.charAt(a[l]%62))}return r}}function Oe(i,e){return i<e?-1:i>e?1:0}function Qp(i,e){let t=0;for(;t<i.length&&t<e.length;){const r=i.codePointAt(t),a=e.codePointAt(t);if(r!==a){if(r<128&&a<128)return Oe(r,a);{const l=EA(),c=CO(l.encode(uE(i,t)),l.encode(uE(e,t)));return c!==0?c:Oe(r,a)}}t+=r>65535?2:1}return Oe(i.length,e.length)}function uE(i,e){return i.codePointAt(e)>65535?i.substring(e,e+2):i.substring(e,e+1)}function CO(i,e){for(let t=0;t<i.length&&t<e.length;++t)if(i[t]!==e[t])return Oe(i[t],e[t]);return Oe(i.length,e.length)}function Oo(i,e,t){return i.length===e.length&&i.every((r,a)=>t(r,e[a]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cE=-62135596800,hE=1e6;class It{static now(){return It.fromMillis(Date.now())}static fromDate(e){return It.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*hE);return new It(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ge(ie.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ge(ie.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<cE)throw new ge(ie.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ge(ie.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/hE}_compareTo(e){return this.seconds===e.seconds?Oe(this.nanoseconds,e.nanoseconds):Oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-cE;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{static fromTimestamp(e){return new Ie(e)}static min(){return new Ie(new It(0,0))}static max(){return new Ie(new It(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fE="__name__";class di{constructor(e,t,r){t===void 0?t=0:t>e.length&&Te(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&Te(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return di.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof di?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let a=0;a<r;a++){const l=di.compareSegments(e.get(a),t.get(a));if(l!==0)return l}return Oe(e.length,t.length)}static compareSegments(e,t){const r=di.isNumericId(e),a=di.isNumericId(t);return r&&!a?-1:!r&&a?1:r&&a?di.extractNumericId(e).compare(di.extractNumericId(t)):Qp(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return is.fromString(e.substring(4,e.length-2))}}class lt extends di{construct(e,t,r){return new lt(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new ge(ie.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(a=>a.length>0))}return new lt(t)}static emptyPath(){return new lt([])}}const xO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qt extends di{construct(e,t,r){return new Qt(e,t,r)}static isValidIdentifier(e){return xO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===fE}static keyField(){return new Qt([fE])}static fromServerFormat(e){const t=[];let r="",a=0;const l=()=>{if(r.length===0)throw new ge(ie.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let c=!1;for(;a<e.length;){const m=e[a];if(m==="\\"){if(a+1===e.length)throw new ge(ie.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[a+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ge(ie.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=p,a+=2}else m==="`"?(c=!c,a++):m!=="."||c?(r+=m,a++):(l(),a++)}if(l(),c)throw new ge(ie.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Qt(t)}static emptyPath(){return new Qt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.path=e}static fromPath(e){return new _e(lt.fromString(e))}static fromName(e){return new _e(lt.fromString(e).popFirst(5))}static empty(){return new _e(lt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&lt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return lt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new _e(new lt(e.slice()))}}/**
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
 */const Cu=-1;function NO(i,e){const t=i.toTimestamp().seconds,r=i.toTimestamp().nanoseconds+1,a=Ie.fromTimestamp(r===1e9?new It(t+1,0):new It(t,r));return new os(a,_e.empty(),e)}function OO(i){return new os(i.readTime,i.key,Cu)}class os{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new os(Ie.min(),_e.empty(),Cu)}static max(){return new os(Ie.max(),_e.empty(),Cu)}}function DO(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=_e.comparator(i.documentKey,e.documentKey),t!==0?t:Oe(i.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function Go(i){if(i.code!==ie.FAILED_PRECONDITION||i.message!==PO)throw i;he("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Te(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new ee((r,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(r,a)},this.catchCallback=l=>{this.wrapFailure(t,l).next(r,a)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof ee?t:ee.resolve(t)}catch(t){return ee.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):ee.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):ee.reject(t)}static resolve(e){return new ee((t,r)=>{t(e)})}static reject(e){return new ee((t,r)=>{r(e)})}static waitFor(e){return new ee((t,r)=>{let a=0,l=0,c=!1;e.forEach(m=>{++a,m.next(()=>{++l,c&&l===a&&t()},p=>r(p))}),c=!0,l===a&&t()})}static or(e){let t=ee.resolve(!1);for(const r of e)t=t.next(a=>a?ee.resolve(a):r());return t}static forEach(e,t){const r=[];return e.forEach((a,l)=>{r.push(t.call(this,a,l))}),this.waitFor(r)}static mapArray(e,t){return new ee((r,a)=>{const l=e.length,c=new Array(l);let m=0;for(let p=0;p<l;p++){const g=p;t(e[g]).next(v=>{c[g]=v,++m,m===l&&r(c)},v=>a(v))}})}static doWhile(e,t){return new ee((r,a)=>{const l=()=>{e()===!0?t().next(()=>{l()},a):r()};l()})}}function MO(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function $o(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class Of{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>t.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}Of.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ry=-1;function Df(i){return i==null}function tf(i){return i===0&&1/i==-1/0}function VO(i){return typeof i=="number"&&Number.isInteger(i)&&!tf(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AA="";function LO(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=dE(e)),e=UO(i.get(t),e);return dE(e)}function UO(i,e){let t=e;const r=i.length;for(let a=0;a<r;a++){const l=i.charAt(a);switch(l){case"\0":t+="";break;case AA:t+="";break;default:t+=l}}return t}function dE(i){return i+AA+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mE(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function _s(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function SA(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,t){this.comparator=e,this.root=t||Yt.EMPTY}insert(e,t){return new ct(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Yt.BLACK,null,null))}remove(e){return new ct(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Yt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const a=this.comparator(e,r.key);if(a===0)return t+r.left.size;a<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new wh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new wh(this.root,e,this.comparator,!1)}getReverseIterator(){return new wh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new wh(this.root,e,this.comparator,!0)}}class wh{constructor(e,t,r,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?r(e.key,t):1,t&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Yt{constructor(e,t,r,a,l){this.key=e,this.value=t,this.color=r??Yt.RED,this.left=a??Yt.EMPTY,this.right=l??Yt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,a,l){return new Yt(e??this.key,t??this.value,r??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let a=this;const l=r(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,t,r),null):l===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,r)),a.fixUp()}removeMin(){if(this.left.isEmpty())return Yt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return Yt.EMPTY;r=a.right.min(),a=a.copy(r.key,r.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Yt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Yt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Te(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Te(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Te(27949);return e+(this.isRed()?0:1)}}Yt.EMPTY=null,Yt.RED=!0,Yt.BLACK=!1;Yt.EMPTY=new class{constructor(){this.size=0}get key(){throw Te(57766)}get value(){throw Te(16141)}get color(){throw Te(16727)}get left(){throw Te(29726)}get right(){throw Te(36894)}copy(e,t,r,a,l){return this}insert(e,t,r){return new Yt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.comparator=e,this.data=new ct(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const a=r.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new pE(this.data.getIterator())}getIteratorFrom(e){return new pE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof kt)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=r.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new kt(this.comparator);return t.data=e,t}}class pE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e){this.fields=e,e.sort(Qt.comparator)}static empty(){return new wn([])}unionWith(e){let t=new kt(Qt.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new wn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Oo(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Xt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new wA("Invalid base64 string: "+l):l}}(e);return new Xt(t)}static fromUint8Array(e){const t=function(a){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);return l}(e);return new Xt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let a=0;a<t.length;a++)r[a]=t.charCodeAt(a);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Xt.EMPTY_BYTE_STRING=new Xt("");const jO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ls(i){if(Ke(!!i,39018),typeof i=="string"){let e=0;const t=jO.exec(i);if(Ke(!!t,46558,{timestamp:i}),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const r=new Date(i);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:vt(i.seconds),nanos:vt(i.nanos)}}function vt(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function us(i){return typeof i=="string"?Xt.fromBase64String(i):Xt.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IA="server_timestamp",RA="__type__",CA="__previous_value__",xA="__local_write_time__";function sy(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[RA])===null||t===void 0?void 0:t.stringValue)===IA}function Pf(i){const e=i.mapValue.fields[CA];return sy(e)?Pf(e):e}function xu(i){const e=ls(i.mapValue.fields[xA].timestampValue);return new It(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zO{constructor(e,t,r,a,l,c,m,p,g,v){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=a,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=m,this.longPollingOptions=p,this.useFetchStreams=g,this.isUsingEmulator=v}}const nf="(default)";class Nu{constructor(e,t){this.projectId=e,this.database=t||nf}static empty(){return new Nu("","")}get isDefaultDatabase(){return this.database===nf}isEqual(e){return e instanceof Nu&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NA="__type__",BO="__max__",Ih={mapValue:{}},OA="__vector__",rf="value";function cs(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?sy(i)?4:qO(i)?9007199254740991:FO(i)?10:11:Te(28295,{value:i})}function Ai(i,e){if(i===e)return!0;const t=cs(i);if(t!==cs(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return xu(i).isEqual(xu(e));case 3:return function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const c=ls(a.timestampValue),m=ls(l.timestampValue);return c.seconds===m.seconds&&c.nanos===m.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(a,l){return us(a.bytesValue).isEqual(us(l.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(a,l){return vt(a.geoPointValue.latitude)===vt(l.geoPointValue.latitude)&&vt(a.geoPointValue.longitude)===vt(l.geoPointValue.longitude)}(i,e);case 2:return function(a,l){if("integerValue"in a&&"integerValue"in l)return vt(a.integerValue)===vt(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const c=vt(a.doubleValue),m=vt(l.doubleValue);return c===m?tf(c)===tf(m):isNaN(c)&&isNaN(m)}return!1}(i,e);case 9:return Oo(i.arrayValue.values||[],e.arrayValue.values||[],Ai);case 10:case 11:return function(a,l){const c=a.mapValue.fields||{},m=l.mapValue.fields||{};if(mE(c)!==mE(m))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(m[p]===void 0||!Ai(c[p],m[p])))return!1;return!0}(i,e);default:return Te(52216,{left:i})}}function Ou(i,e){return(i.values||[]).find(t=>Ai(t,e))!==void 0}function Do(i,e){if(i===e)return 0;const t=cs(i),r=cs(e);if(t!==r)return Oe(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Oe(i.booleanValue,e.booleanValue);case 2:return function(l,c){const m=vt(l.integerValue||l.doubleValue),p=vt(c.integerValue||c.doubleValue);return m<p?-1:m>p?1:m===p?0:isNaN(m)?isNaN(p)?0:-1:1}(i,e);case 3:return gE(i.timestampValue,e.timestampValue);case 4:return gE(xu(i),xu(e));case 5:return Qp(i.stringValue,e.stringValue);case 6:return function(l,c){const m=us(l),p=us(c);return m.compareTo(p)}(i.bytesValue,e.bytesValue);case 7:return function(l,c){const m=l.split("/"),p=c.split("/");for(let g=0;g<m.length&&g<p.length;g++){const v=Oe(m[g],p[g]);if(v!==0)return v}return Oe(m.length,p.length)}(i.referenceValue,e.referenceValue);case 8:return function(l,c){const m=Oe(vt(l.latitude),vt(c.latitude));return m!==0?m:Oe(vt(l.longitude),vt(c.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return yE(i.arrayValue,e.arrayValue);case 10:return function(l,c){var m,p,g,v;const E=l.fields||{},S=c.fields||{},U=(m=E[rf])===null||m===void 0?void 0:m.arrayValue,F=(p=S[rf])===null||p===void 0?void 0:p.arrayValue,K=Oe(((g=U==null?void 0:U.values)===null||g===void 0?void 0:g.length)||0,((v=F==null?void 0:F.values)===null||v===void 0?void 0:v.length)||0);return K!==0?K:yE(U,F)}(i.mapValue,e.mapValue);case 11:return function(l,c){if(l===Ih.mapValue&&c===Ih.mapValue)return 0;if(l===Ih.mapValue)return 1;if(c===Ih.mapValue)return-1;const m=l.fields||{},p=Object.keys(m),g=c.fields||{},v=Object.keys(g);p.sort(),v.sort();for(let E=0;E<p.length&&E<v.length;++E){const S=Qp(p[E],v[E]);if(S!==0)return S;const U=Do(m[p[E]],g[v[E]]);if(U!==0)return U}return Oe(p.length,v.length)}(i.mapValue,e.mapValue);default:throw Te(23264,{Pe:t})}}function gE(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Oe(i,e);const t=ls(i),r=ls(e),a=Oe(t.seconds,r.seconds);return a!==0?a:Oe(t.nanos,r.nanos)}function yE(i,e){const t=i.values||[],r=e.values||[];for(let a=0;a<t.length&&a<r.length;++a){const l=Do(t[a],r[a]);if(l)return l}return Oe(t.length,r.length)}function Po(i){return Xp(i)}function Xp(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(t){const r=ls(t);return`time(${r.seconds},${r.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(t){return us(t).toBase64()}(i.bytesValue):"referenceValue"in i?function(t){return _e.fromName(t).toString()}(i.referenceValue):"geoPointValue"in i?function(t){return`geo(${t.latitude},${t.longitude})`}(i.geoPointValue):"arrayValue"in i?function(t){let r="[",a=!0;for(const l of t.values||[])a?a=!1:r+=",",r+=Xp(l);return r+"]"}(i.arrayValue):"mapValue"in i?function(t){const r=Object.keys(t.fields||{}).sort();let a="{",l=!0;for(const c of r)l?l=!1:a+=",",a+=`${c}:${Xp(t.fields[c])}`;return a+"}"}(i.mapValue):Te(61005,{value:i})}function Uh(i){switch(cs(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Pf(i);return e?16+Uh(e):16;case 5:return 2*i.stringValue.length;case 6:return us(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((a,l)=>a+Uh(l),0)}(i.arrayValue);case 10:case 11:return function(r){let a=0;return _s(r.fields,(l,c)=>{a+=l.length+Uh(c)}),a}(i.mapValue);default:throw Te(13486,{value:i})}}function Wp(i){return!!i&&"integerValue"in i}function ay(i){return!!i&&"arrayValue"in i}function vE(i){return!!i&&"nullValue"in i}function _E(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function jh(i){return!!i&&"mapValue"in i}function FO(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[NA])===null||t===void 0?void 0:t.stringValue)===OA}function pu(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return _s(i.mapValue.fields,(t,r)=>e.mapValue.fields[t]=pu(r)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=pu(i.arrayValue.values[t]);return e}return Object.assign({},i)}function qO(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===BO}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e){this.value=e}static empty(){return new mn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!jh(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=pu(t)}setAll(e){let t=Qt.emptyPath(),r={},a=[];e.forEach((c,m)=>{if(!t.isImmediateParentOf(m)){const p=this.getFieldsMap(t);this.applyChanges(p,r,a),r={},a=[],t=m.popLast()}c?r[m.lastSegment()]=pu(c):a.push(m.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,r,a)}delete(e){const t=this.field(e.popLast());jh(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ai(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let a=t.mapValue.fields[e.get(r)];jh(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,r){_s(t,(a,l)=>e[a]=l);for(const a of r)delete e[a]}clone(){return new mn(pu(this.value))}}function DA(i){const e=[];return _s(i.fields,(t,r)=>{const a=new Qt([t]);if(jh(r)){const l=DA(r.mapValue).fields;if(l.length===0)e.push(a);else for(const c of l)e.push(a.child(c))}else e.push(a)}),new wn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class sf{constructor(e,t){this.position=e,this.inclusive=t}}function bE(i,e,t){let r=0;for(let a=0;a<i.position.length;a++){const l=e[a],c=i.position[a];if(l.field.isKeyField()?r=_e.comparator(_e.fromName(c.referenceValue),t.key):r=Do(c,t.data.field(l.field)),l.dir==="desc"&&(r*=-1),r!==0)break}return r}function EE(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!Ai(i.position[t],e.position[t]))return!1;return!0}/**
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
 */class PA{}class Pt extends PA{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new $O(e,t,r):t==="array-contains"?new QO(e,r):t==="in"?new XO(e,r):t==="not-in"?new WO(e,r):t==="array-contains-any"?new JO(e,r):new Pt(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new KO(e,r):new YO(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Do(t,this.value)):t!==null&&cs(this.value)===cs(t)&&this.matchesComparison(Do(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Te(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Si extends PA{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new Si(e,t)}matches(e){return kA(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function kA(i){return i.op==="and"}function MA(i){return GO(i)&&kA(i)}function GO(i){for(const e of i.filters)if(e instanceof Si)return!1;return!0}function Jp(i){if(i instanceof Pt)return i.field.canonicalString()+i.op.toString()+Po(i.value);if(MA(i))return i.filters.map(e=>Jp(e)).join(",");{const e=i.filters.map(t=>Jp(t)).join(",");return`${i.op}(${e})`}}function VA(i,e){return i instanceof Pt?function(r,a){return a instanceof Pt&&r.op===a.op&&r.field.isEqual(a.field)&&Ai(r.value,a.value)}(i,e):i instanceof Si?function(r,a){return a instanceof Si&&r.op===a.op&&r.filters.length===a.filters.length?r.filters.reduce((l,c,m)=>l&&VA(c,a.filters[m]),!0):!1}(i,e):void Te(19439)}function LA(i){return i instanceof Pt?function(t){return`${t.field.canonicalString()} ${t.op} ${Po(t.value)}`}(i):i instanceof Si?function(t){return t.op.toString()+" {"+t.getFilters().map(LA).join(" ,")+"}"}(i):"Filter"}class $O extends Pt{constructor(e,t,r){super(e,t,r),this.key=_e.fromName(r.referenceValue)}matches(e){const t=_e.comparator(e.key,this.key);return this.matchesComparison(t)}}class KO extends Pt{constructor(e,t){super(e,"in",t),this.keys=UA("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class YO extends Pt{constructor(e,t){super(e,"not-in",t),this.keys=UA("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function UA(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>_e.fromName(r.referenceValue))}class QO extends Pt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ay(t)&&Ou(t.arrayValue,this.value)}}class XO extends Pt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ou(this.value.arrayValue,t)}}class WO extends Pt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ou(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ou(this.value.arrayValue,t)}}class JO extends Pt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ay(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Ou(this.value.arrayValue,r))}}/**
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
 */class ZO{constructor(e,t=null,r=[],a=[],l=null,c=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=a,this.limit=l,this.startAt=c,this.endAt=m,this.Ie=null}}function TE(i,e=null,t=[],r=[],a=null,l=null,c=null){return new ZO(i,e,t,r,a,l,c)}function oy(i){const e=Ce(i);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Jp(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(l){return l.field.canonicalString()+l.dir}(r)).join(","),Df(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Po(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Po(r)).join(",")),e.Ie=t}return e.Ie}function ly(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!HO(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!VA(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!EE(i.startAt,e.startAt)&&EE(i.endAt,e.endAt)}function Zp(i){return _e.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e,t=null,r=[],a=[],l=null,c="F",m=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=a,this.limit=l,this.limitType=c,this.startAt=m,this.endAt=p,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function eD(i,e,t,r,a,l,c,m){return new kf(i,e,t,r,a,l,c,m)}function uy(i){return new kf(i)}function AE(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function tD(i){return i.collectionGroup!==null}function gu(i){const e=Ce(i);if(e.Ee===null){e.Ee=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ee.push(l),t.add(l.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let m=new kt(Qt.comparator);return c.filters.forEach(p=>{p.getFlattenedFilters().forEach(g=>{g.isInequality()&&(m=m.add(g.field))})}),m})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ee.push(new af(l,r))}),t.has(Qt.keyField().canonicalString())||e.Ee.push(new af(Qt.keyField(),r))}return e.Ee}function bi(i){const e=Ce(i);return e.de||(e.de=nD(e,gu(i))),e.de}function nD(i,e){if(i.limitType==="F")return TE(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map(a=>{const l=a.dir==="desc"?"asc":"desc";return new af(a.field,l)});const t=i.endAt?new sf(i.endAt.position,i.endAt.inclusive):null,r=i.startAt?new sf(i.startAt.position,i.startAt.inclusive):null;return TE(i.path,i.collectionGroup,e,i.filters,i.limit,t,r)}}function eg(i,e,t){return new kf(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function Mf(i,e){return ly(bi(i),bi(e))&&i.limitType===e.limitType}function jA(i){return`${oy(bi(i))}|lt:${i.limitType}`}function vo(i){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(a=>LA(a)).join(", ")}]`),Df(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(a=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(a)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(a=>Po(a)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(a=>Po(a)).join(",")),`Target(${r})`}(bi(i))}; limitType=${i.limitType})`}function Vf(i,e){return e.isFoundDocument()&&function(r,a){const l=a.key.path;return r.collectionGroup!==null?a.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(l):_e.isDocumentKey(r.path)?r.path.isEqual(l):r.path.isImmediateParentOf(l)}(i,e)&&function(r,a){for(const l of gu(r))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0}(i,e)&&function(r,a){for(const l of r.filters)if(!l.matches(a))return!1;return!0}(i,e)&&function(r,a){return!(r.startAt&&!function(c,m,p){const g=bE(c,m,p);return c.inclusive?g<=0:g<0}(r.startAt,gu(r),a)||r.endAt&&!function(c,m,p){const g=bE(c,m,p);return c.inclusive?g>=0:g>0}(r.endAt,gu(r),a))}(i,e)}function iD(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function zA(i){return(e,t)=>{let r=!1;for(const a of gu(i)){const l=rD(a,e,t);if(l!==0)return l;r=r||a.field.isKeyField()}return 0}}function rD(i,e,t){const r=i.field.isKeyField()?_e.comparator(e.key,t.key):function(l,c,m){const p=c.data.field(l),g=m.data.field(l);return p!==null&&g!==null?Do(p,g):Te(42886)}(i.field,e,t);switch(i.dir){case"asc":return r;case"desc":return-1*r;default:return Te(19790,{direction:i.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[a,l]of r)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),a=this.inner[r];if(a===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let a=0;a<r.length;a++)if(this.equalsFn(r[a][0],e))return r.length===1?delete this.inner[t]:r.splice(a,1),this.innerSize--,!0;return!1}forEach(e){_s(this.inner,(t,r)=>{for(const[a,l]of r)e(a,l)})}isEmpty(){return SA(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sD=new ct(_e.comparator);function cr(){return sD}const BA=new ct(_e.comparator);function uu(...i){let e=BA;for(const t of i)e=e.insert(t.key,t);return e}function FA(i){let e=BA;return i.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function aa(){return yu()}function qA(){return yu()}function yu(){return new ga(i=>i.toString(),(i,e)=>i.isEqual(e))}const aD=new ct(_e.comparator),oD=new kt(_e.comparator);function Ue(...i){let e=oD;for(const t of i)e=e.add(t);return e}const lD=new kt(Oe);function uD(){return lD}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cy(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:tf(e)?"-0":e}}function HA(i){return{integerValue:""+i}}function cD(i,e){return VO(e)?HA(e):cy(i,e)}/**
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
 */class Lf{constructor(){this._=void 0}}function hD(i,e,t){return i instanceof of?function(a,l){const c={fields:{[RA]:{stringValue:IA},[xA]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&sy(l)&&(l=Pf(l)),l&&(c.fields[CA]=l),{mapValue:c}}(t,e):i instanceof Du?$A(i,e):i instanceof Pu?KA(i,e):function(a,l){const c=GA(a,l),m=SE(c)+SE(a.Re);return Wp(c)&&Wp(a.Re)?HA(m):cy(a.serializer,m)}(i,e)}function fD(i,e,t){return i instanceof Du?$A(i,e):i instanceof Pu?KA(i,e):t}function GA(i,e){return i instanceof lf?function(r){return Wp(r)||function(l){return!!l&&"doubleValue"in l}(r)}(e)?e:{integerValue:0}:null}class of extends Lf{}class Du extends Lf{constructor(e){super(),this.elements=e}}function $A(i,e){const t=YA(e);for(const r of i.elements)t.some(a=>Ai(a,r))||t.push(r);return{arrayValue:{values:t}}}class Pu extends Lf{constructor(e){super(),this.elements=e}}function KA(i,e){let t=YA(e);for(const r of i.elements)t=t.filter(a=>!Ai(a,r));return{arrayValue:{values:t}}}class lf extends Lf{constructor(e,t){super(),this.serializer=e,this.Re=t}}function SE(i){return vt(i.integerValue||i.doubleValue)}function YA(i){return ay(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function dD(i,e){return i.field.isEqual(e.field)&&function(r,a){return r instanceof Du&&a instanceof Du||r instanceof Pu&&a instanceof Pu?Oo(r.elements,a.elements,Ai):r instanceof lf&&a instanceof lf?Ai(r.Re,a.Re):r instanceof of&&a instanceof of}(i.transform,e.transform)}class mD{constructor(e,t){this.version=e,this.transformResults=t}}class Qn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Qn}static exists(e){return new Qn(void 0,e)}static updateTime(e){return new Qn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function zh(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class Uf{}function QA(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new WA(i.key,Qn.none()):new Hu(i.key,i.data,Qn.none());{const t=i.data,r=mn.empty();let a=new kt(Qt.comparator);for(let l of e.fields)if(!a.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?r.delete(l):r.set(l,c),a=a.add(l)}return new bs(i.key,r,new wn(a.toArray()),Qn.none())}}function pD(i,e,t){i instanceof Hu?function(a,l,c){const m=a.value.clone(),p=IE(a.fieldTransforms,l,c.transformResults);m.setAll(p),l.convertToFoundDocument(c.version,m).setHasCommittedMutations()}(i,e,t):i instanceof bs?function(a,l,c){if(!zh(a.precondition,l))return void l.convertToUnknownDocument(c.version);const m=IE(a.fieldTransforms,l,c.transformResults),p=l.data;p.setAll(XA(a)),p.setAll(m),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()}(i,e,t):function(a,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,t)}function vu(i,e,t,r){return i instanceof Hu?function(l,c,m,p){if(!zh(l.precondition,c))return m;const g=l.value.clone(),v=RE(l.fieldTransforms,p,c);return g.setAll(v),c.convertToFoundDocument(c.version,g).setHasLocalMutations(),null}(i,e,t,r):i instanceof bs?function(l,c,m,p){if(!zh(l.precondition,c))return m;const g=RE(l.fieldTransforms,p,c),v=c.data;return v.setAll(XA(l)),v.setAll(g),c.convertToFoundDocument(c.version,v).setHasLocalMutations(),m===null?null:m.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(E=>E.field))}(i,e,t,r):function(l,c,m){return zh(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):m}(i,e,t)}function gD(i,e){let t=null;for(const r of i.fieldTransforms){const a=e.data.field(r.field),l=GA(r.transform,a||null);l!=null&&(t===null&&(t=mn.empty()),t.set(r.field,l))}return t||null}function wE(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!function(r,a){return r===void 0&&a===void 0||!(!r||!a)&&Oo(r,a,(l,c)=>dD(l,c))}(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class Hu extends Uf{constructor(e,t,r,a=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class bs extends Uf{constructor(e,t,r,a,l=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function XA(i){const e=new Map;return i.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=i.data.field(t);e.set(t,r)}}),e}function IE(i,e,t){const r=new Map;Ke(i.length===t.length,32656,{Ve:t.length,me:i.length});for(let a=0;a<t.length;a++){const l=i[a],c=l.transform,m=e.data.field(l.field);r.set(l.field,fD(c,m,t[a]))}return r}function RE(i,e,t){const r=new Map;for(const a of i){const l=a.transform,c=t.data.field(a.field);r.set(a.field,hD(l,c,e))}return r}class WA extends Uf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class yD extends Uf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vD{constructor(e,t,r,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=a}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&pD(l,e,r[a])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=vu(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=vu(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=qA();return this.mutations.forEach(a=>{const l=e.get(a.key),c=l.overlayedDocument;let m=this.applyToLocalView(c,l.mutatedFields);m=t.has(a.key)?null:m;const p=QA(c,m);p!==null&&r.set(a.key,p),c.isValidDocument()||c.convertToNoDocument(Ie.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Ue())}isEqual(e){return this.batchId===e.batchId&&Oo(this.mutations,e.mutations,(t,r)=>wE(t,r))&&Oo(this.baseMutations,e.baseMutations,(t,r)=>wE(t,r))}}class hy{constructor(e,t,r,a){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=a}static from(e,t,r){Ke(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let a=function(){return aD}();const l=e.mutations;for(let c=0;c<l.length;c++)a=a.insert(l[c].key,r[c].version);return new hy(e,t,r,a)}}/**
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
 */var St,Fe;function ED(i){switch(i){case ie.OK:return Te(64938);case ie.CANCELLED:case ie.UNKNOWN:case ie.DEADLINE_EXCEEDED:case ie.RESOURCE_EXHAUSTED:case ie.INTERNAL:case ie.UNAVAILABLE:case ie.UNAUTHENTICATED:return!1;case ie.INVALID_ARGUMENT:case ie.NOT_FOUND:case ie.ALREADY_EXISTS:case ie.PERMISSION_DENIED:case ie.FAILED_PRECONDITION:case ie.ABORTED:case ie.OUT_OF_RANGE:case ie.UNIMPLEMENTED:case ie.DATA_LOSS:return!0;default:return Te(15467,{code:i})}}function JA(i){if(i===void 0)return ur("GRPC error has no .code"),ie.UNKNOWN;switch(i){case St.OK:return ie.OK;case St.CANCELLED:return ie.CANCELLED;case St.UNKNOWN:return ie.UNKNOWN;case St.DEADLINE_EXCEEDED:return ie.DEADLINE_EXCEEDED;case St.RESOURCE_EXHAUSTED:return ie.RESOURCE_EXHAUSTED;case St.INTERNAL:return ie.INTERNAL;case St.UNAVAILABLE:return ie.UNAVAILABLE;case St.UNAUTHENTICATED:return ie.UNAUTHENTICATED;case St.INVALID_ARGUMENT:return ie.INVALID_ARGUMENT;case St.NOT_FOUND:return ie.NOT_FOUND;case St.ALREADY_EXISTS:return ie.ALREADY_EXISTS;case St.PERMISSION_DENIED:return ie.PERMISSION_DENIED;case St.FAILED_PRECONDITION:return ie.FAILED_PRECONDITION;case St.ABORTED:return ie.ABORTED;case St.OUT_OF_RANGE:return ie.OUT_OF_RANGE;case St.UNIMPLEMENTED:return ie.UNIMPLEMENTED;case St.DATA_LOSS:return ie.DATA_LOSS;default:return Te(39323,{code:i})}}(Fe=St||(St={}))[Fe.OK=0]="OK",Fe[Fe.CANCELLED=1]="CANCELLED",Fe[Fe.UNKNOWN=2]="UNKNOWN",Fe[Fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Fe[Fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Fe[Fe.NOT_FOUND=5]="NOT_FOUND",Fe[Fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Fe[Fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Fe[Fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Fe[Fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Fe[Fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Fe[Fe.ABORTED=10]="ABORTED",Fe[Fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Fe[Fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Fe[Fe.INTERNAL=13]="INTERNAL",Fe[Fe.UNAVAILABLE=14]="UNAVAILABLE",Fe[Fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const TD=new is([4294967295,4294967295],0);function CE(i){const e=EA().encode(i),t=new dA;return t.update(e),new Uint8Array(t.digest())}function xE(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new is([t,r],0),new is([a,l],0)]}class fy{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new cu(`Invalid padding: ${t}`);if(r<0)throw new cu(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new cu(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new cu(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=is.fromNumber(this.pe)}we(e,t,r){let a=e.add(t.multiply(is.fromNumber(r)));return a.compare(TD)===1&&(a=new is([a.getBits(0),a.getBits(1)],0)),a.modulo(this.ye).toNumber()}Se(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=CE(e),[r,a]=xE(t);for(let l=0;l<this.hashCount;l++){const c=this.we(r,a,l);if(!this.Se(c))return!1}return!0}static create(e,t,r){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new fy(l,a,t);return r.forEach(m=>c.insert(m)),c}insert(e){if(this.pe===0)return;const t=CE(e),[r,a]=xE(t);for(let l=0;l<this.hashCount;l++){const c=this.we(r,a,l);this.be(c)}}be(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class cu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(e,t,r,a,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const a=new Map;return a.set(e,Gu.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new jf(Ie.min(),a,new ct(Oe),cr(),Ue())}}class Gu{constructor(e,t,r,a,l){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Gu(r,t,Ue(),Ue(),Ue())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(e,t,r,a){this.De=e,this.removedTargetIds=t,this.key=r,this.ve=a}}class ZA{constructor(e,t){this.targetId=e,this.Ce=t}}class eS{constructor(e,t,r=Xt.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=a}}class NE{constructor(){this.Fe=0,this.Me=OE(),this.xe=Xt.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=Ue(),t=Ue(),r=Ue();return this.Me.forEach((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:r=r.add(a);break;default:Te(38017,{changeType:l})}}),new Gu(this.xe,this.Oe,e,t,r)}Qe(){this.Ne=!1,this.Me=OE()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,Ke(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class AD{constructor(e){this.ze=e,this.je=new Map,this.He=cr(),this.Je=Rh(),this.Ye=Rh(),this.Ze=new ct(Oe)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const r=this.rt(t);switch(e.state){case 0:this.it(t)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(t);break;case 3:this.it(t)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),r.ke(e.resumeToken));break;default:Te(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((r,a)=>{this.it(a)&&t(a)})}ot(e){const t=e.targetId,r=e.Ce.count,a=this._t(t);if(a){const l=a.target;if(Zp(l))if(r===0){const c=new _e(l.path);this.tt(t,c,rn.newNoDocument(c,Ie.min()))}else Ke(r===1,20013,{expectedCount:r});else{const c=this.ut(t);if(c!==r){const m=this.ct(e),p=m?this.lt(m,e,c):1;if(p!==0){this.st(t);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,g)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:a=0},hashCount:l=0}=t;let c,m;try{c=us(r).toUint8Array()}catch(p){if(p instanceof wA)return No("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{m=new fy(c,a,l)}catch(p){return No(p instanceof cu?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return m.pe===0?null:m}lt(e,t,r){return t.Ce.count===r-this.Tt(e,t.targetId)?0:2}Tt(e,t){const r=this.ze.getRemoteKeysForTarget(t);let a=0;return r.forEach(l=>{const c=this.ze.Pt(),m=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(m)||(this.tt(t,l,null),a++)}),a}It(e){const t=new Map;this.je.forEach((l,c)=>{const m=this._t(c);if(m){if(l.current&&Zp(m.target)){const p=new _e(m.target.path);this.Et(p).has(c)||this.dt(c,p)||this.tt(c,p,rn.newNoDocument(p,e))}l.Le&&(t.set(c,l.qe()),l.Qe())}});let r=Ue();this.Ye.forEach((l,c)=>{let m=!0;c.forEachWhile(p=>{const g=this._t(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(r=r.add(l))}),this.He.forEach((l,c)=>c.setReadTime(e));const a=new jf(e,t,this.Ze,this.He,r);return this.He=cr(),this.Je=Rh(),this.Ye=Rh(),this.Ze=new ct(Oe),a}et(e,t){if(!this.it(e))return;const r=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,r),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,r){if(!this.it(e))return;const a=this.rt(e);this.dt(e,t)?a.$e(t,1):a.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),r&&(this.He=this.He.insert(t,r))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new NE,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new kt(Oe),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new kt(Oe),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||he("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new NE),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function Rh(){return new ct(_e.comparator)}function OE(){return new ct(_e.comparator)}const SD={asc:"ASCENDING",desc:"DESCENDING"},wD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ID={and:"AND",or:"OR"};class RD{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function tg(i,e){return i.useProto3Json||Df(e)?e:{value:e}}function uf(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function tS(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function CD(i,e){return uf(i,e.toTimestamp())}function Ei(i){return Ke(!!i,49232),Ie.fromTimestamp(function(t){const r=ls(t);return new It(r.seconds,r.nanos)}(i))}function dy(i,e){return ng(i,e).canonicalString()}function ng(i,e){const t=function(a){return new lt(["projects",a.projectId,"databases",a.database])}(i).child("documents");return e===void 0?t:t.child(e)}function nS(i){const e=lt.fromString(i);return Ke(oS(e),10190,{key:e.toString()}),e}function ig(i,e){return dy(i.databaseId,e.path)}function yp(i,e){const t=nS(e);if(t.get(1)!==i.databaseId.projectId)throw new ge(ie.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new ge(ie.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new _e(rS(t))}function iS(i,e){return dy(i.databaseId,e)}function xD(i){const e=nS(i);return e.length===4?lt.emptyPath():rS(e)}function rg(i){return new lt(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function rS(i){return Ke(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function DE(i,e,t){return{name:ig(i,e),fields:t.value.mapValue.fields}}function ND(i,e){let t;if("targetChange"in e){e.targetChange;const r=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:Te(39313,{state:g})}(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=function(g,v){return g.useProto3Json?(Ke(v===void 0||typeof v=="string",58123),Xt.fromBase64String(v||"")):(Ke(v===void 0||v instanceof Buffer||v instanceof Uint8Array,16193),Xt.fromUint8Array(v||new Uint8Array))}(i,e.targetChange.resumeToken),c=e.targetChange.cause,m=c&&function(g){const v=g.code===void 0?ie.UNKNOWN:JA(g.code);return new ge(v,g.message||"")}(c);t=new eS(r,a,l,m||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const a=yp(i,r.document.name),l=Ei(r.document.updateTime),c=r.document.createTime?Ei(r.document.createTime):Ie.min(),m=new mn({mapValue:{fields:r.document.fields}}),p=rn.newFoundDocument(a,l,c,m),g=r.targetIds||[],v=r.removedTargetIds||[];t=new Bh(g,v,p.key,p)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const a=yp(i,r.document),l=r.readTime?Ei(r.readTime):Ie.min(),c=rn.newNoDocument(a,l),m=r.removedTargetIds||[];t=new Bh([],m,c.key,c)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const a=yp(i,r.document),l=r.removedTargetIds||[];t=new Bh([],l,a,null)}else{if(!("filter"in e))return Te(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:a=0,unchangedNames:l}=r,c=new bD(a,l),m=r.targetId;t=new ZA(m,c)}}return t}function OD(i,e){let t;if(e instanceof Hu)t={update:DE(i,e.key,e.value)};else if(e instanceof WA)t={delete:ig(i,e.key)};else if(e instanceof bs)t={update:DE(i,e.key,e.data),updateMask:zD(e.fieldMask)};else{if(!(e instanceof yD))return Te(16599,{ft:e.type});t={verify:ig(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(l,c){const m=c.transform;if(m instanceof of)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Du)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Pu)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof lf)return{fieldPath:c.field.canonicalString(),increment:m.Re};throw Te(20930,{transform:c.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(a,l){return l.updateTime!==void 0?{updateTime:CD(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Te(27497)}(i,e.precondition)),t}function DD(i,e){return i&&i.length>0?(Ke(e!==void 0,14353),i.map(t=>function(a,l){let c=a.updateTime?Ei(a.updateTime):Ei(l);return c.isEqual(Ie.min())&&(c=Ei(l)),new mD(c,a.transformResults||[])}(t,e))):[]}function PD(i,e){return{documents:[iS(i,e.path)]}}function kD(i,e){const t={structuredQuery:{}},r=e.path;let a;e.collectionGroup!==null?(a=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=iS(i,a);const l=function(g){if(g.length!==0)return aS(Si.create(g,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const c=function(g){if(g.length!==0)return g.map(v=>function(S){return{field:_o(S.field),direction:LD(S.dir)}}(v))}(e.orderBy);c&&(t.structuredQuery.orderBy=c);const m=tg(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(e.endAt)),{gt:t,parent:a}}function MD(i){let e=xD(i.parent);const t=i.structuredQuery,r=t.from?t.from.length:0;let a=null;if(r>0){Ke(r===1,65062);const v=t.from[0];v.allDescendants?a=v.collectionId:e=e.child(v.collectionId)}let l=[];t.where&&(l=function(E){const S=sS(E);return S instanceof Si&&MA(S)?S.getFilters():[S]}(t.where));let c=[];t.orderBy&&(c=function(E){return E.map(S=>function(F){return new af(bo(F.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(F.direction))}(S))}(t.orderBy));let m=null;t.limit&&(m=function(E){let S;return S=typeof E=="object"?E.value:E,Df(S)?null:S}(t.limit));let p=null;t.startAt&&(p=function(E){const S=!!E.before,U=E.values||[];return new sf(U,S)}(t.startAt));let g=null;return t.endAt&&(g=function(E){const S=!E.before,U=E.values||[];return new sf(U,S)}(t.endAt)),eD(e,a,c,l,m,"F",p,g)}function VD(i,e){const t=function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Te(28987,{purpose:a})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function sS(i){return i.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=bo(t.unaryFilter.field);return Pt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const a=bo(t.unaryFilter.field);return Pt.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=bo(t.unaryFilter.field);return Pt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=bo(t.unaryFilter.field);return Pt.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Te(61313);default:return Te(60726)}}(i):i.fieldFilter!==void 0?function(t){return Pt.create(bo(t.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Te(58110);default:return Te(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(t){return Si.create(t.compositeFilter.filters.map(r=>sS(r)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return Te(1026)}}(t.compositeFilter.op))}(i):Te(30097,{filter:i})}function LD(i){return SD[i]}function UD(i){return wD[i]}function jD(i){return ID[i]}function _o(i){return{fieldPath:i.canonicalString()}}function bo(i){return Qt.fromServerFormat(i.fieldPath)}function aS(i){return i instanceof Pt?function(t){if(t.op==="=="){if(_E(t.value))return{unaryFilter:{field:_o(t.field),op:"IS_NAN"}};if(vE(t.value))return{unaryFilter:{field:_o(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(_E(t.value))return{unaryFilter:{field:_o(t.field),op:"IS_NOT_NAN"}};if(vE(t.value))return{unaryFilter:{field:_o(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_o(t.field),op:UD(t.op),value:t.value}}}(i):i instanceof Si?function(t){const r=t.getFilters().map(a=>aS(a));return r.length===1?r[0]:{compositeFilter:{op:jD(t.op),filters:r}}}(i):Te(54877,{filter:i})}function zD(i){const e=[];return i.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function oS(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class BD{constructor(e){this.wt=e}}function FD(i){const e=MD({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?eg(e,e.limit,"L"):e}/**
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
 */class qD{constructor(){this.Cn=new HD}addToCollectionParentIndex(e,t){return this.Cn.add(t),ee.resolve()}getCollectionParents(e,t){return ee.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return ee.resolve()}deleteFieldIndex(e,t){return ee.resolve()}deleteAllFieldIndexes(e){return ee.resolve()}createTargetIndexes(e,t){return ee.resolve()}getDocumentsMatchingTarget(e,t){return ee.resolve(null)}getIndexType(e,t){return ee.resolve(0)}getFieldIndexes(e,t){return ee.resolve([])}getNextCollectionGroupToUpdate(e){return ee.resolve(null)}getMinOffset(e,t){return ee.resolve(os.min())}getMinOffsetFromCollectionGroup(e,t){return ee.resolve(os.min())}updateCollectionGroup(e,t,r){return ee.resolve()}updateIndexEntries(e,t){return ee.resolve()}}class HD{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),a=this.index[t]||new kt(lt.comparator),l=!a.has(r);return this.index[t]=a.add(r),l}has(e){const t=e.lastSegment(),r=e.popLast(),a=this.index[t];return a&&a.has(r)}getEntries(e){return(this.index[e]||new kt(lt.comparator)).toArray()}}/**
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
 */const PE={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},lS=41943040;class dn{static withCacheSize(e){return new dn(e,dn.DEFAULT_COLLECTION_PERCENTILE,dn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ko{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new ko(0)}static lr(){return new ko(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kE="LruGarbageCollector",GD=1048576;function ME([i,e],[t,r]){const a=Oe(i,t);return a===0?Oe(e,r):a}class $D{constructor(e){this.Er=e,this.buffer=new kt(ME),this.dr=0}Ar(){return++this.dr}Rr(e){const t=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();ME(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class KD{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){he(kE,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){$o(t)?he(kE,"Ignoring IndexedDB error during garbage collection: ",t):await Go(t)}await this.mr(3e5)})}}class YD{constructor(e,t){this.gr=e,this.params=t}calculateTargetCount(e,t){return this.gr.pr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return ee.resolve(Of.le);const r=new $D(t);return this.gr.forEachTarget(e,a=>r.Rr(a.sequenceNumber)).next(()=>this.gr.yr(e,a=>r.Rr(a))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.gr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.gr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(he("LruGarbageCollector","Garbage collection skipped; disabled"),ee.resolve(PE)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(he("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),PE):this.wr(e,t))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,t){let r,a,l,c,m,p,g;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(E=>(E>this.params.maximumSequenceNumbersToCollect?(he("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),a=this.params.maximumSequenceNumbersToCollect):a=E,c=Date.now(),this.nthSequenceNumber(e,a))).next(E=>(r=E,m=Date.now(),this.removeTargets(e,r,t))).next(E=>(l=E,p=Date.now(),this.removeOrphanedDocuments(e,r))).next(E=>(g=Date.now(),yo()<=ke.DEBUG&&he("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-v}ms
	Determined least recently used ${a} in `+(m-c)+`ms
	Removed ${l} targets in `+(p-m)+`ms
	Removed ${E} documents in `+(g-p)+`ms
Total Duration: ${g-v}ms`),ee.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:E})))}}function QD(i,e){return new YD(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XD{constructor(){this.changes=new ga(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,rn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?ee.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class JD{constructor(e,t,r,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=a}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(a=>(r=a,this.remoteDocumentCache.getEntry(e,t))).next(a=>(r!==null&&vu(r.mutation,a,wn.empty(),It.now()),a))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Ue()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Ue()){const a=aa();return this.populateOverlays(e,a,t).next(()=>this.computeViews(e,t,a,r).next(l=>{let c=uu();return l.forEach((m,p)=>{c=c.insert(m,p.overlayedDocument)}),c}))}getOverlayedDocuments(e,t){const r=aa();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Ue()))}populateOverlays(e,t,r){const a=[];return r.forEach(l=>{t.has(l)||a.push(l)}),this.documentOverlayCache.getOverlays(e,a).next(l=>{l.forEach((c,m)=>{t.set(c,m)})})}computeViews(e,t,r,a){let l=cr();const c=yu(),m=function(){return yu()}();return t.forEach((p,g)=>{const v=r.get(g.key);a.has(g.key)&&(v===void 0||v.mutation instanceof bs)?l=l.insert(g.key,g):v!==void 0?(c.set(g.key,v.mutation.getFieldMask()),vu(v.mutation,g,v.mutation.getFieldMask(),It.now())):c.set(g.key,wn.empty())}),this.recalculateAndSaveOverlays(e,l).next(p=>(p.forEach((g,v)=>c.set(g,v)),t.forEach((g,v)=>{var E;return m.set(g,new WD(v,(E=c.get(g))!==null&&E!==void 0?E:null))}),m))}recalculateAndSaveOverlays(e,t){const r=yu();let a=new ct((c,m)=>c-m),l=Ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(c=>{for(const m of c)m.keys().forEach(p=>{const g=t.get(p);if(g===null)return;let v=r.get(p)||wn.empty();v=m.applyToLocalView(g,v),r.set(p,v);const E=(a.get(m.batchId)||Ue()).add(p);a=a.insert(m.batchId,E)})}).next(()=>{const c=[],m=a.getReverseIterator();for(;m.hasNext();){const p=m.getNext(),g=p.key,v=p.value,E=qA();v.forEach(S=>{if(!l.has(S)){const U=QA(t.get(S),r.get(S));U!==null&&E.set(S,U),l=l.add(S)}}),c.push(this.documentOverlayCache.saveOverlays(e,g,E))}return ee.waitFor(c)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,a){return function(c){return _e.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):tD(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,a):this.getDocumentsMatchingCollectionQuery(e,t,r,a)}getNextDocuments(e,t,r,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,a).next(l=>{const c=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,a-l.size):ee.resolve(aa());let m=Cu,p=l;return c.next(g=>ee.forEach(g,(v,E)=>(m<E.largestBatchId&&(m=E.largestBatchId),l.get(v)?ee.resolve():this.remoteDocumentCache.getEntry(e,v).next(S=>{p=p.insert(v,S)}))).next(()=>this.populateOverlays(e,g,l)).next(()=>this.computeViews(e,p,g,Ue())).next(v=>({batchId:m,changes:FA(v)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new _e(t)).next(r=>{let a=uu();return r.isFoundDocument()&&(a=a.insert(r.key,r)),a})}getDocumentsMatchingCollectionGroupQuery(e,t,r,a){const l=t.collectionGroup;let c=uu();return this.indexManager.getCollectionParents(e,l).next(m=>ee.forEach(m,p=>{const g=function(E,S){return new kf(S,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)}(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,g,r,a).next(v=>{v.forEach((E,S)=>{c=c.insert(E,S)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,t,r,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,l,a))).next(c=>{l.forEach((p,g)=>{const v=g.getKey();c.get(v)===null&&(c=c.insert(v,rn.newInvalidDocument(v)))});let m=uu();return c.forEach((p,g)=>{const v=l.get(p);v!==void 0&&vu(v.mutation,g,wn.empty(),It.now()),Vf(t,g)&&(m=m.insert(p,g))}),m})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZD{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,t){return ee.resolve(this.kr.get(t))}saveBundleMetadata(e,t){return this.kr.set(t.id,function(a){return{id:a.id,version:a.version,createTime:Ei(a.createTime)}}(t)),ee.resolve()}getNamedQuery(e,t){return ee.resolve(this.qr.get(t))}saveNamedQuery(e,t){return this.qr.set(t.name,function(a){return{name:a.name,query:FD(a.bundledQuery),readTime:Ei(a.readTime)}}(t)),ee.resolve()}}/**
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
 */class eP{constructor(){this.overlays=new ct(_e.comparator),this.Qr=new Map}getOverlay(e,t){return ee.resolve(this.overlays.get(t))}getOverlays(e,t){const r=aa();return ee.forEach(t,a=>this.getOverlay(e,a).next(l=>{l!==null&&r.set(a,l)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((a,l)=>{this.bt(e,t,l)}),ee.resolve()}removeOverlaysForBatchId(e,t,r){const a=this.Qr.get(r);return a!==void 0&&(a.forEach(l=>this.overlays=this.overlays.remove(l)),this.Qr.delete(r)),ee.resolve()}getOverlaysForCollection(e,t,r){const a=aa(),l=t.length+1,c=new _e(t.child("")),m=this.overlays.getIteratorFrom(c);for(;m.hasNext();){const p=m.getNext().value,g=p.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===l&&p.largestBatchId>r&&a.set(p.getKey(),p)}return ee.resolve(a)}getOverlaysForCollectionGroup(e,t,r,a){let l=new ct((g,v)=>g-v);const c=this.overlays.getIterator();for(;c.hasNext();){const g=c.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>r){let v=l.get(g.largestBatchId);v===null&&(v=aa(),l=l.insert(g.largestBatchId,v)),v.set(g.getKey(),g)}}const m=aa(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((g,v)=>m.set(g,v)),!(m.size()>=a)););return ee.resolve(m)}bt(e,t,r){const a=this.overlays.get(r.key);if(a!==null){const c=this.Qr.get(a.largestBatchId).delete(r.key);this.Qr.set(a.largestBatchId,c)}this.overlays=this.overlays.insert(r.key,new _D(t,r));let l=this.Qr.get(t);l===void 0&&(l=Ue(),this.Qr.set(t,l)),this.Qr.set(t,l.add(r.key))}}/**
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
 */class tP{constructor(){this.sessionToken=Xt.EMPTY_BYTE_STRING}getSessionToken(e){return ee.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,ee.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(){this.$r=new kt(Bt.Ur),this.Kr=new kt(Bt.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,t){const r=new Bt(e,t);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.zr(new Bt(e,t))}jr(e,t){e.forEach(r=>this.removeReference(r,t))}Hr(e){const t=new _e(new lt([])),r=new Bt(t,e),a=new Bt(t,e+1),l=[];return this.Kr.forEachInRange([r,a],c=>{this.zr(c),l.push(c.key)}),l}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const t=new _e(new lt([])),r=new Bt(t,e),a=new Bt(t,e+1);let l=Ue();return this.Kr.forEachInRange([r,a],c=>{l=l.add(c.key)}),l}containsKey(e){const t=new Bt(e,0),r=this.$r.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Bt{constructor(e,t){this.key=e,this.Zr=t}static Ur(e,t){return _e.comparator(e.key,t.key)||Oe(e.Zr,t.Zr)}static Wr(e,t){return Oe(e.Zr,t.Zr)||_e.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.nr=1,this.Xr=new kt(Bt.Ur)}checkEmpty(e){return ee.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,a){const l=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new vD(l,t,r,a);this.mutationQueue.push(c);for(const m of a)this.Xr=this.Xr.add(new Bt(m.key,l)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return ee.resolve(c)}lookupMutationBatch(e,t){return ee.resolve(this.ei(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,a=this.ti(r),l=a<0?0:a;return ee.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return ee.resolve(this.mutationQueue.length===0?ry:this.nr-1)}getAllMutationBatches(e){return ee.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Bt(t,0),a=new Bt(t,Number.POSITIVE_INFINITY),l=[];return this.Xr.forEachInRange([r,a],c=>{const m=this.ei(c.Zr);l.push(m)}),ee.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new kt(Oe);return t.forEach(a=>{const l=new Bt(a,0),c=new Bt(a,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([l,c],m=>{r=r.add(m.Zr)})}),ee.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,a=r.length+1;let l=r;_e.isDocumentKey(l)||(l=l.child(""));const c=new Bt(new _e(l),0);let m=new kt(Oe);return this.Xr.forEachWhile(p=>{const g=p.key.path;return!!r.isPrefixOf(g)&&(g.length===a&&(m=m.add(p.Zr)),!0)},c),ee.resolve(this.ni(m))}ni(e){const t=[];return e.forEach(r=>{const a=this.ei(r);a!==null&&t.push(a)}),t}removeMutationBatch(e,t){Ke(this.ri(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return ee.forEach(t.mutations,a=>{const l=new Bt(a.key,t.batchId);return r=r.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.Xr=r})}sr(e){}containsKey(e,t){const r=new Bt(t,0),a=this.Xr.firstAfterOrEqual(r);return ee.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,ee.resolve()}ri(e,t){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const t=this.ti(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(e){this.ii=e,this.docs=function(){return new ct(_e.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,a=this.docs.get(r),l=a?a.size:0,c=this.ii(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return ee.resolve(r?r.document.mutableCopy():rn.newInvalidDocument(t))}getEntries(e,t){let r=cr();return t.forEach(a=>{const l=this.docs.get(a);r=r.insert(a,l?l.document.mutableCopy():rn.newInvalidDocument(a))}),ee.resolve(r)}getDocumentsMatchingQuery(e,t,r,a){let l=cr();const c=t.path,m=new _e(c.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(m);for(;p.hasNext();){const{key:g,value:{document:v}}=p.getNext();if(!c.isPrefixOf(g.path))break;g.path.length>c.length+1||DO(OO(v),r)<=0||(a.has(v.key)||Vf(t,v))&&(l=l.insert(v.key,v.mutableCopy()))}return ee.resolve(l)}getAllFromCollectionGroup(e,t,r,a){Te(9500)}si(e,t){return ee.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new rP(this)}getSize(e){return ee.resolve(this.size)}}class rP extends XD{constructor(e){super(),this.Br=e}applyChanges(e){const t=[];return this.changes.forEach((r,a)=>{a.isValidDocument()?t.push(this.Br.addEntry(e,a)):this.Br.removeEntry(r)}),ee.waitFor(t)}getFromCache(e,t){return this.Br.getEntry(e,t)}getAllFromCache(e,t){return this.Br.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(e){this.persistence=e,this.oi=new ga(t=>oy(t),ly),this.lastRemoteSnapshotVersion=Ie.min(),this.highestTargetId=0,this._i=0,this.ai=new my,this.targetCount=0,this.ui=ko.cr()}forEachTarget(e,t){return this.oi.forEach((r,a)=>t(a)),ee.resolve()}getLastRemoteSnapshotVersion(e){return ee.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ee.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),ee.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this._i&&(this._i=t),ee.resolve()}Tr(e){this.oi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ui=new ko(t),this.highestTargetId=t),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,t){return this.Tr(t),this.targetCount+=1,ee.resolve()}updateTargetData(e,t){return this.Tr(t),ee.resolve()}removeTargetData(e,t){return this.oi.delete(t.target),this.ai.Hr(t.targetId),this.targetCount-=1,ee.resolve()}removeTargets(e,t,r){let a=0;const l=[];return this.oi.forEach((c,m)=>{m.sequenceNumber<=t&&r.get(m.targetId)===null&&(this.oi.delete(c),l.push(this.removeMatchingKeysForTargetId(e,m.targetId)),a++)}),ee.waitFor(l).next(()=>a)}getTargetCount(e){return ee.resolve(this.targetCount)}getTargetData(e,t){const r=this.oi.get(t)||null;return ee.resolve(r)}addMatchingKeys(e,t,r){return this.ai.Gr(t,r),ee.resolve()}removeMatchingKeys(e,t,r){this.ai.jr(t,r);const a=this.persistence.referenceDelegate,l=[];return a&&t.forEach(c=>{l.push(a.markPotentiallyOrphaned(e,c))}),ee.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.ai.Hr(t),ee.resolve()}getMatchingKeysForTargetId(e,t){const r=this.ai.Yr(t);return ee.resolve(r)}containsKey(e,t){return ee.resolve(this.ai.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{constructor(e,t){this.ci={},this.overlays={},this.li=new Of(0),this.hi=!1,this.hi=!0,this.Pi=new tP,this.referenceDelegate=e(this),this.Ti=new sP(this),this.indexManager=new qD,this.remoteDocumentCache=function(a){return new iP(a)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new BD(t),this.Ei=new ZD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new eP,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ci[e.toKey()];return r||(r=new nP(t,this.referenceDelegate),this.ci[e.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,t,r){he("MemoryPersistence","Starting transaction:",e);const a=new aP(this.li.next());return this.referenceDelegate.di(),r(a).next(l=>this.referenceDelegate.Ai(a).next(()=>l)).toPromise().then(l=>(a.raiseOnCommittedEvent(),l))}Ri(e,t){return ee.or(Object.values(this.ci).map(r=>()=>r.containsKey(e,t)))}}class aP extends kO{constructor(e){super(),this.currentSequenceNumber=e}}class py{constructor(e){this.persistence=e,this.Vi=new my,this.mi=null}static fi(e){return new py(e)}get gi(){if(this.mi)return this.mi;throw Te(60996)}addReference(e,t,r){return this.Vi.addReference(r,t),this.gi.delete(r.toString()),ee.resolve()}removeReference(e,t,r){return this.Vi.removeReference(r,t),this.gi.add(r.toString()),ee.resolve()}markPotentiallyOrphaned(e,t){return this.gi.add(t.toString()),ee.resolve()}removeTarget(e,t){this.Vi.Hr(t.targetId).forEach(a=>this.gi.add(a.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(a=>{a.forEach(l=>this.gi.add(l.toString()))}).next(()=>r.removeTargetData(e,t))}di(){this.mi=new Set}Ai(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ee.forEach(this.gi,r=>{const a=_e.fromPath(r);return this.pi(e,a).next(l=>{l||t.removeEntry(a,Ie.min())})}).next(()=>(this.mi=null,t.apply(e)))}updateLimboDocument(e,t){return this.pi(e,t).next(r=>{r?this.gi.delete(t.toString()):this.gi.add(t.toString())})}Ii(e){return 0}pi(e,t){return ee.or([()=>ee.resolve(this.Vi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ri(e,t)])}}class cf{constructor(e,t){this.persistence=e,this.yi=new ga(r=>LO(r.path),(r,a)=>r.isEqual(a)),this.garbageCollector=QD(this,t)}static fi(e,t){return new cf(e,t)}di(){}Ai(e){return ee.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}pr(e){const t=this.Sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(a=>r+a))}Sr(e){let t=0;return this.yr(e,r=>{t++}).next(()=>t)}yr(e,t){return ee.forEach(this.yi,(r,a)=>this.Dr(e,r,a).next(l=>l?ee.resolve():t(a)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.si(e,c=>this.Dr(e,c,t).next(m=>{m||(r++,l.removeEntry(c,Ie.min()))})).next(()=>l.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.yi.set(t,e.currentSequenceNumber),ee.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.yi.set(r,e.currentSequenceNumber),ee.resolve()}removeReference(e,t,r){return this.yi.set(r,e.currentSequenceNumber),ee.resolve()}updateLimboDocument(e,t){return this.yi.set(t,e.currentSequenceNumber),ee.resolve()}Ii(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Uh(e.data.value)),t}Dr(e,t,r){return ee.or([()=>this.persistence.Ri(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.yi.get(t);return ee.resolve(a!==void 0&&a>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(e,t,r,a){this.targetId=e,this.fromCache=t,this.ds=r,this.As=a}static Rs(e,t){let r=Ue(),a=Ue();for(const l of t.docChanges)switch(l.type){case 0:r=r.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new gy(e,t.fromCache,r,a)}}/**
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
 */class lP{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return t2()?8:MO(tt())>0?6:4}()}initialize(e,t){this.ys=e,this.indexManager=t,this.Vs=!0}getDocumentsMatchingQuery(e,t,r,a){const l={result:null};return this.ws(e,t).next(c=>{l.result=c}).next(()=>{if(!l.result)return this.Ss(e,t,a,r).next(c=>{l.result=c})}).next(()=>{if(l.result)return;const c=new oP;return this.bs(e,t,c).next(m=>{if(l.result=m,this.fs)return this.Ds(e,t,c,m.size)})}).next(()=>l.result)}Ds(e,t,r,a){return r.documentReadCount<this.gs?(yo()<=ke.DEBUG&&he("QueryEngine","SDK will not create cache indexes for query:",vo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),ee.resolve()):(yo()<=ke.DEBUG&&he("QueryEngine","Query:",vo(t),"scans",r.documentReadCount,"local documents and returns",a,"documents as results."),r.documentReadCount>this.ps*a?(yo()<=ke.DEBUG&&he("QueryEngine","The SDK decides to create cache indexes for query:",vo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,bi(t))):ee.resolve())}ws(e,t){if(AE(t))return ee.resolve(null);let r=bi(t);return this.indexManager.getIndexType(e,r).next(a=>a===0?null:(t.limit!==null&&a===1&&(t=eg(t,null,"F"),r=bi(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(l=>{const c=Ue(...l);return this.ys.getDocuments(e,c).next(m=>this.indexManager.getMinOffset(e,r).next(p=>{const g=this.vs(t,m);return this.Cs(t,g,c,p.readTime)?this.ws(e,eg(t,null,"F")):this.Fs(e,g,t,p)}))})))}Ss(e,t,r,a){return AE(t)||a.isEqual(Ie.min())?ee.resolve(null):this.ys.getDocuments(e,r).next(l=>{const c=this.vs(t,l);return this.Cs(t,c,r,a)?ee.resolve(null):(yo()<=ke.DEBUG&&he("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),vo(t)),this.Fs(e,c,t,NO(a,Cu)).next(m=>m))})}vs(e,t){let r=new kt(zA(e));return t.forEach((a,l)=>{Vf(e,l)&&(r=r.add(l))}),r}Cs(e,t,r,a){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}bs(e,t,r){return yo()<=ke.DEBUG&&he("QueryEngine","Using full collection scan to execute query:",vo(t)),this.ys.getDocumentsMatchingQuery(e,t,os.min(),r)}Fs(e,t,r,a){return this.ys.getDocumentsMatchingQuery(e,r,a).next(l=>(t.forEach(c=>{l=l.insert(c.key,c)}),l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yy="LocalStore",uP=3e8;class cP{constructor(e,t,r,a){this.persistence=e,this.Ms=t,this.serializer=a,this.xs=new ct(Oe),this.Os=new ga(l=>oy(l),ly),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(r)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new JD(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.xs))}}function hP(i,e,t,r){return new cP(i,e,t,r)}async function cS(i,e){const t=Ce(i);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let a;return t.mutationQueue.getAllMutationBatches(r).next(l=>(a=l,t.Ls(e),t.mutationQueue.getAllMutationBatches(r))).next(l=>{const c=[],m=[];let p=Ue();for(const g of a){c.push(g.batchId);for(const v of g.mutations)p=p.add(v.key)}for(const g of l){m.push(g.batchId);for(const v of g.mutations)p=p.add(v.key)}return t.localDocuments.getDocuments(r,p).next(g=>({ks:g,removedBatchIds:c,addedBatchIds:m}))})})}function fP(i,e){const t=Ce(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const a=e.batch.keys(),l=t.Bs.newChangeBuffer({trackRemovals:!0});return function(m,p,g,v){const E=g.batch,S=E.keys();let U=ee.resolve();return S.forEach(F=>{U=U.next(()=>v.getEntry(p,F)).next(K=>{const V=g.docVersions.get(F);Ke(V!==null,48541),K.version.compareTo(V)<0&&(E.applyToRemoteDocument(K,g),K.isValidDocument()&&(K.setReadTime(g.commitVersion),v.addEntry(K)))})}),U.next(()=>m.mutationQueue.removeMutationBatch(p,E))}(t,r,e,l).next(()=>l.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,a,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(m){let p=Ue();for(let g=0;g<m.mutationResults.length;++g)m.mutationResults[g].transformResults.length>0&&(p=p.add(m.batch.mutations[g].key));return p}(e))).next(()=>t.localDocuments.getDocuments(r,a))})}function hS(i){const e=Ce(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ti.getLastRemoteSnapshotVersion(t))}function dP(i,e){const t=Ce(i),r=e.snapshotVersion;let a=t.xs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const c=t.Bs.newChangeBuffer({trackRemovals:!0});a=t.xs;const m=[];e.targetChanges.forEach((v,E)=>{const S=a.get(E);if(!S)return;m.push(t.Ti.removeMatchingKeys(l,v.removedDocuments,E).next(()=>t.Ti.addMatchingKeys(l,v.addedDocuments,E)));let U=S.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(E)!==null?U=U.withResumeToken(Xt.EMPTY_BYTE_STRING,Ie.min()).withLastLimboFreeSnapshotVersion(Ie.min()):v.resumeToken.approximateByteSize()>0&&(U=U.withResumeToken(v.resumeToken,r)),a=a.insert(E,U),function(K,V,G){return K.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-K.snapshotVersion.toMicroseconds()>=uP?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0}(S,U,v)&&m.push(t.Ti.updateTargetData(l,U))});let p=cr(),g=Ue();if(e.documentUpdates.forEach(v=>{e.resolvedLimboDocuments.has(v)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(l,v))}),m.push(mP(l,c,e.documentUpdates).next(v=>{p=v.qs,g=v.Qs})),!r.isEqual(Ie.min())){const v=t.Ti.getLastRemoteSnapshotVersion(l).next(E=>t.Ti.setTargetsMetadata(l,l.currentSequenceNumber,r));m.push(v)}return ee.waitFor(m).next(()=>c.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,p,g)).next(()=>p)}).then(l=>(t.xs=a,l))}function mP(i,e,t){let r=Ue(),a=Ue();return t.forEach(l=>r=r.add(l)),e.getEntries(i,r).next(l=>{let c=cr();return t.forEach((m,p)=>{const g=l.get(m);p.isFoundDocument()!==g.isFoundDocument()&&(a=a.add(m)),p.isNoDocument()&&p.version.isEqual(Ie.min())?(e.removeEntry(m,p.readTime),c=c.insert(m,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(p),c=c.insert(m,p)):he(yy,"Ignoring outdated watch update for ",m,". Current version:",g.version," Watch version:",p.version)}),{qs:c,Qs:a}})}function pP(i,e){const t=Ce(i);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=ry),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function gP(i,e){const t=Ce(i);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let a;return t.Ti.getTargetData(r,e).next(l=>l?(a=l,ee.resolve(a)):t.Ti.allocateTargetId(r).next(c=>(a=new Zr(e,c,"TargetPurposeListen",r.currentSequenceNumber),t.Ti.addTargetData(r,a).next(()=>a))))}).then(r=>{const a=t.xs.get(r.targetId);return(a===null||r.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.xs=t.xs.insert(r.targetId,r),t.Os.set(e,r.targetId)),r})}async function sg(i,e,t){const r=Ce(i),a=r.xs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",l,c=>r.persistence.referenceDelegate.removeTarget(c,a))}catch(c){if(!$o(c))throw c;he(yy,`Failed to update sequence numbers for target ${e}: ${c}`)}r.xs=r.xs.remove(e),r.Os.delete(a.target)}function VE(i,e,t){const r=Ce(i);let a=Ie.min(),l=Ue();return r.persistence.runTransaction("Execute query","readwrite",c=>function(p,g,v){const E=Ce(p),S=E.Os.get(v);return S!==void 0?ee.resolve(E.xs.get(S)):E.Ti.getTargetData(g,v)}(r,c,bi(e)).next(m=>{if(m)return a=m.lastLimboFreeSnapshotVersion,r.Ti.getMatchingKeysForTargetId(c,m.targetId).next(p=>{l=p})}).next(()=>r.Ms.getDocumentsMatchingQuery(c,e,t?a:Ie.min(),t?l:Ue())).next(m=>(yP(r,iD(e),m),{documents:m,$s:l})))}function yP(i,e,t){let r=i.Ns.get(e)||Ie.min();t.forEach((a,l)=>{l.readTime.compareTo(r)>0&&(r=l.readTime)}),i.Ns.set(e,r)}class LE{constructor(){this.activeTargetIds=uD()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class vP{constructor(){this.xo=new LE,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,t,r){this.Oo[e]=t}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new LE,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */const UE="ConnectivityMonitor";class jE{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){he(UE,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){he(UE,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ch=null;function ag(){return Ch===null?Ch=function(){return 268435456+Math.round(2147483648*Math.random())}():Ch++,"0x"+Ch.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vp="RestConnection",bP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class EP{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Wo=`projects/${r}/databases/${a}`,this.Go=this.databaseId.database===nf?`project_id=${r}`:`project_id=${r}&database_id=${a}`}zo(e,t,r,a,l){const c=ag(),m=this.jo(e,t.toUriEncodedString());he(vp,`Sending RPC '${e}' ${c}:`,m,r);const p={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(p,a,l);const{host:g}=new URL(m),v=Bo(g);return this.Jo(e,m,p,r,v).then(E=>(he(vp,`Received RPC '${e}' ${c}: `,E),E),E=>{throw No(vp,`RPC '${e}' ${c} failed with error: `,E,"url: ",m,"request:",r),E})}Yo(e,t,r,a,l,c){return this.zo(e,t,r,a,l)}Ho(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ho}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((a,l)=>e[l]=a),r&&r.headers.forEach((a,l)=>e[l]=a)}jo(e,t){const r=bP[e];return`${this.Ko}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const en="WebChannelConnection";class AP extends EP{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,a,l){const c=ag();return new Promise((m,p)=>{const g=new mA;g.setWithCredentials(!0),g.listenOnce(pA.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case Lh.NO_ERROR:const E=g.getResponseJson();he(en,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(E)),m(E);break;case Lh.TIMEOUT:he(en,`RPC '${e}' ${c} timed out`),p(new ge(ie.DEADLINE_EXCEEDED,"Request time out"));break;case Lh.HTTP_ERROR:const S=g.getStatus();if(he(en,`RPC '${e}' ${c} failed with status:`,S,"response text:",g.getResponseText()),S>0){let U=g.getResponseJson();Array.isArray(U)&&(U=U[0]);const F=U==null?void 0:U.error;if(F&&F.status&&F.message){const K=function(G){const X=G.toLowerCase().replace(/_/g,"-");return Object.values(ie).indexOf(X)>=0?X:ie.UNKNOWN}(F.status);p(new ge(K,F.message))}else p(new ge(ie.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new ge(ie.UNAVAILABLE,"Connection failed."));break;default:Te(9055,{l_:e,streamId:c,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{he(en,`RPC '${e}' ${c} completed.`)}});const v=JSON.stringify(a);he(en,`RPC '${e}' ${c} sending request:`,a),g.send(t,"POST",v,r,15)})}T_(e,t,r){const a=ag(),l=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=vA(),m=yA(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(p.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Ho(p.initMessageHeaders,t,r),p.encodeInitMessageHeaders=!0;const v=l.join("");he(en,`Creating RPC '${e}' stream ${a}: ${v}`,p);const E=c.createWebChannel(v,p);let S=!1,U=!1;const F=new TP({Zo:V=>{U?he(en,`Not sending because RPC '${e}' stream ${a} is closed:`,V):(S||(he(en,`Opening RPC '${e}' stream ${a} transport.`),E.open(),S=!0),he(en,`RPC '${e}' stream ${a} sending:`,V),E.send(V))},Xo:()=>E.close()}),K=(V,G,X)=>{V.listen(G,W=>{try{X(W)}catch(ce){setTimeout(()=>{throw ce},0)}})};return K(E,lu.EventType.OPEN,()=>{U||(he(en,`RPC '${e}' stream ${a} transport opened.`),F.__())}),K(E,lu.EventType.CLOSE,()=>{U||(U=!0,he(en,`RPC '${e}' stream ${a} transport closed`),F.u_())}),K(E,lu.EventType.ERROR,V=>{U||(U=!0,No(en,`RPC '${e}' stream ${a} transport errored. Name:`,V.name,"Message:",V.message),F.u_(new ge(ie.UNAVAILABLE,"The operation could not be completed")))}),K(E,lu.EventType.MESSAGE,V=>{var G;if(!U){const X=V.data[0];Ke(!!X,16349);const W=X,ce=(W==null?void 0:W.error)||((G=W[0])===null||G===void 0?void 0:G.error);if(ce){he(en,`RPC '${e}' stream ${a} received error:`,ce);const oe=ce.status;let de=function(R){const N=St[R];if(N!==void 0)return JA(N)}(oe),D=ce.message;de===void 0&&(de=ie.INTERNAL,D="Unknown error status: "+oe+" with message "+ce.message),U=!0,F.u_(new ge(de,D)),E.close()}else he(en,`RPC '${e}' stream ${a} received:`,X),F.c_(X)}}),K(m,gA.STAT_EVENT,V=>{V.stat===Yp.PROXY?he(en,`RPC '${e}' stream ${a} detected buffering proxy`):V.stat===Yp.NOPROXY&&he(en,`RPC '${e}' stream ${a} detected no buffering proxy`)}),setTimeout(()=>{F.a_()},0),F}}function _p(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zf(i){return new RD(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const zE="PersistentStream";class dS{constructor(e,t,r,a,l,c,m,p){this.xi=e,this.y_=r,this.w_=a,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=m,this.listener=p,this.state=0,this.S_=0,this.b_=null,this.D_=null,this.stream=null,this.v_=0,this.C_=new fS(e,t)}F_(){return this.state===1||this.state===5||this.M_()}M_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.x_()}async stop(){this.F_()&&await this.close(0)}O_(){this.state=0,this.C_.reset()}N_(){this.M_()&&this.b_===null&&(this.b_=this.xi.enqueueAfterDelay(this.y_,6e4,()=>this.B_()))}L_(e){this.k_(),this.stream.send(e)}async B_(){if(this.M_())return this.close(0)}k_(){this.b_&&(this.b_.cancel(),this.b_=null)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}async close(e,t){this.k_(),this.q_(),this.C_.cancel(),this.S_++,e!==4?this.C_.reset():t&&t.code===ie.RESOURCE_EXHAUSTED?(ur(t.toString()),ur("Using maximum backoff delay to prevent overloading the backend."),this.C_.m_()):t&&t.code===ie.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Q_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(t)}Q_(){}auth(){this.state=1;const e=this.U_(this.S_),t=this.S_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,a])=>{this.S_===t&&this.K_(r,a)},r=>{e(()=>{const a=new ge(ie.UNKNOWN,"Fetching auth token failed: "+r.message);return this.W_(a)})})}K_(e,t){const r=this.U_(this.S_);this.stream=this.G_(e,t),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.D_=this.xi.enqueueAfterDelay(this.w_,1e4,()=>(this.M_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(a=>{r(()=>this.W_(a))}),this.stream.onMessage(a=>{r(()=>++this.v_==1?this.z_(a):this.onNext(a))})}x_(){this.state=5,this.C_.f_(async()=>{this.state=0,this.start()})}W_(e){return he(zE,`close with error: ${e}`),this.stream=null,this.close(4,e)}U_(e){return t=>{this.xi.enqueueAndForget(()=>this.S_===e?t():(he(zE,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class SP extends dS{constructor(e,t,r,a,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,a,c),this.serializer=l}G_(e,t){return this.connection.T_("Listen",e,t)}z_(e){return this.onNext(e)}onNext(e){this.C_.reset();const t=ND(this.serializer,e),r=function(l){if(!("targetChange"in l))return Ie.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?Ie.min():c.readTime?Ei(c.readTime):Ie.min()}(e);return this.listener.j_(t,r)}H_(e){const t={};t.database=rg(this.serializer),t.addTarget=function(l,c){let m;const p=c.target;if(m=Zp(p)?{documents:PD(l,p)}:{query:kD(l,p).gt},m.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){m.resumeToken=tS(l,c.resumeToken);const g=tg(l,c.expectedCount);g!==null&&(m.expectedCount=g)}else if(c.snapshotVersion.compareTo(Ie.min())>0){m.readTime=uf(l,c.snapshotVersion.toTimestamp());const g=tg(l,c.expectedCount);g!==null&&(m.expectedCount=g)}return m}(this.serializer,e);const r=VD(this.serializer,e);r&&(t.labels=r),this.L_(t)}J_(e){const t={};t.database=rg(this.serializer),t.removeTarget=e,this.L_(t)}}class wP extends dS{constructor(e,t,r,a,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,a,c),this.serializer=l}get Y_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}Q_(){this.Y_&&this.Z_([])}G_(e,t){return this.connection.T_("Write",e,t)}z_(e){return Ke(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ke(!e.writeResults||e.writeResults.length===0,55816),this.listener.X_()}onNext(e){Ke(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.C_.reset();const t=DD(e.writeResults,e.commitTime),r=Ei(e.commitTime);return this.listener.ea(r,t)}ta(){const e={};e.database=rg(this.serializer),this.L_(e)}Z_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>OD(this.serializer,r))};this.L_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IP{}class RP extends IP{constructor(e,t,r,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=a,this.na=!1}ra(){if(this.na)throw new ge(ie.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,t,r,a){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.zo(e,ng(t,r),a,l,c)).catch(l=>{throw l.name==="FirebaseError"?(l.code===ie.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ge(ie.UNKNOWN,l.toString())})}Yo(e,t,r,a,l){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,m])=>this.connection.Yo(e,ng(t,r),a,c,m,l)).catch(c=>{throw c.name==="FirebaseError"?(c.code===ie.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ge(ie.UNKNOWN,c.toString())})}terminate(){this.na=!0,this.connection.terminate()}}class CP{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.ia=0,this.sa=null,this.oa=!0}_a(){this.ia===0&&(this.aa("Unknown"),this.sa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.sa=null,this.ua("Backend didn't respond within 10 seconds."),this.aa("Offline"),Promise.resolve())))}ca(e){this.state==="Online"?this.aa("Unknown"):(this.ia++,this.ia>=1&&(this.la(),this.ua(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.aa("Offline")))}set(e){this.la(),this.ia=0,e==="Online"&&(this.oa=!1),this.aa(e)}aa(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ua(e){const t=`Could not reach Cloud Firestore backend. ${e}
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
 */const ha="RemoteStore";class xP{constructor(e,t,r,a,l){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.ha=[],this.Pa=new Map,this.Ta=new Set,this.Ia=[],this.Ea=l,this.Ea.No(c=>{r.enqueueAndForget(async()=>{ya(this)&&(he(ha,"Restarting streams for network reachability change."),await async function(p){const g=Ce(p);g.Ta.add(4),await $u(g),g.da.set("Unknown"),g.Ta.delete(4),await Bf(g)}(this))})}),this.da=new CP(r,a)}}async function Bf(i){if(ya(i))for(const e of i.Ia)await e(!0)}async function $u(i){for(const e of i.Ia)await e(!1)}function mS(i,e){const t=Ce(i);t.Pa.has(e.targetId)||(t.Pa.set(e.targetId,e),Ey(t)?by(t):Ko(t).M_()&&_y(t,e))}function vy(i,e){const t=Ce(i),r=Ko(t);t.Pa.delete(e),r.M_()&&pS(t,e),t.Pa.size===0&&(r.M_()?r.N_():ya(t)&&t.da.set("Unknown"))}function _y(i,e){if(i.Aa.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ie.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ko(i).H_(e)}function pS(i,e){i.Aa.Ke(e),Ko(i).J_(e)}function by(i){i.Aa=new AD({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>i.Pa.get(e)||null,Pt:()=>i.datastore.serializer.databaseId}),Ko(i).start(),i.da._a()}function Ey(i){return ya(i)&&!Ko(i).F_()&&i.Pa.size>0}function ya(i){return Ce(i).Ta.size===0}function gS(i){i.Aa=void 0}async function NP(i){i.da.set("Online")}async function OP(i){i.Pa.forEach((e,t)=>{_y(i,e)})}async function DP(i,e){gS(i),Ey(i)?(i.da.ca(e),by(i)):i.da.set("Unknown")}async function PP(i,e,t){if(i.da.set("Online"),e instanceof eS&&e.state===2&&e.cause)try{await async function(a,l){const c=l.cause;for(const m of l.targetIds)a.Pa.has(m)&&(await a.remoteSyncer.rejectListen(m,c),a.Pa.delete(m),a.Aa.removeTarget(m))}(i,e)}catch(r){he(ha,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await hf(i,r)}else if(e instanceof Bh?i.Aa.Xe(e):e instanceof ZA?i.Aa.ot(e):i.Aa.nt(e),!t.isEqual(Ie.min()))try{const r=await hS(i.localStore);t.compareTo(r)>=0&&await function(l,c){const m=l.Aa.It(c);return m.targetChanges.forEach((p,g)=>{if(p.resumeToken.approximateByteSize()>0){const v=l.Pa.get(g);v&&l.Pa.set(g,v.withResumeToken(p.resumeToken,c))}}),m.targetMismatches.forEach((p,g)=>{const v=l.Pa.get(p);if(!v)return;l.Pa.set(p,v.withResumeToken(Xt.EMPTY_BYTE_STRING,v.snapshotVersion)),pS(l,p);const E=new Zr(v.target,p,g,v.sequenceNumber);_y(l,E)}),l.remoteSyncer.applyRemoteEvent(m)}(i,t)}catch(r){he(ha,"Failed to raise snapshot:",r),await hf(i,r)}}async function hf(i,e,t){if(!$o(e))throw e;i.Ta.add(1),await $u(i),i.da.set("Offline"),t||(t=()=>hS(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{he(ha,"Retrying IndexedDB access"),await t(),i.Ta.delete(1),await Bf(i)})}function yS(i,e){return e().catch(t=>hf(i,t,e))}async function Ff(i){const e=Ce(i),t=hs(e);let r=e.ha.length>0?e.ha[e.ha.length-1].batchId:ry;for(;kP(e);)try{const a=await pP(e.localStore,r);if(a===null){e.ha.length===0&&t.N_();break}r=a.batchId,MP(e,a)}catch(a){await hf(e,a)}vS(e)&&_S(e)}function kP(i){return ya(i)&&i.ha.length<10}function MP(i,e){i.ha.push(e);const t=hs(i);t.M_()&&t.Y_&&t.Z_(e.mutations)}function vS(i){return ya(i)&&!hs(i).F_()&&i.ha.length>0}function _S(i){hs(i).start()}async function VP(i){hs(i).ta()}async function LP(i){const e=hs(i);for(const t of i.ha)e.Z_(t.mutations)}async function UP(i,e,t){const r=i.ha.shift(),a=hy.from(r,e,t);await yS(i,()=>i.remoteSyncer.applySuccessfulWrite(a)),await Ff(i)}async function jP(i,e){e&&hs(i).Y_&&await async function(r,a){if(function(c){return ED(c)&&c!==ie.ABORTED}(a.code)){const l=r.ha.shift();hs(r).O_(),await yS(r,()=>r.remoteSyncer.rejectFailedWrite(l.batchId,a)),await Ff(r)}}(i,e),vS(i)&&_S(i)}async function BE(i,e){const t=Ce(i);t.asyncQueue.verifyOperationInProgress(),he(ha,"RemoteStore received new credentials");const r=ya(t);t.Ta.add(3),await $u(t),r&&t.da.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ta.delete(3),await Bf(t)}async function zP(i,e){const t=Ce(i);e?(t.Ta.delete(2),await Bf(t)):e||(t.Ta.add(2),await $u(t),t.da.set("Unknown"))}function Ko(i){return i.Ra||(i.Ra=function(t,r,a){const l=Ce(t);return l.ra(),new SP(r,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(i.datastore,i.asyncQueue,{e_:NP.bind(null,i),n_:OP.bind(null,i),i_:DP.bind(null,i),j_:PP.bind(null,i)}),i.Ia.push(async e=>{e?(i.Ra.O_(),Ey(i)?by(i):i.da.set("Unknown")):(await i.Ra.stop(),gS(i))})),i.Ra}function hs(i){return i.Va||(i.Va=function(t,r,a){const l=Ce(t);return l.ra(),new wP(r,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(i.datastore,i.asyncQueue,{e_:()=>Promise.resolve(),n_:VP.bind(null,i),i_:jP.bind(null,i),X_:LP.bind(null,i),ea:UP.bind(null,i)}),i.Ia.push(async e=>{e?(i.Va.O_(),await Ff(i)):(await i.Va.stop(),i.ha.length>0&&(he(ha,`Stopping write stream with ${i.ha.length} pending writes`),i.ha=[]))})),i.Va}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(e,t,r,a,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=a,this.removalCallback=l,this.deferred=new rr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,a,l){const c=Date.now()+r,m=new Ty(e,t,c,a,l);return m.start(r),m}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ge(ie.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ay(i,e){if(ur("AsyncQueue",`${e}: ${i}`),$o(i))return new ge(ie.UNAVAILABLE,`${e}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{static emptySet(e){return new wo(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||_e.comparator(t.key,r.key):(t,r)=>_e.comparator(t.key,r.key),this.keyedMap=uu(),this.sortedSet=new ct(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof wo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=r.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new wo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(){this.ma=new ct(_e.comparator)}track(e){const t=e.doc.key,r=this.ma.get(t);r?e.type!==0&&r.type===3?this.ma=this.ma.insert(t,e):e.type===3&&r.type!==1?this.ma=this.ma.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ma=this.ma.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ma=this.ma.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ma=this.ma.remove(t):e.type===1&&r.type===2?this.ma=this.ma.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ma=this.ma.insert(t,{type:2,doc:e.doc}):Te(63341,{Vt:e,fa:r}):this.ma=this.ma.insert(t,e)}ga(){const e=[];return this.ma.inorderTraversal((t,r)=>{e.push(r)}),e}}class Mo{constructor(e,t,r,a,l,c,m,p,g){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=a,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=m,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(e,t,r,a,l){const c=[];return t.forEach(m=>{c.push({type:0,doc:m})}),new Mo(e,t,wo.emptySet(t),c,r,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Mf(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==r[a].type||!t[a].doc.isEqual(r[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BP{constructor(){this.pa=void 0,this.ya=[]}wa(){return this.ya.some(e=>e.Sa())}}class FP{constructor(){this.queries=qE(),this.onlineState="Unknown",this.ba=new Set}terminate(){(function(t,r){const a=Ce(t),l=a.queries;a.queries=qE(),l.forEach((c,m)=>{for(const p of m.ya)p.onError(r)})})(this,new ge(ie.ABORTED,"Firestore shutting down"))}}function qE(){return new ga(i=>jA(i),Mf)}async function bS(i,e){const t=Ce(i);let r=3;const a=e.query;let l=t.queries.get(a);l?!l.wa()&&e.Sa()&&(r=2):(l=new BP,r=e.Sa()?0:1);try{switch(r){case 0:l.pa=await t.onListen(a,!0);break;case 1:l.pa=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(c){const m=Ay(c,`Initialization of query '${vo(e.query)}' failed`);return void e.onError(m)}t.queries.set(a,l),l.ya.push(e),e.Da(t.onlineState),l.pa&&e.va(l.pa)&&Sy(t)}async function ES(i,e){const t=Ce(i),r=e.query;let a=3;const l=t.queries.get(r);if(l){const c=l.ya.indexOf(e);c>=0&&(l.ya.splice(c,1),l.ya.length===0?a=e.Sa()?0:1:!l.wa()&&e.Sa()&&(a=2))}switch(a){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function qP(i,e){const t=Ce(i);let r=!1;for(const a of e){const l=a.query,c=t.queries.get(l);if(c){for(const m of c.ya)m.va(a)&&(r=!0);c.pa=a}}r&&Sy(t)}function HP(i,e,t){const r=Ce(i),a=r.queries.get(e);if(a)for(const l of a.ya)l.onError(t);r.queries.delete(e)}function Sy(i){i.ba.forEach(e=>{e.next()})}var og,HE;(HE=og||(og={})).Ca="default",HE.Cache="cache";class TS{constructor(e,t,r){this.query=e,this.Fa=t,this.Ma=!1,this.xa=null,this.onlineState="Unknown",this.options=r||{}}va(e){if(!this.options.includeMetadataChanges){const r=[];for(const a of e.docChanges)a.type!==3&&r.push(a);e=new Mo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Ma?this.Oa(e)&&(this.Fa.next(e),t=!0):this.Na(e,this.onlineState)&&(this.Ba(e),t=!0),this.xa=e,t}onError(e){this.Fa.error(e)}Da(e){this.onlineState=e;let t=!1;return this.xa&&!this.Ma&&this.Na(this.xa,e)&&(this.Ba(this.xa),t=!0),t}Na(e,t){if(!e.fromCache||!this.Sa())return!0;const r=t!=="Offline";return(!this.options.La||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Oa(e){if(e.docChanges.length>0)return!0;const t=this.xa&&this.xa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Ba(e){e=Mo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Ma=!0,this.Fa.next(e)}Sa(){return this.options.source!==og.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AS{constructor(e){this.key=e}}class SS{constructor(e){this.key=e}}class GP{constructor(e,t){this.query=e,this.Ga=t,this.za=null,this.hasCachedResults=!1,this.current=!1,this.ja=Ue(),this.mutatedKeys=Ue(),this.Ha=zA(e),this.Ja=new wo(this.Ha)}get Ya(){return this.Ga}Za(e,t){const r=t?t.Xa:new FE,a=t?t.Ja:this.Ja;let l=t?t.mutatedKeys:this.mutatedKeys,c=a,m=!1;const p=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,g=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal((v,E)=>{const S=a.get(v),U=Vf(this.query,E)?E:null,F=!!S&&this.mutatedKeys.has(S.key),K=!!U&&(U.hasLocalMutations||this.mutatedKeys.has(U.key)&&U.hasCommittedMutations);let V=!1;S&&U?S.data.isEqual(U.data)?F!==K&&(r.track({type:3,doc:U}),V=!0):this.eu(S,U)||(r.track({type:2,doc:U}),V=!0,(p&&this.Ha(U,p)>0||g&&this.Ha(U,g)<0)&&(m=!0)):!S&&U?(r.track({type:0,doc:U}),V=!0):S&&!U&&(r.track({type:1,doc:S}),V=!0,(p||g)&&(m=!0)),V&&(U?(c=c.add(U),l=K?l.add(v):l.delete(v)):(c=c.delete(v),l=l.delete(v)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const v=this.query.limitType==="F"?c.last():c.first();c=c.delete(v.key),l=l.delete(v.key),r.track({type:1,doc:v})}return{Ja:c,Xa:r,Cs:m,mutatedKeys:l}}eu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,a){const l=this.Ja;this.Ja=e.Ja,this.mutatedKeys=e.mutatedKeys;const c=e.Xa.ga();c.sort((v,E)=>function(U,F){const K=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Te(20277,{Vt:V})}};return K(U)-K(F)}(v.type,E.type)||this.Ha(v.doc,E.doc)),this.tu(r),a=a!=null&&a;const m=t&&!a?this.nu():[],p=this.ja.size===0&&this.current&&!a?1:0,g=p!==this.za;return this.za=p,c.length!==0||g?{snapshot:new Mo(this.query,e.Ja,l,c,e.mutatedKeys,p===0,g,!1,!!r&&r.resumeToken.approximateByteSize()>0),ru:m}:{ru:m}}Da(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ja:this.Ja,Xa:new FE,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ru:[]}}iu(e){return!this.Ga.has(e)&&!!this.Ja.has(e)&&!this.Ja.get(e).hasLocalMutations}tu(e){e&&(e.addedDocuments.forEach(t=>this.Ga=this.Ga.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ga=this.Ga.delete(t)),this.current=e.current)}nu(){if(!this.current)return[];const e=this.ja;this.ja=Ue(),this.Ja.forEach(r=>{this.iu(r.key)&&(this.ja=this.ja.add(r.key))});const t=[];return e.forEach(r=>{this.ja.has(r)||t.push(new SS(r))}),this.ja.forEach(r=>{e.has(r)||t.push(new AS(r))}),t}su(e){this.Ga=e.$s,this.ja=Ue();const t=this.Za(e.documents);return this.applyChanges(t,!0)}ou(){return Mo.fromInitialDocuments(this.query,this.Ja,this.mutatedKeys,this.za===0,this.hasCachedResults)}}const wy="SyncEngine";class $P{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class KP{constructor(e){this.key=e,this._u=!1}}class YP{constructor(e,t,r,a,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.au={},this.uu=new ga(m=>jA(m),Mf),this.cu=new Map,this.lu=new Set,this.hu=new ct(_e.comparator),this.Pu=new Map,this.Tu=new my,this.Iu={},this.Eu=new Map,this.du=ko.lr(),this.onlineState="Unknown",this.Au=void 0}get isPrimaryClient(){return this.Au===!0}}async function QP(i,e,t=!0){const r=NS(i);let a;const l=r.uu.get(e);return l?(r.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.ou()):a=await wS(r,e,t,!0),a}async function XP(i,e){const t=NS(i);await wS(t,e,!0,!1)}async function wS(i,e,t,r){const a=await gP(i.localStore,bi(e)),l=a.targetId,c=i.sharedClientState.addLocalQueryTarget(l,t);let m;return r&&(m=await WP(i,e,l,c==="current",a.resumeToken)),i.isPrimaryClient&&t&&mS(i.remoteStore,a),m}async function WP(i,e,t,r,a){i.Ru=(E,S,U)=>async function(K,V,G,X){let W=V.view.Za(G);W.Cs&&(W=await VE(K.localStore,V.query,!1).then(({documents:D})=>V.view.Za(D,W)));const ce=X&&X.targetChanges.get(V.targetId),oe=X&&X.targetMismatches.get(V.targetId)!=null,de=V.view.applyChanges(W,K.isPrimaryClient,ce,oe);return $E(K,V.targetId,de.ru),de.snapshot}(i,E,S,U);const l=await VE(i.localStore,e,!0),c=new GP(e,l.$s),m=c.Za(l.documents),p=Gu.createSynthesizedTargetChangeForCurrentChange(t,r&&i.onlineState!=="Offline",a),g=c.applyChanges(m,i.isPrimaryClient,p);$E(i,t,g.ru);const v=new $P(e,t,c);return i.uu.set(e,v),i.cu.has(t)?i.cu.get(t).push(e):i.cu.set(t,[e]),g.snapshot}async function JP(i,e,t){const r=Ce(i),a=r.uu.get(e),l=r.cu.get(a.targetId);if(l.length>1)return r.cu.set(a.targetId,l.filter(c=>!Mf(c,e))),void r.uu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(a.targetId),r.sharedClientState.isActiveQueryTarget(a.targetId)||await sg(r.localStore,a.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(a.targetId),t&&vy(r.remoteStore,a.targetId),lg(r,a.targetId)}).catch(Go)):(lg(r,a.targetId),await sg(r.localStore,a.targetId,!0))}async function ZP(i,e){const t=Ce(i),r=t.uu.get(e),a=t.cu.get(r.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),vy(t.remoteStore,r.targetId))}async function ek(i,e,t){const r=ok(i);try{const a=await function(c,m){const p=Ce(c),g=It.now(),v=m.reduce((U,F)=>U.add(F.key),Ue());let E,S;return p.persistence.runTransaction("Locally write mutations","readwrite",U=>{let F=cr(),K=Ue();return p.Bs.getEntries(U,v).next(V=>{F=V,F.forEach((G,X)=>{X.isValidDocument()||(K=K.add(G))})}).next(()=>p.localDocuments.getOverlayedDocuments(U,F)).next(V=>{E=V;const G=[];for(const X of m){const W=gD(X,E.get(X.key).overlayedDocument);W!=null&&G.push(new bs(X.key,W,DA(W.value.mapValue),Qn.exists(!0)))}return p.mutationQueue.addMutationBatch(U,g,G,m)}).next(V=>{S=V;const G=V.applyToLocalDocumentSet(E,K);return p.documentOverlayCache.saveOverlays(U,V.batchId,G)})}).then(()=>({batchId:S.batchId,changes:FA(E)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(a.batchId),function(c,m,p){let g=c.Iu[c.currentUser.toKey()];g||(g=new ct(Oe)),g=g.insert(m,p),c.Iu[c.currentUser.toKey()]=g}(r,a.batchId,t),await Ku(r,a.changes),await Ff(r.remoteStore)}catch(a){const l=Ay(a,"Failed to persist write");t.reject(l)}}async function IS(i,e){const t=Ce(i);try{const r=await dP(t.localStore,e);e.targetChanges.forEach((a,l)=>{const c=t.Pu.get(l);c&&(Ke(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?c._u=!0:a.modifiedDocuments.size>0?Ke(c._u,14607):a.removedDocuments.size>0&&(Ke(c._u,42227),c._u=!1))}),await Ku(t,r,e)}catch(r){await Go(r)}}function GE(i,e,t){const r=Ce(i);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const a=[];r.uu.forEach((l,c)=>{const m=c.view.Da(e);m.snapshot&&a.push(m.snapshot)}),function(c,m){const p=Ce(c);p.onlineState=m;let g=!1;p.queries.forEach((v,E)=>{for(const S of E.ya)S.Da(m)&&(g=!0)}),g&&Sy(p)}(r.eventManager,e),a.length&&r.au.j_(a),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function tk(i,e,t){const r=Ce(i);r.sharedClientState.updateQueryState(e,"rejected",t);const a=r.Pu.get(e),l=a&&a.key;if(l){let c=new ct(_e.comparator);c=c.insert(l,rn.newNoDocument(l,Ie.min()));const m=Ue().add(l),p=new jf(Ie.min(),new Map,new ct(Oe),c,m);await IS(r,p),r.hu=r.hu.remove(l),r.Pu.delete(e),Iy(r)}else await sg(r.localStore,e,!1).then(()=>lg(r,e,t)).catch(Go)}async function nk(i,e){const t=Ce(i),r=e.batch.batchId;try{const a=await fP(t.localStore,e);CS(t,r,null),RS(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Ku(t,a)}catch(a){await Go(a)}}async function ik(i,e,t){const r=Ce(i);try{const a=await function(c,m){const p=Ce(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let v;return p.mutationQueue.lookupMutationBatch(g,m).next(E=>(Ke(E!==null,37113),v=E.keys(),p.mutationQueue.removeMutationBatch(g,E))).next(()=>p.mutationQueue.performConsistencyCheck(g)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(g,v,m)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,v)).next(()=>p.localDocuments.getDocuments(g,v))})}(r.localStore,e);CS(r,e,t),RS(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Ku(r,a)}catch(a){await Go(a)}}function RS(i,e){(i.Eu.get(e)||[]).forEach(t=>{t.resolve()}),i.Eu.delete(e)}function CS(i,e,t){const r=Ce(i);let a=r.Iu[r.currentUser.toKey()];if(a){const l=a.get(e);l&&(t?l.reject(t):l.resolve(),a=a.remove(e)),r.Iu[r.currentUser.toKey()]=a}}function lg(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const r of i.cu.get(e))i.uu.delete(r),t&&i.au.Vu(r,t);i.cu.delete(e),i.isPrimaryClient&&i.Tu.Hr(e).forEach(r=>{i.Tu.containsKey(r)||xS(i,r)})}function xS(i,e){i.lu.delete(e.path.canonicalString());const t=i.hu.get(e);t!==null&&(vy(i.remoteStore,t),i.hu=i.hu.remove(e),i.Pu.delete(t),Iy(i))}function $E(i,e,t){for(const r of t)r instanceof AS?(i.Tu.addReference(r.key,e),rk(i,r)):r instanceof SS?(he(wy,"Document no longer in limbo: "+r.key),i.Tu.removeReference(r.key,e),i.Tu.containsKey(r.key)||xS(i,r.key)):Te(19791,{mu:r})}function rk(i,e){const t=e.key,r=t.path.canonicalString();i.hu.get(t)||i.lu.has(r)||(he(wy,"New document in limbo: "+t),i.lu.add(r),Iy(i))}function Iy(i){for(;i.lu.size>0&&i.hu.size<i.maxConcurrentLimboResolutions;){const e=i.lu.values().next().value;i.lu.delete(e);const t=new _e(lt.fromString(e)),r=i.du.next();i.Pu.set(r,new KP(t)),i.hu=i.hu.insert(t,r),mS(i.remoteStore,new Zr(bi(uy(t.path)),r,"TargetPurposeLimboResolution",Of.le))}}async function Ku(i,e,t){const r=Ce(i),a=[],l=[],c=[];r.uu.isEmpty()||(r.uu.forEach((m,p)=>{c.push(r.Ru(p,e,t).then(g=>{var v;if((g||t)&&r.isPrimaryClient){const E=g?!g.fromCache:(v=t==null?void 0:t.targetChanges.get(p.targetId))===null||v===void 0?void 0:v.current;r.sharedClientState.updateQueryState(p.targetId,E?"current":"not-current")}if(g){a.push(g);const E=gy.Rs(p.targetId,g);l.push(E)}}))}),await Promise.all(c),r.au.j_(a),await async function(p,g){const v=Ce(p);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",E=>ee.forEach(g,S=>ee.forEach(S.ds,U=>v.persistence.referenceDelegate.addReference(E,S.targetId,U)).next(()=>ee.forEach(S.As,U=>v.persistence.referenceDelegate.removeReference(E,S.targetId,U)))))}catch(E){if(!$o(E))throw E;he(yy,"Failed to update sequence numbers: "+E)}for(const E of g){const S=E.targetId;if(!E.fromCache){const U=v.xs.get(S),F=U.snapshotVersion,K=U.withLastLimboFreeSnapshotVersion(F);v.xs=v.xs.insert(S,K)}}}(r.localStore,l))}async function sk(i,e){const t=Ce(i);if(!t.currentUser.isEqual(e)){he(wy,"User change. New user:",e.toKey());const r=await cS(t.localStore,e);t.currentUser=e,function(l,c){l.Eu.forEach(m=>{m.forEach(p=>{p.reject(new ge(ie.CANCELLED,c))})}),l.Eu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ku(t,r.ks)}}function ak(i,e){const t=Ce(i),r=t.Pu.get(e);if(r&&r._u)return Ue().add(r.key);{let a=Ue();const l=t.cu.get(e);if(!l)return a;for(const c of l){const m=t.uu.get(c);a=a.unionWith(m.view.Ya)}return a}}function NS(i){const e=Ce(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=IS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ak.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=tk.bind(null,e),e.au.j_=qP.bind(null,e.eventManager),e.au.Vu=HP.bind(null,e.eventManager),e}function ok(i){const e=Ce(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=nk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ik.bind(null,e),e}class ff{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=zf(e.databaseInfo.databaseId),this.sharedClientState=this.pu(e),this.persistence=this.yu(e),await this.persistence.start(),this.localStore=this.wu(e),this.gcScheduler=this.Su(e,this.localStore),this.indexBackfillerScheduler=this.bu(e,this.localStore)}Su(e,t){return null}bu(e,t){return null}wu(e){return hP(this.persistence,new lP,e.initialUser,this.serializer)}yu(e){return new uS(py.fi,this.serializer)}pu(e){return new vP}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ff.provider={build:()=>new ff};class lk extends ff{constructor(e){super(),this.cacheSizeBytes=e}Su(e,t){Ke(this.persistence.referenceDelegate instanceof cf,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new KD(r,e.asyncQueue,t)}yu(e){const t=this.cacheSizeBytes!==void 0?dn.withCacheSize(this.cacheSizeBytes):dn.DEFAULT;return new uS(r=>cf.fi(r,t),this.serializer)}}class ug{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>GE(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=sk.bind(null,this.syncEngine),await zP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new FP}()}createDatastore(e){const t=zf(e.databaseInfo.databaseId),r=function(l){return new AP(l)}(e.databaseInfo);return function(l,c,m,p){return new RP(l,c,m,p)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,a,l,c,m){return new xP(r,a,l,c,m)}(this.localStore,this.datastore,e.asyncQueue,t=>GE(this.syncEngine,t,0),function(){return jE.C()?new jE:new _P}())}createSyncEngine(e,t){return function(a,l,c,m,p,g,v){const E=new YP(a,l,c,m,p,g);return v&&(E.Au=!0),E}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(a){const l=Ce(a);he(ha,"RemoteStore shutting down."),l.Ta.add(5),await $u(l),l.Ea.shutdown(),l.da.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}ug.provider={build:()=>new ug};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const fs="FirestoreClient";class uk{constructor(e,t,r,a,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=a,this.user=nn.UNAUTHENTICATED,this.clientId=TA.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(r,async c=>{he(fs,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(r,c=>(he(fs,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new rr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Ay(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function bp(i,e){i.asyncQueue.verifyOperationInProgress(),he(fs,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let r=t.initialUser;i.setCredentialChangeListener(async a=>{r.isEqual(a)||(await cS(e.localStore,a),r=a)}),e.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=e}async function KE(i,e){i.asyncQueue.verifyOperationInProgress();const t=await ck(i);he(fs,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener(r=>BE(e.remoteStore,r)),i.setAppCheckTokenChangeListener((r,a)=>BE(e.remoteStore,a)),i._onlineComponents=e}async function ck(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){he(fs,"Using user provided OfflineComponentProvider");try{await bp(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(a){return a.name==="FirebaseError"?a.code===ie.FAILED_PRECONDITION||a.code===ie.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(t))throw t;No("Error using user provided cache. Falling back to memory cache: "+t),await bp(i,new ff)}}else he(fs,"Using default OfflineComponentProvider"),await bp(i,new lk(void 0));return i._offlineComponents}async function DS(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(he(fs,"Using user provided OnlineComponentProvider"),await KE(i,i._uninitializedComponentsProvider._online)):(he(fs,"Using default OnlineComponentProvider"),await KE(i,new ug))),i._onlineComponents}function hk(i){return DS(i).then(e=>e.syncEngine)}async function PS(i){const e=await DS(i),t=e.eventManager;return t.onListen=QP.bind(null,e.syncEngine),t.onUnlisten=JP.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=XP.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=ZP.bind(null,e.syncEngine),t}function fk(i,e,t={}){const r=new rr;return i.asyncQueue.enqueueAndForget(async()=>function(l,c,m,p,g){const v=new OS({next:S=>{v.Cu(),c.enqueueAndForget(()=>ES(l,E));const U=S.docs.has(m);!U&&S.fromCache?g.reject(new ge(ie.UNAVAILABLE,"Failed to get document because the client is offline.")):U&&S.fromCache&&p&&p.source==="server"?g.reject(new ge(ie.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(S)},error:S=>g.reject(S)}),E=new TS(uy(m.path),v,{includeMetadataChanges:!0,La:!0});return bS(l,E)}(await PS(i),i.asyncQueue,e,t,r)),r.promise}function dk(i,e,t={}){const r=new rr;return i.asyncQueue.enqueueAndForget(async()=>function(l,c,m,p,g){const v=new OS({next:S=>{v.Cu(),c.enqueueAndForget(()=>ES(l,E)),S.fromCache&&p.source==="server"?g.reject(new ge(ie.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(S)},error:S=>g.reject(S)}),E=new TS(m,v,{includeMetadataChanges:!0,La:!0});return bS(l,E)}(await PS(i),i.asyncQueue,e,t,r)),r.promise}/**
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
 */const YE=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MS(i,e,t){if(!t)throw new ge(ie.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function mk(i,e,t,r){if(e===!0&&r===!0)throw new ge(ie.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function QE(i){if(!_e.isDocumentKey(i))throw new ge(ie.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function XE(i){if(_e.isDocumentKey(i))throw new ge(ie.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function Ry(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":Te(12329,{type:typeof i})}function wi(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new ge(ie.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ry(i);throw new ge(ie.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VS="firestore.googleapis.com",WE=!0;class JE{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ge(ie.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=VS,this.ssl=WE}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:WE;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=lS;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<GD)throw new ge(ie.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}mk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=kS((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new ge(ie.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new ge(ie.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new ge(ie.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,a){return r.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class qf{constructor(e,t,r,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new JE({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ge(ie.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ge(ie.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new JE(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new EO;switch(r.type){case"firstParty":return new wO(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ge(ie.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,If("Firestore",this._settings.isUsingEmulator),this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=YE.get(t);r&&(he("ComponentProvider","Removing Datastore"),YE.delete(t),r.terminate())}(this),Promise.resolve()}}function pk(i,e,t,r={}){var a;i=wi(i,qf);const l=Bo(e),c=i._getSettings(),m=Object.assign(Object.assign({},c),{emulatorOptions:i._getEmulatorOptions()}),p=`${e}:${t}`;c.host!==VS&&c.host!==p&&No("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g=Object.assign(Object.assign({},c),{host:p,ssl:l,emulatorOptions:r});if(!ss(g,m)&&(i._setSettings(g),l&&(v1(`https://${p}`),If("Firestore",!0)),r.mockUserToken)){let v,E;if(typeof r.mockUserToken=="string")v=r.mockUserToken,E=nn.MOCK_USER;else{v=WC(r.mockUserToken,(a=i._app)===null||a===void 0?void 0:a.options.projectId);const S=r.mockUserToken.sub||r.mockUserToken.user_id;if(!S)throw new ge(ie.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new nn(S)}i._authCredentials=new TO(new bA(v,E))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Hf(this.firestore,e,this._query)}}class pn{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new rs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new pn(this.firestore,e,this._key)}}class rs extends Hf{constructor(e,t,r){super(e,t,uy(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new pn(this.firestore,null,new _e(e))}withConverter(e){return new rs(this.firestore,e,this._path)}}function sr(i,e,...t){if(i=Rt(i),MS("collection","path",e),i instanceof qf){const r=lt.fromString(e,...t);return XE(r),new rs(i,null,r)}{if(!(i instanceof pn||i instanceof rs))throw new ge(ie.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=i._path.child(lt.fromString(e,...t));return XE(r),new rs(i.firestore,null,r)}}function Cy(i,e,...t){if(i=Rt(i),arguments.length===1&&(e=TA.newId()),MS("doc","path",e),i instanceof qf){const r=lt.fromString(e,...t);return QE(r),new pn(i,null,new _e(r))}{if(!(i instanceof pn||i instanceof rs))throw new ge(ie.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=i._path.child(lt.fromString(e,...t));return QE(r),new pn(i.firestore,i instanceof rs?i.converter:null,new _e(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZE="AsyncQueue";class eT{constructor(e=Promise.resolve()){this.zu=[],this.ju=!1,this.Hu=[],this.Ju=null,this.Yu=!1,this.Zu=!1,this.Xu=[],this.C_=new fS(this,"async_queue_retry"),this.ec=()=>{const r=_p();r&&he(ZE,"Visibility state changed to "+r.visibilityState),this.C_.p_()},this.tc=e;const t=_p();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.ec)}get isShuttingDown(){return this.ju}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nc(),this.rc(e)}enterRestrictedMode(e){if(!this.ju){this.ju=!0,this.Zu=e||!1;const t=_p();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.ec)}}enqueue(e){if(this.nc(),this.ju)return new Promise(()=>{});const t=new rr;return this.rc(()=>this.ju&&this.Zu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.zu.push(e),this.sc()))}async sc(){if(this.zu.length!==0){try{await this.zu[0](),this.zu.shift(),this.C_.reset()}catch(e){if(!$o(e))throw e;he(ZE,"Operation failed with retryable error: "+e)}this.zu.length>0&&this.C_.f_(()=>this.sc())}}rc(e){const t=this.tc.then(()=>(this.Yu=!0,e().catch(r=>{throw this.Ju=r,this.Yu=!1,ur("INTERNAL UNHANDLED ERROR: ",tT(r)),r}).then(r=>(this.Yu=!1,r))));return this.tc=t,t}enqueueAfterDelay(e,t,r){this.nc(),this.Xu.indexOf(e)>-1&&(t=0);const a=Ty.createAndSchedule(this,e,t,r,l=>this.oc(l));return this.Hu.push(a),a}nc(){this.Ju&&Te(47125,{_c:tT(this.Ju)})}verifyOperationInProgress(){}async ac(){let e;do e=this.tc,await e;while(e!==this.tc)}uc(e){for(const t of this.Hu)if(t.timerId===e)return!0;return!1}cc(e){return this.ac().then(()=>{this.Hu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Hu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.ac()})}lc(e){this.Xu.push(e)}oc(e){const t=this.Hu.indexOf(e);this.Hu.splice(t,1)}}function tT(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}class Yo extends qf{constructor(e,t,r,a){super(e,t,r,a),this.type="firestore",this._queue=new eT,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new eT(e),this._firestoreClient=void 0,await e}}}function va(i,e){const t=typeof i=="object"?i:qg(),r=typeof i=="string"?i:nf,a=zu(t,"firestore").getImmediate({identifier:r});if(!a._initialized){const l=QC("firestore");l&&pk(a,...l)}return a}function xy(i){if(i._terminated)throw new ge(ie.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||gk(i),i._firestoreClient}function gk(i){var e,t,r;const a=i._freezeSettings(),l=function(m,p,g,v){return new zO(m,p,g,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,kS(v.experimentalLongPollingOptions),v.useFetchStreams,v.isUsingEmulator)}(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,a);i._componentsProvider||!((t=a.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=a.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(i._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),i._firestoreClient=new uk(i._authCredentials,i._appCheckCredentials,i._queue,l,i._componentsProvider&&function(m){const p=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(p),_online:p}}(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Vo(Xt.fromBase64String(e))}catch(t){throw new ge(ie.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Vo(Xt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ge(ie.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ge(ie.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ge(ie.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Oe(this._lat,e._lat)||Oe(this._long,e._long)}}/**
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
 */class Dy{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,a){if(r.length!==a.length)return!1;for(let l=0;l<r.length;++l)if(r[l]!==a[l])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yk=/^__.*__$/;class vk{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new bs(e,this.data,this.fieldMask,t,this.fieldTransforms):new Hu(e,this.data,t,this.fieldTransforms)}}class LS{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new bs(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function US(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Te(40011,{hc:i})}}class Py{constructor(e,t,r,a,l,c){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=a,l===void 0&&this.Pc(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get hc(){return this.settings.hc}Tc(e){return new Py(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ic(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.Tc({path:r,Ec:!1});return a.dc(e),a}Ac(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.Tc({path:r,Ec:!1});return a.Pc(),a}Rc(e){return this.Tc({path:void 0,Ec:!0})}Vc(e){return df(e,this.settings.methodName,this.settings.mc||!1,this.path,this.settings.fc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Pc(){if(this.path)for(let e=0;e<this.path.length;e++)this.dc(this.path.get(e))}dc(e){if(e.length===0)throw this.Vc("Document fields must not be empty");if(US(this.hc)&&yk.test(e))throw this.Vc('Document fields cannot begin and end with "__"')}}class _k{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||zf(e)}gc(e,t,r,a=!1){return new Py({hc:e,methodName:t,fc:r,path:Qt.emptyPath(),Ec:!1,mc:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ky(i){const e=i._freezeSettings(),t=zf(i._databaseId);return new _k(i._databaseId,!!e.ignoreUndefinedProperties,t)}function jS(i,e,t,r,a,l={}){const c=i.gc(l.merge||l.mergeFields?2:0,e,t,a);My("Data must be an object, but it was:",c,r);const m=zS(r,c);let p,g;if(l.merge)p=new wn(c.fieldMask),g=c.fieldTransforms;else if(l.mergeFields){const v=[];for(const E of l.mergeFields){const S=cg(e,E,t);if(!c.contains(S))throw new ge(ie.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);FS(v,S)||v.push(S)}p=new wn(v),g=c.fieldTransforms.filter(E=>p.covers(E.field))}else p=null,g=c.fieldTransforms;return new vk(new mn(m),p,g)}class $f extends Ny{_toFieldTransform(e){if(e.hc!==2)throw e.hc===1?e.Vc(`${this._methodName}() can only appear at the top level of your update data`):e.Vc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof $f}}function bk(i,e,t,r){const a=i.gc(1,e,t);My("Data must be an object, but it was:",a,r);const l=[],c=mn.empty();_s(r,(p,g)=>{const v=Vy(e,p,t);g=Rt(g);const E=a.Ac(v);if(g instanceof $f)l.push(v);else{const S=Kf(g,E);S!=null&&(l.push(v),c.set(v,S))}});const m=new wn(l);return new LS(c,m,a.fieldTransforms)}function Ek(i,e,t,r,a,l){const c=i.gc(1,e,t),m=[cg(e,r,t)],p=[a];if(l.length%2!=0)throw new ge(ie.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let S=0;S<l.length;S+=2)m.push(cg(e,l[S])),p.push(l[S+1]);const g=[],v=mn.empty();for(let S=m.length-1;S>=0;--S)if(!FS(g,m[S])){const U=m[S];let F=p[S];F=Rt(F);const K=c.Ac(U);if(F instanceof $f)g.push(U);else{const V=Kf(F,K);V!=null&&(g.push(U),v.set(U,V))}}const E=new wn(g);return new LS(v,E,c.fieldTransforms)}function Kf(i,e){if(BS(i=Rt(i)))return My("Unsupported field value:",e,i),zS(i,e);if(i instanceof Ny)return function(r,a){if(!US(a.hc))throw a.Vc(`${r._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Vc(`${r._methodName}() is not currently supported inside arrays`);const l=r._toFieldTransform(a);l&&a.fieldTransforms.push(l)}(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.Ec&&e.hc!==4)throw e.Vc("Nested arrays are not supported");return function(r,a){const l=[];let c=0;for(const m of r){let p=Kf(m,a.Rc(c));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),c++}return{arrayValue:{values:l}}}(i,e)}return function(r,a){if((r=Rt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return cD(a.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const l=It.fromDate(r);return{timestampValue:uf(a.serializer,l)}}if(r instanceof It){const l=new It(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:uf(a.serializer,l)}}if(r instanceof Oy)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Vo)return{bytesValue:tS(a.serializer,r._byteString)};if(r instanceof pn){const l=a.databaseId,c=r.firestore._databaseId;if(!c.isEqual(l))throw a.Vc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:dy(r.firestore._databaseId||a.databaseId,r._key.path)}}if(r instanceof Dy)return function(c,m){return{mapValue:{fields:{[NA]:{stringValue:OA},[rf]:{arrayValue:{values:c.toArray().map(g=>{if(typeof g!="number")throw m.Vc("VectorValues must only contain numeric values.");return cy(m.serializer,g)})}}}}}}(r,a);throw a.Vc(`Unsupported field value: ${Ry(r)}`)}(i,e)}function zS(i,e){const t={};return SA(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):_s(i,(r,a)=>{const l=Kf(a,e.Ic(r));l!=null&&(t[r]=l)}),{mapValue:{fields:t}}}function BS(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof It||i instanceof Oy||i instanceof Vo||i instanceof pn||i instanceof Ny||i instanceof Dy)}function My(i,e,t){if(!BS(t)||!function(a){return typeof a=="object"&&a!==null&&(Object.getPrototypeOf(a)===Object.prototype||Object.getPrototypeOf(a)===null)}(t)){const r=Ry(t);throw r==="an object"?e.Vc(i+" a custom object"):e.Vc(i+" "+r)}}function cg(i,e,t){if((e=Rt(e))instanceof Gf)return e._internalPath;if(typeof e=="string")return Vy(i,e);throw df("Field path arguments must be of type string or ",i,!1,void 0,t)}const Tk=new RegExp("[~\\*/\\[\\]]");function Vy(i,e,t){if(e.search(Tk)>=0)throw df(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new Gf(...e.split("."))._internalPath}catch{throw df(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function df(i,e,t,r,a){const l=r&&!r.isEmpty(),c=a!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let p="";return(l||c)&&(p+=" (found",l&&(p+=` in field ${r}`),c&&(p+=` in document ${a}`),p+=")"),new ge(ie.INVALID_ARGUMENT,m+i+p)}function FS(i,e){return i.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS{constructor(e,t,r,a,l){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new pn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ak(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(HS("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Ak extends qS{data(){return super.data()}}function HS(i,e){return typeof e=="string"?Vy(i,e):e instanceof Gf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sk(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new ge(ie.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class wk{convertValue(e,t="none"){switch(cs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return vt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(us(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Te(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return _s(e,(a,l)=>{r[a]=this.convertValue(l,t)}),r}convertVectorValue(e){var t,r,a;const l=(a=(r=(t=e.fields)===null||t===void 0?void 0:t[rf].arrayValue)===null||r===void 0?void 0:r.values)===null||a===void 0?void 0:a.map(c=>vt(c.doubleValue));return new Dy(l)}convertGeoPoint(e){return new Oy(vt(e.latitude),vt(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Pf(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(xu(e));default:return null}}convertTimestamp(e){const t=ls(e);return new It(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=lt.fromString(e);Ke(oS(r),9688,{name:e});const a=new Nu(r.get(1),r.get(3)),l=new _e(r.popFirst(5));return a.isEqual(t)||ur(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class hu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class $S extends qS{constructor(e,t,r,a,l,c){super(e,t,r,a,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Fh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(HS("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Fh extends $S{data(e={}){return super.data(e)}}class Ik{constructor(e,t,r,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new hu(a.hasPendingWrites,a.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Fh(this._firestore,this._userDataWriter,r.key,r,new hu(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ge(ie.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(a,l){if(a._snapshot.oldDocs.isEmpty()){let c=0;return a._snapshot.docChanges.map(m=>{const p=new Fh(a._firestore,a._userDataWriter,m.doc.key,m.doc,new hu(a._snapshot.mutatedKeys.has(m.doc.key),a._snapshot.fromCache),a.query.converter);return m.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}})}{let c=a._snapshot.oldDocs;return a._snapshot.docChanges.filter(m=>l||m.type!==3).map(m=>{const p=new Fh(a._firestore,a._userDataWriter,m.doc.key,m.doc,new hu(a._snapshot.mutatedKeys.has(m.doc.key),a._snapshot.fromCache),a.query.converter);let g=-1,v=-1;return m.type!==0&&(g=c.indexOf(m.doc.key),c=c.delete(m.doc.key)),m.type!==1&&(c=c.add(m.doc),v=c.indexOf(m.doc.key)),{type:Rk(m.type),doc:p,oldIndex:g,newIndex:v}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Rk(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Te(61501,{type:i})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ck(i){i=wi(i,pn);const e=wi(i.firestore,Yo);return fk(xy(e),i._key).then(t=>Ok(e,i,t))}class KS extends wk{constructor(e){super(),this.firestore=e}convertBytes(e){return new Vo(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new pn(this.firestore,null,t)}}function ku(i){i=wi(i,Hf);const e=wi(i.firestore,Yo),t=xy(e),r=new KS(e);return Sk(i._query),dk(t,i._query).then(a=>new Ik(e,r,i,a))}function xk(i,e,t){i=wi(i,pn);const r=wi(i.firestore,Yo),a=GS(i.converter,e);return Ly(r,[jS(ky(r),"setDoc",i._key,a,i.converter!==null,t).toMutation(i._key,Qn.none())])}function Nk(i,e,t,...r){i=wi(i,pn);const a=wi(i.firestore,Yo),l=ky(a);let c;return c=typeof(e=Rt(e))=="string"||e instanceof Gf?Ek(l,"updateDoc",i._key,e,t,r):bk(l,"updateDoc",i._key,e),Ly(a,[c.toMutation(i._key,Qn.exists(!0))])}function Yf(i,e){const t=wi(i.firestore,Yo),r=Cy(i),a=GS(i.converter,e);return Ly(t,[jS(ky(i.firestore),"addDoc",r._key,a,i.converter!==null,{}).toMutation(r._key,Qn.exists(!1))]).then(()=>r)}function Ly(i,e){return function(r,a){const l=new rr;return r.asyncQueue.enqueueAndForget(async()=>ek(await hk(r),a,l)),l.promise}(xy(i),e)}function Ok(i,e,t){const r=t.docs.get(e._key),a=new KS(i);return new $S(i,a,e._key,r,new hu(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(a){Ho=a})(Ri),as(new ar("firestore",(r,{instanceIdentifier:a,options:l})=>{const c=r.getProvider("app").getImmediate(),m=new Yo(new AO(r.getProvider("auth-internal")),new IO(c,r.getProvider("app-check-internal")),function(g,v){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new ge(ie.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Nu(g.options.projectId,v)}(c,a),c);return l=Object.assign({useFetchStreams:t},l),m._setSettings(l),m},"PUBLIC").setMultipleInstances(!0)),vi(aE,oE,e),vi(aE,oE,"esm2017")})();const Dk=va(Ci),Pk=ny(Ci),kk=()=>{const i=Sf(),e=async t=>{var r;t.preventDefault();try{const a=new Jg,l=await IN(Pk,a);if(!l.user)throw new Error("Error al loguear con google");const c=Cy(Dk,"users",l.user.uid);(await Ck(c)).exists()||await xk(c,{username:(r=l.user.email)==null?void 0:r.split("@"),email:l.user.email,role:null,avatar:"default.png"}),i("/home")}catch(a){console.log(a)}};return w.jsx(w.Fragment,{children:w.jsx("div",{className:"w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0 relative",children:w.jsxs("div",{className:"w-full sm:max-w-md p-5 mx-auto",children:[w.jsx("h2",{className:"mb-12 text-center text-5xl font-extrabold",children:"El Caballo S.A."}),w.jsxs("form",{children:[w.jsxs("div",{className:"mb-4",children:[w.jsx("label",{className:"block mb-1",htmlFor:"email",children:"Usuario"}),w.jsx("input",{id:"email",type:"text",name:"email",className:"py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"})]}),w.jsxs("div",{className:"mb-4",children:[w.jsx("label",{className:"block mb-1",htmlFor:"password",children:"Contraseña"}),w.jsx("input",{id:"password",type:"password",name:"password",className:"py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"})]}),w.jsxs("div",{className:"mt-6 flex items-center justify-between",children:[w.jsxs("div",{className:"flex items-center",children:[w.jsx("input",{id:"remember_me",type:"checkbox",className:"border border-gray-300 text-red-600 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"}),w.jsxs("label",{htmlFor:"remember_me",className:"ml-2 block text-sm leading-5 text-gray-900",children:[" ","Remember me"," "]})]}),w.jsxs("a",{href:"#",className:"text-sm",children:[" ","Olvidaste tu contraseña?"," "]})]}),w.jsx("div",{className:"mt-6",children:w.jsx("button",{className:"cursor-pointer w-full inline-flex items-center justify-center px-4 py-2 bg-blue-950 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-blue-800 active:bg-green-500 focus:outline-none focus:border-green-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition",children:"Sign In"})})]}),w.jsxs("div",{className:"flex justify-center flex-col items-center mt-4",children:[w.jsxs("svg",{className:"cursor-pointer",onClick:e,width:"40",height:"auto",viewBox:"0 0 256 262",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",children:[w.jsx("path",{d:"M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027",fill:"#4285F4"}),w.jsx("path",{d:"M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1",fill:"#34A853"}),w.jsx("path",{d:"M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782",fill:"#FBBC05"}),w.jsx("path",{d:"M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251",fill:"#EB4335"})]}),w.jsx("small",{children:"Iniciar con Google"})]})]})})})};function Mk(){return w.jsx(w.Fragment,{children:w.jsx("div",{className:"bg-amber-100",children:w.jsx(kk,{})})})}function nT(){return w.jsx(w.Fragment,{children:w.jsx("div",{className:"transition-transform duration-300 ease-in-out"})})}const Uy=ne.createContext(void 0),Vk=({children:i})=>{const e=ny(),[t,r]=ne.useState(null);ne.useEffect(()=>{const m=Z1(e,p=>{r(p)});return()=>m()},[]);const[a,l]=ne.useState(!1),c=()=>{l(m=>!m)};return w.jsx(Uy.Provider,{value:{user:t,openMenu:a,toogleMenu:c},children:i})},iT=va(Ci),Lk=()=>{const[i,e]=ne.useState([]),[t,r]=ne.useState(""),[,a]=ne.useState([]),[l,c]=ne.useState([]),[m,p]=ne.useState(""),[g,v]=ne.useState(""),[E,S]=ne.useState("");ne.useEffect(()=>{(async()=>{try{const X=(await ku(sr(iT,"assignments"))).docs.map(W=>({id:W.id,...W.data()}));e(X)}catch(G){console.error(G)}})()},[]);const U=V=>{r(V);const G=i.find(X=>X.operator===V);G?(a(G.machines),c(G.machines.map(X=>({machine:X,horometroInicial:"",horometroFinal:"",observaciones:""})))):(a([]),c([]))},F=(V,G,X)=>{const W=[...l];W[V][G]=X,c(W)},K=async V=>{V.preventDefault();const G={operatorCode:t,fecha:m,horasAsignadas:g,paradasMayores:E,machines:l,timestamp:new Date().toISOString()};try{await Yf(sr(iT,"registro_horometros"),G),alert("Datos enviados correctamente ✅")}catch(X){console.error("Error al guardar en Firestore:",X),alert("Error al guardar los datos ❌")}};return w.jsx(w.Fragment,{children:w.jsx("div",{className:"flex p-5 w-full justify-center bg-gray-200 rounded-2xl backgroundForm",children:w.jsxs("form",{onSubmit:K,className:"w-full max-w-lg text-white",children:[w.jsxs("div",{className:"flex flex-wrap -mx-3 mb-6",children:[w.jsxs("div",{className:"w-full md:w-1/2 px-3 mb-6 md:mb-0",children:[w.jsx("label",{className:"block uppercase tracking-wide text-white text-xs font-bold mb-2",children:"Fecha"}),w.jsx("input",{type:"date",value:m,onChange:V=>p(V.target.value),className:"appearance-none block w-full bg-gray-200 text-blue-950 border border-blue-950 rounded py-3 px-4",required:!0})]}),w.jsxs("div",{className:"w-full md:w-1/2 px-3",children:[w.jsx("label",{className:"block uppercase tracking-wide text-white text-xs font-bold mb-2",children:"Código de operario"}),w.jsx("input",{type:"number",value:t,onChange:V=>U(V.target.value),placeholder:"000",className:"appearance-none block w-full bg-gray-200 text-blue-950 border border-blue-950 rounded py-3 px-4",required:!0})]})]}),w.jsxs("div",{className:"flex flex-wrap -mx-3 mb-6",children:[w.jsxs("div",{className:"w-full md:w-1/2 px-3",children:[w.jsx("label",{className:"block uppercase tracking-wide text-white text-xs font-bold mb-2",children:"Horas asignadas"}),w.jsx("input",{type:"text",value:g,onChange:V=>v(V.target.value),placeholder:"0",className:"appearance-none block w-full bg-gray-200 text-blue-950 border border-blue-950 rounded py-3 px-4",required:!0})]}),w.jsxs("div",{className:"w-full md:w-1/2 px-3",children:[w.jsx("label",{className:"block uppercase tracking-wide text-white text-xs font-bold mb-2",children:"Paradas mayores"}),w.jsx("input",{type:"text",value:E,onChange:V=>S(V.target.value),placeholder:"0",className:"appearance-none block w-full bg-gray-200 text-blue-950 border border-blue-950 rounded py-3 px-4",required:!0})]})]}),l.map((V,G)=>w.jsxs("div",{className:"flex flex-wrap -mx-3 border border-amber-400 p-3 mb-2",children:[w.jsxs("div",{className:"w-full md:w-1/3 px-3 mb-6 md:mb-0",children:[w.jsx("label",{className:"block uppercase text-white text-xs font-bold mb-2",children:"Horómetro inicial"}),w.jsx("input",{type:"number",placeholder:"00000000",value:V.horometroInicial,onChange:X=>F(G,"horometroInicial",X.target.value),className:"appearance-none block w-full bg-gray-200 text-blue-950 border border-gray-200 rounded py-3 px-4",required:!0})]}),w.jsxs("div",{className:"w-full md:w-1/3 px-3 mb-6 md:mb-0",children:[w.jsx("label",{className:"block uppercase text-white text-xs font-bold mb-2",children:"Máquina"}),w.jsx("input",{type:"text",value:V.machine,readOnly:!0,className:"appearance-none block w-full bg-gray-200 text-blue-950 border border-gray-200 rounded py-3 px-4",required:!0})]}),w.jsxs("div",{className:"w-full md:w-1/3 px-3 mb-6 md:mb-0",children:[w.jsx("label",{className:"block uppercase text-white text-xs font-bold mb-2",children:"Horómetro final"}),w.jsx("input",{type:"number",placeholder:"00000000",value:V.horometroFinal,onChange:X=>F(G,"horometroFinal",X.target.value),className:"appearance-none block w-full bg-gray-200 text-blue-950 border border-gray-200 rounded py-3 px-4",required:!0})]}),w.jsxs("div",{className:"w-full px-3",children:[w.jsx("label",{className:"block uppercase text-white text-xs font-bold mb-2",children:"Observaciones"}),w.jsx("textarea",{placeholder:"...",value:V.observaciones,onChange:X=>F(G,"observaciones",X.target.value),className:"appearance-none block w-full bg-gray-200 text-blue-950 border border-blue-950 rounded py-3 px-4"})]})]},G)),w.jsx("div",{className:"flex justify-center mt-4",children:w.jsx("button",{type:"submit",className:"cursor-pointer w-full py-2 rounded bg-blue-600 hover:bg-blue-800 transition-colors duration-300 text-white font-semibold",children:"Enviar"})})]})})})},Uk=()=>w.jsx("div",{children:w.jsx(Lk,{})}),Ep=va(Ci),jk=()=>{const[i,e]=ne.useState(""),[t,r]=ne.useState([]),[a,l]=ne.useState([]),[,c]=ne.useState([]);ne.useEffect(()=>{(async()=>{try{const E=(await ku(sr(Ep,"machines"))).docs.map(F=>({id:F.id,...F.data()}));l(E);const U=(await ku(sr(Ep,"operators"))).docs.map(F=>({id:F.id,...F.data()}));c(U)}catch(v){console.error("Error al obtener máquinas:",v)}})()},[]);const m=g=>{r(v=>v.includes(g)?v.filter(E=>E!==g):[...v,g])};async function p(g){g.preventDefault();const v={operator:i.toUpperCase(),machines:t,timestamp:It.now()};try{await Yf(sr(Ep,"assignments"),v),console.log("Asignación guardada correctamente:",v),e(""),r([]),alert("Asignación guardada exitosamente")}catch(E){console.error("Error al guardar la asignación:",E),alert("Hubo un error al guardar la asignación")}}return w.jsxs("div",{className:"p-6 rounded-lg shadow-md w-full max-w-lg mx-auto backgroundForm",children:[w.jsx("h2",{className:"text-xl font-bold mb-4 text-white",children:"Asignar Máquinas"}),w.jsxs("form",{onSubmit:p,className:"space-y-4",children:[w.jsxs("div",{children:[w.jsx("label",{className:"block mb-1 text-white",children:"Operario"}),w.jsx("input",{type:"text",value:i,onChange:g=>e(g.target.value),className:"w-full border px-3 bg-gray-200 py-2 rounded-md",required:!0})]}),w.jsxs("div",{children:[w.jsx("label",{className:"block mb-1 text-white",children:"Seleccionar maquinas"}),w.jsx("div",{className:"space-y-2 text-white pl-2",children:a&&a.map(g=>g.abbreviation?w.jsxs("div",{children:[w.jsx("input",{type:"checkbox",id:g.id,onChange:()=>m(g.abbreviation),checked:t.includes(g.abbreviation)}),w.jsx("label",{className:"pl-2",htmlFor:g.id,children:g.abbreviation})]},g.id):null)})]}),w.jsx("button",{type:"submit",className:"bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700",children:"Asignar"})]})]})};function rT(){return w.jsx(w.Fragment,{children:w.jsx(jk,{})})}const zk=[{title:"F1315",slug:"f1315"},{title:"Eficiencia",slug:"eficence"}];function Bk({item:i}){return w.jsx(zg,{to:`/picado/${i.slug}`,children:w.jsx("button",{className:"button",children:i.title})})}const Fk=()=>w.jsx(w.Fragment,{children:w.jsxs("div",{className:"flex flex-col items-center p-4 space-y-6 md:space-y-8",children:[w.jsx("div",{className:"flex flex-wrap justify-center gap-4",children:zk.map((i,e)=>w.jsx(Bk,{item:i},e))}),w.jsx("div",{className:"w-full max-w-4xl",children:w.jsx(jg,{})})]})}),sT=va(Ci),Tp=({editable:i=!1})=>{const[e,t]=ne.useState([]),[r,a]=ne.useState(null),[l,c]=ne.useState({}),[m,p]=ne.useState(null),[g,v]=ne.useState(null),E="Juan Pérez";ne.useEffect(()=>{(async()=>{try{const W=(await ku(sr(sT,"registro_horometros"))).docs.map(ce=>{const oe=ce.data();return{id:ce.id,...oe,originalMachines:oe.machines}});t(W)}catch(X){console.error("Error fetching collection:",X)}})()},[]);const S=(G,X)=>{a(G.id+"-"+X),c({...G.machines[X]})},U=(G,X)=>{c(W=>({...W,[G]:X}))},F=async(G,X)=>{var N;const W=e.findIndex(k=>k.id===G);if(W===-1)return;const ce=e[W],oe=[...ce.machines],de=(N=ce.originalMachines)==null?void 0:N[X];oe[X]={horometroFinal:l.horometroFinal??(de==null?void 0:de.horometroFinal)??"",horometroInicial:l.horometroInicial??(de==null?void 0:de.horometroInicial)??"",machine:l.machine??(de==null?void 0:de.machine)??"",observaciones:l.observaciones??(de==null?void 0:de.observaciones)??""};const D=Object.keys(l).filter(k=>l[k]!==de[k]),I={machines:oe,editadoPor:E,camposModificados:D.join(", "),fechaUltimaEdicion:new Date().toISOString()},R=Cy(sT,"registro_horometros",G);try{await Nk(R,I);const k=[...e];k[W]={...ce,machines:oe,...I},t(k),a(null)}catch(k){console.error("Error updating document:",k)}},K=(G,X)=>{const W=X.currentTarget.getBoundingClientRect();v({x:W.right+10,y:W.top}),p(G)},V=()=>{p(null),v(null)};return w.jsxs("div",{className:"p-6 w-full bg-white rounded-lg shadow-lg overflow-x-auto relative",children:[w.jsx("h2",{className:"text-xl font-bold mb-4",children:"Eficencias"}),w.jsxs("table",{className:"min-w-full border border-gray-300 text-sm text-left",children:[w.jsx("thead",{className:"backgroundForm text-white",children:w.jsxs("tr",{children:[w.jsx("th",{className:"px-3 py-2 border",children:"Fecha"}),w.jsx("th",{className:"px-3 py-2 border",children:"Operario"}),w.jsx("th",{className:"px-3 py-2 border",children:"Maquina"}),w.jsx("th",{className:"px-3 py-2 border",children:"Horometro inicial"}),w.jsx("th",{className:"px-3 py-2 border",children:"Horometro final"}),w.jsx("th",{className:"px-3 py-2 border",children:"Referencia"}),w.jsx("th",{className:"px-3 py-2 border",children:"Paradas mayores"}),w.jsx("th",{className:"px-3 py-2 border",children:"Observaciones"}),w.jsx("th",{className:"px-3 py-2 border",children:"Horas asignadas"}),w.jsx("th",{className:"px-3 py-2 border",children:"Total horas"}),i&&w.jsx("th",{className:"px-3 py-2 border",children:"Acciones"}),w.jsx("th",{className:"px-3 py-2 border",children:"📝"})," "]})}),w.jsx("tbody",{children:e.map(G=>{var X;return(X=G.machines)==null?void 0:X.map((W,ce)=>{const oe=parseFloat(W.horometroFinal),de=parseFloat(W.horometroInicial),D=isNaN(oe)||isNaN(de)?0:oe-de;let I="";D<-5?I="bg-red-400":D<5?I="bg-yellow-400":I="bg-green-400";const R=r===G.id+"-"+ce;return w.jsxs(Uu.Fragment,{children:[w.jsxs("tr",{className:`hover:bg-gray-100 ${I}`,children:[w.jsx("td",{className:"px-3 py-2 border",children:G.fecha}),w.jsx("td",{className:"px-3 py-2 border",children:G.operatorCode}),w.jsx("td",{className:"px-3 py-2 border",children:W.machine}),w.jsx("td",{className:"px-3 py-2 border",children:R?w.jsx("input",{type:"text",value:l.horometroInicial||W.horometroInicial,onChange:N=>U("horometroInicial",N.target.value),className:"w-full border p-1"}):W.horometroInicial}),w.jsx("td",{className:"px-3 py-2 border",children:R?w.jsx("input",{type:"text",value:l.horometroFinal||W.horometroFinal,onChange:N=>U("horometroFinal",N.target.value),className:"w-full border p-1"}):W.horometroFinal}),w.jsx("td",{className:"px-3 py-2 border",children:G.reference||""}),w.jsx("td",{className:"px-3 py-2 border",children:G.majorStops||""}),w.jsx("td",{className:"px-3 py-2 border",children:W.observaciones}),w.jsx("td",{className:"px-3 py-2 border",children:G.horasAsignadas}),w.jsx("td",{className:"px-3 py-2 border",children:D.toFixed(1)}),i&&w.jsx("td",{className:"px-3 py-2 border",children:R?w.jsx("button",{onClick:()=>F(G.id,ce),className:"bg-blue-500 text-white px-2 py-1 rounded",children:"Guardar"}):w.jsx("button",{onClick:()=>S(G,ce),className:"bg-gray-500 text-white px-2 py-1 rounded",children:"Editar"})}),w.jsx("td",{className:"px-3 py-2 border relative",children:G.editadoPor&&w.jsx("span",{className:"cursor-pointer",onMouseEnter:N=>K(G,N),onMouseLeave:V,children:"👤"})})]}),m===G&&g&&w.jsx("tr",{children:w.jsx("td",{colSpan:12,children:w.jsxs("div",{className:"fixed bg-white border border-gray-300 rounded shadow-lg p-3 max-w-sm z-50",style:{top:g.y,left:g.x,transform:"translateY(-50%)"},children:[w.jsx("div",{className:"text-sm font-semibold mb-2",children:"Información de edición"}),w.jsxs("div",{className:"text-sm mb-1",children:[w.jsx("strong",{children:"Por:"})," ",G.editadoPor]}),w.jsxs("div",{className:"text-sm mb-1",children:[w.jsx("strong",{children:"Fecha:"})," ",G.fechaUltimaEdicion]}),w.jsx("div",{className:"text-sm mb-2 font-semibold",children:"Cambios en máquinas:"}),G.machines.map((N,k)=>{var x;const M=(x=G.originalMachines)==null?void 0:x[k];return w.jsxs("div",{className:"mb-2 border-t pt-2",children:[w.jsxs("div",{className:"font-semibold mb-1",children:["Máquina: ",N.machine]}),w.jsxs("div",{className:"flex justify-between mb-1 text-gray-700",children:[w.jsx("div",{children:"Horómetro Inicial:"}),w.jsxs("div",{children:[M==null?void 0:M.horometroInicial," →"," ",N.horometroInicial]})]}),w.jsxs("div",{className:"flex justify-between mb-1 text-gray-700",children:[w.jsx("div",{children:"Horómetro Final:"}),w.jsxs("div",{children:[M==null?void 0:M.horometroFinal," →"," ",N.horometroFinal]})]}),w.jsxs("div",{className:"text-gray-700 mb-1",children:["Observaciones:"," ",M==null?void 0:M.observaciones," →"," ",N.observaciones]})]},k)})]})})})]},`${G.id}-${ce}`)})})})]})]})},qk=[{title:"Operarios",subtitle:"Gestión de tareas y seguimiento de operarios",url:"/picado"},{title:"Supervisores",subtitle:"Supervisión y control de actividades",url:"/supervisor"},{title:"Datos",subtitle:"Visualización y exportación de registros",url:"/data"},{title:"Configuracion",subtitle:"Ajustes del sistema y parámetros de operación",url:"/configurations"}],aT=ny(Ci),Hk=qk,Gk=({openMenu:i})=>{const[e,t]=ne.useState({user:null,photoURL:null}),r=Sf();ne.useEffect(()=>{const l=Z1(aT,c=>{t(c?{user:c.displayName||c.email||c.uid,photoURL:c.photoURL||null}:{user:null,photoURL:null})});return()=>{l()}},[]);const a=()=>{aN(aT).then(()=>{console.log("Sesion cerrada correctamente"),r("/")}).catch(l=>{console.log(l)})};return w.jsx(w.Fragment,{children:w.jsxs("div",{id:"menu",className:"bg-gray-900 min-h-screen z-10 text-slate-300 w-64 fixed top-0 h-screen overflow-y-scroll transition-transform duration-300 ease-in-out  translate-x-1 right-1",children:[w.jsx("div",{id:"logo",className:"my-4 px-6",children:w.jsxs("h1",{className:"text-lg md:text-2xl font-bold text-white",children:["El Caballo",w.jsx("span",{className:"text-blue-500",children:"S.A"}),"."]})}),w.jsxs("div",{id:"profile",className:"px-6 py-10",children:[w.jsx("p",{className:"text-slate-500",children:"Bienvenido,"}),w.jsxs("a",{href:"#",className:"inline-flex space-x-2 items-center",children:[w.jsx("span",{children:e.photoURL?w.jsx("img",{className:"rounded-full w-full h-auto",src:e.photoURL,alt:""}):w.jsx("div",{children:"Sin foto"})}),w.jsx("span",{className:"text-sm md:text-base font-bold",children:e.user?w.jsx("p",{children:e.user}):w.jsx("p",{children:"No hay usuario autenticado"})})]})]}),w.jsx("div",{className:"flex justify-center items-center pb-5",children:w.jsx("button",{onClick:a,className:"bg-red-600 w-full rounded-2xl mx-5 hover:bg-white/8 cursor-pointer",children:"Salir"})}),w.jsx("div",{id:"nav",className:"w-full px-6",children:Hk.map((l,c)=>w.jsx(zg,{to:l.url,className:"w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150",children:w.jsxs("div",{className:"flex flex-col",children:[w.jsx("span",{className:"text-lg font-bold leading-5 text-white",children:l.title}),w.jsx("span",{className:"text-sm text-white/50 hidden md:block",children:l.subtitle})]})},c))})]})})};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const $k={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function Kk(i,e,t){return(e=Qk(e))in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function oT(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(i);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(i,a).enumerable})),t.push.apply(t,r)}return t}function re(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?oT(Object(t),!0).forEach(function(r){Kk(i,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):oT(Object(t)).forEach(function(r){Object.defineProperty(i,r,Object.getOwnPropertyDescriptor(t,r))})}return i}function Yk(i,e){if(typeof i!="object"||!i)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var r=t.call(i,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function Qk(i){var e=Yk(i,"string");return typeof e=="symbol"?e:e+""}const lT=()=>{};let jy={},YS={},QS=null,XS={mark:lT,measure:lT};try{typeof window<"u"&&(jy=window),typeof document<"u"&&(YS=document),typeof MutationObserver<"u"&&(QS=MutationObserver),typeof performance<"u"&&(XS=performance)}catch{}const{userAgent:uT=""}=jy.navigator||{},ds=jy,st=YS,cT=QS,xh=XS;ds.document;const pr=!!st.documentElement&&!!st.head&&typeof st.addEventListener=="function"&&typeof st.createElement=="function",WS=~uT.indexOf("MSIE")||~uT.indexOf("Trident/");var Xk=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Wk=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,JS={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Jk={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},ZS=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],sn="classic",Qf="duotone",Zk="sharp",eM="sharp-duotone",ew=[sn,Qf,Zk,eM],tM={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},nM={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},iM=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),rM={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},sM=["fak","fa-kit","fakd","fa-kit-duotone"],hT={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},aM=["kit"],oM={kit:{"fa-kit":"fak"}},lM=["fak","fakd"],uM={kit:{fak:"fa-kit"}},fT={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Nh={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},cM=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],hM=["fak","fa-kit","fakd","fa-kit-duotone"],fM={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},dM={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},mM={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},hg={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},pM=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],fg=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...cM,...pM],gM=["solid","regular","light","thin","duotone","brands"],tw=[1,2,3,4,5,6,7,8,9,10],yM=tw.concat([11,12,13,14,15,16,17,18,19,20]),vM=[...Object.keys(mM),...gM,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Nh.GROUP,Nh.SWAP_OPACITY,Nh.PRIMARY,Nh.SECONDARY].concat(tw.map(i=>"".concat(i,"x"))).concat(yM.map(i=>"w-".concat(i))),_M={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const hr="___FONT_AWESOME___",dg=16,nw="fa",iw="svg-inline--fa",fa="data-fa-i2svg",mg="data-fa-pseudo-element",bM="data-fa-pseudo-element-pending",zy="data-prefix",By="data-icon",dT="fontawesome-i2svg",EM="async",TM=["HTML","HEAD","STYLE","SCRIPT"],rw=(()=>{try{return!0}catch{return!1}})();function Yu(i){return new Proxy(i,{get(e,t){return t in e?e[t]:e[sn]}})}const sw=re({},JS);sw[sn]=re(re(re(re({},{"fa-duotone":"duotone"}),JS[sn]),hT.kit),hT["kit-duotone"]);const AM=Yu(sw),pg=re({},rM);pg[sn]=re(re(re(re({},{duotone:"fad"}),pg[sn]),fT.kit),fT["kit-duotone"]);const mT=Yu(pg),gg=re({},hg);gg[sn]=re(re({},gg[sn]),uM.kit);const Fy=Yu(gg),yg=re({},dM);yg[sn]=re(re({},yg[sn]),oM.kit);Yu(yg);const SM=Xk,aw="fa-layers-text",wM=Wk,IM=re({},tM);Yu(IM);const RM=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ap=Jk,CM=[...aM,...vM],_u=ds.FontAwesomeConfig||{};function xM(i){var e=st.querySelector("script["+i+"]");if(e)return e.getAttribute(i)}function NM(i){return i===""?!0:i==="false"?!1:i==="true"?!0:i}st&&typeof st.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[t,r]=e;const a=NM(xM(t));a!=null&&(_u[r]=a)});const ow={styleDefault:"solid",familyDefault:sn,cssPrefix:nw,replacementClass:iw,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};_u.familyPrefix&&(_u.cssPrefix=_u.familyPrefix);const Lo=re(re({},ow),_u);Lo.autoReplaceSvg||(Lo.observeMutations=!1);const me={};Object.keys(ow).forEach(i=>{Object.defineProperty(me,i,{enumerable:!0,set:function(e){Lo[i]=e,bu.forEach(t=>t(me))},get:function(){return Lo[i]}})});Object.defineProperty(me,"familyPrefix",{enumerable:!0,set:function(i){Lo.cssPrefix=i,bu.forEach(e=>e(me))},get:function(){return Lo.cssPrefix}});ds.FontAwesomeConfig=me;const bu=[];function OM(i){return bu.push(i),()=>{bu.splice(bu.indexOf(i),1)}}const $r=dg,pi={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function DM(i){if(!i||!pr)return;const e=st.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=i;const t=st.head.childNodes;let r=null;for(let a=t.length-1;a>-1;a--){const l=t[a],c=(l.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(c)>-1&&(r=l)}return st.head.insertBefore(e,r),i}const PM="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Mu(){let i=12,e="";for(;i-- >0;)e+=PM[Math.random()*62|0];return e}function Qo(i){const e=[];for(let t=(i||[]).length>>>0;t--;)e[t]=i[t];return e}function qy(i){return i.classList?Qo(i.classList):(i.getAttribute("class")||"").split(" ").filter(e=>e)}function lw(i){return"".concat(i).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function kM(i){return Object.keys(i||{}).reduce((e,t)=>e+"".concat(t,'="').concat(lw(i[t]),'" '),"").trim()}function Xf(i){return Object.keys(i||{}).reduce((e,t)=>e+"".concat(t,": ").concat(i[t].trim(),";"),"")}function Hy(i){return i.size!==pi.size||i.x!==pi.x||i.y!==pi.y||i.rotate!==pi.rotate||i.flipX||i.flipY}function MM(i){let{transform:e,containerWidth:t,iconWidth:r}=i;const a={transform:"translate(".concat(t/2," 256)")},l="translate(".concat(e.x*32,", ").concat(e.y*32,") "),c="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),m="rotate(".concat(e.rotate," 0 0)"),p={transform:"".concat(l," ").concat(c," ").concat(m)},g={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:p,path:g}}function VM(i){let{transform:e,width:t=dg,height:r=dg,startCentered:a=!1}=i,l="";return a&&WS?l+="translate(".concat(e.x/$r-t/2,"em, ").concat(e.y/$r-r/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/$r,"em), calc(-50% + ").concat(e.y/$r,"em)) "):l+="translate(".concat(e.x/$r,"em, ").concat(e.y/$r,"em) "),l+="scale(".concat(e.size/$r*(e.flipX?-1:1),", ").concat(e.size/$r*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var LM=`:root, :host {
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
}`;function uw(){const i=nw,e=iw,t=me.cssPrefix,r=me.replacementClass;let a=LM;if(t!==i||r!==e){const l=new RegExp("\\.".concat(i,"\\-"),"g"),c=new RegExp("\\--".concat(i,"\\-"),"g"),m=new RegExp("\\.".concat(e),"g");a=a.replace(l,".".concat(t,"-")).replace(c,"--".concat(t,"-")).replace(m,".".concat(r))}return a}let pT=!1;function Sp(){me.autoAddCss&&!pT&&(DM(uw()),pT=!0)}var UM={mixout(){return{dom:{css:uw,insertCss:Sp}}},hooks(){return{beforeDOMElementCreation(){Sp()},beforeI2svg(){Sp()}}}};const fr=ds||{};fr[hr]||(fr[hr]={});fr[hr].styles||(fr[hr].styles={});fr[hr].hooks||(fr[hr].hooks={});fr[hr].shims||(fr[hr].shims=[]);var gi=fr[hr];const cw=[],hw=function(){st.removeEventListener("DOMContentLoaded",hw),mf=1,cw.map(i=>i())};let mf=!1;pr&&(mf=(st.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(st.readyState),mf||st.addEventListener("DOMContentLoaded",hw));function jM(i){pr&&(mf?setTimeout(i,0):cw.push(i))}function Qu(i){const{tag:e,attributes:t={},children:r=[]}=i;return typeof i=="string"?lw(i):"<".concat(e," ").concat(kM(t),">").concat(r.map(Qu).join(""),"</").concat(e,">")}function gT(i,e,t){if(i&&i[e]&&i[e][t])return{prefix:e,iconName:t,icon:i[e][t]}}var wp=function(e,t,r,a){var l=Object.keys(e),c=l.length,m=t,p,g,v;for(r===void 0?(p=1,v=e[l[0]]):(p=0,v=r);p<c;p++)g=l[p],v=m(v,e[g],g,e);return v};function zM(i){const e=[];let t=0;const r=i.length;for(;t<r;){const a=i.charCodeAt(t++);if(a>=55296&&a<=56319&&t<r){const l=i.charCodeAt(t++);(l&64512)==56320?e.push(((a&1023)<<10)+(l&1023)+65536):(e.push(a),t--)}else e.push(a)}return e}function vg(i){const e=zM(i);return e.length===1?e[0].toString(16):null}function BM(i,e){const t=i.length;let r=i.charCodeAt(e),a;return r>=55296&&r<=56319&&t>e+1&&(a=i.charCodeAt(e+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function yT(i){return Object.keys(i).reduce((e,t)=>{const r=i[t];return!!r.icon?e[r.iconName]=r.icon:e[t]=r,e},{})}function _g(i,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=t,a=yT(e);typeof gi.hooks.addPack=="function"&&!r?gi.hooks.addPack(i,yT(e)):gi.styles[i]=re(re({},gi.styles[i]||{}),a),i==="fas"&&_g("fa",e)}const{styles:Vu,shims:FM}=gi,fw=Object.keys(Fy),qM=fw.reduce((i,e)=>(i[e]=Object.keys(Fy[e]),i),{});let Gy=null,dw={},mw={},pw={},gw={},yw={};function HM(i){return~CM.indexOf(i)}function GM(i,e){const t=e.split("-"),r=t[0],a=t.slice(1).join("-");return r===i&&a!==""&&!HM(a)?a:null}const vw=()=>{const i=r=>wp(Vu,(a,l,c)=>(a[c]=wp(l,r,{}),a),{});dw=i((r,a,l)=>(a[3]&&(r[a[3]]=l),a[2]&&a[2].filter(m=>typeof m=="number").forEach(m=>{r[m.toString(16)]=l}),r)),mw=i((r,a,l)=>(r[l]=l,a[2]&&a[2].filter(m=>typeof m=="string").forEach(m=>{r[m]=l}),r)),yw=i((r,a,l)=>{const c=a[2];return r[l]=l,c.forEach(m=>{r[m]=l}),r});const e="far"in Vu||me.autoFetchSvg,t=wp(FM,(r,a)=>{const l=a[0];let c=a[1];const m=a[2];return c==="far"&&!e&&(c="fas"),typeof l=="string"&&(r.names[l]={prefix:c,iconName:m}),typeof l=="number"&&(r.unicodes[l.toString(16)]={prefix:c,iconName:m}),r},{names:{},unicodes:{}});pw=t.names,gw=t.unicodes,Gy=Wf(me.styleDefault,{family:me.familyDefault})};OM(i=>{Gy=Wf(i.styleDefault,{family:me.familyDefault})});vw();function $y(i,e){return(dw[i]||{})[e]}function $M(i,e){return(mw[i]||{})[e]}function oa(i,e){return(yw[i]||{})[e]}function _w(i){return pw[i]||{prefix:null,iconName:null}}function KM(i){const e=gw[i],t=$y("fas",i);return e||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function ms(){return Gy}const bw=()=>({prefix:null,iconName:null,rest:[]});function YM(i){let e=sn;const t=fw.reduce((r,a)=>(r[a]="".concat(me.cssPrefix,"-").concat(a),r),{});return ew.forEach(r=>{(i.includes(t[r])||i.some(a=>qM[r].includes(a)))&&(e=r)}),e}function Wf(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:t=sn}=e,r=AM[t][i];if(t===Qf&&!i)return"fad";const a=mT[t][i]||mT[t][r],l=i in gi.styles?i:null;return a||l||null}function QM(i){let e=[],t=null;return i.forEach(r=>{const a=GM(me.cssPrefix,r);a?t=a:r&&e.push(r)}),{iconName:t,rest:e}}function vT(i){return i.sort().filter((e,t,r)=>r.indexOf(e)===t)}function Jf(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:t=!1}=e;let r=null;const a=fg.concat(hM),l=vT(i.filter(E=>a.includes(E))),c=vT(i.filter(E=>!fg.includes(E))),m=l.filter(E=>(r=E,!ZS.includes(E))),[p=null]=m,g=YM(l),v=re(re({},QM(c)),{},{prefix:Wf(p,{family:g})});return re(re(re({},v),ZM({values:i,family:g,styles:Vu,config:me,canonical:v,givenPrefix:r})),XM(t,r,v))}function XM(i,e,t){let{prefix:r,iconName:a}=t;if(i||!r||!a)return{prefix:r,iconName:a};const l=e==="fa"?_w(a):{},c=oa(r,a);return a=l.iconName||c||a,r=l.prefix||r,r==="far"&&!Vu.far&&Vu.fas&&!me.autoFetchSvg&&(r="fas"),{prefix:r,iconName:a}}const WM=ew.filter(i=>i!==sn||i!==Qf),JM=Object.keys(hg).filter(i=>i!==sn).map(i=>Object.keys(hg[i])).flat();function ZM(i){const{values:e,family:t,canonical:r,givenPrefix:a="",styles:l={},config:c={}}=i,m=t===Qf,p=e.includes("fa-duotone")||e.includes("fad"),g=c.familyDefault==="duotone",v=r.prefix==="fad"||r.prefix==="fa-duotone";if(!m&&(p||g||v)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&WM.includes(t)&&(Object.keys(l).find(S=>JM.includes(S))||c.autoFetchSvg)){const S=iM.get(t).defaultShortPrefixId;r.prefix=S,r.iconName=oa(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||a==="fa")&&(r.prefix=ms()||"fas"),r}class e4{constructor(){this.definitions={}}add(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];const a=t.reduce(this._pullDefinitions,{});Object.keys(a).forEach(l=>{this.definitions[l]=re(re({},this.definitions[l]||{}),a[l]),_g(l,a[l]);const c=Fy[sn][l];c&&_g(c,a[l]),vw()})}reset(){this.definitions={}}_pullDefinitions(e,t){const r=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(r).map(a=>{const{prefix:l,iconName:c,icon:m}=r[a],p=m[2];e[l]||(e[l]={}),p.length>0&&p.forEach(g=>{typeof g=="string"&&(e[l][g]=m)}),e[l][c]=m}),e}}let _T=[],To={};const Io={},t4=Object.keys(Io);function n4(i,e){let{mixoutsTo:t}=e;return _T=i,To={},Object.keys(Io).forEach(r=>{t4.indexOf(r)===-1&&delete Io[r]}),_T.forEach(r=>{const a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(l=>{typeof a[l]=="function"&&(t[l]=a[l]),typeof a[l]=="object"&&Object.keys(a[l]).forEach(c=>{t[l]||(t[l]={}),t[l][c]=a[l][c]})}),r.hooks){const l=r.hooks();Object.keys(l).forEach(c=>{To[c]||(To[c]=[]),To[c].push(l[c])})}r.provides&&r.provides(Io)}),t}function bg(i,e){for(var t=arguments.length,r=new Array(t>2?t-2:0),a=2;a<t;a++)r[a-2]=arguments[a];return(To[i]||[]).forEach(c=>{e=c.apply(null,[e,...r])}),e}function da(i){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];(To[i]||[]).forEach(l=>{l.apply(null,t)})}function ps(){const i=arguments[0],e=Array.prototype.slice.call(arguments,1);return Io[i]?Io[i].apply(null,e):void 0}function Eg(i){i.prefix==="fa"&&(i.prefix="fas");let{iconName:e}=i;const t=i.prefix||ms();if(e)return e=oa(t,e)||e,gT(Ew.definitions,t,e)||gT(gi.styles,t,e)}const Ew=new e4,i4=()=>{me.autoReplaceSvg=!1,me.observeMutations=!1,da("noAuto")},r4={i2svg:function(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return pr?(da("beforeI2svg",i),ps("pseudoElements2svg",i),ps("i2svg",i)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=i;me.autoReplaceSvg===!1&&(me.autoReplaceSvg=!0),me.observeMutations=!0,jM(()=>{a4({autoReplaceSvgRoot:e}),da("watch",i)})}},s4={icon:i=>{if(i===null)return null;if(typeof i=="object"&&i.prefix&&i.iconName)return{prefix:i.prefix,iconName:oa(i.prefix,i.iconName)||i.iconName};if(Array.isArray(i)&&i.length===2){const e=i[1].indexOf("fa-")===0?i[1].slice(3):i[1],t=Wf(i[0]);return{prefix:t,iconName:oa(t,e)||e}}if(typeof i=="string"&&(i.indexOf("".concat(me.cssPrefix,"-"))>-1||i.match(SM))){const e=Jf(i.split(" "),{skipLookups:!0});return{prefix:e.prefix||ms(),iconName:oa(e.prefix,e.iconName)||e.iconName}}if(typeof i=="string"){const e=ms();return{prefix:e,iconName:oa(e,i)||i}}}},In={noAuto:i4,config:me,dom:r4,parse:s4,library:Ew,findIconDefinition:Eg,toHtml:Qu},a4=function(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=st}=i;(Object.keys(gi.styles).length>0||me.autoFetchSvg)&&pr&&me.autoReplaceSvg&&In.dom.i2svg({node:e})};function Zf(i,e){return Object.defineProperty(i,"abstract",{get:e}),Object.defineProperty(i,"html",{get:function(){return i.abstract.map(t=>Qu(t))}}),Object.defineProperty(i,"node",{get:function(){if(!pr)return;const t=st.createElement("div");return t.innerHTML=i.html,t.children}}),i}function o4(i){let{children:e,main:t,mask:r,attributes:a,styles:l,transform:c}=i;if(Hy(c)&&t.found&&!r.found){const{width:m,height:p}=t,g={x:m/p/2,y:.5};a.style=Xf(re(re({},l),{},{"transform-origin":"".concat(g.x+c.x/16,"em ").concat(g.y+c.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}function l4(i){let{prefix:e,iconName:t,children:r,attributes:a,symbol:l}=i;const c=l===!0?"".concat(e,"-").concat(me.cssPrefix,"-").concat(t):l;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:re(re({},a),{},{id:c}),children:r}]}]}function Ky(i){const{icons:{main:e,mask:t},prefix:r,iconName:a,transform:l,symbol:c,title:m,maskId:p,titleId:g,extra:v,watchable:E=!1}=i,{width:S,height:U}=t.found?t:e,F=lM.includes(r),K=[me.replacementClass,a?"".concat(me.cssPrefix,"-").concat(a):""].filter(oe=>v.classes.indexOf(oe)===-1).filter(oe=>oe!==""||!!oe).concat(v.classes).join(" ");let V={children:[],attributes:re(re({},v.attributes),{},{"data-prefix":r,"data-icon":a,class:K,role:v.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(U)})};const G=F&&!~v.classes.indexOf("fa-fw")?{width:"".concat(S/U*16*.0625,"em")}:{};E&&(V.attributes[fa]=""),m&&(V.children.push({tag:"title",attributes:{id:V.attributes["aria-labelledby"]||"title-".concat(g||Mu())},children:[m]}),delete V.attributes.title);const X=re(re({},V),{},{prefix:r,iconName:a,main:e,mask:t,maskId:p,transform:l,symbol:c,styles:re(re({},G),v.styles)}),{children:W,attributes:ce}=t.found&&e.found?ps("generateAbstractMask",X)||{children:[],attributes:{}}:ps("generateAbstractIcon",X)||{children:[],attributes:{}};return X.children=W,X.attributes=ce,c?l4(X):o4(X)}function bT(i){const{content:e,width:t,height:r,transform:a,title:l,extra:c,watchable:m=!1}=i,p=re(re(re({},c.attributes),l?{title:l}:{}),{},{class:c.classes.join(" ")});m&&(p[fa]="");const g=re({},c.styles);Hy(a)&&(g.transform=VM({transform:a,startCentered:!0,width:t,height:r}),g["-webkit-transform"]=g.transform);const v=Xf(g);v.length>0&&(p.style=v);const E=[];return E.push({tag:"span",attributes:p,children:[e]}),l&&E.push({tag:"span",attributes:{class:"sr-only"},children:[l]}),E}function u4(i){const{content:e,title:t,extra:r}=i,a=re(re(re({},r.attributes),t?{title:t}:{}),{},{class:r.classes.join(" ")}),l=Xf(r.styles);l.length>0&&(a.style=l);const c=[];return c.push({tag:"span",attributes:a,children:[e]}),t&&c.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),c}const{styles:Ip}=gi;function Tg(i){const e=i[0],t=i[1],[r]=i.slice(4);let a=null;return Array.isArray(r)?a={tag:"g",attributes:{class:"".concat(me.cssPrefix,"-").concat(Ap.GROUP)},children:[{tag:"path",attributes:{class:"".concat(me.cssPrefix,"-").concat(Ap.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(me.cssPrefix,"-").concat(Ap.PRIMARY),fill:"currentColor",d:r[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:t,icon:a}}const c4={found:!1,width:512,height:512};function h4(i,e){!rw&&!me.showMissingIcons&&i&&console.error('Icon with name "'.concat(i,'" and prefix "').concat(e,'" is missing.'))}function Ag(i,e){let t=e;return e==="fa"&&me.styleDefault!==null&&(e=ms()),new Promise((r,a)=>{if(t==="fa"){const l=_w(i)||{};i=l.iconName||i,e=l.prefix||e}if(i&&e&&Ip[e]&&Ip[e][i]){const l=Ip[e][i];return r(Tg(l))}h4(i,e),r(re(re({},c4),{},{icon:me.showMissingIcons&&i?ps("missingIconAbstract")||{}:{}}))})}const ET=()=>{},Sg=me.measurePerformance&&xh&&xh.mark&&xh.measure?xh:{mark:ET,measure:ET},fu='FA "6.7.2"',f4=i=>(Sg.mark("".concat(fu," ").concat(i," begins")),()=>Tw(i)),Tw=i=>{Sg.mark("".concat(fu," ").concat(i," ends")),Sg.measure("".concat(fu," ").concat(i),"".concat(fu," ").concat(i," begins"),"".concat(fu," ").concat(i," ends"))};var Yy={begin:f4,end:Tw};const qh=()=>{};function TT(i){return typeof(i.getAttribute?i.getAttribute(fa):null)=="string"}function d4(i){const e=i.getAttribute?i.getAttribute(zy):null,t=i.getAttribute?i.getAttribute(By):null;return e&&t}function m4(i){return i&&i.classList&&i.classList.contains&&i.classList.contains(me.replacementClass)}function p4(){return me.autoReplaceSvg===!0?Hh.replace:Hh[me.autoReplaceSvg]||Hh.replace}function g4(i){return st.createElementNS("http://www.w3.org/2000/svg",i)}function y4(i){return st.createElement(i)}function Aw(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:t=i.tag==="svg"?g4:y4}=e;if(typeof i=="string")return st.createTextNode(i);const r=t(i.tag);return Object.keys(i.attributes||[]).forEach(function(l){r.setAttribute(l,i.attributes[l])}),(i.children||[]).forEach(function(l){r.appendChild(Aw(l,{ceFn:t}))}),r}function v4(i){let e=" ".concat(i.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Hh={replace:function(i){const e=i[0];if(e.parentNode)if(i[1].forEach(t=>{e.parentNode.insertBefore(Aw(t),e)}),e.getAttribute(fa)===null&&me.keepOriginalSource){let t=st.createComment(v4(e));e.parentNode.replaceChild(t,e)}else e.remove()},nest:function(i){const e=i[0],t=i[1];if(~qy(e).indexOf(me.replacementClass))return Hh.replace(i);const r=new RegExp("".concat(me.cssPrefix,"-.*"));if(delete t[0].attributes.id,t[0].attributes.class){const l=t[0].attributes.class.split(" ").reduce((c,m)=>(m===me.replacementClass||m.match(r)?c.toSvg.push(m):c.toNode.push(m),c),{toNode:[],toSvg:[]});t[0].attributes.class=l.toSvg.join(" "),l.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",l.toNode.join(" "))}const a=t.map(l=>Qu(l)).join(`
`);e.setAttribute(fa,""),e.innerHTML=a}};function AT(i){i()}function Sw(i,e){const t=typeof e=="function"?e:qh;if(i.length===0)t();else{let r=AT;me.mutateApproach===EM&&(r=ds.requestAnimationFrame||AT),r(()=>{const a=p4(),l=Yy.begin("mutate");i.map(a),l(),t()})}}let Qy=!1;function ww(){Qy=!0}function wg(){Qy=!1}let pf=null;function ST(i){if(!cT||!me.observeMutations)return;const{treeCallback:e=qh,nodeCallback:t=qh,pseudoElementsCallback:r=qh,observeMutationsRoot:a=st}=i;pf=new cT(l=>{if(Qy)return;const c=ms();Qo(l).forEach(m=>{if(m.type==="childList"&&m.addedNodes.length>0&&!TT(m.addedNodes[0])&&(me.searchPseudoElements&&r(m.target),e(m.target)),m.type==="attributes"&&m.target.parentNode&&me.searchPseudoElements&&r(m.target.parentNode),m.type==="attributes"&&TT(m.target)&&~RM.indexOf(m.attributeName))if(m.attributeName==="class"&&d4(m.target)){const{prefix:p,iconName:g}=Jf(qy(m.target));m.target.setAttribute(zy,p||c),g&&m.target.setAttribute(By,g)}else m4(m.target)&&t(m.target)})}),pr&&pf.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function _4(){pf&&pf.disconnect()}function b4(i){const e=i.getAttribute("style");let t=[];return e&&(t=e.split(";").reduce((r,a)=>{const l=a.split(":"),c=l[0],m=l.slice(1);return c&&m.length>0&&(r[c]=m.join(":").trim()),r},{})),t}function E4(i){const e=i.getAttribute("data-prefix"),t=i.getAttribute("data-icon"),r=i.innerText!==void 0?i.innerText.trim():"";let a=Jf(qy(i));return a.prefix||(a.prefix=ms()),e&&t&&(a.prefix=e,a.iconName=t),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=$M(a.prefix,i.innerText)||$y(a.prefix,vg(i.innerText))),!a.iconName&&me.autoFetchSvg&&i.firstChild&&i.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=i.firstChild.data)),a}function T4(i){const e=Qo(i.attributes).reduce((a,l)=>(a.name!=="class"&&a.name!=="style"&&(a[l.name]=l.value),a),{}),t=i.getAttribute("title"),r=i.getAttribute("data-fa-title-id");return me.autoA11y&&(t?e["aria-labelledby"]="".concat(me.replacementClass,"-title-").concat(r||Mu()):(e["aria-hidden"]="true",e.focusable="false")),e}function A4(){return{iconName:null,title:null,titleId:null,prefix:null,transform:pi,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function wT(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:t,prefix:r,rest:a}=E4(i),l=T4(i),c=bg("parseNodeAttributes",{},i);let m=e.styleParser?b4(i):[];return re({iconName:t,title:i.getAttribute("title"),titleId:i.getAttribute("data-fa-title-id"),prefix:r,transform:pi,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:m,attributes:l}},c)}const{styles:S4}=gi;function Iw(i){const e=me.autoReplaceSvg==="nest"?wT(i,{styleParser:!1}):wT(i);return~e.extra.classes.indexOf(aw)?ps("generateLayersText",i,e):ps("generateSvgReplacementMutation",i,e)}function w4(){return[...sM,...fg]}function IT(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!pr)return Promise.resolve();const t=st.documentElement.classList,r=v=>t.add("".concat(dT,"-").concat(v)),a=v=>t.remove("".concat(dT,"-").concat(v)),l=me.autoFetchSvg?w4():ZS.concat(Object.keys(S4));l.includes("fa")||l.push("fa");const c=[".".concat(aw,":not([").concat(fa,"])")].concat(l.map(v=>".".concat(v,":not([").concat(fa,"])"))).join(", ");if(c.length===0)return Promise.resolve();let m=[];try{m=Qo(i.querySelectorAll(c))}catch{}if(m.length>0)r("pending"),a("complete");else return Promise.resolve();const p=Yy.begin("onTree"),g=m.reduce((v,E)=>{try{const S=Iw(E);S&&v.push(S)}catch(S){rw||S.name==="MissingIcon"&&console.error(S)}return v},[]);return new Promise((v,E)=>{Promise.all(g).then(S=>{Sw(S,()=>{r("active"),r("complete"),a("pending"),typeof e=="function"&&e(),p(),v()})}).catch(S=>{p(),E(S)})})}function I4(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Iw(i).then(t=>{t&&Sw([t],e)})}function R4(i){return function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:Eg(e||{});let{mask:a}=t;return a&&(a=(a||{}).icon?a:Eg(a||{})),i(r,re(re({},t),{},{mask:a}))}}const C4=function(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:t=pi,symbol:r=!1,mask:a=null,maskId:l=null,title:c=null,titleId:m=null,classes:p=[],attributes:g={},styles:v={}}=e;if(!i)return;const{prefix:E,iconName:S,icon:U}=i;return Zf(re({type:"icon"},i),()=>(da("beforeDOMElementCreation",{iconDefinition:i,params:e}),me.autoA11y&&(c?g["aria-labelledby"]="".concat(me.replacementClass,"-title-").concat(m||Mu()):(g["aria-hidden"]="true",g.focusable="false")),Ky({icons:{main:Tg(U),mask:a?Tg(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:E,iconName:S,transform:re(re({},pi),t),symbol:r,title:c,maskId:l,titleId:m,extra:{attributes:g,styles:v,classes:p}})))};var x4={mixout(){return{icon:R4(C4)}},hooks(){return{mutationObserverCallbacks(i){return i.treeCallback=IT,i.nodeCallback=I4,i}}},provides(i){i.i2svg=function(e){const{node:t=st,callback:r=()=>{}}=e;return IT(t,r)},i.generateSvgReplacementMutation=function(e,t){const{iconName:r,title:a,titleId:l,prefix:c,transform:m,symbol:p,mask:g,maskId:v,extra:E}=t;return new Promise((S,U)=>{Promise.all([Ag(r,c),g.iconName?Ag(g.iconName,g.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(F=>{let[K,V]=F;S([e,Ky({icons:{main:K,mask:V},prefix:c,iconName:r,transform:m,symbol:p,maskId:v,title:a,titleId:l,extra:E,watchable:!0})])}).catch(U)})},i.generateAbstractIcon=function(e){let{children:t,attributes:r,main:a,transform:l,styles:c}=e;const m=Xf(c);m.length>0&&(r.style=m);let p;return Hy(l)&&(p=ps("generateAbstractTransformGrouping",{main:a,transform:l,containerWidth:a.width,iconWidth:a.width})),t.push(p||a.icon),{children:t,attributes:r}}}},N4={mixout(){return{layer(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:t=[]}=e;return Zf({type:"layer"},()=>{da("beforeDOMElementCreation",{assembler:i,params:e});let r=[];return i(a=>{Array.isArray(a)?a.map(l=>{r=r.concat(l.abstract)}):r=r.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(me.cssPrefix,"-layers"),...t].join(" ")},children:r}]})}}}},O4={mixout(){return{counter(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:t=null,classes:r=[],attributes:a={},styles:l={}}=e;return Zf({type:"counter",content:i},()=>(da("beforeDOMElementCreation",{content:i,params:e}),u4({content:i.toString(),title:t,extra:{attributes:a,styles:l,classes:["".concat(me.cssPrefix,"-layers-counter"),...r]}})))}}}},D4={mixout(){return{text(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:t=pi,title:r=null,classes:a=[],attributes:l={},styles:c={}}=e;return Zf({type:"text",content:i},()=>(da("beforeDOMElementCreation",{content:i,params:e}),bT({content:i,transform:re(re({},pi),t),title:r,extra:{attributes:l,styles:c,classes:["".concat(me.cssPrefix,"-layers-text"),...a]}})))}}},provides(i){i.generateLayersText=function(e,t){const{title:r,transform:a,extra:l}=t;let c=null,m=null;if(WS){const p=parseInt(getComputedStyle(e).fontSize,10),g=e.getBoundingClientRect();c=g.width/p,m=g.height/p}return me.autoA11y&&!r&&(l.attributes["aria-hidden"]="true"),Promise.resolve([e,bT({content:e.innerHTML,width:c,height:m,transform:a,title:r,extra:l,watchable:!0})])}}};const P4=new RegExp('"',"ug"),RT=[1105920,1112319],CT=re(re(re(re({},{FontAwesome:{normal:"fas",400:"fas"}}),nM),_M),fM),Ig=Object.keys(CT).reduce((i,e)=>(i[e.toLowerCase()]=CT[e],i),{}),k4=Object.keys(Ig).reduce((i,e)=>{const t=Ig[e];return i[e]=t[900]||[...Object.entries(t)][0][1],i},{});function M4(i){const e=i.replace(P4,""),t=BM(e,0),r=t>=RT[0]&&t<=RT[1],a=e.length===2?e[0]===e[1]:!1;return{value:vg(a?e[0]:e),isSecondary:r||a}}function V4(i,e){const t=i.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),a=isNaN(r)?"normal":r;return(Ig[t]||{})[a]||k4[t]}function xT(i,e){const t="".concat(bM).concat(e.replace(":","-"));return new Promise((r,a)=>{if(i.getAttribute(t)!==null)return r();const c=Qo(i.children).filter(S=>S.getAttribute(mg)===e)[0],m=ds.getComputedStyle(i,e),p=m.getPropertyValue("font-family"),g=p.match(wM),v=m.getPropertyValue("font-weight"),E=m.getPropertyValue("content");if(c&&!g)return i.removeChild(c),r();if(g&&E!=="none"&&E!==""){const S=m.getPropertyValue("content");let U=V4(p,v);const{value:F,isSecondary:K}=M4(S),V=g[0].startsWith("FontAwesome");let G=$y(U,F),X=G;if(V){const W=KM(F);W.iconName&&W.prefix&&(G=W.iconName,U=W.prefix)}if(G&&!K&&(!c||c.getAttribute(zy)!==U||c.getAttribute(By)!==X)){i.setAttribute(t,X),c&&i.removeChild(c);const W=A4(),{extra:ce}=W;ce.attributes[mg]=e,Ag(G,U).then(oe=>{const de=Ky(re(re({},W),{},{icons:{main:oe,mask:bw()},prefix:U,iconName:X,extra:ce,watchable:!0})),D=st.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?i.insertBefore(D,i.firstChild):i.appendChild(D),D.outerHTML=de.map(I=>Qu(I)).join(`
`),i.removeAttribute(t),r()}).catch(a)}else r()}else r()})}function L4(i){return Promise.all([xT(i,"::before"),xT(i,"::after")])}function U4(i){return i.parentNode!==document.head&&!~TM.indexOf(i.tagName.toUpperCase())&&!i.getAttribute(mg)&&(!i.parentNode||i.parentNode.tagName!=="svg")}function NT(i){if(pr)return new Promise((e,t)=>{const r=Qo(i.querySelectorAll("*")).filter(U4).map(L4),a=Yy.begin("searchPseudoElements");ww(),Promise.all(r).then(()=>{a(),wg(),e()}).catch(()=>{a(),wg(),t()})})}var j4={hooks(){return{mutationObserverCallbacks(i){return i.pseudoElementsCallback=NT,i}}},provides(i){i.pseudoElements2svg=function(e){const{node:t=st}=e;me.searchPseudoElements&&NT(t)}}};let OT=!1;var z4={mixout(){return{dom:{unwatch(){ww(),OT=!0}}}},hooks(){return{bootstrap(){ST(bg("mutationObserverCallbacks",{}))},noAuto(){_4()},watch(i){const{observeMutationsRoot:e}=i;OT?wg():ST(bg("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const DT=i=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return i.toLowerCase().split(" ").reduce((t,r)=>{const a=r.toLowerCase().split("-"),l=a[0];let c=a.slice(1).join("-");if(l&&c==="h")return t.flipX=!0,t;if(l&&c==="v")return t.flipY=!0,t;if(c=parseFloat(c),isNaN(c))return t;switch(l){case"grow":t.size=t.size+c;break;case"shrink":t.size=t.size-c;break;case"left":t.x=t.x-c;break;case"right":t.x=t.x+c;break;case"up":t.y=t.y-c;break;case"down":t.y=t.y+c;break;case"rotate":t.rotate=t.rotate+c;break}return t},e)};var B4={mixout(){return{parse:{transform:i=>DT(i)}}},hooks(){return{parseNodeAttributes(i,e){const t=e.getAttribute("data-fa-transform");return t&&(i.transform=DT(t)),i}}},provides(i){i.generateAbstractTransformGrouping=function(e){let{main:t,transform:r,containerWidth:a,iconWidth:l}=e;const c={transform:"translate(".concat(a/2," 256)")},m="translate(".concat(r.x*32,", ").concat(r.y*32,") "),p="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),g="rotate(".concat(r.rotate," 0 0)"),v={transform:"".concat(m," ").concat(p," ").concat(g)},E={transform:"translate(".concat(l/2*-1," -256)")},S={outer:c,inner:v,path:E};return{tag:"g",attributes:re({},S.outer),children:[{tag:"g",attributes:re({},S.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:re(re({},t.icon.attributes),S.path)}]}]}}}};const Rp={x:0,y:0,width:"100%",height:"100%"};function PT(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return i.attributes&&(i.attributes.fill||e)&&(i.attributes.fill="black"),i}function F4(i){return i.tag==="g"?i.children:[i]}var q4={hooks(){return{parseNodeAttributes(i,e){const t=e.getAttribute("data-fa-mask"),r=t?Jf(t.split(" ").map(a=>a.trim())):bw();return r.prefix||(r.prefix=ms()),i.mask=r,i.maskId=e.getAttribute("data-fa-mask-id"),i}}},provides(i){i.generateAbstractMask=function(e){let{children:t,attributes:r,main:a,mask:l,maskId:c,transform:m}=e;const{width:p,icon:g}=a,{width:v,icon:E}=l,S=MM({transform:m,containerWidth:v,iconWidth:p}),U={tag:"rect",attributes:re(re({},Rp),{},{fill:"white"})},F=g.children?{children:g.children.map(PT)}:{},K={tag:"g",attributes:re({},S.inner),children:[PT(re({tag:g.tag,attributes:re(re({},g.attributes),S.path)},F))]},V={tag:"g",attributes:re({},S.outer),children:[K]},G="mask-".concat(c||Mu()),X="clip-".concat(c||Mu()),W={tag:"mask",attributes:re(re({},Rp),{},{id:G,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[U,V]},ce={tag:"defs",children:[{tag:"clipPath",attributes:{id:X},children:F4(E)},W]};return t.push(ce,{tag:"rect",attributes:re({fill:"currentColor","clip-path":"url(#".concat(X,")"),mask:"url(#".concat(G,")")},Rp)}),{children:t,attributes:r}}}},H4={provides(i){let e=!1;ds.matchMedia&&(e=ds.matchMedia("(prefers-reduced-motion: reduce)").matches),i.missingIconAbstract=function(){const t=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};t.push({tag:"path",attributes:re(re({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const l=re(re({},a),{},{attributeName:"opacity"}),c={tag:"circle",attributes:re(re({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||c.children.push({tag:"animate",attributes:re(re({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:re(re({},l),{},{values:"1;0;1;1;0;1;"})}),t.push(c),t.push({tag:"path",attributes:re(re({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:re(re({},l),{},{values:"1;0;0;0;0;1;"})}]}),e||t.push({tag:"path",attributes:re(re({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:re(re({},l),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:t}}}},G4={hooks(){return{parseNodeAttributes(i,e){const t=e.getAttribute("data-fa-symbol"),r=t===null?!1:t===""?!0:t;return i.symbol=r,i}}}},$4=[UM,x4,N4,O4,D4,j4,z4,B4,q4,H4,G4];n4($4,{mixoutsTo:In});In.noAuto;In.config;In.library;In.dom;const Rg=In.parse;In.findIconDefinition;In.toHtml;const K4=In.icon;In.layer;In.text;In.counter;var Cp={exports:{}},xp,kT;function Y4(){if(kT)return xp;kT=1;var i="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return xp=i,xp}var Np,MT;function Q4(){if(MT)return Np;MT=1;var i=Y4();function e(){}function t(){}return t.resetWarningCache=e,Np=function(){function r(c,m,p,g,v,E){if(E!==i){var S=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw S.name="Invariant Violation",S}}r.isRequired=r;function a(){return r}var l={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:a,element:r,elementType:r,instanceOf:a,node:r,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:t,resetWarningCache:e};return l.PropTypes=l,l},Np}var VT;function X4(){return VT||(VT=1,Cp.exports=Q4()()),Cp.exports}var W4=X4();const Le=t1(W4);function LT(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(i);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(i,a).enumerable})),t.push.apply(t,r)}return t}function mi(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?LT(Object(t),!0).forEach(function(r){Ao(i,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):LT(Object(t)).forEach(function(r){Object.defineProperty(i,r,Object.getOwnPropertyDescriptor(t,r))})}return i}function gf(i){"@babel/helpers - typeof";return gf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},gf(i)}function Ao(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function J4(i,e){if(i==null)return{};var t={},r=Object.keys(i),a,l;for(l=0;l<r.length;l++)a=r[l],!(e.indexOf(a)>=0)&&(t[a]=i[a]);return t}function Z4(i,e){if(i==null)return{};var t=J4(i,e),r,a;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(i);for(a=0;a<l.length;a++)r=l[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(i,r)&&(t[r]=i[r])}return t}function Cg(i){return e3(i)||t3(i)||n3(i)||i3()}function e3(i){if(Array.isArray(i))return xg(i)}function t3(i){if(typeof Symbol<"u"&&i[Symbol.iterator]!=null||i["@@iterator"]!=null)return Array.from(i)}function n3(i,e){if(i){if(typeof i=="string")return xg(i,e);var t=Object.prototype.toString.call(i).slice(8,-1);if(t==="Object"&&i.constructor&&(t=i.constructor.name),t==="Map"||t==="Set")return Array.from(i);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return xg(i,e)}}function xg(i,e){(e==null||e>i.length)&&(e=i.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=i[t];return r}function i3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r3(i){var e,t=i.beat,r=i.fade,a=i.beatFade,l=i.bounce,c=i.shake,m=i.flash,p=i.spin,g=i.spinPulse,v=i.spinReverse,E=i.pulse,S=i.fixedWidth,U=i.inverse,F=i.border,K=i.listItem,V=i.flip,G=i.size,X=i.rotation,W=i.pull,ce=(e={"fa-beat":t,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":l,"fa-shake":c,"fa-flash":m,"fa-spin":p,"fa-spin-reverse":v,"fa-spin-pulse":g,"fa-pulse":E,"fa-fw":S,"fa-inverse":U,"fa-border":F,"fa-li":K,"fa-flip":V===!0,"fa-flip-horizontal":V==="horizontal"||V==="both","fa-flip-vertical":V==="vertical"||V==="both"},Ao(e,"fa-".concat(G),typeof G<"u"&&G!==null),Ao(e,"fa-rotate-".concat(X),typeof X<"u"&&X!==null&&X!==0),Ao(e,"fa-pull-".concat(W),typeof W<"u"&&W!==null),Ao(e,"fa-swap-opacity",i.swapOpacity),e);return Object.keys(ce).map(function(oe){return ce[oe]?oe:null}).filter(function(oe){return oe})}function s3(i){return i=i-0,i===i}function Rw(i){return s3(i)?i:(i=i.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""}),i.substr(0,1).toLowerCase()+i.substr(1))}var a3=["style"];function o3(i){return i.charAt(0).toUpperCase()+i.slice(1)}function l3(i){return i.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var r=t.indexOf(":"),a=Rw(t.slice(0,r)),l=t.slice(r+1).trim();return a.startsWith("webkit")?e[o3(a)]=l:e[a]=l,e},{})}function Cw(i,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(p){return Cw(i,p)}),a=Object.keys(e.attributes||{}).reduce(function(p,g){var v=e.attributes[g];switch(g){case"class":p.attrs.className=v,delete e.attributes.class;break;case"style":p.attrs.style=l3(v);break;default:g.indexOf("aria-")===0||g.indexOf("data-")===0?p.attrs[g.toLowerCase()]=v:p.attrs[Rw(g)]=v}return p},{attrs:{}}),l=t.style,c=l===void 0?{}:l,m=Z4(t,a3);return a.attrs.style=mi(mi({},a.attrs.style),c),i.apply(void 0,[e.tag,mi(mi({},a.attrs),m)].concat(Cg(r)))}var xw=!1;try{xw=!0}catch{}function u3(){if(!xw&&console&&typeof console.error=="function"){var i;(i=console).error.apply(i,arguments)}}function UT(i){if(i&&gf(i)==="object"&&i.prefix&&i.iconName&&i.icon)return i;if(Rg.icon)return Rg.icon(i);if(i===null)return null;if(i&&gf(i)==="object"&&i.prefix&&i.iconName)return i;if(Array.isArray(i)&&i.length===2)return{prefix:i[0],iconName:i[1]};if(typeof i=="string")return{prefix:"fas",iconName:i}}function Op(i,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Ao({},i,e):{}}var jT={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Xy=Uu.forwardRef(function(i,e){var t=mi(mi({},jT),i),r=t.icon,a=t.mask,l=t.symbol,c=t.className,m=t.title,p=t.titleId,g=t.maskId,v=UT(r),E=Op("classes",[].concat(Cg(r3(t)),Cg((c||"").split(" ")))),S=Op("transform",typeof t.transform=="string"?Rg.transform(t.transform):t.transform),U=Op("mask",UT(a)),F=K4(v,mi(mi(mi(mi({},E),S),U),{},{symbol:l,title:m,titleId:p,maskId:g}));if(!F)return u3("Could not find icon",v),null;var K=F.abstract,V={ref:e};return Object.keys(t).forEach(function(G){jT.hasOwnProperty(G)||(V[G]=t[G])}),c3(K[0],V)});Xy.displayName="FontAwesomeIcon";Xy.propTypes={beat:Le.bool,border:Le.bool,beatFade:Le.bool,bounce:Le.bool,className:Le.string,fade:Le.bool,flash:Le.bool,mask:Le.oneOfType([Le.object,Le.array,Le.string]),maskId:Le.string,fixedWidth:Le.bool,inverse:Le.bool,flip:Le.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Le.oneOfType([Le.object,Le.array,Le.string]),listItem:Le.bool,pull:Le.oneOf(["right","left"]),pulse:Le.bool,rotation:Le.oneOf([0,90,180,270]),shake:Le.bool,size:Le.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Le.bool,spinPulse:Le.bool,spinReverse:Le.bool,symbol:Le.oneOfType([Le.bool,Le.string]),title:Le.string,titleId:Le.string,transform:Le.oneOfType([Le.string,Le.object]),swapOpacity:Le.bool};var c3=Cw.bind(null,Uu.createElement);const h3=({isOpen:i,toggle:e})=>w.jsx("div",{className:"flex justify-end",children:w.jsxs("button",{onClick:e,className:"flex flex-col items-center p-2 bg text-white font top-4 left-4 z-50 rounded-2xl hover:text-black-500 cursor-pointer",children:[w.jsx(Xy,{icon:$k,className:"mr-2 w-auto"}),i?"Cerrar Menú":"Abrir Menú"]})}),f3=()=>{const{openMenu:i,toogleMenu:e}=Uu.useContext(Uy)||{};return w.jsx(w.Fragment,{children:w.jsx("div",{className:"bg-gray-900 text-slate-300 w-full h-16 flex items-center justify-between px-4",children:w.jsx(h3,{isOpen:!!i,toggle:e||(()=>{})})})})},d3=()=>{const{openMenu:i}=ne.useContext(Uy)??{},e="16rem";return w.jsxs("div",{className:"flex min-h-screen relative",children:[w.jsx("div",{className:"fixed top-0 left-0 h-full bg-gray-900 z-30 transition-transform duration-300 ease-in-out",style:{width:e,transform:`translateX(${i?"0":`-${e}`})`},children:w.jsx(Gk,{openMenu:i??!1})}),w.jsxs("div",{className:"flex flex-col flex-1 w-full transition-all duration-300",style:{paddingLeft:i?e:"0"},children:[w.jsx("div",{className:"w-full bg-white z-40 shadow-md",children:w.jsx(f3,{})}),w.jsx("main",{className:"p-4",children:w.jsx(jg,{})})]})]})},yf="__sak";/**
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
 */function m3(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ed{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const r=new ed(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:a,data:l}=t.data,c=this.handlersMap[a];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:a});const m=Array.from(c).map(async g=>g(t.origin,l)),p=await m3(m);t.ports[0].postMessage({status:"done",eventId:r,eventType:a,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ed.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p3(i="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return i+t}/**
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
 */class g3{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,c;return new Promise((m,p)=>{const g=p3("",20);a.port1.start();const v=setTimeout(()=>{p(new Error("unsupported_event"))},r);c={messageChannel:a,onMessage(E){const S=E;if(S.data.eventId===g)switch(S.data.status){case"ack":clearTimeout(v),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),m(S.data.response);break;default:clearTimeout(v),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),a.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[a.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Nw(){return typeof zT().WorkerGlobalScope<"u"&&typeof zT().importScripts=="function"}async function y3(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function v3(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function _3(){return Nw()?self:null}/**
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
 */const Ow="firebaseLocalStorageDb",b3=1,vf="firebaseLocalStorage",Dw="fbase_key";class Xu{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function td(i,e){return i.transaction([vf],e?"readwrite":"readonly").objectStore(vf)}function E3(){const i=indexedDB.deleteDatabase(Ow);return new Xu(i).toPromise()}function Ng(){const i=indexedDB.open(Ow,b3);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const r=i.result;try{r.createObjectStore(vf,{keyPath:Dw})}catch(a){t(a)}}),i.addEventListener("success",async()=>{const r=i.result;r.objectStoreNames.contains(vf)?e(r):(r.close(),await E3(),e(await Ng()))})})}async function BT(i,e,t){const r=td(i,!0).put({[Dw]:e,value:t});return new Xu(r).toPromise()}async function T3(i,e){const t=td(i,!1).get(e),r=await new Xu(t).toPromise();return r===void 0?null:r.value}function FT(i,e){const t=td(i,!0).delete(e);return new Xu(t).toPromise()}const A3=800,S3=3;class Pw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ng(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>S3)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Nw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ed._getInstance(_3()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await y3(),!this.activeServiceWorker)return;this.sender=new g3(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||v3()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ng();return await BT(e,yf,"1"),await FT(e,yf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>BT(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>T3(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>FT(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=td(a,!1).getAll();return new Xu(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)r.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!r.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const a of Array.from(r))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),A3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Pw.type="LOCAL";const w3=Pw;function kw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const I3=kw,Mw=new vs("auth","Firebase",kw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _f=new Rf("@firebase/auth");function R3(i,...e){_f.logLevel<=ke.WARN&&_f.warn(`Auth (${Ri}): ${i}`,...e)}function Gh(i,...e){_f.logLevel<=ke.ERROR&&_f.error(`Auth (${Ri}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(i,...e){throw Wy(i,...e)}function _a(i,...e){return Wy(i,...e)}function Vw(i,e,t){const r=Object.assign(Object.assign({},I3()),{[e]:t});return new vs("auth","Firebase",r).create(e,{appName:i.name})}function ua(i){return Vw(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Wy(i,...e){if(typeof i!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=i.name),i._errorFactory.create(t,...r)}return Mw.create(i,...e)}function Re(i,e,...t){if(!i)throw Wy(e,...t)}function ir(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Gh(e),new Error(e)}function gs(i,e){i||ir(e)}function C3(){return qT()==="http:"||qT()==="https:"}function qT(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x3(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(C3()||E1()||"connection"in navigator)?navigator.onLine:!0}function N3(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O3{constructor(e,t){this.shortDelay=e,this.longDelay=t,gs(t>e,"Short delay should be less than long delay!"),this.isMobile=_1()||T1()}get(){return x3()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lw(i,e){gs(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ir("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ir("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ir("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D3={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P3=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],k3=new O3(3e4,6e4);function Jy(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function Xo(i,e,t,r,a={}){return jw(i,a,async()=>{let l={},c={};r&&(e==="GET"?c=r:l={body:JSON.stringify(r)});const m=mr(Object.assign({key:i.config.apiKey},c)).slice(1),p=await i._getAdditionalHeaders();p["Content-Type"]="application/json",i.languageCode&&(p["X-Firebase-Locale"]=i.languageCode);const g=Object.assign({method:e,headers:p},l);return b1()||(g.referrerPolicy="no-referrer"),i.emulatorConfig&&Bo(i.emulatorConfig.host)&&(g.credentials="include"),Uw.fetch()(await zw(i,i.config.apiHost,t,m),g)})}async function jw(i,e,t){i._canInitEmulator=!1;const r=Object.assign(Object.assign({},D3),e);try{const a=new V3(i),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw Oh(i,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const m=l.ok?c.errorMessage:c.error.message,[p,g]=m.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Oh(i,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw Oh(i,"email-already-in-use",c);if(p==="USER_DISABLED")throw Oh(i,"user-disabled",c);const v=r[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw Vw(i,v,g);Ii(i,v)}}catch(a){if(a instanceof zn)throw a;Ii(i,"network-request-failed",{message:String(a)})}}async function M3(i,e,t,r,a={}){const l=await Xo(i,e,t,r,a);return"mfaPendingCredential"in l&&Ii(i,"multi-factor-auth-required",{_serverResponse:l}),l}async function zw(i,e,t,r){const a=`${e}${t}?${r}`,l=i,c=l.config.emulator?Lw(i.config,a):`${i.config.apiScheme}://${a}`;return P3.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}class V3{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(_a(this.auth,"network-request-failed")),k3.get())})}}function Oh(i,e,t){const r={appName:i.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const a=_a(i,e,r);return a.customData._tokenResponse=t,a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L3(i,e){return Xo(i,"POST","/v1/accounts:delete",e)}async function bf(i,e){return Xo(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function U3(i,e=!1){const t=Rt(i),r=await t.getIdToken(e),a=Zy(r);Re(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:a,token:r,authTime:Eu(Dp(a.auth_time)),issuedAtTime:Eu(Dp(a.iat)),expirationTime:Eu(Dp(a.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Dp(i){return Number(i)*1e3}function Zy(i){const[e,t,r]=i.split(".");if(e===void 0||t===void 0||r===void 0)return Gh("JWT malformed, contained fewer than 3 sections"),null;try{const a=Bg(t);return a?JSON.parse(a):(Gh("Failed to decode base64 JWT payload"),null)}catch(a){return Gh("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function HT(i){const e=Zy(i);return Re(e,"internal-error"),Re(typeof e.exp<"u","internal-error"),Re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lu(i,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof zn&&j3(r)&&i.auth.currentUser===i&&await i.auth.signOut(),r}}function j3({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z3{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const a=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Eu(this.lastLoginAt),this.creationTime=Eu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ef(i){var e;const t=i.auth,r=await i.getIdToken(),a=await Lu(i,bf(t,{idToken:r}));Re(a==null?void 0:a.users.length,t,"internal-error");const l=a.users[0];i._notifyReloadListener(l);const c=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?Bw(l.providerUserInfo):[],m=F3(i.providerData,c),p=i.isAnonymous,g=!(i.email&&l.passwordHash)&&!(m!=null&&m.length),v=p?g:!1,E={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:m,metadata:new Og(l.createdAt,l.lastLoginAt),isAnonymous:v};Object.assign(i,E)}async function B3(i){const e=Rt(i);await Ef(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function F3(i,e){return[...i.filter(r=>!e.some(a=>a.providerId===r.providerId)),...e]}function Bw(i){return i.map(e=>{var{providerId:t}=e,r=Fo(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q3(i,e){const t=await jw(i,{},async()=>{const r=mr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=i.config,c=await zw(i,a,"/v1/token",`key=${l}`),m=await i._getAdditionalHeaders();return m["Content-Type"]="application/x-www-form-urlencoded",Uw.fetch()(c,{method:"POST",headers:m,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function H3(i,e){return Xo(i,"POST","/v2/accounts:revokeToken",Jy(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Re(e.idToken,"internal-error"),Re(typeof e.idToken<"u","internal-error"),Re(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):HT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Re(e.length!==0,"internal-error");const t=HT(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Re(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:a,expiresIn:l}=await q3(e,t);this.updateTokensAndExpiration(r,a,Number(l))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:a,expirationTime:l}=t,c=new Ro;return r&&(Re(typeof r=="string","internal-error",{appName:e}),c.refreshToken=r),a&&(Re(typeof a=="string","internal-error",{appName:e}),c.accessToken=a),l&&(Re(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ro,this.toJSON())}_performRefresh(){return ir("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kr(i,e){Re(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Kn{constructor(e){var{uid:t,auth:r,stsTokenManager:a}=e,l=Fo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new z3(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Og(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await Lu(this,this.stsTokenManager.getToken(this.auth,e));return Re(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return U3(this,e)}reload(){return B3(this)}_assign(e){this!==e&&(Re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Kn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ef(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(wt(this.auth.app))return Promise.reject(ua(this.auth));const e=await this.getIdToken();return await Lu(this,L3(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,a,l,c,m,p,g,v;const E=(r=t.displayName)!==null&&r!==void 0?r:void 0,S=(a=t.email)!==null&&a!==void 0?a:void 0,U=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,F=(c=t.photoURL)!==null&&c!==void 0?c:void 0,K=(m=t.tenantId)!==null&&m!==void 0?m:void 0,V=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,G=(g=t.createdAt)!==null&&g!==void 0?g:void 0,X=(v=t.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:W,emailVerified:ce,isAnonymous:oe,providerData:de,stsTokenManager:D}=t;Re(W&&D,e,"internal-error");const I=Ro.fromJSON(this.name,D);Re(typeof W=="string",e,"internal-error"),Kr(E,e.name),Kr(S,e.name),Re(typeof ce=="boolean",e,"internal-error"),Re(typeof oe=="boolean",e,"internal-error"),Kr(U,e.name),Kr(F,e.name),Kr(K,e.name),Kr(V,e.name),Kr(G,e.name),Kr(X,e.name);const R=new Kn({uid:W,auth:e,email:S,emailVerified:ce,displayName:E,isAnonymous:oe,photoURL:F,phoneNumber:U,tenantId:K,stsTokenManager:I,createdAt:G,lastLoginAt:X});return de&&Array.isArray(de)&&(R.providerData=de.map(N=>Object.assign({},N))),V&&(R._redirectEventId=V),R}static async _fromIdTokenResponse(e,t,r=!1){const a=new Ro;a.updateFromServerResponse(t);const l=new Kn({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:r});return await Ef(l),l}static async _fromGetAccountInfoResponse(e,t,r){const a=t.users[0];Re(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?Bw(a.providerUserInfo):[],c=!(a.email&&a.passwordHash)&&!(l!=null&&l.length),m=new Ro;m.updateFromIdToken(r);const p=new Kn({uid:a.localId,auth:e,stsTokenManager:m,isAnonymous:c}),g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new Og(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,g),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT=new Map;function yi(i){gs(i instanceof Function,"Expected a class definition");let e=GT.get(i);return e?(gs(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,GT.set(i,e),e)}/**
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
 */function Tu(i,e,t){return`firebase:${i}:${e}:${t}`}class Co{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:a,name:l}=this.auth;this.fullUserKey=Tu(this.userKey,a.apiKey,l),this.fullPersistenceKey=Tu("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await bf(this.auth,{idToken:e}).catch(()=>{});return t?Kn._fromGetAccountInfoResponse(this.auth,t,e):null}return Kn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Co(yi($T),e,r);const a=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=a[0]||yi($T);const c=Tu(r,e.config.apiKey,e.name);let m=null;for(const g of t)try{const v=await g._get(c);if(v){let E;if(typeof v=="string"){const S=await bf(e,{idToken:v}).catch(()=>{});if(!S)break;E=await Kn._fromGetAccountInfoResponse(e,S,v)}else E=Kn._fromJSON(e,v);g!==l&&(m=E),l=g;break}}catch{}const p=a.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new Co(l,e,r):(l=p[0],m&&await l._set(c,m.toJSON()),await Promise.all(t.map(async g=>{if(g!==l)try{await g._remove(c)}catch{}})),new Co(l,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KT(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(G3(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Hw(e))return"Blackberry";if(Gw(e))return"Webos";if($3(e))return"Safari";if((e.includes("chrome/")||K3(e))&&!e.includes("edge/"))return"Chrome";if(Wu(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=i.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function G3(i=tt()){return/firefox\//i.test(i)}function $3(i=tt()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function K3(i=tt()){return/crios\//i.test(i)}function qw(i=tt()){return/iemobile/i.test(i)}function Wu(i=tt()){return/android/i.test(i)}function Hw(i=tt()){return/blackberry/i.test(i)}function Gw(i=tt()){return/webos/i.test(i)}function ev(i=tt()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function Y3(i=tt()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(i)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(i)}function Q3(){return A1()&&document.documentMode===10}function X3(i=tt()){return ev(i)||Wu(i)||Gw(i)||Hw(i)||/windows phone/i.test(i)||qw(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $w(i,e=[]){let t;switch(i){case"Browser":t=KT(tt());break;case"Worker":t=`${KT(tt())}-${i}`;break;default:t=i}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ri}/${r}`}/**
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
 */class W3{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=l=>new Promise((c,m)=>{try{const p=e(l);c(p)}catch(p){m(p)}});r.onAbort=t,this.queue.push(r);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function J3(i,e={}){return Xo(i,"GET","/v2/passwordPolicy",Jy(i,e))}/**
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
 */const Z3=6;class eV{constructor(e){var t,r,a,l;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:Z3,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,a,l,c,m;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(r=p.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),p.isValid&&(p.isValid=(a=p.containsLowercaseLetter)!==null&&a!==void 0?a:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(m=p.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),p}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let a=0;a<e.length;a++)r=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tV{constructor(e,t,r,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new YT(this),this.idTokenSubscription=new YT(this),this.beforeStateQueue=new W3(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Mw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=yi(t)),this._initializationPromise=this.queue(async()=>{var r,a,l;if(!this._deleted&&(this.persistenceManager=await Co.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await bf(this,{idToken:e}),r=await Kn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(wt(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(m,m))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let a=r,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,m=a==null?void 0:a._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===m)&&(p!=null&&p.user)&&(a=p.user,l=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(a)}catch(c){a=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return Re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ef(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=N3()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(wt(this.app))return Promise.reject(ua(this));const t=e?Rt(e):null;return t&&Re(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return wt(this.app)?Promise.reject(ua(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return wt(this.app)?Promise.reject(ua(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(yi(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await J3(this),t=new eV(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new vs("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await H3(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&yi(e)||this._popupRedirectResolver;Re(t,this,"argument-error"),this.redirectPersistenceManager=await Co.create(this,[yi(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(Re(m,this,"internal-error"),m.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,r,a);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$w(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){var e;if(wt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&R3(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Kw(i){return Rt(i)}class YT{constructor(e){this.auth=e,this.observer=null,this.addObserver=w1(t=>this.observer=t)}get next(){return Re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nV(i,e){const t=zu(i,"auth");if(t.isInitialized()){const a=t.getImmediate(),l=t.getOptions();if(ss(l,e??{}))return a;Ii(a,"already-initialized")}return t.initialize({options:e})}function iV(i,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(yi);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ir("not implemented")}_getIdTokenResponse(e){return ir("not implemented")}_linkToIdToken(e,t){return ir("not implemented")}_getReauthenticationResolver(e){return ir("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xo(i,e){return M3(i,"POST","/v1/accounts:signInWithIdp",Jy(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rV="http://localhost";class ma extends Yw{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ma(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ii("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:a}=t,l=Fo(t,["providerId","signInMethod"]);if(!r||!a)return null;const c=new ma(r,a);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return xo(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,xo(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,xo(e,t)}buildRequest(){const e={requestUri:rV,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=mr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Yr extends Ju{constructor(){super("facebook.com")}static credential(e){return ma._fromParams({providerId:Yr.PROVIDER_ID,signInMethod:Yr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yr.credentialFromTaggedObject(e)}static credentialFromError(e){return Yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yr.credential(e.oauthAccessToken)}catch{return null}}}Yr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr extends Ju{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ma._fromParams({providerId:Qr.PROVIDER_ID,signInMethod:Qr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Qr.credentialFromTaggedObject(e)}static credentialFromError(e){return Qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Qr.credential(t,r)}catch{return null}}}Qr.GOOGLE_SIGN_IN_METHOD="google.com";Qr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr extends Ju{constructor(){super("github.com")}static credential(e){return ma._fromParams({providerId:Xr.PROVIDER_ID,signInMethod:Xr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xr.credentialFromTaggedObject(e)}static credentialFromError(e){return Xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xr.credential(e.oauthAccessToken)}catch{return null}}}Xr.GITHUB_SIGN_IN_METHOD="github.com";Xr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr extends Ju{constructor(){super("twitter.com")}static credential(e,t){return ma._fromParams({providerId:Wr.PROVIDER_ID,signInMethod:Wr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Wr.credentialFromTaggedObject(e)}static credentialFromError(e){return Wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Wr.credential(t,r)}catch{return null}}}Wr.TWITTER_SIGN_IN_METHOD="twitter.com";Wr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,a=!1){const l=await Kn._fromIdTokenResponse(e,r,a),c=QT(r);return new Uo({user:l,providerId:c,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const a=QT(r);return new Uo({user:e,providerId:a,_tokenResponse:r,operationType:t})}}function QT(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf extends zn{constructor(e,t,r,a){var l;super(t.code,t.message),this.operationType=r,this.user=a,Object.setPrototypeOf(this,Tf.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,a){return new Tf(e,t,r,a)}}function Xw(i,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Tf._fromErrorAndOperation(i,l,e,r):l})}async function sV(i,e,t=!1){const r=await Lu(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return Uo._forOperation(i,"link",r)}/**
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
 */async function aV(i,e,t=!1){const{auth:r}=i;if(wt(r.app))return Promise.reject(ua(r));const a="reauthenticate";try{const l=await Lu(i,Xw(r,a,e,i),t);Re(l.idToken,r,"internal-error");const c=Zy(l.idToken);Re(c,r,"internal-error");const{sub:m}=c;return Re(i.uid===m,r,"user-mismatch"),Uo._forOperation(i,a,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Ii(r,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oV(i,e,t=!1){if(wt(i.app))return Promise.reject(ua(i));const r="signIn",a=await Xw(i,r,e),l=await Uo._fromIdTokenResponse(i,r,a);return t||await i._updateCurrentUser(l.user),l}var XT="@firebase/auth",WT="1.10.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lV{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uV(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function cV(i){as(new ar("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:m}=r.options;Re(c&&!c.includes(":"),"invalid-api-key",{appName:r.name});const p={apiKey:c,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$w(i)},g=new tV(r,a,l,p);return iV(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),as(new ar("auth-internal",e=>{const t=Kw(e.getProvider("auth").getImmediate());return(r=>new lV(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),vi(XT,WT,uV(i)),vi(XT,WT,"esm2017")}/**
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
 */const hV=1e3,fV=10;class Jw extends Ww{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=X3(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),a=this.localCache[t];r!==a&&e(t,a,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,m,p)=>{this.notifyListeners(c,p)});return}const r=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const c=this.storage.getItem(r);!t&&this.localCache[r]===c||this.notifyListeners(r,c)},l=this.storage.getItem(r);Q3()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,fV):a()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const a of Array.from(r))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},hV)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Jw.type="LOCAL";const dV=Jw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw extends Ww{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Zw.type="SESSION";const mV=Zw;/**
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
 */function pV(i,e){return e?yi(e):(Re(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class tv extends Yw{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return xo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return xo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function gV(i){return oV(i.auth,new tv(i),i.bypassAuthState)}function yV(i){const{auth:e,user:t}=i;return Re(t,e,"internal-error"),aV(t,new tv(i),i.bypassAuthState)}async function vV(i){const{auth:e,user:t}=i;return Re(t,e,"internal-error"),sV(t,new tv(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _V{constructor(e,t,r,a,l=!1){this.auth=e,this.resolver=r,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:a,tenantId:l,error:c,type:m}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:r,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return gV;case"linkViaPopup":case"linkViaRedirect":return vV;case"reauthViaPopup":case"reauthViaRedirect":return yV;default:Ii(this.auth,"internal-error")}}resolve(e){gs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){gs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bV="pendingRedirect",Au=new Map;class EV extends _V{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Au.get(this.auth._key());if(!e){try{const r=await TV(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Au.set(this.auth._key(),e)}return this.bypassAuthState||Au.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function TV(i,e){const t=IV(e),r=wV(i);if(!await r._isAvailable())return!1;const a=await r._get(t)==="true";return await r._remove(t),a}function AV(){Au.clear()}function SV(i,e){Au.set(i._key(),e)}function wV(i){return yi(i._redirectPersistence)}function IV(i){return Tu(bV,i.config.apiKey,i.name)}async function RV(i,e,t=!1){if(wt(i.app))return Promise.reject(ua(i));const r=Kw(i),a=pV(r,e),c=await new EV(r,a,t).execute();return c&&!t&&(delete c.user._redirectEventId,await r._persistUserIfCurrent(c.user),await r._setRedirectUser(null,e)),c}/**
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
 */const CV="__/auth/handler",xV="emulator/auth/handler",NV=encodeURIComponent("fac");async function OV(i,e,t,r,a,l){Re(i.config.authDomain,i,"auth-domain-config-required"),Re(i.config.apiKey,i,"invalid-api-key");const c={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:r,v:Ri,eventId:a};if(e instanceof Qw){e.setDefaultLanguage(i.languageCode),c.providerId=e.providerId||"",S1(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,E]of Object.entries(l||{}))c[v]=E}if(e instanceof Ju){const v=e.getScopes().filter(E=>E!=="");v.length>0&&(c.scopes=v.join(","))}i.tenantId&&(c.tid=i.tenantId);const m=c;for(const v of Object.keys(m))m[v]===void 0&&delete m[v];const p=await i._getAppCheckToken(),g=p?`#${NV}=${encodeURIComponent(p)}`:"";return`${DV(i)}?${mr(m).slice(1)}${g}`}function DV({config:i}){return i.emulator?Lw(i,xV):`https://${i.authDomain}/${CV}`}/**
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
 */function pa(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PV(i,e={}){return Xo(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kV=2e3;async function MV(i,e,t){var r;const{BuildInfo:a}=pa();gs(e.sessionId,"AuthEvent did not contain a session ID");const l=await zV(e.sessionId),c={};return ev()?c.ibi=a.packageName:Wu()?c.apn=a.packageName:Ii(i,"operation-not-supported-in-this-environment"),a.displayName&&(c.appDisplayName=a.displayName),c.sessionId=l,OV(i,t,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,c)}async function VV(i){const{BuildInfo:e}=pa(),t={};ev()?t.iosBundleId=e.packageName:Wu()?t.androidPackageName=e.packageName:Ii(i,"operation-not-supported-in-this-environment"),await PV(i,t)}function LV(i){const{cordova:e}=pa();return new Promise(t=>{e.plugins.browsertab.isAvailable(r=>{let a=null;r?e.plugins.browsertab.openUrl(i):a=e.InAppBrowser.open(i,Y3()?"_blank":"_system","location=yes"),t(a)})})}async function UV(i,e,t){const{cordova:r}=pa();let a=()=>{};try{await new Promise((l,c)=>{let m=null;function p(){var E;l();const S=(E=r.plugins.browsertab)===null||E===void 0?void 0:E.close;typeof S=="function"&&S(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function g(){m||(m=window.setTimeout(()=>{c(_a(i,"redirect-cancelled-by-user"))},kV))}function v(){(document==null?void 0:document.visibilityState)==="visible"&&g()}e.addPassiveListener(p),document.addEventListener("resume",g,!1),Wu()&&document.addEventListener("visibilitychange",v,!1),a=()=>{e.removePassiveListener(p),document.removeEventListener("resume",g,!1),document.removeEventListener("visibilitychange",v,!1),m&&window.clearTimeout(m)}})}finally{a()}}function jV(i){var e,t,r,a,l,c,m,p,g,v;const E=pa();Re(typeof((e=E==null?void 0:E.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),Re(typeof((t=E==null?void 0:E.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),Re(typeof((l=(a=(r=E==null?void 0:E.cordova)===null||r===void 0?void 0:r.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.openUrl)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),Re(typeof((p=(m=(c=E==null?void 0:E.cordova)===null||c===void 0?void 0:c.plugins)===null||m===void 0?void 0:m.browsertab)===null||p===void 0?void 0:p.isAvailable)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),Re(typeof((v=(g=E==null?void 0:E.cordova)===null||g===void 0?void 0:g.InAppBrowser)===null||v===void 0?void 0:v.open)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function zV(i){const e=BV(i),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(a=>a.toString(16).padStart(2,"0")).join("")}function BV(i){if(gs(/[0-9a-zA-Z]+/.test(i),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(i);const e=new ArrayBuffer(i.length),t=new Uint8Array(e);for(let r=0;r<i.length;r++)t[r]=i.charCodeAt(r);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FV=10*60*1e3;class qV{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!HV(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!eI(e)){const a=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(_a(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=FV&&this.cachedEventUids.clear(),this.cachedEventUids.has(JT(e))}saveEventToCache(e){this.cachedEventUids.add(JT(e)),this.lastProcessedEventTime=Date.now()}}function JT(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function eI({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function HV(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return eI(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GV=20;class $V extends qV{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInitialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInitialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function KV(i,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:XV(),postBody:null,tenantId:i.tenantId,error:_a(i,"no-auth-event")}}function YV(i,e){return Dg()._set(Pg(i),e)}async function ZT(i){const e=await Dg()._get(Pg(i));return e&&await Dg()._remove(Pg(i)),e}function QV(i,e){var t,r;const a=JV(e);if(a.includes("/__/auth/callback")){const l=$h(a),c=l.firebaseError?WV(decodeURIComponent(l.firebaseError)):null,m=(r=(t=c==null?void 0:c.code)===null||t===void 0?void 0:t.split("auth/"))===null||r===void 0?void 0:r[1],p=m?_a(m):null;return p?{type:i.type,eventId:i.eventId,tenantId:i.tenantId,error:p,urlResponse:null,sessionId:null,postBody:null}:{type:i.type,eventId:i.eventId,tenantId:i.tenantId,sessionId:i.sessionId,urlResponse:a,postBody:null}}return null}function XV(){const i=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<GV;t++){const r=Math.floor(Math.random()*e.length);i.push(e.charAt(r))}return i.join("")}function Dg(){return yi(dV)}function Pg(i){return Tu("authEvent",i.config.apiKey,i.name)}function WV(i){try{return JSON.parse(i)}catch{return null}}function JV(i){const e=$h(i),t=e.link?decodeURIComponent(e.link):void 0,r=$h(t).link,a=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return $h(a).link||a||r||t||i}function $h(i){if(!(i!=null&&i.includes("?")))return{};const[e,...t]=i.split("?");return o2(t.join("?"))}/**
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
 */const ZV=500;class e6{constructor(){this._redirectPersistence=mV,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=RV,this._overrideRedirectResult=SV}async _initialize(e){const t=e._key();let r=this.eventManagers.get(t);return r||(r=new $V(e),this.eventManagers.set(t,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){Ii(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,r,a){jV(e);const l=await this._initialize(e);await l.initialized(),l.resetRedirect(),AV(),await this._originValidation(e);const c=KV(e,r,a);await YV(e,c);const m=await MV(e,c,t),p=await LV(m);return UV(e,l,p)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=VV(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:r,handleOpenURL:a,BuildInfo:l}=pa(),c=setTimeout(async()=>{await ZT(e),t.onEvent(e1())},ZV),m=async v=>{clearTimeout(c);const E=await ZT(e);let S=null;E&&(v!=null&&v.url)&&(S=QV(E,v.url)),t.onEvent(S||e1())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,m);const p=a,g=`${l.packageName.toLowerCase()}://`;pa().handleOpenURL=async v=>{if(v.toLowerCase().startsWith(g)&&m({url:v}),typeof p=="function")try{p(v)}catch(E){console.error(E)}}}}const t6=e6;function e1(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:_a("no-auth-event")}}/**
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
 */function n6(i=qg()){const e=zu(i,"auth");return e.isInitialized()?e.getImmediate():nV(i,{persistence:w3,popupRedirectResolver:t6})}cV("Cordova");const i6=n6(Ci),r6=i=>i6.currentUser?i.children:w.jsx(CC,{to:"/"}),s6=[{title:"Crear usuario",slug:"createUser"},{title:"Crear maquina",slug:"createMachine"},{title:"Editar registros",slug:"editingRegister"}];function a6({item:i}){return w.jsx(zg,{to:`/configurations/${i.slug}`,children:w.jsx("button",{className:"button",children:i.title})})}const o6=()=>w.jsxs("div",{className:"flex flex-col items-center p-4 space-y-6 md:space-y-8",children:[w.jsx("div",{className:"flex flex-wrap justify-center gap-4",children:s6.map((i,e)=>w.jsx(a6,{item:i},e))}),w.jsx("div",{className:"w-full max-w-4xl",children:w.jsx(jg,{})})]}),l6=[{name:"firstName",label:"Nombres",type:"text",required:!0,placeholder:"Ingrese sus nombres"},{name:"lastName",label:"Apellidos",type:"text",required:!0,placeholder:"Ingrese sus apellidos"},{name:"code",label:"Codigo",type:"text",required:!0,placeholder:"Ingrese su codigo"},{name:"section",label:"Seccion",type:"text",required:!0,placeholder:"Ingrese su seccion"}],u6=[{name:"date",label:"Fecha",type:"date",required:!0,placeholder:"Seleccione una fecha"},{name:"abbreviation",label:"Abreviacion de maquina",type:"text",required:!0,placeholder:"e.g., F1315"},{name:"machineName",label:"Nombre de maquina",type:"text",required:!0,placeholder:"e.g., Cutter Alpha"},{name:"efficiency",label:"Eficiencia (%)",type:"number",required:!0,placeholder:"e.g., 92"}],tI=({type:i="success",title:e,message:t,onClose:r})=>{const l={success:{bg:"bg-green-50",border:"border-green-300",text:"text-green-800",darkBg:"dark:bg-gray-800",darkText:"dark:text-green-400",darkBorder:"dark:border-green-800"},error:{bg:"bg-red-50",border:"border-red-300",text:"text-red-800",darkBg:"dark:bg-gray-800",darkText:"dark:text-red-400",darkBorder:"dark:border-red-800"}}[i];return w.jsxs("div",{className:`p-4 mb-4 border rounded-lg ${l.bg} ${l.border} ${l.text} ${l.darkBg} ${l.darkText} ${l.darkBorder}`,role:"alert",children:[w.jsxs("div",{className:"flex items-center justify-between",children:[w.jsx("h3",{className:"text-lg font-medium",children:e}),w.jsx("button",{onClick:r,className:`text-sm px-2 py-1 rounded ${l.text} border ${l.border} hover:bg-opacity-20`,children:"Cerrar"})]}),w.jsx("p",{className:"mt-2 text-sm",children:t})]})},c6=va(Ci),h6=()=>{const[i,e]=ne.useState({}),[t,r]=ne.useState(null),a=c=>{const{name:m,value:p}=c.target;e(g=>({...g,[m]:p.toLocaleUpperCase()}))},l=async c=>{c.preventDefault();try{await Yf(sr(c6,"machines"),i),r({type:"success",title:"Maquina creada",message:"Maquina creada correctamente.",onClose:()=>r(null)}),e({})}catch(m){console.error("Error al crear la máquina:",m),r({type:"error",title:"Error al crear maquina",message:"Ha ocurrido un error al crear el usuario. Por favor, inténtalo de nuevo.",onClose:()=>r(null)})}};return w.jsx("div",{className:"roun min-h-screen flex items-center justify-center rounded-2xl backgroundForm",children:w.jsxs("form",{onSubmit:l,className:"bg-opacity-20 backdrop-blur-md p-8 rounded-lg shadow-lg w-full max-w-md text-white space-y-6",children:[w.jsx("h2",{className:"text-2xl font-semibold text-center",children:"Crear máquina"}),u6.map(c=>w.jsxs("div",{children:[w.jsx("label",{htmlFor:c.name,className:"block text-sm font-medium mb-1",children:c.label}),w.jsx("input",{type:c.type,id:c.name,name:c.name,required:c.required,placeholder:c.placeholder,value:i[c.name]||"",onChange:a,className:"w-full px-4 py-2 rounded border bg-gray-200 text-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-400"})]},c.name)),w.jsx("button",{type:"submit",className:"cursor-pointer w-full py-2 rounded bg-blue-600 hover:bg-blue-800 transition-colors duration-300 text-white font-semibold",children:"Crear máquina"}),t&&w.jsx(tI,{type:t.type,title:t.title,message:t.message,onClose:t.onClose})]})})},f6=va(Ci),d6=()=>{const[i,e]=ne.useState({}),[t,r]=ne.useState(null),a=c=>{const{name:m,value:p}=c.target;e(g=>({...g,[m]:p.toLocaleUpperCase()}))},l=async c=>{c.preventDefault();try{await Yf(sr(f6,"operators"),i),r({type:"success",title:"Usuario creado",message:"El usuario se ha creado correctamente.",onClose:()=>r(null)}),e({})}catch(m){console.error("Error al crear el usuario:",m),r({type:"error",title:"Error al crear usuario",message:"Ha ocurrido un error al crear el usuario. Por favor, inténtalo de nuevo.",onClose:()=>r(null)})}};return w.jsx(w.Fragment,{children:w.jsx("div",{className:"min-h-screen flex items-center justify-center rounded-2xl backgroundForm",children:w.jsxs("form",{onSubmit:l,className:"p-8 rounded-lg shadow-md w-full max-w-md text-white space-y-4",children:[w.jsx("h2",{className:"text-2xl font-semibold text-center",children:"Crear usurio"}),l6.map(c=>w.jsxs("div",{children:[w.jsx("label",{htmlFor:c.name,className:"block text-sm font-medium mb-1",children:c.label}),w.jsx("input",{type:c.type,id:c.name,name:c.name,placeholder:c.placeholder,value:i[c.name]||"",onChange:a,className:"w-full p-2 rounded border border-gray-600 bg-gray-200 text-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-500",required:c.required})]},c.name)),w.jsx("button",{type:"submit",className:"cursor-pointer w-full bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded transition-colors",children:"Crear usuario"}),t&&w.jsx(tI,{type:t.type,title:t.title,message:t.message,onClose:t.onClose})]})})})},m6=va(Ci),p6=()=>{const[i,e]=ne.useState([]),[t,r]=ne.useState(""),[a,l]=ne.useState("");ne.useEffect(()=>{(async()=>{try{const v=(await ku(sr(m6,"registro_horometros"))).docs.map(E=>{const S=E.data();return{id:E.id,...S,originalMachines:S.machines}});e(v)}catch(g){console.log(g)}})()},[]);const c=()=>!t&&!a?i:i.filter(p=>{const g=new Date(p.fecha),v=t?new Date(t):null,E=a?new Date(a):null;return v&&E?g>=v&&g<=E:v?g>=v:E?g<=E:!0}),m=()=>{const p=c(),g=["ID","Fecha","Operador","Máquina","Horómetro Inicial","Horómetro Final","Observaciones","Horas Asignadas","editadoPor"],v=p.flatMap(K=>K.machines.map(V=>[K.id,K.fecha,K.operatorCode,V.machine,V.horometroInicial,V.horometroFinal,V.observaciones,K.horasAsignadas,K.editadoPor])),E=[g.join(","),...v.map(K=>K.join(","))].join(`
`),S=new Blob([E],{type:"text/csv;charset=utf-8;"}),U=URL.createObjectURL(S),F=document.createElement("a");F.setAttribute("href",U),F.setAttribute("download",`registros_${t||"todos"}_${a||"hoy"}.csv`),document.body.appendChild(F),F.click(),document.body.removeChild(F)};return w.jsxs("div",{className:"p-6 bg-white rounded-lg shadow-lg max-w-4xl mx-auto  backgroundForm text-white",children:[w.jsx("h2",{className:"text-2xl font-semibold mb-4 text-center",children:"Exportar registros por rango de fechas"}),w.jsxs("div",{className:"flex flex-col md:flex-row gap-4 mb-4",children:[w.jsxs("div",{className:"flex-1",children:[w.jsx("label",{className:"block mb-1 font-medium  text-white",children:"Fecha inicial"}),w.jsx("input",{type:"date",className:"w-full border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400",value:t,onChange:p=>r(p.target.value)})]}),w.jsxs("div",{className:"flex-1",children:[w.jsx("label",{className:"block mb-1 font-medium text-white",children:"Fecha final"}),w.jsx("input",{type:"date",className:"w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400",value:a,onChange:p=>l(p.target.value)})]})]}),w.jsx("button",{className:"bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded shadow",onClick:m,children:"Exportar CSV"}),w.jsxs("div",{className:"mt-6 max-h-64 overflow-y-auto border border-gray-200 rounded p-4",children:[w.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Registros filtrados:"}),c().length===0?w.jsx("p",{className:"text-gray-500",children:"No hay registros en ese rango de fechas."}):w.jsx("ul",{className:"list-disc list-inside space-y-1 text-white",children:c().map(p=>w.jsxs("li",{className:"text-sm",children:[w.jsx("strong",{children:p.fecha})," - ",p.operatorCode]},p.id))})]})]})};function g6(){return w.jsx("div",{children:w.jsx(p6,{})})}function y6(){return w.jsx(Vk,{children:w.jsx(LC,{children:w.jsxs(NC,{children:[w.jsx(tn,{path:"/",element:w.jsx(Mk,{})}),w.jsxs(tn,{path:"/",element:w.jsx(r6,{children:w.jsx(d3,{})}),children:[w.jsx(tn,{path:"home",element:w.jsx(nT,{})}),w.jsx(tn,{path:"supervisor",element:w.jsx(rT,{})}),w.jsx(tn,{path:"eficencia",element:w.jsx(Tp,{})}),w.jsxs(tn,{path:"picado",element:w.jsx(Fk,{}),children:[w.jsx(tn,{path:"f1315",element:w.jsx(Uk,{})}),w.jsx(tn,{path:"eficence",element:w.jsx(Tp,{})})]}),w.jsx(tn,{path:"/supervisor",element:w.jsx(rT,{})}),w.jsxs(tn,{path:"/configurations",element:w.jsx(o6,{}),children:[w.jsx(tn,{path:"createMachine",element:w.jsx(h6,{})}),w.jsx(tn,{path:"createUser",element:w.jsx(d6,{name:"username",label:"Username",type:"text",required:!0,placeholder:"Enter username"})}),w.jsx(tn,{path:"editingRegister",element:w.jsx(Tp,{editable:!0})})]}),w.jsx(tn,{path:"data",element:w.jsx(g6,{})}),w.jsx(tn,{path:"*",element:w.jsx(nT,{})})]})]})})})}VR.createRoot(document.getElementById("root")).render(w.jsx(ne.StrictMode,{children:w.jsx(y6,{})}));
