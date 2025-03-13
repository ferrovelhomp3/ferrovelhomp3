var Ux=Object.defineProperty;var Hx=(t,e,n)=>e in t?Ux(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var pe=(t,e,n)=>(Hx(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Wl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function km(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Wx(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var ow={exports:{}},vh={},aw={exports:{}},we={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ul=Symbol.for("react.element"),qx=Symbol.for("react.portal"),Kx=Symbol.for("react.fragment"),Gx=Symbol.for("react.strict_mode"),Qx=Symbol.for("react.profiler"),Yx=Symbol.for("react.provider"),Xx=Symbol.for("react.context"),Jx=Symbol.for("react.forward_ref"),Zx=Symbol.for("react.suspense"),eI=Symbol.for("react.memo"),tI=Symbol.for("react.lazy"),My=Symbol.iterator;function nI(t){return t===null||typeof t!="object"?null:(t=My&&t[My]||t["@@iterator"],typeof t=="function"?t:null)}var lw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},uw=Object.assign,cw={};function ho(t,e,n){this.props=t,this.context=e,this.refs=cw,this.updater=n||lw}ho.prototype.isReactComponent={};ho.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ho.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function hw(){}hw.prototype=ho.prototype;function Lm(t,e,n){this.props=t,this.context=e,this.refs=cw,this.updater=n||lw}var Om=Lm.prototype=new hw;Om.constructor=Lm;uw(Om,ho.prototype);Om.isPureReactComponent=!0;var Ny=Array.isArray,fw=Object.prototype.hasOwnProperty,Dm={current:null},dw={key:!0,ref:!0,__self:!0,__source:!0};function pw(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)fw.call(e,r)&&!dw.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ul,type:t,key:s,ref:o,props:i,_owner:Dm.current}}function rI(t,e){return{$$typeof:ul,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Mm(t){return typeof t=="object"&&t!==null&&t.$$typeof===ul}function iI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Vy=/\/+/g;function Lf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?iI(""+t.key):e.toString(36)}function Du(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ul:case qx:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Lf(o,0):r,Ny(i)?(n="",t!=null&&(n=t.replace(Vy,"$&/")+"/"),Du(i,e,n,"",function(u){return u})):i!=null&&(Mm(i)&&(i=rI(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Vy,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Ny(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Lf(s,a);o+=Du(s,e,n,l,i)}else if(l=nI(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Lf(s,a++),o+=Du(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ql(t,e,n){if(t==null)return t;var r=[],i=0;return Du(t,r,"","",function(s){return e.call(n,s,i++)}),r}function sI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var qt={current:null},Mu={transition:null},oI={ReactCurrentDispatcher:qt,ReactCurrentBatchConfig:Mu,ReactCurrentOwner:Dm};function mw(){throw Error("act(...) is not supported in production builds of React.")}we.Children={map:ql,forEach:function(t,e,n){ql(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ql(t,function(){e++}),e},toArray:function(t){return ql(t,function(e){return e})||[]},only:function(t){if(!Mm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};we.Component=ho;we.Fragment=Kx;we.Profiler=Qx;we.PureComponent=Lm;we.StrictMode=Gx;we.Suspense=Zx;we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oI;we.act=mw;we.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=uw({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Dm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)fw.call(e,l)&&!dw.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ul,type:t.type,key:i,ref:s,props:r,_owner:o}};we.createContext=function(t){return t={$$typeof:Xx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Yx,_context:t},t.Consumer=t};we.createElement=pw;we.createFactory=function(t){var e=pw.bind(null,t);return e.type=t,e};we.createRef=function(){return{current:null}};we.forwardRef=function(t){return{$$typeof:Jx,render:t}};we.isValidElement=Mm;we.lazy=function(t){return{$$typeof:tI,_payload:{_status:-1,_result:t},_init:sI}};we.memo=function(t,e){return{$$typeof:eI,type:t,compare:e===void 0?null:e}};we.startTransition=function(t){var e=Mu.transition;Mu.transition={};try{t()}finally{Mu.transition=e}};we.unstable_act=mw;we.useCallback=function(t,e){return qt.current.useCallback(t,e)};we.useContext=function(t){return qt.current.useContext(t)};we.useDebugValue=function(){};we.useDeferredValue=function(t){return qt.current.useDeferredValue(t)};we.useEffect=function(t,e){return qt.current.useEffect(t,e)};we.useId=function(){return qt.current.useId()};we.useImperativeHandle=function(t,e,n){return qt.current.useImperativeHandle(t,e,n)};we.useInsertionEffect=function(t,e){return qt.current.useInsertionEffect(t,e)};we.useLayoutEffect=function(t,e){return qt.current.useLayoutEffect(t,e)};we.useMemo=function(t,e){return qt.current.useMemo(t,e)};we.useReducer=function(t,e,n){return qt.current.useReducer(t,e,n)};we.useRef=function(t){return qt.current.useRef(t)};we.useState=function(t){return qt.current.useState(t)};we.useSyncExternalStore=function(t,e,n){return qt.current.useSyncExternalStore(t,e,n)};we.useTransition=function(){return qt.current.useTransition()};we.version="18.3.1";aw.exports=we;var F=aw.exports;const Nm=km(F);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aI=F,lI=Symbol.for("react.element"),uI=Symbol.for("react.fragment"),cI=Object.prototype.hasOwnProperty,hI=aI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fI={key:!0,ref:!0,__self:!0,__source:!0};function gw(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)cI.call(e,r)&&!fI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:lI,type:t,key:s,ref:o,props:i,_owner:hI.current}}vh.Fragment=uI;vh.jsx=gw;vh.jsxs=gw;ow.exports=vh;var G=ow.exports,jd={},_w={exports:{}},yn={},yw={exports:{}},vw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(Q,ne){var oe=Q.length;Q.push(ne);e:for(;0<oe;){var _e=oe-1>>>1,ae=Q[_e];if(0<i(ae,ne))Q[_e]=ne,Q[oe]=ae,oe=_e;else break e}}function n(Q){return Q.length===0?null:Q[0]}function r(Q){if(Q.length===0)return null;var ne=Q[0],oe=Q.pop();if(oe!==ne){Q[0]=oe;e:for(var _e=0,ae=Q.length,M=ae>>>1;_e<M;){var z=2*(_e+1)-1,k=Q[z],V=z+1,j=Q[V];if(0>i(k,oe))V<ae&&0>i(j,k)?(Q[_e]=j,Q[V]=oe,_e=V):(Q[_e]=k,Q[z]=oe,_e=z);else if(V<ae&&0>i(j,oe))Q[_e]=j,Q[V]=oe,_e=V;else break e}}return ne}function i(Q,ne){var oe=Q.sortIndex-ne.sortIndex;return oe!==0?oe:Q.id-ne.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],h=1,f=null,d=3,m=!1,_=!1,y=!1,E=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(Q){for(var ne=n(u);ne!==null;){if(ne.callback===null)r(u);else if(ne.startTime<=Q)r(u),ne.sortIndex=ne.expirationTime,e(l,ne);else break;ne=n(u)}}function L(Q){if(y=!1,b(Q),!_)if(n(l)!==null)_=!0,de(O);else{var ne=n(u);ne!==null&&Ee(L,ne.startTime-Q)}}function O(Q,ne){_=!1,y&&(y=!1,w(S),S=-1),m=!0;var oe=d;try{for(b(ne),f=n(l);f!==null&&(!(f.expirationTime>ne)||Q&&!C());){var _e=f.callback;if(typeof _e=="function"){f.callback=null,d=f.priorityLevel;var ae=_e(f.expirationTime<=ne);ne=t.unstable_now(),typeof ae=="function"?f.callback=ae:f===n(l)&&r(l),b(ne)}else r(l);f=n(l)}if(f!==null)var M=!0;else{var z=n(u);z!==null&&Ee(L,z.startTime-ne),M=!1}return M}finally{f=null,d=oe,m=!1}}var D=!1,x=null,S=-1,T=5,I=-1;function C(){return!(t.unstable_now()-I<T)}function P(){if(x!==null){var Q=t.unstable_now();I=Q;var ne=!0;try{ne=x(!0,Q)}finally{ne?A():(D=!1,x=null)}}else D=!1}var A;if(typeof v=="function")A=function(){v(P)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,ce=Z.port2;Z.port1.onmessage=P,A=function(){ce.postMessage(null)}}else A=function(){E(P,0)};function de(Q){x=Q,D||(D=!0,A())}function Ee(Q,ne){S=E(function(){Q(t.unstable_now())},ne)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(Q){Q.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,de(O))},t.unstable_forceFrameRate=function(Q){0>Q||125<Q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<Q?Math.floor(1e3/Q):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(Q){switch(d){case 1:case 2:case 3:var ne=3;break;default:ne=d}var oe=d;d=ne;try{return Q()}finally{d=oe}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(Q,ne){switch(Q){case 1:case 2:case 3:case 4:case 5:break;default:Q=3}var oe=d;d=Q;try{return ne()}finally{d=oe}},t.unstable_scheduleCallback=function(Q,ne,oe){var _e=t.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?_e+oe:_e):oe=_e,Q){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=oe+ae,Q={id:h++,callback:ne,priorityLevel:Q,startTime:oe,expirationTime:ae,sortIndex:-1},oe>_e?(Q.sortIndex=oe,e(u,Q),n(l)===null&&Q===n(u)&&(y?(w(S),S=-1):y=!0,Ee(L,oe-_e))):(Q.sortIndex=ae,e(l,Q),_||m||(_=!0,de(O))),Q},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(Q){var ne=d;return function(){var oe=d;d=ne;try{return Q.apply(this,arguments)}finally{d=oe}}}})(vw);yw.exports=vw;var dI=yw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pI=F,_n=dI;function q(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ww=new Set,Pa={};function Zi(t,e){Bs(t,e),Bs(t+"Capture",e)}function Bs(t,e){for(Pa[t]=e,t=0;t<e.length;t++)ww.add(e[t])}var dr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bd=Object.prototype.hasOwnProperty,mI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fy={},zy={};function gI(t){return Bd.call(zy,t)?!0:Bd.call(Fy,t)?!1:mI.test(t)?zy[t]=!0:(Fy[t]=!0,!1)}function _I(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function yI(t,e,n,r){if(e===null||typeof e>"u"||_I(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Kt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Rt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Rt[t]=new Kt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Rt[e]=new Kt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Rt[t]=new Kt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Rt[t]=new Kt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Rt[t]=new Kt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Rt[t]=new Kt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Rt[t]=new Kt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Rt[t]=new Kt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Rt[t]=new Kt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Vm=/[\-:]([a-z])/g;function Fm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Vm,Fm);Rt[e]=new Kt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Vm,Fm);Rt[e]=new Kt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Vm,Fm);Rt[e]=new Kt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Rt[t]=new Kt(t,1,!1,t.toLowerCase(),null,!1,!1)});Rt.xlinkHref=new Kt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Rt[t]=new Kt(t,1,!1,t.toLowerCase(),null,!0,!0)});function zm(t,e,n,r){var i=Rt.hasOwnProperty(e)?Rt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(yI(e,n,i,r)&&(n=null),r||i===null?gI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Er=pI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Kl=Symbol.for("react.element"),gs=Symbol.for("react.portal"),_s=Symbol.for("react.fragment"),jm=Symbol.for("react.strict_mode"),$d=Symbol.for("react.profiler"),Ew=Symbol.for("react.provider"),Sw=Symbol.for("react.context"),Bm=Symbol.for("react.forward_ref"),Ud=Symbol.for("react.suspense"),Hd=Symbol.for("react.suspense_list"),$m=Symbol.for("react.memo"),Pr=Symbol.for("react.lazy"),Tw=Symbol.for("react.offscreen"),jy=Symbol.iterator;function jo(t){return t===null||typeof t!="object"?null:(t=jy&&t[jy]||t["@@iterator"],typeof t=="function"?t:null)}var et=Object.assign,Of;function ta(t){if(Of===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Of=e&&e[1]||""}return`
`+Of+t}var Df=!1;function Mf(t,e){if(!t||Df)return"";Df=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Df=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ta(t):""}function vI(t){switch(t.tag){case 5:return ta(t.type);case 16:return ta("Lazy");case 13:return ta("Suspense");case 19:return ta("SuspenseList");case 0:case 2:case 15:return t=Mf(t.type,!1),t;case 11:return t=Mf(t.type.render,!1),t;case 1:return t=Mf(t.type,!0),t;default:return""}}function Wd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case _s:return"Fragment";case gs:return"Portal";case $d:return"Profiler";case jm:return"StrictMode";case Ud:return"Suspense";case Hd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Sw:return(t.displayName||"Context")+".Consumer";case Ew:return(t._context.displayName||"Context")+".Provider";case Bm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $m:return e=t.displayName||null,e!==null?e:Wd(t.type)||"Memo";case Pr:e=t._payload,t=t._init;try{return Wd(t(e))}catch{}}return null}function wI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wd(e);case 8:return e===jm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ri(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function bw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function EI(t){var e=bw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Gl(t){t._valueTracker||(t._valueTracker=EI(t))}function xw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=bw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function lc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function qd(t,e){var n=e.checked;return et({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function By(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ri(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Iw(t,e){e=e.checked,e!=null&&zm(t,"checked",e,!1)}function Kd(t,e){Iw(t,e);var n=ri(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Gd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Gd(t,e.type,ri(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function $y(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Gd(t,e,n){(e!=="number"||lc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var na=Array.isArray;function Cs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ri(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Qd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(q(91));return et({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Uy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(q(92));if(na(n)){if(1<n.length)throw Error(q(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ri(n)}}function Rw(t,e){var n=ri(e.value),r=ri(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Hy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Aw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Yd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Aw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ql,Cw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ql=Ql||document.createElement("div"),Ql.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ql.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ka(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var fa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},SI=["Webkit","ms","Moz","O"];Object.keys(fa).forEach(function(t){SI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),fa[e]=fa[t]})});function Pw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||fa.hasOwnProperty(t)&&fa[t]?(""+e).trim():e+"px"}function kw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Pw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var TI=et({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xd(t,e){if(e){if(TI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(q(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(q(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(q(61))}if(e.style!=null&&typeof e.style!="object")throw Error(q(62))}}function Jd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zd=null;function Um(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ep=null,Ps=null,ks=null;function Wy(t){if(t=fl(t)){if(typeof ep!="function")throw Error(q(280));var e=t.stateNode;e&&(e=bh(e),ep(t.stateNode,t.type,e))}}function Lw(t){Ps?ks?ks.push(t):ks=[t]:Ps=t}function Ow(){if(Ps){var t=Ps,e=ks;if(ks=Ps=null,Wy(t),e)for(t=0;t<e.length;t++)Wy(e[t])}}function Dw(t,e){return t(e)}function Mw(){}var Nf=!1;function Nw(t,e,n){if(Nf)return t(e,n);Nf=!0;try{return Dw(t,e,n)}finally{Nf=!1,(Ps!==null||ks!==null)&&(Mw(),Ow())}}function La(t,e){var n=t.stateNode;if(n===null)return null;var r=bh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(q(231,e,typeof n));return n}var tp=!1;if(dr)try{var Bo={};Object.defineProperty(Bo,"passive",{get:function(){tp=!0}}),window.addEventListener("test",Bo,Bo),window.removeEventListener("test",Bo,Bo)}catch{tp=!1}function bI(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var da=!1,uc=null,cc=!1,np=null,xI={onError:function(t){da=!0,uc=t}};function II(t,e,n,r,i,s,o,a,l){da=!1,uc=null,bI.apply(xI,arguments)}function RI(t,e,n,r,i,s,o,a,l){if(II.apply(this,arguments),da){if(da){var u=uc;da=!1,uc=null}else throw Error(q(198));cc||(cc=!0,np=u)}}function es(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Vw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function qy(t){if(es(t)!==t)throw Error(q(188))}function AI(t){var e=t.alternate;if(!e){if(e=es(t),e===null)throw Error(q(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return qy(i),t;if(s===r)return qy(i),e;s=s.sibling}throw Error(q(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(q(189))}}if(n.alternate!==r)throw Error(q(190))}if(n.tag!==3)throw Error(q(188));return n.stateNode.current===n?t:e}function Fw(t){return t=AI(t),t!==null?zw(t):null}function zw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=zw(t);if(e!==null)return e;t=t.sibling}return null}var jw=_n.unstable_scheduleCallback,Ky=_n.unstable_cancelCallback,CI=_n.unstable_shouldYield,PI=_n.unstable_requestPaint,lt=_n.unstable_now,kI=_n.unstable_getCurrentPriorityLevel,Hm=_n.unstable_ImmediatePriority,Bw=_n.unstable_UserBlockingPriority,hc=_n.unstable_NormalPriority,LI=_n.unstable_LowPriority,$w=_n.unstable_IdlePriority,wh=null,qn=null;function OI(t){if(qn&&typeof qn.onCommitFiberRoot=="function")try{qn.onCommitFiberRoot(wh,t,void 0,(t.current.flags&128)===128)}catch{}}var On=Math.clz32?Math.clz32:NI,DI=Math.log,MI=Math.LN2;function NI(t){return t>>>=0,t===0?32:31-(DI(t)/MI|0)|0}var Yl=64,Xl=4194304;function ra(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function fc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ra(a):(s&=o,s!==0&&(r=ra(s)))}else o=n&~i,o!==0?r=ra(o):s!==0&&(r=ra(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-On(e),i=1<<n,r|=t[n],e&=~i;return r}function VI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function FI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-On(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=VI(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function rp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Uw(){var t=Yl;return Yl<<=1,!(Yl&4194240)&&(Yl=64),t}function Vf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function cl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-On(e),t[e]=n}function zI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-On(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Wm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-On(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Ne=0;function Hw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Ww,qm,qw,Kw,Gw,ip=!1,Jl=[],Ur=null,Hr=null,Wr=null,Oa=new Map,Da=new Map,Or=[],jI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gy(t,e){switch(t){case"focusin":case"focusout":Ur=null;break;case"dragenter":case"dragleave":Hr=null;break;case"mouseover":case"mouseout":Wr=null;break;case"pointerover":case"pointerout":Oa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Da.delete(e.pointerId)}}function $o(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=fl(e),e!==null&&qm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function BI(t,e,n,r,i){switch(e){case"focusin":return Ur=$o(Ur,t,e,n,r,i),!0;case"dragenter":return Hr=$o(Hr,t,e,n,r,i),!0;case"mouseover":return Wr=$o(Wr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Oa.set(s,$o(Oa.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Da.set(s,$o(Da.get(s)||null,t,e,n,r,i)),!0}return!1}function Qw(t){var e=Oi(t.target);if(e!==null){var n=es(e);if(n!==null){if(e=n.tag,e===13){if(e=Vw(n),e!==null){t.blockedOn=e,Gw(t.priority,function(){qw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Nu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=sp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Zd=r,n.target.dispatchEvent(r),Zd=null}else return e=fl(n),e!==null&&qm(e),t.blockedOn=n,!1;e.shift()}return!0}function Qy(t,e,n){Nu(t)&&n.delete(e)}function $I(){ip=!1,Ur!==null&&Nu(Ur)&&(Ur=null),Hr!==null&&Nu(Hr)&&(Hr=null),Wr!==null&&Nu(Wr)&&(Wr=null),Oa.forEach(Qy),Da.forEach(Qy)}function Uo(t,e){t.blockedOn===e&&(t.blockedOn=null,ip||(ip=!0,_n.unstable_scheduleCallback(_n.unstable_NormalPriority,$I)))}function Ma(t){function e(i){return Uo(i,t)}if(0<Jl.length){Uo(Jl[0],t);for(var n=1;n<Jl.length;n++){var r=Jl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Ur!==null&&Uo(Ur,t),Hr!==null&&Uo(Hr,t),Wr!==null&&Uo(Wr,t),Oa.forEach(e),Da.forEach(e),n=0;n<Or.length;n++)r=Or[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Or.length&&(n=Or[0],n.blockedOn===null);)Qw(n),n.blockedOn===null&&Or.shift()}var Ls=Er.ReactCurrentBatchConfig,dc=!0;function UI(t,e,n,r){var i=Ne,s=Ls.transition;Ls.transition=null;try{Ne=1,Km(t,e,n,r)}finally{Ne=i,Ls.transition=s}}function HI(t,e,n,r){var i=Ne,s=Ls.transition;Ls.transition=null;try{Ne=4,Km(t,e,n,r)}finally{Ne=i,Ls.transition=s}}function Km(t,e,n,r){if(dc){var i=sp(t,e,n,r);if(i===null)Kf(t,e,r,pc,n),Gy(t,r);else if(BI(i,t,e,n,r))r.stopPropagation();else if(Gy(t,r),e&4&&-1<jI.indexOf(t)){for(;i!==null;){var s=fl(i);if(s!==null&&Ww(s),s=sp(t,e,n,r),s===null&&Kf(t,e,r,pc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Kf(t,e,r,null,n)}}var pc=null;function sp(t,e,n,r){if(pc=null,t=Um(r),t=Oi(t),t!==null)if(e=es(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Vw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return pc=t,null}function Yw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(kI()){case Hm:return 1;case Bw:return 4;case hc:case LI:return 16;case $w:return 536870912;default:return 16}default:return 16}}var Mr=null,Gm=null,Vu=null;function Xw(){if(Vu)return Vu;var t,e=Gm,n=e.length,r,i="value"in Mr?Mr.value:Mr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Vu=i.slice(t,1<r?1-r:void 0)}function Fu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Zl(){return!0}function Yy(){return!1}function vn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Zl:Yy,this.isPropagationStopped=Yy,this}return et(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zl)},persist:function(){},isPersistent:Zl}),e}var fo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qm=vn(fo),hl=et({},fo,{view:0,detail:0}),WI=vn(hl),Ff,zf,Ho,Eh=et({},hl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ym,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ho&&(Ho&&t.type==="mousemove"?(Ff=t.screenX-Ho.screenX,zf=t.screenY-Ho.screenY):zf=Ff=0,Ho=t),Ff)},movementY:function(t){return"movementY"in t?t.movementY:zf}}),Xy=vn(Eh),qI=et({},Eh,{dataTransfer:0}),KI=vn(qI),GI=et({},hl,{relatedTarget:0}),jf=vn(GI),QI=et({},fo,{animationName:0,elapsedTime:0,pseudoElement:0}),YI=vn(QI),XI=et({},fo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),JI=vn(XI),ZI=et({},fo,{data:0}),Jy=vn(ZI),e8={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},t8={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},n8={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function r8(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=n8[t])?!!e[t]:!1}function Ym(){return r8}var i8=et({},hl,{key:function(t){if(t.key){var e=e8[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Fu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?t8[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ym,charCode:function(t){return t.type==="keypress"?Fu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Fu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),s8=vn(i8),o8=et({},Eh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zy=vn(o8),a8=et({},hl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ym}),l8=vn(a8),u8=et({},fo,{propertyName:0,elapsedTime:0,pseudoElement:0}),c8=vn(u8),h8=et({},Eh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),f8=vn(h8),d8=[9,13,27,32],Xm=dr&&"CompositionEvent"in window,pa=null;dr&&"documentMode"in document&&(pa=document.documentMode);var p8=dr&&"TextEvent"in window&&!pa,Jw=dr&&(!Xm||pa&&8<pa&&11>=pa),ev=" ",tv=!1;function Zw(t,e){switch(t){case"keyup":return d8.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function e5(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ys=!1;function m8(t,e){switch(t){case"compositionend":return e5(e);case"keypress":return e.which!==32?null:(tv=!0,ev);case"textInput":return t=e.data,t===ev&&tv?null:t;default:return null}}function g8(t,e){if(ys)return t==="compositionend"||!Xm&&Zw(t,e)?(t=Xw(),Vu=Gm=Mr=null,ys=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Jw&&e.locale!=="ko"?null:e.data;default:return null}}var _8={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!_8[t.type]:e==="textarea"}function t5(t,e,n,r){Lw(r),e=mc(e,"onChange"),0<e.length&&(n=new Qm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ma=null,Na=null;function y8(t){f5(t,0)}function Sh(t){var e=Es(t);if(xw(e))return t}function v8(t,e){if(t==="change")return e}var n5=!1;if(dr){var Bf;if(dr){var $f="oninput"in document;if(!$f){var rv=document.createElement("div");rv.setAttribute("oninput","return;"),$f=typeof rv.oninput=="function"}Bf=$f}else Bf=!1;n5=Bf&&(!document.documentMode||9<document.documentMode)}function iv(){ma&&(ma.detachEvent("onpropertychange",r5),Na=ma=null)}function r5(t){if(t.propertyName==="value"&&Sh(Na)){var e=[];t5(e,Na,t,Um(t)),Nw(y8,e)}}function w8(t,e,n){t==="focusin"?(iv(),ma=e,Na=n,ma.attachEvent("onpropertychange",r5)):t==="focusout"&&iv()}function E8(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Sh(Na)}function S8(t,e){if(t==="click")return Sh(e)}function T8(t,e){if(t==="input"||t==="change")return Sh(e)}function b8(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Vn=typeof Object.is=="function"?Object.is:b8;function Va(t,e){if(Vn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Bd.call(e,i)||!Vn(t[i],e[i]))return!1}return!0}function sv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ov(t,e){var n=sv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=sv(n)}}function i5(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?i5(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function s5(){for(var t=window,e=lc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=lc(t.document)}return e}function Jm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function x8(t){var e=s5(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&i5(n.ownerDocument.documentElement,n)){if(r!==null&&Jm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=ov(n,s);var o=ov(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var I8=dr&&"documentMode"in document&&11>=document.documentMode,vs=null,op=null,ga=null,ap=!1;function av(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ap||vs==null||vs!==lc(r)||(r=vs,"selectionStart"in r&&Jm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ga&&Va(ga,r)||(ga=r,r=mc(op,"onSelect"),0<r.length&&(e=new Qm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=vs)))}function eu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ws={animationend:eu("Animation","AnimationEnd"),animationiteration:eu("Animation","AnimationIteration"),animationstart:eu("Animation","AnimationStart"),transitionend:eu("Transition","TransitionEnd")},Uf={},o5={};dr&&(o5=document.createElement("div").style,"AnimationEvent"in window||(delete ws.animationend.animation,delete ws.animationiteration.animation,delete ws.animationstart.animation),"TransitionEvent"in window||delete ws.transitionend.transition);function Th(t){if(Uf[t])return Uf[t];if(!ws[t])return t;var e=ws[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in o5)return Uf[t]=e[n];return t}var a5=Th("animationend"),l5=Th("animationiteration"),u5=Th("animationstart"),c5=Th("transitionend"),h5=new Map,lv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function di(t,e){h5.set(t,e),Zi(e,[t])}for(var Hf=0;Hf<lv.length;Hf++){var Wf=lv[Hf],R8=Wf.toLowerCase(),A8=Wf[0].toUpperCase()+Wf.slice(1);di(R8,"on"+A8)}di(a5,"onAnimationEnd");di(l5,"onAnimationIteration");di(u5,"onAnimationStart");di("dblclick","onDoubleClick");di("focusin","onFocus");di("focusout","onBlur");di(c5,"onTransitionEnd");Bs("onMouseEnter",["mouseout","mouseover"]);Bs("onMouseLeave",["mouseout","mouseover"]);Bs("onPointerEnter",["pointerout","pointerover"]);Bs("onPointerLeave",["pointerout","pointerover"]);Zi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ia="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),C8=new Set("cancel close invalid load scroll toggle".split(" ").concat(ia));function uv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,RI(r,e,void 0,t),t.currentTarget=null}function f5(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;uv(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;uv(i,a,u),s=l}}}if(cc)throw t=np,cc=!1,np=null,t}function Ue(t,e){var n=e[fp];n===void 0&&(n=e[fp]=new Set);var r=t+"__bubble";n.has(r)||(d5(e,t,2,!1),n.add(r))}function qf(t,e,n){var r=0;e&&(r|=4),d5(n,t,r,e)}var tu="_reactListening"+Math.random().toString(36).slice(2);function Fa(t){if(!t[tu]){t[tu]=!0,ww.forEach(function(n){n!=="selectionchange"&&(C8.has(n)||qf(n,!1,t),qf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[tu]||(e[tu]=!0,qf("selectionchange",!1,e))}}function d5(t,e,n,r){switch(Yw(e)){case 1:var i=UI;break;case 4:i=HI;break;default:i=Km}n=i.bind(null,e,n,t),i=void 0,!tp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Kf(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Oi(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Nw(function(){var u=s,h=Um(n),f=[];e:{var d=h5.get(t);if(d!==void 0){var m=Qm,_=t;switch(t){case"keypress":if(Fu(n)===0)break e;case"keydown":case"keyup":m=s8;break;case"focusin":_="focus",m=jf;break;case"focusout":_="blur",m=jf;break;case"beforeblur":case"afterblur":m=jf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Xy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=KI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=l8;break;case a5:case l5:case u5:m=YI;break;case c5:m=c8;break;case"scroll":m=WI;break;case"wheel":m=f8;break;case"copy":case"cut":case"paste":m=JI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Zy}var y=(e&4)!==0,E=!y&&t==="scroll",w=y?d!==null?d+"Capture":null:d;y=[];for(var v=u,b;v!==null;){b=v;var L=b.stateNode;if(b.tag===5&&L!==null&&(b=L,w!==null&&(L=La(v,w),L!=null&&y.push(za(v,L,b)))),E)break;v=v.return}0<y.length&&(d=new m(d,_,null,n,h),f.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==Zd&&(_=n.relatedTarget||n.fromElement)&&(Oi(_)||_[pr]))break e;if((m||d)&&(d=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=u,_=_?Oi(_):null,_!==null&&(E=es(_),_!==E||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=u),m!==_)){if(y=Xy,L="onMouseLeave",w="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(y=Zy,L="onPointerLeave",w="onPointerEnter",v="pointer"),E=m==null?d:Es(m),b=_==null?d:Es(_),d=new y(L,v+"leave",m,n,h),d.target=E,d.relatedTarget=b,L=null,Oi(h)===u&&(y=new y(w,v+"enter",_,n,h),y.target=b,y.relatedTarget=E,L=y),E=L,m&&_)t:{for(y=m,w=_,v=0,b=y;b;b=us(b))v++;for(b=0,L=w;L;L=us(L))b++;for(;0<v-b;)y=us(y),v--;for(;0<b-v;)w=us(w),b--;for(;v--;){if(y===w||w!==null&&y===w.alternate)break t;y=us(y),w=us(w)}y=null}else y=null;m!==null&&cv(f,d,m,y,!1),_!==null&&E!==null&&cv(f,E,_,y,!0)}}e:{if(d=u?Es(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var O=v8;else if(nv(d))if(n5)O=T8;else{O=E8;var D=w8}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(O=S8);if(O&&(O=O(t,u))){t5(f,O,n,h);break e}D&&D(t,d,u),t==="focusout"&&(D=d._wrapperState)&&D.controlled&&d.type==="number"&&Gd(d,"number",d.value)}switch(D=u?Es(u):window,t){case"focusin":(nv(D)||D.contentEditable==="true")&&(vs=D,op=u,ga=null);break;case"focusout":ga=op=vs=null;break;case"mousedown":ap=!0;break;case"contextmenu":case"mouseup":case"dragend":ap=!1,av(f,n,h);break;case"selectionchange":if(I8)break;case"keydown":case"keyup":av(f,n,h)}var x;if(Xm)e:{switch(t){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else ys?Zw(t,n)&&(S="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(Jw&&n.locale!=="ko"&&(ys||S!=="onCompositionStart"?S==="onCompositionEnd"&&ys&&(x=Xw()):(Mr=h,Gm="value"in Mr?Mr.value:Mr.textContent,ys=!0)),D=mc(u,S),0<D.length&&(S=new Jy(S,t,null,n,h),f.push({event:S,listeners:D}),x?S.data=x:(x=e5(n),x!==null&&(S.data=x)))),(x=p8?m8(t,n):g8(t,n))&&(u=mc(u,"onBeforeInput"),0<u.length&&(h=new Jy("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:u}),h.data=x))}f5(f,e)})}function za(t,e,n){return{instance:t,listener:e,currentTarget:n}}function mc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=La(t,n),s!=null&&r.unshift(za(t,s,i)),s=La(t,e),s!=null&&r.push(za(t,s,i))),t=t.return}return r}function us(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function cv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=La(n,s),l!=null&&o.unshift(za(n,l,a))):i||(l=La(n,s),l!=null&&o.push(za(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var P8=/\r\n?/g,k8=/\u0000|\uFFFD/g;function hv(t){return(typeof t=="string"?t:""+t).replace(P8,`
`).replace(k8,"")}function nu(t,e,n){if(e=hv(e),hv(t)!==e&&n)throw Error(q(425))}function gc(){}var lp=null,up=null;function cp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var hp=typeof setTimeout=="function"?setTimeout:void 0,L8=typeof clearTimeout=="function"?clearTimeout:void 0,fv=typeof Promise=="function"?Promise:void 0,O8=typeof queueMicrotask=="function"?queueMicrotask:typeof fv<"u"?function(t){return fv.resolve(null).then(t).catch(D8)}:hp;function D8(t){setTimeout(function(){throw t})}function Gf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ma(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ma(e)}function qr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function dv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var po=Math.random().toString(36).slice(2),Wn="__reactFiber$"+po,ja="__reactProps$"+po,pr="__reactContainer$"+po,fp="__reactEvents$"+po,M8="__reactListeners$"+po,N8="__reactHandles$"+po;function Oi(t){var e=t[Wn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[pr]||n[Wn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=dv(t);t!==null;){if(n=t[Wn])return n;t=dv(t)}return e}t=n,n=t.parentNode}return null}function fl(t){return t=t[Wn]||t[pr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Es(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(q(33))}function bh(t){return t[ja]||null}var dp=[],Ss=-1;function pi(t){return{current:t}}function qe(t){0>Ss||(t.current=dp[Ss],dp[Ss]=null,Ss--)}function je(t,e){Ss++,dp[Ss]=t.current,t.current=e}var ii={},Ft=pi(ii),tn=pi(!1),$i=ii;function $s(t,e){var n=t.type.contextTypes;if(!n)return ii;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function nn(t){return t=t.childContextTypes,t!=null}function _c(){qe(tn),qe(Ft)}function pv(t,e,n){if(Ft.current!==ii)throw Error(q(168));je(Ft,e),je(tn,n)}function p5(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(q(108,wI(t)||"Unknown",i));return et({},n,r)}function yc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ii,$i=Ft.current,je(Ft,t),je(tn,tn.current),!0}function mv(t,e,n){var r=t.stateNode;if(!r)throw Error(q(169));n?(t=p5(t,e,$i),r.__reactInternalMemoizedMergedChildContext=t,qe(tn),qe(Ft),je(Ft,t)):qe(tn),je(tn,n)}var sr=null,xh=!1,Qf=!1;function m5(t){sr===null?sr=[t]:sr.push(t)}function V8(t){xh=!0,m5(t)}function mi(){if(!Qf&&sr!==null){Qf=!0;var t=0,e=Ne;try{var n=sr;for(Ne=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}sr=null,xh=!1}catch(i){throw sr!==null&&(sr=sr.slice(t+1)),jw(Hm,mi),i}finally{Ne=e,Qf=!1}}return null}var Ts=[],bs=0,vc=null,wc=0,En=[],Sn=0,Ui=null,ar=1,lr="";function Ai(t,e){Ts[bs++]=wc,Ts[bs++]=vc,vc=t,wc=e}function g5(t,e,n){En[Sn++]=ar,En[Sn++]=lr,En[Sn++]=Ui,Ui=t;var r=ar;t=lr;var i=32-On(r)-1;r&=~(1<<i),n+=1;var s=32-On(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ar=1<<32-On(e)+i|n<<i|r,lr=s+t}else ar=1<<s|n<<i|r,lr=t}function Zm(t){t.return!==null&&(Ai(t,1),g5(t,1,0))}function eg(t){for(;t===vc;)vc=Ts[--bs],Ts[bs]=null,wc=Ts[--bs],Ts[bs]=null;for(;t===Ui;)Ui=En[--Sn],En[Sn]=null,lr=En[--Sn],En[Sn]=null,ar=En[--Sn],En[Sn]=null}var pn=null,hn=null,Qe=!1,Ln=null;function _5(t,e){var n=Tn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function gv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,pn=t,hn=qr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,pn=t,hn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ui!==null?{id:ar,overflow:lr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Tn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,pn=t,hn=null,!0):!1;default:return!1}}function pp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function mp(t){if(Qe){var e=hn;if(e){var n=e;if(!gv(t,e)){if(pp(t))throw Error(q(418));e=qr(n.nextSibling);var r=pn;e&&gv(t,e)?_5(r,n):(t.flags=t.flags&-4097|2,Qe=!1,pn=t)}}else{if(pp(t))throw Error(q(418));t.flags=t.flags&-4097|2,Qe=!1,pn=t}}}function _v(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;pn=t}function ru(t){if(t!==pn)return!1;if(!Qe)return _v(t),Qe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!cp(t.type,t.memoizedProps)),e&&(e=hn)){if(pp(t))throw y5(),Error(q(418));for(;e;)_5(t,e),e=qr(e.nextSibling)}if(_v(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(q(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){hn=qr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}hn=null}}else hn=pn?qr(t.stateNode.nextSibling):null;return!0}function y5(){for(var t=hn;t;)t=qr(t.nextSibling)}function Us(){hn=pn=null,Qe=!1}function tg(t){Ln===null?Ln=[t]:Ln.push(t)}var F8=Er.ReactCurrentBatchConfig;function Wo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(q(309));var r=n.stateNode}if(!r)throw Error(q(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(q(284));if(!n._owner)throw Error(q(290,t))}return t}function iu(t,e){throw t=Object.prototype.toString.call(e),Error(q(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function yv(t){var e=t._init;return e(t._payload)}function v5(t){function e(w,v){if(t){var b=w.deletions;b===null?(w.deletions=[v],w.flags|=16):b.push(v)}}function n(w,v){if(!t)return null;for(;v!==null;)e(w,v),v=v.sibling;return null}function r(w,v){for(w=new Map;v!==null;)v.key!==null?w.set(v.key,v):w.set(v.index,v),v=v.sibling;return w}function i(w,v){return w=Yr(w,v),w.index=0,w.sibling=null,w}function s(w,v,b){return w.index=b,t?(b=w.alternate,b!==null?(b=b.index,b<v?(w.flags|=2,v):b):(w.flags|=2,v)):(w.flags|=1048576,v)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function a(w,v,b,L){return v===null||v.tag!==6?(v=nd(b,w.mode,L),v.return=w,v):(v=i(v,b),v.return=w,v)}function l(w,v,b,L){var O=b.type;return O===_s?h(w,v,b.props.children,L,b.key):v!==null&&(v.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Pr&&yv(O)===v.type)?(L=i(v,b.props),L.ref=Wo(w,v,b),L.return=w,L):(L=Wu(b.type,b.key,b.props,null,w.mode,L),L.ref=Wo(w,v,b),L.return=w,L)}function u(w,v,b,L){return v===null||v.tag!==4||v.stateNode.containerInfo!==b.containerInfo||v.stateNode.implementation!==b.implementation?(v=rd(b,w.mode,L),v.return=w,v):(v=i(v,b.children||[]),v.return=w,v)}function h(w,v,b,L,O){return v===null||v.tag!==7?(v=zi(b,w.mode,L,O),v.return=w,v):(v=i(v,b),v.return=w,v)}function f(w,v,b){if(typeof v=="string"&&v!==""||typeof v=="number")return v=nd(""+v,w.mode,b),v.return=w,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Kl:return b=Wu(v.type,v.key,v.props,null,w.mode,b),b.ref=Wo(w,null,v),b.return=w,b;case gs:return v=rd(v,w.mode,b),v.return=w,v;case Pr:var L=v._init;return f(w,L(v._payload),b)}if(na(v)||jo(v))return v=zi(v,w.mode,b,null),v.return=w,v;iu(w,v)}return null}function d(w,v,b,L){var O=v!==null?v.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return O!==null?null:a(w,v,""+b,L);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Kl:return b.key===O?l(w,v,b,L):null;case gs:return b.key===O?u(w,v,b,L):null;case Pr:return O=b._init,d(w,v,O(b._payload),L)}if(na(b)||jo(b))return O!==null?null:h(w,v,b,L,null);iu(w,b)}return null}function m(w,v,b,L,O){if(typeof L=="string"&&L!==""||typeof L=="number")return w=w.get(b)||null,a(v,w,""+L,O);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case Kl:return w=w.get(L.key===null?b:L.key)||null,l(v,w,L,O);case gs:return w=w.get(L.key===null?b:L.key)||null,u(v,w,L,O);case Pr:var D=L._init;return m(w,v,b,D(L._payload),O)}if(na(L)||jo(L))return w=w.get(b)||null,h(v,w,L,O,null);iu(v,L)}return null}function _(w,v,b,L){for(var O=null,D=null,x=v,S=v=0,T=null;x!==null&&S<b.length;S++){x.index>S?(T=x,x=null):T=x.sibling;var I=d(w,x,b[S],L);if(I===null){x===null&&(x=T);break}t&&x&&I.alternate===null&&e(w,x),v=s(I,v,S),D===null?O=I:D.sibling=I,D=I,x=T}if(S===b.length)return n(w,x),Qe&&Ai(w,S),O;if(x===null){for(;S<b.length;S++)x=f(w,b[S],L),x!==null&&(v=s(x,v,S),D===null?O=x:D.sibling=x,D=x);return Qe&&Ai(w,S),O}for(x=r(w,x);S<b.length;S++)T=m(x,w,S,b[S],L),T!==null&&(t&&T.alternate!==null&&x.delete(T.key===null?S:T.key),v=s(T,v,S),D===null?O=T:D.sibling=T,D=T);return t&&x.forEach(function(C){return e(w,C)}),Qe&&Ai(w,S),O}function y(w,v,b,L){var O=jo(b);if(typeof O!="function")throw Error(q(150));if(b=O.call(b),b==null)throw Error(q(151));for(var D=O=null,x=v,S=v=0,T=null,I=b.next();x!==null&&!I.done;S++,I=b.next()){x.index>S?(T=x,x=null):T=x.sibling;var C=d(w,x,I.value,L);if(C===null){x===null&&(x=T);break}t&&x&&C.alternate===null&&e(w,x),v=s(C,v,S),D===null?O=C:D.sibling=C,D=C,x=T}if(I.done)return n(w,x),Qe&&Ai(w,S),O;if(x===null){for(;!I.done;S++,I=b.next())I=f(w,I.value,L),I!==null&&(v=s(I,v,S),D===null?O=I:D.sibling=I,D=I);return Qe&&Ai(w,S),O}for(x=r(w,x);!I.done;S++,I=b.next())I=m(x,w,S,I.value,L),I!==null&&(t&&I.alternate!==null&&x.delete(I.key===null?S:I.key),v=s(I,v,S),D===null?O=I:D.sibling=I,D=I);return t&&x.forEach(function(P){return e(w,P)}),Qe&&Ai(w,S),O}function E(w,v,b,L){if(typeof b=="object"&&b!==null&&b.type===_s&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Kl:e:{for(var O=b.key,D=v;D!==null;){if(D.key===O){if(O=b.type,O===_s){if(D.tag===7){n(w,D.sibling),v=i(D,b.props.children),v.return=w,w=v;break e}}else if(D.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Pr&&yv(O)===D.type){n(w,D.sibling),v=i(D,b.props),v.ref=Wo(w,D,b),v.return=w,w=v;break e}n(w,D);break}else e(w,D);D=D.sibling}b.type===_s?(v=zi(b.props.children,w.mode,L,b.key),v.return=w,w=v):(L=Wu(b.type,b.key,b.props,null,w.mode,L),L.ref=Wo(w,v,b),L.return=w,w=L)}return o(w);case gs:e:{for(D=b.key;v!==null;){if(v.key===D)if(v.tag===4&&v.stateNode.containerInfo===b.containerInfo&&v.stateNode.implementation===b.implementation){n(w,v.sibling),v=i(v,b.children||[]),v.return=w,w=v;break e}else{n(w,v);break}else e(w,v);v=v.sibling}v=rd(b,w.mode,L),v.return=w,w=v}return o(w);case Pr:return D=b._init,E(w,v,D(b._payload),L)}if(na(b))return _(w,v,b,L);if(jo(b))return y(w,v,b,L);iu(w,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,v!==null&&v.tag===6?(n(w,v.sibling),v=i(v,b),v.return=w,w=v):(n(w,v),v=nd(b,w.mode,L),v.return=w,w=v),o(w)):n(w,v)}return E}var Hs=v5(!0),w5=v5(!1),Ec=pi(null),Sc=null,xs=null,ng=null;function rg(){ng=xs=Sc=null}function ig(t){var e=Ec.current;qe(Ec),t._currentValue=e}function gp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Os(t,e){Sc=t,ng=xs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(en=!0),t.firstContext=null)}function In(t){var e=t._currentValue;if(ng!==t)if(t={context:t,memoizedValue:e,next:null},xs===null){if(Sc===null)throw Error(q(308));xs=t,Sc.dependencies={lanes:0,firstContext:t}}else xs=xs.next=t;return e}var Di=null;function sg(t){Di===null?Di=[t]:Di.push(t)}function E5(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,sg(e)):(n.next=i.next,i.next=n),e.interleaved=n,mr(t,r)}function mr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var kr=!1;function og(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function S5(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function hr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Kr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Ae&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,mr(t,n)}return i=r.interleaved,i===null?(e.next=e,sg(r)):(e.next=i.next,i.next=e),r.interleaved=e,mr(t,n)}function zu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Wm(t,n)}}function vv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Tc(t,e,n,r){var i=t.updateQueue;kr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=u:a.next=u,h.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,h=u=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((r&d)===d){h!==null&&(h=h.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,y=a;switch(d=e,m=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){f=_.call(m,f,d);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,d=typeof _=="function"?_.call(m,f,d):_,d==null)break e;f=et({},f,d);break e;case 2:kr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(u=h=m,l=f):h=h.next=m,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(h===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Wi|=o,t.lanes=o,t.memoizedState=f}}function wv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(q(191,i));i.call(r)}}}var dl={},Kn=pi(dl),Ba=pi(dl),$a=pi(dl);function Mi(t){if(t===dl)throw Error(q(174));return t}function ag(t,e){switch(je($a,e),je(Ba,t),je(Kn,dl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Yd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Yd(e,t)}qe(Kn),je(Kn,e)}function Ws(){qe(Kn),qe(Ba),qe($a)}function T5(t){Mi($a.current);var e=Mi(Kn.current),n=Yd(e,t.type);e!==n&&(je(Ba,t),je(Kn,n))}function lg(t){Ba.current===t&&(qe(Kn),qe(Ba))}var Xe=pi(0);function bc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Yf=[];function ug(){for(var t=0;t<Yf.length;t++)Yf[t]._workInProgressVersionPrimary=null;Yf.length=0}var ju=Er.ReactCurrentDispatcher,Xf=Er.ReactCurrentBatchConfig,Hi=0,Je=null,dt=null,yt=null,xc=!1,_a=!1,Ua=0,z8=0;function Lt(){throw Error(q(321))}function cg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Vn(t[n],e[n]))return!1;return!0}function hg(t,e,n,r,i,s){if(Hi=s,Je=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ju.current=t===null||t.memoizedState===null?U8:H8,t=n(r,i),_a){s=0;do{if(_a=!1,Ua=0,25<=s)throw Error(q(301));s+=1,yt=dt=null,e.updateQueue=null,ju.current=W8,t=n(r,i)}while(_a)}if(ju.current=Ic,e=dt!==null&&dt.next!==null,Hi=0,yt=dt=Je=null,xc=!1,e)throw Error(q(300));return t}function fg(){var t=Ua!==0;return Ua=0,t}function $n(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yt===null?Je.memoizedState=yt=t:yt=yt.next=t,yt}function Rn(){if(dt===null){var t=Je.alternate;t=t!==null?t.memoizedState:null}else t=dt.next;var e=yt===null?Je.memoizedState:yt.next;if(e!==null)yt=e,dt=t;else{if(t===null)throw Error(q(310));dt=t,t={memoizedState:dt.memoizedState,baseState:dt.baseState,baseQueue:dt.baseQueue,queue:dt.queue,next:null},yt===null?Je.memoizedState=yt=t:yt=yt.next=t}return yt}function Ha(t,e){return typeof e=="function"?e(t):e}function Jf(t){var e=Rn(),n=e.queue;if(n===null)throw Error(q(311));n.lastRenderedReducer=t;var r=dt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var h=u.lane;if((Hi&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var f={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,Je.lanes|=h,Wi|=h}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Vn(r,e.memoizedState)||(en=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Je.lanes|=s,Wi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Zf(t){var e=Rn(),n=e.queue;if(n===null)throw Error(q(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Vn(s,e.memoizedState)||(en=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function b5(){}function x5(t,e){var n=Je,r=Rn(),i=e(),s=!Vn(r.memoizedState,i);if(s&&(r.memoizedState=i,en=!0),r=r.queue,dg(A5.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||yt!==null&&yt.memoizedState.tag&1){if(n.flags|=2048,Wa(9,R5.bind(null,n,r,i,e),void 0,null),vt===null)throw Error(q(349));Hi&30||I5(n,e,i)}return i}function I5(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Je.updateQueue,e===null?(e={lastEffect:null,stores:null},Je.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function R5(t,e,n,r){e.value=n,e.getSnapshot=r,C5(e)&&P5(t)}function A5(t,e,n){return n(function(){C5(e)&&P5(t)})}function C5(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Vn(t,n)}catch{return!0}}function P5(t){var e=mr(t,1);e!==null&&Dn(e,t,1,-1)}function Ev(t){var e=$n();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ha,lastRenderedState:t},e.queue=t,t=t.dispatch=$8.bind(null,Je,t),[e.memoizedState,t]}function Wa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Je.updateQueue,e===null?(e={lastEffect:null,stores:null},Je.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function k5(){return Rn().memoizedState}function Bu(t,e,n,r){var i=$n();Je.flags|=t,i.memoizedState=Wa(1|e,n,void 0,r===void 0?null:r)}function Ih(t,e,n,r){var i=Rn();r=r===void 0?null:r;var s=void 0;if(dt!==null){var o=dt.memoizedState;if(s=o.destroy,r!==null&&cg(r,o.deps)){i.memoizedState=Wa(e,n,s,r);return}}Je.flags|=t,i.memoizedState=Wa(1|e,n,s,r)}function Sv(t,e){return Bu(8390656,8,t,e)}function dg(t,e){return Ih(2048,8,t,e)}function L5(t,e){return Ih(4,2,t,e)}function O5(t,e){return Ih(4,4,t,e)}function D5(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function M5(t,e,n){return n=n!=null?n.concat([t]):null,Ih(4,4,D5.bind(null,e,t),n)}function pg(){}function N5(t,e){var n=Rn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&cg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function V5(t,e){var n=Rn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&cg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function F5(t,e,n){return Hi&21?(Vn(n,e)||(n=Uw(),Je.lanes|=n,Wi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,en=!0),t.memoizedState=n)}function j8(t,e){var n=Ne;Ne=n!==0&&4>n?n:4,t(!0);var r=Xf.transition;Xf.transition={};try{t(!1),e()}finally{Ne=n,Xf.transition=r}}function z5(){return Rn().memoizedState}function B8(t,e,n){var r=Qr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},j5(t))B5(e,n);else if(n=E5(t,e,n,r),n!==null){var i=Ht();Dn(n,t,r,i),$5(n,e,r)}}function $8(t,e,n){var r=Qr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(j5(t))B5(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Vn(a,o)){var l=e.interleaved;l===null?(i.next=i,sg(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=E5(t,e,i,r),n!==null&&(i=Ht(),Dn(n,t,r,i),$5(n,e,r))}}function j5(t){var e=t.alternate;return t===Je||e!==null&&e===Je}function B5(t,e){_a=xc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function $5(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Wm(t,n)}}var Ic={readContext:In,useCallback:Lt,useContext:Lt,useEffect:Lt,useImperativeHandle:Lt,useInsertionEffect:Lt,useLayoutEffect:Lt,useMemo:Lt,useReducer:Lt,useRef:Lt,useState:Lt,useDebugValue:Lt,useDeferredValue:Lt,useTransition:Lt,useMutableSource:Lt,useSyncExternalStore:Lt,useId:Lt,unstable_isNewReconciler:!1},U8={readContext:In,useCallback:function(t,e){return $n().memoizedState=[t,e===void 0?null:e],t},useContext:In,useEffect:Sv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Bu(4194308,4,D5.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Bu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Bu(4,2,t,e)},useMemo:function(t,e){var n=$n();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=$n();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=B8.bind(null,Je,t),[r.memoizedState,t]},useRef:function(t){var e=$n();return t={current:t},e.memoizedState=t},useState:Ev,useDebugValue:pg,useDeferredValue:function(t){return $n().memoizedState=t},useTransition:function(){var t=Ev(!1),e=t[0];return t=j8.bind(null,t[1]),$n().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Je,i=$n();if(Qe){if(n===void 0)throw Error(q(407));n=n()}else{if(n=e(),vt===null)throw Error(q(349));Hi&30||I5(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Sv(A5.bind(null,r,s,t),[t]),r.flags|=2048,Wa(9,R5.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=$n(),e=vt.identifierPrefix;if(Qe){var n=lr,r=ar;n=(r&~(1<<32-On(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ua++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=z8++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},H8={readContext:In,useCallback:N5,useContext:In,useEffect:dg,useImperativeHandle:M5,useInsertionEffect:L5,useLayoutEffect:O5,useMemo:V5,useReducer:Jf,useRef:k5,useState:function(){return Jf(Ha)},useDebugValue:pg,useDeferredValue:function(t){var e=Rn();return F5(e,dt.memoizedState,t)},useTransition:function(){var t=Jf(Ha)[0],e=Rn().memoizedState;return[t,e]},useMutableSource:b5,useSyncExternalStore:x5,useId:z5,unstable_isNewReconciler:!1},W8={readContext:In,useCallback:N5,useContext:In,useEffect:dg,useImperativeHandle:M5,useInsertionEffect:L5,useLayoutEffect:O5,useMemo:V5,useReducer:Zf,useRef:k5,useState:function(){return Zf(Ha)},useDebugValue:pg,useDeferredValue:function(t){var e=Rn();return dt===null?e.memoizedState=t:F5(e,dt.memoizedState,t)},useTransition:function(){var t=Zf(Ha)[0],e=Rn().memoizedState;return[t,e]},useMutableSource:b5,useSyncExternalStore:x5,useId:z5,unstable_isNewReconciler:!1};function Pn(t,e){if(t&&t.defaultProps){e=et({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function _p(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:et({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Rh={isMounted:function(t){return(t=t._reactInternals)?es(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ht(),i=Qr(t),s=hr(r,i);s.payload=e,n!=null&&(s.callback=n),e=Kr(t,s,i),e!==null&&(Dn(e,t,i,r),zu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ht(),i=Qr(t),s=hr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Kr(t,s,i),e!==null&&(Dn(e,t,i,r),zu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ht(),r=Qr(t),i=hr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Kr(t,i,r),e!==null&&(Dn(e,t,r,n),zu(e,t,r))}};function Tv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Va(n,r)||!Va(i,s):!0}function U5(t,e,n){var r=!1,i=ii,s=e.contextType;return typeof s=="object"&&s!==null?s=In(s):(i=nn(e)?$i:Ft.current,r=e.contextTypes,s=(r=r!=null)?$s(t,i):ii),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Rh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function bv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Rh.enqueueReplaceState(e,e.state,null)}function yp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},og(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=In(s):(s=nn(e)?$i:Ft.current,i.context=$s(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(_p(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Rh.enqueueReplaceState(i,i.state,null),Tc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function qs(t,e){try{var n="",r=e;do n+=vI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function ed(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function vp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var q8=typeof WeakMap=="function"?WeakMap:Map;function H5(t,e,n){n=hr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ac||(Ac=!0,Cp=r),vp(t,e)},n}function W5(t,e,n){n=hr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){vp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){vp(t,e),typeof r!="function"&&(Gr===null?Gr=new Set([this]):Gr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function xv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new q8;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=oR.bind(null,t,e,n),e.then(t,t))}function Iv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Rv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=hr(-1,1),e.tag=2,Kr(n,e,1))),n.lanes|=1),t)}var K8=Er.ReactCurrentOwner,en=!1;function Ut(t,e,n,r){e.child=t===null?w5(e,null,n,r):Hs(e,t.child,n,r)}function Av(t,e,n,r,i){n=n.render;var s=e.ref;return Os(e,i),r=hg(t,e,n,r,s,i),n=fg(),t!==null&&!en?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,gr(t,e,i)):(Qe&&n&&Zm(e),e.flags|=1,Ut(t,e,r,i),e.child)}function Cv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Sg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,q5(t,e,s,r,i)):(t=Wu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Va,n(o,r)&&t.ref===e.ref)return gr(t,e,i)}return e.flags|=1,t=Yr(s,r),t.ref=e.ref,t.return=e,e.child=t}function q5(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Va(s,r)&&t.ref===e.ref)if(en=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(en=!0);else return e.lanes=t.lanes,gr(t,e,i)}return wp(t,e,n,r,i)}function K5(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},je(Rs,un),un|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,je(Rs,un),un|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,je(Rs,un),un|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,je(Rs,un),un|=r;return Ut(t,e,i,n),e.child}function G5(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function wp(t,e,n,r,i){var s=nn(n)?$i:Ft.current;return s=$s(e,s),Os(e,i),n=hg(t,e,n,r,s,i),r=fg(),t!==null&&!en?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,gr(t,e,i)):(Qe&&r&&Zm(e),e.flags|=1,Ut(t,e,n,i),e.child)}function Pv(t,e,n,r,i){if(nn(n)){var s=!0;yc(e)}else s=!1;if(Os(e,i),e.stateNode===null)$u(t,e),U5(e,n,r),yp(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=In(u):(u=nn(n)?$i:Ft.current,u=$s(e,u));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&bv(e,o,r,u),kr=!1;var d=e.memoizedState;o.state=d,Tc(e,r,o,i),l=e.memoizedState,a!==r||d!==l||tn.current||kr?(typeof h=="function"&&(_p(e,n,h,r),l=e.memoizedState),(a=kr||Tv(e,n,a,r,d,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,S5(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Pn(e.type,a),o.props=u,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=In(l):(l=nn(n)?$i:Ft.current,l=$s(e,l));var m=n.getDerivedStateFromProps;(h=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&bv(e,o,r,l),kr=!1,d=e.memoizedState,o.state=d,Tc(e,r,o,i);var _=e.memoizedState;a!==f||d!==_||tn.current||kr?(typeof m=="function"&&(_p(e,n,m,r),_=e.memoizedState),(u=kr||Tv(e,n,u,r,d,_,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Ep(t,e,n,r,s,i)}function Ep(t,e,n,r,i,s){G5(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&mv(e,n,!1),gr(t,e,s);r=e.stateNode,K8.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Hs(e,t.child,null,s),e.child=Hs(e,null,a,s)):Ut(t,e,a,s),e.memoizedState=r.state,i&&mv(e,n,!0),e.child}function Q5(t){var e=t.stateNode;e.pendingContext?pv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&pv(t,e.context,!1),ag(t,e.containerInfo)}function kv(t,e,n,r,i){return Us(),tg(i),e.flags|=256,Ut(t,e,n,r),e.child}var Sp={dehydrated:null,treeContext:null,retryLane:0};function Tp(t){return{baseLanes:t,cachePool:null,transitions:null}}function Y5(t,e,n){var r=e.pendingProps,i=Xe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),je(Xe,i&1),t===null)return mp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ph(o,r,0,null),t=zi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Tp(n),e.memoizedState=Sp,t):mg(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return G8(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Yr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Yr(a,s):(s=zi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Tp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Sp,r}return s=t.child,t=s.sibling,r=Yr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function mg(t,e){return e=Ph({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function su(t,e,n,r){return r!==null&&tg(r),Hs(e,t.child,null,n),t=mg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function G8(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=ed(Error(q(422))),su(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ph({mode:"visible",children:r.children},i,0,null),s=zi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Hs(e,t.child,null,o),e.child.memoizedState=Tp(o),e.memoizedState=Sp,s);if(!(e.mode&1))return su(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(q(419)),r=ed(s,r,void 0),su(t,e,o,r)}if(a=(o&t.childLanes)!==0,en||a){if(r=vt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,mr(t,i),Dn(r,t,i,-1))}return Eg(),r=ed(Error(q(421))),su(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=aR.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,hn=qr(i.nextSibling),pn=e,Qe=!0,Ln=null,t!==null&&(En[Sn++]=ar,En[Sn++]=lr,En[Sn++]=Ui,ar=t.id,lr=t.overflow,Ui=e),e=mg(e,r.children),e.flags|=4096,e)}function Lv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),gp(t.return,e,n)}function td(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function X5(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ut(t,e,r.children,n),r=Xe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Lv(t,n,e);else if(t.tag===19)Lv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(je(Xe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&bc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),td(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&bc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}td(e,!0,n,null,s);break;case"together":td(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function $u(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function gr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Wi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(q(153));if(e.child!==null){for(t=e.child,n=Yr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Yr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Q8(t,e,n){switch(e.tag){case 3:Q5(e),Us();break;case 5:T5(e);break;case 1:nn(e.type)&&yc(e);break;case 4:ag(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;je(Ec,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(je(Xe,Xe.current&1),e.flags|=128,null):n&e.child.childLanes?Y5(t,e,n):(je(Xe,Xe.current&1),t=gr(t,e,n),t!==null?t.sibling:null);je(Xe,Xe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return X5(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),je(Xe,Xe.current),r)break;return null;case 22:case 23:return e.lanes=0,K5(t,e,n)}return gr(t,e,n)}var J5,bp,Z5,eE;J5=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bp=function(){};Z5=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Mi(Kn.current);var s=null;switch(n){case"input":i=qd(t,i),r=qd(t,r),s=[];break;case"select":i=et({},i,{value:void 0}),r=et({},r,{value:void 0}),s=[];break;case"textarea":i=Qd(t,i),r=Qd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=gc)}Xd(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Pa.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Pa.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ue("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};eE=function(t,e,n,r){n!==r&&(e.flags|=4)};function qo(t,e){if(!Qe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ot(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Y8(t,e,n){var r=e.pendingProps;switch(eg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(e),null;case 1:return nn(e.type)&&_c(),Ot(e),null;case 3:return r=e.stateNode,Ws(),qe(tn),qe(Ft),ug(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ru(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ln!==null&&(Lp(Ln),Ln=null))),bp(t,e),Ot(e),null;case 5:lg(e);var i=Mi($a.current);if(n=e.type,t!==null&&e.stateNode!=null)Z5(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(q(166));return Ot(e),null}if(t=Mi(Kn.current),ru(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Wn]=e,r[ja]=s,t=(e.mode&1)!==0,n){case"dialog":Ue("cancel",r),Ue("close",r);break;case"iframe":case"object":case"embed":Ue("load",r);break;case"video":case"audio":for(i=0;i<ia.length;i++)Ue(ia[i],r);break;case"source":Ue("error",r);break;case"img":case"image":case"link":Ue("error",r),Ue("load",r);break;case"details":Ue("toggle",r);break;case"input":By(r,s),Ue("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ue("invalid",r);break;case"textarea":Uy(r,s),Ue("invalid",r)}Xd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&nu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&nu(r.textContent,a,t),i=["children",""+a]):Pa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ue("scroll",r)}switch(n){case"input":Gl(r),$y(r,s,!0);break;case"textarea":Gl(r),Hy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=gc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Aw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Wn]=e,t[ja]=r,J5(t,e,!1,!1),e.stateNode=t;e:{switch(o=Jd(n,r),n){case"dialog":Ue("cancel",t),Ue("close",t),i=r;break;case"iframe":case"object":case"embed":Ue("load",t),i=r;break;case"video":case"audio":for(i=0;i<ia.length;i++)Ue(ia[i],t);i=r;break;case"source":Ue("error",t),i=r;break;case"img":case"image":case"link":Ue("error",t),Ue("load",t),i=r;break;case"details":Ue("toggle",t),i=r;break;case"input":By(t,r),i=qd(t,r),Ue("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=et({},r,{value:void 0}),Ue("invalid",t);break;case"textarea":Uy(t,r),i=Qd(t,r),Ue("invalid",t);break;default:i=r}Xd(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?kw(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Cw(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ka(t,l):typeof l=="number"&&ka(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Pa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ue("scroll",t):l!=null&&zm(t,s,l,o))}switch(n){case"input":Gl(t),$y(t,r,!1);break;case"textarea":Gl(t),Hy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ri(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Cs(t,!!r.multiple,s,!1):r.defaultValue!=null&&Cs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=gc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ot(e),null;case 6:if(t&&e.stateNode!=null)eE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(q(166));if(n=Mi($a.current),Mi(Kn.current),ru(e)){if(r=e.stateNode,n=e.memoizedProps,r[Wn]=e,(s=r.nodeValue!==n)&&(t=pn,t!==null))switch(t.tag){case 3:nu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&nu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Wn]=e,e.stateNode=r}return Ot(e),null;case 13:if(qe(Xe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Qe&&hn!==null&&e.mode&1&&!(e.flags&128))y5(),Us(),e.flags|=98560,s=!1;else if(s=ru(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(q(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(q(317));s[Wn]=e}else Us(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ot(e),s=!1}else Ln!==null&&(Lp(Ln),Ln=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Xe.current&1?pt===0&&(pt=3):Eg())),e.updateQueue!==null&&(e.flags|=4),Ot(e),null);case 4:return Ws(),bp(t,e),t===null&&Fa(e.stateNode.containerInfo),Ot(e),null;case 10:return ig(e.type._context),Ot(e),null;case 17:return nn(e.type)&&_c(),Ot(e),null;case 19:if(qe(Xe),s=e.memoizedState,s===null)return Ot(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)qo(s,!1);else{if(pt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=bc(t),o!==null){for(e.flags|=128,qo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return je(Xe,Xe.current&1|2),e.child}t=t.sibling}s.tail!==null&&lt()>Ks&&(e.flags|=128,r=!0,qo(s,!1),e.lanes=4194304)}else{if(!r)if(t=bc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),qo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Qe)return Ot(e),null}else 2*lt()-s.renderingStartTime>Ks&&n!==1073741824&&(e.flags|=128,r=!0,qo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=lt(),e.sibling=null,n=Xe.current,je(Xe,r?n&1|2:n&1),e):(Ot(e),null);case 22:case 23:return wg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?un&1073741824&&(Ot(e),e.subtreeFlags&6&&(e.flags|=8192)):Ot(e),null;case 24:return null;case 25:return null}throw Error(q(156,e.tag))}function X8(t,e){switch(eg(e),e.tag){case 1:return nn(e.type)&&_c(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ws(),qe(tn),qe(Ft),ug(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return lg(e),null;case 13:if(qe(Xe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(q(340));Us()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return qe(Xe),null;case 4:return Ws(),null;case 10:return ig(e.type._context),null;case 22:case 23:return wg(),null;case 24:return null;default:return null}}var ou=!1,Nt=!1,J8=typeof WeakSet=="function"?WeakSet:Set,re=null;function Is(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){rt(t,e,r)}else n.current=null}function xp(t,e,n){try{n()}catch(r){rt(t,e,r)}}var Ov=!1;function Z8(t,e){if(lp=dc,t=s5(),Jm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,h=0,f=t,d=null;t:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)d=f,f=m;for(;;){if(f===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++h===r&&(l=o),(m=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(up={focusedElem:t,selectionRange:n},dc=!1,re=e;re!==null;)if(e=re,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,re=t;else for(;re!==null;){e=re;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,E=_.memoizedState,w=e.stateNode,v=w.getSnapshotBeforeUpdate(e.elementType===e.type?y:Pn(e.type,y),E);w.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var b=e.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(q(163))}}catch(L){rt(e,e.return,L)}if(t=e.sibling,t!==null){t.return=e.return,re=t;break}re=e.return}return _=Ov,Ov=!1,_}function ya(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&xp(e,n,s)}i=i.next}while(i!==r)}}function Ah(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ip(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function tE(t){var e=t.alternate;e!==null&&(t.alternate=null,tE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Wn],delete e[ja],delete e[fp],delete e[M8],delete e[N8])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function nE(t){return t.tag===5||t.tag===3||t.tag===4}function Dv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||nE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Rp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=gc));else if(r!==4&&(t=t.child,t!==null))for(Rp(t,e,n),t=t.sibling;t!==null;)Rp(t,e,n),t=t.sibling}function Ap(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ap(t,e,n),t=t.sibling;t!==null;)Ap(t,e,n),t=t.sibling}var St=null,kn=!1;function Rr(t,e,n){for(n=n.child;n!==null;)rE(t,e,n),n=n.sibling}function rE(t,e,n){if(qn&&typeof qn.onCommitFiberUnmount=="function")try{qn.onCommitFiberUnmount(wh,n)}catch{}switch(n.tag){case 5:Nt||Is(n,e);case 6:var r=St,i=kn;St=null,Rr(t,e,n),St=r,kn=i,St!==null&&(kn?(t=St,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):St.removeChild(n.stateNode));break;case 18:St!==null&&(kn?(t=St,n=n.stateNode,t.nodeType===8?Gf(t.parentNode,n):t.nodeType===1&&Gf(t,n),Ma(t)):Gf(St,n.stateNode));break;case 4:r=St,i=kn,St=n.stateNode.containerInfo,kn=!0,Rr(t,e,n),St=r,kn=i;break;case 0:case 11:case 14:case 15:if(!Nt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&xp(n,e,o),i=i.next}while(i!==r)}Rr(t,e,n);break;case 1:if(!Nt&&(Is(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){rt(n,e,a)}Rr(t,e,n);break;case 21:Rr(t,e,n);break;case 22:n.mode&1?(Nt=(r=Nt)||n.memoizedState!==null,Rr(t,e,n),Nt=r):Rr(t,e,n);break;default:Rr(t,e,n)}}function Mv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new J8),e.forEach(function(r){var i=lR.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Cn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:St=a.stateNode,kn=!1;break e;case 3:St=a.stateNode.containerInfo,kn=!0;break e;case 4:St=a.stateNode.containerInfo,kn=!0;break e}a=a.return}if(St===null)throw Error(q(160));rE(s,o,i),St=null,kn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){rt(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)iE(e,t),e=e.sibling}function iE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Cn(e,t),jn(t),r&4){try{ya(3,t,t.return),Ah(3,t)}catch(y){rt(t,t.return,y)}try{ya(5,t,t.return)}catch(y){rt(t,t.return,y)}}break;case 1:Cn(e,t),jn(t),r&512&&n!==null&&Is(n,n.return);break;case 5:if(Cn(e,t),jn(t),r&512&&n!==null&&Is(n,n.return),t.flags&32){var i=t.stateNode;try{ka(i,"")}catch(y){rt(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Iw(i,s),Jd(a,o);var u=Jd(a,s);for(o=0;o<l.length;o+=2){var h=l[o],f=l[o+1];h==="style"?kw(i,f):h==="dangerouslySetInnerHTML"?Cw(i,f):h==="children"?ka(i,f):zm(i,h,f,u)}switch(a){case"input":Kd(i,s);break;case"textarea":Rw(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Cs(i,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?Cs(i,!!s.multiple,s.defaultValue,!0):Cs(i,!!s.multiple,s.multiple?[]:"",!1))}i[ja]=s}catch(y){rt(t,t.return,y)}}break;case 6:if(Cn(e,t),jn(t),r&4){if(t.stateNode===null)throw Error(q(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){rt(t,t.return,y)}}break;case 3:if(Cn(e,t),jn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ma(e.containerInfo)}catch(y){rt(t,t.return,y)}break;case 4:Cn(e,t),jn(t);break;case 13:Cn(e,t),jn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(yg=lt())),r&4&&Mv(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Nt=(u=Nt)||h,Cn(e,t),Nt=u):Cn(e,t),jn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(re=t,h=t.child;h!==null;){for(f=re=h;re!==null;){switch(d=re,m=d.child,d.tag){case 0:case 11:case 14:case 15:ya(4,d,d.return);break;case 1:Is(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){rt(r,n,y)}}break;case 5:Is(d,d.return);break;case 22:if(d.memoizedState!==null){Vv(f);continue}}m!==null?(m.return=d,re=m):Vv(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Pw("display",o))}catch(y){rt(t,t.return,y)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){rt(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Cn(e,t),jn(t),r&4&&Mv(t);break;case 21:break;default:Cn(e,t),jn(t)}}function jn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(nE(n)){var r=n;break e}n=n.return}throw Error(q(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ka(i,""),r.flags&=-33);var s=Dv(t);Ap(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Dv(t);Rp(t,a,o);break;default:throw Error(q(161))}}catch(l){rt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function eR(t,e,n){re=t,sE(t)}function sE(t,e,n){for(var r=(t.mode&1)!==0;re!==null;){var i=re,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ou;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Nt;a=ou;var u=Nt;if(ou=o,(Nt=l)&&!u)for(re=i;re!==null;)o=re,l=o.child,o.tag===22&&o.memoizedState!==null?Fv(i):l!==null?(l.return=o,re=l):Fv(i);for(;s!==null;)re=s,sE(s),s=s.sibling;re=i,ou=a,Nt=u}Nv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,re=s):Nv(t)}}function Nv(t){for(;re!==null;){var e=re;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Nt||Ah(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Nt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Pn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&wv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}wv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Ma(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(q(163))}Nt||e.flags&512&&Ip(e)}catch(d){rt(e,e.return,d)}}if(e===t){re=null;break}if(n=e.sibling,n!==null){n.return=e.return,re=n;break}re=e.return}}function Vv(t){for(;re!==null;){var e=re;if(e===t){re=null;break}var n=e.sibling;if(n!==null){n.return=e.return,re=n;break}re=e.return}}function Fv(t){for(;re!==null;){var e=re;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ah(4,e)}catch(l){rt(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){rt(e,i,l)}}var s=e.return;try{Ip(e)}catch(l){rt(e,s,l)}break;case 5:var o=e.return;try{Ip(e)}catch(l){rt(e,o,l)}}}catch(l){rt(e,e.return,l)}if(e===t){re=null;break}var a=e.sibling;if(a!==null){a.return=e.return,re=a;break}re=e.return}}var tR=Math.ceil,Rc=Er.ReactCurrentDispatcher,gg=Er.ReactCurrentOwner,bn=Er.ReactCurrentBatchConfig,Ae=0,vt=null,ht=null,It=0,un=0,Rs=pi(0),pt=0,qa=null,Wi=0,Ch=0,_g=0,va=null,Xt=null,yg=0,Ks=1/0,ir=null,Ac=!1,Cp=null,Gr=null,au=!1,Nr=null,Cc=0,wa=0,Pp=null,Uu=-1,Hu=0;function Ht(){return Ae&6?lt():Uu!==-1?Uu:Uu=lt()}function Qr(t){return t.mode&1?Ae&2&&It!==0?It&-It:F8.transition!==null?(Hu===0&&(Hu=Uw()),Hu):(t=Ne,t!==0||(t=window.event,t=t===void 0?16:Yw(t.type)),t):1}function Dn(t,e,n,r){if(50<wa)throw wa=0,Pp=null,Error(q(185));cl(t,n,r),(!(Ae&2)||t!==vt)&&(t===vt&&(!(Ae&2)&&(Ch|=n),pt===4&&Dr(t,It)),rn(t,r),n===1&&Ae===0&&!(e.mode&1)&&(Ks=lt()+500,xh&&mi()))}function rn(t,e){var n=t.callbackNode;FI(t,e);var r=fc(t,t===vt?It:0);if(r===0)n!==null&&Ky(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Ky(n),e===1)t.tag===0?V8(zv.bind(null,t)):m5(zv.bind(null,t)),O8(function(){!(Ae&6)&&mi()}),n=null;else{switch(Hw(r)){case 1:n=Hm;break;case 4:n=Bw;break;case 16:n=hc;break;case 536870912:n=$w;break;default:n=hc}n=dE(n,oE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function oE(t,e){if(Uu=-1,Hu=0,Ae&6)throw Error(q(327));var n=t.callbackNode;if(Ds()&&t.callbackNode!==n)return null;var r=fc(t,t===vt?It:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Pc(t,r);else{e=r;var i=Ae;Ae|=2;var s=lE();(vt!==t||It!==e)&&(ir=null,Ks=lt()+500,Fi(t,e));do try{iR();break}catch(a){aE(t,a)}while(!0);rg(),Rc.current=s,Ae=i,ht!==null?e=0:(vt=null,It=0,e=pt)}if(e!==0){if(e===2&&(i=rp(t),i!==0&&(r=i,e=kp(t,i))),e===1)throw n=qa,Fi(t,0),Dr(t,r),rn(t,lt()),n;if(e===6)Dr(t,r);else{if(i=t.current.alternate,!(r&30)&&!nR(i)&&(e=Pc(t,r),e===2&&(s=rp(t),s!==0&&(r=s,e=kp(t,s))),e===1))throw n=qa,Fi(t,0),Dr(t,r),rn(t,lt()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(q(345));case 2:Ci(t,Xt,ir);break;case 3:if(Dr(t,r),(r&130023424)===r&&(e=yg+500-lt(),10<e)){if(fc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ht(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=hp(Ci.bind(null,t,Xt,ir),e);break}Ci(t,Xt,ir);break;case 4:if(Dr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-On(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=lt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*tR(r/1960))-r,10<r){t.timeoutHandle=hp(Ci.bind(null,t,Xt,ir),r);break}Ci(t,Xt,ir);break;case 5:Ci(t,Xt,ir);break;default:throw Error(q(329))}}}return rn(t,lt()),t.callbackNode===n?oE.bind(null,t):null}function kp(t,e){var n=va;return t.current.memoizedState.isDehydrated&&(Fi(t,e).flags|=256),t=Pc(t,e),t!==2&&(e=Xt,Xt=n,e!==null&&Lp(e)),t}function Lp(t){Xt===null?Xt=t:Xt.push.apply(Xt,t)}function nR(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Vn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Dr(t,e){for(e&=~_g,e&=~Ch,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-On(e),r=1<<n;t[n]=-1,e&=~r}}function zv(t){if(Ae&6)throw Error(q(327));Ds();var e=fc(t,0);if(!(e&1))return rn(t,lt()),null;var n=Pc(t,e);if(t.tag!==0&&n===2){var r=rp(t);r!==0&&(e=r,n=kp(t,r))}if(n===1)throw n=qa,Fi(t,0),Dr(t,e),rn(t,lt()),n;if(n===6)throw Error(q(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ci(t,Xt,ir),rn(t,lt()),null}function vg(t,e){var n=Ae;Ae|=1;try{return t(e)}finally{Ae=n,Ae===0&&(Ks=lt()+500,xh&&mi())}}function qi(t){Nr!==null&&Nr.tag===0&&!(Ae&6)&&Ds();var e=Ae;Ae|=1;var n=bn.transition,r=Ne;try{if(bn.transition=null,Ne=1,t)return t()}finally{Ne=r,bn.transition=n,Ae=e,!(Ae&6)&&mi()}}function wg(){un=Rs.current,qe(Rs)}function Fi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,L8(n)),ht!==null)for(n=ht.return;n!==null;){var r=n;switch(eg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&_c();break;case 3:Ws(),qe(tn),qe(Ft),ug();break;case 5:lg(r);break;case 4:Ws();break;case 13:qe(Xe);break;case 19:qe(Xe);break;case 10:ig(r.type._context);break;case 22:case 23:wg()}n=n.return}if(vt=t,ht=t=Yr(t.current,null),It=un=e,pt=0,qa=null,_g=Ch=Wi=0,Xt=va=null,Di!==null){for(e=0;e<Di.length;e++)if(n=Di[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Di=null}return t}function aE(t,e){do{var n=ht;try{if(rg(),ju.current=Ic,xc){for(var r=Je.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}xc=!1}if(Hi=0,yt=dt=Je=null,_a=!1,Ua=0,gg.current=null,n===null||n.return===null){pt=1,qa=e,ht=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=It,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var d=h.alternate;d?(h.updateQueue=d.updateQueue,h.memoizedState=d.memoizedState,h.lanes=d.lanes):(h.updateQueue=null,h.memoizedState=null)}var m=Iv(o);if(m!==null){m.flags&=-257,Rv(m,o,a,s,e),m.mode&1&&xv(s,u,e),e=m,l=u;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){xv(s,u,e),Eg();break e}l=Error(q(426))}}else if(Qe&&a.mode&1){var E=Iv(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Rv(E,o,a,s,e),tg(qs(l,a));break e}}s=l=qs(l,a),pt!==4&&(pt=2),va===null?va=[s]:va.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var w=H5(s,l,e);vv(s,w);break e;case 1:a=l;var v=s.type,b=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Gr===null||!Gr.has(b)))){s.flags|=65536,e&=-e,s.lanes|=e;var L=W5(s,a,e);vv(s,L);break e}}s=s.return}while(s!==null)}cE(n)}catch(O){e=O,ht===n&&n!==null&&(ht=n=n.return);continue}break}while(!0)}function lE(){var t=Rc.current;return Rc.current=Ic,t===null?Ic:t}function Eg(){(pt===0||pt===3||pt===2)&&(pt=4),vt===null||!(Wi&268435455)&&!(Ch&268435455)||Dr(vt,It)}function Pc(t,e){var n=Ae;Ae|=2;var r=lE();(vt!==t||It!==e)&&(ir=null,Fi(t,e));do try{rR();break}catch(i){aE(t,i)}while(!0);if(rg(),Ae=n,Rc.current=r,ht!==null)throw Error(q(261));return vt=null,It=0,pt}function rR(){for(;ht!==null;)uE(ht)}function iR(){for(;ht!==null&&!CI();)uE(ht)}function uE(t){var e=fE(t.alternate,t,un);t.memoizedProps=t.pendingProps,e===null?cE(t):ht=e,gg.current=null}function cE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=X8(n,e),n!==null){n.flags&=32767,ht=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{pt=6,ht=null;return}}else if(n=Y8(n,e,un),n!==null){ht=n;return}if(e=e.sibling,e!==null){ht=e;return}ht=e=t}while(e!==null);pt===0&&(pt=5)}function Ci(t,e,n){var r=Ne,i=bn.transition;try{bn.transition=null,Ne=1,sR(t,e,n,r)}finally{bn.transition=i,Ne=r}return null}function sR(t,e,n,r){do Ds();while(Nr!==null);if(Ae&6)throw Error(q(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(q(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(zI(t,s),t===vt&&(ht=vt=null,It=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||au||(au=!0,dE(hc,function(){return Ds(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=bn.transition,bn.transition=null;var o=Ne;Ne=1;var a=Ae;Ae|=4,gg.current=null,Z8(t,n),iE(n,t),x8(up),dc=!!lp,up=lp=null,t.current=n,eR(n),PI(),Ae=a,Ne=o,bn.transition=s}else t.current=n;if(au&&(au=!1,Nr=t,Cc=i),s=t.pendingLanes,s===0&&(Gr=null),OI(n.stateNode),rn(t,lt()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ac)throw Ac=!1,t=Cp,Cp=null,t;return Cc&1&&t.tag!==0&&Ds(),s=t.pendingLanes,s&1?t===Pp?wa++:(wa=0,Pp=t):wa=0,mi(),null}function Ds(){if(Nr!==null){var t=Hw(Cc),e=bn.transition,n=Ne;try{if(bn.transition=null,Ne=16>t?16:t,Nr===null)var r=!1;else{if(t=Nr,Nr=null,Cc=0,Ae&6)throw Error(q(331));var i=Ae;for(Ae|=4,re=t.current;re!==null;){var s=re,o=s.child;if(re.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(re=u;re!==null;){var h=re;switch(h.tag){case 0:case 11:case 15:ya(8,h,s)}var f=h.child;if(f!==null)f.return=h,re=f;else for(;re!==null;){h=re;var d=h.sibling,m=h.return;if(tE(h),h===u){re=null;break}if(d!==null){d.return=m,re=d;break}re=m}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var E=y.sibling;y.sibling=null,y=E}while(y!==null)}}re=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,re=o;else e:for(;re!==null;){if(s=re,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ya(9,s,s.return)}var w=s.sibling;if(w!==null){w.return=s.return,re=w;break e}re=s.return}}var v=t.current;for(re=v;re!==null;){o=re;var b=o.child;if(o.subtreeFlags&2064&&b!==null)b.return=o,re=b;else e:for(o=v;re!==null;){if(a=re,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ah(9,a)}}catch(O){rt(a,a.return,O)}if(a===o){re=null;break e}var L=a.sibling;if(L!==null){L.return=a.return,re=L;break e}re=a.return}}if(Ae=i,mi(),qn&&typeof qn.onPostCommitFiberRoot=="function")try{qn.onPostCommitFiberRoot(wh,t)}catch{}r=!0}return r}finally{Ne=n,bn.transition=e}}return!1}function jv(t,e,n){e=qs(n,e),e=H5(t,e,1),t=Kr(t,e,1),e=Ht(),t!==null&&(cl(t,1,e),rn(t,e))}function rt(t,e,n){if(t.tag===3)jv(t,t,n);else for(;e!==null;){if(e.tag===3){jv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Gr===null||!Gr.has(r))){t=qs(n,t),t=W5(e,t,1),e=Kr(e,t,1),t=Ht(),e!==null&&(cl(e,1,t),rn(e,t));break}}e=e.return}}function oR(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ht(),t.pingedLanes|=t.suspendedLanes&n,vt===t&&(It&n)===n&&(pt===4||pt===3&&(It&130023424)===It&&500>lt()-yg?Fi(t,0):_g|=n),rn(t,e)}function hE(t,e){e===0&&(t.mode&1?(e=Xl,Xl<<=1,!(Xl&130023424)&&(Xl=4194304)):e=1);var n=Ht();t=mr(t,e),t!==null&&(cl(t,e,n),rn(t,n))}function aR(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),hE(t,n)}function lR(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(q(314))}r!==null&&r.delete(e),hE(t,n)}var fE;fE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||tn.current)en=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return en=!1,Q8(t,e,n);en=!!(t.flags&131072)}else en=!1,Qe&&e.flags&1048576&&g5(e,wc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;$u(t,e),t=e.pendingProps;var i=$s(e,Ft.current);Os(e,n),i=hg(null,e,r,t,i,n);var s=fg();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,nn(r)?(s=!0,yc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,og(e),i.updater=Rh,e.stateNode=i,i._reactInternals=e,yp(e,r,t,n),e=Ep(null,e,r,!0,s,n)):(e.tag=0,Qe&&s&&Zm(e),Ut(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch($u(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=cR(r),t=Pn(r,t),i){case 0:e=wp(null,e,r,t,n);break e;case 1:e=Pv(null,e,r,t,n);break e;case 11:e=Av(null,e,r,t,n);break e;case 14:e=Cv(null,e,r,Pn(r.type,t),n);break e}throw Error(q(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pn(r,i),wp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pn(r,i),Pv(t,e,r,i,n);case 3:e:{if(Q5(e),t===null)throw Error(q(387));r=e.pendingProps,s=e.memoizedState,i=s.element,S5(t,e),Tc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=qs(Error(q(423)),e),e=kv(t,e,r,n,i);break e}else if(r!==i){i=qs(Error(q(424)),e),e=kv(t,e,r,n,i);break e}else for(hn=qr(e.stateNode.containerInfo.firstChild),pn=e,Qe=!0,Ln=null,n=w5(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Us(),r===i){e=gr(t,e,n);break e}Ut(t,e,r,n)}e=e.child}return e;case 5:return T5(e),t===null&&mp(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,cp(r,i)?o=null:s!==null&&cp(r,s)&&(e.flags|=32),G5(t,e),Ut(t,e,o,n),e.child;case 6:return t===null&&mp(e),null;case 13:return Y5(t,e,n);case 4:return ag(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Hs(e,null,r,n):Ut(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pn(r,i),Av(t,e,r,i,n);case 7:return Ut(t,e,e.pendingProps,n),e.child;case 8:return Ut(t,e,e.pendingProps.children,n),e.child;case 12:return Ut(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,je(Ec,r._currentValue),r._currentValue=o,s!==null)if(Vn(s.value,o)){if(s.children===i.children&&!tn.current){e=gr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=hr(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),gp(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(q(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),gp(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ut(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Os(e,n),i=In(i),r=r(i),e.flags|=1,Ut(t,e,r,n),e.child;case 14:return r=e.type,i=Pn(r,e.pendingProps),i=Pn(r.type,i),Cv(t,e,r,i,n);case 15:return q5(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pn(r,i),$u(t,e),e.tag=1,nn(r)?(t=!0,yc(e)):t=!1,Os(e,n),U5(e,r,i),yp(e,r,i,n),Ep(null,e,r,!0,t,n);case 19:return X5(t,e,n);case 22:return K5(t,e,n)}throw Error(q(156,e.tag))};function dE(t,e){return jw(t,e)}function uR(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tn(t,e,n,r){return new uR(t,e,n,r)}function Sg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function cR(t){if(typeof t=="function")return Sg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Bm)return 11;if(t===$m)return 14}return 2}function Yr(t,e){var n=t.alternate;return n===null?(n=Tn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Wu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Sg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case _s:return zi(n.children,i,s,e);case jm:o=8,i|=8;break;case $d:return t=Tn(12,n,e,i|2),t.elementType=$d,t.lanes=s,t;case Ud:return t=Tn(13,n,e,i),t.elementType=Ud,t.lanes=s,t;case Hd:return t=Tn(19,n,e,i),t.elementType=Hd,t.lanes=s,t;case Tw:return Ph(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ew:o=10;break e;case Sw:o=9;break e;case Bm:o=11;break e;case $m:o=14;break e;case Pr:o=16,r=null;break e}throw Error(q(130,t==null?t:typeof t,""))}return e=Tn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function zi(t,e,n,r){return t=Tn(7,t,r,e),t.lanes=n,t}function Ph(t,e,n,r){return t=Tn(22,t,r,e),t.elementType=Tw,t.lanes=n,t.stateNode={isHidden:!1},t}function nd(t,e,n){return t=Tn(6,t,null,e),t.lanes=n,t}function rd(t,e,n){return e=Tn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function hR(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vf(0),this.expirationTimes=Vf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Tg(t,e,n,r,i,s,o,a,l){return t=new hR(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Tn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},og(s),t}function fR(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function pE(t){if(!t)return ii;t=t._reactInternals;e:{if(es(t)!==t||t.tag!==1)throw Error(q(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(nn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(q(171))}if(t.tag===1){var n=t.type;if(nn(n))return p5(t,n,e)}return e}function mE(t,e,n,r,i,s,o,a,l){return t=Tg(n,r,!0,t,i,s,o,a,l),t.context=pE(null),n=t.current,r=Ht(),i=Qr(n),s=hr(r,i),s.callback=e??null,Kr(n,s,i),t.current.lanes=i,cl(t,i,r),rn(t,r),t}function kh(t,e,n,r){var i=e.current,s=Ht(),o=Qr(i);return n=pE(n),e.context===null?e.context=n:e.pendingContext=n,e=hr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Kr(i,e,o),t!==null&&(Dn(t,i,o,s),zu(t,i,o)),o}function kc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Bv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function bg(t,e){Bv(t,e),(t=t.alternate)&&Bv(t,e)}function dR(){return null}var gE=typeof reportError=="function"?reportError:function(t){console.error(t)};function xg(t){this._internalRoot=t}Lh.prototype.render=xg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(q(409));kh(t,e,null,null)};Lh.prototype.unmount=xg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;qi(function(){kh(null,t,null,null)}),e[pr]=null}};function Lh(t){this._internalRoot=t}Lh.prototype.unstable_scheduleHydration=function(t){if(t){var e=Kw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Or.length&&e!==0&&e<Or[n].priority;n++);Or.splice(n,0,t),n===0&&Qw(t)}};function Ig(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Oh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function $v(){}function pR(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=kc(o);s.call(u)}}var o=mE(e,r,t,0,null,!1,!1,"",$v);return t._reactRootContainer=o,t[pr]=o.current,Fa(t.nodeType===8?t.parentNode:t),qi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=kc(l);a.call(u)}}var l=Tg(t,0,!1,null,null,!1,!1,"",$v);return t._reactRootContainer=l,t[pr]=l.current,Fa(t.nodeType===8?t.parentNode:t),qi(function(){kh(e,l,n,r)}),l}function Dh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=kc(o);a.call(l)}}kh(e,o,t,i)}else o=pR(n,e,t,i,r);return kc(o)}Ww=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ra(e.pendingLanes);n!==0&&(Wm(e,n|1),rn(e,lt()),!(Ae&6)&&(Ks=lt()+500,mi()))}break;case 13:qi(function(){var r=mr(t,1);if(r!==null){var i=Ht();Dn(r,t,1,i)}}),bg(t,1)}};qm=function(t){if(t.tag===13){var e=mr(t,134217728);if(e!==null){var n=Ht();Dn(e,t,134217728,n)}bg(t,134217728)}};qw=function(t){if(t.tag===13){var e=Qr(t),n=mr(t,e);if(n!==null){var r=Ht();Dn(n,t,e,r)}bg(t,e)}};Kw=function(){return Ne};Gw=function(t,e){var n=Ne;try{return Ne=t,e()}finally{Ne=n}};ep=function(t,e,n){switch(e){case"input":if(Kd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=bh(r);if(!i)throw Error(q(90));xw(r),Kd(r,i)}}}break;case"textarea":Rw(t,n);break;case"select":e=n.value,e!=null&&Cs(t,!!n.multiple,e,!1)}};Dw=vg;Mw=qi;var mR={usingClientEntryPoint:!1,Events:[fl,Es,bh,Lw,Ow,vg]},Ko={findFiberByHostInstance:Oi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},gR={bundleType:Ko.bundleType,version:Ko.version,rendererPackageName:Ko.rendererPackageName,rendererConfig:Ko.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Er.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Fw(t),t===null?null:t.stateNode},findFiberByHostInstance:Ko.findFiberByHostInstance||dR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lu.isDisabled&&lu.supportsFiber)try{wh=lu.inject(gR),qn=lu}catch{}}yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mR;yn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ig(e))throw Error(q(200));return fR(t,e,null,n)};yn.createRoot=function(t,e){if(!Ig(t))throw Error(q(299));var n=!1,r="",i=gE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Tg(t,1,!1,null,null,n,!1,r,i),t[pr]=e.current,Fa(t.nodeType===8?t.parentNode:t),new xg(e)};yn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(q(188)):(t=Object.keys(t).join(","),Error(q(268,t)));return t=Fw(e),t=t===null?null:t.stateNode,t};yn.flushSync=function(t){return qi(t)};yn.hydrate=function(t,e,n){if(!Oh(e))throw Error(q(200));return Dh(null,t,e,!0,n)};yn.hydrateRoot=function(t,e,n){if(!Ig(t))throw Error(q(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=gE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=mE(e,null,t,1,n??null,i,!1,s,o),t[pr]=e.current,Fa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Lh(e)};yn.render=function(t,e,n){if(!Oh(e))throw Error(q(200));return Dh(null,t,e,!1,n)};yn.unmountComponentAtNode=function(t){if(!Oh(t))throw Error(q(40));return t._reactRootContainer?(qi(function(){Dh(null,null,t,!1,function(){t._reactRootContainer=null,t[pr]=null})}),!0):!1};yn.unstable_batchedUpdates=vg;yn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Oh(n))throw Error(q(200));if(t==null||t._reactInternals===void 0)throw Error(q(38));return Dh(t,e,n,!1,r)};yn.version="18.3.1-next-f1338f8080-20240426";function _E(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_E)}catch(t){console.error(t)}}_E(),_w.exports=yn;var _R=_w.exports,Uv=_R;jd.createRoot=Uv.createRoot,jd.hydrateRoot=Uv.hydrateRoot;var Rg={};Object.defineProperty(Rg,"__esModule",{value:!0});Rg.parse=bR;Rg.serialize=xR;const yR=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,vR=/^[\u0021-\u003A\u003C-\u007E]*$/,wR=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,ER=/^[\u0020-\u003A\u003D-\u007E]*$/,SR=Object.prototype.toString,TR=(()=>{const t=function(){};return t.prototype=Object.create(null),t})();function bR(t,e){const n=new TR,r=t.length;if(r<2)return n;const i=(e==null?void 0:e.decode)||IR;let s=0;do{const o=t.indexOf("=",s);if(o===-1)break;const a=t.indexOf(";",s),l=a===-1?r:a;if(o>l){s=t.lastIndexOf(";",o-1)+1;continue}const u=Hv(t,s,o),h=Wv(t,o,u),f=t.slice(u,h);if(n[f]===void 0){let d=Hv(t,o+1,l),m=Wv(t,l,d);const _=i(t.slice(d,m));n[f]=_}s=l+1}while(s<r);return n}function Hv(t,e,n){do{const r=t.charCodeAt(e);if(r!==32&&r!==9)return e}while(++e<n);return n}function Wv(t,e,n){for(;e>n;){const r=t.charCodeAt(--e);if(r!==32&&r!==9)return e+1}return n}function xR(t,e,n){const r=(n==null?void 0:n.encode)||encodeURIComponent;if(!yR.test(t))throw new TypeError(`argument name is invalid: ${t}`);const i=r(e);if(!vR.test(i))throw new TypeError(`argument val is invalid: ${e}`);let s=t+"="+i;if(!n)return s;if(n.maxAge!==void 0){if(!Number.isInteger(n.maxAge))throw new TypeError(`option maxAge is invalid: ${n.maxAge}`);s+="; Max-Age="+n.maxAge}if(n.domain){if(!wR.test(n.domain))throw new TypeError(`option domain is invalid: ${n.domain}`);s+="; Domain="+n.domain}if(n.path){if(!ER.test(n.path))throw new TypeError(`option path is invalid: ${n.path}`);s+="; Path="+n.path}if(n.expires){if(!RR(n.expires)||!Number.isFinite(n.expires.valueOf()))throw new TypeError(`option expires is invalid: ${n.expires}`);s+="; Expires="+n.expires.toUTCString()}if(n.httpOnly&&(s+="; HttpOnly"),n.secure&&(s+="; Secure"),n.partitioned&&(s+="; Partitioned"),n.priority)switch(typeof n.priority=="string"?n.priority.toLowerCase():void 0){case"low":s+="; Priority=Low";break;case"medium":s+="; Priority=Medium";break;case"high":s+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${n.priority}`)}if(n.sameSite)switch(typeof n.sameSite=="string"?n.sameSite.toLowerCase():n.sameSite){case!0:case"strict":s+="; SameSite=Strict";break;case"lax":s+="; SameSite=Lax";break;case"none":s+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${n.sameSite}`)}return s}function IR(t){if(t.indexOf("%")===-1)return t;try{return decodeURIComponent(t)}catch{return t}}function RR(t){return SR.call(t)==="[object Date]"}/**
 * react-router v7.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var qv="popstate";function AR(t={}){function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Op("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ka(i)}return PR(e,n,null,t)}function Ze(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Yn(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function CR(){return Math.random().toString(36).substring(2,10)}function Kv(t,e){return{usr:t.state,key:t.key,idx:e}}function Op(t,e,n=null,r){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?mo(e):e,state:n,key:e&&e.key||r||CR()}}function Ka({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function mo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substring(r),t=t.substring(0,r)),t&&(e.pathname=t)}return e}function PR(t,e,n,r={}){let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a="POP",l=null,u=h();u==null&&(u=0,o.replaceState({...o.state,idx:u},""));function h(){return(o.state||{idx:null}).idx}function f(){a="POP";let E=h(),w=E==null?null:E-u;u=E,l&&l({action:a,location:y.location,delta:w})}function d(E,w){a="PUSH";let v=Op(y.location,E,w);u=h()+1;let b=Kv(v,u),L=y.createHref(v);try{o.pushState(b,"",L)}catch(O){if(O instanceof DOMException&&O.name==="DataCloneError")throw O;i.location.assign(L)}s&&l&&l({action:a,location:y.location,delta:1})}function m(E,w){a="REPLACE";let v=Op(y.location,E,w);u=h();let b=Kv(v,u),L=y.createHref(v);o.replaceState(b,"",L),s&&l&&l({action:a,location:y.location,delta:0})}function _(E){let w=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof E=="string"?E:Ka(E);return v=v.replace(/ $/,"%20"),Ze(w,`No window.location.(origin|href) available to create URL for href: ${v}`),new URL(v,w)}let y={get action(){return a},get location(){return t(i,o)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(qv,f),l=E,()=>{i.removeEventListener(qv,f),l=null}},createHref(E){return e(i,E)},createURL:_,encodeLocation(E){let w=_(E);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:d,replace:m,go(E){return o.go(E)}};return y}function yE(t,e,n="/"){return kR(t,e,n,!1)}function kR(t,e,n,r){let i=typeof e=="string"?mo(e):e,s=si(i.pathname||"/",n);if(s==null)return null;let o=vE(t);LR(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let u=UR(s);a=BR(o[l],u,r)}return a}function vE(t,e=[],n=[],r=""){let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Ze(l.relativePath.startsWith(r),`Absolute route path "${l.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),l.relativePath=l.relativePath.slice(r.length));let u=fr([r,l.relativePath]),h=n.concat(l);s.children&&s.children.length>0&&(Ze(s.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${u}".`),vE(s.children,e,h,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:zR(u,s.index),routesMeta:h})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of wE(s.path))i(s,o,l)}),e}function wE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=wE(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function LR(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:jR(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var OR=/^:[\w-]+$/,DR=3,MR=2,NR=1,VR=10,FR=-2,Gv=t=>t==="*";function zR(t,e){let n=t.split("/"),r=n.length;return n.some(Gv)&&(r+=FR),e&&(r+=MR),n.filter(i=>!Gv(i)).reduce((i,s)=>i+(OR.test(s)?DR:s===""?NR:VR),r)}function jR(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function BR(t,e,n=!1){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,h=s==="/"?e:e.slice(s.length)||"/",f=Lc({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},h),d=l.route;if(!f&&u&&n&&!r[r.length-1].route.index&&(f=Lc({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},h)),!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:fr([s,f.pathname]),pathnameBase:KR(fr([s,f.pathnameBase])),route:d}),f.pathnameBase!=="/"&&(s=fr([s,f.pathnameBase]))}return o}function Lc(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=$R(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,{paramName:h,isOptional:f},d)=>{if(h==="*"){let _=a[d]||"";o=s.slice(0,s.length-_.length).replace(/(.)\/+$/,"$1")}const m=a[d];return f&&!m?u[h]=void 0:u[h]=(m||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function $R(t,e=!1,n=!0){Yn(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function UR(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Yn(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function si(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function HR(t,e="/"){let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?mo(t):t;return{pathname:n?n.startsWith("/")?n:WR(n,e):e,search:GR(r),hash:QR(i)}}function WR(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function id(t,e,n,r){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function qR(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function EE(t){let e=qR(t);return e.map((n,r)=>r===e.length-1?n.pathname:n.pathnameBase)}function SE(t,e,n,r=!1){let i;typeof t=="string"?i=mo(t):(i={...t},Ze(!i.pathname||!i.pathname.includes("?"),id("?","pathname","search",i)),Ze(!i.pathname||!i.pathname.includes("#"),id("#","pathname","hash",i)),Ze(!i.search||!i.search.includes("#"),id("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),f-=1;i.pathname=d.join("/")}a=f>=0?e[f]:"/"}let l=HR(i,a),u=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||h)&&(l.pathname+="/"),l}var fr=t=>t.join("/").replace(/\/\/+/g,"/"),KR=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),GR=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,QR=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function YR(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var TE=["POST","PUT","PATCH","DELETE"];new Set(TE);var XR=["GET",...TE];new Set(XR);var go=F.createContext(null);go.displayName="DataRouter";var Mh=F.createContext(null);Mh.displayName="DataRouterState";var bE=F.createContext({isTransitioning:!1});bE.displayName="ViewTransition";var JR=F.createContext(new Map);JR.displayName="Fetchers";var ZR=F.createContext(null);ZR.displayName="Await";var Jn=F.createContext(null);Jn.displayName="Navigation";var pl=F.createContext(null);pl.displayName="Location";var Sr=F.createContext({outlet:null,matches:[],isDataRoute:!1});Sr.displayName="Route";var Ag=F.createContext(null);Ag.displayName="RouteError";function eA(t,{relative:e}={}){Ze(ml(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=F.useContext(Jn),{hash:i,pathname:s,search:o}=gl(t,{relative:e}),a=s;return n!=="/"&&(a=s==="/"?n:fr([n,s])),r.createHref({pathname:a,search:o,hash:i})}function ml(){return F.useContext(pl)!=null}function ts(){return Ze(ml(),"useLocation() may be used only in the context of a <Router> component."),F.useContext(pl).location}var xE="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function IE(t){F.useContext(Jn).static||F.useLayoutEffect(t)}function Cg(){let{isDataRoute:t}=F.useContext(Sr);return t?dA():tA()}function tA(){Ze(ml(),"useNavigate() may be used only in the context of a <Router> component.");let t=F.useContext(go),{basename:e,navigator:n}=F.useContext(Jn),{matches:r}=F.useContext(Sr),{pathname:i}=ts(),s=JSON.stringify(EE(r)),o=F.useRef(!1);return IE(()=>{o.current=!0}),F.useCallback((l,u={})=>{if(Yn(o.current,xE),!o.current)return;if(typeof l=="number"){n.go(l);return}let h=SE(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:fr([e,h.pathname])),(u.replace?n.replace:n.push)(h,u.state,u)},[e,n,s,i,t])}F.createContext(null);function gl(t,{relative:e}={}){let{matches:n}=F.useContext(Sr),{pathname:r}=ts(),i=JSON.stringify(EE(n));return F.useMemo(()=>SE(t,JSON.parse(i),r,e==="path"),[t,i,r,e])}function nA(t,e){return RE(t,e)}function RE(t,e,n,r){var v;Ze(ml(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i,static:s}=F.useContext(Jn),{matches:o}=F.useContext(Sr),a=o[o.length-1],l=a?a.params:{},u=a?a.pathname:"/",h=a?a.pathnameBase:"/",f=a&&a.route;{let b=f&&f.path||"";AE(u,!f||b.endsWith("*")||b.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${u}" (under <Route path="${b}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${b}"> to <Route path="${b==="/"?"*":`${b}/*`}">.`)}let d=ts(),m;if(e){let b=typeof e=="string"?mo(e):e;Ze(h==="/"||((v=b.pathname)==null?void 0:v.startsWith(h)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${b.pathname}" was given in the \`location\` prop.`),m=b}else m=d;let _=m.pathname||"/",y=_;if(h!=="/"){let b=h.replace(/^\//,"").split("/");y="/"+_.replace(/^\//,"").split("/").slice(b.length).join("/")}let E=!s&&n&&n.matches&&n.matches.length>0?n.matches:yE(t,{pathname:y});Yn(f||E!=null,`No routes matched location "${m.pathname}${m.search}${m.hash}" `),Yn(E==null||E[E.length-1].route.element!==void 0||E[E.length-1].route.Component!==void 0||E[E.length-1].route.lazy!==void 0,`Matched leaf route at location "${m.pathname}${m.search}${m.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let w=aA(E&&E.map(b=>Object.assign({},b,{params:Object.assign({},l,b.params),pathname:fr([h,i.encodeLocation?i.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?h:fr([h,i.encodeLocation?i.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),o,n,r);return e&&w?F.createElement(pl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...m},navigationType:"POP"}},w):w}function rA(){let t=fA(),e=YR(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r},o=null;return console.error("Error handled by React Router default ErrorBoundary:",t),o=F.createElement(F.Fragment,null,F.createElement("p",null,"💿 Hey developer 👋"),F.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",F.createElement("code",{style:s},"ErrorBoundary")," or"," ",F.createElement("code",{style:s},"errorElement")," prop on your route.")),F.createElement(F.Fragment,null,F.createElement("h2",null,"Unexpected Application Error!"),F.createElement("h3",{style:{fontStyle:"italic"}},e),n?F.createElement("pre",{style:i},n):null,o)}var iA=F.createElement(rA,null),sA=class extends F.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){console.error("React Router caught the following error during render",t,e)}render(){return this.state.error!==void 0?F.createElement(Sr.Provider,{value:this.props.routeContext},F.createElement(Ag.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function oA({routeContext:t,match:e,children:n}){let r=F.useContext(go);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),F.createElement(Sr.Provider,{value:t},n)}function aA(t,e=[],n=null,r=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let i=t,s=n==null?void 0:n.errors;if(s!=null){let l=i.findIndex(u=>u.route.id&&(s==null?void 0:s[u.route.id])!==void 0);Ze(l>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),i=i.slice(0,Math.min(i.length,l+1))}let o=!1,a=-1;if(n)for(let l=0;l<i.length;l++){let u=i[l];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(a=l),u.route.id){let{loaderData:h,errors:f}=n,d=u.route.loader&&!h.hasOwnProperty(u.route.id)&&(!f||f[u.route.id]===void 0);if(u.route.lazy||d){o=!0,a>=0?i=i.slice(0,a+1):i=[i[0]];break}}}return i.reduceRight((l,u,h)=>{let f,d=!1,m=null,_=null;n&&(f=s&&u.route.id?s[u.route.id]:void 0,m=u.route.errorElement||iA,o&&(a<0&&h===0?(AE("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,_=null):a===h&&(d=!0,_=u.route.hydrateFallbackElement||null)));let y=e.concat(i.slice(0,h+1)),E=()=>{let w;return f?w=m:d?w=_:u.route.Component?w=F.createElement(u.route.Component,null):u.route.element?w=u.route.element:w=l,F.createElement(oA,{match:u,routeContext:{outlet:l,matches:y,isDataRoute:n!=null},children:w})};return n&&(u.route.ErrorBoundary||u.route.errorElement||h===0)?F.createElement(sA,{location:n.location,revalidation:n.revalidation,component:m,error:f,children:E(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):E()},null)}function Pg(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function lA(t){let e=F.useContext(go);return Ze(e,Pg(t)),e}function uA(t){let e=F.useContext(Mh);return Ze(e,Pg(t)),e}function cA(t){let e=F.useContext(Sr);return Ze(e,Pg(t)),e}function kg(t){let e=cA(t),n=e.matches[e.matches.length-1];return Ze(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function hA(){return kg("useRouteId")}function fA(){var r;let t=F.useContext(Ag),e=uA("useRouteError"),n=kg("useRouteError");return t!==void 0?t:(r=e.errors)==null?void 0:r[n]}function dA(){let{router:t}=lA("useNavigate"),e=kg("useNavigate"),n=F.useRef(!1);return IE(()=>{n.current=!0}),F.useCallback(async(i,s={})=>{Yn(n.current,xE),n.current&&(typeof i=="number"?t.navigate(i):await t.navigate(i,{fromRouteId:e,...s}))},[t,e])}var Qv={};function AE(t,e,n){!e&&!Qv[t]&&(Qv[t]=!0,Yn(!1,n))}F.memo(pA);function pA({routes:t,future:e,state:n}){return RE(t,void 0,n,e)}function qu(t){Ze(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function mA({basename:t="/",children:e=null,location:n,navigationType:r="POP",navigator:i,static:s=!1}){Ze(!ml(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let o=t.replace(/^\/*/,"/"),a=F.useMemo(()=>({basename:o,navigator:i,static:s,future:{}}),[o,i,s]);typeof n=="string"&&(n=mo(n));let{pathname:l="/",search:u="",hash:h="",state:f=null,key:d="default"}=n,m=F.useMemo(()=>{let _=si(l,o);return _==null?null:{location:{pathname:_,search:u,hash:h,state:f,key:d},navigationType:r}},[o,l,u,h,f,d,r]);return Yn(m!=null,`<Router basename="${o}"> is not able to match the URL "${l}${u}${h}" because it does not start with the basename, so the <Router> won't render anything.`),m==null?null:F.createElement(Jn.Provider,{value:a},F.createElement(pl.Provider,{children:e,value:m}))}function gA({children:t,location:e}){return nA(Dp(t),e)}function Dp(t,e=[]){let n=[];return F.Children.forEach(t,(r,i)=>{if(!F.isValidElement(r))return;let s=[...e,i];if(r.type===F.Fragment){n.push.apply(n,Dp(r.props.children,s));return}Ze(r.type===qu,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ze(!r.props.index||!r.props.children,"An index route cannot have child routes.");let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Dp(r.props.children,s)),n.push(o)}),n}var Ku="get",Gu="application/x-www-form-urlencoded";function Nh(t){return t!=null&&typeof t.tagName=="string"}function _A(t){return Nh(t)&&t.tagName.toLowerCase()==="button"}function yA(t){return Nh(t)&&t.tagName.toLowerCase()==="form"}function vA(t){return Nh(t)&&t.tagName.toLowerCase()==="input"}function wA(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function EA(t,e){return t.button===0&&(!e||e==="_self")&&!wA(t)}var uu=null;function SA(){if(uu===null)try{new FormData(document.createElement("form"),0),uu=!1}catch{uu=!0}return uu}var TA=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function sd(t){return t!=null&&!TA.has(t)?(Yn(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Gu}"`),null):t}function bA(t,e){let n,r,i,s,o;if(yA(t)){let a=t.getAttribute("action");r=a?si(a,e):null,n=t.getAttribute("method")||Ku,i=sd(t.getAttribute("enctype"))||Gu,s=new FormData(t)}else if(_A(t)||vA(t)&&(t.type==="submit"||t.type==="image")){let a=t.form;if(a==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=t.getAttribute("formaction")||a.getAttribute("action");if(r=l?si(l,e):null,n=t.getAttribute("formmethod")||a.getAttribute("method")||Ku,i=sd(t.getAttribute("formenctype"))||sd(a.getAttribute("enctype"))||Gu,s=new FormData(a,t),!SA()){let{name:u,type:h,value:f}=t;if(h==="image"){let d=u?`${u}.`:"";s.append(`${d}x`,"0"),s.append(`${d}y`,"0")}else u&&s.append(u,f)}}else{if(Nh(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Ku,r=null,i=Gu,o=t}return s&&i==="text/plain"&&(o=s,s=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:s,body:o}}function Lg(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}async function xA(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function IA(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function RA(t,e,n){let r=await Promise.all(t.map(async i=>{let s=e.routes[i.route.id];if(s){let o=await xA(s,n);return o.links?o.links():[]}return[]}));return kA(r.flat(1).filter(IA).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function Yv(t,e,n,r,i,s){let o=(l,u)=>n[u]?l.route.id!==n[u].route.id:!0,a=(l,u)=>{var h;return n[u].pathname!==l.pathname||((h=n[u].route.path)==null?void 0:h.endsWith("*"))&&n[u].params["*"]!==l.params["*"]};return s==="assets"?e.filter((l,u)=>o(l,u)||a(l,u)):s==="data"?e.filter((l,u)=>{var f;let h=r.routes[l.route.id];if(!h||!h.hasLoader)return!1;if(o(l,u)||a(l,u))return!0;if(l.route.shouldRevalidate){let d=l.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((f=n[0])==null?void 0:f.params)||{},nextUrl:new URL(t,window.origin),nextParams:l.params,defaultShouldRevalidate:!0});if(typeof d=="boolean")return d}return!0}):[]}function AA(t,e,{includeHydrateFallback:n}={}){return CA(t.map(r=>{let i=e.routes[r.route.id];if(!i)return[];let s=[i.module];return i.clientActionModule&&(s=s.concat(i.clientActionModule)),i.clientLoaderModule&&(s=s.concat(i.clientLoaderModule)),n&&i.hydrateFallbackModule&&(s=s.concat(i.hydrateFallbackModule)),i.imports&&(s=s.concat(i.imports)),s}).flat(1))}function CA(t){return[...new Set(t)]}function PA(t){let e={},n=Object.keys(t).sort();for(let r of n)e[r]=t[r];return e}function kA(t,e){let n=new Set;return new Set(e),t.reduce((r,i)=>{let s=JSON.stringify(PA(i));return n.has(s)||(n.add(s),r.push({key:s,link:i})),r},[])}function LA(t){let e=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function OA(){let t=F.useContext(go);return Lg(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function DA(){let t=F.useContext(Mh);return Lg(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Og=F.createContext(void 0);Og.displayName="FrameworkContext";function CE(){let t=F.useContext(Og);return Lg(t,"You must render this element inside a <HydratedRouter> element"),t}function MA(t,e){let n=F.useContext(Og),[r,i]=F.useState(!1),[s,o]=F.useState(!1),{onFocus:a,onBlur:l,onMouseEnter:u,onMouseLeave:h,onTouchStart:f}=e,d=F.useRef(null);F.useEffect(()=>{if(t==="render"&&o(!0),t==="viewport"){let y=w=>{w.forEach(v=>{o(v.isIntersecting)})},E=new IntersectionObserver(y,{threshold:.5});return d.current&&E.observe(d.current),()=>{E.disconnect()}}},[t]),F.useEffect(()=>{if(r){let y=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(y)}}},[r]);let m=()=>{i(!0)},_=()=>{i(!1),o(!1)};return n?t!=="intent"?[s,d,{}]:[s,d,{onFocus:Go(a,m),onBlur:Go(l,_),onMouseEnter:Go(u,m),onMouseLeave:Go(h,_),onTouchStart:Go(f,m)}]:[!1,d,{}]}function Go(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function NA({page:t,...e}){let{router:n}=OA(),r=F.useMemo(()=>yE(n.routes,t,n.basename),[n.routes,t,n.basename]);return r?F.createElement(FA,{page:t,matches:r,...e}):null}function VA(t){let{manifest:e,routeModules:n}=CE(),[r,i]=F.useState([]);return F.useEffect(()=>{let s=!1;return RA(t,e,n).then(o=>{s||i(o)}),()=>{s=!0}},[t,e,n]),r}function FA({page:t,matches:e,...n}){let r=ts(),{manifest:i,routeModules:s}=CE(),{loaderData:o,matches:a}=DA(),l=F.useMemo(()=>Yv(t,e,a,i,r,"data"),[t,e,a,i,r]),u=F.useMemo(()=>Yv(t,e,a,i,r,"assets"),[t,e,a,i,r]),h=F.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let m=new Set,_=!1;if(e.forEach(E=>{var v;let w=i.routes[E.route.id];!w||!w.hasLoader||(!l.some(b=>b.route.id===E.route.id)&&E.route.id in o&&((v=s[E.route.id])!=null&&v.shouldRevalidate)||w.hasClientLoader?_=!0:m.add(E.route.id))}),m.size===0)return[];let y=LA(t);return _&&m.size>0&&y.searchParams.set("_routes",e.filter(E=>m.has(E.route.id)).map(E=>E.route.id).join(",")),[y.pathname+y.search]},[o,r,i,l,e,t,s]),f=F.useMemo(()=>AA(u,i),[u,i]),d=VA(u);return F.createElement(F.Fragment,null,h.map(m=>F.createElement("link",{key:m,rel:"prefetch",as:"fetch",href:m,...n})),f.map(m=>F.createElement("link",{key:m,rel:"modulepreload",href:m,...n})),d.map(({key:m,link:_})=>F.createElement("link",{key:m,..._})))}function zA(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var PE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{PE&&(window.__reactRouterVersion="7.2.0")}catch{}function jA({basename:t,children:e,window:n}){let r=F.useRef();r.current==null&&(r.current=AR({window:n,v5Compat:!0}));let i=r.current,[s,o]=F.useState({action:i.action,location:i.location}),a=F.useCallback(l=>{F.startTransition(()=>o(l))},[o]);return F.useLayoutEffect(()=>i.listen(a),[i,a]),F.createElement(mA,{basename:t,children:e,location:s.location,navigationType:s.action,navigator:i})}var kE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Gs=F.forwardRef(function({onClick:e,discover:n="render",prefetch:r="none",relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:h,viewTransition:f,...d},m){let{basename:_}=F.useContext(Jn),y=typeof u=="string"&&kE.test(u),E,w=!1;if(typeof u=="string"&&y&&(E=u,PE))try{let T=new URL(window.location.href),I=u.startsWith("//")?new URL(T.protocol+u):new URL(u),C=si(I.pathname,_);I.origin===T.origin&&C!=null?u=C+I.search+I.hash:w=!0}catch{Yn(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let v=eA(u,{relative:i}),[b,L,O]=MA(r,d),D=HA(u,{replace:o,state:a,target:l,preventScrollReset:h,relative:i,viewTransition:f});function x(T){e&&e(T),T.defaultPrevented||D(T)}let S=F.createElement("a",{...d,...O,href:E||v,onClick:w||s?e:x,ref:zA(m,L),target:l,"data-discover":!y&&n==="render"?"true":void 0});return b&&!y?F.createElement(F.Fragment,null,S,F.createElement(NA,{page:v})):S});Gs.displayName="Link";var BA=F.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:r="",end:i=!1,style:s,to:o,viewTransition:a,children:l,...u},h){let f=gl(o,{relative:u.relative}),d=ts(),m=F.useContext(Mh),{navigator:_,basename:y}=F.useContext(Jn),E=m!=null&&QA(f)&&a===!0,w=_.encodeLocation?_.encodeLocation(f).pathname:f.pathname,v=d.pathname,b=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;n||(v=v.toLowerCase(),b=b?b.toLowerCase():null,w=w.toLowerCase()),b&&y&&(b=si(b,y)||b);const L=w!=="/"&&w.endsWith("/")?w.length-1:w.length;let O=v===w||!i&&v.startsWith(w)&&v.charAt(L)==="/",D=b!=null&&(b===w||!i&&b.startsWith(w)&&b.charAt(w.length)==="/"),x={isActive:O,isPending:D,isTransitioning:E},S=O?e:void 0,T;typeof r=="function"?T=r(x):T=[r,O?"active":null,D?"pending":null,E?"transitioning":null].filter(Boolean).join(" ");let I=typeof s=="function"?s(x):s;return F.createElement(Gs,{...u,"aria-current":S,className:T,ref:h,style:I,to:o,viewTransition:a},typeof l=="function"?l(x):l)});BA.displayName="NavLink";var $A=F.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:r,replace:i,state:s,method:o=Ku,action:a,onSubmit:l,relative:u,preventScrollReset:h,viewTransition:f,...d},m)=>{let _=KA(),y=GA(a,{relative:u}),E=o.toLowerCase()==="get"?"get":"post",w=typeof a=="string"&&kE.test(a),v=b=>{if(l&&l(b),b.defaultPrevented)return;b.preventDefault();let L=b.nativeEvent.submitter,O=(L==null?void 0:L.getAttribute("formmethod"))||o;_(L||b.currentTarget,{fetcherKey:e,method:O,navigate:n,replace:i,state:s,relative:u,preventScrollReset:h,viewTransition:f})};return F.createElement("form",{ref:m,method:E,action:y,onSubmit:r?l:v,...d,"data-discover":!w&&t==="render"?"true":void 0})});$A.displayName="Form";function UA(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function LE(t){let e=F.useContext(go);return Ze(e,UA(t)),e}function HA(t,{target:e,replace:n,state:r,preventScrollReset:i,relative:s,viewTransition:o}={}){let a=Cg(),l=ts(),u=gl(t,{relative:s});return F.useCallback(h=>{if(EA(h,e)){h.preventDefault();let f=n!==void 0?n:Ka(l)===Ka(u);a(t,{replace:f,state:r,preventScrollReset:i,relative:s,viewTransition:o})}},[l,a,u,n,r,e,t,i,s,o])}var WA=0,qA=()=>`__${String(++WA)}__`;function KA(){let{router:t}=LE("useSubmit"),{basename:e}=F.useContext(Jn),n=hA();return F.useCallback(async(r,i={})=>{let{action:s,method:o,encType:a,formData:l,body:u}=bA(r,e);if(i.navigate===!1){let h=i.fetcherKey||qA();await t.fetch(h,n,i.action||s,{preventScrollReset:i.preventScrollReset,formData:l,body:u,formMethod:i.method||o,formEncType:i.encType||a,flushSync:i.flushSync})}else await t.navigate(i.action||s,{preventScrollReset:i.preventScrollReset,formData:l,body:u,formMethod:i.method||o,formEncType:i.encType||a,replace:i.replace,state:i.state,fromRouteId:n,flushSync:i.flushSync,viewTransition:i.viewTransition})},[t,e,n])}function GA(t,{relative:e}={}){let{basename:n}=F.useContext(Jn),r=F.useContext(Sr);Ze(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),s={...gl(t||".",{relative:e})},o=ts();if(t==null){s.search=o.search;let a=new URLSearchParams(s.search),l=a.getAll("index");if(l.some(h=>h==="")){a.delete("index"),l.filter(f=>f).forEach(f=>a.append("index",f));let h=a.toString();s.search=h?`?${h}`:""}}return(!t||t===".")&&i.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(s.pathname=s.pathname==="/"?n:fr([n,s.pathname])),Ka(s)}function QA(t,e={}){let n=F.useContext(bE);Ze(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=LE("useViewTransitionState"),i=gl(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=si(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=si(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Lc(i.pathname,o)!=null||Lc(i.pathname,s)!=null}new TextEncoder;var OE={exports:{}};(function(t){const e=(()=>{const o={},a={font:"Standard",fontPath:"./fonts"};function l(M,z){let k={},V,j,U,ee,Y=[[16384,"vLayout",2],[8192,"vLayout",1],[4096,"vRule5",!0],[2048,"vRule4",!0],[1024,"vRule3",!0],[512,"vRule2",!0],[256,"vRule1",!0],[128,"hLayout",2],[64,"hLayout",1],[32,"hRule6",!0],[16,"hRule5",!0],[8,"hRule4",!0],[4,"hRule3",!0],[2,"hRule2",!0],[1,"hRule1",!0]];for(V=z!==null?z:M,j=0,U=Y.length;j<U;)ee=Y[j],V>=ee[0]?(V=V-ee[0],k[ee[1]]=typeof k[ee[1]]>"u"?ee[2]:k[ee[1]]):ee[1]!=="vLayout"&&ee[1]!=="hLayout"&&(k[ee[1]]=!1),j++;return typeof k.hLayout>"u"?M===0?k.hLayout=1:M===-1?k.hLayout=0:k.hRule1||k.hRule2||k.hRule3||k.hRule4||k.hRule5||k.hRule6?k.hLayout=3:k.hLayout=2:k.hLayout===2&&(k.hRule1||k.hRule2||k.hRule3||k.hRule4||k.hRule5||k.hRule6)&&(k.hLayout=3),typeof k.vLayout>"u"?k.vRule1||k.vRule2||k.vRule3||k.vRule4||k.vRule5?k.vLayout=3:k.vLayout=0:k.vLayout===2&&(k.vRule1||k.vRule2||k.vRule3||k.vRule4||k.vRule5)&&(k.vLayout=3),k}function u(M,z,k){return M===z&&M!==k?M:!1}function h(M,z){let k="|/\\[]{}()<>";if(M==="_"){if(k.indexOf(z)!==-1)return z}else if(z==="_"&&k.indexOf(M)!==-1)return M;return!1}function f(M,z){let k="| /\\ [] {} () <>",V=k.indexOf(M),j=k.indexOf(z);if(V!==-1&&j!==-1&&V!==j&&Math.abs(V-j)!==1){const U=Math.max(V,j),ee=U+1;return k.substring(U,ee)}return!1}function d(M,z){let k="[] {} ()",V=k.indexOf(M),j=k.indexOf(z);return V!==-1&&j!==-1&&Math.abs(V-j)<=1?"|":!1}function m(M,z){let k="/\\ \\/ ><",V={0:"|",3:"Y",6:"X"},j=k.indexOf(M),U=k.indexOf(z);return j!==-1&&U!==-1&&U-j===1?V[j]:!1}function _(M,z,k){return M===k&&z===k?k:!1}function y(M,z){return M===z?M:!1}function E(M,z){let k="|/\\[]{}()<>";if(M==="_"){if(k.indexOf(z)!==-1)return z}else if(z==="_"&&k.indexOf(M)!==-1)return M;return!1}function w(M,z){let k="| /\\ [] {} () <>",V=k.indexOf(M),j=k.indexOf(z);if(V!==-1&&j!==-1&&V!==j&&Math.abs(V-j)!==1){const U=Math.max(V,j),ee=U+1;return k.substring(U,ee)}return!1}function v(M,z){return M==="-"&&z==="_"||M==="_"&&z==="-"?"=":!1}function b(M,z){return M==="|"&&z==="|"?"|":!1}function L(M,z,k){return z===" "||z===""||z===k&&M!==" "?M:z}function O(M,z,k){if(k.fittingRules.vLayout===0)return"invalid";let V,j=Math.min(M.length,z.length),U,ee,Y=!1,K;if(j===0)return"invalid";for(V=0;V<j;V++)if(U=M.substring(V,V+1),ee=z.substring(V,V+1),U!==" "&&ee!==" "){if(k.fittingRules.vLayout===1)return"invalid";if(k.fittingRules.vLayout===2)return"end";if(b(U,ee)){Y=Y||!1;continue}if(K=!1,K=k.fittingRules.vRule1?y(U,ee):K,K=!K&&k.fittingRules.vRule2?E(U,ee):K,K=!K&&k.fittingRules.vRule3?w(U,ee):K,K=!K&&k.fittingRules.vRule4?v(U,ee):K,Y=!0,!K)return"invalid"}return Y?"end":"valid"}function D(M,z,k){let V=M.length,j=M.length;z.length;let U,ee,Y,K=1,se,Oe,ke;for(;K<=V;){for(U=M.slice(Math.max(0,j-K),j),ee=z.slice(0,Math.min(V,K)),Y=ee.length,ke="",se=0;se<Y;se++)if(Oe=O(U[se],ee[se],k),Oe==="end")ke=Oe;else if(Oe==="invalid"){ke=Oe;break}else ke===""&&(ke="valid");if(ke==="invalid"){K--;break}if(ke==="end")break;ke==="valid"&&K++}return Math.min(V,K)}function x(M,z,k){let V,j=Math.min(M.length,z.length),U,ee,Y="",K;for(V=0;V<j;V++)U=M.substring(V,V+1),ee=z.substring(V,V+1),U!==" "&&ee!==" "?k.fittingRules.vLayout===1||k.fittingRules.vLayout===2?Y+=L(U,ee):(K=!1,K=k.fittingRules.vRule5?b(U,ee):K,K=!K&&k.fittingRules.vRule1?y(U,ee):K,K=!K&&k.fittingRules.vRule2?E(U,ee):K,K=!K&&k.fittingRules.vRule3?w(U,ee):K,K=!K&&k.fittingRules.vRule4?v(U,ee):K,Y+=K):Y+=L(U,ee);return Y}function S(M,z,k,V){let j=M.length,U=z.length,ee=M.slice(0,Math.max(0,j-k)),Y=M.slice(Math.max(0,j-k),j),K=z.slice(0,Math.min(k,U)),se,Oe,ke,Ce=[],De,zt=[];for(Oe=Y.length,se=0;se<Oe;se++)se>=U?ke=Y[se]:ke=x(Y[se],K[se],V),Ce.push(ke);return De=z.slice(Math.min(k,U),U),zt.concat(ee,Ce,De)}function T(M,z){let k,V=M.length,j="";for(k=0;k<z;k++)j+=" ";for(k=0;k<V;k++)M[k]+=j}function I(M,z,k){let V=M[0].length,j=z[0].length,U;return V>j?T(z,V-j):j>V&&T(M,j-V),U=D(M,z,k),S(M,z,U,k)}function C(M,z,k){if(k.fittingRules.hLayout===0)return 0;let V,j=M.length,U=z.length,ee=j,Y=1,K=!1,se=!1,Oe,ke,Ce,De;if(j===0)return 0;e:for(;Y<=ee;){const zt=j-Y;for(Oe=M.substring(zt,zt+Y),ke=z.substring(0,Math.min(Y,U)),V=0;V<Math.min(Y,U);V++)if(Ce=Oe.substring(V,V+1),De=ke.substring(V,V+1),Ce!==" "&&De!==" "){if(k.fittingRules.hLayout===1){Y=Y-1;break e}else if(k.fittingRules.hLayout===2){(Ce===k.hardBlank||De===k.hardBlank)&&(Y=Y-1);break e}else if(K=!0,se=!1,se=k.fittingRules.hRule1?u(Ce,De,k.hardBlank):se,se=!se&&k.fittingRules.hRule2?h(Ce,De,k.hardBlank):se,se=!se&&k.fittingRules.hRule3?f(Ce,De,k.hardBlank):se,se=!se&&k.fittingRules.hRule4?d(Ce,De,k.hardBlank):se,se=!se&&k.fittingRules.hRule5?m(Ce,De,k.hardBlank):se,se=!se&&k.fittingRules.hRule6?_(Ce,De,k.hardBlank):se,!se){Y=Y-1;break e}}if(K)break;Y++}return Math.min(ee,Y)}function P(M,z,k,V){let j,U,ee=[],Y,K,se,Oe,ke,Ce,De,zt;for(j=0;j<V.height;j++){De=M[j],zt=z[j],ke=De.length,Ce=zt.length,Y=ke-k,K=De.substr(0,Math.max(0,Y)),se="";const is=Math.max(0,ke-k);var Tr=De.substring(is,is+k),vi=zt.substring(0,Math.min(k,Ce));for(U=0;U<k;U++){var Be=U<ke?Tr.substring(U,U+1):" ",ut=U<Ce?vi.substring(U,U+1):" ";if(Be!==" "&&ut!==" ")if(V.fittingRules.hLayout===1)se+=L(Be,ut,V.hardBlank);else if(V.fittingRules.hLayout===2)se+=L(Be,ut,V.hardBlank);else{var Ve="";Ve=!Ve&&V.fittingRules.hRule1?u(Be,ut,V.hardBlank):Ve,Ve=!Ve&&V.fittingRules.hRule2?h(Be,ut,V.hardBlank):Ve,Ve=!Ve&&V.fittingRules.hRule3?f(Be,ut,V.hardBlank):Ve,Ve=!Ve&&V.fittingRules.hRule4?d(Be,ut,V.hardBlank):Ve,Ve=!Ve&&V.fittingRules.hRule5?m(Be,ut,V.hardBlank):Ve,Ve=!Ve&&V.fittingRules.hRule6?_(Be,ut,V.hardBlank):Ve,Ve=Ve||L(Be,ut,V.hardBlank),se+=Ve}else se+=L(Be,ut,V.hardBlank)}k>=Ce?Oe="":Oe=zt.substring(k,k+Math.max(0,Ce-k)),ee[j]=K+se+Oe}return ee}function A(M){let z=[],k;for(k=0;k<M;k++)z[k]="";return z}const Z=function(M){return Math.max.apply(Math,M.map(function(z,k){return z.length}))};function ce(M,z,k){return M.reduce(function(V,j){return P(V,j.fig,j.overlap,k)},A(z))}function de(M,z,k){const V={};for(let j=M.length;--j;){let U=ce(M.slice(0,j),z,k);if(Z(U)<=k.width){V.outputFigText=U,j<M.length?V.chars=M.slice(j):V.chars=[];break}}return V}function Ee(M,z,k){let V,j,U=0,ee,Y,K,se=k.height,Oe=[],ke,Ce,De=[],zt,Tr,vi,Be,ut;for(Y=A(se),k.width>0&&k.whitespaceBreak&&(Ce={chars:[],overlap:U}),k.printDirection===1&&(M=M.split("").reverse().join("")),K=M.length,V=0;V<K;V++)if(zt=M.substring(V,V+1),Tr=zt.match(/\s/),j=z[zt.charCodeAt(0)],Be=null,j){if(k.fittingRules.hLayout!==0){for(U=1e4,ee=0;ee<k.height;ee++)U=Math.min(U,C(Y[ee],j[ee],k));U=U===1e4?0:U}if(k.width>0&&(k.whitespaceBreak?(vi=ce(Ce.chars.concat([{fig:j,overlap:U}]),se,k),Be=ce(De.concat([{fig:vi,overlap:Ce.overlap}]),se,k),ke=Z(Be)):(Be=P(Y,j,U,k),ke=Z(Be)),ke>=k.width&&V>0&&(k.whitespaceBreak?(Y=ce(De.slice(0,-1),se,k),De.length>1&&(Oe.push(Y),Y=A(se)),De=[]):(Oe.push(Y),Y=A(se)))),k.width>0&&k.whitespaceBreak&&((!Tr||V===K-1)&&Ce.chars.push({fig:j,overlap:U}),Tr||V===K-1)){for(ut=null;Be=ce(Ce.chars,se,k),ke=Z(Be),ke>=k.width;)ut=de(Ce.chars,se,k),Ce={chars:ut.chars},Oe.push(ut.outputFigText);ke>0&&(ut?De.push({fig:Be,overlap:1}):De.push({fig:Be,overlap:Ce.overlap})),Tr&&(De.push({fig:j,overlap:U}),Y=A(se)),V===K-1&&(Y=ce(De,se,k)),Ce={chars:[],overlap:U};continue}Y=P(Y,j,U,k)}return Z(Y)>0&&Oe.push(Y),k.showHardBlanks!==!0&&Oe.forEach(function(Ve){for(K=Ve.length,ee=0;ee<K;ee++)Ve[ee]=Ve[ee].replace(new RegExp("\\"+k.hardBlank,"g")," ")}),Oe}const Q=function(M,z){let k=["hLayout","hRule1","hRule2","hRule3","hRule4","hRule5","hRule6"],V={},j;if(M==="default")for(j=0;j<k.length;j++)V[k[j]]=z.fittingRules[k[j]];else if(M==="full")V={hLayout:0,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(M==="fitted")V={hLayout:1,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(M==="controlled smushing")V={hLayout:3,hRule1:!0,hRule2:!0,hRule3:!0,hRule4:!0,hRule5:!0,hRule6:!0};else if(M==="universal smushing")V={hLayout:2,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else return;return V},ne=function(M,z){let k=["vLayout","vRule1","vRule2","vRule3","vRule4","vRule5"],V={},j;if(M==="default")for(j=0;j<k.length;j++)V[k[j]]=z.fittingRules[k[j]];else if(M==="full")V={vLayout:0,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(M==="fitted")V={vLayout:1,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(M==="controlled smushing")V={vLayout:3,vRule1:!0,vRule2:!0,vRule3:!0,vRule4:!0,vRule5:!0};else if(M==="universal smushing")V={vLayout:2,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else return;return V},oe=function(M,z,k){k=k.replace(/\r\n/g,`
`).replace(/\r/g,`
`);let V=k.split(`
`),j=[],U,ee,Y;for(ee=V.length,U=0;U<ee;U++)j=j.concat(Ee(V[U],o[M],z));for(ee=j.length,Y=j[0],U=1;U<ee;U++)Y=I(Y,j[U],z);return Y?Y.join(`
`):""};function _e(M,z){let k=JSON.parse(JSON.stringify(M)),V,j;if(typeof z.horizontalLayout<"u"){V=Q(z.horizontalLayout,M);for(j in V)V.hasOwnProperty(j)&&(k.fittingRules[j]=V[j])}if(typeof z.verticalLayout<"u"){V=ne(z.verticalLayout,M);for(j in V)V.hasOwnProperty(j)&&(k.fittingRules[j]=V[j])}return k.printDirection=typeof z.printDirection<"u"?z.printDirection:M.printDirection,k.showHardBlanks=z.showHardBlanks||!1,k.width=z.width||-1,k.whitespaceBreak=z.whitespaceBreak||!1,k}const ae=function(M,z,k){return ae.text(M,z,k)};return ae.text=async function(M,z,k){let V="";return M=M+"",typeof arguments[1]=="function"&&(k=z,z={},z.font=a.font),typeof z=="string"?(V=z,z={}):(z=z||{},V=z.font||a.font),await new Promise((j,U)=>{ae.loadFont(V,function(ee,Y){if(ee){U(ee),k&&k(ee);return}const K=oe(V,_e(Y,z),M);j(K),k&&k(null,K)})})},ae.textSync=function(M,z){let k="";M=M+"",typeof z=="string"?(k=z,z={}):(z=z||{},k=z.font||a.font);var V=_e(ae.loadFontSync(k),z);return oe(k,V,M)},ae.metadata=function(M,z){M=M+"",ae.loadFont(M,function(k,V){if(k){z(k);return}z(null,V,o[M].comment)})},ae.defaults=function(M){if(typeof M=="object"&&M!==null)for(var z in M)M.hasOwnProperty(z)&&(a[z]=M[z]);return JSON.parse(JSON.stringify(a))},ae.parseFont=function(M,z){z=z.replace(/\r\n/g,`
`).replace(/\r/g,`
`),o[M]={};var k=z.split(`
`),V=k.splice(0,1)[0].split(" "),j=o[M],U={};if(U.hardBlank=V[0].substr(5,1),U.height=parseInt(V[1],10),U.baseline=parseInt(V[2],10),U.maxLength=parseInt(V[3],10),U.oldLayout=parseInt(V[4],10),U.numCommentLines=parseInt(V[5],10),U.printDirection=V.length>=6?parseInt(V[6],10):0,U.fullLayout=V.length>=7?parseInt(V[7],10):null,U.codeTagCount=V.length>=8?parseInt(V[8],10):null,U.fittingRules=l(U.oldLayout,U.fullLayout),j.options=U,U.hardBlank.length!==1||isNaN(U.height)||isNaN(U.baseline)||isNaN(U.maxLength)||isNaN(U.oldLayout)||isNaN(U.numCommentLines))throw new Error("FIGlet header contains invalid values.");let ee=[],Y;for(Y=32;Y<=126;Y++)ee.push(Y);if(ee=ee.concat(196,214,220,228,246,252,223),k.length<U.numCommentLines+U.height*ee.length)throw new Error("FIGlet file is missing data.");let K,se,Oe=!1;for(j.comment=k.splice(0,U.numCommentLines).join(`
`),j.numChars=0;k.length>0&&j.numChars<ee.length;){for(K=ee[j.numChars],j[K]=k.splice(0,U.height),Y=0;Y<U.height;Y++)typeof j[K][Y]>"u"?j[K][Y]="":(se=new RegExp("\\"+j[K][Y].substr(j[K][Y].length-1,1)+"+$"),j[K][Y]=j[K][Y].replace(se,""));j.numChars++}for(;k.length>0;){if(K=k.splice(0,1)[0].split(" ")[0],/^0[xX][0-9a-fA-F]+$/.test(K))K=parseInt(K,16);else if(/^0[0-7]+$/.test(K))K=parseInt(K,8);else if(/^[0-9]+$/.test(K))K=parseInt(K,10);else if(/^-0[xX][0-9a-fA-F]+$/.test(K))K=parseInt(K,16);else{if(K==="")break;console.log("Invalid data:"+K),Oe=!0;break}for(j[K]=k.splice(0,U.height),Y=0;Y<U.height;Y++)typeof j[K][Y]>"u"?j[K][Y]="":(se=new RegExp("\\"+j[K][Y].substr(j[K][Y].length-1,1)+"+$"),j[K][Y]=j[K][Y].replace(se,""));j.numChars++}if(Oe===!0)throw new Error("Error parsing data.");return U},ae.loadFont=function(M,z){if(o[M]){z(null,o[M].options);return}if(typeof fetch!="function")throw console.error("figlet.js requires the fetch API or a fetch polyfill such as https://cdnjs.com/libraries/fetch"),new Error("fetch is required for figlet.js to work.");fetch(a.fontPath+"/"+M+".flf").then(function(k){if(k.ok)return k.text();throw console.log("Unexpected response",k),new Error("Network response was not ok.")}).then(function(k){z(null,ae.parseFont(M,k))}).catch(z)},ae.loadFontSync=function(M){if(o[M])return o[M].options;throw new Error("synchronous font loading is not implemented for the browser")},ae.preloadFonts=function(M,z){let k=[];M.reduce(function(V,j){return V.then(function(){return fetch(a.fontPath+"/"+j+".flf").then(U=>U.text()).then(function(U){k.push(U)})})},Promise.resolve()).then(function(V){for(var j in M)M.hasOwnProperty(j)&&ae.parseFont(M[j],k[j]);z&&z()})},ae.figFonts=o,ae})();t.exports=e})(OE);var YA=OE.exports;const Xv=km(YA);var XA=Object.defineProperty,JA=Object.getOwnPropertyNames,Jv=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),ZA=(t,e)=>function(){return t&&(e=(0,t[JA(t)[0]])(t=0)),e},eC=(t,e)=>{for(var n in e)XA(t,n,{get:e[n],enumerable:!0})},Ni=(t,e,n)=>new Promise((r,i)=>{var s=l=>{try{a(n.next(l))}catch(u){i(u)}},o=l=>{try{a(n.throw(l))}catch(u){i(u)}},a=l=>l.done?r(l.value):Promise.resolve(l.value).then(s,o);a((n=n.apply(t,e)).next())}),tC=(t,e,n)=>(e=t[Jv("asyncIterator")])?e.call(t):(t=t[Jv("iterator")](),e={},n=(r,i)=>(i=t[r])&&(e[r]=s=>new Promise((o,a,l)=>(s=i.call(t,s),l=s.done,Promise.resolve(s.value).then(u=>o({value:u,done:l}),a)))),n("next"),n("return"),e),DE={};eC(DE,{default:()=>ME});var ME,NE=ZA({"src/fonts/Slant.js"(){ME=`flf2a$ 6 5 16 15 10 0 18319
Slant by Glenn Chappell 3/93 -- based on Standard
Includes ISO Latin-1
figlet release 2.1 -- 12 Aug 1994
Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.

Modified by Paul Burton <solution@earthlink.net> 12/96 to include new parameter
supported by FIGlet and FIGWin.  May also be slightly modified for better use
of new full-width/kern/smush alternatives, but default output is NOT changed.

     $$@
    $$ @
   $$  @
  $$   @
 $$    @
$$     @@
    __@
   / /@
  / / @
 /_/  @
(_)   @
      @@
 _ _ @
( | )@
|/|/ @
 $   @
$    @
     @@
     __ __ @
  __/ // /_@
 /_  _  __/@
/_  _  __/ @
 /_//_/    @
           @@
     __@
   _/ /@
  / __/@
 (_  ) @
/  _/  @
/_/    @@
   _   __@
  (_)_/_/@
   _/_/  @
 _/_/_   @
/_/ (_)  @
         @@
   ___   @
  ( _ )  @
 / __ \\/|@
/ /_/  < @
\\____/\\/ @
         @@
  _ @
 ( )@
 |/ @
 $  @
$   @
    @@
     __@
   _/_/@
  / /  @
 / /   @
/ /    @
|_|    @@
     _ @
    | |@
    / /@
   / / @
 _/_/  @
/_/    @@
       @
  __/|_@
 |    /@
/_ __| @
 |/    @
       @@
       @
    __ @
 __/ /_@
/_  __/@
 /_/   @
       @@
   @
   @
   @
 _ @
( )@
|/ @@
       @
       @
 ______@
/_____/@
  $    @
       @@
   @
   @
   @
 _ @
(_)@
   @@
       __@
     _/_/@
   _/_/  @
 _/_/    @
/_/      @
         @@
   ____ @
  / __ \\@
 / / / /@
/ /_/ / @
\\____/  @
        @@
   ___@
  <  /@
  / / @
 / /  @
/_/   @
      @@
   ___ @
  |__ \\@
  __/ /@
 / __/ @
/____/ @
       @@
   _____@
  |__  /@
   /_ < @
 ___/ / @
/____/  @
        @@
   __ __@
  / // /@
 / // /_@
/__  __/@
  /_/   @
        @@
    ______@
   / ____/@
  /___ \\  @
 ____/ /  @
/_____/   @
          @@
   _____@
  / ___/@
 / __ \\ @
/ /_/ / @
\\____/  @
        @@
 _____@
/__  /@
  / / @
 / /  @
/_/   @
      @@
   ____ @
  ( __ )@
 / __  |@
/ /_/ / @
\\____/  @
        @@
   ____ @
  / __ \\@
 / /_/ /@
 \\__, / @
/____/  @
        @@
     @
   _ @
  (_)@
 _   @
(_)  @
     @@
     @
   _ @
  (_)@
 _   @
( )  @
|/   @@
  __@
 / /@
/ / @
\\ \\ @
 \\_\\@
    @@
       @
  _____@
 /____/@
/____/ @
  $    @
       @@
__  @
\\ \\ @
 \\ \\@
 / /@
/_/ @
    @@
  ___ @
 /__ \\@
  / _/@
 /_/  @
(_)   @
      @@
   ______ @
  / ____ \\@
 / / __ \`/@
/ / /_/ / @
\\ \\__,_/  @
 \\____/   @@
    ___ @
   /   |@
  / /| |@
 / ___ |@
/_/  |_|@
        @@
    ____ @
   / __ )@
  / __  |@
 / /_/ / @
/_____/  @
         @@
   ______@
  / ____/@
 / /     @
/ /___   @
\\____/   @
         @@
    ____ @
   / __ \\@
  / / / /@
 / /_/ / @
/_____/  @
         @@
    ______@
   / ____/@
  / __/   @
 / /___   @
/_____/   @
          @@
    ______@
   / ____/@
  / /_    @
 / __/    @
/_/       @
          @@
   ______@
  / ____/@
 / / __  @
/ /_/ /  @
\\____/   @
         @@
    __  __@
   / / / /@
  / /_/ / @
 / __  /  @
/_/ /_/   @
          @@
    ____@
   /  _/@
   / /  @
 _/ /   @
/___/   @
        @@
       __@
      / /@
 __  / / @
/ /_/ /  @
\\____/   @
         @@
    __ __@
   / //_/@
  / ,<   @
 / /| |  @
/_/ |_|  @
         @@
    __ @
   / / @
  / /  @
 / /___@
/_____/@
       @@
    __  ___@
   /  |/  /@
  / /|_/ / @
 / /  / /  @
/_/  /_/   @
           @@
    _   __@
   / | / /@
  /  |/ / @
 / /|  /  @
/_/ |_/   @
          @@
   ____ @
  / __ \\@
 / / / /@
/ /_/ / @
\\____/  @
        @@
    ____ @
   / __ \\@
  / /_/ /@
 / ____/ @
/_/      @
         @@
   ____ @
  / __ \\@
 / / / /@
/ /_/ / @
\\___\\_\\ @
        @@
    ____ @
   / __ \\@
  / /_/ /@
 / _, _/ @
/_/ |_|  @
         @@
   _____@
  / ___/@
  \\__ \\ @
 ___/ / @
/____/  @
        @@
  ______@
 /_  __/@
  / /   @
 / /    @
/_/     @
        @@
   __  __@
  / / / /@
 / / / / @
/ /_/ /  @
\\____/   @
         @@
 _    __@
| |  / /@
| | / / @
| |/ /  @
|___/   @
        @@
 _       __@
| |     / /@
| | /| / / @
| |/ |/ /  @
|__/|__/   @
           @@
   _  __@
  | |/ /@
  |   / @
 /   |  @
/_/|_|  @
        @@
__  __@
\\ \\/ /@
 \\  / @
 / /  @
/_/   @
      @@
 _____@
/__  /@
  / / @
 / /__@
/____/@
      @@
     ___@
    / _/@
   / /  @
  / /   @
 / /    @
/__/    @@
__    @
\\ \\   @
 \\ \\  @
  \\ \\ @
   \\_\\@
      @@
     ___@
    /  /@
    / / @
   / /  @
 _/ /   @
/__/    @@
  //|@
 |/||@
  $  @
 $   @
$    @
     @@
       @
       @
       @
       @
 ______@
/_____/@@
  _ @
 ( )@
  V @
 $  @
$   @
    @@
        @
  ____ _@
 / __ \`/@
/ /_/ / @
\\__,_/  @
        @@
    __  @
   / /_ @
  / __ \\@
 / /_/ /@
/_.___/ @
        @@
       @
  _____@
 / ___/@
/ /__  @
\\___/  @
       @@
       __@
  ____/ /@
 / __  / @
/ /_/ /  @
\\__,_/   @
         @@
      @
  ___ @
 / _ \\@
/  __/@
\\___/ @
      @@
    ____@
   / __/@
  / /_  @
 / __/  @
/_/     @
        @@
         @
   ____ _@
  / __ \`/@
 / /_/ / @
 \\__, /  @
/____/   @@
    __  @
   / /_ @
  / __ \\@
 / / / /@
/_/ /_/ @
        @@
    _ @
   (_)@
  / / @
 / /  @
/_/   @
      @@
       _ @
      (_)@
     / / @
    / /  @
 __/ /   @
/___/    @@
    __  @
   / /__@
  / //_/@
 / ,<   @
/_/|_|  @
        @@
    __@
   / /@
  / / @
 / /  @
/_/   @
      @@
            @
   ____ ___ @
  / __ \`__ \\@
 / / / / / /@
/_/ /_/ /_/ @
            @@
        @
   ____ @
  / __ \\@
 / / / /@
/_/ /_/ @
        @@
       @
  ____ @
 / __ \\@
/ /_/ /@
\\____/ @
       @@
         @
    ____ @
   / __ \\@
  / /_/ /@
 / .___/ @
/_/      @@
        @
  ____ _@
 / __ \`/@
/ /_/ / @
\\__, /  @
  /_/   @@
        @
   _____@
  / ___/@
 / /    @
/_/     @
        @@
        @
   _____@
  / ___/@
 (__  ) @
/____/  @
        @@
   __ @
  / /_@
 / __/@
/ /_  @
\\__/  @
      @@
        @
  __  __@
 / / / /@
/ /_/ / @
\\__,_/  @
        @@
       @
 _   __@
| | / /@
| |/ / @
|___/  @
       @@
          @
 _      __@
| | /| / /@
| |/ |/ / @
|__/|__/  @
          @@
        @
   _  __@
  | |/_/@
 _>  <  @
/_/|_|  @
        @@
         @
   __  __@
  / / / /@
 / /_/ / @
 \\__, /  @
/____/   @@
     @
 ____@
/_  /@
 / /_@
/___/@
     @@
     __@
   _/_/@
 _/_/  @
< <    @
/ /    @
\\_\\    @@
     __@
    / /@
   / / @
  / /  @
 / /   @
/_/    @@
     _ @
    | |@
    / /@
   _>_>@
 _/_/  @
/_/    @@
  /\\//@
 //\\/ @
  $   @
 $    @
$     @
      @@
    _  _ @
   (_)(_)@
  / _ |  @
 / __ |  @
/_/ |_|  @
         @@
   _   _ @
  (_)_(_)@
 / __ \\  @
/ /_/ /  @
\\____/   @
         @@
   _   _ @
  (_) (_)@
 / / / / @
/ /_/ /  @
\\____/   @
         @@
   _   _ @
  (_)_(_)@
 / __ \`/ @
/ /_/ /  @
\\__,_/   @
         @@
   _   _ @
  (_)_(_)@
 / __ \\  @
/ /_/ /  @
\\____/   @
         @@
   _   _ @
  (_) (_)@
 / / / / @
/ /_/ /  @
\\__,_/   @
         @@
     ____ @
    / __ \\@
   / / / /@
  / /_| | @
 / //__/  @
/_/       @@
160  NO-BREAK SPACE
     $$@
    $$ @
   $$  @
  $$   @
 $$    @
$$     @@
161  INVERTED EXCLAMATION MARK
    _ @
   (_)@
  / / @
 / /  @
/_/   @
      @@
162  CENT SIGN
     __@
  __/ /@
 / ___/@
/ /__  @
\\  _/  @
/_/    @@
163  POUND SIGN
     ____ @
    / ,__\\@
 __/ /_   @
 _/ /___  @
(_,____/  @
          @@
164  CURRENCY SIGN
    /|___/|@
   | __  / @
  / /_/ /  @
 /___  |   @
|/   |/    @
           @@
165  YEN SIGN
    ____@
  _| / /@
 /_  __/@
/_  __/ @
 /_/    @
        @@
166  BROKEN BAR
     __@
    / /@
   /_/ @
  __   @
 / /   @
/_/    @@
167  SECTION SIGN
     __ @
   _/ _)@
  / | | @
 | || | @
 | |_/  @
(__/    @@
168  DIAERESIS
  _   _ @
 (_) (_)@
  $   $ @
 $   $  @
$   $   @
        @@
169  COPYRIGHT SIGN
    ______  @
   / _____\\ @
  / / ___/ |@
 / / /__  / @
|  \\___/ /  @
 \\______/   @@
170  FEMININE ORDINAL INDICATOR
   ___ _@
  / _ \`/@
 _\\_,_/ @
/____/  @
 $      @
        @@
171  LEFT-POINTING DOUBLE ANGLE QUOTATION MARK
  ____@
 / / /@
/ / / @
\\ \\ \\ @
 \\_\\_\\@
      @@
172  NOT SIGN
       @
 ______@
/___  /@
   /_/ @
 $     @
       @@
173  SOFT HYPHEN
      @
      @
 _____@
/____/@
  $   @
      @@
174  REGISTERED SIGN
    ______  @
   / ___  \\ @
  / / _ \\  |@
 / / , _/ / @
| /_/|_| /  @
 \\______/   @@
175  MACRON
 ______@
/_____/@
  $    @
 $     @
$      @
       @@
176  DEGREE SIGN
  ___ @
 / _ \\@
/ // /@
\\___/ @
 $    @
      @@
177  PLUS-MINUS SIGN
      __ @
   __/ /_@
  /_  __/@
 __/_/_  @
/_____/  @
         @@
178  SUPERSCRIPT TWO
   ___ @
  |_  |@
 / __/ @
/____/ @
 $     @
       @@
179  SUPERSCRIPT THREE
   ____@
  |_  /@
 _/_ < @
/____/ @
 $     @
       @@
180  ACUTE ACCENT
  __@
 /_/@
  $ @
 $  @
$   @
    @@
181  MICRO SIGN
          @
    __  __@
   / / / /@
  / /_/ / @
 / ._,_/  @
/_/       @@
182  PILCROW SIGN
  _______@
 / _    /@
/ (/ / / @
\\_  / /  @
 /_/_/   @
         @@
183  MIDDLE DOT
   @
 _ @
(_)@
 $ @
$  @
   @@
184  CEDILLA
   @
   @
   @
   @
 _ @
/_)@@
185  SUPERSCRIPT ONE
  ___@
 <  /@
 / / @
/_/  @
$    @
     @@
186  MASCULINE ORDINAL INDICATOR
   ___ @
  / _ \\@
 _\\___/@
/____/ @
 $     @
       @@
187  RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK
____  @
\\ \\ \\ @
 \\ \\ \\@
 / / /@
/_/_/ @
      @@
188  VULGAR FRACTION ONE QUARTER
  ___   __ @
 <  / _/_/ @
 / /_/_/___@
/_//_// / /@
 /_/ /_  _/@
      /_/  @@
189  VULGAR FRACTION ONE HALF
  ___   __   @
 <  / _/_/__ @
 / /_/_/|_  |@
/_//_/ / __/ @
 /_/  /____/ @
             @@
190  VULGAR FRACTION THREE QUARTERS
   ____    __ @
  |_  /  _/_/ @
 _/_ < _/_/___@
/____//_// / /@
    /_/ /_  _/@
         /_/  @@
191  INVERTED QUESTION MARK
    _ @
   (_)@
 _/ / @
/ _/_ @
\\___/ @
      @@
192  LATIN CAPITAL LETTER A WITH GRAVE
    __ @
   _\\_\\@
  / _ |@
 / __ |@
/_/ |_|@
       @@
193  LATIN CAPITAL LETTER A WITH ACUTE
     __@
   _/_/@
  / _ |@
 / __ |@
/_/ |_|@
       @@
194  LATIN CAPITAL LETTER A WITH CIRCUMFLEX
     //|@
   _|/||@
  / _ | @
 / __ | @
/_/ |_| @
        @@
195  LATIN CAPITAL LETTER A WITH TILDE
     /\\//@
   _//\\/ @
  / _ |  @
 / __ |  @
/_/ |_|  @
         @@
196  LATIN CAPITAL LETTER A WITH DIAERESIS
    _  _ @
   (_)(_)@
  / _ |  @
 / __ |  @
/_/ |_|  @
         @@
197  LATIN CAPITAL LETTER A WITH RING ABOVE
    (())@
   /   |@
  / /| |@
 / ___ |@
/_/  |_|@
        @@
198  LATIN CAPITAL LETTER AE
    __________@
   /     ____/@
  / /|  __/   @
 / __  /___   @
/_/ /_____/   @
              @@
199  LATIN CAPITAL LETTER C WITH CEDILLA
   ______@
  / ____/@
 / /     @
/ /___   @
\\____/   @
 /_)     @@
200  LATIN CAPITAL LETTER E WITH GRAVE
    __ @
   _\\_\\@
  / __/@
 / _/  @
/___/  @
       @@
201  LATIN CAPITAL LETTER E WITH ACUTE
     __@
   _/_/@
  / __/@
 / _/  @
/___/  @
       @@
202  LATIN CAPITAL LETTER E WITH CIRCUMFLEX
     //|@
   _|/||@
  / __/ @
 / _/   @
/___/   @
        @@
203  LATIN CAPITAL LETTER E WITH DIAERESIS
    _  _ @
   (_)(_)@
  / __/  @
 / _/    @
/___/    @
         @@
204  LATIN CAPITAL LETTER I WITH GRAVE
    __ @
   _\\_\\@
  /  _/@
 _/ /  @
/___/  @
       @@
205  LATIN CAPITAL LETTER I WITH ACUTE
     __@
   _/_/@
  /  _/@
 _/ /  @
/___/  @
       @@
206  LATIN CAPITAL LETTER I WITH CIRCUMFLEX
     //|@
   _|/||@
  /  _/ @
 _/ /   @
/___/   @
        @@
207  LATIN CAPITAL LETTER I WITH DIAERESIS
    _  _ @
   (_)(_)@
  /  _/  @
 _/ /    @
/___/    @
         @@
208  LATIN CAPITAL LETTER ETH
     ____ @
    / __ \\@
 __/ /_/ /@
/_  __/ / @
 /_____/  @
          @@
209  LATIN CAPITAL LETTER N WITH TILDE
     /\\//@
   _//\\/ @
  / |/ / @
 /    /  @
/_/|_/   @
         @@
210  LATIN CAPITAL LETTER O WITH GRAVE
    __ @
  __\\_\\@
 / __ \\@
/ /_/ /@
\\____/ @
       @@
211  LATIN CAPITAL LETTER O WITH ACUTE
     __@
  __/_/@
 / __ \\@
/ /_/ /@
\\____/ @
       @@
212  LATIN CAPITAL LETTER O WITH CIRCUMFLEX
    //|@
  _|/||@
 / __ \\@
/ /_/ /@
\\____/ @
       @@
213  LATIN CAPITAL LETTER O WITH TILDE
    /\\//@
  _//\\/ @
 / __ \\ @
/ /_/ / @
\\____/  @
        @@
214  LATIN CAPITAL LETTER O WITH DIAERESIS
   _   _ @
  (_)_(_)@
 / __ \\  @
/ /_/ /  @
\\____/   @
         @@
215  MULTIPLICATION SIGN
     @
     @
 /|/|@
 > < @
|/|/ @
     @@
216  LATIN CAPITAL LETTER O WITH STROKE
   _____ @
  / _// \\@
 / //// /@
/ //// / @
\\_//__/  @
         @@
217  LATIN CAPITAL LETTER U WITH GRAVE
    __  @
  __\\_\\_@
 / / / /@
/ /_/ / @
\\____/  @
        @@
218  LATIN CAPITAL LETTER U WITH ACUTE
     __ @
  __/_/_@
 / / / /@
/ /_/ / @
\\____/  @
        @@
219  LATIN CAPITAL LETTER U WITH CIRCUMFLEX
    //| @
  _|/||_@
 / / / /@
/ /_/ / @
\\____/  @
        @@
220  LATIN CAPITAL LETTER U WITH DIAERESIS
   _   _ @
  (_) (_)@
 / / / / @
/ /_/ /  @
\\____/   @
         @@
221  LATIN CAPITAL LETTER Y WITH ACUTE
   __ @
__/_/_@
\\ \\/ /@
 \\  / @
 /_/  @
      @@
222  LATIN CAPITAL LETTER THORN
    __  @
   / /_ @
  / __ \\@
 / ____/@
/_/     @
        @@
223  LATIN SMALL LETTER SHARP S
     ____ @
    / __ \\@
   / / / /@
  / /_| | @
 / //__/  @
/_/       @@
224  LATIN SMALL LETTER A WITH GRAVE
    __  @
  __\\_\\_@
 / __ \`/@
/ /_/ / @
\\__,_/  @
        @@
225  LATIN SMALL LETTER A WITH ACUTE
     __ @
  __/_/_@
 / __ \`/@
/ /_/ / @
\\__,_/  @
        @@
226  LATIN SMALL LETTER A WITH CIRCUMFLEX
    //| @
  _|/||_@
 / __ \`/@
/ /_/ / @
\\__,_/  @
        @@
227  LATIN SMALL LETTER A WITH TILDE
    /\\//@
  _//\\/_@
 / __ \`/@
/ /_/ / @
\\__,_/  @
        @@
228  LATIN SMALL LETTER A WITH DIAERESIS
   _   _ @
  (_)_(_)@
 / __ \`/ @
/ /_/ /  @
\\__,_/   @
         @@
229  LATIN SMALL LETTER A WITH RING ABOVE
     __ @
  __(())@
 / __ \`/@
/ /_/ / @
\\__,_/  @
        @@
230  LATIN SMALL LETTER AE
           @
  ____ ___ @
 / __ \` _ \\@
/ /_/   __/@
\\__,_____/ @
           @@
231  LATIN SMALL LETTER C WITH CEDILLA
       @
  _____@
 / ___/@
/ /__  @
\\___/  @
/_)    @@
232  LATIN SMALL LETTER E WITH GRAVE
   __ @
  _\\_\\@
 / _ \\@
/  __/@
\\___/ @
      @@
233  LATIN SMALL LETTER E WITH ACUTE
    __@
  _/_/@
 / _ \\@
/  __/@
\\___/ @
      @@
234  LATIN SMALL LETTER E WITH CIRCUMFLEX
    //|@
  _|/||@
 / _ \\ @
/  __/ @
\\___/  @
       @@
235  LATIN SMALL LETTER E WITH DIAERESIS
   _  _ @
  (_)(_)@
 / _ \\  @
/  __/  @
\\___/   @
        @@
236  LATIN SMALL LETTER I WITH GRAVE
   __ @
   \\_\\@
  / / @
 / /  @
/_/   @
      @@
237  LATIN SMALL LETTER I WITH ACUTE
    __@
   /_/@
  / / @
 / /  @
/_/   @
      @@
238  LATIN SMALL LETTER I WITH CIRCUMFLEX
    //|@
   |/||@
  / /  @
 / /   @
/_/    @
       @@
239  LATIN SMALL LETTER I WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / /   @
 / /    @
/_/     @
        @@
240  LATIN SMALL LETTER ETH
     || @
    =||=@
 ___ || @
/ __\` | @
\\____/  @
        @@
241  LATIN SMALL LETTER N WITH TILDE
     /\\//@
   _//\\/ @
  / __ \\ @
 / / / / @
/_/ /_/  @
         @@
242  LATIN SMALL LETTER O WITH GRAVE
    __ @
  __\\_\\@
 / __ \\@
/ /_/ /@
\\____/ @
       @@
243  LATIN SMALL LETTER O WITH ACUTE
     __@
  __/_/@
 / __ \\@
/ /_/ /@
\\____/ @
       @@
244  LATIN SMALL LETTER O WITH CIRCUMFLEX
    //|@
  _|/||@
 / __ \\@
/ /_/ /@
\\____/ @
       @@
245  LATIN SMALL LETTER O WITH TILDE
    /\\//@
  _//\\/ @
 / __ \\ @
/ /_/ / @
\\____/  @
        @@
246  LATIN SMALL LETTER O WITH DIAERESIS
   _   _ @
  (_)_(_)@
 / __ \\  @
/ /_/ /  @
\\____/   @
         @@
247  DIVISION SIGN
       @
    _  @
 __(_)_@
/_____/@
 (_)   @
       @@
248  LATIN SMALL LETTER O WITH STROKE
        @
  _____ @
 / _// \\@
/ //// /@
\\_//__/ @
        @@
249  LATIN SMALL LETTER U WITH GRAVE
    __  @
  __\\_\\_@
 / / / /@
/ /_/ / @
\\__,_/  @
        @@
250  LATIN SMALL LETTER U WITH ACUTE
     __ @
  __/_/_@
 / / / /@
/ /_/ / @
\\__,_/  @
        @@
251  LATIN SMALL LETTER U WITH CIRCUMFLEX
    //| @
  _|/||_@
 / / / /@
/ /_/ / @
\\__,_/  @
        @@
252  LATIN SMALL LETTER U WITH DIAERESIS
   _   _ @
  (_) (_)@
 / / / / @
/ /_/ /  @
\\__,_/   @
         @@
253  LATIN SMALL LETTER Y WITH ACUTE
      __ @
   __/_/_@
  / / / /@
 / /_/ / @
 \\__, /  @
/____/   @@
254  LATIN SMALL LETTER THORN
     __  @
    / /_ @
   / __ \\@
  / /_/ /@
 / .___/ @
/_/      @@
255  LATIN SMALL LETTER Y WITH DIAERESIS
    _   _ @
   (_) (_)@
  / / / / @
 / /_/ /  @
 \\__, /   @
/____/    @@
`}});function cu(t,e){return t.replace(/.(?=.)/g,`$&${" ".repeat(e)}`)}function od(t,e,n){return t.substring(0,e)+n+t.substring(e+n.length)}function VE(t){return t[Math.floor(Math.random()*t.length)]}function cs(t,e){return t.split("").map(n=>/\s/.test(n)?n:VE(e)).join("")}function nC({asciiText:t,animationDirection:e,animationCharacters:n,animationCharacterSpacing:r}){return t.reduce((i,s,o)=>{if(o===0)return i;const a=i!=null&&i[i.length-1]?[...i[i.length-1]]:void 0;if(!a)return i;const l=/\S/.test(a[o-1]),u=a.length-o,h=/\S/.test(a[u]);let f=[...a];if(l&&(e==="up"||e==="vertical")&&(a!=null&&a[o]&&(a[o]=cs(a[o],cu(n,r))),a!=null&&a[o-1]&&(a[o-1]=" ".repeat(s.length)),f[o]&&(f[o]=cs(f[o],n))),h&&(e==="down"||e==="vertical")&&(a!=null&&a[u]&&(a[u]=cs(a[u],cu(n,r))),a!=null&&a[u+1]&&(a[u+1]=" ".repeat(s.length)),f!=null&&f[u]&&(f[u]=cs(f[u],n))),(l||h)&&i.push(f,a),o===t.length-1&&e==="up"){const d=[...a];d[d.length-1]=" ".repeat(d[d.length-1].length),i.push(d)}if(o===t.length-1&&e==="down"){const d=[...a];d[f.length-o]=" ".repeat(d[f.length-o].length),i.push(d);const m=[...d];if(!/\S/.test(m[0]))return i;m[0]=cs(m[0],cu(n,r)),i.push(m);const y=[...m];if(!/\S/.test(y[0]))return i;y[0]=cs(y[0],cu(n,r)),i.push(y);const E=[...y];if(!/\S/.test(E[0]))return i;E[0]=" ".repeat(E[0].length),i.push(E)}return t.length-1,i},[[...t]])}var rC=1;function iC({asciiText:t,animationDirection:e,animationCharacters:n}){const r=[[...structuredClone(t)]],i=t[0].length/(e==="left"||e==="right"?1:2);for(let s=0;s<i;s++){if(s===0){r.push(t);continue}const o=r[s].map((a,l,u)=>{const h=a.search(/\S/),f=a.search(/\S(?!.*\S)/);if(h===-1||f===-1)return a;const d=l>rC?-1:1;if((e==="left"||e==="horizontal")&&(a=od(a,h," ")),(e==="right"||e==="horizontal")&&(a=od(a,f," ")),f-h<=2)return a;if(e==="left"||e==="horizontal"){const m=VE(n);u[l+d]=od(u[l+d],h+1,m)}return a});r.push(o)}return r}function sC(t){return Ni(this,arguments,function*({asciiText:e,animationDirection:n,animationCharacters:r,animationCharacterSpacing:i,fadeInOnly:s=!1,fadeOutOnly:o=!1}){try{if(n==="down"||n==="up"||n==="vertical"){const h=nC({asciiText:e,animationDirection:n,animationCharacters:r,animationCharacterSpacing:i});if(o)return h;const f=structuredClone(h).reverse();return s?f:f.concat(h)}const a=iC({asciiText:e,animationDirection:n,animationCharacters:r,animationCharacterSpacing:i});if(s)return structuredClone(a).reverse();const l=structuredClone(a).reverse();return o?a:l.concat(a)}catch(a){throw a+" @createFrames"}})}var Zv="Slant";function oC(t,e){return Ni(this,null,function*(){const n=e?"":(yield Promise.resolve().then(()=>(NE(),DE))).default;Xv.parseFont(Zv,e||n);const r=u=>Ni(this,null,function*(){return yield new Promise((h,f)=>{Xv.text(u,{font:Zv},(d,m)=>{d&&f("Failed to load font"),m?h(m.split(`
`)):f("No ASCII text generated")})})}),i=[];try{for(var s=tC(Array.isArray(t)?t:[t]),o,a,l;o=!(a=yield s.next()).done;o=!1){const u=a.value,h=yield r(u);i.push(h)}}catch(u){l=[u]}finally{try{o&&(a=s.return)&&(yield a.call(s))}finally{if(l)throw l[0]}}return i})}var aC="/*+#";function lC({animationCharacters:t=aC,animationCharacterSpacing:e=1,animationDelay:n=500,animationDirection:r="horizontal",animationInterval:i=1e3,animationIteration:s=1,animationLoop:o=!0,animationSpeed:a=20,fadeInOnly:l=!1,fadeOutOnly:u=!1,font:h,isAnimated:f=!0,isPaused:d=!1,text:m=["React","ASCII","Text"]}){const _=F.useRef(),y=F.useRef({animationFrameId:0,animationIndex:0,animationIterationCount:1,animations:null,frameId:0,frameIndex:0,isPaused:!1,isTimeout:!1,previousTimeStamp:0,timeoutId:0}),E=v=>Ni(this,null,function*(){const{animations:b,isPaused:L,isTimeout:O,previousTimeStamp:D}=y.current;if(!_.current||!(b!=null&&b.length)||L||O)return;if(v-D>a){const{animationIndex:S,animationIterationCount:T,animations:I,frameId:C,frameIndex:P}=y.current,A=I==null?void 0:I[S];if(!A||O)return;const Z=P===0,ce=P===A.length-1,de=S===I.length-1;if(_.current.textContent=A[P].join(`
`),!o&&T===s&&de&&ce){cancelAnimationFrame(C);return}y.current.previousTimeStamp=v;const Ee=P===Math.floor(A.length/2),Q=l||u,ne=oe=>Ni(this,null,function*(){yield new Promise(_e=>{y.current.isTimeout=!0,setTimeout(_e,oe)}),y.current.isTimeout=!1});Q&&ce&&n&&(yield ne(n)),Q&&Z&&i&&(yield ne(i)),!Q&&Ee&&n&&(yield ne(n)),!Q&&ce&&i&&(yield ne(i)),ce?(y.current.frameIndex=0,y.current.animationIndex++,y.current.animationIterationCount++):y.current.frameIndex++,o&&y.current.animationIndex===I.length&&(y.current.animationIndex=0)}y.current.frameId=requestAnimationFrame(E)});F.useEffect(()=>{d?(y.current.isPaused=!0,cancelAnimationFrame(y.current.frameId)):(y.current.isPaused=!1,y.current.frameId=requestAnimationFrame(E))},[d,y]);const w=F.useCallback(()=>Ni(this,null,function*(){try{const v=yield oC(m,h);!f&&_.current?_.current.textContent=v[0].join(`
`):v.length===(Array.isArray(m)?m:[m]).length&&(y.current.animations=yield Promise.all([...v.map(b=>Ni(this,null,function*(){return yield sC({asciiText:b,animationDirection:r,animationCharacters:t,animationCharacterSpacing:e,fadeInOnly:l,fadeOutOnly:u})}))]),requestAnimationFrame(E))}catch(v){console.error({error:v})}}),[]);return F.useEffect(()=>{w()},[m,w]),_}var uC=`flf2a$ 10 5 10 0 3 0


Figlet conversion by patorjk, April 17, 2008
$ $@
$ $@
$ $@
$ $@
$ $@
$ $@
$ $@
$ $@
$ $@
$ $@@
$▐██▌$@
$▐██▌$@
$▐██▌$@
$▓██▒$@
$▒▄▄ $@
$░▀▀▒$@
$░  ░$@
$   ░$@
$░   $@
$    $@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
$   $@
$   $@
$   $@
$   $@
$██▓$@
$▒▓▒$@
$░▒ $@
$░  $@
$ ░ $@
$ ░ $@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
 ▄▄▄      @
▒████▄    @
▒██  ▀█▄  @
░██▄▄▄▄██ @
 ▓█   ▓██▒@
 ▒▒   ▓▒█░@
  ▒   ▒▒ ░@
  ░   ▒   @
      ░  ░@
          @@
 ▄▄▄▄   @
▓█████▄ @
▒██▒ ▄██@
▒██░█▀  @
░▓█  ▀█▓@
░▒▓███▀▒@
▒░▒   ░ @
 ░    ░ @
 ░      @
      ░ @@
 ▄████▄  @
▒██▀ ▀█  @
▒▓█    ▄ @
▒▓▓▄ ▄██▒@
▒ ▓███▀ ░@
░ ░▒ ▒  ░@
  ░  ▒   @
░        @
░ ░      @
░        @@
▓█████▄ @
▒██▀ ██▌@
░██   █▌@
░▓█▄   ▌@
░▒████▓ @
 ▒▒▓  ▒ @
 ░ ▒  ▒ @
 ░ ░  ░ @
   ░    @
 ░      @@
▓█████ @
▓█   ▀ @
▒███   @
▒▓█  ▄ @
░▒████▒@
░░ ▒░ ░@
 ░ ░  ░@
   ░   @
   ░  ░@
       @@
  █████▒@
▓██   ▒ @
▒████ ░ @
░▓█▒  ░ @
░▒█░    @
 ▒ ░    @
 ░      @
 ░ ░    @
        @
        @@
  ▄████ @
 ██▒ ▀█▒@
▒██░▄▄▄░@
░▓█  ██▓@
░▒▓███▀▒@
 ░▒   ▒ @
  ░   ░ @
░ ░   ░ @
      ░ @
        @@
 ██░ ██ @
▓██░ ██▒@
▒██▀▀██░@
░▓█ ░██ @
░▓█▒░██▓@
 ▒ ░░▒░▒@
 ▒ ░▒░ ░@
 ░  ░░ ░@
 ░  ░  ░@
        @@
 ██▓@
▓██▒@
▒██▒@
░██░@
░██░@
░▓  @
 ▒ ░@
 ▒ ░@
 ░  @
    @@
 ▄▄▄██▀▀▀@
   ▒██   @
   ░██   @
▓██▄██▓  @
 ▓███▒   @
 ▒▓▒▒░   @
 ▒ ░▒░   @
 ░ ░ ░   @
 ░   ░   @
         @@
 ██ ▄█▀@
 ██▄█▒ @
▓███▄░ @
▓██ █▄ @
▒██▒ █▄@
▒ ▒▒ ▓▒@
░ ░▒ ▒░@
░ ░░ ░ @
░  ░   @
       @@
 ██▓    @
▓██▒    @
▒██░    @
▒██░    @
░██████▒@
░ ▒░▓  ░@
░ ░ ▒  ░@
  ░ ░   @
    ░  ░@
        @@
 ███▄ ▄███▓@
▓██▒▀█▀ ██▒@
▓██    ▓██░@
▒██    ▒██ @
▒██▒   ░██▒@
░ ▒░   ░  ░@
░  ░      ░@
░      ░   @
       ░   @
           @@
 ███▄    █ @
 ██ ▀█   █ @
▓██  ▀█ ██▒@
▓██▒  ▐▌██▒@
▒██░   ▓██░@
░ ▒░   ▒ ▒ @
░ ░░   ░ ▒░@
   ░   ░ ░ @
         ░ @
           @@
 ▒█████  @
▒██▒  ██▒@
▒██░  ██▒@
▒██   ██░@
░ ████▓▒░@
░ ▒░▒░▒░ @
  ░ ▒ ▒░ @
░ ░ ░ ▒  @
    ░ ░  @
         @@
 ██▓███  @
▓██░  ██▒@
▓██░ ██▓▒@
▒██▄█▓▒ ▒@
▒██▒ ░  ░@
▒▓▒░ ░  ░@
░▒ ░     @
░░       @
         @
         @@
  █████  @
▒██▓  ██▒@
▒██▒  ██░@
░██  █▀ ░@
░▒███▒█▄ @
░░ ▒▒░ ▒ @
 ░ ▒░  ░ @
   ░   ░ @
    ░    @
         @@
 ██▀███  @
▓██ ▒ ██▒@
▓██ ░▄█ ▒@
▒██▀▀█▄  @
░██▓ ▒██▒@
░ ▒▓ ░▒▓░@
  ░▒ ░ ▒░@
  ░░   ░ @
   ░     @
         @@
  ██████ @
▒██    ▒ @
░ ▓██▄   @
  ▒   ██▒@
▒██████▒▒@
▒ ▒▓▒ ▒ ░@
░ ░▒  ░ ░@
░  ░  ░  @
      ░  @
         @@
▄▄▄█████▓@
▓  ██▒ ▓▒@
▒ ▓██░ ▒░@
░ ▓██▓ ░ @
  ▒██▒ ░ @
  ▒ ░░   @
    ░    @
  ░      @
         @
         @@
 █    ██ @
 ██  ▓██▒@
▓██  ▒██░@
▓▓█  ░██░@
▒▒█████▓ @
░▒▓▒ ▒ ▒ @
░░▒░ ░ ░ @
 ░░░ ░ ░ @
   ░     @
         @@
 ██▒   █▓@
▓██░   █▒@
 ▓██  █▒░@
  ▒██ █░░@
   ▒▀█░  @
   ░ ▐░  @
   ░ ░░  @
     ░░  @
      ░  @
     ░   @@
 █     █░@
▓█░ █ ░█░@
▒█░ █ ░█ @
░█░ █ ░█ @
░░██▒██▓ @
░ ▓░▒ ▒  @
  ▒ ░ ░  @
  ░   ░  @
    ░    @
         @@
▒██   ██▒@
▒▒ █ █ ▒░@
░░  █   ░@
 ░ █ █ ▒ @
▒██▒ ▒██▒@
▒▒ ░ ░▓ ░@
░░   ░▒ ░@
 ░    ░  @
 ░    ░  @
         @@
▓██   ██▓@
 ▒██  ██▒@
  ▒██ ██░@
  ░ ▐██▓░@
  ░ ██▒▓░@
   ██▒▒▒ @
 ▓██ ░▒░ @
 ▒ ▒ ░░  @
 ░ ░     @
 ░ ░     @@
▒███████▒@
▒ ▒ ▒ ▄▀░@
░ ▒ ▄▀▒░ @
  ▄▀▒   ░@
▒███████▒@
░▒▒ ▓░▒░▒@
░░▒ ▒ ░ ▒@
░ ░ ░ ░ ░@
  ░ ░    @
░        @@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
 ▄▄▄      @
▒████▄    @
▒██  ▀█▄  @
░██▄▄▄▄██ @
 ▓█   ▓██▒@
 ▒▒   ▓▒█░@
  ▒   ▒▒ ░@
  ░   ▒   @
      ░  ░@
          @@
 ▄▄▄▄   @
▓█████▄ @
▒██▒ ▄██@
▒██░█▀  @
░▓█  ▀█▓@
░▒▓███▀▒@
▒░▒   ░ @
 ░    ░ @
 ░      @
      ░ @@
 ▄████▄  @
▒██▀ ▀█  @
▒▓█    ▄ @
▒▓▓▄ ▄██▒@
▒ ▓███▀ ░@
░ ░▒ ▒  ░@
  ░  ▒   @
░        @
░ ░      @
░        @@
▓█████▄ @
▒██▀ ██▌@
░██   █▌@
░▓█▄   ▌@
░▒████▓ @
 ▒▒▓  ▒ @
 ░ ▒  ▒ @
 ░ ░  ░ @
   ░    @
 ░      @@
▓█████ @
▓█   ▀ @
▒███   @
▒▓█  ▄ @
░▒████▒@
░░ ▒░ ░@
 ░ ░  ░@
   ░   @
   ░  ░@
       @@
  █████▒@
▓██   ▒ @
▒████ ░ @
░▓█▒  ░ @
░▒█░    @
 ▒ ░    @
 ░      @
 ░ ░    @
        @
        @@
  ▄████ @
 ██▒ ▀█▒@
▒██░▄▄▄░@
░▓█  ██▓@
░▒▓███▀▒@
 ░▒   ▒ @
  ░   ░ @
░ ░   ░ @
      ░ @
        @@
 ██░ ██ @
▓██░ ██▒@
▒██▀▀██░@
░▓█ ░██ @
░▓█▒░██▓@
 ▒ ░░▒░▒@
 ▒ ░▒░ ░@
 ░  ░░ ░@
 ░  ░  ░@
        @@
 ██▓@
▓██▒@
▒██▒@
░██░@
░██░@
░▓  @
 ▒ ░@
 ▒ ░@
 ░  @
    @@
 ▄▄▄██▀▀▀@
   ▒██   @
   ░██   @
▓██▄██▓  @
 ▓███▒   @
 ▒▓▒▒░   @
 ▒ ░▒░   @
 ░ ░ ░   @
 ░   ░   @
         @@
 ██ ▄█▀@
 ██▄█▒ @
▓███▄░ @
▓██ █▄ @
▒██▒ █▄@
▒ ▒▒ ▓▒@
░ ░▒ ▒░@
░ ░░ ░ @
░  ░   @
       @@
 ██▓    @
▓██▒    @
▒██░    @
▒██░    @
░██████▒@
░ ▒░▓  ░@
░ ░ ▒  ░@
  ░ ░   @
    ░  ░@
        @@
 ███▄ ▄███▓@
▓██▒▀█▀ ██▒@
▓██    ▓██░@
▒██    ▒██ @
▒██▒   ░██▒@
░ ▒░   ░  ░@
░  ░      ░@
░      ░   @
       ░   @
           @@
 ███▄    █ @
 ██ ▀█   █ @
▓██  ▀█ ██▒@
▓██▒  ▐▌██▒@
▒██░   ▓██░@
░ ▒░   ▒ ▒ @
░ ░░   ░ ▒░@
   ░   ░ ░ @
         ░ @
           @@
 ▒█████  @
▒██▒  ██▒@
▒██░  ██▒@
▒██   ██░@
░ ████▓▒░@
░ ▒░▒░▒░ @
  ░ ▒ ▒░ @
░ ░ ░ ▒  @
    ░ ░  @
         @@
 ██▓███  @
▓██░  ██▒@
▓██░ ██▓▒@
▒██▄█▓▒ ▒@
▒██▒ ░  ░@
▒▓▒░ ░  ░@
░▒ ░     @
░░       @
         @
         @@
  █████  @
▒██▓  ██▒@
▒██▒  ██░@
░██  █▀ ░@
░▒███▒█▄ @
░░ ▒▒░ ▒ @
 ░ ▒░  ░ @
   ░   ░ @
    ░    @
         @@
 ██▀███  @
▓██ ▒ ██▒@
▓██ ░▄█ ▒@
▒██▀▀█▄  @
░██▓ ▒██▒@
░ ▒▓ ░▒▓░@
  ░▒ ░ ▒░@
  ░░   ░ @
   ░     @
         @@
  ██████ @
▒██    ▒ @
░ ▓██▄   @
  ▒   ██▒@
▒██████▒▒@
▒ ▒▓▒ ▒ ░@
░ ░▒  ░ ░@
░  ░  ░  @
      ░  @
         @@
▄▄▄█████▓@
▓  ██▒ ▓▒@
▒ ▓██░ ▒░@
░ ▓██▓ ░ @
  ▒██▒ ░ @
  ▒ ░░   @
    ░    @
  ░      @
         @
         @@
 █    ██ @
 ██  ▓██▒@
▓██  ▒██░@
▓▓█  ░██░@
▒▒█████▓ @
░▒▓▒ ▒ ▒ @
░░▒░ ░ ░ @
 ░░░ ░ ░ @
   ░     @
         @@
 ██▒   █▓@
▓██░   █▒@
 ▓██  █▒░@
  ▒██ █░░@
   ▒▀█░  @
   ░ ▐░  @
   ░ ░░  @
     ░░  @
      ░  @
     ░   @@
 █     █░@
▓█░ █ ░█░@
▒█░ █ ░█ @
░█░ █ ░█ @
░░██▒██▓ @
░ ▓░▒ ▒  @
  ▒ ░ ░  @
  ░   ░  @
    ░    @
         @@
▒██   ██▒@
▒▒ █ █ ▒░@
░░  █   ░@
 ░ █ █ ▒ @
▒██▒ ▒██▒@
▒▒ ░ ░▓ ░@
░░   ░▒ ░@
 ░    ░  @
 ░    ░  @
         @@
▓██   ██▓@
 ▒██  ██▒@
  ▒██ ██░@
  ░ ▐██▓░@
  ░ ██▒▓░@
   ██▒▒▒ @
 ▓██ ░▒░ @
 ▒ ▒ ░░  @
 ░ ░     @
 ░ ░     @@
▒███████▒@
▒ ▒ ▒ ▄▀░@
░ ▒ ▄▀▒░ @
  ▄▀▒   ░@
▒███████▒@
░▒▒ ▓░▒░▒@
░░▒ ▒ ░ ▒@
░ ░ ░ ░ ░@
  ░ ░    @
░        @@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@`;NE();function FE(t,e){return function(){return t.apply(e,arguments)}}const{toString:cC}=Object.prototype,{getPrototypeOf:Dg}=Object,Vh=(t=>e=>{const n=cC.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),zn=t=>(t=t.toLowerCase(),e=>Vh(e)===t),Fh=t=>e=>typeof e===t,{isArray:_o}=Array,Ga=Fh("undefined");function hC(t){return t!==null&&!Ga(t)&&t.constructor!==null&&!Ga(t.constructor)&&xn(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const zE=zn("ArrayBuffer");function fC(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&zE(t.buffer),e}const dC=Fh("string"),xn=Fh("function"),jE=Fh("number"),zh=t=>t!==null&&typeof t=="object",pC=t=>t===!0||t===!1,Qu=t=>{if(Vh(t)!=="object")return!1;const e=Dg(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},mC=zn("Date"),gC=zn("File"),_C=zn("Blob"),yC=zn("FileList"),vC=t=>zh(t)&&xn(t.pipe),wC=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||xn(t.append)&&((e=Vh(t))==="formdata"||e==="object"&&xn(t.toString)&&t.toString()==="[object FormData]"))},EC=zn("URLSearchParams"),[SC,TC,bC,xC]=["ReadableStream","Request","Response","Headers"].map(zn),IC=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function _l(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,i;if(typeof t!="object"&&(t=[t]),_o(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let a;for(r=0;r<o;r++)a=s[r],e.call(null,t[a],a,t)}}function BE(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,i;for(;r-- >0;)if(i=n[r],e===i.toLowerCase())return i;return null}const $E=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,UE=t=>!Ga(t)&&t!==$E;function Mp(){const{caseless:t}=UE(this)&&this||{},e={},n=(r,i)=>{const s=t&&BE(e,i)||i;Qu(e[s])&&Qu(r)?e[s]=Mp(e[s],r):Qu(r)?e[s]=Mp({},r):_o(r)?e[s]=r.slice():e[s]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&_l(arguments[r],n);return e}const RC=(t,e,n,{allOwnKeys:r}={})=>(_l(e,(i,s)=>{n&&xn(i)?t[s]=FE(i,n):t[s]=i},{allOwnKeys:r}),t),AC=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),CC=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},PC=(t,e,n,r)=>{let i,s,o;const a={};if(e=e||{},t==null)return e;do{for(i=Object.getOwnPropertyNames(t),s=i.length;s-- >0;)o=i[s],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Dg(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},kC=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},LC=t=>{if(!t)return null;if(_o(t))return t;let e=t.length;if(!jE(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},OC=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Dg(Uint8Array)),DC=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let i;for(;(i=r.next())&&!i.done;){const s=i.value;e.call(t,s[0],s[1])}},MC=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},NC=zn("HTMLFormElement"),VC=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),e2=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),FC=zn("RegExp"),HE=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};_l(n,(i,s)=>{let o;(o=e(i,s,t))!==!1&&(r[s]=o||i)}),Object.defineProperties(t,r)},zC=t=>{HE(t,(e,n)=>{if(xn(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(xn(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},jC=(t,e)=>{const n={},r=i=>{i.forEach(s=>{n[s]=!0})};return _o(t)?r(t):r(String(t).split(e)),n},BC=()=>{},$C=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e,ad="abcdefghijklmnopqrstuvwxyz",t2="0123456789",WE={DIGIT:t2,ALPHA:ad,ALPHA_DIGIT:ad+ad.toUpperCase()+t2},UC=(t=16,e=WE.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function HC(t){return!!(t&&xn(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const WC=t=>{const e=new Array(10),n=(r,i)=>{if(zh(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[i]=r;const s=_o(r)?[]:{};return _l(r,(o,a)=>{const l=n(o,i+1);!Ga(l)&&(s[a]=l)}),e[i]=void 0,s}}return r};return n(t,0)},qC=zn("AsyncFunction"),KC=t=>t&&(zh(t)||xn(t))&&xn(t.then)&&xn(t.catch),$={isArray:_o,isArrayBuffer:zE,isBuffer:hC,isFormData:wC,isArrayBufferView:fC,isString:dC,isNumber:jE,isBoolean:pC,isObject:zh,isPlainObject:Qu,isReadableStream:SC,isRequest:TC,isResponse:bC,isHeaders:xC,isUndefined:Ga,isDate:mC,isFile:gC,isBlob:_C,isRegExp:FC,isFunction:xn,isStream:vC,isURLSearchParams:EC,isTypedArray:OC,isFileList:yC,forEach:_l,merge:Mp,extend:RC,trim:IC,stripBOM:AC,inherits:CC,toFlatObject:PC,kindOf:Vh,kindOfTest:zn,endsWith:kC,toArray:LC,forEachEntry:DC,matchAll:MC,isHTMLForm:NC,hasOwnProperty:e2,hasOwnProp:e2,reduceDescriptors:HE,freezeMethods:zC,toObjectSet:jC,toCamelCase:VC,noop:BC,toFiniteNumber:$C,findKey:BE,global:$E,isContextDefined:UE,ALPHABET:WE,generateString:UC,isSpecCompliantForm:HC,toJSONObject:WC,isAsyncFn:qC,isThenable:KC};function ge(t,e,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}$.inherits(ge,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:$.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const qE=ge.prototype,KE={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{KE[t]={value:t}});Object.defineProperties(ge,KE);Object.defineProperty(qE,"isAxiosError",{value:!0});ge.from=(t,e,n,r,i,s)=>{const o=Object.create(qE);return $.toFlatObject(t,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),ge.call(o,t.message,e,n,r,i),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};const GC=null;function Np(t){return $.isPlainObject(t)||$.isArray(t)}function GE(t){return $.endsWith(t,"[]")?t.slice(0,-2):t}function n2(t,e,n){return t?t.concat(e).map(function(i,s){return i=GE(i),!n&&s?"["+i+"]":i}).join(n?".":""):e}function QC(t){return $.isArray(t)&&!t.some(Np)}const YC=$.toFlatObject($,{},null,function(e){return/^is[A-Z]/.test(e)});function jh(t,e,n){if(!$.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=$.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,E){return!$.isUndefined(E[y])});const r=n.metaTokens,i=n.visitor||h,s=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&$.isSpecCompliantForm(e);if(!$.isFunction(i))throw new TypeError("visitor must be a function");function u(_){if(_===null)return"";if($.isDate(_))return _.toISOString();if(!l&&$.isBlob(_))throw new ge("Blob is not supported. Use a Buffer instead.");return $.isArrayBuffer(_)||$.isTypedArray(_)?l&&typeof Blob=="function"?new Blob([_]):Buffer.from(_):_}function h(_,y,E){let w=_;if(_&&!E&&typeof _=="object"){if($.endsWith(y,"{}"))y=r?y:y.slice(0,-2),_=JSON.stringify(_);else if($.isArray(_)&&QC(_)||($.isFileList(_)||$.endsWith(y,"[]"))&&(w=$.toArray(_)))return y=GE(y),w.forEach(function(b,L){!($.isUndefined(b)||b===null)&&e.append(o===!0?n2([y],L,s):o===null?y:y+"[]",u(b))}),!1}return Np(_)?!0:(e.append(n2(E,y,s),u(_)),!1)}const f=[],d=Object.assign(YC,{defaultVisitor:h,convertValue:u,isVisitable:Np});function m(_,y){if(!$.isUndefined(_)){if(f.indexOf(_)!==-1)throw Error("Circular reference detected in "+y.join("."));f.push(_),$.forEach(_,function(w,v){(!($.isUndefined(w)||w===null)&&i.call(e,w,$.isString(v)?v.trim():v,y,d))===!0&&m(w,y?y.concat(v):[v])}),f.pop()}}if(!$.isObject(t))throw new TypeError("data must be an object");return m(t),e}function r2(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Mg(t,e){this._pairs=[],t&&jh(t,this,e)}const QE=Mg.prototype;QE.append=function(e,n){this._pairs.push([e,n])};QE.toString=function(e){const n=e?function(r){return e.call(this,r,r2)}:r2;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function XC(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function YE(t,e,n){if(!e)return t;const r=n&&n.encode||XC,i=n&&n.serialize;let s;if(i?s=i(e,n):s=$.isURLSearchParams(e)?e.toString():new Mg(e,n).toString(r),s){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class i2{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){$.forEach(this.handlers,function(r){r!==null&&e(r)})}}const XE={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},JC=typeof URLSearchParams<"u"?URLSearchParams:Mg,ZC=typeof FormData<"u"?FormData:null,eP=typeof Blob<"u"?Blob:null,tP={isBrowser:!0,classes:{URLSearchParams:JC,FormData:ZC,Blob:eP},protocols:["http","https","file","blob","url","data"]},Ng=typeof window<"u"&&typeof document<"u",nP=(t=>Ng&&["ReactNative","NativeScript","NS"].indexOf(t)<0)(typeof navigator<"u"&&navigator.product),rP=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",iP=Ng&&window.location.href||"http://localhost",sP=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Ng,hasStandardBrowserEnv:nP,hasStandardBrowserWebWorkerEnv:rP,origin:iP},Symbol.toStringTag,{value:"Module"})),Mn={...sP,...tP};function oP(t,e){return jh(t,new Mn.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,s){return Mn.isNode&&$.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function aP(t){return $.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function lP(t){const e={},n=Object.keys(t);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],e[s]=t[s];return e}function JE(t){function e(n,r,i,s){let o=n[s++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=s>=n.length;return o=!o&&$.isArray(i)?i.length:o,l?($.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!a):((!i[o]||!$.isObject(i[o]))&&(i[o]=[]),e(n,r,i[o],s)&&$.isArray(i[o])&&(i[o]=lP(i[o])),!a)}if($.isFormData(t)&&$.isFunction(t.entries)){const n={};return $.forEachEntry(t,(r,i)=>{e(aP(r),i,n,0)}),n}return null}function uP(t,e,n){if($.isString(t))try{return(e||JSON.parse)(t),$.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const yl={transitional:XE,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,s=$.isObject(e);if(s&&$.isHTMLForm(e)&&(e=new FormData(e)),$.isFormData(e))return i?JSON.stringify(JE(e)):e;if($.isArrayBuffer(e)||$.isBuffer(e)||$.isStream(e)||$.isFile(e)||$.isBlob(e)||$.isReadableStream(e))return e;if($.isArrayBufferView(e))return e.buffer;if($.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return oP(e,this.formSerializer).toString();if((a=$.isFileList(e))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return jh(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return s||i?(n.setContentType("application/json",!1),uP(e)):e}],transformResponse:[function(e){const n=this.transitional||yl.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if($.isResponse(e)||$.isReadableStream(e))return e;if(e&&$.isString(e)&&(r&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?ge.from(a,ge.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Mn.classes.FormData,Blob:Mn.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};$.forEach(["delete","get","head","post","put","patch"],t=>{yl.headers[t]={}});const cP=$.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),hP=t=>{const e={};let n,r,i;return t&&t.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!n||e[n]&&cP[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},s2=Symbol("internals");function Qo(t){return t&&String(t).trim().toLowerCase()}function Yu(t){return t===!1||t==null?t:$.isArray(t)?t.map(Yu):String(t)}function fP(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const dP=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function ld(t,e,n,r,i){if($.isFunction(r))return r.call(this,e,n);if(i&&(e=n),!!$.isString(e)){if($.isString(r))return e.indexOf(r)!==-1;if($.isRegExp(r))return r.test(e)}}function pP(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function mP(t,e){const n=$.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(i,s,o){return this[r].call(this,e,i,s,o)},configurable:!0})})}class sn{constructor(e){e&&this.set(e)}set(e,n,r){const i=this;function s(a,l,u){const h=Qo(l);if(!h)throw new Error("header name must be a non-empty string");const f=$.findKey(i,h);(!f||i[f]===void 0||u===!0||u===void 0&&i[f]!==!1)&&(i[f||l]=Yu(a))}const o=(a,l)=>$.forEach(a,(u,h)=>s(u,h,l));if($.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if($.isString(e)&&(e=e.trim())&&!dP(e))o(hP(e),n);else if($.isHeaders(e))for(const[a,l]of e.entries())s(l,a,r);else e!=null&&s(n,e,r);return this}get(e,n){if(e=Qo(e),e){const r=$.findKey(this,e);if(r){const i=this[r];if(!n)return i;if(n===!0)return fP(i);if($.isFunction(n))return n.call(this,i,r);if($.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Qo(e),e){const r=$.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||ld(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let i=!1;function s(o){if(o=Qo(o),o){const a=$.findKey(r,o);a&&(!n||ld(r,r[a],a,n))&&(delete r[a],i=!0)}}return $.isArray(e)?e.forEach(s):s(e),i}clear(e){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const s=n[r];(!e||ld(this,this[s],s,e,!0))&&(delete this[s],i=!0)}return i}normalize(e){const n=this,r={};return $.forEach(this,(i,s)=>{const o=$.findKey(r,s);if(o){n[o]=Yu(i),delete n[s];return}const a=e?pP(s):String(s).trim();a!==s&&delete n[s],n[a]=Yu(i),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return $.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=e&&$.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(i=>r.set(i)),r}static accessor(e){const r=(this[s2]=this[s2]={accessors:{}}).accessors,i=this.prototype;function s(o){const a=Qo(o);r[a]||(mP(i,o),r[a]=!0)}return $.isArray(e)?e.forEach(s):s(e),this}}sn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);$.reduceDescriptors(sn.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});$.freezeMethods(sn);function ud(t,e){const n=this||yl,r=e||n,i=sn.from(r.headers);let s=r.data;return $.forEach(t,function(a){s=a.call(n,s,i.normalize(),e?e.status:void 0)}),i.normalize(),s}function ZE(t){return!!(t&&t.__CANCEL__)}function yo(t,e,n){ge.call(this,t??"canceled",ge.ERR_CANCELED,e,n),this.name="CanceledError"}$.inherits(yo,ge,{__CANCEL__:!0});function eS(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new ge("Request failed with status code "+n.status,[ge.ERR_BAD_REQUEST,ge.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function gP(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function _P(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i=0,s=0,o;return e=e!==void 0?e:1e3,function(l){const u=Date.now(),h=r[s];o||(o=u),n[i]=l,r[i]=u;let f=s,d=0;for(;f!==i;)d+=n[f++],f=f%t;if(i=(i+1)%t,i===s&&(s=(s+1)%t),u-o<e)return;const m=h&&u-h;return m?Math.round(d*1e3/m):void 0}}function yP(t,e){let n=0;const r=1e3/e;let i=null;return function(){const o=this===!0,a=Date.now();if(o||a-n>r)return i&&(clearTimeout(i),i=null),n=a,t.apply(null,arguments);i||(i=setTimeout(()=>(i=null,n=Date.now(),t.apply(null,arguments)),r-(a-n)))}}const Oc=(t,e,n=3)=>{let r=0;const i=_P(50,250);return yP(s=>{const o=s.loaded,a=s.lengthComputable?s.total:void 0,l=o-r,u=i(l),h=o<=a;r=o;const f={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:u||void 0,estimated:u&&a&&h?(a-o)/u:void 0,event:s,lengthComputable:a!=null};f[e?"download":"upload"]=!0,t(f)},n)},vP=Mn.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(s){let o=s;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(o){const a=$.isString(o)?i(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}(),wP=Mn.hasStandardBrowserEnv?{write(t,e,n,r,i,s){const o=[t+"="+encodeURIComponent(e)];$.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),$.isString(r)&&o.push("path="+r),$.isString(i)&&o.push("domain="+i),s===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function EP(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function SP(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function tS(t,e){return t&&!EP(e)?SP(t,e):e}const o2=t=>t instanceof sn?{...t}:t;function Ki(t,e){e=e||{};const n={};function r(u,h,f){return $.isPlainObject(u)&&$.isPlainObject(h)?$.merge.call({caseless:f},u,h):$.isPlainObject(h)?$.merge({},h):$.isArray(h)?h.slice():h}function i(u,h,f){if($.isUndefined(h)){if(!$.isUndefined(u))return r(void 0,u,f)}else return r(u,h,f)}function s(u,h){if(!$.isUndefined(h))return r(void 0,h)}function o(u,h){if($.isUndefined(h)){if(!$.isUndefined(u))return r(void 0,u)}else return r(void 0,h)}function a(u,h,f){if(f in e)return r(u,h);if(f in t)return r(void 0,u)}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(u,h)=>i(o2(u),o2(h),!0)};return $.forEach(Object.keys(Object.assign({},t,e)),function(h){const f=l[h]||i,d=f(t[h],e[h],h);$.isUndefined(d)&&f!==a||(n[h]=d)}),n}const nS=t=>{const e=Ki({},t);let{data:n,withXSRFToken:r,xsrfHeaderName:i,xsrfCookieName:s,headers:o,auth:a}=e;e.headers=o=sn.from(o),e.url=YE(tS(e.baseURL,e.url),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let l;if($.isFormData(n)){if(Mn.hasStandardBrowserEnv||Mn.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((l=o.getContentType())!==!1){const[u,...h]=l?l.split(";").map(f=>f.trim()).filter(Boolean):[];o.setContentType([u||"multipart/form-data",...h].join("; "))}}if(Mn.hasStandardBrowserEnv&&(r&&$.isFunction(r)&&(r=r(e)),r||r!==!1&&vP(e.url))){const u=i&&s&&wP.read(s);u&&o.set(i,u)}return e},TP=typeof XMLHttpRequest<"u",bP=TP&&function(t){return new Promise(function(n,r){const i=nS(t);let s=i.data;const o=sn.from(i.headers).normalize();let{responseType:a}=i,l;function u(){i.cancelToken&&i.cancelToken.unsubscribe(l),i.signal&&i.signal.removeEventListener("abort",l)}let h=new XMLHttpRequest;h.open(i.method.toUpperCase(),i.url,!0),h.timeout=i.timeout;function f(){if(!h)return;const m=sn.from("getAllResponseHeaders"in h&&h.getAllResponseHeaders()),y={data:!a||a==="text"||a==="json"?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:m,config:t,request:h};eS(function(w){n(w),u()},function(w){r(w),u()},y),h=null}"onloadend"in h?h.onloadend=f:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.indexOf("file:")===0)||setTimeout(f)},h.onabort=function(){h&&(r(new ge("Request aborted",ge.ECONNABORTED,i,h)),h=null)},h.onerror=function(){r(new ge("Network Error",ge.ERR_NETWORK,i,h)),h=null},h.ontimeout=function(){let _=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const y=i.transitional||XE;i.timeoutErrorMessage&&(_=i.timeoutErrorMessage),r(new ge(_,y.clarifyTimeoutError?ge.ETIMEDOUT:ge.ECONNABORTED,i,h)),h=null},s===void 0&&o.setContentType(null),"setRequestHeader"in h&&$.forEach(o.toJSON(),function(_,y){h.setRequestHeader(y,_)}),$.isUndefined(i.withCredentials)||(h.withCredentials=!!i.withCredentials),a&&a!=="json"&&(h.responseType=i.responseType),typeof i.onDownloadProgress=="function"&&h.addEventListener("progress",Oc(i.onDownloadProgress,!0)),typeof i.onUploadProgress=="function"&&h.upload&&h.upload.addEventListener("progress",Oc(i.onUploadProgress)),(i.cancelToken||i.signal)&&(l=m=>{h&&(r(!m||m.type?new yo(null,t,h):m),h.abort(),h=null)},i.cancelToken&&i.cancelToken.subscribe(l),i.signal&&(i.signal.aborted?l():i.signal.addEventListener("abort",l)));const d=gP(i.url);if(d&&Mn.protocols.indexOf(d)===-1){r(new ge("Unsupported protocol "+d+":",ge.ERR_BAD_REQUEST,t));return}h.send(s||null)})},xP=(t,e)=>{let n=new AbortController,r;const i=function(l){if(!r){r=!0,o();const u=l instanceof Error?l:this.reason;n.abort(u instanceof ge?u:new yo(u instanceof Error?u.message:u))}};let s=e&&setTimeout(()=>{i(new ge(`timeout ${e} of ms exceeded`,ge.ETIMEDOUT))},e);const o=()=>{t&&(s&&clearTimeout(s),s=null,t.forEach(l=>{l&&(l.removeEventListener?l.removeEventListener("abort",i):l.unsubscribe(i))}),t=null)};t.forEach(l=>l&&l.addEventListener&&l.addEventListener("abort",i));const{signal:a}=n;return a.unsubscribe=o,[a,()=>{s&&clearTimeout(s),s=null}]},IP=function*(t,e){let n=t.byteLength;if(!e||n<e){yield t;return}let r=0,i;for(;r<n;)i=r+e,yield t.slice(r,i),r=i},RP=async function*(t,e,n){for await(const r of t)yield*IP(ArrayBuffer.isView(r)?r:await n(String(r)),e)},a2=(t,e,n,r,i)=>{const s=RP(t,e,i);let o=0;return new ReadableStream({type:"bytes",async pull(a){const{done:l,value:u}=await s.next();if(l){a.close(),r();return}let h=u.byteLength;n&&n(o+=h),a.enqueue(new Uint8Array(u))},cancel(a){return r(a),s.return()}},{highWaterMark:2})},l2=(t,e)=>{const n=t!=null;return r=>setTimeout(()=>e({lengthComputable:n,total:t,loaded:r}))},Bh=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",rS=Bh&&typeof ReadableStream=="function",Vp=Bh&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),AP=rS&&(()=>{let t=!1;const e=new Request(Mn.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e})(),u2=64*1024,Fp=rS&&!!(()=>{try{return $.isReadableStream(new Response("").body)}catch{}})(),Dc={stream:Fp&&(t=>t.body)};Bh&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!Dc[e]&&(Dc[e]=$.isFunction(t[e])?n=>n[e]():(n,r)=>{throw new ge(`Response type '${e}' is not supported`,ge.ERR_NOT_SUPPORT,r)})})})(new Response);const CP=async t=>{if(t==null)return 0;if($.isBlob(t))return t.size;if($.isSpecCompliantForm(t))return(await new Request(t).arrayBuffer()).byteLength;if($.isArrayBufferView(t))return t.byteLength;if($.isURLSearchParams(t)&&(t=t+""),$.isString(t))return(await Vp(t)).byteLength},PP=async(t,e)=>{const n=$.toFiniteNumber(t.getContentLength());return n??CP(e)},kP=Bh&&(async t=>{let{url:e,method:n,data:r,signal:i,cancelToken:s,timeout:o,onDownloadProgress:a,onUploadProgress:l,responseType:u,headers:h,withCredentials:f="same-origin",fetchOptions:d}=nS(t);u=u?(u+"").toLowerCase():"text";let[m,_]=i||s||o?xP([i,s],o):[],y,E;const w=()=>{!y&&setTimeout(()=>{m&&m.unsubscribe()}),y=!0};let v;try{if(l&&AP&&n!=="get"&&n!=="head"&&(v=await PP(h,r))!==0){let D=new Request(e,{method:"POST",body:r,duplex:"half"}),x;$.isFormData(r)&&(x=D.headers.get("content-type"))&&h.setContentType(x),D.body&&(r=a2(D.body,u2,l2(v,Oc(l)),null,Vp))}$.isString(f)||(f=f?"cors":"omit"),E=new Request(e,{...d,signal:m,method:n.toUpperCase(),headers:h.normalize().toJSON(),body:r,duplex:"half",withCredentials:f});let b=await fetch(E);const L=Fp&&(u==="stream"||u==="response");if(Fp&&(a||L)){const D={};["status","statusText","headers"].forEach(S=>{D[S]=b[S]});const x=$.toFiniteNumber(b.headers.get("content-length"));b=new Response(a2(b.body,u2,a&&l2(x,Oc(a,!0)),L&&w,Vp),D)}u=u||"text";let O=await Dc[$.findKey(Dc,u)||"text"](b,t);return!L&&w(),_&&_(),await new Promise((D,x)=>{eS(D,x,{data:O,headers:sn.from(b.headers),status:b.status,statusText:b.statusText,config:t,request:E})})}catch(b){throw w(),b&&b.name==="TypeError"&&/fetch/i.test(b.message)?Object.assign(new ge("Network Error",ge.ERR_NETWORK,t,E),{cause:b.cause||b}):ge.from(b,b&&b.code,t,E)}}),zp={http:GC,xhr:bP,fetch:kP};$.forEach(zp,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const c2=t=>`- ${t}`,LP=t=>$.isFunction(t)||t===null||t===!1,iS={getAdapter:t=>{t=$.isArray(t)?t:[t];const{length:e}=t;let n,r;const i={};for(let s=0;s<e;s++){n=t[s];let o;if(r=n,!LP(n)&&(r=zp[(o=String(n)).toLowerCase()],r===void 0))throw new ge(`Unknown adapter '${o}'`);if(r)break;i[o||"#"+s]=r}if(!r){const s=Object.entries(i).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=e?s.length>1?`since :
`+s.map(c2).join(`
`):" "+c2(s[0]):"as no adapter specified";throw new ge("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:zp};function cd(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new yo(null,t)}function h2(t){return cd(t),t.headers=sn.from(t.headers),t.data=ud.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),iS.getAdapter(t.adapter||yl.adapter)(t).then(function(r){return cd(t),r.data=ud.call(t,t.transformResponse,r),r.headers=sn.from(r.headers),r},function(r){return ZE(r)||(cd(t),r&&r.response&&(r.response.data=ud.call(t,t.transformResponse,r.response),r.response.headers=sn.from(r.response.headers))),Promise.reject(r)})}const sS="1.7.2",Vg={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Vg[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const f2={};Vg.transitional=function(e,n,r){function i(s,o){return"[Axios v"+sS+"] Transitional option '"+s+"'"+o+(r?". "+r:"")}return(s,o,a)=>{if(e===!1)throw new ge(i(o," has been removed"+(n?" in "+n:"")),ge.ERR_DEPRECATED);return n&&!f2[o]&&(f2[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,a):!0}};function OP(t,e,n){if(typeof t!="object")throw new ge("options must be an object",ge.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let i=r.length;for(;i-- >0;){const s=r[i],o=e[s];if(o){const a=t[s],l=a===void 0||o(a,s,t);if(l!==!0)throw new ge("option "+s+" must be "+l,ge.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ge("Unknown option "+s,ge.ERR_BAD_OPTION)}}const jp={assertOptions:OP,validators:Vg},Ar=jp.validators;class ji{constructor(e){this.defaults=e,this.interceptors={request:new i2,response:new i2}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let i;Error.captureStackTrace?Error.captureStackTrace(i={}):i=new Error;const s=i.stack?i.stack.replace(/^.+\n/,""):"";try{r.stack?s&&!String(r.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+s):r.stack=s}catch{}}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Ki(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:s}=n;r!==void 0&&jp.assertOptions(r,{silentJSONParsing:Ar.transitional(Ar.boolean),forcedJSONParsing:Ar.transitional(Ar.boolean),clarifyTimeoutError:Ar.transitional(Ar.boolean)},!1),i!=null&&($.isFunction(i)?n.paramsSerializer={serialize:i}:jp.assertOptions(i,{encode:Ar.function,serialize:Ar.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&$.merge(s.common,s[n.method]);s&&$.forEach(["delete","get","head","post","put","patch","common"],_=>{delete s[_]}),n.headers=sn.concat(o,s);const a=[];let l=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(l=l&&y.synchronous,a.unshift(y.fulfilled,y.rejected))});const u=[];this.interceptors.response.forEach(function(y){u.push(y.fulfilled,y.rejected)});let h,f=0,d;if(!l){const _=[h2.bind(this),void 0];for(_.unshift.apply(_,a),_.push.apply(_,u),d=_.length,h=Promise.resolve(n);f<d;)h=h.then(_[f++],_[f++]);return h}d=a.length;let m=n;for(f=0;f<d;){const _=a[f++],y=a[f++];try{m=_(m)}catch(E){y.call(this,E);break}}try{h=h2.call(this,m)}catch(_){return Promise.reject(_)}for(f=0,d=u.length;f<d;)h=h.then(u[f++],u[f++]);return h}getUri(e){e=Ki(this.defaults,e);const n=tS(e.baseURL,e.url);return YE(n,e.params,e.paramsSerializer)}}$.forEach(["delete","get","head","options"],function(e){ji.prototype[e]=function(n,r){return this.request(Ki(r||{},{method:e,url:n,data:(r||{}).data}))}});$.forEach(["post","put","patch"],function(e){function n(r){return function(s,o,a){return this.request(Ki(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}ji.prototype[e]=n(),ji.prototype[e+"Form"]=n(!0)});class Fg{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(a=>{r.subscribe(a),s=a}).then(i);return o.cancel=function(){r.unsubscribe(s)},o},e(function(s,o,a){r.reason||(r.reason=new yo(s,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new Fg(function(i){e=i}),cancel:e}}}function DP(t){return function(n){return t.apply(null,n)}}function MP(t){return $.isObject(t)&&t.isAxiosError===!0}const Bp={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Bp).forEach(([t,e])=>{Bp[e]=t});function oS(t){const e=new ji(t),n=FE(ji.prototype.request,e);return $.extend(n,ji.prototype,e,{allOwnKeys:!0}),$.extend(n,e,null,{allOwnKeys:!0}),n.create=function(i){return oS(Ki(t,i))},n}const Ke=oS(yl);Ke.Axios=ji;Ke.CanceledError=yo;Ke.CancelToken=Fg;Ke.isCancel=ZE;Ke.VERSION=sS;Ke.toFormData=jh;Ke.AxiosError=ge;Ke.Cancel=Ke.CanceledError;Ke.all=function(e){return Promise.all(e)};Ke.spread=DP;Ke.isAxiosError=MP;Ke.mergeConfig=Ki;Ke.AxiosHeaders=sn;Ke.formToJSON=t=>JE($.isHTMLForm(t)?new FormData(t):t);Ke.getAdapter=iS.getAdapter;Ke.HttpStatusCode=Bp;Ke.default=Ke;/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */function vl(t){return t+.5|0}const Vr=(t,e,n)=>Math.max(Math.min(t,n),e);function sa(t){return Vr(vl(t*2.55),0,255)}function Xr(t){return Vr(vl(t*255),0,255)}function or(t){return Vr(vl(t/2.55)/100,0,1)}function d2(t){return Vr(vl(t*100),0,100)}const wn={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},$p=[..."0123456789ABCDEF"],NP=t=>$p[t&15],VP=t=>$p[(t&240)>>4]+$p[t&15],hu=t=>(t&240)>>4===(t&15),FP=t=>hu(t.r)&&hu(t.g)&&hu(t.b)&&hu(t.a);function zP(t){var e=t.length,n;return t[0]==="#"&&(e===4||e===5?n={r:255&wn[t[1]]*17,g:255&wn[t[2]]*17,b:255&wn[t[3]]*17,a:e===5?wn[t[4]]*17:255}:(e===7||e===9)&&(n={r:wn[t[1]]<<4|wn[t[2]],g:wn[t[3]]<<4|wn[t[4]],b:wn[t[5]]<<4|wn[t[6]],a:e===9?wn[t[7]]<<4|wn[t[8]]:255})),n}const jP=(t,e)=>t<255?e(t):"";function BP(t){var e=FP(t)?NP:VP;return t?"#"+e(t.r)+e(t.g)+e(t.b)+jP(t.a,e):void 0}const $P=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function aS(t,e,n){const r=e*Math.min(n,1-n),i=(s,o=(s+t/30)%12)=>n-r*Math.max(Math.min(o-3,9-o,1),-1);return[i(0),i(8),i(4)]}function UP(t,e,n){const r=(i,s=(i+t/60)%6)=>n-n*e*Math.max(Math.min(s,4-s,1),0);return[r(5),r(3),r(1)]}function HP(t,e,n){const r=aS(t,1,.5);let i;for(e+n>1&&(i=1/(e+n),e*=i,n*=i),i=0;i<3;i++)r[i]*=1-e-n,r[i]+=e;return r}function WP(t,e,n,r,i){return t===i?(e-n)/r+(e<n?6:0):e===i?(n-t)/r+2:(t-e)/r+4}function zg(t){const n=t.r/255,r=t.g/255,i=t.b/255,s=Math.max(n,r,i),o=Math.min(n,r,i),a=(s+o)/2;let l,u,h;return s!==o&&(h=s-o,u=a>.5?h/(2-s-o):h/(s+o),l=WP(n,r,i,h,s),l=l*60+.5),[l|0,u||0,a]}function jg(t,e,n,r){return(Array.isArray(e)?t(e[0],e[1],e[2]):t(e,n,r)).map(Xr)}function Bg(t,e,n){return jg(aS,t,e,n)}function qP(t,e,n){return jg(HP,t,e,n)}function KP(t,e,n){return jg(UP,t,e,n)}function lS(t){return(t%360+360)%360}function GP(t){const e=$P.exec(t);let n=255,r;if(!e)return;e[5]!==r&&(n=e[6]?sa(+e[5]):Xr(+e[5]));const i=lS(+e[2]),s=+e[3]/100,o=+e[4]/100;return e[1]==="hwb"?r=qP(i,s,o):e[1]==="hsv"?r=KP(i,s,o):r=Bg(i,s,o),{r:r[0],g:r[1],b:r[2],a:n}}function QP(t,e){var n=zg(t);n[0]=lS(n[0]+e),n=Bg(n),t.r=n[0],t.g=n[1],t.b=n[2]}function YP(t){if(!t)return;const e=zg(t),n=e[0],r=d2(e[1]),i=d2(e[2]);return t.a<255?`hsla(${n}, ${r}%, ${i}%, ${or(t.a)})`:`hsl(${n}, ${r}%, ${i}%)`}const p2={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},m2={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function XP(){const t={},e=Object.keys(m2),n=Object.keys(p2);let r,i,s,o,a;for(r=0;r<e.length;r++){for(o=a=e[r],i=0;i<n.length;i++)s=n[i],a=a.replace(s,p2[s]);s=parseInt(m2[o],16),t[a]=[s>>16&255,s>>8&255,s&255]}return t}let fu;function JP(t){fu||(fu=XP(),fu.transparent=[0,0,0,0]);const e=fu[t.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:e.length===4?e[3]:255}}const ZP=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function ek(t){const e=ZP.exec(t);let n=255,r,i,s;if(e){if(e[7]!==r){const o=+e[7];n=e[8]?sa(o):Vr(o*255,0,255)}return r=+e[1],i=+e[3],s=+e[5],r=255&(e[2]?sa(r):Vr(r,0,255)),i=255&(e[4]?sa(i):Vr(i,0,255)),s=255&(e[6]?sa(s):Vr(s,0,255)),{r,g:i,b:s,a:n}}}function tk(t){return t&&(t.a<255?`rgba(${t.r}, ${t.g}, ${t.b}, ${or(t.a)})`:`rgb(${t.r}, ${t.g}, ${t.b})`)}const hd=t=>t<=.0031308?t*12.92:Math.pow(t,1/2.4)*1.055-.055,hs=t=>t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4);function nk(t,e,n){const r=hs(or(t.r)),i=hs(or(t.g)),s=hs(or(t.b));return{r:Xr(hd(r+n*(hs(or(e.r))-r))),g:Xr(hd(i+n*(hs(or(e.g))-i))),b:Xr(hd(s+n*(hs(or(e.b))-s))),a:t.a+n*(e.a-t.a)}}function du(t,e,n){if(t){let r=zg(t);r[e]=Math.max(0,Math.min(r[e]+r[e]*n,e===0?360:1)),r=Bg(r),t.r=r[0],t.g=r[1],t.b=r[2]}}function uS(t,e){return t&&Object.assign(e||{},t)}function g2(t){var e={r:0,g:0,b:0,a:255};return Array.isArray(t)?t.length>=3&&(e={r:t[0],g:t[1],b:t[2],a:255},t.length>3&&(e.a=Xr(t[3]))):(e=uS(t,{r:0,g:0,b:0,a:1}),e.a=Xr(e.a)),e}function rk(t){return t.charAt(0)==="r"?ek(t):GP(t)}class Qa{constructor(e){if(e instanceof Qa)return e;const n=typeof e;let r;n==="object"?r=g2(e):n==="string"&&(r=zP(e)||JP(e)||rk(e)),this._rgb=r,this._valid=!!r}get valid(){return this._valid}get rgb(){var e=uS(this._rgb);return e&&(e.a=or(e.a)),e}set rgb(e){this._rgb=g2(e)}rgbString(){return this._valid?tk(this._rgb):void 0}hexString(){return this._valid?BP(this._rgb):void 0}hslString(){return this._valid?YP(this._rgb):void 0}mix(e,n){if(e){const r=this.rgb,i=e.rgb;let s;const o=n===s?.5:n,a=2*o-1,l=r.a-i.a,u=((a*l===-1?a:(a+l)/(1+a*l))+1)/2;s=1-u,r.r=255&u*r.r+s*i.r+.5,r.g=255&u*r.g+s*i.g+.5,r.b=255&u*r.b+s*i.b+.5,r.a=o*r.a+(1-o)*i.a,this.rgb=r}return this}interpolate(e,n){return e&&(this._rgb=nk(this._rgb,e._rgb,n)),this}clone(){return new Qa(this.rgb)}alpha(e){return this._rgb.a=Xr(e),this}clearer(e){const n=this._rgb;return n.a*=1-e,this}greyscale(){const e=this._rgb,n=vl(e.r*.3+e.g*.59+e.b*.11);return e.r=e.g=e.b=n,this}opaquer(e){const n=this._rgb;return n.a*=1+e,this}negate(){const e=this._rgb;return e.r=255-e.r,e.g=255-e.g,e.b=255-e.b,this}lighten(e){return du(this._rgb,2,e),this}darken(e){return du(this._rgb,2,-e),this}saturate(e){return du(this._rgb,1,e),this}desaturate(e){return du(this._rgb,1,-e),this}rotate(e){return QP(this._rgb,e),this}}/*!
 * Chart.js v4.4.8
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */function tr(){}const ik=(()=>{let t=0;return()=>t++})();function We(t){return t==null}function it(t){if(Array.isArray&&Array.isArray(t))return!0;const e=Object.prototype.toString.call(t);return e.slice(0,7)==="[object"&&e.slice(-6)==="Array]"}function Re(t){return t!==null&&Object.prototype.toString.call(t)==="[object Object]"}function st(t){return(typeof t=="number"||t instanceof Number)&&isFinite(+t)}function ln(t,e){return st(t)?t:e}function be(t,e){return typeof t>"u"?e:t}const sk=(t,e)=>typeof t=="string"&&t.endsWith("%")?parseFloat(t)/100*e:+t;function ze(t,e,n){if(t&&typeof t.call=="function")return t.apply(n,e)}function Me(t,e,n,r){let i,s,o;if(it(t))for(s=t.length,i=0;i<s;i++)e.call(n,t[i],i);else if(Re(t))for(o=Object.keys(t),s=o.length,i=0;i<s;i++)e.call(n,t[o[i]],o[i])}function Mc(t,e){let n,r,i,s;if(!t||!e||t.length!==e.length)return!1;for(n=0,r=t.length;n<r;++n)if(i=t[n],s=e[n],i.datasetIndex!==s.datasetIndex||i.index!==s.index)return!1;return!0}function Nc(t){if(it(t))return t.map(Nc);if(Re(t)){const e=Object.create(null),n=Object.keys(t),r=n.length;let i=0;for(;i<r;++i)e[n[i]]=Nc(t[n[i]]);return e}return t}function cS(t){return["__proto__","prototype","constructor"].indexOf(t)===-1}function ok(t,e,n,r){if(!cS(t))return;const i=e[t],s=n[t];Re(i)&&Re(s)?Ya(i,s,r):e[t]=Nc(s)}function Ya(t,e,n){const r=it(e)?e:[e],i=r.length;if(!Re(t))return t;n=n||{};const s=n.merger||ok;let o;for(let a=0;a<i;++a){if(o=r[a],!Re(o))continue;const l=Object.keys(o);for(let u=0,h=l.length;u<h;++u)s(l[u],t,o,n)}return t}function Ea(t,e){return Ya(t,e,{merger:ak})}function ak(t,e,n){if(!cS(t))return;const r=e[t],i=n[t];Re(r)&&Re(i)?Ea(r,i):Object.prototype.hasOwnProperty.call(e,t)||(e[t]=Nc(i))}const _2={"":t=>t,x:t=>t.x,y:t=>t.y};function lk(t){const e=t.split("."),n=[];let r="";for(const i of e)r+=i,r.endsWith("\\")?r=r.slice(0,-1)+".":(n.push(r),r="");return n}function uk(t){const e=lk(t);return n=>{for(const r of e){if(r==="")break;n=n&&n[r]}return n}}function Xa(t,e){return(_2[e]||(_2[e]=uk(e)))(t)}function $g(t){return t.charAt(0).toUpperCase()+t.slice(1)}const Vc=t=>typeof t<"u",oi=t=>typeof t=="function",y2=(t,e)=>{if(t.size!==e.size)return!1;for(const n of t)if(!e.has(n))return!1;return!0};function ck(t){return t.type==="mouseup"||t.type==="click"||t.type==="contextmenu"}const wt=Math.PI,mn=2*wt,hk=mn+wt,Fc=Number.POSITIVE_INFINITY,fk=wt/180,fn=wt/2,bi=wt/4,v2=wt*2/3,Fr=Math.log10,Qs=Math.sign;function Sa(t,e,n){return Math.abs(t-e)<n}function w2(t){const e=Math.round(t);t=Sa(t,e,t/1e3)?e:t;const n=Math.pow(10,Math.floor(Fr(t))),r=t/n;return(r<=1?1:r<=2?2:r<=5?5:10)*n}function dk(t){const e=[],n=Math.sqrt(t);let r;for(r=1;r<n;r++)t%r===0&&(e.push(r),e.push(t/r));return n===(n|0)&&e.push(n),e.sort((i,s)=>i-s).pop(),e}function pk(t){return typeof t=="symbol"||typeof t=="object"&&t!==null&&!(Symbol.toPrimitive in t||"toString"in t||"valueOf"in t)}function zc(t){return!pk(t)&&!isNaN(parseFloat(t))&&isFinite(t)}function mk(t,e){const n=Math.round(t);return n-e<=t&&n+e>=t}function hS(t,e,n){let r,i,s;for(r=0,i=t.length;r<i;r++)s=t[r][n],isNaN(s)||(e.min=Math.min(e.min,s),e.max=Math.max(e.max,s))}function zr(t){return t*(wt/180)}function Ug(t){return t*(180/wt)}function E2(t){if(!st(t))return;let e=1,n=0;for(;Math.round(t*e)/e!==t;)e*=10,n++;return n}function gk(t,e){const n=e.x-t.x,r=e.y-t.y,i=Math.sqrt(n*n+r*r);let s=Math.atan2(r,n);return s<-.5*wt&&(s+=mn),{angle:s,distance:i}}function Up(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function _k(t,e){return(t-e+hk)%mn-wt}function cn(t){return(t%mn+mn)%mn}function fS(t,e,n,r){const i=cn(t),s=cn(e),o=cn(n),a=cn(s-i),l=cn(o-i),u=cn(i-s),h=cn(i-o);return i===s||i===o||r&&s===o||a>l&&u<h}function ur(t,e,n){return Math.max(e,Math.min(n,t))}function yk(t){return ur(t,-32768,32767)}function As(t,e,n,r=1e-6){return t>=Math.min(e,n)-r&&t<=Math.max(e,n)+r}function Hg(t,e,n){n=n||(o=>t[o]<e);let r=t.length-1,i=0,s;for(;r-i>1;)s=i+r>>1,n(s)?i=s:r=s;return{lo:i,hi:r}}const Hp=(t,e,n,r)=>Hg(t,n,r?i=>{const s=t[i][e];return s<n||s===n&&t[i+1][e]===n}:i=>t[i][e]<n),vk=(t,e,n)=>Hg(t,n,r=>t[r][e]>=n);function wk(t,e,n){let r=0,i=t.length;for(;r<i&&t[r]<e;)r++;for(;i>r&&t[i-1]>n;)i--;return r>0||i<t.length?t.slice(r,i):t}const dS=["push","pop","shift","splice","unshift"];function Ek(t,e){if(t._chartjs){t._chartjs.listeners.push(e);return}Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),dS.forEach(n=>{const r="_onData"+$g(n),i=t[n];Object.defineProperty(t,n,{configurable:!0,enumerable:!1,value(...s){const o=i.apply(this,s);return t._chartjs.listeners.forEach(a=>{typeof a[r]=="function"&&a[r](...s)}),o}})})}function S2(t,e){const n=t._chartjs;if(!n)return;const r=n.listeners,i=r.indexOf(e);i!==-1&&r.splice(i,1),!(r.length>0)&&(dS.forEach(s=>{delete t[s]}),delete t._chartjs)}function Sk(t){const e=new Set(t);return e.size===t.length?t:Array.from(e)}const pS=function(){return typeof window>"u"?function(t){return t()}:window.requestAnimationFrame}();function mS(t,e){let n=[],r=!1;return function(...i){n=i,r||(r=!0,pS.call(window,()=>{r=!1,t.apply(e,n)}))}}function Tk(t,e){let n;return function(...r){return e?(clearTimeout(n),n=setTimeout(t,e,r)):t.apply(this,r),e}}const gS=t=>t==="start"?"left":t==="end"?"right":"center",an=(t,e,n)=>t==="start"?e:t==="end"?n:(e+n)/2,bk=(t,e,n,r)=>t===(r?"left":"right")?n:t==="center"?(e+n)/2:e,pu=t=>t===0||t===1,T2=(t,e,n)=>-(Math.pow(2,10*(t-=1))*Math.sin((t-e)*mn/n)),b2=(t,e,n)=>Math.pow(2,-10*t)*Math.sin((t-e)*mn/n)+1,Ta={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>-t*(t-2),easeInOutQuad:t=>(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1),easeInCubic:t=>t*t*t,easeOutCubic:t=>(t-=1)*t*t+1,easeInOutCubic:t=>(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2),easeInQuart:t=>t*t*t*t,easeOutQuart:t=>-((t-=1)*t*t*t-1),easeInOutQuart:t=>(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2),easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>(t-=1)*t*t*t*t+1,easeInOutQuint:t=>(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2),easeInSine:t=>-Math.cos(t*fn)+1,easeOutSine:t=>Math.sin(t*fn),easeInOutSine:t=>-.5*(Math.cos(wt*t)-1),easeInExpo:t=>t===0?0:Math.pow(2,10*(t-1)),easeOutExpo:t=>t===1?1:-Math.pow(2,-10*t)+1,easeInOutExpo:t=>pu(t)?t:t<.5?.5*Math.pow(2,10*(t*2-1)):.5*(-Math.pow(2,-10*(t*2-1))+2),easeInCirc:t=>t>=1?t:-(Math.sqrt(1-t*t)-1),easeOutCirc:t=>Math.sqrt(1-(t-=1)*t),easeInOutCirc:t=>(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1),easeInElastic:t=>pu(t)?t:T2(t,.075,.3),easeOutElastic:t=>pu(t)?t:b2(t,.075,.3),easeInOutElastic(t){return pu(t)?t:t<.5?.5*T2(t*2,.1125,.45):.5+.5*b2(t*2-1,.1125,.45)},easeInBack(t){return t*t*((1.70158+1)*t-1.70158)},easeOutBack(t){return(t-=1)*t*((1.70158+1)*t+1.70158)+1},easeInOutBack(t){let e=1.70158;return(t/=.5)<1?.5*(t*t*(((e*=1.525)+1)*t-e)):.5*((t-=2)*t*(((e*=1.525)+1)*t+e)+2)},easeInBounce:t=>1-Ta.easeOutBounce(1-t),easeOutBounce(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},easeInOutBounce:t=>t<.5?Ta.easeInBounce(t*2)*.5:Ta.easeOutBounce(t*2-1)*.5+.5};function Wg(t){if(t&&typeof t=="object"){const e=t.toString();return e==="[object CanvasPattern]"||e==="[object CanvasGradient]"}return!1}function x2(t){return Wg(t)?t:new Qa(t)}function fd(t){return Wg(t)?t:new Qa(t).saturate(.5).darken(.1).hexString()}const xk=["x","y","borderWidth","radius","tension"],Ik=["color","borderColor","backgroundColor"];function Rk(t){t.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),t.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:e=>e!=="onProgress"&&e!=="onComplete"&&e!=="fn"}),t.set("animations",{colors:{type:"color",properties:Ik},numbers:{type:"number",properties:xk}}),t.describe("animations",{_fallback:"animation"}),t.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:e=>e|0}}}})}function Ak(t){t.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const I2=new Map;function Ck(t,e){e=e||{};const n=t+JSON.stringify(e);let r=I2.get(n);return r||(r=new Intl.NumberFormat(t,e),I2.set(n,r)),r}function qg(t,e,n){return Ck(e,n).format(t)}const _S={values(t){return it(t)?t:""+t},numeric(t,e,n){if(t===0)return"0";const r=this.chart.options.locale;let i,s=t;if(n.length>1){const u=Math.max(Math.abs(n[0].value),Math.abs(n[n.length-1].value));(u<1e-4||u>1e15)&&(i="scientific"),s=Pk(t,n)}const o=Fr(Math.abs(s)),a=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),l={notation:i,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(l,this.options.ticks.format),qg(t,r,l)},logarithmic(t,e,n){if(t===0)return"0";const r=n[e].significand||t/Math.pow(10,Math.floor(Fr(t)));return[1,2,3,5,10,15].includes(r)||e>.8*n.length?_S.numeric.call(this,t,e,n):""}};function Pk(t,e){let n=e.length>3?e[2].value-e[1].value:e[1].value-e[0].value;return Math.abs(n)>=1&&t!==Math.floor(t)&&(n=t-Math.floor(t)),n}var $h={formatters:_S};function kk(t){t.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(e,n)=>n.lineWidth,tickColor:(e,n)=>n.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:$h.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),t.route("scale.ticks","color","","color"),t.route("scale.grid","color","","borderColor"),t.route("scale.border","color","","borderColor"),t.route("scale.title","color","","color"),t.describe("scale",{_fallback:!1,_scriptable:e=>!e.startsWith("before")&&!e.startsWith("after")&&e!=="callback"&&e!=="parser",_indexable:e=>e!=="borderDash"&&e!=="tickBorderDash"&&e!=="dash"}),t.describe("scales",{_fallback:"scale"}),t.describe("scale.ticks",{_scriptable:e=>e!=="backdropPadding"&&e!=="callback",_indexable:e=>e!=="backdropPadding"})}const Gi=Object.create(null),Wp=Object.create(null);function ba(t,e){if(!e)return t;const n=e.split(".");for(let r=0,i=n.length;r<i;++r){const s=n[r];t=t[s]||(t[s]=Object.create(null))}return t}function dd(t,e,n){return typeof e=="string"?Ya(ba(t,e),n):Ya(ba(t,""),e)}class Lk{constructor(e,n){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=r=>r.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(r,i)=>fd(i.backgroundColor),this.hoverBorderColor=(r,i)=>fd(i.borderColor),this.hoverColor=(r,i)=>fd(i.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(e),this.apply(n)}set(e,n){return dd(this,e,n)}get(e){return ba(this,e)}describe(e,n){return dd(Wp,e,n)}override(e,n){return dd(Gi,e,n)}route(e,n,r,i){const s=ba(this,e),o=ba(this,r),a="_"+n;Object.defineProperties(s,{[a]:{value:s[n],writable:!0},[n]:{enumerable:!0,get(){const l=this[a],u=o[i];return Re(l)?Object.assign({},u,l):be(l,u)},set(l){this[a]=l}}})}apply(e){e.forEach(n=>n(this))}}var ot=new Lk({_scriptable:t=>!t.startsWith("on"),_indexable:t=>t!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[Rk,Ak,kk]);function Ok(t){return!t||We(t.size)||We(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family}function jc(t,e,n,r,i){let s=e[i];return s||(s=e[i]=t.measureText(i).width,n.push(i)),s>r&&(r=s),r}function Dk(t,e,n,r){r=r||{};let i=r.data=r.data||{},s=r.garbageCollect=r.garbageCollect||[];r.font!==e&&(i=r.data={},s=r.garbageCollect=[],r.font=e),t.save(),t.font=e;let o=0;const a=n.length;let l,u,h,f,d;for(l=0;l<a;l++)if(f=n[l],f!=null&&!it(f))o=jc(t,i,s,o,f);else if(it(f))for(u=0,h=f.length;u<h;u++)d=f[u],d!=null&&!it(d)&&(o=jc(t,i,s,o,d));t.restore();const m=s.length/2;if(m>n.length){for(l=0;l<m;l++)delete i[s[l]];s.splice(0,m)}return o}function xi(t,e,n){const r=t.currentDevicePixelRatio,i=n!==0?Math.max(n/2,.5):0;return Math.round((e-i)*r)/r+i}function R2(t,e){!e&&!t||(e=e||t.getContext("2d"),e.save(),e.resetTransform(),e.clearRect(0,0,t.width,t.height),e.restore())}function qp(t,e,n,r){yS(t,e,n,r,null)}function yS(t,e,n,r,i){let s,o,a,l,u,h,f,d;const m=e.pointStyle,_=e.rotation,y=e.radius;let E=(_||0)*fk;if(m&&typeof m=="object"&&(s=m.toString(),s==="[object HTMLImageElement]"||s==="[object HTMLCanvasElement]")){t.save(),t.translate(n,r),t.rotate(E),t.drawImage(m,-m.width/2,-m.height/2,m.width,m.height),t.restore();return}if(!(isNaN(y)||y<=0)){switch(t.beginPath(),m){default:i?t.ellipse(n,r,i/2,y,0,0,mn):t.arc(n,r,y,0,mn),t.closePath();break;case"triangle":h=i?i/2:y,t.moveTo(n+Math.sin(E)*h,r-Math.cos(E)*y),E+=v2,t.lineTo(n+Math.sin(E)*h,r-Math.cos(E)*y),E+=v2,t.lineTo(n+Math.sin(E)*h,r-Math.cos(E)*y),t.closePath();break;case"rectRounded":u=y*.516,l=y-u,o=Math.cos(E+bi)*l,f=Math.cos(E+bi)*(i?i/2-u:l),a=Math.sin(E+bi)*l,d=Math.sin(E+bi)*(i?i/2-u:l),t.arc(n-f,r-a,u,E-wt,E-fn),t.arc(n+d,r-o,u,E-fn,E),t.arc(n+f,r+a,u,E,E+fn),t.arc(n-d,r+o,u,E+fn,E+wt),t.closePath();break;case"rect":if(!_){l=Math.SQRT1_2*y,h=i?i/2:l,t.rect(n-h,r-l,2*h,2*l);break}E+=bi;case"rectRot":f=Math.cos(E)*(i?i/2:y),o=Math.cos(E)*y,a=Math.sin(E)*y,d=Math.sin(E)*(i?i/2:y),t.moveTo(n-f,r-a),t.lineTo(n+d,r-o),t.lineTo(n+f,r+a),t.lineTo(n-d,r+o),t.closePath();break;case"crossRot":E+=bi;case"cross":f=Math.cos(E)*(i?i/2:y),o=Math.cos(E)*y,a=Math.sin(E)*y,d=Math.sin(E)*(i?i/2:y),t.moveTo(n-f,r-a),t.lineTo(n+f,r+a),t.moveTo(n+d,r-o),t.lineTo(n-d,r+o);break;case"star":f=Math.cos(E)*(i?i/2:y),o=Math.cos(E)*y,a=Math.sin(E)*y,d=Math.sin(E)*(i?i/2:y),t.moveTo(n-f,r-a),t.lineTo(n+f,r+a),t.moveTo(n+d,r-o),t.lineTo(n-d,r+o),E+=bi,f=Math.cos(E)*(i?i/2:y),o=Math.cos(E)*y,a=Math.sin(E)*y,d=Math.sin(E)*(i?i/2:y),t.moveTo(n-f,r-a),t.lineTo(n+f,r+a),t.moveTo(n+d,r-o),t.lineTo(n-d,r+o);break;case"line":o=i?i/2:Math.cos(E)*y,a=Math.sin(E)*y,t.moveTo(n-o,r-a),t.lineTo(n+o,r+a);break;case"dash":t.moveTo(n,r),t.lineTo(n+Math.cos(E)*(i?i/2:y),r+Math.sin(E)*y);break;case!1:t.closePath();break}t.fill(),e.borderWidth>0&&t.stroke()}}function cr(t,e,n){return n=n||.5,!e||t&&t.x>e.left-n&&t.x<e.right+n&&t.y>e.top-n&&t.y<e.bottom+n}function Uh(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()}function Hh(t){t.restore()}function Mk(t,e,n,r,i){if(!e)return t.lineTo(n.x,n.y);if(i==="middle"){const s=(e.x+n.x)/2;t.lineTo(s,e.y),t.lineTo(s,n.y)}else i==="after"!=!!r?t.lineTo(e.x,n.y):t.lineTo(n.x,e.y);t.lineTo(n.x,n.y)}function Nk(t,e,n,r){if(!e)return t.lineTo(n.x,n.y);t.bezierCurveTo(r?e.cp1x:e.cp2x,r?e.cp1y:e.cp2y,r?n.cp2x:n.cp1x,r?n.cp2y:n.cp1y,n.x,n.y)}function Vk(t,e){e.translation&&t.translate(e.translation[0],e.translation[1]),We(e.rotation)||t.rotate(e.rotation),e.color&&(t.fillStyle=e.color),e.textAlign&&(t.textAlign=e.textAlign),e.textBaseline&&(t.textBaseline=e.textBaseline)}function Fk(t,e,n,r,i){if(i.strikethrough||i.underline){const s=t.measureText(r),o=e-s.actualBoundingBoxLeft,a=e+s.actualBoundingBoxRight,l=n-s.actualBoundingBoxAscent,u=n+s.actualBoundingBoxDescent,h=i.strikethrough?(l+u)/2:u;t.strokeStyle=t.fillStyle,t.beginPath(),t.lineWidth=i.decorationWidth||2,t.moveTo(o,h),t.lineTo(a,h),t.stroke()}}function zk(t,e){const n=t.fillStyle;t.fillStyle=e.color,t.fillRect(e.left,e.top,e.width,e.height),t.fillStyle=n}function Ys(t,e,n,r,i,s={}){const o=it(e)?e:[e],a=s.strokeWidth>0&&s.strokeColor!=="";let l,u;for(t.save(),t.font=i.string,Vk(t,s),l=0;l<o.length;++l)u=o[l],s.backdrop&&zk(t,s.backdrop),a&&(s.strokeColor&&(t.strokeStyle=s.strokeColor),We(s.strokeWidth)||(t.lineWidth=s.strokeWidth),t.strokeText(u,n,r,s.maxWidth)),t.fillText(u,n,r,s.maxWidth),Fk(t,n,r,u,s),r+=Number(i.lineHeight);t.restore()}function Bc(t,e){const{x:n,y:r,w:i,h:s,radius:o}=e;t.arc(n+o.topLeft,r+o.topLeft,o.topLeft,1.5*wt,wt,!0),t.lineTo(n,r+s-o.bottomLeft),t.arc(n+o.bottomLeft,r+s-o.bottomLeft,o.bottomLeft,wt,fn,!0),t.lineTo(n+i-o.bottomRight,r+s),t.arc(n+i-o.bottomRight,r+s-o.bottomRight,o.bottomRight,fn,0,!0),t.lineTo(n+i,r+o.topRight),t.arc(n+i-o.topRight,r+o.topRight,o.topRight,0,-fn,!0),t.lineTo(n+o.topLeft,r)}const jk=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,Bk=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function $k(t,e){const n=(""+t).match(jk);if(!n||n[1]==="normal")return e*1.2;switch(t=+n[2],n[3]){case"px":return t;case"%":t/=100;break}return e*t}const Uk=t=>+t||0;function vS(t,e){const n={},r=Re(e),i=r?Object.keys(e):e,s=Re(t)?r?o=>be(t[o],t[e[o]]):o=>t[o]:()=>t;for(const o of i)n[o]=Uk(s(o));return n}function Hk(t){return vS(t,{top:"y",right:"x",bottom:"y",left:"x"})}function Ms(t){return vS(t,["topLeft","topRight","bottomLeft","bottomRight"])}function Wt(t){const e=Hk(t);return e.width=e.left+e.right,e.height=e.top+e.bottom,e}function xt(t,e){t=t||{},e=e||ot.font;let n=be(t.size,e.size);typeof n=="string"&&(n=parseInt(n,10));let r=be(t.style,e.style);r&&!(""+r).match(Bk)&&(console.warn('Invalid font style specified: "'+r+'"'),r=void 0);const i={family:be(t.family,e.family),lineHeight:$k(be(t.lineHeight,e.lineHeight),n),size:n,style:r,weight:be(t.weight,e.weight),string:""};return i.string=Ok(i),i}function mu(t,e,n,r){let i,s,o;for(i=0,s=t.length;i<s;++i)if(o=t[i],o!==void 0&&o!==void 0)return o}function Wk(t,e,n){const{min:r,max:i}=t,s=sk(e,(i-r)/2),o=(a,l)=>n&&a===0?0:a+l;return{min:o(r,-Math.abs(s)),max:o(i,s)}}function gi(t,e){return Object.assign(Object.create(t),e)}function Kg(t,e=[""],n,r,i=()=>t[0]){const s=n||t;typeof r>"u"&&(r=TS("_fallback",t));const o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:t,_rootScopes:s,_fallback:r,_getTarget:i,override:a=>Kg([a,...t],e,s,r)};return new Proxy(o,{deleteProperty(a,l){return delete a[l],delete a._keys,delete t[0][l],!0},get(a,l){return ES(a,l,()=>Zk(l,e,t,a))},getOwnPropertyDescriptor(a,l){return Reflect.getOwnPropertyDescriptor(a._scopes[0],l)},getPrototypeOf(){return Reflect.getPrototypeOf(t[0])},has(a,l){return C2(a).includes(l)},ownKeys(a){return C2(a)},set(a,l,u){const h=a._storage||(a._storage=i());return a[l]=h[l]=u,delete a._keys,!0}})}function Xs(t,e,n,r){const i={_cacheable:!1,_proxy:t,_context:e,_subProxy:n,_stack:new Set,_descriptors:wS(t,r),setContext:s=>Xs(t,s,n,r),override:s=>Xs(t.override(s),e,n,r)};return new Proxy(i,{deleteProperty(s,o){return delete s[o],delete t[o],!0},get(s,o,a){return ES(s,o,()=>Kk(s,o,a))},getOwnPropertyDescriptor(s,o){return s._descriptors.allKeys?Reflect.has(t,o)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(t,o)},getPrototypeOf(){return Reflect.getPrototypeOf(t)},has(s,o){return Reflect.has(t,o)},ownKeys(){return Reflect.ownKeys(t)},set(s,o,a){return t[o]=a,delete s[o],!0}})}function wS(t,e={scriptable:!0,indexable:!0}){const{_scriptable:n=e.scriptable,_indexable:r=e.indexable,_allKeys:i=e.allKeys}=t;return{allKeys:i,scriptable:n,indexable:r,isScriptable:oi(n)?n:()=>n,isIndexable:oi(r)?r:()=>r}}const qk=(t,e)=>t?t+$g(e):e,Gg=(t,e)=>Re(e)&&t!=="adapters"&&(Object.getPrototypeOf(e)===null||e.constructor===Object);function ES(t,e,n){if(Object.prototype.hasOwnProperty.call(t,e)||e==="constructor")return t[e];const r=n();return t[e]=r,r}function Kk(t,e,n){const{_proxy:r,_context:i,_subProxy:s,_descriptors:o}=t;let a=r[e];return oi(a)&&o.isScriptable(e)&&(a=Gk(e,a,t,n)),it(a)&&a.length&&(a=Qk(e,a,t,o.isIndexable)),Gg(e,a)&&(a=Xs(a,i,s&&s[e],o)),a}function Gk(t,e,n,r){const{_proxy:i,_context:s,_subProxy:o,_stack:a}=n;if(a.has(t))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+t);a.add(t);let l=e(s,o||r);return a.delete(t),Gg(t,l)&&(l=Qg(i._scopes,i,t,l)),l}function Qk(t,e,n,r){const{_proxy:i,_context:s,_subProxy:o,_descriptors:a}=n;if(typeof s.index<"u"&&r(t))return e[s.index%e.length];if(Re(e[0])){const l=e,u=i._scopes.filter(h=>h!==l);e=[];for(const h of l){const f=Qg(u,i,t,h);e.push(Xs(f,s,o&&o[t],a))}}return e}function SS(t,e,n){return oi(t)?t(e,n):t}const Yk=(t,e)=>t===!0?e:typeof t=="string"?Xa(e,t):void 0;function Xk(t,e,n,r,i){for(const s of e){const o=Yk(n,s);if(o){t.add(o);const a=SS(o._fallback,n,i);if(typeof a<"u"&&a!==n&&a!==r)return a}else if(o===!1&&typeof r<"u"&&n!==r)return null}return!1}function Qg(t,e,n,r){const i=e._rootScopes,s=SS(e._fallback,n,r),o=[...t,...i],a=new Set;a.add(r);let l=A2(a,o,n,s||n,r);return l===null||typeof s<"u"&&s!==n&&(l=A2(a,o,s,l,r),l===null)?!1:Kg(Array.from(a),[""],i,s,()=>Jk(e,n,r))}function A2(t,e,n,r,i){for(;n;)n=Xk(t,e,n,r,i);return n}function Jk(t,e,n){const r=t._getTarget();e in r||(r[e]={});const i=r[e];return it(i)&&Re(n)?n:i||{}}function Zk(t,e,n,r){let i;for(const s of e)if(i=TS(qk(s,t),n),typeof i<"u")return Gg(t,i)?Qg(n,r,t,i):i}function TS(t,e){for(const n of e){if(!n)continue;const r=n[t];if(typeof r<"u")return r}}function C2(t){let e=t._keys;return e||(e=t._keys=e9(t._scopes)),e}function e9(t){const e=new Set;for(const n of t)for(const r of Object.keys(n).filter(i=>!i.startsWith("_")))e.add(r);return Array.from(e)}function t9(t,e,n,r){const{iScale:i}=t,{key:s="r"}=this._parsing,o=new Array(r);let a,l,u,h;for(a=0,l=r;a<l;++a)u=a+n,h=e[u],o[a]={r:i.parse(Xa(h,s),u)};return o}const n9=Number.EPSILON||1e-14,Js=(t,e)=>e<t.length&&!t[e].skip&&t[e],bS=t=>t==="x"?"y":"x";function r9(t,e,n,r){const i=t.skip?e:t,s=e,o=n.skip?e:n,a=Up(s,i),l=Up(o,s);let u=a/(a+l),h=l/(a+l);u=isNaN(u)?0:u,h=isNaN(h)?0:h;const f=r*u,d=r*h;return{previous:{x:s.x-f*(o.x-i.x),y:s.y-f*(o.y-i.y)},next:{x:s.x+d*(o.x-i.x),y:s.y+d*(o.y-i.y)}}}function i9(t,e,n){const r=t.length;let i,s,o,a,l,u=Js(t,0);for(let h=0;h<r-1;++h)if(l=u,u=Js(t,h+1),!(!l||!u)){if(Sa(e[h],0,n9)){n[h]=n[h+1]=0;continue}i=n[h]/e[h],s=n[h+1]/e[h],a=Math.pow(i,2)+Math.pow(s,2),!(a<=9)&&(o=3/Math.sqrt(a),n[h]=i*o*e[h],n[h+1]=s*o*e[h])}}function s9(t,e,n="x"){const r=bS(n),i=t.length;let s,o,a,l=Js(t,0);for(let u=0;u<i;++u){if(o=a,a=l,l=Js(t,u+1),!a)continue;const h=a[n],f=a[r];o&&(s=(h-o[n])/3,a[`cp1${n}`]=h-s,a[`cp1${r}`]=f-s*e[u]),l&&(s=(l[n]-h)/3,a[`cp2${n}`]=h+s,a[`cp2${r}`]=f+s*e[u])}}function o9(t,e="x"){const n=bS(e),r=t.length,i=Array(r).fill(0),s=Array(r);let o,a,l,u=Js(t,0);for(o=0;o<r;++o)if(a=l,l=u,u=Js(t,o+1),!!l){if(u){const h=u[e]-l[e];i[o]=h!==0?(u[n]-l[n])/h:0}s[o]=a?u?Qs(i[o-1])!==Qs(i[o])?0:(i[o-1]+i[o])/2:i[o-1]:i[o]}i9(t,i,s),s9(t,s,e)}function gu(t,e,n){return Math.max(Math.min(t,n),e)}function a9(t,e){let n,r,i,s,o,a=cr(t[0],e);for(n=0,r=t.length;n<r;++n)o=s,s=a,a=n<r-1&&cr(t[n+1],e),s&&(i=t[n],o&&(i.cp1x=gu(i.cp1x,e.left,e.right),i.cp1y=gu(i.cp1y,e.top,e.bottom)),a&&(i.cp2x=gu(i.cp2x,e.left,e.right),i.cp2y=gu(i.cp2y,e.top,e.bottom)))}function l9(t,e,n,r,i){let s,o,a,l;if(e.spanGaps&&(t=t.filter(u=>!u.skip)),e.cubicInterpolationMode==="monotone")o9(t,i);else{let u=r?t[t.length-1]:t[0];for(s=0,o=t.length;s<o;++s)a=t[s],l=r9(u,a,t[Math.min(s+1,o-(r?0:1))%o],e.tension),a.cp1x=l.previous.x,a.cp1y=l.previous.y,a.cp2x=l.next.x,a.cp2y=l.next.y,u=a}e.capBezierPoints&&a9(t,n)}function Yg(){return typeof window<"u"&&typeof document<"u"}function Xg(t){let e=t.parentNode;return e&&e.toString()==="[object ShadowRoot]"&&(e=e.host),e}function $c(t,e,n){let r;return typeof t=="string"?(r=parseInt(t,10),t.indexOf("%")!==-1&&(r=r/100*e.parentNode[n])):r=t,r}const Wh=t=>t.ownerDocument.defaultView.getComputedStyle(t,null);function u9(t,e){return Wh(t).getPropertyValue(e)}const c9=["top","right","bottom","left"];function Bi(t,e,n){const r={};n=n?"-"+n:"";for(let i=0;i<4;i++){const s=c9[i];r[s]=parseFloat(t[e+"-"+s+n])||0}return r.width=r.left+r.right,r.height=r.top+r.bottom,r}const h9=(t,e,n)=>(t>0||e>0)&&(!n||!n.shadowRoot);function f9(t,e){const n=t.touches,r=n&&n.length?n[0]:t,{offsetX:i,offsetY:s}=r;let o=!1,a,l;if(h9(i,s,t.target))a=i,l=s;else{const u=e.getBoundingClientRect();a=r.clientX-u.left,l=r.clientY-u.top,o=!0}return{x:a,y:l,box:o}}function Pi(t,e){if("native"in t)return t;const{canvas:n,currentDevicePixelRatio:r}=e,i=Wh(n),s=i.boxSizing==="border-box",o=Bi(i,"padding"),a=Bi(i,"border","width"),{x:l,y:u,box:h}=f9(t,n),f=o.left+(h&&a.left),d=o.top+(h&&a.top);let{width:m,height:_}=e;return s&&(m-=o.width+a.width,_-=o.height+a.height),{x:Math.round((l-f)/m*n.width/r),y:Math.round((u-d)/_*n.height/r)}}function d9(t,e,n){let r,i;if(e===void 0||n===void 0){const s=t&&Xg(t);if(!s)e=t.clientWidth,n=t.clientHeight;else{const o=s.getBoundingClientRect(),a=Wh(s),l=Bi(a,"border","width"),u=Bi(a,"padding");e=o.width-u.width-l.width,n=o.height-u.height-l.height,r=$c(a.maxWidth,s,"clientWidth"),i=$c(a.maxHeight,s,"clientHeight")}}return{width:e,height:n,maxWidth:r||Fc,maxHeight:i||Fc}}const _u=t=>Math.round(t*10)/10;function p9(t,e,n,r){const i=Wh(t),s=Bi(i,"margin"),o=$c(i.maxWidth,t,"clientWidth")||Fc,a=$c(i.maxHeight,t,"clientHeight")||Fc,l=d9(t,e,n);let{width:u,height:h}=l;if(i.boxSizing==="content-box"){const d=Bi(i,"border","width"),m=Bi(i,"padding");u-=m.width+d.width,h-=m.height+d.height}return u=Math.max(0,u-s.width),h=Math.max(0,r?u/r:h-s.height),u=_u(Math.min(u,o,l.maxWidth)),h=_u(Math.min(h,a,l.maxHeight)),u&&!h&&(h=_u(u/2)),(e!==void 0||n!==void 0)&&r&&l.height&&h>l.height&&(h=l.height,u=_u(Math.floor(h*r))),{width:u,height:h}}function P2(t,e,n){const r=e||1,i=Math.floor(t.height*r),s=Math.floor(t.width*r);t.height=Math.floor(t.height),t.width=Math.floor(t.width);const o=t.canvas;return o.style&&(n||!o.style.height&&!o.style.width)&&(o.style.height=`${t.height}px`,o.style.width=`${t.width}px`),t.currentDevicePixelRatio!==r||o.height!==i||o.width!==s?(t.currentDevicePixelRatio=r,o.height=i,o.width=s,t.ctx.setTransform(r,0,0,r,0,0),!0):!1}const m9=function(){let t=!1;try{const e={get passive(){return t=!0,!1}};Yg()&&(window.addEventListener("test",null,e),window.removeEventListener("test",null,e))}catch{}return t}();function k2(t,e){const n=u9(t,e),r=n&&n.match(/^(\d+)(\.\d+)?px$/);return r?+r[1]:void 0}function ki(t,e,n,r){return{x:t.x+n*(e.x-t.x),y:t.y+n*(e.y-t.y)}}function g9(t,e,n,r){return{x:t.x+n*(e.x-t.x),y:r==="middle"?n<.5?t.y:e.y:r==="after"?n<1?t.y:e.y:n>0?e.y:t.y}}function _9(t,e,n,r){const i={x:t.cp2x,y:t.cp2y},s={x:e.cp1x,y:e.cp1y},o=ki(t,i,n),a=ki(i,s,n),l=ki(s,e,n),u=ki(o,a,n),h=ki(a,l,n);return ki(u,h,n)}const y9=function(t,e){return{x(n){return t+t+e-n},setWidth(n){e=n},textAlign(n){return n==="center"?n:n==="right"?"left":"right"},xPlus(n,r){return n-r},leftForLtr(n,r){return n-r}}},v9=function(){return{x(t){return t},setWidth(t){},textAlign(t){return t},xPlus(t,e){return t+e},leftForLtr(t,e){return t}}};function Ns(t,e,n){return t?y9(e,n):v9()}function xS(t,e){let n,r;(e==="ltr"||e==="rtl")&&(n=t.canvas.style,r=[n.getPropertyValue("direction"),n.getPropertyPriority("direction")],n.setProperty("direction",e,"important"),t.prevTextDirection=r)}function IS(t,e){e!==void 0&&(delete t.prevTextDirection,t.canvas.style.setProperty("direction",e[0],e[1]))}function RS(t){return t==="angle"?{between:fS,compare:_k,normalize:cn}:{between:As,compare:(e,n)=>e-n,normalize:e=>e}}function L2({start:t,end:e,count:n,loop:r,style:i}){return{start:t%n,end:e%n,loop:r&&(e-t+1)%n===0,style:i}}function w9(t,e,n){const{property:r,start:i,end:s}=n,{between:o,normalize:a}=RS(r),l=e.length;let{start:u,end:h,loop:f}=t,d,m;if(f){for(u+=l,h+=l,d=0,m=l;d<m&&o(a(e[u%l][r]),i,s);++d)u--,h--;u%=l,h%=l}return h<u&&(h+=l),{start:u,end:h,loop:f,style:t.style}}function AS(t,e,n){if(!n)return[t];const{property:r,start:i,end:s}=n,o=e.length,{compare:a,between:l,normalize:u}=RS(r),{start:h,end:f,loop:d,style:m}=w9(t,e,n),_=[];let y=!1,E=null,w,v,b;const L=()=>l(i,b,w)&&a(i,b)!==0,O=()=>a(s,w)===0||l(s,b,w),D=()=>y||L(),x=()=>!y||O();for(let S=h,T=h;S<=f;++S)v=e[S%o],!v.skip&&(w=u(v[r]),w!==b&&(y=l(w,i,s),E===null&&D()&&(E=a(w,i)===0?S:T),E!==null&&x()&&(_.push(L2({start:E,end:S,loop:d,count:o,style:m})),E=null),T=S,b=w));return E!==null&&_.push(L2({start:E,end:f,loop:d,count:o,style:m})),_}function CS(t,e){const n=[],r=t.segments;for(let i=0;i<r.length;i++){const s=AS(r[i],t.points,e);s.length&&n.push(...s)}return n}function E9(t,e,n,r){let i=0,s=e-1;if(n&&!r)for(;i<e&&!t[i].skip;)i++;for(;i<e&&t[i].skip;)i++;for(i%=e,n&&(s+=i);s>i&&t[s%e].skip;)s--;return s%=e,{start:i,end:s}}function S9(t,e,n,r){const i=t.length,s=[];let o=e,a=t[e],l;for(l=e+1;l<=n;++l){const u=t[l%i];u.skip||u.stop?a.skip||(r=!1,s.push({start:e%i,end:(l-1)%i,loop:r}),e=o=u.stop?l:null):(o=l,a.skip&&(e=l)),a=u}return o!==null&&s.push({start:e%i,end:o%i,loop:r}),s}function T9(t,e){const n=t.points,r=t.options.spanGaps,i=n.length;if(!i)return[];const s=!!t._loop,{start:o,end:a}=E9(n,i,s,r);if(r===!0)return O2(t,[{start:o,end:a,loop:s}],n,e);const l=a<o?a+i:a,u=!!t._fullLoop&&o===0&&a===i-1;return O2(t,S9(n,o,l,u),n,e)}function O2(t,e,n,r){return!r||!r.setContext||!n?e:b9(t,e,n,r)}function b9(t,e,n,r){const i=t._chart.getContext(),s=D2(t.options),{_datasetIndex:o,options:{spanGaps:a}}=t,l=n.length,u=[];let h=s,f=e[0].start,d=f;function m(_,y,E,w){const v=a?-1:1;if(_!==y){for(_+=l;n[_%l].skip;)_-=v;for(;n[y%l].skip;)y+=v;_%l!==y%l&&(u.push({start:_%l,end:y%l,loop:E,style:w}),h=w,f=y%l)}}for(const _ of e){f=a?f:_.start;let y=n[f%l],E;for(d=f+1;d<=_.end;d++){const w=n[d%l];E=D2(r.setContext(gi(i,{type:"segment",p0:y,p1:w,p0DataIndex:(d-1)%l,p1DataIndex:d%l,datasetIndex:o}))),x9(E,h)&&m(f,d-1,_.loop,h),y=w,h=E}f<d-1&&m(f,d-1,_.loop,h)}return u}function D2(t){return{backgroundColor:t.backgroundColor,borderCapStyle:t.borderCapStyle,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderJoinStyle:t.borderJoinStyle,borderWidth:t.borderWidth,borderColor:t.borderColor}}function x9(t,e){if(!e)return!1;const n=[],r=function(i,s){return Wg(s)?(n.includes(s)||n.push(s),n.indexOf(s)):s};return JSON.stringify(t,r)!==JSON.stringify(e,r)}/*!
 * Chart.js v4.4.8
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */class I9{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(e,n,r,i){const s=n.listeners[i],o=n.duration;s.forEach(a=>a({chart:e,initial:n.initial,numSteps:o,currentStep:Math.min(r-n.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=pS.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(e=Date.now()){let n=0;this._charts.forEach((r,i)=>{if(!r.running||!r.items.length)return;const s=r.items;let o=s.length-1,a=!1,l;for(;o>=0;--o)l=s[o],l._active?(l._total>r.duration&&(r.duration=l._total),l.tick(e),a=!0):(s[o]=s[s.length-1],s.pop());a&&(i.draw(),this._notify(i,r,e,"progress")),s.length||(r.running=!1,this._notify(i,r,e,"complete"),r.initial=!1),n+=s.length}),this._lastDate=e,n===0&&(this._running=!1)}_getAnims(e){const n=this._charts;let r=n.get(e);return r||(r={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},n.set(e,r)),r}listen(e,n,r){this._getAnims(e).listeners[n].push(r)}add(e,n){!n||!n.length||this._getAnims(e).items.push(...n)}has(e){return this._getAnims(e).items.length>0}start(e){const n=this._charts.get(e);n&&(n.running=!0,n.start=Date.now(),n.duration=n.items.reduce((r,i)=>Math.max(r,i._duration),0),this._refresh())}running(e){if(!this._running)return!1;const n=this._charts.get(e);return!(!n||!n.running||!n.items.length)}stop(e){const n=this._charts.get(e);if(!n||!n.items.length)return;const r=n.items;let i=r.length-1;for(;i>=0;--i)r[i].cancel();n.items=[],this._notify(e,n,Date.now(),"complete")}remove(e){return this._charts.delete(e)}}var nr=new I9;const M2="transparent",R9={boolean(t,e,n){return n>.5?e:t},color(t,e,n){const r=x2(t||M2),i=r.valid&&x2(e||M2);return i&&i.valid?i.mix(r,n).hexString():e},number(t,e,n){return t+(e-t)*n}};class A9{constructor(e,n,r,i){const s=n[r];i=mu([e.to,i,s,e.from]);const o=mu([e.from,s,i]);this._active=!0,this._fn=e.fn||R9[e.type||typeof o],this._easing=Ta[e.easing]||Ta.linear,this._start=Math.floor(Date.now()+(e.delay||0)),this._duration=this._total=Math.floor(e.duration),this._loop=!!e.loop,this._target=n,this._prop=r,this._from=o,this._to=i,this._promises=void 0}active(){return this._active}update(e,n,r){if(this._active){this._notify(!1);const i=this._target[this._prop],s=r-this._start,o=this._duration-s;this._start=r,this._duration=Math.floor(Math.max(o,e.duration)),this._total+=s,this._loop=!!e.loop,this._to=mu([e.to,n,i,e.from]),this._from=mu([e.from,i,n])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(e){const n=e-this._start,r=this._duration,i=this._prop,s=this._from,o=this._loop,a=this._to;let l;if(this._active=s!==a&&(o||n<r),!this._active){this._target[i]=a,this._notify(!0);return}if(n<0){this._target[i]=s;return}l=n/r%2,l=o&&l>1?2-l:l,l=this._easing(Math.min(1,Math.max(0,l))),this._target[i]=this._fn(s,a,l)}wait(){const e=this._promises||(this._promises=[]);return new Promise((n,r)=>{e.push({res:n,rej:r})})}_notify(e){const n=e?"res":"rej",r=this._promises||[];for(let i=0;i<r.length;i++)r[i][n]()}}class PS{constructor(e,n){this._chart=e,this._properties=new Map,this.configure(n)}configure(e){if(!Re(e))return;const n=Object.keys(ot.animation),r=this._properties;Object.getOwnPropertyNames(e).forEach(i=>{const s=e[i];if(!Re(s))return;const o={};for(const a of n)o[a]=s[a];(it(s.properties)&&s.properties||[i]).forEach(a=>{(a===i||!r.has(a))&&r.set(a,o)})})}_animateOptions(e,n){const r=n.options,i=P9(e,r);if(!i)return[];const s=this._createAnimations(i,r);return r.$shared&&C9(e.options.$animations,r).then(()=>{e.options=r},()=>{}),s}_createAnimations(e,n){const r=this._properties,i=[],s=e.$animations||(e.$animations={}),o=Object.keys(n),a=Date.now();let l;for(l=o.length-1;l>=0;--l){const u=o[l];if(u.charAt(0)==="$")continue;if(u==="options"){i.push(...this._animateOptions(e,n));continue}const h=n[u];let f=s[u];const d=r.get(u);if(f)if(d&&f.active()){f.update(d,h,a);continue}else f.cancel();if(!d||!d.duration){e[u]=h;continue}s[u]=f=new A9(d,e,u,h),i.push(f)}return i}update(e,n){if(this._properties.size===0){Object.assign(e,n);return}const r=this._createAnimations(e,n);if(r.length)return nr.add(this._chart,r),!0}}function C9(t,e){const n=[],r=Object.keys(e);for(let i=0;i<r.length;i++){const s=t[r[i]];s&&s.active()&&n.push(s.wait())}return Promise.all(n)}function P9(t,e){if(!e)return;let n=t.options;if(!n){t.options=e;return}return n.$shared&&(t.options=n=Object.assign({},n,{$shared:!1,$animations:{}})),n}function N2(t,e){const n=t&&t.options||{},r=n.reverse,i=n.min===void 0?e:0,s=n.max===void 0?e:0;return{start:r?s:i,end:r?i:s}}function k9(t,e,n){if(n===!1)return!1;const r=N2(t,n),i=N2(e,n);return{top:i.end,right:r.end,bottom:i.start,left:r.start}}function L9(t){let e,n,r,i;return Re(t)?(e=t.top,n=t.right,r=t.bottom,i=t.left):e=n=r=i=t,{top:e,right:n,bottom:r,left:i,disabled:t===!1}}function kS(t,e){const n=[],r=t._getSortedDatasetMetas(e);let i,s;for(i=0,s=r.length;i<s;++i)n.push(r[i].index);return n}function V2(t,e,n,r={}){const i=t.keys,s=r.mode==="single";let o,a,l,u;if(e===null)return;let h=!1;for(o=0,a=i.length;o<a;++o){if(l=+i[o],l===n){if(h=!0,r.all)continue;break}u=t.values[l],st(u)&&(s||e===0||Qs(e)===Qs(u))&&(e+=u)}return!h&&!r.all?0:e}function O9(t,e){const{iScale:n,vScale:r}=e,i=n.axis==="x"?"x":"y",s=r.axis==="x"?"x":"y",o=Object.keys(t),a=new Array(o.length);let l,u,h;for(l=0,u=o.length;l<u;++l)h=o[l],a[l]={[i]:h,[s]:t[h]};return a}function pd(t,e){const n=t&&t.options.stacked;return n||n===void 0&&e.stack!==void 0}function D9(t,e,n){return`${t.id}.${e.id}.${n.stack||n.type}`}function M9(t){const{min:e,max:n,minDefined:r,maxDefined:i}=t.getUserBounds();return{min:r?e:Number.NEGATIVE_INFINITY,max:i?n:Number.POSITIVE_INFINITY}}function N9(t,e,n){const r=t[e]||(t[e]={});return r[n]||(r[n]={})}function F2(t,e,n,r){for(const i of e.getMatchingVisibleMetas(r).reverse()){const s=t[i.index];if(n&&s>0||!n&&s<0)return i.index}return null}function z2(t,e){const{chart:n,_cachedMeta:r}=t,i=n._stacks||(n._stacks={}),{iScale:s,vScale:o,index:a}=r,l=s.axis,u=o.axis,h=D9(s,o,r),f=e.length;let d;for(let m=0;m<f;++m){const _=e[m],{[l]:y,[u]:E}=_,w=_._stacks||(_._stacks={});d=w[u]=N9(i,h,y),d[a]=E,d._top=F2(d,o,!0,r.type),d._bottom=F2(d,o,!1,r.type);const v=d._visualValues||(d._visualValues={});v[a]=E}}function md(t,e){const n=t.scales;return Object.keys(n).filter(r=>n[r].axis===e).shift()}function V9(t,e){return gi(t,{active:!1,dataset:void 0,datasetIndex:e,index:e,mode:"default",type:"dataset"})}function F9(t,e,n){return gi(t,{active:!1,dataIndex:e,parsed:void 0,raw:void 0,element:n,index:e,mode:"default",type:"data"})}function Yo(t,e){const n=t.controller.index,r=t.vScale&&t.vScale.axis;if(r){e=e||t._parsed;for(const i of e){const s=i._stacks;if(!s||s[r]===void 0||s[r][n]===void 0)return;delete s[r][n],s[r]._visualValues!==void 0&&s[r]._visualValues[n]!==void 0&&delete s[r]._visualValues[n]}}}const gd=t=>t==="reset"||t==="none",j2=(t,e)=>e?t:Object.assign({},t),z9=(t,e,n)=>t&&!e.hidden&&e._stacked&&{keys:kS(n,!0),values:null};class xa{constructor(e,n){this.chart=e,this._ctx=e.ctx,this.index=n,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const e=this._cachedMeta;this.configure(),this.linkScales(),e._stacked=pd(e.vScale,e),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(e){this.index!==e&&Yo(this._cachedMeta),this.index=e}linkScales(){const e=this.chart,n=this._cachedMeta,r=this.getDataset(),i=(f,d,m,_)=>f==="x"?d:f==="r"?_:m,s=n.xAxisID=be(r.xAxisID,md(e,"x")),o=n.yAxisID=be(r.yAxisID,md(e,"y")),a=n.rAxisID=be(r.rAxisID,md(e,"r")),l=n.indexAxis,u=n.iAxisID=i(l,s,o,a),h=n.vAxisID=i(l,o,s,a);n.xScale=this.getScaleForId(s),n.yScale=this.getScaleForId(o),n.rScale=this.getScaleForId(a),n.iScale=this.getScaleForId(u),n.vScale=this.getScaleForId(h)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(e){return this.chart.scales[e]}_getOtherScale(e){const n=this._cachedMeta;return e===n.iScale?n.vScale:n.iScale}reset(){this._update("reset")}_destroy(){const e=this._cachedMeta;this._data&&S2(this._data,this),e._stacked&&Yo(e)}_dataCheck(){const e=this.getDataset(),n=e.data||(e.data=[]),r=this._data;if(Re(n)){const i=this._cachedMeta;this._data=O9(n,i)}else if(r!==n){if(r){S2(r,this);const i=this._cachedMeta;Yo(i),i._parsed=[]}n&&Object.isExtensible(n)&&Ek(n,this),this._syncList=[],this._data=n}}addElements(){const e=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(e.dataset=new this.datasetElementType)}buildOrUpdateElements(e){const n=this._cachedMeta,r=this.getDataset();let i=!1;this._dataCheck();const s=n._stacked;n._stacked=pd(n.vScale,n),n.stack!==r.stack&&(i=!0,Yo(n),n.stack=r.stack),this._resyncElements(e),(i||s!==n._stacked)&&(z2(this,n._parsed),n._stacked=pd(n.vScale,n))}configure(){const e=this.chart.config,n=e.datasetScopeKeys(this._type),r=e.getOptionScopes(this.getDataset(),n,!0);this.options=e.createResolver(r,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(e,n){const{_cachedMeta:r,_data:i}=this,{iScale:s,_stacked:o}=r,a=s.axis;let l=e===0&&n===i.length?!0:r._sorted,u=e>0&&r._parsed[e-1],h,f,d;if(this._parsing===!1)r._parsed=i,r._sorted=!0,d=i;else{it(i[e])?d=this.parseArrayData(r,i,e,n):Re(i[e])?d=this.parseObjectData(r,i,e,n):d=this.parsePrimitiveData(r,i,e,n);const m=()=>f[a]===null||u&&f[a]<u[a];for(h=0;h<n;++h)r._parsed[h+e]=f=d[h],l&&(m()&&(l=!1),u=f);r._sorted=l}o&&z2(this,d)}parsePrimitiveData(e,n,r,i){const{iScale:s,vScale:o}=e,a=s.axis,l=o.axis,u=s.getLabels(),h=s===o,f=new Array(i);let d,m,_;for(d=0,m=i;d<m;++d)_=d+r,f[d]={[a]:h||s.parse(u[_],_),[l]:o.parse(n[_],_)};return f}parseArrayData(e,n,r,i){const{xScale:s,yScale:o}=e,a=new Array(i);let l,u,h,f;for(l=0,u=i;l<u;++l)h=l+r,f=n[h],a[l]={x:s.parse(f[0],h),y:o.parse(f[1],h)};return a}parseObjectData(e,n,r,i){const{xScale:s,yScale:o}=e,{xAxisKey:a="x",yAxisKey:l="y"}=this._parsing,u=new Array(i);let h,f,d,m;for(h=0,f=i;h<f;++h)d=h+r,m=n[d],u[h]={x:s.parse(Xa(m,a),d),y:o.parse(Xa(m,l),d)};return u}getParsed(e){return this._cachedMeta._parsed[e]}getDataElement(e){return this._cachedMeta.data[e]}applyStack(e,n,r){const i=this.chart,s=this._cachedMeta,o=n[e.axis],a={keys:kS(i,!0),values:n._stacks[e.axis]._visualValues};return V2(a,o,s.index,{mode:r})}updateRangeFromParsed(e,n,r,i){const s=r[n.axis];let o=s===null?NaN:s;const a=i&&r._stacks[n.axis];i&&a&&(i.values=a,o=V2(i,s,this._cachedMeta.index)),e.min=Math.min(e.min,o),e.max=Math.max(e.max,o)}getMinMax(e,n){const r=this._cachedMeta,i=r._parsed,s=r._sorted&&e===r.iScale,o=i.length,a=this._getOtherScale(e),l=z9(n,r,this.chart),u={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:h,max:f}=M9(a);let d,m;function _(){m=i[d];const y=m[a.axis];return!st(m[e.axis])||h>y||f<y}for(d=0;d<o&&!(!_()&&(this.updateRangeFromParsed(u,e,m,l),s));++d);if(s){for(d=o-1;d>=0;--d)if(!_()){this.updateRangeFromParsed(u,e,m,l);break}}return u}getAllParsedValues(e){const n=this._cachedMeta._parsed,r=[];let i,s,o;for(i=0,s=n.length;i<s;++i)o=n[i][e.axis],st(o)&&r.push(o);return r}getMaxOverflow(){return!1}getLabelAndValue(e){const n=this._cachedMeta,r=n.iScale,i=n.vScale,s=this.getParsed(e);return{label:r?""+r.getLabelForValue(s[r.axis]):"",value:i?""+i.getLabelForValue(s[i.axis]):""}}_update(e){const n=this._cachedMeta;this.update(e||"default"),n._clip=L9(be(this.options.clip,k9(n.xScale,n.yScale,this.getMaxOverflow())))}update(e){}draw(){const e=this._ctx,n=this.chart,r=this._cachedMeta,i=r.data||[],s=n.chartArea,o=[],a=this._drawStart||0,l=this._drawCount||i.length-a,u=this.options.drawActiveElementsOnTop;let h;for(r.dataset&&r.dataset.draw(e,s,a,l),h=a;h<a+l;++h){const f=i[h];f.hidden||(f.active&&u?o.push(f):f.draw(e,s))}for(h=0;h<o.length;++h)o[h].draw(e,s)}getStyle(e,n){const r=n?"active":"default";return e===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(r):this.resolveDataElementOptions(e||0,r)}getContext(e,n,r){const i=this.getDataset();let s;if(e>=0&&e<this._cachedMeta.data.length){const o=this._cachedMeta.data[e];s=o.$context||(o.$context=F9(this.getContext(),e,o)),s.parsed=this.getParsed(e),s.raw=i.data[e],s.index=s.dataIndex=e}else s=this.$context||(this.$context=V9(this.chart.getContext(),this.index)),s.dataset=i,s.index=s.datasetIndex=this.index;return s.active=!!n,s.mode=r,s}resolveDatasetElementOptions(e){return this._resolveElementOptions(this.datasetElementType.id,e)}resolveDataElementOptions(e,n){return this._resolveElementOptions(this.dataElementType.id,n,e)}_resolveElementOptions(e,n="default",r){const i=n==="active",s=this._cachedDataOpts,o=e+"-"+n,a=s[o],l=this.enableOptionSharing&&Vc(r);if(a)return j2(a,l);const u=this.chart.config,h=u.datasetElementScopeKeys(this._type,e),f=i?[`${e}Hover`,"hover",e,""]:[e,""],d=u.getOptionScopes(this.getDataset(),h),m=Object.keys(ot.elements[e]),_=()=>this.getContext(r,i,n),y=u.resolveNamedOptions(d,m,_,f);return y.$shared&&(y.$shared=l,s[o]=Object.freeze(j2(y,l))),y}_resolveAnimations(e,n,r){const i=this.chart,s=this._cachedDataOpts,o=`animation-${n}`,a=s[o];if(a)return a;let l;if(i.options.animation!==!1){const h=this.chart.config,f=h.datasetAnimationScopeKeys(this._type,n),d=h.getOptionScopes(this.getDataset(),f);l=h.createResolver(d,this.getContext(e,r,n))}const u=new PS(i,l&&l.animations);return l&&l._cacheable&&(s[o]=Object.freeze(u)),u}getSharedOptions(e){if(e.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},e))}includeOptions(e,n){return!n||gd(e)||this.chart._animationsDisabled}_getSharedOptions(e,n){const r=this.resolveDataElementOptions(e,n),i=this._sharedOptions,s=this.getSharedOptions(r),o=this.includeOptions(n,s)||s!==i;return this.updateSharedOptions(s,n,r),{sharedOptions:s,includeOptions:o}}updateElement(e,n,r,i){gd(i)?Object.assign(e,r):this._resolveAnimations(n,i).update(e,r)}updateSharedOptions(e,n,r){e&&!gd(n)&&this._resolveAnimations(void 0,n).update(e,r)}_setStyle(e,n,r,i){e.active=i;const s=this.getStyle(n,i);this._resolveAnimations(n,r,i).update(e,{options:!i&&this.getSharedOptions(s)||s})}removeHoverStyle(e,n,r){this._setStyle(e,r,"active",!1)}setHoverStyle(e,n,r){this._setStyle(e,r,"active",!0)}_removeDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!1)}_setDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!0)}_resyncElements(e){const n=this._data,r=this._cachedMeta.data;for(const[a,l,u]of this._syncList)this[a](l,u);this._syncList=[];const i=r.length,s=n.length,o=Math.min(s,i);o&&this.parse(0,o),s>i?this._insertElements(i,s-i,e):s<i&&this._removeElements(s,i-s)}_insertElements(e,n,r=!0){const i=this._cachedMeta,s=i.data,o=e+n;let a;const l=u=>{for(u.length+=n,a=u.length-1;a>=o;a--)u[a]=u[a-n]};for(l(s),a=e;a<o;++a)s[a]=new this.dataElementType;this._parsing&&l(i._parsed),this.parse(e,n),r&&this.updateElements(s,e,n,"reset")}updateElements(e,n,r,i){}_removeElements(e,n){const r=this._cachedMeta;if(this._parsing){const i=r._parsed.splice(e,n);r._stacked&&Yo(r,i)}r.data.splice(e,n)}_sync(e){if(this._parsing)this._syncList.push(e);else{const[n,r,i]=e;this[n](r,i)}this.chart._dataChanges.push([this.index,...e])}_onDataPush(){const e=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-e,e])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(e,n){n&&this._sync(["_removeElements",e,n]);const r=arguments.length-2;r&&this._sync(["_insertElements",e,r])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}pe(xa,"defaults",{}),pe(xa,"datasetElementType",null),pe(xa,"dataElementType",null);class Xu extends xa{getLabelAndValue(e){const n=this._cachedMeta.vScale,r=this.getParsed(e);return{label:n.getLabels()[e],value:""+n.getLabelForValue(r[n.axis])}}parseObjectData(e,n,r,i){return t9.bind(this)(e,n,r,i)}update(e){const n=this._cachedMeta,r=n.dataset,i=n.data||[],s=n.iScale.getLabels();if(r.points=i,e!=="resize"){const o=this.resolveDatasetElementOptions(e);this.options.showLine||(o.borderWidth=0);const a={_loop:!0,_fullLoop:s.length===i.length,options:o};this.updateElement(r,void 0,a,e)}this.updateElements(i,0,i.length,e)}updateElements(e,n,r,i){const s=this._cachedMeta.rScale,o=i==="reset";for(let a=n;a<n+r;a++){const l=e[a],u=this.resolveDataElementOptions(a,l.active?"active":i),h=s.getPointPositionForValue(a,this.getParsed(a).r),f=o?s.xCenter:h.x,d=o?s.yCenter:h.y,m={x:f,y:d,angle:h.angle,skip:isNaN(f)||isNaN(d),options:u};this.updateElement(l,a,m,i)}}}pe(Xu,"id","radar"),pe(Xu,"defaults",{datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}}),pe(Xu,"overrides",{aspectRatio:1,scales:{r:{type:"radialLinear"}}});function Ii(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class Jg{constructor(e){pe(this,"options");this.options=e||{}}static override(e){Object.assign(Jg.prototype,e)}init(){}formats(){return Ii()}parse(){return Ii()}format(){return Ii()}add(){return Ii()}diff(){return Ii()}startOf(){return Ii()}endOf(){return Ii()}}var j9={_date:Jg};function B9(t,e,n,r){const{controller:i,data:s,_sorted:o}=t,a=i._cachedMeta.iScale,l=t.dataset&&t.dataset.options?t.dataset.options.spanGaps:null;if(a&&e===a.axis&&e!=="r"&&o&&s.length){const u=a._reversePixels?vk:Hp;if(r){if(i._sharedOptions){const h=s[0],f=typeof h.getRange=="function"&&h.getRange(e);if(f){const d=u(s,e,n-f),m=u(s,e,n+f);return{lo:d.lo,hi:m.hi}}}}else{const h=u(s,e,n);if(l){const{vScale:f}=i._cachedMeta,{_parsed:d}=t,m=d.slice(0,h.lo+1).reverse().findIndex(y=>!We(y[f.axis]));h.lo-=Math.max(0,m);const _=d.slice(h.hi).findIndex(y=>!We(y[f.axis]));h.hi+=Math.max(0,_)}return h}}return{lo:0,hi:s.length-1}}function wl(t,e,n,r,i){const s=t.getSortedVisibleDatasetMetas(),o=n[e];for(let a=0,l=s.length;a<l;++a){const{index:u,data:h}=s[a],{lo:f,hi:d}=B9(s[a],e,o,i);for(let m=f;m<=d;++m){const _=h[m];_.skip||r(_,u,m)}}}function $9(t){const e=t.indexOf("x")!==-1,n=t.indexOf("y")!==-1;return function(r,i){const s=e?Math.abs(r.x-i.x):0,o=n?Math.abs(r.y-i.y):0;return Math.sqrt(Math.pow(s,2)+Math.pow(o,2))}}function _d(t,e,n,r,i){const s=[];return!i&&!t.isPointInArea(e)||wl(t,n,e,function(a,l,u){!i&&!cr(a,t.chartArea,0)||a.inRange(e.x,e.y,r)&&s.push({element:a,datasetIndex:l,index:u})},!0),s}function U9(t,e,n,r){let i=[];function s(o,a,l){const{startAngle:u,endAngle:h}=o.getProps(["startAngle","endAngle"],r),{angle:f}=gk(o,{x:e.x,y:e.y});fS(f,u,h)&&i.push({element:o,datasetIndex:a,index:l})}return wl(t,n,e,s),i}function H9(t,e,n,r,i,s){let o=[];const a=$9(n);let l=Number.POSITIVE_INFINITY;function u(h,f,d){const m=h.inRange(e.x,e.y,i);if(r&&!m)return;const _=h.getCenterPoint(i);if(!(!!s||t.isPointInArea(_))&&!m)return;const E=a(e,_);E<l?(o=[{element:h,datasetIndex:f,index:d}],l=E):E===l&&o.push({element:h,datasetIndex:f,index:d})}return wl(t,n,e,u),o}function yd(t,e,n,r,i,s){return!s&&!t.isPointInArea(e)?[]:n==="r"&&!r?U9(t,e,n,i):H9(t,e,n,r,i,s)}function B2(t,e,n,r,i){const s=[],o=n==="x"?"inXRange":"inYRange";let a=!1;return wl(t,n,e,(l,u,h)=>{l[o]&&l[o](e[n],i)&&(s.push({element:l,datasetIndex:u,index:h}),a=a||l.inRange(e.x,e.y,i))}),r&&!a?[]:s}var W9={evaluateInteractionItems:wl,modes:{index(t,e,n,r){const i=Pi(e,t),s=n.axis||"x",o=n.includeInvisible||!1,a=n.intersect?_d(t,i,s,r,o):yd(t,i,s,!1,r,o),l=[];return a.length?(t.getSortedVisibleDatasetMetas().forEach(u=>{const h=a[0].index,f=u.data[h];f&&!f.skip&&l.push({element:f,datasetIndex:u.index,index:h})}),l):[]},dataset(t,e,n,r){const i=Pi(e,t),s=n.axis||"xy",o=n.includeInvisible||!1;let a=n.intersect?_d(t,i,s,r,o):yd(t,i,s,!1,r,o);if(a.length>0){const l=a[0].datasetIndex,u=t.getDatasetMeta(l).data;a=[];for(let h=0;h<u.length;++h)a.push({element:u[h],datasetIndex:l,index:h})}return a},point(t,e,n,r){const i=Pi(e,t),s=n.axis||"xy",o=n.includeInvisible||!1;return _d(t,i,s,r,o)},nearest(t,e,n,r){const i=Pi(e,t),s=n.axis||"xy",o=n.includeInvisible||!1;return yd(t,i,s,n.intersect,r,o)},x(t,e,n,r){const i=Pi(e,t);return B2(t,i,"x",n.intersect,r)},y(t,e,n,r){const i=Pi(e,t);return B2(t,i,"y",n.intersect,r)}}};const LS=["left","top","right","bottom"];function Xo(t,e){return t.filter(n=>n.pos===e)}function $2(t,e){return t.filter(n=>LS.indexOf(n.pos)===-1&&n.box.axis===e)}function Jo(t,e){return t.sort((n,r)=>{const i=e?r:n,s=e?n:r;return i.weight===s.weight?i.index-s.index:i.weight-s.weight})}function q9(t){const e=[];let n,r,i,s,o,a;for(n=0,r=(t||[]).length;n<r;++n)i=t[n],{position:s,options:{stack:o,stackWeight:a=1}}=i,e.push({index:n,box:i,pos:s,horizontal:i.isHorizontal(),weight:i.weight,stack:o&&s+o,stackWeight:a});return e}function K9(t){const e={};for(const n of t){const{stack:r,pos:i,stackWeight:s}=n;if(!r||!LS.includes(i))continue;const o=e[r]||(e[r]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=s}return e}function G9(t,e){const n=K9(t),{vBoxMaxWidth:r,hBoxMaxHeight:i}=e;let s,o,a;for(s=0,o=t.length;s<o;++s){a=t[s];const{fullSize:l}=a.box,u=n[a.stack],h=u&&a.stackWeight/u.weight;a.horizontal?(a.width=h?h*r:l&&e.availableWidth,a.height=i):(a.width=r,a.height=h?h*i:l&&e.availableHeight)}return n}function Q9(t){const e=q9(t),n=Jo(e.filter(u=>u.box.fullSize),!0),r=Jo(Xo(e,"left"),!0),i=Jo(Xo(e,"right")),s=Jo(Xo(e,"top"),!0),o=Jo(Xo(e,"bottom")),a=$2(e,"x"),l=$2(e,"y");return{fullSize:n,leftAndTop:r.concat(s),rightAndBottom:i.concat(l).concat(o).concat(a),chartArea:Xo(e,"chartArea"),vertical:r.concat(i).concat(l),horizontal:s.concat(o).concat(a)}}function U2(t,e,n,r){return Math.max(t[n],e[n])+Math.max(t[r],e[r])}function OS(t,e){t.top=Math.max(t.top,e.top),t.left=Math.max(t.left,e.left),t.bottom=Math.max(t.bottom,e.bottom),t.right=Math.max(t.right,e.right)}function Y9(t,e,n,r){const{pos:i,box:s}=n,o=t.maxPadding;if(!Re(i)){n.size&&(t[i]-=n.size);const f=r[n.stack]||{size:0,count:1};f.size=Math.max(f.size,n.horizontal?s.height:s.width),n.size=f.size/f.count,t[i]+=n.size}s.getPadding&&OS(o,s.getPadding());const a=Math.max(0,e.outerWidth-U2(o,t,"left","right")),l=Math.max(0,e.outerHeight-U2(o,t,"top","bottom")),u=a!==t.w,h=l!==t.h;return t.w=a,t.h=l,n.horizontal?{same:u,other:h}:{same:h,other:u}}function X9(t){const e=t.maxPadding;function n(r){const i=Math.max(e[r]-t[r],0);return t[r]+=i,i}t.y+=n("top"),t.x+=n("left"),n("right"),n("bottom")}function J9(t,e){const n=e.maxPadding;function r(i){const s={left:0,top:0,right:0,bottom:0};return i.forEach(o=>{s[o]=Math.max(e[o],n[o])}),s}return r(t?["left","right"]:["top","bottom"])}function oa(t,e,n,r){const i=[];let s,o,a,l,u,h;for(s=0,o=t.length,u=0;s<o;++s){a=t[s],l=a.box,l.update(a.width||e.w,a.height||e.h,J9(a.horizontal,e));const{same:f,other:d}=Y9(e,n,a,r);u|=f&&i.length,h=h||d,l.fullSize||i.push(a)}return u&&oa(i,e,n,r)||h}function yu(t,e,n,r,i){t.top=n,t.left=e,t.right=e+r,t.bottom=n+i,t.width=r,t.height=i}function H2(t,e,n,r){const i=n.padding;let{x:s,y:o}=e;for(const a of t){const l=a.box,u=r[a.stack]||{count:1,placed:0,weight:1},h=a.stackWeight/u.weight||1;if(a.horizontal){const f=e.w*h,d=u.size||l.height;Vc(u.start)&&(o=u.start),l.fullSize?yu(l,i.left,o,n.outerWidth-i.right-i.left,d):yu(l,e.left+u.placed,o,f,d),u.start=o,u.placed+=f,o=l.bottom}else{const f=e.h*h,d=u.size||l.width;Vc(u.start)&&(s=u.start),l.fullSize?yu(l,s,i.top,d,n.outerHeight-i.bottom-i.top):yu(l,s,e.top+u.placed,d,f),u.start=s,u.placed+=f,s=l.right}}e.x=s,e.y=o}var jr={addBox(t,e){t.boxes||(t.boxes=[]),e.fullSize=e.fullSize||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw(n){e.draw(n)}}]},t.boxes.push(e)},removeBox(t,e){const n=t.boxes?t.boxes.indexOf(e):-1;n!==-1&&t.boxes.splice(n,1)},configure(t,e,n){e.fullSize=n.fullSize,e.position=n.position,e.weight=n.weight},update(t,e,n,r){if(!t)return;const i=Wt(t.options.layout.padding),s=Math.max(e-i.width,0),o=Math.max(n-i.height,0),a=Q9(t.boxes),l=a.vertical,u=a.horizontal;Me(t.boxes,y=>{typeof y.beforeLayout=="function"&&y.beforeLayout()});const h=l.reduce((y,E)=>E.box.options&&E.box.options.display===!1?y:y+1,0)||1,f=Object.freeze({outerWidth:e,outerHeight:n,padding:i,availableWidth:s,availableHeight:o,vBoxMaxWidth:s/2/h,hBoxMaxHeight:o/2}),d=Object.assign({},i);OS(d,Wt(r));const m=Object.assign({maxPadding:d,w:s,h:o,x:i.left,y:i.top},i),_=G9(l.concat(u),f);oa(a.fullSize,m,f,_),oa(l,m,f,_),oa(u,m,f,_)&&oa(l,m,f,_),X9(m),H2(a.leftAndTop,m,f,_),m.x+=m.w,m.y+=m.h,H2(a.rightAndBottom,m,f,_),t.chartArea={left:m.left,top:m.top,right:m.left+m.w,bottom:m.top+m.h,height:m.h,width:m.w},Me(a.chartArea,y=>{const E=y.box;Object.assign(E,t.chartArea),E.update(m.w,m.h,{left:0,top:0,right:0,bottom:0})})}};class DS{acquireContext(e,n){}releaseContext(e){return!1}addEventListener(e,n,r){}removeEventListener(e,n,r){}getDevicePixelRatio(){return 1}getMaximumSize(e,n,r,i){return n=Math.max(0,n||e.width),r=r||e.height,{width:n,height:Math.max(0,i?Math.floor(n/i):r)}}isAttached(e){return!0}updateConfig(e){}}class Z9 extends DS{acquireContext(e){return e&&e.getContext&&e.getContext("2d")||null}updateConfig(e){e.options.animation=!1}}const Ju="$chartjs",eL={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},W2=t=>t===null||t==="";function tL(t,e){const n=t.style,r=t.getAttribute("height"),i=t.getAttribute("width");if(t[Ju]={initial:{height:r,width:i,style:{display:n.display,height:n.height,width:n.width}}},n.display=n.display||"block",n.boxSizing=n.boxSizing||"border-box",W2(i)){const s=k2(t,"width");s!==void 0&&(t.width=s)}if(W2(r))if(t.style.height==="")t.height=t.width/(e||2);else{const s=k2(t,"height");s!==void 0&&(t.height=s)}return t}const MS=m9?{passive:!0}:!1;function nL(t,e,n){t&&t.addEventListener(e,n,MS)}function rL(t,e,n){t&&t.canvas&&t.canvas.removeEventListener(e,n,MS)}function iL(t,e){const n=eL[t.type]||t.type,{x:r,y:i}=Pi(t,e);return{type:n,chart:e,native:t,x:r!==void 0?r:null,y:i!==void 0?i:null}}function Uc(t,e){for(const n of t)if(n===e||n.contains(e))return!0}function sL(t,e,n){const r=t.canvas,i=new MutationObserver(s=>{let o=!1;for(const a of s)o=o||Uc(a.addedNodes,r),o=o&&!Uc(a.removedNodes,r);o&&n()});return i.observe(document,{childList:!0,subtree:!0}),i}function oL(t,e,n){const r=t.canvas,i=new MutationObserver(s=>{let o=!1;for(const a of s)o=o||Uc(a.removedNodes,r),o=o&&!Uc(a.addedNodes,r);o&&n()});return i.observe(document,{childList:!0,subtree:!0}),i}const Ja=new Map;let q2=0;function NS(){const t=window.devicePixelRatio;t!==q2&&(q2=t,Ja.forEach((e,n)=>{n.currentDevicePixelRatio!==t&&e()}))}function aL(t,e){Ja.size||window.addEventListener("resize",NS),Ja.set(t,e)}function lL(t){Ja.delete(t),Ja.size||window.removeEventListener("resize",NS)}function uL(t,e,n){const r=t.canvas,i=r&&Xg(r);if(!i)return;const s=mS((a,l)=>{const u=i.clientWidth;n(a,l),u<i.clientWidth&&n()},window),o=new ResizeObserver(a=>{const l=a[0],u=l.contentRect.width,h=l.contentRect.height;u===0&&h===0||s(u,h)});return o.observe(i),aL(t,s),o}function vd(t,e,n){n&&n.disconnect(),e==="resize"&&lL(t)}function cL(t,e,n){const r=t.canvas,i=mS(s=>{t.ctx!==null&&n(iL(s,t))},t);return nL(r,e,i),i}class hL extends DS{acquireContext(e,n){const r=e&&e.getContext&&e.getContext("2d");return r&&r.canvas===e?(tL(e,n),r):null}releaseContext(e){const n=e.canvas;if(!n[Ju])return!1;const r=n[Ju].initial;["height","width"].forEach(s=>{const o=r[s];We(o)?n.removeAttribute(s):n.setAttribute(s,o)});const i=r.style||{};return Object.keys(i).forEach(s=>{n.style[s]=i[s]}),n.width=n.width,delete n[Ju],!0}addEventListener(e,n,r){this.removeEventListener(e,n);const i=e.$proxies||(e.$proxies={}),o={attach:sL,detach:oL,resize:uL}[n]||cL;i[n]=o(e,n,r)}removeEventListener(e,n){const r=e.$proxies||(e.$proxies={}),i=r[n];if(!i)return;({attach:vd,detach:vd,resize:vd}[n]||rL)(e,n,i),r[n]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(e,n,r,i){return p9(e,n,r,i)}isAttached(e){const n=e&&Xg(e);return!!(n&&n.isConnected)}}function fL(t){return!Yg()||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas?Z9:hL}var Ou;let vo=(Ou=class{constructor(){pe(this,"x");pe(this,"y");pe(this,"active",!1);pe(this,"options");pe(this,"$animations")}tooltipPosition(e){const{x:n,y:r}=this.getProps(["x","y"],e);return{x:n,y:r}}hasValue(){return zc(this.x)&&zc(this.y)}getProps(e,n){const r=this.$animations;if(!n||!r)return this;const i={};return e.forEach(s=>{i[s]=r[s]&&r[s].active()?r[s]._to:this[s]}),i}},pe(Ou,"defaults",{}),pe(Ou,"defaultRoutes"),Ou);function dL(t,e){const n=t.options.ticks,r=pL(t),i=Math.min(n.maxTicksLimit||r,r),s=n.major.enabled?gL(e):[],o=s.length,a=s[0],l=s[o-1],u=[];if(o>i)return _L(e,u,s,o/i),u;const h=mL(s,e,i);if(o>0){let f,d;const m=o>1?Math.round((l-a)/(o-1)):null;for(vu(e,u,h,We(m)?0:a-m,a),f=0,d=o-1;f<d;f++)vu(e,u,h,s[f],s[f+1]);return vu(e,u,h,l,We(m)?e.length:l+m),u}return vu(e,u,h),u}function pL(t){const e=t.options.offset,n=t._tickSize(),r=t._length/n+(e?0:1),i=t._maxLength/n;return Math.floor(Math.min(r,i))}function mL(t,e,n){const r=yL(t),i=e.length/n;if(!r)return Math.max(i,1);const s=dk(r);for(let o=0,a=s.length-1;o<a;o++){const l=s[o];if(l>i)return l}return Math.max(i,1)}function gL(t){const e=[];let n,r;for(n=0,r=t.length;n<r;n++)t[n].major&&e.push(n);return e}function _L(t,e,n,r){let i=0,s=n[0],o;for(r=Math.ceil(r),o=0;o<t.length;o++)o===s&&(e.push(t[o]),i++,s=n[i*r])}function vu(t,e,n,r,i){const s=be(r,0),o=Math.min(be(i,t.length),t.length);let a=0,l,u,h;for(n=Math.ceil(n),i&&(l=i-r,n=l/Math.floor(l/n)),h=s;h<0;)a++,h=Math.round(s+a*n);for(u=Math.max(s,0);u<o;u++)u===h&&(e.push(t[u]),a++,h=Math.round(s+a*n))}function yL(t){const e=t.length;let n,r;if(e<2)return!1;for(r=t[0],n=1;n<e;++n)if(t[n]-t[n-1]!==r)return!1;return r}const vL=t=>t==="left"?"right":t==="right"?"left":t,K2=(t,e,n)=>e==="top"||e==="left"?t[e]+n:t[e]-n,G2=(t,e)=>Math.min(e||t,t);function Q2(t,e){const n=[],r=t.length/e,i=t.length;let s=0;for(;s<i;s+=r)n.push(t[Math.floor(s)]);return n}function wL(t,e,n){const r=t.ticks.length,i=Math.min(e,r-1),s=t._startPixel,o=t._endPixel,a=1e-6;let l=t.getPixelForTick(i),u;if(!(n&&(r===1?u=Math.max(l-s,o-l):e===0?u=(t.getPixelForTick(1)-l)/2:u=(l-t.getPixelForTick(i-1))/2,l+=i<e?u:-u,l<s-a||l>o+a)))return l}function EL(t,e){Me(t,n=>{const r=n.gc,i=r.length/2;let s;if(i>e){for(s=0;s<i;++s)delete n.data[r[s]];r.splice(0,i)}})}function Zo(t){return t.drawTicks?t.tickLength:0}function Y2(t,e){if(!t.display)return 0;const n=xt(t.font,e),r=Wt(t.padding);return(it(t.text)?t.text.length:1)*n.lineHeight+r.height}function SL(t,e){return gi(t,{scale:e,type:"scale"})}function TL(t,e,n){return gi(t,{tick:n,index:e,type:"tick"})}function bL(t,e,n){let r=gS(t);return(n&&e!=="right"||!n&&e==="right")&&(r=vL(r)),r}function xL(t,e,n,r){const{top:i,left:s,bottom:o,right:a,chart:l}=t,{chartArea:u,scales:h}=l;let f=0,d,m,_;const y=o-i,E=a-s;if(t.isHorizontal()){if(m=an(r,s,a),Re(n)){const w=Object.keys(n)[0],v=n[w];_=h[w].getPixelForValue(v)+y-e}else n==="center"?_=(u.bottom+u.top)/2+y-e:_=K2(t,n,e);d=a-s}else{if(Re(n)){const w=Object.keys(n)[0],v=n[w];m=h[w].getPixelForValue(v)-E+e}else n==="center"?m=(u.left+u.right)/2-E+e:m=K2(t,n,e);_=an(r,o,i),f=n==="left"?-fn:fn}return{titleX:m,titleY:_,maxWidth:d,rotation:f}}class wo extends vo{constructor(e){super(),this.id=e.id,this.type=e.type,this.options=void 0,this.ctx=e.ctx,this.chart=e.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(e){this.options=e.setContext(this.getContext()),this.axis=e.axis,this._userMin=this.parse(e.min),this._userMax=this.parse(e.max),this._suggestedMin=this.parse(e.suggestedMin),this._suggestedMax=this.parse(e.suggestedMax)}parse(e,n){return e}getUserBounds(){let{_userMin:e,_userMax:n,_suggestedMin:r,_suggestedMax:i}=this;return e=ln(e,Number.POSITIVE_INFINITY),n=ln(n,Number.NEGATIVE_INFINITY),r=ln(r,Number.POSITIVE_INFINITY),i=ln(i,Number.NEGATIVE_INFINITY),{min:ln(e,r),max:ln(n,i),minDefined:st(e),maxDefined:st(n)}}getMinMax(e){let{min:n,max:r,minDefined:i,maxDefined:s}=this.getUserBounds(),o;if(i&&s)return{min:n,max:r};const a=this.getMatchingVisibleMetas();for(let l=0,u=a.length;l<u;++l)o=a[l].controller.getMinMax(this,e),i||(n=Math.min(n,o.min)),s||(r=Math.max(r,o.max));return n=s&&n>r?r:n,r=i&&n>r?n:r,{min:ln(n,ln(r,n)),max:ln(r,ln(n,r))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const e=this.chart.data;return this.options.labels||(this.isHorizontal()?e.xLabels:e.yLabels)||e.labels||[]}getLabelItems(e=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(e))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){ze(this.options.beforeUpdate,[this])}update(e,n,r){const{beginAtZero:i,grace:s,ticks:o}=this.options,a=o.sampleSize;this.beforeUpdate(),this.maxWidth=e,this.maxHeight=n,this._margins=r=Object.assign({left:0,right:0,top:0,bottom:0},r),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+r.left+r.right:this.height+r.top+r.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=Wk(this,s,i),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const l=a<this.ticks.length;this._convertTicksToLabels(l?Q2(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||o.source==="auto")&&(this.ticks=dL(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),l&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let e=this.options.reverse,n,r;this.isHorizontal()?(n=this.left,r=this.right):(n=this.top,r=this.bottom,e=!e),this._startPixel=n,this._endPixel=r,this._reversePixels=e,this._length=r-n,this._alignToPixels=this.options.alignToPixels}afterUpdate(){ze(this.options.afterUpdate,[this])}beforeSetDimensions(){ze(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){ze(this.options.afterSetDimensions,[this])}_callHooks(e){this.chart.notifyPlugins(e,this.getContext()),ze(this.options[e],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){ze(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(e){const n=this.options.ticks;let r,i,s;for(r=0,i=e.length;r<i;r++)s=e[r],s.label=ze(n.callback,[s.value,r,e],this)}afterTickToLabelConversion(){ze(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){ze(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const e=this.options,n=e.ticks,r=G2(this.ticks.length,e.ticks.maxTicksLimit),i=n.minRotation||0,s=n.maxRotation;let o=i,a,l,u;if(!this._isVisible()||!n.display||i>=s||r<=1||!this.isHorizontal()){this.labelRotation=i;return}const h=this._getLabelSizes(),f=h.widest.width,d=h.highest.height,m=ur(this.chart.width-f,0,this.maxWidth);a=e.offset?this.maxWidth/r:m/(r-1),f+6>a&&(a=m/(r-(e.offset?.5:1)),l=this.maxHeight-Zo(e.grid)-n.padding-Y2(e.title,this.chart.options.font),u=Math.sqrt(f*f+d*d),o=Ug(Math.min(Math.asin(ur((h.highest.height+6)/a,-1,1)),Math.asin(ur(l/u,-1,1))-Math.asin(ur(d/u,-1,1)))),o=Math.max(i,Math.min(s,o))),this.labelRotation=o}afterCalculateLabelRotation(){ze(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){ze(this.options.beforeFit,[this])}fit(){const e={width:0,height:0},{chart:n,options:{ticks:r,title:i,grid:s}}=this,o=this._isVisible(),a=this.isHorizontal();if(o){const l=Y2(i,n.options.font);if(a?(e.width=this.maxWidth,e.height=Zo(s)+l):(e.height=this.maxHeight,e.width=Zo(s)+l),r.display&&this.ticks.length){const{first:u,last:h,widest:f,highest:d}=this._getLabelSizes(),m=r.padding*2,_=zr(this.labelRotation),y=Math.cos(_),E=Math.sin(_);if(a){const w=r.mirror?0:E*f.width+y*d.height;e.height=Math.min(this.maxHeight,e.height+w+m)}else{const w=r.mirror?0:y*f.width+E*d.height;e.width=Math.min(this.maxWidth,e.width+w+m)}this._calculatePadding(u,h,E,y)}}this._handleMargins(),a?(this.width=this._length=n.width-this._margins.left-this._margins.right,this.height=e.height):(this.width=e.width,this.height=this._length=n.height-this._margins.top-this._margins.bottom)}_calculatePadding(e,n,r,i){const{ticks:{align:s,padding:o},position:a}=this.options,l=this.labelRotation!==0,u=a!=="top"&&this.axis==="x";if(this.isHorizontal()){const h=this.getPixelForTick(0)-this.left,f=this.right-this.getPixelForTick(this.ticks.length-1);let d=0,m=0;l?u?(d=i*e.width,m=r*n.height):(d=r*e.height,m=i*n.width):s==="start"?m=n.width:s==="end"?d=e.width:s!=="inner"&&(d=e.width/2,m=n.width/2),this.paddingLeft=Math.max((d-h+o)*this.width/(this.width-h),0),this.paddingRight=Math.max((m-f+o)*this.width/(this.width-f),0)}else{let h=n.height/2,f=e.height/2;s==="start"?(h=0,f=e.height):s==="end"&&(h=n.height,f=0),this.paddingTop=h+o,this.paddingBottom=f+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){ze(this.options.afterFit,[this])}isHorizontal(){const{axis:e,position:n}=this.options;return n==="top"||n==="bottom"||e==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(e){this.beforeTickToLabelConversion(),this.generateTickLabels(e);let n,r;for(n=0,r=e.length;n<r;n++)We(e[n].label)&&(e.splice(n,1),r--,n--);this.afterTickToLabelConversion()}_getLabelSizes(){let e=this._labelSizes;if(!e){const n=this.options.ticks.sampleSize;let r=this.ticks;n<r.length&&(r=Q2(r,n)),this._labelSizes=e=this._computeLabelSizes(r,r.length,this.options.ticks.maxTicksLimit)}return e}_computeLabelSizes(e,n,r){const{ctx:i,_longestTextCache:s}=this,o=[],a=[],l=Math.floor(n/G2(n,r));let u=0,h=0,f,d,m,_,y,E,w,v,b,L,O;for(f=0;f<n;f+=l){if(_=e[f].label,y=this._resolveTickFontOptions(f),i.font=E=y.string,w=s[E]=s[E]||{data:{},gc:[]},v=y.lineHeight,b=L=0,!We(_)&&!it(_))b=jc(i,w.data,w.gc,b,_),L=v;else if(it(_))for(d=0,m=_.length;d<m;++d)O=_[d],!We(O)&&!it(O)&&(b=jc(i,w.data,w.gc,b,O),L+=v);o.push(b),a.push(L),u=Math.max(b,u),h=Math.max(L,h)}EL(s,n);const D=o.indexOf(u),x=a.indexOf(h),S=T=>({width:o[T]||0,height:a[T]||0});return{first:S(0),last:S(n-1),widest:S(D),highest:S(x),widths:o,heights:a}}getLabelForValue(e){return e}getPixelForValue(e,n){return NaN}getValueForPixel(e){}getPixelForTick(e){const n=this.ticks;return e<0||e>n.length-1?null:this.getPixelForValue(n[e].value)}getPixelForDecimal(e){this._reversePixels&&(e=1-e);const n=this._startPixel+e*this._length;return yk(this._alignToPixels?xi(this.chart,n,0):n)}getDecimalForPixel(e){const n=(e-this._startPixel)/this._length;return this._reversePixels?1-n:n}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:e,max:n}=this;return e<0&&n<0?n:e>0&&n>0?e:0}getContext(e){const n=this.ticks||[];if(e>=0&&e<n.length){const r=n[e];return r.$context||(r.$context=TL(this.getContext(),e,r))}return this.$context||(this.$context=SL(this.chart.getContext(),this))}_tickSize(){const e=this.options.ticks,n=zr(this.labelRotation),r=Math.abs(Math.cos(n)),i=Math.abs(Math.sin(n)),s=this._getLabelSizes(),o=e.autoSkipPadding||0,a=s?s.widest.width+o:0,l=s?s.highest.height+o:0;return this.isHorizontal()?l*r>a*i?a/r:l/i:l*i<a*r?l/r:a/i}_isVisible(){const e=this.options.display;return e!=="auto"?!!e:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(e){const n=this.axis,r=this.chart,i=this.options,{grid:s,position:o,border:a}=i,l=s.offset,u=this.isHorizontal(),f=this.ticks.length+(l?1:0),d=Zo(s),m=[],_=a.setContext(this.getContext()),y=_.display?_.width:0,E=y/2,w=function(de){return xi(r,de,y)};let v,b,L,O,D,x,S,T,I,C,P,A;if(o==="top")v=w(this.bottom),x=this.bottom-d,T=v-E,C=w(e.top)+E,A=e.bottom;else if(o==="bottom")v=w(this.top),C=e.top,A=w(e.bottom)-E,x=v+E,T=this.top+d;else if(o==="left")v=w(this.right),D=this.right-d,S=v-E,I=w(e.left)+E,P=e.right;else if(o==="right")v=w(this.left),I=e.left,P=w(e.right)-E,D=v+E,S=this.left+d;else if(n==="x"){if(o==="center")v=w((e.top+e.bottom)/2+.5);else if(Re(o)){const de=Object.keys(o)[0],Ee=o[de];v=w(this.chart.scales[de].getPixelForValue(Ee))}C=e.top,A=e.bottom,x=v+E,T=x+d}else if(n==="y"){if(o==="center")v=w((e.left+e.right)/2);else if(Re(o)){const de=Object.keys(o)[0],Ee=o[de];v=w(this.chart.scales[de].getPixelForValue(Ee))}D=v-E,S=D-d,I=e.left,P=e.right}const Z=be(i.ticks.maxTicksLimit,f),ce=Math.max(1,Math.ceil(f/Z));for(b=0;b<f;b+=ce){const de=this.getContext(b),Ee=s.setContext(de),Q=a.setContext(de),ne=Ee.lineWidth,oe=Ee.color,_e=Q.dash||[],ae=Q.dashOffset,M=Ee.tickWidth,z=Ee.tickColor,k=Ee.tickBorderDash||[],V=Ee.tickBorderDashOffset;L=wL(this,b,l),L!==void 0&&(O=xi(r,L,ne),u?D=S=I=P=O:x=T=C=A=O,m.push({tx1:D,ty1:x,tx2:S,ty2:T,x1:I,y1:C,x2:P,y2:A,width:ne,color:oe,borderDash:_e,borderDashOffset:ae,tickWidth:M,tickColor:z,tickBorderDash:k,tickBorderDashOffset:V}))}return this._ticksLength=f,this._borderValue=v,m}_computeLabelItems(e){const n=this.axis,r=this.options,{position:i,ticks:s}=r,o=this.isHorizontal(),a=this.ticks,{align:l,crossAlign:u,padding:h,mirror:f}=s,d=Zo(r.grid),m=d+h,_=f?-h:m,y=-zr(this.labelRotation),E=[];let w,v,b,L,O,D,x,S,T,I,C,P,A="middle";if(i==="top")D=this.bottom-_,x=this._getXAxisLabelAlignment();else if(i==="bottom")D=this.top+_,x=this._getXAxisLabelAlignment();else if(i==="left"){const ce=this._getYAxisLabelAlignment(d);x=ce.textAlign,O=ce.x}else if(i==="right"){const ce=this._getYAxisLabelAlignment(d);x=ce.textAlign,O=ce.x}else if(n==="x"){if(i==="center")D=(e.top+e.bottom)/2+m;else if(Re(i)){const ce=Object.keys(i)[0],de=i[ce];D=this.chart.scales[ce].getPixelForValue(de)+m}x=this._getXAxisLabelAlignment()}else if(n==="y"){if(i==="center")O=(e.left+e.right)/2-m;else if(Re(i)){const ce=Object.keys(i)[0],de=i[ce];O=this.chart.scales[ce].getPixelForValue(de)}x=this._getYAxisLabelAlignment(d).textAlign}n==="y"&&(l==="start"?A="top":l==="end"&&(A="bottom"));const Z=this._getLabelSizes();for(w=0,v=a.length;w<v;++w){b=a[w],L=b.label;const ce=s.setContext(this.getContext(w));S=this.getPixelForTick(w)+s.labelOffset,T=this._resolveTickFontOptions(w),I=T.lineHeight,C=it(L)?L.length:1;const de=C/2,Ee=ce.color,Q=ce.textStrokeColor,ne=ce.textStrokeWidth;let oe=x;o?(O=S,x==="inner"&&(w===v-1?oe=this.options.reverse?"left":"right":w===0?oe=this.options.reverse?"right":"left":oe="center"),i==="top"?u==="near"||y!==0?P=-C*I+I/2:u==="center"?P=-Z.highest.height/2-de*I+I:P=-Z.highest.height+I/2:u==="near"||y!==0?P=I/2:u==="center"?P=Z.highest.height/2-de*I:P=Z.highest.height-C*I,f&&(P*=-1),y!==0&&!ce.showLabelBackdrop&&(O+=I/2*Math.sin(y))):(D=S,P=(1-C)*I/2);let _e;if(ce.showLabelBackdrop){const ae=Wt(ce.backdropPadding),M=Z.heights[w],z=Z.widths[w];let k=P-ae.top,V=0-ae.left;switch(A){case"middle":k-=M/2;break;case"bottom":k-=M;break}switch(x){case"center":V-=z/2;break;case"right":V-=z;break;case"inner":w===v-1?V-=z:w>0&&(V-=z/2);break}_e={left:V,top:k,width:z+ae.width,height:M+ae.height,color:ce.backdropColor}}E.push({label:L,font:T,textOffset:P,options:{rotation:y,color:Ee,strokeColor:Q,strokeWidth:ne,textAlign:oe,textBaseline:A,translation:[O,D],backdrop:_e}})}return E}_getXAxisLabelAlignment(){const{position:e,ticks:n}=this.options;if(-zr(this.labelRotation))return e==="top"?"left":"right";let i="center";return n.align==="start"?i="left":n.align==="end"?i="right":n.align==="inner"&&(i="inner"),i}_getYAxisLabelAlignment(e){const{position:n,ticks:{crossAlign:r,mirror:i,padding:s}}=this.options,o=this._getLabelSizes(),a=e+s,l=o.widest.width;let u,h;return n==="left"?i?(h=this.right+s,r==="near"?u="left":r==="center"?(u="center",h+=l/2):(u="right",h+=l)):(h=this.right-a,r==="near"?u="right":r==="center"?(u="center",h-=l/2):(u="left",h=this.left)):n==="right"?i?(h=this.left+s,r==="near"?u="right":r==="center"?(u="center",h-=l/2):(u="left",h-=l)):(h=this.left+a,r==="near"?u="left":r==="center"?(u="center",h+=l/2):(u="right",h=this.right)):u="right",{textAlign:u,x:h}}_computeLabelArea(){if(this.options.ticks.mirror)return;const e=this.chart,n=this.options.position;if(n==="left"||n==="right")return{top:0,left:this.left,bottom:e.height,right:this.right};if(n==="top"||n==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:e.width}}drawBackground(){const{ctx:e,options:{backgroundColor:n},left:r,top:i,width:s,height:o}=this;n&&(e.save(),e.fillStyle=n,e.fillRect(r,i,s,o),e.restore())}getLineWidthForValue(e){const n=this.options.grid;if(!this._isVisible()||!n.display)return 0;const i=this.ticks.findIndex(s=>s.value===e);return i>=0?n.setContext(this.getContext(i)).lineWidth:0}drawGrid(e){const n=this.options.grid,r=this.ctx,i=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(e));let s,o;const a=(l,u,h)=>{!h.width||!h.color||(r.save(),r.lineWidth=h.width,r.strokeStyle=h.color,r.setLineDash(h.borderDash||[]),r.lineDashOffset=h.borderDashOffset,r.beginPath(),r.moveTo(l.x,l.y),r.lineTo(u.x,u.y),r.stroke(),r.restore())};if(n.display)for(s=0,o=i.length;s<o;++s){const l=i[s];n.drawOnChartArea&&a({x:l.x1,y:l.y1},{x:l.x2,y:l.y2},l),n.drawTicks&&a({x:l.tx1,y:l.ty1},{x:l.tx2,y:l.ty2},{color:l.tickColor,width:l.tickWidth,borderDash:l.tickBorderDash,borderDashOffset:l.tickBorderDashOffset})}}drawBorder(){const{chart:e,ctx:n,options:{border:r,grid:i}}=this,s=r.setContext(this.getContext()),o=r.display?s.width:0;if(!o)return;const a=i.setContext(this.getContext(0)).lineWidth,l=this._borderValue;let u,h,f,d;this.isHorizontal()?(u=xi(e,this.left,o)-o/2,h=xi(e,this.right,a)+a/2,f=d=l):(f=xi(e,this.top,o)-o/2,d=xi(e,this.bottom,a)+a/2,u=h=l),n.save(),n.lineWidth=s.width,n.strokeStyle=s.color,n.beginPath(),n.moveTo(u,f),n.lineTo(h,d),n.stroke(),n.restore()}drawLabels(e){if(!this.options.ticks.display)return;const r=this.ctx,i=this._computeLabelArea();i&&Uh(r,i);const s=this.getLabelItems(e);for(const o of s){const a=o.options,l=o.font,u=o.label,h=o.textOffset;Ys(r,u,0,h,l,a)}i&&Hh(r)}drawTitle(){const{ctx:e,options:{position:n,title:r,reverse:i}}=this;if(!r.display)return;const s=xt(r.font),o=Wt(r.padding),a=r.align;let l=s.lineHeight/2;n==="bottom"||n==="center"||Re(n)?(l+=o.bottom,it(r.text)&&(l+=s.lineHeight*(r.text.length-1))):l+=o.top;const{titleX:u,titleY:h,maxWidth:f,rotation:d}=xL(this,l,n,a);Ys(e,r.text,0,0,s,{color:r.color,maxWidth:f,rotation:d,textAlign:bL(a,n,i),textBaseline:"middle",translation:[u,h]})}draw(e){this._isVisible()&&(this.drawBackground(),this.drawGrid(e),this.drawBorder(),this.drawTitle(),this.drawLabels(e))}_layers(){const e=this.options,n=e.ticks&&e.ticks.z||0,r=be(e.grid&&e.grid.z,-1),i=be(e.border&&e.border.z,0);return!this._isVisible()||this.draw!==wo.prototype.draw?[{z:n,draw:s=>{this.draw(s)}}]:[{z:r,draw:s=>{this.drawBackground(),this.drawGrid(s),this.drawTitle()}},{z:i,draw:()=>{this.drawBorder()}},{z:n,draw:s=>{this.drawLabels(s)}}]}getMatchingVisibleMetas(e){const n=this.chart.getSortedVisibleDatasetMetas(),r=this.axis+"AxisID",i=[];let s,o;for(s=0,o=n.length;s<o;++s){const a=n[s];a[r]===this.id&&(!e||a.type===e)&&i.push(a)}return i}_resolveTickFontOptions(e){const n=this.options.ticks.setContext(this.getContext(e));return xt(n.font)}_maxDigits(){const e=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/e}}class wu{constructor(e,n,r){this.type=e,this.scope=n,this.override=r,this.items=Object.create(null)}isForType(e){return Object.prototype.isPrototypeOf.call(this.type.prototype,e.prototype)}register(e){const n=Object.getPrototypeOf(e);let r;AL(n)&&(r=this.register(n));const i=this.items,s=e.id,o=this.scope+"."+s;if(!s)throw new Error("class does not have id: "+e);return s in i||(i[s]=e,IL(e,o,r),this.override&&ot.override(e.id,e.overrides)),o}get(e){return this.items[e]}unregister(e){const n=this.items,r=e.id,i=this.scope;r in n&&delete n[r],i&&r in ot[i]&&(delete ot[i][r],this.override&&delete Gi[r])}}function IL(t,e,n){const r=Ya(Object.create(null),[n?ot.get(n):{},ot.get(e),t.defaults]);ot.set(e,r),t.defaultRoutes&&RL(e,t.defaultRoutes),t.descriptors&&ot.describe(e,t.descriptors)}function RL(t,e){Object.keys(e).forEach(n=>{const r=n.split("."),i=r.pop(),s=[t].concat(r).join("."),o=e[n].split("."),a=o.pop(),l=o.join(".");ot.route(s,i,l,a)})}function AL(t){return"id"in t&&"defaults"in t}class CL{constructor(){this.controllers=new wu(xa,"datasets",!0),this.elements=new wu(vo,"elements"),this.plugins=new wu(Object,"plugins"),this.scales=new wu(wo,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...e){this._each("register",e)}remove(...e){this._each("unregister",e)}addControllers(...e){this._each("register",e,this.controllers)}addElements(...e){this._each("register",e,this.elements)}addPlugins(...e){this._each("register",e,this.plugins)}addScales(...e){this._each("register",e,this.scales)}getController(e){return this._get(e,this.controllers,"controller")}getElement(e){return this._get(e,this.elements,"element")}getPlugin(e){return this._get(e,this.plugins,"plugin")}getScale(e){return this._get(e,this.scales,"scale")}removeControllers(...e){this._each("unregister",e,this.controllers)}removeElements(...e){this._each("unregister",e,this.elements)}removePlugins(...e){this._each("unregister",e,this.plugins)}removeScales(...e){this._each("unregister",e,this.scales)}_each(e,n,r){[...n].forEach(i=>{const s=r||this._getRegistryForType(i);r||s.isForType(i)||s===this.plugins&&i.id?this._exec(e,s,i):Me(i,o=>{const a=r||this._getRegistryForType(o);this._exec(e,a,o)})})}_exec(e,n,r){const i=$g(e);ze(r["before"+i],[],r),n[e](r),ze(r["after"+i],[],r)}_getRegistryForType(e){for(let n=0;n<this._typedRegistries.length;n++){const r=this._typedRegistries[n];if(r.isForType(e))return r}return this.plugins}_get(e,n,r){const i=n.get(e);if(i===void 0)throw new Error('"'+e+'" is not a registered '+r+".");return i}}var Un=new CL;class PL{constructor(){this._init=[]}notify(e,n,r,i){n==="beforeInit"&&(this._init=this._createDescriptors(e,!0),this._notify(this._init,e,"install"));const s=i?this._descriptors(e).filter(i):this._descriptors(e),o=this._notify(s,e,n,r);return n==="afterDestroy"&&(this._notify(s,e,"stop"),this._notify(this._init,e,"uninstall")),o}_notify(e,n,r,i){i=i||{};for(const s of e){const o=s.plugin,a=o[r],l=[n,i,s.options];if(ze(a,l,o)===!1&&i.cancelable)return!1}return!0}invalidate(){We(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(e){if(this._cache)return this._cache;const n=this._cache=this._createDescriptors(e);return this._notifyStateChanges(e),n}_createDescriptors(e,n){const r=e&&e.config,i=be(r.options&&r.options.plugins,{}),s=kL(r);return i===!1&&!n?[]:OL(e,s,i,n)}_notifyStateChanges(e){const n=this._oldCache||[],r=this._cache,i=(s,o)=>s.filter(a=>!o.some(l=>a.plugin.id===l.plugin.id));this._notify(i(n,r),e,"stop"),this._notify(i(r,n),e,"start")}}function kL(t){const e={},n=[],r=Object.keys(Un.plugins.items);for(let s=0;s<r.length;s++)n.push(Un.getPlugin(r[s]));const i=t.plugins||[];for(let s=0;s<i.length;s++){const o=i[s];n.indexOf(o)===-1&&(n.push(o),e[o.id]=!0)}return{plugins:n,localIds:e}}function LL(t,e){return!e&&t===!1?null:t===!0?{}:t}function OL(t,{plugins:e,localIds:n},r,i){const s=[],o=t.getContext();for(const a of e){const l=a.id,u=LL(r[l],i);u!==null&&s.push({plugin:a,options:DL(t.config,{plugin:a,local:n[l]},u,o)})}return s}function DL(t,{plugin:e,local:n},r,i){const s=t.pluginScopeKeys(e),o=t.getOptionScopes(r,s);return n&&e.defaults&&o.push(e.defaults),t.createResolver(o,i,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function Kp(t,e){const n=ot.datasets[t]||{};return((e.datasets||{})[t]||{}).indexAxis||e.indexAxis||n.indexAxis||"x"}function ML(t,e){let n=t;return t==="_index_"?n=e:t==="_value_"&&(n=e==="x"?"y":"x"),n}function NL(t,e){return t===e?"_index_":"_value_"}function X2(t){if(t==="x"||t==="y"||t==="r")return t}function VL(t){if(t==="top"||t==="bottom")return"x";if(t==="left"||t==="right")return"y"}function Gp(t,...e){if(X2(t))return t;for(const n of e){const r=n.axis||VL(n.position)||t.length>1&&X2(t[0].toLowerCase());if(r)return r}throw new Error(`Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`)}function J2(t,e,n){if(n[e+"AxisID"]===t)return{axis:e}}function FL(t,e){if(e.data&&e.data.datasets){const n=e.data.datasets.filter(r=>r.xAxisID===t||r.yAxisID===t);if(n.length)return J2(t,"x",n[0])||J2(t,"y",n[0])}return{}}function zL(t,e){const n=Gi[t.type]||{scales:{}},r=e.scales||{},i=Kp(t.type,e),s=Object.create(null);return Object.keys(r).forEach(o=>{const a=r[o];if(!Re(a))return console.error(`Invalid scale configuration for scale: ${o}`);if(a._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${o}`);const l=Gp(o,a,FL(o,t),ot.scales[a.type]),u=NL(l,i),h=n.scales||{};s[o]=Ea(Object.create(null),[{axis:l},a,h[l],h[u]])}),t.data.datasets.forEach(o=>{const a=o.type||t.type,l=o.indexAxis||Kp(a,e),h=(Gi[a]||{}).scales||{};Object.keys(h).forEach(f=>{const d=ML(f,l),m=o[d+"AxisID"]||d;s[m]=s[m]||Object.create(null),Ea(s[m],[{axis:d},r[m],h[f]])})}),Object.keys(s).forEach(o=>{const a=s[o];Ea(a,[ot.scales[a.type],ot.scale])}),s}function VS(t){const e=t.options||(t.options={});e.plugins=be(e.plugins,{}),e.scales=zL(t,e)}function FS(t){return t=t||{},t.datasets=t.datasets||[],t.labels=t.labels||[],t}function jL(t){return t=t||{},t.data=FS(t.data),VS(t),t}const Z2=new Map,zS=new Set;function Eu(t,e){let n=Z2.get(t);return n||(n=e(),Z2.set(t,n),zS.add(n)),n}const ea=(t,e,n)=>{const r=Xa(e,n);r!==void 0&&t.add(r)};class BL{constructor(e){this._config=jL(e),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(e){this._config.type=e}get data(){return this._config.data}set data(e){this._config.data=FS(e)}get options(){return this._config.options}set options(e){this._config.options=e}get plugins(){return this._config.plugins}update(){const e=this._config;this.clearCache(),VS(e)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(e){return Eu(e,()=>[[`datasets.${e}`,""]])}datasetAnimationScopeKeys(e,n){return Eu(`${e}.transition.${n}`,()=>[[`datasets.${e}.transitions.${n}`,`transitions.${n}`],[`datasets.${e}`,""]])}datasetElementScopeKeys(e,n){return Eu(`${e}-${n}`,()=>[[`datasets.${e}.elements.${n}`,`datasets.${e}`,`elements.${n}`,""]])}pluginScopeKeys(e){const n=e.id,r=this.type;return Eu(`${r}-plugin-${n}`,()=>[[`plugins.${n}`,...e.additionalOptionScopes||[]]])}_cachedScopes(e,n){const r=this._scopeCache;let i=r.get(e);return(!i||n)&&(i=new Map,r.set(e,i)),i}getOptionScopes(e,n,r){const{options:i,type:s}=this,o=this._cachedScopes(e,r),a=o.get(n);if(a)return a;const l=new Set;n.forEach(h=>{e&&(l.add(e),h.forEach(f=>ea(l,e,f))),h.forEach(f=>ea(l,i,f)),h.forEach(f=>ea(l,Gi[s]||{},f)),h.forEach(f=>ea(l,ot,f)),h.forEach(f=>ea(l,Wp,f))});const u=Array.from(l);return u.length===0&&u.push(Object.create(null)),zS.has(n)&&o.set(n,u),u}chartOptionScopes(){const{options:e,type:n}=this;return[e,Gi[n]||{},ot.datasets[n]||{},{type:n},ot,Wp]}resolveNamedOptions(e,n,r,i=[""]){const s={$shared:!0},{resolver:o,subPrefixes:a}=e0(this._resolverCache,e,i);let l=o;if(UL(o,n)){s.$shared=!1,r=oi(r)?r():r;const u=this.createResolver(e,r,a);l=Xs(o,r,u)}for(const u of n)s[u]=l[u];return s}createResolver(e,n,r=[""],i){const{resolver:s}=e0(this._resolverCache,e,r);return Re(n)?Xs(s,n,void 0,i):s}}function e0(t,e,n){let r=t.get(e);r||(r=new Map,t.set(e,r));const i=n.join();let s=r.get(i);return s||(s={resolver:Kg(e,n),subPrefixes:n.filter(a=>!a.toLowerCase().includes("hover"))},r.set(i,s)),s}const $L=t=>Re(t)&&Object.getOwnPropertyNames(t).some(e=>oi(t[e]));function UL(t,e){const{isScriptable:n,isIndexable:r}=wS(t);for(const i of e){const s=n(i),o=r(i),a=(o||s)&&t[i];if(s&&(oi(a)||$L(a))||o&&it(a))return!0}return!1}var HL="4.4.8";const WL=["top","bottom","left","right","chartArea"];function t0(t,e){return t==="top"||t==="bottom"||WL.indexOf(t)===-1&&e==="x"}function n0(t,e){return function(n,r){return n[t]===r[t]?n[e]-r[e]:n[t]-r[t]}}function r0(t){const e=t.chart,n=e.options.animation;e.notifyPlugins("afterRender"),ze(n&&n.onComplete,[t],e)}function qL(t){const e=t.chart,n=e.options.animation;ze(n&&n.onProgress,[t],e)}function jS(t){return Yg()&&typeof t=="string"?t=document.getElementById(t):t&&t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas),t}const Zu={},i0=t=>{const e=jS(t);return Object.values(Zu).filter(n=>n.canvas===e).pop()};function KL(t,e,n){const r=Object.keys(t);for(const i of r){const s=+i;if(s>=e){const o=t[i];delete t[i],(n>0||s>e)&&(t[s+n]=o)}}}function GL(t,e,n,r){return!n||t.type==="mouseout"?null:r?e:t}function Su(t,e,n){return t.options.clip?t[n]:e[n]}function QL(t,e){const{xScale:n,yScale:r}=t;return n&&r?{left:Su(n,e,"left"),right:Su(n,e,"right"),top:Su(r,e,"top"),bottom:Su(r,e,"bottom")}:e}var Cr;let qh=(Cr=class{static register(...e){Un.add(...e),s0()}static unregister(...e){Un.remove(...e),s0()}constructor(e,n){const r=this.config=new BL(n),i=jS(e),s=i0(i);if(s)throw new Error("Canvas is already in use. Chart with ID '"+s.id+"' must be destroyed before the canvas with ID '"+s.canvas.id+"' can be reused.");const o=r.createResolver(r.chartOptionScopes(),this.getContext());this.platform=new(r.platform||fL(i)),this.platform.updateConfig(r);const a=this.platform.acquireContext(i,o.aspectRatio),l=a&&a.canvas,u=l&&l.height,h=l&&l.width;if(this.id=ik(),this.ctx=a,this.canvas=l,this.width=h,this.height=u,this._options=o,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new PL,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=Tk(f=>this.update(f),o.resizeDelay||0),this._dataChanges=[],Zu[this.id]=this,!a||!l){console.error("Failed to create chart: can't acquire context from the given item");return}nr.listen(this,"complete",r0),nr.listen(this,"progress",qL),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:e,maintainAspectRatio:n},width:r,height:i,_aspectRatio:s}=this;return We(e)?n&&s?s:i?r/i:null:e}get data(){return this.config.data}set data(e){this.config.data=e}get options(){return this._options}set options(e){this.config.options=e}get registry(){return Un}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():P2(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return R2(this.canvas,this.ctx),this}stop(){return nr.stop(this),this}resize(e,n){nr.running(this)?this._resizeBeforeDraw={width:e,height:n}:this._resize(e,n)}_resize(e,n){const r=this.options,i=this.canvas,s=r.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(i,e,n,s),a=r.devicePixelRatio||this.platform.getDevicePixelRatio(),l=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,P2(this,a,!0)&&(this.notifyPlugins("resize",{size:o}),ze(r.onResize,[this,o],this),this.attached&&this._doResize(l)&&this.render())}ensureScalesHaveIDs(){const n=this.options.scales||{};Me(n,(r,i)=>{r.id=i})}buildOrUpdateScales(){const e=this.options,n=e.scales,r=this.scales,i=Object.keys(r).reduce((o,a)=>(o[a]=!1,o),{});let s=[];n&&(s=s.concat(Object.keys(n).map(o=>{const a=n[o],l=Gp(o,a),u=l==="r",h=l==="x";return{options:a,dposition:u?"chartArea":h?"bottom":"left",dtype:u?"radialLinear":h?"category":"linear"}}))),Me(s,o=>{const a=o.options,l=a.id,u=Gp(l,a),h=be(a.type,o.dtype);(a.position===void 0||t0(a.position,u)!==t0(o.dposition))&&(a.position=o.dposition),i[l]=!0;let f=null;if(l in r&&r[l].type===h)f=r[l];else{const d=Un.getScale(h);f=new d({id:l,type:h,ctx:this.ctx,chart:this}),r[f.id]=f}f.init(a,e)}),Me(i,(o,a)=>{o||delete r[a]}),Me(r,o=>{jr.configure(this,o,o.options),jr.addBox(this,o)})}_updateMetasets(){const e=this._metasets,n=this.data.datasets.length,r=e.length;if(e.sort((i,s)=>i.index-s.index),r>n){for(let i=n;i<r;++i)this._destroyDatasetMeta(i);e.splice(n,r-n)}this._sortedMetasets=e.slice(0).sort(n0("order","index"))}_removeUnreferencedMetasets(){const{_metasets:e,data:{datasets:n}}=this;e.length>n.length&&delete this._stacks,e.forEach((r,i)=>{n.filter(s=>s===r._dataset).length===0&&this._destroyDatasetMeta(i)})}buildOrUpdateControllers(){const e=[],n=this.data.datasets;let r,i;for(this._removeUnreferencedMetasets(),r=0,i=n.length;r<i;r++){const s=n[r];let o=this.getDatasetMeta(r);const a=s.type||this.config.type;if(o.type&&o.type!==a&&(this._destroyDatasetMeta(r),o=this.getDatasetMeta(r)),o.type=a,o.indexAxis=s.indexAxis||Kp(a,this.options),o.order=s.order||0,o.index=r,o.label=""+s.label,o.visible=this.isDatasetVisible(r),o.controller)o.controller.updateIndex(r),o.controller.linkScales();else{const l=Un.getController(a),{datasetElementType:u,dataElementType:h}=ot.datasets[a];Object.assign(l,{dataElementType:Un.getElement(h),datasetElementType:u&&Un.getElement(u)}),o.controller=new l(this,r),e.push(o.controller)}}return this._updateMetasets(),e}_resetElements(){Me(this.data.datasets,(e,n)=>{this.getDatasetMeta(n).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(e){const n=this.config;n.update();const r=this._options=n.createResolver(n.chartOptionScopes(),this.getContext()),i=this._animationsDisabled=!r.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:e,cancelable:!0})===!1)return;const s=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let u=0,h=this.data.datasets.length;u<h;u++){const{controller:f}=this.getDatasetMeta(u),d=!i&&s.indexOf(f)===-1;f.buildOrUpdateElements(d),o=Math.max(+f.getMaxOverflow(),o)}o=this._minPadding=r.layout.autoPadding?o:0,this._updateLayout(o),i||Me(s,u=>{u.reset()}),this._updateDatasets(e),this.notifyPlugins("afterUpdate",{mode:e}),this._layers.sort(n0("z","_idx"));const{_active:a,_lastEvent:l}=this;l?this._eventHandler(l,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){Me(this.scales,e=>{jr.removeBox(this,e)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const e=this.options,n=new Set(Object.keys(this._listeners)),r=new Set(e.events);(!y2(n,r)||!!this._responsiveListeners!==e.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:e}=this,n=this._getUniformDataChanges()||[];for(const{method:r,start:i,count:s}of n){const o=r==="_removeElements"?-s:s;KL(e,i,o)}}_getUniformDataChanges(){const e=this._dataChanges;if(!e||!e.length)return;this._dataChanges=[];const n=this.data.datasets.length,r=s=>new Set(e.filter(o=>o[0]===s).map((o,a)=>a+","+o.splice(1).join(","))),i=r(0);for(let s=1;s<n;s++)if(!y2(i,r(s)))return;return Array.from(i).map(s=>s.split(",")).map(s=>({method:s[1],start:+s[2],count:+s[3]}))}_updateLayout(e){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;jr.update(this,this.width,this.height,e);const n=this.chartArea,r=n.width<=0||n.height<=0;this._layers=[],Me(this.boxes,i=>{r&&i.position==="chartArea"||(i.configure&&i.configure(),this._layers.push(...i._layers()))},this),this._layers.forEach((i,s)=>{i._idx=s}),this.notifyPlugins("afterLayout")}_updateDatasets(e){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:e,cancelable:!0})!==!1){for(let n=0,r=this.data.datasets.length;n<r;++n)this.getDatasetMeta(n).controller.configure();for(let n=0,r=this.data.datasets.length;n<r;++n)this._updateDataset(n,oi(e)?e({datasetIndex:n}):e);this.notifyPlugins("afterDatasetsUpdate",{mode:e})}}_updateDataset(e,n){const r=this.getDatasetMeta(e),i={meta:r,index:e,mode:n,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",i)!==!1&&(r.controller._update(n),i.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",i))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(nr.has(this)?this.attached&&!nr.running(this)&&nr.start(this):(this.draw(),r0({chart:this})))}draw(){let e;if(this._resizeBeforeDraw){const{width:r,height:i}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(r,i)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const n=this._layers;for(e=0;e<n.length&&n[e].z<=0;++e)n[e].draw(this.chartArea);for(this._drawDatasets();e<n.length;++e)n[e].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(e){const n=this._sortedMetasets,r=[];let i,s;for(i=0,s=n.length;i<s;++i){const o=n[i];(!e||o.visible)&&r.push(o)}return r}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const e=this.getSortedVisibleDatasetMetas();for(let n=e.length-1;n>=0;--n)this._drawDataset(e[n]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(e){const n=this.ctx,r=e._clip,i=!r.disabled,s=QL(e,this.chartArea),o={meta:e,index:e.index,cancelable:!0};this.notifyPlugins("beforeDatasetDraw",o)!==!1&&(i&&Uh(n,{left:r.left===!1?0:s.left-r.left,right:r.right===!1?this.width:s.right+r.right,top:r.top===!1?0:s.top-r.top,bottom:r.bottom===!1?this.height:s.bottom+r.bottom}),e.controller.draw(),i&&Hh(n),o.cancelable=!1,this.notifyPlugins("afterDatasetDraw",o))}isPointInArea(e){return cr(e,this.chartArea,this._minPadding)}getElementsAtEventForMode(e,n,r,i){const s=W9.modes[n];return typeof s=="function"?s(this,e,r,i):[]}getDatasetMeta(e){const n=this.data.datasets[e],r=this._metasets;let i=r.filter(s=>s&&s._dataset===n).pop();return i||(i={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:n&&n.order||0,index:e,_dataset:n,_parsed:[],_sorted:!1},r.push(i)),i}getContext(){return this.$context||(this.$context=gi(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(e){const n=this.data.datasets[e];if(!n)return!1;const r=this.getDatasetMeta(e);return typeof r.hidden=="boolean"?!r.hidden:!n.hidden}setDatasetVisibility(e,n){const r=this.getDatasetMeta(e);r.hidden=!n}toggleDataVisibility(e){this._hiddenIndices[e]=!this._hiddenIndices[e]}getDataVisibility(e){return!this._hiddenIndices[e]}_updateVisibility(e,n,r){const i=r?"show":"hide",s=this.getDatasetMeta(e),o=s.controller._resolveAnimations(void 0,i);Vc(n)?(s.data[n].hidden=!r,this.update()):(this.setDatasetVisibility(e,r),o.update(s,{visible:r}),this.update(a=>a.datasetIndex===e?i:void 0))}hide(e,n){this._updateVisibility(e,n,!1)}show(e,n){this._updateVisibility(e,n,!0)}_destroyDatasetMeta(e){const n=this._metasets[e];n&&n.controller&&n.controller._destroy(),delete this._metasets[e]}_stop(){let e,n;for(this.stop(),nr.remove(this),e=0,n=this.data.datasets.length;e<n;++e)this._destroyDatasetMeta(e)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:e,ctx:n}=this;this._stop(),this.config.clearCache(),e&&(this.unbindEvents(),R2(e,n),this.platform.releaseContext(n),this.canvas=null,this.ctx=null),delete Zu[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...e){return this.canvas.toDataURL(...e)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const e=this._listeners,n=this.platform,r=(s,o)=>{n.addEventListener(this,s,o),e[s]=o},i=(s,o,a)=>{s.offsetX=o,s.offsetY=a,this._eventHandler(s)};Me(this.options.events,s=>r(s,i))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const e=this._responsiveListeners,n=this.platform,r=(l,u)=>{n.addEventListener(this,l,u),e[l]=u},i=(l,u)=>{e[l]&&(n.removeEventListener(this,l,u),delete e[l])},s=(l,u)=>{this.canvas&&this.resize(l,u)};let o;const a=()=>{i("attach",a),this.attached=!0,this.resize(),r("resize",s),r("detach",o)};o=()=>{this.attached=!1,i("resize",s),this._stop(),this._resize(0,0),r("attach",a)},n.isAttached(this.canvas)?a():o()}unbindEvents(){Me(this._listeners,(e,n)=>{this.platform.removeEventListener(this,n,e)}),this._listeners={},Me(this._responsiveListeners,(e,n)=>{this.platform.removeEventListener(this,n,e)}),this._responsiveListeners=void 0}updateHoverStyle(e,n,r){const i=r?"set":"remove";let s,o,a,l;for(n==="dataset"&&(s=this.getDatasetMeta(e[0].datasetIndex),s.controller["_"+i+"DatasetHoverStyle"]()),a=0,l=e.length;a<l;++a){o=e[a];const u=o&&this.getDatasetMeta(o.datasetIndex).controller;u&&u[i+"HoverStyle"](o.element,o.datasetIndex,o.index)}}getActiveElements(){return this._active||[]}setActiveElements(e){const n=this._active||[],r=e.map(({datasetIndex:s,index:o})=>{const a=this.getDatasetMeta(s);if(!a)throw new Error("No dataset found at index "+s);return{datasetIndex:s,element:a.data[o],index:o}});!Mc(r,n)&&(this._active=r,this._lastEvent=null,this._updateHoverStyles(r,n))}notifyPlugins(e,n,r){return this._plugins.notify(this,e,n,r)}isPluginEnabled(e){return this._plugins._cache.filter(n=>n.plugin.id===e).length===1}_updateHoverStyles(e,n,r){const i=this.options.hover,s=(l,u)=>l.filter(h=>!u.some(f=>h.datasetIndex===f.datasetIndex&&h.index===f.index)),o=s(n,e),a=r?e:s(e,n);o.length&&this.updateHoverStyle(o,i.mode,!1),a.length&&i.mode&&this.updateHoverStyle(a,i.mode,!0)}_eventHandler(e,n){const r={event:e,replay:n,cancelable:!0,inChartArea:this.isPointInArea(e)},i=o=>(o.options.events||this.options.events).includes(e.native.type);if(this.notifyPlugins("beforeEvent",r,i)===!1)return;const s=this._handleEvent(e,n,r.inChartArea);return r.cancelable=!1,this.notifyPlugins("afterEvent",r,i),(s||r.changed)&&this.render(),this}_handleEvent(e,n,r){const{_active:i=[],options:s}=this,o=n,a=this._getActiveElements(e,i,r,o),l=ck(e),u=GL(e,this._lastEvent,r,l);r&&(this._lastEvent=null,ze(s.onHover,[e,a,this],this),l&&ze(s.onClick,[e,a,this],this));const h=!Mc(a,i);return(h||n)&&(this._active=a,this._updateHoverStyles(a,i,n)),this._lastEvent=u,h}_getActiveElements(e,n,r,i){if(e.type==="mouseout")return[];if(!r)return n;const s=this.options.hover;return this.getElementsAtEventForMode(e,s.mode,s,i)}},pe(Cr,"defaults",ot),pe(Cr,"instances",Zu),pe(Cr,"overrides",Gi),pe(Cr,"registry",Un),pe(Cr,"version",HL),pe(Cr,"getChart",i0),Cr);function s0(){return Me(qh.instances,t=>t._plugins.invalidate())}function BS(t,e,n=e){t.lineCap=be(n.borderCapStyle,e.borderCapStyle),t.setLineDash(be(n.borderDash,e.borderDash)),t.lineDashOffset=be(n.borderDashOffset,e.borderDashOffset),t.lineJoin=be(n.borderJoinStyle,e.borderJoinStyle),t.lineWidth=be(n.borderWidth,e.borderWidth),t.strokeStyle=be(n.borderColor,e.borderColor)}function YL(t,e,n){t.lineTo(n.x,n.y)}function XL(t){return t.stepped?Mk:t.tension||t.cubicInterpolationMode==="monotone"?Nk:YL}function $S(t,e,n={}){const r=t.length,{start:i=0,end:s=r-1}=n,{start:o,end:a}=e,l=Math.max(i,o),u=Math.min(s,a),h=i<o&&s<o||i>a&&s>a;return{count:r,start:l,loop:e.loop,ilen:u<l&&!h?r+u-l:u-l}}function JL(t,e,n,r){const{points:i,options:s}=e,{count:o,start:a,loop:l,ilen:u}=$S(i,n,r),h=XL(s);let{move:f=!0,reverse:d}=r||{},m,_,y;for(m=0;m<=u;++m)_=i[(a+(d?u-m:m))%o],!_.skip&&(f?(t.moveTo(_.x,_.y),f=!1):h(t,y,_,d,s.stepped),y=_);return l&&(_=i[(a+(d?u:0))%o],h(t,y,_,d,s.stepped)),!!l}function ZL(t,e,n,r){const i=e.points,{count:s,start:o,ilen:a}=$S(i,n,r),{move:l=!0,reverse:u}=r||{};let h=0,f=0,d,m,_,y,E,w;const v=L=>(o+(u?a-L:L))%s,b=()=>{y!==E&&(t.lineTo(h,E),t.lineTo(h,y),t.lineTo(h,w))};for(l&&(m=i[v(0)],t.moveTo(m.x,m.y)),d=0;d<=a;++d){if(m=i[v(d)],m.skip)continue;const L=m.x,O=m.y,D=L|0;D===_?(O<y?y=O:O>E&&(E=O),h=(f*h+L)/++f):(b(),t.lineTo(L,O),_=D,f=0,y=E=O),w=O}b()}function Qp(t){const e=t.options,n=e.borderDash&&e.borderDash.length;return!t._decimated&&!t._loop&&!e.tension&&e.cubicInterpolationMode!=="monotone"&&!e.stepped&&!n?ZL:JL}function eO(t){return t.stepped?g9:t.tension||t.cubicInterpolationMode==="monotone"?_9:ki}function tO(t,e,n,r){let i=e._path;i||(i=e._path=new Path2D,e.path(i,n,r)&&i.closePath()),BS(t,e.options),t.stroke(i)}function nO(t,e,n,r){const{segments:i,options:s}=e,o=Qp(e);for(const a of i)BS(t,s,a.style),t.beginPath(),o(t,e,a,{start:n,end:n+r-1})&&t.closePath(),t.stroke()}const rO=typeof Path2D=="function";function iO(t,e,n,r){rO&&!e.options.segment?tO(t,e,n,r):nO(t,e,n,r)}class Br extends vo{constructor(e){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,e&&Object.assign(this,e)}updateControlPoints(e,n){const r=this.options;if((r.tension||r.cubicInterpolationMode==="monotone")&&!r.stepped&&!this._pointsUpdated){const i=r.spanGaps?this._loop:this._fullLoop;l9(this._points,r,e,i,n),this._pointsUpdated=!0}}set points(e){this._points=e,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=T9(this,this.options.segment))}first(){const e=this.segments,n=this.points;return e.length&&n[e[0].start]}last(){const e=this.segments,n=this.points,r=e.length;return r&&n[e[r-1].end]}interpolate(e,n){const r=this.options,i=e[n],s=this.points,o=CS(this,{property:n,start:i,end:i});if(!o.length)return;const a=[],l=eO(r);let u,h;for(u=0,h=o.length;u<h;++u){const{start:f,end:d}=o[u],m=s[f],_=s[d];if(m===_){a.push(m);continue}const y=Math.abs((i-m[n])/(_[n]-m[n])),E=l(m,_,y,r.stepped);E[n]=e[n],a.push(E)}return a.length===1?a[0]:a}pathSegment(e,n,r){return Qp(this)(e,this,n,r)}path(e,n,r){const i=this.segments,s=Qp(this);let o=this._loop;n=n||0,r=r||this.points.length-n;for(const a of i)o&=s(e,this,a,{start:n,end:n+r-1});return!!o}draw(e,n,r,i){const s=this.options||{};(this.points||[]).length&&s.borderWidth&&(e.save(),iO(e,this,r,i),e.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}pe(Br,"id","line"),pe(Br,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),pe(Br,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),pe(Br,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"&&e!=="fill"});function o0(t,e,n,r){const i=t.options,{[n]:s}=t.getProps([n],r);return Math.abs(e-s)<i.radius+i.hitRadius}class ec extends vo{constructor(n){super();pe(this,"parsed");pe(this,"skip");pe(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,n&&Object.assign(this,n)}inRange(n,r,i){const s=this.options,{x:o,y:a}=this.getProps(["x","y"],i);return Math.pow(n-o,2)+Math.pow(r-a,2)<Math.pow(s.hitRadius+s.radius,2)}inXRange(n,r){return o0(this,n,"x",r)}inYRange(n,r){return o0(this,n,"y",r)}getCenterPoint(n){const{x:r,y:i}=this.getProps(["x","y"],n);return{x:r,y:i}}size(n){n=n||this.options||{};let r=n.radius||0;r=Math.max(r,r&&n.hoverRadius||0);const i=r&&n.borderWidth||0;return(r+i)*2}draw(n,r){const i=this.options;this.skip||i.radius<.1||!cr(this,r,this.size(i)/2)||(n.strokeStyle=i.borderColor,n.lineWidth=i.borderWidth,n.fillStyle=i.backgroundColor,qp(n,i,this.x,this.y))}getRange(){const n=this.options||{};return n.radius+n.hitRadius}}pe(ec,"id","point"),pe(ec,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),pe(ec,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function sO(t,e,n){const r=t.segments,i=t.points,s=e.points,o=[];for(const a of r){let{start:l,end:u}=a;u=Zg(l,u,i);const h=Yp(n,i[l],i[u],a.loop);if(!e.segments){o.push({source:a,target:h,start:i[l],end:i[u]});continue}const f=CS(e,h);for(const d of f){const m=Yp(n,s[d.start],s[d.end],d.loop),_=AS(a,i,m);for(const y of _)o.push({source:y,target:d,start:{[n]:a0(h,m,"start",Math.max)},end:{[n]:a0(h,m,"end",Math.min)}})}}return o}function Yp(t,e,n,r){if(r)return;let i=e[t],s=n[t];return t==="angle"&&(i=cn(i),s=cn(s)),{property:t,start:i,end:s}}function oO(t,e){const{x:n=null,y:r=null}=t||{},i=e.points,s=[];return e.segments.forEach(({start:o,end:a})=>{a=Zg(o,a,i);const l=i[o],u=i[a];r!==null?(s.push({x:l.x,y:r}),s.push({x:u.x,y:r})):n!==null&&(s.push({x:n,y:l.y}),s.push({x:n,y:u.y}))}),s}function Zg(t,e,n){for(;e>t;e--){const r=n[e];if(!isNaN(r.x)&&!isNaN(r.y))break}return e}function a0(t,e,n,r){return t&&e?r(t[n],e[n]):t?t[n]:e?e[n]:0}function US(t,e){let n=[],r=!1;return it(t)?(r=!0,n=t):n=oO(t,e),n.length?new Br({points:n,options:{tension:0},_loop:r,_fullLoop:r}):null}function l0(t){return t&&t.fill!==!1}function aO(t,e,n){let i=t[e].fill;const s=[e];let o;if(!n)return i;for(;i!==!1&&s.indexOf(i)===-1;){if(!st(i))return i;if(o=t[i],!o)return!1;if(o.visible)return i;s.push(i),i=o.fill}return!1}function lO(t,e,n){const r=fO(t);if(Re(r))return isNaN(r.value)?!1:r;let i=parseFloat(r);return st(i)&&Math.floor(i)===i?uO(r[0],e,i,n):["origin","start","end","stack","shape"].indexOf(r)>=0&&r}function uO(t,e,n,r){return(t==="-"||t==="+")&&(n=e+n),n===e||n<0||n>=r?!1:n}function cO(t,e){let n=null;return t==="start"?n=e.bottom:t==="end"?n=e.top:Re(t)?n=e.getPixelForValue(t.value):e.getBasePixel&&(n=e.getBasePixel()),n}function hO(t,e,n){let r;return t==="start"?r=n:t==="end"?r=e.options.reverse?e.min:e.max:Re(t)?r=t.value:r=e.getBaseValue(),r}function fO(t){const e=t.options,n=e.fill;let r=be(n&&n.target,n);return r===void 0&&(r=!!e.backgroundColor),r===!1||r===null?!1:r===!0?"origin":r}function dO(t){const{scale:e,index:n,line:r}=t,i=[],s=r.segments,o=r.points,a=pO(e,n);a.push(US({x:null,y:e.bottom},r));for(let l=0;l<s.length;l++){const u=s[l];for(let h=u.start;h<=u.end;h++)mO(i,o[h],a)}return new Br({points:i,options:{}})}function pO(t,e){const n=[],r=t.getMatchingVisibleMetas("line");for(let i=0;i<r.length;i++){const s=r[i];if(s.index===e)break;s.hidden||n.unshift(s.dataset)}return n}function mO(t,e,n){const r=[];for(let i=0;i<n.length;i++){const s=n[i],{first:o,last:a,point:l}=gO(s,e,"x");if(!(!l||o&&a)){if(o)r.unshift(l);else if(t.push(l),!a)break}}t.push(...r)}function gO(t,e,n){const r=t.interpolate(e,n);if(!r)return{};const i=r[n],s=t.segments,o=t.points;let a=!1,l=!1;for(let u=0;u<s.length;u++){const h=s[u],f=o[h.start][n],d=o[h.end][n];if(As(i,f,d)){a=i===f,l=i===d;break}}return{first:a,last:l,point:r}}class HS{constructor(e){this.x=e.x,this.y=e.y,this.radius=e.radius}pathSegment(e,n,r){const{x:i,y:s,radius:o}=this;return n=n||{start:0,end:mn},e.arc(i,s,o,n.end,n.start,!0),!r.bounds}interpolate(e){const{x:n,y:r,radius:i}=this,s=e.angle;return{x:n+Math.cos(s)*i,y:r+Math.sin(s)*i,angle:s}}}function _O(t){const{chart:e,fill:n,line:r}=t;if(st(n))return yO(e,n);if(n==="stack")return dO(t);if(n==="shape")return!0;const i=vO(t);return i instanceof HS?i:US(i,r)}function yO(t,e){const n=t.getDatasetMeta(e);return n&&t.isDatasetVisible(e)?n.dataset:null}function vO(t){return(t.scale||{}).getPointPositionForValue?EO(t):wO(t)}function wO(t){const{scale:e={},fill:n}=t,r=cO(n,e);if(st(r)){const i=e.isHorizontal();return{x:i?r:null,y:i?null:r}}return null}function EO(t){const{scale:e,fill:n}=t,r=e.options,i=e.getLabels().length,s=r.reverse?e.max:e.min,o=hO(n,e,s),a=[];if(r.grid.circular){const l=e.getPointPositionForValue(0,s);return new HS({x:l.x,y:l.y,radius:e.getDistanceFromCenterForValue(o)})}for(let l=0;l<i;++l)a.push(e.getPointPositionForValue(l,o));return a}function wd(t,e,n){const r=_O(e),{line:i,scale:s,axis:o}=e,a=i.options,l=a.fill,u=a.backgroundColor,{above:h=u,below:f=u}=l||{};r&&i.points.length&&(Uh(t,n),SO(t,{line:i,target:r,above:h,below:f,area:n,scale:s,axis:o}),Hh(t))}function SO(t,e){const{line:n,target:r,above:i,below:s,area:o,scale:a}=e,l=n._loop?"angle":e.axis;t.save(),l==="x"&&s!==i&&(u0(t,r,o.top),c0(t,{line:n,target:r,color:i,scale:a,property:l}),t.restore(),t.save(),u0(t,r,o.bottom)),c0(t,{line:n,target:r,color:s,scale:a,property:l}),t.restore()}function u0(t,e,n){const{segments:r,points:i}=e;let s=!0,o=!1;t.beginPath();for(const a of r){const{start:l,end:u}=a,h=i[l],f=i[Zg(l,u,i)];s?(t.moveTo(h.x,h.y),s=!1):(t.lineTo(h.x,n),t.lineTo(h.x,h.y)),o=!!e.pathSegment(t,a,{move:o}),o?t.closePath():t.lineTo(f.x,n)}t.lineTo(e.first().x,n),t.closePath(),t.clip()}function c0(t,e){const{line:n,target:r,property:i,color:s,scale:o}=e,a=sO(n,r,i);for(const{source:l,target:u,start:h,end:f}of a){const{style:{backgroundColor:d=s}={}}=l,m=r!==!0;t.save(),t.fillStyle=d,TO(t,o,m&&Yp(i,h,f)),t.beginPath();const _=!!n.pathSegment(t,l);let y;if(m){_?t.closePath():h0(t,r,f,i);const E=!!r.pathSegment(t,u,{move:_,reverse:!0});y=_&&E,y||h0(t,r,h,i)}t.closePath(),t.fill(y?"evenodd":"nonzero"),t.restore()}}function TO(t,e,n){const{top:r,bottom:i}=e.chart.chartArea,{property:s,start:o,end:a}=n||{};s==="x"&&(t.beginPath(),t.rect(o,r,a-o,i-r),t.clip())}function h0(t,e,n,r){const i=e.interpolate(n,r);i&&t.lineTo(i.x,i.y)}var bO={id:"filler",afterDatasetsUpdate(t,e,n){const r=(t.data.datasets||[]).length,i=[];let s,o,a,l;for(o=0;o<r;++o)s=t.getDatasetMeta(o),a=s.dataset,l=null,a&&a.options&&a instanceof Br&&(l={visible:t.isDatasetVisible(o),index:o,fill:lO(a,o,r),chart:t,axis:s.controller.options.indexAxis,scale:s.vScale,line:a}),s.$filler=l,i.push(l);for(o=0;o<r;++o)l=i[o],!(!l||l.fill===!1)&&(l.fill=aO(i,o,n.propagate))},beforeDraw(t,e,n){const r=n.drawTime==="beforeDraw",i=t.getSortedVisibleDatasetMetas(),s=t.chartArea;for(let o=i.length-1;o>=0;--o){const a=i[o].$filler;a&&(a.line.updateControlPoints(s,a.axis),r&&a.fill&&wd(t.ctx,a,s))}},beforeDatasetsDraw(t,e,n){if(n.drawTime!=="beforeDatasetsDraw")return;const r=t.getSortedVisibleDatasetMetas();for(let i=r.length-1;i>=0;--i){const s=r[i].$filler;l0(s)&&wd(t.ctx,s,t.chartArea)}},beforeDatasetDraw(t,e,n){const r=e.meta.$filler;!l0(r)||n.drawTime!=="beforeDatasetDraw"||wd(t.ctx,r,t.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const f0=(t,e)=>{let{boxHeight:n=e,boxWidth:r=e}=t;return t.usePointStyle&&(n=Math.min(n,e),r=t.pointStyleWidth||Math.min(r,e)),{boxWidth:r,boxHeight:n,itemHeight:Math.max(e,n)}},xO=(t,e)=>t!==null&&e!==null&&t.datasetIndex===e.datasetIndex&&t.index===e.index;class d0 extends vo{constructor(e){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,n,r){this.maxWidth=e,this.maxHeight=n,this._margins=r,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const e=this.options.labels||{};let n=ze(e.generateLabels,[this.chart],this)||[];e.filter&&(n=n.filter(r=>e.filter(r,this.chart.data))),e.sort&&(n=n.sort((r,i)=>e.sort(r,i,this.chart.data))),this.options.reverse&&n.reverse(),this.legendItems=n}fit(){const{options:e,ctx:n}=this;if(!e.display){this.width=this.height=0;return}const r=e.labels,i=xt(r.font),s=i.size,o=this._computeTitleHeight(),{boxWidth:a,itemHeight:l}=f0(r,s);let u,h;n.font=i.string,this.isHorizontal()?(u=this.maxWidth,h=this._fitRows(o,s,a,l)+10):(h=this.maxHeight,u=this._fitCols(o,i,a,l)+10),this.width=Math.min(u,e.maxWidth||this.maxWidth),this.height=Math.min(h,e.maxHeight||this.maxHeight)}_fitRows(e,n,r,i){const{ctx:s,maxWidth:o,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],u=this.lineWidths=[0],h=i+a;let f=e;s.textAlign="left",s.textBaseline="middle";let d=-1,m=-h;return this.legendItems.forEach((_,y)=>{const E=r+n/2+s.measureText(_.text).width;(y===0||u[u.length-1]+E+2*a>o)&&(f+=h,u[u.length-(y>0?0:1)]=0,m+=h,d++),l[y]={left:0,top:m,row:d,width:E,height:i},u[u.length-1]+=E+a}),f}_fitCols(e,n,r,i){const{ctx:s,maxHeight:o,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],u=this.columnSizes=[],h=o-e;let f=a,d=0,m=0,_=0,y=0;return this.legendItems.forEach((E,w)=>{const{itemWidth:v,itemHeight:b}=IO(r,n,s,E,i);w>0&&m+b+2*a>h&&(f+=d+a,u.push({width:d,height:m}),_+=d+a,y++,d=m=0),l[w]={left:_,top:m,col:y,width:v,height:b},d=Math.max(d,v),m+=b+a}),f+=d,u.push({width:d,height:m}),f}adjustHitBoxes(){if(!this.options.display)return;const e=this._computeTitleHeight(),{legendHitBoxes:n,options:{align:r,labels:{padding:i},rtl:s}}=this,o=Ns(s,this.left,this.width);if(this.isHorizontal()){let a=0,l=an(r,this.left+i,this.right-this.lineWidths[a]);for(const u of n)a!==u.row&&(a=u.row,l=an(r,this.left+i,this.right-this.lineWidths[a])),u.top+=this.top+e+i,u.left=o.leftForLtr(o.x(l),u.width),l+=u.width+i}else{let a=0,l=an(r,this.top+e+i,this.bottom-this.columnSizes[a].height);for(const u of n)u.col!==a&&(a=u.col,l=an(r,this.top+e+i,this.bottom-this.columnSizes[a].height)),u.top=l,u.left+=this.left+i,u.left=o.leftForLtr(o.x(u.left),u.width),l+=u.height+i}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const e=this.ctx;Uh(e,this),this._draw(),Hh(e)}}_draw(){const{options:e,columnSizes:n,lineWidths:r,ctx:i}=this,{align:s,labels:o}=e,a=ot.color,l=Ns(e.rtl,this.left,this.width),u=xt(o.font),{padding:h}=o,f=u.size,d=f/2;let m;this.drawTitle(),i.textAlign=l.textAlign("left"),i.textBaseline="middle",i.lineWidth=.5,i.font=u.string;const{boxWidth:_,boxHeight:y,itemHeight:E}=f0(o,f),w=function(D,x,S){if(isNaN(_)||_<=0||isNaN(y)||y<0)return;i.save();const T=be(S.lineWidth,1);if(i.fillStyle=be(S.fillStyle,a),i.lineCap=be(S.lineCap,"butt"),i.lineDashOffset=be(S.lineDashOffset,0),i.lineJoin=be(S.lineJoin,"miter"),i.lineWidth=T,i.strokeStyle=be(S.strokeStyle,a),i.setLineDash(be(S.lineDash,[])),o.usePointStyle){const I={radius:y*Math.SQRT2/2,pointStyle:S.pointStyle,rotation:S.rotation,borderWidth:T},C=l.xPlus(D,_/2),P=x+d;yS(i,I,C,P,o.pointStyleWidth&&_)}else{const I=x+Math.max((f-y)/2,0),C=l.leftForLtr(D,_),P=Ms(S.borderRadius);i.beginPath(),Object.values(P).some(A=>A!==0)?Bc(i,{x:C,y:I,w:_,h:y,radius:P}):i.rect(C,I,_,y),i.fill(),T!==0&&i.stroke()}i.restore()},v=function(D,x,S){Ys(i,S.text,D,x+E/2,u,{strikethrough:S.hidden,textAlign:l.textAlign(S.textAlign)})},b=this.isHorizontal(),L=this._computeTitleHeight();b?m={x:an(s,this.left+h,this.right-r[0]),y:this.top+h+L,line:0}:m={x:this.left+h,y:an(s,this.top+L+h,this.bottom-n[0].height),line:0},xS(this.ctx,e.textDirection);const O=E+h;this.legendItems.forEach((D,x)=>{i.strokeStyle=D.fontColor,i.fillStyle=D.fontColor;const S=i.measureText(D.text).width,T=l.textAlign(D.textAlign||(D.textAlign=o.textAlign)),I=_+d+S;let C=m.x,P=m.y;l.setWidth(this.width),b?x>0&&C+I+h>this.right&&(P=m.y+=O,m.line++,C=m.x=an(s,this.left+h,this.right-r[m.line])):x>0&&P+O>this.bottom&&(C=m.x=C+n[m.line].width+h,m.line++,P=m.y=an(s,this.top+L+h,this.bottom-n[m.line].height));const A=l.x(C);if(w(A,P,D),C=bk(T,C+_+d,b?C+I:this.right,e.rtl),v(l.x(C),P,D),b)m.x+=I+h;else if(typeof D.text!="string"){const Z=u.lineHeight;m.y+=WS(D,Z)+h}else m.y+=O}),IS(this.ctx,e.textDirection)}drawTitle(){const e=this.options,n=e.title,r=xt(n.font),i=Wt(n.padding);if(!n.display)return;const s=Ns(e.rtl,this.left,this.width),o=this.ctx,a=n.position,l=r.size/2,u=i.top+l;let h,f=this.left,d=this.width;if(this.isHorizontal())d=Math.max(...this.lineWidths),h=this.top+u,f=an(e.align,f,this.right-d);else{const _=this.columnSizes.reduce((y,E)=>Math.max(y,E.height),0);h=u+an(e.align,this.top,this.bottom-_-e.labels.padding-this._computeTitleHeight())}const m=an(a,f,f+d);o.textAlign=s.textAlign(gS(a)),o.textBaseline="middle",o.strokeStyle=n.color,o.fillStyle=n.color,o.font=r.string,Ys(o,n.text,m,h,r)}_computeTitleHeight(){const e=this.options.title,n=xt(e.font),r=Wt(e.padding);return e.display?n.lineHeight+r.height:0}_getLegendItemAt(e,n){let r,i,s;if(As(e,this.left,this.right)&&As(n,this.top,this.bottom)){for(s=this.legendHitBoxes,r=0;r<s.length;++r)if(i=s[r],As(e,i.left,i.left+i.width)&&As(n,i.top,i.top+i.height))return this.legendItems[r]}return null}handleEvent(e){const n=this.options;if(!CO(e.type,n))return;const r=this._getLegendItemAt(e.x,e.y);if(e.type==="mousemove"||e.type==="mouseout"){const i=this._hoveredItem,s=xO(i,r);i&&!s&&ze(n.onLeave,[e,i,this],this),this._hoveredItem=r,r&&!s&&ze(n.onHover,[e,r,this],this)}else r&&ze(n.onClick,[e,r,this],this)}}function IO(t,e,n,r,i){const s=RO(r,t,e,n),o=AO(i,r,e.lineHeight);return{itemWidth:s,itemHeight:o}}function RO(t,e,n,r){let i=t.text;return i&&typeof i!="string"&&(i=i.reduce((s,o)=>s.length>o.length?s:o)),e+n.size/2+r.measureText(i).width}function AO(t,e,n){let r=t;return typeof e.text!="string"&&(r=WS(e,n)),r}function WS(t,e){const n=t.text?t.text.length:0;return e*n}function CO(t,e){return!!((t==="mousemove"||t==="mouseout")&&(e.onHover||e.onLeave)||e.onClick&&(t==="click"||t==="mouseup"))}var PO={id:"legend",_element:d0,start(t,e,n){const r=t.legend=new d0({ctx:t.ctx,options:n,chart:t});jr.configure(t,r,n),jr.addBox(t,r)},stop(t){jr.removeBox(t,t.legend),delete t.legend},beforeUpdate(t,e,n){const r=t.legend;jr.configure(t,r,n),r.options=n},afterUpdate(t){const e=t.legend;e.buildLabels(),e.adjustHitBoxes()},afterEvent(t,e){e.replay||t.legend.handleEvent(e.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(t,e,n){const r=e.datasetIndex,i=n.chart;i.isDatasetVisible(r)?(i.hide(r),e.hidden=!0):(i.show(r),e.hidden=!1)},onHover:null,onLeave:null,labels:{color:t=>t.chart.options.color,boxWidth:40,padding:10,generateLabels(t){const e=t.data.datasets,{labels:{usePointStyle:n,pointStyle:r,textAlign:i,color:s,useBorderRadius:o,borderRadius:a}}=t.legend.options;return t._getSortedDatasetMetas().map(l=>{const u=l.controller.getStyle(n?0:void 0),h=Wt(u.borderWidth);return{text:e[l.index].label,fillStyle:u.backgroundColor,fontColor:s,hidden:!l.visible,lineCap:u.borderCapStyle,lineDash:u.borderDash,lineDashOffset:u.borderDashOffset,lineJoin:u.borderJoinStyle,lineWidth:(h.width+h.height)/4,strokeStyle:u.borderColor,pointStyle:r||u.pointStyle,rotation:u.rotation,textAlign:i||u.textAlign,borderRadius:o&&(a||u.borderRadius),datasetIndex:l.index}},this)}},title:{color:t=>t.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:t=>!t.startsWith("on"),labels:{_scriptable:t=>!["generateLabels","filter","sort"].includes(t)}}};const aa={average(t){if(!t.length)return!1;let e,n,r=new Set,i=0,s=0;for(e=0,n=t.length;e<n;++e){const a=t[e].element;if(a&&a.hasValue()){const l=a.tooltipPosition();r.add(l.x),i+=l.y,++s}}return s===0||r.size===0?!1:{x:[...r].reduce((a,l)=>a+l)/r.size,y:i/s}},nearest(t,e){if(!t.length)return!1;let n=e.x,r=e.y,i=Number.POSITIVE_INFINITY,s,o,a;for(s=0,o=t.length;s<o;++s){const l=t[s].element;if(l&&l.hasValue()){const u=l.getCenterPoint(),h=Up(e,u);h<i&&(i=h,a=l)}}if(a){const l=a.tooltipPosition();n=l.x,r=l.y}return{x:n,y:r}}};function Bn(t,e){return e&&(it(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function rr(t){return(typeof t=="string"||t instanceof String)&&t.indexOf(`
`)>-1?t.split(`
`):t}function kO(t,e){const{element:n,datasetIndex:r,index:i}=e,s=t.getDatasetMeta(r).controller,{label:o,value:a}=s.getLabelAndValue(i);return{chart:t,label:o,parsed:s.getParsed(i),raw:t.data.datasets[r].data[i],formattedValue:a,dataset:s.getDataset(),dataIndex:i,datasetIndex:r,element:n}}function p0(t,e){const n=t.chart.ctx,{body:r,footer:i,title:s}=t,{boxWidth:o,boxHeight:a}=e,l=xt(e.bodyFont),u=xt(e.titleFont),h=xt(e.footerFont),f=s.length,d=i.length,m=r.length,_=Wt(e.padding);let y=_.height,E=0,w=r.reduce((L,O)=>L+O.before.length+O.lines.length+O.after.length,0);if(w+=t.beforeBody.length+t.afterBody.length,f&&(y+=f*u.lineHeight+(f-1)*e.titleSpacing+e.titleMarginBottom),w){const L=e.displayColors?Math.max(a,l.lineHeight):l.lineHeight;y+=m*L+(w-m)*l.lineHeight+(w-1)*e.bodySpacing}d&&(y+=e.footerMarginTop+d*h.lineHeight+(d-1)*e.footerSpacing);let v=0;const b=function(L){E=Math.max(E,n.measureText(L).width+v)};return n.save(),n.font=u.string,Me(t.title,b),n.font=l.string,Me(t.beforeBody.concat(t.afterBody),b),v=e.displayColors?o+2+e.boxPadding:0,Me(r,L=>{Me(L.before,b),Me(L.lines,b),Me(L.after,b)}),v=0,n.font=h.string,Me(t.footer,b),n.restore(),E+=_.width,{width:E,height:y}}function LO(t,e){const{y:n,height:r}=e;return n<r/2?"top":n>t.height-r/2?"bottom":"center"}function OO(t,e,n,r){const{x:i,width:s}=r,o=n.caretSize+n.caretPadding;if(t==="left"&&i+s+o>e.width||t==="right"&&i-s-o<0)return!0}function DO(t,e,n,r){const{x:i,width:s}=n,{width:o,chartArea:{left:a,right:l}}=t;let u="center";return r==="center"?u=i<=(a+l)/2?"left":"right":i<=s/2?u="left":i>=o-s/2&&(u="right"),OO(u,t,e,n)&&(u="center"),u}function m0(t,e,n){const r=n.yAlign||e.yAlign||LO(t,n);return{xAlign:n.xAlign||e.xAlign||DO(t,e,n,r),yAlign:r}}function MO(t,e){let{x:n,width:r}=t;return e==="right"?n-=r:e==="center"&&(n-=r/2),n}function NO(t,e,n){let{y:r,height:i}=t;return e==="top"?r+=n:e==="bottom"?r-=i+n:r-=i/2,r}function g0(t,e,n,r){const{caretSize:i,caretPadding:s,cornerRadius:o}=t,{xAlign:a,yAlign:l}=n,u=i+s,{topLeft:h,topRight:f,bottomLeft:d,bottomRight:m}=Ms(o);let _=MO(e,a);const y=NO(e,l,u);return l==="center"?a==="left"?_+=u:a==="right"&&(_-=u):a==="left"?_-=Math.max(h,d)+i:a==="right"&&(_+=Math.max(f,m)+i),{x:ur(_,0,r.width-e.width),y:ur(y,0,r.height-e.height)}}function Tu(t,e,n){const r=Wt(n.padding);return e==="center"?t.x+t.width/2:e==="right"?t.x+t.width-r.right:t.x+r.left}function _0(t){return Bn([],rr(t))}function VO(t,e,n){return gi(t,{tooltip:e,tooltipItems:n,type:"tooltip"})}function y0(t,e){const n=e&&e.dataset&&e.dataset.tooltip&&e.dataset.tooltip.callbacks;return n?t.override(n):t}const qS={beforeTitle:tr,title(t){if(t.length>0){const e=t[0],n=e.chart.data.labels,r=n?n.length:0;if(this&&this.options&&this.options.mode==="dataset")return e.dataset.label||"";if(e.label)return e.label;if(r>0&&e.dataIndex<r)return n[e.dataIndex]}return""},afterTitle:tr,beforeBody:tr,beforeLabel:tr,label(t){if(this&&this.options&&this.options.mode==="dataset")return t.label+": "+t.formattedValue||t.formattedValue;let e=t.dataset.label||"";e&&(e+=": ");const n=t.formattedValue;return We(n)||(e+=n),e},labelColor(t){const n=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{borderColor:n.borderColor,backgroundColor:n.backgroundColor,borderWidth:n.borderWidth,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(t){const n=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{pointStyle:n.pointStyle,rotation:n.rotation}},afterLabel:tr,afterBody:tr,beforeFooter:tr,footer:tr,afterFooter:tr};function Gt(t,e,n,r){const i=t[e].call(n,r);return typeof i>"u"?qS[e].call(n,r):i}class Xp extends vo{constructor(e){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=e.chart,this.options=e.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(e){this.options=e,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const e=this._cachedAnimations;if(e)return e;const n=this.chart,r=this.options.setContext(this.getContext()),i=r.enabled&&n.options.animation&&r.animations,s=new PS(this.chart,i);return i._cacheable&&(this._cachedAnimations=Object.freeze(s)),s}getContext(){return this.$context||(this.$context=VO(this.chart.getContext(),this,this._tooltipItems))}getTitle(e,n){const{callbacks:r}=n,i=Gt(r,"beforeTitle",this,e),s=Gt(r,"title",this,e),o=Gt(r,"afterTitle",this,e);let a=[];return a=Bn(a,rr(i)),a=Bn(a,rr(s)),a=Bn(a,rr(o)),a}getBeforeBody(e,n){return _0(Gt(n.callbacks,"beforeBody",this,e))}getBody(e,n){const{callbacks:r}=n,i=[];return Me(e,s=>{const o={before:[],lines:[],after:[]},a=y0(r,s);Bn(o.before,rr(Gt(a,"beforeLabel",this,s))),Bn(o.lines,Gt(a,"label",this,s)),Bn(o.after,rr(Gt(a,"afterLabel",this,s))),i.push(o)}),i}getAfterBody(e,n){return _0(Gt(n.callbacks,"afterBody",this,e))}getFooter(e,n){const{callbacks:r}=n,i=Gt(r,"beforeFooter",this,e),s=Gt(r,"footer",this,e),o=Gt(r,"afterFooter",this,e);let a=[];return a=Bn(a,rr(i)),a=Bn(a,rr(s)),a=Bn(a,rr(o)),a}_createItems(e){const n=this._active,r=this.chart.data,i=[],s=[],o=[];let a=[],l,u;for(l=0,u=n.length;l<u;++l)a.push(kO(this.chart,n[l]));return e.filter&&(a=a.filter((h,f,d)=>e.filter(h,f,d,r))),e.itemSort&&(a=a.sort((h,f)=>e.itemSort(h,f,r))),Me(a,h=>{const f=y0(e.callbacks,h);i.push(Gt(f,"labelColor",this,h)),s.push(Gt(f,"labelPointStyle",this,h)),o.push(Gt(f,"labelTextColor",this,h))}),this.labelColors=i,this.labelPointStyles=s,this.labelTextColors=o,this.dataPoints=a,a}update(e,n){const r=this.options.setContext(this.getContext()),i=this._active;let s,o=[];if(!i.length)this.opacity!==0&&(s={opacity:0});else{const a=aa[r.position].call(this,i,this._eventPosition);o=this._createItems(r),this.title=this.getTitle(o,r),this.beforeBody=this.getBeforeBody(o,r),this.body=this.getBody(o,r),this.afterBody=this.getAfterBody(o,r),this.footer=this.getFooter(o,r);const l=this._size=p0(this,r),u=Object.assign({},a,l),h=m0(this.chart,r,u),f=g0(r,u,h,this.chart);this.xAlign=h.xAlign,this.yAlign=h.yAlign,s={opacity:1,x:f.x,y:f.y,width:l.width,height:l.height,caretX:a.x,caretY:a.y}}this._tooltipItems=o,this.$context=void 0,s&&this._resolveAnimations().update(this,s),e&&r.external&&r.external.call(this,{chart:this.chart,tooltip:this,replay:n})}drawCaret(e,n,r,i){const s=this.getCaretPosition(e,r,i);n.lineTo(s.x1,s.y1),n.lineTo(s.x2,s.y2),n.lineTo(s.x3,s.y3)}getCaretPosition(e,n,r){const{xAlign:i,yAlign:s}=this,{caretSize:o,cornerRadius:a}=r,{topLeft:l,topRight:u,bottomLeft:h,bottomRight:f}=Ms(a),{x:d,y:m}=e,{width:_,height:y}=n;let E,w,v,b,L,O;return s==="center"?(L=m+y/2,i==="left"?(E=d,w=E-o,b=L+o,O=L-o):(E=d+_,w=E+o,b=L-o,O=L+o),v=E):(i==="left"?w=d+Math.max(l,h)+o:i==="right"?w=d+_-Math.max(u,f)-o:w=this.caretX,s==="top"?(b=m,L=b-o,E=w-o,v=w+o):(b=m+y,L=b+o,E=w+o,v=w-o),O=b),{x1:E,x2:w,x3:v,y1:b,y2:L,y3:O}}drawTitle(e,n,r){const i=this.title,s=i.length;let o,a,l;if(s){const u=Ns(r.rtl,this.x,this.width);for(e.x=Tu(this,r.titleAlign,r),n.textAlign=u.textAlign(r.titleAlign),n.textBaseline="middle",o=xt(r.titleFont),a=r.titleSpacing,n.fillStyle=r.titleColor,n.font=o.string,l=0;l<s;++l)n.fillText(i[l],u.x(e.x),e.y+o.lineHeight/2),e.y+=o.lineHeight+a,l+1===s&&(e.y+=r.titleMarginBottom-a)}}_drawColorBox(e,n,r,i,s){const o=this.labelColors[r],a=this.labelPointStyles[r],{boxHeight:l,boxWidth:u}=s,h=xt(s.bodyFont),f=Tu(this,"left",s),d=i.x(f),m=l<h.lineHeight?(h.lineHeight-l)/2:0,_=n.y+m;if(s.usePointStyle){const y={radius:Math.min(u,l)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},E=i.leftForLtr(d,u)+u/2,w=_+l/2;e.strokeStyle=s.multiKeyBackground,e.fillStyle=s.multiKeyBackground,qp(e,y,E,w),e.strokeStyle=o.borderColor,e.fillStyle=o.backgroundColor,qp(e,y,E,w)}else{e.lineWidth=Re(o.borderWidth)?Math.max(...Object.values(o.borderWidth)):o.borderWidth||1,e.strokeStyle=o.borderColor,e.setLineDash(o.borderDash||[]),e.lineDashOffset=o.borderDashOffset||0;const y=i.leftForLtr(d,u),E=i.leftForLtr(i.xPlus(d,1),u-2),w=Ms(o.borderRadius);Object.values(w).some(v=>v!==0)?(e.beginPath(),e.fillStyle=s.multiKeyBackground,Bc(e,{x:y,y:_,w:u,h:l,radius:w}),e.fill(),e.stroke(),e.fillStyle=o.backgroundColor,e.beginPath(),Bc(e,{x:E,y:_+1,w:u-2,h:l-2,radius:w}),e.fill()):(e.fillStyle=s.multiKeyBackground,e.fillRect(y,_,u,l),e.strokeRect(y,_,u,l),e.fillStyle=o.backgroundColor,e.fillRect(E,_+1,u-2,l-2))}e.fillStyle=this.labelTextColors[r]}drawBody(e,n,r){const{body:i}=this,{bodySpacing:s,bodyAlign:o,displayColors:a,boxHeight:l,boxWidth:u,boxPadding:h}=r,f=xt(r.bodyFont);let d=f.lineHeight,m=0;const _=Ns(r.rtl,this.x,this.width),y=function(S){n.fillText(S,_.x(e.x+m),e.y+d/2),e.y+=d+s},E=_.textAlign(o);let w,v,b,L,O,D,x;for(n.textAlign=o,n.textBaseline="middle",n.font=f.string,e.x=Tu(this,E,r),n.fillStyle=r.bodyColor,Me(this.beforeBody,y),m=a&&E!=="right"?o==="center"?u/2+h:u+2+h:0,L=0,D=i.length;L<D;++L){for(w=i[L],v=this.labelTextColors[L],n.fillStyle=v,Me(w.before,y),b=w.lines,a&&b.length&&(this._drawColorBox(n,e,L,_,r),d=Math.max(f.lineHeight,l)),O=0,x=b.length;O<x;++O)y(b[O]),d=f.lineHeight;Me(w.after,y)}m=0,d=f.lineHeight,Me(this.afterBody,y),e.y-=s}drawFooter(e,n,r){const i=this.footer,s=i.length;let o,a;if(s){const l=Ns(r.rtl,this.x,this.width);for(e.x=Tu(this,r.footerAlign,r),e.y+=r.footerMarginTop,n.textAlign=l.textAlign(r.footerAlign),n.textBaseline="middle",o=xt(r.footerFont),n.fillStyle=r.footerColor,n.font=o.string,a=0;a<s;++a)n.fillText(i[a],l.x(e.x),e.y+o.lineHeight/2),e.y+=o.lineHeight+r.footerSpacing}}drawBackground(e,n,r,i){const{xAlign:s,yAlign:o}=this,{x:a,y:l}=e,{width:u,height:h}=r,{topLeft:f,topRight:d,bottomLeft:m,bottomRight:_}=Ms(i.cornerRadius);n.fillStyle=i.backgroundColor,n.strokeStyle=i.borderColor,n.lineWidth=i.borderWidth,n.beginPath(),n.moveTo(a+f,l),o==="top"&&this.drawCaret(e,n,r,i),n.lineTo(a+u-d,l),n.quadraticCurveTo(a+u,l,a+u,l+d),o==="center"&&s==="right"&&this.drawCaret(e,n,r,i),n.lineTo(a+u,l+h-_),n.quadraticCurveTo(a+u,l+h,a+u-_,l+h),o==="bottom"&&this.drawCaret(e,n,r,i),n.lineTo(a+m,l+h),n.quadraticCurveTo(a,l+h,a,l+h-m),o==="center"&&s==="left"&&this.drawCaret(e,n,r,i),n.lineTo(a,l+f),n.quadraticCurveTo(a,l,a+f,l),n.closePath(),n.fill(),i.borderWidth>0&&n.stroke()}_updateAnimationTarget(e){const n=this.chart,r=this.$animations,i=r&&r.x,s=r&&r.y;if(i||s){const o=aa[e.position].call(this,this._active,this._eventPosition);if(!o)return;const a=this._size=p0(this,e),l=Object.assign({},o,this._size),u=m0(n,e,l),h=g0(e,l,u,n);(i._to!==h.x||s._to!==h.y)&&(this.xAlign=u.xAlign,this.yAlign=u.yAlign,this.width=a.width,this.height=a.height,this.caretX=o.x,this.caretY=o.y,this._resolveAnimations().update(this,h))}}_willRender(){return!!this.opacity}draw(e){const n=this.options.setContext(this.getContext());let r=this.opacity;if(!r)return;this._updateAnimationTarget(n);const i={width:this.width,height:this.height},s={x:this.x,y:this.y};r=Math.abs(r)<.001?0:r;const o=Wt(n.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;n.enabled&&a&&(e.save(),e.globalAlpha=r,this.drawBackground(s,e,i,n),xS(e,n.textDirection),s.y+=o.top,this.drawTitle(s,e,n),this.drawBody(s,e,n),this.drawFooter(s,e,n),IS(e,n.textDirection),e.restore())}getActiveElements(){return this._active||[]}setActiveElements(e,n){const r=this._active,i=e.map(({datasetIndex:a,index:l})=>{const u=this.chart.getDatasetMeta(a);if(!u)throw new Error("Cannot find a dataset at index "+a);return{datasetIndex:a,element:u.data[l],index:l}}),s=!Mc(r,i),o=this._positionChanged(i,n);(s||o)&&(this._active=i,this._eventPosition=n,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(e,n,r=!0){if(n&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const i=this.options,s=this._active||[],o=this._getActiveElements(e,s,n,r),a=this._positionChanged(o,e),l=n||!Mc(o,s)||a;return l&&(this._active=o,(i.enabled||i.external)&&(this._eventPosition={x:e.x,y:e.y},this.update(!0,n))),l}_getActiveElements(e,n,r,i){const s=this.options;if(e.type==="mouseout")return[];if(!i)return n.filter(a=>this.chart.data.datasets[a.datasetIndex]&&this.chart.getDatasetMeta(a.datasetIndex).controller.getParsed(a.index)!==void 0);const o=this.chart.getElementsAtEventForMode(e,s.mode,s,r);return s.reverse&&o.reverse(),o}_positionChanged(e,n){const{caretX:r,caretY:i,options:s}=this,o=aa[s.position].call(this,e,n);return o!==!1&&(r!==o.x||i!==o.y)}}pe(Xp,"positioners",aa);var FO={id:"tooltip",_element:Xp,positioners:aa,afterInit(t,e,n){n&&(t.tooltip=new Xp({chart:t,options:n}))},beforeUpdate(t,e,n){t.tooltip&&t.tooltip.initialize(n)},reset(t,e,n){t.tooltip&&t.tooltip.initialize(n)},afterDraw(t){const e=t.tooltip;if(e&&e._willRender()){const n={tooltip:e};if(t.notifyPlugins("beforeTooltipDraw",{...n,cancelable:!0})===!1)return;e.draw(t.ctx),t.notifyPlugins("afterTooltipDraw",n)}},afterEvent(t,e){if(t.tooltip){const n=e.replay;t.tooltip.handleEvent(e.event,n,e.inChartArea)&&(e.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(t,e)=>e.bodyFont.size,boxWidth:(t,e)=>e.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:qS},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:t=>t!=="filter"&&t!=="itemSort"&&t!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]};function zO(t,e){const n=[],{bounds:i,step:s,min:o,max:a,precision:l,count:u,maxTicks:h,maxDigits:f,includeBounds:d}=t,m=s||1,_=h-1,{min:y,max:E}=e,w=!We(o),v=!We(a),b=!We(u),L=(E-y)/(f+1);let O=w2((E-y)/_/m)*m,D,x,S,T;if(O<1e-14&&!w&&!v)return[{value:y},{value:E}];T=Math.ceil(E/O)-Math.floor(y/O),T>_&&(O=w2(T*O/_/m)*m),We(l)||(D=Math.pow(10,l),O=Math.ceil(O*D)/D),i==="ticks"?(x=Math.floor(y/O)*O,S=Math.ceil(E/O)*O):(x=y,S=E),w&&v&&s&&mk((a-o)/s,O/1e3)?(T=Math.round(Math.min((a-o)/O,h)),O=(a-o)/T,x=o,S=a):b?(x=w?o:x,S=v?a:S,T=u-1,O=(S-x)/T):(T=(S-x)/O,Sa(T,Math.round(T),O/1e3)?T=Math.round(T):T=Math.ceil(T));const I=Math.max(E2(O),E2(x));D=Math.pow(10,We(l)?I:l),x=Math.round(x*D)/D,S=Math.round(S*D)/D;let C=0;for(w&&(d&&x!==o?(n.push({value:o}),x<o&&C++,Sa(Math.round((x+C*O)*D)/D,o,v0(o,L,t))&&C++):x<o&&C++);C<T;++C){const P=Math.round((x+C*O)*D)/D;if(v&&P>a)break;n.push({value:P})}return v&&d&&S!==a?n.length&&Sa(n[n.length-1].value,a,v0(a,L,t))?n[n.length-1].value=a:n.push({value:a}):(!v||S===a)&&n.push({value:S}),n}function v0(t,e,{horizontal:n,minRotation:r}){const i=zr(r),s=(n?Math.sin(i):Math.cos(i))||.001,o=.75*e*(""+t).length;return Math.min(e/s,o)}class Hc extends wo{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(e,n){return We(e)||(typeof e=="number"||e instanceof Number)&&!isFinite(+e)?null:+e}handleTickRangeOptions(){const{beginAtZero:e}=this.options,{minDefined:n,maxDefined:r}=this.getUserBounds();let{min:i,max:s}=this;const o=l=>i=n?i:l,a=l=>s=r?s:l;if(e){const l=Qs(i),u=Qs(s);l<0&&u<0?a(0):l>0&&u>0&&o(0)}if(i===s){let l=s===0?1:Math.abs(s*.05);a(s+l),e||o(i-l)}this.min=i,this.max=s}getTickLimit(){const e=this.options.ticks;let{maxTicksLimit:n,stepSize:r}=e,i;return r?(i=Math.ceil(this.max/r)-Math.floor(this.min/r)+1,i>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${r} would result generating up to ${i} ticks. Limiting to 1000.`),i=1e3)):(i=this.computeTickLimit(),n=n||11),n&&(i=Math.min(n,i)),i}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const e=this.options,n=e.ticks;let r=this.getTickLimit();r=Math.max(2,r);const i={maxTicks:r,bounds:e.bounds,min:e.min,max:e.max,precision:n.precision,step:n.stepSize,count:n.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:n.minRotation||0,includeBounds:n.includeBounds!==!1},s=this._range||this,o=zO(i,s);return e.bounds==="ticks"&&hS(o,this,"value"),e.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){const e=this.ticks;let n=this.min,r=this.max;if(super.configure(),this.options.offset&&e.length){const i=(r-n)/Math.max(e.length-1,1)/2;n-=i,r+=i}this._startValue=n,this._endValue=r,this._valueRange=r-n}getLabelForValue(e){return qg(e,this.chart.options.locale,this.options.ticks.format)}}class w0 extends Hc{determineDataLimits(){const{min:e,max:n}=this.getMinMax(!0);this.min=st(e)?e:0,this.max=st(n)?n:1,this.handleTickRangeOptions()}computeTickLimit(){const e=this.isHorizontal(),n=e?this.width:this.height,r=zr(this.options.ticks.minRotation),i=(e?Math.sin(r):Math.cos(r))||.001,s=this._resolveTickFontOptions(0);return Math.ceil(n/Math.min(40,s.lineHeight/i))}getPixelForValue(e){return e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getValueForPixel(e){return this._startValue+this.getDecimalForPixel(e)*this._valueRange}}pe(w0,"id","linear"),pe(w0,"defaults",{ticks:{callback:$h.formatters.numeric}});const Za=t=>Math.floor(Fr(t)),Ri=(t,e)=>Math.pow(10,Za(t)+e);function E0(t){return t/Math.pow(10,Za(t))===1}function S0(t,e,n){const r=Math.pow(10,n),i=Math.floor(t/r);return Math.ceil(e/r)-i}function jO(t,e){const n=e-t;let r=Za(n);for(;S0(t,e,r)>10;)r++;for(;S0(t,e,r)<10;)r--;return Math.min(r,Za(t))}function BO(t,{min:e,max:n}){e=ln(t.min,e);const r=[],i=Za(e);let s=jO(e,n),o=s<0?Math.pow(10,Math.abs(s)):1;const a=Math.pow(10,s),l=i>s?Math.pow(10,i):0,u=Math.round((e-l)*o)/o,h=Math.floor((e-l)/a/10)*a*10;let f=Math.floor((u-h)/Math.pow(10,s)),d=ln(t.min,Math.round((l+h+f*Math.pow(10,s))*o)/o);for(;d<n;)r.push({value:d,major:E0(d),significand:f}),f>=10?f=f<15?15:20:f++,f>=20&&(s++,f=2,o=s>=0?1:o),d=Math.round((l+h+f*Math.pow(10,s))*o)/o;const m=ln(t.max,d);return r.push({value:m,major:E0(m),significand:f}),r}class T0 extends wo{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(e,n){const r=Hc.prototype.parse.apply(this,[e,n]);if(r===0){this._zero=!0;return}return st(r)&&r>0?r:null}determineDataLimits(){const{min:e,max:n}=this.getMinMax(!0);this.min=st(e)?Math.max(0,e):null,this.max=st(n)?Math.max(0,n):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!st(this._userMin)&&(this.min=e===Ri(this.min,0)?Ri(this.min,-1):Ri(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:e,maxDefined:n}=this.getUserBounds();let r=this.min,i=this.max;const s=a=>r=e?r:a,o=a=>i=n?i:a;r===i&&(r<=0?(s(1),o(10)):(s(Ri(r,-1)),o(Ri(i,1)))),r<=0&&s(Ri(i,-1)),i<=0&&o(Ri(r,1)),this.min=r,this.max=i}buildTicks(){const e=this.options,n={min:this._userMin,max:this._userMax},r=BO(n,this);return e.bounds==="ticks"&&hS(r,this,"value"),e.reverse?(r.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),r}getLabelForValue(e){return e===void 0?"0":qg(e,this.chart.options.locale,this.options.ticks.format)}configure(){const e=this.min;super.configure(),this._startValue=Fr(e),this._valueRange=Fr(this.max)-Fr(e)}getPixelForValue(e){return(e===void 0||e===0)&&(e=this.min),e===null||isNaN(e)?NaN:this.getPixelForDecimal(e===this.min?0:(Fr(e)-this._startValue)/this._valueRange)}getValueForPixel(e){const n=this.getDecimalForPixel(e);return Math.pow(10,this._startValue+n*this._valueRange)}}pe(T0,"id","logarithmic"),pe(T0,"defaults",{ticks:{callback:$h.formatters.logarithmic,major:{enabled:!0}}});function Jp(t){const e=t.ticks;if(e.display&&t.display){const n=Wt(e.backdropPadding);return be(e.font&&e.font.size,ot.font.size)+n.height}return 0}function $O(t,e,n){return n=it(n)?n:[n],{w:Dk(t,e.string,n),h:n.length*e.lineHeight}}function b0(t,e,n,r,i){return t===r||t===i?{start:e-n/2,end:e+n/2}:t<r||t>i?{start:e-n,end:e}:{start:e,end:e+n}}function UO(t){const e={l:t.left+t._padding.left,r:t.right-t._padding.right,t:t.top+t._padding.top,b:t.bottom-t._padding.bottom},n=Object.assign({},e),r=[],i=[],s=t._pointLabels.length,o=t.options.pointLabels,a=o.centerPointLabels?wt/s:0;for(let l=0;l<s;l++){const u=o.setContext(t.getPointLabelContext(l));i[l]=u.padding;const h=t.getPointPosition(l,t.drawingArea+i[l],a),f=xt(u.font),d=$O(t.ctx,f,t._pointLabels[l]);r[l]=d;const m=cn(t.getIndexAngle(l)+a),_=Math.round(Ug(m)),y=b0(_,h.x,d.w,0,180),E=b0(_,h.y,d.h,90,270);HO(n,e,m,y,E)}t.setCenterPoint(e.l-n.l,n.r-e.r,e.t-n.t,n.b-e.b),t._pointLabelItems=KO(t,r,i)}function HO(t,e,n,r,i){const s=Math.abs(Math.sin(n)),o=Math.abs(Math.cos(n));let a=0,l=0;r.start<e.l?(a=(e.l-r.start)/s,t.l=Math.min(t.l,e.l-a)):r.end>e.r&&(a=(r.end-e.r)/s,t.r=Math.max(t.r,e.r+a)),i.start<e.t?(l=(e.t-i.start)/o,t.t=Math.min(t.t,e.t-l)):i.end>e.b&&(l=(i.end-e.b)/o,t.b=Math.max(t.b,e.b+l))}function WO(t,e,n){const r=t.drawingArea,{extra:i,additionalAngle:s,padding:o,size:a}=n,l=t.getPointPosition(e,r+i+o,s),u=Math.round(Ug(cn(l.angle+fn))),h=YO(l.y,a.h,u),f=GO(u),d=QO(l.x,a.w,f);return{visible:!0,x:l.x,y:h,textAlign:f,left:d,top:h,right:d+a.w,bottom:h+a.h}}function qO(t,e){if(!e)return!0;const{left:n,top:r,right:i,bottom:s}=t;return!(cr({x:n,y:r},e)||cr({x:n,y:s},e)||cr({x:i,y:r},e)||cr({x:i,y:s},e))}function KO(t,e,n){const r=[],i=t._pointLabels.length,s=t.options,{centerPointLabels:o,display:a}=s.pointLabels,l={extra:Jp(s)/2,additionalAngle:o?wt/i:0};let u;for(let h=0;h<i;h++){l.padding=n[h],l.size=e[h];const f=WO(t,h,l);r.push(f),a==="auto"&&(f.visible=qO(f,u),f.visible&&(u=f))}return r}function GO(t){return t===0||t===180?"center":t<180?"left":"right"}function QO(t,e,n){return n==="right"?t-=e:n==="center"&&(t-=e/2),t}function YO(t,e,n){return n===90||n===270?t-=e/2:(n>270||n<90)&&(t-=e),t}function XO(t,e,n){const{left:r,top:i,right:s,bottom:o}=n,{backdropColor:a}=e;if(!We(a)){const l=Ms(e.borderRadius),u=Wt(e.backdropPadding);t.fillStyle=a;const h=r-u.left,f=i-u.top,d=s-r+u.width,m=o-i+u.height;Object.values(l).some(_=>_!==0)?(t.beginPath(),Bc(t,{x:h,y:f,w:d,h:m,radius:l}),t.fill()):t.fillRect(h,f,d,m)}}function JO(t,e){const{ctx:n,options:{pointLabels:r}}=t;for(let i=e-1;i>=0;i--){const s=t._pointLabelItems[i];if(!s.visible)continue;const o=r.setContext(t.getPointLabelContext(i));XO(n,o,s);const a=xt(o.font),{x:l,y:u,textAlign:h}=s;Ys(n,t._pointLabels[i],l,u+a.lineHeight/2,a,{color:o.color,textAlign:h,textBaseline:"middle"})}}function KS(t,e,n,r){const{ctx:i}=t;if(n)i.arc(t.xCenter,t.yCenter,e,0,mn);else{let s=t.getPointPosition(0,e);i.moveTo(s.x,s.y);for(let o=1;o<r;o++)s=t.getPointPosition(o,e),i.lineTo(s.x,s.y)}}function ZO(t,e,n,r,i){const s=t.ctx,o=e.circular,{color:a,lineWidth:l}=e;!o&&!r||!a||!l||n<0||(s.save(),s.strokeStyle=a,s.lineWidth=l,s.setLineDash(i.dash||[]),s.lineDashOffset=i.dashOffset,s.beginPath(),KS(t,n,o,r),s.closePath(),s.stroke(),s.restore())}function eD(t,e,n){return gi(t,{label:n,index:e,type:"pointLabel"})}class la extends Hc{constructor(e){super(e),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const e=this._padding=Wt(Jp(this.options)/2),n=this.width=this.maxWidth-e.width,r=this.height=this.maxHeight-e.height;this.xCenter=Math.floor(this.left+n/2+e.left),this.yCenter=Math.floor(this.top+r/2+e.top),this.drawingArea=Math.floor(Math.min(n,r)/2)}determineDataLimits(){const{min:e,max:n}=this.getMinMax(!1);this.min=st(e)&&!isNaN(e)?e:0,this.max=st(n)&&!isNaN(n)?n:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/Jp(this.options))}generateTickLabels(e){Hc.prototype.generateTickLabels.call(this,e),this._pointLabels=this.getLabels().map((n,r)=>{const i=ze(this.options.pointLabels.callback,[n,r],this);return i||i===0?i:""}).filter((n,r)=>this.chart.getDataVisibility(r))}fit(){const e=this.options;e.display&&e.pointLabels.display?UO(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(e,n,r,i){this.xCenter+=Math.floor((e-n)/2),this.yCenter+=Math.floor((r-i)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(e,n,r,i))}getIndexAngle(e){const n=mn/(this._pointLabels.length||1),r=this.options.startAngle||0;return cn(e*n+zr(r))}getDistanceFromCenterForValue(e){if(We(e))return NaN;const n=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-e)*n:(e-this.min)*n}getValueForDistanceFromCenter(e){if(We(e))return NaN;const n=e/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-n:this.min+n}getPointLabelContext(e){const n=this._pointLabels||[];if(e>=0&&e<n.length){const r=n[e];return eD(this.getContext(),e,r)}}getPointPosition(e,n,r=0){const i=this.getIndexAngle(e)-fn+r;return{x:Math.cos(i)*n+this.xCenter,y:Math.sin(i)*n+this.yCenter,angle:i}}getPointPositionForValue(e,n){return this.getPointPosition(e,this.getDistanceFromCenterForValue(n))}getBasePosition(e){return this.getPointPositionForValue(e||0,this.getBaseValue())}getPointLabelPosition(e){const{left:n,top:r,right:i,bottom:s}=this._pointLabelItems[e];return{left:n,top:r,right:i,bottom:s}}drawBackground(){const{backgroundColor:e,grid:{circular:n}}=this.options;if(e){const r=this.ctx;r.save(),r.beginPath(),KS(this,this.getDistanceFromCenterForValue(this._endValue),n,this._pointLabels.length),r.closePath(),r.fillStyle=e,r.fill(),r.restore()}}drawGrid(){const e=this.ctx,n=this.options,{angleLines:r,grid:i,border:s}=n,o=this._pointLabels.length;let a,l,u;if(n.pointLabels.display&&JO(this,o),i.display&&this.ticks.forEach((h,f)=>{if(f!==0||f===0&&this.min<0){l=this.getDistanceFromCenterForValue(h.value);const d=this.getContext(f),m=i.setContext(d),_=s.setContext(d);ZO(this,m,l,o,_)}}),r.display){for(e.save(),a=o-1;a>=0;a--){const h=r.setContext(this.getPointLabelContext(a)),{color:f,lineWidth:d}=h;!d||!f||(e.lineWidth=d,e.strokeStyle=f,e.setLineDash(h.borderDash),e.lineDashOffset=h.borderDashOffset,l=this.getDistanceFromCenterForValue(n.reverse?this.min:this.max),u=this.getPointPosition(a,l),e.beginPath(),e.moveTo(this.xCenter,this.yCenter),e.lineTo(u.x,u.y),e.stroke())}e.restore()}}drawBorder(){}drawLabels(){const e=this.ctx,n=this.options,r=n.ticks;if(!r.display)return;const i=this.getIndexAngle(0);let s,o;e.save(),e.translate(this.xCenter,this.yCenter),e.rotate(i),e.textAlign="center",e.textBaseline="middle",this.ticks.forEach((a,l)=>{if(l===0&&this.min>=0&&!n.reverse)return;const u=r.setContext(this.getContext(l)),h=xt(u.font);if(s=this.getDistanceFromCenterForValue(this.ticks[l].value),u.showLabelBackdrop){e.font=h.string,o=e.measureText(a.label).width,e.fillStyle=u.backdropColor;const f=Wt(u.backdropPadding);e.fillRect(-o/2-f.left,-s-h.size/2-f.top,o+f.width,h.size+f.height)}Ys(e,a.label,0,-s,h,{color:u.color,strokeColor:u.textStrokeColor,strokeWidth:u.textStrokeWidth})}),e.restore()}drawTitle(){}}pe(la,"id","radialLinear"),pe(la,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:$h.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(e){return e},padding:5,centerPointLabels:!1}}),pe(la,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),pe(la,"descriptors",{angleLines:{_fallback:"grid"}});const Kh={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},Jt=Object.keys(Kh);function x0(t,e){return t-e}function I0(t,e){if(We(e))return null;const n=t._adapter,{parser:r,round:i,isoWeekday:s}=t._parseOpts;let o=e;return typeof r=="function"&&(o=r(o)),st(o)||(o=typeof r=="string"?n.parse(o,r):n.parse(o)),o===null?null:(i&&(o=i==="week"&&(zc(s)||s===!0)?n.startOf(o,"isoWeek",s):n.startOf(o,i)),+o)}function R0(t,e,n,r){const i=Jt.length;for(let s=Jt.indexOf(t);s<i-1;++s){const o=Kh[Jt[s]],a=o.steps?o.steps:Number.MAX_SAFE_INTEGER;if(o.common&&Math.ceil((n-e)/(a*o.size))<=r)return Jt[s]}return Jt[i-1]}function tD(t,e,n,r,i){for(let s=Jt.length-1;s>=Jt.indexOf(n);s--){const o=Jt[s];if(Kh[o].common&&t._adapter.diff(i,r,o)>=e-1)return o}return Jt[n?Jt.indexOf(n):0]}function nD(t){for(let e=Jt.indexOf(t)+1,n=Jt.length;e<n;++e)if(Kh[Jt[e]].common)return Jt[e]}function A0(t,e,n){if(!n)t[e]=!0;else if(n.length){const{lo:r,hi:i}=Hg(n,e),s=n[r]>=e?n[r]:n[i];t[s]=!0}}function rD(t,e,n,r){const i=t._adapter,s=+i.startOf(e[0].value,r),o=e[e.length-1].value;let a,l;for(a=s;a<=o;a=+i.add(a,1,r))l=n[a],l>=0&&(e[l].major=!0);return e}function C0(t,e,n){const r=[],i={},s=e.length;let o,a;for(o=0;o<s;++o)a=e[o],i[a]=o,r.push({value:a,major:!1});return s===0||!n?r:rD(t,r,i,n)}class Wc extends wo{constructor(e){super(e),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(e,n={}){const r=e.time||(e.time={}),i=this._adapter=new j9._date(e.adapters.date);i.init(n),Ea(r.displayFormats,i.formats()),this._parseOpts={parser:r.parser,round:r.round,isoWeekday:r.isoWeekday},super.init(e),this._normalized=n.normalized}parse(e,n){return e===void 0?null:I0(this,e)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const e=this.options,n=this._adapter,r=e.time.unit||"day";let{min:i,max:s,minDefined:o,maxDefined:a}=this.getUserBounds();function l(u){!o&&!isNaN(u.min)&&(i=Math.min(i,u.min)),!a&&!isNaN(u.max)&&(s=Math.max(s,u.max))}(!o||!a)&&(l(this._getLabelBounds()),(e.bounds!=="ticks"||e.ticks.source!=="labels")&&l(this.getMinMax(!1))),i=st(i)&&!isNaN(i)?i:+n.startOf(Date.now(),r),s=st(s)&&!isNaN(s)?s:+n.endOf(Date.now(),r)+1,this.min=Math.min(i,s-1),this.max=Math.max(i+1,s)}_getLabelBounds(){const e=this.getLabelTimestamps();let n=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY;return e.length&&(n=e[0],r=e[e.length-1]),{min:n,max:r}}buildTicks(){const e=this.options,n=e.time,r=e.ticks,i=r.source==="labels"?this.getLabelTimestamps():this._generate();e.bounds==="ticks"&&i.length&&(this.min=this._userMin||i[0],this.max=this._userMax||i[i.length-1]);const s=this.min,o=this.max,a=wk(i,s,o);return this._unit=n.unit||(r.autoSkip?R0(n.minUnit,this.min,this.max,this._getLabelCapacity(s)):tD(this,a.length,n.minUnit,this.min,this.max)),this._majorUnit=!r.major.enabled||this._unit==="year"?void 0:nD(this._unit),this.initOffsets(i),e.reverse&&a.reverse(),C0(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(e=>+e.value))}initOffsets(e=[]){let n=0,r=0,i,s;this.options.offset&&e.length&&(i=this.getDecimalForValue(e[0]),e.length===1?n=1-i:n=(this.getDecimalForValue(e[1])-i)/2,s=this.getDecimalForValue(e[e.length-1]),e.length===1?r=s:r=(s-this.getDecimalForValue(e[e.length-2]))/2);const o=e.length<3?.5:.25;n=ur(n,0,o),r=ur(r,0,o),this._offsets={start:n,end:r,factor:1/(n+1+r)}}_generate(){const e=this._adapter,n=this.min,r=this.max,i=this.options,s=i.time,o=s.unit||R0(s.minUnit,n,r,this._getLabelCapacity(n)),a=be(i.ticks.stepSize,1),l=o==="week"?s.isoWeekday:!1,u=zc(l)||l===!0,h={};let f=n,d,m;if(u&&(f=+e.startOf(f,"isoWeek",l)),f=+e.startOf(f,u?"day":o),e.diff(r,n,o)>1e5*a)throw new Error(n+" and "+r+" are too far apart with stepSize of "+a+" "+o);const _=i.ticks.source==="data"&&this.getDataTimestamps();for(d=f,m=0;d<r;d=+e.add(d,a,o),m++)A0(h,d,_);return(d===r||i.bounds==="ticks"||m===1)&&A0(h,d,_),Object.keys(h).sort(x0).map(y=>+y)}getLabelForValue(e){const n=this._adapter,r=this.options.time;return r.tooltipFormat?n.format(e,r.tooltipFormat):n.format(e,r.displayFormats.datetime)}format(e,n){const i=this.options.time.displayFormats,s=this._unit,o=n||i[s];return this._adapter.format(e,o)}_tickFormatFunction(e,n,r,i){const s=this.options,o=s.ticks.callback;if(o)return ze(o,[e,n,r],this);const a=s.time.displayFormats,l=this._unit,u=this._majorUnit,h=l&&a[l],f=u&&a[u],d=r[n],m=u&&f&&d&&d.major;return this._adapter.format(e,i||(m?f:h))}generateTickLabels(e){let n,r,i;for(n=0,r=e.length;n<r;++n)i=e[n],i.label=this._tickFormatFunction(i.value,n,e)}getDecimalForValue(e){return e===null?NaN:(e-this.min)/(this.max-this.min)}getPixelForValue(e){const n=this._offsets,r=this.getDecimalForValue(e);return this.getPixelForDecimal((n.start+r)*n.factor)}getValueForPixel(e){const n=this._offsets,r=this.getDecimalForPixel(e)/n.factor-n.end;return this.min+r*(this.max-this.min)}_getLabelSize(e){const n=this.options.ticks,r=this.ctx.measureText(e).width,i=zr(this.isHorizontal()?n.maxRotation:n.minRotation),s=Math.cos(i),o=Math.sin(i),a=this._resolveTickFontOptions(0).size;return{w:r*s+a*o,h:r*o+a*s}}_getLabelCapacity(e){const n=this.options.time,r=n.displayFormats,i=r[n.unit]||r.millisecond,s=this._tickFormatFunction(e,0,C0(this,[e],this._majorUnit),i),o=this._getLabelSize(s),a=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return a>0?a:1}getDataTimestamps(){let e=this._cache.data||[],n,r;if(e.length)return e;const i=this.getMatchingVisibleMetas();if(this._normalized&&i.length)return this._cache.data=i[0].controller.getAllParsedValues(this);for(n=0,r=i.length;n<r;++n)e=e.concat(i[n].controller.getAllParsedValues(this));return this._cache.data=this.normalize(e)}getLabelTimestamps(){const e=this._cache.labels||[];let n,r;if(e.length)return e;const i=this.getLabels();for(n=0,r=i.length;n<r;++n)e.push(I0(this,i[n]));return this._cache.labels=this._normalized?e:this.normalize(e)}normalize(e){return Sk(e.sort(x0))}}pe(Wc,"id","time"),pe(Wc,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function bu(t,e,n){let r=0,i=t.length-1,s,o,a,l;n?(e>=t[r].pos&&e<=t[i].pos&&({lo:r,hi:i}=Hp(t,"pos",e)),{pos:s,time:a}=t[r],{pos:o,time:l}=t[i]):(e>=t[r].time&&e<=t[i].time&&({lo:r,hi:i}=Hp(t,"time",e)),{time:s,pos:a}=t[r],{time:o,pos:l}=t[i]);const u=o-s;return u?a+(l-a)*(e-s)/u:a}class P0 extends Wc{constructor(e){super(e),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const e=this._getTimestampsForTable(),n=this._table=this.buildLookupTable(e);this._minPos=bu(n,this.min),this._tableRange=bu(n,this.max)-this._minPos,super.initOffsets(e)}buildLookupTable(e){const{min:n,max:r}=this,i=[],s=[];let o,a,l,u,h;for(o=0,a=e.length;o<a;++o)u=e[o],u>=n&&u<=r&&i.push(u);if(i.length<2)return[{time:n,pos:0},{time:r,pos:1}];for(o=0,a=i.length;o<a;++o)h=i[o+1],l=i[o-1],u=i[o],Math.round((h+l)/2)!==u&&s.push({time:u,pos:o/(a-1)});return s}_generate(){const e=this.min,n=this.max;let r=super.getDataTimestamps();return(!r.includes(e)||!r.length)&&r.splice(0,0,e),(!r.includes(n)||r.length===1)&&r.push(n),r.sort((i,s)=>i-s)}_getTimestampsForTable(){let e=this._cache.all||[];if(e.length)return e;const n=this.getDataTimestamps(),r=this.getLabelTimestamps();return n.length&&r.length?e=this.normalize(n.concat(r)):e=n.length?n:r,e=this._cache.all=e,e}getDecimalForValue(e){return(bu(this._table,e)-this._minPos)/this._tableRange}getValueForPixel(e){const n=this._offsets,r=this.getDecimalForPixel(e)/n.factor-n.end;return bu(this._table,r*this._tableRange+this._minPos,!0)}}pe(P0,"id","timeseries"),pe(P0,"defaults",Wc.defaults);const GS="label";function k0(t,e){typeof t=="function"?t(e):t&&(t.current=e)}function iD(t,e){const n=t.options;n&&e&&Object.assign(n,e)}function QS(t,e){t.labels=e}function YS(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:GS;const r=[];t.datasets=e.map(i=>{const s=t.datasets.find(o=>o[n]===i[n]);return!s||!i.data||r.includes(s)?{...i}:(r.push(s),Object.assign(s,i),s)})}function sD(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:GS;const n={labels:[],datasets:[]};return QS(n,t.labels),YS(n,t.datasets,e),n}function oD(t,e){const{height:n=150,width:r=300,redraw:i=!1,datasetIdKey:s,type:o,data:a,options:l,plugins:u=[],fallbackContent:h,updateMode:f,...d}=t,m=F.useRef(null),_=F.useRef(null),y=()=>{m.current&&(_.current=new qh(m.current,{type:o,data:sD(a,s),options:l&&{...l},plugins:u}),k0(e,_.current))},E=()=>{k0(e,null),_.current&&(_.current.destroy(),_.current=null)};return F.useEffect(()=>{!i&&_.current&&l&&iD(_.current,l)},[i,l]),F.useEffect(()=>{!i&&_.current&&QS(_.current.config.data,a.labels)},[i,a.labels]),F.useEffect(()=>{!i&&_.current&&a.datasets&&YS(_.current.config.data,a.datasets,s)},[i,a.datasets]),F.useEffect(()=>{_.current&&(i?(E(),setTimeout(y)):_.current.update(f))},[i,l,a.labels,a.datasets,f]),F.useEffect(()=>{_.current&&(E(),setTimeout(y))},[o]),F.useEffect(()=>(y(),()=>E()),[]),Nm.createElement("canvas",{ref:m,role:"img",height:n,width:r,...d},h)}const aD=F.forwardRef(oD);function lD(t,e){return qh.register(e),F.forwardRef((n,r)=>Nm.createElement(aD,{...n,ref:r,type:t}))}const uD=lD("radar",Xu);var XS={},JS={},Gh={},ZS={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0};t.default=e})(ZS);var cD="Expected a function",L0=NaN,hD="[object Symbol]",fD=/^\s+|\s+$/g,dD=/^[-+]0x[0-9a-f]+$/i,pD=/^0b[01]+$/i,mD=/^0o[0-7]+$/i,gD=parseInt,_D=typeof Wl=="object"&&Wl&&Wl.Object===Object&&Wl,yD=typeof self=="object"&&self&&self.Object===Object&&self,vD=_D||yD||Function("return this")(),wD=Object.prototype,ED=wD.toString,SD=Math.max,TD=Math.min,Ed=function(){return vD.Date.now()};function bD(t,e,n){var r,i,s,o,a,l,u=0,h=!1,f=!1,d=!0;if(typeof t!="function")throw new TypeError(cD);e=O0(e)||0,Zp(n)&&(h=!!n.leading,f="maxWait"in n,s=f?SD(O0(n.maxWait)||0,e):s,d="trailing"in n?!!n.trailing:d);function m(D){var x=r,S=i;return r=i=void 0,u=D,o=t.apply(S,x),o}function _(D){return u=D,a=setTimeout(w,e),h?m(D):o}function y(D){var x=D-l,S=D-u,T=e-x;return f?TD(T,s-S):T}function E(D){var x=D-l,S=D-u;return l===void 0||x>=e||x<0||f&&S>=s}function w(){var D=Ed();if(E(D))return v(D);a=setTimeout(w,y(D))}function v(D){return a=void 0,d&&r?m(D):(r=i=void 0,o)}function b(){a!==void 0&&clearTimeout(a),u=0,r=l=i=a=void 0}function L(){return a===void 0?o:v(Ed())}function O(){var D=Ed(),x=E(D);if(r=arguments,i=this,l=D,x){if(a===void 0)return _(l);if(f)return a=setTimeout(w,e),m(l)}return a===void 0&&(a=setTimeout(w,e)),o}return O.cancel=b,O.flush=L,O}function Zp(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function xD(t){return!!t&&typeof t=="object"}function ID(t){return typeof t=="symbol"||xD(t)&&ED.call(t)==hD}function O0(t){if(typeof t=="number")return t;if(ID(t))return L0;if(Zp(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=Zp(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(fD,"");var n=pD.test(t);return n||mD.test(t)?gD(t.slice(2),n?2:8):dD.test(t)?L0:+t}var RD=bD,eT={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var s="",o=0;o<arguments.length;o++){var a=arguments[o];a&&(s=i(s,r(a)))}return s}function r(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return n.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var o="";for(var a in s)e.call(s,a)&&s[a]&&(o=i(o,a));return o}function i(s,o){return o?s?s+" "+o:s+o:s}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(eT);var Qh=eT.exports,J={},e_={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=n(F);function n(i){return i&&i.__esModule?i:{default:i}}var r={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(s){return e.default.createElement("ul",{style:{display:"block"}},s)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(s){return e.default.createElement("button",null,s+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0,asNavFor:null,unslick:!1};t.default=r})(e_);Object.defineProperty(J,"__esModule",{value:!0});J.checkSpecKeys=J.checkNavigable=J.changeSlide=J.canUseDOM=J.canGoNext=void 0;J.clamp=nT;J.extractObject=void 0;J.filterSettings=$D;J.validSettings=J.swipeStart=J.swipeMove=J.swipeEnd=J.slidesOnRight=J.slidesOnLeft=J.slideHandler=J.siblingDirection=J.safePreventDefault=J.lazyStartIndex=J.lazySlidesOnRight=J.lazySlidesOnLeft=J.lazyEndIndex=J.keyHandler=J.initializedState=J.getWidth=J.getTrackLeft=J.getTrackCSS=J.getTrackAnimateCSS=J.getTotalSlides=J.getSwipeDirection=J.getSlideCount=J.getRequiredLazySlides=J.getPreClones=J.getPostClones=J.getOnDemandLazySlides=J.getNavigableIndexes=J.getHeight=void 0;var AD=tT(F),CD=tT(e_);function tT(t){return t&&t.__esModule?t:{default:t}}function el(t){"@babel/helpers - typeof";return el=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},el(t)}function D0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Ge(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?D0(Object(n),!0).forEach(function(r){PD(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):D0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function PD(t,e,n){return e=kD(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function kD(t){var e=LD(t,"string");return el(e)=="symbol"?e:String(e)}function LD(t,e){if(el(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(el(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function nT(t,e,n){return Math.max(e,Math.min(t,n))}var Vs=J.safePreventDefault=function(e){var n=["onTouchStart","onTouchMove","onWheel"];n.includes(e._reactName)||e.preventDefault()},rT=J.getOnDemandLazySlides=function(e){for(var n=[],r=iT(e),i=sT(e),s=r;s<i;s++)e.lazyLoadedList.indexOf(s)<0&&n.push(s);return n};J.getRequiredLazySlides=function(e){for(var n=[],r=iT(e),i=sT(e),s=r;s<i;s++)n.push(s);return n};var iT=J.lazyStartIndex=function(e){return e.currentSlide-OD(e)},sT=J.lazyEndIndex=function(e){return e.currentSlide+DD(e)},OD=J.lazySlidesOnLeft=function(e){return e.centerMode?Math.floor(e.slidesToShow/2)+(parseInt(e.centerPadding)>0?1:0):0},DD=J.lazySlidesOnRight=function(e){return e.centerMode?Math.floor((e.slidesToShow-1)/2)+1+(parseInt(e.centerPadding)>0?1:0):e.slidesToShow},em=J.getWidth=function(e){return e&&e.offsetWidth||0},oT=J.getHeight=function(e){return e&&e.offsetHeight||0},aT=J.getSwipeDirection=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r,i,s,o;return r=e.startX-e.curX,i=e.startY-e.curY,s=Math.atan2(i,r),o=Math.round(s*180/Math.PI),o<0&&(o=360-Math.abs(o)),o<=45&&o>=0||o<=360&&o>=315?"left":o>=135&&o<=225?"right":n===!0?o>=35&&o<=135?"up":"down":"vertical"},lT=J.canGoNext=function(e){var n=!0;return e.infinite||(e.centerMode&&e.currentSlide>=e.slideCount-1||e.slideCount<=e.slidesToShow||e.currentSlide>=e.slideCount-e.slidesToShow)&&(n=!1),n};J.extractObject=function(e,n){var r={};return n.forEach(function(i){return r[i]=e[i]}),r};J.initializedState=function(e){var n=AD.default.Children.count(e.children),r=e.listRef,i=Math.ceil(em(r)),s=e.trackRef&&e.trackRef.node,o=Math.ceil(em(s)),a;if(e.vertical)a=i;else{var l=e.centerMode&&parseInt(e.centerPadding)*2;typeof e.centerPadding=="string"&&e.centerPadding.slice(-1)==="%"&&(l*=i/100),a=Math.ceil((i-l)/e.slidesToShow)}var u=r&&oT(r.querySelector('[data-index="0"]')),h=u*e.slidesToShow,f=e.currentSlide===void 0?e.initialSlide:e.currentSlide;e.rtl&&e.currentSlide===void 0&&(f=n-1-e.initialSlide);var d=e.lazyLoadedList||[],m=rT(Ge(Ge({},e),{},{currentSlide:f,lazyLoadedList:d}));d=d.concat(m);var _={slideCount:n,slideWidth:a,listWidth:i,trackWidth:o,currentSlide:f,slideHeight:u,listHeight:h,lazyLoadedList:d};return e.autoplaying===null&&e.autoplay&&(_.autoplaying="playing"),_};J.slideHandler=function(e){var n=e.waitForAnimate,r=e.animating,i=e.fade,s=e.infinite,o=e.index,a=e.slideCount,l=e.lazyLoad,u=e.currentSlide,h=e.centerMode,f=e.slidesToScroll,d=e.slidesToShow,m=e.useCSS,_=e.lazyLoadedList;if(n&&r)return{};var y=o,E,w,v,b={},L={},O=s?o:nT(o,0,a-1);if(i){if(!s&&(o<0||o>=a))return{};o<0?y=o+a:o>=a&&(y=o-a),l&&_.indexOf(y)<0&&(_=_.concat(y)),b={animating:!0,currentSlide:y,lazyLoadedList:_,targetSlide:y},L={animating:!1,targetSlide:y}}else E=y,y<0?(E=y+a,s?a%f!==0&&(E=a-a%f):E=0):!lT(e)&&y>u?y=E=u:h&&y>=a?(y=s?a:a-1,E=s?0:a-1):y>=a&&(E=y-a,s?a%f!==0&&(E=0):E=a-d),!s&&y+d>=a&&(E=a-d),w=Kc(Ge(Ge({},e),{},{slideIndex:y})),v=Kc(Ge(Ge({},e),{},{slideIndex:E})),s||(w===v&&(y=E),w=v),l&&(_=_.concat(rT(Ge(Ge({},e),{},{currentSlide:y})))),m?(b={animating:!0,currentSlide:E,trackStyle:uT(Ge(Ge({},e),{},{left:w})),lazyLoadedList:_,targetSlide:O},L={animating:!1,currentSlide:E,trackStyle:qc(Ge(Ge({},e),{},{left:v})),swipeLeft:null,targetSlide:O}):b={currentSlide:E,trackStyle:qc(Ge(Ge({},e),{},{left:v})),lazyLoadedList:_,targetSlide:O};return{state:b,nextState:L}};J.changeSlide=function(e,n){var r,i,s,o,a,l=e.slidesToScroll,u=e.slidesToShow,h=e.slideCount,f=e.currentSlide,d=e.targetSlide,m=e.lazyLoad,_=e.infinite;if(o=h%l!==0,r=o?0:(h-f)%l,n.message==="previous")s=r===0?l:u-r,a=f-s,m&&!_&&(i=f-s,a=i===-1?h-1:i),_||(a=d-l);else if(n.message==="next")s=r===0?l:r,a=f+s,m&&!_&&(a=(f+l)%h+r),_||(a=d+l);else if(n.message==="dots")a=n.index*n.slidesToScroll;else if(n.message==="children"){if(a=n.index,_){var y=FD(Ge(Ge({},e),{},{targetSlide:a}));a>n.currentSlide&&y==="left"?a=a-h:a<n.currentSlide&&y==="right"&&(a=a+h)}}else n.message==="index"&&(a=Number(n.index));return a};J.keyHandler=function(e,n,r){return e.target.tagName.match("TEXTAREA|INPUT|SELECT")||!n?"":e.keyCode===37?r?"next":"previous":e.keyCode===39?r?"previous":"next":""};J.swipeStart=function(e,n,r){return e.target.tagName==="IMG"&&Vs(e),!n||!r&&e.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:e.touches?e.touches[0].pageX:e.clientX,startY:e.touches?e.touches[0].pageY:e.clientY,curX:e.touches?e.touches[0].pageX:e.clientX,curY:e.touches?e.touches[0].pageY:e.clientY}}};J.swipeMove=function(e,n){var r=n.scrolling,i=n.animating,s=n.vertical,o=n.swipeToSlide,a=n.verticalSwiping,l=n.rtl,u=n.currentSlide,h=n.edgeFriction,f=n.edgeDragged,d=n.onEdge,m=n.swiped,_=n.swiping,y=n.slideCount,E=n.slidesToScroll,w=n.infinite,v=n.touchObject,b=n.swipeEvent,L=n.listHeight,O=n.listWidth;if(!r){if(i)return Vs(e);s&&o&&a&&Vs(e);var D,x={},S=Kc(n);v.curX=e.touches?e.touches[0].pageX:e.clientX,v.curY=e.touches?e.touches[0].pageY:e.clientY,v.swipeLength=Math.round(Math.sqrt(Math.pow(v.curX-v.startX,2)));var T=Math.round(Math.sqrt(Math.pow(v.curY-v.startY,2)));if(!a&&!_&&T>10)return{scrolling:!0};a&&(v.swipeLength=T);var I=(l?-1:1)*(v.curX>v.startX?1:-1);a&&(I=v.curY>v.startY?1:-1);var C=Math.ceil(y/E),P=aT(n.touchObject,a),A=v.swipeLength;return w||(u===0&&(P==="right"||P==="down")||u+1>=C&&(P==="left"||P==="up")||!lT(n)&&(P==="left"||P==="up"))&&(A=v.swipeLength*h,f===!1&&d&&(d(P),x.edgeDragged=!0)),!m&&b&&(b(P),x.swiped=!0),s?D=S+A*(L/O)*I:l?D=S-A*I:D=S+A*I,a&&(D=S+A*I),x=Ge(Ge({},x),{},{touchObject:v,swipeLeft:D,trackStyle:qc(Ge(Ge({},n),{},{left:D}))}),Math.abs(v.curX-v.startX)<Math.abs(v.curY-v.startY)*.8||v.swipeLength>10&&(x.swiping=!0,Vs(e)),x}};J.swipeEnd=function(e,n){var r=n.dragging,i=n.swipe,s=n.touchObject,o=n.listWidth,a=n.touchThreshold,l=n.verticalSwiping,u=n.listHeight,h=n.swipeToSlide,f=n.scrolling,d=n.onSwipe,m=n.targetSlide,_=n.currentSlide,y=n.infinite;if(!r)return i&&Vs(e),{};var E=l?u/a:o/a,w=aT(s,l),v={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(f||!s.swipeLength)return v;if(s.swipeLength>E){Vs(e),d&&d(w);var b,L,O=y?_:m;switch(w){case"left":case"up":L=O+N0(n),b=h?M0(n,L):L,v.currentDirection=0;break;case"right":case"down":L=O-N0(n),b=h?M0(n,L):L,v.currentDirection=1;break;default:b=O}v.triggerSlideHandler=b}else{var D=Kc(n);v.trackStyle=uT(Ge(Ge({},n),{},{left:D}))}return v};var MD=J.getNavigableIndexes=function(e){for(var n=e.infinite?e.slideCount*2:e.slideCount,r=e.infinite?e.slidesToShow*-1:0,i=e.infinite?e.slidesToShow*-1:0,s=[];r<n;)s.push(r),r=i+e.slidesToScroll,i+=Math.min(e.slidesToScroll,e.slidesToShow);return s},M0=J.checkNavigable=function(e,n){var r=MD(e),i=0;if(n>r[r.length-1])n=r[r.length-1];else for(var s in r){if(n<r[s]){n=i;break}i=r[s]}return n},N0=J.getSlideCount=function(e){var n=e.centerMode?e.slideWidth*Math.floor(e.slidesToShow/2):0;if(e.swipeToSlide){var r,i=e.listRef,s=i.querySelectorAll&&i.querySelectorAll(".slick-slide")||[];if(Array.from(s).every(function(l){if(e.vertical){if(l.offsetTop+oT(l)/2>e.swipeLeft*-1)return r=l,!1}else if(l.offsetLeft-n+em(l)/2>e.swipeLeft*-1)return r=l,!1;return!0}),!r)return 0;var o=e.rtl===!0?e.slideCount-e.currentSlide:e.currentSlide,a=Math.abs(r.dataset.index-o)||1;return a}else return e.slidesToScroll},t_=J.checkSpecKeys=function(e,n){return n.reduce(function(r,i){return r&&e.hasOwnProperty(i)},!0)?null:console.error("Keys Missing:",e)},qc=J.getTrackCSS=function(e){t_(e,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var n,r,i=e.slideCount+2*e.slidesToShow;e.vertical?r=i*e.slideHeight:n=VD(e)*e.slideWidth;var s={opacity:1,transition:"",WebkitTransition:""};if(e.useTransform){var o=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",a=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",l=e.vertical?"translateY("+e.left+"px)":"translateX("+e.left+"px)";s=Ge(Ge({},s),{},{WebkitTransform:o,transform:a,msTransform:l})}else e.vertical?s.top=e.left:s.left=e.left;return e.fade&&(s={opacity:1}),n&&(s.width=n),r&&(s.height=r),window&&!window.addEventListener&&window.attachEvent&&(e.vertical?s.marginTop=e.left+"px":s.marginLeft=e.left+"px"),s},uT=J.getTrackAnimateCSS=function(e){t_(e,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var n=qc(e);return e.useTransform?(n.WebkitTransition="-webkit-transform "+e.speed+"ms "+e.cssEase,n.transition="transform "+e.speed+"ms "+e.cssEase):e.vertical?n.transition="top "+e.speed+"ms "+e.cssEase:n.transition="left "+e.speed+"ms "+e.cssEase,n},Kc=J.getTrackLeft=function(e){if(e.unslick)return 0;t_(e,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var n=e.slideIndex,r=e.trackRef,i=e.infinite,s=e.centerMode,o=e.slideCount,a=e.slidesToShow,l=e.slidesToScroll,u=e.slideWidth,h=e.listWidth,f=e.variableWidth,d=e.slideHeight,m=e.fade,_=e.vertical,y=0,E,w,v=0;if(m||e.slideCount===1)return 0;var b=0;if(i?(b=-tc(e),o%l!==0&&n+l>o&&(b=-(n>o?a-(n-o):o%l)),s&&(b+=parseInt(a/2))):(o%l!==0&&n+l>o&&(b=a-o%l),s&&(b=parseInt(a/2))),y=b*u,v=b*d,_?E=n*d*-1+v:E=n*u*-1+y,f===!0){var L,O=r&&r.node;if(L=n+tc(e),w=O&&O.childNodes[L],E=w?w.offsetLeft*-1:0,s===!0){L=i?n+tc(e):n,w=O&&O.children[L],E=0;for(var D=0;D<L;D++)E-=O&&O.children[D]&&O.children[D].offsetWidth;E-=parseInt(e.centerPadding),E+=w&&(h-w.offsetWidth)/2}}return E},tc=J.getPreClones=function(e){return e.unslick||!e.infinite?0:e.variableWidth?e.slideCount:e.slidesToShow+(e.centerMode?1:0)},ND=J.getPostClones=function(e){return e.unslick||!e.infinite?0:e.slideCount},VD=J.getTotalSlides=function(e){return e.slideCount===1?1:tc(e)+e.slideCount+ND(e)},FD=J.siblingDirection=function(e){return e.targetSlide>e.currentSlide?e.targetSlide>e.currentSlide+zD(e)?"left":"right":e.targetSlide<e.currentSlide-jD(e)?"right":"left"},zD=J.slidesOnRight=function(e){var n=e.slidesToShow,r=e.centerMode,i=e.rtl,s=e.centerPadding;if(r){var o=(n-1)/2+1;return parseInt(s)>0&&(o+=1),i&&n%2===0&&(o+=1),o}return i?0:n-1},jD=J.slidesOnLeft=function(e){var n=e.slidesToShow,r=e.centerMode,i=e.rtl,s=e.centerPadding;if(r){var o=(n-1)/2+1;return parseInt(s)>0&&(o+=1),!i&&n%2===0&&(o+=1),o}return i?n-1:0};J.canUseDOM=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)};var BD=J.validSettings=Object.keys(CD.default);function $D(t){return BD.reduce(function(e,n){return t.hasOwnProperty(n)&&(e[n]=t[n]),e},{})}var Yh={};Object.defineProperty(Yh,"__esModule",{value:!0});Yh.Track=void 0;var Lr=cT(F),Sd=cT(Qh),Td=J;function cT(t){return t&&t.__esModule?t:{default:t}}function Zs(t){"@babel/helpers - typeof";return Zs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Zs(t)}function tm(){return tm=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},tm.apply(this,arguments)}function UD(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function HD(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,fT(r.key),r)}}function WD(t,e,n){return e&&HD(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function qD(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&nm(t,e)}function nm(t,e){return nm=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},nm(t,e)}function KD(t){var e=hT();return function(){var r=Gc(t),i;if(e){var s=Gc(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return GD(this,i)}}function GD(t,e){if(e&&(Zs(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return rm(t)}function rm(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function hT(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(hT=function(){return!!t})()}function Gc(t){return Gc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Gc(t)}function V0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Qt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?V0(Object(n),!0).forEach(function(r){im(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):V0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function im(t,e,n){return e=fT(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function fT(t){var e=QD(t,"string");return Zs(e)=="symbol"?e:String(e)}function QD(t,e){if(Zs(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Zs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var bd=function(e){var n,r,i,s,o;e.rtl?o=e.slideCount-1-e.index:o=e.index,i=o<0||o>=e.slideCount,e.centerMode?(s=Math.floor(e.slidesToShow/2),r=(o-e.currentSlide)%e.slideCount===0,o>e.currentSlide-s-1&&o<=e.currentSlide+s&&(n=!0)):n=e.currentSlide<=o&&o<e.currentSlide+e.slidesToShow;var a;e.targetSlide<0?a=e.targetSlide+e.slideCount:e.targetSlide>=e.slideCount?a=e.targetSlide-e.slideCount:a=e.targetSlide;var l=o===a;return{"slick-slide":!0,"slick-active":n,"slick-center":r,"slick-cloned":i,"slick-current":l}},YD=function(e){var n={};return(e.variableWidth===void 0||e.variableWidth===!1)&&(n.width=e.slideWidth),e.fade&&(n.position="relative",e.vertical?n.top=-e.index*parseInt(e.slideHeight):n.left=-e.index*parseInt(e.slideWidth),n.opacity=e.currentSlide===e.index?1:0,n.zIndex=e.currentSlide===e.index?999:998,e.useCSS&&(n.transition="opacity "+e.speed+"ms "+e.cssEase+", visibility "+e.speed+"ms "+e.cssEase)),n},xd=function(e,n){return e.key||n},XD=function(e){var n,r=[],i=[],s=[],o=Lr.default.Children.count(e.children),a=(0,Td.lazyStartIndex)(e),l=(0,Td.lazyEndIndex)(e);return Lr.default.Children.forEach(e.children,function(u,h){var f,d={message:"children",index:h,slidesToScroll:e.slidesToScroll,currentSlide:e.currentSlide};!e.lazyLoad||e.lazyLoad&&e.lazyLoadedList.indexOf(h)>=0?f=u:f=Lr.default.createElement("div",null);var m=YD(Qt(Qt({},e),{},{index:h})),_=f.props.className||"",y=bd(Qt(Qt({},e),{},{index:h}));if(r.push(Lr.default.cloneElement(f,{key:"original"+xd(f,h),"data-index":h,className:(0,Sd.default)(y,_),tabIndex:"-1","aria-hidden":!y["slick-active"],style:Qt(Qt({outline:"none"},f.props.style||{}),m),onClick:function(v){f.props&&f.props.onClick&&f.props.onClick(v),e.focusOnSelect&&e.focusOnSelect(d)}})),e.infinite&&e.fade===!1){var E=o-h;E<=(0,Td.getPreClones)(e)&&(n=-E,n>=a&&(f=u),y=bd(Qt(Qt({},e),{},{index:n})),i.push(Lr.default.cloneElement(f,{key:"precloned"+xd(f,n),"data-index":n,tabIndex:"-1",className:(0,Sd.default)(y,_),"aria-hidden":!y["slick-active"],style:Qt(Qt({},f.props.style||{}),m),onClick:function(v){f.props&&f.props.onClick&&f.props.onClick(v),e.focusOnSelect&&e.focusOnSelect(d)}}))),n=o+h,n<l&&(f=u),y=bd(Qt(Qt({},e),{},{index:n})),s.push(Lr.default.cloneElement(f,{key:"postcloned"+xd(f,n),"data-index":n,tabIndex:"-1",className:(0,Sd.default)(y,_),"aria-hidden":!y["slick-active"],style:Qt(Qt({},f.props.style||{}),m),onClick:function(v){f.props&&f.props.onClick&&f.props.onClick(v),e.focusOnSelect&&e.focusOnSelect(d)}}))}}),e.rtl?i.concat(r,s).reverse():i.concat(r,s)};Yh.Track=function(t){qD(n,t);var e=KD(n);function n(){var r;UD(this,n);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=e.call.apply(e,[this].concat(s)),im(rm(r),"node",null),im(rm(r),"handleRef",function(a){r.node=a}),r}return WD(n,[{key:"render",value:function(){var i=XD(this.props),s=this.props,o=s.onMouseEnter,a=s.onMouseOver,l=s.onMouseLeave,u={onMouseEnter:o,onMouseOver:a,onMouseLeave:l};return Lr.default.createElement("div",tm({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},u),i)}}]),n}(Lr.default.PureComponent);var Xh={};function eo(t){"@babel/helpers - typeof";return eo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},eo(t)}Object.defineProperty(Xh,"__esModule",{value:!0});Xh.Dots=void 0;var xu=dT(F),JD=dT(Qh),F0=J;function dT(t){return t&&t.__esModule?t:{default:t}}function z0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function ZD(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?z0(Object(n),!0).forEach(function(r){eM(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):z0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function eM(t,e,n){return e=pT(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function tM(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function nM(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,pT(r.key),r)}}function rM(t,e,n){return e&&nM(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function pT(t){var e=iM(t,"string");return eo(e)=="symbol"?e:String(e)}function iM(t,e){if(eo(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(eo(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function sM(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&sm(t,e)}function sm(t,e){return sm=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},sm(t,e)}function oM(t){var e=mT();return function(){var r=Qc(t),i;if(e){var s=Qc(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return aM(this,i)}}function aM(t,e){if(e&&(eo(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return lM(t)}function lM(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function mT(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(mT=function(){return!!t})()}function Qc(t){return Qc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Qc(t)}var uM=function(e){var n;return e.infinite?n=Math.ceil(e.slideCount/e.slidesToScroll):n=Math.ceil((e.slideCount-e.slidesToShow)/e.slidesToScroll)+1,n};Xh.Dots=function(t){sM(n,t);var e=oM(n);function n(){return tM(this,n),e.apply(this,arguments)}return rM(n,[{key:"clickHandler",value:function(i,s){s.preventDefault(),this.props.clickHandler(i)}},{key:"render",value:function(){for(var i=this.props,s=i.onMouseEnter,o=i.onMouseOver,a=i.onMouseLeave,l=i.infinite,u=i.slidesToScroll,h=i.slidesToShow,f=i.slideCount,d=i.currentSlide,m=uM({slideCount:f,slidesToScroll:u,slidesToShow:h,infinite:l}),_={onMouseEnter:s,onMouseOver:o,onMouseLeave:a},y=[],E=0;E<m;E++){var w=(E+1)*u-1,v=l?w:(0,F0.clamp)(w,0,f-1),b=v-(u-1),L=l?b:(0,F0.clamp)(b,0,f-1),O=(0,JD.default)({"slick-active":l?d>=L&&d<=v:d===L}),D={message:"dots",index:E,slidesToScroll:u,currentSlide:d},x=this.clickHandler.bind(this,D);y=y.concat(xu.default.createElement("li",{key:E,className:O},xu.default.cloneElement(this.props.customPaging(E),{onClick:x})))}return xu.default.cloneElement(this.props.appendDots(y),ZD({className:this.props.dotsClass},_))}}]),n}(xu.default.PureComponent);var to={};function no(t){"@babel/helpers - typeof";return no=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},no(t)}Object.defineProperty(to,"__esModule",{value:!0});to.PrevArrow=to.NextArrow=void 0;var Fs=_T(F),gT=_T(Qh),cM=J;function _T(t){return t&&t.__esModule?t:{default:t}}function Yc(){return Yc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Yc.apply(this,arguments)}function j0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Xc(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?j0(Object(n),!0).forEach(function(r){hM(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):j0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function hM(t,e,n){return e=wT(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function yT(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function fM(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,wT(r.key),r)}}function vT(t,e,n){return e&&fM(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function wT(t){var e=dM(t,"string");return no(e)=="symbol"?e:String(e)}function dM(t,e){if(no(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(no(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function ET(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&om(t,e)}function om(t,e){return om=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},om(t,e)}function ST(t){var e=TT();return function(){var r=Jc(t),i;if(e){var s=Jc(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return pM(this,i)}}function pM(t,e){if(e&&(no(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return mM(t)}function mM(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function TT(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(TT=function(){return!!t})()}function Jc(t){return Jc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Jc(t)}to.PrevArrow=function(t){ET(n,t);var e=ST(n);function n(){return yT(this,n),e.apply(this,arguments)}return vT(n,[{key:"clickHandler",value:function(i,s){s&&s.preventDefault(),this.props.clickHandler(i,s)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-prev":!0},s=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(i["slick-disabled"]=!0,s=null);var o={key:"0","data-role":"none",className:(0,gT.default)(i),style:{display:"block"},onClick:s},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},l;return this.props.prevArrow?l=Fs.default.cloneElement(this.props.prevArrow,Xc(Xc({},o),a)):l=Fs.default.createElement("button",Yc({key:"0",type:"button"},o)," ","Previous"),l}}]),n}(Fs.default.PureComponent);to.NextArrow=function(t){ET(n,t);var e=ST(n);function n(){return yT(this,n),e.apply(this,arguments)}return vT(n,[{key:"clickHandler",value:function(i,s){s&&s.preventDefault(),this.props.clickHandler(i,s)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-next":!0},s=this.clickHandler.bind(this,{message:"next"});(0,cM.canGoNext)(this.props)||(i["slick-disabled"]=!0,s=null);var o={key:"1","data-role":"none",className:(0,gT.default)(i),style:{display:"block"},onClick:s},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},l;return this.props.nextArrow?l=Fs.default.cloneElement(this.props.nextArrow,Xc(Xc({},o),a)):l=Fs.default.createElement("button",Yc({key:"1",type:"button"},o)," ","Next"),l}}]),n}(Fs.default.PureComponent);var bT=function(){if(typeof Map<"u")return Map;function t(e,n){var r=-1;return e.some(function(i,s){return i[0]===n?(r=s,!0):!1}),r}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(n){var r=t(this.__entries__,n),i=this.__entries__[r];return i&&i[1]},e.prototype.set=function(n,r){var i=t(this.__entries__,n);~i?this.__entries__[i][1]=r:this.__entries__.push([n,r])},e.prototype.delete=function(n){var r=this.__entries__,i=t(r,n);~i&&r.splice(i,1)},e.prototype.has=function(n){return!!~t(this.__entries__,n)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var i=0,s=this.__entries__;i<s.length;i++){var o=s[i];n.call(r,o[1],o[0])}},e}()}(),am=typeof window<"u"&&typeof document<"u"&&window.document===document,Zc=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),gM=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(Zc):function(t){return setTimeout(function(){return t(Date.now())},1e3/60)}}(),_M=2;function yM(t,e){var n=!1,r=!1,i=0;function s(){n&&(n=!1,t()),r&&a()}function o(){gM(s)}function a(){var l=Date.now();if(n){if(l-i<_M)return;r=!0}else n=!0,r=!1,setTimeout(o,e);i=l}return a}var vM=20,wM=["top","right","bottom","left","width","height","size","weight"],EM=typeof MutationObserver<"u",SM=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=yM(this.refresh.bind(this),vM)}return t.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},t.prototype.removeObserver=function(e){var n=this.observers_,r=n.indexOf(e);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){var e=this.updateObservers_();e&&this.refresh()},t.prototype.updateObservers_=function(){var e=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return e.forEach(function(n){return n.broadcastActive()}),e.length>0},t.prototype.connect_=function(){!am||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),EM?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){!am||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(e){var n=e.propertyName,r=n===void 0?"":n,i=wM.some(function(s){return!!~r.indexOf(s)});i&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),xT=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n++){var i=r[n];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},ro=function(t){var e=t&&t.ownerDocument&&t.ownerDocument.defaultView;return e||Zc},IT=Jh(0,0,0,0);function eh(t){return parseFloat(t)||0}function B0(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce(function(r,i){var s=t["border-"+i+"-width"];return r+eh(s)},0)}function TM(t){for(var e=["top","right","bottom","left"],n={},r=0,i=e;r<i.length;r++){var s=i[r],o=t["padding-"+s];n[s]=eh(o)}return n}function bM(t){var e=t.getBBox();return Jh(0,0,e.width,e.height)}function xM(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return IT;var r=ro(t).getComputedStyle(t),i=TM(r),s=i.left+i.right,o=i.top+i.bottom,a=eh(r.width),l=eh(r.height);if(r.boxSizing==="border-box"&&(Math.round(a+s)!==e&&(a-=B0(r,"left","right")+s),Math.round(l+o)!==n&&(l-=B0(r,"top","bottom")+o)),!RM(t)){var u=Math.round(a+s)-e,h=Math.round(l+o)-n;Math.abs(u)!==1&&(a-=u),Math.abs(h)!==1&&(l-=h)}return Jh(i.left,i.top,a,l)}var IM=function(){return typeof SVGGraphicsElement<"u"?function(t){return t instanceof ro(t).SVGGraphicsElement}:function(t){return t instanceof ro(t).SVGElement&&typeof t.getBBox=="function"}}();function RM(t){return t===ro(t).document.documentElement}function AM(t){return am?IM(t)?bM(t):xM(t):IT}function CM(t){var e=t.x,n=t.y,r=t.width,i=t.height,s=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,o=Object.create(s.prototype);return xT(o,{x:e,y:n,width:r,height:i,top:n,right:e+r,bottom:i+n,left:e}),o}function Jh(t,e,n,r){return{x:t,y:e,width:n,height:r}}var PM=function(){function t(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Jh(0,0,0,0),this.target=e}return t.prototype.isActive=function(){var e=AM(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},t}(),kM=function(){function t(e,n){var r=CM(n);xT(this,{target:e,contentRect:r})}return t}(),LM=function(){function t(e,n,r){if(this.activeObservations_=[],this.observations_=new bT,typeof e!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=n,this.callbackCtx_=r}return t.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof ro(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(e)||(n.set(e,new PM(e)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof ro(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(e)&&(n.delete(e),n.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&e.activeObservations_.push(n)})},t.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new kM(r.target,r.broadcastRect())});this.callback_.call(e,n,e),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),RT=typeof WeakMap<"u"?new WeakMap:new bT,AT=function(){function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=SM.getInstance(),r=new LM(e,n,this);RT.set(this,r)}return t}();["observe","unobserve","disconnect"].forEach(function(t){AT.prototype[t]=function(){var e;return(e=RT.get(this))[t].apply(e,arguments)}});var OM=function(){return typeof Zc.ResizeObserver<"u"?Zc.ResizeObserver:AT}();const DM=Object.freeze(Object.defineProperty({__proto__:null,default:OM},Symbol.toStringTag,{value:"Module"})),MM=Wx(DM);Object.defineProperty(Gh,"__esModule",{value:!0});Gh.InnerSlider=void 0;var $t=El(F),NM=El(ZS),VM=El(RD),FM=El(Qh),Ye=J,zM=Yh,jM=Xh,$0=to,BM=El(MM);function El(t){return t&&t.__esModule?t:{default:t}}function Qi(t){"@babel/helpers - typeof";return Qi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Qi(t)}function th(){return th=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},th.apply(this,arguments)}function $M(t,e){if(t==null)return{};var n=UM(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function UM(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function U0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function ue(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?U0(Object(n),!0).forEach(function(r){ve(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):U0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function HM(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function WM(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,PT(r.key),r)}}function qM(t,e,n){return e&&WM(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function KM(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&lm(t,e)}function lm(t,e){return lm=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},lm(t,e)}function GM(t){var e=CT();return function(){var r=nh(t),i;if(e){var s=nh(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return QM(this,i)}}function QM(t,e){if(e&&(Qi(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ye(t)}function ye(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function CT(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(CT=function(){return!!t})()}function nh(t){return nh=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},nh(t)}function ve(t,e,n){return e=PT(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function PT(t){var e=YM(t,"string");return Qi(e)=="symbol"?e:String(e)}function YM(t,e){if(Qi(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Qi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}Gh.InnerSlider=function(t){KM(n,t);var e=GM(n);function n(r){var i;HM(this,n),i=e.call(this,r),ve(ye(i),"listRefHandler",function(o){return i.list=o}),ve(ye(i),"trackRefHandler",function(o){return i.track=o}),ve(ye(i),"adaptHeight",function(){if(i.props.adaptiveHeight&&i.list){var o=i.list.querySelector('[data-index="'.concat(i.state.currentSlide,'"]'));i.list.style.height=(0,Ye.getHeight)(o)+"px"}}),ve(ye(i),"componentDidMount",function(){if(i.props.onInit&&i.props.onInit(),i.props.lazyLoad){var o=(0,Ye.getOnDemandLazySlides)(ue(ue({},i.props),i.state));o.length>0&&(i.setState(function(l){return{lazyLoadedList:l.lazyLoadedList.concat(o)}}),i.props.onLazyLoad&&i.props.onLazyLoad(o))}var a=ue({listRef:i.list,trackRef:i.track},i.props);i.updateState(a,!0,function(){i.adaptHeight(),i.props.autoplay&&i.autoPlay("update")}),i.props.lazyLoad==="progressive"&&(i.lazyLoadTimer=setInterval(i.progressiveLazyLoad,1e3)),i.ro=new BM.default(function(){i.state.animating?(i.onWindowResized(!1),i.callbackTimers.push(setTimeout(function(){return i.onWindowResized()},i.props.speed))):i.onWindowResized()}),i.ro.observe(i.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(l){l.onfocus=i.props.pauseOnFocus?i.onSlideFocus:null,l.onblur=i.props.pauseOnFocus?i.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",i.onWindowResized):window.attachEvent("onresize",i.onWindowResized)}),ve(ye(i),"componentWillUnmount",function(){i.animationEndCallback&&clearTimeout(i.animationEndCallback),i.lazyLoadTimer&&clearInterval(i.lazyLoadTimer),i.callbackTimers.length&&(i.callbackTimers.forEach(function(o){return clearTimeout(o)}),i.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",i.onWindowResized):window.detachEvent("onresize",i.onWindowResized),i.autoplayTimer&&clearInterval(i.autoplayTimer),i.ro.disconnect()}),ve(ye(i),"componentDidUpdate",function(o){if(i.checkImagesLoad(),i.props.onReInit&&i.props.onReInit(),i.props.lazyLoad){var a=(0,Ye.getOnDemandLazySlides)(ue(ue({},i.props),i.state));a.length>0&&(i.setState(function(h){return{lazyLoadedList:h.lazyLoadedList.concat(a)}}),i.props.onLazyLoad&&i.props.onLazyLoad(a))}i.adaptHeight();var l=ue(ue({listRef:i.list,trackRef:i.track},i.props),i.state),u=i.didPropsChange(o);u&&i.updateState(l,u,function(){i.state.currentSlide>=$t.default.Children.count(i.props.children)&&i.changeSlide({message:"index",index:$t.default.Children.count(i.props.children)-i.props.slidesToShow,currentSlide:i.state.currentSlide}),i.props.autoplay?i.autoPlay("update"):i.pause("paused")})}),ve(ye(i),"onWindowResized",function(o){i.debouncedResize&&i.debouncedResize.cancel(),i.debouncedResize=(0,VM.default)(function(){return i.resizeWindow(o)},50),i.debouncedResize()}),ve(ye(i),"resizeWindow",function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,a=!!(i.track&&i.track.node);if(a){var l=ue(ue({listRef:i.list,trackRef:i.track},i.props),i.state);i.updateState(l,o,function(){i.props.autoplay?i.autoPlay("update"):i.pause("paused")}),i.setState({animating:!1}),clearTimeout(i.animationEndCallback),delete i.animationEndCallback}}),ve(ye(i),"updateState",function(o,a,l){var u=(0,Ye.initializedState)(o);o=ue(ue(ue({},o),u),{},{slideIndex:u.currentSlide});var h=(0,Ye.getTrackLeft)(o);o=ue(ue({},o),{},{left:h});var f=(0,Ye.getTrackCSS)(o);(a||$t.default.Children.count(i.props.children)!==$t.default.Children.count(o.children))&&(u.trackStyle=f),i.setState(u,l)}),ve(ye(i),"ssrInit",function(){if(i.props.variableWidth){var o=0,a=0,l=[],u=(0,Ye.getPreClones)(ue(ue(ue({},i.props),i.state),{},{slideCount:i.props.children.length})),h=(0,Ye.getPostClones)(ue(ue(ue({},i.props),i.state),{},{slideCount:i.props.children.length}));i.props.children.forEach(function(x){l.push(x.props.style.width),o+=x.props.style.width});for(var f=0;f<u;f++)a+=l[l.length-1-f],o+=l[l.length-1-f];for(var d=0;d<h;d++)o+=l[d];for(var m=0;m<i.state.currentSlide;m++)a+=l[m];var _={width:o+"px",left:-a+"px"};if(i.props.centerMode){var y="".concat(l[i.state.currentSlide],"px");_.left="calc(".concat(_.left," + (100% - ").concat(y,") / 2 ) ")}return{trackStyle:_}}var E=$t.default.Children.count(i.props.children),w=ue(ue(ue({},i.props),i.state),{},{slideCount:E}),v=(0,Ye.getPreClones)(w)+(0,Ye.getPostClones)(w)+E,b=100/i.props.slidesToShow*v,L=100/v,O=-L*((0,Ye.getPreClones)(w)+i.state.currentSlide)*b/100;i.props.centerMode&&(O+=(100-L*b/100)/2);var D={width:b+"%",left:O+"%"};return{slideWidth:L+"%",trackStyle:D}}),ve(ye(i),"checkImagesLoad",function(){var o=i.list&&i.list.querySelectorAll&&i.list.querySelectorAll(".slick-slide img")||[],a=o.length,l=0;Array.prototype.forEach.call(o,function(u){var h=function(){return++l&&l>=a&&i.onWindowResized()};if(!u.onclick)u.onclick=function(){return u.parentNode.focus()};else{var f=u.onclick;u.onclick=function(d){f(d),u.parentNode.focus()}}u.onload||(i.props.lazyLoad?u.onload=function(){i.adaptHeight(),i.callbackTimers.push(setTimeout(i.onWindowResized,i.props.speed))}:(u.onload=h,u.onerror=function(){h(),i.props.onLazyLoadError&&i.props.onLazyLoadError()}))})}),ve(ye(i),"progressiveLazyLoad",function(){for(var o=[],a=ue(ue({},i.props),i.state),l=i.state.currentSlide;l<i.state.slideCount+(0,Ye.getPostClones)(a);l++)if(i.state.lazyLoadedList.indexOf(l)<0){o.push(l);break}for(var u=i.state.currentSlide-1;u>=-(0,Ye.getPreClones)(a);u--)if(i.state.lazyLoadedList.indexOf(u)<0){o.push(u);break}o.length>0?(i.setState(function(h){return{lazyLoadedList:h.lazyLoadedList.concat(o)}}),i.props.onLazyLoad&&i.props.onLazyLoad(o)):i.lazyLoadTimer&&(clearInterval(i.lazyLoadTimer),delete i.lazyLoadTimer)}),ve(ye(i),"slideHandler",function(o){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=i.props,u=l.asNavFor,h=l.beforeChange,f=l.onLazyLoad,d=l.speed,m=l.afterChange,_=i.state.currentSlide,y=(0,Ye.slideHandler)(ue(ue(ue({index:o},i.props),i.state),{},{trackRef:i.track,useCSS:i.props.useCSS&&!a})),E=y.state,w=y.nextState;if(E){h&&h(_,E.currentSlide);var v=E.lazyLoadedList.filter(function(b){return i.state.lazyLoadedList.indexOf(b)<0});f&&v.length>0&&f(v),!i.props.waitForAnimate&&i.animationEndCallback&&(clearTimeout(i.animationEndCallback),m&&m(_),delete i.animationEndCallback),i.setState(E,function(){u&&i.asNavForIndex!==o&&(i.asNavForIndex=o,u.innerSlider.slideHandler(o)),w&&(i.animationEndCallback=setTimeout(function(){var b=w.animating,L=$M(w,["animating"]);i.setState(L,function(){i.callbackTimers.push(setTimeout(function(){return i.setState({animating:b})},10)),m&&m(E.currentSlide),delete i.animationEndCallback})},d))})}}),ve(ye(i),"changeSlide",function(o){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=ue(ue({},i.props),i.state),u=(0,Ye.changeSlide)(l,o);if(!(u!==0&&!u)&&(a===!0?i.slideHandler(u,a):i.slideHandler(u),i.props.autoplay&&i.autoPlay("update"),i.props.focusOnSelect)){var h=i.list.querySelectorAll(".slick-current");h[0]&&h[0].focus()}}),ve(ye(i),"clickHandler",function(o){i.clickable===!1&&(o.stopPropagation(),o.preventDefault()),i.clickable=!0}),ve(ye(i),"keyHandler",function(o){var a=(0,Ye.keyHandler)(o,i.props.accessibility,i.props.rtl);a!==""&&i.changeSlide({message:a})}),ve(ye(i),"selectHandler",function(o){i.changeSlide(o)}),ve(ye(i),"disableBodyScroll",function(){var o=function(l){l=l||window.event,l.preventDefault&&l.preventDefault(),l.returnValue=!1};window.ontouchmove=o}),ve(ye(i),"enableBodyScroll",function(){window.ontouchmove=null}),ve(ye(i),"swipeStart",function(o){i.props.verticalSwiping&&i.disableBodyScroll();var a=(0,Ye.swipeStart)(o,i.props.swipe,i.props.draggable);a!==""&&i.setState(a)}),ve(ye(i),"swipeMove",function(o){var a=(0,Ye.swipeMove)(o,ue(ue(ue({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));a&&(a.swiping&&(i.clickable=!1),i.setState(a))}),ve(ye(i),"swipeEnd",function(o){var a=(0,Ye.swipeEnd)(o,ue(ue(ue({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));if(a){var l=a.triggerSlideHandler;delete a.triggerSlideHandler,i.setState(a),l!==void 0&&(i.slideHandler(l),i.props.verticalSwiping&&i.enableBodyScroll())}}),ve(ye(i),"touchEnd",function(o){i.swipeEnd(o),i.clickable=!0}),ve(ye(i),"slickPrev",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"previous"})},0))}),ve(ye(i),"slickNext",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"next"})},0))}),ve(ye(i),"slickGoTo",function(o){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(o=Number(o),isNaN(o))return"";i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"index",index:o,currentSlide:i.state.currentSlide},a)},0))}),ve(ye(i),"play",function(){var o;if(i.props.rtl)o=i.state.currentSlide-i.props.slidesToScroll;else if((0,Ye.canGoNext)(ue(ue({},i.props),i.state)))o=i.state.currentSlide+i.props.slidesToScroll;else return!1;i.slideHandler(o)}),ve(ye(i),"autoPlay",function(o){i.autoplayTimer&&clearInterval(i.autoplayTimer);var a=i.state.autoplaying;if(o==="update"){if(a==="hovered"||a==="focused"||a==="paused")return}else if(o==="leave"){if(a==="paused"||a==="focused")return}else if(o==="blur"&&(a==="paused"||a==="hovered"))return;i.autoplayTimer=setInterval(i.play,i.props.autoplaySpeed+50),i.setState({autoplaying:"playing"})}),ve(ye(i),"pause",function(o){i.autoplayTimer&&(clearInterval(i.autoplayTimer),i.autoplayTimer=null);var a=i.state.autoplaying;o==="paused"?i.setState({autoplaying:"paused"}):o==="focused"?(a==="hovered"||a==="playing")&&i.setState({autoplaying:"focused"}):a==="playing"&&i.setState({autoplaying:"hovered"})}),ve(ye(i),"onDotsOver",function(){return i.props.autoplay&&i.pause("hovered")}),ve(ye(i),"onDotsLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),ve(ye(i),"onTrackOver",function(){return i.props.autoplay&&i.pause("hovered")}),ve(ye(i),"onTrackLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),ve(ye(i),"onSlideFocus",function(){return i.props.autoplay&&i.pause("focused")}),ve(ye(i),"onSlideBlur",function(){return i.props.autoplay&&i.state.autoplaying==="focused"&&i.autoPlay("blur")}),ve(ye(i),"render",function(){var o=(0,FM.default)("slick-slider",i.props.className,{"slick-vertical":i.props.vertical,"slick-initialized":!0}),a=ue(ue({},i.props),i.state),l=(0,Ye.extractObject)(a,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),u=i.props.pauseOnHover;l=ue(ue({},l),{},{onMouseEnter:u?i.onTrackOver:null,onMouseLeave:u?i.onTrackLeave:null,onMouseOver:u?i.onTrackOver:null,focusOnSelect:i.props.focusOnSelect&&i.clickable?i.selectHandler:null});var h;if(i.props.dots===!0&&i.state.slideCount>=i.props.slidesToShow){var f=(0,Ye.extractObject)(a,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),d=i.props.pauseOnDotsHover;f=ue(ue({},f),{},{clickHandler:i.changeSlide,onMouseEnter:d?i.onDotsLeave:null,onMouseOver:d?i.onDotsOver:null,onMouseLeave:d?i.onDotsLeave:null}),h=$t.default.createElement(jM.Dots,f)}var m,_,y=(0,Ye.extractObject)(a,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);y.clickHandler=i.changeSlide,i.props.arrows&&(m=$t.default.createElement($0.PrevArrow,y),_=$t.default.createElement($0.NextArrow,y));var E=null;i.props.vertical&&(E={height:i.state.listHeight});var w=null;i.props.vertical===!1?i.props.centerMode===!0&&(w={padding:"0px "+i.props.centerPadding}):i.props.centerMode===!0&&(w={padding:i.props.centerPadding+" 0px"});var v=ue(ue({},E),w),b=i.props.touchMove,L={className:"slick-list",style:v,onClick:i.clickHandler,onMouseDown:b?i.swipeStart:null,onMouseMove:i.state.dragging&&b?i.swipeMove:null,onMouseUp:b?i.swipeEnd:null,onMouseLeave:i.state.dragging&&b?i.swipeEnd:null,onTouchStart:b?i.swipeStart:null,onTouchMove:i.state.dragging&&b?i.swipeMove:null,onTouchEnd:b?i.touchEnd:null,onTouchCancel:i.state.dragging&&b?i.swipeEnd:null,onKeyDown:i.props.accessibility?i.keyHandler:null},O={className:o,dir:"ltr",style:i.props.style};return i.props.unslick&&(L={className:"slick-list"},O={className:o}),$t.default.createElement("div",O,i.props.unslick?"":m,$t.default.createElement("div",th({ref:i.listRefHandler},L),$t.default.createElement(zM.Track,th({ref:i.trackRefHandler},l),i.props.children)),i.props.unslick?"":_,i.props.unslick?"":h)}),i.list=null,i.track=null,i.state=ue(ue({},NM.default),{},{currentSlide:i.props.initialSlide,targetSlide:i.props.initialSlide?i.props.initialSlide:0,slideCount:$t.default.Children.count(i.props.children)}),i.callbackTimers=[],i.clickable=!0,i.debouncedResize=null;var s=i.ssrInit();return i.state=ue(ue({},i.state),s),i}return qM(n,[{key:"didPropsChange",value:function(i){for(var s=!1,o=0,a=Object.keys(this.props);o<a.length;o++){var l=a[o];if(!i.hasOwnProperty(l)){s=!0;break}if(!(Qi(i[l])==="object"||typeof i[l]=="function"||isNaN(i[l]))&&i[l]!==this.props[l]){s=!0;break}}return s||$t.default.Children.count(this.props.children)!==$t.default.Children.count(i.children)}}]),n}($t.default.Component);var XM=function(t){return t.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}).toLowerCase()},JM=XM,ZM=JM,eN=function(t){var e=/[height|width]$/;return e.test(t)},H0=function(t){var e="",n=Object.keys(t);return n.forEach(function(r,i){var s=t[r];r=ZM(r),eN(r)&&typeof s=="number"&&(s=s+"px"),s===!0?e+=r:s===!1?e+="not "+r:e+="("+r+": "+s+")",i<n.length-1&&(e+=" and ")}),e},tN=function(t){var e="";return typeof t=="string"?t:t instanceof Array?(t.forEach(function(n,r){e+=H0(n),r<t.length-1&&(e+=", ")}),e):H0(t)},nN=tN,Id,W0;function rN(){if(W0)return Id;W0=1;function t(e){this.options=e,!e.deferSetup&&this.setup()}return t.prototype={constructor:t,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(e){return this.options===e||this.options.match===e}},Id=t,Id}var Rd,q0;function kT(){if(q0)return Rd;q0=1;function t(r,i){var s=0,o=r.length,a;for(s;s<o&&(a=i(r[s],s),a!==!1);s++);}function e(r){return Object.prototype.toString.apply(r)==="[object Array]"}function n(r){return typeof r=="function"}return Rd={isFunction:n,isArray:e,each:t},Rd}var Ad,K0;function iN(){if(K0)return Ad;K0=1;var t=rN(),e=kT().each;function n(r,i){this.query=r,this.isUnconditional=i,this.handlers=[],this.mql=window.matchMedia(r);var s=this;this.listener=function(o){s.mql=o.currentTarget||o,s.assess()},this.mql.addListener(this.listener)}return n.prototype={constuctor:n,addHandler:function(r){var i=new t(r);this.handlers.push(i),this.matches()&&i.on()},removeHandler:function(r){var i=this.handlers;e(i,function(s,o){if(s.equals(r))return s.destroy(),!i.splice(o,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){e(this.handlers,function(r){r.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var r=this.matches()?"on":"off";e(this.handlers,function(i){i[r]()})}},Ad=n,Ad}var Cd,G0;function sN(){if(G0)return Cd;G0=1;var t=iN(),e=kT(),n=e.each,r=e.isFunction,i=e.isArray;function s(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}return s.prototype={constructor:s,register:function(o,a,l){var u=this.queries,h=l&&this.browserIsIncapable;return u[o]||(u[o]=new t(o,h)),r(a)&&(a={match:a}),i(a)||(a=[a]),n(a,function(f){r(f)&&(f={match:f}),u[o].addHandler(f)}),this},unregister:function(o,a){var l=this.queries[o];return l&&(a?l.removeHandler(a):(l.clear(),delete this.queries[o])),this}},Cd=s,Cd}var Pd,Q0;function oN(){if(Q0)return Pd;Q0=1;var t=sN();return Pd=new t,Pd}(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=o(F),n=Gh,r=o(nN),i=o(e_),s=J;function o(T){return T&&T.__esModule?T:{default:T}}function a(T){"@babel/helpers - typeof";return a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(I){return typeof I}:function(I){return I&&typeof Symbol=="function"&&I.constructor===Symbol&&I!==Symbol.prototype?"symbol":typeof I},a(T)}function l(){return l=Object.assign?Object.assign.bind():function(T){for(var I=1;I<arguments.length;I++){var C=arguments[I];for(var P in C)Object.prototype.hasOwnProperty.call(C,P)&&(T[P]=C[P])}return T},l.apply(this,arguments)}function u(T,I){var C=Object.keys(T);if(Object.getOwnPropertySymbols){var P=Object.getOwnPropertySymbols(T);I&&(P=P.filter(function(A){return Object.getOwnPropertyDescriptor(T,A).enumerable})),C.push.apply(C,P)}return C}function h(T){for(var I=1;I<arguments.length;I++){var C=arguments[I]!=null?arguments[I]:{};I%2?u(Object(C),!0).forEach(function(P){O(T,P,C[P])}):Object.getOwnPropertyDescriptors?Object.defineProperties(T,Object.getOwnPropertyDescriptors(C)):u(Object(C)).forEach(function(P){Object.defineProperty(T,P,Object.getOwnPropertyDescriptor(C,P))})}return T}function f(T,I){if(!(T instanceof I))throw new TypeError("Cannot call a class as a function")}function d(T,I){for(var C=0;C<I.length;C++){var P=I[C];P.enumerable=P.enumerable||!1,P.configurable=!0,"value"in P&&(P.writable=!0),Object.defineProperty(T,D(P.key),P)}}function m(T,I,C){return I&&d(T.prototype,I),Object.defineProperty(T,"prototype",{writable:!1}),T}function _(T,I){if(typeof I!="function"&&I!==null)throw new TypeError("Super expression must either be null or a function");T.prototype=Object.create(I&&I.prototype,{constructor:{value:T,writable:!0,configurable:!0}}),Object.defineProperty(T,"prototype",{writable:!1}),I&&y(T,I)}function y(T,I){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(P,A){return P.__proto__=A,P},y(T,I)}function E(T){var I=b();return function(){var P=L(T),A;if(I){var Z=L(this).constructor;A=Reflect.construct(P,arguments,Z)}else A=P.apply(this,arguments);return w(this,A)}}function w(T,I){if(I&&(a(I)==="object"||typeof I=="function"))return I;if(I!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return v(T)}function v(T){if(T===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return T}function b(){try{var T=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(b=function(){return!!T})()}function L(T){return L=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(C){return C.__proto__||Object.getPrototypeOf(C)},L(T)}function O(T,I,C){return I=D(I),I in T?Object.defineProperty(T,I,{value:C,enumerable:!0,configurable:!0,writable:!0}):T[I]=C,T}function D(T){var I=x(T,"string");return a(I)=="symbol"?I:String(I)}function x(T,I){if(a(T)!="object"||!T)return T;var C=T[Symbol.toPrimitive];if(C!==void 0){var P=C.call(T,I||"default");if(a(P)!="object")return P;throw new TypeError("@@toPrimitive must return a primitive value.")}return(I==="string"?String:Number)(T)}var S=(0,s.canUseDOM)()&&oN();t.default=function(T){_(C,T);var I=E(C);function C(P){var A;return f(this,C),A=I.call(this,P),O(v(A),"innerSliderRefHandler",function(Z){return A.innerSlider=Z}),O(v(A),"slickPrev",function(){return A.innerSlider.slickPrev()}),O(v(A),"slickNext",function(){return A.innerSlider.slickNext()}),O(v(A),"slickGoTo",function(Z){var ce=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return A.innerSlider.slickGoTo(Z,ce)}),O(v(A),"slickPause",function(){return A.innerSlider.pause("paused")}),O(v(A),"slickPlay",function(){return A.innerSlider.autoPlay("play")}),A.state={breakpoint:null},A._responsiveMediaHandlers=[],A}return m(C,[{key:"media",value:function(A,Z){S.register(A,Z),this._responsiveMediaHandlers.push({query:A,handler:Z})}},{key:"componentDidMount",value:function(){var A=this;if(this.props.responsive){var Z=this.props.responsive.map(function(de){return de.breakpoint});Z.sort(function(de,Ee){return de-Ee}),Z.forEach(function(de,Ee){var Q;Ee===0?Q=(0,r.default)({minWidth:0,maxWidth:de}):Q=(0,r.default)({minWidth:Z[Ee-1]+1,maxWidth:de}),(0,s.canUseDOM)()&&A.media(Q,function(){A.setState({breakpoint:de})})});var ce=(0,r.default)({minWidth:Z.slice(-1)[0]});(0,s.canUseDOM)()&&this.media(ce,function(){A.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(A){S.unregister(A.query,A.handler)})}},{key:"render",value:function(){var A=this,Z,ce;this.state.breakpoint?(ce=this.props.responsive.filter(function(k){return k.breakpoint===A.state.breakpoint}),Z=ce[0].settings==="unslick"?"unslick":h(h(h({},i.default),this.props),ce[0].settings)):Z=h(h({},i.default),this.props),Z.centerMode&&(Z.slidesToScroll>1,Z.slidesToScroll=1),Z.fade&&(Z.slidesToShow>1,Z.slidesToScroll>1,Z.slidesToShow=1,Z.slidesToScroll=1);var de=e.default.Children.toArray(this.props.children);de=de.filter(function(k){return typeof k=="string"?!!k.trim():!!k}),Z.variableWidth&&(Z.rows>1||Z.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),Z.variableWidth=!1);for(var Ee=[],Q=null,ne=0;ne<de.length;ne+=Z.rows*Z.slidesPerRow){for(var oe=[],_e=ne;_e<ne+Z.rows*Z.slidesPerRow;_e+=Z.slidesPerRow){for(var ae=[],M=_e;M<_e+Z.slidesPerRow&&(Z.variableWidth&&de[M].props.style&&(Q=de[M].props.style.width),!(M>=de.length));M+=1)ae.push(e.default.cloneElement(de[M],{key:100*ne+10*_e+M,tabIndex:-1,style:{width:"".concat(100/Z.slidesPerRow,"%"),display:"inline-block"}}));oe.push(e.default.createElement("div",{key:10*ne+_e},ae))}Z.variableWidth?Ee.push(e.default.createElement("div",{key:ne,style:{width:Q}},oe)):Ee.push(e.default.createElement("div",{key:ne},oe))}if(Z==="unslick"){var z="regular slider "+(this.props.className||"");return e.default.createElement("div",{className:z},de)}else Ee.length<=Z.slidesToShow&&!Z.infinite&&(Z.unslick=!0);return e.default.createElement(n.InnerSlider,l({style:this.props.style,ref:this.innerSliderRefHandler},(0,s.filterSettings)(Z)),Ee)}}]),C}(e.default.Component)})(JS);(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=n(JS);function n(r){return r&&r.__esModule?r:{default:r}}t.default=e.default})(XS);const aN=km(XS),lN=()=>{};var Y0={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},uN=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},OT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,h=s>>2,f=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(d=64)),r.push(n[h],n[f],n[d],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(LT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):uN(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||f==null)throw new cN;const d=s<<2|a>>4;if(r.push(d),u!==64){const m=a<<4&240|u>>2;if(r.push(m),f!==64){const _=u<<6&192|f;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class cN extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hN=function(t){const e=LT(t);return OT.encodeByteArray(e,!0)},rh=function(t){return hN(t).replace(/\./g,"")},fN=function(t){try{return OT.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function dN(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const pN=()=>dN().__FIREBASE_DEFAULTS__,mN=()=>{if(typeof process>"u"||typeof Y0>"u")return;const t=Y0.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},gN=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&fN(t[1]);return e&&JSON.parse(e)},n_=()=>{try{return lN()||pN()||mN()||gN()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},_N=t=>{var e,n;return(n=(e=n_())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},yN=t=>{const e=_N(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},DT=()=>{var t;return(t=n_())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vN{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function wN(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[rh(JSON.stringify(n)),rh(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EN(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function SN(){var t;const e=(t=n_())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function TN(){return!SN()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function bN(){try{return typeof indexedDB=="object"}catch{return!1}}function xN(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IN="FirebaseError";class Eo extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=IN,Object.setPrototypeOf(this,Eo.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,MT.prototype.create)}}class MT{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?RN(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Eo(i,a,r)}}function RN(t,e){return t.replace(AN,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const AN=/\{\$([^}]+)}/g;function ih(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(X0(s)&&X0(o)){if(!ih(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function X0(t){return t!==null&&typeof t=="object"}/**
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
 */function _r(t){return t&&t._delegate?t._delegate:t}class tl{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Li="[DEFAULT]";/**
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
 */class CN{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new vN;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(kN(e))try{this.getOrInitializeService({instanceIdentifier:Li})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Li){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Li){return this.instances.has(e)}getOptions(e=Li){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:PN(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Li){return this.component?this.component.multipleInstances?e:Li:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function PN(t){return t===Li?void 0:t}function kN(t){return t.instantiationMode==="EAGER"}/**
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
 */class LN{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new CN(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ie||(Ie={}));const ON={debug:Ie.DEBUG,verbose:Ie.VERBOSE,info:Ie.INFO,warn:Ie.WARN,error:Ie.ERROR,silent:Ie.SILENT},DN=Ie.INFO,MN={[Ie.DEBUG]:"log",[Ie.VERBOSE]:"log",[Ie.INFO]:"info",[Ie.WARN]:"warn",[Ie.ERROR]:"error"},NN=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=MN[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class NT{constructor(e){this.name=e,this._logLevel=DN,this._logHandler=NN,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ON[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ie.DEBUG,...e),this._logHandler(this,Ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ie.VERBOSE,...e),this._logHandler(this,Ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ie.INFO,...e),this._logHandler(this,Ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ie.WARN,...e),this._logHandler(this,Ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ie.ERROR,...e),this._logHandler(this,Ie.ERROR,...e)}}const VN=(t,e)=>e.some(n=>t instanceof n);let J0,Z0;function FN(){return J0||(J0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zN(){return Z0||(Z0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const VT=new WeakMap,um=new WeakMap,FT=new WeakMap,kd=new WeakMap,r_=new WeakMap;function jN(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Jr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&VT.set(n,t)}).catch(()=>{}),r_.set(e,t),e}function BN(t){if(um.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});um.set(t,e)}let cm={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return um.get(t);if(e==="objectStoreNames")return t.objectStoreNames||FT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Jr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function $N(t){cm=t(cm)}function UN(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ld(this),e,...n);return FT.set(r,e.sort?e.sort():[e]),Jr(r)}:zN().includes(t)?function(...e){return t.apply(Ld(this),e),Jr(VT.get(this))}:function(...e){return Jr(t.apply(Ld(this),e))}}function HN(t){return typeof t=="function"?UN(t):(t instanceof IDBTransaction&&BN(t),VN(t,FN())?new Proxy(t,cm):t)}function Jr(t){if(t instanceof IDBRequest)return jN(t);if(kd.has(t))return kd.get(t);const e=HN(t);return e!==t&&(kd.set(t,e),r_.set(e,t)),e}const Ld=t=>r_.get(t);function WN(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Jr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Jr(o.result),l.oldVersion,l.newVersion,Jr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const qN=["get","getKey","getAll","getAllKeys","count"],KN=["put","add","delete","clear"],Od=new Map;function e1(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Od.get(e))return Od.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=KN.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||qN.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Od.set(e,s),s}$N(t=>({...t,get:(e,n,r)=>e1(e,n)||t.get(e,n,r),has:(e,n)=>!!e1(e,n)||t.has(e,n)}));/**
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
 */class GN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(QN(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function QN(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hm="@firebase/app",t1="0.11.2";/**
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
 */const yr=new NT("@firebase/app"),YN="@firebase/app-compat",XN="@firebase/analytics-compat",JN="@firebase/analytics",ZN="@firebase/app-check-compat",eV="@firebase/app-check",tV="@firebase/auth",nV="@firebase/auth-compat",rV="@firebase/database",iV="@firebase/data-connect",sV="@firebase/database-compat",oV="@firebase/functions",aV="@firebase/functions-compat",lV="@firebase/installations",uV="@firebase/installations-compat",cV="@firebase/messaging",hV="@firebase/messaging-compat",fV="@firebase/performance",dV="@firebase/performance-compat",pV="@firebase/remote-config",mV="@firebase/remote-config-compat",gV="@firebase/storage",_V="@firebase/storage-compat",yV="@firebase/firestore",vV="@firebase/vertexai",wV="@firebase/firestore-compat",EV="firebase",SV="11.4.0";/**
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
 */const fm="[DEFAULT]",TV={[hm]:"fire-core",[YN]:"fire-core-compat",[JN]:"fire-analytics",[XN]:"fire-analytics-compat",[eV]:"fire-app-check",[ZN]:"fire-app-check-compat",[tV]:"fire-auth",[nV]:"fire-auth-compat",[rV]:"fire-rtdb",[iV]:"fire-data-connect",[sV]:"fire-rtdb-compat",[oV]:"fire-fn",[aV]:"fire-fn-compat",[lV]:"fire-iid",[uV]:"fire-iid-compat",[cV]:"fire-fcm",[hV]:"fire-fcm-compat",[fV]:"fire-perf",[dV]:"fire-perf-compat",[pV]:"fire-rc",[mV]:"fire-rc-compat",[gV]:"fire-gcs",[_V]:"fire-gcs-compat",[yV]:"fire-fst",[wV]:"fire-fst-compat",[vV]:"fire-vertex","fire-js":"fire-js",[EV]:"fire-js-all"};/**
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
 */const sh=new Map,bV=new Map,dm=new Map;function n1(t,e){try{t.container.addComponent(e)}catch(n){yr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function oh(t){const e=t.name;if(dm.has(e))return yr.debug(`There were multiple attempts to register component ${e}.`),!1;dm.set(e,t);for(const n of sh.values())n1(n,t);for(const n of bV.values())n1(n,t);return!0}function xV(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function IV(t){return t==null?!1:t.settings!==void 0}/**
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
 */const RV={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Zr=new MT("app","Firebase",RV);/**
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
 */class AV{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new tl("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zr.create("app-deleted",{appName:this._name})}}/**
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
 */const CV=SV;function zT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:fm,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Zr.create("bad-app-name",{appName:String(i)});if(n||(n=DT()),!n)throw Zr.create("no-options");const s=sh.get(i);if(s){if(ih(n,s.options)&&ih(r,s.config))return s;throw Zr.create("duplicate-app",{appName:i})}const o=new LN(i);for(const l of dm.values())o.addComponent(l);const a=new AV(n,r,o);return sh.set(i,a),a}function PV(t=fm){const e=sh.get(t);if(!e&&t===fm&&DT())return zT();if(!e)throw Zr.create("no-app",{appName:t});return e}function zs(t,e,n){var r;let i=(r=TV[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yr.warn(a.join(" "));return}oh(new tl(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const kV="firebase-heartbeat-database",LV=1,nl="firebase-heartbeat-store";let Dd=null;function jT(){return Dd||(Dd=WN(kV,LV,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(nl)}catch(n){console.warn(n)}}}}).catch(t=>{throw Zr.create("idb-open",{originalErrorMessage:t.message})})),Dd}async function OV(t){try{const n=(await jT()).transaction(nl),r=await n.objectStore(nl).get(BT(t));return await n.done,r}catch(e){if(e instanceof Eo)yr.warn(e.message);else{const n=Zr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});yr.warn(n.message)}}}async function r1(t,e){try{const r=(await jT()).transaction(nl,"readwrite");await r.objectStore(nl).put(e,BT(t)),await r.done}catch(n){if(n instanceof Eo)yr.warn(n.message);else{const r=Zr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});yr.warn(r.message)}}}function BT(t){return`${t.name}!${t.options.appId}`}/**
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
 */const DV=1024,MV=30;class NV{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new FV(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=i1();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>MV){const o=zV(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){yr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=i1(),{heartbeatsToSend:r,unsentEntries:i}=VV(this._heartbeatsCache.heartbeats),s=rh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return yr.warn(n),""}}}function i1(){return new Date().toISOString().substring(0,10)}function VV(t,e=DV){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),s1(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),s1(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class FV{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bN()?xN().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await OV(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return r1(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return r1(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function s1(t){return rh(JSON.stringify({version:2,heartbeats:t})).length}function zV(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function jV(t){oh(new tl("platform-logger",e=>new GN(e),"PRIVATE")),oh(new tl("heartbeat",e=>new NV(e),"PRIVATE")),zs(hm,t1,t),zs(hm,t1,"esm2017"),zs("fire-js","")}jV("");var o1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ei,$T;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,S){function T(){}T.prototype=S.prototype,x.D=S.prototype,x.prototype=new T,x.prototype.constructor=x,x.C=function(I,C,P){for(var A=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)A[Z-2]=arguments[Z];return S.prototype[C].apply(I,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(x,S,T){T||(T=0);var I=Array(16);if(typeof S=="string")for(var C=0;16>C;++C)I[C]=S.charCodeAt(T++)|S.charCodeAt(T++)<<8|S.charCodeAt(T++)<<16|S.charCodeAt(T++)<<24;else for(C=0;16>C;++C)I[C]=S[T++]|S[T++]<<8|S[T++]<<16|S[T++]<<24;S=x.g[0],T=x.g[1],C=x.g[2];var P=x.g[3],A=S+(P^T&(C^P))+I[0]+3614090360&4294967295;S=T+(A<<7&4294967295|A>>>25),A=P+(C^S&(T^C))+I[1]+3905402710&4294967295,P=S+(A<<12&4294967295|A>>>20),A=C+(T^P&(S^T))+I[2]+606105819&4294967295,C=P+(A<<17&4294967295|A>>>15),A=T+(S^C&(P^S))+I[3]+3250441966&4294967295,T=C+(A<<22&4294967295|A>>>10),A=S+(P^T&(C^P))+I[4]+4118548399&4294967295,S=T+(A<<7&4294967295|A>>>25),A=P+(C^S&(T^C))+I[5]+1200080426&4294967295,P=S+(A<<12&4294967295|A>>>20),A=C+(T^P&(S^T))+I[6]+2821735955&4294967295,C=P+(A<<17&4294967295|A>>>15),A=T+(S^C&(P^S))+I[7]+4249261313&4294967295,T=C+(A<<22&4294967295|A>>>10),A=S+(P^T&(C^P))+I[8]+1770035416&4294967295,S=T+(A<<7&4294967295|A>>>25),A=P+(C^S&(T^C))+I[9]+2336552879&4294967295,P=S+(A<<12&4294967295|A>>>20),A=C+(T^P&(S^T))+I[10]+4294925233&4294967295,C=P+(A<<17&4294967295|A>>>15),A=T+(S^C&(P^S))+I[11]+2304563134&4294967295,T=C+(A<<22&4294967295|A>>>10),A=S+(P^T&(C^P))+I[12]+1804603682&4294967295,S=T+(A<<7&4294967295|A>>>25),A=P+(C^S&(T^C))+I[13]+4254626195&4294967295,P=S+(A<<12&4294967295|A>>>20),A=C+(T^P&(S^T))+I[14]+2792965006&4294967295,C=P+(A<<17&4294967295|A>>>15),A=T+(S^C&(P^S))+I[15]+1236535329&4294967295,T=C+(A<<22&4294967295|A>>>10),A=S+(C^P&(T^C))+I[1]+4129170786&4294967295,S=T+(A<<5&4294967295|A>>>27),A=P+(T^C&(S^T))+I[6]+3225465664&4294967295,P=S+(A<<9&4294967295|A>>>23),A=C+(S^T&(P^S))+I[11]+643717713&4294967295,C=P+(A<<14&4294967295|A>>>18),A=T+(P^S&(C^P))+I[0]+3921069994&4294967295,T=C+(A<<20&4294967295|A>>>12),A=S+(C^P&(T^C))+I[5]+3593408605&4294967295,S=T+(A<<5&4294967295|A>>>27),A=P+(T^C&(S^T))+I[10]+38016083&4294967295,P=S+(A<<9&4294967295|A>>>23),A=C+(S^T&(P^S))+I[15]+3634488961&4294967295,C=P+(A<<14&4294967295|A>>>18),A=T+(P^S&(C^P))+I[4]+3889429448&4294967295,T=C+(A<<20&4294967295|A>>>12),A=S+(C^P&(T^C))+I[9]+568446438&4294967295,S=T+(A<<5&4294967295|A>>>27),A=P+(T^C&(S^T))+I[14]+3275163606&4294967295,P=S+(A<<9&4294967295|A>>>23),A=C+(S^T&(P^S))+I[3]+4107603335&4294967295,C=P+(A<<14&4294967295|A>>>18),A=T+(P^S&(C^P))+I[8]+1163531501&4294967295,T=C+(A<<20&4294967295|A>>>12),A=S+(C^P&(T^C))+I[13]+2850285829&4294967295,S=T+(A<<5&4294967295|A>>>27),A=P+(T^C&(S^T))+I[2]+4243563512&4294967295,P=S+(A<<9&4294967295|A>>>23),A=C+(S^T&(P^S))+I[7]+1735328473&4294967295,C=P+(A<<14&4294967295|A>>>18),A=T+(P^S&(C^P))+I[12]+2368359562&4294967295,T=C+(A<<20&4294967295|A>>>12),A=S+(T^C^P)+I[5]+4294588738&4294967295,S=T+(A<<4&4294967295|A>>>28),A=P+(S^T^C)+I[8]+2272392833&4294967295,P=S+(A<<11&4294967295|A>>>21),A=C+(P^S^T)+I[11]+1839030562&4294967295,C=P+(A<<16&4294967295|A>>>16),A=T+(C^P^S)+I[14]+4259657740&4294967295,T=C+(A<<23&4294967295|A>>>9),A=S+(T^C^P)+I[1]+2763975236&4294967295,S=T+(A<<4&4294967295|A>>>28),A=P+(S^T^C)+I[4]+1272893353&4294967295,P=S+(A<<11&4294967295|A>>>21),A=C+(P^S^T)+I[7]+4139469664&4294967295,C=P+(A<<16&4294967295|A>>>16),A=T+(C^P^S)+I[10]+3200236656&4294967295,T=C+(A<<23&4294967295|A>>>9),A=S+(T^C^P)+I[13]+681279174&4294967295,S=T+(A<<4&4294967295|A>>>28),A=P+(S^T^C)+I[0]+3936430074&4294967295,P=S+(A<<11&4294967295|A>>>21),A=C+(P^S^T)+I[3]+3572445317&4294967295,C=P+(A<<16&4294967295|A>>>16),A=T+(C^P^S)+I[6]+76029189&4294967295,T=C+(A<<23&4294967295|A>>>9),A=S+(T^C^P)+I[9]+3654602809&4294967295,S=T+(A<<4&4294967295|A>>>28),A=P+(S^T^C)+I[12]+3873151461&4294967295,P=S+(A<<11&4294967295|A>>>21),A=C+(P^S^T)+I[15]+530742520&4294967295,C=P+(A<<16&4294967295|A>>>16),A=T+(C^P^S)+I[2]+3299628645&4294967295,T=C+(A<<23&4294967295|A>>>9),A=S+(C^(T|~P))+I[0]+4096336452&4294967295,S=T+(A<<6&4294967295|A>>>26),A=P+(T^(S|~C))+I[7]+1126891415&4294967295,P=S+(A<<10&4294967295|A>>>22),A=C+(S^(P|~T))+I[14]+2878612391&4294967295,C=P+(A<<15&4294967295|A>>>17),A=T+(P^(C|~S))+I[5]+4237533241&4294967295,T=C+(A<<21&4294967295|A>>>11),A=S+(C^(T|~P))+I[12]+1700485571&4294967295,S=T+(A<<6&4294967295|A>>>26),A=P+(T^(S|~C))+I[3]+2399980690&4294967295,P=S+(A<<10&4294967295|A>>>22),A=C+(S^(P|~T))+I[10]+4293915773&4294967295,C=P+(A<<15&4294967295|A>>>17),A=T+(P^(C|~S))+I[1]+2240044497&4294967295,T=C+(A<<21&4294967295|A>>>11),A=S+(C^(T|~P))+I[8]+1873313359&4294967295,S=T+(A<<6&4294967295|A>>>26),A=P+(T^(S|~C))+I[15]+4264355552&4294967295,P=S+(A<<10&4294967295|A>>>22),A=C+(S^(P|~T))+I[6]+2734768916&4294967295,C=P+(A<<15&4294967295|A>>>17),A=T+(P^(C|~S))+I[13]+1309151649&4294967295,T=C+(A<<21&4294967295|A>>>11),A=S+(C^(T|~P))+I[4]+4149444226&4294967295,S=T+(A<<6&4294967295|A>>>26),A=P+(T^(S|~C))+I[11]+3174756917&4294967295,P=S+(A<<10&4294967295|A>>>22),A=C+(S^(P|~T))+I[2]+718787259&4294967295,C=P+(A<<15&4294967295|A>>>17),A=T+(P^(C|~S))+I[9]+3951481745&4294967295,x.g[0]=x.g[0]+S&4294967295,x.g[1]=x.g[1]+(C+(A<<21&4294967295|A>>>11))&4294967295,x.g[2]=x.g[2]+C&4294967295,x.g[3]=x.g[3]+P&4294967295}r.prototype.u=function(x,S){S===void 0&&(S=x.length);for(var T=S-this.blockSize,I=this.B,C=this.h,P=0;P<S;){if(C==0)for(;P<=T;)i(this,x,P),P+=this.blockSize;if(typeof x=="string"){for(;P<S;)if(I[C++]=x.charCodeAt(P++),C==this.blockSize){i(this,I),C=0;break}}else for(;P<S;)if(I[C++]=x[P++],C==this.blockSize){i(this,I),C=0;break}}this.h=C,this.o+=S},r.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var S=1;S<x.length-8;++S)x[S]=0;var T=8*this.o;for(S=x.length-8;S<x.length;++S)x[S]=T&255,T/=256;for(this.u(x),x=Array(16),S=T=0;4>S;++S)for(var I=0;32>I;I+=8)x[T++]=this.g[S]>>>I&255;return x};function s(x,S){var T=a;return Object.prototype.hasOwnProperty.call(T,x)?T[x]:T[x]=S(x)}function o(x,S){this.h=S;for(var T=[],I=!0,C=x.length-1;0<=C;C--){var P=x[C]|0;I&&P==S||(T[C]=P,I=!1)}this.g=T}var a={};function l(x){return-128<=x&&128>x?s(x,function(S){return new o([S|0],0>S?-1:0)}):new o([x|0],0>x?-1:0)}function u(x){if(isNaN(x)||!isFinite(x))return f;if(0>x)return E(u(-x));for(var S=[],T=1,I=0;x>=T;I++)S[I]=x/T|0,T*=4294967296;return new o(S,0)}function h(x,S){if(x.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(x.charAt(0)=="-")return E(h(x.substring(1),S));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=u(Math.pow(S,8)),I=f,C=0;C<x.length;C+=8){var P=Math.min(8,x.length-C),A=parseInt(x.substring(C,C+P),S);8>P?(P=u(Math.pow(S,P)),I=I.j(P).add(u(A))):(I=I.j(T),I=I.add(u(A)))}return I}var f=l(0),d=l(1),m=l(16777216);t=o.prototype,t.m=function(){if(y(this))return-E(this).m();for(var x=0,S=1,T=0;T<this.g.length;T++){var I=this.i(T);x+=(0<=I?I:4294967296+I)*S,S*=4294967296}return x},t.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(_(this))return"0";if(y(this))return"-"+E(this).toString(x);for(var S=u(Math.pow(x,6)),T=this,I="";;){var C=L(T,S).g;T=w(T,C.j(S));var P=((0<T.g.length?T.g[0]:T.h)>>>0).toString(x);if(T=C,_(T))return P+I;for(;6>P.length;)P="0"+P;I=P+I}},t.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function _(x){if(x.h!=0)return!1;for(var S=0;S<x.g.length;S++)if(x.g[S]!=0)return!1;return!0}function y(x){return x.h==-1}t.l=function(x){return x=w(this,x),y(x)?-1:_(x)?0:1};function E(x){for(var S=x.g.length,T=[],I=0;I<S;I++)T[I]=~x.g[I];return new o(T,~x.h).add(d)}t.abs=function(){return y(this)?E(this):this},t.add=function(x){for(var S=Math.max(this.g.length,x.g.length),T=[],I=0,C=0;C<=S;C++){var P=I+(this.i(C)&65535)+(x.i(C)&65535),A=(P>>>16)+(this.i(C)>>>16)+(x.i(C)>>>16);I=A>>>16,P&=65535,A&=65535,T[C]=A<<16|P}return new o(T,T[T.length-1]&-2147483648?-1:0)};function w(x,S){return x.add(E(S))}t.j=function(x){if(_(this)||_(x))return f;if(y(this))return y(x)?E(this).j(E(x)):E(E(this).j(x));if(y(x))return E(this.j(E(x)));if(0>this.l(m)&&0>x.l(m))return u(this.m()*x.m());for(var S=this.g.length+x.g.length,T=[],I=0;I<2*S;I++)T[I]=0;for(I=0;I<this.g.length;I++)for(var C=0;C<x.g.length;C++){var P=this.i(I)>>>16,A=this.i(I)&65535,Z=x.i(C)>>>16,ce=x.i(C)&65535;T[2*I+2*C]+=A*ce,v(T,2*I+2*C),T[2*I+2*C+1]+=P*ce,v(T,2*I+2*C+1),T[2*I+2*C+1]+=A*Z,v(T,2*I+2*C+1),T[2*I+2*C+2]+=P*Z,v(T,2*I+2*C+2)}for(I=0;I<S;I++)T[I]=T[2*I+1]<<16|T[2*I];for(I=S;I<2*S;I++)T[I]=0;return new o(T,0)};function v(x,S){for(;(x[S]&65535)!=x[S];)x[S+1]+=x[S]>>>16,x[S]&=65535,S++}function b(x,S){this.g=x,this.h=S}function L(x,S){if(_(S))throw Error("division by zero");if(_(x))return new b(f,f);if(y(x))return S=L(E(x),S),new b(E(S.g),E(S.h));if(y(S))return S=L(x,E(S)),new b(E(S.g),S.h);if(30<x.g.length){if(y(x)||y(S))throw Error("slowDivide_ only works with positive integers.");for(var T=d,I=S;0>=I.l(x);)T=O(T),I=O(I);var C=D(T,1),P=D(I,1);for(I=D(I,2),T=D(T,2);!_(I);){var A=P.add(I);0>=A.l(x)&&(C=C.add(T),P=A),I=D(I,1),T=D(T,1)}return S=w(x,C.j(S)),new b(C,S)}for(C=f;0<=x.l(S);){for(T=Math.max(1,Math.floor(x.m()/S.m())),I=Math.ceil(Math.log(T)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),P=u(T),A=P.j(S);y(A)||0<A.l(x);)T-=I,P=u(T),A=P.j(S);_(P)&&(P=d),C=C.add(P),x=w(x,A)}return new b(C,x)}t.A=function(x){return L(this,x).h},t.and=function(x){for(var S=Math.max(this.g.length,x.g.length),T=[],I=0;I<S;I++)T[I]=this.i(I)&x.i(I);return new o(T,this.h&x.h)},t.or=function(x){for(var S=Math.max(this.g.length,x.g.length),T=[],I=0;I<S;I++)T[I]=this.i(I)|x.i(I);return new o(T,this.h|x.h)},t.xor=function(x){for(var S=Math.max(this.g.length,x.g.length),T=[],I=0;I<S;I++)T[I]=this.i(I)^x.i(I);return new o(T,this.h^x.h)};function O(x){for(var S=x.g.length+1,T=[],I=0;I<S;I++)T[I]=x.i(I)<<1|x.i(I-1)>>>31;return new o(T,x.h)}function D(x,S){var T=S>>5;S%=32;for(var I=x.g.length-T,C=[],P=0;P<I;P++)C[P]=0<S?x.i(P+T)>>>S|x.i(P+T+1)<<32-S:x.i(P+T);return new o(C,x.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,$T=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,ei=o}).apply(typeof o1<"u"?o1:typeof self<"u"?self:typeof window<"u"?window:{});var Iu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var UT,ua,HT,nc,pm,WT,qT,KT;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,p,g){return c==Array.prototype||c==Object.prototype||(c[p]=g.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Iu=="object"&&Iu];for(var p=0;p<c.length;++p){var g=c[p];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=n(this);function i(c,p){if(p)e:{var g=r;c=c.split(".");for(var R=0;R<c.length-1;R++){var N=c[R];if(!(N in g))break e;g=g[N]}c=c[c.length-1],R=g[c],p=p(R),p!=R&&p!=null&&e(g,c,{configurable:!0,writable:!0,value:p})}}function s(c,p){c instanceof String&&(c+="");var g=0,R=!1,N={next:function(){if(!R&&g<c.length){var B=g++;return{value:p(B,c[B]),done:!1}}return R=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}i("Array.prototype.values",function(c){return c||function(){return s(this,function(p,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(c){var p=typeof c;return p=p!="object"?p:c?Array.isArray(c)?"array":p:"null",p=="array"||p=="object"&&typeof c.length=="number"}function u(c){var p=typeof c;return p=="object"&&c!=null||p=="function"}function h(c,p,g){return c.call.apply(c.bind,arguments)}function f(c,p,g){if(!c)throw Error();if(2<arguments.length){var R=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,R),c.apply(p,N)}}return function(){return c.apply(p,arguments)}}function d(c,p,g){return d=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,d.apply(null,arguments)}function m(c,p){var g=Array.prototype.slice.call(arguments,1);return function(){var R=g.slice();return R.push.apply(R,arguments),c.apply(this,R)}}function _(c,p){function g(){}g.prototype=p.prototype,c.aa=p.prototype,c.prototype=new g,c.prototype.constructor=c,c.Qb=function(R,N,B){for(var X=Array(arguments.length-2),Fe=2;Fe<arguments.length;Fe++)X[Fe-2]=arguments[Fe];return p.prototype[N].apply(R,X)}}function y(c){const p=c.length;if(0<p){const g=Array(p);for(let R=0;R<p;R++)g[R]=c[R];return g}return[]}function E(c,p){for(let g=1;g<arguments.length;g++){const R=arguments[g];if(l(R)){const N=c.length||0,B=R.length||0;c.length=N+B;for(let X=0;X<B;X++)c[N+X]=R[X]}else c.push(R)}}class w{constructor(p,g){this.i=p,this.j=g,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function v(c){return/^[\s\xa0]*$/.test(c)}function b(){var c=a.navigator;return c&&(c=c.userAgent)?c:""}function L(c){return L[" "](c),c}L[" "]=function(){};var O=b().indexOf("Gecko")!=-1&&!(b().toLowerCase().indexOf("webkit")!=-1&&b().indexOf("Edge")==-1)&&!(b().indexOf("Trident")!=-1||b().indexOf("MSIE")!=-1)&&b().indexOf("Edge")==-1;function D(c,p,g){for(const R in c)p.call(g,c[R],R,c)}function x(c,p){for(const g in c)p.call(void 0,c[g],g,c)}function S(c){const p={};for(const g in c)p[g]=c[g];return p}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(c,p){let g,R;for(let N=1;N<arguments.length;N++){R=arguments[N];for(g in R)c[g]=R[g];for(let B=0;B<T.length;B++)g=T[B],Object.prototype.hasOwnProperty.call(R,g)&&(c[g]=R[g])}}function C(c){var p=1;c=c.split(":");const g=[];for(;0<p&&c.length;)g.push(c.shift()),p--;return c.length&&g.push(c.join(":")),g}function P(c){a.setTimeout(()=>{throw c},0)}function A(){var c=ne;let p=null;return c.g&&(p=c.g,c.g=c.g.next,c.g||(c.h=null),p.next=null),p}class Z{constructor(){this.h=this.g=null}add(p,g){const R=ce.get();R.set(p,g),this.h?this.h.next=R:this.g=R,this.h=R}}var ce=new w(()=>new de,c=>c.reset());class de{constructor(){this.next=this.g=this.h=null}set(p,g){this.h=p,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let Ee,Q=!1,ne=new Z,oe=()=>{const c=a.Promise.resolve(void 0);Ee=()=>{c.then(_e)}};var _e=()=>{for(var c;c=A();){try{c.h.call(c.g)}catch(g){P(g)}var p=ce;p.j(c),100>p.h&&(p.h++,c.next=p.g,p.g=c)}Q=!1};function ae(){this.s=this.s,this.C=this.C}ae.prototype.s=!1,ae.prototype.ma=function(){this.s||(this.s=!0,this.N())},ae.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function M(c,p){this.type=c,this.g=this.target=p,this.defaultPrevented=!1}M.prototype.h=function(){this.defaultPrevented=!0};var z=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var c=!1,p=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const g=()=>{};a.addEventListener("test",g,p),a.removeEventListener("test",g,p)}catch{}return c}();function k(c,p){if(M.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var g=this.type=c.type,R=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=p,p=c.relatedTarget){if(O){e:{try{L(p.nodeName);var N=!0;break e}catch{}N=!1}N||(p=null)}}else g=="mouseover"?p=c.fromElement:g=="mouseout"&&(p=c.toElement);this.relatedTarget=p,R?(this.clientX=R.clientX!==void 0?R.clientX:R.pageX,this.clientY=R.clientY!==void 0?R.clientY:R.pageY,this.screenX=R.screenX||0,this.screenY=R.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:V[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&k.aa.h.call(this)}}_(k,M);var V={2:"touch",3:"pen",4:"mouse"};k.prototype.h=function(){k.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var j="closure_listenable_"+(1e6*Math.random()|0),U=0;function ee(c,p,g,R,N){this.listener=c,this.proxy=null,this.src=p,this.type=g,this.capture=!!R,this.ha=N,this.key=++U,this.da=this.fa=!1}function Y(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function K(c){this.src=c,this.g={},this.h=0}K.prototype.add=function(c,p,g,R,N){var B=c.toString();c=this.g[B],c||(c=this.g[B]=[],this.h++);var X=Oe(c,p,R,N);return-1<X?(p=c[X],g||(p.fa=!1)):(p=new ee(p,this.src,B,!!R,N),p.fa=g,c.push(p)),p};function se(c,p){var g=p.type;if(g in c.g){var R=c.g[g],N=Array.prototype.indexOf.call(R,p,void 0),B;(B=0<=N)&&Array.prototype.splice.call(R,N,1),B&&(Y(p),c.g[g].length==0&&(delete c.g[g],c.h--))}}function Oe(c,p,g,R){for(var N=0;N<c.length;++N){var B=c[N];if(!B.da&&B.listener==p&&B.capture==!!g&&B.ha==R)return N}return-1}var ke="closure_lm_"+(1e6*Math.random()|0),Ce={};function De(c,p,g,R,N){if(Array.isArray(p)){for(var B=0;B<p.length;B++)De(c,p[B],g,R,N);return null}return g=z_(g),c&&c[j]?c.K(p,g,u(R)?!!R.capture:!!R,N):zt(c,p,g,!1,R,N)}function zt(c,p,g,R,N,B){if(!p)throw Error("Invalid event type");var X=u(N)?!!N.capture:!!N,Fe=is(c);if(Fe||(c[ke]=Fe=new K(c)),g=Fe.add(p,g,R,X,B),g.proxy)return g;if(R=Tr(),g.proxy=R,R.src=c,R.listener=g,c.addEventListener)z||(N=X),N===void 0&&(N=!1),c.addEventListener(p.toString(),R,N);else if(c.attachEvent)c.attachEvent(ut(p.toString()),R);else if(c.addListener&&c.removeListener)c.addListener(R);else throw Error("addEventListener and attachEvent are unavailable.");return g}function Tr(){function c(g){return p.call(c.src,c.listener,g)}const p=Ve;return c}function vi(c,p,g,R,N){if(Array.isArray(p))for(var B=0;B<p.length;B++)vi(c,p[B],g,R,N);else R=u(R)?!!R.capture:!!R,g=z_(g),c&&c[j]?(c=c.i,p=String(p).toString(),p in c.g&&(B=c.g[p],g=Oe(B,g,R,N),-1<g&&(Y(B[g]),Array.prototype.splice.call(B,g,1),B.length==0&&(delete c.g[p],c.h--)))):c&&(c=is(c))&&(p=c.g[p.toString()],c=-1,p&&(c=Oe(p,g,R,N)),(g=-1<c?p[c]:null)&&Be(g))}function Be(c){if(typeof c!="number"&&c&&!c.da){var p=c.src;if(p&&p[j])se(p.i,c);else{var g=c.type,R=c.proxy;p.removeEventListener?p.removeEventListener(g,R,c.capture):p.detachEvent?p.detachEvent(ut(g),R):p.addListener&&p.removeListener&&p.removeListener(R),(g=is(p))?(se(g,c),g.h==0&&(g.src=null,p[ke]=null)):Y(c)}}}function ut(c){return c in Ce?Ce[c]:Ce[c]="on"+c}function Ve(c,p){if(c.da)c=!0;else{p=new k(p,this);var g=c.listener,R=c.ha||c.src;c.fa&&Be(c),c=g.call(R,p)}return c}function is(c){return c=c[ke],c instanceof K?c:null}var mf="__closure_events_fn_"+(1e9*Math.random()>>>0);function z_(c){return typeof c=="function"?c:(c[mf]||(c[mf]=function(p){return c.handleEvent(p)}),c[mf])}function Ct(){ae.call(this),this.i=new K(this),this.M=this,this.F=null}_(Ct,ae),Ct.prototype[j]=!0,Ct.prototype.removeEventListener=function(c,p,g,R){vi(this,c,p,g,R)};function jt(c,p){var g,R=c.F;if(R)for(g=[];R;R=R.F)g.push(R);if(c=c.M,R=p.type||p,typeof p=="string")p=new M(p,c);else if(p instanceof M)p.target=p.target||c;else{var N=p;p=new M(R,c),I(p,N)}if(N=!0,g)for(var B=g.length-1;0<=B;B--){var X=p.g=g[B];N=Cl(X,R,!0,p)&&N}if(X=p.g=c,N=Cl(X,R,!0,p)&&N,N=Cl(X,R,!1,p)&&N,g)for(B=0;B<g.length;B++)X=p.g=g[B],N=Cl(X,R,!1,p)&&N}Ct.prototype.N=function(){if(Ct.aa.N.call(this),this.i){var c=this.i,p;for(p in c.g){for(var g=c.g[p],R=0;R<g.length;R++)Y(g[R]);delete c.g[p],c.h--}}this.F=null},Ct.prototype.K=function(c,p,g,R){return this.i.add(String(c),p,!1,g,R)},Ct.prototype.L=function(c,p,g,R){return this.i.add(String(c),p,!0,g,R)};function Cl(c,p,g,R){if(p=c.i.g[String(p)],!p)return!0;p=p.concat();for(var N=!0,B=0;B<p.length;++B){var X=p[B];if(X&&!X.da&&X.capture==g){var Fe=X.listener,Et=X.ha||X.src;X.fa&&se(c.i,X),N=Fe.call(Et,R)!==!1&&N}}return N&&!R.defaultPrevented}function j_(c,p,g){if(typeof c=="function")g&&(c=d(c,g));else if(c&&typeof c.handleEvent=="function")c=d(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:a.setTimeout(c,p||0)}function B_(c){c.g=j_(()=>{c.g=null,c.i&&(c.i=!1,B_(c))},c.l);const p=c.h;c.h=null,c.m.apply(null,p)}class _x extends ae{constructor(p,g){super(),this.m=p,this.l=g,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:B_(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ro(c){ae.call(this),this.h=c,this.g={}}_(Ro,ae);var $_=[];function U_(c){D(c.g,function(p,g){this.g.hasOwnProperty(g)&&Be(p)},c),c.g={}}Ro.prototype.N=function(){Ro.aa.N.call(this),U_(this)},Ro.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var gf=a.JSON.stringify,yx=a.JSON.parse,vx=class{stringify(c){return a.JSON.stringify(c,void 0)}parse(c){return a.JSON.parse(c,void 0)}};function _f(){}_f.prototype.h=null;function H_(c){return c.h||(c.h=c.i())}function W_(){}var Ao={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function yf(){M.call(this,"d")}_(yf,M);function vf(){M.call(this,"c")}_(vf,M);var wi={},q_=null;function Pl(){return q_=q_||new Ct}wi.La="serverreachability";function K_(c){M.call(this,wi.La,c)}_(K_,M);function Co(c){const p=Pl();jt(p,new K_(p))}wi.STAT_EVENT="statevent";function G_(c,p){M.call(this,wi.STAT_EVENT,c),this.stat=p}_(G_,M);function Bt(c){const p=Pl();jt(p,new G_(p,c))}wi.Ma="timingevent";function Q_(c,p){M.call(this,wi.Ma,c),this.size=p}_(Q_,M);function Po(c,p){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){c()},p)}function ko(){this.g=!0}ko.prototype.xa=function(){this.g=!1};function wx(c,p,g,R,N,B){c.info(function(){if(c.g)if(B)for(var X="",Fe=B.split("&"),Et=0;Et<Fe.length;Et++){var Pe=Fe[Et].split("=");if(1<Pe.length){var Pt=Pe[0];Pe=Pe[1];var kt=Pt.split("_");X=2<=kt.length&&kt[1]=="type"?X+(Pt+"="+Pe+"&"):X+(Pt+"=redacted&")}}else X=null;else X=B;return"XMLHTTP REQ ("+R+") [attempt "+N+"]: "+p+`
`+g+`
`+X})}function Ex(c,p,g,R,N,B,X){c.info(function(){return"XMLHTTP RESP ("+R+") [ attempt "+N+"]: "+p+`
`+g+`
`+B+" "+X})}function ss(c,p,g,R){c.info(function(){return"XMLHTTP TEXT ("+p+"): "+Tx(c,g)+(R?" "+R:"")})}function Sx(c,p){c.info(function(){return"TIMEOUT: "+p})}ko.prototype.info=function(){};function Tx(c,p){if(!c.g)return p;if(!p)return null;try{var g=JSON.parse(p);if(g){for(c=0;c<g.length;c++)if(Array.isArray(g[c])){var R=g[c];if(!(2>R.length)){var N=R[1];if(Array.isArray(N)&&!(1>N.length)){var B=N[0];if(B!="noop"&&B!="stop"&&B!="close")for(var X=1;X<N.length;X++)N[X]=""}}}}return gf(g)}catch{return p}}var kl={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Y_={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},wf;function Ll(){}_(Ll,_f),Ll.prototype.g=function(){return new XMLHttpRequest},Ll.prototype.i=function(){return{}},wf=new Ll;function br(c,p,g,R){this.j=c,this.i=p,this.l=g,this.R=R||1,this.U=new Ro(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new X_}function X_(){this.i=null,this.g="",this.h=!1}var J_={},Ef={};function Sf(c,p,g){c.L=1,c.v=Nl(Zn(p)),c.m=g,c.P=!0,Z_(c,null)}function Z_(c,p){c.F=Date.now(),Ol(c),c.A=Zn(c.v);var g=c.A,R=c.R;Array.isArray(R)||(R=[String(R)]),dy(g.i,"t",R),c.C=0,g=c.j.J,c.h=new X_,c.g=ky(c.j,g?p:null,!c.m),0<c.O&&(c.M=new _x(d(c.Y,c,c.g),c.O)),p=c.U,g=c.g,R=c.ca;var N="readystatechange";Array.isArray(N)||(N&&($_[0]=N.toString()),N=$_);for(var B=0;B<N.length;B++){var X=De(g,N[B],R||p.handleEvent,!1,p.h||p);if(!X)break;p.g[X.key]=X}p=c.H?S(c.H):{},c.m?(c.u||(c.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,p)):(c.u="GET",c.g.ea(c.A,c.u,null,p)),Co(),wx(c.i,c.u,c.A,c.l,c.R,c.m)}br.prototype.ca=function(c){c=c.target;const p=this.M;p&&er(c)==3?p.j():this.Y(c)},br.prototype.Y=function(c){try{if(c==this.g)e:{const kt=er(this.g);var p=this.g.Ba();const ls=this.g.Z();if(!(3>kt)&&(kt!=3||this.g&&(this.h.h||this.g.oa()||wy(this.g)))){this.J||kt!=4||p==7||(p==8||0>=ls?Co(3):Co(2)),Tf(this);var g=this.g.Z();this.X=g;t:if(ey(this)){var R=wy(this.g);c="";var N=R.length,B=er(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ei(this),Lo(this);var X="";break t}this.h.i=new a.TextDecoder}for(p=0;p<N;p++)this.h.h=!0,c+=this.h.i.decode(R[p],{stream:!(B&&p==N-1)});R.length=0,this.h.g+=c,this.C=0,X=this.h.g}else X=this.g.oa();if(this.o=g==200,Ex(this.i,this.u,this.A,this.l,this.R,kt,g),this.o){if(this.T&&!this.K){t:{if(this.g){var Fe,Et=this.g;if((Fe=Et.g?Et.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(Fe)){var Pe=Fe;break t}}Pe=null}if(g=Pe)ss(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,bf(this,g);else{this.o=!1,this.s=3,Bt(12),Ei(this),Lo(this);break e}}if(this.P){g=!0;let An;for(;!this.J&&this.C<X.length;)if(An=bx(this,X),An==Ef){kt==4&&(this.s=4,Bt(14),g=!1),ss(this.i,this.l,null,"[Incomplete Response]");break}else if(An==J_){this.s=4,Bt(15),ss(this.i,this.l,X,"[Invalid Chunk]"),g=!1;break}else ss(this.i,this.l,An,null),bf(this,An);if(ey(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),kt!=4||X.length!=0||this.h.h||(this.s=1,Bt(16),g=!1),this.o=this.o&&g,!g)ss(this.i,this.l,X,"[Invalid Chunked Response]"),Ei(this),Lo(this);else if(0<X.length&&!this.W){this.W=!0;var Pt=this.j;Pt.g==this&&Pt.ba&&!Pt.M&&(Pt.j.info("Great, no buffering proxy detected. Bytes received: "+X.length),Pf(Pt),Pt.M=!0,Bt(11))}}else ss(this.i,this.l,X,null),bf(this,X);kt==4&&Ei(this),this.o&&!this.J&&(kt==4?Ry(this.j,this):(this.o=!1,Ol(this)))}else Bx(this.g),g==400&&0<X.indexOf("Unknown SID")?(this.s=3,Bt(12)):(this.s=0,Bt(13)),Ei(this),Lo(this)}}}catch{}finally{}};function ey(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function bx(c,p){var g=c.C,R=p.indexOf(`
`,g);return R==-1?Ef:(g=Number(p.substring(g,R)),isNaN(g)?J_:(R+=1,R+g>p.length?Ef:(p=p.slice(R,R+g),c.C=R+g,p)))}br.prototype.cancel=function(){this.J=!0,Ei(this)};function Ol(c){c.S=Date.now()+c.I,ty(c,c.I)}function ty(c,p){if(c.B!=null)throw Error("WatchDog timer not null");c.B=Po(d(c.ba,c),p)}function Tf(c){c.B&&(a.clearTimeout(c.B),c.B=null)}br.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(Sx(this.i,this.A),this.L!=2&&(Co(),Bt(17)),Ei(this),this.s=2,Lo(this)):ty(this,this.S-c)};function Lo(c){c.j.G==0||c.J||Ry(c.j,c)}function Ei(c){Tf(c);var p=c.M;p&&typeof p.ma=="function"&&p.ma(),c.M=null,U_(c.U),c.g&&(p=c.g,c.g=null,p.abort(),p.ma())}function bf(c,p){try{var g=c.j;if(g.G!=0&&(g.g==c||xf(g.h,c))){if(!c.K&&xf(g.h,c)&&g.G==3){try{var R=g.Da.g.parse(p)}catch{R=null}if(Array.isArray(R)&&R.length==3){var N=R;if(N[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<c.F)$l(g),jl(g);else break e;Cf(g),Bt(18)}}else g.za=N[1],0<g.za-g.T&&37500>N[2]&&g.F&&g.v==0&&!g.C&&(g.C=Po(d(g.Za,g),6e3));if(1>=iy(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else Ti(g,11)}else if((c.K||g.g==c)&&$l(g),!v(p))for(N=g.Da.g.parse(p),p=0;p<N.length;p++){let Pe=N[p];if(g.T=Pe[0],Pe=Pe[1],g.G==2)if(Pe[0]=="c"){g.K=Pe[1],g.ia=Pe[2];const Pt=Pe[3];Pt!=null&&(g.la=Pt,g.j.info("VER="+g.la));const kt=Pe[4];kt!=null&&(g.Aa=kt,g.j.info("SVER="+g.Aa));const ls=Pe[5];ls!=null&&typeof ls=="number"&&0<ls&&(R=1.5*ls,g.L=R,g.j.info("backChannelRequestTimeoutMs_="+R)),R=g;const An=c.g;if(An){const Hl=An.g?An.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Hl){var B=R.h;B.g||Hl.indexOf("spdy")==-1&&Hl.indexOf("quic")==-1&&Hl.indexOf("h2")==-1||(B.j=B.l,B.g=new Set,B.h&&(If(B,B.h),B.h=null))}if(R.D){const kf=An.g?An.g.getResponseHeader("X-HTTP-Session-Id"):null;kf&&(R.ya=kf,$e(R.I,R.D,kf))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-c.F,g.j.info("Handshake RTT: "+g.R+"ms")),R=g;var X=c;if(R.qa=Py(R,R.J?R.ia:null,R.W),X.K){sy(R.h,X);var Fe=X,Et=R.L;Et&&(Fe.I=Et),Fe.B&&(Tf(Fe),Ol(Fe)),R.g=X}else xy(R);0<g.i.length&&Bl(g)}else Pe[0]!="stop"&&Pe[0]!="close"||Ti(g,7);else g.G==3&&(Pe[0]=="stop"||Pe[0]=="close"?Pe[0]=="stop"?Ti(g,7):Af(g):Pe[0]!="noop"&&g.l&&g.l.ta(Pe),g.v=0)}}Co(4)}catch{}}var xx=class{constructor(c,p){this.g=c,this.map=p}};function ny(c){this.l=c||10,a.PerformanceNavigationTiming?(c=a.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ry(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function iy(c){return c.h?1:c.g?c.g.size:0}function xf(c,p){return c.h?c.h==p:c.g?c.g.has(p):!1}function If(c,p){c.g?c.g.add(p):c.h=p}function sy(c,p){c.h&&c.h==p?c.h=null:c.g&&c.g.has(p)&&c.g.delete(p)}ny.prototype.cancel=function(){if(this.i=oy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function oy(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let p=c.i;for(const g of c.g.values())p=p.concat(g.D);return p}return y(c.i)}function Ix(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(l(c)){for(var p=[],g=c.length,R=0;R<g;R++)p.push(c[R]);return p}p=[],g=0;for(R in c)p[g++]=c[R];return p}function Rx(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(l(c)||typeof c=="string"){var p=[];c=c.length;for(var g=0;g<c;g++)p.push(g);return p}p=[],g=0;for(const R in c)p[g++]=R;return p}}}function ay(c,p){if(c.forEach&&typeof c.forEach=="function")c.forEach(p,void 0);else if(l(c)||typeof c=="string")Array.prototype.forEach.call(c,p,void 0);else for(var g=Rx(c),R=Ix(c),N=R.length,B=0;B<N;B++)p.call(void 0,R[B],g&&g[B],c)}var ly=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ax(c,p){if(c){c=c.split("&");for(var g=0;g<c.length;g++){var R=c[g].indexOf("="),N=null;if(0<=R){var B=c[g].substring(0,R);N=c[g].substring(R+1)}else B=c[g];p(B,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Si(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof Si){this.h=c.h,Dl(this,c.j),this.o=c.o,this.g=c.g,Ml(this,c.s),this.l=c.l;var p=c.i,g=new Mo;g.i=p.i,p.g&&(g.g=new Map(p.g),g.h=p.h),uy(this,g),this.m=c.m}else c&&(p=String(c).match(ly))?(this.h=!1,Dl(this,p[1]||"",!0),this.o=Oo(p[2]||""),this.g=Oo(p[3]||"",!0),Ml(this,p[4]),this.l=Oo(p[5]||"",!0),uy(this,p[6]||"",!0),this.m=Oo(p[7]||"")):(this.h=!1,this.i=new Mo(null,this.h))}Si.prototype.toString=function(){var c=[],p=this.j;p&&c.push(Do(p,cy,!0),":");var g=this.g;return(g||p=="file")&&(c.push("//"),(p=this.o)&&c.push(Do(p,cy,!0),"@"),c.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&c.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&c.push("/"),c.push(Do(g,g.charAt(0)=="/"?kx:Px,!0))),(g=this.i.toString())&&c.push("?",g),(g=this.m)&&c.push("#",Do(g,Ox)),c.join("")};function Zn(c){return new Si(c)}function Dl(c,p,g){c.j=g?Oo(p,!0):p,c.j&&(c.j=c.j.replace(/:$/,""))}function Ml(c,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);c.s=p}else c.s=null}function uy(c,p,g){p instanceof Mo?(c.i=p,Dx(c.i,c.h)):(g||(p=Do(p,Lx)),c.i=new Mo(p,c.h))}function $e(c,p,g){c.i.set(p,g)}function Nl(c){return $e(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Oo(c,p){return c?p?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Do(c,p,g){return typeof c=="string"?(c=encodeURI(c).replace(p,Cx),g&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Cx(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var cy=/[#\/\?@]/g,Px=/[#\?:]/g,kx=/[#\?]/g,Lx=/[#\?@]/g,Ox=/#/g;function Mo(c,p){this.h=this.g=null,this.i=c||null,this.j=!!p}function xr(c){c.g||(c.g=new Map,c.h=0,c.i&&Ax(c.i,function(p,g){c.add(decodeURIComponent(p.replace(/\+/g," ")),g)}))}t=Mo.prototype,t.add=function(c,p){xr(this),this.i=null,c=os(this,c);var g=this.g.get(c);return g||this.g.set(c,g=[]),g.push(p),this.h+=1,this};function hy(c,p){xr(c),p=os(c,p),c.g.has(p)&&(c.i=null,c.h-=c.g.get(p).length,c.g.delete(p))}function fy(c,p){return xr(c),p=os(c,p),c.g.has(p)}t.forEach=function(c,p){xr(this),this.g.forEach(function(g,R){g.forEach(function(N){c.call(p,N,R,this)},this)},this)},t.na=function(){xr(this);const c=Array.from(this.g.values()),p=Array.from(this.g.keys()),g=[];for(let R=0;R<p.length;R++){const N=c[R];for(let B=0;B<N.length;B++)g.push(p[R])}return g},t.V=function(c){xr(this);let p=[];if(typeof c=="string")fy(this,c)&&(p=p.concat(this.g.get(os(this,c))));else{c=Array.from(this.g.values());for(let g=0;g<c.length;g++)p=p.concat(c[g])}return p},t.set=function(c,p){return xr(this),this.i=null,c=os(this,c),fy(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[p]),this.h+=1,this},t.get=function(c,p){return c?(c=this.V(c),0<c.length?String(c[0]):p):p};function dy(c,p,g){hy(c,p),0<g.length&&(c.i=null,c.g.set(os(c,p),y(g)),c.h+=g.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],p=Array.from(this.g.keys());for(var g=0;g<p.length;g++){var R=p[g];const B=encodeURIComponent(String(R)),X=this.V(R);for(R=0;R<X.length;R++){var N=B;X[R]!==""&&(N+="="+encodeURIComponent(String(X[R]))),c.push(N)}}return this.i=c.join("&")};function os(c,p){return p=String(p),c.j&&(p=p.toLowerCase()),p}function Dx(c,p){p&&!c.j&&(xr(c),c.i=null,c.g.forEach(function(g,R){var N=R.toLowerCase();R!=N&&(hy(this,R),dy(this,N,g))},c)),c.j=p}function Mx(c,p){const g=new ko;if(a.Image){const R=new Image;R.onload=m(Ir,g,"TestLoadImage: loaded",!0,p,R),R.onerror=m(Ir,g,"TestLoadImage: error",!1,p,R),R.onabort=m(Ir,g,"TestLoadImage: abort",!1,p,R),R.ontimeout=m(Ir,g,"TestLoadImage: timeout",!1,p,R),a.setTimeout(function(){R.ontimeout&&R.ontimeout()},1e4),R.src=c}else p(!1)}function Nx(c,p){const g=new ko,R=new AbortController,N=setTimeout(()=>{R.abort(),Ir(g,"TestPingServer: timeout",!1,p)},1e4);fetch(c,{signal:R.signal}).then(B=>{clearTimeout(N),B.ok?Ir(g,"TestPingServer: ok",!0,p):Ir(g,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(N),Ir(g,"TestPingServer: error",!1,p)})}function Ir(c,p,g,R,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),R(g)}catch{}}function Vx(){this.g=new vx}function Fx(c,p,g){const R=g||"";try{ay(c,function(N,B){let X=N;u(N)&&(X=gf(N)),p.push(R+B+"="+encodeURIComponent(X))})}catch(N){throw p.push(R+"type="+encodeURIComponent("_badmap")),N}}function Vl(c){this.l=c.Ub||null,this.j=c.eb||!1}_(Vl,_f),Vl.prototype.g=function(){return new Fl(this.l,this.j)},Vl.prototype.i=function(c){return function(){return c}}({});function Fl(c,p){Ct.call(this),this.D=c,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}_(Fl,Ct),t=Fl.prototype,t.open=function(c,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=p,this.readyState=1,Vo(this)},t.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(p.body=c),(this.D||a).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,No(this)),this.readyState=0},t.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Vo(this)),this.g&&(this.readyState=3,Vo(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;py(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function py(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}t.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var p=c.value?c.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!c.done}))&&(this.response=this.responseText+=p)}c.done?No(this):Vo(this),this.readyState==3&&py(this)}},t.Ra=function(c){this.g&&(this.response=this.responseText=c,No(this))},t.Qa=function(c){this.g&&(this.response=c,No(this))},t.ga=function(){this.g&&No(this)};function No(c){c.readyState=4,c.l=null,c.j=null,c.v=null,Vo(c)}t.setRequestHeader=function(c,p){this.u.append(c,p)},t.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],p=this.h.entries();for(var g=p.next();!g.done;)g=g.value,c.push(g[0]+": "+g[1]),g=p.next();return c.join(`\r
`)};function Vo(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Fl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function my(c){let p="";return D(c,function(g,R){p+=R,p+=":",p+=g,p+=`\r
`}),p}function Rf(c,p,g){e:{for(R in g){var R=!1;break e}R=!0}R||(g=my(g),typeof c=="string"?g!=null&&encodeURIComponent(String(g)):$e(c,p,g))}function nt(c){Ct.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}_(nt,Ct);var zx=/^https?$/i,jx=["POST","PUT"];t=nt.prototype,t.Ha=function(c){this.J=c},t.ea=function(c,p,g,R){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);p=p?p.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():wf.g(),this.v=this.o?H_(this.o):H_(wf),this.g.onreadystatechange=d(this.Ea,this);try{this.B=!0,this.g.open(p,String(c),!0),this.B=!1}catch(B){gy(this,B);return}if(c=g||"",g=new Map(this.headers),R)if(Object.getPrototypeOf(R)===Object.prototype)for(var N in R)g.set(N,R[N]);else if(typeof R.keys=="function"&&typeof R.get=="function")for(const B of R.keys())g.set(B,R.get(B));else throw Error("Unknown input type for opt_headers: "+String(R));R=Array.from(g.keys()).find(B=>B.toLowerCase()=="content-type"),N=a.FormData&&c instanceof a.FormData,!(0<=Array.prototype.indexOf.call(jx,p,void 0))||R||N||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[B,X]of g)this.g.setRequestHeader(B,X);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{vy(this),this.u=!0,this.g.send(c),this.u=!1}catch(B){gy(this,B)}};function gy(c,p){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=p,c.m=5,_y(c),zl(c)}function _y(c){c.A||(c.A=!0,jt(c,"complete"),jt(c,"error"))}t.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,jt(this,"complete"),jt(this,"abort"),zl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),zl(this,!0)),nt.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?yy(this):this.bb())},t.bb=function(){yy(this)};function yy(c){if(c.h&&typeof o<"u"&&(!c.v[1]||er(c)!=4||c.Z()!=2)){if(c.u&&er(c)==4)j_(c.Ea,0,c);else if(jt(c,"readystatechange"),er(c)==4){c.h=!1;try{const X=c.Z();e:switch(X){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var g;if(!(g=p)){var R;if(R=X===0){var N=String(c.D).match(ly)[1]||null;!N&&a.self&&a.self.location&&(N=a.self.location.protocol.slice(0,-1)),R=!zx.test(N?N.toLowerCase():"")}g=R}if(g)jt(c,"complete"),jt(c,"success");else{c.m=6;try{var B=2<er(c)?c.g.statusText:""}catch{B=""}c.l=B+" ["+c.Z()+"]",_y(c)}}finally{zl(c)}}}}function zl(c,p){if(c.g){vy(c);const g=c.g,R=c.v[0]?()=>{}:null;c.g=null,c.v=null,p||jt(c,"ready");try{g.onreadystatechange=R}catch{}}}function vy(c){c.I&&(a.clearTimeout(c.I),c.I=null)}t.isActive=function(){return!!this.g};function er(c){return c.g?c.g.readyState:0}t.Z=function(){try{return 2<er(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(c){if(this.g){var p=this.g.responseText;return c&&p.indexOf(c)==0&&(p=p.substring(c.length)),yx(p)}};function wy(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Bx(c){const p={};c=(c.g&&2<=er(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let R=0;R<c.length;R++){if(v(c[R]))continue;var g=C(c[R]);const N=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const B=p[N]||[];p[N]=B,B.push(g)}x(p,function(R){return R.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Fo(c,p,g){return g&&g.internalChannelParams&&g.internalChannelParams[c]||p}function Ey(c){this.Aa=0,this.i=[],this.j=new ko,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Fo("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Fo("baseRetryDelayMs",5e3,c),this.cb=Fo("retryDelaySeedMs",1e4,c),this.Wa=Fo("forwardChannelMaxRetries",2,c),this.wa=Fo("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new ny(c&&c.concurrentRequestLimit),this.Da=new Vx,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Ey.prototype,t.la=8,t.G=1,t.connect=function(c,p,g,R){Bt(0),this.W=c,this.H=p||{},g&&R!==void 0&&(this.H.OSID=g,this.H.OAID=R),this.F=this.X,this.I=Py(this,null,this.W),Bl(this)};function Af(c){if(Sy(c),c.G==3){var p=c.U++,g=Zn(c.I);if($e(g,"SID",c.K),$e(g,"RID",p),$e(g,"TYPE","terminate"),zo(c,g),p=new br(c,c.j,p),p.L=2,p.v=Nl(Zn(g)),g=!1,a.navigator&&a.navigator.sendBeacon)try{g=a.navigator.sendBeacon(p.v.toString(),"")}catch{}!g&&a.Image&&(new Image().src=p.v,g=!0),g||(p.g=ky(p.j,null),p.g.ea(p.v)),p.F=Date.now(),Ol(p)}Cy(c)}function jl(c){c.g&&(Pf(c),c.g.cancel(),c.g=null)}function Sy(c){jl(c),c.u&&(a.clearTimeout(c.u),c.u=null),$l(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&a.clearTimeout(c.s),c.s=null)}function Bl(c){if(!ry(c.h)&&!c.s){c.s=!0;var p=c.Ga;Ee||oe(),Q||(Ee(),Q=!0),ne.add(p,c),c.B=0}}function $x(c,p){return iy(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=p.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=Po(d(c.Ga,c,p),Ay(c,c.B)),c.B++,!0)}t.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const N=new br(this,this.j,c);let B=this.o;if(this.S&&(B?(B=S(B),I(B,this.S)):B=this.S),this.m!==null||this.O||(N.H=B,B=null),this.P)e:{for(var p=0,g=0;g<this.i.length;g++){t:{var R=this.i[g];if("__data__"in R.map&&(R=R.map.__data__,typeof R=="string")){R=R.length;break t}R=void 0}if(R===void 0)break;if(p+=R,4096<p){p=g;break e}if(p===4096||g===this.i.length-1){p=g+1;break e}}p=1e3}else p=1e3;p=by(this,N,p),g=Zn(this.I),$e(g,"RID",c),$e(g,"CVER",22),this.D&&$e(g,"X-HTTP-Session-Id",this.D),zo(this,g),B&&(this.O?p="headers="+encodeURIComponent(String(my(B)))+"&"+p:this.m&&Rf(g,this.m,B)),If(this.h,N),this.Ua&&$e(g,"TYPE","init"),this.P?($e(g,"$req",p),$e(g,"SID","null"),N.T=!0,Sf(N,g,null)):Sf(N,g,p),this.G=2}}else this.G==3&&(c?Ty(this,c):this.i.length==0||ry(this.h)||Ty(this))};function Ty(c,p){var g;p?g=p.l:g=c.U++;const R=Zn(c.I);$e(R,"SID",c.K),$e(R,"RID",g),$e(R,"AID",c.T),zo(c,R),c.m&&c.o&&Rf(R,c.m,c.o),g=new br(c,c.j,g,c.B+1),c.m===null&&(g.H=c.o),p&&(c.i=p.D.concat(c.i)),p=by(c,g,1e3),g.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),If(c.h,g),Sf(g,R,p)}function zo(c,p){c.H&&D(c.H,function(g,R){$e(p,R,g)}),c.l&&ay({},function(g,R){$e(p,R,g)})}function by(c,p,g){g=Math.min(c.i.length,g);var R=c.l?d(c.l.Na,c.l,c):null;e:{var N=c.i;let B=-1;for(;;){const X=["count="+g];B==-1?0<g?(B=N[0].g,X.push("ofs="+B)):B=0:X.push("ofs="+B);let Fe=!0;for(let Et=0;Et<g;Et++){let Pe=N[Et].g;const Pt=N[Et].map;if(Pe-=B,0>Pe)B=Math.max(0,N[Et].g-100),Fe=!1;else try{Fx(Pt,X,"req"+Pe+"_")}catch{R&&R(Pt)}}if(Fe){R=X.join("&");break e}}}return c=c.i.splice(0,g),p.D=c,R}function xy(c){if(!c.g&&!c.u){c.Y=1;var p=c.Fa;Ee||oe(),Q||(Ee(),Q=!0),ne.add(p,c),c.v=0}}function Cf(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=Po(d(c.Fa,c),Ay(c,c.v)),c.v++,!0)}t.Fa=function(){if(this.u=null,Iy(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=Po(d(this.ab,this),c)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Bt(10),jl(this),Iy(this))};function Pf(c){c.A!=null&&(a.clearTimeout(c.A),c.A=null)}function Iy(c){c.g=new br(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var p=Zn(c.qa);$e(p,"RID","rpc"),$e(p,"SID",c.K),$e(p,"AID",c.T),$e(p,"CI",c.F?"0":"1"),!c.F&&c.ja&&$e(p,"TO",c.ja),$e(p,"TYPE","xmlhttp"),zo(c,p),c.m&&c.o&&Rf(p,c.m,c.o),c.L&&(c.g.I=c.L);var g=c.g;c=c.ia,g.L=1,g.v=Nl(Zn(p)),g.m=null,g.P=!0,Z_(g,c)}t.Za=function(){this.C!=null&&(this.C=null,jl(this),Cf(this),Bt(19))};function $l(c){c.C!=null&&(a.clearTimeout(c.C),c.C=null)}function Ry(c,p){var g=null;if(c.g==p){$l(c),Pf(c),c.g=null;var R=2}else if(xf(c.h,p))g=p.D,sy(c.h,p),R=1;else return;if(c.G!=0){if(p.o)if(R==1){g=p.m?p.m.length:0,p=Date.now()-p.F;var N=c.B;R=Pl(),jt(R,new Q_(R,g)),Bl(c)}else xy(c);else if(N=p.s,N==3||N==0&&0<p.X||!(R==1&&$x(c,p)||R==2&&Cf(c)))switch(g&&0<g.length&&(p=c.h,p.i=p.i.concat(g)),N){case 1:Ti(c,5);break;case 4:Ti(c,10);break;case 3:Ti(c,6);break;default:Ti(c,2)}}}function Ay(c,p){let g=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(g*=2),g*p}function Ti(c,p){if(c.j.info("Error code "+p),p==2){var g=d(c.fb,c),R=c.Xa;const N=!R;R=new Si(R||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Dl(R,"https"),Nl(R),N?Mx(R.toString(),g):Nx(R.toString(),g)}else Bt(2);c.G=0,c.l&&c.l.sa(p),Cy(c),Sy(c)}t.fb=function(c){c?(this.j.info("Successfully pinged google.com"),Bt(2)):(this.j.info("Failed to ping google.com"),Bt(1))};function Cy(c){if(c.G=0,c.ka=[],c.l){const p=oy(c.h);(p.length!=0||c.i.length!=0)&&(E(c.ka,p),E(c.ka,c.i),c.h.i.length=0,y(c.i),c.i.length=0),c.l.ra()}}function Py(c,p,g){var R=g instanceof Si?Zn(g):new Si(g);if(R.g!="")p&&(R.g=p+"."+R.g),Ml(R,R.s);else{var N=a.location;R=N.protocol,p=p?p+"."+N.hostname:N.hostname,N=+N.port;var B=new Si(null);R&&Dl(B,R),p&&(B.g=p),N&&Ml(B,N),g&&(B.l=g),R=B}return g=c.D,p=c.ya,g&&p&&$e(R,g,p),$e(R,"VER",c.la),zo(c,R),R}function ky(c,p,g){if(p&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=c.Ca&&!c.pa?new nt(new Vl({eb:g})):new nt(c.pa),p.Ha(c.J),p}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ly(){}t=Ly.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ul(){}Ul.prototype.g=function(c,p){return new on(c,p)};function on(c,p){Ct.call(this),this.g=new Ey(p),this.l=c,this.h=p&&p.messageUrlParams||null,c=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(c?c["X-WebChannel-Content-Type"]=p.messageContentType:c={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(c?c["X-WebChannel-Client-Profile"]=p.va:c={"X-WebChannel-Client-Profile":p.va}),this.g.S=c,(c=p&&p.Sb)&&!v(c)&&(this.g.m=c),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!v(p)&&(this.g.D=p,c=this.h,c!==null&&p in c&&(c=this.h,p in c&&delete c[p])),this.j=new as(this)}_(on,Ct),on.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},on.prototype.close=function(){Af(this.g)},on.prototype.o=function(c){var p=this.g;if(typeof c=="string"){var g={};g.__data__=c,c=g}else this.u&&(g={},g.__data__=gf(c),c=g);p.i.push(new xx(p.Ya++,c)),p.G==3&&Bl(p)},on.prototype.N=function(){this.g.l=null,delete this.j,Af(this.g),delete this.g,on.aa.N.call(this)};function Oy(c){yf.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var p=c.__sm__;if(p){e:{for(const g in p){c=g;break e}c=void 0}(this.i=c)&&(c=this.i,p=p!==null&&c in p?p[c]:void 0),this.data=p}else this.data=c}_(Oy,yf);function Dy(){vf.call(this),this.status=1}_(Dy,vf);function as(c){this.g=c}_(as,Ly),as.prototype.ua=function(){jt(this.g,"a")},as.prototype.ta=function(c){jt(this.g,new Oy(c))},as.prototype.sa=function(c){jt(this.g,new Dy)},as.prototype.ra=function(){jt(this.g,"b")},Ul.prototype.createWebChannel=Ul.prototype.g,on.prototype.send=on.prototype.o,on.prototype.open=on.prototype.m,on.prototype.close=on.prototype.close,KT=function(){return new Ul},qT=function(){return Pl()},WT=wi,pm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},kl.NO_ERROR=0,kl.TIMEOUT=8,kl.HTTP_ERROR=6,nc=kl,Y_.COMPLETE="complete",HT=Y_,W_.EventType=Ao,Ao.OPEN="a",Ao.CLOSE="b",Ao.ERROR="c",Ao.MESSAGE="d",Ct.prototype.listen=Ct.prototype.K,ua=W_,nt.prototype.listenOnce=nt.prototype.L,nt.prototype.getLastError=nt.prototype.Ka,nt.prototype.getLastErrorCode=nt.prototype.Ba,nt.prototype.getStatus=nt.prototype.Z,nt.prototype.getResponseJson=nt.prototype.Oa,nt.prototype.getResponseText=nt.prototype.oa,nt.prototype.send=nt.prototype.ea,nt.prototype.setWithCredentials=nt.prototype.Ha,UT=nt}).apply(typeof Iu<"u"?Iu:typeof self<"u"?self:typeof window<"u"?window:{});const a1="@firebase/firestore",l1="4.7.9";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Mt.UNAUTHENTICATED=new Mt(null),Mt.GOOGLE_CREDENTIALS=new Mt("google-credentials-uid"),Mt.FIRST_PARTY=new Mt("first-party-uid"),Mt.MOCK_USER=new Mt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let So="11.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi=new NT("@firebase/firestore");function fs(){return Yi.logLevel}function te(t,...e){if(Yi.logLevel<=Ie.DEBUG){const n=e.map(i_);Yi.debug(`Firestore (${So}): ${t}`,...n)}}function vr(t,...e){if(Yi.logLevel<=Ie.ERROR){const n=e.map(i_);Yi.error(`Firestore (${So}): ${t}`,...n)}}function io(t,...e){if(Yi.logLevel<=Ie.WARN){const n=e.map(i_);Yi.warn(`Firestore (${So}): ${t}`,...n)}}function i_(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(t="Unexpected state"){const e=`FIRESTORE (${So}) INTERNAL ASSERTION FAILED: `+t;throw vr(e),new Error(e)}function Le(t,e){t||he()}function me(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ie extends Eo{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class BV{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Mt.UNAUTHENTICATED))}shutdown(){}}class $V{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class UV{constructor(e){this.t=e,this.currentUser=Mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Le(this.o===void 0);let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new ti;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ti,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ti)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Le(typeof r.accessToken=="string"),new GT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Le(e===null||typeof e=="string"),new Mt(e)}}class HV{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Mt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class WV{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new HV(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class u1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class qV{constructor(e,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,IV(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,n){Le(this.o===void 0);const r=s=>{s.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,te("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new u1(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Le(typeof n.token=="string"),this.R=n.token,new u1(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KV(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=KV(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function Te(t,e){return t<e?-1:t>e?1:0}function so(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c1=-62135596800,h1=1e6;class mt{static now(){return mt.fromMillis(Date.now())}static fromDate(e){return mt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*h1);return new mt(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ie(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ie(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<c1)throw new ie(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ie(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/h1}_compareTo(e){return this.seconds===e.seconds?Te(this.nanoseconds,e.nanoseconds):Te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-c1;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{static fromTimestamp(e){return new fe(e)}static min(){return new fe(new mt(0,0))}static max(){return new fe(new mt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f1="__name__";class Hn{constructor(e,n,r){n===void 0?n=0:n>e.length&&he(),r===void 0?r=e.length-n:r>e.length-n&&he(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Hn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Hn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=Hn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return Math.sign(e.length-n.length)}static compareSegments(e,n){const r=Hn.isNumericId(e),i=Hn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?Hn.extractNumericId(e).compare(Hn.extractNumericId(n)):e<n?-1:e>n?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ei.fromString(e.substring(4,e.length-2))}}class He extends Hn{construct(e,n,r){return new He(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ie(W.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new He(n)}static emptyPath(){return new He([])}}const GV=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class bt extends Hn{construct(e,n,r){return new bt(e,n,r)}static isValidIdentifier(e){return GV.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),bt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===f1}static keyField(){return new bt([f1])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new ie(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new ie(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ie(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new ie(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new bt(n)}static emptyPath(){return new bt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e){this.path=e}static fromPath(e){return new le(He.fromString(e))}static fromName(e){return new le(He.fromString(e).popFirst(5))}static empty(){return new le(He.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&He.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return He.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new le(new He(e.slice()))}}/**
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
 */const rl=-1;function QV(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=fe.fromTimestamp(r===1e9?new mt(n+1,0):new mt(n,r));return new ai(i,le.empty(),e)}function YV(t){return new ai(t.readTime,t.key,rl)}class ai{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ai(fe.min(),le.empty(),rl)}static max(){return new ai(fe.max(),le.empty(),rl)}}function XV(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=le.comparator(t.documentKey,e.documentKey),n!==0?n:Te(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JV="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ZV{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function To(t){if(t.code!==W.FAILED_PRECONDITION||t.message!==JV)throw t;te("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&he(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new H((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof H?n:H.resolve(n)}catch(n){return H.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):H.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):H.reject(n)}static resolve(e){return new H((n,r)=>{n(e)})}static reject(e){return new H((n,r)=>{r(e)})}static waitFor(e){return new H((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=H.resolve(!1);for(const r of e)n=n.next(i=>i?H.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new H((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(h=>{o[u]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new H((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function eF(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function bo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Zh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Zh.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_=-1;function ef(t){return t==null}function ah(t){return t===0&&1/t==-1/0}function tF(t){return typeof t=="number"&&Number.isInteger(t)&&!ah(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YT="";function nF(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=d1(e)),e=rF(t.get(n),e);return d1(e)}function rF(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case YT:n+="";break;default:n+=s}}return n}function d1(t){return t+YT+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p1(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function _i(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function XT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,n){this.comparator=e,this.root=n||Tt.EMPTY}insert(e,n){return new tt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Tt.BLACK,null,null))}remove(e){return new tt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Tt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ru(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ru(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ru(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ru(this.root,e,this.comparator,!0)}}class Ru{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Tt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Tt.RED,this.left=i??Tt.EMPTY,this.right=s??Tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Tt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Tt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Tt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw he();const e=this.left.check();if(e!==this.right.check())throw he();return e+(this.isRed()?0:1)}}Tt.EMPTY=null,Tt.RED=!0,Tt.BLACK=!1;Tt.EMPTY=new class{constructor(){this.size=0}get key(){throw he()}get value(){throw he()}get color(){throw he()}get left(){throw he()}get right(){throw he()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Tt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.comparator=e,this.data=new tt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new m1(this.data.getIterator())}getIteratorFrom(e){return new m1(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof gt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new gt(this.comparator);return n.data=e,n}}class m1{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this.fields=e,e.sort(bt.comparator)}static empty(){return new dn([])}unionWith(e){let n=new gt(bt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new dn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return so(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class JT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new JT("Invalid base64 string: "+s):s}}(e);return new At(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new At(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}At.EMPTY_BYTE_STRING=new At("");const iF=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function li(t){if(Le(!!t),typeof t=="string"){let e=0;const n=iF.exec(t);if(Le(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:at(t.seconds),nanos:at(t.nanos)}}function at(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ui(t){return typeof t=="string"?At.fromBase64String(t):At.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZT="server_timestamp",eb="__type__",tb="__previous_value__",nb="__local_write_time__";function o_(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[eb])===null||n===void 0?void 0:n.stringValue)===ZT}function tf(t){const e=t.mapValue.fields[tb];return o_(e)?tf(e):e}function il(t){const e=li(t.mapValue.fields[nb].timestampValue);return new mt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sF{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}const lh="(default)";class sl{constructor(e,n){this.projectId=e,this.database=n||lh}static empty(){return new sl("","")}get isDefaultDatabase(){return this.database===lh}isEqual(e){return e instanceof sl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rb="__type__",ib="__max__",Au={mapValue:{fields:{__type__:{stringValue:ib}}}},sb="__vector__",uh="value";function ci(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?o_(t)?4:aF(t)?9007199254740991:oF(t)?10:11:he()}function Xn(t,e){if(t===e)return!0;const n=ci(t);if(n!==ci(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return il(t).isEqual(il(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=li(i.timestampValue),a=li(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ui(i.bytesValue).isEqual(ui(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return at(i.geoPointValue.latitude)===at(s.geoPointValue.latitude)&&at(i.geoPointValue.longitude)===at(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return at(i.integerValue)===at(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=at(i.doubleValue),a=at(s.doubleValue);return o===a?ah(o)===ah(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return so(t.arrayValue.values||[],e.arrayValue.values||[],Xn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(p1(o)!==p1(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Xn(o[l],a[l])))return!1;return!0}(t,e);default:return he()}}function ol(t,e){return(t.values||[]).find(n=>Xn(n,e))!==void 0}function oo(t,e){if(t===e)return 0;const n=ci(t),r=ci(e);if(n!==r)return Te(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Te(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=at(s.integerValue||s.doubleValue),l=at(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return g1(t.timestampValue,e.timestampValue);case 4:return g1(il(t),il(e));case 5:return Te(t.stringValue,e.stringValue);case 6:return function(s,o){const a=ui(s),l=ui(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const h=Te(a[u],l[u]);if(h!==0)return h}return Te(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=Te(at(s.latitude),at(o.latitude));return a!==0?a:Te(at(s.longitude),at(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return _1(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,l,u,h;const f=s.fields||{},d=o.fields||{},m=(a=f[uh])===null||a===void 0?void 0:a.arrayValue,_=(l=d[uh])===null||l===void 0?void 0:l.arrayValue,y=Te(((u=m==null?void 0:m.values)===null||u===void 0?void 0:u.length)||0,((h=_==null?void 0:_.values)===null||h===void 0?void 0:h.length)||0);return y!==0?y:_1(m,_)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Au.mapValue&&o===Au.mapValue)return 0;if(s===Au.mapValue)return 1;if(o===Au.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let f=0;f<l.length&&f<h.length;++f){const d=Te(l[f],h[f]);if(d!==0)return d;const m=oo(a[l[f]],u[h[f]]);if(m!==0)return m}return Te(l.length,h.length)}(t.mapValue,e.mapValue);default:throw he()}}function g1(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Te(t,e);const n=li(t),r=li(e),i=Te(n.seconds,r.seconds);return i!==0?i:Te(n.nanos,r.nanos)}function _1(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=oo(n[i],r[i]);if(s)return s}return Te(n.length,r.length)}function ao(t){return mm(t)}function mm(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=li(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ui(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return le.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=mm(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${mm(n.fields[o])}`;return i+"}"}(t.mapValue):he()}function rc(t){switch(ci(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=tf(t);return e?16+rc(e):16;case 5:return 2*t.stringValue.length;case 6:return ui(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+rc(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return _i(r.fields,(s,o)=>{i+=s.length+rc(o)}),i}(t.mapValue);default:throw he()}}function y1(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function gm(t){return!!t&&"integerValue"in t}function a_(t){return!!t&&"arrayValue"in t}function v1(t){return!!t&&"nullValue"in t}function w1(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ic(t){return!!t&&"mapValue"in t}function oF(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[rb])===null||n===void 0?void 0:n.stringValue)===sb}function Ia(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return _i(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ia(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ia(t.arrayValue.values[n]);return e}return Object.assign({},t)}function aF(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===ib}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.value=e}static empty(){return new Zt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ic(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ia(n)}setAll(e){let n=bt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ia(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ic(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Xn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ic(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){_i(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Zt(Ia(this.value))}}function ob(t){const e=[];return _i(t.fields,(n,r)=>{const i=new bt([n]);if(ic(r)){const s=ob(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new dn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Vt(e,0,fe.min(),fe.min(),fe.min(),Zt.empty(),0)}static newFoundDocument(e,n,r,i){return new Vt(e,1,n,fe.min(),r,i,0)}static newNoDocument(e,n){return new Vt(e,2,n,fe.min(),fe.min(),Zt.empty(),0)}static newUnknownDocument(e,n){return new Vt(e,3,n,fe.min(),fe.min(),Zt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(fe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Zt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Zt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=fe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Vt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ch{constructor(e,n){this.position=e,this.inclusive=n}}function E1(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=le.comparator(le.fromName(o.referenceValue),n.key):r=oo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function S1(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Xn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class hh{constructor(e,n="asc"){this.field=e,this.dir=n}}function lF(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class ab{}class ft extends ab{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new cF(e,n,r):n==="array-contains"?new dF(e,r):n==="in"?new pF(e,r):n==="not-in"?new mF(e,r):n==="array-contains-any"?new gF(e,r):new ft(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new hF(e,r):new fF(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(oo(n,this.value)):n!==null&&ci(this.value)===ci(n)&&this.matchesComparison(oo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return he()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Fn extends ab{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new Fn(e,n)}matches(e){return lb(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function lb(t){return t.op==="and"}function ub(t){return uF(t)&&lb(t)}function uF(t){for(const e of t.filters)if(e instanceof Fn)return!1;return!0}function _m(t){if(t instanceof ft)return t.field.canonicalString()+t.op.toString()+ao(t.value);if(ub(t))return t.filters.map(e=>_m(e)).join(",");{const e=t.filters.map(n=>_m(n)).join(",");return`${t.op}(${e})`}}function cb(t,e){return t instanceof ft?function(r,i){return i instanceof ft&&r.op===i.op&&r.field.isEqual(i.field)&&Xn(r.value,i.value)}(t,e):t instanceof Fn?function(r,i){return i instanceof Fn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&cb(o,i.filters[a]),!0):!1}(t,e):void he()}function hb(t){return t instanceof ft?function(n){return`${n.field.canonicalString()} ${n.op} ${ao(n.value)}`}(t):t instanceof Fn?function(n){return n.op.toString()+" {"+n.getFilters().map(hb).join(" ,")+"}"}(t):"Filter"}class cF extends ft{constructor(e,n,r){super(e,n,r),this.key=le.fromName(r.referenceValue)}matches(e){const n=le.comparator(e.key,this.key);return this.matchesComparison(n)}}class hF extends ft{constructor(e,n){super(e,"in",n),this.keys=fb("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class fF extends ft{constructor(e,n){super(e,"not-in",n),this.keys=fb("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function fb(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>le.fromName(r.referenceValue))}class dF extends ft{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return a_(n)&&ol(n.arrayValue,this.value)}}class pF extends ft{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ol(this.value.arrayValue,n)}}class mF extends ft{constructor(e,n){super(e,"not-in",n)}matches(e){if(ol(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ol(this.value.arrayValue,n)}}class gF extends ft{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!a_(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ol(this.value.arrayValue,r))}}/**
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
 */class _F{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.le=null}}function T1(t,e=null,n=[],r=[],i=null,s=null,o=null){return new _F(t,e,n,r,i,s,o)}function l_(t){const e=me(t);if(e.le===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>_m(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),ef(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ao(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ao(r)).join(",")),e.le=n}return e.le}function u_(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!lF(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!cb(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!S1(t.startAt,e.startAt)&&S1(t.endAt,e.endAt)}function ym(t){return le.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function yF(t,e,n,r,i,s,o,a){return new Sl(t,e,n,r,i,s,o,a)}function db(t){return new Sl(t)}function b1(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function pb(t){return t.collectionGroup!==null}function Ra(t){const e=me(t);if(e.he===null){e.he=[];const n=new Set;for(const s of e.explicitOrderBy)e.he.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new gt(bt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.he.push(new hh(s,r))}),n.has(bt.keyField().canonicalString())||e.he.push(new hh(bt.keyField(),r))}return e.he}function Gn(t){const e=me(t);return e.Pe||(e.Pe=vF(e,Ra(t))),e.Pe}function vF(t,e){if(t.limitType==="F")return T1(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new hh(i.field,s)});const n=t.endAt?new ch(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ch(t.startAt.position,t.startAt.inclusive):null;return T1(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function vm(t,e){const n=t.filters.concat([e]);return new Sl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function wm(t,e,n){return new Sl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function nf(t,e){return u_(Gn(t),Gn(e))&&t.limitType===e.limitType}function mb(t){return`${l_(Gn(t))}|lt:${t.limitType}`}function ds(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>hb(i)).join(", ")}]`),ef(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ao(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ao(i)).join(",")),`Target(${r})`}(Gn(t))}; limitType=${t.limitType})`}function rf(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):le.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ra(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=E1(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,Ra(r),i)||r.endAt&&!function(o,a,l){const u=E1(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,Ra(r),i))}(t,e)}function wF(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function gb(t){return(e,n)=>{let r=!1;for(const i of Ra(t)){const s=EF(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function EF(t,e,n){const r=t.field.isKeyField()?le.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?oo(l,u):he()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return he()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){_i(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return XT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SF=new tt(le.comparator);function wr(){return SF}const _b=new tt(le.comparator);function ca(...t){let e=_b;for(const n of t)e=e.insert(n.key,n);return e}function yb(t){let e=_b;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Vi(){return Aa()}function vb(){return Aa()}function Aa(){return new ns(t=>t.toString(),(t,e)=>t.isEqual(e))}const TF=new tt(le.comparator),bF=new gt(le.comparator);function Se(...t){let e=bF;for(const n of t)e=e.add(n);return e}const xF=new gt(Te);function IF(){return xF}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c_(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ah(e)?"-0":e}}function wb(t){return{integerValue:""+t}}function RF(t,e){return tF(e)?wb(e):c_(t,e)}/**
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
 */class sf{constructor(){this._=void 0}}function AF(t,e,n){return t instanceof fh?function(i,s){const o={fields:{[eb]:{stringValue:ZT},[nb]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&o_(s)&&(s=tf(s)),s&&(o.fields[tb]=s),{mapValue:o}}(n,e):t instanceof al?Sb(t,e):t instanceof ll?Tb(t,e):function(i,s){const o=Eb(i,s),a=x1(o)+x1(i.Ie);return gm(o)&&gm(i.Ie)?wb(a):c_(i.serializer,a)}(t,e)}function CF(t,e,n){return t instanceof al?Sb(t,e):t instanceof ll?Tb(t,e):n}function Eb(t,e){return t instanceof dh?function(r){return gm(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class fh extends sf{}class al extends sf{constructor(e){super(),this.elements=e}}function Sb(t,e){const n=bb(e);for(const r of t.elements)n.some(i=>Xn(i,r))||n.push(r);return{arrayValue:{values:n}}}class ll extends sf{constructor(e){super(),this.elements=e}}function Tb(t,e){let n=bb(e);for(const r of t.elements)n=n.filter(i=>!Xn(i,r));return{arrayValue:{values:n}}}class dh extends sf{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function x1(t){return at(t.integerValue||t.doubleValue)}function bb(t){return a_(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function PF(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof al&&i instanceof al||r instanceof ll&&i instanceof ll?so(r.elements,i.elements,Xn):r instanceof dh&&i instanceof dh?Xn(r.Ie,i.Ie):r instanceof fh&&i instanceof fh}(t.transform,e.transform)}class kF{constructor(e,n){this.version=e,this.transformResults=n}}class Nn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Nn}static exists(e){return new Nn(void 0,e)}static updateTime(e){return new Nn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function sc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class of{}function xb(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new h_(t.key,Nn.none()):new Tl(t.key,t.data,Nn.none());{const n=t.data,r=Zt.empty();let i=new gt(bt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new yi(t.key,r,new dn(i.toArray()),Nn.none())}}function LF(t,e,n){t instanceof Tl?function(i,s,o){const a=i.value.clone(),l=R1(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof yi?function(i,s,o){if(!sc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=R1(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(Ib(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ca(t,e,n,r){return t instanceof Tl?function(s,o,a,l){if(!sc(s.precondition,o))return a;const u=s.value.clone(),h=A1(s.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof yi?function(s,o,a,l){if(!sc(s.precondition,o))return a;const u=A1(s.fieldTransforms,l,o),h=o.data;return h.setAll(Ib(s)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return sc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function OF(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Eb(r.transform,i||null);s!=null&&(n===null&&(n=Zt.empty()),n.set(r.field,s))}return n||null}function I1(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&so(r,i,(s,o)=>PF(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Tl extends of{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class yi extends of{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Ib(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function R1(t,e,n){const r=new Map;Le(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,CF(o,a,n[i]))}return r}function A1(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,AF(s,o,e))}return r}class h_ extends of{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class DF extends of{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MF{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&LF(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ca(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ca(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=vb();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=xb(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(fe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Se())}isEqual(e){return this.batchId===e.batchId&&so(this.mutations,e.mutations,(n,r)=>I1(n,r))&&so(this.baseMutations,e.baseMutations,(n,r)=>I1(n,r))}}class f_{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Le(e.mutations.length===r.length);let i=function(){return TF}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new f_(e,n,r,i)}}/**
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
 */class NF{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class VF{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ct,xe;function FF(t){switch(t){case W.OK:return he();case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0;default:return he()}}function Rb(t){if(t===void 0)return vr("GRPC error has no .code"),W.UNKNOWN;switch(t){case ct.OK:return W.OK;case ct.CANCELLED:return W.CANCELLED;case ct.UNKNOWN:return W.UNKNOWN;case ct.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case ct.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case ct.INTERNAL:return W.INTERNAL;case ct.UNAVAILABLE:return W.UNAVAILABLE;case ct.UNAUTHENTICATED:return W.UNAUTHENTICATED;case ct.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case ct.NOT_FOUND:return W.NOT_FOUND;case ct.ALREADY_EXISTS:return W.ALREADY_EXISTS;case ct.PERMISSION_DENIED:return W.PERMISSION_DENIED;case ct.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case ct.ABORTED:return W.ABORTED;case ct.OUT_OF_RANGE:return W.OUT_OF_RANGE;case ct.UNIMPLEMENTED:return W.UNIMPLEMENTED;case ct.DATA_LOSS:return W.DATA_LOSS;default:return he()}}(xe=ct||(ct={}))[xe.OK=0]="OK",xe[xe.CANCELLED=1]="CANCELLED",xe[xe.UNKNOWN=2]="UNKNOWN",xe[xe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",xe[xe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",xe[xe.NOT_FOUND=5]="NOT_FOUND",xe[xe.ALREADY_EXISTS=6]="ALREADY_EXISTS",xe[xe.PERMISSION_DENIED=7]="PERMISSION_DENIED",xe[xe.UNAUTHENTICATED=16]="UNAUTHENTICATED",xe[xe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",xe[xe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",xe[xe.ABORTED=10]="ABORTED",xe[xe.OUT_OF_RANGE=11]="OUT_OF_RANGE",xe[xe.UNIMPLEMENTED=12]="UNIMPLEMENTED",xe[xe.INTERNAL=13]="INTERNAL",xe[xe.UNAVAILABLE=14]="UNAVAILABLE",xe[xe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function zF(){return new TextEncoder}/**
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
 */const jF=new ei([4294967295,4294967295],0);function C1(t){const e=zF().encode(t),n=new $T;return n.update(e),new Uint8Array(n.digest())}function P1(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ei([n,r],0),new ei([i,s],0)]}class d_{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ha(`Invalid padding: ${n}`);if(r<0)throw new ha(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ha(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ha(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*e.length-n,this.de=ei.fromNumber(this.Ee)}Ae(e,n,r){let i=e.add(n.multiply(ei.fromNumber(r)));return i.compare(jF)===1&&(i=new ei([i.getBits(0),i.getBits(1)],0)),i.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const n=C1(e),[r,i]=P1(n);for(let s=0;s<this.hashCount;s++){const o=this.Ae(r,i,s);if(!this.Re(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new d_(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ee===0)return;const n=C1(e),[r,i]=P1(n);for(let s=0;s<this.hashCount;s++){const o=this.Ae(r,i,s);this.Ve(o)}}Ve(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ha extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,bl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new af(fe.min(),i,new tt(Te),wr(),Se())}}class bl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new bl(r,n,Se(),Se(),Se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e,n,r,i){this.me=e,this.removedTargetIds=n,this.key=r,this.fe=i}}class Ab{constructor(e,n){this.targetId=e,this.ge=n}}class Cb{constructor(e,n,r=At.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class k1{constructor(){this.pe=0,this.ye=L1(),this.we=At.EMPTY_BYTE_STRING,this.be=!1,this.Se=!0}get current(){return this.be}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.we=e)}Fe(){let e=Se(),n=Se(),r=Se();return this.ye.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:he()}}),new bl(this.we,this.be,e,n,r)}Me(){this.Se=!1,this.ye=L1()}xe(e,n){this.Se=!0,this.ye=this.ye.insert(e,n)}Oe(e){this.Se=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,Le(this.pe>=0)}Le(){this.Se=!0,this.be=!0}}class BF{constructor(e){this.ke=e,this.qe=new Map,this.Qe=wr(),this.$e=Cu(),this.Ke=Cu(),this.Ue=new tt(Te)}We(e){for(const n of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(n,e.fe):this.ze(n,e.key,e.fe);for(const n of e.removedTargetIds)this.ze(n,e.key,e.fe)}je(e){this.forEachTarget(e,n=>{const r=this.He(n);switch(e.state){case 0:this.Je(n)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(n);break;case 3:this.Je(n)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Ce(e.resumeToken));break;default:he()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qe.forEach((r,i)=>{this.Je(i)&&n(i)})}Ze(e){const n=e.targetId,r=e.ge.count,i=this.Xe(n);if(i){const s=i.target;if(ym(s))if(r===0){const o=new le(s.path);this.ze(n,o,Vt.newNoDocument(o,fe.min()))}else Le(r===1);else{const o=this.et(n);if(o!==r){const a=this.tt(e),l=a?this.nt(a,e,o):1;if(l!==0){this.Ye(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(n,u)}}}}}tt(e){const n=e.ge.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=ui(r).toUint8Array()}catch(l){if(l instanceof JT)return io("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new d_(o,i,s)}catch(l){return io(l instanceof ha?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ee===0?null:a}nt(e,n,r){return n.ge.count===r-this.st(e,n.targetId)?0:2}st(e,n){const r=this.ke.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.ke.it(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.ze(n,s,null),i++)}),i}ot(e){const n=new Map;this.qe.forEach((s,o)=>{const a=this.Xe(o);if(a){if(s.current&&ym(a.target)){const l=new le(a.target.path);this._t(l).has(o)||this.ut(o,l)||this.ze(o,l,Vt.newNoDocument(l,e))}s.ve&&(n.set(o,s.Fe()),s.Me())}});let r=Se();this.Ke.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xe(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Qe.forEach((s,o)=>o.setReadTime(e));const i=new af(e,n,this.Ue,this.Qe,r);return this.Qe=wr(),this.$e=Cu(),this.Ke=Cu(),this.Ue=new tt(Te),i}Ge(e,n){if(!this.Je(e))return;const r=this.ut(e,n.key)?2:0;this.He(e).xe(n.key,r),this.Qe=this.Qe.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e)),this.Ke=this.Ke.insert(n.key,this.ct(n.key).add(e))}ze(e,n,r){if(!this.Je(e))return;const i=this.He(e);this.ut(e,n)?i.xe(n,1):i.Oe(n),this.Ke=this.Ke.insert(n,this.ct(n).delete(e)),this.Ke=this.Ke.insert(n,this.ct(n).add(e)),r&&(this.Qe=this.Qe.insert(n,r))}removeTarget(e){this.qe.delete(e)}et(e){const n=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let n=this.qe.get(e);return n||(n=new k1,this.qe.set(e,n)),n}ct(e){let n=this.Ke.get(e);return n||(n=new gt(Te),this.Ke=this.Ke.insert(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new gt(Te),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||te("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.qe.get(e);return n&&n.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new k1),this.ke.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ut(e,n){return this.ke.getRemoteKeysForTarget(e).has(n)}}function Cu(){return new tt(le.comparator)}function L1(){return new tt(le.comparator)}const $F={asc:"ASCENDING",desc:"DESCENDING"},UF={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},HF={and:"AND",or:"OR"};class WF{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Em(t,e){return t.useProto3Json||ef(e)?e:{value:e}}function ph(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Pb(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function qF(t,e){return ph(t,e.toTimestamp())}function Qn(t){return Le(!!t),fe.fromTimestamp(function(n){const r=li(n);return new mt(r.seconds,r.nanos)}(t))}function p_(t,e){return Sm(t,e).canonicalString()}function Sm(t,e){const n=function(i){return new He(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function kb(t){const e=He.fromString(t);return Le(Nb(e)),e}function Tm(t,e){return p_(t.databaseId,e.path)}function Md(t,e){const n=kb(e);if(n.get(1)!==t.databaseId.projectId)throw new ie(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ie(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new le(Ob(n))}function Lb(t,e){return p_(t.databaseId,e)}function KF(t){const e=kb(t);return e.length===4?He.emptyPath():Ob(e)}function bm(t){return new He(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ob(t){return Le(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function O1(t,e,n){return{name:Tm(t,e),fields:n.value.mapValue.fields}}function GF(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:he()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,h){return u.useProto3Json?(Le(h===void 0||typeof h=="string"),At.fromBase64String(h||"")):(Le(h===void 0||h instanceof Buffer||h instanceof Uint8Array),At.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?W.UNKNOWN:Rb(u.code);return new ie(h,u.message||"")}(o);n=new Cb(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Md(t,r.document.name),s=Qn(r.document.updateTime),o=r.document.createTime?Qn(r.document.createTime):fe.min(),a=new Zt({mapValue:{fields:r.document.fields}}),l=Vt.newFoundDocument(i,s,o,a),u=r.targetIds||[],h=r.removedTargetIds||[];n=new oc(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Md(t,r.document),s=r.readTime?Qn(r.readTime):fe.min(),o=Vt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new oc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Md(t,r.document),s=r.removedTargetIds||[];n=new oc([],s,i,null)}else{if(!("filter"in e))return he();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new VF(i,s),a=r.targetId;n=new Ab(a,o)}}return n}function QF(t,e){let n;if(e instanceof Tl)n={update:O1(t,e.key,e.value)};else if(e instanceof h_)n={delete:Tm(t,e.key)};else if(e instanceof yi)n={update:O1(t,e.key,e.data),updateMask:i4(e.fieldMask)};else{if(!(e instanceof DF))return he();n={verify:Tm(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof fh)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof al)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ll)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof dh)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw he()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:qF(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:he()}(t,e.precondition)),n}function YF(t,e){return t&&t.length>0?(Le(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Qn(i.updateTime):Qn(s);return o.isEqual(fe.min())&&(o=Qn(s)),new kF(o,i.transformResults||[])}(n,e))):[]}function XF(t,e){return{documents:[Lb(t,e.path)]}}function JF(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Lb(t,i);const s=function(u){if(u.length!==0)return Mb(Fn.create(u,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(h=>function(d){return{field:ps(d.field),direction:t4(d.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Em(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ht:n,parent:i}}function ZF(t){let e=KF(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Le(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(f){const d=Db(f);return d instanceof Fn&&ub(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(d=>function(_){return new hh(ms(_.field),function(E){switch(E){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(f){let d;return d=typeof f=="object"?f.value:f,ef(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(f){const d=!!f.before,m=f.values||[];return new ch(m,d)}(n.startAt));let u=null;return n.endAt&&(u=function(f){const d=!f.before,m=f.values||[];return new ch(m,d)}(n.endAt)),yF(e,i,o,s,a,"F",l,u)}function e4(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return he()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Db(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ms(n.unaryFilter.field);return ft.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ms(n.unaryFilter.field);return ft.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ms(n.unaryFilter.field);return ft.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ms(n.unaryFilter.field);return ft.create(o,"!=",{nullValue:"NULL_VALUE"});default:return he()}}(t):t.fieldFilter!==void 0?function(n){return ft.create(ms(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return he()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Fn.create(n.compositeFilter.filters.map(r=>Db(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return he()}}(n.compositeFilter.op))}(t):he()}function t4(t){return $F[t]}function n4(t){return UF[t]}function r4(t){return HF[t]}function ps(t){return{fieldPath:t.canonicalString()}}function ms(t){return bt.fromServerFormat(t.fieldPath)}function Mb(t){return t instanceof ft?function(n){if(n.op==="=="){if(w1(n.value))return{unaryFilter:{field:ps(n.field),op:"IS_NAN"}};if(v1(n.value))return{unaryFilter:{field:ps(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(w1(n.value))return{unaryFilter:{field:ps(n.field),op:"IS_NOT_NAN"}};if(v1(n.value))return{unaryFilter:{field:ps(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ps(n.field),op:n4(n.op),value:n.value}}}(t):t instanceof Fn?function(n){const r=n.getFilters().map(i=>Mb(i));return r.length===1?r[0]:{compositeFilter:{op:r4(n.op),filters:r}}}(t):he()}function i4(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Nb(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e,n,r,i,s=fe.min(),o=fe.min(),a=At.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new $r(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new $r(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new $r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new $r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s4{constructor(e){this.Tt=e}}function o4(t){const e=ZF({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?wm(e,e.limit,"L"):e}/**
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
 */class a4{constructor(){this.Tn=new l4}addToCollectionParentIndex(e,n){return this.Tn.add(n),H.resolve()}getCollectionParents(e,n){return H.resolve(this.Tn.getEntries(n))}addFieldIndex(e,n){return H.resolve()}deleteFieldIndex(e,n){return H.resolve()}deleteAllFieldIndexes(e){return H.resolve()}createTargetIndexes(e,n){return H.resolve()}getDocumentsMatchingTarget(e,n){return H.resolve(null)}getIndexType(e,n){return H.resolve(0)}getFieldIndexes(e,n){return H.resolve([])}getNextCollectionGroupToUpdate(e){return H.resolve(null)}getMinOffset(e,n){return H.resolve(ai.min())}getMinOffsetFromCollectionGroup(e,n){return H.resolve(ai.min())}updateCollectionGroup(e,n,r){return H.resolve()}updateIndexEntries(e,n){return H.resolve()}}class l4{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new gt(He.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new gt(He.comparator)).toArray()}}/**
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
 */const D1={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Vb=41943040;class Yt{static withCacheSize(e){return new Yt(e,Yt.DEFAULT_COLLECTION_PERCENTILE,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yt.DEFAULT_COLLECTION_PERCENTILE=10,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Yt.DEFAULT=new Yt(Vb,Yt.DEFAULT_COLLECTION_PERCENTILE,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Yt.DISABLED=new Yt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new lo(0)}static Un(){return new lo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M1="LruGarbageCollector",u4=1048576;function N1([t,e],[n,r]){const i=Te(t,n);return i===0?Te(e,r):i}class c4{constructor(e){this.Hn=e,this.buffer=new gt(N1),this.Jn=0}Yn(){return++this.Jn}Zn(e){const n=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();N1(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class h4{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){te(M1,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){bo(n)?te(M1,"Ignoring IndexedDB error during garbage collection: ",n):await To(n)}await this.er(3e5)})}}class f4{constructor(e,n){this.tr=e,this.params=n}calculateTargetCount(e,n){return this.tr.nr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return H.resolve(Zh.ae);const r=new c4(n);return this.tr.forEachTarget(e,i=>r.Zn(i.sequenceNumber)).next(()=>this.tr.rr(e,i=>r.Zn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.tr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.tr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(te("LruGarbageCollector","Garbage collection skipped; disabled"),H.resolve(D1)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(te("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),D1):this.ir(e,n))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,n){let r,i,s,o,a,l,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(te("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(r=f,a=Date.now(),this.removeTargets(e,r,n))).next(f=>(s=f,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(u=Date.now(),fs()<=Ie.DEBUG&&te("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${f} documents in `+(u-l)+`ms
Total Duration: ${u-h}ms`),H.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:f})))}}function d4(t,e){return new f4(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p4{constructor(){this.changes=new ns(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Vt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?H.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class m4{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g4{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ca(r.mutation,i,dn.empty(),mt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Se()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Se()){const i=Vi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ca();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Vi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Se()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=wr();const o=Aa(),a=function(){return Aa()}();return n.forEach((l,u)=>{const h=r.get(u.key);i.has(u.key)&&(h===void 0||h.mutation instanceof yi)?s=s.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),Ca(h.mutation,u,h.mutation.getFieldMask(),mt.now())):o.set(u.key,dn.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var f;return a.set(u,new m4(h,(f=o.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Aa();let i=new tt((o,a)=>o-a),s=Se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let h=r.get(l)||dn.empty();h=a.applyToLocalView(u,h),r.set(l,h);const f=(i.get(a.batchId)||Se()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,h=l.value,f=vb();h.forEach(d=>{if(!s.has(d)){const m=xb(n.get(d),r.get(d));m!==null&&f.set(d,m),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return H.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return le.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):pb(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):H.resolve(Vi());let a=rl,l=s;return o.next(u=>H.forEach(u,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(h)?H.resolve():this.remoteDocumentCache.getEntry(e,h).next(d=>{l=l.insert(h,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,Se())).next(h=>({batchId:a,changes:yb(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new le(n)).next(r=>{let i=ca();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=ca();return this.indexManager.getCollectionParents(e,s).next(a=>H.forEach(a,l=>{const u=function(f,d){return new Sl(d,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(h=>{h.forEach((f,d)=>{o=o.insert(f,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,Vt.newInvalidDocument(h)))});let a=ca();return o.forEach((l,u)=>{const h=s.get(l);h!==void 0&&Ca(h.mutation,u,dn.empty(),mt.now()),rf(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _4{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,n){return H.resolve(this.dr.get(n))}saveBundleMetadata(e,n){return this.dr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Qn(i.createTime)}}(n)),H.resolve()}getNamedQuery(e,n){return H.resolve(this.Ar.get(n))}saveNamedQuery(e,n){return this.Ar.set(n.name,function(i){return{name:i.name,query:o4(i.bundledQuery),readTime:Qn(i.readTime)}}(n)),H.resolve()}}/**
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
 */class y4{constructor(){this.overlays=new tt(le.comparator),this.Rr=new Map}getOverlay(e,n){return H.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Vi();return H.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.Et(e,n,s)}),H.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Rr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Rr.delete(r)),H.resolve()}getOverlaysForCollection(e,n,r){const i=Vi(),s=n.length+1,o=new le(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return H.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new tt((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=s.get(u.largestBatchId);h===null&&(h=Vi(),s=s.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=Vi(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=i)););return H.resolve(a)}Et(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Rr.get(i.largestBatchId).delete(r.key);this.Rr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new NF(n,r));let s=this.Rr.get(n);s===void 0&&(s=Se(),this.Rr.set(n,s)),this.Rr.set(n,s.add(r.key))}}/**
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
 */class v4{constructor(){this.sessionToken=At.EMPTY_BYTE_STRING}getSessionToken(e){return H.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,H.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(){this.Vr=new gt(_t.mr),this.gr=new gt(_t.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,n){const r=new _t(e,n);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.wr(new _t(e,n))}br(e,n){e.forEach(r=>this.removeReference(r,n))}Sr(e){const n=new le(new He([])),r=new _t(n,e),i=new _t(n,e+1),s=[];return this.gr.forEachInRange([r,i],o=>{this.wr(o),s.push(o.key)}),s}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const n=new le(new He([])),r=new _t(n,e),i=new _t(n,e+1);let s=Se();return this.gr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new _t(e,0),r=this.Vr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class _t{constructor(e,n){this.key=e,this.Cr=n}static mr(e,n){return le.comparator(e.key,n.key)||Te(e.Cr,n.Cr)}static pr(e,n){return Te(e.Cr,n.Cr)||le.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w4{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Fr=1,this.Mr=new gt(_t.mr)}checkEmpty(e){return H.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new MF(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Mr=this.Mr.add(new _t(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return H.resolve(o)}lookupMutationBatch(e,n){return H.resolve(this.Or(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Nr(r),s=i<0?0:i;return H.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return H.resolve(this.mutationQueue.length===0?s_:this.Fr-1)}getAllMutationBatches(e){return H.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new _t(n,0),i=new _t(n,Number.POSITIVE_INFINITY),s=[];return this.Mr.forEachInRange([r,i],o=>{const a=this.Or(o.Cr);s.push(a)}),H.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new gt(Te);return n.forEach(i=>{const s=new _t(i,0),o=new _t(i,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([s,o],a=>{r=r.add(a.Cr)})}),H.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;le.isDocumentKey(s)||(s=s.child(""));const o=new _t(new le(s),0);let a=new gt(Te);return this.Mr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.Cr)),!0)},o),H.resolve(this.Br(a))}Br(e){const n=[];return e.forEach(r=>{const i=this.Or(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Le(this.Lr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return H.forEach(n.mutations,i=>{const s=new _t(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,n){const r=new _t(n,0),i=this.Mr.firstAfterOrEqual(r);return H.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,H.resolve()}Lr(e,n){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const n=this.Nr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E4{constructor(e){this.kr=e,this.docs=function(){return new tt(le.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.kr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return H.resolve(r?r.document.mutableCopy():Vt.newInvalidDocument(n))}getEntries(e,n){let r=wr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Vt.newInvalidDocument(i))}),H.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=wr();const o=n.path,a=new le(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||XV(YV(h),r)<=0||(i.has(h.key)||rf(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return H.resolve(s)}getAllFromCollectionGroup(e,n,r,i){he()}qr(e,n){return H.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new S4(this)}getSize(e){return H.resolve(this.size)}}class S4 extends p4{constructor(e){super(),this.Ir=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Ir.addEntry(e,i)):this.Ir.removeEntry(r)}),H.waitFor(n)}getFromCache(e,n){return this.Ir.getEntry(e,n)}getAllFromCache(e,n){return this.Ir.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T4{constructor(e){this.persistence=e,this.Qr=new ns(n=>l_(n),u_),this.lastRemoteSnapshotVersion=fe.min(),this.highestTargetId=0,this.$r=0,this.Kr=new m_,this.targetCount=0,this.Ur=lo.Kn()}forEachTarget(e,n){return this.Qr.forEach((r,i)=>n(i)),H.resolve()}getLastRemoteSnapshotVersion(e){return H.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return H.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),H.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.$r&&(this.$r=n),H.resolve()}zn(e){this.Qr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ur=new lo(n),this.highestTargetId=n),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,n){return this.zn(n),this.targetCount+=1,H.resolve()}updateTargetData(e,n){return this.zn(n),H.resolve()}removeTargetData(e,n){return this.Qr.delete(n.target),this.Kr.Sr(n.targetId),this.targetCount-=1,H.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Qr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Qr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),H.waitFor(s).next(()=>i)}getTargetCount(e){return H.resolve(this.targetCount)}getTargetData(e,n){const r=this.Qr.get(n)||null;return H.resolve(r)}addMatchingKeys(e,n,r){return this.Kr.yr(n,r),H.resolve()}removeMatchingKeys(e,n,r){this.Kr.br(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),H.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Kr.Sr(n),H.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Kr.vr(n);return H.resolve(r)}containsKey(e,n){return H.resolve(this.Kr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(e,n){this.Wr={},this.overlays={},this.Gr=new Zh(0),this.zr=!1,this.zr=!0,this.jr=new v4,this.referenceDelegate=e(this),this.Hr=new T4(this),this.indexManager=new a4,this.remoteDocumentCache=function(i){return new E4(i)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new s4(n),this.Yr=new _4(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new y4,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Wr[e.toKey()];return r||(r=new w4(n,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,n,r){te("MemoryPersistence","Starting transaction:",e);const i=new b4(this.Gr.next());return this.referenceDelegate.Zr(),r(i).next(s=>this.referenceDelegate.Xr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}ei(e,n){return H.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,n)))}}class b4 extends ZV{constructor(e){super(),this.currentSequenceNumber=e}}class g_{constructor(e){this.persistence=e,this.ti=new m_,this.ni=null}static ri(e){return new g_(e)}get ii(){if(this.ni)return this.ni;throw he()}addReference(e,n,r){return this.ti.addReference(r,n),this.ii.delete(r.toString()),H.resolve()}removeReference(e,n,r){return this.ti.removeReference(r,n),this.ii.add(r.toString()),H.resolve()}markPotentiallyOrphaned(e,n){return this.ii.add(n.toString()),H.resolve()}removeTarget(e,n){this.ti.Sr(n.targetId).forEach(i=>this.ii.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.ii.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Zr(){this.ni=new Set}Xr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return H.forEach(this.ii,r=>{const i=le.fromPath(r);return this.si(e,i).next(s=>{s||n.removeEntry(i,fe.min())})}).next(()=>(this.ni=null,n.apply(e)))}updateLimboDocument(e,n){return this.si(e,n).next(r=>{r?this.ii.delete(n.toString()):this.ii.add(n.toString())})}Jr(e){return 0}si(e,n){return H.or([()=>H.resolve(this.ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.ei(e,n)])}}class mh{constructor(e,n){this.persistence=e,this.oi=new ns(r=>nF(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=d4(this,n)}static ri(e,n){return new mh(e,n)}Zr(){}Xr(e){return H.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}nr(e){const n=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}sr(e){let n=0;return this.rr(e,r=>{n++}).next(()=>n)}rr(e,n){return H.forEach(this.oi,(r,i)=>this.ar(e,r,i).next(s=>s?H.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.qr(e,o=>this.ar(e,o,n).next(a=>{a||(r++,s.removeEntry(o,fe.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.oi.set(n,e.currentSequenceNumber),H.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),H.resolve()}removeReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),H.resolve()}updateLimboDocument(e,n){return this.oi.set(n,e.currentSequenceNumber),H.resolve()}Jr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=rc(e.data.value)),n}ar(e,n,r){return H.or([()=>this.persistence.ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.oi.get(n);return H.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Hi=r,this.Ji=i}static Yi(e,n){let r=Se(),i=Se();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new __(e,n.fromCache,r,i)}}/**
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
 */class x4{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class I4{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return TN()?8:eF(EN())>0?6:4}()}initialize(e,n){this.ns=e,this.indexManager=n,this.Zi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.rs(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ss(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new x4;return this._s(e,n,o).next(a=>{if(s.result=a,this.Xi)return this.us(e,n,o,a.size)})}).next(()=>s.result)}us(e,n,r,i){return r.documentReadCount<this.es?(fs()<=Ie.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",ds(n),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),H.resolve()):(fs()<=Ie.DEBUG&&te("QueryEngine","Query:",ds(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ts*i?(fs()<=Ie.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",ds(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Gn(n))):H.resolve())}rs(e,n){if(b1(n))return H.resolve(null);let r=Gn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=wm(n,null,"F"),r=Gn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Se(...s);return this.ns.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.cs(n,a);return this.ls(n,u,o,l.readTime)?this.rs(e,wm(n,null,"F")):this.hs(e,u,n,l)}))})))}ss(e,n,r,i){return b1(n)||i.isEqual(fe.min())?H.resolve(null):this.ns.getDocuments(e,r).next(s=>{const o=this.cs(n,s);return this.ls(n,o,r,i)?H.resolve(null):(fs()<=Ie.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ds(n)),this.hs(e,o,n,QV(i,rl)).next(a=>a))})}cs(e,n){let r=new gt(gb(e));return n.forEach((i,s)=>{rf(e,s)&&(r=r.add(s))}),r}ls(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}_s(e,n,r){return fs()<=Ie.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",ds(n)),this.ns.getDocumentsMatchingQuery(e,n,ai.min(),r)}hs(e,n,r,i){return this.ns.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y_="LocalStore",R4=3e8;class A4{constructor(e,n,r,i){this.persistence=e,this.Ps=n,this.serializer=i,this.Ts=new tt(Te),this.Is=new ns(s=>l_(s),u_),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new g4(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ts))}}function C4(t,e,n,r){return new A4(t,e,n,r)}async function zb(t,e){const n=me(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.As(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=Se();for(const u of i){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of s){a.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Rs:u,removedBatchIds:o,addedBatchIds:a}))})})}function P4(t,e){const n=me(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ds.newChangeBuffer({trackRemovals:!0});return function(a,l,u,h){const f=u.batch,d=f.keys();let m=H.resolve();return d.forEach(_=>{m=m.next(()=>h.getEntry(l,_)).next(y=>{const E=u.docVersions.get(_);Le(E!==null),y.version.compareTo(E)<0&&(f.applyToRemoteDocument(y,u),y.isValidDocument()&&(y.setReadTime(u.commitVersion),h.addEntry(y)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=Se();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function jb(t){const e=me(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Hr.getLastRemoteSnapshotVersion(n))}function k4(t,e){const n=me(t),r=e.snapshotVersion;let i=n.Ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ds.newChangeBuffer({trackRemovals:!0});i=n.Ts;const a=[];e.targetChanges.forEach((h,f)=>{const d=i.get(f);if(!d)return;a.push(n.Hr.removeMatchingKeys(s,h.removedDocuments,f).next(()=>n.Hr.addMatchingKeys(s,h.addedDocuments,f)));let m=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?m=m.withResumeToken(At.EMPTY_BYTE_STRING,fe.min()).withLastLimboFreeSnapshotVersion(fe.min()):h.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(h.resumeToken,r)),i=i.insert(f,m),function(y,E,w){return y.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=R4?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(d,m,h)&&a.push(n.Hr.updateTargetData(s,m))});let l=wr(),u=Se();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(L4(s,o,e.documentUpdates).next(h=>{l=h.Vs,u=h.fs})),!r.isEqual(fe.min())){const h=n.Hr.getLastRemoteSnapshotVersion(s).next(f=>n.Hr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return H.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ts=i,s))}function L4(t,e,n){let r=Se(),i=Se();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=wr();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(fe.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):te(y_,"Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Vs:o,fs:i}})}function O4(t,e){const n=me(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=s_),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function D4(t,e){const n=me(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Hr.getTargetData(r,e).next(s=>s?(i=s,H.resolve(i)):n.Hr.allocateTargetId(r).next(o=>(i=new $r(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Hr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ts=n.Ts.insert(r.targetId,r),n.Is.set(e,r.targetId)),r})}async function xm(t,e,n){const r=me(t),i=r.Ts.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!bo(o))throw o;te(y_,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ts=r.Ts.remove(e),r.Is.delete(i.target)}function V1(t,e,n){const r=me(t);let i=fe.min(),s=Se();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,h){const f=me(l),d=f.Is.get(h);return d!==void 0?H.resolve(f.Ts.get(d)):f.Hr.getTargetData(u,h)}(r,o,Gn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Ps.getDocumentsMatchingQuery(o,e,n?i:fe.min(),n?s:Se())).next(a=>(M4(r,wF(e),a),{documents:a,gs:s})))}function M4(t,e,n){let r=t.Es.get(e)||fe.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Es.set(e,r)}class F1{constructor(){this.activeTargetIds=IF()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ss(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class N4{constructor(){this.ho=new F1,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,n,r){this.Po[e]=n}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new F1,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class V4{To(e){}shutdown(){}}/**
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
 */const z1="ConnectivityMonitor";class j1{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){te(z1,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){te(z1,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Pu=null;function Im(){return Pu===null?Pu=function(){return 268435456+Math.round(2147483648*Math.random())}():Pu++,"0x"+Pu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nd="RestConnection",F4={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class z4{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.po=n+"://"+e.host,this.yo=`projects/${r}/databases/${i}`,this.wo=this.databaseId.database===lh?`project_id=${r}`:`project_id=${r}&database_id=${i}`}bo(e,n,r,i,s){const o=Im(),a=this.So(e,n.toUriEncodedString());te(Nd,`Sending RPC '${e}' ${o}:`,a,r);const l={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(l,i,s),this.vo(e,a,l,r).then(u=>(te(Nd,`Received RPC '${e}' ${o}: `,u),u),u=>{throw io(Nd,`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}Co(e,n,r,i,s,o){return this.bo(e,n,r,i,s)}Do(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+So}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}So(e,n){const r=F4[e];return`${this.po}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j4{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt="WebChannelConnection";class B4 extends z4{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,i){const s=Im();return new Promise((o,a)=>{const l=new UT;l.setWithCredentials(!0),l.listenOnce(HT.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case nc.NO_ERROR:const h=l.getResponseJson();te(Dt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case nc.TIMEOUT:te(Dt,`RPC '${e}' ${s} timed out`),a(new ie(W.DEADLINE_EXCEEDED,"Request time out"));break;case nc.HTTP_ERROR:const f=l.getStatus();if(te(Dt,`RPC '${e}' ${s} failed with status:`,f,"response text:",l.getResponseText()),f>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const m=d==null?void 0:d.error;if(m&&m.status&&m.message){const _=function(E){const w=E.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(w)>=0?w:W.UNKNOWN}(m.status);a(new ie(_,m.message))}else a(new ie(W.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new ie(W.UNAVAILABLE,"Connection failed."));break;default:he()}}finally{te(Dt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);te(Dt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Wo(e,n,r){const i=Im(),s=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=KT(),a=qT(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=s.join("");te(Dt,`Creating RPC '${e}' stream ${i}: ${h}`,l);const f=o.createWebChannel(h,l);let d=!1,m=!1;const _=new j4({Fo:E=>{m?te(Dt,`Not sending because RPC '${e}' stream ${i} is closed:`,E):(d||(te(Dt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),d=!0),te(Dt,`RPC '${e}' stream ${i} sending:`,E),f.send(E))},Mo:()=>f.close()}),y=(E,w,v)=>{E.listen(w,b=>{try{v(b)}catch(L){setTimeout(()=>{throw L},0)}})};return y(f,ua.EventType.OPEN,()=>{m||(te(Dt,`RPC '${e}' stream ${i} transport opened.`),_.Qo())}),y(f,ua.EventType.CLOSE,()=>{m||(m=!0,te(Dt,`RPC '${e}' stream ${i} transport closed`),_.Ko())}),y(f,ua.EventType.ERROR,E=>{m||(m=!0,io(Dt,`RPC '${e}' stream ${i} transport errored:`,E),_.Ko(new ie(W.UNAVAILABLE,"The operation could not be completed")))}),y(f,ua.EventType.MESSAGE,E=>{var w;if(!m){const v=E.data[0];Le(!!v);const b=v,L=(b==null?void 0:b.error)||((w=b[0])===null||w===void 0?void 0:w.error);if(L){te(Dt,`RPC '${e}' stream ${i} received error:`,L);const O=L.status;let D=function(T){const I=ct[T];if(I!==void 0)return Rb(I)}(O),x=L.message;D===void 0&&(D=W.INTERNAL,x="Unknown error status: "+O+" with message "+L.message),m=!0,_.Ko(new ie(D,x)),f.close()}else te(Dt,`RPC '${e}' stream ${i} received:`,v),_.Uo(v)}}),y(a,WT.STAT_EVENT,E=>{E.stat===pm.PROXY?te(Dt,`RPC '${e}' stream ${i} detected buffering proxy`):E.stat===pm.NOPROXY&&te(Dt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{_.$o()},0),_}}function Vd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lf(t){return new WF(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ti=e,this.timerId=n,this.Go=r,this.zo=i,this.jo=s,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const n=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),i=Math.max(0,n-r);i>0&&te("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,i,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B1="PersistentStream";class $b{constructor(e,n,r,i,s,o,a,l){this.Ti=e,this.n_=r,this.r_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new Bb(e,n)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,n){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():n&&n.code===W.RESOURCE_EXHAUSTED?(vr(n.toString()),vr("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):n&&n.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(n)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),n=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.i_===n&&this.V_(r,i)},r=>{e(()=>{const i=new ie(W.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(i)})})}V_(e,n){const r=this.R_(this.i_);this.stream=this.f_(e,n),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(i=>{r(()=>this.m_(i))}),this.stream.onMessage(i=>{r(()=>++this.__==1?this.g_(i):this.onNext(i))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return te(B1,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return n=>{this.Ti.enqueueAndForget(()=>this.i_===e?n():(te(B1,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class $4 extends $b{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}f_(e,n){return this.connection.Wo("Listen",e,n)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const n=GF(this.serializer,e),r=function(s){if(!("targetChange"in s))return fe.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?fe.min():o.readTime?Qn(o.readTime):fe.min()}(e);return this.listener.p_(n,r)}y_(e){const n={};n.database=bm(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=ym(l)?{documents:XF(s,l)}:{query:JF(s,l).ht},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Pb(s,o.resumeToken);const u=Em(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(fe.min())>0){a.readTime=ph(s,o.snapshotVersion.toTimestamp());const u=Em(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=e4(this.serializer,e);r&&(n.labels=r),this.I_(n)}w_(e){const n={};n.database=bm(this.serializer),n.removeTarget=e,this.I_(n)}}class U4 extends $b{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get b_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.b_&&this.S_([])}f_(e,n){return this.connection.Wo("Write",e,n)}g_(e){return Le(!!e.streamToken),this.lastStreamToken=e.streamToken,Le(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){Le(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const n=YF(e.writeResults,e.commitTime),r=Qn(e.commitTime);return this.listener.v_(r,n)}C_(){const e={};e.database=bm(this.serializer),this.I_(e)}S_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>QF(this.serializer,r))};this.I_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H4{}class W4 extends H4{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.F_=!1}M_(){if(this.F_)throw new ie(W.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,n,r,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.bo(e,Sm(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new ie(W.UNKNOWN,s.toString())})}Co(e,n,r,i,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Co(e,Sm(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ie(W.UNKNOWN,o.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class q4{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(vr(n),this.N_=!1):te("OnlineStateTracker",n)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi="RemoteStore";class K4{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=s,this.z_.To(o=>{r.enqueueAndForget(async()=>{rs(this)&&(te(Xi,"Restarting streams for network reachability change."),await async function(l){const u=me(l);u.W_.add(4),await xl(u),u.j_.set("Unknown"),u.W_.delete(4),await uf(u)}(this))})}),this.j_=new q4(r,i)}}async function uf(t){if(rs(t))for(const e of t.G_)await e(!0)}async function xl(t){for(const e of t.G_)await e(!1)}function Ub(t,e){const n=me(t);n.U_.has(e.targetId)||(n.U_.set(e.targetId,e),S_(n)?E_(n):xo(n).c_()&&w_(n,e))}function v_(t,e){const n=me(t),r=xo(n);n.U_.delete(e),r.c_()&&Hb(n,e),n.U_.size===0&&(r.c_()?r.P_():rs(n)&&n.j_.set("Unknown"))}function w_(t,e){if(t.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(fe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}xo(t).y_(e)}function Hb(t,e){t.H_.Ne(e),xo(t).w_(e)}function E_(t){t.H_=new BF({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.U_.get(e)||null,it:()=>t.datastore.serializer.databaseId}),xo(t).start(),t.j_.B_()}function S_(t){return rs(t)&&!xo(t).u_()&&t.U_.size>0}function rs(t){return me(t).W_.size===0}function Wb(t){t.H_=void 0}async function G4(t){t.j_.set("Online")}async function Q4(t){t.U_.forEach((e,n)=>{w_(t,e)})}async function Y4(t,e){Wb(t),S_(t)?(t.j_.q_(e),E_(t)):t.j_.set("Unknown")}async function X4(t,e,n){if(t.j_.set("Online"),e instanceof Cb&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.U_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.U_.delete(a),i.H_.removeTarget(a))}(t,e)}catch(r){te(Xi,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await gh(t,r)}else if(e instanceof oc?t.H_.We(e):e instanceof Ab?t.H_.Ze(e):t.H_.je(e),!n.isEqual(fe.min()))try{const r=await jb(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.H_.ot(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const h=s.U_.get(u);h&&s.U_.set(u,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const h=s.U_.get(l);if(!h)return;s.U_.set(l,h.withResumeToken(At.EMPTY_BYTE_STRING,h.snapshotVersion)),Hb(s,l);const f=new $r(h.target,l,u,h.sequenceNumber);w_(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){te(Xi,"Failed to raise snapshot:",r),await gh(t,r)}}async function gh(t,e,n){if(!bo(e))throw e;t.W_.add(1),await xl(t),t.j_.set("Offline"),n||(n=()=>jb(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{te(Xi,"Retrying IndexedDB access"),await n(),t.W_.delete(1),await uf(t)})}function qb(t,e){return e().catch(n=>gh(t,n,e))}async function cf(t){const e=me(t),n=hi(e);let r=e.K_.length>0?e.K_[e.K_.length-1].batchId:s_;for(;J4(e);)try{const i=await O4(e.localStore,r);if(i===null){e.K_.length===0&&n.P_();break}r=i.batchId,Z4(e,i)}catch(i){await gh(e,i)}Kb(e)&&Gb(e)}function J4(t){return rs(t)&&t.K_.length<10}function Z4(t,e){t.K_.push(e);const n=hi(t);n.c_()&&n.b_&&n.S_(e.mutations)}function Kb(t){return rs(t)&&!hi(t).u_()&&t.K_.length>0}function Gb(t){hi(t).start()}async function e3(t){hi(t).C_()}async function t3(t){const e=hi(t);for(const n of t.K_)e.S_(n.mutations)}async function n3(t,e,n){const r=t.K_.shift(),i=f_.from(r,e,n);await qb(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await cf(t)}async function r3(t,e){e&&hi(t).b_&&await async function(r,i){if(function(o){return FF(o)&&o!==W.ABORTED}(i.code)){const s=r.K_.shift();hi(r).h_(),await qb(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await cf(r)}}(t,e),Kb(t)&&Gb(t)}async function $1(t,e){const n=me(t);n.asyncQueue.verifyOperationInProgress(),te(Xi,"RemoteStore received new credentials");const r=rs(n);n.W_.add(3),await xl(n),r&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.W_.delete(3),await uf(n)}async function i3(t,e){const n=me(t);e?(n.W_.delete(2),await uf(n)):e||(n.W_.add(2),await xl(n),n.j_.set("Unknown"))}function xo(t){return t.J_||(t.J_=function(n,r,i){const s=me(n);return s.M_(),new $4(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{xo:G4.bind(null,t),No:Q4.bind(null,t),Lo:Y4.bind(null,t),p_:X4.bind(null,t)}),t.G_.push(async e=>{e?(t.J_.h_(),S_(t)?E_(t):t.j_.set("Unknown")):(await t.J_.stop(),Wb(t))})),t.J_}function hi(t){return t.Y_||(t.Y_=function(n,r,i){const s=me(n);return s.M_(),new U4(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{xo:()=>Promise.resolve(),No:e3.bind(null,t),Lo:r3.bind(null,t),D_:t3.bind(null,t),v_:n3.bind(null,t)}),t.G_.push(async e=>{e?(t.Y_.h_(),await cf(t)):(await t.Y_.stop(),t.K_.length>0&&(te(Xi,`Stopping write stream with ${t.K_.length} pending writes`),t.K_=[]))})),t.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ti,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new T_(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ie(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function b_(t,e){if(vr("AsyncQueue",`${e}: ${t}`),bo(t))return new ie(W.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{static emptySet(e){return new js(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||le.comparator(n.key,r.key):(n,r)=>le.comparator(n.key,r.key),this.keyedMap=ca(),this.sortedSet=new tt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof js)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new js;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U1{constructor(){this.Z_=new tt(le.comparator)}track(e){const n=e.doc.key,r=this.Z_.get(n);r?e.type!==0&&r.type===3?this.Z_=this.Z_.insert(n,e):e.type===3&&r.type!==1?this.Z_=this.Z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Z_=this.Z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Z_=this.Z_.remove(n):e.type===1&&r.type===2?this.Z_=this.Z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):he():this.Z_=this.Z_.insert(n,e)}X_(){const e=[];return this.Z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class uo{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new uo(e,n,js.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&nf(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s3{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class o3{constructor(){this.queries=H1(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(n,r){const i=me(n),s=i.queries;i.queries=H1(),s.forEach((o,a)=>{for(const l of a.ta)l.onError(r)})})(this,new ie(W.ABORTED,"Firestore shutting down"))}}function H1(){return new ns(t=>mb(t),nf)}async function a3(t,e){const n=me(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.na()&&e.ra()&&(r=2):(s=new s3,r=e.ra()?0:1);try{switch(r){case 0:s.ea=await n.onListen(i,!0);break;case 1:s.ea=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=b_(o,`Initialization of query '${ds(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.ta.push(e),e.sa(n.onlineState),s.ea&&e.oa(s.ea)&&x_(n)}async function l3(t,e){const n=me(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.ta.indexOf(e);o>=0&&(s.ta.splice(o,1),s.ta.length===0?i=e.ra()?0:1:!s.na()&&e.ra()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function u3(t,e){const n=me(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.ta)a.oa(i)&&(r=!0);o.ea=i}}r&&x_(n)}function c3(t,e,n){const r=me(t),i=r.queries.get(e);if(i)for(const s of i.ta)s.onError(n);r.queries.delete(e)}function x_(t){t.ia.forEach(e=>{e.next()})}var Rm,W1;(W1=Rm||(Rm={}))._a="default",W1.Cache="cache";class h3{constructor(e,n,r){this.query=e,this.aa=n,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new uo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ua?this.la(e)&&(this.aa.next(e),n=!0):this.ha(e,this.onlineState)&&(this.Pa(e),n=!0),this.ca=e,n}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let n=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),n=!0),n}ha(e,n){if(!e.fromCache||!this.ra())return!0;const r=n!=="Offline";return(!this.options.Ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}la(e){if(e.docChanges.length>0)return!0;const n=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Pa(e){e=uo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==Rm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(e){this.key=e}}class Yb{constructor(e){this.key=e}}class f3{constructor(e,n){this.query=e,this.fa=n,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=Se(),this.mutatedKeys=Se(),this.ya=gb(e),this.wa=new js(this.ya)}get ba(){return this.fa}Sa(e,n){const r=n?n.Da:new U1,i=n?n.wa:this.wa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const d=i.get(h),m=rf(this.query,f)?f:null,_=!!d&&this.mutatedKeys.has(d.key),y=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let E=!1;d&&m?d.data.isEqual(m.data)?_!==y&&(r.track({type:3,doc:m}),E=!0):this.va(d,m)||(r.track({type:2,doc:m}),E=!0,(l&&this.ya(m,l)>0||u&&this.ya(m,u)<0)&&(a=!0)):!d&&m?(r.track({type:0,doc:m}),E=!0):d&&!m&&(r.track({type:1,doc:d}),E=!0,(l||u)&&(a=!0)),E&&(m?(o=o.add(m),s=y?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{wa:o,Da:r,ls:a,mutatedKeys:s}}va(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const o=e.Da.X_();o.sort((h,f)=>function(m,_){const y=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return he()}};return y(m)-y(_)}(h.type,f.type)||this.ya(h.doc,f.doc)),this.Ca(r),i=i!=null&&i;const a=n&&!i?this.Fa():[],l=this.pa.size===0&&this.current&&!i?1:0,u=l!==this.ga;return this.ga=l,o.length!==0||u?{snapshot:new uo(this.query,e.wa,s,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:a}:{Ma:a}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new U1,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(n=>this.fa=this.fa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.fa=this.fa.delete(n)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=Se(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const n=[];return e.forEach(r=>{this.pa.has(r)||n.push(new Yb(r))}),this.pa.forEach(r=>{e.has(r)||n.push(new Qb(r))}),n}Oa(e){this.fa=e.gs,this.pa=Se();const n=this.Sa(e.documents);return this.applyChanges(n,!0)}Na(){return uo.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const I_="SyncEngine";class d3{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class p3{constructor(e){this.key=e,this.Ba=!1}}class m3{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.La={},this.ka=new ns(a=>mb(a),nf),this.qa=new Map,this.Qa=new Set,this.$a=new tt(le.comparator),this.Ka=new Map,this.Ua=new m_,this.Wa={},this.Ga=new Map,this.za=lo.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function g3(t,e,n=!0){const r=nx(t);let i;const s=r.ka.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Na()):i=await Xb(r,e,n,!0),i}async function _3(t,e){const n=nx(t);await Xb(n,e,!0,!1)}async function Xb(t,e,n,r){const i=await D4(t.localStore,Gn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await y3(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&Ub(t.remoteStore,i),a}async function y3(t,e,n,r,i){t.Ha=(f,d,m)=>async function(y,E,w,v){let b=E.view.Sa(w);b.ls&&(b=await V1(y.localStore,E.query,!1).then(({documents:x})=>E.view.Sa(x,b)));const L=v&&v.targetChanges.get(E.targetId),O=v&&v.targetMismatches.get(E.targetId)!=null,D=E.view.applyChanges(b,y.isPrimaryClient,L,O);return K1(y,E.targetId,D.Ma),D.snapshot}(t,f,d,m);const s=await V1(t.localStore,e,!0),o=new f3(e,s.gs),a=o.Sa(s.documents),l=bl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);K1(t,n,u.Ma);const h=new d3(e,n,o);return t.ka.set(e,h),t.qa.has(n)?t.qa.get(n).push(e):t.qa.set(n,[e]),u.snapshot}async function v3(t,e,n){const r=me(t),i=r.ka.get(e),s=r.qa.get(i.targetId);if(s.length>1)return r.qa.set(i.targetId,s.filter(o=>!nf(o,e))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await xm(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&v_(r.remoteStore,i.targetId),Am(r,i.targetId)}).catch(To)):(Am(r,i.targetId),await xm(r.localStore,i.targetId,!0))}async function w3(t,e){const n=me(t),r=n.ka.get(e),i=n.qa.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),v_(n.remoteStore,r.targetId))}async function E3(t,e,n){const r=A3(t);try{const i=await function(o,a){const l=me(o),u=mt.now(),h=a.reduce((m,_)=>m.add(_.key),Se());let f,d;return l.persistence.runTransaction("Locally write mutations","readwrite",m=>{let _=wr(),y=Se();return l.ds.getEntries(m,h).next(E=>{_=E,_.forEach((w,v)=>{v.isValidDocument()||(y=y.add(w))})}).next(()=>l.localDocuments.getOverlayedDocuments(m,_)).next(E=>{f=E;const w=[];for(const v of a){const b=OF(v,f.get(v.key).overlayedDocument);b!=null&&w.push(new yi(v.key,b,ob(b.value.mapValue),Nn.exists(!0)))}return l.mutationQueue.addMutationBatch(m,u,w,a)}).next(E=>{d=E;const w=E.applyToLocalDocumentSet(f,y);return l.documentOverlayCache.saveOverlays(m,E.batchId,w)})}).then(()=>({batchId:d.batchId,changes:yb(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Wa[o.currentUser.toKey()];u||(u=new tt(Te)),u=u.insert(a,l),o.Wa[o.currentUser.toKey()]=u}(r,i.batchId,n),await Il(r,i.changes),await cf(r.remoteStore)}catch(i){const s=b_(i,"Failed to persist write");n.reject(s)}}async function Jb(t,e){const n=me(t);try{const r=await k4(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Ka.get(s);o&&(Le(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ba=!0:i.modifiedDocuments.size>0?Le(o.Ba):i.removedDocuments.size>0&&(Le(o.Ba),o.Ba=!1))}),await Il(n,r,e)}catch(r){await To(r)}}function q1(t,e,n){const r=me(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ka.forEach((s,o)=>{const a=o.view.sa(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=me(o);l.onlineState=a;let u=!1;l.queries.forEach((h,f)=>{for(const d of f.ta)d.sa(a)&&(u=!0)}),u&&x_(l)}(r.eventManager,e),i.length&&r.La.p_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function S3(t,e,n){const r=me(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Ka.get(e),s=i&&i.key;if(s){let o=new tt(le.comparator);o=o.insert(s,Vt.newNoDocument(s,fe.min()));const a=Se().add(s),l=new af(fe.min(),new Map,new tt(Te),o,a);await Jb(r,l),r.$a=r.$a.remove(s),r.Ka.delete(e),R_(r)}else await xm(r.localStore,e,!1).then(()=>Am(r,e,n)).catch(To)}async function T3(t,e){const n=me(t),r=e.batch.batchId;try{const i=await P4(n.localStore,e);ex(n,r,null),Zb(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Il(n,i)}catch(i){await To(i)}}async function b3(t,e,n){const r=me(t);try{const i=await function(o,a){const l=me(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return l.mutationQueue.lookupMutationBatch(u,a).next(f=>(Le(f!==null),h=f.keys(),l.mutationQueue.removeMutationBatch(u,f))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>l.localDocuments.getDocuments(u,h))})}(r.localStore,e);ex(r,e,n),Zb(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Il(r,i)}catch(i){await To(i)}}function Zb(t,e){(t.Ga.get(e)||[]).forEach(n=>{n.resolve()}),t.Ga.delete(e)}function ex(t,e,n){const r=me(t);let i=r.Wa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Wa[r.currentUser.toKey()]=i}}function Am(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.qa.get(e))t.ka.delete(r),n&&t.La.Ja(r,n);t.qa.delete(e),t.isPrimaryClient&&t.Ua.Sr(e).forEach(r=>{t.Ua.containsKey(r)||tx(t,r)})}function tx(t,e){t.Qa.delete(e.path.canonicalString());const n=t.$a.get(e);n!==null&&(v_(t.remoteStore,n),t.$a=t.$a.remove(e),t.Ka.delete(n),R_(t))}function K1(t,e,n){for(const r of n)r instanceof Qb?(t.Ua.addReference(r.key,e),x3(t,r)):r instanceof Yb?(te(I_,"Document no longer in limbo: "+r.key),t.Ua.removeReference(r.key,e),t.Ua.containsKey(r.key)||tx(t,r.key)):he()}function x3(t,e){const n=e.key,r=n.path.canonicalString();t.$a.get(n)||t.Qa.has(r)||(te(I_,"New document in limbo: "+n),t.Qa.add(r),R_(t))}function R_(t){for(;t.Qa.size>0&&t.$a.size<t.maxConcurrentLimboResolutions;){const e=t.Qa.values().next().value;t.Qa.delete(e);const n=new le(He.fromString(e)),r=t.za.next();t.Ka.set(r,new p3(n)),t.$a=t.$a.insert(n,r),Ub(t.remoteStore,new $r(Gn(db(n.path)),r,"TargetPurposeLimboResolution",Zh.ae))}}async function Il(t,e,n){const r=me(t),i=[],s=[],o=[];r.ka.isEmpty()||(r.ka.forEach((a,l)=>{o.push(r.Ha(l,e,n).then(u=>{var h;if((u||n)&&r.isPrimaryClient){const f=u?!u.fromCache:(h=n==null?void 0:n.targetChanges.get(l.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(u){i.push(u);const f=__.Yi(l.targetId,u);s.push(f)}}))}),await Promise.all(o),r.La.p_(i),await async function(l,u){const h=me(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>H.forEach(u,d=>H.forEach(d.Hi,m=>h.persistence.referenceDelegate.addReference(f,d.targetId,m)).next(()=>H.forEach(d.Ji,m=>h.persistence.referenceDelegate.removeReference(f,d.targetId,m)))))}catch(f){if(!bo(f))throw f;te(y_,"Failed to update sequence numbers: "+f)}for(const f of u){const d=f.targetId;if(!f.fromCache){const m=h.Ts.get(d),_=m.snapshotVersion,y=m.withLastLimboFreeSnapshotVersion(_);h.Ts=h.Ts.insert(d,y)}}}(r.localStore,s))}async function I3(t,e){const n=me(t);if(!n.currentUser.isEqual(e)){te(I_,"User change. New user:",e.toKey());const r=await zb(n.localStore,e);n.currentUser=e,function(s,o){s.Ga.forEach(a=>{a.forEach(l=>{l.reject(new ie(W.CANCELLED,o))})}),s.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Il(n,r.Rs)}}function R3(t,e){const n=me(t),r=n.Ka.get(e);if(r&&r.Ba)return Se().add(r.key);{let i=Se();const s=n.qa.get(e);if(!s)return i;for(const o of s){const a=n.ka.get(o);i=i.unionWith(a.view.ba)}return i}}function nx(t){const e=me(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Jb.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=R3.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=S3.bind(null,e),e.La.p_=u3.bind(null,e.eventManager),e.La.Ja=c3.bind(null,e.eventManager),e}function A3(t){const e=me(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=T3.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=b3.bind(null,e),e}class _h{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=lf(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,n){return null}nu(e,n){return null}eu(e){return C4(this.persistence,new I4,e.initialUser,this.serializer)}Xa(e){return new Fb(g_.ri,this.serializer)}Za(e){return new N4}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}_h.provider={build:()=>new _h};class C3 extends _h{constructor(e){super(),this.cacheSizeBytes=e}tu(e,n){Le(this.persistence.referenceDelegate instanceof mh);const r=this.persistence.referenceDelegate.garbageCollector;return new h4(r,e.asyncQueue,n)}Xa(e){const n=this.cacheSizeBytes!==void 0?Yt.withCacheSize(this.cacheSizeBytes):Yt.DEFAULT;return new Fb(r=>mh.ri(r,n),this.serializer)}}class Cm{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>q1(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=I3.bind(null,this.syncEngine),await i3(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new o3}()}createDatastore(e){const n=lf(e.databaseInfo.databaseId),r=function(s){return new B4(s)}(e.databaseInfo);return function(s,o,a,l){return new W4(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new K4(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>q1(this.syncEngine,n,0),function(){return j1.D()?new j1:new V4}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,h){const f=new m3(i,s,o,a,l,u);return h&&(f.ja=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=me(i);te(Xi,"RemoteStore shutting down."),s.W_.add(5),await xl(s),s.z_.shutdown(),s.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Cm.provider={build:()=>new Cm};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class P3{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):vr("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi="FirestoreClient";class k3{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Mt.UNAUTHENTICATED,this.clientId=QT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{te(fi,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(te(fi,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ti;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=b_(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Fd(t,e){t.asyncQueue.verifyOperationInProgress(),te(fi,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await zb(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function G1(t,e){t.asyncQueue.verifyOperationInProgress();const n=await L3(t);te(fi,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>$1(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>$1(e.remoteStore,i)),t._onlineComponents=e}async function L3(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){te(fi,"Using user provided OfflineComponentProvider");try{await Fd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===W.FAILED_PRECONDITION||i.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;io("Error using user provided cache. Falling back to memory cache: "+n),await Fd(t,new _h)}}else te(fi,"Using default OfflineComponentProvider"),await Fd(t,new C3(void 0));return t._offlineComponents}async function rx(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(te(fi,"Using user provided OnlineComponentProvider"),await G1(t,t._uninitializedComponentsProvider._online)):(te(fi,"Using default OnlineComponentProvider"),await G1(t,new Cm))),t._onlineComponents}function O3(t){return rx(t).then(e=>e.syncEngine)}async function D3(t){const e=await rx(t),n=e.eventManager;return n.onListen=g3.bind(null,e.syncEngine),n.onUnlisten=v3.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=_3.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=w3.bind(null,e.syncEngine),n}function M3(t,e,n={}){const r=new ti;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const h=new P3({next:d=>{h.su(),o.enqueueAndForget(()=>l3(s,f)),d.fromCache&&l.source==="server"?u.reject(new ie(W.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),f=new h3(a,h,{includeMetadataChanges:!0,Ta:!0});return a3(s,f)}(await D3(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function ix(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q1=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sx(t,e,n){if(!n)throw new ie(W.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function N3(t,e,n,r){if(e===!0&&r===!0)throw new ie(W.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Y1(t){if(!le.isDocumentKey(t))throw new ie(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function X1(t){if(le.isDocumentKey(t))throw new ie(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function hf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":he()}function Ji(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ie(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=hf(t);throw new ie(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ox="firestore.googleapis.com",J1=!0;class Z1{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ie(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ox,this.ssl=J1}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:J1;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Vb;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<u4)throw new ie(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}N3("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ix((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ie(W.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ie(W.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ie(W.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ff{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Z1({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ie(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ie(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Z1(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new BV;switch(r.type){case"firstParty":return new WV(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ie(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Q1.get(n);r&&(te("ComponentProvider","Removing Datastore"),Q1.delete(n),r.terminate())}(this),Promise.resolve()}}function V3(t,e,n,r={}){var i;const s=(t=Ji(t,ff))._getSettings(),o=Object.assign(Object.assign({},s),{emulatorOptions:t._getEmulatorOptions()}),a=`${e}:${n}`;s.host!==ox&&s.host!==a&&io("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l=Object.assign(Object.assign({},s),{host:a,ssl:!1,emulatorOptions:r});if(!ih(l,o)&&(t._setSettings(l),r.mockUserToken)){let u,h;if(typeof r.mockUserToken=="string")u=r.mockUserToken,h=Mt.MOCK_USER;else{u=wN(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new ie(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new Mt(f)}t._authCredentials=new $V(new GT(u,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Io(this.firestore,e,this._query)}}class gn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ni(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new gn(this.firestore,e,this._key)}}class ni extends Io{constructor(e,n,r){super(e,n,db(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new gn(this.firestore,null,new le(e))}withConverter(e){return new ni(this.firestore,e,this._path)}}function zd(t,e,...n){if(t=_r(t),sx("collection","path",e),t instanceof ff){const r=He.fromString(e,...n);return X1(r),new ni(t,null,r)}{if(!(t instanceof gn||t instanceof ni))throw new ie(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(He.fromString(e,...n));return X1(r),new ni(t.firestore,null,r)}}function ax(t,e,...n){if(t=_r(t),arguments.length===1&&(e=QT.newId()),sx("doc","path",e),t instanceof ff){const r=He.fromString(e,...n);return Y1(r),new gn(t,null,new le(r))}{if(!(t instanceof gn||t instanceof ni))throw new ie(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(He.fromString(e,...n));return Y1(r),new gn(t.firestore,t instanceof ni?t.converter:null,new le(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ew="AsyncQueue";class tw{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Bb(this,"async_queue_retry"),this.bu=()=>{const r=Vd();r&&te(ew,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.Su=e;const n=Vd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const n=Vd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.bu)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const n=new ti;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!bo(e))throw e;te(ew,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const n=this.Su.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw vr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.pu=!1,r))));return this.Su=n,n}enqueueAfterDelay(e,n,r){this.Du(),this.wu.indexOf(e)>-1&&(n=0);const i=T_.createAndSchedule(this,e,n,r,s=>this.Fu(s));return this.fu.push(i),i}Du(){this.gu&&he()}verifyOperationInProgress(){}async Mu(){let e;do e=this.Su,await e;while(e!==this.Su)}xu(e){for(const n of this.fu)if(n.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const n=this.fu.indexOf(e);this.fu.splice(n,1)}}class Rl extends ff{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new tw,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new tw(e),this._firestoreClient=void 0,await e}}}function F3(t,e){const n=typeof t=="object"?t:PV(),r=typeof t=="string"?t:lh,i=xV(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=yN("firestore");s&&V3(i,...s)}return i}function lx(t){if(t._terminated)throw new ie(W.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||z3(t),t._firestoreClient}function z3(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,h){return new sF(a,l,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,ix(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new k3(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e){this._byteString=e}static fromBase64String(e){try{return new co(At.fromBase64String(e))}catch(n){throw new ie(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new co(At.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ie(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new bt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ie(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ie(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Te(this._lat,e._lat)||Te(this._long,e._long)}}/**
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
 */class P_{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j3=/^__.*__$/;class B3{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new yi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Tl(e,this.data,n,this.fieldTransforms)}}class ux{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new yi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function cx(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw he()}}class k_{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Bu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new k_(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ku({path:r,Qu:!1});return i.$u(e),i}Ku(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ku({path:r,Qu:!1});return i.Bu(),i}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return yh(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(cx(this.Lu)&&j3.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class $3{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||lf(e)}ju(e,n,r,i=!1){return new k_({Lu:e,methodName:n,zu:r,path:bt.emptyPath(),Qu:!1,Gu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function L_(t){const e=t._freezeSettings(),n=lf(t._databaseId);return new $3(t._databaseId,!!e.ignoreUndefinedProperties,n)}function U3(t,e,n,r,i,s={}){const o=t.ju(s.merge||s.mergeFields?2:0,e,n,i);O_("Data must be an object, but it was:",o,r);const a=hx(r,o);let l,u;if(s.merge)l=new dn(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const f of s.mergeFields){const d=Pm(e,f,n);if(!o.contains(d))throw new ie(W.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);dx(h,d)||h.push(d)}l=new dn(h),u=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,u=o.fieldTransforms;return new B3(new Zt(a),l,u)}class pf extends A_{_toFieldTransform(e){if(e.Lu!==2)throw e.Lu===1?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof pf}}function H3(t,e,n,r){const i=t.ju(1,e,n);O_("Data must be an object, but it was:",i,r);const s=[],o=Zt.empty();_i(r,(l,u)=>{const h=D_(e,l,n);u=_r(u);const f=i.Ku(h);if(u instanceof pf)s.push(h);else{const d=Al(u,f);d!=null&&(s.push(h),o.set(h,d))}});const a=new dn(s);return new ux(o,a,i.fieldTransforms)}function W3(t,e,n,r,i,s){const o=t.ju(1,e,n),a=[Pm(e,r,n)],l=[i];if(s.length%2!=0)throw new ie(W.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Pm(e,s[d])),l.push(s[d+1]);const u=[],h=Zt.empty();for(let d=a.length-1;d>=0;--d)if(!dx(u,a[d])){const m=a[d];let _=l[d];_=_r(_);const y=o.Ku(m);if(_ instanceof pf)u.push(m);else{const E=Al(_,y);E!=null&&(u.push(m),h.set(m,E))}}const f=new dn(u);return new ux(h,f,o.fieldTransforms)}function q3(t,e,n,r=!1){return Al(n,t.ju(r?4:3,e))}function Al(t,e){if(fx(t=_r(t)))return O_("Unsupported field value:",e,t),hx(t,e);if(t instanceof A_)return function(r,i){if(!cx(i.Lu))throw i.Wu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Wu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Al(a,i.Uu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=_r(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return RF(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=mt.fromDate(r);return{timestampValue:ph(i.serializer,s)}}if(r instanceof mt){const s=new mt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ph(i.serializer,s)}}if(r instanceof C_)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof co)return{bytesValue:Pb(i.serializer,r._byteString)};if(r instanceof gn){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Wu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:p_(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof P_)return function(o,a){return{mapValue:{fields:{[rb]:{stringValue:sb},[uh]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Wu("VectorValues must only contain numeric values.");return c_(a.serializer,u)})}}}}}}(r,i);throw i.Wu(`Unsupported field value: ${hf(r)}`)}(t,e)}function hx(t,e){const n={};return XT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):_i(t,(r,i)=>{const s=Al(i,e.qu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function fx(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof mt||t instanceof C_||t instanceof co||t instanceof gn||t instanceof A_||t instanceof P_)}function O_(t,e,n){if(!fx(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=hf(n);throw r==="an object"?e.Wu(t+" a custom object"):e.Wu(t+" "+r)}}function Pm(t,e,n){if((e=_r(e))instanceof df)return e._internalPath;if(typeof e=="string")return D_(t,e);throw yh("Field path arguments must be of type string or ",t,!1,void 0,n)}const K3=new RegExp("[~\\*/\\[\\]]");function D_(t,e,n){if(e.search(K3)>=0)throw yh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new df(...e.split("."))._internalPath}catch{throw yh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function yh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new ie(W.INVALID_ARGUMENT,a+t+l)}function dx(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new gn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new G3(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(mx("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class G3 extends px{data(){return super.data()}}function mx(t,e){return typeof e=="string"?D_(t,e):e instanceof df?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q3(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ie(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class M_{}class Y3 extends M_{}function nw(t,e,...n){let r=[];e instanceof M_&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof V_).length,a=s.filter(l=>l instanceof N_).length;if(o>1||o>0&&a>0)throw new ie(W.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class N_ extends Y3{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new N_(e,n,r)}_apply(e){const n=this._parse(e);return gx(e._query,n),new Io(e.firestore,e.converter,vm(e._query,n))}_parse(e){const n=L_(e.firestore);return function(s,o,a,l,u,h,f){let d;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new ie(W.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){iw(f,h);const _=[];for(const y of f)_.push(rw(l,s,y));d={arrayValue:{values:_}}}else d=rw(l,s,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||iw(f,h),d=q3(a,o,f,h==="in"||h==="not-in");return ft.create(u,h,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class V_ extends M_{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new V_(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Fn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)gx(o,l),o=vm(o,l)}(e._query,n),new Io(e.firestore,e.converter,vm(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function rw(t,e,n){if(typeof(n=_r(n))=="string"){if(n==="")throw new ie(W.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!pb(e)&&n.indexOf("/")!==-1)throw new ie(W.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(He.fromString(n));if(!le.isDocumentKey(r))throw new ie(W.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return y1(t,new le(r))}if(n instanceof gn)return y1(t,n._key);throw new ie(W.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${hf(n)}.`)}function iw(t,e){if(!Array.isArray(t)||t.length===0)throw new ie(W.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function gx(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new ie(W.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ie(W.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class X3{convertValue(e,n="none"){switch(ci(e)){case 0:return null;case 1:return e.booleanValue;case 2:return at(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ui(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw he()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return _i(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n[uh].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>at(o.doubleValue));return new P_(s)}convertGeoPoint(e){return new C_(at(e.latitude),at(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=tf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(il(e));default:return null}}convertTimestamp(e){const n=li(e);return new mt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=He.fromString(e);Le(Nb(r));const i=new sl(r.get(1),r.get(3)),s=new le(r.popFirst(5));return i.isEqual(n)||vr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J3(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Z3 extends px{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ac(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(mx("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ac extends Z3{data(e={}){return super.data(e)}}class ez{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ku(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ac(this._firestore,this._userDataWriter,r.key,r,new ku(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ie(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new ac(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ku(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new ac(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ku(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:tz(a.type),doc:l,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function tz(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return he()}}class nz extends X3{constructor(e){super(),this.firestore=e}convertBytes(e){return new co(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new gn(this.firestore,null,n)}}function sw(t){t=Ji(t,Io);const e=Ji(t.firestore,Rl),n=lx(e),r=new nz(e);return Q3(t._query),M3(n,t._query).then(i=>new ez(e,r,t,i))}function rz(t,e,n,...r){t=Ji(t,gn);const i=Ji(t.firestore,Rl),s=L_(i);let o;return o=typeof(e=_r(e))=="string"||e instanceof df?W3(s,"updateDoc",t._key,e,n,r):H3(s,"updateDoc",t._key,e),F_(i,[o.toMutation(t._key,Nn.exists(!0))])}function iz(t){return F_(Ji(t.firestore,Rl),[new h_(t._key,Nn.none())])}function sz(t,e){const n=Ji(t.firestore,Rl),r=ax(t),i=J3(t.converter,e);return F_(n,[U3(L_(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Nn.exists(!1))]).then(()=>r)}function F_(t,e){return function(r,i){const s=new ti;return r.asyncQueue.enqueueAndForget(async()=>E3(await O3(r),i,s)),s.promise}(lx(t),e)}(function(e,n=!0){(function(i){So=i})(CV),oh(new tl("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Rl(new UV(r.getProvider("auth-internal")),new qV(o,r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ie(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new sl(u.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),zs(a1,l1,e),zs(a1,l1,"esm2017")})();var oz="firebase",az="11.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zs(oz,az,"app");const lz={apiKey:"AIzaSyDJNUMGVfCJCMnn-HH1FoxTJZa14DDJjNk",authDomain:"todolistdj-1ad4d.firebaseapp.com",projectId:"todolistdj-1ad4d",storageBucket:"todolistdj-1ad4d.firebasestorage.app",messagingSenderId:"575418657372",appId:"1:575418657372:web:7de23279fb37adc9f31499",measurementId:"G-YVR24SNKRC"},uz=zT(lz),Lu=F3(uz);function cz(){const[t,e]=F.useState(""),[n,r]=F.useState([]),[i,s]=F.useState(""),[o,a]=F.useState(localStorage.getItem("spotifyAccessToken")||""),[l,u]=F.useState([]),[h,f]=F.useState(""),[d,m]=F.useState(!1),_="d33fdd3fd546499ba9873e532b7ee491",y="https://callback-i6dtpk45bq-uc.a.run.app/callback";Cg();let E;const w=x=>{const S=x.target.value;e(S),clearTimeout(E),E=setTimeout(()=>{S.length>2?v(S):r([])},300)};F.useEffect(()=>{(async()=>{var S;try{console.log("Obtendo novo token simples...");const T=await Ke.post("https://accounts.spotify.com/api/token",new URLSearchParams({grant_type:"client_credentials"}),{headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:`Basic ${btoa("d33fdd3fd546499ba9873e532b7ee491:a1b0f9d4870242229b3273f22cdd2332")}`}});s(T.data.access_token),console.log("Novo token simples obtido:",T.data.access_token)}catch(T){console.error("Erro ao obter token simples:",((S=T.response)==null?void 0:S.data)||T.message)}})()},[]),F.useEffect(()=>{(async()=>{var S;try{let T=localStorage.getItem("spotifyAuthCode");if(!T){console.log("Código de autorização não encontrado. Redirecionando para autenticação..."),window.location.href=`https://accounts.spotify.com/authorize?client_id=${_}&response_type=code&redirect_uri=${encodeURIComponent(y)}&scope=user-read-private`;return}console.log("Trocando código por token de acesso...");const C=(await Ke.post("https://accounts.spotify.com/api/token",new URLSearchParams({grant_type:"authorization_code",code:T,redirect_uri:y}),{headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:`Basic ${btoa(`${_}:a1b0f9d4870242229b3273f22cdd2332`)}`}})).data.access_token;a(C),localStorage.setItem("spotifyAccessToken",C),console.log("Novo token de autenticação obtido:",C),localStorage.removeItem("spotifyAuthCode")}catch(T){console.error("Erro ao obter token de autenticação:",((S=T.response)==null?void 0:S.data)||T.message)}})()},[]);const v=async x=>{var S;m(!0);try{if(!i)throw new Error("Token simples não disponível.");console.log("Buscando músicas no Spotify para consulta:",x);const T=await Ke.get("https://api.spotify.com/v1/search",{headers:{Authorization:`Bearer ${i}`},params:{q:x,type:"track",limit:5}});r(T.data.tracks.items),console.log("Músicas encontradas:",T.data.tracks.items)}catch(T){console.error("Erro ao buscar músicas:",((S=T.response)==null?void 0:S.data)||T.message)}finally{m(!1)}},b=async x=>{var S;try{if(!o)return console.warn("Token de autenticação não disponível. Métricas não podem ser obtidas."),null;console.log("Buscando áudio features para trackId:",x);const T=await Ke.get(`https://api.spotify.com/v1/audio-features/${x}`,{headers:{Authorization:`Bearer ${o}`}});return console.log("Áudio features obtidos:",T.data),T.data}catch(T){return console.error("Erro ao buscar áudio features:",((S=T.response)==null?void 0:S.data)||T.message),null}},L=async x=>{if(!h.trim()){alert("Por favor, insira seu nome antes de adicionar uma música.");return}await new Promise(I=>setTimeout(I,500));const S=o?await b(x.id):null,T={spotifyData:x,audioFeatures:S||{energy:0,danceability:0,valence:0,tempo:0,key:0},suggestedBy:h,completed:!1};try{console.log("Salvando nova música no Firestore:",T),await sz(zd(Lu,"musicas"),T),u([...l,T]),e(""),r([])}catch(I){console.error("Erro ao salvar no Firestore:",I)}};F.useEffect(()=>{(async()=>{try{console.log("Carregando músicas do Firestore...");const S=nw(zd(Lu,"musicas")),I=(await sw(S)).docs.map(C=>({id:C.id,...C.data()}));u(I),console.log("Músicas carregadas do Firestore:",I)}catch(S){console.error("Erro ao carregar músicas do Firestore:",S)}})()},[]);const O=async x=>{try{const S=l.map(I=>I.id===x?{...I,completed:!I.completed}:I);u(S);const T=ax(Lu,"musicas",x);await rz(T,{completed:!S.find(I=>I.id===x).completed}),console.log("Estado da música atualizado no Firestore:",x)}catch(S){console.error("Erro ao atualizar música no Firestore:",S)}},D=async()=>{try{console.log("Limpando todas as músicas do Firestore...");const x=nw(zd(Lu,"musicas"));(await sw(x)).forEach(async T=>{await iz(T.ref)}),u([]),console.log("Todas as músicas foram limpas do Firestore.")}catch(x){console.error("Erro ao limpar músicas:",x)}};return G.jsxs("div",{className:"todolist-container",children:[G.jsx("header",{className:"header",children:G.jsxs("nav",{children:[G.jsx(Gs,{to:"/",className:"header-link",children:"🏠 Home"}),G.jsx(Gs,{to:"/sugestoes",className:"header-link",children:"🎵 Sugestões de Música"})]})}),G.jsxs("div",{className:"left-column",children:[G.jsx("h2",{className:"output",children:"🎵 Sugestões de Música"}),G.jsx("input",{type:"text",className:"contact-form input",placeholder:"Digite uma música...",value:t,onChange:w}),G.jsx("input",{type:"text",className:"contact-form input",placeholder:"Seu nome...",value:h,onChange:x=>f(x.target.value)}),d?G.jsx("p",{className:"loading-message output",children:"Carregando..."}):G.jsx("ul",{className:"suggestions-list output",children:n.map(x=>{var S;return G.jsxs("li",{className:"suggestion-item",onClick:()=>L(x),children:[G.jsx("span",{className:"spotify-icon"}),G.jsx("img",{src:((S=x.album.images[2])==null?void 0:S.url)||"https://via.placeholder.com/50",alt:`Capa do álbum ${x.album.name}`,className:"album-cover"}),x.name," - ",x.artists[0].name]},x.id)})})]}),G.jsxs("div",{className:"right-column",children:[G.jsx("h3",{className:"output",children:"📝 Lista de Músicas"}),G.jsxs("div",{className:"todo-section",children:[G.jsx("h4",{className:"output",children:"Não Riscadas"}),G.jsx("ul",{className:"todo-list output",children:l.filter(x=>!x.completed).map(x=>G.jsx("li",{className:`todo-item ${x.completed?"completed":""}`,onClick:()=>O(x.id),children:G.jsxs("div",{children:[G.jsx("strong",{children:x.spotifyData.name})," - ",x.spotifyData.artists[0].name," ","(Sugerido por: ",x.suggestedBy,")"]})},x.id))})]}),G.jsxs("div",{className:"todo-section",children:[G.jsx("h4",{className:"output",children:"Riscadas"}),G.jsx("ul",{className:"todo-list output",children:l.filter(x=>x.completed).map(x=>G.jsx("li",{className:`todo-item ${x.completed?"completed":""}`,onClick:()=>O(x.id),children:G.jsxs("div",{children:[G.jsx("strong",{children:x.spotifyData.name})," - ",x.spotifyData.artists[0].name," ","(Sugerido por: ",x.suggestedBy,")"]})},x.id))})]}),G.jsx("button",{className:"contact-form button",onClick:D,children:"Limpar Todas as Músicas"})]})]})}qh.register(la,ec,Br,bO,FO,PO);function hz(){const[t,e]=F.useState(),[n,r]=F.useState(!0),[i,s]=F.useState(!1),[o,a]=F.useState({name:"",email:"",message:""}),[l,u]=F.useState(""),h=lC({animationCharacters:"▒░█",animationCharacterSpacing:1,animationDelay:2e3,animationDirection:"down",animationInterval:100,animationLoop:!0,animationSpeed:30,font:uC,text:["Ferro","Velho"]});F.useEffect(()=>{async function y(){try{const E=await Ke.get("https://stream.zeno.fm/8llryz2hnsntv",{timeout:5e3});E.status===200&&E.data?e(!0):e(!1)}catch(E){console.error("Erro ao verificar a rádio:",E),e(!1)}finally{r(!1)}}y()},[]);const f={labels:["Afrobeats","Reggaeton","Baile Funk","R&B","House","Trap"],datasets:[{label:"Generos Meus",data:[90,80,95,85,70,75],backgroundColor:"rgba(0, 255, 0, 0.2)",borderColor:"rgba(0, 255, 0, 1)",borderWidth:2},{label:"Sugestões",data:[90,80,95,85,70,75],backgroundColor:"rgba(0, 255, 0, 0.2)",borderColor:"rgba(0, 255, 0, 1)",borderWidth:2}]},d={dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplay:!0},m=y=>{a({...o,[y.target.name]:y.target.value})},_=async y=>{y.preventDefault();try{await Ke.post("https://formspree.io/f/YOUR_FORMSPREE_ID",o),u("Mensagem enviada com sucesso!"),a({name:"",email:"",message:""})}catch{u("Erro ao enviar mensagem. Tente novamente mais tarde.")}};return G.jsxs("div",{className:"terminal",style:{minHeight:"100vh",overflowY:"auto",paddingBottom:"50px"},children:[G.jsx("div",{className:"noise"}),G.jsx("div",{className:"overlay"}),G.jsx("header",{className:"header",children:G.jsxs("nav",{children:[G.jsx(Gs,{to:"/sugestoes",children:"🎵 Sugestões de Música"}),G.jsx(Gs,{to:"/sugestoes",children:"📊 Medidor de Vibe"})]})}),n?G.jsx("p",{style:{marginTop:"60px"},children:"Carregando..."}):G.jsxs(G.Fragment,{children:[G.jsxs("div",{className:"main-content",children:[G.jsx("div",{className:"ascii-container",children:G.jsx("pre",{style:{fontSize:"18px",position:"relative",zIndex:2},ref:h})}),G.jsxs("h1",{children:["DJ ",G.jsx("span",{className:"errorcode",children:"FERRO VELHO"})]}),G.jsx("p",{className:"output",children:"Mixando vibes únicas no melhor estilo underground."})]}),G.jsxs("div",{className:"socials",children:[G.jsx("p",{children:"📲 Siga-me:"}),G.jsx("a",{href:"https://instagram.com",target:"_blank",children:"Instagram"})," |",G.jsx("a",{href:"https://soundcloud.com",target:"_blank",children:" SoundCloud"})," |",G.jsx("a",{href:"https://mixcloud.com",target:"_blank",children:" Mixcloud"})]}),G.jsx("button",{onClick:()=>{s(!i),console.log("Formulário Visível?",!i)},className:"terminal-button",children:"Entre em Contato"}),i&&G.jsxs("form",{onSubmit:_,className:"contact-form",children:[G.jsx("label",{children:"Nome"}),G.jsx("input",{type:"text",name:"name",placeholder:"Digite seu nome",value:o.name,onChange:m,required:!0}),G.jsx("label",{children:"Email"}),G.jsx("input",{type:"email",name:"email",placeholder:"Digite seu email",value:o.email,onChange:m,required:!0}),G.jsx("label",{children:"Mensagem"}),G.jsx("textarea",{name:"message",placeholder:"Digite sua mensagem",value:o.message,onChange:m,required:!0}),G.jsx("button",{type:"submit",className:"terminal-button",children:"Enviar"}),l&&G.jsx("p",{children:l})]}),G.jsxs("div",{className:"bio",children:[G.jsx("p",{children:"🎧 DJ especializado em diversos estilos musicais."}),G.jsx("p",{children:"🔥 Criando sets energéticos e performances ao vivo cativantes."})]}),G.jsxs("div",{className:"chart-container",style:{width:"90%",maxWidth:"400px",height:"400px",margin:"auto",padding:"10px",background:"rgba(0, 0, 0, 0.7)",borderRadius:"10px"},children:[G.jsx("h2",{children:"Estilos Musicais"}),G.jsx(uD,{data:f,options:{maintainAspectRatio:!1,responsive:!0,scales:{r:{suggestedMin:0,suggestedMax:100}}}})]}),G.jsxs("div",{className:"carousel",style:{maxWidth:"500px",margin:"auto",paddingTop:"20px"},children:[G.jsx("h2",{children:"Galeria"}),G.jsxs(aN,{...d,children:[G.jsx("img",{src:"https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",alt:"Festa 1"}),G.jsx("img",{src:"https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",alt:"Festa 2"}),G.jsx("img",{src:"https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",alt:"Festa 3"})]})]}),G.jsxs("div",{className:"radio-status",children:[G.jsx("h2",{children:"Status da Rádio:"}),t?G.jsxs(G.Fragment,{children:[G.jsx("button",{href:"https://stream.zeno.fm/8llryz2hnsntv",target:"_blank",className:"terminal-button",children:"Ouça Agora"}),G.jsx("p",{className:"online",children:"🔴 Ao Vivo"})]}):G.jsx("p",{className:"offline",children:"⚫ Fora do Ar"})]})]})]})}function fz(){const t=Cg();return F.useEffect(()=>{const n=new URLSearchParams(window.location.search).get("code");console.log("Código de autorização extraído:",n),n&&n.length>10?(console.log("AUTH ->",n),localStorage.setItem("spotifyAuthCode",n),t("/sugestoes")):console.error("Erro: Código de autorização inválido ou ausente.")},[t]),G.jsx("div",{children:"Redirecionando..."})}function dz(){return G.jsx(jA,{basename:"/ferrovelhomp3",children:G.jsxs(gA,{children:[G.jsx(qu,{path:"/",element:G.jsx(hz,{})}),G.jsx(qu,{path:"/sugestoes",element:G.jsx(cz,{})}),G.jsx(qu,{path:"/callback",element:G.jsx(fz,{})})]})})}jd.createRoot(document.getElementById("root")).render(G.jsx(Nm.StrictMode,{children:G.jsx(dz,{})}));
