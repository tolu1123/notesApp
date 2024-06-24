function cE(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function hE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var dE={exports:{}},ph={},fE={exports:{}},pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vl=Symbol.for("react.element"),GR=Symbol.for("react.portal"),QR=Symbol.for("react.fragment"),YR=Symbol.for("react.strict_mode"),XR=Symbol.for("react.profiler"),JR=Symbol.for("react.provider"),ZR=Symbol.for("react.context"),eA=Symbol.for("react.forward_ref"),tA=Symbol.for("react.suspense"),nA=Symbol.for("react.memo"),rA=Symbol.for("react.lazy"),j_=Symbol.iterator;function iA(t){return t===null||typeof t!="object"?null:(t=j_&&t[j_]||t["@@iterator"],typeof t=="function"?t:null)}var pE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},mE=Object.assign,gE={};function jo(t,e,n){this.props=t,this.context=e,this.refs=gE,this.updater=n||pE}jo.prototype.isReactComponent={};jo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};jo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function _E(){}_E.prototype=jo.prototype;function Hp(t,e,n){this.props=t,this.context=e,this.refs=gE,this.updater=n||pE}var $p=Hp.prototype=new _E;$p.constructor=Hp;mE($p,jo.prototype);$p.isPureReactComponent=!0;var B_=Array.isArray,yE=Object.prototype.hasOwnProperty,qp={current:null},vE={key:!0,ref:!0,__self:!0,__source:!0};function wE(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)yE.call(e,r)&&!vE.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Vl,type:t,key:s,ref:o,props:i,_owner:qp.current}}function sA(t,e){return{$$typeof:Vl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Kp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Vl}function oA(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var z_=/\/+/g;function fd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?oA(""+t.key):e.toString(36)}function Qu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Vl:case GR:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+fd(o,0):r,B_(i)?(n="",t!=null&&(n=t.replace(z_,"$&/")+"/"),Qu(i,e,n,"",function(c){return c})):i!=null&&(Kp(i)&&(i=sA(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(z_,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",B_(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+fd(s,a);o+=Qu(s,e,n,u,i)}else if(u=iA(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+fd(s,a++),o+=Qu(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Iu(t,e,n){if(t==null)return t;var r=[],i=0;return Qu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function aA(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Yt={current:null},Yu={transition:null},lA={ReactCurrentDispatcher:Yt,ReactCurrentBatchConfig:Yu,ReactCurrentOwner:qp};function EE(){throw Error("act(...) is not supported in production builds of React.")}pe.Children={map:Iu,forEach:function(t,e,n){Iu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Iu(t,function(){e++}),e},toArray:function(t){return Iu(t,function(e){return e})||[]},only:function(t){if(!Kp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};pe.Component=jo;pe.Fragment=QR;pe.Profiler=XR;pe.PureComponent=Hp;pe.StrictMode=YR;pe.Suspense=tA;pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lA;pe.act=EE;pe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=mE({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=qp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)yE.call(e,u)&&!vE.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Vl,type:t.type,key:i,ref:s,props:r,_owner:o}};pe.createContext=function(t){return t={$$typeof:ZR,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:JR,_context:t},t.Consumer=t};pe.createElement=wE;pe.createFactory=function(t){var e=wE.bind(null,t);return e.type=t,e};pe.createRef=function(){return{current:null}};pe.forwardRef=function(t){return{$$typeof:eA,render:t}};pe.isValidElement=Kp;pe.lazy=function(t){return{$$typeof:rA,_payload:{_status:-1,_result:t},_init:aA}};pe.memo=function(t,e){return{$$typeof:nA,type:t,compare:e===void 0?null:e}};pe.startTransition=function(t){var e=Yu.transition;Yu.transition={};try{t()}finally{Yu.transition=e}};pe.unstable_act=EE;pe.useCallback=function(t,e){return Yt.current.useCallback(t,e)};pe.useContext=function(t){return Yt.current.useContext(t)};pe.useDebugValue=function(){};pe.useDeferredValue=function(t){return Yt.current.useDeferredValue(t)};pe.useEffect=function(t,e){return Yt.current.useEffect(t,e)};pe.useId=function(){return Yt.current.useId()};pe.useImperativeHandle=function(t,e,n){return Yt.current.useImperativeHandle(t,e,n)};pe.useInsertionEffect=function(t,e){return Yt.current.useInsertionEffect(t,e)};pe.useLayoutEffect=function(t,e){return Yt.current.useLayoutEffect(t,e)};pe.useMemo=function(t,e){return Yt.current.useMemo(t,e)};pe.useReducer=function(t,e,n){return Yt.current.useReducer(t,e,n)};pe.useRef=function(t){return Yt.current.useRef(t)};pe.useState=function(t){return Yt.current.useState(t)};pe.useSyncExternalStore=function(t,e,n){return Yt.current.useSyncExternalStore(t,e,n)};pe.useTransition=function(){return Yt.current.useTransition()};pe.version="18.3.1";fE.exports=pe;var F=fE.exports;const TE=hE(F),uA=cE({__proto__:null,default:TE},[F]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cA=F,hA=Symbol.for("react.element"),dA=Symbol.for("react.fragment"),fA=Object.prototype.hasOwnProperty,pA=cA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,mA={key:!0,ref:!0,__self:!0,__source:!0};function IE(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)fA.call(e,r)&&!mA.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:hA,type:t,key:s,ref:o,props:i,_owner:pA.current}}ph.Fragment=dA;ph.jsx=IE;ph.jsxs=IE;dE.exports=ph;var b=dE.exports,uf={},SE={exports:{}},pn={},CE={exports:{}},RE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(H,ne){var se=H.length;H.push(ne);e:for(;0<se;){var Se=se-1>>>1,de=H[Se];if(0<i(de,ne))H[Se]=ne,H[se]=de,se=Se;else break e}}function n(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var ne=H[0],se=H.pop();if(se!==ne){H[0]=se;e:for(var Se=0,de=H.length,Ae=de>>>1;Se<Ae;){var qt=2*(Se+1)-1,at=H[qt],vt=qt+1,wt=H[vt];if(0>i(at,se))vt<de&&0>i(wt,at)?(H[Se]=wt,H[vt]=se,Se=vt):(H[Se]=at,H[qt]=se,Se=qt);else if(vt<de&&0>i(wt,se))H[Se]=wt,H[vt]=se,Se=vt;else break e}}return ne}function i(H,ne){var se=H.sortIndex-ne.sortIndex;return se!==0?se:H.id-ne.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],d=1,f=null,m=3,T=!1,R=!1,A=!1,P=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(H){for(var ne=n(c);ne!==null;){if(ne.callback===null)r(c);else if(ne.startTime<=H)r(c),ne.sortIndex=ne.expirationTime,e(u,ne);else break;ne=n(c)}}function L(H){if(A=!1,S(H),!R)if(n(u)!==null)R=!0,$n(B);else{var ne=n(c);ne!==null&&Jt(L,ne.startTime-H)}}function B(H,ne){R=!1,A&&(A=!1,E(y),y=-1),T=!0;var se=m;try{for(S(ne),f=n(u);f!==null&&(!(f.expirationTime>ne)||H&&!k());){var Se=f.callback;if(typeof Se=="function"){f.callback=null,m=f.priorityLevel;var de=Se(f.expirationTime<=ne);ne=t.unstable_now(),typeof de=="function"?f.callback=de:f===n(u)&&r(u),S(ne)}else r(u);f=n(u)}if(f!==null)var Ae=!0;else{var qt=n(c);qt!==null&&Jt(L,qt.startTime-ne),Ae=!1}return Ae}finally{f=null,m=se,T=!1}}var $=!1,g=null,y=-1,w=5,I=-1;function k(){return!(t.unstable_now()-I<w)}function N(){if(g!==null){var H=t.unstable_now();I=H;var ne=!0;try{ne=g(!0,H)}finally{ne?C():($=!1,g=null)}}else $=!1}var C;if(typeof v=="function")C=function(){v(N)};else if(typeof MessageChannel<"u"){var Pe=new MessageChannel,yt=Pe.port2;Pe.port1.onmessage=N,C=function(){yt.postMessage(null)}}else C=function(){P(N,0)};function $n(H){g=H,$||($=!0,C())}function Jt(H,ne){y=P(function(){H(t.unstable_now())},ne)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(H){H.callback=null},t.unstable_continueExecution=function(){R||T||(R=!0,$n(B))},t.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<H?Math.floor(1e3/H):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(H){switch(m){case 1:case 2:case 3:var ne=3;break;default:ne=m}var se=m;m=ne;try{return H()}finally{m=se}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(H,ne){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var se=m;m=H;try{return ne()}finally{m=se}},t.unstable_scheduleCallback=function(H,ne,se){var Se=t.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?Se+se:Se):se=Se,H){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=se+de,H={id:d++,callback:ne,priorityLevel:H,startTime:se,expirationTime:de,sortIndex:-1},se>Se?(H.sortIndex=se,e(c,H),n(u)===null&&H===n(c)&&(A?(E(y),y=-1):A=!0,Jt(L,se-Se))):(H.sortIndex=de,e(u,H),R||T||(R=!0,$n(B))),H},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(H){var ne=m;return function(){var se=m;m=ne;try{return H.apply(this,arguments)}finally{m=se}}}})(RE);CE.exports=RE;var gA=CE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _A=F,fn=gA;function z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var AE=new Set,sl={};function Ts(t,e){To(t,e),To(t+"Capture",e)}function To(t,e){for(sl[t]=e,t=0;t<e.length;t++)AE.add(e[t])}var xr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cf=Object.prototype.hasOwnProperty,yA=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,W_={},H_={};function vA(t){return cf.call(H_,t)?!0:cf.call(W_,t)?!1:yA.test(t)?H_[t]=!0:(W_[t]=!0,!1)}function wA(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function EA(t,e,n,r){if(e===null||typeof e>"u"||wA(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Xt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Nt[t]=new Xt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Nt[e]=new Xt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Nt[t]=new Xt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Nt[t]=new Xt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Nt[t]=new Xt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Nt[t]=new Xt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Nt[t]=new Xt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Nt[t]=new Xt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Nt[t]=new Xt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Gp=/[\-:]([a-z])/g;function Qp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Gp,Qp);Nt[e]=new Xt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Gp,Qp);Nt[e]=new Xt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Gp,Qp);Nt[e]=new Xt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Nt[t]=new Xt(t,1,!1,t.toLowerCase(),null,!1,!1)});Nt.xlinkHref=new Xt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Nt[t]=new Xt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Yp(t,e,n,r){var i=Nt.hasOwnProperty(e)?Nt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(EA(e,n,i,r)&&(n=null),r||i===null?vA(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Fr=_A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Su=Symbol.for("react.element"),Ks=Symbol.for("react.portal"),Gs=Symbol.for("react.fragment"),Xp=Symbol.for("react.strict_mode"),hf=Symbol.for("react.profiler"),kE=Symbol.for("react.provider"),PE=Symbol.for("react.context"),Jp=Symbol.for("react.forward_ref"),df=Symbol.for("react.suspense"),ff=Symbol.for("react.suspense_list"),Zp=Symbol.for("react.memo"),ei=Symbol.for("react.lazy"),NE=Symbol.for("react.offscreen"),$_=Symbol.iterator;function ma(t){return t===null||typeof t!="object"?null:(t=$_&&t[$_]||t["@@iterator"],typeof t=="function"?t:null)}var Qe=Object.assign,pd;function xa(t){if(pd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);pd=e&&e[1]||""}return`
`+pd+t}var md=!1;function gd(t,e){if(!t||md)return"";md=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{md=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?xa(t):""}function TA(t){switch(t.tag){case 5:return xa(t.type);case 16:return xa("Lazy");case 13:return xa("Suspense");case 19:return xa("SuspenseList");case 0:case 2:case 15:return t=gd(t.type,!1),t;case 11:return t=gd(t.type.render,!1),t;case 1:return t=gd(t.type,!0),t;default:return""}}function pf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Gs:return"Fragment";case Ks:return"Portal";case hf:return"Profiler";case Xp:return"StrictMode";case df:return"Suspense";case ff:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case PE:return(t.displayName||"Context")+".Consumer";case kE:return(t._context.displayName||"Context")+".Provider";case Jp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Zp:return e=t.displayName||null,e!==null?e:pf(t.type)||"Memo";case ei:e=t._payload,t=t._init;try{return pf(t(e))}catch{}}return null}function IA(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pf(e);case 8:return e===Xp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ii(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function xE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function SA(t){var e=xE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Cu(t){t._valueTracker||(t._valueTracker=SA(t))}function DE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=xE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function _c(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function mf(t,e){var n=e.checked;return Qe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function q_(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ii(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function bE(t,e){e=e.checked,e!=null&&Yp(t,"checked",e,!1)}function gf(t,e){bE(t,e);var n=Ii(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?_f(t,e.type,n):e.hasOwnProperty("defaultValue")&&_f(t,e.type,Ii(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function K_(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function _f(t,e,n){(e!=="number"||_c(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Da=Array.isArray;function uo(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ii(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function yf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(z(91));return Qe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function G_(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(z(92));if(Da(n)){if(1<n.length)throw Error(z(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ii(n)}}function OE(t,e){var n=Ii(e.value),r=Ii(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Q_(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function LE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?LE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ru,ME=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ru=Ru||document.createElement("div"),Ru.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ru.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ol(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ja={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},CA=["Webkit","ms","Moz","O"];Object.keys(ja).forEach(function(t){CA.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ja[e]=ja[t]})});function VE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ja.hasOwnProperty(t)&&ja[t]?(""+e).trim():e+"px"}function FE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=VE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var RA=Qe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wf(t,e){if(e){if(RA[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(z(62))}}function Ef(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tf=null;function em(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var If=null,co=null,ho=null;function Y_(t){if(t=jl(t)){if(typeof If!="function")throw Error(z(280));var e=t.stateNode;e&&(e=vh(e),If(t.stateNode,t.type,e))}}function UE(t){co?ho?ho.push(t):ho=[t]:co=t}function jE(){if(co){var t=co,e=ho;if(ho=co=null,Y_(t),e)for(t=0;t<e.length;t++)Y_(e[t])}}function BE(t,e){return t(e)}function zE(){}var _d=!1;function WE(t,e,n){if(_d)return t(e,n);_d=!0;try{return BE(t,e,n)}finally{_d=!1,(co!==null||ho!==null)&&(zE(),jE())}}function al(t,e){var n=t.stateNode;if(n===null)return null;var r=vh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(z(231,e,typeof n));return n}var Sf=!1;if(xr)try{var ga={};Object.defineProperty(ga,"passive",{get:function(){Sf=!0}}),window.addEventListener("test",ga,ga),window.removeEventListener("test",ga,ga)}catch{Sf=!1}function AA(t,e,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Ba=!1,yc=null,vc=!1,Cf=null,kA={onError:function(t){Ba=!0,yc=t}};function PA(t,e,n,r,i,s,o,a,u){Ba=!1,yc=null,AA.apply(kA,arguments)}function NA(t,e,n,r,i,s,o,a,u){if(PA.apply(this,arguments),Ba){if(Ba){var c=yc;Ba=!1,yc=null}else throw Error(z(198));vc||(vc=!0,Cf=c)}}function Is(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function HE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function X_(t){if(Is(t)!==t)throw Error(z(188))}function xA(t){var e=t.alternate;if(!e){if(e=Is(t),e===null)throw Error(z(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return X_(i),t;if(s===r)return X_(i),e;s=s.sibling}throw Error(z(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?t:e}function $E(t){return t=xA(t),t!==null?qE(t):null}function qE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=qE(t);if(e!==null)return e;t=t.sibling}return null}var KE=fn.unstable_scheduleCallback,J_=fn.unstable_cancelCallback,DA=fn.unstable_shouldYield,bA=fn.unstable_requestPaint,Ze=fn.unstable_now,OA=fn.unstable_getCurrentPriorityLevel,tm=fn.unstable_ImmediatePriority,GE=fn.unstable_UserBlockingPriority,wc=fn.unstable_NormalPriority,LA=fn.unstable_LowPriority,QE=fn.unstable_IdlePriority,mh=null,er=null;function MA(t){if(er&&typeof er.onCommitFiberRoot=="function")try{er.onCommitFiberRoot(mh,t,void 0,(t.current.flags&128)===128)}catch{}}var jn=Math.clz32?Math.clz32:UA,VA=Math.log,FA=Math.LN2;function UA(t){return t>>>=0,t===0?32:31-(VA(t)/FA|0)|0}var Au=64,ku=4194304;function ba(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ec(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ba(a):(s&=o,s!==0&&(r=ba(s)))}else o=n&~i,o!==0?r=ba(o):s!==0&&(r=ba(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-jn(e),i=1<<n,r|=t[n],e&=~i;return r}function jA(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function BA(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-jn(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=jA(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function Rf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function YE(){var t=Au;return Au<<=1,!(Au&4194240)&&(Au=64),t}function yd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Fl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-jn(e),t[e]=n}function zA(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-jn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function nm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-jn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Re=0;function XE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var JE,rm,ZE,e0,t0,Af=!1,Pu=[],ui=null,ci=null,hi=null,ll=new Map,ul=new Map,ni=[],WA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Z_(t,e){switch(t){case"focusin":case"focusout":ui=null;break;case"dragenter":case"dragleave":ci=null;break;case"mouseover":case"mouseout":hi=null;break;case"pointerover":case"pointerout":ll.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ul.delete(e.pointerId)}}function _a(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=jl(e),e!==null&&rm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function HA(t,e,n,r,i){switch(e){case"focusin":return ui=_a(ui,t,e,n,r,i),!0;case"dragenter":return ci=_a(ci,t,e,n,r,i),!0;case"mouseover":return hi=_a(hi,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ll.set(s,_a(ll.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ul.set(s,_a(ul.get(s)||null,t,e,n,r,i)),!0}return!1}function n0(t){var e=Qi(t.target);if(e!==null){var n=Is(e);if(n!==null){if(e=n.tag,e===13){if(e=HE(n),e!==null){t.blockedOn=e,t0(t.priority,function(){ZE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Xu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=kf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Tf=r,n.target.dispatchEvent(r),Tf=null}else return e=jl(n),e!==null&&rm(e),t.blockedOn=n,!1;e.shift()}return!0}function ey(t,e,n){Xu(t)&&n.delete(e)}function $A(){Af=!1,ui!==null&&Xu(ui)&&(ui=null),ci!==null&&Xu(ci)&&(ci=null),hi!==null&&Xu(hi)&&(hi=null),ll.forEach(ey),ul.forEach(ey)}function ya(t,e){t.blockedOn===e&&(t.blockedOn=null,Af||(Af=!0,fn.unstable_scheduleCallback(fn.unstable_NormalPriority,$A)))}function cl(t){function e(i){return ya(i,t)}if(0<Pu.length){ya(Pu[0],t);for(var n=1;n<Pu.length;n++){var r=Pu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ui!==null&&ya(ui,t),ci!==null&&ya(ci,t),hi!==null&&ya(hi,t),ll.forEach(e),ul.forEach(e),n=0;n<ni.length;n++)r=ni[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ni.length&&(n=ni[0],n.blockedOn===null);)n0(n),n.blockedOn===null&&ni.shift()}var fo=Fr.ReactCurrentBatchConfig,Tc=!0;function qA(t,e,n,r){var i=Re,s=fo.transition;fo.transition=null;try{Re=1,im(t,e,n,r)}finally{Re=i,fo.transition=s}}function KA(t,e,n,r){var i=Re,s=fo.transition;fo.transition=null;try{Re=4,im(t,e,n,r)}finally{Re=i,fo.transition=s}}function im(t,e,n,r){if(Tc){var i=kf(t,e,n,r);if(i===null)kd(t,e,r,Ic,n),Z_(t,r);else if(HA(i,t,e,n,r))r.stopPropagation();else if(Z_(t,r),e&4&&-1<WA.indexOf(t)){for(;i!==null;){var s=jl(i);if(s!==null&&JE(s),s=kf(t,e,n,r),s===null&&kd(t,e,r,Ic,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else kd(t,e,r,null,n)}}var Ic=null;function kf(t,e,n,r){if(Ic=null,t=em(r),t=Qi(t),t!==null)if(e=Is(t),e===null)t=null;else if(n=e.tag,n===13){if(t=HE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ic=t,null}function r0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(OA()){case tm:return 1;case GE:return 4;case wc:case LA:return 16;case QE:return 536870912;default:return 16}default:return 16}}var oi=null,sm=null,Ju=null;function i0(){if(Ju)return Ju;var t,e=sm,n=e.length,r,i="value"in oi?oi.value:oi.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ju=i.slice(t,1<r?1-r:void 0)}function Zu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Nu(){return!0}function ty(){return!1}function mn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Nu:ty,this.isPropagationStopped=ty,this}return Qe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Nu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Nu)},persist:function(){},isPersistent:Nu}),e}var Bo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},om=mn(Bo),Ul=Qe({},Bo,{view:0,detail:0}),GA=mn(Ul),vd,wd,va,gh=Qe({},Ul,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:am,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==va&&(va&&t.type==="mousemove"?(vd=t.screenX-va.screenX,wd=t.screenY-va.screenY):wd=vd=0,va=t),vd)},movementY:function(t){return"movementY"in t?t.movementY:wd}}),ny=mn(gh),QA=Qe({},gh,{dataTransfer:0}),YA=mn(QA),XA=Qe({},Ul,{relatedTarget:0}),Ed=mn(XA),JA=Qe({},Bo,{animationName:0,elapsedTime:0,pseudoElement:0}),ZA=mn(JA),e1=Qe({},Bo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),t1=mn(e1),n1=Qe({},Bo,{data:0}),ry=mn(n1),r1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},i1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},s1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function o1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=s1[t])?!!e[t]:!1}function am(){return o1}var a1=Qe({},Ul,{key:function(t){if(t.key){var e=r1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Zu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?i1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:am,charCode:function(t){return t.type==="keypress"?Zu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Zu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),l1=mn(a1),u1=Qe({},gh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),iy=mn(u1),c1=Qe({},Ul,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:am}),h1=mn(c1),d1=Qe({},Bo,{propertyName:0,elapsedTime:0,pseudoElement:0}),f1=mn(d1),p1=Qe({},gh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),m1=mn(p1),g1=[9,13,27,32],lm=xr&&"CompositionEvent"in window,za=null;xr&&"documentMode"in document&&(za=document.documentMode);var _1=xr&&"TextEvent"in window&&!za,s0=xr&&(!lm||za&&8<za&&11>=za),sy=" ",oy=!1;function o0(t,e){switch(t){case"keyup":return g1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function a0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Qs=!1;function y1(t,e){switch(t){case"compositionend":return a0(e);case"keypress":return e.which!==32?null:(oy=!0,sy);case"textInput":return t=e.data,t===sy&&oy?null:t;default:return null}}function v1(t,e){if(Qs)return t==="compositionend"||!lm&&o0(t,e)?(t=i0(),Ju=sm=oi=null,Qs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return s0&&e.locale!=="ko"?null:e.data;default:return null}}var w1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ay(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!w1[t.type]:e==="textarea"}function l0(t,e,n,r){UE(r),e=Sc(e,"onChange"),0<e.length&&(n=new om("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Wa=null,hl=null;function E1(t){v0(t,0)}function _h(t){var e=Js(t);if(DE(e))return t}function T1(t,e){if(t==="change")return e}var u0=!1;if(xr){var Td;if(xr){var Id="oninput"in document;if(!Id){var ly=document.createElement("div");ly.setAttribute("oninput","return;"),Id=typeof ly.oninput=="function"}Td=Id}else Td=!1;u0=Td&&(!document.documentMode||9<document.documentMode)}function uy(){Wa&&(Wa.detachEvent("onpropertychange",c0),hl=Wa=null)}function c0(t){if(t.propertyName==="value"&&_h(hl)){var e=[];l0(e,hl,t,em(t)),WE(E1,e)}}function I1(t,e,n){t==="focusin"?(uy(),Wa=e,hl=n,Wa.attachEvent("onpropertychange",c0)):t==="focusout"&&uy()}function S1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return _h(hl)}function C1(t,e){if(t==="click")return _h(e)}function R1(t,e){if(t==="input"||t==="change")return _h(e)}function A1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Wn=typeof Object.is=="function"?Object.is:A1;function dl(t,e){if(Wn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!cf.call(e,i)||!Wn(t[i],e[i]))return!1}return!0}function cy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hy(t,e){var n=cy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cy(n)}}function h0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?h0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function d0(){for(var t=window,e=_c();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=_c(t.document)}return e}function um(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function k1(t){var e=d0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&h0(n.ownerDocument.documentElement,n)){if(r!==null&&um(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=hy(n,s);var o=hy(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var P1=xr&&"documentMode"in document&&11>=document.documentMode,Ys=null,Pf=null,Ha=null,Nf=!1;function dy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Nf||Ys==null||Ys!==_c(r)||(r=Ys,"selectionStart"in r&&um(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ha&&dl(Ha,r)||(Ha=r,r=Sc(Pf,"onSelect"),0<r.length&&(e=new om("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ys)))}function xu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Xs={animationend:xu("Animation","AnimationEnd"),animationiteration:xu("Animation","AnimationIteration"),animationstart:xu("Animation","AnimationStart"),transitionend:xu("Transition","TransitionEnd")},Sd={},f0={};xr&&(f0=document.createElement("div").style,"AnimationEvent"in window||(delete Xs.animationend.animation,delete Xs.animationiteration.animation,delete Xs.animationstart.animation),"TransitionEvent"in window||delete Xs.transitionend.transition);function yh(t){if(Sd[t])return Sd[t];if(!Xs[t])return t;var e=Xs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in f0)return Sd[t]=e[n];return t}var p0=yh("animationend"),m0=yh("animationiteration"),g0=yh("animationstart"),_0=yh("transitionend"),y0=new Map,fy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Di(t,e){y0.set(t,e),Ts(e,[t])}for(var Cd=0;Cd<fy.length;Cd++){var Rd=fy[Cd],N1=Rd.toLowerCase(),x1=Rd[0].toUpperCase()+Rd.slice(1);Di(N1,"on"+x1)}Di(p0,"onAnimationEnd");Di(m0,"onAnimationIteration");Di(g0,"onAnimationStart");Di("dblclick","onDoubleClick");Di("focusin","onFocus");Di("focusout","onBlur");Di(_0,"onTransitionEnd");To("onMouseEnter",["mouseout","mouseover"]);To("onMouseLeave",["mouseout","mouseover"]);To("onPointerEnter",["pointerout","pointerover"]);To("onPointerLeave",["pointerout","pointerover"]);Ts("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ts("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ts("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ts("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ts("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ts("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),D1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Oa));function py(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,NA(r,e,void 0,t),t.currentTarget=null}function v0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;py(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;py(i,a,c),s=u}}}if(vc)throw t=Cf,vc=!1,Cf=null,t}function Me(t,e){var n=e[Lf];n===void 0&&(n=e[Lf]=new Set);var r=t+"__bubble";n.has(r)||(w0(e,t,2,!1),n.add(r))}function Ad(t,e,n){var r=0;e&&(r|=4),w0(n,t,r,e)}var Du="_reactListening"+Math.random().toString(36).slice(2);function fl(t){if(!t[Du]){t[Du]=!0,AE.forEach(function(n){n!=="selectionchange"&&(D1.has(n)||Ad(n,!1,t),Ad(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Du]||(e[Du]=!0,Ad("selectionchange",!1,e))}}function w0(t,e,n,r){switch(r0(e)){case 1:var i=qA;break;case 4:i=KA;break;default:i=im}n=i.bind(null,e,n,t),i=void 0,!Sf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function kd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Qi(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}WE(function(){var c=s,d=em(n),f=[];e:{var m=y0.get(t);if(m!==void 0){var T=om,R=t;switch(t){case"keypress":if(Zu(n)===0)break e;case"keydown":case"keyup":T=l1;break;case"focusin":R="focus",T=Ed;break;case"focusout":R="blur",T=Ed;break;case"beforeblur":case"afterblur":T=Ed;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=ny;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=YA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=h1;break;case p0:case m0:case g0:T=ZA;break;case _0:T=f1;break;case"scroll":T=GA;break;case"wheel":T=m1;break;case"copy":case"cut":case"paste":T=t1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=iy}var A=(e&4)!==0,P=!A&&t==="scroll",E=A?m!==null?m+"Capture":null:m;A=[];for(var v=c,S;v!==null;){S=v;var L=S.stateNode;if(S.tag===5&&L!==null&&(S=L,E!==null&&(L=al(v,E),L!=null&&A.push(pl(v,L,S)))),P)break;v=v.return}0<A.length&&(m=new T(m,R,null,n,d),f.push({event:m,listeners:A}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",T=t==="mouseout"||t==="pointerout",m&&n!==Tf&&(R=n.relatedTarget||n.fromElement)&&(Qi(R)||R[Dr]))break e;if((T||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,T?(R=n.relatedTarget||n.toElement,T=c,R=R?Qi(R):null,R!==null&&(P=Is(R),R!==P||R.tag!==5&&R.tag!==6)&&(R=null)):(T=null,R=c),T!==R)){if(A=ny,L="onMouseLeave",E="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(A=iy,L="onPointerLeave",E="onPointerEnter",v="pointer"),P=T==null?m:Js(T),S=R==null?m:Js(R),m=new A(L,v+"leave",T,n,d),m.target=P,m.relatedTarget=S,L=null,Qi(d)===c&&(A=new A(E,v+"enter",R,n,d),A.target=S,A.relatedTarget=P,L=A),P=L,T&&R)t:{for(A=T,E=R,v=0,S=A;S;S=Bs(S))v++;for(S=0,L=E;L;L=Bs(L))S++;for(;0<v-S;)A=Bs(A),v--;for(;0<S-v;)E=Bs(E),S--;for(;v--;){if(A===E||E!==null&&A===E.alternate)break t;A=Bs(A),E=Bs(E)}A=null}else A=null;T!==null&&my(f,m,T,A,!1),R!==null&&P!==null&&my(f,P,R,A,!0)}}e:{if(m=c?Js(c):window,T=m.nodeName&&m.nodeName.toLowerCase(),T==="select"||T==="input"&&m.type==="file")var B=T1;else if(ay(m))if(u0)B=R1;else{B=S1;var $=I1}else(T=m.nodeName)&&T.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(B=C1);if(B&&(B=B(t,c))){l0(f,B,n,d);break e}$&&$(t,m,c),t==="focusout"&&($=m._wrapperState)&&$.controlled&&m.type==="number"&&_f(m,"number",m.value)}switch($=c?Js(c):window,t){case"focusin":(ay($)||$.contentEditable==="true")&&(Ys=$,Pf=c,Ha=null);break;case"focusout":Ha=Pf=Ys=null;break;case"mousedown":Nf=!0;break;case"contextmenu":case"mouseup":case"dragend":Nf=!1,dy(f,n,d);break;case"selectionchange":if(P1)break;case"keydown":case"keyup":dy(f,n,d)}var g;if(lm)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Qs?o0(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(s0&&n.locale!=="ko"&&(Qs||y!=="onCompositionStart"?y==="onCompositionEnd"&&Qs&&(g=i0()):(oi=d,sm="value"in oi?oi.value:oi.textContent,Qs=!0)),$=Sc(c,y),0<$.length&&(y=new ry(y,t,null,n,d),f.push({event:y,listeners:$}),g?y.data=g:(g=a0(n),g!==null&&(y.data=g)))),(g=_1?y1(t,n):v1(t,n))&&(c=Sc(c,"onBeforeInput"),0<c.length&&(d=new ry("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=g))}v0(f,e)})}function pl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Sc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=al(t,n),s!=null&&r.unshift(pl(t,s,i)),s=al(t,e),s!=null&&r.push(pl(t,s,i))),t=t.return}return r}function Bs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function my(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=al(n,s),u!=null&&o.unshift(pl(n,u,a))):i||(u=al(n,s),u!=null&&o.push(pl(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var b1=/\r\n?/g,O1=/\u0000|\uFFFD/g;function gy(t){return(typeof t=="string"?t:""+t).replace(b1,`
`).replace(O1,"")}function bu(t,e,n){if(e=gy(e),gy(t)!==e&&n)throw Error(z(425))}function Cc(){}var xf=null,Df=null;function bf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Of=typeof setTimeout=="function"?setTimeout:void 0,L1=typeof clearTimeout=="function"?clearTimeout:void 0,_y=typeof Promise=="function"?Promise:void 0,M1=typeof queueMicrotask=="function"?queueMicrotask:typeof _y<"u"?function(t){return _y.resolve(null).then(t).catch(V1)}:Of;function V1(t){setTimeout(function(){throw t})}function Pd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),cl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);cl(e)}function di(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function yy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var zo=Math.random().toString(36).slice(2),Yn="__reactFiber$"+zo,ml="__reactProps$"+zo,Dr="__reactContainer$"+zo,Lf="__reactEvents$"+zo,F1="__reactListeners$"+zo,U1="__reactHandles$"+zo;function Qi(t){var e=t[Yn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Dr]||n[Yn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=yy(t);t!==null;){if(n=t[Yn])return n;t=yy(t)}return e}t=n,n=t.parentNode}return null}function jl(t){return t=t[Yn]||t[Dr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Js(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(z(33))}function vh(t){return t[ml]||null}var Mf=[],Zs=-1;function bi(t){return{current:t}}function je(t){0>Zs||(t.current=Mf[Zs],Mf[Zs]=null,Zs--)}function De(t,e){Zs++,Mf[Zs]=t.current,t.current=e}var Si={},Wt=bi(Si),nn=bi(!1),ss=Si;function Io(t,e){var n=t.type.contextTypes;if(!n)return Si;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function rn(t){return t=t.childContextTypes,t!=null}function Rc(){je(nn),je(Wt)}function vy(t,e,n){if(Wt.current!==Si)throw Error(z(168));De(Wt,e),De(nn,n)}function E0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(z(108,IA(t)||"Unknown",i));return Qe({},n,r)}function Ac(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Si,ss=Wt.current,De(Wt,t),De(nn,nn.current),!0}function wy(t,e,n){var r=t.stateNode;if(!r)throw Error(z(169));n?(t=E0(t,e,ss),r.__reactInternalMemoizedMergedChildContext=t,je(nn),je(Wt),De(Wt,t)):je(nn),De(nn,n)}var Er=null,wh=!1,Nd=!1;function T0(t){Er===null?Er=[t]:Er.push(t)}function j1(t){wh=!0,T0(t)}function Oi(){if(!Nd&&Er!==null){Nd=!0;var t=0,e=Re;try{var n=Er;for(Re=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Er=null,wh=!1}catch(i){throw Er!==null&&(Er=Er.slice(t+1)),KE(tm,Oi),i}finally{Re=e,Nd=!1}}return null}var eo=[],to=0,kc=null,Pc=0,yn=[],vn=0,os=null,Tr=1,Ir="";function $i(t,e){eo[to++]=Pc,eo[to++]=kc,kc=t,Pc=e}function I0(t,e,n){yn[vn++]=Tr,yn[vn++]=Ir,yn[vn++]=os,os=t;var r=Tr;t=Ir;var i=32-jn(r)-1;r&=~(1<<i),n+=1;var s=32-jn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Tr=1<<32-jn(e)+i|n<<i|r,Ir=s+t}else Tr=1<<s|n<<i|r,Ir=t}function cm(t){t.return!==null&&($i(t,1),I0(t,1,0))}function hm(t){for(;t===kc;)kc=eo[--to],eo[to]=null,Pc=eo[--to],eo[to]=null;for(;t===os;)os=yn[--vn],yn[vn]=null,Ir=yn[--vn],yn[vn]=null,Tr=yn[--vn],yn[vn]=null}var cn=null,un=null,He=!1,Ln=null;function S0(t,e){var n=Tn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ey(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,cn=t,un=di(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,cn=t,un=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=os!==null?{id:Tr,overflow:Ir}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Tn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,cn=t,un=null,!0):!1;default:return!1}}function Vf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ff(t){if(He){var e=un;if(e){var n=e;if(!Ey(t,e)){if(Vf(t))throw Error(z(418));e=di(n.nextSibling);var r=cn;e&&Ey(t,e)?S0(r,n):(t.flags=t.flags&-4097|2,He=!1,cn=t)}}else{if(Vf(t))throw Error(z(418));t.flags=t.flags&-4097|2,He=!1,cn=t}}}function Ty(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;cn=t}function Ou(t){if(t!==cn)return!1;if(!He)return Ty(t),He=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!bf(t.type,t.memoizedProps)),e&&(e=un)){if(Vf(t))throw C0(),Error(z(418));for(;e;)S0(t,e),e=di(e.nextSibling)}if(Ty(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){un=di(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}un=null}}else un=cn?di(t.stateNode.nextSibling):null;return!0}function C0(){for(var t=un;t;)t=di(t.nextSibling)}function So(){un=cn=null,He=!1}function dm(t){Ln===null?Ln=[t]:Ln.push(t)}var B1=Fr.ReactCurrentBatchConfig;function wa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,t))}return t}function Lu(t,e){throw t=Object.prototype.toString.call(e),Error(z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Iy(t){var e=t._init;return e(t._payload)}function R0(t){function e(E,v){if(t){var S=E.deletions;S===null?(E.deletions=[v],E.flags|=16):S.push(v)}}function n(E,v){if(!t)return null;for(;v!==null;)e(E,v),v=v.sibling;return null}function r(E,v){for(E=new Map;v!==null;)v.key!==null?E.set(v.key,v):E.set(v.index,v),v=v.sibling;return E}function i(E,v){return E=gi(E,v),E.index=0,E.sibling=null,E}function s(E,v,S){return E.index=S,t?(S=E.alternate,S!==null?(S=S.index,S<v?(E.flags|=2,v):S):(E.flags|=2,v)):(E.flags|=1048576,v)}function o(E){return t&&E.alternate===null&&(E.flags|=2),E}function a(E,v,S,L){return v===null||v.tag!==6?(v=Vd(S,E.mode,L),v.return=E,v):(v=i(v,S),v.return=E,v)}function u(E,v,S,L){var B=S.type;return B===Gs?d(E,v,S.props.children,L,S.key):v!==null&&(v.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===ei&&Iy(B)===v.type)?(L=i(v,S.props),L.ref=wa(E,v,S),L.return=E,L):(L=oc(S.type,S.key,S.props,null,E.mode,L),L.ref=wa(E,v,S),L.return=E,L)}function c(E,v,S,L){return v===null||v.tag!==4||v.stateNode.containerInfo!==S.containerInfo||v.stateNode.implementation!==S.implementation?(v=Fd(S,E.mode,L),v.return=E,v):(v=i(v,S.children||[]),v.return=E,v)}function d(E,v,S,L,B){return v===null||v.tag!==7?(v=rs(S,E.mode,L,B),v.return=E,v):(v=i(v,S),v.return=E,v)}function f(E,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Vd(""+v,E.mode,S),v.return=E,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Su:return S=oc(v.type,v.key,v.props,null,E.mode,S),S.ref=wa(E,null,v),S.return=E,S;case Ks:return v=Fd(v,E.mode,S),v.return=E,v;case ei:var L=v._init;return f(E,L(v._payload),S)}if(Da(v)||ma(v))return v=rs(v,E.mode,S,null),v.return=E,v;Lu(E,v)}return null}function m(E,v,S,L){var B=v!==null?v.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return B!==null?null:a(E,v,""+S,L);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Su:return S.key===B?u(E,v,S,L):null;case Ks:return S.key===B?c(E,v,S,L):null;case ei:return B=S._init,m(E,v,B(S._payload),L)}if(Da(S)||ma(S))return B!==null?null:d(E,v,S,L,null);Lu(E,S)}return null}function T(E,v,S,L,B){if(typeof L=="string"&&L!==""||typeof L=="number")return E=E.get(S)||null,a(v,E,""+L,B);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case Su:return E=E.get(L.key===null?S:L.key)||null,u(v,E,L,B);case Ks:return E=E.get(L.key===null?S:L.key)||null,c(v,E,L,B);case ei:var $=L._init;return T(E,v,S,$(L._payload),B)}if(Da(L)||ma(L))return E=E.get(S)||null,d(v,E,L,B,null);Lu(v,L)}return null}function R(E,v,S,L){for(var B=null,$=null,g=v,y=v=0,w=null;g!==null&&y<S.length;y++){g.index>y?(w=g,g=null):w=g.sibling;var I=m(E,g,S[y],L);if(I===null){g===null&&(g=w);break}t&&g&&I.alternate===null&&e(E,g),v=s(I,v,y),$===null?B=I:$.sibling=I,$=I,g=w}if(y===S.length)return n(E,g),He&&$i(E,y),B;if(g===null){for(;y<S.length;y++)g=f(E,S[y],L),g!==null&&(v=s(g,v,y),$===null?B=g:$.sibling=g,$=g);return He&&$i(E,y),B}for(g=r(E,g);y<S.length;y++)w=T(g,E,y,S[y],L),w!==null&&(t&&w.alternate!==null&&g.delete(w.key===null?y:w.key),v=s(w,v,y),$===null?B=w:$.sibling=w,$=w);return t&&g.forEach(function(k){return e(E,k)}),He&&$i(E,y),B}function A(E,v,S,L){var B=ma(S);if(typeof B!="function")throw Error(z(150));if(S=B.call(S),S==null)throw Error(z(151));for(var $=B=null,g=v,y=v=0,w=null,I=S.next();g!==null&&!I.done;y++,I=S.next()){g.index>y?(w=g,g=null):w=g.sibling;var k=m(E,g,I.value,L);if(k===null){g===null&&(g=w);break}t&&g&&k.alternate===null&&e(E,g),v=s(k,v,y),$===null?B=k:$.sibling=k,$=k,g=w}if(I.done)return n(E,g),He&&$i(E,y),B;if(g===null){for(;!I.done;y++,I=S.next())I=f(E,I.value,L),I!==null&&(v=s(I,v,y),$===null?B=I:$.sibling=I,$=I);return He&&$i(E,y),B}for(g=r(E,g);!I.done;y++,I=S.next())I=T(g,E,y,I.value,L),I!==null&&(t&&I.alternate!==null&&g.delete(I.key===null?y:I.key),v=s(I,v,y),$===null?B=I:$.sibling=I,$=I);return t&&g.forEach(function(N){return e(E,N)}),He&&$i(E,y),B}function P(E,v,S,L){if(typeof S=="object"&&S!==null&&S.type===Gs&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Su:e:{for(var B=S.key,$=v;$!==null;){if($.key===B){if(B=S.type,B===Gs){if($.tag===7){n(E,$.sibling),v=i($,S.props.children),v.return=E,E=v;break e}}else if($.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===ei&&Iy(B)===$.type){n(E,$.sibling),v=i($,S.props),v.ref=wa(E,$,S),v.return=E,E=v;break e}n(E,$);break}else e(E,$);$=$.sibling}S.type===Gs?(v=rs(S.props.children,E.mode,L,S.key),v.return=E,E=v):(L=oc(S.type,S.key,S.props,null,E.mode,L),L.ref=wa(E,v,S),L.return=E,E=L)}return o(E);case Ks:e:{for($=S.key;v!==null;){if(v.key===$)if(v.tag===4&&v.stateNode.containerInfo===S.containerInfo&&v.stateNode.implementation===S.implementation){n(E,v.sibling),v=i(v,S.children||[]),v.return=E,E=v;break e}else{n(E,v);break}else e(E,v);v=v.sibling}v=Fd(S,E.mode,L),v.return=E,E=v}return o(E);case ei:return $=S._init,P(E,v,$(S._payload),L)}if(Da(S))return R(E,v,S,L);if(ma(S))return A(E,v,S,L);Lu(E,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,v!==null&&v.tag===6?(n(E,v.sibling),v=i(v,S),v.return=E,E=v):(n(E,v),v=Vd(S,E.mode,L),v.return=E,E=v),o(E)):n(E,v)}return P}var Co=R0(!0),A0=R0(!1),Nc=bi(null),xc=null,no=null,fm=null;function pm(){fm=no=xc=null}function mm(t){var e=Nc.current;je(Nc),t._currentValue=e}function Uf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function po(t,e){xc=t,fm=no=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(en=!0),t.firstContext=null)}function Cn(t){var e=t._currentValue;if(fm!==t)if(t={context:t,memoizedValue:e,next:null},no===null){if(xc===null)throw Error(z(308));no=t,xc.dependencies={lanes:0,firstContext:t}}else no=no.next=t;return e}var Yi=null;function gm(t){Yi===null?Yi=[t]:Yi.push(t)}function k0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,gm(e)):(n.next=i.next,i.next=n),e.interleaved=n,br(t,r)}function br(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ti=!1;function _m(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function P0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function kr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function fi(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Ee&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,br(t,n)}return i=r.interleaved,i===null?(e.next=e,gm(r)):(e.next=i.next,i.next=e),r.interleaved=e,br(t,n)}function ec(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,nm(t,n)}}function Sy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Dc(t,e,n,r){var i=t.updateQueue;ti=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,d=c=u=null,a=s;do{var m=a.lane,T=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:T,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var R=t,A=a;switch(m=e,T=n,A.tag){case 1:if(R=A.payload,typeof R=="function"){f=R.call(T,f,m);break e}f=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=A.payload,m=typeof R=="function"?R.call(T,f,m):R,m==null)break e;f=Qe({},f,m);break e;case 2:ti=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else T={eventTime:T,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=T,u=f):d=d.next=T,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ls|=o,t.lanes=o,t.memoizedState=f}}function Cy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(z(191,i));i.call(r)}}}var Bl={},tr=bi(Bl),gl=bi(Bl),_l=bi(Bl);function Xi(t){if(t===Bl)throw Error(z(174));return t}function ym(t,e){switch(De(_l,e),De(gl,t),De(tr,Bl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:vf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=vf(e,t)}je(tr),De(tr,e)}function Ro(){je(tr),je(gl),je(_l)}function N0(t){Xi(_l.current);var e=Xi(tr.current),n=vf(e,t.type);e!==n&&(De(gl,t),De(tr,n))}function vm(t){gl.current===t&&(je(tr),je(gl))}var Ke=bi(0);function bc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var xd=[];function wm(){for(var t=0;t<xd.length;t++)xd[t]._workInProgressVersionPrimary=null;xd.length=0}var tc=Fr.ReactCurrentDispatcher,Dd=Fr.ReactCurrentBatchConfig,as=0,Ge=null,ut=null,pt=null,Oc=!1,$a=!1,yl=0,z1=0;function Ot(){throw Error(z(321))}function Em(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Wn(t[n],e[n]))return!1;return!0}function Tm(t,e,n,r,i,s){if(as=s,Ge=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,tc.current=t===null||t.memoizedState===null?q1:K1,t=n(r,i),$a){s=0;do{if($a=!1,yl=0,25<=s)throw Error(z(301));s+=1,pt=ut=null,e.updateQueue=null,tc.current=G1,t=n(r,i)}while($a)}if(tc.current=Lc,e=ut!==null&&ut.next!==null,as=0,pt=ut=Ge=null,Oc=!1,e)throw Error(z(300));return t}function Im(){var t=yl!==0;return yl=0,t}function Qn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pt===null?Ge.memoizedState=pt=t:pt=pt.next=t,pt}function Rn(){if(ut===null){var t=Ge.alternate;t=t!==null?t.memoizedState:null}else t=ut.next;var e=pt===null?Ge.memoizedState:pt.next;if(e!==null)pt=e,ut=t;else{if(t===null)throw Error(z(310));ut=t,t={memoizedState:ut.memoizedState,baseState:ut.baseState,baseQueue:ut.baseQueue,queue:ut.queue,next:null},pt===null?Ge.memoizedState=pt=t:pt=pt.next=t}return pt}function vl(t,e){return typeof e=="function"?e(t):e}function bd(t){var e=Rn(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=ut,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var d=c.lane;if((as&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,o=r):u=u.next=f,Ge.lanes|=d,ls|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,Wn(r,e.memoizedState)||(en=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ge.lanes|=s,ls|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Od(t){var e=Rn(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Wn(s,e.memoizedState)||(en=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function x0(){}function D0(t,e){var n=Ge,r=Rn(),i=e(),s=!Wn(r.memoizedState,i);if(s&&(r.memoizedState=i,en=!0),r=r.queue,Sm(L0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||pt!==null&&pt.memoizedState.tag&1){if(n.flags|=2048,wl(9,O0.bind(null,n,r,i,e),void 0,null),_t===null)throw Error(z(349));as&30||b0(n,e,i)}return i}function b0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ge.updateQueue,e===null?(e={lastEffect:null,stores:null},Ge.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function O0(t,e,n,r){e.value=n,e.getSnapshot=r,M0(e)&&V0(t)}function L0(t,e,n){return n(function(){M0(e)&&V0(t)})}function M0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Wn(t,n)}catch{return!0}}function V0(t){var e=br(t,1);e!==null&&Bn(e,t,1,-1)}function Ry(t){var e=Qn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vl,lastRenderedState:t},e.queue=t,t=t.dispatch=$1.bind(null,Ge,t),[e.memoizedState,t]}function wl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ge.updateQueue,e===null?(e={lastEffect:null,stores:null},Ge.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function F0(){return Rn().memoizedState}function nc(t,e,n,r){var i=Qn();Ge.flags|=t,i.memoizedState=wl(1|e,n,void 0,r===void 0?null:r)}function Eh(t,e,n,r){var i=Rn();r=r===void 0?null:r;var s=void 0;if(ut!==null){var o=ut.memoizedState;if(s=o.destroy,r!==null&&Em(r,o.deps)){i.memoizedState=wl(e,n,s,r);return}}Ge.flags|=t,i.memoizedState=wl(1|e,n,s,r)}function Ay(t,e){return nc(8390656,8,t,e)}function Sm(t,e){return Eh(2048,8,t,e)}function U0(t,e){return Eh(4,2,t,e)}function j0(t,e){return Eh(4,4,t,e)}function B0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function z0(t,e,n){return n=n!=null?n.concat([t]):null,Eh(4,4,B0.bind(null,e,t),n)}function Cm(){}function W0(t,e){var n=Rn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Em(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function H0(t,e){var n=Rn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Em(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function $0(t,e,n){return as&21?(Wn(n,e)||(n=YE(),Ge.lanes|=n,ls|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,en=!0),t.memoizedState=n)}function W1(t,e){var n=Re;Re=n!==0&&4>n?n:4,t(!0);var r=Dd.transition;Dd.transition={};try{t(!1),e()}finally{Re=n,Dd.transition=r}}function q0(){return Rn().memoizedState}function H1(t,e,n){var r=mi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},K0(t))G0(e,n);else if(n=k0(t,e,n,r),n!==null){var i=Qt();Bn(n,t,r,i),Q0(n,e,r)}}function $1(t,e,n){var r=mi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(K0(t))G0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Wn(a,o)){var u=e.interleaved;u===null?(i.next=i,gm(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=k0(t,e,i,r),n!==null&&(i=Qt(),Bn(n,t,r,i),Q0(n,e,r))}}function K0(t){var e=t.alternate;return t===Ge||e!==null&&e===Ge}function G0(t,e){$a=Oc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Q0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,nm(t,n)}}var Lc={readContext:Cn,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},q1={readContext:Cn,useCallback:function(t,e){return Qn().memoizedState=[t,e===void 0?null:e],t},useContext:Cn,useEffect:Ay,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,nc(4194308,4,B0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return nc(4194308,4,t,e)},useInsertionEffect:function(t,e){return nc(4,2,t,e)},useMemo:function(t,e){var n=Qn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Qn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=H1.bind(null,Ge,t),[r.memoizedState,t]},useRef:function(t){var e=Qn();return t={current:t},e.memoizedState=t},useState:Ry,useDebugValue:Cm,useDeferredValue:function(t){return Qn().memoizedState=t},useTransition:function(){var t=Ry(!1),e=t[0];return t=W1.bind(null,t[1]),Qn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ge,i=Qn();if(He){if(n===void 0)throw Error(z(407));n=n()}else{if(n=e(),_t===null)throw Error(z(349));as&30||b0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Ay(L0.bind(null,r,s,t),[t]),r.flags|=2048,wl(9,O0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Qn(),e=_t.identifierPrefix;if(He){var n=Ir,r=Tr;n=(r&~(1<<32-jn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=yl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=z1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},K1={readContext:Cn,useCallback:W0,useContext:Cn,useEffect:Sm,useImperativeHandle:z0,useInsertionEffect:U0,useLayoutEffect:j0,useMemo:H0,useReducer:bd,useRef:F0,useState:function(){return bd(vl)},useDebugValue:Cm,useDeferredValue:function(t){var e=Rn();return $0(e,ut.memoizedState,t)},useTransition:function(){var t=bd(vl)[0],e=Rn().memoizedState;return[t,e]},useMutableSource:x0,useSyncExternalStore:D0,useId:q0,unstable_isNewReconciler:!1},G1={readContext:Cn,useCallback:W0,useContext:Cn,useEffect:Sm,useImperativeHandle:z0,useInsertionEffect:U0,useLayoutEffect:j0,useMemo:H0,useReducer:Od,useRef:F0,useState:function(){return Od(vl)},useDebugValue:Cm,useDeferredValue:function(t){var e=Rn();return ut===null?e.memoizedState=t:$0(e,ut.memoizedState,t)},useTransition:function(){var t=Od(vl)[0],e=Rn().memoizedState;return[t,e]},useMutableSource:x0,useSyncExternalStore:D0,useId:q0,unstable_isNewReconciler:!1};function Dn(t,e){if(t&&t.defaultProps){e=Qe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function jf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Qe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Th={isMounted:function(t){return(t=t._reactInternals)?Is(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Qt(),i=mi(t),s=kr(r,i);s.payload=e,n!=null&&(s.callback=n),e=fi(t,s,i),e!==null&&(Bn(e,t,i,r),ec(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Qt(),i=mi(t),s=kr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=fi(t,s,i),e!==null&&(Bn(e,t,i,r),ec(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Qt(),r=mi(t),i=kr(n,r);i.tag=2,e!=null&&(i.callback=e),e=fi(t,i,r),e!==null&&(Bn(e,t,r,n),ec(e,t,r))}};function ky(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!dl(n,r)||!dl(i,s):!0}function Y0(t,e,n){var r=!1,i=Si,s=e.contextType;return typeof s=="object"&&s!==null?s=Cn(s):(i=rn(e)?ss:Wt.current,r=e.contextTypes,s=(r=r!=null)?Io(t,i):Si),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Th,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Py(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Th.enqueueReplaceState(e,e.state,null)}function Bf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},_m(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Cn(s):(s=rn(e)?ss:Wt.current,i.context=Io(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(jf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Th.enqueueReplaceState(i,i.state,null),Dc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ao(t,e){try{var n="",r=e;do n+=TA(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ld(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function zf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Q1=typeof WeakMap=="function"?WeakMap:Map;function X0(t,e,n){n=kr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Vc||(Vc=!0,Jf=r),zf(t,e)},n}function J0(t,e,n){n=kr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){zf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){zf(t,e),typeof r!="function"&&(pi===null?pi=new Set([this]):pi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ny(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Q1;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=uk.bind(null,t,e,n),e.then(t,t))}function xy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Dy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=kr(-1,1),e.tag=2,fi(n,e,1))),n.lanes|=1),t)}var Y1=Fr.ReactCurrentOwner,en=!1;function Gt(t,e,n,r){e.child=t===null?A0(e,null,n,r):Co(e,t.child,n,r)}function by(t,e,n,r,i){n=n.render;var s=e.ref;return po(e,i),r=Tm(t,e,n,r,s,i),n=Im(),t!==null&&!en?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Or(t,e,i)):(He&&n&&cm(e),e.flags|=1,Gt(t,e,r,i),e.child)}function Oy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!bm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Z0(t,e,s,r,i)):(t=oc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:dl,n(o,r)&&t.ref===e.ref)return Or(t,e,i)}return e.flags|=1,t=gi(s,r),t.ref=e.ref,t.return=e,e.child=t}function Z0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(dl(s,r)&&t.ref===e.ref)if(en=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(en=!0);else return e.lanes=t.lanes,Or(t,e,i)}return Wf(t,e,n,r,i)}function eT(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},De(io,ln),ln|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,De(io,ln),ln|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,De(io,ln),ln|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,De(io,ln),ln|=r;return Gt(t,e,i,n),e.child}function tT(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Wf(t,e,n,r,i){var s=rn(n)?ss:Wt.current;return s=Io(e,s),po(e,i),n=Tm(t,e,n,r,s,i),r=Im(),t!==null&&!en?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Or(t,e,i)):(He&&r&&cm(e),e.flags|=1,Gt(t,e,n,i),e.child)}function Ly(t,e,n,r,i){if(rn(n)){var s=!0;Ac(e)}else s=!1;if(po(e,i),e.stateNode===null)rc(t,e),Y0(e,n,r),Bf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Cn(c):(c=rn(n)?ss:Wt.current,c=Io(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&Py(e,o,r,c),ti=!1;var m=e.memoizedState;o.state=m,Dc(e,r,o,i),u=e.memoizedState,a!==r||m!==u||nn.current||ti?(typeof d=="function"&&(jf(e,n,d,r),u=e.memoizedState),(a=ti||ky(e,n,a,r,m,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,P0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Dn(e.type,a),o.props=c,f=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Cn(u):(u=rn(n)?ss:Wt.current,u=Io(e,u));var T=n.getDerivedStateFromProps;(d=typeof T=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==u)&&Py(e,o,r,u),ti=!1,m=e.memoizedState,o.state=m,Dc(e,r,o,i);var R=e.memoizedState;a!==f||m!==R||nn.current||ti?(typeof T=="function"&&(jf(e,n,T,r),R=e.memoizedState),(c=ti||ky(e,n,c,r,m,R,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,R,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,R,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),o.props=r,o.state=R,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Hf(t,e,n,r,s,i)}function Hf(t,e,n,r,i,s){tT(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&wy(e,n,!1),Or(t,e,s);r=e.stateNode,Y1.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Co(e,t.child,null,s),e.child=Co(e,null,a,s)):Gt(t,e,a,s),e.memoizedState=r.state,i&&wy(e,n,!0),e.child}function nT(t){var e=t.stateNode;e.pendingContext?vy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&vy(t,e.context,!1),ym(t,e.containerInfo)}function My(t,e,n,r,i){return So(),dm(i),e.flags|=256,Gt(t,e,n,r),e.child}var $f={dehydrated:null,treeContext:null,retryLane:0};function qf(t){return{baseLanes:t,cachePool:null,transitions:null}}function rT(t,e,n){var r=e.pendingProps,i=Ke.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),De(Ke,i&1),t===null)return Ff(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ch(o,r,0,null),t=rs(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=qf(n),e.memoizedState=$f,t):Rm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return X1(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=gi(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=gi(a,s):(s=rs(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?qf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=$f,r}return s=t.child,t=s.sibling,r=gi(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Rm(t,e){return e=Ch({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Mu(t,e,n,r){return r!==null&&dm(r),Co(e,t.child,null,n),t=Rm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function X1(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ld(Error(z(422))),Mu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ch({mode:"visible",children:r.children},i,0,null),s=rs(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Co(e,t.child,null,o),e.child.memoizedState=qf(o),e.memoizedState=$f,s);if(!(e.mode&1))return Mu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(z(419)),r=Ld(s,r,void 0),Mu(t,e,o,r)}if(a=(o&t.childLanes)!==0,en||a){if(r=_t,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,br(t,i),Bn(r,t,i,-1))}return Dm(),r=Ld(Error(z(421))),Mu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=ck.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,un=di(i.nextSibling),cn=e,He=!0,Ln=null,t!==null&&(yn[vn++]=Tr,yn[vn++]=Ir,yn[vn++]=os,Tr=t.id,Ir=t.overflow,os=e),e=Rm(e,r.children),e.flags|=4096,e)}function Vy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Uf(t.return,e,n)}function Md(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function iT(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Gt(t,e,r.children,n),r=Ke.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Vy(t,n,e);else if(t.tag===19)Vy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(De(Ke,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&bc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Md(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&bc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Md(e,!0,n,null,s);break;case"together":Md(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function rc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Or(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ls|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(z(153));if(e.child!==null){for(t=e.child,n=gi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=gi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function J1(t,e,n){switch(e.tag){case 3:nT(e),So();break;case 5:N0(e);break;case 1:rn(e.type)&&Ac(e);break;case 4:ym(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;De(Nc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(De(Ke,Ke.current&1),e.flags|=128,null):n&e.child.childLanes?rT(t,e,n):(De(Ke,Ke.current&1),t=Or(t,e,n),t!==null?t.sibling:null);De(Ke,Ke.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return iT(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),De(Ke,Ke.current),r)break;return null;case 22:case 23:return e.lanes=0,eT(t,e,n)}return Or(t,e,n)}var sT,Kf,oT,aT;sT=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Kf=function(){};oT=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Xi(tr.current);var s=null;switch(n){case"input":i=mf(t,i),r=mf(t,r),s=[];break;case"select":i=Qe({},i,{value:void 0}),r=Qe({},r,{value:void 0}),s=[];break;case"textarea":i=yf(t,i),r=yf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Cc)}wf(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(sl.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(sl.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Me("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};aT=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ea(t,e){if(!He)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Lt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Z1(t,e,n){var r=e.pendingProps;switch(hm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Lt(e),null;case 1:return rn(e.type)&&Rc(),Lt(e),null;case 3:return r=e.stateNode,Ro(),je(nn),je(Wt),wm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ou(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ln!==null&&(tp(Ln),Ln=null))),Kf(t,e),Lt(e),null;case 5:vm(e);var i=Xi(_l.current);if(n=e.type,t!==null&&e.stateNode!=null)oT(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(z(166));return Lt(e),null}if(t=Xi(tr.current),Ou(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Yn]=e,r[ml]=s,t=(e.mode&1)!==0,n){case"dialog":Me("cancel",r),Me("close",r);break;case"iframe":case"object":case"embed":Me("load",r);break;case"video":case"audio":for(i=0;i<Oa.length;i++)Me(Oa[i],r);break;case"source":Me("error",r);break;case"img":case"image":case"link":Me("error",r),Me("load",r);break;case"details":Me("toggle",r);break;case"input":q_(r,s),Me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Me("invalid",r);break;case"textarea":G_(r,s),Me("invalid",r)}wf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&bu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&bu(r.textContent,a,t),i=["children",""+a]):sl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Me("scroll",r)}switch(n){case"input":Cu(r),K_(r,s,!0);break;case"textarea":Cu(r),Q_(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Cc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=LE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Yn]=e,t[ml]=r,sT(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ef(n,r),n){case"dialog":Me("cancel",t),Me("close",t),i=r;break;case"iframe":case"object":case"embed":Me("load",t),i=r;break;case"video":case"audio":for(i=0;i<Oa.length;i++)Me(Oa[i],t);i=r;break;case"source":Me("error",t),i=r;break;case"img":case"image":case"link":Me("error",t),Me("load",t),i=r;break;case"details":Me("toggle",t),i=r;break;case"input":q_(t,r),i=mf(t,r),Me("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Qe({},r,{value:void 0}),Me("invalid",t);break;case"textarea":G_(t,r),i=yf(t,r),Me("invalid",t);break;default:i=r}wf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?FE(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&ME(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ol(t,u):typeof u=="number"&&ol(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(sl.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Me("scroll",t):u!=null&&Yp(t,s,u,o))}switch(n){case"input":Cu(t),K_(t,r,!1);break;case"textarea":Cu(t),Q_(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ii(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?uo(t,!!r.multiple,s,!1):r.defaultValue!=null&&uo(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Cc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Lt(e),null;case 6:if(t&&e.stateNode!=null)aT(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(z(166));if(n=Xi(_l.current),Xi(tr.current),Ou(e)){if(r=e.stateNode,n=e.memoizedProps,r[Yn]=e,(s=r.nodeValue!==n)&&(t=cn,t!==null))switch(t.tag){case 3:bu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&bu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Yn]=e,e.stateNode=r}return Lt(e),null;case 13:if(je(Ke),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(He&&un!==null&&e.mode&1&&!(e.flags&128))C0(),So(),e.flags|=98560,s=!1;else if(s=Ou(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(z(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(z(317));s[Yn]=e}else So(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Lt(e),s=!1}else Ln!==null&&(tp(Ln),Ln=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ke.current&1?ct===0&&(ct=3):Dm())),e.updateQueue!==null&&(e.flags|=4),Lt(e),null);case 4:return Ro(),Kf(t,e),t===null&&fl(e.stateNode.containerInfo),Lt(e),null;case 10:return mm(e.type._context),Lt(e),null;case 17:return rn(e.type)&&Rc(),Lt(e),null;case 19:if(je(Ke),s=e.memoizedState,s===null)return Lt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ea(s,!1);else{if(ct!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=bc(t),o!==null){for(e.flags|=128,Ea(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return De(Ke,Ke.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ze()>ko&&(e.flags|=128,r=!0,Ea(s,!1),e.lanes=4194304)}else{if(!r)if(t=bc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ea(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!He)return Lt(e),null}else 2*Ze()-s.renderingStartTime>ko&&n!==1073741824&&(e.flags|=128,r=!0,Ea(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ze(),e.sibling=null,n=Ke.current,De(Ke,r?n&1|2:n&1),e):(Lt(e),null);case 22:case 23:return xm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?ln&1073741824&&(Lt(e),e.subtreeFlags&6&&(e.flags|=8192)):Lt(e),null;case 24:return null;case 25:return null}throw Error(z(156,e.tag))}function ek(t,e){switch(hm(e),e.tag){case 1:return rn(e.type)&&Rc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ro(),je(nn),je(Wt),wm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return vm(e),null;case 13:if(je(Ke),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(z(340));So()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return je(Ke),null;case 4:return Ro(),null;case 10:return mm(e.type._context),null;case 22:case 23:return xm(),null;case 24:return null;default:return null}}var Vu=!1,Ft=!1,tk=typeof WeakSet=="function"?WeakSet:Set,Y=null;function ro(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Xe(t,e,r)}else n.current=null}function Gf(t,e,n){try{n()}catch(r){Xe(t,e,r)}}var Fy=!1;function nk(t,e){if(xf=Tc,t=d0(),um(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,d=0,f=t,m=null;t:for(;;){for(var T;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(T=f.firstChild)!==null;)m=f,f=T;for(;;){if(f===t)break t;if(m===n&&++c===i&&(a=o),m===s&&++d===r&&(u=o),(T=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=T}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Df={focusedElem:t,selectionRange:n},Tc=!1,Y=e;Y!==null;)if(e=Y,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Y=t;else for(;Y!==null;){e=Y;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var A=R.memoizedProps,P=R.memoizedState,E=e.stateNode,v=E.getSnapshotBeforeUpdate(e.elementType===e.type?A:Dn(e.type,A),P);E.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(L){Xe(e,e.return,L)}if(t=e.sibling,t!==null){t.return=e.return,Y=t;break}Y=e.return}return R=Fy,Fy=!1,R}function qa(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Gf(e,n,s)}i=i.next}while(i!==r)}}function Ih(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Qf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function lT(t){var e=t.alternate;e!==null&&(t.alternate=null,lT(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Yn],delete e[ml],delete e[Lf],delete e[F1],delete e[U1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function uT(t){return t.tag===5||t.tag===3||t.tag===4}function Uy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||uT(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Yf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Cc));else if(r!==4&&(t=t.child,t!==null))for(Yf(t,e,n),t=t.sibling;t!==null;)Yf(t,e,n),t=t.sibling}function Xf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Xf(t,e,n),t=t.sibling;t!==null;)Xf(t,e,n),t=t.sibling}var Ct=null,bn=!1;function Xr(t,e,n){for(n=n.child;n!==null;)cT(t,e,n),n=n.sibling}function cT(t,e,n){if(er&&typeof er.onCommitFiberUnmount=="function")try{er.onCommitFiberUnmount(mh,n)}catch{}switch(n.tag){case 5:Ft||ro(n,e);case 6:var r=Ct,i=bn;Ct=null,Xr(t,e,n),Ct=r,bn=i,Ct!==null&&(bn?(t=Ct,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ct.removeChild(n.stateNode));break;case 18:Ct!==null&&(bn?(t=Ct,n=n.stateNode,t.nodeType===8?Pd(t.parentNode,n):t.nodeType===1&&Pd(t,n),cl(t)):Pd(Ct,n.stateNode));break;case 4:r=Ct,i=bn,Ct=n.stateNode.containerInfo,bn=!0,Xr(t,e,n),Ct=r,bn=i;break;case 0:case 11:case 14:case 15:if(!Ft&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Gf(n,e,o),i=i.next}while(i!==r)}Xr(t,e,n);break;case 1:if(!Ft&&(ro(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Xe(n,e,a)}Xr(t,e,n);break;case 21:Xr(t,e,n);break;case 22:n.mode&1?(Ft=(r=Ft)||n.memoizedState!==null,Xr(t,e,n),Ft=r):Xr(t,e,n);break;default:Xr(t,e,n)}}function jy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new tk),e.forEach(function(r){var i=hk.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function xn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ct=a.stateNode,bn=!1;break e;case 3:Ct=a.stateNode.containerInfo,bn=!0;break e;case 4:Ct=a.stateNode.containerInfo,bn=!0;break e}a=a.return}if(Ct===null)throw Error(z(160));cT(s,o,i),Ct=null,bn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Xe(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)hT(e,t),e=e.sibling}function hT(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(xn(e,t),Gn(t),r&4){try{qa(3,t,t.return),Ih(3,t)}catch(A){Xe(t,t.return,A)}try{qa(5,t,t.return)}catch(A){Xe(t,t.return,A)}}break;case 1:xn(e,t),Gn(t),r&512&&n!==null&&ro(n,n.return);break;case 5:if(xn(e,t),Gn(t),r&512&&n!==null&&ro(n,n.return),t.flags&32){var i=t.stateNode;try{ol(i,"")}catch(A){Xe(t,t.return,A)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&bE(i,s),Ef(a,o);var c=Ef(a,s);for(o=0;o<u.length;o+=2){var d=u[o],f=u[o+1];d==="style"?FE(i,f):d==="dangerouslySetInnerHTML"?ME(i,f):d==="children"?ol(i,f):Yp(i,d,f,c)}switch(a){case"input":gf(i,s);break;case"textarea":OE(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var T=s.value;T!=null?uo(i,!!s.multiple,T,!1):m!==!!s.multiple&&(s.defaultValue!=null?uo(i,!!s.multiple,s.defaultValue,!0):uo(i,!!s.multiple,s.multiple?[]:"",!1))}i[ml]=s}catch(A){Xe(t,t.return,A)}}break;case 6:if(xn(e,t),Gn(t),r&4){if(t.stateNode===null)throw Error(z(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(A){Xe(t,t.return,A)}}break;case 3:if(xn(e,t),Gn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{cl(e.containerInfo)}catch(A){Xe(t,t.return,A)}break;case 4:xn(e,t),Gn(t);break;case 13:xn(e,t),Gn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Pm=Ze())),r&4&&jy(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Ft=(c=Ft)||d,xn(e,t),Ft=c):xn(e,t),Gn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(Y=t,d=t.child;d!==null;){for(f=Y=d;Y!==null;){switch(m=Y,T=m.child,m.tag){case 0:case 11:case 14:case 15:qa(4,m,m.return);break;case 1:ro(m,m.return);var R=m.stateNode;if(typeof R.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(A){Xe(r,n,A)}}break;case 5:ro(m,m.return);break;case 22:if(m.memoizedState!==null){zy(f);continue}}T!==null?(T.return=m,Y=T):zy(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=VE("display",o))}catch(A){Xe(t,t.return,A)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(A){Xe(t,t.return,A)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:xn(e,t),Gn(t),r&4&&jy(t);break;case 21:break;default:xn(e,t),Gn(t)}}function Gn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(uT(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ol(i,""),r.flags&=-33);var s=Uy(t);Xf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Uy(t);Yf(t,a,o);break;default:throw Error(z(161))}}catch(u){Xe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function rk(t,e,n){Y=t,dT(t)}function dT(t,e,n){for(var r=(t.mode&1)!==0;Y!==null;){var i=Y,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Vu;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||Ft;a=Vu;var c=Ft;if(Vu=o,(Ft=u)&&!c)for(Y=i;Y!==null;)o=Y,u=o.child,o.tag===22&&o.memoizedState!==null?Wy(i):u!==null?(u.return=o,Y=u):Wy(i);for(;s!==null;)Y=s,dT(s),s=s.sibling;Y=i,Vu=a,Ft=c}By(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,Y=s):By(t)}}function By(t){for(;Y!==null;){var e=Y;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ft||Ih(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ft)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Dn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Cy(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Cy(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&cl(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}Ft||e.flags&512&&Qf(e)}catch(m){Xe(e,e.return,m)}}if(e===t){Y=null;break}if(n=e.sibling,n!==null){n.return=e.return,Y=n;break}Y=e.return}}function zy(t){for(;Y!==null;){var e=Y;if(e===t){Y=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Y=n;break}Y=e.return}}function Wy(t){for(;Y!==null;){var e=Y;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ih(4,e)}catch(u){Xe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Xe(e,i,u)}}var s=e.return;try{Qf(e)}catch(u){Xe(e,s,u)}break;case 5:var o=e.return;try{Qf(e)}catch(u){Xe(e,o,u)}}}catch(u){Xe(e,e.return,u)}if(e===t){Y=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Y=a;break}Y=e.return}}var ik=Math.ceil,Mc=Fr.ReactCurrentDispatcher,Am=Fr.ReactCurrentOwner,Sn=Fr.ReactCurrentBatchConfig,Ee=0,_t=null,it=null,kt=0,ln=0,io=bi(0),ct=0,El=null,ls=0,Sh=0,km=0,Ka=null,Zt=null,Pm=0,ko=1/0,wr=null,Vc=!1,Jf=null,pi=null,Fu=!1,ai=null,Fc=0,Ga=0,Zf=null,ic=-1,sc=0;function Qt(){return Ee&6?Ze():ic!==-1?ic:ic=Ze()}function mi(t){return t.mode&1?Ee&2&&kt!==0?kt&-kt:B1.transition!==null?(sc===0&&(sc=YE()),sc):(t=Re,t!==0||(t=window.event,t=t===void 0?16:r0(t.type)),t):1}function Bn(t,e,n,r){if(50<Ga)throw Ga=0,Zf=null,Error(z(185));Fl(t,n,r),(!(Ee&2)||t!==_t)&&(t===_t&&(!(Ee&2)&&(Sh|=n),ct===4&&ri(t,kt)),sn(t,r),n===1&&Ee===0&&!(e.mode&1)&&(ko=Ze()+500,wh&&Oi()))}function sn(t,e){var n=t.callbackNode;BA(t,e);var r=Ec(t,t===_t?kt:0);if(r===0)n!==null&&J_(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&J_(n),e===1)t.tag===0?j1(Hy.bind(null,t)):T0(Hy.bind(null,t)),M1(function(){!(Ee&6)&&Oi()}),n=null;else{switch(XE(r)){case 1:n=tm;break;case 4:n=GE;break;case 16:n=wc;break;case 536870912:n=QE;break;default:n=wc}n=wT(n,fT.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function fT(t,e){if(ic=-1,sc=0,Ee&6)throw Error(z(327));var n=t.callbackNode;if(mo()&&t.callbackNode!==n)return null;var r=Ec(t,t===_t?kt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Uc(t,r);else{e=r;var i=Ee;Ee|=2;var s=mT();(_t!==t||kt!==e)&&(wr=null,ko=Ze()+500,ns(t,e));do try{ak();break}catch(a){pT(t,a)}while(!0);pm(),Mc.current=s,Ee=i,it!==null?e=0:(_t=null,kt=0,e=ct)}if(e!==0){if(e===2&&(i=Rf(t),i!==0&&(r=i,e=ep(t,i))),e===1)throw n=El,ns(t,0),ri(t,r),sn(t,Ze()),n;if(e===6)ri(t,r);else{if(i=t.current.alternate,!(r&30)&&!sk(i)&&(e=Uc(t,r),e===2&&(s=Rf(t),s!==0&&(r=s,e=ep(t,s))),e===1))throw n=El,ns(t,0),ri(t,r),sn(t,Ze()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(z(345));case 2:qi(t,Zt,wr);break;case 3:if(ri(t,r),(r&130023424)===r&&(e=Pm+500-Ze(),10<e)){if(Ec(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Qt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Of(qi.bind(null,t,Zt,wr),e);break}qi(t,Zt,wr);break;case 4:if(ri(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-jn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ze()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ik(r/1960))-r,10<r){t.timeoutHandle=Of(qi.bind(null,t,Zt,wr),r);break}qi(t,Zt,wr);break;case 5:qi(t,Zt,wr);break;default:throw Error(z(329))}}}return sn(t,Ze()),t.callbackNode===n?fT.bind(null,t):null}function ep(t,e){var n=Ka;return t.current.memoizedState.isDehydrated&&(ns(t,e).flags|=256),t=Uc(t,e),t!==2&&(e=Zt,Zt=n,e!==null&&tp(e)),t}function tp(t){Zt===null?Zt=t:Zt.push.apply(Zt,t)}function sk(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Wn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ri(t,e){for(e&=~km,e&=~Sh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-jn(e),r=1<<n;t[n]=-1,e&=~r}}function Hy(t){if(Ee&6)throw Error(z(327));mo();var e=Ec(t,0);if(!(e&1))return sn(t,Ze()),null;var n=Uc(t,e);if(t.tag!==0&&n===2){var r=Rf(t);r!==0&&(e=r,n=ep(t,r))}if(n===1)throw n=El,ns(t,0),ri(t,e),sn(t,Ze()),n;if(n===6)throw Error(z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,qi(t,Zt,wr),sn(t,Ze()),null}function Nm(t,e){var n=Ee;Ee|=1;try{return t(e)}finally{Ee=n,Ee===0&&(ko=Ze()+500,wh&&Oi())}}function us(t){ai!==null&&ai.tag===0&&!(Ee&6)&&mo();var e=Ee;Ee|=1;var n=Sn.transition,r=Re;try{if(Sn.transition=null,Re=1,t)return t()}finally{Re=r,Sn.transition=n,Ee=e,!(Ee&6)&&Oi()}}function xm(){ln=io.current,je(io)}function ns(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,L1(n)),it!==null)for(n=it.return;n!==null;){var r=n;switch(hm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Rc();break;case 3:Ro(),je(nn),je(Wt),wm();break;case 5:vm(r);break;case 4:Ro();break;case 13:je(Ke);break;case 19:je(Ke);break;case 10:mm(r.type._context);break;case 22:case 23:xm()}n=n.return}if(_t=t,it=t=gi(t.current,null),kt=ln=e,ct=0,El=null,km=Sh=ls=0,Zt=Ka=null,Yi!==null){for(e=0;e<Yi.length;e++)if(n=Yi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Yi=null}return t}function pT(t,e){do{var n=it;try{if(pm(),tc.current=Lc,Oc){for(var r=Ge.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Oc=!1}if(as=0,pt=ut=Ge=null,$a=!1,yl=0,Am.current=null,n===null||n.return===null){ct=1,El=e,it=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=kt,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var T=xy(o);if(T!==null){T.flags&=-257,Dy(T,o,a,s,e),T.mode&1&&Ny(s,c,e),e=T,u=c;var R=e.updateQueue;if(R===null){var A=new Set;A.add(u),e.updateQueue=A}else R.add(u);break e}else{if(!(e&1)){Ny(s,c,e),Dm();break e}u=Error(z(426))}}else if(He&&a.mode&1){var P=xy(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Dy(P,o,a,s,e),dm(Ao(u,a));break e}}s=u=Ao(u,a),ct!==4&&(ct=2),Ka===null?Ka=[s]:Ka.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var E=X0(s,u,e);Sy(s,E);break e;case 1:a=u;var v=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(pi===null||!pi.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var L=J0(s,a,e);Sy(s,L);break e}}s=s.return}while(s!==null)}_T(n)}catch(B){e=B,it===n&&n!==null&&(it=n=n.return);continue}break}while(!0)}function mT(){var t=Mc.current;return Mc.current=Lc,t===null?Lc:t}function Dm(){(ct===0||ct===3||ct===2)&&(ct=4),_t===null||!(ls&268435455)&&!(Sh&268435455)||ri(_t,kt)}function Uc(t,e){var n=Ee;Ee|=2;var r=mT();(_t!==t||kt!==e)&&(wr=null,ns(t,e));do try{ok();break}catch(i){pT(t,i)}while(!0);if(pm(),Ee=n,Mc.current=r,it!==null)throw Error(z(261));return _t=null,kt=0,ct}function ok(){for(;it!==null;)gT(it)}function ak(){for(;it!==null&&!DA();)gT(it)}function gT(t){var e=vT(t.alternate,t,ln);t.memoizedProps=t.pendingProps,e===null?_T(t):it=e,Am.current=null}function _T(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=ek(n,e),n!==null){n.flags&=32767,it=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ct=6,it=null;return}}else if(n=Z1(n,e,ln),n!==null){it=n;return}if(e=e.sibling,e!==null){it=e;return}it=e=t}while(e!==null);ct===0&&(ct=5)}function qi(t,e,n){var r=Re,i=Sn.transition;try{Sn.transition=null,Re=1,lk(t,e,n,r)}finally{Sn.transition=i,Re=r}return null}function lk(t,e,n,r){do mo();while(ai!==null);if(Ee&6)throw Error(z(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(z(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(zA(t,s),t===_t&&(it=_t=null,kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Fu||(Fu=!0,wT(wc,function(){return mo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Sn.transition,Sn.transition=null;var o=Re;Re=1;var a=Ee;Ee|=4,Am.current=null,nk(t,n),hT(n,t),k1(Df),Tc=!!xf,Df=xf=null,t.current=n,rk(n),bA(),Ee=a,Re=o,Sn.transition=s}else t.current=n;if(Fu&&(Fu=!1,ai=t,Fc=i),s=t.pendingLanes,s===0&&(pi=null),MA(n.stateNode),sn(t,Ze()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Vc)throw Vc=!1,t=Jf,Jf=null,t;return Fc&1&&t.tag!==0&&mo(),s=t.pendingLanes,s&1?t===Zf?Ga++:(Ga=0,Zf=t):Ga=0,Oi(),null}function mo(){if(ai!==null){var t=XE(Fc),e=Sn.transition,n=Re;try{if(Sn.transition=null,Re=16>t?16:t,ai===null)var r=!1;else{if(t=ai,ai=null,Fc=0,Ee&6)throw Error(z(331));var i=Ee;for(Ee|=4,Y=t.current;Y!==null;){var s=Y,o=s.child;if(Y.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(Y=c;Y!==null;){var d=Y;switch(d.tag){case 0:case 11:case 15:qa(8,d,s)}var f=d.child;if(f!==null)f.return=d,Y=f;else for(;Y!==null;){d=Y;var m=d.sibling,T=d.return;if(lT(d),d===c){Y=null;break}if(m!==null){m.return=T,Y=m;break}Y=T}}}var R=s.alternate;if(R!==null){var A=R.child;if(A!==null){R.child=null;do{var P=A.sibling;A.sibling=null,A=P}while(A!==null)}}Y=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Y=o;else e:for(;Y!==null;){if(s=Y,s.flags&2048)switch(s.tag){case 0:case 11:case 15:qa(9,s,s.return)}var E=s.sibling;if(E!==null){E.return=s.return,Y=E;break e}Y=s.return}}var v=t.current;for(Y=v;Y!==null;){o=Y;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,Y=S;else e:for(o=v;Y!==null;){if(a=Y,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ih(9,a)}}catch(B){Xe(a,a.return,B)}if(a===o){Y=null;break e}var L=a.sibling;if(L!==null){L.return=a.return,Y=L;break e}Y=a.return}}if(Ee=i,Oi(),er&&typeof er.onPostCommitFiberRoot=="function")try{er.onPostCommitFiberRoot(mh,t)}catch{}r=!0}return r}finally{Re=n,Sn.transition=e}}return!1}function $y(t,e,n){e=Ao(n,e),e=X0(t,e,1),t=fi(t,e,1),e=Qt(),t!==null&&(Fl(t,1,e),sn(t,e))}function Xe(t,e,n){if(t.tag===3)$y(t,t,n);else for(;e!==null;){if(e.tag===3){$y(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pi===null||!pi.has(r))){t=Ao(n,t),t=J0(e,t,1),e=fi(e,t,1),t=Qt(),e!==null&&(Fl(e,1,t),sn(e,t));break}}e=e.return}}function uk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Qt(),t.pingedLanes|=t.suspendedLanes&n,_t===t&&(kt&n)===n&&(ct===4||ct===3&&(kt&130023424)===kt&&500>Ze()-Pm?ns(t,0):km|=n),sn(t,e)}function yT(t,e){e===0&&(t.mode&1?(e=ku,ku<<=1,!(ku&130023424)&&(ku=4194304)):e=1);var n=Qt();t=br(t,e),t!==null&&(Fl(t,e,n),sn(t,n))}function ck(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),yT(t,n)}function hk(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(e),yT(t,n)}var vT;vT=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||nn.current)en=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return en=!1,J1(t,e,n);en=!!(t.flags&131072)}else en=!1,He&&e.flags&1048576&&I0(e,Pc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;rc(t,e),t=e.pendingProps;var i=Io(e,Wt.current);po(e,n),i=Tm(null,e,r,t,i,n);var s=Im();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,rn(r)?(s=!0,Ac(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,_m(e),i.updater=Th,e.stateNode=i,i._reactInternals=e,Bf(e,r,t,n),e=Hf(null,e,r,!0,s,n)):(e.tag=0,He&&s&&cm(e),Gt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(rc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=fk(r),t=Dn(r,t),i){case 0:e=Wf(null,e,r,t,n);break e;case 1:e=Ly(null,e,r,t,n);break e;case 11:e=by(null,e,r,t,n);break e;case 14:e=Oy(null,e,r,Dn(r.type,t),n);break e}throw Error(z(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Dn(r,i),Wf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Dn(r,i),Ly(t,e,r,i,n);case 3:e:{if(nT(e),t===null)throw Error(z(387));r=e.pendingProps,s=e.memoizedState,i=s.element,P0(t,e),Dc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ao(Error(z(423)),e),e=My(t,e,r,n,i);break e}else if(r!==i){i=Ao(Error(z(424)),e),e=My(t,e,r,n,i);break e}else for(un=di(e.stateNode.containerInfo.firstChild),cn=e,He=!0,Ln=null,n=A0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(So(),r===i){e=Or(t,e,n);break e}Gt(t,e,r,n)}e=e.child}return e;case 5:return N0(e),t===null&&Ff(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,bf(r,i)?o=null:s!==null&&bf(r,s)&&(e.flags|=32),tT(t,e),Gt(t,e,o,n),e.child;case 6:return t===null&&Ff(e),null;case 13:return rT(t,e,n);case 4:return ym(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Co(e,null,r,n):Gt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Dn(r,i),by(t,e,r,i,n);case 7:return Gt(t,e,e.pendingProps,n),e.child;case 8:return Gt(t,e,e.pendingProps.children,n),e.child;case 12:return Gt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,De(Nc,r._currentValue),r._currentValue=o,s!==null)if(Wn(s.value,o)){if(s.children===i.children&&!nn.current){e=Or(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=kr(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Uf(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(z(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Uf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Gt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,po(e,n),i=Cn(i),r=r(i),e.flags|=1,Gt(t,e,r,n),e.child;case 14:return r=e.type,i=Dn(r,e.pendingProps),i=Dn(r.type,i),Oy(t,e,r,i,n);case 15:return Z0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Dn(r,i),rc(t,e),e.tag=1,rn(r)?(t=!0,Ac(e)):t=!1,po(e,n),Y0(e,r,i),Bf(e,r,i,n),Hf(null,e,r,!0,t,n);case 19:return iT(t,e,n);case 22:return eT(t,e,n)}throw Error(z(156,e.tag))};function wT(t,e){return KE(t,e)}function dk(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tn(t,e,n,r){return new dk(t,e,n,r)}function bm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function fk(t){if(typeof t=="function")return bm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Jp)return 11;if(t===Zp)return 14}return 2}function gi(t,e){var n=t.alternate;return n===null?(n=Tn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function oc(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")bm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Gs:return rs(n.children,i,s,e);case Xp:o=8,i|=8;break;case hf:return t=Tn(12,n,e,i|2),t.elementType=hf,t.lanes=s,t;case df:return t=Tn(13,n,e,i),t.elementType=df,t.lanes=s,t;case ff:return t=Tn(19,n,e,i),t.elementType=ff,t.lanes=s,t;case NE:return Ch(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case kE:o=10;break e;case PE:o=9;break e;case Jp:o=11;break e;case Zp:o=14;break e;case ei:o=16,r=null;break e}throw Error(z(130,t==null?t:typeof t,""))}return e=Tn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function rs(t,e,n,r){return t=Tn(7,t,r,e),t.lanes=n,t}function Ch(t,e,n,r){return t=Tn(22,t,r,e),t.elementType=NE,t.lanes=n,t.stateNode={isHidden:!1},t}function Vd(t,e,n){return t=Tn(6,t,null,e),t.lanes=n,t}function Fd(t,e,n){return e=Tn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function pk(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yd(0),this.expirationTimes=yd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Om(t,e,n,r,i,s,o,a,u){return t=new pk(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Tn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_m(s),t}function mk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ks,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function ET(t){if(!t)return Si;t=t._reactInternals;e:{if(Is(t)!==t||t.tag!==1)throw Error(z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(rn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(z(171))}if(t.tag===1){var n=t.type;if(rn(n))return E0(t,n,e)}return e}function TT(t,e,n,r,i,s,o,a,u){return t=Om(n,r,!0,t,i,s,o,a,u),t.context=ET(null),n=t.current,r=Qt(),i=mi(n),s=kr(r,i),s.callback=e??null,fi(n,s,i),t.current.lanes=i,Fl(t,i,r),sn(t,r),t}function Rh(t,e,n,r){var i=e.current,s=Qt(),o=mi(i);return n=ET(n),e.context===null?e.context=n:e.pendingContext=n,e=kr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=fi(i,e,o),t!==null&&(Bn(t,i,o,s),ec(t,i,o)),o}function jc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function qy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Lm(t,e){qy(t,e),(t=t.alternate)&&qy(t,e)}function gk(){return null}var IT=typeof reportError=="function"?reportError:function(t){console.error(t)};function Mm(t){this._internalRoot=t}Ah.prototype.render=Mm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(z(409));Rh(t,e,null,null)};Ah.prototype.unmount=Mm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;us(function(){Rh(null,t,null,null)}),e[Dr]=null}};function Ah(t){this._internalRoot=t}Ah.prototype.unstable_scheduleHydration=function(t){if(t){var e=e0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ni.length&&e!==0&&e<ni[n].priority;n++);ni.splice(n,0,t),n===0&&n0(t)}};function Vm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function kh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ky(){}function _k(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=jc(o);s.call(c)}}var o=TT(e,r,t,0,null,!1,!1,"",Ky);return t._reactRootContainer=o,t[Dr]=o.current,fl(t.nodeType===8?t.parentNode:t),us(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=jc(u);a.call(c)}}var u=Om(t,0,!1,null,null,!1,!1,"",Ky);return t._reactRootContainer=u,t[Dr]=u.current,fl(t.nodeType===8?t.parentNode:t),us(function(){Rh(e,u,n,r)}),u}function Ph(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=jc(o);a.call(u)}}Rh(e,o,t,i)}else o=_k(n,e,t,i,r);return jc(o)}JE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ba(e.pendingLanes);n!==0&&(nm(e,n|1),sn(e,Ze()),!(Ee&6)&&(ko=Ze()+500,Oi()))}break;case 13:us(function(){var r=br(t,1);if(r!==null){var i=Qt();Bn(r,t,1,i)}}),Lm(t,1)}};rm=function(t){if(t.tag===13){var e=br(t,134217728);if(e!==null){var n=Qt();Bn(e,t,134217728,n)}Lm(t,134217728)}};ZE=function(t){if(t.tag===13){var e=mi(t),n=br(t,e);if(n!==null){var r=Qt();Bn(n,t,e,r)}Lm(t,e)}};e0=function(){return Re};t0=function(t,e){var n=Re;try{return Re=t,e()}finally{Re=n}};If=function(t,e,n){switch(e){case"input":if(gf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=vh(r);if(!i)throw Error(z(90));DE(r),gf(r,i)}}}break;case"textarea":OE(t,n);break;case"select":e=n.value,e!=null&&uo(t,!!n.multiple,e,!1)}};BE=Nm;zE=us;var yk={usingClientEntryPoint:!1,Events:[jl,Js,vh,UE,jE,Nm]},Ta={findFiberByHostInstance:Qi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},vk={bundleType:Ta.bundleType,version:Ta.version,rendererPackageName:Ta.rendererPackageName,rendererConfig:Ta.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Fr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=$E(t),t===null?null:t.stateNode},findFiberByHostInstance:Ta.findFiberByHostInstance||gk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Uu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Uu.isDisabled&&Uu.supportsFiber)try{mh=Uu.inject(vk),er=Uu}catch{}}pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yk;pn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vm(e))throw Error(z(200));return mk(t,e,null,n)};pn.createRoot=function(t,e){if(!Vm(t))throw Error(z(299));var n=!1,r="",i=IT;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Om(t,1,!1,null,null,n,!1,r,i),t[Dr]=e.current,fl(t.nodeType===8?t.parentNode:t),new Mm(e)};pn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(z(188)):(t=Object.keys(t).join(","),Error(z(268,t)));return t=$E(e),t=t===null?null:t.stateNode,t};pn.flushSync=function(t){return us(t)};pn.hydrate=function(t,e,n){if(!kh(e))throw Error(z(200));return Ph(null,t,e,!0,n)};pn.hydrateRoot=function(t,e,n){if(!Vm(t))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=IT;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=TT(e,null,t,1,n??null,i,!1,s,o),t[Dr]=e.current,fl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ah(e)};pn.render=function(t,e,n){if(!kh(e))throw Error(z(200));return Ph(null,t,e,!1,n)};pn.unmountComponentAtNode=function(t){if(!kh(t))throw Error(z(40));return t._reactRootContainer?(us(function(){Ph(null,null,t,!1,function(){t._reactRootContainer=null,t[Dr]=null})}),!0):!1};pn.unstable_batchedUpdates=Nm;pn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!kh(n))throw Error(z(200));if(t==null||t._reactInternals===void 0)throw Error(z(38));return Ph(t,e,n,!1,r)};pn.version="18.3.1-next-f1338f8080-20240426";function ST(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ST)}catch(t){console.error(t)}}ST(),SE.exports=pn;var Fm=SE.exports;const wk=hE(Fm),Ek=cE({__proto__:null,default:wk},[Fm]);var Gy=Fm;uf.createRoot=Gy.createRoot,uf.hydrateRoot=Gy.hydrateRoot;/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qe(){return qe=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},qe.apply(this,arguments)}var nt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(nt||(nt={}));const Qy="popstate";function Tk(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Tl("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ci(i)}return Sk(e,n,null,t)}function he(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Po(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Ik(){return Math.random().toString(36).substr(2,8)}function Yy(t,e){return{usr:t.state,key:t.key,idx:e}}function Tl(t,e,n,r){return n===void 0&&(n=null),qe({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Li(e):e,{state:n,key:e&&e.key||r||Ik()})}function Ci(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Li(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Sk(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=nt.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(qe({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function f(){a=nt.Pop;let P=d(),E=P==null?null:P-c;c=P,u&&u({action:a,location:A.location,delta:E})}function m(P,E){a=nt.Push;let v=Tl(A.location,P,E);c=d()+1;let S=Yy(v,c),L=A.createHref(v);try{o.pushState(S,"",L)}catch(B){if(B instanceof DOMException&&B.name==="DataCloneError")throw B;i.location.assign(L)}s&&u&&u({action:a,location:A.location,delta:1})}function T(P,E){a=nt.Replace;let v=Tl(A.location,P,E);c=d();let S=Yy(v,c),L=A.createHref(v);o.replaceState(S,"",L),s&&u&&u({action:a,location:A.location,delta:0})}function R(P){let E=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof P=="string"?P:Ci(P);return v=v.replace(/ $/,"%20"),he(E,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,E)}let A={get action(){return a},get location(){return t(i,o)},listen(P){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Qy,f),u=P,()=>{i.removeEventListener(Qy,f),u=null}},createHref(P){return e(i,P)},createURL:R,encodeLocation(P){let E=R(P);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:m,replace:T,go(P){return o.go(P)}};return A}var We;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(We||(We={}));const Ck=new Set(["lazy","caseSensitive","path","id","index","children"]);function Rk(t){return t.index===!0}function np(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,s],a=typeof i.id=="string"?i.id:o.join("-");if(he(i.index!==!0||!i.children,"Cannot specify children on an index route"),he(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),Rk(i)){let u=qe({},i,e(i),{id:a});return r[a]=u,u}else{let u=qe({},i,e(i),{id:a,children:void 0});return r[a]=u,i.children&&(u.children=np(i.children,e,o,r)),u}})}function so(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Li(e):e,i=Ri(r.pathname||"/",n);if(i==null)return null;let s=CT(t);kk(s);let o=null;for(let a=0;o==null&&a<s.length;++a){let u=jk(i);o=Vk(s[a],u)}return o}function Ak(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function CT(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(he(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=nr([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(he(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),CT(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:Lk(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of RT(s.path))i(s,o,u)}),e}function RT(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=RT(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function kk(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Mk(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Pk=/^:[\w-]+$/,Nk=3,xk=2,Dk=1,bk=10,Ok=-2,Xy=t=>t==="*";function Lk(t,e){let n=t.split("/"),r=n.length;return n.some(Xy)&&(r+=Ok),e&&(r+=xk),n.filter(i=>!Xy(i)).reduce((i,s)=>i+(Pk.test(s)?Nk:s===""?Dk:bk),r)}function Mk(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Vk(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],u=o===n.length-1,c=i==="/"?e:e.slice(i.length)||"/",d=Fk({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},c);if(!d)return null;Object.assign(r,d.params);let f=a.route;s.push({params:r,pathname:nr([i,d.pathname]),pathnameBase:Wk(nr([i,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(i=nr([i,d.pathnameBase]))}return s}function Fk(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Uk(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:m,isOptional:T}=d;if(m==="*"){let A=a[f]||"";o=s.slice(0,s.length-A.length).replace(/(.)\/+$/,"$1")}const R=a[f];return T&&!R?c[m]=void 0:c[m]=(R||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function Uk(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Po(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function jk(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Po(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Ri(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Bk(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Li(t):t;return{pathname:n?n.startsWith("/")?n:zk(n,e):e,search:Hk(r),hash:$k(i)}}function zk(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ud(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function AT(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Um(t,e){let n=AT(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function jm(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Li(t):(i=qe({},t),he(!i.pathname||!i.pathname.includes("?"),Ud("?","pathname","search",i)),he(!i.pathname||!i.pathname.includes("#"),Ud("#","pathname","hash",i)),he(!i.search||!i.search.includes("#"),Ud("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}a=f>=0?e[f]:"/"}let u=Bk(i,a),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const nr=t=>t.join("/").replace(/\/\/+/g,"/"),Wk=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Hk=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,$k=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class Bm{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function zm(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const kT=["post","put","patch","delete"],qk=new Set(kT),Kk=["get",...kT],Gk=new Set(Kk),Qk=new Set([301,302,303,307,308]),Yk=new Set([307,308]),jd={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Xk={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Ia={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Wm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Jk=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),PT="remix-router-transitions";function Zk(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;he(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let x=t.detectErrorBoundary;i=O=>({hasErrorBoundary:x(O)})}else i=Jk;let s={},o=np(t.routes,i,void 0,s),a,u=t.basename||"/",c=t.unstable_dataStrategy||rP,d=qe({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,unstable_skipActionErrorRevalidation:!1},t.future),f=null,m=new Set,T=null,R=null,A=null,P=t.hydrationData!=null,E=so(o,t.history.location,u),v=null;if(E==null){let x=_n(404,{pathname:t.history.location.pathname}),{matches:O,route:V}=av(o);E=O,v={[V.id]:x}}let S,L=E.some(x=>x.route.lazy),B=E.some(x=>x.route.loader);if(L)S=!1;else if(!B)S=!0;else if(d.v7_partialHydration){let x=t.hydrationData?t.hydrationData.loaderData:null,O=t.hydrationData?t.hydrationData.errors:null,V=W=>W.route.loader?typeof W.route.loader=="function"&&W.route.loader.hydrate===!0?!1:x&&x[W.route.id]!==void 0||O&&O[W.route.id]!==void 0:!0;if(O){let W=E.findIndex(Q=>O[Q.route.id]!==void 0);S=E.slice(0,W+1).every(V)}else S=E.every(V)}else S=t.hydrationData!=null;let $,g={historyAction:t.history.action,location:t.history.location,matches:E,initialized:S,navigation:jd,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||v,fetchers:new Map,blockers:new Map},y=nt.Pop,w=!1,I,k=!1,N=new Map,C=null,Pe=!1,yt=!1,$n=[],Jt=[],H=new Map,ne=0,se=-1,Se=new Map,de=new Set,Ae=new Map,qt=new Map,at=new Set,vt=new Map,wt=new Map,ea=!1;function nd(){if(f=t.history.listen(x=>{let{action:O,location:V,delta:W}=x;if(ea){ea=!1;return}Po(wt.size===0||W!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let Q=Ls({currentLocation:g.location,nextLocation:V,historyAction:O});if(Q&&W!=null){ea=!0,t.history.go(W*-1),Os(Q,{state:"blocked",location:V,proceed(){Os(Q,{state:"proceeding",proceed:void 0,reset:void 0,location:V}),t.history.go(W)},reset(){let Z=new Map(g.blockers);Z.set(Q,Ia),Et({blockers:Z})}});return}return qn(O,V)}),n){mP(e,N);let x=()=>gP(e,N);e.addEventListener("pagehide",x),C=()=>e.removeEventListener("pagehide",x)}return g.initialized||qn(nt.Pop,g.location,{initialHydration:!0}),$}function Ps(){f&&f(),C&&C(),m.clear(),I&&I.abort(),g.fetchers.forEach((x,O)=>Bi(O)),g.blockers.forEach((x,O)=>hu(O))}function Ns(x){return m.add(x),()=>m.delete(x)}function Et(x,O){O===void 0&&(O={}),g=qe({},g,x);let V=[],W=[];d.v7_fetcherPersist&&g.fetchers.forEach((Q,Z)=>{Q.state==="idle"&&(at.has(Z)?W.push(Z):V.push(Z))}),[...m].forEach(Q=>Q(g,{deletedFetchers:W,unstable_viewTransitionOpts:O.viewTransitionOpts,unstable_flushSync:O.flushSync===!0})),d.v7_fetcherPersist&&(V.forEach(Q=>g.fetchers.delete(Q)),W.forEach(Q=>Bi(Q)))}function hr(x,O,V){var W,Q;let{flushSync:Z}=V===void 0?{}:V,ee=g.actionData!=null&&g.navigation.formMethod!=null&&On(g.navigation.formMethod)&&g.navigation.state==="loading"&&((W=x.state)==null?void 0:W._isRedirect)!==!0,G;O.actionData?Object.keys(O.actionData).length>0?G=O.actionData:G=null:ee?G=g.actionData:G=null;let oe=O.loaderData?sv(g.loaderData,O.loaderData,O.matches||[],O.errors):g.loaderData,ae=g.blockers;ae.size>0&&(ae=new Map(ae),ae.forEach((re,xe)=>ae.set(xe,Ia)));let lt=w===!0||g.navigation.formMethod!=null&&On(g.navigation.formMethod)&&((Q=x.state)==null?void 0:Q._isRedirect)!==!0;a&&(o=a,a=void 0),Pe||y===nt.Pop||(y===nt.Push?t.history.push(x,x.state):y===nt.Replace&&t.history.replace(x,x.state));let ze;if(y===nt.Pop){let re=N.get(g.location.pathname);re&&re.has(x.pathname)?ze={currentLocation:g.location,nextLocation:x}:N.has(x.pathname)&&(ze={currentLocation:x,nextLocation:g.location})}else if(k){let re=N.get(g.location.pathname);re?re.add(x.pathname):(re=new Set([x.pathname]),N.set(g.location.pathname,re)),ze={currentLocation:g.location,nextLocation:x}}Et(qe({},O,{actionData:G,loaderData:oe,historyAction:y,location:x,initialized:!0,navigation:jd,revalidation:"idle",restoreScrollPosition:Vs(x,O.matches||g.matches),preventScrollReset:lt,blockers:ae}),{viewTransitionOpts:ze,flushSync:Z===!0}),y=nt.Pop,w=!1,k=!1,Pe=!1,yt=!1,$n=[],Jt=[]}async function xs(x,O){if(typeof x=="number"){t.history.go(x);return}let V=rp(g.location,g.matches,u,d.v7_prependBasename,x,d.v7_relativeSplatPath,O==null?void 0:O.fromRouteId,O==null?void 0:O.relative),{path:W,submission:Q,error:Z}=Jy(d.v7_normalizeFormMethod,!1,V,O),ee=g.location,G=Tl(g.location,W,O&&O.state);G=qe({},G,t.history.encodeLocation(G));let oe=O&&O.replace!=null?O.replace:void 0,ae=nt.Push;oe===!0?ae=nt.Replace:oe===!1||Q!=null&&On(Q.formMethod)&&Q.formAction===g.location.pathname+g.location.search&&(ae=nt.Replace);let lt=O&&"preventScrollReset"in O?O.preventScrollReset===!0:void 0,ze=(O&&O.unstable_flushSync)===!0,re=Ls({currentLocation:ee,nextLocation:G,historyAction:ae});if(re){Os(re,{state:"blocked",location:G,proceed(){Os(re,{state:"proceeding",proceed:void 0,reset:void 0,location:G}),xs(x,O)},reset(){let xe=new Map(g.blockers);xe.set(re,Ia),Et({blockers:xe})}});return}return await qn(ae,G,{submission:Q,pendingError:Z,preventScrollReset:lt,replace:O&&O.replace,enableViewTransition:O&&O.unstable_viewTransition,flushSync:ze})}function ta(){if(bs(),Et({revalidation:"loading"}),g.navigation.state!=="submitting"){if(g.navigation.state==="idle"){qn(g.historyAction,g.location,{startUninterruptedRevalidation:!0});return}qn(y||g.historyAction,g.navigation.location,{overrideNavigation:g.navigation})}}async function qn(x,O,V){I&&I.abort(),I=null,y=x,Pe=(V&&V.startUninterruptedRevalidation)===!0,oa(g.location,g.matches),w=(V&&V.preventScrollReset)===!0,k=(V&&V.enableViewTransition)===!0;let W=a||o,Q=V&&V.overrideNavigation,Z=so(W,O,u),ee=(V&&V.flushSync)===!0;if(!Z){let re=_n(404,{pathname:O.pathname}),{matches:xe,route:$e}=av(W);Ms(),hr(O,{matches:xe,loaderData:{},errors:{[$e.id]:re}},{flushSync:ee});return}if(g.initialized&&!yt&&uP(g.location,O)&&!(V&&V.submission&&On(V.submission.formMethod))){hr(O,{matches:Z},{flushSync:ee});return}I=new AbortController;let G=zs(t.history,O,I.signal,V&&V.submission),oe;if(V&&V.pendingError)oe=[Qa(Z).route.id,{type:We.error,error:V.pendingError}];else if(V&&V.submission&&On(V.submission.formMethod)){let re=await rd(G,O,V.submission,Z,{replace:V.replace,flushSync:ee});if(re.shortCircuited)return;oe=re.pendingActionResult,Q=Bd(O,V.submission),ee=!1,G=zs(t.history,G.url,G.signal)}let{shortCircuited:ae,loaderData:lt,errors:ze}=await id(G,O,Z,Q,V&&V.submission,V&&V.fetcherSubmission,V&&V.replace,V&&V.initialHydration===!0,ee,oe);ae||(I=null,hr(O,qe({matches:Z},ov(oe),{loaderData:lt,errors:ze})))}async function rd(x,O,V,W,Q){Q===void 0&&(Q={}),bs();let Z=fP(O,V);Et({navigation:Z},{flushSync:Q.flushSync===!0});let ee,G=sp(W,O);if(!G.route.action&&!G.route.lazy)ee={type:We.error,error:_n(405,{method:x.method,pathname:O.pathname,routeId:G.route.id})};else if(ee=(await dr("action",x,[G],W))[0],x.signal.aborted)return{shortCircuited:!0};if(Zi(ee)){let oe;return Q&&Q.replace!=null?oe=Q.replace:oe=nv(ee.response.headers.get("Location"),new URL(x.url),u)===g.location.pathname+g.location.search,await Ui(x,ee,{submission:V,replace:oe}),{shortCircuited:!0}}if(Ji(ee))throw _n(400,{type:"defer-action"});if(wn(ee)){let oe=Qa(W,G.route.id);return(Q&&Q.replace)!==!0&&(y=nt.Push),{pendingActionResult:[oe.route.id,ee]}}return{pendingActionResult:[G.route.id,ee]}}async function id(x,O,V,W,Q,Z,ee,G,oe,ae){let lt=W||Bd(O,Q),ze=Q||Z||cv(lt),re=a||o,[xe,$e]=Zy(t.history,g,V,ze,O,d.v7_partialHydration&&G===!0,d.unstable_skipActionErrorRevalidation,yt,$n,Jt,at,Ae,de,re,u,ae);if(Ms(fe=>!(V&&V.some(Tt=>Tt.route.id===fe))||xe&&xe.some(Tt=>Tt.route.id===fe)),se=++ne,xe.length===0&&$e.length===0){let fe=ra();return hr(O,qe({matches:V,loaderData:{},errors:ae&&wn(ae[1])?{[ae[0]]:ae[1].error}:null},ov(ae),fe?{fetchers:new Map(g.fetchers)}:{}),{flushSync:oe}),{shortCircuited:!0}}if(!Pe&&(!d.v7_partialHydration||!G)){$e.forEach(Tt=>{let It=g.fetchers.get(Tt.key),et=Sa(void 0,It?It.data:void 0);g.fetchers.set(Tt.key,et)});let fe;ae&&!wn(ae[1])?fe={[ae[0]]:ae[1].data}:g.actionData&&(Object.keys(g.actionData).length===0?fe=null:fe=g.actionData),Et(qe({navigation:lt},fe!==void 0?{actionData:fe}:{},$e.length>0?{fetchers:new Map(g.fetchers)}:{}),{flushSync:oe})}$e.forEach(fe=>{H.has(fe.key)&&Kn(fe.key),fe.controller&&H.set(fe.key,fe.controller)});let $r=()=>$e.forEach(fe=>Kn(fe.key));I&&I.signal.addEventListener("abort",$r);let{loaderResults:gn,fetcherResults:Pn}=await Ds(g.matches,V,xe,$e,x);if(x.signal.aborted)return{shortCircuited:!0};I&&I.signal.removeEventListener("abort",$r),$e.forEach(fe=>H.delete(fe.key));let Kt=lv([...gn,...Pn]);if(Kt){if(Kt.idx>=xe.length){let fe=$e[Kt.idx-xe.length].key;de.add(fe)}return await Ui(x,Kt.result,{replace:ee}),{shortCircuited:!0}}let{loaderData:pr,errors:on}=iv(g,V,xe,gn,ae,$e,Pn,vt);vt.forEach((fe,Tt)=>{fe.subscribe(It=>{(It||fe.done)&&vt.delete(Tt)})}),d.v7_partialHydration&&G&&g.errors&&Object.entries(g.errors).filter(fe=>{let[Tt]=fe;return!xe.some(It=>It.route.id===Tt)}).forEach(fe=>{let[Tt,It]=fe;on=Object.assign(on||{},{[Tt]:It})});let qr=ra(),Kr=ia(se),zi=qr||Kr||$e.length>0;return qe({loaderData:pr,errors:on},zi?{fetchers:new Map(g.fetchers)}:{})}function lu(x,O,V,W){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");H.has(x)&&Kn(x);let Q=(W&&W.unstable_flushSync)===!0,Z=a||o,ee=rp(g.location,g.matches,u,d.v7_prependBasename,V,d.v7_relativeSplatPath,O,W==null?void 0:W.relative),G=so(Z,ee,u);if(!G){Je(x,O,_n(404,{pathname:ee}),{flushSync:Q});return}let{path:oe,submission:ae,error:lt}=Jy(d.v7_normalizeFormMethod,!0,ee,W);if(lt){Je(x,O,lt,{flushSync:Q});return}let ze=sp(G,oe);if(w=(W&&W.preventScrollReset)===!0,ae&&On(ae.formMethod)){na(x,O,oe,ze,G,Q,ae);return}Ae.set(x,{routeId:O,path:oe}),uu(x,O,oe,ze,G,Q,ae)}async function na(x,O,V,W,Q,Z,ee){if(bs(),Ae.delete(x),!W.route.action&&!W.route.lazy){let et=_n(405,{method:ee.formMethod,pathname:V,routeId:O});Je(x,O,et,{flushSync:Z});return}let G=g.fetchers.get(x);Oe(x,pP(ee,G),{flushSync:Z});let oe=new AbortController,ae=zs(t.history,V,oe.signal,ee);H.set(x,oe);let lt=ne,re=(await dr("action",ae,[W],Q))[0];if(ae.signal.aborted){H.get(x)===oe&&H.delete(x);return}if(d.v7_fetcherPersist&&at.has(x)){if(Zi(re)||wn(re)){Oe(x,Zr(void 0));return}}else{if(Zi(re))if(H.delete(x),se>lt){Oe(x,Zr(void 0));return}else return de.add(x),Oe(x,Sa(ee)),Ui(ae,re,{fetcherSubmission:ee});if(wn(re)){Je(x,O,re.error);return}}if(Ji(re))throw _n(400,{type:"defer-action"});let xe=g.navigation.location||g.location,$e=zs(t.history,xe,oe.signal),$r=a||o,gn=g.navigation.state!=="idle"?so($r,g.navigation.location,u):g.matches;he(gn,"Didn't find any matches after fetcher action");let Pn=++ne;Se.set(x,Pn);let Kt=Sa(ee,re.data);g.fetchers.set(x,Kt);let[pr,on]=Zy(t.history,g,gn,ee,xe,!1,d.unstable_skipActionErrorRevalidation,yt,$n,Jt,at,Ae,de,$r,u,[W.route.id,re]);on.filter(et=>et.key!==x).forEach(et=>{let mr=et.key,Gr=g.fetchers.get(mr),gr=Sa(void 0,Gr?Gr.data:void 0);g.fetchers.set(mr,gr),H.has(mr)&&Kn(mr),et.controller&&H.set(mr,et.controller)}),Et({fetchers:new Map(g.fetchers)});let qr=()=>on.forEach(et=>Kn(et.key));oe.signal.addEventListener("abort",qr);let{loaderResults:Kr,fetcherResults:zi}=await Ds(g.matches,gn,pr,on,$e);if(oe.signal.aborted)return;oe.signal.removeEventListener("abort",qr),Se.delete(x),H.delete(x),on.forEach(et=>H.delete(et.key));let fe=lv([...Kr,...zi]);if(fe){if(fe.idx>=pr.length){let et=on[fe.idx-pr.length].key;de.add(et)}return Ui($e,fe.result)}let{loaderData:Tt,errors:It}=iv(g,g.matches,pr,Kr,void 0,on,zi,vt);if(g.fetchers.has(x)){let et=Zr(re.data);g.fetchers.set(x,et)}ia(Pn),g.navigation.state==="loading"&&Pn>se?(he(y,"Expected pending action"),I&&I.abort(),hr(g.navigation.location,{matches:gn,loaderData:Tt,errors:It,fetchers:new Map(g.fetchers)})):(Et({errors:It,loaderData:sv(g.loaderData,Tt,gn,It),fetchers:new Map(g.fetchers)}),yt=!1)}async function uu(x,O,V,W,Q,Z,ee){let G=g.fetchers.get(x);Oe(x,Sa(ee,G?G.data:void 0),{flushSync:Z});let oe=new AbortController,ae=zs(t.history,V,oe.signal);H.set(x,oe);let lt=ne,re=(await dr("loader",ae,[W],Q))[0];if(Ji(re)&&(re=await bT(re,ae.signal,!0)||re),H.get(x)===oe&&H.delete(x),!ae.signal.aborted){if(at.has(x)){Oe(x,Zr(void 0));return}if(Zi(re))if(se>lt){Oe(x,Zr(void 0));return}else{de.add(x),await Ui(ae,re);return}if(wn(re)){Je(x,O,re.error);return}he(!Ji(re),"Unhandled fetcher deferred data"),Oe(x,Zr(re.data))}}async function Ui(x,O,V){let{submission:W,fetcherSubmission:Q,replace:Z}=V===void 0?{}:V;O.response.headers.has("X-Remix-Revalidate")&&(yt=!0);let ee=O.response.headers.get("Location");he(ee,"Expected a Location header on the redirect Response"),ee=nv(ee,new URL(x.url),u);let G=Tl(g.location,ee,{_isRedirect:!0});if(n){let xe=!1;if(O.response.headers.has("X-Remix-Reload-Document"))xe=!0;else if(Wm.test(ee)){const $e=t.history.createURL(ee);xe=$e.origin!==e.location.origin||Ri($e.pathname,u)==null}if(xe){Z?e.location.replace(ee):e.location.assign(ee);return}}I=null;let oe=Z===!0?nt.Replace:nt.Push,{formMethod:ae,formAction:lt,formEncType:ze}=g.navigation;!W&&!Q&&ae&&lt&&ze&&(W=cv(g.navigation));let re=W||Q;if(Yk.has(O.response.status)&&re&&On(re.formMethod))await qn(oe,G,{submission:qe({},re,{formAction:ee}),preventScrollReset:w});else{let xe=Bd(G,W);await qn(oe,G,{overrideNavigation:xe,fetcherSubmission:Q,preventScrollReset:w})}}async function dr(x,O,V,W){try{let Q=await iP(c,x,O,V,W,s,i);return await Promise.all(Q.map((Z,ee)=>{if(cP(Z)){let G=Z.result;return{type:We.redirect,response:aP(G,O,V[ee].route.id,W,u,d.v7_relativeSplatPath)}}return oP(Z)}))}catch(Q){return V.map(()=>({type:We.error,error:Q}))}}async function Ds(x,O,V,W,Q){let[Z,...ee]=await Promise.all([V.length?dr("loader",Q,V,O):[],...W.map(G=>{if(G.matches&&G.match&&G.controller){let oe=zs(t.history,G.path,G.controller.signal);return dr("loader",oe,[G.match],G.matches).then(ae=>ae[0])}else return Promise.resolve({type:We.error,error:_n(404,{pathname:G.path})})})]);return await Promise.all([uv(x,V,Z,Z.map(()=>Q.signal),!1,g.loaderData),uv(x,W.map(G=>G.match),ee,W.map(G=>G.controller?G.controller.signal:null),!0)]),{loaderResults:Z,fetcherResults:ee}}function bs(){yt=!0,$n.push(...Ms()),Ae.forEach((x,O)=>{H.has(O)&&(Jt.push(O),Kn(O))})}function Oe(x,O,V){V===void 0&&(V={}),g.fetchers.set(x,O),Et({fetchers:new Map(g.fetchers)},{flushSync:(V&&V.flushSync)===!0})}function Je(x,O,V,W){W===void 0&&(W={});let Q=Qa(g.matches,O);Bi(x),Et({errors:{[Q.route.id]:V},fetchers:new Map(g.fetchers)},{flushSync:(W&&W.flushSync)===!0})}function ji(x){return d.v7_fetcherPersist&&(qt.set(x,(qt.get(x)||0)+1),at.has(x)&&at.delete(x)),g.fetchers.get(x)||Xk}function Bi(x){let O=g.fetchers.get(x);H.has(x)&&!(O&&O.state==="loading"&&Se.has(x))&&Kn(x),Ae.delete(x),Se.delete(x),de.delete(x),at.delete(x),g.fetchers.delete(x)}function cu(x){if(d.v7_fetcherPersist){let O=(qt.get(x)||0)-1;O<=0?(qt.delete(x),at.add(x)):qt.set(x,O)}else Bi(x);Et({fetchers:new Map(g.fetchers)})}function Kn(x){let O=H.get(x);he(O,"Expected fetch controller: "+x),O.abort(),H.delete(x)}function Wr(x){for(let O of x){let V=ji(O),W=Zr(V.data);g.fetchers.set(O,W)}}function ra(){let x=[],O=!1;for(let V of de){let W=g.fetchers.get(V);he(W,"Expected fetcher: "+V),W.state==="loading"&&(de.delete(V),x.push(V),O=!0)}return Wr(x),O}function ia(x){let O=[];for(let[V,W]of Se)if(W<x){let Q=g.fetchers.get(V);he(Q,"Expected fetcher: "+V),Q.state==="loading"&&(Kn(V),Se.delete(V),O.push(V))}return Wr(O),O.length>0}function sa(x,O){let V=g.blockers.get(x)||Ia;return wt.get(x)!==O&&wt.set(x,O),V}function hu(x){g.blockers.delete(x),wt.delete(x)}function Os(x,O){let V=g.blockers.get(x)||Ia;he(V.state==="unblocked"&&O.state==="blocked"||V.state==="blocked"&&O.state==="blocked"||V.state==="blocked"&&O.state==="proceeding"||V.state==="blocked"&&O.state==="unblocked"||V.state==="proceeding"&&O.state==="unblocked","Invalid blocker state transition: "+V.state+" -> "+O.state);let W=new Map(g.blockers);W.set(x,O),Et({blockers:W})}function Ls(x){let{currentLocation:O,nextLocation:V,historyAction:W}=x;if(wt.size===0)return;wt.size>1&&Po(!1,"A router only supports one blocker at a time");let Q=Array.from(wt.entries()),[Z,ee]=Q[Q.length-1],G=g.blockers.get(Z);if(!(G&&G.state==="proceeding")&&ee({currentLocation:O,nextLocation:V,historyAction:W}))return Z}function Ms(x){let O=[];return vt.forEach((V,W)=>{(!x||x(W))&&(V.cancel(),O.push(W),vt.delete(W))}),O}function du(x,O,V){if(T=x,A=O,R=V||null,!P&&g.navigation===jd){P=!0;let W=Vs(g.location,g.matches);W!=null&&Et({restoreScrollPosition:W})}return()=>{T=null,A=null,R=null}}function Hr(x,O){return R&&R(x,O.map(W=>Ak(W,g.loaderData)))||x.key}function oa(x,O){if(T&&A){let V=Hr(x,O);T[V]=A()}}function Vs(x,O){if(T){let V=Hr(x,O),W=T[V];if(typeof W=="number")return W}return null}function fr(x){s={},a=np(x,i,void 0,s)}return $={get basename(){return u},get future(){return d},get state(){return g},get routes(){return o},get window(){return e},initialize:nd,subscribe:Ns,enableScrollRestoration:du,navigate:xs,fetch:lu,revalidate:ta,createHref:x=>t.history.createHref(x),encodeLocation:x=>t.history.encodeLocation(x),getFetcher:ji,deleteFetcher:cu,dispose:Ps,getBlocker:sa,deleteBlocker:hu,_internalFetchControllers:H,_internalActiveDeferreds:vt,_internalSetRoutes:fr},$}function eP(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function rp(t,e,n,r,i,s,o,a){let u,c;if(o){u=[];for(let f of e)if(u.push(f),f.route.id===o){c=f;break}}else u=e,c=e[e.length-1];let d=jm(i||".",Um(u,s),Ri(t.pathname,n)||t.pathname,a==="path");return i==null&&(d.search=t.search,d.hash=t.hash),(i==null||i===""||i===".")&&c&&c.route.index&&!Hm(d.search)&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(d.pathname=d.pathname==="/"?n:nr([n,d.pathname])),Ci(d)}function Jy(t,e,n,r){if(!r||!eP(r))return{path:n};if(r.formMethod&&!dP(r.formMethod))return{path:n,error:_n(405,{method:r.formMethod})};let i=()=>({path:n,error:_n(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),a=xT(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!On(o))return i();let m=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((T,R)=>{let[A,P]=R;return""+T+A+"="+P+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:m}}}else if(r.formEncType==="application/json"){if(!On(o))return i();try{let m=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:m,text:void 0}}}catch{return i()}}}he(typeof FormData=="function","FormData is not available in this environment");let u,c;if(r.formData)u=ip(r.formData),c=r.formData;else if(r.body instanceof FormData)u=ip(r.body),c=r.body;else if(r.body instanceof URLSearchParams)u=r.body,c=rv(u);else if(r.body==null)u=new URLSearchParams,c=new FormData;else try{u=new URLSearchParams(r.body),c=rv(u)}catch{return i()}let d={formMethod:o,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:c,json:void 0,text:void 0};if(On(d.formMethod))return{path:n,submission:d};let f=Li(n);return e&&f.search&&Hm(f.search)&&u.append("index",""),f.search="?"+u,{path:Ci(f),submission:d}}function tP(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function Zy(t,e,n,r,i,s,o,a,u,c,d,f,m,T,R,A){let P=A?wn(A[1])?A[1].error:A[1].data:void 0,E=t.createURL(e.location),v=t.createURL(i),S=A&&wn(A[1])?A[0]:void 0,L=S?tP(n,S):n,B=A?A[1].statusCode:void 0,$=o&&B&&B>=400,g=L.filter((w,I)=>{let{route:k}=w;if(k.lazy)return!0;if(k.loader==null)return!1;if(s)return typeof k.loader!="function"||k.loader.hydrate?!0:e.loaderData[k.id]===void 0&&(!e.errors||e.errors[k.id]===void 0);if(nP(e.loaderData,e.matches[I],w)||u.some(Pe=>Pe===w.route.id))return!0;let N=e.matches[I],C=w;return ev(w,qe({currentUrl:E,currentParams:N.params,nextUrl:v,nextParams:C.params},r,{actionResult:P,unstable_actionStatus:B,defaultShouldRevalidate:$?!1:a||E.pathname+E.search===v.pathname+v.search||E.search!==v.search||NT(N,C)}))}),y=[];return f.forEach((w,I)=>{if(s||!n.some(yt=>yt.route.id===w.routeId)||d.has(I))return;let k=so(T,w.path,R);if(!k){y.push({key:I,routeId:w.routeId,path:w.path,matches:null,match:null,controller:null});return}let N=e.fetchers.get(I),C=sp(k,w.path),Pe=!1;m.has(I)?Pe=!1:c.includes(I)?Pe=!0:N&&N.state!=="idle"&&N.data===void 0?Pe=a:Pe=ev(C,qe({currentUrl:E,currentParams:e.matches[e.matches.length-1].params,nextUrl:v,nextParams:n[n.length-1].params},r,{actionResult:P,unstable_actionStatus:B,defaultShouldRevalidate:$?!1:a})),Pe&&y.push({key:I,routeId:w.routeId,path:w.path,matches:k,match:C,controller:new AbortController})}),[g,y]}function nP(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function NT(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function ev(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function tv(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];he(i,"No route found in manifest");let s={};for(let o in r){let u=i[o]!==void 0&&o!=="hasErrorBoundary";Po(!u,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!u&&!Ck.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,qe({},e(i),{lazy:void 0}))}function rP(t){return Promise.all(t.matches.map(e=>e.resolve()))}async function iP(t,e,n,r,i,s,o,a){let u=r.reduce((f,m)=>f.add(m.route.id),new Set),c=new Set,d=await t({matches:i.map(f=>{let m=u.has(f.route.id);return qe({},f,{shouldLoad:m,resolve:R=>(c.add(f.route.id),m?sP(e,n,f,s,o,R,a):Promise.resolve({type:We.data,result:void 0}))})}),request:n,params:i[0].params,context:a});return i.forEach(f=>he(c.has(f.route.id),'`match.resolve()` was not called for route id "'+f.route.id+'". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.')),d.filter((f,m)=>u.has(i[m].route.id))}async function sP(t,e,n,r,i,s,o){let a,u,c=d=>{let f,m=new Promise((A,P)=>f=P);u=()=>f(),e.signal.addEventListener("abort",u);let T=A=>typeof d!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+t+'" [routeId: '+n.route.id+"]"))):d({request:e,params:n.params,context:o},...A!==void 0?[A]:[]),R;return s?R=s(A=>T(A)):R=(async()=>{try{return{type:"data",result:await T()}}catch(A){return{type:"error",result:A}}})(),Promise.race([R,m])};try{let d=n.route[t];if(n.route.lazy)if(d){let f,[m]=await Promise.all([c(d).catch(T=>{f=T}),tv(n.route,i,r)]);if(f!==void 0)throw f;a=m}else if(await tv(n.route,i,r),d=n.route[t],d)a=await c(d);else if(t==="action"){let f=new URL(e.url),m=f.pathname+f.search;throw _n(405,{method:e.method,pathname:m,routeId:n.route.id})}else return{type:We.data,result:void 0};else if(d)a=await c(d);else{let f=new URL(e.url),m=f.pathname+f.search;throw _n(404,{pathname:m})}he(a.result!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(d){return{type:We.error,result:d}}finally{u&&e.signal.removeEventListener("abort",u)}return a}async function oP(t){let{result:e,type:n,status:r}=t;if(DT(e)){let o;try{let a=e.headers.get("Content-Type");a&&/\bapplication\/json\b/.test(a)?e.body==null?o=null:o=await e.json():o=await e.text()}catch(a){return{type:We.error,error:a}}return n===We.error?{type:We.error,error:new Bm(e.status,e.statusText,o),statusCode:e.status,headers:e.headers}:{type:We.data,data:o,statusCode:e.status,headers:e.headers}}if(n===We.error)return{type:We.error,error:e,statusCode:zm(e)?e.status:r};if(hP(e)){var i,s;return{type:We.deferred,deferredData:e,statusCode:(i=e.init)==null?void 0:i.status,headers:((s=e.init)==null?void 0:s.headers)&&new Headers(e.init.headers)}}return{type:We.data,data:e,statusCode:r}}function aP(t,e,n,r,i,s){let o=t.headers.get("Location");if(he(o,"Redirects returned/thrown from loaders/actions must have a Location header"),!Wm.test(o)){let a=r.slice(0,r.findIndex(u=>u.route.id===n)+1);o=rp(new URL(e.url),a,i,!0,o,s),t.headers.set("Location",o)}return t}function nv(t,e,n){if(Wm.test(t)){let r=t,i=r.startsWith("//")?new URL(e.protocol+r):new URL(r),s=Ri(i.pathname,n)!=null;if(i.origin===e.origin&&s)return i.pathname+i.search+i.hash}return t}function zs(t,e,n,r){let i=t.createURL(xT(e)).toString(),s={signal:n};if(r&&On(r.formMethod)){let{formMethod:o,formEncType:a}=r;s.method=o.toUpperCase(),a==="application/json"?(s.headers=new Headers({"Content-Type":a}),s.body=JSON.stringify(r.json)):a==="text/plain"?s.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?s.body=ip(r.formData):s.body=r.formData}return new Request(i,s)}function ip(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function rv(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function lP(t,e,n,r,i,s){let o={},a=null,u,c=!1,d={},f=r&&wn(r[1])?r[1].error:void 0;return n.forEach((m,T)=>{let R=e[T].route.id;if(he(!Zi(m),"Cannot handle redirect results in processLoaderData"),wn(m)){let A=m.error;f!==void 0&&(A=f,f=void 0),a=a||{};{let P=Qa(t,R);a[P.route.id]==null&&(a[P.route.id]=A)}o[R]=void 0,c||(c=!0,u=zm(m.error)?m.error.status:500),m.headers&&(d[R]=m.headers)}else Ji(m)?(i.set(R,m.deferredData),o[R]=m.deferredData.data,m.statusCode!=null&&m.statusCode!==200&&!c&&(u=m.statusCode),m.headers&&(d[R]=m.headers)):(o[R]=m.data,m.statusCode&&m.statusCode!==200&&!c&&(u=m.statusCode),m.headers&&(d[R]=m.headers))}),f!==void 0&&r&&(a={[r[0]]:f},o[r[0]]=void 0),{loaderData:o,errors:a,statusCode:u||200,loaderHeaders:d}}function iv(t,e,n,r,i,s,o,a){let{loaderData:u,errors:c}=lP(e,n,r,i,a);for(let d=0;d<s.length;d++){let{key:f,match:m,controller:T}=s[d];he(o!==void 0&&o[d]!==void 0,"Did not find corresponding fetcher result");let R=o[d];if(!(T&&T.signal.aborted))if(wn(R)){let A=Qa(t.matches,m==null?void 0:m.route.id);c&&c[A.route.id]||(c=qe({},c,{[A.route.id]:R.error})),t.fetchers.delete(f)}else if(Zi(R))he(!1,"Unhandled fetcher revalidation redirect");else if(Ji(R))he(!1,"Unhandled fetcher deferred data");else{let A=Zr(R.data);t.fetchers.set(f,A)}}return{loaderData:u,errors:c}}function sv(t,e,n,r){let i=qe({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function ov(t){return t?wn(t[1])?{actionData:{}}:{actionData:{[t[0]]:t[1].data}}:{}}function Qa(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function av(t){let e=t.length===1?t[0]:t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function _n(t,e){let{pathname:n,routeId:r,method:i,type:s}=e===void 0?{}:e,o="Unknown Server Error",a="Unknown @remix-run/router error";return t===400?(o="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?a="defer() is not supported in actions":s==="invalid-body"&&(a="Unable to encode submission body")):t===403?(o="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):t===404?(o="Not Found",a='No route matches URL "'+n+'"'):t===405&&(o="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new Bm(t||500,o,new Error(a),!0)}function lv(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(Zi(n))return{result:n,idx:e}}}function xT(t){let e=typeof t=="string"?Li(t):t;return Ci(qe({},e,{hash:""}))}function uP(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function cP(t){return DT(t.result)&&Qk.has(t.result.status)}function Ji(t){return t.type===We.deferred}function wn(t){return t.type===We.error}function Zi(t){return(t&&t.type)===We.redirect}function hP(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function DT(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function dP(t){return Gk.has(t.toLowerCase())}function On(t){return qk.has(t.toLowerCase())}async function uv(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],u=e[o];if(!u)continue;let c=t.find(f=>f.route.id===u.route.id),d=c!=null&&!NT(c,u)&&(s&&s[u.route.id])!==void 0;if(Ji(a)&&(i||d)){let f=r[o];he(f,"Expected an AbortSignal for revalidating fetcher deferred result"),await bT(a,f,i).then(m=>{m&&(n[o]=m||n[o])})}}}async function bT(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:We.data,data:t.deferredData.unwrappedData}}catch(i){return{type:We.error,error:i}}return{type:We.data,data:t.deferredData.data}}}function Hm(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function sp(t,e){let n=typeof e=="string"?Li(e).search:e.search;if(t[t.length-1].route.index&&Hm(n||""))return t[t.length-1];let r=AT(t);return r[r.length-1]}function cv(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function Bd(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function fP(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function Sa(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function pP(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}function Zr(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function mP(t,e){try{let n=t.sessionStorage.getItem(PT);if(n){let r=JSON.parse(n);for(let[i,s]of Object.entries(r||{}))s&&Array.isArray(s)&&e.set(i,new Set(s||[]))}}catch{}}function gP(t,e){if(e.size>0){let n={};for(let[r,i]of e)n[r]=[...i];try{t.sessionStorage.setItem(PT,JSON.stringify(n))}catch(r){Po(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bc(){return Bc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Bc.apply(this,arguments)}const zl=F.createContext(null),OT=F.createContext(null),Ur=F.createContext(null),$m=F.createContext(null),Mi=F.createContext({outlet:null,matches:[],isDataRoute:!1}),LT=F.createContext(null);function _P(t,e){let{relative:n}=e===void 0?{}:e;Wl()||he(!1);let{basename:r,navigator:i}=F.useContext(Ur),{hash:s,pathname:o,search:a}=qm(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:nr([r,o])),i.createHref({pathname:u,search:a,hash:s})}function Wl(){return F.useContext($m)!=null}function Hl(){return Wl()||he(!1),F.useContext($m).location}function MT(t){F.useContext(Ur).static||F.useLayoutEffect(t)}function Nh(){let{isDataRoute:t}=F.useContext(Mi);return t?NP():yP()}function yP(){Wl()||he(!1);let t=F.useContext(zl),{basename:e,future:n,navigator:r}=F.useContext(Ur),{matches:i}=F.useContext(Mi),{pathname:s}=Hl(),o=JSON.stringify(Um(i,n.v7_relativeSplatPath)),a=F.useRef(!1);return MT(()=>{a.current=!0}),F.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=jm(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:nr([e,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[e,r,o,s,t])}function qm(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=F.useContext(Ur),{matches:i}=F.useContext(Mi),{pathname:s}=Hl(),o=JSON.stringify(Um(i,r.v7_relativeSplatPath));return F.useMemo(()=>jm(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function vP(t,e,n,r){Wl()||he(!1);let{navigator:i}=F.useContext(Ur),{matches:s}=F.useContext(Mi),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Hl(),d;d=c;let f=d.pathname||"/",m=f;if(u!=="/"){let A=u.replace(/^\//,"").split("/");m="/"+f.replace(/^\//,"").split("/").slice(A.length).join("/")}let T=so(t,{pathname:m});return SP(T&&T.map(A=>Object.assign({},A,{params:Object.assign({},a,A.params),pathname:nr([u,i.encodeLocation?i.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?u:nr([u,i.encodeLocation?i.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),s,n,r)}function wP(){let t=PP(),e=zm(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return F.createElement(F.Fragment,null,F.createElement("h2",null,"Unexpected Application Error!"),F.createElement("h3",{style:{fontStyle:"italic"}},e),n?F.createElement("pre",{style:i},n):null,null)}const EP=F.createElement(wP,null);class TP extends F.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?F.createElement(Mi.Provider,{value:this.props.routeContext},F.createElement(LT.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function IP(t){let{routeContext:e,match:n,children:r}=t,i=F.useContext(zl);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),F.createElement(Mi.Provider,{value:e},r)}function SP(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||he(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:m,errors:T}=n,R=f.route.loader&&m[f.route.id]===void 0&&(!T||T[f.route.id]===void 0);if(f.route.lazy||R){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,f,m)=>{let T,R=!1,A=null,P=null;n&&(T=a&&f.route.id?a[f.route.id]:void 0,A=f.route.errorElement||EP,u&&(c<0&&m===0?(xP("route-fallback"),R=!0,P=null):c===m&&(R=!0,P=f.route.hydrateFallbackElement||null)));let E=e.concat(o.slice(0,m+1)),v=()=>{let S;return T?S=A:R?S=P:f.route.Component?S=F.createElement(f.route.Component,null):f.route.element?S=f.route.element:S=d,F.createElement(IP,{match:f,routeContext:{outlet:d,matches:E,isDataRoute:n!=null},children:S})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?F.createElement(TP,{location:n.location,revalidation:n.revalidation,component:A,error:T,children:v(),routeContext:{outlet:null,matches:E,isDataRoute:!0}}):v()},null)}var VT=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(VT||{}),Il=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Il||{});function CP(t){let e=F.useContext(zl);return e||he(!1),e}function RP(t){let e=F.useContext(OT);return e||he(!1),e}function AP(t){let e=F.useContext(Mi);return e||he(!1),e}function Km(t){let e=AP(),n=e.matches[e.matches.length-1];return n.route.id||he(!1),n.route.id}function kP(){return Km(Il.UseRouteId)}function PP(){var t;let e=F.useContext(LT),n=RP(Il.UseRouteError),r=Km(Il.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function NP(){let{router:t}=CP(VT.UseNavigateStable),e=Km(Il.UseNavigateStable),n=F.useRef(!1);return MT(()=>{n.current=!0}),F.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Bc({fromRouteId:e},s)))},[t,e])}const hv={};function xP(t,e,n){hv[t]||(hv[t]=!0)}function DP(t){let{basename:e="/",children:n=null,location:r,navigationType:i=nt.Pop,navigator:s,static:o=!1,future:a}=t;Wl()&&he(!1);let u=e.replace(/^\/*/,"/"),c=F.useMemo(()=>({basename:u,navigator:s,static:o,future:Bc({v7_relativeSplatPath:!1},a)}),[u,a,s,o]);typeof r=="string"&&(r=Li(r));let{pathname:d="/",search:f="",hash:m="",state:T=null,key:R="default"}=r,A=F.useMemo(()=>{let P=Ri(d,u);return P==null?null:{location:{pathname:P,search:f,hash:m,state:T,key:R},navigationType:i}},[u,d,f,m,T,R,i]);return A==null?null:F.createElement(Ur.Provider,{value:c},F.createElement($m.Provider,{children:n,value:A}))}new Promise(()=>{});function bP(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:F.createElement(t.Component),Component:void 0}),t.HydrateFallback&&Object.assign(e,{hydrateFallbackElement:F.createElement(t.HydrateFallback),HydrateFallback:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:F.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function cs(){return cs=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},cs.apply(this,arguments)}function FT(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}const ac="get",zd="application/x-www-form-urlencoded";function xh(t){return t!=null&&typeof t.tagName=="string"}function OP(t){return xh(t)&&t.tagName.toLowerCase()==="button"}function LP(t){return xh(t)&&t.tagName.toLowerCase()==="form"}function MP(t){return xh(t)&&t.tagName.toLowerCase()==="input"}function VP(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function FP(t,e){return t.button===0&&(!e||e==="_self")&&!VP(t)}let ju=null;function UP(){if(ju===null)try{new FormData(document.createElement("form"),0),ju=!1}catch{ju=!0}return ju}const jP=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Wd(t){return t!=null&&!jP.has(t)?null:t}function BP(t,e){let n,r,i,s,o;if(LP(t)){let a=t.getAttribute("action");r=a?Ri(a,e):null,n=t.getAttribute("method")||ac,i=Wd(t.getAttribute("enctype"))||zd,s=new FormData(t)}else if(OP(t)||MP(t)&&(t.type==="submit"||t.type==="image")){let a=t.form;if(a==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let u=t.getAttribute("formaction")||a.getAttribute("action");if(r=u?Ri(u,e):null,n=t.getAttribute("formmethod")||a.getAttribute("method")||ac,i=Wd(t.getAttribute("formenctype"))||Wd(a.getAttribute("enctype"))||zd,s=new FormData(a,t),!UP()){let{name:c,type:d,value:f}=t;if(d==="image"){let m=c?c+".":"";s.append(m+"x","0"),s.append(m+"y","0")}else c&&s.append(c,f)}}else{if(xh(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=ac,r=null,i=zd,o=t}return s&&i==="text/plain"&&(o=s,s=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:s,body:o}}const zP=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],WP=["fetcherKey","navigate","reloadDocument","replace","state","method","action","onSubmit","relative","preventScrollReset","unstable_viewTransition"],HP="6";try{window.__reactRouterVersion=HP}catch{}function $P(t,e){return Zk({basename:void 0,future:cs({},void 0,{v7_prependBasename:!0}),history:Tk({window:void 0}),hydrationData:qP(),routes:t,mapRouteProperties:bP,unstable_dataStrategy:void 0,window:void 0}).initialize()}function qP(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=cs({},e,{errors:KP(e.errors)})),e}function KP(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new Bm(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const GP=F.createContext({isTransitioning:!1}),QP=F.createContext(new Map),YP="startTransition",dv=uA[YP],XP="flushSync",fv=Ek[XP];function JP(t){dv?dv(t):t()}function Ca(t){fv?fv(t):t()}let ZP=class{constructor(){this.status="pending",this.promise=new Promise((e,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",e(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}};function eN(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=F.useState(n.state),[o,a]=F.useState(),[u,c]=F.useState({isTransitioning:!1}),[d,f]=F.useState(),[m,T]=F.useState(),[R,A]=F.useState(),P=F.useRef(new Map),{v7_startTransition:E}=r||{},v=F.useCallback(g=>{E?JP(g):g()},[E]),S=F.useCallback((g,y)=>{let{deletedFetchers:w,unstable_flushSync:I,unstable_viewTransitionOpts:k}=y;w.forEach(C=>P.current.delete(C)),g.fetchers.forEach((C,Pe)=>{C.data!==void 0&&P.current.set(Pe,C.data)});let N=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!k||N){I?Ca(()=>s(g)):v(()=>s(g));return}if(I){Ca(()=>{m&&(d&&d.resolve(),m.skipTransition()),c({isTransitioning:!0,flushSync:!0,currentLocation:k.currentLocation,nextLocation:k.nextLocation})});let C=n.window.document.startViewTransition(()=>{Ca(()=>s(g))});C.finished.finally(()=>{Ca(()=>{f(void 0),T(void 0),a(void 0),c({isTransitioning:!1})})}),Ca(()=>T(C));return}m?(d&&d.resolve(),m.skipTransition(),A({state:g,currentLocation:k.currentLocation,nextLocation:k.nextLocation})):(a(g),c({isTransitioning:!0,flushSync:!1,currentLocation:k.currentLocation,nextLocation:k.nextLocation}))},[n.window,m,d,P,v]);F.useLayoutEffect(()=>n.subscribe(S),[n,S]),F.useEffect(()=>{u.isTransitioning&&!u.flushSync&&f(new ZP)},[u]),F.useEffect(()=>{if(d&&o&&n.window){let g=o,y=d.promise,w=n.window.document.startViewTransition(async()=>{v(()=>s(g)),await y});w.finished.finally(()=>{f(void 0),T(void 0),a(void 0),c({isTransitioning:!1})}),T(w)}},[v,o,d,n.window]),F.useEffect(()=>{d&&o&&i.location.key===o.location.key&&d.resolve()},[d,m,i.location,o]),F.useEffect(()=>{!u.isTransitioning&&R&&(a(R.state),c({isTransitioning:!0,flushSync:!1,currentLocation:R.currentLocation,nextLocation:R.nextLocation}),A(void 0))},[u.isTransitioning,R]),F.useEffect(()=>{},[]);let L=F.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:g=>n.navigate(g),push:(g,y,w)=>n.navigate(g,{state:y,preventScrollReset:w==null?void 0:w.preventScrollReset}),replace:(g,y,w)=>n.navigate(g,{replace:!0,state:y,preventScrollReset:w==null?void 0:w.preventScrollReset})}),[n]),B=n.basename||"/",$=F.useMemo(()=>({router:n,navigator:L,static:!1,basename:B}),[n,L,B]);return F.createElement(F.Fragment,null,F.createElement(zl.Provider,{value:$},F.createElement(OT.Provider,{value:i},F.createElement(QP.Provider,{value:P.current},F.createElement(GP.Provider,{value:u},F.createElement(DP,{basename:B,location:i.location,navigationType:i.historyAction,navigator:L,future:{v7_relativeSplatPath:n.future.v7_relativeSplatPath}},i.initialized||n.future.v7_partialHydration?F.createElement(tN,{routes:n.routes,future:n.future,state:i}):e))))),null)}function tN(t){let{routes:e,future:n,state:r}=t;return vP(e,void 0,r,n)}const nN=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",rN=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,UT=F.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:u,to:c,preventScrollReset:d,unstable_viewTransition:f}=e,m=FT(e,zP),{basename:T}=F.useContext(Ur),R,A=!1;if(typeof c=="string"&&rN.test(c)&&(R=c,nN))try{let S=new URL(window.location.href),L=c.startsWith("//")?new URL(S.protocol+c):new URL(c),B=Ri(L.pathname,T);L.origin===S.origin&&B!=null?c=B+L.search+L.hash:A=!0}catch{}let P=_P(c,{relative:i}),E=sN(c,{replace:o,state:a,target:u,preventScrollReset:d,relative:i,unstable_viewTransition:f});function v(S){r&&r(S),S.defaultPrevented||E(S)}return F.createElement("a",cs({},m,{href:R||P,onClick:A||s?r:v,ref:n,target:u}))}),jT=F.forwardRef((t,e)=>{let{fetcherKey:n,navigate:r,reloadDocument:i,replace:s,state:o,method:a=ac,action:u,onSubmit:c,relative:d,preventScrollReset:f,unstable_viewTransition:m}=t,T=FT(t,WP),R=uN(),A=cN(u,{relative:d}),P=a.toLowerCase()==="get"?"get":"post",E=v=>{if(c&&c(v),v.defaultPrevented)return;v.preventDefault();let S=v.nativeEvent.submitter,L=(S==null?void 0:S.getAttribute("formmethod"))||a;R(S||v.currentTarget,{fetcherKey:n,method:L,navigate:r,replace:s,state:o,relative:d,preventScrollReset:f,unstable_viewTransition:m})};return F.createElement("form",cs({ref:e,method:P,action:A,onSubmit:i?c:E},T))});var op;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(op||(op={}));var pv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(pv||(pv={}));function iN(t){let e=F.useContext(zl);return e||he(!1),e}function sN(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,u=Nh(),c=Hl(),d=qm(t,{relative:o});return F.useCallback(f=>{if(FP(f,n)){f.preventDefault();let m=r!==void 0?r:Ci(c)===Ci(d);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[c,u,d,r,i,n,t,s,o,a])}function oN(){if(typeof document>"u")throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.")}let aN=0,lN=()=>"__"+String(++aN)+"__";function uN(){let{router:t}=iN(op.UseSubmit),{basename:e}=F.useContext(Ur),n=kP();return F.useCallback(function(r,i){i===void 0&&(i={}),oN();let{action:s,method:o,encType:a,formData:u,body:c}=BP(r,e);if(i.navigate===!1){let d=i.fetcherKey||lN();t.fetch(d,n,i.action||s,{preventScrollReset:i.preventScrollReset,formData:u,body:c,formMethod:i.method||o,formEncType:i.encType||a,unstable_flushSync:i.unstable_flushSync})}else t.navigate(i.action||s,{preventScrollReset:i.preventScrollReset,formData:u,body:c,formMethod:i.method||o,formEncType:i.encType||a,replace:i.replace,state:i.state,fromRouteId:n,unstable_flushSync:i.unstable_flushSync,unstable_viewTransition:i.unstable_viewTransition})},[t,e,n])}function cN(t,e){let{relative:n}=e===void 0?{}:e,{basename:r}=F.useContext(Ur),i=F.useContext(Mi);i||he(!1);let[s]=i.matches.slice(-1),o=cs({},qm(t||".",{relative:n})),a=Hl();if(t==null){o.search=a.search;let u=new URLSearchParams(o.search);u.has("index")&&u.get("index")===""&&(u.delete("index"),o.search=u.toString()?"?"+u.toString():"")}return(!t||t===".")&&s.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(o.pathname=o.pathname==="/"?r:nr([r,o.pathname])),Ci(o)}var mv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BT={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K=function(t,e){if(!t)throw Wo(e)},Wo=function(t){return new Error("Firebase Database ("+BT.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},hN=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Gm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,f=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,T=c&63;u||(T=64,o||(m=64)),r.push(n[d],n[f],n[m],n[T])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(zT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):hN(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new dN;const m=s<<2|a>>4;if(r.push(m),c!==64){const T=a<<4&240|c>>2;if(r.push(T),f!==64){const R=c<<6&192|f;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class dN extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const WT=function(t){const e=zT(t);return Gm.encodeByteArray(e,!0)},zc=function(t){return WT(t).replace(/\./g,"")},Wc=function(t){try{return Gm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fN(t){return HT(void 0,t)}function HT(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!pN(n)||(t[n]=HT(t[n],e[n]));return t}function pN(t){return t!=="__proto__"}/**
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
 */function mN(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const gN=()=>mN().__FIREBASE_DEFAULTS__,_N=()=>{if(typeof process>"u"||typeof mv>"u")return;const t=mv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},yN=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Wc(t[1]);return e&&JSON.parse(e)},Dh=()=>{try{return gN()||_N()||yN()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},$T=t=>{var e,n;return(n=(e=Dh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},vN=t=>{const e=$T(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},qT=()=>{var t;return(t=Dh())===null||t===void 0?void 0:t.config},KT=t=>{var e;return(e=Dh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function wN(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[zc(JSON.stringify(n)),zc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ym(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xt())}function EN(){var t;const e=(t=Dh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function TN(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function GT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function IN(){const t=xt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function QT(){return BT.NODE_ADMIN===!0}function SN(){return!EN()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function CN(){try{return typeof indexedDB=="object"}catch{return!1}}function RN(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AN="FirebaseError";class jr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=AN,Object.setPrototypeOf(this,jr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$l.prototype.create)}}class $l{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?kN(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new jr(i,a,r)}}function kN(t,e){return t.replace(PN,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const PN=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(t){return JSON.parse(t)}function Rt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YT=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Sl(Wc(s[0])||""),n=Sl(Wc(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},NN=function(t){const e=YT(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},xN=function(t){const e=YT(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Br(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function No(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ap(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Hc(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function $c(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(gv(s)&&gv(o)){if(!$c(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function gv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ho(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function La(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ma(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const m=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(m<<1|m>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],u=this.chain_[4],c,d;for(let f=0;f<80;f++){f<40?f<20?(c=a^s&(o^a),d=1518500249):(c=s^o^a,d=1859775393):f<60?(c=s&o|a&(s|o),d=2400959708):(c=s^o^a,d=3395469782);const m=(i<<5|i>>>27)+c+u+d+r[f]&4294967295;u=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=m}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function bN(t,e){const n=new ON(t,e);return n.subscribe.bind(n)}class ON{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");LN(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Hd),i.error===void 0&&(i.error=Hd),i.complete===void 0&&(i.complete=Hd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function LN(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Hd(){}function MN(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VN=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,K(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},bh=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Ht(t){return t&&t._delegate?t._delegate:t}class Ai{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ki="[DEFAULT]";/**
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
 */class FN{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Qm;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jN(e))try{this.getOrInitializeService({instanceIdentifier:Ki})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ki){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ki){return this.instances.has(e)}getOptions(e=Ki){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:UN(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ki){return this.component?this.component.multipleInstances?e:Ki:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function UN(t){return t===Ki?void 0:t}function jN(t){return t.instantiationMode==="EAGER"}/**
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
 */class BN{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new FN(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const zN={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},WN=me.INFO,HN={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},$N=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=HN[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Oh{constructor(e){this.name=e,this._logLevel=WN,this._logHandler=$N,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zN[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const qN=(t,e)=>e.some(n=>t instanceof n);let _v,yv;function KN(){return _v||(_v=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function GN(){return yv||(yv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const XT=new WeakMap,lp=new WeakMap,JT=new WeakMap,$d=new WeakMap,Xm=new WeakMap;function QN(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(_i(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&XT.set(n,t)}).catch(()=>{}),Xm.set(e,t),e}function YN(t){if(lp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});lp.set(t,e)}let up={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return lp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||JT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _i(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function XN(t){up=t(up)}function JN(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(qd(this),e,...n);return JT.set(r,e.sort?e.sort():[e]),_i(r)}:GN().includes(t)?function(...e){return t.apply(qd(this),e),_i(XT.get(this))}:function(...e){return _i(t.apply(qd(this),e))}}function ZN(t){return typeof t=="function"?JN(t):(t instanceof IDBTransaction&&YN(t),qN(t,KN())?new Proxy(t,up):t)}function _i(t){if(t instanceof IDBRequest)return QN(t);if($d.has(t))return $d.get(t);const e=ZN(t);return e!==t&&($d.set(t,e),Xm.set(e,t)),e}const qd=t=>Xm.get(t);function ex(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=_i(o);return r&&o.addEventListener("upgradeneeded",u=>{r(_i(o.result),u.oldVersion,u.newVersion,_i(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const tx=["get","getKey","getAll","getAllKeys","count"],nx=["put","add","delete","clear"],Kd=new Map;function vv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Kd.get(e))return Kd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=nx.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||tx.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return Kd.set(e,s),s}XN(t=>({...t,get:(e,n,r)=>vv(e,n)||t.get(e,n,r),has:(e,n)=>!!vv(e,n)||t.has(e,n)}));/**
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
 */class rx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ix(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ix(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const cp="@firebase/app",wv="0.10.5";/**
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
 */const hs=new Oh("@firebase/app"),sx="@firebase/app-compat",ox="@firebase/analytics-compat",ax="@firebase/analytics",lx="@firebase/app-check-compat",ux="@firebase/app-check",cx="@firebase/auth",hx="@firebase/auth-compat",dx="@firebase/database",fx="@firebase/database-compat",px="@firebase/functions",mx="@firebase/functions-compat",gx="@firebase/installations",_x="@firebase/installations-compat",yx="@firebase/messaging",vx="@firebase/messaging-compat",wx="@firebase/performance",Ex="@firebase/performance-compat",Tx="@firebase/remote-config",Ix="@firebase/remote-config-compat",Sx="@firebase/storage",Cx="@firebase/storage-compat",Rx="@firebase/firestore",Ax="@firebase/vertexai-preview",kx="@firebase/firestore-compat",Px="firebase",Nx="10.12.2";/**
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
 */const hp="[DEFAULT]",xx={[cp]:"fire-core",[sx]:"fire-core-compat",[ax]:"fire-analytics",[ox]:"fire-analytics-compat",[ux]:"fire-app-check",[lx]:"fire-app-check-compat",[cx]:"fire-auth",[hx]:"fire-auth-compat",[dx]:"fire-rtdb",[fx]:"fire-rtdb-compat",[px]:"fire-fn",[mx]:"fire-fn-compat",[gx]:"fire-iid",[_x]:"fire-iid-compat",[yx]:"fire-fcm",[vx]:"fire-fcm-compat",[wx]:"fire-perf",[Ex]:"fire-perf-compat",[Tx]:"fire-rc",[Ix]:"fire-rc-compat",[Sx]:"fire-gcs",[Cx]:"fire-gcs-compat",[Rx]:"fire-fst",[kx]:"fire-fst-compat",[Ax]:"fire-vertex","fire-js":"fire-js",[Px]:"fire-js-all"};/**
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
 */const qc=new Map,Dx=new Map,dp=new Map;function Ev(t,e){try{t.container.addComponent(e)}catch(n){hs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ds(t){const e=t.name;if(dp.has(e))return hs.debug(`There were multiple attempts to register component ${e}.`),!1;dp.set(e,t);for(const n of qc.values())Ev(n,t);for(const n of Dx.values())Ev(n,t);return!0}function Jm(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Vn(t){return t.settings!==void 0}/**
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
 */const bx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},yi=new $l("app","Firebase",bx);/**
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
 */class Ox{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ai("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yi.create("app-deleted",{appName:this._name})}}/**
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
 */const Ss=Nx;function ZT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:hp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw yi.create("bad-app-name",{appName:String(i)});if(n||(n=qT()),!n)throw yi.create("no-options");const s=qc.get(i);if(s){if($c(n,s.options)&&$c(r,s.config))return s;throw yi.create("duplicate-app",{appName:i})}const o=new BN(i);for(const u of dp.values())o.addComponent(u);const a=new Ox(n,r,o);return qc.set(i,a),a}function eI(t=hp){const e=qc.get(t);if(!e&&t===hp&&qT())return ZT();if(!e)throw yi.create("no-app",{appName:t});return e}function rr(t,e,n){var r;let i=(r=xx[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),hs.warn(a.join(" "));return}ds(new Ai(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Lx="firebase-heartbeat-database",Mx=1,Cl="firebase-heartbeat-store";let Gd=null;function tI(){return Gd||(Gd=ex(Lx,Mx,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Cl)}catch(n){console.warn(n)}}}}).catch(t=>{throw yi.create("idb-open",{originalErrorMessage:t.message})})),Gd}async function Vx(t){try{const n=(await tI()).transaction(Cl),r=await n.objectStore(Cl).get(nI(t));return await n.done,r}catch(e){if(e instanceof jr)hs.warn(e.message);else{const n=yi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});hs.warn(n.message)}}}async function Tv(t,e){try{const r=(await tI()).transaction(Cl,"readwrite");await r.objectStore(Cl).put(e,nI(t)),await r.done}catch(n){if(n instanceof jr)hs.warn(n.message);else{const r=yi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});hs.warn(r.message)}}}function nI(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Fx=1024,Ux=30*24*60*60*1e3;class jx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new zx(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Iv();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Ux}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Iv(),{heartbeatsToSend:r,unsentEntries:i}=Bx(this._heartbeatsCache.heartbeats),s=zc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Iv(){return new Date().toISOString().substring(0,10)}function Bx(t,e=Fx){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Sv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Sv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class zx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return CN()?RN().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Vx(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Tv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Tv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Sv(t){return zc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Wx(t){ds(new Ai("platform-logger",e=>new rx(e),"PRIVATE")),ds(new Ai("heartbeat",e=>new jx(e),"PRIVATE")),rr(cp,wv,t),rr(cp,wv,"esm2017"),rr("fire-js","")}Wx("");function Zm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function rI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Hx=rI,iI=new $l("auth","Firebase",rI());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kc=new Oh("@firebase/auth");function $x(t,...e){Kc.logLevel<=me.WARN&&Kc.warn(`Auth (${Ss}): ${t}`,...e)}function lc(t,...e){Kc.logLevel<=me.ERROR&&Kc.error(`Auth (${Ss}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(t,...e){throw tg(t,...e)}function ir(t,...e){return tg(t,...e)}function eg(t,e,n){const r=Object.assign(Object.assign({},Hx()),{[e]:n});return new $l("auth","Firebase",r).create(e,{appName:t.name})}function sr(t){return eg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function qx(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&An(t,"argument-error"),eg(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function tg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return iI.create(t,...e)}function ie(t,e,...n){if(!t)throw tg(e,...n)}function Sr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw lc(e),new Error(e)}function Lr(t,e){t||Sr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Kx(){return Cv()==="http:"||Cv()==="https:"}function Cv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Kx()||TN()||"connection"in navigator)?navigator.onLine:!0}function Qx(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(e,n){this.shortDelay=e,this.longDelay=n,Lr(n>e,"Short delay should be less than long delay!"),this.isMobile=Ym()||GT()}get(){return Gx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ng(t,e){Lr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Sr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Sr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Sr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xx=new ql(3e4,6e4);function Vi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Fi(t,e,n,r,i={}){return oI(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ho(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),sI.fetch()(aI(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function oI(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Yx),e);try{const i=new Zx(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Bu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Bu(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Bu(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Bu(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw eg(t,d,c);An(t,d)}}catch(i){if(i instanceof jr)throw i;An(t,"network-request-failed",{message:String(i)})}}async function Kl(t,e,n,r,i={}){const s=await Fi(t,e,n,r,i);return"mfaPendingCredential"in s&&An(t,"multi-factor-auth-required",{_serverResponse:s}),s}function aI(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?ng(t.config,i):`${t.config.apiScheme}://${i}`}function Jx(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Zx{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ir(this.auth,"network-request-failed")),Xx.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Bu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ir(t,e,r);return i.customData._tokenResponse=n,i}function Rv(t){return t!==void 0&&t.enterprise!==void 0}class eD{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Jx(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function tD(t,e){return Fi(t,"GET","/v2/recaptchaConfig",Vi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nD(t,e){return Fi(t,"POST","/v1/accounts:delete",e)}async function lI(t,e){return Fi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function rD(t,e=!1){const n=Ht(t),r=await n.getIdToken(e),i=rg(r);ie(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ya(Qd(i.auth_time)),issuedAtTime:Ya(Qd(i.iat)),expirationTime:Ya(Qd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Qd(t){return Number(t)*1e3}function rg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return lc("JWT malformed, contained fewer than 3 sections"),null;try{const i=Wc(n);return i?JSON.parse(i):(lc("Failed to decode base64 JWT payload"),null)}catch(i){return lc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Av(t){const e=rg(t);return ie(e,"internal-error"),ie(typeof e.exp<"u","internal-error"),ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rl(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof jr&&iD(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function iD({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ya(this.lastLoginAt),this.creationTime=Ya(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Gc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Rl(t,lI(n,{idToken:r}));ie(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?uI(s.providerUserInfo):[],a=aD(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=u?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new pp(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function oD(t){const e=Ht(t);await Gc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function aD(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function uI(t){return t.map(e=>{var{providerId:n}=e,r=Zm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lD(t,e){const n=await oI(t,{},async()=>{const r=Ho({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=aI(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",sI.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function uD(t,e){return Fi(t,"POST","/v2/accounts:revokeToken",Vi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ie(e.idToken,"internal-error"),ie(typeof e.idToken<"u","internal-error"),ie(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Av(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ie(e.length!==0,"internal-error");const n=Av(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await lD(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new go;return r&&(ie(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ie(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ie(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new go,this.toJSON())}_performRefresh(){return Sr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jr(t,e){ie(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Cr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Zm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new sD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new pp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Rl(this,this.stsTokenManager.getToken(this.auth,e));return ie(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return rD(this,e)}reload(){return oD(this)}_assign(e){this!==e&&(ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Cr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Gc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Vn(this.auth.app))return Promise.reject(sr(this.auth));const e=await this.getIdToken();return await Rl(this,nD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,c,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,T=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(a=n.tenantId)!==null&&a!==void 0?a:void 0,P=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,E=(c=n.createdAt)!==null&&c!==void 0?c:void 0,v=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:S,emailVerified:L,isAnonymous:B,providerData:$,stsTokenManager:g}=n;ie(S&&g,e,"internal-error");const y=go.fromJSON(this.name,g);ie(typeof S=="string",e,"internal-error"),Jr(f,e.name),Jr(m,e.name),ie(typeof L=="boolean",e,"internal-error"),ie(typeof B=="boolean",e,"internal-error"),Jr(T,e.name),Jr(R,e.name),Jr(A,e.name),Jr(P,e.name),Jr(E,e.name),Jr(v,e.name);const w=new Cr({uid:S,auth:e,email:m,emailVerified:L,displayName:f,isAnonymous:B,photoURL:R,phoneNumber:T,tenantId:A,stsTokenManager:y,createdAt:E,lastLoginAt:v});return $&&Array.isArray($)&&(w.providerData=$.map(I=>Object.assign({},I))),P&&(w._redirectEventId=P),w}static async _fromIdTokenResponse(e,n,r=!1){const i=new go;i.updateFromServerResponse(n);const s=new Cr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Gc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];ie(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?uI(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new go;a.updateFromIdToken(r);const u=new Cr({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new pp(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kv=new Map;function Rr(t){Lr(t instanceof Function,"Expected a class definition");let e=kv.get(t);return e?(Lr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,kv.set(t,e),e)}/**
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
 */class cI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}cI.type="NONE";const Pv=cI;/**
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
 */function uc(t,e,n){return`firebase:${t}:${e}:${n}`}class _o{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=uc(this.userKey,i.apiKey,s),this.fullPersistenceKey=uc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Cr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new _o(Rr(Pv),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Rr(Pv);const o=uc(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const f=Cr._fromJSON(e,d);c!==s&&(a=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new _o(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new _o(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(fI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(hI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(mI(e))return"Blackberry";if(gI(e))return"Webos";if(ig(e))return"Safari";if((e.includes("chrome/")||dI(e))&&!e.includes("edge/"))return"Chrome";if(pI(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function hI(t=xt()){return/firefox\//i.test(t)}function ig(t=xt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function dI(t=xt()){return/crios\//i.test(t)}function fI(t=xt()){return/iemobile/i.test(t)}function pI(t=xt()){return/android/i.test(t)}function mI(t=xt()){return/blackberry/i.test(t)}function gI(t=xt()){return/webos/i.test(t)}function Lh(t=xt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function cD(t=xt()){var e;return Lh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function hD(){return IN()&&document.documentMode===10}function _I(t=xt()){return Lh(t)||pI(t)||gI(t)||mI(t)||/windows phone/i.test(t)||fI(t)}function dD(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yI(t,e=[]){let n;switch(t){case"Browser":n=Nv(xt());break;case"Worker":n=`${Nv(xt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ss}/${r}`}/**
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
 */class fD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function pD(t,e={}){return Fi(t,"GET","/v2/passwordPolicy",Vi(t,e))}/**
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
 */const mD=6;class gD{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:mD,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _D{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xv(this),this.idTokenSubscription=new xv(this),this.beforeStateQueue=new fD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=iI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Rr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await _o.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await lI(this,{idToken:e}),r=await Cr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Vn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Gc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Qx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Vn(this.app))return Promise.reject(sr(this));const n=e?Ht(e):null;return n&&ie(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Vn(this.app)?Promise.reject(sr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Vn(this.app)?Promise.reject(sr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Rr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await pD(this),n=new gD(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new $l("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await uD(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Rr(e)||this._popupRedirectResolver;ie(n,this,"argument-error"),this.redirectPersistenceManager=await _o.create(this,[Rr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ie(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=yI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&$x(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function zr(t){return Ht(t)}class xv{constructor(e){this.auth=e,this.observer=null,this.addObserver=bN(n=>this.observer=n)}get next(){return ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function yD(t){Mh=t}function vI(t){return Mh.loadJS(t)}function vD(){return Mh.recaptchaEnterpriseScript}function wD(){return Mh.gapiScript}function ED(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const TD="recaptcha-enterprise",ID="NO_RECAPTCHA";class SD{constructor(e){this.type=TD,this.auth=zr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{tD(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new eD(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;Rv(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(ID)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Rv(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=vD();u.length!==0&&(u+=a),vI(u).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Dv(t,e,n,r=!1){const i=new SD(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function mp(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Dv(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Dv(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CD(t,e){const n=Jm(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if($c(s,e??{}))return i;An(i,"already-initialized")}return n.initialize({options:e})}function RD(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Rr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function AD(t,e,n){const r=zr(t);ie(r._canInitEmulator,r,"emulator-config-failed"),ie(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=wI(e),{host:o,port:a}=kD(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),PD()}function wI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function kD(t){const e=wI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:bv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:bv(o)}}}function bv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function PD(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Sr("not implemented")}_getIdTokenResponse(e){return Sr("not implemented")}_linkToIdToken(e,n){return Sr("not implemented")}_getReauthenticationResolver(e){return Sr("not implemented")}}async function ND(t,e){return Fi(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xD(t,e){return Kl(t,"POST","/v1/accounts:signInWithPassword",Vi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DD(t,e){return Kl(t,"POST","/v1/accounts:signInWithEmailLink",Vi(t,e))}async function bD(t,e){return Kl(t,"POST","/v1/accounts:signInWithEmailLink",Vi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al extends sg{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Al(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Al(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return mp(e,n,"signInWithPassword",xD);case"emailLink":return DD(e,{email:this._email,oobCode:this._password});default:An(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return mp(e,r,"signUpPassword",ND);case"emailLink":return bD(e,{idToken:n,email:this._email,oobCode:this._password});default:An(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yo(t,e){return Kl(t,"POST","/v1/accounts:signInWithIdp",Vi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OD="http://localhost";class fs extends sg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new fs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):An("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Zm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new fs(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return yo(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,yo(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,yo(e,n)}buildRequest(){const e={requestUri:OD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ho(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LD(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function MD(t){const e=La(Ma(t)).link,n=e?La(Ma(e)).deep_link_id:null,r=La(Ma(t)).deep_link_id;return(r?La(Ma(r)).link:null)||r||n||e||t}class og{constructor(e){var n,r,i,s,o,a;const u=La(Ma(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,d=(r=u.oobCode)!==null&&r!==void 0?r:null,f=LD((i=u.mode)!==null&&i!==void 0?i:null);ie(c&&d&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=d,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=MD(e);try{return new og(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(){this.providerId=$o.PROVIDER_ID}static credential(e,n){return Al._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=og.parseLink(n);return ie(r,"argument-error"),Al._fromEmailAndCode(e,r.code,r.tenantId)}}$o.PROVIDER_ID="password";$o.EMAIL_PASSWORD_SIGN_IN_METHOD="password";$o.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Gl extends ag{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii extends Gl{constructor(){super("facebook.com")}static credential(e){return fs._fromParams({providerId:ii.PROVIDER_ID,signInMethod:ii.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ii.credentialFromTaggedObject(e)}static credentialFromError(e){return ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ii.credential(e.oauthAccessToken)}catch{return null}}}ii.FACEBOOK_SIGN_IN_METHOD="facebook.com";ii.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends Gl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return fs._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Xn.credential(n,r)}catch{return null}}}Xn.GOOGLE_SIGN_IN_METHOD="google.com";Xn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends Gl{constructor(){super("github.com")}static credential(e){return fs._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch{return null}}}Jn.GITHUB_SIGN_IN_METHOD="github.com";Jn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si extends Gl{constructor(){super("twitter.com")}static credential(e,n){return fs._fromParams({providerId:si.PROVIDER_ID,signInMethod:si.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return si.credentialFromTaggedObject(e)}static credentialFromError(e){return si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return si.credential(n,r)}catch{return null}}}si.TWITTER_SIGN_IN_METHOD="twitter.com";si.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VD(t,e){return Kl(t,"POST","/v1/accounts:signUp",Vi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Cr._fromIdTokenResponse(e,r,i),o=Ov(r);return new ps({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Ov(r);return new ps({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Ov(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc extends jr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Qc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Qc(e,n,r,i)}}function EI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Qc._fromErrorAndOperation(t,s,e,r):s})}async function FD(t,e,n=!1){const r=await Rl(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ps._forOperation(t,"link",r)}/**
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
 */async function UD(t,e,n=!1){const{auth:r}=t;if(Vn(r.app))return Promise.reject(sr(r));const i="reauthenticate";try{const s=await Rl(t,EI(r,i,e,t),n);ie(s.idToken,r,"internal-error");const o=rg(s.idToken);ie(o,r,"internal-error");const{sub:a}=o;return ie(t.uid===a,r,"user-mismatch"),ps._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&An(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TI(t,e,n=!1){if(Vn(t.app))return Promise.reject(sr(t));const r="signIn",i=await EI(t,r,e),s=await ps._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function jD(t,e){return TI(zr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function II(t){const e=zr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function BD(t,e,n){if(Vn(t.app))return Promise.reject(sr(t));const r=zr(t),o=await mp(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",VD).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&II(t),u}),a=await ps._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function zD(t,e,n){return Vn(t.app)?Promise.reject(sr(t)):jD(Ht(t),$o.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&II(t),r})}function WD(t,e,n,r){return Ht(t).onIdTokenChanged(e,n,r)}function HD(t,e,n){return Ht(t).beforeAuthStateChanged(e,n)}function lg(t,e,n,r){return Ht(t).onAuthStateChanged(e,n,r)}function $D(t){return Ht(t).signOut()}const Yc="__sak";/**
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
 */class SI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Yc,"1"),this.storage.removeItem(Yc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qD(){const t=xt();return ig(t)||Lh(t)}const KD=1e3,GD=10;class CI extends SI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=qD()&&dD(),this.fallbackToPolling=_I(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);hD()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,GD):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},KD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}CI.type="LOCAL";const QD=CI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI extends SI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}RI.type="SESSION";const AI=RI;/**
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
 */function YD(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Vh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Vh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await YD(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ug(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class XD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=ug("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(){return window}function JD(t){or().location.href=t}/**
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
 */function kI(){return typeof or().WorkerGlobalScope<"u"&&typeof or().importScripts=="function"}async function ZD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function eb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function tb(){return kI()?self:null}/**
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
 */const PI="firebaseLocalStorageDb",nb=1,Xc="firebaseLocalStorage",NI="fbase_key";class Ql{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Fh(t,e){return t.transaction([Xc],e?"readwrite":"readonly").objectStore(Xc)}function rb(){const t=indexedDB.deleteDatabase(PI);return new Ql(t).toPromise()}function gp(){const t=indexedDB.open(PI,nb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Xc,{keyPath:NI})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Xc)?e(r):(r.close(),await rb(),e(await gp()))})})}async function Lv(t,e,n){const r=Fh(t,!0).put({[NI]:e,value:n});return new Ql(r).toPromise()}async function ib(t,e){const n=Fh(t,!1).get(e),r=await new Ql(n).toPromise();return r===void 0?null:r.value}function Mv(t,e){const n=Fh(t,!0).delete(e);return new Ql(n).toPromise()}const sb=800,ob=3;class xI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await gp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ob)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return kI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vh._getInstance(tb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ZD(),!this.activeServiceWorker)return;this.sender=new XD(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||eb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await gp();return await Lv(e,Yc,"1"),await Mv(e,Yc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Lv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>ib(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Mv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Fh(i,!1).getAll();return new Ql(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),sb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}xI.type="LOCAL";const ab=xI;new ql(3e4,6e4);/**
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
 */function DI(t,e){return e?Rr(e):(ie(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class cg extends sg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return yo(e,this._buildIdpRequest())}_linkToIdToken(e,n){return yo(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return yo(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function lb(t){return TI(t.auth,new cg(t),t.bypassAuthState)}function ub(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),UD(n,new cg(t),t.bypassAuthState)}async function cb(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),FD(n,new cg(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lb;case"linkViaPopup":case"linkViaRedirect":return cb;case"reauthViaPopup":case"reauthViaRedirect":return ub;default:An(this.auth,"internal-error")}}resolve(e){Lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hb=new ql(2e3,1e4);class oo extends bI{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,oo.currentPopupAction&&oo.currentPopupAction.cancel(),oo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ie(e,this.auth,"internal-error"),e}async onExecution(){Lr(this.filter.length===1,"Popup operations only handle one event");const e=ug();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ir(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ir(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,oo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ir(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,hb.get())};e()}}oo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const db="pendingRedirect",cc=new Map;class fb extends bI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=cc.get(this.auth._key());if(!e){try{const r=await pb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}cc.set(this.auth._key(),e)}return this.bypassAuthState||cc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function pb(t,e){const n=LI(e),r=OI(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function mb(t,e){return OI(t)._set(LI(e),"true")}function gb(t,e){cc.set(t._key(),e)}function OI(t){return Rr(t._redirectPersistence)}function LI(t){return uc(db,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MI(t,e,n){return _b(t,e,n)}async function _b(t,e,n){if(Vn(t.app))return Promise.reject(sr(t));const r=zr(t);qx(t,e,ag),await r._initializationPromise;const i=DI(r,n);return await mb(i,r),i._openRedirect(r,e,"signInViaRedirect")}async function VI(t,e){return await zr(t)._initializationPromise,FI(t,e,!1)}async function FI(t,e,n=!1){if(Vn(t.app))return Promise.reject(sr(t));const r=zr(t),i=DI(r,e),o=await new fb(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yb=10*60*1e3;class vb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!wb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!UI(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ir(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yb&&this.cachedEventUids.clear(),this.cachedEventUids.has(Vv(e))}saveEventToCache(e){this.cachedEventUids.add(Vv(e)),this.lastProcessedEventTime=Date.now()}}function Vv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function UI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function wb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return UI(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eb(t,e={}){return Fi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ib=/^https?/;async function Sb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Eb(t);for(const n of e)try{if(Cb(n))return}catch{}An(t,"unauthorized-domain")}function Cb(t){const e=fp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Ib.test(n))return!1;if(Tb.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Rb=new ql(3e4,6e4);function Fv(){const t=or().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Ab(t){return new Promise((e,n)=>{var r,i,s;function o(){Fv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Fv(),n(ir(t,"network-request-failed"))},timeout:Rb.get()})}if(!((i=(r=or().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=or().gapi)===null||s===void 0)&&s.load)o();else{const a=ED("iframefcb");return or()[a]=()=>{gapi.load?o():n(ir(t,"network-request-failed"))},vI(`${wD()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw hc=null,e})}let hc=null;function kb(t){return hc=hc||Ab(t),hc}/**
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
 */const Pb=new ql(5e3,15e3),Nb="__/auth/iframe",xb="emulator/auth/iframe",Db={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ob(t){const e=t.config;ie(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ng(e,xb):`https://${t.config.authDomain}/${Nb}`,r={apiKey:e.apiKey,appName:t.name,v:Ss},i=bb.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ho(r).slice(1)}`}async function Lb(t){const e=await kb(t),n=or().gapi;return ie(n,t,"internal-error"),e.open({where:document.body,url:Ob(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Db,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ir(t,"network-request-failed"),a=or().setTimeout(()=>{s(o)},Pb.get());function u(){or().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const Mb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Vb=500,Fb=600,Ub="_blank",jb="http://localhost";class Uv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Bb(t,e,n,r=Vb,i=Fb){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},Mb),{width:r.toString(),height:i.toString(),top:s,left:o}),c=xt().toLowerCase();n&&(a=dI(c)?Ub:n),hI(c)&&(e=e||jb,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[T,R])=>`${m}${T}=${R},`,"");if(cD(c)&&a!=="_self")return zb(e||"",a),new Uv(null);const f=window.open(e||"",a,d);ie(f,t,"popup-blocked");try{f.focus()}catch{}return new Uv(f)}function zb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Wb="__/auth/handler",Hb="emulator/auth/handler",$b=encodeURIComponent("fac");async function jv(t,e,n,r,i,s){ie(t.config.authDomain,t,"auth-domain-config-required"),ie(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ss,eventId:i};if(e instanceof ag){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ap(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof Gl){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const u=await t._getAppCheckToken(),c=u?`#${$b}=${encodeURIComponent(u)}`:"";return`${qb(t)}?${Ho(a).slice(1)}${c}`}function qb({config:t}){return t.emulator?ng(t,Hb):`https://${t.authDomain}/${Wb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd="webStorageSupport";class Kb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=AI,this._completeRedirectFn=FI,this._overrideRedirectResult=gb}async _openPopup(e,n,r,i){var s;Lr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await jv(e,n,r,fp(),i);return Bb(e,o,ug())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await jv(e,n,r,fp(),i);return JD(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Lr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Lb(e),r=new vb(e);return n.register("authEvent",i=>(ie(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Yd,{type:Yd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Yd];o!==void 0&&n(!!o),An(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Sb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return _I()||ig()||Lh()}}const Gb=Kb;var Bv="@firebase/auth",zv="1.7.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Xb(t){ds(new Ai("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ie(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:yI(t)},c=new _D(r,i,s,u);return RD(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ds(new Ai("auth-internal",e=>{const n=zr(e.getProvider("auth").getImmediate());return(r=>new Qb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),rr(Bv,zv,Yb(t)),rr(Bv,zv,"esm2017")}/**
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
 */const Jb=5*60,Zb=KT("authIdTokenMaxAge")||Jb;let Wv=null;const eO=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Zb)return;const i=n==null?void 0:n.token;Wv!==i&&(Wv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function tO(t=eI()){const e=Jm(t,"auth");if(e.isInitialized())return e.getImmediate();const n=CD(t,{popupRedirectResolver:Gb,persistence:[ab,QD,AI]}),r=KT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=eO(s.toString());HD(n,o,()=>o(n.currentUser)),WD(n,a=>o(a))}}const i=$T("auth");return i&&AD(n,`http://${i}`),n}function nO(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}yD({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=ir("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",nO().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Xb("Browser");var rO="firebase",iO="10.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rr(rO,iO,"app");var Hv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var is,jI;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(g,y){function w(){}w.prototype=y.prototype,g.D=y.prototype,g.prototype=new w,g.prototype.constructor=g,g.C=function(I,k,N){for(var C=Array(arguments.length-2),Pe=2;Pe<arguments.length;Pe++)C[Pe-2]=arguments[Pe];return y.prototype[k].apply(I,C)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(g,y,w){w||(w=0);var I=Array(16);if(typeof y=="string")for(var k=0;16>k;++k)I[k]=y.charCodeAt(w++)|y.charCodeAt(w++)<<8|y.charCodeAt(w++)<<16|y.charCodeAt(w++)<<24;else for(k=0;16>k;++k)I[k]=y[w++]|y[w++]<<8|y[w++]<<16|y[w++]<<24;y=g.g[0],w=g.g[1],k=g.g[2];var N=g.g[3],C=y+(N^w&(k^N))+I[0]+3614090360&4294967295;y=w+(C<<7&4294967295|C>>>25),C=N+(k^y&(w^k))+I[1]+3905402710&4294967295,N=y+(C<<12&4294967295|C>>>20),C=k+(w^N&(y^w))+I[2]+606105819&4294967295,k=N+(C<<17&4294967295|C>>>15),C=w+(y^k&(N^y))+I[3]+3250441966&4294967295,w=k+(C<<22&4294967295|C>>>10),C=y+(N^w&(k^N))+I[4]+4118548399&4294967295,y=w+(C<<7&4294967295|C>>>25),C=N+(k^y&(w^k))+I[5]+1200080426&4294967295,N=y+(C<<12&4294967295|C>>>20),C=k+(w^N&(y^w))+I[6]+2821735955&4294967295,k=N+(C<<17&4294967295|C>>>15),C=w+(y^k&(N^y))+I[7]+4249261313&4294967295,w=k+(C<<22&4294967295|C>>>10),C=y+(N^w&(k^N))+I[8]+1770035416&4294967295,y=w+(C<<7&4294967295|C>>>25),C=N+(k^y&(w^k))+I[9]+2336552879&4294967295,N=y+(C<<12&4294967295|C>>>20),C=k+(w^N&(y^w))+I[10]+4294925233&4294967295,k=N+(C<<17&4294967295|C>>>15),C=w+(y^k&(N^y))+I[11]+2304563134&4294967295,w=k+(C<<22&4294967295|C>>>10),C=y+(N^w&(k^N))+I[12]+1804603682&4294967295,y=w+(C<<7&4294967295|C>>>25),C=N+(k^y&(w^k))+I[13]+4254626195&4294967295,N=y+(C<<12&4294967295|C>>>20),C=k+(w^N&(y^w))+I[14]+2792965006&4294967295,k=N+(C<<17&4294967295|C>>>15),C=w+(y^k&(N^y))+I[15]+1236535329&4294967295,w=k+(C<<22&4294967295|C>>>10),C=y+(k^N&(w^k))+I[1]+4129170786&4294967295,y=w+(C<<5&4294967295|C>>>27),C=N+(w^k&(y^w))+I[6]+3225465664&4294967295,N=y+(C<<9&4294967295|C>>>23),C=k+(y^w&(N^y))+I[11]+643717713&4294967295,k=N+(C<<14&4294967295|C>>>18),C=w+(N^y&(k^N))+I[0]+3921069994&4294967295,w=k+(C<<20&4294967295|C>>>12),C=y+(k^N&(w^k))+I[5]+3593408605&4294967295,y=w+(C<<5&4294967295|C>>>27),C=N+(w^k&(y^w))+I[10]+38016083&4294967295,N=y+(C<<9&4294967295|C>>>23),C=k+(y^w&(N^y))+I[15]+3634488961&4294967295,k=N+(C<<14&4294967295|C>>>18),C=w+(N^y&(k^N))+I[4]+3889429448&4294967295,w=k+(C<<20&4294967295|C>>>12),C=y+(k^N&(w^k))+I[9]+568446438&4294967295,y=w+(C<<5&4294967295|C>>>27),C=N+(w^k&(y^w))+I[14]+3275163606&4294967295,N=y+(C<<9&4294967295|C>>>23),C=k+(y^w&(N^y))+I[3]+4107603335&4294967295,k=N+(C<<14&4294967295|C>>>18),C=w+(N^y&(k^N))+I[8]+1163531501&4294967295,w=k+(C<<20&4294967295|C>>>12),C=y+(k^N&(w^k))+I[13]+2850285829&4294967295,y=w+(C<<5&4294967295|C>>>27),C=N+(w^k&(y^w))+I[2]+4243563512&4294967295,N=y+(C<<9&4294967295|C>>>23),C=k+(y^w&(N^y))+I[7]+1735328473&4294967295,k=N+(C<<14&4294967295|C>>>18),C=w+(N^y&(k^N))+I[12]+2368359562&4294967295,w=k+(C<<20&4294967295|C>>>12),C=y+(w^k^N)+I[5]+4294588738&4294967295,y=w+(C<<4&4294967295|C>>>28),C=N+(y^w^k)+I[8]+2272392833&4294967295,N=y+(C<<11&4294967295|C>>>21),C=k+(N^y^w)+I[11]+1839030562&4294967295,k=N+(C<<16&4294967295|C>>>16),C=w+(k^N^y)+I[14]+4259657740&4294967295,w=k+(C<<23&4294967295|C>>>9),C=y+(w^k^N)+I[1]+2763975236&4294967295,y=w+(C<<4&4294967295|C>>>28),C=N+(y^w^k)+I[4]+1272893353&4294967295,N=y+(C<<11&4294967295|C>>>21),C=k+(N^y^w)+I[7]+4139469664&4294967295,k=N+(C<<16&4294967295|C>>>16),C=w+(k^N^y)+I[10]+3200236656&4294967295,w=k+(C<<23&4294967295|C>>>9),C=y+(w^k^N)+I[13]+681279174&4294967295,y=w+(C<<4&4294967295|C>>>28),C=N+(y^w^k)+I[0]+3936430074&4294967295,N=y+(C<<11&4294967295|C>>>21),C=k+(N^y^w)+I[3]+3572445317&4294967295,k=N+(C<<16&4294967295|C>>>16),C=w+(k^N^y)+I[6]+76029189&4294967295,w=k+(C<<23&4294967295|C>>>9),C=y+(w^k^N)+I[9]+3654602809&4294967295,y=w+(C<<4&4294967295|C>>>28),C=N+(y^w^k)+I[12]+3873151461&4294967295,N=y+(C<<11&4294967295|C>>>21),C=k+(N^y^w)+I[15]+530742520&4294967295,k=N+(C<<16&4294967295|C>>>16),C=w+(k^N^y)+I[2]+3299628645&4294967295,w=k+(C<<23&4294967295|C>>>9),C=y+(k^(w|~N))+I[0]+4096336452&4294967295,y=w+(C<<6&4294967295|C>>>26),C=N+(w^(y|~k))+I[7]+1126891415&4294967295,N=y+(C<<10&4294967295|C>>>22),C=k+(y^(N|~w))+I[14]+2878612391&4294967295,k=N+(C<<15&4294967295|C>>>17),C=w+(N^(k|~y))+I[5]+4237533241&4294967295,w=k+(C<<21&4294967295|C>>>11),C=y+(k^(w|~N))+I[12]+1700485571&4294967295,y=w+(C<<6&4294967295|C>>>26),C=N+(w^(y|~k))+I[3]+2399980690&4294967295,N=y+(C<<10&4294967295|C>>>22),C=k+(y^(N|~w))+I[10]+4293915773&4294967295,k=N+(C<<15&4294967295|C>>>17),C=w+(N^(k|~y))+I[1]+2240044497&4294967295,w=k+(C<<21&4294967295|C>>>11),C=y+(k^(w|~N))+I[8]+1873313359&4294967295,y=w+(C<<6&4294967295|C>>>26),C=N+(w^(y|~k))+I[15]+4264355552&4294967295,N=y+(C<<10&4294967295|C>>>22),C=k+(y^(N|~w))+I[6]+2734768916&4294967295,k=N+(C<<15&4294967295|C>>>17),C=w+(N^(k|~y))+I[13]+1309151649&4294967295,w=k+(C<<21&4294967295|C>>>11),C=y+(k^(w|~N))+I[4]+4149444226&4294967295,y=w+(C<<6&4294967295|C>>>26),C=N+(w^(y|~k))+I[11]+3174756917&4294967295,N=y+(C<<10&4294967295|C>>>22),C=k+(y^(N|~w))+I[2]+718787259&4294967295,k=N+(C<<15&4294967295|C>>>17),C=w+(N^(k|~y))+I[9]+3951481745&4294967295,g.g[0]=g.g[0]+y&4294967295,g.g[1]=g.g[1]+(k+(C<<21&4294967295|C>>>11))&4294967295,g.g[2]=g.g[2]+k&4294967295,g.g[3]=g.g[3]+N&4294967295}r.prototype.u=function(g,y){y===void 0&&(y=g.length);for(var w=y-this.blockSize,I=this.B,k=this.h,N=0;N<y;){if(k==0)for(;N<=w;)i(this,g,N),N+=this.blockSize;if(typeof g=="string"){for(;N<y;)if(I[k++]=g.charCodeAt(N++),k==this.blockSize){i(this,I),k=0;break}}else for(;N<y;)if(I[k++]=g[N++],k==this.blockSize){i(this,I),k=0;break}}this.h=k,this.o+=y},r.prototype.v=function(){var g=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);g[0]=128;for(var y=1;y<g.length-8;++y)g[y]=0;var w=8*this.o;for(y=g.length-8;y<g.length;++y)g[y]=w&255,w/=256;for(this.u(g),g=Array(16),y=w=0;4>y;++y)for(var I=0;32>I;I+=8)g[w++]=this.g[y]>>>I&255;return g};function s(g,y){var w=a;return Object.prototype.hasOwnProperty.call(w,g)?w[g]:w[g]=y(g)}function o(g,y){this.h=y;for(var w=[],I=!0,k=g.length-1;0<=k;k--){var N=g[k]|0;I&&N==y||(w[k]=N,I=!1)}this.g=w}var a={};function u(g){return-128<=g&&128>g?s(g,function(y){return new o([y|0],0>y?-1:0)}):new o([g|0],0>g?-1:0)}function c(g){if(isNaN(g)||!isFinite(g))return f;if(0>g)return P(c(-g));for(var y=[],w=1,I=0;g>=w;I++)y[I]=g/w|0,w*=4294967296;return new o(y,0)}function d(g,y){if(g.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(g.charAt(0)=="-")return P(d(g.substring(1),y));if(0<=g.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=c(Math.pow(y,8)),I=f,k=0;k<g.length;k+=8){var N=Math.min(8,g.length-k),C=parseInt(g.substring(k,k+N),y);8>N?(N=c(Math.pow(y,N)),I=I.j(N).add(c(C))):(I=I.j(w),I=I.add(c(C)))}return I}var f=u(0),m=u(1),T=u(16777216);t=o.prototype,t.m=function(){if(A(this))return-P(this).m();for(var g=0,y=1,w=0;w<this.g.length;w++){var I=this.i(w);g+=(0<=I?I:4294967296+I)*y,y*=4294967296}return g},t.toString=function(g){if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(R(this))return"0";if(A(this))return"-"+P(this).toString(g);for(var y=c(Math.pow(g,6)),w=this,I="";;){var k=L(w,y).g;w=E(w,k.j(y));var N=((0<w.g.length?w.g[0]:w.h)>>>0).toString(g);if(w=k,R(w))return N+I;for(;6>N.length;)N="0"+N;I=N+I}},t.i=function(g){return 0>g?0:g<this.g.length?this.g[g]:this.h};function R(g){if(g.h!=0)return!1;for(var y=0;y<g.g.length;y++)if(g.g[y]!=0)return!1;return!0}function A(g){return g.h==-1}t.l=function(g){return g=E(this,g),A(g)?-1:R(g)?0:1};function P(g){for(var y=g.g.length,w=[],I=0;I<y;I++)w[I]=~g.g[I];return new o(w,~g.h).add(m)}t.abs=function(){return A(this)?P(this):this},t.add=function(g){for(var y=Math.max(this.g.length,g.g.length),w=[],I=0,k=0;k<=y;k++){var N=I+(this.i(k)&65535)+(g.i(k)&65535),C=(N>>>16)+(this.i(k)>>>16)+(g.i(k)>>>16);I=C>>>16,N&=65535,C&=65535,w[k]=C<<16|N}return new o(w,w[w.length-1]&-2147483648?-1:0)};function E(g,y){return g.add(P(y))}t.j=function(g){if(R(this)||R(g))return f;if(A(this))return A(g)?P(this).j(P(g)):P(P(this).j(g));if(A(g))return P(this.j(P(g)));if(0>this.l(T)&&0>g.l(T))return c(this.m()*g.m());for(var y=this.g.length+g.g.length,w=[],I=0;I<2*y;I++)w[I]=0;for(I=0;I<this.g.length;I++)for(var k=0;k<g.g.length;k++){var N=this.i(I)>>>16,C=this.i(I)&65535,Pe=g.i(k)>>>16,yt=g.i(k)&65535;w[2*I+2*k]+=C*yt,v(w,2*I+2*k),w[2*I+2*k+1]+=N*yt,v(w,2*I+2*k+1),w[2*I+2*k+1]+=C*Pe,v(w,2*I+2*k+1),w[2*I+2*k+2]+=N*Pe,v(w,2*I+2*k+2)}for(I=0;I<y;I++)w[I]=w[2*I+1]<<16|w[2*I];for(I=y;I<2*y;I++)w[I]=0;return new o(w,0)};function v(g,y){for(;(g[y]&65535)!=g[y];)g[y+1]+=g[y]>>>16,g[y]&=65535,y++}function S(g,y){this.g=g,this.h=y}function L(g,y){if(R(y))throw Error("division by zero");if(R(g))return new S(f,f);if(A(g))return y=L(P(g),y),new S(P(y.g),P(y.h));if(A(y))return y=L(g,P(y)),new S(P(y.g),y.h);if(30<g.g.length){if(A(g)||A(y))throw Error("slowDivide_ only works with positive integers.");for(var w=m,I=y;0>=I.l(g);)w=B(w),I=B(I);var k=$(w,1),N=$(I,1);for(I=$(I,2),w=$(w,2);!R(I);){var C=N.add(I);0>=C.l(g)&&(k=k.add(w),N=C),I=$(I,1),w=$(w,1)}return y=E(g,k.j(y)),new S(k,y)}for(k=f;0<=g.l(y);){for(w=Math.max(1,Math.floor(g.m()/y.m())),I=Math.ceil(Math.log(w)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),N=c(w),C=N.j(y);A(C)||0<C.l(g);)w-=I,N=c(w),C=N.j(y);R(N)&&(N=m),k=k.add(N),g=E(g,C)}return new S(k,g)}t.A=function(g){return L(this,g).h},t.and=function(g){for(var y=Math.max(this.g.length,g.g.length),w=[],I=0;I<y;I++)w[I]=this.i(I)&g.i(I);return new o(w,this.h&g.h)},t.or=function(g){for(var y=Math.max(this.g.length,g.g.length),w=[],I=0;I<y;I++)w[I]=this.i(I)|g.i(I);return new o(w,this.h|g.h)},t.xor=function(g){for(var y=Math.max(this.g.length,g.g.length),w=[],I=0;I<y;I++)w[I]=this.i(I)^g.i(I);return new o(w,this.h^g.h)};function B(g){for(var y=g.g.length+1,w=[],I=0;I<y;I++)w[I]=g.i(I)<<1|g.i(I-1)>>>31;return new o(w,g.h)}function $(g,y){var w=y>>5;y%=32;for(var I=g.g.length-w,k=[],N=0;N<I;N++)k[N]=0<y?g.i(N+w)>>>y|g.i(N+w+1)<<32-y:g.i(N+w);return new o(k,g.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,jI=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,is=o}).apply(typeof Hv<"u"?Hv:typeof self<"u"?self:typeof window<"u"?window:{});var zu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var BI,zI,Va,WI,dc,_p,HI,$I,qI;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,h,p){return l==Array.prototype||l==Object.prototype||(l[h]=p.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof zu=="object"&&zu];for(var h=0;h<l.length;++h){var p=l[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(l,h){if(h)e:{var p=r;l=l.split(".");for(var _=0;_<l.length-1;_++){var D=l[_];if(!(D in p))break e;p=p[D]}l=l[l.length-1],_=p[l],h=h(_),h!=_&&h!=null&&e(p,l,{configurable:!0,writable:!0,value:h})}}function s(l,h){l instanceof String&&(l+="");var p=0,_=!1,D={next:function(){if(!_&&p<l.length){var M=p++;return{value:h(M,l[M]),done:!1}}return _=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}i("Array.prototype.values",function(l){return l||function(){return s(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var h=typeof l;return h=h!="object"?h:l?Array.isArray(l)?"array":h:"null",h=="array"||h=="object"&&typeof l.length=="number"}function c(l){var h=typeof l;return h=="object"&&l!=null||h=="function"}function d(l,h,p){return l.call.apply(l.bind,arguments)}function f(l,h,p){if(!l)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,_),l.apply(h,D)}}return function(){return l.apply(h,arguments)}}function m(l,h,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,m.apply(null,arguments)}function T(l,h){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),l.apply(this,_)}}function R(l,h){function p(){}p.prototype=h.prototype,l.aa=h.prototype,l.prototype=new p,l.prototype.constructor=l,l.Qb=function(_,D,M){for(var q=Array(arguments.length-2),Ne=2;Ne<arguments.length;Ne++)q[Ne-2]=arguments[Ne];return h.prototype[D].apply(_,q)}}function A(l){const h=l.length;if(0<h){const p=Array(h);for(let _=0;_<h;_++)p[_]=l[_];return p}return[]}function P(l,h){for(let p=1;p<arguments.length;p++){const _=arguments[p];if(u(_)){const D=l.length||0,M=_.length||0;l.length=D+M;for(let q=0;q<M;q++)l[D+q]=_[q]}else l.push(_)}}class E{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function v(l){return/^[\s\xa0]*$/.test(l)}function S(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function L(l){return L[" "](l),l}L[" "]=function(){};var B=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function $(l,h,p){for(const _ in l)h.call(p,l[_],_,l)}function g(l,h){for(const p in l)h.call(void 0,l[p],p,l)}function y(l){const h={};for(const p in l)h[p]=l[p];return h}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(l,h){let p,_;for(let D=1;D<arguments.length;D++){_=arguments[D];for(p in _)l[p]=_[p];for(let M=0;M<w.length;M++)p=w[M],Object.prototype.hasOwnProperty.call(_,p)&&(l[p]=_[p])}}function k(l){var h=1;l=l.split(":");const p=[];for(;0<h&&l.length;)p.push(l.shift()),h--;return l.length&&p.push(l.join(":")),p}function N(l){a.setTimeout(()=>{throw l},0)}function C(){var l=ne;let h=null;return l.g&&(h=l.g,l.g=l.g.next,l.g||(l.h=null),h.next=null),h}class Pe{constructor(){this.h=this.g=null}add(h,p){const _=yt.get();_.set(h,p),this.h?this.h.next=_:this.g=_,this.h=_}}var yt=new E(()=>new $n,l=>l.reset());class $n{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Jt,H=!1,ne=new Pe,se=()=>{const l=a.Promise.resolve(void 0);Jt=()=>{l.then(Se)}};var Se=()=>{for(var l;l=C();){try{l.h.call(l.g)}catch(p){N(p)}var h=yt;h.j(l),100>h.h&&(h.h++,l.next=h.g,h.g=l)}H=!1};function de(){this.s=this.s,this.C=this.C}de.prototype.s=!1,de.prototype.ma=function(){this.s||(this.s=!0,this.N())},de.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ae(l,h){this.type=l,this.g=this.target=h,this.defaultPrevented=!1}Ae.prototype.h=function(){this.defaultPrevented=!0};var qt=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,h=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};a.addEventListener("test",p,h),a.removeEventListener("test",p,h)}catch{}return l}();function at(l,h){if(Ae.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var p=this.type=l.type,_=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=h,h=l.relatedTarget){if(B){e:{try{L(h.nodeName);var D=!0;break e}catch{}D=!1}D||(h=null)}}else p=="mouseover"?h=l.fromElement:p=="mouseout"&&(h=l.toElement);this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:vt[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&at.aa.h.call(this)}}R(at,Ae);var vt={2:"touch",3:"pen",4:"mouse"};at.prototype.h=function(){at.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var wt="closure_listenable_"+(1e6*Math.random()|0),ea=0;function nd(l,h,p,_,D){this.listener=l,this.proxy=null,this.src=h,this.type=p,this.capture=!!_,this.ha=D,this.key=++ea,this.da=this.fa=!1}function Ps(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Ns(l){this.src=l,this.g={},this.h=0}Ns.prototype.add=function(l,h,p,_,D){var M=l.toString();l=this.g[M],l||(l=this.g[M]=[],this.h++);var q=hr(l,h,_,D);return-1<q?(h=l[q],p||(h.fa=!1)):(h=new nd(h,this.src,M,!!_,D),h.fa=p,l.push(h)),h};function Et(l,h){var p=h.type;if(p in l.g){var _=l.g[p],D=Array.prototype.indexOf.call(_,h,void 0),M;(M=0<=D)&&Array.prototype.splice.call(_,D,1),M&&(Ps(h),l.g[p].length==0&&(delete l.g[p],l.h--))}}function hr(l,h,p,_){for(var D=0;D<l.length;++D){var M=l[D];if(!M.da&&M.listener==h&&M.capture==!!p&&M.ha==_)return D}return-1}var xs="closure_lm_"+(1e6*Math.random()|0),ta={};function qn(l,h,p,_,D){if(Array.isArray(h)){for(var M=0;M<h.length;M++)qn(l,h[M],p,_,D);return null}return p=bs(p),l&&l[wt]?l.K(h,p,c(_)?!!_.capture:!!_,D):rd(l,h,p,!1,_,D)}function rd(l,h,p,_,D,M){if(!h)throw Error("Invalid event type");var q=c(D)?!!D.capture:!!D,Ne=dr(l);if(Ne||(l[xs]=Ne=new Ns(l)),p=Ne.add(h,p,_,q,M),p.proxy)return p;if(_=id(),p.proxy=_,_.src=l,_.listener=p,l.addEventListener)qt||(D=q),D===void 0&&(D=!1),l.addEventListener(h.toString(),_,D);else if(l.attachEvent)l.attachEvent(uu(h.toString()),_);else if(l.addListener&&l.removeListener)l.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function id(){function l(p){return h.call(l.src,l.listener,p)}const h=Ui;return l}function lu(l,h,p,_,D){if(Array.isArray(h))for(var M=0;M<h.length;M++)lu(l,h[M],p,_,D);else _=c(_)?!!_.capture:!!_,p=bs(p),l&&l[wt]?(l=l.i,h=String(h).toString(),h in l.g&&(M=l.g[h],p=hr(M,p,_,D),-1<p&&(Ps(M[p]),Array.prototype.splice.call(M,p,1),M.length==0&&(delete l.g[h],l.h--)))):l&&(l=dr(l))&&(h=l.g[h.toString()],l=-1,h&&(l=hr(h,p,_,D)),(p=-1<l?h[l]:null)&&na(p))}function na(l){if(typeof l!="number"&&l&&!l.da){var h=l.src;if(h&&h[wt])Et(h.i,l);else{var p=l.type,_=l.proxy;h.removeEventListener?h.removeEventListener(p,_,l.capture):h.detachEvent?h.detachEvent(uu(p),_):h.addListener&&h.removeListener&&h.removeListener(_),(p=dr(h))?(Et(p,l),p.h==0&&(p.src=null,h[xs]=null)):Ps(l)}}}function uu(l){return l in ta?ta[l]:ta[l]="on"+l}function Ui(l,h){if(l.da)l=!0;else{h=new at(h,this);var p=l.listener,_=l.ha||l.src;l.fa&&na(l),l=p.call(_,h)}return l}function dr(l){return l=l[xs],l instanceof Ns?l:null}var Ds="__closure_events_fn_"+(1e9*Math.random()>>>0);function bs(l){return typeof l=="function"?l:(l[Ds]||(l[Ds]=function(h){return l.handleEvent(h)}),l[Ds])}function Oe(){de.call(this),this.i=new Ns(this),this.M=this,this.F=null}R(Oe,de),Oe.prototype[wt]=!0,Oe.prototype.removeEventListener=function(l,h,p,_){lu(this,l,h,p,_)};function Je(l,h){var p,_=l.F;if(_)for(p=[];_;_=_.F)p.push(_);if(l=l.M,_=h.type||h,typeof h=="string")h=new Ae(h,l);else if(h instanceof Ae)h.target=h.target||l;else{var D=h;h=new Ae(_,l),I(h,D)}if(D=!0,p)for(var M=p.length-1;0<=M;M--){var q=h.g=p[M];D=ji(q,_,!0,h)&&D}if(q=h.g=l,D=ji(q,_,!0,h)&&D,D=ji(q,_,!1,h)&&D,p)for(M=0;M<p.length;M++)q=h.g=p[M],D=ji(q,_,!1,h)&&D}Oe.prototype.N=function(){if(Oe.aa.N.call(this),this.i){var l=this.i,h;for(h in l.g){for(var p=l.g[h],_=0;_<p.length;_++)Ps(p[_]);delete l.g[h],l.h--}}this.F=null},Oe.prototype.K=function(l,h,p,_){return this.i.add(String(l),h,!1,p,_)},Oe.prototype.L=function(l,h,p,_){return this.i.add(String(l),h,!0,p,_)};function ji(l,h,p,_){if(h=l.i.g[String(h)],!h)return!0;h=h.concat();for(var D=!0,M=0;M<h.length;++M){var q=h[M];if(q&&!q.da&&q.capture==p){var Ne=q.listener,St=q.ha||q.src;q.fa&&Et(l.i,q),D=Ne.call(St,_)!==!1&&D}}return D&&!_.defaultPrevented}function Bi(l,h,p){if(typeof l=="function")p&&(l=m(l,p));else if(l&&typeof l.handleEvent=="function")l=m(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:a.setTimeout(l,h||0)}function cu(l){l.g=Bi(()=>{l.g=null,l.i&&(l.i=!1,cu(l))},l.l);const h=l.h;l.h=null,l.m.apply(null,h)}class Kn extends de{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:cu(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Wr(l){de.call(this),this.h=l,this.g={}}R(Wr,de);var ra=[];function ia(l){$(l.g,function(h,p){this.g.hasOwnProperty(p)&&na(h)},l),l.g={}}Wr.prototype.N=function(){Wr.aa.N.call(this),ia(this)},Wr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var sa=a.JSON.stringify,hu=a.JSON.parse,Os=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Ls(){}Ls.prototype.h=null;function Ms(l){return l.h||(l.h=l.i())}function du(){}var Hr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function oa(){Ae.call(this,"d")}R(oa,Ae);function Vs(){Ae.call(this,"c")}R(Vs,Ae);var fr={},x=null;function O(){return x=x||new Oe}fr.La="serverreachability";function V(l){Ae.call(this,fr.La,l)}R(V,Ae);function W(l){const h=O();Je(h,new V(h))}fr.STAT_EVENT="statevent";function Q(l,h){Ae.call(this,fr.STAT_EVENT,l),this.stat=h}R(Q,Ae);function Z(l){const h=O();Je(h,new Q(h,l))}fr.Ma="timingevent";function ee(l,h){Ae.call(this,fr.Ma,l),this.size=h}R(ee,Ae);function G(l,h){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},h)}function oe(){this.g=!0}oe.prototype.xa=function(){this.g=!1};function ae(l,h,p,_,D,M){l.info(function(){if(l.g)if(M)for(var q="",Ne=M.split("&"),St=0;St<Ne.length;St++){var Te=Ne[St].split("=");if(1<Te.length){var Dt=Te[0];Te=Te[1];var bt=Dt.split("_");q=2<=bt.length&&bt[1]=="type"?q+(Dt+"="+Te+"&"):q+(Dt+"=redacted&")}}else q=null;else q=M;return"XMLHTTP REQ ("+_+") [attempt "+D+"]: "+h+`
`+p+`
`+q})}function lt(l,h,p,_,D,M,q){l.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+D+"]: "+h+`
`+p+`
`+M+" "+q})}function ze(l,h,p,_){l.info(function(){return"XMLHTTP TEXT ("+h+"): "+xe(l,p)+(_?" "+_:"")})}function re(l,h){l.info(function(){return"TIMEOUT: "+h})}oe.prototype.info=function(){};function xe(l,h){if(!l.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(l=0;l<p.length;l++)if(Array.isArray(p[l])){var _=p[l];if(!(2>_.length)){var D=_[1];if(Array.isArray(D)&&!(1>D.length)){var M=D[0];if(M!="noop"&&M!="stop"&&M!="close")for(var q=1;q<D.length;q++)D[q]=""}}}}return sa(p)}catch{return h}}var $e={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},$r={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},gn;function Pn(){}R(Pn,Ls),Pn.prototype.g=function(){return new XMLHttpRequest},Pn.prototype.i=function(){return{}},gn=new Pn;function Kt(l,h,p,_){this.j=l,this.i=h,this.l=p,this.R=_||1,this.U=new Wr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new pr}function pr(){this.i=null,this.g="",this.h=!1}var on={},qr={};function Kr(l,h,p){l.L=1,l.v=mu(_r(h)),l.m=p,l.P=!0,zi(l,null)}function zi(l,h){l.F=Date.now(),It(l),l.A=_r(l.v);var p=l.A,_=l.R;Array.isArray(_)||(_=[String(_)]),y_(p.i,"t",_),l.C=0,p=l.j.J,l.h=new pr,l.g=M_(l.j,p?h:null,!l.m),0<l.O&&(l.M=new Kn(m(l.Y,l,l.g),l.O)),h=l.U,p=l.g,_=l.ca;var D="readystatechange";Array.isArray(D)||(D&&(ra[0]=D.toString()),D=ra);for(var M=0;M<D.length;M++){var q=qn(p,D[M],_||h.handleEvent,!1,h.h||h);if(!q)break;h.g[q.key]=q}h=l.H?y(l.H):{},l.m?(l.u||(l.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,h)):(l.u="GET",l.g.ea(l.A,l.u,null,h)),W(),ae(l.i,l.u,l.A,l.l,l.R,l.m)}Kt.prototype.ca=function(l){l=l.target;const h=this.M;h&&yr(l)==3?h.j():this.Y(l)},Kt.prototype.Y=function(l){try{if(l==this.g)e:{const bt=yr(this.g);var h=this.g.Ba();const js=this.g.Z();if(!(3>bt)&&(bt!=3||this.g&&(this.h.h||this.g.oa()||C_(this.g)))){this.J||bt!=4||h==7||(h==8||0>=js?W(3):W(2)),mr(this);var p=this.g.Z();this.X=p;t:if(fe(this)){var _=C_(this.g);l="";var D=_.length,M=yr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){gr(this),Gr(this);var q="";break t}this.h.i=new a.TextDecoder}for(h=0;h<D;h++)this.h.h=!0,l+=this.h.i.decode(_[h],{stream:!(M&&h==D-1)});_.length=0,this.h.g+=l,this.C=0,q=this.h.g}else q=this.g.oa();if(this.o=p==200,lt(this.i,this.u,this.A,this.l,this.R,bt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Ne,St=this.g;if((Ne=St.g?St.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(Ne)){var Te=Ne;break t}}Te=null}if(p=Te)ze(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,sd(this,p);else{this.o=!1,this.s=3,Z(12),gr(this),Gr(this);break e}}if(this.P){p=!0;let Nn;for(;!this.J&&this.C<q.length;)if(Nn=Tt(this,q),Nn==qr){bt==4&&(this.s=4,Z(14),p=!1),ze(this.i,this.l,null,"[Incomplete Response]");break}else if(Nn==on){this.s=4,Z(15),ze(this.i,this.l,q,"[Invalid Chunk]"),p=!1;break}else ze(this.i,this.l,Nn,null),sd(this,Nn);if(fe(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),bt!=4||q.length!=0||this.h.h||(this.s=1,Z(16),p=!1),this.o=this.o&&p,!p)ze(this.i,this.l,q,"[Invalid Chunked Response]"),gr(this),Gr(this);else if(0<q.length&&!this.W){this.W=!0;var Dt=this.j;Dt.g==this&&Dt.ba&&!Dt.M&&(Dt.j.info("Great, no buffering proxy detected. Bytes received: "+q.length),hd(Dt),Dt.M=!0,Z(11))}}else ze(this.i,this.l,q,null),sd(this,q);bt==4&&gr(this),this.o&&!this.J&&(bt==4?D_(this.j,this):(this.o=!1,It(this)))}else qR(this.g),p==400&&0<q.indexOf("Unknown SID")?(this.s=3,Z(12)):(this.s=0,Z(13)),gr(this),Gr(this)}}}catch{}finally{}};function fe(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function Tt(l,h){var p=l.C,_=h.indexOf(`
`,p);return _==-1?qr:(p=Number(h.substring(p,_)),isNaN(p)?on:(_+=1,_+p>h.length?qr:(h=h.slice(_,_+p),l.C=_+p,h)))}Kt.prototype.cancel=function(){this.J=!0,gr(this)};function It(l){l.S=Date.now()+l.I,et(l,l.I)}function et(l,h){if(l.B!=null)throw Error("WatchDog timer not null");l.B=G(m(l.ba,l),h)}function mr(l){l.B&&(a.clearTimeout(l.B),l.B=null)}Kt.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(re(this.i,this.A),this.L!=2&&(W(),Z(17)),gr(this),this.s=2,Gr(this)):et(this,this.S-l)};function Gr(l){l.j.G==0||l.J||D_(l.j,l)}function gr(l){mr(l);var h=l.M;h&&typeof h.ma=="function"&&h.ma(),l.M=null,ia(l.U),l.g&&(h=l.g,l.g=null,h.abort(),h.ma())}function sd(l,h){try{var p=l.j;if(p.G!=0&&(p.g==l||od(p.h,l))){if(!l.K&&od(p.h,l)&&p.G==3){try{var _=p.Da.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var D=_;if(D[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<l.F)wu(p),yu(p);else break e;cd(p),Z(18)}}else p.za=D[1],0<p.za-p.T&&37500>D[2]&&p.F&&p.v==0&&!p.C&&(p.C=G(m(p.Za,p),6e3));if(1>=u_(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Hi(p,11)}else if((l.K||p.g==l)&&wu(p),!v(h))for(D=p.Da.g.parse(h),h=0;h<D.length;h++){let Te=D[h];if(p.T=Te[0],Te=Te[1],p.G==2)if(Te[0]=="c"){p.K=Te[1],p.ia=Te[2];const Dt=Te[3];Dt!=null&&(p.la=Dt,p.j.info("VER="+p.la));const bt=Te[4];bt!=null&&(p.Aa=bt,p.j.info("SVER="+p.Aa));const js=Te[5];js!=null&&typeof js=="number"&&0<js&&(_=1.5*js,p.L=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const Nn=l.g;if(Nn){const Tu=Nn.g?Nn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Tu){var M=_.h;M.g||Tu.indexOf("spdy")==-1&&Tu.indexOf("quic")==-1&&Tu.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(ad(M,M.h),M.h=null))}if(_.D){const dd=Nn.g?Nn.g.getResponseHeader("X-HTTP-Session-Id"):null;dd&&(_.ya=dd,Le(_.I,_.D,dd))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-l.F,p.j.info("Handshake RTT: "+p.R+"ms")),_=p;var q=l;if(_.qa=L_(_,_.J?_.ia:null,_.W),q.K){c_(_.h,q);var Ne=q,St=_.L;St&&(Ne.I=St),Ne.B&&(mr(Ne),It(Ne)),_.g=q}else N_(_);0<p.i.length&&vu(p)}else Te[0]!="stop"&&Te[0]!="close"||Hi(p,7);else p.G==3&&(Te[0]=="stop"||Te[0]=="close"?Te[0]=="stop"?Hi(p,7):ud(p):Te[0]!="noop"&&p.l&&p.l.ta(Te),p.v=0)}}W(4)}catch{}}var NR=class{constructor(l,h){this.g=l,this.map=h}};function a_(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function l_(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function u_(l){return l.h?1:l.g?l.g.size:0}function od(l,h){return l.h?l.h==h:l.g?l.g.has(h):!1}function ad(l,h){l.g?l.g.add(h):l.h=h}function c_(l,h){l.h&&l.h==h?l.h=null:l.g&&l.g.has(h)&&l.g.delete(h)}a_.prototype.cancel=function(){if(this.i=h_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function h_(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let h=l.i;for(const p of l.g.values())h=h.concat(p.D);return h}return A(l.i)}function xR(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var h=[],p=l.length,_=0;_<p;_++)h.push(l[_]);return h}h=[],p=0;for(_ in l)h[p++]=l[_];return h}function DR(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var h=[];l=l.length;for(var p=0;p<l;p++)h.push(p);return h}h=[],p=0;for(const _ in l)h[p++]=_;return h}}}function d_(l,h){if(l.forEach&&typeof l.forEach=="function")l.forEach(h,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,h,void 0);else for(var p=DR(l),_=xR(l),D=_.length,M=0;M<D;M++)h.call(void 0,_[M],p&&p[M],l)}var f_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bR(l,h){if(l){l=l.split("&");for(var p=0;p<l.length;p++){var _=l[p].indexOf("="),D=null;if(0<=_){var M=l[p].substring(0,_);D=l[p].substring(_+1)}else M=l[p];h(M,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function Wi(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Wi){this.h=l.h,fu(this,l.j),this.o=l.o,this.g=l.g,pu(this,l.s),this.l=l.l;var h=l.i,p=new ua;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),p_(this,p),this.m=l.m}else l&&(h=String(l).match(f_))?(this.h=!1,fu(this,h[1]||"",!0),this.o=aa(h[2]||""),this.g=aa(h[3]||"",!0),pu(this,h[4]),this.l=aa(h[5]||"",!0),p_(this,h[6]||"",!0),this.m=aa(h[7]||"")):(this.h=!1,this.i=new ua(null,this.h))}Wi.prototype.toString=function(){var l=[],h=this.j;h&&l.push(la(h,m_,!0),":");var p=this.g;return(p||h=="file")&&(l.push("//"),(h=this.o)&&l.push(la(h,m_,!0),"@"),l.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&l.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(la(p,p.charAt(0)=="/"?MR:LR,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",la(p,FR)),l.join("")};function _r(l){return new Wi(l)}function fu(l,h,p){l.j=p?aa(h,!0):h,l.j&&(l.j=l.j.replace(/:$/,""))}function pu(l,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);l.s=h}else l.s=null}function p_(l,h,p){h instanceof ua?(l.i=h,UR(l.i,l.h)):(p||(h=la(h,VR)),l.i=new ua(h,l.h))}function Le(l,h,p){l.i.set(h,p)}function mu(l){return Le(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function aa(l,h){return l?h?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function la(l,h,p){return typeof l=="string"?(l=encodeURI(l).replace(h,OR),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function OR(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var m_=/[#\/\?@]/g,LR=/[#\?:]/g,MR=/[#\?]/g,VR=/[#\?@]/g,FR=/#/g;function ua(l,h){this.h=this.g=null,this.i=l||null,this.j=!!h}function Qr(l){l.g||(l.g=new Map,l.h=0,l.i&&bR(l.i,function(h,p){l.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=ua.prototype,t.add=function(l,h){Qr(this),this.i=null,l=Fs(this,l);var p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(h),this.h+=1,this};function g_(l,h){Qr(l),h=Fs(l,h),l.g.has(h)&&(l.i=null,l.h-=l.g.get(h).length,l.g.delete(h))}function __(l,h){return Qr(l),h=Fs(l,h),l.g.has(h)}t.forEach=function(l,h){Qr(this),this.g.forEach(function(p,_){p.forEach(function(D){l.call(h,D,_,this)},this)},this)},t.na=function(){Qr(this);const l=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let _=0;_<h.length;_++){const D=l[_];for(let M=0;M<D.length;M++)p.push(h[_])}return p},t.V=function(l){Qr(this);let h=[];if(typeof l=="string")__(this,l)&&(h=h.concat(this.g.get(Fs(this,l))));else{l=Array.from(this.g.values());for(let p=0;p<l.length;p++)h=h.concat(l[p])}return h},t.set=function(l,h){return Qr(this),this.i=null,l=Fs(this,l),__(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[h]),this.h+=1,this},t.get=function(l,h){return l?(l=this.V(l),0<l.length?String(l[0]):h):h};function y_(l,h,p){g_(l,h),0<p.length&&(l.i=null,l.g.set(Fs(l,h),A(p)),l.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var _=h[p];const M=encodeURIComponent(String(_)),q=this.V(_);for(_=0;_<q.length;_++){var D=M;q[_]!==""&&(D+="="+encodeURIComponent(String(q[_]))),l.push(D)}}return this.i=l.join("&")};function Fs(l,h){return h=String(h),l.j&&(h=h.toLowerCase()),h}function UR(l,h){h&&!l.j&&(Qr(l),l.i=null,l.g.forEach(function(p,_){var D=_.toLowerCase();_!=D&&(g_(this,_),y_(this,D,p))},l)),l.j=h}function jR(l,h){const p=new oe;if(a.Image){const _=new Image;_.onload=T(Yr,p,"TestLoadImage: loaded",!0,h,_),_.onerror=T(Yr,p,"TestLoadImage: error",!1,h,_),_.onabort=T(Yr,p,"TestLoadImage: abort",!1,h,_),_.ontimeout=T(Yr,p,"TestLoadImage: timeout",!1,h,_),a.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=l}else h(!1)}function BR(l,h){const p=new oe,_=new AbortController,D=setTimeout(()=>{_.abort(),Yr(p,"TestPingServer: timeout",!1,h)},1e4);fetch(l,{signal:_.signal}).then(M=>{clearTimeout(D),M.ok?Yr(p,"TestPingServer: ok",!0,h):Yr(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(D),Yr(p,"TestPingServer: error",!1,h)})}function Yr(l,h,p,_,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),_(p)}catch{}}function zR(){this.g=new Os}function WR(l,h,p){const _=p||"";try{d_(l,function(D,M){let q=D;c(D)&&(q=sa(D)),h.push(_+M+"="+encodeURIComponent(q))})}catch(D){throw h.push(_+"type="+encodeURIComponent("_badmap")),D}}function ca(l){this.l=l.Ub||null,this.j=l.eb||!1}R(ca,Ls),ca.prototype.g=function(){return new gu(this.l,this.j)},ca.prototype.i=function(l){return function(){return l}}({});function gu(l,h){Oe.call(this),this.D=l,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(gu,Oe),t=gu.prototype,t.open=function(l,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=h,this.readyState=1,da(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(h.body=l),(this.D||a).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ha(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,da(this)),this.g&&(this.readyState=3,da(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;v_(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function v_(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var h=l.value?l.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!l.done}))&&(this.response=this.responseText+=h)}l.done?ha(this):da(this),this.readyState==3&&v_(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,ha(this))},t.Qa=function(l){this.g&&(this.response=l,ha(this))},t.ga=function(){this.g&&ha(this)};function ha(l){l.readyState=4,l.l=null,l.j=null,l.v=null,da(l)}t.setRequestHeader=function(l,h){this.u.append(l,h)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=h.next();return l.join(`\r
`)};function da(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(gu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function w_(l){let h="";return $(l,function(p,_){h+=_,h+=":",h+=p,h+=`\r
`}),h}function ld(l,h,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=w_(p),typeof l=="string"?p!=null&&encodeURIComponent(String(p)):Le(l,h,p))}function Ye(l){Oe.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(Ye,Oe);var HR=/^https?$/i,$R=["POST","PUT"];t=Ye.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,h,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);h=h?h.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():gn.g(),this.v=this.o?Ms(this.o):Ms(gn),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(l),!0),this.B=!1}catch(M){E_(this,M);return}if(l=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var D in _)p.set(D,_[D]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const M of _.keys())p.set(M,_.get(M));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(M=>M.toLowerCase()=="content-type"),D=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call($R,h,void 0))||_||D||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,q]of p)this.g.setRequestHeader(M,q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{S_(this),this.u=!0,this.g.send(l),this.u=!1}catch(M){E_(this,M)}};function E_(l,h){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=h,l.m=5,T_(l),_u(l)}function T_(l){l.A||(l.A=!0,Je(l,"complete"),Je(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,Je(this,"complete"),Je(this,"abort"),_u(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),_u(this,!0)),Ye.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?I_(this):this.bb())},t.bb=function(){I_(this)};function I_(l){if(l.h&&typeof o<"u"&&(!l.v[1]||yr(l)!=4||l.Z()!=2)){if(l.u&&yr(l)==4)Bi(l.Ea,0,l);else if(Je(l,"readystatechange"),yr(l)==4){l.h=!1;try{const q=l.Z();e:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var _;if(_=q===0){var D=String(l.D).match(f_)[1]||null;!D&&a.self&&a.self.location&&(D=a.self.location.protocol.slice(0,-1)),_=!HR.test(D?D.toLowerCase():"")}p=_}if(p)Je(l,"complete"),Je(l,"success");else{l.m=6;try{var M=2<yr(l)?l.g.statusText:""}catch{M=""}l.l=M+" ["+l.Z()+"]",T_(l)}}finally{_u(l)}}}}function _u(l,h){if(l.g){S_(l);const p=l.g,_=l.v[0]?()=>{}:null;l.g=null,l.v=null,h||Je(l,"ready");try{p.onreadystatechange=_}catch{}}}function S_(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function yr(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<yr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var h=this.g.responseText;return l&&h.indexOf(l)==0&&(h=h.substring(l.length)),hu(h)}};function C_(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function qR(l){const h={};l=(l.g&&2<=yr(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<l.length;_++){if(v(l[_]))continue;var p=k(l[_]);const D=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const M=h[D]||[];h[D]=M,M.push(p)}g(h,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function fa(l,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||h}function R_(l){this.Aa=0,this.i=[],this.j=new oe,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=fa("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=fa("baseRetryDelayMs",5e3,l),this.cb=fa("retryDelaySeedMs",1e4,l),this.Wa=fa("forwardChannelMaxRetries",2,l),this.wa=fa("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new a_(l&&l.concurrentRequestLimit),this.Da=new zR,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=R_.prototype,t.la=8,t.G=1,t.connect=function(l,h,p,_){Z(0),this.W=l,this.H=h||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.I=L_(this,null,this.W),vu(this)};function ud(l){if(A_(l),l.G==3){var h=l.U++,p=_r(l.I);if(Le(p,"SID",l.K),Le(p,"RID",h),Le(p,"TYPE","terminate"),pa(l,p),h=new Kt(l,l.j,h),h.L=2,h.v=mu(_r(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=h.v,p=!0),p||(h.g=M_(h.j,null),h.g.ea(h.v)),h.F=Date.now(),It(h)}O_(l)}function yu(l){l.g&&(hd(l),l.g.cancel(),l.g=null)}function A_(l){yu(l),l.u&&(a.clearTimeout(l.u),l.u=null),wu(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function vu(l){if(!l_(l.h)&&!l.s){l.s=!0;var h=l.Ga;Jt||se(),H||(Jt(),H=!0),ne.add(h,l),l.B=0}}function KR(l,h){return u_(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=h.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=G(m(l.Ga,l,h),b_(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const D=new Kt(this,this.j,l);let M=this.o;if(this.S&&(M?(M=y(M),I(M,this.S)):M=this.S),this.m!==null||this.O||(D.H=M,M=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=P_(this,D,h),p=_r(this.I),Le(p,"RID",l),Le(p,"CVER",22),this.D&&Le(p,"X-HTTP-Session-Id",this.D),pa(this,p),M&&(this.O?h="headers="+encodeURIComponent(String(w_(M)))+"&"+h:this.m&&ld(p,this.m,M)),ad(this.h,D),this.Ua&&Le(p,"TYPE","init"),this.P?(Le(p,"$req",h),Le(p,"SID","null"),D.T=!0,Kr(D,p,null)):Kr(D,p,h),this.G=2}}else this.G==3&&(l?k_(this,l):this.i.length==0||l_(this.h)||k_(this))};function k_(l,h){var p;h?p=h.l:p=l.U++;const _=_r(l.I);Le(_,"SID",l.K),Le(_,"RID",p),Le(_,"AID",l.T),pa(l,_),l.m&&l.o&&ld(_,l.m,l.o),p=new Kt(l,l.j,p,l.B+1),l.m===null&&(p.H=l.o),h&&(l.i=h.D.concat(l.i)),h=P_(l,p,1e3),p.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),ad(l.h,p),Kr(p,_,h)}function pa(l,h){l.H&&$(l.H,function(p,_){Le(h,_,p)}),l.l&&d_({},function(p,_){Le(h,_,p)})}function P_(l,h,p){p=Math.min(l.i.length,p);var _=l.l?m(l.l.Na,l.l,l):null;e:{var D=l.i;let M=-1;for(;;){const q=["count="+p];M==-1?0<p?(M=D[0].g,q.push("ofs="+M)):M=0:q.push("ofs="+M);let Ne=!0;for(let St=0;St<p;St++){let Te=D[St].g;const Dt=D[St].map;if(Te-=M,0>Te)M=Math.max(0,D[St].g-100),Ne=!1;else try{WR(Dt,q,"req"+Te+"_")}catch{_&&_(Dt)}}if(Ne){_=q.join("&");break e}}}return l=l.i.splice(0,p),h.D=l,_}function N_(l){if(!l.g&&!l.u){l.Y=1;var h=l.Fa;Jt||se(),H||(Jt(),H=!0),ne.add(h,l),l.v=0}}function cd(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=G(m(l.Fa,l),b_(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,x_(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=G(m(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Z(10),yu(this),x_(this))};function hd(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function x_(l){l.g=new Kt(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var h=_r(l.qa);Le(h,"RID","rpc"),Le(h,"SID",l.K),Le(h,"AID",l.T),Le(h,"CI",l.F?"0":"1"),!l.F&&l.ja&&Le(h,"TO",l.ja),Le(h,"TYPE","xmlhttp"),pa(l,h),l.m&&l.o&&ld(h,l.m,l.o),l.L&&(l.g.I=l.L);var p=l.g;l=l.ia,p.L=1,p.v=mu(_r(h)),p.m=null,p.P=!0,zi(p,l)}t.Za=function(){this.C!=null&&(this.C=null,yu(this),cd(this),Z(19))};function wu(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function D_(l,h){var p=null;if(l.g==h){wu(l),hd(l),l.g=null;var _=2}else if(od(l.h,h))p=h.D,c_(l.h,h),_=1;else return;if(l.G!=0){if(h.o)if(_==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var D=l.B;_=O(),Je(_,new ee(_,p)),vu(l)}else N_(l);else if(D=h.s,D==3||D==0&&0<h.X||!(_==1&&KR(l,h)||_==2&&cd(l)))switch(p&&0<p.length&&(h=l.h,h.i=h.i.concat(p)),D){case 1:Hi(l,5);break;case 4:Hi(l,10);break;case 3:Hi(l,6);break;default:Hi(l,2)}}}function b_(l,h){let p=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(p*=2),p*h}function Hi(l,h){if(l.j.info("Error code "+h),h==2){var p=m(l.fb,l),_=l.Xa;const D=!_;_=new Wi(_||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||fu(_,"https"),mu(_),D?jR(_.toString(),p):BR(_.toString(),p)}else Z(2);l.G=0,l.l&&l.l.sa(h),O_(l),A_(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Z(2)):(this.j.info("Failed to ping google.com"),Z(1))};function O_(l){if(l.G=0,l.ka=[],l.l){const h=h_(l.h);(h.length!=0||l.i.length!=0)&&(P(l.ka,h),P(l.ka,l.i),l.h.i.length=0,A(l.i),l.i.length=0),l.l.ra()}}function L_(l,h,p){var _=p instanceof Wi?_r(p):new Wi(p);if(_.g!="")h&&(_.g=h+"."+_.g),pu(_,_.s);else{var D=a.location;_=D.protocol,h=h?h+"."+D.hostname:D.hostname,D=+D.port;var M=new Wi(null);_&&fu(M,_),h&&(M.g=h),D&&pu(M,D),p&&(M.l=p),_=M}return p=l.D,h=l.ya,p&&h&&Le(_,p,h),Le(_,"VER",l.la),pa(l,_),_}function M_(l,h,p){if(h&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=l.Ca&&!l.pa?new Ye(new ca({eb:p})):new Ye(l.pa),h.Ha(l.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function V_(){}t=V_.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Eu(){}Eu.prototype.g=function(l,h){return new an(l,h)};function an(l,h){Oe.call(this),this.g=new R_(h),this.l=l,this.h=h&&h.messageUrlParams||null,l=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(l?l["X-WebChannel-Content-Type"]=h.messageContentType:l={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(l?l["X-WebChannel-Client-Profile"]=h.va:l={"X-WebChannel-Client-Profile":h.va}),this.g.S=l,(l=h&&h.Sb)&&!v(l)&&(this.g.m=l),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!v(h)&&(this.g.D=h,l=this.h,l!==null&&h in l&&(l=this.h,h in l&&delete l[h])),this.j=new Us(this)}R(an,Oe),an.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},an.prototype.close=function(){ud(this.g)},an.prototype.o=function(l){var h=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.u&&(p={},p.__data__=sa(l),l=p);h.i.push(new NR(h.Ya++,l)),h.G==3&&vu(h)},an.prototype.N=function(){this.g.l=null,delete this.j,ud(this.g),delete this.g,an.aa.N.call(this)};function F_(l){oa.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var h=l.__sm__;if(h){e:{for(const p in h){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,h=h!==null&&l in h?h[l]:void 0),this.data=h}else this.data=l}R(F_,oa);function U_(){Vs.call(this),this.status=1}R(U_,Vs);function Us(l){this.g=l}R(Us,V_),Us.prototype.ua=function(){Je(this.g,"a")},Us.prototype.ta=function(l){Je(this.g,new F_(l))},Us.prototype.sa=function(l){Je(this.g,new U_)},Us.prototype.ra=function(){Je(this.g,"b")},Eu.prototype.createWebChannel=Eu.prototype.g,an.prototype.send=an.prototype.o,an.prototype.open=an.prototype.m,an.prototype.close=an.prototype.close,qI=function(){return new Eu},$I=function(){return O()},HI=fr,_p={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},$e.NO_ERROR=0,$e.TIMEOUT=8,$e.HTTP_ERROR=6,dc=$e,$r.COMPLETE="complete",WI=$r,du.EventType=Hr,Hr.OPEN="a",Hr.CLOSE="b",Hr.ERROR="c",Hr.MESSAGE="d",Oe.prototype.listen=Oe.prototype.K,Va=du,zI=ca,Ye.prototype.listenOnce=Ye.prototype.L,Ye.prototype.getLastError=Ye.prototype.Ka,Ye.prototype.getLastErrorCode=Ye.prototype.Ba,Ye.prototype.getStatus=Ye.prototype.Z,Ye.prototype.getResponseJson=Ye.prototype.Oa,Ye.prototype.getResponseText=Ye.prototype.oa,Ye.prototype.send=Ye.prototype.ea,Ye.prototype.setWithCredentials=Ye.prototype.Ha,BI=Ye}).apply(typeof zu<"u"?zu:typeof self<"u"?self:typeof window<"u"?window:{});const $v="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Vt.UNAUTHENTICATED=new Vt(null),Vt.GOOGLE_CREDENTIALS=new Vt("google-credentials-uid"),Vt.FIRST_PARTY=new Vt("first-party-uid"),Vt.MOCK_USER=new Vt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qo="10.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms=new Oh("@firebase/firestore");function Ra(){return ms.logLevel}function X(t,...e){if(ms.logLevel<=me.DEBUG){const n=e.map(hg);ms.debug(`Firestore (${qo}): ${t}`,...n)}}function Mr(t,...e){if(ms.logLevel<=me.ERROR){const n=e.map(hg);ms.error(`Firestore (${qo}): ${t}`,...n)}}function xo(t,...e){if(ms.logLevel<=me.WARN){const n=e.map(hg);ms.warn(`Firestore (${qo}): ${t}`,...n)}}function hg(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function le(t="Unexpected state"){const e=`FIRESTORE (${qo}) INTERNAL ASSERTION FAILED: `+t;throw Mr(e),new Error(e)}function be(t,e){t||le()}function ce(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class J extends jr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class sO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Vt.UNAUTHENTICATED))}shutdown(){}}class oO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class aO{constructor(e){this.t=e,this.currentUser=Vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new vi;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new vi,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new vi)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(be(typeof r.accessToken=="string"),new KI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return be(e===null||typeof e=="string"),new Vt(e)}}class lO{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Vt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class uO{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new lO(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Vt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class cO{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hO{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(be(typeof n.token=="string"),this.R=n.token,new cO(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dO(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=dO(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Ie(t,e){return t<e?-1:t>e?1:0}function Do(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new J(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new J(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new J(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new J(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ht.fromMillis(Date.now())}static fromDate(e){return ht.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ht(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ie(this.nanoseconds,e.nanoseconds):Ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ue(e)}static min(){return new ue(new ht(0,0))}static max(){return new ue(new ht(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e,n,r){n===void 0?n=0:n>e.length&&le(),r===void 0?r=e.length-n:r>e.length-n&&le(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return kl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof kl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ue extends kl{construct(e,n,r){return new Ue(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new J(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ue(n)}static emptyPath(){return new Ue([])}}const fO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class At extends kl{construct(e,n,r){return new At(e,n,r)}static isValidIdentifier(e){return fO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),At.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new At(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new J(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new J(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new J(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new J(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new At(n)}static emptyPath(){return new At([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.path=e}static fromPath(e){return new te(Ue.fromString(e))}static fromName(e){return new te(Ue.fromString(e).popFirst(5))}static empty(){return new te(Ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ue.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new te(new Ue(e.slice()))}}function pO(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ue.fromTimestamp(r===1e9?new ht(n+1,0):new ht(n,r));return new ki(i,te.empty(),e)}function mO(t){return new ki(t.readTime,t.key,-1)}class ki{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ki(ue.min(),te.empty(),-1)}static max(){return new ki(ue.max(),te.empty(),-1)}}function gO(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=te.comparator(t.documentKey,e.documentKey),n!==0?n:Ie(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _O="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class yO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yl(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==_O)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&le(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,r)=>{n(e)})}static reject(e){return new j((n,r)=>{r(e)})}static waitFor(e){return new j((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next(i=>i?j.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new j((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++a,a===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new j((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function vO(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Xl(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class dg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}dg.oe=-1;function Uh(t){return t==null}function Jc(t){return t===0&&1/t==-1/0}function wO(t){return typeof t=="number"&&Number.isInteger(t)&&!Jc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ko(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function QI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ot=class yp{constructor(e,n){this.comparator=e,this.root=n||wi.EMPTY}insert(e,n){return new yp(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,wi.BLACK,null,null))}remove(e){return new yp(this.comparator,this.root.remove(e,this.comparator).copy(null,null,wi.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Wu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Wu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Wu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Wu(this.root,e,this.comparator,!0)}},Wu=class{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},wi=class vr{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??vr.RED,this.left=i??vr.EMPTY,this.right=s??vr.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new vr(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return vr.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return vr.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,vr.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,vr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw le();const e=this.left.check();if(e!==this.right.check())throw le();return e+(this.isRed()?0:1)}};wi.EMPTY=null,wi.RED=!0,wi.BLACK=!1;wi.EMPTY=new class{constructor(){this.size=0}get key(){throw le()}get value(){throw le()}get color(){throw le()}get left(){throw le()}get right(){throw le()}copy(e,n,r,i,s){return this}insert(e,n,r){return new wi(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.comparator=e,this.data=new ot(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Kv(this.data.getIterator())}getIteratorFrom(e){return new Kv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Pt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Pt(this.comparator);return n.data=e,n}}class Kv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e){this.fields=e,e.sort(At.comparator)}static empty(){return new Fn([])}unionWith(e){let n=new Pt(At.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Fn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Do(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class YI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new YI("Invalid base64 string: "+s):s}}(e);return new $t(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new $t(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}$t.EMPTY_BYTE_STRING=new $t("");const EO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pi(t){if(be(!!t),typeof t=="string"){let e=0;const n=EO.exec(t);if(be(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:rt(t.seconds),nanos:rt(t.nanos)}}function rt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function gs(t){return typeof t=="string"?$t.fromBase64String(t):$t.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function pg(t){const e=t.mapValue.fields.__previous_value__;return fg(e)?pg(e):e}function Pl(t){const e=Pi(t.mapValue.fields.__local_write_time__.timestampValue);return new ht(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TO{constructor(e,n,r,i,s,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class Nl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Nl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Nl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function _s(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?fg(t)?4:IO(t)?9007199254740991:10:le()}function ur(t,e){if(t===e)return!0;const n=_s(t);if(n!==_s(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Pl(t).isEqual(Pl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Pi(i.timestampValue),a=Pi(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return gs(i.bytesValue).isEqual(gs(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return rt(i.geoPointValue.latitude)===rt(s.geoPointValue.latitude)&&rt(i.geoPointValue.longitude)===rt(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return rt(i.integerValue)===rt(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=rt(i.doubleValue),a=rt(s.doubleValue);return o===a?Jc(o)===Jc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Do(t.arrayValue.values||[],e.arrayValue.values||[],ur);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(qv(o)!==qv(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!ur(o[u],a[u])))return!1;return!0}(t,e);default:return le()}}function xl(t,e){return(t.values||[]).find(n=>ur(n,e))!==void 0}function bo(t,e){if(t===e)return 0;const n=_s(t),r=_s(e);if(n!==r)return Ie(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ie(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=rt(s.integerValue||s.doubleValue),u=rt(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return Gv(t.timestampValue,e.timestampValue);case 4:return Gv(Pl(t),Pl(e));case 5:return Ie(t.stringValue,e.stringValue);case 6:return function(s,o){const a=gs(s),u=gs(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const d=Ie(a[c],u[c]);if(d!==0)return d}return Ie(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=Ie(rt(s.latitude),rt(o.latitude));return a!==0?a:Ie(rt(s.longitude),rt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],u=o.values||[];for(let c=0;c<a.length&&c<u.length;++c){const d=bo(a[c],u[c]);if(d)return d}return Ie(a.length,u.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Hu.mapValue&&o===Hu.mapValue)return 0;if(s===Hu.mapValue)return 1;if(o===Hu.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let f=0;f<u.length&&f<d.length;++f){const m=Ie(u[f],d[f]);if(m!==0)return m;const T=bo(a[u[f]],c[d[f]]);if(T!==0)return T}return Ie(u.length,d.length)}(t.mapValue,e.mapValue);default:throw le()}}function Gv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ie(t,e);const n=Pi(t),r=Pi(e),i=Ie(n.seconds,r.seconds);return i!==0?i:Ie(n.nanos,r.nanos)}function Oo(t){return vp(t)}function vp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Pi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return gs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return te.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=vp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${vp(n.fields[o])}`;return i+"}"}(t.mapValue):le()}function Qv(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function wp(t){return!!t&&"integerValue"in t}function mg(t){return!!t&&"arrayValue"in t}function Yv(t){return!!t&&"nullValue"in t}function Xv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function fc(t){return!!t&&"mapValue"in t}function Xa(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ko(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Xa(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Xa(t.arrayValue.values[n]);return e}return Object.assign({},t)}function IO(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e){this.value=e}static empty(){return new En({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!fc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Xa(n)}setAll(e){let n=At.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Xa(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());fc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ur(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];fc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ko(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new En(Xa(this.value))}}function XI(t){const e=[];return Ko(t.fields,(n,r)=>{const i=new At([n]);if(fc(r)){const s=XI(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Fn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ut(e,0,ue.min(),ue.min(),ue.min(),En.empty(),0)}static newFoundDocument(e,n,r,i){return new Ut(e,1,n,ue.min(),r,i,0)}static newNoDocument(e,n){return new Ut(e,2,n,ue.min(),ue.min(),En.empty(),0)}static newUnknownDocument(e,n){return new Ut(e,3,n,ue.min(),ue.min(),En.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ue.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=En.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=En.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ue.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Zc{constructor(e,n){this.position=e,this.inclusive=n}}function Jv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=te.comparator(te.fromName(o.referenceValue),n.key):r=bo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Zv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ur(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class eh{constructor(e,n="asc"){this.field=e,this.dir=n}}function SO(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class JI{}class st extends JI{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new RO(e,n,r):n==="array-contains"?new PO(e,r):n==="in"?new NO(e,r):n==="not-in"?new xO(e,r):n==="array-contains-any"?new DO(e,r):new st(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new AO(e,r):new kO(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(bo(n,this.value)):n!==null&&_s(this.value)===_s(n)&&this.matchesComparison(bo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return le()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Hn extends JI{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Hn(e,n)}matches(e){return ZI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ZI(t){return t.op==="and"}function eS(t){return CO(t)&&ZI(t)}function CO(t){for(const e of t.filters)if(e instanceof Hn)return!1;return!0}function Ep(t){if(t instanceof st)return t.field.canonicalString()+t.op.toString()+Oo(t.value);if(eS(t))return t.filters.map(e=>Ep(e)).join(",");{const e=t.filters.map(n=>Ep(n)).join(",");return`${t.op}(${e})`}}function tS(t,e){return t instanceof st?function(r,i){return i instanceof st&&r.op===i.op&&r.field.isEqual(i.field)&&ur(r.value,i.value)}(t,e):t instanceof Hn?function(r,i){return i instanceof Hn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&tS(o,i.filters[a]),!0):!1}(t,e):void le()}function nS(t){return t instanceof st?function(n){return`${n.field.canonicalString()} ${n.op} ${Oo(n.value)}`}(t):t instanceof Hn?function(n){return n.op.toString()+" {"+n.getFilters().map(nS).join(" ,")+"}"}(t):"Filter"}class RO extends st{constructor(e,n,r){super(e,n,r),this.key=te.fromName(r.referenceValue)}matches(e){const n=te.comparator(e.key,this.key);return this.matchesComparison(n)}}class AO extends st{constructor(e,n){super(e,"in",n),this.keys=rS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class kO extends st{constructor(e,n){super(e,"not-in",n),this.keys=rS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function rS(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>te.fromName(r.referenceValue))}class PO extends st{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return mg(n)&&xl(n.arrayValue,this.value)}}class NO extends st{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&xl(this.value.arrayValue,n)}}class xO extends st{constructor(e,n){super(e,"not-in",n)}matches(e){if(xl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!xl(this.value.arrayValue,n)}}class DO extends st{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!mg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>xl(this.value.arrayValue,r))}}/**
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
 */class bO{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function ew(t,e=null,n=[],r=[],i=null,s=null,o=null){return new bO(t,e,n,r,i,s,o)}function gg(t){const e=ce(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ep(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Uh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Oo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Oo(r)).join(",")),e.ue=n}return e.ue}function _g(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!SO(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!tS(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Zv(t.startAt,e.startAt)&&Zv(t.endAt,e.endAt)}function Tp(t){return te.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function OO(t,e,n,r,i,s,o,a){return new Jl(t,e,n,r,i,s,o,a)}function iS(t){return new Jl(t)}function tw(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function sS(t){return t.collectionGroup!==null}function Ja(t){const e=ce(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Pt(At.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new eh(s,r))}),n.has(At.keyField().canonicalString())||e.ce.push(new eh(At.keyField(),r))}return e.ce}function ar(t){const e=ce(t);return e.le||(e.le=LO(e,Ja(t))),e.le}function LO(t,e){if(t.limitType==="F")return ew(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new eh(i.field,s)});const n=t.endAt?new Zc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Zc(t.startAt.position,t.startAt.inclusive):null;return ew(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ip(t,e){const n=t.filters.concat([e]);return new Jl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Sp(t,e,n){return new Jl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function jh(t,e){return _g(ar(t),ar(e))&&t.limitType===e.limitType}function oS(t){return`${gg(ar(t))}|lt:${t.limitType}`}function Hs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>nS(i)).join(", ")}]`),Uh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Oo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Oo(i)).join(",")),`Target(${r})`}(ar(t))}; limitType=${t.limitType})`}function Bh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):te.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ja(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=Jv(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,Ja(r),i)||r.endAt&&!function(o,a,u){const c=Jv(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,Ja(r),i))}(t,e)}function MO(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function aS(t){return(e,n)=>{let r=!1;for(const i of Ja(t)){const s=VO(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function VO(t,e,n){const r=t.field.isKeyField()?te.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?bo(u,c):le()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return le()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ko(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return QI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FO=new ot(te.comparator);function Vr(){return FO}const lS=new ot(te.comparator);function Fa(...t){let e=lS;for(const n of t)e=e.insert(n.key,n);return e}function uS(t){let e=lS;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function es(){return Za()}function cS(){return Za()}function Za(){return new Go(t=>t.toString(),(t,e)=>t.isEqual(e))}const UO=new ot(te.comparator),jO=new Pt(te.comparator);function ge(...t){let e=jO;for(const n of t)e=e.add(n);return e}const BO=new Pt(Ie);function zO(){return BO}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hS(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Jc(e)?"-0":e}}function dS(t){return{integerValue:""+t}}function WO(t,e){return wO(e)?dS(e):hS(t,e)}/**
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
 */class zh{constructor(){this._=void 0}}function HO(t,e,n){return t instanceof th?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&fg(s)&&(s=pg(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Dl?pS(t,e):t instanceof bl?mS(t,e):function(i,s){const o=fS(i,s),a=nw(o)+nw(i.Pe);return wp(o)&&wp(i.Pe)?dS(a):hS(i.serializer,a)}(t,e)}function $O(t,e,n){return t instanceof Dl?pS(t,e):t instanceof bl?mS(t,e):n}function fS(t,e){return t instanceof nh?function(r){return wp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class th extends zh{}class Dl extends zh{constructor(e){super(),this.elements=e}}function pS(t,e){const n=gS(e);for(const r of t.elements)n.some(i=>ur(i,r))||n.push(r);return{arrayValue:{values:n}}}class bl extends zh{constructor(e){super(),this.elements=e}}function mS(t,e){let n=gS(e);for(const r of t.elements)n=n.filter(i=>!ur(i,r));return{arrayValue:{values:n}}}class nh extends zh{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function nw(t){return rt(t.integerValue||t.doubleValue)}function gS(t){return mg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function qO(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Dl&&i instanceof Dl||r instanceof bl&&i instanceof bl?Do(r.elements,i.elements,ur):r instanceof nh&&i instanceof nh?ur(r.Pe,i.Pe):r instanceof th&&i instanceof th}(t.transform,e.transform)}class KO{constructor(e,n){this.version=e,this.transformResults=n}}class Pr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Pr}static exists(e){return new Pr(void 0,e)}static updateTime(e){return new Pr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function pc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Wh{}function _S(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new vS(t.key,Pr.none()):new Zl(t.key,t.data,Pr.none());{const n=t.data,r=En.empty();let i=new Pt(At.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Cs(t.key,r,new Fn(i.toArray()),Pr.none())}}function GO(t,e,n){t instanceof Zl?function(i,s,o){const a=i.value.clone(),u=iw(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Cs?function(i,s,o){if(!pc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=iw(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(yS(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function el(t,e,n,r){return t instanceof Zl?function(s,o,a,u){if(!pc(s.precondition,o))return a;const c=s.value.clone(),d=sw(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Cs?function(s,o,a,u){if(!pc(s.precondition,o))return a;const c=sw(s.fieldTransforms,u,o),d=o.data;return d.setAll(yS(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return pc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function QO(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=fS(r.transform,i||null);s!=null&&(n===null&&(n=En.empty()),n.set(r.field,s))}return n||null}function rw(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Do(r,i,(s,o)=>qO(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Zl extends Wh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Cs extends Wh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function yS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function iw(t,e,n){const r=new Map;be(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,$O(o,a,n[i]))}return r}function sw(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,HO(s,o,e))}return r}class vS extends Wh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class YO extends Wh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XO{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&GO(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=el(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=el(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=cS();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=_S(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(ue.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ge())}isEqual(e){return this.batchId===e.batchId&&Do(this.mutations,e.mutations,(n,r)=>rw(n,r))&&Do(this.baseMutations,e.baseMutations,(n,r)=>rw(n,r))}}class yg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){be(e.mutations.length===r.length);let i=function(){return UO}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new yg(e,n,r,i)}}/**
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
 */class JO{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class ZO{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tt,ye;function eL(t){switch(t){default:return le();case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0}}function wS(t){if(t===void 0)return Mr("GRPC error has no .code"),U.UNKNOWN;switch(t){case tt.OK:return U.OK;case tt.CANCELLED:return U.CANCELLED;case tt.UNKNOWN:return U.UNKNOWN;case tt.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case tt.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case tt.INTERNAL:return U.INTERNAL;case tt.UNAVAILABLE:return U.UNAVAILABLE;case tt.UNAUTHENTICATED:return U.UNAUTHENTICATED;case tt.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case tt.NOT_FOUND:return U.NOT_FOUND;case tt.ALREADY_EXISTS:return U.ALREADY_EXISTS;case tt.PERMISSION_DENIED:return U.PERMISSION_DENIED;case tt.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case tt.ABORTED:return U.ABORTED;case tt.OUT_OF_RANGE:return U.OUT_OF_RANGE;case tt.UNIMPLEMENTED:return U.UNIMPLEMENTED;case tt.DATA_LOSS:return U.DATA_LOSS;default:return le()}}(ye=tt||(tt={}))[ye.OK=0]="OK",ye[ye.CANCELLED=1]="CANCELLED",ye[ye.UNKNOWN=2]="UNKNOWN",ye[ye.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ye[ye.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ye[ye.NOT_FOUND=5]="NOT_FOUND",ye[ye.ALREADY_EXISTS=6]="ALREADY_EXISTS",ye[ye.PERMISSION_DENIED=7]="PERMISSION_DENIED",ye[ye.UNAUTHENTICATED=16]="UNAUTHENTICATED",ye[ye.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ye[ye.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ye[ye.ABORTED=10]="ABORTED",ye[ye.OUT_OF_RANGE=11]="OUT_OF_RANGE",ye[ye.UNIMPLEMENTED=12]="UNIMPLEMENTED",ye[ye.INTERNAL=13]="INTERNAL",ye[ye.UNAVAILABLE=14]="UNAVAILABLE",ye[ye.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function tL(){return new TextEncoder}/**
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
 */const nL=new is([4294967295,4294967295],0);function ow(t){const e=tL().encode(t),n=new jI;return n.update(e),new Uint8Array(n.digest())}function aw(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new is([n,r],0),new is([i,s],0)]}class vg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ua(`Invalid padding: ${n}`);if(r<0)throw new Ua(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ua(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ua(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=is.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(is.fromNumber(r)));return i.compare(nL)===1&&(i=new is([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=ow(e),[r,i]=aw(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new vg(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=ow(e),[r,i]=aw(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ua extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,eu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Hh(ue.min(),i,new ot(Ie),Vr(),ge())}}class eu{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new eu(r,n,ge(),ge(),ge())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class ES{constructor(e,n){this.targetId=e,this.me=n}}class TS{constructor(e,n,r=$t.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class lw{constructor(){this.fe=0,this.ge=cw(),this.pe=$t.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=ge(),n=ge(),r=ge();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:le()}}),new eu(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=cw()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,be(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class rL{constructor(e){this.Le=e,this.Be=new Map,this.ke=Vr(),this.qe=uw(),this.Qe=new ot(Ie)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:le()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Tp(s))if(r===0){const o=new te(s.path);this.Ue(n,o,Ut.newNoDocument(o,ue.min()))}else be(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=gs(r).toUint8Array()}catch(u){if(u instanceof YI)return xo("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new vg(o,i,s)}catch(u){return xo(u instanceof Ua?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&Tp(a.target)){const u=new te(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Ut.newNoDocument(u,e))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=ge();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Hh(e,n,this.Qe,this.ke,r);return this.ke=Vr(),this.qe=uw(),this.Qe=new ot(Ie),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new lw,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Pt(Ie),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new lw),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function uw(){return new ot(te.comparator)}function cw(){return new ot(te.comparator)}const iL={asc:"ASCENDING",desc:"DESCENDING"},sL={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},oL={and:"AND",or:"OR"};class aL{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Cp(t,e){return t.useProto3Json||Uh(e)?e:{value:e}}function rh(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function IS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function lL(t,e){return rh(t,e.toTimestamp())}function lr(t){return be(!!t),ue.fromTimestamp(function(n){const r=Pi(n);return new ht(r.seconds,r.nanos)}(t))}function wg(t,e){return Rp(t,e).canonicalString()}function Rp(t,e){const n=function(i){return new Ue(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function SS(t){const e=Ue.fromString(t);return be(PS(e)),e}function Ap(t,e){return wg(t.databaseId,e.path)}function Xd(t,e){const n=SS(e);if(n.get(1)!==t.databaseId.projectId)throw new J(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new J(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new te(RS(n))}function CS(t,e){return wg(t.databaseId,e)}function uL(t){const e=SS(t);return e.length===4?Ue.emptyPath():RS(e)}function kp(t){return new Ue(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function RS(t){return be(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function hw(t,e,n){return{name:Ap(t,e),fields:n.value.mapValue.fields}}function cL(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:le()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(be(d===void 0||typeof d=="string"),$t.fromBase64String(d||"")):(be(d===void 0||d instanceof Buffer||d instanceof Uint8Array),$t.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const d=c.code===void 0?U.UNKNOWN:wS(c.code);return new J(d,c.message||"")}(o);n=new TS(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Xd(t,r.document.name),s=lr(r.document.updateTime),o=r.document.createTime?lr(r.document.createTime):ue.min(),a=new En({mapValue:{fields:r.document.fields}}),u=Ut.newFoundDocument(i,s,o,a),c=r.targetIds||[],d=r.removedTargetIds||[];n=new mc(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Xd(t,r.document),s=r.readTime?lr(r.readTime):ue.min(),o=Ut.newNoDocument(i,s),a=r.removedTargetIds||[];n=new mc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Xd(t,r.document),s=r.removedTargetIds||[];n=new mc([],s,i,null)}else{if(!("filter"in e))return le();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new ZO(i,s),a=r.targetId;n=new ES(a,o)}}return n}function hL(t,e){let n;if(e instanceof Zl)n={update:hw(t,e.key,e.value)};else if(e instanceof vS)n={delete:Ap(t,e.key)};else if(e instanceof Cs)n={update:hw(t,e.key,e.data),updateMask:wL(e.fieldMask)};else{if(!(e instanceof YO))return le();n={verify:Ap(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof th)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Dl)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof bl)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof nh)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw le()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:lL(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:le()}(t,e.precondition)),n}function dL(t,e){return t&&t.length>0?(be(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?lr(i.updateTime):lr(s);return o.isEqual(ue.min())&&(o=lr(s)),new KO(o,i.transformResults||[])}(n,e))):[]}function fL(t,e){return{documents:[CS(t,e.path)]}}function pL(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=CS(t,i);const s=function(c){if(c.length!==0)return kS(Hn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:$s(m.field),direction:_L(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Cp(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function mL(t){let e=uL(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){be(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(f){const m=AS(f);return m instanceof Hn&&eS(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(R){return new eh(qs(R.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,Uh(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(f){const m=!!f.before,T=f.values||[];return new Zc(T,m)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const m=!f.before,T=f.values||[];return new Zc(T,m)}(n.endAt)),OO(e,i,o,s,a,"F",u,c)}function gL(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return le()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function AS(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=qs(n.unaryFilter.field);return st.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=qs(n.unaryFilter.field);return st.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=qs(n.unaryFilter.field);return st.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=qs(n.unaryFilter.field);return st.create(o,"!=",{nullValue:"NULL_VALUE"});default:return le()}}(t):t.fieldFilter!==void 0?function(n){return st.create(qs(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return le()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Hn.create(n.compositeFilter.filters.map(r=>AS(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return le()}}(n.compositeFilter.op))}(t):le()}function _L(t){return iL[t]}function yL(t){return sL[t]}function vL(t){return oL[t]}function $s(t){return{fieldPath:t.canonicalString()}}function qs(t){return At.fromServerFormat(t.fieldPath)}function kS(t){return t instanceof st?function(n){if(n.op==="=="){if(Xv(n.value))return{unaryFilter:{field:$s(n.field),op:"IS_NAN"}};if(Yv(n.value))return{unaryFilter:{field:$s(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Xv(n.value))return{unaryFilter:{field:$s(n.field),op:"IS_NOT_NAN"}};if(Yv(n.value))return{unaryFilter:{field:$s(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:$s(n.field),op:yL(n.op),value:n.value}}}(t):t instanceof Hn?function(n){const r=n.getFilters().map(i=>kS(i));return r.length===1?r[0]:{compositeFilter:{op:vL(n.op),filters:r}}}(t):le()}function wL(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function PS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,n,r,i,s=ue.min(),o=ue.min(),a=$t.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new li(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new li(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new li(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new li(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EL{constructor(e){this.ct=e}}function TL(t){const e=mL({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Sp(e,e.limit,"L"):e}/**
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
 */class IL{constructor(){this._n=new SL}addToCollectionParentIndex(e,n){return this._n.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(ki.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(ki.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class SL{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Pt(Ue.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Pt(Ue.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Lo(0)}static Ln(){return new Lo(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CL{constructor(){this.changes=new Go(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ut.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class RL{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AL{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&el(r.mutation,i,Fn.empty(),ht.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ge()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ge()){const i=es();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Fa();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=es();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ge()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Vr();const o=Za(),a=function(){return Za()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof Cs)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),el(d.mutation,c,d.mutation.getFieldMask(),ht.now())):o.set(c.key,Fn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var f;return a.set(c,new RL(d,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Za();let i=new ot((o,a)=>o-a),s=ge();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||Fn.empty();d=a.applyToLocalView(c,d),r.set(u,d);const f=(i.get(a.batchId)||ge()).add(u);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,d=u.value,f=cS();d.forEach(m=>{if(!s.has(m)){const T=_S(n.get(m),r.get(m));T!==null&&f.set(m,T),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return j.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return te.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):sS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):j.resolve(es());let a=-1,u=s;return o.next(c=>j.forEach(c,(d,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(d)?j.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ge())).next(d=>({batchId:a,changes:uS(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new te(n)).next(r=>{let i=Fa();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Fa();return this.indexManager.getCollectionParents(e,s).next(a=>j.forEach(a,u=>{const c=function(f,m){return new Jl(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,Ut.newInvalidDocument(d)))});let a=Fa();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&el(d.mutation,c,Fn.empty(),ht.now()),Bh(n,c)&&(a=a.insert(u,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kL{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return j.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:lr(i.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:TL(i.bundledQuery),readTime:lr(i.readTime)}}(n)),j.resolve()}}/**
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
 */class PL{constructor(){this.overlays=new ot(te.comparator),this.hr=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=es();return j.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),j.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const i=es(),s=n.length+1,o=new te(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return j.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ot((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=es(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const a=es(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>a.set(c,d)),!(a.size()>=i)););return j.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new JO(n,r));let s=this.hr.get(n);s===void 0&&(s=ge(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(){this.Pr=new Pt(ft.Ir),this.Tr=new Pt(ft.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new ft(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new ft(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new te(new Ue([])),r=new ft(n,e),i=new ft(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new te(new Ue([])),r=new ft(n,e),i=new ft(n,e+1);let s=ge();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new ft(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ft{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return te.comparator(e.key,n.key)||Ie(e.pr,n.pr)}static Er(e,n){return Ie(e.pr,n.pr)||te.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NL{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Pt(ft.Ir)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new XO(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new ft(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return j.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ft(n,0),i=new ft(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),j.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Pt(Ie);return n.forEach(i=>{const s=new ft(i,0),o=new ft(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),j.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;te.isDocumentKey(s)||(s=s.child(""));const o=new ft(new te(s),0);let a=new Pt(Ie);return this.wr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.pr)),!0)},o),j.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){be(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return j.forEach(n.mutations,i=>{const s=new ft(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new ft(n,0),i=this.wr.firstAfterOrEqual(r);return j.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xL{constructor(e){this.vr=e,this.docs=function(){return new ot(te.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():Ut.newInvalidDocument(n))}getEntries(e,n){let r=Vr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ut.newInvalidDocument(i))}),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Vr();const o=n.path,a=new te(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||gO(mO(d),r)<=0||(i.has(d.key)||Bh(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return j.resolve(s)}getAllFromCollectionGroup(e,n,r,i){le()}Fr(e,n){return j.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new DL(this)}getSize(e){return j.resolve(this.size)}}class DL extends CL{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),j.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bL{constructor(e){this.persistence=e,this.Mr=new Go(n=>gg(n),_g),this.lastRemoteSnapshotVersion=ue.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Eg,this.targetCount=0,this.Lr=Lo.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),j.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new Lo(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.qn(n),j.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),j.waitFor(s).next(()=>i)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),j.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),j.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OL{constructor(e,n){this.Br={},this.overlays={},this.kr=new dg(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new bL(this),this.indexManager=new IL,this.remoteDocumentCache=function(i){return new xL(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new EL(n),this.$r=new kL(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new PL,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new NL(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const i=new LL(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return j.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class LL extends yO{constructor(e){super(),this.currentSequenceNumber=e}}class Tg{constructor(e){this.persistence=e,this.zr=new Eg,this.jr=null}static Hr(e){return new Tg(e)}get Jr(){if(this.jr)return this.jr;throw le()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),j.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.Jr,r=>{const i=te.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,ue.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return j.or([()=>j.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=ge(),i=ge();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ig(e,n.fromCache,r,i)}}/**
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
 */class ML{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class VL{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return SN()?8:vO(xt())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new ML;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(Ra()<=me.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",Hs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),j.resolve()):(Ra()<=me.DEBUG&&X("QueryEngine","Query:",Hs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(Ra()<=me.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",Hs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ar(n))):j.resolve())}ji(e,n){if(tw(n))return j.resolve(null);let r=ar(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Sp(n,null,"F"),r=ar(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ge(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Zi(n,a);return this.Xi(n,c,o,u.readTime)?this.ji(e,Sp(n,null,"F")):this.es(e,c,n,u)}))})))}Hi(e,n,r,i){return tw(n)||i.isEqual(ue.min())?j.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?j.resolve(null):(Ra()<=me.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Hs(n)),this.es(e,o,n,pO(i,-1)).next(a=>a))})}Zi(e,n){let r=new Pt(aS(e));return n.forEach((i,s)=>{Bh(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return Ra()<=me.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",Hs(n)),this.zi.getDocumentsMatchingQuery(e,n,ki.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FL{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new ot(Ie),this.rs=new Go(s=>gg(s),_g),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new AL(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function UL(t,e,n,r){return new FL(t,e,n,r)}async function NS(t,e){const n=ce(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=ge();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){a.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function jL(t,e){const n=ce(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,u,c,d){const f=c.batch,m=f.keys();let T=j.resolve();return m.forEach(R=>{T=T.next(()=>d.getEntry(u,R)).next(A=>{const P=c.docVersions.get(R);be(P!==null),A.version.compareTo(P)<0&&(f.applyToRemoteDocument(A,c),A.isValidDocument()&&(A.setReadTime(c.commitVersion),d.addEntry(A)))})}),T.next(()=>a.mutationQueue.removeMutationBatch(u,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=ge();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function xS(t){const e=ce(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function BL(t,e){const n=ce(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((d,f)=>{const m=i.get(f);if(!m)return;a.push(n.Qr.removeMatchingKeys(s,d.removedDocuments,f).next(()=>n.Qr.addMatchingKeys(s,d.addedDocuments,f)));let T=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?T=T.withResumeToken($t.EMPTY_BYTE_STRING,ue.min()).withLastLimboFreeSnapshotVersion(ue.min()):d.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(d.resumeToken,r)),i=i.insert(f,T),function(A,P,E){return A.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(m,T,d)&&a.push(n.Qr.updateTargetData(s,T))});let u=Vr(),c=ge();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),a.push(zL(s,o,e.documentUpdates).next(d=>{u=d.cs,c=d.ls})),!r.isEqual(ue.min())){const d=n.Qr.getLastRemoteSnapshotVersion(s).next(f=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(d)}return j.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.ns=i,s))}function zL(t,e,n){let r=ge(),i=ge();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Vr();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(ue.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):X("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{cs:o,ls:i}})}function WL(t,e){const n=ce(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function HL(t,e){const n=ce(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,j.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new li(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function Pp(t,e,n){const r=ce(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Xl(o))throw o;X("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function dw(t,e,n){const r=ce(t);let i=ue.min(),s=ge();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const f=ce(u),m=f.rs.get(d);return m!==void 0?j.resolve(f.ns.get(m)):f.Qr.getTargetData(c,d)}(r,o,ar(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:ue.min(),n?s:ge())).next(a=>($L(r,MO(e),a),{documents:a,hs:s})))}function $L(t,e,n){let r=t.ss.get(e)||ue.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}class fw{constructor(){this.activeTargetIds=zO()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class qL{constructor(){this.no=new fw,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new fw,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class KL{io(e){}shutdown(){}}/**
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
 */class pw{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){X("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){X("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let $u=null;function Jd(){return $u===null?$u=function(){return 268435456+Math.round(2147483648*Math.random())}():$u++,"0x"+$u.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GL={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QL{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt="WebChannelConnection";class YL extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(n,r,i,s,o){const a=Jd(),u=this.vo(n,r.toUriEncodedString());X("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(c,s,o),this.Mo(n,u,c,i).then(d=>(X("RestConnection",`Received RPC '${n}' ${a}: `,d),d),d=>{throw xo("RestConnection",`RPC '${n}' ${a} failed with error: `,d,"url: ",u,"request:",i),d})}xo(n,r,i,s,o,a){return this.Co(n,r,i,s,o)}Fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+qo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}vo(n,r){const i=GL[n];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,i){const s=Jd();return new Promise((o,a)=>{const u=new BI;u.setWithCredentials(!0),u.listenOnce(WI.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case dc.NO_ERROR:const d=u.getResponseJson();X(Mt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case dc.TIMEOUT:X(Mt,`RPC '${e}' ${s} timed out`),a(new J(U.DEADLINE_EXCEEDED,"Request time out"));break;case dc.HTTP_ERROR:const f=u.getStatus();if(X(Mt,`RPC '${e}' ${s} failed with status:`,f,"response text:",u.getResponseText()),f>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const T=m==null?void 0:m.error;if(T&&T.status&&T.message){const R=function(P){const E=P.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(E)>=0?E:U.UNKNOWN}(T.status);a(new J(R,T.message))}else a(new J(U.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new J(U.UNAVAILABLE,"Connection failed."));break;default:le()}}finally{X(Mt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);X(Mt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Oo(e,n,r){const i=Jd(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=qI(),a=$I(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new zI({})),this.Fo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");X(Mt,`Creating RPC '${e}' stream ${i}: ${d}`,u);const f=o.createWebChannel(d,u);let m=!1,T=!1;const R=new QL({lo:P=>{T?X(Mt,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(m||(X(Mt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),X(Mt,`RPC '${e}' stream ${i} sending:`,P),f.send(P))},ho:()=>f.close()}),A=(P,E,v)=>{P.listen(E,S=>{try{v(S)}catch(L){setTimeout(()=>{throw L},0)}})};return A(f,Va.EventType.OPEN,()=>{T||(X(Mt,`RPC '${e}' stream ${i} transport opened.`),R.mo())}),A(f,Va.EventType.CLOSE,()=>{T||(T=!0,X(Mt,`RPC '${e}' stream ${i} transport closed`),R.po())}),A(f,Va.EventType.ERROR,P=>{T||(T=!0,xo(Mt,`RPC '${e}' stream ${i} transport errored:`,P),R.po(new J(U.UNAVAILABLE,"The operation could not be completed")))}),A(f,Va.EventType.MESSAGE,P=>{var E;if(!T){const v=P.data[0];be(!!v);const S=v,L=S.error||((E=S[0])===null||E===void 0?void 0:E.error);if(L){X(Mt,`RPC '${e}' stream ${i} received error:`,L);const B=L.status;let $=function(w){const I=tt[w];if(I!==void 0)return wS(I)}(B),g=L.message;$===void 0&&($=U.INTERNAL,g="Unknown error status: "+B+" with message "+L.message),T=!0,R.po(new J($,g)),f.close()}else X(Mt,`RPC '${e}' stream ${i} received:`,v),R.yo(v)}}),A(a,HI.STAT_EVENT,P=>{P.stat===_p.PROXY?X(Mt,`RPC '${e}' stream ${i} detected buffering proxy`):P.stat===_p.NOPROXY&&X(Mt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{R.fo()},0),R}}function Zd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $h(t){return new aL(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&X("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{constructor(e,n,r,i,s,o,a,u){this.oi=e,this.Go=r,this.zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new DS(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(Mr(n.toString()),Mr("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===n&&this.u_(r,i)},r=>{e(()=>{const i=new J(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return X("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(X("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class XL extends bS{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=cL(this.serializer,e),r=function(s){if(!("targetChange"in s))return ue.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ue.min():o.readTime?lr(o.readTime):ue.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=kp(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=Tp(u)?{documents:fL(s,u)}:{query:pL(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=IS(s,o.resumeToken);const c=Cp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(ue.min())>0){a.readTime=rh(s,o.snapshotVersion.toTimestamp());const c=Cp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=gL(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=kp(this.serializer),n.removeTarget=e,this.i_(n)}}class JL extends bS{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(be(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=dL(e.writeResults,e.commitTime),r=lr(e.commitTime);return this.listener.A_(r,n)}return be(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=kp(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>hL(this.serializer,r))};this.i_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZL extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new J(U.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,Rp(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new J(U.UNKNOWN,s.toString())})}xo(e,n,r,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.xo(e,Rp(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new J(U.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class eM{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Mr(n),this.y_=!1):X("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tM{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(o=>{r.enqueueAndForget(async()=>{Rs(this)&&(X("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=ce(u);c.M_.add(4),await tu(c),c.N_.set("Unknown"),c.M_.delete(4),await qh(c)}(this))})}),this.N_=new eM(r,i)}}async function qh(t){if(Rs(t))for(const e of t.x_)await e(!0)}async function tu(t){for(const e of t.x_)await e(!1)}function OS(t,e){const n=ce(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),Ag(n)?Rg(n):Qo(n).Xo()&&Cg(n,e))}function Sg(t,e){const n=ce(t),r=Qo(n);n.F_.delete(e),r.Xo()&&LS(n,e),n.F_.size===0&&(r.Xo()?r.n_():Rs(n)&&n.N_.set("Unknown"))}function Cg(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ue.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Qo(t).P_(e)}function LS(t,e){t.L_.xe(e),Qo(t).I_(e)}function Rg(t){t.L_=new rL({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Qo(t).start(),t.N_.w_()}function Ag(t){return Rs(t)&&!Qo(t).Zo()&&t.F_.size>0}function Rs(t){return ce(t).M_.size===0}function MS(t){t.L_=void 0}async function nM(t){t.N_.set("Online")}async function rM(t){t.F_.forEach((e,n)=>{Cg(t,e)})}async function iM(t,e){MS(t),Ag(t)?(t.N_.D_(e),Rg(t)):t.N_.set("Unknown")}async function sM(t,e,n){if(t.N_.set("Online"),e instanceof TS&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.F_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.F_.delete(a),i.L_.removeTarget(a))}(t,e)}catch(r){X("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ih(t,r)}else if(e instanceof mc?t.L_.Ke(e):e instanceof ES?t.L_.He(e):t.L_.We(e),!n.isEqual(ue.min()))try{const r=await xS(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.L_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.F_.get(c);d&&s.F_.set(c,d.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const d=s.F_.get(u);if(!d)return;s.F_.set(u,d.withResumeToken($t.EMPTY_BYTE_STRING,d.snapshotVersion)),LS(s,u);const f=new li(d.target,u,c,d.sequenceNumber);Cg(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){X("RemoteStore","Failed to raise snapshot:",r),await ih(t,r)}}async function ih(t,e,n){if(!Xl(e))throw e;t.M_.add(1),await tu(t),t.N_.set("Offline"),n||(n=()=>xS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await qh(t)})}function VS(t,e){return e().catch(n=>ih(t,n,e))}async function Kh(t){const e=ce(t),n=Ni(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;oM(e);)try{const i=await WL(e.localStore,r);if(i===null){e.v_.length===0&&n.n_();break}r=i.batchId,aM(e,i)}catch(i){await ih(e,i)}FS(e)&&US(e)}function oM(t){return Rs(t)&&t.v_.length<10}function aM(t,e){t.v_.push(e);const n=Ni(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function FS(t){return Rs(t)&&!Ni(t).Zo()&&t.v_.length>0}function US(t){Ni(t).start()}async function lM(t){Ni(t).V_()}async function uM(t){const e=Ni(t);for(const n of t.v_)e.d_(n.mutations)}async function cM(t,e,n){const r=t.v_.shift(),i=yg.from(r,e,n);await VS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Kh(t)}async function hM(t,e){e&&Ni(t).E_&&await async function(r,i){if(function(o){return eL(o)&&o!==U.ABORTED}(i.code)){const s=r.v_.shift();Ni(r).t_(),await VS(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Kh(r)}}(t,e),FS(t)&&US(t)}async function mw(t,e){const n=ce(t);n.asyncQueue.verifyOperationInProgress(),X("RemoteStore","RemoteStore received new credentials");const r=Rs(n);n.M_.add(3),await tu(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await qh(n)}async function dM(t,e){const n=ce(t);e?(n.M_.delete(2),await qh(n)):e||(n.M_.add(2),await tu(n),n.N_.set("Unknown"))}function Qo(t){return t.B_||(t.B_=function(n,r,i){const s=ce(n);return s.f_(),new XL(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:nM.bind(null,t),To:rM.bind(null,t),Ao:iM.bind(null,t),h_:sM.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),Ag(t)?Rg(t):t.N_.set("Unknown")):(await t.B_.stop(),MS(t))})),t.B_}function Ni(t){return t.k_||(t.k_=function(n,r,i){const s=ce(n);return s.f_(),new JL(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:lM.bind(null,t),Ao:hM.bind(null,t),R_:uM.bind(null,t),A_:cM.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await Kh(t)):(await t.k_.stop(),t.v_.length>0&&(X("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new vi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new kg(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new J(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Pg(t,e){if(Mr("AsyncQueue",`${e}: ${t}`),Xl(t))return new J(U.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e){this.comparator=e?(n,r)=>e(n,r)||te.comparator(n.key,r.key):(n,r)=>te.comparator(n.key,r.key),this.keyedMap=Fa(),this.sortedSet=new ot(this.comparator)}static emptySet(e){return new vo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof vo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new vo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(){this.q_=new ot(te.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):le():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Mo{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Mo(e,n,vo.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&jh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fM{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class pM{constructor(){this.queries=new Go(e=>oS(e),jh),this.onlineState="Unknown",this.z_=new Set}}async function mM(t,e){const n=ce(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.W_()&&e.G_()&&(r=2):(s=new fM,r=e.G_()?0:1);try{switch(r){case 0:s.K_=await n.onListen(i,!0);break;case 1:s.K_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=Pg(o,`Initialization of query '${Hs(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.U_.push(e),e.j_(n.onlineState),s.K_&&e.H_(s.K_)&&Ng(n)}async function gM(t,e){const n=ce(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.U_.indexOf(e);o>=0&&(s.U_.splice(o,1),s.U_.length===0?i=e.G_()?0:1:!s.W_()&&e.G_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function _M(t,e){const n=ce(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.U_)a.H_(i)&&(r=!0);o.K_=i}}r&&Ng(n)}function yM(t,e,n){const r=ce(t),i=r.queries.get(e);if(i)for(const s of i.U_)s.onError(n);r.queries.delete(e)}function Ng(t){t.z_.forEach(e=>{e.next()})}var Np,_w;(_w=Np||(Np={})).J_="default",_w.Cache="cache";class vM{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Mo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=Mo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==Np.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(e){this.key=e}}class BS{constructor(e){this.key=e}}class wM{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=ge(),this.mutatedKeys=ge(),this.Ia=aS(e),this.Ta=new vo(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new gw,i=n?n.Ta:this.Ta;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,f)=>{const m=i.get(d),T=Bh(this.query,f)?f:null,R=!!m&&this.mutatedKeys.has(m.key),A=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let P=!1;m&&T?m.data.isEqual(T.data)?R!==A&&(r.track({type:3,doc:T}),P=!0):this.Ra(m,T)||(r.track({type:2,doc:T}),P=!0,(u&&this.Ia(T,u)>0||c&&this.Ia(T,c)<0)&&(a=!0)):!m&&T?(r.track({type:0,doc:T}),P=!0):m&&!T&&(r.track({type:1,doc:m}),P=!0,(u||c)&&(a=!0)),P&&(T?(o=o.add(T),s=A?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ta:o,Aa:r,Xi:a,mutatedKeys:s}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((d,f)=>function(T,R){const A=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return le()}};return A(T)-A(R)}(d.type,f.type)||this.Ia(d.doc,f.doc)),this.Va(r),i=i!=null&&i;const a=n&&!i?this.ma():[],u=this.Pa.size===0&&this.current&&!i?1:0,c=u!==this.ha;return this.ha=u,o.length!==0||c?{snapshot:new Mo(this.query,e.Ta,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new gw,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=ge(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new BS(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new jS(r))}),n}pa(e){this.la=e.hs,this.Pa=ge();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return Mo.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class EM{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class TM{constructor(e){this.key=e,this.wa=!1}}class IM{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new Go(a=>oS(a),jh),this.Da=new Map,this.Ca=new Set,this.va=new ot(te.comparator),this.Fa=new Map,this.Ma=new Eg,this.xa={},this.Oa=new Map,this.Na=Lo.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function SM(t,e,n=!0){const r=KS(t);let i;const s=r.ba.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await zS(r,e,n,!0),i}async function CM(t,e){const n=KS(t);await zS(n,e,!0,!1)}async function zS(t,e,n,r){const i=await HL(t.localStore,ar(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await RM(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&OS(t.remoteStore,i),a}async function RM(t,e,n,r,i){t.Ba=(f,m,T)=>async function(A,P,E,v){let S=P.view.da(E);S.Xi&&(S=await dw(A.localStore,P.query,!1).then(({documents:g})=>P.view.da(g,S)));const L=v&&v.targetChanges.get(P.targetId),B=v&&v.targetMismatches.get(P.targetId)!=null,$=P.view.applyChanges(S,A.isPrimaryClient,L,B);return vw(A,P.targetId,$.fa),$.snapshot}(t,f,m,T);const s=await dw(t.localStore,e,!0),o=new wM(e,s.hs),a=o.da(s.documents),u=eu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);vw(t,n,c.fa);const d=new EM(e,n,o);return t.ba.set(e,d),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),c.snapshot}async function AM(t,e,n){const r=ce(t),i=r.ba.get(e),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(o=>!jh(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Pp(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Sg(r.remoteStore,i.targetId),xp(r,i.targetId)}).catch(Yl)):(xp(r,i.targetId),await Pp(r.localStore,i.targetId,!0))}async function kM(t,e){const n=ce(t),r=n.ba.get(e),i=n.Da.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Sg(n.remoteStore,r.targetId))}async function PM(t,e,n){const r=MM(t);try{const i=await function(o,a){const u=ce(o),c=ht.now(),d=a.reduce((T,R)=>T.add(R.key),ge());let f,m;return u.persistence.runTransaction("Locally write mutations","readwrite",T=>{let R=Vr(),A=ge();return u.os.getEntries(T,d).next(P=>{R=P,R.forEach((E,v)=>{v.isValidDocument()||(A=A.add(E))})}).next(()=>u.localDocuments.getOverlayedDocuments(T,R)).next(P=>{f=P;const E=[];for(const v of a){const S=QO(v,f.get(v.key).overlayedDocument);S!=null&&E.push(new Cs(v.key,S,XI(S.value.mapValue),Pr.exists(!0)))}return u.mutationQueue.addMutationBatch(T,c,E,a)}).next(P=>{m=P;const E=P.applyToLocalDocumentSet(f,A);return u.documentOverlayCache.saveOverlays(T,P.batchId,E)})}).then(()=>({batchId:m.batchId,changes:uS(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.xa[o.currentUser.toKey()];c||(c=new ot(Ie)),c=c.insert(a,u),o.xa[o.currentUser.toKey()]=c}(r,i.batchId,n),await nu(r,i.changes),await Kh(r.remoteStore)}catch(i){const s=Pg(i,"Failed to persist write");n.reject(s)}}async function WS(t,e){const n=ce(t);try{const r=await BL(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Fa.get(s);o&&(be(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.wa=!0:i.modifiedDocuments.size>0?be(o.wa):i.removedDocuments.size>0&&(be(o.wa),o.wa=!1))}),await nu(n,r,e)}catch(r){await Yl(r)}}function yw(t,e,n){const r=ce(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((s,o)=>{const a=o.view.j_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=ce(o);u.onlineState=a;let c=!1;u.queries.forEach((d,f)=>{for(const m of f.U_)m.j_(a)&&(c=!0)}),c&&Ng(u)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function NM(t,e,n){const r=ce(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fa.get(e),s=i&&i.key;if(s){let o=new ot(te.comparator);o=o.insert(s,Ut.newNoDocument(s,ue.min()));const a=ge().add(s),u=new Hh(ue.min(),new Map,new ot(Ie),o,a);await WS(r,u),r.va=r.va.remove(s),r.Fa.delete(e),xg(r)}else await Pp(r.localStore,e,!1).then(()=>xp(r,e,n)).catch(Yl)}async function xM(t,e){const n=ce(t),r=e.batch.batchId;try{const i=await jL(n.localStore,e);$S(n,r,null),HS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await nu(n,i)}catch(i){await Yl(i)}}async function DM(t,e,n){const r=ce(t);try{const i=await function(o,a){const u=ce(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,a).next(f=>(be(f!==null),d=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);$S(r,e,n),HS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await nu(r,i)}catch(i){await Yl(i)}}function HS(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function $S(t,e,n){const r=ce(t);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function xp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||qS(t,r)})}function qS(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(Sg(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),xg(t))}function vw(t,e,n){for(const r of n)r instanceof jS?(t.Ma.addReference(r.key,e),bM(t,r)):r instanceof BS?(X("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||qS(t,r.key)):le()}function bM(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(X("SyncEngine","New document in limbo: "+n),t.Ca.add(r),xg(t))}function xg(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new te(Ue.fromString(e)),r=t.Na.next();t.Fa.set(r,new TM(n)),t.va=t.va.insert(n,r),OS(t.remoteStore,new li(ar(iS(n.path)),r,"TargetPurposeLimboResolution",dg.oe))}}async function nu(t,e,n){const r=ce(t),i=[],s=[],o=[];r.ba.isEmpty()||(r.ba.forEach((a,u)=>{o.push(r.Ba(u,e,n).then(c=>{if((c||n)&&r.isPrimaryClient){const d=c&&!c.fromCache;r.sharedClientState.updateQueryState(u.targetId,d?"current":"not-current")}if(c){i.push(c);const d=Ig.Ki(u.targetId,c);s.push(d)}}))}),await Promise.all(o),r.Sa.h_(i),await async function(u,c){const d=ce(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>j.forEach(c,m=>j.forEach(m.qi,T=>d.persistence.referenceDelegate.addReference(f,m.targetId,T)).next(()=>j.forEach(m.Qi,T=>d.persistence.referenceDelegate.removeReference(f,m.targetId,T)))))}catch(f){if(!Xl(f))throw f;X("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const T=d.ns.get(m),R=T.snapshotVersion,A=T.withLastLimboFreeSnapshotVersion(R);d.ns=d.ns.insert(m,A)}}}(r.localStore,s))}async function OM(t,e){const n=ce(t);if(!n.currentUser.isEqual(e)){X("SyncEngine","User change. New user:",e.toKey());const r=await NS(n.localStore,e);n.currentUser=e,function(s,o){s.Oa.forEach(a=>{a.forEach(u=>{u.reject(new J(U.CANCELLED,o))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await nu(n,r.us)}}function LM(t,e){const n=ce(t),r=n.Fa.get(e);if(r&&r.wa)return ge().add(r.key);{let i=ge();const s=n.Da.get(e);if(!s)return i;for(const o of s){const a=n.ba.get(o);i=i.unionWith(a.view.Ea)}return i}}function KS(t){const e=ce(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=WS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=LM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=NM.bind(null,e),e.Sa.h_=_M.bind(null,e.eventManager),e.Sa.ka=yM.bind(null,e.eventManager),e}function MM(t){const e=ce(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=xM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=DM.bind(null,e),e}class ww{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=$h(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return UL(this.persistence,new VL,e.initialUser,this.serializer)}createPersistence(e){return new OL(Tg.Hr,this.serializer)}createSharedClientState(e){return new qL}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class VM{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>yw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=OM.bind(null,this.syncEngine),await dM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new pM}()}createDatastore(e){const n=$h(e.databaseInfo.databaseId),r=function(s){return new YL(s)}(e.databaseInfo);return function(s,o,a,u){return new ZL(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new tM(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>yw(this.syncEngine,n,0),function(){return pw.D()?new pw:new KL}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,d){const f=new IM(i,s,o,a,u,c);return d&&(f.La=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=ce(r);X("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await tu(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class FM{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):Mr("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UM{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Vt.UNAUTHENTICATED,this.clientId=GI.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{X("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(X("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new J(U.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Pg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ef(t,e){t.asyncQueue.verifyOperationInProgress(),X("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await NS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Ew(t,e){t.asyncQueue.verifyOperationInProgress();const n=await BM(t);X("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>mw(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>mw(e.remoteStore,i)),t._onlineComponents=e}function jM(t){return t.name==="FirebaseError"?t.code===U.FAILED_PRECONDITION||t.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function BM(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X("FirestoreClient","Using user provided OfflineComponentProvider");try{await ef(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!jM(n))throw n;xo("Error using user provided cache. Falling back to memory cache: "+n),await ef(t,new ww)}}else X("FirestoreClient","Using default OfflineComponentProvider"),await ef(t,new ww);return t._offlineComponents}async function GS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X("FirestoreClient","Using user provided OnlineComponentProvider"),await Ew(t,t._uninitializedComponentsProvider._online)):(X("FirestoreClient","Using default OnlineComponentProvider"),await Ew(t,new VM))),t._onlineComponents}function zM(t){return GS(t).then(e=>e.syncEngine)}async function WM(t){const e=await GS(t),n=e.eventManager;return n.onListen=SM.bind(null,e.syncEngine),n.onUnlisten=AM.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=CM.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=kM.bind(null,e.syncEngine),n}function HM(t,e,n={}){const r=new vi;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const d=new FM({next:m=>{o.enqueueAndForget(()=>gM(s,f)),m.fromCache&&u.source==="server"?c.reject(new J(U.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new vM(a,d,{includeMetadataChanges:!0,ra:!0});return mM(s,f)}(await WM(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function QS(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tw=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YS(t,e,n){if(!n)throw new J(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function $M(t,e,n,r){if(e===!0&&r===!0)throw new J(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Iw(t){if(!te.isDocumentKey(t))throw new J(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Sw(t){if(te.isDocumentKey(t))throw new J(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Gh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":le()}function Ol(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new J(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Gh(t);throw new J(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new J(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new J(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}$M("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=QS((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new J(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new J(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new J(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Qh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Cw({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new J(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new J(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Cw(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new sO;switch(r.type){case"firstParty":return new uO(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new J(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Tw.get(n);r&&(X("ComponentProvider","Removing Datastore"),Tw.delete(n),r.terminate())}(this),Promise.resolve()}}function qM(t,e,n,r={}){var i;const s=(t=Ol(t,Qh))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&xo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=Vt.MOCK_USER;else{a=wN(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new J(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Vt(c)}t._authCredentials=new oO(new KI(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Yo(this.firestore,e,this._query)}}class hn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ei(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new hn(this.firestore,e,this._key)}}class Ei extends Yo{constructor(e,n,r){super(e,n,iS(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new hn(this.firestore,null,new te(e))}withConverter(e){return new Ei(this.firestore,e,this._path)}}function KM(t,e,...n){if(t=Ht(t),YS("collection","path",e),t instanceof Qh){const r=Ue.fromString(e,...n);return Sw(r),new Ei(t,null,r)}{if(!(t instanceof hn||t instanceof Ei))throw new J(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ue.fromString(e,...n));return Sw(r),new Ei(t.firestore,null,r)}}function GM(t,e,...n){if(t=Ht(t),arguments.length===1&&(e=GI.newId()),YS("doc","path",e),t instanceof Qh){const r=Ue.fromString(e,...n);return Iw(r),new hn(t,null,new te(r))}{if(!(t instanceof hn||t instanceof Ei))throw new J(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ue.fromString(e,...n));return Iw(r),new hn(t.firestore,t instanceof Ei?t.converter:null,new te(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QM{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new DS(this,"async_queue_retry"),this.hu=()=>{const n=Zd();n&&X("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=Zd();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=Zd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new vi;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Xl(e))throw e;X("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Mr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=kg.createAndSchedule(this,e,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&le()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}class Dg extends Qh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new QM}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||JS(this),this._firestoreClient.terminate()}}function YM(t,e){const n=typeof t=="object"?t:eI(),r=typeof t=="string"?t:"(default)",i=Jm(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=vN("firestore");s&&qM(i,...s)}return i}function XS(t){return t._firestoreClient||JS(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function JS(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,c,d){return new TO(a,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,QS(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new UM(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Vo($t.fromBase64String(e))}catch(n){throw new J(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Vo($t.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new J(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new At(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new J(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new J(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ie(this._lat,e._lat)||Ie(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XM=/^__.*__$/;class JM{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Cs(e,this.data,this.fieldMask,n,this.fieldTransforms):new Zl(e,this.data,n,this.fieldTransforms)}}function eC(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw le()}}class Lg{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new Lg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return sh(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(eC(this.fu)&&XM.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class ZM{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||$h(e)}Fu(e,n,r,i=!1){return new Lg({fu:e,methodName:n,vu:r,path:At.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function tC(t){const e=t._freezeSettings(),n=$h(t._databaseId);return new ZM(t._databaseId,!!e.ignoreUndefinedProperties,n)}function e2(t,e,n,r,i,s={}){const o=t.Fu(s.merge||s.mergeFields?2:0,e,n,i);iC("Data must be an object, but it was:",o,r);const a=nC(r,o);let u,c;if(s.merge)u=new Fn(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const f of s.mergeFields){const m=n2(e,f,n);if(!o.contains(m))throw new J(U.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);i2(d,m)||d.push(m)}u=new Fn(d),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new JM(new En(a),u,c)}function t2(t,e,n,r=!1){return Mg(n,t.Fu(r?4:3,e))}function Mg(t,e){if(rC(t=Ht(t)))return iC("Unsupported field value:",e,t),nC(t,e);if(t instanceof ZS)return function(r,i){if(!eC(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=Mg(a,i.bu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Ht(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return WO(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ht.fromDate(r);return{timestampValue:rh(i.serializer,s)}}if(r instanceof ht){const s=new ht(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:rh(i.serializer,s)}}if(r instanceof Og)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Vo)return{bytesValue:IS(i.serializer,r._byteString)};if(r instanceof hn){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:wg(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${Gh(r)}`)}(t,e)}function nC(t,e){const n={};return QI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ko(t,(r,i)=>{const s=Mg(i,e.pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function rC(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ht||t instanceof Og||t instanceof Vo||t instanceof hn||t instanceof ZS)}function iC(t,e,n){if(!rC(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Gh(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function n2(t,e,n){if((e=Ht(e))instanceof bg)return e._internalPath;if(typeof e=="string")return sC(t,e);throw sh("Field path arguments must be of type string or ",t,!1,void 0,n)}const r2=new RegExp("[~\\*/\\[\\]]");function sC(t,e,n){if(e.search(r2)>=0)throw sh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new bg(...e.split("."))._internalPath}catch{throw sh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function sh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new J(U.INVALID_ARGUMENT,a+t+u)}function i2(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new hn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new s2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Vg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class s2 extends oC{data(){return super.data()}}function Vg(t,e){return typeof e=="string"?sC(t,e):e instanceof bg?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o2(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new J(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Fg{}class a2 extends Fg{}function aC(t,e,...n){let r=[];e instanceof Fg&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Ug).length,a=s.filter(u=>u instanceof Yh).length;if(o>1||o>0&&a>0)throw new J(U.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Yh extends a2{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Yh(e,n,r)}_apply(e){const n=this._parse(e);return uC(e._query,n),new Yo(e.firestore,e.converter,Ip(e._query,n))}_parse(e){const n=tC(e.firestore);return function(s,o,a,u,c,d,f){let m;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new J(U.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Aw(f,d);const T=[];for(const R of f)T.push(Rw(u,s,R));m={arrayValue:{values:T}}}else m=Rw(u,s,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Aw(f,d),m=t2(a,o,f,d==="in"||d==="not-in");return st.create(c,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function lC(t,e,n){const r=e,i=Vg("where",t);return Yh._create(i,r,n)}class Ug extends Fg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ug(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Hn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)uC(o,u),o=Ip(o,u)}(e._query,n),new Yo(e.firestore,e.converter,Ip(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Rw(t,e,n){if(typeof(n=Ht(n))=="string"){if(n==="")throw new J(U.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!sS(e)&&n.indexOf("/")!==-1)throw new J(U.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ue.fromString(n));if(!te.isDocumentKey(r))throw new J(U.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Qv(t,new te(r))}if(n instanceof hn)return Qv(t,n._key);throw new J(U.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Gh(n)}.`)}function Aw(t,e){if(!Array.isArray(t)||t.length===0)throw new J(U.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function uC(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new J(U.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new J(U.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class l2{convertValue(e,n="none"){switch(_s(e)){case 0:return null;case 1:return e.booleanValue;case 2:return rt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(gs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw le()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ko(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Og(rt(e.latitude),rt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=pg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Pl(e));default:return null}}convertTimestamp(e){const n=Pi(e);return new ht(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ue.fromString(e);be(PS(r));const i=new Nl(r.get(1),r.get(3)),s=new te(r.popFirst(5));return i.isEqual(n)||Mr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u2(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class c2 extends oC{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new gc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Vg("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class gc extends c2{data(e={}){return super.data(e)}}class h2{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new qu(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new gc(this._firestore,this._userDataWriter,r.key,r,new qu(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new J(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new gc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new qu(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new gc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new qu(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:d2(a.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function d2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return le()}}class f2 extends l2{constructor(e){super(),this.firestore=e}convertBytes(e){return new Vo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new hn(this.firestore,null,n)}}function cC(t){t=Ol(t,Yo);const e=Ol(t.firestore,Dg),n=XS(e),r=new f2(e);return o2(t._query),HM(n,t._query).then(i=>new h2(e,r,t,i))}function p2(t,e,n){t=Ol(t,hn);const r=Ol(t.firestore,Dg),i=u2(t.converter,e);return m2(r,[e2(tC(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Pr.none())])}function m2(t,e){return function(r,i){const s=new vi;return r.asyncQueue.enqueueAndForget(async()=>PM(await zM(r),i,s)),s.promise}(XS(t),e)}(function(e,n=!0){(function(i){qo=i})(Ss),ds(new Ai("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Dg(new aO(r.getProvider("auth-internal")),new hO(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new J(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Nl(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),rr($v,"4.6.3",e),rr($v,"4.6.3","esm2017")})();const g2={apiKey:"AIzaSyCVVLoYFhb2Vrvm7T8-poauJt6XqE-ZpGQ",authDomain:"notesapp-e0253.firebaseapp.com",projectId:"notesapp-e0253",storageBucket:"notesapp-e0253.appspot.com",messagingSenderId:"963543362621",appId:"1:963543362621:web:86c32ba90844fef9fc0e54"},hC=ZT(g2),cr=tO(hC),dC=YM(hC),fC=KM(dC,"users");async function _2(t,e){const n=await BD(cr,t,e),r=n.user.uid;return console.log("This is the logged in-user id",r,n.user),r}async function y2(t,e,n){await p2(GM(dC,"users",n),{username:t,email:e})}async function pC(t,e){let n=!1;const r=aC(fC,lC(t,"==",e));return(await cC(r)).forEach(s=>{s.data()[t]===e?(console.log(!0),n=!0):console.log(!1)}),n}async function v2(t){console.log(t);let e="";const n=aC(fC,lC("username","==",t));return(await cC(n)).forEach(i=>{e=i.data().email}),console.log(e),e}const kw="/images/profilePic.jpg";function w2({mobileInput:t,mobileSearchInput:e,setMobileSearchInput:n,darkTheme:r,setDarkTheme:i,handleSignOut:s,hamburgerState:o,setHamburgerState:a,hamburger:u,dropDown:c,hamburgerContainer:d}){return b.jsxs("header",{className:"flex flex-row justify-between items-center px-4 py-3 shadow-lg dark:bg-fullBlack border-solid dark:border-b dark:border-gray z-20",children:[b.jsx("h1",{className:"fake-logo poppins-medium dark:text-white",children:"NotesApp"}),b.jsxs("div",{className:"flex flex-row items-center inter-regular gap-5 ",children:[b.jsxs("div",{className:"flex flex-row relative overflow-visible",children:[b.jsx("input",{className:"search-note hidden sm:flex border dark:border-[1.5px] border-solid dark:text-[#dfdfdf] dark:bg-transparent border-gray dark:border-t-[#dfdfdf] dark:border-r-[#dfdfdf] dark:border-l-[#767676] dark:border-b-[#767676] text-sm pl-7 py-1 rounded-full outline-none focus:shadow-sm",placeholder:"Search notes...",type:"text"}),!e&&b.jsx("div",{className:"flex justify-center items-center dark:text-[#cfcfcf] text-gray text-2xl sm:text-[20px] sm:absolute pl-1 sm:top-1/2 sm:-translate-y-1/2",onClick:()=>{t()},children:b.jsx("ion-icon",{class:"search",name:"search-outline"})})]}),b.jsxs("div",{className:"hamburgerContainer flex flex-col",ref:d,children:[b.jsx("div",{children:b.jsx("img",{src:kw,alt:"",className:"hamburger block src w-8 h-8 object-top object-cover rounded-full",ref:u,onClick:f=>{f.stopPropagation(),o?(a(m=>!m),console.log("Closed the ham")):o===!1&&(a(m=>!m),console.log("Opened the ham"))}})}),o&&b.jsx("div",{ref:c,className:["dropDown","w-fit","absolute","right-4","bg-white","top-16","rounded-md","shadow-xl","dark:shadow-md","dark:shadow-white","dark:bg-fullBlack","z-10","dark:text-white"].join(" "),children:b.jsxs("ul",{className:"flex flex-col flex-nowrap poppins-regular divide-y divide-gray3 text-sm",children:[b.jsxs("li",{className:"flex flex-col items-center justify-center pt-5 pb-2",children:[b.jsx("div",{className:"mb-1",children:b.jsx("img",{src:kw,className:"block w-10 h-10 object-top object-cover rounded-full",alt:""})}),b.jsx("div",{className:"text-center text-sm",children:b.jsx("span",{className:"username",children:" DramaticMonk"})})]}),b.jsxs("li",{children:[b.jsxs("div",{className:"px-4 py-2",children:[b.jsx("span",{className:"text-lg mr-2",children:b.jsx("i",{className:"fa-light fa-user"})}),b.jsx("span",{children:"Change profile picture"})]}),b.jsxs("div",{className:"flex flex-row items-center justify-center gap-2 py-1",children:[b.jsx("span",{className:"text-lg",children:b.jsx("i",{className:"fa-light fa-sun-bright"})}),b.jsx("div",{className:["flex","items-center","transition-all","duration-100","ease-linear","w-14","h-fit","border-2","border-solid","border-fullBlack","dark:border-white","rounded-[20px]","p-0.5",r?"justify-end":"justify-start"].join(" "),onClick:()=>{i(f=>!f)},children:b.jsx("span",{className:["inline-block","w-3","h-3","bg-fullBlack","dark:bg-white","rounded-full","transition","transition-toggle",r?"translate-x-[]":"translate-x-0"].join(" ")})}),b.jsx("span",{children:b.jsx("i",{className:"fa-sharp fa-regular fa-moon-stars"})})]})]}),b.jsxs("li",{className:"flex flex-nowrap items-center px-4 py-2",onClick:()=>{s()},children:[b.jsx("span",{className:"mr-2 text-lg",children:b.jsx("i",{className:"fa-light fa-arrow-right-from-bracket"})}),b.jsx("span",{children:"SignOut"})]})]})})]})]})]})}function E2({mobileSearchInput:t,setMobileSearchInput:e,searchInputRef:n,hamSearchInput:r,setAddNote:i}){return b.jsxs("div",{className:"primary w-full sm:w-2/5 lg:w-1/3 h-full relative p-5",children:[b.jsxs("div",{style:{},className:["mobileSearch","w-full","flex","flex-row","relative","overflow-visible",t?"h-fit translate-y-0 opacity-100 p-0.5":"h-0 opacity-0 -translate-y-10"].join(" "),children:[b.jsx("input",{className:["w-full","bg-white/[0.2]","backdrop-blur-sm","","border","dark:border-[1.5px]","border-solid","dark:text-white","transition-opacity","duration-0","border-gray","dark:border-t-[#dfdfdf]","dark:border-r-[#dfdfdf]","dark:border-l-[#767676]","dark:border-b-[#767676]","text-lg","pl-9","py-1","rounded-full","outline-none","focus:shadow-sm",t?null:"opacity-0"].join(" "),type:"text",ref:n,placeholder:"Search notes..."}),b.jsx("div",{className:"flex justify-center items-center dark:text-[#cfcfcf] text-gray text-2xl absolute pl-1.5 top-1/2 -translate-y-1/2",children:b.jsx("ion-icon",{class:"search hamSearchIcon",name:"search-outline",ref:r})}),b.jsx("div",{className:"closeSearch absolute top-1/2 -translate-y-1/2 right-7 dark:text-white",onClick:()=>{e(!1)},children:b.jsx("i",{className:"fa-solid fa-circle-xmark closeSearchBtn fa-lg"})})]}),b.jsxs("button",{className:"absolute bottom-7 right-3 sm:static sm:w-full flex items-center justify-center sm:justify-start w-12 h-12 sm:p-4 text-base bg-lightGray rounded-full sm:rounded-lg inter-regular mb-2",onClick:()=>{i(!0)},children:[b.jsx("i",{className:"fa-sharp fa-regular fa-plus text-2xl sm:text-xl"}),b.jsx("span",{className:"ml-1 hidden sm:flex",children:"Add new note"})]})]})}function T2({mobileSearchInput:t,setMobileSearchInput:e,searchInputRef:n,hamSearchInput:r}){const[i,s]=F.useState(!1),[o,a]=F.useState(""),[u,c]=F.useState([]);console.log(o,u);const d=u.map((f,m)=>b.jsxs("span",{className:"inline-block p-1 mx-1 mb-1 rounded-lg border border-solid border-fullBlack dark:border-white text-sm",children:[b.jsx("span",{className:"mr-0.5",children:f}),b.jsx("span",{className:"closeBtn",onClick:()=>{c(u.filter((T,R)=>R!==m))},children:b.jsx("i",{class:"fa-sharp fa-light fa-xmark"})})]}));return b.jsxs("main",{className:"flex flex-row dark:bg-fullBlack flex-auto h-full relative",children:[b.jsx(E2,{mobileSearchInput:t,setMobileSearchInput:e,searchInputRef:n,hamSearchInput:r,setAddNote:s}),b.jsx("div",{className:"secondary absolute w-full translate-x-full sm:w-3/5 lg:w-2/3 sm:static bg-green sm:translate-x-0 sm:h-full",children:"SECONDARY"}),i&&b.jsx("div",{className:"modal bg-opaqueBlack/[0.6]  dark:bg-lightGray/[0.4] dark:text-white absolute w-full h-full flex justify-center items-center z-10",children:b.jsxs("div",{className:"modal-dialogue relative w-4/5 sm:w-3/5 bg-white dark:bg-black p-5 z-20 text-fullBlack dark:text-white",children:[b.jsx("button",{type:"button",className:"absolute top-3 right-5 text-2xl ",onClick:()=>{s(!1)},children:b.jsx("i",{class:"fa-sharp fa-regular fa-xmark"})}),b.jsxs("form",{action:"post",children:[b.jsx("h3",{className:"inter-regular font-medium text-xl mb-1.5",children:"Add new note"}),b.jsxs("div",{className:"note-title mb-2",children:[b.jsx("label",{htmlFor:"title",className:"inter-regular",children:"Note title"}),b.jsx("input",{type:"text",placeholder:"Note title...",value:o,onChange:f=>{a(f.target.value)},className:"w-full mt-1 inter-regular py-1 px-2 block rounded border dark:border-[1.5px] backdrop-blur-lg border-solid bg-white/[0.05] text-fullBlack dark:text-white border-fullBlack dark:border-white outline-none focus:border-2 placeholder:text-fullBlack dark:placeholder:text-white"})]}),b.jsxs("div",{className:"note-tags",children:[b.jsx("label",{htmlFor:"tags ",className:"inter-regular",children:"Note tag"}),b.jsxs("div",{className:"flex flex-wrap items-center tag-input mt-1 w-full p-1 rounded backdrop-blur-lg bg-white/[0.05] border border-solid border-fullBlack dark:border-white",children:[b.jsx("span",{className:"tag-container",children:d}),b.jsx("input",{type:"text",placeholder:"Enter tags here",className:"max-w-[80%] sm:max-w-[50%] grow inline-flex border border-solid border-fullBlack bg-white/[0.05] dark:border-white rounded px-2 py-1 focus:border-2 text-fullBlack dark:text-white placeholder:text-fullBlack dark:placeholder:text-white outline-none",onKeyDown:f=>{f.key==="Enter"&&(c([...new Set([...u,f.target.value.trim()])]),f.target.value="")}})]}),b.jsx("button",{type:"button",className:"flex justify-center items-center mt-4 py-3 px-4 ml-auto bg-fullBlack text-white dark:bg-white dark:text-fullBlack inter-regular text-base rounded-md",onClick:()=>{},children:"Create new note"})]})]})]})})]})}let mC;function I2(){const t=Nh();mC=lg(cr,P=>{P||t("/login")});const[e,n]=F.useState(!1),[r,i]=F.useState(!1),[s,o]=F.useState(!1);console.log(s,"mobileSearchInput");let a=F.useRef(null),u=F.useRef(null),c=F.useRef(null),d=F.useRef(null),f=F.useRef(null);function m(P){var E;r&&!((E=a==null?void 0:a.current)!=null&&E.contains(P.target))&&i(!1)}function T(){window.innerWidth>=639&&s&&(o(!1),d.current.target.textContent="")}F.useEffect(()=>{let E=document.querySelector(":root").classList;return e?E.add("dark"):!e&&E.contains("dark")&&E.remove("dark"),document.addEventListener("click",m),window.addEventListener("resize",()=>{T()}),()=>{document.removeEventListener("click",m),window.removeEventListener("resize",()=>{T()})}},[e,r,s]);async function R(){await $D(cr),t("/login")}function A(){window.innerWidth<640&&o(!0)}return b.jsxs("div",{className:"flex flex-col h-dvh",children:[b.jsx(w2,{mobileInput:A,mobileSearchInput:s,setMobileSearchInput:o,darkTheme:e,setDarkTheme:n,handleSignOut:R,hamburgerState:r,setHamburgerState:i,hamburger:u,dropDown:a,hamburgerContainer:c}),b.jsx(T2,{mobileSearchInput:s,setMobileSearchInput:o,searchInputRef:d,hamSearchInput:f})]})}const gC="/images/small-team.png",S2="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC4klEQVR4nO2ZW4hNYRTHf2PGjMuMaHKpk4QHGqQQyqSQZw9TCilqchu5xDyMSykvDGrwwDxTysMU8iYSuTZNLomYJmXcPSiXidj6ap3a7c453/r2/vaZKftX6+XMPv/1/87e+1trfQMZGRm+mAasAY4B14DnwHvgC9ALPADOAXuAuUAFQ4A6oBm4AwSO8Ro4BOQGw/hw+SW/xjAejZ9AB1BfLvPLgGcejEfjA9CUtvlNwO8UzAeh6JQ77JUq4EzKxoNQXAaqfS7gbBnNBxKXgEof5vcOgvlA4nhS8yuBP0XEDwDjgY1ATwxzpk7sBKYAM0tctyqu+RHAyxLCJmmeYcBm2RJtxgeAFnmvwhS7vh8YSwwOWowUeskWyZ1ZKgVqpEROPjN/W1wkX1Ai2l3NjwO+x1hAXKotuYyXiS6COxSPwgSPC5ikyLfPRfCRQnCFxwUsV+R7pW0AGxRiHz03YTnRtOWdrRHboBBajX+aFHl3a4ROW0R6UurlK4D7ltznNUK3fPwKMdluyd2tEXns4zmMSYMl9zuNyAuLiJnC0qJOUQ+s9A3hBQz4eIRmpbiAOZbcpi+y0mURMbNwWrRacpsCa+WoRaRPGjTfjJKTilK5r2iE1isKihkvfdOpyNumEapXDu4dBXr6OFQBJxX5TDRqRa8rBU3lXJLAfCPwUJnrM1CjFd6iFM3HXWArMF2hba7ZBtxzzHHCdZx8ExFYBywEnibcododjQfAX2AGjrQUEForre/bIscgGioVtSaIxAViUCMnB2GhXukazXP/K8GA0+xg/hswmZjMk/IdFpwfOiN9AvwAbss+rmWqwwJaSciuiODFpIJy9qkx3+Vj9jACpyLC5kAqKTbz5j2pxRMVUriiW+d+GUIOe15At5z6eaetwMubD1eKmb8BjCFFFhQZelyJft+0L0fS+N9AIWrlbnwKJXfFFKe8+Zuy45Wd0TLkm53KFdPAXZXtOCMj43/lH/wRwzngjJpgAAAAAElFTkSuQmCC",C2="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC6klEQVR4nO2ZXWiNcRzHz4zN2ETLSy2JXVhDCqG2FHLtQimkKHnPaHYxL6XceK3hYnZNKRerkTuRyGtrDYlYUubdhTIW8dGP/+rxOOf5//7P83/Ops6nzs15zvl+v7/zPP+X3/9kMgUKFPACMA1YBRwFLgOPgTfAR6AHuAucARqB2UDRUAhdAWwAbuLOC+AAUDUYwUeYX/ITyfkKtACV+Qq/GHiEf94CK9IOvxH4Trq0yR32HXw40Er+uACU+CzgNPmnAyj2EX43g8expOGXAT9yiO8DxgPrga4Y4WSdaACmADURn1seN/xI4GmEcE3gs8OATWZKtNEPbJNxlfnbLxe9wNg4Bey3BPlnkAELzJ1ZJAsUUGZeVeY9ubYwh18UR1zDjwP6IiU9zhJAicVLskx0EdyBnQkeC5ik8NvjItitEFzqsYAlCr9nqg0gUKsQe+dzE8afMSKaNmZqxNYphFb6Cj+A7IMUvrsyNoBTFpGuNPbyQBFwx+J9ViN0PfGvEL+I7RbvTo3I/cTPYfwCai3erzUiTywiFSl3eFH0aUSeD+EC+n08QjNSLGCWxbtXI9JuEWlMsYAmi3e3RuSwRUQesbIUwo8yJxVRXNQIrcVOawoFtCl8mzVClcrGvSW8p0/Qb59AR71W9IpSUFbOugTh64F7Sq8PQKlWeDNu3AK2ANUK7WpgK3Db0eO4azv5MiSwBpgPPEwyQ0l3hTs/genqAoyR9K1hVput76ss1zqUusWKtSbMOafwxqjUnBwE6TG7xjrgW9wGxxwIa/kMTHYuwBjNMacIQeYGzkgfAF+AGzKPO+hOdSigKVb4gNnOkOB5T6fbGtoT9x7mkTkZEm7wUIQNGSflSX2CRcjCFZ4695om5KDnAjrl1M9L+JBpc5bB+xuPBVwFxngPHzCel63piaETRrYvh7z/N5DDvNzcjfcD5jE0ZHEa4JrMeOmkjQ4xWpp8malifFc2cJdkOk4nXYECBTL/A78AmTCR9xr7/VMAAAAASUVORK5CYII=";function _C(){let[t,e]=F.useState(!1);function n(){const i=new Jn;MI(cr,i),console.log("clicked on the sign in button"),e(!0)}async function r(){try{const i=await VI(cr);if(i){const s=i.user;console.log("User Info:",s);const a=Jn.credentialFromResult(i).accessToken;console.log("GitHub Access Token:",a)}}catch(i){console.error("Error during sign-in:",i)}}return F.useEffect(()=>{t&&r()},[t]),b.jsx(b.Fragment,{children:b.jsxs("button",{type:"button",className:"sm:w-1/2 h-fit group hover:bg-black hover:text-white flex justify-center items-center py-2 px-2 border border-solid border-lessBlack rounded-md",onClick:n,children:[b.jsx("img",{width:25,height:25,className:"inline-block mr-2 group-hover:hidden",src:S2,alt:"Apple Logo"}),b.jsx("img",{width:25,height:25,className:"group-hover:inline-block mr-2 hidden",src:C2,alt:"Apple Logo"}),b.jsx("span",{children:"Sign in with Github"})]})})}const R2="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEkUlEQVR4nO2Zb0wbZRzHn3taesUtRpOJYbo/DoQM5c/GMgryzxkYxbGBiQsbNBCEFGaIY8zCCuaUMSiQAQMGQWAgcSY2GeuNuzpc8NqNvRoCItE3841Dthj3ToNzbX+mVRBI197Zo2VJv8n3XZ+nn89dn6dPrwj5448/HgcoJIWqgGIoxywU4HuQTfwJSsIKBxBAKgJIQzbIJhZBhX+BE/g6VAUU2ccgXwc0UgWU4tvwNmGBJASCqiQsoMa3QRsQ433wOlk4qPEsvCkQ2llTEUAxnoEaFOIdeA3RCumEzWPwtT2IrHCK0K0f+HkUCMX4B9HBk9b0PTwNFJKJC9+NngcVfrDu8En/toJoFw9+EMnhOPGr1+DLCE40eIeAGn/vPXgsMvyHRIfgrbEMT0IlroUmaQpQaAtQKAjOSN6C05hy7Db21zgbW4pN4sI3kyGQQVh5g5+W9PJZfEChZ+ADydAqkVKR4R1vVIHv8IIvwPNwDr0oeP4aFAJ5+P76wJvl22CcfAQaCUCyC/gSPAV6JEEbLWAmdWAmwdHeAIB0wvmV35DweiQBs2x+WcDeURmACv8Hn0lYoAK9hDZiwCSPXwW/VI4E0En/ObuclPSjjRowybROBZY6FPAAyhGJNmrATF5xKWCSdQiZL1gzC2I0XDthO9rUd9e9gImccynAkRm+EAjWzMIbddcW+Qg8dCMQ6iuB3TW3rHwEHrkWQJt9JbCjehKeaoHtVd+C5x+hm7IwXwns1t60Pd2L+JNRHovYTI642UY7fSVwRDc8z0NAduZJ8A+5Z6Geif/jvF4RiEROy3D+puiPvrG4Eii/0DjqXoALVDiDnx0PBhWthENXs6HDGHtJbIGTnfX97u6Arq/iuHsBQBjMsntL4DYzCfRYOGQbDjvg7c2jlZaL11/bJhZ8W496Z2SNyeoK/vVas4XiKH5P88BENtrhfzdthrNMwjL4ylaPJi9wXIrHjwcpjpIeafxswd3VL2lrm+A9KXCBL98df+GvEjrdKfxSP2YTZjyRoDhKmt/SM+d2/6+egsbuylhBkzcwihlX8CvvRP/X4VuFwvfeiNhe1lX3E5/d51hz75zQ+RE9FvZKPq208pHIp5WWzq/2DlCDKXJ38w6PRW1qZ/b15RmU1pyRHDja2uH2FEp9ekrQl+dyutmY1iweAitFGljFdJdxL6VnIw5cGdsVdJkL2zJgjEq8aNxTV8ckTNpfs3JM1kgOFPZQsLXqO6cC77c3dSNPomPjpvkKeNKiwXLYWX1nFfy7TQM/Ik+j10fINHTqfW9IFH5RCJG1Jgd8ev2Xv53o6hJ0cHxiOG7HczVM4oI3JI7pc0HVemGeGq4MEgV+hYT8LBM/K2RN/J+eYxXTRmPo+v3m7jNGNecaMq2iX3lDprWXjWlG3sgwvSe0gY2beseQ5TF4ztXDjqt++caru5C3MzQWGdvM7L9VZDj4WCh4AZ3xuJGJm/icifb+n3xrowck6WeiC1uN+0a1TOLPajptUWVQWu13yH4IzDVk2tSGtMWqa8nzLex+ts8YU2Afg/zxxx/kaf4GzSVnCicBYF0AAAAASUVORK5CYII=";var Pw={};const Nw="@firebase/database",xw="1.0.5";/**
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
 */let yC="";function A2(t){yC=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k2{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Rt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Sl(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P2{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Br(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vC=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new k2(e)}}catch{}return new P2},ts=vC("localStorage"),N2=vC("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wo=new Oh("@firebase/database"),x2=function(){let t=1;return function(){return t++}}(),wC=function(t){const e=VN(t),n=new DN;n.update(e);const r=n.digest();return Gm.encodeByteArray(r)},ru=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=ru.apply(null,r):typeof r=="object"?e+=Rt(r):e+=r,e+=" "}return e};let tl=null,Dw=!0;const D2=function(t,e){K(!e,"Can't turn on custom loggers persistently."),wo.logLevel=me.VERBOSE,tl=wo.log.bind(wo)},jt=function(...t){if(Dw===!0&&(Dw=!1,tl===null&&N2.get("logging_enabled")===!0&&D2()),tl){const e=ru.apply(null,t);tl(e)}},iu=function(t){return function(...e){jt(t,...e)}},Dp=function(...t){const e="FIREBASE INTERNAL ERROR: "+ru(...t);wo.error(e)},ys=function(...t){const e=`FIREBASE FATAL ERROR: ${ru(...t)}`;throw wo.error(e),new Error(e)},dn=function(...t){const e="FIREBASE WARNING: "+ru(...t);wo.warn(e)},b2=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&dn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},EC=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},O2=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Fo="[MIN_NAME]",vs="[MAX_NAME]",Xo=function(t,e){if(t===e)return 0;if(t===Fo||e===vs)return-1;if(e===Fo||t===vs)return 1;{const n=bw(t),r=bw(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},L2=function(t,e){return t===e?0:t<e?-1:1},Aa=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Rt(e))},jg=function(t){if(typeof t!="object"||t===null)return Rt(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Rt(e[r]),n+=":",n+=jg(t[e[r]]);return n+="}",n},TC=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function kn(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const IC=function(t){K(!EC(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,u;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(u=n;u;u-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(u=e;u;u-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const d=c.join("");let f="";for(u=0;u<64;u+=8){let m=parseInt(d.substr(u,8),2).toString(16);m.length===1&&(m="0"+m),f=f+m}return f.toLowerCase()},M2=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},V2=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},F2=new RegExp("^-?(0*)\\d{1,10}$"),U2=-2147483648,j2=2147483647,bw=function(t){if(F2.test(t)){const e=Number(t);if(e>=U2&&e<=j2)return e}return null},su=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw dn("Exception was thrown by user callback.",n),e},Math.floor(0))}},B2=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},nl=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class z2{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){dn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W2{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(jt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',dn(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg="5",SC="v",CC="s",RC="r",AC="f",kC=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,PC="ls",NC="p",bp="ac",xC="websocket",DC="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H2{constructor(e,n,r,i,s=!1,o="",a=!1,u=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ts.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ts.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function $2(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function bC(t,e,n){K(typeof e=="string","typeof type must == string"),K(typeof n=="object","typeof params must == object");let r;if(e===xC)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===DC)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);$2(t)&&(n.ns=t.namespace);const i=[];return kn(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q2{constructor(){this.counters_={}}incrementCounter(e,n=1){Br(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return fN(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf={},nf={};function zg(t){const e=t.toString();return tf[e]||(tf[e]=new q2),tf[e]}function K2(t,e){const n=t.toString();return nf[n]||(nf[n]=e()),nf[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G2{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&su(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ow="start",Q2="close",Y2="pLPCommand",X2="pRTLPCB",OC="id",LC="pw",MC="ser",J2="cb",Z2="seg",eV="ts",tV="d",nV="dframe",VC=1870,FC=30,rV=VC-FC,iV=25e3,sV=3e4;class ao{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=iu(e),this.stats_=zg(n),this.urlFn=u=>(this.appCheckToken&&(u[bp]=this.appCheckToken),bC(n,DC,u))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new G2(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(sV)),O2(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Wg((...s)=>{const[o,a,u,c,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ow)this.id=a,this.password=u;else if(o===Q2)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Ow]="t",r[MC]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[J2]=this.scriptTagHolder.uniqueCallbackIdentifier),r[SC]=Bg,this.transportSessionId&&(r[CC]=this.transportSessionId),this.lastSessionId&&(r[PC]=this.lastSessionId),this.applicationId&&(r[NC]=this.applicationId),this.appCheckToken&&(r[bp]=this.appCheckToken),typeof location<"u"&&location.hostname&&kC.test(location.hostname)&&(r[RC]=AC);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ao.forceAllow_=!0}static forceDisallow(){ao.forceDisallow_=!0}static isAvailable(){return ao.forceAllow_?!0:!ao.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!M2()&&!V2()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Rt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=WT(n),i=TC(r,rV);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[nV]="t",r[OC]=e,r[LC]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Rt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Wg{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=x2(),window[Y2+this.uniqueCallbackIdentifier]=e,window[X2+this.uniqueCallbackIdentifier]=n,this.myIFrame=Wg.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){jt("frame writing exception"),a.stack&&jt(a.stack),jt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||jt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[OC]=this.myID,e[LC]=this.myPW,e[MC]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+FC+r.length<=VC;){const o=this.pendingSegs.shift();r=r+"&"+Z2+i+"="+o.seg+"&"+eV+i+"="+o.ts+"&"+tV+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(iV)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{jt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oV=16384,aV=45e3;let oh=null;typeof MozWebSocket<"u"?oh=MozWebSocket:typeof WebSocket<"u"&&(oh=WebSocket);class Mn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=iu(this.connId),this.stats_=zg(n),this.connURL=Mn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[SC]=Bg,typeof location<"u"&&location.hostname&&kC.test(location.hostname)&&(o[RC]=AC),n&&(o[CC]=n),r&&(o[PC]=r),i&&(o[bp]=i),s&&(o[NC]=s),bC(e,xC,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ts.set("previous_websocket_failure",!0);try{let r;QT(),this.mySock=new oh(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Mn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&oh!==null&&!Mn.forceDisallow_}static previouslyFailed(){return ts.isInMemoryStorage||ts.get("previous_websocket_failure")===!0}markConnectionHealthy(){ts.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Sl(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(K(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Rt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=TC(n,oV);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(aV))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Mn.responsesRequiredToBeHealthy=2;Mn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ao,Mn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Mn&&Mn.isAvailable();let r=n&&!Mn.previouslyFailed();if(e.webSocketOnly&&(n||dn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Mn];else{const i=this.transports_=[];for(const s of Ll.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Ll.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ll.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lV=6e4,uV=5e3,cV=10*1024,hV=100*1024,rf="t",Lw="d",dV="s",Mw="r",fV="e",Vw="o",Fw="a",Uw="n",jw="p",pV="h";class mV{constructor(e,n,r,i,s,o,a,u,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=u,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=iu("c:"+this.id+":"),this.transportManager_=new Ll(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=nl(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>hV?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>cV?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(rf in e){const n=e[rf];n===Fw?this.upgradeIfSecondaryHealthy_():n===Mw?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Vw&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Aa("t",e),r=Aa("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:jw,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Fw,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Uw,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Aa("t",e),r=Aa("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Aa(rf,e);if(Lw in e){const r=e[Lw];if(n===pV){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Uw){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===dV?this.onConnectionShutdown_(r):n===Mw?this.onReset_(r):n===fV?Dp("Server Error: "+r):n===Vw?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Dp("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Bg!==r&&dn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),nl(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(lV))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):nl(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(uV))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:jw,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ts.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC{constructor(e){this.allowedEvents_=e,this.listeners_={},K(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){K(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah extends jC{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ym()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ah}getInitialEvent(e){return K(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bw=32,zw=768;class Be{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ke(){return new Be("")}function ve(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function xi(t){return t.pieces_.length-t.pieceNum_}function Fe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Be(t.pieces_,e)}function BC(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function gV(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function zC(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function WC(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Be(e,0)}function gt(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Be)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Be(n,0)}function _e(t){return t.pieceNum_>=t.pieces_.length}function In(t,e){const n=ve(t),r=ve(e);if(n===null)return e;if(n===r)return In(Fe(t),Fe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function HC(t,e){if(xi(t)!==xi(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Un(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(xi(t)>xi(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class _V{constructor(e,n){this.errorPrefix_=n,this.parts_=zC(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=bh(this.parts_[r]);$C(this)}}function yV(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=bh(e),$C(t)}function vV(t){const e=t.parts_.pop();t.byteLength_-=bh(e),t.parts_.length>0&&(t.byteLength_-=1)}function $C(t){if(t.byteLength_>zw)throw new Error(t.errorPrefix_+"has a key path longer than "+zw+" bytes ("+t.byteLength_+").");if(t.parts_.length>Bw)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Bw+") or object contains a cycle "+Gi(t))}function Gi(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg extends jC{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Hg}getInitialEvent(e){return K(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka=1e3,wV=60*5*1e3,Ww=30*1e3,EV=1.3,TV=3e4,IV="server_kill",Hw=3;class Nr extends UC{constructor(e,n,r,i,s,o,a,u){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=u,this.id=Nr.nextPersistentConnectionId_++,this.log_=iu("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ka,this.maxReconnectDelay_=wV,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u&&!QT())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Hg.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ah.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Rt(s)),K(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Qm,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),K(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),K(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const u=a.d,c=a.s;Nr.warnOnListenWarnings_(u,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,u))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Br(e,"w")){const r=No(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();dn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||xN(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ww)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=NN(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),K(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Rt(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Dp("Unrecognized action received from server: "+Rt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){K(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ka,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ka,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>TV&&(this.reconnectDelay_=ka),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*EV)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Nr.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const u=function(){a?a.close():(o=!0,r())},c=function(f){K(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:u,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,m]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?jt("getToken() completed but was canceled"):(jt("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=m&&m.token,a=new mV(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,T=>{dn(T+" ("+this.repoInfo_.toString()+")"),this.interrupt(IV)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&dn(f),u())}}}interrupt(e){jt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){jt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ap(this.interruptReasons_)&&(this.reconnectDelay_=ka,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>jg(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Be(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){jt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Hw&&(this.reconnectDelay_=Ww,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){jt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Hw&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+yC.replace(/\./g,"-")]=1,Ym()?e["framework.cordova"]=1:GT()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ah.getInstance().currentlyOnline();return ap(this.interruptReasons_)&&e}}Nr.nextPersistentConnectionId_=0;Nr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new we(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new we(Fo,e),i=new we(Fo,n);return this.compare(r,i)!==0}minPost(){return we.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ku;class qC extends Xh{static get __EMPTY_NODE(){return Ku}static set __EMPTY_NODE(e){Ku=e}compare(e,n){return Xo(e.name,n.name)}isDefinedOn(e){throw Wo("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return we.MIN}maxPost(){return new we(vs,Ku)}makePost(e,n){return K(typeof e=="string","KeyIndex indexValue must always be a string."),new we(e,Ku)}toString(){return".key"}}const Eo=new qC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class mt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??mt.RED,this.left=i??tn.EMPTY_NODE,this.right=s??tn.EMPTY_NODE}copy(e,n,r,i,s){return new mt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return tn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return tn.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,mt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,mt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}mt.RED=!0;mt.BLACK=!1;class SV{copy(e,n,r,i,s){return this}insert(e,n,r){return new mt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class tn{constructor(e,n=tn.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new tn(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,mt.BLACK,null,null))}remove(e){return new tn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,mt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Gu(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Gu(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Gu(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Gu(this.root_,null,this.comparator_,!0,e)}}tn.EMPTY_NODE=new SV;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CV(t,e){return Xo(t.name,e.name)}function $g(t,e){return Xo(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Op;function RV(t){Op=t}const KC=function(t){return typeof t=="number"?"number:"+IC(t):"string:"+t},GC=function(t){if(t.isLeafNode()){const e=t.val();K(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Br(e,".sv"),"Priority must be a string or number.")}else K(t===Op||t.isEmpty(),"priority of unexpected type.");K(t===Op||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $w;class dt{constructor(e,n=dt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,K(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),GC(this.priorityNode_)}static set __childrenNodeConstructor(e){$w=e}static get __childrenNodeConstructor(){return $w}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new dt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:dt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return _e(e)?this:ve(e)===".priority"?this.priorityNode_:dt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:dt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=ve(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(K(r!==".priority"||xi(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,dt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Fe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+KC(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=IC(this.value_):e+=this.value_,this.lazyHash_=wC(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===dt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof dt.__childrenNodeConstructor?-1:(K(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=dt.VALUE_TYPE_ORDER.indexOf(n),s=dt.VALUE_TYPE_ORDER.indexOf(r);return K(i>=0,"Unknown leaf type: "+n),K(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}dt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let QC,YC;function AV(t){QC=t}function kV(t){YC=t}class PV extends Xh{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Xo(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return we.MIN}maxPost(){return new we(vs,new dt("[PRIORITY-POST]",YC))}makePost(e,n){const r=QC(e);return new we(n,new dt("[PRIORITY-POST]",r))}toString(){return".priority"}}const zt=new PV;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NV=Math.log(2);class xV{constructor(e){const n=s=>parseInt(Math.log(s)/NV,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const lh=function(t,e,n,r){t.sort(e);const i=function(u,c){const d=c-u;let f,m;if(d===0)return null;if(d===1)return f=t[u],m=n?n(f):f,new mt(m,f.node,mt.BLACK,null,null);{const T=parseInt(d/2,10)+u,R=i(u,T),A=i(T+1,c);return f=t[T],m=n?n(f):f,new mt(m,f.node,mt.BLACK,R,A)}},s=function(u){let c=null,d=null,f=t.length;const m=function(R,A){const P=f-R,E=f;f-=R;const v=i(P+1,E),S=t[P],L=n?n(S):S;T(new mt(L,S.node,A,null,v))},T=function(R){c?(c.left=R,c=R):(d=R,c=R)};for(let R=0;R<u.count;++R){const A=u.nextBitIsOne(),P=Math.pow(2,u.count-(R+1));A?m(P,mt.BLACK):(m(P,mt.BLACK),m(P,mt.RED))}return d},o=new xV(t.length),a=s(o);return new tn(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sf;const Ws={};class Ar{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return K(Ws&&zt,"ChildrenNode.ts has not been loaded"),sf=sf||new Ar({".priority":Ws},{".priority":zt}),sf}get(e){const n=No(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof tn?n:null}hasIndex(e){return Br(this.indexSet_,e.toString())}addIndex(e,n){K(e!==Eo,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(we.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=lh(r,e.getCompare()):a=Ws;const u=e.toString(),c=Object.assign({},this.indexSet_);c[u]=e;const d=Object.assign({},this.indexes_);return d[u]=a,new Ar(d,c)}addToIndexes(e,n){const r=Hc(this.indexes_,(i,s)=>{const o=No(this.indexSet_,s);if(K(o,"Missing index implementation for "+s),i===Ws)if(o.isDefinedOn(e.node)){const a=[],u=n.getIterator(we.Wrap);let c=u.getNext();for(;c;)c.name!==e.name&&a.push(c),c=u.getNext();return a.push(e),lh(a,o.getCompare())}else return Ws;else{const a=n.get(e.name);let u=i;return a&&(u=u.remove(new we(e.name,a))),u.insert(e,e.node)}});return new Ar(r,this.indexSet_)}removeFromIndexes(e,n){const r=Hc(this.indexes_,i=>{if(i===Ws)return i;{const s=n.get(e.name);return s?i.remove(new we(e.name,s)):i}});return new Ar(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pa;class Ce{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&GC(this.priorityNode_),this.children_.isEmpty()&&K(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Pa||(Pa=new Ce(new tn($g),null,Ar.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Pa}updatePriority(e){return this.children_.isEmpty()?this:new Ce(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Pa:n}}getChild(e){const n=ve(e);return n===null?this:this.getImmediateChild(n).getChild(Fe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(K(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new we(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Pa:this.priorityNode_;return new Ce(i,o,s)}}updateChild(e,n){const r=ve(e);if(r===null)return n;{K(ve(e)!==".priority"||xi(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Fe(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(zt,(o,a)=>{n[o]=a.val(e),r++,s&&Ce.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+KC(this.getPriority().val())+":"),this.forEachChild(zt,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":wC(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new we(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new we(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new we(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,we.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,we.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ou?-1:0}withIndex(e){if(e===Eo||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Ce(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Eo||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(zt),i=n.getIterator(zt);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Eo?null:this.indexMap_.get(e.toString())}}Ce.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class DV extends Ce{constructor(){super(new tn($g),Ce.EMPTY_NODE,Ar.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Ce.EMPTY_NODE}isEmpty(){return!1}}const ou=new DV;Object.defineProperties(we,{MIN:{value:new we(Fo,Ce.EMPTY_NODE)},MAX:{value:new we(vs,ou)}});qC.__EMPTY_NODE=Ce.EMPTY_NODE;dt.__childrenNodeConstructor=Ce;RV(ou);kV(ou);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bV=!0;function Bt(t,e=null){if(t===null)return Ce.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),K(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new dt(n,Bt(e))}if(!(t instanceof Array)&&bV){const n=[];let r=!1;if(kn(t,(o,a)=>{if(o.substring(0,1)!=="."){const u=Bt(a);u.isEmpty()||(r=r||!u.getPriority().isEmpty(),n.push(new we(o,u)))}}),n.length===0)return Ce.EMPTY_NODE;const s=lh(n,CV,o=>o.name,$g);if(r){const o=lh(n,zt.getCompare());return new Ce(s,Bt(e),new Ar({".priority":o},{".priority":zt}))}else return new Ce(s,Bt(e),Ar.Default)}else{let n=Ce.EMPTY_NODE;return kn(t,(r,i)=>{if(Br(t,r)&&r.substring(0,1)!=="."){const s=Bt(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Bt(e))}}AV(Bt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OV extends Xh{constructor(e){super(),this.indexPath_=e,K(!_e(e)&&ve(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Xo(e.name,n.name):s}makePost(e,n){const r=Bt(e),i=Ce.EMPTY_NODE.updateChild(this.indexPath_,r);return new we(n,i)}maxPost(){const e=Ce.EMPTY_NODE.updateChild(this.indexPath_,ou);return new we(vs,e)}toString(){return zC(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LV extends Xh{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Xo(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return we.MIN}maxPost(){return we.MAX}makePost(e,n){const r=Bt(e);return new we(n,r)}toString(){return".value"}}const MV=new LV;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VV(t){return{type:"value",snapshotNode:t}}function FV(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function UV(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function qw(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function jV(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=zt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return K(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return K(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Fo}hasEnd(){return this.endSet_}getIndexEndValue(){return K(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return K(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:vs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return K(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===zt}copy(){const e=new qg;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Kw(t){const e={};if(t.isDefault())return e;let n;if(t.index_===zt?n="$priority":t.index_===MV?n="$value":t.index_===Eo?n="$key":(K(t.index_ instanceof OV,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Rt(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Rt(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Rt(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Rt(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Rt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Gw(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==zt&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh extends UC{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=iu("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(K(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=uh.getListenId_(e,r),a={};this.listens_[o]=a;const u=Kw(e._queryParams);this.restRequest_(s+".json",u,(c,d)=>{let f=d;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(s,f,!1,r),No(this.listens_,o)===a){let m;c?c===401?m="permission_denied":m="rest_error:"+c:m="ok",i(m,null)}})}unlisten(e,n){const r=uh.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Kw(e._queryParams),r=e._path.toString(),i=new Qm;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ho(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let u=null;if(a.status>=200&&a.status<300){try{u=Sl(a.responseText)}catch{dn("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,u)}else a.status!==401&&a.status!==404&&dn("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BV{constructor(){this.rootNode_=Ce.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ch(){return{value:null,children:new Map}}function XC(t,e,n){if(_e(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=ve(e);t.children.has(r)||t.children.set(r,ch());const i=t.children.get(r);e=Fe(e),XC(i,e,n)}}function Lp(t,e,n){t.value!==null?n(e,t.value):zV(t,(r,i)=>{const s=new Be(e.toString()+"/"+r);Lp(i,s,n)})}function zV(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WV{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&kn(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw=10*1e3,HV=30*1e3,$V=5*60*1e3;class qV{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new WV(e);const r=Qw+(HV-Qw)*Math.random();nl(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;kn(e,(i,s)=>{s>0&&Br(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),nl(this.reportStats_.bind(this),Math.floor(Math.random()*2*$V))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Zn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Zn||(Zn={}));function JC(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ZC(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function eR(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Zn.ACK_USER_WRITE,this.source=JC()}operationForChild(e){if(_e(this.path)){if(this.affectedTree.value!=null)return K(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Be(e));return new hh(ke(),n,this.revert)}}else return K(ve(this.path)===e,"operationForChild called for unrelated child."),new hh(Fe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Zn.OVERWRITE}operationForChild(e){return _e(this.path)?new ws(this.source,ke(),this.snap.getImmediateChild(e)):new ws(this.source,Fe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Zn.MERGE}operationForChild(e){if(_e(this.path)){const n=this.children.subtree(new Be(e));return n.isEmpty()?null:n.value?new ws(this.source,ke(),n.value):new Ml(this.source,ke(),n)}else return K(ve(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ml(this.source,Fe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(_e(e))return this.isFullyInitialized()&&!this.filtered_;const n=ve(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function KV(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(jV(o.childName,o.snapshotNode))}),Na(t,i,"child_removed",e,r,n),Na(t,i,"child_added",e,r,n),Na(t,i,"child_moved",s,r,n),Na(t,i,"child_changed",e,r,n),Na(t,i,"value",e,r,n),i}function Na(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,u)=>QV(t,a,u)),o.forEach(a=>{const u=GV(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(u,t.query_))})})}function GV(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function QV(t,e,n){if(e.childName==null||n.childName==null)throw Wo("Should only compare child_ events.");const r=new we(e.childName,e.snapshotNode),i=new we(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tR(t,e){return{eventCache:t,serverCache:e}}function rl(t,e,n,r){return tR(new Kg(e,n,r),t.serverCache)}function nR(t,e,n,r){return tR(t.eventCache,new Kg(e,n,r))}function Mp(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Es(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let of;const YV=()=>(of||(of=new tn(L2)),of);class Ve{constructor(e,n=YV()){this.value=e,this.children=n}static fromObject(e){let n=new Ve(null);return kn(e,(r,i)=>{n=n.set(new Be(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ke(),value:this.value};if(_e(e))return null;{const r=ve(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Fe(e),n);return s!=null?{path:gt(new Be(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(_e(e))return this;{const n=ve(e),r=this.children.get(n);return r!==null?r.subtree(Fe(e)):new Ve(null)}}set(e,n){if(_e(e))return new Ve(n,this.children);{const r=ve(e),s=(this.children.get(r)||new Ve(null)).set(Fe(e),n),o=this.children.insert(r,s);return new Ve(this.value,o)}}remove(e){if(_e(e))return this.children.isEmpty()?new Ve(null):new Ve(null,this.children);{const n=ve(e),r=this.children.get(n);if(r){const i=r.remove(Fe(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Ve(null):new Ve(this.value,s)}else return this}}get(e){if(_e(e))return this.value;{const n=ve(e),r=this.children.get(n);return r?r.get(Fe(e)):null}}setTree(e,n){if(_e(e))return n;{const r=ve(e),s=(this.children.get(r)||new Ve(null)).setTree(Fe(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Ve(this.value,o)}}fold(e){return this.fold_(ke(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(gt(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ke(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(_e(e))return null;{const s=ve(e),o=this.children.get(s);return o?o.findOnPath_(Fe(e),gt(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ke(),n)}foreachOnPath_(e,n,r){if(_e(e))return this;{this.value&&r(n,this.value);const i=ve(e),s=this.children.get(i);return s?s.foreachOnPath_(Fe(e),gt(n,i),r):new Ve(null)}}foreach(e){this.foreach_(ke(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(gt(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e){this.writeTree_=e}static empty(){return new zn(new Ve(null))}}function il(t,e,n){if(_e(e))return new zn(new Ve(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=In(i,e);return s=s.updateChild(o,n),new zn(t.writeTree_.set(i,s))}else{const i=new Ve(n),s=t.writeTree_.setTree(e,i);return new zn(s)}}}function Yw(t,e,n){let r=t;return kn(n,(i,s)=>{r=il(r,gt(e,i),s)}),r}function Xw(t,e){if(_e(e))return zn.empty();{const n=t.writeTree_.setTree(e,new Ve(null));return new zn(n)}}function Vp(t,e){return As(t,e)!=null}function As(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(In(n.path,e)):null}function Jw(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(zt,(r,i)=>{e.push(new we(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new we(r,i.value))}),e}function Ti(t,e){if(_e(e))return t;{const n=As(t,e);return n!=null?new zn(new Ve(n)):new zn(t.writeTree_.subtree(e))}}function Fp(t){return t.writeTree_.isEmpty()}function Uo(t,e){return rR(ke(),t.writeTree_,e)}function rR(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(K(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=rR(gt(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(gt(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iR(t,e){return uR(e,t)}function XV(t,e,n,r,i){K(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=il(t.visibleWrites,e,n)),t.lastWriteId=r}function JV(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function ZV(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);K(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&eF(a,r.path)?i=!1:Un(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return tF(t),!0;if(r.snap)t.visibleWrites=Xw(t.visibleWrites,r.path);else{const a=r.children;kn(a,u=>{t.visibleWrites=Xw(t.visibleWrites,gt(r.path,u))})}return!0}else return!1}function eF(t,e){if(t.snap)return Un(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Un(gt(t.path,n),e))return!0;return!1}function tF(t){t.visibleWrites=sR(t.allWrites,nF,ke()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function nF(t){return t.visible}function sR(t,e,n){let r=zn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Un(n,o)?(a=In(n,o),r=il(r,a,s.snap)):Un(o,n)&&(a=In(o,n),r=il(r,ke(),s.snap.getChild(a)));else if(s.children){if(Un(n,o))a=In(n,o),r=Yw(r,a,s.children);else if(Un(o,n))if(a=In(o,n),_e(a))r=Yw(r,ke(),s.children);else{const u=No(s.children,ve(a));if(u){const c=u.getChild(Fe(a));r=il(r,ke(),c)}}}else throw Wo("WriteRecord should have .snap or .children")}}return r}function oR(t,e,n,r,i){if(!r&&!i){const s=As(t.visibleWrites,e);if(s!=null)return s;{const o=Ti(t.visibleWrites,e);if(Fp(o))return n;if(n==null&&!Vp(o,ke()))return null;{const a=n||Ce.EMPTY_NODE;return Uo(o,a)}}}else{const s=Ti(t.visibleWrites,e);if(!i&&Fp(s))return n;if(!i&&n==null&&!Vp(s,ke()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(Un(c.path,e)||Un(e,c.path))},a=sR(t.allWrites,o,e),u=n||Ce.EMPTY_NODE;return Uo(a,u)}}}function rF(t,e,n){let r=Ce.EMPTY_NODE;const i=As(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(zt,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Ti(t.visibleWrites,e);return n.forEachChild(zt,(o,a)=>{const u=Uo(Ti(s,new Be(o)),a);r=r.updateImmediateChild(o,u)}),Jw(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Ti(t.visibleWrites,e);return Jw(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function iF(t,e,n,r,i){K(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=gt(e,n);if(Vp(t.visibleWrites,s))return null;{const o=Ti(t.visibleWrites,s);return Fp(o)?i.getChild(n):Uo(o,i.getChild(n))}}function sF(t,e,n,r){const i=gt(e,n),s=As(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Ti(t.visibleWrites,i);return Uo(o,r.getNode().getImmediateChild(n))}else return null}function oF(t,e){return As(t.visibleWrites,e)}function aF(t,e,n,r,i,s,o){let a;const u=Ti(t.visibleWrites,e),c=As(u,ke());if(c!=null)a=c;else if(n!=null)a=Uo(u,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],f=o.getCompare(),m=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let T=m.getNext();for(;T&&d.length<i;)f(T,r)!==0&&d.push(T),T=m.getNext();return d}else return[]}function lF(){return{visibleWrites:zn.empty(),allWrites:[],lastWriteId:-1}}function Up(t,e,n,r){return oR(t.writeTree,t.treePath,e,n,r)}function aR(t,e){return rF(t.writeTree,t.treePath,e)}function Zw(t,e,n,r){return iF(t.writeTree,t.treePath,e,n,r)}function dh(t,e){return oF(t.writeTree,gt(t.treePath,e))}function uF(t,e,n,r,i,s){return aF(t.writeTree,t.treePath,e,n,r,i,s)}function Gg(t,e,n){return sF(t.writeTree,t.treePath,e,n)}function lR(t,e){return uR(gt(t.treePath,e),t.writeTree)}function uR(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cF{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;K(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),K(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,qw(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,UV(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,FV(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,qw(r,e.snapshotNode,i.oldSnap));else throw Wo("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hF{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const cR=new hF;class Qg{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Kg(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Gg(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Es(this.viewCache_),s=uF(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}function dF(t,e){K(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),K(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function fF(t,e,n,r,i){const s=new cF;let o,a;if(n.type===Zn.OVERWRITE){const c=n;c.source.fromUser?o=jp(t,e,c.path,c.snap,r,i,s):(K(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!_e(c.path),o=fh(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===Zn.MERGE){const c=n;c.source.fromUser?o=mF(t,e,c.path,c.children,r,i,s):(K(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Bp(t,e,c.path,c.children,r,i,a,s))}else if(n.type===Zn.ACK_USER_WRITE){const c=n;c.revert?o=yF(t,e,c.path,r,i,s):o=gF(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===Zn.LISTEN_COMPLETE)o=_F(t,e,n.path,r,s);else throw Wo("Unknown operation type: "+n.type);const u=s.getChanges();return pF(e,o,u),{viewCache:o,changes:u}}function pF(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Mp(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(VV(Mp(e)))}}function hR(t,e,n,r,i,s){const o=e.eventCache;if(dh(r,n)!=null)return e;{let a,u;if(_e(n))if(K(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Es(e),d=c instanceof Ce?c:Ce.EMPTY_NODE,f=aR(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const c=Up(r,Es(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=ve(n);if(c===".priority"){K(xi(n)===1,"Can't have a priority with additional path components");const d=o.getNode();u=e.serverCache.getNode();const f=Zw(r,n,d,u);f!=null?a=t.filter.updatePriority(d,f):a=o.getNode()}else{const d=Fe(n);let f;if(o.isCompleteForChild(c)){u=e.serverCache.getNode();const m=Zw(r,n,o.getNode(),u);m!=null?f=o.getNode().getImmediateChild(c).updateChild(d,m):f=o.getNode().getImmediateChild(c)}else f=Gg(r,c,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),c,f,d,i,s):a=o.getNode()}}return rl(e,a,o.isFullyInitialized()||_e(n),t.filter.filtersNodes())}}function fh(t,e,n,r,i,s,o,a){const u=e.serverCache;let c;const d=o?t.filter:t.filter.getIndexedFilter();if(_e(n))c=d.updateFullNode(u.getNode(),r,null);else if(d.filtersNodes()&&!u.isFiltered()){const T=u.getNode().updateChild(n,r);c=d.updateFullNode(u.getNode(),T,null)}else{const T=ve(n);if(!u.isCompleteForPath(n)&&xi(n)>1)return e;const R=Fe(n),P=u.getNode().getImmediateChild(T).updateChild(R,r);T===".priority"?c=d.updatePriority(u.getNode(),P):c=d.updateChild(u.getNode(),T,P,R,cR,null)}const f=nR(e,c,u.isFullyInitialized()||_e(n),d.filtersNodes()),m=new Qg(i,f,s);return hR(t,f,n,i,m,a)}function jp(t,e,n,r,i,s,o){const a=e.eventCache;let u,c;const d=new Qg(i,e,s);if(_e(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),u=rl(e,c,!0,t.filter.filtersNodes());else{const f=ve(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),u=rl(e,c,a.isFullyInitialized(),a.isFiltered());else{const m=Fe(n),T=a.getNode().getImmediateChild(f);let R;if(_e(m))R=r;else{const A=d.getCompleteChild(f);A!=null?BC(m)===".priority"&&A.getChild(WC(m)).isEmpty()?R=A:R=A.updateChild(m,r):R=Ce.EMPTY_NODE}if(T.equals(R))u=e;else{const A=t.filter.updateChild(a.getNode(),f,R,m,d,o);u=rl(e,A,a.isFullyInitialized(),t.filter.filtersNodes())}}}return u}function eE(t,e){return t.eventCache.isCompleteForChild(e)}function mF(t,e,n,r,i,s,o){let a=e;return r.foreach((u,c)=>{const d=gt(n,u);eE(e,ve(d))&&(a=jp(t,a,d,c,i,s,o))}),r.foreach((u,c)=>{const d=gt(n,u);eE(e,ve(d))||(a=jp(t,a,d,c,i,s,o))}),a}function tE(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Bp(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let u=e,c;_e(n)?c=r:c=new Ve(null).setTree(n,r);const d=e.serverCache.getNode();return c.children.inorderTraversal((f,m)=>{if(d.hasChild(f)){const T=e.serverCache.getNode().getImmediateChild(f),R=tE(t,T,m);u=fh(t,u,new Be(f),R,i,s,o,a)}}),c.children.inorderTraversal((f,m)=>{const T=!e.serverCache.isCompleteForChild(f)&&m.value===null;if(!d.hasChild(f)&&!T){const R=e.serverCache.getNode().getImmediateChild(f),A=tE(t,R,m);u=fh(t,u,new Be(f),A,i,s,o,a)}}),u}function gF(t,e,n,r,i,s,o){if(dh(i,n)!=null)return e;const a=e.serverCache.isFiltered(),u=e.serverCache;if(r.value!=null){if(_e(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return fh(t,e,n,u.getNode().getChild(n),i,s,a,o);if(_e(n)){let c=new Ve(null);return u.getNode().forEachChild(Eo,(d,f)=>{c=c.set(new Be(d),f)}),Bp(t,e,n,c,i,s,a,o)}else return e}else{let c=new Ve(null);return r.foreach((d,f)=>{const m=gt(n,d);u.isCompleteForPath(m)&&(c=c.set(d,u.getNode().getChild(m)))}),Bp(t,e,n,c,i,s,a,o)}}function _F(t,e,n,r,i){const s=e.serverCache,o=nR(e,s.getNode(),s.isFullyInitialized()||_e(n),s.isFiltered());return hR(t,o,n,r,cR,i)}function yF(t,e,n,r,i,s){let o;if(dh(r,n)!=null)return e;{const a=new Qg(r,e,i),u=e.eventCache.getNode();let c;if(_e(n)||ve(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Up(r,Es(e));else{const f=e.serverCache.getNode();K(f instanceof Ce,"serverChildren would be complete if leaf node"),d=aR(r,f)}d=d,c=t.filter.updateFullNode(u,d,s)}else{const d=ve(n);let f=Gg(r,d,e.serverCache);f==null&&e.serverCache.isCompleteForChild(d)&&(f=u.getImmediateChild(d)),f!=null?c=t.filter.updateChild(u,d,f,Fe(n),a,s):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(u,d,Ce.EMPTY_NODE,Fe(n),a,s):c=u,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Up(r,Es(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||dh(r,ke())!=null,rl(e,c,o,t.filter.filtersNodes())}}function vF(t,e){const n=Es(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!_e(e)&&!n.getImmediateChild(ve(e)).isEmpty())?n.getChild(e):null}function nE(t,e,n,r){e.type===Zn.MERGE&&e.source.queryId!==null&&(K(Es(t.viewCache_),"We should always have a full cache before handling merges"),K(Mp(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=fF(t.processor_,i,e,n,r);return dF(t.processor_,s.viewCache),K(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,wF(t,s.changes,s.viewCache.eventCache.getNode())}function wF(t,e,n,r){const i=t.eventRegistrations_;return KV(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rE;function EF(t){K(!rE,"__referenceConstructor has already been defined"),rE=t}function Yg(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return K(s!=null,"SyncTree gave us an op for an invalid query."),nE(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(nE(o,e,n,r));return s}}function Xg(t,e){let n=null;for(const r of t.views.values())n=n||vF(r,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iE;function TF(t){K(!iE,"__referenceConstructor has already been defined"),iE=t}class sE{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ve(null),this.pendingWriteTree_=lF(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function IF(t,e,n,r,i){return XV(t.pendingWriteTree_,e,n,r,i),i?Zh(t,new ws(JC(),e,n)):[]}function lo(t,e,n=!1){const r=JV(t.pendingWriteTree_,e);if(ZV(t.pendingWriteTree_,e)){let s=new Ve(null);return r.snap!=null?s=s.set(ke(),!0):kn(r.children,o=>{s=s.set(new Be(o),!0)}),Zh(t,new hh(r.path,s,n))}else return[]}function Jh(t,e,n){return Zh(t,new ws(ZC(),e,n))}function SF(t,e,n){const r=Ve.fromObject(n);return Zh(t,new Ml(ZC(),e,r))}function CF(t,e,n,r){const i=mR(t,r);if(i!=null){const s=gR(i),o=s.path,a=s.queryId,u=In(o,e),c=new ws(eR(a),u,n);return _R(t,o,c)}else return[]}function RF(t,e,n,r){const i=mR(t,r);if(i){const s=gR(i),o=s.path,a=s.queryId,u=In(o,e),c=Ve.fromObject(n),d=new Ml(eR(a),u,c);return _R(t,o,d)}else return[]}function dR(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const u=In(o,e),c=Xg(a,u);if(c)return c});return oR(i,e,s,n,!0)}function Zh(t,e){return fR(e,t.syncPointTree_,null,iR(t.pendingWriteTree_,ke()))}function fR(t,e,n,r){if(_e(t.path))return pR(t,e,n,r);{const i=e.get(ke());n==null&&i!=null&&(n=Xg(i,ke()));let s=[];const o=ve(t.path),a=t.operationForChild(o),u=e.children.get(o);if(u&&a){const c=n?n.getImmediateChild(o):null,d=lR(r,o);s=s.concat(fR(a,u,c,d))}return i&&(s=s.concat(Yg(i,t,r,n))),s}}function pR(t,e,n,r){const i=e.get(ke());n==null&&i!=null&&(n=Xg(i,ke()));let s=[];return e.children.inorderTraversal((o,a)=>{const u=n?n.getImmediateChild(o):null,c=lR(r,o),d=t.operationForChild(o);d&&(s=s.concat(pR(d,a,u,c)))}),i&&(s=s.concat(Yg(i,t,r,n))),s}function mR(t,e){return t.tagToQueryMap.get(e)}function gR(t){const e=t.indexOf("$");return K(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Be(t.substr(0,e))}}function _R(t,e,n){const r=t.syncPointTree_.get(e);K(r,"Missing sync point for query tag that we're tracking");const i=iR(t.pendingWriteTree_,e);return Yg(r,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Jg(n)}node(){return this.node_}}class Zg{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=gt(this.path_,e);return new Zg(this.syncTree_,n)}node(){return dR(this.syncTree_,this.path_)}}const AF=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},oE=function(t,e,n){if(!t||typeof t!="object")return t;if(K(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return kF(t[".sv"],e,n);if(typeof t[".sv"]=="object")return PF(t[".sv"],e);K(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},kF=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:K(!1,"Unexpected server value: "+t)}},PF=function(t,e,n){t.hasOwnProperty("increment")||K(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&K(!1,"Unexpected increment value: "+r);const i=e.node();if(K(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},NF=function(t,e,n,r){return e_(e,new Zg(n,t),r)},xF=function(t,e,n){return e_(t,new Jg(e),n)};function e_(t,e,n){const r=t.getPriority().val(),i=oE(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=oE(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new dt(a,Bt(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new dt(i))),o.forEachChild(zt,(a,u)=>{const c=e_(u,e.getImmediateChild(a),n);c!==u&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function n_(t,e){let n=e instanceof Be?e:new Be(e),r=t,i=ve(n);for(;i!==null;){const s=No(r.node.children,i)||{children:{},childCount:0};r=new t_(i,r,s),n=Fe(n),i=ve(n)}return r}function Jo(t){return t.node.value}function yR(t,e){t.node.value=e,zp(t)}function vR(t){return t.node.childCount>0}function DF(t){return Jo(t)===void 0&&!vR(t)}function ed(t,e){kn(t.node.children,(n,r)=>{e(new t_(n,t,r))})}function wR(t,e,n,r){n&&!r&&e(t),ed(t,i=>{wR(i,e,!0,r)}),n&&r&&e(t)}function bF(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function au(t){return new Be(t.parent===null?t.name:au(t.parent)+"/"+t.name)}function zp(t){t.parent!==null&&OF(t.parent,t.name,t)}function OF(t,e,n){const r=DF(n),i=Br(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,zp(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,zp(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LF=/[\[\].#$\/\u0000-\u001F\u007F]/,MF=/[\[\].#$\u0000-\u001F\u007F]/,af=10*1024*1024,ER=function(t){return typeof t=="string"&&t.length!==0&&!LF.test(t)},VF=function(t){return typeof t=="string"&&t.length!==0&&!MF.test(t)},FF=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),VF(t)},TR=function(t,e,n){const r=n instanceof Be?new _V(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Gi(r));if(typeof e=="function")throw new Error(t+"contains a function "+Gi(r)+" with contents = "+e.toString());if(EC(e))throw new Error(t+"contains "+e.toString()+" "+Gi(r));if(typeof e=="string"&&e.length>af/3&&bh(e)>af)throw new Error(t+"contains a string greater than "+af+" utf8 bytes "+Gi(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(kn(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!ER(o)))throw new Error(t+" contains an invalid key ("+o+") "+Gi(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);yV(r,o),TR(t,a,r),vV(r)}),i&&s)throw new Error(t+' contains ".value" child '+Gi(r)+" in addition to actual children.")}},UF=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ER(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!FF(n))throw new Error(MN(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jF{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function BF(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!HC(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function ks(t,e,n){BF(t,n),zF(t,r=>Un(r,e)||Un(e,r))}function zF(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(WF(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function WF(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();tl&&jt("event: "+n.toString()),su(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HF="repo_interrupt",$F=25;class qF{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new jF,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ch(),this.transactionQueueTree_=new t_,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function KF(t,e,n){if(t.stats_=zg(t.repoInfo_),t.forceRestClient_||B2())t.server_=new uh(t.repoInfo_,(r,i,s,o)=>{aE(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>lE(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Rt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Nr(t.repoInfo_,e,(r,i,s,o)=>{aE(t,r,i,s,o)},r=>{lE(t,r)},r=>{QF(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=K2(t.repoInfo_,()=>new qV(t.stats_,t.server_)),t.infoData_=new BV,t.infoSyncTree_=new sE({startListening:(r,i,s,o)=>{let a=[];const u=t.infoData_.getNode(r._path);return u.isEmpty()||(a=Jh(t.infoSyncTree_,r._path,u),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),r_(t,"connected",!1),t.serverSyncTree_=new sE({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,u)=>{const c=o(a,u);ks(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function GF(t){const n=t.infoData_.getNode(new Be(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function IR(t){return AF({timestamp:GF(t)})}function aE(t,e,n,r,i){t.dataUpdateCount++;const s=new Be(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const u=Hc(n,c=>Bt(c));o=RF(t.serverSyncTree_,s,u,i)}else{const u=Bt(n);o=CF(t.serverSyncTree_,s,u,i)}else if(r){const u=Hc(n,c=>Bt(c));o=SF(t.serverSyncTree_,s,u)}else{const u=Bt(n);o=Jh(t.serverSyncTree_,s,u)}let a=s;o.length>0&&(a=s_(t,s)),ks(t.eventQueue_,a,o)}function lE(t,e){r_(t,"connected",e),e===!1&&XF(t)}function QF(t,e){kn(e,(n,r)=>{r_(t,n,r)})}function r_(t,e,n){const r=new Be("/.info/"+e),i=Bt(n);t.infoData_.updateSnapshot(r,i);const s=Jh(t.infoSyncTree_,r,i);ks(t.eventQueue_,r,s)}function YF(t){return t.nextWriteId_++}function XF(t){SR(t,"onDisconnectEvents");const e=IR(t),n=ch();Lp(t.onDisconnect_,ke(),(i,s)=>{const o=NF(i,s,t.serverSyncTree_,e);XC(n,i,o)});let r=[];Lp(n,ke(),(i,s)=>{r=r.concat(Jh(t.serverSyncTree_,i,s));const o=tU(t,i);s_(t,o)}),t.onDisconnect_=ch(),ks(t.eventQueue_,ke(),r)}function JF(t){t.persistentConnection_&&t.persistentConnection_.interrupt(HF)}function SR(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),jt(n,...e)}function CR(t,e,n){return dR(t.serverSyncTree_,e,n)||Ce.EMPTY_NODE}function i_(t,e=t.transactionQueueTree_){if(e||td(t,e),Jo(e)){const n=AR(t,e);K(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&ZF(t,au(e),n)}else vR(e)&&ed(e,n=>{i_(t,n)})}function ZF(t,e,n){const r=n.map(c=>c.currentWriteId),i=CR(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const d=n[c];K(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const f=In(e,d.path);s=s.updateChild(f,d.currentOutputSnapshotRaw)}const a=s.val(!0),u=e;t.server_.put(u.toString(),a,c=>{SR(t,"transaction put response",{path:u.toString(),status:c});let d=[];if(c==="ok"){const f=[];for(let m=0;m<n.length;m++)n[m].status=2,d=d.concat(lo(t.serverSyncTree_,n[m].currentWriteId)),n[m].onComplete&&f.push(()=>n[m].onComplete(null,!0,n[m].currentOutputSnapshotResolved)),n[m].unwatcher();td(t,n_(t.transactionQueueTree_,e)),i_(t,t.transactionQueueTree_),ks(t.eventQueue_,e,d);for(let m=0;m<f.length;m++)su(f[m])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{dn("transaction at "+u.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}s_(t,e)}},o)}function s_(t,e){const n=RR(t,e),r=au(n),i=AR(t,n);return eU(t,i,r),r}function eU(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const u=e[a],c=In(n,u.path);let d=!1,f;if(K(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),u.status===4)d=!0,f=u.abortReason,i=i.concat(lo(t.serverSyncTree_,u.currentWriteId,!0));else if(u.status===0)if(u.retryCount>=$F)d=!0,f="maxretry",i=i.concat(lo(t.serverSyncTree_,u.currentWriteId,!0));else{const m=CR(t,u.path,o);u.currentInputSnapshot=m;const T=e[a].update(m.val());if(T!==void 0){TR("transaction failed: Data returned ",T,u.path);let R=Bt(T);typeof T=="object"&&T!=null&&Br(T,".priority")||(R=R.updatePriority(m.getPriority()));const P=u.currentWriteId,E=IR(t),v=xF(R,m,E);u.currentOutputSnapshotRaw=R,u.currentOutputSnapshotResolved=v,u.currentWriteId=YF(t),o.splice(o.indexOf(P),1),i=i.concat(IF(t.serverSyncTree_,u.path,v,u.currentWriteId,u.applyLocally)),i=i.concat(lo(t.serverSyncTree_,P,!0))}else d=!0,f="nodata",i=i.concat(lo(t.serverSyncTree_,u.currentWriteId,!0))}ks(t.eventQueue_,n,i),i=[],d&&(e[a].status=2,function(m){setTimeout(m,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}td(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)su(r[a]);i_(t,t.transactionQueueTree_)}function RR(t,e){let n,r=t.transactionQueueTree_;for(n=ve(e);n!==null&&Jo(r)===void 0;)r=n_(r,n),e=Fe(e),n=ve(e);return r}function AR(t,e){const n=[];return kR(t,e,n),n.sort((r,i)=>r.order-i.order),n}function kR(t,e,n){const r=Jo(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);ed(e,i=>{kR(t,i,n)})}function td(t,e){const n=Jo(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,yR(e,n.length>0?n:void 0)}ed(e,r=>{td(t,r)})}function tU(t,e){const n=au(RR(t,e)),r=n_(t.transactionQueueTree_,e);return bF(r,i=>{lf(t,i)}),lf(t,r),wR(r,i=>{lf(t,i)}),n}function lf(t,e){const n=Jo(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(K(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(K(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(lo(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?yR(e,void 0):n.length=s+1,ks(t.eventQueue_,au(e),i);for(let o=0;o<r.length;o++)su(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nU(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function rU(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):dn(`Invalid query segment '${n}' in query '${t}'`)}return e}const uE=function(t,e){const n=iU(t),r=n.namespace;n.domain==="firebase.com"&&ys(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&ys("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||b2();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new H2(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Be(n.pathString)}},iU=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",u=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(d,f)),d<f&&(i=nU(t.substring(d,f)));const m=rU(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",u=parseInt(e.substring(c+1),10)):c=e.length;const T=e.slice(0,c);if(T.toLowerCase()==="localhost")n="localhost";else if(T.split(".").length<=2)n=T;else{const R=e.indexOf(".");r=e.substring(0,R).toLowerCase(),n=e.substring(R+1),s=r}"ns"in m&&(s=m.ns)}return{host:e,port:u,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return _e(this._path)?null:BC(this._path)}get ref(){return new Zo(this._repo,this._path)}get _queryIdentifier(){const e=Gw(this._queryParams),n=jg(e);return n==="{}"?"default":n}get _queryObject(){return Gw(this._queryParams)}isEqual(e){if(e=Ht(e),!(e instanceof o_))return!1;const n=this._repo===e._repo,r=HC(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+gV(this._path)}}class Zo extends o_{constructor(e,n){super(e,n,new qg,!1)}get parent(){const e=WC(this._path);return e===null?null:new Zo(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}EF(Zo);TF(Zo);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sU="FIREBASE_DATABASE_EMULATOR_HOST",Wp={};let oU=!1;function aU(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||ys("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),jt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=uE(s,i),a=o.repoInfo,u;typeof process<"u"&&Pw&&(u=Pw[sU]),u?(s=`http://${u}?ns=${a.namespace}`,o=uE(s,i),a=o.repoInfo):o.repoInfo.secure;const c=new W2(t.name,t.options,e);UF("Invalid Firebase Database URL",o),_e(o.path)||ys("Database URL must point to the root of a Firebase Database (not including a child path).");const d=uU(a,t,c,new z2(t.name,n));return new cU(d,t)}function lU(t,e){const n=Wp[e];(!n||n[t.key]!==t)&&ys(`Database ${e}(${t.repoInfo_}) has already been deleted.`),JF(t),delete n[t.key]}function uU(t,e,n,r){let i=Wp[e.name];i||(i={},Wp[e.name]=i);let s=i[t.toURLString()];return s&&ys("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new qF(t,oU,n,r),i[t.toURLString()]=s,s}class cU{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(KF(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Zo(this._repo,ke())),this._rootInternal}_delete(){return this._rootInternal!==null&&(lU(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ys("Cannot call "+e+" on a deleted database.")}}/**
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
 */function hU(t){A2(Ss),ds(new Ai("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return aU(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),rr(Nw,xw,t),rr(Nw,xw,"esm2017")}Nr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Nr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};hU();function PR(){let[t,e]=F.useState(!1);function n(){const i=new Xn;MI(cr,i),e(!0)}async function r(){try{const i=await VI(cr);if(i){const o=Xn.credentialFromResult(i).accessToken,a=i.user;console.log("User Info:",a)}}catch(i){console.error("Error during sign-in:",i.code,i.message)}}return F.useEffect(()=>{t&&r()},[]),b.jsxs("button",{type:"button",className:"sm:w-1/2 hover:bg-black hover:text-white h-fit flex justify-center items-center py-2 px-2 border border-solid border-lessBlack rounded-md",onClick:n,children:[b.jsx("img",{width:25,height:25,className:"inline-block mr-2",src:R2,alt:"Google Logo"}),b.jsx("span",{children:"Sign in with Google"})]})}async function dU({request:t}){const e=await t.formData(),{username:n,password:r}=Object.fromEntries(e),i=await v2(n);return console.log(i,r),zD(cr,i,r).catch(s=>{const o=s.code,a=s.message;console.log(o,a)}),"success"}function fU(){const t=Nh(),[e,n]=F.useState(!1),[r,i]=F.useState(!1),s=F.useRef(null);console.log(e,r);async function o(a,u){const c=await pC(a,u);n(!c),console.log(c)}return F.useEffect(()=>{lg(cr,a=>{a?t("/"):console.log("user not signed in!")})},[]),b.jsxs("div",{className:"flex flex-col h-dvh items-center justify-center sm:items-start sm:justify-start",children:[b.jsx("header",{className:"sm:px-8 sm:pt-10 sm:text-left text-center",children:b.jsx("h1",{className:"poppins-medium justify-self-start self-start text-fullBlack poppins-medium text-xl md:pb-0",children:"Your Logo"})}),b.jsxs("div",{className:"login flex sm:flex-grow flex-col md:flex-row p-7 justify-center items-center",children:[b.jsx("div",{className:"flex flex-col items-center justify-center md:w-2/5",children:b.jsx("div",{className:"sideImage hidden md:flex",children:b.jsx("img",{src:gC,alt:"A team sharing their notes"})})}),b.jsx("div",{className:"flex flex-col items-center md:justify-center md:items-center w-full md:w-1/2",children:b.jsxs(jT,{method:"post",className:"w-full sm:w-[90%] md:w-4/5",children:[b.jsx("h2",{className:"poppins-semibold text-3xl mb-5",children:"Sign in"}),b.jsxs("div",{className:"userNameField relative mb-8",children:[b.jsx("input",{type:"text",id:"username",name:"username",className:"h-10 py-4 px-2 poppins-regular border border-solid border-lessBlack w-full peer focus:outline-none rounded-md",required:!0,onChange:a=>{a.preventDefault;const u=a.target.getAttribute("id"),c=a.target.value;n(!0),o(u,c)}}),b.jsx("label",{htmlFor:"username",className:`poppins-regular text-bold text-sm transition duration-200 ease-linear absolute left-2 top-2 peer-focus:-translate-y-5 bg-white\r
                            peer-valid:-translate-y-5`,children:"Username"}),e&&b.jsx("div",{className:"text-xs",children:"This username does not exist"})]}),b.jsxs("div",{className:"passwordField relative mb-4",children:[b.jsx("input",{type:"password",id:"password",name:"password",className:"h-10 py-4 px-2 poppins-regular border border-solid border-lessBlack w-full peer focus:outline-none rounded-md",required:!0,ref:s}),b.jsx("label",{htmlFor:"password",className:`poppins-regular text-bold text-sm transition duration-200 ease-linear absolute left-2 top-2 peer-focus:-translate-y-5 bg-white\r
                            peer-valid:-translate-y-5`,children:"Password"}),b.jsx("span",{className:"padLock absolute top-2 right-2",onClick:a=>{i(u=>!u),s.current.type=r?"password":"text"},children:r?b.jsx("i",{className:"fa-sharp fa-solid fa-eye"}):b.jsx("i",{className:"fa-sharp fa-solid fa-eye-slash"})})]}),b.jsxs("div",{className:"loginMetaData flex flex-row items-center justify-between mb-5",children:[b.jsxs("div",{className:"remember flex justify-center items-center",children:[b.jsx("input",{type:"checkbox",name:"rememberMe",id:"rememberMe",defaultChecked:!1,className:"w-5 h-5 accent-fullBlack"})," ",b.jsx("label",{htmlFor:"rememberMe",children:"Remember me"})]}),b.jsx("div",{className:"forgotPassword",children:"Forgot Password?"})]}),b.jsx("div",{className:"loginButton",children:b.jsx("button",{type:"submit",className:"poppins-medium text-white bg-accent-fullBlack w-full py-3 rounded-md hover:bg-accent-lessBlack transition duration-200 ease-linear bg-fullBlack",children:"Login"})}),b.jsxs("div",{className:"federatedIdentity mt-5 flex flex-col sm:flex-row gap-3",children:[b.jsx(PR,{}),b.jsx(_C,{})]}),b.jsx("div",{className:"register flex justify-center items-center mt-5",children:b.jsxs("p",{className:"poppins-light text-gray text-sm",children:["Don't have an Account ?  ",b.jsx(UT,{to:"/signup",className:"poppins-bold text-fullBlack",children:"Register"})]})})]})})]})]})}async function pU({request:t,params:e}){const n=await t.formData();console.log(n),setTimeout(()=>{console.log("10 seconds has passed")},1e4);const r=n.get("username"),i=n.get("email"),s=n.get("password"),o=n.get("confirmPassword");if(console.log(r,i,s,o),r.value!==""&&i.value!==""&&s.length>6&&o===s)try{let a=await _2(i,s);return await y2(r,i,a),console.log(r,i,s),null}catch(a){console.log(a)}}function mU(){const[t,e]=F.useState(!1),[n,r]=F.useState(!1),[i,s]=F.useState(!1),[o,a]=F.useState(!1),u=F.useRef(null),c=F.useRef(null),[d,f]=F.useState(!0),[m,T]=F.useState(!0),R=Nh();F.useEffect(()=>{const P=lg(cr,E=>{E?R("/"):console.log("User is not signed in")});return()=>P()},[]);async function A(P,E,v){P.target,console.log(E,v);const S=await pC(E,v);console.log("crossChecker",S),E==="username"?s(S):E==="email"&&a(S)}return console.log(i,o,m),b.jsxs("div",{className:"flex flex-col h-dvh items-center justify-center sm:items-start sm:justify-start",children:[b.jsx("header",{className:"sm:px-8 sm:pt-10 sm:text-left text-center",children:b.jsx("h1",{className:"poppins-medium justify-self-start self-start text-fullBlack poppins-medium text-xl md:pb-0",children:"Your Logo"})}),b.jsxs("div",{className:"login flex sm:flex-grow flex-col-reverse md:flex-row p-7 justify-center items-center",children:[b.jsx("div",{className:"flex flex-col items-center md:justify-center md:items-center w-full md:w-1/2",children:b.jsxs(jT,{method:"post",className:"w-full sm:w-[90%] md:w-4/5",children:[b.jsx("h2",{className:"poppins-semibold text-3xl mb-5",children:"Sign up!"}),b.jsxs("div",{className:"userNameField relative mb-5",children:[b.jsx("input",{type:"text",id:"username",name:"username",className:"h-10 py-4 px-2 poppins-regular border border-solid border-lessBlack w-full peer focus:outline-none rounded-md text-sm",required:!0,onChange:P=>{s(!0);const E=P.target.getAttribute("id"),v=P.target.value;async function S(){await A(P,E,v)}S(),console.log(i)}}),b.jsx("label",{htmlFor:"username",className:`poppins-regular text-bold text-sm transition duration-200 ease-linear absolute left-2 top-2 peer-focus:-translate-y-5 bg-white\r
                                peer-valid:-translate-y-5`,children:"Username"}),i&&b.jsx("div",{className:"text-xs",children:"This username already exist."})]}),b.jsxs("div",{className:"emailField relative mb-5",children:[b.jsx("input",{type:"email",id:"email",name:"email",className:"h-10 py-4 px-2 poppins-regular border border-solid border-lessBlack w-full peer focus:outline-none rounded-md text-sm",required:!0,onChange:P=>{a(!0);const E=P.target.getAttribute("id"),v=P.target.value;async function S(){await A(P,E,v)}S(),console.log(o)}}),b.jsx("label",{htmlFor:"email",className:`poppins-regular text-bold text-sm transition duration-200 ease-linear absolute left-2 top-2 peer-focus:-translate-y-5 bg-white\r
                                peer-valid:-translate-y-5`,children:"Email"}),o&&b.jsx("div",{className:"text-xs",children:"This email is already in use!"})]}),b.jsxs("div",{className:"passwordField relative mb-5",children:[b.jsx("input",{type:"password",id:"password",name:"password",className:"h-10 py-4 px-2 poppins-regular border border-solid border-lessBlack w-full peer focus:outline-none rounded-md text-sm",required:!0,ref:u,onChange:P=>{f(!1),P.target.value.length>6&&f(!0)}}),b.jsx("label",{htmlFor:"password",className:`poppins-regular text-bold text-sm transition duration-200 ease-linear absolute left-2 top-2 peer-focus:-translate-y-5 bg-white\r
                                peer-valid:-translate-y-5`,children:"Password"}),b.jsx("span",{className:"padLock absolute top-2 right-2",onClick:P=>{e(E=>!E),u.current.type=t?"password":"text"},children:t?b.jsx("i",{className:"fa-sharp fa-solid fa-eye"}):b.jsx("i",{className:"fa-sharp fa-solid fa-eye-slash"})}),!d&&b.jsx("div",{className:"text-xs",children:"Pasword length must be greater than 6."})]}),b.jsxs("div",{className:"confirmPasswordField relative mb-5",children:[b.jsx("input",{type:"password",id:"confirmPassword",name:"confirmPassword",className:"h-10 py-4 px-2 poppins-regular border border-solid border-lessBlack w-full peer focus:outline-none rounded-md text-sm",required:!0,ref:c,onChange:P=>{T(!1),P.target.value.length>6&&P.target.value===u.current.value&&T(!0)}}),b.jsx("label",{htmlFor:"confirmPassword",className:`poppins-regular text-bold text-sm transition duration-200 ease-linear absolute left-2 top-2 peer-focus:-translate-y-5 bg-white\r
                                peer-valid:-translate-y-5`,children:"Confirm Password"}),b.jsx("span",{className:"padLock absolute top-2 right-2",onClick:P=>{r(E=>!E),c.current.type=n?"password":"text"},children:n?b.jsx("i",{className:"fa-sharp fa-solid fa-eye"}):b.jsx("i",{className:"fa-sharp fa-solid fa-eye-slash"})}),!m&&b.jsx("div",{className:"peer mt-2 text-xs",children:"The value of the password field should be equal to the confirm password field."})]}),b.jsx("div",{className:"signUpButton",children:b.jsx("button",{type:"submit",disabled:i||o||!m,className:"poppins-medium text-white bg-accent-fullBlack w-full py-3 rounded-md hover:bg-accent-lessBlack transition duration-200 ease-linear bg-fullBlack",children:"Register"})}),b.jsxs("div",{className:"federatedIdentity mt-5 flex flex-col sm:flex-row gap-3",children:[b.jsx(PR,{}),b.jsx(_C,{})]}),b.jsx("div",{className:"register flex justify-center items-center mt-5",children:b.jsxs("p",{className:"poppins-light text-gray text-sm",children:["Already have an Account ?  ",b.jsx(UT,{to:"..",relative:"path",className:"poppins-bold text-fullBlack",children:"Login"})]})})]})}),b.jsx("div",{className:"flex flex-col items-center justify-center md:w-1/2",children:b.jsx("div",{className:"sideImage hidden md:flex",children:b.jsx("img",{src:gC,alt:"A team sharing their notes"})})})]})]})}const gU=$P([{path:"/",element:b.jsx(I2,{}),errorElement:b.jsx("h1",{children:"404 Not Found"}),loader:mC},{path:"login",element:b.jsx(fU,{}),action:dU},{path:"signup",element:b.jsx(mU,{}),action:pU},{path:"notesApp",element:b.jsx("div",{children:b.jsx("h1",{children:"NotesApp"})})}]);uf.createRoot(document.getElementById("root")).render(b.jsx(_U,{}));function _U(){return b.jsx(TE.StrictMode,{children:b.jsx(eN,{router:gU})})}
