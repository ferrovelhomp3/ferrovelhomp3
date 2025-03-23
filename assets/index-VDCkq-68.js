var yR=Object.defineProperty;var vR=(t,e,n)=>e in t?yR(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ne=(t,e,n)=>(vR(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var iu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Kg(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function wR(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var Aw={exports:{}},kh={},Cw={exports:{}},Se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wl=Symbol.for("react.element"),ER=Symbol.for("react.portal"),SR=Symbol.for("react.fragment"),TR=Symbol.for("react.strict_mode"),bR=Symbol.for("react.profiler"),xR=Symbol.for("react.provider"),RR=Symbol.for("react.context"),IR=Symbol.for("react.forward_ref"),AR=Symbol.for("react.suspense"),CR=Symbol.for("react.memo"),PR=Symbol.for("react.lazy"),Jy=Symbol.iterator;function kR(t){return t===null||typeof t!="object"?null:(t=Jy&&t[Jy]||t["@@iterator"],typeof t=="function"?t:null)}var Pw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},kw=Object.assign,Ow={};function Eo(t,e,n){this.props=t,this.context=e,this.refs=Ow,this.updater=n||Pw}Eo.prototype.isReactComponent={};Eo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Eo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Lw(){}Lw.prototype=Eo.prototype;function Qg(t,e,n){this.props=t,this.context=e,this.refs=Ow,this.updater=n||Pw}var Yg=Qg.prototype=new Lw;Yg.constructor=Qg;kw(Yg,Eo.prototype);Yg.isPureReactComponent=!0;var Zy=Array.isArray,Mw=Object.prototype.hasOwnProperty,Xg={current:null},Dw={key:!0,ref:!0,__self:!0,__source:!0};function Nw(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Mw.call(e,r)&&!Dw.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:wl,type:t,key:s,ref:o,props:i,_owner:Xg.current}}function OR(t,e){return{$$typeof:wl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Jg(t){return typeof t=="object"&&t!==null&&t.$$typeof===wl}function LR(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ev=/\/+/g;function Hf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?LR(""+t.key):e.toString(36)}function Gu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case wl:case ER:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Hf(o,0):r,Zy(i)?(n="",t!=null&&(n=t.replace(ev,"$&/")+"/"),Gu(i,e,n,"",function(u){return u})):i!=null&&(Jg(i)&&(i=OR(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ev,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Zy(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Hf(s,a);o+=Gu(s,e,n,l,i)}else if(l=kR(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Hf(s,a++),o+=Gu(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function su(t,e,n){if(t==null)return t;var r=[],i=0;return Gu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function MR(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Yt={current:null},Ku={transition:null},DR={ReactCurrentDispatcher:Yt,ReactCurrentBatchConfig:Ku,ReactCurrentOwner:Xg};function Vw(){throw Error("act(...) is not supported in production builds of React.")}Se.Children={map:su,forEach:function(t,e,n){su(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return su(t,function(){e++}),e},toArray:function(t){return su(t,function(e){return e})||[]},only:function(t){if(!Jg(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Se.Component=Eo;Se.Fragment=SR;Se.Profiler=bR;Se.PureComponent=Qg;Se.StrictMode=TR;Se.Suspense=AR;Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=DR;Se.act=Vw;Se.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=kw({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Xg.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Mw.call(e,l)&&!Dw.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:wl,type:t.type,key:i,ref:s,props:r,_owner:o}};Se.createContext=function(t){return t={$$typeof:RR,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:xR,_context:t},t.Consumer=t};Se.createElement=Nw;Se.createFactory=function(t){var e=Nw.bind(null,t);return e.type=t,e};Se.createRef=function(){return{current:null}};Se.forwardRef=function(t){return{$$typeof:IR,render:t}};Se.isValidElement=Jg;Se.lazy=function(t){return{$$typeof:PR,_payload:{_status:-1,_result:t},_init:MR}};Se.memo=function(t,e){return{$$typeof:CR,type:t,compare:e===void 0?null:e}};Se.startTransition=function(t){var e=Ku.transition;Ku.transition={};try{t()}finally{Ku.transition=e}};Se.unstable_act=Vw;Se.useCallback=function(t,e){return Yt.current.useCallback(t,e)};Se.useContext=function(t){return Yt.current.useContext(t)};Se.useDebugValue=function(){};Se.useDeferredValue=function(t){return Yt.current.useDeferredValue(t)};Se.useEffect=function(t,e){return Yt.current.useEffect(t,e)};Se.useId=function(){return Yt.current.useId()};Se.useImperativeHandle=function(t,e,n){return Yt.current.useImperativeHandle(t,e,n)};Se.useInsertionEffect=function(t,e){return Yt.current.useInsertionEffect(t,e)};Se.useLayoutEffect=function(t,e){return Yt.current.useLayoutEffect(t,e)};Se.useMemo=function(t,e){return Yt.current.useMemo(t,e)};Se.useReducer=function(t,e,n){return Yt.current.useReducer(t,e,n)};Se.useRef=function(t){return Yt.current.useRef(t)};Se.useState=function(t){return Yt.current.useState(t)};Se.useSyncExternalStore=function(t,e,n){return Yt.current.useSyncExternalStore(t,e,n)};Se.useTransition=function(){return Yt.current.useTransition()};Se.version="18.3.1";Cw.exports=Se;var F=Cw.exports;const Zg=Kg(F);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var NR=F,VR=Symbol.for("react.element"),FR=Symbol.for("react.fragment"),zR=Object.prototype.hasOwnProperty,jR=NR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,BR={key:!0,ref:!0,__self:!0,__source:!0};function Fw(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)zR.call(e,r)&&!BR.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:VR,type:t,key:s,ref:o,props:i,_owner:jR.current}}kh.Fragment=FR;kh.jsx=Fw;kh.jsxs=Fw;Aw.exports=kh;var U=Aw.exports,tp={},zw={exports:{}},vn={},jw={exports:{}},Bw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(G,J){var ae=G.length;G.push(J);e:for(;0<ae;){var ye=ae-1>>>1,ue=G[ye];if(0<i(ue,J))G[ye]=J,G[ae]=ue,ae=ye;else break e}}function n(G){return G.length===0?null:G[0]}function r(G){if(G.length===0)return null;var J=G[0],ae=G.pop();if(ae!==J){G[0]=ae;e:for(var ye=0,ue=G.length,D=ue>>>1;ye<D;){var z=2*(ye+1)-1,L=G[z],V=z+1,j=G[V];if(0>i(L,ae))V<ue&&0>i(j,L)?(G[ye]=j,G[V]=ae,ye=V):(G[ye]=L,G[z]=ae,ye=z);else if(V<ue&&0>i(j,ae))G[ye]=j,G[V]=ae,ye=V;else break e}}return J}function i(G,J){var ae=G.sortIndex-J.sortIndex;return ae!==0?ae:G.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],h=1,f=null,d=3,g=!1,_=!1,y=!1,E=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(G){for(var J=n(u);J!==null;){if(J.callback===null)r(u);else if(J.startTime<=G)r(u),J.sortIndex=J.expirationTime,e(l,J);else break;J=n(u)}}function C(G){if(y=!1,S(G),!_)if(n(l)!==null)_=!0,he(O);else{var J=n(u);J!==null&&pe(C,J.startTime-G)}}function O(G,J){_=!1,y&&(y=!1,w(T),T=-1),g=!0;var ae=d;try{for(S(J),f=n(l);f!==null&&(!(f.expirationTime>J)||G&&!P());){var ye=f.callback;if(typeof ye=="function"){f.callback=null,d=f.priorityLevel;var ue=ye(f.expirationTime<=J);J=t.unstable_now(),typeof ue=="function"?f.callback=ue:f===n(l)&&r(l),S(J)}else r(l);f=n(l)}if(f!==null)var D=!0;else{var z=n(u);z!==null&&pe(C,z.startTime-J),D=!1}return D}finally{f=null,d=ae,g=!1}}var M=!1,R=null,T=-1,b=5,x=-1;function P(){return!(t.unstable_now()-x<b)}function k(){if(R!==null){var G=t.unstable_now();x=G;var J=!0;try{J=R(!0,G)}finally{J?A():(M=!1,R=null)}}else M=!1}var A;if(typeof m=="function")A=function(){m(k)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,le=Z.port2;Z.port1.onmessage=k,A=function(){le.postMessage(null)}}else A=function(){E(k,0)};function he(G){R=G,M||(M=!0,A())}function pe(G,J){T=E(function(){G(t.unstable_now())},J)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(G){G.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,he(O))},t.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<G?Math.floor(1e3/G):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(G){switch(d){case 1:case 2:case 3:var J=3;break;default:J=d}var ae=d;d=J;try{return G()}finally{d=ae}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(G,J){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var ae=d;d=G;try{return J()}finally{d=ae}},t.unstable_scheduleCallback=function(G,J,ae){var ye=t.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?ye+ae:ye):ae=ye,G){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=ae+ue,G={id:h++,callback:J,priorityLevel:G,startTime:ae,expirationTime:ue,sortIndex:-1},ae>ye?(G.sortIndex=ae,e(u,G),n(l)===null&&G===n(u)&&(y?(w(T),T=-1):y=!0,pe(C,ae-ye))):(G.sortIndex=ue,e(l,G),_||g||(_=!0,he(O))),G},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(G){var J=d;return function(){var ae=d;d=J;try{return G.apply(this,arguments)}finally{d=ae}}}})(Bw);jw.exports=Bw;var $R=jw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var UR=F,yn=$R;function K(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $w=new Set,Fa={};function us(t,e){Zs(t,e),Zs(t+"Capture",e)}function Zs(t,e){for(Fa[t]=e,t=0;t<e.length;t++)$w.add(e[t])}var vr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),np=Object.prototype.hasOwnProperty,HR=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,tv={},nv={};function WR(t){return np.call(nv,t)?!0:np.call(tv,t)?!1:HR.test(t)?nv[t]=!0:(tv[t]=!0,!1)}function qR(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function GR(t,e,n,r){if(e===null||typeof e>"u"||qR(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Xt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ct={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ct[t]=new Xt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ct[e]=new Xt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ct[t]=new Xt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ct[t]=new Xt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ct[t]=new Xt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ct[t]=new Xt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ct[t]=new Xt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ct[t]=new Xt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ct[t]=new Xt(t,5,!1,t.toLowerCase(),null,!1,!1)});var em=/[\-:]([a-z])/g;function tm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(em,tm);Ct[e]=new Xt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(em,tm);Ct[e]=new Xt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(em,tm);Ct[e]=new Xt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ct[t]=new Xt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ct.xlinkHref=new Xt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ct[t]=new Xt(t,1,!1,t.toLowerCase(),null,!0,!0)});function nm(t,e,n,r){var i=Ct.hasOwnProperty(e)?Ct[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(GR(e,n,i,r)&&(n=null),r||i===null?WR(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Ir=UR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ou=Symbol.for("react.element"),Cs=Symbol.for("react.portal"),Ps=Symbol.for("react.fragment"),rm=Symbol.for("react.strict_mode"),rp=Symbol.for("react.profiler"),Uw=Symbol.for("react.provider"),Hw=Symbol.for("react.context"),im=Symbol.for("react.forward_ref"),ip=Symbol.for("react.suspense"),sp=Symbol.for("react.suspense_list"),sm=Symbol.for("react.memo"),Vr=Symbol.for("react.lazy"),Ww=Symbol.for("react.offscreen"),rv=Symbol.iterator;function qo(t){return t===null||typeof t!="object"?null:(t=rv&&t[rv]||t["@@iterator"],typeof t=="function"?t:null)}var nt=Object.assign,Wf;function aa(t){if(Wf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Wf=e&&e[1]||""}return`
`+Wf+t}var qf=!1;function Gf(t,e){if(!t||qf)return"";qf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{qf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?aa(t):""}function KR(t){switch(t.tag){case 5:return aa(t.type);case 16:return aa("Lazy");case 13:return aa("Suspense");case 19:return aa("SuspenseList");case 0:case 2:case 15:return t=Gf(t.type,!1),t;case 11:return t=Gf(t.type.render,!1),t;case 1:return t=Gf(t.type,!0),t;default:return""}}function op(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ps:return"Fragment";case Cs:return"Portal";case rp:return"Profiler";case rm:return"StrictMode";case ip:return"Suspense";case sp:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Hw:return(t.displayName||"Context")+".Consumer";case Uw:return(t._context.displayName||"Context")+".Provider";case im:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case sm:return e=t.displayName||null,e!==null?e:op(t.type)||"Memo";case Vr:e=t._payload,t=t._init;try{return op(t(e))}catch{}}return null}function QR(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return op(e);case 8:return e===rm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ui(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function qw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function YR(t){var e=qw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function au(t){t._valueTracker||(t._valueTracker=YR(t))}function Gw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=qw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Sc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ap(t,e){var n=e.checked;return nt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function iv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ui(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Kw(t,e){e=e.checked,e!=null&&nm(t,"checked",e,!1)}function lp(t,e){Kw(t,e);var n=ui(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?up(t,e.type,n):e.hasOwnProperty("defaultValue")&&up(t,e.type,ui(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function sv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function up(t,e,n){(e!=="number"||Sc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var la=Array.isArray;function $s(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ui(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function cp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(K(91));return nt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ov(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(K(92));if(la(n)){if(1<n.length)throw Error(K(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ui(n)}}function Qw(t,e){var n=ui(e.value),r=ui(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function av(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Yw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Yw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var lu,Xw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(lu=lu||document.createElement("div"),lu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=lu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function za(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var wa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},XR=["Webkit","ms","Moz","O"];Object.keys(wa).forEach(function(t){XR.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),wa[e]=wa[t]})});function Jw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||wa.hasOwnProperty(t)&&wa[t]?(""+e).trim():e+"px"}function Zw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Jw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var JR=nt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fp(t,e){if(e){if(JR[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(K(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(K(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(K(61))}if(e.style!=null&&typeof e.style!="object")throw Error(K(62))}}function dp(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pp=null;function om(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var gp=null,Us=null,Hs=null;function lv(t){if(t=Tl(t)){if(typeof gp!="function")throw Error(K(280));var e=t.stateNode;e&&(e=Nh(e),gp(t.stateNode,t.type,e))}}function e5(t){Us?Hs?Hs.push(t):Hs=[t]:Us=t}function t5(){if(Us){var t=Us,e=Hs;if(Hs=Us=null,lv(t),e)for(t=0;t<e.length;t++)lv(e[t])}}function n5(t,e){return t(e)}function r5(){}var Kf=!1;function i5(t,e,n){if(Kf)return t(e,n);Kf=!0;try{return n5(t,e,n)}finally{Kf=!1,(Us!==null||Hs!==null)&&(r5(),t5())}}function ja(t,e){var n=t.stateNode;if(n===null)return null;var r=Nh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(K(231,e,typeof n));return n}var mp=!1;if(vr)try{var Go={};Object.defineProperty(Go,"passive",{get:function(){mp=!0}}),window.addEventListener("test",Go,Go),window.removeEventListener("test",Go,Go)}catch{mp=!1}function ZR(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var Ea=!1,Tc=null,bc=!1,_p=null,eI={onError:function(t){Ea=!0,Tc=t}};function tI(t,e,n,r,i,s,o,a,l){Ea=!1,Tc=null,ZR.apply(eI,arguments)}function nI(t,e,n,r,i,s,o,a,l){if(tI.apply(this,arguments),Ea){if(Ea){var u=Tc;Ea=!1,Tc=null}else throw Error(K(198));bc||(bc=!0,_p=u)}}function cs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function s5(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function uv(t){if(cs(t)!==t)throw Error(K(188))}function rI(t){var e=t.alternate;if(!e){if(e=cs(t),e===null)throw Error(K(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return uv(i),t;if(s===r)return uv(i),e;s=s.sibling}throw Error(K(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(K(189))}}if(n.alternate!==r)throw Error(K(190))}if(n.tag!==3)throw Error(K(188));return n.stateNode.current===n?t:e}function o5(t){return t=rI(t),t!==null?a5(t):null}function a5(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=a5(t);if(e!==null)return e;t=t.sibling}return null}var l5=yn.unstable_scheduleCallback,cv=yn.unstable_cancelCallback,iI=yn.unstable_shouldYield,sI=yn.unstable_requestPaint,ct=yn.unstable_now,oI=yn.unstable_getCurrentPriorityLevel,am=yn.unstable_ImmediatePriority,u5=yn.unstable_UserBlockingPriority,xc=yn.unstable_NormalPriority,aI=yn.unstable_LowPriority,c5=yn.unstable_IdlePriority,Oh=null,Yn=null;function lI(t){if(Yn&&typeof Yn.onCommitFiberRoot=="function")try{Yn.onCommitFiberRoot(Oh,t,void 0,(t.current.flags&128)===128)}catch{}}var Dn=Math.clz32?Math.clz32:hI,uI=Math.log,cI=Math.LN2;function hI(t){return t>>>=0,t===0?32:31-(uI(t)/cI|0)|0}var uu=64,cu=4194304;function ua(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Rc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ua(a):(s&=o,s!==0&&(r=ua(s)))}else o=n&~i,o!==0?r=ua(o):s!==0&&(r=ua(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Dn(e),i=1<<n,r|=t[n],e&=~i;return r}function fI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Dn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=fI(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function yp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function h5(){var t=uu;return uu<<=1,!(uu&4194240)&&(uu=64),t}function Qf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function El(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Dn(e),t[e]=n}function pI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Dn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function lm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Dn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Ve=0;function f5(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var d5,um,p5,g5,m5,vp=!1,hu=[],Kr=null,Qr=null,Yr=null,Ba=new Map,$a=new Map,jr=[],gI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hv(t,e){switch(t){case"focusin":case"focusout":Kr=null;break;case"dragenter":case"dragleave":Qr=null;break;case"mouseover":case"mouseout":Yr=null;break;case"pointerover":case"pointerout":Ba.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":$a.delete(e.pointerId)}}function Ko(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Tl(e),e!==null&&um(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function mI(t,e,n,r,i){switch(e){case"focusin":return Kr=Ko(Kr,t,e,n,r,i),!0;case"dragenter":return Qr=Ko(Qr,t,e,n,r,i),!0;case"mouseover":return Yr=Ko(Yr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ba.set(s,Ko(Ba.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,$a.set(s,Ko($a.get(s)||null,t,e,n,r,i)),!0}return!1}function _5(t){var e=ji(t.target);if(e!==null){var n=cs(e);if(n!==null){if(e=n.tag,e===13){if(e=s5(n),e!==null){t.blockedOn=e,m5(t.priority,function(){p5(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Qu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=wp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);pp=r,n.target.dispatchEvent(r),pp=null}else return e=Tl(n),e!==null&&um(e),t.blockedOn=n,!1;e.shift()}return!0}function fv(t,e,n){Qu(t)&&n.delete(e)}function _I(){vp=!1,Kr!==null&&Qu(Kr)&&(Kr=null),Qr!==null&&Qu(Qr)&&(Qr=null),Yr!==null&&Qu(Yr)&&(Yr=null),Ba.forEach(fv),$a.forEach(fv)}function Qo(t,e){t.blockedOn===e&&(t.blockedOn=null,vp||(vp=!0,yn.unstable_scheduleCallback(yn.unstable_NormalPriority,_I)))}function Ua(t){function e(i){return Qo(i,t)}if(0<hu.length){Qo(hu[0],t);for(var n=1;n<hu.length;n++){var r=hu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Kr!==null&&Qo(Kr,t),Qr!==null&&Qo(Qr,t),Yr!==null&&Qo(Yr,t),Ba.forEach(e),$a.forEach(e),n=0;n<jr.length;n++)r=jr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<jr.length&&(n=jr[0],n.blockedOn===null);)_5(n),n.blockedOn===null&&jr.shift()}var Ws=Ir.ReactCurrentBatchConfig,Ic=!0;function yI(t,e,n,r){var i=Ve,s=Ws.transition;Ws.transition=null;try{Ve=1,cm(t,e,n,r)}finally{Ve=i,Ws.transition=s}}function vI(t,e,n,r){var i=Ve,s=Ws.transition;Ws.transition=null;try{Ve=4,cm(t,e,n,r)}finally{Ve=i,Ws.transition=s}}function cm(t,e,n,r){if(Ic){var i=wp(t,e,n,r);if(i===null)sd(t,e,r,Ac,n),hv(t,r);else if(mI(i,t,e,n,r))r.stopPropagation();else if(hv(t,r),e&4&&-1<gI.indexOf(t)){for(;i!==null;){var s=Tl(i);if(s!==null&&d5(s),s=wp(t,e,n,r),s===null&&sd(t,e,r,Ac,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else sd(t,e,r,null,n)}}var Ac=null;function wp(t,e,n,r){if(Ac=null,t=om(r),t=ji(t),t!==null)if(e=cs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=s5(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ac=t,null}function y5(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(oI()){case am:return 1;case u5:return 4;case xc:case aI:return 16;case c5:return 536870912;default:return 16}default:return 16}}var $r=null,hm=null,Yu=null;function v5(){if(Yu)return Yu;var t,e=hm,n=e.length,r,i="value"in $r?$r.value:$r.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Yu=i.slice(t,1<r?1-r:void 0)}function Xu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function fu(){return!0}function dv(){return!1}function wn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?fu:dv,this.isPropagationStopped=dv,this}return nt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fu)},persist:function(){},isPersistent:fu}),e}var So={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fm=wn(So),Sl=nt({},So,{view:0,detail:0}),wI=wn(Sl),Yf,Xf,Yo,Lh=nt({},Sl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Yo&&(Yo&&t.type==="mousemove"?(Yf=t.screenX-Yo.screenX,Xf=t.screenY-Yo.screenY):Xf=Yf=0,Yo=t),Yf)},movementY:function(t){return"movementY"in t?t.movementY:Xf}}),pv=wn(Lh),EI=nt({},Lh,{dataTransfer:0}),SI=wn(EI),TI=nt({},Sl,{relatedTarget:0}),Jf=wn(TI),bI=nt({},So,{animationName:0,elapsedTime:0,pseudoElement:0}),xI=wn(bI),RI=nt({},So,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),II=wn(RI),AI=nt({},So,{data:0}),gv=wn(AI),CI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},PI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function OI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=kI[t])?!!e[t]:!1}function dm(){return OI}var LI=nt({},Sl,{key:function(t){if(t.key){var e=CI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Xu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?PI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dm,charCode:function(t){return t.type==="keypress"?Xu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Xu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),MI=wn(LI),DI=nt({},Lh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mv=wn(DI),NI=nt({},Sl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dm}),VI=wn(NI),FI=nt({},So,{propertyName:0,elapsedTime:0,pseudoElement:0}),zI=wn(FI),jI=nt({},Lh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),BI=wn(jI),$I=[9,13,27,32],pm=vr&&"CompositionEvent"in window,Sa=null;vr&&"documentMode"in document&&(Sa=document.documentMode);var UI=vr&&"TextEvent"in window&&!Sa,w5=vr&&(!pm||Sa&&8<Sa&&11>=Sa),_v=" ",yv=!1;function E5(t,e){switch(t){case"keyup":return $I.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function S5(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ks=!1;function HI(t,e){switch(t){case"compositionend":return S5(e);case"keypress":return e.which!==32?null:(yv=!0,_v);case"textInput":return t=e.data,t===_v&&yv?null:t;default:return null}}function WI(t,e){if(ks)return t==="compositionend"||!pm&&E5(t,e)?(t=v5(),Yu=hm=$r=null,ks=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return w5&&e.locale!=="ko"?null:e.data;default:return null}}var qI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!qI[t.type]:e==="textarea"}function T5(t,e,n,r){e5(r),e=Cc(e,"onChange"),0<e.length&&(n=new fm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ta=null,Ha=null;function GI(t){M5(t,0)}function Mh(t){var e=Ms(t);if(Gw(e))return t}function KI(t,e){if(t==="change")return e}var b5=!1;if(vr){var Zf;if(vr){var ed="oninput"in document;if(!ed){var wv=document.createElement("div");wv.setAttribute("oninput","return;"),ed=typeof wv.oninput=="function"}Zf=ed}else Zf=!1;b5=Zf&&(!document.documentMode||9<document.documentMode)}function Ev(){Ta&&(Ta.detachEvent("onpropertychange",x5),Ha=Ta=null)}function x5(t){if(t.propertyName==="value"&&Mh(Ha)){var e=[];T5(e,Ha,t,om(t)),i5(GI,e)}}function QI(t,e,n){t==="focusin"?(Ev(),Ta=e,Ha=n,Ta.attachEvent("onpropertychange",x5)):t==="focusout"&&Ev()}function YI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Mh(Ha)}function XI(t,e){if(t==="click")return Mh(e)}function JI(t,e){if(t==="input"||t==="change")return Mh(e)}function ZI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var zn=typeof Object.is=="function"?Object.is:ZI;function Wa(t,e){if(zn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!np.call(e,i)||!zn(t[i],e[i]))return!1}return!0}function Sv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Tv(t,e){var n=Sv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sv(n)}}function R5(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?R5(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function I5(){for(var t=window,e=Sc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Sc(t.document)}return e}function gm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function e8(t){var e=I5(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&R5(n.ownerDocument.documentElement,n)){if(r!==null&&gm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Tv(n,s);var o=Tv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var t8=vr&&"documentMode"in document&&11>=document.documentMode,Os=null,Ep=null,ba=null,Sp=!1;function bv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sp||Os==null||Os!==Sc(r)||(r=Os,"selectionStart"in r&&gm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ba&&Wa(ba,r)||(ba=r,r=Cc(Ep,"onSelect"),0<r.length&&(e=new fm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Os)))}function du(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ls={animationend:du("Animation","AnimationEnd"),animationiteration:du("Animation","AnimationIteration"),animationstart:du("Animation","AnimationStart"),transitionend:du("Transition","TransitionEnd")},td={},A5={};vr&&(A5=document.createElement("div").style,"AnimationEvent"in window||(delete Ls.animationend.animation,delete Ls.animationiteration.animation,delete Ls.animationstart.animation),"TransitionEvent"in window||delete Ls.transitionend.transition);function Dh(t){if(td[t])return td[t];if(!Ls[t])return t;var e=Ls[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in A5)return td[t]=e[n];return t}var C5=Dh("animationend"),P5=Dh("animationiteration"),k5=Dh("animationstart"),O5=Dh("transitionend"),L5=new Map,xv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wi(t,e){L5.set(t,e),us(e,[t])}for(var nd=0;nd<xv.length;nd++){var rd=xv[nd],n8=rd.toLowerCase(),r8=rd[0].toUpperCase()+rd.slice(1);wi(n8,"on"+r8)}wi(C5,"onAnimationEnd");wi(P5,"onAnimationIteration");wi(k5,"onAnimationStart");wi("dblclick","onDoubleClick");wi("focusin","onFocus");wi("focusout","onBlur");wi(O5,"onTransitionEnd");Zs("onMouseEnter",["mouseout","mouseover"]);Zs("onMouseLeave",["mouseout","mouseover"]);Zs("onPointerEnter",["pointerout","pointerover"]);Zs("onPointerLeave",["pointerout","pointerover"]);us("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));us("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));us("onBeforeInput",["compositionend","keypress","textInput","paste"]);us("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));us("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));us("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ca="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),i8=new Set("cancel close invalid load scroll toggle".split(" ").concat(ca));function Rv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,nI(r,e,void 0,t),t.currentTarget=null}function M5(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Rv(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Rv(i,a,u),s=l}}}if(bc)throw t=_p,bc=!1,_p=null,t}function He(t,e){var n=e[Ip];n===void 0&&(n=e[Ip]=new Set);var r=t+"__bubble";n.has(r)||(D5(e,t,2,!1),n.add(r))}function id(t,e,n){var r=0;e&&(r|=4),D5(n,t,r,e)}var pu="_reactListening"+Math.random().toString(36).slice(2);function qa(t){if(!t[pu]){t[pu]=!0,$w.forEach(function(n){n!=="selectionchange"&&(i8.has(n)||id(n,!1,t),id(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[pu]||(e[pu]=!0,id("selectionchange",!1,e))}}function D5(t,e,n,r){switch(y5(e)){case 1:var i=yI;break;case 4:i=vI;break;default:i=cm}n=i.bind(null,e,n,t),i=void 0,!mp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function sd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ji(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}i5(function(){var u=s,h=om(n),f=[];e:{var d=L5.get(t);if(d!==void 0){var g=fm,_=t;switch(t){case"keypress":if(Xu(n)===0)break e;case"keydown":case"keyup":g=MI;break;case"focusin":_="focus",g=Jf;break;case"focusout":_="blur",g=Jf;break;case"beforeblur":case"afterblur":g=Jf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=pv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=SI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=VI;break;case C5:case P5:case k5:g=xI;break;case O5:g=zI;break;case"scroll":g=wI;break;case"wheel":g=BI;break;case"copy":case"cut":case"paste":g=II;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=mv}var y=(e&4)!==0,E=!y&&t==="scroll",w=y?d!==null?d+"Capture":null:d;y=[];for(var m=u,S;m!==null;){S=m;var C=S.stateNode;if(S.tag===5&&C!==null&&(S=C,w!==null&&(C=ja(m,w),C!=null&&y.push(Ga(m,C,S)))),E)break;m=m.return}0<y.length&&(d=new g(d,_,null,n,h),f.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&n!==pp&&(_=n.relatedTarget||n.fromElement)&&(ji(_)||_[wr]))break e;if((g||d)&&(d=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=u,_=_?ji(_):null,_!==null&&(E=cs(_),_!==E||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=u),g!==_)){if(y=pv,C="onMouseLeave",w="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(y=mv,C="onPointerLeave",w="onPointerEnter",m="pointer"),E=g==null?d:Ms(g),S=_==null?d:Ms(_),d=new y(C,m+"leave",g,n,h),d.target=E,d.relatedTarget=S,C=null,ji(h)===u&&(y=new y(w,m+"enter",_,n,h),y.target=S,y.relatedTarget=E,C=y),E=C,g&&_)t:{for(y=g,w=_,m=0,S=y;S;S=Es(S))m++;for(S=0,C=w;C;C=Es(C))S++;for(;0<m-S;)y=Es(y),m--;for(;0<S-m;)w=Es(w),S--;for(;m--;){if(y===w||w!==null&&y===w.alternate)break t;y=Es(y),w=Es(w)}y=null}else y=null;g!==null&&Iv(f,d,g,y,!1),_!==null&&E!==null&&Iv(f,E,_,y,!0)}}e:{if(d=u?Ms(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var O=KI;else if(vv(d))if(b5)O=JI;else{O=YI;var M=QI}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(O=XI);if(O&&(O=O(t,u))){T5(f,O,n,h);break e}M&&M(t,d,u),t==="focusout"&&(M=d._wrapperState)&&M.controlled&&d.type==="number"&&up(d,"number",d.value)}switch(M=u?Ms(u):window,t){case"focusin":(vv(M)||M.contentEditable==="true")&&(Os=M,Ep=u,ba=null);break;case"focusout":ba=Ep=Os=null;break;case"mousedown":Sp=!0;break;case"contextmenu":case"mouseup":case"dragend":Sp=!1,bv(f,n,h);break;case"selectionchange":if(t8)break;case"keydown":case"keyup":bv(f,n,h)}var R;if(pm)e:{switch(t){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else ks?E5(t,n)&&(T="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(w5&&n.locale!=="ko"&&(ks||T!=="onCompositionStart"?T==="onCompositionEnd"&&ks&&(R=v5()):($r=h,hm="value"in $r?$r.value:$r.textContent,ks=!0)),M=Cc(u,T),0<M.length&&(T=new gv(T,t,null,n,h),f.push({event:T,listeners:M}),R?T.data=R:(R=S5(n),R!==null&&(T.data=R)))),(R=UI?HI(t,n):WI(t,n))&&(u=Cc(u,"onBeforeInput"),0<u.length&&(h=new gv("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:u}),h.data=R))}M5(f,e)})}function Ga(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Cc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ja(t,n),s!=null&&r.unshift(Ga(t,s,i)),s=ja(t,e),s!=null&&r.push(Ga(t,s,i))),t=t.return}return r}function Es(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Iv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ja(n,s),l!=null&&o.unshift(Ga(n,l,a))):i||(l=ja(n,s),l!=null&&o.push(Ga(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var s8=/\r\n?/g,o8=/\u0000|\uFFFD/g;function Av(t){return(typeof t=="string"?t:""+t).replace(s8,`
`).replace(o8,"")}function gu(t,e,n){if(e=Av(e),Av(t)!==e&&n)throw Error(K(425))}function Pc(){}var Tp=null,bp=null;function xp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Rp=typeof setTimeout=="function"?setTimeout:void 0,a8=typeof clearTimeout=="function"?clearTimeout:void 0,Cv=typeof Promise=="function"?Promise:void 0,l8=typeof queueMicrotask=="function"?queueMicrotask:typeof Cv<"u"?function(t){return Cv.resolve(null).then(t).catch(u8)}:Rp;function u8(t){setTimeout(function(){throw t})}function od(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ua(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ua(e)}function Xr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Pv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var To=Math.random().toString(36).slice(2),Kn="__reactFiber$"+To,Ka="__reactProps$"+To,wr="__reactContainer$"+To,Ip="__reactEvents$"+To,c8="__reactListeners$"+To,h8="__reactHandles$"+To;function ji(t){var e=t[Kn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[wr]||n[Kn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Pv(t);t!==null;){if(n=t[Kn])return n;t=Pv(t)}return e}t=n,n=t.parentNode}return null}function Tl(t){return t=t[Kn]||t[wr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ms(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(K(33))}function Nh(t){return t[Ka]||null}var Ap=[],Ds=-1;function Ei(t){return{current:t}}function qe(t){0>Ds||(t.current=Ap[Ds],Ap[Ds]=null,Ds--)}function Be(t,e){Ds++,Ap[Ds]=t.current,t.current=e}var ci={},$t=Ei(ci),on=Ei(!1),Xi=ci;function eo(t,e){var n=t.type.contextTypes;if(!n)return ci;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function an(t){return t=t.childContextTypes,t!=null}function kc(){qe(on),qe($t)}function kv(t,e,n){if($t.current!==ci)throw Error(K(168));Be($t,e),Be(on,n)}function N5(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(K(108,QR(t)||"Unknown",i));return nt({},n,r)}function Oc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ci,Xi=$t.current,Be($t,t),Be(on,on.current),!0}function Ov(t,e,n){var r=t.stateNode;if(!r)throw Error(K(169));n?(t=N5(t,e,Xi),r.__reactInternalMemoizedMergedChildContext=t,qe(on),qe($t),Be($t,t)):qe(on),Be(on,n)}var ur=null,Vh=!1,ad=!1;function V5(t){ur===null?ur=[t]:ur.push(t)}function f8(t){Vh=!0,V5(t)}function Si(){if(!ad&&ur!==null){ad=!0;var t=0,e=Ve;try{var n=ur;for(Ve=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}ur=null,Vh=!1}catch(i){throw ur!==null&&(ur=ur.slice(t+1)),l5(am,Si),i}finally{Ve=e,ad=!1}}return null}var Ns=[],Vs=0,Lc=null,Mc=0,Sn=[],Tn=0,Ji=null,hr=1,fr="";function Di(t,e){Ns[Vs++]=Mc,Ns[Vs++]=Lc,Lc=t,Mc=e}function F5(t,e,n){Sn[Tn++]=hr,Sn[Tn++]=fr,Sn[Tn++]=Ji,Ji=t;var r=hr;t=fr;var i=32-Dn(r)-1;r&=~(1<<i),n+=1;var s=32-Dn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,hr=1<<32-Dn(e)+i|n<<i|r,fr=s+t}else hr=1<<s|n<<i|r,fr=t}function mm(t){t.return!==null&&(Di(t,1),F5(t,1,0))}function _m(t){for(;t===Lc;)Lc=Ns[--Vs],Ns[Vs]=null,Mc=Ns[--Vs],Ns[Vs]=null;for(;t===Ji;)Ji=Sn[--Tn],Sn[Tn]=null,fr=Sn[--Tn],Sn[Tn]=null,hr=Sn[--Tn],Sn[Tn]=null}var mn=null,pn=null,Qe=!1,Mn=null;function z5(t,e){var n=bn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Lv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,mn=t,pn=Xr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,mn=t,pn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ji!==null?{id:hr,overflow:fr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=bn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,mn=t,pn=null,!0):!1;default:return!1}}function Cp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Pp(t){if(Qe){var e=pn;if(e){var n=e;if(!Lv(t,e)){if(Cp(t))throw Error(K(418));e=Xr(n.nextSibling);var r=mn;e&&Lv(t,e)?z5(r,n):(t.flags=t.flags&-4097|2,Qe=!1,mn=t)}}else{if(Cp(t))throw Error(K(418));t.flags=t.flags&-4097|2,Qe=!1,mn=t}}}function Mv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;mn=t}function mu(t){if(t!==mn)return!1;if(!Qe)return Mv(t),Qe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!xp(t.type,t.memoizedProps)),e&&(e=pn)){if(Cp(t))throw j5(),Error(K(418));for(;e;)z5(t,e),e=Xr(e.nextSibling)}if(Mv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(K(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){pn=Xr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}pn=null}}else pn=mn?Xr(t.stateNode.nextSibling):null;return!0}function j5(){for(var t=pn;t;)t=Xr(t.nextSibling)}function to(){pn=mn=null,Qe=!1}function ym(t){Mn===null?Mn=[t]:Mn.push(t)}var d8=Ir.ReactCurrentBatchConfig;function Xo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(K(309));var r=n.stateNode}if(!r)throw Error(K(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(K(284));if(!n._owner)throw Error(K(290,t))}return t}function _u(t,e){throw t=Object.prototype.toString.call(e),Error(K(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Dv(t){var e=t._init;return e(t._payload)}function B5(t){function e(w,m){if(t){var S=w.deletions;S===null?(w.deletions=[m],w.flags|=16):S.push(m)}}function n(w,m){if(!t)return null;for(;m!==null;)e(w,m),m=m.sibling;return null}function r(w,m){for(w=new Map;m!==null;)m.key!==null?w.set(m.key,m):w.set(m.index,m),m=m.sibling;return w}function i(w,m){return w=ti(w,m),w.index=0,w.sibling=null,w}function s(w,m,S){return w.index=S,t?(S=w.alternate,S!==null?(S=S.index,S<m?(w.flags|=2,m):S):(w.flags|=2,m)):(w.flags|=1048576,m)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function a(w,m,S,C){return m===null||m.tag!==6?(m=pd(S,w.mode,C),m.return=w,m):(m=i(m,S),m.return=w,m)}function l(w,m,S,C){var O=S.type;return O===Ps?h(w,m,S.props.children,C,S.key):m!==null&&(m.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Vr&&Dv(O)===m.type)?(C=i(m,S.props),C.ref=Xo(w,m,S),C.return=w,C):(C=ic(S.type,S.key,S.props,null,w.mode,C),C.ref=Xo(w,m,S),C.return=w,C)}function u(w,m,S,C){return m===null||m.tag!==4||m.stateNode.containerInfo!==S.containerInfo||m.stateNode.implementation!==S.implementation?(m=gd(S,w.mode,C),m.return=w,m):(m=i(m,S.children||[]),m.return=w,m)}function h(w,m,S,C,O){return m===null||m.tag!==7?(m=Gi(S,w.mode,C,O),m.return=w,m):(m=i(m,S),m.return=w,m)}function f(w,m,S){if(typeof m=="string"&&m!==""||typeof m=="number")return m=pd(""+m,w.mode,S),m.return=w,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ou:return S=ic(m.type,m.key,m.props,null,w.mode,S),S.ref=Xo(w,null,m),S.return=w,S;case Cs:return m=gd(m,w.mode,S),m.return=w,m;case Vr:var C=m._init;return f(w,C(m._payload),S)}if(la(m)||qo(m))return m=Gi(m,w.mode,S,null),m.return=w,m;_u(w,m)}return null}function d(w,m,S,C){var O=m!==null?m.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return O!==null?null:a(w,m,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ou:return S.key===O?l(w,m,S,C):null;case Cs:return S.key===O?u(w,m,S,C):null;case Vr:return O=S._init,d(w,m,O(S._payload),C)}if(la(S)||qo(S))return O!==null?null:h(w,m,S,C,null);_u(w,S)}return null}function g(w,m,S,C,O){if(typeof C=="string"&&C!==""||typeof C=="number")return w=w.get(S)||null,a(m,w,""+C,O);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case ou:return w=w.get(C.key===null?S:C.key)||null,l(m,w,C,O);case Cs:return w=w.get(C.key===null?S:C.key)||null,u(m,w,C,O);case Vr:var M=C._init;return g(w,m,S,M(C._payload),O)}if(la(C)||qo(C))return w=w.get(S)||null,h(m,w,C,O,null);_u(m,C)}return null}function _(w,m,S,C){for(var O=null,M=null,R=m,T=m=0,b=null;R!==null&&T<S.length;T++){R.index>T?(b=R,R=null):b=R.sibling;var x=d(w,R,S[T],C);if(x===null){R===null&&(R=b);break}t&&R&&x.alternate===null&&e(w,R),m=s(x,m,T),M===null?O=x:M.sibling=x,M=x,R=b}if(T===S.length)return n(w,R),Qe&&Di(w,T),O;if(R===null){for(;T<S.length;T++)R=f(w,S[T],C),R!==null&&(m=s(R,m,T),M===null?O=R:M.sibling=R,M=R);return Qe&&Di(w,T),O}for(R=r(w,R);T<S.length;T++)b=g(R,w,T,S[T],C),b!==null&&(t&&b.alternate!==null&&R.delete(b.key===null?T:b.key),m=s(b,m,T),M===null?O=b:M.sibling=b,M=b);return t&&R.forEach(function(P){return e(w,P)}),Qe&&Di(w,T),O}function y(w,m,S,C){var O=qo(S);if(typeof O!="function")throw Error(K(150));if(S=O.call(S),S==null)throw Error(K(151));for(var M=O=null,R=m,T=m=0,b=null,x=S.next();R!==null&&!x.done;T++,x=S.next()){R.index>T?(b=R,R=null):b=R.sibling;var P=d(w,R,x.value,C);if(P===null){R===null&&(R=b);break}t&&R&&P.alternate===null&&e(w,R),m=s(P,m,T),M===null?O=P:M.sibling=P,M=P,R=b}if(x.done)return n(w,R),Qe&&Di(w,T),O;if(R===null){for(;!x.done;T++,x=S.next())x=f(w,x.value,C),x!==null&&(m=s(x,m,T),M===null?O=x:M.sibling=x,M=x);return Qe&&Di(w,T),O}for(R=r(w,R);!x.done;T++,x=S.next())x=g(R,w,T,x.value,C),x!==null&&(t&&x.alternate!==null&&R.delete(x.key===null?T:x.key),m=s(x,m,T),M===null?O=x:M.sibling=x,M=x);return t&&R.forEach(function(k){return e(w,k)}),Qe&&Di(w,T),O}function E(w,m,S,C){if(typeof S=="object"&&S!==null&&S.type===Ps&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case ou:e:{for(var O=S.key,M=m;M!==null;){if(M.key===O){if(O=S.type,O===Ps){if(M.tag===7){n(w,M.sibling),m=i(M,S.props.children),m.return=w,w=m;break e}}else if(M.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Vr&&Dv(O)===M.type){n(w,M.sibling),m=i(M,S.props),m.ref=Xo(w,M,S),m.return=w,w=m;break e}n(w,M);break}else e(w,M);M=M.sibling}S.type===Ps?(m=Gi(S.props.children,w.mode,C,S.key),m.return=w,w=m):(C=ic(S.type,S.key,S.props,null,w.mode,C),C.ref=Xo(w,m,S),C.return=w,w=C)}return o(w);case Cs:e:{for(M=S.key;m!==null;){if(m.key===M)if(m.tag===4&&m.stateNode.containerInfo===S.containerInfo&&m.stateNode.implementation===S.implementation){n(w,m.sibling),m=i(m,S.children||[]),m.return=w,w=m;break e}else{n(w,m);break}else e(w,m);m=m.sibling}m=gd(S,w.mode,C),m.return=w,w=m}return o(w);case Vr:return M=S._init,E(w,m,M(S._payload),C)}if(la(S))return _(w,m,S,C);if(qo(S))return y(w,m,S,C);_u(w,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,m!==null&&m.tag===6?(n(w,m.sibling),m=i(m,S),m.return=w,w=m):(n(w,m),m=pd(S,w.mode,C),m.return=w,w=m),o(w)):n(w,m)}return E}var no=B5(!0),$5=B5(!1),Dc=Ei(null),Nc=null,Fs=null,vm=null;function wm(){vm=Fs=Nc=null}function Em(t){var e=Dc.current;qe(Dc),t._currentValue=e}function kp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function qs(t,e){Nc=t,vm=Fs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(sn=!0),t.firstContext=null)}function An(t){var e=t._currentValue;if(vm!==t)if(t={context:t,memoizedValue:e,next:null},Fs===null){if(Nc===null)throw Error(K(308));Fs=t,Nc.dependencies={lanes:0,firstContext:t}}else Fs=Fs.next=t;return e}var Bi=null;function Sm(t){Bi===null?Bi=[t]:Bi.push(t)}function U5(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Sm(e)):(n.next=i.next,i.next=n),e.interleaved=n,Er(t,r)}function Er(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Fr=!1;function Tm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function H5(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function mr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Jr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Ae&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Er(t,n)}return i=r.interleaved,i===null?(e.next=e,Sm(r)):(e.next=i.next,i.next=e),r.interleaved=e,Er(t,n)}function Ju(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,lm(t,n)}}function Nv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Vc(t,e,n,r){var i=t.updateQueue;Fr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=u:a.next=u,h.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,h=u=l=null,a=s;do{var d=a.lane,g=a.eventTime;if((r&d)===d){h!==null&&(h=h.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,y=a;switch(d=e,g=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){f=_.call(g,f,d);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,d=typeof _=="function"?_.call(g,f,d):_,d==null)break e;f=nt({},f,d);break e;case 2:Fr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else g={eventTime:g,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(u=h=g,l=f):h=h.next=g,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(h===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);es|=o,t.lanes=o,t.memoizedState=f}}function Vv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(K(191,i));i.call(r)}}}var bl={},Xn=Ei(bl),Qa=Ei(bl),Ya=Ei(bl);function $i(t){if(t===bl)throw Error(K(174));return t}function bm(t,e){switch(Be(Ya,e),Be(Qa,t),Be(Xn,bl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:hp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=hp(e,t)}qe(Xn),Be(Xn,e)}function ro(){qe(Xn),qe(Qa),qe(Ya)}function W5(t){$i(Ya.current);var e=$i(Xn.current),n=hp(e,t.type);e!==n&&(Be(Qa,t),Be(Xn,n))}function xm(t){Qa.current===t&&(qe(Xn),qe(Qa))}var Ze=Ei(0);function Fc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ld=[];function Rm(){for(var t=0;t<ld.length;t++)ld[t]._workInProgressVersionPrimary=null;ld.length=0}var Zu=Ir.ReactCurrentDispatcher,ud=Ir.ReactCurrentBatchConfig,Zi=0,et=null,mt=null,St=null,zc=!1,xa=!1,Xa=0,p8=0;function Mt(){throw Error(K(321))}function Im(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!zn(t[n],e[n]))return!1;return!0}function Am(t,e,n,r,i,s){if(Zi=s,et=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Zu.current=t===null||t.memoizedState===null?y8:v8,t=n(r,i),xa){s=0;do{if(xa=!1,Xa=0,25<=s)throw Error(K(301));s+=1,St=mt=null,e.updateQueue=null,Zu.current=w8,t=n(r,i)}while(xa)}if(Zu.current=jc,e=mt!==null&&mt.next!==null,Zi=0,St=mt=et=null,zc=!1,e)throw Error(K(300));return t}function Cm(){var t=Xa!==0;return Xa=0,t}function Wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return St===null?et.memoizedState=St=t:St=St.next=t,St}function Cn(){if(mt===null){var t=et.alternate;t=t!==null?t.memoizedState:null}else t=mt.next;var e=St===null?et.memoizedState:St.next;if(e!==null)St=e,mt=t;else{if(t===null)throw Error(K(310));mt=t,t={memoizedState:mt.memoizedState,baseState:mt.baseState,baseQueue:mt.baseQueue,queue:mt.queue,next:null},St===null?et.memoizedState=St=t:St=St.next=t}return St}function Ja(t,e){return typeof e=="function"?e(t):e}function cd(t){var e=Cn(),n=e.queue;if(n===null)throw Error(K(311));n.lastRenderedReducer=t;var r=mt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var h=u.lane;if((Zi&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var f={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,et.lanes|=h,es|=h}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,zn(r,e.memoizedState)||(sn=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,et.lanes|=s,es|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function hd(t){var e=Cn(),n=e.queue;if(n===null)throw Error(K(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);zn(s,e.memoizedState)||(sn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function q5(){}function G5(t,e){var n=et,r=Cn(),i=e(),s=!zn(r.memoizedState,i);if(s&&(r.memoizedState=i,sn=!0),r=r.queue,Pm(Y5.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||St!==null&&St.memoizedState.tag&1){if(n.flags|=2048,Za(9,Q5.bind(null,n,r,i,e),void 0,null),Tt===null)throw Error(K(349));Zi&30||K5(n,e,i)}return i}function K5(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=et.updateQueue,e===null?(e={lastEffect:null,stores:null},et.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Q5(t,e,n,r){e.value=n,e.getSnapshot=r,X5(e)&&J5(t)}function Y5(t,e,n){return n(function(){X5(e)&&J5(t)})}function X5(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!zn(t,n)}catch{return!0}}function J5(t){var e=Er(t,1);e!==null&&Nn(e,t,1,-1)}function Fv(t){var e=Wn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ja,lastRenderedState:t},e.queue=t,t=t.dispatch=_8.bind(null,et,t),[e.memoizedState,t]}function Za(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=et.updateQueue,e===null?(e={lastEffect:null,stores:null},et.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Z5(){return Cn().memoizedState}function ec(t,e,n,r){var i=Wn();et.flags|=t,i.memoizedState=Za(1|e,n,void 0,r===void 0?null:r)}function Fh(t,e,n,r){var i=Cn();r=r===void 0?null:r;var s=void 0;if(mt!==null){var o=mt.memoizedState;if(s=o.destroy,r!==null&&Im(r,o.deps)){i.memoizedState=Za(e,n,s,r);return}}et.flags|=t,i.memoizedState=Za(1|e,n,s,r)}function zv(t,e){return ec(8390656,8,t,e)}function Pm(t,e){return Fh(2048,8,t,e)}function eE(t,e){return Fh(4,2,t,e)}function tE(t,e){return Fh(4,4,t,e)}function nE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function rE(t,e,n){return n=n!=null?n.concat([t]):null,Fh(4,4,nE.bind(null,e,t),n)}function km(){}function iE(t,e){var n=Cn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Im(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function sE(t,e){var n=Cn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Im(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function oE(t,e,n){return Zi&21?(zn(n,e)||(n=h5(),et.lanes|=n,es|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,sn=!0),t.memoizedState=n)}function g8(t,e){var n=Ve;Ve=n!==0&&4>n?n:4,t(!0);var r=ud.transition;ud.transition={};try{t(!1),e()}finally{Ve=n,ud.transition=r}}function aE(){return Cn().memoizedState}function m8(t,e,n){var r=ei(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},lE(t))uE(e,n);else if(n=U5(t,e,n,r),n!==null){var i=Qt();Nn(n,t,r,i),cE(n,e,r)}}function _8(t,e,n){var r=ei(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(lE(t))uE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,zn(a,o)){var l=e.interleaved;l===null?(i.next=i,Sm(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=U5(t,e,i,r),n!==null&&(i=Qt(),Nn(n,t,r,i),cE(n,e,r))}}function lE(t){var e=t.alternate;return t===et||e!==null&&e===et}function uE(t,e){xa=zc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function cE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,lm(t,n)}}var jc={readContext:An,useCallback:Mt,useContext:Mt,useEffect:Mt,useImperativeHandle:Mt,useInsertionEffect:Mt,useLayoutEffect:Mt,useMemo:Mt,useReducer:Mt,useRef:Mt,useState:Mt,useDebugValue:Mt,useDeferredValue:Mt,useTransition:Mt,useMutableSource:Mt,useSyncExternalStore:Mt,useId:Mt,unstable_isNewReconciler:!1},y8={readContext:An,useCallback:function(t,e){return Wn().memoizedState=[t,e===void 0?null:e],t},useContext:An,useEffect:zv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ec(4194308,4,nE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ec(4194308,4,t,e)},useInsertionEffect:function(t,e){return ec(4,2,t,e)},useMemo:function(t,e){var n=Wn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Wn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=m8.bind(null,et,t),[r.memoizedState,t]},useRef:function(t){var e=Wn();return t={current:t},e.memoizedState=t},useState:Fv,useDebugValue:km,useDeferredValue:function(t){return Wn().memoizedState=t},useTransition:function(){var t=Fv(!1),e=t[0];return t=g8.bind(null,t[1]),Wn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=et,i=Wn();if(Qe){if(n===void 0)throw Error(K(407));n=n()}else{if(n=e(),Tt===null)throw Error(K(349));Zi&30||K5(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,zv(Y5.bind(null,r,s,t),[t]),r.flags|=2048,Za(9,Q5.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Wn(),e=Tt.identifierPrefix;if(Qe){var n=fr,r=hr;n=(r&~(1<<32-Dn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Xa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=p8++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},v8={readContext:An,useCallback:iE,useContext:An,useEffect:Pm,useImperativeHandle:rE,useInsertionEffect:eE,useLayoutEffect:tE,useMemo:sE,useReducer:cd,useRef:Z5,useState:function(){return cd(Ja)},useDebugValue:km,useDeferredValue:function(t){var e=Cn();return oE(e,mt.memoizedState,t)},useTransition:function(){var t=cd(Ja)[0],e=Cn().memoizedState;return[t,e]},useMutableSource:q5,useSyncExternalStore:G5,useId:aE,unstable_isNewReconciler:!1},w8={readContext:An,useCallback:iE,useContext:An,useEffect:Pm,useImperativeHandle:rE,useInsertionEffect:eE,useLayoutEffect:tE,useMemo:sE,useReducer:hd,useRef:Z5,useState:function(){return hd(Ja)},useDebugValue:km,useDeferredValue:function(t){var e=Cn();return mt===null?e.memoizedState=t:oE(e,mt.memoizedState,t)},useTransition:function(){var t=hd(Ja)[0],e=Cn().memoizedState;return[t,e]},useMutableSource:q5,useSyncExternalStore:G5,useId:aE,unstable_isNewReconciler:!1};function On(t,e){if(t&&t.defaultProps){e=nt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Op(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:nt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var zh={isMounted:function(t){return(t=t._reactInternals)?cs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Qt(),i=ei(t),s=mr(r,i);s.payload=e,n!=null&&(s.callback=n),e=Jr(t,s,i),e!==null&&(Nn(e,t,i,r),Ju(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Qt(),i=ei(t),s=mr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Jr(t,s,i),e!==null&&(Nn(e,t,i,r),Ju(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Qt(),r=ei(t),i=mr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Jr(t,i,r),e!==null&&(Nn(e,t,r,n),Ju(e,t,r))}};function jv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Wa(n,r)||!Wa(i,s):!0}function hE(t,e,n){var r=!1,i=ci,s=e.contextType;return typeof s=="object"&&s!==null?s=An(s):(i=an(e)?Xi:$t.current,r=e.contextTypes,s=(r=r!=null)?eo(t,i):ci),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=zh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Bv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&zh.enqueueReplaceState(e,e.state,null)}function Lp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Tm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=An(s):(s=an(e)?Xi:$t.current,i.context=eo(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Op(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&zh.enqueueReplaceState(i,i.state,null),Vc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function io(t,e){try{var n="",r=e;do n+=KR(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function fd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Mp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var E8=typeof WeakMap=="function"?WeakMap:Map;function fE(t,e,n){n=mr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){$c||($c=!0,Hp=r),Mp(t,e)},n}function dE(t,e,n){n=mr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Mp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Mp(t,e),typeof r!="function"&&(Zr===null?Zr=new Set([this]):Zr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function $v(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new E8;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=D8.bind(null,t,e,n),e.then(t,t))}function Uv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Hv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=mr(-1,1),e.tag=2,Jr(n,e,1))),n.lanes|=1),t)}var S8=Ir.ReactCurrentOwner,sn=!1;function Kt(t,e,n,r){e.child=t===null?$5(e,null,n,r):no(e,t.child,n,r)}function Wv(t,e,n,r,i){n=n.render;var s=e.ref;return qs(e,i),r=Am(t,e,n,r,s,i),n=Cm(),t!==null&&!sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Sr(t,e,i)):(Qe&&n&&mm(e),e.flags|=1,Kt(t,e,r,i),e.child)}function qv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!zm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,pE(t,e,s,r,i)):(t=ic(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Wa,n(o,r)&&t.ref===e.ref)return Sr(t,e,i)}return e.flags|=1,t=ti(s,r),t.ref=e.ref,t.return=e,e.child=t}function pE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Wa(s,r)&&t.ref===e.ref)if(sn=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(sn=!0);else return e.lanes=t.lanes,Sr(t,e,i)}return Dp(t,e,n,r,i)}function gE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Be(js,fn),fn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Be(js,fn),fn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Be(js,fn),fn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Be(js,fn),fn|=r;return Kt(t,e,i,n),e.child}function mE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Dp(t,e,n,r,i){var s=an(n)?Xi:$t.current;return s=eo(e,s),qs(e,i),n=Am(t,e,n,r,s,i),r=Cm(),t!==null&&!sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Sr(t,e,i)):(Qe&&r&&mm(e),e.flags|=1,Kt(t,e,n,i),e.child)}function Gv(t,e,n,r,i){if(an(n)){var s=!0;Oc(e)}else s=!1;if(qs(e,i),e.stateNode===null)tc(t,e),hE(e,n,r),Lp(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=An(u):(u=an(n)?Xi:$t.current,u=eo(e,u));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Bv(e,o,r,u),Fr=!1;var d=e.memoizedState;o.state=d,Vc(e,r,o,i),l=e.memoizedState,a!==r||d!==l||on.current||Fr?(typeof h=="function"&&(Op(e,n,h,r),l=e.memoizedState),(a=Fr||jv(e,n,a,r,d,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,H5(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:On(e.type,a),o.props=u,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=An(l):(l=an(n)?Xi:$t.current,l=eo(e,l));var g=n.getDerivedStateFromProps;(h=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&Bv(e,o,r,l),Fr=!1,d=e.memoizedState,o.state=d,Vc(e,r,o,i);var _=e.memoizedState;a!==f||d!==_||on.current||Fr?(typeof g=="function"&&(Op(e,n,g,r),_=e.memoizedState),(u=Fr||jv(e,n,u,r,d,_,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Np(t,e,n,r,s,i)}function Np(t,e,n,r,i,s){mE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Ov(e,n,!1),Sr(t,e,s);r=e.stateNode,S8.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=no(e,t.child,null,s),e.child=no(e,null,a,s)):Kt(t,e,a,s),e.memoizedState=r.state,i&&Ov(e,n,!0),e.child}function _E(t){var e=t.stateNode;e.pendingContext?kv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&kv(t,e.context,!1),bm(t,e.containerInfo)}function Kv(t,e,n,r,i){return to(),ym(i),e.flags|=256,Kt(t,e,n,r),e.child}var Vp={dehydrated:null,treeContext:null,retryLane:0};function Fp(t){return{baseLanes:t,cachePool:null,transitions:null}}function yE(t,e,n){var r=e.pendingProps,i=Ze.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Be(Ze,i&1),t===null)return Pp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=$h(o,r,0,null),t=Gi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Fp(n),e.memoizedState=Vp,t):Om(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return T8(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=ti(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=ti(a,s):(s=Gi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Fp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Vp,r}return s=t.child,t=s.sibling,r=ti(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Om(t,e){return e=$h({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function yu(t,e,n,r){return r!==null&&ym(r),no(e,t.child,null,n),t=Om(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function T8(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=fd(Error(K(422))),yu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=$h({mode:"visible",children:r.children},i,0,null),s=Gi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&no(e,t.child,null,o),e.child.memoizedState=Fp(o),e.memoizedState=Vp,s);if(!(e.mode&1))return yu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(K(419)),r=fd(s,r,void 0),yu(t,e,o,r)}if(a=(o&t.childLanes)!==0,sn||a){if(r=Tt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Er(t,i),Nn(r,t,i,-1))}return Fm(),r=fd(Error(K(421))),yu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=N8.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,pn=Xr(i.nextSibling),mn=e,Qe=!0,Mn=null,t!==null&&(Sn[Tn++]=hr,Sn[Tn++]=fr,Sn[Tn++]=Ji,hr=t.id,fr=t.overflow,Ji=e),e=Om(e,r.children),e.flags|=4096,e)}function Qv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),kp(t.return,e,n)}function dd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function vE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Kt(t,e,r.children,n),r=Ze.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qv(t,n,e);else if(t.tag===19)Qv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Be(Ze,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Fc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),dd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Fc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}dd(e,!0,n,null,s);break;case"together":dd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function tc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Sr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),es|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(K(153));if(e.child!==null){for(t=e.child,n=ti(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ti(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function b8(t,e,n){switch(e.tag){case 3:_E(e),to();break;case 5:W5(e);break;case 1:an(e.type)&&Oc(e);break;case 4:bm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Be(Dc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Be(Ze,Ze.current&1),e.flags|=128,null):n&e.child.childLanes?yE(t,e,n):(Be(Ze,Ze.current&1),t=Sr(t,e,n),t!==null?t.sibling:null);Be(Ze,Ze.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return vE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Be(Ze,Ze.current),r)break;return null;case 22:case 23:return e.lanes=0,gE(t,e,n)}return Sr(t,e,n)}var wE,zp,EE,SE;wE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};zp=function(){};EE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,$i(Xn.current);var s=null;switch(n){case"input":i=ap(t,i),r=ap(t,r),s=[];break;case"select":i=nt({},i,{value:void 0}),r=nt({},r,{value:void 0}),s=[];break;case"textarea":i=cp(t,i),r=cp(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Pc)}fp(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Fa.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Fa.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&He("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};SE=function(t,e,n,r){n!==r&&(e.flags|=4)};function Jo(t,e){if(!Qe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Dt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function x8(t,e,n){var r=e.pendingProps;switch(_m(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Dt(e),null;case 1:return an(e.type)&&kc(),Dt(e),null;case 3:return r=e.stateNode,ro(),qe(on),qe($t),Rm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(mu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Mn!==null&&(Gp(Mn),Mn=null))),zp(t,e),Dt(e),null;case 5:xm(e);var i=$i(Ya.current);if(n=e.type,t!==null&&e.stateNode!=null)EE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(K(166));return Dt(e),null}if(t=$i(Xn.current),mu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Kn]=e,r[Ka]=s,t=(e.mode&1)!==0,n){case"dialog":He("cancel",r),He("close",r);break;case"iframe":case"object":case"embed":He("load",r);break;case"video":case"audio":for(i=0;i<ca.length;i++)He(ca[i],r);break;case"source":He("error",r);break;case"img":case"image":case"link":He("error",r),He("load",r);break;case"details":He("toggle",r);break;case"input":iv(r,s),He("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},He("invalid",r);break;case"textarea":ov(r,s),He("invalid",r)}fp(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&gu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&gu(r.textContent,a,t),i=["children",""+a]):Fa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&He("scroll",r)}switch(n){case"input":au(r),sv(r,s,!0);break;case"textarea":au(r),av(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Pc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Yw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Kn]=e,t[Ka]=r,wE(t,e,!1,!1),e.stateNode=t;e:{switch(o=dp(n,r),n){case"dialog":He("cancel",t),He("close",t),i=r;break;case"iframe":case"object":case"embed":He("load",t),i=r;break;case"video":case"audio":for(i=0;i<ca.length;i++)He(ca[i],t);i=r;break;case"source":He("error",t),i=r;break;case"img":case"image":case"link":He("error",t),He("load",t),i=r;break;case"details":He("toggle",t),i=r;break;case"input":iv(t,r),i=ap(t,r),He("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=nt({},r,{value:void 0}),He("invalid",t);break;case"textarea":ov(t,r),i=cp(t,r),He("invalid",t);break;default:i=r}fp(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Zw(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Xw(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&za(t,l):typeof l=="number"&&za(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Fa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&He("scroll",t):l!=null&&nm(t,s,l,o))}switch(n){case"input":au(t),sv(t,r,!1);break;case"textarea":au(t),av(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ui(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?$s(t,!!r.multiple,s,!1):r.defaultValue!=null&&$s(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Pc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Dt(e),null;case 6:if(t&&e.stateNode!=null)SE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(K(166));if(n=$i(Ya.current),$i(Xn.current),mu(e)){if(r=e.stateNode,n=e.memoizedProps,r[Kn]=e,(s=r.nodeValue!==n)&&(t=mn,t!==null))switch(t.tag){case 3:gu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&gu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Kn]=e,e.stateNode=r}return Dt(e),null;case 13:if(qe(Ze),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Qe&&pn!==null&&e.mode&1&&!(e.flags&128))j5(),to(),e.flags|=98560,s=!1;else if(s=mu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(K(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(K(317));s[Kn]=e}else to(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Dt(e),s=!1}else Mn!==null&&(Gp(Mn),Mn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ze.current&1?_t===0&&(_t=3):Fm())),e.updateQueue!==null&&(e.flags|=4),Dt(e),null);case 4:return ro(),zp(t,e),t===null&&qa(e.stateNode.containerInfo),Dt(e),null;case 10:return Em(e.type._context),Dt(e),null;case 17:return an(e.type)&&kc(),Dt(e),null;case 19:if(qe(Ze),s=e.memoizedState,s===null)return Dt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Jo(s,!1);else{if(_t!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Fc(t),o!==null){for(e.flags|=128,Jo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Be(Ze,Ze.current&1|2),e.child}t=t.sibling}s.tail!==null&&ct()>so&&(e.flags|=128,r=!0,Jo(s,!1),e.lanes=4194304)}else{if(!r)if(t=Fc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Jo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Qe)return Dt(e),null}else 2*ct()-s.renderingStartTime>so&&n!==1073741824&&(e.flags|=128,r=!0,Jo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ct(),e.sibling=null,n=Ze.current,Be(Ze,r?n&1|2:n&1),e):(Dt(e),null);case 22:case 23:return Vm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?fn&1073741824&&(Dt(e),e.subtreeFlags&6&&(e.flags|=8192)):Dt(e),null;case 24:return null;case 25:return null}throw Error(K(156,e.tag))}function R8(t,e){switch(_m(e),e.tag){case 1:return an(e.type)&&kc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ro(),qe(on),qe($t),Rm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return xm(e),null;case 13:if(qe(Ze),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(K(340));to()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return qe(Ze),null;case 4:return ro(),null;case 10:return Em(e.type._context),null;case 22:case 23:return Vm(),null;case 24:return null;default:return null}}var vu=!1,zt=!1,I8=typeof WeakSet=="function"?WeakSet:Set,ie=null;function zs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ot(t,e,r)}else n.current=null}function jp(t,e,n){try{n()}catch(r){ot(t,e,r)}}var Yv=!1;function A8(t,e){if(Tp=Ic,t=I5(),gm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,h=0,f=t,d=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)d=f,f=g;for(;;){if(f===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++h===r&&(l=o),(g=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(bp={focusedElem:t,selectionRange:n},Ic=!1,ie=e;ie!==null;)if(e=ie,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ie=t;else for(;ie!==null;){e=ie;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,E=_.memoizedState,w=e.stateNode,m=w.getSnapshotBeforeUpdate(e.elementType===e.type?y:On(e.type,y),E);w.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(K(163))}}catch(C){ot(e,e.return,C)}if(t=e.sibling,t!==null){t.return=e.return,ie=t;break}ie=e.return}return _=Yv,Yv=!1,_}function Ra(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&jp(e,n,s)}i=i.next}while(i!==r)}}function jh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Bp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function TE(t){var e=t.alternate;e!==null&&(t.alternate=null,TE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Kn],delete e[Ka],delete e[Ip],delete e[c8],delete e[h8])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function bE(t){return t.tag===5||t.tag===3||t.tag===4}function Xv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||bE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function $p(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Pc));else if(r!==4&&(t=t.child,t!==null))for($p(t,e,n),t=t.sibling;t!==null;)$p(t,e,n),t=t.sibling}function Up(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Up(t,e,n),t=t.sibling;t!==null;)Up(t,e,n),t=t.sibling}var xt=null,Ln=!1;function Mr(t,e,n){for(n=n.child;n!==null;)xE(t,e,n),n=n.sibling}function xE(t,e,n){if(Yn&&typeof Yn.onCommitFiberUnmount=="function")try{Yn.onCommitFiberUnmount(Oh,n)}catch{}switch(n.tag){case 5:zt||zs(n,e);case 6:var r=xt,i=Ln;xt=null,Mr(t,e,n),xt=r,Ln=i,xt!==null&&(Ln?(t=xt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):xt.removeChild(n.stateNode));break;case 18:xt!==null&&(Ln?(t=xt,n=n.stateNode,t.nodeType===8?od(t.parentNode,n):t.nodeType===1&&od(t,n),Ua(t)):od(xt,n.stateNode));break;case 4:r=xt,i=Ln,xt=n.stateNode.containerInfo,Ln=!0,Mr(t,e,n),xt=r,Ln=i;break;case 0:case 11:case 14:case 15:if(!zt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&jp(n,e,o),i=i.next}while(i!==r)}Mr(t,e,n);break;case 1:if(!zt&&(zs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ot(n,e,a)}Mr(t,e,n);break;case 21:Mr(t,e,n);break;case 22:n.mode&1?(zt=(r=zt)||n.memoizedState!==null,Mr(t,e,n),zt=r):Mr(t,e,n);break;default:Mr(t,e,n)}}function Jv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new I8),e.forEach(function(r){var i=V8.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function kn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:xt=a.stateNode,Ln=!1;break e;case 3:xt=a.stateNode.containerInfo,Ln=!0;break e;case 4:xt=a.stateNode.containerInfo,Ln=!0;break e}a=a.return}if(xt===null)throw Error(K(160));xE(s,o,i),xt=null,Ln=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ot(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)RE(e,t),e=e.sibling}function RE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(kn(e,t),Un(t),r&4){try{Ra(3,t,t.return),jh(3,t)}catch(y){ot(t,t.return,y)}try{Ra(5,t,t.return)}catch(y){ot(t,t.return,y)}}break;case 1:kn(e,t),Un(t),r&512&&n!==null&&zs(n,n.return);break;case 5:if(kn(e,t),Un(t),r&512&&n!==null&&zs(n,n.return),t.flags&32){var i=t.stateNode;try{za(i,"")}catch(y){ot(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Kw(i,s),dp(a,o);var u=dp(a,s);for(o=0;o<l.length;o+=2){var h=l[o],f=l[o+1];h==="style"?Zw(i,f):h==="dangerouslySetInnerHTML"?Xw(i,f):h==="children"?za(i,f):nm(i,h,f,u)}switch(a){case"input":lp(i,s);break;case"textarea":Qw(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?$s(i,!!s.multiple,g,!1):d!==!!s.multiple&&(s.defaultValue!=null?$s(i,!!s.multiple,s.defaultValue,!0):$s(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ka]=s}catch(y){ot(t,t.return,y)}}break;case 6:if(kn(e,t),Un(t),r&4){if(t.stateNode===null)throw Error(K(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){ot(t,t.return,y)}}break;case 3:if(kn(e,t),Un(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ua(e.containerInfo)}catch(y){ot(t,t.return,y)}break;case 4:kn(e,t),Un(t);break;case 13:kn(e,t),Un(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Dm=ct())),r&4&&Jv(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(zt=(u=zt)||h,kn(e,t),zt=u):kn(e,t),Un(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(ie=t,h=t.child;h!==null;){for(f=ie=h;ie!==null;){switch(d=ie,g=d.child,d.tag){case 0:case 11:case 14:case 15:Ra(4,d,d.return);break;case 1:zs(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){ot(r,n,y)}}break;case 5:zs(d,d.return);break;case 22:if(d.memoizedState!==null){e2(f);continue}}g!==null?(g.return=d,ie=g):e2(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Jw("display",o))}catch(y){ot(t,t.return,y)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){ot(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:kn(e,t),Un(t),r&4&&Jv(t);break;case 21:break;default:kn(e,t),Un(t)}}function Un(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(bE(n)){var r=n;break e}n=n.return}throw Error(K(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(za(i,""),r.flags&=-33);var s=Xv(t);Up(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Xv(t);$p(t,a,o);break;default:throw Error(K(161))}}catch(l){ot(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function C8(t,e,n){ie=t,IE(t)}function IE(t,e,n){for(var r=(t.mode&1)!==0;ie!==null;){var i=ie,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||vu;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||zt;a=vu;var u=zt;if(vu=o,(zt=l)&&!u)for(ie=i;ie!==null;)o=ie,l=o.child,o.tag===22&&o.memoizedState!==null?t2(i):l!==null?(l.return=o,ie=l):t2(i);for(;s!==null;)ie=s,IE(s),s=s.sibling;ie=i,vu=a,zt=u}Zv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,ie=s):Zv(t)}}function Zv(t){for(;ie!==null;){var e=ie;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:zt||jh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!zt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:On(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Vv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Vv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Ua(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(K(163))}zt||e.flags&512&&Bp(e)}catch(d){ot(e,e.return,d)}}if(e===t){ie=null;break}if(n=e.sibling,n!==null){n.return=e.return,ie=n;break}ie=e.return}}function e2(t){for(;ie!==null;){var e=ie;if(e===t){ie=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ie=n;break}ie=e.return}}function t2(t){for(;ie!==null;){var e=ie;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{jh(4,e)}catch(l){ot(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ot(e,i,l)}}var s=e.return;try{Bp(e)}catch(l){ot(e,s,l)}break;case 5:var o=e.return;try{Bp(e)}catch(l){ot(e,o,l)}}}catch(l){ot(e,e.return,l)}if(e===t){ie=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ie=a;break}ie=e.return}}var P8=Math.ceil,Bc=Ir.ReactCurrentDispatcher,Lm=Ir.ReactCurrentOwner,Rn=Ir.ReactCurrentBatchConfig,Ae=0,Tt=null,pt=null,At=0,fn=0,js=Ei(0),_t=0,el=null,es=0,Bh=0,Mm=0,Ia=null,tn=null,Dm=0,so=1/0,lr=null,$c=!1,Hp=null,Zr=null,wu=!1,Ur=null,Uc=0,Aa=0,Wp=null,nc=-1,rc=0;function Qt(){return Ae&6?ct():nc!==-1?nc:nc=ct()}function ei(t){return t.mode&1?Ae&2&&At!==0?At&-At:d8.transition!==null?(rc===0&&(rc=h5()),rc):(t=Ve,t!==0||(t=window.event,t=t===void 0?16:y5(t.type)),t):1}function Nn(t,e,n,r){if(50<Aa)throw Aa=0,Wp=null,Error(K(185));El(t,n,r),(!(Ae&2)||t!==Tt)&&(t===Tt&&(!(Ae&2)&&(Bh|=n),_t===4&&Br(t,At)),ln(t,r),n===1&&Ae===0&&!(e.mode&1)&&(so=ct()+500,Vh&&Si()))}function ln(t,e){var n=t.callbackNode;dI(t,e);var r=Rc(t,t===Tt?At:0);if(r===0)n!==null&&cv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&cv(n),e===1)t.tag===0?f8(n2.bind(null,t)):V5(n2.bind(null,t)),l8(function(){!(Ae&6)&&Si()}),n=null;else{switch(f5(r)){case 1:n=am;break;case 4:n=u5;break;case 16:n=xc;break;case 536870912:n=c5;break;default:n=xc}n=DE(n,AE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function AE(t,e){if(nc=-1,rc=0,Ae&6)throw Error(K(327));var n=t.callbackNode;if(Gs()&&t.callbackNode!==n)return null;var r=Rc(t,t===Tt?At:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Hc(t,r);else{e=r;var i=Ae;Ae|=2;var s=PE();(Tt!==t||At!==e)&&(lr=null,so=ct()+500,qi(t,e));do try{L8();break}catch(a){CE(t,a)}while(!0);wm(),Bc.current=s,Ae=i,pt!==null?e=0:(Tt=null,At=0,e=_t)}if(e!==0){if(e===2&&(i=yp(t),i!==0&&(r=i,e=qp(t,i))),e===1)throw n=el,qi(t,0),Br(t,r),ln(t,ct()),n;if(e===6)Br(t,r);else{if(i=t.current.alternate,!(r&30)&&!k8(i)&&(e=Hc(t,r),e===2&&(s=yp(t),s!==0&&(r=s,e=qp(t,s))),e===1))throw n=el,qi(t,0),Br(t,r),ln(t,ct()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(K(345));case 2:Ni(t,tn,lr);break;case 3:if(Br(t,r),(r&130023424)===r&&(e=Dm+500-ct(),10<e)){if(Rc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Qt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Rp(Ni.bind(null,t,tn,lr),e);break}Ni(t,tn,lr);break;case 4:if(Br(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Dn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ct()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*P8(r/1960))-r,10<r){t.timeoutHandle=Rp(Ni.bind(null,t,tn,lr),r);break}Ni(t,tn,lr);break;case 5:Ni(t,tn,lr);break;default:throw Error(K(329))}}}return ln(t,ct()),t.callbackNode===n?AE.bind(null,t):null}function qp(t,e){var n=Ia;return t.current.memoizedState.isDehydrated&&(qi(t,e).flags|=256),t=Hc(t,e),t!==2&&(e=tn,tn=n,e!==null&&Gp(e)),t}function Gp(t){tn===null?tn=t:tn.push.apply(tn,t)}function k8(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!zn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Br(t,e){for(e&=~Mm,e&=~Bh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Dn(e),r=1<<n;t[n]=-1,e&=~r}}function n2(t){if(Ae&6)throw Error(K(327));Gs();var e=Rc(t,0);if(!(e&1))return ln(t,ct()),null;var n=Hc(t,e);if(t.tag!==0&&n===2){var r=yp(t);r!==0&&(e=r,n=qp(t,r))}if(n===1)throw n=el,qi(t,0),Br(t,e),ln(t,ct()),n;if(n===6)throw Error(K(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ni(t,tn,lr),ln(t,ct()),null}function Nm(t,e){var n=Ae;Ae|=1;try{return t(e)}finally{Ae=n,Ae===0&&(so=ct()+500,Vh&&Si())}}function ts(t){Ur!==null&&Ur.tag===0&&!(Ae&6)&&Gs();var e=Ae;Ae|=1;var n=Rn.transition,r=Ve;try{if(Rn.transition=null,Ve=1,t)return t()}finally{Ve=r,Rn.transition=n,Ae=e,!(Ae&6)&&Si()}}function Vm(){fn=js.current,qe(js)}function qi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,a8(n)),pt!==null)for(n=pt.return;n!==null;){var r=n;switch(_m(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&kc();break;case 3:ro(),qe(on),qe($t),Rm();break;case 5:xm(r);break;case 4:ro();break;case 13:qe(Ze);break;case 19:qe(Ze);break;case 10:Em(r.type._context);break;case 22:case 23:Vm()}n=n.return}if(Tt=t,pt=t=ti(t.current,null),At=fn=e,_t=0,el=null,Mm=Bh=es=0,tn=Ia=null,Bi!==null){for(e=0;e<Bi.length;e++)if(n=Bi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Bi=null}return t}function CE(t,e){do{var n=pt;try{if(wm(),Zu.current=jc,zc){for(var r=et.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}zc=!1}if(Zi=0,St=mt=et=null,xa=!1,Xa=0,Lm.current=null,n===null||n.return===null){_t=1,el=e,pt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=At,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var d=h.alternate;d?(h.updateQueue=d.updateQueue,h.memoizedState=d.memoizedState,h.lanes=d.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=Uv(o);if(g!==null){g.flags&=-257,Hv(g,o,a,s,e),g.mode&1&&$v(s,u,e),e=g,l=u;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){$v(s,u,e),Fm();break e}l=Error(K(426))}}else if(Qe&&a.mode&1){var E=Uv(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Hv(E,o,a,s,e),ym(io(l,a));break e}}s=l=io(l,a),_t!==4&&(_t=2),Ia===null?Ia=[s]:Ia.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var w=fE(s,l,e);Nv(s,w);break e;case 1:a=l;var m=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Zr===null||!Zr.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var C=dE(s,a,e);Nv(s,C);break e}}s=s.return}while(s!==null)}OE(n)}catch(O){e=O,pt===n&&n!==null&&(pt=n=n.return);continue}break}while(!0)}function PE(){var t=Bc.current;return Bc.current=jc,t===null?jc:t}function Fm(){(_t===0||_t===3||_t===2)&&(_t=4),Tt===null||!(es&268435455)&&!(Bh&268435455)||Br(Tt,At)}function Hc(t,e){var n=Ae;Ae|=2;var r=PE();(Tt!==t||At!==e)&&(lr=null,qi(t,e));do try{O8();break}catch(i){CE(t,i)}while(!0);if(wm(),Ae=n,Bc.current=r,pt!==null)throw Error(K(261));return Tt=null,At=0,_t}function O8(){for(;pt!==null;)kE(pt)}function L8(){for(;pt!==null&&!iI();)kE(pt)}function kE(t){var e=ME(t.alternate,t,fn);t.memoizedProps=t.pendingProps,e===null?OE(t):pt=e,Lm.current=null}function OE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=R8(n,e),n!==null){n.flags&=32767,pt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{_t=6,pt=null;return}}else if(n=x8(n,e,fn),n!==null){pt=n;return}if(e=e.sibling,e!==null){pt=e;return}pt=e=t}while(e!==null);_t===0&&(_t=5)}function Ni(t,e,n){var r=Ve,i=Rn.transition;try{Rn.transition=null,Ve=1,M8(t,e,n,r)}finally{Rn.transition=i,Ve=r}return null}function M8(t,e,n,r){do Gs();while(Ur!==null);if(Ae&6)throw Error(K(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(K(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(pI(t,s),t===Tt&&(pt=Tt=null,At=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wu||(wu=!0,DE(xc,function(){return Gs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Rn.transition,Rn.transition=null;var o=Ve;Ve=1;var a=Ae;Ae|=4,Lm.current=null,A8(t,n),RE(n,t),e8(bp),Ic=!!Tp,bp=Tp=null,t.current=n,C8(n),sI(),Ae=a,Ve=o,Rn.transition=s}else t.current=n;if(wu&&(wu=!1,Ur=t,Uc=i),s=t.pendingLanes,s===0&&(Zr=null),lI(n.stateNode),ln(t,ct()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if($c)throw $c=!1,t=Hp,Hp=null,t;return Uc&1&&t.tag!==0&&Gs(),s=t.pendingLanes,s&1?t===Wp?Aa++:(Aa=0,Wp=t):Aa=0,Si(),null}function Gs(){if(Ur!==null){var t=f5(Uc),e=Rn.transition,n=Ve;try{if(Rn.transition=null,Ve=16>t?16:t,Ur===null)var r=!1;else{if(t=Ur,Ur=null,Uc=0,Ae&6)throw Error(K(331));var i=Ae;for(Ae|=4,ie=t.current;ie!==null;){var s=ie,o=s.child;if(ie.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(ie=u;ie!==null;){var h=ie;switch(h.tag){case 0:case 11:case 15:Ra(8,h,s)}var f=h.child;if(f!==null)f.return=h,ie=f;else for(;ie!==null;){h=ie;var d=h.sibling,g=h.return;if(TE(h),h===u){ie=null;break}if(d!==null){d.return=g,ie=d;break}ie=g}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var E=y.sibling;y.sibling=null,y=E}while(y!==null)}}ie=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ie=o;else e:for(;ie!==null;){if(s=ie,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ra(9,s,s.return)}var w=s.sibling;if(w!==null){w.return=s.return,ie=w;break e}ie=s.return}}var m=t.current;for(ie=m;ie!==null;){o=ie;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,ie=S;else e:for(o=m;ie!==null;){if(a=ie,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:jh(9,a)}}catch(O){ot(a,a.return,O)}if(a===o){ie=null;break e}var C=a.sibling;if(C!==null){C.return=a.return,ie=C;break e}ie=a.return}}if(Ae=i,Si(),Yn&&typeof Yn.onPostCommitFiberRoot=="function")try{Yn.onPostCommitFiberRoot(Oh,t)}catch{}r=!0}return r}finally{Ve=n,Rn.transition=e}}return!1}function r2(t,e,n){e=io(n,e),e=fE(t,e,1),t=Jr(t,e,1),e=Qt(),t!==null&&(El(t,1,e),ln(t,e))}function ot(t,e,n){if(t.tag===3)r2(t,t,n);else for(;e!==null;){if(e.tag===3){r2(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Zr===null||!Zr.has(r))){t=io(n,t),t=dE(e,t,1),e=Jr(e,t,1),t=Qt(),e!==null&&(El(e,1,t),ln(e,t));break}}e=e.return}}function D8(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Qt(),t.pingedLanes|=t.suspendedLanes&n,Tt===t&&(At&n)===n&&(_t===4||_t===3&&(At&130023424)===At&&500>ct()-Dm?qi(t,0):Mm|=n),ln(t,e)}function LE(t,e){e===0&&(t.mode&1?(e=cu,cu<<=1,!(cu&130023424)&&(cu=4194304)):e=1);var n=Qt();t=Er(t,e),t!==null&&(El(t,e,n),ln(t,n))}function N8(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),LE(t,n)}function V8(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(K(314))}r!==null&&r.delete(e),LE(t,n)}var ME;ME=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||on.current)sn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return sn=!1,b8(t,e,n);sn=!!(t.flags&131072)}else sn=!1,Qe&&e.flags&1048576&&F5(e,Mc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;tc(t,e),t=e.pendingProps;var i=eo(e,$t.current);qs(e,n),i=Am(null,e,r,t,i,n);var s=Cm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,an(r)?(s=!0,Oc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Tm(e),i.updater=zh,e.stateNode=i,i._reactInternals=e,Lp(e,r,t,n),e=Np(null,e,r,!0,s,n)):(e.tag=0,Qe&&s&&mm(e),Kt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(tc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=z8(r),t=On(r,t),i){case 0:e=Dp(null,e,r,t,n);break e;case 1:e=Gv(null,e,r,t,n);break e;case 11:e=Wv(null,e,r,t,n);break e;case 14:e=qv(null,e,r,On(r.type,t),n);break e}throw Error(K(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:On(r,i),Dp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:On(r,i),Gv(t,e,r,i,n);case 3:e:{if(_E(e),t===null)throw Error(K(387));r=e.pendingProps,s=e.memoizedState,i=s.element,H5(t,e),Vc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=io(Error(K(423)),e),e=Kv(t,e,r,n,i);break e}else if(r!==i){i=io(Error(K(424)),e),e=Kv(t,e,r,n,i);break e}else for(pn=Xr(e.stateNode.containerInfo.firstChild),mn=e,Qe=!0,Mn=null,n=$5(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(to(),r===i){e=Sr(t,e,n);break e}Kt(t,e,r,n)}e=e.child}return e;case 5:return W5(e),t===null&&Pp(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,xp(r,i)?o=null:s!==null&&xp(r,s)&&(e.flags|=32),mE(t,e),Kt(t,e,o,n),e.child;case 6:return t===null&&Pp(e),null;case 13:return yE(t,e,n);case 4:return bm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=no(e,null,r,n):Kt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:On(r,i),Wv(t,e,r,i,n);case 7:return Kt(t,e,e.pendingProps,n),e.child;case 8:return Kt(t,e,e.pendingProps.children,n),e.child;case 12:return Kt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Be(Dc,r._currentValue),r._currentValue=o,s!==null)if(zn(s.value,o)){if(s.children===i.children&&!on.current){e=Sr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=mr(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),kp(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(K(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),kp(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Kt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,qs(e,n),i=An(i),r=r(i),e.flags|=1,Kt(t,e,r,n),e.child;case 14:return r=e.type,i=On(r,e.pendingProps),i=On(r.type,i),qv(t,e,r,i,n);case 15:return pE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:On(r,i),tc(t,e),e.tag=1,an(r)?(t=!0,Oc(e)):t=!1,qs(e,n),hE(e,r,i),Lp(e,r,i,n),Np(null,e,r,!0,t,n);case 19:return vE(t,e,n);case 22:return gE(t,e,n)}throw Error(K(156,e.tag))};function DE(t,e){return l5(t,e)}function F8(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bn(t,e,n,r){return new F8(t,e,n,r)}function zm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function z8(t){if(typeof t=="function")return zm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===im)return 11;if(t===sm)return 14}return 2}function ti(t,e){var n=t.alternate;return n===null?(n=bn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ic(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")zm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ps:return Gi(n.children,i,s,e);case rm:o=8,i|=8;break;case rp:return t=bn(12,n,e,i|2),t.elementType=rp,t.lanes=s,t;case ip:return t=bn(13,n,e,i),t.elementType=ip,t.lanes=s,t;case sp:return t=bn(19,n,e,i),t.elementType=sp,t.lanes=s,t;case Ww:return $h(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Uw:o=10;break e;case Hw:o=9;break e;case im:o=11;break e;case sm:o=14;break e;case Vr:o=16,r=null;break e}throw Error(K(130,t==null?t:typeof t,""))}return e=bn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Gi(t,e,n,r){return t=bn(7,t,r,e),t.lanes=n,t}function $h(t,e,n,r){return t=bn(22,t,r,e),t.elementType=Ww,t.lanes=n,t.stateNode={isHidden:!1},t}function pd(t,e,n){return t=bn(6,t,null,e),t.lanes=n,t}function gd(t,e,n){return e=bn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function j8(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qf(0),this.expirationTimes=Qf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function jm(t,e,n,r,i,s,o,a,l){return t=new j8(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=bn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Tm(s),t}function B8(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Cs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function NE(t){if(!t)return ci;t=t._reactInternals;e:{if(cs(t)!==t||t.tag!==1)throw Error(K(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(an(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(K(171))}if(t.tag===1){var n=t.type;if(an(n))return N5(t,n,e)}return e}function VE(t,e,n,r,i,s,o,a,l){return t=jm(n,r,!0,t,i,s,o,a,l),t.context=NE(null),n=t.current,r=Qt(),i=ei(n),s=mr(r,i),s.callback=e??null,Jr(n,s,i),t.current.lanes=i,El(t,i,r),ln(t,r),t}function Uh(t,e,n,r){var i=e.current,s=Qt(),o=ei(i);return n=NE(n),e.context===null?e.context=n:e.pendingContext=n,e=mr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Jr(i,e,o),t!==null&&(Nn(t,i,o,s),Ju(t,i,o)),o}function Wc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function i2(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Bm(t,e){i2(t,e),(t=t.alternate)&&i2(t,e)}function $8(){return null}var FE=typeof reportError=="function"?reportError:function(t){console.error(t)};function $m(t){this._internalRoot=t}Hh.prototype.render=$m.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(K(409));Uh(t,e,null,null)};Hh.prototype.unmount=$m.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ts(function(){Uh(null,t,null,null)}),e[wr]=null}};function Hh(t){this._internalRoot=t}Hh.prototype.unstable_scheduleHydration=function(t){if(t){var e=g5();t={blockedOn:null,target:t,priority:e};for(var n=0;n<jr.length&&e!==0&&e<jr[n].priority;n++);jr.splice(n,0,t),n===0&&_5(t)}};function Um(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Wh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function s2(){}function U8(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Wc(o);s.call(u)}}var o=VE(e,r,t,0,null,!1,!1,"",s2);return t._reactRootContainer=o,t[wr]=o.current,qa(t.nodeType===8?t.parentNode:t),ts(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Wc(l);a.call(u)}}var l=jm(t,0,!1,null,null,!1,!1,"",s2);return t._reactRootContainer=l,t[wr]=l.current,qa(t.nodeType===8?t.parentNode:t),ts(function(){Uh(e,l,n,r)}),l}function qh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Wc(o);a.call(l)}}Uh(e,o,t,i)}else o=U8(n,e,t,i,r);return Wc(o)}d5=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ua(e.pendingLanes);n!==0&&(lm(e,n|1),ln(e,ct()),!(Ae&6)&&(so=ct()+500,Si()))}break;case 13:ts(function(){var r=Er(t,1);if(r!==null){var i=Qt();Nn(r,t,1,i)}}),Bm(t,1)}};um=function(t){if(t.tag===13){var e=Er(t,134217728);if(e!==null){var n=Qt();Nn(e,t,134217728,n)}Bm(t,134217728)}};p5=function(t){if(t.tag===13){var e=ei(t),n=Er(t,e);if(n!==null){var r=Qt();Nn(n,t,e,r)}Bm(t,e)}};g5=function(){return Ve};m5=function(t,e){var n=Ve;try{return Ve=t,e()}finally{Ve=n}};gp=function(t,e,n){switch(e){case"input":if(lp(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Nh(r);if(!i)throw Error(K(90));Gw(r),lp(r,i)}}}break;case"textarea":Qw(t,n);break;case"select":e=n.value,e!=null&&$s(t,!!n.multiple,e,!1)}};n5=Nm;r5=ts;var H8={usingClientEntryPoint:!1,Events:[Tl,Ms,Nh,e5,t5,Nm]},Zo={findFiberByHostInstance:ji,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},W8={bundleType:Zo.bundleType,version:Zo.version,rendererPackageName:Zo.rendererPackageName,rendererConfig:Zo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ir.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=o5(t),t===null?null:t.stateNode},findFiberByHostInstance:Zo.findFiberByHostInstance||$8,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Eu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Eu.isDisabled&&Eu.supportsFiber)try{Oh=Eu.inject(W8),Yn=Eu}catch{}}vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H8;vn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Um(e))throw Error(K(200));return B8(t,e,null,n)};vn.createRoot=function(t,e){if(!Um(t))throw Error(K(299));var n=!1,r="",i=FE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=jm(t,1,!1,null,null,n,!1,r,i),t[wr]=e.current,qa(t.nodeType===8?t.parentNode:t),new $m(e)};vn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(K(188)):(t=Object.keys(t).join(","),Error(K(268,t)));return t=o5(e),t=t===null?null:t.stateNode,t};vn.flushSync=function(t){return ts(t)};vn.hydrate=function(t,e,n){if(!Wh(e))throw Error(K(200));return qh(null,t,e,!0,n)};vn.hydrateRoot=function(t,e,n){if(!Um(t))throw Error(K(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=FE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=VE(e,null,t,1,n??null,i,!1,s,o),t[wr]=e.current,qa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Hh(e)};vn.render=function(t,e,n){if(!Wh(e))throw Error(K(200));return qh(null,t,e,!1,n)};vn.unmountComponentAtNode=function(t){if(!Wh(t))throw Error(K(40));return t._reactRootContainer?(ts(function(){qh(null,null,t,!1,function(){t._reactRootContainer=null,t[wr]=null})}),!0):!1};vn.unstable_batchedUpdates=Nm;vn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Wh(n))throw Error(K(200));if(t==null||t._reactInternals===void 0)throw Error(K(38));return qh(t,e,n,!1,r)};vn.version="18.3.1-next-f1338f8080-20240426";function zE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zE)}catch(t){console.error(t)}}zE(),zw.exports=vn;var q8=zw.exports,o2=q8;tp.createRoot=o2.createRoot,tp.hydrateRoot=o2.hydrateRoot;var jE={exports:{}};(function(t){const e=(()=>{const o={},a={font:"Standard",fontPath:"./fonts"};function l(D,z){let L={},V,j,H,te,Y=[[16384,"vLayout",2],[8192,"vLayout",1],[4096,"vRule5",!0],[2048,"vRule4",!0],[1024,"vRule3",!0],[512,"vRule2",!0],[256,"vRule1",!0],[128,"hLayout",2],[64,"hLayout",1],[32,"hRule6",!0],[16,"hRule5",!0],[8,"hRule4",!0],[4,"hRule3",!0],[2,"hRule2",!0],[1,"hRule1",!0]];for(V=z!==null?z:D,j=0,H=Y.length;j<H;)te=Y[j],V>=te[0]?(V=V-te[0],L[te[1]]=typeof L[te[1]]>"u"?te[2]:L[te[1]]):te[1]!=="vLayout"&&te[1]!=="hLayout"&&(L[te[1]]=!1),j++;return typeof L.hLayout>"u"?D===0?L.hLayout=1:D===-1?L.hLayout=0:L.hRule1||L.hRule2||L.hRule3||L.hRule4||L.hRule5||L.hRule6?L.hLayout=3:L.hLayout=2:L.hLayout===2&&(L.hRule1||L.hRule2||L.hRule3||L.hRule4||L.hRule5||L.hRule6)&&(L.hLayout=3),typeof L.vLayout>"u"?L.vRule1||L.vRule2||L.vRule3||L.vRule4||L.vRule5?L.vLayout=3:L.vLayout=0:L.vLayout===2&&(L.vRule1||L.vRule2||L.vRule3||L.vRule4||L.vRule5)&&(L.vLayout=3),L}function u(D,z,L){return D===z&&D!==L?D:!1}function h(D,z){let L="|/\\[]{}()<>";if(D==="_"){if(L.indexOf(z)!==-1)return z}else if(z==="_"&&L.indexOf(D)!==-1)return D;return!1}function f(D,z){let L="| /\\ [] {} () <>",V=L.indexOf(D),j=L.indexOf(z);if(V!==-1&&j!==-1&&V!==j&&Math.abs(V-j)!==1){const H=Math.max(V,j),te=H+1;return L.substring(H,te)}return!1}function d(D,z){let L="[] {} ()",V=L.indexOf(D),j=L.indexOf(z);return V!==-1&&j!==-1&&Math.abs(V-j)<=1?"|":!1}function g(D,z){let L="/\\ \\/ ><",V={0:"|",3:"Y",6:"X"},j=L.indexOf(D),H=L.indexOf(z);return j!==-1&&H!==-1&&H-j===1?V[j]:!1}function _(D,z,L){return D===L&&z===L?L:!1}function y(D,z){return D===z?D:!1}function E(D,z){let L="|/\\[]{}()<>";if(D==="_"){if(L.indexOf(z)!==-1)return z}else if(z==="_"&&L.indexOf(D)!==-1)return D;return!1}function w(D,z){let L="| /\\ [] {} () <>",V=L.indexOf(D),j=L.indexOf(z);if(V!==-1&&j!==-1&&V!==j&&Math.abs(V-j)!==1){const H=Math.max(V,j),te=H+1;return L.substring(H,te)}return!1}function m(D,z){return D==="-"&&z==="_"||D==="_"&&z==="-"?"=":!1}function S(D,z){return D==="|"&&z==="|"?"|":!1}function C(D,z,L){return z===" "||z===""||z===L&&D!==" "?D:z}function O(D,z,L){if(L.fittingRules.vLayout===0)return"invalid";let V,j=Math.min(D.length,z.length),H,te,Y=!1,Q;if(j===0)return"invalid";for(V=0;V<j;V++)if(H=D.substring(V,V+1),te=z.substring(V,V+1),H!==" "&&te!==" "){if(L.fittingRules.vLayout===1)return"invalid";if(L.fittingRules.vLayout===2)return"end";if(S(H,te)){Y=Y||!1;continue}if(Q=!1,Q=L.fittingRules.vRule1?y(H,te):Q,Q=!Q&&L.fittingRules.vRule2?E(H,te):Q,Q=!Q&&L.fittingRules.vRule3?w(H,te):Q,Q=!Q&&L.fittingRules.vRule4?m(H,te):Q,Y=!0,!Q)return"invalid"}return Y?"end":"valid"}function M(D,z,L){let V=D.length,j=D.length;z.length;let H,te,Y,Q=1,oe,Me,Oe;for(;Q<=V;){for(H=D.slice(Math.max(0,j-Q),j),te=z.slice(0,Math.min(V,Q)),Y=te.length,Oe="",oe=0;oe<Y;oe++)if(Me=O(H[oe],te[oe],L),Me==="end")Oe=Me;else if(Me==="invalid"){Oe=Me;break}else Oe===""&&(Oe="valid");if(Oe==="invalid"){Q--;break}if(Oe==="end")break;Oe==="valid"&&Q++}return Math.min(V,Q)}function R(D,z,L){let V,j=Math.min(D.length,z.length),H,te,Y="",Q;for(V=0;V<j;V++)H=D.substring(V,V+1),te=z.substring(V,V+1),H!==" "&&te!==" "?L.fittingRules.vLayout===1||L.fittingRules.vLayout===2?Y+=C(H,te):(Q=!1,Q=L.fittingRules.vRule5?S(H,te):Q,Q=!Q&&L.fittingRules.vRule1?y(H,te):Q,Q=!Q&&L.fittingRules.vRule2?E(H,te):Q,Q=!Q&&L.fittingRules.vRule3?w(H,te):Q,Q=!Q&&L.fittingRules.vRule4?m(H,te):Q,Y+=Q):Y+=C(H,te);return Y}function T(D,z,L,V){let j=D.length,H=z.length,te=D.slice(0,Math.max(0,j-L)),Y=D.slice(Math.max(0,j-L),j),Q=z.slice(0,Math.min(L,H)),oe,Me,Oe,Pe=[],De,Ht=[];for(Me=Y.length,oe=0;oe<Me;oe++)oe>=H?Oe=Y[oe]:Oe=R(Y[oe],Q[oe],V),Pe.push(Oe);return De=z.slice(Math.min(L,H),H),Ht.concat(te,Pe,De)}function b(D,z){let L,V=D.length,j="";for(L=0;L<z;L++)j+=" ";for(L=0;L<V;L++)D[L]+=j}function x(D,z,L){let V=D[0].length,j=z[0].length,H;return V>j?b(z,V-j):j>V&&b(D,j-V),H=M(D,z,L),T(D,z,H,L)}function P(D,z,L){if(L.fittingRules.hLayout===0)return 0;let V,j=D.length,H=z.length,te=j,Y=1,Q=!1,oe=!1,Me,Oe,Pe,De;if(j===0)return 0;e:for(;Y<=te;){const Ht=j-Y;for(Me=D.substring(Ht,Ht+Y),Oe=z.substring(0,Math.min(Y,H)),V=0;V<Math.min(Y,H);V++)if(Pe=Me.substring(V,V+1),De=Oe.substring(V,V+1),Pe!==" "&&De!==" "){if(L.fittingRules.hLayout===1){Y=Y-1;break e}else if(L.fittingRules.hLayout===2){(Pe===L.hardBlank||De===L.hardBlank)&&(Y=Y-1);break e}else if(Q=!0,oe=!1,oe=L.fittingRules.hRule1?u(Pe,De,L.hardBlank):oe,oe=!oe&&L.fittingRules.hRule2?h(Pe,De,L.hardBlank):oe,oe=!oe&&L.fittingRules.hRule3?f(Pe,De,L.hardBlank):oe,oe=!oe&&L.fittingRules.hRule4?d(Pe,De,L.hardBlank):oe,oe=!oe&&L.fittingRules.hRule5?g(Pe,De,L.hardBlank):oe,oe=!oe&&L.fittingRules.hRule6?_(Pe,De,L.hardBlank):oe,!oe){Y=Y-1;break e}}if(Q)break;Y++}return Math.min(te,Y)}function k(D,z,L,V){let j,H,te=[],Y,Q,oe,Me,Oe,Pe,De,Ht;for(j=0;j<V.height;j++){De=D[j],Ht=z[j],Oe=De.length,Pe=Ht.length,Y=Oe-L,Q=De.substr(0,Math.max(0,Y)),oe="";const ms=Math.max(0,Oe-L);var Pr=De.substring(ms,ms+L),Ri=Ht.substring(0,Math.min(L,Pe));for(H=0;H<L;H++){var $e=H<Oe?Pr.substring(H,H+1):" ",ft=H<Pe?Ri.substring(H,H+1):" ";if($e!==" "&&ft!==" ")if(V.fittingRules.hLayout===1)oe+=C($e,ft,V.hardBlank);else if(V.fittingRules.hLayout===2)oe+=C($e,ft,V.hardBlank);else{var Fe="";Fe=!Fe&&V.fittingRules.hRule1?u($e,ft,V.hardBlank):Fe,Fe=!Fe&&V.fittingRules.hRule2?h($e,ft,V.hardBlank):Fe,Fe=!Fe&&V.fittingRules.hRule3?f($e,ft,V.hardBlank):Fe,Fe=!Fe&&V.fittingRules.hRule4?d($e,ft,V.hardBlank):Fe,Fe=!Fe&&V.fittingRules.hRule5?g($e,ft,V.hardBlank):Fe,Fe=!Fe&&V.fittingRules.hRule6?_($e,ft,V.hardBlank):Fe,Fe=Fe||C($e,ft,V.hardBlank),oe+=Fe}else oe+=C($e,ft,V.hardBlank)}L>=Pe?Me="":Me=Ht.substring(L,L+Math.max(0,Pe-L)),te[j]=Q+oe+Me}return te}function A(D){let z=[],L;for(L=0;L<D;L++)z[L]="";return z}const Z=function(D){return Math.max.apply(Math,D.map(function(z,L){return z.length}))};function le(D,z,L){return D.reduce(function(V,j){return k(V,j.fig,j.overlap,L)},A(z))}function he(D,z,L){const V={};for(let j=D.length;--j;){let H=le(D.slice(0,j),z,L);if(Z(H)<=L.width){V.outputFigText=H,j<D.length?V.chars=D.slice(j):V.chars=[];break}}return V}function pe(D,z,L){let V,j,H=0,te,Y,Q,oe=L.height,Me=[],Oe,Pe,De=[],Ht,Pr,Ri,$e,ft;for(Y=A(oe),L.width>0&&L.whitespaceBreak&&(Pe={chars:[],overlap:H}),L.printDirection===1&&(D=D.split("").reverse().join("")),Q=D.length,V=0;V<Q;V++)if(Ht=D.substring(V,V+1),Pr=Ht.match(/\s/),j=z[Ht.charCodeAt(0)],$e=null,j){if(L.fittingRules.hLayout!==0){for(H=1e4,te=0;te<L.height;te++)H=Math.min(H,P(Y[te],j[te],L));H=H===1e4?0:H}if(L.width>0&&(L.whitespaceBreak?(Ri=le(Pe.chars.concat([{fig:j,overlap:H}]),oe,L),$e=le(De.concat([{fig:Ri,overlap:Pe.overlap}]),oe,L),Oe=Z($e)):($e=k(Y,j,H,L),Oe=Z($e)),Oe>=L.width&&V>0&&(L.whitespaceBreak?(Y=le(De.slice(0,-1),oe,L),De.length>1&&(Me.push(Y),Y=A(oe)),De=[]):(Me.push(Y),Y=A(oe)))),L.width>0&&L.whitespaceBreak&&((!Pr||V===Q-1)&&Pe.chars.push({fig:j,overlap:H}),Pr||V===Q-1)){for(ft=null;$e=le(Pe.chars,oe,L),Oe=Z($e),Oe>=L.width;)ft=he(Pe.chars,oe,L),Pe={chars:ft.chars},Me.push(ft.outputFigText);Oe>0&&(ft?De.push({fig:$e,overlap:1}):De.push({fig:$e,overlap:Pe.overlap})),Pr&&(De.push({fig:j,overlap:H}),Y=A(oe)),V===Q-1&&(Y=le(De,oe,L)),Pe={chars:[],overlap:H};continue}Y=k(Y,j,H,L)}return Z(Y)>0&&Me.push(Y),L.showHardBlanks!==!0&&Me.forEach(function(Fe){for(Q=Fe.length,te=0;te<Q;te++)Fe[te]=Fe[te].replace(new RegExp("\\"+L.hardBlank,"g")," ")}),Me}const G=function(D,z){let L=["hLayout","hRule1","hRule2","hRule3","hRule4","hRule5","hRule6"],V={},j;if(D==="default")for(j=0;j<L.length;j++)V[L[j]]=z.fittingRules[L[j]];else if(D==="full")V={hLayout:0,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(D==="fitted")V={hLayout:1,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(D==="controlled smushing")V={hLayout:3,hRule1:!0,hRule2:!0,hRule3:!0,hRule4:!0,hRule5:!0,hRule6:!0};else if(D==="universal smushing")V={hLayout:2,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else return;return V},J=function(D,z){let L=["vLayout","vRule1","vRule2","vRule3","vRule4","vRule5"],V={},j;if(D==="default")for(j=0;j<L.length;j++)V[L[j]]=z.fittingRules[L[j]];else if(D==="full")V={vLayout:0,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(D==="fitted")V={vLayout:1,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(D==="controlled smushing")V={vLayout:3,vRule1:!0,vRule2:!0,vRule3:!0,vRule4:!0,vRule5:!0};else if(D==="universal smushing")V={vLayout:2,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else return;return V},ae=function(D,z,L){L=L.replace(/\r\n/g,`
`).replace(/\r/g,`
`);let V=L.split(`
`),j=[],H,te,Y;for(te=V.length,H=0;H<te;H++)j=j.concat(pe(V[H],o[D],z));for(te=j.length,Y=j[0],H=1;H<te;H++)Y=x(Y,j[H],z);return Y?Y.join(`
`):""};function ye(D,z){let L=JSON.parse(JSON.stringify(D)),V,j;if(typeof z.horizontalLayout<"u"){V=G(z.horizontalLayout,D);for(j in V)V.hasOwnProperty(j)&&(L.fittingRules[j]=V[j])}if(typeof z.verticalLayout<"u"){V=J(z.verticalLayout,D);for(j in V)V.hasOwnProperty(j)&&(L.fittingRules[j]=V[j])}return L.printDirection=typeof z.printDirection<"u"?z.printDirection:D.printDirection,L.showHardBlanks=z.showHardBlanks||!1,L.width=z.width||-1,L.whitespaceBreak=z.whitespaceBreak||!1,L}const ue=function(D,z,L){return ue.text(D,z,L)};return ue.text=async function(D,z,L){let V="";return D=D+"",typeof arguments[1]=="function"&&(L=z,z={},z.font=a.font),typeof z=="string"?(V=z,z={}):(z=z||{},V=z.font||a.font),await new Promise((j,H)=>{ue.loadFont(V,function(te,Y){if(te){H(te),L&&L(te);return}const Q=ae(V,ye(Y,z),D);j(Q),L&&L(null,Q)})})},ue.textSync=function(D,z){let L="";D=D+"",typeof z=="string"?(L=z,z={}):(z=z||{},L=z.font||a.font);var V=ye(ue.loadFontSync(L),z);return ae(L,V,D)},ue.metadata=function(D,z){D=D+"",ue.loadFont(D,function(L,V){if(L){z(L);return}z(null,V,o[D].comment)})},ue.defaults=function(D){if(typeof D=="object"&&D!==null)for(var z in D)D.hasOwnProperty(z)&&(a[z]=D[z]);return JSON.parse(JSON.stringify(a))},ue.parseFont=function(D,z){z=z.replace(/\r\n/g,`
`).replace(/\r/g,`
`),o[D]={};var L=z.split(`
`),V=L.splice(0,1)[0].split(" "),j=o[D],H={};if(H.hardBlank=V[0].substr(5,1),H.height=parseInt(V[1],10),H.baseline=parseInt(V[2],10),H.maxLength=parseInt(V[3],10),H.oldLayout=parseInt(V[4],10),H.numCommentLines=parseInt(V[5],10),H.printDirection=V.length>=6?parseInt(V[6],10):0,H.fullLayout=V.length>=7?parseInt(V[7],10):null,H.codeTagCount=V.length>=8?parseInt(V[8],10):null,H.fittingRules=l(H.oldLayout,H.fullLayout),j.options=H,H.hardBlank.length!==1||isNaN(H.height)||isNaN(H.baseline)||isNaN(H.maxLength)||isNaN(H.oldLayout)||isNaN(H.numCommentLines))throw new Error("FIGlet header contains invalid values.");let te=[],Y;for(Y=32;Y<=126;Y++)te.push(Y);if(te=te.concat(196,214,220,228,246,252,223),L.length<H.numCommentLines+H.height*te.length)throw new Error("FIGlet file is missing data.");let Q,oe,Me=!1;for(j.comment=L.splice(0,H.numCommentLines).join(`
`),j.numChars=0;L.length>0&&j.numChars<te.length;){for(Q=te[j.numChars],j[Q]=L.splice(0,H.height),Y=0;Y<H.height;Y++)typeof j[Q][Y]>"u"?j[Q][Y]="":(oe=new RegExp("\\"+j[Q][Y].substr(j[Q][Y].length-1,1)+"+$"),j[Q][Y]=j[Q][Y].replace(oe,""));j.numChars++}for(;L.length>0;){if(Q=L.splice(0,1)[0].split(" ")[0],/^0[xX][0-9a-fA-F]+$/.test(Q))Q=parseInt(Q,16);else if(/^0[0-7]+$/.test(Q))Q=parseInt(Q,8);else if(/^[0-9]+$/.test(Q))Q=parseInt(Q,10);else if(/^-0[xX][0-9a-fA-F]+$/.test(Q))Q=parseInt(Q,16);else{if(Q==="")break;console.log("Invalid data:"+Q),Me=!0;break}for(j[Q]=L.splice(0,H.height),Y=0;Y<H.height;Y++)typeof j[Q][Y]>"u"?j[Q][Y]="":(oe=new RegExp("\\"+j[Q][Y].substr(j[Q][Y].length-1,1)+"+$"),j[Q][Y]=j[Q][Y].replace(oe,""));j.numChars++}if(Me===!0)throw new Error("Error parsing data.");return H},ue.loadFont=function(D,z){if(o[D]){z(null,o[D].options);return}if(typeof fetch!="function")throw console.error("figlet.js requires the fetch API or a fetch polyfill such as https://cdnjs.com/libraries/fetch"),new Error("fetch is required for figlet.js to work.");fetch(a.fontPath+"/"+D+".flf").then(function(L){if(L.ok)return L.text();throw console.log("Unexpected response",L),new Error("Network response was not ok.")}).then(function(L){z(null,ue.parseFont(D,L))}).catch(z)},ue.loadFontSync=function(D){if(o[D])return o[D].options;throw new Error("synchronous font loading is not implemented for the browser")},ue.preloadFonts=function(D,z){let L=[];D.reduce(function(V,j){return V.then(function(){return fetch(a.fontPath+"/"+j+".flf").then(H=>H.text()).then(function(H){L.push(H)})})},Promise.resolve()).then(function(V){for(var j in D)D.hasOwnProperty(j)&&ue.parseFont(D[j],L[j]);z&&z()})},ue.figFonts=o,ue})();t.exports=e})(jE);var G8=jE.exports;const a2=Kg(G8);var K8=Object.defineProperty,Q8=Object.getOwnPropertyNames,l2=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Y8=(t,e)=>function(){return t&&(e=(0,t[Q8(t)[0]])(t=0)),e},X8=(t,e)=>{for(var n in e)K8(t,n,{get:e[n],enumerable:!0})},Ui=(t,e,n)=>new Promise((r,i)=>{var s=l=>{try{a(n.next(l))}catch(u){i(u)}},o=l=>{try{a(n.throw(l))}catch(u){i(u)}},a=l=>l.done?r(l.value):Promise.resolve(l.value).then(s,o);a((n=n.apply(t,e)).next())}),J8=(t,e,n)=>(e=t[l2("asyncIterator")])?e.call(t):(t=t[l2("iterator")](),e={},n=(r,i)=>(i=t[r])&&(e[r]=s=>new Promise((o,a,l)=>(s=i.call(t,s),l=s.done,Promise.resolve(s.value).then(u=>o({value:u,done:l}),a)))),n("next"),n("return"),e),BE={};X8(BE,{default:()=>$E});var $E,UE=Y8({"src/fonts/Slant.js"(){$E=`flf2a$ 6 5 16 15 10 0 18319
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
`}});function Su(t,e){return t.replace(/.(?=.)/g,`$&${" ".repeat(e)}`)}function md(t,e,n){return t.substring(0,e)+n+t.substring(e+n.length)}function HE(t){return t[Math.floor(Math.random()*t.length)]}function Ss(t,e){return t.split("").map(n=>/\s/.test(n)?n:HE(e)).join("")}function Z8({asciiText:t,animationDirection:e,animationCharacters:n,animationCharacterSpacing:r}){return t.reduce((i,s,o)=>{if(o===0)return i;const a=i!=null&&i[i.length-1]?[...i[i.length-1]]:void 0;if(!a)return i;const l=/\S/.test(a[o-1]),u=a.length-o,h=/\S/.test(a[u]);let f=[...a];if(l&&(e==="up"||e==="vertical")&&(a!=null&&a[o]&&(a[o]=Ss(a[o],Su(n,r))),a!=null&&a[o-1]&&(a[o-1]=" ".repeat(s.length)),f[o]&&(f[o]=Ss(f[o],n))),h&&(e==="down"||e==="vertical")&&(a!=null&&a[u]&&(a[u]=Ss(a[u],Su(n,r))),a!=null&&a[u+1]&&(a[u+1]=" ".repeat(s.length)),f!=null&&f[u]&&(f[u]=Ss(f[u],n))),(l||h)&&i.push(f,a),o===t.length-1&&e==="up"){const d=[...a];d[d.length-1]=" ".repeat(d[d.length-1].length),i.push(d)}if(o===t.length-1&&e==="down"){const d=[...a];d[f.length-o]=" ".repeat(d[f.length-o].length),i.push(d);const g=[...d];if(!/\S/.test(g[0]))return i;g[0]=Ss(g[0],Su(n,r)),i.push(g);const y=[...g];if(!/\S/.test(y[0]))return i;y[0]=Ss(y[0],Su(n,r)),i.push(y);const E=[...y];if(!/\S/.test(E[0]))return i;E[0]=" ".repeat(E[0].length),i.push(E)}return t.length-1,i},[[...t]])}var eA=1;function tA({asciiText:t,animationDirection:e,animationCharacters:n}){const r=[[...structuredClone(t)]],i=t[0].length/(e==="left"||e==="right"?1:2);for(let s=0;s<i;s++){if(s===0){r.push(t);continue}const o=r[s].map((a,l,u)=>{const h=a.search(/\S/),f=a.search(/\S(?!.*\S)/);if(h===-1||f===-1)return a;const d=l>eA?-1:1;if((e==="left"||e==="horizontal")&&(a=md(a,h," ")),(e==="right"||e==="horizontal")&&(a=md(a,f," ")),f-h<=2)return a;if(e==="left"||e==="horizontal"){const g=HE(n);u[l+d]=md(u[l+d],h+1,g)}return a});r.push(o)}return r}function nA(t){return Ui(this,arguments,function*({asciiText:e,animationDirection:n,animationCharacters:r,animationCharacterSpacing:i,fadeInOnly:s=!1,fadeOutOnly:o=!1}){try{if(n==="down"||n==="up"||n==="vertical"){const h=Z8({asciiText:e,animationDirection:n,animationCharacters:r,animationCharacterSpacing:i});if(o)return h;const f=structuredClone(h).reverse();return s?f:f.concat(h)}const a=tA({asciiText:e,animationDirection:n,animationCharacters:r,animationCharacterSpacing:i});if(s)return structuredClone(a).reverse();const l=structuredClone(a).reverse();return o?a:l.concat(a)}catch(a){throw a+" @createFrames"}})}var u2="Slant";function rA(t,e){return Ui(this,null,function*(){const n=e?"":(yield Promise.resolve().then(()=>(UE(),BE))).default;a2.parseFont(u2,e||n);const r=u=>Ui(this,null,function*(){return yield new Promise((h,f)=>{a2.text(u,{font:u2},(d,g)=>{d&&f("Failed to load font"),g?h(g.split(`
`)):f("No ASCII text generated")})})}),i=[];try{for(var s=J8(Array.isArray(t)?t:[t]),o,a,l;o=!(a=yield s.next()).done;o=!1){const u=a.value,h=yield r(u);i.push(h)}}catch(u){l=[u]}finally{try{o&&(a=s.return)&&(yield a.call(s))}finally{if(l)throw l[0]}}return i})}var iA="/*+#";function sA({animationCharacters:t=iA,animationCharacterSpacing:e=1,animationDelay:n=500,animationDirection:r="horizontal",animationInterval:i=1e3,animationIteration:s=1,animationLoop:o=!0,animationSpeed:a=20,fadeInOnly:l=!1,fadeOutOnly:u=!1,font:h,isAnimated:f=!0,isPaused:d=!1,text:g=["React","ASCII","Text"]}){const _=F.useRef(),y=F.useRef({animationFrameId:0,animationIndex:0,animationIterationCount:1,animations:null,frameId:0,frameIndex:0,isPaused:!1,isTimeout:!1,previousTimeStamp:0,timeoutId:0}),E=m=>Ui(this,null,function*(){const{animations:S,isPaused:C,isTimeout:O,previousTimeStamp:M}=y.current;if(!_.current||!(S!=null&&S.length)||C||O)return;if(m-M>a){const{animationIndex:T,animationIterationCount:b,animations:x,frameId:P,frameIndex:k}=y.current,A=x==null?void 0:x[T];if(!A||O)return;const Z=k===0,le=k===A.length-1,he=T===x.length-1;if(_.current.textContent=A[k].join(`
`),!o&&b===s&&he&&le){cancelAnimationFrame(P);return}y.current.previousTimeStamp=m;const pe=k===Math.floor(A.length/2),G=l||u,J=ae=>Ui(this,null,function*(){yield new Promise(ye=>{y.current.isTimeout=!0,setTimeout(ye,ae)}),y.current.isTimeout=!1});G&&le&&n&&(yield J(n)),G&&Z&&i&&(yield J(i)),!G&&pe&&n&&(yield J(n)),!G&&le&&i&&(yield J(i)),le?(y.current.frameIndex=0,y.current.animationIndex++,y.current.animationIterationCount++):y.current.frameIndex++,o&&y.current.animationIndex===x.length&&(y.current.animationIndex=0)}y.current.frameId=requestAnimationFrame(E)});F.useEffect(()=>{d?(y.current.isPaused=!0,cancelAnimationFrame(y.current.frameId)):(y.current.isPaused=!1,y.current.frameId=requestAnimationFrame(E))},[d,y]);const w=F.useCallback(()=>Ui(this,null,function*(){try{const m=yield rA(g,h);!f&&_.current?_.current.textContent=m[0].join(`
`):m.length===(Array.isArray(g)?g:[g]).length&&(y.current.animations=yield Promise.all([...m.map(S=>Ui(this,null,function*(){return yield nA({asciiText:S,animationDirection:r,animationCharacters:t,animationCharacterSpacing:e,fadeInOnly:l,fadeOutOnly:u})}))]),requestAnimationFrame(E))}catch(m){console.error({error:m})}}),[]);return F.useEffect(()=>{w()},[g,w]),_}var oA=`flf2a$ 10 5 10 0 3 0


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
@@`;UE();function WE(t,e){return function(){return t.apply(e,arguments)}}const{toString:aA}=Object.prototype,{getPrototypeOf:Hm}=Object,Gh=(t=>e=>{const n=aA.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),$n=t=>(t=t.toLowerCase(),e=>Gh(e)===t),Kh=t=>e=>typeof e===t,{isArray:bo}=Array,tl=Kh("undefined");function lA(t){return t!==null&&!tl(t)&&t.constructor!==null&&!tl(t.constructor)&&In(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const qE=$n("ArrayBuffer");function uA(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&qE(t.buffer),e}const cA=Kh("string"),In=Kh("function"),GE=Kh("number"),Qh=t=>t!==null&&typeof t=="object",hA=t=>t===!0||t===!1,sc=t=>{if(Gh(t)!=="object")return!1;const e=Hm(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},fA=$n("Date"),dA=$n("File"),pA=$n("Blob"),gA=$n("FileList"),mA=t=>Qh(t)&&In(t.pipe),_A=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||In(t.append)&&((e=Gh(t))==="formdata"||e==="object"&&In(t.toString)&&t.toString()==="[object FormData]"))},yA=$n("URLSearchParams"),[vA,wA,EA,SA]=["ReadableStream","Request","Response","Headers"].map($n),TA=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function xl(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,i;if(typeof t!="object"&&(t=[t]),bo(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let a;for(r=0;r<o;r++)a=s[r],e.call(null,t[a],a,t)}}function KE(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,i;for(;r-- >0;)if(i=n[r],e===i.toLowerCase())return i;return null}const QE=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,YE=t=>!tl(t)&&t!==QE;function Kp(){const{caseless:t}=YE(this)&&this||{},e={},n=(r,i)=>{const s=t&&KE(e,i)||i;sc(e[s])&&sc(r)?e[s]=Kp(e[s],r):sc(r)?e[s]=Kp({},r):bo(r)?e[s]=r.slice():e[s]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&xl(arguments[r],n);return e}const bA=(t,e,n,{allOwnKeys:r}={})=>(xl(e,(i,s)=>{n&&In(i)?t[s]=WE(i,n):t[s]=i},{allOwnKeys:r}),t),xA=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),RA=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},IA=(t,e,n,r)=>{let i,s,o;const a={};if(e=e||{},t==null)return e;do{for(i=Object.getOwnPropertyNames(t),s=i.length;s-- >0;)o=i[s],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Hm(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},AA=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},CA=t=>{if(!t)return null;if(bo(t))return t;let e=t.length;if(!GE(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},PA=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Hm(Uint8Array)),kA=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let i;for(;(i=r.next())&&!i.done;){const s=i.value;e.call(t,s[0],s[1])}},OA=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},LA=$n("HTMLFormElement"),MA=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),c2=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),DA=$n("RegExp"),XE=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};xl(n,(i,s)=>{let o;(o=e(i,s,t))!==!1&&(r[s]=o||i)}),Object.defineProperties(t,r)},NA=t=>{XE(t,(e,n)=>{if(In(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(In(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},VA=(t,e)=>{const n={},r=i=>{i.forEach(s=>{n[s]=!0})};return bo(t)?r(t):r(String(t).split(e)),n},FA=()=>{},zA=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e,_d="abcdefghijklmnopqrstuvwxyz",h2="0123456789",JE={DIGIT:h2,ALPHA:_d,ALPHA_DIGIT:_d+_d.toUpperCase()+h2},jA=(t=16,e=JE.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function BA(t){return!!(t&&In(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const $A=t=>{const e=new Array(10),n=(r,i)=>{if(Qh(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[i]=r;const s=bo(r)?[]:{};return xl(r,(o,a)=>{const l=n(o,i+1);!tl(l)&&(s[a]=l)}),e[i]=void 0,s}}return r};return n(t,0)},UA=$n("AsyncFunction"),HA=t=>t&&(Qh(t)||In(t))&&In(t.then)&&In(t.catch),$={isArray:bo,isArrayBuffer:qE,isBuffer:lA,isFormData:_A,isArrayBufferView:uA,isString:cA,isNumber:GE,isBoolean:hA,isObject:Qh,isPlainObject:sc,isReadableStream:vA,isRequest:wA,isResponse:EA,isHeaders:SA,isUndefined:tl,isDate:fA,isFile:dA,isBlob:pA,isRegExp:DA,isFunction:In,isStream:mA,isURLSearchParams:yA,isTypedArray:PA,isFileList:gA,forEach:xl,merge:Kp,extend:bA,trim:TA,stripBOM:xA,inherits:RA,toFlatObject:IA,kindOf:Gh,kindOfTest:$n,endsWith:AA,toArray:CA,forEachEntry:kA,matchAll:OA,isHTMLForm:LA,hasOwnProperty:c2,hasOwnProp:c2,reduceDescriptors:XE,freezeMethods:NA,toObjectSet:VA,toCamelCase:MA,noop:FA,toFiniteNumber:zA,findKey:KE,global:QE,isContextDefined:YE,ALPHABET:JE,generateString:jA,isSpecCompliantForm:BA,toJSONObject:$A,isAsyncFn:UA,isThenable:HA};function _e(t,e,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}$.inherits(_e,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:$.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const ZE=_e.prototype,eS={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{eS[t]={value:t}});Object.defineProperties(_e,eS);Object.defineProperty(ZE,"isAxiosError",{value:!0});_e.from=(t,e,n,r,i,s)=>{const o=Object.create(ZE);return $.toFlatObject(t,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),_e.call(o,t.message,e,n,r,i),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};const WA=null;function Qp(t){return $.isPlainObject(t)||$.isArray(t)}function tS(t){return $.endsWith(t,"[]")?t.slice(0,-2):t}function f2(t,e,n){return t?t.concat(e).map(function(i,s){return i=tS(i),!n&&s?"["+i+"]":i}).join(n?".":""):e}function qA(t){return $.isArray(t)&&!t.some(Qp)}const GA=$.toFlatObject($,{},null,function(e){return/^is[A-Z]/.test(e)});function Yh(t,e,n){if(!$.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=$.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,E){return!$.isUndefined(E[y])});const r=n.metaTokens,i=n.visitor||h,s=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&$.isSpecCompliantForm(e);if(!$.isFunction(i))throw new TypeError("visitor must be a function");function u(_){if(_===null)return"";if($.isDate(_))return _.toISOString();if(!l&&$.isBlob(_))throw new _e("Blob is not supported. Use a Buffer instead.");return $.isArrayBuffer(_)||$.isTypedArray(_)?l&&typeof Blob=="function"?new Blob([_]):Buffer.from(_):_}function h(_,y,E){let w=_;if(_&&!E&&typeof _=="object"){if($.endsWith(y,"{}"))y=r?y:y.slice(0,-2),_=JSON.stringify(_);else if($.isArray(_)&&qA(_)||($.isFileList(_)||$.endsWith(y,"[]"))&&(w=$.toArray(_)))return y=tS(y),w.forEach(function(S,C){!($.isUndefined(S)||S===null)&&e.append(o===!0?f2([y],C,s):o===null?y:y+"[]",u(S))}),!1}return Qp(_)?!0:(e.append(f2(E,y,s),u(_)),!1)}const f=[],d=Object.assign(GA,{defaultVisitor:h,convertValue:u,isVisitable:Qp});function g(_,y){if(!$.isUndefined(_)){if(f.indexOf(_)!==-1)throw Error("Circular reference detected in "+y.join("."));f.push(_),$.forEach(_,function(w,m){(!($.isUndefined(w)||w===null)&&i.call(e,w,$.isString(m)?m.trim():m,y,d))===!0&&g(w,y?y.concat(m):[m])}),f.pop()}}if(!$.isObject(t))throw new TypeError("data must be an object");return g(t),e}function d2(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Wm(t,e){this._pairs=[],t&&Yh(t,this,e)}const nS=Wm.prototype;nS.append=function(e,n){this._pairs.push([e,n])};nS.toString=function(e){const n=e?function(r){return e.call(this,r,d2)}:d2;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function KA(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function rS(t,e,n){if(!e)return t;const r=n&&n.encode||KA,i=n&&n.serialize;let s;if(i?s=i(e,n):s=$.isURLSearchParams(e)?e.toString():new Wm(e,n).toString(r),s){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class p2{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){$.forEach(this.handlers,function(r){r!==null&&e(r)})}}const iS={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},QA=typeof URLSearchParams<"u"?URLSearchParams:Wm,YA=typeof FormData<"u"?FormData:null,XA=typeof Blob<"u"?Blob:null,JA={isBrowser:!0,classes:{URLSearchParams:QA,FormData:YA,Blob:XA},protocols:["http","https","file","blob","url","data"]},qm=typeof window<"u"&&typeof document<"u",ZA=(t=>qm&&["ReactNative","NativeScript","NS"].indexOf(t)<0)(typeof navigator<"u"&&navigator.product),eC=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",tC=qm&&window.location.href||"http://localhost",nC=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:qm,hasStandardBrowserEnv:ZA,hasStandardBrowserWebWorkerEnv:eC,origin:tC},Symbol.toStringTag,{value:"Module"})),Vn={...nC,...JA};function rC(t,e){return Yh(t,new Vn.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,s){return Vn.isNode&&$.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function iC(t){return $.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function sC(t){const e={},n=Object.keys(t);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],e[s]=t[s];return e}function sS(t){function e(n,r,i,s){let o=n[s++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=s>=n.length;return o=!o&&$.isArray(i)?i.length:o,l?($.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!a):((!i[o]||!$.isObject(i[o]))&&(i[o]=[]),e(n,r,i[o],s)&&$.isArray(i[o])&&(i[o]=sC(i[o])),!a)}if($.isFormData(t)&&$.isFunction(t.entries)){const n={};return $.forEachEntry(t,(r,i)=>{e(iC(r),i,n,0)}),n}return null}function oC(t,e,n){if($.isString(t))try{return(e||JSON.parse)(t),$.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const Rl={transitional:iS,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,s=$.isObject(e);if(s&&$.isHTMLForm(e)&&(e=new FormData(e)),$.isFormData(e))return i?JSON.stringify(sS(e)):e;if($.isArrayBuffer(e)||$.isBuffer(e)||$.isStream(e)||$.isFile(e)||$.isBlob(e)||$.isReadableStream(e))return e;if($.isArrayBufferView(e))return e.buffer;if($.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return rC(e,this.formSerializer).toString();if((a=$.isFileList(e))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Yh(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return s||i?(n.setContentType("application/json",!1),oC(e)):e}],transformResponse:[function(e){const n=this.transitional||Rl.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if($.isResponse(e)||$.isReadableStream(e))return e;if(e&&$.isString(e)&&(r&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?_e.from(a,_e.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Vn.classes.FormData,Blob:Vn.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};$.forEach(["delete","get","head","post","put","patch"],t=>{Rl.headers[t]={}});const aC=$.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),lC=t=>{const e={};let n,r,i;return t&&t.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!n||e[n]&&aC[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},g2=Symbol("internals");function ea(t){return t&&String(t).trim().toLowerCase()}function oc(t){return t===!1||t==null?t:$.isArray(t)?t.map(oc):String(t)}function uC(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const cC=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function yd(t,e,n,r,i){if($.isFunction(r))return r.call(this,e,n);if(i&&(e=n),!!$.isString(e)){if($.isString(r))return e.indexOf(r)!==-1;if($.isRegExp(r))return r.test(e)}}function hC(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function fC(t,e){const n=$.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(i,s,o){return this[r].call(this,e,i,s,o)},configurable:!0})})}class un{constructor(e){e&&this.set(e)}set(e,n,r){const i=this;function s(a,l,u){const h=ea(l);if(!h)throw new Error("header name must be a non-empty string");const f=$.findKey(i,h);(!f||i[f]===void 0||u===!0||u===void 0&&i[f]!==!1)&&(i[f||l]=oc(a))}const o=(a,l)=>$.forEach(a,(u,h)=>s(u,h,l));if($.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if($.isString(e)&&(e=e.trim())&&!cC(e))o(lC(e),n);else if($.isHeaders(e))for(const[a,l]of e.entries())s(l,a,r);else e!=null&&s(n,e,r);return this}get(e,n){if(e=ea(e),e){const r=$.findKey(this,e);if(r){const i=this[r];if(!n)return i;if(n===!0)return uC(i);if($.isFunction(n))return n.call(this,i,r);if($.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=ea(e),e){const r=$.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||yd(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let i=!1;function s(o){if(o=ea(o),o){const a=$.findKey(r,o);a&&(!n||yd(r,r[a],a,n))&&(delete r[a],i=!0)}}return $.isArray(e)?e.forEach(s):s(e),i}clear(e){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const s=n[r];(!e||yd(this,this[s],s,e,!0))&&(delete this[s],i=!0)}return i}normalize(e){const n=this,r={};return $.forEach(this,(i,s)=>{const o=$.findKey(r,s);if(o){n[o]=oc(i),delete n[s];return}const a=e?hC(s):String(s).trim();a!==s&&delete n[s],n[a]=oc(i),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return $.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=e&&$.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(i=>r.set(i)),r}static accessor(e){const r=(this[g2]=this[g2]={accessors:{}}).accessors,i=this.prototype;function s(o){const a=ea(o);r[a]||(fC(i,o),r[a]=!0)}return $.isArray(e)?e.forEach(s):s(e),this}}un.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);$.reduceDescriptors(un.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});$.freezeMethods(un);function vd(t,e){const n=this||Rl,r=e||n,i=un.from(r.headers);let s=r.data;return $.forEach(t,function(a){s=a.call(n,s,i.normalize(),e?e.status:void 0)}),i.normalize(),s}function oS(t){return!!(t&&t.__CANCEL__)}function xo(t,e,n){_e.call(this,t??"canceled",_e.ERR_CANCELED,e,n),this.name="CanceledError"}$.inherits(xo,_e,{__CANCEL__:!0});function aS(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new _e("Request failed with status code "+n.status,[_e.ERR_BAD_REQUEST,_e.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function dC(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function pC(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i=0,s=0,o;return e=e!==void 0?e:1e3,function(l){const u=Date.now(),h=r[s];o||(o=u),n[i]=l,r[i]=u;let f=s,d=0;for(;f!==i;)d+=n[f++],f=f%t;if(i=(i+1)%t,i===s&&(s=(s+1)%t),u-o<e)return;const g=h&&u-h;return g?Math.round(d*1e3/g):void 0}}function gC(t,e){let n=0;const r=1e3/e;let i=null;return function(){const o=this===!0,a=Date.now();if(o||a-n>r)return i&&(clearTimeout(i),i=null),n=a,t.apply(null,arguments);i||(i=setTimeout(()=>(i=null,n=Date.now(),t.apply(null,arguments)),r-(a-n)))}}const qc=(t,e,n=3)=>{let r=0;const i=pC(50,250);return gC(s=>{const o=s.loaded,a=s.lengthComputable?s.total:void 0,l=o-r,u=i(l),h=o<=a;r=o;const f={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:u||void 0,estimated:u&&a&&h?(a-o)/u:void 0,event:s,lengthComputable:a!=null};f[e?"download":"upload"]=!0,t(f)},n)},mC=Vn.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(s){let o=s;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(o){const a=$.isString(o)?i(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}(),_C=Vn.hasStandardBrowserEnv?{write(t,e,n,r,i,s){const o=[t+"="+encodeURIComponent(e)];$.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),$.isString(r)&&o.push("path="+r),$.isString(i)&&o.push("domain="+i),s===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function yC(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function vC(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function lS(t,e){return t&&!yC(e)?vC(t,e):e}const m2=t=>t instanceof un?{...t}:t;function ns(t,e){e=e||{};const n={};function r(u,h,f){return $.isPlainObject(u)&&$.isPlainObject(h)?$.merge.call({caseless:f},u,h):$.isPlainObject(h)?$.merge({},h):$.isArray(h)?h.slice():h}function i(u,h,f){if($.isUndefined(h)){if(!$.isUndefined(u))return r(void 0,u,f)}else return r(u,h,f)}function s(u,h){if(!$.isUndefined(h))return r(void 0,h)}function o(u,h){if($.isUndefined(h)){if(!$.isUndefined(u))return r(void 0,u)}else return r(void 0,h)}function a(u,h,f){if(f in e)return r(u,h);if(f in t)return r(void 0,u)}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(u,h)=>i(m2(u),m2(h),!0)};return $.forEach(Object.keys(Object.assign({},t,e)),function(h){const f=l[h]||i,d=f(t[h],e[h],h);$.isUndefined(d)&&f!==a||(n[h]=d)}),n}const uS=t=>{const e=ns({},t);let{data:n,withXSRFToken:r,xsrfHeaderName:i,xsrfCookieName:s,headers:o,auth:a}=e;e.headers=o=un.from(o),e.url=rS(lS(e.baseURL,e.url),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let l;if($.isFormData(n)){if(Vn.hasStandardBrowserEnv||Vn.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((l=o.getContentType())!==!1){const[u,...h]=l?l.split(";").map(f=>f.trim()).filter(Boolean):[];o.setContentType([u||"multipart/form-data",...h].join("; "))}}if(Vn.hasStandardBrowserEnv&&(r&&$.isFunction(r)&&(r=r(e)),r||r!==!1&&mC(e.url))){const u=i&&s&&_C.read(s);u&&o.set(i,u)}return e},wC=typeof XMLHttpRequest<"u",EC=wC&&function(t){return new Promise(function(n,r){const i=uS(t);let s=i.data;const o=un.from(i.headers).normalize();let{responseType:a}=i,l;function u(){i.cancelToken&&i.cancelToken.unsubscribe(l),i.signal&&i.signal.removeEventListener("abort",l)}let h=new XMLHttpRequest;h.open(i.method.toUpperCase(),i.url,!0),h.timeout=i.timeout;function f(){if(!h)return;const g=un.from("getAllResponseHeaders"in h&&h.getAllResponseHeaders()),y={data:!a||a==="text"||a==="json"?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:g,config:t,request:h};aS(function(w){n(w),u()},function(w){r(w),u()},y),h=null}"onloadend"in h?h.onloadend=f:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.indexOf("file:")===0)||setTimeout(f)},h.onabort=function(){h&&(r(new _e("Request aborted",_e.ECONNABORTED,i,h)),h=null)},h.onerror=function(){r(new _e("Network Error",_e.ERR_NETWORK,i,h)),h=null},h.ontimeout=function(){let _=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const y=i.transitional||iS;i.timeoutErrorMessage&&(_=i.timeoutErrorMessage),r(new _e(_,y.clarifyTimeoutError?_e.ETIMEDOUT:_e.ECONNABORTED,i,h)),h=null},s===void 0&&o.setContentType(null),"setRequestHeader"in h&&$.forEach(o.toJSON(),function(_,y){h.setRequestHeader(y,_)}),$.isUndefined(i.withCredentials)||(h.withCredentials=!!i.withCredentials),a&&a!=="json"&&(h.responseType=i.responseType),typeof i.onDownloadProgress=="function"&&h.addEventListener("progress",qc(i.onDownloadProgress,!0)),typeof i.onUploadProgress=="function"&&h.upload&&h.upload.addEventListener("progress",qc(i.onUploadProgress)),(i.cancelToken||i.signal)&&(l=g=>{h&&(r(!g||g.type?new xo(null,t,h):g),h.abort(),h=null)},i.cancelToken&&i.cancelToken.subscribe(l),i.signal&&(i.signal.aborted?l():i.signal.addEventListener("abort",l)));const d=dC(i.url);if(d&&Vn.protocols.indexOf(d)===-1){r(new _e("Unsupported protocol "+d+":",_e.ERR_BAD_REQUEST,t));return}h.send(s||null)})},SC=(t,e)=>{let n=new AbortController,r;const i=function(l){if(!r){r=!0,o();const u=l instanceof Error?l:this.reason;n.abort(u instanceof _e?u:new xo(u instanceof Error?u.message:u))}};let s=e&&setTimeout(()=>{i(new _e(`timeout ${e} of ms exceeded`,_e.ETIMEDOUT))},e);const o=()=>{t&&(s&&clearTimeout(s),s=null,t.forEach(l=>{l&&(l.removeEventListener?l.removeEventListener("abort",i):l.unsubscribe(i))}),t=null)};t.forEach(l=>l&&l.addEventListener&&l.addEventListener("abort",i));const{signal:a}=n;return a.unsubscribe=o,[a,()=>{s&&clearTimeout(s),s=null}]},TC=function*(t,e){let n=t.byteLength;if(!e||n<e){yield t;return}let r=0,i;for(;r<n;)i=r+e,yield t.slice(r,i),r=i},bC=async function*(t,e,n){for await(const r of t)yield*TC(ArrayBuffer.isView(r)?r:await n(String(r)),e)},_2=(t,e,n,r,i)=>{const s=bC(t,e,i);let o=0;return new ReadableStream({type:"bytes",async pull(a){const{done:l,value:u}=await s.next();if(l){a.close(),r();return}let h=u.byteLength;n&&n(o+=h),a.enqueue(new Uint8Array(u))},cancel(a){return r(a),s.return()}},{highWaterMark:2})},y2=(t,e)=>{const n=t!=null;return r=>setTimeout(()=>e({lengthComputable:n,total:t,loaded:r}))},Xh=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",cS=Xh&&typeof ReadableStream=="function",Yp=Xh&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),xC=cS&&(()=>{let t=!1;const e=new Request(Vn.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e})(),v2=64*1024,Xp=cS&&!!(()=>{try{return $.isReadableStream(new Response("").body)}catch{}})(),Gc={stream:Xp&&(t=>t.body)};Xh&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!Gc[e]&&(Gc[e]=$.isFunction(t[e])?n=>n[e]():(n,r)=>{throw new _e(`Response type '${e}' is not supported`,_e.ERR_NOT_SUPPORT,r)})})})(new Response);const RC=async t=>{if(t==null)return 0;if($.isBlob(t))return t.size;if($.isSpecCompliantForm(t))return(await new Request(t).arrayBuffer()).byteLength;if($.isArrayBufferView(t))return t.byteLength;if($.isURLSearchParams(t)&&(t=t+""),$.isString(t))return(await Yp(t)).byteLength},IC=async(t,e)=>{const n=$.toFiniteNumber(t.getContentLength());return n??RC(e)},AC=Xh&&(async t=>{let{url:e,method:n,data:r,signal:i,cancelToken:s,timeout:o,onDownloadProgress:a,onUploadProgress:l,responseType:u,headers:h,withCredentials:f="same-origin",fetchOptions:d}=uS(t);u=u?(u+"").toLowerCase():"text";let[g,_]=i||s||o?SC([i,s],o):[],y,E;const w=()=>{!y&&setTimeout(()=>{g&&g.unsubscribe()}),y=!0};let m;try{if(l&&xC&&n!=="get"&&n!=="head"&&(m=await IC(h,r))!==0){let M=new Request(e,{method:"POST",body:r,duplex:"half"}),R;$.isFormData(r)&&(R=M.headers.get("content-type"))&&h.setContentType(R),M.body&&(r=_2(M.body,v2,y2(m,qc(l)),null,Yp))}$.isString(f)||(f=f?"cors":"omit"),E=new Request(e,{...d,signal:g,method:n.toUpperCase(),headers:h.normalize().toJSON(),body:r,duplex:"half",withCredentials:f});let S=await fetch(E);const C=Xp&&(u==="stream"||u==="response");if(Xp&&(a||C)){const M={};["status","statusText","headers"].forEach(T=>{M[T]=S[T]});const R=$.toFiniteNumber(S.headers.get("content-length"));S=new Response(_2(S.body,v2,a&&y2(R,qc(a,!0)),C&&w,Yp),M)}u=u||"text";let O=await Gc[$.findKey(Gc,u)||"text"](S,t);return!C&&w(),_&&_(),await new Promise((M,R)=>{aS(M,R,{data:O,headers:un.from(S.headers),status:S.status,statusText:S.statusText,config:t,request:E})})}catch(S){throw w(),S&&S.name==="TypeError"&&/fetch/i.test(S.message)?Object.assign(new _e("Network Error",_e.ERR_NETWORK,t,E),{cause:S.cause||S}):_e.from(S,S&&S.code,t,E)}}),Jp={http:WA,xhr:EC,fetch:AC};$.forEach(Jp,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const w2=t=>`- ${t}`,CC=t=>$.isFunction(t)||t===null||t===!1,hS={getAdapter:t=>{t=$.isArray(t)?t:[t];const{length:e}=t;let n,r;const i={};for(let s=0;s<e;s++){n=t[s];let o;if(r=n,!CC(n)&&(r=Jp[(o=String(n)).toLowerCase()],r===void 0))throw new _e(`Unknown adapter '${o}'`);if(r)break;i[o||"#"+s]=r}if(!r){const s=Object.entries(i).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=e?s.length>1?`since :
`+s.map(w2).join(`
`):" "+w2(s[0]):"as no adapter specified";throw new _e("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:Jp};function wd(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new xo(null,t)}function E2(t){return wd(t),t.headers=un.from(t.headers),t.data=vd.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),hS.getAdapter(t.adapter||Rl.adapter)(t).then(function(r){return wd(t),r.data=vd.call(t,t.transformResponse,r),r.headers=un.from(r.headers),r},function(r){return oS(r)||(wd(t),r&&r.response&&(r.response.data=vd.call(t,t.transformResponse,r.response),r.response.headers=un.from(r.response.headers))),Promise.reject(r)})}const fS="1.7.2",Gm={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Gm[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const S2={};Gm.transitional=function(e,n,r){function i(s,o){return"[Axios v"+fS+"] Transitional option '"+s+"'"+o+(r?". "+r:"")}return(s,o,a)=>{if(e===!1)throw new _e(i(o," has been removed"+(n?" in "+n:"")),_e.ERR_DEPRECATED);return n&&!S2[o]&&(S2[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,a):!0}};function PC(t,e,n){if(typeof t!="object")throw new _e("options must be an object",_e.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let i=r.length;for(;i-- >0;){const s=r[i],o=e[s];if(o){const a=t[s],l=a===void 0||o(a,s,t);if(l!==!0)throw new _e("option "+s+" must be "+l,_e.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new _e("Unknown option "+s,_e.ERR_BAD_OPTION)}}const Zp={assertOptions:PC,validators:Gm},Dr=Zp.validators;class Ki{constructor(e){this.defaults=e,this.interceptors={request:new p2,response:new p2}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let i;Error.captureStackTrace?Error.captureStackTrace(i={}):i=new Error;const s=i.stack?i.stack.replace(/^.+\n/,""):"";try{r.stack?s&&!String(r.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+s):r.stack=s}catch{}}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=ns(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:s}=n;r!==void 0&&Zp.assertOptions(r,{silentJSONParsing:Dr.transitional(Dr.boolean),forcedJSONParsing:Dr.transitional(Dr.boolean),clarifyTimeoutError:Dr.transitional(Dr.boolean)},!1),i!=null&&($.isFunction(i)?n.paramsSerializer={serialize:i}:Zp.assertOptions(i,{encode:Dr.function,serialize:Dr.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&$.merge(s.common,s[n.method]);s&&$.forEach(["delete","get","head","post","put","patch","common"],_=>{delete s[_]}),n.headers=un.concat(o,s);const a=[];let l=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(l=l&&y.synchronous,a.unshift(y.fulfilled,y.rejected))});const u=[];this.interceptors.response.forEach(function(y){u.push(y.fulfilled,y.rejected)});let h,f=0,d;if(!l){const _=[E2.bind(this),void 0];for(_.unshift.apply(_,a),_.push.apply(_,u),d=_.length,h=Promise.resolve(n);f<d;)h=h.then(_[f++],_[f++]);return h}d=a.length;let g=n;for(f=0;f<d;){const _=a[f++],y=a[f++];try{g=_(g)}catch(E){y.call(this,E);break}}try{h=E2.call(this,g)}catch(_){return Promise.reject(_)}for(f=0,d=u.length;f<d;)h=h.then(u[f++],u[f++]);return h}getUri(e){e=ns(this.defaults,e);const n=lS(e.baseURL,e.url);return rS(n,e.params,e.paramsSerializer)}}$.forEach(["delete","get","head","options"],function(e){Ki.prototype[e]=function(n,r){return this.request(ns(r||{},{method:e,url:n,data:(r||{}).data}))}});$.forEach(["post","put","patch"],function(e){function n(r){return function(s,o,a){return this.request(ns(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}Ki.prototype[e]=n(),Ki.prototype[e+"Form"]=n(!0)});class Km{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(a=>{r.subscribe(a),s=a}).then(i);return o.cancel=function(){r.unsubscribe(s)},o},e(function(s,o,a){r.reason||(r.reason=new xo(s,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new Km(function(i){e=i}),cancel:e}}}function kC(t){return function(n){return t.apply(null,n)}}function OC(t){return $.isObject(t)&&t.isAxiosError===!0}const eg={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(eg).forEach(([t,e])=>{eg[e]=t});function dS(t){const e=new Ki(t),n=WE(Ki.prototype.request,e);return $.extend(n,Ki.prototype,e,{allOwnKeys:!0}),$.extend(n,e,null,{allOwnKeys:!0}),n.create=function(i){return dS(ns(t,i))},n}const rt=dS(Rl);rt.Axios=Ki;rt.CanceledError=xo;rt.CancelToken=Km;rt.isCancel=oS;rt.VERSION=fS;rt.toFormData=Yh;rt.AxiosError=_e;rt.Cancel=rt.CanceledError;rt.all=function(e){return Promise.all(e)};rt.spread=kC;rt.isAxiosError=OC;rt.mergeConfig=ns;rt.AxiosHeaders=un;rt.formToJSON=t=>sS($.isHTMLForm(t)?new FormData(t):t);rt.getAdapter=hS.getAdapter;rt.HttpStatusCode=eg;rt.default=rt;/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */function Il(t){return t+.5|0}const Hr=(t,e,n)=>Math.max(Math.min(t,n),e);function ha(t){return Hr(Il(t*2.55),0,255)}function ni(t){return Hr(Il(t*255),0,255)}function cr(t){return Hr(Il(t/2.55)/100,0,1)}function T2(t){return Hr(Il(t*100),0,100)}const En={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},tg=[..."0123456789ABCDEF"],LC=t=>tg[t&15],MC=t=>tg[(t&240)>>4]+tg[t&15],Tu=t=>(t&240)>>4===(t&15),DC=t=>Tu(t.r)&&Tu(t.g)&&Tu(t.b)&&Tu(t.a);function NC(t){var e=t.length,n;return t[0]==="#"&&(e===4||e===5?n={r:255&En[t[1]]*17,g:255&En[t[2]]*17,b:255&En[t[3]]*17,a:e===5?En[t[4]]*17:255}:(e===7||e===9)&&(n={r:En[t[1]]<<4|En[t[2]],g:En[t[3]]<<4|En[t[4]],b:En[t[5]]<<4|En[t[6]],a:e===9?En[t[7]]<<4|En[t[8]]:255})),n}const VC=(t,e)=>t<255?e(t):"";function FC(t){var e=DC(t)?LC:MC;return t?"#"+e(t.r)+e(t.g)+e(t.b)+VC(t.a,e):void 0}const zC=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function pS(t,e,n){const r=e*Math.min(n,1-n),i=(s,o=(s+t/30)%12)=>n-r*Math.max(Math.min(o-3,9-o,1),-1);return[i(0),i(8),i(4)]}function jC(t,e,n){const r=(i,s=(i+t/60)%6)=>n-n*e*Math.max(Math.min(s,4-s,1),0);return[r(5),r(3),r(1)]}function BC(t,e,n){const r=pS(t,1,.5);let i;for(e+n>1&&(i=1/(e+n),e*=i,n*=i),i=0;i<3;i++)r[i]*=1-e-n,r[i]+=e;return r}function $C(t,e,n,r,i){return t===i?(e-n)/r+(e<n?6:0):e===i?(n-t)/r+2:(t-e)/r+4}function Qm(t){const n=t.r/255,r=t.g/255,i=t.b/255,s=Math.max(n,r,i),o=Math.min(n,r,i),a=(s+o)/2;let l,u,h;return s!==o&&(h=s-o,u=a>.5?h/(2-s-o):h/(s+o),l=$C(n,r,i,h,s),l=l*60+.5),[l|0,u||0,a]}function Ym(t,e,n,r){return(Array.isArray(e)?t(e[0],e[1],e[2]):t(e,n,r)).map(ni)}function Xm(t,e,n){return Ym(pS,t,e,n)}function UC(t,e,n){return Ym(BC,t,e,n)}function HC(t,e,n){return Ym(jC,t,e,n)}function gS(t){return(t%360+360)%360}function WC(t){const e=zC.exec(t);let n=255,r;if(!e)return;e[5]!==r&&(n=e[6]?ha(+e[5]):ni(+e[5]));const i=gS(+e[2]),s=+e[3]/100,o=+e[4]/100;return e[1]==="hwb"?r=UC(i,s,o):e[1]==="hsv"?r=HC(i,s,o):r=Xm(i,s,o),{r:r[0],g:r[1],b:r[2],a:n}}function qC(t,e){var n=Qm(t);n[0]=gS(n[0]+e),n=Xm(n),t.r=n[0],t.g=n[1],t.b=n[2]}function GC(t){if(!t)return;const e=Qm(t),n=e[0],r=T2(e[1]),i=T2(e[2]);return t.a<255?`hsla(${n}, ${r}%, ${i}%, ${cr(t.a)})`:`hsl(${n}, ${r}%, ${i}%)`}const b2={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},x2={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function KC(){const t={},e=Object.keys(x2),n=Object.keys(b2);let r,i,s,o,a;for(r=0;r<e.length;r++){for(o=a=e[r],i=0;i<n.length;i++)s=n[i],a=a.replace(s,b2[s]);s=parseInt(x2[o],16),t[a]=[s>>16&255,s>>8&255,s&255]}return t}let bu;function QC(t){bu||(bu=KC(),bu.transparent=[0,0,0,0]);const e=bu[t.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:e.length===4?e[3]:255}}const YC=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function XC(t){const e=YC.exec(t);let n=255,r,i,s;if(e){if(e[7]!==r){const o=+e[7];n=e[8]?ha(o):Hr(o*255,0,255)}return r=+e[1],i=+e[3],s=+e[5],r=255&(e[2]?ha(r):Hr(r,0,255)),i=255&(e[4]?ha(i):Hr(i,0,255)),s=255&(e[6]?ha(s):Hr(s,0,255)),{r,g:i,b:s,a:n}}}function JC(t){return t&&(t.a<255?`rgba(${t.r}, ${t.g}, ${t.b}, ${cr(t.a)})`:`rgb(${t.r}, ${t.g}, ${t.b})`)}const Ed=t=>t<=.0031308?t*12.92:Math.pow(t,1/2.4)*1.055-.055,Ts=t=>t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4);function ZC(t,e,n){const r=Ts(cr(t.r)),i=Ts(cr(t.g)),s=Ts(cr(t.b));return{r:ni(Ed(r+n*(Ts(cr(e.r))-r))),g:ni(Ed(i+n*(Ts(cr(e.g))-i))),b:ni(Ed(s+n*(Ts(cr(e.b))-s))),a:t.a+n*(e.a-t.a)}}function xu(t,e,n){if(t){let r=Qm(t);r[e]=Math.max(0,Math.min(r[e]+r[e]*n,e===0?360:1)),r=Xm(r),t.r=r[0],t.g=r[1],t.b=r[2]}}function mS(t,e){return t&&Object.assign(e||{},t)}function R2(t){var e={r:0,g:0,b:0,a:255};return Array.isArray(t)?t.length>=3&&(e={r:t[0],g:t[1],b:t[2],a:255},t.length>3&&(e.a=ni(t[3]))):(e=mS(t,{r:0,g:0,b:0,a:1}),e.a=ni(e.a)),e}function eP(t){return t.charAt(0)==="r"?XC(t):WC(t)}class nl{constructor(e){if(e instanceof nl)return e;const n=typeof e;let r;n==="object"?r=R2(e):n==="string"&&(r=NC(e)||QC(e)||eP(e)),this._rgb=r,this._valid=!!r}get valid(){return this._valid}get rgb(){var e=mS(this._rgb);return e&&(e.a=cr(e.a)),e}set rgb(e){this._rgb=R2(e)}rgbString(){return this._valid?JC(this._rgb):void 0}hexString(){return this._valid?FC(this._rgb):void 0}hslString(){return this._valid?GC(this._rgb):void 0}mix(e,n){if(e){const r=this.rgb,i=e.rgb;let s;const o=n===s?.5:n,a=2*o-1,l=r.a-i.a,u=((a*l===-1?a:(a+l)/(1+a*l))+1)/2;s=1-u,r.r=255&u*r.r+s*i.r+.5,r.g=255&u*r.g+s*i.g+.5,r.b=255&u*r.b+s*i.b+.5,r.a=o*r.a+(1-o)*i.a,this.rgb=r}return this}interpolate(e,n){return e&&(this._rgb=ZC(this._rgb,e._rgb,n)),this}clone(){return new nl(this.rgb)}alpha(e){return this._rgb.a=ni(e),this}clearer(e){const n=this._rgb;return n.a*=1-e,this}greyscale(){const e=this._rgb,n=Il(e.r*.3+e.g*.59+e.b*.11);return e.r=e.g=e.b=n,this}opaquer(e){const n=this._rgb;return n.a*=1+e,this}negate(){const e=this._rgb;return e.r=255-e.r,e.g=255-e.g,e.b=255-e.b,this}lighten(e){return xu(this._rgb,2,e),this}darken(e){return xu(this._rgb,2,-e),this}saturate(e){return xu(this._rgb,1,e),this}desaturate(e){return xu(this._rgb,1,-e),this}rotate(e){return qC(this._rgb,e),this}}/*!
 * Chart.js v4.4.8
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */function sr(){}const tP=(()=>{let t=0;return()=>t++})();function Ce(t){return t==null}function Ye(t){if(Array.isArray&&Array.isArray(t))return!0;const e=Object.prototype.toString.call(t);return e.slice(0,7)==="[object"&&e.slice(-6)==="Array]"}function be(t){return t!==null&&Object.prototype.toString.call(t)==="[object Object]"}function at(t){return(typeof t=="number"||t instanceof Number)&&isFinite(+t)}function hn(t,e){return at(t)?t:e}function ve(t,e){return typeof t>"u"?e:t}const nP=(t,e)=>typeof t=="string"&&t.endsWith("%")?parseFloat(t)/100:+t/e,_S=(t,e)=>typeof t=="string"&&t.endsWith("%")?parseFloat(t)/100*e:+t;function je(t,e,n){if(t&&typeof t.call=="function")return t.apply(n,e)}function Ne(t,e,n,r){let i,s,o;if(Ye(t))for(s=t.length,i=0;i<s;i++)e.call(n,t[i],i);else if(be(t))for(o=Object.keys(t),s=o.length,i=0;i<s;i++)e.call(n,t[o[i]],o[i])}function Kc(t,e){let n,r,i,s;if(!t||!e||t.length!==e.length)return!1;for(n=0,r=t.length;n<r;++n)if(i=t[n],s=e[n],i.datasetIndex!==s.datasetIndex||i.index!==s.index)return!1;return!0}function Qc(t){if(Ye(t))return t.map(Qc);if(be(t)){const e=Object.create(null),n=Object.keys(t),r=n.length;let i=0;for(;i<r;++i)e[n[i]]=Qc(t[n[i]]);return e}return t}function yS(t){return["__proto__","prototype","constructor"].indexOf(t)===-1}function rP(t,e,n,r){if(!yS(t))return;const i=e[t],s=n[t];be(i)&&be(s)?rl(i,s,r):e[t]=Qc(s)}function rl(t,e,n){const r=Ye(e)?e:[e],i=r.length;if(!be(t))return t;n=n||{};const s=n.merger||rP;let o;for(let a=0;a<i;++a){if(o=r[a],!be(o))continue;const l=Object.keys(o);for(let u=0,h=l.length;u<h;++u)s(l[u],t,o,n)}return t}function Ca(t,e){return rl(t,e,{merger:iP})}function iP(t,e,n){if(!yS(t))return;const r=e[t],i=n[t];be(r)&&be(i)?Ca(r,i):Object.prototype.hasOwnProperty.call(e,t)||(e[t]=Qc(i))}const I2={"":t=>t,x:t=>t.x,y:t=>t.y};function sP(t){const e=t.split("."),n=[];let r="";for(const i of e)r+=i,r.endsWith("\\")?r=r.slice(0,-1)+".":(n.push(r),r="");return n}function oP(t){const e=sP(t);return n=>{for(const r of e){if(r==="")break;n=n&&n[r]}return n}}function hi(t,e){return(I2[e]||(I2[e]=oP(e)))(t)}function Jm(t){return t.charAt(0).toUpperCase()+t.slice(1)}const il=t=>typeof t<"u",fi=t=>typeof t=="function",A2=(t,e)=>{if(t.size!==e.size)return!1;for(const n of t)if(!e.has(n))return!1;return!0};function aP(t){return t.type==="mouseup"||t.type==="click"||t.type==="contextmenu"}const Xe=Math.PI,Ge=2*Xe,lP=Ge+Xe,Yc=Number.POSITIVE_INFINITY,uP=Xe/180,ht=Xe/2,ki=Xe/4,C2=Xe*2/3,Wr=Math.log10,Jn=Math.sign;function Pa(t,e,n){return Math.abs(t-e)<n}function P2(t){const e=Math.round(t);t=Pa(t,e,t/1e3)?e:t;const n=Math.pow(10,Math.floor(Wr(t))),r=t/n;return(r<=1?1:r<=2?2:r<=5?5:10)*n}function cP(t){const e=[],n=Math.sqrt(t);let r;for(r=1;r<n;r++)t%r===0&&(e.push(r),e.push(t/r));return n===(n|0)&&e.push(n),e.sort((i,s)=>i-s).pop(),e}function hP(t){return typeof t=="symbol"||typeof t=="object"&&t!==null&&!(Symbol.toPrimitive in t||"toString"in t||"valueOf"in t)}function sl(t){return!hP(t)&&!isNaN(parseFloat(t))&&isFinite(t)}function fP(t,e){const n=Math.round(t);return n-e<=t&&n+e>=t}function vS(t,e,n){let r,i,s;for(r=0,i=t.length;r<i;r++)s=t[r][n],isNaN(s)||(e.min=Math.min(e.min,s),e.max=Math.max(e.max,s))}function Qn(t){return t*(Xe/180)}function Zm(t){return t*(180/Xe)}function k2(t){if(!at(t))return;let e=1,n=0;for(;Math.round(t*e)/e!==t;)e*=10,n++;return n}function wS(t,e){const n=e.x-t.x,r=e.y-t.y,i=Math.sqrt(n*n+r*r);let s=Math.atan2(r,n);return s<-.5*Xe&&(s+=Ge),{angle:s,distance:i}}function ng(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function dP(t,e){return(t-e+lP)%Ge-Xe}function dn(t){return(t%Ge+Ge)%Ge}function ol(t,e,n,r){const i=dn(t),s=dn(e),o=dn(n),a=dn(s-i),l=dn(o-i),u=dn(i-s),h=dn(i-o);return i===s||i===o||r&&s===o||a>l&&u<h}function Bt(t,e,n){return Math.max(e,Math.min(n,t))}function pP(t){return Bt(t,-32768,32767)}function dr(t,e,n,r=1e-6){return t>=Math.min(e,n)-r&&t<=Math.max(e,n)+r}function e_(t,e,n){n=n||(o=>t[o]<e);let r=t.length-1,i=0,s;for(;r-i>1;)s=i+r>>1,n(s)?i=s:r=s;return{lo:i,hi:r}}const Hi=(t,e,n,r)=>e_(t,n,r?i=>{const s=t[i][e];return s<n||s===n&&t[i+1][e]===n}:i=>t[i][e]<n),gP=(t,e,n)=>e_(t,n,r=>t[r][e]>=n);function mP(t,e,n){let r=0,i=t.length;for(;r<i&&t[r]<e;)r++;for(;i>r&&t[i-1]>n;)i--;return r>0||i<t.length?t.slice(r,i):t}const ES=["push","pop","shift","splice","unshift"];function _P(t,e){if(t._chartjs){t._chartjs.listeners.push(e);return}Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),ES.forEach(n=>{const r="_onData"+Jm(n),i=t[n];Object.defineProperty(t,n,{configurable:!0,enumerable:!1,value(...s){const o=i.apply(this,s);return t._chartjs.listeners.forEach(a=>{typeof a[r]=="function"&&a[r](...s)}),o}})})}function O2(t,e){const n=t._chartjs;if(!n)return;const r=n.listeners,i=r.indexOf(e);i!==-1&&r.splice(i,1),!(r.length>0)&&(ES.forEach(s=>{delete t[s]}),delete t._chartjs)}function SS(t){const e=new Set(t);return e.size===t.length?t:Array.from(e)}const TS=function(){return typeof window>"u"?function(t){return t()}:window.requestAnimationFrame}();function bS(t,e){let n=[],r=!1;return function(...i){n=i,r||(r=!0,TS.call(window,()=>{r=!1,t.apply(e,n)}))}}function yP(t,e){let n;return function(...r){return e?(clearTimeout(n),n=setTimeout(t,e,r)):t.apply(this,r),e}}const t_=t=>t==="start"?"left":t==="end"?"right":"center",Vt=(t,e,n)=>t==="start"?e:t==="end"?n:(e+n)/2,vP=(t,e,n,r)=>t===(r?"left":"right")?n:t==="center"?(e+n)/2:e;function wP(t,e,n){const r=e.length;let i=0,s=r;if(t._sorted){const{iScale:o,vScale:a,_parsed:l}=t,u=t.dataset&&t.dataset.options?t.dataset.options.spanGaps:null,h=o.axis,{min:f,max:d,minDefined:g,maxDefined:_}=o.getUserBounds();if(g){if(i=Math.min(Hi(l,h,f).lo,n?r:Hi(e,h,o.getPixelForValue(f)).lo),u){const y=l.slice(0,i+1).reverse().findIndex(E=>!Ce(E[a.axis]));i-=Math.max(0,y)}i=Bt(i,0,r-1)}if(_){let y=Math.max(Hi(l,o.axis,d,!0).hi+1,n?0:Hi(e,h,o.getPixelForValue(d),!0).hi+1);if(u){const E=l.slice(y-1).findIndex(w=>!Ce(w[a.axis]));y+=Math.max(0,E)}s=Bt(y,i,r)-i}else s=r-i}return{start:i,count:s}}function EP(t){const{xScale:e,yScale:n,_scaleRanges:r}=t,i={xmin:e.min,xmax:e.max,ymin:n.min,ymax:n.max};if(!r)return t._scaleRanges=i,!0;const s=r.xmin!==e.min||r.xmax!==e.max||r.ymin!==n.min||r.ymax!==n.max;return Object.assign(r,i),s}const Ru=t=>t===0||t===1,L2=(t,e,n)=>-(Math.pow(2,10*(t-=1))*Math.sin((t-e)*Ge/n)),M2=(t,e,n)=>Math.pow(2,-10*t)*Math.sin((t-e)*Ge/n)+1,ka={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>-t*(t-2),easeInOutQuad:t=>(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1),easeInCubic:t=>t*t*t,easeOutCubic:t=>(t-=1)*t*t+1,easeInOutCubic:t=>(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2),easeInQuart:t=>t*t*t*t,easeOutQuart:t=>-((t-=1)*t*t*t-1),easeInOutQuart:t=>(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2),easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>(t-=1)*t*t*t*t+1,easeInOutQuint:t=>(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2),easeInSine:t=>-Math.cos(t*ht)+1,easeOutSine:t=>Math.sin(t*ht),easeInOutSine:t=>-.5*(Math.cos(Xe*t)-1),easeInExpo:t=>t===0?0:Math.pow(2,10*(t-1)),easeOutExpo:t=>t===1?1:-Math.pow(2,-10*t)+1,easeInOutExpo:t=>Ru(t)?t:t<.5?.5*Math.pow(2,10*(t*2-1)):.5*(-Math.pow(2,-10*(t*2-1))+2),easeInCirc:t=>t>=1?t:-(Math.sqrt(1-t*t)-1),easeOutCirc:t=>Math.sqrt(1-(t-=1)*t),easeInOutCirc:t=>(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1),easeInElastic:t=>Ru(t)?t:L2(t,.075,.3),easeOutElastic:t=>Ru(t)?t:M2(t,.075,.3),easeInOutElastic(t){return Ru(t)?t:t<.5?.5*L2(t*2,.1125,.45):.5+.5*M2(t*2-1,.1125,.45)},easeInBack(t){return t*t*((1.70158+1)*t-1.70158)},easeOutBack(t){return(t-=1)*t*((1.70158+1)*t+1.70158)+1},easeInOutBack(t){let e=1.70158;return(t/=.5)<1?.5*(t*t*(((e*=1.525)+1)*t-e)):.5*((t-=2)*t*(((e*=1.525)+1)*t+e)+2)},easeInBounce:t=>1-ka.easeOutBounce(1-t),easeOutBounce(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},easeInOutBounce:t=>t<.5?ka.easeInBounce(t*2)*.5:ka.easeOutBounce(t*2-1)*.5+.5};function n_(t){if(t&&typeof t=="object"){const e=t.toString();return e==="[object CanvasPattern]"||e==="[object CanvasGradient]"}return!1}function D2(t){return n_(t)?t:new nl(t)}function Sd(t){return n_(t)?t:new nl(t).saturate(.5).darken(.1).hexString()}const SP=["x","y","borderWidth","radius","tension"],TP=["color","borderColor","backgroundColor"];function bP(t){t.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),t.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:e=>e!=="onProgress"&&e!=="onComplete"&&e!=="fn"}),t.set("animations",{colors:{type:"color",properties:TP},numbers:{type:"number",properties:SP}}),t.describe("animations",{_fallback:"animation"}),t.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:e=>e|0}}}})}function xP(t){t.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const N2=new Map;function RP(t,e){e=e||{};const n=t+JSON.stringify(e);let r=N2.get(n);return r||(r=new Intl.NumberFormat(t,e),N2.set(n,r)),r}function Jh(t,e,n){return RP(e,n).format(t)}const xS={values(t){return Ye(t)?t:""+t},numeric(t,e,n){if(t===0)return"0";const r=this.chart.options.locale;let i,s=t;if(n.length>1){const u=Math.max(Math.abs(n[0].value),Math.abs(n[n.length-1].value));(u<1e-4||u>1e15)&&(i="scientific"),s=IP(t,n)}const o=Wr(Math.abs(s)),a=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),l={notation:i,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(l,this.options.ticks.format),Jh(t,r,l)},logarithmic(t,e,n){if(t===0)return"0";const r=n[e].significand||t/Math.pow(10,Math.floor(Wr(t)));return[1,2,3,5,10,15].includes(r)||e>.8*n.length?xS.numeric.call(this,t,e,n):""}};function IP(t,e){let n=e.length>3?e[2].value-e[1].value:e[1].value-e[0].value;return Math.abs(n)>=1&&t!==Math.floor(t)&&(n=t-Math.floor(t)),n}var Zh={formatters:xS};function AP(t){t.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(e,n)=>n.lineWidth,tickColor:(e,n)=>n.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Zh.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),t.route("scale.ticks","color","","color"),t.route("scale.grid","color","","borderColor"),t.route("scale.border","color","","borderColor"),t.route("scale.title","color","","color"),t.describe("scale",{_fallback:!1,_scriptable:e=>!e.startsWith("before")&&!e.startsWith("after")&&e!=="callback"&&e!=="parser",_indexable:e=>e!=="borderDash"&&e!=="tickBorderDash"&&e!=="dash"}),t.describe("scales",{_fallback:"scale"}),t.describe("scale.ticks",{_scriptable:e=>e!=="backdropPadding"&&e!=="callback",_indexable:e=>e!=="backdropPadding"})}const rs=Object.create(null),rg=Object.create(null);function Oa(t,e){if(!e)return t;const n=e.split(".");for(let r=0,i=n.length;r<i;++r){const s=n[r];t=t[s]||(t[s]=Object.create(null))}return t}function Td(t,e,n){return typeof e=="string"?rl(Oa(t,e),n):rl(Oa(t,""),e)}class CP{constructor(e,n){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=r=>r.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(r,i)=>Sd(i.backgroundColor),this.hoverBorderColor=(r,i)=>Sd(i.borderColor),this.hoverColor=(r,i)=>Sd(i.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(e),this.apply(n)}set(e,n){return Td(this,e,n)}get(e){return Oa(this,e)}describe(e,n){return Td(rg,e,n)}override(e,n){return Td(rs,e,n)}route(e,n,r,i){const s=Oa(this,e),o=Oa(this,r),a="_"+n;Object.defineProperties(s,{[a]:{value:s[n],writable:!0},[n]:{enumerable:!0,get(){const l=this[a],u=o[i];return be(l)?Object.assign({},u,l):ve(l,u)},set(l){this[a]=l}}})}apply(e){e.forEach(n=>n(this))}}var lt=new CP({_scriptable:t=>!t.startsWith("on"),_indexable:t=>t!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[bP,xP,AP]);function PP(t){return!t||Ce(t.size)||Ce(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family}function Xc(t,e,n,r,i){let s=e[i];return s||(s=e[i]=t.measureText(i).width,n.push(i)),s>r&&(r=s),r}function kP(t,e,n,r){r=r||{};let i=r.data=r.data||{},s=r.garbageCollect=r.garbageCollect||[];r.font!==e&&(i=r.data={},s=r.garbageCollect=[],r.font=e),t.save(),t.font=e;let o=0;const a=n.length;let l,u,h,f,d;for(l=0;l<a;l++)if(f=n[l],f!=null&&!Ye(f))o=Xc(t,i,s,o,f);else if(Ye(f))for(u=0,h=f.length;u<h;u++)d=f[u],d!=null&&!Ye(d)&&(o=Xc(t,i,s,o,d));t.restore();const g=s.length/2;if(g>n.length){for(l=0;l<g;l++)delete i[s[l]];s.splice(0,g)}return o}function Oi(t,e,n){const r=t.currentDevicePixelRatio,i=n!==0?Math.max(n/2,.5):0;return Math.round((e-i)*r)/r+i}function V2(t,e){!e&&!t||(e=e||t.getContext("2d"),e.save(),e.resetTransform(),e.clearRect(0,0,t.width,t.height),e.restore())}function ig(t,e,n,r){RS(t,e,n,r,null)}function RS(t,e,n,r,i){let s,o,a,l,u,h,f,d;const g=e.pointStyle,_=e.rotation,y=e.radius;let E=(_||0)*uP;if(g&&typeof g=="object"&&(s=g.toString(),s==="[object HTMLImageElement]"||s==="[object HTMLCanvasElement]")){t.save(),t.translate(n,r),t.rotate(E),t.drawImage(g,-g.width/2,-g.height/2,g.width,g.height),t.restore();return}if(!(isNaN(y)||y<=0)){switch(t.beginPath(),g){default:i?t.ellipse(n,r,i/2,y,0,0,Ge):t.arc(n,r,y,0,Ge),t.closePath();break;case"triangle":h=i?i/2:y,t.moveTo(n+Math.sin(E)*h,r-Math.cos(E)*y),E+=C2,t.lineTo(n+Math.sin(E)*h,r-Math.cos(E)*y),E+=C2,t.lineTo(n+Math.sin(E)*h,r-Math.cos(E)*y),t.closePath();break;case"rectRounded":u=y*.516,l=y-u,o=Math.cos(E+ki)*l,f=Math.cos(E+ki)*(i?i/2-u:l),a=Math.sin(E+ki)*l,d=Math.sin(E+ki)*(i?i/2-u:l),t.arc(n-f,r-a,u,E-Xe,E-ht),t.arc(n+d,r-o,u,E-ht,E),t.arc(n+f,r+a,u,E,E+ht),t.arc(n-d,r+o,u,E+ht,E+Xe),t.closePath();break;case"rect":if(!_){l=Math.SQRT1_2*y,h=i?i/2:l,t.rect(n-h,r-l,2*h,2*l);break}E+=ki;case"rectRot":f=Math.cos(E)*(i?i/2:y),o=Math.cos(E)*y,a=Math.sin(E)*y,d=Math.sin(E)*(i?i/2:y),t.moveTo(n-f,r-a),t.lineTo(n+d,r-o),t.lineTo(n+f,r+a),t.lineTo(n-d,r+o),t.closePath();break;case"crossRot":E+=ki;case"cross":f=Math.cos(E)*(i?i/2:y),o=Math.cos(E)*y,a=Math.sin(E)*y,d=Math.sin(E)*(i?i/2:y),t.moveTo(n-f,r-a),t.lineTo(n+f,r+a),t.moveTo(n+d,r-o),t.lineTo(n-d,r+o);break;case"star":f=Math.cos(E)*(i?i/2:y),o=Math.cos(E)*y,a=Math.sin(E)*y,d=Math.sin(E)*(i?i/2:y),t.moveTo(n-f,r-a),t.lineTo(n+f,r+a),t.moveTo(n+d,r-o),t.lineTo(n-d,r+o),E+=ki,f=Math.cos(E)*(i?i/2:y),o=Math.cos(E)*y,a=Math.sin(E)*y,d=Math.sin(E)*(i?i/2:y),t.moveTo(n-f,r-a),t.lineTo(n+f,r+a),t.moveTo(n+d,r-o),t.lineTo(n-d,r+o);break;case"line":o=i?i/2:Math.cos(E)*y,a=Math.sin(E)*y,t.moveTo(n-o,r-a),t.lineTo(n+o,r+a);break;case"dash":t.moveTo(n,r),t.lineTo(n+Math.cos(E)*(i?i/2:y),r+Math.sin(E)*y);break;case!1:t.closePath();break}t.fill(),e.borderWidth>0&&t.stroke()}}function pr(t,e,n){return n=n||.5,!e||t&&t.x>e.left-n&&t.x<e.right+n&&t.y>e.top-n&&t.y<e.bottom+n}function ef(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()}function tf(t){t.restore()}function OP(t,e,n,r,i){if(!e)return t.lineTo(n.x,n.y);if(i==="middle"){const s=(e.x+n.x)/2;t.lineTo(s,e.y),t.lineTo(s,n.y)}else i==="after"!=!!r?t.lineTo(e.x,n.y):t.lineTo(n.x,e.y);t.lineTo(n.x,n.y)}function LP(t,e,n,r){if(!e)return t.lineTo(n.x,n.y);t.bezierCurveTo(r?e.cp1x:e.cp2x,r?e.cp1y:e.cp2y,r?n.cp2x:n.cp1x,r?n.cp2y:n.cp1y,n.x,n.y)}function MP(t,e){e.translation&&t.translate(e.translation[0],e.translation[1]),Ce(e.rotation)||t.rotate(e.rotation),e.color&&(t.fillStyle=e.color),e.textAlign&&(t.textAlign=e.textAlign),e.textBaseline&&(t.textBaseline=e.textBaseline)}function DP(t,e,n,r,i){if(i.strikethrough||i.underline){const s=t.measureText(r),o=e-s.actualBoundingBoxLeft,a=e+s.actualBoundingBoxRight,l=n-s.actualBoundingBoxAscent,u=n+s.actualBoundingBoxDescent,h=i.strikethrough?(l+u)/2:u;t.strokeStyle=t.fillStyle,t.beginPath(),t.lineWidth=i.decorationWidth||2,t.moveTo(o,h),t.lineTo(a,h),t.stroke()}}function NP(t,e){const n=t.fillStyle;t.fillStyle=e.color,t.fillRect(e.left,e.top,e.width,e.height),t.fillStyle=n}function is(t,e,n,r,i,s={}){const o=Ye(e)?e:[e],a=s.strokeWidth>0&&s.strokeColor!=="";let l,u;for(t.save(),t.font=i.string,MP(t,s),l=0;l<o.length;++l)u=o[l],s.backdrop&&NP(t,s.backdrop),a&&(s.strokeColor&&(t.strokeStyle=s.strokeColor),Ce(s.strokeWidth)||(t.lineWidth=s.strokeWidth),t.strokeText(u,n,r,s.maxWidth)),t.fillText(u,n,r,s.maxWidth),DP(t,n,r,u,s),r+=Number(i.lineHeight);t.restore()}function al(t,e){const{x:n,y:r,w:i,h:s,radius:o}=e;t.arc(n+o.topLeft,r+o.topLeft,o.topLeft,1.5*Xe,Xe,!0),t.lineTo(n,r+s-o.bottomLeft),t.arc(n+o.bottomLeft,r+s-o.bottomLeft,o.bottomLeft,Xe,ht,!0),t.lineTo(n+i-o.bottomRight,r+s),t.arc(n+i-o.bottomRight,r+s-o.bottomRight,o.bottomRight,ht,0,!0),t.lineTo(n+i,r+o.topRight),t.arc(n+i-o.topRight,r+o.topRight,o.topRight,0,-ht,!0),t.lineTo(n+o.topLeft,r)}const VP=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,FP=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function zP(t,e){const n=(""+t).match(VP);if(!n||n[1]==="normal")return e*1.2;switch(t=+n[2],n[3]){case"px":return t;case"%":t/=100;break}return e*t}const jP=t=>+t||0;function r_(t,e){const n={},r=be(e),i=r?Object.keys(e):e,s=be(t)?r?o=>ve(t[o],t[e[o]]):o=>t[o]:()=>t;for(const o of i)n[o]=jP(s(o));return n}function IS(t){return r_(t,{top:"y",right:"x",bottom:"y",left:"x"})}function Qi(t){return r_(t,["topLeft","topRight","bottomLeft","bottomRight"])}function Ut(t){const e=IS(t);return e.width=e.left+e.right,e.height=e.top+e.bottom,e}function yt(t,e){t=t||{},e=e||lt.font;let n=ve(t.size,e.size);typeof n=="string"&&(n=parseInt(n,10));let r=ve(t.style,e.style);r&&!(""+r).match(FP)&&(console.warn('Invalid font style specified: "'+r+'"'),r=void 0);const i={family:ve(t.family,e.family),lineHeight:zP(ve(t.lineHeight,e.lineHeight),n),size:n,style:r,weight:ve(t.weight,e.weight),string:""};return i.string=PP(i),i}function Iu(t,e,n,r){let i,s,o;for(i=0,s=t.length;i<s;++i)if(o=t[i],o!==void 0&&o!==void 0)return o}function BP(t,e,n){const{min:r,max:i}=t,s=_S(e,(i-r)/2),o=(a,l)=>n&&a===0?0:a+l;return{min:o(r,-Math.abs(s)),max:o(i,s)}}function Ti(t,e){return Object.assign(Object.create(t),e)}function i_(t,e=[""],n,r,i=()=>t[0]){const s=n||t;typeof r>"u"&&(r=kS("_fallback",t));const o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:t,_rootScopes:s,_fallback:r,_getTarget:i,override:a=>i_([a,...t],e,s,r)};return new Proxy(o,{deleteProperty(a,l){return delete a[l],delete a._keys,delete t[0][l],!0},get(a,l){return CS(a,l,()=>QP(l,e,t,a))},getOwnPropertyDescriptor(a,l){return Reflect.getOwnPropertyDescriptor(a._scopes[0],l)},getPrototypeOf(){return Reflect.getPrototypeOf(t[0])},has(a,l){return z2(a).includes(l)},ownKeys(a){return z2(a)},set(a,l,u){const h=a._storage||(a._storage=i());return a[l]=h[l]=u,delete a._keys,!0}})}function oo(t,e,n,r){const i={_cacheable:!1,_proxy:t,_context:e,_subProxy:n,_stack:new Set,_descriptors:AS(t,r),setContext:s=>oo(t,s,n,r),override:s=>oo(t.override(s),e,n,r)};return new Proxy(i,{deleteProperty(s,o){return delete s[o],delete t[o],!0},get(s,o,a){return CS(s,o,()=>UP(s,o,a))},getOwnPropertyDescriptor(s,o){return s._descriptors.allKeys?Reflect.has(t,o)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(t,o)},getPrototypeOf(){return Reflect.getPrototypeOf(t)},has(s,o){return Reflect.has(t,o)},ownKeys(){return Reflect.ownKeys(t)},set(s,o,a){return t[o]=a,delete s[o],!0}})}function AS(t,e={scriptable:!0,indexable:!0}){const{_scriptable:n=e.scriptable,_indexable:r=e.indexable,_allKeys:i=e.allKeys}=t;return{allKeys:i,scriptable:n,indexable:r,isScriptable:fi(n)?n:()=>n,isIndexable:fi(r)?r:()=>r}}const $P=(t,e)=>t?t+Jm(e):e,s_=(t,e)=>be(e)&&t!=="adapters"&&(Object.getPrototypeOf(e)===null||e.constructor===Object);function CS(t,e,n){if(Object.prototype.hasOwnProperty.call(t,e)||e==="constructor")return t[e];const r=n();return t[e]=r,r}function UP(t,e,n){const{_proxy:r,_context:i,_subProxy:s,_descriptors:o}=t;let a=r[e];return fi(a)&&o.isScriptable(e)&&(a=HP(e,a,t,n)),Ye(a)&&a.length&&(a=WP(e,a,t,o.isIndexable)),s_(e,a)&&(a=oo(a,i,s&&s[e],o)),a}function HP(t,e,n,r){const{_proxy:i,_context:s,_subProxy:o,_stack:a}=n;if(a.has(t))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+t);a.add(t);let l=e(s,o||r);return a.delete(t),s_(t,l)&&(l=o_(i._scopes,i,t,l)),l}function WP(t,e,n,r){const{_proxy:i,_context:s,_subProxy:o,_descriptors:a}=n;if(typeof s.index<"u"&&r(t))return e[s.index%e.length];if(be(e[0])){const l=e,u=i._scopes.filter(h=>h!==l);e=[];for(const h of l){const f=o_(u,i,t,h);e.push(oo(f,s,o&&o[t],a))}}return e}function PS(t,e,n){return fi(t)?t(e,n):t}const qP=(t,e)=>t===!0?e:typeof t=="string"?hi(e,t):void 0;function GP(t,e,n,r,i){for(const s of e){const o=qP(n,s);if(o){t.add(o);const a=PS(o._fallback,n,i);if(typeof a<"u"&&a!==n&&a!==r)return a}else if(o===!1&&typeof r<"u"&&n!==r)return null}return!1}function o_(t,e,n,r){const i=e._rootScopes,s=PS(e._fallback,n,r),o=[...t,...i],a=new Set;a.add(r);let l=F2(a,o,n,s||n,r);return l===null||typeof s<"u"&&s!==n&&(l=F2(a,o,s,l,r),l===null)?!1:i_(Array.from(a),[""],i,s,()=>KP(e,n,r))}function F2(t,e,n,r,i){for(;n;)n=GP(t,e,n,r,i);return n}function KP(t,e,n){const r=t._getTarget();e in r||(r[e]={});const i=r[e];return Ye(i)&&be(n)?n:i||{}}function QP(t,e,n,r){let i;for(const s of e)if(i=kS($P(s,t),n),typeof i<"u")return s_(t,i)?o_(n,r,t,i):i}function kS(t,e){for(const n of e){if(!n)continue;const r=n[t];if(typeof r<"u")return r}}function z2(t){let e=t._keys;return e||(e=t._keys=YP(t._scopes)),e}function YP(t){const e=new Set;for(const n of t)for(const r of Object.keys(n).filter(i=>!i.startsWith("_")))e.add(r);return Array.from(e)}function XP(t,e,n,r){const{iScale:i}=t,{key:s="r"}=this._parsing,o=new Array(r);let a,l,u,h;for(a=0,l=r;a<l;++a)u=a+n,h=e[u],o[a]={r:i.parse(hi(h,s),u)};return o}const JP=Number.EPSILON||1e-14,ao=(t,e)=>e<t.length&&!t[e].skip&&t[e],OS=t=>t==="x"?"y":"x";function ZP(t,e,n,r){const i=t.skip?e:t,s=e,o=n.skip?e:n,a=ng(s,i),l=ng(o,s);let u=a/(a+l),h=l/(a+l);u=isNaN(u)?0:u,h=isNaN(h)?0:h;const f=r*u,d=r*h;return{previous:{x:s.x-f*(o.x-i.x),y:s.y-f*(o.y-i.y)},next:{x:s.x+d*(o.x-i.x),y:s.y+d*(o.y-i.y)}}}function ek(t,e,n){const r=t.length;let i,s,o,a,l,u=ao(t,0);for(let h=0;h<r-1;++h)if(l=u,u=ao(t,h+1),!(!l||!u)){if(Pa(e[h],0,JP)){n[h]=n[h+1]=0;continue}i=n[h]/e[h],s=n[h+1]/e[h],a=Math.pow(i,2)+Math.pow(s,2),!(a<=9)&&(o=3/Math.sqrt(a),n[h]=i*o*e[h],n[h+1]=s*o*e[h])}}function tk(t,e,n="x"){const r=OS(n),i=t.length;let s,o,a,l=ao(t,0);for(let u=0;u<i;++u){if(o=a,a=l,l=ao(t,u+1),!a)continue;const h=a[n],f=a[r];o&&(s=(h-o[n])/3,a[`cp1${n}`]=h-s,a[`cp1${r}`]=f-s*e[u]),l&&(s=(l[n]-h)/3,a[`cp2${n}`]=h+s,a[`cp2${r}`]=f+s*e[u])}}function nk(t,e="x"){const n=OS(e),r=t.length,i=Array(r).fill(0),s=Array(r);let o,a,l,u=ao(t,0);for(o=0;o<r;++o)if(a=l,l=u,u=ao(t,o+1),!!l){if(u){const h=u[e]-l[e];i[o]=h!==0?(u[n]-l[n])/h:0}s[o]=a?u?Jn(i[o-1])!==Jn(i[o])?0:(i[o-1]+i[o])/2:i[o-1]:i[o]}ek(t,i,s),tk(t,s,e)}function Au(t,e,n){return Math.max(Math.min(t,n),e)}function rk(t,e){let n,r,i,s,o,a=pr(t[0],e);for(n=0,r=t.length;n<r;++n)o=s,s=a,a=n<r-1&&pr(t[n+1],e),s&&(i=t[n],o&&(i.cp1x=Au(i.cp1x,e.left,e.right),i.cp1y=Au(i.cp1y,e.top,e.bottom)),a&&(i.cp2x=Au(i.cp2x,e.left,e.right),i.cp2y=Au(i.cp2y,e.top,e.bottom)))}function ik(t,e,n,r,i){let s,o,a,l;if(e.spanGaps&&(t=t.filter(u=>!u.skip)),e.cubicInterpolationMode==="monotone")nk(t,i);else{let u=r?t[t.length-1]:t[0];for(s=0,o=t.length;s<o;++s)a=t[s],l=ZP(u,a,t[Math.min(s+1,o-(r?0:1))%o],e.tension),a.cp1x=l.previous.x,a.cp1y=l.previous.y,a.cp2x=l.next.x,a.cp2y=l.next.y,u=a}e.capBezierPoints&&rk(t,n)}function a_(){return typeof window<"u"&&typeof document<"u"}function l_(t){let e=t.parentNode;return e&&e.toString()==="[object ShadowRoot]"&&(e=e.host),e}function Jc(t,e,n){let r;return typeof t=="string"?(r=parseInt(t,10),t.indexOf("%")!==-1&&(r=r/100*e.parentNode[n])):r=t,r}const nf=t=>t.ownerDocument.defaultView.getComputedStyle(t,null);function sk(t,e){return nf(t).getPropertyValue(e)}const ok=["top","right","bottom","left"];function Yi(t,e,n){const r={};n=n?"-"+n:"";for(let i=0;i<4;i++){const s=ok[i];r[s]=parseFloat(t[e+"-"+s+n])||0}return r.width=r.left+r.right,r.height=r.top+r.bottom,r}const ak=(t,e,n)=>(t>0||e>0)&&(!n||!n.shadowRoot);function lk(t,e){const n=t.touches,r=n&&n.length?n[0]:t,{offsetX:i,offsetY:s}=r;let o=!1,a,l;if(ak(i,s,t.target))a=i,l=s;else{const u=e.getBoundingClientRect();a=r.clientX-u.left,l=r.clientY-u.top,o=!0}return{x:a,y:l,box:o}}function Vi(t,e){if("native"in t)return t;const{canvas:n,currentDevicePixelRatio:r}=e,i=nf(n),s=i.boxSizing==="border-box",o=Yi(i,"padding"),a=Yi(i,"border","width"),{x:l,y:u,box:h}=lk(t,n),f=o.left+(h&&a.left),d=o.top+(h&&a.top);let{width:g,height:_}=e;return s&&(g-=o.width+a.width,_-=o.height+a.height),{x:Math.round((l-f)/g*n.width/r),y:Math.round((u-d)/_*n.height/r)}}function uk(t,e,n){let r,i;if(e===void 0||n===void 0){const s=t&&l_(t);if(!s)e=t.clientWidth,n=t.clientHeight;else{const o=s.getBoundingClientRect(),a=nf(s),l=Yi(a,"border","width"),u=Yi(a,"padding");e=o.width-u.width-l.width,n=o.height-u.height-l.height,r=Jc(a.maxWidth,s,"clientWidth"),i=Jc(a.maxHeight,s,"clientHeight")}}return{width:e,height:n,maxWidth:r||Yc,maxHeight:i||Yc}}const Cu=t=>Math.round(t*10)/10;function ck(t,e,n,r){const i=nf(t),s=Yi(i,"margin"),o=Jc(i.maxWidth,t,"clientWidth")||Yc,a=Jc(i.maxHeight,t,"clientHeight")||Yc,l=uk(t,e,n);let{width:u,height:h}=l;if(i.boxSizing==="content-box"){const d=Yi(i,"border","width"),g=Yi(i,"padding");u-=g.width+d.width,h-=g.height+d.height}return u=Math.max(0,u-s.width),h=Math.max(0,r?u/r:h-s.height),u=Cu(Math.min(u,o,l.maxWidth)),h=Cu(Math.min(h,a,l.maxHeight)),u&&!h&&(h=Cu(u/2)),(e!==void 0||n!==void 0)&&r&&l.height&&h>l.height&&(h=l.height,u=Cu(Math.floor(h*r))),{width:u,height:h}}function j2(t,e,n){const r=e||1,i=Math.floor(t.height*r),s=Math.floor(t.width*r);t.height=Math.floor(t.height),t.width=Math.floor(t.width);const o=t.canvas;return o.style&&(n||!o.style.height&&!o.style.width)&&(o.style.height=`${t.height}px`,o.style.width=`${t.width}px`),t.currentDevicePixelRatio!==r||o.height!==i||o.width!==s?(t.currentDevicePixelRatio=r,o.height=i,o.width=s,t.ctx.setTransform(r,0,0,r,0,0),!0):!1}const hk=function(){let t=!1;try{const e={get passive(){return t=!0,!1}};a_()&&(window.addEventListener("test",null,e),window.removeEventListener("test",null,e))}catch{}return t}();function B2(t,e){const n=sk(t,e),r=n&&n.match(/^(\d+)(\.\d+)?px$/);return r?+r[1]:void 0}function Fi(t,e,n,r){return{x:t.x+n*(e.x-t.x),y:t.y+n*(e.y-t.y)}}function fk(t,e,n,r){return{x:t.x+n*(e.x-t.x),y:r==="middle"?n<.5?t.y:e.y:r==="after"?n<1?t.y:e.y:n>0?e.y:t.y}}function dk(t,e,n,r){const i={x:t.cp2x,y:t.cp2y},s={x:e.cp1x,y:e.cp1y},o=Fi(t,i,n),a=Fi(i,s,n),l=Fi(s,e,n),u=Fi(o,a,n),h=Fi(a,l,n);return Fi(u,h,n)}const pk=function(t,e){return{x(n){return t+t+e-n},setWidth(n){e=n},textAlign(n){return n==="center"?n:n==="right"?"left":"right"},xPlus(n,r){return n-r},leftForLtr(n,r){return n-r}}},gk=function(){return{x(t){return t},setWidth(t){},textAlign(t){return t},xPlus(t,e){return t+e},leftForLtr(t,e){return t}}};function Ks(t,e,n){return t?pk(e,n):gk()}function LS(t,e){let n,r;(e==="ltr"||e==="rtl")&&(n=t.canvas.style,r=[n.getPropertyValue("direction"),n.getPropertyPriority("direction")],n.setProperty("direction",e,"important"),t.prevTextDirection=r)}function MS(t,e){e!==void 0&&(delete t.prevTextDirection,t.canvas.style.setProperty("direction",e[0],e[1]))}function DS(t){return t==="angle"?{between:ol,compare:dP,normalize:dn}:{between:dr,compare:(e,n)=>e-n,normalize:e=>e}}function $2({start:t,end:e,count:n,loop:r,style:i}){return{start:t%n,end:e%n,loop:r&&(e-t+1)%n===0,style:i}}function mk(t,e,n){const{property:r,start:i,end:s}=n,{between:o,normalize:a}=DS(r),l=e.length;let{start:u,end:h,loop:f}=t,d,g;if(f){for(u+=l,h+=l,d=0,g=l;d<g&&o(a(e[u%l][r]),i,s);++d)u--,h--;u%=l,h%=l}return h<u&&(h+=l),{start:u,end:h,loop:f,style:t.style}}function NS(t,e,n){if(!n)return[t];const{property:r,start:i,end:s}=n,o=e.length,{compare:a,between:l,normalize:u}=DS(r),{start:h,end:f,loop:d,style:g}=mk(t,e,n),_=[];let y=!1,E=null,w,m,S;const C=()=>l(i,S,w)&&a(i,S)!==0,O=()=>a(s,w)===0||l(s,S,w),M=()=>y||C(),R=()=>!y||O();for(let T=h,b=h;T<=f;++T)m=e[T%o],!m.skip&&(w=u(m[r]),w!==S&&(y=l(w,i,s),E===null&&M()&&(E=a(w,i)===0?T:b),E!==null&&R()&&(_.push($2({start:E,end:T,loop:d,count:o,style:g})),E=null),b=T,S=w));return E!==null&&_.push($2({start:E,end:f,loop:d,count:o,style:g})),_}function VS(t,e){const n=[],r=t.segments;for(let i=0;i<r.length;i++){const s=NS(r[i],t.points,e);s.length&&n.push(...s)}return n}function _k(t,e,n,r){let i=0,s=e-1;if(n&&!r)for(;i<e&&!t[i].skip;)i++;for(;i<e&&t[i].skip;)i++;for(i%=e,n&&(s+=i);s>i&&t[s%e].skip;)s--;return s%=e,{start:i,end:s}}function yk(t,e,n,r){const i=t.length,s=[];let o=e,a=t[e],l;for(l=e+1;l<=n;++l){const u=t[l%i];u.skip||u.stop?a.skip||(r=!1,s.push({start:e%i,end:(l-1)%i,loop:r}),e=o=u.stop?l:null):(o=l,a.skip&&(e=l)),a=u}return o!==null&&s.push({start:e%i,end:o%i,loop:r}),s}function vk(t,e){const n=t.points,r=t.options.spanGaps,i=n.length;if(!i)return[];const s=!!t._loop,{start:o,end:a}=_k(n,i,s,r);if(r===!0)return U2(t,[{start:o,end:a,loop:s}],n,e);const l=a<o?a+i:a,u=!!t._fullLoop&&o===0&&a===i-1;return U2(t,yk(n,o,l,u),n,e)}function U2(t,e,n,r){return!r||!r.setContext||!n?e:wk(t,e,n,r)}function wk(t,e,n,r){const i=t._chart.getContext(),s=H2(t.options),{_datasetIndex:o,options:{spanGaps:a}}=t,l=n.length,u=[];let h=s,f=e[0].start,d=f;function g(_,y,E,w){const m=a?-1:1;if(_!==y){for(_+=l;n[_%l].skip;)_-=m;for(;n[y%l].skip;)y+=m;_%l!==y%l&&(u.push({start:_%l,end:y%l,loop:E,style:w}),h=w,f=y%l)}}for(const _ of e){f=a?f:_.start;let y=n[f%l],E;for(d=f+1;d<=_.end;d++){const w=n[d%l];E=H2(r.setContext(Ti(i,{type:"segment",p0:y,p1:w,p0DataIndex:(d-1)%l,p1DataIndex:d%l,datasetIndex:o}))),Ek(E,h)&&g(f,d-1,_.loop,h),y=w,h=E}f<d-1&&g(f,d-1,_.loop,h)}return u}function H2(t){return{backgroundColor:t.backgroundColor,borderCapStyle:t.borderCapStyle,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderJoinStyle:t.borderJoinStyle,borderWidth:t.borderWidth,borderColor:t.borderColor}}function Ek(t,e){if(!e)return!1;const n=[],r=function(i,s){return n_(s)?(n.includes(s)||n.push(s),n.indexOf(s)):s};return JSON.stringify(t,r)!==JSON.stringify(e,r)}/*!
 * Chart.js v4.4.8
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */class Sk{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(e,n,r,i){const s=n.listeners[i],o=n.duration;s.forEach(a=>a({chart:e,initial:n.initial,numSteps:o,currentStep:Math.min(r-n.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=TS.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(e=Date.now()){let n=0;this._charts.forEach((r,i)=>{if(!r.running||!r.items.length)return;const s=r.items;let o=s.length-1,a=!1,l;for(;o>=0;--o)l=s[o],l._active?(l._total>r.duration&&(r.duration=l._total),l.tick(e),a=!0):(s[o]=s[s.length-1],s.pop());a&&(i.draw(),this._notify(i,r,e,"progress")),s.length||(r.running=!1,this._notify(i,r,e,"complete"),r.initial=!1),n+=s.length}),this._lastDate=e,n===0&&(this._running=!1)}_getAnims(e){const n=this._charts;let r=n.get(e);return r||(r={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},n.set(e,r)),r}listen(e,n,r){this._getAnims(e).listeners[n].push(r)}add(e,n){!n||!n.length||this._getAnims(e).items.push(...n)}has(e){return this._getAnims(e).items.length>0}start(e){const n=this._charts.get(e);n&&(n.running=!0,n.start=Date.now(),n.duration=n.items.reduce((r,i)=>Math.max(r,i._duration),0),this._refresh())}running(e){if(!this._running)return!1;const n=this._charts.get(e);return!(!n||!n.running||!n.items.length)}stop(e){const n=this._charts.get(e);if(!n||!n.items.length)return;const r=n.items;let i=r.length-1;for(;i>=0;--i)r[i].cancel();n.items=[],this._notify(e,n,Date.now(),"complete")}remove(e){return this._charts.delete(e)}}var or=new Sk;const W2="transparent",Tk={boolean(t,e,n){return n>.5?e:t},color(t,e,n){const r=D2(t||W2),i=r.valid&&D2(e||W2);return i&&i.valid?i.mix(r,n).hexString():e},number(t,e,n){return t+(e-t)*n}};class bk{constructor(e,n,r,i){const s=n[r];i=Iu([e.to,i,s,e.from]);const o=Iu([e.from,s,i]);this._active=!0,this._fn=e.fn||Tk[e.type||typeof o],this._easing=ka[e.easing]||ka.linear,this._start=Math.floor(Date.now()+(e.delay||0)),this._duration=this._total=Math.floor(e.duration),this._loop=!!e.loop,this._target=n,this._prop=r,this._from=o,this._to=i,this._promises=void 0}active(){return this._active}update(e,n,r){if(this._active){this._notify(!1);const i=this._target[this._prop],s=r-this._start,o=this._duration-s;this._start=r,this._duration=Math.floor(Math.max(o,e.duration)),this._total+=s,this._loop=!!e.loop,this._to=Iu([e.to,n,i,e.from]),this._from=Iu([e.from,i,n])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(e){const n=e-this._start,r=this._duration,i=this._prop,s=this._from,o=this._loop,a=this._to;let l;if(this._active=s!==a&&(o||n<r),!this._active){this._target[i]=a,this._notify(!0);return}if(n<0){this._target[i]=s;return}l=n/r%2,l=o&&l>1?2-l:l,l=this._easing(Math.min(1,Math.max(0,l))),this._target[i]=this._fn(s,a,l)}wait(){const e=this._promises||(this._promises=[]);return new Promise((n,r)=>{e.push({res:n,rej:r})})}_notify(e){const n=e?"res":"rej",r=this._promises||[];for(let i=0;i<r.length;i++)r[i][n]()}}class FS{constructor(e,n){this._chart=e,this._properties=new Map,this.configure(n)}configure(e){if(!be(e))return;const n=Object.keys(lt.animation),r=this._properties;Object.getOwnPropertyNames(e).forEach(i=>{const s=e[i];if(!be(s))return;const o={};for(const a of n)o[a]=s[a];(Ye(s.properties)&&s.properties||[i]).forEach(a=>{(a===i||!r.has(a))&&r.set(a,o)})})}_animateOptions(e,n){const r=n.options,i=Rk(e,r);if(!i)return[];const s=this._createAnimations(i,r);return r.$shared&&xk(e.options.$animations,r).then(()=>{e.options=r},()=>{}),s}_createAnimations(e,n){const r=this._properties,i=[],s=e.$animations||(e.$animations={}),o=Object.keys(n),a=Date.now();let l;for(l=o.length-1;l>=0;--l){const u=o[l];if(u.charAt(0)==="$")continue;if(u==="options"){i.push(...this._animateOptions(e,n));continue}const h=n[u];let f=s[u];const d=r.get(u);if(f)if(d&&f.active()){f.update(d,h,a);continue}else f.cancel();if(!d||!d.duration){e[u]=h;continue}s[u]=f=new bk(d,e,u,h),i.push(f)}return i}update(e,n){if(this._properties.size===0){Object.assign(e,n);return}const r=this._createAnimations(e,n);if(r.length)return or.add(this._chart,r),!0}}function xk(t,e){const n=[],r=Object.keys(e);for(let i=0;i<r.length;i++){const s=t[r[i]];s&&s.active()&&n.push(s.wait())}return Promise.all(n)}function Rk(t,e){if(!e)return;let n=t.options;if(!n){t.options=e;return}return n.$shared&&(t.options=n=Object.assign({},n,{$shared:!1,$animations:{}})),n}function q2(t,e){const n=t&&t.options||{},r=n.reverse,i=n.min===void 0?e:0,s=n.max===void 0?e:0;return{start:r?s:i,end:r?i:s}}function Ik(t,e,n){if(n===!1)return!1;const r=q2(t,n),i=q2(e,n);return{top:i.end,right:r.end,bottom:i.start,left:r.start}}function Ak(t){let e,n,r,i;return be(t)?(e=t.top,n=t.right,r=t.bottom,i=t.left):e=n=r=i=t,{top:e,right:n,bottom:r,left:i,disabled:t===!1}}function zS(t,e){const n=[],r=t._getSortedDatasetMetas(e);let i,s;for(i=0,s=r.length;i<s;++i)n.push(r[i].index);return n}function G2(t,e,n,r={}){const i=t.keys,s=r.mode==="single";let o,a,l,u;if(e===null)return;let h=!1;for(o=0,a=i.length;o<a;++o){if(l=+i[o],l===n){if(h=!0,r.all)continue;break}u=t.values[l],at(u)&&(s||e===0||Jn(e)===Jn(u))&&(e+=u)}return!h&&!r.all?0:e}function Ck(t,e){const{iScale:n,vScale:r}=e,i=n.axis==="x"?"x":"y",s=r.axis==="x"?"x":"y",o=Object.keys(t),a=new Array(o.length);let l,u,h;for(l=0,u=o.length;l<u;++l)h=o[l],a[l]={[i]:h,[s]:t[h]};return a}function bd(t,e){const n=t&&t.options.stacked;return n||n===void 0&&e.stack!==void 0}function Pk(t,e,n){return`${t.id}.${e.id}.${n.stack||n.type}`}function kk(t){const{min:e,max:n,minDefined:r,maxDefined:i}=t.getUserBounds();return{min:r?e:Number.NEGATIVE_INFINITY,max:i?n:Number.POSITIVE_INFINITY}}function Ok(t,e,n){const r=t[e]||(t[e]={});return r[n]||(r[n]={})}function K2(t,e,n,r){for(const i of e.getMatchingVisibleMetas(r).reverse()){const s=t[i.index];if(n&&s>0||!n&&s<0)return i.index}return null}function Q2(t,e){const{chart:n,_cachedMeta:r}=t,i=n._stacks||(n._stacks={}),{iScale:s,vScale:o,index:a}=r,l=s.axis,u=o.axis,h=Pk(s,o,r),f=e.length;let d;for(let g=0;g<f;++g){const _=e[g],{[l]:y,[u]:E}=_,w=_._stacks||(_._stacks={});d=w[u]=Ok(i,h,y),d[a]=E,d._top=K2(d,o,!0,r.type),d._bottom=K2(d,o,!1,r.type);const m=d._visualValues||(d._visualValues={});m[a]=E}}function xd(t,e){const n=t.scales;return Object.keys(n).filter(r=>n[r].axis===e).shift()}function Lk(t,e){return Ti(t,{active:!1,dataset:void 0,datasetIndex:e,index:e,mode:"default",type:"dataset"})}function Mk(t,e,n){return Ti(t,{active:!1,dataIndex:e,parsed:void 0,raw:void 0,element:n,index:e,mode:"default",type:"data"})}function ta(t,e){const n=t.controller.index,r=t.vScale&&t.vScale.axis;if(r){e=e||t._parsed;for(const i of e){const s=i._stacks;if(!s||s[r]===void 0||s[r][n]===void 0)return;delete s[r][n],s[r]._visualValues!==void 0&&s[r]._visualValues[n]!==void 0&&delete s[r]._visualValues[n]}}}const Rd=t=>t==="reset"||t==="none",Y2=(t,e)=>e?t:Object.assign({},t),Dk=(t,e,n)=>t&&!e.hidden&&e._stacked&&{keys:zS(n,!0),values:null};class ri{constructor(e,n){this.chart=e,this._ctx=e.ctx,this.index=n,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const e=this._cachedMeta;this.configure(),this.linkScales(),e._stacked=bd(e.vScale,e),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(e){this.index!==e&&ta(this._cachedMeta),this.index=e}linkScales(){const e=this.chart,n=this._cachedMeta,r=this.getDataset(),i=(f,d,g,_)=>f==="x"?d:f==="r"?_:g,s=n.xAxisID=ve(r.xAxisID,xd(e,"x")),o=n.yAxisID=ve(r.yAxisID,xd(e,"y")),a=n.rAxisID=ve(r.rAxisID,xd(e,"r")),l=n.indexAxis,u=n.iAxisID=i(l,s,o,a),h=n.vAxisID=i(l,o,s,a);n.xScale=this.getScaleForId(s),n.yScale=this.getScaleForId(o),n.rScale=this.getScaleForId(a),n.iScale=this.getScaleForId(u),n.vScale=this.getScaleForId(h)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(e){return this.chart.scales[e]}_getOtherScale(e){const n=this._cachedMeta;return e===n.iScale?n.vScale:n.iScale}reset(){this._update("reset")}_destroy(){const e=this._cachedMeta;this._data&&O2(this._data,this),e._stacked&&ta(e)}_dataCheck(){const e=this.getDataset(),n=e.data||(e.data=[]),r=this._data;if(be(n)){const i=this._cachedMeta;this._data=Ck(n,i)}else if(r!==n){if(r){O2(r,this);const i=this._cachedMeta;ta(i),i._parsed=[]}n&&Object.isExtensible(n)&&_P(n,this),this._syncList=[],this._data=n}}addElements(){const e=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(e.dataset=new this.datasetElementType)}buildOrUpdateElements(e){const n=this._cachedMeta,r=this.getDataset();let i=!1;this._dataCheck();const s=n._stacked;n._stacked=bd(n.vScale,n),n.stack!==r.stack&&(i=!0,ta(n),n.stack=r.stack),this._resyncElements(e),(i||s!==n._stacked)&&(Q2(this,n._parsed),n._stacked=bd(n.vScale,n))}configure(){const e=this.chart.config,n=e.datasetScopeKeys(this._type),r=e.getOptionScopes(this.getDataset(),n,!0);this.options=e.createResolver(r,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(e,n){const{_cachedMeta:r,_data:i}=this,{iScale:s,_stacked:o}=r,a=s.axis;let l=e===0&&n===i.length?!0:r._sorted,u=e>0&&r._parsed[e-1],h,f,d;if(this._parsing===!1)r._parsed=i,r._sorted=!0,d=i;else{Ye(i[e])?d=this.parseArrayData(r,i,e,n):be(i[e])?d=this.parseObjectData(r,i,e,n):d=this.parsePrimitiveData(r,i,e,n);const g=()=>f[a]===null||u&&f[a]<u[a];for(h=0;h<n;++h)r._parsed[h+e]=f=d[h],l&&(g()&&(l=!1),u=f);r._sorted=l}o&&Q2(this,d)}parsePrimitiveData(e,n,r,i){const{iScale:s,vScale:o}=e,a=s.axis,l=o.axis,u=s.getLabels(),h=s===o,f=new Array(i);let d,g,_;for(d=0,g=i;d<g;++d)_=d+r,f[d]={[a]:h||s.parse(u[_],_),[l]:o.parse(n[_],_)};return f}parseArrayData(e,n,r,i){const{xScale:s,yScale:o}=e,a=new Array(i);let l,u,h,f;for(l=0,u=i;l<u;++l)h=l+r,f=n[h],a[l]={x:s.parse(f[0],h),y:o.parse(f[1],h)};return a}parseObjectData(e,n,r,i){const{xScale:s,yScale:o}=e,{xAxisKey:a="x",yAxisKey:l="y"}=this._parsing,u=new Array(i);let h,f,d,g;for(h=0,f=i;h<f;++h)d=h+r,g=n[d],u[h]={x:s.parse(hi(g,a),d),y:o.parse(hi(g,l),d)};return u}getParsed(e){return this._cachedMeta._parsed[e]}getDataElement(e){return this._cachedMeta.data[e]}applyStack(e,n,r){const i=this.chart,s=this._cachedMeta,o=n[e.axis],a={keys:zS(i,!0),values:n._stacks[e.axis]._visualValues};return G2(a,o,s.index,{mode:r})}updateRangeFromParsed(e,n,r,i){const s=r[n.axis];let o=s===null?NaN:s;const a=i&&r._stacks[n.axis];i&&a&&(i.values=a,o=G2(i,s,this._cachedMeta.index)),e.min=Math.min(e.min,o),e.max=Math.max(e.max,o)}getMinMax(e,n){const r=this._cachedMeta,i=r._parsed,s=r._sorted&&e===r.iScale,o=i.length,a=this._getOtherScale(e),l=Dk(n,r,this.chart),u={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:h,max:f}=kk(a);let d,g;function _(){g=i[d];const y=g[a.axis];return!at(g[e.axis])||h>y||f<y}for(d=0;d<o&&!(!_()&&(this.updateRangeFromParsed(u,e,g,l),s));++d);if(s){for(d=o-1;d>=0;--d)if(!_()){this.updateRangeFromParsed(u,e,g,l);break}}return u}getAllParsedValues(e){const n=this._cachedMeta._parsed,r=[];let i,s,o;for(i=0,s=n.length;i<s;++i)o=n[i][e.axis],at(o)&&r.push(o);return r}getMaxOverflow(){return!1}getLabelAndValue(e){const n=this._cachedMeta,r=n.iScale,i=n.vScale,s=this.getParsed(e);return{label:r?""+r.getLabelForValue(s[r.axis]):"",value:i?""+i.getLabelForValue(s[i.axis]):""}}_update(e){const n=this._cachedMeta;this.update(e||"default"),n._clip=Ak(ve(this.options.clip,Ik(n.xScale,n.yScale,this.getMaxOverflow())))}update(e){}draw(){const e=this._ctx,n=this.chart,r=this._cachedMeta,i=r.data||[],s=n.chartArea,o=[],a=this._drawStart||0,l=this._drawCount||i.length-a,u=this.options.drawActiveElementsOnTop;let h;for(r.dataset&&r.dataset.draw(e,s,a,l),h=a;h<a+l;++h){const f=i[h];f.hidden||(f.active&&u?o.push(f):f.draw(e,s))}for(h=0;h<o.length;++h)o[h].draw(e,s)}getStyle(e,n){const r=n?"active":"default";return e===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(r):this.resolveDataElementOptions(e||0,r)}getContext(e,n,r){const i=this.getDataset();let s;if(e>=0&&e<this._cachedMeta.data.length){const o=this._cachedMeta.data[e];s=o.$context||(o.$context=Mk(this.getContext(),e,o)),s.parsed=this.getParsed(e),s.raw=i.data[e],s.index=s.dataIndex=e}else s=this.$context||(this.$context=Lk(this.chart.getContext(),this.index)),s.dataset=i,s.index=s.datasetIndex=this.index;return s.active=!!n,s.mode=r,s}resolveDatasetElementOptions(e){return this._resolveElementOptions(this.datasetElementType.id,e)}resolveDataElementOptions(e,n){return this._resolveElementOptions(this.dataElementType.id,n,e)}_resolveElementOptions(e,n="default",r){const i=n==="active",s=this._cachedDataOpts,o=e+"-"+n,a=s[o],l=this.enableOptionSharing&&il(r);if(a)return Y2(a,l);const u=this.chart.config,h=u.datasetElementScopeKeys(this._type,e),f=i?[`${e}Hover`,"hover",e,""]:[e,""],d=u.getOptionScopes(this.getDataset(),h),g=Object.keys(lt.elements[e]),_=()=>this.getContext(r,i,n),y=u.resolveNamedOptions(d,g,_,f);return y.$shared&&(y.$shared=l,s[o]=Object.freeze(Y2(y,l))),y}_resolveAnimations(e,n,r){const i=this.chart,s=this._cachedDataOpts,o=`animation-${n}`,a=s[o];if(a)return a;let l;if(i.options.animation!==!1){const h=this.chart.config,f=h.datasetAnimationScopeKeys(this._type,n),d=h.getOptionScopes(this.getDataset(),f);l=h.createResolver(d,this.getContext(e,r,n))}const u=new FS(i,l&&l.animations);return l&&l._cacheable&&(s[o]=Object.freeze(u)),u}getSharedOptions(e){if(e.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},e))}includeOptions(e,n){return!n||Rd(e)||this.chart._animationsDisabled}_getSharedOptions(e,n){const r=this.resolveDataElementOptions(e,n),i=this._sharedOptions,s=this.getSharedOptions(r),o=this.includeOptions(n,s)||s!==i;return this.updateSharedOptions(s,n,r),{sharedOptions:s,includeOptions:o}}updateElement(e,n,r,i){Rd(i)?Object.assign(e,r):this._resolveAnimations(n,i).update(e,r)}updateSharedOptions(e,n,r){e&&!Rd(n)&&this._resolveAnimations(void 0,n).update(e,r)}_setStyle(e,n,r,i){e.active=i;const s=this.getStyle(n,i);this._resolveAnimations(n,r,i).update(e,{options:!i&&this.getSharedOptions(s)||s})}removeHoverStyle(e,n,r){this._setStyle(e,r,"active",!1)}setHoverStyle(e,n,r){this._setStyle(e,r,"active",!0)}_removeDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!1)}_setDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!0)}_resyncElements(e){const n=this._data,r=this._cachedMeta.data;for(const[a,l,u]of this._syncList)this[a](l,u);this._syncList=[];const i=r.length,s=n.length,o=Math.min(s,i);o&&this.parse(0,o),s>i?this._insertElements(i,s-i,e):s<i&&this._removeElements(s,i-s)}_insertElements(e,n,r=!0){const i=this._cachedMeta,s=i.data,o=e+n;let a;const l=u=>{for(u.length+=n,a=u.length-1;a>=o;a--)u[a]=u[a-n]};for(l(s),a=e;a<o;++a)s[a]=new this.dataElementType;this._parsing&&l(i._parsed),this.parse(e,n),r&&this.updateElements(s,e,n,"reset")}updateElements(e,n,r,i){}_removeElements(e,n){const r=this._cachedMeta;if(this._parsing){const i=r._parsed.splice(e,n);r._stacked&&ta(r,i)}r.data.splice(e,n)}_sync(e){if(this._parsing)this._syncList.push(e);else{const[n,r,i]=e;this[n](r,i)}this.chart._dataChanges.push([this.index,...e])}_onDataPush(){const e=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-e,e])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(e,n){n&&this._sync(["_removeElements",e,n]);const r=arguments.length-2;r&&this._sync(["_insertElements",e,r])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}ne(ri,"defaults",{}),ne(ri,"datasetElementType",null),ne(ri,"dataElementType",null);function Nk(t,e){if(!t._cache.$bar){const n=t.getMatchingVisibleMetas(e);let r=[];for(let i=0,s=n.length;i<s;i++)r=r.concat(n[i].controller.getAllParsedValues(t));t._cache.$bar=SS(r.sort((i,s)=>i-s))}return t._cache.$bar}function Vk(t){const e=t.iScale,n=Nk(e,t.type);let r=e._length,i,s,o,a;const l=()=>{o===32767||o===-32768||(il(a)&&(r=Math.min(r,Math.abs(o-a)||r)),a=o)};for(i=0,s=n.length;i<s;++i)o=e.getPixelForValue(n[i]),l();for(a=void 0,i=0,s=e.ticks.length;i<s;++i)o=e.getPixelForTick(i),l();return r}function Fk(t,e,n,r){const i=n.barThickness;let s,o;return Ce(i)?(s=e.min*n.categoryPercentage,o=n.barPercentage):(s=i*r,o=1),{chunk:s/r,ratio:o,start:e.pixels[t]-s/2}}function zk(t,e,n,r){const i=e.pixels,s=i[t];let o=t>0?i[t-1]:null,a=t<i.length-1?i[t+1]:null;const l=n.categoryPercentage;o===null&&(o=s-(a===null?e.end-e.start:a-s)),a===null&&(a=s+s-o);const u=s-(s-Math.min(o,a))/2*l;return{chunk:Math.abs(a-o)/2*l/r,ratio:n.barPercentage,start:u}}function jk(t,e,n,r){const i=n.parse(t[0],r),s=n.parse(t[1],r),o=Math.min(i,s),a=Math.max(i,s);let l=o,u=a;Math.abs(o)>Math.abs(a)&&(l=a,u=o),e[n.axis]=u,e._custom={barStart:l,barEnd:u,start:i,end:s,min:o,max:a}}function jS(t,e,n,r){return Ye(t)?jk(t,e,n,r):e[n.axis]=n.parse(t,r),e}function X2(t,e,n,r){const i=t.iScale,s=t.vScale,o=i.getLabels(),a=i===s,l=[];let u,h,f,d;for(u=n,h=n+r;u<h;++u)d=e[u],f={},f[i.axis]=a||i.parse(o[u],u),l.push(jS(d,f,s,u));return l}function Id(t){return t&&t.barStart!==void 0&&t.barEnd!==void 0}function Bk(t,e,n){return t!==0?Jn(t):(e.isHorizontal()?1:-1)*(e.min>=n?1:-1)}function $k(t){let e,n,r,i,s;return t.horizontal?(e=t.base>t.x,n="left",r="right"):(e=t.base<t.y,n="bottom",r="top"),e?(i="end",s="start"):(i="start",s="end"),{start:n,end:r,reverse:e,top:i,bottom:s}}function Uk(t,e,n,r){let i=e.borderSkipped;const s={};if(!i){t.borderSkipped=s;return}if(i===!0){t.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:o,end:a,reverse:l,top:u,bottom:h}=$k(t);i==="middle"&&n&&(t.enableBorderRadius=!0,(n._top||0)===r?i=u:(n._bottom||0)===r?i=h:(s[J2(h,o,a,l)]=!0,i=u)),s[J2(i,o,a,l)]=!0,t.borderSkipped=s}function J2(t,e,n,r){return r?(t=Hk(t,e,n),t=Z2(t,n,e)):t=Z2(t,e,n),t}function Hk(t,e,n){return t===e?n:t===n?e:t}function Z2(t,e,n){return t==="start"?e:t==="end"?n:t}function Wk(t,{inflateAmount:e},n){t.inflateAmount=e==="auto"?n===1?.33:0:e}class ac extends ri{parsePrimitiveData(e,n,r,i){return X2(e,n,r,i)}parseArrayData(e,n,r,i){return X2(e,n,r,i)}parseObjectData(e,n,r,i){const{iScale:s,vScale:o}=e,{xAxisKey:a="x",yAxisKey:l="y"}=this._parsing,u=s.axis==="x"?a:l,h=o.axis==="x"?a:l,f=[];let d,g,_,y;for(d=r,g=r+i;d<g;++d)y=n[d],_={},_[s.axis]=s.parse(hi(y,u),d),f.push(jS(hi(y,h),_,o,d));return f}updateRangeFromParsed(e,n,r,i){super.updateRangeFromParsed(e,n,r,i);const s=r._custom;s&&n===this._cachedMeta.vScale&&(e.min=Math.min(e.min,s.min),e.max=Math.max(e.max,s.max))}getMaxOverflow(){return 0}getLabelAndValue(e){const n=this._cachedMeta,{iScale:r,vScale:i}=n,s=this.getParsed(e),o=s._custom,a=Id(o)?"["+o.start+", "+o.end+"]":""+i.getLabelForValue(s[i.axis]);return{label:""+r.getLabelForValue(s[r.axis]),value:a}}initialize(){this.enableOptionSharing=!0,super.initialize();const e=this._cachedMeta;e.stack=this.getDataset().stack}update(e){const n=this._cachedMeta;this.updateElements(n.data,0,n.data.length,e)}updateElements(e,n,r,i){const s=i==="reset",{index:o,_cachedMeta:{vScale:a}}=this,l=a.getBasePixel(),u=a.isHorizontal(),h=this._getRuler(),{sharedOptions:f,includeOptions:d}=this._getSharedOptions(n,i);for(let g=n;g<n+r;g++){const _=this.getParsed(g),y=s||Ce(_[a.axis])?{base:l,head:l}:this._calculateBarValuePixels(g),E=this._calculateBarIndexPixels(g,h),w=(_._stacks||{})[a.axis],m={horizontal:u,base:y.base,enableBorderRadius:!w||Id(_._custom)||o===w._top||o===w._bottom,x:u?y.head:E.center,y:u?E.center:y.head,height:u?E.size:Math.abs(y.size),width:u?Math.abs(y.size):E.size};d&&(m.options=f||this.resolveDataElementOptions(g,e[g].active?"active":i));const S=m.options||e[g].options;Uk(m,S,w,o),Wk(m,S,h.ratio),this.updateElement(e[g],g,m,i)}}_getStacks(e,n){const{iScale:r}=this._cachedMeta,i=r.getMatchingVisibleMetas(this._type).filter(h=>h.controller.options.grouped),s=r.options.stacked,o=[],a=this._cachedMeta.controller.getParsed(n),l=a&&a[r.axis],u=h=>{const f=h._parsed.find(g=>g[r.axis]===l),d=f&&f[h.vScale.axis];if(Ce(d)||isNaN(d))return!0};for(const h of i)if(!(n!==void 0&&u(h))&&((s===!1||o.indexOf(h.stack)===-1||s===void 0&&h.stack===void 0)&&o.push(h.stack),h.index===e))break;return o.length||o.push(void 0),o}_getStackCount(e){return this._getStacks(void 0,e).length}_getStackIndex(e,n,r){const i=this._getStacks(e,r),s=n!==void 0?i.indexOf(n):-1;return s===-1?i.length-1:s}_getRuler(){const e=this.options,n=this._cachedMeta,r=n.iScale,i=[];let s,o;for(s=0,o=n.data.length;s<o;++s)i.push(r.getPixelForValue(this.getParsed(s)[r.axis],s));const a=e.barThickness;return{min:a||Vk(n),pixels:i,start:r._startPixel,end:r._endPixel,stackCount:this._getStackCount(),scale:r,grouped:e.grouped,ratio:a?1:e.categoryPercentage*e.barPercentage}}_calculateBarValuePixels(e){const{_cachedMeta:{vScale:n,_stacked:r,index:i},options:{base:s,minBarLength:o}}=this,a=s||0,l=this.getParsed(e),u=l._custom,h=Id(u);let f=l[n.axis],d=0,g=r?this.applyStack(n,l,r):f,_,y;g!==f&&(d=g-f,g=f),h&&(f=u.barStart,g=u.barEnd-u.barStart,f!==0&&Jn(f)!==Jn(u.barEnd)&&(d=0),d+=f);const E=!Ce(s)&&!h?s:d;let w=n.getPixelForValue(E);if(this.chart.getDataVisibility(e)?_=n.getPixelForValue(d+g):_=w,y=_-w,Math.abs(y)<o){y=Bk(y,n,a)*o,f===a&&(w-=y/2);const m=n.getPixelForDecimal(0),S=n.getPixelForDecimal(1),C=Math.min(m,S),O=Math.max(m,S);w=Math.max(Math.min(w,O),C),_=w+y,r&&!h&&(l._stacks[n.axis]._visualValues[i]=n.getValueForPixel(_)-n.getValueForPixel(w))}if(w===n.getPixelForValue(a)){const m=Jn(y)*n.getLineWidthForValue(a)/2;w+=m,y-=m}return{size:y,base:w,head:_,center:_+y/2}}_calculateBarIndexPixels(e,n){const r=n.scale,i=this.options,s=i.skipNull,o=ve(i.maxBarThickness,1/0);let a,l;if(n.grouped){const u=s?this._getStackCount(e):n.stackCount,h=i.barThickness==="flex"?zk(e,n,i,u):Fk(e,n,i,u),f=this._getStackIndex(this.index,this._cachedMeta.stack,s?e:void 0);a=h.start+h.chunk*f+h.chunk/2,l=Math.min(o,h.chunk*h.ratio)}else a=r.getPixelForValue(this.getParsed(e)[r.axis],e),l=Math.min(o,n.min*n.ratio);return{base:a-l/2,head:a+l/2,center:a,size:l}}draw(){const e=this._cachedMeta,n=e.vScale,r=e.data,i=r.length;let s=0;for(;s<i;++s)this.getParsed(s)[n.axis]!==null&&!r[s].hidden&&r[s].draw(this._ctx)}}ne(ac,"id","bar"),ne(ac,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),ne(ac,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});function qk(t,e,n){let r=1,i=1,s=0,o=0;if(e<Ge){const a=t,l=a+e,u=Math.cos(a),h=Math.sin(a),f=Math.cos(l),d=Math.sin(l),g=(S,C,O)=>ol(S,a,l,!0)?1:Math.max(C,C*n,O,O*n),_=(S,C,O)=>ol(S,a,l,!0)?-1:Math.min(C,C*n,O,O*n),y=g(0,u,f),E=g(ht,h,d),w=_(Xe,u,f),m=_(Xe+ht,h,d);r=(y-w)/2,i=(E-m)/2,s=-(y+w)/2,o=-(E+m)/2}return{ratioX:r,ratioY:i,offsetX:s,offsetY:o}}class Bs extends ri{constructor(e,n){super(e,n),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(e,n){const r=this.getDataset().data,i=this._cachedMeta;if(this._parsing===!1)i._parsed=r;else{let s=l=>+r[l];if(be(r[e])){const{key:l="value"}=this._parsing;s=u=>+hi(r[u],l)}let o,a;for(o=e,a=e+n;o<a;++o)i._parsed[o]=s(o)}}_getRotation(){return Qn(this.options.rotation-90)}_getCircumference(){return Qn(this.options.circumference)}_getRotationExtents(){let e=Ge,n=-Ge;for(let r=0;r<this.chart.data.datasets.length;++r)if(this.chart.isDatasetVisible(r)&&this.chart.getDatasetMeta(r).type===this._type){const i=this.chart.getDatasetMeta(r).controller,s=i._getRotation(),o=i._getCircumference();e=Math.min(e,s),n=Math.max(n,s+o)}return{rotation:e,circumference:n-e}}update(e){const n=this.chart,{chartArea:r}=n,i=this._cachedMeta,s=i.data,o=this.getMaxBorderWidth()+this.getMaxOffset(s)+this.options.spacing,a=Math.max((Math.min(r.width,r.height)-o)/2,0),l=Math.min(nP(this.options.cutout,a),1),u=this._getRingWeight(this.index),{circumference:h,rotation:f}=this._getRotationExtents(),{ratioX:d,ratioY:g,offsetX:_,offsetY:y}=qk(f,h,l),E=(r.width-o)/d,w=(r.height-o)/g,m=Math.max(Math.min(E,w)/2,0),S=_S(this.options.radius,m),C=Math.max(S*l,0),O=(S-C)/this._getVisibleDatasetWeightTotal();this.offsetX=_*S,this.offsetY=y*S,i.total=this.calculateTotal(),this.outerRadius=S-O*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-O*u,0),this.updateElements(s,0,s.length,e)}_circumference(e,n){const r=this.options,i=this._cachedMeta,s=this._getCircumference();return n&&r.animation.animateRotate||!this.chart.getDataVisibility(e)||i._parsed[e]===null||i.data[e].hidden?0:this.calculateCircumference(i._parsed[e]*s/Ge)}updateElements(e,n,r,i){const s=i==="reset",o=this.chart,a=o.chartArea,u=o.options.animation,h=(a.left+a.right)/2,f=(a.top+a.bottom)/2,d=s&&u.animateScale,g=d?0:this.innerRadius,_=d?0:this.outerRadius,{sharedOptions:y,includeOptions:E}=this._getSharedOptions(n,i);let w=this._getRotation(),m;for(m=0;m<n;++m)w+=this._circumference(m,s);for(m=n;m<n+r;++m){const S=this._circumference(m,s),C=e[m],O={x:h+this.offsetX,y:f+this.offsetY,startAngle:w,endAngle:w+S,circumference:S,outerRadius:_,innerRadius:g};E&&(O.options=y||this.resolveDataElementOptions(m,C.active?"active":i)),w+=S,this.updateElement(C,m,O,i)}}calculateTotal(){const e=this._cachedMeta,n=e.data;let r=0,i;for(i=0;i<n.length;i++){const s=e._parsed[i];s!==null&&!isNaN(s)&&this.chart.getDataVisibility(i)&&!n[i].hidden&&(r+=Math.abs(s))}return r}calculateCircumference(e){const n=this._cachedMeta.total;return n>0&&!isNaN(e)?Ge*(Math.abs(e)/n):0}getLabelAndValue(e){const n=this._cachedMeta,r=this.chart,i=r.data.labels||[],s=Jh(n._parsed[e],r.options.locale);return{label:i[e]||"",value:s}}getMaxBorderWidth(e){let n=0;const r=this.chart;let i,s,o,a,l;if(!e){for(i=0,s=r.data.datasets.length;i<s;++i)if(r.isDatasetVisible(i)){o=r.getDatasetMeta(i),e=o.data,a=o.controller;break}}if(!e)return 0;for(i=0,s=e.length;i<s;++i)l=a.resolveDataElementOptions(i),l.borderAlign!=="inner"&&(n=Math.max(n,l.borderWidth||0,l.hoverBorderWidth||0));return n}getMaxOffset(e){let n=0;for(let r=0,i=e.length;r<i;++r){const s=this.resolveDataElementOptions(r);n=Math.max(n,s.offset||0,s.hoverOffset||0)}return n}_getRingWeightOffset(e){let n=0;for(let r=0;r<e;++r)this.chart.isDatasetVisible(r)&&(n+=this._getRingWeight(r));return n}_getRingWeight(e){return Math.max(ve(this.chart.data.datasets[e].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}ne(Bs,"id","doughnut"),ne(Bs,"defaults",{datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"}),ne(Bs,"descriptors",{_scriptable:e=>e!=="spacing",_indexable:e=>e!=="spacing"&&!e.startsWith("borderDash")&&!e.startsWith("hoverBorderDash")}),ne(Bs,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(e){const n=e.data;if(n.labels.length&&n.datasets.length){const{labels:{pointStyle:r,color:i}}=e.legend.options;return n.labels.map((s,o)=>{const l=e.getDatasetMeta(0).controller.getStyle(o);return{text:s,fillStyle:l.backgroundColor,strokeStyle:l.borderColor,fontColor:i,lineWidth:l.borderWidth,pointStyle:r,hidden:!e.getDataVisibility(o),index:o}})}return[]}},onClick(e,n,r){r.chart.toggleDataVisibility(n.index),r.chart.update()}}}});class lc extends ri{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(e){const n=this._cachedMeta,{dataset:r,data:i=[],_dataset:s}=n,o=this.chart._animationsDisabled;let{start:a,count:l}=wP(n,i,o);this._drawStart=a,this._drawCount=l,EP(n)&&(a=0,l=i.length),r._chart=this.chart,r._datasetIndex=this.index,r._decimated=!!s._decimated,r.points=i;const u=this.resolveDatasetElementOptions(e);this.options.showLine||(u.borderWidth=0),u.segment=this.options.segment,this.updateElement(r,void 0,{animated:!o,options:u},e),this.updateElements(i,a,l,e)}updateElements(e,n,r,i){const s=i==="reset",{iScale:o,vScale:a,_stacked:l,_dataset:u}=this._cachedMeta,{sharedOptions:h,includeOptions:f}=this._getSharedOptions(n,i),d=o.axis,g=a.axis,{spanGaps:_,segment:y}=this.options,E=sl(_)?_:Number.POSITIVE_INFINITY,w=this.chart._animationsDisabled||s||i==="none",m=n+r,S=e.length;let C=n>0&&this.getParsed(n-1);for(let O=0;O<S;++O){const M=e[O],R=w?M:{};if(O<n||O>=m){R.skip=!0;continue}const T=this.getParsed(O),b=Ce(T[g]),x=R[d]=o.getPixelForValue(T[d],O),P=R[g]=s||b?a.getBasePixel():a.getPixelForValue(l?this.applyStack(a,T,l):T[g],O);R.skip=isNaN(x)||isNaN(P)||b,R.stop=O>0&&Math.abs(T[d]-C[d])>E,y&&(R.parsed=T,R.raw=u.data[O]),f&&(R.options=h||this.resolveDataElementOptions(O,M.active?"active":i)),w||this.updateElement(M,O,R,i),C=T}}getMaxOverflow(){const e=this._cachedMeta,n=e.dataset,r=n.options&&n.options.borderWidth||0,i=e.data||[];if(!i.length)return r;const s=i[0].size(this.resolveDataElementOptions(0)),o=i[i.length-1].size(this.resolveDataElementOptions(i.length-1));return Math.max(r,s,o)/2}draw(){const e=this._cachedMeta;e.dataset.updateControlPoints(this.chart.chartArea,e.iScale.axis),super.draw()}}ne(lc,"id","line"),ne(lc,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),ne(lc,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});class sg extends Bs{}ne(sg,"id","pie"),ne(sg,"defaults",{cutout:0,rotation:0,circumference:360,radius:"100%"});class uc extends ri{getLabelAndValue(e){const n=this._cachedMeta.vScale,r=this.getParsed(e);return{label:n.getLabels()[e],value:""+n.getLabelForValue(r[n.axis])}}parseObjectData(e,n,r,i){return XP.bind(this)(e,n,r,i)}update(e){const n=this._cachedMeta,r=n.dataset,i=n.data||[],s=n.iScale.getLabels();if(r.points=i,e!=="resize"){const o=this.resolveDatasetElementOptions(e);this.options.showLine||(o.borderWidth=0);const a={_loop:!0,_fullLoop:s.length===i.length,options:o};this.updateElement(r,void 0,a,e)}this.updateElements(i,0,i.length,e)}updateElements(e,n,r,i){const s=this._cachedMeta.rScale,o=i==="reset";for(let a=n;a<n+r;a++){const l=e[a],u=this.resolveDataElementOptions(a,l.active?"active":i),h=s.getPointPositionForValue(a,this.getParsed(a).r),f=o?s.xCenter:h.x,d=o?s.yCenter:h.y,g={x:f,y:d,angle:h.angle,skip:isNaN(f)||isNaN(d),options:u};this.updateElement(l,a,g,i)}}}ne(uc,"id","radar"),ne(uc,"defaults",{datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}}),ne(uc,"overrides",{aspectRatio:1,scales:{r:{type:"radialLinear"}}});function Li(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class u_{constructor(e){ne(this,"options");this.options=e||{}}static override(e){Object.assign(u_.prototype,e)}init(){}formats(){return Li()}parse(){return Li()}format(){return Li()}add(){return Li()}diff(){return Li()}startOf(){return Li()}endOf(){return Li()}}var Gk={_date:u_};function Kk(t,e,n,r){const{controller:i,data:s,_sorted:o}=t,a=i._cachedMeta.iScale,l=t.dataset&&t.dataset.options?t.dataset.options.spanGaps:null;if(a&&e===a.axis&&e!=="r"&&o&&s.length){const u=a._reversePixels?gP:Hi;if(r){if(i._sharedOptions){const h=s[0],f=typeof h.getRange=="function"&&h.getRange(e);if(f){const d=u(s,e,n-f),g=u(s,e,n+f);return{lo:d.lo,hi:g.hi}}}}else{const h=u(s,e,n);if(l){const{vScale:f}=i._cachedMeta,{_parsed:d}=t,g=d.slice(0,h.lo+1).reverse().findIndex(y=>!Ce(y[f.axis]));h.lo-=Math.max(0,g);const _=d.slice(h.hi).findIndex(y=>!Ce(y[f.axis]));h.hi+=Math.max(0,_)}return h}}return{lo:0,hi:s.length-1}}function Al(t,e,n,r,i){const s=t.getSortedVisibleDatasetMetas(),o=n[e];for(let a=0,l=s.length;a<l;++a){const{index:u,data:h}=s[a],{lo:f,hi:d}=Kk(s[a],e,o,i);for(let g=f;g<=d;++g){const _=h[g];_.skip||r(_,u,g)}}}function Qk(t){const e=t.indexOf("x")!==-1,n=t.indexOf("y")!==-1;return function(r,i){const s=e?Math.abs(r.x-i.x):0,o=n?Math.abs(r.y-i.y):0;return Math.sqrt(Math.pow(s,2)+Math.pow(o,2))}}function Ad(t,e,n,r,i){const s=[];return!i&&!t.isPointInArea(e)||Al(t,n,e,function(a,l,u){!i&&!pr(a,t.chartArea,0)||a.inRange(e.x,e.y,r)&&s.push({element:a,datasetIndex:l,index:u})},!0),s}function Yk(t,e,n,r){let i=[];function s(o,a,l){const{startAngle:u,endAngle:h}=o.getProps(["startAngle","endAngle"],r),{angle:f}=wS(o,{x:e.x,y:e.y});ol(f,u,h)&&i.push({element:o,datasetIndex:a,index:l})}return Al(t,n,e,s),i}function Xk(t,e,n,r,i,s){let o=[];const a=Qk(n);let l=Number.POSITIVE_INFINITY;function u(h,f,d){const g=h.inRange(e.x,e.y,i);if(r&&!g)return;const _=h.getCenterPoint(i);if(!(!!s||t.isPointInArea(_))&&!g)return;const E=a(e,_);E<l?(o=[{element:h,datasetIndex:f,index:d}],l=E):E===l&&o.push({element:h,datasetIndex:f,index:d})}return Al(t,n,e,u),o}function Cd(t,e,n,r,i,s){return!s&&!t.isPointInArea(e)?[]:n==="r"&&!r?Yk(t,e,n,i):Xk(t,e,n,r,i,s)}function e0(t,e,n,r,i){const s=[],o=n==="x"?"inXRange":"inYRange";let a=!1;return Al(t,n,e,(l,u,h)=>{l[o]&&l[o](e[n],i)&&(s.push({element:l,datasetIndex:u,index:h}),a=a||l.inRange(e.x,e.y,i))}),r&&!a?[]:s}var Jk={evaluateInteractionItems:Al,modes:{index(t,e,n,r){const i=Vi(e,t),s=n.axis||"x",o=n.includeInvisible||!1,a=n.intersect?Ad(t,i,s,r,o):Cd(t,i,s,!1,r,o),l=[];return a.length?(t.getSortedVisibleDatasetMetas().forEach(u=>{const h=a[0].index,f=u.data[h];f&&!f.skip&&l.push({element:f,datasetIndex:u.index,index:h})}),l):[]},dataset(t,e,n,r){const i=Vi(e,t),s=n.axis||"xy",o=n.includeInvisible||!1;let a=n.intersect?Ad(t,i,s,r,o):Cd(t,i,s,!1,r,o);if(a.length>0){const l=a[0].datasetIndex,u=t.getDatasetMeta(l).data;a=[];for(let h=0;h<u.length;++h)a.push({element:u[h],datasetIndex:l,index:h})}return a},point(t,e,n,r){const i=Vi(e,t),s=n.axis||"xy",o=n.includeInvisible||!1;return Ad(t,i,s,r,o)},nearest(t,e,n,r){const i=Vi(e,t),s=n.axis||"xy",o=n.includeInvisible||!1;return Cd(t,i,s,n.intersect,r,o)},x(t,e,n,r){const i=Vi(e,t);return e0(t,i,"x",n.intersect,r)},y(t,e,n,r){const i=Vi(e,t);return e0(t,i,"y",n.intersect,r)}}};const BS=["left","top","right","bottom"];function na(t,e){return t.filter(n=>n.pos===e)}function t0(t,e){return t.filter(n=>BS.indexOf(n.pos)===-1&&n.box.axis===e)}function ra(t,e){return t.sort((n,r)=>{const i=e?r:n,s=e?n:r;return i.weight===s.weight?i.index-s.index:i.weight-s.weight})}function Zk(t){const e=[];let n,r,i,s,o,a;for(n=0,r=(t||[]).length;n<r;++n)i=t[n],{position:s,options:{stack:o,stackWeight:a=1}}=i,e.push({index:n,box:i,pos:s,horizontal:i.isHorizontal(),weight:i.weight,stack:o&&s+o,stackWeight:a});return e}function e9(t){const e={};for(const n of t){const{stack:r,pos:i,stackWeight:s}=n;if(!r||!BS.includes(i))continue;const o=e[r]||(e[r]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=s}return e}function t9(t,e){const n=e9(t),{vBoxMaxWidth:r,hBoxMaxHeight:i}=e;let s,o,a;for(s=0,o=t.length;s<o;++s){a=t[s];const{fullSize:l}=a.box,u=n[a.stack],h=u&&a.stackWeight/u.weight;a.horizontal?(a.width=h?h*r:l&&e.availableWidth,a.height=i):(a.width=r,a.height=h?h*i:l&&e.availableHeight)}return n}function n9(t){const e=Zk(t),n=ra(e.filter(u=>u.box.fullSize),!0),r=ra(na(e,"left"),!0),i=ra(na(e,"right")),s=ra(na(e,"top"),!0),o=ra(na(e,"bottom")),a=t0(e,"x"),l=t0(e,"y");return{fullSize:n,leftAndTop:r.concat(s),rightAndBottom:i.concat(l).concat(o).concat(a),chartArea:na(e,"chartArea"),vertical:r.concat(i).concat(l),horizontal:s.concat(o).concat(a)}}function n0(t,e,n,r){return Math.max(t[n],e[n])+Math.max(t[r],e[r])}function $S(t,e){t.top=Math.max(t.top,e.top),t.left=Math.max(t.left,e.left),t.bottom=Math.max(t.bottom,e.bottom),t.right=Math.max(t.right,e.right)}function r9(t,e,n,r){const{pos:i,box:s}=n,o=t.maxPadding;if(!be(i)){n.size&&(t[i]-=n.size);const f=r[n.stack]||{size:0,count:1};f.size=Math.max(f.size,n.horizontal?s.height:s.width),n.size=f.size/f.count,t[i]+=n.size}s.getPadding&&$S(o,s.getPadding());const a=Math.max(0,e.outerWidth-n0(o,t,"left","right")),l=Math.max(0,e.outerHeight-n0(o,t,"top","bottom")),u=a!==t.w,h=l!==t.h;return t.w=a,t.h=l,n.horizontal?{same:u,other:h}:{same:h,other:u}}function i9(t){const e=t.maxPadding;function n(r){const i=Math.max(e[r]-t[r],0);return t[r]+=i,i}t.y+=n("top"),t.x+=n("left"),n("right"),n("bottom")}function s9(t,e){const n=e.maxPadding;function r(i){const s={left:0,top:0,right:0,bottom:0};return i.forEach(o=>{s[o]=Math.max(e[o],n[o])}),s}return r(t?["left","right"]:["top","bottom"])}function fa(t,e,n,r){const i=[];let s,o,a,l,u,h;for(s=0,o=t.length,u=0;s<o;++s){a=t[s],l=a.box,l.update(a.width||e.w,a.height||e.h,s9(a.horizontal,e));const{same:f,other:d}=r9(e,n,a,r);u|=f&&i.length,h=h||d,l.fullSize||i.push(a)}return u&&fa(i,e,n,r)||h}function Pu(t,e,n,r,i){t.top=n,t.left=e,t.right=e+r,t.bottom=n+i,t.width=r,t.height=i}function r0(t,e,n,r){const i=n.padding;let{x:s,y:o}=e;for(const a of t){const l=a.box,u=r[a.stack]||{count:1,placed:0,weight:1},h=a.stackWeight/u.weight||1;if(a.horizontal){const f=e.w*h,d=u.size||l.height;il(u.start)&&(o=u.start),l.fullSize?Pu(l,i.left,o,n.outerWidth-i.right-i.left,d):Pu(l,e.left+u.placed,o,f,d),u.start=o,u.placed+=f,o=l.bottom}else{const f=e.h*h,d=u.size||l.width;il(u.start)&&(s=u.start),l.fullSize?Pu(l,s,i.top,d,n.outerHeight-i.bottom-i.top):Pu(l,s,e.top+u.placed,d,f),u.start=s,u.placed+=f,s=l.right}}e.x=s,e.y=o}var xn={addBox(t,e){t.boxes||(t.boxes=[]),e.fullSize=e.fullSize||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw(n){e.draw(n)}}]},t.boxes.push(e)},removeBox(t,e){const n=t.boxes?t.boxes.indexOf(e):-1;n!==-1&&t.boxes.splice(n,1)},configure(t,e,n){e.fullSize=n.fullSize,e.position=n.position,e.weight=n.weight},update(t,e,n,r){if(!t)return;const i=Ut(t.options.layout.padding),s=Math.max(e-i.width,0),o=Math.max(n-i.height,0),a=n9(t.boxes),l=a.vertical,u=a.horizontal;Ne(t.boxes,y=>{typeof y.beforeLayout=="function"&&y.beforeLayout()});const h=l.reduce((y,E)=>E.box.options&&E.box.options.display===!1?y:y+1,0)||1,f=Object.freeze({outerWidth:e,outerHeight:n,padding:i,availableWidth:s,availableHeight:o,vBoxMaxWidth:s/2/h,hBoxMaxHeight:o/2}),d=Object.assign({},i);$S(d,Ut(r));const g=Object.assign({maxPadding:d,w:s,h:o,x:i.left,y:i.top},i),_=t9(l.concat(u),f);fa(a.fullSize,g,f,_),fa(l,g,f,_),fa(u,g,f,_)&&fa(l,g,f,_),i9(g),r0(a.leftAndTop,g,f,_),g.x+=g.w,g.y+=g.h,r0(a.rightAndBottom,g,f,_),t.chartArea={left:g.left,top:g.top,right:g.left+g.w,bottom:g.top+g.h,height:g.h,width:g.w},Ne(a.chartArea,y=>{const E=y.box;Object.assign(E,t.chartArea),E.update(g.w,g.h,{left:0,top:0,right:0,bottom:0})})}};class US{acquireContext(e,n){}releaseContext(e){return!1}addEventListener(e,n,r){}removeEventListener(e,n,r){}getDevicePixelRatio(){return 1}getMaximumSize(e,n,r,i){return n=Math.max(0,n||e.width),r=r||e.height,{width:n,height:Math.max(0,i?Math.floor(n/i):r)}}isAttached(e){return!0}updateConfig(e){}}class o9 extends US{acquireContext(e){return e&&e.getContext&&e.getContext("2d")||null}updateConfig(e){e.options.animation=!1}}const cc="$chartjs",a9={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},i0=t=>t===null||t==="";function l9(t,e){const n=t.style,r=t.getAttribute("height"),i=t.getAttribute("width");if(t[cc]={initial:{height:r,width:i,style:{display:n.display,height:n.height,width:n.width}}},n.display=n.display||"block",n.boxSizing=n.boxSizing||"border-box",i0(i)){const s=B2(t,"width");s!==void 0&&(t.width=s)}if(i0(r))if(t.style.height==="")t.height=t.width/(e||2);else{const s=B2(t,"height");s!==void 0&&(t.height=s)}return t}const HS=hk?{passive:!0}:!1;function u9(t,e,n){t&&t.addEventListener(e,n,HS)}function c9(t,e,n){t&&t.canvas&&t.canvas.removeEventListener(e,n,HS)}function h9(t,e){const n=a9[t.type]||t.type,{x:r,y:i}=Vi(t,e);return{type:n,chart:e,native:t,x:r!==void 0?r:null,y:i!==void 0?i:null}}function Zc(t,e){for(const n of t)if(n===e||n.contains(e))return!0}function f9(t,e,n){const r=t.canvas,i=new MutationObserver(s=>{let o=!1;for(const a of s)o=o||Zc(a.addedNodes,r),o=o&&!Zc(a.removedNodes,r);o&&n()});return i.observe(document,{childList:!0,subtree:!0}),i}function d9(t,e,n){const r=t.canvas,i=new MutationObserver(s=>{let o=!1;for(const a of s)o=o||Zc(a.removedNodes,r),o=o&&!Zc(a.addedNodes,r);o&&n()});return i.observe(document,{childList:!0,subtree:!0}),i}const ll=new Map;let s0=0;function WS(){const t=window.devicePixelRatio;t!==s0&&(s0=t,ll.forEach((e,n)=>{n.currentDevicePixelRatio!==t&&e()}))}function p9(t,e){ll.size||window.addEventListener("resize",WS),ll.set(t,e)}function g9(t){ll.delete(t),ll.size||window.removeEventListener("resize",WS)}function m9(t,e,n){const r=t.canvas,i=r&&l_(r);if(!i)return;const s=bS((a,l)=>{const u=i.clientWidth;n(a,l),u<i.clientWidth&&n()},window),o=new ResizeObserver(a=>{const l=a[0],u=l.contentRect.width,h=l.contentRect.height;u===0&&h===0||s(u,h)});return o.observe(i),p9(t,s),o}function Pd(t,e,n){n&&n.disconnect(),e==="resize"&&g9(t)}function _9(t,e,n){const r=t.canvas,i=bS(s=>{t.ctx!==null&&n(h9(s,t))},t);return u9(r,e,i),i}class y9 extends US{acquireContext(e,n){const r=e&&e.getContext&&e.getContext("2d");return r&&r.canvas===e?(l9(e,n),r):null}releaseContext(e){const n=e.canvas;if(!n[cc])return!1;const r=n[cc].initial;["height","width"].forEach(s=>{const o=r[s];Ce(o)?n.removeAttribute(s):n.setAttribute(s,o)});const i=r.style||{};return Object.keys(i).forEach(s=>{n.style[s]=i[s]}),n.width=n.width,delete n[cc],!0}addEventListener(e,n,r){this.removeEventListener(e,n);const i=e.$proxies||(e.$proxies={}),o={attach:f9,detach:d9,resize:m9}[n]||_9;i[n]=o(e,n,r)}removeEventListener(e,n){const r=e.$proxies||(e.$proxies={}),i=r[n];if(!i)return;({attach:Pd,detach:Pd,resize:Pd}[n]||c9)(e,n,i),r[n]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(e,n,r,i){return ck(e,n,r,i)}isAttached(e){const n=e&&l_(e);return!!(n&&n.isConnected)}}function v9(t){return!a_()||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas?o9:y9}var qu;let Ar=(qu=class{constructor(){ne(this,"x");ne(this,"y");ne(this,"active",!1);ne(this,"options");ne(this,"$animations")}tooltipPosition(e){const{x:n,y:r}=this.getProps(["x","y"],e);return{x:n,y:r}}hasValue(){return sl(this.x)&&sl(this.y)}getProps(e,n){const r=this.$animations;if(!n||!r)return this;const i={};return e.forEach(s=>{i[s]=r[s]&&r[s].active()?r[s]._to:this[s]}),i}},ne(qu,"defaults",{}),ne(qu,"defaultRoutes"),qu);function w9(t,e){const n=t.options.ticks,r=E9(t),i=Math.min(n.maxTicksLimit||r,r),s=n.major.enabled?T9(e):[],o=s.length,a=s[0],l=s[o-1],u=[];if(o>i)return b9(e,u,s,o/i),u;const h=S9(s,e,i);if(o>0){let f,d;const g=o>1?Math.round((l-a)/(o-1)):null;for(ku(e,u,h,Ce(g)?0:a-g,a),f=0,d=o-1;f<d;f++)ku(e,u,h,s[f],s[f+1]);return ku(e,u,h,l,Ce(g)?e.length:l+g),u}return ku(e,u,h),u}function E9(t){const e=t.options.offset,n=t._tickSize(),r=t._length/n+(e?0:1),i=t._maxLength/n;return Math.floor(Math.min(r,i))}function S9(t,e,n){const r=x9(t),i=e.length/n;if(!r)return Math.max(i,1);const s=cP(r);for(let o=0,a=s.length-1;o<a;o++){const l=s[o];if(l>i)return l}return Math.max(i,1)}function T9(t){const e=[];let n,r;for(n=0,r=t.length;n<r;n++)t[n].major&&e.push(n);return e}function b9(t,e,n,r){let i=0,s=n[0],o;for(r=Math.ceil(r),o=0;o<t.length;o++)o===s&&(e.push(t[o]),i++,s=n[i*r])}function ku(t,e,n,r,i){const s=ve(r,0),o=Math.min(ve(i,t.length),t.length);let a=0,l,u,h;for(n=Math.ceil(n),i&&(l=i-r,n=l/Math.floor(l/n)),h=s;h<0;)a++,h=Math.round(s+a*n);for(u=Math.max(s,0);u<o;u++)u===h&&(e.push(t[u]),a++,h=Math.round(s+a*n))}function x9(t){const e=t.length;let n,r;if(e<2)return!1;for(r=t[0],n=1;n<e;++n)if(t[n]-t[n-1]!==r)return!1;return r}const R9=t=>t==="left"?"right":t==="right"?"left":t,o0=(t,e,n)=>e==="top"||e==="left"?t[e]+n:t[e]-n,a0=(t,e)=>Math.min(e||t,t);function l0(t,e){const n=[],r=t.length/e,i=t.length;let s=0;for(;s<i;s+=r)n.push(t[Math.floor(s)]);return n}function I9(t,e,n){const r=t.ticks.length,i=Math.min(e,r-1),s=t._startPixel,o=t._endPixel,a=1e-6;let l=t.getPixelForTick(i),u;if(!(n&&(r===1?u=Math.max(l-s,o-l):e===0?u=(t.getPixelForTick(1)-l)/2:u=(l-t.getPixelForTick(i-1))/2,l+=i<e?u:-u,l<s-a||l>o+a)))return l}function A9(t,e){Ne(t,n=>{const r=n.gc,i=r.length/2;let s;if(i>e){for(s=0;s<i;++s)delete n.data[r[s]];r.splice(0,i)}})}function ia(t){return t.drawTicks?t.tickLength:0}function u0(t,e){if(!t.display)return 0;const n=yt(t.font,e),r=Ut(t.padding);return(Ye(t.text)?t.text.length:1)*n.lineHeight+r.height}function C9(t,e){return Ti(t,{scale:e,type:"scale"})}function P9(t,e,n){return Ti(t,{tick:n,index:e,type:"tick"})}function k9(t,e,n){let r=t_(t);return(n&&e!=="right"||!n&&e==="right")&&(r=R9(r)),r}function O9(t,e,n,r){const{top:i,left:s,bottom:o,right:a,chart:l}=t,{chartArea:u,scales:h}=l;let f=0,d,g,_;const y=o-i,E=a-s;if(t.isHorizontal()){if(g=Vt(r,s,a),be(n)){const w=Object.keys(n)[0],m=n[w];_=h[w].getPixelForValue(m)+y-e}else n==="center"?_=(u.bottom+u.top)/2+y-e:_=o0(t,n,e);d=a-s}else{if(be(n)){const w=Object.keys(n)[0],m=n[w];g=h[w].getPixelForValue(m)-E+e}else n==="center"?g=(u.left+u.right)/2-E+e:g=o0(t,n,e);_=Vt(r,o,i),f=n==="left"?-ht:ht}return{titleX:g,titleY:_,maxWidth:d,rotation:f}}class hs extends Ar{constructor(e){super(),this.id=e.id,this.type=e.type,this.options=void 0,this.ctx=e.ctx,this.chart=e.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(e){this.options=e.setContext(this.getContext()),this.axis=e.axis,this._userMin=this.parse(e.min),this._userMax=this.parse(e.max),this._suggestedMin=this.parse(e.suggestedMin),this._suggestedMax=this.parse(e.suggestedMax)}parse(e,n){return e}getUserBounds(){let{_userMin:e,_userMax:n,_suggestedMin:r,_suggestedMax:i}=this;return e=hn(e,Number.POSITIVE_INFINITY),n=hn(n,Number.NEGATIVE_INFINITY),r=hn(r,Number.POSITIVE_INFINITY),i=hn(i,Number.NEGATIVE_INFINITY),{min:hn(e,r),max:hn(n,i),minDefined:at(e),maxDefined:at(n)}}getMinMax(e){let{min:n,max:r,minDefined:i,maxDefined:s}=this.getUserBounds(),o;if(i&&s)return{min:n,max:r};const a=this.getMatchingVisibleMetas();for(let l=0,u=a.length;l<u;++l)o=a[l].controller.getMinMax(this,e),i||(n=Math.min(n,o.min)),s||(r=Math.max(r,o.max));return n=s&&n>r?r:n,r=i&&n>r?n:r,{min:hn(n,hn(r,n)),max:hn(r,hn(n,r))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const e=this.chart.data;return this.options.labels||(this.isHorizontal()?e.xLabels:e.yLabels)||e.labels||[]}getLabelItems(e=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(e))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){je(this.options.beforeUpdate,[this])}update(e,n,r){const{beginAtZero:i,grace:s,ticks:o}=this.options,a=o.sampleSize;this.beforeUpdate(),this.maxWidth=e,this.maxHeight=n,this._margins=r=Object.assign({left:0,right:0,top:0,bottom:0},r),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+r.left+r.right:this.height+r.top+r.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=BP(this,s,i),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const l=a<this.ticks.length;this._convertTicksToLabels(l?l0(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||o.source==="auto")&&(this.ticks=w9(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),l&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let e=this.options.reverse,n,r;this.isHorizontal()?(n=this.left,r=this.right):(n=this.top,r=this.bottom,e=!e),this._startPixel=n,this._endPixel=r,this._reversePixels=e,this._length=r-n,this._alignToPixels=this.options.alignToPixels}afterUpdate(){je(this.options.afterUpdate,[this])}beforeSetDimensions(){je(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){je(this.options.afterSetDimensions,[this])}_callHooks(e){this.chart.notifyPlugins(e,this.getContext()),je(this.options[e],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){je(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(e){const n=this.options.ticks;let r,i,s;for(r=0,i=e.length;r<i;r++)s=e[r],s.label=je(n.callback,[s.value,r,e],this)}afterTickToLabelConversion(){je(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){je(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const e=this.options,n=e.ticks,r=a0(this.ticks.length,e.ticks.maxTicksLimit),i=n.minRotation||0,s=n.maxRotation;let o=i,a,l,u;if(!this._isVisible()||!n.display||i>=s||r<=1||!this.isHorizontal()){this.labelRotation=i;return}const h=this._getLabelSizes(),f=h.widest.width,d=h.highest.height,g=Bt(this.chart.width-f,0,this.maxWidth);a=e.offset?this.maxWidth/r:g/(r-1),f+6>a&&(a=g/(r-(e.offset?.5:1)),l=this.maxHeight-ia(e.grid)-n.padding-u0(e.title,this.chart.options.font),u=Math.sqrt(f*f+d*d),o=Zm(Math.min(Math.asin(Bt((h.highest.height+6)/a,-1,1)),Math.asin(Bt(l/u,-1,1))-Math.asin(Bt(d/u,-1,1)))),o=Math.max(i,Math.min(s,o))),this.labelRotation=o}afterCalculateLabelRotation(){je(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){je(this.options.beforeFit,[this])}fit(){const e={width:0,height:0},{chart:n,options:{ticks:r,title:i,grid:s}}=this,o=this._isVisible(),a=this.isHorizontal();if(o){const l=u0(i,n.options.font);if(a?(e.width=this.maxWidth,e.height=ia(s)+l):(e.height=this.maxHeight,e.width=ia(s)+l),r.display&&this.ticks.length){const{first:u,last:h,widest:f,highest:d}=this._getLabelSizes(),g=r.padding*2,_=Qn(this.labelRotation),y=Math.cos(_),E=Math.sin(_);if(a){const w=r.mirror?0:E*f.width+y*d.height;e.height=Math.min(this.maxHeight,e.height+w+g)}else{const w=r.mirror?0:y*f.width+E*d.height;e.width=Math.min(this.maxWidth,e.width+w+g)}this._calculatePadding(u,h,E,y)}}this._handleMargins(),a?(this.width=this._length=n.width-this._margins.left-this._margins.right,this.height=e.height):(this.width=e.width,this.height=this._length=n.height-this._margins.top-this._margins.bottom)}_calculatePadding(e,n,r,i){const{ticks:{align:s,padding:o},position:a}=this.options,l=this.labelRotation!==0,u=a!=="top"&&this.axis==="x";if(this.isHorizontal()){const h=this.getPixelForTick(0)-this.left,f=this.right-this.getPixelForTick(this.ticks.length-1);let d=0,g=0;l?u?(d=i*e.width,g=r*n.height):(d=r*e.height,g=i*n.width):s==="start"?g=n.width:s==="end"?d=e.width:s!=="inner"&&(d=e.width/2,g=n.width/2),this.paddingLeft=Math.max((d-h+o)*this.width/(this.width-h),0),this.paddingRight=Math.max((g-f+o)*this.width/(this.width-f),0)}else{let h=n.height/2,f=e.height/2;s==="start"?(h=0,f=e.height):s==="end"&&(h=n.height,f=0),this.paddingTop=h+o,this.paddingBottom=f+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){je(this.options.afterFit,[this])}isHorizontal(){const{axis:e,position:n}=this.options;return n==="top"||n==="bottom"||e==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(e){this.beforeTickToLabelConversion(),this.generateTickLabels(e);let n,r;for(n=0,r=e.length;n<r;n++)Ce(e[n].label)&&(e.splice(n,1),r--,n--);this.afterTickToLabelConversion()}_getLabelSizes(){let e=this._labelSizes;if(!e){const n=this.options.ticks.sampleSize;let r=this.ticks;n<r.length&&(r=l0(r,n)),this._labelSizes=e=this._computeLabelSizes(r,r.length,this.options.ticks.maxTicksLimit)}return e}_computeLabelSizes(e,n,r){const{ctx:i,_longestTextCache:s}=this,o=[],a=[],l=Math.floor(n/a0(n,r));let u=0,h=0,f,d,g,_,y,E,w,m,S,C,O;for(f=0;f<n;f+=l){if(_=e[f].label,y=this._resolveTickFontOptions(f),i.font=E=y.string,w=s[E]=s[E]||{data:{},gc:[]},m=y.lineHeight,S=C=0,!Ce(_)&&!Ye(_))S=Xc(i,w.data,w.gc,S,_),C=m;else if(Ye(_))for(d=0,g=_.length;d<g;++d)O=_[d],!Ce(O)&&!Ye(O)&&(S=Xc(i,w.data,w.gc,S,O),C+=m);o.push(S),a.push(C),u=Math.max(S,u),h=Math.max(C,h)}A9(s,n);const M=o.indexOf(u),R=a.indexOf(h),T=b=>({width:o[b]||0,height:a[b]||0});return{first:T(0),last:T(n-1),widest:T(M),highest:T(R),widths:o,heights:a}}getLabelForValue(e){return e}getPixelForValue(e,n){return NaN}getValueForPixel(e){}getPixelForTick(e){const n=this.ticks;return e<0||e>n.length-1?null:this.getPixelForValue(n[e].value)}getPixelForDecimal(e){this._reversePixels&&(e=1-e);const n=this._startPixel+e*this._length;return pP(this._alignToPixels?Oi(this.chart,n,0):n)}getDecimalForPixel(e){const n=(e-this._startPixel)/this._length;return this._reversePixels?1-n:n}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:e,max:n}=this;return e<0&&n<0?n:e>0&&n>0?e:0}getContext(e){const n=this.ticks||[];if(e>=0&&e<n.length){const r=n[e];return r.$context||(r.$context=P9(this.getContext(),e,r))}return this.$context||(this.$context=C9(this.chart.getContext(),this))}_tickSize(){const e=this.options.ticks,n=Qn(this.labelRotation),r=Math.abs(Math.cos(n)),i=Math.abs(Math.sin(n)),s=this._getLabelSizes(),o=e.autoSkipPadding||0,a=s?s.widest.width+o:0,l=s?s.highest.height+o:0;return this.isHorizontal()?l*r>a*i?a/r:l/i:l*i<a*r?l/r:a/i}_isVisible(){const e=this.options.display;return e!=="auto"?!!e:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(e){const n=this.axis,r=this.chart,i=this.options,{grid:s,position:o,border:a}=i,l=s.offset,u=this.isHorizontal(),f=this.ticks.length+(l?1:0),d=ia(s),g=[],_=a.setContext(this.getContext()),y=_.display?_.width:0,E=y/2,w=function(he){return Oi(r,he,y)};let m,S,C,O,M,R,T,b,x,P,k,A;if(o==="top")m=w(this.bottom),R=this.bottom-d,b=m-E,P=w(e.top)+E,A=e.bottom;else if(o==="bottom")m=w(this.top),P=e.top,A=w(e.bottom)-E,R=m+E,b=this.top+d;else if(o==="left")m=w(this.right),M=this.right-d,T=m-E,x=w(e.left)+E,k=e.right;else if(o==="right")m=w(this.left),x=e.left,k=w(e.right)-E,M=m+E,T=this.left+d;else if(n==="x"){if(o==="center")m=w((e.top+e.bottom)/2+.5);else if(be(o)){const he=Object.keys(o)[0],pe=o[he];m=w(this.chart.scales[he].getPixelForValue(pe))}P=e.top,A=e.bottom,R=m+E,b=R+d}else if(n==="y"){if(o==="center")m=w((e.left+e.right)/2);else if(be(o)){const he=Object.keys(o)[0],pe=o[he];m=w(this.chart.scales[he].getPixelForValue(pe))}M=m-E,T=M-d,x=e.left,k=e.right}const Z=ve(i.ticks.maxTicksLimit,f),le=Math.max(1,Math.ceil(f/Z));for(S=0;S<f;S+=le){const he=this.getContext(S),pe=s.setContext(he),G=a.setContext(he),J=pe.lineWidth,ae=pe.color,ye=G.dash||[],ue=G.dashOffset,D=pe.tickWidth,z=pe.tickColor,L=pe.tickBorderDash||[],V=pe.tickBorderDashOffset;C=I9(this,S,l),C!==void 0&&(O=Oi(r,C,J),u?M=T=x=k=O:R=b=P=A=O,g.push({tx1:M,ty1:R,tx2:T,ty2:b,x1:x,y1:P,x2:k,y2:A,width:J,color:ae,borderDash:ye,borderDashOffset:ue,tickWidth:D,tickColor:z,tickBorderDash:L,tickBorderDashOffset:V}))}return this._ticksLength=f,this._borderValue=m,g}_computeLabelItems(e){const n=this.axis,r=this.options,{position:i,ticks:s}=r,o=this.isHorizontal(),a=this.ticks,{align:l,crossAlign:u,padding:h,mirror:f}=s,d=ia(r.grid),g=d+h,_=f?-h:g,y=-Qn(this.labelRotation),E=[];let w,m,S,C,O,M,R,T,b,x,P,k,A="middle";if(i==="top")M=this.bottom-_,R=this._getXAxisLabelAlignment();else if(i==="bottom")M=this.top+_,R=this._getXAxisLabelAlignment();else if(i==="left"){const le=this._getYAxisLabelAlignment(d);R=le.textAlign,O=le.x}else if(i==="right"){const le=this._getYAxisLabelAlignment(d);R=le.textAlign,O=le.x}else if(n==="x"){if(i==="center")M=(e.top+e.bottom)/2+g;else if(be(i)){const le=Object.keys(i)[0],he=i[le];M=this.chart.scales[le].getPixelForValue(he)+g}R=this._getXAxisLabelAlignment()}else if(n==="y"){if(i==="center")O=(e.left+e.right)/2-g;else if(be(i)){const le=Object.keys(i)[0],he=i[le];O=this.chart.scales[le].getPixelForValue(he)}R=this._getYAxisLabelAlignment(d).textAlign}n==="y"&&(l==="start"?A="top":l==="end"&&(A="bottom"));const Z=this._getLabelSizes();for(w=0,m=a.length;w<m;++w){S=a[w],C=S.label;const le=s.setContext(this.getContext(w));T=this.getPixelForTick(w)+s.labelOffset,b=this._resolveTickFontOptions(w),x=b.lineHeight,P=Ye(C)?C.length:1;const he=P/2,pe=le.color,G=le.textStrokeColor,J=le.textStrokeWidth;let ae=R;o?(O=T,R==="inner"&&(w===m-1?ae=this.options.reverse?"left":"right":w===0?ae=this.options.reverse?"right":"left":ae="center"),i==="top"?u==="near"||y!==0?k=-P*x+x/2:u==="center"?k=-Z.highest.height/2-he*x+x:k=-Z.highest.height+x/2:u==="near"||y!==0?k=x/2:u==="center"?k=Z.highest.height/2-he*x:k=Z.highest.height-P*x,f&&(k*=-1),y!==0&&!le.showLabelBackdrop&&(O+=x/2*Math.sin(y))):(M=T,k=(1-P)*x/2);let ye;if(le.showLabelBackdrop){const ue=Ut(le.backdropPadding),D=Z.heights[w],z=Z.widths[w];let L=k-ue.top,V=0-ue.left;switch(A){case"middle":L-=D/2;break;case"bottom":L-=D;break}switch(R){case"center":V-=z/2;break;case"right":V-=z;break;case"inner":w===m-1?V-=z:w>0&&(V-=z/2);break}ye={left:V,top:L,width:z+ue.width,height:D+ue.height,color:le.backdropColor}}E.push({label:C,font:b,textOffset:k,options:{rotation:y,color:pe,strokeColor:G,strokeWidth:J,textAlign:ae,textBaseline:A,translation:[O,M],backdrop:ye}})}return E}_getXAxisLabelAlignment(){const{position:e,ticks:n}=this.options;if(-Qn(this.labelRotation))return e==="top"?"left":"right";let i="center";return n.align==="start"?i="left":n.align==="end"?i="right":n.align==="inner"&&(i="inner"),i}_getYAxisLabelAlignment(e){const{position:n,ticks:{crossAlign:r,mirror:i,padding:s}}=this.options,o=this._getLabelSizes(),a=e+s,l=o.widest.width;let u,h;return n==="left"?i?(h=this.right+s,r==="near"?u="left":r==="center"?(u="center",h+=l/2):(u="right",h+=l)):(h=this.right-a,r==="near"?u="right":r==="center"?(u="center",h-=l/2):(u="left",h=this.left)):n==="right"?i?(h=this.left+s,r==="near"?u="right":r==="center"?(u="center",h-=l/2):(u="left",h-=l)):(h=this.left+a,r==="near"?u="left":r==="center"?(u="center",h+=l/2):(u="right",h=this.right)):u="right",{textAlign:u,x:h}}_computeLabelArea(){if(this.options.ticks.mirror)return;const e=this.chart,n=this.options.position;if(n==="left"||n==="right")return{top:0,left:this.left,bottom:e.height,right:this.right};if(n==="top"||n==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:e.width}}drawBackground(){const{ctx:e,options:{backgroundColor:n},left:r,top:i,width:s,height:o}=this;n&&(e.save(),e.fillStyle=n,e.fillRect(r,i,s,o),e.restore())}getLineWidthForValue(e){const n=this.options.grid;if(!this._isVisible()||!n.display)return 0;const i=this.ticks.findIndex(s=>s.value===e);return i>=0?n.setContext(this.getContext(i)).lineWidth:0}drawGrid(e){const n=this.options.grid,r=this.ctx,i=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(e));let s,o;const a=(l,u,h)=>{!h.width||!h.color||(r.save(),r.lineWidth=h.width,r.strokeStyle=h.color,r.setLineDash(h.borderDash||[]),r.lineDashOffset=h.borderDashOffset,r.beginPath(),r.moveTo(l.x,l.y),r.lineTo(u.x,u.y),r.stroke(),r.restore())};if(n.display)for(s=0,o=i.length;s<o;++s){const l=i[s];n.drawOnChartArea&&a({x:l.x1,y:l.y1},{x:l.x2,y:l.y2},l),n.drawTicks&&a({x:l.tx1,y:l.ty1},{x:l.tx2,y:l.ty2},{color:l.tickColor,width:l.tickWidth,borderDash:l.tickBorderDash,borderDashOffset:l.tickBorderDashOffset})}}drawBorder(){const{chart:e,ctx:n,options:{border:r,grid:i}}=this,s=r.setContext(this.getContext()),o=r.display?s.width:0;if(!o)return;const a=i.setContext(this.getContext(0)).lineWidth,l=this._borderValue;let u,h,f,d;this.isHorizontal()?(u=Oi(e,this.left,o)-o/2,h=Oi(e,this.right,a)+a/2,f=d=l):(f=Oi(e,this.top,o)-o/2,d=Oi(e,this.bottom,a)+a/2,u=h=l),n.save(),n.lineWidth=s.width,n.strokeStyle=s.color,n.beginPath(),n.moveTo(u,f),n.lineTo(h,d),n.stroke(),n.restore()}drawLabels(e){if(!this.options.ticks.display)return;const r=this.ctx,i=this._computeLabelArea();i&&ef(r,i);const s=this.getLabelItems(e);for(const o of s){const a=o.options,l=o.font,u=o.label,h=o.textOffset;is(r,u,0,h,l,a)}i&&tf(r)}drawTitle(){const{ctx:e,options:{position:n,title:r,reverse:i}}=this;if(!r.display)return;const s=yt(r.font),o=Ut(r.padding),a=r.align;let l=s.lineHeight/2;n==="bottom"||n==="center"||be(n)?(l+=o.bottom,Ye(r.text)&&(l+=s.lineHeight*(r.text.length-1))):l+=o.top;const{titleX:u,titleY:h,maxWidth:f,rotation:d}=O9(this,l,n,a);is(e,r.text,0,0,s,{color:r.color,maxWidth:f,rotation:d,textAlign:k9(a,n,i),textBaseline:"middle",translation:[u,h]})}draw(e){this._isVisible()&&(this.drawBackground(),this.drawGrid(e),this.drawBorder(),this.drawTitle(),this.drawLabels(e))}_layers(){const e=this.options,n=e.ticks&&e.ticks.z||0,r=ve(e.grid&&e.grid.z,-1),i=ve(e.border&&e.border.z,0);return!this._isVisible()||this.draw!==hs.prototype.draw?[{z:n,draw:s=>{this.draw(s)}}]:[{z:r,draw:s=>{this.drawBackground(),this.drawGrid(s),this.drawTitle()}},{z:i,draw:()=>{this.drawBorder()}},{z:n,draw:s=>{this.drawLabels(s)}}]}getMatchingVisibleMetas(e){const n=this.chart.getSortedVisibleDatasetMetas(),r=this.axis+"AxisID",i=[];let s,o;for(s=0,o=n.length;s<o;++s){const a=n[s];a[r]===this.id&&(!e||a.type===e)&&i.push(a)}return i}_resolveTickFontOptions(e){const n=this.options.ticks.setContext(this.getContext(e));return yt(n.font)}_maxDigits(){const e=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/e}}class Ou{constructor(e,n,r){this.type=e,this.scope=n,this.override=r,this.items=Object.create(null)}isForType(e){return Object.prototype.isPrototypeOf.call(this.type.prototype,e.prototype)}register(e){const n=Object.getPrototypeOf(e);let r;D9(n)&&(r=this.register(n));const i=this.items,s=e.id,o=this.scope+"."+s;if(!s)throw new Error("class does not have id: "+e);return s in i||(i[s]=e,L9(e,o,r),this.override&&lt.override(e.id,e.overrides)),o}get(e){return this.items[e]}unregister(e){const n=this.items,r=e.id,i=this.scope;r in n&&delete n[r],i&&r in lt[i]&&(delete lt[i][r],this.override&&delete rs[r])}}function L9(t,e,n){const r=rl(Object.create(null),[n?lt.get(n):{},lt.get(e),t.defaults]);lt.set(e,r),t.defaultRoutes&&M9(e,t.defaultRoutes),t.descriptors&&lt.describe(e,t.descriptors)}function M9(t,e){Object.keys(e).forEach(n=>{const r=n.split("."),i=r.pop(),s=[t].concat(r).join("."),o=e[n].split("."),a=o.pop(),l=o.join(".");lt.route(s,i,l,a)})}function D9(t){return"id"in t&&"defaults"in t}class N9{constructor(){this.controllers=new Ou(ri,"datasets",!0),this.elements=new Ou(Ar,"elements"),this.plugins=new Ou(Object,"plugins"),this.scales=new Ou(hs,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...e){this._each("register",e)}remove(...e){this._each("unregister",e)}addControllers(...e){this._each("register",e,this.controllers)}addElements(...e){this._each("register",e,this.elements)}addPlugins(...e){this._each("register",e,this.plugins)}addScales(...e){this._each("register",e,this.scales)}getController(e){return this._get(e,this.controllers,"controller")}getElement(e){return this._get(e,this.elements,"element")}getPlugin(e){return this._get(e,this.plugins,"plugin")}getScale(e){return this._get(e,this.scales,"scale")}removeControllers(...e){this._each("unregister",e,this.controllers)}removeElements(...e){this._each("unregister",e,this.elements)}removePlugins(...e){this._each("unregister",e,this.plugins)}removeScales(...e){this._each("unregister",e,this.scales)}_each(e,n,r){[...n].forEach(i=>{const s=r||this._getRegistryForType(i);r||s.isForType(i)||s===this.plugins&&i.id?this._exec(e,s,i):Ne(i,o=>{const a=r||this._getRegistryForType(o);this._exec(e,a,o)})})}_exec(e,n,r){const i=Jm(e);je(r["before"+i],[],r),n[e](r),je(r["after"+i],[],r)}_getRegistryForType(e){for(let n=0;n<this._typedRegistries.length;n++){const r=this._typedRegistries[n];if(r.isForType(e))return r}return this.plugins}_get(e,n,r){const i=n.get(e);if(i===void 0)throw new Error('"'+e+'" is not a registered '+r+".");return i}}var qn=new N9;class V9{constructor(){this._init=[]}notify(e,n,r,i){n==="beforeInit"&&(this._init=this._createDescriptors(e,!0),this._notify(this._init,e,"install"));const s=i?this._descriptors(e).filter(i):this._descriptors(e),o=this._notify(s,e,n,r);return n==="afterDestroy"&&(this._notify(s,e,"stop"),this._notify(this._init,e,"uninstall")),o}_notify(e,n,r,i){i=i||{};for(const s of e){const o=s.plugin,a=o[r],l=[n,i,s.options];if(je(a,l,o)===!1&&i.cancelable)return!1}return!0}invalidate(){Ce(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(e){if(this._cache)return this._cache;const n=this._cache=this._createDescriptors(e);return this._notifyStateChanges(e),n}_createDescriptors(e,n){const r=e&&e.config,i=ve(r.options&&r.options.plugins,{}),s=F9(r);return i===!1&&!n?[]:j9(e,s,i,n)}_notifyStateChanges(e){const n=this._oldCache||[],r=this._cache,i=(s,o)=>s.filter(a=>!o.some(l=>a.plugin.id===l.plugin.id));this._notify(i(n,r),e,"stop"),this._notify(i(r,n),e,"start")}}function F9(t){const e={},n=[],r=Object.keys(qn.plugins.items);for(let s=0;s<r.length;s++)n.push(qn.getPlugin(r[s]));const i=t.plugins||[];for(let s=0;s<i.length;s++){const o=i[s];n.indexOf(o)===-1&&(n.push(o),e[o.id]=!0)}return{plugins:n,localIds:e}}function z9(t,e){return!e&&t===!1?null:t===!0?{}:t}function j9(t,{plugins:e,localIds:n},r,i){const s=[],o=t.getContext();for(const a of e){const l=a.id,u=z9(r[l],i);u!==null&&s.push({plugin:a,options:B9(t.config,{plugin:a,local:n[l]},u,o)})}return s}function B9(t,{plugin:e,local:n},r,i){const s=t.pluginScopeKeys(e),o=t.getOptionScopes(r,s);return n&&e.defaults&&o.push(e.defaults),t.createResolver(o,i,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function og(t,e){const n=lt.datasets[t]||{};return((e.datasets||{})[t]||{}).indexAxis||e.indexAxis||n.indexAxis||"x"}function $9(t,e){let n=t;return t==="_index_"?n=e:t==="_value_"&&(n=e==="x"?"y":"x"),n}function U9(t,e){return t===e?"_index_":"_value_"}function c0(t){if(t==="x"||t==="y"||t==="r")return t}function H9(t){if(t==="top"||t==="bottom")return"x";if(t==="left"||t==="right")return"y"}function ag(t,...e){if(c0(t))return t;for(const n of e){const r=n.axis||H9(n.position)||t.length>1&&c0(t[0].toLowerCase());if(r)return r}throw new Error(`Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`)}function h0(t,e,n){if(n[e+"AxisID"]===t)return{axis:e}}function W9(t,e){if(e.data&&e.data.datasets){const n=e.data.datasets.filter(r=>r.xAxisID===t||r.yAxisID===t);if(n.length)return h0(t,"x",n[0])||h0(t,"y",n[0])}return{}}function q9(t,e){const n=rs[t.type]||{scales:{}},r=e.scales||{},i=og(t.type,e),s=Object.create(null);return Object.keys(r).forEach(o=>{const a=r[o];if(!be(a))return console.error(`Invalid scale configuration for scale: ${o}`);if(a._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${o}`);const l=ag(o,a,W9(o,t),lt.scales[a.type]),u=U9(l,i),h=n.scales||{};s[o]=Ca(Object.create(null),[{axis:l},a,h[l],h[u]])}),t.data.datasets.forEach(o=>{const a=o.type||t.type,l=o.indexAxis||og(a,e),h=(rs[a]||{}).scales||{};Object.keys(h).forEach(f=>{const d=$9(f,l),g=o[d+"AxisID"]||d;s[g]=s[g]||Object.create(null),Ca(s[g],[{axis:d},r[g],h[f]])})}),Object.keys(s).forEach(o=>{const a=s[o];Ca(a,[lt.scales[a.type],lt.scale])}),s}function qS(t){const e=t.options||(t.options={});e.plugins=ve(e.plugins,{}),e.scales=q9(t,e)}function GS(t){return t=t||{},t.datasets=t.datasets||[],t.labels=t.labels||[],t}function G9(t){return t=t||{},t.data=GS(t.data),qS(t),t}const f0=new Map,KS=new Set;function Lu(t,e){let n=f0.get(t);return n||(n=e(),f0.set(t,n),KS.add(n)),n}const sa=(t,e,n)=>{const r=hi(e,n);r!==void 0&&t.add(r)};class K9{constructor(e){this._config=G9(e),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(e){this._config.type=e}get data(){return this._config.data}set data(e){this._config.data=GS(e)}get options(){return this._config.options}set options(e){this._config.options=e}get plugins(){return this._config.plugins}update(){const e=this._config;this.clearCache(),qS(e)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(e){return Lu(e,()=>[[`datasets.${e}`,""]])}datasetAnimationScopeKeys(e,n){return Lu(`${e}.transition.${n}`,()=>[[`datasets.${e}.transitions.${n}`,`transitions.${n}`],[`datasets.${e}`,""]])}datasetElementScopeKeys(e,n){return Lu(`${e}-${n}`,()=>[[`datasets.${e}.elements.${n}`,`datasets.${e}`,`elements.${n}`,""]])}pluginScopeKeys(e){const n=e.id,r=this.type;return Lu(`${r}-plugin-${n}`,()=>[[`plugins.${n}`,...e.additionalOptionScopes||[]]])}_cachedScopes(e,n){const r=this._scopeCache;let i=r.get(e);return(!i||n)&&(i=new Map,r.set(e,i)),i}getOptionScopes(e,n,r){const{options:i,type:s}=this,o=this._cachedScopes(e,r),a=o.get(n);if(a)return a;const l=new Set;n.forEach(h=>{e&&(l.add(e),h.forEach(f=>sa(l,e,f))),h.forEach(f=>sa(l,i,f)),h.forEach(f=>sa(l,rs[s]||{},f)),h.forEach(f=>sa(l,lt,f)),h.forEach(f=>sa(l,rg,f))});const u=Array.from(l);return u.length===0&&u.push(Object.create(null)),KS.has(n)&&o.set(n,u),u}chartOptionScopes(){const{options:e,type:n}=this;return[e,rs[n]||{},lt.datasets[n]||{},{type:n},lt,rg]}resolveNamedOptions(e,n,r,i=[""]){const s={$shared:!0},{resolver:o,subPrefixes:a}=d0(this._resolverCache,e,i);let l=o;if(Y9(o,n)){s.$shared=!1,r=fi(r)?r():r;const u=this.createResolver(e,r,a);l=oo(o,r,u)}for(const u of n)s[u]=l[u];return s}createResolver(e,n,r=[""],i){const{resolver:s}=d0(this._resolverCache,e,r);return be(n)?oo(s,n,void 0,i):s}}function d0(t,e,n){let r=t.get(e);r||(r=new Map,t.set(e,r));const i=n.join();let s=r.get(i);return s||(s={resolver:i_(e,n),subPrefixes:n.filter(a=>!a.toLowerCase().includes("hover"))},r.set(i,s)),s}const Q9=t=>be(t)&&Object.getOwnPropertyNames(t).some(e=>fi(t[e]));function Y9(t,e){const{isScriptable:n,isIndexable:r}=AS(t);for(const i of e){const s=n(i),o=r(i),a=(o||s)&&t[i];if(s&&(fi(a)||Q9(a))||o&&Ye(a))return!0}return!1}var X9="4.4.8";const J9=["top","bottom","left","right","chartArea"];function p0(t,e){return t==="top"||t==="bottom"||J9.indexOf(t)===-1&&e==="x"}function g0(t,e){return function(n,r){return n[t]===r[t]?n[e]-r[e]:n[t]-r[t]}}function m0(t){const e=t.chart,n=e.options.animation;e.notifyPlugins("afterRender"),je(n&&n.onComplete,[t],e)}function Z9(t){const e=t.chart,n=e.options.animation;je(n&&n.onProgress,[t],e)}function QS(t){return a_()&&typeof t=="string"?t=document.getElementById(t):t&&t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas),t}const hc={},_0=t=>{const e=QS(t);return Object.values(hc).filter(n=>n.canvas===e).pop()};function eO(t,e,n){const r=Object.keys(t);for(const i of r){const s=+i;if(s>=e){const o=t[i];delete t[i],(n>0||s>e)&&(t[s+n]=o)}}}function tO(t,e,n,r){return!n||t.type==="mouseout"?null:r?e:t}function Mu(t,e,n){return t.options.clip?t[n]:e[n]}function nO(t,e){const{xScale:n,yScale:r}=t;return n&&r?{left:Mu(n,e,"left"),right:Mu(n,e,"right"),top:Mu(r,e,"top"),bottom:Mu(r,e,"bottom")}:e}var Nr;let Cl=(Nr=class{static register(...e){qn.add(...e),y0()}static unregister(...e){qn.remove(...e),y0()}constructor(e,n){const r=this.config=new K9(n),i=QS(e),s=_0(i);if(s)throw new Error("Canvas is already in use. Chart with ID '"+s.id+"' must be destroyed before the canvas with ID '"+s.canvas.id+"' can be reused.");const o=r.createResolver(r.chartOptionScopes(),this.getContext());this.platform=new(r.platform||v9(i)),this.platform.updateConfig(r);const a=this.platform.acquireContext(i,o.aspectRatio),l=a&&a.canvas,u=l&&l.height,h=l&&l.width;if(this.id=tP(),this.ctx=a,this.canvas=l,this.width=h,this.height=u,this._options=o,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new V9,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=yP(f=>this.update(f),o.resizeDelay||0),this._dataChanges=[],hc[this.id]=this,!a||!l){console.error("Failed to create chart: can't acquire context from the given item");return}or.listen(this,"complete",m0),or.listen(this,"progress",Z9),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:e,maintainAspectRatio:n},width:r,height:i,_aspectRatio:s}=this;return Ce(e)?n&&s?s:i?r/i:null:e}get data(){return this.config.data}set data(e){this.config.data=e}get options(){return this._options}set options(e){this.config.options=e}get registry(){return qn}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():j2(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return V2(this.canvas,this.ctx),this}stop(){return or.stop(this),this}resize(e,n){or.running(this)?this._resizeBeforeDraw={width:e,height:n}:this._resize(e,n)}_resize(e,n){const r=this.options,i=this.canvas,s=r.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(i,e,n,s),a=r.devicePixelRatio||this.platform.getDevicePixelRatio(),l=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,j2(this,a,!0)&&(this.notifyPlugins("resize",{size:o}),je(r.onResize,[this,o],this),this.attached&&this._doResize(l)&&this.render())}ensureScalesHaveIDs(){const n=this.options.scales||{};Ne(n,(r,i)=>{r.id=i})}buildOrUpdateScales(){const e=this.options,n=e.scales,r=this.scales,i=Object.keys(r).reduce((o,a)=>(o[a]=!1,o),{});let s=[];n&&(s=s.concat(Object.keys(n).map(o=>{const a=n[o],l=ag(o,a),u=l==="r",h=l==="x";return{options:a,dposition:u?"chartArea":h?"bottom":"left",dtype:u?"radialLinear":h?"category":"linear"}}))),Ne(s,o=>{const a=o.options,l=a.id,u=ag(l,a),h=ve(a.type,o.dtype);(a.position===void 0||p0(a.position,u)!==p0(o.dposition))&&(a.position=o.dposition),i[l]=!0;let f=null;if(l in r&&r[l].type===h)f=r[l];else{const d=qn.getScale(h);f=new d({id:l,type:h,ctx:this.ctx,chart:this}),r[f.id]=f}f.init(a,e)}),Ne(i,(o,a)=>{o||delete r[a]}),Ne(r,o=>{xn.configure(this,o,o.options),xn.addBox(this,o)})}_updateMetasets(){const e=this._metasets,n=this.data.datasets.length,r=e.length;if(e.sort((i,s)=>i.index-s.index),r>n){for(let i=n;i<r;++i)this._destroyDatasetMeta(i);e.splice(n,r-n)}this._sortedMetasets=e.slice(0).sort(g0("order","index"))}_removeUnreferencedMetasets(){const{_metasets:e,data:{datasets:n}}=this;e.length>n.length&&delete this._stacks,e.forEach((r,i)=>{n.filter(s=>s===r._dataset).length===0&&this._destroyDatasetMeta(i)})}buildOrUpdateControllers(){const e=[],n=this.data.datasets;let r,i;for(this._removeUnreferencedMetasets(),r=0,i=n.length;r<i;r++){const s=n[r];let o=this.getDatasetMeta(r);const a=s.type||this.config.type;if(o.type&&o.type!==a&&(this._destroyDatasetMeta(r),o=this.getDatasetMeta(r)),o.type=a,o.indexAxis=s.indexAxis||og(a,this.options),o.order=s.order||0,o.index=r,o.label=""+s.label,o.visible=this.isDatasetVisible(r),o.controller)o.controller.updateIndex(r),o.controller.linkScales();else{const l=qn.getController(a),{datasetElementType:u,dataElementType:h}=lt.datasets[a];Object.assign(l,{dataElementType:qn.getElement(h),datasetElementType:u&&qn.getElement(u)}),o.controller=new l(this,r),e.push(o.controller)}}return this._updateMetasets(),e}_resetElements(){Ne(this.data.datasets,(e,n)=>{this.getDatasetMeta(n).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(e){const n=this.config;n.update();const r=this._options=n.createResolver(n.chartOptionScopes(),this.getContext()),i=this._animationsDisabled=!r.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:e,cancelable:!0})===!1)return;const s=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let u=0,h=this.data.datasets.length;u<h;u++){const{controller:f}=this.getDatasetMeta(u),d=!i&&s.indexOf(f)===-1;f.buildOrUpdateElements(d),o=Math.max(+f.getMaxOverflow(),o)}o=this._minPadding=r.layout.autoPadding?o:0,this._updateLayout(o),i||Ne(s,u=>{u.reset()}),this._updateDatasets(e),this.notifyPlugins("afterUpdate",{mode:e}),this._layers.sort(g0("z","_idx"));const{_active:a,_lastEvent:l}=this;l?this._eventHandler(l,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){Ne(this.scales,e=>{xn.removeBox(this,e)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const e=this.options,n=new Set(Object.keys(this._listeners)),r=new Set(e.events);(!A2(n,r)||!!this._responsiveListeners!==e.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:e}=this,n=this._getUniformDataChanges()||[];for(const{method:r,start:i,count:s}of n){const o=r==="_removeElements"?-s:s;eO(e,i,o)}}_getUniformDataChanges(){const e=this._dataChanges;if(!e||!e.length)return;this._dataChanges=[];const n=this.data.datasets.length,r=s=>new Set(e.filter(o=>o[0]===s).map((o,a)=>a+","+o.splice(1).join(","))),i=r(0);for(let s=1;s<n;s++)if(!A2(i,r(s)))return;return Array.from(i).map(s=>s.split(",")).map(s=>({method:s[1],start:+s[2],count:+s[3]}))}_updateLayout(e){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;xn.update(this,this.width,this.height,e);const n=this.chartArea,r=n.width<=0||n.height<=0;this._layers=[],Ne(this.boxes,i=>{r&&i.position==="chartArea"||(i.configure&&i.configure(),this._layers.push(...i._layers()))},this),this._layers.forEach((i,s)=>{i._idx=s}),this.notifyPlugins("afterLayout")}_updateDatasets(e){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:e,cancelable:!0})!==!1){for(let n=0,r=this.data.datasets.length;n<r;++n)this.getDatasetMeta(n).controller.configure();for(let n=0,r=this.data.datasets.length;n<r;++n)this._updateDataset(n,fi(e)?e({datasetIndex:n}):e);this.notifyPlugins("afterDatasetsUpdate",{mode:e})}}_updateDataset(e,n){const r=this.getDatasetMeta(e),i={meta:r,index:e,mode:n,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",i)!==!1&&(r.controller._update(n),i.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",i))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(or.has(this)?this.attached&&!or.running(this)&&or.start(this):(this.draw(),m0({chart:this})))}draw(){let e;if(this._resizeBeforeDraw){const{width:r,height:i}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(r,i)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const n=this._layers;for(e=0;e<n.length&&n[e].z<=0;++e)n[e].draw(this.chartArea);for(this._drawDatasets();e<n.length;++e)n[e].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(e){const n=this._sortedMetasets,r=[];let i,s;for(i=0,s=n.length;i<s;++i){const o=n[i];(!e||o.visible)&&r.push(o)}return r}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const e=this.getSortedVisibleDatasetMetas();for(let n=e.length-1;n>=0;--n)this._drawDataset(e[n]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(e){const n=this.ctx,r=e._clip,i=!r.disabled,s=nO(e,this.chartArea),o={meta:e,index:e.index,cancelable:!0};this.notifyPlugins("beforeDatasetDraw",o)!==!1&&(i&&ef(n,{left:r.left===!1?0:s.left-r.left,right:r.right===!1?this.width:s.right+r.right,top:r.top===!1?0:s.top-r.top,bottom:r.bottom===!1?this.height:s.bottom+r.bottom}),e.controller.draw(),i&&tf(n),o.cancelable=!1,this.notifyPlugins("afterDatasetDraw",o))}isPointInArea(e){return pr(e,this.chartArea,this._minPadding)}getElementsAtEventForMode(e,n,r,i){const s=Jk.modes[n];return typeof s=="function"?s(this,e,r,i):[]}getDatasetMeta(e){const n=this.data.datasets[e],r=this._metasets;let i=r.filter(s=>s&&s._dataset===n).pop();return i||(i={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:n&&n.order||0,index:e,_dataset:n,_parsed:[],_sorted:!1},r.push(i)),i}getContext(){return this.$context||(this.$context=Ti(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(e){const n=this.data.datasets[e];if(!n)return!1;const r=this.getDatasetMeta(e);return typeof r.hidden=="boolean"?!r.hidden:!n.hidden}setDatasetVisibility(e,n){const r=this.getDatasetMeta(e);r.hidden=!n}toggleDataVisibility(e){this._hiddenIndices[e]=!this._hiddenIndices[e]}getDataVisibility(e){return!this._hiddenIndices[e]}_updateVisibility(e,n,r){const i=r?"show":"hide",s=this.getDatasetMeta(e),o=s.controller._resolveAnimations(void 0,i);il(n)?(s.data[n].hidden=!r,this.update()):(this.setDatasetVisibility(e,r),o.update(s,{visible:r}),this.update(a=>a.datasetIndex===e?i:void 0))}hide(e,n){this._updateVisibility(e,n,!1)}show(e,n){this._updateVisibility(e,n,!0)}_destroyDatasetMeta(e){const n=this._metasets[e];n&&n.controller&&n.controller._destroy(),delete this._metasets[e]}_stop(){let e,n;for(this.stop(),or.remove(this),e=0,n=this.data.datasets.length;e<n;++e)this._destroyDatasetMeta(e)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:e,ctx:n}=this;this._stop(),this.config.clearCache(),e&&(this.unbindEvents(),V2(e,n),this.platform.releaseContext(n),this.canvas=null,this.ctx=null),delete hc[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...e){return this.canvas.toDataURL(...e)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const e=this._listeners,n=this.platform,r=(s,o)=>{n.addEventListener(this,s,o),e[s]=o},i=(s,o,a)=>{s.offsetX=o,s.offsetY=a,this._eventHandler(s)};Ne(this.options.events,s=>r(s,i))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const e=this._responsiveListeners,n=this.platform,r=(l,u)=>{n.addEventListener(this,l,u),e[l]=u},i=(l,u)=>{e[l]&&(n.removeEventListener(this,l,u),delete e[l])},s=(l,u)=>{this.canvas&&this.resize(l,u)};let o;const a=()=>{i("attach",a),this.attached=!0,this.resize(),r("resize",s),r("detach",o)};o=()=>{this.attached=!1,i("resize",s),this._stop(),this._resize(0,0),r("attach",a)},n.isAttached(this.canvas)?a():o()}unbindEvents(){Ne(this._listeners,(e,n)=>{this.platform.removeEventListener(this,n,e)}),this._listeners={},Ne(this._responsiveListeners,(e,n)=>{this.platform.removeEventListener(this,n,e)}),this._responsiveListeners=void 0}updateHoverStyle(e,n,r){const i=r?"set":"remove";let s,o,a,l;for(n==="dataset"&&(s=this.getDatasetMeta(e[0].datasetIndex),s.controller["_"+i+"DatasetHoverStyle"]()),a=0,l=e.length;a<l;++a){o=e[a];const u=o&&this.getDatasetMeta(o.datasetIndex).controller;u&&u[i+"HoverStyle"](o.element,o.datasetIndex,o.index)}}getActiveElements(){return this._active||[]}setActiveElements(e){const n=this._active||[],r=e.map(({datasetIndex:s,index:o})=>{const a=this.getDatasetMeta(s);if(!a)throw new Error("No dataset found at index "+s);return{datasetIndex:s,element:a.data[o],index:o}});!Kc(r,n)&&(this._active=r,this._lastEvent=null,this._updateHoverStyles(r,n))}notifyPlugins(e,n,r){return this._plugins.notify(this,e,n,r)}isPluginEnabled(e){return this._plugins._cache.filter(n=>n.plugin.id===e).length===1}_updateHoverStyles(e,n,r){const i=this.options.hover,s=(l,u)=>l.filter(h=>!u.some(f=>h.datasetIndex===f.datasetIndex&&h.index===f.index)),o=s(n,e),a=r?e:s(e,n);o.length&&this.updateHoverStyle(o,i.mode,!1),a.length&&i.mode&&this.updateHoverStyle(a,i.mode,!0)}_eventHandler(e,n){const r={event:e,replay:n,cancelable:!0,inChartArea:this.isPointInArea(e)},i=o=>(o.options.events||this.options.events).includes(e.native.type);if(this.notifyPlugins("beforeEvent",r,i)===!1)return;const s=this._handleEvent(e,n,r.inChartArea);return r.cancelable=!1,this.notifyPlugins("afterEvent",r,i),(s||r.changed)&&this.render(),this}_handleEvent(e,n,r){const{_active:i=[],options:s}=this,o=n,a=this._getActiveElements(e,i,r,o),l=aP(e),u=tO(e,this._lastEvent,r,l);r&&(this._lastEvent=null,je(s.onHover,[e,a,this],this),l&&je(s.onClick,[e,a,this],this));const h=!Kc(a,i);return(h||n)&&(this._active=a,this._updateHoverStyles(a,i,n)),this._lastEvent=u,h}_getActiveElements(e,n,r,i){if(e.type==="mouseout")return[];if(!r)return n;const s=this.options.hover;return this.getElementsAtEventForMode(e,s.mode,s,i)}},ne(Nr,"defaults",lt),ne(Nr,"instances",hc),ne(Nr,"overrides",rs),ne(Nr,"registry",qn),ne(Nr,"version",X9),ne(Nr,"getChart",_0),Nr);function y0(){return Ne(Cl.instances,t=>t._plugins.invalidate())}function rO(t,e,n){const{startAngle:r,pixelMargin:i,x:s,y:o,outerRadius:a,innerRadius:l}=e;let u=i/a;t.beginPath(),t.arc(s,o,a,r-u,n+u),l>i?(u=i/l,t.arc(s,o,l,n+u,r-u,!0)):t.arc(s,o,i,n+ht,r-ht),t.closePath(),t.clip()}function iO(t){return r_(t,["outerStart","outerEnd","innerStart","innerEnd"])}function sO(t,e,n,r){const i=iO(t.options.borderRadius),s=(n-e)/2,o=Math.min(s,r*e/2),a=l=>{const u=(n-Math.min(s,l))*r/2;return Bt(l,0,Math.min(s,u))};return{outerStart:a(i.outerStart),outerEnd:a(i.outerEnd),innerStart:Bt(i.innerStart,0,o),innerEnd:Bt(i.innerEnd,0,o)}}function bs(t,e,n,r){return{x:n+t*Math.cos(e),y:r+t*Math.sin(e)}}function eh(t,e,n,r,i,s){const{x:o,y:a,startAngle:l,pixelMargin:u,innerRadius:h}=e,f=Math.max(e.outerRadius+r+n-u,0),d=h>0?h+r+n+u:0;let g=0;const _=i-l;if(r){const le=h>0?h-r:0,he=f>0?f-r:0,pe=(le+he)/2,G=pe!==0?_*pe/(pe+r):_;g=(_-G)/2}const y=Math.max(.001,_*f-n/Xe)/f,E=(_-y)/2,w=l+E+g,m=i-E-g,{outerStart:S,outerEnd:C,innerStart:O,innerEnd:M}=sO(e,d,f,m-w),R=f-S,T=f-C,b=w+S/R,x=m-C/T,P=d+O,k=d+M,A=w+O/P,Z=m-M/k;if(t.beginPath(),s){const le=(b+x)/2;if(t.arc(o,a,f,b,le),t.arc(o,a,f,le,x),C>0){const J=bs(T,x,o,a);t.arc(J.x,J.y,C,x,m+ht)}const he=bs(k,m,o,a);if(t.lineTo(he.x,he.y),M>0){const J=bs(k,Z,o,a);t.arc(J.x,J.y,M,m+ht,Z+Math.PI)}const pe=(m-M/d+(w+O/d))/2;if(t.arc(o,a,d,m-M/d,pe,!0),t.arc(o,a,d,pe,w+O/d,!0),O>0){const J=bs(P,A,o,a);t.arc(J.x,J.y,O,A+Math.PI,w-ht)}const G=bs(R,w,o,a);if(t.lineTo(G.x,G.y),S>0){const J=bs(R,b,o,a);t.arc(J.x,J.y,S,w-ht,b)}}else{t.moveTo(o,a);const le=Math.cos(b)*f+o,he=Math.sin(b)*f+a;t.lineTo(le,he);const pe=Math.cos(x)*f+o,G=Math.sin(x)*f+a;t.lineTo(pe,G)}t.closePath()}function oO(t,e,n,r,i){const{fullCircles:s,startAngle:o,circumference:a}=e;let l=e.endAngle;if(s){eh(t,e,n,r,l,i);for(let u=0;u<s;++u)t.fill();isNaN(a)||(l=o+(a%Ge||Ge))}return eh(t,e,n,r,l,i),t.fill(),l}function aO(t,e,n,r,i){const{fullCircles:s,startAngle:o,circumference:a,options:l}=e,{borderWidth:u,borderJoinStyle:h,borderDash:f,borderDashOffset:d}=l,g=l.borderAlign==="inner";if(!u)return;t.setLineDash(f||[]),t.lineDashOffset=d,g?(t.lineWidth=u*2,t.lineJoin=h||"round"):(t.lineWidth=u,t.lineJoin=h||"bevel");let _=e.endAngle;if(s){eh(t,e,n,r,_,i);for(let y=0;y<s;++y)t.stroke();isNaN(a)||(_=o+(a%Ge||Ge))}g&&rO(t,e,_),s||(eh(t,e,n,r,_,i),t.stroke())}class da extends Ar{constructor(n){super();ne(this,"circumference");ne(this,"endAngle");ne(this,"fullCircles");ne(this,"innerRadius");ne(this,"outerRadius");ne(this,"pixelMargin");ne(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,n&&Object.assign(this,n)}inRange(n,r,i){const s=this.getProps(["x","y"],i),{angle:o,distance:a}=wS(s,{x:n,y:r}),{startAngle:l,endAngle:u,innerRadius:h,outerRadius:f,circumference:d}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],i),g=(this.options.spacing+this.options.borderWidth)/2,_=ve(d,u-l),y=ol(o,l,u)&&l!==u,E=_>=Ge||y,w=dr(a,h+g,f+g);return E&&w}getCenterPoint(n){const{x:r,y:i,startAngle:s,endAngle:o,innerRadius:a,outerRadius:l}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],n),{offset:u,spacing:h}=this.options,f=(s+o)/2,d=(a+l+h+u)/2;return{x:r+Math.cos(f)*d,y:i+Math.sin(f)*d}}tooltipPosition(n){return this.getCenterPoint(n)}draw(n){const{options:r,circumference:i}=this,s=(r.offset||0)/4,o=(r.spacing||0)/2,a=r.circular;if(this.pixelMargin=r.borderAlign==="inner"?.33:0,this.fullCircles=i>Ge?Math.floor(i/Ge):0,i===0||this.innerRadius<0||this.outerRadius<0)return;n.save();const l=(this.startAngle+this.endAngle)/2;n.translate(Math.cos(l)*s,Math.sin(l)*s);const u=1-Math.sin(Math.min(Xe,i||0)),h=s*u;n.fillStyle=r.backgroundColor,n.strokeStyle=r.borderColor,oO(n,this,h,o,a),aO(n,this,h,o,a),n.restore()}}ne(da,"id","arc"),ne(da,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0}),ne(da,"defaultRoutes",{backgroundColor:"backgroundColor"}),ne(da,"descriptors",{_scriptable:!0,_indexable:n=>n!=="borderDash"});function YS(t,e,n=e){t.lineCap=ve(n.borderCapStyle,e.borderCapStyle),t.setLineDash(ve(n.borderDash,e.borderDash)),t.lineDashOffset=ve(n.borderDashOffset,e.borderDashOffset),t.lineJoin=ve(n.borderJoinStyle,e.borderJoinStyle),t.lineWidth=ve(n.borderWidth,e.borderWidth),t.strokeStyle=ve(n.borderColor,e.borderColor)}function lO(t,e,n){t.lineTo(n.x,n.y)}function uO(t){return t.stepped?OP:t.tension||t.cubicInterpolationMode==="monotone"?LP:lO}function XS(t,e,n={}){const r=t.length,{start:i=0,end:s=r-1}=n,{start:o,end:a}=e,l=Math.max(i,o),u=Math.min(s,a),h=i<o&&s<o||i>a&&s>a;return{count:r,start:l,loop:e.loop,ilen:u<l&&!h?r+u-l:u-l}}function cO(t,e,n,r){const{points:i,options:s}=e,{count:o,start:a,loop:l,ilen:u}=XS(i,n,r),h=uO(s);let{move:f=!0,reverse:d}=r||{},g,_,y;for(g=0;g<=u;++g)_=i[(a+(d?u-g:g))%o],!_.skip&&(f?(t.moveTo(_.x,_.y),f=!1):h(t,y,_,d,s.stepped),y=_);return l&&(_=i[(a+(d?u:0))%o],h(t,y,_,d,s.stepped)),!!l}function hO(t,e,n,r){const i=e.points,{count:s,start:o,ilen:a}=XS(i,n,r),{move:l=!0,reverse:u}=r||{};let h=0,f=0,d,g,_,y,E,w;const m=C=>(o+(u?a-C:C))%s,S=()=>{y!==E&&(t.lineTo(h,E),t.lineTo(h,y),t.lineTo(h,w))};for(l&&(g=i[m(0)],t.moveTo(g.x,g.y)),d=0;d<=a;++d){if(g=i[m(d)],g.skip)continue;const C=g.x,O=g.y,M=C|0;M===_?(O<y?y=O:O>E&&(E=O),h=(f*h+C)/++f):(S(),t.lineTo(C,O),_=M,f=0,y=E=O),w=O}S()}function lg(t){const e=t.options,n=e.borderDash&&e.borderDash.length;return!t._decimated&&!t._loop&&!e.tension&&e.cubicInterpolationMode!=="monotone"&&!e.stepped&&!n?hO:cO}function fO(t){return t.stepped?fk:t.tension||t.cubicInterpolationMode==="monotone"?dk:Fi}function dO(t,e,n,r){let i=e._path;i||(i=e._path=new Path2D,e.path(i,n,r)&&i.closePath()),YS(t,e.options),t.stroke(i)}function pO(t,e,n,r){const{segments:i,options:s}=e,o=lg(e);for(const a of i)YS(t,s,a.style),t.beginPath(),o(t,e,a,{start:n,end:n+r-1})&&t.closePath(),t.stroke()}const gO=typeof Path2D=="function";function mO(t,e,n,r){gO&&!e.options.segment?dO(t,e,n,r):pO(t,e,n,r)}class gr extends Ar{constructor(e){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,e&&Object.assign(this,e)}updateControlPoints(e,n){const r=this.options;if((r.tension||r.cubicInterpolationMode==="monotone")&&!r.stepped&&!this._pointsUpdated){const i=r.spanGaps?this._loop:this._fullLoop;ik(this._points,r,e,i,n),this._pointsUpdated=!0}}set points(e){this._points=e,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=vk(this,this.options.segment))}first(){const e=this.segments,n=this.points;return e.length&&n[e[0].start]}last(){const e=this.segments,n=this.points,r=e.length;return r&&n[e[r-1].end]}interpolate(e,n){const r=this.options,i=e[n],s=this.points,o=VS(this,{property:n,start:i,end:i});if(!o.length)return;const a=[],l=fO(r);let u,h;for(u=0,h=o.length;u<h;++u){const{start:f,end:d}=o[u],g=s[f],_=s[d];if(g===_){a.push(g);continue}const y=Math.abs((i-g[n])/(_[n]-g[n])),E=l(g,_,y,r.stepped);E[n]=e[n],a.push(E)}return a.length===1?a[0]:a}pathSegment(e,n,r){return lg(this)(e,this,n,r)}path(e,n,r){const i=this.segments,s=lg(this);let o=this._loop;n=n||0,r=r||this.points.length-n;for(const a of i)o&=s(e,this,a,{start:n,end:n+r-1});return!!o}draw(e,n,r,i){const s=this.options||{};(this.points||[]).length&&s.borderWidth&&(e.save(),mO(e,this,r,i),e.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}ne(gr,"id","line"),ne(gr,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),ne(gr,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),ne(gr,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"&&e!=="fill"});function v0(t,e,n,r){const i=t.options,{[n]:s}=t.getProps([n],r);return Math.abs(e-s)<i.radius+i.hitRadius}class La extends Ar{constructor(n){super();ne(this,"parsed");ne(this,"skip");ne(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,n&&Object.assign(this,n)}inRange(n,r,i){const s=this.options,{x:o,y:a}=this.getProps(["x","y"],i);return Math.pow(n-o,2)+Math.pow(r-a,2)<Math.pow(s.hitRadius+s.radius,2)}inXRange(n,r){return v0(this,n,"x",r)}inYRange(n,r){return v0(this,n,"y",r)}getCenterPoint(n){const{x:r,y:i}=this.getProps(["x","y"],n);return{x:r,y:i}}size(n){n=n||this.options||{};let r=n.radius||0;r=Math.max(r,r&&n.hoverRadius||0);const i=r&&n.borderWidth||0;return(r+i)*2}draw(n,r){const i=this.options;this.skip||i.radius<.1||!pr(this,r,this.size(i)/2)||(n.strokeStyle=i.borderColor,n.lineWidth=i.borderWidth,n.fillStyle=i.backgroundColor,ig(n,i,this.x,this.y))}getRange(){const n=this.options||{};return n.radius+n.hitRadius}}ne(La,"id","point"),ne(La,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),ne(La,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function JS(t,e){const{x:n,y:r,base:i,width:s,height:o}=t.getProps(["x","y","base","width","height"],e);let a,l,u,h,f;return t.horizontal?(f=o/2,a=Math.min(n,i),l=Math.max(n,i),u=r-f,h=r+f):(f=s/2,a=n-f,l=n+f,u=Math.min(r,i),h=Math.max(r,i)),{left:a,top:u,right:l,bottom:h}}function qr(t,e,n,r){return t?0:Bt(e,n,r)}function _O(t,e,n){const r=t.options.borderWidth,i=t.borderSkipped,s=IS(r);return{t:qr(i.top,s.top,0,n),r:qr(i.right,s.right,0,e),b:qr(i.bottom,s.bottom,0,n),l:qr(i.left,s.left,0,e)}}function yO(t,e,n){const{enableBorderRadius:r}=t.getProps(["enableBorderRadius"]),i=t.options.borderRadius,s=Qi(i),o=Math.min(e,n),a=t.borderSkipped,l=r||be(i);return{topLeft:qr(!l||a.top||a.left,s.topLeft,0,o),topRight:qr(!l||a.top||a.right,s.topRight,0,o),bottomLeft:qr(!l||a.bottom||a.left,s.bottomLeft,0,o),bottomRight:qr(!l||a.bottom||a.right,s.bottomRight,0,o)}}function vO(t){const e=JS(t),n=e.right-e.left,r=e.bottom-e.top,i=_O(t,n/2,r/2),s=yO(t,n/2,r/2);return{outer:{x:e.left,y:e.top,w:n,h:r,radius:s},inner:{x:e.left+i.l,y:e.top+i.t,w:n-i.l-i.r,h:r-i.t-i.b,radius:{topLeft:Math.max(0,s.topLeft-Math.max(i.t,i.l)),topRight:Math.max(0,s.topRight-Math.max(i.t,i.r)),bottomLeft:Math.max(0,s.bottomLeft-Math.max(i.b,i.l)),bottomRight:Math.max(0,s.bottomRight-Math.max(i.b,i.r))}}}}function kd(t,e,n,r){const i=e===null,s=n===null,a=t&&!(i&&s)&&JS(t,r);return a&&(i||dr(e,a.left,a.right))&&(s||dr(n,a.top,a.bottom))}function wO(t){return t.topLeft||t.topRight||t.bottomLeft||t.bottomRight}function EO(t,e){t.rect(e.x,e.y,e.w,e.h)}function Od(t,e,n={}){const r=t.x!==n.x?-e:0,i=t.y!==n.y?-e:0,s=(t.x+t.w!==n.x+n.w?e:0)-r,o=(t.y+t.h!==n.y+n.h?e:0)-i;return{x:t.x+r,y:t.y+i,w:t.w+s,h:t.h+o,radius:t.radius}}class fc extends Ar{constructor(e){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,e&&Object.assign(this,e)}draw(e){const{inflateAmount:n,options:{borderColor:r,backgroundColor:i}}=this,{inner:s,outer:o}=vO(this),a=wO(o.radius)?al:EO;e.save(),(o.w!==s.w||o.h!==s.h)&&(e.beginPath(),a(e,Od(o,n,s)),e.clip(),a(e,Od(s,-n,o)),e.fillStyle=r,e.fill("evenodd")),e.beginPath(),a(e,Od(s,n)),e.fillStyle=i,e.fill(),e.restore()}inRange(e,n,r){return kd(this,e,n,r)}inXRange(e,n){return kd(this,e,null,n)}inYRange(e,n){return kd(this,null,e,n)}getCenterPoint(e){const{x:n,y:r,base:i,horizontal:s}=this.getProps(["x","y","base","horizontal"],e);return{x:s?(n+i)/2:n,y:s?r:(r+i)/2}}getRange(e){return e==="x"?this.width/2:this.height/2}}ne(fc,"id","bar"),ne(fc,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),ne(fc,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function SO(t,e,n){const r=t.segments,i=t.points,s=e.points,o=[];for(const a of r){let{start:l,end:u}=a;u=c_(l,u,i);const h=ug(n,i[l],i[u],a.loop);if(!e.segments){o.push({source:a,target:h,start:i[l],end:i[u]});continue}const f=VS(e,h);for(const d of f){const g=ug(n,s[d.start],s[d.end],d.loop),_=NS(a,i,g);for(const y of _)o.push({source:y,target:d,start:{[n]:w0(h,g,"start",Math.max)},end:{[n]:w0(h,g,"end",Math.min)}})}}return o}function ug(t,e,n,r){if(r)return;let i=e[t],s=n[t];return t==="angle"&&(i=dn(i),s=dn(s)),{property:t,start:i,end:s}}function TO(t,e){const{x:n=null,y:r=null}=t||{},i=e.points,s=[];return e.segments.forEach(({start:o,end:a})=>{a=c_(o,a,i);const l=i[o],u=i[a];r!==null?(s.push({x:l.x,y:r}),s.push({x:u.x,y:r})):n!==null&&(s.push({x:n,y:l.y}),s.push({x:n,y:u.y}))}),s}function c_(t,e,n){for(;e>t;e--){const r=n[e];if(!isNaN(r.x)&&!isNaN(r.y))break}return e}function w0(t,e,n,r){return t&&e?r(t[n],e[n]):t?t[n]:e?e[n]:0}function ZS(t,e){let n=[],r=!1;return Ye(t)?(r=!0,n=t):n=TO(t,e),n.length?new gr({points:n,options:{tension:0},_loop:r,_fullLoop:r}):null}function E0(t){return t&&t.fill!==!1}function bO(t,e,n){let i=t[e].fill;const s=[e];let o;if(!n)return i;for(;i!==!1&&s.indexOf(i)===-1;){if(!at(i))return i;if(o=t[i],!o)return!1;if(o.visible)return i;s.push(i),i=o.fill}return!1}function xO(t,e,n){const r=CO(t);if(be(r))return isNaN(r.value)?!1:r;let i=parseFloat(r);return at(i)&&Math.floor(i)===i?RO(r[0],e,i,n):["origin","start","end","stack","shape"].indexOf(r)>=0&&r}function RO(t,e,n,r){return(t==="-"||t==="+")&&(n=e+n),n===e||n<0||n>=r?!1:n}function IO(t,e){let n=null;return t==="start"?n=e.bottom:t==="end"?n=e.top:be(t)?n=e.getPixelForValue(t.value):e.getBasePixel&&(n=e.getBasePixel()),n}function AO(t,e,n){let r;return t==="start"?r=n:t==="end"?r=e.options.reverse?e.min:e.max:be(t)?r=t.value:r=e.getBaseValue(),r}function CO(t){const e=t.options,n=e.fill;let r=ve(n&&n.target,n);return r===void 0&&(r=!!e.backgroundColor),r===!1||r===null?!1:r===!0?"origin":r}function PO(t){const{scale:e,index:n,line:r}=t,i=[],s=r.segments,o=r.points,a=kO(e,n);a.push(ZS({x:null,y:e.bottom},r));for(let l=0;l<s.length;l++){const u=s[l];for(let h=u.start;h<=u.end;h++)OO(i,o[h],a)}return new gr({points:i,options:{}})}function kO(t,e){const n=[],r=t.getMatchingVisibleMetas("line");for(let i=0;i<r.length;i++){const s=r[i];if(s.index===e)break;s.hidden||n.unshift(s.dataset)}return n}function OO(t,e,n){const r=[];for(let i=0;i<n.length;i++){const s=n[i],{first:o,last:a,point:l}=LO(s,e,"x");if(!(!l||o&&a)){if(o)r.unshift(l);else if(t.push(l),!a)break}}t.push(...r)}function LO(t,e,n){const r=t.interpolate(e,n);if(!r)return{};const i=r[n],s=t.segments,o=t.points;let a=!1,l=!1;for(let u=0;u<s.length;u++){const h=s[u],f=o[h.start][n],d=o[h.end][n];if(dr(i,f,d)){a=i===f,l=i===d;break}}return{first:a,last:l,point:r}}class eT{constructor(e){this.x=e.x,this.y=e.y,this.radius=e.radius}pathSegment(e,n,r){const{x:i,y:s,radius:o}=this;return n=n||{start:0,end:Ge},e.arc(i,s,o,n.end,n.start,!0),!r.bounds}interpolate(e){const{x:n,y:r,radius:i}=this,s=e.angle;return{x:n+Math.cos(s)*i,y:r+Math.sin(s)*i,angle:s}}}function MO(t){const{chart:e,fill:n,line:r}=t;if(at(n))return DO(e,n);if(n==="stack")return PO(t);if(n==="shape")return!0;const i=NO(t);return i instanceof eT?i:ZS(i,r)}function DO(t,e){const n=t.getDatasetMeta(e);return n&&t.isDatasetVisible(e)?n.dataset:null}function NO(t){return(t.scale||{}).getPointPositionForValue?FO(t):VO(t)}function VO(t){const{scale:e={},fill:n}=t,r=IO(n,e);if(at(r)){const i=e.isHorizontal();return{x:i?r:null,y:i?null:r}}return null}function FO(t){const{scale:e,fill:n}=t,r=e.options,i=e.getLabels().length,s=r.reverse?e.max:e.min,o=AO(n,e,s),a=[];if(r.grid.circular){const l=e.getPointPositionForValue(0,s);return new eT({x:l.x,y:l.y,radius:e.getDistanceFromCenterForValue(o)})}for(let l=0;l<i;++l)a.push(e.getPointPositionForValue(l,o));return a}function Ld(t,e,n){const r=MO(e),{line:i,scale:s,axis:o}=e,a=i.options,l=a.fill,u=a.backgroundColor,{above:h=u,below:f=u}=l||{};r&&i.points.length&&(ef(t,n),zO(t,{line:i,target:r,above:h,below:f,area:n,scale:s,axis:o}),tf(t))}function zO(t,e){const{line:n,target:r,above:i,below:s,area:o,scale:a}=e,l=n._loop?"angle":e.axis;t.save(),l==="x"&&s!==i&&(S0(t,r,o.top),T0(t,{line:n,target:r,color:i,scale:a,property:l}),t.restore(),t.save(),S0(t,r,o.bottom)),T0(t,{line:n,target:r,color:s,scale:a,property:l}),t.restore()}function S0(t,e,n){const{segments:r,points:i}=e;let s=!0,o=!1;t.beginPath();for(const a of r){const{start:l,end:u}=a,h=i[l],f=i[c_(l,u,i)];s?(t.moveTo(h.x,h.y),s=!1):(t.lineTo(h.x,n),t.lineTo(h.x,h.y)),o=!!e.pathSegment(t,a,{move:o}),o?t.closePath():t.lineTo(f.x,n)}t.lineTo(e.first().x,n),t.closePath(),t.clip()}function T0(t,e){const{line:n,target:r,property:i,color:s,scale:o}=e,a=SO(n,r,i);for(const{source:l,target:u,start:h,end:f}of a){const{style:{backgroundColor:d=s}={}}=l,g=r!==!0;t.save(),t.fillStyle=d,jO(t,o,g&&ug(i,h,f)),t.beginPath();const _=!!n.pathSegment(t,l);let y;if(g){_?t.closePath():b0(t,r,f,i);const E=!!r.pathSegment(t,u,{move:_,reverse:!0});y=_&&E,y||b0(t,r,h,i)}t.closePath(),t.fill(y?"evenodd":"nonzero"),t.restore()}}function jO(t,e,n){const{top:r,bottom:i}=e.chart.chartArea,{property:s,start:o,end:a}=n||{};s==="x"&&(t.beginPath(),t.rect(o,r,a-o,i-r),t.clip())}function b0(t,e,n,r){const i=e.interpolate(n,r);i&&t.lineTo(i.x,i.y)}var BO={id:"filler",afterDatasetsUpdate(t,e,n){const r=(t.data.datasets||[]).length,i=[];let s,o,a,l;for(o=0;o<r;++o)s=t.getDatasetMeta(o),a=s.dataset,l=null,a&&a.options&&a instanceof gr&&(l={visible:t.isDatasetVisible(o),index:o,fill:xO(a,o,r),chart:t,axis:s.controller.options.indexAxis,scale:s.vScale,line:a}),s.$filler=l,i.push(l);for(o=0;o<r;++o)l=i[o],!(!l||l.fill===!1)&&(l.fill=bO(i,o,n.propagate))},beforeDraw(t,e,n){const r=n.drawTime==="beforeDraw",i=t.getSortedVisibleDatasetMetas(),s=t.chartArea;for(let o=i.length-1;o>=0;--o){const a=i[o].$filler;a&&(a.line.updateControlPoints(s,a.axis),r&&a.fill&&Ld(t.ctx,a,s))}},beforeDatasetsDraw(t,e,n){if(n.drawTime!=="beforeDatasetsDraw")return;const r=t.getSortedVisibleDatasetMetas();for(let i=r.length-1;i>=0;--i){const s=r[i].$filler;E0(s)&&Ld(t.ctx,s,t.chartArea)}},beforeDatasetDraw(t,e,n){const r=e.meta.$filler;!E0(r)||n.drawTime!=="beforeDatasetDraw"||Ld(t.ctx,r,t.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const x0=(t,e)=>{let{boxHeight:n=e,boxWidth:r=e}=t;return t.usePointStyle&&(n=Math.min(n,e),r=t.pointStyleWidth||Math.min(r,e)),{boxWidth:r,boxHeight:n,itemHeight:Math.max(e,n)}},$O=(t,e)=>t!==null&&e!==null&&t.datasetIndex===e.datasetIndex&&t.index===e.index;class R0 extends Ar{constructor(e){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,n,r){this.maxWidth=e,this.maxHeight=n,this._margins=r,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const e=this.options.labels||{};let n=je(e.generateLabels,[this.chart],this)||[];e.filter&&(n=n.filter(r=>e.filter(r,this.chart.data))),e.sort&&(n=n.sort((r,i)=>e.sort(r,i,this.chart.data))),this.options.reverse&&n.reverse(),this.legendItems=n}fit(){const{options:e,ctx:n}=this;if(!e.display){this.width=this.height=0;return}const r=e.labels,i=yt(r.font),s=i.size,o=this._computeTitleHeight(),{boxWidth:a,itemHeight:l}=x0(r,s);let u,h;n.font=i.string,this.isHorizontal()?(u=this.maxWidth,h=this._fitRows(o,s,a,l)+10):(h=this.maxHeight,u=this._fitCols(o,i,a,l)+10),this.width=Math.min(u,e.maxWidth||this.maxWidth),this.height=Math.min(h,e.maxHeight||this.maxHeight)}_fitRows(e,n,r,i){const{ctx:s,maxWidth:o,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],u=this.lineWidths=[0],h=i+a;let f=e;s.textAlign="left",s.textBaseline="middle";let d=-1,g=-h;return this.legendItems.forEach((_,y)=>{const E=r+n/2+s.measureText(_.text).width;(y===0||u[u.length-1]+E+2*a>o)&&(f+=h,u[u.length-(y>0?0:1)]=0,g+=h,d++),l[y]={left:0,top:g,row:d,width:E,height:i},u[u.length-1]+=E+a}),f}_fitCols(e,n,r,i){const{ctx:s,maxHeight:o,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],u=this.columnSizes=[],h=o-e;let f=a,d=0,g=0,_=0,y=0;return this.legendItems.forEach((E,w)=>{const{itemWidth:m,itemHeight:S}=UO(r,n,s,E,i);w>0&&g+S+2*a>h&&(f+=d+a,u.push({width:d,height:g}),_+=d+a,y++,d=g=0),l[w]={left:_,top:g,col:y,width:m,height:S},d=Math.max(d,m),g+=S+a}),f+=d,u.push({width:d,height:g}),f}adjustHitBoxes(){if(!this.options.display)return;const e=this._computeTitleHeight(),{legendHitBoxes:n,options:{align:r,labels:{padding:i},rtl:s}}=this,o=Ks(s,this.left,this.width);if(this.isHorizontal()){let a=0,l=Vt(r,this.left+i,this.right-this.lineWidths[a]);for(const u of n)a!==u.row&&(a=u.row,l=Vt(r,this.left+i,this.right-this.lineWidths[a])),u.top+=this.top+e+i,u.left=o.leftForLtr(o.x(l),u.width),l+=u.width+i}else{let a=0,l=Vt(r,this.top+e+i,this.bottom-this.columnSizes[a].height);for(const u of n)u.col!==a&&(a=u.col,l=Vt(r,this.top+e+i,this.bottom-this.columnSizes[a].height)),u.top=l,u.left+=this.left+i,u.left=o.leftForLtr(o.x(u.left),u.width),l+=u.height+i}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const e=this.ctx;ef(e,this),this._draw(),tf(e)}}_draw(){const{options:e,columnSizes:n,lineWidths:r,ctx:i}=this,{align:s,labels:o}=e,a=lt.color,l=Ks(e.rtl,this.left,this.width),u=yt(o.font),{padding:h}=o,f=u.size,d=f/2;let g;this.drawTitle(),i.textAlign=l.textAlign("left"),i.textBaseline="middle",i.lineWidth=.5,i.font=u.string;const{boxWidth:_,boxHeight:y,itemHeight:E}=x0(o,f),w=function(M,R,T){if(isNaN(_)||_<=0||isNaN(y)||y<0)return;i.save();const b=ve(T.lineWidth,1);if(i.fillStyle=ve(T.fillStyle,a),i.lineCap=ve(T.lineCap,"butt"),i.lineDashOffset=ve(T.lineDashOffset,0),i.lineJoin=ve(T.lineJoin,"miter"),i.lineWidth=b,i.strokeStyle=ve(T.strokeStyle,a),i.setLineDash(ve(T.lineDash,[])),o.usePointStyle){const x={radius:y*Math.SQRT2/2,pointStyle:T.pointStyle,rotation:T.rotation,borderWidth:b},P=l.xPlus(M,_/2),k=R+d;RS(i,x,P,k,o.pointStyleWidth&&_)}else{const x=R+Math.max((f-y)/2,0),P=l.leftForLtr(M,_),k=Qi(T.borderRadius);i.beginPath(),Object.values(k).some(A=>A!==0)?al(i,{x:P,y:x,w:_,h:y,radius:k}):i.rect(P,x,_,y),i.fill(),b!==0&&i.stroke()}i.restore()},m=function(M,R,T){is(i,T.text,M,R+E/2,u,{strikethrough:T.hidden,textAlign:l.textAlign(T.textAlign)})},S=this.isHorizontal(),C=this._computeTitleHeight();S?g={x:Vt(s,this.left+h,this.right-r[0]),y:this.top+h+C,line:0}:g={x:this.left+h,y:Vt(s,this.top+C+h,this.bottom-n[0].height),line:0},LS(this.ctx,e.textDirection);const O=E+h;this.legendItems.forEach((M,R)=>{i.strokeStyle=M.fontColor,i.fillStyle=M.fontColor;const T=i.measureText(M.text).width,b=l.textAlign(M.textAlign||(M.textAlign=o.textAlign)),x=_+d+T;let P=g.x,k=g.y;l.setWidth(this.width),S?R>0&&P+x+h>this.right&&(k=g.y+=O,g.line++,P=g.x=Vt(s,this.left+h,this.right-r[g.line])):R>0&&k+O>this.bottom&&(P=g.x=P+n[g.line].width+h,g.line++,k=g.y=Vt(s,this.top+C+h,this.bottom-n[g.line].height));const A=l.x(P);if(w(A,k,M),P=vP(b,P+_+d,S?P+x:this.right,e.rtl),m(l.x(P),k,M),S)g.x+=x+h;else if(typeof M.text!="string"){const Z=u.lineHeight;g.y+=tT(M,Z)+h}else g.y+=O}),MS(this.ctx,e.textDirection)}drawTitle(){const e=this.options,n=e.title,r=yt(n.font),i=Ut(n.padding);if(!n.display)return;const s=Ks(e.rtl,this.left,this.width),o=this.ctx,a=n.position,l=r.size/2,u=i.top+l;let h,f=this.left,d=this.width;if(this.isHorizontal())d=Math.max(...this.lineWidths),h=this.top+u,f=Vt(e.align,f,this.right-d);else{const _=this.columnSizes.reduce((y,E)=>Math.max(y,E.height),0);h=u+Vt(e.align,this.top,this.bottom-_-e.labels.padding-this._computeTitleHeight())}const g=Vt(a,f,f+d);o.textAlign=s.textAlign(t_(a)),o.textBaseline="middle",o.strokeStyle=n.color,o.fillStyle=n.color,o.font=r.string,is(o,n.text,g,h,r)}_computeTitleHeight(){const e=this.options.title,n=yt(e.font),r=Ut(e.padding);return e.display?n.lineHeight+r.height:0}_getLegendItemAt(e,n){let r,i,s;if(dr(e,this.left,this.right)&&dr(n,this.top,this.bottom)){for(s=this.legendHitBoxes,r=0;r<s.length;++r)if(i=s[r],dr(e,i.left,i.left+i.width)&&dr(n,i.top,i.top+i.height))return this.legendItems[r]}return null}handleEvent(e){const n=this.options;if(!qO(e.type,n))return;const r=this._getLegendItemAt(e.x,e.y);if(e.type==="mousemove"||e.type==="mouseout"){const i=this._hoveredItem,s=$O(i,r);i&&!s&&je(n.onLeave,[e,i,this],this),this._hoveredItem=r,r&&!s&&je(n.onHover,[e,r,this],this)}else r&&je(n.onClick,[e,r,this],this)}}function UO(t,e,n,r,i){const s=HO(r,t,e,n),o=WO(i,r,e.lineHeight);return{itemWidth:s,itemHeight:o}}function HO(t,e,n,r){let i=t.text;return i&&typeof i!="string"&&(i=i.reduce((s,o)=>s.length>o.length?s:o)),e+n.size/2+r.measureText(i).width}function WO(t,e,n){let r=t;return typeof e.text!="string"&&(r=tT(e,n)),r}function tT(t,e){const n=t.text?t.text.length:0;return e*n}function qO(t,e){return!!((t==="mousemove"||t==="mouseout")&&(e.onHover||e.onLeave)||e.onClick&&(t==="click"||t==="mouseup"))}var nT={id:"legend",_element:R0,start(t,e,n){const r=t.legend=new R0({ctx:t.ctx,options:n,chart:t});xn.configure(t,r,n),xn.addBox(t,r)},stop(t){xn.removeBox(t,t.legend),delete t.legend},beforeUpdate(t,e,n){const r=t.legend;xn.configure(t,r,n),r.options=n},afterUpdate(t){const e=t.legend;e.buildLabels(),e.adjustHitBoxes()},afterEvent(t,e){e.replay||t.legend.handleEvent(e.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(t,e,n){const r=e.datasetIndex,i=n.chart;i.isDatasetVisible(r)?(i.hide(r),e.hidden=!0):(i.show(r),e.hidden=!1)},onHover:null,onLeave:null,labels:{color:t=>t.chart.options.color,boxWidth:40,padding:10,generateLabels(t){const e=t.data.datasets,{labels:{usePointStyle:n,pointStyle:r,textAlign:i,color:s,useBorderRadius:o,borderRadius:a}}=t.legend.options;return t._getSortedDatasetMetas().map(l=>{const u=l.controller.getStyle(n?0:void 0),h=Ut(u.borderWidth);return{text:e[l.index].label,fillStyle:u.backgroundColor,fontColor:s,hidden:!l.visible,lineCap:u.borderCapStyle,lineDash:u.borderDash,lineDashOffset:u.borderDashOffset,lineJoin:u.borderJoinStyle,lineWidth:(h.width+h.height)/4,strokeStyle:u.borderColor,pointStyle:r||u.pointStyle,rotation:u.rotation,textAlign:i||u.textAlign,borderRadius:o&&(a||u.borderRadius),datasetIndex:l.index}},this)}},title:{color:t=>t.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:t=>!t.startsWith("on"),labels:{_scriptable:t=>!["generateLabels","filter","sort"].includes(t)}}};class rT extends Ar{constructor(e){super(),this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,n){const r=this.options;if(this.left=0,this.top=0,!r.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=e,this.height=this.bottom=n;const i=Ye(r.text)?r.text.length:1;this._padding=Ut(r.padding);const s=i*yt(r.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=s:this.width=s}isHorizontal(){const e=this.options.position;return e==="top"||e==="bottom"}_drawArgs(e){const{top:n,left:r,bottom:i,right:s,options:o}=this,a=o.align;let l=0,u,h,f;return this.isHorizontal()?(h=Vt(a,r,s),f=n+e,u=s-r):(o.position==="left"?(h=r+e,f=Vt(a,i,n),l=Xe*-.5):(h=s-e,f=Vt(a,n,i),l=Xe*.5),u=i-n),{titleX:h,titleY:f,maxWidth:u,rotation:l}}draw(){const e=this.ctx,n=this.options;if(!n.display)return;const r=yt(n.font),s=r.lineHeight/2+this._padding.top,{titleX:o,titleY:a,maxWidth:l,rotation:u}=this._drawArgs(s);is(e,n.text,0,0,r,{color:n.color,maxWidth:l,rotation:u,textAlign:t_(n.align),textBaseline:"middle",translation:[o,a]})}}function GO(t,e){const n=new rT({ctx:t.ctx,options:e,chart:t});xn.configure(t,n,e),xn.addBox(t,n),t.titleBlock=n}var KO={id:"title",_element:rT,start(t,e,n){GO(t,n)},stop(t){const e=t.titleBlock;xn.removeBox(t,e),delete t.titleBlock},beforeUpdate(t,e,n){const r=t.titleBlock;xn.configure(t,r,n),r.options=n},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const pa={average(t){if(!t.length)return!1;let e,n,r=new Set,i=0,s=0;for(e=0,n=t.length;e<n;++e){const a=t[e].element;if(a&&a.hasValue()){const l=a.tooltipPosition();r.add(l.x),i+=l.y,++s}}return s===0||r.size===0?!1:{x:[...r].reduce((a,l)=>a+l)/r.size,y:i/s}},nearest(t,e){if(!t.length)return!1;let n=e.x,r=e.y,i=Number.POSITIVE_INFINITY,s,o,a;for(s=0,o=t.length;s<o;++s){const l=t[s].element;if(l&&l.hasValue()){const u=l.getCenterPoint(),h=ng(e,u);h<i&&(i=h,a=l)}}if(a){const l=a.tooltipPosition();n=l.x,r=l.y}return{x:n,y:r}}};function Hn(t,e){return e&&(Ye(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function ar(t){return(typeof t=="string"||t instanceof String)&&t.indexOf(`
`)>-1?t.split(`
`):t}function QO(t,e){const{element:n,datasetIndex:r,index:i}=e,s=t.getDatasetMeta(r).controller,{label:o,value:a}=s.getLabelAndValue(i);return{chart:t,label:o,parsed:s.getParsed(i),raw:t.data.datasets[r].data[i],formattedValue:a,dataset:s.getDataset(),dataIndex:i,datasetIndex:r,element:n}}function I0(t,e){const n=t.chart.ctx,{body:r,footer:i,title:s}=t,{boxWidth:o,boxHeight:a}=e,l=yt(e.bodyFont),u=yt(e.titleFont),h=yt(e.footerFont),f=s.length,d=i.length,g=r.length,_=Ut(e.padding);let y=_.height,E=0,w=r.reduce((C,O)=>C+O.before.length+O.lines.length+O.after.length,0);if(w+=t.beforeBody.length+t.afterBody.length,f&&(y+=f*u.lineHeight+(f-1)*e.titleSpacing+e.titleMarginBottom),w){const C=e.displayColors?Math.max(a,l.lineHeight):l.lineHeight;y+=g*C+(w-g)*l.lineHeight+(w-1)*e.bodySpacing}d&&(y+=e.footerMarginTop+d*h.lineHeight+(d-1)*e.footerSpacing);let m=0;const S=function(C){E=Math.max(E,n.measureText(C).width+m)};return n.save(),n.font=u.string,Ne(t.title,S),n.font=l.string,Ne(t.beforeBody.concat(t.afterBody),S),m=e.displayColors?o+2+e.boxPadding:0,Ne(r,C=>{Ne(C.before,S),Ne(C.lines,S),Ne(C.after,S)}),m=0,n.font=h.string,Ne(t.footer,S),n.restore(),E+=_.width,{width:E,height:y}}function YO(t,e){const{y:n,height:r}=e;return n<r/2?"top":n>t.height-r/2?"bottom":"center"}function XO(t,e,n,r){const{x:i,width:s}=r,o=n.caretSize+n.caretPadding;if(t==="left"&&i+s+o>e.width||t==="right"&&i-s-o<0)return!0}function JO(t,e,n,r){const{x:i,width:s}=n,{width:o,chartArea:{left:a,right:l}}=t;let u="center";return r==="center"?u=i<=(a+l)/2?"left":"right":i<=s/2?u="left":i>=o-s/2&&(u="right"),XO(u,t,e,n)&&(u="center"),u}function A0(t,e,n){const r=n.yAlign||e.yAlign||YO(t,n);return{xAlign:n.xAlign||e.xAlign||JO(t,e,n,r),yAlign:r}}function ZO(t,e){let{x:n,width:r}=t;return e==="right"?n-=r:e==="center"&&(n-=r/2),n}function eL(t,e,n){let{y:r,height:i}=t;return e==="top"?r+=n:e==="bottom"?r-=i+n:r-=i/2,r}function C0(t,e,n,r){const{caretSize:i,caretPadding:s,cornerRadius:o}=t,{xAlign:a,yAlign:l}=n,u=i+s,{topLeft:h,topRight:f,bottomLeft:d,bottomRight:g}=Qi(o);let _=ZO(e,a);const y=eL(e,l,u);return l==="center"?a==="left"?_+=u:a==="right"&&(_-=u):a==="left"?_-=Math.max(h,d)+i:a==="right"&&(_+=Math.max(f,g)+i),{x:Bt(_,0,r.width-e.width),y:Bt(y,0,r.height-e.height)}}function Du(t,e,n){const r=Ut(n.padding);return e==="center"?t.x+t.width/2:e==="right"?t.x+t.width-r.right:t.x+r.left}function P0(t){return Hn([],ar(t))}function tL(t,e,n){return Ti(t,{tooltip:e,tooltipItems:n,type:"tooltip"})}function k0(t,e){const n=e&&e.dataset&&e.dataset.tooltip&&e.dataset.tooltip.callbacks;return n?t.override(n):t}const iT={beforeTitle:sr,title(t){if(t.length>0){const e=t[0],n=e.chart.data.labels,r=n?n.length:0;if(this&&this.options&&this.options.mode==="dataset")return e.dataset.label||"";if(e.label)return e.label;if(r>0&&e.dataIndex<r)return n[e.dataIndex]}return""},afterTitle:sr,beforeBody:sr,beforeLabel:sr,label(t){if(this&&this.options&&this.options.mode==="dataset")return t.label+": "+t.formattedValue||t.formattedValue;let e=t.dataset.label||"";e&&(e+=": ");const n=t.formattedValue;return Ce(n)||(e+=n),e},labelColor(t){const n=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{borderColor:n.borderColor,backgroundColor:n.backgroundColor,borderWidth:n.borderWidth,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(t){const n=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{pointStyle:n.pointStyle,rotation:n.rotation}},afterLabel:sr,afterBody:sr,beforeFooter:sr,footer:sr,afterFooter:sr};function Jt(t,e,n,r){const i=t[e].call(n,r);return typeof i>"u"?iT[e].call(n,r):i}class cg extends Ar{constructor(e){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=e.chart,this.options=e.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(e){this.options=e,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const e=this._cachedAnimations;if(e)return e;const n=this.chart,r=this.options.setContext(this.getContext()),i=r.enabled&&n.options.animation&&r.animations,s=new FS(this.chart,i);return i._cacheable&&(this._cachedAnimations=Object.freeze(s)),s}getContext(){return this.$context||(this.$context=tL(this.chart.getContext(),this,this._tooltipItems))}getTitle(e,n){const{callbacks:r}=n,i=Jt(r,"beforeTitle",this,e),s=Jt(r,"title",this,e),o=Jt(r,"afterTitle",this,e);let a=[];return a=Hn(a,ar(i)),a=Hn(a,ar(s)),a=Hn(a,ar(o)),a}getBeforeBody(e,n){return P0(Jt(n.callbacks,"beforeBody",this,e))}getBody(e,n){const{callbacks:r}=n,i=[];return Ne(e,s=>{const o={before:[],lines:[],after:[]},a=k0(r,s);Hn(o.before,ar(Jt(a,"beforeLabel",this,s))),Hn(o.lines,Jt(a,"label",this,s)),Hn(o.after,ar(Jt(a,"afterLabel",this,s))),i.push(o)}),i}getAfterBody(e,n){return P0(Jt(n.callbacks,"afterBody",this,e))}getFooter(e,n){const{callbacks:r}=n,i=Jt(r,"beforeFooter",this,e),s=Jt(r,"footer",this,e),o=Jt(r,"afterFooter",this,e);let a=[];return a=Hn(a,ar(i)),a=Hn(a,ar(s)),a=Hn(a,ar(o)),a}_createItems(e){const n=this._active,r=this.chart.data,i=[],s=[],o=[];let a=[],l,u;for(l=0,u=n.length;l<u;++l)a.push(QO(this.chart,n[l]));return e.filter&&(a=a.filter((h,f,d)=>e.filter(h,f,d,r))),e.itemSort&&(a=a.sort((h,f)=>e.itemSort(h,f,r))),Ne(a,h=>{const f=k0(e.callbacks,h);i.push(Jt(f,"labelColor",this,h)),s.push(Jt(f,"labelPointStyle",this,h)),o.push(Jt(f,"labelTextColor",this,h))}),this.labelColors=i,this.labelPointStyles=s,this.labelTextColors=o,this.dataPoints=a,a}update(e,n){const r=this.options.setContext(this.getContext()),i=this._active;let s,o=[];if(!i.length)this.opacity!==0&&(s={opacity:0});else{const a=pa[r.position].call(this,i,this._eventPosition);o=this._createItems(r),this.title=this.getTitle(o,r),this.beforeBody=this.getBeforeBody(o,r),this.body=this.getBody(o,r),this.afterBody=this.getAfterBody(o,r),this.footer=this.getFooter(o,r);const l=this._size=I0(this,r),u=Object.assign({},a,l),h=A0(this.chart,r,u),f=C0(r,u,h,this.chart);this.xAlign=h.xAlign,this.yAlign=h.yAlign,s={opacity:1,x:f.x,y:f.y,width:l.width,height:l.height,caretX:a.x,caretY:a.y}}this._tooltipItems=o,this.$context=void 0,s&&this._resolveAnimations().update(this,s),e&&r.external&&r.external.call(this,{chart:this.chart,tooltip:this,replay:n})}drawCaret(e,n,r,i){const s=this.getCaretPosition(e,r,i);n.lineTo(s.x1,s.y1),n.lineTo(s.x2,s.y2),n.lineTo(s.x3,s.y3)}getCaretPosition(e,n,r){const{xAlign:i,yAlign:s}=this,{caretSize:o,cornerRadius:a}=r,{topLeft:l,topRight:u,bottomLeft:h,bottomRight:f}=Qi(a),{x:d,y:g}=e,{width:_,height:y}=n;let E,w,m,S,C,O;return s==="center"?(C=g+y/2,i==="left"?(E=d,w=E-o,S=C+o,O=C-o):(E=d+_,w=E+o,S=C-o,O=C+o),m=E):(i==="left"?w=d+Math.max(l,h)+o:i==="right"?w=d+_-Math.max(u,f)-o:w=this.caretX,s==="top"?(S=g,C=S-o,E=w-o,m=w+o):(S=g+y,C=S+o,E=w+o,m=w-o),O=S),{x1:E,x2:w,x3:m,y1:S,y2:C,y3:O}}drawTitle(e,n,r){const i=this.title,s=i.length;let o,a,l;if(s){const u=Ks(r.rtl,this.x,this.width);for(e.x=Du(this,r.titleAlign,r),n.textAlign=u.textAlign(r.titleAlign),n.textBaseline="middle",o=yt(r.titleFont),a=r.titleSpacing,n.fillStyle=r.titleColor,n.font=o.string,l=0;l<s;++l)n.fillText(i[l],u.x(e.x),e.y+o.lineHeight/2),e.y+=o.lineHeight+a,l+1===s&&(e.y+=r.titleMarginBottom-a)}}_drawColorBox(e,n,r,i,s){const o=this.labelColors[r],a=this.labelPointStyles[r],{boxHeight:l,boxWidth:u}=s,h=yt(s.bodyFont),f=Du(this,"left",s),d=i.x(f),g=l<h.lineHeight?(h.lineHeight-l)/2:0,_=n.y+g;if(s.usePointStyle){const y={radius:Math.min(u,l)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},E=i.leftForLtr(d,u)+u/2,w=_+l/2;e.strokeStyle=s.multiKeyBackground,e.fillStyle=s.multiKeyBackground,ig(e,y,E,w),e.strokeStyle=o.borderColor,e.fillStyle=o.backgroundColor,ig(e,y,E,w)}else{e.lineWidth=be(o.borderWidth)?Math.max(...Object.values(o.borderWidth)):o.borderWidth||1,e.strokeStyle=o.borderColor,e.setLineDash(o.borderDash||[]),e.lineDashOffset=o.borderDashOffset||0;const y=i.leftForLtr(d,u),E=i.leftForLtr(i.xPlus(d,1),u-2),w=Qi(o.borderRadius);Object.values(w).some(m=>m!==0)?(e.beginPath(),e.fillStyle=s.multiKeyBackground,al(e,{x:y,y:_,w:u,h:l,radius:w}),e.fill(),e.stroke(),e.fillStyle=o.backgroundColor,e.beginPath(),al(e,{x:E,y:_+1,w:u-2,h:l-2,radius:w}),e.fill()):(e.fillStyle=s.multiKeyBackground,e.fillRect(y,_,u,l),e.strokeRect(y,_,u,l),e.fillStyle=o.backgroundColor,e.fillRect(E,_+1,u-2,l-2))}e.fillStyle=this.labelTextColors[r]}drawBody(e,n,r){const{body:i}=this,{bodySpacing:s,bodyAlign:o,displayColors:a,boxHeight:l,boxWidth:u,boxPadding:h}=r,f=yt(r.bodyFont);let d=f.lineHeight,g=0;const _=Ks(r.rtl,this.x,this.width),y=function(T){n.fillText(T,_.x(e.x+g),e.y+d/2),e.y+=d+s},E=_.textAlign(o);let w,m,S,C,O,M,R;for(n.textAlign=o,n.textBaseline="middle",n.font=f.string,e.x=Du(this,E,r),n.fillStyle=r.bodyColor,Ne(this.beforeBody,y),g=a&&E!=="right"?o==="center"?u/2+h:u+2+h:0,C=0,M=i.length;C<M;++C){for(w=i[C],m=this.labelTextColors[C],n.fillStyle=m,Ne(w.before,y),S=w.lines,a&&S.length&&(this._drawColorBox(n,e,C,_,r),d=Math.max(f.lineHeight,l)),O=0,R=S.length;O<R;++O)y(S[O]),d=f.lineHeight;Ne(w.after,y)}g=0,d=f.lineHeight,Ne(this.afterBody,y),e.y-=s}drawFooter(e,n,r){const i=this.footer,s=i.length;let o,a;if(s){const l=Ks(r.rtl,this.x,this.width);for(e.x=Du(this,r.footerAlign,r),e.y+=r.footerMarginTop,n.textAlign=l.textAlign(r.footerAlign),n.textBaseline="middle",o=yt(r.footerFont),n.fillStyle=r.footerColor,n.font=o.string,a=0;a<s;++a)n.fillText(i[a],l.x(e.x),e.y+o.lineHeight/2),e.y+=o.lineHeight+r.footerSpacing}}drawBackground(e,n,r,i){const{xAlign:s,yAlign:o}=this,{x:a,y:l}=e,{width:u,height:h}=r,{topLeft:f,topRight:d,bottomLeft:g,bottomRight:_}=Qi(i.cornerRadius);n.fillStyle=i.backgroundColor,n.strokeStyle=i.borderColor,n.lineWidth=i.borderWidth,n.beginPath(),n.moveTo(a+f,l),o==="top"&&this.drawCaret(e,n,r,i),n.lineTo(a+u-d,l),n.quadraticCurveTo(a+u,l,a+u,l+d),o==="center"&&s==="right"&&this.drawCaret(e,n,r,i),n.lineTo(a+u,l+h-_),n.quadraticCurveTo(a+u,l+h,a+u-_,l+h),o==="bottom"&&this.drawCaret(e,n,r,i),n.lineTo(a+g,l+h),n.quadraticCurveTo(a,l+h,a,l+h-g),o==="center"&&s==="left"&&this.drawCaret(e,n,r,i),n.lineTo(a,l+f),n.quadraticCurveTo(a,l,a+f,l),n.closePath(),n.fill(),i.borderWidth>0&&n.stroke()}_updateAnimationTarget(e){const n=this.chart,r=this.$animations,i=r&&r.x,s=r&&r.y;if(i||s){const o=pa[e.position].call(this,this._active,this._eventPosition);if(!o)return;const a=this._size=I0(this,e),l=Object.assign({},o,this._size),u=A0(n,e,l),h=C0(e,l,u,n);(i._to!==h.x||s._to!==h.y)&&(this.xAlign=u.xAlign,this.yAlign=u.yAlign,this.width=a.width,this.height=a.height,this.caretX=o.x,this.caretY=o.y,this._resolveAnimations().update(this,h))}}_willRender(){return!!this.opacity}draw(e){const n=this.options.setContext(this.getContext());let r=this.opacity;if(!r)return;this._updateAnimationTarget(n);const i={width:this.width,height:this.height},s={x:this.x,y:this.y};r=Math.abs(r)<.001?0:r;const o=Ut(n.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;n.enabled&&a&&(e.save(),e.globalAlpha=r,this.drawBackground(s,e,i,n),LS(e,n.textDirection),s.y+=o.top,this.drawTitle(s,e,n),this.drawBody(s,e,n),this.drawFooter(s,e,n),MS(e,n.textDirection),e.restore())}getActiveElements(){return this._active||[]}setActiveElements(e,n){const r=this._active,i=e.map(({datasetIndex:a,index:l})=>{const u=this.chart.getDatasetMeta(a);if(!u)throw new Error("Cannot find a dataset at index "+a);return{datasetIndex:a,element:u.data[l],index:l}}),s=!Kc(r,i),o=this._positionChanged(i,n);(s||o)&&(this._active=i,this._eventPosition=n,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(e,n,r=!0){if(n&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const i=this.options,s=this._active||[],o=this._getActiveElements(e,s,n,r),a=this._positionChanged(o,e),l=n||!Kc(o,s)||a;return l&&(this._active=o,(i.enabled||i.external)&&(this._eventPosition={x:e.x,y:e.y},this.update(!0,n))),l}_getActiveElements(e,n,r,i){const s=this.options;if(e.type==="mouseout")return[];if(!i)return n.filter(a=>this.chart.data.datasets[a.datasetIndex]&&this.chart.getDatasetMeta(a.datasetIndex).controller.getParsed(a.index)!==void 0);const o=this.chart.getElementsAtEventForMode(e,s.mode,s,r);return s.reverse&&o.reverse(),o}_positionChanged(e,n){const{caretX:r,caretY:i,options:s}=this,o=pa[s.position].call(this,e,n);return o!==!1&&(r!==o.x||i!==o.y)}}ne(cg,"positioners",pa);var sT={id:"tooltip",_element:cg,positioners:pa,afterInit(t,e,n){n&&(t.tooltip=new cg({chart:t,options:n}))},beforeUpdate(t,e,n){t.tooltip&&t.tooltip.initialize(n)},reset(t,e,n){t.tooltip&&t.tooltip.initialize(n)},afterDraw(t){const e=t.tooltip;if(e&&e._willRender()){const n={tooltip:e};if(t.notifyPlugins("beforeTooltipDraw",{...n,cancelable:!0})===!1)return;e.draw(t.ctx),t.notifyPlugins("afterTooltipDraw",n)}},afterEvent(t,e){if(t.tooltip){const n=e.replay;t.tooltip.handleEvent(e.event,n,e.inChartArea)&&(e.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(t,e)=>e.bodyFont.size,boxWidth:(t,e)=>e.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:iT},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:t=>t!=="filter"&&t!=="itemSort"&&t!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]};const nL=(t,e,n,r)=>(typeof e=="string"?(n=t.push(e)-1,r.unshift({index:n,label:e})):isNaN(e)&&(n=null),n);function rL(t,e,n,r){const i=t.indexOf(e);if(i===-1)return nL(t,e,n,r);const s=t.lastIndexOf(e);return i!==s?n:i}const iL=(t,e)=>t===null?null:Bt(Math.round(t),0,e);function O0(t){const e=this.getLabels();return t>=0&&t<e.length?e[t]:t}class hg extends hs{constructor(e){super(e),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(e){const n=this._addedLabels;if(n.length){const r=this.getLabels();for(const{index:i,label:s}of n)r[i]===s&&r.splice(i,1);this._addedLabels=[]}super.init(e)}parse(e,n){if(Ce(e))return null;const r=this.getLabels();return n=isFinite(n)&&r[n]===e?n:rL(r,e,ve(n,e),this._addedLabels),iL(n,r.length-1)}determineDataLimits(){const{minDefined:e,maxDefined:n}=this.getUserBounds();let{min:r,max:i}=this.getMinMax(!0);this.options.bounds==="ticks"&&(e||(r=0),n||(i=this.getLabels().length-1)),this.min=r,this.max=i}buildTicks(){const e=this.min,n=this.max,r=this.options.offset,i=[];let s=this.getLabels();s=e===0&&n===s.length-1?s:s.slice(e,n+1),this._valueRange=Math.max(s.length-(r?0:1),1),this._startValue=this.min-(r?.5:0);for(let o=e;o<=n;o++)i.push({value:o});return i}getLabelForValue(e){return O0.call(this,e)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(e){return typeof e!="number"&&(e=this.parse(e)),e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getPixelForTick(e){const n=this.ticks;return e<0||e>n.length-1?null:this.getPixelForValue(n[e].value)}getValueForPixel(e){return Math.round(this._startValue+this.getDecimalForPixel(e)*this._valueRange)}getBasePixel(){return this.bottom}}ne(hg,"id","category"),ne(hg,"defaults",{ticks:{callback:O0}});function sL(t,e){const n=[],{bounds:i,step:s,min:o,max:a,precision:l,count:u,maxTicks:h,maxDigits:f,includeBounds:d}=t,g=s||1,_=h-1,{min:y,max:E}=e,w=!Ce(o),m=!Ce(a),S=!Ce(u),C=(E-y)/(f+1);let O=P2((E-y)/_/g)*g,M,R,T,b;if(O<1e-14&&!w&&!m)return[{value:y},{value:E}];b=Math.ceil(E/O)-Math.floor(y/O),b>_&&(O=P2(b*O/_/g)*g),Ce(l)||(M=Math.pow(10,l),O=Math.ceil(O*M)/M),i==="ticks"?(R=Math.floor(y/O)*O,T=Math.ceil(E/O)*O):(R=y,T=E),w&&m&&s&&fP((a-o)/s,O/1e3)?(b=Math.round(Math.min((a-o)/O,h)),O=(a-o)/b,R=o,T=a):S?(R=w?o:R,T=m?a:T,b=u-1,O=(T-R)/b):(b=(T-R)/O,Pa(b,Math.round(b),O/1e3)?b=Math.round(b):b=Math.ceil(b));const x=Math.max(k2(O),k2(R));M=Math.pow(10,Ce(l)?x:l),R=Math.round(R*M)/M,T=Math.round(T*M)/M;let P=0;for(w&&(d&&R!==o?(n.push({value:o}),R<o&&P++,Pa(Math.round((R+P*O)*M)/M,o,L0(o,C,t))&&P++):R<o&&P++);P<b;++P){const k=Math.round((R+P*O)*M)/M;if(m&&k>a)break;n.push({value:k})}return m&&d&&T!==a?n.length&&Pa(n[n.length-1].value,a,L0(a,C,t))?n[n.length-1].value=a:n.push({value:a}):(!m||T===a)&&n.push({value:T}),n}function L0(t,e,{horizontal:n,minRotation:r}){const i=Qn(r),s=(n?Math.sin(i):Math.cos(i))||.001,o=.75*e*(""+t).length;return Math.min(e/s,o)}class th extends hs{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(e,n){return Ce(e)||(typeof e=="number"||e instanceof Number)&&!isFinite(+e)?null:+e}handleTickRangeOptions(){const{beginAtZero:e}=this.options,{minDefined:n,maxDefined:r}=this.getUserBounds();let{min:i,max:s}=this;const o=l=>i=n?i:l,a=l=>s=r?s:l;if(e){const l=Jn(i),u=Jn(s);l<0&&u<0?a(0):l>0&&u>0&&o(0)}if(i===s){let l=s===0?1:Math.abs(s*.05);a(s+l),e||o(i-l)}this.min=i,this.max=s}getTickLimit(){const e=this.options.ticks;let{maxTicksLimit:n,stepSize:r}=e,i;return r?(i=Math.ceil(this.max/r)-Math.floor(this.min/r)+1,i>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${r} would result generating up to ${i} ticks. Limiting to 1000.`),i=1e3)):(i=this.computeTickLimit(),n=n||11),n&&(i=Math.min(n,i)),i}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const e=this.options,n=e.ticks;let r=this.getTickLimit();r=Math.max(2,r);const i={maxTicks:r,bounds:e.bounds,min:e.min,max:e.max,precision:n.precision,step:n.stepSize,count:n.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:n.minRotation||0,includeBounds:n.includeBounds!==!1},s=this._range||this,o=sL(i,s);return e.bounds==="ticks"&&vS(o,this,"value"),e.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){const e=this.ticks;let n=this.min,r=this.max;if(super.configure(),this.options.offset&&e.length){const i=(r-n)/Math.max(e.length-1,1)/2;n-=i,r+=i}this._startValue=n,this._endValue=r,this._valueRange=r-n}getLabelForValue(e){return Jh(e,this.chart.options.locale,this.options.ticks.format)}}class fg extends th{determineDataLimits(){const{min:e,max:n}=this.getMinMax(!0);this.min=at(e)?e:0,this.max=at(n)?n:1,this.handleTickRangeOptions()}computeTickLimit(){const e=this.isHorizontal(),n=e?this.width:this.height,r=Qn(this.options.ticks.minRotation),i=(e?Math.sin(r):Math.cos(r))||.001,s=this._resolveTickFontOptions(0);return Math.ceil(n/Math.min(40,s.lineHeight/i))}getPixelForValue(e){return e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getValueForPixel(e){return this._startValue+this.getDecimalForPixel(e)*this._valueRange}}ne(fg,"id","linear"),ne(fg,"defaults",{ticks:{callback:Zh.formatters.numeric}});const ul=t=>Math.floor(Wr(t)),Mi=(t,e)=>Math.pow(10,ul(t)+e);function M0(t){return t/Math.pow(10,ul(t))===1}function D0(t,e,n){const r=Math.pow(10,n),i=Math.floor(t/r);return Math.ceil(e/r)-i}function oL(t,e){const n=e-t;let r=ul(n);for(;D0(t,e,r)>10;)r++;for(;D0(t,e,r)<10;)r--;return Math.min(r,ul(t))}function aL(t,{min:e,max:n}){e=hn(t.min,e);const r=[],i=ul(e);let s=oL(e,n),o=s<0?Math.pow(10,Math.abs(s)):1;const a=Math.pow(10,s),l=i>s?Math.pow(10,i):0,u=Math.round((e-l)*o)/o,h=Math.floor((e-l)/a/10)*a*10;let f=Math.floor((u-h)/Math.pow(10,s)),d=hn(t.min,Math.round((l+h+f*Math.pow(10,s))*o)/o);for(;d<n;)r.push({value:d,major:M0(d),significand:f}),f>=10?f=f<15?15:20:f++,f>=20&&(s++,f=2,o=s>=0?1:o),d=Math.round((l+h+f*Math.pow(10,s))*o)/o;const g=hn(t.max,d);return r.push({value:g,major:M0(g),significand:f}),r}class N0 extends hs{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(e,n){const r=th.prototype.parse.apply(this,[e,n]);if(r===0){this._zero=!0;return}return at(r)&&r>0?r:null}determineDataLimits(){const{min:e,max:n}=this.getMinMax(!0);this.min=at(e)?Math.max(0,e):null,this.max=at(n)?Math.max(0,n):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!at(this._userMin)&&(this.min=e===Mi(this.min,0)?Mi(this.min,-1):Mi(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:e,maxDefined:n}=this.getUserBounds();let r=this.min,i=this.max;const s=a=>r=e?r:a,o=a=>i=n?i:a;r===i&&(r<=0?(s(1),o(10)):(s(Mi(r,-1)),o(Mi(i,1)))),r<=0&&s(Mi(i,-1)),i<=0&&o(Mi(r,1)),this.min=r,this.max=i}buildTicks(){const e=this.options,n={min:this._userMin,max:this._userMax},r=aL(n,this);return e.bounds==="ticks"&&vS(r,this,"value"),e.reverse?(r.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),r}getLabelForValue(e){return e===void 0?"0":Jh(e,this.chart.options.locale,this.options.ticks.format)}configure(){const e=this.min;super.configure(),this._startValue=Wr(e),this._valueRange=Wr(this.max)-Wr(e)}getPixelForValue(e){return(e===void 0||e===0)&&(e=this.min),e===null||isNaN(e)?NaN:this.getPixelForDecimal(e===this.min?0:(Wr(e)-this._startValue)/this._valueRange)}getValueForPixel(e){const n=this.getDecimalForPixel(e);return Math.pow(10,this._startValue+n*this._valueRange)}}ne(N0,"id","logarithmic"),ne(N0,"defaults",{ticks:{callback:Zh.formatters.logarithmic,major:{enabled:!0}}});function dg(t){const e=t.ticks;if(e.display&&t.display){const n=Ut(e.backdropPadding);return ve(e.font&&e.font.size,lt.font.size)+n.height}return 0}function lL(t,e,n){return n=Ye(n)?n:[n],{w:kP(t,e.string,n),h:n.length*e.lineHeight}}function V0(t,e,n,r,i){return t===r||t===i?{start:e-n/2,end:e+n/2}:t<r||t>i?{start:e-n,end:e}:{start:e,end:e+n}}function uL(t){const e={l:t.left+t._padding.left,r:t.right-t._padding.right,t:t.top+t._padding.top,b:t.bottom-t._padding.bottom},n=Object.assign({},e),r=[],i=[],s=t._pointLabels.length,o=t.options.pointLabels,a=o.centerPointLabels?Xe/s:0;for(let l=0;l<s;l++){const u=o.setContext(t.getPointLabelContext(l));i[l]=u.padding;const h=t.getPointPosition(l,t.drawingArea+i[l],a),f=yt(u.font),d=lL(t.ctx,f,t._pointLabels[l]);r[l]=d;const g=dn(t.getIndexAngle(l)+a),_=Math.round(Zm(g)),y=V0(_,h.x,d.w,0,180),E=V0(_,h.y,d.h,90,270);cL(n,e,g,y,E)}t.setCenterPoint(e.l-n.l,n.r-e.r,e.t-n.t,n.b-e.b),t._pointLabelItems=dL(t,r,i)}function cL(t,e,n,r,i){const s=Math.abs(Math.sin(n)),o=Math.abs(Math.cos(n));let a=0,l=0;r.start<e.l?(a=(e.l-r.start)/s,t.l=Math.min(t.l,e.l-a)):r.end>e.r&&(a=(r.end-e.r)/s,t.r=Math.max(t.r,e.r+a)),i.start<e.t?(l=(e.t-i.start)/o,t.t=Math.min(t.t,e.t-l)):i.end>e.b&&(l=(i.end-e.b)/o,t.b=Math.max(t.b,e.b+l))}function hL(t,e,n){const r=t.drawingArea,{extra:i,additionalAngle:s,padding:o,size:a}=n,l=t.getPointPosition(e,r+i+o,s),u=Math.round(Zm(dn(l.angle+ht))),h=mL(l.y,a.h,u),f=pL(u),d=gL(l.x,a.w,f);return{visible:!0,x:l.x,y:h,textAlign:f,left:d,top:h,right:d+a.w,bottom:h+a.h}}function fL(t,e){if(!e)return!0;const{left:n,top:r,right:i,bottom:s}=t;return!(pr({x:n,y:r},e)||pr({x:n,y:s},e)||pr({x:i,y:r},e)||pr({x:i,y:s},e))}function dL(t,e,n){const r=[],i=t._pointLabels.length,s=t.options,{centerPointLabels:o,display:a}=s.pointLabels,l={extra:dg(s)/2,additionalAngle:o?Xe/i:0};let u;for(let h=0;h<i;h++){l.padding=n[h],l.size=e[h];const f=hL(t,h,l);r.push(f),a==="auto"&&(f.visible=fL(f,u),f.visible&&(u=f))}return r}function pL(t){return t===0||t===180?"center":t<180?"left":"right"}function gL(t,e,n){return n==="right"?t-=e:n==="center"&&(t-=e/2),t}function mL(t,e,n){return n===90||n===270?t-=e/2:(n>270||n<90)&&(t-=e),t}function _L(t,e,n){const{left:r,top:i,right:s,bottom:o}=n,{backdropColor:a}=e;if(!Ce(a)){const l=Qi(e.borderRadius),u=Ut(e.backdropPadding);t.fillStyle=a;const h=r-u.left,f=i-u.top,d=s-r+u.width,g=o-i+u.height;Object.values(l).some(_=>_!==0)?(t.beginPath(),al(t,{x:h,y:f,w:d,h:g,radius:l}),t.fill()):t.fillRect(h,f,d,g)}}function yL(t,e){const{ctx:n,options:{pointLabels:r}}=t;for(let i=e-1;i>=0;i--){const s=t._pointLabelItems[i];if(!s.visible)continue;const o=r.setContext(t.getPointLabelContext(i));_L(n,o,s);const a=yt(o.font),{x:l,y:u,textAlign:h}=s;is(n,t._pointLabels[i],l,u+a.lineHeight/2,a,{color:o.color,textAlign:h,textBaseline:"middle"})}}function oT(t,e,n,r){const{ctx:i}=t;if(n)i.arc(t.xCenter,t.yCenter,e,0,Ge);else{let s=t.getPointPosition(0,e);i.moveTo(s.x,s.y);for(let o=1;o<r;o++)s=t.getPointPosition(o,e),i.lineTo(s.x,s.y)}}function vL(t,e,n,r,i){const s=t.ctx,o=e.circular,{color:a,lineWidth:l}=e;!o&&!r||!a||!l||n<0||(s.save(),s.strokeStyle=a,s.lineWidth=l,s.setLineDash(i.dash||[]),s.lineDashOffset=i.dashOffset,s.beginPath(),oT(t,n,o,r),s.closePath(),s.stroke(),s.restore())}function wL(t,e,n){return Ti(t,{label:n,index:e,type:"pointLabel"})}class ga extends th{constructor(e){super(e),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const e=this._padding=Ut(dg(this.options)/2),n=this.width=this.maxWidth-e.width,r=this.height=this.maxHeight-e.height;this.xCenter=Math.floor(this.left+n/2+e.left),this.yCenter=Math.floor(this.top+r/2+e.top),this.drawingArea=Math.floor(Math.min(n,r)/2)}determineDataLimits(){const{min:e,max:n}=this.getMinMax(!1);this.min=at(e)&&!isNaN(e)?e:0,this.max=at(n)&&!isNaN(n)?n:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/dg(this.options))}generateTickLabels(e){th.prototype.generateTickLabels.call(this,e),this._pointLabels=this.getLabels().map((n,r)=>{const i=je(this.options.pointLabels.callback,[n,r],this);return i||i===0?i:""}).filter((n,r)=>this.chart.getDataVisibility(r))}fit(){const e=this.options;e.display&&e.pointLabels.display?uL(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(e,n,r,i){this.xCenter+=Math.floor((e-n)/2),this.yCenter+=Math.floor((r-i)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(e,n,r,i))}getIndexAngle(e){const n=Ge/(this._pointLabels.length||1),r=this.options.startAngle||0;return dn(e*n+Qn(r))}getDistanceFromCenterForValue(e){if(Ce(e))return NaN;const n=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-e)*n:(e-this.min)*n}getValueForDistanceFromCenter(e){if(Ce(e))return NaN;const n=e/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-n:this.min+n}getPointLabelContext(e){const n=this._pointLabels||[];if(e>=0&&e<n.length){const r=n[e];return wL(this.getContext(),e,r)}}getPointPosition(e,n,r=0){const i=this.getIndexAngle(e)-ht+r;return{x:Math.cos(i)*n+this.xCenter,y:Math.sin(i)*n+this.yCenter,angle:i}}getPointPositionForValue(e,n){return this.getPointPosition(e,this.getDistanceFromCenterForValue(n))}getBasePosition(e){return this.getPointPositionForValue(e||0,this.getBaseValue())}getPointLabelPosition(e){const{left:n,top:r,right:i,bottom:s}=this._pointLabelItems[e];return{left:n,top:r,right:i,bottom:s}}drawBackground(){const{backgroundColor:e,grid:{circular:n}}=this.options;if(e){const r=this.ctx;r.save(),r.beginPath(),oT(this,this.getDistanceFromCenterForValue(this._endValue),n,this._pointLabels.length),r.closePath(),r.fillStyle=e,r.fill(),r.restore()}}drawGrid(){const e=this.ctx,n=this.options,{angleLines:r,grid:i,border:s}=n,o=this._pointLabels.length;let a,l,u;if(n.pointLabels.display&&yL(this,o),i.display&&this.ticks.forEach((h,f)=>{if(f!==0||f===0&&this.min<0){l=this.getDistanceFromCenterForValue(h.value);const d=this.getContext(f),g=i.setContext(d),_=s.setContext(d);vL(this,g,l,o,_)}}),r.display){for(e.save(),a=o-1;a>=0;a--){const h=r.setContext(this.getPointLabelContext(a)),{color:f,lineWidth:d}=h;!d||!f||(e.lineWidth=d,e.strokeStyle=f,e.setLineDash(h.borderDash),e.lineDashOffset=h.borderDashOffset,l=this.getDistanceFromCenterForValue(n.reverse?this.min:this.max),u=this.getPointPosition(a,l),e.beginPath(),e.moveTo(this.xCenter,this.yCenter),e.lineTo(u.x,u.y),e.stroke())}e.restore()}}drawBorder(){}drawLabels(){const e=this.ctx,n=this.options,r=n.ticks;if(!r.display)return;const i=this.getIndexAngle(0);let s,o;e.save(),e.translate(this.xCenter,this.yCenter),e.rotate(i),e.textAlign="center",e.textBaseline="middle",this.ticks.forEach((a,l)=>{if(l===0&&this.min>=0&&!n.reverse)return;const u=r.setContext(this.getContext(l)),h=yt(u.font);if(s=this.getDistanceFromCenterForValue(this.ticks[l].value),u.showLabelBackdrop){e.font=h.string,o=e.measureText(a.label).width,e.fillStyle=u.backdropColor;const f=Ut(u.backdropPadding);e.fillRect(-o/2-f.left,-s-h.size/2-f.top,o+f.width,h.size+f.height)}is(e,a.label,0,-s,h,{color:u.color,strokeColor:u.textStrokeColor,strokeWidth:u.textStrokeWidth})}),e.restore()}drawTitle(){}}ne(ga,"id","radialLinear"),ne(ga,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:Zh.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(e){return e},padding:5,centerPointLabels:!1}}),ne(ga,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),ne(ga,"descriptors",{angleLines:{_fallback:"grid"}});const rf={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},nn=Object.keys(rf);function F0(t,e){return t-e}function z0(t,e){if(Ce(e))return null;const n=t._adapter,{parser:r,round:i,isoWeekday:s}=t._parseOpts;let o=e;return typeof r=="function"&&(o=r(o)),at(o)||(o=typeof r=="string"?n.parse(o,r):n.parse(o)),o===null?null:(i&&(o=i==="week"&&(sl(s)||s===!0)?n.startOf(o,"isoWeek",s):n.startOf(o,i)),+o)}function j0(t,e,n,r){const i=nn.length;for(let s=nn.indexOf(t);s<i-1;++s){const o=rf[nn[s]],a=o.steps?o.steps:Number.MAX_SAFE_INTEGER;if(o.common&&Math.ceil((n-e)/(a*o.size))<=r)return nn[s]}return nn[i-1]}function EL(t,e,n,r,i){for(let s=nn.length-1;s>=nn.indexOf(n);s--){const o=nn[s];if(rf[o].common&&t._adapter.diff(i,r,o)>=e-1)return o}return nn[n?nn.indexOf(n):0]}function SL(t){for(let e=nn.indexOf(t)+1,n=nn.length;e<n;++e)if(rf[nn[e]].common)return nn[e]}function B0(t,e,n){if(!n)t[e]=!0;else if(n.length){const{lo:r,hi:i}=e_(n,e),s=n[r]>=e?n[r]:n[i];t[s]=!0}}function TL(t,e,n,r){const i=t._adapter,s=+i.startOf(e[0].value,r),o=e[e.length-1].value;let a,l;for(a=s;a<=o;a=+i.add(a,1,r))l=n[a],l>=0&&(e[l].major=!0);return e}function $0(t,e,n){const r=[],i={},s=e.length;let o,a;for(o=0;o<s;++o)a=e[o],i[a]=o,r.push({value:a,major:!1});return s===0||!n?r:TL(t,r,i,n)}class nh extends hs{constructor(e){super(e),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(e,n={}){const r=e.time||(e.time={}),i=this._adapter=new Gk._date(e.adapters.date);i.init(n),Ca(r.displayFormats,i.formats()),this._parseOpts={parser:r.parser,round:r.round,isoWeekday:r.isoWeekday},super.init(e),this._normalized=n.normalized}parse(e,n){return e===void 0?null:z0(this,e)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const e=this.options,n=this._adapter,r=e.time.unit||"day";let{min:i,max:s,minDefined:o,maxDefined:a}=this.getUserBounds();function l(u){!o&&!isNaN(u.min)&&(i=Math.min(i,u.min)),!a&&!isNaN(u.max)&&(s=Math.max(s,u.max))}(!o||!a)&&(l(this._getLabelBounds()),(e.bounds!=="ticks"||e.ticks.source!=="labels")&&l(this.getMinMax(!1))),i=at(i)&&!isNaN(i)?i:+n.startOf(Date.now(),r),s=at(s)&&!isNaN(s)?s:+n.endOf(Date.now(),r)+1,this.min=Math.min(i,s-1),this.max=Math.max(i+1,s)}_getLabelBounds(){const e=this.getLabelTimestamps();let n=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY;return e.length&&(n=e[0],r=e[e.length-1]),{min:n,max:r}}buildTicks(){const e=this.options,n=e.time,r=e.ticks,i=r.source==="labels"?this.getLabelTimestamps():this._generate();e.bounds==="ticks"&&i.length&&(this.min=this._userMin||i[0],this.max=this._userMax||i[i.length-1]);const s=this.min,o=this.max,a=mP(i,s,o);return this._unit=n.unit||(r.autoSkip?j0(n.minUnit,this.min,this.max,this._getLabelCapacity(s)):EL(this,a.length,n.minUnit,this.min,this.max)),this._majorUnit=!r.major.enabled||this._unit==="year"?void 0:SL(this._unit),this.initOffsets(i),e.reverse&&a.reverse(),$0(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(e=>+e.value))}initOffsets(e=[]){let n=0,r=0,i,s;this.options.offset&&e.length&&(i=this.getDecimalForValue(e[0]),e.length===1?n=1-i:n=(this.getDecimalForValue(e[1])-i)/2,s=this.getDecimalForValue(e[e.length-1]),e.length===1?r=s:r=(s-this.getDecimalForValue(e[e.length-2]))/2);const o=e.length<3?.5:.25;n=Bt(n,0,o),r=Bt(r,0,o),this._offsets={start:n,end:r,factor:1/(n+1+r)}}_generate(){const e=this._adapter,n=this.min,r=this.max,i=this.options,s=i.time,o=s.unit||j0(s.minUnit,n,r,this._getLabelCapacity(n)),a=ve(i.ticks.stepSize,1),l=o==="week"?s.isoWeekday:!1,u=sl(l)||l===!0,h={};let f=n,d,g;if(u&&(f=+e.startOf(f,"isoWeek",l)),f=+e.startOf(f,u?"day":o),e.diff(r,n,o)>1e5*a)throw new Error(n+" and "+r+" are too far apart with stepSize of "+a+" "+o);const _=i.ticks.source==="data"&&this.getDataTimestamps();for(d=f,g=0;d<r;d=+e.add(d,a,o),g++)B0(h,d,_);return(d===r||i.bounds==="ticks"||g===1)&&B0(h,d,_),Object.keys(h).sort(F0).map(y=>+y)}getLabelForValue(e){const n=this._adapter,r=this.options.time;return r.tooltipFormat?n.format(e,r.tooltipFormat):n.format(e,r.displayFormats.datetime)}format(e,n){const i=this.options.time.displayFormats,s=this._unit,o=n||i[s];return this._adapter.format(e,o)}_tickFormatFunction(e,n,r,i){const s=this.options,o=s.ticks.callback;if(o)return je(o,[e,n,r],this);const a=s.time.displayFormats,l=this._unit,u=this._majorUnit,h=l&&a[l],f=u&&a[u],d=r[n],g=u&&f&&d&&d.major;return this._adapter.format(e,i||(g?f:h))}generateTickLabels(e){let n,r,i;for(n=0,r=e.length;n<r;++n)i=e[n],i.label=this._tickFormatFunction(i.value,n,e)}getDecimalForValue(e){return e===null?NaN:(e-this.min)/(this.max-this.min)}getPixelForValue(e){const n=this._offsets,r=this.getDecimalForValue(e);return this.getPixelForDecimal((n.start+r)*n.factor)}getValueForPixel(e){const n=this._offsets,r=this.getDecimalForPixel(e)/n.factor-n.end;return this.min+r*(this.max-this.min)}_getLabelSize(e){const n=this.options.ticks,r=this.ctx.measureText(e).width,i=Qn(this.isHorizontal()?n.maxRotation:n.minRotation),s=Math.cos(i),o=Math.sin(i),a=this._resolveTickFontOptions(0).size;return{w:r*s+a*o,h:r*o+a*s}}_getLabelCapacity(e){const n=this.options.time,r=n.displayFormats,i=r[n.unit]||r.millisecond,s=this._tickFormatFunction(e,0,$0(this,[e],this._majorUnit),i),o=this._getLabelSize(s),a=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return a>0?a:1}getDataTimestamps(){let e=this._cache.data||[],n,r;if(e.length)return e;const i=this.getMatchingVisibleMetas();if(this._normalized&&i.length)return this._cache.data=i[0].controller.getAllParsedValues(this);for(n=0,r=i.length;n<r;++n)e=e.concat(i[n].controller.getAllParsedValues(this));return this._cache.data=this.normalize(e)}getLabelTimestamps(){const e=this._cache.labels||[];let n,r;if(e.length)return e;const i=this.getLabels();for(n=0,r=i.length;n<r;++n)e.push(z0(this,i[n]));return this._cache.labels=this._normalized?e:this.normalize(e)}normalize(e){return SS(e.sort(F0))}}ne(nh,"id","time"),ne(nh,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function Nu(t,e,n){let r=0,i=t.length-1,s,o,a,l;n?(e>=t[r].pos&&e<=t[i].pos&&({lo:r,hi:i}=Hi(t,"pos",e)),{pos:s,time:a}=t[r],{pos:o,time:l}=t[i]):(e>=t[r].time&&e<=t[i].time&&({lo:r,hi:i}=Hi(t,"time",e)),{time:s,pos:a}=t[r],{time:o,pos:l}=t[i]);const u=o-s;return u?a+(l-a)*(e-s)/u:a}class U0 extends nh{constructor(e){super(e),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const e=this._getTimestampsForTable(),n=this._table=this.buildLookupTable(e);this._minPos=Nu(n,this.min),this._tableRange=Nu(n,this.max)-this._minPos,super.initOffsets(e)}buildLookupTable(e){const{min:n,max:r}=this,i=[],s=[];let o,a,l,u,h;for(o=0,a=e.length;o<a;++o)u=e[o],u>=n&&u<=r&&i.push(u);if(i.length<2)return[{time:n,pos:0},{time:r,pos:1}];for(o=0,a=i.length;o<a;++o)h=i[o+1],l=i[o-1],u=i[o],Math.round((h+l)/2)!==u&&s.push({time:u,pos:o/(a-1)});return s}_generate(){const e=this.min,n=this.max;let r=super.getDataTimestamps();return(!r.includes(e)||!r.length)&&r.splice(0,0,e),(!r.includes(n)||r.length===1)&&r.push(n),r.sort((i,s)=>i-s)}_getTimestampsForTable(){let e=this._cache.all||[];if(e.length)return e;const n=this.getDataTimestamps(),r=this.getLabelTimestamps();return n.length&&r.length?e=this.normalize(n.concat(r)):e=n.length?n:r,e=this._cache.all=e,e}getDecimalForValue(e){return(Nu(this._table,e)-this._minPos)/this._tableRange}getValueForPixel(e){const n=this._offsets,r=this.getDecimalForPixel(e)/n.factor-n.end;return Nu(this._table,r*this._tableRange+this._minPos,!0)}}ne(U0,"id","timeseries"),ne(U0,"defaults",nh.defaults);const aT="label";function H0(t,e){typeof t=="function"?t(e):t&&(t.current=e)}function bL(t,e){const n=t.options;n&&e&&Object.assign(n,e)}function lT(t,e){t.labels=e}function uT(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:aT;const r=[];t.datasets=e.map(i=>{const s=t.datasets.find(o=>o[n]===i[n]);return!s||!i.data||r.includes(s)?{...i}:(r.push(s),Object.assign(s,i),s)})}function xL(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:aT;const n={labels:[],datasets:[]};return lT(n,t.labels),uT(n,t.datasets,e),n}function RL(t,e){const{height:n=150,width:r=300,redraw:i=!1,datasetIdKey:s,type:o,data:a,options:l,plugins:u=[],fallbackContent:h,updateMode:f,...d}=t,g=F.useRef(null),_=F.useRef(null),y=()=>{g.current&&(_.current=new Cl(g.current,{type:o,data:xL(a,s),options:l&&{...l},plugins:u}),H0(e,_.current))},E=()=>{H0(e,null),_.current&&(_.current.destroy(),_.current=null)};return F.useEffect(()=>{!i&&_.current&&l&&bL(_.current,l)},[i,l]),F.useEffect(()=>{!i&&_.current&&lT(_.current.config.data,a.labels)},[i,a.labels]),F.useEffect(()=>{!i&&_.current&&a.datasets&&uT(_.current.config.data,a.datasets,s)},[i,a.datasets]),F.useEffect(()=>{_.current&&(i?(E(),setTimeout(y)):_.current.update(f))},[i,l,a.labels,a.datasets,f]),F.useEffect(()=>{_.current&&(E(),setTimeout(y))},[o]),F.useEffect(()=>(y(),()=>E()),[]),Zg.createElement("canvas",{ref:g,role:"img",height:n,width:r,...d},h)}const IL=F.forwardRef(RL);function Pl(t,e){return Cl.register(e),F.forwardRef((n,r)=>Zg.createElement(IL,{...n,ref:r,type:t}))}const AL=Pl("line",lc),W0=Pl("bar",ac),CL=Pl("radar",uc),q0=Pl("doughnut",Bs),PL=Pl("pie",sg);var cT={},hT={},sf={},fT={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0};t.default=e})(fT);var kL="Expected a function",G0=NaN,OL="[object Symbol]",LL=/^\s+|\s+$/g,ML=/^[-+]0x[0-9a-f]+$/i,DL=/^0b[01]+$/i,NL=/^0o[0-7]+$/i,VL=parseInt,FL=typeof iu=="object"&&iu&&iu.Object===Object&&iu,zL=typeof self=="object"&&self&&self.Object===Object&&self,jL=FL||zL||Function("return this")(),BL=Object.prototype,$L=BL.toString,UL=Math.max,HL=Math.min,Md=function(){return jL.Date.now()};function WL(t,e,n){var r,i,s,o,a,l,u=0,h=!1,f=!1,d=!0;if(typeof t!="function")throw new TypeError(kL);e=K0(e)||0,pg(n)&&(h=!!n.leading,f="maxWait"in n,s=f?UL(K0(n.maxWait)||0,e):s,d="trailing"in n?!!n.trailing:d);function g(M){var R=r,T=i;return r=i=void 0,u=M,o=t.apply(T,R),o}function _(M){return u=M,a=setTimeout(w,e),h?g(M):o}function y(M){var R=M-l,T=M-u,b=e-R;return f?HL(b,s-T):b}function E(M){var R=M-l,T=M-u;return l===void 0||R>=e||R<0||f&&T>=s}function w(){var M=Md();if(E(M))return m(M);a=setTimeout(w,y(M))}function m(M){return a=void 0,d&&r?g(M):(r=i=void 0,o)}function S(){a!==void 0&&clearTimeout(a),u=0,r=l=i=a=void 0}function C(){return a===void 0?o:m(Md())}function O(){var M=Md(),R=E(M);if(r=arguments,i=this,l=M,R){if(a===void 0)return _(l);if(f)return a=setTimeout(w,e),g(l)}return a===void 0&&(a=setTimeout(w,e)),o}return O.cancel=S,O.flush=C,O}function pg(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function qL(t){return!!t&&typeof t=="object"}function GL(t){return typeof t=="symbol"||qL(t)&&$L.call(t)==OL}function K0(t){if(typeof t=="number")return t;if(GL(t))return G0;if(pg(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=pg(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(LL,"");var n=DL.test(t);return n||NL.test(t)?VL(t.slice(2),n?2:8):ML.test(t)?G0:+t}var KL=WL,dT={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var s="",o=0;o<arguments.length;o++){var a=arguments[o];a&&(s=i(s,r(a)))}return s}function r(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return n.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var o="";for(var a in s)e.call(s,a)&&s[a]&&(o=i(o,a));return o}function i(s,o){return o?s?s+" "+o:s+o:s}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(dT);var of=dT.exports,ee={},h_={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=n(F);function n(i){return i&&i.__esModule?i:{default:i}}var r={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(s){return e.default.createElement("ul",{style:{display:"block"}},s)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(s){return e.default.createElement("button",null,s+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0,asNavFor:null,unslick:!1};t.default=r})(h_);Object.defineProperty(ee,"__esModule",{value:!0});ee.checkSpecKeys=ee.checkNavigable=ee.changeSlide=ee.canUseDOM=ee.canGoNext=void 0;ee.clamp=gT;ee.extractObject=void 0;ee.filterSettings=uM;ee.validSettings=ee.swipeStart=ee.swipeMove=ee.swipeEnd=ee.slidesOnRight=ee.slidesOnLeft=ee.slideHandler=ee.siblingDirection=ee.safePreventDefault=ee.lazyStartIndex=ee.lazySlidesOnRight=ee.lazySlidesOnLeft=ee.lazyEndIndex=ee.keyHandler=ee.initializedState=ee.getWidth=ee.getTrackLeft=ee.getTrackCSS=ee.getTrackAnimateCSS=ee.getTotalSlides=ee.getSwipeDirection=ee.getSlideCount=ee.getRequiredLazySlides=ee.getPreClones=ee.getPostClones=ee.getOnDemandLazySlides=ee.getNavigableIndexes=ee.getHeight=void 0;var QL=pT(F),YL=pT(h_);function pT(t){return t&&t.__esModule?t:{default:t}}function cl(t){"@babel/helpers - typeof";return cl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},cl(t)}function Q0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Ke(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Q0(Object(n),!0).forEach(function(r){XL(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Q0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function XL(t,e,n){return e=JL(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function JL(t){var e=ZL(t,"string");return cl(e)=="symbol"?e:String(e)}function ZL(t,e){if(cl(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(cl(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function gT(t,e,n){return Math.max(e,Math.min(t,n))}var Qs=ee.safePreventDefault=function(e){var n=["onTouchStart","onTouchMove","onWheel"];n.includes(e._reactName)||e.preventDefault()},mT=ee.getOnDemandLazySlides=function(e){for(var n=[],r=_T(e),i=yT(e),s=r;s<i;s++)e.lazyLoadedList.indexOf(s)<0&&n.push(s);return n};ee.getRequiredLazySlides=function(e){for(var n=[],r=_T(e),i=yT(e),s=r;s<i;s++)n.push(s);return n};var _T=ee.lazyStartIndex=function(e){return e.currentSlide-eM(e)},yT=ee.lazyEndIndex=function(e){return e.currentSlide+tM(e)},eM=ee.lazySlidesOnLeft=function(e){return e.centerMode?Math.floor(e.slidesToShow/2)+(parseInt(e.centerPadding)>0?1:0):0},tM=ee.lazySlidesOnRight=function(e){return e.centerMode?Math.floor((e.slidesToShow-1)/2)+1+(parseInt(e.centerPadding)>0?1:0):e.slidesToShow},gg=ee.getWidth=function(e){return e&&e.offsetWidth||0},vT=ee.getHeight=function(e){return e&&e.offsetHeight||0},wT=ee.getSwipeDirection=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r,i,s,o;return r=e.startX-e.curX,i=e.startY-e.curY,s=Math.atan2(i,r),o=Math.round(s*180/Math.PI),o<0&&(o=360-Math.abs(o)),o<=45&&o>=0||o<=360&&o>=315?"left":o>=135&&o<=225?"right":n===!0?o>=35&&o<=135?"up":"down":"vertical"},ET=ee.canGoNext=function(e){var n=!0;return e.infinite||(e.centerMode&&e.currentSlide>=e.slideCount-1||e.slideCount<=e.slidesToShow||e.currentSlide>=e.slideCount-e.slidesToShow)&&(n=!1),n};ee.extractObject=function(e,n){var r={};return n.forEach(function(i){return r[i]=e[i]}),r};ee.initializedState=function(e){var n=QL.default.Children.count(e.children),r=e.listRef,i=Math.ceil(gg(r)),s=e.trackRef&&e.trackRef.node,o=Math.ceil(gg(s)),a;if(e.vertical)a=i;else{var l=e.centerMode&&parseInt(e.centerPadding)*2;typeof e.centerPadding=="string"&&e.centerPadding.slice(-1)==="%"&&(l*=i/100),a=Math.ceil((i-l)/e.slidesToShow)}var u=r&&vT(r.querySelector('[data-index="0"]')),h=u*e.slidesToShow,f=e.currentSlide===void 0?e.initialSlide:e.currentSlide;e.rtl&&e.currentSlide===void 0&&(f=n-1-e.initialSlide);var d=e.lazyLoadedList||[],g=mT(Ke(Ke({},e),{},{currentSlide:f,lazyLoadedList:d}));d=d.concat(g);var _={slideCount:n,slideWidth:a,listWidth:i,trackWidth:o,currentSlide:f,slideHeight:u,listHeight:h,lazyLoadedList:d};return e.autoplaying===null&&e.autoplay&&(_.autoplaying="playing"),_};ee.slideHandler=function(e){var n=e.waitForAnimate,r=e.animating,i=e.fade,s=e.infinite,o=e.index,a=e.slideCount,l=e.lazyLoad,u=e.currentSlide,h=e.centerMode,f=e.slidesToScroll,d=e.slidesToShow,g=e.useCSS,_=e.lazyLoadedList;if(n&&r)return{};var y=o,E,w,m,S={},C={},O=s?o:gT(o,0,a-1);if(i){if(!s&&(o<0||o>=a))return{};o<0?y=o+a:o>=a&&(y=o-a),l&&_.indexOf(y)<0&&(_=_.concat(y)),S={animating:!0,currentSlide:y,lazyLoadedList:_,targetSlide:y},C={animating:!1,targetSlide:y}}else E=y,y<0?(E=y+a,s?a%f!==0&&(E=a-a%f):E=0):!ET(e)&&y>u?y=E=u:h&&y>=a?(y=s?a:a-1,E=s?0:a-1):y>=a&&(E=y-a,s?a%f!==0&&(E=0):E=a-d),!s&&y+d>=a&&(E=a-d),w=ih(Ke(Ke({},e),{},{slideIndex:y})),m=ih(Ke(Ke({},e),{},{slideIndex:E})),s||(w===m&&(y=E),w=m),l&&(_=_.concat(mT(Ke(Ke({},e),{},{currentSlide:y})))),g?(S={animating:!0,currentSlide:E,trackStyle:ST(Ke(Ke({},e),{},{left:w})),lazyLoadedList:_,targetSlide:O},C={animating:!1,currentSlide:E,trackStyle:rh(Ke(Ke({},e),{},{left:m})),swipeLeft:null,targetSlide:O}):S={currentSlide:E,trackStyle:rh(Ke(Ke({},e),{},{left:m})),lazyLoadedList:_,targetSlide:O};return{state:S,nextState:C}};ee.changeSlide=function(e,n){var r,i,s,o,a,l=e.slidesToScroll,u=e.slidesToShow,h=e.slideCount,f=e.currentSlide,d=e.targetSlide,g=e.lazyLoad,_=e.infinite;if(o=h%l!==0,r=o?0:(h-f)%l,n.message==="previous")s=r===0?l:u-r,a=f-s,g&&!_&&(i=f-s,a=i===-1?h-1:i),_||(a=d-l);else if(n.message==="next")s=r===0?l:r,a=f+s,g&&!_&&(a=(f+l)%h+r),_||(a=d+l);else if(n.message==="dots")a=n.index*n.slidesToScroll;else if(n.message==="children"){if(a=n.index,_){var y=sM(Ke(Ke({},e),{},{targetSlide:a}));a>n.currentSlide&&y==="left"?a=a-h:a<n.currentSlide&&y==="right"&&(a=a+h)}}else n.message==="index"&&(a=Number(n.index));return a};ee.keyHandler=function(e,n,r){return e.target.tagName.match("TEXTAREA|INPUT|SELECT")||!n?"":e.keyCode===37?r?"next":"previous":e.keyCode===39?r?"previous":"next":""};ee.swipeStart=function(e,n,r){return e.target.tagName==="IMG"&&Qs(e),!n||!r&&e.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:e.touches?e.touches[0].pageX:e.clientX,startY:e.touches?e.touches[0].pageY:e.clientY,curX:e.touches?e.touches[0].pageX:e.clientX,curY:e.touches?e.touches[0].pageY:e.clientY}}};ee.swipeMove=function(e,n){var r=n.scrolling,i=n.animating,s=n.vertical,o=n.swipeToSlide,a=n.verticalSwiping,l=n.rtl,u=n.currentSlide,h=n.edgeFriction,f=n.edgeDragged,d=n.onEdge,g=n.swiped,_=n.swiping,y=n.slideCount,E=n.slidesToScroll,w=n.infinite,m=n.touchObject,S=n.swipeEvent,C=n.listHeight,O=n.listWidth;if(!r){if(i)return Qs(e);s&&o&&a&&Qs(e);var M,R={},T=ih(n);m.curX=e.touches?e.touches[0].pageX:e.clientX,m.curY=e.touches?e.touches[0].pageY:e.clientY,m.swipeLength=Math.round(Math.sqrt(Math.pow(m.curX-m.startX,2)));var b=Math.round(Math.sqrt(Math.pow(m.curY-m.startY,2)));if(!a&&!_&&b>10)return{scrolling:!0};a&&(m.swipeLength=b);var x=(l?-1:1)*(m.curX>m.startX?1:-1);a&&(x=m.curY>m.startY?1:-1);var P=Math.ceil(y/E),k=wT(n.touchObject,a),A=m.swipeLength;return w||(u===0&&(k==="right"||k==="down")||u+1>=P&&(k==="left"||k==="up")||!ET(n)&&(k==="left"||k==="up"))&&(A=m.swipeLength*h,f===!1&&d&&(d(k),R.edgeDragged=!0)),!g&&S&&(S(k),R.swiped=!0),s?M=T+A*(C/O)*x:l?M=T-A*x:M=T+A*x,a&&(M=T+A*x),R=Ke(Ke({},R),{},{touchObject:m,swipeLeft:M,trackStyle:rh(Ke(Ke({},n),{},{left:M}))}),Math.abs(m.curX-m.startX)<Math.abs(m.curY-m.startY)*.8||m.swipeLength>10&&(R.swiping=!0,Qs(e)),R}};ee.swipeEnd=function(e,n){var r=n.dragging,i=n.swipe,s=n.touchObject,o=n.listWidth,a=n.touchThreshold,l=n.verticalSwiping,u=n.listHeight,h=n.swipeToSlide,f=n.scrolling,d=n.onSwipe,g=n.targetSlide,_=n.currentSlide,y=n.infinite;if(!r)return i&&Qs(e),{};var E=l?u/a:o/a,w=wT(s,l),m={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(f||!s.swipeLength)return m;if(s.swipeLength>E){Qs(e),d&&d(w);var S,C,O=y?_:g;switch(w){case"left":case"up":C=O+X0(n),S=h?Y0(n,C):C,m.currentDirection=0;break;case"right":case"down":C=O-X0(n),S=h?Y0(n,C):C,m.currentDirection=1;break;default:S=O}m.triggerSlideHandler=S}else{var M=ih(n);m.trackStyle=ST(Ke(Ke({},n),{},{left:M}))}return m};var nM=ee.getNavigableIndexes=function(e){for(var n=e.infinite?e.slideCount*2:e.slideCount,r=e.infinite?e.slidesToShow*-1:0,i=e.infinite?e.slidesToShow*-1:0,s=[];r<n;)s.push(r),r=i+e.slidesToScroll,i+=Math.min(e.slidesToScroll,e.slidesToShow);return s},Y0=ee.checkNavigable=function(e,n){var r=nM(e),i=0;if(n>r[r.length-1])n=r[r.length-1];else for(var s in r){if(n<r[s]){n=i;break}i=r[s]}return n},X0=ee.getSlideCount=function(e){var n=e.centerMode?e.slideWidth*Math.floor(e.slidesToShow/2):0;if(e.swipeToSlide){var r,i=e.listRef,s=i.querySelectorAll&&i.querySelectorAll(".slick-slide")||[];if(Array.from(s).every(function(l){if(e.vertical){if(l.offsetTop+vT(l)/2>e.swipeLeft*-1)return r=l,!1}else if(l.offsetLeft-n+gg(l)/2>e.swipeLeft*-1)return r=l,!1;return!0}),!r)return 0;var o=e.rtl===!0?e.slideCount-e.currentSlide:e.currentSlide,a=Math.abs(r.dataset.index-o)||1;return a}else return e.slidesToScroll},f_=ee.checkSpecKeys=function(e,n){return n.reduce(function(r,i){return r&&e.hasOwnProperty(i)},!0)?null:console.error("Keys Missing:",e)},rh=ee.getTrackCSS=function(e){f_(e,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var n,r,i=e.slideCount+2*e.slidesToShow;e.vertical?r=i*e.slideHeight:n=iM(e)*e.slideWidth;var s={opacity:1,transition:"",WebkitTransition:""};if(e.useTransform){var o=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",a=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",l=e.vertical?"translateY("+e.left+"px)":"translateX("+e.left+"px)";s=Ke(Ke({},s),{},{WebkitTransform:o,transform:a,msTransform:l})}else e.vertical?s.top=e.left:s.left=e.left;return e.fade&&(s={opacity:1}),n&&(s.width=n),r&&(s.height=r),window&&!window.addEventListener&&window.attachEvent&&(e.vertical?s.marginTop=e.left+"px":s.marginLeft=e.left+"px"),s},ST=ee.getTrackAnimateCSS=function(e){f_(e,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var n=rh(e);return e.useTransform?(n.WebkitTransition="-webkit-transform "+e.speed+"ms "+e.cssEase,n.transition="transform "+e.speed+"ms "+e.cssEase):e.vertical?n.transition="top "+e.speed+"ms "+e.cssEase:n.transition="left "+e.speed+"ms "+e.cssEase,n},ih=ee.getTrackLeft=function(e){if(e.unslick)return 0;f_(e,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var n=e.slideIndex,r=e.trackRef,i=e.infinite,s=e.centerMode,o=e.slideCount,a=e.slidesToShow,l=e.slidesToScroll,u=e.slideWidth,h=e.listWidth,f=e.variableWidth,d=e.slideHeight,g=e.fade,_=e.vertical,y=0,E,w,m=0;if(g||e.slideCount===1)return 0;var S=0;if(i?(S=-dc(e),o%l!==0&&n+l>o&&(S=-(n>o?a-(n-o):o%l)),s&&(S+=parseInt(a/2))):(o%l!==0&&n+l>o&&(S=a-o%l),s&&(S=parseInt(a/2))),y=S*u,m=S*d,_?E=n*d*-1+m:E=n*u*-1+y,f===!0){var C,O=r&&r.node;if(C=n+dc(e),w=O&&O.childNodes[C],E=w?w.offsetLeft*-1:0,s===!0){C=i?n+dc(e):n,w=O&&O.children[C],E=0;for(var M=0;M<C;M++)E-=O&&O.children[M]&&O.children[M].offsetWidth;E-=parseInt(e.centerPadding),E+=w&&(h-w.offsetWidth)/2}}return E},dc=ee.getPreClones=function(e){return e.unslick||!e.infinite?0:e.variableWidth?e.slideCount:e.slidesToShow+(e.centerMode?1:0)},rM=ee.getPostClones=function(e){return e.unslick||!e.infinite?0:e.slideCount},iM=ee.getTotalSlides=function(e){return e.slideCount===1?1:dc(e)+e.slideCount+rM(e)},sM=ee.siblingDirection=function(e){return e.targetSlide>e.currentSlide?e.targetSlide>e.currentSlide+oM(e)?"left":"right":e.targetSlide<e.currentSlide-aM(e)?"right":"left"},oM=ee.slidesOnRight=function(e){var n=e.slidesToShow,r=e.centerMode,i=e.rtl,s=e.centerPadding;if(r){var o=(n-1)/2+1;return parseInt(s)>0&&(o+=1),i&&n%2===0&&(o+=1),o}return i?0:n-1},aM=ee.slidesOnLeft=function(e){var n=e.slidesToShow,r=e.centerMode,i=e.rtl,s=e.centerPadding;if(r){var o=(n-1)/2+1;return parseInt(s)>0&&(o+=1),!i&&n%2===0&&(o+=1),o}return i?n-1:0};ee.canUseDOM=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)};var lM=ee.validSettings=Object.keys(YL.default);function uM(t){return lM.reduce(function(e,n){return t.hasOwnProperty(n)&&(e[n]=t[n]),e},{})}var af={};Object.defineProperty(af,"__esModule",{value:!0});af.Track=void 0;var zr=TT(F),Dd=TT(of),Nd=ee;function TT(t){return t&&t.__esModule?t:{default:t}}function lo(t){"@babel/helpers - typeof";return lo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},lo(t)}function mg(){return mg=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},mg.apply(this,arguments)}function cM(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function hM(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,xT(r.key),r)}}function fM(t,e,n){return e&&hM(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function dM(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_g(t,e)}function _g(t,e){return _g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},_g(t,e)}function pM(t){var e=bT();return function(){var r=sh(t),i;if(e){var s=sh(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return gM(this,i)}}function gM(t,e){if(e&&(lo(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return yg(t)}function yg(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function bT(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(bT=function(){return!!t})()}function sh(t){return sh=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},sh(t)}function J0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Zt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?J0(Object(n),!0).forEach(function(r){vg(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):J0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function vg(t,e,n){return e=xT(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function xT(t){var e=mM(t,"string");return lo(e)=="symbol"?e:String(e)}function mM(t,e){if(lo(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(lo(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Vd=function(e){var n,r,i,s,o;e.rtl?o=e.slideCount-1-e.index:o=e.index,i=o<0||o>=e.slideCount,e.centerMode?(s=Math.floor(e.slidesToShow/2),r=(o-e.currentSlide)%e.slideCount===0,o>e.currentSlide-s-1&&o<=e.currentSlide+s&&(n=!0)):n=e.currentSlide<=o&&o<e.currentSlide+e.slidesToShow;var a;e.targetSlide<0?a=e.targetSlide+e.slideCount:e.targetSlide>=e.slideCount?a=e.targetSlide-e.slideCount:a=e.targetSlide;var l=o===a;return{"slick-slide":!0,"slick-active":n,"slick-center":r,"slick-cloned":i,"slick-current":l}},_M=function(e){var n={};return(e.variableWidth===void 0||e.variableWidth===!1)&&(n.width=e.slideWidth),e.fade&&(n.position="relative",e.vertical?n.top=-e.index*parseInt(e.slideHeight):n.left=-e.index*parseInt(e.slideWidth),n.opacity=e.currentSlide===e.index?1:0,n.zIndex=e.currentSlide===e.index?999:998,e.useCSS&&(n.transition="opacity "+e.speed+"ms "+e.cssEase+", visibility "+e.speed+"ms "+e.cssEase)),n},Fd=function(e,n){return e.key||n},yM=function(e){var n,r=[],i=[],s=[],o=zr.default.Children.count(e.children),a=(0,Nd.lazyStartIndex)(e),l=(0,Nd.lazyEndIndex)(e);return zr.default.Children.forEach(e.children,function(u,h){var f,d={message:"children",index:h,slidesToScroll:e.slidesToScroll,currentSlide:e.currentSlide};!e.lazyLoad||e.lazyLoad&&e.lazyLoadedList.indexOf(h)>=0?f=u:f=zr.default.createElement("div",null);var g=_M(Zt(Zt({},e),{},{index:h})),_=f.props.className||"",y=Vd(Zt(Zt({},e),{},{index:h}));if(r.push(zr.default.cloneElement(f,{key:"original"+Fd(f,h),"data-index":h,className:(0,Dd.default)(y,_),tabIndex:"-1","aria-hidden":!y["slick-active"],style:Zt(Zt({outline:"none"},f.props.style||{}),g),onClick:function(m){f.props&&f.props.onClick&&f.props.onClick(m),e.focusOnSelect&&e.focusOnSelect(d)}})),e.infinite&&e.fade===!1){var E=o-h;E<=(0,Nd.getPreClones)(e)&&(n=-E,n>=a&&(f=u),y=Vd(Zt(Zt({},e),{},{index:n})),i.push(zr.default.cloneElement(f,{key:"precloned"+Fd(f,n),"data-index":n,tabIndex:"-1",className:(0,Dd.default)(y,_),"aria-hidden":!y["slick-active"],style:Zt(Zt({},f.props.style||{}),g),onClick:function(m){f.props&&f.props.onClick&&f.props.onClick(m),e.focusOnSelect&&e.focusOnSelect(d)}}))),n=o+h,n<l&&(f=u),y=Vd(Zt(Zt({},e),{},{index:n})),s.push(zr.default.cloneElement(f,{key:"postcloned"+Fd(f,n),"data-index":n,tabIndex:"-1",className:(0,Dd.default)(y,_),"aria-hidden":!y["slick-active"],style:Zt(Zt({},f.props.style||{}),g),onClick:function(m){f.props&&f.props.onClick&&f.props.onClick(m),e.focusOnSelect&&e.focusOnSelect(d)}}))}}),e.rtl?i.concat(r,s).reverse():i.concat(r,s)};af.Track=function(t){dM(n,t);var e=pM(n);function n(){var r;cM(this,n);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=e.call.apply(e,[this].concat(s)),vg(yg(r),"node",null),vg(yg(r),"handleRef",function(a){r.node=a}),r}return fM(n,[{key:"render",value:function(){var i=yM(this.props),s=this.props,o=s.onMouseEnter,a=s.onMouseOver,l=s.onMouseLeave,u={onMouseEnter:o,onMouseOver:a,onMouseLeave:l};return zr.default.createElement("div",mg({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},u),i)}}]),n}(zr.default.PureComponent);var lf={};function uo(t){"@babel/helpers - typeof";return uo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},uo(t)}Object.defineProperty(lf,"__esModule",{value:!0});lf.Dots=void 0;var Vu=RT(F),vM=RT(of),Z0=ee;function RT(t){return t&&t.__esModule?t:{default:t}}function e1(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function wM(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?e1(Object(n),!0).forEach(function(r){EM(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):e1(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function EM(t,e,n){return e=IT(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function SM(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function TM(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,IT(r.key),r)}}function bM(t,e,n){return e&&TM(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function IT(t){var e=xM(t,"string");return uo(e)=="symbol"?e:String(e)}function xM(t,e){if(uo(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(uo(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function RM(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&wg(t,e)}function wg(t,e){return wg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},wg(t,e)}function IM(t){var e=AT();return function(){var r=oh(t),i;if(e){var s=oh(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return AM(this,i)}}function AM(t,e){if(e&&(uo(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return CM(t)}function CM(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function AT(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(AT=function(){return!!t})()}function oh(t){return oh=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},oh(t)}var PM=function(e){var n;return e.infinite?n=Math.ceil(e.slideCount/e.slidesToScroll):n=Math.ceil((e.slideCount-e.slidesToShow)/e.slidesToScroll)+1,n};lf.Dots=function(t){RM(n,t);var e=IM(n);function n(){return SM(this,n),e.apply(this,arguments)}return bM(n,[{key:"clickHandler",value:function(i,s){s.preventDefault(),this.props.clickHandler(i)}},{key:"render",value:function(){for(var i=this.props,s=i.onMouseEnter,o=i.onMouseOver,a=i.onMouseLeave,l=i.infinite,u=i.slidesToScroll,h=i.slidesToShow,f=i.slideCount,d=i.currentSlide,g=PM({slideCount:f,slidesToScroll:u,slidesToShow:h,infinite:l}),_={onMouseEnter:s,onMouseOver:o,onMouseLeave:a},y=[],E=0;E<g;E++){var w=(E+1)*u-1,m=l?w:(0,Z0.clamp)(w,0,f-1),S=m-(u-1),C=l?S:(0,Z0.clamp)(S,0,f-1),O=(0,vM.default)({"slick-active":l?d>=C&&d<=m:d===C}),M={message:"dots",index:E,slidesToScroll:u,currentSlide:d},R=this.clickHandler.bind(this,M);y=y.concat(Vu.default.createElement("li",{key:E,className:O},Vu.default.cloneElement(this.props.customPaging(E),{onClick:R})))}return Vu.default.cloneElement(this.props.appendDots(y),wM({className:this.props.dotsClass},_))}}]),n}(Vu.default.PureComponent);var co={};function ho(t){"@babel/helpers - typeof";return ho=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ho(t)}Object.defineProperty(co,"__esModule",{value:!0});co.PrevArrow=co.NextArrow=void 0;var Ys=PT(F),CT=PT(of),kM=ee;function PT(t){return t&&t.__esModule?t:{default:t}}function ah(){return ah=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ah.apply(this,arguments)}function t1(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function lh(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?t1(Object(n),!0).forEach(function(r){OM(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):t1(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function OM(t,e,n){return e=LT(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function kT(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function LM(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,LT(r.key),r)}}function OT(t,e,n){return e&&LM(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function LT(t){var e=MM(t,"string");return ho(e)=="symbol"?e:String(e)}function MM(t,e){if(ho(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(ho(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function MT(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Eg(t,e)}function Eg(t,e){return Eg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Eg(t,e)}function DT(t){var e=NT();return function(){var r=uh(t),i;if(e){var s=uh(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return DM(this,i)}}function DM(t,e){if(e&&(ho(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return NM(t)}function NM(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function NT(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(NT=function(){return!!t})()}function uh(t){return uh=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},uh(t)}co.PrevArrow=function(t){MT(n,t);var e=DT(n);function n(){return kT(this,n),e.apply(this,arguments)}return OT(n,[{key:"clickHandler",value:function(i,s){s&&s.preventDefault(),this.props.clickHandler(i,s)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-prev":!0},s=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(i["slick-disabled"]=!0,s=null);var o={key:"0","data-role":"none",className:(0,CT.default)(i),style:{display:"block"},onClick:s},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},l;return this.props.prevArrow?l=Ys.default.cloneElement(this.props.prevArrow,lh(lh({},o),a)):l=Ys.default.createElement("button",ah({key:"0",type:"button"},o)," ","Previous"),l}}]),n}(Ys.default.PureComponent);co.NextArrow=function(t){MT(n,t);var e=DT(n);function n(){return kT(this,n),e.apply(this,arguments)}return OT(n,[{key:"clickHandler",value:function(i,s){s&&s.preventDefault(),this.props.clickHandler(i,s)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-next":!0},s=this.clickHandler.bind(this,{message:"next"});(0,kM.canGoNext)(this.props)||(i["slick-disabled"]=!0,s=null);var o={key:"1","data-role":"none",className:(0,CT.default)(i),style:{display:"block"},onClick:s},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},l;return this.props.nextArrow?l=Ys.default.cloneElement(this.props.nextArrow,lh(lh({},o),a)):l=Ys.default.createElement("button",ah({key:"1",type:"button"},o)," ","Next"),l}}]),n}(Ys.default.PureComponent);var VT=function(){if(typeof Map<"u")return Map;function t(e,n){var r=-1;return e.some(function(i,s){return i[0]===n?(r=s,!0):!1}),r}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(n){var r=t(this.__entries__,n),i=this.__entries__[r];return i&&i[1]},e.prototype.set=function(n,r){var i=t(this.__entries__,n);~i?this.__entries__[i][1]=r:this.__entries__.push([n,r])},e.prototype.delete=function(n){var r=this.__entries__,i=t(r,n);~i&&r.splice(i,1)},e.prototype.has=function(n){return!!~t(this.__entries__,n)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var i=0,s=this.__entries__;i<s.length;i++){var o=s[i];n.call(r,o[1],o[0])}},e}()}(),Sg=typeof window<"u"&&typeof document<"u"&&window.document===document,ch=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),VM=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(ch):function(t){return setTimeout(function(){return t(Date.now())},1e3/60)}}(),FM=2;function zM(t,e){var n=!1,r=!1,i=0;function s(){n&&(n=!1,t()),r&&a()}function o(){VM(s)}function a(){var l=Date.now();if(n){if(l-i<FM)return;r=!0}else n=!0,r=!1,setTimeout(o,e);i=l}return a}var jM=20,BM=["top","right","bottom","left","width","height","size","weight"],$M=typeof MutationObserver<"u",UM=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=zM(this.refresh.bind(this),jM)}return t.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},t.prototype.removeObserver=function(e){var n=this.observers_,r=n.indexOf(e);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){var e=this.updateObservers_();e&&this.refresh()},t.prototype.updateObservers_=function(){var e=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return e.forEach(function(n){return n.broadcastActive()}),e.length>0},t.prototype.connect_=function(){!Sg||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),$M?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){!Sg||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(e){var n=e.propertyName,r=n===void 0?"":n,i=BM.some(function(s){return!!~r.indexOf(s)});i&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),FT=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n++){var i=r[n];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},fo=function(t){var e=t&&t.ownerDocument&&t.ownerDocument.defaultView;return e||ch},zT=uf(0,0,0,0);function hh(t){return parseFloat(t)||0}function n1(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce(function(r,i){var s=t["border-"+i+"-width"];return r+hh(s)},0)}function HM(t){for(var e=["top","right","bottom","left"],n={},r=0,i=e;r<i.length;r++){var s=i[r],o=t["padding-"+s];n[s]=hh(o)}return n}function WM(t){var e=t.getBBox();return uf(0,0,e.width,e.height)}function qM(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return zT;var r=fo(t).getComputedStyle(t),i=HM(r),s=i.left+i.right,o=i.top+i.bottom,a=hh(r.width),l=hh(r.height);if(r.boxSizing==="border-box"&&(Math.round(a+s)!==e&&(a-=n1(r,"left","right")+s),Math.round(l+o)!==n&&(l-=n1(r,"top","bottom")+o)),!KM(t)){var u=Math.round(a+s)-e,h=Math.round(l+o)-n;Math.abs(u)!==1&&(a-=u),Math.abs(h)!==1&&(l-=h)}return uf(i.left,i.top,a,l)}var GM=function(){return typeof SVGGraphicsElement<"u"?function(t){return t instanceof fo(t).SVGGraphicsElement}:function(t){return t instanceof fo(t).SVGElement&&typeof t.getBBox=="function"}}();function KM(t){return t===fo(t).document.documentElement}function QM(t){return Sg?GM(t)?WM(t):qM(t):zT}function YM(t){var e=t.x,n=t.y,r=t.width,i=t.height,s=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,o=Object.create(s.prototype);return FT(o,{x:e,y:n,width:r,height:i,top:n,right:e+r,bottom:i+n,left:e}),o}function uf(t,e,n,r){return{x:t,y:e,width:n,height:r}}var XM=function(){function t(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=uf(0,0,0,0),this.target=e}return t.prototype.isActive=function(){var e=QM(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},t}(),JM=function(){function t(e,n){var r=YM(n);FT(this,{target:e,contentRect:r})}return t}(),ZM=function(){function t(e,n,r){if(this.activeObservations_=[],this.observations_=new VT,typeof e!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=n,this.callbackCtx_=r}return t.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof fo(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(e)||(n.set(e,new XM(e)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof fo(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(e)&&(n.delete(e),n.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&e.activeObservations_.push(n)})},t.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new JM(r.target,r.broadcastRect())});this.callback_.call(e,n,e),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),jT=typeof WeakMap<"u"?new WeakMap:new VT,BT=function(){function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=UM.getInstance(),r=new ZM(e,n,this);jT.set(this,r)}return t}();["observe","unobserve","disconnect"].forEach(function(t){BT.prototype[t]=function(){var e;return(e=jT.get(this))[t].apply(e,arguments)}});var eD=function(){return typeof ch.ResizeObserver<"u"?ch.ResizeObserver:BT}();const tD=Object.freeze(Object.defineProperty({__proto__:null,default:eD},Symbol.toStringTag,{value:"Module"})),nD=wR(tD);Object.defineProperty(sf,"__esModule",{value:!0});sf.InnerSlider=void 0;var Gt=kl(F),rD=kl(fT),iD=kl(KL),sD=kl(of),Je=ee,oD=af,aD=lf,r1=co,lD=kl(nD);function kl(t){return t&&t.__esModule?t:{default:t}}function ss(t){"@babel/helpers - typeof";return ss=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ss(t)}function fh(){return fh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},fh.apply(this,arguments)}function uD(t,e){if(t==null)return{};var n=cD(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function cD(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function i1(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function fe(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?i1(Object(n),!0).forEach(function(r){Ee(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i1(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function hD(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function fD(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,UT(r.key),r)}}function dD(t,e,n){return e&&fD(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function pD(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Tg(t,e)}function Tg(t,e){return Tg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Tg(t,e)}function gD(t){var e=$T();return function(){var r=dh(t),i;if(e){var s=dh(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return mD(this,i)}}function mD(t,e){if(e&&(ss(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return we(t)}function we(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function $T(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return($T=function(){return!!t})()}function dh(t){return dh=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},dh(t)}function Ee(t,e,n){return e=UT(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function UT(t){var e=_D(t,"string");return ss(e)=="symbol"?e:String(e)}function _D(t,e){if(ss(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(ss(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}sf.InnerSlider=function(t){pD(n,t);var e=gD(n);function n(r){var i;hD(this,n),i=e.call(this,r),Ee(we(i),"listRefHandler",function(o){return i.list=o}),Ee(we(i),"trackRefHandler",function(o){return i.track=o}),Ee(we(i),"adaptHeight",function(){if(i.props.adaptiveHeight&&i.list){var o=i.list.querySelector('[data-index="'.concat(i.state.currentSlide,'"]'));i.list.style.height=(0,Je.getHeight)(o)+"px"}}),Ee(we(i),"componentDidMount",function(){if(i.props.onInit&&i.props.onInit(),i.props.lazyLoad){var o=(0,Je.getOnDemandLazySlides)(fe(fe({},i.props),i.state));o.length>0&&(i.setState(function(l){return{lazyLoadedList:l.lazyLoadedList.concat(o)}}),i.props.onLazyLoad&&i.props.onLazyLoad(o))}var a=fe({listRef:i.list,trackRef:i.track},i.props);i.updateState(a,!0,function(){i.adaptHeight(),i.props.autoplay&&i.autoPlay("update")}),i.props.lazyLoad==="progressive"&&(i.lazyLoadTimer=setInterval(i.progressiveLazyLoad,1e3)),i.ro=new lD.default(function(){i.state.animating?(i.onWindowResized(!1),i.callbackTimers.push(setTimeout(function(){return i.onWindowResized()},i.props.speed))):i.onWindowResized()}),i.ro.observe(i.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(l){l.onfocus=i.props.pauseOnFocus?i.onSlideFocus:null,l.onblur=i.props.pauseOnFocus?i.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",i.onWindowResized):window.attachEvent("onresize",i.onWindowResized)}),Ee(we(i),"componentWillUnmount",function(){i.animationEndCallback&&clearTimeout(i.animationEndCallback),i.lazyLoadTimer&&clearInterval(i.lazyLoadTimer),i.callbackTimers.length&&(i.callbackTimers.forEach(function(o){return clearTimeout(o)}),i.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",i.onWindowResized):window.detachEvent("onresize",i.onWindowResized),i.autoplayTimer&&clearInterval(i.autoplayTimer),i.ro.disconnect()}),Ee(we(i),"componentDidUpdate",function(o){if(i.checkImagesLoad(),i.props.onReInit&&i.props.onReInit(),i.props.lazyLoad){var a=(0,Je.getOnDemandLazySlides)(fe(fe({},i.props),i.state));a.length>0&&(i.setState(function(h){return{lazyLoadedList:h.lazyLoadedList.concat(a)}}),i.props.onLazyLoad&&i.props.onLazyLoad(a))}i.adaptHeight();var l=fe(fe({listRef:i.list,trackRef:i.track},i.props),i.state),u=i.didPropsChange(o);u&&i.updateState(l,u,function(){i.state.currentSlide>=Gt.default.Children.count(i.props.children)&&i.changeSlide({message:"index",index:Gt.default.Children.count(i.props.children)-i.props.slidesToShow,currentSlide:i.state.currentSlide}),i.props.autoplay?i.autoPlay("update"):i.pause("paused")})}),Ee(we(i),"onWindowResized",function(o){i.debouncedResize&&i.debouncedResize.cancel(),i.debouncedResize=(0,iD.default)(function(){return i.resizeWindow(o)},50),i.debouncedResize()}),Ee(we(i),"resizeWindow",function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,a=!!(i.track&&i.track.node);if(a){var l=fe(fe({listRef:i.list,trackRef:i.track},i.props),i.state);i.updateState(l,o,function(){i.props.autoplay?i.autoPlay("update"):i.pause("paused")}),i.setState({animating:!1}),clearTimeout(i.animationEndCallback),delete i.animationEndCallback}}),Ee(we(i),"updateState",function(o,a,l){var u=(0,Je.initializedState)(o);o=fe(fe(fe({},o),u),{},{slideIndex:u.currentSlide});var h=(0,Je.getTrackLeft)(o);o=fe(fe({},o),{},{left:h});var f=(0,Je.getTrackCSS)(o);(a||Gt.default.Children.count(i.props.children)!==Gt.default.Children.count(o.children))&&(u.trackStyle=f),i.setState(u,l)}),Ee(we(i),"ssrInit",function(){if(i.props.variableWidth){var o=0,a=0,l=[],u=(0,Je.getPreClones)(fe(fe(fe({},i.props),i.state),{},{slideCount:i.props.children.length})),h=(0,Je.getPostClones)(fe(fe(fe({},i.props),i.state),{},{slideCount:i.props.children.length}));i.props.children.forEach(function(R){l.push(R.props.style.width),o+=R.props.style.width});for(var f=0;f<u;f++)a+=l[l.length-1-f],o+=l[l.length-1-f];for(var d=0;d<h;d++)o+=l[d];for(var g=0;g<i.state.currentSlide;g++)a+=l[g];var _={width:o+"px",left:-a+"px"};if(i.props.centerMode){var y="".concat(l[i.state.currentSlide],"px");_.left="calc(".concat(_.left," + (100% - ").concat(y,") / 2 ) ")}return{trackStyle:_}}var E=Gt.default.Children.count(i.props.children),w=fe(fe(fe({},i.props),i.state),{},{slideCount:E}),m=(0,Je.getPreClones)(w)+(0,Je.getPostClones)(w)+E,S=100/i.props.slidesToShow*m,C=100/m,O=-C*((0,Je.getPreClones)(w)+i.state.currentSlide)*S/100;i.props.centerMode&&(O+=(100-C*S/100)/2);var M={width:S+"%",left:O+"%"};return{slideWidth:C+"%",trackStyle:M}}),Ee(we(i),"checkImagesLoad",function(){var o=i.list&&i.list.querySelectorAll&&i.list.querySelectorAll(".slick-slide img")||[],a=o.length,l=0;Array.prototype.forEach.call(o,function(u){var h=function(){return++l&&l>=a&&i.onWindowResized()};if(!u.onclick)u.onclick=function(){return u.parentNode.focus()};else{var f=u.onclick;u.onclick=function(d){f(d),u.parentNode.focus()}}u.onload||(i.props.lazyLoad?u.onload=function(){i.adaptHeight(),i.callbackTimers.push(setTimeout(i.onWindowResized,i.props.speed))}:(u.onload=h,u.onerror=function(){h(),i.props.onLazyLoadError&&i.props.onLazyLoadError()}))})}),Ee(we(i),"progressiveLazyLoad",function(){for(var o=[],a=fe(fe({},i.props),i.state),l=i.state.currentSlide;l<i.state.slideCount+(0,Je.getPostClones)(a);l++)if(i.state.lazyLoadedList.indexOf(l)<0){o.push(l);break}for(var u=i.state.currentSlide-1;u>=-(0,Je.getPreClones)(a);u--)if(i.state.lazyLoadedList.indexOf(u)<0){o.push(u);break}o.length>0?(i.setState(function(h){return{lazyLoadedList:h.lazyLoadedList.concat(o)}}),i.props.onLazyLoad&&i.props.onLazyLoad(o)):i.lazyLoadTimer&&(clearInterval(i.lazyLoadTimer),delete i.lazyLoadTimer)}),Ee(we(i),"slideHandler",function(o){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=i.props,u=l.asNavFor,h=l.beforeChange,f=l.onLazyLoad,d=l.speed,g=l.afterChange,_=i.state.currentSlide,y=(0,Je.slideHandler)(fe(fe(fe({index:o},i.props),i.state),{},{trackRef:i.track,useCSS:i.props.useCSS&&!a})),E=y.state,w=y.nextState;if(E){h&&h(_,E.currentSlide);var m=E.lazyLoadedList.filter(function(S){return i.state.lazyLoadedList.indexOf(S)<0});f&&m.length>0&&f(m),!i.props.waitForAnimate&&i.animationEndCallback&&(clearTimeout(i.animationEndCallback),g&&g(_),delete i.animationEndCallback),i.setState(E,function(){u&&i.asNavForIndex!==o&&(i.asNavForIndex=o,u.innerSlider.slideHandler(o)),w&&(i.animationEndCallback=setTimeout(function(){var S=w.animating,C=uD(w,["animating"]);i.setState(C,function(){i.callbackTimers.push(setTimeout(function(){return i.setState({animating:S})},10)),g&&g(E.currentSlide),delete i.animationEndCallback})},d))})}}),Ee(we(i),"changeSlide",function(o){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=fe(fe({},i.props),i.state),u=(0,Je.changeSlide)(l,o);if(!(u!==0&&!u)&&(a===!0?i.slideHandler(u,a):i.slideHandler(u),i.props.autoplay&&i.autoPlay("update"),i.props.focusOnSelect)){var h=i.list.querySelectorAll(".slick-current");h[0]&&h[0].focus()}}),Ee(we(i),"clickHandler",function(o){i.clickable===!1&&(o.stopPropagation(),o.preventDefault()),i.clickable=!0}),Ee(we(i),"keyHandler",function(o){var a=(0,Je.keyHandler)(o,i.props.accessibility,i.props.rtl);a!==""&&i.changeSlide({message:a})}),Ee(we(i),"selectHandler",function(o){i.changeSlide(o)}),Ee(we(i),"disableBodyScroll",function(){var o=function(l){l=l||window.event,l.preventDefault&&l.preventDefault(),l.returnValue=!1};window.ontouchmove=o}),Ee(we(i),"enableBodyScroll",function(){window.ontouchmove=null}),Ee(we(i),"swipeStart",function(o){i.props.verticalSwiping&&i.disableBodyScroll();var a=(0,Je.swipeStart)(o,i.props.swipe,i.props.draggable);a!==""&&i.setState(a)}),Ee(we(i),"swipeMove",function(o){var a=(0,Je.swipeMove)(o,fe(fe(fe({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));a&&(a.swiping&&(i.clickable=!1),i.setState(a))}),Ee(we(i),"swipeEnd",function(o){var a=(0,Je.swipeEnd)(o,fe(fe(fe({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));if(a){var l=a.triggerSlideHandler;delete a.triggerSlideHandler,i.setState(a),l!==void 0&&(i.slideHandler(l),i.props.verticalSwiping&&i.enableBodyScroll())}}),Ee(we(i),"touchEnd",function(o){i.swipeEnd(o),i.clickable=!0}),Ee(we(i),"slickPrev",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"previous"})},0))}),Ee(we(i),"slickNext",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"next"})},0))}),Ee(we(i),"slickGoTo",function(o){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(o=Number(o),isNaN(o))return"";i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"index",index:o,currentSlide:i.state.currentSlide},a)},0))}),Ee(we(i),"play",function(){var o;if(i.props.rtl)o=i.state.currentSlide-i.props.slidesToScroll;else if((0,Je.canGoNext)(fe(fe({},i.props),i.state)))o=i.state.currentSlide+i.props.slidesToScroll;else return!1;i.slideHandler(o)}),Ee(we(i),"autoPlay",function(o){i.autoplayTimer&&clearInterval(i.autoplayTimer);var a=i.state.autoplaying;if(o==="update"){if(a==="hovered"||a==="focused"||a==="paused")return}else if(o==="leave"){if(a==="paused"||a==="focused")return}else if(o==="blur"&&(a==="paused"||a==="hovered"))return;i.autoplayTimer=setInterval(i.play,i.props.autoplaySpeed+50),i.setState({autoplaying:"playing"})}),Ee(we(i),"pause",function(o){i.autoplayTimer&&(clearInterval(i.autoplayTimer),i.autoplayTimer=null);var a=i.state.autoplaying;o==="paused"?i.setState({autoplaying:"paused"}):o==="focused"?(a==="hovered"||a==="playing")&&i.setState({autoplaying:"focused"}):a==="playing"&&i.setState({autoplaying:"hovered"})}),Ee(we(i),"onDotsOver",function(){return i.props.autoplay&&i.pause("hovered")}),Ee(we(i),"onDotsLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),Ee(we(i),"onTrackOver",function(){return i.props.autoplay&&i.pause("hovered")}),Ee(we(i),"onTrackLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),Ee(we(i),"onSlideFocus",function(){return i.props.autoplay&&i.pause("focused")}),Ee(we(i),"onSlideBlur",function(){return i.props.autoplay&&i.state.autoplaying==="focused"&&i.autoPlay("blur")}),Ee(we(i),"render",function(){var o=(0,sD.default)("slick-slider",i.props.className,{"slick-vertical":i.props.vertical,"slick-initialized":!0}),a=fe(fe({},i.props),i.state),l=(0,Je.extractObject)(a,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),u=i.props.pauseOnHover;l=fe(fe({},l),{},{onMouseEnter:u?i.onTrackOver:null,onMouseLeave:u?i.onTrackLeave:null,onMouseOver:u?i.onTrackOver:null,focusOnSelect:i.props.focusOnSelect&&i.clickable?i.selectHandler:null});var h;if(i.props.dots===!0&&i.state.slideCount>=i.props.slidesToShow){var f=(0,Je.extractObject)(a,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),d=i.props.pauseOnDotsHover;f=fe(fe({},f),{},{clickHandler:i.changeSlide,onMouseEnter:d?i.onDotsLeave:null,onMouseOver:d?i.onDotsOver:null,onMouseLeave:d?i.onDotsLeave:null}),h=Gt.default.createElement(aD.Dots,f)}var g,_,y=(0,Je.extractObject)(a,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);y.clickHandler=i.changeSlide,i.props.arrows&&(g=Gt.default.createElement(r1.PrevArrow,y),_=Gt.default.createElement(r1.NextArrow,y));var E=null;i.props.vertical&&(E={height:i.state.listHeight});var w=null;i.props.vertical===!1?i.props.centerMode===!0&&(w={padding:"0px "+i.props.centerPadding}):i.props.centerMode===!0&&(w={padding:i.props.centerPadding+" 0px"});var m=fe(fe({},E),w),S=i.props.touchMove,C={className:"slick-list",style:m,onClick:i.clickHandler,onMouseDown:S?i.swipeStart:null,onMouseMove:i.state.dragging&&S?i.swipeMove:null,onMouseUp:S?i.swipeEnd:null,onMouseLeave:i.state.dragging&&S?i.swipeEnd:null,onTouchStart:S?i.swipeStart:null,onTouchMove:i.state.dragging&&S?i.swipeMove:null,onTouchEnd:S?i.touchEnd:null,onTouchCancel:i.state.dragging&&S?i.swipeEnd:null,onKeyDown:i.props.accessibility?i.keyHandler:null},O={className:o,dir:"ltr",style:i.props.style};return i.props.unslick&&(C={className:"slick-list"},O={className:o}),Gt.default.createElement("div",O,i.props.unslick?"":g,Gt.default.createElement("div",fh({ref:i.listRefHandler},C),Gt.default.createElement(oD.Track,fh({ref:i.trackRefHandler},l),i.props.children)),i.props.unslick?"":_,i.props.unslick?"":h)}),i.list=null,i.track=null,i.state=fe(fe({},rD.default),{},{currentSlide:i.props.initialSlide,targetSlide:i.props.initialSlide?i.props.initialSlide:0,slideCount:Gt.default.Children.count(i.props.children)}),i.callbackTimers=[],i.clickable=!0,i.debouncedResize=null;var s=i.ssrInit();return i.state=fe(fe({},i.state),s),i}return dD(n,[{key:"didPropsChange",value:function(i){for(var s=!1,o=0,a=Object.keys(this.props);o<a.length;o++){var l=a[o];if(!i.hasOwnProperty(l)){s=!0;break}if(!(ss(i[l])==="object"||typeof i[l]=="function"||isNaN(i[l]))&&i[l]!==this.props[l]){s=!0;break}}return s||Gt.default.Children.count(this.props.children)!==Gt.default.Children.count(i.children)}}]),n}(Gt.default.Component);var yD=function(t){return t.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}).toLowerCase()},vD=yD,wD=vD,ED=function(t){var e=/[height|width]$/;return e.test(t)},s1=function(t){var e="",n=Object.keys(t);return n.forEach(function(r,i){var s=t[r];r=wD(r),ED(r)&&typeof s=="number"&&(s=s+"px"),s===!0?e+=r:s===!1?e+="not "+r:e+="("+r+": "+s+")",i<n.length-1&&(e+=" and ")}),e},SD=function(t){var e="";return typeof t=="string"?t:t instanceof Array?(t.forEach(function(n,r){e+=s1(n),r<t.length-1&&(e+=", ")}),e):s1(t)},TD=SD,zd,o1;function bD(){if(o1)return zd;o1=1;function t(e){this.options=e,!e.deferSetup&&this.setup()}return t.prototype={constructor:t,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(e){return this.options===e||this.options.match===e}},zd=t,zd}var jd,a1;function HT(){if(a1)return jd;a1=1;function t(r,i){var s=0,o=r.length,a;for(s;s<o&&(a=i(r[s],s),a!==!1);s++);}function e(r){return Object.prototype.toString.apply(r)==="[object Array]"}function n(r){return typeof r=="function"}return jd={isFunction:n,isArray:e,each:t},jd}var Bd,l1;function xD(){if(l1)return Bd;l1=1;var t=bD(),e=HT().each;function n(r,i){this.query=r,this.isUnconditional=i,this.handlers=[],this.mql=window.matchMedia(r);var s=this;this.listener=function(o){s.mql=o.currentTarget||o,s.assess()},this.mql.addListener(this.listener)}return n.prototype={constuctor:n,addHandler:function(r){var i=new t(r);this.handlers.push(i),this.matches()&&i.on()},removeHandler:function(r){var i=this.handlers;e(i,function(s,o){if(s.equals(r))return s.destroy(),!i.splice(o,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){e(this.handlers,function(r){r.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var r=this.matches()?"on":"off";e(this.handlers,function(i){i[r]()})}},Bd=n,Bd}var $d,u1;function RD(){if(u1)return $d;u1=1;var t=xD(),e=HT(),n=e.each,r=e.isFunction,i=e.isArray;function s(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}return s.prototype={constructor:s,register:function(o,a,l){var u=this.queries,h=l&&this.browserIsIncapable;return u[o]||(u[o]=new t(o,h)),r(a)&&(a={match:a}),i(a)||(a=[a]),n(a,function(f){r(f)&&(f={match:f}),u[o].addHandler(f)}),this},unregister:function(o,a){var l=this.queries[o];return l&&(a?l.removeHandler(a):(l.clear(),delete this.queries[o])),this}},$d=s,$d}var Ud,c1;function ID(){if(c1)return Ud;c1=1;var t=RD();return Ud=new t,Ud}(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=o(F),n=sf,r=o(TD),i=o(h_),s=ee;function o(b){return b&&b.__esModule?b:{default:b}}function a(b){"@babel/helpers - typeof";return a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(x){return typeof x}:function(x){return x&&typeof Symbol=="function"&&x.constructor===Symbol&&x!==Symbol.prototype?"symbol":typeof x},a(b)}function l(){return l=Object.assign?Object.assign.bind():function(b){for(var x=1;x<arguments.length;x++){var P=arguments[x];for(var k in P)Object.prototype.hasOwnProperty.call(P,k)&&(b[k]=P[k])}return b},l.apply(this,arguments)}function u(b,x){var P=Object.keys(b);if(Object.getOwnPropertySymbols){var k=Object.getOwnPropertySymbols(b);x&&(k=k.filter(function(A){return Object.getOwnPropertyDescriptor(b,A).enumerable})),P.push.apply(P,k)}return P}function h(b){for(var x=1;x<arguments.length;x++){var P=arguments[x]!=null?arguments[x]:{};x%2?u(Object(P),!0).forEach(function(k){O(b,k,P[k])}):Object.getOwnPropertyDescriptors?Object.defineProperties(b,Object.getOwnPropertyDescriptors(P)):u(Object(P)).forEach(function(k){Object.defineProperty(b,k,Object.getOwnPropertyDescriptor(P,k))})}return b}function f(b,x){if(!(b instanceof x))throw new TypeError("Cannot call a class as a function")}function d(b,x){for(var P=0;P<x.length;P++){var k=x[P];k.enumerable=k.enumerable||!1,k.configurable=!0,"value"in k&&(k.writable=!0),Object.defineProperty(b,M(k.key),k)}}function g(b,x,P){return x&&d(b.prototype,x),Object.defineProperty(b,"prototype",{writable:!1}),b}function _(b,x){if(typeof x!="function"&&x!==null)throw new TypeError("Super expression must either be null or a function");b.prototype=Object.create(x&&x.prototype,{constructor:{value:b,writable:!0,configurable:!0}}),Object.defineProperty(b,"prototype",{writable:!1}),x&&y(b,x)}function y(b,x){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(k,A){return k.__proto__=A,k},y(b,x)}function E(b){var x=S();return function(){var k=C(b),A;if(x){var Z=C(this).constructor;A=Reflect.construct(k,arguments,Z)}else A=k.apply(this,arguments);return w(this,A)}}function w(b,x){if(x&&(a(x)==="object"||typeof x=="function"))return x;if(x!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return m(b)}function m(b){if(b===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b}function S(){try{var b=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(S=function(){return!!b})()}function C(b){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(P){return P.__proto__||Object.getPrototypeOf(P)},C(b)}function O(b,x,P){return x=M(x),x in b?Object.defineProperty(b,x,{value:P,enumerable:!0,configurable:!0,writable:!0}):b[x]=P,b}function M(b){var x=R(b,"string");return a(x)=="symbol"?x:String(x)}function R(b,x){if(a(b)!="object"||!b)return b;var P=b[Symbol.toPrimitive];if(P!==void 0){var k=P.call(b,x||"default");if(a(k)!="object")return k;throw new TypeError("@@toPrimitive must return a primitive value.")}return(x==="string"?String:Number)(b)}var T=(0,s.canUseDOM)()&&ID();t.default=function(b){_(P,b);var x=E(P);function P(k){var A;return f(this,P),A=x.call(this,k),O(m(A),"innerSliderRefHandler",function(Z){return A.innerSlider=Z}),O(m(A),"slickPrev",function(){return A.innerSlider.slickPrev()}),O(m(A),"slickNext",function(){return A.innerSlider.slickNext()}),O(m(A),"slickGoTo",function(Z){var le=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return A.innerSlider.slickGoTo(Z,le)}),O(m(A),"slickPause",function(){return A.innerSlider.pause("paused")}),O(m(A),"slickPlay",function(){return A.innerSlider.autoPlay("play")}),A.state={breakpoint:null},A._responsiveMediaHandlers=[],A}return g(P,[{key:"media",value:function(A,Z){T.register(A,Z),this._responsiveMediaHandlers.push({query:A,handler:Z})}},{key:"componentDidMount",value:function(){var A=this;if(this.props.responsive){var Z=this.props.responsive.map(function(he){return he.breakpoint});Z.sort(function(he,pe){return he-pe}),Z.forEach(function(he,pe){var G;pe===0?G=(0,r.default)({minWidth:0,maxWidth:he}):G=(0,r.default)({minWidth:Z[pe-1]+1,maxWidth:he}),(0,s.canUseDOM)()&&A.media(G,function(){A.setState({breakpoint:he})})});var le=(0,r.default)({minWidth:Z.slice(-1)[0]});(0,s.canUseDOM)()&&this.media(le,function(){A.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(A){T.unregister(A.query,A.handler)})}},{key:"render",value:function(){var A=this,Z,le;this.state.breakpoint?(le=this.props.responsive.filter(function(L){return L.breakpoint===A.state.breakpoint}),Z=le[0].settings==="unslick"?"unslick":h(h(h({},i.default),this.props),le[0].settings)):Z=h(h({},i.default),this.props),Z.centerMode&&(Z.slidesToScroll>1,Z.slidesToScroll=1),Z.fade&&(Z.slidesToShow>1,Z.slidesToScroll>1,Z.slidesToShow=1,Z.slidesToScroll=1);var he=e.default.Children.toArray(this.props.children);he=he.filter(function(L){return typeof L=="string"?!!L.trim():!!L}),Z.variableWidth&&(Z.rows>1||Z.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),Z.variableWidth=!1);for(var pe=[],G=null,J=0;J<he.length;J+=Z.rows*Z.slidesPerRow){for(var ae=[],ye=J;ye<J+Z.rows*Z.slidesPerRow;ye+=Z.slidesPerRow){for(var ue=[],D=ye;D<ye+Z.slidesPerRow&&(Z.variableWidth&&he[D].props.style&&(G=he[D].props.style.width),!(D>=he.length));D+=1)ue.push(e.default.cloneElement(he[D],{key:100*J+10*ye+D,tabIndex:-1,style:{width:"".concat(100/Z.slidesPerRow,"%"),display:"inline-block"}}));ae.push(e.default.createElement("div",{key:10*J+ye},ue))}Z.variableWidth?pe.push(e.default.createElement("div",{key:J,style:{width:G}},ae)):pe.push(e.default.createElement("div",{key:J},ae))}if(Z==="unslick"){var z="regular slider "+(this.props.className||"");return e.default.createElement("div",{className:z},he)}else pe.length<=Z.slidesToShow&&!Z.infinite&&(Z.unslick=!0);return e.default.createElement(n.InnerSlider,l({style:this.props.style,ref:this.innerSliderRefHandler},(0,s.filterSettings)(Z)),pe)}}]),P}(e.default.Component)})(hT);(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=n(hT);function n(r){return r&&r.__esModule?r:{default:r}}t.default=e.default})(cT);const AD=Kg(cT);var d_={};Object.defineProperty(d_,"__esModule",{value:!0});d_.parse=DD;d_.serialize=ND;const CD=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,PD=/^[\u0021-\u003A\u003C-\u007E]*$/,kD=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,OD=/^[\u0020-\u003A\u003D-\u007E]*$/,LD=Object.prototype.toString,MD=(()=>{const t=function(){};return t.prototype=Object.create(null),t})();function DD(t,e){const n=new MD,r=t.length;if(r<2)return n;const i=(e==null?void 0:e.decode)||VD;let s=0;do{const o=t.indexOf("=",s);if(o===-1)break;const a=t.indexOf(";",s),l=a===-1?r:a;if(o>l){s=t.lastIndexOf(";",o-1)+1;continue}const u=h1(t,s,o),h=f1(t,o,u),f=t.slice(u,h);if(n[f]===void 0){let d=h1(t,o+1,l),g=f1(t,l,d);const _=i(t.slice(d,g));n[f]=_}s=l+1}while(s<r);return n}function h1(t,e,n){do{const r=t.charCodeAt(e);if(r!==32&&r!==9)return e}while(++e<n);return n}function f1(t,e,n){for(;e>n;){const r=t.charCodeAt(--e);if(r!==32&&r!==9)return e+1}return n}function ND(t,e,n){const r=(n==null?void 0:n.encode)||encodeURIComponent;if(!CD.test(t))throw new TypeError(`argument name is invalid: ${t}`);const i=r(e);if(!PD.test(i))throw new TypeError(`argument val is invalid: ${e}`);let s=t+"="+i;if(!n)return s;if(n.maxAge!==void 0){if(!Number.isInteger(n.maxAge))throw new TypeError(`option maxAge is invalid: ${n.maxAge}`);s+="; Max-Age="+n.maxAge}if(n.domain){if(!kD.test(n.domain))throw new TypeError(`option domain is invalid: ${n.domain}`);s+="; Domain="+n.domain}if(n.path){if(!OD.test(n.path))throw new TypeError(`option path is invalid: ${n.path}`);s+="; Path="+n.path}if(n.expires){if(!FD(n.expires)||!Number.isFinite(n.expires.valueOf()))throw new TypeError(`option expires is invalid: ${n.expires}`);s+="; Expires="+n.expires.toUTCString()}if(n.httpOnly&&(s+="; HttpOnly"),n.secure&&(s+="; Secure"),n.partitioned&&(s+="; Partitioned"),n.priority)switch(typeof n.priority=="string"?n.priority.toLowerCase():void 0){case"low":s+="; Priority=Low";break;case"medium":s+="; Priority=Medium";break;case"high":s+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${n.priority}`)}if(n.sameSite)switch(typeof n.sameSite=="string"?n.sameSite.toLowerCase():n.sameSite){case!0:case"strict":s+="; SameSite=Strict";break;case"lax":s+="; SameSite=Lax";break;case"none":s+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${n.sameSite}`)}return s}function VD(t){if(t.indexOf("%")===-1)return t;try{return decodeURIComponent(t)}catch{return t}}function FD(t){return LD.call(t)==="[object Date]"}/**
 * react-router v7.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var d1="popstate";function zD(t={}){function e(i,s){let{pathname:o="/",search:a="",hash:l=""}=fs(i.location.hash.substring(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),bg("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof s=="string"?s:hl(s))}function r(i,s){jn(i.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(s)})`)}return BD(e,n,r,t)}function tt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function jn(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function jD(){return Math.random().toString(36).substring(2,10)}function p1(t,e){return{usr:t.state,key:t.key,idx:e}}function bg(t,e,n=null,r){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?fs(e):e,state:n,key:e&&e.key||r||jD()}}function hl({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function fs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substring(r),t=t.substring(0,r)),t&&(e.pathname=t)}return e}function BD(t,e,n,r={}){let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a="POP",l=null,u=h();u==null&&(u=0,o.replaceState({...o.state,idx:u},""));function h(){return(o.state||{idx:null}).idx}function f(){a="POP";let E=h(),w=E==null?null:E-u;u=E,l&&l({action:a,location:y.location,delta:w})}function d(E,w){a="PUSH";let m=bg(y.location,E,w);n&&n(m,E),u=h()+1;let S=p1(m,u),C=y.createHref(m);try{o.pushState(S,"",C)}catch(O){if(O instanceof DOMException&&O.name==="DataCloneError")throw O;i.location.assign(C)}s&&l&&l({action:a,location:y.location,delta:1})}function g(E,w){a="REPLACE";let m=bg(y.location,E,w);n&&n(m,E),u=h();let S=p1(m,u),C=y.createHref(m);o.replaceState(S,"",C),s&&l&&l({action:a,location:y.location,delta:0})}function _(E){let w=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof E=="string"?E:hl(E);return m=m.replace(/ $/,"%20"),tt(w,`No window.location.(origin|href) available to create URL for href: ${m}`),new URL(m,w)}let y={get action(){return a},get location(){return t(i,o)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(d1,f),l=E,()=>{i.removeEventListener(d1,f),l=null}},createHref(E){return e(i,E)},createURL:_,encodeLocation(E){let w=_(E);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:d,replace:g,go(E){return o.go(E)}};return y}function WT(t,e,n="/"){return $D(t,e,n,!1)}function $D(t,e,n,r){let i=typeof e=="string"?fs(e):e,s=di(i.pathname||"/",n);if(s==null)return null;let o=qT(t);UD(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let u=eN(s);a=JD(o[l],u,r)}return a}function qT(t,e=[],n=[],r=""){let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(tt(l.relativePath.startsWith(r),`Absolute route path "${l.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),l.relativePath=l.relativePath.slice(r.length));let u=_r([r,l.relativePath]),h=n.concat(l);s.children&&s.children.length>0&&(tt(s.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${u}".`),qT(s.children,e,h,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:YD(u,s.index),routesMeta:h})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of GT(s.path))i(s,o,l)}),e}function GT(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=GT(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function UD(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:XD(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var HD=/^:[\w-]+$/,WD=3,qD=2,GD=1,KD=10,QD=-2,g1=t=>t==="*";function YD(t,e){let n=t.split("/"),r=n.length;return n.some(g1)&&(r+=QD),e&&(r+=qD),n.filter(i=>!g1(i)).reduce((i,s)=>i+(HD.test(s)?WD:s===""?GD:KD),r)}function XD(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function JD(t,e,n=!1){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,h=s==="/"?e:e.slice(s.length)||"/",f=ph({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},h),d=l.route;if(!f&&u&&n&&!r[r.length-1].route.index&&(f=ph({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},h)),!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:_r([s,f.pathname]),pathnameBase:iN(_r([s,f.pathnameBase])),route:d}),f.pathnameBase!=="/"&&(s=_r([s,f.pathnameBase]))}return o}function ph(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=ZD(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,{paramName:h,isOptional:f},d)=>{if(h==="*"){let _=a[d]||"";o=s.slice(0,s.length-_.length).replace(/(.)\/+$/,"$1")}const g=a[d];return f&&!g?u[h]=void 0:u[h]=(g||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function ZD(t,e=!1,n=!0){jn(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function eN(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return jn(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function di(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function tN(t,e="/"){let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?fs(t):t;return{pathname:n?n.startsWith("/")?n:nN(n,e):e,search:sN(r),hash:oN(i)}}function nN(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Hd(t,e,n,r){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function rN(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function KT(t){let e=rN(t);return e.map((n,r)=>r===e.length-1?n.pathname:n.pathnameBase)}function QT(t,e,n,r=!1){let i;typeof t=="string"?i=fs(t):(i={...t},tt(!i.pathname||!i.pathname.includes("?"),Hd("?","pathname","search",i)),tt(!i.pathname||!i.pathname.includes("#"),Hd("#","pathname","hash",i)),tt(!i.search||!i.search.includes("#"),Hd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),f-=1;i.pathname=d.join("/")}a=f>=0?e[f]:"/"}let l=tN(i,a),u=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||h)&&(l.pathname+="/"),l}var _r=t=>t.join("/").replace(/\/\/+/g,"/"),iN=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),sN=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,oN=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function aN(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var YT=["POST","PUT","PATCH","DELETE"];new Set(YT);var lN=["GET",...YT];new Set(lN);var Ro=F.createContext(null);Ro.displayName="DataRouter";var cf=F.createContext(null);cf.displayName="DataRouterState";var XT=F.createContext({isTransitioning:!1});XT.displayName="ViewTransition";var uN=F.createContext(new Map);uN.displayName="Fetchers";var cN=F.createContext(null);cN.displayName="Await";var nr=F.createContext(null);nr.displayName="Navigation";var Ol=F.createContext(null);Ol.displayName="Location";var Cr=F.createContext({outlet:null,matches:[],isDataRoute:!1});Cr.displayName="Route";var p_=F.createContext(null);p_.displayName="RouteError";function hN(t,{relative:e}={}){tt(Ll(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=F.useContext(nr),{hash:i,pathname:s,search:o}=Ml(t,{relative:e}),a=s;return n!=="/"&&(a=s==="/"?n:_r([n,s])),r.createHref({pathname:a,search:o,hash:i})}function Ll(){return F.useContext(Ol)!=null}function ds(){return tt(Ll(),"useLocation() may be used only in the context of a <Router> component."),F.useContext(Ol).location}var JT="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function ZT(t){F.useContext(nr).static||F.useLayoutEffect(t)}function eb(){let{isDataRoute:t}=F.useContext(Cr);return t?bN():fN()}function fN(){tt(Ll(),"useNavigate() may be used only in the context of a <Router> component.");let t=F.useContext(Ro),{basename:e,navigator:n}=F.useContext(nr),{matches:r}=F.useContext(Cr),{pathname:i}=ds(),s=JSON.stringify(KT(r)),o=F.useRef(!1);return ZT(()=>{o.current=!0}),F.useCallback((l,u={})=>{if(jn(o.current,JT),!o.current)return;if(typeof l=="number"){n.go(l);return}let h=QT(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:_r([e,h.pathname])),(u.replace?n.replace:n.push)(h,u.state,u)},[e,n,s,i,t])}F.createContext(null);function Ml(t,{relative:e}={}){let{matches:n}=F.useContext(Cr),{pathname:r}=ds(),i=JSON.stringify(KT(n));return F.useMemo(()=>QT(t,JSON.parse(i),r,e==="path"),[t,i,r,e])}function dN(t,e){return tb(t,e)}function tb(t,e,n,r){var m;tt(Ll(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i,static:s}=F.useContext(nr),{matches:o}=F.useContext(Cr),a=o[o.length-1],l=a?a.params:{},u=a?a.pathname:"/",h=a?a.pathnameBase:"/",f=a&&a.route;{let S=f&&f.path||"";nb(u,!f||S.endsWith("*")||S.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${u}" (under <Route path="${S}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${S}"> to <Route path="${S==="/"?"*":`${S}/*`}">.`)}let d=ds(),g;if(e){let S=typeof e=="string"?fs(e):e;tt(h==="/"||((m=S.pathname)==null?void 0:m.startsWith(h)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${S.pathname}" was given in the \`location\` prop.`),g=S}else g=d;let _=g.pathname||"/",y=_;if(h!=="/"){let S=h.replace(/^\//,"").split("/");y="/"+_.replace(/^\//,"").split("/").slice(S.length).join("/")}let E=!s&&n&&n.matches&&n.matches.length>0?n.matches:WT(t,{pathname:y});jn(f||E!=null,`No routes matched location "${g.pathname}${g.search}${g.hash}" `),jn(E==null||E[E.length-1].route.element!==void 0||E[E.length-1].route.Component!==void 0||E[E.length-1].route.lazy!==void 0,`Matched leaf route at location "${g.pathname}${g.search}${g.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let w=yN(E&&E.map(S=>Object.assign({},S,{params:Object.assign({},l,S.params),pathname:_r([h,i.encodeLocation?i.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?h:_r([h,i.encodeLocation?i.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),o,n,r);return e&&w?F.createElement(Ol.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...g},navigationType:"POP"}},w):w}function pN(){let t=TN(),e=aN(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r},o=null;return console.error("Error handled by React Router default ErrorBoundary:",t),o=F.createElement(F.Fragment,null,F.createElement("p",null,"💿 Hey developer 👋"),F.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",F.createElement("code",{style:s},"ErrorBoundary")," or"," ",F.createElement("code",{style:s},"errorElement")," prop on your route.")),F.createElement(F.Fragment,null,F.createElement("h2",null,"Unexpected Application Error!"),F.createElement("h3",{style:{fontStyle:"italic"}},e),n?F.createElement("pre",{style:i},n):null,o)}var gN=F.createElement(pN,null),mN=class extends F.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){console.error("React Router caught the following error during render",t,e)}render(){return this.state.error!==void 0?F.createElement(Cr.Provider,{value:this.props.routeContext},F.createElement(p_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function _N({routeContext:t,match:e,children:n}){let r=F.useContext(Ro);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),F.createElement(Cr.Provider,{value:t},n)}function yN(t,e=[],n=null,r=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let i=t,s=n==null?void 0:n.errors;if(s!=null){let l=i.findIndex(u=>u.route.id&&(s==null?void 0:s[u.route.id])!==void 0);tt(l>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),i=i.slice(0,Math.min(i.length,l+1))}let o=!1,a=-1;if(n)for(let l=0;l<i.length;l++){let u=i[l];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(a=l),u.route.id){let{loaderData:h,errors:f}=n,d=u.route.loader&&!h.hasOwnProperty(u.route.id)&&(!f||f[u.route.id]===void 0);if(u.route.lazy||d){o=!0,a>=0?i=i.slice(0,a+1):i=[i[0]];break}}}return i.reduceRight((l,u,h)=>{let f,d=!1,g=null,_=null;n&&(f=s&&u.route.id?s[u.route.id]:void 0,g=u.route.errorElement||gN,o&&(a<0&&h===0?(nb("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,_=null):a===h&&(d=!0,_=u.route.hydrateFallbackElement||null)));let y=e.concat(i.slice(0,h+1)),E=()=>{let w;return f?w=g:d?w=_:u.route.Component?w=F.createElement(u.route.Component,null):u.route.element?w=u.route.element:w=l,F.createElement(_N,{match:u,routeContext:{outlet:l,matches:y,isDataRoute:n!=null},children:w})};return n&&(u.route.ErrorBoundary||u.route.errorElement||h===0)?F.createElement(mN,{location:n.location,revalidation:n.revalidation,component:g,error:f,children:E(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):E()},null)}function g_(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function vN(t){let e=F.useContext(Ro);return tt(e,g_(t)),e}function wN(t){let e=F.useContext(cf);return tt(e,g_(t)),e}function EN(t){let e=F.useContext(Cr);return tt(e,g_(t)),e}function m_(t){let e=EN(t),n=e.matches[e.matches.length-1];return tt(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function SN(){return m_("useRouteId")}function TN(){var r;let t=F.useContext(p_),e=wN("useRouteError"),n=m_("useRouteError");return t!==void 0?t:(r=e.errors)==null?void 0:r[n]}function bN(){let{router:t}=vN("useNavigate"),e=m_("useNavigate"),n=F.useRef(!1);return ZT(()=>{n.current=!0}),F.useCallback(async(i,s={})=>{jn(n.current,JT),n.current&&(typeof i=="number"?t.navigate(i):await t.navigate(i,{fromRouteId:e,...s}))},[t,e])}var m1={};function nb(t,e,n){!e&&!m1[t]&&(m1[t]=!0,jn(!1,n))}F.memo(xN);function xN({routes:t,future:e,state:n}){return tb(t,void 0,n,e)}function ma(t){tt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function RN({basename:t="/",children:e=null,location:n,navigationType:r="POP",navigator:i,static:s=!1}){tt(!Ll(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let o=t.replace(/^\/*/,"/"),a=F.useMemo(()=>({basename:o,navigator:i,static:s,future:{}}),[o,i,s]);typeof n=="string"&&(n=fs(n));let{pathname:l="/",search:u="",hash:h="",state:f=null,key:d="default"}=n,g=F.useMemo(()=>{let _=di(l,o);return _==null?null:{location:{pathname:_,search:u,hash:h,state:f,key:d},navigationType:r}},[o,l,u,h,f,d,r]);return jn(g!=null,`<Router basename="${o}"> is not able to match the URL "${l}${u}${h}" because it does not start with the basename, so the <Router> won't render anything.`),g==null?null:F.createElement(nr.Provider,{value:a},F.createElement(Ol.Provider,{children:e,value:g}))}function IN({children:t,location:e}){return dN(xg(t),e)}function xg(t,e=[]){let n=[];return F.Children.forEach(t,(r,i)=>{if(!F.isValidElement(r))return;let s=[...e,i];if(r.type===F.Fragment){n.push.apply(n,xg(r.props.children,s));return}tt(r.type===ma,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),tt(!r.props.index||!r.props.children,"An index route cannot have child routes.");let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=xg(r.props.children,s)),n.push(o)}),n}var pc="get",gc="application/x-www-form-urlencoded";function hf(t){return t!=null&&typeof t.tagName=="string"}function AN(t){return hf(t)&&t.tagName.toLowerCase()==="button"}function CN(t){return hf(t)&&t.tagName.toLowerCase()==="form"}function PN(t){return hf(t)&&t.tagName.toLowerCase()==="input"}function kN(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function ON(t,e){return t.button===0&&(!e||e==="_self")&&!kN(t)}var Fu=null;function LN(){if(Fu===null)try{new FormData(document.createElement("form"),0),Fu=!1}catch{Fu=!0}return Fu}var MN=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Wd(t){return t!=null&&!MN.has(t)?(jn(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${gc}"`),null):t}function DN(t,e){let n,r,i,s,o;if(CN(t)){let a=t.getAttribute("action");r=a?di(a,e):null,n=t.getAttribute("method")||pc,i=Wd(t.getAttribute("enctype"))||gc,s=new FormData(t)}else if(AN(t)||PN(t)&&(t.type==="submit"||t.type==="image")){let a=t.form;if(a==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=t.getAttribute("formaction")||a.getAttribute("action");if(r=l?di(l,e):null,n=t.getAttribute("formmethod")||a.getAttribute("method")||pc,i=Wd(t.getAttribute("formenctype"))||Wd(a.getAttribute("enctype"))||gc,s=new FormData(a,t),!LN()){let{name:u,type:h,value:f}=t;if(h==="image"){let d=u?`${u}.`:"";s.append(`${d}x`,"0"),s.append(`${d}y`,"0")}else u&&s.append(u,f)}}else{if(hf(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=pc,r=null,i=gc,o=t}return s&&i==="text/plain"&&(o=s,s=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:s,body:o}}function __(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}async function NN(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function VN(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function FN(t,e,n){let r=await Promise.all(t.map(async i=>{let s=e.routes[i.route.id];if(s){let o=await NN(s,n);return o.links?o.links():[]}return[]}));return $N(r.flat(1).filter(VN).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function _1(t,e,n,r,i,s){let o=(l,u)=>n[u]?l.route.id!==n[u].route.id:!0,a=(l,u)=>{var h;return n[u].pathname!==l.pathname||((h=n[u].route.path)==null?void 0:h.endsWith("*"))&&n[u].params["*"]!==l.params["*"]};return s==="assets"?e.filter((l,u)=>o(l,u)||a(l,u)):s==="data"?e.filter((l,u)=>{var f;let h=r.routes[l.route.id];if(!h||!h.hasLoader)return!1;if(o(l,u)||a(l,u))return!0;if(l.route.shouldRevalidate){let d=l.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((f=n[0])==null?void 0:f.params)||{},nextUrl:new URL(t,window.origin),nextParams:l.params,defaultShouldRevalidate:!0});if(typeof d=="boolean")return d}return!0}):[]}function zN(t,e,{includeHydrateFallback:n}={}){return jN(t.map(r=>{let i=e.routes[r.route.id];if(!i)return[];let s=[i.module];return i.clientActionModule&&(s=s.concat(i.clientActionModule)),i.clientLoaderModule&&(s=s.concat(i.clientLoaderModule)),n&&i.hydrateFallbackModule&&(s=s.concat(i.hydrateFallbackModule)),i.imports&&(s=s.concat(i.imports)),s}).flat(1))}function jN(t){return[...new Set(t)]}function BN(t){let e={},n=Object.keys(t).sort();for(let r of n)e[r]=t[r];return e}function $N(t,e){let n=new Set;return new Set(e),t.reduce((r,i)=>{let s=JSON.stringify(BN(i));return n.has(s)||(n.add(s),r.push({key:s,link:i})),r},[])}function UN(t){let e=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function HN(){let t=F.useContext(Ro);return __(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function WN(){let t=F.useContext(cf);return __(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var y_=F.createContext(void 0);y_.displayName="FrameworkContext";function rb(){let t=F.useContext(y_);return __(t,"You must render this element inside a <HydratedRouter> element"),t}function qN(t,e){let n=F.useContext(y_),[r,i]=F.useState(!1),[s,o]=F.useState(!1),{onFocus:a,onBlur:l,onMouseEnter:u,onMouseLeave:h,onTouchStart:f}=e,d=F.useRef(null);F.useEffect(()=>{if(t==="render"&&o(!0),t==="viewport"){let y=w=>{w.forEach(m=>{o(m.isIntersecting)})},E=new IntersectionObserver(y,{threshold:.5});return d.current&&E.observe(d.current),()=>{E.disconnect()}}},[t]),F.useEffect(()=>{if(r){let y=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(y)}}},[r]);let g=()=>{i(!0)},_=()=>{i(!1),o(!1)};return n?t!=="intent"?[s,d,{}]:[s,d,{onFocus:oa(a,g),onBlur:oa(l,_),onMouseEnter:oa(u,g),onMouseLeave:oa(h,_),onTouchStart:oa(f,g)}]:[!1,d,{}]}function oa(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function GN({page:t,...e}){let{router:n}=HN(),r=F.useMemo(()=>WT(n.routes,t,n.basename),[n.routes,t,n.basename]);return r?F.createElement(QN,{page:t,matches:r,...e}):null}function KN(t){let{manifest:e,routeModules:n}=rb(),[r,i]=F.useState([]);return F.useEffect(()=>{let s=!1;return FN(t,e,n).then(o=>{s||i(o)}),()=>{s=!0}},[t,e,n]),r}function QN({page:t,matches:e,...n}){let r=ds(),{manifest:i,routeModules:s}=rb(),{loaderData:o,matches:a}=WN(),l=F.useMemo(()=>_1(t,e,a,i,r,"data"),[t,e,a,i,r]),u=F.useMemo(()=>_1(t,e,a,i,r,"assets"),[t,e,a,i,r]),h=F.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let g=new Set,_=!1;if(e.forEach(E=>{var m;let w=i.routes[E.route.id];!w||!w.hasLoader||(!l.some(S=>S.route.id===E.route.id)&&E.route.id in o&&((m=s[E.route.id])!=null&&m.shouldRevalidate)||w.hasClientLoader?_=!0:g.add(E.route.id))}),g.size===0)return[];let y=UN(t);return _&&g.size>0&&y.searchParams.set("_routes",e.filter(E=>g.has(E.route.id)).map(E=>E.route.id).join(",")),[y.pathname+y.search]},[o,r,i,l,e,t,s]),f=F.useMemo(()=>zN(u,i),[u,i]),d=KN(u);return F.createElement(F.Fragment,null,h.map(g=>F.createElement("link",{key:g,rel:"prefetch",as:"fetch",href:g,...n})),f.map(g=>F.createElement("link",{key:g,rel:"modulepreload",href:g,...n})),d.map(({key:g,link:_})=>F.createElement("link",{key:g,..._})))}function YN(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var ib=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{ib&&(window.__reactRouterVersion="7.2.0")}catch{}function XN({basename:t,children:e,window:n}){let r=F.useRef();r.current==null&&(r.current=zD({window:n,v5Compat:!0}));let i=r.current,[s,o]=F.useState({action:i.action,location:i.location}),a=F.useCallback(l=>{F.startTransition(()=>o(l))},[o]);return F.useLayoutEffect(()=>i.listen(a),[i,a]),F.createElement(RN,{basename:t,children:e,location:s.location,navigationType:s.action,navigator:i})}var sb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,yr=F.forwardRef(function({onClick:e,discover:n="render",prefetch:r="none",relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:h,viewTransition:f,...d},g){let{basename:_}=F.useContext(nr),y=typeof u=="string"&&sb.test(u),E,w=!1;if(typeof u=="string"&&y&&(E=u,ib))try{let b=new URL(window.location.href),x=u.startsWith("//")?new URL(b.protocol+u):new URL(u),P=di(x.pathname,_);x.origin===b.origin&&P!=null?u=P+x.search+x.hash:w=!0}catch{jn(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let m=hN(u,{relative:i}),[S,C,O]=qN(r,d),M=tV(u,{replace:o,state:a,target:l,preventScrollReset:h,relative:i,viewTransition:f});function R(b){e&&e(b),b.defaultPrevented||M(b)}let T=F.createElement("a",{...d,...O,href:E||m,onClick:w||s?e:R,ref:YN(g,C),target:l,"data-discover":!y&&n==="render"?"true":void 0});return S&&!y?F.createElement(F.Fragment,null,T,F.createElement(GN,{page:m})):T});yr.displayName="Link";var JN=F.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:r="",end:i=!1,style:s,to:o,viewTransition:a,children:l,...u},h){let f=Ml(o,{relative:u.relative}),d=ds(),g=F.useContext(cf),{navigator:_,basename:y}=F.useContext(nr),E=g!=null&&oV(f)&&a===!0,w=_.encodeLocation?_.encodeLocation(f).pathname:f.pathname,m=d.pathname,S=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;n||(m=m.toLowerCase(),S=S?S.toLowerCase():null,w=w.toLowerCase()),S&&y&&(S=di(S,y)||S);const C=w!=="/"&&w.endsWith("/")?w.length-1:w.length;let O=m===w||!i&&m.startsWith(w)&&m.charAt(C)==="/",M=S!=null&&(S===w||!i&&S.startsWith(w)&&S.charAt(w.length)==="/"),R={isActive:O,isPending:M,isTransitioning:E},T=O?e:void 0,b;typeof r=="function"?b=r(R):b=[r,O?"active":null,M?"pending":null,E?"transitioning":null].filter(Boolean).join(" ");let x=typeof s=="function"?s(R):s;return F.createElement(yr,{...u,"aria-current":T,className:b,ref:h,style:x,to:o,viewTransition:a},typeof l=="function"?l(R):l)});JN.displayName="NavLink";var ZN=F.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:r,replace:i,state:s,method:o=pc,action:a,onSubmit:l,relative:u,preventScrollReset:h,viewTransition:f,...d},g)=>{let _=iV(),y=sV(a,{relative:u}),E=o.toLowerCase()==="get"?"get":"post",w=typeof a=="string"&&sb.test(a),m=S=>{if(l&&l(S),S.defaultPrevented)return;S.preventDefault();let C=S.nativeEvent.submitter,O=(C==null?void 0:C.getAttribute("formmethod"))||o;_(C||S.currentTarget,{fetcherKey:e,method:O,navigate:n,replace:i,state:s,relative:u,preventScrollReset:h,viewTransition:f})};return F.createElement("form",{ref:g,method:E,action:y,onSubmit:r?l:m,...d,"data-discover":!w&&t==="render"?"true":void 0})});ZN.displayName="Form";function eV(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ob(t){let e=F.useContext(Ro);return tt(e,eV(t)),e}function tV(t,{target:e,replace:n,state:r,preventScrollReset:i,relative:s,viewTransition:o}={}){let a=eb(),l=ds(),u=Ml(t,{relative:s});return F.useCallback(h=>{if(ON(h,e)){h.preventDefault();let f=n!==void 0?n:hl(l)===hl(u);a(t,{replace:f,state:r,preventScrollReset:i,relative:s,viewTransition:o})}},[l,a,u,n,r,e,t,i,s,o])}var nV=0,rV=()=>`__${String(++nV)}__`;function iV(){let{router:t}=ob("useSubmit"),{basename:e}=F.useContext(nr),n=SN();return F.useCallback(async(r,i={})=>{let{action:s,method:o,encType:a,formData:l,body:u}=DN(r,e);if(i.navigate===!1){let h=i.fetcherKey||rV();await t.fetch(h,n,i.action||s,{preventScrollReset:i.preventScrollReset,formData:l,body:u,formMethod:i.method||o,formEncType:i.encType||a,flushSync:i.flushSync})}else await t.navigate(i.action||s,{preventScrollReset:i.preventScrollReset,formData:l,body:u,formMethod:i.method||o,formEncType:i.encType||a,replace:i.replace,state:i.state,fromRouteId:n,flushSync:i.flushSync,viewTransition:i.viewTransition})},[t,e,n])}function sV(t,{relative:e}={}){let{basename:n}=F.useContext(nr),r=F.useContext(Cr);tt(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),s={...Ml(t||".",{relative:e})},o=ds();if(t==null){s.search=o.search;let a=new URLSearchParams(s.search),l=a.getAll("index");if(l.some(h=>h==="")){a.delete("index"),l.filter(f=>f).forEach(f=>a.append("index",f));let h=a.toString();s.search=h?`?${h}`:""}}return(!t||t===".")&&i.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(s.pathname=s.pathname==="/"?n:_r([n,s.pathname])),hl(s)}function oV(t,e={}){let n=F.useContext(XT);tt(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=ob("useViewTransitionState"),i=Ml(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=di(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=di(n.nextLocation.pathname,r)||n.nextLocation.pathname;return ph(i.pathname,o)!=null||ph(i.pathname,s)!=null}new TextEncoder;const aV=()=>{};var y1={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ab=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},lV=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},lb={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,h=s>>2,f=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(d=64)),r.push(n[h],n[f],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ab(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):lV(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||f==null)throw new uV;const d=s<<2|a>>4;if(r.push(d),u!==64){const g=a<<4&240|u>>2;if(r.push(g),f!==64){const _=u<<6&192|f;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class uV extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const cV=function(t){const e=ab(t);return lb.encodeByteArray(e,!0)},gh=function(t){return cV(t).replace(/\./g,"")},hV=function(t){try{return lb.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function fV(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const dV=()=>fV().__FIREBASE_DEFAULTS__,pV=()=>{if(typeof process>"u"||typeof y1>"u")return;const t=y1.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},gV=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&hV(t[1]);return e&&JSON.parse(e)},v_=()=>{try{return aV()||dV()||pV()||gV()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},mV=t=>{var e,n;return(n=(e=v_())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},_V=t=>{const e=mV(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ub=()=>{var t;return(t=v_())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yV{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function vV(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[gh(JSON.stringify(n)),gh(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wV(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function EV(){var t;const e=(t=v_())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function SV(){return!EV()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function TV(){try{return typeof indexedDB=="object"}catch{return!1}}function bV(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xV="FirebaseError";class Io extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=xV,Object.setPrototypeOf(this,Io.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,cb.prototype.create)}}class cb{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?RV(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Io(i,a,r)}}function RV(t,e){return t.replace(IV,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const IV=/\{\$([^}]+)}/g;function mh(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(v1(s)&&v1(o)){if(!mh(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function v1(t){return t!==null&&typeof t=="object"}/**
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
 */function Tr(t){return t&&t._delegate?t._delegate:t}class fl{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const zi="[DEFAULT]";/**
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
 */class AV{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new yV;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(PV(e))try{this.getOrInitializeService({instanceIdentifier:zi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=zi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zi){return this.instances.has(e)}getOptions(e=zi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:CV(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=zi){return this.component?this.component.multipleInstances?e:zi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function CV(t){return t===zi?void 0:t}function PV(t){return t.instantiationMode==="EAGER"}/**
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
 */class kV{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new AV(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ie||(Ie={}));const OV={debug:Ie.DEBUG,verbose:Ie.VERBOSE,info:Ie.INFO,warn:Ie.WARN,error:Ie.ERROR,silent:Ie.SILENT},LV=Ie.INFO,MV={[Ie.DEBUG]:"log",[Ie.VERBOSE]:"log",[Ie.INFO]:"info",[Ie.WARN]:"warn",[Ie.ERROR]:"error"},DV=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=MV[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hb{constructor(e){this.name=e,this._logLevel=LV,this._logHandler=DV,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?OV[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ie.DEBUG,...e),this._logHandler(this,Ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ie.VERBOSE,...e),this._logHandler(this,Ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ie.INFO,...e),this._logHandler(this,Ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ie.WARN,...e),this._logHandler(this,Ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ie.ERROR,...e),this._logHandler(this,Ie.ERROR,...e)}}const NV=(t,e)=>e.some(n=>t instanceof n);let w1,E1;function VV(){return w1||(w1=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function FV(){return E1||(E1=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fb=new WeakMap,Rg=new WeakMap,db=new WeakMap,qd=new WeakMap,w_=new WeakMap;function zV(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ii(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&fb.set(n,t)}).catch(()=>{}),w_.set(e,t),e}function jV(t){if(Rg.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Rg.set(t,e)}let Ig={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Rg.get(t);if(e==="objectStoreNames")return t.objectStoreNames||db.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ii(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function BV(t){Ig=t(Ig)}function $V(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Gd(this),e,...n);return db.set(r,e.sort?e.sort():[e]),ii(r)}:FV().includes(t)?function(...e){return t.apply(Gd(this),e),ii(fb.get(this))}:function(...e){return ii(t.apply(Gd(this),e))}}function UV(t){return typeof t=="function"?$V(t):(t instanceof IDBTransaction&&jV(t),NV(t,VV())?new Proxy(t,Ig):t)}function ii(t){if(t instanceof IDBRequest)return zV(t);if(qd.has(t))return qd.get(t);const e=UV(t);return e!==t&&(qd.set(t,e),w_.set(e,t)),e}const Gd=t=>w_.get(t);function HV(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ii(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ii(o.result),l.oldVersion,l.newVersion,ii(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const WV=["get","getKey","getAll","getAllKeys","count"],qV=["put","add","delete","clear"],Kd=new Map;function S1(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Kd.get(e))return Kd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=qV.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||WV.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Kd.set(e,s),s}BV(t=>({...t,get:(e,n,r)=>S1(e,n)||t.get(e,n,r),has:(e,n)=>!!S1(e,n)||t.has(e,n)}));/**
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
 */class GV{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(KV(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function KV(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ag="@firebase/app",T1="0.11.2";/**
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
 */const br=new hb("@firebase/app"),QV="@firebase/app-compat",YV="@firebase/analytics-compat",XV="@firebase/analytics",JV="@firebase/app-check-compat",ZV="@firebase/app-check",eF="@firebase/auth",tF="@firebase/auth-compat",nF="@firebase/database",rF="@firebase/data-connect",iF="@firebase/database-compat",sF="@firebase/functions",oF="@firebase/functions-compat",aF="@firebase/installations",lF="@firebase/installations-compat",uF="@firebase/messaging",cF="@firebase/messaging-compat",hF="@firebase/performance",fF="@firebase/performance-compat",dF="@firebase/remote-config",pF="@firebase/remote-config-compat",gF="@firebase/storage",mF="@firebase/storage-compat",_F="@firebase/firestore",yF="@firebase/vertexai",vF="@firebase/firestore-compat",wF="firebase",EF="11.4.0";/**
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
 */const Cg="[DEFAULT]",SF={[Ag]:"fire-core",[QV]:"fire-core-compat",[XV]:"fire-analytics",[YV]:"fire-analytics-compat",[ZV]:"fire-app-check",[JV]:"fire-app-check-compat",[eF]:"fire-auth",[tF]:"fire-auth-compat",[nF]:"fire-rtdb",[rF]:"fire-data-connect",[iF]:"fire-rtdb-compat",[sF]:"fire-fn",[oF]:"fire-fn-compat",[aF]:"fire-iid",[lF]:"fire-iid-compat",[uF]:"fire-fcm",[cF]:"fire-fcm-compat",[hF]:"fire-perf",[fF]:"fire-perf-compat",[dF]:"fire-rc",[pF]:"fire-rc-compat",[gF]:"fire-gcs",[mF]:"fire-gcs-compat",[_F]:"fire-fst",[vF]:"fire-fst-compat",[yF]:"fire-vertex","fire-js":"fire-js",[wF]:"fire-js-all"};/**
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
 */const _h=new Map,TF=new Map,Pg=new Map;function b1(t,e){try{t.container.addComponent(e)}catch(n){br.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function yh(t){const e=t.name;if(Pg.has(e))return br.debug(`There were multiple attempts to register component ${e}.`),!1;Pg.set(e,t);for(const n of _h.values())b1(n,t);for(const n of TF.values())b1(n,t);return!0}function bF(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function xF(t){return t==null?!1:t.settings!==void 0}/**
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
 */const RF={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},si=new cb("app","Firebase",RF);/**
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
 */class IF{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new fl("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw si.create("app-deleted",{appName:this._name})}}/**
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
 */const AF=EF;function pb(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Cg,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw si.create("bad-app-name",{appName:String(i)});if(n||(n=ub()),!n)throw si.create("no-options");const s=_h.get(i);if(s){if(mh(n,s.options)&&mh(r,s.config))return s;throw si.create("duplicate-app",{appName:i})}const o=new kV(i);for(const l of Pg.values())o.addComponent(l);const a=new IF(n,r,o);return _h.set(i,a),a}function CF(t=Cg){const e=_h.get(t);if(!e&&t===Cg&&ub())return pb();if(!e)throw si.create("no-app",{appName:t});return e}function Xs(t,e,n){var r;let i=(r=SF[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),br.warn(a.join(" "));return}yh(new fl(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const PF="firebase-heartbeat-database",kF=1,dl="firebase-heartbeat-store";let Qd=null;function gb(){return Qd||(Qd=HV(PF,kF,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(dl)}catch(n){console.warn(n)}}}}).catch(t=>{throw si.create("idb-open",{originalErrorMessage:t.message})})),Qd}async function OF(t){try{const n=(await gb()).transaction(dl),r=await n.objectStore(dl).get(mb(t));return await n.done,r}catch(e){if(e instanceof Io)br.warn(e.message);else{const n=si.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});br.warn(n.message)}}}async function x1(t,e){try{const r=(await gb()).transaction(dl,"readwrite");await r.objectStore(dl).put(e,mb(t)),await r.done}catch(n){if(n instanceof Io)br.warn(n.message);else{const r=si.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});br.warn(r.message)}}}function mb(t){return`${t.name}!${t.options.appId}`}/**
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
 */const LF=1024,MF=30;class DF{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new VF(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=R1();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>MF){const o=FF(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){br.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=R1(),{heartbeatsToSend:r,unsentEntries:i}=NF(this._heartbeatsCache.heartbeats),s=gh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return br.warn(n),""}}}function R1(){return new Date().toISOString().substring(0,10)}function NF(t,e=LF){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),I1(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),I1(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class VF{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return TV()?bV().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await OF(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return x1(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return x1(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function I1(t){return gh(JSON.stringify({version:2,heartbeats:t})).length}function FF(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function zF(t){yh(new fl("platform-logger",e=>new GV(e),"PRIVATE")),yh(new fl("heartbeat",e=>new DF(e),"PRIVATE")),Xs(Ag,T1,t),Xs(Ag,T1,"esm2017"),Xs("fire-js","")}zF("");var A1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var oi,_b;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,T){function b(){}b.prototype=T.prototype,R.D=T.prototype,R.prototype=new b,R.prototype.constructor=R,R.C=function(x,P,k){for(var A=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)A[Z-2]=arguments[Z];return T.prototype[P].apply(x,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(R,T,b){b||(b=0);var x=Array(16);if(typeof T=="string")for(var P=0;16>P;++P)x[P]=T.charCodeAt(b++)|T.charCodeAt(b++)<<8|T.charCodeAt(b++)<<16|T.charCodeAt(b++)<<24;else for(P=0;16>P;++P)x[P]=T[b++]|T[b++]<<8|T[b++]<<16|T[b++]<<24;T=R.g[0],b=R.g[1],P=R.g[2];var k=R.g[3],A=T+(k^b&(P^k))+x[0]+3614090360&4294967295;T=b+(A<<7&4294967295|A>>>25),A=k+(P^T&(b^P))+x[1]+3905402710&4294967295,k=T+(A<<12&4294967295|A>>>20),A=P+(b^k&(T^b))+x[2]+606105819&4294967295,P=k+(A<<17&4294967295|A>>>15),A=b+(T^P&(k^T))+x[3]+3250441966&4294967295,b=P+(A<<22&4294967295|A>>>10),A=T+(k^b&(P^k))+x[4]+4118548399&4294967295,T=b+(A<<7&4294967295|A>>>25),A=k+(P^T&(b^P))+x[5]+1200080426&4294967295,k=T+(A<<12&4294967295|A>>>20),A=P+(b^k&(T^b))+x[6]+2821735955&4294967295,P=k+(A<<17&4294967295|A>>>15),A=b+(T^P&(k^T))+x[7]+4249261313&4294967295,b=P+(A<<22&4294967295|A>>>10),A=T+(k^b&(P^k))+x[8]+1770035416&4294967295,T=b+(A<<7&4294967295|A>>>25),A=k+(P^T&(b^P))+x[9]+2336552879&4294967295,k=T+(A<<12&4294967295|A>>>20),A=P+(b^k&(T^b))+x[10]+4294925233&4294967295,P=k+(A<<17&4294967295|A>>>15),A=b+(T^P&(k^T))+x[11]+2304563134&4294967295,b=P+(A<<22&4294967295|A>>>10),A=T+(k^b&(P^k))+x[12]+1804603682&4294967295,T=b+(A<<7&4294967295|A>>>25),A=k+(P^T&(b^P))+x[13]+4254626195&4294967295,k=T+(A<<12&4294967295|A>>>20),A=P+(b^k&(T^b))+x[14]+2792965006&4294967295,P=k+(A<<17&4294967295|A>>>15),A=b+(T^P&(k^T))+x[15]+1236535329&4294967295,b=P+(A<<22&4294967295|A>>>10),A=T+(P^k&(b^P))+x[1]+4129170786&4294967295,T=b+(A<<5&4294967295|A>>>27),A=k+(b^P&(T^b))+x[6]+3225465664&4294967295,k=T+(A<<9&4294967295|A>>>23),A=P+(T^b&(k^T))+x[11]+643717713&4294967295,P=k+(A<<14&4294967295|A>>>18),A=b+(k^T&(P^k))+x[0]+3921069994&4294967295,b=P+(A<<20&4294967295|A>>>12),A=T+(P^k&(b^P))+x[5]+3593408605&4294967295,T=b+(A<<5&4294967295|A>>>27),A=k+(b^P&(T^b))+x[10]+38016083&4294967295,k=T+(A<<9&4294967295|A>>>23),A=P+(T^b&(k^T))+x[15]+3634488961&4294967295,P=k+(A<<14&4294967295|A>>>18),A=b+(k^T&(P^k))+x[4]+3889429448&4294967295,b=P+(A<<20&4294967295|A>>>12),A=T+(P^k&(b^P))+x[9]+568446438&4294967295,T=b+(A<<5&4294967295|A>>>27),A=k+(b^P&(T^b))+x[14]+3275163606&4294967295,k=T+(A<<9&4294967295|A>>>23),A=P+(T^b&(k^T))+x[3]+4107603335&4294967295,P=k+(A<<14&4294967295|A>>>18),A=b+(k^T&(P^k))+x[8]+1163531501&4294967295,b=P+(A<<20&4294967295|A>>>12),A=T+(P^k&(b^P))+x[13]+2850285829&4294967295,T=b+(A<<5&4294967295|A>>>27),A=k+(b^P&(T^b))+x[2]+4243563512&4294967295,k=T+(A<<9&4294967295|A>>>23),A=P+(T^b&(k^T))+x[7]+1735328473&4294967295,P=k+(A<<14&4294967295|A>>>18),A=b+(k^T&(P^k))+x[12]+2368359562&4294967295,b=P+(A<<20&4294967295|A>>>12),A=T+(b^P^k)+x[5]+4294588738&4294967295,T=b+(A<<4&4294967295|A>>>28),A=k+(T^b^P)+x[8]+2272392833&4294967295,k=T+(A<<11&4294967295|A>>>21),A=P+(k^T^b)+x[11]+1839030562&4294967295,P=k+(A<<16&4294967295|A>>>16),A=b+(P^k^T)+x[14]+4259657740&4294967295,b=P+(A<<23&4294967295|A>>>9),A=T+(b^P^k)+x[1]+2763975236&4294967295,T=b+(A<<4&4294967295|A>>>28),A=k+(T^b^P)+x[4]+1272893353&4294967295,k=T+(A<<11&4294967295|A>>>21),A=P+(k^T^b)+x[7]+4139469664&4294967295,P=k+(A<<16&4294967295|A>>>16),A=b+(P^k^T)+x[10]+3200236656&4294967295,b=P+(A<<23&4294967295|A>>>9),A=T+(b^P^k)+x[13]+681279174&4294967295,T=b+(A<<4&4294967295|A>>>28),A=k+(T^b^P)+x[0]+3936430074&4294967295,k=T+(A<<11&4294967295|A>>>21),A=P+(k^T^b)+x[3]+3572445317&4294967295,P=k+(A<<16&4294967295|A>>>16),A=b+(P^k^T)+x[6]+76029189&4294967295,b=P+(A<<23&4294967295|A>>>9),A=T+(b^P^k)+x[9]+3654602809&4294967295,T=b+(A<<4&4294967295|A>>>28),A=k+(T^b^P)+x[12]+3873151461&4294967295,k=T+(A<<11&4294967295|A>>>21),A=P+(k^T^b)+x[15]+530742520&4294967295,P=k+(A<<16&4294967295|A>>>16),A=b+(P^k^T)+x[2]+3299628645&4294967295,b=P+(A<<23&4294967295|A>>>9),A=T+(P^(b|~k))+x[0]+4096336452&4294967295,T=b+(A<<6&4294967295|A>>>26),A=k+(b^(T|~P))+x[7]+1126891415&4294967295,k=T+(A<<10&4294967295|A>>>22),A=P+(T^(k|~b))+x[14]+2878612391&4294967295,P=k+(A<<15&4294967295|A>>>17),A=b+(k^(P|~T))+x[5]+4237533241&4294967295,b=P+(A<<21&4294967295|A>>>11),A=T+(P^(b|~k))+x[12]+1700485571&4294967295,T=b+(A<<6&4294967295|A>>>26),A=k+(b^(T|~P))+x[3]+2399980690&4294967295,k=T+(A<<10&4294967295|A>>>22),A=P+(T^(k|~b))+x[10]+4293915773&4294967295,P=k+(A<<15&4294967295|A>>>17),A=b+(k^(P|~T))+x[1]+2240044497&4294967295,b=P+(A<<21&4294967295|A>>>11),A=T+(P^(b|~k))+x[8]+1873313359&4294967295,T=b+(A<<6&4294967295|A>>>26),A=k+(b^(T|~P))+x[15]+4264355552&4294967295,k=T+(A<<10&4294967295|A>>>22),A=P+(T^(k|~b))+x[6]+2734768916&4294967295,P=k+(A<<15&4294967295|A>>>17),A=b+(k^(P|~T))+x[13]+1309151649&4294967295,b=P+(A<<21&4294967295|A>>>11),A=T+(P^(b|~k))+x[4]+4149444226&4294967295,T=b+(A<<6&4294967295|A>>>26),A=k+(b^(T|~P))+x[11]+3174756917&4294967295,k=T+(A<<10&4294967295|A>>>22),A=P+(T^(k|~b))+x[2]+718787259&4294967295,P=k+(A<<15&4294967295|A>>>17),A=b+(k^(P|~T))+x[9]+3951481745&4294967295,R.g[0]=R.g[0]+T&4294967295,R.g[1]=R.g[1]+(P+(A<<21&4294967295|A>>>11))&4294967295,R.g[2]=R.g[2]+P&4294967295,R.g[3]=R.g[3]+k&4294967295}r.prototype.u=function(R,T){T===void 0&&(T=R.length);for(var b=T-this.blockSize,x=this.B,P=this.h,k=0;k<T;){if(P==0)for(;k<=b;)i(this,R,k),k+=this.blockSize;if(typeof R=="string"){for(;k<T;)if(x[P++]=R.charCodeAt(k++),P==this.blockSize){i(this,x),P=0;break}}else for(;k<T;)if(x[P++]=R[k++],P==this.blockSize){i(this,x),P=0;break}}this.h=P,this.o+=T},r.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var T=1;T<R.length-8;++T)R[T]=0;var b=8*this.o;for(T=R.length-8;T<R.length;++T)R[T]=b&255,b/=256;for(this.u(R),R=Array(16),T=b=0;4>T;++T)for(var x=0;32>x;x+=8)R[b++]=this.g[T]>>>x&255;return R};function s(R,T){var b=a;return Object.prototype.hasOwnProperty.call(b,R)?b[R]:b[R]=T(R)}function o(R,T){this.h=T;for(var b=[],x=!0,P=R.length-1;0<=P;P--){var k=R[P]|0;x&&k==T||(b[P]=k,x=!1)}this.g=b}var a={};function l(R){return-128<=R&&128>R?s(R,function(T){return new o([T|0],0>T?-1:0)}):new o([R|0],0>R?-1:0)}function u(R){if(isNaN(R)||!isFinite(R))return f;if(0>R)return E(u(-R));for(var T=[],b=1,x=0;R>=b;x++)T[x]=R/b|0,b*=4294967296;return new o(T,0)}function h(R,T){if(R.length==0)throw Error("number format error: empty string");if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(R.charAt(0)=="-")return E(h(R.substring(1),T));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var b=u(Math.pow(T,8)),x=f,P=0;P<R.length;P+=8){var k=Math.min(8,R.length-P),A=parseInt(R.substring(P,P+k),T);8>k?(k=u(Math.pow(T,k)),x=x.j(k).add(u(A))):(x=x.j(b),x=x.add(u(A)))}return x}var f=l(0),d=l(1),g=l(16777216);t=o.prototype,t.m=function(){if(y(this))return-E(this).m();for(var R=0,T=1,b=0;b<this.g.length;b++){var x=this.i(b);R+=(0<=x?x:4294967296+x)*T,T*=4294967296}return R},t.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(_(this))return"0";if(y(this))return"-"+E(this).toString(R);for(var T=u(Math.pow(R,6)),b=this,x="";;){var P=C(b,T).g;b=w(b,P.j(T));var k=((0<b.g.length?b.g[0]:b.h)>>>0).toString(R);if(b=P,_(b))return k+x;for(;6>k.length;)k="0"+k;x=k+x}},t.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function _(R){if(R.h!=0)return!1;for(var T=0;T<R.g.length;T++)if(R.g[T]!=0)return!1;return!0}function y(R){return R.h==-1}t.l=function(R){return R=w(this,R),y(R)?-1:_(R)?0:1};function E(R){for(var T=R.g.length,b=[],x=0;x<T;x++)b[x]=~R.g[x];return new o(b,~R.h).add(d)}t.abs=function(){return y(this)?E(this):this},t.add=function(R){for(var T=Math.max(this.g.length,R.g.length),b=[],x=0,P=0;P<=T;P++){var k=x+(this.i(P)&65535)+(R.i(P)&65535),A=(k>>>16)+(this.i(P)>>>16)+(R.i(P)>>>16);x=A>>>16,k&=65535,A&=65535,b[P]=A<<16|k}return new o(b,b[b.length-1]&-2147483648?-1:0)};function w(R,T){return R.add(E(T))}t.j=function(R){if(_(this)||_(R))return f;if(y(this))return y(R)?E(this).j(E(R)):E(E(this).j(R));if(y(R))return E(this.j(E(R)));if(0>this.l(g)&&0>R.l(g))return u(this.m()*R.m());for(var T=this.g.length+R.g.length,b=[],x=0;x<2*T;x++)b[x]=0;for(x=0;x<this.g.length;x++)for(var P=0;P<R.g.length;P++){var k=this.i(x)>>>16,A=this.i(x)&65535,Z=R.i(P)>>>16,le=R.i(P)&65535;b[2*x+2*P]+=A*le,m(b,2*x+2*P),b[2*x+2*P+1]+=k*le,m(b,2*x+2*P+1),b[2*x+2*P+1]+=A*Z,m(b,2*x+2*P+1),b[2*x+2*P+2]+=k*Z,m(b,2*x+2*P+2)}for(x=0;x<T;x++)b[x]=b[2*x+1]<<16|b[2*x];for(x=T;x<2*T;x++)b[x]=0;return new o(b,0)};function m(R,T){for(;(R[T]&65535)!=R[T];)R[T+1]+=R[T]>>>16,R[T]&=65535,T++}function S(R,T){this.g=R,this.h=T}function C(R,T){if(_(T))throw Error("division by zero");if(_(R))return new S(f,f);if(y(R))return T=C(E(R),T),new S(E(T.g),E(T.h));if(y(T))return T=C(R,E(T)),new S(E(T.g),T.h);if(30<R.g.length){if(y(R)||y(T))throw Error("slowDivide_ only works with positive integers.");for(var b=d,x=T;0>=x.l(R);)b=O(b),x=O(x);var P=M(b,1),k=M(x,1);for(x=M(x,2),b=M(b,2);!_(x);){var A=k.add(x);0>=A.l(R)&&(P=P.add(b),k=A),x=M(x,1),b=M(b,1)}return T=w(R,P.j(T)),new S(P,T)}for(P=f;0<=R.l(T);){for(b=Math.max(1,Math.floor(R.m()/T.m())),x=Math.ceil(Math.log(b)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),k=u(b),A=k.j(T);y(A)||0<A.l(R);)b-=x,k=u(b),A=k.j(T);_(k)&&(k=d),P=P.add(k),R=w(R,A)}return new S(P,R)}t.A=function(R){return C(this,R).h},t.and=function(R){for(var T=Math.max(this.g.length,R.g.length),b=[],x=0;x<T;x++)b[x]=this.i(x)&R.i(x);return new o(b,this.h&R.h)},t.or=function(R){for(var T=Math.max(this.g.length,R.g.length),b=[],x=0;x<T;x++)b[x]=this.i(x)|R.i(x);return new o(b,this.h|R.h)},t.xor=function(R){for(var T=Math.max(this.g.length,R.g.length),b=[],x=0;x<T;x++)b[x]=this.i(x)^R.i(x);return new o(b,this.h^R.h)};function O(R){for(var T=R.g.length+1,b=[],x=0;x<T;x++)b[x]=R.i(x)<<1|R.i(x-1)>>>31;return new o(b,R.h)}function M(R,T){var b=T>>5;T%=32;for(var x=R.g.length-b,P=[],k=0;k<x;k++)P[k]=0<T?R.i(k+b)>>>T|R.i(k+b+1)<<32-T:R.i(k+b);return new o(P,R.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,_b=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,oi=o}).apply(typeof A1<"u"?A1:typeof self<"u"?self:typeof window<"u"?window:{});var zu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yb,_a,vb,mc,kg,wb,Eb,Sb;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,p,v){return c==Array.prototype||c==Object.prototype||(c[p]=v.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof zu=="object"&&zu];for(var p=0;p<c.length;++p){var v=c[p];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var r=n(this);function i(c,p){if(p)e:{var v=r;c=c.split(".");for(var I=0;I<c.length-1;I++){var N=c[I];if(!(N in v))break e;v=v[N]}c=c[c.length-1],I=v[c],p=p(I),p!=I&&p!=null&&e(v,c,{configurable:!0,writable:!0,value:p})}}function s(c,p){c instanceof String&&(c+="");var v=0,I=!1,N={next:function(){if(!I&&v<c.length){var B=v++;return{value:p(B,c[B]),done:!1}}return I=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}i("Array.prototype.values",function(c){return c||function(){return s(this,function(p,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(c){var p=typeof c;return p=p!="object"?p:c?Array.isArray(c)?"array":p:"null",p=="array"||p=="object"&&typeof c.length=="number"}function u(c){var p=typeof c;return p=="object"&&c!=null||p=="function"}function h(c,p,v){return c.call.apply(c.bind,arguments)}function f(c,p,v){if(!c)throw Error();if(2<arguments.length){var I=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,I),c.apply(p,N)}}return function(){return c.apply(p,arguments)}}function d(c,p,v){return d=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,d.apply(null,arguments)}function g(c,p){var v=Array.prototype.slice.call(arguments,1);return function(){var I=v.slice();return I.push.apply(I,arguments),c.apply(this,I)}}function _(c,p){function v(){}v.prototype=p.prototype,c.aa=p.prototype,c.prototype=new v,c.prototype.constructor=c,c.Qb=function(I,N,B){for(var X=Array(arguments.length-2),ze=2;ze<arguments.length;ze++)X[ze-2]=arguments[ze];return p.prototype[N].apply(I,X)}}function y(c){const p=c.length;if(0<p){const v=Array(p);for(let I=0;I<p;I++)v[I]=c[I];return v}return[]}function E(c,p){for(let v=1;v<arguments.length;v++){const I=arguments[v];if(l(I)){const N=c.length||0,B=I.length||0;c.length=N+B;for(let X=0;X<B;X++)c[N+X]=I[X]}else c.push(I)}}class w{constructor(p,v){this.i=p,this.j=v,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function m(c){return/^[\s\xa0]*$/.test(c)}function S(){var c=a.navigator;return c&&(c=c.userAgent)?c:""}function C(c){return C[" "](c),c}C[" "]=function(){};var O=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function M(c,p,v){for(const I in c)p.call(v,c[I],I,c)}function R(c,p){for(const v in c)p.call(void 0,c[v],v,c)}function T(c){const p={};for(const v in c)p[v]=c[v];return p}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(c,p){let v,I;for(let N=1;N<arguments.length;N++){I=arguments[N];for(v in I)c[v]=I[v];for(let B=0;B<b.length;B++)v=b[B],Object.prototype.hasOwnProperty.call(I,v)&&(c[v]=I[v])}}function P(c){var p=1;c=c.split(":");const v=[];for(;0<p&&c.length;)v.push(c.shift()),p--;return c.length&&v.push(c.join(":")),v}function k(c){a.setTimeout(()=>{throw c},0)}function A(){var c=J;let p=null;return c.g&&(p=c.g,c.g=c.g.next,c.g||(c.h=null),p.next=null),p}class Z{constructor(){this.h=this.g=null}add(p,v){const I=le.get();I.set(p,v),this.h?this.h.next=I:this.g=I,this.h=I}}var le=new w(()=>new he,c=>c.reset());class he{constructor(){this.next=this.g=this.h=null}set(p,v){this.h=p,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let pe,G=!1,J=new Z,ae=()=>{const c=a.Promise.resolve(void 0);pe=()=>{c.then(ye)}};var ye=()=>{for(var c;c=A();){try{c.h.call(c.g)}catch(v){k(v)}var p=le;p.j(c),100>p.h&&(p.h++,c.next=p.g,p.g=c)}G=!1};function ue(){this.s=this.s,this.C=this.C}ue.prototype.s=!1,ue.prototype.ma=function(){this.s||(this.s=!0,this.N())},ue.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function D(c,p){this.type=c,this.g=this.target=p,this.defaultPrevented=!1}D.prototype.h=function(){this.defaultPrevented=!0};var z=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var c=!1,p=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const v=()=>{};a.addEventListener("test",v,p),a.removeEventListener("test",v,p)}catch{}return c}();function L(c,p){if(D.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var v=this.type=c.type,I=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=p,p=c.relatedTarget){if(O){e:{try{C(p.nodeName);var N=!0;break e}catch{}N=!1}N||(p=null)}}else v=="mouseover"?p=c.fromElement:v=="mouseout"&&(p=c.toElement);this.relatedTarget=p,I?(this.clientX=I.clientX!==void 0?I.clientX:I.pageX,this.clientY=I.clientY!==void 0?I.clientY:I.pageY,this.screenX=I.screenX||0,this.screenY=I.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:V[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&L.aa.h.call(this)}}_(L,D);var V={2:"touch",3:"pen",4:"mouse"};L.prototype.h=function(){L.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var j="closure_listenable_"+(1e6*Math.random()|0),H=0;function te(c,p,v,I,N){this.listener=c,this.proxy=null,this.src=p,this.type=v,this.capture=!!I,this.ha=N,this.key=++H,this.da=this.fa=!1}function Y(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Q(c){this.src=c,this.g={},this.h=0}Q.prototype.add=function(c,p,v,I,N){var B=c.toString();c=this.g[B],c||(c=this.g[B]=[],this.h++);var X=Me(c,p,I,N);return-1<X?(p=c[X],v||(p.fa=!1)):(p=new te(p,this.src,B,!!I,N),p.fa=v,c.push(p)),p};function oe(c,p){var v=p.type;if(v in c.g){var I=c.g[v],N=Array.prototype.indexOf.call(I,p,void 0),B;(B=0<=N)&&Array.prototype.splice.call(I,N,1),B&&(Y(p),c.g[v].length==0&&(delete c.g[v],c.h--))}}function Me(c,p,v,I){for(var N=0;N<c.length;++N){var B=c[N];if(!B.da&&B.listener==p&&B.capture==!!v&&B.ha==I)return N}return-1}var Oe="closure_lm_"+(1e6*Math.random()|0),Pe={};function De(c,p,v,I,N){if(Array.isArray(p)){for(var B=0;B<p.length;B++)De(c,p[B],v,I,N);return null}return v=ny(v),c&&c[j]?c.K(p,v,u(I)?!!I.capture:!!I,N):Ht(c,p,v,!1,I,N)}function Ht(c,p,v,I,N,B){if(!p)throw Error("Invalid event type");var X=u(N)?!!N.capture:!!N,ze=ms(c);if(ze||(c[Oe]=ze=new Q(c)),v=ze.add(p,v,I,X,B),v.proxy)return v;if(I=Pr(),v.proxy=I,I.src=c,I.listener=v,c.addEventListener)z||(N=X),N===void 0&&(N=!1),c.addEventListener(p.toString(),I,N);else if(c.attachEvent)c.attachEvent(ft(p.toString()),I);else if(c.addListener&&c.removeListener)c.addListener(I);else throw Error("addEventListener and attachEvent are unavailable.");return v}function Pr(){function c(v){return p.call(c.src,c.listener,v)}const p=Fe;return c}function Ri(c,p,v,I,N){if(Array.isArray(p))for(var B=0;B<p.length;B++)Ri(c,p[B],v,I,N);else I=u(I)?!!I.capture:!!I,v=ny(v),c&&c[j]?(c=c.i,p=String(p).toString(),p in c.g&&(B=c.g[p],v=Me(B,v,I,N),-1<v&&(Y(B[v]),Array.prototype.splice.call(B,v,1),B.length==0&&(delete c.g[p],c.h--)))):c&&(c=ms(c))&&(p=c.g[p.toString()],c=-1,p&&(c=Me(p,v,I,N)),(v=-1<c?p[c]:null)&&$e(v))}function $e(c){if(typeof c!="number"&&c&&!c.da){var p=c.src;if(p&&p[j])oe(p.i,c);else{var v=c.type,I=c.proxy;p.removeEventListener?p.removeEventListener(v,I,c.capture):p.detachEvent?p.detachEvent(ft(v),I):p.addListener&&p.removeListener&&p.removeListener(I),(v=ms(p))?(oe(v,c),v.h==0&&(v.src=null,p[Oe]=null)):Y(c)}}}function ft(c){return c in Pe?Pe[c]:Pe[c]="on"+c}function Fe(c,p){if(c.da)c=!0;else{p=new L(p,this);var v=c.listener,I=c.ha||c.src;c.fa&&$e(c),c=v.call(I,p)}return c}function ms(c){return c=c[Oe],c instanceof Q?c:null}var If="__closure_events_fn_"+(1e9*Math.random()>>>0);function ny(c){return typeof c=="function"?c:(c[If]||(c[If]=function(p){return c.handleEvent(p)}),c[If])}function kt(){ue.call(this),this.i=new Q(this),this.M=this,this.F=null}_(kt,ue),kt.prototype[j]=!0,kt.prototype.removeEventListener=function(c,p,v,I){Ri(this,c,p,v,I)};function Wt(c,p){var v,I=c.F;if(I)for(v=[];I;I=I.F)v.push(I);if(c=c.M,I=p.type||p,typeof p=="string")p=new D(p,c);else if(p instanceof D)p.target=p.target||c;else{var N=p;p=new D(I,c),x(p,N)}if(N=!0,v)for(var B=v.length-1;0<=B;B--){var X=p.g=v[B];N=$l(X,I,!0,p)&&N}if(X=p.g=c,N=$l(X,I,!0,p)&&N,N=$l(X,I,!1,p)&&N,v)for(B=0;B<v.length;B++)X=p.g=v[B],N=$l(X,I,!1,p)&&N}kt.prototype.N=function(){if(kt.aa.N.call(this),this.i){var c=this.i,p;for(p in c.g){for(var v=c.g[p],I=0;I<v.length;I++)Y(v[I]);delete c.g[p],c.h--}}this.F=null},kt.prototype.K=function(c,p,v,I){return this.i.add(String(c),p,!1,v,I)},kt.prototype.L=function(c,p,v,I){return this.i.add(String(c),p,!0,v,I)};function $l(c,p,v,I){if(p=c.i.g[String(p)],!p)return!0;p=p.concat();for(var N=!0,B=0;B<p.length;++B){var X=p[B];if(X&&!X.da&&X.capture==v){var ze=X.listener,bt=X.ha||X.src;X.fa&&oe(c.i,X),N=ze.call(bt,I)!==!1&&N}}return N&&!I.defaultPrevented}function ry(c,p,v){if(typeof c=="function")v&&(c=d(c,v));else if(c&&typeof c.handleEvent=="function")c=d(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:a.setTimeout(c,p||0)}function iy(c){c.g=ry(()=>{c.g=null,c.i&&(c.i=!1,iy(c))},c.l);const p=c.h;c.h=null,c.m.apply(null,p)}class qx extends ue{constructor(p,v){super(),this.m=p,this.l=v,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:iy(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Lo(c){ue.call(this),this.h=c,this.g={}}_(Lo,ue);var sy=[];function oy(c){M(c.g,function(p,v){this.g.hasOwnProperty(v)&&$e(p)},c),c.g={}}Lo.prototype.N=function(){Lo.aa.N.call(this),oy(this)},Lo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Af=a.JSON.stringify,Gx=a.JSON.parse,Kx=class{stringify(c){return a.JSON.stringify(c,void 0)}parse(c){return a.JSON.parse(c,void 0)}};function Cf(){}Cf.prototype.h=null;function ay(c){return c.h||(c.h=c.i())}function ly(){}var Mo={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Pf(){D.call(this,"d")}_(Pf,D);function kf(){D.call(this,"c")}_(kf,D);var Ii={},uy=null;function Ul(){return uy=uy||new kt}Ii.La="serverreachability";function cy(c){D.call(this,Ii.La,c)}_(cy,D);function Do(c){const p=Ul();Wt(p,new cy(p))}Ii.STAT_EVENT="statevent";function hy(c,p){D.call(this,Ii.STAT_EVENT,c),this.stat=p}_(hy,D);function qt(c){const p=Ul();Wt(p,new hy(p,c))}Ii.Ma="timingevent";function fy(c,p){D.call(this,Ii.Ma,c),this.size=p}_(fy,D);function No(c,p){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){c()},p)}function Vo(){this.g=!0}Vo.prototype.xa=function(){this.g=!1};function Qx(c,p,v,I,N,B){c.info(function(){if(c.g)if(B)for(var X="",ze=B.split("&"),bt=0;bt<ze.length;bt++){var ke=ze[bt].split("=");if(1<ke.length){var Ot=ke[0];ke=ke[1];var Lt=Ot.split("_");X=2<=Lt.length&&Lt[1]=="type"?X+(Ot+"="+ke+"&"):X+(Ot+"=redacted&")}}else X=null;else X=B;return"XMLHTTP REQ ("+I+") [attempt "+N+"]: "+p+`
`+v+`
`+X})}function Yx(c,p,v,I,N,B,X){c.info(function(){return"XMLHTTP RESP ("+I+") [ attempt "+N+"]: "+p+`
`+v+`
`+B+" "+X})}function _s(c,p,v,I){c.info(function(){return"XMLHTTP TEXT ("+p+"): "+Jx(c,v)+(I?" "+I:"")})}function Xx(c,p){c.info(function(){return"TIMEOUT: "+p})}Vo.prototype.info=function(){};function Jx(c,p){if(!c.g)return p;if(!p)return null;try{var v=JSON.parse(p);if(v){for(c=0;c<v.length;c++)if(Array.isArray(v[c])){var I=v[c];if(!(2>I.length)){var N=I[1];if(Array.isArray(N)&&!(1>N.length)){var B=N[0];if(B!="noop"&&B!="stop"&&B!="close")for(var X=1;X<N.length;X++)N[X]=""}}}}return Af(v)}catch{return p}}var Hl={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},dy={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Of;function Wl(){}_(Wl,Cf),Wl.prototype.g=function(){return new XMLHttpRequest},Wl.prototype.i=function(){return{}},Of=new Wl;function kr(c,p,v,I){this.j=c,this.i=p,this.l=v,this.R=I||1,this.U=new Lo(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new py}function py(){this.i=null,this.g="",this.h=!1}var gy={},Lf={};function Mf(c,p,v){c.L=1,c.v=Ql(rr(p)),c.m=v,c.P=!0,my(c,null)}function my(c,p){c.F=Date.now(),ql(c),c.A=rr(c.v);var v=c.A,I=c.R;Array.isArray(I)||(I=[String(I)]),Py(v.i,"t",I),c.C=0,v=c.j.J,c.h=new py,c.g=Ky(c.j,v?p:null,!c.m),0<c.O&&(c.M=new qx(d(c.Y,c,c.g),c.O)),p=c.U,v=c.g,I=c.ca;var N="readystatechange";Array.isArray(N)||(N&&(sy[0]=N.toString()),N=sy);for(var B=0;B<N.length;B++){var X=De(v,N[B],I||p.handleEvent,!1,p.h||p);if(!X)break;p.g[X.key]=X}p=c.H?T(c.H):{},c.m?(c.u||(c.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,p)):(c.u="GET",c.g.ea(c.A,c.u,null,p)),Do(),Qx(c.i,c.u,c.A,c.l,c.R,c.m)}kr.prototype.ca=function(c){c=c.target;const p=this.M;p&&ir(c)==3?p.j():this.Y(c)},kr.prototype.Y=function(c){try{if(c==this.g)e:{const Lt=ir(this.g);var p=this.g.Ba();const ws=this.g.Z();if(!(3>Lt)&&(Lt!=3||this.g&&(this.h.h||this.g.oa()||Vy(this.g)))){this.J||Lt!=4||p==7||(p==8||0>=ws?Do(3):Do(2)),Df(this);var v=this.g.Z();this.X=v;t:if(_y(this)){var I=Vy(this.g);c="";var N=I.length,B=ir(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ai(this),Fo(this);var X="";break t}this.h.i=new a.TextDecoder}for(p=0;p<N;p++)this.h.h=!0,c+=this.h.i.decode(I[p],{stream:!(B&&p==N-1)});I.length=0,this.h.g+=c,this.C=0,X=this.h.g}else X=this.g.oa();if(this.o=v==200,Yx(this.i,this.u,this.A,this.l,this.R,Lt,v),this.o){if(this.T&&!this.K){t:{if(this.g){var ze,bt=this.g;if((ze=bt.g?bt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!m(ze)){var ke=ze;break t}}ke=null}if(v=ke)_s(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Nf(this,v);else{this.o=!1,this.s=3,qt(12),Ai(this),Fo(this);break e}}if(this.P){v=!0;let Pn;for(;!this.J&&this.C<X.length;)if(Pn=Zx(this,X),Pn==Lf){Lt==4&&(this.s=4,qt(14),v=!1),_s(this.i,this.l,null,"[Incomplete Response]");break}else if(Pn==gy){this.s=4,qt(15),_s(this.i,this.l,X,"[Invalid Chunk]"),v=!1;break}else _s(this.i,this.l,Pn,null),Nf(this,Pn);if(_y(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Lt!=4||X.length!=0||this.h.h||(this.s=1,qt(16),v=!1),this.o=this.o&&v,!v)_s(this.i,this.l,X,"[Invalid Chunked Response]"),Ai(this),Fo(this);else if(0<X.length&&!this.W){this.W=!0;var Ot=this.j;Ot.g==this&&Ot.ba&&!Ot.M&&(Ot.j.info("Great, no buffering proxy detected. Bytes received: "+X.length),$f(Ot),Ot.M=!0,qt(11))}}else _s(this.i,this.l,X,null),Nf(this,X);Lt==4&&Ai(this),this.o&&!this.J&&(Lt==4?Hy(this.j,this):(this.o=!1,ql(this)))}else mR(this.g),v==400&&0<X.indexOf("Unknown SID")?(this.s=3,qt(12)):(this.s=0,qt(13)),Ai(this),Fo(this)}}}catch{}finally{}};function _y(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function Zx(c,p){var v=c.C,I=p.indexOf(`
`,v);return I==-1?Lf:(v=Number(p.substring(v,I)),isNaN(v)?gy:(I+=1,I+v>p.length?Lf:(p=p.slice(I,I+v),c.C=I+v,p)))}kr.prototype.cancel=function(){this.J=!0,Ai(this)};function ql(c){c.S=Date.now()+c.I,yy(c,c.I)}function yy(c,p){if(c.B!=null)throw Error("WatchDog timer not null");c.B=No(d(c.ba,c),p)}function Df(c){c.B&&(a.clearTimeout(c.B),c.B=null)}kr.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(Xx(this.i,this.A),this.L!=2&&(Do(),qt(17)),Ai(this),this.s=2,Fo(this)):yy(this,this.S-c)};function Fo(c){c.j.G==0||c.J||Hy(c.j,c)}function Ai(c){Df(c);var p=c.M;p&&typeof p.ma=="function"&&p.ma(),c.M=null,oy(c.U),c.g&&(p=c.g,c.g=null,p.abort(),p.ma())}function Nf(c,p){try{var v=c.j;if(v.G!=0&&(v.g==c||Vf(v.h,c))){if(!c.K&&Vf(v.h,c)&&v.G==3){try{var I=v.Da.g.parse(p)}catch{I=null}if(Array.isArray(I)&&I.length==3){var N=I;if(N[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<c.F)tu(v),Zl(v);else break e;Bf(v),qt(18)}}else v.za=N[1],0<v.za-v.T&&37500>N[2]&&v.F&&v.v==0&&!v.C&&(v.C=No(d(v.Za,v),6e3));if(1>=Ey(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else Pi(v,11)}else if((c.K||v.g==c)&&tu(v),!m(p))for(N=v.Da.g.parse(p),p=0;p<N.length;p++){let ke=N[p];if(v.T=ke[0],ke=ke[1],v.G==2)if(ke[0]=="c"){v.K=ke[1],v.ia=ke[2];const Ot=ke[3];Ot!=null&&(v.la=Ot,v.j.info("VER="+v.la));const Lt=ke[4];Lt!=null&&(v.Aa=Lt,v.j.info("SVER="+v.Aa));const ws=ke[5];ws!=null&&typeof ws=="number"&&0<ws&&(I=1.5*ws,v.L=I,v.j.info("backChannelRequestTimeoutMs_="+I)),I=v;const Pn=c.g;if(Pn){const ru=Pn.g?Pn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ru){var B=I.h;B.g||ru.indexOf("spdy")==-1&&ru.indexOf("quic")==-1&&ru.indexOf("h2")==-1||(B.j=B.l,B.g=new Set,B.h&&(Ff(B,B.h),B.h=null))}if(I.D){const Uf=Pn.g?Pn.g.getResponseHeader("X-HTTP-Session-Id"):null;Uf&&(I.ya=Uf,Ue(I.I,I.D,Uf))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-c.F,v.j.info("Handshake RTT: "+v.R+"ms")),I=v;var X=c;if(I.qa=Gy(I,I.J?I.ia:null,I.W),X.K){Sy(I.h,X);var ze=X,bt=I.L;bt&&(ze.I=bt),ze.B&&(Df(ze),ql(ze)),I.g=X}else $y(I);0<v.i.length&&eu(v)}else ke[0]!="stop"&&ke[0]!="close"||Pi(v,7);else v.G==3&&(ke[0]=="stop"||ke[0]=="close"?ke[0]=="stop"?Pi(v,7):jf(v):ke[0]!="noop"&&v.l&&v.l.ta(ke),v.v=0)}}Do(4)}catch{}}var eR=class{constructor(c,p){this.g=c,this.map=p}};function vy(c){this.l=c||10,a.PerformanceNavigationTiming?(c=a.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function wy(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Ey(c){return c.h?1:c.g?c.g.size:0}function Vf(c,p){return c.h?c.h==p:c.g?c.g.has(p):!1}function Ff(c,p){c.g?c.g.add(p):c.h=p}function Sy(c,p){c.h&&c.h==p?c.h=null:c.g&&c.g.has(p)&&c.g.delete(p)}vy.prototype.cancel=function(){if(this.i=Ty(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Ty(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let p=c.i;for(const v of c.g.values())p=p.concat(v.D);return p}return y(c.i)}function tR(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(l(c)){for(var p=[],v=c.length,I=0;I<v;I++)p.push(c[I]);return p}p=[],v=0;for(I in c)p[v++]=c[I];return p}function nR(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(l(c)||typeof c=="string"){var p=[];c=c.length;for(var v=0;v<c;v++)p.push(v);return p}p=[],v=0;for(const I in c)p[v++]=I;return p}}}function by(c,p){if(c.forEach&&typeof c.forEach=="function")c.forEach(p,void 0);else if(l(c)||typeof c=="string")Array.prototype.forEach.call(c,p,void 0);else for(var v=nR(c),I=tR(c),N=I.length,B=0;B<N;B++)p.call(void 0,I[B],v&&v[B],c)}var xy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rR(c,p){if(c){c=c.split("&");for(var v=0;v<c.length;v++){var I=c[v].indexOf("="),N=null;if(0<=I){var B=c[v].substring(0,I);N=c[v].substring(I+1)}else B=c[v];p(B,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Ci(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof Ci){this.h=c.h,Gl(this,c.j),this.o=c.o,this.g=c.g,Kl(this,c.s),this.l=c.l;var p=c.i,v=new Bo;v.i=p.i,p.g&&(v.g=new Map(p.g),v.h=p.h),Ry(this,v),this.m=c.m}else c&&(p=String(c).match(xy))?(this.h=!1,Gl(this,p[1]||"",!0),this.o=zo(p[2]||""),this.g=zo(p[3]||"",!0),Kl(this,p[4]),this.l=zo(p[5]||"",!0),Ry(this,p[6]||"",!0),this.m=zo(p[7]||"")):(this.h=!1,this.i=new Bo(null,this.h))}Ci.prototype.toString=function(){var c=[],p=this.j;p&&c.push(jo(p,Iy,!0),":");var v=this.g;return(v||p=="file")&&(c.push("//"),(p=this.o)&&c.push(jo(p,Iy,!0),"@"),c.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&c.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&c.push("/"),c.push(jo(v,v.charAt(0)=="/"?oR:sR,!0))),(v=this.i.toString())&&c.push("?",v),(v=this.m)&&c.push("#",jo(v,lR)),c.join("")};function rr(c){return new Ci(c)}function Gl(c,p,v){c.j=v?zo(p,!0):p,c.j&&(c.j=c.j.replace(/:$/,""))}function Kl(c,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);c.s=p}else c.s=null}function Ry(c,p,v){p instanceof Bo?(c.i=p,uR(c.i,c.h)):(v||(p=jo(p,aR)),c.i=new Bo(p,c.h))}function Ue(c,p,v){c.i.set(p,v)}function Ql(c){return Ue(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function zo(c,p){return c?p?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function jo(c,p,v){return typeof c=="string"?(c=encodeURI(c).replace(p,iR),v&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function iR(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Iy=/[#\/\?@]/g,sR=/[#\?:]/g,oR=/[#\?]/g,aR=/[#\?@]/g,lR=/#/g;function Bo(c,p){this.h=this.g=null,this.i=c||null,this.j=!!p}function Or(c){c.g||(c.g=new Map,c.h=0,c.i&&rR(c.i,function(p,v){c.add(decodeURIComponent(p.replace(/\+/g," ")),v)}))}t=Bo.prototype,t.add=function(c,p){Or(this),this.i=null,c=ys(this,c);var v=this.g.get(c);return v||this.g.set(c,v=[]),v.push(p),this.h+=1,this};function Ay(c,p){Or(c),p=ys(c,p),c.g.has(p)&&(c.i=null,c.h-=c.g.get(p).length,c.g.delete(p))}function Cy(c,p){return Or(c),p=ys(c,p),c.g.has(p)}t.forEach=function(c,p){Or(this),this.g.forEach(function(v,I){v.forEach(function(N){c.call(p,N,I,this)},this)},this)},t.na=function(){Or(this);const c=Array.from(this.g.values()),p=Array.from(this.g.keys()),v=[];for(let I=0;I<p.length;I++){const N=c[I];for(let B=0;B<N.length;B++)v.push(p[I])}return v},t.V=function(c){Or(this);let p=[];if(typeof c=="string")Cy(this,c)&&(p=p.concat(this.g.get(ys(this,c))));else{c=Array.from(this.g.values());for(let v=0;v<c.length;v++)p=p.concat(c[v])}return p},t.set=function(c,p){return Or(this),this.i=null,c=ys(this,c),Cy(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[p]),this.h+=1,this},t.get=function(c,p){return c?(c=this.V(c),0<c.length?String(c[0]):p):p};function Py(c,p,v){Ay(c,p),0<v.length&&(c.i=null,c.g.set(ys(c,p),y(v)),c.h+=v.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],p=Array.from(this.g.keys());for(var v=0;v<p.length;v++){var I=p[v];const B=encodeURIComponent(String(I)),X=this.V(I);for(I=0;I<X.length;I++){var N=B;X[I]!==""&&(N+="="+encodeURIComponent(String(X[I]))),c.push(N)}}return this.i=c.join("&")};function ys(c,p){return p=String(p),c.j&&(p=p.toLowerCase()),p}function uR(c,p){p&&!c.j&&(Or(c),c.i=null,c.g.forEach(function(v,I){var N=I.toLowerCase();I!=N&&(Ay(this,I),Py(this,N,v))},c)),c.j=p}function cR(c,p){const v=new Vo;if(a.Image){const I=new Image;I.onload=g(Lr,v,"TestLoadImage: loaded",!0,p,I),I.onerror=g(Lr,v,"TestLoadImage: error",!1,p,I),I.onabort=g(Lr,v,"TestLoadImage: abort",!1,p,I),I.ontimeout=g(Lr,v,"TestLoadImage: timeout",!1,p,I),a.setTimeout(function(){I.ontimeout&&I.ontimeout()},1e4),I.src=c}else p(!1)}function hR(c,p){const v=new Vo,I=new AbortController,N=setTimeout(()=>{I.abort(),Lr(v,"TestPingServer: timeout",!1,p)},1e4);fetch(c,{signal:I.signal}).then(B=>{clearTimeout(N),B.ok?Lr(v,"TestPingServer: ok",!0,p):Lr(v,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(N),Lr(v,"TestPingServer: error",!1,p)})}function Lr(c,p,v,I,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),I(v)}catch{}}function fR(){this.g=new Kx}function dR(c,p,v){const I=v||"";try{by(c,function(N,B){let X=N;u(N)&&(X=Af(N)),p.push(I+B+"="+encodeURIComponent(X))})}catch(N){throw p.push(I+"type="+encodeURIComponent("_badmap")),N}}function Yl(c){this.l=c.Ub||null,this.j=c.eb||!1}_(Yl,Cf),Yl.prototype.g=function(){return new Xl(this.l,this.j)},Yl.prototype.i=function(c){return function(){return c}}({});function Xl(c,p){kt.call(this),this.D=c,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}_(Xl,kt),t=Xl.prototype,t.open=function(c,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=p,this.readyState=1,Uo(this)},t.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(p.body=c),(this.D||a).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,$o(this)),this.readyState=0},t.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Uo(this)),this.g&&(this.readyState=3,Uo(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ky(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function ky(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}t.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var p=c.value?c.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!c.done}))&&(this.response=this.responseText+=p)}c.done?$o(this):Uo(this),this.readyState==3&&ky(this)}},t.Ra=function(c){this.g&&(this.response=this.responseText=c,$o(this))},t.Qa=function(c){this.g&&(this.response=c,$o(this))},t.ga=function(){this.g&&$o(this)};function $o(c){c.readyState=4,c.l=null,c.j=null,c.v=null,Uo(c)}t.setRequestHeader=function(c,p){this.u.append(c,p)},t.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],p=this.h.entries();for(var v=p.next();!v.done;)v=v.value,c.push(v[0]+": "+v[1]),v=p.next();return c.join(`\r
`)};function Uo(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Xl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Oy(c){let p="";return M(c,function(v,I){p+=I,p+=":",p+=v,p+=`\r
`}),p}function zf(c,p,v){e:{for(I in v){var I=!1;break e}I=!0}I||(v=Oy(v),typeof c=="string"?v!=null&&encodeURIComponent(String(v)):Ue(c,p,v))}function st(c){kt.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}_(st,kt);var pR=/^https?$/i,gR=["POST","PUT"];t=st.prototype,t.Ha=function(c){this.J=c},t.ea=function(c,p,v,I){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);p=p?p.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Of.g(),this.v=this.o?ay(this.o):ay(Of),this.g.onreadystatechange=d(this.Ea,this);try{this.B=!0,this.g.open(p,String(c),!0),this.B=!1}catch(B){Ly(this,B);return}if(c=v||"",v=new Map(this.headers),I)if(Object.getPrototypeOf(I)===Object.prototype)for(var N in I)v.set(N,I[N]);else if(typeof I.keys=="function"&&typeof I.get=="function")for(const B of I.keys())v.set(B,I.get(B));else throw Error("Unknown input type for opt_headers: "+String(I));I=Array.from(v.keys()).find(B=>B.toLowerCase()=="content-type"),N=a.FormData&&c instanceof a.FormData,!(0<=Array.prototype.indexOf.call(gR,p,void 0))||I||N||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[B,X]of v)this.g.setRequestHeader(B,X);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ny(this),this.u=!0,this.g.send(c),this.u=!1}catch(B){Ly(this,B)}};function Ly(c,p){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=p,c.m=5,My(c),Jl(c)}function My(c){c.A||(c.A=!0,Wt(c,"complete"),Wt(c,"error"))}t.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Wt(this,"complete"),Wt(this,"abort"),Jl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Jl(this,!0)),st.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Dy(this):this.bb())},t.bb=function(){Dy(this)};function Dy(c){if(c.h&&typeof o<"u"&&(!c.v[1]||ir(c)!=4||c.Z()!=2)){if(c.u&&ir(c)==4)ry(c.Ea,0,c);else if(Wt(c,"readystatechange"),ir(c)==4){c.h=!1;try{const X=c.Z();e:switch(X){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var v;if(!(v=p)){var I;if(I=X===0){var N=String(c.D).match(xy)[1]||null;!N&&a.self&&a.self.location&&(N=a.self.location.protocol.slice(0,-1)),I=!pR.test(N?N.toLowerCase():"")}v=I}if(v)Wt(c,"complete"),Wt(c,"success");else{c.m=6;try{var B=2<ir(c)?c.g.statusText:""}catch{B=""}c.l=B+" ["+c.Z()+"]",My(c)}}finally{Jl(c)}}}}function Jl(c,p){if(c.g){Ny(c);const v=c.g,I=c.v[0]?()=>{}:null;c.g=null,c.v=null,p||Wt(c,"ready");try{v.onreadystatechange=I}catch{}}}function Ny(c){c.I&&(a.clearTimeout(c.I),c.I=null)}t.isActive=function(){return!!this.g};function ir(c){return c.g?c.g.readyState:0}t.Z=function(){try{return 2<ir(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(c){if(this.g){var p=this.g.responseText;return c&&p.indexOf(c)==0&&(p=p.substring(c.length)),Gx(p)}};function Vy(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function mR(c){const p={};c=(c.g&&2<=ir(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let I=0;I<c.length;I++){if(m(c[I]))continue;var v=P(c[I]);const N=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const B=p[N]||[];p[N]=B,B.push(v)}R(p,function(I){return I.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ho(c,p,v){return v&&v.internalChannelParams&&v.internalChannelParams[c]||p}function Fy(c){this.Aa=0,this.i=[],this.j=new Vo,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ho("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ho("baseRetryDelayMs",5e3,c),this.cb=Ho("retryDelaySeedMs",1e4,c),this.Wa=Ho("forwardChannelMaxRetries",2,c),this.wa=Ho("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new vy(c&&c.concurrentRequestLimit),this.Da=new fR,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Fy.prototype,t.la=8,t.G=1,t.connect=function(c,p,v,I){qt(0),this.W=c,this.H=p||{},v&&I!==void 0&&(this.H.OSID=v,this.H.OAID=I),this.F=this.X,this.I=Gy(this,null,this.W),eu(this)};function jf(c){if(zy(c),c.G==3){var p=c.U++,v=rr(c.I);if(Ue(v,"SID",c.K),Ue(v,"RID",p),Ue(v,"TYPE","terminate"),Wo(c,v),p=new kr(c,c.j,p),p.L=2,p.v=Ql(rr(v)),v=!1,a.navigator&&a.navigator.sendBeacon)try{v=a.navigator.sendBeacon(p.v.toString(),"")}catch{}!v&&a.Image&&(new Image().src=p.v,v=!0),v||(p.g=Ky(p.j,null),p.g.ea(p.v)),p.F=Date.now(),ql(p)}qy(c)}function Zl(c){c.g&&($f(c),c.g.cancel(),c.g=null)}function zy(c){Zl(c),c.u&&(a.clearTimeout(c.u),c.u=null),tu(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&a.clearTimeout(c.s),c.s=null)}function eu(c){if(!wy(c.h)&&!c.s){c.s=!0;var p=c.Ga;pe||ae(),G||(pe(),G=!0),J.add(p,c),c.B=0}}function _R(c,p){return Ey(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=p.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=No(d(c.Ga,c,p),Wy(c,c.B)),c.B++,!0)}t.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const N=new kr(this,this.j,c);let B=this.o;if(this.S&&(B?(B=T(B),x(B,this.S)):B=this.S),this.m!==null||this.O||(N.H=B,B=null),this.P)e:{for(var p=0,v=0;v<this.i.length;v++){t:{var I=this.i[v];if("__data__"in I.map&&(I=I.map.__data__,typeof I=="string")){I=I.length;break t}I=void 0}if(I===void 0)break;if(p+=I,4096<p){p=v;break e}if(p===4096||v===this.i.length-1){p=v+1;break e}}p=1e3}else p=1e3;p=By(this,N,p),v=rr(this.I),Ue(v,"RID",c),Ue(v,"CVER",22),this.D&&Ue(v,"X-HTTP-Session-Id",this.D),Wo(this,v),B&&(this.O?p="headers="+encodeURIComponent(String(Oy(B)))+"&"+p:this.m&&zf(v,this.m,B)),Ff(this.h,N),this.Ua&&Ue(v,"TYPE","init"),this.P?(Ue(v,"$req",p),Ue(v,"SID","null"),N.T=!0,Mf(N,v,null)):Mf(N,v,p),this.G=2}}else this.G==3&&(c?jy(this,c):this.i.length==0||wy(this.h)||jy(this))};function jy(c,p){var v;p?v=p.l:v=c.U++;const I=rr(c.I);Ue(I,"SID",c.K),Ue(I,"RID",v),Ue(I,"AID",c.T),Wo(c,I),c.m&&c.o&&zf(I,c.m,c.o),v=new kr(c,c.j,v,c.B+1),c.m===null&&(v.H=c.o),p&&(c.i=p.D.concat(c.i)),p=By(c,v,1e3),v.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),Ff(c.h,v),Mf(v,I,p)}function Wo(c,p){c.H&&M(c.H,function(v,I){Ue(p,I,v)}),c.l&&by({},function(v,I){Ue(p,I,v)})}function By(c,p,v){v=Math.min(c.i.length,v);var I=c.l?d(c.l.Na,c.l,c):null;e:{var N=c.i;let B=-1;for(;;){const X=["count="+v];B==-1?0<v?(B=N[0].g,X.push("ofs="+B)):B=0:X.push("ofs="+B);let ze=!0;for(let bt=0;bt<v;bt++){let ke=N[bt].g;const Ot=N[bt].map;if(ke-=B,0>ke)B=Math.max(0,N[bt].g-100),ze=!1;else try{dR(Ot,X,"req"+ke+"_")}catch{I&&I(Ot)}}if(ze){I=X.join("&");break e}}}return c=c.i.splice(0,v),p.D=c,I}function $y(c){if(!c.g&&!c.u){c.Y=1;var p=c.Fa;pe||ae(),G||(pe(),G=!0),J.add(p,c),c.v=0}}function Bf(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=No(d(c.Fa,c),Wy(c,c.v)),c.v++,!0)}t.Fa=function(){if(this.u=null,Uy(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=No(d(this.ab,this),c)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,qt(10),Zl(this),Uy(this))};function $f(c){c.A!=null&&(a.clearTimeout(c.A),c.A=null)}function Uy(c){c.g=new kr(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var p=rr(c.qa);Ue(p,"RID","rpc"),Ue(p,"SID",c.K),Ue(p,"AID",c.T),Ue(p,"CI",c.F?"0":"1"),!c.F&&c.ja&&Ue(p,"TO",c.ja),Ue(p,"TYPE","xmlhttp"),Wo(c,p),c.m&&c.o&&zf(p,c.m,c.o),c.L&&(c.g.I=c.L);var v=c.g;c=c.ia,v.L=1,v.v=Ql(rr(p)),v.m=null,v.P=!0,my(v,c)}t.Za=function(){this.C!=null&&(this.C=null,Zl(this),Bf(this),qt(19))};function tu(c){c.C!=null&&(a.clearTimeout(c.C),c.C=null)}function Hy(c,p){var v=null;if(c.g==p){tu(c),$f(c),c.g=null;var I=2}else if(Vf(c.h,p))v=p.D,Sy(c.h,p),I=1;else return;if(c.G!=0){if(p.o)if(I==1){v=p.m?p.m.length:0,p=Date.now()-p.F;var N=c.B;I=Ul(),Wt(I,new fy(I,v)),eu(c)}else $y(c);else if(N=p.s,N==3||N==0&&0<p.X||!(I==1&&_R(c,p)||I==2&&Bf(c)))switch(v&&0<v.length&&(p=c.h,p.i=p.i.concat(v)),N){case 1:Pi(c,5);break;case 4:Pi(c,10);break;case 3:Pi(c,6);break;default:Pi(c,2)}}}function Wy(c,p){let v=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(v*=2),v*p}function Pi(c,p){if(c.j.info("Error code "+p),p==2){var v=d(c.fb,c),I=c.Xa;const N=!I;I=new Ci(I||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Gl(I,"https"),Ql(I),N?cR(I.toString(),v):hR(I.toString(),v)}else qt(2);c.G=0,c.l&&c.l.sa(p),qy(c),zy(c)}t.fb=function(c){c?(this.j.info("Successfully pinged google.com"),qt(2)):(this.j.info("Failed to ping google.com"),qt(1))};function qy(c){if(c.G=0,c.ka=[],c.l){const p=Ty(c.h);(p.length!=0||c.i.length!=0)&&(E(c.ka,p),E(c.ka,c.i),c.h.i.length=0,y(c.i),c.i.length=0),c.l.ra()}}function Gy(c,p,v){var I=v instanceof Ci?rr(v):new Ci(v);if(I.g!="")p&&(I.g=p+"."+I.g),Kl(I,I.s);else{var N=a.location;I=N.protocol,p=p?p+"."+N.hostname:N.hostname,N=+N.port;var B=new Ci(null);I&&Gl(B,I),p&&(B.g=p),N&&Kl(B,N),v&&(B.l=v),I=B}return v=c.D,p=c.ya,v&&p&&Ue(I,v,p),Ue(I,"VER",c.la),Wo(c,I),I}function Ky(c,p,v){if(p&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=c.Ca&&!c.pa?new st(new Yl({eb:v})):new st(c.pa),p.Ha(c.J),p}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Qy(){}t=Qy.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function nu(){}nu.prototype.g=function(c,p){return new cn(c,p)};function cn(c,p){kt.call(this),this.g=new Fy(p),this.l=c,this.h=p&&p.messageUrlParams||null,c=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(c?c["X-WebChannel-Content-Type"]=p.messageContentType:c={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(c?c["X-WebChannel-Client-Profile"]=p.va:c={"X-WebChannel-Client-Profile":p.va}),this.g.S=c,(c=p&&p.Sb)&&!m(c)&&(this.g.m=c),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!m(p)&&(this.g.D=p,c=this.h,c!==null&&p in c&&(c=this.h,p in c&&delete c[p])),this.j=new vs(this)}_(cn,kt),cn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},cn.prototype.close=function(){jf(this.g)},cn.prototype.o=function(c){var p=this.g;if(typeof c=="string"){var v={};v.__data__=c,c=v}else this.u&&(v={},v.__data__=Af(c),c=v);p.i.push(new eR(p.Ya++,c)),p.G==3&&eu(p)},cn.prototype.N=function(){this.g.l=null,delete this.j,jf(this.g),delete this.g,cn.aa.N.call(this)};function Yy(c){Pf.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var p=c.__sm__;if(p){e:{for(const v in p){c=v;break e}c=void 0}(this.i=c)&&(c=this.i,p=p!==null&&c in p?p[c]:void 0),this.data=p}else this.data=c}_(Yy,Pf);function Xy(){kf.call(this),this.status=1}_(Xy,kf);function vs(c){this.g=c}_(vs,Qy),vs.prototype.ua=function(){Wt(this.g,"a")},vs.prototype.ta=function(c){Wt(this.g,new Yy(c))},vs.prototype.sa=function(c){Wt(this.g,new Xy)},vs.prototype.ra=function(){Wt(this.g,"b")},nu.prototype.createWebChannel=nu.prototype.g,cn.prototype.send=cn.prototype.o,cn.prototype.open=cn.prototype.m,cn.prototype.close=cn.prototype.close,Sb=function(){return new nu},Eb=function(){return Ul()},wb=Ii,kg={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Hl.NO_ERROR=0,Hl.TIMEOUT=8,Hl.HTTP_ERROR=6,mc=Hl,dy.COMPLETE="complete",vb=dy,ly.EventType=Mo,Mo.OPEN="a",Mo.CLOSE="b",Mo.ERROR="c",Mo.MESSAGE="d",kt.prototype.listen=kt.prototype.K,_a=ly,st.prototype.listenOnce=st.prototype.L,st.prototype.getLastError=st.prototype.Ka,st.prototype.getLastErrorCode=st.prototype.Ba,st.prototype.getStatus=st.prototype.Z,st.prototype.getResponseJson=st.prototype.Oa,st.prototype.getResponseText=st.prototype.oa,st.prototype.send=st.prototype.ea,st.prototype.setWithCredentials=st.prototype.Ha,yb=st}).apply(typeof zu<"u"?zu:typeof self<"u"?self:typeof window<"u"?window:{});const C1="@firebase/firestore",P1="4.7.9";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ft.UNAUTHENTICATED=new Ft(null),Ft.GOOGLE_CREDENTIALS=new Ft("google-credentials-uid"),Ft.FIRST_PARTY=new Ft("first-party-uid"),Ft.MOCK_USER=new Ft("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ao="11.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os=new hb("@firebase/firestore");function xs(){return os.logLevel}function re(t,...e){if(os.logLevel<=Ie.DEBUG){const n=e.map(E_);os.debug(`Firestore (${Ao}): ${t}`,...n)}}function xr(t,...e){if(os.logLevel<=Ie.ERROR){const n=e.map(E_);os.error(`Firestore (${Ao}): ${t}`,...n)}}function po(t,...e){if(os.logLevel<=Ie.WARN){const n=e.map(E_);os.warn(`Firestore (${Ao}): ${t}`,...n)}}function E_(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function de(t="Unexpected state"){const e=`FIRESTORE (${Ao}) INTERNAL ASSERTION FAILED: `+t;throw xr(e),new Error(e)}function Le(t,e){t||de()}function me(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class se extends Io{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class jF{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ft.UNAUTHENTICATED))}shutdown(){}}class BF{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class $F{constructor(e){this.t=e,this.currentUser=Ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Le(this.o===void 0);let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new ai;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ai,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ai)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Le(typeof r.accessToken=="string"),new Tb(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Le(e===null||typeof e=="string"),new Ft(e)}}class UF{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ft.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class HF{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new UF(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class k1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class WF{constructor(e,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,xF(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,n){Le(this.o===void 0);const r=s=>{s.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,re("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new k1(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Le(typeof n.token=="string"),this.R=n.token,new k1(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qF(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=qF(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function xe(t,e){return t<e?-1:t>e?1:0}function go(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O1=-62135596800,L1=1e6;class vt{static now(){return vt.fromMillis(Date.now())}static fromDate(e){return vt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*L1);return new vt(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new se(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new se(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<O1)throw new se(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new se(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/L1}_compareTo(e){return this.seconds===e.seconds?xe(this.nanoseconds,e.nanoseconds):xe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-O1;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{static fromTimestamp(e){return new ge(e)}static min(){return new ge(new vt(0,0))}static max(){return new ge(new vt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M1="__name__";class Gn{constructor(e,n,r){n===void 0?n=0:n>e.length&&de(),r===void 0?r=e.length-n:r>e.length-n&&de(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Gn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Gn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=Gn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return Math.sign(e.length-n.length)}static compareSegments(e,n){const r=Gn.isNumericId(e),i=Gn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?Gn.extractNumericId(e).compare(Gn.extractNumericId(n)):e<n?-1:e>n?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return oi.fromString(e.substring(4,e.length-2))}}class We extends Gn{construct(e,n,r){return new We(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new se(q.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new We(n)}static emptyPath(){return new We([])}}const GF=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class It extends Gn{construct(e,n,r){return new It(e,n,r)}static isValidIdentifier(e){return GF.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),It.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===M1}static keyField(){return new It([M1])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new se(q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new se(q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new se(q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new se(q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new It(n)}static emptyPath(){return new It([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.path=e}static fromPath(e){return new ce(We.fromString(e))}static fromName(e){return new ce(We.fromString(e).popFirst(5))}static empty(){return new ce(We.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&We.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return We.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ce(new We(e.slice()))}}/**
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
 */const pl=-1;function KF(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ge.fromTimestamp(r===1e9?new vt(n+1,0):new vt(n,r));return new pi(i,ce.empty(),e)}function QF(t){return new pi(t.readTime,t.key,pl)}class pi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new pi(ge.min(),ce.empty(),pl)}static max(){return new pi(ge.max(),ce.empty(),pl)}}function YF(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ce.comparator(t.documentKey,e.documentKey),n!==0?n:xe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XF="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class JF{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Co(t){if(t.code!==q.FAILED_PRECONDITION||t.message!==XF)throw t;re("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&de(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new W((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof W?n:W.resolve(n)}catch(n){return W.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):W.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):W.reject(n)}static resolve(e){return new W((n,r)=>{n(e)})}static reject(e){return new W((n,r)=>{r(e)})}static waitFor(e){return new W((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=W.resolve(!1);for(const r of e)n=n.next(i=>i?W.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new W((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(h=>{o[u]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new W((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function ZF(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Po(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class ff{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}ff.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_=-1;function df(t){return t==null}function vh(t){return t===0&&1/t==-1/0}function e4(t){return typeof t=="number"&&Number.isInteger(t)&&!vh(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xb="";function t4(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=D1(e)),e=n4(t.get(n),e);return D1(e)}function n4(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case xb:n+="";break;default:n+=s}}return n}function D1(t){return t+xb+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N1(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function bi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Rb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,n){this.comparator=e,this.root=n||Rt.EMPTY}insert(e,n){return new it(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Rt.BLACK,null,null))}remove(e){return new it(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Rt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ju(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ju(this.root,e,this.comparator,!1)}getReverseIterator(){return new ju(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ju(this.root,e,this.comparator,!0)}}class ju{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Rt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Rt.RED,this.left=i??Rt.EMPTY,this.right=s??Rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Rt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Rt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw de();const e=this.left.check();if(e!==this.right.check())throw de();return e+(this.isRed()?0:1)}}Rt.EMPTY=null,Rt.RED=!0,Rt.BLACK=!1;Rt.EMPTY=new class{constructor(){this.size=0}get key(){throw de()}get value(){throw de()}get color(){throw de()}get left(){throw de()}get right(){throw de()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Rt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.comparator=e,this.data=new it(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new V1(this.data.getIterator())}getIteratorFrom(e){return new V1(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof wt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new wt(this.comparator);return n.data=e,n}}class V1{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e){this.fields=e,e.sort(It.comparator)}static empty(){return new gn([])}unionWith(e){let n=new wt(It.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new gn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return go(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Ib extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Ib("Invalid base64 string: "+s):s}}(e);return new Pt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Pt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return xe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Pt.EMPTY_BYTE_STRING=new Pt("");const r4=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function gi(t){if(Le(!!t),typeof t=="string"){let e=0;const n=r4.exec(t);if(Le(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ut(t.seconds),nanos:ut(t.nanos)}}function ut(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function mi(t){return typeof t=="string"?Pt.fromBase64String(t):Pt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ab="server_timestamp",Cb="__type__",Pb="__previous_value__",kb="__local_write_time__";function T_(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Cb])===null||n===void 0?void 0:n.stringValue)===Ab}function pf(t){const e=t.mapValue.fields[Pb];return T_(e)?pf(e):e}function gl(t){const e=gi(t.mapValue.fields[kb].timestampValue);return new vt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i4{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}const wh="(default)";class ml{constructor(e,n){this.projectId=e,this.database=n||wh}static empty(){return new ml("","")}get isDefaultDatabase(){return this.database===wh}isEqual(e){return e instanceof ml&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ob="__type__",Lb="__max__",Bu={mapValue:{fields:{__type__:{stringValue:Lb}}}},Mb="__vector__",Eh="value";function _i(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?T_(t)?4:o4(t)?9007199254740991:s4(t)?10:11:de()}function tr(t,e){if(t===e)return!0;const n=_i(t);if(n!==_i(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return gl(t).isEqual(gl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=gi(i.timestampValue),a=gi(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return mi(i.bytesValue).isEqual(mi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ut(i.geoPointValue.latitude)===ut(s.geoPointValue.latitude)&&ut(i.geoPointValue.longitude)===ut(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ut(i.integerValue)===ut(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ut(i.doubleValue),a=ut(s.doubleValue);return o===a?vh(o)===vh(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return go(t.arrayValue.values||[],e.arrayValue.values||[],tr);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(N1(o)!==N1(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!tr(o[l],a[l])))return!1;return!0}(t,e);default:return de()}}function _l(t,e){return(t.values||[]).find(n=>tr(n,e))!==void 0}function mo(t,e){if(t===e)return 0;const n=_i(t),r=_i(e);if(n!==r)return xe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return xe(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=ut(s.integerValue||s.doubleValue),l=ut(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return F1(t.timestampValue,e.timestampValue);case 4:return F1(gl(t),gl(e));case 5:return xe(t.stringValue,e.stringValue);case 6:return function(s,o){const a=mi(s),l=mi(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const h=xe(a[u],l[u]);if(h!==0)return h}return xe(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=xe(ut(s.latitude),ut(o.latitude));return a!==0?a:xe(ut(s.longitude),ut(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return z1(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,l,u,h;const f=s.fields||{},d=o.fields||{},g=(a=f[Eh])===null||a===void 0?void 0:a.arrayValue,_=(l=d[Eh])===null||l===void 0?void 0:l.arrayValue,y=xe(((u=g==null?void 0:g.values)===null||u===void 0?void 0:u.length)||0,((h=_==null?void 0:_.values)===null||h===void 0?void 0:h.length)||0);return y!==0?y:z1(g,_)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Bu.mapValue&&o===Bu.mapValue)return 0;if(s===Bu.mapValue)return 1;if(o===Bu.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let f=0;f<l.length&&f<h.length;++f){const d=xe(l[f],h[f]);if(d!==0)return d;const g=mo(a[l[f]],u[h[f]]);if(g!==0)return g}return xe(l.length,h.length)}(t.mapValue,e.mapValue);default:throw de()}}function F1(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return xe(t,e);const n=gi(t),r=gi(e),i=xe(n.seconds,r.seconds);return i!==0?i:xe(n.nanos,r.nanos)}function z1(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=mo(n[i],r[i]);if(s)return s}return xe(n.length,r.length)}function _o(t){return Og(t)}function Og(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=gi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return mi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ce.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Og(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Og(n.fields[o])}`;return i+"}"}(t.mapValue):de()}function _c(t){switch(_i(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=pf(t);return e?16+_c(e):16;case 5:return 2*t.stringValue.length;case 6:return mi(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+_c(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return bi(r.fields,(s,o)=>{i+=s.length+_c(o)}),i}(t.mapValue);default:throw de()}}function j1(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Lg(t){return!!t&&"integerValue"in t}function b_(t){return!!t&&"arrayValue"in t}function B1(t){return!!t&&"nullValue"in t}function $1(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function yc(t){return!!t&&"mapValue"in t}function s4(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Ob])===null||n===void 0?void 0:n.stringValue)===Mb}function Ma(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return bi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ma(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ma(t.arrayValue.values[n]);return e}return Object.assign({},t)}function o4(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===Lb}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this.value=e}static empty(){return new rn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!yc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ma(n)}setAll(e){let n=It.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ma(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());yc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return tr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];yc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){bi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new rn(Ma(this.value))}}function Db(t){const e=[];return bi(t.fields,(n,r)=>{const i=new It([n]);if(yc(r)){const s=Db(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new gn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new jt(e,0,ge.min(),ge.min(),ge.min(),rn.empty(),0)}static newFoundDocument(e,n,r,i){return new jt(e,1,n,ge.min(),r,i,0)}static newNoDocument(e,n){return new jt(e,2,n,ge.min(),ge.min(),rn.empty(),0)}static newUnknownDocument(e,n){return new jt(e,3,n,ge.min(),ge.min(),rn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ge.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=rn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=rn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ge.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof jt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new jt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Sh{constructor(e,n){this.position=e,this.inclusive=n}}function U1(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=ce.comparator(ce.fromName(o.referenceValue),n.key):r=mo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function H1(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!tr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Th{constructor(e,n="asc"){this.field=e,this.dir=n}}function a4(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Nb{}class gt extends Nb{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new u4(e,n,r):n==="array-contains"?new f4(e,r):n==="in"?new d4(e,r):n==="not-in"?new p4(e,r):n==="array-contains-any"?new g4(e,r):new gt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new c4(e,r):new h4(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(mo(n,this.value)):n!==null&&_i(this.value)===_i(n)&&this.matchesComparison(mo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return de()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Bn extends Nb{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new Bn(e,n)}matches(e){return Vb(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function Vb(t){return t.op==="and"}function Fb(t){return l4(t)&&Vb(t)}function l4(t){for(const e of t.filters)if(e instanceof Bn)return!1;return!0}function Mg(t){if(t instanceof gt)return t.field.canonicalString()+t.op.toString()+_o(t.value);if(Fb(t))return t.filters.map(e=>Mg(e)).join(",");{const e=t.filters.map(n=>Mg(n)).join(",");return`${t.op}(${e})`}}function zb(t,e){return t instanceof gt?function(r,i){return i instanceof gt&&r.op===i.op&&r.field.isEqual(i.field)&&tr(r.value,i.value)}(t,e):t instanceof Bn?function(r,i){return i instanceof Bn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&zb(o,i.filters[a]),!0):!1}(t,e):void de()}function jb(t){return t instanceof gt?function(n){return`${n.field.canonicalString()} ${n.op} ${_o(n.value)}`}(t):t instanceof Bn?function(n){return n.op.toString()+" {"+n.getFilters().map(jb).join(" ,")+"}"}(t):"Filter"}class u4 extends gt{constructor(e,n,r){super(e,n,r),this.key=ce.fromName(r.referenceValue)}matches(e){const n=ce.comparator(e.key,this.key);return this.matchesComparison(n)}}class c4 extends gt{constructor(e,n){super(e,"in",n),this.keys=Bb("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class h4 extends gt{constructor(e,n){super(e,"not-in",n),this.keys=Bb("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Bb(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ce.fromName(r.referenceValue))}class f4 extends gt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return b_(n)&&_l(n.arrayValue,this.value)}}class d4 extends gt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&_l(this.value.arrayValue,n)}}class p4 extends gt{constructor(e,n){super(e,"not-in",n)}matches(e){if(_l(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!_l(this.value.arrayValue,n)}}class g4 extends gt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!b_(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>_l(this.value.arrayValue,r))}}/**
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
 */class m4{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.le=null}}function W1(t,e=null,n=[],r=[],i=null,s=null,o=null){return new m4(t,e,n,r,i,s,o)}function x_(t){const e=me(t);if(e.le===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Mg(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),df(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>_o(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>_o(r)).join(",")),e.le=n}return e.le}function R_(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!a4(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!zb(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!H1(t.startAt,e.startAt)&&H1(t.endAt,e.endAt)}function Dg(t){return ce.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function _4(t,e,n,r,i,s,o,a){return new Dl(t,e,n,r,i,s,o,a)}function $b(t){return new Dl(t)}function q1(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Ub(t){return t.collectionGroup!==null}function Da(t){const e=me(t);if(e.he===null){e.he=[];const n=new Set;for(const s of e.explicitOrderBy)e.he.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new wt(It.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.he.push(new Th(s,r))}),n.has(It.keyField().canonicalString())||e.he.push(new Th(It.keyField(),r))}return e.he}function Zn(t){const e=me(t);return e.Pe||(e.Pe=y4(e,Da(t))),e.Pe}function y4(t,e){if(t.limitType==="F")return W1(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Th(i.field,s)});const n=t.endAt?new Sh(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Sh(t.startAt.position,t.startAt.inclusive):null;return W1(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ng(t,e){const n=t.filters.concat([e]);return new Dl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Vg(t,e,n){return new Dl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function gf(t,e){return R_(Zn(t),Zn(e))&&t.limitType===e.limitType}function Hb(t){return`${x_(Zn(t))}|lt:${t.limitType}`}function Rs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>jb(i)).join(", ")}]`),df(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>_o(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>_o(i)).join(",")),`Target(${r})`}(Zn(t))}; limitType=${t.limitType})`}function mf(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):ce.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Da(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=U1(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,Da(r),i)||r.endAt&&!function(o,a,l){const u=U1(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,Da(r),i))}(t,e)}function v4(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Wb(t){return(e,n)=>{let r=!1;for(const i of Da(t)){const s=w4(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function w4(t,e,n){const r=t.field.isKeyField()?ce.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?mo(l,u):de()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return de()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){bi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Rb(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E4=new it(ce.comparator);function Rr(){return E4}const qb=new it(ce.comparator);function ya(...t){let e=qb;for(const n of t)e=e.insert(n.key,n);return e}function Gb(t){let e=qb;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Wi(){return Na()}function Kb(){return Na()}function Na(){return new ps(t=>t.toString(),(t,e)=>t.isEqual(e))}const S4=new it(ce.comparator),T4=new wt(ce.comparator);function Te(...t){let e=T4;for(const n of t)e=e.add(n);return e}const b4=new wt(xe);function x4(){return b4}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I_(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vh(e)?"-0":e}}function Qb(t){return{integerValue:""+t}}function R4(t,e){return e4(e)?Qb(e):I_(t,e)}/**
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
 */class _f{constructor(){this._=void 0}}function I4(t,e,n){return t instanceof bh?function(i,s){const o={fields:{[Cb]:{stringValue:Ab},[kb]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&T_(s)&&(s=pf(s)),s&&(o.fields[Pb]=s),{mapValue:o}}(n,e):t instanceof yl?Xb(t,e):t instanceof vl?Jb(t,e):function(i,s){const o=Yb(i,s),a=G1(o)+G1(i.Ie);return Lg(o)&&Lg(i.Ie)?Qb(a):I_(i.serializer,a)}(t,e)}function A4(t,e,n){return t instanceof yl?Xb(t,e):t instanceof vl?Jb(t,e):n}function Yb(t,e){return t instanceof xh?function(r){return Lg(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class bh extends _f{}class yl extends _f{constructor(e){super(),this.elements=e}}function Xb(t,e){const n=Zb(e);for(const r of t.elements)n.some(i=>tr(i,r))||n.push(r);return{arrayValue:{values:n}}}class vl extends _f{constructor(e){super(),this.elements=e}}function Jb(t,e){let n=Zb(e);for(const r of t.elements)n=n.filter(i=>!tr(i,r));return{arrayValue:{values:n}}}class xh extends _f{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function G1(t){return ut(t.integerValue||t.doubleValue)}function Zb(t){return b_(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function C4(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof yl&&i instanceof yl||r instanceof vl&&i instanceof vl?go(r.elements,i.elements,tr):r instanceof xh&&i instanceof xh?tr(r.Ie,i.Ie):r instanceof bh&&i instanceof bh}(t.transform,e.transform)}class P4{constructor(e,n){this.version=e,this.transformResults=n}}class Fn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Fn}static exists(e){return new Fn(void 0,e)}static updateTime(e){return new Fn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function vc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class yf{}function ex(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new A_(t.key,Fn.none()):new Nl(t.key,t.data,Fn.none());{const n=t.data,r=rn.empty();let i=new wt(It.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new xi(t.key,r,new gn(i.toArray()),Fn.none())}}function k4(t,e,n){t instanceof Nl?function(i,s,o){const a=i.value.clone(),l=Q1(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof xi?function(i,s,o){if(!vc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Q1(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(tx(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Va(t,e,n,r){return t instanceof Nl?function(s,o,a,l){if(!vc(s.precondition,o))return a;const u=s.value.clone(),h=Y1(s.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof xi?function(s,o,a,l){if(!vc(s.precondition,o))return a;const u=Y1(s.fieldTransforms,l,o),h=o.data;return h.setAll(tx(s)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return vc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function O4(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Yb(r.transform,i||null);s!=null&&(n===null&&(n=rn.empty()),n.set(r.field,s))}return n||null}function K1(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&go(r,i,(s,o)=>C4(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Nl extends yf{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class xi extends yf{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function tx(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Q1(t,e,n){const r=new Map;Le(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,A4(o,a,n[i]))}return r}function Y1(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,I4(s,o,e))}return r}class A_ extends yf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class L4 extends yf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M4{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&k4(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Va(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Va(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Kb();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=ex(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(ge.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Te())}isEqual(e){return this.batchId===e.batchId&&go(this.mutations,e.mutations,(n,r)=>K1(n,r))&&go(this.baseMutations,e.baseMutations,(n,r)=>K1(n,r))}}class C_{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Le(e.mutations.length===r.length);let i=function(){return S4}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new C_(e,n,r,i)}}/**
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
 */class D4{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class N4{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dt,Re;function V4(t){switch(t){case q.OK:return de();case q.CANCELLED:case q.UNKNOWN:case q.DEADLINE_EXCEEDED:case q.RESOURCE_EXHAUSTED:case q.INTERNAL:case q.UNAVAILABLE:case q.UNAUTHENTICATED:return!1;case q.INVALID_ARGUMENT:case q.NOT_FOUND:case q.ALREADY_EXISTS:case q.PERMISSION_DENIED:case q.FAILED_PRECONDITION:case q.ABORTED:case q.OUT_OF_RANGE:case q.UNIMPLEMENTED:case q.DATA_LOSS:return!0;default:return de()}}function nx(t){if(t===void 0)return xr("GRPC error has no .code"),q.UNKNOWN;switch(t){case dt.OK:return q.OK;case dt.CANCELLED:return q.CANCELLED;case dt.UNKNOWN:return q.UNKNOWN;case dt.DEADLINE_EXCEEDED:return q.DEADLINE_EXCEEDED;case dt.RESOURCE_EXHAUSTED:return q.RESOURCE_EXHAUSTED;case dt.INTERNAL:return q.INTERNAL;case dt.UNAVAILABLE:return q.UNAVAILABLE;case dt.UNAUTHENTICATED:return q.UNAUTHENTICATED;case dt.INVALID_ARGUMENT:return q.INVALID_ARGUMENT;case dt.NOT_FOUND:return q.NOT_FOUND;case dt.ALREADY_EXISTS:return q.ALREADY_EXISTS;case dt.PERMISSION_DENIED:return q.PERMISSION_DENIED;case dt.FAILED_PRECONDITION:return q.FAILED_PRECONDITION;case dt.ABORTED:return q.ABORTED;case dt.OUT_OF_RANGE:return q.OUT_OF_RANGE;case dt.UNIMPLEMENTED:return q.UNIMPLEMENTED;case dt.DATA_LOSS:return q.DATA_LOSS;default:return de()}}(Re=dt||(dt={}))[Re.OK=0]="OK",Re[Re.CANCELLED=1]="CANCELLED",Re[Re.UNKNOWN=2]="UNKNOWN",Re[Re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Re[Re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Re[Re.NOT_FOUND=5]="NOT_FOUND",Re[Re.ALREADY_EXISTS=6]="ALREADY_EXISTS",Re[Re.PERMISSION_DENIED=7]="PERMISSION_DENIED",Re[Re.UNAUTHENTICATED=16]="UNAUTHENTICATED",Re[Re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Re[Re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Re[Re.ABORTED=10]="ABORTED",Re[Re.OUT_OF_RANGE=11]="OUT_OF_RANGE",Re[Re.UNIMPLEMENTED=12]="UNIMPLEMENTED",Re[Re.INTERNAL=13]="INTERNAL",Re[Re.UNAVAILABLE=14]="UNAVAILABLE",Re[Re.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function F4(){return new TextEncoder}/**
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
 */const z4=new oi([4294967295,4294967295],0);function X1(t){const e=F4().encode(t),n=new _b;return n.update(e),new Uint8Array(n.digest())}function J1(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new oi([n,r],0),new oi([i,s],0)]}class P_{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new va(`Invalid padding: ${n}`);if(r<0)throw new va(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new va(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new va(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*e.length-n,this.de=oi.fromNumber(this.Ee)}Ae(e,n,r){let i=e.add(n.multiply(oi.fromNumber(r)));return i.compare(z4)===1&&(i=new oi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const n=X1(e),[r,i]=J1(n);for(let s=0;s<this.hashCount;s++){const o=this.Ae(r,i,s);if(!this.Re(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new P_(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ee===0)return;const n=X1(e),[r,i]=J1(n);for(let s=0;s<this.hashCount;s++){const o=this.Ae(r,i,s);this.Ve(o)}}Ve(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class va extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Vl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new vf(ge.min(),i,new it(xe),Rr(),Te())}}class Vl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Vl(r,n,Te(),Te(),Te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e,n,r,i){this.me=e,this.removedTargetIds=n,this.key=r,this.fe=i}}class rx{constructor(e,n){this.targetId=e,this.ge=n}}class ix{constructor(e,n,r=Pt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Z1{constructor(){this.pe=0,this.ye=ew(),this.we=Pt.EMPTY_BYTE_STRING,this.be=!1,this.Se=!0}get current(){return this.be}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.we=e)}Fe(){let e=Te(),n=Te(),r=Te();return this.ye.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:de()}}),new Vl(this.we,this.be,e,n,r)}Me(){this.Se=!1,this.ye=ew()}xe(e,n){this.Se=!0,this.ye=this.ye.insert(e,n)}Oe(e){this.Se=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,Le(this.pe>=0)}Le(){this.Se=!0,this.be=!0}}class j4{constructor(e){this.ke=e,this.qe=new Map,this.Qe=Rr(),this.$e=$u(),this.Ke=$u(),this.Ue=new it(xe)}We(e){for(const n of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(n,e.fe):this.ze(n,e.key,e.fe);for(const n of e.removedTargetIds)this.ze(n,e.key,e.fe)}je(e){this.forEachTarget(e,n=>{const r=this.He(n);switch(e.state){case 0:this.Je(n)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(n);break;case 3:this.Je(n)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Ce(e.resumeToken));break;default:de()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qe.forEach((r,i)=>{this.Je(i)&&n(i)})}Ze(e){const n=e.targetId,r=e.ge.count,i=this.Xe(n);if(i){const s=i.target;if(Dg(s))if(r===0){const o=new ce(s.path);this.ze(n,o,jt.newNoDocument(o,ge.min()))}else Le(r===1);else{const o=this.et(n);if(o!==r){const a=this.tt(e),l=a?this.nt(a,e,o):1;if(l!==0){this.Ye(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(n,u)}}}}}tt(e){const n=e.ge.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=mi(r).toUint8Array()}catch(l){if(l instanceof Ib)return po("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new P_(o,i,s)}catch(l){return po(l instanceof va?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ee===0?null:a}nt(e,n,r){return n.ge.count===r-this.st(e,n.targetId)?0:2}st(e,n){const r=this.ke.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.ke.it(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.ze(n,s,null),i++)}),i}ot(e){const n=new Map;this.qe.forEach((s,o)=>{const a=this.Xe(o);if(a){if(s.current&&Dg(a.target)){const l=new ce(a.target.path);this._t(l).has(o)||this.ut(o,l)||this.ze(o,l,jt.newNoDocument(l,e))}s.ve&&(n.set(o,s.Fe()),s.Me())}});let r=Te();this.Ke.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xe(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Qe.forEach((s,o)=>o.setReadTime(e));const i=new vf(e,n,this.Ue,this.Qe,r);return this.Qe=Rr(),this.$e=$u(),this.Ke=$u(),this.Ue=new it(xe),i}Ge(e,n){if(!this.Je(e))return;const r=this.ut(e,n.key)?2:0;this.He(e).xe(n.key,r),this.Qe=this.Qe.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e)),this.Ke=this.Ke.insert(n.key,this.ct(n.key).add(e))}ze(e,n,r){if(!this.Je(e))return;const i=this.He(e);this.ut(e,n)?i.xe(n,1):i.Oe(n),this.Ke=this.Ke.insert(n,this.ct(n).delete(e)),this.Ke=this.Ke.insert(n,this.ct(n).add(e)),r&&(this.Qe=this.Qe.insert(n,r))}removeTarget(e){this.qe.delete(e)}et(e){const n=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let n=this.qe.get(e);return n||(n=new Z1,this.qe.set(e,n)),n}ct(e){let n=this.Ke.get(e);return n||(n=new wt(xe),this.Ke=this.Ke.insert(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new wt(xe),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||re("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.qe.get(e);return n&&n.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new Z1),this.ke.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ut(e,n){return this.ke.getRemoteKeysForTarget(e).has(n)}}function $u(){return new it(ce.comparator)}function ew(){return new it(ce.comparator)}const B4={asc:"ASCENDING",desc:"DESCENDING"},$4={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},U4={and:"AND",or:"OR"};class H4{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Fg(t,e){return t.useProto3Json||df(e)?e:{value:e}}function Rh(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function sx(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function W4(t,e){return Rh(t,e.toTimestamp())}function er(t){return Le(!!t),ge.fromTimestamp(function(n){const r=gi(n);return new vt(r.seconds,r.nanos)}(t))}function k_(t,e){return zg(t,e).canonicalString()}function zg(t,e){const n=function(i){return new We(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function ox(t){const e=We.fromString(t);return Le(hx(e)),e}function jg(t,e){return k_(t.databaseId,e.path)}function Yd(t,e){const n=ox(e);if(n.get(1)!==t.databaseId.projectId)throw new se(q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new se(q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ce(lx(n))}function ax(t,e){return k_(t.databaseId,e)}function q4(t){const e=ox(t);return e.length===4?We.emptyPath():lx(e)}function Bg(t){return new We(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function lx(t){return Le(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function tw(t,e,n){return{name:jg(t,e),fields:n.value.mapValue.fields}}function G4(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:de()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,h){return u.useProto3Json?(Le(h===void 0||typeof h=="string"),Pt.fromBase64String(h||"")):(Le(h===void 0||h instanceof Buffer||h instanceof Uint8Array),Pt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?q.UNKNOWN:nx(u.code);return new se(h,u.message||"")}(o);n=new ix(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Yd(t,r.document.name),s=er(r.document.updateTime),o=r.document.createTime?er(r.document.createTime):ge.min(),a=new rn({mapValue:{fields:r.document.fields}}),l=jt.newFoundDocument(i,s,o,a),u=r.targetIds||[],h=r.removedTargetIds||[];n=new wc(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Yd(t,r.document),s=r.readTime?er(r.readTime):ge.min(),o=jt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new wc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Yd(t,r.document),s=r.removedTargetIds||[];n=new wc([],s,i,null)}else{if(!("filter"in e))return de();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new N4(i,s),a=r.targetId;n=new rx(a,o)}}return n}function K4(t,e){let n;if(e instanceof Nl)n={update:tw(t,e.key,e.value)};else if(e instanceof A_)n={delete:jg(t,e.key)};else if(e instanceof xi)n={update:tw(t,e.key,e.data),updateMask:r3(e.fieldMask)};else{if(!(e instanceof L4))return de();n={verify:jg(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof bh)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof yl)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof vl)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof xh)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw de()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:W4(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:de()}(t,e.precondition)),n}function Q4(t,e){return t&&t.length>0?(Le(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?er(i.updateTime):er(s);return o.isEqual(ge.min())&&(o=er(s)),new P4(o,i.transformResults||[])}(n,e))):[]}function Y4(t,e){return{documents:[ax(t,e.path)]}}function X4(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=ax(t,i);const s=function(u){if(u.length!==0)return cx(Bn.create(u,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(h=>function(d){return{field:Is(d.field),direction:e3(d.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Fg(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ht:n,parent:i}}function J4(t){let e=q4(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Le(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(f){const d=ux(f);return d instanceof Bn&&Fb(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(d=>function(_){return new Th(As(_.field),function(E){switch(E){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(f){let d;return d=typeof f=="object"?f.value:f,df(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(f){const d=!!f.before,g=f.values||[];return new Sh(g,d)}(n.startAt));let u=null;return n.endAt&&(u=function(f){const d=!f.before,g=f.values||[];return new Sh(g,d)}(n.endAt)),_4(e,i,o,s,a,"F",l,u)}function Z4(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return de()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function ux(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=As(n.unaryFilter.field);return gt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=As(n.unaryFilter.field);return gt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=As(n.unaryFilter.field);return gt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=As(n.unaryFilter.field);return gt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return de()}}(t):t.fieldFilter!==void 0?function(n){return gt.create(As(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return de()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Bn.create(n.compositeFilter.filters.map(r=>ux(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return de()}}(n.compositeFilter.op))}(t):de()}function e3(t){return B4[t]}function t3(t){return $4[t]}function n3(t){return U4[t]}function Is(t){return{fieldPath:t.canonicalString()}}function As(t){return It.fromServerFormat(t.fieldPath)}function cx(t){return t instanceof gt?function(n){if(n.op==="=="){if($1(n.value))return{unaryFilter:{field:Is(n.field),op:"IS_NAN"}};if(B1(n.value))return{unaryFilter:{field:Is(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if($1(n.value))return{unaryFilter:{field:Is(n.field),op:"IS_NOT_NAN"}};if(B1(n.value))return{unaryFilter:{field:Is(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Is(n.field),op:t3(n.op),value:n.value}}}(t):t instanceof Bn?function(n){const r=n.getFilters().map(i=>cx(i));return r.length===1?r[0]:{compositeFilter:{op:n3(n.op),filters:r}}}(t):de()}function r3(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function hx(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e,n,r,i,s=ge.min(),o=ge.min(),a=Pt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Gr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Gr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i3{constructor(e){this.Tt=e}}function s3(t){const e=J4({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Vg(e,e.limit,"L"):e}/**
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
 */class o3{constructor(){this.Tn=new a3}addToCollectionParentIndex(e,n){return this.Tn.add(n),W.resolve()}getCollectionParents(e,n){return W.resolve(this.Tn.getEntries(n))}addFieldIndex(e,n){return W.resolve()}deleteFieldIndex(e,n){return W.resolve()}deleteAllFieldIndexes(e){return W.resolve()}createTargetIndexes(e,n){return W.resolve()}getDocumentsMatchingTarget(e,n){return W.resolve(null)}getIndexType(e,n){return W.resolve(0)}getFieldIndexes(e,n){return W.resolve([])}getNextCollectionGroupToUpdate(e){return W.resolve(null)}getMinOffset(e,n){return W.resolve(pi.min())}getMinOffsetFromCollectionGroup(e,n){return W.resolve(pi.min())}updateCollectionGroup(e,n,r){return W.resolve()}updateIndexEntries(e,n){return W.resolve()}}class a3{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new wt(We.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new wt(We.comparator)).toArray()}}/**
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
 */const nw={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},fx=41943040;class en{static withCacheSize(e){return new en(e,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */en.DEFAULT_COLLECTION_PERCENTILE=10,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,en.DEFAULT=new en(fx,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),en.DISABLED=new en(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new yo(0)}static Un(){return new yo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rw="LruGarbageCollector",l3=1048576;function iw([t,e],[n,r]){const i=xe(t,n);return i===0?xe(e,r):i}class u3{constructor(e){this.Hn=e,this.buffer=new wt(iw),this.Jn=0}Yn(){return++this.Jn}Zn(e){const n=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();iw(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class c3{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){re(rw,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Po(n)?re(rw,"Ignoring IndexedDB error during garbage collection: ",n):await Co(n)}await this.er(3e5)})}}class h3{constructor(e,n){this.tr=e,this.params=n}calculateTargetCount(e,n){return this.tr.nr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return W.resolve(ff.ae);const r=new u3(n);return this.tr.forEachTarget(e,i=>r.Zn(i.sequenceNumber)).next(()=>this.tr.rr(e,i=>r.Zn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.tr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.tr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(re("LruGarbageCollector","Garbage collection skipped; disabled"),W.resolve(nw)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(re("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),nw):this.ir(e,n))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,n){let r,i,s,o,a,l,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(re("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(r=f,a=Date.now(),this.removeTargets(e,r,n))).next(f=>(s=f,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(u=Date.now(),xs()<=Ie.DEBUG&&re("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${f} documents in `+(u-l)+`ms
Total Duration: ${u-h}ms`),W.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:f})))}}function f3(t,e){return new h3(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d3{constructor(){this.changes=new ps(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,jt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?W.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class p3{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g3{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Va(r.mutation,i,gn.empty(),vt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Te()){const i=Wi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ya();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Wi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Te()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Rr();const o=Na(),a=function(){return Na()}();return n.forEach((l,u)=>{const h=r.get(u.key);i.has(u.key)&&(h===void 0||h.mutation instanceof xi)?s=s.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),Va(h.mutation,u,h.mutation.getFieldMask(),vt.now())):o.set(u.key,gn.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var f;return a.set(u,new p3(h,(f=o.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Na();let i=new it((o,a)=>o-a),s=Te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let h=r.get(l)||gn.empty();h=a.applyToLocalView(u,h),r.set(l,h);const f=(i.get(a.batchId)||Te()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,h=l.value,f=Kb();h.forEach(d=>{if(!s.has(d)){const g=ex(n.get(d),r.get(d));g!==null&&f.set(d,g),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return W.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return ce.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Ub(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):W.resolve(Wi());let a=pl,l=s;return o.next(u=>W.forEach(u,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(h)?W.resolve():this.remoteDocumentCache.getEntry(e,h).next(d=>{l=l.insert(h,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,Te())).next(h=>({batchId:a,changes:Gb(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ce(n)).next(r=>{let i=ya();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=ya();return this.indexManager.getCollectionParents(e,s).next(a=>W.forEach(a,l=>{const u=function(f,d){return new Dl(d,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(h=>{h.forEach((f,d)=>{o=o.insert(f,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,jt.newInvalidDocument(h)))});let a=ya();return o.forEach((l,u)=>{const h=s.get(l);h!==void 0&&Va(h.mutation,u,gn.empty(),vt.now()),mf(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m3{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,n){return W.resolve(this.dr.get(n))}saveBundleMetadata(e,n){return this.dr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:er(i.createTime)}}(n)),W.resolve()}getNamedQuery(e,n){return W.resolve(this.Ar.get(n))}saveNamedQuery(e,n){return this.Ar.set(n.name,function(i){return{name:i.name,query:s3(i.bundledQuery),readTime:er(i.readTime)}}(n)),W.resolve()}}/**
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
 */class _3{constructor(){this.overlays=new it(ce.comparator),this.Rr=new Map}getOverlay(e,n){return W.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Wi();return W.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.Et(e,n,s)}),W.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Rr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Rr.delete(r)),W.resolve()}getOverlaysForCollection(e,n,r){const i=Wi(),s=n.length+1,o=new ce(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return W.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new it((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=s.get(u.largestBatchId);h===null&&(h=Wi(),s=s.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=Wi(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=i)););return W.resolve(a)}Et(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Rr.get(i.largestBatchId).delete(r.key);this.Rr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new D4(n,r));let s=this.Rr.get(n);s===void 0&&(s=Te(),this.Rr.set(n,s)),this.Rr.set(n,s.add(r.key))}}/**
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
 */class y3{constructor(){this.sessionToken=Pt.EMPTY_BYTE_STRING}getSessionToken(e){return W.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,W.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(){this.Vr=new wt(Et.mr),this.gr=new wt(Et.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,n){const r=new Et(e,n);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.wr(new Et(e,n))}br(e,n){e.forEach(r=>this.removeReference(r,n))}Sr(e){const n=new ce(new We([])),r=new Et(n,e),i=new Et(n,e+1),s=[];return this.gr.forEachInRange([r,i],o=>{this.wr(o),s.push(o.key)}),s}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const n=new ce(new We([])),r=new Et(n,e),i=new Et(n,e+1);let s=Te();return this.gr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Et(e,0),r=this.Vr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Et{constructor(e,n){this.key=e,this.Cr=n}static mr(e,n){return ce.comparator(e.key,n.key)||xe(e.Cr,n.Cr)}static pr(e,n){return xe(e.Cr,n.Cr)||ce.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v3{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Fr=1,this.Mr=new wt(Et.mr)}checkEmpty(e){return W.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new M4(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Mr=this.Mr.add(new Et(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return W.resolve(o)}lookupMutationBatch(e,n){return W.resolve(this.Or(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Nr(r),s=i<0?0:i;return W.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return W.resolve(this.mutationQueue.length===0?S_:this.Fr-1)}getAllMutationBatches(e){return W.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Et(n,0),i=new Et(n,Number.POSITIVE_INFINITY),s=[];return this.Mr.forEachInRange([r,i],o=>{const a=this.Or(o.Cr);s.push(a)}),W.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new wt(xe);return n.forEach(i=>{const s=new Et(i,0),o=new Et(i,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([s,o],a=>{r=r.add(a.Cr)})}),W.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;ce.isDocumentKey(s)||(s=s.child(""));const o=new Et(new ce(s),0);let a=new wt(xe);return this.Mr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.Cr)),!0)},o),W.resolve(this.Br(a))}Br(e){const n=[];return e.forEach(r=>{const i=this.Or(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Le(this.Lr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return W.forEach(n.mutations,i=>{const s=new Et(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,n){const r=new Et(n,0),i=this.Mr.firstAfterOrEqual(r);return W.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,W.resolve()}Lr(e,n){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const n=this.Nr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w3{constructor(e){this.kr=e,this.docs=function(){return new it(ce.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.kr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return W.resolve(r?r.document.mutableCopy():jt.newInvalidDocument(n))}getEntries(e,n){let r=Rr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():jt.newInvalidDocument(i))}),W.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Rr();const o=n.path,a=new ce(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||YF(QF(h),r)<=0||(i.has(h.key)||mf(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return W.resolve(s)}getAllFromCollectionGroup(e,n,r,i){de()}qr(e,n){return W.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new E3(this)}getSize(e){return W.resolve(this.size)}}class E3 extends d3{constructor(e){super(),this.Ir=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Ir.addEntry(e,i)):this.Ir.removeEntry(r)}),W.waitFor(n)}getFromCache(e,n){return this.Ir.getEntry(e,n)}getAllFromCache(e,n){return this.Ir.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S3{constructor(e){this.persistence=e,this.Qr=new ps(n=>x_(n),R_),this.lastRemoteSnapshotVersion=ge.min(),this.highestTargetId=0,this.$r=0,this.Kr=new O_,this.targetCount=0,this.Ur=yo.Kn()}forEachTarget(e,n){return this.Qr.forEach((r,i)=>n(i)),W.resolve()}getLastRemoteSnapshotVersion(e){return W.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return W.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),W.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.$r&&(this.$r=n),W.resolve()}zn(e){this.Qr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ur=new yo(n),this.highestTargetId=n),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,n){return this.zn(n),this.targetCount+=1,W.resolve()}updateTargetData(e,n){return this.zn(n),W.resolve()}removeTargetData(e,n){return this.Qr.delete(n.target),this.Kr.Sr(n.targetId),this.targetCount-=1,W.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Qr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Qr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),W.waitFor(s).next(()=>i)}getTargetCount(e){return W.resolve(this.targetCount)}getTargetData(e,n){const r=this.Qr.get(n)||null;return W.resolve(r)}addMatchingKeys(e,n,r){return this.Kr.yr(n,r),W.resolve()}removeMatchingKeys(e,n,r){this.Kr.br(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),W.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Kr.Sr(n),W.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Kr.vr(n);return W.resolve(r)}containsKey(e,n){return W.resolve(this.Kr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dx{constructor(e,n){this.Wr={},this.overlays={},this.Gr=new ff(0),this.zr=!1,this.zr=!0,this.jr=new y3,this.referenceDelegate=e(this),this.Hr=new S3(this),this.indexManager=new o3,this.remoteDocumentCache=function(i){return new w3(i)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new i3(n),this.Yr=new m3(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new _3,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Wr[e.toKey()];return r||(r=new v3(n,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,n,r){re("MemoryPersistence","Starting transaction:",e);const i=new T3(this.Gr.next());return this.referenceDelegate.Zr(),r(i).next(s=>this.referenceDelegate.Xr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}ei(e,n){return W.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,n)))}}class T3 extends JF{constructor(e){super(),this.currentSequenceNumber=e}}class L_{constructor(e){this.persistence=e,this.ti=new O_,this.ni=null}static ri(e){return new L_(e)}get ii(){if(this.ni)return this.ni;throw de()}addReference(e,n,r){return this.ti.addReference(r,n),this.ii.delete(r.toString()),W.resolve()}removeReference(e,n,r){return this.ti.removeReference(r,n),this.ii.add(r.toString()),W.resolve()}markPotentiallyOrphaned(e,n){return this.ii.add(n.toString()),W.resolve()}removeTarget(e,n){this.ti.Sr(n.targetId).forEach(i=>this.ii.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.ii.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Zr(){this.ni=new Set}Xr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return W.forEach(this.ii,r=>{const i=ce.fromPath(r);return this.si(e,i).next(s=>{s||n.removeEntry(i,ge.min())})}).next(()=>(this.ni=null,n.apply(e)))}updateLimboDocument(e,n){return this.si(e,n).next(r=>{r?this.ii.delete(n.toString()):this.ii.add(n.toString())})}Jr(e){return 0}si(e,n){return W.or([()=>W.resolve(this.ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.ei(e,n)])}}class Ih{constructor(e,n){this.persistence=e,this.oi=new ps(r=>t4(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=f3(this,n)}static ri(e,n){return new Ih(e,n)}Zr(){}Xr(e){return W.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}nr(e){const n=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}sr(e){let n=0;return this.rr(e,r=>{n++}).next(()=>n)}rr(e,n){return W.forEach(this.oi,(r,i)=>this.ar(e,r,i).next(s=>s?W.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.qr(e,o=>this.ar(e,o,n).next(a=>{a||(r++,s.removeEntry(o,ge.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.oi.set(n,e.currentSequenceNumber),W.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),W.resolve()}removeReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),W.resolve()}updateLimboDocument(e,n){return this.oi.set(n,e.currentSequenceNumber),W.resolve()}Jr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=_c(e.data.value)),n}ar(e,n,r){return W.or([()=>this.persistence.ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.oi.get(n);return W.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Hi=r,this.Ji=i}static Yi(e,n){let r=Te(),i=Te();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new M_(e,n.fromCache,r,i)}}/**
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
 */class b3{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class x3{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return SV()?8:ZF(wV())>0?6:4}()}initialize(e,n){this.ns=e,this.indexManager=n,this.Zi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.rs(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ss(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new b3;return this._s(e,n,o).next(a=>{if(s.result=a,this.Xi)return this.us(e,n,o,a.size)})}).next(()=>s.result)}us(e,n,r,i){return r.documentReadCount<this.es?(xs()<=Ie.DEBUG&&re("QueryEngine","SDK will not create cache indexes for query:",Rs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),W.resolve()):(xs()<=Ie.DEBUG&&re("QueryEngine","Query:",Rs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ts*i?(xs()<=Ie.DEBUG&&re("QueryEngine","The SDK decides to create cache indexes for query:",Rs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Zn(n))):W.resolve())}rs(e,n){if(q1(n))return W.resolve(null);let r=Zn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Vg(n,null,"F"),r=Zn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Te(...s);return this.ns.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.cs(n,a);return this.ls(n,u,o,l.readTime)?this.rs(e,Vg(n,null,"F")):this.hs(e,u,n,l)}))})))}ss(e,n,r,i){return q1(n)||i.isEqual(ge.min())?W.resolve(null):this.ns.getDocuments(e,r).next(s=>{const o=this.cs(n,s);return this.ls(n,o,r,i)?W.resolve(null):(xs()<=Ie.DEBUG&&re("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Rs(n)),this.hs(e,o,n,KF(i,pl)).next(a=>a))})}cs(e,n){let r=new wt(Wb(e));return n.forEach((i,s)=>{mf(e,s)&&(r=r.add(s))}),r}ls(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}_s(e,n,r){return xs()<=Ie.DEBUG&&re("QueryEngine","Using full collection scan to execute query:",Rs(n)),this.ns.getDocumentsMatchingQuery(e,n,pi.min(),r)}hs(e,n,r,i){return this.ns.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_="LocalStore",R3=3e8;class I3{constructor(e,n,r,i){this.persistence=e,this.Ps=n,this.serializer=i,this.Ts=new it(xe),this.Is=new ps(s=>x_(s),R_),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new g3(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ts))}}function A3(t,e,n,r){return new I3(t,e,n,r)}async function px(t,e){const n=me(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.As(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=Te();for(const u of i){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of s){a.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Rs:u,removedBatchIds:o,addedBatchIds:a}))})})}function C3(t,e){const n=me(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ds.newChangeBuffer({trackRemovals:!0});return function(a,l,u,h){const f=u.batch,d=f.keys();let g=W.resolve();return d.forEach(_=>{g=g.next(()=>h.getEntry(l,_)).next(y=>{const E=u.docVersions.get(_);Le(E!==null),y.version.compareTo(E)<0&&(f.applyToRemoteDocument(y,u),y.isValidDocument()&&(y.setReadTime(u.commitVersion),h.addEntry(y)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=Te();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function gx(t){const e=me(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Hr.getLastRemoteSnapshotVersion(n))}function P3(t,e){const n=me(t),r=e.snapshotVersion;let i=n.Ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ds.newChangeBuffer({trackRemovals:!0});i=n.Ts;const a=[];e.targetChanges.forEach((h,f)=>{const d=i.get(f);if(!d)return;a.push(n.Hr.removeMatchingKeys(s,h.removedDocuments,f).next(()=>n.Hr.addMatchingKeys(s,h.addedDocuments,f)));let g=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?g=g.withResumeToken(Pt.EMPTY_BYTE_STRING,ge.min()).withLastLimboFreeSnapshotVersion(ge.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,r)),i=i.insert(f,g),function(y,E,w){return y.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=R3?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(d,g,h)&&a.push(n.Hr.updateTargetData(s,g))});let l=Rr(),u=Te();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(k3(s,o,e.documentUpdates).next(h=>{l=h.Vs,u=h.fs})),!r.isEqual(ge.min())){const h=n.Hr.getLastRemoteSnapshotVersion(s).next(f=>n.Hr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return W.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ts=i,s))}function k3(t,e,n){let r=Te(),i=Te();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Rr();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(ge.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):re(D_,"Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Vs:o,fs:i}})}function O3(t,e){const n=me(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=S_),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function L3(t,e){const n=me(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Hr.getTargetData(r,e).next(s=>s?(i=s,W.resolve(i)):n.Hr.allocateTargetId(r).next(o=>(i=new Gr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Hr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ts=n.Ts.insert(r.targetId,r),n.Is.set(e,r.targetId)),r})}async function $g(t,e,n){const r=me(t),i=r.Ts.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Po(o))throw o;re(D_,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ts=r.Ts.remove(e),r.Is.delete(i.target)}function sw(t,e,n){const r=me(t);let i=ge.min(),s=Te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,h){const f=me(l),d=f.Is.get(h);return d!==void 0?W.resolve(f.Ts.get(d)):f.Hr.getTargetData(u,h)}(r,o,Zn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Ps.getDocumentsMatchingQuery(o,e,n?i:ge.min(),n?s:Te())).next(a=>(M3(r,v4(e),a),{documents:a,gs:s})))}function M3(t,e,n){let r=t.Es.get(e)||ge.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Es.set(e,r)}class ow{constructor(){this.activeTargetIds=x4()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ss(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class D3{constructor(){this.ho=new ow,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,n,r){this.Po[e]=n}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new ow,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class N3{To(e){}shutdown(){}}/**
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
 */const aw="ConnectivityMonitor";class lw{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){re(aw,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){re(aw,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Uu=null;function Ug(){return Uu===null?Uu=function(){return 268435456+Math.round(2147483648*Math.random())}():Uu++,"0x"+Uu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd="RestConnection",V3={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class F3{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.po=n+"://"+e.host,this.yo=`projects/${r}/databases/${i}`,this.wo=this.databaseId.database===wh?`project_id=${r}`:`project_id=${r}&database_id=${i}`}bo(e,n,r,i,s){const o=Ug(),a=this.So(e,n.toUriEncodedString());re(Xd,`Sending RPC '${e}' ${o}:`,a,r);const l={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(l,i,s),this.vo(e,a,l,r).then(u=>(re(Xd,`Received RPC '${e}' ${o}: `,u),u),u=>{throw po(Xd,`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}Co(e,n,r,i,s,o){return this.bo(e,n,r,i,s)}Do(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ao}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}So(e,n){const r=V3[e];return`${this.po}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z3{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt="WebChannelConnection";class j3 extends F3{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,i){const s=Ug();return new Promise((o,a)=>{const l=new yb;l.setWithCredentials(!0),l.listenOnce(vb.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case mc.NO_ERROR:const h=l.getResponseJson();re(Nt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case mc.TIMEOUT:re(Nt,`RPC '${e}' ${s} timed out`),a(new se(q.DEADLINE_EXCEEDED,"Request time out"));break;case mc.HTTP_ERROR:const f=l.getStatus();if(re(Nt,`RPC '${e}' ${s} failed with status:`,f,"response text:",l.getResponseText()),f>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const g=d==null?void 0:d.error;if(g&&g.status&&g.message){const _=function(E){const w=E.toLowerCase().replace(/_/g,"-");return Object.values(q).indexOf(w)>=0?w:q.UNKNOWN}(g.status);a(new se(_,g.message))}else a(new se(q.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new se(q.UNAVAILABLE,"Connection failed."));break;default:de()}}finally{re(Nt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);re(Nt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Wo(e,n,r){const i=Ug(),s=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Sb(),a=Eb(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=s.join("");re(Nt,`Creating RPC '${e}' stream ${i}: ${h}`,l);const f=o.createWebChannel(h,l);let d=!1,g=!1;const _=new z3({Fo:E=>{g?re(Nt,`Not sending because RPC '${e}' stream ${i} is closed:`,E):(d||(re(Nt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),d=!0),re(Nt,`RPC '${e}' stream ${i} sending:`,E),f.send(E))},Mo:()=>f.close()}),y=(E,w,m)=>{E.listen(w,S=>{try{m(S)}catch(C){setTimeout(()=>{throw C},0)}})};return y(f,_a.EventType.OPEN,()=>{g||(re(Nt,`RPC '${e}' stream ${i} transport opened.`),_.Qo())}),y(f,_a.EventType.CLOSE,()=>{g||(g=!0,re(Nt,`RPC '${e}' stream ${i} transport closed`),_.Ko())}),y(f,_a.EventType.ERROR,E=>{g||(g=!0,po(Nt,`RPC '${e}' stream ${i} transport errored:`,E),_.Ko(new se(q.UNAVAILABLE,"The operation could not be completed")))}),y(f,_a.EventType.MESSAGE,E=>{var w;if(!g){const m=E.data[0];Le(!!m);const S=m,C=(S==null?void 0:S.error)||((w=S[0])===null||w===void 0?void 0:w.error);if(C){re(Nt,`RPC '${e}' stream ${i} received error:`,C);const O=C.status;let M=function(b){const x=dt[b];if(x!==void 0)return nx(x)}(O),R=C.message;M===void 0&&(M=q.INTERNAL,R="Unknown error status: "+O+" with message "+C.message),g=!0,_.Ko(new se(M,R)),f.close()}else re(Nt,`RPC '${e}' stream ${i} received:`,m),_.Uo(m)}}),y(a,wb.STAT_EVENT,E=>{E.stat===kg.PROXY?re(Nt,`RPC '${e}' stream ${i} detected buffering proxy`):E.stat===kg.NOPROXY&&re(Nt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{_.$o()},0),_}}function Jd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wf(t){return new H4(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mx{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ti=e,this.timerId=n,this.Go=r,this.zo=i,this.jo=s,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const n=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),i=Math.max(0,n-r);i>0&&re("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,i,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uw="PersistentStream";class _x{constructor(e,n,r,i,s,o,a,l){this.Ti=e,this.n_=r,this.r_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new mx(e,n)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,n){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():n&&n.code===q.RESOURCE_EXHAUSTED?(xr(n.toString()),xr("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):n&&n.code===q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(n)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),n=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.i_===n&&this.V_(r,i)},r=>{e(()=>{const i=new se(q.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(i)})})}V_(e,n){const r=this.R_(this.i_);this.stream=this.f_(e,n),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(i=>{r(()=>this.m_(i))}),this.stream.onMessage(i=>{r(()=>++this.__==1?this.g_(i):this.onNext(i))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return re(uw,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return n=>{this.Ti.enqueueAndForget(()=>this.i_===e?n():(re(uw,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class B3 extends _x{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}f_(e,n){return this.connection.Wo("Listen",e,n)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const n=G4(this.serializer,e),r=function(s){if(!("targetChange"in s))return ge.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ge.min():o.readTime?er(o.readTime):ge.min()}(e);return this.listener.p_(n,r)}y_(e){const n={};n.database=Bg(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Dg(l)?{documents:Y4(s,l)}:{query:X4(s,l).ht},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=sx(s,o.resumeToken);const u=Fg(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(ge.min())>0){a.readTime=Rh(s,o.snapshotVersion.toTimestamp());const u=Fg(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=Z4(this.serializer,e);r&&(n.labels=r),this.I_(n)}w_(e){const n={};n.database=Bg(this.serializer),n.removeTarget=e,this.I_(n)}}class $3 extends _x{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get b_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.b_&&this.S_([])}f_(e,n){return this.connection.Wo("Write",e,n)}g_(e){return Le(!!e.streamToken),this.lastStreamToken=e.streamToken,Le(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){Le(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const n=Q4(e.writeResults,e.commitTime),r=er(e.commitTime);return this.listener.v_(r,n)}C_(){const e={};e.database=Bg(this.serializer),this.I_(e)}S_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>K4(this.serializer,r))};this.I_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U3{}class H3 extends U3{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.F_=!1}M_(){if(this.F_)throw new se(q.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,n,r,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.bo(e,zg(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new se(q.UNKNOWN,s.toString())})}Co(e,n,r,i,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Co(e,zg(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new se(q.UNKNOWN,o.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class W3{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(xr(n),this.N_=!1):re("OnlineStateTracker",n)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as="RemoteStore";class q3{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=s,this.z_.To(o=>{r.enqueueAndForget(async()=>{gs(this)&&(re(as,"Restarting streams for network reachability change."),await async function(l){const u=me(l);u.W_.add(4),await Fl(u),u.j_.set("Unknown"),u.W_.delete(4),await Ef(u)}(this))})}),this.j_=new W3(r,i)}}async function Ef(t){if(gs(t))for(const e of t.G_)await e(!0)}async function Fl(t){for(const e of t.G_)await e(!1)}function yx(t,e){const n=me(t);n.U_.has(e.targetId)||(n.U_.set(e.targetId,e),z_(n)?F_(n):ko(n).c_()&&V_(n,e))}function N_(t,e){const n=me(t),r=ko(n);n.U_.delete(e),r.c_()&&vx(n,e),n.U_.size===0&&(r.c_()?r.P_():gs(n)&&n.j_.set("Unknown"))}function V_(t,e){if(t.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ge.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ko(t).y_(e)}function vx(t,e){t.H_.Ne(e),ko(t).w_(e)}function F_(t){t.H_=new j4({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.U_.get(e)||null,it:()=>t.datastore.serializer.databaseId}),ko(t).start(),t.j_.B_()}function z_(t){return gs(t)&&!ko(t).u_()&&t.U_.size>0}function gs(t){return me(t).W_.size===0}function wx(t){t.H_=void 0}async function G3(t){t.j_.set("Online")}async function K3(t){t.U_.forEach((e,n)=>{V_(t,e)})}async function Q3(t,e){wx(t),z_(t)?(t.j_.q_(e),F_(t)):t.j_.set("Unknown")}async function Y3(t,e,n){if(t.j_.set("Online"),e instanceof ix&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.U_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.U_.delete(a),i.H_.removeTarget(a))}(t,e)}catch(r){re(as,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ah(t,r)}else if(e instanceof wc?t.H_.We(e):e instanceof rx?t.H_.Ze(e):t.H_.je(e),!n.isEqual(ge.min()))try{const r=await gx(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.H_.ot(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const h=s.U_.get(u);h&&s.U_.set(u,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const h=s.U_.get(l);if(!h)return;s.U_.set(l,h.withResumeToken(Pt.EMPTY_BYTE_STRING,h.snapshotVersion)),vx(s,l);const f=new Gr(h.target,l,u,h.sequenceNumber);V_(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){re(as,"Failed to raise snapshot:",r),await Ah(t,r)}}async function Ah(t,e,n){if(!Po(e))throw e;t.W_.add(1),await Fl(t),t.j_.set("Offline"),n||(n=()=>gx(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{re(as,"Retrying IndexedDB access"),await n(),t.W_.delete(1),await Ef(t)})}function Ex(t,e){return e().catch(n=>Ah(t,n,e))}async function Sf(t){const e=me(t),n=yi(e);let r=e.K_.length>0?e.K_[e.K_.length-1].batchId:S_;for(;X3(e);)try{const i=await O3(e.localStore,r);if(i===null){e.K_.length===0&&n.P_();break}r=i.batchId,J3(e,i)}catch(i){await Ah(e,i)}Sx(e)&&Tx(e)}function X3(t){return gs(t)&&t.K_.length<10}function J3(t,e){t.K_.push(e);const n=yi(t);n.c_()&&n.b_&&n.S_(e.mutations)}function Sx(t){return gs(t)&&!yi(t).u_()&&t.K_.length>0}function Tx(t){yi(t).start()}async function Z3(t){yi(t).C_()}async function ez(t){const e=yi(t);for(const n of t.K_)e.S_(n.mutations)}async function tz(t,e,n){const r=t.K_.shift(),i=C_.from(r,e,n);await Ex(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Sf(t)}async function nz(t,e){e&&yi(t).b_&&await async function(r,i){if(function(o){return V4(o)&&o!==q.ABORTED}(i.code)){const s=r.K_.shift();yi(r).h_(),await Ex(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Sf(r)}}(t,e),Sx(t)&&Tx(t)}async function cw(t,e){const n=me(t);n.asyncQueue.verifyOperationInProgress(),re(as,"RemoteStore received new credentials");const r=gs(n);n.W_.add(3),await Fl(n),r&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.W_.delete(3),await Ef(n)}async function rz(t,e){const n=me(t);e?(n.W_.delete(2),await Ef(n)):e||(n.W_.add(2),await Fl(n),n.j_.set("Unknown"))}function ko(t){return t.J_||(t.J_=function(n,r,i){const s=me(n);return s.M_(),new B3(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{xo:G3.bind(null,t),No:K3.bind(null,t),Lo:Q3.bind(null,t),p_:Y3.bind(null,t)}),t.G_.push(async e=>{e?(t.J_.h_(),z_(t)?F_(t):t.j_.set("Unknown")):(await t.J_.stop(),wx(t))})),t.J_}function yi(t){return t.Y_||(t.Y_=function(n,r,i){const s=me(n);return s.M_(),new $3(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{xo:()=>Promise.resolve(),No:Z3.bind(null,t),Lo:nz.bind(null,t),D_:ez.bind(null,t),v_:tz.bind(null,t)}),t.G_.push(async e=>{e?(t.Y_.h_(),await Sf(t)):(await t.Y_.stop(),t.K_.length>0&&(re(as,`Stopping write stream with ${t.K_.length} pending writes`),t.K_=[]))})),t.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ai,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new j_(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new se(q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function B_(t,e){if(xr("AsyncQueue",`${e}: ${t}`),Po(t))return new se(q.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{static emptySet(e){return new Js(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ce.comparator(n.key,r.key):(n,r)=>ce.comparator(n.key,r.key),this.keyedMap=ya(),this.sortedSet=new it(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Js)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Js;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(){this.Z_=new it(ce.comparator)}track(e){const n=e.doc.key,r=this.Z_.get(n);r?e.type!==0&&r.type===3?this.Z_=this.Z_.insert(n,e):e.type===3&&r.type!==1?this.Z_=this.Z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Z_=this.Z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Z_=this.Z_.remove(n):e.type===1&&r.type===2?this.Z_=this.Z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):de():this.Z_=this.Z_.insert(n,e)}X_(){const e=[];return this.Z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class vo{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new vo(e,n,Js.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&gf(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iz{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class sz{constructor(){this.queries=fw(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(n,r){const i=me(n),s=i.queries;i.queries=fw(),s.forEach((o,a)=>{for(const l of a.ta)l.onError(r)})})(this,new se(q.ABORTED,"Firestore shutting down"))}}function fw(){return new ps(t=>Hb(t),gf)}async function oz(t,e){const n=me(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.na()&&e.ra()&&(r=2):(s=new iz,r=e.ra()?0:1);try{switch(r){case 0:s.ea=await n.onListen(i,!0);break;case 1:s.ea=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=B_(o,`Initialization of query '${Rs(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.ta.push(e),e.sa(n.onlineState),s.ea&&e.oa(s.ea)&&$_(n)}async function az(t,e){const n=me(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.ta.indexOf(e);o>=0&&(s.ta.splice(o,1),s.ta.length===0?i=e.ra()?0:1:!s.na()&&e.ra()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function lz(t,e){const n=me(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.ta)a.oa(i)&&(r=!0);o.ea=i}}r&&$_(n)}function uz(t,e,n){const r=me(t),i=r.queries.get(e);if(i)for(const s of i.ta)s.onError(n);r.queries.delete(e)}function $_(t){t.ia.forEach(e=>{e.next()})}var Hg,dw;(dw=Hg||(Hg={}))._a="default",dw.Cache="cache";class cz{constructor(e,n,r){this.query=e,this.aa=n,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new vo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ua?this.la(e)&&(this.aa.next(e),n=!0):this.ha(e,this.onlineState)&&(this.Pa(e),n=!0),this.ca=e,n}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let n=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),n=!0),n}ha(e,n){if(!e.fromCache||!this.ra())return!0;const r=n!=="Offline";return(!this.options.Ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}la(e){if(e.docChanges.length>0)return!0;const n=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Pa(e){e=vo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==Hg.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bx{constructor(e){this.key=e}}class xx{constructor(e){this.key=e}}class hz{constructor(e,n){this.query=e,this.fa=n,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=Te(),this.mutatedKeys=Te(),this.ya=Wb(e),this.wa=new Js(this.ya)}get ba(){return this.fa}Sa(e,n){const r=n?n.Da:new hw,i=n?n.wa:this.wa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const d=i.get(h),g=mf(this.query,f)?f:null,_=!!d&&this.mutatedKeys.has(d.key),y=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let E=!1;d&&g?d.data.isEqual(g.data)?_!==y&&(r.track({type:3,doc:g}),E=!0):this.va(d,g)||(r.track({type:2,doc:g}),E=!0,(l&&this.ya(g,l)>0||u&&this.ya(g,u)<0)&&(a=!0)):!d&&g?(r.track({type:0,doc:g}),E=!0):d&&!g&&(r.track({type:1,doc:d}),E=!0,(l||u)&&(a=!0)),E&&(g?(o=o.add(g),s=y?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{wa:o,Da:r,ls:a,mutatedKeys:s}}va(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const o=e.Da.X_();o.sort((h,f)=>function(g,_){const y=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return de()}};return y(g)-y(_)}(h.type,f.type)||this.ya(h.doc,f.doc)),this.Ca(r),i=i!=null&&i;const a=n&&!i?this.Fa():[],l=this.pa.size===0&&this.current&&!i?1:0,u=l!==this.ga;return this.ga=l,o.length!==0||u?{snapshot:new vo(this.query,e.wa,s,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:a}:{Ma:a}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new hw,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(n=>this.fa=this.fa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.fa=this.fa.delete(n)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=Te(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const n=[];return e.forEach(r=>{this.pa.has(r)||n.push(new xx(r))}),this.pa.forEach(r=>{e.has(r)||n.push(new bx(r))}),n}Oa(e){this.fa=e.gs,this.pa=Te();const n=this.Sa(e.documents);return this.applyChanges(n,!0)}Na(){return vo.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const U_="SyncEngine";class fz{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class dz{constructor(e){this.key=e,this.Ba=!1}}class pz{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.La={},this.ka=new ps(a=>Hb(a),gf),this.qa=new Map,this.Qa=new Set,this.$a=new it(ce.comparator),this.Ka=new Map,this.Ua=new O_,this.Wa={},this.Ga=new Map,this.za=yo.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function gz(t,e,n=!0){const r=kx(t);let i;const s=r.ka.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Na()):i=await Rx(r,e,n,!0),i}async function mz(t,e){const n=kx(t);await Rx(n,e,!0,!1)}async function Rx(t,e,n,r){const i=await L3(t.localStore,Zn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await _z(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&yx(t.remoteStore,i),a}async function _z(t,e,n,r,i){t.Ha=(f,d,g)=>async function(y,E,w,m){let S=E.view.Sa(w);S.ls&&(S=await sw(y.localStore,E.query,!1).then(({documents:R})=>E.view.Sa(R,S)));const C=m&&m.targetChanges.get(E.targetId),O=m&&m.targetMismatches.get(E.targetId)!=null,M=E.view.applyChanges(S,y.isPrimaryClient,C,O);return gw(y,E.targetId,M.Ma),M.snapshot}(t,f,d,g);const s=await sw(t.localStore,e,!0),o=new hz(e,s.gs),a=o.Sa(s.documents),l=Vl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);gw(t,n,u.Ma);const h=new fz(e,n,o);return t.ka.set(e,h),t.qa.has(n)?t.qa.get(n).push(e):t.qa.set(n,[e]),u.snapshot}async function yz(t,e,n){const r=me(t),i=r.ka.get(e),s=r.qa.get(i.targetId);if(s.length>1)return r.qa.set(i.targetId,s.filter(o=>!gf(o,e))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await $g(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&N_(r.remoteStore,i.targetId),Wg(r,i.targetId)}).catch(Co)):(Wg(r,i.targetId),await $g(r.localStore,i.targetId,!0))}async function vz(t,e){const n=me(t),r=n.ka.get(e),i=n.qa.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),N_(n.remoteStore,r.targetId))}async function wz(t,e,n){const r=Iz(t);try{const i=await function(o,a){const l=me(o),u=vt.now(),h=a.reduce((g,_)=>g.add(_.key),Te());let f,d;return l.persistence.runTransaction("Locally write mutations","readwrite",g=>{let _=Rr(),y=Te();return l.ds.getEntries(g,h).next(E=>{_=E,_.forEach((w,m)=>{m.isValidDocument()||(y=y.add(w))})}).next(()=>l.localDocuments.getOverlayedDocuments(g,_)).next(E=>{f=E;const w=[];for(const m of a){const S=O4(m,f.get(m.key).overlayedDocument);S!=null&&w.push(new xi(m.key,S,Db(S.value.mapValue),Fn.exists(!0)))}return l.mutationQueue.addMutationBatch(g,u,w,a)}).next(E=>{d=E;const w=E.applyToLocalDocumentSet(f,y);return l.documentOverlayCache.saveOverlays(g,E.batchId,w)})}).then(()=>({batchId:d.batchId,changes:Gb(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Wa[o.currentUser.toKey()];u||(u=new it(xe)),u=u.insert(a,l),o.Wa[o.currentUser.toKey()]=u}(r,i.batchId,n),await zl(r,i.changes),await Sf(r.remoteStore)}catch(i){const s=B_(i,"Failed to persist write");n.reject(s)}}async function Ix(t,e){const n=me(t);try{const r=await P3(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Ka.get(s);o&&(Le(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ba=!0:i.modifiedDocuments.size>0?Le(o.Ba):i.removedDocuments.size>0&&(Le(o.Ba),o.Ba=!1))}),await zl(n,r,e)}catch(r){await Co(r)}}function pw(t,e,n){const r=me(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ka.forEach((s,o)=>{const a=o.view.sa(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=me(o);l.onlineState=a;let u=!1;l.queries.forEach((h,f)=>{for(const d of f.ta)d.sa(a)&&(u=!0)}),u&&$_(l)}(r.eventManager,e),i.length&&r.La.p_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Ez(t,e,n){const r=me(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Ka.get(e),s=i&&i.key;if(s){let o=new it(ce.comparator);o=o.insert(s,jt.newNoDocument(s,ge.min()));const a=Te().add(s),l=new vf(ge.min(),new Map,new it(xe),o,a);await Ix(r,l),r.$a=r.$a.remove(s),r.Ka.delete(e),H_(r)}else await $g(r.localStore,e,!1).then(()=>Wg(r,e,n)).catch(Co)}async function Sz(t,e){const n=me(t),r=e.batch.batchId;try{const i=await C3(n.localStore,e);Cx(n,r,null),Ax(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await zl(n,i)}catch(i){await Co(i)}}async function Tz(t,e,n){const r=me(t);try{const i=await function(o,a){const l=me(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return l.mutationQueue.lookupMutationBatch(u,a).next(f=>(Le(f!==null),h=f.keys(),l.mutationQueue.removeMutationBatch(u,f))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>l.localDocuments.getDocuments(u,h))})}(r.localStore,e);Cx(r,e,n),Ax(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await zl(r,i)}catch(i){await Co(i)}}function Ax(t,e){(t.Ga.get(e)||[]).forEach(n=>{n.resolve()}),t.Ga.delete(e)}function Cx(t,e,n){const r=me(t);let i=r.Wa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Wa[r.currentUser.toKey()]=i}}function Wg(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.qa.get(e))t.ka.delete(r),n&&t.La.Ja(r,n);t.qa.delete(e),t.isPrimaryClient&&t.Ua.Sr(e).forEach(r=>{t.Ua.containsKey(r)||Px(t,r)})}function Px(t,e){t.Qa.delete(e.path.canonicalString());const n=t.$a.get(e);n!==null&&(N_(t.remoteStore,n),t.$a=t.$a.remove(e),t.Ka.delete(n),H_(t))}function gw(t,e,n){for(const r of n)r instanceof bx?(t.Ua.addReference(r.key,e),bz(t,r)):r instanceof xx?(re(U_,"Document no longer in limbo: "+r.key),t.Ua.removeReference(r.key,e),t.Ua.containsKey(r.key)||Px(t,r.key)):de()}function bz(t,e){const n=e.key,r=n.path.canonicalString();t.$a.get(n)||t.Qa.has(r)||(re(U_,"New document in limbo: "+n),t.Qa.add(r),H_(t))}function H_(t){for(;t.Qa.size>0&&t.$a.size<t.maxConcurrentLimboResolutions;){const e=t.Qa.values().next().value;t.Qa.delete(e);const n=new ce(We.fromString(e)),r=t.za.next();t.Ka.set(r,new dz(n)),t.$a=t.$a.insert(n,r),yx(t.remoteStore,new Gr(Zn($b(n.path)),r,"TargetPurposeLimboResolution",ff.ae))}}async function zl(t,e,n){const r=me(t),i=[],s=[],o=[];r.ka.isEmpty()||(r.ka.forEach((a,l)=>{o.push(r.Ha(l,e,n).then(u=>{var h;if((u||n)&&r.isPrimaryClient){const f=u?!u.fromCache:(h=n==null?void 0:n.targetChanges.get(l.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(u){i.push(u);const f=M_.Yi(l.targetId,u);s.push(f)}}))}),await Promise.all(o),r.La.p_(i),await async function(l,u){const h=me(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>W.forEach(u,d=>W.forEach(d.Hi,g=>h.persistence.referenceDelegate.addReference(f,d.targetId,g)).next(()=>W.forEach(d.Ji,g=>h.persistence.referenceDelegate.removeReference(f,d.targetId,g)))))}catch(f){if(!Po(f))throw f;re(D_,"Failed to update sequence numbers: "+f)}for(const f of u){const d=f.targetId;if(!f.fromCache){const g=h.Ts.get(d),_=g.snapshotVersion,y=g.withLastLimboFreeSnapshotVersion(_);h.Ts=h.Ts.insert(d,y)}}}(r.localStore,s))}async function xz(t,e){const n=me(t);if(!n.currentUser.isEqual(e)){re(U_,"User change. New user:",e.toKey());const r=await px(n.localStore,e);n.currentUser=e,function(s,o){s.Ga.forEach(a=>{a.forEach(l=>{l.reject(new se(q.CANCELLED,o))})}),s.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await zl(n,r.Rs)}}function Rz(t,e){const n=me(t),r=n.Ka.get(e);if(r&&r.Ba)return Te().add(r.key);{let i=Te();const s=n.qa.get(e);if(!s)return i;for(const o of s){const a=n.ka.get(o);i=i.unionWith(a.view.ba)}return i}}function kx(t){const e=me(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ix.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Rz.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Ez.bind(null,e),e.La.p_=lz.bind(null,e.eventManager),e.La.Ja=uz.bind(null,e.eventManager),e}function Iz(t){const e=me(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Sz.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Tz.bind(null,e),e}class Ch{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=wf(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,n){return null}nu(e,n){return null}eu(e){return A3(this.persistence,new x3,e.initialUser,this.serializer)}Xa(e){return new dx(L_.ri,this.serializer)}Za(e){return new D3}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ch.provider={build:()=>new Ch};class Az extends Ch{constructor(e){super(),this.cacheSizeBytes=e}tu(e,n){Le(this.persistence.referenceDelegate instanceof Ih);const r=this.persistence.referenceDelegate.garbageCollector;return new c3(r,e.asyncQueue,n)}Xa(e){const n=this.cacheSizeBytes!==void 0?en.withCacheSize(this.cacheSizeBytes):en.DEFAULT;return new dx(r=>Ih.ri(r,n),this.serializer)}}class qg{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>pw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=xz.bind(null,this.syncEngine),await rz(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new sz}()}createDatastore(e){const n=wf(e.databaseInfo.databaseId),r=function(s){return new j3(s)}(e.databaseInfo);return function(s,o,a,l){return new H3(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new q3(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>pw(this.syncEngine,n,0),function(){return lw.D()?new lw:new N3}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,h){const f=new pz(i,s,o,a,l,u);return h&&(f.ja=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=me(i);re(as,"RemoteStore shutting down."),s.W_.add(5),await Fl(s),s.z_.shutdown(),s.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}qg.provider={build:()=>new qg};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Cz{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):xr("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi="FirestoreClient";class Pz{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ft.UNAUTHENTICATED,this.clientId=bb.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{re(vi,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(re(vi,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ai;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=B_(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Zd(t,e){t.asyncQueue.verifyOperationInProgress(),re(vi,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await px(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function mw(t,e){t.asyncQueue.verifyOperationInProgress();const n=await kz(t);re(vi,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>cw(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>cw(e.remoteStore,i)),t._onlineComponents=e}async function kz(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){re(vi,"Using user provided OfflineComponentProvider");try{await Zd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===q.FAILED_PRECONDITION||i.code===q.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;po("Error using user provided cache. Falling back to memory cache: "+n),await Zd(t,new Ch)}}else re(vi,"Using default OfflineComponentProvider"),await Zd(t,new Az(void 0));return t._offlineComponents}async function Ox(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(re(vi,"Using user provided OnlineComponentProvider"),await mw(t,t._uninitializedComponentsProvider._online)):(re(vi,"Using default OnlineComponentProvider"),await mw(t,new qg))),t._onlineComponents}function Oz(t){return Ox(t).then(e=>e.syncEngine)}async function Lz(t){const e=await Ox(t),n=e.eventManager;return n.onListen=gz.bind(null,e.syncEngine),n.onUnlisten=yz.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=mz.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=vz.bind(null,e.syncEngine),n}function Mz(t,e,n={}){const r=new ai;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const h=new Cz({next:d=>{h.su(),o.enqueueAndForget(()=>az(s,f)),d.fromCache&&l.source==="server"?u.reject(new se(q.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),f=new cz(a,h,{includeMetadataChanges:!0,Ta:!0});return oz(s,f)}(await Lz(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function Lx(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _w=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mx(t,e,n){if(!n)throw new se(q.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Dz(t,e,n,r){if(e===!0&&r===!0)throw new se(q.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function yw(t){if(!ce.isDocumentKey(t))throw new se(q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function vw(t){if(ce.isDocumentKey(t))throw new se(q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Tf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":de()}function ls(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new se(q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Tf(t);throw new se(q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dx="firestore.googleapis.com",ww=!0;class Ew{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new se(q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Dx,this.ssl=ww}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:ww;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=fx;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<l3)throw new se(q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Dz("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Lx((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new se(q.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new se(q.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new se(q.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class bf{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ew({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new se(q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new se(q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ew(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new jF;switch(r.type){case"firstParty":return new HF(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new se(q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=_w.get(n);r&&(re("ComponentProvider","Removing Datastore"),_w.delete(n),r.terminate())}(this),Promise.resolve()}}function Nz(t,e,n,r={}){var i;const s=(t=ls(t,bf))._getSettings(),o=Object.assign(Object.assign({},s),{emulatorOptions:t._getEmulatorOptions()}),a=`${e}:${n}`;s.host!==Dx&&s.host!==a&&po("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l=Object.assign(Object.assign({},s),{host:a,ssl:!1,emulatorOptions:r});if(!mh(l,o)&&(t._setSettings(l),r.mockUserToken)){let u,h;if(typeof r.mockUserToken=="string")u=r.mockUserToken,h=Ft.MOCK_USER;else{u=vV(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new se(q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new Ft(f)}t._authCredentials=new BF(new Tb(u,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Oo(this.firestore,e,this._query)}}class _n{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new li(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _n(this.firestore,e,this._key)}}class li extends Oo{constructor(e,n,r){super(e,n,$b(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _n(this.firestore,null,new ce(e))}withConverter(e){return new li(this.firestore,e,this._path)}}function ep(t,e,...n){if(t=Tr(t),Mx("collection","path",e),t instanceof bf){const r=We.fromString(e,...n);return vw(r),new li(t,null,r)}{if(!(t instanceof _n||t instanceof li))throw new se(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(We.fromString(e,...n));return vw(r),new li(t.firestore,null,r)}}function Nx(t,e,...n){if(t=Tr(t),arguments.length===1&&(e=bb.newId()),Mx("doc","path",e),t instanceof bf){const r=We.fromString(e,...n);return yw(r),new _n(t,null,new ce(r))}{if(!(t instanceof _n||t instanceof li))throw new se(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(We.fromString(e,...n));return yw(r),new _n(t.firestore,t instanceof li?t.converter:null,new ce(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sw="AsyncQueue";class Tw{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new mx(this,"async_queue_retry"),this.bu=()=>{const r=Jd();r&&re(Sw,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.Su=e;const n=Jd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const n=Jd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.bu)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const n=new ai;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!Po(e))throw e;re(Sw,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const n=this.Su.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw xr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.pu=!1,r))));return this.Su=n,n}enqueueAfterDelay(e,n,r){this.Du(),this.wu.indexOf(e)>-1&&(n=0);const i=j_.createAndSchedule(this,e,n,r,s=>this.Fu(s));return this.fu.push(i),i}Du(){this.gu&&de()}verifyOperationInProgress(){}async Mu(){let e;do e=this.Su,await e;while(e!==this.Su)}xu(e){for(const n of this.fu)if(n.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const n=this.fu.indexOf(e);this.fu.splice(n,1)}}class jl extends bf{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Tw,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Tw(e),this._firestoreClient=void 0,await e}}}function Vz(t,e){const n=typeof t=="object"?t:CF(),r=typeof t=="string"?t:wh,i=bF(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=_V("firestore");s&&Nz(i,...s)}return i}function Vx(t){if(t._terminated)throw new se(q.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Fz(t),t._firestoreClient}function Fz(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,h){return new i4(a,l,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,Lx(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new Pz(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new wo(Pt.fromBase64String(e))}catch(n){throw new se(q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new wo(Pt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new se(q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new It(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new se(q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new se(q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return xe(this._lat,e._lat)||xe(this._long,e._long)}}/**
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
 */class G_{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zz=/^__.*__$/;class jz{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new xi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Nl(e,this.data,n,this.fieldTransforms)}}class Fx{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new xi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function zx(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw de()}}class K_{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Bu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new K_(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ku({path:r,Qu:!1});return i.$u(e),i}Ku(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ku({path:r,Qu:!1});return i.Bu(),i}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return Ph(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(zx(this.Lu)&&zz.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class Bz{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||wf(e)}ju(e,n,r,i=!1){return new K_({Lu:e,methodName:n,zu:r,path:It.emptyPath(),Qu:!1,Gu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Q_(t){const e=t._freezeSettings(),n=wf(t._databaseId);return new Bz(t._databaseId,!!e.ignoreUndefinedProperties,n)}function $z(t,e,n,r,i,s={}){const o=t.ju(s.merge||s.mergeFields?2:0,e,n,i);Y_("Data must be an object, but it was:",o,r);const a=jx(r,o);let l,u;if(s.merge)l=new gn(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const f of s.mergeFields){const d=Gg(e,f,n);if(!o.contains(d))throw new se(q.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);$x(h,d)||h.push(d)}l=new gn(h),u=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,u=o.fieldTransforms;return new jz(new rn(a),l,u)}class Rf extends W_{_toFieldTransform(e){if(e.Lu!==2)throw e.Lu===1?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Rf}}function Uz(t,e,n,r){const i=t.ju(1,e,n);Y_("Data must be an object, but it was:",i,r);const s=[],o=rn.empty();bi(r,(l,u)=>{const h=X_(e,l,n);u=Tr(u);const f=i.Ku(h);if(u instanceof Rf)s.push(h);else{const d=Bl(u,f);d!=null&&(s.push(h),o.set(h,d))}});const a=new gn(s);return new Fx(o,a,i.fieldTransforms)}function Hz(t,e,n,r,i,s){const o=t.ju(1,e,n),a=[Gg(e,r,n)],l=[i];if(s.length%2!=0)throw new se(q.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Gg(e,s[d])),l.push(s[d+1]);const u=[],h=rn.empty();for(let d=a.length-1;d>=0;--d)if(!$x(u,a[d])){const g=a[d];let _=l[d];_=Tr(_);const y=o.Ku(g);if(_ instanceof Rf)u.push(g);else{const E=Bl(_,y);E!=null&&(u.push(g),h.set(g,E))}}const f=new gn(u);return new Fx(h,f,o.fieldTransforms)}function Wz(t,e,n,r=!1){return Bl(n,t.ju(r?4:3,e))}function Bl(t,e){if(Bx(t=Tr(t)))return Y_("Unsupported field value:",e,t),jx(t,e);if(t instanceof W_)return function(r,i){if(!zx(i.Lu))throw i.Wu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Wu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Bl(a,i.Uu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Tr(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return R4(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=vt.fromDate(r);return{timestampValue:Rh(i.serializer,s)}}if(r instanceof vt){const s=new vt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Rh(i.serializer,s)}}if(r instanceof q_)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof wo)return{bytesValue:sx(i.serializer,r._byteString)};if(r instanceof _n){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Wu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:k_(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof G_)return function(o,a){return{mapValue:{fields:{[Ob]:{stringValue:Mb},[Eh]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Wu("VectorValues must only contain numeric values.");return I_(a.serializer,u)})}}}}}}(r,i);throw i.Wu(`Unsupported field value: ${Tf(r)}`)}(t,e)}function jx(t,e){const n={};return Rb(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):bi(t,(r,i)=>{const s=Bl(i,e.qu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Bx(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof vt||t instanceof q_||t instanceof wo||t instanceof _n||t instanceof W_||t instanceof G_)}function Y_(t,e,n){if(!Bx(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Tf(n);throw r==="an object"?e.Wu(t+" a custom object"):e.Wu(t+" "+r)}}function Gg(t,e,n){if((e=Tr(e))instanceof xf)return e._internalPath;if(typeof e=="string")return X_(t,e);throw Ph("Field path arguments must be of type string or ",t,!1,void 0,n)}const qz=new RegExp("[~\\*/\\[\\]]");function X_(t,e,n){if(e.search(qz)>=0)throw Ph(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new xf(...e.split("."))._internalPath}catch{throw Ph(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ph(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new se(q.INVALID_ARGUMENT,a+t+l)}function $x(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ux{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new _n(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Gz(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Hx("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Gz extends Ux{data(){return super.data()}}function Hx(t,e){return typeof e=="string"?X_(t,e):e instanceof xf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kz(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new se(q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class J_{}class Qz extends J_{}function bw(t,e,...n){let r=[];e instanceof J_&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof ey).length,a=s.filter(l=>l instanceof Z_).length;if(o>1||o>0&&a>0)throw new se(q.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Z_ extends Qz{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Z_(e,n,r)}_apply(e){const n=this._parse(e);return Wx(e._query,n),new Oo(e.firestore,e.converter,Ng(e._query,n))}_parse(e){const n=Q_(e.firestore);return function(s,o,a,l,u,h,f){let d;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new se(q.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Rw(f,h);const _=[];for(const y of f)_.push(xw(l,s,y));d={arrayValue:{values:_}}}else d=xw(l,s,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Rw(f,h),d=Wz(a,o,f,h==="in"||h==="not-in");return gt.create(u,h,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class ey extends J_{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ey(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Bn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)Wx(o,l),o=Ng(o,l)}(e._query,n),new Oo(e.firestore,e.converter,Ng(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function xw(t,e,n){if(typeof(n=Tr(n))=="string"){if(n==="")throw new se(q.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ub(e)&&n.indexOf("/")!==-1)throw new se(q.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(We.fromString(n));if(!ce.isDocumentKey(r))throw new se(q.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return j1(t,new ce(r))}if(n instanceof _n)return j1(t,n._key);throw new se(q.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Tf(n)}.`)}function Rw(t,e){if(!Array.isArray(t)||t.length===0)throw new se(q.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Wx(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new se(q.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new se(q.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Yz{convertValue(e,n="none"){switch(_i(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ut(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(mi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw de()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return bi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n[Eh].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>ut(o.doubleValue));return new G_(s)}convertGeoPoint(e){return new q_(ut(e.latitude),ut(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=pf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(gl(e));default:return null}}convertTimestamp(e){const n=gi(e);return new vt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=We.fromString(e);Le(hx(r));const i=new ml(r.get(1),r.get(3)),s=new ce(r.popFirst(5));return i.isEqual(n)||xr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xz(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Jz extends Ux{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ec(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Hx("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ec extends Jz{data(e={}){return super.data(e)}}class Zz{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Hu(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ec(this._firestore,this._userDataWriter,r.key,r,new Hu(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new se(q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Ec(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Hu(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Ec(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Hu(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:ej(a.type),doc:l,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function ej(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return de()}}class tj extends Yz{constructor(e){super(),this.firestore=e}convertBytes(e){return new wo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new _n(this.firestore,null,n)}}function Iw(t){t=ls(t,Oo);const e=ls(t.firestore,jl),n=Vx(e),r=new tj(e);return Kz(t._query),Mz(n,t._query).then(i=>new Zz(e,r,t,i))}function nj(t,e,n,...r){t=ls(t,_n);const i=ls(t.firestore,jl),s=Q_(i);let o;return o=typeof(e=Tr(e))=="string"||e instanceof xf?Hz(s,"updateDoc",t._key,e,n,r):Uz(s,"updateDoc",t._key,e),ty(i,[o.toMutation(t._key,Fn.exists(!0))])}function rj(t){return ty(ls(t.firestore,jl),[new A_(t._key,Fn.none())])}function ij(t,e){const n=ls(t.firestore,jl),r=Nx(t),i=Xz(t.converter,e);return ty(n,[$z(Q_(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Fn.exists(!1))]).then(()=>r)}function ty(t,e){return function(r,i){const s=new ai;return r.asyncQueue.enqueueAndForget(async()=>wz(await Oz(r),i,s)),s.promise}(Vx(t),e)}(function(e,n=!0){(function(i){Ao=i})(AF),yh(new fl("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new jl(new $F(r.getProvider("auth-internal")),new WF(o,r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new se(q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ml(u.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Xs(C1,P1,e),Xs(C1,P1,"esm2017")})();var sj="firebase",oj="11.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xs(sj,oj,"app");const aj={apiKey:"AIzaSyDJNUMGVfCJCMnn-HH1FoxTJZa14DDJjNk",authDomain:"todolistdj-1ad4d.firebaseapp.com",projectId:"todolistdj-1ad4d",storageBucket:"todolistdj-1ad4d.firebasestorage.app",messagingSenderId:"575418657372",appId:"1:575418657372:web:7de23279fb37adc9f31499",measurementId:"G-YVR24SNKRC"},lj=pb(aj),Wu=Vz(lj);function uj(){const[t,e]=F.useState(""),[n,r]=F.useState([]),[i,s]=F.useState("");F.useState(localStorage.getItem("spotifyAccessToken")||"");const[o,a]=F.useState([]),[l,u]=F.useState(""),[h,f]=F.useState(!1);let d;const g=m=>{const S=m.target.value;e(S),clearTimeout(d),d=setTimeout(()=>{S.length>2?_(S):r([])},300)};F.useEffect(()=>{(async()=>{var S;try{console.log("Obtendo novo token simples...");const C=await rt.post("https://accounts.spotify.com/api/token",new URLSearchParams({grant_type:"client_credentials"}),{headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:`Basic ${btoa("d33fdd3fd546499ba9873e532b7ee491:a1b0f9d4870242229b3273f22cdd2332")}`}});s(C.data.access_token),console.log("Novo token simples obtido:",C.data.access_token)}catch(C){console.error("Erro ao obter token simples:",((S=C.response)==null?void 0:S.data)||C.message)}})()},[]);const _=async m=>{var S;f(!0);try{if(!i)throw new Error("Token simples não disponível.");console.log("Buscando músicas no Spotify para consulta:",m);const C=await rt.get("https://api.spotify.com/v1/search",{headers:{Authorization:`Bearer ${i}`},params:{q:m,type:"track",limit:5}});r(C.data.tracks.items),console.log("Músicas encontradas:",C.data.tracks.items)}catch(C){console.error("Erro ao buscar músicas:",((S=C.response)==null?void 0:S.data)||C.message)}finally{f(!1)}},y=async m=>{if(!l.trim()){alert("Por favor, insira seu nome antes de adicionar uma música.");return}await new Promise(C=>setTimeout(C,500));const S={spotifyData:m,suggestedBy:l,completed:!1};try{console.log("Salvando nova música no Firestore:",S),await ij(ep(Wu,"musicas"),S),a([...o,S]),e(""),r([])}catch(C){console.error("Erro ao salvar no Firestore:",C)}};F.useEffect(()=>{(async()=>{try{console.log("Carregando músicas do Firestore...");const S=bw(ep(Wu,"musicas")),O=(await Iw(S)).docs.map(M=>({id:M.id,...M.data()}));a(O),console.log("Músicas carregadas do Firestore:",O)}catch(S){console.error("Erro ao carregar músicas do Firestore:",S)}})()},[]);const E=async m=>{try{if(!m||typeof m!="string"||m.trim()===""){console.error("ID inválido:",m),alert("Erro ao atualizar música: ID inválido.");return}const S=o.map(O=>O.id===m?{...O,completed:!O.completed}:O);a(S);const C=Nx(Wu,"musicas",m);await nj(C,{completed:!S.find(O=>O.id===m).completed}),console.log("Estado da música atualizado no Firestore:",m)}catch(S){console.error("Erro ao atualizar música no Firestore:",S),alert("Erro ao atualizar música. Por favor, tente novamente.")}},w=async()=>{try{console.log("Limpando todas as músicas do Firestore...");const m=bw(ep(Wu,"musicas"));(await Iw(m)).forEach(async C=>{await rj(C.ref)}),a([]),console.log("Todas as músicas foram limpas do Firestore.")}catch(m){console.error("Erro ao limpar músicas:",m)}};return U.jsxs("div",{className:"todolist-container",children:[U.jsx("header",{className:"header",children:U.jsxs("nav",{children:[U.jsx(yr,{to:"/",children:"🏠 Home"}),U.jsx(yr,{to:"/sugestoes",children:"📊 Medidor de Vibe"})]})}),U.jsxs("div",{className:"left-column",children:[U.jsx("h2",{className:"output",children:"🎵 Sugestões de Música"}),U.jsx("input",{type:"text",className:"contact-form input",placeholder:"Digite uma música...",value:t,onChange:g}),U.jsx("input",{type:"text",className:"contact-form input",placeholder:"Seu nome...",value:l,onChange:m=>u(m.target.value)}),h?U.jsx("p",{className:"loading-message output",children:"Carregando..."}):U.jsx("ul",{className:"suggestions-list output",children:n.map(m=>{var S;return U.jsxs("li",{className:"suggestion-item",onClick:()=>y(m),children:[U.jsx("span",{className:"spotify-icon"}),U.jsx("img",{src:((S=m.album.images[2])==null?void 0:S.url)||"https://via.placeholder.com/50",alt:`Capa do álbum ${m.album.name}`,className:"album-cover"}),m.name," - ",m.artists[0].name]},m.id)})})]}),U.jsxs("div",{className:"right-column",children:[U.jsx("h3",{className:"output",children:"📝 Lista de Músicas"}),U.jsxs("div",{className:"todo-section",children:[U.jsx("h4",{className:"output",children:"Não Riscadas"}),U.jsx("ul",{className:"todo-list output",children:o.filter(m=>!m.completed).map(m=>U.jsx("li",{className:`todo-item ${m.completed?"completed":""}`,onClick:()=>E(m.id),children:U.jsxs("div",{children:[U.jsx("strong",{children:m.spotifyData.name})," - ",m.spotifyData.artists[0].name," ","(Sugerido por: ",m.suggestedBy,")"]})},m.id))})]}),U.jsxs("div",{className:"todo-section",children:[U.jsx("h4",{className:"output",children:"Riscadas"}),U.jsx("ul",{className:"todo-list output",children:o.filter(m=>m.completed).map(m=>U.jsx("li",{className:`todo-item ${m.completed?"completed":""}`,onClick:()=>E(m.id),children:U.jsxs("div",{children:[U.jsx("strong",{children:m.spotifyData.name})," - ",m.spotifyData.artists[0].name," ","(Sugerido por: ",m.suggestedBy,")"]})},m.id))})]}),U.jsx("button",{className:"contact-form button",onClick:w,children:"Limpar Todas as Músicas"})]})]})}Cl.register(ga,La,gr,BO,sT,nT);function cj(){const[t,e]=F.useState(),[n,r]=F.useState(!0),[i,s]=F.useState(!1),[o,a]=F.useState({name:"",email:"",message:""}),[l,u]=F.useState(""),h=sA({animationCharacters:"▒░█",animationCharacterSpacing:1,animationDelay:2e3,animationDirection:"down",animationInterval:100,animationLoop:!0,animationSpeed:30,font:oA,text:["Ferro","Velho"]});F.useEffect(()=>{async function y(){try{const E=await rt.get("https://stream.zeno.fm/8llryz2hnsntv",{timeout:5e3});E.status===200&&E.data?e(!0):e(!1)}catch(E){console.error("Erro ao verificar a rádio:",E),e(!1)}finally{r(!1)}}y()},[]);const f={labels:["Afrobeats","Reggaeton","Baile Funk","R&B","House","Trap"],datasets:[{label:"Generos Meus",data:[90,80,95,85,70,75],backgroundColor:"rgba(0, 255, 0, 0.2)",borderColor:"rgba(0, 255, 0, 1)",borderWidth:2},{label:"Sugestões",data:[90,80,95,85,70,75],backgroundColor:"rgba(0, 255, 0, 0.2)",borderColor:"rgba(0, 255, 0, 1)",borderWidth:2}]},d={dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplay:!0},g=y=>{a({...o,[y.target.name]:y.target.value})},_=async y=>{y.preventDefault();try{await rt.post("https://formspree.io/f/YOUR_FORMSPREE_ID",o),u("Mensagem enviada com sucesso!"),a({name:"",email:"",message:""})}catch{u("Erro ao enviar mensagem. Tente novamente mais tarde.")}};return U.jsxs("div",{className:"terminal",style:{minHeight:"100vh",overflowY:"auto",paddingBottom:"50px"},children:[U.jsx("div",{className:"noise"}),U.jsx("div",{className:"overlay"}),U.jsx("header",{className:"header",children:U.jsxs("nav",{children:[U.jsx(yr,{to:"/sugestoes",children:"🎵 Sugestões de Música"}),U.jsx(yr,{to:"/graficos",children:"📊 Medidor de Vibe"})]})}),n?U.jsx("p",{style:{marginTop:"60px"},children:"Carregando..."}):U.jsxs(U.Fragment,{children:[U.jsxs("div",{className:"main-content",children:[U.jsx("div",{className:"ascii-container",children:U.jsx("pre",{style:{fontSize:"18px",position:"relative",zIndex:2},ref:h})}),U.jsxs("h1",{children:["DJ ",U.jsx("span",{className:"errorcode",children:"FERRO VELHO"})]}),U.jsx("p",{className:"output",children:"Mixando vibes únicas no melhor estilo underground."})]}),U.jsxs("div",{className:"socials",children:[U.jsx("p",{children:"📲 Siga-me:"}),U.jsx("a",{href:"https://instagram.com",target:"_blank",children:"Instagram"})," |",U.jsx("a",{href:"https://soundcloud.com",target:"_blank",children:" SoundCloud"})," |",U.jsx("a",{href:"https://mixcloud.com",target:"_blank",children:" Mixcloud"})]}),U.jsx("button",{onClick:()=>{s(!i),console.log("Formulário Visível?",!i)},className:"terminal-button",children:"Entre em Contato"}),i&&U.jsxs("form",{onSubmit:_,className:"contact-form",children:[U.jsx("label",{children:"Nome"}),U.jsx("input",{type:"text",name:"name",placeholder:"Digite seu nome",value:o.name,onChange:g,required:!0}),U.jsx("label",{children:"Email"}),U.jsx("input",{type:"email",name:"email",placeholder:"Digite seu email",value:o.email,onChange:g,required:!0}),U.jsx("label",{children:"Mensagem"}),U.jsx("textarea",{name:"message",placeholder:"Digite sua mensagem",value:o.message,onChange:g,required:!0}),U.jsx("button",{type:"submit",className:"terminal-button",children:"Enviar"}),l&&U.jsx("p",{children:l})]}),U.jsxs("div",{className:"bio",children:[U.jsx("p",{children:"🎧 DJ especializado em diversos estilos musicais."}),U.jsx("p",{children:"🔥 Criando sets energéticos e performances ao vivo cativantes."})]}),U.jsxs("div",{className:"chart-container",style:{width:"90%",maxWidth:"400px",height:"400px",margin:"auto",padding:"10px",background:"rgba(0, 0, 0, 0.7)",borderRadius:"10px"},children:[U.jsx("h2",{children:"Estilos Musicais"}),U.jsx(CL,{data:f,options:{maintainAspectRatio:!1,responsive:!0,scales:{r:{suggestedMin:0,suggestedMax:100}}}})]}),U.jsxs("div",{className:"carousel",style:{maxWidth:"500px",margin:"auto",paddingTop:"20px"},children:[U.jsx("h2",{children:"Galeria"}),U.jsxs(AD,{...d,children:[U.jsx("img",{src:"https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",alt:"Festa 1"}),U.jsx("img",{src:"https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",alt:"Festa 2"}),U.jsx("img",{src:"https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",alt:"Festa 3"})]})]}),U.jsxs("div",{className:"radio-status",children:[U.jsx("h2",{children:"Status da Rádio:"}),t?U.jsxs(U.Fragment,{children:[U.jsx("button",{href:"https://stream.zeno.fm/8llryz2hnsntv",target:"_blank",className:"terminal-button",children:"Ouça Agora"}),U.jsx("p",{className:"online",children:"🔴 Ao Vivo"})]}):U.jsx("p",{className:"offline",children:"⚫ Fora do Ar"})]})]})]})}function hj(){const t=eb();return F.useEffect(()=>{const e=window.location.hash.substring(1),n=new URL(`http://example.com?${e.split("?")[1]}`),i=new URLSearchParams(n.search).get("code");alert(i),i&&i.length>10?(console.log("AUTH -> Código de autorização recebido:",i),localStorage.setItem("spotifyAuthCode",i),alert("Autenticação bem-sucedida! Redirecionando para Sugestões..."),t("/sugestoes")):(console.error("Erro: Código de autorização inválido ou ausente."),alert("Falha na autenticação. Por favor, tente novamente."),t("/"))},[t]),U.jsx("div",{children:"Processando código de autorização..."})}Cl.register(hg,fg,La,gr,da,fc,KO,sT,nT);function fj(){const t=[30,45,60,80,90,40,75,65,55,55],e=t[t.length-1];let n;e>70?n="green":e>=50&&e<=69?n="yellow":n="red";const r={labels:t.map((R,T)=>`Track ${T+1}`),datasets:[{label:"Popularidade",data:t,borderColor:n,backgroundColor:n,tension:.4}]},i={responsive:!0,plugins:{legend:{position:"top"},title:{display:!0,text:"Gráfico de Popularidade"}},scales:{x:{beginAtZero:!0},y:{min:0,max:100}}},s={labels:["Pop","Rock","Hip-Hop","Eletrônica","Clássico"],datasets:[{label:"Gêneros Musicais",data:[40,20,15,10,15],backgroundColor:["#FF6384","#36A2EB","#FFCE56","#4BC0C0","#9966FF"],hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56","#4BC0C0","#9966FF"]}]},o={responsive:!0,plugins:{legend:{position:"top"},title:{display:!0,text:"Distribuição de Gêneros Musicais"}}},a=[{year:2002,count:10},{year:2003,count:15},{year:2005,count:20},{year:2012,count:25},{year:2015,count:30},{year:2020,count:35},{year:2022,count:40},{year:2023,count:50}],l=R=>{const T={};return R.forEach(({year:b,count:x})=>{const P=Math.floor(b/10)*10,k=`${P}-${P+9}`;T[k]||(T[k]=0),T[k]+=x}),{labels:Object.keys(T),counts:Object.values(T)}},{labels:u,counts:h}=l(a),f={labels:u,datasets:[{label:"Quantidade de Músicas",data:h,backgroundColor:"#36A2EB",borderColor:"#36A2EB",borderWidth:1}]},d={responsive:!0,plugins:{legend:{position:"top"},title:{display:!0,text:"Quantidade de Músicas por Década"}},scales:{x:{beginAtZero:!0},y:{beginAtZero:!0}}},g={labels:["João","Maria","Pedro","Ana","Carlos"],datasets:[{label:"Músicas Sugeridas",data:[5,3,8,6,4],backgroundColor:["#FF6384","#36A2EB","#FFCE56","#4BC0C0","#9966FF"],borderColor:["#FF6384","#36A2EB","#FFCE56","#4BC0C0","#9966FF"],borderWidth:1}]},_={responsive:!0,plugins:{legend:{position:"top"},title:{display:!0,text:"Músicas Sugeridas por Pessoa"},tooltip:{callbacks:{label:R=>{const T=R.dataset.label||"",b=R.parsed.y;return`${T}: ${b}`}}}},scales:{x:{beginAtZero:!0},y:{beginAtZero:!0}}},y={totalTracks:50,explicitTracks:10},E=y.explicitTracks/y.totalTracks*100,w={labels:["Anjo","Diabo"],datasets:[{data:[100-E,E],backgroundColor:["#B3E5FC","#FF6384"],borderColor:["transparent","#FF6384"],borderWidth:2,circumference:180,rotation:-90}]},m={responsive:!0,plugins:{legend:{display:!1},tooltip:{enabled:!1}},elements:{arc:{borderRadius:10}}},S={totalTracks:50,brazilianTracks:20},C=S.brazilianTracks/S.totalTracks*100,O={labels:["Brasil","Estrangeiro"],datasets:[{data:[C,100-C],backgroundColor:["#4CAF50","#FF9800"],borderColor:["transparent","#FF9800"],borderWidth:2,circumference:180,rotation:-90}]},M={responsive:!0,plugins:{legend:{display:!1},tooltip:{enabled:!1}},elements:{arc:{borderRadius:10}}};return U.jsxs("div",{className:"charts-container",children:[U.jsx("header",{className:"header",children:U.jsxs("nav",{children:[U.jsx(yr,{to:"/",className:"header-link",children:"🏠 Home"}),U.jsx(yr,{to:"/sugestoes",className:"header-link",children:"🎵 Sugestões de Música"}),U.jsx(yr,{to:"/graficos",className:"header-link",children:"📊 Gráficos"})]})}),U.jsx("h2",{className:"output",children:"📊 Gráficos"}),U.jsxs("div",{className:"charts-grid",children:[U.jsxs("div",{className:"chart-item",children:[U.jsx("h3",{children:"Popularidade"}),U.jsx(AL,{data:r,options:i})]}),U.jsxs("div",{className:"chart-item",children:[U.jsx("h3",{children:"Gênero"}),U.jsx(PL,{data:s,options:o})]}),U.jsxs("div",{className:"chart-item",children:[U.jsx("h3",{children:"Ano"}),U.jsx(W0,{data:f,options:d})]}),U.jsxs("div",{className:"chart-item",children:[U.jsx("h3",{children:"Quem Sugeriu"}),U.jsx(W0,{data:g,options:_})]}),U.jsxs("div",{className:"chart-item",children:[U.jsx("h3",{children:"Medidor Explícito"}),U.jsxs("div",{className:"meter-labels",children:[U.jsx("span",{children:"👼"}),U.jsx("span",{children:"👿"})]}),U.jsx(q0,{data:w,options:m})]}),U.jsxs("div",{className:"chart-item",children:[U.jsx("h3",{children:"Nacional x Estrangeira"}),U.jsxs("div",{className:"meter-labels",children:[U.jsx("span",{children:"🇧🇷"}),U.jsx("span",{children:"🌍"})]}),U.jsx(q0,{data:O,options:M})]})]})]})}function dj(){return U.jsx(XN,{children:U.jsxs(IN,{children:[U.jsx(ma,{path:"/",element:U.jsx(cj,{})}),U.jsx(ma,{path:"/sugestoes",element:U.jsx(uj,{})}),U.jsx(ma,{path:"/graficos",element:U.jsx(fj,{})}),U.jsx(ma,{path:"/callback",element:U.jsx(hj,{})})]})})}tp.createRoot(document.getElementById("root")).render(U.jsx(Zg.StrictMode,{children:U.jsx(dj,{})}));
