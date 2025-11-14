(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))s(d);new MutationObserver(d=>{for(const f of d)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function o(d){const f={};return d.integrity&&(f.integrity=d.integrity),d.referrerPolicy&&(f.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?f.credentials="include":d.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(d){if(d.ep)return;d.ep=!0;const f=o(d);fetch(d.href,f)}})();function Qg(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var kd={exports:{}},mi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z0;function zy(){if(z0)return mi;z0=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function o(s,d,f){var h=null;if(f!==void 0&&(h=""+f),d.key!==void 0&&(h=""+d.key),"key"in d){f={};for(var v in d)v!=="key"&&(f[v]=d[v])}else f=d;return d=f.ref,{$$typeof:a,type:s,key:h,ref:d!==void 0?d:null,props:f}}return mi.Fragment=i,mi.jsx=o,mi.jsxs=o,mi}var N0;function Ny(){return N0||(N0=1,kd.exports=zy()),kd.exports}var r=Ny(),Ld={exports:{}},ve={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M0;function My(){if(M0)return ve;M0=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),j=Symbol.iterator;function C(z){return z===null||typeof z!="object"?null:(z=j&&z[j]||z["@@iterator"],typeof z=="function"?z:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,S={};function E(z,W,ae){this.props=z,this.context=W,this.refs=S,this.updater=ae||T}E.prototype.isReactComponent={},E.prototype.setState=function(z,W){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,W,"setState")},E.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function R(){}R.prototype=E.prototype;function A(z,W,ae){this.props=z,this.context=W,this.refs=S,this.updater=ae||T}var L=A.prototype=new R;L.constructor=A,D(L,E.prototype),L.isPureReactComponent=!0;var V=Array.isArray,q={H:null,A:null,T:null,S:null,V:null},Y=Object.prototype.hasOwnProperty;function X(z,W,ae,ne,oe,Ee){return ae=Ee.ref,{$$typeof:a,type:z,key:W,ref:ae!==void 0?ae:null,props:Ee}}function K(z,W){return X(z.type,W,void 0,void 0,void 0,z.props)}function J(z){return typeof z=="object"&&z!==null&&z.$$typeof===a}function ce(z){var W={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(ae){return W[ae]})}var be=/\/+/g;function Te(z,W){return typeof z=="object"&&z!==null&&z.key!=null?ce(""+z.key):W.toString(36)}function Q(){}function Z(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(Q,Q):(z.status="pending",z.then(function(W){z.status==="pending"&&(z.status="fulfilled",z.value=W)},function(W){z.status==="pending"&&(z.status="rejected",z.reason=W)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function ue(z,W,ae,ne,oe){var Ee=typeof z;(Ee==="undefined"||Ee==="boolean")&&(z=null);var he=!1;if(z===null)he=!0;else switch(Ee){case"bigint":case"string":case"number":he=!0;break;case"object":switch(z.$$typeof){case a:case i:he=!0;break;case x:return he=z._init,ue(he(z._payload),W,ae,ne,oe)}}if(he)return oe=oe(z),he=ne===""?"."+Te(z,0):ne,V(oe)?(ae="",he!=null&&(ae=he.replace(be,"$&/")+"/"),ue(oe,W,ae,"",function(gt){return gt})):oe!=null&&(J(oe)&&(oe=K(oe,ae+(oe.key==null||z&&z.key===oe.key?"":(""+oe.key).replace(be,"$&/")+"/")+he)),W.push(oe)),1;he=0;var it=ne===""?".":ne+":";if(V(z))for(var Ne=0;Ne<z.length;Ne++)ne=z[Ne],Ee=it+Te(ne,Ne),he+=ue(ne,W,ae,Ee,oe);else if(Ne=C(z),typeof Ne=="function")for(z=Ne.call(z),Ne=0;!(ne=z.next()).done;)ne=ne.value,Ee=it+Te(ne,Ne++),he+=ue(ne,W,ae,Ee,oe);else if(Ee==="object"){if(typeof z.then=="function")return ue(Z(z),W,ae,ne,oe);throw W=String(z),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.")}return he}function M(z,W,ae){if(z==null)return z;var ne=[],oe=0;return ue(z,ne,"","",function(Ee){return W.call(ae,Ee,oe++)}),ne}function te(z){if(z._status===-1){var W=z._result;W=W(),W.then(function(ae){(z._status===0||z._status===-1)&&(z._status=1,z._result=ae)},function(ae){(z._status===0||z._status===-1)&&(z._status=2,z._result=ae)}),z._status===-1&&(z._status=0,z._result=W)}if(z._status===1)return z._result.default;throw z._result}var re=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var W=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(W))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)};function je(){}return ve.Children={map:M,forEach:function(z,W,ae){M(z,function(){W.apply(this,arguments)},ae)},count:function(z){var W=0;return M(z,function(){W++}),W},toArray:function(z){return M(z,function(W){return W})||[]},only:function(z){if(!J(z))throw Error("React.Children.only expected to receive a single React element child.");return z}},ve.Component=E,ve.Fragment=o,ve.Profiler=d,ve.PureComponent=A,ve.StrictMode=s,ve.Suspense=p,ve.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=q,ve.__COMPILER_RUNTIME={__proto__:null,c:function(z){return q.H.useMemoCache(z)}},ve.cache=function(z){return function(){return z.apply(null,arguments)}},ve.cloneElement=function(z,W,ae){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var ne=D({},z.props),oe=z.key,Ee=void 0;if(W!=null)for(he in W.ref!==void 0&&(Ee=void 0),W.key!==void 0&&(oe=""+W.key),W)!Y.call(W,he)||he==="key"||he==="__self"||he==="__source"||he==="ref"&&W.ref===void 0||(ne[he]=W[he]);var he=arguments.length-2;if(he===1)ne.children=ae;else if(1<he){for(var it=Array(he),Ne=0;Ne<he;Ne++)it[Ne]=arguments[Ne+2];ne.children=it}return X(z.type,oe,void 0,void 0,Ee,ne)},ve.createContext=function(z){return z={$$typeof:h,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:f,_context:z},z},ve.createElement=function(z,W,ae){var ne,oe={},Ee=null;if(W!=null)for(ne in W.key!==void 0&&(Ee=""+W.key),W)Y.call(W,ne)&&ne!=="key"&&ne!=="__self"&&ne!=="__source"&&(oe[ne]=W[ne]);var he=arguments.length-2;if(he===1)oe.children=ae;else if(1<he){for(var it=Array(he),Ne=0;Ne<he;Ne++)it[Ne]=arguments[Ne+2];oe.children=it}if(z&&z.defaultProps)for(ne in he=z.defaultProps,he)oe[ne]===void 0&&(oe[ne]=he[ne]);return X(z,Ee,void 0,void 0,null,oe)},ve.createRef=function(){return{current:null}},ve.forwardRef=function(z){return{$$typeof:v,render:z}},ve.isValidElement=J,ve.lazy=function(z){return{$$typeof:x,_payload:{_status:-1,_result:z},_init:te}},ve.memo=function(z,W){return{$$typeof:g,type:z,compare:W===void 0?null:W}},ve.startTransition=function(z){var W=q.T,ae={};q.T=ae;try{var ne=z(),oe=q.S;oe!==null&&oe(ae,ne),typeof ne=="object"&&ne!==null&&typeof ne.then=="function"&&ne.then(je,re)}catch(Ee){re(Ee)}finally{q.T=W}},ve.unstable_useCacheRefresh=function(){return q.H.useCacheRefresh()},ve.use=function(z){return q.H.use(z)},ve.useActionState=function(z,W,ae){return q.H.useActionState(z,W,ae)},ve.useCallback=function(z,W){return q.H.useCallback(z,W)},ve.useContext=function(z){return q.H.useContext(z)},ve.useDebugValue=function(){},ve.useDeferredValue=function(z,W){return q.H.useDeferredValue(z,W)},ve.useEffect=function(z,W,ae){var ne=q.H;if(typeof ae=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ne.useEffect(z,W)},ve.useId=function(){return q.H.useId()},ve.useImperativeHandle=function(z,W,ae){return q.H.useImperativeHandle(z,W,ae)},ve.useInsertionEffect=function(z,W){return q.H.useInsertionEffect(z,W)},ve.useLayoutEffect=function(z,W){return q.H.useLayoutEffect(z,W)},ve.useMemo=function(z,W){return q.H.useMemo(z,W)},ve.useOptimistic=function(z,W){return q.H.useOptimistic(z,W)},ve.useReducer=function(z,W,ae){return q.H.useReducer(z,W,ae)},ve.useRef=function(z){return q.H.useRef(z)},ve.useState=function(z){return q.H.useState(z)},ve.useSyncExternalStore=function(z,W,ae){return q.H.useSyncExternalStore(z,W,ae)},ve.useTransition=function(){return q.H.useTransition()},ve.version="19.1.0",ve}var O0;function Sf(){return O0||(O0=1,Ld.exports=My()),Ld.exports}var w=Sf();const At=Qg(w);var _d={exports:{}},pi={},Bd={exports:{}},Hd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k0;function Oy(){return k0||(k0=1,function(a){function i(M,te){var re=M.length;M.push(te);e:for(;0<re;){var je=re-1>>>1,z=M[je];if(0<d(z,te))M[je]=te,M[re]=z,re=je;else break e}}function o(M){return M.length===0?null:M[0]}function s(M){if(M.length===0)return null;var te=M[0],re=M.pop();if(re!==te){M[0]=re;e:for(var je=0,z=M.length,W=z>>>1;je<W;){var ae=2*(je+1)-1,ne=M[ae],oe=ae+1,Ee=M[oe];if(0>d(ne,re))oe<z&&0>d(Ee,ne)?(M[je]=Ee,M[oe]=re,je=oe):(M[je]=ne,M[ae]=re,je=ae);else if(oe<z&&0>d(Ee,re))M[je]=Ee,M[oe]=re,je=oe;else break e}}return te}function d(M,te){var re=M.sortIndex-te.sortIndex;return re!==0?re:M.id-te.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;a.unstable_now=function(){return f.now()}}else{var h=Date,v=h.now();a.unstable_now=function(){return h.now()-v}}var p=[],g=[],x=1,j=null,C=3,T=!1,D=!1,S=!1,E=!1,R=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function V(M){for(var te=o(g);te!==null;){if(te.callback===null)s(g);else if(te.startTime<=M)s(g),te.sortIndex=te.expirationTime,i(p,te);else break;te=o(g)}}function q(M){if(S=!1,V(M),!D)if(o(p)!==null)D=!0,Y||(Y=!0,Te());else{var te=o(g);te!==null&&ue(q,te.startTime-M)}}var Y=!1,X=-1,K=5,J=-1;function ce(){return E?!0:!(a.unstable_now()-J<K)}function be(){if(E=!1,Y){var M=a.unstable_now();J=M;var te=!0;try{e:{D=!1,S&&(S=!1,A(X),X=-1),T=!0;var re=C;try{t:{for(V(M),j=o(p);j!==null&&!(j.expirationTime>M&&ce());){var je=j.callback;if(typeof je=="function"){j.callback=null,C=j.priorityLevel;var z=je(j.expirationTime<=M);if(M=a.unstable_now(),typeof z=="function"){j.callback=z,V(M),te=!0;break t}j===o(p)&&s(p),V(M)}else s(p);j=o(p)}if(j!==null)te=!0;else{var W=o(g);W!==null&&ue(q,W.startTime-M),te=!1}}break e}finally{j=null,C=re,T=!1}te=void 0}}finally{te?Te():Y=!1}}}var Te;if(typeof L=="function")Te=function(){L(be)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,Z=Q.port2;Q.port1.onmessage=be,Te=function(){Z.postMessage(null)}}else Te=function(){R(be,0)};function ue(M,te){X=R(function(){M(a.unstable_now())},te)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(M){M.callback=null},a.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<M?Math.floor(1e3/M):5},a.unstable_getCurrentPriorityLevel=function(){return C},a.unstable_next=function(M){switch(C){case 1:case 2:case 3:var te=3;break;default:te=C}var re=C;C=te;try{return M()}finally{C=re}},a.unstable_requestPaint=function(){E=!0},a.unstable_runWithPriority=function(M,te){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var re=C;C=M;try{return te()}finally{C=re}},a.unstable_scheduleCallback=function(M,te,re){var je=a.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?je+re:je):re=je,M){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=re+z,M={id:x++,callback:te,priorityLevel:M,startTime:re,expirationTime:z,sortIndex:-1},re>je?(M.sortIndex=re,i(g,M),o(p)===null&&M===o(g)&&(S?(A(X),X=-1):S=!0,ue(q,re-je))):(M.sortIndex=z,i(p,M),D||T||(D=!0,Y||(Y=!0,Te()))),M},a.unstable_shouldYield=ce,a.unstable_wrapCallback=function(M){var te=C;return function(){var re=C;C=te;try{return M.apply(this,arguments)}finally{C=re}}}}(Hd)),Hd}var L0;function ky(){return L0||(L0=1,Bd.exports=Oy()),Bd.exports}var Ud={exports:{}},yt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _0;function Ly(){if(_0)return yt;_0=1;var a=Sf();function i(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)g+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var s={d:{f:o,r:function(){throw Error(i(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},d=Symbol.for("react.portal");function f(p,g,x){var j=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:j==null?null:""+j,children:p,containerInfo:g,implementation:x}}var h=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function v(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return yt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,yt.createPortal=function(p,g){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(i(299));return f(p,g,null,x)},yt.flushSync=function(p){var g=h.T,x=s.p;try{if(h.T=null,s.p=2,p)return p()}finally{h.T=g,s.p=x,s.d.f()}},yt.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(p,g))},yt.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},yt.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var x=g.as,j=v(x,g.crossOrigin),C=typeof g.integrity=="string"?g.integrity:void 0,T=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;x==="style"?s.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:j,integrity:C,fetchPriority:T}):x==="script"&&s.d.X(p,{crossOrigin:j,integrity:C,fetchPriority:T,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},yt.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var x=v(g.as,g.crossOrigin);s.d.M(p,{crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(p)},yt.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var x=g.as,j=v(x,g.crossOrigin);s.d.L(p,x,{crossOrigin:j,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},yt.preloadModule=function(p,g){if(typeof p=="string")if(g){var x=v(g.as,g.crossOrigin);s.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(p)},yt.requestFormReset=function(p){s.d.r(p)},yt.unstable_batchedUpdates=function(p,g){return p(g)},yt.useFormState=function(p,g,x){return h.H.useFormState(p,g,x)},yt.useFormStatus=function(){return h.H.useHostTransitionStatus()},yt.version="19.1.0",yt}var B0;function _y(){if(B0)return Ud.exports;B0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),Ud.exports=Ly(),Ud.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H0;function By(){if(H0)return pi;H0=1;var a=ky(),i=Sf(),o=_y();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function v(e){if(f(e)!==e)throw Error(s(188))}function p(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,l=t;;){var c=n.return;if(c===null)break;var u=c.alternate;if(u===null){if(l=c.return,l!==null){n=l;continue}break}if(c.child===u.child){for(u=c.child;u;){if(u===n)return v(c),e;if(u===l)return v(c),t;u=u.sibling}throw Error(s(188))}if(n.return!==l.return)n=c,l=u;else{for(var m=!1,b=c.child;b;){if(b===n){m=!0,n=c,l=u;break}if(b===l){m=!0,l=c,n=u;break}b=b.sibling}if(!m){for(b=u.child;b;){if(b===n){m=!0,n=u,l=c;break}if(b===l){m=!0,l=u,n=c;break}b=b.sibling}if(!m)throw Error(s(189))}}if(n.alternate!==l)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function g(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=g(e),t!==null)return t;e=e.sibling}return null}var x=Object.assign,j=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),A=Symbol.for("react.consumer"),L=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),Y=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),J=Symbol.for("react.activity"),ce=Symbol.for("react.memo_cache_sentinel"),be=Symbol.iterator;function Te(e){return e===null||typeof e!="object"?null:(e=be&&e[be]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Symbol.for("react.client.reference");function Z(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Q?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case D:return"Fragment";case E:return"Profiler";case S:return"StrictMode";case q:return"Suspense";case Y:return"SuspenseList";case J:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case L:return(e.displayName||"Context")+".Provider";case A:return(e._context.displayName||"Context")+".Consumer";case V:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case X:return t=e.displayName||null,t!==null?t:Z(e.type)||"Memo";case K:t=e._payload,e=e._init;try{return Z(e(t))}catch{}}return null}var ue=Array.isArray,M=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,re={pending:!1,data:null,method:null,action:null},je=[],z=-1;function W(e){return{current:e}}function ae(e){0>z||(e.current=je[z],je[z]=null,z--)}function ne(e,t){z++,je[z]=e.current,e.current=t}var oe=W(null),Ee=W(null),he=W(null),it=W(null);function Ne(e,t){switch(ne(he,t),ne(Ee,e),ne(oe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?l0(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=l0(t),e=i0(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ae(oe),ne(oe,e)}function gt(){ae(oe),ae(Ee),ae(he)}function _n(e){e.memoizedState!==null&&ne(it,e);var t=oe.current,n=i0(t,e.type);t!==n&&(ne(Ee,e),ne(oe,n))}function Ma(e){Ee.current===e&&(ae(oe),ae(Ee)),it.current===e&&(ae(it),ci._currentValue=re)}var Kt=Object.prototype.hasOwnProperty,Sc=a.unstable_scheduleCallback,wc=a.unstable_cancelCallback,cx=a.unstable_shouldYield,ux=a.unstable_requestPaint,va=a.unstable_now,dx=a.unstable_getCurrentPriorityLevel,Hf=a.unstable_ImmediatePriority,Uf=a.unstable_UserBlockingPriority,Hi=a.unstable_NormalPriority,fx=a.unstable_LowPriority,qf=a.unstable_IdlePriority,hx=a.log,mx=a.unstable_setDisableYieldValue,xl=null,_t=null;function nn(e){if(typeof hx=="function"&&mx(e),_t&&typeof _t.setStrictMode=="function")try{_t.setStrictMode(xl,e)}catch{}}var Bt=Math.clz32?Math.clz32:xx,px=Math.log,gx=Math.LN2;function xx(e){return e>>>=0,e===0?32:31-(px(e)/gx|0)|0}var Ui=256,qi=4194304;function Bn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Fi(e,t,n){var l=e.pendingLanes;if(l===0)return 0;var c=0,u=e.suspendedLanes,m=e.pingedLanes;e=e.warmLanes;var b=l&134217727;return b!==0?(l=b&~u,l!==0?c=Bn(l):(m&=b,m!==0?c=Bn(m):n||(n=b&~e,n!==0&&(c=Bn(n))))):(b=l&~u,b!==0?c=Bn(b):m!==0?c=Bn(m):n||(n=l&~e,n!==0&&(c=Bn(n)))),c===0?0:t!==0&&t!==c&&(t&u)===0&&(u=c&-c,n=t&-t,u>=n||u===32&&(n&4194048)!==0)?t:c}function vl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function vx(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ff(){var e=Ui;return Ui<<=1,(Ui&4194048)===0&&(Ui=256),e}function Yf(){var e=qi;return qi<<=1,(qi&62914560)===0&&(qi=4194304),e}function Ec(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function yl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function yx(e,t,n,l,c,u){var m=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var b=e.entanglements,$=e.expirationTimes,_=e.hiddenUpdates;for(n=m&~n;0<n;){var G=31-Bt(n),I=1<<G;b[G]=0,$[G]=-1;var B=_[G];if(B!==null)for(_[G]=null,G=0;G<B.length;G++){var H=B[G];H!==null&&(H.lane&=-536870913)}n&=~I}l!==0&&Gf(e,l,0),u!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=u&~(m&~t))}function Gf(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-Bt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|n&4194090}function Vf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var l=31-Bt(n),c=1<<l;c&t|e[l]&t&&(e[l]|=t),n&=~c}}function Cc(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function $c(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Xf(){var e=te.p;return e!==0?e:(e=window.event,e===void 0?32:C0(e.type))}function bx(e,t){var n=te.p;try{return te.p=e,t()}finally{te.p=n}}var rn=Math.random().toString(36).slice(2),xt="__reactFiber$"+rn,Rt="__reactProps$"+rn,fr="__reactContainer$"+rn,Tc="__reactEvents$"+rn,jx="__reactListeners$"+rn,Sx="__reactHandles$"+rn,Qf="__reactResources$"+rn,bl="__reactMarker$"+rn;function Ac(e){delete e[xt],delete e[Rt],delete e[Tc],delete e[jx],delete e[Sx]}function hr(e){var t=e[xt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[fr]||n[xt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=u0(e);e!==null;){if(n=e[xt])return n;e=u0(e)}return t}e=n,n=e.parentNode}return null}function mr(e){if(e=e[xt]||e[fr]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function jl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function pr(e){var t=e[Qf];return t||(t=e[Qf]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function st(e){e[bl]=!0}var Zf=new Set,Pf={};function Hn(e,t){gr(e,t),gr(e+"Capture",t)}function gr(e,t){for(Pf[e]=t,e=0;e<t.length;e++)Zf.add(t[e])}var wx=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Kf={},Jf={};function Ex(e){return Kt.call(Jf,e)?!0:Kt.call(Kf,e)?!1:wx.test(e)?Jf[e]=!0:(Kf[e]=!0,!1)}function Yi(e,t,n){if(Ex(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Gi(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Oa(e,t,n,l){if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+l)}}var Rc,If;function xr(e){if(Rc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Rc=t&&t[1]||"",If=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Rc+e+If}var Dc=!1;function zc(e,t){if(!e||Dc)return"";Dc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var I=function(){throw Error()};if(Object.defineProperty(I.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(I,[])}catch(H){var B=H}Reflect.construct(e,[],I)}else{try{I.call()}catch(H){B=H}e.call(I.prototype)}}else{try{throw Error()}catch(H){B=H}(I=e())&&typeof I.catch=="function"&&I.catch(function(){})}}catch(H){if(H&&B&&typeof H.stack=="string")return[H.stack,B.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=l.DetermineComponentFrameRoot(),m=u[0],b=u[1];if(m&&b){var $=m.split(`
`),_=b.split(`
`);for(c=l=0;l<$.length&&!$[l].includes("DetermineComponentFrameRoot");)l++;for(;c<_.length&&!_[c].includes("DetermineComponentFrameRoot");)c++;if(l===$.length||c===_.length)for(l=$.length-1,c=_.length-1;1<=l&&0<=c&&$[l]!==_[c];)c--;for(;1<=l&&0<=c;l--,c--)if($[l]!==_[c]){if(l!==1||c!==1)do if(l--,c--,0>c||$[l]!==_[c]){var G=`
`+$[l].replace(" at new "," at ");return e.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",e.displayName)),G}while(1<=l&&0<=c);break}}}finally{Dc=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?xr(n):""}function Cx(e){switch(e.tag){case 26:case 27:case 5:return xr(e.type);case 16:return xr("Lazy");case 13:return xr("Suspense");case 19:return xr("SuspenseList");case 0:case 15:return zc(e.type,!1);case 11:return zc(e.type.render,!1);case 1:return zc(e.type,!0);case 31:return xr("Activity");default:return""}}function Wf(e){try{var t="";do t+=Cx(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Jt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function eh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function $x(e){var t=eh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var c=n.get,u=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return c.call(this)},set:function(m){l=""+m,u.call(this,m)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return l},setValue:function(m){l=""+m},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Vi(e){e._valueTracker||(e._valueTracker=$x(e))}function th(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),l="";return e&&(l=eh(e)?e.checked?"true":"false":e.value),e=l,e!==n?(t.setValue(e),!0):!1}function Xi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Tx=/[\n"\\]/g;function It(e){return e.replace(Tx,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Nc(e,t,n,l,c,u,m,b){e.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.type=m:e.removeAttribute("type"),t!=null?m==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Jt(t)):e.value!==""+Jt(t)&&(e.value=""+Jt(t)):m!=="submit"&&m!=="reset"||e.removeAttribute("value"),t!=null?Mc(e,m,Jt(t)):n!=null?Mc(e,m,Jt(n)):l!=null&&e.removeAttribute("value"),c==null&&u!=null&&(e.defaultChecked=!!u),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+Jt(b):e.removeAttribute("name")}function ah(e,t,n,l,c,u,m,b){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||n!=null){if(!(u!=="submit"&&u!=="reset"||t!=null))return;n=n!=null?""+Jt(n):"",t=t!=null?""+Jt(t):n,b||t===e.value||(e.value=t),e.defaultValue=t}l=l??c,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=b?e.checked:!!l,e.defaultChecked=!!l,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.name=m)}function Mc(e,t,n){t==="number"&&Xi(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function vr(e,t,n,l){if(e=e.options,t){t={};for(var c=0;c<n.length;c++)t["$"+n[c]]=!0;for(n=0;n<e.length;n++)c=t.hasOwnProperty("$"+e[n].value),e[n].selected!==c&&(e[n].selected=c),c&&l&&(e[n].defaultSelected=!0)}else{for(n=""+Jt(n),t=null,c=0;c<e.length;c++){if(e[c].value===n){e[c].selected=!0,l&&(e[c].defaultSelected=!0);return}t!==null||e[c].disabled||(t=e[c])}t!==null&&(t.selected=!0)}}function nh(e,t,n){if(t!=null&&(t=""+Jt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Jt(n):""}function rh(e,t,n,l){if(t==null){if(l!=null){if(n!=null)throw Error(s(92));if(ue(l)){if(1<l.length)throw Error(s(93));l=l[0]}n=l}n==null&&(n=""),t=n}n=Jt(t),e.defaultValue=n,l=e.textContent,l===n&&l!==""&&l!==null&&(e.value=l)}function yr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ax=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function lh(e,t,n){var l=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,n):typeof n!="number"||n===0||Ax.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function ih(e,t,n){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var c in t)l=t[c],t.hasOwnProperty(c)&&n[c]!==l&&lh(e,c,l)}else for(var u in t)t.hasOwnProperty(u)&&lh(e,u,t[u])}function Oc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Dx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Qi(e){return Dx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var kc=null;function Lc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var br=null,jr=null;function sh(e){var t=mr(e);if(t&&(e=t.stateNode)){var n=e[Rt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Nc(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+It(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var l=n[t];if(l!==e&&l.form===e.form){var c=l[Rt]||null;if(!c)throw Error(s(90));Nc(l,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(t=0;t<n.length;t++)l=n[t],l.form===e.form&&th(l)}break e;case"textarea":nh(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&vr(e,!!n.multiple,t,!1)}}}var _c=!1;function oh(e,t,n){if(_c)return e(t,n);_c=!0;try{var l=e(t);return l}finally{if(_c=!1,(br!==null||jr!==null)&&(Ns(),br&&(t=br,e=jr,jr=br=null,sh(t),e)))for(t=0;t<e.length;t++)sh(e[t])}}function Sl(e,t){var n=e.stateNode;if(n===null)return null;var l=n[Rt]||null;if(l===null)return null;n=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var ka=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bc=!1;if(ka)try{var wl={};Object.defineProperty(wl,"passive",{get:function(){Bc=!0}}),window.addEventListener("test",wl,wl),window.removeEventListener("test",wl,wl)}catch{Bc=!1}var ln=null,Hc=null,Zi=null;function ch(){if(Zi)return Zi;var e,t=Hc,n=t.length,l,c="value"in ln?ln.value:ln.textContent,u=c.length;for(e=0;e<n&&t[e]===c[e];e++);var m=n-e;for(l=1;l<=m&&t[n-l]===c[u-l];l++);return Zi=c.slice(e,1<l?1-l:void 0)}function Pi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ki(){return!0}function uh(){return!1}function Dt(e){function t(n,l,c,u,m){this._reactName=n,this._targetInst=c,this.type=l,this.nativeEvent=u,this.target=m,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(n=e[b],this[b]=n?n(u):u[b]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Ki:uh,this.isPropagationStopped=uh,this}return x(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ki)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ki)},persist:function(){},isPersistent:Ki}),t}var Un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ji=Dt(Un),El=x({},Un,{view:0,detail:0}),zx=Dt(El),Uc,qc,Cl,Ii=x({},El,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Cl&&(Cl&&e.type==="mousemove"?(Uc=e.screenX-Cl.screenX,qc=e.screenY-Cl.screenY):qc=Uc=0,Cl=e),Uc)},movementY:function(e){return"movementY"in e?e.movementY:qc}}),dh=Dt(Ii),Nx=x({},Ii,{dataTransfer:0}),Mx=Dt(Nx),Ox=x({},El,{relatedTarget:0}),Fc=Dt(Ox),kx=x({},Un,{animationName:0,elapsedTime:0,pseudoElement:0}),Lx=Dt(kx),_x=x({},Un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Bx=Dt(_x),Hx=x({},Un,{data:0}),fh=Dt(Hx),Ux={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yx(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Fx[e])?!!t[e]:!1}function Yc(){return Yx}var Gx=x({},El,{key:function(e){if(e.key){var t=Ux[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Pi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?qx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yc,charCode:function(e){return e.type==="keypress"?Pi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Vx=Dt(Gx),Xx=x({},Ii,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hh=Dt(Xx),Qx=x({},El,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yc}),Zx=Dt(Qx),Px=x({},Un,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kx=Dt(Px),Jx=x({},Ii,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ix=Dt(Jx),Wx=x({},Un,{newState:0,oldState:0}),ev=Dt(Wx),tv=[9,13,27,32],Gc=ka&&"CompositionEvent"in window,$l=null;ka&&"documentMode"in document&&($l=document.documentMode);var av=ka&&"TextEvent"in window&&!$l,mh=ka&&(!Gc||$l&&8<$l&&11>=$l),ph=" ",gh=!1;function xh(e,t){switch(e){case"keyup":return tv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Sr=!1;function nv(e,t){switch(e){case"compositionend":return vh(t);case"keypress":return t.which!==32?null:(gh=!0,ph);case"textInput":return e=t.data,e===ph&&gh?null:e;default:return null}}function rv(e,t){if(Sr)return e==="compositionend"||!Gc&&xh(e,t)?(e=ch(),Zi=Hc=ln=null,Sr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return mh&&t.locale!=="ko"?null:t.data;default:return null}}var lv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!lv[e.type]:t==="textarea"}function bh(e,t,n,l){br?jr?jr.push(l):jr=[l]:br=l,t=Bs(t,"onChange"),0<t.length&&(n=new Ji("onChange","change",null,n,l),e.push({event:n,listeners:t}))}var Tl=null,Al=null;function iv(e){e0(e,0)}function Wi(e){var t=jl(e);if(th(t))return e}function jh(e,t){if(e==="change")return t}var Sh=!1;if(ka){var Vc;if(ka){var Xc="oninput"in document;if(!Xc){var wh=document.createElement("div");wh.setAttribute("oninput","return;"),Xc=typeof wh.oninput=="function"}Vc=Xc}else Vc=!1;Sh=Vc&&(!document.documentMode||9<document.documentMode)}function Eh(){Tl&&(Tl.detachEvent("onpropertychange",Ch),Al=Tl=null)}function Ch(e){if(e.propertyName==="value"&&Wi(Al)){var t=[];bh(t,Al,e,Lc(e)),oh(iv,t)}}function sv(e,t,n){e==="focusin"?(Eh(),Tl=t,Al=n,Tl.attachEvent("onpropertychange",Ch)):e==="focusout"&&Eh()}function ov(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Wi(Al)}function cv(e,t){if(e==="click")return Wi(t)}function uv(e,t){if(e==="input"||e==="change")return Wi(t)}function dv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ht=typeof Object.is=="function"?Object.is:dv;function Rl(e,t){if(Ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),l=Object.keys(t);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var c=n[l];if(!Kt.call(t,c)||!Ht(e[c],t[c]))return!1}return!0}function $h(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Th(e,t){var n=$h(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=t&&l>=t)return{node:n,offset:t-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=$h(n)}}function Ah(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ah(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Rh(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Xi(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Xi(e.document)}return t}function Qc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var fv=ka&&"documentMode"in document&&11>=document.documentMode,wr=null,Zc=null,Dl=null,Pc=!1;function Dh(e,t,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pc||wr==null||wr!==Xi(l)||(l=wr,"selectionStart"in l&&Qc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Dl&&Rl(Dl,l)||(Dl=l,l=Bs(Zc,"onSelect"),0<l.length&&(t=new Ji("onSelect","select",null,t,n),e.push({event:t,listeners:l}),t.target=wr)))}function qn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Er={animationend:qn("Animation","AnimationEnd"),animationiteration:qn("Animation","AnimationIteration"),animationstart:qn("Animation","AnimationStart"),transitionrun:qn("Transition","TransitionRun"),transitionstart:qn("Transition","TransitionStart"),transitioncancel:qn("Transition","TransitionCancel"),transitionend:qn("Transition","TransitionEnd")},Kc={},zh={};ka&&(zh=document.createElement("div").style,"AnimationEvent"in window||(delete Er.animationend.animation,delete Er.animationiteration.animation,delete Er.animationstart.animation),"TransitionEvent"in window||delete Er.transitionend.transition);function Fn(e){if(Kc[e])return Kc[e];if(!Er[e])return e;var t=Er[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in zh)return Kc[e]=t[n];return e}var Nh=Fn("animationend"),Mh=Fn("animationiteration"),Oh=Fn("animationstart"),hv=Fn("transitionrun"),mv=Fn("transitionstart"),pv=Fn("transitioncancel"),kh=Fn("transitionend"),Lh=new Map,Jc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Jc.push("scrollEnd");function oa(e,t){Lh.set(e,t),Hn(t,[e])}var _h=new WeakMap;function Wt(e,t){if(typeof e=="object"&&e!==null){var n=_h.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Wf(t)},_h.set(e,t),t)}return{value:e,source:t,stack:Wf(t)}}var ea=[],Cr=0,Ic=0;function es(){for(var e=Cr,t=Ic=Cr=0;t<e;){var n=ea[t];ea[t++]=null;var l=ea[t];ea[t++]=null;var c=ea[t];ea[t++]=null;var u=ea[t];if(ea[t++]=null,l!==null&&c!==null){var m=l.pending;m===null?c.next=c:(c.next=m.next,m.next=c),l.pending=c}u!==0&&Bh(n,c,u)}}function ts(e,t,n,l){ea[Cr++]=e,ea[Cr++]=t,ea[Cr++]=n,ea[Cr++]=l,Ic|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Wc(e,t,n,l){return ts(e,t,n,l),as(e)}function $r(e,t){return ts(e,null,null,t),as(e)}function Bh(e,t,n){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n);for(var c=!1,u=e.return;u!==null;)u.childLanes|=n,l=u.alternate,l!==null&&(l.childLanes|=n),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(c=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,c&&t!==null&&(c=31-Bt(n),e=u.hiddenUpdates,l=e[c],l===null?e[c]=[t]:l.push(t),t.lane=n|536870912),u):null}function as(e){if(50<ti)throw ti=0,ld=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Tr={};function gv(e,t,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ut(e,t,n,l){return new gv(e,t,n,l)}function eu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function La(e,t){var n=e.alternate;return n===null?(n=Ut(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Hh(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ns(e,t,n,l,c,u){var m=0;if(l=e,typeof e=="function")eu(e)&&(m=1);else if(typeof e=="string")m=vy(e,n,oe.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case J:return e=Ut(31,n,t,c),e.elementType=J,e.lanes=u,e;case D:return Yn(n.children,c,u,t);case S:m=8,c|=24;break;case E:return e=Ut(12,n,t,c|2),e.elementType=E,e.lanes=u,e;case q:return e=Ut(13,n,t,c),e.elementType=q,e.lanes=u,e;case Y:return e=Ut(19,n,t,c),e.elementType=Y,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case R:case L:m=10;break e;case A:m=9;break e;case V:m=11;break e;case X:m=14;break e;case K:m=16,l=null;break e}m=29,n=Error(s(130,e===null?"null":typeof e,"")),l=null}return t=Ut(m,n,t,c),t.elementType=e,t.type=l,t.lanes=u,t}function Yn(e,t,n,l){return e=Ut(7,e,l,t),e.lanes=n,e}function tu(e,t,n){return e=Ut(6,e,null,t),e.lanes=n,e}function au(e,t,n){return t=Ut(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ar=[],Rr=0,rs=null,ls=0,ta=[],aa=0,Gn=null,_a=1,Ba="";function Vn(e,t){Ar[Rr++]=ls,Ar[Rr++]=rs,rs=e,ls=t}function Uh(e,t,n){ta[aa++]=_a,ta[aa++]=Ba,ta[aa++]=Gn,Gn=e;var l=_a;e=Ba;var c=32-Bt(l)-1;l&=~(1<<c),n+=1;var u=32-Bt(t)+c;if(30<u){var m=c-c%5;u=(l&(1<<m)-1).toString(32),l>>=m,c-=m,_a=1<<32-Bt(t)+c|n<<c|l,Ba=u+e}else _a=1<<u|n<<c|l,Ba=e}function nu(e){e.return!==null&&(Vn(e,1),Uh(e,1,0))}function ru(e){for(;e===rs;)rs=Ar[--Rr],Ar[Rr]=null,ls=Ar[--Rr],Ar[Rr]=null;for(;e===Gn;)Gn=ta[--aa],ta[aa]=null,Ba=ta[--aa],ta[aa]=null,_a=ta[--aa],ta[aa]=null}var Et=null,Qe=null,ze=!1,Xn=null,ya=!1,lu=Error(s(519));function Qn(e){var t=Error(s(418,""));throw Ml(Wt(t,e)),lu}function qh(e){var t=e.stateNode,n=e.type,l=e.memoizedProps;switch(t[xt]=e,t[Rt]=l,n){case"dialog":$e("cancel",t),$e("close",t);break;case"iframe":case"object":case"embed":$e("load",t);break;case"video":case"audio":for(n=0;n<ni.length;n++)$e(ni[n],t);break;case"source":$e("error",t);break;case"img":case"image":case"link":$e("error",t),$e("load",t);break;case"details":$e("toggle",t);break;case"input":$e("invalid",t),ah(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Vi(t);break;case"select":$e("invalid",t);break;case"textarea":$e("invalid",t),rh(t,l.value,l.defaultValue,l.children),Vi(t)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||l.suppressHydrationWarning===!0||r0(t.textContent,n)?(l.popover!=null&&($e("beforetoggle",t),$e("toggle",t)),l.onScroll!=null&&$e("scroll",t),l.onScrollEnd!=null&&$e("scrollend",t),l.onClick!=null&&(t.onclick=Hs),t=!0):t=!1,t||Qn(e)}function Fh(e){for(Et=e.return;Et;)switch(Et.tag){case 5:case 13:ya=!1;return;case 27:case 3:ya=!0;return;default:Et=Et.return}}function zl(e){if(e!==Et)return!1;if(!ze)return Fh(e),ze=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||jd(e.type,e.memoizedProps)),n=!n),n&&Qe&&Qn(e),Fh(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){Qe=ua(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}Qe=null}}else t===27?(t=Qe,Sn(e.type)?(e=Cd,Cd=null,Qe=e):Qe=t):Qe=Et?ua(e.stateNode.nextSibling):null;return!0}function Nl(){Qe=Et=null,ze=!1}function Yh(){var e=Xn;return e!==null&&(Mt===null?Mt=e:Mt.push.apply(Mt,e),Xn=null),e}function Ml(e){Xn===null?Xn=[e]:Xn.push(e)}var iu=W(null),Zn=null,Ha=null;function sn(e,t,n){ne(iu,t._currentValue),t._currentValue=n}function Ua(e){e._currentValue=iu.current,ae(iu)}function su(e,t,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===n)break;e=e.return}}function ou(e,t,n,l){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var u=c.dependencies;if(u!==null){var m=c.child;u=u.firstContext;e:for(;u!==null;){var b=u;u=c;for(var $=0;$<t.length;$++)if(b.context===t[$]){u.lanes|=n,b=u.alternate,b!==null&&(b.lanes|=n),su(u.return,n,e),l||(m=null);break e}u=b.next}}else if(c.tag===18){if(m=c.return,m===null)throw Error(s(341));m.lanes|=n,u=m.alternate,u!==null&&(u.lanes|=n),su(m,n,e),m=null}else m=c.child;if(m!==null)m.return=c;else for(m=c;m!==null;){if(m===e){m=null;break}if(c=m.sibling,c!==null){c.return=m.return,m=c;break}m=m.return}c=m}}function Ol(e,t,n,l){e=null;for(var c=t,u=!1;c!==null;){if(!u){if((c.flags&524288)!==0)u=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var m=c.alternate;if(m===null)throw Error(s(387));if(m=m.memoizedProps,m!==null){var b=c.type;Ht(c.pendingProps.value,m.value)||(e!==null?e.push(b):e=[b])}}else if(c===it.current){if(m=c.alternate,m===null)throw Error(s(387));m.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(ci):e=[ci])}c=c.return}e!==null&&ou(t,e,n,l),t.flags|=262144}function is(e){for(e=e.firstContext;e!==null;){if(!Ht(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Pn(e){Zn=e,Ha=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function vt(e){return Gh(Zn,e)}function ss(e,t){return Zn===null&&Pn(e),Gh(e,t)}function Gh(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ha===null){if(e===null)throw Error(s(308));Ha=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ha=Ha.next=t;return n}var xv=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},vv=a.unstable_scheduleCallback,yv=a.unstable_NormalPriority,at={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function cu(){return{controller:new xv,data:new Map,refCount:0}}function kl(e){e.refCount--,e.refCount===0&&vv(yv,function(){e.controller.abort()})}var Ll=null,uu=0,Dr=0,zr=null;function bv(e,t){if(Ll===null){var n=Ll=[];uu=0,Dr=fd(),zr={status:"pending",value:void 0,then:function(l){n.push(l)}}}return uu++,t.then(Vh,Vh),t}function Vh(){if(--uu===0&&Ll!==null){zr!==null&&(zr.status="fulfilled");var e=Ll;Ll=null,Dr=0,zr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function jv(e,t){var n=[],l={status:"pending",value:null,reason:null,then:function(c){n.push(c)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var c=0;c<n.length;c++)(0,n[c])(t)},function(c){for(l.status="rejected",l.reason=c,c=0;c<n.length;c++)(0,n[c])(void 0)}),l}var Xh=M.S;M.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&bv(e,t),Xh!==null&&Xh(e,t)};var Kn=W(null);function du(){var e=Kn.current;return e!==null?e:Fe.pooledCache}function os(e,t){t===null?ne(Kn,Kn.current):ne(Kn,t.pool)}function Qh(){var e=du();return e===null?null:{parent:at._currentValue,pool:e}}var _l=Error(s(460)),Zh=Error(s(474)),cs=Error(s(542)),fu={then:function(){}};function Ph(e){return e=e.status,e==="fulfilled"||e==="rejected"}function us(){}function Kh(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(us,us),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ih(e),e;default:if(typeof t.status=="string")t.then(us,us);else{if(e=Fe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var c=t;c.status="fulfilled",c.value=l}},function(l){if(t.status==="pending"){var c=t;c.status="rejected",c.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ih(e),e}throw Bl=t,_l}}var Bl=null;function Jh(){if(Bl===null)throw Error(s(459));var e=Bl;return Bl=null,e}function Ih(e){if(e===_l||e===cs)throw Error(s(483))}var on=!1;function hu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function mu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function cn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function un(e,t,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Oe&2)!==0){var c=l.pending;return c===null?t.next=t:(t.next=c.next,c.next=t),l.pending=t,t=as(e),Bh(e,null,n),t}return ts(e,l,t,n),as(e)}function Hl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,Vf(e,n)}}function pu(e,t){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var c=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var m={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};u===null?c=u=m:u=u.next=m,n=n.next}while(n!==null);u===null?c=u=t:u=u.next=t}else c=u=t;n={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:u,shared:l.shared,callbacks:l.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var gu=!1;function Ul(){if(gu){var e=zr;if(e!==null)throw e}}function ql(e,t,n,l){gu=!1;var c=e.updateQueue;on=!1;var u=c.firstBaseUpdate,m=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var $=b,_=$.next;$.next=null,m===null?u=_:m.next=_,m=$;var G=e.alternate;G!==null&&(G=G.updateQueue,b=G.lastBaseUpdate,b!==m&&(b===null?G.firstBaseUpdate=_:b.next=_,G.lastBaseUpdate=$))}if(u!==null){var I=c.baseState;m=0,G=_=$=null,b=u;do{var B=b.lane&-536870913,H=B!==b.lane;if(H?(Ae&B)===B:(l&B)===B){B!==0&&B===Dr&&(gu=!0),G!==null&&(G=G.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var pe=e,de=b;B=t;var Be=n;switch(de.tag){case 1:if(pe=de.payload,typeof pe=="function"){I=pe.call(Be,I,B);break e}I=pe;break e;case 3:pe.flags=pe.flags&-65537|128;case 0:if(pe=de.payload,B=typeof pe=="function"?pe.call(Be,I,B):pe,B==null)break e;I=x({},I,B);break e;case 2:on=!0}}B=b.callback,B!==null&&(e.flags|=64,H&&(e.flags|=8192),H=c.callbacks,H===null?c.callbacks=[B]:H.push(B))}else H={lane:B,tag:b.tag,payload:b.payload,callback:b.callback,next:null},G===null?(_=G=H,$=I):G=G.next=H,m|=B;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;H=b,b=H.next,H.next=null,c.lastBaseUpdate=H,c.shared.pending=null}}while(!0);G===null&&($=I),c.baseState=$,c.firstBaseUpdate=_,c.lastBaseUpdate=G,u===null&&(c.shared.lanes=0),vn|=m,e.lanes=m,e.memoizedState=I}}function Wh(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function em(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Wh(n[e],t)}var Nr=W(null),ds=W(0);function tm(e,t){e=Qa,ne(ds,e),ne(Nr,t),Qa=e|t.baseLanes}function xu(){ne(ds,Qa),ne(Nr,Nr.current)}function vu(){Qa=ds.current,ae(Nr),ae(ds)}var dn=0,Se=null,Le=null,Ie=null,fs=!1,Mr=!1,Jn=!1,hs=0,Fl=0,Or=null,Sv=0;function Pe(){throw Error(s(321))}function yu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ht(e[n],t[n]))return!1;return!0}function bu(e,t,n,l,c,u){return dn=u,Se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,M.H=e===null||e.memoizedState===null?Bm:Hm,Jn=!1,u=n(l,c),Jn=!1,Mr&&(u=nm(t,n,l,c)),am(e),u}function am(e){M.H=ys;var t=Le!==null&&Le.next!==null;if(dn=0,Ie=Le=Se=null,fs=!1,Fl=0,Or=null,t)throw Error(s(300));e===null||ot||(e=e.dependencies,e!==null&&is(e)&&(ot=!0))}function nm(e,t,n,l){Se=e;var c=0;do{if(Mr&&(Or=null),Fl=0,Mr=!1,25<=c)throw Error(s(301));if(c+=1,Ie=Le=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}M.H=Rv,u=t(n,l)}while(Mr);return u}function wv(){var e=M.H,t=e.useState()[0];return t=typeof t.then=="function"?Yl(t):t,e=e.useState()[0],(Le!==null?Le.memoizedState:null)!==e&&(Se.flags|=1024),t}function ju(){var e=hs!==0;return hs=0,e}function Su(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function wu(e){if(fs){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}fs=!1}dn=0,Ie=Le=Se=null,Mr=!1,Fl=hs=0,Or=null}function zt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ie===null?Se.memoizedState=Ie=e:Ie=Ie.next=e,Ie}function We(){if(Le===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var t=Ie===null?Se.memoizedState:Ie.next;if(t!==null)Ie=t,Le=e;else{if(e===null)throw Se.alternate===null?Error(s(467)):Error(s(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},Ie===null?Se.memoizedState=Ie=e:Ie=Ie.next=e}return Ie}function Eu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Yl(e){var t=Fl;return Fl+=1,Or===null&&(Or=[]),e=Kh(Or,e,t),t=Se,(Ie===null?t.memoizedState:Ie.next)===null&&(t=t.alternate,M.H=t===null||t.memoizedState===null?Bm:Hm),e}function ms(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Yl(e);if(e.$$typeof===L)return vt(e)}throw Error(s(438,String(e)))}function Cu(e){var t=null,n=Se.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var l=Se.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(c){return c.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Eu(),Se.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),l=0;l<e;l++)n[l]=ce;return t.index++,n}function qa(e,t){return typeof t=="function"?t(e):t}function ps(e){var t=We();return $u(t,Le,e)}function $u(e,t,n){var l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=n;var c=e.baseQueue,u=l.pending;if(u!==null){if(c!==null){var m=c.next;c.next=u.next,u.next=m}t.baseQueue=c=u,l.pending=null}if(u=e.baseState,c===null)e.memoizedState=u;else{t=c.next;var b=m=null,$=null,_=t,G=!1;do{var I=_.lane&-536870913;if(I!==_.lane?(Ae&I)===I:(dn&I)===I){var B=_.revertLane;if(B===0)$!==null&&($=$.next={lane:0,revertLane:0,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null}),I===Dr&&(G=!0);else if((dn&B)===B){_=_.next,B===Dr&&(G=!0);continue}else I={lane:0,revertLane:_.revertLane,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},$===null?(b=$=I,m=u):$=$.next=I,Se.lanes|=B,vn|=B;I=_.action,Jn&&n(u,I),u=_.hasEagerState?_.eagerState:n(u,I)}else B={lane:I,revertLane:_.revertLane,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},$===null?(b=$=B,m=u):$=$.next=B,Se.lanes|=I,vn|=I;_=_.next}while(_!==null&&_!==t);if($===null?m=u:$.next=b,!Ht(u,e.memoizedState)&&(ot=!0,G&&(n=zr,n!==null)))throw n;e.memoizedState=u,e.baseState=m,e.baseQueue=$,l.lastRenderedState=u}return c===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Tu(e){var t=We(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var l=n.dispatch,c=n.pending,u=t.memoizedState;if(c!==null){n.pending=null;var m=c=c.next;do u=e(u,m.action),m=m.next;while(m!==c);Ht(u,t.memoizedState)||(ot=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),n.lastRenderedState=u}return[u,l]}function rm(e,t,n){var l=Se,c=We(),u=ze;if(u){if(n===void 0)throw Error(s(407));n=n()}else n=t();var m=!Ht((Le||c).memoizedState,n);m&&(c.memoizedState=n,ot=!0),c=c.queue;var b=sm.bind(null,l,c,e);if(Gl(2048,8,b,[e]),c.getSnapshot!==t||m||Ie!==null&&Ie.memoizedState.tag&1){if(l.flags|=2048,kr(9,gs(),im.bind(null,l,c,n,t),null),Fe===null)throw Error(s(349));u||(dn&124)!==0||lm(l,t,n)}return n}function lm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Se.updateQueue,t===null?(t=Eu(),Se.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function im(e,t,n,l){t.value=n,t.getSnapshot=l,om(t)&&cm(e)}function sm(e,t,n){return n(function(){om(t)&&cm(e)})}function om(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ht(e,n)}catch{return!0}}function cm(e){var t=$r(e,2);t!==null&&Vt(t,e,2)}function Au(e){var t=zt();if(typeof e=="function"){var n=e;if(e=n(),Jn){nn(!0);try{n()}finally{nn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qa,lastRenderedState:e},t}function um(e,t,n,l){return e.baseState=n,$u(e,Le,typeof l=="function"?l:qa)}function Ev(e,t,n,l,c){if(vs(e))throw Error(s(485));if(e=t.action,e!==null){var u={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){u.listeners.push(m)}};M.T!==null?n(!0):u.isTransition=!1,l(u),n=t.pending,n===null?(u.next=t.pending=u,dm(t,u)):(u.next=n.next,t.pending=n.next=u)}}function dm(e,t){var n=t.action,l=t.payload,c=e.state;if(t.isTransition){var u=M.T,m={};M.T=m;try{var b=n(c,l),$=M.S;$!==null&&$(m,b),fm(e,t,b)}catch(_){Ru(e,t,_)}finally{M.T=u}}else try{u=n(c,l),fm(e,t,u)}catch(_){Ru(e,t,_)}}function fm(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){hm(e,t,l)},function(l){return Ru(e,t,l)}):hm(e,t,n)}function hm(e,t,n){t.status="fulfilled",t.value=n,mm(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,dm(e,n)))}function Ru(e,t,n){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=n,mm(t),t=t.next;while(t!==l)}e.action=null}function mm(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function pm(e,t){return t}function gm(e,t){if(ze){var n=Fe.formState;if(n!==null){e:{var l=Se;if(ze){if(Qe){t:{for(var c=Qe,u=ya;c.nodeType!==8;){if(!u){c=null;break t}if(c=ua(c.nextSibling),c===null){c=null;break t}}u=c.data,c=u==="F!"||u==="F"?c:null}if(c){Qe=ua(c.nextSibling),l=c.data==="F!";break e}}Qn(l)}l=!1}l&&(t=n[0])}}return n=zt(),n.memoizedState=n.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pm,lastRenderedState:t},n.queue=l,n=km.bind(null,Se,l),l.dispatch=n,l=Au(!1),u=Ou.bind(null,Se,!1,l.queue),l=zt(),c={state:t,dispatch:null,action:e,pending:null},l.queue=c,n=Ev.bind(null,Se,c,u,n),c.dispatch=n,l.memoizedState=e,[t,n,!1]}function xm(e){var t=We();return vm(t,Le,e)}function vm(e,t,n){if(t=$u(e,t,pm)[0],e=ps(qa)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=Yl(t)}catch(m){throw m===_l?cs:m}else l=t;t=We();var c=t.queue,u=c.dispatch;return n!==t.memoizedState&&(Se.flags|=2048,kr(9,gs(),Cv.bind(null,c,n),null)),[l,u,e]}function Cv(e,t){e.action=t}function ym(e){var t=We(),n=Le;if(n!==null)return vm(t,n,e);We(),t=t.memoizedState,n=We();var l=n.queue.dispatch;return n.memoizedState=e,[t,l,!1]}function kr(e,t,n,l){return e={tag:e,create:n,deps:l,inst:t,next:null},t=Se.updateQueue,t===null&&(t=Eu(),Se.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,t.lastEffect=e),e}function gs(){return{destroy:void 0,resource:void 0}}function bm(){return We().memoizedState}function xs(e,t,n,l){var c=zt();l=l===void 0?null:l,Se.flags|=e,c.memoizedState=kr(1|t,gs(),n,l)}function Gl(e,t,n,l){var c=We();l=l===void 0?null:l;var u=c.memoizedState.inst;Le!==null&&l!==null&&yu(l,Le.memoizedState.deps)?c.memoizedState=kr(t,u,n,l):(Se.flags|=e,c.memoizedState=kr(1|t,u,n,l))}function jm(e,t){xs(8390656,8,e,t)}function Sm(e,t){Gl(2048,8,e,t)}function wm(e,t){return Gl(4,2,e,t)}function Em(e,t){return Gl(4,4,e,t)}function Cm(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function $m(e,t,n){n=n!=null?n.concat([e]):null,Gl(4,4,Cm.bind(null,t,e),n)}function Du(){}function Tm(e,t){var n=We();t=t===void 0?null:t;var l=n.memoizedState;return t!==null&&yu(t,l[1])?l[0]:(n.memoizedState=[e,t],e)}function Am(e,t){var n=We();t=t===void 0?null:t;var l=n.memoizedState;if(t!==null&&yu(t,l[1]))return l[0];if(l=e(),Jn){nn(!0);try{e()}finally{nn(!1)}}return n.memoizedState=[l,t],l}function zu(e,t,n){return n===void 0||(dn&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=zp(),Se.lanes|=e,vn|=e,n)}function Rm(e,t,n,l){return Ht(n,t)?n:Nr.current!==null?(e=zu(e,n,l),Ht(e,t)||(ot=!0),e):(dn&42)===0?(ot=!0,e.memoizedState=n):(e=zp(),Se.lanes|=e,vn|=e,t)}function Dm(e,t,n,l,c){var u=te.p;te.p=u!==0&&8>u?u:8;var m=M.T,b={};M.T=b,Ou(e,!1,t,n);try{var $=c(),_=M.S;if(_!==null&&_(b,$),$!==null&&typeof $=="object"&&typeof $.then=="function"){var G=jv($,l);Vl(e,t,G,Gt(e))}else Vl(e,t,l,Gt(e))}catch(I){Vl(e,t,{then:function(){},status:"rejected",reason:I},Gt())}finally{te.p=u,M.T=m}}function $v(){}function Nu(e,t,n,l){if(e.tag!==5)throw Error(s(476));var c=zm(e).queue;Dm(e,c,t,re,n===null?$v:function(){return Nm(e),n(l)})}function zm(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:re,baseState:re,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qa,lastRenderedState:re},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qa,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Nm(e){var t=zm(e).next.queue;Vl(e,t,{},Gt())}function Mu(){return vt(ci)}function Mm(){return We().memoizedState}function Om(){return We().memoizedState}function Tv(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Gt();e=cn(n);var l=un(t,e,n);l!==null&&(Vt(l,t,n),Hl(l,t,n)),t={cache:cu()},e.payload=t;return}t=t.return}}function Av(e,t,n){var l=Gt();n={lane:l,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},vs(e)?Lm(t,n):(n=Wc(e,t,n,l),n!==null&&(Vt(n,e,l),_m(n,t,l)))}function km(e,t,n){var l=Gt();Vl(e,t,n,l)}function Vl(e,t,n,l){var c={lane:l,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(vs(e))Lm(t,c);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var m=t.lastRenderedState,b=u(m,n);if(c.hasEagerState=!0,c.eagerState=b,Ht(b,m))return ts(e,t,c,0),Fe===null&&es(),!1}catch{}finally{}if(n=Wc(e,t,c,l),n!==null)return Vt(n,e,l),_m(n,t,l),!0}return!1}function Ou(e,t,n,l){if(l={lane:2,revertLane:fd(),action:l,hasEagerState:!1,eagerState:null,next:null},vs(e)){if(t)throw Error(s(479))}else t=Wc(e,n,l,2),t!==null&&Vt(t,e,2)}function vs(e){var t=e.alternate;return e===Se||t!==null&&t===Se}function Lm(e,t){Mr=fs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function _m(e,t,n){if((n&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,Vf(e,n)}}var ys={readContext:vt,use:ms,useCallback:Pe,useContext:Pe,useEffect:Pe,useImperativeHandle:Pe,useLayoutEffect:Pe,useInsertionEffect:Pe,useMemo:Pe,useReducer:Pe,useRef:Pe,useState:Pe,useDebugValue:Pe,useDeferredValue:Pe,useTransition:Pe,useSyncExternalStore:Pe,useId:Pe,useHostTransitionStatus:Pe,useFormState:Pe,useActionState:Pe,useOptimistic:Pe,useMemoCache:Pe,useCacheRefresh:Pe},Bm={readContext:vt,use:ms,useCallback:function(e,t){return zt().memoizedState=[e,t===void 0?null:t],e},useContext:vt,useEffect:jm,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,xs(4194308,4,Cm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return xs(4194308,4,e,t)},useInsertionEffect:function(e,t){xs(4,2,e,t)},useMemo:function(e,t){var n=zt();t=t===void 0?null:t;var l=e();if(Jn){nn(!0);try{e()}finally{nn(!1)}}return n.memoizedState=[l,t],l},useReducer:function(e,t,n){var l=zt();if(n!==void 0){var c=n(t);if(Jn){nn(!0);try{n(t)}finally{nn(!1)}}}else c=t;return l.memoizedState=l.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},l.queue=e,e=e.dispatch=Av.bind(null,Se,e),[l.memoizedState,e]},useRef:function(e){var t=zt();return e={current:e},t.memoizedState=e},useState:function(e){e=Au(e);var t=e.queue,n=km.bind(null,Se,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Du,useDeferredValue:function(e,t){var n=zt();return zu(n,e,t)},useTransition:function(){var e=Au(!1);return e=Dm.bind(null,Se,e.queue,!0,!1),zt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var l=Se,c=zt();if(ze){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),Fe===null)throw Error(s(349));(Ae&124)!==0||lm(l,t,n)}c.memoizedState=n;var u={value:n,getSnapshot:t};return c.queue=u,jm(sm.bind(null,l,u,e),[e]),l.flags|=2048,kr(9,gs(),im.bind(null,l,u,n,t),null),n},useId:function(){var e=zt(),t=Fe.identifierPrefix;if(ze){var n=Ba,l=_a;n=(l&~(1<<32-Bt(l)-1)).toString(32)+n,t="«"+t+"R"+n,n=hs++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=Sv++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Mu,useFormState:gm,useActionState:gm,useOptimistic:function(e){var t=zt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ou.bind(null,Se,!0,n),n.dispatch=t,[e,t]},useMemoCache:Cu,useCacheRefresh:function(){return zt().memoizedState=Tv.bind(null,Se)}},Hm={readContext:vt,use:ms,useCallback:Tm,useContext:vt,useEffect:Sm,useImperativeHandle:$m,useInsertionEffect:wm,useLayoutEffect:Em,useMemo:Am,useReducer:ps,useRef:bm,useState:function(){return ps(qa)},useDebugValue:Du,useDeferredValue:function(e,t){var n=We();return Rm(n,Le.memoizedState,e,t)},useTransition:function(){var e=ps(qa)[0],t=We().memoizedState;return[typeof e=="boolean"?e:Yl(e),t]},useSyncExternalStore:rm,useId:Mm,useHostTransitionStatus:Mu,useFormState:xm,useActionState:xm,useOptimistic:function(e,t){var n=We();return um(n,Le,e,t)},useMemoCache:Cu,useCacheRefresh:Om},Rv={readContext:vt,use:ms,useCallback:Tm,useContext:vt,useEffect:Sm,useImperativeHandle:$m,useInsertionEffect:wm,useLayoutEffect:Em,useMemo:Am,useReducer:Tu,useRef:bm,useState:function(){return Tu(qa)},useDebugValue:Du,useDeferredValue:function(e,t){var n=We();return Le===null?zu(n,e,t):Rm(n,Le.memoizedState,e,t)},useTransition:function(){var e=Tu(qa)[0],t=We().memoizedState;return[typeof e=="boolean"?e:Yl(e),t]},useSyncExternalStore:rm,useId:Mm,useHostTransitionStatus:Mu,useFormState:ym,useActionState:ym,useOptimistic:function(e,t){var n=We();return Le!==null?um(n,Le,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Cu,useCacheRefresh:Om},Lr=null,Xl=0;function bs(e){var t=Xl;return Xl+=1,Lr===null&&(Lr=[]),Kh(Lr,e,t)}function Ql(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function js(e,t){throw t.$$typeof===j?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Um(e){var t=e._init;return t(e._payload)}function qm(e){function t(O,N){if(e){var k=O.deletions;k===null?(O.deletions=[N],O.flags|=16):k.push(N)}}function n(O,N){if(!e)return null;for(;N!==null;)t(O,N),N=N.sibling;return null}function l(O){for(var N=new Map;O!==null;)O.key!==null?N.set(O.key,O):N.set(O.index,O),O=O.sibling;return N}function c(O,N){return O=La(O,N),O.index=0,O.sibling=null,O}function u(O,N,k){return O.index=k,e?(k=O.alternate,k!==null?(k=k.index,k<N?(O.flags|=67108866,N):k):(O.flags|=67108866,N)):(O.flags|=1048576,N)}function m(O){return e&&O.alternate===null&&(O.flags|=67108866),O}function b(O,N,k,P){return N===null||N.tag!==6?(N=tu(k,O.mode,P),N.return=O,N):(N=c(N,k),N.return=O,N)}function $(O,N,k,P){var le=k.type;return le===D?G(O,N,k.props.children,P,k.key):N!==null&&(N.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===K&&Um(le)===N.type)?(N=c(N,k.props),Ql(N,k),N.return=O,N):(N=ns(k.type,k.key,k.props,null,O.mode,P),Ql(N,k),N.return=O,N)}function _(O,N,k,P){return N===null||N.tag!==4||N.stateNode.containerInfo!==k.containerInfo||N.stateNode.implementation!==k.implementation?(N=au(k,O.mode,P),N.return=O,N):(N=c(N,k.children||[]),N.return=O,N)}function G(O,N,k,P,le){return N===null||N.tag!==7?(N=Yn(k,O.mode,P,le),N.return=O,N):(N=c(N,k),N.return=O,N)}function I(O,N,k){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return N=tu(""+N,O.mode,k),N.return=O,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case C:return k=ns(N.type,N.key,N.props,null,O.mode,k),Ql(k,N),k.return=O,k;case T:return N=au(N,O.mode,k),N.return=O,N;case K:var P=N._init;return N=P(N._payload),I(O,N,k)}if(ue(N)||Te(N))return N=Yn(N,O.mode,k,null),N.return=O,N;if(typeof N.then=="function")return I(O,bs(N),k);if(N.$$typeof===L)return I(O,ss(O,N),k);js(O,N)}return null}function B(O,N,k,P){var le=N!==null?N.key:null;if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return le!==null?null:b(O,N,""+k,P);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case C:return k.key===le?$(O,N,k,P):null;case T:return k.key===le?_(O,N,k,P):null;case K:return le=k._init,k=le(k._payload),B(O,N,k,P)}if(ue(k)||Te(k))return le!==null?null:G(O,N,k,P,null);if(typeof k.then=="function")return B(O,N,bs(k),P);if(k.$$typeof===L)return B(O,N,ss(O,k),P);js(O,k)}return null}function H(O,N,k,P,le){if(typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint")return O=O.get(k)||null,b(N,O,""+P,le);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case C:return O=O.get(P.key===null?k:P.key)||null,$(N,O,P,le);case T:return O=O.get(P.key===null?k:P.key)||null,_(N,O,P,le);case K:var we=P._init;return P=we(P._payload),H(O,N,k,P,le)}if(ue(P)||Te(P))return O=O.get(k)||null,G(N,O,P,le,null);if(typeof P.then=="function")return H(O,N,k,bs(P),le);if(P.$$typeof===L)return H(O,N,k,ss(N,P),le);js(N,P)}return null}function pe(O,N,k,P){for(var le=null,we=null,se=N,me=N=0,ut=null;se!==null&&me<k.length;me++){se.index>me?(ut=se,se=null):ut=se.sibling;var De=B(O,se,k[me],P);if(De===null){se===null&&(se=ut);break}e&&se&&De.alternate===null&&t(O,se),N=u(De,N,me),we===null?le=De:we.sibling=De,we=De,se=ut}if(me===k.length)return n(O,se),ze&&Vn(O,me),le;if(se===null){for(;me<k.length;me++)se=I(O,k[me],P),se!==null&&(N=u(se,N,me),we===null?le=se:we.sibling=se,we=se);return ze&&Vn(O,me),le}for(se=l(se);me<k.length;me++)ut=H(se,O,me,k[me],P),ut!==null&&(e&&ut.alternate!==null&&se.delete(ut.key===null?me:ut.key),N=u(ut,N,me),we===null?le=ut:we.sibling=ut,we=ut);return e&&se.forEach(function(Tn){return t(O,Tn)}),ze&&Vn(O,me),le}function de(O,N,k,P){if(k==null)throw Error(s(151));for(var le=null,we=null,se=N,me=N=0,ut=null,De=k.next();se!==null&&!De.done;me++,De=k.next()){se.index>me?(ut=se,se=null):ut=se.sibling;var Tn=B(O,se,De.value,P);if(Tn===null){se===null&&(se=ut);break}e&&se&&Tn.alternate===null&&t(O,se),N=u(Tn,N,me),we===null?le=Tn:we.sibling=Tn,we=Tn,se=ut}if(De.done)return n(O,se),ze&&Vn(O,me),le;if(se===null){for(;!De.done;me++,De=k.next())De=I(O,De.value,P),De!==null&&(N=u(De,N,me),we===null?le=De:we.sibling=De,we=De);return ze&&Vn(O,me),le}for(se=l(se);!De.done;me++,De=k.next())De=H(se,O,me,De.value,P),De!==null&&(e&&De.alternate!==null&&se.delete(De.key===null?me:De.key),N=u(De,N,me),we===null?le=De:we.sibling=De,we=De);return e&&se.forEach(function(Dy){return t(O,Dy)}),ze&&Vn(O,me),le}function Be(O,N,k,P){if(typeof k=="object"&&k!==null&&k.type===D&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case C:e:{for(var le=k.key;N!==null;){if(N.key===le){if(le=k.type,le===D){if(N.tag===7){n(O,N.sibling),P=c(N,k.props.children),P.return=O,O=P;break e}}else if(N.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===K&&Um(le)===N.type){n(O,N.sibling),P=c(N,k.props),Ql(P,k),P.return=O,O=P;break e}n(O,N);break}else t(O,N);N=N.sibling}k.type===D?(P=Yn(k.props.children,O.mode,P,k.key),P.return=O,O=P):(P=ns(k.type,k.key,k.props,null,O.mode,P),Ql(P,k),P.return=O,O=P)}return m(O);case T:e:{for(le=k.key;N!==null;){if(N.key===le)if(N.tag===4&&N.stateNode.containerInfo===k.containerInfo&&N.stateNode.implementation===k.implementation){n(O,N.sibling),P=c(N,k.children||[]),P.return=O,O=P;break e}else{n(O,N);break}else t(O,N);N=N.sibling}P=au(k,O.mode,P),P.return=O,O=P}return m(O);case K:return le=k._init,k=le(k._payload),Be(O,N,k,P)}if(ue(k))return pe(O,N,k,P);if(Te(k)){if(le=Te(k),typeof le!="function")throw Error(s(150));return k=le.call(k),de(O,N,k,P)}if(typeof k.then=="function")return Be(O,N,bs(k),P);if(k.$$typeof===L)return Be(O,N,ss(O,k),P);js(O,k)}return typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint"?(k=""+k,N!==null&&N.tag===6?(n(O,N.sibling),P=c(N,k),P.return=O,O=P):(n(O,N),P=tu(k,O.mode,P),P.return=O,O=P),m(O)):n(O,N)}return function(O,N,k,P){try{Xl=0;var le=Be(O,N,k,P);return Lr=null,le}catch(se){if(se===_l||se===cs)throw se;var we=Ut(29,se,null,O.mode);return we.lanes=P,we.return=O,we}finally{}}}var _r=qm(!0),Fm=qm(!1),na=W(null),ba=null;function fn(e){var t=e.alternate;ne(nt,nt.current&1),ne(na,e),ba===null&&(t===null||Nr.current!==null||t.memoizedState!==null)&&(ba=e)}function Ym(e){if(e.tag===22){if(ne(nt,nt.current),ne(na,e),ba===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(ba=e)}}else hn()}function hn(){ne(nt,nt.current),ne(na,na.current)}function Fa(e){ae(na),ba===e&&(ba=null),ae(nt)}var nt=W(0);function Ss(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||Ed(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function ku(e,t,n,l){t=e.memoizedState,n=n(l,t),n=n==null?t:x({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Lu={enqueueSetState:function(e,t,n){e=e._reactInternals;var l=Gt(),c=cn(l);c.payload=t,n!=null&&(c.callback=n),t=un(e,c,l),t!==null&&(Vt(t,e,l),Hl(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var l=Gt(),c=cn(l);c.tag=1,c.payload=t,n!=null&&(c.callback=n),t=un(e,c,l),t!==null&&(Vt(t,e,l),Hl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Gt(),l=cn(n);l.tag=2,t!=null&&(l.callback=t),t=un(e,l,n),t!==null&&(Vt(t,e,n),Hl(t,e,n))}};function Gm(e,t,n,l,c,u,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,u,m):t.prototype&&t.prototype.isPureReactComponent?!Rl(n,l)||!Rl(c,u):!0}function Vm(e,t,n,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,l),t.state!==e&&Lu.enqueueReplaceState(t,t.state,null)}function In(e,t){var n=t;if("ref"in t){n={};for(var l in t)l!=="ref"&&(n[l]=t[l])}if(e=e.defaultProps){n===t&&(n=x({},n));for(var c in e)n[c]===void 0&&(n[c]=e[c])}return n}var ws=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Xm(e){ws(e)}function Qm(e){console.error(e)}function Zm(e){ws(e)}function Es(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Pm(e,t,n){try{var l=e.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function _u(e,t,n){return n=cn(n),n.tag=3,n.payload={element:null},n.callback=function(){Es(e,t)},n}function Km(e){return e=cn(e),e.tag=3,e}function Jm(e,t,n,l){var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var u=l.value;e.payload=function(){return c(u)},e.callback=function(){Pm(t,n,l)}}var m=n.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(e.callback=function(){Pm(t,n,l),typeof c!="function"&&(yn===null?yn=new Set([this]):yn.add(this));var b=l.stack;this.componentDidCatch(l.value,{componentStack:b!==null?b:""})})}function Dv(e,t,n,l,c){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=n.alternate,t!==null&&Ol(t,n,c,!0),n=na.current,n!==null){switch(n.tag){case 13:return ba===null?sd():n.alternate===null&&Ze===0&&(Ze=3),n.flags&=-257,n.flags|=65536,n.lanes=c,l===fu?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([l]):t.add(l),cd(e,l,c)),!1;case 22:return n.flags|=65536,l===fu?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([l]):n.add(l)),cd(e,l,c)),!1}throw Error(s(435,n.tag))}return cd(e,l,c),sd(),!1}if(ze)return t=na.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=c,l!==lu&&(e=Error(s(422),{cause:l}),Ml(Wt(e,n)))):(l!==lu&&(t=Error(s(423),{cause:l}),Ml(Wt(t,n))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,l=Wt(l,n),c=_u(e.stateNode,l,c),pu(e,c),Ze!==4&&(Ze=2)),!1;var u=Error(s(520),{cause:l});if(u=Wt(u,n),ei===null?ei=[u]:ei.push(u),Ze!==4&&(Ze=2),t===null)return!0;l=Wt(l,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=c&-c,n.lanes|=e,e=_u(n.stateNode,l,e),pu(n,e),!1;case 1:if(t=n.type,u=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(yn===null||!yn.has(u))))return n.flags|=65536,c&=-c,n.lanes|=c,c=Km(c),Jm(c,e,n,l),pu(n,c),!1}n=n.return}while(n!==null);return!1}var Im=Error(s(461)),ot=!1;function ft(e,t,n,l){t.child=e===null?Fm(t,null,n,l):_r(t,e.child,n,l)}function Wm(e,t,n,l,c){n=n.render;var u=t.ref;if("ref"in l){var m={};for(var b in l)b!=="ref"&&(m[b]=l[b])}else m=l;return Pn(t),l=bu(e,t,n,m,u,c),b=ju(),e!==null&&!ot?(Su(e,t,c),Ya(e,t,c)):(ze&&b&&nu(t),t.flags|=1,ft(e,t,l,c),t.child)}function ep(e,t,n,l,c){if(e===null){var u=n.type;return typeof u=="function"&&!eu(u)&&u.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=u,tp(e,t,u,l,c)):(e=ns(n.type,null,l,t,t.mode,c),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!Vu(e,c)){var m=u.memoizedProps;if(n=n.compare,n=n!==null?n:Rl,n(m,l)&&e.ref===t.ref)return Ya(e,t,c)}return t.flags|=1,e=La(u,l),e.ref=t.ref,e.return=t,t.child=e}function tp(e,t,n,l,c){if(e!==null){var u=e.memoizedProps;if(Rl(u,l)&&e.ref===t.ref)if(ot=!1,t.pendingProps=l=u,Vu(e,c))(e.flags&131072)!==0&&(ot=!0);else return t.lanes=e.lanes,Ya(e,t,c)}return Bu(e,t,n,l,c)}function ap(e,t,n){var l=t.pendingProps,c=l.children,u=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((t.flags&128)!==0){if(l=u!==null?u.baseLanes|n:n,e!==null){for(c=t.child=e.child,u=0;c!==null;)u=u|c.lanes|c.childLanes,c=c.sibling;t.childLanes=u&~l}else t.childLanes=0,t.child=null;return np(e,t,l,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&os(t,u!==null?u.cachePool:null),u!==null?tm(t,u):xu(),Ym(t);else return t.lanes=t.childLanes=536870912,np(e,t,u!==null?u.baseLanes|n:n,n)}else u!==null?(os(t,u.cachePool),tm(t,u),hn(),t.memoizedState=null):(e!==null&&os(t,null),xu(),hn());return ft(e,t,c,n),t.child}function np(e,t,n,l){var c=du();return c=c===null?null:{parent:at._currentValue,pool:c},t.memoizedState={baseLanes:n,cachePool:c},e!==null&&os(t,null),xu(),Ym(t),e!==null&&Ol(e,t,l,!0),null}function Cs(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Bu(e,t,n,l,c){return Pn(t),n=bu(e,t,n,l,void 0,c),l=ju(),e!==null&&!ot?(Su(e,t,c),Ya(e,t,c)):(ze&&l&&nu(t),t.flags|=1,ft(e,t,n,c),t.child)}function rp(e,t,n,l,c,u){return Pn(t),t.updateQueue=null,n=nm(t,l,n,c),am(e),l=ju(),e!==null&&!ot?(Su(e,t,u),Ya(e,t,u)):(ze&&l&&nu(t),t.flags|=1,ft(e,t,n,u),t.child)}function lp(e,t,n,l,c){if(Pn(t),t.stateNode===null){var u=Tr,m=n.contextType;typeof m=="object"&&m!==null&&(u=vt(m)),u=new n(l,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Lu,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=l,u.state=t.memoizedState,u.refs={},hu(t),m=n.contextType,u.context=typeof m=="object"&&m!==null?vt(m):Tr,u.state=t.memoizedState,m=n.getDerivedStateFromProps,typeof m=="function"&&(ku(t,n,m,l),u.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(m=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),m!==u.state&&Lu.enqueueReplaceState(u,u.state,null),ql(t,l,u,c),Ul(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){u=t.stateNode;var b=t.memoizedProps,$=In(n,b);u.props=$;var _=u.context,G=n.contextType;m=Tr,typeof G=="object"&&G!==null&&(m=vt(G));var I=n.getDerivedStateFromProps;G=typeof I=="function"||typeof u.getSnapshotBeforeUpdate=="function",b=t.pendingProps!==b,G||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(b||_!==m)&&Vm(t,u,l,m),on=!1;var B=t.memoizedState;u.state=B,ql(t,l,u,c),Ul(),_=t.memoizedState,b||B!==_||on?(typeof I=="function"&&(ku(t,n,I,l),_=t.memoizedState),($=on||Gm(t,n,$,l,B,_,m))?(G||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=_),u.props=l,u.state=_,u.context=m,l=$):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{u=t.stateNode,mu(e,t),m=t.memoizedProps,G=In(n,m),u.props=G,I=t.pendingProps,B=u.context,_=n.contextType,$=Tr,typeof _=="object"&&_!==null&&($=vt(_)),b=n.getDerivedStateFromProps,(_=typeof b=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(m!==I||B!==$)&&Vm(t,u,l,$),on=!1,B=t.memoizedState,u.state=B,ql(t,l,u,c),Ul();var H=t.memoizedState;m!==I||B!==H||on||e!==null&&e.dependencies!==null&&is(e.dependencies)?(typeof b=="function"&&(ku(t,n,b,l),H=t.memoizedState),(G=on||Gm(t,n,G,l,B,H,$)||e!==null&&e.dependencies!==null&&is(e.dependencies))?(_||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(l,H,$),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(l,H,$)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||m===e.memoizedProps&&B===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&B===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=H),u.props=l,u.state=H,u.context=$,l=G):(typeof u.componentDidUpdate!="function"||m===e.memoizedProps&&B===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&B===e.memoizedState||(t.flags|=1024),l=!1)}return u=l,Cs(e,t),l=(t.flags&128)!==0,u||l?(u=t.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&l?(t.child=_r(t,e.child,null,c),t.child=_r(t,null,n,c)):ft(e,t,n,c),t.memoizedState=u.state,e=t.child):e=Ya(e,t,c),e}function ip(e,t,n,l){return Nl(),t.flags|=256,ft(e,t,n,l),t.child}var Hu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Uu(e){return{baseLanes:e,cachePool:Qh()}}function qu(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=ra),e}function sp(e,t,n){var l=t.pendingProps,c=!1,u=(t.flags&128)!==0,m;if((m=u)||(m=e!==null&&e.memoizedState===null?!1:(nt.current&2)!==0),m&&(c=!0,t.flags&=-129),m=(t.flags&32)!==0,t.flags&=-33,e===null){if(ze){if(c?fn(t):hn(),ze){var b=Qe,$;if($=b){e:{for($=b,b=ya;$.nodeType!==8;){if(!b){b=null;break e}if($=ua($.nextSibling),$===null){b=null;break e}}b=$}b!==null?(t.memoizedState={dehydrated:b,treeContext:Gn!==null?{id:_a,overflow:Ba}:null,retryLane:536870912,hydrationErrors:null},$=Ut(18,null,null,0),$.stateNode=b,$.return=t,t.child=$,Et=t,Qe=null,$=!0):$=!1}$||Qn(t)}if(b=t.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return Ed(b)?t.lanes=32:t.lanes=536870912,null;Fa(t)}return b=l.children,l=l.fallback,c?(hn(),c=t.mode,b=$s({mode:"hidden",children:b},c),l=Yn(l,c,n,null),b.return=t,l.return=t,b.sibling=l,t.child=b,c=t.child,c.memoizedState=Uu(n),c.childLanes=qu(e,m,n),t.memoizedState=Hu,l):(fn(t),Fu(t,b))}if($=e.memoizedState,$!==null&&(b=$.dehydrated,b!==null)){if(u)t.flags&256?(fn(t),t.flags&=-257,t=Yu(e,t,n)):t.memoizedState!==null?(hn(),t.child=e.child,t.flags|=128,t=null):(hn(),c=l.fallback,b=t.mode,l=$s({mode:"visible",children:l.children},b),c=Yn(c,b,n,null),c.flags|=2,l.return=t,c.return=t,l.sibling=c,t.child=l,_r(t,e.child,null,n),l=t.child,l.memoizedState=Uu(n),l.childLanes=qu(e,m,n),t.memoizedState=Hu,t=c);else if(fn(t),Ed(b)){if(m=b.nextSibling&&b.nextSibling.dataset,m)var _=m.dgst;m=_,l=Error(s(419)),l.stack="",l.digest=m,Ml({value:l,source:null,stack:null}),t=Yu(e,t,n)}else if(ot||Ol(e,t,n,!1),m=(n&e.childLanes)!==0,ot||m){if(m=Fe,m!==null&&(l=n&-n,l=(l&42)!==0?1:Cc(l),l=(l&(m.suspendedLanes|n))!==0?0:l,l!==0&&l!==$.retryLane))throw $.retryLane=l,$r(e,l),Vt(m,e,l),Im;b.data==="$?"||sd(),t=Yu(e,t,n)}else b.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=$.treeContext,Qe=ua(b.nextSibling),Et=t,ze=!0,Xn=null,ya=!1,e!==null&&(ta[aa++]=_a,ta[aa++]=Ba,ta[aa++]=Gn,_a=e.id,Ba=e.overflow,Gn=t),t=Fu(t,l.children),t.flags|=4096);return t}return c?(hn(),c=l.fallback,b=t.mode,$=e.child,_=$.sibling,l=La($,{mode:"hidden",children:l.children}),l.subtreeFlags=$.subtreeFlags&65011712,_!==null?c=La(_,c):(c=Yn(c,b,n,null),c.flags|=2),c.return=t,l.return=t,l.sibling=c,t.child=l,l=c,c=t.child,b=e.child.memoizedState,b===null?b=Uu(n):($=b.cachePool,$!==null?(_=at._currentValue,$=$.parent!==_?{parent:_,pool:_}:$):$=Qh(),b={baseLanes:b.baseLanes|n,cachePool:$}),c.memoizedState=b,c.childLanes=qu(e,m,n),t.memoizedState=Hu,l):(fn(t),n=e.child,e=n.sibling,n=La(n,{mode:"visible",children:l.children}),n.return=t,n.sibling=null,e!==null&&(m=t.deletions,m===null?(t.deletions=[e],t.flags|=16):m.push(e)),t.child=n,t.memoizedState=null,n)}function Fu(e,t){return t=$s({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function $s(e,t){return e=Ut(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Yu(e,t,n){return _r(t,e.child,null,n),e=Fu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function op(e,t,n){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),su(e.return,t,n)}function Gu(e,t,n,l,c){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:c}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=n,u.tailMode=c)}function cp(e,t,n){var l=t.pendingProps,c=l.revealOrder,u=l.tail;if(ft(e,t,l.children,n),l=nt.current,(l&2)!==0)l=l&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&op(e,n,t);else if(e.tag===19)op(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(ne(nt,l),c){case"forwards":for(n=t.child,c=null;n!==null;)e=n.alternate,e!==null&&Ss(e)===null&&(c=n),n=n.sibling;n=c,n===null?(c=t.child,t.child=null):(c=n.sibling,n.sibling=null),Gu(t,!1,c,n,u);break;case"backwards":for(n=null,c=t.child,t.child=null;c!==null;){if(e=c.alternate,e!==null&&Ss(e)===null){t.child=c;break}e=c.sibling,c.sibling=n,n=c,c=e}Gu(t,!0,n,null,u);break;case"together":Gu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ya(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),vn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ol(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=La(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=La(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Vu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&is(e)))}function zv(e,t,n){switch(t.tag){case 3:Ne(t,t.stateNode.containerInfo),sn(t,at,e.memoizedState.cache),Nl();break;case 27:case 5:_n(t);break;case 4:Ne(t,t.stateNode.containerInfo);break;case 10:sn(t,t.type,t.memoizedProps.value);break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(fn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?sp(e,t,n):(fn(t),e=Ya(e,t,n),e!==null?e.sibling:null);fn(t);break;case 19:var c=(e.flags&128)!==0;if(l=(n&t.childLanes)!==0,l||(Ol(e,t,n,!1),l=(n&t.childLanes)!==0),c){if(l)return cp(e,t,n);t.flags|=128}if(c=t.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),ne(nt,nt.current),l)break;return null;case 22:case 23:return t.lanes=0,ap(e,t,n);case 24:sn(t,at,e.memoizedState.cache)}return Ya(e,t,n)}function up(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ot=!0;else{if(!Vu(e,n)&&(t.flags&128)===0)return ot=!1,zv(e,t,n);ot=(e.flags&131072)!==0}else ot=!1,ze&&(t.flags&1048576)!==0&&Uh(t,ls,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var l=t.elementType,c=l._init;if(l=c(l._payload),t.type=l,typeof l=="function")eu(l)?(e=In(l,e),t.tag=1,t=lp(null,t,l,e,n)):(t.tag=0,t=Bu(null,t,l,e,n));else{if(l!=null){if(c=l.$$typeof,c===V){t.tag=11,t=Wm(null,t,l,e,n);break e}else if(c===X){t.tag=14,t=ep(null,t,l,e,n);break e}}throw t=Z(l)||l,Error(s(306,t,""))}}return t;case 0:return Bu(e,t,t.type,t.pendingProps,n);case 1:return l=t.type,c=In(l,t.pendingProps),lp(e,t,l,c,n);case 3:e:{if(Ne(t,t.stateNode.containerInfo),e===null)throw Error(s(387));l=t.pendingProps;var u=t.memoizedState;c=u.element,mu(e,t),ql(t,l,null,n);var m=t.memoizedState;if(l=m.cache,sn(t,at,l),l!==u.cache&&ou(t,[at],n,!0),Ul(),l=m.element,u.isDehydrated)if(u={element:l,isDehydrated:!1,cache:m.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=ip(e,t,l,n);break e}else if(l!==c){c=Wt(Error(s(424)),t),Ml(c),t=ip(e,t,l,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Qe=ua(e.firstChild),Et=t,ze=!0,Xn=null,ya=!0,n=Fm(t,null,l,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Nl(),l===c){t=Ya(e,t,n);break e}ft(e,t,l,n)}t=t.child}return t;case 26:return Cs(e,t),e===null?(n=m0(t.type,null,t.pendingProps,null))?t.memoizedState=n:ze||(n=t.type,e=t.pendingProps,l=Us(he.current).createElement(n),l[xt]=t,l[Rt]=e,mt(l,n,e),st(l),t.stateNode=l):t.memoizedState=m0(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return _n(t),e===null&&ze&&(l=t.stateNode=d0(t.type,t.pendingProps,he.current),Et=t,ya=!0,c=Qe,Sn(t.type)?(Cd=c,Qe=ua(l.firstChild)):Qe=c),ft(e,t,t.pendingProps.children,n),Cs(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ze&&((c=l=Qe)&&(l=ly(l,t.type,t.pendingProps,ya),l!==null?(t.stateNode=l,Et=t,Qe=ua(l.firstChild),ya=!1,c=!0):c=!1),c||Qn(t)),_n(t),c=t.type,u=t.pendingProps,m=e!==null?e.memoizedProps:null,l=u.children,jd(c,u)?l=null:m!==null&&jd(c,m)&&(t.flags|=32),t.memoizedState!==null&&(c=bu(e,t,wv,null,null,n),ci._currentValue=c),Cs(e,t),ft(e,t,l,n),t.child;case 6:return e===null&&ze&&((e=n=Qe)&&(n=iy(n,t.pendingProps,ya),n!==null?(t.stateNode=n,Et=t,Qe=null,e=!0):e=!1),e||Qn(t)),null;case 13:return sp(e,t,n);case 4:return Ne(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=_r(t,null,l,n):ft(e,t,l,n),t.child;case 11:return Wm(e,t,t.type,t.pendingProps,n);case 7:return ft(e,t,t.pendingProps,n),t.child;case 8:return ft(e,t,t.pendingProps.children,n),t.child;case 12:return ft(e,t,t.pendingProps.children,n),t.child;case 10:return l=t.pendingProps,sn(t,t.type,l.value),ft(e,t,l.children,n),t.child;case 9:return c=t.type._context,l=t.pendingProps.children,Pn(t),c=vt(c),l=l(c),t.flags|=1,ft(e,t,l,n),t.child;case 14:return ep(e,t,t.type,t.pendingProps,n);case 15:return tp(e,t,t.type,t.pendingProps,n);case 19:return cp(e,t,n);case 31:return l=t.pendingProps,n=t.mode,l={mode:l.mode,children:l.children},e===null?(n=$s(l,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=La(e.child,l),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return ap(e,t,n);case 24:return Pn(t),l=vt(at),e===null?(c=du(),c===null&&(c=Fe,u=cu(),c.pooledCache=u,u.refCount++,u!==null&&(c.pooledCacheLanes|=n),c=u),t.memoizedState={parent:l,cache:c},hu(t),sn(t,at,c)):((e.lanes&n)!==0&&(mu(e,t),ql(t,null,null,n),Ul()),c=e.memoizedState,u=t.memoizedState,c.parent!==l?(c={parent:l,cache:l},t.memoizedState=c,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=c),sn(t,at,l)):(l=u.cache,sn(t,at,l),l!==c.cache&&ou(t,[at],n,!0))),ft(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function Ga(e){e.flags|=4}function dp(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!y0(t)){if(t=na.current,t!==null&&((Ae&4194048)===Ae?ba!==null:(Ae&62914560)!==Ae&&(Ae&536870912)===0||t!==ba))throw Bl=fu,Zh;e.flags|=8192}}function Ts(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Yf():536870912,e.lanes|=t,qr|=t)}function Zl(e,t){if(!ze)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Xe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(t)for(var c=e.child;c!==null;)n|=c.lanes|c.childLanes,l|=c.subtreeFlags&65011712,l|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)n|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=l,e.childLanes=n,t}function Nv(e,t,n){var l=t.pendingProps;switch(ru(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(t),null;case 1:return Xe(t),null;case 3:return n=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Ua(at),gt(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(zl(t)?Ga(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Yh())),Xe(t),null;case 26:return n=t.memoizedState,e===null?(Ga(t),n!==null?(Xe(t),dp(t,n)):(Xe(t),t.flags&=-16777217)):n?n!==e.memoizedState?(Ga(t),Xe(t),dp(t,n)):(Xe(t),t.flags&=-16777217):(e.memoizedProps!==l&&Ga(t),Xe(t),t.flags&=-16777217),null;case 27:Ma(t),n=he.current;var c=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Ga(t);else{if(!l){if(t.stateNode===null)throw Error(s(166));return Xe(t),null}e=oe.current,zl(t)?qh(t):(e=d0(c,l,n),t.stateNode=e,Ga(t))}return Xe(t),null;case 5:if(Ma(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Ga(t);else{if(!l){if(t.stateNode===null)throw Error(s(166));return Xe(t),null}if(e=oe.current,zl(t))qh(t);else{switch(c=Us(he.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?c.createElement("select",{is:l.is}):c.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?c.createElement(n,{is:l.is}):c.createElement(n)}}e[xt]=t,e[Rt]=l;e:for(c=t.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}t.stateNode=e;e:switch(mt(e,n,l),n){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Ga(t)}}return Xe(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Ga(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(s(166));if(e=he.current,zl(t)){if(e=t.stateNode,n=t.memoizedProps,l=null,c=Et,c!==null)switch(c.tag){case 27:case 5:l=c.memoizedProps}e[xt]=t,e=!!(e.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||r0(e.nodeValue,n)),e||Qn(t)}else e=Us(e).createTextNode(l),e[xt]=t,t.stateNode=e}return Xe(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=zl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=t.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[xt]=t}else Nl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Xe(t),c=!1}else c=Yh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return t.flags&256?(Fa(t),t):(Fa(t),null)}if(Fa(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=l!==null,e=e!==null&&e.memoizedState!==null,n){l=t.child,c=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(c=l.alternate.memoizedState.cachePool.pool);var u=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(u=l.memoizedState.cachePool.pool),u!==c&&(l.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),Ts(t,t.updateQueue),Xe(t),null;case 4:return gt(),e===null&&gd(t.stateNode.containerInfo),Xe(t),null;case 10:return Ua(t.type),Xe(t),null;case 19:if(ae(nt),c=t.memoizedState,c===null)return Xe(t),null;if(l=(t.flags&128)!==0,u=c.rendering,u===null)if(l)Zl(c,!1);else{if(Ze!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=Ss(e),u!==null){for(t.flags|=128,Zl(c,!1),e=u.updateQueue,t.updateQueue=e,Ts(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Hh(n,e),n=n.sibling;return ne(nt,nt.current&1|2),t.child}e=e.sibling}c.tail!==null&&va()>Ds&&(t.flags|=128,l=!0,Zl(c,!1),t.lanes=4194304)}else{if(!l)if(e=Ss(u),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Ts(t,e),Zl(c,!0),c.tail===null&&c.tailMode==="hidden"&&!u.alternate&&!ze)return Xe(t),null}else 2*va()-c.renderingStartTime>Ds&&n!==536870912&&(t.flags|=128,l=!0,Zl(c,!1),t.lanes=4194304);c.isBackwards?(u.sibling=t.child,t.child=u):(e=c.last,e!==null?e.sibling=u:t.child=u,c.last=u)}return c.tail!==null?(t=c.tail,c.rendering=t,c.tail=t.sibling,c.renderingStartTime=va(),t.sibling=null,e=nt.current,ne(nt,l?e&1|2:e&1),t):(Xe(t),null);case 22:case 23:return Fa(t),vu(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(n&536870912)!==0&&(t.flags&128)===0&&(Xe(t),t.subtreeFlags&6&&(t.flags|=8192)):Xe(t),n=t.updateQueue,n!==null&&Ts(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==n&&(t.flags|=2048),e!==null&&ae(Kn),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ua(at),Xe(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function Mv(e,t){switch(ru(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ua(at),gt(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ma(t),null;case 13:if(Fa(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Nl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ae(nt),null;case 4:return gt(),null;case 10:return Ua(t.type),null;case 22:case 23:return Fa(t),vu(),e!==null&&ae(Kn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ua(at),null;case 25:return null;default:return null}}function fp(e,t){switch(ru(t),t.tag){case 3:Ua(at),gt();break;case 26:case 27:case 5:Ma(t);break;case 4:gt();break;case 13:Fa(t);break;case 19:ae(nt);break;case 10:Ua(t.type);break;case 22:case 23:Fa(t),vu(),e!==null&&ae(Kn);break;case 24:Ua(at)}}function Pl(e,t){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var c=l.next;n=c;do{if((n.tag&e)===e){l=void 0;var u=n.create,m=n.inst;l=u(),m.destroy=l}n=n.next}while(n!==c)}}catch(b){qe(t,t.return,b)}}function mn(e,t,n){try{var l=t.updateQueue,c=l!==null?l.lastEffect:null;if(c!==null){var u=c.next;l=u;do{if((l.tag&e)===e){var m=l.inst,b=m.destroy;if(b!==void 0){m.destroy=void 0,c=t;var $=n,_=b;try{_()}catch(G){qe(c,$,G)}}}l=l.next}while(l!==u)}}catch(G){qe(t,t.return,G)}}function hp(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{em(t,n)}catch(l){qe(e,e.return,l)}}}function mp(e,t,n){n.props=In(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(l){qe(e,t,l)}}function Kl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof n=="function"?e.refCleanup=n(l):n.current=l}}catch(c){qe(e,t,c)}}function ja(e,t){var n=e.ref,l=e.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(c){qe(e,t,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(c){qe(e,t,c)}else n.current=null}function pp(e){var t=e.type,n=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break e;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(c){qe(e,e.return,c)}}function Xu(e,t,n){try{var l=e.stateNode;ey(l,e.type,n,t),l[Rt]=t}catch(c){qe(e,e.return,c)}}function gp(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Sn(e.type)||e.tag===4}function Qu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||gp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Sn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zu(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Hs));else if(l!==4&&(l===27&&Sn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Zu(e,t,n),e=e.sibling;e!==null;)Zu(e,t,n),e=e.sibling}function As(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(l!==4&&(l===27&&Sn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(As(e,t,n),e=e.sibling;e!==null;)As(e,t,n),e=e.sibling}function xp(e){var t=e.stateNode,n=e.memoizedProps;try{for(var l=e.type,c=t.attributes;c.length;)t.removeAttributeNode(c[0]);mt(t,l,n),t[xt]=e,t[Rt]=n}catch(u){qe(e,e.return,u)}}var Va=!1,Ke=!1,Pu=!1,vp=typeof WeakSet=="function"?WeakSet:Set,ct=null;function Ov(e,t){if(e=e.containerInfo,yd=Xs,e=Rh(e),Qc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var c=l.anchorOffset,u=l.focusNode;l=l.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break e}var m=0,b=-1,$=-1,_=0,G=0,I=e,B=null;t:for(;;){for(var H;I!==n||c!==0&&I.nodeType!==3||(b=m+c),I!==u||l!==0&&I.nodeType!==3||($=m+l),I.nodeType===3&&(m+=I.nodeValue.length),(H=I.firstChild)!==null;)B=I,I=H;for(;;){if(I===e)break t;if(B===n&&++_===c&&(b=m),B===u&&++G===l&&($=m),(H=I.nextSibling)!==null)break;I=B,B=I.parentNode}I=H}n=b===-1||$===-1?null:{start:b,end:$}}else n=null}n=n||{start:0,end:0}}else n=null;for(bd={focusedElem:e,selectionRange:n},Xs=!1,ct=t;ct!==null;)if(t=ct,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,ct=e;else for(;ct!==null;){switch(t=ct,u=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,n=t,c=u.memoizedProps,u=u.memoizedState,l=n.stateNode;try{var pe=In(n.type,c,n.elementType===n.type);e=l.getSnapshotBeforeUpdate(pe,u),l.__reactInternalSnapshotBeforeUpdate=e}catch(de){qe(n,n.return,de)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)wd(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":wd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,ct=e;break}ct=t.return}}function yp(e,t,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:pn(e,n),l&4&&Pl(5,n);break;case 1:if(pn(e,n),l&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(m){qe(n,n.return,m)}else{var c=In(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(c,t,e.__reactInternalSnapshotBeforeUpdate)}catch(m){qe(n,n.return,m)}}l&64&&hp(n),l&512&&Kl(n,n.return);break;case 3:if(pn(e,n),l&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{em(e,t)}catch(m){qe(n,n.return,m)}}break;case 27:t===null&&l&4&&xp(n);case 26:case 5:pn(e,n),t===null&&l&4&&pp(n),l&512&&Kl(n,n.return);break;case 12:pn(e,n);break;case 13:pn(e,n),l&4&&Sp(e,n),l&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Yv.bind(null,n),sy(e,n))));break;case 22:if(l=n.memoizedState!==null||Va,!l){t=t!==null&&t.memoizedState!==null||Ke,c=Va;var u=Ke;Va=l,(Ke=t)&&!u?gn(e,n,(n.subtreeFlags&8772)!==0):pn(e,n),Va=c,Ke=u}break;case 30:break;default:pn(e,n)}}function bp(e){var t=e.alternate;t!==null&&(e.alternate=null,bp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ac(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ge=null,Nt=!1;function Xa(e,t,n){for(n=n.child;n!==null;)jp(e,t,n),n=n.sibling}function jp(e,t,n){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(xl,n)}catch{}switch(n.tag){case 26:Ke||ja(n,t),Xa(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ke||ja(n,t);var l=Ge,c=Nt;Sn(n.type)&&(Ge=n.stateNode,Nt=!1),Xa(e,t,n),li(n.stateNode),Ge=l,Nt=c;break;case 5:Ke||ja(n,t);case 6:if(l=Ge,c=Nt,Ge=null,Xa(e,t,n),Ge=l,Nt=c,Ge!==null)if(Nt)try{(Ge.nodeType===9?Ge.body:Ge.nodeName==="HTML"?Ge.ownerDocument.body:Ge).removeChild(n.stateNode)}catch(u){qe(n,t,u)}else try{Ge.removeChild(n.stateNode)}catch(u){qe(n,t,u)}break;case 18:Ge!==null&&(Nt?(e=Ge,c0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),hi(e)):c0(Ge,n.stateNode));break;case 4:l=Ge,c=Nt,Ge=n.stateNode.containerInfo,Nt=!0,Xa(e,t,n),Ge=l,Nt=c;break;case 0:case 11:case 14:case 15:Ke||mn(2,n,t),Ke||mn(4,n,t),Xa(e,t,n);break;case 1:Ke||(ja(n,t),l=n.stateNode,typeof l.componentWillUnmount=="function"&&mp(n,t,l)),Xa(e,t,n);break;case 21:Xa(e,t,n);break;case 22:Ke=(l=Ke)||n.memoizedState!==null,Xa(e,t,n),Ke=l;break;default:Xa(e,t,n)}}function Sp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{hi(e)}catch(n){qe(t,t.return,n)}}function kv(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new vp),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new vp),t;default:throw Error(s(435,e.tag))}}function Ku(e,t){var n=kv(e);t.forEach(function(l){var c=Gv.bind(null,e,l);n.has(l)||(n.add(l),l.then(c,c))})}function qt(e,t){var n=t.deletions;if(n!==null)for(var l=0;l<n.length;l++){var c=n[l],u=e,m=t,b=m;e:for(;b!==null;){switch(b.tag){case 27:if(Sn(b.type)){Ge=b.stateNode,Nt=!1;break e}break;case 5:Ge=b.stateNode,Nt=!1;break e;case 3:case 4:Ge=b.stateNode.containerInfo,Nt=!0;break e}b=b.return}if(Ge===null)throw Error(s(160));jp(u,m,c),Ge=null,Nt=!1,u=c.alternate,u!==null&&(u.return=null),c.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)wp(t,e),t=t.sibling}var ca=null;function wp(e,t){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:qt(t,e),Ft(e),l&4&&(mn(3,e,e.return),Pl(3,e),mn(5,e,e.return));break;case 1:qt(t,e),Ft(e),l&512&&(Ke||n===null||ja(n,n.return)),l&64&&Va&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?l:n.concat(l))));break;case 26:var c=ca;if(qt(t,e),Ft(e),l&512&&(Ke||n===null||ja(n,n.return)),l&4){var u=n!==null?n.memoizedState:null;if(l=e.memoizedState,n===null)if(l===null)if(e.stateNode===null){e:{l=e.type,n=e.memoizedProps,c=c.ownerDocument||c;t:switch(l){case"title":u=c.getElementsByTagName("title")[0],(!u||u[bl]||u[xt]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=c.createElement(l),c.head.insertBefore(u,c.querySelector("head > title"))),mt(u,l,n),u[xt]=e,st(u),l=u;break e;case"link":var m=x0("link","href",c).get(l+(n.href||""));if(m){for(var b=0;b<m.length;b++)if(u=m[b],u.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&u.getAttribute("rel")===(n.rel==null?null:n.rel)&&u.getAttribute("title")===(n.title==null?null:n.title)&&u.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){m.splice(b,1);break t}}u=c.createElement(l),mt(u,l,n),c.head.appendChild(u);break;case"meta":if(m=x0("meta","content",c).get(l+(n.content||""))){for(b=0;b<m.length;b++)if(u=m[b],u.getAttribute("content")===(n.content==null?null:""+n.content)&&u.getAttribute("name")===(n.name==null?null:n.name)&&u.getAttribute("property")===(n.property==null?null:n.property)&&u.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&u.getAttribute("charset")===(n.charSet==null?null:n.charSet)){m.splice(b,1);break t}}u=c.createElement(l),mt(u,l,n),c.head.appendChild(u);break;default:throw Error(s(468,l))}u[xt]=e,st(u),l=u}e.stateNode=l}else v0(c,e.type,e.stateNode);else e.stateNode=g0(c,l,e.memoizedProps);else u!==l?(u===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):u.count--,l===null?v0(c,e.type,e.stateNode):g0(c,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Xu(e,e.memoizedProps,n.memoizedProps)}break;case 27:qt(t,e),Ft(e),l&512&&(Ke||n===null||ja(n,n.return)),n!==null&&l&4&&Xu(e,e.memoizedProps,n.memoizedProps);break;case 5:if(qt(t,e),Ft(e),l&512&&(Ke||n===null||ja(n,n.return)),e.flags&32){c=e.stateNode;try{yr(c,"")}catch(H){qe(e,e.return,H)}}l&4&&e.stateNode!=null&&(c=e.memoizedProps,Xu(e,c,n!==null?n.memoizedProps:c)),l&1024&&(Pu=!0);break;case 6:if(qt(t,e),Ft(e),l&4){if(e.stateNode===null)throw Error(s(162));l=e.memoizedProps,n=e.stateNode;try{n.nodeValue=l}catch(H){qe(e,e.return,H)}}break;case 3:if(Ys=null,c=ca,ca=qs(t.containerInfo),qt(t,e),ca=c,Ft(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{hi(t.containerInfo)}catch(H){qe(e,e.return,H)}Pu&&(Pu=!1,Ep(e));break;case 4:l=ca,ca=qs(e.stateNode.containerInfo),qt(t,e),Ft(e),ca=l;break;case 12:qt(t,e),Ft(e);break;case 13:qt(t,e),Ft(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(ad=va()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ku(e,l)));break;case 22:c=e.memoizedState!==null;var $=n!==null&&n.memoizedState!==null,_=Va,G=Ke;if(Va=_||c,Ke=G||$,qt(t,e),Ke=G,Va=_,Ft(e),l&8192)e:for(t=e.stateNode,t._visibility=c?t._visibility&-2:t._visibility|1,c&&(n===null||$||Va||Ke||Wn(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){$=n=t;try{if(u=$.stateNode,c)m=u.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{b=$.stateNode;var I=$.memoizedProps.style,B=I!=null&&I.hasOwnProperty("display")?I.display:null;b.style.display=B==null||typeof B=="boolean"?"":(""+B).trim()}}catch(H){qe($,$.return,H)}}}else if(t.tag===6){if(n===null){$=t;try{$.stateNode.nodeValue=c?"":$.memoizedProps}catch(H){qe($,$.return,H)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(n=l.retryQueue,n!==null&&(l.retryQueue=null,Ku(e,n))));break;case 19:qt(t,e),Ft(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ku(e,l)));break;case 30:break;case 21:break;default:qt(t,e),Ft(e)}}function Ft(e){var t=e.flags;if(t&2){try{for(var n,l=e.return;l!==null;){if(gp(l)){n=l;break}l=l.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var c=n.stateNode,u=Qu(e);As(e,u,c);break;case 5:var m=n.stateNode;n.flags&32&&(yr(m,""),n.flags&=-33);var b=Qu(e);As(e,b,m);break;case 3:case 4:var $=n.stateNode.containerInfo,_=Qu(e);Zu(e,_,$);break;default:throw Error(s(161))}}catch(G){qe(e,e.return,G)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ep(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Ep(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function pn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)yp(e,t.alternate,t),t=t.sibling}function Wn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:mn(4,t,t.return),Wn(t);break;case 1:ja(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&mp(t,t.return,n),Wn(t);break;case 27:li(t.stateNode);case 26:case 5:ja(t,t.return),Wn(t);break;case 22:t.memoizedState===null&&Wn(t);break;case 30:Wn(t);break;default:Wn(t)}e=e.sibling}}function gn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,c=e,u=t,m=u.flags;switch(u.tag){case 0:case 11:case 15:gn(c,u,n),Pl(4,u);break;case 1:if(gn(c,u,n),l=u,c=l.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(_){qe(l,l.return,_)}if(l=u,c=l.updateQueue,c!==null){var b=l.stateNode;try{var $=c.shared.hiddenCallbacks;if($!==null)for(c.shared.hiddenCallbacks=null,c=0;c<$.length;c++)Wh($[c],b)}catch(_){qe(l,l.return,_)}}n&&m&64&&hp(u),Kl(u,u.return);break;case 27:xp(u);case 26:case 5:gn(c,u,n),n&&l===null&&m&4&&pp(u),Kl(u,u.return);break;case 12:gn(c,u,n);break;case 13:gn(c,u,n),n&&m&4&&Sp(c,u);break;case 22:u.memoizedState===null&&gn(c,u,n),Kl(u,u.return);break;case 30:break;default:gn(c,u,n)}t=t.sibling}}function Ju(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&kl(n))}function Iu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&kl(e))}function Sa(e,t,n,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Cp(e,t,n,l),t=t.sibling}function Cp(e,t,n,l){var c=t.flags;switch(t.tag){case 0:case 11:case 15:Sa(e,t,n,l),c&2048&&Pl(9,t);break;case 1:Sa(e,t,n,l);break;case 3:Sa(e,t,n,l),c&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&kl(e)));break;case 12:if(c&2048){Sa(e,t,n,l),e=t.stateNode;try{var u=t.memoizedProps,m=u.id,b=u.onPostCommit;typeof b=="function"&&b(m,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch($){qe(t,t.return,$)}}else Sa(e,t,n,l);break;case 13:Sa(e,t,n,l);break;case 23:break;case 22:u=t.stateNode,m=t.alternate,t.memoizedState!==null?u._visibility&2?Sa(e,t,n,l):Jl(e,t):u._visibility&2?Sa(e,t,n,l):(u._visibility|=2,Br(e,t,n,l,(t.subtreeFlags&10256)!==0)),c&2048&&Ju(m,t);break;case 24:Sa(e,t,n,l),c&2048&&Iu(t.alternate,t);break;default:Sa(e,t,n,l)}}function Br(e,t,n,l,c){for(c=c&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var u=e,m=t,b=n,$=l,_=m.flags;switch(m.tag){case 0:case 11:case 15:Br(u,m,b,$,c),Pl(8,m);break;case 23:break;case 22:var G=m.stateNode;m.memoizedState!==null?G._visibility&2?Br(u,m,b,$,c):Jl(u,m):(G._visibility|=2,Br(u,m,b,$,c)),c&&_&2048&&Ju(m.alternate,m);break;case 24:Br(u,m,b,$,c),c&&_&2048&&Iu(m.alternate,m);break;default:Br(u,m,b,$,c)}t=t.sibling}}function Jl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,l=t,c=l.flags;switch(l.tag){case 22:Jl(n,l),c&2048&&Ju(l.alternate,l);break;case 24:Jl(n,l),c&2048&&Iu(l.alternate,l);break;default:Jl(n,l)}t=t.sibling}}var Il=8192;function Hr(e){if(e.subtreeFlags&Il)for(e=e.child;e!==null;)$p(e),e=e.sibling}function $p(e){switch(e.tag){case 26:Hr(e),e.flags&Il&&e.memoizedState!==null&&by(ca,e.memoizedState,e.memoizedProps);break;case 5:Hr(e);break;case 3:case 4:var t=ca;ca=qs(e.stateNode.containerInfo),Hr(e),ca=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Il,Il=16777216,Hr(e),Il=t):Hr(e));break;default:Hr(e)}}function Tp(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Wl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];ct=l,Rp(l,e)}Tp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ap(e),e=e.sibling}function Ap(e){switch(e.tag){case 0:case 11:case 15:Wl(e),e.flags&2048&&mn(9,e,e.return);break;case 3:Wl(e);break;case 12:Wl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Rs(e)):Wl(e);break;default:Wl(e)}}function Rs(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];ct=l,Rp(l,e)}Tp(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:mn(8,t,t.return),Rs(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Rs(t));break;default:Rs(t)}e=e.sibling}}function Rp(e,t){for(;ct!==null;){var n=ct;switch(n.tag){case 0:case 11:case 15:mn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:kl(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,ct=l;else e:for(n=e;ct!==null;){l=ct;var c=l.sibling,u=l.return;if(bp(l),l===n){ct=null;break e}if(c!==null){c.return=u,ct=c;break e}ct=u}}}var Lv={getCacheForType:function(e){var t=vt(at),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},_v=typeof WeakMap=="function"?WeakMap:Map,Oe=0,Fe=null,Ce=null,Ae=0,ke=0,Yt=null,xn=!1,Ur=!1,Wu=!1,Qa=0,Ze=0,vn=0,er=0,ed=0,ra=0,qr=0,ei=null,Mt=null,td=!1,ad=0,Ds=1/0,zs=null,yn=null,ht=0,bn=null,Fr=null,Yr=0,nd=0,rd=null,Dp=null,ti=0,ld=null;function Gt(){if((Oe&2)!==0&&Ae!==0)return Ae&-Ae;if(M.T!==null){var e=Dr;return e!==0?e:fd()}return Xf()}function zp(){ra===0&&(ra=(Ae&536870912)===0||ze?Ff():536870912);var e=na.current;return e!==null&&(e.flags|=32),ra}function Vt(e,t,n){(e===Fe&&(ke===2||ke===9)||e.cancelPendingCommit!==null)&&(Gr(e,0),jn(e,Ae,ra,!1)),yl(e,n),((Oe&2)===0||e!==Fe)&&(e===Fe&&((Oe&2)===0&&(er|=n),Ze===4&&jn(e,Ae,ra,!1)),wa(e))}function Np(e,t,n){if((Oe&6)!==0)throw Error(s(327));var l=!n&&(t&124)===0&&(t&e.expiredLanes)===0||vl(e,t),c=l?Uv(e,t):od(e,t,!0),u=l;do{if(c===0){Ur&&!l&&jn(e,t,0,!1);break}else{if(n=e.current.alternate,u&&!Bv(n)){c=od(e,t,!1),u=!1;continue}if(c===2){if(u=t,e.errorRecoveryDisabledLanes&u)var m=0;else m=e.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){t=m;e:{var b=e;c=ei;var $=b.current.memoizedState.isDehydrated;if($&&(Gr(b,m).flags|=256),m=od(b,m,!1),m!==2){if(Wu&&!$){b.errorRecoveryDisabledLanes|=u,er|=u,c=4;break e}u=Mt,Mt=c,u!==null&&(Mt===null?Mt=u:Mt.push.apply(Mt,u))}c=m}if(u=!1,c!==2)continue}}if(c===1){Gr(e,0),jn(e,t,0,!0);break}e:{switch(l=e,u=c,u){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:jn(l,t,ra,!xn);break e;case 2:Mt=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(c=ad+300-va(),10<c)){if(jn(l,t,ra,!xn),Fi(l,0,!0)!==0)break e;l.timeoutHandle=s0(Mp.bind(null,l,n,Mt,zs,td,t,ra,er,qr,xn,u,2,-0,0),c);break e}Mp(l,n,Mt,zs,td,t,ra,er,qr,xn,u,0,-0,0)}}break}while(!0);wa(e)}function Mp(e,t,n,l,c,u,m,b,$,_,G,I,B,H){if(e.timeoutHandle=-1,I=t.subtreeFlags,(I&8192||(I&16785408)===16785408)&&(oi={stylesheets:null,count:0,unsuspend:yy},$p(t),I=jy(),I!==null)){e.cancelPendingCommit=I(Up.bind(null,e,t,u,n,l,c,m,b,$,G,1,B,H)),jn(e,u,m,!_);return}Up(e,t,u,n,l,c,m,b,$)}function Bv(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var c=n[l],u=c.getSnapshot;c=c.value;try{if(!Ht(u(),c))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function jn(e,t,n,l){t&=~ed,t&=~er,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var c=t;0<c;){var u=31-Bt(c),m=1<<u;l[u]=-1,c&=~m}n!==0&&Gf(e,n,t)}function Ns(){return(Oe&6)===0?(ai(0),!1):!0}function id(){if(Ce!==null){if(ke===0)var e=Ce.return;else e=Ce,Ha=Zn=null,wu(e),Lr=null,Xl=0,e=Ce;for(;e!==null;)fp(e.alternate,e),e=e.return;Ce=null}}function Gr(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,ay(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),id(),Fe=e,Ce=n=La(e.current,null),Ae=t,ke=0,Yt=null,xn=!1,Ur=vl(e,t),Wu=!1,qr=ra=ed=er=vn=Ze=0,Mt=ei=null,td=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var c=31-Bt(l),u=1<<c;t|=e[c],l&=~u}return Qa=t,es(),n}function Op(e,t){Se=null,M.H=ys,t===_l||t===cs?(t=Jh(),ke=3):t===Zh?(t=Jh(),ke=4):ke=t===Im?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Yt=t,Ce===null&&(Ze=1,Es(e,Wt(t,e.current)))}function kp(){var e=M.H;return M.H=ys,e===null?ys:e}function Lp(){var e=M.A;return M.A=Lv,e}function sd(){Ze=4,xn||(Ae&4194048)!==Ae&&na.current!==null||(Ur=!0),(vn&134217727)===0&&(er&134217727)===0||Fe===null||jn(Fe,Ae,ra,!1)}function od(e,t,n){var l=Oe;Oe|=2;var c=kp(),u=Lp();(Fe!==e||Ae!==t)&&(zs=null,Gr(e,t)),t=!1;var m=Ze;e:do try{if(ke!==0&&Ce!==null){var b=Ce,$=Yt;switch(ke){case 8:id(),m=6;break e;case 3:case 2:case 9:case 6:na.current===null&&(t=!0);var _=ke;if(ke=0,Yt=null,Vr(e,b,$,_),n&&Ur){m=0;break e}break;default:_=ke,ke=0,Yt=null,Vr(e,b,$,_)}}Hv(),m=Ze;break}catch(G){Op(e,G)}while(!0);return t&&e.shellSuspendCounter++,Ha=Zn=null,Oe=l,M.H=c,M.A=u,Ce===null&&(Fe=null,Ae=0,es()),m}function Hv(){for(;Ce!==null;)_p(Ce)}function Uv(e,t){var n=Oe;Oe|=2;var l=kp(),c=Lp();Fe!==e||Ae!==t?(zs=null,Ds=va()+500,Gr(e,t)):Ur=vl(e,t);e:do try{if(ke!==0&&Ce!==null){t=Ce;var u=Yt;t:switch(ke){case 1:ke=0,Yt=null,Vr(e,t,u,1);break;case 2:case 9:if(Ph(u)){ke=0,Yt=null,Bp(t);break}t=function(){ke!==2&&ke!==9||Fe!==e||(ke=7),wa(e)},u.then(t,t);break e;case 3:ke=7;break e;case 4:ke=5;break e;case 7:Ph(u)?(ke=0,Yt=null,Bp(t)):(ke=0,Yt=null,Vr(e,t,u,7));break;case 5:var m=null;switch(Ce.tag){case 26:m=Ce.memoizedState;case 5:case 27:var b=Ce;if(!m||y0(m)){ke=0,Yt=null;var $=b.sibling;if($!==null)Ce=$;else{var _=b.return;_!==null?(Ce=_,Ms(_)):Ce=null}break t}}ke=0,Yt=null,Vr(e,t,u,5);break;case 6:ke=0,Yt=null,Vr(e,t,u,6);break;case 8:id(),Ze=6;break e;default:throw Error(s(462))}}qv();break}catch(G){Op(e,G)}while(!0);return Ha=Zn=null,M.H=l,M.A=c,Oe=n,Ce!==null?0:(Fe=null,Ae=0,es(),Ze)}function qv(){for(;Ce!==null&&!cx();)_p(Ce)}function _p(e){var t=up(e.alternate,e,Qa);e.memoizedProps=e.pendingProps,t===null?Ms(e):Ce=t}function Bp(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=rp(n,t,t.pendingProps,t.type,void 0,Ae);break;case 11:t=rp(n,t,t.pendingProps,t.type.render,t.ref,Ae);break;case 5:wu(t);default:fp(n,t),t=Ce=Hh(t,Qa),t=up(n,t,Qa)}e.memoizedProps=e.pendingProps,t===null?Ms(e):Ce=t}function Vr(e,t,n,l){Ha=Zn=null,wu(t),Lr=null,Xl=0;var c=t.return;try{if(Dv(e,c,t,n,Ae)){Ze=1,Es(e,Wt(n,e.current)),Ce=null;return}}catch(u){if(c!==null)throw Ce=c,u;Ze=1,Es(e,Wt(n,e.current)),Ce=null;return}t.flags&32768?(ze||l===1?e=!0:Ur||(Ae&536870912)!==0?e=!1:(xn=e=!0,(l===2||l===9||l===3||l===6)&&(l=na.current,l!==null&&l.tag===13&&(l.flags|=16384))),Hp(t,e)):Ms(t)}function Ms(e){var t=e;do{if((t.flags&32768)!==0){Hp(t,xn);return}e=t.return;var n=Nv(t.alternate,t,Qa);if(n!==null){Ce=n;return}if(t=t.sibling,t!==null){Ce=t;return}Ce=t=e}while(t!==null);Ze===0&&(Ze=5)}function Hp(e,t){do{var n=Mv(e.alternate,e);if(n!==null){n.flags&=32767,Ce=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Ce=e;return}Ce=e=n}while(e!==null);Ze=6,Ce=null}function Up(e,t,n,l,c,u,m,b,$){e.cancelPendingCommit=null;do Os();while(ht!==0);if((Oe&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(u=t.lanes|t.childLanes,u|=Ic,yx(e,n,u,m,b,$),e===Fe&&(Ce=Fe=null,Ae=0),Fr=t,bn=e,Yr=n,nd=u,rd=c,Dp=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Vv(Hi,function(){return Vp(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=M.T,M.T=null,c=te.p,te.p=2,m=Oe,Oe|=4;try{Ov(e,t,n)}finally{Oe=m,te.p=c,M.T=l}}ht=1,qp(),Fp(),Yp()}}function qp(){if(ht===1){ht=0;var e=bn,t=Fr,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=M.T,M.T=null;var l=te.p;te.p=2;var c=Oe;Oe|=4;try{wp(t,e);var u=bd,m=Rh(e.containerInfo),b=u.focusedElem,$=u.selectionRange;if(m!==b&&b&&b.ownerDocument&&Ah(b.ownerDocument.documentElement,b)){if($!==null&&Qc(b)){var _=$.start,G=$.end;if(G===void 0&&(G=_),"selectionStart"in b)b.selectionStart=_,b.selectionEnd=Math.min(G,b.value.length);else{var I=b.ownerDocument||document,B=I&&I.defaultView||window;if(B.getSelection){var H=B.getSelection(),pe=b.textContent.length,de=Math.min($.start,pe),Be=$.end===void 0?de:Math.min($.end,pe);!H.extend&&de>Be&&(m=Be,Be=de,de=m);var O=Th(b,de),N=Th(b,Be);if(O&&N&&(H.rangeCount!==1||H.anchorNode!==O.node||H.anchorOffset!==O.offset||H.focusNode!==N.node||H.focusOffset!==N.offset)){var k=I.createRange();k.setStart(O.node,O.offset),H.removeAllRanges(),de>Be?(H.addRange(k),H.extend(N.node,N.offset)):(k.setEnd(N.node,N.offset),H.addRange(k))}}}}for(I=[],H=b;H=H.parentNode;)H.nodeType===1&&I.push({element:H,left:H.scrollLeft,top:H.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<I.length;b++){var P=I[b];P.element.scrollLeft=P.left,P.element.scrollTop=P.top}}Xs=!!yd,bd=yd=null}finally{Oe=c,te.p=l,M.T=n}}e.current=t,ht=2}}function Fp(){if(ht===2){ht=0;var e=bn,t=Fr,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=M.T,M.T=null;var l=te.p;te.p=2;var c=Oe;Oe|=4;try{yp(e,t.alternate,t)}finally{Oe=c,te.p=l,M.T=n}}ht=3}}function Yp(){if(ht===4||ht===3){ht=0,ux();var e=bn,t=Fr,n=Yr,l=Dp;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?ht=5:(ht=0,Fr=bn=null,Gp(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(yn=null),$c(n),t=t.stateNode,_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(xl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=M.T,c=te.p,te.p=2,M.T=null;try{for(var u=e.onRecoverableError,m=0;m<l.length;m++){var b=l[m];u(b.value,{componentStack:b.stack})}}finally{M.T=t,te.p=c}}(Yr&3)!==0&&Os(),wa(e),c=e.pendingLanes,(n&4194090)!==0&&(c&42)!==0?e===ld?ti++:(ti=0,ld=e):ti=0,ai(0)}}function Gp(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,kl(t)))}function Os(e){return qp(),Fp(),Yp(),Vp()}function Vp(){if(ht!==5)return!1;var e=bn,t=nd;nd=0;var n=$c(Yr),l=M.T,c=te.p;try{te.p=32>n?32:n,M.T=null,n=rd,rd=null;var u=bn,m=Yr;if(ht=0,Fr=bn=null,Yr=0,(Oe&6)!==0)throw Error(s(331));var b=Oe;if(Oe|=4,Ap(u.current),Cp(u,u.current,m,n),Oe=b,ai(0,!1),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(xl,u)}catch{}return!0}finally{te.p=c,M.T=l,Gp(e,t)}}function Xp(e,t,n){t=Wt(n,t),t=_u(e.stateNode,t,2),e=un(e,t,2),e!==null&&(yl(e,2),wa(e))}function qe(e,t,n){if(e.tag===3)Xp(e,e,n);else for(;t!==null;){if(t.tag===3){Xp(t,e,n);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(yn===null||!yn.has(l))){e=Wt(n,e),n=Km(2),l=un(t,n,2),l!==null&&(Jm(n,l,t,e),yl(l,2),wa(l));break}}t=t.return}}function cd(e,t,n){var l=e.pingCache;if(l===null){l=e.pingCache=new _v;var c=new Set;l.set(t,c)}else c=l.get(t),c===void 0&&(c=new Set,l.set(t,c));c.has(n)||(Wu=!0,c.add(n),e=Fv.bind(null,e,t,n),t.then(e,e))}function Fv(e,t,n){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Fe===e&&(Ae&n)===n&&(Ze===4||Ze===3&&(Ae&62914560)===Ae&&300>va()-ad?(Oe&2)===0&&Gr(e,0):ed|=n,qr===Ae&&(qr=0)),wa(e)}function Qp(e,t){t===0&&(t=Yf()),e=$r(e,t),e!==null&&(yl(e,t),wa(e))}function Yv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Qp(e,n)}function Gv(e,t){var n=0;switch(e.tag){case 13:var l=e.stateNode,c=e.memoizedState;c!==null&&(n=c.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(t),Qp(e,n)}function Vv(e,t){return Sc(e,t)}var ks=null,Xr=null,ud=!1,Ls=!1,dd=!1,tr=0;function wa(e){e!==Xr&&e.next===null&&(Xr===null?ks=Xr=e:Xr=Xr.next=e),Ls=!0,ud||(ud=!0,Qv())}function ai(e,t){if(!dd&&Ls){dd=!0;do for(var n=!1,l=ks;l!==null;){if(e!==0){var c=l.pendingLanes;if(c===0)var u=0;else{var m=l.suspendedLanes,b=l.pingedLanes;u=(1<<31-Bt(42|e)+1)-1,u&=c&~(m&~b),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(n=!0,Jp(l,u))}else u=Ae,u=Fi(l,l===Fe?u:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(u&3)===0||vl(l,u)||(n=!0,Jp(l,u));l=l.next}while(n);dd=!1}}function Xv(){Zp()}function Zp(){Ls=ud=!1;var e=0;tr!==0&&(ty()&&(e=tr),tr=0);for(var t=va(),n=null,l=ks;l!==null;){var c=l.next,u=Pp(l,t);u===0?(l.next=null,n===null?ks=c:n.next=c,c===null&&(Xr=n)):(n=l,(e!==0||(u&3)!==0)&&(Ls=!0)),l=c}ai(e)}function Pp(e,t){for(var n=e.suspendedLanes,l=e.pingedLanes,c=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var m=31-Bt(u),b=1<<m,$=c[m];$===-1?((b&n)===0||(b&l)!==0)&&(c[m]=vx(b,t)):$<=t&&(e.expiredLanes|=b),u&=~b}if(t=Fe,n=Ae,n=Fi(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,n===0||e===t&&(ke===2||ke===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&wc(l),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||vl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(l!==null&&wc(l),$c(n)){case 2:case 8:n=Uf;break;case 32:n=Hi;break;case 268435456:n=qf;break;default:n=Hi}return l=Kp.bind(null,e),n=Sc(n,l),e.callbackPriority=t,e.callbackNode=n,t}return l!==null&&l!==null&&wc(l),e.callbackPriority=2,e.callbackNode=null,2}function Kp(e,t){if(ht!==0&&ht!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Os()&&e.callbackNode!==n)return null;var l=Ae;return l=Fi(e,e===Fe?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Np(e,l,t),Pp(e,va()),e.callbackNode!=null&&e.callbackNode===n?Kp.bind(null,e):null)}function Jp(e,t){if(Os())return null;Np(e,t,!0)}function Qv(){ny(function(){(Oe&6)!==0?Sc(Hf,Xv):Zp()})}function fd(){return tr===0&&(tr=Ff()),tr}function Ip(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Qi(""+e)}function Wp(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Zv(e,t,n,l,c){if(t==="submit"&&n&&n.stateNode===c){var u=Ip((c[Rt]||null).action),m=l.submitter;m&&(t=(t=m[Rt]||null)?Ip(t.formAction):m.getAttribute("formAction"),t!==null&&(u=t,m=null));var b=new Ji("action","action",null,l,c);e.push({event:b,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(tr!==0){var $=m?Wp(c,m):new FormData(c);Nu(n,{pending:!0,data:$,method:c.method,action:u},null,$)}}else typeof u=="function"&&(b.preventDefault(),$=m?Wp(c,m):new FormData(c),Nu(n,{pending:!0,data:$,method:c.method,action:u},u,$))},currentTarget:c}]})}}for(var hd=0;hd<Jc.length;hd++){var md=Jc[hd],Pv=md.toLowerCase(),Kv=md[0].toUpperCase()+md.slice(1);oa(Pv,"on"+Kv)}oa(Nh,"onAnimationEnd"),oa(Mh,"onAnimationIteration"),oa(Oh,"onAnimationStart"),oa("dblclick","onDoubleClick"),oa("focusin","onFocus"),oa("focusout","onBlur"),oa(hv,"onTransitionRun"),oa(mv,"onTransitionStart"),oa(pv,"onTransitionCancel"),oa(kh,"onTransitionEnd"),gr("onMouseEnter",["mouseout","mouseover"]),gr("onMouseLeave",["mouseout","mouseover"]),gr("onPointerEnter",["pointerout","pointerover"]),gr("onPointerLeave",["pointerout","pointerover"]),Hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Hn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ni="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ni));function e0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],c=l.event;l=l.listeners;e:{var u=void 0;if(t)for(var m=l.length-1;0<=m;m--){var b=l[m],$=b.instance,_=b.currentTarget;if(b=b.listener,$!==u&&c.isPropagationStopped())break e;u=b,c.currentTarget=_;try{u(c)}catch(G){ws(G)}c.currentTarget=null,u=$}else for(m=0;m<l.length;m++){if(b=l[m],$=b.instance,_=b.currentTarget,b=b.listener,$!==u&&c.isPropagationStopped())break e;u=b,c.currentTarget=_;try{u(c)}catch(G){ws(G)}c.currentTarget=null,u=$}}}}function $e(e,t){var n=t[Tc];n===void 0&&(n=t[Tc]=new Set);var l=e+"__bubble";n.has(l)||(t0(t,e,2,!1),n.add(l))}function pd(e,t,n){var l=0;t&&(l|=4),t0(n,e,l,t)}var _s="_reactListening"+Math.random().toString(36).slice(2);function gd(e){if(!e[_s]){e[_s]=!0,Zf.forEach(function(n){n!=="selectionchange"&&(Jv.has(n)||pd(n,!1,e),pd(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[_s]||(t[_s]=!0,pd("selectionchange",!1,t))}}function t0(e,t,n,l){switch(C0(t)){case 2:var c=Ey;break;case 8:c=Cy;break;default:c=Dd}n=c.bind(null,t,n,e),c=void 0,!Bc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(c=!0),l?c!==void 0?e.addEventListener(t,n,{capture:!0,passive:c}):e.addEventListener(t,n,!0):c!==void 0?e.addEventListener(t,n,{passive:c}):e.addEventListener(t,n,!1)}function xd(e,t,n,l,c){var u=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var m=l.tag;if(m===3||m===4){var b=l.stateNode.containerInfo;if(b===c)break;if(m===4)for(m=l.return;m!==null;){var $=m.tag;if(($===3||$===4)&&m.stateNode.containerInfo===c)return;m=m.return}for(;b!==null;){if(m=hr(b),m===null)return;if($=m.tag,$===5||$===6||$===26||$===27){l=u=m;continue e}b=b.parentNode}}l=l.return}oh(function(){var _=u,G=Lc(n),I=[];e:{var B=Lh.get(e);if(B!==void 0){var H=Ji,pe=e;switch(e){case"keypress":if(Pi(n)===0)break e;case"keydown":case"keyup":H=Vx;break;case"focusin":pe="focus",H=Fc;break;case"focusout":pe="blur",H=Fc;break;case"beforeblur":case"afterblur":H=Fc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=dh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=Mx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=Zx;break;case Nh:case Mh:case Oh:H=Lx;break;case kh:H=Kx;break;case"scroll":case"scrollend":H=zx;break;case"wheel":H=Ix;break;case"copy":case"cut":case"paste":H=Bx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=hh;break;case"toggle":case"beforetoggle":H=ev}var de=(t&4)!==0,Be=!de&&(e==="scroll"||e==="scrollend"),O=de?B!==null?B+"Capture":null:B;de=[];for(var N=_,k;N!==null;){var P=N;if(k=P.stateNode,P=P.tag,P!==5&&P!==26&&P!==27||k===null||O===null||(P=Sl(N,O),P!=null&&de.push(ri(N,P,k))),Be)break;N=N.return}0<de.length&&(B=new H(B,pe,null,n,G),I.push({event:B,listeners:de}))}}if((t&7)===0){e:{if(B=e==="mouseover"||e==="pointerover",H=e==="mouseout"||e==="pointerout",B&&n!==kc&&(pe=n.relatedTarget||n.fromElement)&&(hr(pe)||pe[fr]))break e;if((H||B)&&(B=G.window===G?G:(B=G.ownerDocument)?B.defaultView||B.parentWindow:window,H?(pe=n.relatedTarget||n.toElement,H=_,pe=pe?hr(pe):null,pe!==null&&(Be=f(pe),de=pe.tag,pe!==Be||de!==5&&de!==27&&de!==6)&&(pe=null)):(H=null,pe=_),H!==pe)){if(de=dh,P="onMouseLeave",O="onMouseEnter",N="mouse",(e==="pointerout"||e==="pointerover")&&(de=hh,P="onPointerLeave",O="onPointerEnter",N="pointer"),Be=H==null?B:jl(H),k=pe==null?B:jl(pe),B=new de(P,N+"leave",H,n,G),B.target=Be,B.relatedTarget=k,P=null,hr(G)===_&&(de=new de(O,N+"enter",pe,n,G),de.target=k,de.relatedTarget=Be,P=de),Be=P,H&&pe)t:{for(de=H,O=pe,N=0,k=de;k;k=Qr(k))N++;for(k=0,P=O;P;P=Qr(P))k++;for(;0<N-k;)de=Qr(de),N--;for(;0<k-N;)O=Qr(O),k--;for(;N--;){if(de===O||O!==null&&de===O.alternate)break t;de=Qr(de),O=Qr(O)}de=null}else de=null;H!==null&&a0(I,B,H,de,!1),pe!==null&&Be!==null&&a0(I,Be,pe,de,!0)}}e:{if(B=_?jl(_):window,H=B.nodeName&&B.nodeName.toLowerCase(),H==="select"||H==="input"&&B.type==="file")var le=jh;else if(yh(B))if(Sh)le=uv;else{le=ov;var we=sv}else H=B.nodeName,!H||H.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?_&&Oc(_.elementType)&&(le=jh):le=cv;if(le&&(le=le(e,_))){bh(I,le,n,G);break e}we&&we(e,B,_),e==="focusout"&&_&&B.type==="number"&&_.memoizedProps.value!=null&&Mc(B,"number",B.value)}switch(we=_?jl(_):window,e){case"focusin":(yh(we)||we.contentEditable==="true")&&(wr=we,Zc=_,Dl=null);break;case"focusout":Dl=Zc=wr=null;break;case"mousedown":Pc=!0;break;case"contextmenu":case"mouseup":case"dragend":Pc=!1,Dh(I,n,G);break;case"selectionchange":if(fv)break;case"keydown":case"keyup":Dh(I,n,G)}var se;if(Gc)e:{switch(e){case"compositionstart":var me="onCompositionStart";break e;case"compositionend":me="onCompositionEnd";break e;case"compositionupdate":me="onCompositionUpdate";break e}me=void 0}else Sr?xh(e,n)&&(me="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(me="onCompositionStart");me&&(mh&&n.locale!=="ko"&&(Sr||me!=="onCompositionStart"?me==="onCompositionEnd"&&Sr&&(se=ch()):(ln=G,Hc="value"in ln?ln.value:ln.textContent,Sr=!0)),we=Bs(_,me),0<we.length&&(me=new fh(me,e,null,n,G),I.push({event:me,listeners:we}),se?me.data=se:(se=vh(n),se!==null&&(me.data=se)))),(se=av?nv(e,n):rv(e,n))&&(me=Bs(_,"onBeforeInput"),0<me.length&&(we=new fh("onBeforeInput","beforeinput",null,n,G),I.push({event:we,listeners:me}),we.data=se)),Zv(I,e,_,n,G)}e0(I,t)})}function ri(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Bs(e,t){for(var n=t+"Capture",l=[];e!==null;){var c=e,u=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||u===null||(c=Sl(e,n),c!=null&&l.unshift(ri(e,c,u)),c=Sl(e,t),c!=null&&l.push(ri(e,c,u))),e.tag===3)return l;e=e.return}return[]}function Qr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function a0(e,t,n,l,c){for(var u=t._reactName,m=[];n!==null&&n!==l;){var b=n,$=b.alternate,_=b.stateNode;if(b=b.tag,$!==null&&$===l)break;b!==5&&b!==26&&b!==27||_===null||($=_,c?(_=Sl(n,u),_!=null&&m.unshift(ri(n,_,$))):c||(_=Sl(n,u),_!=null&&m.push(ri(n,_,$)))),n=n.return}m.length!==0&&e.push({event:t,listeners:m})}var Iv=/\r\n?/g,Wv=/\u0000|\uFFFD/g;function n0(e){return(typeof e=="string"?e:""+e).replace(Iv,`
`).replace(Wv,"")}function r0(e,t){return t=n0(t),n0(e)===t}function Hs(){}function _e(e,t,n,l,c,u){switch(n){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||yr(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&yr(e,""+l);break;case"className":Gi(e,"class",l);break;case"tabIndex":Gi(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Gi(e,n,l);break;case"style":ih(e,l,u);break;case"data":if(t!=="object"){Gi(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=Qi(""+l),e.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(n==="formAction"?(t!=="input"&&_e(e,t,"name",c.name,c,null),_e(e,t,"formEncType",c.formEncType,c,null),_e(e,t,"formMethod",c.formMethod,c,null),_e(e,t,"formTarget",c.formTarget,c,null)):(_e(e,t,"encType",c.encType,c,null),_e(e,t,"method",c.method,c,null),_e(e,t,"target",c.target,c,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=Qi(""+l),e.setAttribute(n,l);break;case"onClick":l!=null&&(e.onclick=Hs);break;case"onScroll":l!=null&&$e("scroll",e);break;case"onScrollEnd":l!=null&&$e("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(n=l.__html,n!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}n=Qi(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""+l):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":l===!0?e.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(n,l):e.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(n):e.setAttribute(n,l);break;case"popover":$e("beforetoggle",e),$e("toggle",e),Yi(e,"popover",l);break;case"xlinkActuate":Oa(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Oa(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Oa(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Oa(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Oa(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Oa(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Oa(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Oa(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Oa(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Yi(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Rx.get(n)||n,Yi(e,n,l))}}function vd(e,t,n,l,c,u){switch(n){case"style":ih(e,l,u);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(n=l.__html,n!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"children":typeof l=="string"?yr(e,l):(typeof l=="number"||typeof l=="bigint")&&yr(e,""+l);break;case"onScroll":l!=null&&$e("scroll",e);break;case"onScrollEnd":l!=null&&$e("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Hs);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Pf.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(c=n.endsWith("Capture"),t=n.slice(2,c?n.length-7:void 0),u=e[Rt]||null,u=u!=null?u[n]:null,typeof u=="function"&&e.removeEventListener(t,u,c),typeof l=="function")){typeof u!="function"&&u!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,l,c);break e}n in e?e[n]=l:l===!0?e.setAttribute(n,""):Yi(e,n,l)}}}function mt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":$e("error",e),$e("load",e);var l=!1,c=!1,u;for(u in n)if(n.hasOwnProperty(u)){var m=n[u];if(m!=null)switch(u){case"src":l=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:_e(e,t,u,m,n,null)}}c&&_e(e,t,"srcSet",n.srcSet,n,null),l&&_e(e,t,"src",n.src,n,null);return;case"input":$e("invalid",e);var b=u=m=c=null,$=null,_=null;for(l in n)if(n.hasOwnProperty(l)){var G=n[l];if(G!=null)switch(l){case"name":c=G;break;case"type":m=G;break;case"checked":$=G;break;case"defaultChecked":_=G;break;case"value":u=G;break;case"defaultValue":b=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(s(137,t));break;default:_e(e,t,l,G,n,null)}}ah(e,u,b,$,_,m,c,!1),Vi(e);return;case"select":$e("invalid",e),l=m=u=null;for(c in n)if(n.hasOwnProperty(c)&&(b=n[c],b!=null))switch(c){case"value":u=b;break;case"defaultValue":m=b;break;case"multiple":l=b;default:_e(e,t,c,b,n,null)}t=u,n=m,e.multiple=!!l,t!=null?vr(e,!!l,t,!1):n!=null&&vr(e,!!l,n,!0);return;case"textarea":$e("invalid",e),u=c=l=null;for(m in n)if(n.hasOwnProperty(m)&&(b=n[m],b!=null))switch(m){case"value":l=b;break;case"defaultValue":c=b;break;case"children":u=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:_e(e,t,m,b,n,null)}rh(e,l,c,u),Vi(e);return;case"option":for($ in n)if(n.hasOwnProperty($)&&(l=n[$],l!=null))switch($){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:_e(e,t,$,l,n,null)}return;case"dialog":$e("beforetoggle",e),$e("toggle",e),$e("cancel",e),$e("close",e);break;case"iframe":case"object":$e("load",e);break;case"video":case"audio":for(l=0;l<ni.length;l++)$e(ni[l],e);break;case"image":$e("error",e),$e("load",e);break;case"details":$e("toggle",e);break;case"embed":case"source":case"link":$e("error",e),$e("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(_ in n)if(n.hasOwnProperty(_)&&(l=n[_],l!=null))switch(_){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:_e(e,t,_,l,n,null)}return;default:if(Oc(t)){for(G in n)n.hasOwnProperty(G)&&(l=n[G],l!==void 0&&vd(e,t,G,l,n,void 0));return}}for(b in n)n.hasOwnProperty(b)&&(l=n[b],l!=null&&_e(e,t,b,l,n,null))}function ey(e,t,n,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,u=null,m=null,b=null,$=null,_=null,G=null;for(H in n){var I=n[H];if(n.hasOwnProperty(H)&&I!=null)switch(H){case"checked":break;case"value":break;case"defaultValue":$=I;default:l.hasOwnProperty(H)||_e(e,t,H,null,l,I)}}for(var B in l){var H=l[B];if(I=n[B],l.hasOwnProperty(B)&&(H!=null||I!=null))switch(B){case"type":u=H;break;case"name":c=H;break;case"checked":_=H;break;case"defaultChecked":G=H;break;case"value":m=H;break;case"defaultValue":b=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(s(137,t));break;default:H!==I&&_e(e,t,B,H,l,I)}}Nc(e,m,b,$,_,G,u,c);return;case"select":H=m=b=B=null;for(u in n)if($=n[u],n.hasOwnProperty(u)&&$!=null)switch(u){case"value":break;case"multiple":H=$;default:l.hasOwnProperty(u)||_e(e,t,u,null,l,$)}for(c in l)if(u=l[c],$=n[c],l.hasOwnProperty(c)&&(u!=null||$!=null))switch(c){case"value":B=u;break;case"defaultValue":b=u;break;case"multiple":m=u;default:u!==$&&_e(e,t,c,u,l,$)}t=b,n=m,l=H,B!=null?vr(e,!!n,B,!1):!!l!=!!n&&(t!=null?vr(e,!!n,t,!0):vr(e,!!n,n?[]:"",!1));return;case"textarea":H=B=null;for(b in n)if(c=n[b],n.hasOwnProperty(b)&&c!=null&&!l.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:_e(e,t,b,null,l,c)}for(m in l)if(c=l[m],u=n[m],l.hasOwnProperty(m)&&(c!=null||u!=null))switch(m){case"value":B=c;break;case"defaultValue":H=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==u&&_e(e,t,m,c,l,u)}nh(e,B,H);return;case"option":for(var pe in n)if(B=n[pe],n.hasOwnProperty(pe)&&B!=null&&!l.hasOwnProperty(pe))switch(pe){case"selected":e.selected=!1;break;default:_e(e,t,pe,null,l,B)}for($ in l)if(B=l[$],H=n[$],l.hasOwnProperty($)&&B!==H&&(B!=null||H!=null))switch($){case"selected":e.selected=B&&typeof B!="function"&&typeof B!="symbol";break;default:_e(e,t,$,B,l,H)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var de in n)B=n[de],n.hasOwnProperty(de)&&B!=null&&!l.hasOwnProperty(de)&&_e(e,t,de,null,l,B);for(_ in l)if(B=l[_],H=n[_],l.hasOwnProperty(_)&&B!==H&&(B!=null||H!=null))switch(_){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(s(137,t));break;default:_e(e,t,_,B,l,H)}return;default:if(Oc(t)){for(var Be in n)B=n[Be],n.hasOwnProperty(Be)&&B!==void 0&&!l.hasOwnProperty(Be)&&vd(e,t,Be,void 0,l,B);for(G in l)B=l[G],H=n[G],!l.hasOwnProperty(G)||B===H||B===void 0&&H===void 0||vd(e,t,G,B,l,H);return}}for(var O in n)B=n[O],n.hasOwnProperty(O)&&B!=null&&!l.hasOwnProperty(O)&&_e(e,t,O,null,l,B);for(I in l)B=l[I],H=n[I],!l.hasOwnProperty(I)||B===H||B==null&&H==null||_e(e,t,I,B,l,H)}var yd=null,bd=null;function Us(e){return e.nodeType===9?e:e.ownerDocument}function l0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function i0(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function jd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Sd=null;function ty(){var e=window.event;return e&&e.type==="popstate"?e===Sd?!1:(Sd=e,!0):(Sd=null,!1)}var s0=typeof setTimeout=="function"?setTimeout:void 0,ay=typeof clearTimeout=="function"?clearTimeout:void 0,o0=typeof Promise=="function"?Promise:void 0,ny=typeof queueMicrotask=="function"?queueMicrotask:typeof o0<"u"?function(e){return o0.resolve(null).then(e).catch(ry)}:s0;function ry(e){setTimeout(function(){throw e})}function Sn(e){return e==="head"}function c0(e,t){var n=t,l=0,c=0;do{var u=n.nextSibling;if(e.removeChild(n),u&&u.nodeType===8)if(n=u.data,n==="/$"){if(0<l&&8>l){n=l;var m=e.ownerDocument;if(n&1&&li(m.documentElement),n&2&&li(m.body),n&4)for(n=m.head,li(n),m=n.firstChild;m;){var b=m.nextSibling,$=m.nodeName;m[bl]||$==="SCRIPT"||$==="STYLE"||$==="LINK"&&m.rel.toLowerCase()==="stylesheet"||n.removeChild(m),m=b}}if(c===0){e.removeChild(u),hi(t);return}c--}else n==="$"||n==="$?"||n==="$!"?c++:l=n.charCodeAt(0)-48;else l=0;n=u}while(n);hi(t)}function wd(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":wd(n),Ac(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function ly(e,t,n,l){for(;e.nodeType===1;){var c=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[bl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=ua(e.nextSibling),e===null)break}return null}function iy(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ua(e.nextSibling),e===null))return null;return e}function Ed(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function sy(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var l=function(){t(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function ua(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var Cd=null;function u0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function d0(e,t,n){switch(t=Us(n),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function li(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ac(e)}var la=new Map,f0=new Set;function qs(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Za=te.d;te.d={f:oy,r:cy,D:uy,C:dy,L:fy,m:hy,X:py,S:my,M:gy};function oy(){var e=Za.f(),t=Ns();return e||t}function cy(e){var t=mr(e);t!==null&&t.tag===5&&t.type==="form"?Nm(t):Za.r(e)}var Zr=typeof document>"u"?null:document;function h0(e,t,n){var l=Zr;if(l&&typeof t=="string"&&t){var c=It(t);c='link[rel="'+e+'"][href="'+c+'"]',typeof n=="string"&&(c+='[crossorigin="'+n+'"]'),f0.has(c)||(f0.add(c),e={rel:e,crossOrigin:n,href:t},l.querySelector(c)===null&&(t=l.createElement("link"),mt(t,"link",e),st(t),l.head.appendChild(t)))}}function uy(e){Za.D(e),h0("dns-prefetch",e,null)}function dy(e,t){Za.C(e,t),h0("preconnect",e,t)}function fy(e,t,n){Za.L(e,t,n);var l=Zr;if(l&&e&&t){var c='link[rel="preload"][as="'+It(t)+'"]';t==="image"&&n&&n.imageSrcSet?(c+='[imagesrcset="'+It(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(c+='[imagesizes="'+It(n.imageSizes)+'"]')):c+='[href="'+It(e)+'"]';var u=c;switch(t){case"style":u=Pr(e);break;case"script":u=Kr(e)}la.has(u)||(e=x({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),la.set(u,e),l.querySelector(c)!==null||t==="style"&&l.querySelector(ii(u))||t==="script"&&l.querySelector(si(u))||(t=l.createElement("link"),mt(t,"link",e),st(t),l.head.appendChild(t)))}}function hy(e,t){Za.m(e,t);var n=Zr;if(n&&e){var l=t&&typeof t.as=="string"?t.as:"script",c='link[rel="modulepreload"][as="'+It(l)+'"][href="'+It(e)+'"]',u=c;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Kr(e)}if(!la.has(u)&&(e=x({rel:"modulepreload",href:e},t),la.set(u,e),n.querySelector(c)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(si(u)))return}l=n.createElement("link"),mt(l,"link",e),st(l),n.head.appendChild(l)}}}function my(e,t,n){Za.S(e,t,n);var l=Zr;if(l&&e){var c=pr(l).hoistableStyles,u=Pr(e);t=t||"default";var m=c.get(u);if(!m){var b={loading:0,preload:null};if(m=l.querySelector(ii(u)))b.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":t},n),(n=la.get(u))&&$d(e,n);var $=m=l.createElement("link");st($),mt($,"link",e),$._p=new Promise(function(_,G){$.onload=_,$.onerror=G}),$.addEventListener("load",function(){b.loading|=1}),$.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Fs(m,t,l)}m={type:"stylesheet",instance:m,count:1,state:b},c.set(u,m)}}}function py(e,t){Za.X(e,t);var n=Zr;if(n&&e){var l=pr(n).hoistableScripts,c=Kr(e),u=l.get(c);u||(u=n.querySelector(si(c)),u||(e=x({src:e,async:!0},t),(t=la.get(c))&&Td(e,t),u=n.createElement("script"),st(u),mt(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},l.set(c,u))}}function gy(e,t){Za.M(e,t);var n=Zr;if(n&&e){var l=pr(n).hoistableScripts,c=Kr(e),u=l.get(c);u||(u=n.querySelector(si(c)),u||(e=x({src:e,async:!0,type:"module"},t),(t=la.get(c))&&Td(e,t),u=n.createElement("script"),st(u),mt(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},l.set(c,u))}}function m0(e,t,n,l){var c=(c=he.current)?qs(c):null;if(!c)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Pr(n.href),n=pr(c).hoistableStyles,l=n.get(t),l||(l={type:"style",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Pr(n.href);var u=pr(c).hoistableStyles,m=u.get(e);if(m||(c=c.ownerDocument||c,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,m),(u=c.querySelector(ii(e)))&&!u._p&&(m.instance=u,m.state.loading=5),la.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},la.set(e,n),u||xy(c,e,n,m.state))),t&&l===null)throw Error(s(528,""));return m}if(t&&l!==null)throw Error(s(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Kr(n),n=pr(c).hoistableScripts,l=n.get(t),l||(l={type:"script",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Pr(e){return'href="'+It(e)+'"'}function ii(e){return'link[rel="stylesheet"]['+e+"]"}function p0(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function xy(e,t,n,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),mt(t,"link",n),st(t),e.head.appendChild(t))}function Kr(e){return'[src="'+It(e)+'"]'}function si(e){return"script[async]"+e}function g0(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+It(n.href)+'"]');if(l)return t.instance=l,st(l),l;var c=x({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),st(l),mt(l,"style",c),Fs(l,n.precedence,e),t.instance=l;case"stylesheet":c=Pr(n.href);var u=e.querySelector(ii(c));if(u)return t.state.loading|=4,t.instance=u,st(u),u;l=p0(n),(c=la.get(c))&&$d(l,c),u=(e.ownerDocument||e).createElement("link"),st(u);var m=u;return m._p=new Promise(function(b,$){m.onload=b,m.onerror=$}),mt(u,"link",l),t.state.loading|=4,Fs(u,n.precedence,e),t.instance=u;case"script":return u=Kr(n.src),(c=e.querySelector(si(u)))?(t.instance=c,st(c),c):(l=n,(c=la.get(u))&&(l=x({},n),Td(l,c)),e=e.ownerDocument||e,c=e.createElement("script"),st(c),mt(c,"link",l),e.head.appendChild(c),t.instance=c);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Fs(l,n.precedence,e));return t.instance}function Fs(e,t,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=l.length?l[l.length-1]:null,u=c,m=0;m<l.length;m++){var b=l[m];if(b.dataset.precedence===t)u=b;else if(u!==c)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function $d(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Td(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ys=null;function x0(e,t,n){if(Ys===null){var l=new Map,c=Ys=new Map;c.set(n,l)}else c=Ys,l=c.get(n),l||(l=new Map,c.set(n,l));if(l.has(e))return l;for(l.set(e,null),n=n.getElementsByTagName(e),c=0;c<n.length;c++){var u=n[c];if(!(u[bl]||u[xt]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var m=u.getAttribute(t)||"";m=e+m;var b=l.get(m);b?b.push(u):l.set(m,[u])}}return l}function v0(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function vy(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function y0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var oi=null;function yy(){}function by(e,t,n){if(oi===null)throw Error(s(475));var l=oi;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var c=Pr(n.href),u=e.querySelector(ii(c));if(u){e=u._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=Gs.bind(l),e.then(l,l)),t.state.loading|=4,t.instance=u,st(u);return}u=e.ownerDocument||e,n=p0(n),(c=la.get(c))&&$d(n,c),u=u.createElement("link"),st(u);var m=u;m._p=new Promise(function(b,$){m.onload=b,m.onerror=$}),mt(u,"link",n),t.instance=u}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(l.count++,t=Gs.bind(l),e.addEventListener("load",t),e.addEventListener("error",t))}}function jy(){if(oi===null)throw Error(s(475));var e=oi;return e.stylesheets&&e.count===0&&Ad(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&Ad(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function Gs(){if(this.count--,this.count===0){if(this.stylesheets)Ad(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Vs=null;function Ad(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Vs=new Map,t.forEach(Sy,e),Vs=null,Gs.call(e))}function Sy(e,t){if(!(t.state.loading&4)){var n=Vs.get(e);if(n)var l=n.get(null);else{n=new Map,Vs.set(e,n);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<c.length;u++){var m=c[u];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(n.set(m.dataset.precedence,m),l=m)}l&&n.set(null,l)}c=t.instance,m=c.getAttribute("data-precedence"),u=n.get(m)||l,u===l&&n.set(null,c),n.set(m,c),this.count++,l=Gs.bind(this),c.addEventListener("load",l),c.addEventListener("error",l),u?u.parentNode.insertBefore(c,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),t.state.loading|=4}}var ci={$$typeof:L,Provider:null,Consumer:null,_currentValue:re,_currentValue2:re,_threadCount:0};function wy(e,t,n,l,c,u,m,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ec(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ec(0),this.hiddenUpdates=Ec(null),this.identifierPrefix=l,this.onUncaughtError=c,this.onCaughtError=u,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function b0(e,t,n,l,c,u,m,b,$,_,G,I){return e=new wy(e,t,n,m,b,$,_,I),t=1,u===!0&&(t|=24),u=Ut(3,null,null,t),e.current=u,u.stateNode=e,t=cu(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:l,isDehydrated:n,cache:t},hu(u),e}function j0(e){return e?(e=Tr,e):Tr}function S0(e,t,n,l,c,u){c=j0(c),l.context===null?l.context=c:l.pendingContext=c,l=cn(t),l.payload={element:n},u=u===void 0?null:u,u!==null&&(l.callback=u),n=un(e,l,t),n!==null&&(Vt(n,e,t),Hl(n,e,t))}function w0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Rd(e,t){w0(e,t),(e=e.alternate)&&w0(e,t)}function E0(e){if(e.tag===13){var t=$r(e,67108864);t!==null&&Vt(t,e,67108864),Rd(e,67108864)}}var Xs=!0;function Ey(e,t,n,l){var c=M.T;M.T=null;var u=te.p;try{te.p=2,Dd(e,t,n,l)}finally{te.p=u,M.T=c}}function Cy(e,t,n,l){var c=M.T;M.T=null;var u=te.p;try{te.p=8,Dd(e,t,n,l)}finally{te.p=u,M.T=c}}function Dd(e,t,n,l){if(Xs){var c=zd(l);if(c===null)xd(e,t,l,Qs,n),$0(e,l);else if(Ty(c,e,t,n,l))l.stopPropagation();else if($0(e,l),t&4&&-1<$y.indexOf(e)){for(;c!==null;){var u=mr(c);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var m=Bn(u.pendingLanes);if(m!==0){var b=u;for(b.pendingLanes|=2,b.entangledLanes|=2;m;){var $=1<<31-Bt(m);b.entanglements[1]|=$,m&=~$}wa(u),(Oe&6)===0&&(Ds=va()+500,ai(0))}}break;case 13:b=$r(u,2),b!==null&&Vt(b,u,2),Ns(),Rd(u,2)}if(u=zd(l),u===null&&xd(e,t,l,Qs,n),u===c)break;c=u}c!==null&&l.stopPropagation()}else xd(e,t,l,null,n)}}function zd(e){return e=Lc(e),Nd(e)}var Qs=null;function Nd(e){if(Qs=null,e=hr(e),e!==null){var t=f(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=h(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Qs=e,null}function C0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(dx()){case Hf:return 2;case Uf:return 8;case Hi:case fx:return 32;case qf:return 268435456;default:return 32}default:return 32}}var Md=!1,wn=null,En=null,Cn=null,ui=new Map,di=new Map,$n=[],$y="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function $0(e,t){switch(e){case"focusin":case"focusout":wn=null;break;case"dragenter":case"dragleave":En=null;break;case"mouseover":case"mouseout":Cn=null;break;case"pointerover":case"pointerout":ui.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":di.delete(t.pointerId)}}function fi(e,t,n,l,c,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:n,eventSystemFlags:l,nativeEvent:u,targetContainers:[c]},t!==null&&(t=mr(t),t!==null&&E0(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,c!==null&&t.indexOf(c)===-1&&t.push(c),e)}function Ty(e,t,n,l,c){switch(t){case"focusin":return wn=fi(wn,e,t,n,l,c),!0;case"dragenter":return En=fi(En,e,t,n,l,c),!0;case"mouseover":return Cn=fi(Cn,e,t,n,l,c),!0;case"pointerover":var u=c.pointerId;return ui.set(u,fi(ui.get(u)||null,e,t,n,l,c)),!0;case"gotpointercapture":return u=c.pointerId,di.set(u,fi(di.get(u)||null,e,t,n,l,c)),!0}return!1}function T0(e){var t=hr(e.target);if(t!==null){var n=f(t);if(n!==null){if(t=n.tag,t===13){if(t=h(n),t!==null){e.blockedOn=t,bx(e.priority,function(){if(n.tag===13){var l=Gt();l=Cc(l);var c=$r(n,l);c!==null&&Vt(c,n,l),Rd(n,l)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Zs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=zd(e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);kc=l,n.target.dispatchEvent(l),kc=null}else return t=mr(n),t!==null&&E0(t),e.blockedOn=n,!1;t.shift()}return!0}function A0(e,t,n){Zs(e)&&n.delete(t)}function Ay(){Md=!1,wn!==null&&Zs(wn)&&(wn=null),En!==null&&Zs(En)&&(En=null),Cn!==null&&Zs(Cn)&&(Cn=null),ui.forEach(A0),di.forEach(A0)}function Ps(e,t){e.blockedOn===t&&(e.blockedOn=null,Md||(Md=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Ay)))}var Ks=null;function R0(e){Ks!==e&&(Ks=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Ks===e&&(Ks=null);for(var t=0;t<e.length;t+=3){var n=e[t],l=e[t+1],c=e[t+2];if(typeof l!="function"){if(Nd(l||n)===null)continue;break}var u=mr(n);u!==null&&(e.splice(t,3),t-=3,Nu(u,{pending:!0,data:c,method:n.method,action:l},l,c))}}))}function hi(e){function t($){return Ps($,e)}wn!==null&&Ps(wn,e),En!==null&&Ps(En,e),Cn!==null&&Ps(Cn,e),ui.forEach(t),di.forEach(t);for(var n=0;n<$n.length;n++){var l=$n[n];l.blockedOn===e&&(l.blockedOn=null)}for(;0<$n.length&&(n=$n[0],n.blockedOn===null);)T0(n),n.blockedOn===null&&$n.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var c=n[l],u=n[l+1],m=c[Rt]||null;if(typeof u=="function")m||R0(n);else if(m){var b=null;if(u&&u.hasAttribute("formAction")){if(c=u,m=u[Rt]||null)b=m.formAction;else if(Nd(c)!==null)continue}else b=m.action;typeof b=="function"?n[l+1]=b:(n.splice(l,3),l-=3),R0(n)}}}function Od(e){this._internalRoot=e}Js.prototype.render=Od.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current,l=Gt();S0(n,l,e,t,null,null)},Js.prototype.unmount=Od.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;S0(e.current,2,null,e,null,null),Ns(),t[fr]=null}};function Js(e){this._internalRoot=e}Js.prototype.unstable_scheduleHydration=function(e){if(e){var t=Xf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<$n.length&&t!==0&&t<$n[n].priority;n++);$n.splice(n,0,e),n===0&&T0(e)}};var D0=i.version;if(D0!=="19.1.0")throw Error(s(527,D0,"19.1.0"));te.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(t),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var Ry={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Is=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Is.isDisabled&&Is.supportsFiber)try{xl=Is.inject(Ry),_t=Is}catch{}}return pi.createRoot=function(e,t){if(!d(e))throw Error(s(299));var n=!1,l="",c=Xm,u=Qm,m=Zm,b=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(c=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(m=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(b=t.unstable_transitionCallbacks)),t=b0(e,1,!1,null,null,n,l,c,u,m,b,null),e[fr]=t.current,gd(e),new Od(t)},pi.hydrateRoot=function(e,t,n){if(!d(e))throw Error(s(299));var l=!1,c="",u=Xm,m=Qm,b=Zm,$=null,_=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(c=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(m=n.onCaughtError),n.onRecoverableError!==void 0&&(b=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&($=n.unstable_transitionCallbacks),n.formState!==void 0&&(_=n.formState)),t=b0(e,1,!0,t,n??null,l,c,u,m,b,$,_),t.context=j0(null),n=t.current,l=Gt(),l=Cc(l),c=cn(l),c.callback=null,un(n,c,l),n=l,t.current.lanes=n,yl(t,n),wa(t),e[fr]=t.current,gd(e),new Js(t)},pi.version="19.1.0",pi}var U0;function Hy(){if(U0)return _d.exports;U0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),_d.exports=By(),_d.exports}var Uy=Hy();const qy=Qg(Uy);/**
 * react-router v7.9.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var q0="popstate";function Fy(a={}){function i(s,d){let{pathname:f,search:h,hash:v}=s.location;return lf("",{pathname:f,search:h,hash:v},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function o(s,d){return typeof d=="string"?d:Di(d)}return Gy(i,o,null,a)}function Ve(a,i){if(a===!1||a===null||typeof a>"u")throw new Error(i)}function ma(a,i){if(!a){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function Yy(){return Math.random().toString(36).substring(2,10)}function F0(a,i){return{usr:a.state,key:a.key,idx:i}}function lf(a,i,o=null,s){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof i=="string"?dl(i):i,state:o,key:i&&i.key||s||Yy()}}function Di({pathname:a="/",search:i="",hash:o=""}){return i&&i!=="?"&&(a+=i.charAt(0)==="?"?i:"?"+i),o&&o!=="#"&&(a+=o.charAt(0)==="#"?o:"#"+o),a}function dl(a){let i={};if(a){let o=a.indexOf("#");o>=0&&(i.hash=a.substring(o),a=a.substring(0,o));let s=a.indexOf("?");s>=0&&(i.search=a.substring(s),a=a.substring(0,s)),a&&(i.pathname=a)}return i}function Gy(a,i,o,s={}){let{window:d=document.defaultView,v5Compat:f=!1}=s,h=d.history,v="POP",p=null,g=x();g==null&&(g=0,h.replaceState({...h.state,idx:g},""));function x(){return(h.state||{idx:null}).idx}function j(){v="POP";let E=x(),R=E==null?null:E-g;g=E,p&&p({action:v,location:S.location,delta:R})}function C(E,R){v="PUSH";let A=lf(S.location,E,R);g=x()+1;let L=F0(A,g),V=S.createHref(A);try{h.pushState(L,"",V)}catch(q){if(q instanceof DOMException&&q.name==="DataCloneError")throw q;d.location.assign(V)}f&&p&&p({action:v,location:S.location,delta:1})}function T(E,R){v="REPLACE";let A=lf(S.location,E,R);g=x();let L=F0(A,g),V=S.createHref(A);h.replaceState(L,"",V),f&&p&&p({action:v,location:S.location,delta:0})}function D(E){return Vy(E)}let S={get action(){return v},get location(){return a(d,h)},listen(E){if(p)throw new Error("A history only accepts one active listener");return d.addEventListener(q0,j),p=E,()=>{d.removeEventListener(q0,j),p=null}},createHref(E){return i(d,E)},createURL:D,encodeLocation(E){let R=D(E);return{pathname:R.pathname,search:R.search,hash:R.hash}},push:C,replace:T,go(E){return h.go(E)}};return S}function Vy(a,i=!1){let o="http://localhost";typeof window<"u"&&(o=window.location.origin!=="null"?window.location.origin:window.location.href),Ve(o,"No window.location.(origin|href) available to create URL");let s=typeof a=="string"?a:Di(a);return s=s.replace(/ $/,"%20"),!i&&s.startsWith("//")&&(s=o+s),new URL(s,o)}function Zg(a,i,o="/"){return Xy(a,i,o,!1)}function Xy(a,i,o,s){let d=typeof i=="string"?dl(i):i,f=tn(d.pathname||"/",o);if(f==null)return null;let h=Pg(a);Qy(h);let v=null;for(let p=0;v==null&&p<h.length;++p){let g=r2(f);v=a2(h[p],g,s)}return v}function Pg(a,i=[],o=[],s="",d=!1){let f=(h,v,p=d,g)=>{let x={relativePath:g===void 0?h.path||"":g,caseSensitive:h.caseSensitive===!0,childrenIndex:v,route:h};if(x.relativePath.startsWith("/")){if(!x.relativePath.startsWith(s)&&p)return;Ve(x.relativePath.startsWith(s),`Absolute route path "${x.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),x.relativePath=x.relativePath.slice(s.length)}let j=en([s,x.relativePath]),C=o.concat(x);h.children&&h.children.length>0&&(Ve(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${j}".`),Pg(h.children,i,C,j,p)),!(h.path==null&&!h.index)&&i.push({path:j,score:e2(j,h.index),routesMeta:C})};return a.forEach((h,v)=>{if(h.path===""||!h.path?.includes("?"))f(h,v);else for(let p of Kg(h.path))f(h,v,!0,p)}),i}function Kg(a){let i=a.split("/");if(i.length===0)return[];let[o,...s]=i,d=o.endsWith("?"),f=o.replace(/\?$/,"");if(s.length===0)return d?[f,""]:[f];let h=Kg(s.join("/")),v=[];return v.push(...h.map(p=>p===""?f:[f,p].join("/"))),d&&v.push(...h),v.map(p=>a.startsWith("/")&&p===""?"/":p)}function Qy(a){a.sort((i,o)=>i.score!==o.score?o.score-i.score:t2(i.routesMeta.map(s=>s.childrenIndex),o.routesMeta.map(s=>s.childrenIndex)))}var Zy=/^:[\w-]+$/,Py=3,Ky=2,Jy=1,Iy=10,Wy=-2,Y0=a=>a==="*";function e2(a,i){let o=a.split("/"),s=o.length;return o.some(Y0)&&(s+=Wy),i&&(s+=Ky),o.filter(d=>!Y0(d)).reduce((d,f)=>d+(Zy.test(f)?Py:f===""?Jy:Iy),s)}function t2(a,i){return a.length===i.length&&a.slice(0,-1).every((s,d)=>s===i[d])?a[a.length-1]-i[i.length-1]:0}function a2(a,i,o=!1){let{routesMeta:s}=a,d={},f="/",h=[];for(let v=0;v<s.length;++v){let p=s[v],g=v===s.length-1,x=f==="/"?i:i.slice(f.length)||"/",j=Zo({path:p.relativePath,caseSensitive:p.caseSensitive,end:g},x),C=p.route;if(!j&&g&&o&&!s[s.length-1].route.index&&(j=Zo({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},x)),!j)return null;Object.assign(d,j.params),h.push({params:d,pathname:en([f,j.pathname]),pathnameBase:o2(en([f,j.pathnameBase])),route:C}),j.pathnameBase!=="/"&&(f=en([f,j.pathnameBase]))}return h}function Zo(a,i){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[o,s]=n2(a.path,a.caseSensitive,a.end),d=i.match(o);if(!d)return null;let f=d[0],h=f.replace(/(.)\/+$/,"$1"),v=d.slice(1);return{params:s.reduce((g,{paramName:x,isOptional:j},C)=>{if(x==="*"){let D=v[C]||"";h=f.slice(0,f.length-D.length).replace(/(.)\/+$/,"$1")}const T=v[C];return j&&!T?g[x]=void 0:g[x]=(T||"").replace(/%2F/g,"/"),g},{}),pathname:f,pathnameBase:h,pattern:a}}function n2(a,i=!1,o=!0){ma(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let s=[],d="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,v,p)=>(s.push({paramName:v,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(s.push({paramName:"*"}),d+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?d+="\\/*$":a!==""&&a!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,i?void 0:"i"),s]}function r2(a){try{return a.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return ma(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),a}}function tn(a,i){if(i==="/")return a;if(!a.toLowerCase().startsWith(i.toLowerCase()))return null;let o=i.endsWith("/")?i.length-1:i.length,s=a.charAt(o);return s&&s!=="/"?null:a.slice(o)||"/"}function l2(a,i="/"){let{pathname:o,search:s="",hash:d=""}=typeof a=="string"?dl(a):a;return{pathname:o?o.startsWith("/")?o:i2(o,i):i,search:c2(s),hash:u2(d)}}function i2(a,i){let o=i.replace(/\/+$/,"").split("/");return a.split("/").forEach(d=>{d===".."?o.length>1&&o.pop():d!=="."&&o.push(d)}),o.length>1?o.join("/"):"/"}function qd(a,i,o,s){return`Cannot include a '${a}' character in a manually specified \`to.${i}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function s2(a){return a.filter((i,o)=>o===0||i.route.path&&i.route.path.length>0)}function wf(a){let i=s2(a);return i.map((o,s)=>s===i.length-1?o.pathname:o.pathnameBase)}function Ef(a,i,o,s=!1){let d;typeof a=="string"?d=dl(a):(d={...a},Ve(!d.pathname||!d.pathname.includes("?"),qd("?","pathname","search",d)),Ve(!d.pathname||!d.pathname.includes("#"),qd("#","pathname","hash",d)),Ve(!d.search||!d.search.includes("#"),qd("#","search","hash",d)));let f=a===""||d.pathname==="",h=f?"/":d.pathname,v;if(h==null)v=o;else{let j=i.length-1;if(!s&&h.startsWith("..")){let C=h.split("/");for(;C[0]==="..";)C.shift(),j-=1;d.pathname=C.join("/")}v=j>=0?i[j]:"/"}let p=l2(d,v),g=h&&h!=="/"&&h.endsWith("/"),x=(f||h===".")&&o.endsWith("/");return!p.pathname.endsWith("/")&&(g||x)&&(p.pathname+="/"),p}var en=a=>a.join("/").replace(/\/\/+/g,"/"),o2=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),c2=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,u2=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function d2(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}var Jg=["POST","PUT","PATCH","DELETE"];new Set(Jg);var f2=["GET",...Jg];new Set(f2);var fl=w.createContext(null);fl.displayName="DataRouter";var lc=w.createContext(null);lc.displayName="DataRouterState";w.createContext(!1);var Ig=w.createContext({isTransitioning:!1});Ig.displayName="ViewTransition";var h2=w.createContext(new Map);h2.displayName="Fetchers";var m2=w.createContext(null);m2.displayName="Await";var pa=w.createContext(null);pa.displayName="Navigation";var ki=w.createContext(null);ki.displayName="Location";var ga=w.createContext({outlet:null,matches:[],isDataRoute:!1});ga.displayName="Route";var Cf=w.createContext(null);Cf.displayName="RouteError";function p2(a,{relative:i}={}){Ve(hl(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:s}=w.useContext(pa),{hash:d,pathname:f,search:h}=Li(a,{relative:i}),v=f;return o!=="/"&&(v=f==="/"?o:en([o,f])),s.createHref({pathname:v,search:h,hash:d})}function hl(){return w.useContext(ki)!=null}function an(){return Ve(hl(),"useLocation() may be used only in the context of a <Router> component."),w.useContext(ki).location}var Wg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function e1(a){w.useContext(pa).static||w.useLayoutEffect(a)}function Na(){let{isDataRoute:a}=w.useContext(ga);return a?R2():g2()}function g2(){Ve(hl(),"useNavigate() may be used only in the context of a <Router> component.");let a=w.useContext(fl),{basename:i,navigator:o}=w.useContext(pa),{matches:s}=w.useContext(ga),{pathname:d}=an(),f=JSON.stringify(wf(s)),h=w.useRef(!1);return e1(()=>{h.current=!0}),w.useCallback((p,g={})=>{if(ma(h.current,Wg),!h.current)return;if(typeof p=="number"){o.go(p);return}let x=Ef(p,JSON.parse(f),d,g.relative==="path");a==null&&i!=="/"&&(x.pathname=x.pathname==="/"?i:en([i,x.pathname])),(g.replace?o.replace:o.push)(x,g.state,g)},[i,o,f,d,a])}w.createContext(null);function x2(){let{matches:a}=w.useContext(ga),i=a[a.length-1];return i?i.params:{}}function Li(a,{relative:i}={}){let{matches:o}=w.useContext(ga),{pathname:s}=an(),d=JSON.stringify(wf(o));return w.useMemo(()=>Ef(a,JSON.parse(d),s,i==="path"),[a,d,s,i])}function v2(a,i){return t1(a,i)}function t1(a,i,o,s,d){Ve(hl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:f}=w.useContext(pa),{matches:h}=w.useContext(ga),v=h[h.length-1],p=v?v.params:{},g=v?v.pathname:"/",x=v?v.pathnameBase:"/",j=v&&v.route;{let A=j&&j.path||"";a1(g,!j||A.endsWith("*")||A.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${A}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${A}"> to <Route path="${A==="/"?"*":`${A}/*`}">.`)}let C=an(),T;if(i){let A=typeof i=="string"?dl(i):i;Ve(x==="/"||A.pathname?.startsWith(x),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${x}" but pathname "${A.pathname}" was given in the \`location\` prop.`),T=A}else T=C;let D=T.pathname||"/",S=D;if(x!=="/"){let A=x.replace(/^\//,"").split("/");S="/"+D.replace(/^\//,"").split("/").slice(A.length).join("/")}let E=Zg(a,{pathname:S});ma(j||E!=null,`No routes matched location "${T.pathname}${T.search}${T.hash}" `),ma(E==null||E[E.length-1].route.element!==void 0||E[E.length-1].route.Component!==void 0||E[E.length-1].route.lazy!==void 0,`Matched leaf route at location "${T.pathname}${T.search}${T.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let R=w2(E&&E.map(A=>Object.assign({},A,{params:Object.assign({},p,A.params),pathname:en([x,f.encodeLocation?f.encodeLocation(A.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?x:en([x,f.encodeLocation?f.encodeLocation(A.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:A.pathnameBase])})),h,o,s,d);return i&&R?w.createElement(ki.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...T},navigationType:"POP"}},R):R}function y2(){let a=A2(),i=d2(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),o=a instanceof Error?a.stack:null,s="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:s},f={padding:"2px 4px",backgroundColor:s},h=null;return console.error("Error handled by React Router default ErrorBoundary:",a),h=w.createElement(w.Fragment,null,w.createElement("p",null,"💿 Hey developer 👋"),w.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",w.createElement("code",{style:f},"ErrorBoundary")," or"," ",w.createElement("code",{style:f},"errorElement")," prop on your route.")),w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},i),o?w.createElement("pre",{style:d},o):null,h)}var b2=w.createElement(y2,null),j2=class extends w.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,i){return i.location!==a.location||i.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:i.error,location:i.location,revalidation:a.revalidation||i.revalidation}}componentDidCatch(a,i){this.props.unstable_onError?this.props.unstable_onError(a,i):console.error("React Router caught the following error during render",a)}render(){return this.state.error!==void 0?w.createElement(ga.Provider,{value:this.props.routeContext},w.createElement(Cf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function S2({routeContext:a,match:i,children:o}){let s=w.useContext(fl);return s&&s.static&&s.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=i.route.id),w.createElement(ga.Provider,{value:a},o)}function w2(a,i=[],o=null,s=null,d=null){if(a==null){if(!o)return null;if(o.errors)a=o.matches;else if(i.length===0&&!o.initialized&&o.matches.length>0)a=o.matches;else return null}let f=a,h=o?.errors;if(h!=null){let g=f.findIndex(x=>x.route.id&&h?.[x.route.id]!==void 0);Ve(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),f=f.slice(0,Math.min(f.length,g+1))}let v=!1,p=-1;if(o)for(let g=0;g<f.length;g++){let x=f[g];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(p=g),x.route.id){let{loaderData:j,errors:C}=o,T=x.route.loader&&!j.hasOwnProperty(x.route.id)&&(!C||C[x.route.id]===void 0);if(x.route.lazy||T){v=!0,p>=0?f=f.slice(0,p+1):f=[f[0]];break}}}return f.reduceRight((g,x,j)=>{let C,T=!1,D=null,S=null;o&&(C=h&&x.route.id?h[x.route.id]:void 0,D=x.route.errorElement||b2,v&&(p<0&&j===0?(a1("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),T=!0,S=null):p===j&&(T=!0,S=x.route.hydrateFallbackElement||null)));let E=i.concat(f.slice(0,j+1)),R=()=>{let A;return C?A=D:T?A=S:x.route.Component?A=w.createElement(x.route.Component,null):x.route.element?A=x.route.element:A=g,w.createElement(S2,{match:x,routeContext:{outlet:g,matches:E,isDataRoute:o!=null},children:A})};return o&&(x.route.ErrorBoundary||x.route.errorElement||j===0)?w.createElement(j2,{location:o.location,revalidation:o.revalidation,component:D,error:C,children:R(),routeContext:{outlet:null,matches:E,isDataRoute:!0},unstable_onError:s}):R()},null)}function $f(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function E2(a){let i=w.useContext(fl);return Ve(i,$f(a)),i}function C2(a){let i=w.useContext(lc);return Ve(i,$f(a)),i}function $2(a){let i=w.useContext(ga);return Ve(i,$f(a)),i}function Tf(a){let i=$2(a),o=i.matches[i.matches.length-1];return Ve(o.route.id,`${a} can only be used on routes that contain a unique "id"`),o.route.id}function T2(){return Tf("useRouteId")}function A2(){let a=w.useContext(Cf),i=C2("useRouteError"),o=Tf("useRouteError");return a!==void 0?a:i.errors?.[o]}function R2(){let{router:a}=E2("useNavigate"),i=Tf("useNavigate"),o=w.useRef(!1);return e1(()=>{o.current=!0}),w.useCallback(async(d,f={})=>{ma(o.current,Wg),o.current&&(typeof d=="number"?a.navigate(d):await a.navigate(d,{fromRouteId:i,...f}))},[a,i])}var G0={};function a1(a,i,o){!i&&!G0[a]&&(G0[a]=!0,ma(!1,o))}w.memo(D2);function D2({routes:a,future:i,state:o,unstable_onError:s}){return t1(a,void 0,o,s,i)}function zi({to:a,replace:i,state:o,relative:s}){Ve(hl(),"<Navigate> may be used only in the context of a <Router> component.");let{static:d}=w.useContext(pa);ma(!d,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:f}=w.useContext(ga),{pathname:h}=an(),v=Na(),p=Ef(a,wf(f),h,s==="path"),g=JSON.stringify(p);return w.useEffect(()=>{v(JSON.parse(g),{replace:i,state:o,relative:s})},[v,g,s,i,o]),null}function Je(a){Ve(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function z2({basename:a="/",children:i=null,location:o,navigationType:s="POP",navigator:d,static:f=!1}){Ve(!hl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=a.replace(/^\/*/,"/"),v=w.useMemo(()=>({basename:h,navigator:d,static:f,future:{}}),[h,d,f]);typeof o=="string"&&(o=dl(o));let{pathname:p="/",search:g="",hash:x="",state:j=null,key:C="default"}=o,T=w.useMemo(()=>{let D=tn(p,h);return D==null?null:{location:{pathname:D,search:g,hash:x,state:j,key:C},navigationType:s}},[h,p,g,x,j,C,s]);return ma(T!=null,`<Router basename="${h}"> is not able to match the URL "${p}${g}${x}" because it does not start with the basename, so the <Router> won't render anything.`),T==null?null:w.createElement(pa.Provider,{value:v},w.createElement(ki.Provider,{children:i,value:T}))}function N2({children:a,location:i}){return v2(sf(a),i)}function sf(a,i=[]){let o=[];return w.Children.forEach(a,(s,d)=>{if(!w.isValidElement(s))return;let f=[...i,d];if(s.type===w.Fragment){o.push.apply(o,sf(s.props.children,f));return}Ve(s.type===Je,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ve(!s.props.index||!s.props.children,"An index route cannot have child routes.");let h={id:s.props.id||f.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(h.children=sf(s.props.children,f)),o.push(h)}),o}var _o="get",Bo="application/x-www-form-urlencoded";function ic(a){return a!=null&&typeof a.tagName=="string"}function M2(a){return ic(a)&&a.tagName.toLowerCase()==="button"}function O2(a){return ic(a)&&a.tagName.toLowerCase()==="form"}function k2(a){return ic(a)&&a.tagName.toLowerCase()==="input"}function L2(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function _2(a,i){return a.button===0&&(!i||i==="_self")&&!L2(a)}var Ws=null;function B2(){if(Ws===null)try{new FormData(document.createElement("form"),0),Ws=!1}catch{Ws=!0}return Ws}var H2=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Fd(a){return a!=null&&!H2.has(a)?(ma(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Bo}"`),null):a}function U2(a,i){let o,s,d,f,h;if(O2(a)){let v=a.getAttribute("action");s=v?tn(v,i):null,o=a.getAttribute("method")||_o,d=Fd(a.getAttribute("enctype"))||Bo,f=new FormData(a)}else if(M2(a)||k2(a)&&(a.type==="submit"||a.type==="image")){let v=a.form;if(v==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=a.getAttribute("formaction")||v.getAttribute("action");if(s=p?tn(p,i):null,o=a.getAttribute("formmethod")||v.getAttribute("method")||_o,d=Fd(a.getAttribute("formenctype"))||Fd(v.getAttribute("enctype"))||Bo,f=new FormData(v,a),!B2()){let{name:g,type:x,value:j}=a;if(x==="image"){let C=g?`${g}.`:"";f.append(`${C}x`,"0"),f.append(`${C}y`,"0")}else g&&f.append(g,j)}}else{if(ic(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=_o,s=null,d=Bo,h=a}return f&&d==="text/plain"&&(h=f,f=void 0),{action:s,method:o.toLowerCase(),encType:d,formData:f,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Af(a,i){if(a===!1||a===null||typeof a>"u")throw new Error(i)}function q2(a,i,o){let s=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return s.pathname==="/"?s.pathname=`_root.${o}`:i&&tn(s.pathname,i)==="/"?s.pathname=`${i.replace(/\/$/,"")}/_root.${o}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${o}`,s}async function F2(a,i){if(a.id in i)return i[a.id];try{let o=await import(a.module);return i[a.id]=o,o}catch(o){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Y2(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function G2(a,i,o){let s=await Promise.all(a.map(async d=>{let f=i.routes[d.route.id];if(f){let h=await F2(f,o);return h.links?h.links():[]}return[]}));return Z2(s.flat(1).filter(Y2).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function V0(a,i,o,s,d,f){let h=(p,g)=>o[g]?p.route.id!==o[g].route.id:!0,v=(p,g)=>o[g].pathname!==p.pathname||o[g].route.path?.endsWith("*")&&o[g].params["*"]!==p.params["*"];return f==="assets"?i.filter((p,g)=>h(p,g)||v(p,g)):f==="data"?i.filter((p,g)=>{let x=s.routes[p.route.id];if(!x||!x.hasLoader)return!1;if(h(p,g)||v(p,g))return!0;if(p.route.shouldRevalidate){let j=p.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:o[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof j=="boolean")return j}return!0}):[]}function V2(a,i,{includeHydrateFallback:o}={}){return X2(a.map(s=>{let d=i.routes[s.route.id];if(!d)return[];let f=[d.module];return d.clientActionModule&&(f=f.concat(d.clientActionModule)),d.clientLoaderModule&&(f=f.concat(d.clientLoaderModule)),o&&d.hydrateFallbackModule&&(f=f.concat(d.hydrateFallbackModule)),d.imports&&(f=f.concat(d.imports)),f}).flat(1))}function X2(a){return[...new Set(a)]}function Q2(a){let i={},o=Object.keys(a).sort();for(let s of o)i[s]=a[s];return i}function Z2(a,i){let o=new Set;return new Set(i),a.reduce((s,d)=>{let f=JSON.stringify(Q2(d));return o.has(f)||(o.add(f),s.push({key:f,link:d})),s},[])}function n1(){let a=w.useContext(fl);return Af(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function P2(){let a=w.useContext(lc);return Af(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var Rf=w.createContext(void 0);Rf.displayName="FrameworkContext";function r1(){let a=w.useContext(Rf);return Af(a,"You must render this element inside a <HydratedRouter> element"),a}function K2(a,i){let o=w.useContext(Rf),[s,d]=w.useState(!1),[f,h]=w.useState(!1),{onFocus:v,onBlur:p,onMouseEnter:g,onMouseLeave:x,onTouchStart:j}=i,C=w.useRef(null);w.useEffect(()=>{if(a==="render"&&h(!0),a==="viewport"){let S=R=>{R.forEach(A=>{h(A.isIntersecting)})},E=new IntersectionObserver(S,{threshold:.5});return C.current&&E.observe(C.current),()=>{E.disconnect()}}},[a]),w.useEffect(()=>{if(s){let S=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(S)}}},[s]);let T=()=>{d(!0)},D=()=>{d(!1),h(!1)};return o?a!=="intent"?[f,C,{}]:[f,C,{onFocus:gi(v,T),onBlur:gi(p,D),onMouseEnter:gi(g,T),onMouseLeave:gi(x,D),onTouchStart:gi(j,T)}]:[!1,C,{}]}function gi(a,i){return o=>{a&&a(o),o.defaultPrevented||i(o)}}function J2({page:a,...i}){let{router:o}=n1(),s=w.useMemo(()=>Zg(o.routes,a,o.basename),[o.routes,a,o.basename]);return s?w.createElement(W2,{page:a,matches:s,...i}):null}function I2(a){let{manifest:i,routeModules:o}=r1(),[s,d]=w.useState([]);return w.useEffect(()=>{let f=!1;return G2(a,i,o).then(h=>{f||d(h)}),()=>{f=!0}},[a,i,o]),s}function W2({page:a,matches:i,...o}){let s=an(),{manifest:d,routeModules:f}=r1(),{basename:h}=n1(),{loaderData:v,matches:p}=P2(),g=w.useMemo(()=>V0(a,i,p,d,s,"data"),[a,i,p,d,s]),x=w.useMemo(()=>V0(a,i,p,d,s,"assets"),[a,i,p,d,s]),j=w.useMemo(()=>{if(a===s.pathname+s.search+s.hash)return[];let D=new Set,S=!1;if(i.forEach(R=>{let A=d.routes[R.route.id];!A||!A.hasLoader||(!g.some(L=>L.route.id===R.route.id)&&R.route.id in v&&f[R.route.id]?.shouldRevalidate||A.hasClientLoader?S=!0:D.add(R.route.id))}),D.size===0)return[];let E=q2(a,h,"data");return S&&D.size>0&&E.searchParams.set("_routes",i.filter(R=>D.has(R.route.id)).map(R=>R.route.id).join(",")),[E.pathname+E.search]},[h,v,s,d,g,i,a,f]),C=w.useMemo(()=>V2(x,d),[x,d]),T=I2(x);return w.createElement(w.Fragment,null,j.map(D=>w.createElement("link",{key:D,rel:"prefetch",as:"fetch",href:D,...o})),C.map(D=>w.createElement("link",{key:D,rel:"modulepreload",href:D,...o})),T.map(({key:D,link:S})=>w.createElement("link",{key:D,nonce:o.nonce,...S})))}function eb(...a){return i=>{a.forEach(o=>{typeof o=="function"?o(i):o!=null&&(o.current=i)})}}var l1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{l1&&(window.__reactRouterVersion="7.9.4")}catch{}function tb({basename:a,children:i,window:o}){let s=w.useRef();s.current==null&&(s.current=Fy({window:o,v5Compat:!0}));let d=s.current,[f,h]=w.useState({action:d.action,location:d.location}),v=w.useCallback(p=>{w.startTransition(()=>h(p))},[h]);return w.useLayoutEffect(()=>d.listen(v),[d,v]),w.createElement(z2,{basename:a,children:i,location:f.location,navigationType:f.action,navigator:d})}var i1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ot=w.forwardRef(function({onClick:i,discover:o="render",prefetch:s="none",relative:d,reloadDocument:f,replace:h,state:v,target:p,to:g,preventScrollReset:x,viewTransition:j,...C},T){let{basename:D}=w.useContext(pa),S=typeof g=="string"&&i1.test(g),E,R=!1;if(typeof g=="string"&&S&&(E=g,l1))try{let J=new URL(window.location.href),ce=g.startsWith("//")?new URL(J.protocol+g):new URL(g),be=tn(ce.pathname,D);ce.origin===J.origin&&be!=null?g=be+ce.search+ce.hash:R=!0}catch{ma(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let A=p2(g,{relative:d}),[L,V,q]=K2(s,C),Y=lb(g,{replace:h,state:v,target:p,preventScrollReset:x,relative:d,viewTransition:j});function X(J){i&&i(J),J.defaultPrevented||Y(J)}let K=w.createElement("a",{...C,...q,href:E||A,onClick:R||f?i:X,ref:eb(T,V),target:p,"data-discover":!S&&o==="render"?"true":void 0});return L&&!S?w.createElement(w.Fragment,null,K,w.createElement(J2,{page:A})):K});Ot.displayName="Link";var ab=w.forwardRef(function({"aria-current":i="page",caseSensitive:o=!1,className:s="",end:d=!1,style:f,to:h,viewTransition:v,children:p,...g},x){let j=Li(h,{relative:g.relative}),C=an(),T=w.useContext(lc),{navigator:D,basename:S}=w.useContext(pa),E=T!=null&&ub(j)&&v===!0,R=D.encodeLocation?D.encodeLocation(j).pathname:j.pathname,A=C.pathname,L=T&&T.navigation&&T.navigation.location?T.navigation.location.pathname:null;o||(A=A.toLowerCase(),L=L?L.toLowerCase():null,R=R.toLowerCase()),L&&S&&(L=tn(L,S)||L);const V=R!=="/"&&R.endsWith("/")?R.length-1:R.length;let q=A===R||!d&&A.startsWith(R)&&A.charAt(V)==="/",Y=L!=null&&(L===R||!d&&L.startsWith(R)&&L.charAt(R.length)==="/"),X={isActive:q,isPending:Y,isTransitioning:E},K=q?i:void 0,J;typeof s=="function"?J=s(X):J=[s,q?"active":null,Y?"pending":null,E?"transitioning":null].filter(Boolean).join(" ");let ce=typeof f=="function"?f(X):f;return w.createElement(Ot,{...g,"aria-current":K,className:J,ref:x,style:ce,to:h,viewTransition:v},typeof p=="function"?p(X):p)});ab.displayName="NavLink";var nb=w.forwardRef(({discover:a="render",fetcherKey:i,navigate:o,reloadDocument:s,replace:d,state:f,method:h=_o,action:v,onSubmit:p,relative:g,preventScrollReset:x,viewTransition:j,...C},T)=>{let D=ob(),S=cb(v,{relative:g}),E=h.toLowerCase()==="get"?"get":"post",R=typeof v=="string"&&i1.test(v),A=L=>{if(p&&p(L),L.defaultPrevented)return;L.preventDefault();let V=L.nativeEvent.submitter,q=V?.getAttribute("formmethod")||h;D(V||L.currentTarget,{fetcherKey:i,method:q,navigate:o,replace:d,state:f,relative:g,preventScrollReset:x,viewTransition:j})};return w.createElement("form",{ref:T,method:E,action:S,onSubmit:s?p:A,...C,"data-discover":!R&&a==="render"?"true":void 0})});nb.displayName="Form";function rb(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function s1(a){let i=w.useContext(fl);return Ve(i,rb(a)),i}function lb(a,{target:i,replace:o,state:s,preventScrollReset:d,relative:f,viewTransition:h}={}){let v=Na(),p=an(),g=Li(a,{relative:f});return w.useCallback(x=>{if(_2(x,i)){x.preventDefault();let j=o!==void 0?o:Di(p)===Di(g);v(a,{replace:j,state:s,preventScrollReset:d,relative:f,viewTransition:h})}},[p,v,g,o,s,i,a,d,f,h])}var ib=0,sb=()=>`__${String(++ib)}__`;function ob(){let{router:a}=s1("useSubmit"),{basename:i}=w.useContext(pa),o=T2();return w.useCallback(async(s,d={})=>{let{action:f,method:h,encType:v,formData:p,body:g}=U2(s,i);if(d.navigate===!1){let x=d.fetcherKey||sb();await a.fetch(x,o,d.action||f,{preventScrollReset:d.preventScrollReset,formData:p,body:g,formMethod:d.method||h,formEncType:d.encType||v,flushSync:d.flushSync})}else await a.navigate(d.action||f,{preventScrollReset:d.preventScrollReset,formData:p,body:g,formMethod:d.method||h,formEncType:d.encType||v,replace:d.replace,state:d.state,fromRouteId:o,flushSync:d.flushSync,viewTransition:d.viewTransition})},[a,i,o])}function cb(a,{relative:i}={}){let{basename:o}=w.useContext(pa),s=w.useContext(ga);Ve(s,"useFormAction must be used inside a RouteContext");let[d]=s.matches.slice(-1),f={...Li(a||".",{relative:i})},h=an();if(a==null){f.search=h.search;let v=new URLSearchParams(f.search),p=v.getAll("index");if(p.some(x=>x==="")){v.delete("index"),p.filter(j=>j).forEach(j=>v.append("index",j));let x=v.toString();f.search=x?`?${x}`:""}}return(!a||a===".")&&d.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(f.pathname=f.pathname==="/"?o:en([o,f.pathname])),Di(f)}function ub(a,{relative:i}={}){let o=w.useContext(Ig);Ve(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=s1("useViewTransitionState"),d=Li(a,{relative:i});if(!o.isTransitioning)return!1;let f=tn(o.currentLocation.pathname,s)||o.currentLocation.pathname,h=tn(o.nextLocation.pathname,s)||o.nextLocation.pathname;return Zo(d.pathname,h)!=null||Zo(d.pathname,f)!=null}const Ho={name:"light",colors:{primary:"#FF8A3D",background:"#FFFFFF",darkBackground:"#0A0A0A",surface:"#FFFFFF",surfaceHover:"#FFF4ED",border:"#E5E5E5",textPrimary:"#1A1A1A",textSecondary:"#333333",textTertiary:"#6B7280",textInverse:"#FFFFFF",success:"#22E2A0",warning:"#FFB347",danger:"#FF6B6B",shadowSm:"0 6px 18px rgba(10,10,10,0.06)",shadowMd:"0 10px 24px rgba(10,10,10,0.08)",shadowLg:"0 18px 40px rgba(10,10,10,0.10)"},spacing:{xs:"8px",sm:"12px",md:"16px",lg:"20px",xl:"24px",xxl:"32px"},borderRadius:{sm:"6px",md:"8px",lg:"12px",xl:"16px",full:"9999px"},transitions:{fast:"150ms ease-in-out",normal:"300ms ease-in-out",slow:"500ms ease-in-out"}},db={name:"dark",colors:{primary:"#FF8A3D",background:"#0A0A0A",darkBackground:"#0A0A0A",surface:"#0F0F0F",surfaceHover:"#171717",border:"#1F1F1F",textPrimary:"#FFFFFF",textSecondary:"#D1D5DB",textTertiary:"#9CA3AF",textInverse:"#0A0A0A",success:"#22E2A0",warning:"#FFB347",danger:"#FF6B6B",shadowSm:"0 6px 18px rgba(0,0,0,0.16)",shadowMd:"0 10px 24px rgba(0,0,0,0.20)",shadowLg:"0 18px 40px rgba(0,0,0,0.24)"},spacing:Ho.spacing,borderRadius:Ho.borderRadius,transitions:Ho.transitions},o1=w.createContext(),fe=()=>{const a=w.useContext(o1);if(!a)throw new Error("useTheme must be used within ThemeProvider");return a},fb=({children:a})=>{const[i,o]=w.useState(()=>localStorage.getItem("theme")==="dark"),s=i?db:Ho;w.useEffect(()=>{localStorage.setItem("theme",i?"dark":"light"),document.documentElement.setAttribute("data-theme",i?"dark":"light")},[i]);const d=()=>{o(f=>!f)};return r.jsx(o1.Provider,{value:{theme:s,isDark:i,toggleTheme:d},children:a})};var wt=function(){return wt=Object.assign||function(i){for(var o,s=1,d=arguments.length;s<d;s++){o=arguments[s];for(var f in o)Object.prototype.hasOwnProperty.call(o,f)&&(i[f]=o[f])}return i},wt.apply(this,arguments)};function Po(a,i,o){if(o||arguments.length===2)for(var s=0,d=i.length,f;s<d;s++)(f||!(s in i))&&(f||(f=Array.prototype.slice.call(i,0,s)),f[s]=i[s]);return a.concat(f||Array.prototype.slice.call(i))}var Ye="-ms-",Ri="-moz-",Me="-webkit-",c1="comm",sc="rule",Df="decl",hb="@import",u1="@keyframes",mb="@layer",d1=Math.abs,zf=String.fromCharCode,of=Object.assign;function pb(a,i){return dt(a,0)^45?(((i<<2^dt(a,0))<<2^dt(a,1))<<2^dt(a,2))<<2^dt(a,3):0}function f1(a){return a.trim()}function Ja(a,i){return(a=i.exec(a))?a[0]:a}function ye(a,i,o){return a.replace(i,o)}function Uo(a,i,o){return a.indexOf(i,o)}function dt(a,i){return a.charCodeAt(i)|0}function sl(a,i,o){return a.slice(i,o)}function Da(a){return a.length}function h1(a){return a.length}function Ai(a,i){return i.push(a),a}function gb(a,i){return a.map(i).join("")}function X0(a,i){return a.filter(function(o){return!Ja(o,i)})}var oc=1,ol=1,m1=0,ia=0,et=0,ml="";function cc(a,i,o,s,d,f,h,v){return{value:a,root:i,parent:o,type:s,props:d,children:f,line:oc,column:ol,length:h,return:"",siblings:v}}function Ln(a,i){return of(cc("",null,null,"",null,null,0,a.siblings),a,{length:-a.length},i)}function Jr(a){for(;a.root;)a=Ln(a.root,{children:[a]});Ai(a,a.siblings)}function xb(){return et}function vb(){return et=ia>0?dt(ml,--ia):0,ol--,et===10&&(ol=1,oc--),et}function ha(){return et=ia<m1?dt(ml,ia++):0,ol++,et===10&&(ol=1,oc++),et}function lr(){return dt(ml,ia)}function qo(){return ia}function uc(a,i){return sl(ml,a,i)}function cf(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function yb(a){return oc=ol=1,m1=Da(ml=a),ia=0,[]}function bb(a){return ml="",a}function Yd(a){return f1(uc(ia-1,uf(a===91?a+2:a===40?a+1:a)))}function jb(a){for(;(et=lr())&&et<33;)ha();return cf(a)>2||cf(et)>3?"":" "}function Sb(a,i){for(;--i&&ha()&&!(et<48||et>102||et>57&&et<65||et>70&&et<97););return uc(a,qo()+(i<6&&lr()==32&&ha()==32))}function uf(a){for(;ha();)switch(et){case a:return ia;case 34:case 39:a!==34&&a!==39&&uf(et);break;case 40:a===41&&uf(a);break;case 92:ha();break}return ia}function wb(a,i){for(;ha()&&a+et!==57;)if(a+et===84&&lr()===47)break;return"/*"+uc(i,ia-1)+"*"+zf(a===47?a:ha())}function Eb(a){for(;!cf(lr());)ha();return uc(a,ia)}function Cb(a){return bb(Fo("",null,null,null,[""],a=yb(a),0,[0],a))}function Fo(a,i,o,s,d,f,h,v,p){for(var g=0,x=0,j=h,C=0,T=0,D=0,S=1,E=1,R=1,A=0,L="",V=d,q=f,Y=s,X=L;E;)switch(D=A,A=ha()){case 40:if(D!=108&&dt(X,j-1)==58){Uo(X+=ye(Yd(A),"&","&\f"),"&\f",d1(g?v[g-1]:0))!=-1&&(R=-1);break}case 34:case 39:case 91:X+=Yd(A);break;case 9:case 10:case 13:case 32:X+=jb(D);break;case 92:X+=Sb(qo()-1,7);continue;case 47:switch(lr()){case 42:case 47:Ai($b(wb(ha(),qo()),i,o,p),p);break;default:X+="/"}break;case 123*S:v[g++]=Da(X)*R;case 125*S:case 59:case 0:switch(A){case 0:case 125:E=0;case 59+x:R==-1&&(X=ye(X,/\f/g,"")),T>0&&Da(X)-j&&Ai(T>32?Z0(X+";",s,o,j-1,p):Z0(ye(X," ","")+";",s,o,j-2,p),p);break;case 59:X+=";";default:if(Ai(Y=Q0(X,i,o,g,x,d,v,L,V=[],q=[],j,f),f),A===123)if(x===0)Fo(X,i,Y,Y,V,f,j,v,q);else switch(C===99&&dt(X,3)===110?100:C){case 100:case 108:case 109:case 115:Fo(a,Y,Y,s&&Ai(Q0(a,Y,Y,0,0,d,v,L,d,V=[],j,q),q),d,q,j,v,s?V:q);break;default:Fo(X,Y,Y,Y,[""],q,0,v,q)}}g=x=T=0,S=R=1,L=X="",j=h;break;case 58:j=1+Da(X),T=D;default:if(S<1){if(A==123)--S;else if(A==125&&S++==0&&vb()==125)continue}switch(X+=zf(A),A*S){case 38:R=x>0?1:(X+="\f",-1);break;case 44:v[g++]=(Da(X)-1)*R,R=1;break;case 64:lr()===45&&(X+=Yd(ha())),C=lr(),x=j=Da(L=X+=Eb(qo())),A++;break;case 45:D===45&&Da(X)==2&&(S=0)}}return f}function Q0(a,i,o,s,d,f,h,v,p,g,x,j){for(var C=d-1,T=d===0?f:[""],D=h1(T),S=0,E=0,R=0;S<s;++S)for(var A=0,L=sl(a,C+1,C=d1(E=h[S])),V=a;A<D;++A)(V=f1(E>0?T[A]+" "+L:ye(L,/&\f/g,T[A])))&&(p[R++]=V);return cc(a,i,o,d===0?sc:v,p,g,x,j)}function $b(a,i,o,s){return cc(a,i,o,c1,zf(xb()),sl(a,2,-2),0,s)}function Z0(a,i,o,s,d){return cc(a,i,o,Df,sl(a,0,s),sl(a,s+1,-1),s,d)}function p1(a,i,o){switch(pb(a,i)){case 5103:return Me+"print-"+a+a;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Me+a+a;case 4789:return Ri+a+a;case 5349:case 4246:case 4810:case 6968:case 2756:return Me+a+Ri+a+Ye+a+a;case 5936:switch(dt(a,i+11)){case 114:return Me+a+Ye+ye(a,/[svh]\w+-[tblr]{2}/,"tb")+a;case 108:return Me+a+Ye+ye(a,/[svh]\w+-[tblr]{2}/,"tb-rl")+a;case 45:return Me+a+Ye+ye(a,/[svh]\w+-[tblr]{2}/,"lr")+a}case 6828:case 4268:case 2903:return Me+a+Ye+a+a;case 6165:return Me+a+Ye+"flex-"+a+a;case 5187:return Me+a+ye(a,/(\w+).+(:[^]+)/,Me+"box-$1$2"+Ye+"flex-$1$2")+a;case 5443:return Me+a+Ye+"flex-item-"+ye(a,/flex-|-self/g,"")+(Ja(a,/flex-|baseline/)?"":Ye+"grid-row-"+ye(a,/flex-|-self/g,""))+a;case 4675:return Me+a+Ye+"flex-line-pack"+ye(a,/align-content|flex-|-self/g,"")+a;case 5548:return Me+a+Ye+ye(a,"shrink","negative")+a;case 5292:return Me+a+Ye+ye(a,"basis","preferred-size")+a;case 6060:return Me+"box-"+ye(a,"-grow","")+Me+a+Ye+ye(a,"grow","positive")+a;case 4554:return Me+ye(a,/([^-])(transform)/g,"$1"+Me+"$2")+a;case 6187:return ye(ye(ye(a,/(zoom-|grab)/,Me+"$1"),/(image-set)/,Me+"$1"),a,"")+a;case 5495:case 3959:return ye(a,/(image-set\([^]*)/,Me+"$1$`$1");case 4968:return ye(ye(a,/(.+:)(flex-)?(.*)/,Me+"box-pack:$3"+Ye+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Me+a+a;case 4200:if(!Ja(a,/flex-|baseline/))return Ye+"grid-column-align"+sl(a,i)+a;break;case 2592:case 3360:return Ye+ye(a,"template-","")+a;case 4384:case 3616:return o&&o.some(function(s,d){return i=d,Ja(s.props,/grid-\w+-end/)})?~Uo(a+(o=o[i].value),"span",0)?a:Ye+ye(a,"-start","")+a+Ye+"grid-row-span:"+(~Uo(o,"span",0)?Ja(o,/\d+/):+Ja(o,/\d+/)-+Ja(a,/\d+/))+";":Ye+ye(a,"-start","")+a;case 4896:case 4128:return o&&o.some(function(s){return Ja(s.props,/grid-\w+-start/)})?a:Ye+ye(ye(a,"-end","-span"),"span ","")+a;case 4095:case 3583:case 4068:case 2532:return ye(a,/(.+)-inline(.+)/,Me+"$1$2")+a;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Da(a)-1-i>6)switch(dt(a,i+1)){case 109:if(dt(a,i+4)!==45)break;case 102:return ye(a,/(.+:)(.+)-([^]+)/,"$1"+Me+"$2-$3$1"+Ri+(dt(a,i+3)==108?"$3":"$2-$3"))+a;case 115:return~Uo(a,"stretch",0)?p1(ye(a,"stretch","fill-available"),i,o)+a:a}break;case 5152:case 5920:return ye(a,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,d,f,h,v,p,g){return Ye+d+":"+f+g+(h?Ye+d+"-span:"+(v?p:+p-+f)+g:"")+a});case 4949:if(dt(a,i+6)===121)return ye(a,":",":"+Me)+a;break;case 6444:switch(dt(a,dt(a,14)===45?18:11)){case 120:return ye(a,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Me+(dt(a,14)===45?"inline-":"")+"box$3$1"+Me+"$2$3$1"+Ye+"$2box$3")+a;case 100:return ye(a,":",":"+Ye)+a}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ye(a,"scroll-","scroll-snap-")+a}return a}function Ko(a,i){for(var o="",s=0;s<a.length;s++)o+=i(a[s],s,a,i)||"";return o}function Tb(a,i,o,s){switch(a.type){case mb:if(a.children.length)break;case hb:case Df:return a.return=a.return||a.value;case c1:return"";case u1:return a.return=a.value+"{"+Ko(a.children,s)+"}";case sc:if(!Da(a.value=a.props.join(",")))return""}return Da(o=Ko(a.children,s))?a.return=a.value+"{"+o+"}":""}function Ab(a){var i=h1(a);return function(o,s,d,f){for(var h="",v=0;v<i;v++)h+=a[v](o,s,d,f)||"";return h}}function Rb(a){return function(i){i.root||(i=i.return)&&a(i)}}function Db(a,i,o,s){if(a.length>-1&&!a.return)switch(a.type){case Df:a.return=p1(a.value,a.length,o);return;case u1:return Ko([Ln(a,{value:ye(a.value,"@","@"+Me)})],s);case sc:if(a.length)return gb(o=a.props,function(d){switch(Ja(d,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Jr(Ln(a,{props:[ye(d,/:(read-\w+)/,":"+Ri+"$1")]})),Jr(Ln(a,{props:[d]})),of(a,{props:X0(o,s)});break;case"::placeholder":Jr(Ln(a,{props:[ye(d,/:(plac\w+)/,":"+Me+"input-$1")]})),Jr(Ln(a,{props:[ye(d,/:(plac\w+)/,":"+Ri+"$1")]})),Jr(Ln(a,{props:[ye(d,/:(plac\w+)/,Ye+"input-$1")]})),Jr(Ln(a,{props:[d]})),of(a,{props:X0(o,s)});break}return""})}}var zb={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Zt={},cl=typeof process<"u"&&Zt!==void 0&&(Zt.REACT_APP_SC_ATTR||Zt.SC_ATTR)||"data-styled",g1="active",x1="data-styled-version",dc="6.1.19",Nf=`/*!sc*/
`,Jo=typeof window<"u"&&typeof document<"u",Nb=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Zt!==void 0&&Zt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Zt.REACT_APP_SC_DISABLE_SPEEDY!==""?Zt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Zt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Zt!==void 0&&Zt.SC_DISABLE_SPEEDY!==void 0&&Zt.SC_DISABLE_SPEEDY!==""&&Zt.SC_DISABLE_SPEEDY!=="false"&&Zt.SC_DISABLE_SPEEDY),fc=Object.freeze([]),ul=Object.freeze({});function Mb(a,i,o){return o===void 0&&(o=ul),a.theme!==o.theme&&a.theme||i||o.theme}var v1=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Ob=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,kb=/(^-|-$)/g;function P0(a){return a.replace(Ob,"-").replace(kb,"")}var Lb=/(a)(d)/gi,eo=52,K0=function(a){return String.fromCharCode(a+(a>25?39:97))};function df(a){var i,o="";for(i=Math.abs(a);i>eo;i=i/eo|0)o=K0(i%eo)+o;return(K0(i%eo)+o).replace(Lb,"$1-$2")}var Gd,y1=5381,il=function(a,i){for(var o=i.length;o;)a=33*a^i.charCodeAt(--o);return a},b1=function(a){return il(y1,a)};function _b(a){return df(b1(a)>>>0)}function Bb(a){return a.displayName||a.name||"Component"}function Vd(a){return typeof a=="string"&&!0}var j1=typeof Symbol=="function"&&Symbol.for,S1=j1?Symbol.for("react.memo"):60115,Hb=j1?Symbol.for("react.forward_ref"):60112,Ub={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},qb={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},w1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Fb=((Gd={})[Hb]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Gd[S1]=w1,Gd);function J0(a){return("type"in(i=a)&&i.type.$$typeof)===S1?w1:"$$typeof"in a?Fb[a.$$typeof]:Ub;var i}var Yb=Object.defineProperty,Gb=Object.getOwnPropertyNames,I0=Object.getOwnPropertySymbols,Vb=Object.getOwnPropertyDescriptor,Xb=Object.getPrototypeOf,W0=Object.prototype;function E1(a,i,o){if(typeof i!="string"){if(W0){var s=Xb(i);s&&s!==W0&&E1(a,s,o)}var d=Gb(i);I0&&(d=d.concat(I0(i)));for(var f=J0(a),h=J0(i),v=0;v<d.length;++v){var p=d[v];if(!(p in qb||o&&o[p]||h&&p in h||f&&p in f)){var g=Vb(i,p);try{Yb(a,p,g)}catch{}}}}return a}function or(a){return typeof a=="function"}function Mf(a){return typeof a=="object"&&"styledComponentId"in a}function nr(a,i){return a&&i?"".concat(a," ").concat(i):a||i||""}function eg(a,i){if(a.length===0)return"";for(var o=a[0],s=1;s<a.length;s++)o+=a[s];return o}function Ni(a){return a!==null&&typeof a=="object"&&a.constructor.name===Object.name&&!("props"in a&&a.$$typeof)}function ff(a,i,o){if(o===void 0&&(o=!1),!o&&!Ni(a)&&!Array.isArray(a))return i;if(Array.isArray(i))for(var s=0;s<i.length;s++)a[s]=ff(a[s],i[s]);else if(Ni(i))for(var s in i)a[s]=ff(a[s],i[s]);return a}function Of(a,i){Object.defineProperty(a,"toString",{value:i})}function cr(a){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(a," for more information.").concat(i.length>0?" Args: ".concat(i.join(", ")):""))}var Qb=function(){function a(i){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=i}return a.prototype.indexOfGroup=function(i){for(var o=0,s=0;s<i;s++)o+=this.groupSizes[s];return o},a.prototype.insertRules=function(i,o){if(i>=this.groupSizes.length){for(var s=this.groupSizes,d=s.length,f=d;i>=f;)if((f<<=1)<0)throw cr(16,"".concat(i));this.groupSizes=new Uint32Array(f),this.groupSizes.set(s),this.length=f;for(var h=d;h<f;h++)this.groupSizes[h]=0}for(var v=this.indexOfGroup(i+1),p=(h=0,o.length);h<p;h++)this.tag.insertRule(v,o[h])&&(this.groupSizes[i]++,v++)},a.prototype.clearGroup=function(i){if(i<this.length){var o=this.groupSizes[i],s=this.indexOfGroup(i),d=s+o;this.groupSizes[i]=0;for(var f=s;f<d;f++)this.tag.deleteRule(s)}},a.prototype.getGroup=function(i){var o="";if(i>=this.length||this.groupSizes[i]===0)return o;for(var s=this.groupSizes[i],d=this.indexOfGroup(i),f=d+s,h=d;h<f;h++)o+="".concat(this.tag.getRule(h)).concat(Nf);return o},a}(),Yo=new Map,Io=new Map,Go=1,to=function(a){if(Yo.has(a))return Yo.get(a);for(;Io.has(Go);)Go++;var i=Go++;return Yo.set(a,i),Io.set(i,a),i},Zb=function(a,i){Go=i+1,Yo.set(a,i),Io.set(i,a)},Pb="style[".concat(cl,"][").concat(x1,'="').concat(dc,'"]'),Kb=new RegExp("^".concat(cl,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Jb=function(a,i,o){for(var s,d=o.split(","),f=0,h=d.length;f<h;f++)(s=d[f])&&a.registerName(i,s)},Ib=function(a,i){for(var o,s=((o=i.textContent)!==null&&o!==void 0?o:"").split(Nf),d=[],f=0,h=s.length;f<h;f++){var v=s[f].trim();if(v){var p=v.match(Kb);if(p){var g=0|parseInt(p[1],10),x=p[2];g!==0&&(Zb(x,g),Jb(a,x,p[3]),a.getTag().insertRules(g,d)),d.length=0}else d.push(v)}}},tg=function(a){for(var i=document.querySelectorAll(Pb),o=0,s=i.length;o<s;o++){var d=i[o];d&&d.getAttribute(cl)!==g1&&(Ib(a,d),d.parentNode&&d.parentNode.removeChild(d))}};function Wb(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var C1=function(a){var i=document.head,o=a||i,s=document.createElement("style"),d=function(v){var p=Array.from(v.querySelectorAll("style[".concat(cl,"]")));return p[p.length-1]}(o),f=d!==void 0?d.nextSibling:null;s.setAttribute(cl,g1),s.setAttribute(x1,dc);var h=Wb();return h&&s.setAttribute("nonce",h),o.insertBefore(s,f),s},e4=function(){function a(i){this.element=C1(i),this.element.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var s=document.styleSheets,d=0,f=s.length;d<f;d++){var h=s[d];if(h.ownerNode===o)return h}throw cr(17)}(this.element),this.length=0}return a.prototype.insertRule=function(i,o){try{return this.sheet.insertRule(o,i),this.length++,!0}catch{return!1}},a.prototype.deleteRule=function(i){this.sheet.deleteRule(i),this.length--},a.prototype.getRule=function(i){var o=this.sheet.cssRules[i];return o&&o.cssText?o.cssText:""},a}(),t4=function(){function a(i){this.element=C1(i),this.nodes=this.element.childNodes,this.length=0}return a.prototype.insertRule=function(i,o){if(i<=this.length&&i>=0){var s=document.createTextNode(o);return this.element.insertBefore(s,this.nodes[i]||null),this.length++,!0}return!1},a.prototype.deleteRule=function(i){this.element.removeChild(this.nodes[i]),this.length--},a.prototype.getRule=function(i){return i<this.length?this.nodes[i].textContent:""},a}(),a4=function(){function a(i){this.rules=[],this.length=0}return a.prototype.insertRule=function(i,o){return i<=this.length&&(this.rules.splice(i,0,o),this.length++,!0)},a.prototype.deleteRule=function(i){this.rules.splice(i,1),this.length--},a.prototype.getRule=function(i){return i<this.length?this.rules[i]:""},a}(),ag=Jo,n4={isServer:!Jo,useCSSOMInjection:!Nb},$1=function(){function a(i,o,s){i===void 0&&(i=ul),o===void 0&&(o={});var d=this;this.options=wt(wt({},n4),i),this.gs=o,this.names=new Map(s),this.server=!!i.isServer,!this.server&&Jo&&ag&&(ag=!1,tg(this)),Of(this,function(){return function(f){for(var h=f.getTag(),v=h.length,p="",g=function(j){var C=function(R){return Io.get(R)}(j);if(C===void 0)return"continue";var T=f.names.get(C),D=h.getGroup(j);if(T===void 0||!T.size||D.length===0)return"continue";var S="".concat(cl,".g").concat(j,'[id="').concat(C,'"]'),E="";T!==void 0&&T.forEach(function(R){R.length>0&&(E+="".concat(R,","))}),p+="".concat(D).concat(S,'{content:"').concat(E,'"}').concat(Nf)},x=0;x<v;x++)g(x);return p}(d)})}return a.registerId=function(i){return to(i)},a.prototype.rehydrate=function(){!this.server&&Jo&&tg(this)},a.prototype.reconstructWithOptions=function(i,o){return o===void 0&&(o=!0),new a(wt(wt({},this.options),i),this.gs,o&&this.names||void 0)},a.prototype.allocateGSInstance=function(i){return this.gs[i]=(this.gs[i]||0)+1},a.prototype.getTag=function(){return this.tag||(this.tag=(i=function(o){var s=o.useCSSOMInjection,d=o.target;return o.isServer?new a4(d):s?new e4(d):new t4(d)}(this.options),new Qb(i)));var i},a.prototype.hasNameForId=function(i,o){return this.names.has(i)&&this.names.get(i).has(o)},a.prototype.registerName=function(i,o){if(to(i),this.names.has(i))this.names.get(i).add(o);else{var s=new Set;s.add(o),this.names.set(i,s)}},a.prototype.insertRules=function(i,o,s){this.registerName(i,o),this.getTag().insertRules(to(i),s)},a.prototype.clearNames=function(i){this.names.has(i)&&this.names.get(i).clear()},a.prototype.clearRules=function(i){this.getTag().clearGroup(to(i)),this.clearNames(i)},a.prototype.clearTag=function(){this.tag=void 0},a}(),r4=/&/g,l4=/^\s*\/\/.*$/gm;function T1(a,i){return a.map(function(o){return o.type==="rule"&&(o.value="".concat(i," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(i," ")),o.props=o.props.map(function(s){return"".concat(i," ").concat(s)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=T1(o.children,i)),o})}function i4(a){var i,o,s,d=ul,f=d.options,h=f===void 0?ul:f,v=d.plugins,p=v===void 0?fc:v,g=function(C,T,D){return D.startsWith(o)&&D.endsWith(o)&&D.replaceAll(o,"").length>0?".".concat(i):C},x=p.slice();x.push(function(C){C.type===sc&&C.value.includes("&")&&(C.props[0]=C.props[0].replace(r4,o).replace(s,g))}),h.prefix&&x.push(Db),x.push(Tb);var j=function(C,T,D,S){T===void 0&&(T=""),D===void 0&&(D=""),S===void 0&&(S="&"),i=S,o=T,s=new RegExp("\\".concat(o,"\\b"),"g");var E=C.replace(l4,""),R=Cb(D||T?"".concat(D," ").concat(T," { ").concat(E," }"):E);h.namespace&&(R=T1(R,h.namespace));var A=[];return Ko(R,Ab(x.concat(Rb(function(L){return A.push(L)})))),A};return j.hash=p.length?p.reduce(function(C,T){return T.name||cr(15),il(C,T.name)},y1).toString():"",j}var s4=new $1,hf=i4(),A1=At.createContext({shouldForwardProp:void 0,styleSheet:s4,stylis:hf});A1.Consumer;At.createContext(void 0);function ng(){return w.useContext(A1)}var o4=function(){function a(i,o){var s=this;this.inject=function(d,f){f===void 0&&(f=hf);var h=s.name+f.hash;d.hasNameForId(s.id,h)||d.insertRules(s.id,h,f(s.rules,h,"@keyframes"))},this.name=i,this.id="sc-keyframes-".concat(i),this.rules=o,Of(this,function(){throw cr(12,String(s.name))})}return a.prototype.getName=function(i){return i===void 0&&(i=hf),this.name+i.hash},a}(),c4=function(a){return a>="A"&&a<="Z"};function rg(a){for(var i="",o=0;o<a.length;o++){var s=a[o];if(o===1&&s==="-"&&a[0]==="-")return a;c4(s)?i+="-"+s.toLowerCase():i+=s}return i.startsWith("ms-")?"-"+i:i}var R1=function(a){return a==null||a===!1||a===""},D1=function(a){var i,o,s=[];for(var d in a){var f=a[d];a.hasOwnProperty(d)&&!R1(f)&&(Array.isArray(f)&&f.isCss||or(f)?s.push("".concat(rg(d),":"),f,";"):Ni(f)?s.push.apply(s,Po(Po(["".concat(d," {")],D1(f),!1),["}"],!1)):s.push("".concat(rg(d),": ").concat((i=d,(o=f)==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||i in zb||i.startsWith("--")?String(o).trim():"".concat(o,"px")),";")))}return s};function ir(a,i,o,s){if(R1(a))return[];if(Mf(a))return[".".concat(a.styledComponentId)];if(or(a)){if(!or(f=a)||f.prototype&&f.prototype.isReactComponent||!i)return[a];var d=a(i);return ir(d,i,o,s)}var f;return a instanceof o4?o?(a.inject(o,s),[a.getName(s)]):[a]:Ni(a)?D1(a):Array.isArray(a)?Array.prototype.concat.apply(fc,a.map(function(h){return ir(h,i,o,s)})):[a.toString()]}function u4(a){for(var i=0;i<a.length;i+=1){var o=a[i];if(or(o)&&!Mf(o))return!1}return!0}var d4=b1(dc),f4=function(){function a(i,o,s){this.rules=i,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&u4(i),this.componentId=o,this.baseHash=il(d4,o),this.baseStyle=s,$1.registerId(o)}return a.prototype.generateAndInjectStyles=function(i,o,s){var d=this.baseStyle?this.baseStyle.generateAndInjectStyles(i,o,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))d=nr(d,this.staticRulesId);else{var f=eg(ir(this.rules,i,o,s)),h=df(il(this.baseHash,f)>>>0);if(!o.hasNameForId(this.componentId,h)){var v=s(f,".".concat(h),void 0,this.componentId);o.insertRules(this.componentId,h,v)}d=nr(d,h),this.staticRulesId=h}else{for(var p=il(this.baseHash,s.hash),g="",x=0;x<this.rules.length;x++){var j=this.rules[x];if(typeof j=="string")g+=j;else if(j){var C=eg(ir(j,i,o,s));p=il(p,C+x),g+=C}}if(g){var T=df(p>>>0);o.hasNameForId(this.componentId,T)||o.insertRules(this.componentId,T,s(g,".".concat(T),void 0,this.componentId)),d=nr(d,T)}}return d},a}(),Wo=At.createContext(void 0);Wo.Consumer;function h4(a){var i=At.useContext(Wo),o=w.useMemo(function(){return function(s,d){if(!s)throw cr(14);if(or(s)){var f=s(d);return f}if(Array.isArray(s)||typeof s!="object")throw cr(8);return d?wt(wt({},d),s):s}(a.theme,i)},[a.theme,i]);return a.children?At.createElement(Wo.Provider,{value:o},a.children):null}var Xd={};function m4(a,i,o){var s=Mf(a),d=a,f=!Vd(a),h=i.attrs,v=h===void 0?fc:h,p=i.componentId,g=p===void 0?function(V,q){var Y=typeof V!="string"?"sc":P0(V);Xd[Y]=(Xd[Y]||0)+1;var X="".concat(Y,"-").concat(_b(dc+Y+Xd[Y]));return q?"".concat(q,"-").concat(X):X}(i.displayName,i.parentComponentId):p,x=i.displayName,j=x===void 0?function(V){return Vd(V)?"styled.".concat(V):"Styled(".concat(Bb(V),")")}(a):x,C=i.displayName&&i.componentId?"".concat(P0(i.displayName),"-").concat(i.componentId):i.componentId||g,T=s&&d.attrs?d.attrs.concat(v).filter(Boolean):v,D=i.shouldForwardProp;if(s&&d.shouldForwardProp){var S=d.shouldForwardProp;if(i.shouldForwardProp){var E=i.shouldForwardProp;D=function(V,q){return S(V,q)&&E(V,q)}}else D=S}var R=new f4(o,C,s?d.componentStyle:void 0);function A(V,q){return function(Y,X,K){var J=Y.attrs,ce=Y.componentStyle,be=Y.defaultProps,Te=Y.foldedComponentIds,Q=Y.styledComponentId,Z=Y.target,ue=At.useContext(Wo),M=ng(),te=Y.shouldForwardProp||M.shouldForwardProp,re=Mb(X,ue,be)||ul,je=function(Ee,he,it){for(var Ne,gt=wt(wt({},he),{className:void 0,theme:it}),_n=0;_n<Ee.length;_n+=1){var Ma=or(Ne=Ee[_n])?Ne(gt):Ne;for(var Kt in Ma)gt[Kt]=Kt==="className"?nr(gt[Kt],Ma[Kt]):Kt==="style"?wt(wt({},gt[Kt]),Ma[Kt]):Ma[Kt]}return he.className&&(gt.className=nr(gt.className,he.className)),gt}(J,X,re),z=je.as||Z,W={};for(var ae in je)je[ae]===void 0||ae[0]==="$"||ae==="as"||ae==="theme"&&je.theme===re||(ae==="forwardedAs"?W.as=je.forwardedAs:te&&!te(ae,z)||(W[ae]=je[ae]));var ne=function(Ee,he){var it=ng(),Ne=Ee.generateAndInjectStyles(he,it.styleSheet,it.stylis);return Ne}(ce,je),oe=nr(Te,Q);return ne&&(oe+=" "+ne),je.className&&(oe+=" "+je.className),W[Vd(z)&&!v1.has(z)?"class":"className"]=oe,K&&(W.ref=K),w.createElement(z,W)}(L,V,q)}A.displayName=j;var L=At.forwardRef(A);return L.attrs=T,L.componentStyle=R,L.displayName=j,L.shouldForwardProp=D,L.foldedComponentIds=s?nr(d.foldedComponentIds,d.styledComponentId):"",L.styledComponentId=C,L.target=s?d.target:a,Object.defineProperty(L,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(V){this._foldedDefaultProps=s?function(q){for(var Y=[],X=1;X<arguments.length;X++)Y[X-1]=arguments[X];for(var K=0,J=Y;K<J.length;K++)ff(q,J[K],!0);return q}({},d.defaultProps,V):V}}),Of(L,function(){return".".concat(L.styledComponentId)}),f&&E1(L,a,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),L}function lg(a,i){for(var o=[a[0]],s=0,d=i.length;s<d;s+=1)o.push(i[s],a[s+1]);return o}var ig=function(a){return Object.assign(a,{isCss:!0})};function p4(a){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];if(or(a)||Ni(a))return ig(ir(lg(fc,Po([a],i,!0))));var s=a;return i.length===0&&s.length===1&&typeof s[0]=="string"?ir(s):ig(ir(lg(s,i)))}function mf(a,i,o){if(o===void 0&&(o=ul),!i)throw cr(1,i);var s=function(d){for(var f=[],h=1;h<arguments.length;h++)f[h-1]=arguments[h];return a(i,o,p4.apply(void 0,Po([d],f,!1)))};return s.attrs=function(d){return mf(a,i,wt(wt({},o),{attrs:Array.prototype.concat(o.attrs,d).filter(Boolean)}))},s.withConfig=function(d){return mf(a,i,wt(wt({},o),d))},s}var z1=function(a){return mf(m4,a)},y=z1;v1.forEach(function(a){y[a]=z1(a)});const Tt={orange:"#FF8A3D",white:"#FFFFFF",black:"#0A0A0A",softWhiteText:"#FFFFFFA8",borderGray:"#E5E5E5"},g4=y.aside`
  width: 260px;
  background: ${Tt.black};
  border-right: 1px solid ${Tt.borderGray};
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  overflow-y: auto;
  transition: all 0.25s ease;
  color: ${Tt.softWhiteText};
`,x4=y.div`
  padding: ${a=>a.theme.spacing.xl};
  font-size: 1.5rem;
  font-weight: 700;
  color: ${a=>a.theme.colors.onDark||"#FFFFFF"};
  border-bottom: 1px solid ${a=>a.theme.colors.border||"rgba(255,255,255,0.03)"};
`,v4=y.nav`
  padding: ${a=>a.theme.spacing.md};
`,y4=y(Ot)`
  display: flex;
  align-items: center;
  gap: ${a=>a.theme.spacing.md};
  padding: 14px; /* 14–16px padding as requested */
  margin-bottom: ${a=>a.theme.spacing.xs};
  border-radius: 8px; /* rounded corners */
  text-decoration: none;
  color: ${a=>a.$active?Tt.white:Tt.softWhiteText};
  font-weight: 500;
  transition: background 0.25s ease, color 0.25s ease, border-left 0.25s ease;
  position: relative;

  /* default icon color via child span */
  & > span {
    color: ${a=>a.$active?Tt.orange:Tt.softWhiteText};
    transition: color 0.25s ease;
  }

  background: ${a=>a.$active?"rgba(255,138,61,0.20)":"transparent"};
  border-left: ${a=>a.$active?`4px solid ${Tt.orange}`:"4px solid transparent"};

  &:hover {
    background: rgba(255,138,61,0.15);
    color: ${Tt.white};
    & > span { color: ${Tt.orange}; }
  }
`,b4=y.span`
  font-size: 1.25rem;
`,j4=y.button`
  display: flex;
  align-items: center;
  gap: ${a=>a.theme.spacing.md};
  padding: 12px 14px;
  margin: ${a=>a.theme.spacing.md};
  border-radius: 8px;
  border: 1px solid ${Tt.orange};
  background: transparent;
  color: ${Tt.orange};
  font-weight: 600;
  cursor: pointer;
  width: calc(100% - 2rem);
  transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;

  &:hover {
    background: ${Tt.orange};
    color: ${Tt.white};
    border-color: ${Tt.orange};
  }
`,S4=()=>{const{theme:a}=fe(),i=an(),o=Na(),s=[{path:"/dashboard",label:"Dashboard"},{path:"/trucks",label:"Trucks"},{path:"/drivers",label:"Drivers"},{path:"/trips",label:"Trips"},{path:"/fuel",label:"Fuel Management"},{path:"/maintenance",label:"Maintenance"},{path:"/salaries",label:"Salaries"},{path:"/expenses",label:"Expenses"}],d=()=>{localStorage.removeItem("token"),localStorage.removeItem("userRole"),o("/login")};return r.jsxs(g4,{theme:a,children:[r.jsx(x4,{theme:a,children:"TMS"}),r.jsx(v4,{theme:a,children:s.map(f=>r.jsxs(y4,{to:f.path,theme:a,$active:i.pathname===f.path,children:[r.jsx(b4,{children:f.icon}),f.label]},f.path))}),r.jsx(j4,{theme:a,onClick:d,children:"Logout"})]})};function w4({toggleSidebar:a}){const i=()=>{localStorage.removeItem("token"),window.location.href="/login"};return r.jsxs("header",{className:"header",children:[r.jsxs("div",{className:"header-left",children:[r.jsx("button",{onClick:a,className:"menu-toggle","aria-label":"Toggle sidebar",children:"☰"}),r.jsx("img",{src:"/logo-dark2.jpg",alt:"Rajhans Logo",className:"header-logo"}),r.jsx("span",{className:"header-title",children:"Rajhans Transport"})]}),r.jsx("button",{onClick:i,className:"logout-btn",children:"Logout"})]})}function E4(){return r.jsx("footer",{className:"footer",children:r.jsxs("p",{children:["© ",new Date().getFullYear()," Rajhans Transport. All rights reserved."]})})}function Ea({children:a}){const[i,o]=w.useState(!1),s=()=>o(!i);return r.jsxs("div",{className:"layout-container",children:[r.jsx(w4,{toggleSidebar:s}),r.jsxs("div",{className:"layout-main",children:[r.jsx("div",{className:`sidebar ${i?"open":""}`,children:r.jsx(S4,{})}),r.jsx("div",{className:"layout-content",onClick:()=>i&&o(!1),children:a})]}),r.jsx(E4,{})]})}function xi({children:a}){const i=Na(),o=()=>{localStorage.removeItem("token"),localStorage.removeItem("userRole"),localStorage.removeItem("user"),i("/driver-login")};return r.jsxs("div",{className:"driver-root",children:[r.jsxs("aside",{className:"driver-sidebar",children:[r.jsxs("div",{className:"driver-logo-area",children:[r.jsx("img",{src:"/logo-dark1.jpg",alt:"Logo",className:"driver-logo"}),r.jsx("span",{className:"driver-brand",children:"Rajhans Transport"})]}),r.jsx("nav",{children:r.jsxs("ul",{children:[r.jsx("li",{children:r.jsxs(Ot,{to:"/driver-dashboard",children:[r.jsx("i",{className:"fas fa-tachometer-alt"}),r.jsx("span",{children:"Dashboard"})]})}),r.jsx("li",{children:r.jsxs(Ot,{to:"/my-trips",children:[r.jsx("i",{className:"fas fa-road"}),r.jsx("span",{children:"Trips"})]})}),r.jsx("li",{children:r.jsxs(Ot,{to:"/driver-fuel-logs",children:[r.jsx("i",{className:"fas fa-gas-pump"}),r.jsx("span",{children:"Fuel Logs"})]})}),r.jsx("li",{children:r.jsxs(Ot,{to:"/driver-maintenance",children:[r.jsx("i",{className:"fas fa-tools"}),r.jsx("span",{children:"Maintenance"})]})})]})})]}),r.jsxs("div",{className:"driver-main-content",children:[r.jsxs("header",{className:"driver-header",children:[r.jsx("span",{children:"Driver Dashboard"}),r.jsx("button",{className:"logout-btn",onClick:o,children:"Logout"})]}),r.jsx("main",{className:"driver-content",children:a}),r.jsxs("footer",{className:"driver-footer",children:["© ",new Date().getFullYear()," Rajhans Transport"]})]})]})}const C4=y.button`
  padding: ${a=>{switch(a.$size){case"sm":return"0.5rem 1rem";case"lg":return"0.875rem 2rem";default:return"0.75rem 1.5rem"}}};
  font-size: ${a=>{switch(a.$size){case"sm":return"0.875rem";case"lg":return"1rem";default:return"0.9375rem"}}};
  font-weight: 500;
  border-radius: ${a=>a.theme.borderRadius.md};
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all ${a=>a.theme.transitions.fast};
  font-family: inherit;
  white-space: nowrap;
  position: relative;
  overflow: hidden;

  /* Variant styles */
  ${a=>{const{theme:i}=a;switch(a.$variant){case"primary":return`
          background: ${i.colors.primary};
          color: ${i.colors.textInverse};
          box-shadow: ${i.colors.shadowSm};
          border: 1px solid ${i.colors.primary};
          &:hover:not(:disabled) {
            filter: brightness(0.98);
            transform: translateY(-1px);
            box-shadow: ${i.colors.shadowMd};
          }
          &:active:not(:disabled) {
            transform: translateY(0);
          }
        `;case"secondary":return`
          background: ${i.colors.surface};
          color: ${i.colors.textPrimary};
          border: 1px solid ${i.colors.border};
          &:hover:not(:disabled) {
            background: ${i.colors.surfaceHover};
          }
        `;case"success":return`
          background: ${i.colors.success};
          color: ${i.colors.textInverse};
          &:hover:not(:disabled) { transform: translateY(-1px); }
        `;case"danger":return`
          background: ${i.colors.danger};
          color: ${i.colors.textInverse};
          &:hover:not(:disabled) { transform: translateY(-1px); }
        `;case"outline":return`
          background: transparent;
          color: ${i.colors.primary};
          border: 2px solid ${i.colors.primary};
          &:hover:not(:disabled) {
            background: ${i.colors.surfaceHover};
          }
        `;case"ghost":return`
          background: transparent;
          color: ${i.colors.textPrimary};
          &:hover:not(:disabled) {
            background: ${i.colors.surfaceHover};
          }
        `;default:return`
          background: ${i.colors.surface};
          color: ${i.colors.textPrimary};
          border: 1px solid ${i.colors.border};
          &:hover:not(:disabled) {
            background: ${i.colors.surfaceHover};
          }
        `}}}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Full width */
  ${a=>a.$fullWidth&&`
    width: 100%;
  `}

  /* Loading state */
  ${a=>a.$loading&&`
    pointer-events: none;
    opacity: 0.7;
  `}
`,$4=y.div`
  width: 1rem;
  height: 1rem;
  border: 2px solid currentColor;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`,ge=({children:a,variant:i="default",size:o="md",fullWidth:s=!1,loading:d=!1,icon:f,onClick:h,type:v="button",disabled:p=!1,className:g="",...x})=>{const{theme:j}=fe();return r.jsxs(C4,{theme:j,$variant:i,$size:o,$fullWidth:s,$loading:d,onClick:h,type:v,disabled:p||d,className:g,...x,children:[d&&r.jsx($4,{}),!d&&f&&f,a]})},T4=y.div`
  background: ${a=>a.theme.colors.surface};
  border-radius: ${a=>a.theme.borderRadius.xl};
  border: 1px solid ${a=>a.theme.colors.border};
  box-shadow: ${a=>a.theme.colors.shadowSm};
  overflow: hidden;
  transition: all ${a=>a.theme.transitions.normal};
  animation: fadeIn 0.3s ease-in-out;

  ${a=>a.$hoverable&&`
    cursor: pointer;
    &:hover {
      transform: translateY(-4px);
      box-shadow: ${a.theme.colors.shadowLg};
      border-color: ${a.theme.colors.primary};
    }
  `}

  ${a=>a.$padding&&`
    padding: ${a.theme.spacing[a.$padding]||a.theme.spacing.lg};
  `}

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,A4=y.div`
  padding: ${a=>a.theme.spacing.lg};
  border-bottom: 1px solid ${a=>a.theme.colors.border};

  ${a=>a.$noBorder&&`
    border-bottom: none;
  `}
`,R4=y.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${a=>a.theme.colors.textPrimary};
  margin: 0;
`,D4=y.p`
  font-size: 0.875rem;
  color: ${a=>a.theme.colors.textSecondary};
  margin: 0.5rem 0 0 0;
`,z4=y.div`
  padding: ${a=>a.theme.spacing.lg};
`,N4=y.div`
  padding: ${a=>a.theme.spacing.lg};
  border-top: 1px solid ${a=>a.theme.colors.border};
  background: ${a=>a.theme.colors.background};

  ${a=>a.$noBorder&&`
    border-top: none;
    background: transparent;
  `}
`,tt=({children:a,hoverable:i=!1,padding:o,className:s="",onClick:d})=>{const{theme:f}=fe();return r.jsx(T4,{theme:f,$hoverable:i,$padding:o,className:s,onClick:d,children:a})};tt.Header=({children:a,noBorder:i=!1})=>{const{theme:o}=fe();return r.jsx(A4,{theme:o,$noBorder:i,children:a})};tt.Title=({children:a})=>{const{theme:i}=fe();return r.jsx(R4,{theme:i,children:a})};tt.Description=({children:a})=>{const{theme:i}=fe();return r.jsx(D4,{theme:i,children:a})};tt.Body=({children:a})=>{const{theme:i}=fe();return r.jsx(z4,{theme:i,children:a})};tt.Footer=({children:a,noBorder:i=!1})=>{const{theme:o}=fe();return r.jsx(N4,{theme:o,$noBorder:i,children:a})};const M4=y.div`
  display: flex;
  flex-direction: column;
  gap: ${a=>a.theme.spacing.sm};
  width: 100%;
`,O4=y.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${a=>a.theme.colors.textPrimary};

  ${a=>a.$required&&`
    &::after {
      content: ' *';
      color: ${a.theme.colors.danger};
    }
  `}
`,k4=y.div`
  position: relative;
  display: flex;
  align-items: center;
`,L4=y.input`
  width: 100%;
  padding: ${a=>a.$leftIcon&&a.$rightIcon?"0.75rem 2.5rem":a.$leftIcon?"0.75rem 0.75rem 0.75rem 2.5rem":a.$rightIcon?"0.75rem 2.5rem 0.75rem 0.75rem":"0.75rem"};
  font-size: 0.9375rem;
  font-family: inherit;
  border: 1px solid
    ${a=>a.$error?a.theme.colors.danger:a.theme.colors.border};
  border-radius: ${a=>a.theme.borderRadius.md};
  background: ${a=>a.theme.colors.surface};
  color: ${a=>a.theme.colors.textPrimary};
  transition: all ${a=>a.theme.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${a=>a.$error?a.theme.colors.danger:a.theme.colors.primary};
    box-shadow: 0 0 0 3px
      ${a=>a.$error?a.theme.colors.dangerLight:a.theme.colors.primaryLight};
  }

  &:disabled {
    background: ${a=>a.theme.colors.background};
    cursor: not-allowed;
    opacity: 0.6;
  }

  &::placeholder {
    color: ${a=>a.theme.colors.textTertiary};
  }
`,_4=y.textarea`
  width: 100%;
  padding: 0.75rem;
  font-size: 0.9375rem;
  font-family: inherit;
  border: 1px solid
    ${a=>a.$error?a.theme.colors.danger:a.theme.colors.border};
  border-radius: ${a=>a.theme.borderRadius.md};
  background: ${a=>a.theme.colors.surface};
  color: ${a=>a.theme.colors.textPrimary};
  transition: all ${a=>a.theme.transitions.fast};
  resize: vertical;
  min-height: 100px;

  &:focus {
    outline: none;
    border-color: ${a=>a.$error?a.theme.colors.danger:a.theme.colors.primary};
    box-shadow: 0 0 0 3px
      ${a=>a.$error?a.theme.colors.dangerLight:a.theme.colors.primaryLight};
  }

  &:disabled {
    background: ${a=>a.theme.colors.background};
    cursor: not-allowed;
    opacity: 0.6;
  }

  &::placeholder {
    color: ${a=>a.theme.colors.textTertiary};
  }
`,sg=y.div`
  position: absolute;
  ${a=>a.$position==="left"?"left: 0.75rem":"right: 0.75rem"};
  display: flex;
  align-items: center;
  color: ${a=>a.theme.colors.textTertiary};
  pointer-events: ${a=>a.$clickable?"auto":"none"};
  cursor: ${a=>a.$clickable?"pointer":"default"};

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`,B4=y.span`
  font-size: 0.875rem;
  color: ${a=>a.theme.colors.danger};
  display: flex;
  align-items: center;
  gap: 0.25rem;
`,H4=y.span`
  font-size: 0.875rem;
  color: ${a=>a.theme.colors.textSecondary};
`,ie=w.forwardRef(({label:a,error:i,helperText:o,leftIcon:s,rightIcon:d,onRightIconClick:f,required:h=!1,type:v="text",className:p="",as:g="input",...x},j)=>{const{theme:C}=fe(),T=g==="textarea"?_4:L4;return r.jsxs(M4,{theme:C,className:p,children:[a&&r.jsx(O4,{theme:C,$required:h,children:a}),r.jsxs(k4,{children:[s&&r.jsx(sg,{theme:C,$position:"left",children:s}),r.jsx(T,{ref:j,theme:C,$error:i,$leftIcon:s,$rightIcon:d,type:v,...x}),d&&r.jsx(sg,{theme:C,$position:"right",$clickable:!!f,onClick:f,children:d})]}),i&&r.jsxs(B4,{theme:C,children:[r.jsx("svg",{viewBox:"0 0 20 20",fill:"currentColor",width:"16",height:"16",children:r.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),i]}),!i&&o&&r.jsx(H4,{theme:C,children:o})]})});ie.displayName="Input";const U4=y.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
  animation: fadeIn 0.2s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`,q4=y.div`
  background: ${a=>a.theme.colors.surface};
  border-radius: ${a=>a.theme.borderRadius.lg};
  box-shadow: ${a=>a.theme.colors.shadowXl};
  max-width: ${a=>{switch(a.$size){case"sm":return"400px";case"lg":return"800px";case"xl":return"1200px";default:return"600px"}}};
  width: 100%;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  animation: scaleIn 0.2s ease-out;

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.95) translateY(20px);
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }
`,F4=y.div`
  padding: 1.5rem;
  border-bottom: 1px solid ${a=>a.theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`,Y4=y.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${a=>a.theme.colors.textPrimary};
  margin: 0;
`,G4=y.button`
  width: 2rem;
  height: 2rem;
  border-radius: ${a=>a.theme.borderRadius.md};
  border: none;
  background: transparent;
  color: ${a=>a.theme.colors.textSecondary};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ${a=>a.theme.transitions.fast};

  &:hover {
    background: ${a=>a.theme.colors.surfaceHover};
    color: ${a=>a.theme.colors.textPrimary};
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`,V4=y.div`
  padding: 1.5rem;
  overflow-y: auto;
  flex: 1;
`,X4=y.div`
  padding: 1.5rem;
  border-top: 1px solid ${a=>a.theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.75rem;
  background: ${a=>a.theme.colors.background};
`,sa=({isOpen:a,onClose:i,title:o,children:s,footer:d,size:f="md",closeOnOverlayClick:h=!0})=>{const{theme:v}=fe();return w.useEffect(()=>(a?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[a]),w.useEffect(()=>{const p=g=>{g.key==="Escape"&&a&&i()};return document.addEventListener("keydown",p),()=>document.removeEventListener("keydown",p)},[a,i]),a?r.jsx(U4,{onClick:h?i:void 0,children:r.jsxs(q4,{theme:v,$size:f,onClick:p=>p.stopPropagation(),children:[o&&r.jsxs(F4,{theme:v,children:[r.jsx(Y4,{theme:v,children:o}),r.jsx(G4,{theme:v,onClick:i,children:r.jsx("svg",{viewBox:"0 0 20 20",fill:"currentColor",children:r.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})})]}),r.jsx(V4,{theme:v,children:s}),d&&r.jsx(X4,{theme:v,children:d})]})}):null},Q4=y.span`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: ${a=>{switch(a.$size){case"sm":return"0.125rem 0.5rem";case"lg":return"0.5rem 1rem";default:return"0.25rem 0.75rem"}}};
  font-size: ${a=>{switch(a.$size){case"sm":return"0.75rem";case"lg":return"1rem";default:return"0.875rem"}}};
  font-weight: 500;
  border-radius: ${a=>a.theme.borderRadius.full};
  white-space: nowrap;
  transition: all ${a=>a.theme.transitions.fast};

  ${a=>{const{theme:i}=a;switch(a.$variant){case"success":return`
          background: ${i.colors.successLight};
          color: ${i.colors.success};
        `;case"warning":return`
          background: ${i.colors.warningLight};
          color: ${i.colors.warning};
        `;case"danger":return`
          background: ${i.colors.dangerLight};
          color: ${i.colors.danger};
        `;case"info":return`
          background: ${i.colors.infoLight};
          color: ${i.colors.info};
        `;case"primary":return`
          background: ${i.colors.primaryLight};
          color: ${i.colors.primary};
        `;case"secondary":return`
          background: ${i.colors.secondaryLight};
          color: ${i.colors.secondary};
        `;default:return`
          background: ${i.colors.background};
          color: ${i.colors.textSecondary};
          border: 1px solid ${i.colors.border};
        `}}}

  ${a=>a.$dot&&`
    &::before {
      content: '';
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      background: currentColor;
    }
  `}
`,Pt=({children:a,variant:i="default",size:o="md",dot:s=!1,className:d=""})=>{const{theme:f}=fe();return r.jsx(Q4,{theme:f,$variant:i,$size:o,$dot:s,className:d,children:a})},Z4=y.div`
  width: 100%;
  overflow-x: auto;
  border-radius: ${a=>a.theme.borderRadius.lg};
  border: 1px solid ${a=>a.theme.colors.border};
  background: ${a=>a.theme.colors.surface};
`,P4=y.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9375rem;
`,K4=y.thead`
  background: ${a=>a.theme.colors.background};
  border-bottom: 2px solid ${a=>a.theme.colors.border};
`,J4=y.tbody`
  tr {
    border-bottom: 1px solid ${a=>a.theme.colors.border};
    transition: background ${a=>a.theme.transitions.fast};

    &:hover {
      background: ${a=>a.theme.colors.surfaceHover};
    }

    &:last-child {
      border-bottom: none;
    }
  }
`,I4=y.tr``,W4=y.th`
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  color: ${a=>a.theme.colors.textPrimary};
  white-space: nowrap;

  ${a=>a.$align==="center"&&"text-align: center;"}
  ${a=>a.$align==="right"&&"text-align: right;"}
`,ej=y.td`
  padding: 1rem;
  color: ${a=>a.theme.colors.textSecondary};

  ${a=>a.$align==="center"&&"text-align: center;"}
  ${a=>a.$align==="right"&&"text-align: right;"}
`,tj=y.div`
  padding: 3rem 1rem;
  text-align: center;
  color: ${a=>a.theme.colors.textTertiary};
  font-size: 0.9375rem;
`,aj=y.div`
  padding: 3rem 1rem;
  text-align: center;
  color: ${a=>a.theme.colors.textTertiary};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`,nj=y.div`
  width: 2rem;
  height: 2rem;
  border: 3px solid ${a=>a.theme.colors.border};
  border-top-color: ${a=>a.theme.colors.primary};
  border-radius: 50%;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`,U=({children:a,className:i=""})=>{const{theme:o}=fe();return r.jsx(Z4,{theme:o,className:i,children:r.jsx(P4,{children:a})})};U.Head=({children:a})=>{const{theme:i}=fe();return r.jsx(K4,{theme:i,children:a})};U.Body=({children:a,loading:i,empty:o,emptyMessage:s="No data available"})=>{const{theme:d}=fe();return i?r.jsx("tbody",{children:r.jsx("tr",{children:r.jsx("td",{colSpan:"100%",children:r.jsxs(aj,{theme:d,children:[r.jsx(nj,{theme:d}),r.jsx("span",{children:"Loading..."})]})})})}):o?r.jsx("tbody",{children:r.jsx("tr",{children:r.jsx("td",{colSpan:"100%",children:r.jsx(tj,{theme:d,children:s})})})}):r.jsx(J4,{theme:d,children:a})};U.Row=({children:a,onClick:i})=>r.jsx(I4,{onClick:i,children:a});U.Header=({children:a,align:i="left"})=>{const{theme:o}=fe();return r.jsx(W4,{theme:o,$align:i,children:a})};U.Cell=({children:a,align:i="left"})=>{const{theme:o}=fe();return r.jsx(ej,{theme:o,$align:i,children:a})};const rj=y.div`
  display: flex;
  flex-direction: column;
  gap: ${a=>a.theme.spacing.sm};
  width: 100%;
`,lj=y.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${a=>a.theme.colors.textPrimary};

  ${a=>a.$required&&`
    &::after {
      content: ' *';
      color: ${a.theme.colors.danger};
    }
  `}
`,ij=y.div`
  position: relative;
`,sj=y.select`
  width: 100%;
  padding: 0.75rem 2.5rem 0.75rem 0.75rem;
  font-size: 0.9375rem;
  font-family: inherit;
  border: 1px solid
    ${a=>a.$error?a.theme.colors.danger:a.theme.colors.border};
  border-radius: ${a=>a.theme.borderRadius.md};
  background: ${a=>a.theme.colors.surface};
  color: ${a=>a.theme.colors.textPrimary};
  transition: all ${a=>a.theme.transitions.fast};
  cursor: pointer;
  appearance: none;

  &:focus {
    outline: none;
    border-color: ${a=>a.$error?a.theme.colors.danger:a.theme.colors.primary};
    box-shadow: 0 0 0 3px
      ${a=>a.$error?a.theme.colors.dangerLight:a.theme.colors.primaryLight};
  }

  &:disabled {
    background: ${a=>a.theme.colors.background};
    cursor: not-allowed;
    opacity: 0.6;
  }
`,oj=y.div`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: ${a=>a.theme.colors.textTertiary};

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`,cj=y.span`
  font-size: 0.875rem;
  color: ${a=>a.theme.colors.danger};
  display: flex;
  align-items: center;
  gap: 0.25rem;
`,uj=y.span`
  font-size: 0.875rem;
  color: ${a=>a.theme.colors.textSecondary};
`,Re=w.forwardRef(({label:a,error:i,helperText:o,required:s=!1,options:d=[],placeholder:f="Select an option",className:h="",...v},p)=>{const{theme:g}=fe();return r.jsxs(rj,{theme:g,className:h,children:[a&&r.jsx(lj,{theme:g,$required:s,children:a}),r.jsxs(ij,{children:[r.jsxs(sj,{ref:p,theme:g,$error:i,...v,children:[r.jsx("option",{value:"",children:f}),d.map(x=>r.jsx("option",{value:x.value,disabled:x.disabled,children:x.label},x.value))]}),r.jsx(oj,{theme:g,children:r.jsx("svg",{viewBox:"0 0 20 20",fill:"currentColor",children:r.jsx("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})})]}),i&&r.jsxs(cj,{theme:g,children:[r.jsx("svg",{viewBox:"0 0 20 20",fill:"currentColor",width:"16",height:"16",children:r.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),i]}),!i&&o&&r.jsx(uj,{theme:g,children:o})]})});Re.displayName="Select";const dj=y.div`
  padding: 1rem 1.25rem;
  border-radius: ${a=>a.theme.borderRadius.md};
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  animation: slideInRight 0.3s ease-out;

  ${a=>{const{theme:i}=a;switch(a.$variant){case"success":return`
          background: ${i.colors.successLight};
          border: 1px solid ${i.colors.success};
          color: ${i.colors.success};
        `;case"warning":return`
          background: ${i.colors.warningLight};
          border: 1px solid ${i.colors.warning};
          color: ${i.colors.warning};
        `;case"danger":return`
          background: ${i.colors.dangerLight};
          border: 1px solid ${i.colors.danger};
          color: ${i.colors.danger};
        `;case"info":return`
          background: ${i.colors.infoLight};
          border: 1px solid ${i.colors.info};
          color: ${i.colors.info};
        `;default:return`
          background: ${i.colors.background};
          border: 1px solid ${i.colors.border};
          color: ${i.colors.textSecondary};
        `}}}

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`,fj=y.div`
  flex-shrink: 0;
  width: 1.5rem;
  height: 1.5rem;

  svg {
    width: 100%;
    height: 100%;
  }
`,hj=y.div`
  flex: 1;
`,mj=y.div`
  font-weight: 600;
  font-size: 0.9375rem;
  margin-bottom: 0.25rem;
`,pj=y.div`
  font-size: 0.875rem;
  opacity: 0.9;
`,gj=y.button`
  flex-shrink: 0;
  width: 1.5rem;
  height: 1.5rem;
  border: none;
  background: transparent;
  color: currentColor;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity ${a=>a.theme.transitions.fast};

  &:hover {
    opacity: 1;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`,og={success:r.jsx("svg",{viewBox:"0 0 20 20",fill:"currentColor",children:r.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})}),warning:r.jsx("svg",{viewBox:"0 0 20 20",fill:"currentColor",children:r.jsx("path",{fillRule:"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),danger:r.jsx("svg",{viewBox:"0 0 20 20",fill:"currentColor",children:r.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",clipRule:"evenodd"})}),info:r.jsx("svg",{viewBox:"0 0 20 20",fill:"currentColor",children:r.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"})})},He=({variant:a="info",title:i,children:o,onClose:s,className:d=""})=>{const{theme:f}=fe();return r.jsxs(dj,{theme:f,$variant:a,className:d,children:[r.jsx(fj,{children:og[a]||og.info}),r.jsxs(hj,{children:[i&&r.jsx(mj,{children:i}),r.jsx(pj,{children:o})]}),s&&r.jsx(gj,{theme:f,onClick:s,children:r.jsx("svg",{viewBox:"0 0 20 20",fill:"currentColor",children:r.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})})]})},xj=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: ${a=>a.$fullPage?"0":"3rem"};
  ${a=>a.$fullPage&&`
    position: fixed;
    inset: 0;
    background: ${a.theme.colors.background};
    z-index: 9999;
  `}
`,vj=y.div`
  ${a=>{const i=a.$size==="sm"?"2rem":a.$size==="lg"?"4rem":"3rem";return`width: ${i}; height: ${i};`}}
`,yj=y.div`
  width: 100%;
  height: 100%;
  border: 3px solid ${a=>a.theme.colors.border};
  border-top-color: ${a=>a.theme.colors.primary};
  border-radius: 50%;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`,bj=y.div`
  display: flex;
  gap: 0.5rem;
`,Qd=y.div`
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background: ${a=>a.theme.colors.primary};
  animation: bounce 1.4s ease-in-out infinite;
  animation-delay: ${a=>a.$delay}s;

  @keyframes bounce {
    0%,
    80%,
    100% {
      transform: scale(0);
      opacity: 0.5;
    }
    40% {
      transform: scale(1);
      opacity: 1;
    }
  }
`,jj=y.div`
  font-size: 0.9375rem;
  color: ${a=>a.theme.colors.textSecondary};
  font-weight: 500;
`,N1=({type:a="spinner",size:i="md",text:o="",fullPage:s=!1})=>{const{theme:d}=fe();return r.jsxs(xj,{theme:d,$fullPage:s,children:[a==="spinner"?r.jsx(vj,{$size:i,children:r.jsx(yj,{theme:d})}):r.jsxs(bj,{children:[r.jsx(Qd,{theme:d,$delay:0}),r.jsx(Qd,{theme:d,$delay:.2}),r.jsx(Qd,{theme:d,$delay:.4})]}),o&&r.jsx(jj,{theme:d,children:o})]})},Sj=y.div`
  position: relative;
  display: inline-block;
`,wj=y.div`
  position: absolute;
  z-index: 1000;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${a=>a.theme.colors.textInverse};
  background: ${a=>a.theme.colors.textPrimary};
  border-radius: ${a=>a.theme.borderRadius.md};
  white-space: nowrap;
  pointer-events: none;
  opacity: ${a=>a.$visible?1:0};
  visibility: ${a=>a.$visible?"visible":"hidden"};
  transition: opacity ${a=>a.theme.transitions.fast},
    visibility ${a=>a.theme.transitions.fast};
  box-shadow: ${a=>a.theme.colors.shadowMd};

  ${a=>{switch(a.$position){case"top":return`
          bottom: calc(100% + 0.5rem);
          left: 50%;
          transform: translateX(-50%);
          &::after {
            content: '';
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            border: 4px solid transparent;
            border-top-color: ${a.theme.colors.textPrimary};
          }
        `;case"bottom":return`
          top: calc(100% + 0.5rem);
          left: 50%;
          transform: translateX(-50%);
          &::after {
            content: '';
            position: absolute;
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%);
            border: 4px solid transparent;
            border-bottom-color: ${a.theme.colors.textPrimary};
          }
        `;case"left":return`
          right: calc(100% + 0.5rem);
          top: 50%;
          transform: translateY(-50%);
          &::after {
            content: '';
            position: absolute;
            left: 100%;
            top: 50%;
            transform: translateY(-50%);
            border: 4px solid transparent;
            border-left-color: ${a.theme.colors.textPrimary};
          }
        `;case"right":return`
          left: calc(100% + 0.5rem);
          top: 50%;
          transform: translateY(-50%);
          &::after {
            content: '';
            position: absolute;
            right: 100%;
            top: 50%;
            transform: translateY(-50%);
            border: 4px solid transparent;
            border-right-color: ${a.theme.colors.textPrimary};
          }
        `;default:return""}}}
`,Ej=({children:a,content:i,position:o="top",delay:s=0})=>{const{theme:d}=fe(),[f,h]=w.useState(!1),[v,p]=w.useState(null),g=()=>{const j=setTimeout(()=>{h(!0)},s);p(j)},x=()=>{v&&clearTimeout(v),h(!1)};return r.jsxs(Sj,{onMouseEnter:g,onMouseLeave:x,children:[a,r.jsx(wj,{theme:d,$visible:f,$position:o,children:i})]})};function M1(a,i){return function(){return a.apply(i,arguments)}}const{toString:Cj}=Object.prototype,{getPrototypeOf:kf}=Object,{iterator:hc,toStringTag:O1}=Symbol,mc=(a=>i=>{const o=Cj.call(i);return a[o]||(a[o]=o.slice(8,-1).toLowerCase())})(Object.create(null)),xa=a=>(a=a.toLowerCase(),i=>mc(i)===a),pc=a=>i=>typeof i===a,{isArray:pl}=Array,Mi=pc("undefined");function $j(a){return a!==null&&!Mi(a)&&a.constructor!==null&&!Mi(a.constructor)&&kt(a.constructor.isBuffer)&&a.constructor.isBuffer(a)}const k1=xa("ArrayBuffer");function Tj(a){let i;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?i=ArrayBuffer.isView(a):i=a&&a.buffer&&k1(a.buffer),i}const Aj=pc("string"),kt=pc("function"),L1=pc("number"),gc=a=>a!==null&&typeof a=="object",Rj=a=>a===!0||a===!1,Vo=a=>{if(mc(a)!=="object")return!1;const i=kf(a);return(i===null||i===Object.prototype||Object.getPrototypeOf(i)===null)&&!(O1 in a)&&!(hc in a)},Dj=xa("Date"),zj=xa("File"),Nj=xa("Blob"),Mj=xa("FileList"),Oj=a=>gc(a)&&kt(a.pipe),kj=a=>{let i;return a&&(typeof FormData=="function"&&a instanceof FormData||kt(a.append)&&((i=mc(a))==="formdata"||i==="object"&&kt(a.toString)&&a.toString()==="[object FormData]"))},Lj=xa("URLSearchParams"),[_j,Bj,Hj,Uj]=["ReadableStream","Request","Response","Headers"].map(xa),qj=a=>a.trim?a.trim():a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function _i(a,i,{allOwnKeys:o=!1}={}){if(a===null||typeof a>"u")return;let s,d;if(typeof a!="object"&&(a=[a]),pl(a))for(s=0,d=a.length;s<d;s++)i.call(null,a[s],s,a);else{const f=o?Object.getOwnPropertyNames(a):Object.keys(a),h=f.length;let v;for(s=0;s<h;s++)v=f[s],i.call(null,a[v],v,a)}}function _1(a,i){i=i.toLowerCase();const o=Object.keys(a);let s=o.length,d;for(;s-- >0;)if(d=o[s],i===d.toLowerCase())return d;return null}const rr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,B1=a=>!Mi(a)&&a!==rr;function pf(){const{caseless:a}=B1(this)&&this||{},i={},o=(s,d)=>{const f=a&&_1(i,d)||d;Vo(i[f])&&Vo(s)?i[f]=pf(i[f],s):Vo(s)?i[f]=pf({},s):pl(s)?i[f]=s.slice():i[f]=s};for(let s=0,d=arguments.length;s<d;s++)arguments[s]&&_i(arguments[s],o);return i}const Fj=(a,i,o,{allOwnKeys:s}={})=>(_i(i,(d,f)=>{o&&kt(d)?a[f]=M1(d,o):a[f]=d},{allOwnKeys:s}),a),Yj=a=>(a.charCodeAt(0)===65279&&(a=a.slice(1)),a),Gj=(a,i,o,s)=>{a.prototype=Object.create(i.prototype,s),a.prototype.constructor=a,Object.defineProperty(a,"super",{value:i.prototype}),o&&Object.assign(a.prototype,o)},Vj=(a,i,o,s)=>{let d,f,h;const v={};if(i=i||{},a==null)return i;do{for(d=Object.getOwnPropertyNames(a),f=d.length;f-- >0;)h=d[f],(!s||s(h,a,i))&&!v[h]&&(i[h]=a[h],v[h]=!0);a=o!==!1&&kf(a)}while(a&&(!o||o(a,i))&&a!==Object.prototype);return i},Xj=(a,i,o)=>{a=String(a),(o===void 0||o>a.length)&&(o=a.length),o-=i.length;const s=a.indexOf(i,o);return s!==-1&&s===o},Qj=a=>{if(!a)return null;if(pl(a))return a;let i=a.length;if(!L1(i))return null;const o=new Array(i);for(;i-- >0;)o[i]=a[i];return o},Zj=(a=>i=>a&&i instanceof a)(typeof Uint8Array<"u"&&kf(Uint8Array)),Pj=(a,i)=>{const s=(a&&a[hc]).call(a);let d;for(;(d=s.next())&&!d.done;){const f=d.value;i.call(a,f[0],f[1])}},Kj=(a,i)=>{let o;const s=[];for(;(o=a.exec(i))!==null;)s.push(o);return s},Jj=xa("HTMLFormElement"),Ij=a=>a.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(o,s,d){return s.toUpperCase()+d}),cg=(({hasOwnProperty:a})=>(i,o)=>a.call(i,o))(Object.prototype),Wj=xa("RegExp"),H1=(a,i)=>{const o=Object.getOwnPropertyDescriptors(a),s={};_i(o,(d,f)=>{let h;(h=i(d,f,a))!==!1&&(s[f]=h||d)}),Object.defineProperties(a,s)},eS=a=>{H1(a,(i,o)=>{if(kt(a)&&["arguments","caller","callee"].indexOf(o)!==-1)return!1;const s=a[o];if(kt(s)){if(i.enumerable=!1,"writable"in i){i.writable=!1;return}i.set||(i.set=()=>{throw Error("Can not rewrite read-only method '"+o+"'")})}})},tS=(a,i)=>{const o={},s=d=>{d.forEach(f=>{o[f]=!0})};return pl(a)?s(a):s(String(a).split(i)),o},aS=()=>{},nS=(a,i)=>a!=null&&Number.isFinite(a=+a)?a:i;function rS(a){return!!(a&&kt(a.append)&&a[O1]==="FormData"&&a[hc])}const lS=a=>{const i=new Array(10),o=(s,d)=>{if(gc(s)){if(i.indexOf(s)>=0)return;if(!("toJSON"in s)){i[d]=s;const f=pl(s)?[]:{};return _i(s,(h,v)=>{const p=o(h,d+1);!Mi(p)&&(f[v]=p)}),i[d]=void 0,f}}return s};return o(a,0)},iS=xa("AsyncFunction"),sS=a=>a&&(gc(a)||kt(a))&&kt(a.then)&&kt(a.catch),U1=((a,i)=>a?setImmediate:i?((o,s)=>(rr.addEventListener("message",({source:d,data:f})=>{d===rr&&f===o&&s.length&&s.shift()()},!1),d=>{s.push(d),rr.postMessage(o,"*")}))(`axios@${Math.random()}`,[]):o=>setTimeout(o))(typeof setImmediate=="function",kt(rr.postMessage)),oS=typeof queueMicrotask<"u"?queueMicrotask.bind(rr):typeof process<"u"&&process.nextTick||U1,cS=a=>a!=null&&kt(a[hc]),F={isArray:pl,isArrayBuffer:k1,isBuffer:$j,isFormData:kj,isArrayBufferView:Tj,isString:Aj,isNumber:L1,isBoolean:Rj,isObject:gc,isPlainObject:Vo,isReadableStream:_j,isRequest:Bj,isResponse:Hj,isHeaders:Uj,isUndefined:Mi,isDate:Dj,isFile:zj,isBlob:Nj,isRegExp:Wj,isFunction:kt,isStream:Oj,isURLSearchParams:Lj,isTypedArray:Zj,isFileList:Mj,forEach:_i,merge:pf,extend:Fj,trim:qj,stripBOM:Yj,inherits:Gj,toFlatObject:Vj,kindOf:mc,kindOfTest:xa,endsWith:Xj,toArray:Qj,forEachEntry:Pj,matchAll:Kj,isHTMLForm:Jj,hasOwnProperty:cg,hasOwnProp:cg,reduceDescriptors:H1,freezeMethods:eS,toObjectSet:tS,toCamelCase:Ij,noop:aS,toFiniteNumber:nS,findKey:_1,global:rr,isContextDefined:B1,isSpecCompliantForm:rS,toJSONObject:lS,isAsyncFn:iS,isThenable:sS,setImmediate:U1,asap:oS,isIterable:cS};function xe(a,i,o,s,d){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=a,this.name="AxiosError",i&&(this.code=i),o&&(this.config=o),s&&(this.request=s),d&&(this.response=d,this.status=d.status?d.status:null)}F.inherits(xe,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:F.toJSONObject(this.config),code:this.code,status:this.status}}});const q1=xe.prototype,F1={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(a=>{F1[a]={value:a}});Object.defineProperties(xe,F1);Object.defineProperty(q1,"isAxiosError",{value:!0});xe.from=(a,i,o,s,d,f)=>{const h=Object.create(q1);return F.toFlatObject(a,h,function(p){return p!==Error.prototype},v=>v!=="isAxiosError"),xe.call(h,a.message,i,o,s,d),h.cause=a,h.name=a.name,f&&Object.assign(h,f),h};const uS=null;function gf(a){return F.isPlainObject(a)||F.isArray(a)}function Y1(a){return F.endsWith(a,"[]")?a.slice(0,-2):a}function ug(a,i,o){return a?a.concat(i).map(function(d,f){return d=Y1(d),!o&&f?"["+d+"]":d}).join(o?".":""):i}function dS(a){return F.isArray(a)&&!a.some(gf)}const fS=F.toFlatObject(F,{},null,function(i){return/^is[A-Z]/.test(i)});function xc(a,i,o){if(!F.isObject(a))throw new TypeError("target must be an object");i=i||new FormData,o=F.toFlatObject(o,{metaTokens:!0,dots:!1,indexes:!1},!1,function(S,E){return!F.isUndefined(E[S])});const s=o.metaTokens,d=o.visitor||x,f=o.dots,h=o.indexes,p=(o.Blob||typeof Blob<"u"&&Blob)&&F.isSpecCompliantForm(i);if(!F.isFunction(d))throw new TypeError("visitor must be a function");function g(D){if(D===null)return"";if(F.isDate(D))return D.toISOString();if(F.isBoolean(D))return D.toString();if(!p&&F.isBlob(D))throw new xe("Blob is not supported. Use a Buffer instead.");return F.isArrayBuffer(D)||F.isTypedArray(D)?p&&typeof Blob=="function"?new Blob([D]):Buffer.from(D):D}function x(D,S,E){let R=D;if(D&&!E&&typeof D=="object"){if(F.endsWith(S,"{}"))S=s?S:S.slice(0,-2),D=JSON.stringify(D);else if(F.isArray(D)&&dS(D)||(F.isFileList(D)||F.endsWith(S,"[]"))&&(R=F.toArray(D)))return S=Y1(S),R.forEach(function(L,V){!(F.isUndefined(L)||L===null)&&i.append(h===!0?ug([S],V,f):h===null?S:S+"[]",g(L))}),!1}return gf(D)?!0:(i.append(ug(E,S,f),g(D)),!1)}const j=[],C=Object.assign(fS,{defaultVisitor:x,convertValue:g,isVisitable:gf});function T(D,S){if(!F.isUndefined(D)){if(j.indexOf(D)!==-1)throw Error("Circular reference detected in "+S.join("."));j.push(D),F.forEach(D,function(R,A){(!(F.isUndefined(R)||R===null)&&d.call(i,R,F.isString(A)?A.trim():A,S,C))===!0&&T(R,S?S.concat(A):[A])}),j.pop()}}if(!F.isObject(a))throw new TypeError("data must be an object");return T(a),i}function dg(a){const i={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(a).replace(/[!'()~]|%20|%00/g,function(s){return i[s]})}function Lf(a,i){this._pairs=[],a&&xc(a,this,i)}const G1=Lf.prototype;G1.append=function(i,o){this._pairs.push([i,o])};G1.toString=function(i){const o=i?function(s){return i.call(this,s,dg)}:dg;return this._pairs.map(function(d){return o(d[0])+"="+o(d[1])},"").join("&")};function hS(a){return encodeURIComponent(a).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function V1(a,i,o){if(!i)return a;const s=o&&o.encode||hS;F.isFunction(o)&&(o={serialize:o});const d=o&&o.serialize;let f;if(d?f=d(i,o):f=F.isURLSearchParams(i)?i.toString():new Lf(i,o).toString(s),f){const h=a.indexOf("#");h!==-1&&(a=a.slice(0,h)),a+=(a.indexOf("?")===-1?"?":"&")+f}return a}class fg{constructor(){this.handlers=[]}use(i,o,s){return this.handlers.push({fulfilled:i,rejected:o,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1}eject(i){this.handlers[i]&&(this.handlers[i]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(i){F.forEach(this.handlers,function(s){s!==null&&i(s)})}}const X1={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},mS=typeof URLSearchParams<"u"?URLSearchParams:Lf,pS=typeof FormData<"u"?FormData:null,gS=typeof Blob<"u"?Blob:null,xS={isBrowser:!0,classes:{URLSearchParams:mS,FormData:pS,Blob:gS},protocols:["http","https","file","blob","url","data"]},_f=typeof window<"u"&&typeof document<"u",xf=typeof navigator=="object"&&navigator||void 0,vS=_f&&(!xf||["ReactNative","NativeScript","NS"].indexOf(xf.product)<0),yS=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",bS=_f&&window.location.href||"http://localhost",jS=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:_f,hasStandardBrowserEnv:vS,hasStandardBrowserWebWorkerEnv:yS,navigator:xf,origin:bS},Symbol.toStringTag,{value:"Module"})),St={...jS,...xS};function SS(a,i){return xc(a,new St.classes.URLSearchParams,Object.assign({visitor:function(o,s,d,f){return St.isNode&&F.isBuffer(o)?(this.append(s,o.toString("base64")),!1):f.defaultVisitor.apply(this,arguments)}},i))}function wS(a){return F.matchAll(/\w+|\[(\w*)]/g,a).map(i=>i[0]==="[]"?"":i[1]||i[0])}function ES(a){const i={},o=Object.keys(a);let s;const d=o.length;let f;for(s=0;s<d;s++)f=o[s],i[f]=a[f];return i}function Q1(a){function i(o,s,d,f){let h=o[f++];if(h==="__proto__")return!0;const v=Number.isFinite(+h),p=f>=o.length;return h=!h&&F.isArray(d)?d.length:h,p?(F.hasOwnProp(d,h)?d[h]=[d[h],s]:d[h]=s,!v):((!d[h]||!F.isObject(d[h]))&&(d[h]=[]),i(o,s,d[h],f)&&F.isArray(d[h])&&(d[h]=ES(d[h])),!v)}if(F.isFormData(a)&&F.isFunction(a.entries)){const o={};return F.forEachEntry(a,(s,d)=>{i(wS(s),d,o,0)}),o}return null}function CS(a,i,o){if(F.isString(a))try{return(i||JSON.parse)(a),F.trim(a)}catch(s){if(s.name!=="SyntaxError")throw s}return(o||JSON.stringify)(a)}const Bi={transitional:X1,adapter:["xhr","http","fetch"],transformRequest:[function(i,o){const s=o.getContentType()||"",d=s.indexOf("application/json")>-1,f=F.isObject(i);if(f&&F.isHTMLForm(i)&&(i=new FormData(i)),F.isFormData(i))return d?JSON.stringify(Q1(i)):i;if(F.isArrayBuffer(i)||F.isBuffer(i)||F.isStream(i)||F.isFile(i)||F.isBlob(i)||F.isReadableStream(i))return i;if(F.isArrayBufferView(i))return i.buffer;if(F.isURLSearchParams(i))return o.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),i.toString();let v;if(f){if(s.indexOf("application/x-www-form-urlencoded")>-1)return SS(i,this.formSerializer).toString();if((v=F.isFileList(i))||s.indexOf("multipart/form-data")>-1){const p=this.env&&this.env.FormData;return xc(v?{"files[]":i}:i,p&&new p,this.formSerializer)}}return f||d?(o.setContentType("application/json",!1),CS(i)):i}],transformResponse:[function(i){const o=this.transitional||Bi.transitional,s=o&&o.forcedJSONParsing,d=this.responseType==="json";if(F.isResponse(i)||F.isReadableStream(i))return i;if(i&&F.isString(i)&&(s&&!this.responseType||d)){const h=!(o&&o.silentJSONParsing)&&d;try{return JSON.parse(i)}catch(v){if(h)throw v.name==="SyntaxError"?xe.from(v,xe.ERR_BAD_RESPONSE,this,null,this.response):v}}return i}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:St.classes.FormData,Blob:St.classes.Blob},validateStatus:function(i){return i>=200&&i<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};F.forEach(["delete","get","head","post","put","patch"],a=>{Bi.headers[a]={}});const $S=F.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),TS=a=>{const i={};let o,s,d;return a&&a.split(`
`).forEach(function(h){d=h.indexOf(":"),o=h.substring(0,d).trim().toLowerCase(),s=h.substring(d+1).trim(),!(!o||i[o]&&$S[o])&&(o==="set-cookie"?i[o]?i[o].push(s):i[o]=[s]:i[o]=i[o]?i[o]+", "+s:s)}),i},hg=Symbol("internals");function vi(a){return a&&String(a).trim().toLowerCase()}function Xo(a){return a===!1||a==null?a:F.isArray(a)?a.map(Xo):String(a)}function AS(a){const i=Object.create(null),o=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let s;for(;s=o.exec(a);)i[s[1]]=s[2];return i}const RS=a=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(a.trim());function Zd(a,i,o,s,d){if(F.isFunction(s))return s.call(this,i,o);if(d&&(i=o),!!F.isString(i)){if(F.isString(s))return i.indexOf(s)!==-1;if(F.isRegExp(s))return s.test(i)}}function DS(a){return a.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(i,o,s)=>o.toUpperCase()+s)}function zS(a,i){const o=F.toCamelCase(" "+i);["get","set","has"].forEach(s=>{Object.defineProperty(a,s+o,{value:function(d,f,h){return this[s].call(this,i,d,f,h)},configurable:!0})})}let Lt=class{constructor(i){i&&this.set(i)}set(i,o,s){const d=this;function f(v,p,g){const x=vi(p);if(!x)throw new Error("header name must be a non-empty string");const j=F.findKey(d,x);(!j||d[j]===void 0||g===!0||g===void 0&&d[j]!==!1)&&(d[j||p]=Xo(v))}const h=(v,p)=>F.forEach(v,(g,x)=>f(g,x,p));if(F.isPlainObject(i)||i instanceof this.constructor)h(i,o);else if(F.isString(i)&&(i=i.trim())&&!RS(i))h(TS(i),o);else if(F.isObject(i)&&F.isIterable(i)){let v={},p,g;for(const x of i){if(!F.isArray(x))throw TypeError("Object iterator must return a key-value pair");v[g=x[0]]=(p=v[g])?F.isArray(p)?[...p,x[1]]:[p,x[1]]:x[1]}h(v,o)}else i!=null&&f(o,i,s);return this}get(i,o){if(i=vi(i),i){const s=F.findKey(this,i);if(s){const d=this[s];if(!o)return d;if(o===!0)return AS(d);if(F.isFunction(o))return o.call(this,d,s);if(F.isRegExp(o))return o.exec(d);throw new TypeError("parser must be boolean|regexp|function")}}}has(i,o){if(i=vi(i),i){const s=F.findKey(this,i);return!!(s&&this[s]!==void 0&&(!o||Zd(this,this[s],s,o)))}return!1}delete(i,o){const s=this;let d=!1;function f(h){if(h=vi(h),h){const v=F.findKey(s,h);v&&(!o||Zd(s,s[v],v,o))&&(delete s[v],d=!0)}}return F.isArray(i)?i.forEach(f):f(i),d}clear(i){const o=Object.keys(this);let s=o.length,d=!1;for(;s--;){const f=o[s];(!i||Zd(this,this[f],f,i,!0))&&(delete this[f],d=!0)}return d}normalize(i){const o=this,s={};return F.forEach(this,(d,f)=>{const h=F.findKey(s,f);if(h){o[h]=Xo(d),delete o[f];return}const v=i?DS(f):String(f).trim();v!==f&&delete o[f],o[v]=Xo(d),s[v]=!0}),this}concat(...i){return this.constructor.concat(this,...i)}toJSON(i){const o=Object.create(null);return F.forEach(this,(s,d)=>{s!=null&&s!==!1&&(o[d]=i&&F.isArray(s)?s.join(", "):s)}),o}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([i,o])=>i+": "+o).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(i){return i instanceof this?i:new this(i)}static concat(i,...o){const s=new this(i);return o.forEach(d=>s.set(d)),s}static accessor(i){const s=(this[hg]=this[hg]={accessors:{}}).accessors,d=this.prototype;function f(h){const v=vi(h);s[v]||(zS(d,h),s[v]=!0)}return F.isArray(i)?i.forEach(f):f(i),this}};Lt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);F.reduceDescriptors(Lt.prototype,({value:a},i)=>{let o=i[0].toUpperCase()+i.slice(1);return{get:()=>a,set(s){this[o]=s}}});F.freezeMethods(Lt);function Pd(a,i){const o=this||Bi,s=i||o,d=Lt.from(s.headers);let f=s.data;return F.forEach(a,function(v){f=v.call(o,f,d.normalize(),i?i.status:void 0)}),d.normalize(),f}function Z1(a){return!!(a&&a.__CANCEL__)}function gl(a,i,o){xe.call(this,a??"canceled",xe.ERR_CANCELED,i,o),this.name="CanceledError"}F.inherits(gl,xe,{__CANCEL__:!0});function P1(a,i,o){const s=o.config.validateStatus;!o.status||!s||s(o.status)?a(o):i(new xe("Request failed with status code "+o.status,[xe.ERR_BAD_REQUEST,xe.ERR_BAD_RESPONSE][Math.floor(o.status/100)-4],o.config,o.request,o))}function NS(a){const i=/^([-+\w]{1,25})(:?\/\/|:)/.exec(a);return i&&i[1]||""}function MS(a,i){a=a||10;const o=new Array(a),s=new Array(a);let d=0,f=0,h;return i=i!==void 0?i:1e3,function(p){const g=Date.now(),x=s[f];h||(h=g),o[d]=p,s[d]=g;let j=f,C=0;for(;j!==d;)C+=o[j++],j=j%a;if(d=(d+1)%a,d===f&&(f=(f+1)%a),g-h<i)return;const T=x&&g-x;return T?Math.round(C*1e3/T):void 0}}function OS(a,i){let o=0,s=1e3/i,d,f;const h=(g,x=Date.now())=>{o=x,d=null,f&&(clearTimeout(f),f=null),a.apply(null,g)};return[(...g)=>{const x=Date.now(),j=x-o;j>=s?h(g,x):(d=g,f||(f=setTimeout(()=>{f=null,h(d)},s-j)))},()=>d&&h(d)]}const ec=(a,i,o=3)=>{let s=0;const d=MS(50,250);return OS(f=>{const h=f.loaded,v=f.lengthComputable?f.total:void 0,p=h-s,g=d(p),x=h<=v;s=h;const j={loaded:h,total:v,progress:v?h/v:void 0,bytes:p,rate:g||void 0,estimated:g&&v&&x?(v-h)/g:void 0,event:f,lengthComputable:v!=null,[i?"download":"upload"]:!0};a(j)},o)},mg=(a,i)=>{const o=a!=null;return[s=>i[0]({lengthComputable:o,total:a,loaded:s}),i[1]]},pg=a=>(...i)=>F.asap(()=>a(...i)),kS=St.hasStandardBrowserEnv?((a,i)=>o=>(o=new URL(o,St.origin),a.protocol===o.protocol&&a.host===o.host&&(i||a.port===o.port)))(new URL(St.origin),St.navigator&&/(msie|trident)/i.test(St.navigator.userAgent)):()=>!0,LS=St.hasStandardBrowserEnv?{write(a,i,o,s,d,f){const h=[a+"="+encodeURIComponent(i)];F.isNumber(o)&&h.push("expires="+new Date(o).toGMTString()),F.isString(s)&&h.push("path="+s),F.isString(d)&&h.push("domain="+d),f===!0&&h.push("secure"),document.cookie=h.join("; ")},read(a){const i=document.cookie.match(new RegExp("(^|;\\s*)("+a+")=([^;]*)"));return i?decodeURIComponent(i[3]):null},remove(a){this.write(a,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function _S(a){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(a)}function BS(a,i){return i?a.replace(/\/?\/$/,"")+"/"+i.replace(/^\/+/,""):a}function K1(a,i,o){let s=!_S(i);return a&&(s||o==!1)?BS(a,i):i}const gg=a=>a instanceof Lt?{...a}:a;function ur(a,i){i=i||{};const o={};function s(g,x,j,C){return F.isPlainObject(g)&&F.isPlainObject(x)?F.merge.call({caseless:C},g,x):F.isPlainObject(x)?F.merge({},x):F.isArray(x)?x.slice():x}function d(g,x,j,C){if(F.isUndefined(x)){if(!F.isUndefined(g))return s(void 0,g,j,C)}else return s(g,x,j,C)}function f(g,x){if(!F.isUndefined(x))return s(void 0,x)}function h(g,x){if(F.isUndefined(x)){if(!F.isUndefined(g))return s(void 0,g)}else return s(void 0,x)}function v(g,x,j){if(j in i)return s(g,x);if(j in a)return s(void 0,g)}const p={url:f,method:f,data:f,baseURL:h,transformRequest:h,transformResponse:h,paramsSerializer:h,timeout:h,timeoutMessage:h,withCredentials:h,withXSRFToken:h,adapter:h,responseType:h,xsrfCookieName:h,xsrfHeaderName:h,onUploadProgress:h,onDownloadProgress:h,decompress:h,maxContentLength:h,maxBodyLength:h,beforeRedirect:h,transport:h,httpAgent:h,httpsAgent:h,cancelToken:h,socketPath:h,responseEncoding:h,validateStatus:v,headers:(g,x,j)=>d(gg(g),gg(x),j,!0)};return F.forEach(Object.keys(Object.assign({},a,i)),function(x){const j=p[x]||d,C=j(a[x],i[x],x);F.isUndefined(C)&&j!==v||(o[x]=C)}),o}const J1=a=>{const i=ur({},a);let{data:o,withXSRFToken:s,xsrfHeaderName:d,xsrfCookieName:f,headers:h,auth:v}=i;i.headers=h=Lt.from(h),i.url=V1(K1(i.baseURL,i.url,i.allowAbsoluteUrls),a.params,a.paramsSerializer),v&&h.set("Authorization","Basic "+btoa((v.username||"")+":"+(v.password?unescape(encodeURIComponent(v.password)):"")));let p;if(F.isFormData(o)){if(St.hasStandardBrowserEnv||St.hasStandardBrowserWebWorkerEnv)h.setContentType(void 0);else if((p=h.getContentType())!==!1){const[g,...x]=p?p.split(";").map(j=>j.trim()).filter(Boolean):[];h.setContentType([g||"multipart/form-data",...x].join("; "))}}if(St.hasStandardBrowserEnv&&(s&&F.isFunction(s)&&(s=s(i)),s||s!==!1&&kS(i.url))){const g=d&&f&&LS.read(f);g&&h.set(d,g)}return i},HS=typeof XMLHttpRequest<"u",US=HS&&function(a){return new Promise(function(o,s){const d=J1(a);let f=d.data;const h=Lt.from(d.headers).normalize();let{responseType:v,onUploadProgress:p,onDownloadProgress:g}=d,x,j,C,T,D;function S(){T&&T(),D&&D(),d.cancelToken&&d.cancelToken.unsubscribe(x),d.signal&&d.signal.removeEventListener("abort",x)}let E=new XMLHttpRequest;E.open(d.method.toUpperCase(),d.url,!0),E.timeout=d.timeout;function R(){if(!E)return;const L=Lt.from("getAllResponseHeaders"in E&&E.getAllResponseHeaders()),q={data:!v||v==="text"||v==="json"?E.responseText:E.response,status:E.status,statusText:E.statusText,headers:L,config:a,request:E};P1(function(X){o(X),S()},function(X){s(X),S()},q),E=null}"onloadend"in E?E.onloadend=R:E.onreadystatechange=function(){!E||E.readyState!==4||E.status===0&&!(E.responseURL&&E.responseURL.indexOf("file:")===0)||setTimeout(R)},E.onabort=function(){E&&(s(new xe("Request aborted",xe.ECONNABORTED,a,E)),E=null)},E.onerror=function(){s(new xe("Network Error",xe.ERR_NETWORK,a,E)),E=null},E.ontimeout=function(){let V=d.timeout?"timeout of "+d.timeout+"ms exceeded":"timeout exceeded";const q=d.transitional||X1;d.timeoutErrorMessage&&(V=d.timeoutErrorMessage),s(new xe(V,q.clarifyTimeoutError?xe.ETIMEDOUT:xe.ECONNABORTED,a,E)),E=null},f===void 0&&h.setContentType(null),"setRequestHeader"in E&&F.forEach(h.toJSON(),function(V,q){E.setRequestHeader(q,V)}),F.isUndefined(d.withCredentials)||(E.withCredentials=!!d.withCredentials),v&&v!=="json"&&(E.responseType=d.responseType),g&&([C,D]=ec(g,!0),E.addEventListener("progress",C)),p&&E.upload&&([j,T]=ec(p),E.upload.addEventListener("progress",j),E.upload.addEventListener("loadend",T)),(d.cancelToken||d.signal)&&(x=L=>{E&&(s(!L||L.type?new gl(null,a,E):L),E.abort(),E=null)},d.cancelToken&&d.cancelToken.subscribe(x),d.signal&&(d.signal.aborted?x():d.signal.addEventListener("abort",x)));const A=NS(d.url);if(A&&St.protocols.indexOf(A)===-1){s(new xe("Unsupported protocol "+A+":",xe.ERR_BAD_REQUEST,a));return}E.send(f||null)})},qS=(a,i)=>{const{length:o}=a=a?a.filter(Boolean):[];if(i||o){let s=new AbortController,d;const f=function(g){if(!d){d=!0,v();const x=g instanceof Error?g:this.reason;s.abort(x instanceof xe?x:new gl(x instanceof Error?x.message:x))}};let h=i&&setTimeout(()=>{h=null,f(new xe(`timeout ${i} of ms exceeded`,xe.ETIMEDOUT))},i);const v=()=>{a&&(h&&clearTimeout(h),h=null,a.forEach(g=>{g.unsubscribe?g.unsubscribe(f):g.removeEventListener("abort",f)}),a=null)};a.forEach(g=>g.addEventListener("abort",f));const{signal:p}=s;return p.unsubscribe=()=>F.asap(v),p}},FS=function*(a,i){let o=a.byteLength;if(o<i){yield a;return}let s=0,d;for(;s<o;)d=s+i,yield a.slice(s,d),s=d},YS=async function*(a,i){for await(const o of GS(a))yield*FS(o,i)},GS=async function*(a){if(a[Symbol.asyncIterator]){yield*a;return}const i=a.getReader();try{for(;;){const{done:o,value:s}=await i.read();if(o)break;yield s}}finally{await i.cancel()}},xg=(a,i,o,s)=>{const d=YS(a,i);let f=0,h,v=p=>{h||(h=!0,s&&s(p))};return new ReadableStream({async pull(p){try{const{done:g,value:x}=await d.next();if(g){v(),p.close();return}let j=x.byteLength;if(o){let C=f+=j;o(C)}p.enqueue(new Uint8Array(x))}catch(g){throw v(g),g}},cancel(p){return v(p),d.return()}},{highWaterMark:2})},vc=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",I1=vc&&typeof ReadableStream=="function",VS=vc&&(typeof TextEncoder=="function"?(a=>i=>a.encode(i))(new TextEncoder):async a=>new Uint8Array(await new Response(a).arrayBuffer())),W1=(a,...i)=>{try{return!!a(...i)}catch{return!1}},XS=I1&&W1(()=>{let a=!1;const i=new Request(St.origin,{body:new ReadableStream,method:"POST",get duplex(){return a=!0,"half"}}).headers.has("Content-Type");return a&&!i}),vg=64*1024,vf=I1&&W1(()=>F.isReadableStream(new Response("").body)),tc={stream:vf&&(a=>a.body)};vc&&(a=>{["text","arrayBuffer","blob","formData","stream"].forEach(i=>{!tc[i]&&(tc[i]=F.isFunction(a[i])?o=>o[i]():(o,s)=>{throw new xe(`Response type '${i}' is not supported`,xe.ERR_NOT_SUPPORT,s)})})})(new Response);const QS=async a=>{if(a==null)return 0;if(F.isBlob(a))return a.size;if(F.isSpecCompliantForm(a))return(await new Request(St.origin,{method:"POST",body:a}).arrayBuffer()).byteLength;if(F.isArrayBufferView(a)||F.isArrayBuffer(a))return a.byteLength;if(F.isURLSearchParams(a)&&(a=a+""),F.isString(a))return(await VS(a)).byteLength},ZS=async(a,i)=>{const o=F.toFiniteNumber(a.getContentLength());return o??QS(i)},PS=vc&&(async a=>{let{url:i,method:o,data:s,signal:d,cancelToken:f,timeout:h,onDownloadProgress:v,onUploadProgress:p,responseType:g,headers:x,withCredentials:j="same-origin",fetchOptions:C}=J1(a);g=g?(g+"").toLowerCase():"text";let T=qS([d,f&&f.toAbortSignal()],h),D;const S=T&&T.unsubscribe&&(()=>{T.unsubscribe()});let E;try{if(p&&XS&&o!=="get"&&o!=="head"&&(E=await ZS(x,s))!==0){let q=new Request(i,{method:"POST",body:s,duplex:"half"}),Y;if(F.isFormData(s)&&(Y=q.headers.get("content-type"))&&x.setContentType(Y),q.body){const[X,K]=mg(E,ec(pg(p)));s=xg(q.body,vg,X,K)}}F.isString(j)||(j=j?"include":"omit");const R="credentials"in Request.prototype;D=new Request(i,{...C,signal:T,method:o.toUpperCase(),headers:x.normalize().toJSON(),body:s,duplex:"half",credentials:R?j:void 0});let A=await fetch(D,C);const L=vf&&(g==="stream"||g==="response");if(vf&&(v||L&&S)){const q={};["status","statusText","headers"].forEach(J=>{q[J]=A[J]});const Y=F.toFiniteNumber(A.headers.get("content-length")),[X,K]=v&&mg(Y,ec(pg(v),!0))||[];A=new Response(xg(A.body,vg,X,()=>{K&&K(),S&&S()}),q)}g=g||"text";let V=await tc[F.findKey(tc,g)||"text"](A,a);return!L&&S&&S(),await new Promise((q,Y)=>{P1(q,Y,{data:V,headers:Lt.from(A.headers),status:A.status,statusText:A.statusText,config:a,request:D})})}catch(R){throw S&&S(),R&&R.name==="TypeError"&&/Load failed|fetch/i.test(R.message)?Object.assign(new xe("Network Error",xe.ERR_NETWORK,a,D),{cause:R.cause||R}):xe.from(R,R&&R.code,a,D)}}),yf={http:uS,xhr:US,fetch:PS};F.forEach(yf,(a,i)=>{if(a){try{Object.defineProperty(a,"name",{value:i})}catch{}Object.defineProperty(a,"adapterName",{value:i})}});const yg=a=>`- ${a}`,KS=a=>F.isFunction(a)||a===null||a===!1,ex={getAdapter:a=>{a=F.isArray(a)?a:[a];const{length:i}=a;let o,s;const d={};for(let f=0;f<i;f++){o=a[f];let h;if(s=o,!KS(o)&&(s=yf[(h=String(o)).toLowerCase()],s===void 0))throw new xe(`Unknown adapter '${h}'`);if(s)break;d[h||"#"+f]=s}if(!s){const f=Object.entries(d).map(([v,p])=>`adapter ${v} `+(p===!1?"is not supported by the environment":"is not available in the build"));let h=i?f.length>1?`since :
`+f.map(yg).join(`
`):" "+yg(f[0]):"as no adapter specified";throw new xe("There is no suitable adapter to dispatch the request "+h,"ERR_NOT_SUPPORT")}return s},adapters:yf};function Kd(a){if(a.cancelToken&&a.cancelToken.throwIfRequested(),a.signal&&a.signal.aborted)throw new gl(null,a)}function bg(a){return Kd(a),a.headers=Lt.from(a.headers),a.data=Pd.call(a,a.transformRequest),["post","put","patch"].indexOf(a.method)!==-1&&a.headers.setContentType("application/x-www-form-urlencoded",!1),ex.getAdapter(a.adapter||Bi.adapter)(a).then(function(s){return Kd(a),s.data=Pd.call(a,a.transformResponse,s),s.headers=Lt.from(s.headers),s},function(s){return Z1(s)||(Kd(a),s&&s.response&&(s.response.data=Pd.call(a,a.transformResponse,s.response),s.response.headers=Lt.from(s.response.headers))),Promise.reject(s)})}const tx="1.10.0",yc={};["object","boolean","number","function","string","symbol"].forEach((a,i)=>{yc[a]=function(s){return typeof s===a||"a"+(i<1?"n ":" ")+a}});const jg={};yc.transitional=function(i,o,s){function d(f,h){return"[Axios v"+tx+"] Transitional option '"+f+"'"+h+(s?". "+s:"")}return(f,h,v)=>{if(i===!1)throw new xe(d(h," has been removed"+(o?" in "+o:"")),xe.ERR_DEPRECATED);return o&&!jg[h]&&(jg[h]=!0,console.warn(d(h," has been deprecated since v"+o+" and will be removed in the near future"))),i?i(f,h,v):!0}};yc.spelling=function(i){return(o,s)=>(console.warn(`${s} is likely a misspelling of ${i}`),!0)};function JS(a,i,o){if(typeof a!="object")throw new xe("options must be an object",xe.ERR_BAD_OPTION_VALUE);const s=Object.keys(a);let d=s.length;for(;d-- >0;){const f=s[d],h=i[f];if(h){const v=a[f],p=v===void 0||h(v,f,a);if(p!==!0)throw new xe("option "+f+" must be "+p,xe.ERR_BAD_OPTION_VALUE);continue}if(o!==!0)throw new xe("Unknown option "+f,xe.ERR_BAD_OPTION)}}const Qo={assertOptions:JS,validators:yc},Ca=Qo.validators;let sr=class{constructor(i){this.defaults=i||{},this.interceptors={request:new fg,response:new fg}}async request(i,o){try{return await this._request(i,o)}catch(s){if(s instanceof Error){let d={};Error.captureStackTrace?Error.captureStackTrace(d):d=new Error;const f=d.stack?d.stack.replace(/^.+\n/,""):"";try{s.stack?f&&!String(s.stack).endsWith(f.replace(/^.+\n.+\n/,""))&&(s.stack+=`
`+f):s.stack=f}catch{}}throw s}}_request(i,o){typeof i=="string"?(o=o||{},o.url=i):o=i||{},o=ur(this.defaults,o);const{transitional:s,paramsSerializer:d,headers:f}=o;s!==void 0&&Qo.assertOptions(s,{silentJSONParsing:Ca.transitional(Ca.boolean),forcedJSONParsing:Ca.transitional(Ca.boolean),clarifyTimeoutError:Ca.transitional(Ca.boolean)},!1),d!=null&&(F.isFunction(d)?o.paramsSerializer={serialize:d}:Qo.assertOptions(d,{encode:Ca.function,serialize:Ca.function},!0)),o.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?o.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:o.allowAbsoluteUrls=!0),Qo.assertOptions(o,{baseUrl:Ca.spelling("baseURL"),withXsrfToken:Ca.spelling("withXSRFToken")},!0),o.method=(o.method||this.defaults.method||"get").toLowerCase();let h=f&&F.merge(f.common,f[o.method]);f&&F.forEach(["delete","get","head","post","put","patch","common"],D=>{delete f[D]}),o.headers=Lt.concat(h,f);const v=[];let p=!0;this.interceptors.request.forEach(function(S){typeof S.runWhen=="function"&&S.runWhen(o)===!1||(p=p&&S.synchronous,v.unshift(S.fulfilled,S.rejected))});const g=[];this.interceptors.response.forEach(function(S){g.push(S.fulfilled,S.rejected)});let x,j=0,C;if(!p){const D=[bg.bind(this),void 0];for(D.unshift.apply(D,v),D.push.apply(D,g),C=D.length,x=Promise.resolve(o);j<C;)x=x.then(D[j++],D[j++]);return x}C=v.length;let T=o;for(j=0;j<C;){const D=v[j++],S=v[j++];try{T=D(T)}catch(E){S.call(this,E);break}}try{x=bg.call(this,T)}catch(D){return Promise.reject(D)}for(j=0,C=g.length;j<C;)x=x.then(g[j++],g[j++]);return x}getUri(i){i=ur(this.defaults,i);const o=K1(i.baseURL,i.url,i.allowAbsoluteUrls);return V1(o,i.params,i.paramsSerializer)}};F.forEach(["delete","get","head","options"],function(i){sr.prototype[i]=function(o,s){return this.request(ur(s||{},{method:i,url:o,data:(s||{}).data}))}});F.forEach(["post","put","patch"],function(i){function o(s){return function(f,h,v){return this.request(ur(v||{},{method:i,headers:s?{"Content-Type":"multipart/form-data"}:{},url:f,data:h}))}}sr.prototype[i]=o(),sr.prototype[i+"Form"]=o(!0)});let IS=class ax{constructor(i){if(typeof i!="function")throw new TypeError("executor must be a function.");let o;this.promise=new Promise(function(f){o=f});const s=this;this.promise.then(d=>{if(!s._listeners)return;let f=s._listeners.length;for(;f-- >0;)s._listeners[f](d);s._listeners=null}),this.promise.then=d=>{let f;const h=new Promise(v=>{s.subscribe(v),f=v}).then(d);return h.cancel=function(){s.unsubscribe(f)},h},i(function(f,h,v){s.reason||(s.reason=new gl(f,h,v),o(s.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(i){if(this.reason){i(this.reason);return}this._listeners?this._listeners.push(i):this._listeners=[i]}unsubscribe(i){if(!this._listeners)return;const o=this._listeners.indexOf(i);o!==-1&&this._listeners.splice(o,1)}toAbortSignal(){const i=new AbortController,o=s=>{i.abort(s)};return this.subscribe(o),i.signal.unsubscribe=()=>this.unsubscribe(o),i.signal}static source(){let i;return{token:new ax(function(d){i=d}),cancel:i}}};function WS(a){return function(o){return a.apply(null,o)}}function e5(a){return F.isObject(a)&&a.isAxiosError===!0}const bf={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(bf).forEach(([a,i])=>{bf[i]=a});function nx(a){const i=new sr(a),o=M1(sr.prototype.request,i);return F.extend(o,sr.prototype,i,{allOwnKeys:!0}),F.extend(o,i,null,{allOwnKeys:!0}),o.create=function(d){return nx(ur(a,d))},o}const ee=nx(Bi);ee.Axios=sr;ee.CanceledError=gl;ee.CancelToken=IS;ee.isCancel=Z1;ee.VERSION=tx;ee.toFormData=xc;ee.AxiosError=xe;ee.Cancel=ee.CanceledError;ee.all=function(i){return Promise.all(i)};ee.spread=WS;ee.isAxiosError=e5;ee.mergeConfig=ur;ee.AxiosHeaders=Lt;ee.formToJSON=a=>Q1(F.isHTMLForm(a)?new FormData(a):a);ee.getAdapter=ex.getAdapter;ee.HttpStatusCode=bf;ee.default=ee;const{Axios:Yw,AxiosError:Gw,CanceledError:Vw,isCancel:Xw,CancelToken:Qw,VERSION:Zw,all:Pw,Cancel:Kw,isAxiosError:Jw,spread:Iw,toFormData:Ww,AxiosHeaders:e7,HttpStatusCode:t7,formToJSON:a7,getAdapter:n7,mergeConfig:r7}=ee,t5=y.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, ${a=>a.theme.colors.primaryGradientStart} 0%, ${a=>a.theme.colors.primaryGradientEnd} 100%);
  padding: ${a=>a.theme.spacing.xl};
`,a5=y.div`
  background: ${a=>a.theme.colors.surface};
  border-radius: ${a=>a.theme.borderRadius.xl};
  box-shadow: ${a=>a.theme.colors.shadowXl};
  padding: ${a=>a.theme.spacing.xxl};
  width: 100%;
  max-width: 450px;
  animation: slideInUp 0.4s ease-out;

  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,n5=y.div`
  text-align: center;
  margin-bottom: ${a=>a.theme.spacing.xl};
`;y.div`
  font-size: 4rem;
  margin-bottom: ${a=>a.theme.spacing.md};
`;const r5=y.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${a=>a.theme.colors.textPrimary};
  margin: 0;
`,l5=y.p`
  font-size: 0.9375rem;
  color: ${a=>a.theme.colors.textSecondary};
  margin: ${a=>a.theme.spacing.xs} 0 0 0;
`,i5=y.form`
  display: flex;
  flex-direction: column;
  gap: ${a=>a.theme.spacing.lg};
`;y(Ot)`
  text-align: right;
  font-size: 0.875rem;
  color: ${a=>a.theme.colors.primary};
  text-decoration: none;
  margin-top: -${a=>a.theme.spacing.sm};

  &:hover {
    text-decoration: underline;
  }
`;const s5=y.div`
  display: flex;
  align-items: center;
  gap: ${a=>a.theme.spacing.md};
  margin: ${a=>a.theme.spacing.lg} 0;

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: ${a=>a.theme.colors.border};
  }
`,o5=y.span`
  font-size: 0.875rem;
  color: ${a=>a.theme.colors.textSecondary};
`,c5=y.div`
  text-align: center;
  font-size: 0.9375rem;
  color: ${a=>a.theme.colors.textSecondary};

  a {
    color: ${a=>a.theme.colors.primary};
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`,u5=y(Ot)`
  display: block;
  text-align: center;
  margin-top: ${a=>a.theme.spacing.lg};
  padding: ${a=>a.theme.spacing.md};
  background: ${a=>a.theme.colors.background};
  border-radius: ${a=>a.theme.borderRadius.md};
  color: ${a=>a.theme.colors.textPrimary};
  text-decoration: none;
  font-weight: 500;
  transition: all ${a=>a.theme.transitions.fast};

  &:hover {
    background: ${a=>a.theme.colors.surfaceHover};
  }
`,d5=()=>{const{theme:a}=fe(),i=Na(),[o,s]=w.useState({email:"",password:""}),[d,f]=w.useState(!1),[h,v]=w.useState(null),p=x=>{const{name:j,value:C}=x.target;s(T=>({...T,[j]:C}))},g=async x=>{x.preventDefault(),f(!0),v(null);try{const j=await ee.post("http://localhost:5000/api/auth/owner/login",{email:o.email,password:o.password});localStorage.setItem("token",j.data.data.token),localStorage.setItem("userRole","owner"),localStorage.setItem("user",JSON.stringify(j.data.data.owner)),i("/dashboard")}catch(j){v(j.response?.data?.message||"Login failed. Please try again.")}finally{f(!1)}};return r.jsx(t5,{theme:a,children:r.jsxs(a5,{theme:a,children:[r.jsxs(n5,{theme:a,children:[r.jsx(r5,{theme:a,children:"TMS Owner Portal"}),r.jsx(l5,{theme:a,children:"Transport Management System"})]}),h&&r.jsx(He,{variant:"danger",children:h}),r.jsxs(i5,{theme:a,onSubmit:g,children:[r.jsx(ie,{type:"email",label:"Email Address",name:"email",value:o.email,onChange:p,placeholder:"owner@example.com",required:!0,leftIcon:r.jsxs("svg",{viewBox:"0 0 20 20",fill:"currentColor",width:"20",height:"20",children:[r.jsx("path",{d:"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"}),r.jsx("path",{d:"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"})]})}),r.jsx(ie,{type:"password",label:"Password",name:"password",value:o.password,onChange:p,placeholder:"••••••••",required:!0,leftIcon:r.jsx("svg",{viewBox:"0 0 20 20",fill:"currentColor",width:"20",height:"20",children:r.jsx("path",{fillRule:"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",clipRule:"evenodd"})})}),r.jsx(ge,{type:"submit",variant:"primary",fullWidth:!0,loading:d,size:"lg",children:"Sign In"})]}),r.jsx(s5,{theme:a,children:r.jsx(o5,{theme:a,children:"or"})}),r.jsxs(c5,{theme:a,children:["Don't have an account? ",r.jsx(Ot,{to:"/signup",children:"Sign up"})]}),r.jsx(u5,{theme:a,to:"/driver-login",children:"Driver Login"})]})})},f5=y.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${a=>a.theme.colors.darkBackground};
  padding: ${a=>a.theme.spacing.xl};
`,h5=y.div`
  background: ${a=>a.theme.colors.surface};
  border-radius: ${a=>a.theme.borderRadius.xl};
  box-shadow: ${a=>a.theme.colors.shadowXl};
  padding: ${a=>a.theme.spacing.xxl};
  width: 100%;
  max-width: 450px;
  animation: slideInUp 0.4s ease-out;

  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,m5=y.div`
  text-align: center;
  margin-bottom: ${a=>a.theme.spacing.xl};
`,p5=y.div`
  width: 72px;
  height: 72px;
  margin: 0 auto ${a=>a.theme.spacing.md} auto;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${a=>a.theme.colors.primary};
  color: #ffffff;
  font-size: 1.75rem;
`,g5=y.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${a=>a.theme.colors.textPrimary};
  margin: 0.5rem 0 0 0;
  text-align: center;
`,x5=y.p`
  font-size: 0.9375rem;
  color: ${a=>a.theme.colors.textSecondary};
  margin: ${a=>a.theme.spacing.xs} 0 0 0;
`,v5=y.form`
  display: flex;
  flex-direction: column;
  gap: ${a=>a.theme.spacing.lg};
`,y5=y(Ot)`
  display: block;
  text-align: center;
  margin-top: ${a=>a.theme.spacing.lg};
  padding: ${a=>a.theme.spacing.md};
  background: ${a=>a.theme.colors.surface};
  border-radius: ${a=>a.theme.borderRadius.md};
  color: ${a=>a.theme.colors.primary};
  text-decoration: none;
  font-weight: 600;
  transition: all ${a=>a.theme.transitions.fast};
  border: 1px solid ${a=>a.theme.colors.border};

  &:hover {
    background: ${a=>a.theme.colors.surfaceHover};
  }
`,b5=()=>{const{theme:a}=fe(),i=Na(),[o,s]=w.useState({email:"",password:""}),[d,f]=w.useState(!1),[h,v]=w.useState(null),p=x=>{const{name:j,value:C}=x.target;s(T=>({...T,[j]:C}))},g=async x=>{x.preventDefault(),f(!0),v(null);try{const j=await ee.post("http://localhost:5000/api/auth/driver/login",{email:o.email,password:o.password});localStorage.setItem("token",j.data.data.token),localStorage.setItem("userRole","driver"),localStorage.setItem("user",JSON.stringify(j.data.data.driver)),i("/driver-dashboard")}catch(j){v(j.response?.data?.message||"Login failed. Please try again.")}finally{f(!1)}};return r.jsx(f5,{theme:a,children:r.jsxs(h5,{theme:a,children:[r.jsxs(m5,{theme:a,children:[r.jsx(p5,{}),r.jsx(g5,{theme:a,children:"Driver Portal"}),r.jsx(x5,{theme:a,children:"Transport Management System"})]}),h&&r.jsx(He,{variant:"danger",children:h}),r.jsxs(v5,{theme:a,onSubmit:g,children:[r.jsx(ie,{type:"text",label:"Email",name:"email",value:o.email,onChange:p,placeholder:"driver123",required:!0,leftIcon:r.jsx("svg",{viewBox:"0 0 20 20",fill:"currentColor",width:"20",height:"20",children:r.jsx("path",{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",clipRule:"evenodd"})})}),r.jsx(ie,{type:"password",label:"Password",name:"password",value:o.password,onChange:p,placeholder:"••••••••",required:!0,leftIcon:r.jsx("svg",{viewBox:"0 0 20 20",fill:"currentColor",width:"20",height:"20",children:r.jsx("path",{fillRule:"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",clipRule:"evenodd"})})}),r.jsx(ge,{type:"submit",variant:"primary",fullWidth:!0,loading:d,size:"lg",children:"Sign In"})]}),r.jsx(y5,{theme:a,to:"/login",children:"Owner Login"})]})})},j5=y.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    ${a=>a.theme.colors.primary} 0%,
    ${a=>a.theme.colors.secondary} 100%
  );
  padding: ${a=>a.theme.spacing.xl};
`,S5=y.div`
  background: ${a=>a.theme.colors.surface};
  border-radius: ${a=>a.theme.borderRadius.xl};
  box-shadow: ${a=>a.theme.colors.shadowXl};
  padding: ${a=>a.theme.spacing.xxl};
  width: 100%;
  max-width: 500px;
  animation: slideInUp 0.4s ease-out;

  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,w5=y.div`
  text-align: center;
  margin-bottom: ${a=>a.theme.spacing.xl};
`;y.div`
  font-size: 3.5rem;
  margin-bottom: ${a=>a.theme.spacing.md};
`;const E5=y.h1`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${a=>a.theme.colors.textPrimary};
  margin: 0;
`,C5=y.p`
  font-size: 0.875rem;
  color: ${a=>a.theme.colors.textSecondary};
  margin: ${a=>a.theme.spacing.xs} 0 0 0;
`,$5=y.form`
  display: flex;
  flex-direction: column;
  gap: ${a=>a.theme.spacing.md};
`,Sg=y.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${a=>a.theme.spacing.md};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,T5=y.div`
  text-align: center;
  font-size: 0.9375rem;
  color: ${a=>a.theme.colors.textSecondary};
  margin-top: ${a=>a.theme.spacing.lg};

  a {
    color: ${a=>a.theme.colors.primary};
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`,A5=()=>{const{theme:a}=fe(),i=Na(),[o,s]=w.useState({email:"",password:"",confirmPassword:"",companyName:"",contactNumber:"",ownerName:""}),[d,f]=w.useState(!1),[h,v]=w.useState(null),p=x=>{const{name:j,value:C}=x.target;s(T=>({...T,[j]:C}))},g=async x=>{if(x.preventDefault(),f(!0),v(null),o.password!==o.confirmPassword){v("Passwords do not match"),f(!1);return}if(o.password.length<6){v("Password must be at least 6 characters"),f(!1);return}try{const j=await ee.post("http://localhost:5000/api/auth/owner/register",{name:o.ownerName,email:o.email,password:o.password,companyName:o.companyName,contactNumber:o.contactNumber});localStorage.setItem("token",j.data.data.token),localStorage.setItem("userRole","owner"),localStorage.setItem("user",JSON.stringify(j.data.data.owner)),i("/dashboard")}catch(j){v(j.response?.data?.message||"Signup failed. Please try again.")}finally{f(!1)}};return r.jsx(j5,{theme:a,children:r.jsxs(S5,{theme:a,children:[r.jsxs(w5,{theme:a,children:[r.jsx(E5,{theme:a,children:"Create Owner Account"}),r.jsx(C5,{theme:a,children:"Get started with TMS"})]}),h&&r.jsx(He,{variant:"danger",children:h}),r.jsxs($5,{theme:a,onSubmit:g,children:[r.jsx(ie,{type:"text",label:"Company Name",name:"companyName",value:o.companyName,onChange:p,placeholder:"ABC Transport Company",required:!0,leftIcon:r.jsx("svg",{viewBox:"0 0 20 20",fill:"currentColor",width:"20",height:"20",children:r.jsx("path",{fillRule:"evenodd",d:"M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z",clipRule:"evenodd"})})}),r.jsx(ie,{type:"text",label:"Owner Name",name:"ownerName",value:o.ownerName,onChange:p,placeholder:"John Doe",required:!0,leftIcon:r.jsx("svg",{viewBox:"0 0 20 20",fill:"currentColor",width:"20",height:"20",children:r.jsx("path",{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",clipRule:"evenodd"})})}),r.jsxs(Sg,{theme:a,children:[r.jsx(ie,{type:"email",label:"Email",name:"email",value:o.email,onChange:p,placeholder:"owner@company.com",required:!0,leftIcon:r.jsxs("svg",{viewBox:"0 0 20 20",fill:"currentColor",width:"20",height:"20",children:[r.jsx("path",{d:"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"}),r.jsx("path",{d:"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"})]})}),r.jsx(ie,{type:"tel",label:"Contact Number",name:"contactNumber",value:o.contactNumber,onChange:p,placeholder:"1234567890",required:!0,leftIcon:r.jsx("svg",{viewBox:"0 0 20 20",fill:"currentColor",width:"20",height:"20",children:r.jsx("path",{d:"M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"})})})]}),r.jsxs(Sg,{theme:a,children:[r.jsx(ie,{type:"password",label:"Password",name:"password",value:o.password,onChange:p,placeholder:"••••••••",required:!0,leftIcon:r.jsx("svg",{viewBox:"0 0 20 20",fill:"currentColor",width:"20",height:"20",children:r.jsx("path",{fillRule:"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",clipRule:"evenodd"})})}),r.jsx(ie,{type:"password",label:"Confirm Password",name:"confirmPassword",value:o.confirmPassword,onChange:p,placeholder:"••••••••",required:!0,leftIcon:r.jsx("svg",{viewBox:"0 0 20 20",fill:"currentColor",width:"20",height:"20",children:r.jsx("path",{fillRule:"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",clipRule:"evenodd"})})})]}),r.jsx(ge,{type:"submit",variant:"primary",fullWidth:!0,loading:d,size:"lg",style:{marginTop:"1rem"},children:"Create Account"})]}),r.jsxs(T5,{theme:a,children:["Already have an account? ",r.jsx(Ot,{to:"/login",children:"Sign in"})]})]})})};var rx={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},wg=At.createContext&&At.createContext(rx),R5=["attr","size","title"];function D5(a,i){if(a==null)return{};var o=z5(a,i),s,d;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)s=f[d],!(i.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(a,s)&&(o[s]=a[s])}return o}function z5(a,i){if(a==null)return{};var o={};for(var s in a)if(Object.prototype.hasOwnProperty.call(a,s)){if(i.indexOf(s)>=0)continue;o[s]=a[s]}return o}function ac(){return ac=Object.assign?Object.assign.bind():function(a){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(a[s]=o[s])}return a},ac.apply(this,arguments)}function Eg(a,i){var o=Object.keys(a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);i&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(a,d).enumerable})),o.push.apply(o,s)}return o}function nc(a){for(var i=1;i<arguments.length;i++){var o=arguments[i]!=null?arguments[i]:{};i%2?Eg(Object(o),!0).forEach(function(s){N5(a,s,o[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(o)):Eg(Object(o)).forEach(function(s){Object.defineProperty(a,s,Object.getOwnPropertyDescriptor(o,s))})}return a}function N5(a,i,o){return i=M5(i),i in a?Object.defineProperty(a,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):a[i]=o,a}function M5(a){var i=O5(a,"string");return typeof i=="symbol"?i:i+""}function O5(a,i){if(typeof a!="object"||!a)return a;var o=a[Symbol.toPrimitive];if(o!==void 0){var s=o.call(a,i);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(a)}function lx(a){return a&&a.map((i,o)=>At.createElement(i.tag,nc({key:o},i.attr),lx(i.child)))}function Ue(a){return i=>At.createElement(k5,ac({attr:nc({},a.attr)},i),lx(a.child))}function k5(a){var i=o=>{var{attr:s,size:d,title:f}=a,h=D5(a,R5),v=d||o.size||"1em",p;return o.className&&(p=o.className),a.className&&(p=(p?p+" ":"")+a.className),At.createElement("svg",ac({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},o.attr,s,h,{className:p,style:nc(nc({color:a.color||o.color},o.style),a.style),height:v,width:v,xmlns:"http://www.w3.org/2000/svg"}),f&&At.createElement("title",null,f),a.children)};return wg!==void 0?At.createElement(wg.Consumer,null,o=>i(o)):i(rx)}function ix(a){return Ue({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"},child:[]}]})(a)}function Ia(a){return Ue({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"},child:[]}]})(a)}function dr(a){return Ue({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},child:[]}]})(a)}function L5(a){return Ue({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"},child:[]}]})(a)}function _5(a){return Ue({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"},child:[]}]})(a)}function B5(a){return Ue({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"},child:[]}]})(a)}function Bf(a){return Ue({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"},child:[]}]})(a)}function H5(a){return Ue({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(a)}function bc(a){return Ue({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},child:[]}]})(a)}function jf(a){return Ue({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},child:[]}]})(a)}function U5(a){return Ue({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"},child:[]}]})(a)}function ar(a){return Ue({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M181.9 256.1c-5-16-4.9-46.9-2-46.9 8.4 0 7.6 36.9 2 46.9zm-1.7 47.2c-7.7 20.2-17.3 43.3-28.4 62.7 18.3-7 39-17.2 62.9-21.9-12.7-9.6-24.9-23.4-34.5-40.8zM86.1 428.1c0 .8 13.2-5.4 34.9-40.2-6.7 6.3-29.1 24.5-34.9 40.2zM248 160h136v328c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V24C0 10.7 10.7 0 24 0h200v136c0 13.2 10.8 24 24 24zm-8 171.8c-20-12.2-33.3-29-42.7-53.8 4.5-18.5 11.6-46.6 6.2-64.2-4.7-29.4-42.4-26.5-47.8-6.8-5 18.3-.4 44.1 8.1 77-11.6 27.6-28.7 64.6-40.8 85.8-.1 0-.1.1-.2.1-27.1 13.9-73.6 44.5-54.5 68 5.6 6.9 16 10 21.5 10 17.9 0 35.7-18 61.1-61.8 25.8-8.5 54.1-19.1 79-23.2 21.7 11.8 47.1 19.5 64 19.5 29.2 0 31.2-32 19.7-43.4-13.9-13.6-54.3-9.7-73.6-7.2zM377 105L279 7c-4.5-4.5-10.6-7-17-7h-6v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-74.1 255.3c4.1-2.7-2.5-11.9-42.8-9 37.1 15.8 42.8 9 42.8 9z"},child:[]}]})(a)}function q5(a){return Ue({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z"},child:[]}]})(a)}function F5(a){return Ue({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M336 448H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm157.2-340.7l-81-81c-6.2-6.2-16.4-6.2-22.6 0l-11.3 11.3c-6.2 6.2-6.2 16.4 0 22.6L416 97.9V160c0 28.1 20.9 51.3 48 55.2V376c0 13.2-10.8 24-24 24s-24-10.8-24-24v-32c0-48.6-39.4-88-88-88h-8V64c0-35.3-28.7-64-64-64H96C60.7 0 32 28.7 32 64v352h288V304h8c22.1 0 40 17.9 40 40v27.8c0 37.7 27 72 64.5 75.9 43 4.3 79.5-29.5 79.5-71.7V152.6c0-17-6.8-33.3-18.8-45.3zM256 192H96V64h160v128z"},child:[]}]})(a)}function Y5(a){return Ue({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M528 32H48C21.5 32 0 53.5 0 80v16h576V80c0-26.5-21.5-48-48-48zM0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V128H0v304zm352-232c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zm0 64c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zm0 64c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zM176 192c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zM67.1 396.2C75.5 370.5 99.6 352 128 352h8.2c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h8.2c28.4 0 52.5 18.5 60.9 44.2 3.2 9.9-5.2 19.8-15.6 19.8H82.7c-10.4 0-18.8-10-15.6-19.8z"},child:[]}]})(a)}function G5(a){return Ue({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z"},child:[]}]})(a)}function V5(a){return Ue({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(a)}function X5(a){return Ue({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"},child:[]}]})(a)}function sx(a){return Ue({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"},child:[]}]})(a)}function Q5(a){return Ue({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 224h192V32H0v192zM64 96h64v64H64V96zm192-64v192h192V32H256zm128 128h-64V96h64v64zM0 480h192V288H0v192zm64-128h64v64H64v-64zm352-64h32v128h-96v-32h-32v96h-64V288h96v32h64v-32zm0 160h32v32h-32v-32zm-64 0h32v32h-32v-32z"},child:[]}]})(a)}function ox(a){return Ue({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M416 320h-96c-17.6 0-32-14.4-32-32s14.4-32 32-32h96s96-107 96-160-43-96-96-96-96 43-96 96c0 25.5 22.2 63.4 45.3 96H320c-52.9 0-96 43.1-96 96s43.1 96 96 96h96c17.6 0 32 14.4 32 32s-14.4 32-32 32H185.5c-16 24.8-33.8 47.7-47.3 64H416c52.9 0 96-43.1 96-96s-43.1-96-96-96zm0-256c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zM96 256c-53 0-96 43-96 96s96 160 96 160 96-107 96-160-43-96-96-96zm0 128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"},child:[]}]})(a)}function Z5(a){return Ue({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(a)}function jc(a){return Ue({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(a)}function rc(a){return Ue({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"},child:[]}]})(a)}function za(a){return Ue({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"},child:[]}]})(a)}function Cg(a){return Ue({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"},child:[]}]})(a)}function P5(a){return Ue({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(a)}function Oi(a){return Ue({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z"},child:[]}]})(a)}const $g=y.div`
  padding: 2rem;
  max-width: 1600px;
  margin: 0 auto;
`,K5=y.div`
  margin-bottom: 2rem;
`,J5=y.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${a=>a.theme.colors.textPrimary};
  margin: 0 0 0.5rem 0;
`,I5=y.p`
  color: ${a=>a.theme.colors.textSecondary};
  margin: 0;
`,W5=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`,ao=y.div`
  background: ${a=>a.$gradient||`linear-gradient(135deg, ${a.theme.colors.primaryGradientStart} 0%, ${a.theme.colors.primaryGradientEnd} 100%)`};
  border-radius: ${a=>a.theme.borderRadius.xl};
  padding: ${a=>a.theme.spacing.lg};
  color: ${a=>a.theme.colors.textInverse};
  position: relative;
  overflow: hidden;
  box-shadow: ${a=>a.theme.colors.shadowMd};
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.08) 0%,
      transparent 70%
    );
  }
`,no=y.div`
  font-size: 2.25rem;
  margin-bottom: 0.5rem;
  opacity: 0.95;
`,An=y.div`
  font-size: 0.875rem;
  opacity: 0.95;
  margin-bottom: 0.25rem;
  color: ${a=>a.theme.colors.textSecondary};
`,ro=y.div`
  font-size: 2rem;
  font-weight: 700;
  color: ${a=>a.theme.colors.textInverse};
`,e3=y.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: ${a=>a.theme.spacing.lg};
  margin-bottom: ${a=>a.theme.spacing.xl};

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`,Tg=y.div`
  background: ${a=>a.theme.colors.surface};
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
`,Ag=y.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${a=>a.theme.colors.textPrimary};
  margin: 0 0 1rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,t3=y.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,a3=y.div`
  padding: 1rem;
  background: ${a=>a.theme.colors.background};
  border-radius: 0.5rem;
  border-left: 4px solid ${a=>a.theme.colors.primary};
`,n3=y.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`,r3=y.div`
  font-weight: 600;
  color: ${a=>a.theme.colors.textPrimary};
`,l3=y.span`
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 600;
  background: ${a=>a.$status==="ongoing"?a.theme.colors.infoLight:a.$status==="completed"?a.theme.colors.successLight:a.theme.colors.warningLight};
  color: ${a=>a.$status==="ongoing"?a.theme.colors.info:a.$status==="completed"?a.theme.colors.success:a.theme.colors.warning};
`,Rg=y.div`
  font-size: 0.875rem;
  color: ${a=>a.theme.colors.textSecondary};
`,i3=y.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,Dg=y.div`
  padding: 1rem;
  background: ${a=>a.theme.colors.warningLight};
  border-radius: 0.5rem;
  display: flex;
  align-items: start;
  gap: 0.75rem;
`,zg=y.div`
  color: ${a=>a.theme.colors.warning};
  font-size: 1.25rem;
  margin-top: 0.125rem;
`,Ng=y.div`
  flex: 1;
`,Mg=y.div`
  font-weight: 600;
  color: ${a=>a.theme.colors.textPrimary};
  margin-bottom: 0.25rem;
`,Jd=y.div`
  font-size: 0.875rem;
  color: ${a=>a.theme.colors.textSecondary};
`,s3=y.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  font-size: 1.2rem;
  color: ${a=>a.theme.colors.textSecondary};
`,o3=y.div`
  padding: 2rem;
  text-align: center;
  color: ${a=>a.theme.colors.danger};
  background: ${a=>a.theme.colors.dangerLight};
  border-radius: 1rem;
`;function c3(){const{theme:a}=fe(),[i,o]=w.useState(null),[s,d]=w.useState(!0),[f,h]=w.useState(null);w.useEffect(()=>{v();const j=setInterval(v,3e4);return()=>clearInterval(j)},[]);const v=async()=>{try{const j=localStorage.getItem("token"),C=await ee.get("http://localhost:5000/api/dashboard/owner",{headers:{Authorization:`Bearer ${j}`}});console.log("Dashboard data:",C.data),o(C.data.data),h(null)}catch(j){console.error("Error fetching dashboard:",j),h(j.response?.data?.message||"Failed to load dashboard data")}finally{d(!1)}};if(s)return r.jsx(s3,{theme:a,children:"Loading dashboard..."});if(f)return r.jsx($g,{children:r.jsxs(o3,{theme:a,children:[r.jsx("h2",{children:"Error Loading Dashboard"}),r.jsx("p",{children:f}),r.jsx("button",{onClick:v,children:"Retry"})]})});const{summary:p,recentTrips:g,alerts:x}=i||{};return r.jsxs($g,{children:[r.jsxs(K5,{children:[r.jsx(J5,{theme:a,children:"Dashboard"}),r.jsx(I5,{theme:a,children:"Welcome back! Here's your fleet overview."})]}),r.jsxs(W5,{children:[r.jsxs(ao,{$gradient:`linear-gradient(135deg, ${a.colors.primary} 0%, ${a.colors.primary} 100%)`,children:[r.jsx(no,{children:r.jsx(za,{})}),r.jsx(An,{children:"Total Trucks"}),r.jsx(ro,{children:p?.totalTrucks||0}),r.jsxs(An,{style:{marginTop:"0.5rem"},children:[p?.activeTrucks||0," Active •"," ",p?.maintenanceTrucks||0," Maintenance"]})]}),r.jsxs(ao,{$gradient:`linear-gradient(135deg, ${a.colors.primary} 0%, ${a.colors.primary} 100%)`,children:[r.jsx(no,{children:r.jsx(Oi,{})}),r.jsx(An,{children:"Total Drivers"}),r.jsx(ro,{children:p?.totalDrivers||0}),r.jsxs(An,{style:{marginTop:"0.5rem"},children:[p?.activeDrivers||0," Active"]})]}),r.jsxs(ao,{$gradient:`linear-gradient(135deg, ${a.colors.primary} 0%, ${a.colors.primary} 100%)`,children:[r.jsx(no,{children:r.jsx(ox,{})}),r.jsx(An,{children:"Total Trips"}),r.jsx(ro,{children:p?.totalTrips||0}),r.jsxs(An,{style:{marginTop:"0.5rem"},children:[p?.ongoingTrips||0," Ongoing •"," ",p?.completedTrips||0," Completed"]})]}),r.jsxs(ao,{$gradient:`linear-gradient(135deg, ${a.colors.primary} 0%, ${a.colors.primary} 100%)`,children:[r.jsx(no,{children:r.jsx(F5,{})}),r.jsx(An,{children:"Total Distance"}),r.jsxs(ro,{children:[(p?.totalDistance||0).toFixed(0)," km"]}),r.jsxs(An,{style:{marginTop:"0.5rem"},children:["Fuel: ",(p?.totalFuelUsed||0).toFixed(0)," L"]})]})]}),r.jsxs(e3,{children:[r.jsxs(Tg,{theme:a,children:[r.jsx(Ag,{theme:a,children:"Recent Trips"}),r.jsx(t3,{children:g&&g.length>0?g.map(j=>r.jsxs(a3,{theme:a,children:[r.jsxs(n3,{children:[r.jsxs(r3,{theme:a,children:[j.source," → ",j.destination]}),r.jsx(l3,{theme:a,$status:j.status,children:j.status})]}),r.jsxs(Rg,{theme:a,children:[j.truckId?.truckNumber||"N/A"," • 👤"," ",j.driverId?.name||"N/A"," •  ",j.distance||0," km"]})]},j._id)):r.jsx(Rg,{theme:a,style:{textAlign:"center",padding:"2rem"},children:"No recent trips"})})]}),r.jsxs(Tg,{theme:a,children:[r.jsx(Ag,{theme:a,children:"Alerts"}),r.jsxs(i3,{children:[x?.expiringTruckDocs&&x.expiringTruckDocs.length>0?x.expiringTruckDocs.map(j=>r.jsxs(Dg,{theme:a,children:[r.jsx(zg,{theme:a,children:r.jsx(jf,{})}),r.jsxs(Ng,{children:[r.jsx(Mg,{theme:a,children:j.truckNumber}),r.jsx(Jd,{theme:a,children:"Document expiring soon"})]})]},j._id)):null,x?.expiringDriverLicenses&&x.expiringDriverLicenses.length>0?x.expiringDriverLicenses.map(j=>r.jsxs(Dg,{theme:a,children:[r.jsx(zg,{theme:a,children:r.jsx(jf,{})}),r.jsxs(Ng,{children:[r.jsx(Mg,{theme:a,children:j.name}),r.jsxs(Jd,{theme:a,children:["License expiring:"," ",new Date(j.licenseExpiryDate).toLocaleDateString()]})]})]},j._id)):null,!x?.expiringTruckDocs?.length&&!x?.expiringDriverLicenses?.length&&r.jsx(Jd,{theme:a,style:{textAlign:"center",padding:"2rem"},children:"No alerts at this time"})]})]})]})]})}const u3=y.div`
  padding: 1.5rem;
  max-width: 1600px;
  margin: 0 auto;
`,d3=y.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
`,f3=y.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${a=>a.theme.colors.textPrimary};
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,h3=y.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`,m3=y.div`
  display: flex;
  align-items: center;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  padding: 0.5rem 0.875rem;
  gap: 0.5rem;
  transition: all 0.2s ease;
  min-width: 250px;

  &:focus-within {
    border-color: #94a3b8;
    box-shadow: 0 0 0 3px rgba(148, 163, 184, 0.1);
  }
`,p3=y.input`
  border: none;
  outline: none;
  font-size: 0.875rem;
  flex: 1;
  background: transparent;
`,g3=y(Ot)`
  padding: 0.5rem 1rem;
  background: #334155;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background: #1e293b;
    transform: translateY(-1px);
    color: white;
  }
`,x3=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
`,lo=y.div`
  background: ${a=>a.$gradient||"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"};
  border-radius: 0.5rem;
  padding: 1rem;
  color: white;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`,io=y.div`
  font-size: 0.75rem;
  opacity: 0.9;
  margin-bottom: 0.25rem;
`,so=y.div`
  font-size: 1.5rem;
  font-weight: 700;
`,v3=y.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  padding: 0.875rem;
  margin-bottom: 1.5rem;
  display: flex;
  gap: 0.75rem;
  align-items: center;
`,y3=y.select`
  padding: 0.5rem 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  background: white;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #94a3b8;
  }
`,b3=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1rem;
`,j3=y.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  overflow: hidden;
  transition: all 0.2s ease;

  &:hover {
    border-color: #cbd5e0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);
  }
`,S3=y.div`
  width: 100%;
  height: 120px;
  background: ${a=>a.$hasImage?`url(${a.$image}) center/cover`:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2.5rem;
  position: relative;
`,w3=y.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: ${a=>a.$status==="active"?"#10b981":a.$status==="maintenance"?"#f59e0b":a.$status==="in-transit"?"#3b82f6":"#64748b"};
  color: white;
  padding: 0.25rem 0.625rem;
  border-radius: 0.25rem;
  font-size: 0.625rem;
  font-weight: 600;
  text-transform: uppercase;
`,E3=y.div`
  padding: 1rem;
`,C3=y.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 0.25rem 0;
`,$3=y.div`
  font-size: 0.75rem;
  color: #64748b;
  margin-bottom: 0.75rem;
`,T3=y.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  margin-bottom: 0.75rem;
`,oo=y.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.7rem;
  color: #475569;
`,A3=y.div`
  background: #fef3c7;
  color: #78350f;
  padding: 0.375rem 0.5rem;
  border-radius: 0.375rem;
  font-size: 0.65rem;
  display: flex;
  align-items: center;
  gap: 0.375rem;
  margin-bottom: 0.75rem;
  border: 1px solid #fde68a;
`,R3=y.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
  padding-top: 0.75rem;
  border-top: 1px solid #f1f5f9;
`,co=y.button`
  padding: 0.5rem 0.25rem;
  border: none;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  transition: all 0.2s ease;
  font-size: 0.7rem;

  ${a=>a.$variant==="view"&&`
    background: #f1f5f9;
    color: #475569;
    &:hover {
      background: #e2e8f0;
    }
  `}

  ${a=>a.$variant==="edit"&&`
    background: #dbeafe;
    color: #1e40af;
    &:hover {
      background: #bfdbfe;
    }
  `}

  ${a=>a.$variant==="assign"&&`
    background: #d1fae5;
    color: #065f46;
    &:hover {
      background: #a7f3d0;
    }
  `}

  ${a=>a.$variant==="delete"&&`
    background: #fee2e2;
    color: #991b1b;
    &:hover {
      background: #fecaca;
    }
  `}
`,D3=y.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,z3=y.div`
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  max-width: 500px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
`,N3=y.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`,M3=y.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0;
`,O3=y.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #64748b;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;

  &:hover {
    color: #1e293b;
  }
`,k3=y.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,L3=y.div`
  padding: 1rem;
  border: 2px solid ${a=>a.$selected?"#667eea":"#e2e8f0"};
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${a=>a.$selected?"#f0f4ff":"white"};

  &:hover {
    border-color: #667eea;
  }
`,_3=y.div`
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.25rem;
`,B3=y.div`
  font-size: 0.875rem;
  color: #64748b;
`,H3=y.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`,Og=y.button`
  flex: 1;
  padding: 0.75rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  ${a=>a.$primary&&`
    background: #334155;
    color: white;
    &:hover {
      background: #1e293b;
    }
  `}

  ${a=>!a.$primary&&`
    background: #f1f5f9;
    color: #475569;
    &:hover {
      background: #e2e8f0;
    }
  `}
`,U3=y.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  font-size: 1rem;
  color: #64748b;
`,q3=y.div`
  text-align: center;
  padding: 3rem 2rem;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
`,F3=y.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  opacity: 0.3;
`;function Y3(){const{theme:a}=fe(),i=Na(),[o,s]=w.useState([]),[d,f]=w.useState([]),[h,v]=w.useState([]),[p,g]=w.useState(!0),[x,j]=w.useState(""),[C,T]=w.useState("all"),[D,S]=w.useState(!1),[E,R]=w.useState(null),[A,L]=w.useState(null);w.useEffect(()=>{V(),q()},[]),w.useEffect(()=>{Y()},[o,x,C]);const V=async()=>{try{g(!0);const Z=localStorage.getItem("token"),ue=await ee.get("http://localhost:5000/api/trucks",{headers:{Authorization:`Bearer ${Z}`}});console.log("Trucks response:",ue.data),s(ue.data.data.trucks)}catch(Z){console.error("Error fetching trucks",Z)}finally{g(!1)}},q=async()=>{try{const Z=localStorage.getItem("token"),ue=await ee.get("http://localhost:5000/api/drivers",{headers:{Authorization:`Bearer ${Z}`}});v(ue.data.data.drivers)}catch(Z){console.error("Error fetching drivers",Z)}},Y=()=>{let Z=o;C!=="all"&&(Z=Z.filter(ue=>ue.status===C)),x&&(Z=Z.filter(ue=>ue.truckNumber.toLowerCase().includes(x.toLowerCase())||ue.modelName.toLowerCase().includes(x.toLowerCase()))),f(Z)},X=Z=>{i(`/trucks/${Z}`)},K=Z=>{i(`/trucks/edit/${Z}`)},J=Z=>{R(Z),L(Z.assignedDriver?._id||null),S(!0)},ce=async()=>{try{const Z=localStorage.getItem("token");await ee.post(`http://localhost:5000/api/trucks/${E._id}/assign-driver`,{driverId:A},{headers:{Authorization:`Bearer ${Z}`}}),S(!1),V(),alert("Driver assigned successfully!")}catch(Z){alert(Z.response?.data?.message||"Failed to assign driver")}},be=async Z=>{if(window.confirm("Are you sure you want to delete this truck?"))try{const ue=localStorage.getItem("token");await ee.delete(`http://localhost:5000/api/trucks/${Z}`,{headers:{Authorization:`Bearer ${ue}`}}),V()}catch{alert("Failed to delete truck")}},Te=Z=>{if(!Z)return!1;const ue=new Date(Z),te=Math.ceil((ue-new Date)/(1e3*60*60*24));return te<=30&&te>=0},Q={total:o.length,active:o.filter(Z=>Z.status==="active").length,inTransit:o.filter(Z=>Z.status==="in-transit").length,maintenance:o.filter(Z=>Z.status==="maintenance").length};return p?r.jsx(U3,{children:"Loading trucks..."}):r.jsxs(u3,{children:[r.jsxs(d3,{children:[r.jsxs(f3,{theme:a,children:[r.jsx(za,{size:20})," Fleet Management"]}),r.jsxs(h3,{children:[r.jsxs(m3,{children:[r.jsx(Z5,{color:"#94a3b8",size:14}),r.jsx(p3,{type:"text",placeholder:"Search trucks...",value:x,onChange:Z=>j(Z.target.value)})]}),r.jsxs(g3,{to:"/trucks/add",children:[r.jsx(sx,{size:14})," Add"]})]})]}),r.jsxs(x3,{children:[r.jsxs(lo,{$gradient:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",children:[r.jsx(io,{children:"Total"}),r.jsx(so,{children:Q.total})]}),r.jsxs(lo,{$gradient:"linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",children:[r.jsx(io,{children:"Active"}),r.jsx(so,{children:Q.active})]}),r.jsxs(lo,{$gradient:"linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",children:[r.jsx(io,{children:"In Transit"}),r.jsx(so,{children:Q.inTransit})]}),r.jsxs(lo,{$gradient:"linear-gradient(135deg, #fa709a 0%, #fee140 100%)",children:[r.jsx(io,{children:"Maintenance"}),r.jsx(so,{children:Q.maintenance})]})]}),r.jsxs(v3,{children:[r.jsx(q5,{color:"#64748b",size:14}),r.jsxs(y3,{value:C,onChange:Z=>T(Z.target.value),children:[r.jsx("option",{value:"all",children:"All Status"}),r.jsx("option",{value:"active",children:"Active"}),r.jsx("option",{value:"in-transit",children:"In Transit"}),r.jsx("option",{value:"maintenance",children:"Maintenance"}),r.jsx("option",{value:"inactive",children:"Inactive"})]})]}),d.length===0?r.jsxs(q3,{children:[r.jsx(F3,{children:"🚛"}),r.jsx("h3",{style:{fontSize:"1.125rem",margin:"0 0 0.5rem 0"},children:"No trucks found"}),r.jsx("p",{style:{fontSize:"0.875rem",color:"#94a3b8",margin:0},children:"Try adjusting your search or filters"})]}):r.jsx(b3,{children:d.map(Z=>r.jsxs(j3,{children:[r.jsxs(S3,{$hasImage:!!Z.truckImage,$image:Z.truckImage?`http://localhost:5000/uploads/${Z.truckImage}`:null,children:[!Z.truckImage&&r.jsx(za,{}),r.jsx(w3,{$status:Z.status,children:Z.status})]}),r.jsxs(E3,{children:[r.jsx(C3,{children:Z.truckNumber}),r.jsxs($3,{children:[Z.modelName," • ",Z.capacity," kg"]}),(Te(Z.pucExpiryDate)||Te(Z.insuranceExpiryDate)||Te(Z.fitnessExpiryDate))&&r.jsxs(A3,{children:[r.jsx(jf,{size:10}),"Expiring soon"]}),r.jsxs(T3,{children:[r.jsxs(oo,{children:[r.jsx(Ia,{color:"#94a3b8",size:10}),"PUC:"," ",Z.pucExpiryDate?new Date(Z.pucExpiryDate).toLocaleDateString("en-US",{month:"short",year:"2-digit"}):"N/A"]}),r.jsxs(oo,{children:[r.jsx(Ia,{color:"#94a3b8",size:10}),"Ins:"," ",Z.insuranceExpiryDate?new Date(Z.insuranceExpiryDate).toLocaleDateString("en-US",{month:"short",year:"2-digit"}):"N/A"]}),Z.assignedDriver?r.jsxs(oo,{children:[r.jsx(dr,{color:"#22c55e",size:10}),Z.assignedDriver.name]}):r.jsx(oo,{style:{color:"#94a3b8"},children:"No driver assigned"})]}),r.jsxs(R3,{children:[r.jsx(co,{$variant:"view",onClick:()=>X(Z._id),children:r.jsx(U5,{size:12})}),r.jsx(co,{$variant:"edit",onClick:()=>K(Z._id),children:r.jsx(Bf,{size:12})}),r.jsx(co,{$variant:"assign",onClick:()=>J(Z),children:r.jsx(P5,{size:12})}),r.jsx(co,{$variant:"delete",onClick:()=>be(Z._id),children:r.jsx(rc,{size:12})})]})]})]},Z._id))}),D&&r.jsx(D3,{onClick:()=>S(!1),children:r.jsxs(z3,{onClick:Z=>Z.stopPropagation(),children:[r.jsxs(N3,{children:[r.jsxs(M3,{children:["Assign Driver to ",E?.truckNumber]}),r.jsx(O3,{onClick:()=>S(!1),children:r.jsx(jc,{})})]}),r.jsx(k3,{children:h.length===0?r.jsx("p",{children:"No drivers available"}):h.map(Z=>r.jsxs(L3,{$selected:A===Z._id,onClick:()=>L(Z._id),children:[r.jsx(_3,{children:Z.name}),r.jsx(B3,{children:Z.assignedTruck&&Z.assignedTruck._id!==E?._id&&r.jsxs("span",{style:{color:"#f59e0b"},children:[" ","• Already assigned"]})})]},Z._id))}),r.jsxs(H3,{children:[r.jsx(Og,{onClick:()=>S(!1),children:"Cancel"}),r.jsx(Og,{$primary:!0,onClick:ce,disabled:!A,children:"Assign Driver"})]})]})})]})}const G3=y.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  animation: fadeIn 0.5s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,V3=y.div`
  margin-bottom: 2rem;
  text-align: center;
`,X3=y.h1`
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`,Q3=y.p`
  color: #64748b;
  font-size: 1.1rem;
`,Z3=y.div`
  background: white;
  border-radius: 1.5rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  padding: 3rem;
  margin-bottom: 2rem;
`,kg=y.div`
  padding: 1rem 1.5rem;
  border-radius: 1rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 500;
  animation: slideIn 0.3s ease-out;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  ${a=>a.$variant==="success"&&`
    background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
    color: #065f46;
    border: 2px solid #10b981;
  `}

  ${a=>a.$variant==="error"&&`
    background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
    color: #991b1b;
    border: 2px solid #ef4444;
  `}
`,P3=y.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,uo=y.div`
  background: #f8fafc;
  border-radius: 1rem;
  padding: 2rem;
  border: 2px solid #e2e8f0;
`,fo=y.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #334155;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: "";
    width: 4px;
    height: 24px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 2px;
  }
`,ho=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`,bt=y.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,jt=y.label`
  font-weight: 600;
  color: #475569;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,Ct=y.input`
  padding: 0.875rem 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 0.75rem;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: white;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
  }

  &:hover {
    border-color: #cbd5e0;
  }
`,K3=y.div`
  position: relative;
`,J3=y.input`
  display: none;
`,I3=y.label`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 0.875rem 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 0.75rem;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`,W3=y.div`
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  background: #f1f5f9;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  color: #475569;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,e6=y.button`
  background: none;
  border: none;
  color: #ef4444;
  cursor: pointer;
  padding: 0.25rem;
  display: flex;
  align-items: center;

  &:hover {
    color: #dc2626;
  }
`,t6=y.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`,a6=y.img`
  max-width: 300px;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  border: 4px solid white;
`,n6=y.button`
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 0.75rem;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
  margin-top: 1rem;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(102, 126, 234, 0.5);
  }

  &:active {
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,r6=y.div`
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border-radius: 1.5rem;
  padding: 2rem;
  text-align: center;
  border: 2px solid #bae6fd;
`,l6=y.h4`
  font-size: 1.25rem;
  font-weight: 600;
  color: #0c4a6e;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`,i6=y.img`
  width: 250px;
  height: 250px;
  margin: 0 auto;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  background: white;
  padding: 1rem;
`,s6=y.button`
  margin-top: 1.5rem;
  padding: 0.875rem 2rem;
  background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
  color: white;
  border: none;
  border-radius: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(14, 165, 233, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(14, 165, 233, 0.4);
  }
`;function o6(){const{theme:a}=fe(),[i,o]=w.useState({truckNumber:"",modelName:"",capacity:"",pucNumber:"",permitAllIndiaNumber:"",permitGujaratNumber:"",insuranceNumber:"",fitnessNumber:"",rcNumber:"",pucExpiryDate:"",permitAllIndiaExpiryDate:"",permitGujaratExpiryDate:"",insuranceExpiryDate:"",fitnessExpiryDate:"",rcExpiryDate:""}),[s,d]=w.useState({}),[f,h]=w.useState({}),[v,p]=w.useState(null),[g,x]=w.useState(null),[j,C]=w.useState(""),[T,D]=w.useState(""),[S,E]=w.useState(!1),R=new Date().toISOString().split("T")[0];w.useEffect(()=>{if(j||T){const X=setTimeout(()=>{C(""),D("")},5e3);return()=>clearTimeout(X)}},[j,T]);const A=X=>{o({...i,[X.target.name]:X.target.value})},L=X=>{const K=X.target.files[0],J=X.target.name;if(K&&(d({...s,[J]:K}),h({...f,[J]:K.name}),J==="truckImage")){const ce=URL.createObjectURL(K);p(ce)}},V=X=>{const K={...s},J={...f};delete K[X],delete J[X],d(K),h(J),X==="truckImage"&&p(null)},q=async X=>{X.preventDefault(),E(!0),D("");try{const K=localStorage.getItem("token"),J=new FormData;Object.entries(i).forEach(([be,Te])=>{Te&&J.append(be,Te)}),Object.entries(s).forEach(([be,Te])=>{Te&&J.append(be,Te)});const ce=await ee.post("http://localhost:5000/api/trucks",J,{headers:{"Content-Type":"multipart/form-data",Authorization:`Bearer ${K}`}});C("🎉 Truck added successfully!"),x(ce.data.data?.truck?.qrCode||null),o({truckNumber:"",modelName:"",capacity:"",pucNumber:"",permitAllIndiaNumber:"",permitGujaratNumber:"",insuranceNumber:"",fitnessNumber:"",rcNumber:"",pucExpiryDate:"",permitAllIndiaExpiryDate:"",permitGujaratExpiryDate:"",insuranceExpiryDate:"",fitnessExpiryDate:"",rcExpiryDate:""}),d({}),h({}),p(null),window.scrollTo({top:0,behavior:"smooth"})}catch(K){D(K.response?.data?.message||"Error adding truck. Please try again."),window.scrollTo({top:0,behavior:"smooth"})}finally{E(!1)}},Y=()=>{const X=document.createElement("a");X.href=g,X.download=`${i.truckNumber||"truck"}-QR.png`,X.click()};return r.jsxs(G3,{children:[r.jsxs(V3,{children:[r.jsxs(X3,{children:[r.jsx(za,{})," Add New Truck"]}),r.jsx(Q3,{children:"Register a new truck in your fleet"})]}),r.jsxs(Z3,{children:[j&&r.jsxs(kg,{$variant:"success",children:[r.jsx(dr,{size:20}),j]}),T&&r.jsxs(kg,{$variant:"error",children:[r.jsx(bc,{size:20}),T]}),r.jsxs(P3,{onSubmit:q,children:[r.jsxs(uo,{children:[r.jsxs(fo,{children:[r.jsx(za,{})," Basic Information"]}),r.jsxs(ho,{children:[r.jsxs(bt,{children:[r.jsxs(jt,{children:[r.jsx(za,{})," Truck Number *"]}),r.jsx(Ct,{type:"text",name:"truckNumber",value:i.truckNumber,onChange:A,placeholder:"e.g., GJ01AB1234",required:!0})]}),r.jsxs(bt,{children:[r.jsxs(jt,{children:[r.jsx(za,{})," Model Name *"]}),r.jsx(Ct,{type:"text",name:"modelName",value:i.modelName,onChange:A,placeholder:"e.g., Tata 4018",required:!0})]}),r.jsxs(bt,{children:[r.jsxs(jt,{children:[r.jsx(za,{})," Capacity (kg) *"]}),r.jsx(Ct,{type:"number",name:"capacity",value:i.capacity,onChange:A,placeholder:"e.g., 18000",required:!0})]})]})]}),r.jsxs(uo,{children:[r.jsxs(fo,{children:[r.jsx(ar,{})," Document Numbers"]}),r.jsxs(ho,{children:[r.jsxs(bt,{children:[r.jsx(jt,{children:"PUC Number"}),r.jsx(Ct,{type:"text",name:"pucNumber",value:i.pucNumber,onChange:A,placeholder:"PUC Certificate Number"})]}),r.jsxs(bt,{children:[r.jsx(jt,{children:"All India Permit Number"}),r.jsx(Ct,{type:"text",name:"permitAllIndiaNumber",value:i.permitAllIndiaNumber,onChange:A,placeholder:"All India Permit Number"})]}),r.jsxs(bt,{children:[r.jsx(jt,{children:"Gujarat Permit Number"}),r.jsx(Ct,{type:"text",name:"permitGujaratNumber",value:i.permitGujaratNumber,onChange:A,placeholder:"Gujarat Permit Number"})]}),r.jsxs(bt,{children:[r.jsx(jt,{children:"Insurance Number"}),r.jsx(Ct,{type:"text",name:"insuranceNumber",value:i.insuranceNumber,onChange:A,placeholder:"Insurance Policy Number"})]}),r.jsxs(bt,{children:[r.jsx(jt,{children:"Fitness Number"}),r.jsx(Ct,{type:"text",name:"fitnessNumber",value:i.fitnessNumber,onChange:A,placeholder:"Fitness Certificate Number"})]}),r.jsxs(bt,{children:[r.jsx(jt,{children:"RC Number"}),r.jsx(Ct,{type:"text",name:"rcNumber",value:i.rcNumber,onChange:A,placeholder:"Registration Certificate Number"})]})]})]}),r.jsxs(uo,{children:[r.jsxs(fo,{children:[r.jsx(Ia,{})," Expiry Dates"]}),r.jsxs(ho,{children:[r.jsxs(bt,{children:[r.jsxs(jt,{children:[r.jsx(Ia,{})," PUC Expiry"]}),r.jsx(Ct,{type:"date",name:"pucExpiryDate",value:i.pucExpiryDate,onChange:A,min:R})]}),r.jsxs(bt,{children:[r.jsxs(jt,{children:[r.jsx(Ia,{})," All India Permit Expiry"]}),r.jsx(Ct,{type:"date",name:"permitAllIndiaExpiryDate",value:i.permitAllIndiaExpiryDate,onChange:A,min:R})]}),r.jsxs(bt,{children:[r.jsxs(jt,{children:[r.jsx(Ia,{})," Gujarat Permit Expiry"]}),r.jsx(Ct,{type:"date",name:"permitGujaratExpiryDate",value:i.permitGujaratExpiryDate,onChange:A,min:R})]}),r.jsxs(bt,{children:[r.jsxs(jt,{children:[r.jsx(Ia,{})," Insurance Expiry"]}),r.jsx(Ct,{type:"date",name:"insuranceExpiryDate",value:i.insuranceExpiryDate,onChange:A,min:R})]}),r.jsxs(bt,{children:[r.jsxs(jt,{children:[r.jsx(Ia,{})," Fitness Expiry"]}),r.jsx(Ct,{type:"date",name:"fitnessExpiryDate",value:i.fitnessExpiryDate,onChange:A,min:R})]}),r.jsxs(bt,{children:[r.jsxs(jt,{children:[r.jsx(Ia,{})," RC Expiry"]}),r.jsx(Ct,{type:"date",name:"rcExpiryDate",value:i.rcExpiryDate,onChange:A,min:R})]})]})]}),r.jsxs(uo,{children:[r.jsxs(fo,{children:[r.jsx(Cg,{})," Upload Documents"]}),r.jsx(ho,{children:[{label:"PUC File",name:"pucFile",icon:r.jsx(ar,{}),accept:"application/pdf"},{label:"All India Permit",name:"permitAllIndiaFile",icon:r.jsx(ar,{}),accept:"application/pdf"},{label:"Gujarat Permit",name:"permitGujaratFile",icon:r.jsx(ar,{}),accept:"application/pdf"},{label:"Insurance",name:"insuranceFile",icon:r.jsx(ar,{}),accept:"application/pdf"},{label:"Fitness",name:"fitnessFile",icon:r.jsx(ar,{}),accept:"application/pdf"},{label:"RC Document",name:"rcFile",icon:r.jsx(ar,{}),accept:"application/pdf"},{label:"Truck Photo",name:"truckImage",icon:r.jsx(G5,{}),accept:"image/*"}].map(({label:X,name:K,icon:J,accept:ce})=>r.jsxs(bt,{children:[r.jsxs(jt,{children:[J," ",X]}),r.jsxs(K3,{children:[r.jsx(J3,{type:"file",id:K,name:K,onChange:L,accept:ce}),r.jsxs(I3,{htmlFor:K,children:[r.jsx(Cg,{})," Choose File"]}),f[K]&&r.jsxs(W3,{children:[r.jsx("span",{children:f[K]}),r.jsx(e6,{type:"button",onClick:()=>V(K),children:r.jsx(jc,{})})]})]})]},K))}),v&&r.jsx(t6,{children:r.jsx(a6,{src:v,alt:"Truck Preview"})})]}),r.jsxs(n6,{type:"submit",disabled:S,children:[r.jsx(za,{}),S?"Adding Truck...":"Add Truck"]})]})]}),g&&r.jsxs(r6,{children:[r.jsxs(l6,{children:[r.jsx(Q5,{size:24}),"QR Code Generated Successfully!"]}),r.jsx(i6,{src:g,alt:"QR Code"}),r.jsxs(s6,{onClick:Y,children:[r.jsx(B5,{}),"Download QR Code"]})]})]})}const Wa=ee.create({baseURL:"http://localhost:5000"});Wa.interceptors.request.use(a=>{const i=localStorage.getItem("token");return i&&(a.headers.Authorization=`Bearer ${i}`),a},a=>Promise.reject(a));function c6(){const[a,i]=w.useState([]),[o,s]=w.useState([]),[d,f]=w.useState(""),[h,v]=w.useState(1),[p]=w.useState(10),[g,x]=w.useState(!1),[j,C]=w.useState({type:"",text:""}),[T,D]=w.useState(null),[S,E]=w.useState({name:"",phone:"",email:"",licenseNumber:"",experienceYears:0,assignedTruck:"",address:""}),[R,A]=w.useState(null),L=async()=>{x(!0);try{const M=await Wa.get("/api/drivers");i(M.data?.data?.drivers||[])}catch(M){console.error("Error fetching drivers:",M),C({type:"error",text:"Error fetching drivers."})}finally{x(!1)}},V=async()=>{try{const M=await Wa.get("/api/trucks");s(M.data?.data?.trucks||[])}catch(M){console.error("Error fetching trucks:",M),C({type:"error",text:"Error fetching trucks."})}};w.useEffect(()=>{L(),V()},[]);const q=a.filter(M=>{const te=d.trim().toLowerCase();return te?M.name?.toLowerCase().includes(te)||M.email?.toLowerCase().includes(te)||M.phone?.toLowerCase().includes(te)||M.licenseNumber?.toLowerCase().includes(te)||M.assignedTruck?.truckNumber?.toLowerCase().includes(te):!0}),Y=h*p,X=Y-p,K=q.slice(X,Y),J=M=>v(M),ce=M=>{D(M._id),E({name:M.name||"",phone:M.phone||"",email:M.email||"",licenseNumber:M.licenseNumber||"",experienceYears:M.experienceYears||0,assignedTruck:M.assignedTruck?._id||"",address:M.address||""})},be=M=>{const{name:te,value:re}=M.target;E(je=>({...je,[te]:re}))},Te=async()=>{try{if(!S.name?.trim()||!S.phone?.trim()||!S.email?.trim()||!S.licenseNumber?.trim()){C({type:"error",text:"Name, phone, email and license number are required."});return}const M=a.find(re=>re._id===T)||{},te={};Object.keys(S).forEach(re=>{S[re]!==(M[re]||(re==="assignedTruck"?M.assignedTruck?._id:""))&&(te[re]=S[re])}),te.assignedTruck===""&&(te.assignedTruck=null),te.experienceYears!==void 0&&(te.experienceYears=Number(te.experienceYears)||0),console.log("Sending update payload:",te),await Wa.put(`/api/drivers/${T}`,te),D(null),C({type:"success",text:"Driver updated successfully."}),L()}catch(M){console.error("Error updating driver:",M),C({type:"error",text:M.response?.data?.message||"Failed to update driver."})}finally{setTimeout(()=>C({type:"",text:""}),3e3)}},Q=()=>{D(null)},Z=M=>A(M),ue=async()=>{try{await Wa.delete(`/api/drivers/${R}`),C({type:"success",text:"Driver deleted successfully."}),L()}catch(M){console.error("Error deleting driver:",M),C({type:"error",text:"Failed to delete driver."})}finally{A(null),setTimeout(()=>C({type:"",text:""}),3e3)}};return r.jsxs("div",{className:"drivers-container",children:[r.jsxs("div",{className:"drivers-header",children:[r.jsxs("h2",{children:[r.jsx(Oi,{style:{marginRight:8}})," Drivers"]}),r.jsx("div",{className:"drivers-actions",children:r.jsxs(Ot,{to:"/add-driver",className:"drivers-btn drivers-btn-add",children:[r.jsx(sx,{style:{marginRight:4}})," Add Driver"]})})]}),j.text&&r.jsxs("div",{className:`drivers-alert ${j.type==="success"?"drivers-alert-success":"drivers-alert-error"}`,children:[j.type==="success"?r.jsx(dr,{style:{marginRight:6}}):r.jsx(bc,{style:{marginRight:6}}),j.text]}),r.jsx("input",{type:"text",className:"drivers-search-input",placeholder:" Search by name, email, phone, or license number",value:d,onChange:M=>f(M.target.value)}),r.jsx("div",{className:"drivers-table-wrapper",children:r.jsxs("table",{className:"drivers-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"No."}),r.jsx("th",{children:"Name"}),r.jsx("th",{children:"Phone"}),r.jsx("th",{children:"Email"}),r.jsx("th",{children:"License No."}),r.jsx("th",{children:"Experience"}),r.jsx("th",{children:"Assigned Truck"}),r.jsx("th",{children:"Actions"})]})}),r.jsx("tbody",{children:g?r.jsx("tr",{children:r.jsx("td",{colSpan:8,style:{textAlign:"center"},children:"Loading..."})}):K.length===0?r.jsx("tr",{children:r.jsx("td",{colSpan:8,style:{textAlign:"center"},children:"No drivers found"})}):K.map((M,te)=>r.jsxs("tr",{children:[r.jsx("td",{children:X+te+1}),r.jsx("td",{children:T===M._id?r.jsx("input",{type:"text",name:"name",className:"drivers-edit-input",value:S.name,onChange:be,required:!0}):M.name}),r.jsx("td",{children:T===M._id?r.jsx("input",{type:"text",name:"phone",className:"drivers-edit-input",value:S.phone,onChange:be,required:!0}):M.phone}),r.jsx("td",{children:T===M._id?r.jsx("input",{type:"email",name:"email",className:"drivers-edit-input",value:S.email,onChange:be,required:!0}):M.email}),r.jsx("td",{children:T===M._id?r.jsx("input",{type:"text",name:"licenseNumber",className:"drivers-edit-input",value:S.licenseNumber,onChange:be,required:!0}):M.licenseNumber}),r.jsx("td",{children:T===M._id?r.jsx("input",{type:"number",name:"experienceYears",className:"drivers-edit-input",value:S.experienceYears,onChange:be,min:"0",max:"50"}):`${M.experienceYears||0} years`}),r.jsx("td",{children:T===M._id?r.jsxs("select",{name:"assignedTruck",className:"drivers-edit-input",value:S.assignedTruck,onChange:be,children:[r.jsx("option",{value:"",children:"-- Select --"}),o.map(re=>r.jsx("option",{value:re._id,children:re.truckNumber},re._id))]}):M.assignedTruck?.truckNumber||"N/A"}),r.jsx("td",{style:{textAlign:"center",whiteSpace:"nowrap"},children:T===M._id?r.jsxs("div",{style:{display:"flex",gap:"4px",justifyContent:"center"},children:[r.jsxs("button",{className:"drivers-btn drivers-btn-save",onClick:Te,children:[r.jsx(dr,{style:{marginRight:4}})," Save"]}),r.jsxs("button",{className:"drivers-btn drivers-btn-cancel",onClick:Q,children:[r.jsx(jc,{style:{marginRight:4}})," Cancel"]})]}):r.jsxs("div",{style:{display:"flex",gap:"6px",justifyContent:"center"},children:[r.jsx("button",{className:"drivers-btn drivers-btn-edit",onClick:()=>ce(M),children:r.jsx(Bf,{})}),r.jsx("button",{className:"drivers-btn drivers-btn-delete",onClick:()=>Z(M._id),children:r.jsx(rc,{})})]})})]},M._id))})]})}),q.length>p&&r.jsxs("div",{className:"drivers-pagination",children:[r.jsx("button",{className:"drivers-page-btn",disabled:h===1,onClick:()=>J(h-1),children:r.jsx(L5,{})}),r.jsxs("span",{className:"drivers-page-indicator",children:["Page ",h," of"," ",Math.ceil(q.length/p)]}),r.jsx("button",{className:"drivers-page-btn",disabled:Y>=q.length,onClick:()=>J(h+1),children:r.jsx(_5,{})})]}),R&&r.jsx("div",{className:"drivers-modal-overlay",onClick:()=>A(null),children:r.jsxs("div",{className:"drivers-modal",onClick:M=>M.stopPropagation(),children:[r.jsx("h3",{style:{margin:"0 0 1rem 0",fontSize:"1.25rem",fontWeight:600,color:"#1e293b"},children:"Delete Driver"}),r.jsx("p",{style:{margin:"0 0 1.5rem 0",fontSize:"0.9375rem",color:"#475569",lineHeight:"1.5"},children:"Are you sure you want to delete this driver? This action cannot be undone."}),r.jsxs("div",{className:"drivers-modal-actions",style:{display:"flex",gap:"0.75rem",justifyContent:"flex-end",marginTop:"1.5rem"},children:[r.jsx("button",{className:"drivers-btn drivers-btn-cancel",onClick:()=>A(null),style:{padding:"0.625rem 1.25rem",fontSize:"0.875rem",fontWeight:500},children:"Cancel"}),r.jsxs("button",{className:"drivers-btn drivers-btn-delete",onClick:ue,style:{padding:"0.625rem 1.25rem",fontSize:"0.875rem",fontWeight:500,display:"flex",alignItems:"center",gap:"0.5rem"},children:[r.jsx(rc,{})," Yes, Delete"]})]})]})})]})}const u6=y.div`
  padding: 1.5rem;
  max-width: 900px;
  margin: 0 auto;
`,d6=y.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,f6=y.button`
  padding: 0.5rem;
  background: #f1f5f9;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: #e2e8f0;
  }
`,h6=y.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,m6=y.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
`,p6=y.div`
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.875rem;

  ${a=>a.$variant==="success"&&`
    background: #d1fae5;
    color: #065f46;
    border: 1px solid #a7f3d0;
  `}

  ${a=>a.$variant==="error"&&`
    background: #fee2e2;
    color: #991b1b;
    border: 1px solid #fca5a5;
  `}
`,g6=y.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Id=y.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Wd=y.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #475569;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Lg=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
`,Rn=y.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Dn=y.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: #475569;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,yi=y.span`
  color: #ef4444;
`,Ir=y.input`
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  transition: all 0.2s ease;
  background: white;

  &:focus {
    outline: none;
    border-color: #94a3b8;
    box-shadow: 0 0 0 3px rgba(148, 163, 184, 0.1);
  }

  &:disabled {
    background: #f8fafc;
    cursor: not-allowed;
  }
`,x6=y.select`
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  transition: all 0.2s ease;
  background: white;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #94a3b8;
    box-shadow: 0 0 0 3px rgba(148, 163, 184, 0.1);
  }
`,v6=y.textarea`
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  transition: all 0.2s ease;
  background: white;
  resize: vertical;
  min-height: 100px;

  &:focus {
    outline: none;
    border-color: #94a3b8;
    box-shadow: 0 0 0 3px rgba(148, 163, 184, 0.1);
  }
`,y6=y.div`
  display: flex;
  gap: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #e2e8f0;
`,_g=y.button`
  flex: 1;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  ${a=>a.$variant==="primary"&&`
    background: #334155;
    color: white;
    &:hover {
      background: #1e293b;
    }
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  `}

  ${a=>a.$variant==="secondary"&&`
    background: #f1f5f9;
    color: #475569;
    &:hover {
      background: #e2e8f0;
    }
  `}
`;function b6(){const{theme:a}=fe(),i=Na(),[o,s]=w.useState(!1),[d,f]=w.useState([]),[h,v]=w.useState({type:"",text:""}),[p,g]=w.useState({name:"",phone:"",email:"",password:"",licenseNumber:"",experienceYears:0,assignedTruck:"",address:""});w.useEffect(()=>{x()},[]);const x=async()=>{try{const T=localStorage.getItem("token"),D=await ee.get("http://localhost:5000/api/trucks",{headers:{Authorization:`Bearer ${T}`}});f(D.data.data.trucks)}catch(T){console.error("Error fetching trucks:",T)}},j=T=>{const{name:D,value:S}=T.target;g(E=>({...E,[D]:S}))},C=async T=>{T.preventDefault(),s(!0),v({type:"",text:""});try{const D=localStorage.getItem("token"),S={...p,experienceYears:Number(p.experienceYears)||0,assignedTruck:p.assignedTruck||null};await ee.post("http://localhost:5000/api/drivers",S,{headers:{Authorization:`Bearer ${D}`}}),v({type:"success",text:"Driver added successfully!"}),g({name:"",phone:"",email:"",password:"",licenseNumber:"",experienceYears:0,assignedTruck:"",address:""}),setTimeout(()=>{i("/drivers")},2e3)}catch(D){v({type:"error",text:D.response?.data?.message||"Failed to add driver. Please try again."})}finally{s(!1)}};return r.jsxs(u6,{children:[r.jsxs(d6,{children:[r.jsx(f6,{onClick:()=>i("/drivers"),children:r.jsx(ix,{})}),r.jsxs(h6,{children:[r.jsx(Oi,{})," Add New Driver"]})]}),r.jsxs(m6,{children:[h.text&&r.jsxs(p6,{$variant:h.type,children:[h.type==="success"?r.jsx(dr,{}):r.jsx(bc,{}),h.text]}),r.jsxs(g6,{onSubmit:C,children:[r.jsxs(Id,{children:[r.jsxs(Wd,{children:[r.jsx(Oi,{})," Personal Information"]}),r.jsxs(Lg,{children:[r.jsxs(Rn,{children:[r.jsxs(Dn,{children:["Full Name ",r.jsx(yi,{children:"*"})]}),r.jsx(Ir,{type:"text",name:"name",value:p.name,onChange:j,placeholder:"Enter driver name",required:!0})]}),r.jsxs(Rn,{children:[r.jsxs(Dn,{children:[r.jsx(X5,{})," Phone Number ",r.jsx(yi,{children:"*"})]}),r.jsx(Ir,{type:"tel",name:"phone",value:p.phone,onChange:j,placeholder:"10-digit number",pattern:"[0-9]{10}",required:!0})]}),r.jsxs(Rn,{children:[r.jsxs(Dn,{children:[r.jsx(H5,{})," Email ",r.jsx(yi,{children:"*"})]}),r.jsx(Ir,{type:"email",name:"email",value:p.email,onChange:j,placeholder:"driver@example.com",required:!0})]}),r.jsxs(Rn,{children:[r.jsxs(Dn,{children:["Password ",r.jsx(yi,{children:"*"})]}),r.jsx(Ir,{type:"password",name:"password",value:p.password,onChange:j,placeholder:"Enter password",minLength:"6",required:!0})]})]})]}),r.jsxs(Id,{children:[r.jsxs(Wd,{children:[r.jsx(Y5,{})," License & Experience"]}),r.jsxs(Lg,{children:[r.jsxs(Rn,{children:[r.jsxs(Dn,{children:["License Number ",r.jsx(yi,{children:"*"})]}),r.jsx(Ir,{type:"text",name:"licenseNumber",value:p.licenseNumber,onChange:j,placeholder:"e.g., DL-123456789",required:!0})]}),r.jsxs(Rn,{children:[r.jsx(Dn,{children:"Experience (Years)"}),r.jsx(Ir,{type:"number",name:"experienceYears",value:p.experienceYears,onChange:j,placeholder:"0",min:"0",max:"50"})]}),r.jsxs(Rn,{style:{gridColumn:"span 2"},children:[r.jsxs(Dn,{children:[r.jsx(za,{})," Assign Truck (Optional)"]}),r.jsxs(x6,{name:"assignedTruck",value:p.assignedTruck,onChange:j,children:[r.jsx("option",{value:"",children:"-- Select Truck --"}),d.map(T=>r.jsxs("option",{value:T._id,children:[T.truckNumber," - ",T.modelName,T.assignedDriver&&" (Already Assigned)"]},T._id))]})]})]})]}),r.jsxs(Id,{children:[r.jsxs(Wd,{children:[r.jsx(V5,{})," Address"]}),r.jsxs(Rn,{children:[r.jsx(Dn,{children:"Full Address"}),r.jsx(v6,{name:"address",value:p.address,onChange:j,placeholder:"Enter complete address"})]})]}),r.jsxs(y6,{children:[r.jsx(_g,{type:"button",$variant:"secondary",onClick:()=>i("/drivers"),children:"Cancel"}),r.jsx(_g,{type:"submit",$variant:"primary",disabled:o,children:o?"Adding Driver...":"Add Driver"})]})]})]})]})}const j6=y.div`
  padding: 2rem;
  max-width: 1600px;
  margin: 0 auto;
`,S6=y.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
`,w6=y.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${a=>a.theme.colors.textPrimary};
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,E6=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`,mo=y.div`
  background: ${a=>a.$gradient||"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"};
  border-radius: 1rem;
  padding: 1.5rem;
  color: white;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`,po=y.div`
  font-size: 0.875rem;
  opacity: 0.9;
  margin-bottom: 0.25rem;
`,go=y.div`
  font-size: 2rem;
  font-weight: 700;
`,C6=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
  background: white;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
`,Bg=y.input`
  padding: 0.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`,$6=y.select`
  padding: 0.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: white;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`,Hg=y.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  ${a=>a.$variant==="primary"&&`
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
    }
  `}

  ${a=>a.$variant==="success"&&`
    background: #10b981;
    color: white;

    &:hover {
      background: #059669;
    }
  `}

  ${a=>a.$variant==="danger"&&`
    background: #ef4444;
    color: white;

    &:hover {
      background: #dc2626;
    }
  `}
`,T6=y.table`
  width: 100%;
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
`,zn=y.th`
  padding: 1rem;
  text-align: left;
  background: #f8fafc;
  color: #64748b;
  font-weight: 600;
  font-size: 0.875rem;
  text-transform: uppercase;
`,Nn=y.td`
  padding: 1rem;
  border-top: 1px solid #e2e8f0;
  color: #334155;
`,A6=y.span`
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 600;
  ${a=>a.$status==="ongoing"?"background: #dbeafe; color: #1e40af;":a.$status==="completed"?"background: #d1fae5; color: #065f46;":a.$status==="cancelled"?"background: #fee2e2; color: #991b1b;":""}
`,R6=y.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  font-size: 1.2rem;
  color: #64748b;
`,D6=y.div`
  text-align: center;
  padding: 4rem 2rem;
  color: #64748b;
`;function z6(){const{theme:a}=fe(),[i,o]=w.useState([]),[s,d]=w.useState(null),[f,h]=w.useState(!0),[v,p]=w.useState(null),[g,x]=w.useState({status:"",startDate:"",endDate:""});w.useEffect(()=>{j(),C()},[g]);const j=async()=>{try{h(!0);const S=localStorage.getItem("token"),E=new URLSearchParams;g.status&&E.append("status",g.status),g.startDate&&E.append("startDate",g.startDate),g.endDate&&E.append("endDate",g.endDate);const R=await ee.get(`http://localhost:5000/api/trips?${E}`,{headers:{Authorization:`Bearer ${S}`}});o(R.data.data.trips),p(null)}catch(S){console.error("Error fetching trips:",S),p(S.response?.data?.message||"Failed to fetch trips")}finally{h(!1)}},C=async()=>{try{const S=localStorage.getItem("token"),E=new URLSearchParams;g.startDate&&E.append("startDate",g.startDate),g.endDate&&E.append("endDate",g.endDate);const R=await ee.get(`http://localhost:5000/api/trips/stats?${E}`,{headers:{Authorization:`Bearer ${S}`}});d(R.data.data.stats)}catch(S){console.error("Failed to fetch stats:",S)}},T=(S,E)=>{x(R=>({...R,[S]:E}))},D=async S=>{if(window.confirm("Are you sure you want to delete this trip?"))try{const E=localStorage.getItem("token");await ee.delete(`http://localhost:5000/api/trips/${S}`,{headers:{Authorization:`Bearer ${E}`}}),j(),C()}catch(E){alert(E.response?.data?.message||"Failed to delete trip")}};return f?r.jsx(R6,{children:"Loading trips..."}):r.jsxs(j6,{children:[r.jsx(S6,{children:r.jsxs(w6,{theme:a,children:[r.jsx(ox,{})," Trips Management"]})}),v&&r.jsx("div",{style:{background:"#fee2e2",color:"#991b1b",padding:"1rem",borderRadius:"0.5rem",marginBottom:"2rem"},children:v}),s&&r.jsxs(E6,{children:[r.jsxs(mo,{$gradient:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",children:[r.jsx(po,{children:"Total Trips"}),r.jsx(go,{children:s.totalTrips})]}),r.jsxs(mo,{$gradient:"linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",children:[r.jsx(po,{children:"Ongoing"}),r.jsx(go,{children:s.ongoingTrips})]}),r.jsxs(mo,{$gradient:"linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",children:[r.jsx(po,{children:"Completed"}),r.jsx(go,{children:s.completedTrips})]}),r.jsxs(mo,{$gradient:"linear-gradient(135deg, #fa709a 0%, #fee140 100%)",children:[r.jsx(po,{children:"Total Distance"}),r.jsxs(go,{children:[(s.totalDistance||0).toFixed(0)," km"]})]})]}),r.jsxs(C6,{children:[r.jsxs($6,{value:g.status,onChange:S=>T("status",S.target.value),children:[r.jsx("option",{value:"",children:"All Status"}),r.jsx("option",{value:"ongoing",children:"Ongoing"}),r.jsx("option",{value:"completed",children:"Completed"}),r.jsx("option",{value:"cancelled",children:"Cancelled"})]}),r.jsx(Bg,{type:"date",value:g.startDate,onChange:S=>T("startDate",S.target.value),placeholder:"Start Date"}),r.jsx(Bg,{type:"date",value:g.endDate,onChange:S=>T("endDate",S.target.value),placeholder:"End Date"}),r.jsx(Hg,{$variant:"primary",onClick:()=>x({status:"",startDate:"",endDate:""}),children:"Clear Filters"})]}),i.length===0?r.jsxs(D6,{children:[r.jsx("h3",{children:"No trips found"}),r.jsx("p",{children:"There are no trips matching your filters."})]}):r.jsxs(T6,{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx(zn,{children:"#"}),r.jsx(zn,{children:"Date"}),r.jsx(zn,{children:"Truck"}),r.jsx(zn,{children:"Driver"}),r.jsx(zn,{children:"Route"}),r.jsx(zn,{children:"Distance"}),r.jsx(zn,{children:"Status"}),r.jsx(zn,{children:"Actions"})]})}),r.jsx("tbody",{children:i.map((S,E)=>r.jsxs("tr",{children:[r.jsx(Nn,{children:E+1}),r.jsx(Nn,{children:new Date(S.startTime).toLocaleDateString()}),r.jsx(Nn,{children:S.truckId?.truckNumber||"N/A"}),r.jsx(Nn,{children:S.driverId?.name||"N/A"}),r.jsxs(Nn,{children:[S.source," → ",S.destination]}),r.jsx(Nn,{children:S.actualDistance||S.distance?`${S.actualDistance||S.distance} km`:"N/A"}),r.jsx(Nn,{children:r.jsx(A6,{$status:S.status,children:S.status})}),r.jsx(Nn,{children:S.status!=="completed"&&r.jsx(Hg,{$variant:"danger",onClick:()=>D(S._id),style:{padding:"0.5rem 1rem",fontSize:"0.875rem"},children:r.jsx(rc,{})})})]},S._id))})]})]})}const $a="http://localhost:5000/api",Ta=()=>({Authorization:`Bearer ${localStorage.getItem("token")}`}),bi={getAllFuelLogs:async(a={})=>{const i=new URLSearchParams;return Object.keys(a).forEach(s=>{a[s]&&i.append(s,a[s])}),(await ee.get(`${$a}/fuel?${i}`,{headers:Ta()})).data},getFuelLogById:async a=>(await ee.get(`${$a}/fuel/${a}`,{headers:Ta()})).data,createFuelLog:async a=>{const i=new FormData;return Object.keys(a).forEach(s=>{s==="fuelStation"?(i.append("fuelStation[name]",a.fuelStation.name),i.append("fuelStation[location]",a.fuelStation.location),a.fuelStation.coordinates&&(i.append("fuelStation[coordinates][latitude]",a.fuelStation.coordinates.latitude),i.append("fuelStation[coordinates][longitude]",a.fuelStation.coordinates.longitude))):s==="receipt"&&a[s]?i.append("receipt",a[s]):i.append(s,a[s])}),(await ee.post(`${$a}/fuel`,i,{headers:{...Ta(),"Content-Type":"multipart/form-data"}})).data},updateFuelLog:async(a,i)=>{const o=new FormData;return Object.keys(i).forEach(d=>{d==="fuelStation"?(o.append("fuelStation[name]",i.fuelStation.name),o.append("fuelStation[location]",i.fuelStation.location)):d==="receipt"&&i[d]instanceof File?o.append("receipt",i[d]):o.append(d,i[d])}),(await ee.put(`${$a}/fuel/${a}`,o,{headers:{...Ta(),"Content-Type":"multipart/form-data"}})).data},deleteFuelLog:async a=>(await ee.delete(`${$a}/fuel/${a}`,{headers:Ta()})).data,verifyFuelLog:async(a,i)=>(await ee.post(`${$a}/fuel/${a}/verify`,i,{headers:Ta()})).data,getFuelStats:async(a={})=>{const i=new URLSearchParams;return Object.keys(a).forEach(s=>{a[s]&&i.append(s,a[s])}),(await ee.get(`${$a}/fuel/stats?${i}`,{headers:Ta()})).data},getFuelTrends:async(a=30)=>(await ee.get(`${$a}/fuel/trends?days=${a}`,{headers:Ta()})).data,compareTruckEfficiency:async()=>(await ee.get(`${$a}/fuel/compare-efficiency`,{headers:Ta()})).data,getPendingVerifications:async()=>(await ee.get(`${$a}/fuel/pending-verifications`,{headers:Ta()})).data},N6=y.form`
  display: flex;
  flex-direction: column;
  gap: ${a=>a.theme.spacing.md};
`,M6=y.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${a=>a.theme.spacing.md};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Ug=y.div`
  grid-column: 1 / -1;
`,O6=({isOpen:a,onClose:i,onSubmit:o})=>{const{theme:s}=fe(),[d,f]=w.useState(!1),[h,v]=w.useState(null),[p,g]=w.useState([]),[x,j]=w.useState([]),[C,T]=w.useState({truckId:"",driverId:"",fuelStation:{name:"",location:""},fuelType:"diesel",quantityLiters:"",pricePerLiter:"",odometerReading:"",paymentMethod:"cash",notes:"",receipt:null});w.useEffect(()=>{a&&D()},[a]);const D=async()=>{try{const A={Authorization:`Bearer ${localStorage.getItem("token")}`},[L,V]=await Promise.all([ee.get("http://localhost:5000/api/trucks",{headers:A}),ee.get("http://localhost:5000/api/drivers",{headers:A})]);g(L.data.data.trucks),j(V.data.data.drivers)}catch{v("Failed to load trucks and drivers")}},S=R=>{const{name:A,value:L,files:V}=R.target;if(A.startsWith("fuelStation.")){const q=A.split(".")[1];T(Y=>({...Y,fuelStation:{...Y.fuelStation,[q]:L}}))}else T(A==="receipt"?q=>({...q,receipt:V[0]}):q=>({...q,[A]:L}))},E=async R=>{R.preventDefault(),f(!0),v(null);try{await o(C),T({truckId:"",driverId:"",fuelStation:{name:"",location:""},fuelType:"diesel",quantityLiters:"",pricePerLiter:"",odometerReading:"",paymentMethod:"cash",notes:"",receipt:null})}catch(A){v(A.message)}finally{f(!1)}};return r.jsx(sa,{isOpen:a,onClose:i,title:"Add Fuel Log",size:"lg",footer:r.jsxs(r.Fragment,{children:[r.jsx(ge,{variant:"ghost",onClick:i,children:"Cancel"}),r.jsx(ge,{variant:"primary",onClick:E,loading:d,children:"Add Fuel Log"})]}),children:r.jsxs(N6,{theme:s,onSubmit:E,children:[h&&r.jsx(He,{variant:"danger",children:h}),r.jsxs(M6,{theme:s,children:[r.jsx(Re,{label:"Truck",name:"truckId",value:C.truckId,onChange:S,required:!0,options:p.map(R=>({value:R._id,label:`${R.truckNumber} - ${R.modelName}`}))}),r.jsx(Re,{label:"Driver",name:"driverId",value:C.driverId,onChange:S,required:!0,options:x.map(R=>({value:R._id,label:R.name}))}),r.jsx(ie,{label:"Fuel Station Name",name:"fuelStation.name",value:C.fuelStation.name,onChange:S,required:!0}),r.jsx(ie,{label:"Station Location",name:"fuelStation.location",value:C.fuelStation.location,onChange:S,required:!0}),r.jsx(Re,{label:"Fuel Type",name:"fuelType",value:C.fuelType,onChange:S,options:[{value:"diesel",label:"Diesel"},{value:"petrol",label:"Petrol"},{value:"cng",label:"CNG"},{value:"electric",label:"Electric"}]}),r.jsx(ie,{type:"number",label:"Quantity (Liters)",name:"quantityLiters",value:C.quantityLiters,onChange:S,required:!0,step:"0.01"}),r.jsx(ie,{type:"number",label:"Price per Liter (₹)",name:"pricePerLiter",value:C.pricePerLiter,onChange:S,required:!0,step:"0.01"}),r.jsx(ie,{type:"number",label:"Odometer Reading (km)",name:"odometerReading",value:C.odometerReading,onChange:S,required:!0}),r.jsx(Re,{label:"Payment Method",name:"paymentMethod",value:C.paymentMethod,onChange:S,options:[{value:"cash",label:"Cash"},{value:"card",label:"Card"},{value:"upi",label:"UPI"},{value:"fuel-card",label:"Fuel Card"},{value:"credit",label:"Credit"}]}),r.jsx(Ug,{children:r.jsx(ie,{type:"file",label:"Receipt (Optional)",name:"receipt",onChange:S,accept:"image/*,application/pdf"})}),r.jsx(Ug,{children:r.jsx(ie,{as:"textarea",label:"Notes (Optional)",name:"notes",value:C.notes,onChange:S,rows:3})})]})]})})},k6=y(tt)`
  padding: ${a=>a.theme.spacing.lg};
  cursor: default;

  &:hover {
    transform: translateY(-2px);
  }
`,L6=y.div`
  display: flex;
  align-items: center;
  gap: ${a=>a.theme.spacing.md};
`,_6=y.div`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: ${a=>a.theme.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  background: ${a=>{const{theme:i,$variant:o}=a;switch(o){case"primary":return i.colors.primaryLight;case"success":return i.colors.successLight;case"warning":return i.colors.warningLight;case"danger":return i.colors.dangerLight;case"info":return i.colors.infoLight;case"secondary":return i.colors.secondaryLight;default:return i.colors.background}}};
`,B6=y.div`
  flex: 1;
`,H6=y.div`
  font-size: 0.875rem;
  color: ${a=>a.theme.colors.textSecondary};
  margin-bottom: ${a=>a.theme.spacing.xs};
`,U6=y.div`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${a=>a.theme.colors.textPrimary};
`,Wr=({title:a,value:i,icon:o,variant:s="primary"})=>{const{theme:d}=fe();return r.jsx(k6,{theme:d,hoverable:!0,children:r.jsxs(L6,{theme:d,children:[r.jsx(_6,{theme:d,$variant:s,children:o}),r.jsxs(B6,{children:[r.jsx(H6,{theme:d,children:a}),r.jsx(U6,{theme:d,children:i})]})]})})},q6=y.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${a=>a.theme.spacing.md};
  margin-bottom: ${a=>a.theme.spacing.lg};
  padding: ${a=>a.theme.spacing.md};
  background: ${a=>a.theme.colors.background};
  border-radius: ${a=>a.theme.borderRadius.md};
`,Mn=y.div`
  display: flex;
  flex-direction: column;
  gap: ${a=>a.theme.spacing.xs};
`,On=y.span`
  font-size: 0.875rem;
  color: ${a=>a.theme.colors.textSecondary};
`,kn=y.span`
  font-size: 1rem;
  font-weight: 500;
  color: ${a=>a.theme.colors.textPrimary};
`,F6=y.div`
  padding: ${a=>a.theme.spacing.md};
  background: ${a=>a.theme.colors.dangerLight};
  border: 1px solid ${a=>a.theme.colors.danger};
  border-radius: ${a=>a.theme.borderRadius.md};
  color: ${a=>a.theme.colors.danger};
  margin-bottom: ${a=>a.theme.spacing.md};
`,Y6=({isOpen:a,onClose:i,fuelLog:o,onSubmit:s})=>{const{theme:d}=fe(),[f,h]=w.useState(!1),[v,p]=w.useState(null),[g,x]=w.useState({status:"verified",notes:""}),j=T=>{const{name:D,value:S}=T.target;x(E=>({...E,[D]:S}))},C=async()=>{h(!0),p(null);try{await s(g)}catch(T){p(T.message)}finally{h(!1)}};return o?r.jsxs(sa,{isOpen:a,onClose:i,title:"Verify Fuel Log",size:"lg",footer:r.jsxs(r.Fragment,{children:[r.jsx(ge,{variant:"ghost",onClick:i,children:"Cancel"}),r.jsx(ge,{variant:"primary",onClick:C,loading:f,children:"Submit Verification"})]}),children:[v&&r.jsx(He,{variant:"danger",children:v}),o.isAnomaly&&r.jsxs(F6,{theme:d,children:[r.jsx("strong",{children:"Anomaly Detected:"})," ",o.anomalyReason]}),r.jsxs(q6,{theme:d,children:[r.jsxs(Mn,{children:[r.jsx(On,{theme:d,children:"Truck"}),r.jsx(kn,{theme:d,children:o.truckId?.truckNumber||"N/A"})]}),r.jsxs(Mn,{children:[r.jsx(On,{theme:d,children:"Driver"}),r.jsx(kn,{theme:d,children:o.driverId?.name||"N/A"})]}),r.jsxs(Mn,{children:[r.jsx(On,{theme:d,children:"Fuel Station"}),r.jsx(kn,{theme:d,children:o.fuelStation?.name||"N/A"})]}),r.jsxs(Mn,{children:[r.jsx(On,{theme:d,children:"Location"}),r.jsx(kn,{theme:d,children:o.fuelStation?.location||"N/A"})]}),r.jsxs(Mn,{children:[r.jsx(On,{theme:d,children:"Quantity"}),r.jsxs(kn,{theme:d,children:[o.quantityLiters," Liters"]})]}),r.jsxs(Mn,{children:[r.jsx(On,{theme:d,children:"Total Cost"}),r.jsxs(kn,{theme:d,children:["₹",o.totalCost.toFixed(2)]})]}),r.jsxs(Mn,{children:[r.jsx(On,{theme:d,children:"Fuel Efficiency"}),r.jsx(kn,{theme:d,children:o.fuelEfficiency?`${o.fuelEfficiency} km/L`:"N/A"})]}),r.jsxs(Mn,{children:[r.jsx(On,{theme:d,children:"Payment Method"}),r.jsx(kn,{theme:d,children:o.paymentMethod})]})]}),r.jsx(Re,{label:"Verification Status",name:"status",value:g.status,onChange:j,options:[{value:"verified",label:"Verified"},{value:"rejected",label:"Rejected"}]}),r.jsx(ie,{as:"textarea",label:"Verification Notes",name:"notes",value:g.notes,onChange:j,rows:3,placeholder:"Add notes about this verification..."})]}):null},G6=y.div`
  padding: ${a=>a.theme.spacing.xl};
  max-width: 1400px;
  margin: 0 auto;
`,V6=y.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${a=>a.theme.spacing.xl};
  flex-wrap: wrap;
  gap: ${a=>a.theme.spacing.md};
`,X6=y.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${a=>a.theme.colors.textPrimary};
  margin: 0;
`,Q6=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${a=>a.theme.spacing.md};
  margin-bottom: ${a=>a.theme.spacing.xl};
`,Z6=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${a=>a.theme.spacing.lg};
  margin-bottom: ${a=>a.theme.spacing.xl};
`,P6=y.div`
  display: flex;
  gap: ${a=>a.theme.spacing.sm};
`,K6=()=>{const{theme:a}=fe(),[i,o]=w.useState([]),[s,d]=w.useState(null),[f,h]=w.useState(!0),[v,p]=w.useState(null),[g,x]=w.useState(!1),[j,C]=w.useState(!1),[T,D]=w.useState(null),[S,E]=w.useState({verificationStatus:"",isAnomaly:"",startDate:"",endDate:""});w.useEffect(()=>{R(),A()},[S]);const R=async()=>{try{h(!0);const J=await bi.getAllFuelLogs(S);o(J.data.fuelLogs),p(null)}catch(J){p(J.response?.data?.message||"Failed to fetch fuel logs")}finally{h(!1)}},A=async()=>{try{const J=await bi.getFuelStats(S);d(J.data.stats)}catch(J){console.error("Failed to fetch stats:",J)}},L=(J,ce)=>{E(be=>({...be,[J]:ce}))},V=async J=>{try{await bi.createFuelLog(J),x(!1),R(),A()}catch(ce){throw new Error(ce.response?.data?.message||"Failed to create fuel log")}},q=J=>{D(J),C(!0)},Y=async J=>{try{await bi.verifyFuelLog(T._id,J),C(!1),R(),A()}catch(ce){throw new Error(ce.response?.data?.message||"Failed to verify fuel log")}},X=async J=>{if(window.confirm("Are you sure you want to delete this fuel log?"))try{await bi.deleteFuelLog(J),R(),A()}catch(ce){p(ce.response?.data?.message||"Failed to delete fuel log")}},K=J=>{const ce={pending:{variant:"warning",text:"Pending"},verified:{variant:"success",text:"Verified"},rejected:{variant:"danger",text:"Rejected"},anomaly:{variant:"danger",text:"Anomaly"}},be=ce[J]||ce.pending;return r.jsx(Pt,{variant:be.variant,children:be.text})};return r.jsxs(G6,{theme:a,children:[r.jsxs(V6,{theme:a,children:[r.jsx(X6,{theme:a,children:"Fuel Management"}),r.jsx(ge,{variant:"primary",onClick:()=>x(!0),children:"+ Add Fuel Log"})]}),v&&r.jsx(He,{variant:"danger",onClose:()=>p(null),children:v}),s&&r.jsxs(Z6,{theme:a,children:[r.jsx(Wr,{title:"Total Fuel Logs",value:s.totalLogs,variant:"primary"}),r.jsx(Wr,{title:"Total Fuel Used",value:`${s.totalFuelQuantity.toFixed(2)} L`,variant:"info"}),r.jsx(Wr,{title:"Total Cost",value:`₹${s.totalCost.toFixed(2)}`,variant:"success"}),r.jsx(Wr,{title:"Avg Efficiency",value:s.avgFuelEfficiency?`${s.avgFuelEfficiency.toFixed(2)} km/L`:"N/A",variant:"secondary"}),r.jsx(Wr,{title:"Pending Verification",value:s.pendingVerification,variant:"warning"}),r.jsx(Wr,{title:"Anomalies",value:s.anomalies,variant:"danger"})]}),r.jsxs(Q6,{theme:a,children:[r.jsx(Re,{label:"Verification Status",value:S.verificationStatus,onChange:J=>L("verificationStatus",J.target.value),options:[{value:"",label:"All"},{value:"pending",label:"Pending"},{value:"verified",label:"Verified"},{value:"rejected",label:"Rejected"},{value:"anomaly",label:"Anomaly"}]}),r.jsx(Re,{label:"Anomaly Filter",value:S.isAnomaly,onChange:J=>L("isAnomaly",J.target.value),options:[{value:"",label:"All"},{value:"true",label:"Anomalies Only"},{value:"false",label:"Normal Only"}]}),r.jsx(ie,{type:"date",label:"Start Date",value:S.startDate,onChange:J=>L("startDate",J.target.value)}),r.jsx(ie,{type:"date",label:"End Date",value:S.endDate,onChange:J=>L("endDate",J.target.value)})]}),r.jsx(tt,{children:r.jsxs(U,{children:[r.jsx(U.Head,{children:r.jsxs(U.Row,{children:[r.jsx(U.Header,{children:"Date"}),r.jsx(U.Header,{children:"Truck"}),r.jsx(U.Header,{children:"Driver"}),r.jsx(U.Header,{children:"Station"}),r.jsx(U.Header,{children:"Quantity (L)"}),r.jsx(U.Header,{children:"Cost"}),r.jsx(U.Header,{children:"Efficiency"}),r.jsx(U.Header,{children:"Status"}),r.jsx(U.Header,{children:"Actions"})]})}),r.jsx(U.Body,{loading:f,empty:i.length===0,children:i.map(J=>r.jsxs(U.Row,{children:[r.jsx(U.Cell,{children:new Date(J.filledAt).toLocaleDateString()}),r.jsx(U.Cell,{children:J.truckId?.truckNumber||"N/A"}),r.jsx(U.Cell,{children:J.driverId?.name||"N/A"}),r.jsx(U.Cell,{children:J.fuelStation?.name||"N/A"}),r.jsx(U.Cell,{children:J.quantityLiters.toFixed(2)}),r.jsxs(U.Cell,{children:["₹",J.totalCost.toFixed(2)]}),r.jsx(U.Cell,{children:J.fuelEfficiency?`${J.fuelEfficiency} km/L`:"N/A"}),r.jsx(U.Cell,{children:K(J.verificationStatus)}),r.jsx(U.Cell,{children:r.jsxs(P6,{theme:a,children:[J.verificationStatus==="pending"&&r.jsx(ge,{size:"sm",variant:"success",onClick:()=>q(J),children:"Verify"}),J.verificationStatus!=="verified"&&r.jsx(ge,{size:"sm",variant:"danger",onClick:()=>X(J._id),children:"Delete"})]})})]},J._id))})]})}),g&&r.jsx(O6,{isOpen:g,onClose:()=>x(!1),onSubmit:V}),j&&r.jsx(Y6,{isOpen:j,onClose:()=>C(!1),fuelLog:T,onSubmit:Y})]})},Xt="http://localhost:5000/api",Qt=()=>({Authorization:`Bearer ${localStorage.getItem("token")}`}),ll={getAllMaintenanceLogs:async(a={})=>{const i=new URLSearchParams;return Object.keys(a).forEach(s=>{a[s]&&i.append(s,a[s])}),(await ee.get(`${Xt}/maintenance?${i}`,{headers:Qt()})).data},getMaintenanceLogById:async a=>(await ee.get(`${Xt}/maintenance/${a}`,{headers:Qt()})).data,createMaintenanceLog:async a=>{const i=new FormData;return Object.keys(a).forEach(s=>{s==="partsReplaced"&&Array.isArray(a[s])?i.append(s,JSON.stringify(a[s])):s==="serviceProvider"?Object.keys(a.serviceProvider).forEach(d=>{i.append(`serviceProvider[${d}]`,a.serviceProvider[d])}):s==="images"&&a[s]?a[s].forEach(d=>{i.append("images",d)}):s==="invoice"&&a[s]?i.append("invoice",a[s]):i.append(s,a[s])}),(await ee.post(`${Xt}/maintenance`,i,{headers:{...Qt(),"Content-Type":"multipart/form-data"}})).data},updateMaintenanceLog:async(a,i)=>{const o=new FormData;return Object.keys(i).forEach(d=>{d==="partsReplaced"&&Array.isArray(i[d])?o.append(d,JSON.stringify(i[d])):d==="images"&&i[d]?i[d].forEach(f=>{f instanceof File&&o.append("images",f)}):d==="invoice"&&i[d]instanceof File?o.append("invoice",i[d]):o.append(d,i[d])}),(await ee.put(`${Xt}/maintenance/${a}`,o,{headers:{...Qt(),"Content-Type":"multipart/form-data"}})).data},completeMaintenance:async(a,i)=>(await ee.post(`${Xt}/maintenance/${a}/complete`,i,{headers:Qt()})).data,approveMaintenance:async(a,i)=>(await ee.post(`${Xt}/maintenance/${a}/approve`,i,{headers:Qt()})).data,deleteMaintenanceLog:async a=>(await ee.delete(`${Xt}/maintenance/${a}`,{headers:Qt()})).data,getMaintenanceStats:async(a={})=>{const i=new URLSearchParams;return Object.keys(a).forEach(s=>{a[s]&&i.append(s,a[s])}),(await ee.get(`${Xt}/maintenance/stats?${i}`,{headers:Qt()})).data},getMaintenanceDueAlerts:async(a=30)=>(await ee.get(`${Xt}/maintenance/due-alerts?days=${a}`,{headers:Qt()})).data,getPredictiveMaintenance:async a=>(await ee.get(`${Xt}/maintenance/predictive/${a}`,{headers:Qt()})).data,getMaintenanceTrends:async(a=90)=>(await ee.get(`${Xt}/maintenance/trends?days=${a}`,{headers:Qt()})).data,getCostBreakdown:async(a={})=>{const i=new URLSearchParams;return Object.keys(a).forEach(s=>{a[s]&&i.append(s,a[s])}),(await ee.get(`${Xt}/maintenance/cost-breakdown?${i}`,{headers:Qt()})).data},getTruckMaintenanceHistory:async(a,i=10)=>(await ee.get(`${Xt}/maintenance/truck-history/${a}?limit=${i}`,{headers:Qt()})).data},J6=y.form`
  display: flex;
  flex-direction: column;
  gap: ${a=>a.theme.spacing.md};
`,qg=y.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${a=>a.theme.spacing.md};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Fg=y.div`
  grid-column: 1 / -1;
`,I6=y.div`
  border: 1px solid ${a=>a.theme.colors.border};
  border-radius: ${a=>a.theme.borderRadius.md};
  padding: ${a=>a.theme.spacing.md};
  margin: ${a=>a.theme.spacing.md} 0;
`,W6=y.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr auto;
  gap: ${a=>a.theme.spacing.sm};
  align-items: end;
  margin-bottom: ${a=>a.theme.spacing.sm};
`,e8=({isOpen:a,onClose:i,onSubmit:o})=>{const{theme:s}=fe(),[d,f]=w.useState(!1),[h,v]=w.useState(null),[p,g]=w.useState([]),[x,j]=w.useState({truckId:"",maintenanceType:"regular",category:"engine",priority:"medium",issueDescription:"",diagnosis:"",laborCost:"",odometerReading:"",serviceProvider:{name:"",location:"",contactNumber:""},estimatedCompletionDate:"",notes:"",images:[],invoice:null}),[C,T]=w.useState([]);w.useEffect(()=>{a&&D()},[a]);const D=async()=>{try{const V=localStorage.getItem("token"),q=await ee.get("http://localhost:5000/api/trucks",{headers:{Authorization:`Bearer ${V}`}});g(q.data.data.trucks)}catch{v("Failed to load trucks")}},S=V=>{const{name:q,value:Y,files:X}=V.target;if(q.startsWith("serviceProvider.")){const K=q.split(".")[1];j(J=>({...J,serviceProvider:{...J.serviceProvider,[K]:Y}}))}else j(q==="images"?K=>({...K,images:Array.from(X)}):q==="invoice"?K=>({...K,invoice:X[0]}):K=>({...K,[q]:Y}))},E=()=>{T([...C,{partName:"",partNumber:"",quantity:1,cost:0}])},R=(V,q,Y)=>{const X=[...C];X[V][q]=Y,T(X)},A=V=>{T(C.filter((q,Y)=>Y!==V))},L=async V=>{V.preventDefault(),f(!0),v(null);try{const q={...x,partsReplaced:C.filter(Y=>Y.partName&&Y.cost>0)};await o(q),j({truckId:"",maintenanceType:"regular",category:"engine",priority:"medium",issueDescription:"",diagnosis:"",laborCost:"",odometerReading:"",serviceProvider:{name:"",location:"",contactNumber:""},estimatedCompletionDate:"",notes:"",images:[],invoice:null}),T([])}catch(q){v(q.message)}finally{f(!1)}};return r.jsx(sa,{isOpen:a,onClose:i,title:"Add Maintenance Log",size:"xl",footer:r.jsxs(r.Fragment,{children:[r.jsx(ge,{variant:"ghost",onClick:i,children:"Cancel"}),r.jsx(ge,{variant:"primary",onClick:L,loading:d,children:"Add Maintenance"})]}),children:r.jsxs(J6,{theme:s,onSubmit:L,children:[h&&r.jsx(He,{variant:"danger",children:h}),r.jsxs(qg,{theme:s,children:[r.jsx(Re,{label:"Truck",name:"truckId",value:x.truckId,onChange:S,required:!0,options:p.map(V=>({value:V._id,label:`${V.truckNumber} - ${V.modelName}`}))}),r.jsx(Re,{label:"Maintenance Type",name:"maintenanceType",value:x.maintenanceType,onChange:S,options:[{value:"regular",label:"Regular"},{value:"emergency",label:"Emergency"},{value:"preventive",label:"Preventive"},{value:"breakdown",label:"Breakdown"}]}),r.jsx(Re,{label:"Category",name:"category",value:x.category,onChange:S,options:[{value:"engine",label:"Engine"},{value:"transmission",label:"Transmission"},{value:"brakes",label:"Brakes"},{value:"tires",label:"Tires"},{value:"electrical",label:"Electrical"},{value:"body",label:"Body"},{value:"other",label:"Other"}]}),r.jsx(Re,{label:"Priority",name:"priority",value:x.priority,onChange:S,options:[{value:"low",label:"Low"},{value:"medium",label:"Medium"},{value:"high",label:"High"},{value:"critical",label:"Critical"}]}),r.jsx(Fg,{children:r.jsx(ie,{as:"textarea",label:"Issue Description",name:"issueDescription",value:x.issueDescription,onChange:S,required:!0,rows:3})}),r.jsx(ie,{type:"number",label:"Odometer Reading (km)",name:"odometerReading",value:x.odometerReading,onChange:S,required:!0}),r.jsx(ie,{type:"number",label:"Labor Cost (₹)",name:"laborCost",value:x.laborCost,onChange:S,step:"0.01"}),r.jsx(ie,{label:"Service Provider",name:"serviceProvider.name",value:x.serviceProvider.name,onChange:S}),r.jsx(ie,{label:"Provider Location",name:"serviceProvider.location",value:x.serviceProvider.location,onChange:S}),r.jsx(ie,{label:"Provider Contact",name:"serviceProvider.contactNumber",value:x.serviceProvider.contactNumber,onChange:S}),r.jsx(ie,{type:"date",label:"Estimated Completion",name:"estimatedCompletionDate",value:x.estimatedCompletionDate,onChange:S})]}),r.jsxs(I6,{theme:s,children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"1rem"},children:[r.jsx("h4",{children:"Parts Replaced"}),r.jsx(ge,{type:"button",size:"sm",variant:"secondary",onClick:E,children:"+ Add Part"})]}),C.map((V,q)=>r.jsxs(W6,{theme:s,children:[r.jsx(ie,{placeholder:"Part Name",value:V.partName,onChange:Y=>R(q,"partName",Y.target.value)}),r.jsx(ie,{placeholder:"Part #",value:V.partNumber,onChange:Y=>R(q,"partNumber",Y.target.value)}),r.jsx(ie,{type:"number",placeholder:"Qty",value:V.quantity,onChange:Y=>R(q,"quantity",parseInt(Y.target.value)),min:"1"}),r.jsx(ie,{type:"number",placeholder:"Cost (₹)",value:V.cost,onChange:Y=>R(q,"cost",parseFloat(Y.target.value)),step:"0.01"}),r.jsx(ge,{type:"button",size:"sm",variant:"danger",onClick:()=>A(q),children:"✕"})]},q))]}),r.jsxs(qg,{theme:s,children:[r.jsx(ie,{type:"file",label:"Images (Optional)",name:"images",onChange:S,accept:"image/*",multiple:!0}),r.jsx(ie,{type:"file",label:"Invoice (Optional)",name:"invoice",onChange:S,accept:"image/*,application/pdf"}),r.jsx(Fg,{children:r.jsx(ie,{as:"textarea",label:"Notes",name:"notes",value:x.notes,onChange:S,rows:2})})]})]})})},t8=y(tt)`
  padding: ${a=>a.theme.spacing.lg};
  cursor: default;

  &:hover {
    transform: translateY(-2px);
  }
`,a8=y.div`
  display: flex;
  align-items: center;
  gap: ${a=>a.theme.spacing.md};
`,n8=y.div`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: ${a=>a.theme.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  background: ${a=>{const{theme:i,$variant:o}=a;switch(o){case"primary":return i.colors.primaryLight;case"success":return i.colors.successLight;case"warning":return i.colors.warningLight;case"danger":return i.colors.dangerLight;case"info":return i.colors.infoLight;case"secondary":return i.colors.secondaryLight;default:return i.colors.background}}};
`,r8=y.div`
  flex: 1;
`,l8=y.div`
  font-size: 0.875rem;
  color: ${a=>a.theme.colors.textSecondary};
  margin-bottom: ${a=>a.theme.spacing.xs};
`,i8=y.div`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${a=>a.theme.colors.textPrimary};
`,el=({title:a,value:i,icon:o,variant:s="primary"})=>{const{theme:d}=fe();return r.jsx(t8,{theme:d,hoverable:!0,children:r.jsxs(a8,{theme:d,children:[r.jsx(n8,{theme:d,$variant:s,children:o}),r.jsxs(r8,{children:[r.jsx(l8,{theme:d,children:a}),r.jsx(i8,{theme:d,children:i})]})]})})},s8=y(tt)`
  padding: ${a=>a.theme.spacing.lg};
  margin-bottom: ${a=>a.theme.spacing.md};
  border-left: 4px solid
    ${a=>a.$urgency>80?a.theme.colors.danger:a.$urgency>50?a.theme.colors.warning:a.theme.colors.success};
`,o8=y.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${a=>a.theme.spacing.md};
`,c8=y.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${a=>a.theme.colors.textPrimary};
  margin: 0;
  text-transform: capitalize;
`,u8=y.div`
  display: flex;
  align-items: center;
  gap: ${a=>a.theme.spacing.sm};
`,d8=y.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${a=>a.$score>80?a.theme.colors.danger:a.$score>50?a.theme.colors.warning:a.theme.colors.success};
`,f8=y.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${a=>a.theme.spacing.md};
`,ji=y.div`
  display: flex;
  flex-direction: column;
  gap: ${a=>a.theme.spacing.xs};
`,Si=y.span`
  font-size: 0.875rem;
  color: ${a=>a.theme.colors.textSecondary};
`,wi=y.span`
  font-size: 1rem;
  font-weight: 500;
  color: ${a=>a.theme.colors.textPrimary};
`,Yg=y.div`
  text-align: center;
  padding: ${a=>a.theme.spacing.xxl};
  color: ${a=>a.theme.colors.textSecondary};
`,h8=({isOpen:a,onClose:i})=>{const{theme:o}=fe(),[s,d]=w.useState(!1),[f,h]=w.useState(null),[v,p]=w.useState([]),[g,x]=w.useState(""),[j,C]=w.useState(null);w.useEffect(()=>{a&&T()},[a]);const T=async()=>{try{const S=localStorage.getItem("token"),E=await ee.get("http://localhost:5000/api/trucks",{headers:{Authorization:`Bearer ${S}`}});p(E.data.data.trucks)}catch{h("Failed to load trucks")}},D=async()=>{if(!g){h("Please select a truck");return}d(!0),h(null);try{const S=await ll.getPredictiveMaintenance(g);C(S.data)}catch(S){h(S.response?.data?.message||"Failed to generate predictions")}finally{d(!1)}};return r.jsxs(sa,{isOpen:a,onClose:i,title:"Predictive Maintenance Analysis",size:"lg",children:[f&&r.jsx(He,{variant:"danger",children:f}),r.jsx(Re,{label:"Select Truck",value:g,onChange:S=>x(S.target.value),options:v.map(S=>({value:S._id,label:`${S.truckNumber} - ${S.modelName}`}))}),r.jsx("div",{style:{marginTop:"1rem",marginBottom:"1rem"},children:r.jsx(ge,{variant:"primary",onClick:D,loading:s,fullWidth:!0,children:"Analyze Maintenance Patterns"})}),s&&r.jsx(N1,{text:"Analyzing maintenance history..."}),j&&!j.hasSufficientData&&r.jsxs(Yg,{theme:o,children:[r.jsx("p",{children:j.message}),r.jsx("p",{style:{fontSize:"0.875rem",marginTop:"0.5rem"},children:"At least 3 completed maintenance records are required for prediction."})]}),j&&j.hasSufficientData&&r.jsx("div",{children:j.predictions.length===0?r.jsx(Yg,{theme:o,children:"No maintenance predictions available for this truck."}):j.predictions.map((S,E)=>r.jsxs(s8,{theme:o,$urgency:S.urgencyScore,children:[r.jsxs(o8,{theme:o,children:[r.jsx(c8,{theme:o,children:S.category}),r.jsxs(u8,{theme:o,children:[r.jsxs(d8,{theme:o,$score:S.urgencyScore,children:[S.urgencyScore,"%"]}),r.jsx(Pt,{variant:S.priority==="high"?"danger":S.priority==="medium"?"warning":"success",children:S.priority.toUpperCase()})]})]}),r.jsxs(f8,{theme:o,children:[r.jsxs(ji,{children:[r.jsx(Si,{theme:o,children:"Last Maintenance"}),r.jsx(wi,{theme:o,children:new Date(S.lastMaintenanceDate).toLocaleDateString()})]}),r.jsxs(ji,{children:[r.jsx(Si,{theme:o,children:"Days Since Last"}),r.jsxs(wi,{theme:o,children:[S.daysSinceLast," days"]})]}),r.jsxs(ji,{children:[r.jsx(Si,{theme:o,children:"Avg Interval"}),r.jsxs(wi,{theme:o,children:[S.avgDaysBetween," days"]})]}),r.jsxs(ji,{children:[r.jsx(Si,{theme:o,children:"Predicted Next Date"}),r.jsx(wi,{theme:o,children:new Date(S.predictedNextDate).toLocaleDateString()})]}),r.jsxs(ji,{children:[r.jsx(Si,{theme:o,children:"Frequency"}),r.jsxs(wi,{theme:o,children:[S.frequency," times"]})]})]})]},E))})]})},m8=y.form`
  display: flex;
  flex-direction: column;
  gap: ${a=>a.theme.spacing.md};
`,p8=({isOpen:a,onClose:i,maintenanceLog:o,onSubmit:s})=>{const{theme:d}=fe(),[f,h]=w.useState(!1),[v,p]=w.useState(null),[g,x]=w.useState({diagnosis:"",performedBy:"",notes:""}),j=T=>{const{name:D,value:S}=T.target;x(E=>({...E,[D]:S}))},C=async()=>{h(!0),p(null);try{await s(g)}catch(T){p(T.message)}finally{h(!1)}};return o?r.jsx(sa,{isOpen:a,onClose:i,title:"Complete Maintenance",footer:r.jsxs(r.Fragment,{children:[r.jsx(ge,{variant:"ghost",onClick:i,children:"Cancel"}),r.jsx(ge,{variant:"primary",onClick:C,loading:f,children:"Complete Maintenance"})]}),children:r.jsxs(m8,{theme:d,children:[v&&r.jsx(He,{variant:"danger",children:v}),r.jsx(ie,{as:"textarea",label:"Diagnosis",name:"diagnosis",value:g.diagnosis,onChange:j,rows:3,placeholder:"Enter final diagnosis..."}),r.jsx(ie,{label:"Performed By",name:"performedBy",value:g.performedBy,onChange:j,placeholder:"Mechanic name..."}),r.jsx(ie,{as:"textarea",label:"Completion Notes",name:"notes",value:g.notes,onChange:j,rows:3,placeholder:"Add any final notes..."})]})}):null},g8=y.div`
  padding: ${a=>a.theme.spacing.xl};
  max-width: 1400px;
  margin: 0 auto;
`,x8=y.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${a=>a.theme.spacing.xl};
  flex-wrap: wrap;
  gap: ${a=>a.theme.spacing.md};
`,v8=y.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${a=>a.theme.colors.textPrimary};
  margin: 0;
`,y8=y.div`
  display: flex;
  gap: ${a=>a.theme.spacing.sm};
`,b8=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${a=>a.theme.spacing.md};
  margin-bottom: ${a=>a.theme.spacing.xl};
`,j8=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${a=>a.theme.spacing.lg};
  margin-bottom: ${a=>a.theme.spacing.xl};
`,S8=y.div`
  display: flex;
  gap: ${a=>a.theme.spacing.sm};
`,w8=()=>{const{theme:a}=fe(),[i,o]=w.useState([]),[s,d]=w.useState(null),[f,h]=w.useState(!0),[v,p]=w.useState(null),[g,x]=w.useState(!1),[j,C]=w.useState(!1),[T,D]=w.useState(!1),[S,E]=w.useState(null),[R,A]=w.useState({status:"",maintenanceType:"",category:"",priority:""});w.useEffect(()=>{L(),V()},[R]);const L=async()=>{try{h(!0);const Q=await ll.getAllMaintenanceLogs(R);o(Q.data.maintenanceLogs),p(null)}catch(Q){p(Q.response?.data?.message||"Failed to fetch maintenance logs")}finally{h(!1)}},V=async()=>{try{const Q=await ll.getMaintenanceStats(R);d(Q.data.stats)}catch(Q){console.error("Failed to fetch stats:",Q)}},q=(Q,Z)=>{A(ue=>({...ue,[Q]:Z}))},Y=async Q=>{try{await ll.createMaintenanceLog(Q),x(!1),L(),V()}catch(Z){throw new Error(Z.response?.data?.message||"Failed to create maintenance log")}},X=Q=>{E(Q),D(!0)},K=async Q=>{try{await ll.completeMaintenance(S._id,Q),D(!1),L(),V()}catch(Z){throw new Error(Z.response?.data?.message||"Failed to complete maintenance")}},J=async Q=>{if(window.confirm("Are you sure you want to delete this maintenance log?"))try{await ll.deleteMaintenanceLog(Q),L(),V()}catch(Z){p(Z.response?.data?.message||"Failed to delete maintenance log")}},ce=Q=>{const Z={scheduled:{variant:"info",text:"Scheduled"},"in-progress":{variant:"warning",text:"In Progress"},completed:{variant:"success",text:"Completed"},cancelled:{variant:"danger",text:"Cancelled"}},ue=Z[Q]||Z.scheduled;return r.jsx(Pt,{variant:ue.variant,children:ue.text})},be=Q=>{const Z={low:{variant:"default",text:"Low"},medium:{variant:"info",text:"Medium"},high:{variant:"warning",text:"High"},critical:{variant:"danger",text:"Critical"}},ue=Z[Q]||Z.medium;return r.jsx(Pt,{variant:ue.variant,children:ue.text})},Te=Q=>{const Z={regular:{variant:"primary",text:"Regular"},emergency:{variant:"danger",text:"Emergency"},preventive:{variant:"success",text:"Preventive"},breakdown:{variant:"warning",text:"Breakdown"}},ue=Z[Q]||Z.regular;return r.jsx(Pt,{variant:ue.variant,children:ue.text})};return r.jsxs(g8,{theme:a,children:[r.jsxs(x8,{theme:a,children:[r.jsx(v8,{theme:a,children:"Maintenance Management"}),r.jsxs(y8,{theme:a,children:[r.jsx(ge,{variant:"secondary",onClick:()=>C(!0),children:"Predictive Analysis"}),r.jsx(ge,{variant:"primary",onClick:()=>x(!0),children:"+ Add Maintenance"})]})]}),v&&r.jsx(He,{variant:"danger",onClose:()=>p(null),children:v}),s&&r.jsxs(j8,{theme:a,children:[r.jsx(el,{title:"Total Logs",value:s.totalLogs,variant:"primary"}),r.jsx(el,{title:"Total Cost",value:`₹${s.totalCost.toFixed(2)}`,variant:"success"}),r.jsx(el,{title:"Avg Cost",value:`₹${s.avgCost.toFixed(2)}`,variant:"info"}),r.jsx(el,{title:"In Progress",value:s.inProgress,variant:"warning"}),r.jsx(el,{title:"Scheduled",value:s.scheduled,variant:"secondary"}),r.jsx(el,{title:"Completed",value:s.completed,variant:"success"})]}),r.jsxs(b8,{theme:a,children:[r.jsx(Re,{label:"Status",value:R.status,onChange:Q=>q("status",Q.target.value),options:[{value:"",label:"All"},{value:"scheduled",label:"Scheduled"},{value:"in-progress",label:"In Progress"},{value:"completed",label:"Completed"},{value:"cancelled",label:"Cancelled"}]}),r.jsx(Re,{label:"Maintenance Type",value:R.maintenanceType,onChange:Q=>q("maintenanceType",Q.target.value),options:[{value:"",label:"All"},{value:"regular",label:"Regular"},{value:"emergency",label:"Emergency"},{value:"preventive",label:"Preventive"},{value:"breakdown",label:"Breakdown"}]}),r.jsx(Re,{label:"Category",value:R.category,onChange:Q=>q("category",Q.target.value),options:[{value:"",label:"All"},{value:"engine",label:"Engine"},{value:"transmission",label:"Transmission"},{value:"brakes",label:"Brakes"},{value:"tires",label:"Tires"},{value:"electrical",label:"Electrical"},{value:"body",label:"Body"},{value:"other",label:"Other"}]}),r.jsx(Re,{label:"Priority",value:R.priority,onChange:Q=>q("priority",Q.target.value),options:[{value:"",label:"All"},{value:"low",label:"Low"},{value:"medium",label:"Medium"},{value:"high",label:"High"},{value:"critical",label:"Critical"}]})]}),r.jsx(tt,{children:r.jsxs(U,{children:[r.jsx(U.Head,{children:r.jsxs(U.Row,{children:[r.jsx(U.Header,{children:"Date"}),r.jsx(U.Header,{children:"Truck"}),r.jsx(U.Header,{children:"Type"}),r.jsx(U.Header,{children:"Category"}),r.jsx(U.Header,{children:"Issue"}),r.jsx(U.Header,{children:"Priority"}),r.jsx(U.Header,{children:"Cost"}),r.jsx(U.Header,{children:"Status"}),r.jsx(U.Header,{children:"Actions"})]})}),r.jsx(U.Body,{loading:f,empty:i.length===0,children:i.map(Q=>r.jsxs(U.Row,{children:[r.jsx(U.Cell,{children:new Date(Q.startDate).toLocaleDateString()}),r.jsx(U.Cell,{children:Q.truckId?.truckNumber||"N/A"}),r.jsx(U.Cell,{children:Te(Q.maintenanceType)}),r.jsx(U.Cell,{children:Q.category.charAt(0).toUpperCase()+Q.category.slice(1)}),r.jsx(U.Cell,{children:r.jsx(Ej,{content:Q.issueDescription,children:Q.issueDescription.length>30?`${Q.issueDescription.substring(0,30)}...`:Q.issueDescription})}),r.jsx(U.Cell,{children:be(Q.priority)}),r.jsxs(U.Cell,{children:["₹",Q.totalCost.toFixed(2)]}),r.jsx(U.Cell,{children:ce(Q.status)}),r.jsx(U.Cell,{children:r.jsxs(S8,{theme:a,children:[Q.status==="in-progress"&&r.jsx(ge,{size:"sm",variant:"success",onClick:()=>X(Q),children:"Complete"}),Q.status!=="completed"&&r.jsx(ge,{size:"sm",variant:"danger",onClick:()=>J(Q._id),children:"Delete"})]})})]},Q._id))})]})}),g&&r.jsx(e8,{isOpen:g,onClose:()=>x(!1),onSubmit:Y}),j&&r.jsx(h8,{isOpen:j,onClose:()=>C(!1)}),T&&r.jsx(p8,{isOpen:T,onClose:()=>D(!1),maintenanceLog:S,onSubmit:K})]})},Aa="http://localhost:5000/api",Ra=()=>({Authorization:`Bearer ${localStorage.getItem("token")}`}),tl={getAllSalaries:async(a={})=>{const i=new URLSearchParams;return Object.keys(a).forEach(s=>{a[s]&&i.append(s,a[s])}),(await ee.get(`${Aa}/salaries?${i}`,{headers:Ra()})).data},getSalaryById:async a=>(await ee.get(`${Aa}/salaries/${a}`,{headers:Ra()})).data,generateSalary:async a=>(await ee.post(`${Aa}/salaries`,a,{headers:Ra()})).data,updateSalary:async(a,i)=>(await ee.put(`${Aa}/salaries/${a}`,i,{headers:Ra()})).data,approveSalary:async(a,i)=>(await ee.post(`${Aa}/salaries/${a}/approve`,{notes:i},{headers:Ra()})).data,markSalaryAsPaid:async(a,i)=>(await ee.post(`${Aa}/salaries/${a}/mark-paid`,i,{headers:Ra()})).data,deleteSalary:async a=>(await ee.delete(`${Aa}/salaries/${a}`,{headers:Ra()})).data,getSalaryStats:async(a={})=>{const i=new URLSearchParams;return Object.keys(a).forEach(s=>{a[s]&&i.append(s,a[s])}),(await ee.get(`${Aa}/salaries/stats?${i}`,{headers:Ra()})).data},generateSalaryReport:async(a,i)=>(await ee.get(`${Aa}/salaries/report?month=${a}&year=${i}`,{headers:Ra()})).data,getDriverSalaryHistory:async(a,i=12)=>(await ee.get(`${Aa}/salaries/driver-history/${a}?limit=${i}`,{headers:Ra()})).data},E8=y.form`
  display: flex;
  flex-direction: column;
  gap: ${a=>a.theme.spacing.md};
`,C8=({isOpen:a,onClose:i,onSubmit:o})=>{const{theme:s}=fe(),[d,f]=w.useState(!1),[h,v]=w.useState(null),[p,g]=w.useState([]),[x,j]=w.useState({driverId:"",month:new Date().getMonth()+1,year:new Date().getFullYear()});w.useEffect(()=>{a&&C()},[a]);const C=async()=>{try{const A=localStorage.getItem("token"),L=await ee.get("http://localhost:5000/api/drivers",{headers:{Authorization:`Bearer ${A}`}});g(L.data.data.drivers)}catch{v("Failed to load drivers")}},T=A=>{const{name:L,value:V}=A.target;j(q=>({...q,[L]:V}))},D=async A=>{A.preventDefault(),f(!0),v(null);try{await o({driverId:x.driverId,month:parseInt(x.month),year:parseInt(x.year)}),j({driverId:"",month:new Date().getMonth()+1,year:new Date().getFullYear()})}catch(L){v(L.message)}finally{f(!1)}},S=["January","February","March","April","May","June","July","August","September","October","November","December"],E=new Date().getFullYear(),R=Array.from({length:5},(A,L)=>E-L);return r.jsx(sa,{isOpen:a,onClose:i,title:"Generate Salary",footer:r.jsxs(r.Fragment,{children:[r.jsx(ge,{variant:"ghost",onClick:i,children:"Cancel"}),r.jsx(ge,{variant:"primary",onClick:D,loading:d,children:"Generate Salary"})]}),children:r.jsxs(E8,{theme:s,onSubmit:D,children:[h&&r.jsx(He,{variant:"danger",children:h}),r.jsx(Re,{label:"Select Driver",name:"driverId",value:x.driverId,onChange:T,required:!0,options:p.map(A=>({value:A._id,label:A.name}))}),r.jsx(Re,{label:"Month",name:"month",value:x.month,onChange:T,options:S.map((A,L)=>({value:L+1,label:A}))}),r.jsx(Re,{label:"Year",name:"year",value:x.year,onChange:T,options:R.map(A=>({value:A,label:A.toString()}))}),r.jsx(He,{variant:"info",children:"Salary will be automatically calculated based on completed trips, bonuses, and deductions for the selected month."})]})})},$8=y.div`
  display: grid;
  gap: ${a=>a.theme.spacing.lg};
`,al=y.div`
  padding: ${a=>a.theme.spacing.md};
  background: ${a=>a.theme.colors.background};
  border-radius: ${a=>a.theme.borderRadius.md};
`,Ei=y.h3`
  font-size: 1rem;
  font-weight: 600;
  color: ${a=>a.theme.colors.textPrimary};
  margin: 0 0 ${a=>a.theme.spacing.md} 0;
`,pt=y.div`
  display: flex;
  justify-content: space-between;
  padding: ${a=>a.theme.spacing.sm} 0;
  border-bottom: 1px solid ${a=>a.theme.colors.border};

  &:last-child {
    border-bottom: none;
  }
`,rt=y.span`
  color: ${a=>a.theme.colors.textSecondary};
  font-size: 0.9375rem;
`,lt=y.span`
  color: ${a=>a.theme.colors.textPrimary};
  font-weight: 500;
  font-size: 0.9375rem;
`,ef=y(pt)`
  margin-top: ${a=>a.theme.spacing.md};
  padding-top: ${a=>a.theme.spacing.md};
  border-top: 2px solid ${a=>a.theme.colors.border};
  font-weight: 600;
  font-size: 1.125rem;
`,T8=({isOpen:a,onClose:i,salary:o})=>{const{theme:s}=fe();if(!o)return null;const d=["January","February","March","April","May","June","July","August","September","October","November","December"],f=h=>{const v={pending:{variant:"warning",text:"Pending"},approved:{variant:"info",text:"Approved"},paid:{variant:"success",text:"Paid"},rejected:{variant:"danger",text:"Rejected"}},p=v[h]||v.pending;return r.jsx(Pt,{variant:p.variant,children:p.text})};return r.jsx(sa,{isOpen:a,onClose:i,title:`Salary Details - ${o.driverId?.name||"N/A"}`,size:"lg",children:r.jsxs($8,{theme:s,children:[r.jsxs(al,{theme:s,children:[r.jsx(Ei,{theme:s,children:"Basic Information"}),r.jsxs(pt,{theme:s,children:[r.jsx(rt,{theme:s,children:"Driver Name"}),r.jsx(lt,{theme:s,children:o.driverId?.name||"N/A"})]}),r.jsxs(pt,{theme:s,children:[r.jsx(rt,{theme:s,children:"Period"}),r.jsxs(lt,{theme:s,children:[d[o.month-1]," ",o.year]})]}),r.jsxs(pt,{theme:s,children:[r.jsx(rt,{theme:s,children:"Status"}),r.jsx(lt,{theme:s,children:f(o.status)})]}),r.jsxs(pt,{theme:s,children:[r.jsx(rt,{theme:s,children:"Working Days"}),r.jsxs(lt,{theme:s,children:[o.totalWorkingDays," days"]})]}),r.jsxs(pt,{theme:s,children:[r.jsx(rt,{theme:s,children:"Trips Completed"}),r.jsx(lt,{theme:s,children:o.tripsCompleted})]})]}),r.jsxs(al,{theme:s,children:[r.jsx(Ei,{theme:s,children:"Earnings"}),r.jsxs(pt,{theme:s,children:[r.jsx(rt,{theme:s,children:"Base Salary"}),r.jsxs(lt,{theme:s,children:["₹",o.baseSalary.toFixed(2)]})]}),r.jsxs(pt,{theme:s,children:[r.jsx(rt,{theme:s,children:"Trip Bonus"}),r.jsxs(lt,{theme:s,children:["₹",o.tripBonus.toFixed(2)]})]}),r.jsxs(pt,{theme:s,children:[r.jsx(rt,{theme:s,children:"Performance Bonus"}),r.jsxs(lt,{theme:s,children:["₹",o.performanceBonus.toFixed(2)]})]}),r.jsxs(pt,{theme:s,children:[r.jsx(rt,{theme:s,children:"Overtime"}),r.jsxs(lt,{theme:s,children:["₹",o.overtimeAmount.toFixed(2)]})]}),r.jsxs(ef,{theme:s,children:[r.jsx(rt,{theme:s,children:"Total Earnings"}),r.jsxs(lt,{theme:s,children:["₹",o.totalEarnings.toFixed(2)]})]})]}),r.jsxs(al,{theme:s,children:[r.jsx(Ei,{theme:s,children:"Deductions"}),r.jsxs(pt,{theme:s,children:[r.jsx(rt,{theme:s,children:"Fuel Penalty"}),r.jsxs(lt,{theme:s,children:["₹",o.deductions.fuelPenalty.toFixed(2)]})]}),r.jsxs(pt,{theme:s,children:[r.jsx(rt,{theme:s,children:"Maintenance Penalty"}),r.jsxs(lt,{theme:s,children:["₹",o.deductions.maintenancePenalty.toFixed(2)]})]}),r.jsxs(pt,{theme:s,children:[r.jsx(rt,{theme:s,children:"Late Penalty"}),r.jsxs(lt,{theme:s,children:["₹",o.deductions.latePenalty.toFixed(2)]})]}),r.jsxs(pt,{theme:s,children:[r.jsx(rt,{theme:s,children:"Other Deductions"}),r.jsxs(lt,{theme:s,children:["₹",o.deductions.other.toFixed(2)]})]}),r.jsxs(ef,{theme:s,children:[r.jsx(rt,{theme:s,children:"Total Deductions"}),r.jsxs(lt,{theme:s,children:["₹",o.totalDeductions.toFixed(2)]})]})]}),r.jsx(al,{theme:s,children:r.jsxs(ef,{theme:s,children:[r.jsx(rt,{theme:s,style:{fontSize:"1.25rem"},children:"Net Salary"}),r.jsxs(lt,{theme:s,style:{fontSize:"1.5rem",color:s.colors.success},children:["₹",o.netSalary.toFixed(2)]})]})}),o.status==="paid"&&r.jsxs(al,{theme:s,children:[r.jsx(Ei,{theme:s,children:"Payment Information"}),r.jsxs(pt,{theme:s,children:[r.jsx(rt,{theme:s,children:"Payment Method"}),r.jsx(lt,{theme:s,children:o.paymentMethod.replace("-"," ").toUpperCase()})]}),r.jsxs(pt,{theme:s,children:[r.jsx(rt,{theme:s,children:"Paid On"}),r.jsx(lt,{theme:s,children:new Date(o.paidOn).toLocaleDateString()})]}),o.transactionReference&&r.jsxs(pt,{theme:s,children:[r.jsx(rt,{theme:s,children:"Transaction Ref"}),r.jsx(lt,{theme:s,children:o.transactionReference})]})]}),o.notes&&r.jsxs(al,{theme:s,children:[r.jsx(Ei,{theme:s,children:"Notes"}),r.jsx("p",{style:{margin:0,color:s.colors.textSecondary},children:o.notes})]})]})})},A8=y.div`
  padding: ${a=>a.theme.spacing.xl};
  max-width: 1400px;
  margin: 0 auto;
`,R8=y.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${a=>a.theme.spacing.xl};
  flex-wrap: wrap;
  gap: ${a=>a.theme.spacing.md};
`,D8=y.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${a=>a.theme.colors.textPrimary};
  margin: 0;
`,z8=y.div`
  display: flex;
  gap: ${a=>a.theme.spacing.sm};
`,N8=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${a=>a.theme.spacing.md};
  margin-bottom: ${a=>a.theme.spacing.xl};
`,M8=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${a=>a.theme.spacing.lg};
  margin-bottom: ${a=>a.theme.spacing.xl};
`,xo=y(tt)`
  padding: ${a=>a.theme.spacing.lg};
`,vo=y.div`
  font-size: 0.875rem;
  color: ${a=>a.theme.colors.textSecondary};
  margin-bottom: ${a=>a.theme.spacing.xs};
`,yo=y.div`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${a=>a.theme.colors.textPrimary};
`,O8=y.div`
  display: flex;
  gap: ${a=>a.theme.spacing.sm};
`,k8=()=>{const{theme:a}=fe(),[i,o]=w.useState([]),[s,d]=w.useState(null),[f,h]=w.useState(!0),[v,p]=w.useState(null),[g,x]=w.useState(!1),[j,C]=w.useState(!1),[T,D]=w.useState(null),[S,E]=w.useState({status:"",month:new Date().getMonth()+1,year:new Date().getFullYear()});w.useEffect(()=>{R(),A()},[S]);const R=async()=>{try{h(!0);const Q=await tl.getAllSalaries(S);o(Q.data.salaries),p(null)}catch(Q){p(Q.response?.data?.message||"Failed to fetch salaries")}finally{h(!1)}},A=async()=>{try{const Q=await tl.getSalaryStats({month:S.month,year:S.year});d(Q.data.stats)}catch(Q){console.error("Failed to fetch stats:",Q)}},L=(Q,Z)=>{E(ue=>({...ue,[Q]:Z}))},V=async Q=>{try{await tl.generateSalary(Q),x(!1),R(),A()}catch(Z){throw new Error(Z.response?.data?.message||"Failed to generate salary")}},q=async Q=>{if(window.confirm("Are you sure you want to approve this salary?"))try{await tl.approveSalary(Q),R(),A()}catch(Z){p(Z.response?.data?.message||"Failed to approve salary")}},Y=async Q=>{if(window.confirm("Mark this salary as paid?"))try{await tl.markSalaryAsPaid(Q,{paymentMethod:"bank-transfer",transactionReference:`TXN-${Date.now()}`}),R(),A()}catch(Z){p(Z.response?.data?.message||"Failed to mark as paid")}},X=async Q=>{if(window.confirm("Are you sure you want to delete this salary record?"))try{await tl.deleteSalary(Q),R(),A()}catch(Z){p(Z.response?.data?.message||"Failed to delete salary")}},K=Q=>{D(Q),C(!0)},J=Q=>{const Z={pending:{variant:"warning",text:"Pending"},approved:{variant:"info",text:"Approved"},paid:{variant:"success",text:"Paid"},rejected:{variant:"danger",text:"Rejected"}},ue=Z[Q]||Z.pending;return r.jsx(Pt,{variant:ue.variant,children:ue.text})},ce=["January","February","March","April","May","June","July","August","September","October","November","December"],be=new Date().getFullYear(),Te=Array.from({length:5},(Q,Z)=>be-Z);return r.jsxs(A8,{theme:a,children:[r.jsxs(R8,{theme:a,children:[r.jsx(D8,{theme:a,children:"💰 Salary Management"}),r.jsxs(z8,{theme:a,children:[r.jsx(ge,{variant:"secondary",onClick:()=>window.print(),children:"📄 Export Report"}),r.jsx(ge,{variant:"primary",onClick:()=>x(!0),children:"+ Generate Salary"})]})]}),v&&r.jsx(He,{variant:"danger",onClose:()=>p(null),children:v}),s&&r.jsxs(M8,{theme:a,children:[r.jsxs(xo,{theme:a,children:[r.jsx(vo,{theme:a,children:"Total Salaries"}),r.jsx(yo,{theme:a,children:s.totalSalaries})]}),r.jsxs(xo,{theme:a,children:[r.jsx(vo,{theme:a,children:"Total Paid"}),r.jsxs(yo,{theme:a,children:["₹",s.totalPaid.toFixed(2)]})]}),r.jsxs(xo,{theme:a,children:[r.jsx(vo,{theme:a,children:"Avg Salary"}),r.jsxs(yo,{theme:a,children:["₹",s.avgSalary.toFixed(2)]})]}),r.jsxs(xo,{theme:a,children:[r.jsx(vo,{theme:a,children:"Pending Approval"}),r.jsx(yo,{theme:a,children:s.pending})]})]}),r.jsxs(N8,{theme:a,children:[r.jsx(Re,{label:"Month",value:S.month,onChange:Q=>L("month",Q.target.value),options:ce.map((Q,Z)=>({value:Z+1,label:Q}))}),r.jsx(Re,{label:"Year",value:S.year,onChange:Q=>L("year",Q.target.value),options:Te.map(Q=>({value:Q,label:Q.toString()}))}),r.jsx(Re,{label:"Status",value:S.status,onChange:Q=>L("status",Q.target.value),options:[{value:"",label:"All"},{value:"pending",label:"Pending"},{value:"approved",label:"Approved"},{value:"paid",label:"Paid"},{value:"rejected",label:"Rejected"}]})]}),r.jsx(tt,{children:r.jsxs(U,{children:[r.jsx(U.Head,{children:r.jsxs(U.Row,{children:[r.jsx(U.Header,{children:"Driver"}),r.jsx(U.Header,{children:"Month/Year"}),r.jsx(U.Header,{children:"Base Salary"}),r.jsx(U.Header,{children:"Bonuses"}),r.jsx(U.Header,{children:"Deductions"}),r.jsx(U.Header,{children:"Net Salary"}),r.jsx(U.Header,{children:"Status"}),r.jsx(U.Header,{children:"Actions"})]})}),r.jsx(U.Body,{loading:f,empty:i.length===0,children:i.map(Q=>r.jsxs(U.Row,{children:[r.jsx(U.Cell,{children:Q.driverId?.name||"N/A"}),r.jsxs(U.Cell,{children:[ce[Q.month-1]," ",Q.year]}),r.jsxs(U.Cell,{children:["₹",Q.baseSalary.toFixed(2)]}),r.jsxs(U.Cell,{children:["₹",(Q.tripBonus+Q.performanceBonus+Q.overtimeAmount).toFixed(2)]}),r.jsxs(U.Cell,{children:["₹",Q.totalDeductions.toFixed(2)]}),r.jsx(U.Cell,{children:r.jsxs("strong",{children:["₹",Q.netSalary.toFixed(2)]})}),r.jsx(U.Cell,{children:J(Q.status)}),r.jsx(U.Cell,{children:r.jsxs(O8,{theme:a,children:[r.jsx(ge,{size:"sm",variant:"ghost",onClick:()=>K(Q),children:"View"}),Q.status==="pending"&&r.jsxs(r.Fragment,{children:[r.jsx(ge,{size:"sm",variant:"success",onClick:()=>q(Q._id),children:"Approve"}),r.jsx(ge,{size:"sm",variant:"danger",onClick:()=>X(Q._id),children:"Delete"})]}),Q.status==="approved"&&r.jsx(ge,{size:"sm",variant:"primary",onClick:()=>Y(Q._id),children:"Mark Paid"})]})})]},Q._id))})]})}),g&&r.jsx(C8,{isOpen:g,onClose:()=>x(!1),onSubmit:V}),j&&r.jsx(T8,{isOpen:j,onClose:()=>C(!1),salary:T})]})},da="http://localhost:5000/api",fa=()=>({Authorization:`Bearer ${localStorage.getItem("token")}`}),nl={getAllExpenses:async(a={})=>{const i=new URLSearchParams;return Object.keys(a).forEach(s=>{a[s]&&i.append(s,a[s])}),(await ee.get(`${da}/expenses?${i}`,{headers:fa()})).data},getExpenseById:async a=>(await ee.get(`${da}/expenses/${a}`,{headers:fa()})).data,createExpense:async a=>{const i=new FormData;return Object.keys(a).forEach(s=>{s==="invoice"&&a[s]?i.append("invoice",a[s]):i.append(s,a[s])}),(await ee.post(`${da}/expenses`,i,{headers:{...fa(),"Content-Type":"multipart/form-data"}})).data},updateExpense:async(a,i)=>{const o=new FormData;return Object.keys(i).forEach(d=>{d==="invoice"&&i[d]instanceof File?o.append("invoice",i[d]):o.append(d,i[d])}),(await ee.put(`${da}/expenses/${a}`,o,{headers:{...fa(),"Content-Type":"multipart/form-data"}})).data},approveExpense:async(a,i)=>(await ee.post(`${da}/expenses/${a}/approve`,{notes:i},{headers:fa()})).data,markExpenseAsPaid:async a=>(await ee.post(`${da}/expenses/${a}/mark-paid`,{},{headers:fa()})).data,deleteExpense:async a=>(await ee.delete(`${da}/expenses/${a}`,{headers:fa()})).data,getExpenseStats:async(a={})=>{const i=new URLSearchParams;return Object.keys(a).forEach(s=>{a[s]&&i.append(s,a[s])}),(await ee.get(`${da}/expenses/stats?${i}`,{headers:fa()})).data},getExpenseBreakdown:async(a={})=>{const i=new URLSearchParams;return Object.keys(a).forEach(s=>{a[s]&&i.append(s,a[s])}),(await ee.get(`${da}/expenses/breakdown?${i}`,{headers:fa()})).data},getExpenseTrends:async(a=6)=>(await ee.get(`${da}/expenses/trends?months=${a}`,{headers:fa()})).data,generateExpenseReport:async(a,i)=>(await ee.get(`${da}/expenses/report?startDate=${a}&endDate=${i}`,{headers:fa()})).data},L8=y.form`
  display: flex;
  flex-direction: column;
  gap: ${a=>a.theme.spacing.md};
`,_8=y.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${a=>a.theme.spacing.md};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,tf=y.div`
  grid-column: 1 / -1;
`,B8=({isOpen:a,onClose:i,onSubmit:o})=>{const{theme:s}=fe(),[d,f]=w.useState(!1),[h,v]=w.useState(null),[p,g]=w.useState([]),[x,j]=w.useState([]),[C,T]=w.useState({category:"fuel",description:"",amount:"",truckId:"",driverId:"",paymentMethod:"cash",paidTo:"",invoiceNumber:"",date:new Date().toISOString().split("T")[0],notes:"",invoice:null});w.useEffect(()=>{a&&D()},[a]);const D=async()=>{try{const A={Authorization:`Bearer ${localStorage.getItem("token")}`},[L,V]=await Promise.all([ee.get("http://localhost:5000/api/trucks",{headers:A}),ee.get("http://localhost:5000/api/drivers",{headers:A})]);g(L.data.data.trucks),j(V.data.data.drivers)}catch{v("Failed to load data")}},S=R=>{const{name:A,value:L,files:V}=R.target;T(A==="invoice"?q=>({...q,invoice:V[0]}):q=>({...q,[A]:L}))},E=async R=>{R.preventDefault(),f(!0),v(null);try{await o(C),T({category:"fuel",description:"",amount:"",truckId:"",driverId:"",paymentMethod:"cash",paidTo:"",invoiceNumber:"",date:new Date().toISOString().split("T")[0],notes:"",invoice:null})}catch(A){v(A.message)}finally{f(!1)}};return r.jsx(sa,{isOpen:a,onClose:i,title:"Add Expense",size:"lg",footer:r.jsxs(r.Fragment,{children:[r.jsx(ge,{variant:"ghost",onClick:i,children:"Cancel"}),r.jsx(ge,{variant:"primary",onClick:E,loading:d,children:"Add Expense"})]}),children:r.jsxs(L8,{theme:s,onSubmit:E,children:[h&&r.jsx(He,{variant:"danger",children:h}),r.jsxs(_8,{theme:s,children:[r.jsx(Re,{label:"Category",name:"category",value:C.category,onChange:S,required:!0,options:[{value:"fuel",label:"Fuel"},{value:"maintenance",label:"Maintenance"},{value:"toll",label:"Toll"},{value:"salary",label:"Salary"},{value:"insurance",label:"Insurance"},{value:"permit",label:"Permit"},{value:"other",label:"Other"}]}),r.jsx(ie,{type:"number",label:"Amount (₹)",name:"amount",value:C.amount,onChange:S,required:!0,step:"0.01"}),r.jsx(tf,{children:r.jsx(ie,{label:"Description",name:"description",value:C.description,onChange:S,required:!0})}),r.jsx(Re,{label:"Truck (Optional)",name:"truckId",value:C.truckId,onChange:S,options:[{value:"",label:"None"},...p.map(R=>({value:R._id,label:`${R.truckNumber} - ${R.modelName}`}))]}),r.jsx(Re,{label:"Driver (Optional)",name:"driverId",value:C.driverId,onChange:S,options:[{value:"",label:"None"},...x.map(R=>({value:R._id,label:R.name}))]}),r.jsx(Re,{label:"Payment Method",name:"paymentMethod",value:C.paymentMethod,onChange:S,options:[{value:"cash",label:"Cash"},{value:"card",label:"Card"},{value:"bank-transfer",label:"Bank Transfer"},{value:"upi",label:"UPI"},{value:"cheque",label:"Cheque"}]}),r.jsx(ie,{label:"Paid To",name:"paidTo",value:C.paidTo,onChange:S}),r.jsx(ie,{label:"Invoice Number",name:"invoiceNumber",value:C.invoiceNumber,onChange:S}),r.jsx(ie,{type:"date",label:"Date",name:"date",value:C.date,onChange:S,required:!0}),r.jsx(tf,{children:r.jsx(ie,{type:"file",label:"Invoice Document (Optional)",name:"invoice",onChange:S,accept:"image/*,application/pdf"})}),r.jsx(tf,{children:r.jsx(ie,{as:"textarea",label:"Notes (Optional)",name:"notes",value:C.notes,onChange:S,rows:3})})]})]})})},H8=y.div`
  padding: ${a=>a.theme.spacing.xl};
  max-width: 1400px;
  margin: 0 auto;
`,U8=y.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${a=>a.theme.spacing.xl};
  flex-wrap: wrap;
  gap: ${a=>a.theme.spacing.md};
`,q8=y.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${a=>a.theme.colors.textPrimary};
  margin: 0;
`,F8=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${a=>a.theme.spacing.md};
  margin-bottom: ${a=>a.theme.spacing.xl};
`,Y8=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${a=>a.theme.spacing.lg};
  margin-bottom: ${a=>a.theme.spacing.xl};
`,bo=y(tt)`
  padding: ${a=>a.theme.spacing.lg};
`,jo=y.div`
  font-size: 0.875rem;
  color: ${a=>a.theme.colors.textSecondary};
  margin-bottom: ${a=>a.theme.spacing.xs};
`,So=y.div`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${a=>a.theme.colors.textPrimary};
`,G8=y.div`
  display: flex;
  gap: ${a=>a.theme.spacing.sm};
`,V8=()=>{const{theme:a}=fe(),[i,o]=w.useState([]),[s,d]=w.useState(null),[f,h]=w.useState(!0),[v,p]=w.useState(null),[g,x]=w.useState(!1),[j,C]=w.useState({category:"",status:"",startDate:"",endDate:""});w.useEffect(()=>{T(),D()},[j]);const T=async()=>{try{h(!0);const Y=await nl.getAllExpenses(j);o(Y.data.expenses),p(null)}catch(Y){p(Y.response?.data?.message||"Failed to fetch expenses")}finally{h(!1)}},D=async()=>{try{const Y=await nl.getExpenseStats({startDate:j.startDate,endDate:j.endDate});d(Y.data.stats)}catch(Y){console.error("Failed to fetch stats:",Y)}},S=(Y,X)=>{C(K=>({...K,[Y]:X}))},E=async Y=>{try{await nl.createExpense(Y),x(!1),T(),D()}catch(X){throw new Error(X.response?.data?.message||"Failed to create expense")}},R=async Y=>{if(window.confirm("Are you sure you want to approve this expense?"))try{await nl.approveExpense(Y),T(),D()}catch(X){p(X.response?.data?.message||"Failed to approve expense")}},A=async Y=>{if(window.confirm("Mark this expense as paid?"))try{await nl.markExpenseAsPaid(Y),T(),D()}catch(X){p(X.response?.data?.message||"Failed to mark as paid")}},L=async Y=>{if(window.confirm("Are you sure you want to delete this expense?"))try{await nl.deleteExpense(Y),T(),D()}catch(X){p(X.response?.data?.message||"Failed to delete expense")}},V=Y=>{const X={pending:{variant:"warning",text:"Pending"},approved:{variant:"info",text:"Approved"},paid:{variant:"success",text:"Paid"},rejected:{variant:"danger",text:"Rejected"}},K=X[Y]||X.pending;return r.jsx(Pt,{variant:K.variant,children:K.text})},q=Y=>{const X={fuel:{variant:"primary",text:"Fuel"},maintenance:{variant:"warning",text:"Maintenance"},toll:{variant:"info",text:"Toll"},salary:{variant:"success",text:"Salary"},insurance:{variant:"secondary",text:"Insurance"},permit:{variant:"info",text:"Permit"},other:{variant:"default",text:"Other"}},K=X[Y]||X.other;return r.jsx(Pt,{variant:K.variant,children:K.text})};return r.jsxs(H8,{theme:a,children:[r.jsxs(U8,{theme:a,children:[r.jsx(q8,{theme:a,children:"💳 Expense Management"}),r.jsx(ge,{variant:"primary",onClick:()=>x(!0),children:"+ Add Expense"})]}),v&&r.jsx(He,{variant:"danger",onClose:()=>p(null),children:v}),s&&r.jsxs(Y8,{theme:a,children:[r.jsxs(bo,{theme:a,children:[r.jsx(jo,{theme:a,children:"Total Expenses"}),r.jsx(So,{theme:a,children:s.totalExpenses})]}),r.jsxs(bo,{theme:a,children:[r.jsx(jo,{theme:a,children:"Total Amount"}),r.jsxs(So,{theme:a,children:["₹",s.totalAmount.toFixed(2)]})]}),r.jsxs(bo,{theme:a,children:[r.jsx(jo,{theme:a,children:"Avg Expense"}),r.jsxs(So,{theme:a,children:["₹",s.avgExpense.toFixed(2)]})]}),r.jsxs(bo,{theme:a,children:[r.jsx(jo,{theme:a,children:"Pending"}),r.jsx(So,{theme:a,children:s.pending})]})]}),r.jsxs(F8,{theme:a,children:[r.jsx(Re,{label:"Category",value:j.category,onChange:Y=>S("category",Y.target.value),options:[{value:"",label:"All"},{value:"fuel",label:"Fuel"},{value:"maintenance",label:"Maintenance"},{value:"toll",label:"Toll"},{value:"salary",label:"Salary"},{value:"insurance",label:"Insurance"},{value:"permit",label:"Permit"},{value:"other",label:"Other"}]}),r.jsx(Re,{label:"Status",value:j.status,onChange:Y=>S("status",Y.target.value),options:[{value:"",label:"All"},{value:"pending",label:"Pending"},{value:"approved",label:"Approved"},{value:"paid",label:"Paid"},{value:"rejected",label:"Rejected"}]}),r.jsx(ie,{type:"date",label:"Start Date",value:j.startDate,onChange:Y=>S("startDate",Y.target.value)}),r.jsx(ie,{type:"date",label:"End Date",value:j.endDate,onChange:Y=>S("endDate",Y.target.value)})]}),r.jsx(tt,{children:r.jsxs(U,{children:[r.jsx(U.Head,{children:r.jsxs(U.Row,{children:[r.jsx(U.Header,{children:"Date"}),r.jsx(U.Header,{children:"Category"}),r.jsx(U.Header,{children:"Description"}),r.jsx(U.Header,{children:"Amount"}),r.jsx(U.Header,{children:"Paid To"}),r.jsx(U.Header,{children:"Payment Method"}),r.jsx(U.Header,{children:"Status"}),r.jsx(U.Header,{children:"Actions"})]})}),r.jsx(U.Body,{loading:f,empty:i.length===0,children:i.map(Y=>r.jsxs(U.Row,{children:[r.jsx(U.Cell,{children:new Date(Y.date).toLocaleDateString()}),r.jsx(U.Cell,{children:q(Y.category)}),r.jsx(U.Cell,{children:Y.description}),r.jsx(U.Cell,{children:r.jsxs("strong",{children:["₹",Y.amount.toFixed(2)]})}),r.jsx(U.Cell,{children:Y.paidTo||"N/A"}),r.jsx(U.Cell,{children:Y.paymentMethod.replace("-"," ").toUpperCase()}),r.jsx(U.Cell,{children:V(Y.status)}),r.jsx(U.Cell,{children:r.jsxs(G8,{theme:a,children:[Y.status==="pending"&&r.jsxs(r.Fragment,{children:[r.jsx(ge,{size:"sm",variant:"success",onClick:()=>R(Y._id),children:"Approve"}),r.jsx(ge,{size:"sm",variant:"danger",onClick:()=>L(Y._id),children:"Delete"})]}),Y.status==="approved"&&r.jsx(ge,{size:"sm",variant:"primary",onClick:()=>A(Y._id),children:"Mark Paid"})]})})]},Y._id))})]})}),g&&r.jsx(B8,{isOpen:g,onClose:()=>x(!1),onSubmit:E})]})},X8=y.div`
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
`,Q8=y.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 1rem;
  padding: 2rem;
  color: white;
  margin-bottom: 2rem;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
  animation: slideDown 0.5s ease-out;

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,Z8=y.h1`
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
`,P8=y.p`
  font-size: 1.1rem;
  opacity: 0.9;
  margin: 0;
`,K8=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`,wo=y.div`
  background: ${a=>a.$gradient||"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"};
  border-radius: 1rem;
  padding: 2rem;
  color: white;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  animation: fadeInUp 0.6s ease-out;
  animation-delay: ${a=>a.$delay||"0s"};
  opacity: 0;
  animation-fill-mode: forwards;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25);
  }

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 70%
    );
    animation: pulse 3s ease-in-out infinite;
  }

  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }
`,Eo=y.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  opacity: 0.9;
`,Co=y.div`
  font-size: 0.875rem;
  opacity: 0.9;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
`,$o=y.div`
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1;
`,J8=y.div`
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  animation: fadeIn 0.8s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`,I8=y.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0 0 1.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: "";
    width: 4px;
    height: 24px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 2px;
  }
`,Gg=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`,Pa=y.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Ka=y.div`
  font-size: 0.875rem;
  color: #718096;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 500;
`,rl=y.div`
  font-size: 1.125rem;
  color: #2d3748;
  font-weight: 600;
`,af=y.input`
  padding: 0.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: all 0.3s ease;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`,Vg=y.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`,nf=y.button`
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;

  ${a=>a.$variant==="primary"&&`
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);

    &:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  `}

  ${a=>a.$variant==="secondary"&&`
    background: #e2e8f0;
    color: #2d3748;

    &:hover:not(:disabled) {
      background: #cbd5e0;
    }
  `}
`,W8=y.div`
  background: #c6f6d5;
  border: 2px solid #9ae6b4;
  color: #22543d;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  animation: slideIn 0.3s ease-out;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`,Xg=y.div`
  background: #fed7d7;
  border: 2px solid #fc8181;
  color: #742a2a;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
`,ew=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  gap: 1rem;

  &::after {
    content: "";
    width: 50px;
    height: 50px;
    border: 5px solid #e2e8f0;
    border-top-color: #667eea;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;function tw(){const{theme:a}=fe(),[i,o]=w.useState(null),[s,d]=w.useState(""),[f,h]=w.useState(!1),[v,p]=w.useState({name:"",email:"",phone:""}),[g,x]=w.useState(!1),[j,C]=w.useState(!1);w.useEffect(()=>{T()},[]);const T=async()=>{try{const R=localStorage.getItem("token"),A=JSON.parse(localStorage.getItem("user")),L=await ee.get(`http://localhost:5000/api/drivers/${A.id}`,{headers:{Authorization:`Bearer ${R}`}});o(L.data.data.driver),p({name:L.data.data.driver.name||"",email:L.data.data.driver.email||"",phone:L.data.data.driver.phone||""})}catch{d("Failed to load driver profile")}},D=()=>h(!0),S=R=>{p({...v,[R.target.name]:R.target.value})},E=async R=>{R.preventDefault(),x(!0);try{const A=localStorage.getItem("token"),L=JSON.parse(localStorage.getItem("user")),V=await ee.put(`http://localhost:5000/api/drivers/${L.id}`,v,{headers:{Authorization:`Bearer ${A}`}});o(V.data.data.driver),h(!1),d(""),C(!0),setTimeout(()=>C(!1),3e3)}catch{d("Failed to update profile")}x(!1)};return s&&!i?r.jsx(Xg,{children:s}):i?r.jsxs(X8,{children:[r.jsxs(Q8,{children:[r.jsxs(Z8,{children:["Welcome back, ",i.name,"!"]}),r.jsx(P8,{children:"Here's your dashboard overview"})]}),r.jsxs(K8,{children:[r.jsxs(wo,{$gradient:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",$delay:"0s",children:[r.jsx(Eo,{}),r.jsx(Co,{children:"Assigned Truck"}),r.jsx($o,{children:i.assignedTruck?.truckNumber||"Not Assigned"})]}),r.jsxs(wo,{$gradient:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",$delay:"0.1s",children:[r.jsx(Eo,{}),r.jsx(Co,{children:"Total Trips"}),r.jsx($o,{children:i.trips?.length||0})]}),r.jsxs(wo,{$gradient:"linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",$delay:"0.2s",children:[r.jsx(Eo,{}),r.jsx(Co,{children:"Experience"}),r.jsxs($o,{children:[i.experienceYears||0," Years"]})]}),r.jsxs(wo,{$gradient:"linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",$delay:"0.3s",children:[r.jsx(Eo,{}),r.jsx(Co,{children:"Status"}),r.jsx($o,{children:i.status||"Active"})]})]}),r.jsxs(J8,{children:[r.jsx(I8,{children:"Profile Information"}),j&&r.jsx(W8,{children:"Profile updated successfully!"}),s&&i&&r.jsx(Xg,{children:s}),f?r.jsxs("form",{onSubmit:E,children:[r.jsxs(Gg,{children:[r.jsxs(Pa,{children:[r.jsx(Ka,{children:"Full Name"}),r.jsx(af,{name:"name",value:v.name,onChange:S,required:!0})]}),r.jsxs(Pa,{children:[r.jsx(Ka,{children:"Email Address"}),r.jsx(af,{type:"email",name:"email",value:v.email,onChange:S,required:!0})]}),r.jsxs(Pa,{children:[r.jsx(Ka,{children:"Phone Number"}),r.jsx(af,{type:"tel",name:"phone",value:v.phone,onChange:S,required:!0})]}),r.jsxs(Pa,{children:[r.jsx(Ka,{children:"License Number"}),r.jsx(rl,{children:i.licenseNumber})]})]}),r.jsxs(Vg,{children:[r.jsx(nf,{type:"submit",$variant:"primary",disabled:g,children:g?"Saving...":"Save Changes"}),r.jsx(nf,{type:"button",$variant:"secondary",onClick:()=>h(!1),disabled:g,children:"Cancel"})]})]}):r.jsxs(r.Fragment,{children:[r.jsxs(Gg,{children:[r.jsxs(Pa,{children:[r.jsx(Ka,{children:"Full Name"}),r.jsx(rl,{children:i.name})]}),r.jsxs(Pa,{children:[r.jsx(Ka,{children:"Email Address"}),r.jsx(rl,{children:i.email})]}),r.jsxs(Pa,{children:[r.jsx(Ka,{children:"Phone Number"}),r.jsx(rl,{children:i.phone})]}),r.jsxs(Pa,{children:[r.jsx(Ka,{children:"License Number"}),r.jsx(rl,{children:i.licenseNumber})]}),i.address&&r.jsxs(Pa,{children:[r.jsx(Ka,{children:"Address"}),r.jsx(rl,{children:i.address})]})]}),r.jsx(Vg,{children:r.jsx(nf,{$variant:"primary",onClick:D,children:"Edit Profile"})})]})]})]}):r.jsx(ew,{children:"Loading your dashboard..."})}function aw(){const{id:a}=x2(),i=Na(),[o,s]=w.useState(null),[d,f]=w.useState([]),[h,v]=w.useState(!1),[p,g]=w.useState({name:"",phone:"",email:"",licenseNumber:"",experienceYears:0,assignedTruck:"",address:""}),[x,j]=w.useState({type:"",text:""}),C=async()=>{try{const E=await Wa.get(`/api/drivers/${a}`);s(E.data),g({name:E.data.name||"",phone:E.data.phone||"",email:E.data.email||"",licenseNumber:E.data.licenseNumber||"",experienceYears:E.data.experienceYears??0,assignedTruck:E.data.assignedTruck?._id||"",address:E.data.address||""})}catch(E){console.error("Error fetching driver:",E),j({type:"error",text:"Error loading driver details."})}},T=async()=>{try{const E=await Wa.get("/api/trucks");f(E.data||[])}catch(E){console.error("Error fetching trucks:",E)}};w.useEffect(()=>{C(),T()},[a]);const D=E=>{const{name:R,value:A}=E.target;g(L=>({...L,[R]:A}))},S=async()=>{try{if(isAddingNewDriver&&(!p.name.trim()||!p.password?.trim())){j({type:"error",text:"Name and password are required."});return}const E={name:p.name?.trim(),phone:p.phone?.trim(),email:p.email?.trim().toLowerCase(),licenseNumber:p.licenseNumber?.trim(),assignedTruck:p.assignedTruck||null,experienceYears:Number(p.experienceYears)||0,address:p.address?.trim()||"",...isAddingNewDriver&&{password:p.password?.trim()}};isAddingNewDriver?(await Wa.post("/api/drivers",E),j({type:"success",text:"Driver added successfully."})):(await Wa.put(`/api/drivers/${a}`,E),j({type:"success",text:"Driver updated successfully."})),v(!1),C()}catch(E){console.error("Error saving driver:",E),j({type:"error",text:E.response?.data?.message||"Failed to save driver."})}finally{setTimeout(()=>j({type:"",text:""}),3e3)}};return o?r.jsxs("div",{className:"driver-profile-container",children:[r.jsxs("div",{className:"driver-profile-header",children:[r.jsxs("button",{className:"drivers-btn drivers-btn-back",onClick:()=>i(-1),children:[r.jsx(ix,{style:{marginRight:6}})," Back"]}),r.jsxs("h2",{children:[r.jsx(Oi,{style:{marginRight:8}})," Driver Profile"]})]}),x.text&&r.jsxs("div",{className:`drivers-alert ${x.type==="success"?"drivers-alert-success":"drivers-alert-error"}`,children:[x.type==="success"?r.jsx(dr,{style:{marginRight:6}}):r.jsx(bc,{style:{marginRight:6}}),x.text]}),r.jsxs("div",{className:"driver-profile-content",children:[r.jsxs("div",{className:"driver-profile-field",children:[r.jsx("label",{children:"Name:"}),h?r.jsx("input",{type:"text",name:"name",value:p.name,onChange:D}):r.jsx("span",{children:o.name})]}),r.jsxs("div",{className:"driver-profile-field",children:[r.jsx("label",{children:"Phone:"}),h?r.jsx("input",{type:"text",name:"phone",value:p.phone,onChange:D}):r.jsx("span",{children:o.phone})]}),r.jsxs("div",{className:"driver-profile-field",children:[r.jsx("label",{children:"Email:"}),h?r.jsx("input",{type:"email",name:"email",value:p.email,onChange:D}):r.jsx("span",{children:o.email})]}),r.jsxs("div",{className:"driver-profile-field",children:[r.jsx("label",{children:"License Number:"}),h?r.jsx("input",{type:"text",name:"licenseNumber",value:p.licenseNumber,onChange:D}):r.jsx("span",{children:o.licenseNumber})]}),r.jsxs("div",{className:"driver-profile-field",children:[r.jsx("label",{children:"Experience:"}),h?r.jsx("input",{type:"number",name:"experienceYears",value:p.experienceYears,onChange:D,min:"0",max:"50"}):r.jsxs("span",{children:[o.experienceYears||0," years"]})]}),r.jsxs("div",{className:"driver-profile-field",children:[r.jsx("label",{children:"Assigned Truck:"}),h?r.jsxs("select",{name:"assignedTruck",value:p.assignedTruck,onChange:D,children:[r.jsx("option",{value:"",children:"-- Select --"}),d.map(E=>r.jsx("option",{value:E._id,children:E.truckNumber},E._id))]}):r.jsx("span",{children:o.assignedTruck?.truckNumber||"N/A"})]}),r.jsxs("div",{className:"driver-profile-field",children:[r.jsx("label",{children:"Address:"}),h?r.jsx("input",{type:"text",name:"address",value:p.address,onChange:D}):r.jsx("span",{children:o.address||"N/A"})]})]}),r.jsx("div",{className:"driver-profile-actions",children:h?r.jsxs(r.Fragment,{children:[r.jsxs("button",{className:"drivers-btn drivers-btn-save",onClick:S,children:[r.jsx(dr,{style:{marginRight:4}})," Save"]}),r.jsxs("button",{className:"drivers-btn drivers-btn-cancel",onClick:()=>v(!1),children:[r.jsx(jc,{style:{marginRight:4}})," Cancel"]})]}):r.jsxs("button",{className:"drivers-btn drivers-btn-edit",onClick:()=>v(!0),children:[r.jsx(Bf,{style:{marginRight:4}})," Edit"]})})]}):r.jsx("div",{className:"driver-profile-loading",children:"Loading driver details..."})}const nw=y.form`
  display: flex;
  flex-direction: column;
  gap: ${a=>a.theme.spacing.md};
`,rw=y.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${a=>a.theme.spacing.md};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,lw=y.div`
  grid-column: 1 / -1;
`,iw=({isOpen:a,onClose:i,onSubmit:o})=>{const{theme:s}=fe(),[d,f]=w.useState(!1),[h,v]=w.useState(null),[p,g]=w.useState(null),[x,j]=w.useState({truckId:"",source:"",destination:"",distance:"",notes:""});w.useEffect(()=>{a&&C()},[a]);const C=async()=>{try{const S=localStorage.getItem("token"),E=JSON.parse(localStorage.getItem("user")),A=(await ee.get(`http://localhost:5000/api/drivers/${E.id}`,{headers:{Authorization:`Bearer ${S}`}})).data.data.driver.assignedTruck;g(A),A&&j(L=>({...L,truckId:A._id}))}catch{v("Failed to load truck information")}},T=S=>{const{name:E,value:R}=S.target;j(A=>({...A,[E]:R}))},D=async S=>{if(S.preventDefault(),!p){v("No truck assigned to you. Please contact admin.");return}f(!0),v(null);try{await o(x),j({truckId:p._id,source:"",destination:"",distance:"",notes:""})}catch(E){v(E.message)}finally{f(!1)}};return r.jsx(sa,{isOpen:a,onClose:i,title:"Start New Trip",footer:r.jsxs(r.Fragment,{children:[r.jsx(ge,{variant:"ghost",onClick:i,children:"Cancel"}),r.jsx(ge,{variant:"primary",onClick:D,loading:d,children:"Start Trip"})]}),children:r.jsxs(nw,{theme:s,onSubmit:D,children:[h&&r.jsx(He,{variant:"danger",children:h}),p?r.jsxs(He,{variant:"info",children:[r.jsx("strong",{children:"Assigned Truck:"})," ",p.truckNumber," -"," ",p.modelName]}):r.jsx(He,{variant:"warning",children:"No truck assigned. Please contact your administrator."}),r.jsxs(rw,{theme:s,children:[r.jsx(ie,{label:"Source",name:"source",value:x.source,onChange:T,placeholder:"Starting location",required:!0}),r.jsx(ie,{label:"Destination",name:"destination",value:x.destination,onChange:T,placeholder:"Destination location",required:!0})]}),r.jsx(ie,{type:"number",label:"Estimated Distance (km)",name:"distance",value:x.distance,onChange:T,placeholder:"250",step:"0.1",required:!0}),r.jsx(lw,{children:r.jsx(ie,{as:"textarea",label:"Notes (Optional)",name:"notes",value:x.notes,onChange:T,rows:3,placeholder:"Add any notes about the trip..."})})]})})},sw=y.form`
  display: flex;
  flex-direction: column;
  gap: ${a=>a.theme.spacing.md};
`,ow=y.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${a=>a.theme.spacing.md};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,cw=y.div`
  padding: ${a=>a.theme.spacing.md};
  background: ${a=>a.theme.colors.background};
  border-radius: ${a=>a.theme.borderRadius.md};
  margin-bottom: ${a=>a.theme.spacing.md};
`,To=y.div`
  display: flex;
  justify-content: space-between;
  padding: ${a=>a.theme.spacing.sm} 0;
  border-bottom: 1px solid ${a=>a.theme.colors.border};

  &:last-child {
    border-bottom: none;
  }
`,Ao=y.span`
  color: ${a=>a.theme.colors.textSecondary};
  font-size: 0.875rem;
`,Ro=y.span`
  color: ${a=>a.theme.colors.textPrimary};
  font-weight: 500;
`,uw=({isOpen:a,onClose:i,trip:o,onSubmit:s})=>{const{theme:d}=fe(),[f,h]=w.useState(!1),[v,p]=w.useState(null),[g,x]=w.useState({actualDistance:"",fuelUsed:"",fuelCost:"",notes:""}),j=T=>{const{name:D,value:S}=T.target;x(E=>({...E,[D]:S}))},C=async()=>{h(!0),p(null);try{await s(g)}catch(T){p(T.message)}finally{h(!1)}};return o?r.jsx(sa,{isOpen:a,onClose:i,title:"Complete Trip",footer:r.jsxs(r.Fragment,{children:[r.jsx(ge,{variant:"ghost",onClick:i,children:"Cancel"}),r.jsx(ge,{variant:"success",onClick:C,loading:f,children:"Complete Trip"})]}),children:r.jsxs(sw,{theme:d,children:[v&&r.jsx(He,{variant:"danger",children:v}),r.jsxs(cw,{theme:d,children:[r.jsxs(To,{theme:d,children:[r.jsx(Ao,{theme:d,children:"Source"}),r.jsx(Ro,{theme:d,children:o.source})]}),r.jsxs(To,{theme:d,children:[r.jsx(Ao,{theme:d,children:"Destination"}),r.jsx(Ro,{theme:d,children:o.destination})]}),r.jsxs(To,{theme:d,children:[r.jsx(Ao,{theme:d,children:"Estimated Distance"}),r.jsxs(Ro,{theme:d,children:[o.distance," km"]})]}),r.jsxs(To,{theme:d,children:[r.jsx(Ao,{theme:d,children:"Started At"}),r.jsx(Ro,{theme:d,children:new Date(o.startTime).toLocaleString()})]})]}),r.jsxs(ow,{theme:d,children:[r.jsx(ie,{type:"number",label:"Actual Distance (km)",name:"actualDistance",value:g.actualDistance,onChange:j,placeholder:o.distance,step:"0.1",required:!0}),r.jsx(ie,{type:"number",label:"Fuel Used (Liters)",name:"fuelUsed",value:g.fuelUsed,onChange:j,placeholder:"50",step:"0.1",required:!0})]}),r.jsx(ie,{type:"number",label:"Fuel Cost (₹)",name:"fuelCost",value:g.fuelCost,onChange:j,placeholder:"5000",step:"0.01"}),r.jsx(ie,{as:"textarea",label:"Completion Notes",name:"notes",value:g.notes,onChange:j,rows:3,placeholder:"Any issues or notes about the trip..."})]})}):null},dw=y.div`
  padding: ${a=>a.theme.spacing.xl};
  max-width: 1400px;
  margin: 0 auto;
`,fw=y.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${a=>a.theme.spacing.xl};
  flex-wrap: wrap;
  gap: ${a=>a.theme.spacing.md};
`,hw=y.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${a=>a.theme.colors.textPrimary};
  margin: 0;
`,mw=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${a=>a.theme.spacing.md};
  margin-bottom: ${a=>a.theme.spacing.xl};
`,pw=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${a=>a.theme.spacing.lg};
  margin-bottom: ${a=>a.theme.spacing.xl};
`,Ci=y(tt)`
  padding: ${a=>a.theme.spacing.lg};
  text-align: center;
`,$i=y.div`
  font-size: 2rem;
  font-weight: 700;
  color: ${a=>a.theme.colors.primary};
  margin-bottom: ${a=>a.theme.spacing.xs};
`,Ti=y.div`
  font-size: 0.875rem;
  color: ${a=>a.theme.colors.textSecondary};
`,gw=y.div`
  display: flex;
  gap: ${a=>a.theme.spacing.sm};
`,xw=y.div`
  display: flex;
  flex-direction: column;
  gap: ${a=>a.theme.spacing.xs};
`,vw=y.div`
  font-weight: 500;
  color: ${a=>a.theme.colors.textPrimary};
`,yw=y.div`
  font-size: 0.875rem;
  color: ${a=>a.theme.colors.textSecondary};
`,bw=()=>{const{theme:a}=fe(),[i,o]=w.useState([]),[s,d]=w.useState(null),[f,h]=w.useState(!0),[v,p]=w.useState(null),[g,x]=w.useState(!1),[j,C]=w.useState(!1),[T,D]=w.useState(null),[S,E]=w.useState({status:""});w.useEffect(()=>{R(),A()},[S]);const R=async()=>{try{h(!0);const K=localStorage.getItem("token"),J=JSON.parse(localStorage.getItem("user")),ce=new URLSearchParams({driverId:J.id,...S}),be=await ee.get(`http://localhost:5000/api/trips?${ce}`,{headers:{Authorization:`Bearer ${K}`}});console.log(be),o(be.data.data.trips),p(null)}catch(K){p(K.response?.data?.message||"Failed to fetch trips")}finally{h(!1)}},A=async()=>{try{const K=localStorage.getItem("token"),J=JSON.parse(localStorage.getItem("user")),ce=await ee.get(`http://localhost:5000/api/trips/stats?driverId=${J.id}`,{headers:{Authorization:`Bearer ${K}`}});console.log(ce),d(ce.data.data.stats)}catch(K){console.error("Failed to fetch stats:",K)}},L=(K,J)=>{E(ce=>({...ce,[K]:J}))},V=async K=>{try{const J=localStorage.getItem("token"),ce=JSON.parse(localStorage.getItem("user"));await ee.post("http://localhost:5000/api/trips",{...K,driverId:ce.id},{headers:{Authorization:`Bearer ${J}`}}),x(!1),R(),A()}catch(J){throw new Error(J.response?.data?.message||"Failed to create trip")}},q=K=>{D(K),C(!0)},Y=async K=>{try{const J=localStorage.getItem("token");await ee.post(`http://localhost:5000/api/trips/${T._id}/complete`,K,{headers:{Authorization:`Bearer ${J}`}}),C(!1),R(),A()}catch(J){throw new Error(J.response?.data?.message||"Failed to complete trip")}},X=K=>{const J={ongoing:{variant:"info",text:"Ongoing"},completed:{variant:"success",text:"Completed"},cancelled:{variant:"danger",text:"Cancelled"}},ce=J[K]||J.ongoing;return r.jsx(Pt,{variant:ce.variant,children:ce.text})};return r.jsxs(dw,{theme:a,children:[r.jsxs(fw,{theme:a,children:[r.jsx(hw,{theme:a,children:"🛣️ My Trips"}),r.jsx(ge,{variant:"primary",onClick:()=>x(!0),children:"+ Start New Trip"})]}),v&&r.jsx(He,{variant:"danger",onClose:()=>p(null),children:v}),s&&r.jsxs(pw,{theme:a,children:[r.jsxs(Ci,{theme:a,children:[r.jsx($i,{theme:a,children:s.totalTrips}),r.jsx(Ti,{theme:a,children:"Total Trips"})]}),r.jsxs(Ci,{theme:a,children:[r.jsx($i,{theme:a,children:s.completedTrips}),r.jsx(Ti,{theme:a,children:"Completed"})]}),r.jsxs(Ci,{theme:a,children:[r.jsx($i,{theme:a,children:s.ongoingTrips}),r.jsx(Ti,{theme:a,children:"Ongoing"})]}),r.jsxs(Ci,{theme:a,children:[r.jsxs($i,{theme:a,children:[s.totalDistance.toFixed(0)," km"]}),r.jsx(Ti,{theme:a,children:"Total Distance"})]}),r.jsxs(Ci,{theme:a,children:[r.jsx($i,{theme:a,children:s.averageFuelEfficiency?`${s.averageFuelEfficiency} km/L`:"N/A"}),r.jsx(Ti,{theme:a,children:"Avg Fuel Efficiency"})]})]}),r.jsx(mw,{theme:a,children:r.jsx(Re,{label:"Status",value:S.status,onChange:K=>L("status",K.target.value),options:[{value:"",label:"All Trips"},{value:"ongoing",label:"Ongoing"},{value:"completed",label:"Completed"},{value:"cancelled",label:"Cancelled"}]})}),r.jsx(tt,{children:f?r.jsx(N1,{text:"Loading trips..."}):r.jsxs(U,{children:[r.jsx(U.Head,{children:r.jsxs(U.Row,{children:[r.jsx(U.Header,{children:"Date"}),r.jsx(U.Header,{children:"Truck"}),r.jsx(U.Header,{children:"Route"}),r.jsx(U.Header,{children:"Distance"}),r.jsx(U.Header,{children:"Fuel Used"}),r.jsx(U.Header,{children:"Status"}),r.jsx(U.Header,{children:"Actions"})]})}),r.jsx(U.Body,{empty:i.length===0,emptyMessage:"No trips found",children:i.map(K=>r.jsxs(U.Row,{children:[r.jsx(U.Cell,{children:new Date(K.startTime).toLocaleDateString()}),r.jsx(U.Cell,{children:K.truckId?.truckNumber||"N/A"}),r.jsx(U.Cell,{children:r.jsxs(xw,{children:[r.jsxs(vw,{theme:a,children:[K.source," → ",K.destination]}),K.distance&&r.jsxs(yw,{theme:a,children:[K.distance," km"]})]})}),r.jsx(U.Cell,{children:K.actualDistance?`${K.actualDistance} km`:K.distance?`${K.distance} km (Est.)`:"N/A"}),r.jsx(U.Cell,{children:K.fuelUsed?`${K.fuelUsed} L`:"N/A"}),r.jsx(U.Cell,{children:X(K.status)}),r.jsx(U.Cell,{children:r.jsxs(gw,{theme:a,children:[K.status==="ongoing"&&r.jsx(ge,{size:"sm",variant:"success",onClick:()=>q(K),children:"Complete"}),K.status==="completed"&&r.jsx(ge,{size:"sm",variant:"ghost",children:"View Details"})]})})]},K._id))})]})}),g&&r.jsx(iw,{isOpen:g,onClose:()=>x(!1),onSubmit:V}),j&&r.jsx(uw,{isOpen:j,onClose:()=>C(!1),trip:T,onSubmit:Y})]})},jw=y.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Sw=y.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,ww=({isOpen:a,onClose:i,onSubmit:o})=>{const{theme:s}=fe(),[d,f]=w.useState(!1),[h,v]=w.useState(null),[p,g]=w.useState(null),[x,j]=w.useState({truckId:"",fuelStation:{name:"",location:""},fuelType:"diesel",quantityLiters:"",pricePerLiter:"",odometerReading:"",paymentMethod:"cash",notes:""});w.useEffect(()=>{a&&C()},[a]);const C=async()=>{try{const S=localStorage.getItem("token"),E=JSON.parse(localStorage.getItem("user")),A=(await ee.get(`http://localhost:5000/api/drivers/${E.id}`,{headers:{Authorization:`Bearer ${S}`}})).data.data.driver.assignedTruck;g(A),A&&j(L=>({...L,truckId:A._id}))}catch{v("Failed to load truck information")}},T=S=>{const{name:E,value:R}=S.target;if(E.startsWith("fuelStation.")){const A=E.split(".")[1];j(L=>({...L,fuelStation:{...L.fuelStation,[A]:R}}))}else j(A=>({...A,[E]:R}))},D=async S=>{if(S.preventDefault(),!p){v("No truck assigned to you");return}f(!0),v(null);try{await o(x),j({truckId:p._id,fuelStation:{name:"",location:""},fuelType:"diesel",quantityLiters:"",pricePerLiter:"",odometerReading:"",paymentMethod:"cash",notes:""})}catch(E){v(E.message)}finally{f(!1)}};return r.jsx(sa,{isOpen:a,onClose:i,title:"Add Fuel Log",footer:r.jsxs(r.Fragment,{children:[r.jsx(ge,{variant:"ghost",onClick:i,children:"Cancel"}),r.jsx(ge,{variant:"primary",onClick:D,loading:d,children:"Add Fuel Log"})]}),children:r.jsxs(jw,{theme:s,onSubmit:D,children:[h&&r.jsx(He,{variant:"danger",children:h}),p?r.jsxs(He,{variant:"info",children:[r.jsx("strong",{children:"Truck:"})," ",p.truckNumber," -"," ",p.modelName]}):r.jsx(He,{variant:"warning",children:"No truck assigned"}),r.jsxs(Sw,{theme:s,children:[r.jsx(ie,{label:"Fuel Station Name",name:"fuelStation.name",value:x.fuelStation.name,onChange:T,required:!0}),r.jsx(ie,{label:"Station Location",name:"fuelStation.location",value:x.fuelStation.location,onChange:T,required:!0}),r.jsx(ie,{type:"number",label:"Quantity (Liters)",name:"quantityLiters",value:x.quantityLiters,onChange:T,required:!0,step:"0.01"}),r.jsx(ie,{type:"number",label:"Price per Liter (₹)",name:"pricePerLiter",value:x.pricePerLiter,onChange:T,required:!0,step:"0.01"}),r.jsx(ie,{type:"number",label:"Odometer Reading (km)",name:"odometerReading",value:x.odometerReading,onChange:T,required:!0}),r.jsx(Re,{label:"Payment Method",name:"paymentMethod",value:x.paymentMethod,onChange:T,options:[{value:"cash",label:"Cash"},{value:"card",label:"Card"},{value:"upi",label:"UPI"},{value:"fuel-card",label:"Fuel Card"}]})]}),r.jsx(ie,{as:"textarea",label:"Notes (Optional)",name:"notes",value:x.notes,onChange:T,rows:3})]})})},Ew=y.div`
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
`,Cw=y.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
`,$w=y.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${a=>a.theme.colors.textPrimary};
  margin: 0;
`,Tw=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`,Do=y(tt)`
  padding: 1.5rem;
  background: ${a=>a.$gradient||"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"};
  color: white;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;y.div`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`;const zo=y.div`
  font-size: 0.875rem;
  opacity: 0.9;
  margin-bottom: 0.25rem;
`,No=y.div`
  font-size: 2rem;
  font-weight: 700;
`,Aw=y.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  font-size: 1.2rem;
  color: ${a=>a.theme.colors.textSecondary};
`,Rw=()=>{const{theme:a}=fe(),[i,o]=w.useState([]),[s,d]=w.useState(null),[f,h]=w.useState(!0),[v,p]=w.useState(null),[g,x]=w.useState(!1);w.useEffect(()=>{j()},[]);const j=async()=>{try{h(!0);const S=localStorage.getItem("token"),E=JSON.parse(localStorage.getItem("user")),R=await ee.get(`http://localhost:5000/api/fuel?driverId=${E.id}`,{headers:{Authorization:`Bearer ${S}`}});o(R.data.data.fuelLogs),C(R.data.data.fuelLogs),p(null)}catch(S){p(S.response?.data?.message||"Failed to fetch fuel logs")}finally{h(!1)}},C=S=>{const E=S.length,R=S.reduce((V,q)=>V+q.quantityLiters,0),A=S.reduce((V,q)=>V+q.totalCost,0),L=S.reduce((V,q)=>V+(q.fuelEfficiency||0),0)/E;d({totalLogs:E,totalFuel:R.toFixed(2),totalCost:A.toFixed(2),avgEfficiency:L.toFixed(2)})},T=async S=>{try{const E=localStorage.getItem("token"),R=JSON.parse(localStorage.getItem("user"));await ee.post("http://localhost:5000/api/fuel",{...S,driverId:R.id},{headers:{Authorization:`Bearer ${E}`}}),x(!1),j()}catch(E){throw new Error(E.response?.data?.message||"Failed to add fuel log")}},D=S=>{const E={pending:{variant:"warning",text:"Pending"},verified:{variant:"success",text:"Verified"},rejected:{variant:"danger",text:"Rejected"}},R=E[S]||E.pending;return r.jsx(Pt,{variant:R.variant,children:R.text})};return f?r.jsx(Aw,{children:"Loading fuel logs..."}):r.jsxs(Ew,{children:[r.jsxs(Cw,{children:[r.jsx($w,{theme:a,children:"My Fuel Logs"}),r.jsx(ge,{variant:"primary",onClick:()=>x(!0),children:"+ Add Fuel Log"})]}),v&&r.jsx(He,{variant:"danger",children:v}),s&&r.jsxs(Tw,{children:[r.jsxs(Do,{$gradient:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",children:[r.jsx(zo,{children:"Total Logs"}),r.jsx(No,{children:s.totalLogs})]}),r.jsxs(Do,{$gradient:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",children:[r.jsx(zo,{children:"Total Fuel"}),r.jsxs(No,{children:[s.totalFuel," L"]})]}),r.jsxs(Do,{$gradient:"linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",children:[r.jsx(zo,{children:"Total Cost"}),r.jsxs(No,{children:["₹",s.totalCost]})]}),r.jsxs(Do,{$gradient:"linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",children:[r.jsx(zo,{children:"Avg Efficiency"}),r.jsxs(No,{children:[s.avgEfficiency," km/L"]})]})]}),r.jsx(tt,{children:r.jsxs(U,{children:[r.jsx(U.Head,{children:r.jsxs(U.Row,{children:[r.jsx(U.Header,{children:"Date"}),r.jsx(U.Header,{children:"Truck"}),r.jsx(U.Header,{children:"Station"}),r.jsx(U.Header,{children:"Quantity"}),r.jsx(U.Header,{children:"Cost"}),r.jsx(U.Header,{children:"Efficiency"}),r.jsx(U.Header,{children:"Status"})]})}),r.jsx(U.Body,{empty:i.length===0,emptyMessage:"No fuel logs found",children:i.map(S=>r.jsxs(U.Row,{children:[r.jsx(U.Cell,{children:new Date(S.filledAt).toLocaleDateString()}),r.jsx(U.Cell,{children:S.truckId?.truckNumber||"N/A"}),r.jsx(U.Cell,{children:S.fuelStation?.name||"N/A"}),r.jsxs(U.Cell,{children:[S.quantityLiters.toFixed(2)," L"]}),r.jsxs(U.Cell,{children:["₹",S.totalCost.toFixed(2)]}),r.jsx(U.Cell,{children:S.fuelEfficiency?`${S.fuelEfficiency} km/L`:"N/A"}),r.jsx(U.Cell,{children:D(S.verificationStatus)})]},S._id))})]})}),g&&r.jsx(ww,{isOpen:g,onClose:()=>x(!1),onSubmit:T})]})},Dw=y.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,zw=y.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Nw=({isOpen:a,onClose:i,onSubmit:o})=>{const{theme:s}=fe(),[d,f]=w.useState(!1),[h,v]=w.useState(null),[p,g]=w.useState(null),[x,j]=w.useState({truckId:"",maintenanceType:"emergency",category:"engine",priority:"high",issueDescription:"",odometerReading:""});w.useEffect(()=>{a&&C()},[a]);const C=async()=>{try{const S=localStorage.getItem("token"),E=JSON.parse(localStorage.getItem("user")),A=(await ee.get(`http://localhost:5000/api/drivers/${E.id}`,{headers:{Authorization:`Bearer ${S}`}})).data.data.driver.assignedTruck;g(A),A&&j(L=>({...L,truckId:A._id}))}catch{v("Failed to load truck information")}},T=S=>{const{name:E,value:R}=S.target;j(A=>({...A,[E]:R}))},D=async S=>{if(S.preventDefault(),!p){v("No truck assigned to you");return}f(!0),v(null);try{const E=JSON.parse(localStorage.getItem("user"));await o({...x,reportedBy:E.id}),j({truckId:p._id,maintenanceType:"emergency",category:"engine",priority:"high",issueDescription:"",odometerReading:""})}catch(E){v(E.message)}finally{f(!1)}};return r.jsx(sa,{isOpen:a,onClose:i,title:"Report Maintenance Issue",footer:r.jsxs(r.Fragment,{children:[r.jsx(ge,{variant:"ghost",onClick:i,children:"Cancel"}),r.jsx(ge,{variant:"primary",onClick:D,loading:d,children:"Report Issue"})]}),children:r.jsxs(Dw,{theme:s,onSubmit:D,children:[h&&r.jsx(He,{variant:"danger",children:h}),p?r.jsxs(He,{variant:"info",children:[r.jsx("strong",{children:"Truck:"})," ",p.truckNumber," -"," ",p.modelName]}):r.jsx(He,{variant:"warning",children:"No truck assigned"}),r.jsxs(zw,{theme:s,children:[r.jsx(Re,{label:"Issue Type",name:"maintenanceType",value:x.maintenanceType,onChange:T,options:[{value:"emergency",label:"Emergency"},{value:"breakdown",label:"Breakdown"},{value:"regular",label:"Regular"}]}),r.jsx(Re,{label:"Category",name:"category",value:x.category,onChange:T,options:[{value:"engine",label:"Engine"},{value:"transmission",label:"Transmission"},{value:"brakes",label:"Brakes"},{value:"tires",label:"Tires"},{value:"electrical",label:"Electrical"},{value:"body",label:"Body"},{value:"other",label:"Other"}]}),r.jsx(Re,{label:"Priority",name:"priority",value:x.priority,onChange:T,options:[{value:"critical",label:"Critical"},{value:"high",label:"High"},{value:"medium",label:"Medium"},{value:"low",label:"Low"}]}),r.jsx(ie,{type:"number",label:"Current Odometer (km)",name:"odometerReading",value:x.odometerReading,onChange:T,required:!0})]}),r.jsx(ie,{as:"textarea",label:"Issue Description",name:"issueDescription",value:x.issueDescription,onChange:T,required:!0,rows:4,placeholder:"Describe the issue in detail..."})]})})},Mw=y.div`
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
`,Ow=y.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
`,kw=y.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${a=>a.theme.colors.textPrimary};
  margin: 0;
`,Lw=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`,Mo=y(tt)`
  padding: 1.5rem;
  background: ${a=>a.$gradient||"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"};
  color: white;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`,Oo=y.div`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`,ko=y.div`
  font-size: 0.875rem;
  opacity: 0.9;
  margin-bottom: 0.25rem;
`,Lo=y.div`
  font-size: 2rem;
  font-weight: 700;
`,_w=y.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  font-size: 1.2rem;
  color: ${a=>a.theme.colors.textSecondary};
`,Bw=()=>{const{theme:a}=fe(),[i,o]=w.useState([]),[s,d]=w.useState(null),[f,h]=w.useState(!0),[v,p]=w.useState(null),[g,x]=w.useState(!1);w.useEffect(()=>{j()},[]);const j=async()=>{try{h(!0);const E=localStorage.getItem("token"),R=JSON.parse(localStorage.getItem("user")),L=(await ee.get(`http://localhost:5000/api/drivers/${R.id}`,{headers:{Authorization:`Bearer ${E}`}})).data.data.driver.assignedTruck?._id;if(L){const V=await ee.get(`http://localhost:5000/api/maintenance?truckId=${L}`,{headers:{Authorization:`Bearer ${E}`}});o(V.data.data.maintenanceLogs),C(V.data.data.maintenanceLogs)}p(null)}catch(E){p(E.response?.data?.message||"Failed to fetch maintenance logs")}finally{h(!1)}},C=E=>{const R=E.length,A=E.filter(q=>q.status==="scheduled").length,L=E.filter(q=>q.status==="in-progress").length,V=E.filter(q=>q.status==="completed").length;d({totalLogs:R,scheduled:A,inProgress:L,completed:V})},T=async E=>{try{const R=localStorage.getItem("token");await ee.post("http://localhost:5000/api/maintenance",E,{headers:{Authorization:`Bearer ${R}`}}),x(!1),j()}catch(R){throw new Error(R.response?.data?.message||"Failed to report maintenance")}},D=E=>{const R={scheduled:{variant:"info",text:"Scheduled"},"in-progress":{variant:"warning",text:"In Progress"},completed:{variant:"success",text:"Completed"},cancelled:{variant:"danger",text:"Cancelled"}},A=R[E]||R.scheduled;return r.jsx(Pt,{variant:A.variant,children:A.text})},S=E=>{const R={low:{variant:"default",text:"Low"},medium:{variant:"info",text:"Medium"},high:{variant:"warning",text:"High"},critical:{variant:"danger",text:"Critical"}},A=R[E]||R.medium;return r.jsx(Pt,{variant:A.variant,children:A.text})};return f?r.jsx(_w,{children:"Loading maintenance logs..."}):r.jsxs(Mw,{children:[r.jsxs(Ow,{children:[r.jsx(kw,{theme:a,children:"Maintenance Reports"}),r.jsx(ge,{variant:"primary",onClick:()=>x(!0),children:"+ Report Issue"})]}),v&&r.jsx(He,{variant:"danger",children:v}),s&&r.jsxs(Lw,{children:[r.jsxs(Mo,{$gradient:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",children:[r.jsx(Oo,{}),r.jsx(ko,{children:"Total Reports"}),r.jsx(Lo,{children:s.totalLogs})]}),r.jsxs(Mo,{$gradient:"linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",children:[r.jsx(Oo,{}),r.jsx(ko,{children:"Scheduled"}),r.jsx(Lo,{children:s.scheduled})]}),r.jsxs(Mo,{$gradient:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",children:[r.jsx(Oo,{}),r.jsx(ko,{children:"In Progress"}),r.jsx(Lo,{children:s.inProgress})]}),r.jsxs(Mo,{$gradient:"linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",children:[r.jsx(Oo,{}),r.jsx(ko,{children:"Completed"}),r.jsx(Lo,{children:s.completed})]})]}),r.jsx(tt,{children:r.jsxs(U,{children:[r.jsx(U.Head,{children:r.jsxs(U.Row,{children:[r.jsx(U.Header,{children:"Date"}),r.jsx(U.Header,{children:"Type"}),r.jsx(U.Header,{children:"Category"}),r.jsx(U.Header,{children:"Issue"}),r.jsx(U.Header,{children:"Priority"}),r.jsx(U.Header,{children:"Status"})]})}),r.jsx(U.Body,{empty:i.length===0,emptyMessage:"No maintenance reports found",children:i.map(E=>r.jsxs(U.Row,{children:[r.jsx(U.Cell,{children:new Date(E.startDate).toLocaleDateString()}),r.jsx(U.Cell,{children:E.maintenanceType}),r.jsx(U.Cell,{children:E.category}),r.jsx(U.Cell,{children:E.issueDescription.length>50?`${E.issueDescription.substring(0,50)}...`:E.issueDescription}),r.jsx(U.Cell,{children:S(E.priority)}),r.jsx(U.Cell,{children:D(E.status)})]},E._id))})]})}),g&&r.jsx(Nw,{isOpen:g,onClose:()=>x(!1),onSubmit:T})]})},$t=({children:a,role:i})=>{const o=localStorage.getItem("token"),s=localStorage.getItem("userRole");return o?i&&s!==i?r.jsx(zi,{to:"/",replace:!0}):a:r.jsx(zi,{to:i==="driver"?"/driver-login":"/login",replace:!0})},rf=({children:a})=>{const i=localStorage.getItem("token"),o=localStorage.getItem("userRole");return i?r.jsx(zi,{to:o==="driver"?"/driver-dashboard":"/dashboard",replace:!0}):a},Hw=()=>{const{theme:a}=fe();return r.jsx(h4,{theme:a,children:r.jsx(tb,{children:r.jsxs(N2,{children:[r.jsx(Je,{path:"/",element:r.jsx(zi,{to:"/login",replace:!0})}),r.jsx(Je,{path:"/login",element:r.jsx(rf,{children:r.jsx(d5,{})})}),r.jsx(Je,{path:"/signup",element:r.jsx(rf,{children:r.jsx(A5,{})})}),r.jsx(Je,{path:"/driver-login",element:r.jsx(rf,{children:r.jsx(b5,{})})}),r.jsx(Je,{path:"/dashboard",element:r.jsx($t,{role:"owner",children:r.jsx(Ea,{children:r.jsx(c3,{})})})}),r.jsx(Je,{path:"/trucks",element:r.jsx($t,{role:"owner",children:r.jsx(Ea,{children:r.jsx(Y3,{})})})}),r.jsx(Je,{path:"/trucks/add",element:r.jsx($t,{role:"owner",children:r.jsx(Ea,{children:r.jsx(o6,{})})})}),r.jsx(Je,{path:"/drivers",element:r.jsx($t,{role:"owner",children:r.jsx(Ea,{children:r.jsx(c6,{})})})}),r.jsx(Je,{path:"/add-driver",element:r.jsx($t,{role:"owner",children:r.jsx(Ea,{children:r.jsx(b6,{})})})}),r.jsx(Je,{path:"/trips",element:r.jsx($t,{role:"owner",children:r.jsx(Ea,{children:r.jsx(z6,{})})})}),r.jsx(Je,{path:"/fuel",element:r.jsx($t,{role:"owner",children:r.jsx(Ea,{children:r.jsx(K6,{})})})}),r.jsx(Je,{path:"/maintenance",element:r.jsx($t,{role:"owner",children:r.jsx(Ea,{children:r.jsx(w8,{})})})}),r.jsx(Je,{path:"/salaries",element:r.jsx($t,{role:"owner",children:r.jsx(Ea,{children:r.jsx(k8,{})})})}),r.jsx(Je,{path:"/expenses",element:r.jsx($t,{role:"owner",children:r.jsx(Ea,{children:r.jsx(V8,{})})})}),r.jsx(Je,{path:"/driver-dashboard",element:r.jsx($t,{role:"driver",children:r.jsx(xi,{children:r.jsx(tw,{})})})}),r.jsx(Je,{path:"/driver-profile",element:r.jsx($t,{role:"driver",children:r.jsx(xi,{children:r.jsx(aw,{})})})}),r.jsx(Je,{path:"/my-trips",element:r.jsx($t,{role:"driver",children:r.jsx(xi,{children:r.jsx(bw,{})})})}),r.jsx(Je,{path:"/driver-fuel-logs",element:r.jsx($t,{role:"driver",children:r.jsx(xi,{children:r.jsx(Rw,{})})})}),r.jsx(Je,{path:"/driver-maintenance",element:r.jsx($t,{role:"driver",children:r.jsx(xi,{children:r.jsx(Bw,{})})})}),r.jsx(Je,{path:"*",element:r.jsx(zi,{to:"/",replace:!0})})]})})})};function Uw(){return r.jsx(fb,{children:r.jsx(Hw,{})})}qy.createRoot(document.getElementById("root")).render(r.jsx(At.StrictMode,{children:r.jsx(Uw,{})}));
