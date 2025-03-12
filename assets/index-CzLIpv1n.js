var Fx=Object.defineProperty;var zx=(t,e,n)=>e in t?Fx(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var pe=(t,e,n)=>(zx(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Ul=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Rm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function jx(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var J1={exports:{}},gh={},Z1={exports:{}},we={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ul=Symbol.for("react.element"),Bx=Symbol.for("react.portal"),$x=Symbol.for("react.fragment"),Ux=Symbol.for("react.strict_mode"),Hx=Symbol.for("react.profiler"),Wx=Symbol.for("react.provider"),qx=Symbol.for("react.context"),Kx=Symbol.for("react.forward_ref"),Gx=Symbol.for("react.suspense"),Qx=Symbol.for("react.memo"),Yx=Symbol.for("react.lazy"),Ry=Symbol.iterator;function Xx(t){return t===null||typeof t!="object"?null:(t=Ry&&t[Ry]||t["@@iterator"],typeof t=="function"?t:null)}var ew={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},tw=Object.assign,nw={};function co(t,e,n){this.props=t,this.context=e,this.refs=nw,this.updater=n||ew}co.prototype.isReactComponent={};co.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};co.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function rw(){}rw.prototype=co.prototype;function Am(t,e,n){this.props=t,this.context=e,this.refs=nw,this.updater=n||ew}var Cm=Am.prototype=new rw;Cm.constructor=Am;tw(Cm,co.prototype);Cm.isPureReactComponent=!0;var Ay=Array.isArray,iw=Object.prototype.hasOwnProperty,Pm={current:null},sw={key:!0,ref:!0,__self:!0,__source:!0};function ow(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)iw.call(e,r)&&!sw.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ul,type:t,key:s,ref:o,props:i,_owner:Pm.current}}function Jx(t,e){return{$$typeof:ul,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function km(t){return typeof t=="object"&&t!==null&&t.$$typeof===ul}function Zx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Cy=/\/+/g;function Af(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Zx(""+t.key):e.toString(36)}function ku(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ul:case Bx:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Af(o,0):r,Ay(i)?(n="",t!=null&&(n=t.replace(Cy,"$&/")+"/"),ku(i,e,n,"",function(u){return u})):i!=null&&(km(i)&&(i=Jx(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Cy,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Ay(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Af(s,a);o+=ku(s,e,n,l,i)}else if(l=Xx(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Af(s,a++),o+=ku(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Hl(t,e,n){if(t==null)return t;var r=[],i=0;return ku(t,r,"","",function(s){return e.call(n,s,i++)}),r}function e8(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var qt={current:null},Lu={transition:null},t8={ReactCurrentDispatcher:qt,ReactCurrentBatchConfig:Lu,ReactCurrentOwner:Pm};function aw(){throw Error("act(...) is not supported in production builds of React.")}we.Children={map:Hl,forEach:function(t,e,n){Hl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Hl(t,function(){e++}),e},toArray:function(t){return Hl(t,function(e){return e})||[]},only:function(t){if(!km(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};we.Component=co;we.Fragment=$x;we.Profiler=Hx;we.PureComponent=Am;we.StrictMode=Ux;we.Suspense=Gx;we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=t8;we.act=aw;we.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=tw({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Pm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)iw.call(e,l)&&!sw.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ul,type:t.type,key:i,ref:s,props:r,_owner:o}};we.createContext=function(t){return t={$$typeof:qx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Wx,_context:t},t.Consumer=t};we.createElement=ow;we.createFactory=function(t){var e=ow.bind(null,t);return e.type=t,e};we.createRef=function(){return{current:null}};we.forwardRef=function(t){return{$$typeof:Kx,render:t}};we.isValidElement=km;we.lazy=function(t){return{$$typeof:Yx,_payload:{_status:-1,_result:t},_init:e8}};we.memo=function(t,e){return{$$typeof:Qx,type:t,compare:e===void 0?null:e}};we.startTransition=function(t){var e=Lu.transition;Lu.transition={};try{t()}finally{Lu.transition=e}};we.unstable_act=aw;we.useCallback=function(t,e){return qt.current.useCallback(t,e)};we.useContext=function(t){return qt.current.useContext(t)};we.useDebugValue=function(){};we.useDeferredValue=function(t){return qt.current.useDeferredValue(t)};we.useEffect=function(t,e){return qt.current.useEffect(t,e)};we.useId=function(){return qt.current.useId()};we.useImperativeHandle=function(t,e,n){return qt.current.useImperativeHandle(t,e,n)};we.useInsertionEffect=function(t,e){return qt.current.useInsertionEffect(t,e)};we.useLayoutEffect=function(t,e){return qt.current.useLayoutEffect(t,e)};we.useMemo=function(t,e){return qt.current.useMemo(t,e)};we.useReducer=function(t,e,n){return qt.current.useReducer(t,e,n)};we.useRef=function(t){return qt.current.useRef(t)};we.useState=function(t){return qt.current.useState(t)};we.useSyncExternalStore=function(t,e,n){return qt.current.useSyncExternalStore(t,e,n)};we.useTransition=function(){return qt.current.useTransition()};we.version="18.3.1";Z1.exports=we;var F=Z1.exports;const Lm=Rm(F);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n8=F,r8=Symbol.for("react.element"),i8=Symbol.for("react.fragment"),s8=Object.prototype.hasOwnProperty,o8=n8.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a8={key:!0,ref:!0,__self:!0,__source:!0};function lw(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)s8.call(e,r)&&!a8.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:r8,type:t,key:s,ref:o,props:i,_owner:o8.current}}gh.Fragment=i8;gh.jsx=lw;gh.jsxs=lw;J1.exports=gh;var G=J1.exports,Vd={},uw={exports:{}},mn={},cw={exports:{}},hw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(Q,ne){var oe=Q.length;Q.push(ne);e:for(;0<oe;){var _e=oe-1>>>1,ae=Q[_e];if(0<i(ae,ne))Q[_e]=ne,Q[oe]=ae,oe=_e;else break e}}function n(Q){return Q.length===0?null:Q[0]}function r(Q){if(Q.length===0)return null;var ne=Q[0],oe=Q.pop();if(oe!==ne){Q[0]=oe;e:for(var _e=0,ae=Q.length,M=ae>>>1;_e<M;){var z=2*(_e+1)-1,L=Q[z],V=z+1,j=Q[V];if(0>i(L,oe))V<ae&&0>i(j,L)?(Q[_e]=j,Q[V]=oe,_e=V):(Q[_e]=L,Q[z]=oe,_e=z);else if(V<ae&&0>i(j,oe))Q[_e]=j,Q[V]=oe,_e=V;else break e}}return ne}function i(Q,ne){var oe=Q.sortIndex-ne.sortIndex;return oe!==0?oe:Q.id-ne.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],h=1,f=null,d=3,m=!1,_=!1,y=!1,E=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(Q){for(var ne=n(u);ne!==null;){if(ne.callback===null)r(u);else if(ne.startTime<=Q)r(u),ne.sortIndex=ne.expirationTime,e(l,ne);else break;ne=n(u)}}function C(Q){if(y=!1,S(Q),!_)if(n(l)!==null)_=!0,de(O);else{var ne=n(u);ne!==null&&Ee(C,ne.startTime-Q)}}function O(Q,ne){_=!1,y&&(y=!1,w(T),T=-1),m=!0;var oe=d;try{for(S(ne),f=n(l);f!==null&&(!(f.expirationTime>ne)||Q&&!P());){var _e=f.callback;if(typeof _e=="function"){f.callback=null,d=f.priorityLevel;var ae=_e(f.expirationTime<=ne);ne=t.unstable_now(),typeof ae=="function"?f.callback=ae:f===n(l)&&r(l),S(ne)}else r(l);f=n(l)}if(f!==null)var M=!0;else{var z=n(u);z!==null&&Ee(C,z.startTime-ne),M=!1}return M}finally{f=null,d=oe,m=!1}}var D=!1,I=null,T=-1,b=5,x=-1;function P(){return!(t.unstable_now()-x<b)}function k(){if(I!==null){var Q=t.unstable_now();x=Q;var ne=!0;try{ne=I(!0,Q)}finally{ne?A():(D=!1,I=null)}}else D=!1}var A;if(typeof v=="function")A=function(){v(k)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,ce=Z.port2;Z.port1.onmessage=k,A=function(){ce.postMessage(null)}}else A=function(){E(k,0)};function de(Q){I=Q,D||(D=!0,A())}function Ee(Q,ne){T=E(function(){Q(t.unstable_now())},ne)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(Q){Q.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,de(O))},t.unstable_forceFrameRate=function(Q){0>Q||125<Q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<Q?Math.floor(1e3/Q):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(Q){switch(d){case 1:case 2:case 3:var ne=3;break;default:ne=d}var oe=d;d=ne;try{return Q()}finally{d=oe}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(Q,ne){switch(Q){case 1:case 2:case 3:case 4:case 5:break;default:Q=3}var oe=d;d=Q;try{return ne()}finally{d=oe}},t.unstable_scheduleCallback=function(Q,ne,oe){var _e=t.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?_e+oe:_e):oe=_e,Q){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=oe+ae,Q={id:h++,callback:ne,priorityLevel:Q,startTime:oe,expirationTime:ae,sortIndex:-1},oe>_e?(Q.sortIndex=oe,e(u,Q),n(l)===null&&Q===n(u)&&(y?(w(T),T=-1):y=!0,Ee(C,oe-_e))):(Q.sortIndex=ae,e(l,Q),_||m||(_=!0,de(O))),Q},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(Q){var ne=d;return function(){var oe=d;d=ne;try{return Q.apply(this,arguments)}finally{d=oe}}}})(hw);cw.exports=hw;var l8=cw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u8=F,pn=l8;function q(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var fw=new Set,Ca={};function Qi(t,e){zs(t,e),zs(t+"Capture",e)}function zs(t,e){for(Ca[t]=e,t=0;t<e.length;t++)fw.add(e[t])}var dr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fd=Object.prototype.hasOwnProperty,c8=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Py={},ky={};function h8(t){return Fd.call(ky,t)?!0:Fd.call(Py,t)?!1:c8.test(t)?ky[t]=!0:(Py[t]=!0,!1)}function f8(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function d8(t,e,n,r){if(e===null||typeof e>"u"||f8(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Kt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Rt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Rt[t]=new Kt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Rt[e]=new Kt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Rt[t]=new Kt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Rt[t]=new Kt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Rt[t]=new Kt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Rt[t]=new Kt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Rt[t]=new Kt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Rt[t]=new Kt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Rt[t]=new Kt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Om=/[\-:]([a-z])/g;function Dm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Om,Dm);Rt[e]=new Kt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Om,Dm);Rt[e]=new Kt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Om,Dm);Rt[e]=new Kt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Rt[t]=new Kt(t,1,!1,t.toLowerCase(),null,!1,!1)});Rt.xlinkHref=new Kt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Rt[t]=new Kt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Mm(t,e,n,r){var i=Rt.hasOwnProperty(e)?Rt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(d8(e,n,i,r)&&(n=null),r||i===null?h8(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var wr=u8.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wl=Symbol.for("react.element"),ps=Symbol.for("react.portal"),ms=Symbol.for("react.fragment"),Nm=Symbol.for("react.strict_mode"),zd=Symbol.for("react.profiler"),dw=Symbol.for("react.provider"),pw=Symbol.for("react.context"),Vm=Symbol.for("react.forward_ref"),jd=Symbol.for("react.suspense"),Bd=Symbol.for("react.suspense_list"),Fm=Symbol.for("react.memo"),Cr=Symbol.for("react.lazy"),mw=Symbol.for("react.offscreen"),Ly=Symbol.iterator;function zo(t){return t===null||typeof t!="object"?null:(t=Ly&&t[Ly]||t["@@iterator"],typeof t=="function"?t:null)}var et=Object.assign,Cf;function ea(t){if(Cf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Cf=e&&e[1]||""}return`
`+Cf+t}var Pf=!1;function kf(t,e){if(!t||Pf)return"";Pf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Pf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ea(t):""}function p8(t){switch(t.tag){case 5:return ea(t.type);case 16:return ea("Lazy");case 13:return ea("Suspense");case 19:return ea("SuspenseList");case 0:case 2:case 15:return t=kf(t.type,!1),t;case 11:return t=kf(t.type.render,!1),t;case 1:return t=kf(t.type,!0),t;default:return""}}function $d(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ms:return"Fragment";case ps:return"Portal";case zd:return"Profiler";case Nm:return"StrictMode";case jd:return"Suspense";case Bd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case pw:return(t.displayName||"Context")+".Consumer";case dw:return(t._context.displayName||"Context")+".Provider";case Vm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Fm:return e=t.displayName||null,e!==null?e:$d(t.type)||"Memo";case Cr:e=t._payload,t=t._init;try{return $d(t(e))}catch{}}return null}function m8(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $d(e);case 8:return e===Nm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ni(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function gw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function g8(t){var e=gw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ql(t){t._valueTracker||(t._valueTracker=g8(t))}function _w(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=gw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function sc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ud(t,e){var n=e.checked;return et({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Oy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ni(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function yw(t,e){e=e.checked,e!=null&&Mm(t,"checked",e,!1)}function Hd(t,e){yw(t,e);var n=ni(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Wd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Wd(t,e.type,ni(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Dy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Wd(t,e,n){(e!=="number"||sc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ta=Array.isArray;function Rs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ni(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function qd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(q(91));return et({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function My(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(q(92));if(ta(n)){if(1<n.length)throw Error(q(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ni(n)}}function vw(t,e){var n=ni(e.value),r=ni(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Ny(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ww(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Kd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ww(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Kl,Ew=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Kl=Kl||document.createElement("div"),Kl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Kl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Pa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ha={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_8=["Webkit","ms","Moz","O"];Object.keys(ha).forEach(function(t){_8.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ha[e]=ha[t]})});function Sw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ha.hasOwnProperty(t)&&ha[t]?(""+e).trim():e+"px"}function Tw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Sw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var y8=et({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Gd(t,e){if(e){if(y8[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(q(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(q(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(q(61))}if(e.style!=null&&typeof e.style!="object")throw Error(q(62))}}function Qd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yd=null;function zm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Xd=null,As=null,Cs=null;function Vy(t){if(t=fl(t)){if(typeof Xd!="function")throw Error(q(280));var e=t.stateNode;e&&(e=Eh(e),Xd(t.stateNode,t.type,e))}}function bw(t){As?Cs?Cs.push(t):Cs=[t]:As=t}function xw(){if(As){var t=As,e=Cs;if(Cs=As=null,Vy(t),e)for(t=0;t<e.length;t++)Vy(e[t])}}function Iw(t,e){return t(e)}function Rw(){}var Lf=!1;function Aw(t,e,n){if(Lf)return t(e,n);Lf=!0;try{return Iw(t,e,n)}finally{Lf=!1,(As!==null||Cs!==null)&&(Rw(),xw())}}function ka(t,e){var n=t.stateNode;if(n===null)return null;var r=Eh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(q(231,e,typeof n));return n}var Jd=!1;if(dr)try{var jo={};Object.defineProperty(jo,"passive",{get:function(){Jd=!0}}),window.addEventListener("test",jo,jo),window.removeEventListener("test",jo,jo)}catch{Jd=!1}function v8(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var fa=!1,oc=null,ac=!1,Zd=null,w8={onError:function(t){fa=!0,oc=t}};function E8(t,e,n,r,i,s,o,a,l){fa=!1,oc=null,v8.apply(w8,arguments)}function S8(t,e,n,r,i,s,o,a,l){if(E8.apply(this,arguments),fa){if(fa){var u=oc;fa=!1,oc=null}else throw Error(q(198));ac||(ac=!0,Zd=u)}}function Yi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Cw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Fy(t){if(Yi(t)!==t)throw Error(q(188))}function T8(t){var e=t.alternate;if(!e){if(e=Yi(t),e===null)throw Error(q(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Fy(i),t;if(s===r)return Fy(i),e;s=s.sibling}throw Error(q(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(q(189))}}if(n.alternate!==r)throw Error(q(190))}if(n.tag!==3)throw Error(q(188));return n.stateNode.current===n?t:e}function Pw(t){return t=T8(t),t!==null?kw(t):null}function kw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=kw(t);if(e!==null)return e;t=t.sibling}return null}var Lw=pn.unstable_scheduleCallback,zy=pn.unstable_cancelCallback,b8=pn.unstable_shouldYield,x8=pn.unstable_requestPaint,lt=pn.unstable_now,I8=pn.unstable_getCurrentPriorityLevel,jm=pn.unstable_ImmediatePriority,Ow=pn.unstable_UserBlockingPriority,lc=pn.unstable_NormalPriority,R8=pn.unstable_LowPriority,Dw=pn.unstable_IdlePriority,_h=null,Wn=null;function A8(t){if(Wn&&typeof Wn.onCommitFiberRoot=="function")try{Wn.onCommitFiberRoot(_h,t,void 0,(t.current.flags&128)===128)}catch{}}var On=Math.clz32?Math.clz32:k8,C8=Math.log,P8=Math.LN2;function k8(t){return t>>>=0,t===0?32:31-(C8(t)/P8|0)|0}var Gl=64,Ql=4194304;function na(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function uc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=na(a):(s&=o,s!==0&&(r=na(s)))}else o=n&~i,o!==0?r=na(o):s!==0&&(r=na(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-On(e),i=1<<n,r|=t[n],e&=~i;return r}function L8(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function O8(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-On(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=L8(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function ep(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Mw(){var t=Gl;return Gl<<=1,!(Gl&4194240)&&(Gl=64),t}function Of(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function cl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-On(e),t[e]=n}function D8(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-On(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Bm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-On(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Ne=0;function Nw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Vw,$m,Fw,zw,jw,tp=!1,Yl=[],$r=null,Ur=null,Hr=null,La=new Map,Oa=new Map,Lr=[],M8="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jy(t,e){switch(t){case"focusin":case"focusout":$r=null;break;case"dragenter":case"dragleave":Ur=null;break;case"mouseover":case"mouseout":Hr=null;break;case"pointerover":case"pointerout":La.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oa.delete(e.pointerId)}}function Bo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=fl(e),e!==null&&$m(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function N8(t,e,n,r,i){switch(e){case"focusin":return $r=Bo($r,t,e,n,r,i),!0;case"dragenter":return Ur=Bo(Ur,t,e,n,r,i),!0;case"mouseover":return Hr=Bo(Hr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return La.set(s,Bo(La.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Oa.set(s,Bo(Oa.get(s)||null,t,e,n,r,i)),!0}return!1}function Bw(t){var e=Pi(t.target);if(e!==null){var n=Yi(e);if(n!==null){if(e=n.tag,e===13){if(e=Cw(n),e!==null){t.blockedOn=e,jw(t.priority,function(){Fw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ou(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=np(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Yd=r,n.target.dispatchEvent(r),Yd=null}else return e=fl(n),e!==null&&$m(e),t.blockedOn=n,!1;e.shift()}return!0}function By(t,e,n){Ou(t)&&n.delete(e)}function V8(){tp=!1,$r!==null&&Ou($r)&&($r=null),Ur!==null&&Ou(Ur)&&(Ur=null),Hr!==null&&Ou(Hr)&&(Hr=null),La.forEach(By),Oa.forEach(By)}function $o(t,e){t.blockedOn===e&&(t.blockedOn=null,tp||(tp=!0,pn.unstable_scheduleCallback(pn.unstable_NormalPriority,V8)))}function Da(t){function e(i){return $o(i,t)}if(0<Yl.length){$o(Yl[0],t);for(var n=1;n<Yl.length;n++){var r=Yl[n];r.blockedOn===t&&(r.blockedOn=null)}}for($r!==null&&$o($r,t),Ur!==null&&$o(Ur,t),Hr!==null&&$o(Hr,t),La.forEach(e),Oa.forEach(e),n=0;n<Lr.length;n++)r=Lr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Lr.length&&(n=Lr[0],n.blockedOn===null);)Bw(n),n.blockedOn===null&&Lr.shift()}var Ps=wr.ReactCurrentBatchConfig,cc=!0;function F8(t,e,n,r){var i=Ne,s=Ps.transition;Ps.transition=null;try{Ne=1,Um(t,e,n,r)}finally{Ne=i,Ps.transition=s}}function z8(t,e,n,r){var i=Ne,s=Ps.transition;Ps.transition=null;try{Ne=4,Um(t,e,n,r)}finally{Ne=i,Ps.transition=s}}function Um(t,e,n,r){if(cc){var i=np(t,e,n,r);if(i===null)Uf(t,e,r,hc,n),jy(t,r);else if(N8(i,t,e,n,r))r.stopPropagation();else if(jy(t,r),e&4&&-1<M8.indexOf(t)){for(;i!==null;){var s=fl(i);if(s!==null&&Vw(s),s=np(t,e,n,r),s===null&&Uf(t,e,r,hc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Uf(t,e,r,null,n)}}var hc=null;function np(t,e,n,r){if(hc=null,t=zm(r),t=Pi(t),t!==null)if(e=Yi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Cw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return hc=t,null}function $w(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(I8()){case jm:return 1;case Ow:return 4;case lc:case R8:return 16;case Dw:return 536870912;default:return 16}default:return 16}}var Dr=null,Hm=null,Du=null;function Uw(){if(Du)return Du;var t,e=Hm,n=e.length,r,i="value"in Dr?Dr.value:Dr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Du=i.slice(t,1<r?1-r:void 0)}function Mu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Xl(){return!0}function $y(){return!1}function gn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Xl:$y,this.isPropagationStopped=$y,this}return et(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xl)},persist:function(){},isPersistent:Xl}),e}var ho={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wm=gn(ho),hl=et({},ho,{view:0,detail:0}),j8=gn(hl),Df,Mf,Uo,yh=et({},hl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Uo&&(Uo&&t.type==="mousemove"?(Df=t.screenX-Uo.screenX,Mf=t.screenY-Uo.screenY):Mf=Df=0,Uo=t),Df)},movementY:function(t){return"movementY"in t?t.movementY:Mf}}),Uy=gn(yh),B8=et({},yh,{dataTransfer:0}),$8=gn(B8),U8=et({},hl,{relatedTarget:0}),Nf=gn(U8),H8=et({},ho,{animationName:0,elapsedTime:0,pseudoElement:0}),W8=gn(H8),q8=et({},ho,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),K8=gn(q8),G8=et({},ho,{data:0}),Hy=gn(G8),Q8={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Y8={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},X8={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function J8(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=X8[t])?!!e[t]:!1}function qm(){return J8}var Z8=et({},hl,{key:function(t){if(t.key){var e=Q8[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Mu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Y8[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qm,charCode:function(t){return t.type==="keypress"?Mu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Mu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),eI=gn(Z8),tI=et({},yh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wy=gn(tI),nI=et({},hl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qm}),rI=gn(nI),iI=et({},ho,{propertyName:0,elapsedTime:0,pseudoElement:0}),sI=gn(iI),oI=et({},yh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),aI=gn(oI),lI=[9,13,27,32],Km=dr&&"CompositionEvent"in window,da=null;dr&&"documentMode"in document&&(da=document.documentMode);var uI=dr&&"TextEvent"in window&&!da,Hw=dr&&(!Km||da&&8<da&&11>=da),qy=" ",Ky=!1;function Ww(t,e){switch(t){case"keyup":return lI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var gs=!1;function cI(t,e){switch(t){case"compositionend":return qw(e);case"keypress":return e.which!==32?null:(Ky=!0,qy);case"textInput":return t=e.data,t===qy&&Ky?null:t;default:return null}}function hI(t,e){if(gs)return t==="compositionend"||!Km&&Ww(t,e)?(t=Uw(),Du=Hm=Dr=null,gs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Hw&&e.locale!=="ko"?null:e.data;default:return null}}var fI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!fI[t.type]:e==="textarea"}function Kw(t,e,n,r){bw(r),e=fc(e,"onChange"),0<e.length&&(n=new Wm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var pa=null,Ma=null;function dI(t){i5(t,0)}function vh(t){var e=vs(t);if(_w(e))return t}function pI(t,e){if(t==="change")return e}var Gw=!1;if(dr){var Vf;if(dr){var Ff="oninput"in document;if(!Ff){var Qy=document.createElement("div");Qy.setAttribute("oninput","return;"),Ff=typeof Qy.oninput=="function"}Vf=Ff}else Vf=!1;Gw=Vf&&(!document.documentMode||9<document.documentMode)}function Yy(){pa&&(pa.detachEvent("onpropertychange",Qw),Ma=pa=null)}function Qw(t){if(t.propertyName==="value"&&vh(Ma)){var e=[];Kw(e,Ma,t,zm(t)),Aw(dI,e)}}function mI(t,e,n){t==="focusin"?(Yy(),pa=e,Ma=n,pa.attachEvent("onpropertychange",Qw)):t==="focusout"&&Yy()}function gI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return vh(Ma)}function _I(t,e){if(t==="click")return vh(e)}function yI(t,e){if(t==="input"||t==="change")return vh(e)}function vI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Nn=typeof Object.is=="function"?Object.is:vI;function Na(t,e){if(Nn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Fd.call(e,i)||!Nn(t[i],e[i]))return!1}return!0}function Xy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Jy(t,e){var n=Xy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Xy(n)}}function Yw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Yw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Xw(){for(var t=window,e=sc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=sc(t.document)}return e}function Gm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function wI(t){var e=Xw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Yw(n.ownerDocument.documentElement,n)){if(r!==null&&Gm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Jy(n,s);var o=Jy(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var EI=dr&&"documentMode"in document&&11>=document.documentMode,_s=null,rp=null,ma=null,ip=!1;function Zy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ip||_s==null||_s!==sc(r)||(r=_s,"selectionStart"in r&&Gm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ma&&Na(ma,r)||(ma=r,r=fc(rp,"onSelect"),0<r.length&&(e=new Wm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=_s)))}function Jl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ys={animationend:Jl("Animation","AnimationEnd"),animationiteration:Jl("Animation","AnimationIteration"),animationstart:Jl("Animation","AnimationStart"),transitionend:Jl("Transition","TransitionEnd")},zf={},Jw={};dr&&(Jw=document.createElement("div").style,"AnimationEvent"in window||(delete ys.animationend.animation,delete ys.animationiteration.animation,delete ys.animationstart.animation),"TransitionEvent"in window||delete ys.transitionend.transition);function wh(t){if(zf[t])return zf[t];if(!ys[t])return t;var e=ys[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Jw)return zf[t]=e[n];return t}var Zw=wh("animationend"),e5=wh("animationiteration"),t5=wh("animationstart"),n5=wh("transitionend"),r5=new Map,ev="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fi(t,e){r5.set(t,e),Qi(e,[t])}for(var jf=0;jf<ev.length;jf++){var Bf=ev[jf],SI=Bf.toLowerCase(),TI=Bf[0].toUpperCase()+Bf.slice(1);fi(SI,"on"+TI)}fi(Zw,"onAnimationEnd");fi(e5,"onAnimationIteration");fi(t5,"onAnimationStart");fi("dblclick","onDoubleClick");fi("focusin","onFocus");fi("focusout","onBlur");fi(n5,"onTransitionEnd");zs("onMouseEnter",["mouseout","mouseover"]);zs("onMouseLeave",["mouseout","mouseover"]);zs("onPointerEnter",["pointerout","pointerover"]);zs("onPointerLeave",["pointerout","pointerover"]);Qi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ra="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bI=new Set("cancel close invalid load scroll toggle".split(" ").concat(ra));function tv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,S8(r,e,void 0,t),t.currentTarget=null}function i5(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;tv(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;tv(i,a,u),s=l}}}if(ac)throw t=Zd,ac=!1,Zd=null,t}function Ue(t,e){var n=e[up];n===void 0&&(n=e[up]=new Set);var r=t+"__bubble";n.has(r)||(s5(e,t,2,!1),n.add(r))}function $f(t,e,n){var r=0;e&&(r|=4),s5(n,t,r,e)}var Zl="_reactListening"+Math.random().toString(36).slice(2);function Va(t){if(!t[Zl]){t[Zl]=!0,fw.forEach(function(n){n!=="selectionchange"&&(bI.has(n)||$f(n,!1,t),$f(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Zl]||(e[Zl]=!0,$f("selectionchange",!1,e))}}function s5(t,e,n,r){switch($w(e)){case 1:var i=F8;break;case 4:i=z8;break;default:i=Um}n=i.bind(null,e,n,t),i=void 0,!Jd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Uf(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Pi(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Aw(function(){var u=s,h=zm(n),f=[];e:{var d=r5.get(t);if(d!==void 0){var m=Wm,_=t;switch(t){case"keypress":if(Mu(n)===0)break e;case"keydown":case"keyup":m=eI;break;case"focusin":_="focus",m=Nf;break;case"focusout":_="blur",m=Nf;break;case"beforeblur":case"afterblur":m=Nf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Uy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=$8;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=rI;break;case Zw:case e5:case t5:m=W8;break;case n5:m=sI;break;case"scroll":m=j8;break;case"wheel":m=aI;break;case"copy":case"cut":case"paste":m=K8;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Wy}var y=(e&4)!==0,E=!y&&t==="scroll",w=y?d!==null?d+"Capture":null:d;y=[];for(var v=u,S;v!==null;){S=v;var C=S.stateNode;if(S.tag===5&&C!==null&&(S=C,w!==null&&(C=ka(v,w),C!=null&&y.push(Fa(v,C,S)))),E)break;v=v.return}0<y.length&&(d=new m(d,_,null,n,h),f.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==Yd&&(_=n.relatedTarget||n.fromElement)&&(Pi(_)||_[pr]))break e;if((m||d)&&(d=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=u,_=_?Pi(_):null,_!==null&&(E=Yi(_),_!==E||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=u),m!==_)){if(y=Uy,C="onMouseLeave",w="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(y=Wy,C="onPointerLeave",w="onPointerEnter",v="pointer"),E=m==null?d:vs(m),S=_==null?d:vs(_),d=new y(C,v+"leave",m,n,h),d.target=E,d.relatedTarget=S,C=null,Pi(h)===u&&(y=new y(w,v+"enter",_,n,h),y.target=S,y.relatedTarget=E,C=y),E=C,m&&_)t:{for(y=m,w=_,v=0,S=y;S;S=as(S))v++;for(S=0,C=w;C;C=as(C))S++;for(;0<v-S;)y=as(y),v--;for(;0<S-v;)w=as(w),S--;for(;v--;){if(y===w||w!==null&&y===w.alternate)break t;y=as(y),w=as(w)}y=null}else y=null;m!==null&&nv(f,d,m,y,!1),_!==null&&E!==null&&nv(f,E,_,y,!0)}}e:{if(d=u?vs(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var O=pI;else if(Gy(d))if(Gw)O=yI;else{O=gI;var D=mI}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(O=_I);if(O&&(O=O(t,u))){Kw(f,O,n,h);break e}D&&D(t,d,u),t==="focusout"&&(D=d._wrapperState)&&D.controlled&&d.type==="number"&&Wd(d,"number",d.value)}switch(D=u?vs(u):window,t){case"focusin":(Gy(D)||D.contentEditable==="true")&&(_s=D,rp=u,ma=null);break;case"focusout":ma=rp=_s=null;break;case"mousedown":ip=!0;break;case"contextmenu":case"mouseup":case"dragend":ip=!1,Zy(f,n,h);break;case"selectionchange":if(EI)break;case"keydown":case"keyup":Zy(f,n,h)}var I;if(Km)e:{switch(t){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else gs?Ww(t,n)&&(T="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Hw&&n.locale!=="ko"&&(gs||T!=="onCompositionStart"?T==="onCompositionEnd"&&gs&&(I=Uw()):(Dr=h,Hm="value"in Dr?Dr.value:Dr.textContent,gs=!0)),D=fc(u,T),0<D.length&&(T=new Hy(T,t,null,n,h),f.push({event:T,listeners:D}),I?T.data=I:(I=qw(n),I!==null&&(T.data=I)))),(I=uI?cI(t,n):hI(t,n))&&(u=fc(u,"onBeforeInput"),0<u.length&&(h=new Hy("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:u}),h.data=I))}i5(f,e)})}function Fa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function fc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ka(t,n),s!=null&&r.unshift(Fa(t,s,i)),s=ka(t,e),s!=null&&r.push(Fa(t,s,i))),t=t.return}return r}function as(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function nv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ka(n,s),l!=null&&o.unshift(Fa(n,l,a))):i||(l=ka(n,s),l!=null&&o.push(Fa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var xI=/\r\n?/g,II=/\u0000|\uFFFD/g;function rv(t){return(typeof t=="string"?t:""+t).replace(xI,`
`).replace(II,"")}function eu(t,e,n){if(e=rv(e),rv(t)!==e&&n)throw Error(q(425))}function dc(){}var sp=null,op=null;function ap(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var lp=typeof setTimeout=="function"?setTimeout:void 0,RI=typeof clearTimeout=="function"?clearTimeout:void 0,iv=typeof Promise=="function"?Promise:void 0,AI=typeof queueMicrotask=="function"?queueMicrotask:typeof iv<"u"?function(t){return iv.resolve(null).then(t).catch(CI)}:lp;function CI(t){setTimeout(function(){throw t})}function Hf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Da(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Da(e)}function Wr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function sv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var fo=Math.random().toString(36).slice(2),Hn="__reactFiber$"+fo,za="__reactProps$"+fo,pr="__reactContainer$"+fo,up="__reactEvents$"+fo,PI="__reactListeners$"+fo,kI="__reactHandles$"+fo;function Pi(t){var e=t[Hn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[pr]||n[Hn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=sv(t);t!==null;){if(n=t[Hn])return n;t=sv(t)}return e}t=n,n=t.parentNode}return null}function fl(t){return t=t[Hn]||t[pr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function vs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(q(33))}function Eh(t){return t[za]||null}var cp=[],ws=-1;function di(t){return{current:t}}function qe(t){0>ws||(t.current=cp[ws],cp[ws]=null,ws--)}function je(t,e){ws++,cp[ws]=t.current,t.current=e}var ri={},Ft=di(ri),en=di(!1),zi=ri;function js(t,e){var n=t.type.contextTypes;if(!n)return ri;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function tn(t){return t=t.childContextTypes,t!=null}function pc(){qe(en),qe(Ft)}function ov(t,e,n){if(Ft.current!==ri)throw Error(q(168));je(Ft,e),je(en,n)}function o5(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(q(108,m8(t)||"Unknown",i));return et({},n,r)}function mc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ri,zi=Ft.current,je(Ft,t),je(en,en.current),!0}function av(t,e,n){var r=t.stateNode;if(!r)throw Error(q(169));n?(t=o5(t,e,zi),r.__reactInternalMemoizedMergedChildContext=t,qe(en),qe(Ft),je(Ft,t)):qe(en),je(en,n)}var sr=null,Sh=!1,Wf=!1;function a5(t){sr===null?sr=[t]:sr.push(t)}function LI(t){Sh=!0,a5(t)}function pi(){if(!Wf&&sr!==null){Wf=!0;var t=0,e=Ne;try{var n=sr;for(Ne=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}sr=null,Sh=!1}catch(i){throw sr!==null&&(sr=sr.slice(t+1)),Lw(jm,pi),i}finally{Ne=e,Wf=!1}}return null}var Es=[],Ss=0,gc=null,_c=0,yn=[],vn=0,ji=null,ar=1,lr="";function xi(t,e){Es[Ss++]=_c,Es[Ss++]=gc,gc=t,_c=e}function l5(t,e,n){yn[vn++]=ar,yn[vn++]=lr,yn[vn++]=ji,ji=t;var r=ar;t=lr;var i=32-On(r)-1;r&=~(1<<i),n+=1;var s=32-On(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ar=1<<32-On(e)+i|n<<i|r,lr=s+t}else ar=1<<s|n<<i|r,lr=t}function Qm(t){t.return!==null&&(xi(t,1),l5(t,1,0))}function Ym(t){for(;t===gc;)gc=Es[--Ss],Es[Ss]=null,_c=Es[--Ss],Es[Ss]=null;for(;t===ji;)ji=yn[--vn],yn[vn]=null,lr=yn[--vn],yn[vn]=null,ar=yn[--vn],yn[vn]=null}var fn=null,cn=null,Ge=!1,kn=null;function u5(t,e){var n=En(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function lv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,fn=t,cn=Wr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,fn=t,cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ji!==null?{id:ar,overflow:lr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=En(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,fn=t,cn=null,!0):!1;default:return!1}}function hp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function fp(t){if(Ge){var e=cn;if(e){var n=e;if(!lv(t,e)){if(hp(t))throw Error(q(418));e=Wr(n.nextSibling);var r=fn;e&&lv(t,e)?u5(r,n):(t.flags=t.flags&-4097|2,Ge=!1,fn=t)}}else{if(hp(t))throw Error(q(418));t.flags=t.flags&-4097|2,Ge=!1,fn=t}}}function uv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;fn=t}function tu(t){if(t!==fn)return!1;if(!Ge)return uv(t),Ge=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ap(t.type,t.memoizedProps)),e&&(e=cn)){if(hp(t))throw c5(),Error(q(418));for(;e;)u5(t,e),e=Wr(e.nextSibling)}if(uv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(q(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){cn=Wr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}cn=null}}else cn=fn?Wr(t.stateNode.nextSibling):null;return!0}function c5(){for(var t=cn;t;)t=Wr(t.nextSibling)}function Bs(){cn=fn=null,Ge=!1}function Xm(t){kn===null?kn=[t]:kn.push(t)}var OI=wr.ReactCurrentBatchConfig;function Ho(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(q(309));var r=n.stateNode}if(!r)throw Error(q(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(q(284));if(!n._owner)throw Error(q(290,t))}return t}function nu(t,e){throw t=Object.prototype.toString.call(e),Error(q(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function cv(t){var e=t._init;return e(t._payload)}function h5(t){function e(w,v){if(t){var S=w.deletions;S===null?(w.deletions=[v],w.flags|=16):S.push(v)}}function n(w,v){if(!t)return null;for(;v!==null;)e(w,v),v=v.sibling;return null}function r(w,v){for(w=new Map;v!==null;)v.key!==null?w.set(v.key,v):w.set(v.index,v),v=v.sibling;return w}function i(w,v){return w=Qr(w,v),w.index=0,w.sibling=null,w}function s(w,v,S){return w.index=S,t?(S=w.alternate,S!==null?(S=S.index,S<v?(w.flags|=2,v):S):(w.flags|=2,v)):(w.flags|=1048576,v)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function a(w,v,S,C){return v===null||v.tag!==6?(v=Jf(S,w.mode,C),v.return=w,v):(v=i(v,S),v.return=w,v)}function l(w,v,S,C){var O=S.type;return O===ms?h(w,v,S.props.children,C,S.key):v!==null&&(v.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Cr&&cv(O)===v.type)?(C=i(v,S.props),C.ref=Ho(w,v,S),C.return=w,C):(C=$u(S.type,S.key,S.props,null,w.mode,C),C.ref=Ho(w,v,S),C.return=w,C)}function u(w,v,S,C){return v===null||v.tag!==4||v.stateNode.containerInfo!==S.containerInfo||v.stateNode.implementation!==S.implementation?(v=Zf(S,w.mode,C),v.return=w,v):(v=i(v,S.children||[]),v.return=w,v)}function h(w,v,S,C,O){return v===null||v.tag!==7?(v=Ni(S,w.mode,C,O),v.return=w,v):(v=i(v,S),v.return=w,v)}function f(w,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Jf(""+v,w.mode,S),v.return=w,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Wl:return S=$u(v.type,v.key,v.props,null,w.mode,S),S.ref=Ho(w,null,v),S.return=w,S;case ps:return v=Zf(v,w.mode,S),v.return=w,v;case Cr:var C=v._init;return f(w,C(v._payload),S)}if(ta(v)||zo(v))return v=Ni(v,w.mode,S,null),v.return=w,v;nu(w,v)}return null}function d(w,v,S,C){var O=v!==null?v.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return O!==null?null:a(w,v,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Wl:return S.key===O?l(w,v,S,C):null;case ps:return S.key===O?u(w,v,S,C):null;case Cr:return O=S._init,d(w,v,O(S._payload),C)}if(ta(S)||zo(S))return O!==null?null:h(w,v,S,C,null);nu(w,S)}return null}function m(w,v,S,C,O){if(typeof C=="string"&&C!==""||typeof C=="number")return w=w.get(S)||null,a(v,w,""+C,O);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Wl:return w=w.get(C.key===null?S:C.key)||null,l(v,w,C,O);case ps:return w=w.get(C.key===null?S:C.key)||null,u(v,w,C,O);case Cr:var D=C._init;return m(w,v,S,D(C._payload),O)}if(ta(C)||zo(C))return w=w.get(S)||null,h(v,w,C,O,null);nu(v,C)}return null}function _(w,v,S,C){for(var O=null,D=null,I=v,T=v=0,b=null;I!==null&&T<S.length;T++){I.index>T?(b=I,I=null):b=I.sibling;var x=d(w,I,S[T],C);if(x===null){I===null&&(I=b);break}t&&I&&x.alternate===null&&e(w,I),v=s(x,v,T),D===null?O=x:D.sibling=x,D=x,I=b}if(T===S.length)return n(w,I),Ge&&xi(w,T),O;if(I===null){for(;T<S.length;T++)I=f(w,S[T],C),I!==null&&(v=s(I,v,T),D===null?O=I:D.sibling=I,D=I);return Ge&&xi(w,T),O}for(I=r(w,I);T<S.length;T++)b=m(I,w,T,S[T],C),b!==null&&(t&&b.alternate!==null&&I.delete(b.key===null?T:b.key),v=s(b,v,T),D===null?O=b:D.sibling=b,D=b);return t&&I.forEach(function(P){return e(w,P)}),Ge&&xi(w,T),O}function y(w,v,S,C){var O=zo(S);if(typeof O!="function")throw Error(q(150));if(S=O.call(S),S==null)throw Error(q(151));for(var D=O=null,I=v,T=v=0,b=null,x=S.next();I!==null&&!x.done;T++,x=S.next()){I.index>T?(b=I,I=null):b=I.sibling;var P=d(w,I,x.value,C);if(P===null){I===null&&(I=b);break}t&&I&&P.alternate===null&&e(w,I),v=s(P,v,T),D===null?O=P:D.sibling=P,D=P,I=b}if(x.done)return n(w,I),Ge&&xi(w,T),O;if(I===null){for(;!x.done;T++,x=S.next())x=f(w,x.value,C),x!==null&&(v=s(x,v,T),D===null?O=x:D.sibling=x,D=x);return Ge&&xi(w,T),O}for(I=r(w,I);!x.done;T++,x=S.next())x=m(I,w,T,x.value,C),x!==null&&(t&&x.alternate!==null&&I.delete(x.key===null?T:x.key),v=s(x,v,T),D===null?O=x:D.sibling=x,D=x);return t&&I.forEach(function(k){return e(w,k)}),Ge&&xi(w,T),O}function E(w,v,S,C){if(typeof S=="object"&&S!==null&&S.type===ms&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Wl:e:{for(var O=S.key,D=v;D!==null;){if(D.key===O){if(O=S.type,O===ms){if(D.tag===7){n(w,D.sibling),v=i(D,S.props.children),v.return=w,w=v;break e}}else if(D.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Cr&&cv(O)===D.type){n(w,D.sibling),v=i(D,S.props),v.ref=Ho(w,D,S),v.return=w,w=v;break e}n(w,D);break}else e(w,D);D=D.sibling}S.type===ms?(v=Ni(S.props.children,w.mode,C,S.key),v.return=w,w=v):(C=$u(S.type,S.key,S.props,null,w.mode,C),C.ref=Ho(w,v,S),C.return=w,w=C)}return o(w);case ps:e:{for(D=S.key;v!==null;){if(v.key===D)if(v.tag===4&&v.stateNode.containerInfo===S.containerInfo&&v.stateNode.implementation===S.implementation){n(w,v.sibling),v=i(v,S.children||[]),v.return=w,w=v;break e}else{n(w,v);break}else e(w,v);v=v.sibling}v=Zf(S,w.mode,C),v.return=w,w=v}return o(w);case Cr:return D=S._init,E(w,v,D(S._payload),C)}if(ta(S))return _(w,v,S,C);if(zo(S))return y(w,v,S,C);nu(w,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,v!==null&&v.tag===6?(n(w,v.sibling),v=i(v,S),v.return=w,w=v):(n(w,v),v=Jf(S,w.mode,C),v.return=w,w=v),o(w)):n(w,v)}return E}var $s=h5(!0),f5=h5(!1),yc=di(null),vc=null,Ts=null,Jm=null;function Zm(){Jm=Ts=vc=null}function eg(t){var e=yc.current;qe(yc),t._currentValue=e}function dp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ks(t,e){vc=t,Jm=Ts=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Zt=!0),t.firstContext=null)}function xn(t){var e=t._currentValue;if(Jm!==t)if(t={context:t,memoizedValue:e,next:null},Ts===null){if(vc===null)throw Error(q(308));Ts=t,vc.dependencies={lanes:0,firstContext:t}}else Ts=Ts.next=t;return e}var ki=null;function tg(t){ki===null?ki=[t]:ki.push(t)}function d5(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,tg(e)):(n.next=i.next,i.next=n),e.interleaved=n,mr(t,r)}function mr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Pr=!1;function ng(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function p5(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function hr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function qr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Ae&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,mr(t,n)}return i=r.interleaved,i===null?(e.next=e,tg(r)):(e.next=i.next,i.next=e),r.interleaved=e,mr(t,n)}function Nu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Bm(t,n)}}function hv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function wc(t,e,n,r){var i=t.updateQueue;Pr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=u:a.next=u,h.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,h=u=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((r&d)===d){h!==null&&(h=h.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,y=a;switch(d=e,m=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){f=_.call(m,f,d);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,d=typeof _=="function"?_.call(m,f,d):_,d==null)break e;f=et({},f,d);break e;case 2:Pr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(u=h=m,l=f):h=h.next=m,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(h===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);$i|=o,t.lanes=o,t.memoizedState=f}}function fv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(q(191,i));i.call(r)}}}var dl={},qn=di(dl),ja=di(dl),Ba=di(dl);function Li(t){if(t===dl)throw Error(q(174));return t}function rg(t,e){switch(je(Ba,e),je(ja,t),je(qn,dl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Kd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Kd(e,t)}qe(qn),je(qn,e)}function Us(){qe(qn),qe(ja),qe(Ba)}function m5(t){Li(Ba.current);var e=Li(qn.current),n=Kd(e,t.type);e!==n&&(je(ja,t),je(qn,n))}function ig(t){ja.current===t&&(qe(qn),qe(ja))}var Xe=di(0);function Ec(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var qf=[];function sg(){for(var t=0;t<qf.length;t++)qf[t]._workInProgressVersionPrimary=null;qf.length=0}var Vu=wr.ReactCurrentDispatcher,Kf=wr.ReactCurrentBatchConfig,Bi=0,Je=null,dt=null,yt=null,Sc=!1,ga=!1,$a=0,DI=0;function Lt(){throw Error(q(321))}function og(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Nn(t[n],e[n]))return!1;return!0}function ag(t,e,n,r,i,s){if(Bi=s,Je=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Vu.current=t===null||t.memoizedState===null?FI:zI,t=n(r,i),ga){s=0;do{if(ga=!1,$a=0,25<=s)throw Error(q(301));s+=1,yt=dt=null,e.updateQueue=null,Vu.current=jI,t=n(r,i)}while(ga)}if(Vu.current=Tc,e=dt!==null&&dt.next!==null,Bi=0,yt=dt=Je=null,Sc=!1,e)throw Error(q(300));return t}function lg(){var t=$a!==0;return $a=0,t}function Bn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yt===null?Je.memoizedState=yt=t:yt=yt.next=t,yt}function In(){if(dt===null){var t=Je.alternate;t=t!==null?t.memoizedState:null}else t=dt.next;var e=yt===null?Je.memoizedState:yt.next;if(e!==null)yt=e,dt=t;else{if(t===null)throw Error(q(310));dt=t,t={memoizedState:dt.memoizedState,baseState:dt.baseState,baseQueue:dt.baseQueue,queue:dt.queue,next:null},yt===null?Je.memoizedState=yt=t:yt=yt.next=t}return yt}function Ua(t,e){return typeof e=="function"?e(t):e}function Gf(t){var e=In(),n=e.queue;if(n===null)throw Error(q(311));n.lastRenderedReducer=t;var r=dt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var h=u.lane;if((Bi&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var f={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,Je.lanes|=h,$i|=h}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Nn(r,e.memoizedState)||(Zt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Je.lanes|=s,$i|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Qf(t){var e=In(),n=e.queue;if(n===null)throw Error(q(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Nn(s,e.memoizedState)||(Zt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function g5(){}function _5(t,e){var n=Je,r=In(),i=e(),s=!Nn(r.memoizedState,i);if(s&&(r.memoizedState=i,Zt=!0),r=r.queue,ug(w5.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||yt!==null&&yt.memoizedState.tag&1){if(n.flags|=2048,Ha(9,v5.bind(null,n,r,i,e),void 0,null),vt===null)throw Error(q(349));Bi&30||y5(n,e,i)}return i}function y5(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Je.updateQueue,e===null?(e={lastEffect:null,stores:null},Je.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function v5(t,e,n,r){e.value=n,e.getSnapshot=r,E5(e)&&S5(t)}function w5(t,e,n){return n(function(){E5(e)&&S5(t)})}function E5(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Nn(t,n)}catch{return!0}}function S5(t){var e=mr(t,1);e!==null&&Dn(e,t,1,-1)}function dv(t){var e=Bn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ua,lastRenderedState:t},e.queue=t,t=t.dispatch=VI.bind(null,Je,t),[e.memoizedState,t]}function Ha(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Je.updateQueue,e===null?(e={lastEffect:null,stores:null},Je.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function T5(){return In().memoizedState}function Fu(t,e,n,r){var i=Bn();Je.flags|=t,i.memoizedState=Ha(1|e,n,void 0,r===void 0?null:r)}function Th(t,e,n,r){var i=In();r=r===void 0?null:r;var s=void 0;if(dt!==null){var o=dt.memoizedState;if(s=o.destroy,r!==null&&og(r,o.deps)){i.memoizedState=Ha(e,n,s,r);return}}Je.flags|=t,i.memoizedState=Ha(1|e,n,s,r)}function pv(t,e){return Fu(8390656,8,t,e)}function ug(t,e){return Th(2048,8,t,e)}function b5(t,e){return Th(4,2,t,e)}function x5(t,e){return Th(4,4,t,e)}function I5(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function R5(t,e,n){return n=n!=null?n.concat([t]):null,Th(4,4,I5.bind(null,e,t),n)}function cg(){}function A5(t,e){var n=In();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&og(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function C5(t,e){var n=In();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&og(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function P5(t,e,n){return Bi&21?(Nn(n,e)||(n=Mw(),Je.lanes|=n,$i|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Zt=!0),t.memoizedState=n)}function MI(t,e){var n=Ne;Ne=n!==0&&4>n?n:4,t(!0);var r=Kf.transition;Kf.transition={};try{t(!1),e()}finally{Ne=n,Kf.transition=r}}function k5(){return In().memoizedState}function NI(t,e,n){var r=Gr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},L5(t))O5(e,n);else if(n=d5(t,e,n,r),n!==null){var i=Ht();Dn(n,t,r,i),D5(n,e,r)}}function VI(t,e,n){var r=Gr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(L5(t))O5(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Nn(a,o)){var l=e.interleaved;l===null?(i.next=i,tg(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=d5(t,e,i,r),n!==null&&(i=Ht(),Dn(n,t,r,i),D5(n,e,r))}}function L5(t){var e=t.alternate;return t===Je||e!==null&&e===Je}function O5(t,e){ga=Sc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function D5(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Bm(t,n)}}var Tc={readContext:xn,useCallback:Lt,useContext:Lt,useEffect:Lt,useImperativeHandle:Lt,useInsertionEffect:Lt,useLayoutEffect:Lt,useMemo:Lt,useReducer:Lt,useRef:Lt,useState:Lt,useDebugValue:Lt,useDeferredValue:Lt,useTransition:Lt,useMutableSource:Lt,useSyncExternalStore:Lt,useId:Lt,unstable_isNewReconciler:!1},FI={readContext:xn,useCallback:function(t,e){return Bn().memoizedState=[t,e===void 0?null:e],t},useContext:xn,useEffect:pv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Fu(4194308,4,I5.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Fu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Fu(4,2,t,e)},useMemo:function(t,e){var n=Bn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Bn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=NI.bind(null,Je,t),[r.memoizedState,t]},useRef:function(t){var e=Bn();return t={current:t},e.memoizedState=t},useState:dv,useDebugValue:cg,useDeferredValue:function(t){return Bn().memoizedState=t},useTransition:function(){var t=dv(!1),e=t[0];return t=MI.bind(null,t[1]),Bn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Je,i=Bn();if(Ge){if(n===void 0)throw Error(q(407));n=n()}else{if(n=e(),vt===null)throw Error(q(349));Bi&30||y5(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,pv(w5.bind(null,r,s,t),[t]),r.flags|=2048,Ha(9,v5.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Bn(),e=vt.identifierPrefix;if(Ge){var n=lr,r=ar;n=(r&~(1<<32-On(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=$a++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=DI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},zI={readContext:xn,useCallback:A5,useContext:xn,useEffect:ug,useImperativeHandle:R5,useInsertionEffect:b5,useLayoutEffect:x5,useMemo:C5,useReducer:Gf,useRef:T5,useState:function(){return Gf(Ua)},useDebugValue:cg,useDeferredValue:function(t){var e=In();return P5(e,dt.memoizedState,t)},useTransition:function(){var t=Gf(Ua)[0],e=In().memoizedState;return[t,e]},useMutableSource:g5,useSyncExternalStore:_5,useId:k5,unstable_isNewReconciler:!1},jI={readContext:xn,useCallback:A5,useContext:xn,useEffect:ug,useImperativeHandle:R5,useInsertionEffect:b5,useLayoutEffect:x5,useMemo:C5,useReducer:Qf,useRef:T5,useState:function(){return Qf(Ua)},useDebugValue:cg,useDeferredValue:function(t){var e=In();return dt===null?e.memoizedState=t:P5(e,dt.memoizedState,t)},useTransition:function(){var t=Qf(Ua)[0],e=In().memoizedState;return[t,e]},useMutableSource:g5,useSyncExternalStore:_5,useId:k5,unstable_isNewReconciler:!1};function Cn(t,e){if(t&&t.defaultProps){e=et({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function pp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:et({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var bh={isMounted:function(t){return(t=t._reactInternals)?Yi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ht(),i=Gr(t),s=hr(r,i);s.payload=e,n!=null&&(s.callback=n),e=qr(t,s,i),e!==null&&(Dn(e,t,i,r),Nu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ht(),i=Gr(t),s=hr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=qr(t,s,i),e!==null&&(Dn(e,t,i,r),Nu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ht(),r=Gr(t),i=hr(n,r);i.tag=2,e!=null&&(i.callback=e),e=qr(t,i,r),e!==null&&(Dn(e,t,r,n),Nu(e,t,r))}};function mv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Na(n,r)||!Na(i,s):!0}function M5(t,e,n){var r=!1,i=ri,s=e.contextType;return typeof s=="object"&&s!==null?s=xn(s):(i=tn(e)?zi:Ft.current,r=e.contextTypes,s=(r=r!=null)?js(t,i):ri),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=bh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function gv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&bh.enqueueReplaceState(e,e.state,null)}function mp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},ng(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=xn(s):(s=tn(e)?zi:Ft.current,i.context=js(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(pp(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&bh.enqueueReplaceState(i,i.state,null),wc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Hs(t,e){try{var n="",r=e;do n+=p8(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Yf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function gp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var BI=typeof WeakMap=="function"?WeakMap:Map;function N5(t,e,n){n=hr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){xc||(xc=!0,Ip=r),gp(t,e)},n}function V5(t,e,n){n=hr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){gp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){gp(t,e),typeof r!="function"&&(Kr===null?Kr=new Set([this]):Kr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function _v(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new BI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=tR.bind(null,t,e,n),e.then(t,t))}function yv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function vv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=hr(-1,1),e.tag=2,qr(n,e,1))),n.lanes|=1),t)}var $I=wr.ReactCurrentOwner,Zt=!1;function Ut(t,e,n,r){e.child=t===null?f5(e,null,n,r):$s(e,t.child,n,r)}function wv(t,e,n,r,i){n=n.render;var s=e.ref;return ks(e,i),r=ag(t,e,n,r,s,i),n=lg(),t!==null&&!Zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,gr(t,e,i)):(Ge&&n&&Qm(e),e.flags|=1,Ut(t,e,r,i),e.child)}function Ev(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!yg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,F5(t,e,s,r,i)):(t=$u(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Na,n(o,r)&&t.ref===e.ref)return gr(t,e,i)}return e.flags|=1,t=Qr(s,r),t.ref=e.ref,t.return=e,e.child=t}function F5(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Na(s,r)&&t.ref===e.ref)if(Zt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Zt=!0);else return e.lanes=t.lanes,gr(t,e,i)}return _p(t,e,n,r,i)}function z5(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},je(xs,ln),ln|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,je(xs,ln),ln|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,je(xs,ln),ln|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,je(xs,ln),ln|=r;return Ut(t,e,i,n),e.child}function j5(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function _p(t,e,n,r,i){var s=tn(n)?zi:Ft.current;return s=js(e,s),ks(e,i),n=ag(t,e,n,r,s,i),r=lg(),t!==null&&!Zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,gr(t,e,i)):(Ge&&r&&Qm(e),e.flags|=1,Ut(t,e,n,i),e.child)}function Sv(t,e,n,r,i){if(tn(n)){var s=!0;mc(e)}else s=!1;if(ks(e,i),e.stateNode===null)zu(t,e),M5(e,n,r),mp(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=xn(u):(u=tn(n)?zi:Ft.current,u=js(e,u));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&gv(e,o,r,u),Pr=!1;var d=e.memoizedState;o.state=d,wc(e,r,o,i),l=e.memoizedState,a!==r||d!==l||en.current||Pr?(typeof h=="function"&&(pp(e,n,h,r),l=e.memoizedState),(a=Pr||mv(e,n,a,r,d,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,p5(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Cn(e.type,a),o.props=u,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=xn(l):(l=tn(n)?zi:Ft.current,l=js(e,l));var m=n.getDerivedStateFromProps;(h=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&gv(e,o,r,l),Pr=!1,d=e.memoizedState,o.state=d,wc(e,r,o,i);var _=e.memoizedState;a!==f||d!==_||en.current||Pr?(typeof m=="function"&&(pp(e,n,m,r),_=e.memoizedState),(u=Pr||mv(e,n,u,r,d,_,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return yp(t,e,n,r,s,i)}function yp(t,e,n,r,i,s){j5(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&av(e,n,!1),gr(t,e,s);r=e.stateNode,$I.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=$s(e,t.child,null,s),e.child=$s(e,null,a,s)):Ut(t,e,a,s),e.memoizedState=r.state,i&&av(e,n,!0),e.child}function B5(t){var e=t.stateNode;e.pendingContext?ov(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ov(t,e.context,!1),rg(t,e.containerInfo)}function Tv(t,e,n,r,i){return Bs(),Xm(i),e.flags|=256,Ut(t,e,n,r),e.child}var vp={dehydrated:null,treeContext:null,retryLane:0};function wp(t){return{baseLanes:t,cachePool:null,transitions:null}}function $5(t,e,n){var r=e.pendingProps,i=Xe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),je(Xe,i&1),t===null)return fp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Rh(o,r,0,null),t=Ni(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=wp(n),e.memoizedState=vp,t):hg(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return UI(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Qr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Qr(a,s):(s=Ni(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?wp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=vp,r}return s=t.child,t=s.sibling,r=Qr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function hg(t,e){return e=Rh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ru(t,e,n,r){return r!==null&&Xm(r),$s(e,t.child,null,n),t=hg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function UI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Yf(Error(q(422))),ru(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Rh({mode:"visible",children:r.children},i,0,null),s=Ni(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&$s(e,t.child,null,o),e.child.memoizedState=wp(o),e.memoizedState=vp,s);if(!(e.mode&1))return ru(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(q(419)),r=Yf(s,r,void 0),ru(t,e,o,r)}if(a=(o&t.childLanes)!==0,Zt||a){if(r=vt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,mr(t,i),Dn(r,t,i,-1))}return _g(),r=Yf(Error(q(421))),ru(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=nR.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,cn=Wr(i.nextSibling),fn=e,Ge=!0,kn=null,t!==null&&(yn[vn++]=ar,yn[vn++]=lr,yn[vn++]=ji,ar=t.id,lr=t.overflow,ji=e),e=hg(e,r.children),e.flags|=4096,e)}function bv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),dp(t.return,e,n)}function Xf(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function U5(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ut(t,e,r.children,n),r=Xe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&bv(t,n,e);else if(t.tag===19)bv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(je(Xe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ec(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Xf(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ec(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Xf(e,!0,n,null,s);break;case"together":Xf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function zu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function gr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),$i|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(q(153));if(e.child!==null){for(t=e.child,n=Qr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Qr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function HI(t,e,n){switch(e.tag){case 3:B5(e),Bs();break;case 5:m5(e);break;case 1:tn(e.type)&&mc(e);break;case 4:rg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;je(yc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(je(Xe,Xe.current&1),e.flags|=128,null):n&e.child.childLanes?$5(t,e,n):(je(Xe,Xe.current&1),t=gr(t,e,n),t!==null?t.sibling:null);je(Xe,Xe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return U5(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),je(Xe,Xe.current),r)break;return null;case 22:case 23:return e.lanes=0,z5(t,e,n)}return gr(t,e,n)}var H5,Ep,W5,q5;H5=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ep=function(){};W5=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Li(qn.current);var s=null;switch(n){case"input":i=Ud(t,i),r=Ud(t,r),s=[];break;case"select":i=et({},i,{value:void 0}),r=et({},r,{value:void 0}),s=[];break;case"textarea":i=qd(t,i),r=qd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=dc)}Gd(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ca.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ca.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ue("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};q5=function(t,e,n,r){n!==r&&(e.flags|=4)};function Wo(t,e){if(!Ge)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ot(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function WI(t,e,n){var r=e.pendingProps;switch(Ym(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(e),null;case 1:return tn(e.type)&&pc(),Ot(e),null;case 3:return r=e.stateNode,Us(),qe(en),qe(Ft),sg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(tu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,kn!==null&&(Cp(kn),kn=null))),Ep(t,e),Ot(e),null;case 5:ig(e);var i=Li(Ba.current);if(n=e.type,t!==null&&e.stateNode!=null)W5(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(q(166));return Ot(e),null}if(t=Li(qn.current),tu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Hn]=e,r[za]=s,t=(e.mode&1)!==0,n){case"dialog":Ue("cancel",r),Ue("close",r);break;case"iframe":case"object":case"embed":Ue("load",r);break;case"video":case"audio":for(i=0;i<ra.length;i++)Ue(ra[i],r);break;case"source":Ue("error",r);break;case"img":case"image":case"link":Ue("error",r),Ue("load",r);break;case"details":Ue("toggle",r);break;case"input":Oy(r,s),Ue("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ue("invalid",r);break;case"textarea":My(r,s),Ue("invalid",r)}Gd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&eu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&eu(r.textContent,a,t),i=["children",""+a]):Ca.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ue("scroll",r)}switch(n){case"input":ql(r),Dy(r,s,!0);break;case"textarea":ql(r),Ny(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=dc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ww(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Hn]=e,t[za]=r,H5(t,e,!1,!1),e.stateNode=t;e:{switch(o=Qd(n,r),n){case"dialog":Ue("cancel",t),Ue("close",t),i=r;break;case"iframe":case"object":case"embed":Ue("load",t),i=r;break;case"video":case"audio":for(i=0;i<ra.length;i++)Ue(ra[i],t);i=r;break;case"source":Ue("error",t),i=r;break;case"img":case"image":case"link":Ue("error",t),Ue("load",t),i=r;break;case"details":Ue("toggle",t),i=r;break;case"input":Oy(t,r),i=Ud(t,r),Ue("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=et({},r,{value:void 0}),Ue("invalid",t);break;case"textarea":My(t,r),i=qd(t,r),Ue("invalid",t);break;default:i=r}Gd(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Tw(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ew(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Pa(t,l):typeof l=="number"&&Pa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ca.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ue("scroll",t):l!=null&&Mm(t,s,l,o))}switch(n){case"input":ql(t),Dy(t,r,!1);break;case"textarea":ql(t),Ny(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ni(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Rs(t,!!r.multiple,s,!1):r.defaultValue!=null&&Rs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=dc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ot(e),null;case 6:if(t&&e.stateNode!=null)q5(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(q(166));if(n=Li(Ba.current),Li(qn.current),tu(e)){if(r=e.stateNode,n=e.memoizedProps,r[Hn]=e,(s=r.nodeValue!==n)&&(t=fn,t!==null))switch(t.tag){case 3:eu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&eu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Hn]=e,e.stateNode=r}return Ot(e),null;case 13:if(qe(Xe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ge&&cn!==null&&e.mode&1&&!(e.flags&128))c5(),Bs(),e.flags|=98560,s=!1;else if(s=tu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(q(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(q(317));s[Hn]=e}else Bs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ot(e),s=!1}else kn!==null&&(Cp(kn),kn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Xe.current&1?pt===0&&(pt=3):_g())),e.updateQueue!==null&&(e.flags|=4),Ot(e),null);case 4:return Us(),Ep(t,e),t===null&&Va(e.stateNode.containerInfo),Ot(e),null;case 10:return eg(e.type._context),Ot(e),null;case 17:return tn(e.type)&&pc(),Ot(e),null;case 19:if(qe(Xe),s=e.memoizedState,s===null)return Ot(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Wo(s,!1);else{if(pt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ec(t),o!==null){for(e.flags|=128,Wo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return je(Xe,Xe.current&1|2),e.child}t=t.sibling}s.tail!==null&&lt()>Ws&&(e.flags|=128,r=!0,Wo(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ec(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Wo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ge)return Ot(e),null}else 2*lt()-s.renderingStartTime>Ws&&n!==1073741824&&(e.flags|=128,r=!0,Wo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=lt(),e.sibling=null,n=Xe.current,je(Xe,r?n&1|2:n&1),e):(Ot(e),null);case 22:case 23:return gg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?ln&1073741824&&(Ot(e),e.subtreeFlags&6&&(e.flags|=8192)):Ot(e),null;case 24:return null;case 25:return null}throw Error(q(156,e.tag))}function qI(t,e){switch(Ym(e),e.tag){case 1:return tn(e.type)&&pc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Us(),qe(en),qe(Ft),sg(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ig(e),null;case 13:if(qe(Xe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(q(340));Bs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return qe(Xe),null;case 4:return Us(),null;case 10:return eg(e.type._context),null;case 22:case 23:return gg(),null;case 24:return null;default:return null}}var iu=!1,Nt=!1,KI=typeof WeakSet=="function"?WeakSet:Set,re=null;function bs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){rt(t,e,r)}else n.current=null}function Sp(t,e,n){try{n()}catch(r){rt(t,e,r)}}var xv=!1;function GI(t,e){if(sp=cc,t=Xw(),Gm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,h=0,f=t,d=null;t:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)d=f,f=m;for(;;){if(f===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++h===r&&(l=o),(m=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(op={focusedElem:t,selectionRange:n},cc=!1,re=e;re!==null;)if(e=re,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,re=t;else for(;re!==null;){e=re;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,E=_.memoizedState,w=e.stateNode,v=w.getSnapshotBeforeUpdate(e.elementType===e.type?y:Cn(e.type,y),E);w.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(q(163))}}catch(C){rt(e,e.return,C)}if(t=e.sibling,t!==null){t.return=e.return,re=t;break}re=e.return}return _=xv,xv=!1,_}function _a(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Sp(e,n,s)}i=i.next}while(i!==r)}}function xh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Tp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function K5(t){var e=t.alternate;e!==null&&(t.alternate=null,K5(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Hn],delete e[za],delete e[up],delete e[PI],delete e[kI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function G5(t){return t.tag===5||t.tag===3||t.tag===4}function Iv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||G5(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function bp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=dc));else if(r!==4&&(t=t.child,t!==null))for(bp(t,e,n),t=t.sibling;t!==null;)bp(t,e,n),t=t.sibling}function xp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(xp(t,e,n),t=t.sibling;t!==null;)xp(t,e,n),t=t.sibling}var St=null,Pn=!1;function Ir(t,e,n){for(n=n.child;n!==null;)Q5(t,e,n),n=n.sibling}function Q5(t,e,n){if(Wn&&typeof Wn.onCommitFiberUnmount=="function")try{Wn.onCommitFiberUnmount(_h,n)}catch{}switch(n.tag){case 5:Nt||bs(n,e);case 6:var r=St,i=Pn;St=null,Ir(t,e,n),St=r,Pn=i,St!==null&&(Pn?(t=St,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):St.removeChild(n.stateNode));break;case 18:St!==null&&(Pn?(t=St,n=n.stateNode,t.nodeType===8?Hf(t.parentNode,n):t.nodeType===1&&Hf(t,n),Da(t)):Hf(St,n.stateNode));break;case 4:r=St,i=Pn,St=n.stateNode.containerInfo,Pn=!0,Ir(t,e,n),St=r,Pn=i;break;case 0:case 11:case 14:case 15:if(!Nt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Sp(n,e,o),i=i.next}while(i!==r)}Ir(t,e,n);break;case 1:if(!Nt&&(bs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){rt(n,e,a)}Ir(t,e,n);break;case 21:Ir(t,e,n);break;case 22:n.mode&1?(Nt=(r=Nt)||n.memoizedState!==null,Ir(t,e,n),Nt=r):Ir(t,e,n);break;default:Ir(t,e,n)}}function Rv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new KI),e.forEach(function(r){var i=rR.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function An(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:St=a.stateNode,Pn=!1;break e;case 3:St=a.stateNode.containerInfo,Pn=!0;break e;case 4:St=a.stateNode.containerInfo,Pn=!0;break e}a=a.return}if(St===null)throw Error(q(160));Q5(s,o,i),St=null,Pn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){rt(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Y5(e,t),e=e.sibling}function Y5(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(An(e,t),zn(t),r&4){try{_a(3,t,t.return),xh(3,t)}catch(y){rt(t,t.return,y)}try{_a(5,t,t.return)}catch(y){rt(t,t.return,y)}}break;case 1:An(e,t),zn(t),r&512&&n!==null&&bs(n,n.return);break;case 5:if(An(e,t),zn(t),r&512&&n!==null&&bs(n,n.return),t.flags&32){var i=t.stateNode;try{Pa(i,"")}catch(y){rt(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&yw(i,s),Qd(a,o);var u=Qd(a,s);for(o=0;o<l.length;o+=2){var h=l[o],f=l[o+1];h==="style"?Tw(i,f):h==="dangerouslySetInnerHTML"?Ew(i,f):h==="children"?Pa(i,f):Mm(i,h,f,u)}switch(a){case"input":Hd(i,s);break;case"textarea":vw(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Rs(i,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?Rs(i,!!s.multiple,s.defaultValue,!0):Rs(i,!!s.multiple,s.multiple?[]:"",!1))}i[za]=s}catch(y){rt(t,t.return,y)}}break;case 6:if(An(e,t),zn(t),r&4){if(t.stateNode===null)throw Error(q(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){rt(t,t.return,y)}}break;case 3:if(An(e,t),zn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Da(e.containerInfo)}catch(y){rt(t,t.return,y)}break;case 4:An(e,t),zn(t);break;case 13:An(e,t),zn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(pg=lt())),r&4&&Rv(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Nt=(u=Nt)||h,An(e,t),Nt=u):An(e,t),zn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(re=t,h=t.child;h!==null;){for(f=re=h;re!==null;){switch(d=re,m=d.child,d.tag){case 0:case 11:case 14:case 15:_a(4,d,d.return);break;case 1:bs(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){rt(r,n,y)}}break;case 5:bs(d,d.return);break;case 22:if(d.memoizedState!==null){Cv(f);continue}}m!==null?(m.return=d,re=m):Cv(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Sw("display",o))}catch(y){rt(t,t.return,y)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){rt(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:An(e,t),zn(t),r&4&&Rv(t);break;case 21:break;default:An(e,t),zn(t)}}function zn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(G5(n)){var r=n;break e}n=n.return}throw Error(q(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Pa(i,""),r.flags&=-33);var s=Iv(t);xp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Iv(t);bp(t,a,o);break;default:throw Error(q(161))}}catch(l){rt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function QI(t,e,n){re=t,X5(t)}function X5(t,e,n){for(var r=(t.mode&1)!==0;re!==null;){var i=re,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||iu;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Nt;a=iu;var u=Nt;if(iu=o,(Nt=l)&&!u)for(re=i;re!==null;)o=re,l=o.child,o.tag===22&&o.memoizedState!==null?Pv(i):l!==null?(l.return=o,re=l):Pv(i);for(;s!==null;)re=s,X5(s),s=s.sibling;re=i,iu=a,Nt=u}Av(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,re=s):Av(t)}}function Av(t){for(;re!==null;){var e=re;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Nt||xh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Nt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Cn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&fv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}fv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Da(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(q(163))}Nt||e.flags&512&&Tp(e)}catch(d){rt(e,e.return,d)}}if(e===t){re=null;break}if(n=e.sibling,n!==null){n.return=e.return,re=n;break}re=e.return}}function Cv(t){for(;re!==null;){var e=re;if(e===t){re=null;break}var n=e.sibling;if(n!==null){n.return=e.return,re=n;break}re=e.return}}function Pv(t){for(;re!==null;){var e=re;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{xh(4,e)}catch(l){rt(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){rt(e,i,l)}}var s=e.return;try{Tp(e)}catch(l){rt(e,s,l)}break;case 5:var o=e.return;try{Tp(e)}catch(l){rt(e,o,l)}}}catch(l){rt(e,e.return,l)}if(e===t){re=null;break}var a=e.sibling;if(a!==null){a.return=e.return,re=a;break}re=e.return}}var YI=Math.ceil,bc=wr.ReactCurrentDispatcher,fg=wr.ReactCurrentOwner,Sn=wr.ReactCurrentBatchConfig,Ae=0,vt=null,ht=null,It=0,ln=0,xs=di(0),pt=0,Wa=null,$i=0,Ih=0,dg=0,ya=null,Xt=null,pg=0,Ws=1/0,ir=null,xc=!1,Ip=null,Kr=null,su=!1,Mr=null,Ic=0,va=0,Rp=null,ju=-1,Bu=0;function Ht(){return Ae&6?lt():ju!==-1?ju:ju=lt()}function Gr(t){return t.mode&1?Ae&2&&It!==0?It&-It:OI.transition!==null?(Bu===0&&(Bu=Mw()),Bu):(t=Ne,t!==0||(t=window.event,t=t===void 0?16:$w(t.type)),t):1}function Dn(t,e,n,r){if(50<va)throw va=0,Rp=null,Error(q(185));cl(t,n,r),(!(Ae&2)||t!==vt)&&(t===vt&&(!(Ae&2)&&(Ih|=n),pt===4&&Or(t,It)),nn(t,r),n===1&&Ae===0&&!(e.mode&1)&&(Ws=lt()+500,Sh&&pi()))}function nn(t,e){var n=t.callbackNode;O8(t,e);var r=uc(t,t===vt?It:0);if(r===0)n!==null&&zy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&zy(n),e===1)t.tag===0?LI(kv.bind(null,t)):a5(kv.bind(null,t)),AI(function(){!(Ae&6)&&pi()}),n=null;else{switch(Nw(r)){case 1:n=jm;break;case 4:n=Ow;break;case 16:n=lc;break;case 536870912:n=Dw;break;default:n=lc}n=sE(n,J5.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function J5(t,e){if(ju=-1,Bu=0,Ae&6)throw Error(q(327));var n=t.callbackNode;if(Ls()&&t.callbackNode!==n)return null;var r=uc(t,t===vt?It:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Rc(t,r);else{e=r;var i=Ae;Ae|=2;var s=eE();(vt!==t||It!==e)&&(ir=null,Ws=lt()+500,Mi(t,e));do try{ZI();break}catch(a){Z5(t,a)}while(!0);Zm(),bc.current=s,Ae=i,ht!==null?e=0:(vt=null,It=0,e=pt)}if(e!==0){if(e===2&&(i=ep(t),i!==0&&(r=i,e=Ap(t,i))),e===1)throw n=Wa,Mi(t,0),Or(t,r),nn(t,lt()),n;if(e===6)Or(t,r);else{if(i=t.current.alternate,!(r&30)&&!XI(i)&&(e=Rc(t,r),e===2&&(s=ep(t),s!==0&&(r=s,e=Ap(t,s))),e===1))throw n=Wa,Mi(t,0),Or(t,r),nn(t,lt()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(q(345));case 2:Ii(t,Xt,ir);break;case 3:if(Or(t,r),(r&130023424)===r&&(e=pg+500-lt(),10<e)){if(uc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ht(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=lp(Ii.bind(null,t,Xt,ir),e);break}Ii(t,Xt,ir);break;case 4:if(Or(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-On(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=lt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*YI(r/1960))-r,10<r){t.timeoutHandle=lp(Ii.bind(null,t,Xt,ir),r);break}Ii(t,Xt,ir);break;case 5:Ii(t,Xt,ir);break;default:throw Error(q(329))}}}return nn(t,lt()),t.callbackNode===n?J5.bind(null,t):null}function Ap(t,e){var n=ya;return t.current.memoizedState.isDehydrated&&(Mi(t,e).flags|=256),t=Rc(t,e),t!==2&&(e=Xt,Xt=n,e!==null&&Cp(e)),t}function Cp(t){Xt===null?Xt=t:Xt.push.apply(Xt,t)}function XI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Nn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Or(t,e){for(e&=~dg,e&=~Ih,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-On(e),r=1<<n;t[n]=-1,e&=~r}}function kv(t){if(Ae&6)throw Error(q(327));Ls();var e=uc(t,0);if(!(e&1))return nn(t,lt()),null;var n=Rc(t,e);if(t.tag!==0&&n===2){var r=ep(t);r!==0&&(e=r,n=Ap(t,r))}if(n===1)throw n=Wa,Mi(t,0),Or(t,e),nn(t,lt()),n;if(n===6)throw Error(q(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ii(t,Xt,ir),nn(t,lt()),null}function mg(t,e){var n=Ae;Ae|=1;try{return t(e)}finally{Ae=n,Ae===0&&(Ws=lt()+500,Sh&&pi())}}function Ui(t){Mr!==null&&Mr.tag===0&&!(Ae&6)&&Ls();var e=Ae;Ae|=1;var n=Sn.transition,r=Ne;try{if(Sn.transition=null,Ne=1,t)return t()}finally{Ne=r,Sn.transition=n,Ae=e,!(Ae&6)&&pi()}}function gg(){ln=xs.current,qe(xs)}function Mi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,RI(n)),ht!==null)for(n=ht.return;n!==null;){var r=n;switch(Ym(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&pc();break;case 3:Us(),qe(en),qe(Ft),sg();break;case 5:ig(r);break;case 4:Us();break;case 13:qe(Xe);break;case 19:qe(Xe);break;case 10:eg(r.type._context);break;case 22:case 23:gg()}n=n.return}if(vt=t,ht=t=Qr(t.current,null),It=ln=e,pt=0,Wa=null,dg=Ih=$i=0,Xt=ya=null,ki!==null){for(e=0;e<ki.length;e++)if(n=ki[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ki=null}return t}function Z5(t,e){do{var n=ht;try{if(Zm(),Vu.current=Tc,Sc){for(var r=Je.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Sc=!1}if(Bi=0,yt=dt=Je=null,ga=!1,$a=0,fg.current=null,n===null||n.return===null){pt=1,Wa=e,ht=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=It,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var d=h.alternate;d?(h.updateQueue=d.updateQueue,h.memoizedState=d.memoizedState,h.lanes=d.lanes):(h.updateQueue=null,h.memoizedState=null)}var m=yv(o);if(m!==null){m.flags&=-257,vv(m,o,a,s,e),m.mode&1&&_v(s,u,e),e=m,l=u;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){_v(s,u,e),_g();break e}l=Error(q(426))}}else if(Ge&&a.mode&1){var E=yv(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),vv(E,o,a,s,e),Xm(Hs(l,a));break e}}s=l=Hs(l,a),pt!==4&&(pt=2),ya===null?ya=[s]:ya.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var w=N5(s,l,e);hv(s,w);break e;case 1:a=l;var v=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Kr===null||!Kr.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var C=V5(s,a,e);hv(s,C);break e}}s=s.return}while(s!==null)}nE(n)}catch(O){e=O,ht===n&&n!==null&&(ht=n=n.return);continue}break}while(!0)}function eE(){var t=bc.current;return bc.current=Tc,t===null?Tc:t}function _g(){(pt===0||pt===3||pt===2)&&(pt=4),vt===null||!($i&268435455)&&!(Ih&268435455)||Or(vt,It)}function Rc(t,e){var n=Ae;Ae|=2;var r=eE();(vt!==t||It!==e)&&(ir=null,Mi(t,e));do try{JI();break}catch(i){Z5(t,i)}while(!0);if(Zm(),Ae=n,bc.current=r,ht!==null)throw Error(q(261));return vt=null,It=0,pt}function JI(){for(;ht!==null;)tE(ht)}function ZI(){for(;ht!==null&&!b8();)tE(ht)}function tE(t){var e=iE(t.alternate,t,ln);t.memoizedProps=t.pendingProps,e===null?nE(t):ht=e,fg.current=null}function nE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=qI(n,e),n!==null){n.flags&=32767,ht=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{pt=6,ht=null;return}}else if(n=WI(n,e,ln),n!==null){ht=n;return}if(e=e.sibling,e!==null){ht=e;return}ht=e=t}while(e!==null);pt===0&&(pt=5)}function Ii(t,e,n){var r=Ne,i=Sn.transition;try{Sn.transition=null,Ne=1,eR(t,e,n,r)}finally{Sn.transition=i,Ne=r}return null}function eR(t,e,n,r){do Ls();while(Mr!==null);if(Ae&6)throw Error(q(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(q(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(D8(t,s),t===vt&&(ht=vt=null,It=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||su||(su=!0,sE(lc,function(){return Ls(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Sn.transition,Sn.transition=null;var o=Ne;Ne=1;var a=Ae;Ae|=4,fg.current=null,GI(t,n),Y5(n,t),wI(op),cc=!!sp,op=sp=null,t.current=n,QI(n),x8(),Ae=a,Ne=o,Sn.transition=s}else t.current=n;if(su&&(su=!1,Mr=t,Ic=i),s=t.pendingLanes,s===0&&(Kr=null),A8(n.stateNode),nn(t,lt()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(xc)throw xc=!1,t=Ip,Ip=null,t;return Ic&1&&t.tag!==0&&Ls(),s=t.pendingLanes,s&1?t===Rp?va++:(va=0,Rp=t):va=0,pi(),null}function Ls(){if(Mr!==null){var t=Nw(Ic),e=Sn.transition,n=Ne;try{if(Sn.transition=null,Ne=16>t?16:t,Mr===null)var r=!1;else{if(t=Mr,Mr=null,Ic=0,Ae&6)throw Error(q(331));var i=Ae;for(Ae|=4,re=t.current;re!==null;){var s=re,o=s.child;if(re.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(re=u;re!==null;){var h=re;switch(h.tag){case 0:case 11:case 15:_a(8,h,s)}var f=h.child;if(f!==null)f.return=h,re=f;else for(;re!==null;){h=re;var d=h.sibling,m=h.return;if(K5(h),h===u){re=null;break}if(d!==null){d.return=m,re=d;break}re=m}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var E=y.sibling;y.sibling=null,y=E}while(y!==null)}}re=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,re=o;else e:for(;re!==null;){if(s=re,s.flags&2048)switch(s.tag){case 0:case 11:case 15:_a(9,s,s.return)}var w=s.sibling;if(w!==null){w.return=s.return,re=w;break e}re=s.return}}var v=t.current;for(re=v;re!==null;){o=re;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,re=S;else e:for(o=v;re!==null;){if(a=re,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:xh(9,a)}}catch(O){rt(a,a.return,O)}if(a===o){re=null;break e}var C=a.sibling;if(C!==null){C.return=a.return,re=C;break e}re=a.return}}if(Ae=i,pi(),Wn&&typeof Wn.onPostCommitFiberRoot=="function")try{Wn.onPostCommitFiberRoot(_h,t)}catch{}r=!0}return r}finally{Ne=n,Sn.transition=e}}return!1}function Lv(t,e,n){e=Hs(n,e),e=N5(t,e,1),t=qr(t,e,1),e=Ht(),t!==null&&(cl(t,1,e),nn(t,e))}function rt(t,e,n){if(t.tag===3)Lv(t,t,n);else for(;e!==null;){if(e.tag===3){Lv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Kr===null||!Kr.has(r))){t=Hs(n,t),t=V5(e,t,1),e=qr(e,t,1),t=Ht(),e!==null&&(cl(e,1,t),nn(e,t));break}}e=e.return}}function tR(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ht(),t.pingedLanes|=t.suspendedLanes&n,vt===t&&(It&n)===n&&(pt===4||pt===3&&(It&130023424)===It&&500>lt()-pg?Mi(t,0):dg|=n),nn(t,e)}function rE(t,e){e===0&&(t.mode&1?(e=Ql,Ql<<=1,!(Ql&130023424)&&(Ql=4194304)):e=1);var n=Ht();t=mr(t,e),t!==null&&(cl(t,e,n),nn(t,n))}function nR(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),rE(t,n)}function rR(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(q(314))}r!==null&&r.delete(e),rE(t,n)}var iE;iE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||en.current)Zt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Zt=!1,HI(t,e,n);Zt=!!(t.flags&131072)}else Zt=!1,Ge&&e.flags&1048576&&l5(e,_c,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;zu(t,e),t=e.pendingProps;var i=js(e,Ft.current);ks(e,n),i=ag(null,e,r,t,i,n);var s=lg();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,tn(r)?(s=!0,mc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ng(e),i.updater=bh,e.stateNode=i,i._reactInternals=e,mp(e,r,t,n),e=yp(null,e,r,!0,s,n)):(e.tag=0,Ge&&s&&Qm(e),Ut(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(zu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=sR(r),t=Cn(r,t),i){case 0:e=_p(null,e,r,t,n);break e;case 1:e=Sv(null,e,r,t,n);break e;case 11:e=wv(null,e,r,t,n);break e;case 14:e=Ev(null,e,r,Cn(r.type,t),n);break e}throw Error(q(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Cn(r,i),_p(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Cn(r,i),Sv(t,e,r,i,n);case 3:e:{if(B5(e),t===null)throw Error(q(387));r=e.pendingProps,s=e.memoizedState,i=s.element,p5(t,e),wc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Hs(Error(q(423)),e),e=Tv(t,e,r,n,i);break e}else if(r!==i){i=Hs(Error(q(424)),e),e=Tv(t,e,r,n,i);break e}else for(cn=Wr(e.stateNode.containerInfo.firstChild),fn=e,Ge=!0,kn=null,n=f5(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Bs(),r===i){e=gr(t,e,n);break e}Ut(t,e,r,n)}e=e.child}return e;case 5:return m5(e),t===null&&fp(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,ap(r,i)?o=null:s!==null&&ap(r,s)&&(e.flags|=32),j5(t,e),Ut(t,e,o,n),e.child;case 6:return t===null&&fp(e),null;case 13:return $5(t,e,n);case 4:return rg(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=$s(e,null,r,n):Ut(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Cn(r,i),wv(t,e,r,i,n);case 7:return Ut(t,e,e.pendingProps,n),e.child;case 8:return Ut(t,e,e.pendingProps.children,n),e.child;case 12:return Ut(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,je(yc,r._currentValue),r._currentValue=o,s!==null)if(Nn(s.value,o)){if(s.children===i.children&&!en.current){e=gr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=hr(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),dp(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(q(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),dp(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ut(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ks(e,n),i=xn(i),r=r(i),e.flags|=1,Ut(t,e,r,n),e.child;case 14:return r=e.type,i=Cn(r,e.pendingProps),i=Cn(r.type,i),Ev(t,e,r,i,n);case 15:return F5(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Cn(r,i),zu(t,e),e.tag=1,tn(r)?(t=!0,mc(e)):t=!1,ks(e,n),M5(e,r,i),mp(e,r,i,n),yp(null,e,r,!0,t,n);case 19:return U5(t,e,n);case 22:return z5(t,e,n)}throw Error(q(156,e.tag))};function sE(t,e){return Lw(t,e)}function iR(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function En(t,e,n,r){return new iR(t,e,n,r)}function yg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function sR(t){if(typeof t=="function")return yg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Vm)return 11;if(t===Fm)return 14}return 2}function Qr(t,e){var n=t.alternate;return n===null?(n=En(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function $u(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")yg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ms:return Ni(n.children,i,s,e);case Nm:o=8,i|=8;break;case zd:return t=En(12,n,e,i|2),t.elementType=zd,t.lanes=s,t;case jd:return t=En(13,n,e,i),t.elementType=jd,t.lanes=s,t;case Bd:return t=En(19,n,e,i),t.elementType=Bd,t.lanes=s,t;case mw:return Rh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case dw:o=10;break e;case pw:o=9;break e;case Vm:o=11;break e;case Fm:o=14;break e;case Cr:o=16,r=null;break e}throw Error(q(130,t==null?t:typeof t,""))}return e=En(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ni(t,e,n,r){return t=En(7,t,r,e),t.lanes=n,t}function Rh(t,e,n,r){return t=En(22,t,r,e),t.elementType=mw,t.lanes=n,t.stateNode={isHidden:!1},t}function Jf(t,e,n){return t=En(6,t,null,e),t.lanes=n,t}function Zf(t,e,n){return e=En(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function oR(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Of(0),this.expirationTimes=Of(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Of(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function vg(t,e,n,r,i,s,o,a,l){return t=new oR(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=En(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ng(s),t}function aR(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ps,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function oE(t){if(!t)return ri;t=t._reactInternals;e:{if(Yi(t)!==t||t.tag!==1)throw Error(q(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(tn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(q(171))}if(t.tag===1){var n=t.type;if(tn(n))return o5(t,n,e)}return e}function aE(t,e,n,r,i,s,o,a,l){return t=vg(n,r,!0,t,i,s,o,a,l),t.context=oE(null),n=t.current,r=Ht(),i=Gr(n),s=hr(r,i),s.callback=e??null,qr(n,s,i),t.current.lanes=i,cl(t,i,r),nn(t,r),t}function Ah(t,e,n,r){var i=e.current,s=Ht(),o=Gr(i);return n=oE(n),e.context===null?e.context=n:e.pendingContext=n,e=hr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=qr(i,e,o),t!==null&&(Dn(t,i,o,s),Nu(t,i,o)),o}function Ac(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ov(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function wg(t,e){Ov(t,e),(t=t.alternate)&&Ov(t,e)}function lR(){return null}var lE=typeof reportError=="function"?reportError:function(t){console.error(t)};function Eg(t){this._internalRoot=t}Ch.prototype.render=Eg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(q(409));Ah(t,e,null,null)};Ch.prototype.unmount=Eg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ui(function(){Ah(null,t,null,null)}),e[pr]=null}};function Ch(t){this._internalRoot=t}Ch.prototype.unstable_scheduleHydration=function(t){if(t){var e=zw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Lr.length&&e!==0&&e<Lr[n].priority;n++);Lr.splice(n,0,t),n===0&&Bw(t)}};function Sg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ph(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Dv(){}function uR(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Ac(o);s.call(u)}}var o=aE(e,r,t,0,null,!1,!1,"",Dv);return t._reactRootContainer=o,t[pr]=o.current,Va(t.nodeType===8?t.parentNode:t),Ui(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Ac(l);a.call(u)}}var l=vg(t,0,!1,null,null,!1,!1,"",Dv);return t._reactRootContainer=l,t[pr]=l.current,Va(t.nodeType===8?t.parentNode:t),Ui(function(){Ah(e,l,n,r)}),l}function kh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Ac(o);a.call(l)}}Ah(e,o,t,i)}else o=uR(n,e,t,i,r);return Ac(o)}Vw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=na(e.pendingLanes);n!==0&&(Bm(e,n|1),nn(e,lt()),!(Ae&6)&&(Ws=lt()+500,pi()))}break;case 13:Ui(function(){var r=mr(t,1);if(r!==null){var i=Ht();Dn(r,t,1,i)}}),wg(t,1)}};$m=function(t){if(t.tag===13){var e=mr(t,134217728);if(e!==null){var n=Ht();Dn(e,t,134217728,n)}wg(t,134217728)}};Fw=function(t){if(t.tag===13){var e=Gr(t),n=mr(t,e);if(n!==null){var r=Ht();Dn(n,t,e,r)}wg(t,e)}};zw=function(){return Ne};jw=function(t,e){var n=Ne;try{return Ne=t,e()}finally{Ne=n}};Xd=function(t,e,n){switch(e){case"input":if(Hd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Eh(r);if(!i)throw Error(q(90));_w(r),Hd(r,i)}}}break;case"textarea":vw(t,n);break;case"select":e=n.value,e!=null&&Rs(t,!!n.multiple,e,!1)}};Iw=mg;Rw=Ui;var cR={usingClientEntryPoint:!1,Events:[fl,vs,Eh,bw,xw,mg]},qo={findFiberByHostInstance:Pi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hR={bundleType:qo.bundleType,version:qo.version,rendererPackageName:qo.rendererPackageName,rendererConfig:qo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Pw(t),t===null?null:t.stateNode},findFiberByHostInstance:qo.findFiberByHostInstance||lR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ou=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ou.isDisabled&&ou.supportsFiber)try{_h=ou.inject(hR),Wn=ou}catch{}}mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cR;mn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sg(e))throw Error(q(200));return aR(t,e,null,n)};mn.createRoot=function(t,e){if(!Sg(t))throw Error(q(299));var n=!1,r="",i=lE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=vg(t,1,!1,null,null,n,!1,r,i),t[pr]=e.current,Va(t.nodeType===8?t.parentNode:t),new Eg(e)};mn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(q(188)):(t=Object.keys(t).join(","),Error(q(268,t)));return t=Pw(e),t=t===null?null:t.stateNode,t};mn.flushSync=function(t){return Ui(t)};mn.hydrate=function(t,e,n){if(!Ph(e))throw Error(q(200));return kh(null,t,e,!0,n)};mn.hydrateRoot=function(t,e,n){if(!Sg(t))throw Error(q(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=lE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=aE(e,null,t,1,n??null,i,!1,s,o),t[pr]=e.current,Va(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ch(e)};mn.render=function(t,e,n){if(!Ph(e))throw Error(q(200));return kh(null,t,e,!1,n)};mn.unmountComponentAtNode=function(t){if(!Ph(t))throw Error(q(40));return t._reactRootContainer?(Ui(function(){kh(null,null,t,!1,function(){t._reactRootContainer=null,t[pr]=null})}),!0):!1};mn.unstable_batchedUpdates=mg;mn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ph(n))throw Error(q(200));if(t==null||t._reactInternals===void 0)throw Error(q(38));return kh(t,e,n,!1,r)};mn.version="18.3.1-next-f1338f8080-20240426";function uE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(uE)}catch(t){console.error(t)}}uE(),uw.exports=mn;var fR=uw.exports,Mv=fR;Vd.createRoot=Mv.createRoot,Vd.hydrateRoot=Mv.hydrateRoot;var Tg={};Object.defineProperty(Tg,"__esModule",{value:!0});Tg.parse=vR;Tg.serialize=wR;const dR=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,pR=/^[\u0021-\u003A\u003C-\u007E]*$/,mR=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,gR=/^[\u0020-\u003A\u003D-\u007E]*$/,_R=Object.prototype.toString,yR=(()=>{const t=function(){};return t.prototype=Object.create(null),t})();function vR(t,e){const n=new yR,r=t.length;if(r<2)return n;const i=(e==null?void 0:e.decode)||ER;let s=0;do{const o=t.indexOf("=",s);if(o===-1)break;const a=t.indexOf(";",s),l=a===-1?r:a;if(o>l){s=t.lastIndexOf(";",o-1)+1;continue}const u=Nv(t,s,o),h=Vv(t,o,u),f=t.slice(u,h);if(n[f]===void 0){let d=Nv(t,o+1,l),m=Vv(t,l,d);const _=i(t.slice(d,m));n[f]=_}s=l+1}while(s<r);return n}function Nv(t,e,n){do{const r=t.charCodeAt(e);if(r!==32&&r!==9)return e}while(++e<n);return n}function Vv(t,e,n){for(;e>n;){const r=t.charCodeAt(--e);if(r!==32&&r!==9)return e+1}return n}function wR(t,e,n){const r=(n==null?void 0:n.encode)||encodeURIComponent;if(!dR.test(t))throw new TypeError(`argument name is invalid: ${t}`);const i=r(e);if(!pR.test(i))throw new TypeError(`argument val is invalid: ${e}`);let s=t+"="+i;if(!n)return s;if(n.maxAge!==void 0){if(!Number.isInteger(n.maxAge))throw new TypeError(`option maxAge is invalid: ${n.maxAge}`);s+="; Max-Age="+n.maxAge}if(n.domain){if(!mR.test(n.domain))throw new TypeError(`option domain is invalid: ${n.domain}`);s+="; Domain="+n.domain}if(n.path){if(!gR.test(n.path))throw new TypeError(`option path is invalid: ${n.path}`);s+="; Path="+n.path}if(n.expires){if(!SR(n.expires)||!Number.isFinite(n.expires.valueOf()))throw new TypeError(`option expires is invalid: ${n.expires}`);s+="; Expires="+n.expires.toUTCString()}if(n.httpOnly&&(s+="; HttpOnly"),n.secure&&(s+="; Secure"),n.partitioned&&(s+="; Partitioned"),n.priority)switch(typeof n.priority=="string"?n.priority.toLowerCase():void 0){case"low":s+="; Priority=Low";break;case"medium":s+="; Priority=Medium";break;case"high":s+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${n.priority}`)}if(n.sameSite)switch(typeof n.sameSite=="string"?n.sameSite.toLowerCase():n.sameSite){case!0:case"strict":s+="; SameSite=Strict";break;case"lax":s+="; SameSite=Lax";break;case"none":s+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${n.sameSite}`)}return s}function ER(t){if(t.indexOf("%")===-1)return t;try{return decodeURIComponent(t)}catch{return t}}function SR(t){return _R.call(t)==="[object Date]"}/**
 * react-router v7.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Fv="popstate";function TR(t={}){function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Pp("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:qa(i)}return xR(e,n,null,t)}function Ze(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Yn(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function bR(){return Math.random().toString(36).substring(2,10)}function zv(t,e){return{usr:t.state,key:t.key,idx:e}}function Pp(t,e,n=null,r){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?po(e):e,state:n,key:e&&e.key||r||bR()}}function qa({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function po(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substring(r),t=t.substring(0,r)),t&&(e.pathname=t)}return e}function xR(t,e,n,r={}){let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a="POP",l=null,u=h();u==null&&(u=0,o.replaceState({...o.state,idx:u},""));function h(){return(o.state||{idx:null}).idx}function f(){a="POP";let E=h(),w=E==null?null:E-u;u=E,l&&l({action:a,location:y.location,delta:w})}function d(E,w){a="PUSH";let v=Pp(y.location,E,w);u=h()+1;let S=zv(v,u),C=y.createHref(v);try{o.pushState(S,"",C)}catch(O){if(O instanceof DOMException&&O.name==="DataCloneError")throw O;i.location.assign(C)}s&&l&&l({action:a,location:y.location,delta:1})}function m(E,w){a="REPLACE";let v=Pp(y.location,E,w);u=h();let S=zv(v,u),C=y.createHref(v);o.replaceState(S,"",C),s&&l&&l({action:a,location:y.location,delta:0})}function _(E){let w=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof E=="string"?E:qa(E);return v=v.replace(/ $/,"%20"),Ze(w,`No window.location.(origin|href) available to create URL for href: ${v}`),new URL(v,w)}let y={get action(){return a},get location(){return t(i,o)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Fv,f),l=E,()=>{i.removeEventListener(Fv,f),l=null}},createHref(E){return e(i,E)},createURL:_,encodeLocation(E){let w=_(E);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:d,replace:m,go(E){return o.go(E)}};return y}function cE(t,e,n="/"){return IR(t,e,n,!1)}function IR(t,e,n,r){let i=typeof e=="string"?po(e):e,s=ii(i.pathname||"/",n);if(s==null)return null;let o=hE(t);RR(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let u=FR(s);a=NR(o[l],u,r)}return a}function hE(t,e=[],n=[],r=""){let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Ze(l.relativePath.startsWith(r),`Absolute route path "${l.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),l.relativePath=l.relativePath.slice(r.length));let u=fr([r,l.relativePath]),h=n.concat(l);s.children&&s.children.length>0&&(Ze(s.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${u}".`),hE(s.children,e,h,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:DR(u,s.index),routesMeta:h})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of fE(s.path))i(s,o,l)}),e}function fE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=fE(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function RR(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:MR(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var AR=/^:[\w-]+$/,CR=3,PR=2,kR=1,LR=10,OR=-2,jv=t=>t==="*";function DR(t,e){let n=t.split("/"),r=n.length;return n.some(jv)&&(r+=OR),e&&(r+=PR),n.filter(i=>!jv(i)).reduce((i,s)=>i+(AR.test(s)?CR:s===""?kR:LR),r)}function MR(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function NR(t,e,n=!1){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,h=s==="/"?e:e.slice(s.length)||"/",f=Cc({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},h),d=l.route;if(!f&&u&&n&&!r[r.length-1].route.index&&(f=Cc({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},h)),!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:fr([s,f.pathname]),pathnameBase:$R(fr([s,f.pathnameBase])),route:d}),f.pathnameBase!=="/"&&(s=fr([s,f.pathnameBase]))}return o}function Cc(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=VR(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,{paramName:h,isOptional:f},d)=>{if(h==="*"){let _=a[d]||"";o=s.slice(0,s.length-_.length).replace(/(.)\/+$/,"$1")}const m=a[d];return f&&!m?u[h]=void 0:u[h]=(m||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function VR(t,e=!1,n=!0){Yn(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function FR(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Yn(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function ii(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function zR(t,e="/"){let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?po(t):t;return{pathname:n?n.startsWith("/")?n:jR(n,e):e,search:UR(r),hash:HR(i)}}function jR(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ed(t,e,n,r){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function BR(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function dE(t){let e=BR(t);return e.map((n,r)=>r===e.length-1?n.pathname:n.pathnameBase)}function pE(t,e,n,r=!1){let i;typeof t=="string"?i=po(t):(i={...t},Ze(!i.pathname||!i.pathname.includes("?"),ed("?","pathname","search",i)),Ze(!i.pathname||!i.pathname.includes("#"),ed("#","pathname","hash",i)),Ze(!i.search||!i.search.includes("#"),ed("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),f-=1;i.pathname=d.join("/")}a=f>=0?e[f]:"/"}let l=zR(i,a),u=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||h)&&(l.pathname+="/"),l}var fr=t=>t.join("/").replace(/\/\/+/g,"/"),$R=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),UR=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,HR=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function WR(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var mE=["POST","PUT","PATCH","DELETE"];new Set(mE);var qR=["GET",...mE];new Set(qR);var mo=F.createContext(null);mo.displayName="DataRouter";var Lh=F.createContext(null);Lh.displayName="DataRouterState";var gE=F.createContext({isTransitioning:!1});gE.displayName="ViewTransition";var KR=F.createContext(new Map);KR.displayName="Fetchers";var GR=F.createContext(null);GR.displayName="Await";var Jn=F.createContext(null);Jn.displayName="Navigation";var pl=F.createContext(null);pl.displayName="Location";var Er=F.createContext({outlet:null,matches:[],isDataRoute:!1});Er.displayName="Route";var bg=F.createContext(null);bg.displayName="RouteError";function QR(t,{relative:e}={}){Ze(ml(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=F.useContext(Jn),{hash:i,pathname:s,search:o}=gl(t,{relative:e}),a=s;return n!=="/"&&(a=s==="/"?n:fr([n,s])),r.createHref({pathname:a,search:o,hash:i})}function ml(){return F.useContext(pl)!=null}function Xi(){return Ze(ml(),"useLocation() may be used only in the context of a <Router> component."),F.useContext(pl).location}var _E="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function yE(t){F.useContext(Jn).static||F.useLayoutEffect(t)}function vE(){let{isDataRoute:t}=F.useContext(Er);return t?lA():YR()}function YR(){Ze(ml(),"useNavigate() may be used only in the context of a <Router> component.");let t=F.useContext(mo),{basename:e,navigator:n}=F.useContext(Jn),{matches:r}=F.useContext(Er),{pathname:i}=Xi(),s=JSON.stringify(dE(r)),o=F.useRef(!1);return yE(()=>{o.current=!0}),F.useCallback((l,u={})=>{if(Yn(o.current,_E),!o.current)return;if(typeof l=="number"){n.go(l);return}let h=pE(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:fr([e,h.pathname])),(u.replace?n.replace:n.push)(h,u.state,u)},[e,n,s,i,t])}F.createContext(null);function gl(t,{relative:e}={}){let{matches:n}=F.useContext(Er),{pathname:r}=Xi(),i=JSON.stringify(dE(n));return F.useMemo(()=>pE(t,JSON.parse(i),r,e==="path"),[t,i,r,e])}function XR(t,e){return wE(t,e)}function wE(t,e,n,r){var v;Ze(ml(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i,static:s}=F.useContext(Jn),{matches:o}=F.useContext(Er),a=o[o.length-1],l=a?a.params:{},u=a?a.pathname:"/",h=a?a.pathnameBase:"/",f=a&&a.route;{let S=f&&f.path||"";EE(u,!f||S.endsWith("*")||S.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${u}" (under <Route path="${S}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${S}"> to <Route path="${S==="/"?"*":`${S}/*`}">.`)}let d=Xi(),m;if(e){let S=typeof e=="string"?po(e):e;Ze(h==="/"||((v=S.pathname)==null?void 0:v.startsWith(h)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${S.pathname}" was given in the \`location\` prop.`),m=S}else m=d;let _=m.pathname||"/",y=_;if(h!=="/"){let S=h.replace(/^\//,"").split("/");y="/"+_.replace(/^\//,"").split("/").slice(S.length).join("/")}let E=!s&&n&&n.matches&&n.matches.length>0?n.matches:cE(t,{pathname:y});Yn(f||E!=null,`No routes matched location "${m.pathname}${m.search}${m.hash}" `),Yn(E==null||E[E.length-1].route.element!==void 0||E[E.length-1].route.Component!==void 0||E[E.length-1].route.lazy!==void 0,`Matched leaf route at location "${m.pathname}${m.search}${m.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let w=nA(E&&E.map(S=>Object.assign({},S,{params:Object.assign({},l,S.params),pathname:fr([h,i.encodeLocation?i.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?h:fr([h,i.encodeLocation?i.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),o,n,r);return e&&w?F.createElement(pl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...m},navigationType:"POP"}},w):w}function JR(){let t=aA(),e=WR(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r},o=null;return console.error("Error handled by React Router default ErrorBoundary:",t),o=F.createElement(F.Fragment,null,F.createElement("p",null,"💿 Hey developer 👋"),F.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",F.createElement("code",{style:s},"ErrorBoundary")," or"," ",F.createElement("code",{style:s},"errorElement")," prop on your route.")),F.createElement(F.Fragment,null,F.createElement("h2",null,"Unexpected Application Error!"),F.createElement("h3",{style:{fontStyle:"italic"}},e),n?F.createElement("pre",{style:i},n):null,o)}var ZR=F.createElement(JR,null),eA=class extends F.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){console.error("React Router caught the following error during render",t,e)}render(){return this.state.error!==void 0?F.createElement(Er.Provider,{value:this.props.routeContext},F.createElement(bg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function tA({routeContext:t,match:e,children:n}){let r=F.useContext(mo);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),F.createElement(Er.Provider,{value:t},n)}function nA(t,e=[],n=null,r=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let i=t,s=n==null?void 0:n.errors;if(s!=null){let l=i.findIndex(u=>u.route.id&&(s==null?void 0:s[u.route.id])!==void 0);Ze(l>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),i=i.slice(0,Math.min(i.length,l+1))}let o=!1,a=-1;if(n)for(let l=0;l<i.length;l++){let u=i[l];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(a=l),u.route.id){let{loaderData:h,errors:f}=n,d=u.route.loader&&!h.hasOwnProperty(u.route.id)&&(!f||f[u.route.id]===void 0);if(u.route.lazy||d){o=!0,a>=0?i=i.slice(0,a+1):i=[i[0]];break}}}return i.reduceRight((l,u,h)=>{let f,d=!1,m=null,_=null;n&&(f=s&&u.route.id?s[u.route.id]:void 0,m=u.route.errorElement||ZR,o&&(a<0&&h===0?(EE("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,_=null):a===h&&(d=!0,_=u.route.hydrateFallbackElement||null)));let y=e.concat(i.slice(0,h+1)),E=()=>{let w;return f?w=m:d?w=_:u.route.Component?w=F.createElement(u.route.Component,null):u.route.element?w=u.route.element:w=l,F.createElement(tA,{match:u,routeContext:{outlet:l,matches:y,isDataRoute:n!=null},children:w})};return n&&(u.route.ErrorBoundary||u.route.errorElement||h===0)?F.createElement(eA,{location:n.location,revalidation:n.revalidation,component:m,error:f,children:E(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):E()},null)}function xg(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function rA(t){let e=F.useContext(mo);return Ze(e,xg(t)),e}function iA(t){let e=F.useContext(Lh);return Ze(e,xg(t)),e}function sA(t){let e=F.useContext(Er);return Ze(e,xg(t)),e}function Ig(t){let e=sA(t),n=e.matches[e.matches.length-1];return Ze(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function oA(){return Ig("useRouteId")}function aA(){var r;let t=F.useContext(bg),e=iA("useRouteError"),n=Ig("useRouteError");return t!==void 0?t:(r=e.errors)==null?void 0:r[n]}function lA(){let{router:t}=rA("useNavigate"),e=Ig("useNavigate"),n=F.useRef(!1);return yE(()=>{n.current=!0}),F.useCallback(async(i,s={})=>{Yn(n.current,_E),n.current&&(typeof i=="number"?t.navigate(i):await t.navigate(i,{fromRouteId:e,...s}))},[t,e])}var Bv={};function EE(t,e,n){!e&&!Bv[t]&&(Bv[t]=!0,Yn(!1,n))}F.memo(uA);function uA({routes:t,future:e,state:n}){return wE(t,void 0,n,e)}function Uu(t){Ze(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function cA({basename:t="/",children:e=null,location:n,navigationType:r="POP",navigator:i,static:s=!1}){Ze(!ml(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let o=t.replace(/^\/*/,"/"),a=F.useMemo(()=>({basename:o,navigator:i,static:s,future:{}}),[o,i,s]);typeof n=="string"&&(n=po(n));let{pathname:l="/",search:u="",hash:h="",state:f=null,key:d="default"}=n,m=F.useMemo(()=>{let _=ii(l,o);return _==null?null:{location:{pathname:_,search:u,hash:h,state:f,key:d},navigationType:r}},[o,l,u,h,f,d,r]);return Yn(m!=null,`<Router basename="${o}"> is not able to match the URL "${l}${u}${h}" because it does not start with the basename, so the <Router> won't render anything.`),m==null?null:F.createElement(Jn.Provider,{value:a},F.createElement(pl.Provider,{children:e,value:m}))}function hA({children:t,location:e}){return XR(kp(t),e)}function kp(t,e=[]){let n=[];return F.Children.forEach(t,(r,i)=>{if(!F.isValidElement(r))return;let s=[...e,i];if(r.type===F.Fragment){n.push.apply(n,kp(r.props.children,s));return}Ze(r.type===Uu,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ze(!r.props.index||!r.props.children,"An index route cannot have child routes.");let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=kp(r.props.children,s)),n.push(o)}),n}var Hu="get",Wu="application/x-www-form-urlencoded";function Oh(t){return t!=null&&typeof t.tagName=="string"}function fA(t){return Oh(t)&&t.tagName.toLowerCase()==="button"}function dA(t){return Oh(t)&&t.tagName.toLowerCase()==="form"}function pA(t){return Oh(t)&&t.tagName.toLowerCase()==="input"}function mA(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function gA(t,e){return t.button===0&&(!e||e==="_self")&&!mA(t)}var au=null;function _A(){if(au===null)try{new FormData(document.createElement("form"),0),au=!1}catch{au=!0}return au}var yA=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function td(t){return t!=null&&!yA.has(t)?(Yn(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Wu}"`),null):t}function vA(t,e){let n,r,i,s,o;if(dA(t)){let a=t.getAttribute("action");r=a?ii(a,e):null,n=t.getAttribute("method")||Hu,i=td(t.getAttribute("enctype"))||Wu,s=new FormData(t)}else if(fA(t)||pA(t)&&(t.type==="submit"||t.type==="image")){let a=t.form;if(a==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=t.getAttribute("formaction")||a.getAttribute("action");if(r=l?ii(l,e):null,n=t.getAttribute("formmethod")||a.getAttribute("method")||Hu,i=td(t.getAttribute("formenctype"))||td(a.getAttribute("enctype"))||Wu,s=new FormData(a,t),!_A()){let{name:u,type:h,value:f}=t;if(h==="image"){let d=u?`${u}.`:"";s.append(`${d}x`,"0"),s.append(`${d}y`,"0")}else u&&s.append(u,f)}}else{if(Oh(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Hu,r=null,i=Wu,o=t}return s&&i==="text/plain"&&(o=s,s=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:s,body:o}}function Rg(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}async function wA(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function EA(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function SA(t,e,n){let r=await Promise.all(t.map(async i=>{let s=e.routes[i.route.id];if(s){let o=await wA(s,n);return o.links?o.links():[]}return[]}));return IA(r.flat(1).filter(EA).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function $v(t,e,n,r,i,s){let o=(l,u)=>n[u]?l.route.id!==n[u].route.id:!0,a=(l,u)=>{var h;return n[u].pathname!==l.pathname||((h=n[u].route.path)==null?void 0:h.endsWith("*"))&&n[u].params["*"]!==l.params["*"]};return s==="assets"?e.filter((l,u)=>o(l,u)||a(l,u)):s==="data"?e.filter((l,u)=>{var f;let h=r.routes[l.route.id];if(!h||!h.hasLoader)return!1;if(o(l,u)||a(l,u))return!0;if(l.route.shouldRevalidate){let d=l.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((f=n[0])==null?void 0:f.params)||{},nextUrl:new URL(t,window.origin),nextParams:l.params,defaultShouldRevalidate:!0});if(typeof d=="boolean")return d}return!0}):[]}function TA(t,e,{includeHydrateFallback:n}={}){return bA(t.map(r=>{let i=e.routes[r.route.id];if(!i)return[];let s=[i.module];return i.clientActionModule&&(s=s.concat(i.clientActionModule)),i.clientLoaderModule&&(s=s.concat(i.clientLoaderModule)),n&&i.hydrateFallbackModule&&(s=s.concat(i.hydrateFallbackModule)),i.imports&&(s=s.concat(i.imports)),s}).flat(1))}function bA(t){return[...new Set(t)]}function xA(t){let e={},n=Object.keys(t).sort();for(let r of n)e[r]=t[r];return e}function IA(t,e){let n=new Set;return new Set(e),t.reduce((r,i)=>{let s=JSON.stringify(xA(i));return n.has(s)||(n.add(s),r.push({key:s,link:i})),r},[])}function RA(t){let e=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function AA(){let t=F.useContext(mo);return Rg(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function CA(){let t=F.useContext(Lh);return Rg(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Ag=F.createContext(void 0);Ag.displayName="FrameworkContext";function SE(){let t=F.useContext(Ag);return Rg(t,"You must render this element inside a <HydratedRouter> element"),t}function PA(t,e){let n=F.useContext(Ag),[r,i]=F.useState(!1),[s,o]=F.useState(!1),{onFocus:a,onBlur:l,onMouseEnter:u,onMouseLeave:h,onTouchStart:f}=e,d=F.useRef(null);F.useEffect(()=>{if(t==="render"&&o(!0),t==="viewport"){let y=w=>{w.forEach(v=>{o(v.isIntersecting)})},E=new IntersectionObserver(y,{threshold:.5});return d.current&&E.observe(d.current),()=>{E.disconnect()}}},[t]),F.useEffect(()=>{if(r){let y=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(y)}}},[r]);let m=()=>{i(!0)},_=()=>{i(!1),o(!1)};return n?t!=="intent"?[s,d,{}]:[s,d,{onFocus:Ko(a,m),onBlur:Ko(l,_),onMouseEnter:Ko(u,m),onMouseLeave:Ko(h,_),onTouchStart:Ko(f,m)}]:[!1,d,{}]}function Ko(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function kA({page:t,...e}){let{router:n}=AA(),r=F.useMemo(()=>cE(n.routes,t,n.basename),[n.routes,t,n.basename]);return r?F.createElement(OA,{page:t,matches:r,...e}):null}function LA(t){let{manifest:e,routeModules:n}=SE(),[r,i]=F.useState([]);return F.useEffect(()=>{let s=!1;return SA(t,e,n).then(o=>{s||i(o)}),()=>{s=!0}},[t,e,n]),r}function OA({page:t,matches:e,...n}){let r=Xi(),{manifest:i,routeModules:s}=SE(),{loaderData:o,matches:a}=CA(),l=F.useMemo(()=>$v(t,e,a,i,r,"data"),[t,e,a,i,r]),u=F.useMemo(()=>$v(t,e,a,i,r,"assets"),[t,e,a,i,r]),h=F.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let m=new Set,_=!1;if(e.forEach(E=>{var v;let w=i.routes[E.route.id];!w||!w.hasLoader||(!l.some(S=>S.route.id===E.route.id)&&E.route.id in o&&((v=s[E.route.id])!=null&&v.shouldRevalidate)||w.hasClientLoader?_=!0:m.add(E.route.id))}),m.size===0)return[];let y=RA(t);return _&&m.size>0&&y.searchParams.set("_routes",e.filter(E=>m.has(E.route.id)).map(E=>E.route.id).join(",")),[y.pathname+y.search]},[o,r,i,l,e,t,s]),f=F.useMemo(()=>TA(u,i),[u,i]),d=LA(u);return F.createElement(F.Fragment,null,h.map(m=>F.createElement("link",{key:m,rel:"prefetch",as:"fetch",href:m,...n})),f.map(m=>F.createElement("link",{key:m,rel:"modulepreload",href:m,...n})),d.map(({key:m,link:_})=>F.createElement("link",{key:m,..._})))}function DA(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var TE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{TE&&(window.__reactRouterVersion="7.2.0")}catch{}function MA({basename:t,children:e,window:n}){let r=F.useRef();r.current==null&&(r.current=TR({window:n,v5Compat:!0}));let i=r.current,[s,o]=F.useState({action:i.action,location:i.location}),a=F.useCallback(l=>{F.startTransition(()=>o(l))},[o]);return F.useLayoutEffect(()=>i.listen(a),[i,a]),F.createElement(cA,{basename:t,children:e,location:s.location,navigationType:s.action,navigator:i})}var bE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qs=F.forwardRef(function({onClick:e,discover:n="render",prefetch:r="none",relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:h,viewTransition:f,...d},m){let{basename:_}=F.useContext(Jn),y=typeof u=="string"&&bE.test(u),E,w=!1;if(typeof u=="string"&&y&&(E=u,TE))try{let b=new URL(window.location.href),x=u.startsWith("//")?new URL(b.protocol+u):new URL(u),P=ii(x.pathname,_);x.origin===b.origin&&P!=null?u=P+x.search+x.hash:w=!0}catch{Yn(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let v=QR(u,{relative:i}),[S,C,O]=PA(r,d),D=zA(u,{replace:o,state:a,target:l,preventScrollReset:h,relative:i,viewTransition:f});function I(b){e&&e(b),b.defaultPrevented||D(b)}let T=F.createElement("a",{...d,...O,href:E||v,onClick:w||s?e:I,ref:DA(m,C),target:l,"data-discover":!y&&n==="render"?"true":void 0});return S&&!y?F.createElement(F.Fragment,null,T,F.createElement(kA,{page:v})):T});qs.displayName="Link";var NA=F.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:r="",end:i=!1,style:s,to:o,viewTransition:a,children:l,...u},h){let f=gl(o,{relative:u.relative}),d=Xi(),m=F.useContext(Lh),{navigator:_,basename:y}=F.useContext(Jn),E=m!=null&&HA(f)&&a===!0,w=_.encodeLocation?_.encodeLocation(f).pathname:f.pathname,v=d.pathname,S=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;n||(v=v.toLowerCase(),S=S?S.toLowerCase():null,w=w.toLowerCase()),S&&y&&(S=ii(S,y)||S);const C=w!=="/"&&w.endsWith("/")?w.length-1:w.length;let O=v===w||!i&&v.startsWith(w)&&v.charAt(C)==="/",D=S!=null&&(S===w||!i&&S.startsWith(w)&&S.charAt(w.length)==="/"),I={isActive:O,isPending:D,isTransitioning:E},T=O?e:void 0,b;typeof r=="function"?b=r(I):b=[r,O?"active":null,D?"pending":null,E?"transitioning":null].filter(Boolean).join(" ");let x=typeof s=="function"?s(I):s;return F.createElement(qs,{...u,"aria-current":T,className:b,ref:h,style:x,to:o,viewTransition:a},typeof l=="function"?l(I):l)});NA.displayName="NavLink";var VA=F.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:r,replace:i,state:s,method:o=Hu,action:a,onSubmit:l,relative:u,preventScrollReset:h,viewTransition:f,...d},m)=>{let _=$A(),y=UA(a,{relative:u}),E=o.toLowerCase()==="get"?"get":"post",w=typeof a=="string"&&bE.test(a),v=S=>{if(l&&l(S),S.defaultPrevented)return;S.preventDefault();let C=S.nativeEvent.submitter,O=(C==null?void 0:C.getAttribute("formmethod"))||o;_(C||S.currentTarget,{fetcherKey:e,method:O,navigate:n,replace:i,state:s,relative:u,preventScrollReset:h,viewTransition:f})};return F.createElement("form",{ref:m,method:E,action:y,onSubmit:r?l:v,...d,"data-discover":!w&&t==="render"?"true":void 0})});VA.displayName="Form";function FA(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function xE(t){let e=F.useContext(mo);return Ze(e,FA(t)),e}function zA(t,{target:e,replace:n,state:r,preventScrollReset:i,relative:s,viewTransition:o}={}){let a=vE(),l=Xi(),u=gl(t,{relative:s});return F.useCallback(h=>{if(gA(h,e)){h.preventDefault();let f=n!==void 0?n:qa(l)===qa(u);a(t,{replace:f,state:r,preventScrollReset:i,relative:s,viewTransition:o})}},[l,a,u,n,r,e,t,i,s,o])}var jA=0,BA=()=>`__${String(++jA)}__`;function $A(){let{router:t}=xE("useSubmit"),{basename:e}=F.useContext(Jn),n=oA();return F.useCallback(async(r,i={})=>{let{action:s,method:o,encType:a,formData:l,body:u}=vA(r,e);if(i.navigate===!1){let h=i.fetcherKey||BA();await t.fetch(h,n,i.action||s,{preventScrollReset:i.preventScrollReset,formData:l,body:u,formMethod:i.method||o,formEncType:i.encType||a,flushSync:i.flushSync})}else await t.navigate(i.action||s,{preventScrollReset:i.preventScrollReset,formData:l,body:u,formMethod:i.method||o,formEncType:i.encType||a,replace:i.replace,state:i.state,fromRouteId:n,flushSync:i.flushSync,viewTransition:i.viewTransition})},[t,e,n])}function UA(t,{relative:e}={}){let{basename:n}=F.useContext(Jn),r=F.useContext(Er);Ze(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),s={...gl(t||".",{relative:e})},o=Xi();if(t==null){s.search=o.search;let a=new URLSearchParams(s.search),l=a.getAll("index");if(l.some(h=>h==="")){a.delete("index"),l.filter(f=>f).forEach(f=>a.append("index",f));let h=a.toString();s.search=h?`?${h}`:""}}return(!t||t===".")&&i.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(s.pathname=s.pathname==="/"?n:fr([n,s.pathname])),qa(s)}function HA(t,e={}){let n=F.useContext(gE);Ze(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=xE("useViewTransitionState"),i=gl(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=ii(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=ii(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Cc(i.pathname,o)!=null||Cc(i.pathname,s)!=null}new TextEncoder;var IE={exports:{}};(function(t){const e=(()=>{const o={},a={font:"Standard",fontPath:"./fonts"};function l(M,z){let L={},V,j,U,ee,Y=[[16384,"vLayout",2],[8192,"vLayout",1],[4096,"vRule5",!0],[2048,"vRule4",!0],[1024,"vRule3",!0],[512,"vRule2",!0],[256,"vRule1",!0],[128,"hLayout",2],[64,"hLayout",1],[32,"hRule6",!0],[16,"hRule5",!0],[8,"hRule4",!0],[4,"hRule3",!0],[2,"hRule2",!0],[1,"hRule1",!0]];for(V=z!==null?z:M,j=0,U=Y.length;j<U;)ee=Y[j],V>=ee[0]?(V=V-ee[0],L[ee[1]]=typeof L[ee[1]]>"u"?ee[2]:L[ee[1]]):ee[1]!=="vLayout"&&ee[1]!=="hLayout"&&(L[ee[1]]=!1),j++;return typeof L.hLayout>"u"?M===0?L.hLayout=1:M===-1?L.hLayout=0:L.hRule1||L.hRule2||L.hRule3||L.hRule4||L.hRule5||L.hRule6?L.hLayout=3:L.hLayout=2:L.hLayout===2&&(L.hRule1||L.hRule2||L.hRule3||L.hRule4||L.hRule5||L.hRule6)&&(L.hLayout=3),typeof L.vLayout>"u"?L.vRule1||L.vRule2||L.vRule3||L.vRule4||L.vRule5?L.vLayout=3:L.vLayout=0:L.vLayout===2&&(L.vRule1||L.vRule2||L.vRule3||L.vRule4||L.vRule5)&&(L.vLayout=3),L}function u(M,z,L){return M===z&&M!==L?M:!1}function h(M,z){let L="|/\\[]{}()<>";if(M==="_"){if(L.indexOf(z)!==-1)return z}else if(z==="_"&&L.indexOf(M)!==-1)return M;return!1}function f(M,z){let L="| /\\ [] {} () <>",V=L.indexOf(M),j=L.indexOf(z);if(V!==-1&&j!==-1&&V!==j&&Math.abs(V-j)!==1){const U=Math.max(V,j),ee=U+1;return L.substring(U,ee)}return!1}function d(M,z){let L="[] {} ()",V=L.indexOf(M),j=L.indexOf(z);return V!==-1&&j!==-1&&Math.abs(V-j)<=1?"|":!1}function m(M,z){let L="/\\ \\/ ><",V={0:"|",3:"Y",6:"X"},j=L.indexOf(M),U=L.indexOf(z);return j!==-1&&U!==-1&&U-j===1?V[j]:!1}function _(M,z,L){return M===L&&z===L?L:!1}function y(M,z){return M===z?M:!1}function E(M,z){let L="|/\\[]{}()<>";if(M==="_"){if(L.indexOf(z)!==-1)return z}else if(z==="_"&&L.indexOf(M)!==-1)return M;return!1}function w(M,z){let L="| /\\ [] {} () <>",V=L.indexOf(M),j=L.indexOf(z);if(V!==-1&&j!==-1&&V!==j&&Math.abs(V-j)!==1){const U=Math.max(V,j),ee=U+1;return L.substring(U,ee)}return!1}function v(M,z){return M==="-"&&z==="_"||M==="_"&&z==="-"?"=":!1}function S(M,z){return M==="|"&&z==="|"?"|":!1}function C(M,z,L){return z===" "||z===""||z===L&&M!==" "?M:z}function O(M,z,L){if(L.fittingRules.vLayout===0)return"invalid";let V,j=Math.min(M.length,z.length),U,ee,Y=!1,K;if(j===0)return"invalid";for(V=0;V<j;V++)if(U=M.substring(V,V+1),ee=z.substring(V,V+1),U!==" "&&ee!==" "){if(L.fittingRules.vLayout===1)return"invalid";if(L.fittingRules.vLayout===2)return"end";if(S(U,ee)){Y=Y||!1;continue}if(K=!1,K=L.fittingRules.vRule1?y(U,ee):K,K=!K&&L.fittingRules.vRule2?E(U,ee):K,K=!K&&L.fittingRules.vRule3?w(U,ee):K,K=!K&&L.fittingRules.vRule4?v(U,ee):K,Y=!0,!K)return"invalid"}return Y?"end":"valid"}function D(M,z,L){let V=M.length,j=M.length;z.length;let U,ee,Y,K=1,se,Oe,ke;for(;K<=V;){for(U=M.slice(Math.max(0,j-K),j),ee=z.slice(0,Math.min(V,K)),Y=ee.length,ke="",se=0;se<Y;se++)if(Oe=O(U[se],ee[se],L),Oe==="end")ke=Oe;else if(Oe==="invalid"){ke=Oe;break}else ke===""&&(ke="valid");if(ke==="invalid"){K--;break}if(ke==="end")break;ke==="valid"&&K++}return Math.min(V,K)}function I(M,z,L){let V,j=Math.min(M.length,z.length),U,ee,Y="",K;for(V=0;V<j;V++)U=M.substring(V,V+1),ee=z.substring(V,V+1),U!==" "&&ee!==" "?L.fittingRules.vLayout===1||L.fittingRules.vLayout===2?Y+=C(U,ee):(K=!1,K=L.fittingRules.vRule5?S(U,ee):K,K=!K&&L.fittingRules.vRule1?y(U,ee):K,K=!K&&L.fittingRules.vRule2?E(U,ee):K,K=!K&&L.fittingRules.vRule3?w(U,ee):K,K=!K&&L.fittingRules.vRule4?v(U,ee):K,Y+=K):Y+=C(U,ee);return Y}function T(M,z,L,V){let j=M.length,U=z.length,ee=M.slice(0,Math.max(0,j-L)),Y=M.slice(Math.max(0,j-L),j),K=z.slice(0,Math.min(L,U)),se,Oe,ke,Ce=[],De,zt=[];for(Oe=Y.length,se=0;se<Oe;se++)se>=U?ke=Y[se]:ke=I(Y[se],K[se],V),Ce.push(ke);return De=z.slice(Math.min(L,U),U),zt.concat(ee,Ce,De)}function b(M,z){let L,V=M.length,j="";for(L=0;L<z;L++)j+=" ";for(L=0;L<V;L++)M[L]+=j}function x(M,z,L){let V=M[0].length,j=z[0].length,U;return V>j?b(z,V-j):j>V&&b(M,j-V),U=D(M,z,L),T(M,z,U,L)}function P(M,z,L){if(L.fittingRules.hLayout===0)return 0;let V,j=M.length,U=z.length,ee=j,Y=1,K=!1,se=!1,Oe,ke,Ce,De;if(j===0)return 0;e:for(;Y<=ee;){const zt=j-Y;for(Oe=M.substring(zt,zt+Y),ke=z.substring(0,Math.min(Y,U)),V=0;V<Math.min(Y,U);V++)if(Ce=Oe.substring(V,V+1),De=ke.substring(V,V+1),Ce!==" "&&De!==" "){if(L.fittingRules.hLayout===1){Y=Y-1;break e}else if(L.fittingRules.hLayout===2){(Ce===L.hardBlank||De===L.hardBlank)&&(Y=Y-1);break e}else if(K=!0,se=!1,se=L.fittingRules.hRule1?u(Ce,De,L.hardBlank):se,se=!se&&L.fittingRules.hRule2?h(Ce,De,L.hardBlank):se,se=!se&&L.fittingRules.hRule3?f(Ce,De,L.hardBlank):se,se=!se&&L.fittingRules.hRule4?d(Ce,De,L.hardBlank):se,se=!se&&L.fittingRules.hRule5?m(Ce,De,L.hardBlank):se,se=!se&&L.fittingRules.hRule6?_(Ce,De,L.hardBlank):se,!se){Y=Y-1;break e}}if(K)break;Y++}return Math.min(ee,Y)}function k(M,z,L,V){let j,U,ee=[],Y,K,se,Oe,ke,Ce,De,zt;for(j=0;j<V.height;j++){De=M[j],zt=z[j],ke=De.length,Ce=zt.length,Y=ke-L,K=De.substr(0,Math.max(0,Y)),se="";const ns=Math.max(0,ke-L);var Sr=De.substring(ns,ns+L),gi=zt.substring(0,Math.min(L,Ce));for(U=0;U<L;U++){var Be=U<ke?Sr.substring(U,U+1):" ",ut=U<Ce?gi.substring(U,U+1):" ";if(Be!==" "&&ut!==" ")if(V.fittingRules.hLayout===1)se+=C(Be,ut,V.hardBlank);else if(V.fittingRules.hLayout===2)se+=C(Be,ut,V.hardBlank);else{var Ve="";Ve=!Ve&&V.fittingRules.hRule1?u(Be,ut,V.hardBlank):Ve,Ve=!Ve&&V.fittingRules.hRule2?h(Be,ut,V.hardBlank):Ve,Ve=!Ve&&V.fittingRules.hRule3?f(Be,ut,V.hardBlank):Ve,Ve=!Ve&&V.fittingRules.hRule4?d(Be,ut,V.hardBlank):Ve,Ve=!Ve&&V.fittingRules.hRule5?m(Be,ut,V.hardBlank):Ve,Ve=!Ve&&V.fittingRules.hRule6?_(Be,ut,V.hardBlank):Ve,Ve=Ve||C(Be,ut,V.hardBlank),se+=Ve}else se+=C(Be,ut,V.hardBlank)}L>=Ce?Oe="":Oe=zt.substring(L,L+Math.max(0,Ce-L)),ee[j]=K+se+Oe}return ee}function A(M){let z=[],L;for(L=0;L<M;L++)z[L]="";return z}const Z=function(M){return Math.max.apply(Math,M.map(function(z,L){return z.length}))};function ce(M,z,L){return M.reduce(function(V,j){return k(V,j.fig,j.overlap,L)},A(z))}function de(M,z,L){const V={};for(let j=M.length;--j;){let U=ce(M.slice(0,j),z,L);if(Z(U)<=L.width){V.outputFigText=U,j<M.length?V.chars=M.slice(j):V.chars=[];break}}return V}function Ee(M,z,L){let V,j,U=0,ee,Y,K,se=L.height,Oe=[],ke,Ce,De=[],zt,Sr,gi,Be,ut;for(Y=A(se),L.width>0&&L.whitespaceBreak&&(Ce={chars:[],overlap:U}),L.printDirection===1&&(M=M.split("").reverse().join("")),K=M.length,V=0;V<K;V++)if(zt=M.substring(V,V+1),Sr=zt.match(/\s/),j=z[zt.charCodeAt(0)],Be=null,j){if(L.fittingRules.hLayout!==0){for(U=1e4,ee=0;ee<L.height;ee++)U=Math.min(U,P(Y[ee],j[ee],L));U=U===1e4?0:U}if(L.width>0&&(L.whitespaceBreak?(gi=ce(Ce.chars.concat([{fig:j,overlap:U}]),se,L),Be=ce(De.concat([{fig:gi,overlap:Ce.overlap}]),se,L),ke=Z(Be)):(Be=k(Y,j,U,L),ke=Z(Be)),ke>=L.width&&V>0&&(L.whitespaceBreak?(Y=ce(De.slice(0,-1),se,L),De.length>1&&(Oe.push(Y),Y=A(se)),De=[]):(Oe.push(Y),Y=A(se)))),L.width>0&&L.whitespaceBreak&&((!Sr||V===K-1)&&Ce.chars.push({fig:j,overlap:U}),Sr||V===K-1)){for(ut=null;Be=ce(Ce.chars,se,L),ke=Z(Be),ke>=L.width;)ut=de(Ce.chars,se,L),Ce={chars:ut.chars},Oe.push(ut.outputFigText);ke>0&&(ut?De.push({fig:Be,overlap:1}):De.push({fig:Be,overlap:Ce.overlap})),Sr&&(De.push({fig:j,overlap:U}),Y=A(se)),V===K-1&&(Y=ce(De,se,L)),Ce={chars:[],overlap:U};continue}Y=k(Y,j,U,L)}return Z(Y)>0&&Oe.push(Y),L.showHardBlanks!==!0&&Oe.forEach(function(Ve){for(K=Ve.length,ee=0;ee<K;ee++)Ve[ee]=Ve[ee].replace(new RegExp("\\"+L.hardBlank,"g")," ")}),Oe}const Q=function(M,z){let L=["hLayout","hRule1","hRule2","hRule3","hRule4","hRule5","hRule6"],V={},j;if(M==="default")for(j=0;j<L.length;j++)V[L[j]]=z.fittingRules[L[j]];else if(M==="full")V={hLayout:0,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(M==="fitted")V={hLayout:1,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(M==="controlled smushing")V={hLayout:3,hRule1:!0,hRule2:!0,hRule3:!0,hRule4:!0,hRule5:!0,hRule6:!0};else if(M==="universal smushing")V={hLayout:2,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else return;return V},ne=function(M,z){let L=["vLayout","vRule1","vRule2","vRule3","vRule4","vRule5"],V={},j;if(M==="default")for(j=0;j<L.length;j++)V[L[j]]=z.fittingRules[L[j]];else if(M==="full")V={vLayout:0,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(M==="fitted")V={vLayout:1,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(M==="controlled smushing")V={vLayout:3,vRule1:!0,vRule2:!0,vRule3:!0,vRule4:!0,vRule5:!0};else if(M==="universal smushing")V={vLayout:2,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else return;return V},oe=function(M,z,L){L=L.replace(/\r\n/g,`
`).replace(/\r/g,`
`);let V=L.split(`
`),j=[],U,ee,Y;for(ee=V.length,U=0;U<ee;U++)j=j.concat(Ee(V[U],o[M],z));for(ee=j.length,Y=j[0],U=1;U<ee;U++)Y=x(Y,j[U],z);return Y?Y.join(`
`):""};function _e(M,z){let L=JSON.parse(JSON.stringify(M)),V,j;if(typeof z.horizontalLayout<"u"){V=Q(z.horizontalLayout,M);for(j in V)V.hasOwnProperty(j)&&(L.fittingRules[j]=V[j])}if(typeof z.verticalLayout<"u"){V=ne(z.verticalLayout,M);for(j in V)V.hasOwnProperty(j)&&(L.fittingRules[j]=V[j])}return L.printDirection=typeof z.printDirection<"u"?z.printDirection:M.printDirection,L.showHardBlanks=z.showHardBlanks||!1,L.width=z.width||-1,L.whitespaceBreak=z.whitespaceBreak||!1,L}const ae=function(M,z,L){return ae.text(M,z,L)};return ae.text=async function(M,z,L){let V="";return M=M+"",typeof arguments[1]=="function"&&(L=z,z={},z.font=a.font),typeof z=="string"?(V=z,z={}):(z=z||{},V=z.font||a.font),await new Promise((j,U)=>{ae.loadFont(V,function(ee,Y){if(ee){U(ee),L&&L(ee);return}const K=oe(V,_e(Y,z),M);j(K),L&&L(null,K)})})},ae.textSync=function(M,z){let L="";M=M+"",typeof z=="string"?(L=z,z={}):(z=z||{},L=z.font||a.font);var V=_e(ae.loadFontSync(L),z);return oe(L,V,M)},ae.metadata=function(M,z){M=M+"",ae.loadFont(M,function(L,V){if(L){z(L);return}z(null,V,o[M].comment)})},ae.defaults=function(M){if(typeof M=="object"&&M!==null)for(var z in M)M.hasOwnProperty(z)&&(a[z]=M[z]);return JSON.parse(JSON.stringify(a))},ae.parseFont=function(M,z){z=z.replace(/\r\n/g,`
`).replace(/\r/g,`
`),o[M]={};var L=z.split(`
`),V=L.splice(0,1)[0].split(" "),j=o[M],U={};if(U.hardBlank=V[0].substr(5,1),U.height=parseInt(V[1],10),U.baseline=parseInt(V[2],10),U.maxLength=parseInt(V[3],10),U.oldLayout=parseInt(V[4],10),U.numCommentLines=parseInt(V[5],10),U.printDirection=V.length>=6?parseInt(V[6],10):0,U.fullLayout=V.length>=7?parseInt(V[7],10):null,U.codeTagCount=V.length>=8?parseInt(V[8],10):null,U.fittingRules=l(U.oldLayout,U.fullLayout),j.options=U,U.hardBlank.length!==1||isNaN(U.height)||isNaN(U.baseline)||isNaN(U.maxLength)||isNaN(U.oldLayout)||isNaN(U.numCommentLines))throw new Error("FIGlet header contains invalid values.");let ee=[],Y;for(Y=32;Y<=126;Y++)ee.push(Y);if(ee=ee.concat(196,214,220,228,246,252,223),L.length<U.numCommentLines+U.height*ee.length)throw new Error("FIGlet file is missing data.");let K,se,Oe=!1;for(j.comment=L.splice(0,U.numCommentLines).join(`
`),j.numChars=0;L.length>0&&j.numChars<ee.length;){for(K=ee[j.numChars],j[K]=L.splice(0,U.height),Y=0;Y<U.height;Y++)typeof j[K][Y]>"u"?j[K][Y]="":(se=new RegExp("\\"+j[K][Y].substr(j[K][Y].length-1,1)+"+$"),j[K][Y]=j[K][Y].replace(se,""));j.numChars++}for(;L.length>0;){if(K=L.splice(0,1)[0].split(" ")[0],/^0[xX][0-9a-fA-F]+$/.test(K))K=parseInt(K,16);else if(/^0[0-7]+$/.test(K))K=parseInt(K,8);else if(/^[0-9]+$/.test(K))K=parseInt(K,10);else if(/^-0[xX][0-9a-fA-F]+$/.test(K))K=parseInt(K,16);else{if(K==="")break;console.log("Invalid data:"+K),Oe=!0;break}for(j[K]=L.splice(0,U.height),Y=0;Y<U.height;Y++)typeof j[K][Y]>"u"?j[K][Y]="":(se=new RegExp("\\"+j[K][Y].substr(j[K][Y].length-1,1)+"+$"),j[K][Y]=j[K][Y].replace(se,""));j.numChars++}if(Oe===!0)throw new Error("Error parsing data.");return U},ae.loadFont=function(M,z){if(o[M]){z(null,o[M].options);return}if(typeof fetch!="function")throw console.error("figlet.js requires the fetch API or a fetch polyfill such as https://cdnjs.com/libraries/fetch"),new Error("fetch is required for figlet.js to work.");fetch(a.fontPath+"/"+M+".flf").then(function(L){if(L.ok)return L.text();throw console.log("Unexpected response",L),new Error("Network response was not ok.")}).then(function(L){z(null,ae.parseFont(M,L))}).catch(z)},ae.loadFontSync=function(M){if(o[M])return o[M].options;throw new Error("synchronous font loading is not implemented for the browser")},ae.preloadFonts=function(M,z){let L=[];M.reduce(function(V,j){return V.then(function(){return fetch(a.fontPath+"/"+j+".flf").then(U=>U.text()).then(function(U){L.push(U)})})},Promise.resolve()).then(function(V){for(var j in M)M.hasOwnProperty(j)&&ae.parseFont(M[j],L[j]);z&&z()})},ae.figFonts=o,ae})();t.exports=e})(IE);var WA=IE.exports;const Uv=Rm(WA);var qA=Object.defineProperty,KA=Object.getOwnPropertyNames,Hv=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),GA=(t,e)=>function(){return t&&(e=(0,t[KA(t)[0]])(t=0)),e},QA=(t,e)=>{for(var n in e)qA(t,n,{get:e[n],enumerable:!0})},Oi=(t,e,n)=>new Promise((r,i)=>{var s=l=>{try{a(n.next(l))}catch(u){i(u)}},o=l=>{try{a(n.throw(l))}catch(u){i(u)}},a=l=>l.done?r(l.value):Promise.resolve(l.value).then(s,o);a((n=n.apply(t,e)).next())}),YA=(t,e,n)=>(e=t[Hv("asyncIterator")])?e.call(t):(t=t[Hv("iterator")](),e={},n=(r,i)=>(i=t[r])&&(e[r]=s=>new Promise((o,a,l)=>(s=i.call(t,s),l=s.done,Promise.resolve(s.value).then(u=>o({value:u,done:l}),a)))),n("next"),n("return"),e),RE={};QA(RE,{default:()=>AE});var AE,CE=GA({"src/fonts/Slant.js"(){AE=`flf2a$ 6 5 16 15 10 0 18319
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
`}});function lu(t,e){return t.replace(/.(?=.)/g,`$&${" ".repeat(e)}`)}function nd(t,e,n){return t.substring(0,e)+n+t.substring(e+n.length)}function PE(t){return t[Math.floor(Math.random()*t.length)]}function ls(t,e){return t.split("").map(n=>/\s/.test(n)?n:PE(e)).join("")}function XA({asciiText:t,animationDirection:e,animationCharacters:n,animationCharacterSpacing:r}){return t.reduce((i,s,o)=>{if(o===0)return i;const a=i!=null&&i[i.length-1]?[...i[i.length-1]]:void 0;if(!a)return i;const l=/\S/.test(a[o-1]),u=a.length-o,h=/\S/.test(a[u]);let f=[...a];if(l&&(e==="up"||e==="vertical")&&(a!=null&&a[o]&&(a[o]=ls(a[o],lu(n,r))),a!=null&&a[o-1]&&(a[o-1]=" ".repeat(s.length)),f[o]&&(f[o]=ls(f[o],n))),h&&(e==="down"||e==="vertical")&&(a!=null&&a[u]&&(a[u]=ls(a[u],lu(n,r))),a!=null&&a[u+1]&&(a[u+1]=" ".repeat(s.length)),f!=null&&f[u]&&(f[u]=ls(f[u],n))),(l||h)&&i.push(f,a),o===t.length-1&&e==="up"){const d=[...a];d[d.length-1]=" ".repeat(d[d.length-1].length),i.push(d)}if(o===t.length-1&&e==="down"){const d=[...a];d[f.length-o]=" ".repeat(d[f.length-o].length),i.push(d);const m=[...d];if(!/\S/.test(m[0]))return i;m[0]=ls(m[0],lu(n,r)),i.push(m);const y=[...m];if(!/\S/.test(y[0]))return i;y[0]=ls(y[0],lu(n,r)),i.push(y);const E=[...y];if(!/\S/.test(E[0]))return i;E[0]=" ".repeat(E[0].length),i.push(E)}return t.length-1,i},[[...t]])}var JA=1;function ZA({asciiText:t,animationDirection:e,animationCharacters:n}){const r=[[...structuredClone(t)]],i=t[0].length/(e==="left"||e==="right"?1:2);for(let s=0;s<i;s++){if(s===0){r.push(t);continue}const o=r[s].map((a,l,u)=>{const h=a.search(/\S/),f=a.search(/\S(?!.*\S)/);if(h===-1||f===-1)return a;const d=l>JA?-1:1;if((e==="left"||e==="horizontal")&&(a=nd(a,h," ")),(e==="right"||e==="horizontal")&&(a=nd(a,f," ")),f-h<=2)return a;if(e==="left"||e==="horizontal"){const m=PE(n);u[l+d]=nd(u[l+d],h+1,m)}return a});r.push(o)}return r}function eC(t){return Oi(this,arguments,function*({asciiText:e,animationDirection:n,animationCharacters:r,animationCharacterSpacing:i,fadeInOnly:s=!1,fadeOutOnly:o=!1}){try{if(n==="down"||n==="up"||n==="vertical"){const h=XA({asciiText:e,animationDirection:n,animationCharacters:r,animationCharacterSpacing:i});if(o)return h;const f=structuredClone(h).reverse();return s?f:f.concat(h)}const a=ZA({asciiText:e,animationDirection:n,animationCharacters:r,animationCharacterSpacing:i});if(s)return structuredClone(a).reverse();const l=structuredClone(a).reverse();return o?a:l.concat(a)}catch(a){throw a+" @createFrames"}})}var Wv="Slant";function tC(t,e){return Oi(this,null,function*(){const n=e?"":(yield Promise.resolve().then(()=>(CE(),RE))).default;Uv.parseFont(Wv,e||n);const r=u=>Oi(this,null,function*(){return yield new Promise((h,f)=>{Uv.text(u,{font:Wv},(d,m)=>{d&&f("Failed to load font"),m?h(m.split(`
`)):f("No ASCII text generated")})})}),i=[];try{for(var s=YA(Array.isArray(t)?t:[t]),o,a,l;o=!(a=yield s.next()).done;o=!1){const u=a.value,h=yield r(u);i.push(h)}}catch(u){l=[u]}finally{try{o&&(a=s.return)&&(yield a.call(s))}finally{if(l)throw l[0]}}return i})}var nC="/*+#";function rC({animationCharacters:t=nC,animationCharacterSpacing:e=1,animationDelay:n=500,animationDirection:r="horizontal",animationInterval:i=1e3,animationIteration:s=1,animationLoop:o=!0,animationSpeed:a=20,fadeInOnly:l=!1,fadeOutOnly:u=!1,font:h,isAnimated:f=!0,isPaused:d=!1,text:m=["React","ASCII","Text"]}){const _=F.useRef(),y=F.useRef({animationFrameId:0,animationIndex:0,animationIterationCount:1,animations:null,frameId:0,frameIndex:0,isPaused:!1,isTimeout:!1,previousTimeStamp:0,timeoutId:0}),E=v=>Oi(this,null,function*(){const{animations:S,isPaused:C,isTimeout:O,previousTimeStamp:D}=y.current;if(!_.current||!(S!=null&&S.length)||C||O)return;if(v-D>a){const{animationIndex:T,animationIterationCount:b,animations:x,frameId:P,frameIndex:k}=y.current,A=x==null?void 0:x[T];if(!A||O)return;const Z=k===0,ce=k===A.length-1,de=T===x.length-1;if(_.current.textContent=A[k].join(`
`),!o&&b===s&&de&&ce){cancelAnimationFrame(P);return}y.current.previousTimeStamp=v;const Ee=k===Math.floor(A.length/2),Q=l||u,ne=oe=>Oi(this,null,function*(){yield new Promise(_e=>{y.current.isTimeout=!0,setTimeout(_e,oe)}),y.current.isTimeout=!1});Q&&ce&&n&&(yield ne(n)),Q&&Z&&i&&(yield ne(i)),!Q&&Ee&&n&&(yield ne(n)),!Q&&ce&&i&&(yield ne(i)),ce?(y.current.frameIndex=0,y.current.animationIndex++,y.current.animationIterationCount++):y.current.frameIndex++,o&&y.current.animationIndex===x.length&&(y.current.animationIndex=0)}y.current.frameId=requestAnimationFrame(E)});F.useEffect(()=>{d?(y.current.isPaused=!0,cancelAnimationFrame(y.current.frameId)):(y.current.isPaused=!1,y.current.frameId=requestAnimationFrame(E))},[d,y]);const w=F.useCallback(()=>Oi(this,null,function*(){try{const v=yield tC(m,h);!f&&_.current?_.current.textContent=v[0].join(`
`):v.length===(Array.isArray(m)?m:[m]).length&&(y.current.animations=yield Promise.all([...v.map(S=>Oi(this,null,function*(){return yield eC({asciiText:S,animationDirection:r,animationCharacters:t,animationCharacterSpacing:e,fadeInOnly:l,fadeOutOnly:u})}))]),requestAnimationFrame(E))}catch(v){console.error({error:v})}}),[]);return F.useEffect(()=>{w()},[m,w]),_}var iC=`flf2a$ 10 5 10 0 3 0


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
@@`;CE();function kE(t,e){return function(){return t.apply(e,arguments)}}const{toString:sC}=Object.prototype,{getPrototypeOf:Cg}=Object,Dh=(t=>e=>{const n=sC.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Fn=t=>(t=t.toLowerCase(),e=>Dh(e)===t),Mh=t=>e=>typeof e===t,{isArray:go}=Array,Ka=Mh("undefined");function oC(t){return t!==null&&!Ka(t)&&t.constructor!==null&&!Ka(t.constructor)&&Tn(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const LE=Fn("ArrayBuffer");function aC(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&LE(t.buffer),e}const lC=Mh("string"),Tn=Mh("function"),OE=Mh("number"),Nh=t=>t!==null&&typeof t=="object",uC=t=>t===!0||t===!1,qu=t=>{if(Dh(t)!=="object")return!1;const e=Cg(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},cC=Fn("Date"),hC=Fn("File"),fC=Fn("Blob"),dC=Fn("FileList"),pC=t=>Nh(t)&&Tn(t.pipe),mC=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||Tn(t.append)&&((e=Dh(t))==="formdata"||e==="object"&&Tn(t.toString)&&t.toString()==="[object FormData]"))},gC=Fn("URLSearchParams"),[_C,yC,vC,wC]=["ReadableStream","Request","Response","Headers"].map(Fn),EC=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function _l(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,i;if(typeof t!="object"&&(t=[t]),go(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let a;for(r=0;r<o;r++)a=s[r],e.call(null,t[a],a,t)}}function DE(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,i;for(;r-- >0;)if(i=n[r],e===i.toLowerCase())return i;return null}const ME=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,NE=t=>!Ka(t)&&t!==ME;function Lp(){const{caseless:t}=NE(this)&&this||{},e={},n=(r,i)=>{const s=t&&DE(e,i)||i;qu(e[s])&&qu(r)?e[s]=Lp(e[s],r):qu(r)?e[s]=Lp({},r):go(r)?e[s]=r.slice():e[s]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&_l(arguments[r],n);return e}const SC=(t,e,n,{allOwnKeys:r}={})=>(_l(e,(i,s)=>{n&&Tn(i)?t[s]=kE(i,n):t[s]=i},{allOwnKeys:r}),t),TC=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),bC=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},xC=(t,e,n,r)=>{let i,s,o;const a={};if(e=e||{},t==null)return e;do{for(i=Object.getOwnPropertyNames(t),s=i.length;s-- >0;)o=i[s],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Cg(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},IC=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},RC=t=>{if(!t)return null;if(go(t))return t;let e=t.length;if(!OE(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},AC=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Cg(Uint8Array)),CC=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let i;for(;(i=r.next())&&!i.done;){const s=i.value;e.call(t,s[0],s[1])}},PC=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},kC=Fn("HTMLFormElement"),LC=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),qv=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),OC=Fn("RegExp"),VE=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};_l(n,(i,s)=>{let o;(o=e(i,s,t))!==!1&&(r[s]=o||i)}),Object.defineProperties(t,r)},DC=t=>{VE(t,(e,n)=>{if(Tn(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(Tn(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},MC=(t,e)=>{const n={},r=i=>{i.forEach(s=>{n[s]=!0})};return go(t)?r(t):r(String(t).split(e)),n},NC=()=>{},VC=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e,rd="abcdefghijklmnopqrstuvwxyz",Kv="0123456789",FE={DIGIT:Kv,ALPHA:rd,ALPHA_DIGIT:rd+rd.toUpperCase()+Kv},FC=(t=16,e=FE.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function zC(t){return!!(t&&Tn(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const jC=t=>{const e=new Array(10),n=(r,i)=>{if(Nh(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[i]=r;const s=go(r)?[]:{};return _l(r,(o,a)=>{const l=n(o,i+1);!Ka(l)&&(s[a]=l)}),e[i]=void 0,s}}return r};return n(t,0)},BC=Fn("AsyncFunction"),$C=t=>t&&(Nh(t)||Tn(t))&&Tn(t.then)&&Tn(t.catch),$={isArray:go,isArrayBuffer:LE,isBuffer:oC,isFormData:mC,isArrayBufferView:aC,isString:lC,isNumber:OE,isBoolean:uC,isObject:Nh,isPlainObject:qu,isReadableStream:_C,isRequest:yC,isResponse:vC,isHeaders:wC,isUndefined:Ka,isDate:cC,isFile:hC,isBlob:fC,isRegExp:OC,isFunction:Tn,isStream:pC,isURLSearchParams:gC,isTypedArray:AC,isFileList:dC,forEach:_l,merge:Lp,extend:SC,trim:EC,stripBOM:TC,inherits:bC,toFlatObject:xC,kindOf:Dh,kindOfTest:Fn,endsWith:IC,toArray:RC,forEachEntry:CC,matchAll:PC,isHTMLForm:kC,hasOwnProperty:qv,hasOwnProp:qv,reduceDescriptors:VE,freezeMethods:DC,toObjectSet:MC,toCamelCase:LC,noop:NC,toFiniteNumber:VC,findKey:DE,global:ME,isContextDefined:NE,ALPHABET:FE,generateString:FC,isSpecCompliantForm:zC,toJSONObject:jC,isAsyncFn:BC,isThenable:$C};function ge(t,e,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}$.inherits(ge,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:$.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const zE=ge.prototype,jE={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{jE[t]={value:t}});Object.defineProperties(ge,jE);Object.defineProperty(zE,"isAxiosError",{value:!0});ge.from=(t,e,n,r,i,s)=>{const o=Object.create(zE);return $.toFlatObject(t,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),ge.call(o,t.message,e,n,r,i),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};const UC=null;function Op(t){return $.isPlainObject(t)||$.isArray(t)}function BE(t){return $.endsWith(t,"[]")?t.slice(0,-2):t}function Gv(t,e,n){return t?t.concat(e).map(function(i,s){return i=BE(i),!n&&s?"["+i+"]":i}).join(n?".":""):e}function HC(t){return $.isArray(t)&&!t.some(Op)}const WC=$.toFlatObject($,{},null,function(e){return/^is[A-Z]/.test(e)});function Vh(t,e,n){if(!$.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=$.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,E){return!$.isUndefined(E[y])});const r=n.metaTokens,i=n.visitor||h,s=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&$.isSpecCompliantForm(e);if(!$.isFunction(i))throw new TypeError("visitor must be a function");function u(_){if(_===null)return"";if($.isDate(_))return _.toISOString();if(!l&&$.isBlob(_))throw new ge("Blob is not supported. Use a Buffer instead.");return $.isArrayBuffer(_)||$.isTypedArray(_)?l&&typeof Blob=="function"?new Blob([_]):Buffer.from(_):_}function h(_,y,E){let w=_;if(_&&!E&&typeof _=="object"){if($.endsWith(y,"{}"))y=r?y:y.slice(0,-2),_=JSON.stringify(_);else if($.isArray(_)&&HC(_)||($.isFileList(_)||$.endsWith(y,"[]"))&&(w=$.toArray(_)))return y=BE(y),w.forEach(function(S,C){!($.isUndefined(S)||S===null)&&e.append(o===!0?Gv([y],C,s):o===null?y:y+"[]",u(S))}),!1}return Op(_)?!0:(e.append(Gv(E,y,s),u(_)),!1)}const f=[],d=Object.assign(WC,{defaultVisitor:h,convertValue:u,isVisitable:Op});function m(_,y){if(!$.isUndefined(_)){if(f.indexOf(_)!==-1)throw Error("Circular reference detected in "+y.join("."));f.push(_),$.forEach(_,function(w,v){(!($.isUndefined(w)||w===null)&&i.call(e,w,$.isString(v)?v.trim():v,y,d))===!0&&m(w,y?y.concat(v):[v])}),f.pop()}}if(!$.isObject(t))throw new TypeError("data must be an object");return m(t),e}function Qv(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Pg(t,e){this._pairs=[],t&&Vh(t,this,e)}const $E=Pg.prototype;$E.append=function(e,n){this._pairs.push([e,n])};$E.toString=function(e){const n=e?function(r){return e.call(this,r,Qv)}:Qv;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function qC(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function UE(t,e,n){if(!e)return t;const r=n&&n.encode||qC,i=n&&n.serialize;let s;if(i?s=i(e,n):s=$.isURLSearchParams(e)?e.toString():new Pg(e,n).toString(r),s){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class Yv{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){$.forEach(this.handlers,function(r){r!==null&&e(r)})}}const HE={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},KC=typeof URLSearchParams<"u"?URLSearchParams:Pg,GC=typeof FormData<"u"?FormData:null,QC=typeof Blob<"u"?Blob:null,YC={isBrowser:!0,classes:{URLSearchParams:KC,FormData:GC,Blob:QC},protocols:["http","https","file","blob","url","data"]},kg=typeof window<"u"&&typeof document<"u",XC=(t=>kg&&["ReactNative","NativeScript","NS"].indexOf(t)<0)(typeof navigator<"u"&&navigator.product),JC=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",ZC=kg&&window.location.href||"http://localhost",eP=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:kg,hasStandardBrowserEnv:XC,hasStandardBrowserWebWorkerEnv:JC,origin:ZC},Symbol.toStringTag,{value:"Module"})),Mn={...eP,...YC};function tP(t,e){return Vh(t,new Mn.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,s){return Mn.isNode&&$.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function nP(t){return $.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function rP(t){const e={},n=Object.keys(t);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],e[s]=t[s];return e}function WE(t){function e(n,r,i,s){let o=n[s++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=s>=n.length;return o=!o&&$.isArray(i)?i.length:o,l?($.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!a):((!i[o]||!$.isObject(i[o]))&&(i[o]=[]),e(n,r,i[o],s)&&$.isArray(i[o])&&(i[o]=rP(i[o])),!a)}if($.isFormData(t)&&$.isFunction(t.entries)){const n={};return $.forEachEntry(t,(r,i)=>{e(nP(r),i,n,0)}),n}return null}function iP(t,e,n){if($.isString(t))try{return(e||JSON.parse)(t),$.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const yl={transitional:HE,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,s=$.isObject(e);if(s&&$.isHTMLForm(e)&&(e=new FormData(e)),$.isFormData(e))return i?JSON.stringify(WE(e)):e;if($.isArrayBuffer(e)||$.isBuffer(e)||$.isStream(e)||$.isFile(e)||$.isBlob(e)||$.isReadableStream(e))return e;if($.isArrayBufferView(e))return e.buffer;if($.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return tP(e,this.formSerializer).toString();if((a=$.isFileList(e))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Vh(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return s||i?(n.setContentType("application/json",!1),iP(e)):e}],transformResponse:[function(e){const n=this.transitional||yl.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if($.isResponse(e)||$.isReadableStream(e))return e;if(e&&$.isString(e)&&(r&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?ge.from(a,ge.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Mn.classes.FormData,Blob:Mn.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};$.forEach(["delete","get","head","post","put","patch"],t=>{yl.headers[t]={}});const sP=$.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),oP=t=>{const e={};let n,r,i;return t&&t.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!n||e[n]&&sP[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},Xv=Symbol("internals");function Go(t){return t&&String(t).trim().toLowerCase()}function Ku(t){return t===!1||t==null?t:$.isArray(t)?t.map(Ku):String(t)}function aP(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const lP=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function id(t,e,n,r,i){if($.isFunction(r))return r.call(this,e,n);if(i&&(e=n),!!$.isString(e)){if($.isString(r))return e.indexOf(r)!==-1;if($.isRegExp(r))return r.test(e)}}function uP(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function cP(t,e){const n=$.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(i,s,o){return this[r].call(this,e,i,s,o)},configurable:!0})})}class rn{constructor(e){e&&this.set(e)}set(e,n,r){const i=this;function s(a,l,u){const h=Go(l);if(!h)throw new Error("header name must be a non-empty string");const f=$.findKey(i,h);(!f||i[f]===void 0||u===!0||u===void 0&&i[f]!==!1)&&(i[f||l]=Ku(a))}const o=(a,l)=>$.forEach(a,(u,h)=>s(u,h,l));if($.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if($.isString(e)&&(e=e.trim())&&!lP(e))o(oP(e),n);else if($.isHeaders(e))for(const[a,l]of e.entries())s(l,a,r);else e!=null&&s(n,e,r);return this}get(e,n){if(e=Go(e),e){const r=$.findKey(this,e);if(r){const i=this[r];if(!n)return i;if(n===!0)return aP(i);if($.isFunction(n))return n.call(this,i,r);if($.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Go(e),e){const r=$.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||id(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let i=!1;function s(o){if(o=Go(o),o){const a=$.findKey(r,o);a&&(!n||id(r,r[a],a,n))&&(delete r[a],i=!0)}}return $.isArray(e)?e.forEach(s):s(e),i}clear(e){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const s=n[r];(!e||id(this,this[s],s,e,!0))&&(delete this[s],i=!0)}return i}normalize(e){const n=this,r={};return $.forEach(this,(i,s)=>{const o=$.findKey(r,s);if(o){n[o]=Ku(i),delete n[s];return}const a=e?uP(s):String(s).trim();a!==s&&delete n[s],n[a]=Ku(i),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return $.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=e&&$.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(i=>r.set(i)),r}static accessor(e){const r=(this[Xv]=this[Xv]={accessors:{}}).accessors,i=this.prototype;function s(o){const a=Go(o);r[a]||(cP(i,o),r[a]=!0)}return $.isArray(e)?e.forEach(s):s(e),this}}rn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);$.reduceDescriptors(rn.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});$.freezeMethods(rn);function sd(t,e){const n=this||yl,r=e||n,i=rn.from(r.headers);let s=r.data;return $.forEach(t,function(a){s=a.call(n,s,i.normalize(),e?e.status:void 0)}),i.normalize(),s}function qE(t){return!!(t&&t.__CANCEL__)}function _o(t,e,n){ge.call(this,t??"canceled",ge.ERR_CANCELED,e,n),this.name="CanceledError"}$.inherits(_o,ge,{__CANCEL__:!0});function KE(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new ge("Request failed with status code "+n.status,[ge.ERR_BAD_REQUEST,ge.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function hP(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function fP(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i=0,s=0,o;return e=e!==void 0?e:1e3,function(l){const u=Date.now(),h=r[s];o||(o=u),n[i]=l,r[i]=u;let f=s,d=0;for(;f!==i;)d+=n[f++],f=f%t;if(i=(i+1)%t,i===s&&(s=(s+1)%t),u-o<e)return;const m=h&&u-h;return m?Math.round(d*1e3/m):void 0}}function dP(t,e){let n=0;const r=1e3/e;let i=null;return function(){const o=this===!0,a=Date.now();if(o||a-n>r)return i&&(clearTimeout(i),i=null),n=a,t.apply(null,arguments);i||(i=setTimeout(()=>(i=null,n=Date.now(),t.apply(null,arguments)),r-(a-n)))}}const Pc=(t,e,n=3)=>{let r=0;const i=fP(50,250);return dP(s=>{const o=s.loaded,a=s.lengthComputable?s.total:void 0,l=o-r,u=i(l),h=o<=a;r=o;const f={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:u||void 0,estimated:u&&a&&h?(a-o)/u:void 0,event:s,lengthComputable:a!=null};f[e?"download":"upload"]=!0,t(f)},n)},pP=Mn.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(s){let o=s;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(o){const a=$.isString(o)?i(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}(),mP=Mn.hasStandardBrowserEnv?{write(t,e,n,r,i,s){const o=[t+"="+encodeURIComponent(e)];$.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),$.isString(r)&&o.push("path="+r),$.isString(i)&&o.push("domain="+i),s===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function gP(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function _P(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function GE(t,e){return t&&!gP(e)?_P(t,e):e}const Jv=t=>t instanceof rn?{...t}:t;function Hi(t,e){e=e||{};const n={};function r(u,h,f){return $.isPlainObject(u)&&$.isPlainObject(h)?$.merge.call({caseless:f},u,h):$.isPlainObject(h)?$.merge({},h):$.isArray(h)?h.slice():h}function i(u,h,f){if($.isUndefined(h)){if(!$.isUndefined(u))return r(void 0,u,f)}else return r(u,h,f)}function s(u,h){if(!$.isUndefined(h))return r(void 0,h)}function o(u,h){if($.isUndefined(h)){if(!$.isUndefined(u))return r(void 0,u)}else return r(void 0,h)}function a(u,h,f){if(f in e)return r(u,h);if(f in t)return r(void 0,u)}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(u,h)=>i(Jv(u),Jv(h),!0)};return $.forEach(Object.keys(Object.assign({},t,e)),function(h){const f=l[h]||i,d=f(t[h],e[h],h);$.isUndefined(d)&&f!==a||(n[h]=d)}),n}const QE=t=>{const e=Hi({},t);let{data:n,withXSRFToken:r,xsrfHeaderName:i,xsrfCookieName:s,headers:o,auth:a}=e;e.headers=o=rn.from(o),e.url=UE(GE(e.baseURL,e.url),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let l;if($.isFormData(n)){if(Mn.hasStandardBrowserEnv||Mn.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((l=o.getContentType())!==!1){const[u,...h]=l?l.split(";").map(f=>f.trim()).filter(Boolean):[];o.setContentType([u||"multipart/form-data",...h].join("; "))}}if(Mn.hasStandardBrowserEnv&&(r&&$.isFunction(r)&&(r=r(e)),r||r!==!1&&pP(e.url))){const u=i&&s&&mP.read(s);u&&o.set(i,u)}return e},yP=typeof XMLHttpRequest<"u",vP=yP&&function(t){return new Promise(function(n,r){const i=QE(t);let s=i.data;const o=rn.from(i.headers).normalize();let{responseType:a}=i,l;function u(){i.cancelToken&&i.cancelToken.unsubscribe(l),i.signal&&i.signal.removeEventListener("abort",l)}let h=new XMLHttpRequest;h.open(i.method.toUpperCase(),i.url,!0),h.timeout=i.timeout;function f(){if(!h)return;const m=rn.from("getAllResponseHeaders"in h&&h.getAllResponseHeaders()),y={data:!a||a==="text"||a==="json"?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:m,config:t,request:h};KE(function(w){n(w),u()},function(w){r(w),u()},y),h=null}"onloadend"in h?h.onloadend=f:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.indexOf("file:")===0)||setTimeout(f)},h.onabort=function(){h&&(r(new ge("Request aborted",ge.ECONNABORTED,i,h)),h=null)},h.onerror=function(){r(new ge("Network Error",ge.ERR_NETWORK,i,h)),h=null},h.ontimeout=function(){let _=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const y=i.transitional||HE;i.timeoutErrorMessage&&(_=i.timeoutErrorMessage),r(new ge(_,y.clarifyTimeoutError?ge.ETIMEDOUT:ge.ECONNABORTED,i,h)),h=null},s===void 0&&o.setContentType(null),"setRequestHeader"in h&&$.forEach(o.toJSON(),function(_,y){h.setRequestHeader(y,_)}),$.isUndefined(i.withCredentials)||(h.withCredentials=!!i.withCredentials),a&&a!=="json"&&(h.responseType=i.responseType),typeof i.onDownloadProgress=="function"&&h.addEventListener("progress",Pc(i.onDownloadProgress,!0)),typeof i.onUploadProgress=="function"&&h.upload&&h.upload.addEventListener("progress",Pc(i.onUploadProgress)),(i.cancelToken||i.signal)&&(l=m=>{h&&(r(!m||m.type?new _o(null,t,h):m),h.abort(),h=null)},i.cancelToken&&i.cancelToken.subscribe(l),i.signal&&(i.signal.aborted?l():i.signal.addEventListener("abort",l)));const d=hP(i.url);if(d&&Mn.protocols.indexOf(d)===-1){r(new ge("Unsupported protocol "+d+":",ge.ERR_BAD_REQUEST,t));return}h.send(s||null)})},wP=(t,e)=>{let n=new AbortController,r;const i=function(l){if(!r){r=!0,o();const u=l instanceof Error?l:this.reason;n.abort(u instanceof ge?u:new _o(u instanceof Error?u.message:u))}};let s=e&&setTimeout(()=>{i(new ge(`timeout ${e} of ms exceeded`,ge.ETIMEDOUT))},e);const o=()=>{t&&(s&&clearTimeout(s),s=null,t.forEach(l=>{l&&(l.removeEventListener?l.removeEventListener("abort",i):l.unsubscribe(i))}),t=null)};t.forEach(l=>l&&l.addEventListener&&l.addEventListener("abort",i));const{signal:a}=n;return a.unsubscribe=o,[a,()=>{s&&clearTimeout(s),s=null}]},EP=function*(t,e){let n=t.byteLength;if(!e||n<e){yield t;return}let r=0,i;for(;r<n;)i=r+e,yield t.slice(r,i),r=i},SP=async function*(t,e,n){for await(const r of t)yield*EP(ArrayBuffer.isView(r)?r:await n(String(r)),e)},Zv=(t,e,n,r,i)=>{const s=SP(t,e,i);let o=0;return new ReadableStream({type:"bytes",async pull(a){const{done:l,value:u}=await s.next();if(l){a.close(),r();return}let h=u.byteLength;n&&n(o+=h),a.enqueue(new Uint8Array(u))},cancel(a){return r(a),s.return()}},{highWaterMark:2})},e2=(t,e)=>{const n=t!=null;return r=>setTimeout(()=>e({lengthComputable:n,total:t,loaded:r}))},Fh=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",YE=Fh&&typeof ReadableStream=="function",Dp=Fh&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),TP=YE&&(()=>{let t=!1;const e=new Request(Mn.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e})(),t2=64*1024,Mp=YE&&!!(()=>{try{return $.isReadableStream(new Response("").body)}catch{}})(),kc={stream:Mp&&(t=>t.body)};Fh&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!kc[e]&&(kc[e]=$.isFunction(t[e])?n=>n[e]():(n,r)=>{throw new ge(`Response type '${e}' is not supported`,ge.ERR_NOT_SUPPORT,r)})})})(new Response);const bP=async t=>{if(t==null)return 0;if($.isBlob(t))return t.size;if($.isSpecCompliantForm(t))return(await new Request(t).arrayBuffer()).byteLength;if($.isArrayBufferView(t))return t.byteLength;if($.isURLSearchParams(t)&&(t=t+""),$.isString(t))return(await Dp(t)).byteLength},xP=async(t,e)=>{const n=$.toFiniteNumber(t.getContentLength());return n??bP(e)},IP=Fh&&(async t=>{let{url:e,method:n,data:r,signal:i,cancelToken:s,timeout:o,onDownloadProgress:a,onUploadProgress:l,responseType:u,headers:h,withCredentials:f="same-origin",fetchOptions:d}=QE(t);u=u?(u+"").toLowerCase():"text";let[m,_]=i||s||o?wP([i,s],o):[],y,E;const w=()=>{!y&&setTimeout(()=>{m&&m.unsubscribe()}),y=!0};let v;try{if(l&&TP&&n!=="get"&&n!=="head"&&(v=await xP(h,r))!==0){let D=new Request(e,{method:"POST",body:r,duplex:"half"}),I;$.isFormData(r)&&(I=D.headers.get("content-type"))&&h.setContentType(I),D.body&&(r=Zv(D.body,t2,e2(v,Pc(l)),null,Dp))}$.isString(f)||(f=f?"cors":"omit"),E=new Request(e,{...d,signal:m,method:n.toUpperCase(),headers:h.normalize().toJSON(),body:r,duplex:"half",withCredentials:f});let S=await fetch(E);const C=Mp&&(u==="stream"||u==="response");if(Mp&&(a||C)){const D={};["status","statusText","headers"].forEach(T=>{D[T]=S[T]});const I=$.toFiniteNumber(S.headers.get("content-length"));S=new Response(Zv(S.body,t2,a&&e2(I,Pc(a,!0)),C&&w,Dp),D)}u=u||"text";let O=await kc[$.findKey(kc,u)||"text"](S,t);return!C&&w(),_&&_(),await new Promise((D,I)=>{KE(D,I,{data:O,headers:rn.from(S.headers),status:S.status,statusText:S.statusText,config:t,request:E})})}catch(S){throw w(),S&&S.name==="TypeError"&&/fetch/i.test(S.message)?Object.assign(new ge("Network Error",ge.ERR_NETWORK,t,E),{cause:S.cause||S}):ge.from(S,S&&S.code,t,E)}}),Np={http:UC,xhr:vP,fetch:IP};$.forEach(Np,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const n2=t=>`- ${t}`,RP=t=>$.isFunction(t)||t===null||t===!1,XE={getAdapter:t=>{t=$.isArray(t)?t:[t];const{length:e}=t;let n,r;const i={};for(let s=0;s<e;s++){n=t[s];let o;if(r=n,!RP(n)&&(r=Np[(o=String(n)).toLowerCase()],r===void 0))throw new ge(`Unknown adapter '${o}'`);if(r)break;i[o||"#"+s]=r}if(!r){const s=Object.entries(i).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=e?s.length>1?`since :
`+s.map(n2).join(`
`):" "+n2(s[0]):"as no adapter specified";throw new ge("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:Np};function od(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new _o(null,t)}function r2(t){return od(t),t.headers=rn.from(t.headers),t.data=sd.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),XE.getAdapter(t.adapter||yl.adapter)(t).then(function(r){return od(t),r.data=sd.call(t,t.transformResponse,r),r.headers=rn.from(r.headers),r},function(r){return qE(r)||(od(t),r&&r.response&&(r.response.data=sd.call(t,t.transformResponse,r.response),r.response.headers=rn.from(r.response.headers))),Promise.reject(r)})}const JE="1.7.2",Lg={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Lg[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const i2={};Lg.transitional=function(e,n,r){function i(s,o){return"[Axios v"+JE+"] Transitional option '"+s+"'"+o+(r?". "+r:"")}return(s,o,a)=>{if(e===!1)throw new ge(i(o," has been removed"+(n?" in "+n:"")),ge.ERR_DEPRECATED);return n&&!i2[o]&&(i2[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,a):!0}};function AP(t,e,n){if(typeof t!="object")throw new ge("options must be an object",ge.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let i=r.length;for(;i-- >0;){const s=r[i],o=e[s];if(o){const a=t[s],l=a===void 0||o(a,s,t);if(l!==!0)throw new ge("option "+s+" must be "+l,ge.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ge("Unknown option "+s,ge.ERR_BAD_OPTION)}}const Vp={assertOptions:AP,validators:Lg},Rr=Vp.validators;class Vi{constructor(e){this.defaults=e,this.interceptors={request:new Yv,response:new Yv}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let i;Error.captureStackTrace?Error.captureStackTrace(i={}):i=new Error;const s=i.stack?i.stack.replace(/^.+\n/,""):"";try{r.stack?s&&!String(r.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+s):r.stack=s}catch{}}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Hi(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:s}=n;r!==void 0&&Vp.assertOptions(r,{silentJSONParsing:Rr.transitional(Rr.boolean),forcedJSONParsing:Rr.transitional(Rr.boolean),clarifyTimeoutError:Rr.transitional(Rr.boolean)},!1),i!=null&&($.isFunction(i)?n.paramsSerializer={serialize:i}:Vp.assertOptions(i,{encode:Rr.function,serialize:Rr.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&$.merge(s.common,s[n.method]);s&&$.forEach(["delete","get","head","post","put","patch","common"],_=>{delete s[_]}),n.headers=rn.concat(o,s);const a=[];let l=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(l=l&&y.synchronous,a.unshift(y.fulfilled,y.rejected))});const u=[];this.interceptors.response.forEach(function(y){u.push(y.fulfilled,y.rejected)});let h,f=0,d;if(!l){const _=[r2.bind(this),void 0];for(_.unshift.apply(_,a),_.push.apply(_,u),d=_.length,h=Promise.resolve(n);f<d;)h=h.then(_[f++],_[f++]);return h}d=a.length;let m=n;for(f=0;f<d;){const _=a[f++],y=a[f++];try{m=_(m)}catch(E){y.call(this,E);break}}try{h=r2.call(this,m)}catch(_){return Promise.reject(_)}for(f=0,d=u.length;f<d;)h=h.then(u[f++],u[f++]);return h}getUri(e){e=Hi(this.defaults,e);const n=GE(e.baseURL,e.url);return UE(n,e.params,e.paramsSerializer)}}$.forEach(["delete","get","head","options"],function(e){Vi.prototype[e]=function(n,r){return this.request(Hi(r||{},{method:e,url:n,data:(r||{}).data}))}});$.forEach(["post","put","patch"],function(e){function n(r){return function(s,o,a){return this.request(Hi(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}Vi.prototype[e]=n(),Vi.prototype[e+"Form"]=n(!0)});class Og{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(a=>{r.subscribe(a),s=a}).then(i);return o.cancel=function(){r.unsubscribe(s)},o},e(function(s,o,a){r.reason||(r.reason=new _o(s,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new Og(function(i){e=i}),cancel:e}}}function CP(t){return function(n){return t.apply(null,n)}}function PP(t){return $.isObject(t)&&t.isAxiosError===!0}const Fp={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Fp).forEach(([t,e])=>{Fp[e]=t});function ZE(t){const e=new Vi(t),n=kE(Vi.prototype.request,e);return $.extend(n,Vi.prototype,e,{allOwnKeys:!0}),$.extend(n,e,null,{allOwnKeys:!0}),n.create=function(i){return ZE(Hi(t,i))},n}const Qe=ZE(yl);Qe.Axios=Vi;Qe.CanceledError=_o;Qe.CancelToken=Og;Qe.isCancel=qE;Qe.VERSION=JE;Qe.toFormData=Vh;Qe.AxiosError=ge;Qe.Cancel=Qe.CanceledError;Qe.all=function(e){return Promise.all(e)};Qe.spread=CP;Qe.isAxiosError=PP;Qe.mergeConfig=Hi;Qe.AxiosHeaders=rn;Qe.formToJSON=t=>WE($.isHTMLForm(t)?new FormData(t):t);Qe.getAdapter=XE.getAdapter;Qe.HttpStatusCode=Fp;Qe.default=Qe;/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */function vl(t){return t+.5|0}const Nr=(t,e,n)=>Math.max(Math.min(t,n),e);function ia(t){return Nr(vl(t*2.55),0,255)}function Yr(t){return Nr(vl(t*255),0,255)}function or(t){return Nr(vl(t/2.55)/100,0,1)}function s2(t){return Nr(vl(t*100),0,100)}const _n={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},zp=[..."0123456789ABCDEF"],kP=t=>zp[t&15],LP=t=>zp[(t&240)>>4]+zp[t&15],uu=t=>(t&240)>>4===(t&15),OP=t=>uu(t.r)&&uu(t.g)&&uu(t.b)&&uu(t.a);function DP(t){var e=t.length,n;return t[0]==="#"&&(e===4||e===5?n={r:255&_n[t[1]]*17,g:255&_n[t[2]]*17,b:255&_n[t[3]]*17,a:e===5?_n[t[4]]*17:255}:(e===7||e===9)&&(n={r:_n[t[1]]<<4|_n[t[2]],g:_n[t[3]]<<4|_n[t[4]],b:_n[t[5]]<<4|_n[t[6]],a:e===9?_n[t[7]]<<4|_n[t[8]]:255})),n}const MP=(t,e)=>t<255?e(t):"";function NP(t){var e=OP(t)?kP:LP;return t?"#"+e(t.r)+e(t.g)+e(t.b)+MP(t.a,e):void 0}const VP=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function eS(t,e,n){const r=e*Math.min(n,1-n),i=(s,o=(s+t/30)%12)=>n-r*Math.max(Math.min(o-3,9-o,1),-1);return[i(0),i(8),i(4)]}function FP(t,e,n){const r=(i,s=(i+t/60)%6)=>n-n*e*Math.max(Math.min(s,4-s,1),0);return[r(5),r(3),r(1)]}function zP(t,e,n){const r=eS(t,1,.5);let i;for(e+n>1&&(i=1/(e+n),e*=i,n*=i),i=0;i<3;i++)r[i]*=1-e-n,r[i]+=e;return r}function jP(t,e,n,r,i){return t===i?(e-n)/r+(e<n?6:0):e===i?(n-t)/r+2:(t-e)/r+4}function Dg(t){const n=t.r/255,r=t.g/255,i=t.b/255,s=Math.max(n,r,i),o=Math.min(n,r,i),a=(s+o)/2;let l,u,h;return s!==o&&(h=s-o,u=a>.5?h/(2-s-o):h/(s+o),l=jP(n,r,i,h,s),l=l*60+.5),[l|0,u||0,a]}function Mg(t,e,n,r){return(Array.isArray(e)?t(e[0],e[1],e[2]):t(e,n,r)).map(Yr)}function Ng(t,e,n){return Mg(eS,t,e,n)}function BP(t,e,n){return Mg(zP,t,e,n)}function $P(t,e,n){return Mg(FP,t,e,n)}function tS(t){return(t%360+360)%360}function UP(t){const e=VP.exec(t);let n=255,r;if(!e)return;e[5]!==r&&(n=e[6]?ia(+e[5]):Yr(+e[5]));const i=tS(+e[2]),s=+e[3]/100,o=+e[4]/100;return e[1]==="hwb"?r=BP(i,s,o):e[1]==="hsv"?r=$P(i,s,o):r=Ng(i,s,o),{r:r[0],g:r[1],b:r[2],a:n}}function HP(t,e){var n=Dg(t);n[0]=tS(n[0]+e),n=Ng(n),t.r=n[0],t.g=n[1],t.b=n[2]}function WP(t){if(!t)return;const e=Dg(t),n=e[0],r=s2(e[1]),i=s2(e[2]);return t.a<255?`hsla(${n}, ${r}%, ${i}%, ${or(t.a)})`:`hsl(${n}, ${r}%, ${i}%)`}const o2={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},a2={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function qP(){const t={},e=Object.keys(a2),n=Object.keys(o2);let r,i,s,o,a;for(r=0;r<e.length;r++){for(o=a=e[r],i=0;i<n.length;i++)s=n[i],a=a.replace(s,o2[s]);s=parseInt(a2[o],16),t[a]=[s>>16&255,s>>8&255,s&255]}return t}let cu;function KP(t){cu||(cu=qP(),cu.transparent=[0,0,0,0]);const e=cu[t.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:e.length===4?e[3]:255}}const GP=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function QP(t){const e=GP.exec(t);let n=255,r,i,s;if(e){if(e[7]!==r){const o=+e[7];n=e[8]?ia(o):Nr(o*255,0,255)}return r=+e[1],i=+e[3],s=+e[5],r=255&(e[2]?ia(r):Nr(r,0,255)),i=255&(e[4]?ia(i):Nr(i,0,255)),s=255&(e[6]?ia(s):Nr(s,0,255)),{r,g:i,b:s,a:n}}}function YP(t){return t&&(t.a<255?`rgba(${t.r}, ${t.g}, ${t.b}, ${or(t.a)})`:`rgb(${t.r}, ${t.g}, ${t.b})`)}const ad=t=>t<=.0031308?t*12.92:Math.pow(t,1/2.4)*1.055-.055,us=t=>t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4);function XP(t,e,n){const r=us(or(t.r)),i=us(or(t.g)),s=us(or(t.b));return{r:Yr(ad(r+n*(us(or(e.r))-r))),g:Yr(ad(i+n*(us(or(e.g))-i))),b:Yr(ad(s+n*(us(or(e.b))-s))),a:t.a+n*(e.a-t.a)}}function hu(t,e,n){if(t){let r=Dg(t);r[e]=Math.max(0,Math.min(r[e]+r[e]*n,e===0?360:1)),r=Ng(r),t.r=r[0],t.g=r[1],t.b=r[2]}}function nS(t,e){return t&&Object.assign(e||{},t)}function l2(t){var e={r:0,g:0,b:0,a:255};return Array.isArray(t)?t.length>=3&&(e={r:t[0],g:t[1],b:t[2],a:255},t.length>3&&(e.a=Yr(t[3]))):(e=nS(t,{r:0,g:0,b:0,a:1}),e.a=Yr(e.a)),e}function JP(t){return t.charAt(0)==="r"?QP(t):UP(t)}class Ga{constructor(e){if(e instanceof Ga)return e;const n=typeof e;let r;n==="object"?r=l2(e):n==="string"&&(r=DP(e)||KP(e)||JP(e)),this._rgb=r,this._valid=!!r}get valid(){return this._valid}get rgb(){var e=nS(this._rgb);return e&&(e.a=or(e.a)),e}set rgb(e){this._rgb=l2(e)}rgbString(){return this._valid?YP(this._rgb):void 0}hexString(){return this._valid?NP(this._rgb):void 0}hslString(){return this._valid?WP(this._rgb):void 0}mix(e,n){if(e){const r=this.rgb,i=e.rgb;let s;const o=n===s?.5:n,a=2*o-1,l=r.a-i.a,u=((a*l===-1?a:(a+l)/(1+a*l))+1)/2;s=1-u,r.r=255&u*r.r+s*i.r+.5,r.g=255&u*r.g+s*i.g+.5,r.b=255&u*r.b+s*i.b+.5,r.a=o*r.a+(1-o)*i.a,this.rgb=r}return this}interpolate(e,n){return e&&(this._rgb=XP(this._rgb,e._rgb,n)),this}clone(){return new Ga(this.rgb)}alpha(e){return this._rgb.a=Yr(e),this}clearer(e){const n=this._rgb;return n.a*=1-e,this}greyscale(){const e=this._rgb,n=vl(e.r*.3+e.g*.59+e.b*.11);return e.r=e.g=e.b=n,this}opaquer(e){const n=this._rgb;return n.a*=1+e,this}negate(){const e=this._rgb;return e.r=255-e.r,e.g=255-e.g,e.b=255-e.b,this}lighten(e){return hu(this._rgb,2,e),this}darken(e){return hu(this._rgb,2,-e),this}saturate(e){return hu(this._rgb,1,e),this}desaturate(e){return hu(this._rgb,1,-e),this}rotate(e){return HP(this._rgb,e),this}}/*!
 * Chart.js v4.4.8
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */function tr(){}const ZP=(()=>{let t=0;return()=>t++})();function We(t){return t==null}function it(t){if(Array.isArray&&Array.isArray(t))return!0;const e=Object.prototype.toString.call(t);return e.slice(0,7)==="[object"&&e.slice(-6)==="Array]"}function Re(t){return t!==null&&Object.prototype.toString.call(t)==="[object Object]"}function st(t){return(typeof t=="number"||t instanceof Number)&&isFinite(+t)}function an(t,e){return st(t)?t:e}function be(t,e){return typeof t>"u"?e:t}const ek=(t,e)=>typeof t=="string"&&t.endsWith("%")?parseFloat(t)/100*e:+t;function ze(t,e,n){if(t&&typeof t.call=="function")return t.apply(n,e)}function Me(t,e,n,r){let i,s,o;if(it(t))for(s=t.length,i=0;i<s;i++)e.call(n,t[i],i);else if(Re(t))for(o=Object.keys(t),s=o.length,i=0;i<s;i++)e.call(n,t[o[i]],o[i])}function Lc(t,e){let n,r,i,s;if(!t||!e||t.length!==e.length)return!1;for(n=0,r=t.length;n<r;++n)if(i=t[n],s=e[n],i.datasetIndex!==s.datasetIndex||i.index!==s.index)return!1;return!0}function Oc(t){if(it(t))return t.map(Oc);if(Re(t)){const e=Object.create(null),n=Object.keys(t),r=n.length;let i=0;for(;i<r;++i)e[n[i]]=Oc(t[n[i]]);return e}return t}function rS(t){return["__proto__","prototype","constructor"].indexOf(t)===-1}function tk(t,e,n,r){if(!rS(t))return;const i=e[t],s=n[t];Re(i)&&Re(s)?Qa(i,s,r):e[t]=Oc(s)}function Qa(t,e,n){const r=it(e)?e:[e],i=r.length;if(!Re(t))return t;n=n||{};const s=n.merger||tk;let o;for(let a=0;a<i;++a){if(o=r[a],!Re(o))continue;const l=Object.keys(o);for(let u=0,h=l.length;u<h;++u)s(l[u],t,o,n)}return t}function wa(t,e){return Qa(t,e,{merger:nk})}function nk(t,e,n){if(!rS(t))return;const r=e[t],i=n[t];Re(r)&&Re(i)?wa(r,i):Object.prototype.hasOwnProperty.call(e,t)||(e[t]=Oc(i))}const u2={"":t=>t,x:t=>t.x,y:t=>t.y};function rk(t){const e=t.split("."),n=[];let r="";for(const i of e)r+=i,r.endsWith("\\")?r=r.slice(0,-1)+".":(n.push(r),r="");return n}function ik(t){const e=rk(t);return n=>{for(const r of e){if(r==="")break;n=n&&n[r]}return n}}function Ya(t,e){return(u2[e]||(u2[e]=ik(e)))(t)}function Vg(t){return t.charAt(0).toUpperCase()+t.slice(1)}const Dc=t=>typeof t<"u",si=t=>typeof t=="function",c2=(t,e)=>{if(t.size!==e.size)return!1;for(const n of t)if(!e.has(n))return!1;return!0};function sk(t){return t.type==="mouseup"||t.type==="click"||t.type==="contextmenu"}const wt=Math.PI,dn=2*wt,ok=dn+wt,Mc=Number.POSITIVE_INFINITY,ak=wt/180,hn=wt/2,Ei=wt/4,h2=wt*2/3,Vr=Math.log10,Ks=Math.sign;function Ea(t,e,n){return Math.abs(t-e)<n}function f2(t){const e=Math.round(t);t=Ea(t,e,t/1e3)?e:t;const n=Math.pow(10,Math.floor(Vr(t))),r=t/n;return(r<=1?1:r<=2?2:r<=5?5:10)*n}function lk(t){const e=[],n=Math.sqrt(t);let r;for(r=1;r<n;r++)t%r===0&&(e.push(r),e.push(t/r));return n===(n|0)&&e.push(n),e.sort((i,s)=>i-s).pop(),e}function uk(t){return typeof t=="symbol"||typeof t=="object"&&t!==null&&!(Symbol.toPrimitive in t||"toString"in t||"valueOf"in t)}function Nc(t){return!uk(t)&&!isNaN(parseFloat(t))&&isFinite(t)}function ck(t,e){const n=Math.round(t);return n-e<=t&&n+e>=t}function iS(t,e,n){let r,i,s;for(r=0,i=t.length;r<i;r++)s=t[r][n],isNaN(s)||(e.min=Math.min(e.min,s),e.max=Math.max(e.max,s))}function Fr(t){return t*(wt/180)}function Fg(t){return t*(180/wt)}function d2(t){if(!st(t))return;let e=1,n=0;for(;Math.round(t*e)/e!==t;)e*=10,n++;return n}function hk(t,e){const n=e.x-t.x,r=e.y-t.y,i=Math.sqrt(n*n+r*r);let s=Math.atan2(r,n);return s<-.5*wt&&(s+=dn),{angle:s,distance:i}}function jp(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function fk(t,e){return(t-e+ok)%dn-wt}function un(t){return(t%dn+dn)%dn}function sS(t,e,n,r){const i=un(t),s=un(e),o=un(n),a=un(s-i),l=un(o-i),u=un(i-s),h=un(i-o);return i===s||i===o||r&&s===o||a>l&&u<h}function ur(t,e,n){return Math.max(e,Math.min(n,t))}function dk(t){return ur(t,-32768,32767)}function Is(t,e,n,r=1e-6){return t>=Math.min(e,n)-r&&t<=Math.max(e,n)+r}function zg(t,e,n){n=n||(o=>t[o]<e);let r=t.length-1,i=0,s;for(;r-i>1;)s=i+r>>1,n(s)?i=s:r=s;return{lo:i,hi:r}}const Bp=(t,e,n,r)=>zg(t,n,r?i=>{const s=t[i][e];return s<n||s===n&&t[i+1][e]===n}:i=>t[i][e]<n),pk=(t,e,n)=>zg(t,n,r=>t[r][e]>=n);function mk(t,e,n){let r=0,i=t.length;for(;r<i&&t[r]<e;)r++;for(;i>r&&t[i-1]>n;)i--;return r>0||i<t.length?t.slice(r,i):t}const oS=["push","pop","shift","splice","unshift"];function gk(t,e){if(t._chartjs){t._chartjs.listeners.push(e);return}Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),oS.forEach(n=>{const r="_onData"+Vg(n),i=t[n];Object.defineProperty(t,n,{configurable:!0,enumerable:!1,value(...s){const o=i.apply(this,s);return t._chartjs.listeners.forEach(a=>{typeof a[r]=="function"&&a[r](...s)}),o}})})}function p2(t,e){const n=t._chartjs;if(!n)return;const r=n.listeners,i=r.indexOf(e);i!==-1&&r.splice(i,1),!(r.length>0)&&(oS.forEach(s=>{delete t[s]}),delete t._chartjs)}function _k(t){const e=new Set(t);return e.size===t.length?t:Array.from(e)}const aS=function(){return typeof window>"u"?function(t){return t()}:window.requestAnimationFrame}();function lS(t,e){let n=[],r=!1;return function(...i){n=i,r||(r=!0,aS.call(window,()=>{r=!1,t.apply(e,n)}))}}function yk(t,e){let n;return function(...r){return e?(clearTimeout(n),n=setTimeout(t,e,r)):t.apply(this,r),e}}const uS=t=>t==="start"?"left":t==="end"?"right":"center",on=(t,e,n)=>t==="start"?e:t==="end"?n:(e+n)/2,vk=(t,e,n,r)=>t===(r?"left":"right")?n:t==="center"?(e+n)/2:e,fu=t=>t===0||t===1,m2=(t,e,n)=>-(Math.pow(2,10*(t-=1))*Math.sin((t-e)*dn/n)),g2=(t,e,n)=>Math.pow(2,-10*t)*Math.sin((t-e)*dn/n)+1,Sa={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>-t*(t-2),easeInOutQuad:t=>(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1),easeInCubic:t=>t*t*t,easeOutCubic:t=>(t-=1)*t*t+1,easeInOutCubic:t=>(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2),easeInQuart:t=>t*t*t*t,easeOutQuart:t=>-((t-=1)*t*t*t-1),easeInOutQuart:t=>(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2),easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>(t-=1)*t*t*t*t+1,easeInOutQuint:t=>(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2),easeInSine:t=>-Math.cos(t*hn)+1,easeOutSine:t=>Math.sin(t*hn),easeInOutSine:t=>-.5*(Math.cos(wt*t)-1),easeInExpo:t=>t===0?0:Math.pow(2,10*(t-1)),easeOutExpo:t=>t===1?1:-Math.pow(2,-10*t)+1,easeInOutExpo:t=>fu(t)?t:t<.5?.5*Math.pow(2,10*(t*2-1)):.5*(-Math.pow(2,-10*(t*2-1))+2),easeInCirc:t=>t>=1?t:-(Math.sqrt(1-t*t)-1),easeOutCirc:t=>Math.sqrt(1-(t-=1)*t),easeInOutCirc:t=>(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1),easeInElastic:t=>fu(t)?t:m2(t,.075,.3),easeOutElastic:t=>fu(t)?t:g2(t,.075,.3),easeInOutElastic(t){return fu(t)?t:t<.5?.5*m2(t*2,.1125,.45):.5+.5*g2(t*2-1,.1125,.45)},easeInBack(t){return t*t*((1.70158+1)*t-1.70158)},easeOutBack(t){return(t-=1)*t*((1.70158+1)*t+1.70158)+1},easeInOutBack(t){let e=1.70158;return(t/=.5)<1?.5*(t*t*(((e*=1.525)+1)*t-e)):.5*((t-=2)*t*(((e*=1.525)+1)*t+e)+2)},easeInBounce:t=>1-Sa.easeOutBounce(1-t),easeOutBounce(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},easeInOutBounce:t=>t<.5?Sa.easeInBounce(t*2)*.5:Sa.easeOutBounce(t*2-1)*.5+.5};function jg(t){if(t&&typeof t=="object"){const e=t.toString();return e==="[object CanvasPattern]"||e==="[object CanvasGradient]"}return!1}function _2(t){return jg(t)?t:new Ga(t)}function ld(t){return jg(t)?t:new Ga(t).saturate(.5).darken(.1).hexString()}const wk=["x","y","borderWidth","radius","tension"],Ek=["color","borderColor","backgroundColor"];function Sk(t){t.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),t.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:e=>e!=="onProgress"&&e!=="onComplete"&&e!=="fn"}),t.set("animations",{colors:{type:"color",properties:Ek},numbers:{type:"number",properties:wk}}),t.describe("animations",{_fallback:"animation"}),t.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:e=>e|0}}}})}function Tk(t){t.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const y2=new Map;function bk(t,e){e=e||{};const n=t+JSON.stringify(e);let r=y2.get(n);return r||(r=new Intl.NumberFormat(t,e),y2.set(n,r)),r}function Bg(t,e,n){return bk(e,n).format(t)}const cS={values(t){return it(t)?t:""+t},numeric(t,e,n){if(t===0)return"0";const r=this.chart.options.locale;let i,s=t;if(n.length>1){const u=Math.max(Math.abs(n[0].value),Math.abs(n[n.length-1].value));(u<1e-4||u>1e15)&&(i="scientific"),s=xk(t,n)}const o=Vr(Math.abs(s)),a=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),l={notation:i,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(l,this.options.ticks.format),Bg(t,r,l)},logarithmic(t,e,n){if(t===0)return"0";const r=n[e].significand||t/Math.pow(10,Math.floor(Vr(t)));return[1,2,3,5,10,15].includes(r)||e>.8*n.length?cS.numeric.call(this,t,e,n):""}};function xk(t,e){let n=e.length>3?e[2].value-e[1].value:e[1].value-e[0].value;return Math.abs(n)>=1&&t!==Math.floor(t)&&(n=t-Math.floor(t)),n}var zh={formatters:cS};function Ik(t){t.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(e,n)=>n.lineWidth,tickColor:(e,n)=>n.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:zh.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),t.route("scale.ticks","color","","color"),t.route("scale.grid","color","","borderColor"),t.route("scale.border","color","","borderColor"),t.route("scale.title","color","","color"),t.describe("scale",{_fallback:!1,_scriptable:e=>!e.startsWith("before")&&!e.startsWith("after")&&e!=="callback"&&e!=="parser",_indexable:e=>e!=="borderDash"&&e!=="tickBorderDash"&&e!=="dash"}),t.describe("scales",{_fallback:"scale"}),t.describe("scale.ticks",{_scriptable:e=>e!=="backdropPadding"&&e!=="callback",_indexable:e=>e!=="backdropPadding"})}const Wi=Object.create(null),$p=Object.create(null);function Ta(t,e){if(!e)return t;const n=e.split(".");for(let r=0,i=n.length;r<i;++r){const s=n[r];t=t[s]||(t[s]=Object.create(null))}return t}function ud(t,e,n){return typeof e=="string"?Qa(Ta(t,e),n):Qa(Ta(t,""),e)}class Rk{constructor(e,n){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=r=>r.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(r,i)=>ld(i.backgroundColor),this.hoverBorderColor=(r,i)=>ld(i.borderColor),this.hoverColor=(r,i)=>ld(i.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(e),this.apply(n)}set(e,n){return ud(this,e,n)}get(e){return Ta(this,e)}describe(e,n){return ud($p,e,n)}override(e,n){return ud(Wi,e,n)}route(e,n,r,i){const s=Ta(this,e),o=Ta(this,r),a="_"+n;Object.defineProperties(s,{[a]:{value:s[n],writable:!0},[n]:{enumerable:!0,get(){const l=this[a],u=o[i];return Re(l)?Object.assign({},u,l):be(l,u)},set(l){this[a]=l}}})}apply(e){e.forEach(n=>n(this))}}var ot=new Rk({_scriptable:t=>!t.startsWith("on"),_indexable:t=>t!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[Sk,Tk,Ik]);function Ak(t){return!t||We(t.size)||We(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family}function Vc(t,e,n,r,i){let s=e[i];return s||(s=e[i]=t.measureText(i).width,n.push(i)),s>r&&(r=s),r}function Ck(t,e,n,r){r=r||{};let i=r.data=r.data||{},s=r.garbageCollect=r.garbageCollect||[];r.font!==e&&(i=r.data={},s=r.garbageCollect=[],r.font=e),t.save(),t.font=e;let o=0;const a=n.length;let l,u,h,f,d;for(l=0;l<a;l++)if(f=n[l],f!=null&&!it(f))o=Vc(t,i,s,o,f);else if(it(f))for(u=0,h=f.length;u<h;u++)d=f[u],d!=null&&!it(d)&&(o=Vc(t,i,s,o,d));t.restore();const m=s.length/2;if(m>n.length){for(l=0;l<m;l++)delete i[s[l]];s.splice(0,m)}return o}function Si(t,e,n){const r=t.currentDevicePixelRatio,i=n!==0?Math.max(n/2,.5):0;return Math.round((e-i)*r)/r+i}function v2(t,e){!e&&!t||(e=e||t.getContext("2d"),e.save(),e.resetTransform(),e.clearRect(0,0,t.width,t.height),e.restore())}function Up(t,e,n,r){hS(t,e,n,r,null)}function hS(t,e,n,r,i){let s,o,a,l,u,h,f,d;const m=e.pointStyle,_=e.rotation,y=e.radius;let E=(_||0)*ak;if(m&&typeof m=="object"&&(s=m.toString(),s==="[object HTMLImageElement]"||s==="[object HTMLCanvasElement]")){t.save(),t.translate(n,r),t.rotate(E),t.drawImage(m,-m.width/2,-m.height/2,m.width,m.height),t.restore();return}if(!(isNaN(y)||y<=0)){switch(t.beginPath(),m){default:i?t.ellipse(n,r,i/2,y,0,0,dn):t.arc(n,r,y,0,dn),t.closePath();break;case"triangle":h=i?i/2:y,t.moveTo(n+Math.sin(E)*h,r-Math.cos(E)*y),E+=h2,t.lineTo(n+Math.sin(E)*h,r-Math.cos(E)*y),E+=h2,t.lineTo(n+Math.sin(E)*h,r-Math.cos(E)*y),t.closePath();break;case"rectRounded":u=y*.516,l=y-u,o=Math.cos(E+Ei)*l,f=Math.cos(E+Ei)*(i?i/2-u:l),a=Math.sin(E+Ei)*l,d=Math.sin(E+Ei)*(i?i/2-u:l),t.arc(n-f,r-a,u,E-wt,E-hn),t.arc(n+d,r-o,u,E-hn,E),t.arc(n+f,r+a,u,E,E+hn),t.arc(n-d,r+o,u,E+hn,E+wt),t.closePath();break;case"rect":if(!_){l=Math.SQRT1_2*y,h=i?i/2:l,t.rect(n-h,r-l,2*h,2*l);break}E+=Ei;case"rectRot":f=Math.cos(E)*(i?i/2:y),o=Math.cos(E)*y,a=Math.sin(E)*y,d=Math.sin(E)*(i?i/2:y),t.moveTo(n-f,r-a),t.lineTo(n+d,r-o),t.lineTo(n+f,r+a),t.lineTo(n-d,r+o),t.closePath();break;case"crossRot":E+=Ei;case"cross":f=Math.cos(E)*(i?i/2:y),o=Math.cos(E)*y,a=Math.sin(E)*y,d=Math.sin(E)*(i?i/2:y),t.moveTo(n-f,r-a),t.lineTo(n+f,r+a),t.moveTo(n+d,r-o),t.lineTo(n-d,r+o);break;case"star":f=Math.cos(E)*(i?i/2:y),o=Math.cos(E)*y,a=Math.sin(E)*y,d=Math.sin(E)*(i?i/2:y),t.moveTo(n-f,r-a),t.lineTo(n+f,r+a),t.moveTo(n+d,r-o),t.lineTo(n-d,r+o),E+=Ei,f=Math.cos(E)*(i?i/2:y),o=Math.cos(E)*y,a=Math.sin(E)*y,d=Math.sin(E)*(i?i/2:y),t.moveTo(n-f,r-a),t.lineTo(n+f,r+a),t.moveTo(n+d,r-o),t.lineTo(n-d,r+o);break;case"line":o=i?i/2:Math.cos(E)*y,a=Math.sin(E)*y,t.moveTo(n-o,r-a),t.lineTo(n+o,r+a);break;case"dash":t.moveTo(n,r),t.lineTo(n+Math.cos(E)*(i?i/2:y),r+Math.sin(E)*y);break;case!1:t.closePath();break}t.fill(),e.borderWidth>0&&t.stroke()}}function cr(t,e,n){return n=n||.5,!e||t&&t.x>e.left-n&&t.x<e.right+n&&t.y>e.top-n&&t.y<e.bottom+n}function jh(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()}function Bh(t){t.restore()}function Pk(t,e,n,r,i){if(!e)return t.lineTo(n.x,n.y);if(i==="middle"){const s=(e.x+n.x)/2;t.lineTo(s,e.y),t.lineTo(s,n.y)}else i==="after"!=!!r?t.lineTo(e.x,n.y):t.lineTo(n.x,e.y);t.lineTo(n.x,n.y)}function kk(t,e,n,r){if(!e)return t.lineTo(n.x,n.y);t.bezierCurveTo(r?e.cp1x:e.cp2x,r?e.cp1y:e.cp2y,r?n.cp2x:n.cp1x,r?n.cp2y:n.cp1y,n.x,n.y)}function Lk(t,e){e.translation&&t.translate(e.translation[0],e.translation[1]),We(e.rotation)||t.rotate(e.rotation),e.color&&(t.fillStyle=e.color),e.textAlign&&(t.textAlign=e.textAlign),e.textBaseline&&(t.textBaseline=e.textBaseline)}function Ok(t,e,n,r,i){if(i.strikethrough||i.underline){const s=t.measureText(r),o=e-s.actualBoundingBoxLeft,a=e+s.actualBoundingBoxRight,l=n-s.actualBoundingBoxAscent,u=n+s.actualBoundingBoxDescent,h=i.strikethrough?(l+u)/2:u;t.strokeStyle=t.fillStyle,t.beginPath(),t.lineWidth=i.decorationWidth||2,t.moveTo(o,h),t.lineTo(a,h),t.stroke()}}function Dk(t,e){const n=t.fillStyle;t.fillStyle=e.color,t.fillRect(e.left,e.top,e.width,e.height),t.fillStyle=n}function Gs(t,e,n,r,i,s={}){const o=it(e)?e:[e],a=s.strokeWidth>0&&s.strokeColor!=="";let l,u;for(t.save(),t.font=i.string,Lk(t,s),l=0;l<o.length;++l)u=o[l],s.backdrop&&Dk(t,s.backdrop),a&&(s.strokeColor&&(t.strokeStyle=s.strokeColor),We(s.strokeWidth)||(t.lineWidth=s.strokeWidth),t.strokeText(u,n,r,s.maxWidth)),t.fillText(u,n,r,s.maxWidth),Ok(t,n,r,u,s),r+=Number(i.lineHeight);t.restore()}function Fc(t,e){const{x:n,y:r,w:i,h:s,radius:o}=e;t.arc(n+o.topLeft,r+o.topLeft,o.topLeft,1.5*wt,wt,!0),t.lineTo(n,r+s-o.bottomLeft),t.arc(n+o.bottomLeft,r+s-o.bottomLeft,o.bottomLeft,wt,hn,!0),t.lineTo(n+i-o.bottomRight,r+s),t.arc(n+i-o.bottomRight,r+s-o.bottomRight,o.bottomRight,hn,0,!0),t.lineTo(n+i,r+o.topRight),t.arc(n+i-o.topRight,r+o.topRight,o.topRight,0,-hn,!0),t.lineTo(n+o.topLeft,r)}const Mk=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,Nk=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function Vk(t,e){const n=(""+t).match(Mk);if(!n||n[1]==="normal")return e*1.2;switch(t=+n[2],n[3]){case"px":return t;case"%":t/=100;break}return e*t}const Fk=t=>+t||0;function fS(t,e){const n={},r=Re(e),i=r?Object.keys(e):e,s=Re(t)?r?o=>be(t[o],t[e[o]]):o=>t[o]:()=>t;for(const o of i)n[o]=Fk(s(o));return n}function zk(t){return fS(t,{top:"y",right:"x",bottom:"y",left:"x"})}function Os(t){return fS(t,["topLeft","topRight","bottomLeft","bottomRight"])}function Wt(t){const e=zk(t);return e.width=e.left+e.right,e.height=e.top+e.bottom,e}function xt(t,e){t=t||{},e=e||ot.font;let n=be(t.size,e.size);typeof n=="string"&&(n=parseInt(n,10));let r=be(t.style,e.style);r&&!(""+r).match(Nk)&&(console.warn('Invalid font style specified: "'+r+'"'),r=void 0);const i={family:be(t.family,e.family),lineHeight:Vk(be(t.lineHeight,e.lineHeight),n),size:n,style:r,weight:be(t.weight,e.weight),string:""};return i.string=Ak(i),i}function du(t,e,n,r){let i,s,o;for(i=0,s=t.length;i<s;++i)if(o=t[i],o!==void 0&&o!==void 0)return o}function jk(t,e,n){const{min:r,max:i}=t,s=ek(e,(i-r)/2),o=(a,l)=>n&&a===0?0:a+l;return{min:o(r,-Math.abs(s)),max:o(i,s)}}function mi(t,e){return Object.assign(Object.create(t),e)}function $g(t,e=[""],n,r,i=()=>t[0]){const s=n||t;typeof r>"u"&&(r=gS("_fallback",t));const o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:t,_rootScopes:s,_fallback:r,_getTarget:i,override:a=>$g([a,...t],e,s,r)};return new Proxy(o,{deleteProperty(a,l){return delete a[l],delete a._keys,delete t[0][l],!0},get(a,l){return pS(a,l,()=>Gk(l,e,t,a))},getOwnPropertyDescriptor(a,l){return Reflect.getOwnPropertyDescriptor(a._scopes[0],l)},getPrototypeOf(){return Reflect.getPrototypeOf(t[0])},has(a,l){return E2(a).includes(l)},ownKeys(a){return E2(a)},set(a,l,u){const h=a._storage||(a._storage=i());return a[l]=h[l]=u,delete a._keys,!0}})}function Qs(t,e,n,r){const i={_cacheable:!1,_proxy:t,_context:e,_subProxy:n,_stack:new Set,_descriptors:dS(t,r),setContext:s=>Qs(t,s,n,r),override:s=>Qs(t.override(s),e,n,r)};return new Proxy(i,{deleteProperty(s,o){return delete s[o],delete t[o],!0},get(s,o,a){return pS(s,o,()=>$k(s,o,a))},getOwnPropertyDescriptor(s,o){return s._descriptors.allKeys?Reflect.has(t,o)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(t,o)},getPrototypeOf(){return Reflect.getPrototypeOf(t)},has(s,o){return Reflect.has(t,o)},ownKeys(){return Reflect.ownKeys(t)},set(s,o,a){return t[o]=a,delete s[o],!0}})}function dS(t,e={scriptable:!0,indexable:!0}){const{_scriptable:n=e.scriptable,_indexable:r=e.indexable,_allKeys:i=e.allKeys}=t;return{allKeys:i,scriptable:n,indexable:r,isScriptable:si(n)?n:()=>n,isIndexable:si(r)?r:()=>r}}const Bk=(t,e)=>t?t+Vg(e):e,Ug=(t,e)=>Re(e)&&t!=="adapters"&&(Object.getPrototypeOf(e)===null||e.constructor===Object);function pS(t,e,n){if(Object.prototype.hasOwnProperty.call(t,e)||e==="constructor")return t[e];const r=n();return t[e]=r,r}function $k(t,e,n){const{_proxy:r,_context:i,_subProxy:s,_descriptors:o}=t;let a=r[e];return si(a)&&o.isScriptable(e)&&(a=Uk(e,a,t,n)),it(a)&&a.length&&(a=Hk(e,a,t,o.isIndexable)),Ug(e,a)&&(a=Qs(a,i,s&&s[e],o)),a}function Uk(t,e,n,r){const{_proxy:i,_context:s,_subProxy:o,_stack:a}=n;if(a.has(t))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+t);a.add(t);let l=e(s,o||r);return a.delete(t),Ug(t,l)&&(l=Hg(i._scopes,i,t,l)),l}function Hk(t,e,n,r){const{_proxy:i,_context:s,_subProxy:o,_descriptors:a}=n;if(typeof s.index<"u"&&r(t))return e[s.index%e.length];if(Re(e[0])){const l=e,u=i._scopes.filter(h=>h!==l);e=[];for(const h of l){const f=Hg(u,i,t,h);e.push(Qs(f,s,o&&o[t],a))}}return e}function mS(t,e,n){return si(t)?t(e,n):t}const Wk=(t,e)=>t===!0?e:typeof t=="string"?Ya(e,t):void 0;function qk(t,e,n,r,i){for(const s of e){const o=Wk(n,s);if(o){t.add(o);const a=mS(o._fallback,n,i);if(typeof a<"u"&&a!==n&&a!==r)return a}else if(o===!1&&typeof r<"u"&&n!==r)return null}return!1}function Hg(t,e,n,r){const i=e._rootScopes,s=mS(e._fallback,n,r),o=[...t,...i],a=new Set;a.add(r);let l=w2(a,o,n,s||n,r);return l===null||typeof s<"u"&&s!==n&&(l=w2(a,o,s,l,r),l===null)?!1:$g(Array.from(a),[""],i,s,()=>Kk(e,n,r))}function w2(t,e,n,r,i){for(;n;)n=qk(t,e,n,r,i);return n}function Kk(t,e,n){const r=t._getTarget();e in r||(r[e]={});const i=r[e];return it(i)&&Re(n)?n:i||{}}function Gk(t,e,n,r){let i;for(const s of e)if(i=gS(Bk(s,t),n),typeof i<"u")return Ug(t,i)?Hg(n,r,t,i):i}function gS(t,e){for(const n of e){if(!n)continue;const r=n[t];if(typeof r<"u")return r}}function E2(t){let e=t._keys;return e||(e=t._keys=Qk(t._scopes)),e}function Qk(t){const e=new Set;for(const n of t)for(const r of Object.keys(n).filter(i=>!i.startsWith("_")))e.add(r);return Array.from(e)}function Yk(t,e,n,r){const{iScale:i}=t,{key:s="r"}=this._parsing,o=new Array(r);let a,l,u,h;for(a=0,l=r;a<l;++a)u=a+n,h=e[u],o[a]={r:i.parse(Ya(h,s),u)};return o}const Xk=Number.EPSILON||1e-14,Ys=(t,e)=>e<t.length&&!t[e].skip&&t[e],_S=t=>t==="x"?"y":"x";function Jk(t,e,n,r){const i=t.skip?e:t,s=e,o=n.skip?e:n,a=jp(s,i),l=jp(o,s);let u=a/(a+l),h=l/(a+l);u=isNaN(u)?0:u,h=isNaN(h)?0:h;const f=r*u,d=r*h;return{previous:{x:s.x-f*(o.x-i.x),y:s.y-f*(o.y-i.y)},next:{x:s.x+d*(o.x-i.x),y:s.y+d*(o.y-i.y)}}}function Zk(t,e,n){const r=t.length;let i,s,o,a,l,u=Ys(t,0);for(let h=0;h<r-1;++h)if(l=u,u=Ys(t,h+1),!(!l||!u)){if(Ea(e[h],0,Xk)){n[h]=n[h+1]=0;continue}i=n[h]/e[h],s=n[h+1]/e[h],a=Math.pow(i,2)+Math.pow(s,2),!(a<=9)&&(o=3/Math.sqrt(a),n[h]=i*o*e[h],n[h+1]=s*o*e[h])}}function e9(t,e,n="x"){const r=_S(n),i=t.length;let s,o,a,l=Ys(t,0);for(let u=0;u<i;++u){if(o=a,a=l,l=Ys(t,u+1),!a)continue;const h=a[n],f=a[r];o&&(s=(h-o[n])/3,a[`cp1${n}`]=h-s,a[`cp1${r}`]=f-s*e[u]),l&&(s=(l[n]-h)/3,a[`cp2${n}`]=h+s,a[`cp2${r}`]=f+s*e[u])}}function t9(t,e="x"){const n=_S(e),r=t.length,i=Array(r).fill(0),s=Array(r);let o,a,l,u=Ys(t,0);for(o=0;o<r;++o)if(a=l,l=u,u=Ys(t,o+1),!!l){if(u){const h=u[e]-l[e];i[o]=h!==0?(u[n]-l[n])/h:0}s[o]=a?u?Ks(i[o-1])!==Ks(i[o])?0:(i[o-1]+i[o])/2:i[o-1]:i[o]}Zk(t,i,s),e9(t,s,e)}function pu(t,e,n){return Math.max(Math.min(t,n),e)}function n9(t,e){let n,r,i,s,o,a=cr(t[0],e);for(n=0,r=t.length;n<r;++n)o=s,s=a,a=n<r-1&&cr(t[n+1],e),s&&(i=t[n],o&&(i.cp1x=pu(i.cp1x,e.left,e.right),i.cp1y=pu(i.cp1y,e.top,e.bottom)),a&&(i.cp2x=pu(i.cp2x,e.left,e.right),i.cp2y=pu(i.cp2y,e.top,e.bottom)))}function r9(t,e,n,r,i){let s,o,a,l;if(e.spanGaps&&(t=t.filter(u=>!u.skip)),e.cubicInterpolationMode==="monotone")t9(t,i);else{let u=r?t[t.length-1]:t[0];for(s=0,o=t.length;s<o;++s)a=t[s],l=Jk(u,a,t[Math.min(s+1,o-(r?0:1))%o],e.tension),a.cp1x=l.previous.x,a.cp1y=l.previous.y,a.cp2x=l.next.x,a.cp2y=l.next.y,u=a}e.capBezierPoints&&n9(t,n)}function Wg(){return typeof window<"u"&&typeof document<"u"}function qg(t){let e=t.parentNode;return e&&e.toString()==="[object ShadowRoot]"&&(e=e.host),e}function zc(t,e,n){let r;return typeof t=="string"?(r=parseInt(t,10),t.indexOf("%")!==-1&&(r=r/100*e.parentNode[n])):r=t,r}const $h=t=>t.ownerDocument.defaultView.getComputedStyle(t,null);function i9(t,e){return $h(t).getPropertyValue(e)}const s9=["top","right","bottom","left"];function Fi(t,e,n){const r={};n=n?"-"+n:"";for(let i=0;i<4;i++){const s=s9[i];r[s]=parseFloat(t[e+"-"+s+n])||0}return r.width=r.left+r.right,r.height=r.top+r.bottom,r}const o9=(t,e,n)=>(t>0||e>0)&&(!n||!n.shadowRoot);function a9(t,e){const n=t.touches,r=n&&n.length?n[0]:t,{offsetX:i,offsetY:s}=r;let o=!1,a,l;if(o9(i,s,t.target))a=i,l=s;else{const u=e.getBoundingClientRect();a=r.clientX-u.left,l=r.clientY-u.top,o=!0}return{x:a,y:l,box:o}}function Ri(t,e){if("native"in t)return t;const{canvas:n,currentDevicePixelRatio:r}=e,i=$h(n),s=i.boxSizing==="border-box",o=Fi(i,"padding"),a=Fi(i,"border","width"),{x:l,y:u,box:h}=a9(t,n),f=o.left+(h&&a.left),d=o.top+(h&&a.top);let{width:m,height:_}=e;return s&&(m-=o.width+a.width,_-=o.height+a.height),{x:Math.round((l-f)/m*n.width/r),y:Math.round((u-d)/_*n.height/r)}}function l9(t,e,n){let r,i;if(e===void 0||n===void 0){const s=t&&qg(t);if(!s)e=t.clientWidth,n=t.clientHeight;else{const o=s.getBoundingClientRect(),a=$h(s),l=Fi(a,"border","width"),u=Fi(a,"padding");e=o.width-u.width-l.width,n=o.height-u.height-l.height,r=zc(a.maxWidth,s,"clientWidth"),i=zc(a.maxHeight,s,"clientHeight")}}return{width:e,height:n,maxWidth:r||Mc,maxHeight:i||Mc}}const mu=t=>Math.round(t*10)/10;function u9(t,e,n,r){const i=$h(t),s=Fi(i,"margin"),o=zc(i.maxWidth,t,"clientWidth")||Mc,a=zc(i.maxHeight,t,"clientHeight")||Mc,l=l9(t,e,n);let{width:u,height:h}=l;if(i.boxSizing==="content-box"){const d=Fi(i,"border","width"),m=Fi(i,"padding");u-=m.width+d.width,h-=m.height+d.height}return u=Math.max(0,u-s.width),h=Math.max(0,r?u/r:h-s.height),u=mu(Math.min(u,o,l.maxWidth)),h=mu(Math.min(h,a,l.maxHeight)),u&&!h&&(h=mu(u/2)),(e!==void 0||n!==void 0)&&r&&l.height&&h>l.height&&(h=l.height,u=mu(Math.floor(h*r))),{width:u,height:h}}function S2(t,e,n){const r=e||1,i=Math.floor(t.height*r),s=Math.floor(t.width*r);t.height=Math.floor(t.height),t.width=Math.floor(t.width);const o=t.canvas;return o.style&&(n||!o.style.height&&!o.style.width)&&(o.style.height=`${t.height}px`,o.style.width=`${t.width}px`),t.currentDevicePixelRatio!==r||o.height!==i||o.width!==s?(t.currentDevicePixelRatio=r,o.height=i,o.width=s,t.ctx.setTransform(r,0,0,r,0,0),!0):!1}const c9=function(){let t=!1;try{const e={get passive(){return t=!0,!1}};Wg()&&(window.addEventListener("test",null,e),window.removeEventListener("test",null,e))}catch{}return t}();function T2(t,e){const n=i9(t,e),r=n&&n.match(/^(\d+)(\.\d+)?px$/);return r?+r[1]:void 0}function Ai(t,e,n,r){return{x:t.x+n*(e.x-t.x),y:t.y+n*(e.y-t.y)}}function h9(t,e,n,r){return{x:t.x+n*(e.x-t.x),y:r==="middle"?n<.5?t.y:e.y:r==="after"?n<1?t.y:e.y:n>0?e.y:t.y}}function f9(t,e,n,r){const i={x:t.cp2x,y:t.cp2y},s={x:e.cp1x,y:e.cp1y},o=Ai(t,i,n),a=Ai(i,s,n),l=Ai(s,e,n),u=Ai(o,a,n),h=Ai(a,l,n);return Ai(u,h,n)}const d9=function(t,e){return{x(n){return t+t+e-n},setWidth(n){e=n},textAlign(n){return n==="center"?n:n==="right"?"left":"right"},xPlus(n,r){return n-r},leftForLtr(n,r){return n-r}}},p9=function(){return{x(t){return t},setWidth(t){},textAlign(t){return t},xPlus(t,e){return t+e},leftForLtr(t,e){return t}}};function Ds(t,e,n){return t?d9(e,n):p9()}function yS(t,e){let n,r;(e==="ltr"||e==="rtl")&&(n=t.canvas.style,r=[n.getPropertyValue("direction"),n.getPropertyPriority("direction")],n.setProperty("direction",e,"important"),t.prevTextDirection=r)}function vS(t,e){e!==void 0&&(delete t.prevTextDirection,t.canvas.style.setProperty("direction",e[0],e[1]))}function wS(t){return t==="angle"?{between:sS,compare:fk,normalize:un}:{between:Is,compare:(e,n)=>e-n,normalize:e=>e}}function b2({start:t,end:e,count:n,loop:r,style:i}){return{start:t%n,end:e%n,loop:r&&(e-t+1)%n===0,style:i}}function m9(t,e,n){const{property:r,start:i,end:s}=n,{between:o,normalize:a}=wS(r),l=e.length;let{start:u,end:h,loop:f}=t,d,m;if(f){for(u+=l,h+=l,d=0,m=l;d<m&&o(a(e[u%l][r]),i,s);++d)u--,h--;u%=l,h%=l}return h<u&&(h+=l),{start:u,end:h,loop:f,style:t.style}}function ES(t,e,n){if(!n)return[t];const{property:r,start:i,end:s}=n,o=e.length,{compare:a,between:l,normalize:u}=wS(r),{start:h,end:f,loop:d,style:m}=m9(t,e,n),_=[];let y=!1,E=null,w,v,S;const C=()=>l(i,S,w)&&a(i,S)!==0,O=()=>a(s,w)===0||l(s,S,w),D=()=>y||C(),I=()=>!y||O();for(let T=h,b=h;T<=f;++T)v=e[T%o],!v.skip&&(w=u(v[r]),w!==S&&(y=l(w,i,s),E===null&&D()&&(E=a(w,i)===0?T:b),E!==null&&I()&&(_.push(b2({start:E,end:T,loop:d,count:o,style:m})),E=null),b=T,S=w));return E!==null&&_.push(b2({start:E,end:f,loop:d,count:o,style:m})),_}function SS(t,e){const n=[],r=t.segments;for(let i=0;i<r.length;i++){const s=ES(r[i],t.points,e);s.length&&n.push(...s)}return n}function g9(t,e,n,r){let i=0,s=e-1;if(n&&!r)for(;i<e&&!t[i].skip;)i++;for(;i<e&&t[i].skip;)i++;for(i%=e,n&&(s+=i);s>i&&t[s%e].skip;)s--;return s%=e,{start:i,end:s}}function _9(t,e,n,r){const i=t.length,s=[];let o=e,a=t[e],l;for(l=e+1;l<=n;++l){const u=t[l%i];u.skip||u.stop?a.skip||(r=!1,s.push({start:e%i,end:(l-1)%i,loop:r}),e=o=u.stop?l:null):(o=l,a.skip&&(e=l)),a=u}return o!==null&&s.push({start:e%i,end:o%i,loop:r}),s}function y9(t,e){const n=t.points,r=t.options.spanGaps,i=n.length;if(!i)return[];const s=!!t._loop,{start:o,end:a}=g9(n,i,s,r);if(r===!0)return x2(t,[{start:o,end:a,loop:s}],n,e);const l=a<o?a+i:a,u=!!t._fullLoop&&o===0&&a===i-1;return x2(t,_9(n,o,l,u),n,e)}function x2(t,e,n,r){return!r||!r.setContext||!n?e:v9(t,e,n,r)}function v9(t,e,n,r){const i=t._chart.getContext(),s=I2(t.options),{_datasetIndex:o,options:{spanGaps:a}}=t,l=n.length,u=[];let h=s,f=e[0].start,d=f;function m(_,y,E,w){const v=a?-1:1;if(_!==y){for(_+=l;n[_%l].skip;)_-=v;for(;n[y%l].skip;)y+=v;_%l!==y%l&&(u.push({start:_%l,end:y%l,loop:E,style:w}),h=w,f=y%l)}}for(const _ of e){f=a?f:_.start;let y=n[f%l],E;for(d=f+1;d<=_.end;d++){const w=n[d%l];E=I2(r.setContext(mi(i,{type:"segment",p0:y,p1:w,p0DataIndex:(d-1)%l,p1DataIndex:d%l,datasetIndex:o}))),w9(E,h)&&m(f,d-1,_.loop,h),y=w,h=E}f<d-1&&m(f,d-1,_.loop,h)}return u}function I2(t){return{backgroundColor:t.backgroundColor,borderCapStyle:t.borderCapStyle,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderJoinStyle:t.borderJoinStyle,borderWidth:t.borderWidth,borderColor:t.borderColor}}function w9(t,e){if(!e)return!1;const n=[],r=function(i,s){return jg(s)?(n.includes(s)||n.push(s),n.indexOf(s)):s};return JSON.stringify(t,r)!==JSON.stringify(e,r)}/*!
 * Chart.js v4.4.8
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */class E9{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(e,n,r,i){const s=n.listeners[i],o=n.duration;s.forEach(a=>a({chart:e,initial:n.initial,numSteps:o,currentStep:Math.min(r-n.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=aS.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(e=Date.now()){let n=0;this._charts.forEach((r,i)=>{if(!r.running||!r.items.length)return;const s=r.items;let o=s.length-1,a=!1,l;for(;o>=0;--o)l=s[o],l._active?(l._total>r.duration&&(r.duration=l._total),l.tick(e),a=!0):(s[o]=s[s.length-1],s.pop());a&&(i.draw(),this._notify(i,r,e,"progress")),s.length||(r.running=!1,this._notify(i,r,e,"complete"),r.initial=!1),n+=s.length}),this._lastDate=e,n===0&&(this._running=!1)}_getAnims(e){const n=this._charts;let r=n.get(e);return r||(r={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},n.set(e,r)),r}listen(e,n,r){this._getAnims(e).listeners[n].push(r)}add(e,n){!n||!n.length||this._getAnims(e).items.push(...n)}has(e){return this._getAnims(e).items.length>0}start(e){const n=this._charts.get(e);n&&(n.running=!0,n.start=Date.now(),n.duration=n.items.reduce((r,i)=>Math.max(r,i._duration),0),this._refresh())}running(e){if(!this._running)return!1;const n=this._charts.get(e);return!(!n||!n.running||!n.items.length)}stop(e){const n=this._charts.get(e);if(!n||!n.items.length)return;const r=n.items;let i=r.length-1;for(;i>=0;--i)r[i].cancel();n.items=[],this._notify(e,n,Date.now(),"complete")}remove(e){return this._charts.delete(e)}}var nr=new E9;const R2="transparent",S9={boolean(t,e,n){return n>.5?e:t},color(t,e,n){const r=_2(t||R2),i=r.valid&&_2(e||R2);return i&&i.valid?i.mix(r,n).hexString():e},number(t,e,n){return t+(e-t)*n}};class T9{constructor(e,n,r,i){const s=n[r];i=du([e.to,i,s,e.from]);const o=du([e.from,s,i]);this._active=!0,this._fn=e.fn||S9[e.type||typeof o],this._easing=Sa[e.easing]||Sa.linear,this._start=Math.floor(Date.now()+(e.delay||0)),this._duration=this._total=Math.floor(e.duration),this._loop=!!e.loop,this._target=n,this._prop=r,this._from=o,this._to=i,this._promises=void 0}active(){return this._active}update(e,n,r){if(this._active){this._notify(!1);const i=this._target[this._prop],s=r-this._start,o=this._duration-s;this._start=r,this._duration=Math.floor(Math.max(o,e.duration)),this._total+=s,this._loop=!!e.loop,this._to=du([e.to,n,i,e.from]),this._from=du([e.from,i,n])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(e){const n=e-this._start,r=this._duration,i=this._prop,s=this._from,o=this._loop,a=this._to;let l;if(this._active=s!==a&&(o||n<r),!this._active){this._target[i]=a,this._notify(!0);return}if(n<0){this._target[i]=s;return}l=n/r%2,l=o&&l>1?2-l:l,l=this._easing(Math.min(1,Math.max(0,l))),this._target[i]=this._fn(s,a,l)}wait(){const e=this._promises||(this._promises=[]);return new Promise((n,r)=>{e.push({res:n,rej:r})})}_notify(e){const n=e?"res":"rej",r=this._promises||[];for(let i=0;i<r.length;i++)r[i][n]()}}class TS{constructor(e,n){this._chart=e,this._properties=new Map,this.configure(n)}configure(e){if(!Re(e))return;const n=Object.keys(ot.animation),r=this._properties;Object.getOwnPropertyNames(e).forEach(i=>{const s=e[i];if(!Re(s))return;const o={};for(const a of n)o[a]=s[a];(it(s.properties)&&s.properties||[i]).forEach(a=>{(a===i||!r.has(a))&&r.set(a,o)})})}_animateOptions(e,n){const r=n.options,i=x9(e,r);if(!i)return[];const s=this._createAnimations(i,r);return r.$shared&&b9(e.options.$animations,r).then(()=>{e.options=r},()=>{}),s}_createAnimations(e,n){const r=this._properties,i=[],s=e.$animations||(e.$animations={}),o=Object.keys(n),a=Date.now();let l;for(l=o.length-1;l>=0;--l){const u=o[l];if(u.charAt(0)==="$")continue;if(u==="options"){i.push(...this._animateOptions(e,n));continue}const h=n[u];let f=s[u];const d=r.get(u);if(f)if(d&&f.active()){f.update(d,h,a);continue}else f.cancel();if(!d||!d.duration){e[u]=h;continue}s[u]=f=new T9(d,e,u,h),i.push(f)}return i}update(e,n){if(this._properties.size===0){Object.assign(e,n);return}const r=this._createAnimations(e,n);if(r.length)return nr.add(this._chart,r),!0}}function b9(t,e){const n=[],r=Object.keys(e);for(let i=0;i<r.length;i++){const s=t[r[i]];s&&s.active()&&n.push(s.wait())}return Promise.all(n)}function x9(t,e){if(!e)return;let n=t.options;if(!n){t.options=e;return}return n.$shared&&(t.options=n=Object.assign({},n,{$shared:!1,$animations:{}})),n}function A2(t,e){const n=t&&t.options||{},r=n.reverse,i=n.min===void 0?e:0,s=n.max===void 0?e:0;return{start:r?s:i,end:r?i:s}}function I9(t,e,n){if(n===!1)return!1;const r=A2(t,n),i=A2(e,n);return{top:i.end,right:r.end,bottom:i.start,left:r.start}}function R9(t){let e,n,r,i;return Re(t)?(e=t.top,n=t.right,r=t.bottom,i=t.left):e=n=r=i=t,{top:e,right:n,bottom:r,left:i,disabled:t===!1}}function bS(t,e){const n=[],r=t._getSortedDatasetMetas(e);let i,s;for(i=0,s=r.length;i<s;++i)n.push(r[i].index);return n}function C2(t,e,n,r={}){const i=t.keys,s=r.mode==="single";let o,a,l,u;if(e===null)return;let h=!1;for(o=0,a=i.length;o<a;++o){if(l=+i[o],l===n){if(h=!0,r.all)continue;break}u=t.values[l],st(u)&&(s||e===0||Ks(e)===Ks(u))&&(e+=u)}return!h&&!r.all?0:e}function A9(t,e){const{iScale:n,vScale:r}=e,i=n.axis==="x"?"x":"y",s=r.axis==="x"?"x":"y",o=Object.keys(t),a=new Array(o.length);let l,u,h;for(l=0,u=o.length;l<u;++l)h=o[l],a[l]={[i]:h,[s]:t[h]};return a}function cd(t,e){const n=t&&t.options.stacked;return n||n===void 0&&e.stack!==void 0}function C9(t,e,n){return`${t.id}.${e.id}.${n.stack||n.type}`}function P9(t){const{min:e,max:n,minDefined:r,maxDefined:i}=t.getUserBounds();return{min:r?e:Number.NEGATIVE_INFINITY,max:i?n:Number.POSITIVE_INFINITY}}function k9(t,e,n){const r=t[e]||(t[e]={});return r[n]||(r[n]={})}function P2(t,e,n,r){for(const i of e.getMatchingVisibleMetas(r).reverse()){const s=t[i.index];if(n&&s>0||!n&&s<0)return i.index}return null}function k2(t,e){const{chart:n,_cachedMeta:r}=t,i=n._stacks||(n._stacks={}),{iScale:s,vScale:o,index:a}=r,l=s.axis,u=o.axis,h=C9(s,o,r),f=e.length;let d;for(let m=0;m<f;++m){const _=e[m],{[l]:y,[u]:E}=_,w=_._stacks||(_._stacks={});d=w[u]=k9(i,h,y),d[a]=E,d._top=P2(d,o,!0,r.type),d._bottom=P2(d,o,!1,r.type);const v=d._visualValues||(d._visualValues={});v[a]=E}}function hd(t,e){const n=t.scales;return Object.keys(n).filter(r=>n[r].axis===e).shift()}function L9(t,e){return mi(t,{active:!1,dataset:void 0,datasetIndex:e,index:e,mode:"default",type:"dataset"})}function O9(t,e,n){return mi(t,{active:!1,dataIndex:e,parsed:void 0,raw:void 0,element:n,index:e,mode:"default",type:"data"})}function Qo(t,e){const n=t.controller.index,r=t.vScale&&t.vScale.axis;if(r){e=e||t._parsed;for(const i of e){const s=i._stacks;if(!s||s[r]===void 0||s[r][n]===void 0)return;delete s[r][n],s[r]._visualValues!==void 0&&s[r]._visualValues[n]!==void 0&&delete s[r]._visualValues[n]}}}const fd=t=>t==="reset"||t==="none",L2=(t,e)=>e?t:Object.assign({},t),D9=(t,e,n)=>t&&!e.hidden&&e._stacked&&{keys:bS(n,!0),values:null};class ba{constructor(e,n){this.chart=e,this._ctx=e.ctx,this.index=n,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const e=this._cachedMeta;this.configure(),this.linkScales(),e._stacked=cd(e.vScale,e),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(e){this.index!==e&&Qo(this._cachedMeta),this.index=e}linkScales(){const e=this.chart,n=this._cachedMeta,r=this.getDataset(),i=(f,d,m,_)=>f==="x"?d:f==="r"?_:m,s=n.xAxisID=be(r.xAxisID,hd(e,"x")),o=n.yAxisID=be(r.yAxisID,hd(e,"y")),a=n.rAxisID=be(r.rAxisID,hd(e,"r")),l=n.indexAxis,u=n.iAxisID=i(l,s,o,a),h=n.vAxisID=i(l,o,s,a);n.xScale=this.getScaleForId(s),n.yScale=this.getScaleForId(o),n.rScale=this.getScaleForId(a),n.iScale=this.getScaleForId(u),n.vScale=this.getScaleForId(h)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(e){return this.chart.scales[e]}_getOtherScale(e){const n=this._cachedMeta;return e===n.iScale?n.vScale:n.iScale}reset(){this._update("reset")}_destroy(){const e=this._cachedMeta;this._data&&p2(this._data,this),e._stacked&&Qo(e)}_dataCheck(){const e=this.getDataset(),n=e.data||(e.data=[]),r=this._data;if(Re(n)){const i=this._cachedMeta;this._data=A9(n,i)}else if(r!==n){if(r){p2(r,this);const i=this._cachedMeta;Qo(i),i._parsed=[]}n&&Object.isExtensible(n)&&gk(n,this),this._syncList=[],this._data=n}}addElements(){const e=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(e.dataset=new this.datasetElementType)}buildOrUpdateElements(e){const n=this._cachedMeta,r=this.getDataset();let i=!1;this._dataCheck();const s=n._stacked;n._stacked=cd(n.vScale,n),n.stack!==r.stack&&(i=!0,Qo(n),n.stack=r.stack),this._resyncElements(e),(i||s!==n._stacked)&&(k2(this,n._parsed),n._stacked=cd(n.vScale,n))}configure(){const e=this.chart.config,n=e.datasetScopeKeys(this._type),r=e.getOptionScopes(this.getDataset(),n,!0);this.options=e.createResolver(r,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(e,n){const{_cachedMeta:r,_data:i}=this,{iScale:s,_stacked:o}=r,a=s.axis;let l=e===0&&n===i.length?!0:r._sorted,u=e>0&&r._parsed[e-1],h,f,d;if(this._parsing===!1)r._parsed=i,r._sorted=!0,d=i;else{it(i[e])?d=this.parseArrayData(r,i,e,n):Re(i[e])?d=this.parseObjectData(r,i,e,n):d=this.parsePrimitiveData(r,i,e,n);const m=()=>f[a]===null||u&&f[a]<u[a];for(h=0;h<n;++h)r._parsed[h+e]=f=d[h],l&&(m()&&(l=!1),u=f);r._sorted=l}o&&k2(this,d)}parsePrimitiveData(e,n,r,i){const{iScale:s,vScale:o}=e,a=s.axis,l=o.axis,u=s.getLabels(),h=s===o,f=new Array(i);let d,m,_;for(d=0,m=i;d<m;++d)_=d+r,f[d]={[a]:h||s.parse(u[_],_),[l]:o.parse(n[_],_)};return f}parseArrayData(e,n,r,i){const{xScale:s,yScale:o}=e,a=new Array(i);let l,u,h,f;for(l=0,u=i;l<u;++l)h=l+r,f=n[h],a[l]={x:s.parse(f[0],h),y:o.parse(f[1],h)};return a}parseObjectData(e,n,r,i){const{xScale:s,yScale:o}=e,{xAxisKey:a="x",yAxisKey:l="y"}=this._parsing,u=new Array(i);let h,f,d,m;for(h=0,f=i;h<f;++h)d=h+r,m=n[d],u[h]={x:s.parse(Ya(m,a),d),y:o.parse(Ya(m,l),d)};return u}getParsed(e){return this._cachedMeta._parsed[e]}getDataElement(e){return this._cachedMeta.data[e]}applyStack(e,n,r){const i=this.chart,s=this._cachedMeta,o=n[e.axis],a={keys:bS(i,!0),values:n._stacks[e.axis]._visualValues};return C2(a,o,s.index,{mode:r})}updateRangeFromParsed(e,n,r,i){const s=r[n.axis];let o=s===null?NaN:s;const a=i&&r._stacks[n.axis];i&&a&&(i.values=a,o=C2(i,s,this._cachedMeta.index)),e.min=Math.min(e.min,o),e.max=Math.max(e.max,o)}getMinMax(e,n){const r=this._cachedMeta,i=r._parsed,s=r._sorted&&e===r.iScale,o=i.length,a=this._getOtherScale(e),l=D9(n,r,this.chart),u={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:h,max:f}=P9(a);let d,m;function _(){m=i[d];const y=m[a.axis];return!st(m[e.axis])||h>y||f<y}for(d=0;d<o&&!(!_()&&(this.updateRangeFromParsed(u,e,m,l),s));++d);if(s){for(d=o-1;d>=0;--d)if(!_()){this.updateRangeFromParsed(u,e,m,l);break}}return u}getAllParsedValues(e){const n=this._cachedMeta._parsed,r=[];let i,s,o;for(i=0,s=n.length;i<s;++i)o=n[i][e.axis],st(o)&&r.push(o);return r}getMaxOverflow(){return!1}getLabelAndValue(e){const n=this._cachedMeta,r=n.iScale,i=n.vScale,s=this.getParsed(e);return{label:r?""+r.getLabelForValue(s[r.axis]):"",value:i?""+i.getLabelForValue(s[i.axis]):""}}_update(e){const n=this._cachedMeta;this.update(e||"default"),n._clip=R9(be(this.options.clip,I9(n.xScale,n.yScale,this.getMaxOverflow())))}update(e){}draw(){const e=this._ctx,n=this.chart,r=this._cachedMeta,i=r.data||[],s=n.chartArea,o=[],a=this._drawStart||0,l=this._drawCount||i.length-a,u=this.options.drawActiveElementsOnTop;let h;for(r.dataset&&r.dataset.draw(e,s,a,l),h=a;h<a+l;++h){const f=i[h];f.hidden||(f.active&&u?o.push(f):f.draw(e,s))}for(h=0;h<o.length;++h)o[h].draw(e,s)}getStyle(e,n){const r=n?"active":"default";return e===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(r):this.resolveDataElementOptions(e||0,r)}getContext(e,n,r){const i=this.getDataset();let s;if(e>=0&&e<this._cachedMeta.data.length){const o=this._cachedMeta.data[e];s=o.$context||(o.$context=O9(this.getContext(),e,o)),s.parsed=this.getParsed(e),s.raw=i.data[e],s.index=s.dataIndex=e}else s=this.$context||(this.$context=L9(this.chart.getContext(),this.index)),s.dataset=i,s.index=s.datasetIndex=this.index;return s.active=!!n,s.mode=r,s}resolveDatasetElementOptions(e){return this._resolveElementOptions(this.datasetElementType.id,e)}resolveDataElementOptions(e,n){return this._resolveElementOptions(this.dataElementType.id,n,e)}_resolveElementOptions(e,n="default",r){const i=n==="active",s=this._cachedDataOpts,o=e+"-"+n,a=s[o],l=this.enableOptionSharing&&Dc(r);if(a)return L2(a,l);const u=this.chart.config,h=u.datasetElementScopeKeys(this._type,e),f=i?[`${e}Hover`,"hover",e,""]:[e,""],d=u.getOptionScopes(this.getDataset(),h),m=Object.keys(ot.elements[e]),_=()=>this.getContext(r,i,n),y=u.resolveNamedOptions(d,m,_,f);return y.$shared&&(y.$shared=l,s[o]=Object.freeze(L2(y,l))),y}_resolveAnimations(e,n,r){const i=this.chart,s=this._cachedDataOpts,o=`animation-${n}`,a=s[o];if(a)return a;let l;if(i.options.animation!==!1){const h=this.chart.config,f=h.datasetAnimationScopeKeys(this._type,n),d=h.getOptionScopes(this.getDataset(),f);l=h.createResolver(d,this.getContext(e,r,n))}const u=new TS(i,l&&l.animations);return l&&l._cacheable&&(s[o]=Object.freeze(u)),u}getSharedOptions(e){if(e.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},e))}includeOptions(e,n){return!n||fd(e)||this.chart._animationsDisabled}_getSharedOptions(e,n){const r=this.resolveDataElementOptions(e,n),i=this._sharedOptions,s=this.getSharedOptions(r),o=this.includeOptions(n,s)||s!==i;return this.updateSharedOptions(s,n,r),{sharedOptions:s,includeOptions:o}}updateElement(e,n,r,i){fd(i)?Object.assign(e,r):this._resolveAnimations(n,i).update(e,r)}updateSharedOptions(e,n,r){e&&!fd(n)&&this._resolveAnimations(void 0,n).update(e,r)}_setStyle(e,n,r,i){e.active=i;const s=this.getStyle(n,i);this._resolveAnimations(n,r,i).update(e,{options:!i&&this.getSharedOptions(s)||s})}removeHoverStyle(e,n,r){this._setStyle(e,r,"active",!1)}setHoverStyle(e,n,r){this._setStyle(e,r,"active",!0)}_removeDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!1)}_setDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!0)}_resyncElements(e){const n=this._data,r=this._cachedMeta.data;for(const[a,l,u]of this._syncList)this[a](l,u);this._syncList=[];const i=r.length,s=n.length,o=Math.min(s,i);o&&this.parse(0,o),s>i?this._insertElements(i,s-i,e):s<i&&this._removeElements(s,i-s)}_insertElements(e,n,r=!0){const i=this._cachedMeta,s=i.data,o=e+n;let a;const l=u=>{for(u.length+=n,a=u.length-1;a>=o;a--)u[a]=u[a-n]};for(l(s),a=e;a<o;++a)s[a]=new this.dataElementType;this._parsing&&l(i._parsed),this.parse(e,n),r&&this.updateElements(s,e,n,"reset")}updateElements(e,n,r,i){}_removeElements(e,n){const r=this._cachedMeta;if(this._parsing){const i=r._parsed.splice(e,n);r._stacked&&Qo(r,i)}r.data.splice(e,n)}_sync(e){if(this._parsing)this._syncList.push(e);else{const[n,r,i]=e;this[n](r,i)}this.chart._dataChanges.push([this.index,...e])}_onDataPush(){const e=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-e,e])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(e,n){n&&this._sync(["_removeElements",e,n]);const r=arguments.length-2;r&&this._sync(["_insertElements",e,r])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}pe(ba,"defaults",{}),pe(ba,"datasetElementType",null),pe(ba,"dataElementType",null);class Gu extends ba{getLabelAndValue(e){const n=this._cachedMeta.vScale,r=this.getParsed(e);return{label:n.getLabels()[e],value:""+n.getLabelForValue(r[n.axis])}}parseObjectData(e,n,r,i){return Yk.bind(this)(e,n,r,i)}update(e){const n=this._cachedMeta,r=n.dataset,i=n.data||[],s=n.iScale.getLabels();if(r.points=i,e!=="resize"){const o=this.resolveDatasetElementOptions(e);this.options.showLine||(o.borderWidth=0);const a={_loop:!0,_fullLoop:s.length===i.length,options:o};this.updateElement(r,void 0,a,e)}this.updateElements(i,0,i.length,e)}updateElements(e,n,r,i){const s=this._cachedMeta.rScale,o=i==="reset";for(let a=n;a<n+r;a++){const l=e[a],u=this.resolveDataElementOptions(a,l.active?"active":i),h=s.getPointPositionForValue(a,this.getParsed(a).r),f=o?s.xCenter:h.x,d=o?s.yCenter:h.y,m={x:f,y:d,angle:h.angle,skip:isNaN(f)||isNaN(d),options:u};this.updateElement(l,a,m,i)}}}pe(Gu,"id","radar"),pe(Gu,"defaults",{datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}}),pe(Gu,"overrides",{aspectRatio:1,scales:{r:{type:"radialLinear"}}});function Ti(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class Kg{constructor(e){pe(this,"options");this.options=e||{}}static override(e){Object.assign(Kg.prototype,e)}init(){}formats(){return Ti()}parse(){return Ti()}format(){return Ti()}add(){return Ti()}diff(){return Ti()}startOf(){return Ti()}endOf(){return Ti()}}var M9={_date:Kg};function N9(t,e,n,r){const{controller:i,data:s,_sorted:o}=t,a=i._cachedMeta.iScale,l=t.dataset&&t.dataset.options?t.dataset.options.spanGaps:null;if(a&&e===a.axis&&e!=="r"&&o&&s.length){const u=a._reversePixels?pk:Bp;if(r){if(i._sharedOptions){const h=s[0],f=typeof h.getRange=="function"&&h.getRange(e);if(f){const d=u(s,e,n-f),m=u(s,e,n+f);return{lo:d.lo,hi:m.hi}}}}else{const h=u(s,e,n);if(l){const{vScale:f}=i._cachedMeta,{_parsed:d}=t,m=d.slice(0,h.lo+1).reverse().findIndex(y=>!We(y[f.axis]));h.lo-=Math.max(0,m);const _=d.slice(h.hi).findIndex(y=>!We(y[f.axis]));h.hi+=Math.max(0,_)}return h}}return{lo:0,hi:s.length-1}}function wl(t,e,n,r,i){const s=t.getSortedVisibleDatasetMetas(),o=n[e];for(let a=0,l=s.length;a<l;++a){const{index:u,data:h}=s[a],{lo:f,hi:d}=N9(s[a],e,o,i);for(let m=f;m<=d;++m){const _=h[m];_.skip||r(_,u,m)}}}function V9(t){const e=t.indexOf("x")!==-1,n=t.indexOf("y")!==-1;return function(r,i){const s=e?Math.abs(r.x-i.x):0,o=n?Math.abs(r.y-i.y):0;return Math.sqrt(Math.pow(s,2)+Math.pow(o,2))}}function dd(t,e,n,r,i){const s=[];return!i&&!t.isPointInArea(e)||wl(t,n,e,function(a,l,u){!i&&!cr(a,t.chartArea,0)||a.inRange(e.x,e.y,r)&&s.push({element:a,datasetIndex:l,index:u})},!0),s}function F9(t,e,n,r){let i=[];function s(o,a,l){const{startAngle:u,endAngle:h}=o.getProps(["startAngle","endAngle"],r),{angle:f}=hk(o,{x:e.x,y:e.y});sS(f,u,h)&&i.push({element:o,datasetIndex:a,index:l})}return wl(t,n,e,s),i}function z9(t,e,n,r,i,s){let o=[];const a=V9(n);let l=Number.POSITIVE_INFINITY;function u(h,f,d){const m=h.inRange(e.x,e.y,i);if(r&&!m)return;const _=h.getCenterPoint(i);if(!(!!s||t.isPointInArea(_))&&!m)return;const E=a(e,_);E<l?(o=[{element:h,datasetIndex:f,index:d}],l=E):E===l&&o.push({element:h,datasetIndex:f,index:d})}return wl(t,n,e,u),o}function pd(t,e,n,r,i,s){return!s&&!t.isPointInArea(e)?[]:n==="r"&&!r?F9(t,e,n,i):z9(t,e,n,r,i,s)}function O2(t,e,n,r,i){const s=[],o=n==="x"?"inXRange":"inYRange";let a=!1;return wl(t,n,e,(l,u,h)=>{l[o]&&l[o](e[n],i)&&(s.push({element:l,datasetIndex:u,index:h}),a=a||l.inRange(e.x,e.y,i))}),r&&!a?[]:s}var j9={evaluateInteractionItems:wl,modes:{index(t,e,n,r){const i=Ri(e,t),s=n.axis||"x",o=n.includeInvisible||!1,a=n.intersect?dd(t,i,s,r,o):pd(t,i,s,!1,r,o),l=[];return a.length?(t.getSortedVisibleDatasetMetas().forEach(u=>{const h=a[0].index,f=u.data[h];f&&!f.skip&&l.push({element:f,datasetIndex:u.index,index:h})}),l):[]},dataset(t,e,n,r){const i=Ri(e,t),s=n.axis||"xy",o=n.includeInvisible||!1;let a=n.intersect?dd(t,i,s,r,o):pd(t,i,s,!1,r,o);if(a.length>0){const l=a[0].datasetIndex,u=t.getDatasetMeta(l).data;a=[];for(let h=0;h<u.length;++h)a.push({element:u[h],datasetIndex:l,index:h})}return a},point(t,e,n,r){const i=Ri(e,t),s=n.axis||"xy",o=n.includeInvisible||!1;return dd(t,i,s,r,o)},nearest(t,e,n,r){const i=Ri(e,t),s=n.axis||"xy",o=n.includeInvisible||!1;return pd(t,i,s,n.intersect,r,o)},x(t,e,n,r){const i=Ri(e,t);return O2(t,i,"x",n.intersect,r)},y(t,e,n,r){const i=Ri(e,t);return O2(t,i,"y",n.intersect,r)}}};const xS=["left","top","right","bottom"];function Yo(t,e){return t.filter(n=>n.pos===e)}function D2(t,e){return t.filter(n=>xS.indexOf(n.pos)===-1&&n.box.axis===e)}function Xo(t,e){return t.sort((n,r)=>{const i=e?r:n,s=e?n:r;return i.weight===s.weight?i.index-s.index:i.weight-s.weight})}function B9(t){const e=[];let n,r,i,s,o,a;for(n=0,r=(t||[]).length;n<r;++n)i=t[n],{position:s,options:{stack:o,stackWeight:a=1}}=i,e.push({index:n,box:i,pos:s,horizontal:i.isHorizontal(),weight:i.weight,stack:o&&s+o,stackWeight:a});return e}function $9(t){const e={};for(const n of t){const{stack:r,pos:i,stackWeight:s}=n;if(!r||!xS.includes(i))continue;const o=e[r]||(e[r]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=s}return e}function U9(t,e){const n=$9(t),{vBoxMaxWidth:r,hBoxMaxHeight:i}=e;let s,o,a;for(s=0,o=t.length;s<o;++s){a=t[s];const{fullSize:l}=a.box,u=n[a.stack],h=u&&a.stackWeight/u.weight;a.horizontal?(a.width=h?h*r:l&&e.availableWidth,a.height=i):(a.width=r,a.height=h?h*i:l&&e.availableHeight)}return n}function H9(t){const e=B9(t),n=Xo(e.filter(u=>u.box.fullSize),!0),r=Xo(Yo(e,"left"),!0),i=Xo(Yo(e,"right")),s=Xo(Yo(e,"top"),!0),o=Xo(Yo(e,"bottom")),a=D2(e,"x"),l=D2(e,"y");return{fullSize:n,leftAndTop:r.concat(s),rightAndBottom:i.concat(l).concat(o).concat(a),chartArea:Yo(e,"chartArea"),vertical:r.concat(i).concat(l),horizontal:s.concat(o).concat(a)}}function M2(t,e,n,r){return Math.max(t[n],e[n])+Math.max(t[r],e[r])}function IS(t,e){t.top=Math.max(t.top,e.top),t.left=Math.max(t.left,e.left),t.bottom=Math.max(t.bottom,e.bottom),t.right=Math.max(t.right,e.right)}function W9(t,e,n,r){const{pos:i,box:s}=n,o=t.maxPadding;if(!Re(i)){n.size&&(t[i]-=n.size);const f=r[n.stack]||{size:0,count:1};f.size=Math.max(f.size,n.horizontal?s.height:s.width),n.size=f.size/f.count,t[i]+=n.size}s.getPadding&&IS(o,s.getPadding());const a=Math.max(0,e.outerWidth-M2(o,t,"left","right")),l=Math.max(0,e.outerHeight-M2(o,t,"top","bottom")),u=a!==t.w,h=l!==t.h;return t.w=a,t.h=l,n.horizontal?{same:u,other:h}:{same:h,other:u}}function q9(t){const e=t.maxPadding;function n(r){const i=Math.max(e[r]-t[r],0);return t[r]+=i,i}t.y+=n("top"),t.x+=n("left"),n("right"),n("bottom")}function K9(t,e){const n=e.maxPadding;function r(i){const s={left:0,top:0,right:0,bottom:0};return i.forEach(o=>{s[o]=Math.max(e[o],n[o])}),s}return r(t?["left","right"]:["top","bottom"])}function sa(t,e,n,r){const i=[];let s,o,a,l,u,h;for(s=0,o=t.length,u=0;s<o;++s){a=t[s],l=a.box,l.update(a.width||e.w,a.height||e.h,K9(a.horizontal,e));const{same:f,other:d}=W9(e,n,a,r);u|=f&&i.length,h=h||d,l.fullSize||i.push(a)}return u&&sa(i,e,n,r)||h}function gu(t,e,n,r,i){t.top=n,t.left=e,t.right=e+r,t.bottom=n+i,t.width=r,t.height=i}function N2(t,e,n,r){const i=n.padding;let{x:s,y:o}=e;for(const a of t){const l=a.box,u=r[a.stack]||{count:1,placed:0,weight:1},h=a.stackWeight/u.weight||1;if(a.horizontal){const f=e.w*h,d=u.size||l.height;Dc(u.start)&&(o=u.start),l.fullSize?gu(l,i.left,o,n.outerWidth-i.right-i.left,d):gu(l,e.left+u.placed,o,f,d),u.start=o,u.placed+=f,o=l.bottom}else{const f=e.h*h,d=u.size||l.width;Dc(u.start)&&(s=u.start),l.fullSize?gu(l,s,i.top,d,n.outerHeight-i.bottom-i.top):gu(l,s,e.top+u.placed,d,f),u.start=s,u.placed+=f,s=l.right}}e.x=s,e.y=o}var zr={addBox(t,e){t.boxes||(t.boxes=[]),e.fullSize=e.fullSize||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw(n){e.draw(n)}}]},t.boxes.push(e)},removeBox(t,e){const n=t.boxes?t.boxes.indexOf(e):-1;n!==-1&&t.boxes.splice(n,1)},configure(t,e,n){e.fullSize=n.fullSize,e.position=n.position,e.weight=n.weight},update(t,e,n,r){if(!t)return;const i=Wt(t.options.layout.padding),s=Math.max(e-i.width,0),o=Math.max(n-i.height,0),a=H9(t.boxes),l=a.vertical,u=a.horizontal;Me(t.boxes,y=>{typeof y.beforeLayout=="function"&&y.beforeLayout()});const h=l.reduce((y,E)=>E.box.options&&E.box.options.display===!1?y:y+1,0)||1,f=Object.freeze({outerWidth:e,outerHeight:n,padding:i,availableWidth:s,availableHeight:o,vBoxMaxWidth:s/2/h,hBoxMaxHeight:o/2}),d=Object.assign({},i);IS(d,Wt(r));const m=Object.assign({maxPadding:d,w:s,h:o,x:i.left,y:i.top},i),_=U9(l.concat(u),f);sa(a.fullSize,m,f,_),sa(l,m,f,_),sa(u,m,f,_)&&sa(l,m,f,_),q9(m),N2(a.leftAndTop,m,f,_),m.x+=m.w,m.y+=m.h,N2(a.rightAndBottom,m,f,_),t.chartArea={left:m.left,top:m.top,right:m.left+m.w,bottom:m.top+m.h,height:m.h,width:m.w},Me(a.chartArea,y=>{const E=y.box;Object.assign(E,t.chartArea),E.update(m.w,m.h,{left:0,top:0,right:0,bottom:0})})}};class RS{acquireContext(e,n){}releaseContext(e){return!1}addEventListener(e,n,r){}removeEventListener(e,n,r){}getDevicePixelRatio(){return 1}getMaximumSize(e,n,r,i){return n=Math.max(0,n||e.width),r=r||e.height,{width:n,height:Math.max(0,i?Math.floor(n/i):r)}}isAttached(e){return!0}updateConfig(e){}}class G9 extends RS{acquireContext(e){return e&&e.getContext&&e.getContext("2d")||null}updateConfig(e){e.options.animation=!1}}const Qu="$chartjs",Q9={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},V2=t=>t===null||t==="";function Y9(t,e){const n=t.style,r=t.getAttribute("height"),i=t.getAttribute("width");if(t[Qu]={initial:{height:r,width:i,style:{display:n.display,height:n.height,width:n.width}}},n.display=n.display||"block",n.boxSizing=n.boxSizing||"border-box",V2(i)){const s=T2(t,"width");s!==void 0&&(t.width=s)}if(V2(r))if(t.style.height==="")t.height=t.width/(e||2);else{const s=T2(t,"height");s!==void 0&&(t.height=s)}return t}const AS=c9?{passive:!0}:!1;function X9(t,e,n){t&&t.addEventListener(e,n,AS)}function J9(t,e,n){t&&t.canvas&&t.canvas.removeEventListener(e,n,AS)}function Z9(t,e){const n=Q9[t.type]||t.type,{x:r,y:i}=Ri(t,e);return{type:n,chart:e,native:t,x:r!==void 0?r:null,y:i!==void 0?i:null}}function jc(t,e){for(const n of t)if(n===e||n.contains(e))return!0}function eL(t,e,n){const r=t.canvas,i=new MutationObserver(s=>{let o=!1;for(const a of s)o=o||jc(a.addedNodes,r),o=o&&!jc(a.removedNodes,r);o&&n()});return i.observe(document,{childList:!0,subtree:!0}),i}function tL(t,e,n){const r=t.canvas,i=new MutationObserver(s=>{let o=!1;for(const a of s)o=o||jc(a.removedNodes,r),o=o&&!jc(a.addedNodes,r);o&&n()});return i.observe(document,{childList:!0,subtree:!0}),i}const Xa=new Map;let F2=0;function CS(){const t=window.devicePixelRatio;t!==F2&&(F2=t,Xa.forEach((e,n)=>{n.currentDevicePixelRatio!==t&&e()}))}function nL(t,e){Xa.size||window.addEventListener("resize",CS),Xa.set(t,e)}function rL(t){Xa.delete(t),Xa.size||window.removeEventListener("resize",CS)}function iL(t,e,n){const r=t.canvas,i=r&&qg(r);if(!i)return;const s=lS((a,l)=>{const u=i.clientWidth;n(a,l),u<i.clientWidth&&n()},window),o=new ResizeObserver(a=>{const l=a[0],u=l.contentRect.width,h=l.contentRect.height;u===0&&h===0||s(u,h)});return o.observe(i),nL(t,s),o}function md(t,e,n){n&&n.disconnect(),e==="resize"&&rL(t)}function sL(t,e,n){const r=t.canvas,i=lS(s=>{t.ctx!==null&&n(Z9(s,t))},t);return X9(r,e,i),i}class oL extends RS{acquireContext(e,n){const r=e&&e.getContext&&e.getContext("2d");return r&&r.canvas===e?(Y9(e,n),r):null}releaseContext(e){const n=e.canvas;if(!n[Qu])return!1;const r=n[Qu].initial;["height","width"].forEach(s=>{const o=r[s];We(o)?n.removeAttribute(s):n.setAttribute(s,o)});const i=r.style||{};return Object.keys(i).forEach(s=>{n.style[s]=i[s]}),n.width=n.width,delete n[Qu],!0}addEventListener(e,n,r){this.removeEventListener(e,n);const i=e.$proxies||(e.$proxies={}),o={attach:eL,detach:tL,resize:iL}[n]||sL;i[n]=o(e,n,r)}removeEventListener(e,n){const r=e.$proxies||(e.$proxies={}),i=r[n];if(!i)return;({attach:md,detach:md,resize:md}[n]||J9)(e,n,i),r[n]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(e,n,r,i){return u9(e,n,r,i)}isAttached(e){const n=e&&qg(e);return!!(n&&n.isConnected)}}function aL(t){return!Wg()||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas?G9:oL}var Pu;let yo=(Pu=class{constructor(){pe(this,"x");pe(this,"y");pe(this,"active",!1);pe(this,"options");pe(this,"$animations")}tooltipPosition(e){const{x:n,y:r}=this.getProps(["x","y"],e);return{x:n,y:r}}hasValue(){return Nc(this.x)&&Nc(this.y)}getProps(e,n){const r=this.$animations;if(!n||!r)return this;const i={};return e.forEach(s=>{i[s]=r[s]&&r[s].active()?r[s]._to:this[s]}),i}},pe(Pu,"defaults",{}),pe(Pu,"defaultRoutes"),Pu);function lL(t,e){const n=t.options.ticks,r=uL(t),i=Math.min(n.maxTicksLimit||r,r),s=n.major.enabled?hL(e):[],o=s.length,a=s[0],l=s[o-1],u=[];if(o>i)return fL(e,u,s,o/i),u;const h=cL(s,e,i);if(o>0){let f,d;const m=o>1?Math.round((l-a)/(o-1)):null;for(_u(e,u,h,We(m)?0:a-m,a),f=0,d=o-1;f<d;f++)_u(e,u,h,s[f],s[f+1]);return _u(e,u,h,l,We(m)?e.length:l+m),u}return _u(e,u,h),u}function uL(t){const e=t.options.offset,n=t._tickSize(),r=t._length/n+(e?0:1),i=t._maxLength/n;return Math.floor(Math.min(r,i))}function cL(t,e,n){const r=dL(t),i=e.length/n;if(!r)return Math.max(i,1);const s=lk(r);for(let o=0,a=s.length-1;o<a;o++){const l=s[o];if(l>i)return l}return Math.max(i,1)}function hL(t){const e=[];let n,r;for(n=0,r=t.length;n<r;n++)t[n].major&&e.push(n);return e}function fL(t,e,n,r){let i=0,s=n[0],o;for(r=Math.ceil(r),o=0;o<t.length;o++)o===s&&(e.push(t[o]),i++,s=n[i*r])}function _u(t,e,n,r,i){const s=be(r,0),o=Math.min(be(i,t.length),t.length);let a=0,l,u,h;for(n=Math.ceil(n),i&&(l=i-r,n=l/Math.floor(l/n)),h=s;h<0;)a++,h=Math.round(s+a*n);for(u=Math.max(s,0);u<o;u++)u===h&&(e.push(t[u]),a++,h=Math.round(s+a*n))}function dL(t){const e=t.length;let n,r;if(e<2)return!1;for(r=t[0],n=1;n<e;++n)if(t[n]-t[n-1]!==r)return!1;return r}const pL=t=>t==="left"?"right":t==="right"?"left":t,z2=(t,e,n)=>e==="top"||e==="left"?t[e]+n:t[e]-n,j2=(t,e)=>Math.min(e||t,t);function B2(t,e){const n=[],r=t.length/e,i=t.length;let s=0;for(;s<i;s+=r)n.push(t[Math.floor(s)]);return n}function mL(t,e,n){const r=t.ticks.length,i=Math.min(e,r-1),s=t._startPixel,o=t._endPixel,a=1e-6;let l=t.getPixelForTick(i),u;if(!(n&&(r===1?u=Math.max(l-s,o-l):e===0?u=(t.getPixelForTick(1)-l)/2:u=(l-t.getPixelForTick(i-1))/2,l+=i<e?u:-u,l<s-a||l>o+a)))return l}function gL(t,e){Me(t,n=>{const r=n.gc,i=r.length/2;let s;if(i>e){for(s=0;s<i;++s)delete n.data[r[s]];r.splice(0,i)}})}function Jo(t){return t.drawTicks?t.tickLength:0}function $2(t,e){if(!t.display)return 0;const n=xt(t.font,e),r=Wt(t.padding);return(it(t.text)?t.text.length:1)*n.lineHeight+r.height}function _L(t,e){return mi(t,{scale:e,type:"scale"})}function yL(t,e,n){return mi(t,{tick:n,index:e,type:"tick"})}function vL(t,e,n){let r=uS(t);return(n&&e!=="right"||!n&&e==="right")&&(r=pL(r)),r}function wL(t,e,n,r){const{top:i,left:s,bottom:o,right:a,chart:l}=t,{chartArea:u,scales:h}=l;let f=0,d,m,_;const y=o-i,E=a-s;if(t.isHorizontal()){if(m=on(r,s,a),Re(n)){const w=Object.keys(n)[0],v=n[w];_=h[w].getPixelForValue(v)+y-e}else n==="center"?_=(u.bottom+u.top)/2+y-e:_=z2(t,n,e);d=a-s}else{if(Re(n)){const w=Object.keys(n)[0],v=n[w];m=h[w].getPixelForValue(v)-E+e}else n==="center"?m=(u.left+u.right)/2-E+e:m=z2(t,n,e);_=on(r,o,i),f=n==="left"?-hn:hn}return{titleX:m,titleY:_,maxWidth:d,rotation:f}}class vo extends yo{constructor(e){super(),this.id=e.id,this.type=e.type,this.options=void 0,this.ctx=e.ctx,this.chart=e.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(e){this.options=e.setContext(this.getContext()),this.axis=e.axis,this._userMin=this.parse(e.min),this._userMax=this.parse(e.max),this._suggestedMin=this.parse(e.suggestedMin),this._suggestedMax=this.parse(e.suggestedMax)}parse(e,n){return e}getUserBounds(){let{_userMin:e,_userMax:n,_suggestedMin:r,_suggestedMax:i}=this;return e=an(e,Number.POSITIVE_INFINITY),n=an(n,Number.NEGATIVE_INFINITY),r=an(r,Number.POSITIVE_INFINITY),i=an(i,Number.NEGATIVE_INFINITY),{min:an(e,r),max:an(n,i),minDefined:st(e),maxDefined:st(n)}}getMinMax(e){let{min:n,max:r,minDefined:i,maxDefined:s}=this.getUserBounds(),o;if(i&&s)return{min:n,max:r};const a=this.getMatchingVisibleMetas();for(let l=0,u=a.length;l<u;++l)o=a[l].controller.getMinMax(this,e),i||(n=Math.min(n,o.min)),s||(r=Math.max(r,o.max));return n=s&&n>r?r:n,r=i&&n>r?n:r,{min:an(n,an(r,n)),max:an(r,an(n,r))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const e=this.chart.data;return this.options.labels||(this.isHorizontal()?e.xLabels:e.yLabels)||e.labels||[]}getLabelItems(e=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(e))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){ze(this.options.beforeUpdate,[this])}update(e,n,r){const{beginAtZero:i,grace:s,ticks:o}=this.options,a=o.sampleSize;this.beforeUpdate(),this.maxWidth=e,this.maxHeight=n,this._margins=r=Object.assign({left:0,right:0,top:0,bottom:0},r),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+r.left+r.right:this.height+r.top+r.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=jk(this,s,i),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const l=a<this.ticks.length;this._convertTicksToLabels(l?B2(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||o.source==="auto")&&(this.ticks=lL(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),l&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let e=this.options.reverse,n,r;this.isHorizontal()?(n=this.left,r=this.right):(n=this.top,r=this.bottom,e=!e),this._startPixel=n,this._endPixel=r,this._reversePixels=e,this._length=r-n,this._alignToPixels=this.options.alignToPixels}afterUpdate(){ze(this.options.afterUpdate,[this])}beforeSetDimensions(){ze(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){ze(this.options.afterSetDimensions,[this])}_callHooks(e){this.chart.notifyPlugins(e,this.getContext()),ze(this.options[e],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){ze(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(e){const n=this.options.ticks;let r,i,s;for(r=0,i=e.length;r<i;r++)s=e[r],s.label=ze(n.callback,[s.value,r,e],this)}afterTickToLabelConversion(){ze(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){ze(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const e=this.options,n=e.ticks,r=j2(this.ticks.length,e.ticks.maxTicksLimit),i=n.minRotation||0,s=n.maxRotation;let o=i,a,l,u;if(!this._isVisible()||!n.display||i>=s||r<=1||!this.isHorizontal()){this.labelRotation=i;return}const h=this._getLabelSizes(),f=h.widest.width,d=h.highest.height,m=ur(this.chart.width-f,0,this.maxWidth);a=e.offset?this.maxWidth/r:m/(r-1),f+6>a&&(a=m/(r-(e.offset?.5:1)),l=this.maxHeight-Jo(e.grid)-n.padding-$2(e.title,this.chart.options.font),u=Math.sqrt(f*f+d*d),o=Fg(Math.min(Math.asin(ur((h.highest.height+6)/a,-1,1)),Math.asin(ur(l/u,-1,1))-Math.asin(ur(d/u,-1,1)))),o=Math.max(i,Math.min(s,o))),this.labelRotation=o}afterCalculateLabelRotation(){ze(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){ze(this.options.beforeFit,[this])}fit(){const e={width:0,height:0},{chart:n,options:{ticks:r,title:i,grid:s}}=this,o=this._isVisible(),a=this.isHorizontal();if(o){const l=$2(i,n.options.font);if(a?(e.width=this.maxWidth,e.height=Jo(s)+l):(e.height=this.maxHeight,e.width=Jo(s)+l),r.display&&this.ticks.length){const{first:u,last:h,widest:f,highest:d}=this._getLabelSizes(),m=r.padding*2,_=Fr(this.labelRotation),y=Math.cos(_),E=Math.sin(_);if(a){const w=r.mirror?0:E*f.width+y*d.height;e.height=Math.min(this.maxHeight,e.height+w+m)}else{const w=r.mirror?0:y*f.width+E*d.height;e.width=Math.min(this.maxWidth,e.width+w+m)}this._calculatePadding(u,h,E,y)}}this._handleMargins(),a?(this.width=this._length=n.width-this._margins.left-this._margins.right,this.height=e.height):(this.width=e.width,this.height=this._length=n.height-this._margins.top-this._margins.bottom)}_calculatePadding(e,n,r,i){const{ticks:{align:s,padding:o},position:a}=this.options,l=this.labelRotation!==0,u=a!=="top"&&this.axis==="x";if(this.isHorizontal()){const h=this.getPixelForTick(0)-this.left,f=this.right-this.getPixelForTick(this.ticks.length-1);let d=0,m=0;l?u?(d=i*e.width,m=r*n.height):(d=r*e.height,m=i*n.width):s==="start"?m=n.width:s==="end"?d=e.width:s!=="inner"&&(d=e.width/2,m=n.width/2),this.paddingLeft=Math.max((d-h+o)*this.width/(this.width-h),0),this.paddingRight=Math.max((m-f+o)*this.width/(this.width-f),0)}else{let h=n.height/2,f=e.height/2;s==="start"?(h=0,f=e.height):s==="end"&&(h=n.height,f=0),this.paddingTop=h+o,this.paddingBottom=f+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){ze(this.options.afterFit,[this])}isHorizontal(){const{axis:e,position:n}=this.options;return n==="top"||n==="bottom"||e==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(e){this.beforeTickToLabelConversion(),this.generateTickLabels(e);let n,r;for(n=0,r=e.length;n<r;n++)We(e[n].label)&&(e.splice(n,1),r--,n--);this.afterTickToLabelConversion()}_getLabelSizes(){let e=this._labelSizes;if(!e){const n=this.options.ticks.sampleSize;let r=this.ticks;n<r.length&&(r=B2(r,n)),this._labelSizes=e=this._computeLabelSizes(r,r.length,this.options.ticks.maxTicksLimit)}return e}_computeLabelSizes(e,n,r){const{ctx:i,_longestTextCache:s}=this,o=[],a=[],l=Math.floor(n/j2(n,r));let u=0,h=0,f,d,m,_,y,E,w,v,S,C,O;for(f=0;f<n;f+=l){if(_=e[f].label,y=this._resolveTickFontOptions(f),i.font=E=y.string,w=s[E]=s[E]||{data:{},gc:[]},v=y.lineHeight,S=C=0,!We(_)&&!it(_))S=Vc(i,w.data,w.gc,S,_),C=v;else if(it(_))for(d=0,m=_.length;d<m;++d)O=_[d],!We(O)&&!it(O)&&(S=Vc(i,w.data,w.gc,S,O),C+=v);o.push(S),a.push(C),u=Math.max(S,u),h=Math.max(C,h)}gL(s,n);const D=o.indexOf(u),I=a.indexOf(h),T=b=>({width:o[b]||0,height:a[b]||0});return{first:T(0),last:T(n-1),widest:T(D),highest:T(I),widths:o,heights:a}}getLabelForValue(e){return e}getPixelForValue(e,n){return NaN}getValueForPixel(e){}getPixelForTick(e){const n=this.ticks;return e<0||e>n.length-1?null:this.getPixelForValue(n[e].value)}getPixelForDecimal(e){this._reversePixels&&(e=1-e);const n=this._startPixel+e*this._length;return dk(this._alignToPixels?Si(this.chart,n,0):n)}getDecimalForPixel(e){const n=(e-this._startPixel)/this._length;return this._reversePixels?1-n:n}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:e,max:n}=this;return e<0&&n<0?n:e>0&&n>0?e:0}getContext(e){const n=this.ticks||[];if(e>=0&&e<n.length){const r=n[e];return r.$context||(r.$context=yL(this.getContext(),e,r))}return this.$context||(this.$context=_L(this.chart.getContext(),this))}_tickSize(){const e=this.options.ticks,n=Fr(this.labelRotation),r=Math.abs(Math.cos(n)),i=Math.abs(Math.sin(n)),s=this._getLabelSizes(),o=e.autoSkipPadding||0,a=s?s.widest.width+o:0,l=s?s.highest.height+o:0;return this.isHorizontal()?l*r>a*i?a/r:l/i:l*i<a*r?l/r:a/i}_isVisible(){const e=this.options.display;return e!=="auto"?!!e:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(e){const n=this.axis,r=this.chart,i=this.options,{grid:s,position:o,border:a}=i,l=s.offset,u=this.isHorizontal(),f=this.ticks.length+(l?1:0),d=Jo(s),m=[],_=a.setContext(this.getContext()),y=_.display?_.width:0,E=y/2,w=function(de){return Si(r,de,y)};let v,S,C,O,D,I,T,b,x,P,k,A;if(o==="top")v=w(this.bottom),I=this.bottom-d,b=v-E,P=w(e.top)+E,A=e.bottom;else if(o==="bottom")v=w(this.top),P=e.top,A=w(e.bottom)-E,I=v+E,b=this.top+d;else if(o==="left")v=w(this.right),D=this.right-d,T=v-E,x=w(e.left)+E,k=e.right;else if(o==="right")v=w(this.left),x=e.left,k=w(e.right)-E,D=v+E,T=this.left+d;else if(n==="x"){if(o==="center")v=w((e.top+e.bottom)/2+.5);else if(Re(o)){const de=Object.keys(o)[0],Ee=o[de];v=w(this.chart.scales[de].getPixelForValue(Ee))}P=e.top,A=e.bottom,I=v+E,b=I+d}else if(n==="y"){if(o==="center")v=w((e.left+e.right)/2);else if(Re(o)){const de=Object.keys(o)[0],Ee=o[de];v=w(this.chart.scales[de].getPixelForValue(Ee))}D=v-E,T=D-d,x=e.left,k=e.right}const Z=be(i.ticks.maxTicksLimit,f),ce=Math.max(1,Math.ceil(f/Z));for(S=0;S<f;S+=ce){const de=this.getContext(S),Ee=s.setContext(de),Q=a.setContext(de),ne=Ee.lineWidth,oe=Ee.color,_e=Q.dash||[],ae=Q.dashOffset,M=Ee.tickWidth,z=Ee.tickColor,L=Ee.tickBorderDash||[],V=Ee.tickBorderDashOffset;C=mL(this,S,l),C!==void 0&&(O=Si(r,C,ne),u?D=T=x=k=O:I=b=P=A=O,m.push({tx1:D,ty1:I,tx2:T,ty2:b,x1:x,y1:P,x2:k,y2:A,width:ne,color:oe,borderDash:_e,borderDashOffset:ae,tickWidth:M,tickColor:z,tickBorderDash:L,tickBorderDashOffset:V}))}return this._ticksLength=f,this._borderValue=v,m}_computeLabelItems(e){const n=this.axis,r=this.options,{position:i,ticks:s}=r,o=this.isHorizontal(),a=this.ticks,{align:l,crossAlign:u,padding:h,mirror:f}=s,d=Jo(r.grid),m=d+h,_=f?-h:m,y=-Fr(this.labelRotation),E=[];let w,v,S,C,O,D,I,T,b,x,P,k,A="middle";if(i==="top")D=this.bottom-_,I=this._getXAxisLabelAlignment();else if(i==="bottom")D=this.top+_,I=this._getXAxisLabelAlignment();else if(i==="left"){const ce=this._getYAxisLabelAlignment(d);I=ce.textAlign,O=ce.x}else if(i==="right"){const ce=this._getYAxisLabelAlignment(d);I=ce.textAlign,O=ce.x}else if(n==="x"){if(i==="center")D=(e.top+e.bottom)/2+m;else if(Re(i)){const ce=Object.keys(i)[0],de=i[ce];D=this.chart.scales[ce].getPixelForValue(de)+m}I=this._getXAxisLabelAlignment()}else if(n==="y"){if(i==="center")O=(e.left+e.right)/2-m;else if(Re(i)){const ce=Object.keys(i)[0],de=i[ce];O=this.chart.scales[ce].getPixelForValue(de)}I=this._getYAxisLabelAlignment(d).textAlign}n==="y"&&(l==="start"?A="top":l==="end"&&(A="bottom"));const Z=this._getLabelSizes();for(w=0,v=a.length;w<v;++w){S=a[w],C=S.label;const ce=s.setContext(this.getContext(w));T=this.getPixelForTick(w)+s.labelOffset,b=this._resolveTickFontOptions(w),x=b.lineHeight,P=it(C)?C.length:1;const de=P/2,Ee=ce.color,Q=ce.textStrokeColor,ne=ce.textStrokeWidth;let oe=I;o?(O=T,I==="inner"&&(w===v-1?oe=this.options.reverse?"left":"right":w===0?oe=this.options.reverse?"right":"left":oe="center"),i==="top"?u==="near"||y!==0?k=-P*x+x/2:u==="center"?k=-Z.highest.height/2-de*x+x:k=-Z.highest.height+x/2:u==="near"||y!==0?k=x/2:u==="center"?k=Z.highest.height/2-de*x:k=Z.highest.height-P*x,f&&(k*=-1),y!==0&&!ce.showLabelBackdrop&&(O+=x/2*Math.sin(y))):(D=T,k=(1-P)*x/2);let _e;if(ce.showLabelBackdrop){const ae=Wt(ce.backdropPadding),M=Z.heights[w],z=Z.widths[w];let L=k-ae.top,V=0-ae.left;switch(A){case"middle":L-=M/2;break;case"bottom":L-=M;break}switch(I){case"center":V-=z/2;break;case"right":V-=z;break;case"inner":w===v-1?V-=z:w>0&&(V-=z/2);break}_e={left:V,top:L,width:z+ae.width,height:M+ae.height,color:ce.backdropColor}}E.push({label:C,font:b,textOffset:k,options:{rotation:y,color:Ee,strokeColor:Q,strokeWidth:ne,textAlign:oe,textBaseline:A,translation:[O,D],backdrop:_e}})}return E}_getXAxisLabelAlignment(){const{position:e,ticks:n}=this.options;if(-Fr(this.labelRotation))return e==="top"?"left":"right";let i="center";return n.align==="start"?i="left":n.align==="end"?i="right":n.align==="inner"&&(i="inner"),i}_getYAxisLabelAlignment(e){const{position:n,ticks:{crossAlign:r,mirror:i,padding:s}}=this.options,o=this._getLabelSizes(),a=e+s,l=o.widest.width;let u,h;return n==="left"?i?(h=this.right+s,r==="near"?u="left":r==="center"?(u="center",h+=l/2):(u="right",h+=l)):(h=this.right-a,r==="near"?u="right":r==="center"?(u="center",h-=l/2):(u="left",h=this.left)):n==="right"?i?(h=this.left+s,r==="near"?u="right":r==="center"?(u="center",h-=l/2):(u="left",h-=l)):(h=this.left+a,r==="near"?u="left":r==="center"?(u="center",h+=l/2):(u="right",h=this.right)):u="right",{textAlign:u,x:h}}_computeLabelArea(){if(this.options.ticks.mirror)return;const e=this.chart,n=this.options.position;if(n==="left"||n==="right")return{top:0,left:this.left,bottom:e.height,right:this.right};if(n==="top"||n==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:e.width}}drawBackground(){const{ctx:e,options:{backgroundColor:n},left:r,top:i,width:s,height:o}=this;n&&(e.save(),e.fillStyle=n,e.fillRect(r,i,s,o),e.restore())}getLineWidthForValue(e){const n=this.options.grid;if(!this._isVisible()||!n.display)return 0;const i=this.ticks.findIndex(s=>s.value===e);return i>=0?n.setContext(this.getContext(i)).lineWidth:0}drawGrid(e){const n=this.options.grid,r=this.ctx,i=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(e));let s,o;const a=(l,u,h)=>{!h.width||!h.color||(r.save(),r.lineWidth=h.width,r.strokeStyle=h.color,r.setLineDash(h.borderDash||[]),r.lineDashOffset=h.borderDashOffset,r.beginPath(),r.moveTo(l.x,l.y),r.lineTo(u.x,u.y),r.stroke(),r.restore())};if(n.display)for(s=0,o=i.length;s<o;++s){const l=i[s];n.drawOnChartArea&&a({x:l.x1,y:l.y1},{x:l.x2,y:l.y2},l),n.drawTicks&&a({x:l.tx1,y:l.ty1},{x:l.tx2,y:l.ty2},{color:l.tickColor,width:l.tickWidth,borderDash:l.tickBorderDash,borderDashOffset:l.tickBorderDashOffset})}}drawBorder(){const{chart:e,ctx:n,options:{border:r,grid:i}}=this,s=r.setContext(this.getContext()),o=r.display?s.width:0;if(!o)return;const a=i.setContext(this.getContext(0)).lineWidth,l=this._borderValue;let u,h,f,d;this.isHorizontal()?(u=Si(e,this.left,o)-o/2,h=Si(e,this.right,a)+a/2,f=d=l):(f=Si(e,this.top,o)-o/2,d=Si(e,this.bottom,a)+a/2,u=h=l),n.save(),n.lineWidth=s.width,n.strokeStyle=s.color,n.beginPath(),n.moveTo(u,f),n.lineTo(h,d),n.stroke(),n.restore()}drawLabels(e){if(!this.options.ticks.display)return;const r=this.ctx,i=this._computeLabelArea();i&&jh(r,i);const s=this.getLabelItems(e);for(const o of s){const a=o.options,l=o.font,u=o.label,h=o.textOffset;Gs(r,u,0,h,l,a)}i&&Bh(r)}drawTitle(){const{ctx:e,options:{position:n,title:r,reverse:i}}=this;if(!r.display)return;const s=xt(r.font),o=Wt(r.padding),a=r.align;let l=s.lineHeight/2;n==="bottom"||n==="center"||Re(n)?(l+=o.bottom,it(r.text)&&(l+=s.lineHeight*(r.text.length-1))):l+=o.top;const{titleX:u,titleY:h,maxWidth:f,rotation:d}=wL(this,l,n,a);Gs(e,r.text,0,0,s,{color:r.color,maxWidth:f,rotation:d,textAlign:vL(a,n,i),textBaseline:"middle",translation:[u,h]})}draw(e){this._isVisible()&&(this.drawBackground(),this.drawGrid(e),this.drawBorder(),this.drawTitle(),this.drawLabels(e))}_layers(){const e=this.options,n=e.ticks&&e.ticks.z||0,r=be(e.grid&&e.grid.z,-1),i=be(e.border&&e.border.z,0);return!this._isVisible()||this.draw!==vo.prototype.draw?[{z:n,draw:s=>{this.draw(s)}}]:[{z:r,draw:s=>{this.drawBackground(),this.drawGrid(s),this.drawTitle()}},{z:i,draw:()=>{this.drawBorder()}},{z:n,draw:s=>{this.drawLabels(s)}}]}getMatchingVisibleMetas(e){const n=this.chart.getSortedVisibleDatasetMetas(),r=this.axis+"AxisID",i=[];let s,o;for(s=0,o=n.length;s<o;++s){const a=n[s];a[r]===this.id&&(!e||a.type===e)&&i.push(a)}return i}_resolveTickFontOptions(e){const n=this.options.ticks.setContext(this.getContext(e));return xt(n.font)}_maxDigits(){const e=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/e}}class yu{constructor(e,n,r){this.type=e,this.scope=n,this.override=r,this.items=Object.create(null)}isForType(e){return Object.prototype.isPrototypeOf.call(this.type.prototype,e.prototype)}register(e){const n=Object.getPrototypeOf(e);let r;TL(n)&&(r=this.register(n));const i=this.items,s=e.id,o=this.scope+"."+s;if(!s)throw new Error("class does not have id: "+e);return s in i||(i[s]=e,EL(e,o,r),this.override&&ot.override(e.id,e.overrides)),o}get(e){return this.items[e]}unregister(e){const n=this.items,r=e.id,i=this.scope;r in n&&delete n[r],i&&r in ot[i]&&(delete ot[i][r],this.override&&delete Wi[r])}}function EL(t,e,n){const r=Qa(Object.create(null),[n?ot.get(n):{},ot.get(e),t.defaults]);ot.set(e,r),t.defaultRoutes&&SL(e,t.defaultRoutes),t.descriptors&&ot.describe(e,t.descriptors)}function SL(t,e){Object.keys(e).forEach(n=>{const r=n.split("."),i=r.pop(),s=[t].concat(r).join("."),o=e[n].split("."),a=o.pop(),l=o.join(".");ot.route(s,i,l,a)})}function TL(t){return"id"in t&&"defaults"in t}class bL{constructor(){this.controllers=new yu(ba,"datasets",!0),this.elements=new yu(yo,"elements"),this.plugins=new yu(Object,"plugins"),this.scales=new yu(vo,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...e){this._each("register",e)}remove(...e){this._each("unregister",e)}addControllers(...e){this._each("register",e,this.controllers)}addElements(...e){this._each("register",e,this.elements)}addPlugins(...e){this._each("register",e,this.plugins)}addScales(...e){this._each("register",e,this.scales)}getController(e){return this._get(e,this.controllers,"controller")}getElement(e){return this._get(e,this.elements,"element")}getPlugin(e){return this._get(e,this.plugins,"plugin")}getScale(e){return this._get(e,this.scales,"scale")}removeControllers(...e){this._each("unregister",e,this.controllers)}removeElements(...e){this._each("unregister",e,this.elements)}removePlugins(...e){this._each("unregister",e,this.plugins)}removeScales(...e){this._each("unregister",e,this.scales)}_each(e,n,r){[...n].forEach(i=>{const s=r||this._getRegistryForType(i);r||s.isForType(i)||s===this.plugins&&i.id?this._exec(e,s,i):Me(i,o=>{const a=r||this._getRegistryForType(o);this._exec(e,a,o)})})}_exec(e,n,r){const i=Vg(e);ze(r["before"+i],[],r),n[e](r),ze(r["after"+i],[],r)}_getRegistryForType(e){for(let n=0;n<this._typedRegistries.length;n++){const r=this._typedRegistries[n];if(r.isForType(e))return r}return this.plugins}_get(e,n,r){const i=n.get(e);if(i===void 0)throw new Error('"'+e+'" is not a registered '+r+".");return i}}var $n=new bL;class xL{constructor(){this._init=[]}notify(e,n,r,i){n==="beforeInit"&&(this._init=this._createDescriptors(e,!0),this._notify(this._init,e,"install"));const s=i?this._descriptors(e).filter(i):this._descriptors(e),o=this._notify(s,e,n,r);return n==="afterDestroy"&&(this._notify(s,e,"stop"),this._notify(this._init,e,"uninstall")),o}_notify(e,n,r,i){i=i||{};for(const s of e){const o=s.plugin,a=o[r],l=[n,i,s.options];if(ze(a,l,o)===!1&&i.cancelable)return!1}return!0}invalidate(){We(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(e){if(this._cache)return this._cache;const n=this._cache=this._createDescriptors(e);return this._notifyStateChanges(e),n}_createDescriptors(e,n){const r=e&&e.config,i=be(r.options&&r.options.plugins,{}),s=IL(r);return i===!1&&!n?[]:AL(e,s,i,n)}_notifyStateChanges(e){const n=this._oldCache||[],r=this._cache,i=(s,o)=>s.filter(a=>!o.some(l=>a.plugin.id===l.plugin.id));this._notify(i(n,r),e,"stop"),this._notify(i(r,n),e,"start")}}function IL(t){const e={},n=[],r=Object.keys($n.plugins.items);for(let s=0;s<r.length;s++)n.push($n.getPlugin(r[s]));const i=t.plugins||[];for(let s=0;s<i.length;s++){const o=i[s];n.indexOf(o)===-1&&(n.push(o),e[o.id]=!0)}return{plugins:n,localIds:e}}function RL(t,e){return!e&&t===!1?null:t===!0?{}:t}function AL(t,{plugins:e,localIds:n},r,i){const s=[],o=t.getContext();for(const a of e){const l=a.id,u=RL(r[l],i);u!==null&&s.push({plugin:a,options:CL(t.config,{plugin:a,local:n[l]},u,o)})}return s}function CL(t,{plugin:e,local:n},r,i){const s=t.pluginScopeKeys(e),o=t.getOptionScopes(r,s);return n&&e.defaults&&o.push(e.defaults),t.createResolver(o,i,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function Hp(t,e){const n=ot.datasets[t]||{};return((e.datasets||{})[t]||{}).indexAxis||e.indexAxis||n.indexAxis||"x"}function PL(t,e){let n=t;return t==="_index_"?n=e:t==="_value_"&&(n=e==="x"?"y":"x"),n}function kL(t,e){return t===e?"_index_":"_value_"}function U2(t){if(t==="x"||t==="y"||t==="r")return t}function LL(t){if(t==="top"||t==="bottom")return"x";if(t==="left"||t==="right")return"y"}function Wp(t,...e){if(U2(t))return t;for(const n of e){const r=n.axis||LL(n.position)||t.length>1&&U2(t[0].toLowerCase());if(r)return r}throw new Error(`Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`)}function H2(t,e,n){if(n[e+"AxisID"]===t)return{axis:e}}function OL(t,e){if(e.data&&e.data.datasets){const n=e.data.datasets.filter(r=>r.xAxisID===t||r.yAxisID===t);if(n.length)return H2(t,"x",n[0])||H2(t,"y",n[0])}return{}}function DL(t,e){const n=Wi[t.type]||{scales:{}},r=e.scales||{},i=Hp(t.type,e),s=Object.create(null);return Object.keys(r).forEach(o=>{const a=r[o];if(!Re(a))return console.error(`Invalid scale configuration for scale: ${o}`);if(a._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${o}`);const l=Wp(o,a,OL(o,t),ot.scales[a.type]),u=kL(l,i),h=n.scales||{};s[o]=wa(Object.create(null),[{axis:l},a,h[l],h[u]])}),t.data.datasets.forEach(o=>{const a=o.type||t.type,l=o.indexAxis||Hp(a,e),h=(Wi[a]||{}).scales||{};Object.keys(h).forEach(f=>{const d=PL(f,l),m=o[d+"AxisID"]||d;s[m]=s[m]||Object.create(null),wa(s[m],[{axis:d},r[m],h[f]])})}),Object.keys(s).forEach(o=>{const a=s[o];wa(a,[ot.scales[a.type],ot.scale])}),s}function PS(t){const e=t.options||(t.options={});e.plugins=be(e.plugins,{}),e.scales=DL(t,e)}function kS(t){return t=t||{},t.datasets=t.datasets||[],t.labels=t.labels||[],t}function ML(t){return t=t||{},t.data=kS(t.data),PS(t),t}const W2=new Map,LS=new Set;function vu(t,e){let n=W2.get(t);return n||(n=e(),W2.set(t,n),LS.add(n)),n}const Zo=(t,e,n)=>{const r=Ya(e,n);r!==void 0&&t.add(r)};class NL{constructor(e){this._config=ML(e),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(e){this._config.type=e}get data(){return this._config.data}set data(e){this._config.data=kS(e)}get options(){return this._config.options}set options(e){this._config.options=e}get plugins(){return this._config.plugins}update(){const e=this._config;this.clearCache(),PS(e)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(e){return vu(e,()=>[[`datasets.${e}`,""]])}datasetAnimationScopeKeys(e,n){return vu(`${e}.transition.${n}`,()=>[[`datasets.${e}.transitions.${n}`,`transitions.${n}`],[`datasets.${e}`,""]])}datasetElementScopeKeys(e,n){return vu(`${e}-${n}`,()=>[[`datasets.${e}.elements.${n}`,`datasets.${e}`,`elements.${n}`,""]])}pluginScopeKeys(e){const n=e.id,r=this.type;return vu(`${r}-plugin-${n}`,()=>[[`plugins.${n}`,...e.additionalOptionScopes||[]]])}_cachedScopes(e,n){const r=this._scopeCache;let i=r.get(e);return(!i||n)&&(i=new Map,r.set(e,i)),i}getOptionScopes(e,n,r){const{options:i,type:s}=this,o=this._cachedScopes(e,r),a=o.get(n);if(a)return a;const l=new Set;n.forEach(h=>{e&&(l.add(e),h.forEach(f=>Zo(l,e,f))),h.forEach(f=>Zo(l,i,f)),h.forEach(f=>Zo(l,Wi[s]||{},f)),h.forEach(f=>Zo(l,ot,f)),h.forEach(f=>Zo(l,$p,f))});const u=Array.from(l);return u.length===0&&u.push(Object.create(null)),LS.has(n)&&o.set(n,u),u}chartOptionScopes(){const{options:e,type:n}=this;return[e,Wi[n]||{},ot.datasets[n]||{},{type:n},ot,$p]}resolveNamedOptions(e,n,r,i=[""]){const s={$shared:!0},{resolver:o,subPrefixes:a}=q2(this._resolverCache,e,i);let l=o;if(FL(o,n)){s.$shared=!1,r=si(r)?r():r;const u=this.createResolver(e,r,a);l=Qs(o,r,u)}for(const u of n)s[u]=l[u];return s}createResolver(e,n,r=[""],i){const{resolver:s}=q2(this._resolverCache,e,r);return Re(n)?Qs(s,n,void 0,i):s}}function q2(t,e,n){let r=t.get(e);r||(r=new Map,t.set(e,r));const i=n.join();let s=r.get(i);return s||(s={resolver:$g(e,n),subPrefixes:n.filter(a=>!a.toLowerCase().includes("hover"))},r.set(i,s)),s}const VL=t=>Re(t)&&Object.getOwnPropertyNames(t).some(e=>si(t[e]));function FL(t,e){const{isScriptable:n,isIndexable:r}=dS(t);for(const i of e){const s=n(i),o=r(i),a=(o||s)&&t[i];if(s&&(si(a)||VL(a))||o&&it(a))return!0}return!1}var zL="4.4.8";const jL=["top","bottom","left","right","chartArea"];function K2(t,e){return t==="top"||t==="bottom"||jL.indexOf(t)===-1&&e==="x"}function G2(t,e){return function(n,r){return n[t]===r[t]?n[e]-r[e]:n[t]-r[t]}}function Q2(t){const e=t.chart,n=e.options.animation;e.notifyPlugins("afterRender"),ze(n&&n.onComplete,[t],e)}function BL(t){const e=t.chart,n=e.options.animation;ze(n&&n.onProgress,[t],e)}function OS(t){return Wg()&&typeof t=="string"?t=document.getElementById(t):t&&t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas),t}const Yu={},Y2=t=>{const e=OS(t);return Object.values(Yu).filter(n=>n.canvas===e).pop()};function $L(t,e,n){const r=Object.keys(t);for(const i of r){const s=+i;if(s>=e){const o=t[i];delete t[i],(n>0||s>e)&&(t[s+n]=o)}}}function UL(t,e,n,r){return!n||t.type==="mouseout"?null:r?e:t}function wu(t,e,n){return t.options.clip?t[n]:e[n]}function HL(t,e){const{xScale:n,yScale:r}=t;return n&&r?{left:wu(n,e,"left"),right:wu(n,e,"right"),top:wu(r,e,"top"),bottom:wu(r,e,"bottom")}:e}var Ar;let Uh=(Ar=class{static register(...e){$n.add(...e),X2()}static unregister(...e){$n.remove(...e),X2()}constructor(e,n){const r=this.config=new NL(n),i=OS(e),s=Y2(i);if(s)throw new Error("Canvas is already in use. Chart with ID '"+s.id+"' must be destroyed before the canvas with ID '"+s.canvas.id+"' can be reused.");const o=r.createResolver(r.chartOptionScopes(),this.getContext());this.platform=new(r.platform||aL(i)),this.platform.updateConfig(r);const a=this.platform.acquireContext(i,o.aspectRatio),l=a&&a.canvas,u=l&&l.height,h=l&&l.width;if(this.id=ZP(),this.ctx=a,this.canvas=l,this.width=h,this.height=u,this._options=o,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new xL,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=yk(f=>this.update(f),o.resizeDelay||0),this._dataChanges=[],Yu[this.id]=this,!a||!l){console.error("Failed to create chart: can't acquire context from the given item");return}nr.listen(this,"complete",Q2),nr.listen(this,"progress",BL),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:e,maintainAspectRatio:n},width:r,height:i,_aspectRatio:s}=this;return We(e)?n&&s?s:i?r/i:null:e}get data(){return this.config.data}set data(e){this.config.data=e}get options(){return this._options}set options(e){this.config.options=e}get registry(){return $n}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():S2(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return v2(this.canvas,this.ctx),this}stop(){return nr.stop(this),this}resize(e,n){nr.running(this)?this._resizeBeforeDraw={width:e,height:n}:this._resize(e,n)}_resize(e,n){const r=this.options,i=this.canvas,s=r.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(i,e,n,s),a=r.devicePixelRatio||this.platform.getDevicePixelRatio(),l=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,S2(this,a,!0)&&(this.notifyPlugins("resize",{size:o}),ze(r.onResize,[this,o],this),this.attached&&this._doResize(l)&&this.render())}ensureScalesHaveIDs(){const n=this.options.scales||{};Me(n,(r,i)=>{r.id=i})}buildOrUpdateScales(){const e=this.options,n=e.scales,r=this.scales,i=Object.keys(r).reduce((o,a)=>(o[a]=!1,o),{});let s=[];n&&(s=s.concat(Object.keys(n).map(o=>{const a=n[o],l=Wp(o,a),u=l==="r",h=l==="x";return{options:a,dposition:u?"chartArea":h?"bottom":"left",dtype:u?"radialLinear":h?"category":"linear"}}))),Me(s,o=>{const a=o.options,l=a.id,u=Wp(l,a),h=be(a.type,o.dtype);(a.position===void 0||K2(a.position,u)!==K2(o.dposition))&&(a.position=o.dposition),i[l]=!0;let f=null;if(l in r&&r[l].type===h)f=r[l];else{const d=$n.getScale(h);f=new d({id:l,type:h,ctx:this.ctx,chart:this}),r[f.id]=f}f.init(a,e)}),Me(i,(o,a)=>{o||delete r[a]}),Me(r,o=>{zr.configure(this,o,o.options),zr.addBox(this,o)})}_updateMetasets(){const e=this._metasets,n=this.data.datasets.length,r=e.length;if(e.sort((i,s)=>i.index-s.index),r>n){for(let i=n;i<r;++i)this._destroyDatasetMeta(i);e.splice(n,r-n)}this._sortedMetasets=e.slice(0).sort(G2("order","index"))}_removeUnreferencedMetasets(){const{_metasets:e,data:{datasets:n}}=this;e.length>n.length&&delete this._stacks,e.forEach((r,i)=>{n.filter(s=>s===r._dataset).length===0&&this._destroyDatasetMeta(i)})}buildOrUpdateControllers(){const e=[],n=this.data.datasets;let r,i;for(this._removeUnreferencedMetasets(),r=0,i=n.length;r<i;r++){const s=n[r];let o=this.getDatasetMeta(r);const a=s.type||this.config.type;if(o.type&&o.type!==a&&(this._destroyDatasetMeta(r),o=this.getDatasetMeta(r)),o.type=a,o.indexAxis=s.indexAxis||Hp(a,this.options),o.order=s.order||0,o.index=r,o.label=""+s.label,o.visible=this.isDatasetVisible(r),o.controller)o.controller.updateIndex(r),o.controller.linkScales();else{const l=$n.getController(a),{datasetElementType:u,dataElementType:h}=ot.datasets[a];Object.assign(l,{dataElementType:$n.getElement(h),datasetElementType:u&&$n.getElement(u)}),o.controller=new l(this,r),e.push(o.controller)}}return this._updateMetasets(),e}_resetElements(){Me(this.data.datasets,(e,n)=>{this.getDatasetMeta(n).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(e){const n=this.config;n.update();const r=this._options=n.createResolver(n.chartOptionScopes(),this.getContext()),i=this._animationsDisabled=!r.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:e,cancelable:!0})===!1)return;const s=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let u=0,h=this.data.datasets.length;u<h;u++){const{controller:f}=this.getDatasetMeta(u),d=!i&&s.indexOf(f)===-1;f.buildOrUpdateElements(d),o=Math.max(+f.getMaxOverflow(),o)}o=this._minPadding=r.layout.autoPadding?o:0,this._updateLayout(o),i||Me(s,u=>{u.reset()}),this._updateDatasets(e),this.notifyPlugins("afterUpdate",{mode:e}),this._layers.sort(G2("z","_idx"));const{_active:a,_lastEvent:l}=this;l?this._eventHandler(l,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){Me(this.scales,e=>{zr.removeBox(this,e)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const e=this.options,n=new Set(Object.keys(this._listeners)),r=new Set(e.events);(!c2(n,r)||!!this._responsiveListeners!==e.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:e}=this,n=this._getUniformDataChanges()||[];for(const{method:r,start:i,count:s}of n){const o=r==="_removeElements"?-s:s;$L(e,i,o)}}_getUniformDataChanges(){const e=this._dataChanges;if(!e||!e.length)return;this._dataChanges=[];const n=this.data.datasets.length,r=s=>new Set(e.filter(o=>o[0]===s).map((o,a)=>a+","+o.splice(1).join(","))),i=r(0);for(let s=1;s<n;s++)if(!c2(i,r(s)))return;return Array.from(i).map(s=>s.split(",")).map(s=>({method:s[1],start:+s[2],count:+s[3]}))}_updateLayout(e){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;zr.update(this,this.width,this.height,e);const n=this.chartArea,r=n.width<=0||n.height<=0;this._layers=[],Me(this.boxes,i=>{r&&i.position==="chartArea"||(i.configure&&i.configure(),this._layers.push(...i._layers()))},this),this._layers.forEach((i,s)=>{i._idx=s}),this.notifyPlugins("afterLayout")}_updateDatasets(e){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:e,cancelable:!0})!==!1){for(let n=0,r=this.data.datasets.length;n<r;++n)this.getDatasetMeta(n).controller.configure();for(let n=0,r=this.data.datasets.length;n<r;++n)this._updateDataset(n,si(e)?e({datasetIndex:n}):e);this.notifyPlugins("afterDatasetsUpdate",{mode:e})}}_updateDataset(e,n){const r=this.getDatasetMeta(e),i={meta:r,index:e,mode:n,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",i)!==!1&&(r.controller._update(n),i.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",i))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(nr.has(this)?this.attached&&!nr.running(this)&&nr.start(this):(this.draw(),Q2({chart:this})))}draw(){let e;if(this._resizeBeforeDraw){const{width:r,height:i}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(r,i)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const n=this._layers;for(e=0;e<n.length&&n[e].z<=0;++e)n[e].draw(this.chartArea);for(this._drawDatasets();e<n.length;++e)n[e].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(e){const n=this._sortedMetasets,r=[];let i,s;for(i=0,s=n.length;i<s;++i){const o=n[i];(!e||o.visible)&&r.push(o)}return r}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const e=this.getSortedVisibleDatasetMetas();for(let n=e.length-1;n>=0;--n)this._drawDataset(e[n]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(e){const n=this.ctx,r=e._clip,i=!r.disabled,s=HL(e,this.chartArea),o={meta:e,index:e.index,cancelable:!0};this.notifyPlugins("beforeDatasetDraw",o)!==!1&&(i&&jh(n,{left:r.left===!1?0:s.left-r.left,right:r.right===!1?this.width:s.right+r.right,top:r.top===!1?0:s.top-r.top,bottom:r.bottom===!1?this.height:s.bottom+r.bottom}),e.controller.draw(),i&&Bh(n),o.cancelable=!1,this.notifyPlugins("afterDatasetDraw",o))}isPointInArea(e){return cr(e,this.chartArea,this._minPadding)}getElementsAtEventForMode(e,n,r,i){const s=j9.modes[n];return typeof s=="function"?s(this,e,r,i):[]}getDatasetMeta(e){const n=this.data.datasets[e],r=this._metasets;let i=r.filter(s=>s&&s._dataset===n).pop();return i||(i={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:n&&n.order||0,index:e,_dataset:n,_parsed:[],_sorted:!1},r.push(i)),i}getContext(){return this.$context||(this.$context=mi(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(e){const n=this.data.datasets[e];if(!n)return!1;const r=this.getDatasetMeta(e);return typeof r.hidden=="boolean"?!r.hidden:!n.hidden}setDatasetVisibility(e,n){const r=this.getDatasetMeta(e);r.hidden=!n}toggleDataVisibility(e){this._hiddenIndices[e]=!this._hiddenIndices[e]}getDataVisibility(e){return!this._hiddenIndices[e]}_updateVisibility(e,n,r){const i=r?"show":"hide",s=this.getDatasetMeta(e),o=s.controller._resolveAnimations(void 0,i);Dc(n)?(s.data[n].hidden=!r,this.update()):(this.setDatasetVisibility(e,r),o.update(s,{visible:r}),this.update(a=>a.datasetIndex===e?i:void 0))}hide(e,n){this._updateVisibility(e,n,!1)}show(e,n){this._updateVisibility(e,n,!0)}_destroyDatasetMeta(e){const n=this._metasets[e];n&&n.controller&&n.controller._destroy(),delete this._metasets[e]}_stop(){let e,n;for(this.stop(),nr.remove(this),e=0,n=this.data.datasets.length;e<n;++e)this._destroyDatasetMeta(e)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:e,ctx:n}=this;this._stop(),this.config.clearCache(),e&&(this.unbindEvents(),v2(e,n),this.platform.releaseContext(n),this.canvas=null,this.ctx=null),delete Yu[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...e){return this.canvas.toDataURL(...e)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const e=this._listeners,n=this.platform,r=(s,o)=>{n.addEventListener(this,s,o),e[s]=o},i=(s,o,a)=>{s.offsetX=o,s.offsetY=a,this._eventHandler(s)};Me(this.options.events,s=>r(s,i))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const e=this._responsiveListeners,n=this.platform,r=(l,u)=>{n.addEventListener(this,l,u),e[l]=u},i=(l,u)=>{e[l]&&(n.removeEventListener(this,l,u),delete e[l])},s=(l,u)=>{this.canvas&&this.resize(l,u)};let o;const a=()=>{i("attach",a),this.attached=!0,this.resize(),r("resize",s),r("detach",o)};o=()=>{this.attached=!1,i("resize",s),this._stop(),this._resize(0,0),r("attach",a)},n.isAttached(this.canvas)?a():o()}unbindEvents(){Me(this._listeners,(e,n)=>{this.platform.removeEventListener(this,n,e)}),this._listeners={},Me(this._responsiveListeners,(e,n)=>{this.platform.removeEventListener(this,n,e)}),this._responsiveListeners=void 0}updateHoverStyle(e,n,r){const i=r?"set":"remove";let s,o,a,l;for(n==="dataset"&&(s=this.getDatasetMeta(e[0].datasetIndex),s.controller["_"+i+"DatasetHoverStyle"]()),a=0,l=e.length;a<l;++a){o=e[a];const u=o&&this.getDatasetMeta(o.datasetIndex).controller;u&&u[i+"HoverStyle"](o.element,o.datasetIndex,o.index)}}getActiveElements(){return this._active||[]}setActiveElements(e){const n=this._active||[],r=e.map(({datasetIndex:s,index:o})=>{const a=this.getDatasetMeta(s);if(!a)throw new Error("No dataset found at index "+s);return{datasetIndex:s,element:a.data[o],index:o}});!Lc(r,n)&&(this._active=r,this._lastEvent=null,this._updateHoverStyles(r,n))}notifyPlugins(e,n,r){return this._plugins.notify(this,e,n,r)}isPluginEnabled(e){return this._plugins._cache.filter(n=>n.plugin.id===e).length===1}_updateHoverStyles(e,n,r){const i=this.options.hover,s=(l,u)=>l.filter(h=>!u.some(f=>h.datasetIndex===f.datasetIndex&&h.index===f.index)),o=s(n,e),a=r?e:s(e,n);o.length&&this.updateHoverStyle(o,i.mode,!1),a.length&&i.mode&&this.updateHoverStyle(a,i.mode,!0)}_eventHandler(e,n){const r={event:e,replay:n,cancelable:!0,inChartArea:this.isPointInArea(e)},i=o=>(o.options.events||this.options.events).includes(e.native.type);if(this.notifyPlugins("beforeEvent",r,i)===!1)return;const s=this._handleEvent(e,n,r.inChartArea);return r.cancelable=!1,this.notifyPlugins("afterEvent",r,i),(s||r.changed)&&this.render(),this}_handleEvent(e,n,r){const{_active:i=[],options:s}=this,o=n,a=this._getActiveElements(e,i,r,o),l=sk(e),u=UL(e,this._lastEvent,r,l);r&&(this._lastEvent=null,ze(s.onHover,[e,a,this],this),l&&ze(s.onClick,[e,a,this],this));const h=!Lc(a,i);return(h||n)&&(this._active=a,this._updateHoverStyles(a,i,n)),this._lastEvent=u,h}_getActiveElements(e,n,r,i){if(e.type==="mouseout")return[];if(!r)return n;const s=this.options.hover;return this.getElementsAtEventForMode(e,s.mode,s,i)}},pe(Ar,"defaults",ot),pe(Ar,"instances",Yu),pe(Ar,"overrides",Wi),pe(Ar,"registry",$n),pe(Ar,"version",zL),pe(Ar,"getChart",Y2),Ar);function X2(){return Me(Uh.instances,t=>t._plugins.invalidate())}function DS(t,e,n=e){t.lineCap=be(n.borderCapStyle,e.borderCapStyle),t.setLineDash(be(n.borderDash,e.borderDash)),t.lineDashOffset=be(n.borderDashOffset,e.borderDashOffset),t.lineJoin=be(n.borderJoinStyle,e.borderJoinStyle),t.lineWidth=be(n.borderWidth,e.borderWidth),t.strokeStyle=be(n.borderColor,e.borderColor)}function WL(t,e,n){t.lineTo(n.x,n.y)}function qL(t){return t.stepped?Pk:t.tension||t.cubicInterpolationMode==="monotone"?kk:WL}function MS(t,e,n={}){const r=t.length,{start:i=0,end:s=r-1}=n,{start:o,end:a}=e,l=Math.max(i,o),u=Math.min(s,a),h=i<o&&s<o||i>a&&s>a;return{count:r,start:l,loop:e.loop,ilen:u<l&&!h?r+u-l:u-l}}function KL(t,e,n,r){const{points:i,options:s}=e,{count:o,start:a,loop:l,ilen:u}=MS(i,n,r),h=qL(s);let{move:f=!0,reverse:d}=r||{},m,_,y;for(m=0;m<=u;++m)_=i[(a+(d?u-m:m))%o],!_.skip&&(f?(t.moveTo(_.x,_.y),f=!1):h(t,y,_,d,s.stepped),y=_);return l&&(_=i[(a+(d?u:0))%o],h(t,y,_,d,s.stepped)),!!l}function GL(t,e,n,r){const i=e.points,{count:s,start:o,ilen:a}=MS(i,n,r),{move:l=!0,reverse:u}=r||{};let h=0,f=0,d,m,_,y,E,w;const v=C=>(o+(u?a-C:C))%s,S=()=>{y!==E&&(t.lineTo(h,E),t.lineTo(h,y),t.lineTo(h,w))};for(l&&(m=i[v(0)],t.moveTo(m.x,m.y)),d=0;d<=a;++d){if(m=i[v(d)],m.skip)continue;const C=m.x,O=m.y,D=C|0;D===_?(O<y?y=O:O>E&&(E=O),h=(f*h+C)/++f):(S(),t.lineTo(C,O),_=D,f=0,y=E=O),w=O}S()}function qp(t){const e=t.options,n=e.borderDash&&e.borderDash.length;return!t._decimated&&!t._loop&&!e.tension&&e.cubicInterpolationMode!=="monotone"&&!e.stepped&&!n?GL:KL}function QL(t){return t.stepped?h9:t.tension||t.cubicInterpolationMode==="monotone"?f9:Ai}function YL(t,e,n,r){let i=e._path;i||(i=e._path=new Path2D,e.path(i,n,r)&&i.closePath()),DS(t,e.options),t.stroke(i)}function XL(t,e,n,r){const{segments:i,options:s}=e,o=qp(e);for(const a of i)DS(t,s,a.style),t.beginPath(),o(t,e,a,{start:n,end:n+r-1})&&t.closePath(),t.stroke()}const JL=typeof Path2D=="function";function ZL(t,e,n,r){JL&&!e.options.segment?YL(t,e,n,r):XL(t,e,n,r)}class jr extends yo{constructor(e){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,e&&Object.assign(this,e)}updateControlPoints(e,n){const r=this.options;if((r.tension||r.cubicInterpolationMode==="monotone")&&!r.stepped&&!this._pointsUpdated){const i=r.spanGaps?this._loop:this._fullLoop;r9(this._points,r,e,i,n),this._pointsUpdated=!0}}set points(e){this._points=e,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=y9(this,this.options.segment))}first(){const e=this.segments,n=this.points;return e.length&&n[e[0].start]}last(){const e=this.segments,n=this.points,r=e.length;return r&&n[e[r-1].end]}interpolate(e,n){const r=this.options,i=e[n],s=this.points,o=SS(this,{property:n,start:i,end:i});if(!o.length)return;const a=[],l=QL(r);let u,h;for(u=0,h=o.length;u<h;++u){const{start:f,end:d}=o[u],m=s[f],_=s[d];if(m===_){a.push(m);continue}const y=Math.abs((i-m[n])/(_[n]-m[n])),E=l(m,_,y,r.stepped);E[n]=e[n],a.push(E)}return a.length===1?a[0]:a}pathSegment(e,n,r){return qp(this)(e,this,n,r)}path(e,n,r){const i=this.segments,s=qp(this);let o=this._loop;n=n||0,r=r||this.points.length-n;for(const a of i)o&=s(e,this,a,{start:n,end:n+r-1});return!!o}draw(e,n,r,i){const s=this.options||{};(this.points||[]).length&&s.borderWidth&&(e.save(),ZL(e,this,r,i),e.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}pe(jr,"id","line"),pe(jr,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),pe(jr,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),pe(jr,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"&&e!=="fill"});function J2(t,e,n,r){const i=t.options,{[n]:s}=t.getProps([n],r);return Math.abs(e-s)<i.radius+i.hitRadius}class Xu extends yo{constructor(n){super();pe(this,"parsed");pe(this,"skip");pe(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,n&&Object.assign(this,n)}inRange(n,r,i){const s=this.options,{x:o,y:a}=this.getProps(["x","y"],i);return Math.pow(n-o,2)+Math.pow(r-a,2)<Math.pow(s.hitRadius+s.radius,2)}inXRange(n,r){return J2(this,n,"x",r)}inYRange(n,r){return J2(this,n,"y",r)}getCenterPoint(n){const{x:r,y:i}=this.getProps(["x","y"],n);return{x:r,y:i}}size(n){n=n||this.options||{};let r=n.radius||0;r=Math.max(r,r&&n.hoverRadius||0);const i=r&&n.borderWidth||0;return(r+i)*2}draw(n,r){const i=this.options;this.skip||i.radius<.1||!cr(this,r,this.size(i)/2)||(n.strokeStyle=i.borderColor,n.lineWidth=i.borderWidth,n.fillStyle=i.backgroundColor,Up(n,i,this.x,this.y))}getRange(){const n=this.options||{};return n.radius+n.hitRadius}}pe(Xu,"id","point"),pe(Xu,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),pe(Xu,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function eO(t,e,n){const r=t.segments,i=t.points,s=e.points,o=[];for(const a of r){let{start:l,end:u}=a;u=Gg(l,u,i);const h=Kp(n,i[l],i[u],a.loop);if(!e.segments){o.push({source:a,target:h,start:i[l],end:i[u]});continue}const f=SS(e,h);for(const d of f){const m=Kp(n,s[d.start],s[d.end],d.loop),_=ES(a,i,m);for(const y of _)o.push({source:y,target:d,start:{[n]:Z2(h,m,"start",Math.max)},end:{[n]:Z2(h,m,"end",Math.min)}})}}return o}function Kp(t,e,n,r){if(r)return;let i=e[t],s=n[t];return t==="angle"&&(i=un(i),s=un(s)),{property:t,start:i,end:s}}function tO(t,e){const{x:n=null,y:r=null}=t||{},i=e.points,s=[];return e.segments.forEach(({start:o,end:a})=>{a=Gg(o,a,i);const l=i[o],u=i[a];r!==null?(s.push({x:l.x,y:r}),s.push({x:u.x,y:r})):n!==null&&(s.push({x:n,y:l.y}),s.push({x:n,y:u.y}))}),s}function Gg(t,e,n){for(;e>t;e--){const r=n[e];if(!isNaN(r.x)&&!isNaN(r.y))break}return e}function Z2(t,e,n,r){return t&&e?r(t[n],e[n]):t?t[n]:e?e[n]:0}function NS(t,e){let n=[],r=!1;return it(t)?(r=!0,n=t):n=tO(t,e),n.length?new jr({points:n,options:{tension:0},_loop:r,_fullLoop:r}):null}function e0(t){return t&&t.fill!==!1}function nO(t,e,n){let i=t[e].fill;const s=[e];let o;if(!n)return i;for(;i!==!1&&s.indexOf(i)===-1;){if(!st(i))return i;if(o=t[i],!o)return!1;if(o.visible)return i;s.push(i),i=o.fill}return!1}function rO(t,e,n){const r=aO(t);if(Re(r))return isNaN(r.value)?!1:r;let i=parseFloat(r);return st(i)&&Math.floor(i)===i?iO(r[0],e,i,n):["origin","start","end","stack","shape"].indexOf(r)>=0&&r}function iO(t,e,n,r){return(t==="-"||t==="+")&&(n=e+n),n===e||n<0||n>=r?!1:n}function sO(t,e){let n=null;return t==="start"?n=e.bottom:t==="end"?n=e.top:Re(t)?n=e.getPixelForValue(t.value):e.getBasePixel&&(n=e.getBasePixel()),n}function oO(t,e,n){let r;return t==="start"?r=n:t==="end"?r=e.options.reverse?e.min:e.max:Re(t)?r=t.value:r=e.getBaseValue(),r}function aO(t){const e=t.options,n=e.fill;let r=be(n&&n.target,n);return r===void 0&&(r=!!e.backgroundColor),r===!1||r===null?!1:r===!0?"origin":r}function lO(t){const{scale:e,index:n,line:r}=t,i=[],s=r.segments,o=r.points,a=uO(e,n);a.push(NS({x:null,y:e.bottom},r));for(let l=0;l<s.length;l++){const u=s[l];for(let h=u.start;h<=u.end;h++)cO(i,o[h],a)}return new jr({points:i,options:{}})}function uO(t,e){const n=[],r=t.getMatchingVisibleMetas("line");for(let i=0;i<r.length;i++){const s=r[i];if(s.index===e)break;s.hidden||n.unshift(s.dataset)}return n}function cO(t,e,n){const r=[];for(let i=0;i<n.length;i++){const s=n[i],{first:o,last:a,point:l}=hO(s,e,"x");if(!(!l||o&&a)){if(o)r.unshift(l);else if(t.push(l),!a)break}}t.push(...r)}function hO(t,e,n){const r=t.interpolate(e,n);if(!r)return{};const i=r[n],s=t.segments,o=t.points;let a=!1,l=!1;for(let u=0;u<s.length;u++){const h=s[u],f=o[h.start][n],d=o[h.end][n];if(Is(i,f,d)){a=i===f,l=i===d;break}}return{first:a,last:l,point:r}}class VS{constructor(e){this.x=e.x,this.y=e.y,this.radius=e.radius}pathSegment(e,n,r){const{x:i,y:s,radius:o}=this;return n=n||{start:0,end:dn},e.arc(i,s,o,n.end,n.start,!0),!r.bounds}interpolate(e){const{x:n,y:r,radius:i}=this,s=e.angle;return{x:n+Math.cos(s)*i,y:r+Math.sin(s)*i,angle:s}}}function fO(t){const{chart:e,fill:n,line:r}=t;if(st(n))return dO(e,n);if(n==="stack")return lO(t);if(n==="shape")return!0;const i=pO(t);return i instanceof VS?i:NS(i,r)}function dO(t,e){const n=t.getDatasetMeta(e);return n&&t.isDatasetVisible(e)?n.dataset:null}function pO(t){return(t.scale||{}).getPointPositionForValue?gO(t):mO(t)}function mO(t){const{scale:e={},fill:n}=t,r=sO(n,e);if(st(r)){const i=e.isHorizontal();return{x:i?r:null,y:i?null:r}}return null}function gO(t){const{scale:e,fill:n}=t,r=e.options,i=e.getLabels().length,s=r.reverse?e.max:e.min,o=oO(n,e,s),a=[];if(r.grid.circular){const l=e.getPointPositionForValue(0,s);return new VS({x:l.x,y:l.y,radius:e.getDistanceFromCenterForValue(o)})}for(let l=0;l<i;++l)a.push(e.getPointPositionForValue(l,o));return a}function gd(t,e,n){const r=fO(e),{line:i,scale:s,axis:o}=e,a=i.options,l=a.fill,u=a.backgroundColor,{above:h=u,below:f=u}=l||{};r&&i.points.length&&(jh(t,n),_O(t,{line:i,target:r,above:h,below:f,area:n,scale:s,axis:o}),Bh(t))}function _O(t,e){const{line:n,target:r,above:i,below:s,area:o,scale:a}=e,l=n._loop?"angle":e.axis;t.save(),l==="x"&&s!==i&&(t0(t,r,o.top),n0(t,{line:n,target:r,color:i,scale:a,property:l}),t.restore(),t.save(),t0(t,r,o.bottom)),n0(t,{line:n,target:r,color:s,scale:a,property:l}),t.restore()}function t0(t,e,n){const{segments:r,points:i}=e;let s=!0,o=!1;t.beginPath();for(const a of r){const{start:l,end:u}=a,h=i[l],f=i[Gg(l,u,i)];s?(t.moveTo(h.x,h.y),s=!1):(t.lineTo(h.x,n),t.lineTo(h.x,h.y)),o=!!e.pathSegment(t,a,{move:o}),o?t.closePath():t.lineTo(f.x,n)}t.lineTo(e.first().x,n),t.closePath(),t.clip()}function n0(t,e){const{line:n,target:r,property:i,color:s,scale:o}=e,a=eO(n,r,i);for(const{source:l,target:u,start:h,end:f}of a){const{style:{backgroundColor:d=s}={}}=l,m=r!==!0;t.save(),t.fillStyle=d,yO(t,o,m&&Kp(i,h,f)),t.beginPath();const _=!!n.pathSegment(t,l);let y;if(m){_?t.closePath():r0(t,r,f,i);const E=!!r.pathSegment(t,u,{move:_,reverse:!0});y=_&&E,y||r0(t,r,h,i)}t.closePath(),t.fill(y?"evenodd":"nonzero"),t.restore()}}function yO(t,e,n){const{top:r,bottom:i}=e.chart.chartArea,{property:s,start:o,end:a}=n||{};s==="x"&&(t.beginPath(),t.rect(o,r,a-o,i-r),t.clip())}function r0(t,e,n,r){const i=e.interpolate(n,r);i&&t.lineTo(i.x,i.y)}var vO={id:"filler",afterDatasetsUpdate(t,e,n){const r=(t.data.datasets||[]).length,i=[];let s,o,a,l;for(o=0;o<r;++o)s=t.getDatasetMeta(o),a=s.dataset,l=null,a&&a.options&&a instanceof jr&&(l={visible:t.isDatasetVisible(o),index:o,fill:rO(a,o,r),chart:t,axis:s.controller.options.indexAxis,scale:s.vScale,line:a}),s.$filler=l,i.push(l);for(o=0;o<r;++o)l=i[o],!(!l||l.fill===!1)&&(l.fill=nO(i,o,n.propagate))},beforeDraw(t,e,n){const r=n.drawTime==="beforeDraw",i=t.getSortedVisibleDatasetMetas(),s=t.chartArea;for(let o=i.length-1;o>=0;--o){const a=i[o].$filler;a&&(a.line.updateControlPoints(s,a.axis),r&&a.fill&&gd(t.ctx,a,s))}},beforeDatasetsDraw(t,e,n){if(n.drawTime!=="beforeDatasetsDraw")return;const r=t.getSortedVisibleDatasetMetas();for(let i=r.length-1;i>=0;--i){const s=r[i].$filler;e0(s)&&gd(t.ctx,s,t.chartArea)}},beforeDatasetDraw(t,e,n){const r=e.meta.$filler;!e0(r)||n.drawTime!=="beforeDatasetDraw"||gd(t.ctx,r,t.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const i0=(t,e)=>{let{boxHeight:n=e,boxWidth:r=e}=t;return t.usePointStyle&&(n=Math.min(n,e),r=t.pointStyleWidth||Math.min(r,e)),{boxWidth:r,boxHeight:n,itemHeight:Math.max(e,n)}},wO=(t,e)=>t!==null&&e!==null&&t.datasetIndex===e.datasetIndex&&t.index===e.index;class s0 extends yo{constructor(e){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,n,r){this.maxWidth=e,this.maxHeight=n,this._margins=r,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const e=this.options.labels||{};let n=ze(e.generateLabels,[this.chart],this)||[];e.filter&&(n=n.filter(r=>e.filter(r,this.chart.data))),e.sort&&(n=n.sort((r,i)=>e.sort(r,i,this.chart.data))),this.options.reverse&&n.reverse(),this.legendItems=n}fit(){const{options:e,ctx:n}=this;if(!e.display){this.width=this.height=0;return}const r=e.labels,i=xt(r.font),s=i.size,o=this._computeTitleHeight(),{boxWidth:a,itemHeight:l}=i0(r,s);let u,h;n.font=i.string,this.isHorizontal()?(u=this.maxWidth,h=this._fitRows(o,s,a,l)+10):(h=this.maxHeight,u=this._fitCols(o,i,a,l)+10),this.width=Math.min(u,e.maxWidth||this.maxWidth),this.height=Math.min(h,e.maxHeight||this.maxHeight)}_fitRows(e,n,r,i){const{ctx:s,maxWidth:o,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],u=this.lineWidths=[0],h=i+a;let f=e;s.textAlign="left",s.textBaseline="middle";let d=-1,m=-h;return this.legendItems.forEach((_,y)=>{const E=r+n/2+s.measureText(_.text).width;(y===0||u[u.length-1]+E+2*a>o)&&(f+=h,u[u.length-(y>0?0:1)]=0,m+=h,d++),l[y]={left:0,top:m,row:d,width:E,height:i},u[u.length-1]+=E+a}),f}_fitCols(e,n,r,i){const{ctx:s,maxHeight:o,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],u=this.columnSizes=[],h=o-e;let f=a,d=0,m=0,_=0,y=0;return this.legendItems.forEach((E,w)=>{const{itemWidth:v,itemHeight:S}=EO(r,n,s,E,i);w>0&&m+S+2*a>h&&(f+=d+a,u.push({width:d,height:m}),_+=d+a,y++,d=m=0),l[w]={left:_,top:m,col:y,width:v,height:S},d=Math.max(d,v),m+=S+a}),f+=d,u.push({width:d,height:m}),f}adjustHitBoxes(){if(!this.options.display)return;const e=this._computeTitleHeight(),{legendHitBoxes:n,options:{align:r,labels:{padding:i},rtl:s}}=this,o=Ds(s,this.left,this.width);if(this.isHorizontal()){let a=0,l=on(r,this.left+i,this.right-this.lineWidths[a]);for(const u of n)a!==u.row&&(a=u.row,l=on(r,this.left+i,this.right-this.lineWidths[a])),u.top+=this.top+e+i,u.left=o.leftForLtr(o.x(l),u.width),l+=u.width+i}else{let a=0,l=on(r,this.top+e+i,this.bottom-this.columnSizes[a].height);for(const u of n)u.col!==a&&(a=u.col,l=on(r,this.top+e+i,this.bottom-this.columnSizes[a].height)),u.top=l,u.left+=this.left+i,u.left=o.leftForLtr(o.x(u.left),u.width),l+=u.height+i}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const e=this.ctx;jh(e,this),this._draw(),Bh(e)}}_draw(){const{options:e,columnSizes:n,lineWidths:r,ctx:i}=this,{align:s,labels:o}=e,a=ot.color,l=Ds(e.rtl,this.left,this.width),u=xt(o.font),{padding:h}=o,f=u.size,d=f/2;let m;this.drawTitle(),i.textAlign=l.textAlign("left"),i.textBaseline="middle",i.lineWidth=.5,i.font=u.string;const{boxWidth:_,boxHeight:y,itemHeight:E}=i0(o,f),w=function(D,I,T){if(isNaN(_)||_<=0||isNaN(y)||y<0)return;i.save();const b=be(T.lineWidth,1);if(i.fillStyle=be(T.fillStyle,a),i.lineCap=be(T.lineCap,"butt"),i.lineDashOffset=be(T.lineDashOffset,0),i.lineJoin=be(T.lineJoin,"miter"),i.lineWidth=b,i.strokeStyle=be(T.strokeStyle,a),i.setLineDash(be(T.lineDash,[])),o.usePointStyle){const x={radius:y*Math.SQRT2/2,pointStyle:T.pointStyle,rotation:T.rotation,borderWidth:b},P=l.xPlus(D,_/2),k=I+d;hS(i,x,P,k,o.pointStyleWidth&&_)}else{const x=I+Math.max((f-y)/2,0),P=l.leftForLtr(D,_),k=Os(T.borderRadius);i.beginPath(),Object.values(k).some(A=>A!==0)?Fc(i,{x:P,y:x,w:_,h:y,radius:k}):i.rect(P,x,_,y),i.fill(),b!==0&&i.stroke()}i.restore()},v=function(D,I,T){Gs(i,T.text,D,I+E/2,u,{strikethrough:T.hidden,textAlign:l.textAlign(T.textAlign)})},S=this.isHorizontal(),C=this._computeTitleHeight();S?m={x:on(s,this.left+h,this.right-r[0]),y:this.top+h+C,line:0}:m={x:this.left+h,y:on(s,this.top+C+h,this.bottom-n[0].height),line:0},yS(this.ctx,e.textDirection);const O=E+h;this.legendItems.forEach((D,I)=>{i.strokeStyle=D.fontColor,i.fillStyle=D.fontColor;const T=i.measureText(D.text).width,b=l.textAlign(D.textAlign||(D.textAlign=o.textAlign)),x=_+d+T;let P=m.x,k=m.y;l.setWidth(this.width),S?I>0&&P+x+h>this.right&&(k=m.y+=O,m.line++,P=m.x=on(s,this.left+h,this.right-r[m.line])):I>0&&k+O>this.bottom&&(P=m.x=P+n[m.line].width+h,m.line++,k=m.y=on(s,this.top+C+h,this.bottom-n[m.line].height));const A=l.x(P);if(w(A,k,D),P=vk(b,P+_+d,S?P+x:this.right,e.rtl),v(l.x(P),k,D),S)m.x+=x+h;else if(typeof D.text!="string"){const Z=u.lineHeight;m.y+=FS(D,Z)+h}else m.y+=O}),vS(this.ctx,e.textDirection)}drawTitle(){const e=this.options,n=e.title,r=xt(n.font),i=Wt(n.padding);if(!n.display)return;const s=Ds(e.rtl,this.left,this.width),o=this.ctx,a=n.position,l=r.size/2,u=i.top+l;let h,f=this.left,d=this.width;if(this.isHorizontal())d=Math.max(...this.lineWidths),h=this.top+u,f=on(e.align,f,this.right-d);else{const _=this.columnSizes.reduce((y,E)=>Math.max(y,E.height),0);h=u+on(e.align,this.top,this.bottom-_-e.labels.padding-this._computeTitleHeight())}const m=on(a,f,f+d);o.textAlign=s.textAlign(uS(a)),o.textBaseline="middle",o.strokeStyle=n.color,o.fillStyle=n.color,o.font=r.string,Gs(o,n.text,m,h,r)}_computeTitleHeight(){const e=this.options.title,n=xt(e.font),r=Wt(e.padding);return e.display?n.lineHeight+r.height:0}_getLegendItemAt(e,n){let r,i,s;if(Is(e,this.left,this.right)&&Is(n,this.top,this.bottom)){for(s=this.legendHitBoxes,r=0;r<s.length;++r)if(i=s[r],Is(e,i.left,i.left+i.width)&&Is(n,i.top,i.top+i.height))return this.legendItems[r]}return null}handleEvent(e){const n=this.options;if(!bO(e.type,n))return;const r=this._getLegendItemAt(e.x,e.y);if(e.type==="mousemove"||e.type==="mouseout"){const i=this._hoveredItem,s=wO(i,r);i&&!s&&ze(n.onLeave,[e,i,this],this),this._hoveredItem=r,r&&!s&&ze(n.onHover,[e,r,this],this)}else r&&ze(n.onClick,[e,r,this],this)}}function EO(t,e,n,r,i){const s=SO(r,t,e,n),o=TO(i,r,e.lineHeight);return{itemWidth:s,itemHeight:o}}function SO(t,e,n,r){let i=t.text;return i&&typeof i!="string"&&(i=i.reduce((s,o)=>s.length>o.length?s:o)),e+n.size/2+r.measureText(i).width}function TO(t,e,n){let r=t;return typeof e.text!="string"&&(r=FS(e,n)),r}function FS(t,e){const n=t.text?t.text.length:0;return e*n}function bO(t,e){return!!((t==="mousemove"||t==="mouseout")&&(e.onHover||e.onLeave)||e.onClick&&(t==="click"||t==="mouseup"))}var xO={id:"legend",_element:s0,start(t,e,n){const r=t.legend=new s0({ctx:t.ctx,options:n,chart:t});zr.configure(t,r,n),zr.addBox(t,r)},stop(t){zr.removeBox(t,t.legend),delete t.legend},beforeUpdate(t,e,n){const r=t.legend;zr.configure(t,r,n),r.options=n},afterUpdate(t){const e=t.legend;e.buildLabels(),e.adjustHitBoxes()},afterEvent(t,e){e.replay||t.legend.handleEvent(e.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(t,e,n){const r=e.datasetIndex,i=n.chart;i.isDatasetVisible(r)?(i.hide(r),e.hidden=!0):(i.show(r),e.hidden=!1)},onHover:null,onLeave:null,labels:{color:t=>t.chart.options.color,boxWidth:40,padding:10,generateLabels(t){const e=t.data.datasets,{labels:{usePointStyle:n,pointStyle:r,textAlign:i,color:s,useBorderRadius:o,borderRadius:a}}=t.legend.options;return t._getSortedDatasetMetas().map(l=>{const u=l.controller.getStyle(n?0:void 0),h=Wt(u.borderWidth);return{text:e[l.index].label,fillStyle:u.backgroundColor,fontColor:s,hidden:!l.visible,lineCap:u.borderCapStyle,lineDash:u.borderDash,lineDashOffset:u.borderDashOffset,lineJoin:u.borderJoinStyle,lineWidth:(h.width+h.height)/4,strokeStyle:u.borderColor,pointStyle:r||u.pointStyle,rotation:u.rotation,textAlign:i||u.textAlign,borderRadius:o&&(a||u.borderRadius),datasetIndex:l.index}},this)}},title:{color:t=>t.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:t=>!t.startsWith("on"),labels:{_scriptable:t=>!["generateLabels","filter","sort"].includes(t)}}};const oa={average(t){if(!t.length)return!1;let e,n,r=new Set,i=0,s=0;for(e=0,n=t.length;e<n;++e){const a=t[e].element;if(a&&a.hasValue()){const l=a.tooltipPosition();r.add(l.x),i+=l.y,++s}}return s===0||r.size===0?!1:{x:[...r].reduce((a,l)=>a+l)/r.size,y:i/s}},nearest(t,e){if(!t.length)return!1;let n=e.x,r=e.y,i=Number.POSITIVE_INFINITY,s,o,a;for(s=0,o=t.length;s<o;++s){const l=t[s].element;if(l&&l.hasValue()){const u=l.getCenterPoint(),h=jp(e,u);h<i&&(i=h,a=l)}}if(a){const l=a.tooltipPosition();n=l.x,r=l.y}return{x:n,y:r}}};function jn(t,e){return e&&(it(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function rr(t){return(typeof t=="string"||t instanceof String)&&t.indexOf(`
`)>-1?t.split(`
`):t}function IO(t,e){const{element:n,datasetIndex:r,index:i}=e,s=t.getDatasetMeta(r).controller,{label:o,value:a}=s.getLabelAndValue(i);return{chart:t,label:o,parsed:s.getParsed(i),raw:t.data.datasets[r].data[i],formattedValue:a,dataset:s.getDataset(),dataIndex:i,datasetIndex:r,element:n}}function o0(t,e){const n=t.chart.ctx,{body:r,footer:i,title:s}=t,{boxWidth:o,boxHeight:a}=e,l=xt(e.bodyFont),u=xt(e.titleFont),h=xt(e.footerFont),f=s.length,d=i.length,m=r.length,_=Wt(e.padding);let y=_.height,E=0,w=r.reduce((C,O)=>C+O.before.length+O.lines.length+O.after.length,0);if(w+=t.beforeBody.length+t.afterBody.length,f&&(y+=f*u.lineHeight+(f-1)*e.titleSpacing+e.titleMarginBottom),w){const C=e.displayColors?Math.max(a,l.lineHeight):l.lineHeight;y+=m*C+(w-m)*l.lineHeight+(w-1)*e.bodySpacing}d&&(y+=e.footerMarginTop+d*h.lineHeight+(d-1)*e.footerSpacing);let v=0;const S=function(C){E=Math.max(E,n.measureText(C).width+v)};return n.save(),n.font=u.string,Me(t.title,S),n.font=l.string,Me(t.beforeBody.concat(t.afterBody),S),v=e.displayColors?o+2+e.boxPadding:0,Me(r,C=>{Me(C.before,S),Me(C.lines,S),Me(C.after,S)}),v=0,n.font=h.string,Me(t.footer,S),n.restore(),E+=_.width,{width:E,height:y}}function RO(t,e){const{y:n,height:r}=e;return n<r/2?"top":n>t.height-r/2?"bottom":"center"}function AO(t,e,n,r){const{x:i,width:s}=r,o=n.caretSize+n.caretPadding;if(t==="left"&&i+s+o>e.width||t==="right"&&i-s-o<0)return!0}function CO(t,e,n,r){const{x:i,width:s}=n,{width:o,chartArea:{left:a,right:l}}=t;let u="center";return r==="center"?u=i<=(a+l)/2?"left":"right":i<=s/2?u="left":i>=o-s/2&&(u="right"),AO(u,t,e,n)&&(u="center"),u}function a0(t,e,n){const r=n.yAlign||e.yAlign||RO(t,n);return{xAlign:n.xAlign||e.xAlign||CO(t,e,n,r),yAlign:r}}function PO(t,e){let{x:n,width:r}=t;return e==="right"?n-=r:e==="center"&&(n-=r/2),n}function kO(t,e,n){let{y:r,height:i}=t;return e==="top"?r+=n:e==="bottom"?r-=i+n:r-=i/2,r}function l0(t,e,n,r){const{caretSize:i,caretPadding:s,cornerRadius:o}=t,{xAlign:a,yAlign:l}=n,u=i+s,{topLeft:h,topRight:f,bottomLeft:d,bottomRight:m}=Os(o);let _=PO(e,a);const y=kO(e,l,u);return l==="center"?a==="left"?_+=u:a==="right"&&(_-=u):a==="left"?_-=Math.max(h,d)+i:a==="right"&&(_+=Math.max(f,m)+i),{x:ur(_,0,r.width-e.width),y:ur(y,0,r.height-e.height)}}function Eu(t,e,n){const r=Wt(n.padding);return e==="center"?t.x+t.width/2:e==="right"?t.x+t.width-r.right:t.x+r.left}function u0(t){return jn([],rr(t))}function LO(t,e,n){return mi(t,{tooltip:e,tooltipItems:n,type:"tooltip"})}function c0(t,e){const n=e&&e.dataset&&e.dataset.tooltip&&e.dataset.tooltip.callbacks;return n?t.override(n):t}const zS={beforeTitle:tr,title(t){if(t.length>0){const e=t[0],n=e.chart.data.labels,r=n?n.length:0;if(this&&this.options&&this.options.mode==="dataset")return e.dataset.label||"";if(e.label)return e.label;if(r>0&&e.dataIndex<r)return n[e.dataIndex]}return""},afterTitle:tr,beforeBody:tr,beforeLabel:tr,label(t){if(this&&this.options&&this.options.mode==="dataset")return t.label+": "+t.formattedValue||t.formattedValue;let e=t.dataset.label||"";e&&(e+=": ");const n=t.formattedValue;return We(n)||(e+=n),e},labelColor(t){const n=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{borderColor:n.borderColor,backgroundColor:n.backgroundColor,borderWidth:n.borderWidth,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(t){const n=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{pointStyle:n.pointStyle,rotation:n.rotation}},afterLabel:tr,afterBody:tr,beforeFooter:tr,footer:tr,afterFooter:tr};function Gt(t,e,n,r){const i=t[e].call(n,r);return typeof i>"u"?zS[e].call(n,r):i}class Gp extends yo{constructor(e){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=e.chart,this.options=e.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(e){this.options=e,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const e=this._cachedAnimations;if(e)return e;const n=this.chart,r=this.options.setContext(this.getContext()),i=r.enabled&&n.options.animation&&r.animations,s=new TS(this.chart,i);return i._cacheable&&(this._cachedAnimations=Object.freeze(s)),s}getContext(){return this.$context||(this.$context=LO(this.chart.getContext(),this,this._tooltipItems))}getTitle(e,n){const{callbacks:r}=n,i=Gt(r,"beforeTitle",this,e),s=Gt(r,"title",this,e),o=Gt(r,"afterTitle",this,e);let a=[];return a=jn(a,rr(i)),a=jn(a,rr(s)),a=jn(a,rr(o)),a}getBeforeBody(e,n){return u0(Gt(n.callbacks,"beforeBody",this,e))}getBody(e,n){const{callbacks:r}=n,i=[];return Me(e,s=>{const o={before:[],lines:[],after:[]},a=c0(r,s);jn(o.before,rr(Gt(a,"beforeLabel",this,s))),jn(o.lines,Gt(a,"label",this,s)),jn(o.after,rr(Gt(a,"afterLabel",this,s))),i.push(o)}),i}getAfterBody(e,n){return u0(Gt(n.callbacks,"afterBody",this,e))}getFooter(e,n){const{callbacks:r}=n,i=Gt(r,"beforeFooter",this,e),s=Gt(r,"footer",this,e),o=Gt(r,"afterFooter",this,e);let a=[];return a=jn(a,rr(i)),a=jn(a,rr(s)),a=jn(a,rr(o)),a}_createItems(e){const n=this._active,r=this.chart.data,i=[],s=[],o=[];let a=[],l,u;for(l=0,u=n.length;l<u;++l)a.push(IO(this.chart,n[l]));return e.filter&&(a=a.filter((h,f,d)=>e.filter(h,f,d,r))),e.itemSort&&(a=a.sort((h,f)=>e.itemSort(h,f,r))),Me(a,h=>{const f=c0(e.callbacks,h);i.push(Gt(f,"labelColor",this,h)),s.push(Gt(f,"labelPointStyle",this,h)),o.push(Gt(f,"labelTextColor",this,h))}),this.labelColors=i,this.labelPointStyles=s,this.labelTextColors=o,this.dataPoints=a,a}update(e,n){const r=this.options.setContext(this.getContext()),i=this._active;let s,o=[];if(!i.length)this.opacity!==0&&(s={opacity:0});else{const a=oa[r.position].call(this,i,this._eventPosition);o=this._createItems(r),this.title=this.getTitle(o,r),this.beforeBody=this.getBeforeBody(o,r),this.body=this.getBody(o,r),this.afterBody=this.getAfterBody(o,r),this.footer=this.getFooter(o,r);const l=this._size=o0(this,r),u=Object.assign({},a,l),h=a0(this.chart,r,u),f=l0(r,u,h,this.chart);this.xAlign=h.xAlign,this.yAlign=h.yAlign,s={opacity:1,x:f.x,y:f.y,width:l.width,height:l.height,caretX:a.x,caretY:a.y}}this._tooltipItems=o,this.$context=void 0,s&&this._resolveAnimations().update(this,s),e&&r.external&&r.external.call(this,{chart:this.chart,tooltip:this,replay:n})}drawCaret(e,n,r,i){const s=this.getCaretPosition(e,r,i);n.lineTo(s.x1,s.y1),n.lineTo(s.x2,s.y2),n.lineTo(s.x3,s.y3)}getCaretPosition(e,n,r){const{xAlign:i,yAlign:s}=this,{caretSize:o,cornerRadius:a}=r,{topLeft:l,topRight:u,bottomLeft:h,bottomRight:f}=Os(a),{x:d,y:m}=e,{width:_,height:y}=n;let E,w,v,S,C,O;return s==="center"?(C=m+y/2,i==="left"?(E=d,w=E-o,S=C+o,O=C-o):(E=d+_,w=E+o,S=C-o,O=C+o),v=E):(i==="left"?w=d+Math.max(l,h)+o:i==="right"?w=d+_-Math.max(u,f)-o:w=this.caretX,s==="top"?(S=m,C=S-o,E=w-o,v=w+o):(S=m+y,C=S+o,E=w+o,v=w-o),O=S),{x1:E,x2:w,x3:v,y1:S,y2:C,y3:O}}drawTitle(e,n,r){const i=this.title,s=i.length;let o,a,l;if(s){const u=Ds(r.rtl,this.x,this.width);for(e.x=Eu(this,r.titleAlign,r),n.textAlign=u.textAlign(r.titleAlign),n.textBaseline="middle",o=xt(r.titleFont),a=r.titleSpacing,n.fillStyle=r.titleColor,n.font=o.string,l=0;l<s;++l)n.fillText(i[l],u.x(e.x),e.y+o.lineHeight/2),e.y+=o.lineHeight+a,l+1===s&&(e.y+=r.titleMarginBottom-a)}}_drawColorBox(e,n,r,i,s){const o=this.labelColors[r],a=this.labelPointStyles[r],{boxHeight:l,boxWidth:u}=s,h=xt(s.bodyFont),f=Eu(this,"left",s),d=i.x(f),m=l<h.lineHeight?(h.lineHeight-l)/2:0,_=n.y+m;if(s.usePointStyle){const y={radius:Math.min(u,l)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},E=i.leftForLtr(d,u)+u/2,w=_+l/2;e.strokeStyle=s.multiKeyBackground,e.fillStyle=s.multiKeyBackground,Up(e,y,E,w),e.strokeStyle=o.borderColor,e.fillStyle=o.backgroundColor,Up(e,y,E,w)}else{e.lineWidth=Re(o.borderWidth)?Math.max(...Object.values(o.borderWidth)):o.borderWidth||1,e.strokeStyle=o.borderColor,e.setLineDash(o.borderDash||[]),e.lineDashOffset=o.borderDashOffset||0;const y=i.leftForLtr(d,u),E=i.leftForLtr(i.xPlus(d,1),u-2),w=Os(o.borderRadius);Object.values(w).some(v=>v!==0)?(e.beginPath(),e.fillStyle=s.multiKeyBackground,Fc(e,{x:y,y:_,w:u,h:l,radius:w}),e.fill(),e.stroke(),e.fillStyle=o.backgroundColor,e.beginPath(),Fc(e,{x:E,y:_+1,w:u-2,h:l-2,radius:w}),e.fill()):(e.fillStyle=s.multiKeyBackground,e.fillRect(y,_,u,l),e.strokeRect(y,_,u,l),e.fillStyle=o.backgroundColor,e.fillRect(E,_+1,u-2,l-2))}e.fillStyle=this.labelTextColors[r]}drawBody(e,n,r){const{body:i}=this,{bodySpacing:s,bodyAlign:o,displayColors:a,boxHeight:l,boxWidth:u,boxPadding:h}=r,f=xt(r.bodyFont);let d=f.lineHeight,m=0;const _=Ds(r.rtl,this.x,this.width),y=function(T){n.fillText(T,_.x(e.x+m),e.y+d/2),e.y+=d+s},E=_.textAlign(o);let w,v,S,C,O,D,I;for(n.textAlign=o,n.textBaseline="middle",n.font=f.string,e.x=Eu(this,E,r),n.fillStyle=r.bodyColor,Me(this.beforeBody,y),m=a&&E!=="right"?o==="center"?u/2+h:u+2+h:0,C=0,D=i.length;C<D;++C){for(w=i[C],v=this.labelTextColors[C],n.fillStyle=v,Me(w.before,y),S=w.lines,a&&S.length&&(this._drawColorBox(n,e,C,_,r),d=Math.max(f.lineHeight,l)),O=0,I=S.length;O<I;++O)y(S[O]),d=f.lineHeight;Me(w.after,y)}m=0,d=f.lineHeight,Me(this.afterBody,y),e.y-=s}drawFooter(e,n,r){const i=this.footer,s=i.length;let o,a;if(s){const l=Ds(r.rtl,this.x,this.width);for(e.x=Eu(this,r.footerAlign,r),e.y+=r.footerMarginTop,n.textAlign=l.textAlign(r.footerAlign),n.textBaseline="middle",o=xt(r.footerFont),n.fillStyle=r.footerColor,n.font=o.string,a=0;a<s;++a)n.fillText(i[a],l.x(e.x),e.y+o.lineHeight/2),e.y+=o.lineHeight+r.footerSpacing}}drawBackground(e,n,r,i){const{xAlign:s,yAlign:o}=this,{x:a,y:l}=e,{width:u,height:h}=r,{topLeft:f,topRight:d,bottomLeft:m,bottomRight:_}=Os(i.cornerRadius);n.fillStyle=i.backgroundColor,n.strokeStyle=i.borderColor,n.lineWidth=i.borderWidth,n.beginPath(),n.moveTo(a+f,l),o==="top"&&this.drawCaret(e,n,r,i),n.lineTo(a+u-d,l),n.quadraticCurveTo(a+u,l,a+u,l+d),o==="center"&&s==="right"&&this.drawCaret(e,n,r,i),n.lineTo(a+u,l+h-_),n.quadraticCurveTo(a+u,l+h,a+u-_,l+h),o==="bottom"&&this.drawCaret(e,n,r,i),n.lineTo(a+m,l+h),n.quadraticCurveTo(a,l+h,a,l+h-m),o==="center"&&s==="left"&&this.drawCaret(e,n,r,i),n.lineTo(a,l+f),n.quadraticCurveTo(a,l,a+f,l),n.closePath(),n.fill(),i.borderWidth>0&&n.stroke()}_updateAnimationTarget(e){const n=this.chart,r=this.$animations,i=r&&r.x,s=r&&r.y;if(i||s){const o=oa[e.position].call(this,this._active,this._eventPosition);if(!o)return;const a=this._size=o0(this,e),l=Object.assign({},o,this._size),u=a0(n,e,l),h=l0(e,l,u,n);(i._to!==h.x||s._to!==h.y)&&(this.xAlign=u.xAlign,this.yAlign=u.yAlign,this.width=a.width,this.height=a.height,this.caretX=o.x,this.caretY=o.y,this._resolveAnimations().update(this,h))}}_willRender(){return!!this.opacity}draw(e){const n=this.options.setContext(this.getContext());let r=this.opacity;if(!r)return;this._updateAnimationTarget(n);const i={width:this.width,height:this.height},s={x:this.x,y:this.y};r=Math.abs(r)<.001?0:r;const o=Wt(n.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;n.enabled&&a&&(e.save(),e.globalAlpha=r,this.drawBackground(s,e,i,n),yS(e,n.textDirection),s.y+=o.top,this.drawTitle(s,e,n),this.drawBody(s,e,n),this.drawFooter(s,e,n),vS(e,n.textDirection),e.restore())}getActiveElements(){return this._active||[]}setActiveElements(e,n){const r=this._active,i=e.map(({datasetIndex:a,index:l})=>{const u=this.chart.getDatasetMeta(a);if(!u)throw new Error("Cannot find a dataset at index "+a);return{datasetIndex:a,element:u.data[l],index:l}}),s=!Lc(r,i),o=this._positionChanged(i,n);(s||o)&&(this._active=i,this._eventPosition=n,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(e,n,r=!0){if(n&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const i=this.options,s=this._active||[],o=this._getActiveElements(e,s,n,r),a=this._positionChanged(o,e),l=n||!Lc(o,s)||a;return l&&(this._active=o,(i.enabled||i.external)&&(this._eventPosition={x:e.x,y:e.y},this.update(!0,n))),l}_getActiveElements(e,n,r,i){const s=this.options;if(e.type==="mouseout")return[];if(!i)return n.filter(a=>this.chart.data.datasets[a.datasetIndex]&&this.chart.getDatasetMeta(a.datasetIndex).controller.getParsed(a.index)!==void 0);const o=this.chart.getElementsAtEventForMode(e,s.mode,s,r);return s.reverse&&o.reverse(),o}_positionChanged(e,n){const{caretX:r,caretY:i,options:s}=this,o=oa[s.position].call(this,e,n);return o!==!1&&(r!==o.x||i!==o.y)}}pe(Gp,"positioners",oa);var OO={id:"tooltip",_element:Gp,positioners:oa,afterInit(t,e,n){n&&(t.tooltip=new Gp({chart:t,options:n}))},beforeUpdate(t,e,n){t.tooltip&&t.tooltip.initialize(n)},reset(t,e,n){t.tooltip&&t.tooltip.initialize(n)},afterDraw(t){const e=t.tooltip;if(e&&e._willRender()){const n={tooltip:e};if(t.notifyPlugins("beforeTooltipDraw",{...n,cancelable:!0})===!1)return;e.draw(t.ctx),t.notifyPlugins("afterTooltipDraw",n)}},afterEvent(t,e){if(t.tooltip){const n=e.replay;t.tooltip.handleEvent(e.event,n,e.inChartArea)&&(e.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(t,e)=>e.bodyFont.size,boxWidth:(t,e)=>e.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:zS},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:t=>t!=="filter"&&t!=="itemSort"&&t!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]};function DO(t,e){const n=[],{bounds:i,step:s,min:o,max:a,precision:l,count:u,maxTicks:h,maxDigits:f,includeBounds:d}=t,m=s||1,_=h-1,{min:y,max:E}=e,w=!We(o),v=!We(a),S=!We(u),C=(E-y)/(f+1);let O=f2((E-y)/_/m)*m,D,I,T,b;if(O<1e-14&&!w&&!v)return[{value:y},{value:E}];b=Math.ceil(E/O)-Math.floor(y/O),b>_&&(O=f2(b*O/_/m)*m),We(l)||(D=Math.pow(10,l),O=Math.ceil(O*D)/D),i==="ticks"?(I=Math.floor(y/O)*O,T=Math.ceil(E/O)*O):(I=y,T=E),w&&v&&s&&ck((a-o)/s,O/1e3)?(b=Math.round(Math.min((a-o)/O,h)),O=(a-o)/b,I=o,T=a):S?(I=w?o:I,T=v?a:T,b=u-1,O=(T-I)/b):(b=(T-I)/O,Ea(b,Math.round(b),O/1e3)?b=Math.round(b):b=Math.ceil(b));const x=Math.max(d2(O),d2(I));D=Math.pow(10,We(l)?x:l),I=Math.round(I*D)/D,T=Math.round(T*D)/D;let P=0;for(w&&(d&&I!==o?(n.push({value:o}),I<o&&P++,Ea(Math.round((I+P*O)*D)/D,o,h0(o,C,t))&&P++):I<o&&P++);P<b;++P){const k=Math.round((I+P*O)*D)/D;if(v&&k>a)break;n.push({value:k})}return v&&d&&T!==a?n.length&&Ea(n[n.length-1].value,a,h0(a,C,t))?n[n.length-1].value=a:n.push({value:a}):(!v||T===a)&&n.push({value:T}),n}function h0(t,e,{horizontal:n,minRotation:r}){const i=Fr(r),s=(n?Math.sin(i):Math.cos(i))||.001,o=.75*e*(""+t).length;return Math.min(e/s,o)}class Bc extends vo{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(e,n){return We(e)||(typeof e=="number"||e instanceof Number)&&!isFinite(+e)?null:+e}handleTickRangeOptions(){const{beginAtZero:e}=this.options,{minDefined:n,maxDefined:r}=this.getUserBounds();let{min:i,max:s}=this;const o=l=>i=n?i:l,a=l=>s=r?s:l;if(e){const l=Ks(i),u=Ks(s);l<0&&u<0?a(0):l>0&&u>0&&o(0)}if(i===s){let l=s===0?1:Math.abs(s*.05);a(s+l),e||o(i-l)}this.min=i,this.max=s}getTickLimit(){const e=this.options.ticks;let{maxTicksLimit:n,stepSize:r}=e,i;return r?(i=Math.ceil(this.max/r)-Math.floor(this.min/r)+1,i>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${r} would result generating up to ${i} ticks. Limiting to 1000.`),i=1e3)):(i=this.computeTickLimit(),n=n||11),n&&(i=Math.min(n,i)),i}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const e=this.options,n=e.ticks;let r=this.getTickLimit();r=Math.max(2,r);const i={maxTicks:r,bounds:e.bounds,min:e.min,max:e.max,precision:n.precision,step:n.stepSize,count:n.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:n.minRotation||0,includeBounds:n.includeBounds!==!1},s=this._range||this,o=DO(i,s);return e.bounds==="ticks"&&iS(o,this,"value"),e.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){const e=this.ticks;let n=this.min,r=this.max;if(super.configure(),this.options.offset&&e.length){const i=(r-n)/Math.max(e.length-1,1)/2;n-=i,r+=i}this._startValue=n,this._endValue=r,this._valueRange=r-n}getLabelForValue(e){return Bg(e,this.chart.options.locale,this.options.ticks.format)}}class f0 extends Bc{determineDataLimits(){const{min:e,max:n}=this.getMinMax(!0);this.min=st(e)?e:0,this.max=st(n)?n:1,this.handleTickRangeOptions()}computeTickLimit(){const e=this.isHorizontal(),n=e?this.width:this.height,r=Fr(this.options.ticks.minRotation),i=(e?Math.sin(r):Math.cos(r))||.001,s=this._resolveTickFontOptions(0);return Math.ceil(n/Math.min(40,s.lineHeight/i))}getPixelForValue(e){return e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getValueForPixel(e){return this._startValue+this.getDecimalForPixel(e)*this._valueRange}}pe(f0,"id","linear"),pe(f0,"defaults",{ticks:{callback:zh.formatters.numeric}});const Ja=t=>Math.floor(Vr(t)),bi=(t,e)=>Math.pow(10,Ja(t)+e);function d0(t){return t/Math.pow(10,Ja(t))===1}function p0(t,e,n){const r=Math.pow(10,n),i=Math.floor(t/r);return Math.ceil(e/r)-i}function MO(t,e){const n=e-t;let r=Ja(n);for(;p0(t,e,r)>10;)r++;for(;p0(t,e,r)<10;)r--;return Math.min(r,Ja(t))}function NO(t,{min:e,max:n}){e=an(t.min,e);const r=[],i=Ja(e);let s=MO(e,n),o=s<0?Math.pow(10,Math.abs(s)):1;const a=Math.pow(10,s),l=i>s?Math.pow(10,i):0,u=Math.round((e-l)*o)/o,h=Math.floor((e-l)/a/10)*a*10;let f=Math.floor((u-h)/Math.pow(10,s)),d=an(t.min,Math.round((l+h+f*Math.pow(10,s))*o)/o);for(;d<n;)r.push({value:d,major:d0(d),significand:f}),f>=10?f=f<15?15:20:f++,f>=20&&(s++,f=2,o=s>=0?1:o),d=Math.round((l+h+f*Math.pow(10,s))*o)/o;const m=an(t.max,d);return r.push({value:m,major:d0(m),significand:f}),r}class m0 extends vo{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(e,n){const r=Bc.prototype.parse.apply(this,[e,n]);if(r===0){this._zero=!0;return}return st(r)&&r>0?r:null}determineDataLimits(){const{min:e,max:n}=this.getMinMax(!0);this.min=st(e)?Math.max(0,e):null,this.max=st(n)?Math.max(0,n):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!st(this._userMin)&&(this.min=e===bi(this.min,0)?bi(this.min,-1):bi(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:e,maxDefined:n}=this.getUserBounds();let r=this.min,i=this.max;const s=a=>r=e?r:a,o=a=>i=n?i:a;r===i&&(r<=0?(s(1),o(10)):(s(bi(r,-1)),o(bi(i,1)))),r<=0&&s(bi(i,-1)),i<=0&&o(bi(r,1)),this.min=r,this.max=i}buildTicks(){const e=this.options,n={min:this._userMin,max:this._userMax},r=NO(n,this);return e.bounds==="ticks"&&iS(r,this,"value"),e.reverse?(r.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),r}getLabelForValue(e){return e===void 0?"0":Bg(e,this.chart.options.locale,this.options.ticks.format)}configure(){const e=this.min;super.configure(),this._startValue=Vr(e),this._valueRange=Vr(this.max)-Vr(e)}getPixelForValue(e){return(e===void 0||e===0)&&(e=this.min),e===null||isNaN(e)?NaN:this.getPixelForDecimal(e===this.min?0:(Vr(e)-this._startValue)/this._valueRange)}getValueForPixel(e){const n=this.getDecimalForPixel(e);return Math.pow(10,this._startValue+n*this._valueRange)}}pe(m0,"id","logarithmic"),pe(m0,"defaults",{ticks:{callback:zh.formatters.logarithmic,major:{enabled:!0}}});function Qp(t){const e=t.ticks;if(e.display&&t.display){const n=Wt(e.backdropPadding);return be(e.font&&e.font.size,ot.font.size)+n.height}return 0}function VO(t,e,n){return n=it(n)?n:[n],{w:Ck(t,e.string,n),h:n.length*e.lineHeight}}function g0(t,e,n,r,i){return t===r||t===i?{start:e-n/2,end:e+n/2}:t<r||t>i?{start:e-n,end:e}:{start:e,end:e+n}}function FO(t){const e={l:t.left+t._padding.left,r:t.right-t._padding.right,t:t.top+t._padding.top,b:t.bottom-t._padding.bottom},n=Object.assign({},e),r=[],i=[],s=t._pointLabels.length,o=t.options.pointLabels,a=o.centerPointLabels?wt/s:0;for(let l=0;l<s;l++){const u=o.setContext(t.getPointLabelContext(l));i[l]=u.padding;const h=t.getPointPosition(l,t.drawingArea+i[l],a),f=xt(u.font),d=VO(t.ctx,f,t._pointLabels[l]);r[l]=d;const m=un(t.getIndexAngle(l)+a),_=Math.round(Fg(m)),y=g0(_,h.x,d.w,0,180),E=g0(_,h.y,d.h,90,270);zO(n,e,m,y,E)}t.setCenterPoint(e.l-n.l,n.r-e.r,e.t-n.t,n.b-e.b),t._pointLabelItems=$O(t,r,i)}function zO(t,e,n,r,i){const s=Math.abs(Math.sin(n)),o=Math.abs(Math.cos(n));let a=0,l=0;r.start<e.l?(a=(e.l-r.start)/s,t.l=Math.min(t.l,e.l-a)):r.end>e.r&&(a=(r.end-e.r)/s,t.r=Math.max(t.r,e.r+a)),i.start<e.t?(l=(e.t-i.start)/o,t.t=Math.min(t.t,e.t-l)):i.end>e.b&&(l=(i.end-e.b)/o,t.b=Math.max(t.b,e.b+l))}function jO(t,e,n){const r=t.drawingArea,{extra:i,additionalAngle:s,padding:o,size:a}=n,l=t.getPointPosition(e,r+i+o,s),u=Math.round(Fg(un(l.angle+hn))),h=WO(l.y,a.h,u),f=UO(u),d=HO(l.x,a.w,f);return{visible:!0,x:l.x,y:h,textAlign:f,left:d,top:h,right:d+a.w,bottom:h+a.h}}function BO(t,e){if(!e)return!0;const{left:n,top:r,right:i,bottom:s}=t;return!(cr({x:n,y:r},e)||cr({x:n,y:s},e)||cr({x:i,y:r},e)||cr({x:i,y:s},e))}function $O(t,e,n){const r=[],i=t._pointLabels.length,s=t.options,{centerPointLabels:o,display:a}=s.pointLabels,l={extra:Qp(s)/2,additionalAngle:o?wt/i:0};let u;for(let h=0;h<i;h++){l.padding=n[h],l.size=e[h];const f=jO(t,h,l);r.push(f),a==="auto"&&(f.visible=BO(f,u),f.visible&&(u=f))}return r}function UO(t){return t===0||t===180?"center":t<180?"left":"right"}function HO(t,e,n){return n==="right"?t-=e:n==="center"&&(t-=e/2),t}function WO(t,e,n){return n===90||n===270?t-=e/2:(n>270||n<90)&&(t-=e),t}function qO(t,e,n){const{left:r,top:i,right:s,bottom:o}=n,{backdropColor:a}=e;if(!We(a)){const l=Os(e.borderRadius),u=Wt(e.backdropPadding);t.fillStyle=a;const h=r-u.left,f=i-u.top,d=s-r+u.width,m=o-i+u.height;Object.values(l).some(_=>_!==0)?(t.beginPath(),Fc(t,{x:h,y:f,w:d,h:m,radius:l}),t.fill()):t.fillRect(h,f,d,m)}}function KO(t,e){const{ctx:n,options:{pointLabels:r}}=t;for(let i=e-1;i>=0;i--){const s=t._pointLabelItems[i];if(!s.visible)continue;const o=r.setContext(t.getPointLabelContext(i));qO(n,o,s);const a=xt(o.font),{x:l,y:u,textAlign:h}=s;Gs(n,t._pointLabels[i],l,u+a.lineHeight/2,a,{color:o.color,textAlign:h,textBaseline:"middle"})}}function jS(t,e,n,r){const{ctx:i}=t;if(n)i.arc(t.xCenter,t.yCenter,e,0,dn);else{let s=t.getPointPosition(0,e);i.moveTo(s.x,s.y);for(let o=1;o<r;o++)s=t.getPointPosition(o,e),i.lineTo(s.x,s.y)}}function GO(t,e,n,r,i){const s=t.ctx,o=e.circular,{color:a,lineWidth:l}=e;!o&&!r||!a||!l||n<0||(s.save(),s.strokeStyle=a,s.lineWidth=l,s.setLineDash(i.dash||[]),s.lineDashOffset=i.dashOffset,s.beginPath(),jS(t,n,o,r),s.closePath(),s.stroke(),s.restore())}function QO(t,e,n){return mi(t,{label:n,index:e,type:"pointLabel"})}class aa extends Bc{constructor(e){super(e),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const e=this._padding=Wt(Qp(this.options)/2),n=this.width=this.maxWidth-e.width,r=this.height=this.maxHeight-e.height;this.xCenter=Math.floor(this.left+n/2+e.left),this.yCenter=Math.floor(this.top+r/2+e.top),this.drawingArea=Math.floor(Math.min(n,r)/2)}determineDataLimits(){const{min:e,max:n}=this.getMinMax(!1);this.min=st(e)&&!isNaN(e)?e:0,this.max=st(n)&&!isNaN(n)?n:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/Qp(this.options))}generateTickLabels(e){Bc.prototype.generateTickLabels.call(this,e),this._pointLabels=this.getLabels().map((n,r)=>{const i=ze(this.options.pointLabels.callback,[n,r],this);return i||i===0?i:""}).filter((n,r)=>this.chart.getDataVisibility(r))}fit(){const e=this.options;e.display&&e.pointLabels.display?FO(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(e,n,r,i){this.xCenter+=Math.floor((e-n)/2),this.yCenter+=Math.floor((r-i)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(e,n,r,i))}getIndexAngle(e){const n=dn/(this._pointLabels.length||1),r=this.options.startAngle||0;return un(e*n+Fr(r))}getDistanceFromCenterForValue(e){if(We(e))return NaN;const n=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-e)*n:(e-this.min)*n}getValueForDistanceFromCenter(e){if(We(e))return NaN;const n=e/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-n:this.min+n}getPointLabelContext(e){const n=this._pointLabels||[];if(e>=0&&e<n.length){const r=n[e];return QO(this.getContext(),e,r)}}getPointPosition(e,n,r=0){const i=this.getIndexAngle(e)-hn+r;return{x:Math.cos(i)*n+this.xCenter,y:Math.sin(i)*n+this.yCenter,angle:i}}getPointPositionForValue(e,n){return this.getPointPosition(e,this.getDistanceFromCenterForValue(n))}getBasePosition(e){return this.getPointPositionForValue(e||0,this.getBaseValue())}getPointLabelPosition(e){const{left:n,top:r,right:i,bottom:s}=this._pointLabelItems[e];return{left:n,top:r,right:i,bottom:s}}drawBackground(){const{backgroundColor:e,grid:{circular:n}}=this.options;if(e){const r=this.ctx;r.save(),r.beginPath(),jS(this,this.getDistanceFromCenterForValue(this._endValue),n,this._pointLabels.length),r.closePath(),r.fillStyle=e,r.fill(),r.restore()}}drawGrid(){const e=this.ctx,n=this.options,{angleLines:r,grid:i,border:s}=n,o=this._pointLabels.length;let a,l,u;if(n.pointLabels.display&&KO(this,o),i.display&&this.ticks.forEach((h,f)=>{if(f!==0||f===0&&this.min<0){l=this.getDistanceFromCenterForValue(h.value);const d=this.getContext(f),m=i.setContext(d),_=s.setContext(d);GO(this,m,l,o,_)}}),r.display){for(e.save(),a=o-1;a>=0;a--){const h=r.setContext(this.getPointLabelContext(a)),{color:f,lineWidth:d}=h;!d||!f||(e.lineWidth=d,e.strokeStyle=f,e.setLineDash(h.borderDash),e.lineDashOffset=h.borderDashOffset,l=this.getDistanceFromCenterForValue(n.reverse?this.min:this.max),u=this.getPointPosition(a,l),e.beginPath(),e.moveTo(this.xCenter,this.yCenter),e.lineTo(u.x,u.y),e.stroke())}e.restore()}}drawBorder(){}drawLabels(){const e=this.ctx,n=this.options,r=n.ticks;if(!r.display)return;const i=this.getIndexAngle(0);let s,o;e.save(),e.translate(this.xCenter,this.yCenter),e.rotate(i),e.textAlign="center",e.textBaseline="middle",this.ticks.forEach((a,l)=>{if(l===0&&this.min>=0&&!n.reverse)return;const u=r.setContext(this.getContext(l)),h=xt(u.font);if(s=this.getDistanceFromCenterForValue(this.ticks[l].value),u.showLabelBackdrop){e.font=h.string,o=e.measureText(a.label).width,e.fillStyle=u.backdropColor;const f=Wt(u.backdropPadding);e.fillRect(-o/2-f.left,-s-h.size/2-f.top,o+f.width,h.size+f.height)}Gs(e,a.label,0,-s,h,{color:u.color,strokeColor:u.textStrokeColor,strokeWidth:u.textStrokeWidth})}),e.restore()}drawTitle(){}}pe(aa,"id","radialLinear"),pe(aa,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:zh.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(e){return e},padding:5,centerPointLabels:!1}}),pe(aa,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),pe(aa,"descriptors",{angleLines:{_fallback:"grid"}});const Hh={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},Jt=Object.keys(Hh);function _0(t,e){return t-e}function y0(t,e){if(We(e))return null;const n=t._adapter,{parser:r,round:i,isoWeekday:s}=t._parseOpts;let o=e;return typeof r=="function"&&(o=r(o)),st(o)||(o=typeof r=="string"?n.parse(o,r):n.parse(o)),o===null?null:(i&&(o=i==="week"&&(Nc(s)||s===!0)?n.startOf(o,"isoWeek",s):n.startOf(o,i)),+o)}function v0(t,e,n,r){const i=Jt.length;for(let s=Jt.indexOf(t);s<i-1;++s){const o=Hh[Jt[s]],a=o.steps?o.steps:Number.MAX_SAFE_INTEGER;if(o.common&&Math.ceil((n-e)/(a*o.size))<=r)return Jt[s]}return Jt[i-1]}function YO(t,e,n,r,i){for(let s=Jt.length-1;s>=Jt.indexOf(n);s--){const o=Jt[s];if(Hh[o].common&&t._adapter.diff(i,r,o)>=e-1)return o}return Jt[n?Jt.indexOf(n):0]}function XO(t){for(let e=Jt.indexOf(t)+1,n=Jt.length;e<n;++e)if(Hh[Jt[e]].common)return Jt[e]}function w0(t,e,n){if(!n)t[e]=!0;else if(n.length){const{lo:r,hi:i}=zg(n,e),s=n[r]>=e?n[r]:n[i];t[s]=!0}}function JO(t,e,n,r){const i=t._adapter,s=+i.startOf(e[0].value,r),o=e[e.length-1].value;let a,l;for(a=s;a<=o;a=+i.add(a,1,r))l=n[a],l>=0&&(e[l].major=!0);return e}function E0(t,e,n){const r=[],i={},s=e.length;let o,a;for(o=0;o<s;++o)a=e[o],i[a]=o,r.push({value:a,major:!1});return s===0||!n?r:JO(t,r,i,n)}class $c extends vo{constructor(e){super(e),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(e,n={}){const r=e.time||(e.time={}),i=this._adapter=new M9._date(e.adapters.date);i.init(n),wa(r.displayFormats,i.formats()),this._parseOpts={parser:r.parser,round:r.round,isoWeekday:r.isoWeekday},super.init(e),this._normalized=n.normalized}parse(e,n){return e===void 0?null:y0(this,e)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const e=this.options,n=this._adapter,r=e.time.unit||"day";let{min:i,max:s,minDefined:o,maxDefined:a}=this.getUserBounds();function l(u){!o&&!isNaN(u.min)&&(i=Math.min(i,u.min)),!a&&!isNaN(u.max)&&(s=Math.max(s,u.max))}(!o||!a)&&(l(this._getLabelBounds()),(e.bounds!=="ticks"||e.ticks.source!=="labels")&&l(this.getMinMax(!1))),i=st(i)&&!isNaN(i)?i:+n.startOf(Date.now(),r),s=st(s)&&!isNaN(s)?s:+n.endOf(Date.now(),r)+1,this.min=Math.min(i,s-1),this.max=Math.max(i+1,s)}_getLabelBounds(){const e=this.getLabelTimestamps();let n=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY;return e.length&&(n=e[0],r=e[e.length-1]),{min:n,max:r}}buildTicks(){const e=this.options,n=e.time,r=e.ticks,i=r.source==="labels"?this.getLabelTimestamps():this._generate();e.bounds==="ticks"&&i.length&&(this.min=this._userMin||i[0],this.max=this._userMax||i[i.length-1]);const s=this.min,o=this.max,a=mk(i,s,o);return this._unit=n.unit||(r.autoSkip?v0(n.minUnit,this.min,this.max,this._getLabelCapacity(s)):YO(this,a.length,n.minUnit,this.min,this.max)),this._majorUnit=!r.major.enabled||this._unit==="year"?void 0:XO(this._unit),this.initOffsets(i),e.reverse&&a.reverse(),E0(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(e=>+e.value))}initOffsets(e=[]){let n=0,r=0,i,s;this.options.offset&&e.length&&(i=this.getDecimalForValue(e[0]),e.length===1?n=1-i:n=(this.getDecimalForValue(e[1])-i)/2,s=this.getDecimalForValue(e[e.length-1]),e.length===1?r=s:r=(s-this.getDecimalForValue(e[e.length-2]))/2);const o=e.length<3?.5:.25;n=ur(n,0,o),r=ur(r,0,o),this._offsets={start:n,end:r,factor:1/(n+1+r)}}_generate(){const e=this._adapter,n=this.min,r=this.max,i=this.options,s=i.time,o=s.unit||v0(s.minUnit,n,r,this._getLabelCapacity(n)),a=be(i.ticks.stepSize,1),l=o==="week"?s.isoWeekday:!1,u=Nc(l)||l===!0,h={};let f=n,d,m;if(u&&(f=+e.startOf(f,"isoWeek",l)),f=+e.startOf(f,u?"day":o),e.diff(r,n,o)>1e5*a)throw new Error(n+" and "+r+" are too far apart with stepSize of "+a+" "+o);const _=i.ticks.source==="data"&&this.getDataTimestamps();for(d=f,m=0;d<r;d=+e.add(d,a,o),m++)w0(h,d,_);return(d===r||i.bounds==="ticks"||m===1)&&w0(h,d,_),Object.keys(h).sort(_0).map(y=>+y)}getLabelForValue(e){const n=this._adapter,r=this.options.time;return r.tooltipFormat?n.format(e,r.tooltipFormat):n.format(e,r.displayFormats.datetime)}format(e,n){const i=this.options.time.displayFormats,s=this._unit,o=n||i[s];return this._adapter.format(e,o)}_tickFormatFunction(e,n,r,i){const s=this.options,o=s.ticks.callback;if(o)return ze(o,[e,n,r],this);const a=s.time.displayFormats,l=this._unit,u=this._majorUnit,h=l&&a[l],f=u&&a[u],d=r[n],m=u&&f&&d&&d.major;return this._adapter.format(e,i||(m?f:h))}generateTickLabels(e){let n,r,i;for(n=0,r=e.length;n<r;++n)i=e[n],i.label=this._tickFormatFunction(i.value,n,e)}getDecimalForValue(e){return e===null?NaN:(e-this.min)/(this.max-this.min)}getPixelForValue(e){const n=this._offsets,r=this.getDecimalForValue(e);return this.getPixelForDecimal((n.start+r)*n.factor)}getValueForPixel(e){const n=this._offsets,r=this.getDecimalForPixel(e)/n.factor-n.end;return this.min+r*(this.max-this.min)}_getLabelSize(e){const n=this.options.ticks,r=this.ctx.measureText(e).width,i=Fr(this.isHorizontal()?n.maxRotation:n.minRotation),s=Math.cos(i),o=Math.sin(i),a=this._resolveTickFontOptions(0).size;return{w:r*s+a*o,h:r*o+a*s}}_getLabelCapacity(e){const n=this.options.time,r=n.displayFormats,i=r[n.unit]||r.millisecond,s=this._tickFormatFunction(e,0,E0(this,[e],this._majorUnit),i),o=this._getLabelSize(s),a=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return a>0?a:1}getDataTimestamps(){let e=this._cache.data||[],n,r;if(e.length)return e;const i=this.getMatchingVisibleMetas();if(this._normalized&&i.length)return this._cache.data=i[0].controller.getAllParsedValues(this);for(n=0,r=i.length;n<r;++n)e=e.concat(i[n].controller.getAllParsedValues(this));return this._cache.data=this.normalize(e)}getLabelTimestamps(){const e=this._cache.labels||[];let n,r;if(e.length)return e;const i=this.getLabels();for(n=0,r=i.length;n<r;++n)e.push(y0(this,i[n]));return this._cache.labels=this._normalized?e:this.normalize(e)}normalize(e){return _k(e.sort(_0))}}pe($c,"id","time"),pe($c,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function Su(t,e,n){let r=0,i=t.length-1,s,o,a,l;n?(e>=t[r].pos&&e<=t[i].pos&&({lo:r,hi:i}=Bp(t,"pos",e)),{pos:s,time:a}=t[r],{pos:o,time:l}=t[i]):(e>=t[r].time&&e<=t[i].time&&({lo:r,hi:i}=Bp(t,"time",e)),{time:s,pos:a}=t[r],{time:o,pos:l}=t[i]);const u=o-s;return u?a+(l-a)*(e-s)/u:a}class S0 extends $c{constructor(e){super(e),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const e=this._getTimestampsForTable(),n=this._table=this.buildLookupTable(e);this._minPos=Su(n,this.min),this._tableRange=Su(n,this.max)-this._minPos,super.initOffsets(e)}buildLookupTable(e){const{min:n,max:r}=this,i=[],s=[];let o,a,l,u,h;for(o=0,a=e.length;o<a;++o)u=e[o],u>=n&&u<=r&&i.push(u);if(i.length<2)return[{time:n,pos:0},{time:r,pos:1}];for(o=0,a=i.length;o<a;++o)h=i[o+1],l=i[o-1],u=i[o],Math.round((h+l)/2)!==u&&s.push({time:u,pos:o/(a-1)});return s}_generate(){const e=this.min,n=this.max;let r=super.getDataTimestamps();return(!r.includes(e)||!r.length)&&r.splice(0,0,e),(!r.includes(n)||r.length===1)&&r.push(n),r.sort((i,s)=>i-s)}_getTimestampsForTable(){let e=this._cache.all||[];if(e.length)return e;const n=this.getDataTimestamps(),r=this.getLabelTimestamps();return n.length&&r.length?e=this.normalize(n.concat(r)):e=n.length?n:r,e=this._cache.all=e,e}getDecimalForValue(e){return(Su(this._table,e)-this._minPos)/this._tableRange}getValueForPixel(e){const n=this._offsets,r=this.getDecimalForPixel(e)/n.factor-n.end;return Su(this._table,r*this._tableRange+this._minPos,!0)}}pe(S0,"id","timeseries"),pe(S0,"defaults",$c.defaults);const BS="label";function T0(t,e){typeof t=="function"?t(e):t&&(t.current=e)}function ZO(t,e){const n=t.options;n&&e&&Object.assign(n,e)}function $S(t,e){t.labels=e}function US(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:BS;const r=[];t.datasets=e.map(i=>{const s=t.datasets.find(o=>o[n]===i[n]);return!s||!i.data||r.includes(s)?{...i}:(r.push(s),Object.assign(s,i),s)})}function eD(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:BS;const n={labels:[],datasets:[]};return $S(n,t.labels),US(n,t.datasets,e),n}function tD(t,e){const{height:n=150,width:r=300,redraw:i=!1,datasetIdKey:s,type:o,data:a,options:l,plugins:u=[],fallbackContent:h,updateMode:f,...d}=t,m=F.useRef(null),_=F.useRef(null),y=()=>{m.current&&(_.current=new Uh(m.current,{type:o,data:eD(a,s),options:l&&{...l},plugins:u}),T0(e,_.current))},E=()=>{T0(e,null),_.current&&(_.current.destroy(),_.current=null)};return F.useEffect(()=>{!i&&_.current&&l&&ZO(_.current,l)},[i,l]),F.useEffect(()=>{!i&&_.current&&$S(_.current.config.data,a.labels)},[i,a.labels]),F.useEffect(()=>{!i&&_.current&&a.datasets&&US(_.current.config.data,a.datasets,s)},[i,a.datasets]),F.useEffect(()=>{_.current&&(i?(E(),setTimeout(y)):_.current.update(f))},[i,l,a.labels,a.datasets,f]),F.useEffect(()=>{_.current&&(E(),setTimeout(y))},[o]),F.useEffect(()=>(y(),()=>E()),[]),Lm.createElement("canvas",{ref:m,role:"img",height:n,width:r,...d},h)}const nD=F.forwardRef(tD);function rD(t,e){return Uh.register(e),F.forwardRef((n,r)=>Lm.createElement(nD,{...n,ref:r,type:t}))}const iD=rD("radar",Gu);var HS={},WS={},Wh={},qS={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0};t.default=e})(qS);var sD="Expected a function",b0=NaN,oD="[object Symbol]",aD=/^\s+|\s+$/g,lD=/^[-+]0x[0-9a-f]+$/i,uD=/^0b[01]+$/i,cD=/^0o[0-7]+$/i,hD=parseInt,fD=typeof Ul=="object"&&Ul&&Ul.Object===Object&&Ul,dD=typeof self=="object"&&self&&self.Object===Object&&self,pD=fD||dD||Function("return this")(),mD=Object.prototype,gD=mD.toString,_D=Math.max,yD=Math.min,_d=function(){return pD.Date.now()};function vD(t,e,n){var r,i,s,o,a,l,u=0,h=!1,f=!1,d=!0;if(typeof t!="function")throw new TypeError(sD);e=x0(e)||0,Yp(n)&&(h=!!n.leading,f="maxWait"in n,s=f?_D(x0(n.maxWait)||0,e):s,d="trailing"in n?!!n.trailing:d);function m(D){var I=r,T=i;return r=i=void 0,u=D,o=t.apply(T,I),o}function _(D){return u=D,a=setTimeout(w,e),h?m(D):o}function y(D){var I=D-l,T=D-u,b=e-I;return f?yD(b,s-T):b}function E(D){var I=D-l,T=D-u;return l===void 0||I>=e||I<0||f&&T>=s}function w(){var D=_d();if(E(D))return v(D);a=setTimeout(w,y(D))}function v(D){return a=void 0,d&&r?m(D):(r=i=void 0,o)}function S(){a!==void 0&&clearTimeout(a),u=0,r=l=i=a=void 0}function C(){return a===void 0?o:v(_d())}function O(){var D=_d(),I=E(D);if(r=arguments,i=this,l=D,I){if(a===void 0)return _(l);if(f)return a=setTimeout(w,e),m(l)}return a===void 0&&(a=setTimeout(w,e)),o}return O.cancel=S,O.flush=C,O}function Yp(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function wD(t){return!!t&&typeof t=="object"}function ED(t){return typeof t=="symbol"||wD(t)&&gD.call(t)==oD}function x0(t){if(typeof t=="number")return t;if(ED(t))return b0;if(Yp(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=Yp(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(aD,"");var n=uD.test(t);return n||cD.test(t)?hD(t.slice(2),n?2:8):lD.test(t)?b0:+t}var SD=vD,KS={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var s="",o=0;o<arguments.length;o++){var a=arguments[o];a&&(s=i(s,r(a)))}return s}function r(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return n.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var o="";for(var a in s)e.call(s,a)&&s[a]&&(o=i(o,a));return o}function i(s,o){return o?s?s+" "+o:s+o:s}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(KS);var qh=KS.exports,J={},Qg={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=n(F);function n(i){return i&&i.__esModule?i:{default:i}}var r={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(s){return e.default.createElement("ul",{style:{display:"block"}},s)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(s){return e.default.createElement("button",null,s+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0,asNavFor:null,unslick:!1};t.default=r})(Qg);Object.defineProperty(J,"__esModule",{value:!0});J.checkSpecKeys=J.checkNavigable=J.changeSlide=J.canUseDOM=J.canGoNext=void 0;J.clamp=QS;J.extractObject=void 0;J.filterSettings=VD;J.validSettings=J.swipeStart=J.swipeMove=J.swipeEnd=J.slidesOnRight=J.slidesOnLeft=J.slideHandler=J.siblingDirection=J.safePreventDefault=J.lazyStartIndex=J.lazySlidesOnRight=J.lazySlidesOnLeft=J.lazyEndIndex=J.keyHandler=J.initializedState=J.getWidth=J.getTrackLeft=J.getTrackCSS=J.getTrackAnimateCSS=J.getTotalSlides=J.getSwipeDirection=J.getSlideCount=J.getRequiredLazySlides=J.getPreClones=J.getPostClones=J.getOnDemandLazySlides=J.getNavigableIndexes=J.getHeight=void 0;var TD=GS(F),bD=GS(Qg);function GS(t){return t&&t.__esModule?t:{default:t}}function Za(t){"@babel/helpers - typeof";return Za=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Za(t)}function I0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Ke(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?I0(Object(n),!0).forEach(function(r){xD(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):I0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function xD(t,e,n){return e=ID(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ID(t){var e=RD(t,"string");return Za(e)=="symbol"?e:String(e)}function RD(t,e){if(Za(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Za(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function QS(t,e,n){return Math.max(e,Math.min(t,n))}var Ms=J.safePreventDefault=function(e){var n=["onTouchStart","onTouchMove","onWheel"];n.includes(e._reactName)||e.preventDefault()},YS=J.getOnDemandLazySlides=function(e){for(var n=[],r=XS(e),i=JS(e),s=r;s<i;s++)e.lazyLoadedList.indexOf(s)<0&&n.push(s);return n};J.getRequiredLazySlides=function(e){for(var n=[],r=XS(e),i=JS(e),s=r;s<i;s++)n.push(s);return n};var XS=J.lazyStartIndex=function(e){return e.currentSlide-AD(e)},JS=J.lazyEndIndex=function(e){return e.currentSlide+CD(e)},AD=J.lazySlidesOnLeft=function(e){return e.centerMode?Math.floor(e.slidesToShow/2)+(parseInt(e.centerPadding)>0?1:0):0},CD=J.lazySlidesOnRight=function(e){return e.centerMode?Math.floor((e.slidesToShow-1)/2)+1+(parseInt(e.centerPadding)>0?1:0):e.slidesToShow},Xp=J.getWidth=function(e){return e&&e.offsetWidth||0},ZS=J.getHeight=function(e){return e&&e.offsetHeight||0},eT=J.getSwipeDirection=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r,i,s,o;return r=e.startX-e.curX,i=e.startY-e.curY,s=Math.atan2(i,r),o=Math.round(s*180/Math.PI),o<0&&(o=360-Math.abs(o)),o<=45&&o>=0||o<=360&&o>=315?"left":o>=135&&o<=225?"right":n===!0?o>=35&&o<=135?"up":"down":"vertical"},tT=J.canGoNext=function(e){var n=!0;return e.infinite||(e.centerMode&&e.currentSlide>=e.slideCount-1||e.slideCount<=e.slidesToShow||e.currentSlide>=e.slideCount-e.slidesToShow)&&(n=!1),n};J.extractObject=function(e,n){var r={};return n.forEach(function(i){return r[i]=e[i]}),r};J.initializedState=function(e){var n=TD.default.Children.count(e.children),r=e.listRef,i=Math.ceil(Xp(r)),s=e.trackRef&&e.trackRef.node,o=Math.ceil(Xp(s)),a;if(e.vertical)a=i;else{var l=e.centerMode&&parseInt(e.centerPadding)*2;typeof e.centerPadding=="string"&&e.centerPadding.slice(-1)==="%"&&(l*=i/100),a=Math.ceil((i-l)/e.slidesToShow)}var u=r&&ZS(r.querySelector('[data-index="0"]')),h=u*e.slidesToShow,f=e.currentSlide===void 0?e.initialSlide:e.currentSlide;e.rtl&&e.currentSlide===void 0&&(f=n-1-e.initialSlide);var d=e.lazyLoadedList||[],m=YS(Ke(Ke({},e),{},{currentSlide:f,lazyLoadedList:d}));d=d.concat(m);var _={slideCount:n,slideWidth:a,listWidth:i,trackWidth:o,currentSlide:f,slideHeight:u,listHeight:h,lazyLoadedList:d};return e.autoplaying===null&&e.autoplay&&(_.autoplaying="playing"),_};J.slideHandler=function(e){var n=e.waitForAnimate,r=e.animating,i=e.fade,s=e.infinite,o=e.index,a=e.slideCount,l=e.lazyLoad,u=e.currentSlide,h=e.centerMode,f=e.slidesToScroll,d=e.slidesToShow,m=e.useCSS,_=e.lazyLoadedList;if(n&&r)return{};var y=o,E,w,v,S={},C={},O=s?o:QS(o,0,a-1);if(i){if(!s&&(o<0||o>=a))return{};o<0?y=o+a:o>=a&&(y=o-a),l&&_.indexOf(y)<0&&(_=_.concat(y)),S={animating:!0,currentSlide:y,lazyLoadedList:_,targetSlide:y},C={animating:!1,targetSlide:y}}else E=y,y<0?(E=y+a,s?a%f!==0&&(E=a-a%f):E=0):!tT(e)&&y>u?y=E=u:h&&y>=a?(y=s?a:a-1,E=s?0:a-1):y>=a&&(E=y-a,s?a%f!==0&&(E=0):E=a-d),!s&&y+d>=a&&(E=a-d),w=Hc(Ke(Ke({},e),{},{slideIndex:y})),v=Hc(Ke(Ke({},e),{},{slideIndex:E})),s||(w===v&&(y=E),w=v),l&&(_=_.concat(YS(Ke(Ke({},e),{},{currentSlide:y})))),m?(S={animating:!0,currentSlide:E,trackStyle:nT(Ke(Ke({},e),{},{left:w})),lazyLoadedList:_,targetSlide:O},C={animating:!1,currentSlide:E,trackStyle:Uc(Ke(Ke({},e),{},{left:v})),swipeLeft:null,targetSlide:O}):S={currentSlide:E,trackStyle:Uc(Ke(Ke({},e),{},{left:v})),lazyLoadedList:_,targetSlide:O};return{state:S,nextState:C}};J.changeSlide=function(e,n){var r,i,s,o,a,l=e.slidesToScroll,u=e.slidesToShow,h=e.slideCount,f=e.currentSlide,d=e.targetSlide,m=e.lazyLoad,_=e.infinite;if(o=h%l!==0,r=o?0:(h-f)%l,n.message==="previous")s=r===0?l:u-r,a=f-s,m&&!_&&(i=f-s,a=i===-1?h-1:i),_||(a=d-l);else if(n.message==="next")s=r===0?l:r,a=f+s,m&&!_&&(a=(f+l)%h+r),_||(a=d+l);else if(n.message==="dots")a=n.index*n.slidesToScroll;else if(n.message==="children"){if(a=n.index,_){var y=OD(Ke(Ke({},e),{},{targetSlide:a}));a>n.currentSlide&&y==="left"?a=a-h:a<n.currentSlide&&y==="right"&&(a=a+h)}}else n.message==="index"&&(a=Number(n.index));return a};J.keyHandler=function(e,n,r){return e.target.tagName.match("TEXTAREA|INPUT|SELECT")||!n?"":e.keyCode===37?r?"next":"previous":e.keyCode===39?r?"previous":"next":""};J.swipeStart=function(e,n,r){return e.target.tagName==="IMG"&&Ms(e),!n||!r&&e.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:e.touches?e.touches[0].pageX:e.clientX,startY:e.touches?e.touches[0].pageY:e.clientY,curX:e.touches?e.touches[0].pageX:e.clientX,curY:e.touches?e.touches[0].pageY:e.clientY}}};J.swipeMove=function(e,n){var r=n.scrolling,i=n.animating,s=n.vertical,o=n.swipeToSlide,a=n.verticalSwiping,l=n.rtl,u=n.currentSlide,h=n.edgeFriction,f=n.edgeDragged,d=n.onEdge,m=n.swiped,_=n.swiping,y=n.slideCount,E=n.slidesToScroll,w=n.infinite,v=n.touchObject,S=n.swipeEvent,C=n.listHeight,O=n.listWidth;if(!r){if(i)return Ms(e);s&&o&&a&&Ms(e);var D,I={},T=Hc(n);v.curX=e.touches?e.touches[0].pageX:e.clientX,v.curY=e.touches?e.touches[0].pageY:e.clientY,v.swipeLength=Math.round(Math.sqrt(Math.pow(v.curX-v.startX,2)));var b=Math.round(Math.sqrt(Math.pow(v.curY-v.startY,2)));if(!a&&!_&&b>10)return{scrolling:!0};a&&(v.swipeLength=b);var x=(l?-1:1)*(v.curX>v.startX?1:-1);a&&(x=v.curY>v.startY?1:-1);var P=Math.ceil(y/E),k=eT(n.touchObject,a),A=v.swipeLength;return w||(u===0&&(k==="right"||k==="down")||u+1>=P&&(k==="left"||k==="up")||!tT(n)&&(k==="left"||k==="up"))&&(A=v.swipeLength*h,f===!1&&d&&(d(k),I.edgeDragged=!0)),!m&&S&&(S(k),I.swiped=!0),s?D=T+A*(C/O)*x:l?D=T-A*x:D=T+A*x,a&&(D=T+A*x),I=Ke(Ke({},I),{},{touchObject:v,swipeLeft:D,trackStyle:Uc(Ke(Ke({},n),{},{left:D}))}),Math.abs(v.curX-v.startX)<Math.abs(v.curY-v.startY)*.8||v.swipeLength>10&&(I.swiping=!0,Ms(e)),I}};J.swipeEnd=function(e,n){var r=n.dragging,i=n.swipe,s=n.touchObject,o=n.listWidth,a=n.touchThreshold,l=n.verticalSwiping,u=n.listHeight,h=n.swipeToSlide,f=n.scrolling,d=n.onSwipe,m=n.targetSlide,_=n.currentSlide,y=n.infinite;if(!r)return i&&Ms(e),{};var E=l?u/a:o/a,w=eT(s,l),v={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(f||!s.swipeLength)return v;if(s.swipeLength>E){Ms(e),d&&d(w);var S,C,O=y?_:m;switch(w){case"left":case"up":C=O+A0(n),S=h?R0(n,C):C,v.currentDirection=0;break;case"right":case"down":C=O-A0(n),S=h?R0(n,C):C,v.currentDirection=1;break;default:S=O}v.triggerSlideHandler=S}else{var D=Hc(n);v.trackStyle=nT(Ke(Ke({},n),{},{left:D}))}return v};var PD=J.getNavigableIndexes=function(e){for(var n=e.infinite?e.slideCount*2:e.slideCount,r=e.infinite?e.slidesToShow*-1:0,i=e.infinite?e.slidesToShow*-1:0,s=[];r<n;)s.push(r),r=i+e.slidesToScroll,i+=Math.min(e.slidesToScroll,e.slidesToShow);return s},R0=J.checkNavigable=function(e,n){var r=PD(e),i=0;if(n>r[r.length-1])n=r[r.length-1];else for(var s in r){if(n<r[s]){n=i;break}i=r[s]}return n},A0=J.getSlideCount=function(e){var n=e.centerMode?e.slideWidth*Math.floor(e.slidesToShow/2):0;if(e.swipeToSlide){var r,i=e.listRef,s=i.querySelectorAll&&i.querySelectorAll(".slick-slide")||[];if(Array.from(s).every(function(l){if(e.vertical){if(l.offsetTop+ZS(l)/2>e.swipeLeft*-1)return r=l,!1}else if(l.offsetLeft-n+Xp(l)/2>e.swipeLeft*-1)return r=l,!1;return!0}),!r)return 0;var o=e.rtl===!0?e.slideCount-e.currentSlide:e.currentSlide,a=Math.abs(r.dataset.index-o)||1;return a}else return e.slidesToScroll},Yg=J.checkSpecKeys=function(e,n){return n.reduce(function(r,i){return r&&e.hasOwnProperty(i)},!0)?null:console.error("Keys Missing:",e)},Uc=J.getTrackCSS=function(e){Yg(e,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var n,r,i=e.slideCount+2*e.slidesToShow;e.vertical?r=i*e.slideHeight:n=LD(e)*e.slideWidth;var s={opacity:1,transition:"",WebkitTransition:""};if(e.useTransform){var o=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",a=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",l=e.vertical?"translateY("+e.left+"px)":"translateX("+e.left+"px)";s=Ke(Ke({},s),{},{WebkitTransform:o,transform:a,msTransform:l})}else e.vertical?s.top=e.left:s.left=e.left;return e.fade&&(s={opacity:1}),n&&(s.width=n),r&&(s.height=r),window&&!window.addEventListener&&window.attachEvent&&(e.vertical?s.marginTop=e.left+"px":s.marginLeft=e.left+"px"),s},nT=J.getTrackAnimateCSS=function(e){Yg(e,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var n=Uc(e);return e.useTransform?(n.WebkitTransition="-webkit-transform "+e.speed+"ms "+e.cssEase,n.transition="transform "+e.speed+"ms "+e.cssEase):e.vertical?n.transition="top "+e.speed+"ms "+e.cssEase:n.transition="left "+e.speed+"ms "+e.cssEase,n},Hc=J.getTrackLeft=function(e){if(e.unslick)return 0;Yg(e,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var n=e.slideIndex,r=e.trackRef,i=e.infinite,s=e.centerMode,o=e.slideCount,a=e.slidesToShow,l=e.slidesToScroll,u=e.slideWidth,h=e.listWidth,f=e.variableWidth,d=e.slideHeight,m=e.fade,_=e.vertical,y=0,E,w,v=0;if(m||e.slideCount===1)return 0;var S=0;if(i?(S=-Ju(e),o%l!==0&&n+l>o&&(S=-(n>o?a-(n-o):o%l)),s&&(S+=parseInt(a/2))):(o%l!==0&&n+l>o&&(S=a-o%l),s&&(S=parseInt(a/2))),y=S*u,v=S*d,_?E=n*d*-1+v:E=n*u*-1+y,f===!0){var C,O=r&&r.node;if(C=n+Ju(e),w=O&&O.childNodes[C],E=w?w.offsetLeft*-1:0,s===!0){C=i?n+Ju(e):n,w=O&&O.children[C],E=0;for(var D=0;D<C;D++)E-=O&&O.children[D]&&O.children[D].offsetWidth;E-=parseInt(e.centerPadding),E+=w&&(h-w.offsetWidth)/2}}return E},Ju=J.getPreClones=function(e){return e.unslick||!e.infinite?0:e.variableWidth?e.slideCount:e.slidesToShow+(e.centerMode?1:0)},kD=J.getPostClones=function(e){return e.unslick||!e.infinite?0:e.slideCount},LD=J.getTotalSlides=function(e){return e.slideCount===1?1:Ju(e)+e.slideCount+kD(e)},OD=J.siblingDirection=function(e){return e.targetSlide>e.currentSlide?e.targetSlide>e.currentSlide+DD(e)?"left":"right":e.targetSlide<e.currentSlide-MD(e)?"right":"left"},DD=J.slidesOnRight=function(e){var n=e.slidesToShow,r=e.centerMode,i=e.rtl,s=e.centerPadding;if(r){var o=(n-1)/2+1;return parseInt(s)>0&&(o+=1),i&&n%2===0&&(o+=1),o}return i?0:n-1},MD=J.slidesOnLeft=function(e){var n=e.slidesToShow,r=e.centerMode,i=e.rtl,s=e.centerPadding;if(r){var o=(n-1)/2+1;return parseInt(s)>0&&(o+=1),!i&&n%2===0&&(o+=1),o}return i?n-1:0};J.canUseDOM=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)};var ND=J.validSettings=Object.keys(bD.default);function VD(t){return ND.reduce(function(e,n){return t.hasOwnProperty(n)&&(e[n]=t[n]),e},{})}var Kh={};Object.defineProperty(Kh,"__esModule",{value:!0});Kh.Track=void 0;var kr=rT(F),yd=rT(qh),vd=J;function rT(t){return t&&t.__esModule?t:{default:t}}function Xs(t){"@babel/helpers - typeof";return Xs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Xs(t)}function Jp(){return Jp=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Jp.apply(this,arguments)}function FD(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function zD(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,sT(r.key),r)}}function jD(t,e,n){return e&&zD(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function BD(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Zp(t,e)}function Zp(t,e){return Zp=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Zp(t,e)}function $D(t){var e=iT();return function(){var r=Wc(t),i;if(e){var s=Wc(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return UD(this,i)}}function UD(t,e){if(e&&(Xs(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return em(t)}function em(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function iT(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(iT=function(){return!!t})()}function Wc(t){return Wc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Wc(t)}function C0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Qt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?C0(Object(n),!0).forEach(function(r){tm(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):C0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function tm(t,e,n){return e=sT(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function sT(t){var e=HD(t,"string");return Xs(e)=="symbol"?e:String(e)}function HD(t,e){if(Xs(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Xs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var wd=function(e){var n,r,i,s,o;e.rtl?o=e.slideCount-1-e.index:o=e.index,i=o<0||o>=e.slideCount,e.centerMode?(s=Math.floor(e.slidesToShow/2),r=(o-e.currentSlide)%e.slideCount===0,o>e.currentSlide-s-1&&o<=e.currentSlide+s&&(n=!0)):n=e.currentSlide<=o&&o<e.currentSlide+e.slidesToShow;var a;e.targetSlide<0?a=e.targetSlide+e.slideCount:e.targetSlide>=e.slideCount?a=e.targetSlide-e.slideCount:a=e.targetSlide;var l=o===a;return{"slick-slide":!0,"slick-active":n,"slick-center":r,"slick-cloned":i,"slick-current":l}},WD=function(e){var n={};return(e.variableWidth===void 0||e.variableWidth===!1)&&(n.width=e.slideWidth),e.fade&&(n.position="relative",e.vertical?n.top=-e.index*parseInt(e.slideHeight):n.left=-e.index*parseInt(e.slideWidth),n.opacity=e.currentSlide===e.index?1:0,n.zIndex=e.currentSlide===e.index?999:998,e.useCSS&&(n.transition="opacity "+e.speed+"ms "+e.cssEase+", visibility "+e.speed+"ms "+e.cssEase)),n},Ed=function(e,n){return e.key||n},qD=function(e){var n,r=[],i=[],s=[],o=kr.default.Children.count(e.children),a=(0,vd.lazyStartIndex)(e),l=(0,vd.lazyEndIndex)(e);return kr.default.Children.forEach(e.children,function(u,h){var f,d={message:"children",index:h,slidesToScroll:e.slidesToScroll,currentSlide:e.currentSlide};!e.lazyLoad||e.lazyLoad&&e.lazyLoadedList.indexOf(h)>=0?f=u:f=kr.default.createElement("div",null);var m=WD(Qt(Qt({},e),{},{index:h})),_=f.props.className||"",y=wd(Qt(Qt({},e),{},{index:h}));if(r.push(kr.default.cloneElement(f,{key:"original"+Ed(f,h),"data-index":h,className:(0,yd.default)(y,_),tabIndex:"-1","aria-hidden":!y["slick-active"],style:Qt(Qt({outline:"none"},f.props.style||{}),m),onClick:function(v){f.props&&f.props.onClick&&f.props.onClick(v),e.focusOnSelect&&e.focusOnSelect(d)}})),e.infinite&&e.fade===!1){var E=o-h;E<=(0,vd.getPreClones)(e)&&(n=-E,n>=a&&(f=u),y=wd(Qt(Qt({},e),{},{index:n})),i.push(kr.default.cloneElement(f,{key:"precloned"+Ed(f,n),"data-index":n,tabIndex:"-1",className:(0,yd.default)(y,_),"aria-hidden":!y["slick-active"],style:Qt(Qt({},f.props.style||{}),m),onClick:function(v){f.props&&f.props.onClick&&f.props.onClick(v),e.focusOnSelect&&e.focusOnSelect(d)}}))),n=o+h,n<l&&(f=u),y=wd(Qt(Qt({},e),{},{index:n})),s.push(kr.default.cloneElement(f,{key:"postcloned"+Ed(f,n),"data-index":n,tabIndex:"-1",className:(0,yd.default)(y,_),"aria-hidden":!y["slick-active"],style:Qt(Qt({},f.props.style||{}),m),onClick:function(v){f.props&&f.props.onClick&&f.props.onClick(v),e.focusOnSelect&&e.focusOnSelect(d)}}))}}),e.rtl?i.concat(r,s).reverse():i.concat(r,s)};Kh.Track=function(t){BD(n,t);var e=$D(n);function n(){var r;FD(this,n);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=e.call.apply(e,[this].concat(s)),tm(em(r),"node",null),tm(em(r),"handleRef",function(a){r.node=a}),r}return jD(n,[{key:"render",value:function(){var i=qD(this.props),s=this.props,o=s.onMouseEnter,a=s.onMouseOver,l=s.onMouseLeave,u={onMouseEnter:o,onMouseOver:a,onMouseLeave:l};return kr.default.createElement("div",Jp({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},u),i)}}]),n}(kr.default.PureComponent);var Gh={};function Js(t){"@babel/helpers - typeof";return Js=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Js(t)}Object.defineProperty(Gh,"__esModule",{value:!0});Gh.Dots=void 0;var Tu=oT(F),KD=oT(qh),P0=J;function oT(t){return t&&t.__esModule?t:{default:t}}function k0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function GD(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?k0(Object(n),!0).forEach(function(r){QD(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):k0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function QD(t,e,n){return e=aT(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function YD(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function XD(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,aT(r.key),r)}}function JD(t,e,n){return e&&XD(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function aT(t){var e=ZD(t,"string");return Js(e)=="symbol"?e:String(e)}function ZD(t,e){if(Js(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Js(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function eM(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&nm(t,e)}function nm(t,e){return nm=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},nm(t,e)}function tM(t){var e=lT();return function(){var r=qc(t),i;if(e){var s=qc(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return nM(this,i)}}function nM(t,e){if(e&&(Js(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return rM(t)}function rM(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function lT(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(lT=function(){return!!t})()}function qc(t){return qc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},qc(t)}var iM=function(e){var n;return e.infinite?n=Math.ceil(e.slideCount/e.slidesToScroll):n=Math.ceil((e.slideCount-e.slidesToShow)/e.slidesToScroll)+1,n};Gh.Dots=function(t){eM(n,t);var e=tM(n);function n(){return YD(this,n),e.apply(this,arguments)}return JD(n,[{key:"clickHandler",value:function(i,s){s.preventDefault(),this.props.clickHandler(i)}},{key:"render",value:function(){for(var i=this.props,s=i.onMouseEnter,o=i.onMouseOver,a=i.onMouseLeave,l=i.infinite,u=i.slidesToScroll,h=i.slidesToShow,f=i.slideCount,d=i.currentSlide,m=iM({slideCount:f,slidesToScroll:u,slidesToShow:h,infinite:l}),_={onMouseEnter:s,onMouseOver:o,onMouseLeave:a},y=[],E=0;E<m;E++){var w=(E+1)*u-1,v=l?w:(0,P0.clamp)(w,0,f-1),S=v-(u-1),C=l?S:(0,P0.clamp)(S,0,f-1),O=(0,KD.default)({"slick-active":l?d>=C&&d<=v:d===C}),D={message:"dots",index:E,slidesToScroll:u,currentSlide:d},I=this.clickHandler.bind(this,D);y=y.concat(Tu.default.createElement("li",{key:E,className:O},Tu.default.cloneElement(this.props.customPaging(E),{onClick:I})))}return Tu.default.cloneElement(this.props.appendDots(y),GD({className:this.props.dotsClass},_))}}]),n}(Tu.default.PureComponent);var Zs={};function eo(t){"@babel/helpers - typeof";return eo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},eo(t)}Object.defineProperty(Zs,"__esModule",{value:!0});Zs.PrevArrow=Zs.NextArrow=void 0;var Ns=cT(F),uT=cT(qh),sM=J;function cT(t){return t&&t.__esModule?t:{default:t}}function Kc(){return Kc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Kc.apply(this,arguments)}function L0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Gc(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?L0(Object(n),!0).forEach(function(r){oM(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):L0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function oM(t,e,n){return e=dT(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function hT(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function aM(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,dT(r.key),r)}}function fT(t,e,n){return e&&aM(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function dT(t){var e=lM(t,"string");return eo(e)=="symbol"?e:String(e)}function lM(t,e){if(eo(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(eo(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function pT(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&rm(t,e)}function rm(t,e){return rm=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},rm(t,e)}function mT(t){var e=gT();return function(){var r=Qc(t),i;if(e){var s=Qc(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return uM(this,i)}}function uM(t,e){if(e&&(eo(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return cM(t)}function cM(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function gT(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(gT=function(){return!!t})()}function Qc(t){return Qc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Qc(t)}Zs.PrevArrow=function(t){pT(n,t);var e=mT(n);function n(){return hT(this,n),e.apply(this,arguments)}return fT(n,[{key:"clickHandler",value:function(i,s){s&&s.preventDefault(),this.props.clickHandler(i,s)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-prev":!0},s=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(i["slick-disabled"]=!0,s=null);var o={key:"0","data-role":"none",className:(0,uT.default)(i),style:{display:"block"},onClick:s},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},l;return this.props.prevArrow?l=Ns.default.cloneElement(this.props.prevArrow,Gc(Gc({},o),a)):l=Ns.default.createElement("button",Kc({key:"0",type:"button"},o)," ","Previous"),l}}]),n}(Ns.default.PureComponent);Zs.NextArrow=function(t){pT(n,t);var e=mT(n);function n(){return hT(this,n),e.apply(this,arguments)}return fT(n,[{key:"clickHandler",value:function(i,s){s&&s.preventDefault(),this.props.clickHandler(i,s)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-next":!0},s=this.clickHandler.bind(this,{message:"next"});(0,sM.canGoNext)(this.props)||(i["slick-disabled"]=!0,s=null);var o={key:"1","data-role":"none",className:(0,uT.default)(i),style:{display:"block"},onClick:s},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},l;return this.props.nextArrow?l=Ns.default.cloneElement(this.props.nextArrow,Gc(Gc({},o),a)):l=Ns.default.createElement("button",Kc({key:"1",type:"button"},o)," ","Next"),l}}]),n}(Ns.default.PureComponent);var _T=function(){if(typeof Map<"u")return Map;function t(e,n){var r=-1;return e.some(function(i,s){return i[0]===n?(r=s,!0):!1}),r}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(n){var r=t(this.__entries__,n),i=this.__entries__[r];return i&&i[1]},e.prototype.set=function(n,r){var i=t(this.__entries__,n);~i?this.__entries__[i][1]=r:this.__entries__.push([n,r])},e.prototype.delete=function(n){var r=this.__entries__,i=t(r,n);~i&&r.splice(i,1)},e.prototype.has=function(n){return!!~t(this.__entries__,n)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var i=0,s=this.__entries__;i<s.length;i++){var o=s[i];n.call(r,o[1],o[0])}},e}()}(),im=typeof window<"u"&&typeof document<"u"&&window.document===document,Yc=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),hM=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(Yc):function(t){return setTimeout(function(){return t(Date.now())},1e3/60)}}(),fM=2;function dM(t,e){var n=!1,r=!1,i=0;function s(){n&&(n=!1,t()),r&&a()}function o(){hM(s)}function a(){var l=Date.now();if(n){if(l-i<fM)return;r=!0}else n=!0,r=!1,setTimeout(o,e);i=l}return a}var pM=20,mM=["top","right","bottom","left","width","height","size","weight"],gM=typeof MutationObserver<"u",_M=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=dM(this.refresh.bind(this),pM)}return t.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},t.prototype.removeObserver=function(e){var n=this.observers_,r=n.indexOf(e);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){var e=this.updateObservers_();e&&this.refresh()},t.prototype.updateObservers_=function(){var e=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return e.forEach(function(n){return n.broadcastActive()}),e.length>0},t.prototype.connect_=function(){!im||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),gM?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){!im||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(e){var n=e.propertyName,r=n===void 0?"":n,i=mM.some(function(s){return!!~r.indexOf(s)});i&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),yT=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n++){var i=r[n];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},to=function(t){var e=t&&t.ownerDocument&&t.ownerDocument.defaultView;return e||Yc},vT=Qh(0,0,0,0);function Xc(t){return parseFloat(t)||0}function O0(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce(function(r,i){var s=t["border-"+i+"-width"];return r+Xc(s)},0)}function yM(t){for(var e=["top","right","bottom","left"],n={},r=0,i=e;r<i.length;r++){var s=i[r],o=t["padding-"+s];n[s]=Xc(o)}return n}function vM(t){var e=t.getBBox();return Qh(0,0,e.width,e.height)}function wM(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return vT;var r=to(t).getComputedStyle(t),i=yM(r),s=i.left+i.right,o=i.top+i.bottom,a=Xc(r.width),l=Xc(r.height);if(r.boxSizing==="border-box"&&(Math.round(a+s)!==e&&(a-=O0(r,"left","right")+s),Math.round(l+o)!==n&&(l-=O0(r,"top","bottom")+o)),!SM(t)){var u=Math.round(a+s)-e,h=Math.round(l+o)-n;Math.abs(u)!==1&&(a-=u),Math.abs(h)!==1&&(l-=h)}return Qh(i.left,i.top,a,l)}var EM=function(){return typeof SVGGraphicsElement<"u"?function(t){return t instanceof to(t).SVGGraphicsElement}:function(t){return t instanceof to(t).SVGElement&&typeof t.getBBox=="function"}}();function SM(t){return t===to(t).document.documentElement}function TM(t){return im?EM(t)?vM(t):wM(t):vT}function bM(t){var e=t.x,n=t.y,r=t.width,i=t.height,s=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,o=Object.create(s.prototype);return yT(o,{x:e,y:n,width:r,height:i,top:n,right:e+r,bottom:i+n,left:e}),o}function Qh(t,e,n,r){return{x:t,y:e,width:n,height:r}}var xM=function(){function t(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Qh(0,0,0,0),this.target=e}return t.prototype.isActive=function(){var e=TM(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},t}(),IM=function(){function t(e,n){var r=bM(n);yT(this,{target:e,contentRect:r})}return t}(),RM=function(){function t(e,n,r){if(this.activeObservations_=[],this.observations_=new _T,typeof e!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=n,this.callbackCtx_=r}return t.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof to(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(e)||(n.set(e,new xM(e)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof to(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(e)&&(n.delete(e),n.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&e.activeObservations_.push(n)})},t.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new IM(r.target,r.broadcastRect())});this.callback_.call(e,n,e),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),wT=typeof WeakMap<"u"?new WeakMap:new _T,ET=function(){function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=_M.getInstance(),r=new RM(e,n,this);wT.set(this,r)}return t}();["observe","unobserve","disconnect"].forEach(function(t){ET.prototype[t]=function(){var e;return(e=wT.get(this))[t].apply(e,arguments)}});var AM=function(){return typeof Yc.ResizeObserver<"u"?Yc.ResizeObserver:ET}();const CM=Object.freeze(Object.defineProperty({__proto__:null,default:AM},Symbol.toStringTag,{value:"Module"})),PM=jx(CM);Object.defineProperty(Wh,"__esModule",{value:!0});Wh.InnerSlider=void 0;var $t=El(F),kM=El(qS),LM=El(SD),OM=El(qh),Ye=J,DM=Kh,MM=Gh,D0=Zs,NM=El(PM);function El(t){return t&&t.__esModule?t:{default:t}}function qi(t){"@babel/helpers - typeof";return qi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},qi(t)}function Jc(){return Jc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Jc.apply(this,arguments)}function VM(t,e){if(t==null)return{};var n=FM(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function FM(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function M0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function ue(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?M0(Object(n),!0).forEach(function(r){ve(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):M0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function zM(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function jM(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,TT(r.key),r)}}function BM(t,e,n){return e&&jM(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function $M(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&sm(t,e)}function sm(t,e){return sm=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},sm(t,e)}function UM(t){var e=ST();return function(){var r=Zc(t),i;if(e){var s=Zc(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return HM(this,i)}}function HM(t,e){if(e&&(qi(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ye(t)}function ye(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function ST(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(ST=function(){return!!t})()}function Zc(t){return Zc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Zc(t)}function ve(t,e,n){return e=TT(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function TT(t){var e=WM(t,"string");return qi(e)=="symbol"?e:String(e)}function WM(t,e){if(qi(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(qi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}Wh.InnerSlider=function(t){$M(n,t);var e=UM(n);function n(r){var i;zM(this,n),i=e.call(this,r),ve(ye(i),"listRefHandler",function(o){return i.list=o}),ve(ye(i),"trackRefHandler",function(o){return i.track=o}),ve(ye(i),"adaptHeight",function(){if(i.props.adaptiveHeight&&i.list){var o=i.list.querySelector('[data-index="'.concat(i.state.currentSlide,'"]'));i.list.style.height=(0,Ye.getHeight)(o)+"px"}}),ve(ye(i),"componentDidMount",function(){if(i.props.onInit&&i.props.onInit(),i.props.lazyLoad){var o=(0,Ye.getOnDemandLazySlides)(ue(ue({},i.props),i.state));o.length>0&&(i.setState(function(l){return{lazyLoadedList:l.lazyLoadedList.concat(o)}}),i.props.onLazyLoad&&i.props.onLazyLoad(o))}var a=ue({listRef:i.list,trackRef:i.track},i.props);i.updateState(a,!0,function(){i.adaptHeight(),i.props.autoplay&&i.autoPlay("update")}),i.props.lazyLoad==="progressive"&&(i.lazyLoadTimer=setInterval(i.progressiveLazyLoad,1e3)),i.ro=new NM.default(function(){i.state.animating?(i.onWindowResized(!1),i.callbackTimers.push(setTimeout(function(){return i.onWindowResized()},i.props.speed))):i.onWindowResized()}),i.ro.observe(i.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(l){l.onfocus=i.props.pauseOnFocus?i.onSlideFocus:null,l.onblur=i.props.pauseOnFocus?i.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",i.onWindowResized):window.attachEvent("onresize",i.onWindowResized)}),ve(ye(i),"componentWillUnmount",function(){i.animationEndCallback&&clearTimeout(i.animationEndCallback),i.lazyLoadTimer&&clearInterval(i.lazyLoadTimer),i.callbackTimers.length&&(i.callbackTimers.forEach(function(o){return clearTimeout(o)}),i.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",i.onWindowResized):window.detachEvent("onresize",i.onWindowResized),i.autoplayTimer&&clearInterval(i.autoplayTimer),i.ro.disconnect()}),ve(ye(i),"componentDidUpdate",function(o){if(i.checkImagesLoad(),i.props.onReInit&&i.props.onReInit(),i.props.lazyLoad){var a=(0,Ye.getOnDemandLazySlides)(ue(ue({},i.props),i.state));a.length>0&&(i.setState(function(h){return{lazyLoadedList:h.lazyLoadedList.concat(a)}}),i.props.onLazyLoad&&i.props.onLazyLoad(a))}i.adaptHeight();var l=ue(ue({listRef:i.list,trackRef:i.track},i.props),i.state),u=i.didPropsChange(o);u&&i.updateState(l,u,function(){i.state.currentSlide>=$t.default.Children.count(i.props.children)&&i.changeSlide({message:"index",index:$t.default.Children.count(i.props.children)-i.props.slidesToShow,currentSlide:i.state.currentSlide}),i.props.autoplay?i.autoPlay("update"):i.pause("paused")})}),ve(ye(i),"onWindowResized",function(o){i.debouncedResize&&i.debouncedResize.cancel(),i.debouncedResize=(0,LM.default)(function(){return i.resizeWindow(o)},50),i.debouncedResize()}),ve(ye(i),"resizeWindow",function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,a=!!(i.track&&i.track.node);if(a){var l=ue(ue({listRef:i.list,trackRef:i.track},i.props),i.state);i.updateState(l,o,function(){i.props.autoplay?i.autoPlay("update"):i.pause("paused")}),i.setState({animating:!1}),clearTimeout(i.animationEndCallback),delete i.animationEndCallback}}),ve(ye(i),"updateState",function(o,a,l){var u=(0,Ye.initializedState)(o);o=ue(ue(ue({},o),u),{},{slideIndex:u.currentSlide});var h=(0,Ye.getTrackLeft)(o);o=ue(ue({},o),{},{left:h});var f=(0,Ye.getTrackCSS)(o);(a||$t.default.Children.count(i.props.children)!==$t.default.Children.count(o.children))&&(u.trackStyle=f),i.setState(u,l)}),ve(ye(i),"ssrInit",function(){if(i.props.variableWidth){var o=0,a=0,l=[],u=(0,Ye.getPreClones)(ue(ue(ue({},i.props),i.state),{},{slideCount:i.props.children.length})),h=(0,Ye.getPostClones)(ue(ue(ue({},i.props),i.state),{},{slideCount:i.props.children.length}));i.props.children.forEach(function(I){l.push(I.props.style.width),o+=I.props.style.width});for(var f=0;f<u;f++)a+=l[l.length-1-f],o+=l[l.length-1-f];for(var d=0;d<h;d++)o+=l[d];for(var m=0;m<i.state.currentSlide;m++)a+=l[m];var _={width:o+"px",left:-a+"px"};if(i.props.centerMode){var y="".concat(l[i.state.currentSlide],"px");_.left="calc(".concat(_.left," + (100% - ").concat(y,") / 2 ) ")}return{trackStyle:_}}var E=$t.default.Children.count(i.props.children),w=ue(ue(ue({},i.props),i.state),{},{slideCount:E}),v=(0,Ye.getPreClones)(w)+(0,Ye.getPostClones)(w)+E,S=100/i.props.slidesToShow*v,C=100/v,O=-C*((0,Ye.getPreClones)(w)+i.state.currentSlide)*S/100;i.props.centerMode&&(O+=(100-C*S/100)/2);var D={width:S+"%",left:O+"%"};return{slideWidth:C+"%",trackStyle:D}}),ve(ye(i),"checkImagesLoad",function(){var o=i.list&&i.list.querySelectorAll&&i.list.querySelectorAll(".slick-slide img")||[],a=o.length,l=0;Array.prototype.forEach.call(o,function(u){var h=function(){return++l&&l>=a&&i.onWindowResized()};if(!u.onclick)u.onclick=function(){return u.parentNode.focus()};else{var f=u.onclick;u.onclick=function(d){f(d),u.parentNode.focus()}}u.onload||(i.props.lazyLoad?u.onload=function(){i.adaptHeight(),i.callbackTimers.push(setTimeout(i.onWindowResized,i.props.speed))}:(u.onload=h,u.onerror=function(){h(),i.props.onLazyLoadError&&i.props.onLazyLoadError()}))})}),ve(ye(i),"progressiveLazyLoad",function(){for(var o=[],a=ue(ue({},i.props),i.state),l=i.state.currentSlide;l<i.state.slideCount+(0,Ye.getPostClones)(a);l++)if(i.state.lazyLoadedList.indexOf(l)<0){o.push(l);break}for(var u=i.state.currentSlide-1;u>=-(0,Ye.getPreClones)(a);u--)if(i.state.lazyLoadedList.indexOf(u)<0){o.push(u);break}o.length>0?(i.setState(function(h){return{lazyLoadedList:h.lazyLoadedList.concat(o)}}),i.props.onLazyLoad&&i.props.onLazyLoad(o)):i.lazyLoadTimer&&(clearInterval(i.lazyLoadTimer),delete i.lazyLoadTimer)}),ve(ye(i),"slideHandler",function(o){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=i.props,u=l.asNavFor,h=l.beforeChange,f=l.onLazyLoad,d=l.speed,m=l.afterChange,_=i.state.currentSlide,y=(0,Ye.slideHandler)(ue(ue(ue({index:o},i.props),i.state),{},{trackRef:i.track,useCSS:i.props.useCSS&&!a})),E=y.state,w=y.nextState;if(E){h&&h(_,E.currentSlide);var v=E.lazyLoadedList.filter(function(S){return i.state.lazyLoadedList.indexOf(S)<0});f&&v.length>0&&f(v),!i.props.waitForAnimate&&i.animationEndCallback&&(clearTimeout(i.animationEndCallback),m&&m(_),delete i.animationEndCallback),i.setState(E,function(){u&&i.asNavForIndex!==o&&(i.asNavForIndex=o,u.innerSlider.slideHandler(o)),w&&(i.animationEndCallback=setTimeout(function(){var S=w.animating,C=VM(w,["animating"]);i.setState(C,function(){i.callbackTimers.push(setTimeout(function(){return i.setState({animating:S})},10)),m&&m(E.currentSlide),delete i.animationEndCallback})},d))})}}),ve(ye(i),"changeSlide",function(o){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=ue(ue({},i.props),i.state),u=(0,Ye.changeSlide)(l,o);if(!(u!==0&&!u)&&(a===!0?i.slideHandler(u,a):i.slideHandler(u),i.props.autoplay&&i.autoPlay("update"),i.props.focusOnSelect)){var h=i.list.querySelectorAll(".slick-current");h[0]&&h[0].focus()}}),ve(ye(i),"clickHandler",function(o){i.clickable===!1&&(o.stopPropagation(),o.preventDefault()),i.clickable=!0}),ve(ye(i),"keyHandler",function(o){var a=(0,Ye.keyHandler)(o,i.props.accessibility,i.props.rtl);a!==""&&i.changeSlide({message:a})}),ve(ye(i),"selectHandler",function(o){i.changeSlide(o)}),ve(ye(i),"disableBodyScroll",function(){var o=function(l){l=l||window.event,l.preventDefault&&l.preventDefault(),l.returnValue=!1};window.ontouchmove=o}),ve(ye(i),"enableBodyScroll",function(){window.ontouchmove=null}),ve(ye(i),"swipeStart",function(o){i.props.verticalSwiping&&i.disableBodyScroll();var a=(0,Ye.swipeStart)(o,i.props.swipe,i.props.draggable);a!==""&&i.setState(a)}),ve(ye(i),"swipeMove",function(o){var a=(0,Ye.swipeMove)(o,ue(ue(ue({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));a&&(a.swiping&&(i.clickable=!1),i.setState(a))}),ve(ye(i),"swipeEnd",function(o){var a=(0,Ye.swipeEnd)(o,ue(ue(ue({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));if(a){var l=a.triggerSlideHandler;delete a.triggerSlideHandler,i.setState(a),l!==void 0&&(i.slideHandler(l),i.props.verticalSwiping&&i.enableBodyScroll())}}),ve(ye(i),"touchEnd",function(o){i.swipeEnd(o),i.clickable=!0}),ve(ye(i),"slickPrev",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"previous"})},0))}),ve(ye(i),"slickNext",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"next"})},0))}),ve(ye(i),"slickGoTo",function(o){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(o=Number(o),isNaN(o))return"";i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"index",index:o,currentSlide:i.state.currentSlide},a)},0))}),ve(ye(i),"play",function(){var o;if(i.props.rtl)o=i.state.currentSlide-i.props.slidesToScroll;else if((0,Ye.canGoNext)(ue(ue({},i.props),i.state)))o=i.state.currentSlide+i.props.slidesToScroll;else return!1;i.slideHandler(o)}),ve(ye(i),"autoPlay",function(o){i.autoplayTimer&&clearInterval(i.autoplayTimer);var a=i.state.autoplaying;if(o==="update"){if(a==="hovered"||a==="focused"||a==="paused")return}else if(o==="leave"){if(a==="paused"||a==="focused")return}else if(o==="blur"&&(a==="paused"||a==="hovered"))return;i.autoplayTimer=setInterval(i.play,i.props.autoplaySpeed+50),i.setState({autoplaying:"playing"})}),ve(ye(i),"pause",function(o){i.autoplayTimer&&(clearInterval(i.autoplayTimer),i.autoplayTimer=null);var a=i.state.autoplaying;o==="paused"?i.setState({autoplaying:"paused"}):o==="focused"?(a==="hovered"||a==="playing")&&i.setState({autoplaying:"focused"}):a==="playing"&&i.setState({autoplaying:"hovered"})}),ve(ye(i),"onDotsOver",function(){return i.props.autoplay&&i.pause("hovered")}),ve(ye(i),"onDotsLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),ve(ye(i),"onTrackOver",function(){return i.props.autoplay&&i.pause("hovered")}),ve(ye(i),"onTrackLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),ve(ye(i),"onSlideFocus",function(){return i.props.autoplay&&i.pause("focused")}),ve(ye(i),"onSlideBlur",function(){return i.props.autoplay&&i.state.autoplaying==="focused"&&i.autoPlay("blur")}),ve(ye(i),"render",function(){var o=(0,OM.default)("slick-slider",i.props.className,{"slick-vertical":i.props.vertical,"slick-initialized":!0}),a=ue(ue({},i.props),i.state),l=(0,Ye.extractObject)(a,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),u=i.props.pauseOnHover;l=ue(ue({},l),{},{onMouseEnter:u?i.onTrackOver:null,onMouseLeave:u?i.onTrackLeave:null,onMouseOver:u?i.onTrackOver:null,focusOnSelect:i.props.focusOnSelect&&i.clickable?i.selectHandler:null});var h;if(i.props.dots===!0&&i.state.slideCount>=i.props.slidesToShow){var f=(0,Ye.extractObject)(a,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),d=i.props.pauseOnDotsHover;f=ue(ue({},f),{},{clickHandler:i.changeSlide,onMouseEnter:d?i.onDotsLeave:null,onMouseOver:d?i.onDotsOver:null,onMouseLeave:d?i.onDotsLeave:null}),h=$t.default.createElement(MM.Dots,f)}var m,_,y=(0,Ye.extractObject)(a,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);y.clickHandler=i.changeSlide,i.props.arrows&&(m=$t.default.createElement(D0.PrevArrow,y),_=$t.default.createElement(D0.NextArrow,y));var E=null;i.props.vertical&&(E={height:i.state.listHeight});var w=null;i.props.vertical===!1?i.props.centerMode===!0&&(w={padding:"0px "+i.props.centerPadding}):i.props.centerMode===!0&&(w={padding:i.props.centerPadding+" 0px"});var v=ue(ue({},E),w),S=i.props.touchMove,C={className:"slick-list",style:v,onClick:i.clickHandler,onMouseDown:S?i.swipeStart:null,onMouseMove:i.state.dragging&&S?i.swipeMove:null,onMouseUp:S?i.swipeEnd:null,onMouseLeave:i.state.dragging&&S?i.swipeEnd:null,onTouchStart:S?i.swipeStart:null,onTouchMove:i.state.dragging&&S?i.swipeMove:null,onTouchEnd:S?i.touchEnd:null,onTouchCancel:i.state.dragging&&S?i.swipeEnd:null,onKeyDown:i.props.accessibility?i.keyHandler:null},O={className:o,dir:"ltr",style:i.props.style};return i.props.unslick&&(C={className:"slick-list"},O={className:o}),$t.default.createElement("div",O,i.props.unslick?"":m,$t.default.createElement("div",Jc({ref:i.listRefHandler},C),$t.default.createElement(DM.Track,Jc({ref:i.trackRefHandler},l),i.props.children)),i.props.unslick?"":_,i.props.unslick?"":h)}),i.list=null,i.track=null,i.state=ue(ue({},kM.default),{},{currentSlide:i.props.initialSlide,targetSlide:i.props.initialSlide?i.props.initialSlide:0,slideCount:$t.default.Children.count(i.props.children)}),i.callbackTimers=[],i.clickable=!0,i.debouncedResize=null;var s=i.ssrInit();return i.state=ue(ue({},i.state),s),i}return BM(n,[{key:"didPropsChange",value:function(i){for(var s=!1,o=0,a=Object.keys(this.props);o<a.length;o++){var l=a[o];if(!i.hasOwnProperty(l)){s=!0;break}if(!(qi(i[l])==="object"||typeof i[l]=="function"||isNaN(i[l]))&&i[l]!==this.props[l]){s=!0;break}}return s||$t.default.Children.count(this.props.children)!==$t.default.Children.count(i.children)}}]),n}($t.default.Component);var qM=function(t){return t.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}).toLowerCase()},KM=qM,GM=KM,QM=function(t){var e=/[height|width]$/;return e.test(t)},N0=function(t){var e="",n=Object.keys(t);return n.forEach(function(r,i){var s=t[r];r=GM(r),QM(r)&&typeof s=="number"&&(s=s+"px"),s===!0?e+=r:s===!1?e+="not "+r:e+="("+r+": "+s+")",i<n.length-1&&(e+=" and ")}),e},YM=function(t){var e="";return typeof t=="string"?t:t instanceof Array?(t.forEach(function(n,r){e+=N0(n),r<t.length-1&&(e+=", ")}),e):N0(t)},XM=YM,Sd,V0;function JM(){if(V0)return Sd;V0=1;function t(e){this.options=e,!e.deferSetup&&this.setup()}return t.prototype={constructor:t,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(e){return this.options===e||this.options.match===e}},Sd=t,Sd}var Td,F0;function bT(){if(F0)return Td;F0=1;function t(r,i){var s=0,o=r.length,a;for(s;s<o&&(a=i(r[s],s),a!==!1);s++);}function e(r){return Object.prototype.toString.apply(r)==="[object Array]"}function n(r){return typeof r=="function"}return Td={isFunction:n,isArray:e,each:t},Td}var bd,z0;function ZM(){if(z0)return bd;z0=1;var t=JM(),e=bT().each;function n(r,i){this.query=r,this.isUnconditional=i,this.handlers=[],this.mql=window.matchMedia(r);var s=this;this.listener=function(o){s.mql=o.currentTarget||o,s.assess()},this.mql.addListener(this.listener)}return n.prototype={constuctor:n,addHandler:function(r){var i=new t(r);this.handlers.push(i),this.matches()&&i.on()},removeHandler:function(r){var i=this.handlers;e(i,function(s,o){if(s.equals(r))return s.destroy(),!i.splice(o,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){e(this.handlers,function(r){r.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var r=this.matches()?"on":"off";e(this.handlers,function(i){i[r]()})}},bd=n,bd}var xd,j0;function eN(){if(j0)return xd;j0=1;var t=ZM(),e=bT(),n=e.each,r=e.isFunction,i=e.isArray;function s(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}return s.prototype={constructor:s,register:function(o,a,l){var u=this.queries,h=l&&this.browserIsIncapable;return u[o]||(u[o]=new t(o,h)),r(a)&&(a={match:a}),i(a)||(a=[a]),n(a,function(f){r(f)&&(f={match:f}),u[o].addHandler(f)}),this},unregister:function(o,a){var l=this.queries[o];return l&&(a?l.removeHandler(a):(l.clear(),delete this.queries[o])),this}},xd=s,xd}var Id,B0;function tN(){if(B0)return Id;B0=1;var t=eN();return Id=new t,Id}(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=o(F),n=Wh,r=o(XM),i=o(Qg),s=J;function o(b){return b&&b.__esModule?b:{default:b}}function a(b){"@babel/helpers - typeof";return a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(x){return typeof x}:function(x){return x&&typeof Symbol=="function"&&x.constructor===Symbol&&x!==Symbol.prototype?"symbol":typeof x},a(b)}function l(){return l=Object.assign?Object.assign.bind():function(b){for(var x=1;x<arguments.length;x++){var P=arguments[x];for(var k in P)Object.prototype.hasOwnProperty.call(P,k)&&(b[k]=P[k])}return b},l.apply(this,arguments)}function u(b,x){var P=Object.keys(b);if(Object.getOwnPropertySymbols){var k=Object.getOwnPropertySymbols(b);x&&(k=k.filter(function(A){return Object.getOwnPropertyDescriptor(b,A).enumerable})),P.push.apply(P,k)}return P}function h(b){for(var x=1;x<arguments.length;x++){var P=arguments[x]!=null?arguments[x]:{};x%2?u(Object(P),!0).forEach(function(k){O(b,k,P[k])}):Object.getOwnPropertyDescriptors?Object.defineProperties(b,Object.getOwnPropertyDescriptors(P)):u(Object(P)).forEach(function(k){Object.defineProperty(b,k,Object.getOwnPropertyDescriptor(P,k))})}return b}function f(b,x){if(!(b instanceof x))throw new TypeError("Cannot call a class as a function")}function d(b,x){for(var P=0;P<x.length;P++){var k=x[P];k.enumerable=k.enumerable||!1,k.configurable=!0,"value"in k&&(k.writable=!0),Object.defineProperty(b,D(k.key),k)}}function m(b,x,P){return x&&d(b.prototype,x),Object.defineProperty(b,"prototype",{writable:!1}),b}function _(b,x){if(typeof x!="function"&&x!==null)throw new TypeError("Super expression must either be null or a function");b.prototype=Object.create(x&&x.prototype,{constructor:{value:b,writable:!0,configurable:!0}}),Object.defineProperty(b,"prototype",{writable:!1}),x&&y(b,x)}function y(b,x){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(k,A){return k.__proto__=A,k},y(b,x)}function E(b){var x=S();return function(){var k=C(b),A;if(x){var Z=C(this).constructor;A=Reflect.construct(k,arguments,Z)}else A=k.apply(this,arguments);return w(this,A)}}function w(b,x){if(x&&(a(x)==="object"||typeof x=="function"))return x;if(x!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return v(b)}function v(b){if(b===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b}function S(){try{var b=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(S=function(){return!!b})()}function C(b){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(P){return P.__proto__||Object.getPrototypeOf(P)},C(b)}function O(b,x,P){return x=D(x),x in b?Object.defineProperty(b,x,{value:P,enumerable:!0,configurable:!0,writable:!0}):b[x]=P,b}function D(b){var x=I(b,"string");return a(x)=="symbol"?x:String(x)}function I(b,x){if(a(b)!="object"||!b)return b;var P=b[Symbol.toPrimitive];if(P!==void 0){var k=P.call(b,x||"default");if(a(k)!="object")return k;throw new TypeError("@@toPrimitive must return a primitive value.")}return(x==="string"?String:Number)(b)}var T=(0,s.canUseDOM)()&&tN();t.default=function(b){_(P,b);var x=E(P);function P(k){var A;return f(this,P),A=x.call(this,k),O(v(A),"innerSliderRefHandler",function(Z){return A.innerSlider=Z}),O(v(A),"slickPrev",function(){return A.innerSlider.slickPrev()}),O(v(A),"slickNext",function(){return A.innerSlider.slickNext()}),O(v(A),"slickGoTo",function(Z){var ce=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return A.innerSlider.slickGoTo(Z,ce)}),O(v(A),"slickPause",function(){return A.innerSlider.pause("paused")}),O(v(A),"slickPlay",function(){return A.innerSlider.autoPlay("play")}),A.state={breakpoint:null},A._responsiveMediaHandlers=[],A}return m(P,[{key:"media",value:function(A,Z){T.register(A,Z),this._responsiveMediaHandlers.push({query:A,handler:Z})}},{key:"componentDidMount",value:function(){var A=this;if(this.props.responsive){var Z=this.props.responsive.map(function(de){return de.breakpoint});Z.sort(function(de,Ee){return de-Ee}),Z.forEach(function(de,Ee){var Q;Ee===0?Q=(0,r.default)({minWidth:0,maxWidth:de}):Q=(0,r.default)({minWidth:Z[Ee-1]+1,maxWidth:de}),(0,s.canUseDOM)()&&A.media(Q,function(){A.setState({breakpoint:de})})});var ce=(0,r.default)({minWidth:Z.slice(-1)[0]});(0,s.canUseDOM)()&&this.media(ce,function(){A.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(A){T.unregister(A.query,A.handler)})}},{key:"render",value:function(){var A=this,Z,ce;this.state.breakpoint?(ce=this.props.responsive.filter(function(L){return L.breakpoint===A.state.breakpoint}),Z=ce[0].settings==="unslick"?"unslick":h(h(h({},i.default),this.props),ce[0].settings)):Z=h(h({},i.default),this.props),Z.centerMode&&(Z.slidesToScroll>1,Z.slidesToScroll=1),Z.fade&&(Z.slidesToShow>1,Z.slidesToScroll>1,Z.slidesToShow=1,Z.slidesToScroll=1);var de=e.default.Children.toArray(this.props.children);de=de.filter(function(L){return typeof L=="string"?!!L.trim():!!L}),Z.variableWidth&&(Z.rows>1||Z.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),Z.variableWidth=!1);for(var Ee=[],Q=null,ne=0;ne<de.length;ne+=Z.rows*Z.slidesPerRow){for(var oe=[],_e=ne;_e<ne+Z.rows*Z.slidesPerRow;_e+=Z.slidesPerRow){for(var ae=[],M=_e;M<_e+Z.slidesPerRow&&(Z.variableWidth&&de[M].props.style&&(Q=de[M].props.style.width),!(M>=de.length));M+=1)ae.push(e.default.cloneElement(de[M],{key:100*ne+10*_e+M,tabIndex:-1,style:{width:"".concat(100/Z.slidesPerRow,"%"),display:"inline-block"}}));oe.push(e.default.createElement("div",{key:10*ne+_e},ae))}Z.variableWidth?Ee.push(e.default.createElement("div",{key:ne,style:{width:Q}},oe)):Ee.push(e.default.createElement("div",{key:ne},oe))}if(Z==="unslick"){var z="regular slider "+(this.props.className||"");return e.default.createElement("div",{className:z},de)}else Ee.length<=Z.slidesToShow&&!Z.infinite&&(Z.unslick=!0);return e.default.createElement(n.InnerSlider,l({style:this.props.style,ref:this.innerSliderRefHandler},(0,s.filterSettings)(Z)),Ee)}}]),P}(e.default.Component)})(WS);(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=n(WS);function n(r){return r&&r.__esModule?r:{default:r}}t.default=e.default})(HS);const nN=Rm(HS),rN=()=>{};var $0={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},iN=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},IT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,h=s>>2,f=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(d=64)),r.push(n[h],n[f],n[d],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(xT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):iN(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||f==null)throw new sN;const d=s<<2|a>>4;if(r.push(d),u!==64){const m=a<<4&240|u>>2;if(r.push(m),f!==64){const _=u<<6&192|f;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class sN extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const oN=function(t){const e=xT(t);return IT.encodeByteArray(e,!0)},eh=function(t){return oN(t).replace(/\./g,"")},aN=function(t){try{return IT.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function lN(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const uN=()=>lN().__FIREBASE_DEFAULTS__,cN=()=>{if(typeof process>"u"||typeof $0>"u")return;const t=$0.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},hN=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&aN(t[1]);return e&&JSON.parse(e)},Xg=()=>{try{return rN()||uN()||cN()||hN()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},fN=t=>{var e,n;return(n=(e=Xg())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},dN=t=>{const e=fN(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},RT=()=>{var t;return(t=Xg())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pN{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function mN(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[eh(JSON.stringify(n)),eh(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gN(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _N(){var t;const e=(t=Xg())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function yN(){return!_N()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function vN(){try{return typeof indexedDB=="object"}catch{return!1}}function wN(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EN="FirebaseError";class wo extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=EN,Object.setPrototypeOf(this,wo.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,AT.prototype.create)}}class AT{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?SN(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new wo(i,a,r)}}function SN(t,e){return t.replace(TN,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const TN=/\{\$([^}]+)}/g;function th(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(U0(s)&&U0(o)){if(!th(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function U0(t){return t!==null&&typeof t=="object"}/**
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
 */function no(t){return t&&t._delegate?t._delegate:t}class el{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ci="[DEFAULT]";/**
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
 */class bN{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new pN;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(IN(e))try{this.getOrInitializeService({instanceIdentifier:Ci})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ci){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ci){return this.instances.has(e)}getOptions(e=Ci){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:xN(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ci){return this.component?this.component.multipleInstances?e:Ci:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xN(t){return t===Ci?void 0:t}function IN(t){return t.instantiationMode==="EAGER"}/**
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
 */class RN{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new bN(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ie||(Ie={}));const AN={debug:Ie.DEBUG,verbose:Ie.VERBOSE,info:Ie.INFO,warn:Ie.WARN,error:Ie.ERROR,silent:Ie.SILENT},CN=Ie.INFO,PN={[Ie.DEBUG]:"log",[Ie.VERBOSE]:"log",[Ie.INFO]:"info",[Ie.WARN]:"warn",[Ie.ERROR]:"error"},kN=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=PN[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class CT{constructor(e){this.name=e,this._logLevel=CN,this._logHandler=kN,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?AN[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ie.DEBUG,...e),this._logHandler(this,Ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ie.VERBOSE,...e),this._logHandler(this,Ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ie.INFO,...e),this._logHandler(this,Ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ie.WARN,...e),this._logHandler(this,Ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ie.ERROR,...e),this._logHandler(this,Ie.ERROR,...e)}}const LN=(t,e)=>e.some(n=>t instanceof n);let H0,W0;function ON(){return H0||(H0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function DN(){return W0||(W0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const PT=new WeakMap,om=new WeakMap,kT=new WeakMap,Rd=new WeakMap,Jg=new WeakMap;function MN(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Xr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&PT.set(n,t)}).catch(()=>{}),Jg.set(e,t),e}function NN(t){if(om.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});om.set(t,e)}let am={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return om.get(t);if(e==="objectStoreNames")return t.objectStoreNames||kT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Xr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function VN(t){am=t(am)}function FN(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ad(this),e,...n);return kT.set(r,e.sort?e.sort():[e]),Xr(r)}:DN().includes(t)?function(...e){return t.apply(Ad(this),e),Xr(PT.get(this))}:function(...e){return Xr(t.apply(Ad(this),e))}}function zN(t){return typeof t=="function"?FN(t):(t instanceof IDBTransaction&&NN(t),LN(t,ON())?new Proxy(t,am):t)}function Xr(t){if(t instanceof IDBRequest)return MN(t);if(Rd.has(t))return Rd.get(t);const e=zN(t);return e!==t&&(Rd.set(t,e),Jg.set(e,t)),e}const Ad=t=>Jg.get(t);function jN(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Xr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Xr(o.result),l.oldVersion,l.newVersion,Xr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const BN=["get","getKey","getAll","getAllKeys","count"],$N=["put","add","delete","clear"],Cd=new Map;function q0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Cd.get(e))return Cd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=$N.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||BN.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Cd.set(e,s),s}VN(t=>({...t,get:(e,n,r)=>q0(e,n)||t.get(e,n,r),has:(e,n)=>!!q0(e,n)||t.has(e,n)}));/**
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
 */class UN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(HN(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function HN(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const lm="@firebase/app",K0="0.11.2";/**
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
 */const _r=new CT("@firebase/app"),WN="@firebase/app-compat",qN="@firebase/analytics-compat",KN="@firebase/analytics",GN="@firebase/app-check-compat",QN="@firebase/app-check",YN="@firebase/auth",XN="@firebase/auth-compat",JN="@firebase/database",ZN="@firebase/data-connect",eV="@firebase/database-compat",tV="@firebase/functions",nV="@firebase/functions-compat",rV="@firebase/installations",iV="@firebase/installations-compat",sV="@firebase/messaging",oV="@firebase/messaging-compat",aV="@firebase/performance",lV="@firebase/performance-compat",uV="@firebase/remote-config",cV="@firebase/remote-config-compat",hV="@firebase/storage",fV="@firebase/storage-compat",dV="@firebase/firestore",pV="@firebase/vertexai",mV="@firebase/firestore-compat",gV="firebase",_V="11.4.0";/**
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
 */const um="[DEFAULT]",yV={[lm]:"fire-core",[WN]:"fire-core-compat",[KN]:"fire-analytics",[qN]:"fire-analytics-compat",[QN]:"fire-app-check",[GN]:"fire-app-check-compat",[YN]:"fire-auth",[XN]:"fire-auth-compat",[JN]:"fire-rtdb",[ZN]:"fire-data-connect",[eV]:"fire-rtdb-compat",[tV]:"fire-fn",[nV]:"fire-fn-compat",[rV]:"fire-iid",[iV]:"fire-iid-compat",[sV]:"fire-fcm",[oV]:"fire-fcm-compat",[aV]:"fire-perf",[lV]:"fire-perf-compat",[uV]:"fire-rc",[cV]:"fire-rc-compat",[hV]:"fire-gcs",[fV]:"fire-gcs-compat",[dV]:"fire-fst",[mV]:"fire-fst-compat",[pV]:"fire-vertex","fire-js":"fire-js",[gV]:"fire-js-all"};/**
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
 */const nh=new Map,vV=new Map,cm=new Map;function G0(t,e){try{t.container.addComponent(e)}catch(n){_r.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function rh(t){const e=t.name;if(cm.has(e))return _r.debug(`There were multiple attempts to register component ${e}.`),!1;cm.set(e,t);for(const n of nh.values())G0(n,t);for(const n of vV.values())G0(n,t);return!0}function wV(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function EV(t){return t==null?!1:t.settings!==void 0}/**
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
 */const SV={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Jr=new AT("app","Firebase",SV);/**
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
 */class TV{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new el("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Jr.create("app-deleted",{appName:this._name})}}/**
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
 */const bV=_V;function LT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:um,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Jr.create("bad-app-name",{appName:String(i)});if(n||(n=RT()),!n)throw Jr.create("no-options");const s=nh.get(i);if(s){if(th(n,s.options)&&th(r,s.config))return s;throw Jr.create("duplicate-app",{appName:i})}const o=new RN(i);for(const l of cm.values())o.addComponent(l);const a=new TV(n,r,o);return nh.set(i,a),a}function xV(t=um){const e=nh.get(t);if(!e&&t===um&&RT())return LT();if(!e)throw Jr.create("no-app",{appName:t});return e}function Vs(t,e,n){var r;let i=(r=yV[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_r.warn(a.join(" "));return}rh(new el(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const IV="firebase-heartbeat-database",RV=1,tl="firebase-heartbeat-store";let Pd=null;function OT(){return Pd||(Pd=jN(IV,RV,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(tl)}catch(n){console.warn(n)}}}}).catch(t=>{throw Jr.create("idb-open",{originalErrorMessage:t.message})})),Pd}async function AV(t){try{const n=(await OT()).transaction(tl),r=await n.objectStore(tl).get(DT(t));return await n.done,r}catch(e){if(e instanceof wo)_r.warn(e.message);else{const n=Jr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});_r.warn(n.message)}}}async function Q0(t,e){try{const r=(await OT()).transaction(tl,"readwrite");await r.objectStore(tl).put(e,DT(t)),await r.done}catch(n){if(n instanceof wo)_r.warn(n.message);else{const r=Jr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});_r.warn(r.message)}}}function DT(t){return`${t.name}!${t.options.appId}`}/**
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
 */const CV=1024,PV=30;class kV{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new OV(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Y0();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>PV){const o=DV(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){_r.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Y0(),{heartbeatsToSend:r,unsentEntries:i}=LV(this._heartbeatsCache.heartbeats),s=eh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return _r.warn(n),""}}}function Y0(){return new Date().toISOString().substring(0,10)}function LV(t,e=CV){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),X0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),X0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class OV{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vN()?wN().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await AV(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Q0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Q0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function X0(t){return eh(JSON.stringify({version:2,heartbeats:t})).length}function DV(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function MV(t){rh(new el("platform-logger",e=>new UN(e),"PRIVATE")),rh(new el("heartbeat",e=>new kV(e),"PRIVATE")),Vs(lm,K0,t),Vs(lm,K0,"esm2017"),Vs("fire-js","")}MV("");var J0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zr,MT;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,T){function b(){}b.prototype=T.prototype,I.D=T.prototype,I.prototype=new b,I.prototype.constructor=I,I.C=function(x,P,k){for(var A=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)A[Z-2]=arguments[Z];return T.prototype[P].apply(x,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,T,b){b||(b=0);var x=Array(16);if(typeof T=="string")for(var P=0;16>P;++P)x[P]=T.charCodeAt(b++)|T.charCodeAt(b++)<<8|T.charCodeAt(b++)<<16|T.charCodeAt(b++)<<24;else for(P=0;16>P;++P)x[P]=T[b++]|T[b++]<<8|T[b++]<<16|T[b++]<<24;T=I.g[0],b=I.g[1],P=I.g[2];var k=I.g[3],A=T+(k^b&(P^k))+x[0]+3614090360&4294967295;T=b+(A<<7&4294967295|A>>>25),A=k+(P^T&(b^P))+x[1]+3905402710&4294967295,k=T+(A<<12&4294967295|A>>>20),A=P+(b^k&(T^b))+x[2]+606105819&4294967295,P=k+(A<<17&4294967295|A>>>15),A=b+(T^P&(k^T))+x[3]+3250441966&4294967295,b=P+(A<<22&4294967295|A>>>10),A=T+(k^b&(P^k))+x[4]+4118548399&4294967295,T=b+(A<<7&4294967295|A>>>25),A=k+(P^T&(b^P))+x[5]+1200080426&4294967295,k=T+(A<<12&4294967295|A>>>20),A=P+(b^k&(T^b))+x[6]+2821735955&4294967295,P=k+(A<<17&4294967295|A>>>15),A=b+(T^P&(k^T))+x[7]+4249261313&4294967295,b=P+(A<<22&4294967295|A>>>10),A=T+(k^b&(P^k))+x[8]+1770035416&4294967295,T=b+(A<<7&4294967295|A>>>25),A=k+(P^T&(b^P))+x[9]+2336552879&4294967295,k=T+(A<<12&4294967295|A>>>20),A=P+(b^k&(T^b))+x[10]+4294925233&4294967295,P=k+(A<<17&4294967295|A>>>15),A=b+(T^P&(k^T))+x[11]+2304563134&4294967295,b=P+(A<<22&4294967295|A>>>10),A=T+(k^b&(P^k))+x[12]+1804603682&4294967295,T=b+(A<<7&4294967295|A>>>25),A=k+(P^T&(b^P))+x[13]+4254626195&4294967295,k=T+(A<<12&4294967295|A>>>20),A=P+(b^k&(T^b))+x[14]+2792965006&4294967295,P=k+(A<<17&4294967295|A>>>15),A=b+(T^P&(k^T))+x[15]+1236535329&4294967295,b=P+(A<<22&4294967295|A>>>10),A=T+(P^k&(b^P))+x[1]+4129170786&4294967295,T=b+(A<<5&4294967295|A>>>27),A=k+(b^P&(T^b))+x[6]+3225465664&4294967295,k=T+(A<<9&4294967295|A>>>23),A=P+(T^b&(k^T))+x[11]+643717713&4294967295,P=k+(A<<14&4294967295|A>>>18),A=b+(k^T&(P^k))+x[0]+3921069994&4294967295,b=P+(A<<20&4294967295|A>>>12),A=T+(P^k&(b^P))+x[5]+3593408605&4294967295,T=b+(A<<5&4294967295|A>>>27),A=k+(b^P&(T^b))+x[10]+38016083&4294967295,k=T+(A<<9&4294967295|A>>>23),A=P+(T^b&(k^T))+x[15]+3634488961&4294967295,P=k+(A<<14&4294967295|A>>>18),A=b+(k^T&(P^k))+x[4]+3889429448&4294967295,b=P+(A<<20&4294967295|A>>>12),A=T+(P^k&(b^P))+x[9]+568446438&4294967295,T=b+(A<<5&4294967295|A>>>27),A=k+(b^P&(T^b))+x[14]+3275163606&4294967295,k=T+(A<<9&4294967295|A>>>23),A=P+(T^b&(k^T))+x[3]+4107603335&4294967295,P=k+(A<<14&4294967295|A>>>18),A=b+(k^T&(P^k))+x[8]+1163531501&4294967295,b=P+(A<<20&4294967295|A>>>12),A=T+(P^k&(b^P))+x[13]+2850285829&4294967295,T=b+(A<<5&4294967295|A>>>27),A=k+(b^P&(T^b))+x[2]+4243563512&4294967295,k=T+(A<<9&4294967295|A>>>23),A=P+(T^b&(k^T))+x[7]+1735328473&4294967295,P=k+(A<<14&4294967295|A>>>18),A=b+(k^T&(P^k))+x[12]+2368359562&4294967295,b=P+(A<<20&4294967295|A>>>12),A=T+(b^P^k)+x[5]+4294588738&4294967295,T=b+(A<<4&4294967295|A>>>28),A=k+(T^b^P)+x[8]+2272392833&4294967295,k=T+(A<<11&4294967295|A>>>21),A=P+(k^T^b)+x[11]+1839030562&4294967295,P=k+(A<<16&4294967295|A>>>16),A=b+(P^k^T)+x[14]+4259657740&4294967295,b=P+(A<<23&4294967295|A>>>9),A=T+(b^P^k)+x[1]+2763975236&4294967295,T=b+(A<<4&4294967295|A>>>28),A=k+(T^b^P)+x[4]+1272893353&4294967295,k=T+(A<<11&4294967295|A>>>21),A=P+(k^T^b)+x[7]+4139469664&4294967295,P=k+(A<<16&4294967295|A>>>16),A=b+(P^k^T)+x[10]+3200236656&4294967295,b=P+(A<<23&4294967295|A>>>9),A=T+(b^P^k)+x[13]+681279174&4294967295,T=b+(A<<4&4294967295|A>>>28),A=k+(T^b^P)+x[0]+3936430074&4294967295,k=T+(A<<11&4294967295|A>>>21),A=P+(k^T^b)+x[3]+3572445317&4294967295,P=k+(A<<16&4294967295|A>>>16),A=b+(P^k^T)+x[6]+76029189&4294967295,b=P+(A<<23&4294967295|A>>>9),A=T+(b^P^k)+x[9]+3654602809&4294967295,T=b+(A<<4&4294967295|A>>>28),A=k+(T^b^P)+x[12]+3873151461&4294967295,k=T+(A<<11&4294967295|A>>>21),A=P+(k^T^b)+x[15]+530742520&4294967295,P=k+(A<<16&4294967295|A>>>16),A=b+(P^k^T)+x[2]+3299628645&4294967295,b=P+(A<<23&4294967295|A>>>9),A=T+(P^(b|~k))+x[0]+4096336452&4294967295,T=b+(A<<6&4294967295|A>>>26),A=k+(b^(T|~P))+x[7]+1126891415&4294967295,k=T+(A<<10&4294967295|A>>>22),A=P+(T^(k|~b))+x[14]+2878612391&4294967295,P=k+(A<<15&4294967295|A>>>17),A=b+(k^(P|~T))+x[5]+4237533241&4294967295,b=P+(A<<21&4294967295|A>>>11),A=T+(P^(b|~k))+x[12]+1700485571&4294967295,T=b+(A<<6&4294967295|A>>>26),A=k+(b^(T|~P))+x[3]+2399980690&4294967295,k=T+(A<<10&4294967295|A>>>22),A=P+(T^(k|~b))+x[10]+4293915773&4294967295,P=k+(A<<15&4294967295|A>>>17),A=b+(k^(P|~T))+x[1]+2240044497&4294967295,b=P+(A<<21&4294967295|A>>>11),A=T+(P^(b|~k))+x[8]+1873313359&4294967295,T=b+(A<<6&4294967295|A>>>26),A=k+(b^(T|~P))+x[15]+4264355552&4294967295,k=T+(A<<10&4294967295|A>>>22),A=P+(T^(k|~b))+x[6]+2734768916&4294967295,P=k+(A<<15&4294967295|A>>>17),A=b+(k^(P|~T))+x[13]+1309151649&4294967295,b=P+(A<<21&4294967295|A>>>11),A=T+(P^(b|~k))+x[4]+4149444226&4294967295,T=b+(A<<6&4294967295|A>>>26),A=k+(b^(T|~P))+x[11]+3174756917&4294967295,k=T+(A<<10&4294967295|A>>>22),A=P+(T^(k|~b))+x[2]+718787259&4294967295,P=k+(A<<15&4294967295|A>>>17),A=b+(k^(P|~T))+x[9]+3951481745&4294967295,I.g[0]=I.g[0]+T&4294967295,I.g[1]=I.g[1]+(P+(A<<21&4294967295|A>>>11))&4294967295,I.g[2]=I.g[2]+P&4294967295,I.g[3]=I.g[3]+k&4294967295}r.prototype.u=function(I,T){T===void 0&&(T=I.length);for(var b=T-this.blockSize,x=this.B,P=this.h,k=0;k<T;){if(P==0)for(;k<=b;)i(this,I,k),k+=this.blockSize;if(typeof I=="string"){for(;k<T;)if(x[P++]=I.charCodeAt(k++),P==this.blockSize){i(this,x),P=0;break}}else for(;k<T;)if(x[P++]=I[k++],P==this.blockSize){i(this,x),P=0;break}}this.h=P,this.o+=T},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var T=1;T<I.length-8;++T)I[T]=0;var b=8*this.o;for(T=I.length-8;T<I.length;++T)I[T]=b&255,b/=256;for(this.u(I),I=Array(16),T=b=0;4>T;++T)for(var x=0;32>x;x+=8)I[b++]=this.g[T]>>>x&255;return I};function s(I,T){var b=a;return Object.prototype.hasOwnProperty.call(b,I)?b[I]:b[I]=T(I)}function o(I,T){this.h=T;for(var b=[],x=!0,P=I.length-1;0<=P;P--){var k=I[P]|0;x&&k==T||(b[P]=k,x=!1)}this.g=b}var a={};function l(I){return-128<=I&&128>I?s(I,function(T){return new o([T|0],0>T?-1:0)}):new o([I|0],0>I?-1:0)}function u(I){if(isNaN(I)||!isFinite(I))return f;if(0>I)return E(u(-I));for(var T=[],b=1,x=0;I>=b;x++)T[x]=I/b|0,b*=4294967296;return new o(T,0)}function h(I,T){if(I.length==0)throw Error("number format error: empty string");if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(I.charAt(0)=="-")return E(h(I.substring(1),T));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var b=u(Math.pow(T,8)),x=f,P=0;P<I.length;P+=8){var k=Math.min(8,I.length-P),A=parseInt(I.substring(P,P+k),T);8>k?(k=u(Math.pow(T,k)),x=x.j(k).add(u(A))):(x=x.j(b),x=x.add(u(A)))}return x}var f=l(0),d=l(1),m=l(16777216);t=o.prototype,t.m=function(){if(y(this))return-E(this).m();for(var I=0,T=1,b=0;b<this.g.length;b++){var x=this.i(b);I+=(0<=x?x:4294967296+x)*T,T*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(_(this))return"0";if(y(this))return"-"+E(this).toString(I);for(var T=u(Math.pow(I,6)),b=this,x="";;){var P=C(b,T).g;b=w(b,P.j(T));var k=((0<b.g.length?b.g[0]:b.h)>>>0).toString(I);if(b=P,_(b))return k+x;for(;6>k.length;)k="0"+k;x=k+x}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function _(I){if(I.h!=0)return!1;for(var T=0;T<I.g.length;T++)if(I.g[T]!=0)return!1;return!0}function y(I){return I.h==-1}t.l=function(I){return I=w(this,I),y(I)?-1:_(I)?0:1};function E(I){for(var T=I.g.length,b=[],x=0;x<T;x++)b[x]=~I.g[x];return new o(b,~I.h).add(d)}t.abs=function(){return y(this)?E(this):this},t.add=function(I){for(var T=Math.max(this.g.length,I.g.length),b=[],x=0,P=0;P<=T;P++){var k=x+(this.i(P)&65535)+(I.i(P)&65535),A=(k>>>16)+(this.i(P)>>>16)+(I.i(P)>>>16);x=A>>>16,k&=65535,A&=65535,b[P]=A<<16|k}return new o(b,b[b.length-1]&-2147483648?-1:0)};function w(I,T){return I.add(E(T))}t.j=function(I){if(_(this)||_(I))return f;if(y(this))return y(I)?E(this).j(E(I)):E(E(this).j(I));if(y(I))return E(this.j(E(I)));if(0>this.l(m)&&0>I.l(m))return u(this.m()*I.m());for(var T=this.g.length+I.g.length,b=[],x=0;x<2*T;x++)b[x]=0;for(x=0;x<this.g.length;x++)for(var P=0;P<I.g.length;P++){var k=this.i(x)>>>16,A=this.i(x)&65535,Z=I.i(P)>>>16,ce=I.i(P)&65535;b[2*x+2*P]+=A*ce,v(b,2*x+2*P),b[2*x+2*P+1]+=k*ce,v(b,2*x+2*P+1),b[2*x+2*P+1]+=A*Z,v(b,2*x+2*P+1),b[2*x+2*P+2]+=k*Z,v(b,2*x+2*P+2)}for(x=0;x<T;x++)b[x]=b[2*x+1]<<16|b[2*x];for(x=T;x<2*T;x++)b[x]=0;return new o(b,0)};function v(I,T){for(;(I[T]&65535)!=I[T];)I[T+1]+=I[T]>>>16,I[T]&=65535,T++}function S(I,T){this.g=I,this.h=T}function C(I,T){if(_(T))throw Error("division by zero");if(_(I))return new S(f,f);if(y(I))return T=C(E(I),T),new S(E(T.g),E(T.h));if(y(T))return T=C(I,E(T)),new S(E(T.g),T.h);if(30<I.g.length){if(y(I)||y(T))throw Error("slowDivide_ only works with positive integers.");for(var b=d,x=T;0>=x.l(I);)b=O(b),x=O(x);var P=D(b,1),k=D(x,1);for(x=D(x,2),b=D(b,2);!_(x);){var A=k.add(x);0>=A.l(I)&&(P=P.add(b),k=A),x=D(x,1),b=D(b,1)}return T=w(I,P.j(T)),new S(P,T)}for(P=f;0<=I.l(T);){for(b=Math.max(1,Math.floor(I.m()/T.m())),x=Math.ceil(Math.log(b)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),k=u(b),A=k.j(T);y(A)||0<A.l(I);)b-=x,k=u(b),A=k.j(T);_(k)&&(k=d),P=P.add(k),I=w(I,A)}return new S(P,I)}t.A=function(I){return C(this,I).h},t.and=function(I){for(var T=Math.max(this.g.length,I.g.length),b=[],x=0;x<T;x++)b[x]=this.i(x)&I.i(x);return new o(b,this.h&I.h)},t.or=function(I){for(var T=Math.max(this.g.length,I.g.length),b=[],x=0;x<T;x++)b[x]=this.i(x)|I.i(x);return new o(b,this.h|I.h)},t.xor=function(I){for(var T=Math.max(this.g.length,I.g.length),b=[],x=0;x<T;x++)b[x]=this.i(x)^I.i(x);return new o(b,this.h^I.h)};function O(I){for(var T=I.g.length+1,b=[],x=0;x<T;x++)b[x]=I.i(x)<<1|I.i(x-1)>>>31;return new o(b,I.h)}function D(I,T){var b=T>>5;T%=32;for(var x=I.g.length-b,P=[],k=0;k<x;k++)P[k]=0<T?I.i(k+b)>>>T|I.i(k+b+1)<<32-T:I.i(k+b);return new o(P,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,MT=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,Zr=o}).apply(typeof J0<"u"?J0:typeof self<"u"?self:typeof window<"u"?window:{});var bu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var NT,la,VT,Zu,hm,FT,zT,jT;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,p,g){return c==Array.prototype||c==Object.prototype||(c[p]=g.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof bu=="object"&&bu];for(var p=0;p<c.length;++p){var g=c[p];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=n(this);function i(c,p){if(p)e:{var g=r;c=c.split(".");for(var R=0;R<c.length-1;R++){var N=c[R];if(!(N in g))break e;g=g[N]}c=c[c.length-1],R=g[c],p=p(R),p!=R&&p!=null&&e(g,c,{configurable:!0,writable:!0,value:p})}}function s(c,p){c instanceof String&&(c+="");var g=0,R=!1,N={next:function(){if(!R&&g<c.length){var B=g++;return{value:p(B,c[B]),done:!1}}return R=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}i("Array.prototype.values",function(c){return c||function(){return s(this,function(p,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(c){var p=typeof c;return p=p!="object"?p:c?Array.isArray(c)?"array":p:"null",p=="array"||p=="object"&&typeof c.length=="number"}function u(c){var p=typeof c;return p=="object"&&c!=null||p=="function"}function h(c,p,g){return c.call.apply(c.bind,arguments)}function f(c,p,g){if(!c)throw Error();if(2<arguments.length){var R=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,R),c.apply(p,N)}}return function(){return c.apply(p,arguments)}}function d(c,p,g){return d=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,d.apply(null,arguments)}function m(c,p){var g=Array.prototype.slice.call(arguments,1);return function(){var R=g.slice();return R.push.apply(R,arguments),c.apply(this,R)}}function _(c,p){function g(){}g.prototype=p.prototype,c.aa=p.prototype,c.prototype=new g,c.prototype.constructor=c,c.Qb=function(R,N,B){for(var X=Array(arguments.length-2),Fe=2;Fe<arguments.length;Fe++)X[Fe-2]=arguments[Fe];return p.prototype[N].apply(R,X)}}function y(c){const p=c.length;if(0<p){const g=Array(p);for(let R=0;R<p;R++)g[R]=c[R];return g}return[]}function E(c,p){for(let g=1;g<arguments.length;g++){const R=arguments[g];if(l(R)){const N=c.length||0,B=R.length||0;c.length=N+B;for(let X=0;X<B;X++)c[N+X]=R[X]}else c.push(R)}}class w{constructor(p,g){this.i=p,this.j=g,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function v(c){return/^[\s\xa0]*$/.test(c)}function S(){var c=a.navigator;return c&&(c=c.userAgent)?c:""}function C(c){return C[" "](c),c}C[" "]=function(){};var O=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function D(c,p,g){for(const R in c)p.call(g,c[R],R,c)}function I(c,p){for(const g in c)p.call(void 0,c[g],g,c)}function T(c){const p={};for(const g in c)p[g]=c[g];return p}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(c,p){let g,R;for(let N=1;N<arguments.length;N++){R=arguments[N];for(g in R)c[g]=R[g];for(let B=0;B<b.length;B++)g=b[B],Object.prototype.hasOwnProperty.call(R,g)&&(c[g]=R[g])}}function P(c){var p=1;c=c.split(":");const g=[];for(;0<p&&c.length;)g.push(c.shift()),p--;return c.length&&g.push(c.join(":")),g}function k(c){a.setTimeout(()=>{throw c},0)}function A(){var c=ne;let p=null;return c.g&&(p=c.g,c.g=c.g.next,c.g||(c.h=null),p.next=null),p}class Z{constructor(){this.h=this.g=null}add(p,g){const R=ce.get();R.set(p,g),this.h?this.h.next=R:this.g=R,this.h=R}}var ce=new w(()=>new de,c=>c.reset());class de{constructor(){this.next=this.g=this.h=null}set(p,g){this.h=p,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let Ee,Q=!1,ne=new Z,oe=()=>{const c=a.Promise.resolve(void 0);Ee=()=>{c.then(_e)}};var _e=()=>{for(var c;c=A();){try{c.h.call(c.g)}catch(g){k(g)}var p=ce;p.j(c),100>p.h&&(p.h++,c.next=p.g,p.g=c)}Q=!1};function ae(){this.s=this.s,this.C=this.C}ae.prototype.s=!1,ae.prototype.ma=function(){this.s||(this.s=!0,this.N())},ae.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function M(c,p){this.type=c,this.g=this.target=p,this.defaultPrevented=!1}M.prototype.h=function(){this.defaultPrevented=!0};var z=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var c=!1,p=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const g=()=>{};a.addEventListener("test",g,p),a.removeEventListener("test",g,p)}catch{}return c}();function L(c,p){if(M.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var g=this.type=c.type,R=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=p,p=c.relatedTarget){if(O){e:{try{C(p.nodeName);var N=!0;break e}catch{}N=!1}N||(p=null)}}else g=="mouseover"?p=c.fromElement:g=="mouseout"&&(p=c.toElement);this.relatedTarget=p,R?(this.clientX=R.clientX!==void 0?R.clientX:R.pageX,this.clientY=R.clientY!==void 0?R.clientY:R.pageY,this.screenX=R.screenX||0,this.screenY=R.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:V[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&L.aa.h.call(this)}}_(L,M);var V={2:"touch",3:"pen",4:"mouse"};L.prototype.h=function(){L.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var j="closure_listenable_"+(1e6*Math.random()|0),U=0;function ee(c,p,g,R,N){this.listener=c,this.proxy=null,this.src=p,this.type=g,this.capture=!!R,this.ha=N,this.key=++U,this.da=this.fa=!1}function Y(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function K(c){this.src=c,this.g={},this.h=0}K.prototype.add=function(c,p,g,R,N){var B=c.toString();c=this.g[B],c||(c=this.g[B]=[],this.h++);var X=Oe(c,p,R,N);return-1<X?(p=c[X],g||(p.fa=!1)):(p=new ee(p,this.src,B,!!R,N),p.fa=g,c.push(p)),p};function se(c,p){var g=p.type;if(g in c.g){var R=c.g[g],N=Array.prototype.indexOf.call(R,p,void 0),B;(B=0<=N)&&Array.prototype.splice.call(R,N,1),B&&(Y(p),c.g[g].length==0&&(delete c.g[g],c.h--))}}function Oe(c,p,g,R){for(var N=0;N<c.length;++N){var B=c[N];if(!B.da&&B.listener==p&&B.capture==!!g&&B.ha==R)return N}return-1}var ke="closure_lm_"+(1e6*Math.random()|0),Ce={};function De(c,p,g,R,N){if(Array.isArray(p)){for(var B=0;B<p.length;B++)De(c,p[B],g,R,N);return null}return g=k_(g),c&&c[j]?c.K(p,g,u(R)?!!R.capture:!!R,N):zt(c,p,g,!1,R,N)}function zt(c,p,g,R,N,B){if(!p)throw Error("Invalid event type");var X=u(N)?!!N.capture:!!N,Fe=ns(c);if(Fe||(c[ke]=Fe=new K(c)),g=Fe.add(p,g,R,X,B),g.proxy)return g;if(R=Sr(),g.proxy=R,R.src=c,R.listener=g,c.addEventListener)z||(N=X),N===void 0&&(N=!1),c.addEventListener(p.toString(),R,N);else if(c.attachEvent)c.attachEvent(ut(p.toString()),R);else if(c.addListener&&c.removeListener)c.addListener(R);else throw Error("addEventListener and attachEvent are unavailable.");return g}function Sr(){function c(g){return p.call(c.src,c.listener,g)}const p=Ve;return c}function gi(c,p,g,R,N){if(Array.isArray(p))for(var B=0;B<p.length;B++)gi(c,p[B],g,R,N);else R=u(R)?!!R.capture:!!R,g=k_(g),c&&c[j]?(c=c.i,p=String(p).toString(),p in c.g&&(B=c.g[p],g=Oe(B,g,R,N),-1<g&&(Y(B[g]),Array.prototype.splice.call(B,g,1),B.length==0&&(delete c.g[p],c.h--)))):c&&(c=ns(c))&&(p=c.g[p.toString()],c=-1,p&&(c=Oe(p,g,R,N)),(g=-1<c?p[c]:null)&&Be(g))}function Be(c){if(typeof c!="number"&&c&&!c.da){var p=c.src;if(p&&p[j])se(p.i,c);else{var g=c.type,R=c.proxy;p.removeEventListener?p.removeEventListener(g,R,c.capture):p.detachEvent?p.detachEvent(ut(g),R):p.addListener&&p.removeListener&&p.removeListener(R),(g=ns(p))?(se(g,c),g.h==0&&(g.src=null,p[ke]=null)):Y(c)}}}function ut(c){return c in Ce?Ce[c]:Ce[c]="on"+c}function Ve(c,p){if(c.da)c=!0;else{p=new L(p,this);var g=c.listener,R=c.ha||c.src;c.fa&&Be(c),c=g.call(R,p)}return c}function ns(c){return c=c[ke],c instanceof K?c:null}var hf="__closure_events_fn_"+(1e9*Math.random()>>>0);function k_(c){return typeof c=="function"?c:(c[hf]||(c[hf]=function(p){return c.handleEvent(p)}),c[hf])}function Ct(){ae.call(this),this.i=new K(this),this.M=this,this.F=null}_(Ct,ae),Ct.prototype[j]=!0,Ct.prototype.removeEventListener=function(c,p,g,R){gi(this,c,p,g,R)};function jt(c,p){var g,R=c.F;if(R)for(g=[];R;R=R.F)g.push(R);if(c=c.M,R=p.type||p,typeof p=="string")p=new M(p,c);else if(p instanceof M)p.target=p.target||c;else{var N=p;p=new M(R,c),x(p,N)}if(N=!0,g)for(var B=g.length-1;0<=B;B--){var X=p.g=g[B];N=Rl(X,R,!0,p)&&N}if(X=p.g=c,N=Rl(X,R,!0,p)&&N,N=Rl(X,R,!1,p)&&N,g)for(B=0;B<g.length;B++)X=p.g=g[B],N=Rl(X,R,!1,p)&&N}Ct.prototype.N=function(){if(Ct.aa.N.call(this),this.i){var c=this.i,p;for(p in c.g){for(var g=c.g[p],R=0;R<g.length;R++)Y(g[R]);delete c.g[p],c.h--}}this.F=null},Ct.prototype.K=function(c,p,g,R){return this.i.add(String(c),p,!1,g,R)},Ct.prototype.L=function(c,p,g,R){return this.i.add(String(c),p,!0,g,R)};function Rl(c,p,g,R){if(p=c.i.g[String(p)],!p)return!0;p=p.concat();for(var N=!0,B=0;B<p.length;++B){var X=p[B];if(X&&!X.da&&X.capture==g){var Fe=X.listener,Et=X.ha||X.src;X.fa&&se(c.i,X),N=Fe.call(Et,R)!==!1&&N}}return N&&!R.defaultPrevented}function L_(c,p,g){if(typeof c=="function")g&&(c=d(c,g));else if(c&&typeof c.handleEvent=="function")c=d(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:a.setTimeout(c,p||0)}function O_(c){c.g=L_(()=>{c.g=null,c.i&&(c.i=!1,O_(c))},c.l);const p=c.h;c.h=null,c.m.apply(null,p)}class fx extends ae{constructor(p,g){super(),this.m=p,this.l=g,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:O_(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Io(c){ae.call(this),this.h=c,this.g={}}_(Io,ae);var D_=[];function M_(c){D(c.g,function(p,g){this.g.hasOwnProperty(g)&&Be(p)},c),c.g={}}Io.prototype.N=function(){Io.aa.N.call(this),M_(this)},Io.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ff=a.JSON.stringify,dx=a.JSON.parse,px=class{stringify(c){return a.JSON.stringify(c,void 0)}parse(c){return a.JSON.parse(c,void 0)}};function df(){}df.prototype.h=null;function N_(c){return c.h||(c.h=c.i())}function V_(){}var Ro={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function pf(){M.call(this,"d")}_(pf,M);function mf(){M.call(this,"c")}_(mf,M);var _i={},F_=null;function Al(){return F_=F_||new Ct}_i.La="serverreachability";function z_(c){M.call(this,_i.La,c)}_(z_,M);function Ao(c){const p=Al();jt(p,new z_(p))}_i.STAT_EVENT="statevent";function j_(c,p){M.call(this,_i.STAT_EVENT,c),this.stat=p}_(j_,M);function Bt(c){const p=Al();jt(p,new j_(p,c))}_i.Ma="timingevent";function B_(c,p){M.call(this,_i.Ma,c),this.size=p}_(B_,M);function Co(c,p){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){c()},p)}function Po(){this.g=!0}Po.prototype.xa=function(){this.g=!1};function mx(c,p,g,R,N,B){c.info(function(){if(c.g)if(B)for(var X="",Fe=B.split("&"),Et=0;Et<Fe.length;Et++){var Pe=Fe[Et].split("=");if(1<Pe.length){var Pt=Pe[0];Pe=Pe[1];var kt=Pt.split("_");X=2<=kt.length&&kt[1]=="type"?X+(Pt+"="+Pe+"&"):X+(Pt+"=redacted&")}}else X=null;else X=B;return"XMLHTTP REQ ("+R+") [attempt "+N+"]: "+p+`
`+g+`
`+X})}function gx(c,p,g,R,N,B,X){c.info(function(){return"XMLHTTP RESP ("+R+") [ attempt "+N+"]: "+p+`
`+g+`
`+B+" "+X})}function rs(c,p,g,R){c.info(function(){return"XMLHTTP TEXT ("+p+"): "+yx(c,g)+(R?" "+R:"")})}function _x(c,p){c.info(function(){return"TIMEOUT: "+p})}Po.prototype.info=function(){};function yx(c,p){if(!c.g)return p;if(!p)return null;try{var g=JSON.parse(p);if(g){for(c=0;c<g.length;c++)if(Array.isArray(g[c])){var R=g[c];if(!(2>R.length)){var N=R[1];if(Array.isArray(N)&&!(1>N.length)){var B=N[0];if(B!="noop"&&B!="stop"&&B!="close")for(var X=1;X<N.length;X++)N[X]=""}}}}return ff(g)}catch{return p}}var Cl={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},$_={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},gf;function Pl(){}_(Pl,df),Pl.prototype.g=function(){return new XMLHttpRequest},Pl.prototype.i=function(){return{}},gf=new Pl;function Tr(c,p,g,R){this.j=c,this.i=p,this.l=g,this.R=R||1,this.U=new Io(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new U_}function U_(){this.i=null,this.g="",this.h=!1}var H_={},_f={};function yf(c,p,g){c.L=1,c.v=Dl(Zn(p)),c.m=g,c.P=!0,W_(c,null)}function W_(c,p){c.F=Date.now(),kl(c),c.A=Zn(c.v);var g=c.A,R=c.R;Array.isArray(R)||(R=[String(R)]),sy(g.i,"t",R),c.C=0,g=c.j.J,c.h=new U_,c.g=Ty(c.j,g?p:null,!c.m),0<c.O&&(c.M=new fx(d(c.Y,c,c.g),c.O)),p=c.U,g=c.g,R=c.ca;var N="readystatechange";Array.isArray(N)||(N&&(D_[0]=N.toString()),N=D_);for(var B=0;B<N.length;B++){var X=De(g,N[B],R||p.handleEvent,!1,p.h||p);if(!X)break;p.g[X.key]=X}p=c.H?T(c.H):{},c.m?(c.u||(c.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,p)):(c.u="GET",c.g.ea(c.A,c.u,null,p)),Ao(),mx(c.i,c.u,c.A,c.l,c.R,c.m)}Tr.prototype.ca=function(c){c=c.target;const p=this.M;p&&er(c)==3?p.j():this.Y(c)},Tr.prototype.Y=function(c){try{if(c==this.g)e:{const kt=er(this.g);var p=this.g.Ba();const os=this.g.Z();if(!(3>kt)&&(kt!=3||this.g&&(this.h.h||this.g.oa()||fy(this.g)))){this.J||kt!=4||p==7||(p==8||0>=os?Ao(3):Ao(2)),vf(this);var g=this.g.Z();this.X=g;t:if(q_(this)){var R=fy(this.g);c="";var N=R.length,B=er(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){yi(this),ko(this);var X="";break t}this.h.i=new a.TextDecoder}for(p=0;p<N;p++)this.h.h=!0,c+=this.h.i.decode(R[p],{stream:!(B&&p==N-1)});R.length=0,this.h.g+=c,this.C=0,X=this.h.g}else X=this.g.oa();if(this.o=g==200,gx(this.i,this.u,this.A,this.l,this.R,kt,g),this.o){if(this.T&&!this.K){t:{if(this.g){var Fe,Et=this.g;if((Fe=Et.g?Et.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(Fe)){var Pe=Fe;break t}}Pe=null}if(g=Pe)rs(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,wf(this,g);else{this.o=!1,this.s=3,Bt(12),yi(this),ko(this);break e}}if(this.P){g=!0;let Rn;for(;!this.J&&this.C<X.length;)if(Rn=vx(this,X),Rn==_f){kt==4&&(this.s=4,Bt(14),g=!1),rs(this.i,this.l,null,"[Incomplete Response]");break}else if(Rn==H_){this.s=4,Bt(15),rs(this.i,this.l,X,"[Invalid Chunk]"),g=!1;break}else rs(this.i,this.l,Rn,null),wf(this,Rn);if(q_(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),kt!=4||X.length!=0||this.h.h||(this.s=1,Bt(16),g=!1),this.o=this.o&&g,!g)rs(this.i,this.l,X,"[Invalid Chunked Response]"),yi(this),ko(this);else if(0<X.length&&!this.W){this.W=!0;var Pt=this.j;Pt.g==this&&Pt.ba&&!Pt.M&&(Pt.j.info("Great, no buffering proxy detected. Bytes received: "+X.length),If(Pt),Pt.M=!0,Bt(11))}}else rs(this.i,this.l,X,null),wf(this,X);kt==4&&yi(this),this.o&&!this.J&&(kt==4?vy(this.j,this):(this.o=!1,kl(this)))}else Nx(this.g),g==400&&0<X.indexOf("Unknown SID")?(this.s=3,Bt(12)):(this.s=0,Bt(13)),yi(this),ko(this)}}}catch{}finally{}};function q_(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function vx(c,p){var g=c.C,R=p.indexOf(`
`,g);return R==-1?_f:(g=Number(p.substring(g,R)),isNaN(g)?H_:(R+=1,R+g>p.length?_f:(p=p.slice(R,R+g),c.C=R+g,p)))}Tr.prototype.cancel=function(){this.J=!0,yi(this)};function kl(c){c.S=Date.now()+c.I,K_(c,c.I)}function K_(c,p){if(c.B!=null)throw Error("WatchDog timer not null");c.B=Co(d(c.ba,c),p)}function vf(c){c.B&&(a.clearTimeout(c.B),c.B=null)}Tr.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(_x(this.i,this.A),this.L!=2&&(Ao(),Bt(17)),yi(this),this.s=2,ko(this)):K_(this,this.S-c)};function ko(c){c.j.G==0||c.J||vy(c.j,c)}function yi(c){vf(c);var p=c.M;p&&typeof p.ma=="function"&&p.ma(),c.M=null,M_(c.U),c.g&&(p=c.g,c.g=null,p.abort(),p.ma())}function wf(c,p){try{var g=c.j;if(g.G!=0&&(g.g==c||Ef(g.h,c))){if(!c.K&&Ef(g.h,c)&&g.G==3){try{var R=g.Da.g.parse(p)}catch{R=null}if(Array.isArray(R)&&R.length==3){var N=R;if(N[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<c.F)jl(g),Fl(g);else break e;xf(g),Bt(18)}}else g.za=N[1],0<g.za-g.T&&37500>N[2]&&g.F&&g.v==0&&!g.C&&(g.C=Co(d(g.Za,g),6e3));if(1>=Y_(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else wi(g,11)}else if((c.K||g.g==c)&&jl(g),!v(p))for(N=g.Da.g.parse(p),p=0;p<N.length;p++){let Pe=N[p];if(g.T=Pe[0],Pe=Pe[1],g.G==2)if(Pe[0]=="c"){g.K=Pe[1],g.ia=Pe[2];const Pt=Pe[3];Pt!=null&&(g.la=Pt,g.j.info("VER="+g.la));const kt=Pe[4];kt!=null&&(g.Aa=kt,g.j.info("SVER="+g.Aa));const os=Pe[5];os!=null&&typeof os=="number"&&0<os&&(R=1.5*os,g.L=R,g.j.info("backChannelRequestTimeoutMs_="+R)),R=g;const Rn=c.g;if(Rn){const $l=Rn.g?Rn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if($l){var B=R.h;B.g||$l.indexOf("spdy")==-1&&$l.indexOf("quic")==-1&&$l.indexOf("h2")==-1||(B.j=B.l,B.g=new Set,B.h&&(Sf(B,B.h),B.h=null))}if(R.D){const Rf=Rn.g?Rn.g.getResponseHeader("X-HTTP-Session-Id"):null;Rf&&(R.ya=Rf,$e(R.I,R.D,Rf))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-c.F,g.j.info("Handshake RTT: "+g.R+"ms")),R=g;var X=c;if(R.qa=Sy(R,R.J?R.ia:null,R.W),X.K){X_(R.h,X);var Fe=X,Et=R.L;Et&&(Fe.I=Et),Fe.B&&(vf(Fe),kl(Fe)),R.g=X}else _y(R);0<g.i.length&&zl(g)}else Pe[0]!="stop"&&Pe[0]!="close"||wi(g,7);else g.G==3&&(Pe[0]=="stop"||Pe[0]=="close"?Pe[0]=="stop"?wi(g,7):bf(g):Pe[0]!="noop"&&g.l&&g.l.ta(Pe),g.v=0)}}Ao(4)}catch{}}var wx=class{constructor(c,p){this.g=c,this.map=p}};function G_(c){this.l=c||10,a.PerformanceNavigationTiming?(c=a.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Q_(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Y_(c){return c.h?1:c.g?c.g.size:0}function Ef(c,p){return c.h?c.h==p:c.g?c.g.has(p):!1}function Sf(c,p){c.g?c.g.add(p):c.h=p}function X_(c,p){c.h&&c.h==p?c.h=null:c.g&&c.g.has(p)&&c.g.delete(p)}G_.prototype.cancel=function(){if(this.i=J_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function J_(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let p=c.i;for(const g of c.g.values())p=p.concat(g.D);return p}return y(c.i)}function Ex(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(l(c)){for(var p=[],g=c.length,R=0;R<g;R++)p.push(c[R]);return p}p=[],g=0;for(R in c)p[g++]=c[R];return p}function Sx(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(l(c)||typeof c=="string"){var p=[];c=c.length;for(var g=0;g<c;g++)p.push(g);return p}p=[],g=0;for(const R in c)p[g++]=R;return p}}}function Z_(c,p){if(c.forEach&&typeof c.forEach=="function")c.forEach(p,void 0);else if(l(c)||typeof c=="string")Array.prototype.forEach.call(c,p,void 0);else for(var g=Sx(c),R=Ex(c),N=R.length,B=0;B<N;B++)p.call(void 0,R[B],g&&g[B],c)}var ey=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Tx(c,p){if(c){c=c.split("&");for(var g=0;g<c.length;g++){var R=c[g].indexOf("="),N=null;if(0<=R){var B=c[g].substring(0,R);N=c[g].substring(R+1)}else B=c[g];p(B,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function vi(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof vi){this.h=c.h,Ll(this,c.j),this.o=c.o,this.g=c.g,Ol(this,c.s),this.l=c.l;var p=c.i,g=new Do;g.i=p.i,p.g&&(g.g=new Map(p.g),g.h=p.h),ty(this,g),this.m=c.m}else c&&(p=String(c).match(ey))?(this.h=!1,Ll(this,p[1]||"",!0),this.o=Lo(p[2]||""),this.g=Lo(p[3]||"",!0),Ol(this,p[4]),this.l=Lo(p[5]||"",!0),ty(this,p[6]||"",!0),this.m=Lo(p[7]||"")):(this.h=!1,this.i=new Do(null,this.h))}vi.prototype.toString=function(){var c=[],p=this.j;p&&c.push(Oo(p,ny,!0),":");var g=this.g;return(g||p=="file")&&(c.push("//"),(p=this.o)&&c.push(Oo(p,ny,!0),"@"),c.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&c.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&c.push("/"),c.push(Oo(g,g.charAt(0)=="/"?Ix:xx,!0))),(g=this.i.toString())&&c.push("?",g),(g=this.m)&&c.push("#",Oo(g,Ax)),c.join("")};function Zn(c){return new vi(c)}function Ll(c,p,g){c.j=g?Lo(p,!0):p,c.j&&(c.j=c.j.replace(/:$/,""))}function Ol(c,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);c.s=p}else c.s=null}function ty(c,p,g){p instanceof Do?(c.i=p,Cx(c.i,c.h)):(g||(p=Oo(p,Rx)),c.i=new Do(p,c.h))}function $e(c,p,g){c.i.set(p,g)}function Dl(c){return $e(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Lo(c,p){return c?p?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Oo(c,p,g){return typeof c=="string"?(c=encodeURI(c).replace(p,bx),g&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function bx(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var ny=/[#\/\?@]/g,xx=/[#\?:]/g,Ix=/[#\?]/g,Rx=/[#\?@]/g,Ax=/#/g;function Do(c,p){this.h=this.g=null,this.i=c||null,this.j=!!p}function br(c){c.g||(c.g=new Map,c.h=0,c.i&&Tx(c.i,function(p,g){c.add(decodeURIComponent(p.replace(/\+/g," ")),g)}))}t=Do.prototype,t.add=function(c,p){br(this),this.i=null,c=is(this,c);var g=this.g.get(c);return g||this.g.set(c,g=[]),g.push(p),this.h+=1,this};function ry(c,p){br(c),p=is(c,p),c.g.has(p)&&(c.i=null,c.h-=c.g.get(p).length,c.g.delete(p))}function iy(c,p){return br(c),p=is(c,p),c.g.has(p)}t.forEach=function(c,p){br(this),this.g.forEach(function(g,R){g.forEach(function(N){c.call(p,N,R,this)},this)},this)},t.na=function(){br(this);const c=Array.from(this.g.values()),p=Array.from(this.g.keys()),g=[];for(let R=0;R<p.length;R++){const N=c[R];for(let B=0;B<N.length;B++)g.push(p[R])}return g},t.V=function(c){br(this);let p=[];if(typeof c=="string")iy(this,c)&&(p=p.concat(this.g.get(is(this,c))));else{c=Array.from(this.g.values());for(let g=0;g<c.length;g++)p=p.concat(c[g])}return p},t.set=function(c,p){return br(this),this.i=null,c=is(this,c),iy(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[p]),this.h+=1,this},t.get=function(c,p){return c?(c=this.V(c),0<c.length?String(c[0]):p):p};function sy(c,p,g){ry(c,p),0<g.length&&(c.i=null,c.g.set(is(c,p),y(g)),c.h+=g.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],p=Array.from(this.g.keys());for(var g=0;g<p.length;g++){var R=p[g];const B=encodeURIComponent(String(R)),X=this.V(R);for(R=0;R<X.length;R++){var N=B;X[R]!==""&&(N+="="+encodeURIComponent(String(X[R]))),c.push(N)}}return this.i=c.join("&")};function is(c,p){return p=String(p),c.j&&(p=p.toLowerCase()),p}function Cx(c,p){p&&!c.j&&(br(c),c.i=null,c.g.forEach(function(g,R){var N=R.toLowerCase();R!=N&&(ry(this,R),sy(this,N,g))},c)),c.j=p}function Px(c,p){const g=new Po;if(a.Image){const R=new Image;R.onload=m(xr,g,"TestLoadImage: loaded",!0,p,R),R.onerror=m(xr,g,"TestLoadImage: error",!1,p,R),R.onabort=m(xr,g,"TestLoadImage: abort",!1,p,R),R.ontimeout=m(xr,g,"TestLoadImage: timeout",!1,p,R),a.setTimeout(function(){R.ontimeout&&R.ontimeout()},1e4),R.src=c}else p(!1)}function kx(c,p){const g=new Po,R=new AbortController,N=setTimeout(()=>{R.abort(),xr(g,"TestPingServer: timeout",!1,p)},1e4);fetch(c,{signal:R.signal}).then(B=>{clearTimeout(N),B.ok?xr(g,"TestPingServer: ok",!0,p):xr(g,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(N),xr(g,"TestPingServer: error",!1,p)})}function xr(c,p,g,R,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),R(g)}catch{}}function Lx(){this.g=new px}function Ox(c,p,g){const R=g||"";try{Z_(c,function(N,B){let X=N;u(N)&&(X=ff(N)),p.push(R+B+"="+encodeURIComponent(X))})}catch(N){throw p.push(R+"type="+encodeURIComponent("_badmap")),N}}function Ml(c){this.l=c.Ub||null,this.j=c.eb||!1}_(Ml,df),Ml.prototype.g=function(){return new Nl(this.l,this.j)},Ml.prototype.i=function(c){return function(){return c}}({});function Nl(c,p){Ct.call(this),this.D=c,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}_(Nl,Ct),t=Nl.prototype,t.open=function(c,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=p,this.readyState=1,No(this)},t.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(p.body=c),(this.D||a).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Mo(this)),this.readyState=0},t.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,No(this)),this.g&&(this.readyState=3,No(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;oy(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function oy(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}t.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var p=c.value?c.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!c.done}))&&(this.response=this.responseText+=p)}c.done?Mo(this):No(this),this.readyState==3&&oy(this)}},t.Ra=function(c){this.g&&(this.response=this.responseText=c,Mo(this))},t.Qa=function(c){this.g&&(this.response=c,Mo(this))},t.ga=function(){this.g&&Mo(this)};function Mo(c){c.readyState=4,c.l=null,c.j=null,c.v=null,No(c)}t.setRequestHeader=function(c,p){this.u.append(c,p)},t.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],p=this.h.entries();for(var g=p.next();!g.done;)g=g.value,c.push(g[0]+": "+g[1]),g=p.next();return c.join(`\r
`)};function No(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Nl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function ay(c){let p="";return D(c,function(g,R){p+=R,p+=":",p+=g,p+=`\r
`}),p}function Tf(c,p,g){e:{for(R in g){var R=!1;break e}R=!0}R||(g=ay(g),typeof c=="string"?g!=null&&encodeURIComponent(String(g)):$e(c,p,g))}function nt(c){Ct.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}_(nt,Ct);var Dx=/^https?$/i,Mx=["POST","PUT"];t=nt.prototype,t.Ha=function(c){this.J=c},t.ea=function(c,p,g,R){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);p=p?p.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():gf.g(),this.v=this.o?N_(this.o):N_(gf),this.g.onreadystatechange=d(this.Ea,this);try{this.B=!0,this.g.open(p,String(c),!0),this.B=!1}catch(B){ly(this,B);return}if(c=g||"",g=new Map(this.headers),R)if(Object.getPrototypeOf(R)===Object.prototype)for(var N in R)g.set(N,R[N]);else if(typeof R.keys=="function"&&typeof R.get=="function")for(const B of R.keys())g.set(B,R.get(B));else throw Error("Unknown input type for opt_headers: "+String(R));R=Array.from(g.keys()).find(B=>B.toLowerCase()=="content-type"),N=a.FormData&&c instanceof a.FormData,!(0<=Array.prototype.indexOf.call(Mx,p,void 0))||R||N||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[B,X]of g)this.g.setRequestHeader(B,X);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{hy(this),this.u=!0,this.g.send(c),this.u=!1}catch(B){ly(this,B)}};function ly(c,p){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=p,c.m=5,uy(c),Vl(c)}function uy(c){c.A||(c.A=!0,jt(c,"complete"),jt(c,"error"))}t.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,jt(this,"complete"),jt(this,"abort"),Vl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Vl(this,!0)),nt.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?cy(this):this.bb())},t.bb=function(){cy(this)};function cy(c){if(c.h&&typeof o<"u"&&(!c.v[1]||er(c)!=4||c.Z()!=2)){if(c.u&&er(c)==4)L_(c.Ea,0,c);else if(jt(c,"readystatechange"),er(c)==4){c.h=!1;try{const X=c.Z();e:switch(X){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var g;if(!(g=p)){var R;if(R=X===0){var N=String(c.D).match(ey)[1]||null;!N&&a.self&&a.self.location&&(N=a.self.location.protocol.slice(0,-1)),R=!Dx.test(N?N.toLowerCase():"")}g=R}if(g)jt(c,"complete"),jt(c,"success");else{c.m=6;try{var B=2<er(c)?c.g.statusText:""}catch{B=""}c.l=B+" ["+c.Z()+"]",uy(c)}}finally{Vl(c)}}}}function Vl(c,p){if(c.g){hy(c);const g=c.g,R=c.v[0]?()=>{}:null;c.g=null,c.v=null,p||jt(c,"ready");try{g.onreadystatechange=R}catch{}}}function hy(c){c.I&&(a.clearTimeout(c.I),c.I=null)}t.isActive=function(){return!!this.g};function er(c){return c.g?c.g.readyState:0}t.Z=function(){try{return 2<er(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(c){if(this.g){var p=this.g.responseText;return c&&p.indexOf(c)==0&&(p=p.substring(c.length)),dx(p)}};function fy(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Nx(c){const p={};c=(c.g&&2<=er(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let R=0;R<c.length;R++){if(v(c[R]))continue;var g=P(c[R]);const N=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const B=p[N]||[];p[N]=B,B.push(g)}I(p,function(R){return R.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Vo(c,p,g){return g&&g.internalChannelParams&&g.internalChannelParams[c]||p}function dy(c){this.Aa=0,this.i=[],this.j=new Po,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Vo("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Vo("baseRetryDelayMs",5e3,c),this.cb=Vo("retryDelaySeedMs",1e4,c),this.Wa=Vo("forwardChannelMaxRetries",2,c),this.wa=Vo("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new G_(c&&c.concurrentRequestLimit),this.Da=new Lx,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=dy.prototype,t.la=8,t.G=1,t.connect=function(c,p,g,R){Bt(0),this.W=c,this.H=p||{},g&&R!==void 0&&(this.H.OSID=g,this.H.OAID=R),this.F=this.X,this.I=Sy(this,null,this.W),zl(this)};function bf(c){if(py(c),c.G==3){var p=c.U++,g=Zn(c.I);if($e(g,"SID",c.K),$e(g,"RID",p),$e(g,"TYPE","terminate"),Fo(c,g),p=new Tr(c,c.j,p),p.L=2,p.v=Dl(Zn(g)),g=!1,a.navigator&&a.navigator.sendBeacon)try{g=a.navigator.sendBeacon(p.v.toString(),"")}catch{}!g&&a.Image&&(new Image().src=p.v,g=!0),g||(p.g=Ty(p.j,null),p.g.ea(p.v)),p.F=Date.now(),kl(p)}Ey(c)}function Fl(c){c.g&&(If(c),c.g.cancel(),c.g=null)}function py(c){Fl(c),c.u&&(a.clearTimeout(c.u),c.u=null),jl(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&a.clearTimeout(c.s),c.s=null)}function zl(c){if(!Q_(c.h)&&!c.s){c.s=!0;var p=c.Ga;Ee||oe(),Q||(Ee(),Q=!0),ne.add(p,c),c.B=0}}function Vx(c,p){return Y_(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=p.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=Co(d(c.Ga,c,p),wy(c,c.B)),c.B++,!0)}t.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const N=new Tr(this,this.j,c);let B=this.o;if(this.S&&(B?(B=T(B),x(B,this.S)):B=this.S),this.m!==null||this.O||(N.H=B,B=null),this.P)e:{for(var p=0,g=0;g<this.i.length;g++){t:{var R=this.i[g];if("__data__"in R.map&&(R=R.map.__data__,typeof R=="string")){R=R.length;break t}R=void 0}if(R===void 0)break;if(p+=R,4096<p){p=g;break e}if(p===4096||g===this.i.length-1){p=g+1;break e}}p=1e3}else p=1e3;p=gy(this,N,p),g=Zn(this.I),$e(g,"RID",c),$e(g,"CVER",22),this.D&&$e(g,"X-HTTP-Session-Id",this.D),Fo(this,g),B&&(this.O?p="headers="+encodeURIComponent(String(ay(B)))+"&"+p:this.m&&Tf(g,this.m,B)),Sf(this.h,N),this.Ua&&$e(g,"TYPE","init"),this.P?($e(g,"$req",p),$e(g,"SID","null"),N.T=!0,yf(N,g,null)):yf(N,g,p),this.G=2}}else this.G==3&&(c?my(this,c):this.i.length==0||Q_(this.h)||my(this))};function my(c,p){var g;p?g=p.l:g=c.U++;const R=Zn(c.I);$e(R,"SID",c.K),$e(R,"RID",g),$e(R,"AID",c.T),Fo(c,R),c.m&&c.o&&Tf(R,c.m,c.o),g=new Tr(c,c.j,g,c.B+1),c.m===null&&(g.H=c.o),p&&(c.i=p.D.concat(c.i)),p=gy(c,g,1e3),g.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),Sf(c.h,g),yf(g,R,p)}function Fo(c,p){c.H&&D(c.H,function(g,R){$e(p,R,g)}),c.l&&Z_({},function(g,R){$e(p,R,g)})}function gy(c,p,g){g=Math.min(c.i.length,g);var R=c.l?d(c.l.Na,c.l,c):null;e:{var N=c.i;let B=-1;for(;;){const X=["count="+g];B==-1?0<g?(B=N[0].g,X.push("ofs="+B)):B=0:X.push("ofs="+B);let Fe=!0;for(let Et=0;Et<g;Et++){let Pe=N[Et].g;const Pt=N[Et].map;if(Pe-=B,0>Pe)B=Math.max(0,N[Et].g-100),Fe=!1;else try{Ox(Pt,X,"req"+Pe+"_")}catch{R&&R(Pt)}}if(Fe){R=X.join("&");break e}}}return c=c.i.splice(0,g),p.D=c,R}function _y(c){if(!c.g&&!c.u){c.Y=1;var p=c.Fa;Ee||oe(),Q||(Ee(),Q=!0),ne.add(p,c),c.v=0}}function xf(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=Co(d(c.Fa,c),wy(c,c.v)),c.v++,!0)}t.Fa=function(){if(this.u=null,yy(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=Co(d(this.ab,this),c)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Bt(10),Fl(this),yy(this))};function If(c){c.A!=null&&(a.clearTimeout(c.A),c.A=null)}function yy(c){c.g=new Tr(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var p=Zn(c.qa);$e(p,"RID","rpc"),$e(p,"SID",c.K),$e(p,"AID",c.T),$e(p,"CI",c.F?"0":"1"),!c.F&&c.ja&&$e(p,"TO",c.ja),$e(p,"TYPE","xmlhttp"),Fo(c,p),c.m&&c.o&&Tf(p,c.m,c.o),c.L&&(c.g.I=c.L);var g=c.g;c=c.ia,g.L=1,g.v=Dl(Zn(p)),g.m=null,g.P=!0,W_(g,c)}t.Za=function(){this.C!=null&&(this.C=null,Fl(this),xf(this),Bt(19))};function jl(c){c.C!=null&&(a.clearTimeout(c.C),c.C=null)}function vy(c,p){var g=null;if(c.g==p){jl(c),If(c),c.g=null;var R=2}else if(Ef(c.h,p))g=p.D,X_(c.h,p),R=1;else return;if(c.G!=0){if(p.o)if(R==1){g=p.m?p.m.length:0,p=Date.now()-p.F;var N=c.B;R=Al(),jt(R,new B_(R,g)),zl(c)}else _y(c);else if(N=p.s,N==3||N==0&&0<p.X||!(R==1&&Vx(c,p)||R==2&&xf(c)))switch(g&&0<g.length&&(p=c.h,p.i=p.i.concat(g)),N){case 1:wi(c,5);break;case 4:wi(c,10);break;case 3:wi(c,6);break;default:wi(c,2)}}}function wy(c,p){let g=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(g*=2),g*p}function wi(c,p){if(c.j.info("Error code "+p),p==2){var g=d(c.fb,c),R=c.Xa;const N=!R;R=new vi(R||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Ll(R,"https"),Dl(R),N?Px(R.toString(),g):kx(R.toString(),g)}else Bt(2);c.G=0,c.l&&c.l.sa(p),Ey(c),py(c)}t.fb=function(c){c?(this.j.info("Successfully pinged google.com"),Bt(2)):(this.j.info("Failed to ping google.com"),Bt(1))};function Ey(c){if(c.G=0,c.ka=[],c.l){const p=J_(c.h);(p.length!=0||c.i.length!=0)&&(E(c.ka,p),E(c.ka,c.i),c.h.i.length=0,y(c.i),c.i.length=0),c.l.ra()}}function Sy(c,p,g){var R=g instanceof vi?Zn(g):new vi(g);if(R.g!="")p&&(R.g=p+"."+R.g),Ol(R,R.s);else{var N=a.location;R=N.protocol,p=p?p+"."+N.hostname:N.hostname,N=+N.port;var B=new vi(null);R&&Ll(B,R),p&&(B.g=p),N&&Ol(B,N),g&&(B.l=g),R=B}return g=c.D,p=c.ya,g&&p&&$e(R,g,p),$e(R,"VER",c.la),Fo(c,R),R}function Ty(c,p,g){if(p&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=c.Ca&&!c.pa?new nt(new Ml({eb:g})):new nt(c.pa),p.Ha(c.J),p}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function by(){}t=by.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Bl(){}Bl.prototype.g=function(c,p){return new sn(c,p)};function sn(c,p){Ct.call(this),this.g=new dy(p),this.l=c,this.h=p&&p.messageUrlParams||null,c=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(c?c["X-WebChannel-Content-Type"]=p.messageContentType:c={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(c?c["X-WebChannel-Client-Profile"]=p.va:c={"X-WebChannel-Client-Profile":p.va}),this.g.S=c,(c=p&&p.Sb)&&!v(c)&&(this.g.m=c),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!v(p)&&(this.g.D=p,c=this.h,c!==null&&p in c&&(c=this.h,p in c&&delete c[p])),this.j=new ss(this)}_(sn,Ct),sn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},sn.prototype.close=function(){bf(this.g)},sn.prototype.o=function(c){var p=this.g;if(typeof c=="string"){var g={};g.__data__=c,c=g}else this.u&&(g={},g.__data__=ff(c),c=g);p.i.push(new wx(p.Ya++,c)),p.G==3&&zl(p)},sn.prototype.N=function(){this.g.l=null,delete this.j,bf(this.g),delete this.g,sn.aa.N.call(this)};function xy(c){pf.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var p=c.__sm__;if(p){e:{for(const g in p){c=g;break e}c=void 0}(this.i=c)&&(c=this.i,p=p!==null&&c in p?p[c]:void 0),this.data=p}else this.data=c}_(xy,pf);function Iy(){mf.call(this),this.status=1}_(Iy,mf);function ss(c){this.g=c}_(ss,by),ss.prototype.ua=function(){jt(this.g,"a")},ss.prototype.ta=function(c){jt(this.g,new xy(c))},ss.prototype.sa=function(c){jt(this.g,new Iy)},ss.prototype.ra=function(){jt(this.g,"b")},Bl.prototype.createWebChannel=Bl.prototype.g,sn.prototype.send=sn.prototype.o,sn.prototype.open=sn.prototype.m,sn.prototype.close=sn.prototype.close,jT=function(){return new Bl},zT=function(){return Al()},FT=_i,hm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Cl.NO_ERROR=0,Cl.TIMEOUT=8,Cl.HTTP_ERROR=6,Zu=Cl,$_.COMPLETE="complete",VT=$_,V_.EventType=Ro,Ro.OPEN="a",Ro.CLOSE="b",Ro.ERROR="c",Ro.MESSAGE="d",Ct.prototype.listen=Ct.prototype.K,la=V_,nt.prototype.listenOnce=nt.prototype.L,nt.prototype.getLastError=nt.prototype.Ka,nt.prototype.getLastErrorCode=nt.prototype.Ba,nt.prototype.getStatus=nt.prototype.Z,nt.prototype.getResponseJson=nt.prototype.Oa,nt.prototype.getResponseText=nt.prototype.oa,nt.prototype.send=nt.prototype.ea,nt.prototype.setWithCredentials=nt.prototype.Ha,NT=nt}).apply(typeof bu<"u"?bu:typeof self<"u"?self:typeof window<"u"?window:{});const Z0="@firebase/firestore",e1="4.7.9";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Eo="11.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki=new CT("@firebase/firestore");function cs(){return Ki.logLevel}function te(t,...e){if(Ki.logLevel<=Ie.DEBUG){const n=e.map(Zg);Ki.debug(`Firestore (${Eo}): ${t}`,...n)}}function yr(t,...e){if(Ki.logLevel<=Ie.ERROR){const n=e.map(Zg);Ki.error(`Firestore (${Eo}): ${t}`,...n)}}function ro(t,...e){if(Ki.logLevel<=Ie.WARN){const n=e.map(Zg);Ki.warn(`Firestore (${Eo}): ${t}`,...n)}}function Zg(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function he(t="Unexpected state"){const e=`FIRESTORE (${Eo}) INTERNAL ASSERTION FAILED: `+t;throw yr(e),new Error(e)}function Le(t,e){t||he()}function me(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ie extends wo{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class NV{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Mt.UNAUTHENTICATED))}shutdown(){}}class VV{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class FV{constructor(e){this.t=e,this.currentUser=Mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Le(this.o===void 0);let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new ei;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ei,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ei)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Le(typeof r.accessToken=="string"),new BT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Le(e===null||typeof e=="string"),new Mt(e)}}class zV{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Mt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class jV{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new zV(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class t1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class BV{constructor(e,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,EV(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,n){Le(this.o===void 0);const r=s=>{s.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,te("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new t1(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Le(typeof n.token=="string"),this.R=n.token,new t1(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $V(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=$V(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function Te(t,e){return t<e?-1:t>e?1:0}function io(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n1=-62135596800,r1=1e6;class mt{static now(){return mt.fromMillis(Date.now())}static fromDate(e){return mt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*r1);return new mt(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ie(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ie(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<n1)throw new ie(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ie(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/r1}_compareTo(e){return this.seconds===e.seconds?Te(this.nanoseconds,e.nanoseconds):Te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-n1;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const i1="__name__";class Un{constructor(e,n,r){n===void 0?n=0:n>e.length&&he(),r===void 0?r=e.length-n:r>e.length-n&&he(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Un.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Un?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=Un.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return Math.sign(e.length-n.length)}static compareSegments(e,n){const r=Un.isNumericId(e),i=Un.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?Un.extractNumericId(e).compare(Un.extractNumericId(n)):e<n?-1:e>n?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Zr.fromString(e.substring(4,e.length-2))}}class He extends Un{construct(e,n,r){return new He(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ie(W.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new He(n)}static emptyPath(){return new He([])}}const UV=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class bt extends Un{construct(e,n,r){return new bt(e,n,r)}static isValidIdentifier(e){return UV.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),bt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===i1}static keyField(){return new bt([i1])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new ie(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new ie(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ie(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new ie(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new bt(n)}static emptyPath(){return new bt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const nl=-1;function HV(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=fe.fromTimestamp(r===1e9?new mt(n+1,0):new mt(n,r));return new oi(i,le.empty(),e)}function WV(t){return new oi(t.readTime,t.key,nl)}class oi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new oi(fe.min(),le.empty(),nl)}static max(){return new oi(fe.max(),le.empty(),nl)}}function qV(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=le.comparator(t.documentKey,e.documentKey),n!==0?n:Te(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KV="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class GV{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function So(t){if(t.code!==W.FAILED_PRECONDITION||t.message!==KV)throw t;te("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&he(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new H((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof H?n:H.resolve(n)}catch(n){return H.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):H.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):H.reject(n)}static resolve(e){return new H((n,r)=>{n(e)})}static reject(e){return new H((n,r)=>{r(e)})}static waitFor(e){return new H((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=H.resolve(!1);for(const r of e)n=n.next(i=>i?H.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new H((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(h=>{o[u]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new H((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function QV(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function To(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Yh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Yh.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_=-1;function Xh(t){return t==null}function ih(t){return t===0&&1/t==-1/0}function YV(t){return typeof t=="number"&&Number.isInteger(t)&&!ih(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UT="";function XV(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=s1(e)),e=JV(t.get(n),e);return s1(e)}function JV(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case UT:n+="";break;default:n+=s}}return n}function s1(t){return t+UT+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o1(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ji(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function HT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,n){this.comparator=e,this.root=n||Tt.EMPTY}insert(e,n){return new tt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Tt.BLACK,null,null))}remove(e){return new tt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Tt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xu(this.root,e,this.comparator,!1)}getReverseIterator(){return new xu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xu(this.root,e,this.comparator,!0)}}class xu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Tt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Tt.RED,this.left=i??Tt.EMPTY,this.right=s??Tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Tt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Tt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Tt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw he();const e=this.left.check();if(e!==this.right.check())throw he();return e+(this.isRed()?0:1)}}Tt.EMPTY=null,Tt.RED=!0,Tt.BLACK=!1;Tt.EMPTY=new class{constructor(){this.size=0}get key(){throw he()}get value(){throw he()}get color(){throw he()}get left(){throw he()}get right(){throw he()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Tt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.comparator=e,this.data=new tt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new a1(this.data.getIterator())}getIteratorFrom(e){return new a1(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof gt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new gt(this.comparator);return n.data=e,n}}class a1{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e){this.fields=e,e.sort(bt.comparator)}static empty(){return new Ln([])}unionWith(e){let n=new gt(bt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ln(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return io(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class WT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new WT("Invalid base64 string: "+s):s}}(e);return new At(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new At(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}At.EMPTY_BYTE_STRING=new At("");const ZV=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ai(t){if(Le(!!t),typeof t=="string"){let e=0;const n=ZV.exec(t);if(Le(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:at(t.seconds),nanos:at(t.nanos)}}function at(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function li(t){return typeof t=="string"?At.fromBase64String(t):At.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qT="server_timestamp",KT="__type__",GT="__previous_value__",QT="__local_write_time__";function t_(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[KT])===null||n===void 0?void 0:n.stringValue)===qT}function Jh(t){const e=t.mapValue.fields[GT];return t_(e)?Jh(e):e}function rl(t){const e=ai(t.mapValue.fields[QT].timestampValue);return new mt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eF{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}const sh="(default)";class il{constructor(e,n){this.projectId=e,this.database=n||sh}static empty(){return new il("","")}get isDefaultDatabase(){return this.database===sh}isEqual(e){return e instanceof il&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YT="__type__",XT="__max__",Iu={mapValue:{fields:{__type__:{stringValue:XT}}}},JT="__vector__",oh="value";function ui(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?t_(t)?4:nF(t)?9007199254740991:tF(t)?10:11:he()}function Xn(t,e){if(t===e)return!0;const n=ui(t);if(n!==ui(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return rl(t).isEqual(rl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ai(i.timestampValue),a=ai(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return li(i.bytesValue).isEqual(li(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return at(i.geoPointValue.latitude)===at(s.geoPointValue.latitude)&&at(i.geoPointValue.longitude)===at(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return at(i.integerValue)===at(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=at(i.doubleValue),a=at(s.doubleValue);return o===a?ih(o)===ih(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return io(t.arrayValue.values||[],e.arrayValue.values||[],Xn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(o1(o)!==o1(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Xn(o[l],a[l])))return!1;return!0}(t,e);default:return he()}}function sl(t,e){return(t.values||[]).find(n=>Xn(n,e))!==void 0}function so(t,e){if(t===e)return 0;const n=ui(t),r=ui(e);if(n!==r)return Te(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Te(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=at(s.integerValue||s.doubleValue),l=at(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return l1(t.timestampValue,e.timestampValue);case 4:return l1(rl(t),rl(e));case 5:return Te(t.stringValue,e.stringValue);case 6:return function(s,o){const a=li(s),l=li(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const h=Te(a[u],l[u]);if(h!==0)return h}return Te(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=Te(at(s.latitude),at(o.latitude));return a!==0?a:Te(at(s.longitude),at(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return u1(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,l,u,h;const f=s.fields||{},d=o.fields||{},m=(a=f[oh])===null||a===void 0?void 0:a.arrayValue,_=(l=d[oh])===null||l===void 0?void 0:l.arrayValue,y=Te(((u=m==null?void 0:m.values)===null||u===void 0?void 0:u.length)||0,((h=_==null?void 0:_.values)===null||h===void 0?void 0:h.length)||0);return y!==0?y:u1(m,_)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Iu.mapValue&&o===Iu.mapValue)return 0;if(s===Iu.mapValue)return 1;if(o===Iu.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let f=0;f<l.length&&f<h.length;++f){const d=Te(l[f],h[f]);if(d!==0)return d;const m=so(a[l[f]],u[h[f]]);if(m!==0)return m}return Te(l.length,h.length)}(t.mapValue,e.mapValue);default:throw he()}}function l1(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Te(t,e);const n=ai(t),r=ai(e),i=Te(n.seconds,r.seconds);return i!==0?i:Te(n.nanos,r.nanos)}function u1(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=so(n[i],r[i]);if(s)return s}return Te(n.length,r.length)}function oo(t){return fm(t)}function fm(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ai(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return li(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return le.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=fm(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${fm(n.fields[o])}`;return i+"}"}(t.mapValue):he()}function ec(t){switch(ui(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Jh(t);return e?16+ec(e):16;case 5:return 2*t.stringValue.length;case 6:return li(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+ec(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Ji(r.fields,(s,o)=>{i+=s.length+ec(o)}),i}(t.mapValue);default:throw he()}}function c1(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function dm(t){return!!t&&"integerValue"in t}function n_(t){return!!t&&"arrayValue"in t}function h1(t){return!!t&&"nullValue"in t}function f1(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function tc(t){return!!t&&"mapValue"in t}function tF(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[YT])===null||n===void 0?void 0:n.stringValue)===JT}function xa(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ji(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=xa(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=xa(t.arrayValue.values[n]);return e}return Object.assign({},t)}function nF(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===XT}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e){this.value=e}static empty(){return new wn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!tc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=xa(n)}setAll(e){let n=bt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=xa(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());tc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Xn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];tc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ji(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new wn(xa(this.value))}}function ZT(t){const e=[];return Ji(t.fields,(n,r)=>{const i=new bt([n]);if(tc(r)){const s=ZT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ln(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Vt(e,0,fe.min(),fe.min(),fe.min(),wn.empty(),0)}static newFoundDocument(e,n,r,i){return new Vt(e,1,n,fe.min(),r,i,0)}static newNoDocument(e,n){return new Vt(e,2,n,fe.min(),fe.min(),wn.empty(),0)}static newUnknownDocument(e,n){return new Vt(e,3,n,fe.min(),fe.min(),wn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(fe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=wn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=wn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=fe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Vt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ah{constructor(e,n){this.position=e,this.inclusive=n}}function d1(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=le.comparator(le.fromName(o.referenceValue),n.key):r=so(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function p1(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Xn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class lh{constructor(e,n="asc"){this.field=e,this.dir=n}}function rF(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class eb{}class ft extends eb{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new sF(e,n,r):n==="array-contains"?new lF(e,r):n==="in"?new uF(e,r):n==="not-in"?new cF(e,r):n==="array-contains-any"?new hF(e,r):new ft(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new oF(e,r):new aF(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(so(n,this.value)):n!==null&&ui(this.value)===ui(n)&&this.matchesComparison(so(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return he()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Vn extends eb{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new Vn(e,n)}matches(e){return tb(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function tb(t){return t.op==="and"}function nb(t){return iF(t)&&tb(t)}function iF(t){for(const e of t.filters)if(e instanceof Vn)return!1;return!0}function pm(t){if(t instanceof ft)return t.field.canonicalString()+t.op.toString()+oo(t.value);if(nb(t))return t.filters.map(e=>pm(e)).join(",");{const e=t.filters.map(n=>pm(n)).join(",");return`${t.op}(${e})`}}function rb(t,e){return t instanceof ft?function(r,i){return i instanceof ft&&r.op===i.op&&r.field.isEqual(i.field)&&Xn(r.value,i.value)}(t,e):t instanceof Vn?function(r,i){return i instanceof Vn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&rb(o,i.filters[a]),!0):!1}(t,e):void he()}function ib(t){return t instanceof ft?function(n){return`${n.field.canonicalString()} ${n.op} ${oo(n.value)}`}(t):t instanceof Vn?function(n){return n.op.toString()+" {"+n.getFilters().map(ib).join(" ,")+"}"}(t):"Filter"}class sF extends ft{constructor(e,n,r){super(e,n,r),this.key=le.fromName(r.referenceValue)}matches(e){const n=le.comparator(e.key,this.key);return this.matchesComparison(n)}}class oF extends ft{constructor(e,n){super(e,"in",n),this.keys=sb("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class aF extends ft{constructor(e,n){super(e,"not-in",n),this.keys=sb("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function sb(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>le.fromName(r.referenceValue))}class lF extends ft{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return n_(n)&&sl(n.arrayValue,this.value)}}class uF extends ft{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&sl(this.value.arrayValue,n)}}class cF extends ft{constructor(e,n){super(e,"not-in",n)}matches(e){if(sl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!sl(this.value.arrayValue,n)}}class hF extends ft{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!n_(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>sl(this.value.arrayValue,r))}}/**
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
 */class fF{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.le=null}}function m1(t,e=null,n=[],r=[],i=null,s=null,o=null){return new fF(t,e,n,r,i,s,o)}function r_(t){const e=me(t);if(e.le===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>pm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Xh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>oo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>oo(r)).join(",")),e.le=n}return e.le}function i_(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!rF(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!rb(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!p1(t.startAt,e.startAt)&&p1(t.endAt,e.endAt)}function mm(t){return le.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function dF(t,e,n,r,i,s,o,a){return new Sl(t,e,n,r,i,s,o,a)}function ob(t){return new Sl(t)}function g1(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ab(t){return t.collectionGroup!==null}function Ia(t){const e=me(t);if(e.he===null){e.he=[];const n=new Set;for(const s of e.explicitOrderBy)e.he.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new gt(bt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.he.push(new lh(s,r))}),n.has(bt.keyField().canonicalString())||e.he.push(new lh(bt.keyField(),r))}return e.he}function Kn(t){const e=me(t);return e.Pe||(e.Pe=pF(e,Ia(t))),e.Pe}function pF(t,e){if(t.limitType==="F")return m1(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new lh(i.field,s)});const n=t.endAt?new ah(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ah(t.startAt.position,t.startAt.inclusive):null;return m1(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function gm(t,e){const n=t.filters.concat([e]);return new Sl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function _m(t,e,n){return new Sl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Zh(t,e){return i_(Kn(t),Kn(e))&&t.limitType===e.limitType}function lb(t){return`${r_(Kn(t))}|lt:${t.limitType}`}function hs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>ib(i)).join(", ")}]`),Xh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>oo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>oo(i)).join(",")),`Target(${r})`}(Kn(t))}; limitType=${t.limitType})`}function ef(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):le.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ia(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=d1(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,Ia(r),i)||r.endAt&&!function(o,a,l){const u=d1(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,Ia(r),i))}(t,e)}function mF(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function ub(t){return(e,n)=>{let r=!1;for(const i of Ia(t)){const s=gF(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function gF(t,e,n){const r=t.field.isKeyField()?le.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?so(l,u):he()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return he()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ji(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return HT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _F=new tt(le.comparator);function vr(){return _F}const cb=new tt(le.comparator);function ua(...t){let e=cb;for(const n of t)e=e.insert(n.key,n);return e}function hb(t){let e=cb;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Di(){return Ra()}function fb(){return Ra()}function Ra(){return new Zi(t=>t.toString(),(t,e)=>t.isEqual(e))}const yF=new tt(le.comparator),vF=new gt(le.comparator);function Se(...t){let e=vF;for(const n of t)e=e.add(n);return e}const wF=new gt(Te);function EF(){return wF}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s_(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ih(e)?"-0":e}}function db(t){return{integerValue:""+t}}function SF(t,e){return YV(e)?db(e):s_(t,e)}/**
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
 */class tf{constructor(){this._=void 0}}function TF(t,e,n){return t instanceof uh?function(i,s){const o={fields:{[KT]:{stringValue:qT},[QT]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&t_(s)&&(s=Jh(s)),s&&(o.fields[GT]=s),{mapValue:o}}(n,e):t instanceof ol?mb(t,e):t instanceof al?gb(t,e):function(i,s){const o=pb(i,s),a=_1(o)+_1(i.Ie);return dm(o)&&dm(i.Ie)?db(a):s_(i.serializer,a)}(t,e)}function bF(t,e,n){return t instanceof ol?mb(t,e):t instanceof al?gb(t,e):n}function pb(t,e){return t instanceof ch?function(r){return dm(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class uh extends tf{}class ol extends tf{constructor(e){super(),this.elements=e}}function mb(t,e){const n=_b(e);for(const r of t.elements)n.some(i=>Xn(i,r))||n.push(r);return{arrayValue:{values:n}}}class al extends tf{constructor(e){super(),this.elements=e}}function gb(t,e){let n=_b(e);for(const r of t.elements)n=n.filter(i=>!Xn(i,r));return{arrayValue:{values:n}}}class ch extends tf{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function _1(t){return at(t.integerValue||t.doubleValue)}function _b(t){return n_(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function xF(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ol&&i instanceof ol||r instanceof al&&i instanceof al?io(r.elements,i.elements,Xn):r instanceof ch&&i instanceof ch?Xn(r.Ie,i.Ie):r instanceof uh&&i instanceof uh}(t.transform,e.transform)}class IF{constructor(e,n){this.version=e,this.transformResults=n}}class Gn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Gn}static exists(e){return new Gn(void 0,e)}static updateTime(e){return new Gn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function nc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class nf{}function yb(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new o_(t.key,Gn.none()):new Tl(t.key,t.data,Gn.none());{const n=t.data,r=wn.empty();let i=new gt(bt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new es(t.key,r,new Ln(i.toArray()),Gn.none())}}function RF(t,e,n){t instanceof Tl?function(i,s,o){const a=i.value.clone(),l=v1(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof es?function(i,s,o){if(!nc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=v1(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(vb(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Aa(t,e,n,r){return t instanceof Tl?function(s,o,a,l){if(!nc(s.precondition,o))return a;const u=s.value.clone(),h=w1(s.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof es?function(s,o,a,l){if(!nc(s.precondition,o))return a;const u=w1(s.fieldTransforms,l,o),h=o.data;return h.setAll(vb(s)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return nc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function AF(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=pb(r.transform,i||null);s!=null&&(n===null&&(n=wn.empty()),n.set(r.field,s))}return n||null}function y1(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&io(r,i,(s,o)=>xF(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Tl extends nf{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class es extends nf{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function vb(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function v1(t,e,n){const r=new Map;Le(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,bF(o,a,n[i]))}return r}function w1(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,TF(s,o,e))}return r}class o_ extends nf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class CF extends nf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PF{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&RF(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Aa(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Aa(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=fb();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=yb(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(fe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Se())}isEqual(e){return this.batchId===e.batchId&&io(this.mutations,e.mutations,(n,r)=>y1(n,r))&&io(this.baseMutations,e.baseMutations,(n,r)=>y1(n,r))}}class a_{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Le(e.mutations.length===r.length);let i=function(){return yF}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new a_(e,n,r,i)}}/**
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
 */class kF{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class LF{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ct,xe;function OF(t){switch(t){case W.OK:return he();case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0;default:return he()}}function wb(t){if(t===void 0)return yr("GRPC error has no .code"),W.UNKNOWN;switch(t){case ct.OK:return W.OK;case ct.CANCELLED:return W.CANCELLED;case ct.UNKNOWN:return W.UNKNOWN;case ct.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case ct.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case ct.INTERNAL:return W.INTERNAL;case ct.UNAVAILABLE:return W.UNAVAILABLE;case ct.UNAUTHENTICATED:return W.UNAUTHENTICATED;case ct.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case ct.NOT_FOUND:return W.NOT_FOUND;case ct.ALREADY_EXISTS:return W.ALREADY_EXISTS;case ct.PERMISSION_DENIED:return W.PERMISSION_DENIED;case ct.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case ct.ABORTED:return W.ABORTED;case ct.OUT_OF_RANGE:return W.OUT_OF_RANGE;case ct.UNIMPLEMENTED:return W.UNIMPLEMENTED;case ct.DATA_LOSS:return W.DATA_LOSS;default:return he()}}(xe=ct||(ct={}))[xe.OK=0]="OK",xe[xe.CANCELLED=1]="CANCELLED",xe[xe.UNKNOWN=2]="UNKNOWN",xe[xe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",xe[xe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",xe[xe.NOT_FOUND=5]="NOT_FOUND",xe[xe.ALREADY_EXISTS=6]="ALREADY_EXISTS",xe[xe.PERMISSION_DENIED=7]="PERMISSION_DENIED",xe[xe.UNAUTHENTICATED=16]="UNAUTHENTICATED",xe[xe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",xe[xe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",xe[xe.ABORTED=10]="ABORTED",xe[xe.OUT_OF_RANGE=11]="OUT_OF_RANGE",xe[xe.UNIMPLEMENTED=12]="UNIMPLEMENTED",xe[xe.INTERNAL=13]="INTERNAL",xe[xe.UNAVAILABLE=14]="UNAVAILABLE",xe[xe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function DF(){return new TextEncoder}/**
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
 */const MF=new Zr([4294967295,4294967295],0);function E1(t){const e=DF().encode(t),n=new MT;return n.update(e),new Uint8Array(n.digest())}function S1(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Zr([n,r],0),new Zr([i,s],0)]}class l_{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ca(`Invalid padding: ${n}`);if(r<0)throw new ca(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ca(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ca(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*e.length-n,this.de=Zr.fromNumber(this.Ee)}Ae(e,n,r){let i=e.add(n.multiply(Zr.fromNumber(r)));return i.compare(MF)===1&&(i=new Zr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const n=E1(e),[r,i]=S1(n);for(let s=0;s<this.hashCount;s++){const o=this.Ae(r,i,s);if(!this.Re(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new l_(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ee===0)return;const n=E1(e),[r,i]=S1(n);for(let s=0;s<this.hashCount;s++){const o=this.Ae(r,i,s);this.Ve(o)}}Ve(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ca extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,bl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new rf(fe.min(),i,new tt(Te),vr(),Se())}}class bl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new bl(r,n,Se(),Se(),Se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e,n,r,i){this.me=e,this.removedTargetIds=n,this.key=r,this.fe=i}}class Eb{constructor(e,n){this.targetId=e,this.ge=n}}class Sb{constructor(e,n,r=At.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class T1{constructor(){this.pe=0,this.ye=b1(),this.we=At.EMPTY_BYTE_STRING,this.be=!1,this.Se=!0}get current(){return this.be}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.we=e)}Fe(){let e=Se(),n=Se(),r=Se();return this.ye.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:he()}}),new bl(this.we,this.be,e,n,r)}Me(){this.Se=!1,this.ye=b1()}xe(e,n){this.Se=!0,this.ye=this.ye.insert(e,n)}Oe(e){this.Se=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,Le(this.pe>=0)}Le(){this.Se=!0,this.be=!0}}class NF{constructor(e){this.ke=e,this.qe=new Map,this.Qe=vr(),this.$e=Ru(),this.Ke=Ru(),this.Ue=new tt(Te)}We(e){for(const n of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(n,e.fe):this.ze(n,e.key,e.fe);for(const n of e.removedTargetIds)this.ze(n,e.key,e.fe)}je(e){this.forEachTarget(e,n=>{const r=this.He(n);switch(e.state){case 0:this.Je(n)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(n);break;case 3:this.Je(n)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Ce(e.resumeToken));break;default:he()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qe.forEach((r,i)=>{this.Je(i)&&n(i)})}Ze(e){const n=e.targetId,r=e.ge.count,i=this.Xe(n);if(i){const s=i.target;if(mm(s))if(r===0){const o=new le(s.path);this.ze(n,o,Vt.newNoDocument(o,fe.min()))}else Le(r===1);else{const o=this.et(n);if(o!==r){const a=this.tt(e),l=a?this.nt(a,e,o):1;if(l!==0){this.Ye(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(n,u)}}}}}tt(e){const n=e.ge.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=li(r).toUint8Array()}catch(l){if(l instanceof WT)return ro("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new l_(o,i,s)}catch(l){return ro(l instanceof ca?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ee===0?null:a}nt(e,n,r){return n.ge.count===r-this.st(e,n.targetId)?0:2}st(e,n){const r=this.ke.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.ke.it(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.ze(n,s,null),i++)}),i}ot(e){const n=new Map;this.qe.forEach((s,o)=>{const a=this.Xe(o);if(a){if(s.current&&mm(a.target)){const l=new le(a.target.path);this._t(l).has(o)||this.ut(o,l)||this.ze(o,l,Vt.newNoDocument(l,e))}s.ve&&(n.set(o,s.Fe()),s.Me())}});let r=Se();this.Ke.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xe(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Qe.forEach((s,o)=>o.setReadTime(e));const i=new rf(e,n,this.Ue,this.Qe,r);return this.Qe=vr(),this.$e=Ru(),this.Ke=Ru(),this.Ue=new tt(Te),i}Ge(e,n){if(!this.Je(e))return;const r=this.ut(e,n.key)?2:0;this.He(e).xe(n.key,r),this.Qe=this.Qe.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e)),this.Ke=this.Ke.insert(n.key,this.ct(n.key).add(e))}ze(e,n,r){if(!this.Je(e))return;const i=this.He(e);this.ut(e,n)?i.xe(n,1):i.Oe(n),this.Ke=this.Ke.insert(n,this.ct(n).delete(e)),this.Ke=this.Ke.insert(n,this.ct(n).add(e)),r&&(this.Qe=this.Qe.insert(n,r))}removeTarget(e){this.qe.delete(e)}et(e){const n=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let n=this.qe.get(e);return n||(n=new T1,this.qe.set(e,n)),n}ct(e){let n=this.Ke.get(e);return n||(n=new gt(Te),this.Ke=this.Ke.insert(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new gt(Te),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||te("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.qe.get(e);return n&&n.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new T1),this.ke.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ut(e,n){return this.ke.getRemoteKeysForTarget(e).has(n)}}function Ru(){return new tt(le.comparator)}function b1(){return new tt(le.comparator)}const VF={asc:"ASCENDING",desc:"DESCENDING"},FF={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},zF={and:"AND",or:"OR"};class jF{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ym(t,e){return t.useProto3Json||Xh(e)?e:{value:e}}function hh(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Tb(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function BF(t,e){return hh(t,e.toTimestamp())}function Qn(t){return Le(!!t),fe.fromTimestamp(function(n){const r=ai(n);return new mt(r.seconds,r.nanos)}(t))}function u_(t,e){return vm(t,e).canonicalString()}function vm(t,e){const n=function(i){return new He(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function bb(t){const e=He.fromString(t);return Le(Cb(e)),e}function wm(t,e){return u_(t.databaseId,e.path)}function kd(t,e){const n=bb(e);if(n.get(1)!==t.databaseId.projectId)throw new ie(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ie(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new le(Ib(n))}function xb(t,e){return u_(t.databaseId,e)}function $F(t){const e=bb(t);return e.length===4?He.emptyPath():Ib(e)}function Em(t){return new He(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ib(t){return Le(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function x1(t,e,n){return{name:wm(t,e),fields:n.value.mapValue.fields}}function UF(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:he()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,h){return u.useProto3Json?(Le(h===void 0||typeof h=="string"),At.fromBase64String(h||"")):(Le(h===void 0||h instanceof Buffer||h instanceof Uint8Array),At.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?W.UNKNOWN:wb(u.code);return new ie(h,u.message||"")}(o);n=new Sb(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=kd(t,r.document.name),s=Qn(r.document.updateTime),o=r.document.createTime?Qn(r.document.createTime):fe.min(),a=new wn({mapValue:{fields:r.document.fields}}),l=Vt.newFoundDocument(i,s,o,a),u=r.targetIds||[],h=r.removedTargetIds||[];n=new rc(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=kd(t,r.document),s=r.readTime?Qn(r.readTime):fe.min(),o=Vt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new rc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=kd(t,r.document),s=r.removedTargetIds||[];n=new rc([],s,i,null)}else{if(!("filter"in e))return he();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new LF(i,s),a=r.targetId;n=new Eb(a,o)}}return n}function HF(t,e){let n;if(e instanceof Tl)n={update:x1(t,e.key,e.value)};else if(e instanceof o_)n={delete:wm(t,e.key)};else if(e instanceof es)n={update:x1(t,e.key,e.data),updateMask:ZF(e.fieldMask)};else{if(!(e instanceof CF))return he();n={verify:wm(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof uh)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ol)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof al)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof ch)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw he()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:BF(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:he()}(t,e.precondition)),n}function WF(t,e){return t&&t.length>0?(Le(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Qn(i.updateTime):Qn(s);return o.isEqual(fe.min())&&(o=Qn(s)),new IF(o,i.transformResults||[])}(n,e))):[]}function qF(t,e){return{documents:[xb(t,e.path)]}}function KF(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=xb(t,i);const s=function(u){if(u.length!==0)return Ab(Vn.create(u,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(h=>function(d){return{field:fs(d.field),direction:YF(d.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=ym(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ht:n,parent:i}}function GF(t){let e=$F(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Le(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(f){const d=Rb(f);return d instanceof Vn&&nb(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(d=>function(_){return new lh(ds(_.field),function(E){switch(E){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(f){let d;return d=typeof f=="object"?f.value:f,Xh(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(f){const d=!!f.before,m=f.values||[];return new ah(m,d)}(n.startAt));let u=null;return n.endAt&&(u=function(f){const d=!f.before,m=f.values||[];return new ah(m,d)}(n.endAt)),dF(e,i,o,s,a,"F",l,u)}function QF(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return he()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Rb(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ds(n.unaryFilter.field);return ft.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ds(n.unaryFilter.field);return ft.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ds(n.unaryFilter.field);return ft.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ds(n.unaryFilter.field);return ft.create(o,"!=",{nullValue:"NULL_VALUE"});default:return he()}}(t):t.fieldFilter!==void 0?function(n){return ft.create(ds(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return he()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Vn.create(n.compositeFilter.filters.map(r=>Rb(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return he()}}(n.compositeFilter.op))}(t):he()}function YF(t){return VF[t]}function XF(t){return FF[t]}function JF(t){return zF[t]}function fs(t){return{fieldPath:t.canonicalString()}}function ds(t){return bt.fromServerFormat(t.fieldPath)}function Ab(t){return t instanceof ft?function(n){if(n.op==="=="){if(f1(n.value))return{unaryFilter:{field:fs(n.field),op:"IS_NAN"}};if(h1(n.value))return{unaryFilter:{field:fs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(f1(n.value))return{unaryFilter:{field:fs(n.field),op:"IS_NOT_NAN"}};if(h1(n.value))return{unaryFilter:{field:fs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:fs(n.field),op:XF(n.op),value:n.value}}}(t):t instanceof Vn?function(n){const r=n.getFilters().map(i=>Ab(i));return r.length===1?r[0]:{compositeFilter:{op:JF(n.op),filters:r}}}(t):he()}function ZF(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Cb(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e,n,r,i,s=fe.min(),o=fe.min(),a=At.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Br(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Br(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Br(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Br(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e4{constructor(e){this.Tt=e}}function t4(t){const e=GF({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?_m(e,e.limit,"L"):e}/**
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
 */class n4{constructor(){this.Tn=new r4}addToCollectionParentIndex(e,n){return this.Tn.add(n),H.resolve()}getCollectionParents(e,n){return H.resolve(this.Tn.getEntries(n))}addFieldIndex(e,n){return H.resolve()}deleteFieldIndex(e,n){return H.resolve()}deleteAllFieldIndexes(e){return H.resolve()}createTargetIndexes(e,n){return H.resolve()}getDocumentsMatchingTarget(e,n){return H.resolve(null)}getIndexType(e,n){return H.resolve(0)}getFieldIndexes(e,n){return H.resolve([])}getNextCollectionGroupToUpdate(e){return H.resolve(null)}getMinOffset(e,n){return H.resolve(oi.min())}getMinOffsetFromCollectionGroup(e,n){return H.resolve(oi.min())}updateCollectionGroup(e,n,r){return H.resolve()}updateIndexEntries(e,n){return H.resolve()}}class r4{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new gt(He.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new gt(He.comparator)).toArray()}}/**
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
 */const I1={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Pb=41943040;class Yt{static withCacheSize(e){return new Yt(e,Yt.DEFAULT_COLLECTION_PERCENTILE,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yt.DEFAULT_COLLECTION_PERCENTILE=10,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Yt.DEFAULT=new Yt(Pb,Yt.DEFAULT_COLLECTION_PERCENTILE,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Yt.DISABLED=new Yt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new ao(0)}static Un(){return new ao(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R1="LruGarbageCollector",i4=1048576;function A1([t,e],[n,r]){const i=Te(t,n);return i===0?Te(e,r):i}class s4{constructor(e){this.Hn=e,this.buffer=new gt(A1),this.Jn=0}Yn(){return++this.Jn}Zn(e){const n=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();A1(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class o4{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){te(R1,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){To(n)?te(R1,"Ignoring IndexedDB error during garbage collection: ",n):await So(n)}await this.er(3e5)})}}class a4{constructor(e,n){this.tr=e,this.params=n}calculateTargetCount(e,n){return this.tr.nr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return H.resolve(Yh.ae);const r=new s4(n);return this.tr.forEachTarget(e,i=>r.Zn(i.sequenceNumber)).next(()=>this.tr.rr(e,i=>r.Zn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.tr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.tr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(te("LruGarbageCollector","Garbage collection skipped; disabled"),H.resolve(I1)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(te("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),I1):this.ir(e,n))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,n){let r,i,s,o,a,l,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(te("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(r=f,a=Date.now(),this.removeTargets(e,r,n))).next(f=>(s=f,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(u=Date.now(),cs()<=Ie.DEBUG&&te("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${f} documents in `+(u-l)+`ms
Total Duration: ${u-h}ms`),H.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:f})))}}function l4(t,e){return new a4(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u4{constructor(){this.changes=new Zi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Vt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?H.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class c4{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h4{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Aa(r.mutation,i,Ln.empty(),mt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Se()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Se()){const i=Di();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ua();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Di();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Se()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=vr();const o=Ra(),a=function(){return Ra()}();return n.forEach((l,u)=>{const h=r.get(u.key);i.has(u.key)&&(h===void 0||h.mutation instanceof es)?s=s.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),Aa(h.mutation,u,h.mutation.getFieldMask(),mt.now())):o.set(u.key,Ln.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var f;return a.set(u,new c4(h,(f=o.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ra();let i=new tt((o,a)=>o-a),s=Se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let h=r.get(l)||Ln.empty();h=a.applyToLocalView(u,h),r.set(l,h);const f=(i.get(a.batchId)||Se()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,h=l.value,f=fb();h.forEach(d=>{if(!s.has(d)){const m=yb(n.get(d),r.get(d));m!==null&&f.set(d,m),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return H.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return le.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ab(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):H.resolve(Di());let a=nl,l=s;return o.next(u=>H.forEach(u,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(h)?H.resolve():this.remoteDocumentCache.getEntry(e,h).next(d=>{l=l.insert(h,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,Se())).next(h=>({batchId:a,changes:hb(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new le(n)).next(r=>{let i=ua();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=ua();return this.indexManager.getCollectionParents(e,s).next(a=>H.forEach(a,l=>{const u=function(f,d){return new Sl(d,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(h=>{h.forEach((f,d)=>{o=o.insert(f,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,Vt.newInvalidDocument(h)))});let a=ua();return o.forEach((l,u)=>{const h=s.get(l);h!==void 0&&Aa(h.mutation,u,Ln.empty(),mt.now()),ef(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f4{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,n){return H.resolve(this.dr.get(n))}saveBundleMetadata(e,n){return this.dr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Qn(i.createTime)}}(n)),H.resolve()}getNamedQuery(e,n){return H.resolve(this.Ar.get(n))}saveNamedQuery(e,n){return this.Ar.set(n.name,function(i){return{name:i.name,query:t4(i.bundledQuery),readTime:Qn(i.readTime)}}(n)),H.resolve()}}/**
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
 */class d4{constructor(){this.overlays=new tt(le.comparator),this.Rr=new Map}getOverlay(e,n){return H.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Di();return H.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.Et(e,n,s)}),H.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Rr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Rr.delete(r)),H.resolve()}getOverlaysForCollection(e,n,r){const i=Di(),s=n.length+1,o=new le(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return H.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new tt((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=s.get(u.largestBatchId);h===null&&(h=Di(),s=s.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=Di(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=i)););return H.resolve(a)}Et(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Rr.get(i.largestBatchId).delete(r.key);this.Rr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new kF(n,r));let s=this.Rr.get(n);s===void 0&&(s=Se(),this.Rr.set(n,s)),this.Rr.set(n,s.add(r.key))}}/**
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
 */class p4{constructor(){this.sessionToken=At.EMPTY_BYTE_STRING}getSessionToken(e){return H.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,H.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(){this.Vr=new gt(_t.mr),this.gr=new gt(_t.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,n){const r=new _t(e,n);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.wr(new _t(e,n))}br(e,n){e.forEach(r=>this.removeReference(r,n))}Sr(e){const n=new le(new He([])),r=new _t(n,e),i=new _t(n,e+1),s=[];return this.gr.forEachInRange([r,i],o=>{this.wr(o),s.push(o.key)}),s}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const n=new le(new He([])),r=new _t(n,e),i=new _t(n,e+1);let s=Se();return this.gr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new _t(e,0),r=this.Vr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class _t{constructor(e,n){this.key=e,this.Cr=n}static mr(e,n){return le.comparator(e.key,n.key)||Te(e.Cr,n.Cr)}static pr(e,n){return Te(e.Cr,n.Cr)||le.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m4{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Fr=1,this.Mr=new gt(_t.mr)}checkEmpty(e){return H.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new PF(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Mr=this.Mr.add(new _t(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return H.resolve(o)}lookupMutationBatch(e,n){return H.resolve(this.Or(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Nr(r),s=i<0?0:i;return H.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return H.resolve(this.mutationQueue.length===0?e_:this.Fr-1)}getAllMutationBatches(e){return H.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new _t(n,0),i=new _t(n,Number.POSITIVE_INFINITY),s=[];return this.Mr.forEachInRange([r,i],o=>{const a=this.Or(o.Cr);s.push(a)}),H.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new gt(Te);return n.forEach(i=>{const s=new _t(i,0),o=new _t(i,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([s,o],a=>{r=r.add(a.Cr)})}),H.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;le.isDocumentKey(s)||(s=s.child(""));const o=new _t(new le(s),0);let a=new gt(Te);return this.Mr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.Cr)),!0)},o),H.resolve(this.Br(a))}Br(e){const n=[];return e.forEach(r=>{const i=this.Or(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Le(this.Lr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return H.forEach(n.mutations,i=>{const s=new _t(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,n){const r=new _t(n,0),i=this.Mr.firstAfterOrEqual(r);return H.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,H.resolve()}Lr(e,n){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const n=this.Nr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g4{constructor(e){this.kr=e,this.docs=function(){return new tt(le.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.kr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return H.resolve(r?r.document.mutableCopy():Vt.newInvalidDocument(n))}getEntries(e,n){let r=vr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Vt.newInvalidDocument(i))}),H.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=vr();const o=n.path,a=new le(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||qV(WV(h),r)<=0||(i.has(h.key)||ef(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return H.resolve(s)}getAllFromCollectionGroup(e,n,r,i){he()}qr(e,n){return H.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new _4(this)}getSize(e){return H.resolve(this.size)}}class _4 extends u4{constructor(e){super(),this.Ir=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Ir.addEntry(e,i)):this.Ir.removeEntry(r)}),H.waitFor(n)}getFromCache(e,n){return this.Ir.getEntry(e,n)}getAllFromCache(e,n){return this.Ir.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y4{constructor(e){this.persistence=e,this.Qr=new Zi(n=>r_(n),i_),this.lastRemoteSnapshotVersion=fe.min(),this.highestTargetId=0,this.$r=0,this.Kr=new c_,this.targetCount=0,this.Ur=ao.Kn()}forEachTarget(e,n){return this.Qr.forEach((r,i)=>n(i)),H.resolve()}getLastRemoteSnapshotVersion(e){return H.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return H.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),H.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.$r&&(this.$r=n),H.resolve()}zn(e){this.Qr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ur=new ao(n),this.highestTargetId=n),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,n){return this.zn(n),this.targetCount+=1,H.resolve()}updateTargetData(e,n){return this.zn(n),H.resolve()}removeTargetData(e,n){return this.Qr.delete(n.target),this.Kr.Sr(n.targetId),this.targetCount-=1,H.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Qr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Qr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),H.waitFor(s).next(()=>i)}getTargetCount(e){return H.resolve(this.targetCount)}getTargetData(e,n){const r=this.Qr.get(n)||null;return H.resolve(r)}addMatchingKeys(e,n,r){return this.Kr.yr(n,r),H.resolve()}removeMatchingKeys(e,n,r){this.Kr.br(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),H.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Kr.Sr(n),H.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Kr.vr(n);return H.resolve(r)}containsKey(e,n){return H.resolve(this.Kr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kb{constructor(e,n){this.Wr={},this.overlays={},this.Gr=new Yh(0),this.zr=!1,this.zr=!0,this.jr=new p4,this.referenceDelegate=e(this),this.Hr=new y4(this),this.indexManager=new n4,this.remoteDocumentCache=function(i){return new g4(i)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new e4(n),this.Yr=new f4(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new d4,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Wr[e.toKey()];return r||(r=new m4(n,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,n,r){te("MemoryPersistence","Starting transaction:",e);const i=new v4(this.Gr.next());return this.referenceDelegate.Zr(),r(i).next(s=>this.referenceDelegate.Xr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}ei(e,n){return H.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,n)))}}class v4 extends GV{constructor(e){super(),this.currentSequenceNumber=e}}class h_{constructor(e){this.persistence=e,this.ti=new c_,this.ni=null}static ri(e){return new h_(e)}get ii(){if(this.ni)return this.ni;throw he()}addReference(e,n,r){return this.ti.addReference(r,n),this.ii.delete(r.toString()),H.resolve()}removeReference(e,n,r){return this.ti.removeReference(r,n),this.ii.add(r.toString()),H.resolve()}markPotentiallyOrphaned(e,n){return this.ii.add(n.toString()),H.resolve()}removeTarget(e,n){this.ti.Sr(n.targetId).forEach(i=>this.ii.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.ii.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Zr(){this.ni=new Set}Xr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return H.forEach(this.ii,r=>{const i=le.fromPath(r);return this.si(e,i).next(s=>{s||n.removeEntry(i,fe.min())})}).next(()=>(this.ni=null,n.apply(e)))}updateLimboDocument(e,n){return this.si(e,n).next(r=>{r?this.ii.delete(n.toString()):this.ii.add(n.toString())})}Jr(e){return 0}si(e,n){return H.or([()=>H.resolve(this.ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.ei(e,n)])}}class fh{constructor(e,n){this.persistence=e,this.oi=new Zi(r=>XV(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=l4(this,n)}static ri(e,n){return new fh(e,n)}Zr(){}Xr(e){return H.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}nr(e){const n=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}sr(e){let n=0;return this.rr(e,r=>{n++}).next(()=>n)}rr(e,n){return H.forEach(this.oi,(r,i)=>this.ar(e,r,i).next(s=>s?H.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.qr(e,o=>this.ar(e,o,n).next(a=>{a||(r++,s.removeEntry(o,fe.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.oi.set(n,e.currentSequenceNumber),H.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),H.resolve()}removeReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),H.resolve()}updateLimboDocument(e,n){return this.oi.set(n,e.currentSequenceNumber),H.resolve()}Jr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ec(e.data.value)),n}ar(e,n,r){return H.or([()=>this.persistence.ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.oi.get(n);return H.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Hi=r,this.Ji=i}static Yi(e,n){let r=Se(),i=Se();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new f_(e,n.fromCache,r,i)}}/**
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
 */class w4{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class E4{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return yN()?8:QV(gN())>0?6:4}()}initialize(e,n){this.ns=e,this.indexManager=n,this.Zi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.rs(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ss(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new w4;return this._s(e,n,o).next(a=>{if(s.result=a,this.Xi)return this.us(e,n,o,a.size)})}).next(()=>s.result)}us(e,n,r,i){return r.documentReadCount<this.es?(cs()<=Ie.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",hs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),H.resolve()):(cs()<=Ie.DEBUG&&te("QueryEngine","Query:",hs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ts*i?(cs()<=Ie.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",hs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Kn(n))):H.resolve())}rs(e,n){if(g1(n))return H.resolve(null);let r=Kn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=_m(n,null,"F"),r=Kn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Se(...s);return this.ns.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.cs(n,a);return this.ls(n,u,o,l.readTime)?this.rs(e,_m(n,null,"F")):this.hs(e,u,n,l)}))})))}ss(e,n,r,i){return g1(n)||i.isEqual(fe.min())?H.resolve(null):this.ns.getDocuments(e,r).next(s=>{const o=this.cs(n,s);return this.ls(n,o,r,i)?H.resolve(null):(cs()<=Ie.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),hs(n)),this.hs(e,o,n,HV(i,nl)).next(a=>a))})}cs(e,n){let r=new gt(ub(e));return n.forEach((i,s)=>{ef(e,s)&&(r=r.add(s))}),r}ls(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}_s(e,n,r){return cs()<=Ie.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",hs(n)),this.ns.getDocumentsMatchingQuery(e,n,oi.min(),r)}hs(e,n,r,i){return this.ns.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_="LocalStore",S4=3e8;class T4{constructor(e,n,r,i){this.persistence=e,this.Ps=n,this.serializer=i,this.Ts=new tt(Te),this.Is=new Zi(s=>r_(s),i_),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new h4(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ts))}}function b4(t,e,n,r){return new T4(t,e,n,r)}async function Lb(t,e){const n=me(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.As(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=Se();for(const u of i){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of s){a.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Rs:u,removedBatchIds:o,addedBatchIds:a}))})})}function x4(t,e){const n=me(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ds.newChangeBuffer({trackRemovals:!0});return function(a,l,u,h){const f=u.batch,d=f.keys();let m=H.resolve();return d.forEach(_=>{m=m.next(()=>h.getEntry(l,_)).next(y=>{const E=u.docVersions.get(_);Le(E!==null),y.version.compareTo(E)<0&&(f.applyToRemoteDocument(y,u),y.isValidDocument()&&(y.setReadTime(u.commitVersion),h.addEntry(y)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=Se();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Ob(t){const e=me(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Hr.getLastRemoteSnapshotVersion(n))}function I4(t,e){const n=me(t),r=e.snapshotVersion;let i=n.Ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ds.newChangeBuffer({trackRemovals:!0});i=n.Ts;const a=[];e.targetChanges.forEach((h,f)=>{const d=i.get(f);if(!d)return;a.push(n.Hr.removeMatchingKeys(s,h.removedDocuments,f).next(()=>n.Hr.addMatchingKeys(s,h.addedDocuments,f)));let m=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?m=m.withResumeToken(At.EMPTY_BYTE_STRING,fe.min()).withLastLimboFreeSnapshotVersion(fe.min()):h.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(h.resumeToken,r)),i=i.insert(f,m),function(y,E,w){return y.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=S4?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(d,m,h)&&a.push(n.Hr.updateTargetData(s,m))});let l=vr(),u=Se();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(R4(s,o,e.documentUpdates).next(h=>{l=h.Vs,u=h.fs})),!r.isEqual(fe.min())){const h=n.Hr.getLastRemoteSnapshotVersion(s).next(f=>n.Hr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return H.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ts=i,s))}function R4(t,e,n){let r=Se(),i=Se();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=vr();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(fe.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):te(d_,"Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Vs:o,fs:i}})}function A4(t,e){const n=me(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=e_),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function C4(t,e){const n=me(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Hr.getTargetData(r,e).next(s=>s?(i=s,H.resolve(i)):n.Hr.allocateTargetId(r).next(o=>(i=new Br(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Hr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ts=n.Ts.insert(r.targetId,r),n.Is.set(e,r.targetId)),r})}async function Sm(t,e,n){const r=me(t),i=r.Ts.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!To(o))throw o;te(d_,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ts=r.Ts.remove(e),r.Is.delete(i.target)}function C1(t,e,n){const r=me(t);let i=fe.min(),s=Se();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,h){const f=me(l),d=f.Is.get(h);return d!==void 0?H.resolve(f.Ts.get(d)):f.Hr.getTargetData(u,h)}(r,o,Kn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Ps.getDocumentsMatchingQuery(o,e,n?i:fe.min(),n?s:Se())).next(a=>(P4(r,mF(e),a),{documents:a,gs:s})))}function P4(t,e,n){let r=t.Es.get(e)||fe.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Es.set(e,r)}class P1{constructor(){this.activeTargetIds=EF()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ss(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class k4{constructor(){this.ho=new P1,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,n,r){this.Po[e]=n}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new P1,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class L4{To(e){}shutdown(){}}/**
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
 */const k1="ConnectivityMonitor";class L1{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){te(k1,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){te(k1,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Au=null;function Tm(){return Au===null?Au=function(){return 268435456+Math.round(2147483648*Math.random())}():Au++,"0x"+Au.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ld="RestConnection",O4={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class D4{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.po=n+"://"+e.host,this.yo=`projects/${r}/databases/${i}`,this.wo=this.databaseId.database===sh?`project_id=${r}`:`project_id=${r}&database_id=${i}`}bo(e,n,r,i,s){const o=Tm(),a=this.So(e,n.toUriEncodedString());te(Ld,`Sending RPC '${e}' ${o}:`,a,r);const l={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(l,i,s),this.vo(e,a,l,r).then(u=>(te(Ld,`Received RPC '${e}' ${o}: `,u),u),u=>{throw ro(Ld,`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}Co(e,n,r,i,s,o){return this.bo(e,n,r,i,s)}Do(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Eo}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}So(e,n){const r=O4[e];return`${this.po}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M4{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt="WebChannelConnection";class N4 extends D4{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,i){const s=Tm();return new Promise((o,a)=>{const l=new NT;l.setWithCredentials(!0),l.listenOnce(VT.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Zu.NO_ERROR:const h=l.getResponseJson();te(Dt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case Zu.TIMEOUT:te(Dt,`RPC '${e}' ${s} timed out`),a(new ie(W.DEADLINE_EXCEEDED,"Request time out"));break;case Zu.HTTP_ERROR:const f=l.getStatus();if(te(Dt,`RPC '${e}' ${s} failed with status:`,f,"response text:",l.getResponseText()),f>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const m=d==null?void 0:d.error;if(m&&m.status&&m.message){const _=function(E){const w=E.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(w)>=0?w:W.UNKNOWN}(m.status);a(new ie(_,m.message))}else a(new ie(W.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new ie(W.UNAVAILABLE,"Connection failed."));break;default:he()}}finally{te(Dt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);te(Dt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Wo(e,n,r){const i=Tm(),s=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=jT(),a=zT(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=s.join("");te(Dt,`Creating RPC '${e}' stream ${i}: ${h}`,l);const f=o.createWebChannel(h,l);let d=!1,m=!1;const _=new M4({Fo:E=>{m?te(Dt,`Not sending because RPC '${e}' stream ${i} is closed:`,E):(d||(te(Dt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),d=!0),te(Dt,`RPC '${e}' stream ${i} sending:`,E),f.send(E))},Mo:()=>f.close()}),y=(E,w,v)=>{E.listen(w,S=>{try{v(S)}catch(C){setTimeout(()=>{throw C},0)}})};return y(f,la.EventType.OPEN,()=>{m||(te(Dt,`RPC '${e}' stream ${i} transport opened.`),_.Qo())}),y(f,la.EventType.CLOSE,()=>{m||(m=!0,te(Dt,`RPC '${e}' stream ${i} transport closed`),_.Ko())}),y(f,la.EventType.ERROR,E=>{m||(m=!0,ro(Dt,`RPC '${e}' stream ${i} transport errored:`,E),_.Ko(new ie(W.UNAVAILABLE,"The operation could not be completed")))}),y(f,la.EventType.MESSAGE,E=>{var w;if(!m){const v=E.data[0];Le(!!v);const S=v,C=(S==null?void 0:S.error)||((w=S[0])===null||w===void 0?void 0:w.error);if(C){te(Dt,`RPC '${e}' stream ${i} received error:`,C);const O=C.status;let D=function(b){const x=ct[b];if(x!==void 0)return wb(x)}(O),I=C.message;D===void 0&&(D=W.INTERNAL,I="Unknown error status: "+O+" with message "+C.message),m=!0,_.Ko(new ie(D,I)),f.close()}else te(Dt,`RPC '${e}' stream ${i} received:`,v),_.Uo(v)}}),y(a,FT.STAT_EVENT,E=>{E.stat===hm.PROXY?te(Dt,`RPC '${e}' stream ${i} detected buffering proxy`):E.stat===hm.NOPROXY&&te(Dt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{_.$o()},0),_}}function Od(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sf(t){return new jF(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ti=e,this.timerId=n,this.Go=r,this.zo=i,this.jo=s,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const n=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),i=Math.max(0,n-r);i>0&&te("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,i,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O1="PersistentStream";class Mb{constructor(e,n,r,i,s,o,a,l){this.Ti=e,this.n_=r,this.r_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new Db(e,n)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,n){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():n&&n.code===W.RESOURCE_EXHAUSTED?(yr(n.toString()),yr("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):n&&n.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(n)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),n=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.i_===n&&this.V_(r,i)},r=>{e(()=>{const i=new ie(W.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(i)})})}V_(e,n){const r=this.R_(this.i_);this.stream=this.f_(e,n),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(i=>{r(()=>this.m_(i))}),this.stream.onMessage(i=>{r(()=>++this.__==1?this.g_(i):this.onNext(i))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return te(O1,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return n=>{this.Ti.enqueueAndForget(()=>this.i_===e?n():(te(O1,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class V4 extends Mb{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}f_(e,n){return this.connection.Wo("Listen",e,n)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const n=UF(this.serializer,e),r=function(s){if(!("targetChange"in s))return fe.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?fe.min():o.readTime?Qn(o.readTime):fe.min()}(e);return this.listener.p_(n,r)}y_(e){const n={};n.database=Em(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=mm(l)?{documents:qF(s,l)}:{query:KF(s,l).ht},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Tb(s,o.resumeToken);const u=ym(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(fe.min())>0){a.readTime=hh(s,o.snapshotVersion.toTimestamp());const u=ym(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=QF(this.serializer,e);r&&(n.labels=r),this.I_(n)}w_(e){const n={};n.database=Em(this.serializer),n.removeTarget=e,this.I_(n)}}class F4 extends Mb{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get b_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.b_&&this.S_([])}f_(e,n){return this.connection.Wo("Write",e,n)}g_(e){return Le(!!e.streamToken),this.lastStreamToken=e.streamToken,Le(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){Le(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const n=WF(e.writeResults,e.commitTime),r=Qn(e.commitTime);return this.listener.v_(r,n)}C_(){const e={};e.database=Em(this.serializer),this.I_(e)}S_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>HF(this.serializer,r))};this.I_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z4{}class j4 extends z4{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.F_=!1}M_(){if(this.F_)throw new ie(W.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,n,r,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.bo(e,vm(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new ie(W.UNKNOWN,s.toString())})}Co(e,n,r,i,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Co(e,vm(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ie(W.UNKNOWN,o.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class B4{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(yr(n),this.N_=!1):te("OnlineStateTracker",n)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi="RemoteStore";class $4{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=s,this.z_.To(o=>{r.enqueueAndForget(async()=>{ts(this)&&(te(Gi,"Restarting streams for network reachability change."),await async function(l){const u=me(l);u.W_.add(4),await xl(u),u.j_.set("Unknown"),u.W_.delete(4),await of(u)}(this))})}),this.j_=new B4(r,i)}}async function of(t){if(ts(t))for(const e of t.G_)await e(!0)}async function xl(t){for(const e of t.G_)await e(!1)}function Nb(t,e){const n=me(t);n.U_.has(e.targetId)||(n.U_.set(e.targetId,e),__(n)?g_(n):bo(n).c_()&&m_(n,e))}function p_(t,e){const n=me(t),r=bo(n);n.U_.delete(e),r.c_()&&Vb(n,e),n.U_.size===0&&(r.c_()?r.P_():ts(n)&&n.j_.set("Unknown"))}function m_(t,e){if(t.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(fe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}bo(t).y_(e)}function Vb(t,e){t.H_.Ne(e),bo(t).w_(e)}function g_(t){t.H_=new NF({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.U_.get(e)||null,it:()=>t.datastore.serializer.databaseId}),bo(t).start(),t.j_.B_()}function __(t){return ts(t)&&!bo(t).u_()&&t.U_.size>0}function ts(t){return me(t).W_.size===0}function Fb(t){t.H_=void 0}async function U4(t){t.j_.set("Online")}async function H4(t){t.U_.forEach((e,n)=>{m_(t,e)})}async function W4(t,e){Fb(t),__(t)?(t.j_.q_(e),g_(t)):t.j_.set("Unknown")}async function q4(t,e,n){if(t.j_.set("Online"),e instanceof Sb&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.U_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.U_.delete(a),i.H_.removeTarget(a))}(t,e)}catch(r){te(Gi,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await dh(t,r)}else if(e instanceof rc?t.H_.We(e):e instanceof Eb?t.H_.Ze(e):t.H_.je(e),!n.isEqual(fe.min()))try{const r=await Ob(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.H_.ot(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const h=s.U_.get(u);h&&s.U_.set(u,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const h=s.U_.get(l);if(!h)return;s.U_.set(l,h.withResumeToken(At.EMPTY_BYTE_STRING,h.snapshotVersion)),Vb(s,l);const f=new Br(h.target,l,u,h.sequenceNumber);m_(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){te(Gi,"Failed to raise snapshot:",r),await dh(t,r)}}async function dh(t,e,n){if(!To(e))throw e;t.W_.add(1),await xl(t),t.j_.set("Offline"),n||(n=()=>Ob(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{te(Gi,"Retrying IndexedDB access"),await n(),t.W_.delete(1),await of(t)})}function zb(t,e){return e().catch(n=>dh(t,n,e))}async function af(t){const e=me(t),n=ci(e);let r=e.K_.length>0?e.K_[e.K_.length-1].batchId:e_;for(;K4(e);)try{const i=await A4(e.localStore,r);if(i===null){e.K_.length===0&&n.P_();break}r=i.batchId,G4(e,i)}catch(i){await dh(e,i)}jb(e)&&Bb(e)}function K4(t){return ts(t)&&t.K_.length<10}function G4(t,e){t.K_.push(e);const n=ci(t);n.c_()&&n.b_&&n.S_(e.mutations)}function jb(t){return ts(t)&&!ci(t).u_()&&t.K_.length>0}function Bb(t){ci(t).start()}async function Q4(t){ci(t).C_()}async function Y4(t){const e=ci(t);for(const n of t.K_)e.S_(n.mutations)}async function X4(t,e,n){const r=t.K_.shift(),i=a_.from(r,e,n);await zb(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await af(t)}async function J4(t,e){e&&ci(t).b_&&await async function(r,i){if(function(o){return OF(o)&&o!==W.ABORTED}(i.code)){const s=r.K_.shift();ci(r).h_(),await zb(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await af(r)}}(t,e),jb(t)&&Bb(t)}async function D1(t,e){const n=me(t);n.asyncQueue.verifyOperationInProgress(),te(Gi,"RemoteStore received new credentials");const r=ts(n);n.W_.add(3),await xl(n),r&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.W_.delete(3),await of(n)}async function Z4(t,e){const n=me(t);e?(n.W_.delete(2),await of(n)):e||(n.W_.add(2),await xl(n),n.j_.set("Unknown"))}function bo(t){return t.J_||(t.J_=function(n,r,i){const s=me(n);return s.M_(),new V4(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{xo:U4.bind(null,t),No:H4.bind(null,t),Lo:W4.bind(null,t),p_:q4.bind(null,t)}),t.G_.push(async e=>{e?(t.J_.h_(),__(t)?g_(t):t.j_.set("Unknown")):(await t.J_.stop(),Fb(t))})),t.J_}function ci(t){return t.Y_||(t.Y_=function(n,r,i){const s=me(n);return s.M_(),new F4(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{xo:()=>Promise.resolve(),No:Q4.bind(null,t),Lo:J4.bind(null,t),D_:Y4.bind(null,t),v_:X4.bind(null,t)}),t.G_.push(async e=>{e?(t.Y_.h_(),await af(t)):(await t.Y_.stop(),t.K_.length>0&&(te(Gi,`Stopping write stream with ${t.K_.length} pending writes`),t.K_=[]))})),t.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ei,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new y_(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ie(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function v_(t,e){if(yr("AsyncQueue",`${e}: ${t}`),To(t))return new ie(W.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{static emptySet(e){return new Fs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||le.comparator(n.key,r.key):(n,r)=>le.comparator(n.key,r.key),this.keyedMap=ua(),this.sortedSet=new tt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Fs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Fs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M1{constructor(){this.Z_=new tt(le.comparator)}track(e){const n=e.doc.key,r=this.Z_.get(n);r?e.type!==0&&r.type===3?this.Z_=this.Z_.insert(n,e):e.type===3&&r.type!==1?this.Z_=this.Z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Z_=this.Z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Z_=this.Z_.remove(n):e.type===1&&r.type===2?this.Z_=this.Z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):he():this.Z_=this.Z_.insert(n,e)}X_(){const e=[];return this.Z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class lo{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new lo(e,n,Fs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Zh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e3{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class t3{constructor(){this.queries=N1(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(n,r){const i=me(n),s=i.queries;i.queries=N1(),s.forEach((o,a)=>{for(const l of a.ta)l.onError(r)})})(this,new ie(W.ABORTED,"Firestore shutting down"))}}function N1(){return new Zi(t=>lb(t),Zh)}async function n3(t,e){const n=me(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.na()&&e.ra()&&(r=2):(s=new e3,r=e.ra()?0:1);try{switch(r){case 0:s.ea=await n.onListen(i,!0);break;case 1:s.ea=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=v_(o,`Initialization of query '${hs(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.ta.push(e),e.sa(n.onlineState),s.ea&&e.oa(s.ea)&&w_(n)}async function r3(t,e){const n=me(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.ta.indexOf(e);o>=0&&(s.ta.splice(o,1),s.ta.length===0?i=e.ra()?0:1:!s.na()&&e.ra()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function i3(t,e){const n=me(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.ta)a.oa(i)&&(r=!0);o.ea=i}}r&&w_(n)}function s3(t,e,n){const r=me(t),i=r.queries.get(e);if(i)for(const s of i.ta)s.onError(n);r.queries.delete(e)}function w_(t){t.ia.forEach(e=>{e.next()})}var bm,V1;(V1=bm||(bm={}))._a="default",V1.Cache="cache";class o3{constructor(e,n,r){this.query=e,this.aa=n,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new lo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ua?this.la(e)&&(this.aa.next(e),n=!0):this.ha(e,this.onlineState)&&(this.Pa(e),n=!0),this.ca=e,n}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let n=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),n=!0),n}ha(e,n){if(!e.fromCache||!this.ra())return!0;const r=n!=="Offline";return(!this.options.Ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}la(e){if(e.docChanges.length>0)return!0;const n=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Pa(e){e=lo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==bm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(e){this.key=e}}class Ub{constructor(e){this.key=e}}class a3{constructor(e,n){this.query=e,this.fa=n,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=Se(),this.mutatedKeys=Se(),this.ya=ub(e),this.wa=new Fs(this.ya)}get ba(){return this.fa}Sa(e,n){const r=n?n.Da:new M1,i=n?n.wa:this.wa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const d=i.get(h),m=ef(this.query,f)?f:null,_=!!d&&this.mutatedKeys.has(d.key),y=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let E=!1;d&&m?d.data.isEqual(m.data)?_!==y&&(r.track({type:3,doc:m}),E=!0):this.va(d,m)||(r.track({type:2,doc:m}),E=!0,(l&&this.ya(m,l)>0||u&&this.ya(m,u)<0)&&(a=!0)):!d&&m?(r.track({type:0,doc:m}),E=!0):d&&!m&&(r.track({type:1,doc:d}),E=!0,(l||u)&&(a=!0)),E&&(m?(o=o.add(m),s=y?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{wa:o,Da:r,ls:a,mutatedKeys:s}}va(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const o=e.Da.X_();o.sort((h,f)=>function(m,_){const y=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return he()}};return y(m)-y(_)}(h.type,f.type)||this.ya(h.doc,f.doc)),this.Ca(r),i=i!=null&&i;const a=n&&!i?this.Fa():[],l=this.pa.size===0&&this.current&&!i?1:0,u=l!==this.ga;return this.ga=l,o.length!==0||u?{snapshot:new lo(this.query,e.wa,s,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:a}:{Ma:a}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new M1,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(n=>this.fa=this.fa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.fa=this.fa.delete(n)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=Se(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const n=[];return e.forEach(r=>{this.pa.has(r)||n.push(new Ub(r))}),this.pa.forEach(r=>{e.has(r)||n.push(new $b(r))}),n}Oa(e){this.fa=e.gs,this.pa=Se();const n=this.Sa(e.documents);return this.applyChanges(n,!0)}Na(){return lo.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const E_="SyncEngine";class l3{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class u3{constructor(e){this.key=e,this.Ba=!1}}class c3{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.La={},this.ka=new Zi(a=>lb(a),Zh),this.qa=new Map,this.Qa=new Set,this.$a=new tt(le.comparator),this.Ka=new Map,this.Ua=new c_,this.Wa={},this.Ga=new Map,this.za=ao.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function h3(t,e,n=!0){const r=Qb(t);let i;const s=r.ka.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Na()):i=await Hb(r,e,n,!0),i}async function f3(t,e){const n=Qb(t);await Hb(n,e,!0,!1)}async function Hb(t,e,n,r){const i=await C4(t.localStore,Kn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await d3(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&Nb(t.remoteStore,i),a}async function d3(t,e,n,r,i){t.Ha=(f,d,m)=>async function(y,E,w,v){let S=E.view.Sa(w);S.ls&&(S=await C1(y.localStore,E.query,!1).then(({documents:I})=>E.view.Sa(I,S)));const C=v&&v.targetChanges.get(E.targetId),O=v&&v.targetMismatches.get(E.targetId)!=null,D=E.view.applyChanges(S,y.isPrimaryClient,C,O);return z1(y,E.targetId,D.Ma),D.snapshot}(t,f,d,m);const s=await C1(t.localStore,e,!0),o=new a3(e,s.gs),a=o.Sa(s.documents),l=bl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);z1(t,n,u.Ma);const h=new l3(e,n,o);return t.ka.set(e,h),t.qa.has(n)?t.qa.get(n).push(e):t.qa.set(n,[e]),u.snapshot}async function p3(t,e,n){const r=me(t),i=r.ka.get(e),s=r.qa.get(i.targetId);if(s.length>1)return r.qa.set(i.targetId,s.filter(o=>!Zh(o,e))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Sm(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&p_(r.remoteStore,i.targetId),xm(r,i.targetId)}).catch(So)):(xm(r,i.targetId),await Sm(r.localStore,i.targetId,!0))}async function m3(t,e){const n=me(t),r=n.ka.get(e),i=n.qa.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),p_(n.remoteStore,r.targetId))}async function g3(t,e,n){const r=T3(t);try{const i=await function(o,a){const l=me(o),u=mt.now(),h=a.reduce((m,_)=>m.add(_.key),Se());let f,d;return l.persistence.runTransaction("Locally write mutations","readwrite",m=>{let _=vr(),y=Se();return l.ds.getEntries(m,h).next(E=>{_=E,_.forEach((w,v)=>{v.isValidDocument()||(y=y.add(w))})}).next(()=>l.localDocuments.getOverlayedDocuments(m,_)).next(E=>{f=E;const w=[];for(const v of a){const S=AF(v,f.get(v.key).overlayedDocument);S!=null&&w.push(new es(v.key,S,ZT(S.value.mapValue),Gn.exists(!0)))}return l.mutationQueue.addMutationBatch(m,u,w,a)}).next(E=>{d=E;const w=E.applyToLocalDocumentSet(f,y);return l.documentOverlayCache.saveOverlays(m,E.batchId,w)})}).then(()=>({batchId:d.batchId,changes:hb(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Wa[o.currentUser.toKey()];u||(u=new tt(Te)),u=u.insert(a,l),o.Wa[o.currentUser.toKey()]=u}(r,i.batchId,n),await Il(r,i.changes),await af(r.remoteStore)}catch(i){const s=v_(i,"Failed to persist write");n.reject(s)}}async function Wb(t,e){const n=me(t);try{const r=await I4(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Ka.get(s);o&&(Le(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ba=!0:i.modifiedDocuments.size>0?Le(o.Ba):i.removedDocuments.size>0&&(Le(o.Ba),o.Ba=!1))}),await Il(n,r,e)}catch(r){await So(r)}}function F1(t,e,n){const r=me(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ka.forEach((s,o)=>{const a=o.view.sa(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=me(o);l.onlineState=a;let u=!1;l.queries.forEach((h,f)=>{for(const d of f.ta)d.sa(a)&&(u=!0)}),u&&w_(l)}(r.eventManager,e),i.length&&r.La.p_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function _3(t,e,n){const r=me(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Ka.get(e),s=i&&i.key;if(s){let o=new tt(le.comparator);o=o.insert(s,Vt.newNoDocument(s,fe.min()));const a=Se().add(s),l=new rf(fe.min(),new Map,new tt(Te),o,a);await Wb(r,l),r.$a=r.$a.remove(s),r.Ka.delete(e),S_(r)}else await Sm(r.localStore,e,!1).then(()=>xm(r,e,n)).catch(So)}async function y3(t,e){const n=me(t),r=e.batch.batchId;try{const i=await x4(n.localStore,e);Kb(n,r,null),qb(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Il(n,i)}catch(i){await So(i)}}async function v3(t,e,n){const r=me(t);try{const i=await function(o,a){const l=me(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return l.mutationQueue.lookupMutationBatch(u,a).next(f=>(Le(f!==null),h=f.keys(),l.mutationQueue.removeMutationBatch(u,f))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>l.localDocuments.getDocuments(u,h))})}(r.localStore,e);Kb(r,e,n),qb(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Il(r,i)}catch(i){await So(i)}}function qb(t,e){(t.Ga.get(e)||[]).forEach(n=>{n.resolve()}),t.Ga.delete(e)}function Kb(t,e,n){const r=me(t);let i=r.Wa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Wa[r.currentUser.toKey()]=i}}function xm(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.qa.get(e))t.ka.delete(r),n&&t.La.Ja(r,n);t.qa.delete(e),t.isPrimaryClient&&t.Ua.Sr(e).forEach(r=>{t.Ua.containsKey(r)||Gb(t,r)})}function Gb(t,e){t.Qa.delete(e.path.canonicalString());const n=t.$a.get(e);n!==null&&(p_(t.remoteStore,n),t.$a=t.$a.remove(e),t.Ka.delete(n),S_(t))}function z1(t,e,n){for(const r of n)r instanceof $b?(t.Ua.addReference(r.key,e),w3(t,r)):r instanceof Ub?(te(E_,"Document no longer in limbo: "+r.key),t.Ua.removeReference(r.key,e),t.Ua.containsKey(r.key)||Gb(t,r.key)):he()}function w3(t,e){const n=e.key,r=n.path.canonicalString();t.$a.get(n)||t.Qa.has(r)||(te(E_,"New document in limbo: "+n),t.Qa.add(r),S_(t))}function S_(t){for(;t.Qa.size>0&&t.$a.size<t.maxConcurrentLimboResolutions;){const e=t.Qa.values().next().value;t.Qa.delete(e);const n=new le(He.fromString(e)),r=t.za.next();t.Ka.set(r,new u3(n)),t.$a=t.$a.insert(n,r),Nb(t.remoteStore,new Br(Kn(ob(n.path)),r,"TargetPurposeLimboResolution",Yh.ae))}}async function Il(t,e,n){const r=me(t),i=[],s=[],o=[];r.ka.isEmpty()||(r.ka.forEach((a,l)=>{o.push(r.Ha(l,e,n).then(u=>{var h;if((u||n)&&r.isPrimaryClient){const f=u?!u.fromCache:(h=n==null?void 0:n.targetChanges.get(l.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(u){i.push(u);const f=f_.Yi(l.targetId,u);s.push(f)}}))}),await Promise.all(o),r.La.p_(i),await async function(l,u){const h=me(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>H.forEach(u,d=>H.forEach(d.Hi,m=>h.persistence.referenceDelegate.addReference(f,d.targetId,m)).next(()=>H.forEach(d.Ji,m=>h.persistence.referenceDelegate.removeReference(f,d.targetId,m)))))}catch(f){if(!To(f))throw f;te(d_,"Failed to update sequence numbers: "+f)}for(const f of u){const d=f.targetId;if(!f.fromCache){const m=h.Ts.get(d),_=m.snapshotVersion,y=m.withLastLimboFreeSnapshotVersion(_);h.Ts=h.Ts.insert(d,y)}}}(r.localStore,s))}async function E3(t,e){const n=me(t);if(!n.currentUser.isEqual(e)){te(E_,"User change. New user:",e.toKey());const r=await Lb(n.localStore,e);n.currentUser=e,function(s,o){s.Ga.forEach(a=>{a.forEach(l=>{l.reject(new ie(W.CANCELLED,o))})}),s.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Il(n,r.Rs)}}function S3(t,e){const n=me(t),r=n.Ka.get(e);if(r&&r.Ba)return Se().add(r.key);{let i=Se();const s=n.qa.get(e);if(!s)return i;for(const o of s){const a=n.ka.get(o);i=i.unionWith(a.view.ba)}return i}}function Qb(t){const e=me(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Wb.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=S3.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=_3.bind(null,e),e.La.p_=i3.bind(null,e.eventManager),e.La.Ja=s3.bind(null,e.eventManager),e}function T3(t){const e=me(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=y3.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=v3.bind(null,e),e}class ph{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=sf(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,n){return null}nu(e,n){return null}eu(e){return b4(this.persistence,new E4,e.initialUser,this.serializer)}Xa(e){return new kb(h_.ri,this.serializer)}Za(e){return new k4}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ph.provider={build:()=>new ph};class b3 extends ph{constructor(e){super(),this.cacheSizeBytes=e}tu(e,n){Le(this.persistence.referenceDelegate instanceof fh);const r=this.persistence.referenceDelegate.garbageCollector;return new o4(r,e.asyncQueue,n)}Xa(e){const n=this.cacheSizeBytes!==void 0?Yt.withCacheSize(this.cacheSizeBytes):Yt.DEFAULT;return new kb(r=>fh.ri(r,n),this.serializer)}}class Im{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>F1(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=E3.bind(null,this.syncEngine),await Z4(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new t3}()}createDatastore(e){const n=sf(e.databaseInfo.databaseId),r=function(s){return new N4(s)}(e.databaseInfo);return function(s,o,a,l){return new j4(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new $4(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>F1(this.syncEngine,n,0),function(){return L1.D()?new L1:new L4}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,h){const f=new c3(i,s,o,a,l,u);return h&&(f.ja=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=me(i);te(Gi,"RemoteStore shutting down."),s.W_.add(5),await xl(s),s.z_.shutdown(),s.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Im.provider={build:()=>new Im};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class x3{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):yr("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi="FirestoreClient";class I3{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Mt.UNAUTHENTICATED,this.clientId=$T.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{te(hi,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(te(hi,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ei;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=v_(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Dd(t,e){t.asyncQueue.verifyOperationInProgress(),te(hi,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Lb(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function j1(t,e){t.asyncQueue.verifyOperationInProgress();const n=await R3(t);te(hi,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>D1(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>D1(e.remoteStore,i)),t._onlineComponents=e}async function R3(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){te(hi,"Using user provided OfflineComponentProvider");try{await Dd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===W.FAILED_PRECONDITION||i.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;ro("Error using user provided cache. Falling back to memory cache: "+n),await Dd(t,new ph)}}else te(hi,"Using default OfflineComponentProvider"),await Dd(t,new b3(void 0));return t._offlineComponents}async function Yb(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(te(hi,"Using user provided OnlineComponentProvider"),await j1(t,t._uninitializedComponentsProvider._online)):(te(hi,"Using default OnlineComponentProvider"),await j1(t,new Im))),t._onlineComponents}function A3(t){return Yb(t).then(e=>e.syncEngine)}async function C3(t){const e=await Yb(t),n=e.eventManager;return n.onListen=h3.bind(null,e.syncEngine),n.onUnlisten=p3.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=f3.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=m3.bind(null,e.syncEngine),n}function P3(t,e,n={}){const r=new ei;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const h=new x3({next:d=>{h.su(),o.enqueueAndForget(()=>r3(s,f)),d.fromCache&&l.source==="server"?u.reject(new ie(W.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),f=new o3(a,h,{includeMetadataChanges:!0,Ta:!0});return n3(s,f)}(await C3(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function Xb(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B1=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jb(t,e,n){if(!n)throw new ie(W.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function k3(t,e,n,r){if(e===!0&&r===!0)throw new ie(W.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function $1(t){if(!le.isDocumentKey(t))throw new ie(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function U1(t){if(le.isDocumentKey(t))throw new ie(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function lf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":he()}function ll(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ie(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=lf(t);throw new ie(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zb="firestore.googleapis.com",H1=!0;class W1{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ie(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Zb,this.ssl=H1}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:H1;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Pb;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<i4)throw new ie(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}k3("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Xb((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ie(W.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ie(W.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ie(W.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class uf{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new W1({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ie(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ie(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new W1(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new NV;switch(r.type){case"firstParty":return new jV(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ie(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=B1.get(n);r&&(te("ComponentProvider","Removing Datastore"),B1.delete(n),r.terminate())}(this),Promise.resolve()}}function L3(t,e,n,r={}){var i;const s=(t=ll(t,uf))._getSettings(),o=Object.assign(Object.assign({},s),{emulatorOptions:t._getEmulatorOptions()}),a=`${e}:${n}`;s.host!==Zb&&s.host!==a&&ro("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l=Object.assign(Object.assign({},s),{host:a,ssl:!1,emulatorOptions:r});if(!th(l,o)&&(t._setSettings(l),r.mockUserToken)){let u,h;if(typeof r.mockUserToken=="string")u=r.mockUserToken,h=Mt.MOCK_USER;else{u=mN(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new ie(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new Mt(f)}t._authCredentials=new VV(new BT(u,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new xo(this.firestore,e,this._query)}}class bn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ti(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new bn(this.firestore,e,this._key)}}class ti extends xo{constructor(e,n,r){super(e,n,ob(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new bn(this.firestore,null,new le(e))}withConverter(e){return new ti(this.firestore,e,this._path)}}function Md(t,e,...n){if(t=no(t),Jb("collection","path",e),t instanceof uf){const r=He.fromString(e,...n);return U1(r),new ti(t,null,r)}{if(!(t instanceof bn||t instanceof ti))throw new ie(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(He.fromString(e,...n));return U1(r),new ti(t.firestore,null,r)}}function O3(t,e,...n){if(t=no(t),arguments.length===1&&(e=$T.newId()),Jb("doc","path",e),t instanceof uf){const r=He.fromString(e,...n);return $1(r),new bn(t,null,new le(r))}{if(!(t instanceof bn||t instanceof ti))throw new ie(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(He.fromString(e,...n));return $1(r),new bn(t.firestore,t instanceof ti?t.converter:null,new le(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q1="AsyncQueue";class K1{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Db(this,"async_queue_retry"),this.bu=()=>{const r=Od();r&&te(q1,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.Su=e;const n=Od();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const n=Od();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.bu)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const n=new ei;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!To(e))throw e;te(q1,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const n=this.Su.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw yr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.pu=!1,r))));return this.Su=n,n}enqueueAfterDelay(e,n,r){this.Du(),this.wu.indexOf(e)>-1&&(n=0);const i=y_.createAndSchedule(this,e,n,r,s=>this.Fu(s));return this.fu.push(i),i}Du(){this.gu&&he()}verifyOperationInProgress(){}async Mu(){let e;do e=this.Su,await e;while(e!==this.Su)}xu(e){for(const n of this.fu)if(n.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const n=this.fu.indexOf(e);this.fu.splice(n,1)}}class cf extends uf{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new K1,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new K1(e),this._firestoreClient=void 0,await e}}}function D3(t,e){const n=typeof t=="object"?t:xV(),r=typeof t=="string"?t:sh,i=wV(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=dN("firestore");s&&L3(i,...s)}return i}function ex(t){if(t._terminated)throw new ie(W.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||M3(t),t._firestoreClient}function M3(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,h){return new eF(a,l,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,Xb(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new I3(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new uo(At.fromBase64String(e))}catch(n){throw new ie(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new uo(At.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ie(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new bt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tx{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ie(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ie(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Te(this._lat,e._lat)||Te(this._long,e._long)}}/**
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
 */class x_{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N3=/^__.*__$/;class V3{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new es(e,this.data,this.fieldMask,n,this.fieldTransforms):new Tl(e,this.data,n,this.fieldTransforms)}}function nx(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw he()}}class I_{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Bu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new I_(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ku({path:r,Qu:!1});return i.$u(e),i}Ku(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ku({path:r,Qu:!1});return i.Bu(),i}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return mh(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(nx(this.Lu)&&N3.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class F3{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||sf(e)}ju(e,n,r,i=!1){return new I_({Lu:e,methodName:n,zu:r,path:bt.emptyPath(),Qu:!1,Gu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function rx(t){const e=t._freezeSettings(),n=sf(t._databaseId);return new F3(t._databaseId,!!e.ignoreUndefinedProperties,n)}function z3(t,e,n,r,i,s={}){const o=t.ju(s.merge||s.mergeFields?2:0,e,n,i);ox("Data must be an object, but it was:",o,r);const a=ix(r,o);let l,u;if(s.merge)l=new Ln(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const f of s.mergeFields){const d=B3(e,f,n);if(!o.contains(d))throw new ie(W.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);U3(h,d)||h.push(d)}l=new Ln(h),u=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,u=o.fieldTransforms;return new V3(new wn(a),l,u)}function j3(t,e,n,r=!1){return R_(n,t.ju(r?4:3,e))}function R_(t,e){if(sx(t=no(t)))return ox("Unsupported field value:",e,t),ix(t,e);if(t instanceof tx)return function(r,i){if(!nx(i.Lu))throw i.Wu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Wu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=R_(a,i.Uu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=no(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return SF(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=mt.fromDate(r);return{timestampValue:hh(i.serializer,s)}}if(r instanceof mt){const s=new mt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:hh(i.serializer,s)}}if(r instanceof b_)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof uo)return{bytesValue:Tb(i.serializer,r._byteString)};if(r instanceof bn){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Wu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:u_(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof x_)return function(o,a){return{mapValue:{fields:{[YT]:{stringValue:JT},[oh]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Wu("VectorValues must only contain numeric values.");return s_(a.serializer,u)})}}}}}}(r,i);throw i.Wu(`Unsupported field value: ${lf(r)}`)}(t,e)}function ix(t,e){const n={};return HT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ji(t,(r,i)=>{const s=R_(i,e.qu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function sx(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof mt||t instanceof b_||t instanceof uo||t instanceof bn||t instanceof tx||t instanceof x_)}function ox(t,e,n){if(!sx(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=lf(n);throw r==="an object"?e.Wu(t+" a custom object"):e.Wu(t+" "+r)}}function B3(t,e,n){if((e=no(e))instanceof T_)return e._internalPath;if(typeof e=="string")return ax(t,e);throw mh("Field path arguments must be of type string or ",t,!1,void 0,n)}const $3=new RegExp("[~\\*/\\[\\]]");function ax(t,e,n){if(e.search($3)>=0)throw mh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new T_(...e.split("."))._internalPath}catch{throw mh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function mh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new ie(W.INVALID_ARGUMENT,a+t+l)}function U3(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lx{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new bn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new H3(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ux("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class H3 extends lx{data(){return super.data()}}function ux(t,e){return typeof e=="string"?ax(t,e):e instanceof T_?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W3(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ie(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class A_{}class q3 extends A_{}function G1(t,e,...n){let r=[];e instanceof A_&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof P_).length,a=s.filter(l=>l instanceof C_).length;if(o>1||o>0&&a>0)throw new ie(W.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class C_ extends q3{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new C_(e,n,r)}_apply(e){const n=this._parse(e);return cx(e._query,n),new xo(e.firestore,e.converter,gm(e._query,n))}_parse(e){const n=rx(e.firestore);return function(s,o,a,l,u,h,f){let d;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new ie(W.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Y1(f,h);const _=[];for(const y of f)_.push(Q1(l,s,y));d={arrayValue:{values:_}}}else d=Q1(l,s,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Y1(f,h),d=j3(a,o,f,h==="in"||h==="not-in");return ft.create(u,h,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class P_ extends A_{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new P_(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Vn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)cx(o,l),o=gm(o,l)}(e._query,n),new xo(e.firestore,e.converter,gm(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Q1(t,e,n){if(typeof(n=no(n))=="string"){if(n==="")throw new ie(W.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ab(e)&&n.indexOf("/")!==-1)throw new ie(W.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(He.fromString(n));if(!le.isDocumentKey(r))throw new ie(W.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return c1(t,new le(r))}if(n instanceof bn)return c1(t,n._key);throw new ie(W.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${lf(n)}.`)}function Y1(t,e){if(!Array.isArray(t)||t.length===0)throw new ie(W.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function cx(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new ie(W.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ie(W.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class K3{convertValue(e,n="none"){switch(ui(e)){case 0:return null;case 1:return e.booleanValue;case 2:return at(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(li(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw he()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ji(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n[oh].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>at(o.doubleValue));return new x_(s)}convertGeoPoint(e){return new b_(at(e.latitude),at(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Jh(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(rl(e));default:return null}}convertTimestamp(e){const n=ai(e);return new mt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=He.fromString(e);Le(Cb(r));const i=new il(r.get(1),r.get(3)),s=new le(r.popFirst(5));return i.isEqual(n)||yr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G3(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Q3 extends lx{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ic(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ux("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ic extends Q3{data(e={}){return super.data(e)}}class Y3{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Cu(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ic(this._firestore,this._userDataWriter,r.key,r,new Cu(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ie(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new ic(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Cu(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new ic(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Cu(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:X3(a.type),doc:l,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function X3(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return he()}}class J3 extends K3{constructor(e){super(),this.firestore=e}convertBytes(e){return new uo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new bn(this.firestore,null,n)}}function X1(t){t=ll(t,xo);const e=ll(t.firestore,cf),n=ex(e),r=new J3(e);return W3(t._query),P3(n,t._query).then(i=>new Y3(e,r,t,i))}function Z3(t){return hx(ll(t.firestore,cf),[new o_(t._key,Gn.none())])}function ez(t,e){const n=ll(t.firestore,cf),r=O3(t),i=G3(t.converter,e);return hx(n,[z3(rx(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Gn.exists(!1))]).then(()=>r)}function hx(t,e){return function(r,i){const s=new ei;return r.asyncQueue.enqueueAndForget(async()=>g3(await A3(r),i,s)),s.promise}(ex(t),e)}(function(e,n=!0){(function(i){Eo=i})(bV),rh(new el("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new cf(new FV(r.getProvider("auth-internal")),new BV(o,r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ie(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new il(u.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Vs(Z0,e1,e),Vs(Z0,e1,"esm2017")})();var tz="firebase",nz="11.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vs(tz,nz,"app");const rz={apiKey:"AIzaSyDJNUMGVfCJCMnn-HH1FoxTJZa14DDJjNk",authDomain:"todolistdj-1ad4d.firebaseapp.com",projectId:"todolistdj-1ad4d",storageBucket:"todolistdj-1ad4d.firebasestorage.app",messagingSenderId:"575418657372",appId:"1:575418657372:web:7de23279fb37adc9f31499",measurementId:"G-YVR24SNKRC"},iz=LT(rz),Nd=D3(iz);function sz(){const[t,e]=F.useState(""),[n,r]=F.useState([]),[i,s]=F.useState(localStorage.getItem("spotifyAccessToken")||""),[o,a]=F.useState([]),[l,u]=F.useState(""),[h,f]=F.useState(!1),d="d33fdd3fd546499ba9873e532b7ee491",m="http://localhost/callback";let _;const y=C=>{const O=C.target.value;e(O),clearTimeout(_),_=setTimeout(()=>{O.length>2?w(O):r([])},300)},E=async()=>{try{console.log("Limpando todas as músicas do Firestore...");const C=G1(Md(Nd,"musicas"));(await X1(C)).forEach(async D=>{await Z3(D.ref)}),a([]),console.log("Todas as músicas foram limpas do Firestore.")}catch(C){console.error("Erro ao limpar músicas:",C)}};F.useEffect(()=>{(async()=>{var O;try{let D=localStorage.getItem("spotifyAuthCode");if(!D){window.location.href=`https://accounts.spotify.com/authorize?client_id=${d}&response_type=code&redirect_uri=${encodeURIComponent(m)}&scope=user-read-private`;return}const T=(await Qe.post("https://accounts.spotify.com/api/token",new URLSearchParams({grant_type:"authorization_code",code:D,redirect_uri:m}),{headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:`Basic ${btoa(`${d}:a1b0f9d4870242229b3273f22cdd2332`)}`}})).data.access_token;s(T),localStorage.setItem("spotifyAccessToken",T),console.log("Novo token obtido:",T),localStorage.removeItem("spotifyAuthCode")}catch(D){console.error("Erro ao obter token do Spotify:",((O=D.response)==null?void 0:O.data)||D.message)}})()},[]);const w=async C=>{var O;f(!0);try{if(!i)throw new Error("Token de acesso não disponível.");const D=await Qe.get("https://api.spotify.com/v1/search",{headers:{Authorization:`Bearer ${i}`},params:{q:C,type:"track",limit:5}});r(D.data.tracks.items),console.log("Músicas encontradas:",D.data.tracks.items)}catch(D){console.error("Erro ao buscar músicas:",((O=D.response)==null?void 0:O.data)||D.message)}finally{f(!1)}},v=async C=>{var O;try{if(!i)throw new Error("Token de acesso não disponível.");const D=await Qe.get(`https://api.spotify.com/v1/audio-features/${C}`,{headers:{Authorization:`Bearer ${i}`}});return console.log("Áudio features obtidos:",D.data),D.data}catch(D){return console.error("Erro ao buscar áudio features:",((O=D.response)==null?void 0:O.data)||D.message),null}},S=async C=>{if(!l.trim()){alert("Por favor, insira seu nome antes de adicionar uma música.");return}if(!i){window.location.href=`https://accounts.spotify.com/authorize?client_id=${d}&response_type=code&redirect_uri=${encodeURIComponent(m)}&scope=user-read-private`;return}await new Promise(I=>setTimeout(I,500));const O=await v(C.id),D={spotifyData:C,audioFeatures:O||{energy:0,danceability:0,valence:0,tempo:0,key:0},suggestedBy:l,completed:!1};try{await ez(Md(Nd,"musicas"),D),a([...o,D]),e(""),r([])}catch(I){console.error("Erro ao salvar no Firestore:",I)}};return F.useEffect(()=>{(async()=>{try{const O=G1(Md(Nd,"musicas")),I=(await X1(O)).docs.map(T=>({id:T.id,...T.data()}));a(I)}catch(O){console.error("Erro ao carregar músicas do Firestore:",O)}})()},[]),G.jsxs("div",{className:"todolist-container",children:[G.jsx("header",{className:"header",children:G.jsxs("nav",{children:[G.jsx(qs,{to:"/",className:"header-link",children:"🏠 Home"}),G.jsx(qs,{to:"/sugestoes",className:"header-link",children:"🎵 Sugestões de Música"})]})}),G.jsxs("div",{className:"left-column",children:[G.jsx("h2",{className:"output",children:"🎵 Sugestões de Música"}),G.jsx("input",{type:"text",className:"contact-form input",placeholder:"Digite uma música...",value:t,onChange:y}),G.jsx("input",{type:"text",className:"contact-form input",placeholder:"Seu nome...",value:l,onChange:C=>u(C.target.value)}),h?G.jsx("p",{className:"loading-message output",children:"Carregando..."}):G.jsx("ul",{className:"suggestions-list output",children:n.map(C=>{var O;return G.jsxs("li",{className:"suggestion-item",onClick:()=>S(C),children:[G.jsx("span",{className:"spotify-icon"}),G.jsx("img",{src:((O=C.album.images[2])==null?void 0:O.url)||"https://via.placeholder.com/50",alt:`Capa do álbum ${C.album.name}`,className:"album-cover"}),C.name," - ",C.artists[0].name]},C.id)})})]}),G.jsxs("div",{className:"right-column",children:[G.jsx("h3",{className:"output",children:"📝 Lista de Músicas"}),G.jsxs("div",{className:"todo-section",children:[G.jsx("h4",{className:"output",children:"Não Riscadas"}),G.jsx("ul",{className:"todo-list output",children:o.filter(C=>!C.completed).map(C=>G.jsx("li",{className:`todo-item ${C.completed?"completed":""}`,onClick:()=>toggleComplete(C.id),children:G.jsxs("div",{children:[G.jsx("strong",{children:C.spotifyData.name})," - ",C.spotifyData.artists[0].name," ","(Sugerido por: ",C.suggestedBy,")"]})},C.id))})]}),G.jsxs("div",{className:"todo-section",children:[G.jsx("h4",{className:"output",children:"Riscadas"}),G.jsx("ul",{className:"todo-list output",children:o.filter(C=>C.completed).map(C=>G.jsx("li",{className:`todo-item ${C.completed?"completed":""}`,onClick:()=>toggleComplete(C.id),children:G.jsxs("div",{children:[G.jsx("strong",{children:C.spotifyData.name})," - ",C.spotifyData.artists[0].name," ","(Sugerido por: ",C.suggestedBy,")"]})},C.id))})]}),G.jsx("button",{className:"contact-form button",onClick:E,children:"Limpar Todas as Músicas"})]})]})}Uh.register(aa,Xu,jr,vO,OO,xO);function oz(){const[t,e]=F.useState(),[n,r]=F.useState(!0),[i,s]=F.useState(!1),[o,a]=F.useState({name:"",email:"",message:""}),[l,u]=F.useState(""),h=rC({animationCharacters:"▒░█",animationCharacterSpacing:1,animationDelay:2e3,animationDirection:"down",animationInterval:100,animationLoop:!0,animationSpeed:30,font:iC,text:["Ferro","Velho"]});F.useEffect(()=>{async function y(){try{const E=await Qe.get("https://stream.zeno.fm/8llryz2hnsntv",{timeout:5e3});E.status===200&&E.data?e(!0):e(!1)}catch(E){console.error("Erro ao verificar a rádio:",E),e(!1)}finally{r(!1)}}y()},[]);const f={labels:["Afrobeats","Reggaeton","Baile Funk","R&B","House","Trap"],datasets:[{label:"Generos Meus",data:[90,80,95,85,70,75],backgroundColor:"rgba(0, 255, 0, 0.2)",borderColor:"rgba(0, 255, 0, 1)",borderWidth:2},{label:"Sugestões",data:[90,80,95,85,70,75],backgroundColor:"rgba(0, 255, 0, 0.2)",borderColor:"rgba(0, 255, 0, 1)",borderWidth:2}]},d={dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplay:!0},m=y=>{a({...o,[y.target.name]:y.target.value})},_=async y=>{y.preventDefault();try{await Qe.post("https://formspree.io/f/YOUR_FORMSPREE_ID",o),u("Mensagem enviada com sucesso!"),a({name:"",email:"",message:""})}catch{u("Erro ao enviar mensagem. Tente novamente mais tarde.")}};return G.jsxs("div",{className:"terminal",style:{minHeight:"100vh",overflowY:"auto",paddingBottom:"50px"},children:[G.jsx("div",{className:"noise"}),G.jsx("div",{className:"overlay"}),G.jsx("header",{className:"header",children:G.jsxs("nav",{children:[G.jsx(qs,{to:"/sugestoes",children:"🎵 Sugestões de Música"}),G.jsx(qs,{to:"/sugestoes",children:"📊 Medidor de Vibe"})]})}),n?G.jsx("p",{style:{marginTop:"60px"},children:"Carregando..."}):G.jsxs(G.Fragment,{children:[G.jsxs("div",{className:"main-content",children:[G.jsx("div",{className:"ascii-container",children:G.jsx("pre",{style:{fontSize:"18px",position:"relative",zIndex:2},ref:h})}),G.jsxs("h1",{children:["DJ ",G.jsx("span",{className:"errorcode",children:"FERRO VELHO"})]}),G.jsx("p",{className:"output",children:"Mixando vibes únicas no melhor estilo underground."})]}),G.jsxs("div",{className:"socials",children:[G.jsx("p",{children:"📲 Siga-me:"}),G.jsx("a",{href:"https://instagram.com",target:"_blank",children:"Instagram"})," |",G.jsx("a",{href:"https://soundcloud.com",target:"_blank",children:" SoundCloud"})," |",G.jsx("a",{href:"https://mixcloud.com",target:"_blank",children:" Mixcloud"})]}),G.jsx("button",{onClick:()=>{s(!i),console.log("Formulário Visível?",!i)},className:"terminal-button",children:"Entre em Contato"}),i&&G.jsxs("form",{onSubmit:_,className:"contact-form",children:[G.jsx("label",{children:"Nome"}),G.jsx("input",{type:"text",name:"name",placeholder:"Digite seu nome",value:o.name,onChange:m,required:!0}),G.jsx("label",{children:"Email"}),G.jsx("input",{type:"email",name:"email",placeholder:"Digite seu email",value:o.email,onChange:m,required:!0}),G.jsx("label",{children:"Mensagem"}),G.jsx("textarea",{name:"message",placeholder:"Digite sua mensagem",value:o.message,onChange:m,required:!0}),G.jsx("button",{type:"submit",className:"terminal-button",children:"Enviar"}),l&&G.jsx("p",{children:l})]}),G.jsxs("div",{className:"bio",children:[G.jsx("p",{children:"🎧 DJ especializado em diversos estilos musicais."}),G.jsx("p",{children:"🔥 Criando sets energéticos e performances ao vivo cativantes."})]}),G.jsxs("div",{className:"chart-container",style:{width:"90%",maxWidth:"400px",height:"400px",margin:"auto",padding:"10px",background:"rgba(0, 0, 0, 0.7)",borderRadius:"10px"},children:[G.jsx("h2",{children:"Estilos Musicais"}),G.jsx(iD,{data:f,options:{maintainAspectRatio:!1,responsive:!0,scales:{r:{suggestedMin:0,suggestedMax:100}}}})]}),G.jsxs("div",{className:"carousel",style:{maxWidth:"500px",margin:"auto",paddingTop:"20px"},children:[G.jsx("h2",{children:"Galeria"}),G.jsxs(nN,{...d,children:[G.jsx("img",{src:"https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",alt:"Festa 1"}),G.jsx("img",{src:"https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",alt:"Festa 2"}),G.jsx("img",{src:"https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",alt:"Festa 3"})]})]}),G.jsxs("div",{className:"radio-status",children:[G.jsx("h2",{children:"Status da Rádio:"}),t?G.jsxs(G.Fragment,{children:[G.jsx("button",{href:"https://stream.zeno.fm/8llryz2hnsntv",target:"_blank",className:"terminal-button",children:"Ouça Agora"}),G.jsx("p",{className:"online",children:"🔴 Ao Vivo"})]}):G.jsx("p",{className:"offline",children:"⚫ Fora do Ar"})]})]})]})}function az(){const t=vE();return F.useEffect(()=>{const n=new URLSearchParams(window.location.search).get("code");console.log("Código de autorização extraído:",n),n&&n.length>10?(console.log("AUTH ->",n),localStorage.setItem("spotifyAuthCode",n),t("/sugestoes")):console.error("Erro: Código de autorização inválido ou ausente.")},[t]),G.jsx("div",{children:"Redirecionando..."})}function lz(){return G.jsx(MA,{children:G.jsxs(hA,{children:[G.jsx(Uu,{path:"/",element:G.jsx(oz,{})}),G.jsx(Uu,{path:"/sugestoes",element:G.jsx(sz,{})}),G.jsx(Uu,{path:"/callback",element:G.jsx(az,{})})," "]})})}Vd.createRoot(document.getElementById("root")).render(G.jsx(Lm.StrictMode,{children:G.jsx(lz,{})}));
