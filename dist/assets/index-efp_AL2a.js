(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function Fm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var xu={exports:{}},Aa={},vu={exports:{}},pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tp;function nx(){if(Tp)return pt;Tp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),_=Symbol.iterator;function y(U){return U===null||typeof U!="object"?null:(U=_&&U[_]||U["@@iterator"],typeof U=="function"?U:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,C={};function E(U,ie,De){this.props=U,this.context=ie,this.refs=C,this.updater=De||S}E.prototype.isReactComponent={},E.prototype.setState=function(U,ie){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,ie,"setState")},E.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function v(){}v.prototype=E.prototype;function L(U,ie,De){this.props=U,this.context=ie,this.refs=C,this.updater=De||S}var P=L.prototype=new v;P.constructor=L,T(P,E.prototype),P.isPureReactComponent=!0;var N=Array.isArray,G=Object.prototype.hasOwnProperty,O={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function k(U,ie,De){var J,pe={},Se=null,_e=null;if(ie!=null)for(J in ie.ref!==void 0&&(_e=ie.ref),ie.key!==void 0&&(Se=""+ie.key),ie)G.call(ie,J)&&!D.hasOwnProperty(J)&&(pe[J]=ie[J]);var Te=arguments.length-2;if(Te===1)pe.children=De;else if(1<Te){for(var $e=Array(Te),je=0;je<Te;je++)$e[je]=arguments[je+2];pe.children=$e}if(U&&U.defaultProps)for(J in Te=U.defaultProps,Te)pe[J]===void 0&&(pe[J]=Te[J]);return{$$typeof:s,type:U,key:Se,ref:_e,props:pe,_owner:O.current}}function R(U,ie){return{$$typeof:s,type:U.type,key:ie,ref:U.ref,props:U.props,_owner:U._owner}}function b(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function z(U){var ie={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(De){return ie[De]})}var re=/\/+/g;function te(U,ie){return typeof U=="object"&&U!==null&&U.key!=null?z(""+U.key):ie.toString(36)}function ue(U,ie,De,J,pe){var Se=typeof U;(Se==="undefined"||Se==="boolean")&&(U=null);var _e=!1;if(U===null)_e=!0;else switch(Se){case"string":case"number":_e=!0;break;case"object":switch(U.$$typeof){case s:case e:_e=!0}}if(_e)return _e=U,pe=pe(_e),U=J===""?"."+te(_e,0):J,N(pe)?(De="",U!=null&&(De=U.replace(re,"$&/")+"/"),ue(pe,ie,De,"",function(je){return je})):pe!=null&&(b(pe)&&(pe=R(pe,De+(!pe.key||_e&&_e.key===pe.key?"":(""+pe.key).replace(re,"$&/")+"/")+U)),ie.push(pe)),1;if(_e=0,J=J===""?".":J+":",N(U))for(var Te=0;Te<U.length;Te++){Se=U[Te];var $e=J+te(Se,Te);_e+=ue(Se,ie,De,$e,pe)}else if($e=y(U),typeof $e=="function")for(U=$e.call(U),Te=0;!(Se=U.next()).done;)Se=Se.value,$e=J+te(Se,Te++),_e+=ue(Se,ie,De,$e,pe);else if(Se==="object")throw ie=String(U),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.");return _e}function fe(U,ie,De){if(U==null)return U;var J=[],pe=0;return ue(U,J,"","",function(Se){return ie.call(De,Se,pe++)}),J}function se(U){if(U._status===-1){var ie=U._result;ie=ie(),ie.then(function(De){(U._status===0||U._status===-1)&&(U._status=1,U._result=De)},function(De){(U._status===0||U._status===-1)&&(U._status=2,U._result=De)}),U._status===-1&&(U._status=0,U._result=ie)}if(U._status===1)return U._result.default;throw U._result}var oe={current:null},V={transition:null},ce={ReactCurrentDispatcher:oe,ReactCurrentBatchConfig:V,ReactCurrentOwner:O};function le(){throw Error("act(...) is not supported in production builds of React.")}return pt.Children={map:fe,forEach:function(U,ie,De){fe(U,function(){ie.apply(this,arguments)},De)},count:function(U){var ie=0;return fe(U,function(){ie++}),ie},toArray:function(U){return fe(U,function(ie){return ie})||[]},only:function(U){if(!b(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},pt.Component=E,pt.Fragment=n,pt.Profiler=o,pt.PureComponent=L,pt.StrictMode=r,pt.Suspense=m,pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,pt.act=le,pt.cloneElement=function(U,ie,De){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var J=T({},U.props),pe=U.key,Se=U.ref,_e=U._owner;if(ie!=null){if(ie.ref!==void 0&&(Se=ie.ref,_e=O.current),ie.key!==void 0&&(pe=""+ie.key),U.type&&U.type.defaultProps)var Te=U.type.defaultProps;for($e in ie)G.call(ie,$e)&&!D.hasOwnProperty($e)&&(J[$e]=ie[$e]===void 0&&Te!==void 0?Te[$e]:ie[$e])}var $e=arguments.length-2;if($e===1)J.children=De;else if(1<$e){Te=Array($e);for(var je=0;je<$e;je++)Te[je]=arguments[je+2];J.children=Te}return{$$typeof:s,type:U.type,key:pe,ref:Se,props:J,_owner:_e}},pt.createContext=function(U){return U={$$typeof:u,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:l,_context:U},U.Consumer=U},pt.createElement=k,pt.createFactory=function(U){var ie=k.bind(null,U);return ie.type=U,ie},pt.createRef=function(){return{current:null}},pt.forwardRef=function(U){return{$$typeof:f,render:U}},pt.isValidElement=b,pt.lazy=function(U){return{$$typeof:x,_payload:{_status:-1,_result:U},_init:se}},pt.memo=function(U,ie){return{$$typeof:g,type:U,compare:ie===void 0?null:ie}},pt.startTransition=function(U){var ie=V.transition;V.transition={};try{U()}finally{V.transition=ie}},pt.unstable_act=le,pt.useCallback=function(U,ie){return oe.current.useCallback(U,ie)},pt.useContext=function(U){return oe.current.useContext(U)},pt.useDebugValue=function(){},pt.useDeferredValue=function(U){return oe.current.useDeferredValue(U)},pt.useEffect=function(U,ie){return oe.current.useEffect(U,ie)},pt.useId=function(){return oe.current.useId()},pt.useImperativeHandle=function(U,ie,De){return oe.current.useImperativeHandle(U,ie,De)},pt.useInsertionEffect=function(U,ie){return oe.current.useInsertionEffect(U,ie)},pt.useLayoutEffect=function(U,ie){return oe.current.useLayoutEffect(U,ie)},pt.useMemo=function(U,ie){return oe.current.useMemo(U,ie)},pt.useReducer=function(U,ie,De){return oe.current.useReducer(U,ie,De)},pt.useRef=function(U){return oe.current.useRef(U)},pt.useState=function(U){return oe.current.useState(U)},pt.useSyncExternalStore=function(U,ie,De){return oe.current.useSyncExternalStore(U,ie,De)},pt.useTransition=function(){return oe.current.useTransition()},pt.version="18.3.1",pt}var bp;function Vd(){return bp||(bp=1,vu.exports=nx()),vu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ap;function ix(){if(Ap)return Aa;Ap=1;var s=Vd(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,m,g){var x,_={},y=null,S=null;g!==void 0&&(y=""+g),m.key!==void 0&&(y=""+m.key),m.ref!==void 0&&(S=m.ref);for(x in m)r.call(m,x)&&!l.hasOwnProperty(x)&&(_[x]=m[x]);if(f&&f.defaultProps)for(x in m=f.defaultProps,m)_[x]===void 0&&(_[x]=m[x]);return{$$typeof:e,type:f,key:y,ref:S,props:_,_owner:o.current}}return Aa.Fragment=n,Aa.jsx=u,Aa.jsxs=u,Aa}var Cp;function rx(){return Cp||(Cp=1,xu.exports=ix()),xu.exports}var h=rx(),it=Vd();const sx=Fm(it);var Jo={},_u={exports:{}},Pn={},yu={exports:{}},Eu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rp;function ax(){return Rp||(Rp=1,(function(s){function e(V,ce){var le=V.length;V.push(ce);e:for(;0<le;){var U=le-1>>>1,ie=V[U];if(0<o(ie,ce))V[U]=ce,V[le]=ie,le=U;else break e}}function n(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var ce=V[0],le=V.pop();if(le!==ce){V[0]=le;e:for(var U=0,ie=V.length,De=ie>>>1;U<De;){var J=2*(U+1)-1,pe=V[J],Se=J+1,_e=V[Se];if(0>o(pe,le))Se<ie&&0>o(_e,pe)?(V[U]=_e,V[Se]=le,U=Se):(V[U]=pe,V[J]=le,U=J);else if(Se<ie&&0>o(_e,le))V[U]=_e,V[Se]=le,U=Se;else break e}}return ce}function o(V,ce){var le=V.sortIndex-ce.sortIndex;return le!==0?le:V.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var m=[],g=[],x=1,_=null,y=3,S=!1,T=!1,C=!1,E=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(V){for(var ce=n(g);ce!==null;){if(ce.callback===null)r(g);else if(ce.startTime<=V)r(g),ce.sortIndex=ce.expirationTime,e(m,ce);else break;ce=n(g)}}function N(V){if(C=!1,P(V),!T)if(n(m)!==null)T=!0,se(G);else{var ce=n(g);ce!==null&&oe(N,ce.startTime-V)}}function G(V,ce){T=!1,C&&(C=!1,v(k),k=-1),S=!0;var le=y;try{for(P(ce),_=n(m);_!==null&&(!(_.expirationTime>ce)||V&&!z());){var U=_.callback;if(typeof U=="function"){_.callback=null,y=_.priorityLevel;var ie=U(_.expirationTime<=ce);ce=s.unstable_now(),typeof ie=="function"?_.callback=ie:_===n(m)&&r(m),P(ce)}else r(m);_=n(m)}if(_!==null)var De=!0;else{var J=n(g);J!==null&&oe(N,J.startTime-ce),De=!1}return De}finally{_=null,y=le,S=!1}}var O=!1,D=null,k=-1,R=5,b=-1;function z(){return!(s.unstable_now()-b<R)}function re(){if(D!==null){var V=s.unstable_now();b=V;var ce=!0;try{ce=D(!0,V)}finally{ce?te():(O=!1,D=null)}}else O=!1}var te;if(typeof L=="function")te=function(){L(re)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,fe=ue.port2;ue.port1.onmessage=re,te=function(){fe.postMessage(null)}}else te=function(){E(re,0)};function se(V){D=V,O||(O=!0,te())}function oe(V,ce){k=E(function(){V(s.unstable_now())},ce)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(V){V.callback=null},s.unstable_continueExecution=function(){T||S||(T=!0,se(G))},s.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<V?Math.floor(1e3/V):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_getFirstCallbackNode=function(){return n(m)},s.unstable_next=function(V){switch(y){case 1:case 2:case 3:var ce=3;break;default:ce=y}var le=y;y=ce;try{return V()}finally{y=le}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(V,ce){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var le=y;y=V;try{return ce()}finally{y=le}},s.unstable_scheduleCallback=function(V,ce,le){var U=s.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?U+le:U):le=U,V){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=le+ie,V={id:x++,callback:ce,priorityLevel:V,startTime:le,expirationTime:ie,sortIndex:-1},le>U?(V.sortIndex=le,e(g,V),n(m)===null&&V===n(g)&&(C?(v(k),k=-1):C=!0,oe(N,le-U))):(V.sortIndex=ie,e(m,V),T||S||(T=!0,se(G))),V},s.unstable_shouldYield=z,s.unstable_wrapCallback=function(V){var ce=y;return function(){var le=y;y=ce;try{return V.apply(this,arguments)}finally{y=le}}}})(Eu)),Eu}var Np;function ox(){return Np||(Np=1,yu.exports=ax()),yu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pp;function lx(){if(Pp)return Pn;Pp=1;var s=Vd(),e=ox();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(t,i){u(t,i),u(t+"Capture",i)}function u(t,i){for(o[t]=i,t=0;t<i.length;t++)r.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},_={};function y(t){return m.call(_,t)?!0:m.call(x,t)?!1:g.test(t)?_[t]=!0:(x[t]=!0,!1)}function S(t,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T(t,i,a,c){if(i===null||typeof i>"u"||S(t,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function C(t,i,a,c,d,p,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=t,this.type=i,this.sanitizeURL=p,this.removeEmptyString=M}var E={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){E[t]=new C(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];E[i]=new C(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){E[t]=new C(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){E[t]=new C(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){E[t]=new C(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){E[t]=new C(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){E[t]=new C(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){E[t]=new C(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){E[t]=new C(t,5,!1,t.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function L(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(v,L);E[i]=new C(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(v,L);E[i]=new C(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(v,L);E[i]=new C(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){E[t]=new C(t,1,!1,t.toLowerCase(),null,!1,!1)}),E.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){E[t]=new C(t,1,!1,t.toLowerCase(),null,!0,!0)});function P(t,i,a,c){var d=E.hasOwnProperty(i)?E[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,a,d,c)&&(a=null),c||d===null?y(i)&&(a===null?t.removeAttribute(i):t.setAttribute(i,""+a)):d.mustUseProperty?t[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?t.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?t.setAttributeNS(c,i,a):t.setAttribute(i,a))))}var N=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,G=Symbol.for("react.element"),O=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),z=Symbol.for("react.context"),re=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),fe=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),oe=Symbol.for("react.offscreen"),V=Symbol.iterator;function ce(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var le=Object.assign,U;function ie(t){if(U===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+t}var De=!1;function J(t,i){if(!t||De)return"";De=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ne){var c=ne}Reflect.construct(t,[],i)}else{try{i.call()}catch(ne){c=ne}t.call(i.prototype)}else{try{throw Error()}catch(ne){c=ne}t()}}catch(ne){if(ne&&c&&typeof ne.stack=="string"){for(var d=ne.stack.split(`
`),p=c.stack.split(`
`),M=d.length-1,I=p.length-1;1<=M&&0<=I&&d[M]!==p[I];)I--;for(;1<=M&&0<=I;M--,I--)if(d[M]!==p[I]){if(M!==1||I!==1)do if(M--,I--,0>I||d[M]!==p[I]){var B=`
`+d[M].replace(" at new "," at ");return t.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",t.displayName)),B}while(1<=M&&0<=I);break}}}finally{De=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?ie(t):""}function pe(t){switch(t.tag){case 5:return ie(t.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 2:case 15:return t=J(t.type,!1),t;case 11:return t=J(t.type.render,!1),t;case 1:return t=J(t.type,!0),t;default:return""}}function Se(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case D:return"Fragment";case O:return"Portal";case R:return"Profiler";case k:return"StrictMode";case te:return"Suspense";case ue:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case z:return(t.displayName||"Context")+".Consumer";case b:return(t._context.displayName||"Context")+".Provider";case re:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case fe:return i=t.displayName||null,i!==null?i:Se(t.type)||"Memo";case se:i=t._payload,t=t._init;try{return Se(t(i))}catch{}}return null}function _e(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Se(i);case 8:return i===k?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Te(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function $e(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function je(t){var i=$e(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),c=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(M){c=""+M,p.call(this,M)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(M){c=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Pt(t){t._valueTracker||(t._valueTracker=je(t))}function Ft(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return t&&(c=$e(t)?t.checked?"true":"false":t.value),t=c,t!==a?(i.setValue(t),!0):!1}function ut(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function H(t,i){var a=i.checked;return le({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function vn(t,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Te(i.value!=null?i.value:a),t._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function mt(t,i){i=i.checked,i!=null&&P(t,"checked",i,!1)}function ft(t,i){mt(t,i);var a=Te(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(c==="submit"||c==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?At(t,i.type,a):i.hasOwnProperty("defaultValue")&&At(t,i.type,Te(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Ye(t,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,a||i===t.value||(t.value=i),t.defaultValue=i}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function At(t,i,a){(i!=="number"||ut(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var Ge=Array.isArray;function F(t,i,a,c){if(t=t.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<t.length;a++)d=i.hasOwnProperty("$"+t[a].value),t[a].selected!==d&&(t[a].selected=d),d&&c&&(t[a].defaultSelected=!0)}else{for(a=""+Te(a),i=null,d=0;d<t.length;d++){if(t[d].value===a){t[d].selected=!0,c&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function w(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return le({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Z(t,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(n(92));if(Ge(a)){if(1<a.length)throw Error(n(93));a=a[0]}i=a}i==null&&(i=""),a=i}t._wrapperState={initialValue:Te(a)}}function me(t,i){var a=Te(i.value),c=Te(i.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),i.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),c!=null&&(t.defaultValue=""+c)}function xe(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function de(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function We(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?de(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var be,Ie=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return t(i,a,c,d)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(be=be||document.createElement("div"),be.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=be.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function dt(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ke=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(t){ke.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Me[i]=Me[t]})});function Ke(t,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Me.hasOwnProperty(t)&&Me[t]?(""+i).trim():i+"px"}function et(t,i){t=t.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Ke(a,i[a],c);a==="float"&&(a="cssFloat"),c?t.setProperty(a,d):t[a]=d}}var Oe=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ht(t,i){if(i){if(Oe[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function rt(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tt=null;function W(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ae=null,ae=null,he=null;function Pe(t){if(t=fa(t)){if(typeof Ae!="function")throw Error(n(280));var i=t.stateNode;i&&(i=po(i),Ae(t.stateNode,t.type,i))}}function Ne(t){ae?he?he.push(t):he=[t]:ae=t}function st(){if(ae){var t=ae,i=he;if(he=ae=null,Pe(t),i)for(t=0;t<i.length;t++)Pe(i[t])}}function Dt(t,i){return t(i)}function qt(){}var yt=!1;function Tn(t,i,a){if(yt)return t(i,a);yt=!0;try{return Dt(t,i,a)}finally{yt=!1,(ae!==null||he!==null)&&(qt(),st())}}function _n(t,i){var a=t.stateNode;if(a===null)return null;var c=po(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(n(231,i,typeof a));return a}var Qr=!1;if(f)try{var Gi={};Object.defineProperty(Gi,"passive",{get:function(){Qr=!0}}),window.addEventListener("test",Gi,Gi),window.removeEventListener("test",Gi,Gi)}catch{Qr=!1}function Ei(t,i,a,c,d,p,M,I,B){var ne=Array.prototype.slice.call(arguments,3);try{i.apply(a,ne)}catch(ve){this.onError(ve)}}var Si=!1,Mr=null,wr=!1,Wi=null,Wa={onError:function(t){Si=!0,Mr=t}};function Jr(t,i,a,c,d,p,M,I,B){Si=!1,Mr=null,Ei.apply(Wa,arguments)}function Xa(t,i,a,c,d,p,M,I,B){if(Jr.apply(this,arguments),Si){if(Si){var ne=Mr;Si=!1,Mr=null}else throw Error(n(198));wr||(wr=!0,Wi=ne)}}function hi(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function $a(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Ya(t){if(hi(t)!==t)throw Error(n(188))}function Bl(t){var i=t.alternate;if(!i){if(i=hi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var a=t,c=i;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return Ya(d),t;if(p===c)return Ya(d),i;p=p.sibling}throw Error(n(188))}if(a.return!==c.return)a=d,c=p;else{for(var M=!1,I=d.child;I;){if(I===a){M=!0,a=d,c=p;break}if(I===c){M=!0,c=d,a=p;break}I=I.sibling}if(!M){for(I=p.child;I;){if(I===a){M=!0,a=p,c=d;break}if(I===c){M=!0,c=p,a=d;break}I=I.sibling}if(!M)throw Error(n(189))}}if(a.alternate!==c)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?t:i}function qa(t){return t=Bl(t),t!==null?Ka(t):null}function Ka(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=Ka(t);if(i!==null)return i;t=t.sibling}return null}var Za=e.unstable_scheduleCallback,A=e.unstable_cancelCallback,X=e.unstable_shouldYield,ee=e.unstable_requestPaint,q=e.unstable_now,$=e.unstable_getCurrentPriorityLevel,Ee=e.unstable_ImmediatePriority,Ce=e.unstable_UserBlockingPriority,Fe=e.unstable_NormalPriority,ze=e.unstable_LowPriority,tt=e.unstable_IdlePriority,Je=null,He=null;function xt(t){if(He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(Je,t,void 0,(t.current.flags&128)===128)}catch{}}var at=Math.clz32?Math.clz32:_t,Ht=Math.log,kt=Math.LN2;function _t(t){return t>>>=0,t===0?32:31-(Ht(t)/kt|0)|0}var qe=64,Vt=4194304;function gt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function un(t,i){var a=t.pendingLanes;if(a===0)return 0;var c=0,d=t.suspendedLanes,p=t.pingedLanes,M=a&268435455;if(M!==0){var I=M&~d;I!==0?c=gt(I):(p&=M,p!==0&&(c=gt(p)))}else M=a&~d,M!==0?c=gt(M):p!==0&&(c=gt(p));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,p=i&-i,d>=p||d===16&&(p&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=c;0<i;)a=31-at(i),d=1<<a,c|=t[a],i&=~d;return c}function Xi(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yn(t,i){for(var a=t.suspendedLanes,c=t.pingedLanes,d=t.expirationTimes,p=t.pendingLanes;0<p;){var M=31-at(p),I=1<<M,B=d[M];B===-1?((I&a)===0||(I&c)!==0)&&(d[M]=Xi(I,i)):B<=i&&(t.expiredLanes|=I),p&=~I}}function Mi(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Nt(){var t=qe;return qe<<=1,(qe&4194240)===0&&(qe=64),t}function dn(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function en(t,i,a){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-at(i),t[i]=a}function on(t,i){var a=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var c=t.eventTimes;for(t=t.expirationTimes;0<a;){var d=31-at(a),p=1<<d;i[d]=0,c[d]=-1,t[d]=-1,a&=~p}}function tn(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var c=31-at(a),d=1<<c;d&i|t[c]&i&&(t[c]|=i),a&=~d}}var Et=0;function pi(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var rf,Hl,sf,af,of,Vl=!1,Qa=[],$i=null,Yi=null,qi=null,Ks=new Map,Zs=new Map,Ki=[],wg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function lf(t,i){switch(t){case"focusin":case"focusout":$i=null;break;case"dragenter":case"dragleave":Yi=null;break;case"mouseover":case"mouseout":qi=null;break;case"pointerover":case"pointerout":Ks.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zs.delete(i.pointerId)}}function Qs(t,i,a,c,d,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},i!==null&&(i=fa(i),i!==null&&Hl(i)),t):(t.eventSystemFlags|=c,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function Tg(t,i,a,c,d){switch(i){case"focusin":return $i=Qs($i,t,i,a,c,d),!0;case"dragenter":return Yi=Qs(Yi,t,i,a,c,d),!0;case"mouseover":return qi=Qs(qi,t,i,a,c,d),!0;case"pointerover":var p=d.pointerId;return Ks.set(p,Qs(Ks.get(p)||null,t,i,a,c,d)),!0;case"gotpointercapture":return p=d.pointerId,Zs.set(p,Qs(Zs.get(p)||null,t,i,a,c,d)),!0}return!1}function cf(t){var i=Tr(t.target);if(i!==null){var a=hi(i);if(a!==null){if(i=a.tag,i===13){if(i=$a(a),i!==null){t.blockedOn=i,of(t.priority,function(){sf(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ja(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=Gl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var c=new a.constructor(a.type,a);Tt=c,a.target.dispatchEvent(c),Tt=null}else return i=fa(a),i!==null&&Hl(i),t.blockedOn=a,!1;i.shift()}return!0}function uf(t,i,a){Ja(t)&&a.delete(i)}function bg(){Vl=!1,$i!==null&&Ja($i)&&($i=null),Yi!==null&&Ja(Yi)&&(Yi=null),qi!==null&&Ja(qi)&&(qi=null),Ks.forEach(uf),Zs.forEach(uf)}function Js(t,i){t.blockedOn===i&&(t.blockedOn=null,Vl||(Vl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,bg)))}function ea(t){function i(d){return Js(d,t)}if(0<Qa.length){Js(Qa[0],t);for(var a=1;a<Qa.length;a++){var c=Qa[a];c.blockedOn===t&&(c.blockedOn=null)}}for($i!==null&&Js($i,t),Yi!==null&&Js(Yi,t),qi!==null&&Js(qi,t),Ks.forEach(i),Zs.forEach(i),a=0;a<Ki.length;a++)c=Ki[a],c.blockedOn===t&&(c.blockedOn=null);for(;0<Ki.length&&(a=Ki[0],a.blockedOn===null);)cf(a),a.blockedOn===null&&Ki.shift()}var es=N.ReactCurrentBatchConfig,eo=!0;function Ag(t,i,a,c){var d=Et,p=es.transition;es.transition=null;try{Et=1,jl(t,i,a,c)}finally{Et=d,es.transition=p}}function Cg(t,i,a,c){var d=Et,p=es.transition;es.transition=null;try{Et=4,jl(t,i,a,c)}finally{Et=d,es.transition=p}}function jl(t,i,a,c){if(eo){var d=Gl(t,i,a,c);if(d===null)oc(t,i,c,to,a),lf(t,c);else if(Tg(d,t,i,a,c))c.stopPropagation();else if(lf(t,c),i&4&&-1<wg.indexOf(t)){for(;d!==null;){var p=fa(d);if(p!==null&&rf(p),p=Gl(t,i,a,c),p===null&&oc(t,i,c,to,a),p===d)break;d=p}d!==null&&c.stopPropagation()}else oc(t,i,c,null,a)}}var to=null;function Gl(t,i,a,c){if(to=null,t=W(c),t=Tr(t),t!==null)if(i=hi(t),i===null)t=null;else if(a=i.tag,a===13){if(t=$a(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return to=t,null}function df(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($()){case Ee:return 1;case Ce:return 4;case Fe:case ze:return 16;case tt:return 536870912;default:return 16}default:return 16}}var Zi=null,Wl=null,no=null;function ff(){if(no)return no;var t,i=Wl,a=i.length,c,d="value"in Zi?Zi.value:Zi.textContent,p=d.length;for(t=0;t<a&&i[t]===d[t];t++);var M=a-t;for(c=1;c<=M&&i[a-c]===d[p-c];c++);return no=d.slice(t,1<c?1-c:void 0)}function io(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ro(){return!0}function hf(){return!1}function Un(t){function i(a,c,d,p,M){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=M,this.currentTarget=null;for(var I in t)t.hasOwnProperty(I)&&(a=t[I],this[I]=a?a(p):p[I]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?ro:hf,this.isPropagationStopped=hf,this}return le(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ro)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ro)},persist:function(){},isPersistent:ro}),i}var ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xl=Un(ts),ta=le({},ts,{view:0,detail:0}),Rg=Un(ta),$l,Yl,na,so=le({},ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==na&&(na&&t.type==="mousemove"?($l=t.screenX-na.screenX,Yl=t.screenY-na.screenY):Yl=$l=0,na=t),$l)},movementY:function(t){return"movementY"in t?t.movementY:Yl}}),pf=Un(so),Ng=le({},so,{dataTransfer:0}),Pg=Un(Ng),Fg=le({},ta,{relatedTarget:0}),ql=Un(Fg),Lg=le({},ts,{animationName:0,elapsedTime:0,pseudoElement:0}),Dg=Un(Lg),Ig=le({},ts,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ug=Un(Ig),kg=le({},ts,{data:0}),mf=Un(kg),Og={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Bg[t])?!!i[t]:!1}function Kl(){return Hg}var Vg=le({},ta,{key:function(t){if(t.key){var i=Og[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=io(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?zg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kl,charCode:function(t){return t.type==="keypress"?io(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?io(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),jg=Un(Vg),Gg=le({},so,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gf=Un(Gg),Wg=le({},ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kl}),Xg=Un(Wg),$g=le({},ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yg=Un($g),qg=le({},so,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Kg=Un(qg),Zg=[9,13,27,32],Zl=f&&"CompositionEvent"in window,ia=null;f&&"documentMode"in document&&(ia=document.documentMode);var Qg=f&&"TextEvent"in window&&!ia,xf=f&&(!Zl||ia&&8<ia&&11>=ia),vf=" ",_f=!1;function yf(t,i){switch(t){case"keyup":return Zg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ef(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ns=!1;function Jg(t,i){switch(t){case"compositionend":return Ef(i);case"keypress":return i.which!==32?null:(_f=!0,vf);case"textInput":return t=i.data,t===vf&&_f?null:t;default:return null}}function e0(t,i){if(ns)return t==="compositionend"||!Zl&&yf(t,i)?(t=ff(),no=Wl=Zi=null,ns=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return xf&&i.locale!=="ko"?null:i.data;default:return null}}var t0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!t0[t.type]:i==="textarea"}function Mf(t,i,a,c){Ne(c),i=uo(i,"onChange"),0<i.length&&(a=new Xl("onChange","change",null,a,c),t.push({event:a,listeners:i}))}var ra=null,sa=null;function n0(t){Hf(t,0)}function ao(t){var i=os(t);if(Ft(i))return t}function i0(t,i){if(t==="change")return i}var wf=!1;if(f){var Ql;if(f){var Jl="oninput"in document;if(!Jl){var Tf=document.createElement("div");Tf.setAttribute("oninput","return;"),Jl=typeof Tf.oninput=="function"}Ql=Jl}else Ql=!1;wf=Ql&&(!document.documentMode||9<document.documentMode)}function bf(){ra&&(ra.detachEvent("onpropertychange",Af),sa=ra=null)}function Af(t){if(t.propertyName==="value"&&ao(sa)){var i=[];Mf(i,sa,t,W(t)),Tn(n0,i)}}function r0(t,i,a){t==="focusin"?(bf(),ra=i,sa=a,ra.attachEvent("onpropertychange",Af)):t==="focusout"&&bf()}function s0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ao(sa)}function a0(t,i){if(t==="click")return ao(i)}function o0(t,i){if(t==="input"||t==="change")return ao(i)}function l0(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Jn=typeof Object.is=="function"?Object.is:l0;function aa(t,i){if(Jn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!m.call(i,d)||!Jn(t[d],i[d]))return!1}return!0}function Cf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Rf(t,i){var a=Cf(t);t=0;for(var c;a;){if(a.nodeType===3){if(c=t+a.textContent.length,t<=i&&c>=i)return{node:a,offset:i-t};t=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Cf(a)}}function Nf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Nf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Pf(){for(var t=window,i=ut();i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=ut(t.document)}return i}function ec(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function c0(t){var i=Pf(),a=t.focusedElem,c=t.selectionRange;if(i!==a&&a&&a.ownerDocument&&Nf(a.ownerDocument.documentElement,a)){if(c!==null&&ec(a)){if(i=c.start,t=c.end,t===void 0&&(t=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(t,a.value.length);else if(t=(i=a.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var d=a.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!t.extend&&p>c&&(d=c,c=p,p=d),d=Rf(a,p);var M=Rf(a,c);d&&M&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),t.removeAllRanges(),p>c?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=a;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)t=i[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var u0=f&&"documentMode"in document&&11>=document.documentMode,is=null,tc=null,oa=null,nc=!1;function Ff(t,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;nc||is==null||is!==ut(c)||(c=is,"selectionStart"in c&&ec(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),oa&&aa(oa,c)||(oa=c,c=uo(tc,"onSelect"),0<c.length&&(i=new Xl("onSelect","select",null,i,a),t.push({event:i,listeners:c}),i.target=is)))}function oo(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var rs={animationend:oo("Animation","AnimationEnd"),animationiteration:oo("Animation","AnimationIteration"),animationstart:oo("Animation","AnimationStart"),transitionend:oo("Transition","TransitionEnd")},ic={},Lf={};f&&(Lf=document.createElement("div").style,"AnimationEvent"in window||(delete rs.animationend.animation,delete rs.animationiteration.animation,delete rs.animationstart.animation),"TransitionEvent"in window||delete rs.transitionend.transition);function lo(t){if(ic[t])return ic[t];if(!rs[t])return t;var i=rs[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in Lf)return ic[t]=i[a];return t}var Df=lo("animationend"),If=lo("animationiteration"),Uf=lo("animationstart"),kf=lo("transitionend"),Of=new Map,zf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qi(t,i){Of.set(t,i),l(i,[t])}for(var rc=0;rc<zf.length;rc++){var sc=zf[rc],d0=sc.toLowerCase(),f0=sc[0].toUpperCase()+sc.slice(1);Qi(d0,"on"+f0)}Qi(Df,"onAnimationEnd"),Qi(If,"onAnimationIteration"),Qi(Uf,"onAnimationStart"),Qi("dblclick","onDoubleClick"),Qi("focusin","onFocus"),Qi("focusout","onBlur"),Qi(kf,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var la="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),h0=new Set("cancel close invalid load scroll toggle".split(" ").concat(la));function Bf(t,i,a){var c=t.type||"unknown-event";t.currentTarget=a,Xa(c,i,void 0,t),t.currentTarget=null}function Hf(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var c=t[a],d=c.event;c=c.listeners;e:{var p=void 0;if(i)for(var M=c.length-1;0<=M;M--){var I=c[M],B=I.instance,ne=I.currentTarget;if(I=I.listener,B!==p&&d.isPropagationStopped())break e;Bf(d,I,ne),p=B}else for(M=0;M<c.length;M++){if(I=c[M],B=I.instance,ne=I.currentTarget,I=I.listener,B!==p&&d.isPropagationStopped())break e;Bf(d,I,ne),p=B}}}if(wr)throw t=Wi,wr=!1,Wi=null,t}function It(t,i){var a=i[hc];a===void 0&&(a=i[hc]=new Set);var c=t+"__bubble";a.has(c)||(Vf(i,t,2,!1),a.add(c))}function ac(t,i,a){var c=0;i&&(c|=4),Vf(a,t,c,i)}var co="_reactListening"+Math.random().toString(36).slice(2);function ca(t){if(!t[co]){t[co]=!0,r.forEach(function(a){a!=="selectionchange"&&(h0.has(a)||ac(a,!1,t),ac(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[co]||(i[co]=!0,ac("selectionchange",!1,i))}}function Vf(t,i,a,c){switch(df(i)){case 1:var d=Ag;break;case 4:d=Cg;break;default:d=jl}a=d.bind(null,i,a,t),d=void 0,!Qr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?t.addEventListener(i,a,{capture:!0,passive:d}):t.addEventListener(i,a,!0):d!==void 0?t.addEventListener(i,a,{passive:d}):t.addEventListener(i,a,!1)}function oc(t,i,a,c,d){var p=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var M=c.tag;if(M===3||M===4){var I=c.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(M===4)for(M=c.return;M!==null;){var B=M.tag;if((B===3||B===4)&&(B=M.stateNode.containerInfo,B===d||B.nodeType===8&&B.parentNode===d))return;M=M.return}for(;I!==null;){if(M=Tr(I),M===null)return;if(B=M.tag,B===5||B===6){c=p=M;continue e}I=I.parentNode}}c=c.return}Tn(function(){var ne=p,ve=W(a),ye=[];e:{var ge=Of.get(t);if(ge!==void 0){var Le=Xl,Be=t;switch(t){case"keypress":if(io(a)===0)break e;case"keydown":case"keyup":Le=jg;break;case"focusin":Be="focus",Le=ql;break;case"focusout":Be="blur",Le=ql;break;case"beforeblur":case"afterblur":Le=ql;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Le=pf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Le=Pg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Le=Xg;break;case Df:case If:case Uf:Le=Dg;break;case kf:Le=Yg;break;case"scroll":Le=Rg;break;case"wheel":Le=Kg;break;case"copy":case"cut":case"paste":Le=Ug;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Le=gf}var Ve=(i&4)!==0,Gt=!Ve&&t==="scroll",Y=Ve?ge!==null?ge+"Capture":null:ge;Ve=[];for(var j=ne,K;j!==null;){K=j;var we=K.stateNode;if(K.tag===5&&we!==null&&(K=we,Y!==null&&(we=_n(j,Y),we!=null&&Ve.push(ua(j,we,K)))),Gt)break;j=j.return}0<Ve.length&&(ge=new Le(ge,Be,null,a,ve),ye.push({event:ge,listeners:Ve}))}}if((i&7)===0){e:{if(ge=t==="mouseover"||t==="pointerover",Le=t==="mouseout"||t==="pointerout",ge&&a!==Tt&&(Be=a.relatedTarget||a.fromElement)&&(Tr(Be)||Be[wi]))break e;if((Le||ge)&&(ge=ve.window===ve?ve:(ge=ve.ownerDocument)?ge.defaultView||ge.parentWindow:window,Le?(Be=a.relatedTarget||a.toElement,Le=ne,Be=Be?Tr(Be):null,Be!==null&&(Gt=hi(Be),Be!==Gt||Be.tag!==5&&Be.tag!==6)&&(Be=null)):(Le=null,Be=ne),Le!==Be)){if(Ve=pf,we="onMouseLeave",Y="onMouseEnter",j="mouse",(t==="pointerout"||t==="pointerover")&&(Ve=gf,we="onPointerLeave",Y="onPointerEnter",j="pointer"),Gt=Le==null?ge:os(Le),K=Be==null?ge:os(Be),ge=new Ve(we,j+"leave",Le,a,ve),ge.target=Gt,ge.relatedTarget=K,we=null,Tr(ve)===ne&&(Ve=new Ve(Y,j+"enter",Be,a,ve),Ve.target=K,Ve.relatedTarget=Gt,we=Ve),Gt=we,Le&&Be)t:{for(Ve=Le,Y=Be,j=0,K=Ve;K;K=ss(K))j++;for(K=0,we=Y;we;we=ss(we))K++;for(;0<j-K;)Ve=ss(Ve),j--;for(;0<K-j;)Y=ss(Y),K--;for(;j--;){if(Ve===Y||Y!==null&&Ve===Y.alternate)break t;Ve=ss(Ve),Y=ss(Y)}Ve=null}else Ve=null;Le!==null&&jf(ye,ge,Le,Ve,!1),Be!==null&&Gt!==null&&jf(ye,Gt,Be,Ve,!0)}}e:{if(ge=ne?os(ne):window,Le=ge.nodeName&&ge.nodeName.toLowerCase(),Le==="select"||Le==="input"&&ge.type==="file")var Xe=i0;else if(Sf(ge))if(wf)Xe=o0;else{Xe=s0;var Ze=r0}else(Le=ge.nodeName)&&Le.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(Xe=a0);if(Xe&&(Xe=Xe(t,ne))){Mf(ye,Xe,a,ve);break e}Ze&&Ze(t,ge,ne),t==="focusout"&&(Ze=ge._wrapperState)&&Ze.controlled&&ge.type==="number"&&At(ge,"number",ge.value)}switch(Ze=ne?os(ne):window,t){case"focusin":(Sf(Ze)||Ze.contentEditable==="true")&&(is=Ze,tc=ne,oa=null);break;case"focusout":oa=tc=is=null;break;case"mousedown":nc=!0;break;case"contextmenu":case"mouseup":case"dragend":nc=!1,Ff(ye,a,ve);break;case"selectionchange":if(u0)break;case"keydown":case"keyup":Ff(ye,a,ve)}var Qe;if(Zl)e:{switch(t){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else ns?yf(t,a)&&(nt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(nt="onCompositionStart");nt&&(xf&&a.locale!=="ko"&&(ns||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&ns&&(Qe=ff()):(Zi=ve,Wl="value"in Zi?Zi.value:Zi.textContent,ns=!0)),Ze=uo(ne,nt),0<Ze.length&&(nt=new mf(nt,t,null,a,ve),ye.push({event:nt,listeners:Ze}),Qe?nt.data=Qe:(Qe=Ef(a),Qe!==null&&(nt.data=Qe)))),(Qe=Qg?Jg(t,a):e0(t,a))&&(ne=uo(ne,"onBeforeInput"),0<ne.length&&(ve=new mf("onBeforeInput","beforeinput",null,a,ve),ye.push({event:ve,listeners:ne}),ve.data=Qe))}Hf(ye,i)})}function ua(t,i,a){return{instance:t,listener:i,currentTarget:a}}function uo(t,i){for(var a=i+"Capture",c=[];t!==null;){var d=t,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=_n(t,a),p!=null&&c.unshift(ua(t,p,d)),p=_n(t,i),p!=null&&c.push(ua(t,p,d))),t=t.return}return c}function ss(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function jf(t,i,a,c,d){for(var p=i._reactName,M=[];a!==null&&a!==c;){var I=a,B=I.alternate,ne=I.stateNode;if(B!==null&&B===c)break;I.tag===5&&ne!==null&&(I=ne,d?(B=_n(a,p),B!=null&&M.unshift(ua(a,B,I))):d||(B=_n(a,p),B!=null&&M.push(ua(a,B,I)))),a=a.return}M.length!==0&&t.push({event:i,listeners:M})}var p0=/\r\n?/g,m0=/\u0000|\uFFFD/g;function Gf(t){return(typeof t=="string"?t:""+t).replace(p0,`
`).replace(m0,"")}function fo(t,i,a){if(i=Gf(i),Gf(t)!==i&&a)throw Error(n(425))}function ho(){}var lc=null,cc=null;function uc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var dc=typeof setTimeout=="function"?setTimeout:void 0,g0=typeof clearTimeout=="function"?clearTimeout:void 0,Wf=typeof Promise=="function"?Promise:void 0,x0=typeof queueMicrotask=="function"?queueMicrotask:typeof Wf<"u"?function(t){return Wf.resolve(null).then(t).catch(v0)}:dc;function v0(t){setTimeout(function(){throw t})}function fc(t,i){var a=i,c=0;do{var d=a.nextSibling;if(t.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){t.removeChild(d),ea(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);ea(i)}function Ji(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Xf(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}var as=Math.random().toString(36).slice(2),mi="__reactFiber$"+as,da="__reactProps$"+as,wi="__reactContainer$"+as,hc="__reactEvents$"+as,_0="__reactListeners$"+as,y0="__reactHandles$"+as;function Tr(t){var i=t[mi];if(i)return i;for(var a=t.parentNode;a;){if(i=a[wi]||a[mi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=Xf(t);t!==null;){if(a=t[mi])return a;t=Xf(t)}return i}t=a,a=t.parentNode}return null}function fa(t){return t=t[mi]||t[wi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function os(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function po(t){return t[da]||null}var pc=[],ls=-1;function er(t){return{current:t}}function Ut(t){0>ls||(t.current=pc[ls],pc[ls]=null,ls--)}function Lt(t,i){ls++,pc[ls]=t.current,t.current=i}var tr={},fn=er(tr),bn=er(!1),br=tr;function cs(t,i){var a=t.type.contextTypes;if(!a)return tr;var c=t.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=i[p];return c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=d),d}function An(t){return t=t.childContextTypes,t!=null}function mo(){Ut(bn),Ut(fn)}function $f(t,i,a){if(fn.current!==tr)throw Error(n(168));Lt(fn,i),Lt(bn,a)}function Yf(t,i,a){var c=t.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(n(108,_e(t)||"Unknown",d));return le({},a,c)}function go(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||tr,br=fn.current,Lt(fn,t),Lt(bn,bn.current),!0}function qf(t,i,a){var c=t.stateNode;if(!c)throw Error(n(169));a?(t=Yf(t,i,br),c.__reactInternalMemoizedMergedChildContext=t,Ut(bn),Ut(fn),Lt(fn,t)):Ut(bn),Lt(bn,a)}var Ti=null,xo=!1,mc=!1;function Kf(t){Ti===null?Ti=[t]:Ti.push(t)}function E0(t){xo=!0,Kf(t)}function nr(){if(!mc&&Ti!==null){mc=!0;var t=0,i=Et;try{var a=Ti;for(Et=1;t<a.length;t++){var c=a[t];do c=c(!0);while(c!==null)}Ti=null,xo=!1}catch(d){throw Ti!==null&&(Ti=Ti.slice(t+1)),Za(Ee,nr),d}finally{Et=i,mc=!1}}return null}var us=[],ds=0,vo=null,_o=0,jn=[],Gn=0,Ar=null,bi=1,Ai="";function Cr(t,i){us[ds++]=_o,us[ds++]=vo,vo=t,_o=i}function Zf(t,i,a){jn[Gn++]=bi,jn[Gn++]=Ai,jn[Gn++]=Ar,Ar=t;var c=bi;t=Ai;var d=32-at(c)-1;c&=~(1<<d),a+=1;var p=32-at(i)+d;if(30<p){var M=d-d%5;p=(c&(1<<M)-1).toString(32),c>>=M,d-=M,bi=1<<32-at(i)+d|a<<d|c,Ai=p+t}else bi=1<<p|a<<d|c,Ai=t}function gc(t){t.return!==null&&(Cr(t,1),Zf(t,1,0))}function xc(t){for(;t===vo;)vo=us[--ds],us[ds]=null,_o=us[--ds],us[ds]=null;for(;t===Ar;)Ar=jn[--Gn],jn[Gn]=null,Ai=jn[--Gn],jn[Gn]=null,bi=jn[--Gn],jn[Gn]=null}var kn=null,On=null,Ot=!1,ei=null;function Qf(t,i){var a=Yn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=t,i=t.deletions,i===null?(t.deletions=[a],t.flags|=16):i.push(a)}function Jf(t,i){switch(t.tag){case 5:var a=t.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,kn=t,On=Ji(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,kn=t,On=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Ar!==null?{id:bi,overflow:Ai}:null,t.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Yn(18,null,null,0),a.stateNode=i,a.return=t,t.child=a,kn=t,On=null,!0):!1;default:return!1}}function vc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function _c(t){if(Ot){var i=On;if(i){var a=i;if(!Jf(t,i)){if(vc(t))throw Error(n(418));i=Ji(a.nextSibling);var c=kn;i&&Jf(t,i)?Qf(c,a):(t.flags=t.flags&-4097|2,Ot=!1,kn=t)}}else{if(vc(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ot=!1,kn=t}}}function eh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;kn=t}function yo(t){if(t!==kn)return!1;if(!Ot)return eh(t),Ot=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!uc(t.type,t.memoizedProps)),i&&(i=On)){if(vc(t))throw th(),Error(n(418));for(;i;)Qf(t,i),i=Ji(i.nextSibling)}if(eh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(i===0){On=Ji(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}t=t.nextSibling}On=null}}else On=kn?Ji(t.stateNode.nextSibling):null;return!0}function th(){for(var t=On;t;)t=Ji(t.nextSibling)}function fs(){On=kn=null,Ot=!1}function yc(t){ei===null?ei=[t]:ei.push(t)}var S0=N.ReactCurrentBatchConfig;function ha(t,i,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var c=a.stateNode}if(!c)throw Error(n(147,t));var d=c,p=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(M){var I=d.refs;M===null?delete I[p]:I[p]=M},i._stringRef=p,i)}if(typeof t!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,t))}return t}function Eo(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function nh(t){var i=t._init;return i(t._payload)}function ih(t){function i(Y,j){if(t){var K=Y.deletions;K===null?(Y.deletions=[j],Y.flags|=16):K.push(j)}}function a(Y,j){if(!t)return null;for(;j!==null;)i(Y,j),j=j.sibling;return null}function c(Y,j){for(Y=new Map;j!==null;)j.key!==null?Y.set(j.key,j):Y.set(j.index,j),j=j.sibling;return Y}function d(Y,j){return Y=ur(Y,j),Y.index=0,Y.sibling=null,Y}function p(Y,j,K){return Y.index=K,t?(K=Y.alternate,K!==null?(K=K.index,K<j?(Y.flags|=2,j):K):(Y.flags|=2,j)):(Y.flags|=1048576,j)}function M(Y){return t&&Y.alternate===null&&(Y.flags|=2),Y}function I(Y,j,K,we){return j===null||j.tag!==6?(j=du(K,Y.mode,we),j.return=Y,j):(j=d(j,K),j.return=Y,j)}function B(Y,j,K,we){var Xe=K.type;return Xe===D?ve(Y,j,K.props.children,we,K.key):j!==null&&(j.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===se&&nh(Xe)===j.type)?(we=d(j,K.props),we.ref=ha(Y,j,K),we.return=Y,we):(we=Wo(K.type,K.key,K.props,null,Y.mode,we),we.ref=ha(Y,j,K),we.return=Y,we)}function ne(Y,j,K,we){return j===null||j.tag!==4||j.stateNode.containerInfo!==K.containerInfo||j.stateNode.implementation!==K.implementation?(j=fu(K,Y.mode,we),j.return=Y,j):(j=d(j,K.children||[]),j.return=Y,j)}function ve(Y,j,K,we,Xe){return j===null||j.tag!==7?(j=Ur(K,Y.mode,we,Xe),j.return=Y,j):(j=d(j,K),j.return=Y,j)}function ye(Y,j,K){if(typeof j=="string"&&j!==""||typeof j=="number")return j=du(""+j,Y.mode,K),j.return=Y,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case G:return K=Wo(j.type,j.key,j.props,null,Y.mode,K),K.ref=ha(Y,null,j),K.return=Y,K;case O:return j=fu(j,Y.mode,K),j.return=Y,j;case se:var we=j._init;return ye(Y,we(j._payload),K)}if(Ge(j)||ce(j))return j=Ur(j,Y.mode,K,null),j.return=Y,j;Eo(Y,j)}return null}function ge(Y,j,K,we){var Xe=j!==null?j.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return Xe!==null?null:I(Y,j,""+K,we);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case G:return K.key===Xe?B(Y,j,K,we):null;case O:return K.key===Xe?ne(Y,j,K,we):null;case se:return Xe=K._init,ge(Y,j,Xe(K._payload),we)}if(Ge(K)||ce(K))return Xe!==null?null:ve(Y,j,K,we,null);Eo(Y,K)}return null}function Le(Y,j,K,we,Xe){if(typeof we=="string"&&we!==""||typeof we=="number")return Y=Y.get(K)||null,I(j,Y,""+we,Xe);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case G:return Y=Y.get(we.key===null?K:we.key)||null,B(j,Y,we,Xe);case O:return Y=Y.get(we.key===null?K:we.key)||null,ne(j,Y,we,Xe);case se:var Ze=we._init;return Le(Y,j,K,Ze(we._payload),Xe)}if(Ge(we)||ce(we))return Y=Y.get(K)||null,ve(j,Y,we,Xe,null);Eo(j,we)}return null}function Be(Y,j,K,we){for(var Xe=null,Ze=null,Qe=j,nt=j=0,sn=null;Qe!==null&&nt<K.length;nt++){Qe.index>nt?(sn=Qe,Qe=null):sn=Qe.sibling;var Mt=ge(Y,Qe,K[nt],we);if(Mt===null){Qe===null&&(Qe=sn);break}t&&Qe&&Mt.alternate===null&&i(Y,Qe),j=p(Mt,j,nt),Ze===null?Xe=Mt:Ze.sibling=Mt,Ze=Mt,Qe=sn}if(nt===K.length)return a(Y,Qe),Ot&&Cr(Y,nt),Xe;if(Qe===null){for(;nt<K.length;nt++)Qe=ye(Y,K[nt],we),Qe!==null&&(j=p(Qe,j,nt),Ze===null?Xe=Qe:Ze.sibling=Qe,Ze=Qe);return Ot&&Cr(Y,nt),Xe}for(Qe=c(Y,Qe);nt<K.length;nt++)sn=Le(Qe,Y,nt,K[nt],we),sn!==null&&(t&&sn.alternate!==null&&Qe.delete(sn.key===null?nt:sn.key),j=p(sn,j,nt),Ze===null?Xe=sn:Ze.sibling=sn,Ze=sn);return t&&Qe.forEach(function(dr){return i(Y,dr)}),Ot&&Cr(Y,nt),Xe}function Ve(Y,j,K,we){var Xe=ce(K);if(typeof Xe!="function")throw Error(n(150));if(K=Xe.call(K),K==null)throw Error(n(151));for(var Ze=Xe=null,Qe=j,nt=j=0,sn=null,Mt=K.next();Qe!==null&&!Mt.done;nt++,Mt=K.next()){Qe.index>nt?(sn=Qe,Qe=null):sn=Qe.sibling;var dr=ge(Y,Qe,Mt.value,we);if(dr===null){Qe===null&&(Qe=sn);break}t&&Qe&&dr.alternate===null&&i(Y,Qe),j=p(dr,j,nt),Ze===null?Xe=dr:Ze.sibling=dr,Ze=dr,Qe=sn}if(Mt.done)return a(Y,Qe),Ot&&Cr(Y,nt),Xe;if(Qe===null){for(;!Mt.done;nt++,Mt=K.next())Mt=ye(Y,Mt.value,we),Mt!==null&&(j=p(Mt,j,nt),Ze===null?Xe=Mt:Ze.sibling=Mt,Ze=Mt);return Ot&&Cr(Y,nt),Xe}for(Qe=c(Y,Qe);!Mt.done;nt++,Mt=K.next())Mt=Le(Qe,Y,nt,Mt.value,we),Mt!==null&&(t&&Mt.alternate!==null&&Qe.delete(Mt.key===null?nt:Mt.key),j=p(Mt,j,nt),Ze===null?Xe=Mt:Ze.sibling=Mt,Ze=Mt);return t&&Qe.forEach(function(tx){return i(Y,tx)}),Ot&&Cr(Y,nt),Xe}function Gt(Y,j,K,we){if(typeof K=="object"&&K!==null&&K.type===D&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case G:e:{for(var Xe=K.key,Ze=j;Ze!==null;){if(Ze.key===Xe){if(Xe=K.type,Xe===D){if(Ze.tag===7){a(Y,Ze.sibling),j=d(Ze,K.props.children),j.return=Y,Y=j;break e}}else if(Ze.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===se&&nh(Xe)===Ze.type){a(Y,Ze.sibling),j=d(Ze,K.props),j.ref=ha(Y,Ze,K),j.return=Y,Y=j;break e}a(Y,Ze);break}else i(Y,Ze);Ze=Ze.sibling}K.type===D?(j=Ur(K.props.children,Y.mode,we,K.key),j.return=Y,Y=j):(we=Wo(K.type,K.key,K.props,null,Y.mode,we),we.ref=ha(Y,j,K),we.return=Y,Y=we)}return M(Y);case O:e:{for(Ze=K.key;j!==null;){if(j.key===Ze)if(j.tag===4&&j.stateNode.containerInfo===K.containerInfo&&j.stateNode.implementation===K.implementation){a(Y,j.sibling),j=d(j,K.children||[]),j.return=Y,Y=j;break e}else{a(Y,j);break}else i(Y,j);j=j.sibling}j=fu(K,Y.mode,we),j.return=Y,Y=j}return M(Y);case se:return Ze=K._init,Gt(Y,j,Ze(K._payload),we)}if(Ge(K))return Be(Y,j,K,we);if(ce(K))return Ve(Y,j,K,we);Eo(Y,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,j!==null&&j.tag===6?(a(Y,j.sibling),j=d(j,K),j.return=Y,Y=j):(a(Y,j),j=du(K,Y.mode,we),j.return=Y,Y=j),M(Y)):a(Y,j)}return Gt}var hs=ih(!0),rh=ih(!1),So=er(null),Mo=null,ps=null,Ec=null;function Sc(){Ec=ps=Mo=null}function Mc(t){var i=So.current;Ut(So),t._currentValue=i}function wc(t,i,a){for(;t!==null;){var c=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),t===a)break;t=t.return}}function ms(t,i){Mo=t,Ec=ps=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Cn=!0),t.firstContext=null)}function Wn(t){var i=t._currentValue;if(Ec!==t)if(t={context:t,memoizedValue:i,next:null},ps===null){if(Mo===null)throw Error(n(308));ps=t,Mo.dependencies={lanes:0,firstContext:t}}else ps=ps.next=t;return i}var Rr=null;function Tc(t){Rr===null?Rr=[t]:Rr.push(t)}function sh(t,i,a,c){var d=i.interleaved;return d===null?(a.next=a,Tc(i)):(a.next=d.next,d.next=a),i.interleaved=a,Ci(t,c)}function Ci(t,i){t.lanes|=i;var a=t.alternate;for(a!==null&&(a.lanes|=i),a=t,t=t.return;t!==null;)t.childLanes|=i,a=t.alternate,a!==null&&(a.childLanes|=i),a=t,t=t.return;return a.tag===3?a.stateNode:null}var ir=!1;function bc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ah(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ri(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function rr(t,i,a){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,(St&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Ci(t,a)}return d=c.interleaved,d===null?(i.next=i,Tc(c)):(i.next=d.next,d.next=i),c.interleaved=i,Ci(t,a)}function wo(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=t.pendingLanes,a|=c,i.lanes=a,tn(t,a)}}function oh(t,i){var a=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var M={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=M:p=p.next=M,a=a.next}while(a!==null);p===null?d=p=i:p=p.next=i}else d=p=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}function To(t,i,a,c){var d=t.updateQueue;ir=!1;var p=d.firstBaseUpdate,M=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var B=I,ne=B.next;B.next=null,M===null?p=ne:M.next=ne,M=B;var ve=t.alternate;ve!==null&&(ve=ve.updateQueue,I=ve.lastBaseUpdate,I!==M&&(I===null?ve.firstBaseUpdate=ne:I.next=ne,ve.lastBaseUpdate=B))}if(p!==null){var ye=d.baseState;M=0,ve=ne=B=null,I=p;do{var ge=I.lane,Le=I.eventTime;if((c&ge)===ge){ve!==null&&(ve=ve.next={eventTime:Le,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var Be=t,Ve=I;switch(ge=i,Le=a,Ve.tag){case 1:if(Be=Ve.payload,typeof Be=="function"){ye=Be.call(Le,ye,ge);break e}ye=Be;break e;case 3:Be.flags=Be.flags&-65537|128;case 0:if(Be=Ve.payload,ge=typeof Be=="function"?Be.call(Le,ye,ge):Be,ge==null)break e;ye=le({},ye,ge);break e;case 2:ir=!0}}I.callback!==null&&I.lane!==0&&(t.flags|=64,ge=d.effects,ge===null?d.effects=[I]:ge.push(I))}else Le={eventTime:Le,lane:ge,tag:I.tag,payload:I.payload,callback:I.callback,next:null},ve===null?(ne=ve=Le,B=ye):ve=ve.next=Le,M|=ge;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;ge=I,I=ge.next,ge.next=null,d.lastBaseUpdate=ge,d.shared.pending=null}}while(!0);if(ve===null&&(B=ye),d.baseState=B,d.firstBaseUpdate=ne,d.lastBaseUpdate=ve,i=d.shared.interleaved,i!==null){d=i;do M|=d.lane,d=d.next;while(d!==i)}else p===null&&(d.shared.lanes=0);Fr|=M,t.lanes=M,t.memoizedState=ye}}function lh(t,i,a){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var c=t[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(n(191,d));d.call(c)}}}var pa={},gi=er(pa),ma=er(pa),ga=er(pa);function Nr(t){if(t===pa)throw Error(n(174));return t}function Ac(t,i){switch(Lt(ga,i),Lt(ma,t),Lt(gi,pa),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:We(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=We(i,t)}Ut(gi),Lt(gi,i)}function gs(){Ut(gi),Ut(ma),Ut(ga)}function ch(t){Nr(ga.current);var i=Nr(gi.current),a=We(i,t.type);i!==a&&(Lt(ma,t),Lt(gi,a))}function Cc(t){ma.current===t&&(Ut(gi),Ut(ma))}var zt=er(0);function bo(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Rc=[];function Nc(){for(var t=0;t<Rc.length;t++)Rc[t]._workInProgressVersionPrimary=null;Rc.length=0}var Ao=N.ReactCurrentDispatcher,Pc=N.ReactCurrentBatchConfig,Pr=0,Bt=null,Kt=null,nn=null,Co=!1,xa=!1,va=0,M0=0;function hn(){throw Error(n(321))}function Fc(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!Jn(t[a],i[a]))return!1;return!0}function Lc(t,i,a,c,d,p){if(Pr=p,Bt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ao.current=t===null||t.memoizedState===null?A0:C0,t=a(c,d),xa){p=0;do{if(xa=!1,va=0,25<=p)throw Error(n(301));p+=1,nn=Kt=null,i.updateQueue=null,Ao.current=R0,t=a(c,d)}while(xa)}if(Ao.current=Po,i=Kt!==null&&Kt.next!==null,Pr=0,nn=Kt=Bt=null,Co=!1,i)throw Error(n(300));return t}function Dc(){var t=va!==0;return va=0,t}function xi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?Bt.memoizedState=nn=t:nn=nn.next=t,nn}function Xn(){if(Kt===null){var t=Bt.alternate;t=t!==null?t.memoizedState:null}else t=Kt.next;var i=nn===null?Bt.memoizedState:nn.next;if(i!==null)nn=i,Kt=t;else{if(t===null)throw Error(n(310));Kt=t,t={memoizedState:Kt.memoizedState,baseState:Kt.baseState,baseQueue:Kt.baseQueue,queue:Kt.queue,next:null},nn===null?Bt.memoizedState=nn=t:nn=nn.next=t}return nn}function _a(t,i){return typeof i=="function"?i(t):i}function Ic(t){var i=Xn(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var c=Kt,d=c.baseQueue,p=a.pending;if(p!==null){if(d!==null){var M=d.next;d.next=p.next,p.next=M}c.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,c=c.baseState;var I=M=null,B=null,ne=p;do{var ve=ne.lane;if((Pr&ve)===ve)B!==null&&(B=B.next={lane:0,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),c=ne.hasEagerState?ne.eagerState:t(c,ne.action);else{var ye={lane:ve,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null};B===null?(I=B=ye,M=c):B=B.next=ye,Bt.lanes|=ve,Fr|=ve}ne=ne.next}while(ne!==null&&ne!==p);B===null?M=c:B.next=I,Jn(c,i.memoizedState)||(Cn=!0),i.memoizedState=c,i.baseState=M,i.baseQueue=B,a.lastRenderedState=c}if(t=a.interleaved,t!==null){d=t;do p=d.lane,Bt.lanes|=p,Fr|=p,d=d.next;while(d!==t)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Uc(t){var i=Xn(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var c=a.dispatch,d=a.pending,p=i.memoizedState;if(d!==null){a.pending=null;var M=d=d.next;do p=t(p,M.action),M=M.next;while(M!==d);Jn(p,i.memoizedState)||(Cn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),a.lastRenderedState=p}return[p,c]}function uh(){}function dh(t,i){var a=Bt,c=Xn(),d=i(),p=!Jn(c.memoizedState,d);if(p&&(c.memoizedState=d,Cn=!0),c=c.queue,kc(ph.bind(null,a,c,t),[t]),c.getSnapshot!==i||p||nn!==null&&nn.memoizedState.tag&1){if(a.flags|=2048,ya(9,hh.bind(null,a,c,d,i),void 0,null),rn===null)throw Error(n(349));(Pr&30)!==0||fh(a,i,d)}return d}function fh(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=Bt.updateQueue,i===null?(i={lastEffect:null,stores:null},Bt.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function hh(t,i,a,c){i.value=a,i.getSnapshot=c,mh(i)&&gh(t)}function ph(t,i,a){return a(function(){mh(i)&&gh(t)})}function mh(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!Jn(t,a)}catch{return!0}}function gh(t){var i=Ci(t,1);i!==null&&ri(i,t,1,-1)}function xh(t){var i=xi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:t},i.queue=t,t=t.dispatch=b0.bind(null,Bt,t),[i.memoizedState,t]}function ya(t,i,a,c){return t={tag:t,create:i,destroy:a,deps:c,next:null},i=Bt.updateQueue,i===null?(i={lastEffect:null,stores:null},Bt.updateQueue=i,i.lastEffect=t.next=t):(a=i.lastEffect,a===null?i.lastEffect=t.next=t:(c=a.next,a.next=t,t.next=c,i.lastEffect=t)),t}function vh(){return Xn().memoizedState}function Ro(t,i,a,c){var d=xi();Bt.flags|=t,d.memoizedState=ya(1|i,a,void 0,c===void 0?null:c)}function No(t,i,a,c){var d=Xn();c=c===void 0?null:c;var p=void 0;if(Kt!==null){var M=Kt.memoizedState;if(p=M.destroy,c!==null&&Fc(c,M.deps)){d.memoizedState=ya(i,a,p,c);return}}Bt.flags|=t,d.memoizedState=ya(1|i,a,p,c)}function _h(t,i){return Ro(8390656,8,t,i)}function kc(t,i){return No(2048,8,t,i)}function yh(t,i){return No(4,2,t,i)}function Eh(t,i){return No(4,4,t,i)}function Sh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Mh(t,i,a){return a=a!=null?a.concat([t]):null,No(4,4,Sh.bind(null,i,t),a)}function Oc(){}function wh(t,i){var a=Xn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Fc(i,c[1])?c[0]:(a.memoizedState=[t,i],t)}function Th(t,i){var a=Xn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Fc(i,c[1])?c[0]:(t=t(),a.memoizedState=[t,i],t)}function bh(t,i,a){return(Pr&21)===0?(t.baseState&&(t.baseState=!1,Cn=!0),t.memoizedState=a):(Jn(a,i)||(a=Nt(),Bt.lanes|=a,Fr|=a,t.baseState=!0),i)}function w0(t,i){var a=Et;Et=a!==0&&4>a?a:4,t(!0);var c=Pc.transition;Pc.transition={};try{t(!1),i()}finally{Et=a,Pc.transition=c}}function Ah(){return Xn().memoizedState}function T0(t,i,a){var c=lr(t);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Ch(t))Rh(i,a);else if(a=sh(t,i,a,c),a!==null){var d=Sn();ri(a,t,c,d),Nh(a,i,c)}}function b0(t,i,a){var c=lr(t),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ch(t))Rh(i,d);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var M=i.lastRenderedState,I=p(M,a);if(d.hasEagerState=!0,d.eagerState=I,Jn(I,M)){var B=i.interleaved;B===null?(d.next=d,Tc(i)):(d.next=B.next,B.next=d),i.interleaved=d;return}}catch{}finally{}a=sh(t,i,d,c),a!==null&&(d=Sn(),ri(a,t,c,d),Nh(a,i,c))}}function Ch(t){var i=t.alternate;return t===Bt||i!==null&&i===Bt}function Rh(t,i){xa=Co=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function Nh(t,i,a){if((a&4194240)!==0){var c=i.lanes;c&=t.pendingLanes,a|=c,i.lanes=a,tn(t,a)}}var Po={readContext:Wn,useCallback:hn,useContext:hn,useEffect:hn,useImperativeHandle:hn,useInsertionEffect:hn,useLayoutEffect:hn,useMemo:hn,useReducer:hn,useRef:hn,useState:hn,useDebugValue:hn,useDeferredValue:hn,useTransition:hn,useMutableSource:hn,useSyncExternalStore:hn,useId:hn,unstable_isNewReconciler:!1},A0={readContext:Wn,useCallback:function(t,i){return xi().memoizedState=[t,i===void 0?null:i],t},useContext:Wn,useEffect:_h,useImperativeHandle:function(t,i,a){return a=a!=null?a.concat([t]):null,Ro(4194308,4,Sh.bind(null,i,t),a)},useLayoutEffect:function(t,i){return Ro(4194308,4,t,i)},useInsertionEffect:function(t,i){return Ro(4,2,t,i)},useMemo:function(t,i){var a=xi();return i=i===void 0?null:i,t=t(),a.memoizedState=[t,i],t},useReducer:function(t,i,a){var c=xi();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},c.queue=t,t=t.dispatch=T0.bind(null,Bt,t),[c.memoizedState,t]},useRef:function(t){var i=xi();return t={current:t},i.memoizedState=t},useState:xh,useDebugValue:Oc,useDeferredValue:function(t){return xi().memoizedState=t},useTransition:function(){var t=xh(!1),i=t[0];return t=w0.bind(null,t[1]),xi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,a){var c=Bt,d=xi();if(Ot){if(a===void 0)throw Error(n(407));a=a()}else{if(a=i(),rn===null)throw Error(n(349));(Pr&30)!==0||fh(c,i,a)}d.memoizedState=a;var p={value:a,getSnapshot:i};return d.queue=p,_h(ph.bind(null,c,p,t),[t]),c.flags|=2048,ya(9,hh.bind(null,c,p,a,i),void 0,null),a},useId:function(){var t=xi(),i=rn.identifierPrefix;if(Ot){var a=Ai,c=bi;a=(c&~(1<<32-at(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=va++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=M0++,i=":"+i+"r"+a.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},C0={readContext:Wn,useCallback:wh,useContext:Wn,useEffect:kc,useImperativeHandle:Mh,useInsertionEffect:yh,useLayoutEffect:Eh,useMemo:Th,useReducer:Ic,useRef:vh,useState:function(){return Ic(_a)},useDebugValue:Oc,useDeferredValue:function(t){var i=Xn();return bh(i,Kt.memoizedState,t)},useTransition:function(){var t=Ic(_a)[0],i=Xn().memoizedState;return[t,i]},useMutableSource:uh,useSyncExternalStore:dh,useId:Ah,unstable_isNewReconciler:!1},R0={readContext:Wn,useCallback:wh,useContext:Wn,useEffect:kc,useImperativeHandle:Mh,useInsertionEffect:yh,useLayoutEffect:Eh,useMemo:Th,useReducer:Uc,useRef:vh,useState:function(){return Uc(_a)},useDebugValue:Oc,useDeferredValue:function(t){var i=Xn();return Kt===null?i.memoizedState=t:bh(i,Kt.memoizedState,t)},useTransition:function(){var t=Uc(_a)[0],i=Xn().memoizedState;return[t,i]},useMutableSource:uh,useSyncExternalStore:dh,useId:Ah,unstable_isNewReconciler:!1};function ti(t,i){if(t&&t.defaultProps){i=le({},i),t=t.defaultProps;for(var a in t)i[a]===void 0&&(i[a]=t[a]);return i}return i}function zc(t,i,a,c){i=t.memoizedState,a=a(c,i),a=a==null?i:le({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Fo={isMounted:function(t){return(t=t._reactInternals)?hi(t)===t:!1},enqueueSetState:function(t,i,a){t=t._reactInternals;var c=Sn(),d=lr(t),p=Ri(c,d);p.payload=i,a!=null&&(p.callback=a),i=rr(t,p,d),i!==null&&(ri(i,t,d,c),wo(i,t,d))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var c=Sn(),d=lr(t),p=Ri(c,d);p.tag=1,p.payload=i,a!=null&&(p.callback=a),i=rr(t,p,d),i!==null&&(ri(i,t,d,c),wo(i,t,d))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=Sn(),c=lr(t),d=Ri(a,c);d.tag=2,i!=null&&(d.callback=i),i=rr(t,d,c),i!==null&&(ri(i,t,c,a),wo(i,t,c))}};function Ph(t,i,a,c,d,p,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,p,M):i.prototype&&i.prototype.isPureReactComponent?!aa(a,c)||!aa(d,p):!0}function Fh(t,i,a){var c=!1,d=tr,p=i.contextType;return typeof p=="object"&&p!==null?p=Wn(p):(d=An(i)?br:fn.current,c=i.contextTypes,p=(c=c!=null)?cs(t,d):tr),i=new i(a,p),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Fo,t.stateNode=i,i._reactInternals=t,c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=p),i}function Lh(t,i,a,c){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==t&&Fo.enqueueReplaceState(i,i.state,null)}function Bc(t,i,a,c){var d=t.stateNode;d.props=a,d.state=t.memoizedState,d.refs={},bc(t);var p=i.contextType;typeof p=="object"&&p!==null?d.context=Wn(p):(p=An(i)?br:fn.current,d.context=cs(t,p)),d.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(zc(t,i,p,a),d.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Fo.enqueueReplaceState(d,d.state,null),To(t,a,d,c),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function xs(t,i){try{var a="",c=i;do a+=pe(c),c=c.return;while(c);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:i,stack:d,digest:null}}function Hc(t,i,a){return{value:t,source:null,stack:a??null,digest:i??null}}function Vc(t,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var N0=typeof WeakMap=="function"?WeakMap:Map;function Dh(t,i,a){a=Ri(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){zo||(zo=!0,iu=c),Vc(t,i)},a}function Ih(t,i,a){a=Ri(-1,a),a.tag=3;var c=t.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){Vc(t,i)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){Vc(t,i),typeof c!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),a}function Uh(t,i,a){var c=t.pingCache;if(c===null){c=t.pingCache=new N0;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),t=G0.bind(null,t,i,a),i.then(t,t))}function kh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Oh(t,i,a,c,d){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Ri(-1,1),i.tag=2,rr(a,i,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=d,t)}var P0=N.ReactCurrentOwner,Cn=!1;function En(t,i,a,c){i.child=t===null?rh(i,null,a,c):hs(i,t.child,a,c)}function zh(t,i,a,c,d){a=a.render;var p=i.ref;return ms(i,d),c=Lc(t,i,a,c,p,d),a=Dc(),t!==null&&!Cn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Ni(t,i,d)):(Ot&&a&&gc(i),i.flags|=1,En(t,i,c,d),i.child)}function Bh(t,i,a,c,d){if(t===null){var p=a.type;return typeof p=="function"&&!uu(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=p,Hh(t,i,p,c,d)):(t=Wo(a.type,null,c,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,(t.lanes&d)===0){var M=p.memoizedProps;if(a=a.compare,a=a!==null?a:aa,a(M,c)&&t.ref===i.ref)return Ni(t,i,d)}return i.flags|=1,t=ur(p,c),t.ref=i.ref,t.return=i,i.child=t}function Hh(t,i,a,c,d){if(t!==null){var p=t.memoizedProps;if(aa(p,c)&&t.ref===i.ref)if(Cn=!1,i.pendingProps=c=p,(t.lanes&d)!==0)(t.flags&131072)!==0&&(Cn=!0);else return i.lanes=t.lanes,Ni(t,i,d)}return jc(t,i,a,c,d)}function Vh(t,i,a){var c=i.pendingProps,d=c.children,p=t!==null?t.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Lt(_s,zn),zn|=a;else{if((a&1073741824)===0)return t=p!==null?p.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Lt(_s,zn),zn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,Lt(_s,zn),zn|=c}else p!==null?(c=p.baseLanes|a,i.memoizedState=null):c=a,Lt(_s,zn),zn|=c;return En(t,i,d,a),i.child}function jh(t,i){var a=i.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function jc(t,i,a,c,d){var p=An(a)?br:fn.current;return p=cs(i,p),ms(i,d),a=Lc(t,i,a,c,p,d),c=Dc(),t!==null&&!Cn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Ni(t,i,d)):(Ot&&c&&gc(i),i.flags|=1,En(t,i,a,d),i.child)}function Gh(t,i,a,c,d){if(An(a)){var p=!0;go(i)}else p=!1;if(ms(i,d),i.stateNode===null)Do(t,i),Fh(i,a,c),Bc(i,a,c,d),c=!0;else if(t===null){var M=i.stateNode,I=i.memoizedProps;M.props=I;var B=M.context,ne=a.contextType;typeof ne=="object"&&ne!==null?ne=Wn(ne):(ne=An(a)?br:fn.current,ne=cs(i,ne));var ve=a.getDerivedStateFromProps,ye=typeof ve=="function"||typeof M.getSnapshotBeforeUpdate=="function";ye||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(I!==c||B!==ne)&&Lh(i,M,c,ne),ir=!1;var ge=i.memoizedState;M.state=ge,To(i,c,M,d),B=i.memoizedState,I!==c||ge!==B||bn.current||ir?(typeof ve=="function"&&(zc(i,a,ve,c),B=i.memoizedState),(I=ir||Ph(i,a,I,c,ge,B,ne))?(ye||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=B),M.props=c,M.state=B,M.context=ne,c=I):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{M=i.stateNode,ah(t,i),I=i.memoizedProps,ne=i.type===i.elementType?I:ti(i.type,I),M.props=ne,ye=i.pendingProps,ge=M.context,B=a.contextType,typeof B=="object"&&B!==null?B=Wn(B):(B=An(a)?br:fn.current,B=cs(i,B));var Le=a.getDerivedStateFromProps;(ve=typeof Le=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(I!==ye||ge!==B)&&Lh(i,M,c,B),ir=!1,ge=i.memoizedState,M.state=ge,To(i,c,M,d);var Be=i.memoizedState;I!==ye||ge!==Be||bn.current||ir?(typeof Le=="function"&&(zc(i,a,Le,c),Be=i.memoizedState),(ne=ir||Ph(i,a,ne,c,ge,Be,B)||!1)?(ve||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(c,Be,B),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(c,Be,B)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||I===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Be),M.props=c,M.state=Be,M.context=B,c=ne):(typeof M.componentDidUpdate!="function"||I===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),c=!1)}return Gc(t,i,a,c,p,d)}function Gc(t,i,a,c,d,p){jh(t,i);var M=(i.flags&128)!==0;if(!c&&!M)return d&&qf(i,a,!1),Ni(t,i,p);c=i.stateNode,P0.current=i;var I=M&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,t!==null&&M?(i.child=hs(i,t.child,null,p),i.child=hs(i,null,I,p)):En(t,i,I,p),i.memoizedState=c.state,d&&qf(i,a,!0),i.child}function Wh(t){var i=t.stateNode;i.pendingContext?$f(t,i.pendingContext,i.pendingContext!==i.context):i.context&&$f(t,i.context,!1),Ac(t,i.containerInfo)}function Xh(t,i,a,c,d){return fs(),yc(d),i.flags|=256,En(t,i,a,c),i.child}var Wc={dehydrated:null,treeContext:null,retryLane:0};function Xc(t){return{baseLanes:t,cachePool:null,transitions:null}}function $h(t,i,a){var c=i.pendingProps,d=zt.current,p=!1,M=(i.flags&128)!==0,I;if((I=M)||(I=t!==null&&t.memoizedState===null?!1:(d&2)!==0),I?(p=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),Lt(zt,d&1),t===null)return _c(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=c.children,t=c.fallback,p?(c=i.mode,p=i.child,M={mode:"hidden",children:M},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=M):p=Xo(M,c,0,null),t=Ur(t,c,a,null),p.return=i,t.return=i,p.sibling=t,i.child=p,i.child.memoizedState=Xc(a),i.memoizedState=Wc,t):$c(i,M));if(d=t.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return F0(t,i,M,c,I,d,a);if(p){p=c.fallback,M=i.mode,d=t.child,I=d.sibling;var B={mode:"hidden",children:c.children};return(M&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=B,i.deletions=null):(c=ur(d,B),c.subtreeFlags=d.subtreeFlags&14680064),I!==null?p=ur(I,p):(p=Ur(p,M,a,null),p.flags|=2),p.return=i,c.return=i,c.sibling=p,i.child=c,c=p,p=i.child,M=t.child.memoizedState,M=M===null?Xc(a):{baseLanes:M.baseLanes|a,cachePool:null,transitions:M.transitions},p.memoizedState=M,p.childLanes=t.childLanes&~a,i.memoizedState=Wc,c}return p=t.child,t=p.sibling,c=ur(p,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,t!==null&&(a=i.deletions,a===null?(i.deletions=[t],i.flags|=16):a.push(t)),i.child=c,i.memoizedState=null,c}function $c(t,i){return i=Xo({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Lo(t,i,a,c){return c!==null&&yc(c),hs(i,t.child,null,a),t=$c(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function F0(t,i,a,c,d,p,M){if(a)return i.flags&256?(i.flags&=-257,c=Hc(Error(n(422))),Lo(t,i,M,c)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(p=c.fallback,d=i.mode,c=Xo({mode:"visible",children:c.children},d,0,null),p=Ur(p,d,M,null),p.flags|=2,c.return=i,p.return=i,c.sibling=p,i.child=c,(i.mode&1)!==0&&hs(i,t.child,null,M),i.child.memoizedState=Xc(M),i.memoizedState=Wc,p);if((i.mode&1)===0)return Lo(t,i,M,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var I=c.dgst;return c=I,p=Error(n(419)),c=Hc(p,c,void 0),Lo(t,i,M,c)}if(I=(M&t.childLanes)!==0,Cn||I){if(c=rn,c!==null){switch(M&-M){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|M))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,Ci(t,d),ri(c,t,d,-1))}return cu(),c=Hc(Error(n(421))),Lo(t,i,M,c)}return d.data==="$?"?(i.flags|=128,i.child=t.child,i=W0.bind(null,t),d._reactRetry=i,null):(t=p.treeContext,On=Ji(d.nextSibling),kn=i,Ot=!0,ei=null,t!==null&&(jn[Gn++]=bi,jn[Gn++]=Ai,jn[Gn++]=Ar,bi=t.id,Ai=t.overflow,Ar=i),i=$c(i,c.children),i.flags|=4096,i)}function Yh(t,i,a){t.lanes|=i;var c=t.alternate;c!==null&&(c.lanes|=i),wc(t.return,i,a)}function Yc(t,i,a,c,d){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=d)}function qh(t,i,a){var c=i.pendingProps,d=c.revealOrder,p=c.tail;if(En(t,i,c.children,a),c=zt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Yh(t,a,i);else if(t.tag===19)Yh(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}c&=1}if(Lt(zt,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)t=a.alternate,t!==null&&bo(t)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Yc(i,!1,d,a,p);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&bo(t)===null){i.child=d;break}t=d.sibling,d.sibling=a,a=d,d=t}Yc(i,!0,a,null,p);break;case"together":Yc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Do(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Ni(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),Fr|=i.lanes,(a&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,a=ur(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=ur(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function L0(t,i,a){switch(i.tag){case 3:Wh(i),fs();break;case 5:ch(i);break;case 1:An(i.type)&&go(i);break;case 4:Ac(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;Lt(So,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Lt(zt,zt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?$h(t,i,a):(Lt(zt,zt.current&1),t=Ni(t,i,a),t!==null?t.sibling:null);Lt(zt,zt.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(t.flags&128)!==0){if(c)return qh(t,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Lt(zt,zt.current),c)break;return null;case 22:case 23:return i.lanes=0,Vh(t,i,a)}return Ni(t,i,a)}var Kh,qc,Zh,Qh;Kh=function(t,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},qc=function(){},Zh=function(t,i,a,c){var d=t.memoizedProps;if(d!==c){t=i.stateNode,Nr(gi.current);var p=null;switch(a){case"input":d=H(t,d),c=H(t,c),p=[];break;case"select":d=le({},d,{value:void 0}),c=le({},c,{value:void 0}),p=[];break;case"textarea":d=w(t,d),c=w(t,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(t.onclick=ho)}ht(a,c);var M;a=null;for(ne in d)if(!c.hasOwnProperty(ne)&&d.hasOwnProperty(ne)&&d[ne]!=null)if(ne==="style"){var I=d[ne];for(M in I)I.hasOwnProperty(M)&&(a||(a={}),a[M]="")}else ne!=="dangerouslySetInnerHTML"&&ne!=="children"&&ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&ne!=="autoFocus"&&(o.hasOwnProperty(ne)?p||(p=[]):(p=p||[]).push(ne,null));for(ne in c){var B=c[ne];if(I=d!=null?d[ne]:void 0,c.hasOwnProperty(ne)&&B!==I&&(B!=null||I!=null))if(ne==="style")if(I){for(M in I)!I.hasOwnProperty(M)||B&&B.hasOwnProperty(M)||(a||(a={}),a[M]="");for(M in B)B.hasOwnProperty(M)&&I[M]!==B[M]&&(a||(a={}),a[M]=B[M])}else a||(p||(p=[]),p.push(ne,a)),a=B;else ne==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,I=I?I.__html:void 0,B!=null&&I!==B&&(p=p||[]).push(ne,B)):ne==="children"?typeof B!="string"&&typeof B!="number"||(p=p||[]).push(ne,""+B):ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&(o.hasOwnProperty(ne)?(B!=null&&ne==="onScroll"&&It("scroll",t),p||I===B||(p=[])):(p=p||[]).push(ne,B))}a&&(p=p||[]).push("style",a);var ne=p;(i.updateQueue=ne)&&(i.flags|=4)}},Qh=function(t,i,a,c){a!==c&&(i.flags|=4)};function Ea(t,i){if(!Ot)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function pn(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,c=0;if(i)for(var d=t.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=c,t.childLanes=a,i}function D0(t,i,a){var c=i.pendingProps;switch(xc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pn(i),null;case 1:return An(i.type)&&mo(),pn(i),null;case 3:return c=i.stateNode,gs(),Ut(bn),Ut(fn),Nc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(t===null||t.child===null)&&(yo(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ei!==null&&(au(ei),ei=null))),qc(t,i),pn(i),null;case 5:Cc(i);var d=Nr(ga.current);if(a=i.type,t!==null&&i.stateNode!=null)Zh(t,i,a,c,d),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(n(166));return pn(i),null}if(t=Nr(gi.current),yo(i)){c=i.stateNode,a=i.type;var p=i.memoizedProps;switch(c[mi]=i,c[da]=p,t=(i.mode&1)!==0,a){case"dialog":It("cancel",c),It("close",c);break;case"iframe":case"object":case"embed":It("load",c);break;case"video":case"audio":for(d=0;d<la.length;d++)It(la[d],c);break;case"source":It("error",c);break;case"img":case"image":case"link":It("error",c),It("load",c);break;case"details":It("toggle",c);break;case"input":vn(c,p),It("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},It("invalid",c);break;case"textarea":Z(c,p),It("invalid",c)}ht(a,p),d=null;for(var M in p)if(p.hasOwnProperty(M)){var I=p[M];M==="children"?typeof I=="string"?c.textContent!==I&&(p.suppressHydrationWarning!==!0&&fo(c.textContent,I,t),d=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(p.suppressHydrationWarning!==!0&&fo(c.textContent,I,t),d=["children",""+I]):o.hasOwnProperty(M)&&I!=null&&M==="onScroll"&&It("scroll",c)}switch(a){case"input":Pt(c),Ye(c,p,!0);break;case"textarea":Pt(c),xe(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=ho)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{M=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=de(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof c.is=="string"?t=M.createElement(a,{is:c.is}):(t=M.createElement(a),a==="select"&&(M=t,c.multiple?M.multiple=!0:c.size&&(M.size=c.size))):t=M.createElementNS(t,a),t[mi]=i,t[da]=c,Kh(t,i,!1,!1),i.stateNode=t;e:{switch(M=rt(a,c),a){case"dialog":It("cancel",t),It("close",t),d=c;break;case"iframe":case"object":case"embed":It("load",t),d=c;break;case"video":case"audio":for(d=0;d<la.length;d++)It(la[d],t);d=c;break;case"source":It("error",t),d=c;break;case"img":case"image":case"link":It("error",t),It("load",t),d=c;break;case"details":It("toggle",t),d=c;break;case"input":vn(t,c),d=H(t,c),It("invalid",t);break;case"option":d=c;break;case"select":t._wrapperState={wasMultiple:!!c.multiple},d=le({},c,{value:void 0}),It("invalid",t);break;case"textarea":Z(t,c),d=w(t,c),It("invalid",t);break;default:d=c}ht(a,d),I=d;for(p in I)if(I.hasOwnProperty(p)){var B=I[p];p==="style"?et(t,B):p==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&Ie(t,B)):p==="children"?typeof B=="string"?(a!=="textarea"||B!=="")&&dt(t,B):typeof B=="number"&&dt(t,""+B):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?B!=null&&p==="onScroll"&&It("scroll",t):B!=null&&P(t,p,B,M))}switch(a){case"input":Pt(t),Ye(t,c,!1);break;case"textarea":Pt(t),xe(t);break;case"option":c.value!=null&&t.setAttribute("value",""+Te(c.value));break;case"select":t.multiple=!!c.multiple,p=c.value,p!=null?F(t,!!c.multiple,p,!1):c.defaultValue!=null&&F(t,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=ho)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return pn(i),null;case 6:if(t&&i.stateNode!=null)Qh(t,i,t.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(n(166));if(a=Nr(ga.current),Nr(gi.current),yo(i)){if(c=i.stateNode,a=i.memoizedProps,c[mi]=i,(p=c.nodeValue!==a)&&(t=kn,t!==null))switch(t.tag){case 3:fo(c.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&fo(c.nodeValue,a,(t.mode&1)!==0)}p&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[mi]=i,i.stateNode=c}return pn(i),null;case 13:if(Ut(zt),c=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ot&&On!==null&&(i.mode&1)!==0&&(i.flags&128)===0)th(),fs(),i.flags|=98560,p=!1;else if(p=yo(i),c!==null&&c.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[mi]=i}else fs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;pn(i),p=!1}else ei!==null&&(au(ei),ei=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(t!==null&&t.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(zt.current&1)!==0?Zt===0&&(Zt=3):cu())),i.updateQueue!==null&&(i.flags|=4),pn(i),null);case 4:return gs(),qc(t,i),t===null&&ca(i.stateNode.containerInfo),pn(i),null;case 10:return Mc(i.type._context),pn(i),null;case 17:return An(i.type)&&mo(),pn(i),null;case 19:if(Ut(zt),p=i.memoizedState,p===null)return pn(i),null;if(c=(i.flags&128)!==0,M=p.rendering,M===null)if(c)Ea(p,!1);else{if(Zt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(M=bo(t),M!==null){for(i.flags|=128,Ea(p,!1),c=M.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)p=a,t=c,p.flags&=14680066,M=p.alternate,M===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=M.childLanes,p.lanes=M.lanes,p.child=M.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=M.memoizedProps,p.memoizedState=M.memoizedState,p.updateQueue=M.updateQueue,p.type=M.type,t=M.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return Lt(zt,zt.current&1|2),i.child}t=t.sibling}p.tail!==null&&q()>ys&&(i.flags|=128,c=!0,Ea(p,!1),i.lanes=4194304)}else{if(!c)if(t=bo(M),t!==null){if(i.flags|=128,c=!0,a=t.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ea(p,!0),p.tail===null&&p.tailMode==="hidden"&&!M.alternate&&!Ot)return pn(i),null}else 2*q()-p.renderingStartTime>ys&&a!==1073741824&&(i.flags|=128,c=!0,Ea(p,!1),i.lanes=4194304);p.isBackwards?(M.sibling=i.child,i.child=M):(a=p.last,a!==null?a.sibling=M:i.child=M,p.last=M)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=q(),i.sibling=null,a=zt.current,Lt(zt,c?a&1|2:a&1),i):(pn(i),null);case 22:case 23:return lu(),c=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(zn&1073741824)!==0&&(pn(i),i.subtreeFlags&6&&(i.flags|=8192)):pn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function I0(t,i){switch(xc(i),i.tag){case 1:return An(i.type)&&mo(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return gs(),Ut(bn),Ut(fn),Nc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Cc(i),null;case 13:if(Ut(zt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));fs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Ut(zt),null;case 4:return gs(),null;case 10:return Mc(i.type._context),null;case 22:case 23:return lu(),null;case 24:return null;default:return null}}var Io=!1,mn=!1,U0=typeof WeakSet=="function"?WeakSet:Set,Ue=null;function vs(t,i){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){jt(t,i,c)}else a.current=null}function Kc(t,i,a){try{a()}catch(c){jt(t,i,c)}}var Jh=!1;function k0(t,i){if(lc=eo,t=Pf(),ec(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var M=0,I=-1,B=-1,ne=0,ve=0,ye=t,ge=null;t:for(;;){for(var Le;ye!==a||d!==0&&ye.nodeType!==3||(I=M+d),ye!==p||c!==0&&ye.nodeType!==3||(B=M+c),ye.nodeType===3&&(M+=ye.nodeValue.length),(Le=ye.firstChild)!==null;)ge=ye,ye=Le;for(;;){if(ye===t)break t;if(ge===a&&++ne===d&&(I=M),ge===p&&++ve===c&&(B=M),(Le=ye.nextSibling)!==null)break;ye=ge,ge=ye.parentNode}ye=Le}a=I===-1||B===-1?null:{start:I,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(cc={focusedElem:t,selectionRange:a},eo=!1,Ue=i;Ue!==null;)if(i=Ue,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Ue=t;else for(;Ue!==null;){i=Ue;try{var Be=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Be!==null){var Ve=Be.memoizedProps,Gt=Be.memoizedState,Y=i.stateNode,j=Y.getSnapshotBeforeUpdate(i.elementType===i.type?Ve:ti(i.type,Ve),Gt);Y.__reactInternalSnapshotBeforeUpdate=j}break;case 3:var K=i.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(we){jt(i,i.return,we)}if(t=i.sibling,t!==null){t.return=i.return,Ue=t;break}Ue=i.return}return Be=Jh,Jh=!1,Be}function Sa(t,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&t)===t){var p=d.destroy;d.destroy=void 0,p!==void 0&&Kc(i,a,p)}d=d.next}while(d!==c)}}function Uo(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&t)===t){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Zc(t){var i=t.ref;if(i!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof i=="function"?i(t):i.current=t}}function ep(t){var i=t.alternate;i!==null&&(t.alternate=null,ep(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[mi],delete i[da],delete i[hc],delete i[_0],delete i[y0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function tp(t){return t.tag===5||t.tag===3||t.tag===4}function np(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||tp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qc(t,i,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(t,i):a.insertBefore(t,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(t,a)):(i=a,i.appendChild(t)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=ho));else if(c!==4&&(t=t.child,t!==null))for(Qc(t,i,a),t=t.sibling;t!==null;)Qc(t,i,a),t=t.sibling}function Jc(t,i,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(c!==4&&(t=t.child,t!==null))for(Jc(t,i,a),t=t.sibling;t!==null;)Jc(t,i,a),t=t.sibling}var ln=null,ni=!1;function sr(t,i,a){for(a=a.child;a!==null;)ip(t,i,a),a=a.sibling}function ip(t,i,a){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(Je,a)}catch{}switch(a.tag){case 5:mn||vs(a,i);case 6:var c=ln,d=ni;ln=null,sr(t,i,a),ln=c,ni=d,ln!==null&&(ni?(t=ln,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):ln.removeChild(a.stateNode));break;case 18:ln!==null&&(ni?(t=ln,a=a.stateNode,t.nodeType===8?fc(t.parentNode,a):t.nodeType===1&&fc(t,a),ea(t)):fc(ln,a.stateNode));break;case 4:c=ln,d=ni,ln=a.stateNode.containerInfo,ni=!0,sr(t,i,a),ln=c,ni=d;break;case 0:case 11:case 14:case 15:if(!mn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,M=p.destroy;p=p.tag,M!==void 0&&((p&2)!==0||(p&4)!==0)&&Kc(a,i,M),d=d.next}while(d!==c)}sr(t,i,a);break;case 1:if(!mn&&(vs(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){jt(a,i,I)}sr(t,i,a);break;case 21:sr(t,i,a);break;case 22:a.mode&1?(mn=(c=mn)||a.memoizedState!==null,sr(t,i,a),mn=c):sr(t,i,a);break;default:sr(t,i,a)}}function rp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new U0),i.forEach(function(c){var d=X0.bind(null,t,c);a.has(c)||(a.add(c),c.then(d,d))})}}function ii(t,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var p=t,M=i,I=M;e:for(;I!==null;){switch(I.tag){case 5:ln=I.stateNode,ni=!1;break e;case 3:ln=I.stateNode.containerInfo,ni=!0;break e;case 4:ln=I.stateNode.containerInfo,ni=!0;break e}I=I.return}if(ln===null)throw Error(n(160));ip(p,M,d),ln=null,ni=!1;var B=d.alternate;B!==null&&(B.return=null),d.return=null}catch(ne){jt(d,i,ne)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)sp(i,t),i=i.sibling}function sp(t,i){var a=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ii(i,t),vi(t),c&4){try{Sa(3,t,t.return),Uo(3,t)}catch(Ve){jt(t,t.return,Ve)}try{Sa(5,t,t.return)}catch(Ve){jt(t,t.return,Ve)}}break;case 1:ii(i,t),vi(t),c&512&&a!==null&&vs(a,a.return);break;case 5:if(ii(i,t),vi(t),c&512&&a!==null&&vs(a,a.return),t.flags&32){var d=t.stateNode;try{dt(d,"")}catch(Ve){jt(t,t.return,Ve)}}if(c&4&&(d=t.stateNode,d!=null)){var p=t.memoizedProps,M=a!==null?a.memoizedProps:p,I=t.type,B=t.updateQueue;if(t.updateQueue=null,B!==null)try{I==="input"&&p.type==="radio"&&p.name!=null&&mt(d,p),rt(I,M);var ne=rt(I,p);for(M=0;M<B.length;M+=2){var ve=B[M],ye=B[M+1];ve==="style"?et(d,ye):ve==="dangerouslySetInnerHTML"?Ie(d,ye):ve==="children"?dt(d,ye):P(d,ve,ye,ne)}switch(I){case"input":ft(d,p);break;case"textarea":me(d,p);break;case"select":var ge=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var Le=p.value;Le!=null?F(d,!!p.multiple,Le,!1):ge!==!!p.multiple&&(p.defaultValue!=null?F(d,!!p.multiple,p.defaultValue,!0):F(d,!!p.multiple,p.multiple?[]:"",!1))}d[da]=p}catch(Ve){jt(t,t.return,Ve)}}break;case 6:if(ii(i,t),vi(t),c&4){if(t.stateNode===null)throw Error(n(162));d=t.stateNode,p=t.memoizedProps;try{d.nodeValue=p}catch(Ve){jt(t,t.return,Ve)}}break;case 3:if(ii(i,t),vi(t),c&4&&a!==null&&a.memoizedState.isDehydrated)try{ea(i.containerInfo)}catch(Ve){jt(t,t.return,Ve)}break;case 4:ii(i,t),vi(t);break;case 13:ii(i,t),vi(t),d=t.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(nu=q())),c&4&&rp(t);break;case 22:if(ve=a!==null&&a.memoizedState!==null,t.mode&1?(mn=(ne=mn)||ve,ii(i,t),mn=ne):ii(i,t),vi(t),c&8192){if(ne=t.memoizedState!==null,(t.stateNode.isHidden=ne)&&!ve&&(t.mode&1)!==0)for(Ue=t,ve=t.child;ve!==null;){for(ye=Ue=ve;Ue!==null;){switch(ge=Ue,Le=ge.child,ge.tag){case 0:case 11:case 14:case 15:Sa(4,ge,ge.return);break;case 1:vs(ge,ge.return);var Be=ge.stateNode;if(typeof Be.componentWillUnmount=="function"){c=ge,a=ge.return;try{i=c,Be.props=i.memoizedProps,Be.state=i.memoizedState,Be.componentWillUnmount()}catch(Ve){jt(c,a,Ve)}}break;case 5:vs(ge,ge.return);break;case 22:if(ge.memoizedState!==null){lp(ye);continue}}Le!==null?(Le.return=ge,Ue=Le):lp(ye)}ve=ve.sibling}e:for(ve=null,ye=t;;){if(ye.tag===5){if(ve===null){ve=ye;try{d=ye.stateNode,ne?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(I=ye.stateNode,B=ye.memoizedProps.style,M=B!=null&&B.hasOwnProperty("display")?B.display:null,I.style.display=Ke("display",M))}catch(Ve){jt(t,t.return,Ve)}}}else if(ye.tag===6){if(ve===null)try{ye.stateNode.nodeValue=ne?"":ye.memoizedProps}catch(Ve){jt(t,t.return,Ve)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===t)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===t)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===t)break e;ve===ye&&(ve=null),ye=ye.return}ve===ye&&(ve=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:ii(i,t),vi(t),c&4&&rp(t);break;case 21:break;default:ii(i,t),vi(t)}}function vi(t){var i=t.flags;if(i&2){try{e:{for(var a=t.return;a!==null;){if(tp(a)){var c=a;break e}a=a.return}throw Error(n(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(dt(d,""),c.flags&=-33);var p=np(t);Jc(t,p,d);break;case 3:case 4:var M=c.stateNode.containerInfo,I=np(t);Qc(t,I,M);break;default:throw Error(n(161))}}catch(B){jt(t,t.return,B)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function O0(t,i,a){Ue=t,ap(t)}function ap(t,i,a){for(var c=(t.mode&1)!==0;Ue!==null;){var d=Ue,p=d.child;if(d.tag===22&&c){var M=d.memoizedState!==null||Io;if(!M){var I=d.alternate,B=I!==null&&I.memoizedState!==null||mn;I=Io;var ne=mn;if(Io=M,(mn=B)&&!ne)for(Ue=d;Ue!==null;)M=Ue,B=M.child,M.tag===22&&M.memoizedState!==null?cp(d):B!==null?(B.return=M,Ue=B):cp(d);for(;p!==null;)Ue=p,ap(p),p=p.sibling;Ue=d,Io=I,mn=ne}op(t)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,Ue=p):op(t)}}function op(t){for(;Ue!==null;){var i=Ue;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:mn||Uo(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!mn)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:ti(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&lh(i,p,c);break;case 3:var M=i.updateQueue;if(M!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}lh(i,M,a)}break;case 5:var I=i.stateNode;if(a===null&&i.flags&4){a=I;var B=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&a.focus();break;case"img":B.src&&(a.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ne=i.alternate;if(ne!==null){var ve=ne.memoizedState;if(ve!==null){var ye=ve.dehydrated;ye!==null&&ea(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}mn||i.flags&512&&Zc(i)}catch(ge){jt(i,i.return,ge)}}if(i===t){Ue=null;break}if(a=i.sibling,a!==null){a.return=i.return,Ue=a;break}Ue=i.return}}function lp(t){for(;Ue!==null;){var i=Ue;if(i===t){Ue=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Ue=a;break}Ue=i.return}}function cp(t){for(;Ue!==null;){var i=Ue;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Uo(4,i)}catch(B){jt(i,a,B)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(B){jt(i,d,B)}}var p=i.return;try{Zc(i)}catch(B){jt(i,p,B)}break;case 5:var M=i.return;try{Zc(i)}catch(B){jt(i,M,B)}}}catch(B){jt(i,i.return,B)}if(i===t){Ue=null;break}var I=i.sibling;if(I!==null){I.return=i.return,Ue=I;break}Ue=i.return}}var z0=Math.ceil,ko=N.ReactCurrentDispatcher,eu=N.ReactCurrentOwner,$n=N.ReactCurrentBatchConfig,St=0,rn=null,$t=null,cn=0,zn=0,_s=er(0),Zt=0,Ma=null,Fr=0,Oo=0,tu=0,wa=null,Rn=null,nu=0,ys=1/0,Pi=null,zo=!1,iu=null,ar=null,Bo=!1,or=null,Ho=0,Ta=0,ru=null,Vo=-1,jo=0;function Sn(){return(St&6)!==0?q():Vo!==-1?Vo:Vo=q()}function lr(t){return(t.mode&1)===0?1:(St&2)!==0&&cn!==0?cn&-cn:S0.transition!==null?(jo===0&&(jo=Nt()),jo):(t=Et,t!==0||(t=window.event,t=t===void 0?16:df(t.type)),t)}function ri(t,i,a,c){if(50<Ta)throw Ta=0,ru=null,Error(n(185));en(t,a,c),((St&2)===0||t!==rn)&&(t===rn&&((St&2)===0&&(Oo|=a),Zt===4&&cr(t,cn)),Nn(t,c),a===1&&St===0&&(i.mode&1)===0&&(ys=q()+500,xo&&nr()))}function Nn(t,i){var a=t.callbackNode;yn(t,i);var c=un(t,t===rn?cn:0);if(c===0)a!==null&&A(a),t.callbackNode=null,t.callbackPriority=0;else if(i=c&-c,t.callbackPriority!==i){if(a!=null&&A(a),i===1)t.tag===0?E0(dp.bind(null,t)):Kf(dp.bind(null,t)),x0(function(){(St&6)===0&&nr()}),a=null;else{switch(pi(c)){case 1:a=Ee;break;case 4:a=Ce;break;case 16:a=Fe;break;case 536870912:a=tt;break;default:a=Fe}a=_p(a,up.bind(null,t))}t.callbackPriority=i,t.callbackNode=a}}function up(t,i){if(Vo=-1,jo=0,(St&6)!==0)throw Error(n(327));var a=t.callbackNode;if(Es()&&t.callbackNode!==a)return null;var c=un(t,t===rn?cn:0);if(c===0)return null;if((c&30)!==0||(c&t.expiredLanes)!==0||i)i=Go(t,c);else{i=c;var d=St;St|=2;var p=hp();(rn!==t||cn!==i)&&(Pi=null,ys=q()+500,Dr(t,i));do try{V0();break}catch(I){fp(t,I)}while(!0);Sc(),ko.current=p,St=d,$t!==null?i=0:(rn=null,cn=0,i=Zt)}if(i!==0){if(i===2&&(d=Mi(t),d!==0&&(c=d,i=su(t,d))),i===1)throw a=Ma,Dr(t,0),cr(t,c),Nn(t,q()),a;if(i===6)cr(t,c);else{if(d=t.current.alternate,(c&30)===0&&!B0(d)&&(i=Go(t,c),i===2&&(p=Mi(t),p!==0&&(c=p,i=su(t,p))),i===1))throw a=Ma,Dr(t,0),cr(t,c),Nn(t,q()),a;switch(t.finishedWork=d,t.finishedLanes=c,i){case 0:case 1:throw Error(n(345));case 2:Ir(t,Rn,Pi);break;case 3:if(cr(t,c),(c&130023424)===c&&(i=nu+500-q(),10<i)){if(un(t,0)!==0)break;if(d=t.suspendedLanes,(d&c)!==c){Sn(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=dc(Ir.bind(null,t,Rn,Pi),i);break}Ir(t,Rn,Pi);break;case 4:if(cr(t,c),(c&4194240)===c)break;for(i=t.eventTimes,d=-1;0<c;){var M=31-at(c);p=1<<M,M=i[M],M>d&&(d=M),c&=~p}if(c=d,c=q()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*z0(c/1960))-c,10<c){t.timeoutHandle=dc(Ir.bind(null,t,Rn,Pi),c);break}Ir(t,Rn,Pi);break;case 5:Ir(t,Rn,Pi);break;default:throw Error(n(329))}}}return Nn(t,q()),t.callbackNode===a?up.bind(null,t):null}function su(t,i){var a=wa;return t.current.memoizedState.isDehydrated&&(Dr(t,i).flags|=256),t=Go(t,i),t!==2&&(i=Rn,Rn=a,i!==null&&au(i)),t}function au(t){Rn===null?Rn=t:Rn.push.apply(Rn,t)}function B0(t){for(var i=t;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],p=d.getSnapshot;d=d.value;try{if(!Jn(p(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function cr(t,i){for(i&=~tu,i&=~Oo,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var a=31-at(i),c=1<<a;t[a]=-1,i&=~c}}function dp(t){if((St&6)!==0)throw Error(n(327));Es();var i=un(t,0);if((i&1)===0)return Nn(t,q()),null;var a=Go(t,i);if(t.tag!==0&&a===2){var c=Mi(t);c!==0&&(i=c,a=su(t,c))}if(a===1)throw a=Ma,Dr(t,0),cr(t,i),Nn(t,q()),a;if(a===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Ir(t,Rn,Pi),Nn(t,q()),null}function ou(t,i){var a=St;St|=1;try{return t(i)}finally{St=a,St===0&&(ys=q()+500,xo&&nr())}}function Lr(t){or!==null&&or.tag===0&&(St&6)===0&&Es();var i=St;St|=1;var a=$n.transition,c=Et;try{if($n.transition=null,Et=1,t)return t()}finally{Et=c,$n.transition=a,St=i,(St&6)===0&&nr()}}function lu(){zn=_s.current,Ut(_s)}function Dr(t,i){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,g0(a)),$t!==null)for(a=$t.return;a!==null;){var c=a;switch(xc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&mo();break;case 3:gs(),Ut(bn),Ut(fn),Nc();break;case 5:Cc(c);break;case 4:gs();break;case 13:Ut(zt);break;case 19:Ut(zt);break;case 10:Mc(c.type._context);break;case 22:case 23:lu()}a=a.return}if(rn=t,$t=t=ur(t.current,null),cn=zn=i,Zt=0,Ma=null,tu=Oo=Fr=0,Rn=wa=null,Rr!==null){for(i=0;i<Rr.length;i++)if(a=Rr[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,p=a.pending;if(p!==null){var M=p.next;p.next=d,c.next=M}a.pending=c}Rr=null}return t}function fp(t,i){do{var a=$t;try{if(Sc(),Ao.current=Po,Co){for(var c=Bt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Co=!1}if(Pr=0,nn=Kt=Bt=null,xa=!1,va=0,eu.current=null,a===null||a.return===null){Zt=1,Ma=i,$t=null;break}e:{var p=t,M=a.return,I=a,B=i;if(i=cn,I.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var ne=B,ve=I,ye=ve.tag;if((ve.mode&1)===0&&(ye===0||ye===11||ye===15)){var ge=ve.alternate;ge?(ve.updateQueue=ge.updateQueue,ve.memoizedState=ge.memoizedState,ve.lanes=ge.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var Le=kh(M);if(Le!==null){Le.flags&=-257,Oh(Le,M,I,p,i),Le.mode&1&&Uh(p,ne,i),i=Le,B=ne;var Be=i.updateQueue;if(Be===null){var Ve=new Set;Ve.add(B),i.updateQueue=Ve}else Be.add(B);break e}else{if((i&1)===0){Uh(p,ne,i),cu();break e}B=Error(n(426))}}else if(Ot&&I.mode&1){var Gt=kh(M);if(Gt!==null){(Gt.flags&65536)===0&&(Gt.flags|=256),Oh(Gt,M,I,p,i),yc(xs(B,I));break e}}p=B=xs(B,I),Zt!==4&&(Zt=2),wa===null?wa=[p]:wa.push(p),p=M;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var Y=Dh(p,B,i);oh(p,Y);break e;case 1:I=B;var j=p.type,K=p.stateNode;if((p.flags&128)===0&&(typeof j.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(ar===null||!ar.has(K)))){p.flags|=65536,i&=-i,p.lanes|=i;var we=Ih(p,I,i);oh(p,we);break e}}p=p.return}while(p!==null)}mp(a)}catch(Xe){i=Xe,$t===a&&a!==null&&($t=a=a.return);continue}break}while(!0)}function hp(){var t=ko.current;return ko.current=Po,t===null?Po:t}function cu(){(Zt===0||Zt===3||Zt===2)&&(Zt=4),rn===null||(Fr&268435455)===0&&(Oo&268435455)===0||cr(rn,cn)}function Go(t,i){var a=St;St|=2;var c=hp();(rn!==t||cn!==i)&&(Pi=null,Dr(t,i));do try{H0();break}catch(d){fp(t,d)}while(!0);if(Sc(),St=a,ko.current=c,$t!==null)throw Error(n(261));return rn=null,cn=0,Zt}function H0(){for(;$t!==null;)pp($t)}function V0(){for(;$t!==null&&!X();)pp($t)}function pp(t){var i=vp(t.alternate,t,zn);t.memoizedProps=t.pendingProps,i===null?mp(t):$t=i,eu.current=null}function mp(t){var i=t;do{var a=i.alternate;if(t=i.return,(i.flags&32768)===0){if(a=D0(a,i,zn),a!==null){$t=a;return}}else{if(a=I0(a,i),a!==null){a.flags&=32767,$t=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Zt=6,$t=null;return}}if(i=i.sibling,i!==null){$t=i;return}$t=i=t}while(i!==null);Zt===0&&(Zt=5)}function Ir(t,i,a){var c=Et,d=$n.transition;try{$n.transition=null,Et=1,j0(t,i,a,c)}finally{$n.transition=d,Et=c}return null}function j0(t,i,a,c){do Es();while(or!==null);if((St&6)!==0)throw Error(n(327));a=t.finishedWork;var d=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=a.lanes|a.childLanes;if(on(t,p),t===rn&&($t=rn=null,cn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Bo||(Bo=!0,_p(Fe,function(){return Es(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=$n.transition,$n.transition=null;var M=Et;Et=1;var I=St;St|=4,eu.current=null,k0(t,a),sp(a,t),c0(cc),eo=!!lc,cc=lc=null,t.current=a,O0(a),ee(),St=I,Et=M,$n.transition=p}else t.current=a;if(Bo&&(Bo=!1,or=t,Ho=d),p=t.pendingLanes,p===0&&(ar=null),xt(a.stateNode),Nn(t,q()),i!==null)for(c=t.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(zo)throw zo=!1,t=iu,iu=null,t;return(Ho&1)!==0&&t.tag!==0&&Es(),p=t.pendingLanes,(p&1)!==0?t===ru?Ta++:(Ta=0,ru=t):Ta=0,nr(),null}function Es(){if(or!==null){var t=pi(Ho),i=$n.transition,a=Et;try{if($n.transition=null,Et=16>t?16:t,or===null)var c=!1;else{if(t=or,or=null,Ho=0,(St&6)!==0)throw Error(n(331));var d=St;for(St|=4,Ue=t.current;Ue!==null;){var p=Ue,M=p.child;if((Ue.flags&16)!==0){var I=p.deletions;if(I!==null){for(var B=0;B<I.length;B++){var ne=I[B];for(Ue=ne;Ue!==null;){var ve=Ue;switch(ve.tag){case 0:case 11:case 15:Sa(8,ve,p)}var ye=ve.child;if(ye!==null)ye.return=ve,Ue=ye;else for(;Ue!==null;){ve=Ue;var ge=ve.sibling,Le=ve.return;if(ep(ve),ve===ne){Ue=null;break}if(ge!==null){ge.return=Le,Ue=ge;break}Ue=Le}}}var Be=p.alternate;if(Be!==null){var Ve=Be.child;if(Ve!==null){Be.child=null;do{var Gt=Ve.sibling;Ve.sibling=null,Ve=Gt}while(Ve!==null)}}Ue=p}}if((p.subtreeFlags&2064)!==0&&M!==null)M.return=p,Ue=M;else e:for(;Ue!==null;){if(p=Ue,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Sa(9,p,p.return)}var Y=p.sibling;if(Y!==null){Y.return=p.return,Ue=Y;break e}Ue=p.return}}var j=t.current;for(Ue=j;Ue!==null;){M=Ue;var K=M.child;if((M.subtreeFlags&2064)!==0&&K!==null)K.return=M,Ue=K;else e:for(M=j;Ue!==null;){if(I=Ue,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Uo(9,I)}}catch(Xe){jt(I,I.return,Xe)}if(I===M){Ue=null;break e}var we=I.sibling;if(we!==null){we.return=I.return,Ue=we;break e}Ue=I.return}}if(St=d,nr(),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(Je,t)}catch{}c=!0}return c}finally{Et=a,$n.transition=i}}return!1}function gp(t,i,a){i=xs(a,i),i=Dh(t,i,1),t=rr(t,i,1),i=Sn(),t!==null&&(en(t,1,i),Nn(t,i))}function jt(t,i,a){if(t.tag===3)gp(t,t,a);else for(;i!==null;){if(i.tag===3){gp(i,t,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ar===null||!ar.has(c))){t=xs(a,t),t=Ih(i,t,1),i=rr(i,t,1),t=Sn(),i!==null&&(en(i,1,t),Nn(i,t));break}}i=i.return}}function G0(t,i,a){var c=t.pingCache;c!==null&&c.delete(i),i=Sn(),t.pingedLanes|=t.suspendedLanes&a,rn===t&&(cn&a)===a&&(Zt===4||Zt===3&&(cn&130023424)===cn&&500>q()-nu?Dr(t,0):tu|=a),Nn(t,i)}function xp(t,i){i===0&&((t.mode&1)===0?i=1:(i=Vt,Vt<<=1,(Vt&130023424)===0&&(Vt=4194304)));var a=Sn();t=Ci(t,i),t!==null&&(en(t,i,a),Nn(t,a))}function W0(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),xp(t,a)}function X0(t,i){var a=0;switch(t.tag){case 13:var c=t.stateNode,d=t.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=t.stateNode;break;default:throw Error(n(314))}c!==null&&c.delete(i),xp(t,a)}var vp;vp=function(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps||bn.current)Cn=!0;else{if((t.lanes&a)===0&&(i.flags&128)===0)return Cn=!1,L0(t,i,a);Cn=(t.flags&131072)!==0}else Cn=!1,Ot&&(i.flags&1048576)!==0&&Zf(i,_o,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Do(t,i),t=i.pendingProps;var d=cs(i,fn.current);ms(i,a),d=Lc(null,i,c,t,d,a);var p=Dc();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,An(c)?(p=!0,go(i)):p=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,bc(i),d.updater=Fo,i.stateNode=d,d._reactInternals=i,Bc(i,c,t,a),i=Gc(null,i,c,!0,p,a)):(i.tag=0,Ot&&p&&gc(i),En(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Do(t,i),t=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=Y0(c),t=ti(c,t),d){case 0:i=jc(null,i,c,t,a);break e;case 1:i=Gh(null,i,c,t,a);break e;case 11:i=zh(null,i,c,t,a);break e;case 14:i=Bh(null,i,c,ti(c.type,t),a);break e}throw Error(n(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:ti(c,d),jc(t,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:ti(c,d),Gh(t,i,c,d,a);case 3:e:{if(Wh(i),t===null)throw Error(n(387));c=i.pendingProps,p=i.memoizedState,d=p.element,ah(t,i),To(i,c,null,a);var M=i.memoizedState;if(c=M.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){d=xs(Error(n(423)),i),i=Xh(t,i,c,a,d);break e}else if(c!==d){d=xs(Error(n(424)),i),i=Xh(t,i,c,a,d);break e}else for(On=Ji(i.stateNode.containerInfo.firstChild),kn=i,Ot=!0,ei=null,a=rh(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(fs(),c===d){i=Ni(t,i,a);break e}En(t,i,c,a)}i=i.child}return i;case 5:return ch(i),t===null&&_c(i),c=i.type,d=i.pendingProps,p=t!==null?t.memoizedProps:null,M=d.children,uc(c,d)?M=null:p!==null&&uc(c,p)&&(i.flags|=32),jh(t,i),En(t,i,M,a),i.child;case 6:return t===null&&_c(i),null;case 13:return $h(t,i,a);case 4:return Ac(i,i.stateNode.containerInfo),c=i.pendingProps,t===null?i.child=hs(i,null,c,a):En(t,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:ti(c,d),zh(t,i,c,d,a);case 7:return En(t,i,i.pendingProps,a),i.child;case 8:return En(t,i,i.pendingProps.children,a),i.child;case 12:return En(t,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,p=i.memoizedProps,M=d.value,Lt(So,c._currentValue),c._currentValue=M,p!==null)if(Jn(p.value,M)){if(p.children===d.children&&!bn.current){i=Ni(t,i,a);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var I=p.dependencies;if(I!==null){M=p.child;for(var B=I.firstContext;B!==null;){if(B.context===c){if(p.tag===1){B=Ri(-1,a&-a),B.tag=2;var ne=p.updateQueue;if(ne!==null){ne=ne.shared;var ve=ne.pending;ve===null?B.next=B:(B.next=ve.next,ve.next=B),ne.pending=B}}p.lanes|=a,B=p.alternate,B!==null&&(B.lanes|=a),wc(p.return,a,i),I.lanes|=a;break}B=B.next}}else if(p.tag===10)M=p.type===i.type?null:p.child;else if(p.tag===18){if(M=p.return,M===null)throw Error(n(341));M.lanes|=a,I=M.alternate,I!==null&&(I.lanes|=a),wc(M,a,i),M=p.sibling}else M=p.child;if(M!==null)M.return=p;else for(M=p;M!==null;){if(M===i){M=null;break}if(p=M.sibling,p!==null){p.return=M.return,M=p;break}M=M.return}p=M}En(t,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,ms(i,a),d=Wn(d),c=c(d),i.flags|=1,En(t,i,c,a),i.child;case 14:return c=i.type,d=ti(c,i.pendingProps),d=ti(c.type,d),Bh(t,i,c,d,a);case 15:return Hh(t,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:ti(c,d),Do(t,i),i.tag=1,An(c)?(t=!0,go(i)):t=!1,ms(i,a),Fh(i,c,d),Bc(i,c,d,a),Gc(null,i,c,!0,t,a);case 19:return qh(t,i,a);case 22:return Vh(t,i,a)}throw Error(n(156,i.tag))};function _p(t,i){return Za(t,i)}function $0(t,i,a,c){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(t,i,a,c){return new $0(t,i,a,c)}function uu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Y0(t){if(typeof t=="function")return uu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===re)return 11;if(t===fe)return 14}return 2}function ur(t,i){var a=t.alternate;return a===null?(a=Yn(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function Wo(t,i,a,c,d,p){var M=2;if(c=t,typeof t=="function")uu(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case D:return Ur(a.children,d,p,i);case k:M=8,d|=8;break;case R:return t=Yn(12,a,i,d|2),t.elementType=R,t.lanes=p,t;case te:return t=Yn(13,a,i,d),t.elementType=te,t.lanes=p,t;case ue:return t=Yn(19,a,i,d),t.elementType=ue,t.lanes=p,t;case oe:return Xo(a,d,p,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case b:M=10;break e;case z:M=9;break e;case re:M=11;break e;case fe:M=14;break e;case se:M=16,c=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Yn(M,a,i,d),i.elementType=t,i.type=c,i.lanes=p,i}function Ur(t,i,a,c){return t=Yn(7,t,c,i),t.lanes=a,t}function Xo(t,i,a,c){return t=Yn(22,t,c,i),t.elementType=oe,t.lanes=a,t.stateNode={isHidden:!1},t}function du(t,i,a){return t=Yn(6,t,null,i),t.lanes=a,t}function fu(t,i,a){return i=Yn(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function q0(t,i,a,c,d){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=dn(0),this.expirationTimes=dn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dn(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function hu(t,i,a,c,d,p,M,I,B){return t=new q0(t,i,a,I,B),i===1?(i=1,p===!0&&(i|=8)):i=0,p=Yn(3,null,null,i),t.current=p,p.stateNode=t,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},bc(p),t}function K0(t,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:c==null?null:""+c,children:t,containerInfo:i,implementation:a}}function yp(t){if(!t)return tr;t=t._reactInternals;e:{if(hi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(An(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var a=t.type;if(An(a))return Yf(t,a,i)}return i}function Ep(t,i,a,c,d,p,M,I,B){return t=hu(a,c,!0,t,d,p,M,I,B),t.context=yp(null),a=t.current,c=Sn(),d=lr(a),p=Ri(c,d),p.callback=i??null,rr(a,p,d),t.current.lanes=d,en(t,d,c),Nn(t,c),t}function $o(t,i,a,c){var d=i.current,p=Sn(),M=lr(d);return a=yp(a),i.context===null?i.context=a:i.pendingContext=a,i=Ri(p,M),i.payload={element:t},c=c===void 0?null:c,c!==null&&(i.callback=c),t=rr(d,i,M),t!==null&&(ri(t,d,M,p),wo(t,d,M)),M}function Yo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Sp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function pu(t,i){Sp(t,i),(t=t.alternate)&&Sp(t,i)}function Z0(){return null}var Mp=typeof reportError=="function"?reportError:function(t){console.error(t)};function mu(t){this._internalRoot=t}qo.prototype.render=mu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));$o(t,i,null,null)},qo.prototype.unmount=mu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Lr(function(){$o(null,t,null,null)}),i[wi]=null}};function qo(t){this._internalRoot=t}qo.prototype.unstable_scheduleHydration=function(t){if(t){var i=af();t={blockedOn:null,target:t,priority:i};for(var a=0;a<Ki.length&&i!==0&&i<Ki[a].priority;a++);Ki.splice(a,0,t),a===0&&cf(t)}};function gu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ko(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function wp(){}function Q0(t,i,a,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var ne=Yo(M);p.call(ne)}}var M=Ep(i,c,t,0,null,!1,!1,"",wp);return t._reactRootContainer=M,t[wi]=M.current,ca(t.nodeType===8?t.parentNode:t),Lr(),M}for(;d=t.lastChild;)t.removeChild(d);if(typeof c=="function"){var I=c;c=function(){var ne=Yo(B);I.call(ne)}}var B=hu(t,0,!1,null,null,!1,!1,"",wp);return t._reactRootContainer=B,t[wi]=B.current,ca(t.nodeType===8?t.parentNode:t),Lr(function(){$o(i,B,a,c)}),B}function Zo(t,i,a,c,d){var p=a._reactRootContainer;if(p){var M=p;if(typeof d=="function"){var I=d;d=function(){var B=Yo(M);I.call(B)}}$o(i,M,t,d)}else M=Q0(a,i,t,d,c);return Yo(M)}rf=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var a=gt(i.pendingLanes);a!==0&&(tn(i,a|1),Nn(i,q()),(St&6)===0&&(ys=q()+500,nr()))}break;case 13:Lr(function(){var c=Ci(t,1);if(c!==null){var d=Sn();ri(c,t,1,d)}}),pu(t,1)}},Hl=function(t){if(t.tag===13){var i=Ci(t,134217728);if(i!==null){var a=Sn();ri(i,t,134217728,a)}pu(t,134217728)}},sf=function(t){if(t.tag===13){var i=lr(t),a=Ci(t,i);if(a!==null){var c=Sn();ri(a,t,i,c)}pu(t,i)}},af=function(){return Et},of=function(t,i){var a=Et;try{return Et=t,i()}finally{Et=a}},Ae=function(t,i,a){switch(i){case"input":if(ft(t,a),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==t&&c.form===t.form){var d=po(c);if(!d)throw Error(n(90));Ft(c),ft(c,d)}}}break;case"textarea":me(t,a);break;case"select":i=a.value,i!=null&&F(t,!!a.multiple,i,!1)}},Dt=ou,qt=Lr;var J0={usingClientEntryPoint:!1,Events:[fa,os,po,Ne,st,ou]},ba={findFiberByHostInstance:Tr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ex={bundleType:ba.bundleType,version:ba.version,rendererPackageName:ba.rendererPackageName,rendererConfig:ba.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:N.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=qa(t),t===null?null:t.stateNode},findFiberByHostInstance:ba.findFiberByHostInstance||Z0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qo.isDisabled&&Qo.supportsFiber)try{Je=Qo.inject(ex),He=Qo}catch{}}return Pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J0,Pn.createPortal=function(t,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gu(i))throw Error(n(200));return K0(t,i,null,a)},Pn.createRoot=function(t,i){if(!gu(t))throw Error(n(299));var a=!1,c="",d=Mp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=hu(t,1,!1,null,null,a,!1,c,d),t[wi]=i.current,ca(t.nodeType===8?t.parentNode:t),new mu(i)},Pn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=qa(i),t=t===null?null:t.stateNode,t},Pn.flushSync=function(t){return Lr(t)},Pn.hydrate=function(t,i,a){if(!Ko(i))throw Error(n(200));return Zo(null,t,i,!0,a)},Pn.hydrateRoot=function(t,i,a){if(!gu(t))throw Error(n(405));var c=a!=null&&a.hydratedSources||null,d=!1,p="",M=Mp;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(M=a.onRecoverableError)),i=Ep(i,null,t,1,a??null,d,!1,p,M),t[wi]=i.current,ca(t),c)for(t=0;t<c.length;t++)a=c[t],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new qo(i)},Pn.render=function(t,i,a){if(!Ko(i))throw Error(n(200));return Zo(null,t,i,!1,a)},Pn.unmountComponentAtNode=function(t){if(!Ko(t))throw Error(n(40));return t._reactRootContainer?(Lr(function(){Zo(null,null,t,!1,function(){t._reactRootContainer=null,t[wi]=null})}),!0):!1},Pn.unstable_batchedUpdates=ou,Pn.unstable_renderSubtreeIntoContainer=function(t,i,a,c){if(!Ko(a))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Zo(t,i,a,!1,c)},Pn.version="18.3.1-next-f1338f8080-20240426",Pn}var Fp;function cx(){if(Fp)return _u.exports;Fp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),_u.exports=lx(),_u.exports}var Lp;function ux(){if(Lp)return Jo;Lp=1;var s=cx();return Jo.createRoot=s.createRoot,Jo.hydrateRoot=s.hydrateRoot,Jo}var dx=ux();const fx=Fm(dx);function hx(){const s=it.useRef(null);return it.useEffect(()=>{const e=s.current;if(!e)return;const n=e.getContext("2d");let r,o=e.width=window.innerWidth,l=e.height=window.innerHeight;const u=()=>{e&&(o=e.width=window.innerWidth,l=e.height=window.innerHeight)};window.addEventListener("resize",u);const f=window.innerWidth<768?25:55,m=[];for(let x=0;x<f;x++)m.push({x:Math.random()*o,y:Math.random()*l,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,size:Math.random()*1.8+.8,alpha:Math.random()*.4+.1});const g=()=>{n.clearRect(0,0,o,l);for(let x=0;x<m.length;x++){const _=m[x];_.x+=_.vx,_.y+=_.vy,_.x<0&&(_.x=o),_.x>o&&(_.x=0),_.y<0&&(_.y=l),_.y>l&&(_.y=0),n.beginPath(),n.arc(_.x,_.y,_.size,0,Math.PI*2),n.fillStyle=`rgba(255, 94, 14, ${_.alpha})`,n.fill();for(let y=x+1;y<m.length;y++){const S=m[y],T=_.x-S.x,C=_.y-S.y,E=Math.sqrt(T*T+C*C);E<110&&(n.beginPath(),n.moveTo(_.x,_.y),n.lineTo(S.x,S.y),n.strokeStyle=`rgba(255, 94, 14, ${.08*(1-E/110)})`,n.lineWidth=.6,n.stroke())}}r=requestAnimationFrame(g)};return g(),()=>{window.removeEventListener("resize",u),cancelAnimationFrame(r)}},[]),h.jsxs("div",{className:"fixed inset-0 pointer-events-none z-0 overflow-hidden",children:[h.jsx("div",{className:"absolute inset-0 bg-[#060709]"}),h.jsx("div",{className:"absolute inset-0 cyber-grid opacity-35"}),h.jsx("div",{className:"absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#FF5E0E]/10 via-transparent to-transparent rounded-full blur-3xl transform -translate-y-1/2 pointer-events-none"}),h.jsx("div",{className:"absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-[#FF5E0E]/08 via-transparent to-transparent rounded-full blur-3xl pointer-events-none"}),h.jsx("canvas",{ref:s,className:"absolute inset-0"})]})}function px(){const[s,e]=it.useState({x:-100,y:-100}),[n,r]=it.useState(!1),[o,l]=it.useState(!1),[u,f]=it.useState(!1);return it.useEffect(()=>{if(window.matchMedia("(pointer: coarse)").matches)return;const m=y=>{e({x:y.clientX,y:y.clientY}),u||f(!0)},g=()=>l(!0),x=()=>l(!1),_=y=>{const S=y.target;S.tagName==="BUTTON"||S.tagName==="A"||S.closest("button")||S.closest("a")||S.classList.contains("interactive-element")||S.closest(".interactive-element")?r(!0):r(!1)};return window.addEventListener("mousemove",m),window.addEventListener("mousedown",g),window.addEventListener("mouseup",x),document.addEventListener("mouseover",_),()=>{window.removeEventListener("mousemove",m),window.removeEventListener("mousedown",g),window.removeEventListener("mouseup",x),document.removeEventListener("mouseover",_)}},[u]),u?h.jsxs(h.Fragment,{children:[h.jsx("div",{className:"fixed pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF5E0E] transition-transform duration-75 ease-out custom-cursor",style:{left:`${s.x}px`,top:`${s.y}px`,width:o?"4px":"6px",height:o?"4px":"6px",boxShadow:"0 0 10px #FF5E0E"}}),h.jsx("div",{className:"fixed pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#FF5E0E]/40 transition-all duration-200 ease-out custom-cursor",style:{left:`${s.x}px`,top:`${s.y}px`,width:n?"48px":"26px",height:n?"48px":"26px",borderColor:n?"rgba(255, 94, 14, 0.9)":"rgba(255, 94, 14, 0.35)",backgroundColor:n?"rgba(255, 94, 14, 0.08)":"transparent",transform:`translate(-50%, -50%) scale(${o?.85:1})`}})]}):null}/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mx=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Lm=(...s)=>s.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var gx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx=it.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:u,...f},m)=>it.createElement("svg",{ref:m,...gx,width:e,height:e,stroke:s,strokeWidth:r?Number(n)*24/Number(e):n,className:Lm("lucide",o),...f},[...u.map(([g,x])=>it.createElement(g,x)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lt=(s,e)=>{const n=it.forwardRef(({className:r,...o},l)=>it.createElement(xx,{ref:l,iconNode:e,className:Lm(`lucide-${mx(s)}`,r),...o}));return n.displayName=`${s}`,n};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vx=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],_x=lt("Activity",vx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Ex=lt("ArrowRight",yx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sx=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],Mx=lt("ArrowUpRight",Sx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wx=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],Tx=lt("ArrowUp",wx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bx=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],Dm=lt("Award",bx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ax=[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M9 13a4.5 4.5 0 0 0 3-4",key:"10igwf"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M12 13h4",key:"1ku699"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1",key:"105ag5"}],["path",{d:"M12 8h8",key:"1lhi5i"}],["path",{d:"M16 8V5a2 2 0 0 1 2-2",key:"u6izg6"}],["circle",{cx:"16",cy:"13",r:".5",key:"ry7gng"}],["circle",{cx:"18",cy:"3",r:".5",key:"1aiba7"}],["circle",{cx:"20",cy:"21",r:".5",key:"yhc1fs"}],["circle",{cx:"20",cy:"8",r:".5",key:"1e43v0"}]],Cx=lt("BrainCircuit",Ax);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rx=[["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",key:"xs1cw7"}],["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4",key:"k3fwyw"}]],Nx=lt("Bug",Rx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px=[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]],Im=lt("Building2",Px);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Um=lt("Calendar",Fx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Dx=lt("Check",Lx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ix=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Dp=lt("CircleCheckBig",Ix);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Oa=lt("CircleCheck",Ux);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],Ox=lt("Cloud",kx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],jd=lt("CodeXml",zx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bx=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Hx=lt("Copy",Bx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]],km=lt("Cpu",Vx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],Gx=lt("Database",jx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],Ua=lt("Download",Wx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Om=lt("ExternalLink",Xx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Yx=lt("Globe",$x);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],Kx=lt("GraduationCap",qx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]],Qx=lt("HardDrive",Zx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],zm=lt("Layers",Jx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],tv=lt("Linkedin",ev);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],Bm=lt("Mail",nv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Hm=lt("MapPin",iv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],sv=lt("Menu",rv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]],Gd=lt("PanelsTopLeft",av);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],lv=lt("Phone",ov);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]],uv=lt("Radio",cv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],fv=lt("Rocket",dv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],pv=lt("Send",hv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],Vm=lt("ShieldAlert",mv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],xv=lt("ShieldCheck",gv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],jm=lt("Shield",vv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],yv=lt("Sparkles",_v);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]],Wd=lt("Terminal",Ev);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Mv=lt("TriangleAlert",Sv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Gm=lt("X",wv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Xd=lt("Zap",Tv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],Av=lt("ZoomIn",bv),wn={name:"Yogeswar S",location:"Madurai, Tamil Nadu, India",email:"yogesyogi13@gmail.com",phone:"+91 83003 44268",linkedin:"https://linkedin.com/in/yogeswar-s",linkedinHandle:"linkedin.com/in/yogeswar-s",resumePdf:"/Yogeswar_Resume.pdf",resumeDocx:"/Yogeswar_Resume.docx"},el=[{id:"01",title:"FOUNDATION",subtitle:"Diploma in Computer Engineering",institution:"KL Nagasamy Memorial Polytechnic College",period:"2022 – 2025",grade:"74% — First Class with Distinction",description:"The pivotal bedrock of my technological journey. Developed comprehensive core capabilities across low-level programming (C), modern languages (Python, Java), Relational Databases (SQL), Web Design, Computer Networks, Operating Systems, and Hardware Interfacing.",keySkills:["C","Python","Java","RDBMS / SQL","Web Design","Computer Networks","Hardware Interfacing"],icon:"Layers",color:"#FF5E0E"},{id:"02",title:"SPECIALIZATION",subtitle:"B.E. CSE (Cyber Security)",institution:"Velammal College of Engineering & Technology, Madurai",period:"2024 – 2028 (Pursuing)",grade:"Actively Pursuing Degree",description:"Deepening theoretical and applied security engineering. Focusing on network security protocols, ethical hacking methodologies, malware analysis, cryptography, secure software design, and vulnerability analysis.",keySkills:["Network Security","Malware Analysis","Cryptography","Ethical Hacking","Systems Hardening"],icon:"ShieldCheck",color:"#FF7A29"},{id:"03",title:"EXPLORATION & BUILDING",subtitle:"Web Building, Vibe Coding & AI Projects",institution:"Elysium Technologies & Independent Research",period:"2025 – Present",grade:"100% Internship Attendance & Certifications",description:"Actively designing and building modern web applications, exploring vibe coding for rapid prototyping, and building security tools like the Intelligent Malware Report Summarizer alongside embedded IoT systems.",keySkills:["Website Designing & Building","Vibe Coding","Problem Solving","Malware Summarizer","Applied ML","IoT Telemetry"],icon:"Cpu",color:"#FF9436"},{id:"04",title:"FUTURE HORIZON",subtitle:"Cybersecurity & Technology Professional",institution:"Enterprise Defense & Modern Web Architecture",period:"Continuous Evolution",grade:"Lifelong Builder & Learner",description:"Dedicated to uniting high-aesthetic web design, rapid AI-driven vibe coding, and robust cyber-secure architectures to build resilient, human-centered digital products.",keySkills:["Security Architecture","Fullstack Web Craft","Threat Intelligence","DevSecOps","Zero Trust"],icon:"Rocket",color:"#FFAE5E"}],Cv=[{id:"web-building",title:"Website Designing & Building",icon:"Globe",description:"Passionate craft of creating responsive, visually modern web applications with clean layouts, typography, and interactive flair.",skills:["Website Designing","Responsive Layouts","HTML5 & CSS3","Modern Frontend Architecture"]},{id:"vibe-coding",title:"Vibe Coding & Problem Solving",icon:"Zap",description:"Harnessing AI-assisted rapid prototyping ('vibe coding') grounded in strong algorithmic problem solving, logic decomposition, and clean engineering.",skills:["Vibe Coding","Rapid Prototyping","Problem Solving","Analytical Thinking"]},{id:"programming",title:"Programming Fundamentals",icon:"Code2",description:"Core logic, data structures, and procedural & object-oriented programming fundamentals.",skills:["C","Python","Java"]},{id:"database",title:"Database Management",icon:"Database",description:"Relational database schema modeling, queries, data normalization, and integrity.",skills:["RDBMS","SQL Queries","Relational Modeling"]},{id:"security",title:"Security & Networks",icon:"Shield",description:"TCP/IP models, OSI layers, network protocols, access control, and defense basics.",skills:["Computer Networks","Computer Security","Network Protocols","Threat Defense"]},{id:"systems",title:"Operating Systems",icon:"Terminal",description:"Kernel interactions, shell commands, process management, and system administration.",skills:["Linux","Windows"]},{id:"technology",title:"Cloud & IoT",icon:"Cloud",description:"Distributed infrastructure concepts, cloud paradigms, microcontrollers, and sensor ecosystems.",skills:["Cloud Computing","IoT (Internet of Things)"]},{id:"engineering",title:"Hardware & Multimedia",icon:"HardDrive",description:"Computer hardware assembly, peripheral diagnostics, troubleshooting, and digital media design.",skills:["Hardware & Networking","Adobe Photoshop","Multimedia Design"]}],tl=[{id:"web",name:"Web Design & Building",category:"Design & Frontend",skills:["Website Designing & Building","HTML5 / Web Architecture","Responsive Layouts & CSS3","UI/UX Aesthetic Craft"],color:"#FF5E0E",angle:0},{id:"vibe",name:"Vibe Coding & Prototyping",category:"Modern Workflows",skills:["Vibe Coding","Rapid Prototyping","AI-Assisted Development","Iterative Building"],color:"#FF7A29",angle:45},{id:"prog",name:"Programming",category:"Core Languages",skills:["Python","Java","C Language","Problem Solving Logic"],color:"#FFAE5E",angle:90},{id:"sec",name:"Cyber Security",category:"Security & Analysis",skills:["Malware Report Analysis","Computer Security","Threat Detection","Access Control"],color:"#FF4500",angle:135},{id:"net",name:"Networking",category:"Infrastructure",skills:["Computer Networks","TCP/IP Protocol Suite","Hardware & Cabling"],color:"#FF5E0E",angle:180},{id:"db",name:"Databases",category:"Data Storage",skills:["RDBMS","SQL Queries","Schema Design"],color:"#FF7A29",angle:225},{id:"cloud",name:"Cloud & Systems",category:"Environments",skills:["Cloud Computing","Linux OS","Windows Systems"],color:"#FFAE5E",angle:270},{id:"iot",name:"IoT & Hardware",category:"Embedded Tech",skills:["Internet of Things","Sensors Interfacing","GSM Telemetry"],color:"#FF5E0E",angle:315}],nl=[{id:"malware-summarizer",title:"Intelligent Malware Report Summarizer",category:"Cyber Security & Applied AI",badge:"FEATURED SECURITY PROJECT",period:"Security Analysis Project",summary:"An intelligent security tool engineered to analyze complex, raw sandbox execution logs and dynamic malware analysis reports. Automatically extracts critical Indicators of Compromise (IOCs), maps observed malicious behaviors to the MITRE ATT&CK matrix, and produces concise, actionable executive summaries with threat remediation priorities for SOC analysts.",highlights:["Parses multi-stage sandbox execution traces (API calls, process injections, registry mutations, network beacons)","Automated extraction and categorization of Indicators of Compromise (C2 IPs, malicious domains, file hashes)","Correlates identified threats with MITRE ATT&CK framework techniques (T1055 Process Injection, T1071 C2 Communication)","Synthesizes verbose technical telemetry into human-readable executive risk briefs and immediate defensive containment steps","Combines cybersecurity threat intelligence with intelligent NLP log parsing and problem-solving logic"],workflowSteps:[{step:"01",label:"Telemetry Ingestion",desc:"Ingests raw sandbox logs, process traces, and memory execution dumps."},{step:"02",label:"Heuristic Parsing",desc:"Filters noise, isolates anomalous system calls, and pulls candidate IOCs."},{step:"03",label:"MITRE Mapping",desc:"Maps suspicious tactics to MITRE ATT&CK enterprise techniques."},{step:"04",label:"Risk Scoring",desc:"Calculates overall threat severity index based on impact potential."},{step:"05",label:"Executive Summary",desc:"Dispatches concise executive summary with immediate remediation steps."}],techStack:["Python","Malware Analysis","Threat Intelligence","MITRE ATT&CK","NLP Parsing","JSON Telemetry","Cyber Defense"]},{id:"weather-sms",title:"Weather Monitoring System with SMS Alert",category:"Embedded IoT & Hardware Interfacing",badge:"DIPLOMA CAPSTONE PROJECT",period:"Final Year Diploma (2024–2025)",summary:"Designed and built an end-to-end real-time weather monitoring system that continuously captures environmental parameters (such as temperature and humidity) via sensors, processes telemetry on an embedded microcontroller, and triggers automatic GSM/SMS alerts when readings breach defined threshold limits.",highlights:["Real-time sensor telemetry acquisition for ambient temperature and relative humidity","Embedded microcontroller logic for automated threshold limit evaluation","Integrated GSM module executing AT commands to dispatch immediate SMS alert notifications","Hands-on embedded systems architecture, hardware pinout interfacing, and firmware programming"],workflowSteps:[{step:"01",label:"Sensors",desc:"Digital temperature & humidity sensors capture ambient atmospheric data."},{step:"02",label:"Microcontroller",desc:"Embedded processor parses incoming analog/digital signals in real time."},{step:"03",label:"Threshold Check",desc:"Firmware logic compares current readings against safe baseline thresholds."},{step:"04",label:"GSM Module",desc:"Automated serial AT command pipeline triggers cellular transmission."},{step:"05",label:"SMS Alert",desc:"Target recipients receive instantaneous critical threshold alert SMS."}],techStack:["Embedded Systems","Hardware Interfacing","Sensors (Temp & Humidity)","GSM/SMS Module","C Programming","Microcontroller"]}],kr={role:"Intern – Cyber Security & Machine Learning",company:"Elysium Technologies Private Limited",location:"Madurai, Tamil Nadu, India",period:"December 4, 2025 – December 25, 2025",certificateImage:"/assets/cert_elysium_internship.png",highlights:["Completed a structured 3-week intensive internship covering core concepts of Cyber Security and Machine Learning.","Maintained 100% attendance and demonstrated consistent, keen interest across all assigned modules and tasks.","Gained practical exposure to cybersecurity fundamentals, attack surfaces, and defensive countermeasures.","Explored applied Machine Learning techniques through supervised training assignments and guided model evaluation."],verification:"Official Internship Certificate issued by Elysium Technologies Private Limited, Madurai (Ref: EGC: ETPL: 2025-2026)."},Ju=[{id:"ibm-ai",title:"Artificial Intelligence Fundamentals",issuer:"IBM SkillsBuild",issueDate:"July 14, 2026",category:"Artificial Intelligence",badge:"Verified Credly Badge",verifyUrl:"https://www.credly.com/badges/6c504fcc-e03e-4ee7-a75b-0654fc71bc63",image:"/assets/cert_ibm_ai.png",description:"Official credential by IBM validating fundamental knowledge of artificial intelligence, machine learning concepts, neural networks, ethics in AI, and real-world deployment."},{id:"cisco-cyber",title:"Introduction to Cybersecurity",issuer:"Cisco Networking Academy",issueDate:"July 13, 2026",category:"Cyber Security",badge:"Official Cisco Credential",certId:"ee84994a-5ac4-4cb0-a421-db2b11685ac4",image:"/assets/cert_cisco_cybersecurity.png",description:"Comprehensive Cisco curriculum covering digital security fundamentals, global threat landscape, vulnerability mitigation, data confidentiality, and cyber hygiene."},{id:"cisco-ds",title:"Introduction to Data Science",issuer:"Cisco Networking Academy",issueDate:"December 22, 2025",category:"Data Science",badge:"Official Cisco Credential",image:"/assets/cert_cisco_datascience.png",description:"Foundational training in data science methodologies, exploratory data analysis, data storytelling, statistical intuition, and algorithmic workflows."},{id:"nptel-iot",title:"Introduction to Internet of Things",issuer:"NPTEL / IIT Kharagpur (Swayam, MoE Govt. of India)",issueDate:"Jan–Apr 2026",score:"73% — Elite",scoreBreakdown:"Assignments: 22.47/25 | Proctored Exam: 51/75",category:"IoT & Embedded",badge:"Elite Certificate",image:"/assets/cert_nptel_iot.png",description:"Rigorous 12-week national certification funded by MoE, Government of India and conducted by Indian Institute of Technology Kharagpur, achieving Elite distinction."},{id:"elysium-internship",title:"Cyber Security & Machine Learning Internship",issuer:"Elysium Technologies Private Limited",issueDate:"Dec 4, 2025 – Dec 25, 2025",category:"Industry Internship",badge:"100% Attendance",image:"/assets/cert_elysium_internship.png",description:"Structured industry internship training at Elysium Technologies, Madurai, validating applied cybersecurity practices and machine learning models."},{id:"sdlc-workshop",title:"Free Workshop on Fullstack Development",issuer:"SDLC – Madurai (Skill Development Learning Centre)",issueDate:"April 27, 2025",category:"Web Engineering",badge:"Certificate of Appreciation",verifyUrl:"http://www.sdlcskills.com",image:"/assets/cert_sdlc_fullstack.jpg",description:"Certificate of Appreciation awarded by Centre Head Dr. R. Prabhakaran for intensive hands-on participation in fullstack web development architecture."},{id:"scopetech-photoshop",title:"One Month Internship on Adobe Photoshop",issuer:"Scope Tech Software Solution, Madurai",issueDate:"January 18, 2025",category:"Design & Multimedia",badge:"Outstanding Performance",image:"/assets/cert_scopetech_photoshop.jpg",description:"One month technical training and internship on Adobe Photoshop tools, UI assets rendering, image manipulation, and visual communication."},{id:"google-gemini",title:"Gemini Certified Student - University",issuer:"Google for Education",issueDate:"December 23, 2025 (Valid through 2028)",category:"Artificial Intelligence",badge:"Google AI Certified",image:"/assets/cert_gemini_student.jpg",description:"Awarded by Google for Education for demonstrating knowledge, skills, and core competencies needed to leverage Google AI and Gemini models."}],Rv=[{degree:"B.E. Computer Science & Engineering (Cyber Security)",institution:"Velammal College of Engineering & Technology, Madurai",period:"2024 – 2028",status:"Currently Pursuing (Specialization)",type:"specialization",description:"Advancing specialized knowledge in Cyber Security, Network Defense, Applied ML, and Secure Software Engineering."},{degree:"Diploma in Computer Engineering",institution:"KL Nagasamy Memorial Polytechnic College",period:"2022 – 2025",status:"74% — First Class with Distinction",type:"foundation",description:"The core foundational pillar of my journey. Solidified proficiency in C, Python, Java, RDBMS, Web Design, Networks, and Computer Hardware."},{degree:"SSLC (10th Standard)",institution:"Tagore Vidyalayam Matriculation Higher Secondary School",period:"Completed 2022",status:"332 / 500",type:"schooling",description:"Foundational academic schooling establishing disciplined study habits and mathematics intuition."}],Nv=[{title:"Website Designing & Building",icon:"Layout",description:"Designing and engineering responsive, aesthetically superior, and modern web applications with refined typography and seamless UX."},{title:"Vibe Coding & Rapid Prototyping",icon:"Zap",description:"Accelerating full-stack development through AI-assisted vibe coding workflows, paired with disciplined computer engineering problem-solving."},{title:"Cyber Security & Malware Analysis",icon:"ShieldAlert",description:"Vulnerability analysis, threat intelligence, automated malware report summarization, and defensive system hardening."},{title:"Machine Learning & IoT Systems",icon:"BrainCircuit",description:"Applied machine learning models, telemetry pipelines, and embedded sensor architectures."}],Pv=[{title:"Problem Solving & Analytical Thinking",description:"Logical approach to decomposing complex algorithmic and architectural challenges into structured, maintainable code."},{title:"Passionate Web Builder & Vibe Coder",description:"Rapidly iterating and translating visionary design concepts into high-performance web products using modern AI-assisted development."},{title:"Quick Learner with Cyber Security Focus",description:"Eager curiosity to rapidly master emerging security standards, threat intelligence frameworks, and defensive protocols."},{title:"Disciplined & Consistent",description:"Maintained 100% attendance during industry internship, demonstrating unwavering punctuality and dedication."}],Su=[{label:"Home",href:"#home"},{label:"About",href:"#about"},{label:"Journey",href:"#journey"},{label:"Foundation",href:"#foundation"},{label:"Skills",href:"#skills"},{label:"Experience",href:"#experience"},{label:"Project",href:"#project"},{label:"Certificates",href:"#certificates"},{label:"Education",href:"#education"},{label:"Contact",href:"#contact"}];function Fv(){const[s,e]=it.useState(!1),[n,r]=it.useState("home"),[o,l]=it.useState(!1);return it.useEffect(()=>{const u=()=>{e(window.scrollY>40);const f=Su.map(g=>g.href.substring(1)),m=window.scrollY+200;for(let g=f.length-1;g>=0;g--){const x=document.getElementById(f[g]);if(x&&x.offsetTop<=m){r(f[g]);break}}};return window.addEventListener("scroll",u,{passive:!0}),()=>window.removeEventListener("scroll",u)},[]),h.jsxs("header",{className:`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${s?"py-3 bg-[#08090D]/85 backdrop-blur-xl border-b border-white/[0.07] shadow-2xl":"py-5 bg-transparent"}`,children:[h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between",children:[h.jsxs("a",{href:"#home",className:"flex items-center gap-2.5 group interactive-element focus:outline-none",children:[h.jsx("div",{className:"w-9 h-9 rounded-lg bg-[#FF5E0E]/10 border border-[#FF5E0E]/40 flex items-center justify-center text-[#FF5E0E] font-mono font-bold text-sm tracking-wider transition-all duration-300 group-hover:bg-[#FF5E0E] group-hover:text-black group-hover:shadow-[0_0_20px_rgba(255,94,14,0.5)]",children:"YS"}),h.jsxs("div",{className:"flex flex-col",children:[h.jsx("span",{className:"font-display font-bold text-sm sm:text-base tracking-wide text-white group-hover:text-[#FF5E0E] transition-colors",children:"Yogeswar S"}),h.jsxs("span",{className:"font-mono text-[10px] text-gray-400 flex items-center gap-1",children:[h.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"}),"Cyber Security"]})]})]}),h.jsx("nav",{className:"hidden xl:flex items-center gap-1 p-1 bg-white/[0.03] border border-white/[0.06] rounded-full backdrop-blur-md px-3",children:Su.map(u=>{const f=n===u.href.substring(1);return h.jsx("a",{href:u.href,className:`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 interactive-element ${f?"bg-[#FF5E0E] text-black font-semibold shadow-md":"text-gray-300 hover:text-white hover:bg-white/[0.05]"}`,children:u.label},u.label)})}),h.jsxs("div",{className:"hidden sm:flex items-center gap-3",children:[h.jsxs("a",{href:wn.resumePdf,download:"Yogeswar_Resume.pdf",className:"flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium bg-[#FF5E0E]/10 hover:bg-[#FF5E0E] border border-[#FF5E0E]/40 text-[#FF7A29] hover:text-black transition-all duration-200 shadow-sm interactive-element group",children:[h.jsx(Ua,{className:"w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform"}),h.jsx("span",{children:"Resume"})]}),h.jsx("a",{href:"#contact",className:"flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium bg-[#FF5E0E] hover:bg-[#FF7A29] text-black font-semibold transition-all duration-200 shadow-[0_0_18px_rgba(255,94,14,0.3)] hover:shadow-[0_0_25px_rgba(255,94,14,0.5)] interactive-element",children:"Contact"})]}),h.jsx("button",{onClick:()=>l(!o),className:"xl:hidden p-2 rounded-lg bg-white/[0.05] border border-white/10 text-gray-300 hover:text-white focus:outline-none interactive-element","aria-label":"Toggle navigation menu",children:o?h.jsx(Gm,{className:"w-5 h-5 text-[#FF5E0E]"}):h.jsx(sv,{className:"w-5 h-5"})})]}),o&&h.jsxs("div",{className:"xl:hidden bg-[#08090D]/95 border-b border-white/10 backdrop-blur-2xl px-6 py-6 transition-all",children:[h.jsx("div",{className:"grid grid-cols-2 gap-2 mb-6",children:Su.map(u=>{const f=n===u.href.substring(1);return h.jsx("a",{href:u.href,onClick:()=>l(!1),className:`px-3 py-2.5 rounded-lg text-xs font-medium transition-colors ${f?"bg-[#FF5E0E] text-black font-semibold":"text-gray-300 hover:bg-white/[0.05] hover:text-white"}`,children:u.label},u.label)})}),h.jsxs("div",{className:"flex flex-col gap-2.5 pt-4 border-t border-white/10",children:[h.jsxs("a",{href:wn.resumePdf,download:"Yogeswar_Resume.pdf",className:"w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-medium bg-white/[0.06] border border-white/10 text-white hover:bg-white/10",children:[h.jsx(Ua,{className:"w-4 h-4 text-[#FF5E0E]"}),"Download Resume (PDF)"]}),h.jsx("a",{href:"#contact",onClick:()=>l(!1),className:"w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-semibold bg-[#FF5E0E] text-black hover:bg-[#FF7A29]",children:"Contact Yogeswar"})]})]})]})}const Lv=[[58,47,1.5,8,-4],[61,49,2,15,-8],[64,51,1,20,-3],[67,52,2,27,-10],[70,54,1.5,35,-5],[73,56,2,43,-12],[77,58,1,51,-7],[81,60,2,61,-11],[85,62,1.5,70,-6],[59,56,2,7,3],[62,58,1,14,7],[65,60,2,22,2],[68,62,1.5,30,8],[71,64,2,38,4],[74,66,1,47,10],[78,68,2,56,5],[82,70,1.5,65,11],[86,72,2,75,7],[58,67,1,5,13],[61,70,2,12,17],[64,73,1.5,19,21],[67,76,2,27,18],[70,79,1,36,24],[73,82,2,45,21],[77,85,1.5,55,27],[81,88,2,67,24],[86,90,1,78,29],[66,43,1,18,-15],[70,45,2,27,-19],[74,47,1.5,37,-23],[78,49,2,48,-18],[83,52,1,59,-22],[88,55,2,72,-16],[60,62,1,6,9],[63,65,1.5,14,13],[66,68,1,22,16],[69,71,2,31,19],[72,74,1,40,22],[76,78,1.5,49,25],[80,82,2,60,22],[62,55,1,11,-2],[66,57,1.5,20,-6],[70,59,1,29,-2],[74,62,2,39,-7],[78,65,1,49,-3],[82,68,1.5,59,-8]],Dv=[{x:61,y:52,s:5,r:-20,dx:12,dy:-5},{x:65,y:56,s:4,r:25,dx:19,dy:-8},{x:69,y:60,s:6,r:-15,dx:27,dy:-3},{x:73,y:64,s:4,r:30,dx:35,dy:-10},{x:77,y:68,s:5,r:-35,dx:43,dy:-5},{x:67,y:71,s:4,r:18,dx:25,dy:10},{x:72,y:76,s:6,r:-25,dx:36,dy:13},{x:78,y:81,s:4,r:40,dx:49,dy:16},{x:82,y:74,s:5,r:-10,dx:55,dy:8}],Iv=[[7,19,2],[13,31,1],[8,55,2],[15,76,1.5],[10,88,1],[23,10,1.5],[42,7,1],[57,10,1.5],[74,8,1],[90,20,2],[96,34,1],[93,51,1.5],[96,73,2],[88,88,1],[69,95,1.5],[44,95,1],[20,92,2]],Uv=[{top:"22%",left:"48%",width:"48%",height:"2px",color:"#FF5E0E",glow:"0 0 14px #FF5E0E, 0 0 24px rgba(255,94,14,0.6)",anim:"hLineFlicker 3.2s ease-in-out infinite",opacity:.9},{top:"34%",left:"-8%",width:"58%",height:"1.5px",color:"#FF7A29",glow:"0 0 10px #FF7A29",anim:"hLineDrift 4.5s ease-in-out infinite",opacity:.8},{top:"48%",left:"38%",width:"68%",height:"2px",color:"#FF5E0E",glow:"0 0 12px #FF5E0E",anim:"hLinePulse 2.8s ease-in-out infinite",opacity:.85},{top:"56%",left:"-12%",width:"38%",height:"1px",color:"#FFAE5E",glow:"0 0 8px #FFAE5E",anim:"hLineFlicker 4s ease-in-out 0.6s infinite",opacity:.7},{top:"72%",left:"25%",width:"60%",height:"1.5px",color:"#FF5E0E",glow:"0 0 10px rgba(255,94,14,0.7)",anim:"hLineDrift 5s ease-in-out 1.2s infinite",opacity:.75},{top:"84%",left:"-5%",width:"70%",height:"1px",color:"#FF7A29",glow:"0 0 6px #FF7A29",anim:"hLinePulse 3.6s ease-in-out 0.4s infinite",opacity:.6}],kv=`
  @keyframes pdFloat {
    0%, 100% { transform: translate3d(0,0,0); opacity: .2; }
    50% { transform: translate3d(0,-8px,0); opacity: .85; }
  }

  @keyframes pdDissolve {
    0% {
      transform: translate3d(0,0,0) rotate(0deg) scale(.5);
      opacity: 0;
    }
    18% { opacity: .9; }
    50% {
      transform: translate3d(var(--dx),var(--dy),0) rotate(70deg) scale(1);
      opacity: 1;
    }
    100% {
      transform: translate3d(calc(var(--dx) * 1.5),calc(var(--dy) * 1.35),0) rotate(180deg) scale(.08);
      opacity: 0;
    }
  }

  @keyframes pdFragment {
    0% {
      transform: translate3d(0,0,0) rotate(var(--rot)) scale(.45);
      opacity: 0;
    }
    20% { opacity: .9; }
    55% {
      transform: translate3d(var(--dx),var(--dy),0) rotate(calc(var(--rot) + 90deg)) scale(1);
      opacity: .95;
    }
    100% {
      transform: translate3d(calc(var(--dx) * 1.45),calc(var(--dy) * 1.35),0) rotate(calc(var(--rot) + 180deg)) scale(.08);
      opacity: 0;
    }
  }

  @keyframes pdDust {
    0%, 100% { transform: translate3d(0,0,0); opacity: .1; }
    50% { transform: translate3d(8px,-6px,0); opacity: .75; }
  }

  @keyframes pdOrbit {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes pdOrbitReverse {
    from { transform: rotate(360deg); }
    to { transform: rotate(0deg); }
  }

  @keyframes pdGlow {
    0%, 100% { opacity: .25; transform: scale(.97); }
    50% { opacity: .5; transform: scale(1.03); }
  }

  @keyframes pdPulse {
    0% { transform: translate(-50%,-50%) scale(.4); opacity: .7; }
    100% { transform: translate(-50%,-50%) scale(1.9); opacity: 0; }
  }

  @keyframes pdScan {
    0% { transform: translateY(-120%); opacity: 0; }
    20% { opacity: .25; }
    80% { opacity: .08; }
    100% { transform: translateY(120%); opacity: 0; }
  }

  @keyframes hLineFlicker {
    0%, 100% { opacity: 0.85; transform: scaleX(1); }
    45% { opacity: 0.95; transform: scaleX(1.02); }
    48% { opacity: 0.4; }
    52% { opacity: 1; transform: scaleX(1.04); }
    85% { opacity: 0.75; transform: scaleX(0.98); }
  }

  @keyframes hLineDrift {
    0%, 100% { transform: translateX(0); opacity: 0.75; }
    50% { transform: translateX(10px); opacity: 0.95; }
  }

  @keyframes hLinePulse {
    0%, 100% { opacity: 0.6; filter: brightness(1); }
    50% { opacity: 0.95; filter: brightness(1.3); }
  }

  @keyframes continuousPortraitGlitch1 {
    0%, 100% {
      opacity: 0;
      clip-path: polygon(0 0, 0 0, 0 0, 0 0);
      transform: translate(0, 0);
    }
    7% {
      clip-path: polygon(0 28%, 100% 28%, 100% 42%, 0 42%);
      transform: translate(-8px, 1px);
      opacity: 0.92;
      filter: brightness(1.25) drop-shadow(0 0 10px #FF5E0E);
    }
    12% {
      clip-path: polygon(0 54%, 100% 54%, 100% 68%, 0 68%);
      transform: translate(7px, -1px);
      opacity: 0.88;
      filter: brightness(1.2) drop-shadow(0 0 8px #FFAE5E);
    }
    16% {
      opacity: 0;
      clip-path: polygon(0 0, 0 0, 0 0, 0 0);
      transform: translate(0, 0);
    }
    50% {
      opacity: 0;
      clip-path: polygon(0 0, 0 0, 0 0, 0 0);
      transform: translate(0, 0);
    }
    54% {
      clip-path: polygon(0 38%, 100% 38%, 100% 48%, 0 48%);
      transform: translate(-6px, 1px);
      opacity: 0.9;
      filter: brightness(1.2) drop-shadow(0 0 8px #FF5E0E);
    }
    58% {
      opacity: 0;
      clip-path: polygon(0 0, 0 0, 0 0, 0 0);
      transform: translate(0, 0);
    }
  }

  @keyframes continuousPortraitGlitch2 {
    0%, 100% {
      opacity: 0;
      clip-path: polygon(0 0, 0 0, 0 0, 0 0);
      transform: translate(0, 0);
    }
    28% {
      opacity: 0;
    }
    32% {
      clip-path: polygon(0 62%, 100% 62%, 100% 76%, 0 76%);
      transform: translate(7px, -1px);
      opacity: 0.9;
      filter: brightness(1.2) drop-shadow(0 0 8px #FFAE5E);
    }
    36% {
      clip-path: polygon(0 16%, 100% 16%, 100% 26%, 0 26%);
      transform: translate(-5px, 1px);
      opacity: 0.82;
      filter: brightness(1.15) drop-shadow(0 0 6px #FF7A29);
    }
    40% {
      opacity: 0;
    }
    80% {
      opacity: 0;
    }
    84% {
      clip-path: polygon(0 70%, 100% 70%, 100% 82%, 0 82%);
      transform: translate(6px, 0);
      opacity: 0.85;
      filter: brightness(1.2) drop-shadow(0 0 8px #FFAE5E);
    }
    88% {
      opacity: 0;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .pd-motion, .pd-motion * {
      animation: none !important;
      transition: none !important;
    }
  }
`;function Ov({photoUrl:s="/assets/new_pic.png",isContinuousGlitch:e=!0}){const n=it.useRef(null),r=it.useRef(!1),[o,l]=it.useState({x:0,y:0}),[u,f]=it.useState(!1),[m,g]=it.useState(!1),[x,_]=it.useState(!1),[y,S]=it.useState(!1);it.useEffect(()=>{const D=()=>{S(window.innerWidth<768)};return D(),window.addEventListener("resize",D),()=>window.removeEventListener("resize",D)},[]);const T=D=>{var z;if(y)return;const k=(z=n.current)==null?void 0:z.getBoundingClientRect();if(!k)return;const R=((D.clientX-k.left)/k.width-.5)*2,b=((D.clientY-k.top)/k.height-.5)*2;l({x:Math.max(-1,Math.min(1,R)),y:Math.max(-1,Math.min(1,b))})},C=()=>{f(!0)},E=()=>{f(!1),l({x:0,y:0})},v=()=>{r.current||(r.current=!0,g(D=>!D),_(!0),setTimeout(()=>_(!1),700),setTimeout(()=>{r.current=!1},120))},L=D=>y?0:o.x*D*12,P=D=>y?0:o.y*D*9,N=y?0:o.x*3,G=y?0:o.y*-2.2,O=m?1.07:u?1.025:1;return h.jsxs("div",{ref:n,className:"relative select-none",style:{width:"clamp(290px, 38vw, 440px)",aspectRatio:"1 / 1",perspective:"1200px",touchAction:"manipulation"},onPointerMove:T,onPointerEnter:C,onPointerLeave:E,onPointerDown:v,children:[h.jsx("style",{children:kv}),h.jsxs("div",{className:"absolute inset-0 pointer-events-none",style:{transform:`translate3d(${-L(.2)}px, ${-P(.2)}px, 0)`,transition:"transform .6s cubic-bezier(.25,.46,.45,.94)"},children:[h.jsx("div",{className:"absolute",style:{inset:"12%",borderRadius:"50%",background:"radial-gradient(circle, rgba(255,94,14,.22), rgba(255,94,14,.06) 48%, transparent 74%)",filter:"blur(28px)",animation:"pdGlow 5s ease-in-out infinite"}}),h.jsx("div",{className:"absolute",style:{inset:"28%",borderRadius:"50%",background:"radial-gradient(circle, rgba(255,122,41,.14), transparent 70%)",filter:"blur(16px)"}}),h.jsx("div",{className:"absolute inset-0",style:{opacity:.065,backgroundImage:`
              linear-gradient(rgba(255,94,14,.18) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,94,14,.18) 1px, transparent 1px)
            `,backgroundSize:"36px 36px",maskImage:"radial-gradient(circle, black 12%, transparent 72%)",WebkitMaskImage:"radial-gradient(circle, black 12%, transparent 72%)"}}),h.jsx("div",{className:"absolute rounded-full",style:{inset:"5%",border:"1px solid rgba(255,94,14,.22)",animation:"pdOrbit 28s linear infinite"},children:h.jsx("span",{className:"absolute rounded-full",style:{width:5,height:5,top:"8%",left:"22%",background:"#FF5E0E",boxShadow:"0 0 14px rgba(255,94,14,.9)"}})}),h.jsx("div",{className:"absolute rounded-full",style:{inset:"14%",border:"1px dashed rgba(255,122,41,.15)",transform:"rotate(48deg) scaleY(.6)",animation:"pdOrbitReverse 24s linear infinite"}})]}),h.jsx("div",{className:"absolute inset-0 pointer-events-none overflow-visible",style:{transform:`translate3d(${L(.35)}px, ${P(.35)}px, 0)`,transition:"transform .5s ease",zIndex:7},children:Uv.map((D,k)=>h.jsx("div",{style:{position:"absolute",top:D.top,left:D.left,width:D.width,height:D.height,background:`linear-gradient(90deg, transparent, ${D.color} 20%, ${D.color} 80%, transparent)`,boxShadow:D.glow,opacity:D.opacity,animation:D.anim,transformOrigin:"left center",zIndex:7},children:k%2===0&&h.jsx("span",{style:{position:"absolute",right:0,top:"50%",transform:"translate(50%, -50%)",width:"3px",height:"3px",borderRadius:"50%",background:"#FFAE5E",boxShadow:"0 0 8px #FF5E0E"}})},`sig-line-${k}`))}),h.jsxs("div",{className:"absolute inset-0 pointer-events-none",style:{transform:`translate3d(${L(.22)}px, ${P(.22)}px, 0)`,transition:"transform .55s ease",zIndex:8},children:[h.jsx("div",{className:"absolute",style:{top:"10%",left:"8%",width:"60px",height:"38px",borderTop:"1px solid rgba(255,94,14,.48)",borderLeft:"1px solid rgba(255,94,14,.48)",borderTopLeftRadius:"4px"},children:h.jsx("div",{style:{position:"absolute",top:"-1px",right:"-1px",width:"14px",height:"1px",background:"rgba(255,94,14,.7)"}})}),h.jsx("div",{className:"absolute",style:{top:"10%",right:"8%",width:"60px",height:"38px",borderTop:"1px solid rgba(255,94,14,.48)",borderRight:"1px solid rgba(255,94,14,.48)",borderTopRightRadius:"4px"},children:h.jsx("div",{style:{position:"absolute",top:"-1px",left:"-1px",width:"14px",height:"1px",background:"rgba(255,94,14,.7)"}})}),h.jsx("div",{className:"absolute",style:{bottom:"9%",left:"8%",width:"48px",height:"32px",borderBottom:"1px solid rgba(255,94,14,.35)",borderLeft:"1px solid rgba(255,94,14,.35)",borderBottomLeftRadius:"4px"}}),h.jsx("div",{className:"absolute",style:{bottom:"9%",right:"8%",width:"48px",height:"32px",borderBottom:"1px solid rgba(255,94,14,.35)",borderRight:"1px solid rgba(255,94,14,.35)",borderBottomRightRadius:"4px"}}),h.jsx("span",{className:"absolute font-mono text-[7px] tracking-[1.8px] text-[#FF7A29]/50",style:{top:"7%",left:"9%"},children:"CSE // 01"}),h.jsx("span",{className:"absolute font-mono text-[7px] tracking-[1.8px] text-[#FF7A29]/50",style:{top:"7%",right:"9%"},children:"CYBER // 02"}),h.jsx("span",{className:"absolute font-mono text-[7px] tracking-[1.6px] text-[#FF7A29]/40",style:{bottom:"6%",left:"9%"},children:"SYSTEM // ONLINE"}),h.jsx("span",{className:"absolute font-mono text-[7px] tracking-[1.6px] text-[#FF7A29]/40",style:{bottom:"6%",right:"9%"},children:"GLITCH // CONTINUOUS"})]}),h.jsxs("div",{className:"absolute inset-0 flex items-end justify-center",style:{transform:y?`scale(${O})`:`
              perspective(900px)
              translate3d(${L(.65)}px, ${P(.65)}px, 25px)
              rotateY(${N}deg)
              rotateX(${G}deg)
              scale(${O})
            `,transformStyle:"preserve-3d",transition:"transform .45s cubic-bezier(.25,.46,.45,.94)",zIndex:10},children:[h.jsx("div",{className:"absolute pointer-events-none",style:{width:"74%",height:"70%",bottom:"6%",borderRadius:"50%",background:"radial-gradient(ellipse, rgba(255,94,14,.13), transparent 70%)",filter:"blur(24px)"}}),h.jsx("div",{className:"absolute pointer-events-none",style:{width:"70%",height:"14%",bottom:"3%",borderRadius:"50%",background:"radial-gradient(ellipse, rgba(0,0,0,.82), transparent 70%)",filter:"blur(16px)"}}),x&&h.jsx("div",{className:"absolute pointer-events-none",style:{left:"50%",top:"52%",width:"32%",aspectRatio:"1",borderRadius:"50%",border:"1px solid rgba(255,94,14,.6)",boxShadow:"0 0 30px rgba(255,94,14,.3)",animation:"pdPulse .7s ease-out forwards",zIndex:3}}),h.jsxs("div",{className:"relative w-[96%] max-h-[92%] flex items-end justify-center",children:[h.jsx("img",{src:s||"/assets/new_pic.png",alt:"Yogeswar S",draggable:!1,onError:D=>{D.currentTarget.src="/assets/new_pic.png"},style:{position:"relative",zIndex:6,width:"100%",height:"auto",display:"block",objectFit:"contain",objectPosition:"bottom center",WebkitMaskImage:`
                linear-gradient(
                  103deg,
                  #000 0%,
                  #000 52%,
                  rgba(0,0,0,.99) 56%,
                  rgba(0,0,0,.88) 62%,
                  rgba(0,0,0,.67) 69%,
                  rgba(0,0,0,.42) 76%,
                  rgba(0,0,0,.18) 84%,
                  rgba(0,0,0,.04) 90%,
                  transparent 96%
                )
              `,maskImage:`
                linear-gradient(
                  103deg,
                  #000 0%,
                  #000 52%,
                  rgba(0,0,0,.99) 56%,
                  rgba(0,0,0,.88) 62%,
                  rgba(0,0,0,.67) 69%,
                  rgba(0,0,0,.42) 76%,
                  rgba(0,0,0,.18) 84%,
                  rgba(0,0,0,.04) 90%,
                  transparent 96%
                )
              `,filter:`
                brightness(1.03)
                contrast(1.04)
                drop-shadow(0 28px 44px rgba(0,0,0,.78))
                drop-shadow(0 0 24px rgba(255,94,14,${u?.22:.1}))
              `,transition:"filter .4s ease"}}),e&&h.jsx("img",{src:s||"/assets/new_pic.png",alt:"","aria-hidden":"true",className:"absolute inset-0 pointer-events-none select-none",style:{zIndex:8,width:"100%",height:"auto",objectFit:"contain",objectPosition:"bottom center",animation:"continuousPortraitGlitch1 2.8s infinite linear"}}),e&&h.jsx("img",{src:s||"/assets/new_pic.png",alt:"","aria-hidden":"true",className:"absolute inset-0 pointer-events-none select-none",style:{zIndex:8,width:"100%",height:"auto",objectFit:"contain",objectPosition:"bottom center",animation:"continuousPortraitGlitch2 3.6s infinite linear"}})]})]}),h.jsxs("div",{className:"absolute inset-0 pointer-events-none",style:{transform:`translate3d(${L(.85)}px, ${P(.85)}px, 45px)`,transition:"transform .3s ease",zIndex:24},children:[Lv.map(([D,k,R,b,z],re)=>h.jsx("span",{className:"absolute rounded-full",style:{left:`${D}%`,top:`${k}%`,width:`${R}px`,height:`${R}px`,background:re%5===0?"#FFAE5E":re%3===0?"#FF7A29":"#FF5E0E",boxShadow:"0 0 10px rgba(255,94,14,.8)","--dx":`${b}px`,"--dy":`${z}px`,animation:`pdDissolve ${2.2+re%6*.28}s ease-out ${re%13*.11}s infinite`}},`dissolve-${re}`)),Dv.map((D,k)=>h.jsx("span",{style:{position:"absolute",left:`${D.x}%`,top:`${D.y}%`,width:`${D.s}px`,height:`${D.s*.7}px`,background:k%2===0?"rgba(255,122,41,.92)":"rgba(255,174,94,.85)",clipPath:k%2===0?"polygon(0 20%, 80% 0, 100% 70%, 25% 100%)":"polygon(15% 0, 100% 35%, 75% 100%, 0 70%)",boxShadow:"0 0 9px rgba(255,94,14,.72)","--dx":`${D.dx}px`,"--dy":`${D.dy}px`,"--rot":`${D.r}deg`,animation:`pdFragment ${2.7+k%3*.45}s ease-out ${k*.2}s infinite`}},`fragment-${k}`)),[...Array(44)].map((D,k)=>{const R=58+k*17%40,b=39+k*29%53,z=k%6===0?2:k%3===0?1.5:1;return h.jsx("span",{className:"absolute rounded-full",style:{left:`${R}%`,top:`${b}%`,width:`${z}px`,height:`${z}px`,background:k%3===0?"#FFAE5E":"#FF5E0E",boxShadow:"0 0 7px rgba(255,94,14,.62)",animation:`pdDust ${2+k%6*.34}s ease-in-out ${k*.055}s infinite`}},`dust-${k}`)})]}),h.jsx("div",{className:"absolute inset-0 pointer-events-none",style:{transform:`translate3d(${L(.95)}px, ${P(.95)}px, 55px)`,zIndex:30},children:Iv.map(([D,k,R],b)=>h.jsx("span",{className:"absolute rounded-full",style:{left:`${D}%`,top:`${k}%`,width:`${R}px`,height:`${R}px`,background:b%2===0?"#FF5E0E":"#FF7A29",boxShadow:"0 0 10px rgba(255,94,14,.8)",animation:`pdFloat ${2.4+b*.13}s ease-in-out ${b*.17}s infinite`}},`floating-${b}`))}),h.jsxs("div",{className:"absolute right-[-24px] sm:right-[-32px] top-[26%] hidden sm:flex flex-col items-center gap-2.5 pointer-events-none select-none",style:{zIndex:32,transform:`translate3d(${L(.4)}px, ${P(.4)}px, 0)`},children:[h.jsx("div",{className:"w-[1px] h-7 bg-gradient-to-b from-transparent to-[#FF5E0E]/40"}),h.jsxs("div",{className:"font-mono text-[9px] tracking-[0.38em] text-gray-400/60 font-light flex flex-col gap-1 select-none text-center",children:[h.jsx("span",{children:"IDEAS"}),h.jsx("span",{children:"INTO"}),h.jsx("span",{className:"text-[#FF7A29]/80 font-medium",children:"REALITY"})]}),h.jsx("div",{className:"w-[1px] h-10 bg-gradient-to-b from-[#FF5E0E]/40 to-transparent"})]}),h.jsxs("div",{className:"absolute right-[-10px] sm:right-[-18px] bottom-[10%] hidden md:block font-mono text-[9px] leading-snug text-gray-500/40 pointer-events-none select-none",style:{zIndex:32,transform:`translate3d(${L(.3)}px, ${P(.3)}px, 0)`},children:[h.jsx("div",{className:"text-gray-500/50",children:"while (curiosity)"}),h.jsx("div",{className:"pl-1.5",children:"{"}),h.jsx("div",{className:"pl-3 text-[#FF7A29]/60",children:"build();"}),h.jsx("div",{className:"pl-1.5",children:"}"})]})]})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $d="173",zv=0,Ip=1,Bv=2,Wm=1,Hv=2,ki=3,Er=0,Ln=1,Oi=2,_r=0,Os=1,Up=2,kp=3,Op=4,Vv=5,Xr=100,jv=101,Gv=102,Wv=103,Xv=104,$v=200,Yv=201,qv=202,Kv=203,ed=204,td=205,Zv=206,Qv=207,Jv=208,e_=209,t_=210,n_=211,i_=212,r_=213,s_=214,nd=0,id=1,rd=2,Hs=3,sd=4,ad=5,od=6,ld=7,Xm=0,a_=1,o_=2,yr=0,l_=1,c_=2,u_=3,d_=4,f_=5,h_=6,p_=7,$m=300,Vs=301,js=302,cd=303,ud=304,Ul=306,dd=1e3,Yr=1001,fd=1002,ui=1003,m_=1004,il=1005,yi=1006,Mu=1007,qr=1008,Vi=1009,Ym=1010,qm=1011,ka=1012,Yd=1013,Kr=1014,zi=1015,za=1016,qd=1017,Kd=1018,Gs=1020,Km=35902,Zm=1021,Qm=1022,ci=1023,Jm=1024,eg=1025,zs=1026,Ws=1027,tg=1028,Zd=1029,ng=1030,Qd=1031,Jd=1033,bl=33776,Al=33777,Cl=33778,Rl=33779,hd=35840,pd=35841,md=35842,gd=35843,xd=36196,vd=37492,_d=37496,yd=37808,Ed=37809,Sd=37810,Md=37811,wd=37812,Td=37813,bd=37814,Ad=37815,Cd=37816,Rd=37817,Nd=37818,Pd=37819,Fd=37820,Ld=37821,Nl=36492,Dd=36494,Id=36495,ig=36283,Ud=36284,kd=36285,Od=36286,g_=3200,x_=3201,v_=0,__=1,vr="",Kn="srgb",Xs="srgb-linear",Fl="linear",Rt="srgb",Ss=7680,zp=519,y_=512,E_=513,S_=514,rg=515,M_=516,w_=517,T_=518,b_=519,Bp=35044,Hp="300 es",Bi=2e3,Ll=2001;class Ys{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(n);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wu=Math.PI/180,zd=180/Math.PI;function Ba(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(gn[s&255]+gn[s>>8&255]+gn[s>>16&255]+gn[s>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[n&63|128]+gn[n>>8&255]+"-"+gn[n>>16&255]+gn[n>>24&255]+gn[r&255]+gn[r>>8&255]+gn[r>>16&255]+gn[r>>24&255]).toLowerCase()}function vt(s,e,n){return Math.max(e,Math.min(n,s))}function A_(s,e){return(s%e+e)%e}function Tu(s,e,n){return(1-n)*s+n*e}function Ca(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Fn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class bt{constructor(e=0,n=0){bt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=vt(this.x,e.x,n.x),this.y=vt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=vt(this.x,e,n),this.y=vt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(vt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,n,r,o,l,u,f,m,g){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,l,u,f,m,g)}set(e,n,r,o,l,u,f,m,g){const x=this.elements;return x[0]=e,x[1]=o,x[2]=f,x[3]=n,x[4]=l,x[5]=m,x[6]=r,x[7]=u,x[8]=g,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,l=this.elements,u=r[0],f=r[3],m=r[6],g=r[1],x=r[4],_=r[7],y=r[2],S=r[5],T=r[8],C=o[0],E=o[3],v=o[6],L=o[1],P=o[4],N=o[7],G=o[2],O=o[5],D=o[8];return l[0]=u*C+f*L+m*G,l[3]=u*E+f*P+m*O,l[6]=u*v+f*N+m*D,l[1]=g*C+x*L+_*G,l[4]=g*E+x*P+_*O,l[7]=g*v+x*N+_*D,l[2]=y*C+S*L+T*G,l[5]=y*E+S*P+T*O,l[8]=y*v+S*N+T*D,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],m=e[6],g=e[7],x=e[8];return n*u*x-n*f*g-r*l*x+r*f*m+o*l*g-o*u*m}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],m=e[6],g=e[7],x=e[8],_=x*u-f*g,y=f*m-x*l,S=g*l-u*m,T=n*_+r*y+o*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=_*C,e[1]=(o*g-x*r)*C,e[2]=(f*r-o*u)*C,e[3]=y*C,e[4]=(x*n-o*m)*C,e[5]=(o*l-f*n)*C,e[6]=S*C,e[7]=(r*m-g*n)*C,e[8]=(u*n-r*l)*C,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,l,u,f){const m=Math.cos(l),g=Math.sin(l);return this.set(r*m,r*g,-r*(m*u+g*f)+u+e,-o*g,o*m,-o*(-g*u+m*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(bu.makeScale(e,n)),this}rotate(e){return this.premultiply(bu.makeRotation(-e)),this}translate(e,n){return this.premultiply(bu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bu=new ot;function sg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Dl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function C_(){const s=Dl("canvas");return s.style.display="block",s}const Vp={};function Us(s){s in Vp||(Vp[s]=!0,console.warn(s))}function R_(s,e,n){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:r()}}setTimeout(l,n)})}function N_(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function P_(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const jp=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gp=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function F_(){const s={enabled:!0,workingColorSpace:Xs,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Rt&&(o.r=Hi(o.r),o.g=Hi(o.g),o.b=Hi(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Rt&&(o.r=Bs(o.r),o.g=Bs(o.g),o.b=Bs(o.b))),o},fromWorkingColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},toWorkingColorSpace:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===vr?Fl:this.spaces[o].transfer},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Xs]:{primaries:e,whitePoint:r,transfer:Fl,toXYZ:jp,fromXYZ:Gp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Kn},outputColorSpaceConfig:{drawingBufferColorSpace:Kn}},[Kn]:{primaries:e,whitePoint:r,transfer:Rt,toXYZ:jp,fromXYZ:Gp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Kn}}}),s}const wt=F_();function Hi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Bs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ms;class L_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ms===void 0&&(Ms=Dl("canvas")),Ms.width=e.width,Ms.height=e.height;const r=Ms.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ms}return n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Dl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=Hi(l[u]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Hi(n[r]/255)*255):n[r]=Hi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let D_=0;class ag{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:D_++}),this.uuid=Ba(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(Au(o[u].image)):l.push(Au(o[u]))}else l=Au(o);r.url=l}return n||(e.images[this.uuid]=r),r}}function Au(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?L_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let I_=0;class Dn extends Ys{constructor(e=Dn.DEFAULT_IMAGE,n=Dn.DEFAULT_MAPPING,r=Yr,o=Yr,l=yi,u=qr,f=ci,m=Vi,g=Dn.DEFAULT_ANISOTROPY,x=vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:I_++}),this.uuid=Ba(),this.name="",this.source=new ag(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=g,this.format=f,this.internalFormat=null,this.type=m,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$m)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case dd:e.x=e.x-Math.floor(e.x);break;case Yr:e.x=e.x<0?0:1;break;case fd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case dd:e.y=e.y-Math.floor(e.y);break;case Yr:e.y=e.y<0?0:1;break;case fd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=$m;Dn.DEFAULT_ANISOTROPY=1;class Wt{constructor(e=0,n=0,r=0,o=1){Wt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*n+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*n+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*n+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,l;const m=e.elements,g=m[0],x=m[4],_=m[8],y=m[1],S=m[5],T=m[9],C=m[2],E=m[6],v=m[10];if(Math.abs(x-y)<.01&&Math.abs(_-C)<.01&&Math.abs(T-E)<.01){if(Math.abs(x+y)<.1&&Math.abs(_+C)<.1&&Math.abs(T+E)<.1&&Math.abs(g+S+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const P=(g+1)/2,N=(S+1)/2,G=(v+1)/2,O=(x+y)/4,D=(_+C)/4,k=(T+E)/4;return P>N&&P>G?P<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(P),o=O/r,l=D/r):N>G?N<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(N),r=O/o,l=k/o):G<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(G),r=D/l,o=k/l),this.set(r,o,l,n),this}let L=Math.sqrt((E-T)*(E-T)+(_-C)*(_-C)+(y-x)*(y-x));return Math.abs(L)<.001&&(L=1),this.x=(E-T)/L,this.y=(_-C)/L,this.z=(y-x)/L,this.w=Math.acos((g+S+v-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=vt(this.x,e.x,n.x),this.y=vt(this.y,e.y,n.y),this.z=vt(this.z,e.z,n.z),this.w=vt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=vt(this.x,e,n),this.y=vt(this.y,e,n),this.z=vt(this.z,e,n),this.w=vt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class U_ extends Ys{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Wt(0,0,e,n),this.scissorTest=!1,this.viewport=new Wt(0,0,e,n);const o={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new Dn(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const u=r.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;const n=Object.assign({},e.texture.image);return this.texture.source=new ag(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zr extends U_{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class og extends Dn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=ui,this.minFilter=ui,this.wrapR=Yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class k_ extends Dn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=ui,this.minFilter=ui,this.wrapR=Yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ha{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,l,u,f){let m=r[o+0],g=r[o+1],x=r[o+2],_=r[o+3];const y=l[u+0],S=l[u+1],T=l[u+2],C=l[u+3];if(f===0){e[n+0]=m,e[n+1]=g,e[n+2]=x,e[n+3]=_;return}if(f===1){e[n+0]=y,e[n+1]=S,e[n+2]=T,e[n+3]=C;return}if(_!==C||m!==y||g!==S||x!==T){let E=1-f;const v=m*y+g*S+x*T+_*C,L=v>=0?1:-1,P=1-v*v;if(P>Number.EPSILON){const G=Math.sqrt(P),O=Math.atan2(G,v*L);E=Math.sin(E*O)/G,f=Math.sin(f*O)/G}const N=f*L;if(m=m*E+y*N,g=g*E+S*N,x=x*E+T*N,_=_*E+C*N,E===1-f){const G=1/Math.sqrt(m*m+g*g+x*x+_*_);m*=G,g*=G,x*=G,_*=G}}e[n]=m,e[n+1]=g,e[n+2]=x,e[n+3]=_}static multiplyQuaternionsFlat(e,n,r,o,l,u){const f=r[o],m=r[o+1],g=r[o+2],x=r[o+3],_=l[u],y=l[u+1],S=l[u+2],T=l[u+3];return e[n]=f*T+x*_+m*S-g*y,e[n+1]=m*T+x*y+g*_-f*S,e[n+2]=g*T+x*S+f*y-m*_,e[n+3]=x*T-f*_-m*y-g*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,m=Math.sin,g=f(r/2),x=f(o/2),_=f(l/2),y=m(r/2),S=m(o/2),T=m(l/2);switch(u){case"XYZ":this._x=y*x*_+g*S*T,this._y=g*S*_-y*x*T,this._z=g*x*T+y*S*_,this._w=g*x*_-y*S*T;break;case"YXZ":this._x=y*x*_+g*S*T,this._y=g*S*_-y*x*T,this._z=g*x*T-y*S*_,this._w=g*x*_+y*S*T;break;case"ZXY":this._x=y*x*_-g*S*T,this._y=g*S*_+y*x*T,this._z=g*x*T+y*S*_,this._w=g*x*_-y*S*T;break;case"ZYX":this._x=y*x*_-g*S*T,this._y=g*S*_+y*x*T,this._z=g*x*T-y*S*_,this._w=g*x*_+y*S*T;break;case"YZX":this._x=y*x*_+g*S*T,this._y=g*S*_+y*x*T,this._z=g*x*T-y*S*_,this._w=g*x*_-y*S*T;break;case"XZY":this._x=y*x*_-g*S*T,this._y=g*S*_-y*x*T,this._z=g*x*T+y*S*_,this._w=g*x*_+y*S*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],l=n[8],u=n[1],f=n[5],m=n[9],g=n[2],x=n[6],_=n[10],y=r+f+_;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(x-m)*S,this._y=(l-g)*S,this._z=(u-o)*S}else if(r>f&&r>_){const S=2*Math.sqrt(1+r-f-_);this._w=(x-m)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(l+g)/S}else if(f>_){const S=2*Math.sqrt(1+f-r-_);this._w=(l-g)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(m+x)/S}else{const S=2*Math.sqrt(1+_-r-f);this._w=(u-o)/S,this._x=(l+g)/S,this._y=(m+x)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,l=e._z,u=e._w,f=n._x,m=n._y,g=n._z,x=n._w;return this._x=r*x+u*f+o*g-l*m,this._y=o*x+u*m+l*f-r*g,this._z=l*x+u*g+r*m-o*f,this._w=u*x-r*f-o*m-l*g,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,o=this._y,l=this._z,u=this._w;let f=u*e._w+r*e._x+o*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=u,this._x=r,this._y=o,this._z=l,this;const m=1-f*f;if(m<=Number.EPSILON){const S=1-n;return this._w=S*u+n*this._w,this._x=S*r+n*this._x,this._y=S*o+n*this._y,this._z=S*l+n*this._z,this.normalize(),this}const g=Math.sqrt(m),x=Math.atan2(g,f),_=Math.sin((1-n)*x)/g,y=Math.sin(n*x)/g;return this._w=u*_+this._w*y,this._x=r*_+this._x*y,this._y=o*_+this._y*y,this._z=l*_+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(n),l*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,n=0,r=0){Q.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Wp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Wp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*n+l[3]*r+l[6]*o,this.y=l[1]*n+l[4]*r+l[7]*o,this.z=l[2]*n+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*n+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*n+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*n+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*n+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,l=e.x,u=e.y,f=e.z,m=e.w,g=2*(u*o-f*r),x=2*(f*n-l*o),_=2*(l*r-u*n);return this.x=n+m*g+u*_-f*x,this.y=r+m*x+f*g-l*_,this.z=o+m*_+l*x-u*g,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*n+l[4]*r+l[8]*o,this.y=l[1]*n+l[5]*r+l[9]*o,this.z=l[2]*n+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=vt(this.x,e.x,n.x),this.y=vt(this.y,e.y,n.y),this.z=vt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=vt(this.x,e,n),this.y=vt(this.y,e,n),this.z=vt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,l=e.z,u=n.x,f=n.y,m=n.z;return this.x=o*m-l*f,this.y=l*u-r*m,this.z=r*f-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Cu.copy(this).projectOnVector(e),this.sub(Cu)}reflect(e){return this.sub(Cu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(vt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cu=new Q,Wp=new Ha;class Va{constructor(e=new Q(1/0,1/0,1/0),n=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(si.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(si.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=si.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,si):si.fromBufferAttribute(l,u),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),rl.copy(r.boundingBox)),rl.applyMatrix4(e.matrixWorld),this.union(rl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ra),sl.subVectors(this.max,Ra),ws.subVectors(e.a,Ra),Ts.subVectors(e.b,Ra),bs.subVectors(e.c,Ra),fr.subVectors(Ts,ws),hr.subVectors(bs,Ts),Or.subVectors(ws,bs);let n=[0,-fr.z,fr.y,0,-hr.z,hr.y,0,-Or.z,Or.y,fr.z,0,-fr.x,hr.z,0,-hr.x,Or.z,0,-Or.x,-fr.y,fr.x,0,-hr.y,hr.x,0,-Or.y,Or.x,0];return!Ru(n,ws,Ts,bs,sl)||(n=[1,0,0,0,1,0,0,0,1],!Ru(n,ws,Ts,bs,sl))?!1:(al.crossVectors(fr,hr),n=[al.x,al.y,al.z],Ru(n,ws,Ts,bs,sl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Fi=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],si=new Q,rl=new Va,ws=new Q,Ts=new Q,bs=new Q,fr=new Q,hr=new Q,Or=new Q,Ra=new Q,sl=new Q,al=new Q,zr=new Q;function Ru(s,e,n,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){zr.fromArray(s,l);const f=o.x*Math.abs(zr.x)+o.y*Math.abs(zr.y)+o.z*Math.abs(zr.z),m=e.dot(zr),g=n.dot(zr),x=r.dot(zr);if(Math.max(-Math.max(m,g,x),Math.min(m,g,x))>f)return!1}return!0}const O_=new Va,Na=new Q,Nu=new Q;class kl{constructor(e=new Q,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):O_.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Na.subVectors(e,this.center);const n=Na.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(Na,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Na.copy(e.center).add(Nu)),this.expandByPoint(Na.copy(e.center).sub(Nu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Li=new Q,Pu=new Q,ol=new Q,pr=new Q,Fu=new Q,ll=new Q,Lu=new Q;class lg{constructor(e=new Q,n=new Q(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Li.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,n),Li.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){Pu.copy(e).add(n).multiplyScalar(.5),ol.copy(n).sub(e).normalize(),pr.copy(this.origin).sub(Pu);const l=e.distanceTo(n)*.5,u=-this.direction.dot(ol),f=pr.dot(this.direction),m=-pr.dot(ol),g=pr.lengthSq(),x=Math.abs(1-u*u);let _,y,S,T;if(x>0)if(_=u*m-f,y=u*f-m,T=l*x,_>=0)if(y>=-T)if(y<=T){const C=1/x;_*=C,y*=C,S=_*(_+u*y+2*f)+y*(u*_+y+2*m)+g}else y=l,_=Math.max(0,-(u*y+f)),S=-_*_+y*(y+2*m)+g;else y=-l,_=Math.max(0,-(u*y+f)),S=-_*_+y*(y+2*m)+g;else y<=-T?(_=Math.max(0,-(-u*l+f)),y=_>0?-l:Math.min(Math.max(-l,-m),l),S=-_*_+y*(y+2*m)+g):y<=T?(_=0,y=Math.min(Math.max(-l,-m),l),S=y*(y+2*m)+g):(_=Math.max(0,-(u*l+f)),y=_>0?l:Math.min(Math.max(-l,-m),l),S=-_*_+y*(y+2*m)+g);else y=u>0?-l:l,_=Math.max(0,-(u*y+f)),S=-_*_+y*(y+2*m)+g;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Pu).addScaledVector(ol,y),S}intersectSphere(e,n){Li.subVectors(e.center,this.origin);const r=Li.dot(this.direction),o=Li.dot(Li)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=r-u,m=r+u;return m<0?null:f<0?this.at(m,n):this.at(f,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,l,u,f,m;const g=1/this.direction.x,x=1/this.direction.y,_=1/this.direction.z,y=this.origin;return g>=0?(r=(e.min.x-y.x)*g,o=(e.max.x-y.x)*g):(r=(e.max.x-y.x)*g,o=(e.min.x-y.x)*g),x>=0?(l=(e.min.y-y.y)*x,u=(e.max.y-y.y)*x):(l=(e.max.y-y.y)*x,u=(e.min.y-y.y)*x),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),_>=0?(f=(e.min.z-y.z)*_,m=(e.max.z-y.z)*_):(f=(e.max.z-y.z)*_,m=(e.min.z-y.z)*_),r>m||f>o)||((f>r||r!==r)&&(r=f),(m<o||o!==o)&&(o=m),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,n,r,o,l){Fu.subVectors(n,e),ll.subVectors(r,e),Lu.crossVectors(Fu,ll);let u=this.direction.dot(Lu),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;pr.subVectors(this.origin,e);const m=f*this.direction.dot(ll.crossVectors(pr,ll));if(m<0)return null;const g=f*this.direction.dot(Fu.cross(pr));if(g<0||m+g>u)return null;const x=-f*pr.dot(Lu);return x<0?null:this.at(x/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xt{constructor(e,n,r,o,l,u,f,m,g,x,_,y,S,T,C,E){Xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,l,u,f,m,g,x,_,y,S,T,C,E)}set(e,n,r,o,l,u,f,m,g,x,_,y,S,T,C,E){const v=this.elements;return v[0]=e,v[4]=n,v[8]=r,v[12]=o,v[1]=l,v[5]=u,v[9]=f,v[13]=m,v[2]=g,v[6]=x,v[10]=_,v[14]=y,v[3]=S,v[7]=T,v[11]=C,v[15]=E,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,o=1/As.setFromMatrixColumn(e,0).length(),l=1/As.setFromMatrixColumn(e,1).length(),u=1/As.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*l,n[5]=r[5]*l,n[6]=r[6]*l,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),m=Math.cos(o),g=Math.sin(o),x=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const y=u*x,S=u*_,T=f*x,C=f*_;n[0]=m*x,n[4]=-m*_,n[8]=g,n[1]=S+T*g,n[5]=y-C*g,n[9]=-f*m,n[2]=C-y*g,n[6]=T+S*g,n[10]=u*m}else if(e.order==="YXZ"){const y=m*x,S=m*_,T=g*x,C=g*_;n[0]=y+C*f,n[4]=T*f-S,n[8]=u*g,n[1]=u*_,n[5]=u*x,n[9]=-f,n[2]=S*f-T,n[6]=C+y*f,n[10]=u*m}else if(e.order==="ZXY"){const y=m*x,S=m*_,T=g*x,C=g*_;n[0]=y-C*f,n[4]=-u*_,n[8]=T+S*f,n[1]=S+T*f,n[5]=u*x,n[9]=C-y*f,n[2]=-u*g,n[6]=f,n[10]=u*m}else if(e.order==="ZYX"){const y=u*x,S=u*_,T=f*x,C=f*_;n[0]=m*x,n[4]=T*g-S,n[8]=y*g+C,n[1]=m*_,n[5]=C*g+y,n[9]=S*g-T,n[2]=-g,n[6]=f*m,n[10]=u*m}else if(e.order==="YZX"){const y=u*m,S=u*g,T=f*m,C=f*g;n[0]=m*x,n[4]=C-y*_,n[8]=T*_+S,n[1]=_,n[5]=u*x,n[9]=-f*x,n[2]=-g*x,n[6]=S*_+T,n[10]=y-C*_}else if(e.order==="XZY"){const y=u*m,S=u*g,T=f*m,C=f*g;n[0]=m*x,n[4]=-_,n[8]=g*x,n[1]=y*_+C,n[5]=u*x,n[9]=S*_-T,n[2]=T*_-S,n[6]=f*x,n[10]=C*_+y}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(z_,e,B_)}lookAt(e,n,r){const o=this.elements;return Bn.subVectors(e,n),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),mr.crossVectors(r,Bn),mr.lengthSq()===0&&(Math.abs(r.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),mr.crossVectors(r,Bn)),mr.normalize(),cl.crossVectors(Bn,mr),o[0]=mr.x,o[4]=cl.x,o[8]=Bn.x,o[1]=mr.y,o[5]=cl.y,o[9]=Bn.y,o[2]=mr.z,o[6]=cl.z,o[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,l=this.elements,u=r[0],f=r[4],m=r[8],g=r[12],x=r[1],_=r[5],y=r[9],S=r[13],T=r[2],C=r[6],E=r[10],v=r[14],L=r[3],P=r[7],N=r[11],G=r[15],O=o[0],D=o[4],k=o[8],R=o[12],b=o[1],z=o[5],re=o[9],te=o[13],ue=o[2],fe=o[6],se=o[10],oe=o[14],V=o[3],ce=o[7],le=o[11],U=o[15];return l[0]=u*O+f*b+m*ue+g*V,l[4]=u*D+f*z+m*fe+g*ce,l[8]=u*k+f*re+m*se+g*le,l[12]=u*R+f*te+m*oe+g*U,l[1]=x*O+_*b+y*ue+S*V,l[5]=x*D+_*z+y*fe+S*ce,l[9]=x*k+_*re+y*se+S*le,l[13]=x*R+_*te+y*oe+S*U,l[2]=T*O+C*b+E*ue+v*V,l[6]=T*D+C*z+E*fe+v*ce,l[10]=T*k+C*re+E*se+v*le,l[14]=T*R+C*te+E*oe+v*U,l[3]=L*O+P*b+N*ue+G*V,l[7]=L*D+P*z+N*fe+G*ce,l[11]=L*k+P*re+N*se+G*le,l[15]=L*R+P*te+N*oe+G*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],l=e[12],u=e[1],f=e[5],m=e[9],g=e[13],x=e[2],_=e[6],y=e[10],S=e[14],T=e[3],C=e[7],E=e[11],v=e[15];return T*(+l*m*_-o*g*_-l*f*y+r*g*y+o*f*S-r*m*S)+C*(+n*m*S-n*g*y+l*u*y-o*u*S+o*g*x-l*m*x)+E*(+n*g*_-n*f*S-l*u*_+r*u*S+l*f*x-r*g*x)+v*(-o*f*x-n*m*_+n*f*y+o*u*_-r*u*y+r*m*x)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],m=e[6],g=e[7],x=e[8],_=e[9],y=e[10],S=e[11],T=e[12],C=e[13],E=e[14],v=e[15],L=_*E*g-C*y*g+C*m*S-f*E*S-_*m*v+f*y*v,P=T*y*g-x*E*g-T*m*S+u*E*S+x*m*v-u*y*v,N=x*C*g-T*_*g+T*f*S-u*C*S-x*f*v+u*_*v,G=T*_*m-x*C*m-T*f*y+u*C*y+x*f*E-u*_*E,O=n*L+r*P+o*N+l*G;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/O;return e[0]=L*D,e[1]=(C*y*l-_*E*l-C*o*S+r*E*S+_*o*v-r*y*v)*D,e[2]=(f*E*l-C*m*l+C*o*g-r*E*g-f*o*v+r*m*v)*D,e[3]=(_*m*l-f*y*l-_*o*g+r*y*g+f*o*S-r*m*S)*D,e[4]=P*D,e[5]=(x*E*l-T*y*l+T*o*S-n*E*S-x*o*v+n*y*v)*D,e[6]=(T*m*l-u*E*l-T*o*g+n*E*g+u*o*v-n*m*v)*D,e[7]=(u*y*l-x*m*l+x*o*g-n*y*g-u*o*S+n*m*S)*D,e[8]=N*D,e[9]=(T*_*l-x*C*l-T*r*S+n*C*S+x*r*v-n*_*v)*D,e[10]=(u*C*l-T*f*l+T*r*g-n*C*g-u*r*v+n*f*v)*D,e[11]=(x*f*l-u*_*l-x*r*g+n*_*g+u*r*S-n*f*S)*D,e[12]=G*D,e[13]=(x*C*o-T*_*o+T*r*y-n*C*y-x*r*E+n*_*E)*D,e[14]=(T*f*o-u*C*o-T*r*m+n*C*m+u*r*E-n*f*E)*D,e[15]=(u*_*o-x*f*o+x*r*m-n*_*m-u*r*y+n*f*y)*D,this}scale(e){const n=this.elements,r=e.x,o=e.y,l=e.z;return n[0]*=r,n[4]*=o,n[8]*=l,n[1]*=r,n[5]*=o,n[9]*=l,n[2]*=r,n[6]*=o,n[10]*=l,n[3]*=r,n[7]*=o,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),l=1-r,u=e.x,f=e.y,m=e.z,g=l*u,x=l*f;return this.set(g*u+r,g*f-o*m,g*m+o*f,0,g*f+o*m,x*f+r,x*m-o*u,0,g*m-o*f,x*m+o*u,l*m*m+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,l=n._x,u=n._y,f=n._z,m=n._w,g=l+l,x=u+u,_=f+f,y=l*g,S=l*x,T=l*_,C=u*x,E=u*_,v=f*_,L=m*g,P=m*x,N=m*_,G=r.x,O=r.y,D=r.z;return o[0]=(1-(C+v))*G,o[1]=(S+N)*G,o[2]=(T-P)*G,o[3]=0,o[4]=(S-N)*O,o[5]=(1-(y+v))*O,o[6]=(E+L)*O,o[7]=0,o[8]=(T+P)*D,o[9]=(E-L)*D,o[10]=(1-(y+C))*D,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;let l=As.set(o[0],o[1],o[2]).length();const u=As.set(o[4],o[5],o[6]).length(),f=As.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],ai.copy(this);const g=1/l,x=1/u,_=1/f;return ai.elements[0]*=g,ai.elements[1]*=g,ai.elements[2]*=g,ai.elements[4]*=x,ai.elements[5]*=x,ai.elements[6]*=x,ai.elements[8]*=_,ai.elements[9]*=_,ai.elements[10]*=_,n.setFromRotationMatrix(ai),r.x=l,r.y=u,r.z=f,this}makePerspective(e,n,r,o,l,u,f=Bi){const m=this.elements,g=2*l/(n-e),x=2*l/(r-o),_=(n+e)/(n-e),y=(r+o)/(r-o);let S,T;if(f===Bi)S=-(u+l)/(u-l),T=-2*u*l/(u-l);else if(f===Ll)S=-u/(u-l),T=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return m[0]=g,m[4]=0,m[8]=_,m[12]=0,m[1]=0,m[5]=x,m[9]=y,m[13]=0,m[2]=0,m[6]=0,m[10]=S,m[14]=T,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,n,r,o,l,u,f=Bi){const m=this.elements,g=1/(n-e),x=1/(r-o),_=1/(u-l),y=(n+e)*g,S=(r+o)*x;let T,C;if(f===Bi)T=(u+l)*_,C=-2*_;else if(f===Ll)T=l*_,C=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return m[0]=2*g,m[4]=0,m[8]=0,m[12]=-y,m[1]=0,m[5]=2*x,m[9]=0,m[13]=-S,m[2]=0,m[6]=0,m[10]=C,m[14]=-T,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const As=new Q,ai=new Xt,z_=new Q(0,0,0),B_=new Q(1,1,1),mr=new Q,cl=new Q,Bn=new Q,Xp=new Xt,$p=new Ha;class ji{constructor(e=0,n=0,r=0,o=ji.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],m=o[1],g=o[5],x=o[9],_=o[2],y=o[6],S=o[10];switch(n){case"XYZ":this._y=Math.asin(vt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-x,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(y,g),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(m,g)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(vt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-u,g)):(this._y=0,this._z=Math.atan2(m,l));break;case"ZYX":this._y=Math.asin(-vt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(m,l)):(this._x=0,this._z=Math.atan2(-u,g));break;case"YZX":this._z=Math.asin(vt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,g),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-vt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(y,g),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-x,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Xp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return $p.setFromEuler(this),this.setFromQuaternion($p,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ji.DEFAULT_ORDER="XYZ";class cg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let H_=0;const Yp=new Q,Cs=new Ha,Di=new Xt,ul=new Q,Pa=new Q,V_=new Q,j_=new Ha,qp=new Q(1,0,0),Kp=new Q(0,1,0),Zp=new Q(0,0,1),Qp={type:"added"},G_={type:"removed"},Rs={type:"childadded",child:null},Du={type:"childremoved",child:null};class In extends Ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:H_++}),this.uuid=Ba(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=In.DEFAULT_UP.clone();const e=new Q,n=new ji,r=new Ha,o=new Q(1,1,1);function l(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Xt},normalMatrix:{value:new ot}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=In.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Cs.setFromAxisAngle(e,n),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(e,n){return Cs.setFromAxisAngle(e,n),this.quaternion.premultiply(Cs),this}rotateX(e){return this.rotateOnAxis(qp,e)}rotateY(e){return this.rotateOnAxis(Kp,e)}rotateZ(e){return this.rotateOnAxis(Zp,e)}translateOnAxis(e,n){return Yp.copy(e).applyQuaternion(this.quaternion),this.position.add(Yp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(qp,e)}translateY(e){return this.translateOnAxis(Kp,e)}translateZ(e){return this.translateOnAxis(Zp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?ul.copy(e):ul.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Pa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(Pa,ul,this.up):Di.lookAt(ul,Pa,this.up),this.quaternion.setFromRotationMatrix(Di),o&&(Di.extractRotation(o.matrixWorld),Cs.setFromRotationMatrix(Di),this.quaternion.premultiply(Cs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qp),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(G_),Du.child=e,this.dispatchEvent(Du),Du.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qp),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pa,e,V_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pa,j_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(f,m){return f[m.uuid]===void 0&&(f[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const m=f.shapes;if(Array.isArray(m))for(let g=0,x=m.length;g<x;g++){const _=m[g];l(e.shapes,_)}else l(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let m=0,g=this.material.length;m<g;m++)f.push(l(e.materials,this.material[m]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const m=this.animations[f];o.animations.push(l(e.animations,m))}}if(n){const f=u(e.geometries),m=u(e.materials),g=u(e.textures),x=u(e.images),_=u(e.shapes),y=u(e.skeletons),S=u(e.animations),T=u(e.nodes);f.length>0&&(r.geometries=f),m.length>0&&(r.materials=m),g.length>0&&(r.textures=g),x.length>0&&(r.images=x),_.length>0&&(r.shapes=_),y.length>0&&(r.skeletons=y),S.length>0&&(r.animations=S),T.length>0&&(r.nodes=T)}return r.object=o,r;function u(f){const m=[];for(const g in f){const x=f[g];delete x.metadata,m.push(x)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}In.DEFAULT_UP=new Q(0,1,0);In.DEFAULT_MATRIX_AUTO_UPDATE=!0;In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const oi=new Q,Ii=new Q,Iu=new Q,Ui=new Q,Ns=new Q,Ps=new Q,Jp=new Q,Uu=new Q,ku=new Q,Ou=new Q,zu=new Wt,Bu=new Wt,Hu=new Wt;class li{constructor(e=new Q,n=new Q,r=new Q){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),oi.subVectors(e,n),o.cross(oi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,n,r,o,l){oi.subVectors(o,n),Ii.subVectors(r,n),Iu.subVectors(e,n);const u=oi.dot(oi),f=oi.dot(Ii),m=oi.dot(Iu),g=Ii.dot(Ii),x=Ii.dot(Iu),_=u*g-f*f;if(_===0)return l.set(0,0,0),null;const y=1/_,S=(g*m-f*x)*y,T=(u*x-f*m)*y;return l.set(1-S-T,T,S)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(e,n,r,o,l,u,f,m){return this.getBarycoord(e,n,r,o,Ui)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(l,Ui.x),m.addScaledVector(u,Ui.y),m.addScaledVector(f,Ui.z),m)}static getInterpolatedAttribute(e,n,r,o,l,u){return zu.setScalar(0),Bu.setScalar(0),Hu.setScalar(0),zu.fromBufferAttribute(e,n),Bu.fromBufferAttribute(e,r),Hu.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(zu,l.x),u.addScaledVector(Bu,l.y),u.addScaledVector(Hu,l.z),u}static isFrontFacing(e,n,r,o){return oi.subVectors(r,n),Ii.subVectors(e,n),oi.cross(Ii).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),oi.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return li.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,l){return li.getInterpolation(e,this.a,this.b,this.c,n,r,o,l)}containsPoint(e){return li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,l=this.c;let u,f;Ns.subVectors(o,r),Ps.subVectors(l,r),Uu.subVectors(e,r);const m=Ns.dot(Uu),g=Ps.dot(Uu);if(m<=0&&g<=0)return n.copy(r);ku.subVectors(e,o);const x=Ns.dot(ku),_=Ps.dot(ku);if(x>=0&&_<=x)return n.copy(o);const y=m*_-x*g;if(y<=0&&m>=0&&x<=0)return u=m/(m-x),n.copy(r).addScaledVector(Ns,u);Ou.subVectors(e,l);const S=Ns.dot(Ou),T=Ps.dot(Ou);if(T>=0&&S<=T)return n.copy(l);const C=S*g-m*T;if(C<=0&&g>=0&&T<=0)return f=g/(g-T),n.copy(r).addScaledVector(Ps,f);const E=x*T-S*_;if(E<=0&&_-x>=0&&S-T>=0)return Jp.subVectors(l,o),f=(_-x)/(_-x+(S-T)),n.copy(o).addScaledVector(Jp,f);const v=1/(E+C+y);return u=C*v,f=y*v,n.copy(r).addScaledVector(Ns,u).addScaledVector(Ps,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ug={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gr={h:0,s:0,l:0},dl={h:0,s:0,l:0};function Vu(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class Ct{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,o=wt.workingColorSpace){return this.r=e,this.g=n,this.b=r,wt.toWorkingColorSpace(this,o),this}setHSL(e,n,r,o=wt.workingColorSpace){if(e=A_(e,1),n=vt(n,0,1),r=vt(r,0,1),n===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+n):r+n-r*n,u=2*r-l;this.r=Vu(u,l,e+1/3),this.g=Vu(u,l,e),this.b=Vu(u,l,e-1/3)}return wt.toWorkingColorSpace(this,o),this}setStyle(e,n=Kn){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(l,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Kn){const r=ug[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}copyLinearToSRGB(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kn){return wt.fromWorkingColorSpace(xn.copy(this),e),Math.round(vt(xn.r*255,0,255))*65536+Math.round(vt(xn.g*255,0,255))*256+Math.round(vt(xn.b*255,0,255))}getHexString(e=Kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=wt.workingColorSpace){wt.fromWorkingColorSpace(xn.copy(this),n);const r=xn.r,o=xn.g,l=xn.b,u=Math.max(r,o,l),f=Math.min(r,o,l);let m,g;const x=(f+u)/2;if(f===u)m=0,g=0;else{const _=u-f;switch(g=x<=.5?_/(u+f):_/(2-u-f),u){case r:m=(o-l)/_+(o<l?6:0);break;case o:m=(l-r)/_+2;break;case l:m=(r-o)/_+4;break}m/=6}return e.h=m,e.s=g,e.l=x,e}getRGB(e,n=wt.workingColorSpace){return wt.fromWorkingColorSpace(xn.copy(this),n),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=Kn){wt.fromWorkingColorSpace(xn.copy(this),e);const n=xn.r,r=xn.g,o=xn.b;return e!==Kn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(gr),this.setHSL(gr.h+e,gr.s+n,gr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(gr),e.getHSL(dl);const r=Tu(gr.h,dl.h,n),o=Tu(gr.s,dl.s,n),l=Tu(gr.l,dl.l,n);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*n+l[3]*r+l[6]*o,this.g=l[1]*n+l[4]*r+l[7]*o,this.b=l[2]*n+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xn=new Ct;Ct.NAMES=ug;let W_=0;class ja extends Ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:W_++}),this.uuid=Ba(),this.name="",this.type="Material",this.blending=Os,this.side=Er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ed,this.blendDst=td,this.blendEquation=Xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(r.blending=this.blending),this.side!==Er&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==ed&&(r.blendSrc=this.blendSrc),this.blendDst!==td&&(r.blendDst=this.blendDst),this.blendEquation!==Xr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Hs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ss&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ss&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ss&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const f in l){const m=l[f];delete m.metadata,u.push(m)}return u}if(n){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=n[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ia extends ja{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.combine=Xm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yt=new Q,fl=new bt;let X_=0;class di{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:X_++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Bp,this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)fl.fromBufferAttribute(this,n),fl.applyMatrix3(e),this.setXY(n,fl.x,fl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Yt.fromBufferAttribute(this,n),Yt.applyMatrix3(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Yt.fromBufferAttribute(this,n),Yt.applyMatrix4(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Yt.fromBufferAttribute(this,n),Yt.applyNormalMatrix(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Yt.fromBufferAttribute(this,n),Yt.transformDirection(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Ca(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Fn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ca(n,this.array)),n}setX(e,n){return this.normalized&&(n=Fn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ca(n,this.array)),n}setY(e,n){return this.normalized&&(n=Fn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ca(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Fn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ca(n,this.array)),n}setW(e,n){return this.normalized&&(n=Fn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Fn(n,this.array),r=Fn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=Fn(n,this.array),r=Fn(r,this.array),o=Fn(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,l){return e*=this.itemSize,this.normalized&&(n=Fn(n,this.array),r=Fn(r,this.array),o=Fn(o,this.array),l=Fn(l,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bp&&(e.usage=this.usage),e}}class dg extends di{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class fg extends di{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Vn extends di{constructor(e,n,r){super(new Float32Array(e),n,r)}}let $_=0;const qn=new Xt,ju=new In,Fs=new Q,Hn=new Va,Fa=new Va,an=new Q;class fi extends Ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$_++}),this.uuid=Ba(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sg(e)?fg:dg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ot().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,n,r){return qn.makeTranslation(e,n,r),this.applyMatrix4(qn),this}scale(e,n,r){return qn.makeScale(e,n,r),this.applyMatrix4(qn),this}lookAt(e){return ju.lookAt(e),ju.updateMatrix(),this.applyMatrix4(ju.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Vn(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const l=e[o];n.setXYZ(o,l.x,l.y,l.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Va);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const l=n[r];Hn.setFromBufferAttribute(l),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const r=this.boundingSphere.center;if(Hn.setFromBufferAttribute(e),n)for(let l=0,u=n.length;l<u;l++){const f=n[l];Fa.setFromBufferAttribute(f),this.morphTargetsRelative?(an.addVectors(Hn.min,Fa.min),Hn.expandByPoint(an),an.addVectors(Hn.max,Fa.max),Hn.expandByPoint(an)):(Hn.expandByPoint(Fa.min),Hn.expandByPoint(Fa.max))}Hn.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)an.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(an));if(n)for(let l=0,u=n.length;l<u;l++){const f=n[l],m=this.morphTargetsRelative;for(let g=0,x=f.count;g<x;g++)an.fromBufferAttribute(f,g),m&&(Fs.fromBufferAttribute(e,g),an.add(Fs)),o=Math.max(o,r.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new di(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),f=[],m=[];for(let k=0;k<r.count;k++)f[k]=new Q,m[k]=new Q;const g=new Q,x=new Q,_=new Q,y=new bt,S=new bt,T=new bt,C=new Q,E=new Q;function v(k,R,b){g.fromBufferAttribute(r,k),x.fromBufferAttribute(r,R),_.fromBufferAttribute(r,b),y.fromBufferAttribute(l,k),S.fromBufferAttribute(l,R),T.fromBufferAttribute(l,b),x.sub(g),_.sub(g),S.sub(y),T.sub(y);const z=1/(S.x*T.y-T.x*S.y);isFinite(z)&&(C.copy(x).multiplyScalar(T.y).addScaledVector(_,-S.y).multiplyScalar(z),E.copy(_).multiplyScalar(S.x).addScaledVector(x,-T.x).multiplyScalar(z),f[k].add(C),f[R].add(C),f[b].add(C),m[k].add(E),m[R].add(E),m[b].add(E))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let k=0,R=L.length;k<R;++k){const b=L[k],z=b.start,re=b.count;for(let te=z,ue=z+re;te<ue;te+=3)v(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const P=new Q,N=new Q,G=new Q,O=new Q;function D(k){G.fromBufferAttribute(o,k),O.copy(G);const R=f[k];P.copy(R),P.sub(G.multiplyScalar(G.dot(R))).normalize(),N.crossVectors(O,R);const z=N.dot(m[k])<0?-1:1;u.setXYZW(k,P.x,P.y,P.z,z)}for(let k=0,R=L.length;k<R;++k){const b=L[k],z=b.start,re=b.count;for(let te=z,ue=z+re;te<ue;te+=3)D(e.getX(te+0)),D(e.getX(te+1)),D(e.getX(te+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new di(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let y=0,S=r.count;y<S;y++)r.setXYZ(y,0,0,0);const o=new Q,l=new Q,u=new Q,f=new Q,m=new Q,g=new Q,x=new Q,_=new Q;if(e)for(let y=0,S=e.count;y<S;y+=3){const T=e.getX(y+0),C=e.getX(y+1),E=e.getX(y+2);o.fromBufferAttribute(n,T),l.fromBufferAttribute(n,C),u.fromBufferAttribute(n,E),x.subVectors(u,l),_.subVectors(o,l),x.cross(_),f.fromBufferAttribute(r,T),m.fromBufferAttribute(r,C),g.fromBufferAttribute(r,E),f.add(x),m.add(x),g.add(x),r.setXYZ(T,f.x,f.y,f.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(E,g.x,g.y,g.z)}else for(let y=0,S=n.count;y<S;y+=3)o.fromBufferAttribute(n,y+0),l.fromBufferAttribute(n,y+1),u.fromBufferAttribute(n,y+2),x.subVectors(u,l),_.subVectors(o,l),x.cross(_),r.setXYZ(y+0,x.x,x.y,x.z),r.setXYZ(y+1,x.x,x.y,x.z),r.setXYZ(y+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)an.fromBufferAttribute(e,n),an.normalize(),e.setXYZ(n,an.x,an.y,an.z)}toNonIndexed(){function e(f,m){const g=f.array,x=f.itemSize,_=f.normalized,y=new g.constructor(m.length*x);let S=0,T=0;for(let C=0,E=m.length;C<E;C++){f.isInterleavedBufferAttribute?S=m[C]*f.data.stride+f.offset:S=m[C]*x;for(let v=0;v<x;v++)y[T++]=g[S++]}return new di(y,x,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new fi,r=this.index.array,o=this.attributes;for(const f in o){const m=o[f],g=e(m,r);n.setAttribute(f,g)}const l=this.morphAttributes;for(const f in l){const m=[],g=l[f];for(let x=0,_=g.length;x<_;x++){const y=g[x],S=e(y,r);m.push(S)}n.morphAttributes[f]=m}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,m=u.length;f<m;f++){const g=u[f];n.addGroup(g.start,g.count,g.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const g in m)m[g]!==void 0&&(e[g]=m[g]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const m in r){const g=r[m];e.data.attributes[m]=g.toJSON(e.data)}const o={};let l=!1;for(const m in this.morphAttributes){const g=this.morphAttributes[m],x=[];for(let _=0,y=g.length;_<y;_++){const S=g[_];x.push(S.toJSON(e.data))}x.length>0&&(o[m]=x,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const o=e.attributes;for(const g in o){const x=o[g];this.setAttribute(g,x.clone(n))}const l=e.morphAttributes;for(const g in l){const x=[],_=l[g];for(let y=0,S=_.length;y<S;y++)x.push(_[y].clone(n));this.morphAttributes[g]=x}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let g=0,x=u.length;g<x;g++){const _=u[g];this.addGroup(_.start,_.count,_.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const em=new Xt,Br=new lg,hl=new kl,tm=new Q,pl=new Q,ml=new Q,gl=new Q,Gu=new Q,xl=new Q,nm=new Q,vl=new Q;class Qn extends In{constructor(e=new fi,n=new Ia){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){xl.set(0,0,0);for(let m=0,g=l.length;m<g;m++){const x=f[m],_=l[m];x!==0&&(Gu.fromBufferAttribute(_,e),u?xl.addScaledVector(Gu,x):xl.addScaledVector(Gu.sub(n),x))}n.add(xl)}return n}raycast(e,n){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),hl.copy(r.boundingSphere),hl.applyMatrix4(l),Br.copy(e.ray).recast(e.near),!(hl.containsPoint(Br.origin)===!1&&(Br.intersectSphere(hl,tm)===null||Br.origin.distanceToSquared(tm)>(e.far-e.near)**2))&&(em.copy(l).invert(),Br.copy(e.ray).applyMatrix4(em),!(r.boundingBox!==null&&Br.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Br)))}_computeIntersections(e,n,r){let o;const l=this.geometry,u=this.material,f=l.index,m=l.attributes.position,g=l.attributes.uv,x=l.attributes.uv1,_=l.attributes.normal,y=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(u))for(let T=0,C=y.length;T<C;T++){const E=y[T],v=u[E.materialIndex],L=Math.max(E.start,S.start),P=Math.min(f.count,Math.min(E.start+E.count,S.start+S.count));for(let N=L,G=P;N<G;N+=3){const O=f.getX(N),D=f.getX(N+1),k=f.getX(N+2);o=_l(this,v,e,r,g,x,_,O,D,k),o&&(o.faceIndex=Math.floor(N/3),o.face.materialIndex=E.materialIndex,n.push(o))}}else{const T=Math.max(0,S.start),C=Math.min(f.count,S.start+S.count);for(let E=T,v=C;E<v;E+=3){const L=f.getX(E),P=f.getX(E+1),N=f.getX(E+2);o=_l(this,u,e,r,g,x,_,L,P,N),o&&(o.faceIndex=Math.floor(E/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let T=0,C=y.length;T<C;T++){const E=y[T],v=u[E.materialIndex],L=Math.max(E.start,S.start),P=Math.min(m.count,Math.min(E.start+E.count,S.start+S.count));for(let N=L,G=P;N<G;N+=3){const O=N,D=N+1,k=N+2;o=_l(this,v,e,r,g,x,_,O,D,k),o&&(o.faceIndex=Math.floor(N/3),o.face.materialIndex=E.materialIndex,n.push(o))}}else{const T=Math.max(0,S.start),C=Math.min(m.count,S.start+S.count);for(let E=T,v=C;E<v;E+=3){const L=E,P=E+1,N=E+2;o=_l(this,u,e,r,g,x,_,L,P,N),o&&(o.faceIndex=Math.floor(E/3),n.push(o))}}}}function Y_(s,e,n,r,o,l,u,f){let m;if(e.side===Ln?m=r.intersectTriangle(u,l,o,!0,f):m=r.intersectTriangle(o,l,u,e.side===Er,f),m===null)return null;vl.copy(f),vl.applyMatrix4(s.matrixWorld);const g=n.ray.origin.distanceTo(vl);return g<n.near||g>n.far?null:{distance:g,point:vl.clone(),object:s}}function _l(s,e,n,r,o,l,u,f,m,g){s.getVertexPosition(f,pl),s.getVertexPosition(m,ml),s.getVertexPosition(g,gl);const x=Y_(s,e,n,r,pl,ml,gl,nm);if(x){const _=new Q;li.getBarycoord(nm,pl,ml,gl,_),o&&(x.uv=li.getInterpolatedAttribute(o,f,m,g,_,new bt)),l&&(x.uv1=li.getInterpolatedAttribute(l,f,m,g,_,new bt)),u&&(x.normal=li.getInterpolatedAttribute(u,f,m,g,_,new Q),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const y={a:f,b:m,c:g,normal:new Q,materialIndex:0};li.getNormal(pl,ml,gl,y.normal),x.face=y,x.barycoord=_}return x}class Ga extends fi{constructor(e=1,n=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const m=[],g=[],x=[],_=[];let y=0,S=0;T("z","y","x",-1,-1,r,n,e,u,l,0),T("z","y","x",1,-1,r,n,-e,u,l,1),T("x","z","y",1,1,e,r,n,o,u,2),T("x","z","y",1,-1,e,r,-n,o,u,3),T("x","y","z",1,-1,e,n,r,o,l,4),T("x","y","z",-1,-1,e,n,-r,o,l,5),this.setIndex(m),this.setAttribute("position",new Vn(g,3)),this.setAttribute("normal",new Vn(x,3)),this.setAttribute("uv",new Vn(_,2));function T(C,E,v,L,P,N,G,O,D,k,R){const b=N/D,z=G/k,re=N/2,te=G/2,ue=O/2,fe=D+1,se=k+1;let oe=0,V=0;const ce=new Q;for(let le=0;le<se;le++){const U=le*z-te;for(let ie=0;ie<fe;ie++){const De=ie*b-re;ce[C]=De*L,ce[E]=U*P,ce[v]=ue,g.push(ce.x,ce.y,ce.z),ce[C]=0,ce[E]=0,ce[v]=O>0?1:-1,x.push(ce.x,ce.y,ce.z),_.push(ie/D),_.push(1-le/k),oe+=1}}for(let le=0;le<k;le++)for(let U=0;U<D;U++){const ie=y+U+fe*le,De=y+U+fe*(le+1),J=y+(U+1)+fe*(le+1),pe=y+(U+1)+fe*le;m.push(ie,De,pe),m.push(De,J,pe),V+=6}f.addGroup(S,V,R),S+=V,y+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ga(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $s(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const o=s[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone():Array.isArray(o)?e[n][r]=o.slice():e[n][r]=o}}return e}function Mn(s){const e={};for(let n=0;n<s.length;n++){const r=$s(s[n]);for(const o in r)e[o]=r[o]}return e}function q_(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function hg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const K_={clone:$s,merge:Mn};var Z_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Q_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sr extends ja{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Z_,this.fragmentShader=Q_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$s(e.uniforms),this.uniformsGroups=q_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class pg extends In{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=Bi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xr=new Q,im=new bt,rm=new bt;class Zn extends pg{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=zd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zd*2*Math.atan(Math.tan(wu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xr.x,xr.y).multiplyScalar(-e/xr.z),xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(xr.x,xr.y).multiplyScalar(-e/xr.z)}getViewSize(e,n){return this.getViewBounds(e,im,rm),n.subVectors(rm,im)}setViewOffset(e,n,r,o,l,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(wu*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,g=u.fullHeight;l+=u.offsetX*o/m,n-=u.offsetY*r/g,o*=u.width/m,r*=u.height/g}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ls=-90,Ds=1;class J_ extends In{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Zn(Ls,Ds,e,n);o.layers=this.layers,this.add(o);const l=new Zn(Ls,Ds,e,n);l.layers=this.layers,this.add(l);const u=new Zn(Ls,Ds,e,n);u.layers=this.layers,this.add(u);const f=new Zn(Ls,Ds,e,n);f.layers=this.layers,this.add(f);const m=new Zn(Ls,Ds,e,n);m.layers=this.layers,this.add(m);const g=new Zn(Ls,Ds,e,n);g.layers=this.layers,this.add(g)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,l,u,f,m]=n;for(const g of n)this.remove(g);if(e===Bi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Ll)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const g of n)this.add(g),g.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,m,g,x]=this.children,_=e.getRenderTarget(),y=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(n,l),e.setRenderTarget(r,1,o),e.render(n,u),e.setRenderTarget(r,2,o),e.render(n,f),e.setRenderTarget(r,3,o),e.render(n,m),e.setRenderTarget(r,4,o),e.render(n,g),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,o),e.render(n,x),e.setRenderTarget(_,y,S),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class mg extends Dn{constructor(e,n,r,o,l,u,f,m,g,x){e=e!==void 0?e:[],n=n!==void 0?n:Vs,super(e,n,r,o,l,u,f,m,g,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ey extends Zr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new mg(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:yi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Ga(5,5,5),l=new Sr({name:"CubemapFromEquirect",uniforms:$s(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Ln,blending:_r});l.uniforms.tEquirect.value=n;const u=new Qn(o,l),f=n.minFilter;return n.minFilter===qr&&(n.minFilter=yi),new J_(1,10,this).update(e,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,n,r,o){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,o);e.setRenderTarget(l)}}class La extends In{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ty={type:"move"};class Wu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new La,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new La,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new La,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,l=null,u=null;const f=this._targetRay,m=this._grip,g=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(g&&e.hand){u=!0;for(const C of e.hand.values()){const E=n.getJointPose(C,r),v=this._getHandJoint(g,C);E!==null&&(v.matrix.fromArray(E.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=E.radius),v.visible=E!==null}const x=g.joints["index-finger-tip"],_=g.joints["thumb-tip"],y=x.position.distanceTo(_.position),S=.02,T=.005;g.inputState.pinching&&y>S+T?(g.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!g.inputState.pinching&&y<=S-T&&(g.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,r),l!==null&&(m.matrix.fromArray(l.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,l.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(l.linearVelocity)):m.hasLinearVelocity=!1,l.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(l.angularVelocity)):m.hasAngularVelocity=!1));f!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(ty)))}return f!==null&&(f.visible=o!==null),m!==null&&(m.visible=l!==null),g!==null&&(g.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new La;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class ny extends In{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ji,this.environmentIntensity=1,this.environmentRotation=new ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Xu=new Q,iy=new Q,ry=new ot;class Gr{constructor(e=new Q(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=Xu.subVectors(r,n).cross(iy.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Xu),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:n.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||ry.getNormalMatrix(e),o=this.coplanarPoint(Xu).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hr=new kl,yl=new Q;class gg{constructor(e=new Gr,n=new Gr,r=new Gr,o=new Gr,l=new Gr,u=new Gr){this.planes=[e,n,r,o,l,u]}set(e,n,r,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Bi){const r=this.planes,o=e.elements,l=o[0],u=o[1],f=o[2],m=o[3],g=o[4],x=o[5],_=o[6],y=o[7],S=o[8],T=o[9],C=o[10],E=o[11],v=o[12],L=o[13],P=o[14],N=o[15];if(r[0].setComponents(m-l,y-g,E-S,N-v).normalize(),r[1].setComponents(m+l,y+g,E+S,N+v).normalize(),r[2].setComponents(m+u,y+x,E+T,N+L).normalize(),r[3].setComponents(m-u,y-x,E-T,N-L).normalize(),r[4].setComponents(m-f,y-_,E-C,N-P).normalize(),n===Bi)r[5].setComponents(m+f,y+_,E+C,N+P).normalize();else if(n===Ll)r[5].setComponents(f,_,C,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(e){return Hr.center.set(0,0,0),Hr.radius=.7071067811865476,Hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(yl.x=o.normal.x>0?e.max.x:e.min.x,yl.y=o.normal.y>0?e.max.y:e.min.y,yl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(yl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xg extends ja{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const sm=new Xt,Bd=new lg,El=new kl,Sl=new Q;class sy extends In{constructor(e=new fi,n=new xg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),El.copy(r.boundingSphere),El.applyMatrix4(o),El.radius+=l,e.ray.intersectsSphere(El)===!1)return;sm.copy(o).invert(),Bd.copy(e.ray).applyMatrix4(sm);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),m=f*f,g=r.index,_=r.attributes.position;if(g!==null){const y=Math.max(0,u.start),S=Math.min(g.count,u.start+u.count);for(let T=y,C=S;T<C;T++){const E=g.getX(T);Sl.fromBufferAttribute(_,E),am(Sl,E,m,o,e,n,this)}}else{const y=Math.max(0,u.start),S=Math.min(_.count,u.start+u.count);for(let T=y,C=S;T<C;T++)Sl.fromBufferAttribute(_,T),am(Sl,T,m,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function am(s,e,n,r,o,l,u){const f=Bd.distanceSqToPoint(s);if(f<n){const m=new Q;Bd.closestPointToPoint(s,m),m.applyMatrix4(r);const g=o.ray.origin.distanceTo(m);if(g<o.near||g>o.far)return;l.push({distance:g,distanceToRay:Math.sqrt(f),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class vg extends Dn{constructor(e,n,r,o,l,u,f,m,g,x=zs){if(x!==zs&&x!==Ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&x===zs&&(r=Kr),r===void 0&&x===Ws&&(r=Gs),super(null,o,l,u,f,m,x,r,g),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=f!==void 0?f:ui,this.minFilter=m!==void 0?m:ui,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class ef extends fi{constructor(e=[],n=[],r=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:r,detail:o};const l=[],u=[];f(o),g(r),x(),this.setAttribute("position",new Vn(l,3)),this.setAttribute("normal",new Vn(l.slice(),3)),this.setAttribute("uv",new Vn(u,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function f(L){const P=new Q,N=new Q,G=new Q;for(let O=0;O<n.length;O+=3)S(n[O+0],P),S(n[O+1],N),S(n[O+2],G),m(P,N,G,L)}function m(L,P,N,G){const O=G+1,D=[];for(let k=0;k<=O;k++){D[k]=[];const R=L.clone().lerp(N,k/O),b=P.clone().lerp(N,k/O),z=O-k;for(let re=0;re<=z;re++)re===0&&k===O?D[k][re]=R:D[k][re]=R.clone().lerp(b,re/z)}for(let k=0;k<O;k++)for(let R=0;R<2*(O-k)-1;R++){const b=Math.floor(R/2);R%2===0?(y(D[k][b+1]),y(D[k+1][b]),y(D[k][b])):(y(D[k][b+1]),y(D[k+1][b+1]),y(D[k+1][b]))}}function g(L){const P=new Q;for(let N=0;N<l.length;N+=3)P.x=l[N+0],P.y=l[N+1],P.z=l[N+2],P.normalize().multiplyScalar(L),l[N+0]=P.x,l[N+1]=P.y,l[N+2]=P.z}function x(){const L=new Q;for(let P=0;P<l.length;P+=3){L.x=l[P+0],L.y=l[P+1],L.z=l[P+2];const N=E(L)/2/Math.PI+.5,G=v(L)/Math.PI+.5;u.push(N,1-G)}T(),_()}function _(){for(let L=0;L<u.length;L+=6){const P=u[L+0],N=u[L+2],G=u[L+4],O=Math.max(P,N,G),D=Math.min(P,N,G);O>.9&&D<.1&&(P<.2&&(u[L+0]+=1),N<.2&&(u[L+2]+=1),G<.2&&(u[L+4]+=1))}}function y(L){l.push(L.x,L.y,L.z)}function S(L,P){const N=L*3;P.x=e[N+0],P.y=e[N+1],P.z=e[N+2]}function T(){const L=new Q,P=new Q,N=new Q,G=new Q,O=new bt,D=new bt,k=new bt;for(let R=0,b=0;R<l.length;R+=9,b+=6){L.set(l[R+0],l[R+1],l[R+2]),P.set(l[R+3],l[R+4],l[R+5]),N.set(l[R+6],l[R+7],l[R+8]),O.set(u[b+0],u[b+1]),D.set(u[b+2],u[b+3]),k.set(u[b+4],u[b+5]),G.copy(L).add(P).add(N).divideScalar(3);const z=E(G);C(O,b+0,L,z),C(D,b+2,P,z),C(k,b+4,N,z)}}function C(L,P,N,G){G<0&&L.x===1&&(u[P]=L.x-1),N.x===0&&N.z===0&&(u[P]=G/2/Math.PI+.5)}function E(L){return Math.atan2(L.z,-L.x)}function v(L){return Math.atan2(-L.y,Math.sqrt(L.x*L.x+L.z*L.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ef(e.vertices,e.indices,e.radius,e.details)}}class tf extends ef{constructor(e=1,n=0){const r=(1+Math.sqrt(5))/2,o=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],l=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(o,l,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new tf(e.radius,e.detail)}}class Ol extends fi{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const l=e/2,u=n/2,f=Math.floor(r),m=Math.floor(o),g=f+1,x=m+1,_=e/f,y=n/m,S=[],T=[],C=[],E=[];for(let v=0;v<x;v++){const L=v*y-u;for(let P=0;P<g;P++){const N=P*_-l;T.push(N,-L,0),C.push(0,0,1),E.push(P/f),E.push(1-v/m)}}for(let v=0;v<m;v++)for(let L=0;L<f;L++){const P=L+g*v,N=L+g*(v+1),G=L+1+g*(v+1),O=L+1+g*v;S.push(P,N,O),S.push(N,G,O)}this.setIndex(S),this.setAttribute("position",new Vn(T,3)),this.setAttribute("normal",new Vn(C,3)),this.setAttribute("uv",new Vn(E,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ol(e.width,e.height,e.widthSegments,e.heightSegments)}}class Il extends fi{constructor(e=1,n=.4,r=12,o=48,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:r,tubularSegments:o,arc:l},r=Math.floor(r),o=Math.floor(o);const u=[],f=[],m=[],g=[],x=new Q,_=new Q,y=new Q;for(let S=0;S<=r;S++)for(let T=0;T<=o;T++){const C=T/o*l,E=S/r*Math.PI*2;_.x=(e+n*Math.cos(E))*Math.cos(C),_.y=(e+n*Math.cos(E))*Math.sin(C),_.z=n*Math.sin(E),f.push(_.x,_.y,_.z),x.x=e*Math.cos(C),x.y=e*Math.sin(C),y.subVectors(_,x).normalize(),m.push(y.x,y.y,y.z),g.push(T/o),g.push(S/r)}for(let S=1;S<=r;S++)for(let T=1;T<=o;T++){const C=(o+1)*S+T-1,E=(o+1)*(S-1)+T-1,v=(o+1)*(S-1)+T,L=(o+1)*S+T;u.push(C,E,L),u.push(E,v,L)}this.setIndex(u),this.setAttribute("position",new Vn(f,3)),this.setAttribute("normal",new Vn(m,3)),this.setAttribute("uv",new Vn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Il(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ay extends ja{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=g_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class oy extends ja{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ly extends pg{constructor(e=-1,n=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const g=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=g*this.view.offsetX,u=l+g*this.view.width,f-=x*this.view.offsetY,m=f-x*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class cy extends Zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}function om(s,e,n,r){const o=uy(r);switch(n){case Zm:return s*e;case Jm:return s*e;case eg:return s*e*2;case tg:return s*e/o.components*o.byteLength;case Zd:return s*e/o.components*o.byteLength;case ng:return s*e*2/o.components*o.byteLength;case Qd:return s*e*2/o.components*o.byteLength;case Qm:return s*e*3/o.components*o.byteLength;case ci:return s*e*4/o.components*o.byteLength;case Jd:return s*e*4/o.components*o.byteLength;case bl:case Al:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Cl:case Rl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case pd:case gd:return Math.max(s,16)*Math.max(e,8)/4;case hd:case md:return Math.max(s,8)*Math.max(e,8)/2;case xd:case vd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case _d:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case yd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ed:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Sd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Md:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case wd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Td:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case bd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ad:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Cd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Rd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Nd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Pd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Fd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ld:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Nl:case Dd:case Id:return Math.ceil(s/4)*Math.ceil(e/4)*16;case ig:case Ud:return Math.ceil(s/4)*Math.ceil(e/4)*8;case kd:case Od:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function uy(s){switch(s){case Vi:case Ym:return{byteLength:1,components:1};case ka:case qm:case za:return{byteLength:2,components:1};case qd:case Kd:return{byteLength:2,components:4};case Kr:case Yd:case zi:return{byteLength:4,components:1};case Km:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$d}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$d);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function _g(){let s=null,e=!1,n=null,r=null;function o(l,u){n(l,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){s=l}}}function dy(s){const e=new WeakMap;function n(f,m){const g=f.array,x=f.usage,_=g.byteLength,y=s.createBuffer();s.bindBuffer(m,y),s.bufferData(m,g,x),f.onUploadCallback();let S;if(g instanceof Float32Array)S=s.FLOAT;else if(g instanceof Uint16Array)f.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(g instanceof Int16Array)S=s.SHORT;else if(g instanceof Uint32Array)S=s.UNSIGNED_INT;else if(g instanceof Int32Array)S=s.INT;else if(g instanceof Int8Array)S=s.BYTE;else if(g instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:y,type:S,bytesPerElement:g.BYTES_PER_ELEMENT,version:f.version,size:_}}function r(f,m,g){const x=m.array,_=m.updateRanges;if(s.bindBuffer(g,f),_.length===0)s.bufferSubData(g,0,x);else{_.sort((S,T)=>S.start-T.start);let y=0;for(let S=1;S<_.length;S++){const T=_[y],C=_[S];C.start<=T.start+T.count+1?T.count=Math.max(T.count,C.start+C.count-T.start):(++y,_[y]=C)}_.length=y+1;for(let S=0,T=_.length;S<T;S++){const C=_[S];s.bufferSubData(g,C.start*x.BYTES_PER_ELEMENT,x,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const m=e.get(f);m&&(s.deleteBuffer(m.buffer),e.delete(f))}function u(f,m){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const x=e.get(f);(!x||x.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const g=e.get(f);if(g===void 0)e.set(f,n(f,m));else if(g.version<f.version){if(g.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(g.buffer,f,m),g.version=f.version}}return{get:o,remove:l,update:u}}var fy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,py=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,my=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_y=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ey=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,My=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ty=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,by=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ay=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Cy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ry=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ny=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Py=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ly=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Dy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Iy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Uy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ky=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Oy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,By=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vy="gl_FragColor = linearToOutputTexel( gl_FragColor );",jy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Wy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$y=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ky=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,e1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,t1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,n1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,i1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,r1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,s1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,a1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,o1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,l1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,c1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,u1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,d1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,f1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,h1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,p1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,m1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,v1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,y1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,E1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,S1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,M1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,w1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,T1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,b1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,A1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,C1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,R1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,N1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,P1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,D1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,I1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,U1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,k1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,O1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,z1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,B1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,H1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,V1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,j1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,G1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,W1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,X1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Y1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,q1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,K1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Z1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Q1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,J1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,tE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,aE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,oE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,uE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_E=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,yE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,EE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,SE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ME=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,TE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,bE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,NE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,FE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,LE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,UE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,BE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,jE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,GE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ct={alphahash_fragment:fy,alphahash_pars_fragment:hy,alphamap_fragment:py,alphamap_pars_fragment:my,alphatest_fragment:gy,alphatest_pars_fragment:xy,aomap_fragment:vy,aomap_pars_fragment:_y,batching_pars_vertex:yy,batching_vertex:Ey,begin_vertex:Sy,beginnormal_vertex:My,bsdfs:wy,iridescence_fragment:Ty,bumpmap_pars_fragment:by,clipping_planes_fragment:Ay,clipping_planes_pars_fragment:Cy,clipping_planes_pars_vertex:Ry,clipping_planes_vertex:Ny,color_fragment:Py,color_pars_fragment:Fy,color_pars_vertex:Ly,color_vertex:Dy,common:Iy,cube_uv_reflection_fragment:Uy,defaultnormal_vertex:ky,displacementmap_pars_vertex:Oy,displacementmap_vertex:zy,emissivemap_fragment:By,emissivemap_pars_fragment:Hy,colorspace_fragment:Vy,colorspace_pars_fragment:jy,envmap_fragment:Gy,envmap_common_pars_fragment:Wy,envmap_pars_fragment:Xy,envmap_pars_vertex:$y,envmap_physical_pars_fragment:r1,envmap_vertex:Yy,fog_vertex:qy,fog_pars_vertex:Ky,fog_fragment:Zy,fog_pars_fragment:Qy,gradientmap_pars_fragment:Jy,lightmap_pars_fragment:e1,lights_lambert_fragment:t1,lights_lambert_pars_fragment:n1,lights_pars_begin:i1,lights_toon_fragment:s1,lights_toon_pars_fragment:a1,lights_phong_fragment:o1,lights_phong_pars_fragment:l1,lights_physical_fragment:c1,lights_physical_pars_fragment:u1,lights_fragment_begin:d1,lights_fragment_maps:f1,lights_fragment_end:h1,logdepthbuf_fragment:p1,logdepthbuf_pars_fragment:m1,logdepthbuf_pars_vertex:g1,logdepthbuf_vertex:x1,map_fragment:v1,map_pars_fragment:_1,map_particle_fragment:y1,map_particle_pars_fragment:E1,metalnessmap_fragment:S1,metalnessmap_pars_fragment:M1,morphinstance_vertex:w1,morphcolor_vertex:T1,morphnormal_vertex:b1,morphtarget_pars_vertex:A1,morphtarget_vertex:C1,normal_fragment_begin:R1,normal_fragment_maps:N1,normal_pars_fragment:P1,normal_pars_vertex:F1,normal_vertex:L1,normalmap_pars_fragment:D1,clearcoat_normal_fragment_begin:I1,clearcoat_normal_fragment_maps:U1,clearcoat_pars_fragment:k1,iridescence_pars_fragment:O1,opaque_fragment:z1,packing:B1,premultiplied_alpha_fragment:H1,project_vertex:V1,dithering_fragment:j1,dithering_pars_fragment:G1,roughnessmap_fragment:W1,roughnessmap_pars_fragment:X1,shadowmap_pars_fragment:$1,shadowmap_pars_vertex:Y1,shadowmap_vertex:q1,shadowmask_pars_fragment:K1,skinbase_vertex:Z1,skinning_pars_vertex:Q1,skinning_vertex:J1,skinnormal_vertex:eE,specularmap_fragment:tE,specularmap_pars_fragment:nE,tonemapping_fragment:iE,tonemapping_pars_fragment:rE,transmission_fragment:sE,transmission_pars_fragment:aE,uv_pars_fragment:oE,uv_pars_vertex:lE,uv_vertex:cE,worldpos_vertex:uE,background_vert:dE,background_frag:fE,backgroundCube_vert:hE,backgroundCube_frag:pE,cube_vert:mE,cube_frag:gE,depth_vert:xE,depth_frag:vE,distanceRGBA_vert:_E,distanceRGBA_frag:yE,equirect_vert:EE,equirect_frag:SE,linedashed_vert:ME,linedashed_frag:wE,meshbasic_vert:TE,meshbasic_frag:bE,meshlambert_vert:AE,meshlambert_frag:CE,meshmatcap_vert:RE,meshmatcap_frag:NE,meshnormal_vert:PE,meshnormal_frag:FE,meshphong_vert:LE,meshphong_frag:DE,meshphysical_vert:IE,meshphysical_frag:UE,meshtoon_vert:kE,meshtoon_frag:OE,points_vert:zE,points_frag:BE,shadow_vert:HE,shadow_frag:VE,sprite_vert:jE,sprite_frag:GE},Re={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},_i={basic:{uniforms:Mn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:Mn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Ct(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:Mn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:Mn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:Mn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new Ct(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:Mn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:Mn([Re.points,Re.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:Mn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:Mn([Re.common,Re.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:Mn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:Mn([Re.sprite,Re.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:Mn([Re.common,Re.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:Mn([Re.lights,Re.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};_i.physical={uniforms:Mn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const Ml={r:0,b:0,g:0},Vr=new ji,WE=new Xt;function XE(s,e,n,r,o,l,u){const f=new Ct(0);let m=l===!0?0:1,g,x,_=null,y=0,S=null;function T(P){let N=P.isScene===!0?P.background:null;return N&&N.isTexture&&(N=(P.backgroundBlurriness>0?n:e).get(N)),N}function C(P){let N=!1;const G=T(P);G===null?v(f,m):G&&G.isColor&&(v(G,1),N=!0);const O=s.xr.getEnvironmentBlendMode();O==="additive"?r.buffers.color.setClear(0,0,0,1,u):O==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||N)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function E(P,N){const G=T(N);G&&(G.isCubeTexture||G.mapping===Ul)?(x===void 0&&(x=new Qn(new Ga(1,1,1),new Sr({name:"BackgroundCubeMaterial",uniforms:$s(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(O,D,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(x)),Vr.copy(N.backgroundRotation),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),x.material.uniforms.envMap.value=G,x.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(WE.makeRotationFromEuler(Vr)),x.material.toneMapped=wt.getTransfer(G.colorSpace)!==Rt,(_!==G||y!==G.version||S!==s.toneMapping)&&(x.material.needsUpdate=!0,_=G,y=G.version,S=s.toneMapping),x.layers.enableAll(),P.unshift(x,x.geometry,x.material,0,0,null)):G&&G.isTexture&&(g===void 0&&(g=new Qn(new Ol(2,2),new Sr({name:"BackgroundMaterial",uniforms:$s(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:Er,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(g)),g.material.uniforms.t2D.value=G,g.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,g.material.toneMapped=wt.getTransfer(G.colorSpace)!==Rt,G.matrixAutoUpdate===!0&&G.updateMatrix(),g.material.uniforms.uvTransform.value.copy(G.matrix),(_!==G||y!==G.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,_=G,y=G.version,S=s.toneMapping),g.layers.enableAll(),P.unshift(g,g.geometry,g.material,0,0,null))}function v(P,N){P.getRGB(Ml,hg(s)),r.buffers.color.setClear(Ml.r,Ml.g,Ml.b,N,u)}function L(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return f},setClearColor:function(P,N=1){f.set(P),m=N,v(f,m)},getClearAlpha:function(){return m},setClearAlpha:function(P){m=P,v(f,m)},render:C,addToRenderList:E,dispose:L}}function $E(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=y(null);let l=o,u=!1;function f(b,z,re,te,ue){let fe=!1;const se=_(te,re,z);l!==se&&(l=se,g(l.object)),fe=S(b,te,re,ue),fe&&T(b,te,re,ue),ue!==null&&e.update(ue,s.ELEMENT_ARRAY_BUFFER),(fe||u)&&(u=!1,N(b,z,re,te),ue!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ue).buffer))}function m(){return s.createVertexArray()}function g(b){return s.bindVertexArray(b)}function x(b){return s.deleteVertexArray(b)}function _(b,z,re){const te=re.wireframe===!0;let ue=r[b.id];ue===void 0&&(ue={},r[b.id]=ue);let fe=ue[z.id];fe===void 0&&(fe={},ue[z.id]=fe);let se=fe[te];return se===void 0&&(se=y(m()),fe[te]=se),se}function y(b){const z=[],re=[],te=[];for(let ue=0;ue<n;ue++)z[ue]=0,re[ue]=0,te[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:re,attributeDivisors:te,object:b,attributes:{},index:null}}function S(b,z,re,te){const ue=l.attributes,fe=z.attributes;let se=0;const oe=re.getAttributes();for(const V in oe)if(oe[V].location>=0){const le=ue[V];let U=fe[V];if(U===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(U=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(U=b.instanceColor)),le===void 0||le.attribute!==U||U&&le.data!==U.data)return!0;se++}return l.attributesNum!==se||l.index!==te}function T(b,z,re,te){const ue={},fe=z.attributes;let se=0;const oe=re.getAttributes();for(const V in oe)if(oe[V].location>=0){let le=fe[V];le===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(le=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(le=b.instanceColor));const U={};U.attribute=le,le&&le.data&&(U.data=le.data),ue[V]=U,se++}l.attributes=ue,l.attributesNum=se,l.index=te}function C(){const b=l.newAttributes;for(let z=0,re=b.length;z<re;z++)b[z]=0}function E(b){v(b,0)}function v(b,z){const re=l.newAttributes,te=l.enabledAttributes,ue=l.attributeDivisors;re[b]=1,te[b]===0&&(s.enableVertexAttribArray(b),te[b]=1),ue[b]!==z&&(s.vertexAttribDivisor(b,z),ue[b]=z)}function L(){const b=l.newAttributes,z=l.enabledAttributes;for(let re=0,te=z.length;re<te;re++)z[re]!==b[re]&&(s.disableVertexAttribArray(re),z[re]=0)}function P(b,z,re,te,ue,fe,se){se===!0?s.vertexAttribIPointer(b,z,re,ue,fe):s.vertexAttribPointer(b,z,re,te,ue,fe)}function N(b,z,re,te){C();const ue=te.attributes,fe=re.getAttributes(),se=z.defaultAttributeValues;for(const oe in fe){const V=fe[oe];if(V.location>=0){let ce=ue[oe];if(ce===void 0&&(oe==="instanceMatrix"&&b.instanceMatrix&&(ce=b.instanceMatrix),oe==="instanceColor"&&b.instanceColor&&(ce=b.instanceColor)),ce!==void 0){const le=ce.normalized,U=ce.itemSize,ie=e.get(ce);if(ie===void 0)continue;const De=ie.buffer,J=ie.type,pe=ie.bytesPerElement,Se=J===s.INT||J===s.UNSIGNED_INT||ce.gpuType===Yd;if(ce.isInterleavedBufferAttribute){const _e=ce.data,Te=_e.stride,$e=ce.offset;if(_e.isInstancedInterleavedBuffer){for(let je=0;je<V.locationSize;je++)v(V.location+je,_e.meshPerAttribute);b.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let je=0;je<V.locationSize;je++)E(V.location+je);s.bindBuffer(s.ARRAY_BUFFER,De);for(let je=0;je<V.locationSize;je++)P(V.location+je,U/V.locationSize,J,le,Te*pe,($e+U/V.locationSize*je)*pe,Se)}else{if(ce.isInstancedBufferAttribute){for(let _e=0;_e<V.locationSize;_e++)v(V.location+_e,ce.meshPerAttribute);b.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let _e=0;_e<V.locationSize;_e++)E(V.location+_e);s.bindBuffer(s.ARRAY_BUFFER,De);for(let _e=0;_e<V.locationSize;_e++)P(V.location+_e,U/V.locationSize,J,le,U*pe,U/V.locationSize*_e*pe,Se)}}else if(se!==void 0){const le=se[oe];if(le!==void 0)switch(le.length){case 2:s.vertexAttrib2fv(V.location,le);break;case 3:s.vertexAttrib3fv(V.location,le);break;case 4:s.vertexAttrib4fv(V.location,le);break;default:s.vertexAttrib1fv(V.location,le)}}}}L()}function G(){k();for(const b in r){const z=r[b];for(const re in z){const te=z[re];for(const ue in te)x(te[ue].object),delete te[ue];delete z[re]}delete r[b]}}function O(b){if(r[b.id]===void 0)return;const z=r[b.id];for(const re in z){const te=z[re];for(const ue in te)x(te[ue].object),delete te[ue];delete z[re]}delete r[b.id]}function D(b){for(const z in r){const re=r[z];if(re[b.id]===void 0)continue;const te=re[b.id];for(const ue in te)x(te[ue].object),delete te[ue];delete re[b.id]}}function k(){R(),u=!0,l!==o&&(l=o,g(l.object))}function R(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:k,resetDefaultState:R,dispose:G,releaseStatesOfGeometry:O,releaseStatesOfProgram:D,initAttributes:C,enableAttribute:E,disableUnusedAttributes:L}}function YE(s,e,n){let r;function o(g){r=g}function l(g,x){s.drawArrays(r,g,x),n.update(x,r,1)}function u(g,x,_){_!==0&&(s.drawArraysInstanced(r,g,x,_),n.update(x,r,_))}function f(g,x,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,g,0,x,0,_);let S=0;for(let T=0;T<_;T++)S+=x[T];n.update(S,r,1)}function m(g,x,_,y){if(_===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let T=0;T<g.length;T++)u(g[T],x[T],y[T]);else{S.multiDrawArraysInstancedWEBGL(r,g,0,x,0,y,0,_);let T=0;for(let C=0;C<_;C++)T+=x[C]*y[C];n.update(T,r,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=m}function qE(s,e,n,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(D){return!(D!==ci&&r.convert(D)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(D){const k=D===za&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Vi&&r.convert(D)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==zi&&!k)}function m(D){if(D==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=n.precision!==void 0?n.precision:"highp";const x=m(g);x!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",x,"instead."),g=x);const _=n.logarithmicDepthBuffer===!0,y=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),E=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),L=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),P=s.getParameter(s.MAX_VARYING_VECTORS),N=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),G=T>0,O=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:f,precision:g,logarithmicDepthBuffer:_,reverseDepthBuffer:y,maxTextures:S,maxVertexTextures:T,maxTextureSize:C,maxCubemapSize:E,maxAttributes:v,maxVertexUniforms:L,maxVaryings:P,maxFragmentUniforms:N,vertexTextures:G,maxSamples:O}}function KE(s){const e=this;let n=null,r=0,o=!1,l=!1;const u=new Gr,f=new ot,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,y){const S=_.length!==0||y||r!==0||o;return o=y,r=_.length,S},this.beginShadows=function(){l=!0,x(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,y){n=x(_,y,0)},this.setState=function(_,y,S){const T=_.clippingPlanes,C=_.clipIntersection,E=_.clipShadows,v=s.get(_);if(!o||T===null||T.length===0||l&&!E)l?x(null):g();else{const L=l?0:r,P=L*4;let N=v.clippingState||null;m.value=N,N=x(T,y,P,S);for(let G=0;G!==P;++G)N[G]=n[G];v.clippingState=N,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=L}};function g(){m.value!==n&&(m.value=n,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(_,y,S,T){const C=_!==null?_.length:0;let E=null;if(C!==0){if(E=m.value,T!==!0||E===null){const v=S+C*4,L=y.matrixWorldInverse;f.getNormalMatrix(L),(E===null||E.length<v)&&(E=new Float32Array(v));for(let P=0,N=S;P!==C;++P,N+=4)u.copy(_[P]).applyMatrix4(L,f),u.normal.toArray(E,N),E[N+3]=u.constant}m.value=E,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,E}}function ZE(s){let e=new WeakMap;function n(u,f){return f===cd?u.mapping=Vs:f===ud&&(u.mapping=js),u}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===cd||f===ud)if(e.has(u)){const m=e.get(u).texture;return n(m,u.mapping)}else{const m=u.image;if(m&&m.height>0){const g=new ey(m.height);return g.fromEquirectangularTexture(s,u),e.set(u,g),u.addEventListener("dispose",o),n(g.texture,u.mapping)}else return null}}return u}function o(u){const f=u.target;f.removeEventListener("dispose",o);const m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const ks=4,lm=[.125,.215,.35,.446,.526,.582],$r=20,$u=new ly,cm=new Ct;let Yu=null,qu=0,Ku=0,Zu=!1;const Wr=(1+Math.sqrt(5))/2,Is=1/Wr,um=[new Q(-Wr,Is,0),new Q(Wr,Is,0),new Q(-Is,0,Wr),new Q(Is,0,Wr),new Q(0,Wr,-Is),new Q(0,Wr,Is),new Q(-1,1,-1),new Q(1,1,-1),new Q(-1,1,1),new Q(1,1,1)];class dm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,o=100){Yu=this._renderer.getRenderTarget(),qu=this._renderer.getActiveCubeFace(),Ku=this._renderer.getActiveMipmapLevel(),Zu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,o,l),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yu,qu,Ku),this._renderer.xr.enabled=Zu,e.scissorTest=!1,wl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Vs||e.mapping===js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yu=this._renderer.getRenderTarget(),qu=this._renderer.getActiveCubeFace(),Ku=this._renderer.getActiveMipmapLevel(),Zu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:yi,minFilter:yi,generateMipmaps:!1,type:za,format:ci,colorSpace:Xs,depthBuffer:!1},o=fm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fm(e,n,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=QE(l)),this._blurMaterial=JE(l,e,n)}return o}_compileMaterial(e){const n=new Qn(this._lodPlanes[0],e);this._renderer.compile(n,$u)}_sceneToCubeUV(e,n,r,o){const f=new Zn(90,1,n,r),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],x=this._renderer,_=x.autoClear,y=x.toneMapping;x.getClearColor(cm),x.toneMapping=yr,x.autoClear=!1;const S=new Ia({name:"PMREM.Background",side:Ln,depthWrite:!1,depthTest:!1}),T=new Qn(new Ga,S);let C=!1;const E=e.background;E?E.isColor&&(S.color.copy(E),e.background=null,C=!0):(S.color.copy(cm),C=!0);for(let v=0;v<6;v++){const L=v%3;L===0?(f.up.set(0,m[v],0),f.lookAt(g[v],0,0)):L===1?(f.up.set(0,0,m[v]),f.lookAt(0,g[v],0)):(f.up.set(0,m[v],0),f.lookAt(0,0,g[v]));const P=this._cubeSize;wl(o,L*P,v>2?P:0,P,P),x.setRenderTarget(o),C&&x.render(T,f),x.render(e,f)}T.geometry.dispose(),T.material.dispose(),x.toneMapping=y,x.autoClear=_,e.background=E}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===Vs||e.mapping===js;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=pm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hm());const l=o?this._cubemapMaterial:this._equirectMaterial,u=new Qn(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const m=this._cubeSize;wl(n,0,0,3*m,2*m),r.setRenderTarget(n),r.render(u,$u)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=um[(o-l-1)%um.length];this._blur(e,l-1,l,u,f)}n.autoClear=r}_blur(e,n,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,n,r,o,l,u,f){const m=this._renderer,g=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const x=3,_=new Qn(this._lodPlanes[o],g),y=g.uniforms,S=this._sizeLods[r]-1,T=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*$r-1),C=l/T,E=isFinite(l)?1+Math.floor(x*C):$r;E>$r&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${E} samples when the maximum is set to ${$r}`);const v=[];let L=0;for(let D=0;D<$r;++D){const k=D/C,R=Math.exp(-k*k/2);v.push(R),D===0?L+=R:D<E&&(L+=2*R)}for(let D=0;D<v.length;D++)v[D]=v[D]/L;y.envMap.value=e.texture,y.samples.value=E,y.weights.value=v,y.latitudinal.value=u==="latitudinal",f&&(y.poleAxis.value=f);const{_lodMax:P}=this;y.dTheta.value=T,y.mipInt.value=P-r;const N=this._sizeLods[o],G=3*N*(o>P-ks?o-P+ks:0),O=4*(this._cubeSize-N);wl(n,G,O,3*N,2*N),m.setRenderTarget(n),m.render(_,$u)}}function QE(s){const e=[],n=[],r=[];let o=s;const l=s-ks+1+lm.length;for(let u=0;u<l;u++){const f=Math.pow(2,o);n.push(f);let m=1/f;u>s-ks?m=lm[u-s+ks-1]:u===0&&(m=0),r.push(m);const g=1/(f-2),x=-g,_=1+g,y=[x,x,_,x,_,_,x,x,_,_,x,_],S=6,T=6,C=3,E=2,v=1,L=new Float32Array(C*T*S),P=new Float32Array(E*T*S),N=new Float32Array(v*T*S);for(let O=0;O<S;O++){const D=O%3*2/3-1,k=O>2?0:-1,R=[D,k,0,D+2/3,k,0,D+2/3,k+1,0,D,k,0,D+2/3,k+1,0,D,k+1,0];L.set(R,C*T*O),P.set(y,E*T*O);const b=[O,O,O,O,O,O];N.set(b,v*T*O)}const G=new fi;G.setAttribute("position",new di(L,C)),G.setAttribute("uv",new di(P,E)),G.setAttribute("faceIndex",new di(N,v)),e.push(G),o>ks&&o--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function fm(s,e,n){const r=new Zr(s,e,n);return r.texture.mapping=Ul,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function wl(s,e,n,r,o){s.viewport.set(e,n,r,o),s.scissor.set(e,n,r,o)}function JE(s,e,n){const r=new Float32Array($r),o=new Q(0,1,0);return new Sr({name:"SphericalGaussianBlur",defines:{n:$r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:nf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function hm(){return new Sr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function pm(){return new Sr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function nf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function eS(s){let e=new WeakMap,n=null;function r(f){if(f&&f.isTexture){const m=f.mapping,g=m===cd||m===ud,x=m===Vs||m===js;if(g||x){let _=e.get(f);const y=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==y)return n===null&&(n=new dm(s)),_=g?n.fromEquirectangular(f,_):n.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),_.texture;if(_!==void 0)return _.texture;{const S=f.image;return g&&S&&S.height>0||x&&S&&o(S)?(n===null&&(n=new dm(s)),_=g?n.fromEquirectangular(f):n.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),f.addEventListener("dispose",l),_.texture):null}}}return f}function o(f){let m=0;const g=6;for(let x=0;x<g;x++)f[x]!==void 0&&m++;return m===g}function l(f){const m=f.target;m.removeEventListener("dispose",l);const g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function tS(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(r)}return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&Us("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function nS(s,e,n,r){const o={},l=new WeakMap;function u(_){const y=_.target;y.index!==null&&e.remove(y.index);for(const T in y.attributes)e.remove(y.attributes[T]);y.removeEventListener("dispose",u),delete o[y.id];const S=l.get(y);S&&(e.remove(S),l.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,n.memory.geometries--}function f(_,y){return o[y.id]===!0||(y.addEventListener("dispose",u),o[y.id]=!0,n.memory.geometries++),y}function m(_){const y=_.attributes;for(const S in y)e.update(y[S],s.ARRAY_BUFFER)}function g(_){const y=[],S=_.index,T=_.attributes.position;let C=0;if(S!==null){const L=S.array;C=S.version;for(let P=0,N=L.length;P<N;P+=3){const G=L[P+0],O=L[P+1],D=L[P+2];y.push(G,O,O,D,D,G)}}else if(T!==void 0){const L=T.array;C=T.version;for(let P=0,N=L.length/3-1;P<N;P+=3){const G=P+0,O=P+1,D=P+2;y.push(G,O,O,D,D,G)}}else return;const E=new(sg(y)?fg:dg)(y,1);E.version=C;const v=l.get(_);v&&e.remove(v),l.set(_,E)}function x(_){const y=l.get(_);if(y){const S=_.index;S!==null&&y.version<S.version&&g(_)}else g(_);return l.get(_)}return{get:f,update:m,getWireframeAttribute:x}}function iS(s,e,n){let r;function o(y){r=y}let l,u;function f(y){l=y.type,u=y.bytesPerElement}function m(y,S){s.drawElements(r,S,l,y*u),n.update(S,r,1)}function g(y,S,T){T!==0&&(s.drawElementsInstanced(r,S,l,y*u,T),n.update(S,r,T))}function x(y,S,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,l,y,0,T);let E=0;for(let v=0;v<T;v++)E+=S[v];n.update(E,r,1)}function _(y,S,T,C){if(T===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let v=0;v<y.length;v++)g(y[v]/u,S[v],C[v]);else{E.multiDrawElementsInstancedWEBGL(r,S,0,l,y,0,C,0,T);let v=0;for(let L=0;L<T;L++)v+=S[L]*C[L];n.update(v,r,1)}}this.setMode=o,this.setIndex=f,this.render=m,this.renderInstances=g,this.renderMultiDraw=x,this.renderMultiDrawInstances=_}function rS(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=f*(l/3);break;case s.LINES:n.lines+=f*(l/2);break;case s.LINE_STRIP:n.lines+=f*(l-1);break;case s.LINE_LOOP:n.lines+=f*l;break;case s.POINTS:n.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function sS(s,e,n){const r=new WeakMap,o=new Wt;function l(u,f,m){const g=u.morphTargetInfluences,x=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=x!==void 0?x.length:0;let y=r.get(f);if(y===void 0||y.count!==_){let b=function(){k.dispose(),r.delete(f),f.removeEventListener("dispose",b)};var S=b;y!==void 0&&y.texture.dispose();const T=f.morphAttributes.position!==void 0,C=f.morphAttributes.normal!==void 0,E=f.morphAttributes.color!==void 0,v=f.morphAttributes.position||[],L=f.morphAttributes.normal||[],P=f.morphAttributes.color||[];let N=0;T===!0&&(N=1),C===!0&&(N=2),E===!0&&(N=3);let G=f.attributes.position.count*N,O=1;G>e.maxTextureSize&&(O=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const D=new Float32Array(G*O*4*_),k=new og(D,G,O,_);k.type=zi,k.needsUpdate=!0;const R=N*4;for(let z=0;z<_;z++){const re=v[z],te=L[z],ue=P[z],fe=G*O*4*z;for(let se=0;se<re.count;se++){const oe=se*R;T===!0&&(o.fromBufferAttribute(re,se),D[fe+oe+0]=o.x,D[fe+oe+1]=o.y,D[fe+oe+2]=o.z,D[fe+oe+3]=0),C===!0&&(o.fromBufferAttribute(te,se),D[fe+oe+4]=o.x,D[fe+oe+5]=o.y,D[fe+oe+6]=o.z,D[fe+oe+7]=0),E===!0&&(o.fromBufferAttribute(ue,se),D[fe+oe+8]=o.x,D[fe+oe+9]=o.y,D[fe+oe+10]=o.z,D[fe+oe+11]=ue.itemSize===4?o.w:1)}}y={count:_,texture:k,size:new bt(G,O)},r.set(f,y),f.addEventListener("dispose",b)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let T=0;for(let E=0;E<g.length;E++)T+=g[E];const C=f.morphTargetsRelative?1:1-T;m.getUniforms().setValue(s,"morphTargetBaseInfluence",C),m.getUniforms().setValue(s,"morphTargetInfluences",g)}m.getUniforms().setValue(s,"morphTargetsTexture",y.texture,n),m.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:l}}function aS(s,e,n,r){let o=new WeakMap;function l(m){const g=r.render.frame,x=m.geometry,_=e.get(m,x);if(o.get(_)!==g&&(e.update(_),o.set(_,g)),m.isInstancedMesh&&(m.hasEventListener("dispose",f)===!1&&m.addEventListener("dispose",f),o.get(m)!==g&&(n.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,s.ARRAY_BUFFER),o.set(m,g))),m.isSkinnedMesh){const y=m.skeleton;o.get(y)!==g&&(y.update(),o.set(y,g))}return _}function u(){o=new WeakMap}function f(m){const g=m.target;g.removeEventListener("dispose",f),n.remove(g.instanceMatrix),g.instanceColor!==null&&n.remove(g.instanceColor)}return{update:l,dispose:u}}const yg=new Dn,mm=new vg(1,1),Eg=new og,Sg=new k_,Mg=new mg,gm=[],xm=[],vm=new Float32Array(16),_m=new Float32Array(9),ym=new Float32Array(4);function qs(s,e,n){const r=s[0];if(r<=0||r>0)return s;const o=e*n;let l=gm[o];if(l===void 0&&(l=new Float32Array(o),gm[o]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=n,s[u].toArray(l,f)}return l}function Qt(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function Jt(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function zl(s,e){let n=xm[e];n===void 0&&(n=new Int32Array(e),xm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function oS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function lS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Qt(n,e))return;s.uniform2fv(this.addr,e),Jt(n,e)}}function cS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Qt(n,e))return;s.uniform3fv(this.addr,e),Jt(n,e)}}function uS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Qt(n,e))return;s.uniform4fv(this.addr,e),Jt(n,e)}}function dS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Qt(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),Jt(n,e)}else{if(Qt(n,r))return;ym.set(r),s.uniformMatrix2fv(this.addr,!1,ym),Jt(n,r)}}function fS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Qt(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),Jt(n,e)}else{if(Qt(n,r))return;_m.set(r),s.uniformMatrix3fv(this.addr,!1,_m),Jt(n,r)}}function hS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Qt(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),Jt(n,e)}else{if(Qt(n,r))return;vm.set(r),s.uniformMatrix4fv(this.addr,!1,vm),Jt(n,r)}}function pS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function mS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Qt(n,e))return;s.uniform2iv(this.addr,e),Jt(n,e)}}function gS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Qt(n,e))return;s.uniform3iv(this.addr,e),Jt(n,e)}}function xS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Qt(n,e))return;s.uniform4iv(this.addr,e),Jt(n,e)}}function vS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function _S(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Qt(n,e))return;s.uniform2uiv(this.addr,e),Jt(n,e)}}function yS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Qt(n,e))return;s.uniform3uiv(this.addr,e),Jt(n,e)}}function ES(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Qt(n,e))return;s.uniform4uiv(this.addr,e),Jt(n,e)}}function SS(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(mm.compareFunction=rg,l=mm):l=yg,n.setTexture2D(e||l,o)}function MS(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||Sg,o)}function wS(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||Mg,o)}function TS(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||Eg,o)}function bS(s){switch(s){case 5126:return oS;case 35664:return lS;case 35665:return cS;case 35666:return uS;case 35674:return dS;case 35675:return fS;case 35676:return hS;case 5124:case 35670:return pS;case 35667:case 35671:return mS;case 35668:case 35672:return gS;case 35669:case 35673:return xS;case 5125:return vS;case 36294:return _S;case 36295:return yS;case 36296:return ES;case 35678:case 36198:case 36298:case 36306:case 35682:return SS;case 35679:case 36299:case 36307:return MS;case 35680:case 36300:case 36308:case 36293:return wS;case 36289:case 36303:case 36311:case 36292:return TS}}function AS(s,e){s.uniform1fv(this.addr,e)}function CS(s,e){const n=qs(e,this.size,2);s.uniform2fv(this.addr,n)}function RS(s,e){const n=qs(e,this.size,3);s.uniform3fv(this.addr,n)}function NS(s,e){const n=qs(e,this.size,4);s.uniform4fv(this.addr,n)}function PS(s,e){const n=qs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function FS(s,e){const n=qs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function LS(s,e){const n=qs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function DS(s,e){s.uniform1iv(this.addr,e)}function IS(s,e){s.uniform2iv(this.addr,e)}function US(s,e){s.uniform3iv(this.addr,e)}function kS(s,e){s.uniform4iv(this.addr,e)}function OS(s,e){s.uniform1uiv(this.addr,e)}function zS(s,e){s.uniform2uiv(this.addr,e)}function BS(s,e){s.uniform3uiv(this.addr,e)}function HS(s,e){s.uniform4uiv(this.addr,e)}function VS(s,e,n){const r=this.cache,o=e.length,l=zl(n,o);Qt(r,l)||(s.uniform1iv(this.addr,l),Jt(r,l));for(let u=0;u!==o;++u)n.setTexture2D(e[u]||yg,l[u])}function jS(s,e,n){const r=this.cache,o=e.length,l=zl(n,o);Qt(r,l)||(s.uniform1iv(this.addr,l),Jt(r,l));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||Sg,l[u])}function GS(s,e,n){const r=this.cache,o=e.length,l=zl(n,o);Qt(r,l)||(s.uniform1iv(this.addr,l),Jt(r,l));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||Mg,l[u])}function WS(s,e,n){const r=this.cache,o=e.length,l=zl(n,o);Qt(r,l)||(s.uniform1iv(this.addr,l),Jt(r,l));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||Eg,l[u])}function XS(s){switch(s){case 5126:return AS;case 35664:return CS;case 35665:return RS;case 35666:return NS;case 35674:return PS;case 35675:return FS;case 35676:return LS;case 5124:case 35670:return DS;case 35667:case 35671:return IS;case 35668:case 35672:return US;case 35669:case 35673:return kS;case 5125:return OS;case 36294:return zS;case 36295:return BS;case 36296:return HS;case 35678:case 36198:case 36298:case 36306:case 35682:return VS;case 35679:case 36299:case 36307:return jS;case 35680:case 36300:case 36308:case 36293:return GS;case 36289:case 36303:case 36311:case 36292:return WS}}class $S{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=bS(n.type)}}class YS{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=XS(n.type)}}class qS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,n[f.id],r)}}}const Qu=/(\w+)(\])?(\[|\.)?/g;function Em(s,e){s.seq.push(e),s.map[e.id]=e}function KS(s,e,n){const r=s.name,o=r.length;for(Qu.lastIndex=0;;){const l=Qu.exec(r),u=Qu.lastIndex;let f=l[1];const m=l[2]==="]",g=l[3];if(m&&(f=f|0),g===void 0||g==="["&&u+2===o){Em(n,g===void 0?new $S(f,s,e):new YS(f,s,e));break}else{let _=n.map[f];_===void 0&&(_=new qS(f),Em(n,_)),n=_}}}class Pl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const l=e.getActiveUniform(n,o),u=e.getUniformLocation(n,l.name);KS(l,u,this)}}setValue(e,n,r,o){const l=this.map[n];l!==void 0&&l.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let l=0,u=n.length;l!==u;++l){const f=n[l],m=r[f.id];m.needsUpdate!==!1&&f.setValue(e,m.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in n&&r.push(u)}return r}}function Sm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const ZS=37297;let QS=0;function JS(s,e){const n=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let u=o;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${n[u]}`)}return r.join(`
`)}const Mm=new ot;function eM(s){wt._getMatrix(Mm,wt.workingColorSpace,s);const e=`mat3( ${Mm.elements.map(n=>n.toFixed(4))} )`;switch(wt.getTransfer(s)){case Fl:return[e,"LinearTransferOETF"];case Rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function wm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(r&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const u=parseInt(l[1]);return n.toUpperCase()+`

`+o+`

`+JS(s.getShaderSource(e),u)}else return o}function tM(s,e){const n=eM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function nM(s,e){let n;switch(e){case l_:n="Linear";break;case c_:n="Reinhard";break;case u_:n="Cineon";break;case d_:n="ACESFilmic";break;case h_:n="AgX";break;case p_:n="Neutral";break;case f_:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Tl=new Q;function iM(){wt.getLuminanceCoefficients(Tl);const s=Tl.x.toFixed(4),e=Tl.y.toFixed(4),n=Tl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Da).join(`
`)}function sM(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function aM(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),n[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:f}}return n}function Da(s){return s!==""}function Tm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const oM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hd(s){return s.replace(oM,cM)}const lM=new Map;function cM(s,e){let n=ct[e];if(n===void 0){const r=lM.get(e);if(r!==void 0)n=ct[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Hd(n)}const uM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Am(s){return s.replace(uM,dM)}function dM(s,e,n,r){let o="";for(let l=parseInt(e);l<parseInt(n);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Cm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function fM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Wm?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Hv?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ki&&(e="SHADOWMAP_TYPE_VSM"),e}function hM(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Vs:case js:e="ENVMAP_TYPE_CUBE";break;case Ul:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pM(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case js:e="ENVMAP_MODE_REFRACTION";break}return e}function mM(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Xm:e="ENVMAP_BLENDING_MULTIPLY";break;case a_:e="ENVMAP_BLENDING_MIX";break;case o_:e="ENVMAP_BLENDING_ADD";break}return e}function gM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function xM(s,e,n,r){const o=s.getContext(),l=n.defines;let u=n.vertexShader,f=n.fragmentShader;const m=fM(n),g=hM(n),x=pM(n),_=mM(n),y=gM(n),S=rM(n),T=sM(l),C=o.createProgram();let E,v,L=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(E=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Da).join(`
`),E.length>0&&(E+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Da).join(`
`),v.length>0&&(v+=`
`)):(E=[Cm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+x:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Da).join(`
`),v=[Cm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.envMap?"#define "+x:"",n.envMap?"#define "+_:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==yr?"#define TONE_MAPPING":"",n.toneMapping!==yr?ct.tonemapping_pars_fragment:"",n.toneMapping!==yr?nM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,tM("linearToOutputTexel",n.outputColorSpace),iM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Da).join(`
`)),u=Hd(u),u=Tm(u,n),u=bm(u,n),f=Hd(f),f=Tm(f,n),f=bm(f,n),u=Am(u),f=Am(f),n.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,E=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,v=["#define varying in",n.glslVersion===Hp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Hp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const P=L+E+u,N=L+v+f,G=Sm(o,o.VERTEX_SHADER,P),O=Sm(o,o.FRAGMENT_SHADER,N);o.attachShader(C,G),o.attachShader(C,O),n.index0AttributeName!==void 0?o.bindAttribLocation(C,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(C,0,"position"),o.linkProgram(C);function D(z){if(s.debug.checkShaderErrors){const re=o.getProgramInfoLog(C).trim(),te=o.getShaderInfoLog(G).trim(),ue=o.getShaderInfoLog(O).trim();let fe=!0,se=!0;if(o.getProgramParameter(C,o.LINK_STATUS)===!1)if(fe=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,C,G,O);else{const oe=wm(o,G,"vertex"),V=wm(o,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(C,o.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+re+`
`+oe+`
`+V)}else re!==""?console.warn("THREE.WebGLProgram: Program Info Log:",re):(te===""||ue==="")&&(se=!1);se&&(z.diagnostics={runnable:fe,programLog:re,vertexShader:{log:te,prefix:E},fragmentShader:{log:ue,prefix:v}})}o.deleteShader(G),o.deleteShader(O),k=new Pl(o,C),R=aM(o,C)}let k;this.getUniforms=function(){return k===void 0&&D(this),k};let R;this.getAttributes=function(){return R===void 0&&D(this),R};let b=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=o.getProgramParameter(C,ZS)),b},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(C),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=QS++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=G,this.fragmentShader=O,this}let vM=0;class _M{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(n),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new yM(e),n.set(e,r)),r}}class yM{constructor(e){this.id=vM++,this.code=e,this.usedTimes=0}}function EM(s,e,n,r,o,l,u){const f=new cg,m=new _M,g=new Set,x=[],_=o.logarithmicDepthBuffer,y=o.vertexTextures;let S=o.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(R){return g.add(R),R===0?"uv":`uv${R}`}function E(R,b,z,re,te){const ue=re.fog,fe=te.geometry,se=R.isMeshStandardMaterial?re.environment:null,oe=(R.isMeshStandardMaterial?n:e).get(R.envMap||se),V=oe&&oe.mapping===Ul?oe.image.height:null,ce=T[R.type];R.precision!==null&&(S=o.getMaxPrecision(R.precision),S!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",S,"instead."));const le=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,U=le!==void 0?le.length:0;let ie=0;fe.morphAttributes.position!==void 0&&(ie=1),fe.morphAttributes.normal!==void 0&&(ie=2),fe.morphAttributes.color!==void 0&&(ie=3);let De,J,pe,Se;if(ce){const yt=_i[ce];De=yt.vertexShader,J=yt.fragmentShader}else De=R.vertexShader,J=R.fragmentShader,m.update(R),pe=m.getVertexShaderID(R),Se=m.getFragmentShaderID(R);const _e=s.getRenderTarget(),Te=s.state.buffers.depth.getReversed(),$e=te.isInstancedMesh===!0,je=te.isBatchedMesh===!0,Pt=!!R.map,Ft=!!R.matcap,ut=!!oe,H=!!R.aoMap,vn=!!R.lightMap,mt=!!R.bumpMap,ft=!!R.normalMap,Ye=!!R.displacementMap,At=!!R.emissiveMap,Ge=!!R.metalnessMap,F=!!R.roughnessMap,w=R.anisotropy>0,Z=R.clearcoat>0,me=R.dispersion>0,xe=R.iridescence>0,de=R.sheen>0,We=R.transmission>0,be=w&&!!R.anisotropyMap,Ie=Z&&!!R.clearcoatMap,dt=Z&&!!R.clearcoatNormalMap,Me=Z&&!!R.clearcoatRoughnessMap,ke=xe&&!!R.iridescenceMap,Ke=xe&&!!R.iridescenceThicknessMap,et=de&&!!R.sheenColorMap,Oe=de&&!!R.sheenRoughnessMap,ht=!!R.specularMap,rt=!!R.specularColorMap,Tt=!!R.specularIntensityMap,W=We&&!!R.transmissionMap,Ae=We&&!!R.thicknessMap,ae=!!R.gradientMap,he=!!R.alphaMap,Pe=R.alphaTest>0,Ne=!!R.alphaHash,st=!!R.extensions;let Dt=yr;R.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(Dt=s.toneMapping);const qt={shaderID:ce,shaderType:R.type,shaderName:R.name,vertexShader:De,fragmentShader:J,defines:R.defines,customVertexShaderID:pe,customFragmentShaderID:Se,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:S,batching:je,batchingColor:je&&te._colorsTexture!==null,instancing:$e,instancingColor:$e&&te.instanceColor!==null,instancingMorph:$e&&te.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:_e===null?s.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Xs,alphaToCoverage:!!R.alphaToCoverage,map:Pt,matcap:Ft,envMap:ut,envMapMode:ut&&oe.mapping,envMapCubeUVHeight:V,aoMap:H,lightMap:vn,bumpMap:mt,normalMap:ft,displacementMap:y&&Ye,emissiveMap:At,normalMapObjectSpace:ft&&R.normalMapType===__,normalMapTangentSpace:ft&&R.normalMapType===v_,metalnessMap:Ge,roughnessMap:F,anisotropy:w,anisotropyMap:be,clearcoat:Z,clearcoatMap:Ie,clearcoatNormalMap:dt,clearcoatRoughnessMap:Me,dispersion:me,iridescence:xe,iridescenceMap:ke,iridescenceThicknessMap:Ke,sheen:de,sheenColorMap:et,sheenRoughnessMap:Oe,specularMap:ht,specularColorMap:rt,specularIntensityMap:Tt,transmission:We,transmissionMap:W,thicknessMap:Ae,gradientMap:ae,opaque:R.transparent===!1&&R.blending===Os&&R.alphaToCoverage===!1,alphaMap:he,alphaTest:Pe,alphaHash:Ne,combine:R.combine,mapUv:Pt&&C(R.map.channel),aoMapUv:H&&C(R.aoMap.channel),lightMapUv:vn&&C(R.lightMap.channel),bumpMapUv:mt&&C(R.bumpMap.channel),normalMapUv:ft&&C(R.normalMap.channel),displacementMapUv:Ye&&C(R.displacementMap.channel),emissiveMapUv:At&&C(R.emissiveMap.channel),metalnessMapUv:Ge&&C(R.metalnessMap.channel),roughnessMapUv:F&&C(R.roughnessMap.channel),anisotropyMapUv:be&&C(R.anisotropyMap.channel),clearcoatMapUv:Ie&&C(R.clearcoatMap.channel),clearcoatNormalMapUv:dt&&C(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&C(R.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&C(R.iridescenceMap.channel),iridescenceThicknessMapUv:Ke&&C(R.iridescenceThicknessMap.channel),sheenColorMapUv:et&&C(R.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&C(R.sheenRoughnessMap.channel),specularMapUv:ht&&C(R.specularMap.channel),specularColorMapUv:rt&&C(R.specularColorMap.channel),specularIntensityMapUv:Tt&&C(R.specularIntensityMap.channel),transmissionMapUv:W&&C(R.transmissionMap.channel),thicknessMapUv:Ae&&C(R.thicknessMap.channel),alphaMapUv:he&&C(R.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(ft||w),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:te.isPoints===!0&&!!fe.attributes.uv&&(Pt||he),fog:!!ue,useFog:R.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Te,skinning:te.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:ie,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:R.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:Dt,decodeVideoTexture:Pt&&R.map.isVideoTexture===!0&&wt.getTransfer(R.map.colorSpace)===Rt,decodeVideoTextureEmissive:At&&R.emissiveMap.isVideoTexture===!0&&wt.getTransfer(R.emissiveMap.colorSpace)===Rt,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Oi,flipSided:R.side===Ln,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:st&&R.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&R.extensions.multiDraw===!0||je)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return qt.vertexUv1s=g.has(1),qt.vertexUv2s=g.has(2),qt.vertexUv3s=g.has(3),g.clear(),qt}function v(R){const b=[];if(R.shaderID?b.push(R.shaderID):(b.push(R.customVertexShaderID),b.push(R.customFragmentShaderID)),R.defines!==void 0)for(const z in R.defines)b.push(z),b.push(R.defines[z]);return R.isRawShaderMaterial===!1&&(L(b,R),P(b,R),b.push(s.outputColorSpace)),b.push(R.customProgramCacheKey),b.join()}function L(R,b){R.push(b.precision),R.push(b.outputColorSpace),R.push(b.envMapMode),R.push(b.envMapCubeUVHeight),R.push(b.mapUv),R.push(b.alphaMapUv),R.push(b.lightMapUv),R.push(b.aoMapUv),R.push(b.bumpMapUv),R.push(b.normalMapUv),R.push(b.displacementMapUv),R.push(b.emissiveMapUv),R.push(b.metalnessMapUv),R.push(b.roughnessMapUv),R.push(b.anisotropyMapUv),R.push(b.clearcoatMapUv),R.push(b.clearcoatNormalMapUv),R.push(b.clearcoatRoughnessMapUv),R.push(b.iridescenceMapUv),R.push(b.iridescenceThicknessMapUv),R.push(b.sheenColorMapUv),R.push(b.sheenRoughnessMapUv),R.push(b.specularMapUv),R.push(b.specularColorMapUv),R.push(b.specularIntensityMapUv),R.push(b.transmissionMapUv),R.push(b.thicknessMapUv),R.push(b.combine),R.push(b.fogExp2),R.push(b.sizeAttenuation),R.push(b.morphTargetsCount),R.push(b.morphAttributeCount),R.push(b.numDirLights),R.push(b.numPointLights),R.push(b.numSpotLights),R.push(b.numSpotLightMaps),R.push(b.numHemiLights),R.push(b.numRectAreaLights),R.push(b.numDirLightShadows),R.push(b.numPointLightShadows),R.push(b.numSpotLightShadows),R.push(b.numSpotLightShadowsWithMaps),R.push(b.numLightProbes),R.push(b.shadowMapType),R.push(b.toneMapping),R.push(b.numClippingPlanes),R.push(b.numClipIntersection),R.push(b.depthPacking)}function P(R,b){f.disableAll(),b.supportsVertexTextures&&f.enable(0),b.instancing&&f.enable(1),b.instancingColor&&f.enable(2),b.instancingMorph&&f.enable(3),b.matcap&&f.enable(4),b.envMap&&f.enable(5),b.normalMapObjectSpace&&f.enable(6),b.normalMapTangentSpace&&f.enable(7),b.clearcoat&&f.enable(8),b.iridescence&&f.enable(9),b.alphaTest&&f.enable(10),b.vertexColors&&f.enable(11),b.vertexAlphas&&f.enable(12),b.vertexUv1s&&f.enable(13),b.vertexUv2s&&f.enable(14),b.vertexUv3s&&f.enable(15),b.vertexTangents&&f.enable(16),b.anisotropy&&f.enable(17),b.alphaHash&&f.enable(18),b.batching&&f.enable(19),b.dispersion&&f.enable(20),b.batchingColor&&f.enable(21),R.push(f.mask),f.disableAll(),b.fog&&f.enable(0),b.useFog&&f.enable(1),b.flatShading&&f.enable(2),b.logarithmicDepthBuffer&&f.enable(3),b.reverseDepthBuffer&&f.enable(4),b.skinning&&f.enable(5),b.morphTargets&&f.enable(6),b.morphNormals&&f.enable(7),b.morphColors&&f.enable(8),b.premultipliedAlpha&&f.enable(9),b.shadowMapEnabled&&f.enable(10),b.doubleSided&&f.enable(11),b.flipSided&&f.enable(12),b.useDepthPacking&&f.enable(13),b.dithering&&f.enable(14),b.transmission&&f.enable(15),b.sheen&&f.enable(16),b.opaque&&f.enable(17),b.pointsUvs&&f.enable(18),b.decodeVideoTexture&&f.enable(19),b.decodeVideoTextureEmissive&&f.enable(20),b.alphaToCoverage&&f.enable(21),R.push(f.mask)}function N(R){const b=T[R.type];let z;if(b){const re=_i[b];z=K_.clone(re.uniforms)}else z=R.uniforms;return z}function G(R,b){let z;for(let re=0,te=x.length;re<te;re++){const ue=x[re];if(ue.cacheKey===b){z=ue,++z.usedTimes;break}}return z===void 0&&(z=new xM(s,b,R,l),x.push(z)),z}function O(R){if(--R.usedTimes===0){const b=x.indexOf(R);x[b]=x[x.length-1],x.pop(),R.destroy()}}function D(R){m.remove(R)}function k(){m.dispose()}return{getParameters:E,getProgramCacheKey:v,getUniforms:N,acquireProgram:G,releaseProgram:O,releaseShaderCache:D,programs:x,dispose:k}}function SM(){let s=new WeakMap;function e(u){return s.has(u)}function n(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function o(u,f,m){s.get(u)[f]=m}function l(){s=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:l}}function MM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Rm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Nm(){const s=[];let e=0;const n=[],r=[],o=[];function l(){e=0,n.length=0,r.length=0,o.length=0}function u(_,y,S,T,C,E){let v=s[e];return v===void 0?(v={id:_.id,object:_,geometry:y,material:S,groupOrder:T,renderOrder:_.renderOrder,z:C,group:E},s[e]=v):(v.id=_.id,v.object=_,v.geometry=y,v.material=S,v.groupOrder=T,v.renderOrder=_.renderOrder,v.z=C,v.group=E),e++,v}function f(_,y,S,T,C,E){const v=u(_,y,S,T,C,E);S.transmission>0?r.push(v):S.transparent===!0?o.push(v):n.push(v)}function m(_,y,S,T,C,E){const v=u(_,y,S,T,C,E);S.transmission>0?r.unshift(v):S.transparent===!0?o.unshift(v):n.unshift(v)}function g(_,y){n.length>1&&n.sort(_||MM),r.length>1&&r.sort(y||Rm),o.length>1&&o.sort(y||Rm)}function x(){for(let _=e,y=s.length;_<y;_++){const S=s[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:o,init:l,push:f,unshift:m,finish:x,sort:g}}function wM(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new Nm,s.set(r,[u])):o>=l.length?(u=new Nm,l.push(u)):u=l[o],u}function n(){s=new WeakMap}return{get:e,dispose:n}}function TM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Q,color:new Ct};break;case"SpotLight":n={position:new Q,direction:new Q,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Q,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Q,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":n={color:new Ct,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return s[e.id]=n,n}}}function bM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let AM=0;function CM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function RM(s){const e=new TM,n=bM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)r.probe.push(new Q);const o=new Q,l=new Xt,u=new Xt;function f(g){let x=0,_=0,y=0;for(let R=0;R<9;R++)r.probe[R].set(0,0,0);let S=0,T=0,C=0,E=0,v=0,L=0,P=0,N=0,G=0,O=0,D=0;g.sort(CM);for(let R=0,b=g.length;R<b;R++){const z=g[R],re=z.color,te=z.intensity,ue=z.distance,fe=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)x+=re.r*te,_+=re.g*te,y+=re.b*te;else if(z.isLightProbe){for(let se=0;se<9;se++)r.probe[se].addScaledVector(z.sh.coefficients[se],te);D++}else if(z.isDirectionalLight){const se=e.get(z);if(se.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const oe=z.shadow,V=n.get(z);V.shadowIntensity=oe.intensity,V.shadowBias=oe.bias,V.shadowNormalBias=oe.normalBias,V.shadowRadius=oe.radius,V.shadowMapSize=oe.mapSize,r.directionalShadow[S]=V,r.directionalShadowMap[S]=fe,r.directionalShadowMatrix[S]=z.shadow.matrix,L++}r.directional[S]=se,S++}else if(z.isSpotLight){const se=e.get(z);se.position.setFromMatrixPosition(z.matrixWorld),se.color.copy(re).multiplyScalar(te),se.distance=ue,se.coneCos=Math.cos(z.angle),se.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),se.decay=z.decay,r.spot[C]=se;const oe=z.shadow;if(z.map&&(r.spotLightMap[G]=z.map,G++,oe.updateMatrices(z),z.castShadow&&O++),r.spotLightMatrix[C]=oe.matrix,z.castShadow){const V=n.get(z);V.shadowIntensity=oe.intensity,V.shadowBias=oe.bias,V.shadowNormalBias=oe.normalBias,V.shadowRadius=oe.radius,V.shadowMapSize=oe.mapSize,r.spotShadow[C]=V,r.spotShadowMap[C]=fe,N++}C++}else if(z.isRectAreaLight){const se=e.get(z);se.color.copy(re).multiplyScalar(te),se.halfWidth.set(z.width*.5,0,0),se.halfHeight.set(0,z.height*.5,0),r.rectArea[E]=se,E++}else if(z.isPointLight){const se=e.get(z);if(se.color.copy(z.color).multiplyScalar(z.intensity),se.distance=z.distance,se.decay=z.decay,z.castShadow){const oe=z.shadow,V=n.get(z);V.shadowIntensity=oe.intensity,V.shadowBias=oe.bias,V.shadowNormalBias=oe.normalBias,V.shadowRadius=oe.radius,V.shadowMapSize=oe.mapSize,V.shadowCameraNear=oe.camera.near,V.shadowCameraFar=oe.camera.far,r.pointShadow[T]=V,r.pointShadowMap[T]=fe,r.pointShadowMatrix[T]=z.shadow.matrix,P++}r.point[T]=se,T++}else if(z.isHemisphereLight){const se=e.get(z);se.skyColor.copy(z.color).multiplyScalar(te),se.groundColor.copy(z.groundColor).multiplyScalar(te),r.hemi[v]=se,v++}}E>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Re.LTC_FLOAT_1,r.rectAreaLTC2=Re.LTC_FLOAT_2):(r.rectAreaLTC1=Re.LTC_HALF_1,r.rectAreaLTC2=Re.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=_,r.ambient[2]=y;const k=r.hash;(k.directionalLength!==S||k.pointLength!==T||k.spotLength!==C||k.rectAreaLength!==E||k.hemiLength!==v||k.numDirectionalShadows!==L||k.numPointShadows!==P||k.numSpotShadows!==N||k.numSpotMaps!==G||k.numLightProbes!==D)&&(r.directional.length=S,r.spot.length=C,r.rectArea.length=E,r.point.length=T,r.hemi.length=v,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=N+G-O,r.spotLightMap.length=G,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=D,k.directionalLength=S,k.pointLength=T,k.spotLength=C,k.rectAreaLength=E,k.hemiLength=v,k.numDirectionalShadows=L,k.numPointShadows=P,k.numSpotShadows=N,k.numSpotMaps=G,k.numLightProbes=D,r.version=AM++)}function m(g,x){let _=0,y=0,S=0,T=0,C=0;const E=x.matrixWorldInverse;for(let v=0,L=g.length;v<L;v++){const P=g[v];if(P.isDirectionalLight){const N=r.directional[_];N.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(E),_++}else if(P.isSpotLight){const N=r.spot[S];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(E),N.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(E),S++}else if(P.isRectAreaLight){const N=r.rectArea[T];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(E),u.identity(),l.copy(P.matrixWorld),l.premultiply(E),u.extractRotation(l),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),N.halfWidth.applyMatrix4(u),N.halfHeight.applyMatrix4(u),T++}else if(P.isPointLight){const N=r.point[y];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(E),y++}else if(P.isHemisphereLight){const N=r.hemi[C];N.direction.setFromMatrixPosition(P.matrixWorld),N.direction.transformDirection(E),C++}}}return{setup:f,setupView:m,state:r}}function Pm(s){const e=new RM(s),n=[],r=[];function o(x){g.camera=x,n.length=0,r.length=0}function l(x){n.push(x)}function u(x){r.push(x)}function f(){e.setup(n)}function m(x){e.setupView(n,x)}const g={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:g,setupLights:f,setupLightsView:m,pushLight:l,pushShadow:u}}function NM(s){let e=new WeakMap;function n(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new Pm(s),e.set(o,[f])):l>=u.length?(f=new Pm(s),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:n,dispose:r}}const PM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function LM(s,e,n){let r=new gg;const o=new bt,l=new bt,u=new Wt,f=new ay({depthPacking:x_}),m=new oy,g={},x=n.maxTextureSize,_={[Er]:Ln,[Ln]:Er,[Oi]:Oi},y=new Sr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:PM,fragmentShader:FM}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const T=new fi;T.setAttribute("position",new di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Qn(T,y),E=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wm;let v=this.type;this.render=function(O,D,k){if(E.enabled===!1||E.autoUpdate===!1&&E.needsUpdate===!1||O.length===0)return;const R=s.getRenderTarget(),b=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),re=s.state;re.setBlending(_r),re.buffers.color.setClear(1,1,1,1),re.buffers.depth.setTest(!0),re.setScissorTest(!1);const te=v!==ki&&this.type===ki,ue=v===ki&&this.type!==ki;for(let fe=0,se=O.length;fe<se;fe++){const oe=O[fe],V=oe.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;o.copy(V.mapSize);const ce=V.getFrameExtents();if(o.multiply(ce),l.copy(V.mapSize),(o.x>x||o.y>x)&&(o.x>x&&(l.x=Math.floor(x/ce.x),o.x=l.x*ce.x,V.mapSize.x=l.x),o.y>x&&(l.y=Math.floor(x/ce.y),o.y=l.y*ce.y,V.mapSize.y=l.y)),V.map===null||te===!0||ue===!0){const U=this.type!==ki?{minFilter:ui,magFilter:ui}:{};V.map!==null&&V.map.dispose(),V.map=new Zr(o.x,o.y,U),V.map.texture.name=oe.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const le=V.getViewportCount();for(let U=0;U<le;U++){const ie=V.getViewport(U);u.set(l.x*ie.x,l.y*ie.y,l.x*ie.z,l.y*ie.w),re.viewport(u),V.updateMatrices(oe,U),r=V.getFrustum(),N(D,k,V.camera,oe,this.type)}V.isPointLightShadow!==!0&&this.type===ki&&L(V,k),V.needsUpdate=!1}v=this.type,E.needsUpdate=!1,s.setRenderTarget(R,b,z)};function L(O,D){const k=e.update(C);y.defines.VSM_SAMPLES!==O.blurSamples&&(y.defines.VSM_SAMPLES=O.blurSamples,S.defines.VSM_SAMPLES=O.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Zr(o.x,o.y)),y.uniforms.shadow_pass.value=O.map.texture,y.uniforms.resolution.value=O.mapSize,y.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(D,null,k,y,C,null),S.uniforms.shadow_pass.value=O.mapPass.texture,S.uniforms.resolution.value=O.mapSize,S.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(D,null,k,S,C,null)}function P(O,D,k,R){let b=null;const z=k.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(z!==void 0)b=z;else if(b=k.isPointLight===!0?m:f,s.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const re=b.uuid,te=D.uuid;let ue=g[re];ue===void 0&&(ue={},g[re]=ue);let fe=ue[te];fe===void 0&&(fe=b.clone(),ue[te]=fe,D.addEventListener("dispose",G)),b=fe}if(b.visible=D.visible,b.wireframe=D.wireframe,R===ki?b.side=D.shadowSide!==null?D.shadowSide:D.side:b.side=D.shadowSide!==null?D.shadowSide:_[D.side],b.alphaMap=D.alphaMap,b.alphaTest=D.alphaTest,b.map=D.map,b.clipShadows=D.clipShadows,b.clippingPlanes=D.clippingPlanes,b.clipIntersection=D.clipIntersection,b.displacementMap=D.displacementMap,b.displacementScale=D.displacementScale,b.displacementBias=D.displacementBias,b.wireframeLinewidth=D.wireframeLinewidth,b.linewidth=D.linewidth,k.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const re=s.properties.get(b);re.light=k}return b}function N(O,D,k,R,b){if(O.visible===!1)return;if(O.layers.test(D.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&b===ki)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,O.matrixWorld);const te=e.update(O),ue=O.material;if(Array.isArray(ue)){const fe=te.groups;for(let se=0,oe=fe.length;se<oe;se++){const V=fe[se],ce=ue[V.materialIndex];if(ce&&ce.visible){const le=P(O,ce,R,b);O.onBeforeShadow(s,O,D,k,te,le,V),s.renderBufferDirect(k,null,te,le,O,V),O.onAfterShadow(s,O,D,k,te,le,V)}}}else if(ue.visible){const fe=P(O,ue,R,b);O.onBeforeShadow(s,O,D,k,te,fe,null),s.renderBufferDirect(k,null,te,fe,O,null),O.onAfterShadow(s,O,D,k,te,fe,null)}}const re=O.children;for(let te=0,ue=re.length;te<ue;te++)N(re[te],D,k,R,b)}function G(O){O.target.removeEventListener("dispose",G);for(const k in g){const R=g[k],b=O.target.uuid;b in R&&(R[b].dispose(),delete R[b])}}}const DM={[nd]:id,[rd]:od,[sd]:ld,[Hs]:ad,[id]:nd,[od]:rd,[ld]:sd,[ad]:Hs};function IM(s,e){function n(){let W=!1;const Ae=new Wt;let ae=null;const he=new Wt(0,0,0,0);return{setMask:function(Pe){ae!==Pe&&!W&&(s.colorMask(Pe,Pe,Pe,Pe),ae=Pe)},setLocked:function(Pe){W=Pe},setClear:function(Pe,Ne,st,Dt,qt){qt===!0&&(Pe*=Dt,Ne*=Dt,st*=Dt),Ae.set(Pe,Ne,st,Dt),he.equals(Ae)===!1&&(s.clearColor(Pe,Ne,st,Dt),he.copy(Ae))},reset:function(){W=!1,ae=null,he.set(-1,0,0,0)}}}function r(){let W=!1,Ae=!1,ae=null,he=null,Pe=null;return{setReversed:function(Ne){if(Ae!==Ne){const st=e.get("EXT_clip_control");Ae?st.clipControlEXT(st.LOWER_LEFT_EXT,st.ZERO_TO_ONE_EXT):st.clipControlEXT(st.LOWER_LEFT_EXT,st.NEGATIVE_ONE_TO_ONE_EXT);const Dt=Pe;Pe=null,this.setClear(Dt)}Ae=Ne},getReversed:function(){return Ae},setTest:function(Ne){Ne?_e(s.DEPTH_TEST):Te(s.DEPTH_TEST)},setMask:function(Ne){ae!==Ne&&!W&&(s.depthMask(Ne),ae=Ne)},setFunc:function(Ne){if(Ae&&(Ne=DM[Ne]),he!==Ne){switch(Ne){case nd:s.depthFunc(s.NEVER);break;case id:s.depthFunc(s.ALWAYS);break;case rd:s.depthFunc(s.LESS);break;case Hs:s.depthFunc(s.LEQUAL);break;case sd:s.depthFunc(s.EQUAL);break;case ad:s.depthFunc(s.GEQUAL);break;case od:s.depthFunc(s.GREATER);break;case ld:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}he=Ne}},setLocked:function(Ne){W=Ne},setClear:function(Ne){Pe!==Ne&&(Ae&&(Ne=1-Ne),s.clearDepth(Ne),Pe=Ne)},reset:function(){W=!1,ae=null,he=null,Pe=null,Ae=!1}}}function o(){let W=!1,Ae=null,ae=null,he=null,Pe=null,Ne=null,st=null,Dt=null,qt=null;return{setTest:function(yt){W||(yt?_e(s.STENCIL_TEST):Te(s.STENCIL_TEST))},setMask:function(yt){Ae!==yt&&!W&&(s.stencilMask(yt),Ae=yt)},setFunc:function(yt,Tn,_n){(ae!==yt||he!==Tn||Pe!==_n)&&(s.stencilFunc(yt,Tn,_n),ae=yt,he=Tn,Pe=_n)},setOp:function(yt,Tn,_n){(Ne!==yt||st!==Tn||Dt!==_n)&&(s.stencilOp(yt,Tn,_n),Ne=yt,st=Tn,Dt=_n)},setLocked:function(yt){W=yt},setClear:function(yt){qt!==yt&&(s.clearStencil(yt),qt=yt)},reset:function(){W=!1,Ae=null,ae=null,he=null,Pe=null,Ne=null,st=null,Dt=null,qt=null}}}const l=new n,u=new r,f=new o,m=new WeakMap,g=new WeakMap;let x={},_={},y=new WeakMap,S=[],T=null,C=!1,E=null,v=null,L=null,P=null,N=null,G=null,O=null,D=new Ct(0,0,0),k=0,R=!1,b=null,z=null,re=null,te=null,ue=null;const fe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,oe=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(V)[1]),se=oe>=1):V.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),se=oe>=2);let ce=null,le={};const U=s.getParameter(s.SCISSOR_BOX),ie=s.getParameter(s.VIEWPORT),De=new Wt().fromArray(U),J=new Wt().fromArray(ie);function pe(W,Ae,ae,he){const Pe=new Uint8Array(4),Ne=s.createTexture();s.bindTexture(W,Ne),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let st=0;st<ae;st++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(Ae,0,s.RGBA,1,1,he,0,s.RGBA,s.UNSIGNED_BYTE,Pe):s.texImage2D(Ae+st,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Pe);return Ne}const Se={};Se[s.TEXTURE_2D]=pe(s.TEXTURE_2D,s.TEXTURE_2D,1),Se[s.TEXTURE_CUBE_MAP]=pe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[s.TEXTURE_2D_ARRAY]=pe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Se[s.TEXTURE_3D]=pe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),_e(s.DEPTH_TEST),u.setFunc(Hs),mt(!1),ft(Ip),_e(s.CULL_FACE),H(_r);function _e(W){x[W]!==!0&&(s.enable(W),x[W]=!0)}function Te(W){x[W]!==!1&&(s.disable(W),x[W]=!1)}function $e(W,Ae){return _[W]!==Ae?(s.bindFramebuffer(W,Ae),_[W]=Ae,W===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Ae),W===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Ae),!0):!1}function je(W,Ae){let ae=S,he=!1;if(W){ae=y.get(Ae),ae===void 0&&(ae=[],y.set(Ae,ae));const Pe=W.textures;if(ae.length!==Pe.length||ae[0]!==s.COLOR_ATTACHMENT0){for(let Ne=0,st=Pe.length;Ne<st;Ne++)ae[Ne]=s.COLOR_ATTACHMENT0+Ne;ae.length=Pe.length,he=!0}}else ae[0]!==s.BACK&&(ae[0]=s.BACK,he=!0);he&&s.drawBuffers(ae)}function Pt(W){return T!==W?(s.useProgram(W),T=W,!0):!1}const Ft={[Xr]:s.FUNC_ADD,[jv]:s.FUNC_SUBTRACT,[Gv]:s.FUNC_REVERSE_SUBTRACT};Ft[Wv]=s.MIN,Ft[Xv]=s.MAX;const ut={[$v]:s.ZERO,[Yv]:s.ONE,[qv]:s.SRC_COLOR,[ed]:s.SRC_ALPHA,[t_]:s.SRC_ALPHA_SATURATE,[Jv]:s.DST_COLOR,[Zv]:s.DST_ALPHA,[Kv]:s.ONE_MINUS_SRC_COLOR,[td]:s.ONE_MINUS_SRC_ALPHA,[e_]:s.ONE_MINUS_DST_COLOR,[Qv]:s.ONE_MINUS_DST_ALPHA,[n_]:s.CONSTANT_COLOR,[i_]:s.ONE_MINUS_CONSTANT_COLOR,[r_]:s.CONSTANT_ALPHA,[s_]:s.ONE_MINUS_CONSTANT_ALPHA};function H(W,Ae,ae,he,Pe,Ne,st,Dt,qt,yt){if(W===_r){C===!0&&(Te(s.BLEND),C=!1);return}if(C===!1&&(_e(s.BLEND),C=!0),W!==Vv){if(W!==E||yt!==R){if((v!==Xr||N!==Xr)&&(s.blendEquation(s.FUNC_ADD),v=Xr,N=Xr),yt)switch(W){case Os:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Up:s.blendFunc(s.ONE,s.ONE);break;case kp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Op:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Os:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Up:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case kp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Op:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}L=null,P=null,G=null,O=null,D.set(0,0,0),k=0,E=W,R=yt}return}Pe=Pe||Ae,Ne=Ne||ae,st=st||he,(Ae!==v||Pe!==N)&&(s.blendEquationSeparate(Ft[Ae],Ft[Pe]),v=Ae,N=Pe),(ae!==L||he!==P||Ne!==G||st!==O)&&(s.blendFuncSeparate(ut[ae],ut[he],ut[Ne],ut[st]),L=ae,P=he,G=Ne,O=st),(Dt.equals(D)===!1||qt!==k)&&(s.blendColor(Dt.r,Dt.g,Dt.b,qt),D.copy(Dt),k=qt),E=W,R=!1}function vn(W,Ae){W.side===Oi?Te(s.CULL_FACE):_e(s.CULL_FACE);let ae=W.side===Ln;Ae&&(ae=!ae),mt(ae),W.blending===Os&&W.transparent===!1?H(_r):H(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),u.setFunc(W.depthFunc),u.setTest(W.depthTest),u.setMask(W.depthWrite),l.setMask(W.colorWrite);const he=W.stencilWrite;f.setTest(he),he&&(f.setMask(W.stencilWriteMask),f.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),f.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),At(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?_e(s.SAMPLE_ALPHA_TO_COVERAGE):Te(s.SAMPLE_ALPHA_TO_COVERAGE)}function mt(W){b!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),b=W)}function ft(W){W!==zv?(_e(s.CULL_FACE),W!==z&&(W===Ip?s.cullFace(s.BACK):W===Bv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Te(s.CULL_FACE),z=W}function Ye(W){W!==re&&(se&&s.lineWidth(W),re=W)}function At(W,Ae,ae){W?(_e(s.POLYGON_OFFSET_FILL),(te!==Ae||ue!==ae)&&(s.polygonOffset(Ae,ae),te=Ae,ue=ae)):Te(s.POLYGON_OFFSET_FILL)}function Ge(W){W?_e(s.SCISSOR_TEST):Te(s.SCISSOR_TEST)}function F(W){W===void 0&&(W=s.TEXTURE0+fe-1),ce!==W&&(s.activeTexture(W),ce=W)}function w(W,Ae,ae){ae===void 0&&(ce===null?ae=s.TEXTURE0+fe-1:ae=ce);let he=le[ae];he===void 0&&(he={type:void 0,texture:void 0},le[ae]=he),(he.type!==W||he.texture!==Ae)&&(ce!==ae&&(s.activeTexture(ae),ce=ae),s.bindTexture(W,Ae||Se[W]),he.type=W,he.texture=Ae)}function Z(){const W=le[ce];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function me(){try{s.compressedTexImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function xe(){try{s.compressedTexImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function de(){try{s.texSubImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function We(){try{s.texSubImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function be(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ie(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function dt(){try{s.texStorage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Me(){try{s.texStorage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ke(){try{s.texImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ke(){try{s.texImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function et(W){De.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),De.copy(W))}function Oe(W){J.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),J.copy(W))}function ht(W,Ae){let ae=g.get(Ae);ae===void 0&&(ae=new WeakMap,g.set(Ae,ae));let he=ae.get(W);he===void 0&&(he=s.getUniformBlockIndex(Ae,W.name),ae.set(W,he))}function rt(W,Ae){const he=g.get(Ae).get(W);m.get(Ae)!==he&&(s.uniformBlockBinding(Ae,he,W.__bindingPointIndex),m.set(Ae,he))}function Tt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),x={},ce=null,le={},_={},y=new WeakMap,S=[],T=null,C=!1,E=null,v=null,L=null,P=null,N=null,G=null,O=null,D=new Ct(0,0,0),k=0,R=!1,b=null,z=null,re=null,te=null,ue=null,De.set(0,0,s.canvas.width,s.canvas.height),J.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:_e,disable:Te,bindFramebuffer:$e,drawBuffers:je,useProgram:Pt,setBlending:H,setMaterial:vn,setFlipSided:mt,setCullFace:ft,setLineWidth:Ye,setPolygonOffset:At,setScissorTest:Ge,activeTexture:F,bindTexture:w,unbindTexture:Z,compressedTexImage2D:me,compressedTexImage3D:xe,texImage2D:ke,texImage3D:Ke,updateUBOMapping:ht,uniformBlockBinding:rt,texStorage2D:dt,texStorage3D:Me,texSubImage2D:de,texSubImage3D:We,compressedTexSubImage2D:be,compressedTexSubImage3D:Ie,scissor:et,viewport:Oe,reset:Tt}}function UM(s,e,n,r,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new bt,x=new WeakMap;let _;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(F,w){return S?new OffscreenCanvas(F,w):Dl("canvas")}function C(F,w,Z){let me=1;const xe=Ge(F);if((xe.width>Z||xe.height>Z)&&(me=Z/Math.max(xe.width,xe.height)),me<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const de=Math.floor(me*xe.width),We=Math.floor(me*xe.height);_===void 0&&(_=T(de,We));const be=w?T(de,We):_;return be.width=de,be.height=We,be.getContext("2d").drawImage(F,0,0,de,We),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+de+"x"+We+")."),be}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),F;return F}function E(F){return F.generateMipmaps}function v(F){s.generateMipmap(F)}function L(F){return F.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?s.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function P(F,w,Z,me,xe=!1){if(F!==null){if(s[F]!==void 0)return s[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let de=w;if(w===s.RED&&(Z===s.FLOAT&&(de=s.R32F),Z===s.HALF_FLOAT&&(de=s.R16F),Z===s.UNSIGNED_BYTE&&(de=s.R8)),w===s.RED_INTEGER&&(Z===s.UNSIGNED_BYTE&&(de=s.R8UI),Z===s.UNSIGNED_SHORT&&(de=s.R16UI),Z===s.UNSIGNED_INT&&(de=s.R32UI),Z===s.BYTE&&(de=s.R8I),Z===s.SHORT&&(de=s.R16I),Z===s.INT&&(de=s.R32I)),w===s.RG&&(Z===s.FLOAT&&(de=s.RG32F),Z===s.HALF_FLOAT&&(de=s.RG16F),Z===s.UNSIGNED_BYTE&&(de=s.RG8)),w===s.RG_INTEGER&&(Z===s.UNSIGNED_BYTE&&(de=s.RG8UI),Z===s.UNSIGNED_SHORT&&(de=s.RG16UI),Z===s.UNSIGNED_INT&&(de=s.RG32UI),Z===s.BYTE&&(de=s.RG8I),Z===s.SHORT&&(de=s.RG16I),Z===s.INT&&(de=s.RG32I)),w===s.RGB_INTEGER&&(Z===s.UNSIGNED_BYTE&&(de=s.RGB8UI),Z===s.UNSIGNED_SHORT&&(de=s.RGB16UI),Z===s.UNSIGNED_INT&&(de=s.RGB32UI),Z===s.BYTE&&(de=s.RGB8I),Z===s.SHORT&&(de=s.RGB16I),Z===s.INT&&(de=s.RGB32I)),w===s.RGBA_INTEGER&&(Z===s.UNSIGNED_BYTE&&(de=s.RGBA8UI),Z===s.UNSIGNED_SHORT&&(de=s.RGBA16UI),Z===s.UNSIGNED_INT&&(de=s.RGBA32UI),Z===s.BYTE&&(de=s.RGBA8I),Z===s.SHORT&&(de=s.RGBA16I),Z===s.INT&&(de=s.RGBA32I)),w===s.RGB&&Z===s.UNSIGNED_INT_5_9_9_9_REV&&(de=s.RGB9_E5),w===s.RGBA){const We=xe?Fl:wt.getTransfer(me);Z===s.FLOAT&&(de=s.RGBA32F),Z===s.HALF_FLOAT&&(de=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(de=We===Rt?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT_4_4_4_4&&(de=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(de=s.RGB5_A1)}return(de===s.R16F||de===s.R32F||de===s.RG16F||de===s.RG32F||de===s.RGBA16F||de===s.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function N(F,w){let Z;return F?w===null||w===Kr||w===Gs?Z=s.DEPTH24_STENCIL8:w===zi?Z=s.DEPTH32F_STENCIL8:w===ka&&(Z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Kr||w===Gs?Z=s.DEPTH_COMPONENT24:w===zi?Z=s.DEPTH_COMPONENT32F:w===ka&&(Z=s.DEPTH_COMPONENT16),Z}function G(F,w){return E(F)===!0||F.isFramebufferTexture&&F.minFilter!==ui&&F.minFilter!==yi?Math.log2(Math.max(w.width,w.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?w.mipmaps.length:1}function O(F){const w=F.target;w.removeEventListener("dispose",O),k(w),w.isVideoTexture&&x.delete(w)}function D(F){const w=F.target;w.removeEventListener("dispose",D),b(w)}function k(F){const w=r.get(F);if(w.__webglInit===void 0)return;const Z=F.source,me=y.get(Z);if(me){const xe=me[w.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&R(F),Object.keys(me).length===0&&y.delete(Z)}r.remove(F)}function R(F){const w=r.get(F);s.deleteTexture(w.__webglTexture);const Z=F.source,me=y.get(Z);delete me[w.__cacheKey],u.memory.textures--}function b(F){const w=r.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),r.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(w.__webglFramebuffer[me]))for(let xe=0;xe<w.__webglFramebuffer[me].length;xe++)s.deleteFramebuffer(w.__webglFramebuffer[me][xe]);else s.deleteFramebuffer(w.__webglFramebuffer[me]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[me])}else{if(Array.isArray(w.__webglFramebuffer))for(let me=0;me<w.__webglFramebuffer.length;me++)s.deleteFramebuffer(w.__webglFramebuffer[me]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let me=0;me<w.__webglColorRenderbuffer.length;me++)w.__webglColorRenderbuffer[me]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[me]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Z=F.textures;for(let me=0,xe=Z.length;me<xe;me++){const de=r.get(Z[me]);de.__webglTexture&&(s.deleteTexture(de.__webglTexture),u.memory.textures--),r.remove(Z[me])}r.remove(F)}let z=0;function re(){z=0}function te(){const F=z;return F>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+o.maxTextures),z+=1,F}function ue(F){const w=[];return w.push(F.wrapS),w.push(F.wrapT),w.push(F.wrapR||0),w.push(F.magFilter),w.push(F.minFilter),w.push(F.anisotropy),w.push(F.internalFormat),w.push(F.format),w.push(F.type),w.push(F.generateMipmaps),w.push(F.premultiplyAlpha),w.push(F.flipY),w.push(F.unpackAlignment),w.push(F.colorSpace),w.join()}function fe(F,w){const Z=r.get(F);if(F.isVideoTexture&&Ye(F),F.isRenderTargetTexture===!1&&F.version>0&&Z.__version!==F.version){const me=F.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(Z,F,w);return}}n.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+w)}function se(F,w){const Z=r.get(F);if(F.version>0&&Z.__version!==F.version){J(Z,F,w);return}n.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+w)}function oe(F,w){const Z=r.get(F);if(F.version>0&&Z.__version!==F.version){J(Z,F,w);return}n.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+w)}function V(F,w){const Z=r.get(F);if(F.version>0&&Z.__version!==F.version){pe(Z,F,w);return}n.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+w)}const ce={[dd]:s.REPEAT,[Yr]:s.CLAMP_TO_EDGE,[fd]:s.MIRRORED_REPEAT},le={[ui]:s.NEAREST,[m_]:s.NEAREST_MIPMAP_NEAREST,[il]:s.NEAREST_MIPMAP_LINEAR,[yi]:s.LINEAR,[Mu]:s.LINEAR_MIPMAP_NEAREST,[qr]:s.LINEAR_MIPMAP_LINEAR},U={[y_]:s.NEVER,[b_]:s.ALWAYS,[E_]:s.LESS,[rg]:s.LEQUAL,[S_]:s.EQUAL,[T_]:s.GEQUAL,[M_]:s.GREATER,[w_]:s.NOTEQUAL};function ie(F,w){if(w.type===zi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===yi||w.magFilter===Mu||w.magFilter===il||w.magFilter===qr||w.minFilter===yi||w.minFilter===Mu||w.minFilter===il||w.minFilter===qr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(F,s.TEXTURE_WRAP_S,ce[w.wrapS]),s.texParameteri(F,s.TEXTURE_WRAP_T,ce[w.wrapT]),(F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY)&&s.texParameteri(F,s.TEXTURE_WRAP_R,ce[w.wrapR]),s.texParameteri(F,s.TEXTURE_MAG_FILTER,le[w.magFilter]),s.texParameteri(F,s.TEXTURE_MIN_FILTER,le[w.minFilter]),w.compareFunction&&(s.texParameteri(F,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(F,s.TEXTURE_COMPARE_FUNC,U[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===ui||w.minFilter!==il&&w.minFilter!==qr||w.type===zi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(F,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function De(F,w){let Z=!1;F.__webglInit===void 0&&(F.__webglInit=!0,w.addEventListener("dispose",O));const me=w.source;let xe=y.get(me);xe===void 0&&(xe={},y.set(me,xe));const de=ue(w);if(de!==F.__cacheKey){xe[de]===void 0&&(xe[de]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,Z=!0),xe[de].usedTimes++;const We=xe[F.__cacheKey];We!==void 0&&(xe[F.__cacheKey].usedTimes--,We.usedTimes===0&&R(w)),F.__cacheKey=de,F.__webglTexture=xe[de].texture}return Z}function J(F,w,Z){let me=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(me=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(me=s.TEXTURE_3D);const xe=De(F,w),de=w.source;n.bindTexture(me,F.__webglTexture,s.TEXTURE0+Z);const We=r.get(de);if(de.version!==We.__version||xe===!0){n.activeTexture(s.TEXTURE0+Z);const be=wt.getPrimaries(wt.workingColorSpace),Ie=w.colorSpace===vr?null:wt.getPrimaries(w.colorSpace),dt=w.colorSpace===vr||be===Ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let Me=C(w.image,!1,o.maxTextureSize);Me=At(w,Me);const ke=l.convert(w.format,w.colorSpace),Ke=l.convert(w.type);let et=P(w.internalFormat,ke,Ke,w.colorSpace,w.isVideoTexture);ie(me,w);let Oe;const ht=w.mipmaps,rt=w.isVideoTexture!==!0,Tt=We.__version===void 0||xe===!0,W=de.dataReady,Ae=G(w,Me);if(w.isDepthTexture)et=N(w.format===Ws,w.type),Tt&&(rt?n.texStorage2D(s.TEXTURE_2D,1,et,Me.width,Me.height):n.texImage2D(s.TEXTURE_2D,0,et,Me.width,Me.height,0,ke,Ke,null));else if(w.isDataTexture)if(ht.length>0){rt&&Tt&&n.texStorage2D(s.TEXTURE_2D,Ae,et,ht[0].width,ht[0].height);for(let ae=0,he=ht.length;ae<he;ae++)Oe=ht[ae],rt?W&&n.texSubImage2D(s.TEXTURE_2D,ae,0,0,Oe.width,Oe.height,ke,Ke,Oe.data):n.texImage2D(s.TEXTURE_2D,ae,et,Oe.width,Oe.height,0,ke,Ke,Oe.data);w.generateMipmaps=!1}else rt?(Tt&&n.texStorage2D(s.TEXTURE_2D,Ae,et,Me.width,Me.height),W&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Me.width,Me.height,ke,Ke,Me.data)):n.texImage2D(s.TEXTURE_2D,0,et,Me.width,Me.height,0,ke,Ke,Me.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){rt&&Tt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,et,ht[0].width,ht[0].height,Me.depth);for(let ae=0,he=ht.length;ae<he;ae++)if(Oe=ht[ae],w.format!==ci)if(ke!==null)if(rt){if(W)if(w.layerUpdates.size>0){const Pe=om(Oe.width,Oe.height,w.format,w.type);for(const Ne of w.layerUpdates){const st=Oe.data.subarray(Ne*Pe/Oe.data.BYTES_PER_ELEMENT,(Ne+1)*Pe/Oe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,Ne,Oe.width,Oe.height,1,ke,st)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,Oe.width,Oe.height,Me.depth,ke,Oe.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ae,et,Oe.width,Oe.height,Me.depth,0,Oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?W&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,Oe.width,Oe.height,Me.depth,ke,Ke,Oe.data):n.texImage3D(s.TEXTURE_2D_ARRAY,ae,et,Oe.width,Oe.height,Me.depth,0,ke,Ke,Oe.data)}else{rt&&Tt&&n.texStorage2D(s.TEXTURE_2D,Ae,et,ht[0].width,ht[0].height);for(let ae=0,he=ht.length;ae<he;ae++)Oe=ht[ae],w.format!==ci?ke!==null?rt?W&&n.compressedTexSubImage2D(s.TEXTURE_2D,ae,0,0,Oe.width,Oe.height,ke,Oe.data):n.compressedTexImage2D(s.TEXTURE_2D,ae,et,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?W&&n.texSubImage2D(s.TEXTURE_2D,ae,0,0,Oe.width,Oe.height,ke,Ke,Oe.data):n.texImage2D(s.TEXTURE_2D,ae,et,Oe.width,Oe.height,0,ke,Ke,Oe.data)}else if(w.isDataArrayTexture)if(rt){if(Tt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,et,Me.width,Me.height,Me.depth),W)if(w.layerUpdates.size>0){const ae=om(Me.width,Me.height,w.format,w.type);for(const he of w.layerUpdates){const Pe=Me.data.subarray(he*ae/Me.data.BYTES_PER_ELEMENT,(he+1)*ae/Me.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,he,Me.width,Me.height,1,ke,Ke,Pe)}w.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,ke,Ke,Me.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,et,Me.width,Me.height,Me.depth,0,ke,Ke,Me.data);else if(w.isData3DTexture)rt?(Tt&&n.texStorage3D(s.TEXTURE_3D,Ae,et,Me.width,Me.height,Me.depth),W&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,ke,Ke,Me.data)):n.texImage3D(s.TEXTURE_3D,0,et,Me.width,Me.height,Me.depth,0,ke,Ke,Me.data);else if(w.isFramebufferTexture){if(Tt)if(rt)n.texStorage2D(s.TEXTURE_2D,Ae,et,Me.width,Me.height);else{let ae=Me.width,he=Me.height;for(let Pe=0;Pe<Ae;Pe++)n.texImage2D(s.TEXTURE_2D,Pe,et,ae,he,0,ke,Ke,null),ae>>=1,he>>=1}}else if(ht.length>0){if(rt&&Tt){const ae=Ge(ht[0]);n.texStorage2D(s.TEXTURE_2D,Ae,et,ae.width,ae.height)}for(let ae=0,he=ht.length;ae<he;ae++)Oe=ht[ae],rt?W&&n.texSubImage2D(s.TEXTURE_2D,ae,0,0,ke,Ke,Oe):n.texImage2D(s.TEXTURE_2D,ae,et,ke,Ke,Oe);w.generateMipmaps=!1}else if(rt){if(Tt){const ae=Ge(Me);n.texStorage2D(s.TEXTURE_2D,Ae,et,ae.width,ae.height)}W&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,ke,Ke,Me)}else n.texImage2D(s.TEXTURE_2D,0,et,ke,Ke,Me);E(w)&&v(me),We.__version=de.version,w.onUpdate&&w.onUpdate(w)}F.__version=w.version}function pe(F,w,Z){if(w.image.length!==6)return;const me=De(F,w),xe=w.source;n.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+Z);const de=r.get(xe);if(xe.version!==de.__version||me===!0){n.activeTexture(s.TEXTURE0+Z);const We=wt.getPrimaries(wt.workingColorSpace),be=w.colorSpace===vr?null:wt.getPrimaries(w.colorSpace),Ie=w.colorSpace===vr||We===be?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const dt=w.isCompressedTexture||w.image[0].isCompressedTexture,Me=w.image[0]&&w.image[0].isDataTexture,ke=[];for(let he=0;he<6;he++)!dt&&!Me?ke[he]=C(w.image[he],!0,o.maxCubemapSize):ke[he]=Me?w.image[he].image:w.image[he],ke[he]=At(w,ke[he]);const Ke=ke[0],et=l.convert(w.format,w.colorSpace),Oe=l.convert(w.type),ht=P(w.internalFormat,et,Oe,w.colorSpace),rt=w.isVideoTexture!==!0,Tt=de.__version===void 0||me===!0,W=xe.dataReady;let Ae=G(w,Ke);ie(s.TEXTURE_CUBE_MAP,w);let ae;if(dt){rt&&Tt&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Ae,ht,Ke.width,Ke.height);for(let he=0;he<6;he++){ae=ke[he].mipmaps;for(let Pe=0;Pe<ae.length;Pe++){const Ne=ae[Pe];w.format!==ci?et!==null?rt?W&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe,0,0,Ne.width,Ne.height,et,Ne.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe,ht,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?W&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe,0,0,Ne.width,Ne.height,et,Oe,Ne.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe,ht,Ne.width,Ne.height,0,et,Oe,Ne.data)}}}else{if(ae=w.mipmaps,rt&&Tt){ae.length>0&&Ae++;const he=Ge(ke[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Ae,ht,he.width,he.height)}for(let he=0;he<6;he++)if(Me){rt?W&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,ke[he].width,ke[he].height,et,Oe,ke[he].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ht,ke[he].width,ke[he].height,0,et,Oe,ke[he].data);for(let Pe=0;Pe<ae.length;Pe++){const st=ae[Pe].image[he].image;rt?W&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe+1,0,0,st.width,st.height,et,Oe,st.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe+1,ht,st.width,st.height,0,et,Oe,st.data)}}else{rt?W&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,et,Oe,ke[he]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ht,et,Oe,ke[he]);for(let Pe=0;Pe<ae.length;Pe++){const Ne=ae[Pe];rt?W&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe+1,0,0,et,Oe,Ne.image[he]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe+1,ht,et,Oe,Ne.image[he])}}}E(w)&&v(s.TEXTURE_CUBE_MAP),de.__version=xe.version,w.onUpdate&&w.onUpdate(w)}F.__version=w.version}function Se(F,w,Z,me,xe,de){const We=l.convert(Z.format,Z.colorSpace),be=l.convert(Z.type),Ie=P(Z.internalFormat,We,be,Z.colorSpace),dt=r.get(w),Me=r.get(Z);if(Me.__renderTarget=w,!dt.__hasExternalTextures){const ke=Math.max(1,w.width>>de),Ke=Math.max(1,w.height>>de);xe===s.TEXTURE_3D||xe===s.TEXTURE_2D_ARRAY?n.texImage3D(xe,de,Ie,ke,Ke,w.depth,0,We,be,null):n.texImage2D(xe,de,Ie,ke,Ke,0,We,be,null)}n.bindFramebuffer(s.FRAMEBUFFER,F),ft(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,xe,Me.__webglTexture,0,mt(w)):(xe===s.TEXTURE_2D||xe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,me,xe,Me.__webglTexture,de),n.bindFramebuffer(s.FRAMEBUFFER,null)}function _e(F,w,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,F),w.depthBuffer){const me=w.depthTexture,xe=me&&me.isDepthTexture?me.type:null,de=N(w.stencilBuffer,xe),We=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=mt(w);ft(w)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,be,de,w.width,w.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,be,de,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,de,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,We,s.RENDERBUFFER,F)}else{const me=w.textures;for(let xe=0;xe<me.length;xe++){const de=me[xe],We=l.convert(de.format,de.colorSpace),be=l.convert(de.type),Ie=P(de.internalFormat,We,be,de.colorSpace),dt=mt(w);Z&&ft(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,dt,Ie,w.width,w.height):ft(w)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,dt,Ie,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Ie,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Te(F,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,F),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=r.get(w.depthTexture);me.__renderTarget=w,(!me.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),fe(w.depthTexture,0);const xe=me.__webglTexture,de=mt(w);if(w.depthTexture.format===zs)ft(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,xe,0,de):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,xe,0);else if(w.depthTexture.format===Ws)ft(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,xe,0,de):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function $e(F){const w=r.get(F),Z=F.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==F.depthTexture){const me=F.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),me){const xe=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,me.removeEventListener("dispose",xe)};me.addEventListener("dispose",xe),w.__depthDisposeCallback=xe}w.__boundDepthTexture=me}if(F.depthTexture&&!w.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Te(w.__webglFramebuffer,F)}else if(Z){w.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(n.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[me]),w.__webglDepthbuffer[me]===void 0)w.__webglDepthbuffer[me]=s.createRenderbuffer(),_e(w.__webglDepthbuffer[me],F,!1);else{const xe=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=w.__webglDepthbuffer[me];s.bindRenderbuffer(s.RENDERBUFFER,de),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,de)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),_e(w.__webglDepthbuffer,F,!1);else{const me=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xe=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,xe),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,xe)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function je(F,w,Z){const me=r.get(F);w!==void 0&&Se(me.__webglFramebuffer,F,F.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Z!==void 0&&$e(F)}function Pt(F){const w=F.texture,Z=r.get(F),me=r.get(w);F.addEventListener("dispose",D);const xe=F.textures,de=F.isWebGLCubeRenderTarget===!0,We=xe.length>1;if(We||(me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture()),me.__version=w.version,u.memory.textures++),de){Z.__webglFramebuffer=[];for(let be=0;be<6;be++)if(w.mipmaps&&w.mipmaps.length>0){Z.__webglFramebuffer[be]=[];for(let Ie=0;Ie<w.mipmaps.length;Ie++)Z.__webglFramebuffer[be][Ie]=s.createFramebuffer()}else Z.__webglFramebuffer[be]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Z.__webglFramebuffer=[];for(let be=0;be<w.mipmaps.length;be++)Z.__webglFramebuffer[be]=s.createFramebuffer()}else Z.__webglFramebuffer=s.createFramebuffer();if(We)for(let be=0,Ie=xe.length;be<Ie;be++){const dt=r.get(xe[be]);dt.__webglTexture===void 0&&(dt.__webglTexture=s.createTexture(),u.memory.textures++)}if(F.samples>0&&ft(F)===!1){Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let be=0;be<xe.length;be++){const Ie=xe[be];Z.__webglColorRenderbuffer[be]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[be]);const dt=l.convert(Ie.format,Ie.colorSpace),Me=l.convert(Ie.type),ke=P(Ie.internalFormat,dt,Me,Ie.colorSpace,F.isXRRenderTarget===!0),Ke=mt(F);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ke,ke,F.width,F.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,Z.__webglColorRenderbuffer[be])}s.bindRenderbuffer(s.RENDERBUFFER,null),F.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),_e(Z.__webglDepthRenderbuffer,F,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(de){n.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),ie(s.TEXTURE_CUBE_MAP,w);for(let be=0;be<6;be++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ie=0;Ie<w.mipmaps.length;Ie++)Se(Z.__webglFramebuffer[be][Ie],F,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ie);else Se(Z.__webglFramebuffer[be],F,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);E(w)&&v(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(We){for(let be=0,Ie=xe.length;be<Ie;be++){const dt=xe[be],Me=r.get(dt);n.bindTexture(s.TEXTURE_2D,Me.__webglTexture),ie(s.TEXTURE_2D,dt),Se(Z.__webglFramebuffer,F,dt,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,0),E(dt)&&v(s.TEXTURE_2D)}n.unbindTexture()}else{let be=s.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(be=F.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(be,me.__webglTexture),ie(be,w),w.mipmaps&&w.mipmaps.length>0)for(let Ie=0;Ie<w.mipmaps.length;Ie++)Se(Z.__webglFramebuffer[Ie],F,w,s.COLOR_ATTACHMENT0,be,Ie);else Se(Z.__webglFramebuffer,F,w,s.COLOR_ATTACHMENT0,be,0);E(w)&&v(be),n.unbindTexture()}F.depthBuffer&&$e(F)}function Ft(F){const w=F.textures;for(let Z=0,me=w.length;Z<me;Z++){const xe=w[Z];if(E(xe)){const de=L(F),We=r.get(xe).__webglTexture;n.bindTexture(de,We),v(de),n.unbindTexture()}}}const ut=[],H=[];function vn(F){if(F.samples>0){if(ft(F)===!1){const w=F.textures,Z=F.width,me=F.height;let xe=s.COLOR_BUFFER_BIT;const de=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,We=r.get(F),be=w.length>1;if(be)for(let Ie=0;Ie<w.length;Ie++)n.bindFramebuffer(s.FRAMEBUFFER,We.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,We.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let Ie=0;Ie<w.length;Ie++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(xe|=s.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(xe|=s.STENCIL_BUFFER_BIT)),be){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,We.__webglColorRenderbuffer[Ie]);const dt=r.get(w[Ie]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,dt,0)}s.blitFramebuffer(0,0,Z,me,0,0,Z,me,xe,s.NEAREST),m===!0&&(ut.length=0,H.length=0,ut.push(s.COLOR_ATTACHMENT0+Ie),F.depthBuffer&&F.resolveDepthBuffer===!1&&(ut.push(de),H.push(de),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,H)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ut))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),be)for(let Ie=0;Ie<w.length;Ie++){n.bindFramebuffer(s.FRAMEBUFFER,We.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,We.__webglColorRenderbuffer[Ie]);const dt=r.get(w[Ie]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,We.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,dt,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&m){const w=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function mt(F){return Math.min(o.maxSamples,F.samples)}function ft(F){const w=r.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ye(F){const w=u.render.frame;x.get(F)!==w&&(x.set(F,w),F.update())}function At(F,w){const Z=F.colorSpace,me=F.format,xe=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||Z!==Xs&&Z!==vr&&(wt.getTransfer(Z)===Rt?(me!==ci||xe!==Vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),w}function Ge(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(g.width=F.naturalWidth||F.width,g.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(g.width=F.displayWidth,g.height=F.displayHeight):(g.width=F.width,g.height=F.height),g}this.allocateTextureUnit=te,this.resetTextureUnits=re,this.setTexture2D=fe,this.setTexture2DArray=se,this.setTexture3D=oe,this.setTextureCube=V,this.rebindTextures=je,this.setupRenderTarget=Pt,this.updateRenderTargetMipmap=Ft,this.updateMultisampleRenderTarget=vn,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=ft}function kM(s,e){function n(r,o=vr){let l;const u=wt.getTransfer(o);if(r===Vi)return s.UNSIGNED_BYTE;if(r===qd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Kd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Km)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Ym)return s.BYTE;if(r===qm)return s.SHORT;if(r===ka)return s.UNSIGNED_SHORT;if(r===Yd)return s.INT;if(r===Kr)return s.UNSIGNED_INT;if(r===zi)return s.FLOAT;if(r===za)return s.HALF_FLOAT;if(r===Zm)return s.ALPHA;if(r===Qm)return s.RGB;if(r===ci)return s.RGBA;if(r===Jm)return s.LUMINANCE;if(r===eg)return s.LUMINANCE_ALPHA;if(r===zs)return s.DEPTH_COMPONENT;if(r===Ws)return s.DEPTH_STENCIL;if(r===tg)return s.RED;if(r===Zd)return s.RED_INTEGER;if(r===ng)return s.RG;if(r===Qd)return s.RG_INTEGER;if(r===Jd)return s.RGBA_INTEGER;if(r===bl||r===Al||r===Cl||r===Rl)if(u===Rt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===bl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Al)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Cl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Rl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===bl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Al)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Cl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Rl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===hd||r===pd||r===md||r===gd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===hd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===pd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===md)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===gd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===xd||r===vd||r===_d)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===xd||r===vd)return u===Rt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===_d)return u===Rt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===yd||r===Ed||r===Sd||r===Md||r===wd||r===Td||r===bd||r===Ad||r===Cd||r===Rd||r===Nd||r===Pd||r===Fd||r===Ld)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===yd)return u===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ed)return u===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Sd)return u===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Md)return u===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===wd)return u===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Td)return u===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===bd)return u===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ad)return u===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Cd)return u===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Rd)return u===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Nd)return u===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Pd)return u===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Fd)return u===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ld)return u===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Nl||r===Dd||r===Id)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Nl)return u===Rt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Dd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Id)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ig||r===Ud||r===kd||r===Od)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Nl)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Ud)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===kd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Od)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Gs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const OM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class BM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const o=new Dn,l=e.properties.get(o);l.__webglTexture=n.texture,(n.depthNear!==r.depthNear||n.depthFar!==r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Sr({vertexShader:OM,fragmentShader:zM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Qn(new Ol(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class HM extends Ys{constructor(e,n){super();const r=this;let o=null,l=1,u=null,f="local-floor",m=1,g=null,x=null,_=null,y=null,S=null,T=null;const C=new BM,E=n.getContextAttributes();let v=null,L=null;const P=[],N=[],G=new bt;let O=null;const D=new Zn;D.viewport=new Wt;const k=new Zn;k.viewport=new Wt;const R=[D,k],b=new cy;let z=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let pe=P[J];return pe===void 0&&(pe=new Wu,P[J]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(J){let pe=P[J];return pe===void 0&&(pe=new Wu,P[J]=pe),pe.getGripSpace()},this.getHand=function(J){let pe=P[J];return pe===void 0&&(pe=new Wu,P[J]=pe),pe.getHandSpace()};function te(J){const pe=N.indexOf(J.inputSource);if(pe===-1)return;const Se=P[pe];Se!==void 0&&(Se.update(J.inputSource,J.frame,g||u),Se.dispatchEvent({type:J.type,data:J.inputSource}))}function ue(){o.removeEventListener("select",te),o.removeEventListener("selectstart",te),o.removeEventListener("selectend",te),o.removeEventListener("squeeze",te),o.removeEventListener("squeezestart",te),o.removeEventListener("squeezeend",te),o.removeEventListener("end",ue),o.removeEventListener("inputsourceschange",fe);for(let J=0;J<P.length;J++){const pe=N[J];pe!==null&&(N[J]=null,P[J].disconnect(pe))}z=null,re=null,C.reset(),e.setRenderTarget(v),S=null,y=null,_=null,o=null,L=null,De.stop(),r.isPresenting=!1,e.setPixelRatio(O),e.setSize(G.width,G.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){l=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){f=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||u},this.setReferenceSpace=function(J){g=J},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return _},this.getFrame=function(){return T},this.getSession=function(){return o},this.setSession=async function(J){if(o=J,o!==null){if(v=e.getRenderTarget(),o.addEventListener("select",te),o.addEventListener("selectstart",te),o.addEventListener("selectend",te),o.addEventListener("squeeze",te),o.addEventListener("squeezestart",te),o.addEventListener("squeezeend",te),o.addEventListener("end",ue),o.addEventListener("inputsourceschange",fe),E.xrCompatible!==!0&&await n.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(G),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,_e=null,Te=null;E.depth&&(Te=E.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Se=E.stencil?Ws:zs,_e=E.stencil?Gs:Kr);const $e={colorFormat:n.RGBA8,depthFormat:Te,scaleFactor:l};_=new XRWebGLBinding(o,n),y=_.createProjectionLayer($e),o.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),L=new Zr(y.textureWidth,y.textureHeight,{format:ci,type:Vi,depthTexture:new vg(y.textureWidth,y.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1})}else{const Se={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,n,Se),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),L=new Zr(S.framebufferWidth,S.framebufferHeight,{format:ci,type:Vi,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil})}L.isXRRenderTarget=!0,this.setFoveation(m),g=null,u=await o.requestReferenceSpace(f),De.setContext(o),De.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function fe(J){for(let pe=0;pe<J.removed.length;pe++){const Se=J.removed[pe],_e=N.indexOf(Se);_e>=0&&(N[_e]=null,P[_e].disconnect(Se))}for(let pe=0;pe<J.added.length;pe++){const Se=J.added[pe];let _e=N.indexOf(Se);if(_e===-1){for(let $e=0;$e<P.length;$e++)if($e>=N.length){N.push(Se),_e=$e;break}else if(N[$e]===null){N[$e]=Se,_e=$e;break}if(_e===-1)break}const Te=P[_e];Te&&Te.connect(Se)}}const se=new Q,oe=new Q;function V(J,pe,Se){se.setFromMatrixPosition(pe.matrixWorld),oe.setFromMatrixPosition(Se.matrixWorld);const _e=se.distanceTo(oe),Te=pe.projectionMatrix.elements,$e=Se.projectionMatrix.elements,je=Te[14]/(Te[10]-1),Pt=Te[14]/(Te[10]+1),Ft=(Te[9]+1)/Te[5],ut=(Te[9]-1)/Te[5],H=(Te[8]-1)/Te[0],vn=($e[8]+1)/$e[0],mt=je*H,ft=je*vn,Ye=_e/(-H+vn),At=Ye*-H;if(pe.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(At),J.translateZ(Ye),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Te[10]===-1)J.projectionMatrix.copy(pe.projectionMatrix),J.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const Ge=je+Ye,F=Pt+Ye,w=mt-At,Z=ft+(_e-At),me=Ft*Pt/F*Ge,xe=ut*Pt/F*Ge;J.projectionMatrix.makePerspective(w,Z,me,xe,Ge,F),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ce(J,pe){pe===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(pe.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(o===null)return;let pe=J.near,Se=J.far;C.texture!==null&&(C.depthNear>0&&(pe=C.depthNear),C.depthFar>0&&(Se=C.depthFar)),b.near=k.near=D.near=pe,b.far=k.far=D.far=Se,(z!==b.near||re!==b.far)&&(o.updateRenderState({depthNear:b.near,depthFar:b.far}),z=b.near,re=b.far),D.layers.mask=J.layers.mask|2,k.layers.mask=J.layers.mask|4,b.layers.mask=D.layers.mask|k.layers.mask;const _e=J.parent,Te=b.cameras;ce(b,_e);for(let $e=0;$e<Te.length;$e++)ce(Te[$e],_e);Te.length===2?V(b,D,k):b.projectionMatrix.copy(D.projectionMatrix),le(J,b,_e)};function le(J,pe,Se){Se===null?J.matrix.copy(pe.matrixWorld):(J.matrix.copy(Se.matrixWorld),J.matrix.invert(),J.matrix.multiply(pe.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(pe.projectionMatrix),J.projectionMatrixInverse.copy(pe.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=zd*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(y===null&&S===null))return m},this.setFoveation=function(J){m=J,y!==null&&(y.fixedFoveation=J),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=J)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(b)};let U=null;function ie(J,pe){if(x=pe.getViewerPose(g||u),T=pe,x!==null){const Se=x.views;S!==null&&(e.setRenderTargetFramebuffer(L,S.framebuffer),e.setRenderTarget(L));let _e=!1;Se.length!==b.cameras.length&&(b.cameras.length=0,_e=!0);for(let je=0;je<Se.length;je++){const Pt=Se[je];let Ft=null;if(S!==null)Ft=S.getViewport(Pt);else{const H=_.getViewSubImage(y,Pt);Ft=H.viewport,je===0&&(e.setRenderTargetTextures(L,H.colorTexture,y.ignoreDepthValues?void 0:H.depthStencilTexture),e.setRenderTarget(L))}let ut=R[je];ut===void 0&&(ut=new Zn,ut.layers.enable(je),ut.viewport=new Wt,R[je]=ut),ut.matrix.fromArray(Pt.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(Pt.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(Ft.x,Ft.y,Ft.width,Ft.height),je===0&&(b.matrix.copy(ut.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),_e===!0&&b.cameras.push(ut)}const Te=o.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&_){const je=_.getDepthInformation(Se[0]);je&&je.isValid&&je.texture&&C.init(e,je,o.renderState)}}for(let Se=0;Se<P.length;Se++){const _e=N[Se],Te=P[Se];_e!==null&&Te!==void 0&&Te.update(_e,pe,g||u)}U&&U(J,pe),pe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:pe}),T=null}const De=new _g;De.setAnimationLoop(ie),this.setAnimationLoop=function(J){U=J},this.dispose=function(){}}}const jr=new ji,VM=new Xt;function jM(s,e){function n(E,v){E.matrixAutoUpdate===!0&&E.updateMatrix(),v.value.copy(E.matrix)}function r(E,v){v.color.getRGB(E.fogColor.value,hg(s)),v.isFog?(E.fogNear.value=v.near,E.fogFar.value=v.far):v.isFogExp2&&(E.fogDensity.value=v.density)}function o(E,v,L,P,N){v.isMeshBasicMaterial||v.isMeshLambertMaterial?l(E,v):v.isMeshToonMaterial?(l(E,v),_(E,v)):v.isMeshPhongMaterial?(l(E,v),x(E,v)):v.isMeshStandardMaterial?(l(E,v),y(E,v),v.isMeshPhysicalMaterial&&S(E,v,N)):v.isMeshMatcapMaterial?(l(E,v),T(E,v)):v.isMeshDepthMaterial?l(E,v):v.isMeshDistanceMaterial?(l(E,v),C(E,v)):v.isMeshNormalMaterial?l(E,v):v.isLineBasicMaterial?(u(E,v),v.isLineDashedMaterial&&f(E,v)):v.isPointsMaterial?m(E,v,L,P):v.isSpriteMaterial?g(E,v):v.isShadowMaterial?(E.color.value.copy(v.color),E.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(E,v){E.opacity.value=v.opacity,v.color&&E.diffuse.value.copy(v.color),v.emissive&&E.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(E.map.value=v.map,n(v.map,E.mapTransform)),v.alphaMap&&(E.alphaMap.value=v.alphaMap,n(v.alphaMap,E.alphaMapTransform)),v.bumpMap&&(E.bumpMap.value=v.bumpMap,n(v.bumpMap,E.bumpMapTransform),E.bumpScale.value=v.bumpScale,v.side===Ln&&(E.bumpScale.value*=-1)),v.normalMap&&(E.normalMap.value=v.normalMap,n(v.normalMap,E.normalMapTransform),E.normalScale.value.copy(v.normalScale),v.side===Ln&&E.normalScale.value.negate()),v.displacementMap&&(E.displacementMap.value=v.displacementMap,n(v.displacementMap,E.displacementMapTransform),E.displacementScale.value=v.displacementScale,E.displacementBias.value=v.displacementBias),v.emissiveMap&&(E.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,E.emissiveMapTransform)),v.specularMap&&(E.specularMap.value=v.specularMap,n(v.specularMap,E.specularMapTransform)),v.alphaTest>0&&(E.alphaTest.value=v.alphaTest);const L=e.get(v),P=L.envMap,N=L.envMapRotation;P&&(E.envMap.value=P,jr.copy(N),jr.x*=-1,jr.y*=-1,jr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(jr.y*=-1,jr.z*=-1),E.envMapRotation.value.setFromMatrix4(VM.makeRotationFromEuler(jr)),E.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,E.reflectivity.value=v.reflectivity,E.ior.value=v.ior,E.refractionRatio.value=v.refractionRatio),v.lightMap&&(E.lightMap.value=v.lightMap,E.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,E.lightMapTransform)),v.aoMap&&(E.aoMap.value=v.aoMap,E.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,E.aoMapTransform))}function u(E,v){E.diffuse.value.copy(v.color),E.opacity.value=v.opacity,v.map&&(E.map.value=v.map,n(v.map,E.mapTransform))}function f(E,v){E.dashSize.value=v.dashSize,E.totalSize.value=v.dashSize+v.gapSize,E.scale.value=v.scale}function m(E,v,L,P){E.diffuse.value.copy(v.color),E.opacity.value=v.opacity,E.size.value=v.size*L,E.scale.value=P*.5,v.map&&(E.map.value=v.map,n(v.map,E.uvTransform)),v.alphaMap&&(E.alphaMap.value=v.alphaMap,n(v.alphaMap,E.alphaMapTransform)),v.alphaTest>0&&(E.alphaTest.value=v.alphaTest)}function g(E,v){E.diffuse.value.copy(v.color),E.opacity.value=v.opacity,E.rotation.value=v.rotation,v.map&&(E.map.value=v.map,n(v.map,E.mapTransform)),v.alphaMap&&(E.alphaMap.value=v.alphaMap,n(v.alphaMap,E.alphaMapTransform)),v.alphaTest>0&&(E.alphaTest.value=v.alphaTest)}function x(E,v){E.specular.value.copy(v.specular),E.shininess.value=Math.max(v.shininess,1e-4)}function _(E,v){v.gradientMap&&(E.gradientMap.value=v.gradientMap)}function y(E,v){E.metalness.value=v.metalness,v.metalnessMap&&(E.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,E.metalnessMapTransform)),E.roughness.value=v.roughness,v.roughnessMap&&(E.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,E.roughnessMapTransform)),v.envMap&&(E.envMapIntensity.value=v.envMapIntensity)}function S(E,v,L){E.ior.value=v.ior,v.sheen>0&&(E.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),E.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(E.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,E.sheenColorMapTransform)),v.sheenRoughnessMap&&(E.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,E.sheenRoughnessMapTransform))),v.clearcoat>0&&(E.clearcoat.value=v.clearcoat,E.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(E.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,E.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(E.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,E.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(E.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,E.clearcoatNormalMapTransform),E.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Ln&&E.clearcoatNormalScale.value.negate())),v.dispersion>0&&(E.dispersion.value=v.dispersion),v.iridescence>0&&(E.iridescence.value=v.iridescence,E.iridescenceIOR.value=v.iridescenceIOR,E.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],E.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(E.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,E.iridescenceMapTransform)),v.iridescenceThicknessMap&&(E.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,E.iridescenceThicknessMapTransform))),v.transmission>0&&(E.transmission.value=v.transmission,E.transmissionSamplerMap.value=L.texture,E.transmissionSamplerSize.value.set(L.width,L.height),v.transmissionMap&&(E.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,E.transmissionMapTransform)),E.thickness.value=v.thickness,v.thicknessMap&&(E.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,E.thicknessMapTransform)),E.attenuationDistance.value=v.attenuationDistance,E.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(E.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(E.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,E.anisotropyMapTransform))),E.specularIntensity.value=v.specularIntensity,E.specularColor.value.copy(v.specularColor),v.specularColorMap&&(E.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,E.specularColorMapTransform)),v.specularIntensityMap&&(E.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,E.specularIntensityMapTransform))}function T(E,v){v.matcap&&(E.matcap.value=v.matcap)}function C(E,v){const L=e.get(v).light;E.referencePosition.value.setFromMatrixPosition(L.matrixWorld),E.nearDistance.value=L.shadow.camera.near,E.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function GM(s,e,n,r){let o={},l={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(L,P){const N=P.program;r.uniformBlockBinding(L,N)}function g(L,P){let N=o[L.id];N===void 0&&(T(L),N=x(L),o[L.id]=N,L.addEventListener("dispose",E));const G=P.program;r.updateUBOMapping(L,G);const O=e.render.frame;l[L.id]!==O&&(y(L),l[L.id]=O)}function x(L){const P=_();L.__bindingPointIndex=P;const N=s.createBuffer(),G=L.__size,O=L.usage;return s.bindBuffer(s.UNIFORM_BUFFER,N),s.bufferData(s.UNIFORM_BUFFER,G,O),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,N),N}function _(){for(let L=0;L<f;L++)if(u.indexOf(L)===-1)return u.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(L){const P=o[L.id],N=L.uniforms,G=L.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let O=0,D=N.length;O<D;O++){const k=Array.isArray(N[O])?N[O]:[N[O]];for(let R=0,b=k.length;R<b;R++){const z=k[R];if(S(z,O,R,G)===!0){const re=z.__offset,te=Array.isArray(z.value)?z.value:[z.value];let ue=0;for(let fe=0;fe<te.length;fe++){const se=te[fe],oe=C(se);typeof se=="number"||typeof se=="boolean"?(z.__data[0]=se,s.bufferSubData(s.UNIFORM_BUFFER,re+ue,z.__data)):se.isMatrix3?(z.__data[0]=se.elements[0],z.__data[1]=se.elements[1],z.__data[2]=se.elements[2],z.__data[3]=0,z.__data[4]=se.elements[3],z.__data[5]=se.elements[4],z.__data[6]=se.elements[5],z.__data[7]=0,z.__data[8]=se.elements[6],z.__data[9]=se.elements[7],z.__data[10]=se.elements[8],z.__data[11]=0):(se.toArray(z.__data,ue),ue+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,re,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(L,P,N,G){const O=L.value,D=P+"_"+N;if(G[D]===void 0)return typeof O=="number"||typeof O=="boolean"?G[D]=O:G[D]=O.clone(),!0;{const k=G[D];if(typeof O=="number"||typeof O=="boolean"){if(k!==O)return G[D]=O,!0}else if(k.equals(O)===!1)return k.copy(O),!0}return!1}function T(L){const P=L.uniforms;let N=0;const G=16;for(let D=0,k=P.length;D<k;D++){const R=Array.isArray(P[D])?P[D]:[P[D]];for(let b=0,z=R.length;b<z;b++){const re=R[b],te=Array.isArray(re.value)?re.value:[re.value];for(let ue=0,fe=te.length;ue<fe;ue++){const se=te[ue],oe=C(se),V=N%G,ce=V%oe.boundary,le=V+ce;N+=ce,le!==0&&G-le<oe.storage&&(N+=G-le),re.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),re.__offset=N,N+=oe.storage}}}const O=N%G;return O>0&&(N+=G-O),L.__size=N,L.__cache={},this}function C(L){const P={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(P.boundary=4,P.storage=4):L.isVector2?(P.boundary=8,P.storage=8):L.isVector3||L.isColor?(P.boundary=16,P.storage=12):L.isVector4?(P.boundary=16,P.storage=16):L.isMatrix3?(P.boundary=48,P.storage=48):L.isMatrix4?(P.boundary=64,P.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),P}function E(L){const P=L.target;P.removeEventListener("dispose",E);const N=u.indexOf(P.__bindingPointIndex);u.splice(N,1),s.deleteBuffer(o[P.id]),delete o[P.id],delete l[P.id]}function v(){for(const L in o)s.deleteBuffer(o[L]);u=[],o={},l={}}return{bind:m,update:g,dispose:v}}class WM{constructor(e={}){const{canvas:n=C_(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:g=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=u;const T=new Uint32Array(4),C=new Int32Array(4);let E=null,v=null;const L=[],P=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kn,this.toneMapping=yr,this.toneMappingExposure=1;const N=this;let G=!1,O=0,D=0,k=null,R=-1,b=null;const z=new Wt,re=new Wt;let te=null;const ue=new Ct(0);let fe=0,se=n.width,oe=n.height,V=1,ce=null,le=null;const U=new Wt(0,0,se,oe),ie=new Wt(0,0,se,oe);let De=!1;const J=new gg;let pe=!1,Se=!1;this.transmissionResolutionScale=1;const _e=new Xt,Te=new Xt,$e=new Q,je=new Wt,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ft=!1;function ut(){return k===null?V:1}let H=r;function vn(A,X){return n.getContext(A,X)}try{const A={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:m,preserveDrawingBuffer:g,powerPreference:x,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${$d}`),n.addEventListener("webglcontextlost",he,!1),n.addEventListener("webglcontextrestored",Pe,!1),n.addEventListener("webglcontextcreationerror",Ne,!1),H===null){const X="webgl2";if(H=vn(X,A),H===null)throw vn(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let mt,ft,Ye,At,Ge,F,w,Z,me,xe,de,We,be,Ie,dt,Me,ke,Ke,et,Oe,ht,rt,Tt,W;function Ae(){mt=new tS(H),mt.init(),rt=new kM(H,mt),ft=new qE(H,mt,e,rt),Ye=new IM(H,mt),ft.reverseDepthBuffer&&y&&Ye.buffers.depth.setReversed(!0),At=new rS(H),Ge=new SM,F=new UM(H,mt,Ye,Ge,ft,rt,At),w=new ZE(N),Z=new eS(N),me=new dy(H),Tt=new $E(H,me),xe=new nS(H,me,At,Tt),de=new aS(H,xe,me,At),et=new sS(H,ft,F),Me=new KE(Ge),We=new EM(N,w,Z,mt,ft,Tt,Me),be=new jM(N,Ge),Ie=new wM,dt=new NM(mt),Ke=new XE(N,w,Z,Ye,de,S,m),ke=new LM(N,de,ft),W=new GM(H,At,ft,Ye),Oe=new YE(H,mt,At),ht=new iS(H,mt,At),At.programs=We.programs,N.capabilities=ft,N.extensions=mt,N.properties=Ge,N.renderLists=Ie,N.shadowMap=ke,N.state=Ye,N.info=At}Ae();const ae=new HM(N,H);this.xr=ae,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const A=mt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=mt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(A){A!==void 0&&(V=A,this.setSize(se,oe,!1))},this.getSize=function(A){return A.set(se,oe)},this.setSize=function(A,X,ee=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=A,oe=X,n.width=Math.floor(A*V),n.height=Math.floor(X*V),ee===!0&&(n.style.width=A+"px",n.style.height=X+"px"),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(se*V,oe*V).floor()},this.setDrawingBufferSize=function(A,X,ee){se=A,oe=X,V=ee,n.width=Math.floor(A*ee),n.height=Math.floor(X*ee),this.setViewport(0,0,A,X)},this.getCurrentViewport=function(A){return A.copy(z)},this.getViewport=function(A){return A.copy(U)},this.setViewport=function(A,X,ee,q){A.isVector4?U.set(A.x,A.y,A.z,A.w):U.set(A,X,ee,q),Ye.viewport(z.copy(U).multiplyScalar(V).round())},this.getScissor=function(A){return A.copy(ie)},this.setScissor=function(A,X,ee,q){A.isVector4?ie.set(A.x,A.y,A.z,A.w):ie.set(A,X,ee,q),Ye.scissor(re.copy(ie).multiplyScalar(V).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(A){Ye.setScissorTest(De=A)},this.setOpaqueSort=function(A){ce=A},this.setTransparentSort=function(A){le=A},this.getClearColor=function(A){return A.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor.apply(Ke,arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha.apply(Ke,arguments)},this.clear=function(A=!0,X=!0,ee=!0){let q=0;if(A){let $=!1;if(k!==null){const Ee=k.texture.format;$=Ee===Jd||Ee===Qd||Ee===Zd}if($){const Ee=k.texture.type,Ce=Ee===Vi||Ee===Kr||Ee===ka||Ee===Gs||Ee===qd||Ee===Kd,Fe=Ke.getClearColor(),ze=Ke.getClearAlpha(),tt=Fe.r,Je=Fe.g,He=Fe.b;Ce?(T[0]=tt,T[1]=Je,T[2]=He,T[3]=ze,H.clearBufferuiv(H.COLOR,0,T)):(C[0]=tt,C[1]=Je,C[2]=He,C[3]=ze,H.clearBufferiv(H.COLOR,0,C))}else q|=H.COLOR_BUFFER_BIT}X&&(q|=H.DEPTH_BUFFER_BIT),ee&&(q|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",he,!1),n.removeEventListener("webglcontextrestored",Pe,!1),n.removeEventListener("webglcontextcreationerror",Ne,!1),Ke.dispose(),Ie.dispose(),dt.dispose(),Ge.dispose(),w.dispose(),Z.dispose(),de.dispose(),Tt.dispose(),W.dispose(),We.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Qr),ae.removeEventListener("sessionend",Gi),Ei.stop()};function he(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const A=At.autoReset,X=ke.enabled,ee=ke.autoUpdate,q=ke.needsUpdate,$=ke.type;Ae(),At.autoReset=A,ke.enabled=X,ke.autoUpdate=ee,ke.needsUpdate=q,ke.type=$}function Ne(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function st(A){const X=A.target;X.removeEventListener("dispose",st),Dt(X)}function Dt(A){qt(A),Ge.remove(A)}function qt(A){const X=Ge.get(A).programs;X!==void 0&&(X.forEach(function(ee){We.releaseProgram(ee)}),A.isShaderMaterial&&We.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,ee,q,$,Ee){X===null&&(X=Pt);const Ce=$.isMesh&&$.matrixWorld.determinant()<0,Fe=$a(A,X,ee,q,$);Ye.setMaterial(q,Ce);let ze=ee.index,tt=1;if(q.wireframe===!0){if(ze=xe.getWireframeAttribute(ee),ze===void 0)return;tt=2}const Je=ee.drawRange,He=ee.attributes.position;let xt=Je.start*tt,at=(Je.start+Je.count)*tt;Ee!==null&&(xt=Math.max(xt,Ee.start*tt),at=Math.min(at,(Ee.start+Ee.count)*tt)),ze!==null?(xt=Math.max(xt,0),at=Math.min(at,ze.count)):He!=null&&(xt=Math.max(xt,0),at=Math.min(at,He.count));const Ht=at-xt;if(Ht<0||Ht===1/0)return;Tt.setup($,q,Fe,ee,ze);let kt,_t=Oe;if(ze!==null&&(kt=me.get(ze),_t=ht,_t.setIndex(kt)),$.isMesh)q.wireframe===!0?(Ye.setLineWidth(q.wireframeLinewidth*ut()),_t.setMode(H.LINES)):_t.setMode(H.TRIANGLES);else if($.isLine){let qe=q.linewidth;qe===void 0&&(qe=1),Ye.setLineWidth(qe*ut()),$.isLineSegments?_t.setMode(H.LINES):$.isLineLoop?_t.setMode(H.LINE_LOOP):_t.setMode(H.LINE_STRIP)}else $.isPoints?_t.setMode(H.POINTS):$.isSprite&&_t.setMode(H.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)_t.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(mt.get("WEBGL_multi_draw"))_t.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const qe=$._multiDrawStarts,Vt=$._multiDrawCounts,gt=$._multiDrawCount,un=ze?me.get(ze).bytesPerElement:1,Xi=Ge.get(q).currentProgram.getUniforms();for(let yn=0;yn<gt;yn++)Xi.setValue(H,"_gl_DrawID",yn),_t.render(qe[yn]/un,Vt[yn])}else if($.isInstancedMesh)_t.renderInstances(xt,Ht,$.count);else if(ee.isInstancedBufferGeometry){const qe=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Vt=Math.min(ee.instanceCount,qe);_t.renderInstances(xt,Ht,Vt)}else _t.render(xt,Ht)};function yt(A,X,ee){A.transparent===!0&&A.side===Oi&&A.forceSinglePass===!1?(A.side=Ln,A.needsUpdate=!0,Jr(A,X,ee),A.side=Er,A.needsUpdate=!0,Jr(A,X,ee),A.side=Oi):Jr(A,X,ee)}this.compile=function(A,X,ee=null){ee===null&&(ee=A),v=dt.get(ee),v.init(X),P.push(v),ee.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(v.pushLight($),$.castShadow&&v.pushShadow($))}),A!==ee&&A.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(v.pushLight($),$.castShadow&&v.pushShadow($))}),v.setupLights();const q=new Set;return A.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Ee=$.material;if(Ee)if(Array.isArray(Ee))for(let Ce=0;Ce<Ee.length;Ce++){const Fe=Ee[Ce];yt(Fe,ee,$),q.add(Fe)}else yt(Ee,ee,$),q.add(Ee)}),P.pop(),v=null,q},this.compileAsync=function(A,X,ee=null){const q=this.compile(A,X,ee);return new Promise($=>{function Ee(){if(q.forEach(function(Ce){Ge.get(Ce).currentProgram.isReady()&&q.delete(Ce)}),q.size===0){$(A);return}setTimeout(Ee,10)}mt.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Tn=null;function _n(A){Tn&&Tn(A)}function Qr(){Ei.stop()}function Gi(){Ei.start()}const Ei=new _g;Ei.setAnimationLoop(_n),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(A){Tn=A,ae.setAnimationLoop(A),A===null?Ei.stop():Ei.start()},ae.addEventListener("sessionstart",Qr),ae.addEventListener("sessionend",Gi),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(X),X=ae.getCamera()),A.isScene===!0&&A.onBeforeRender(N,A,X,k),v=dt.get(A,P.length),v.init(X),P.push(v),Te.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),J.setFromProjectionMatrix(Te),Se=this.localClippingEnabled,pe=Me.init(this.clippingPlanes,Se),E=Ie.get(A,L.length),E.init(),L.push(E),ae.enabled===!0&&ae.isPresenting===!0){const Ee=N.xr.getDepthSensingMesh();Ee!==null&&Si(Ee,X,-1/0,N.sortObjects)}Si(A,X,0,N.sortObjects),E.finish(),N.sortObjects===!0&&E.sort(ce,le),Ft=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,Ft&&Ke.addToRenderList(E,A),this.info.render.frame++,pe===!0&&Me.beginShadows();const ee=v.state.shadowsArray;ke.render(ee,A,X),pe===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=E.opaque,$=E.transmissive;if(v.setupLights(),X.isArrayCamera){const Ee=X.cameras;if($.length>0)for(let Ce=0,Fe=Ee.length;Ce<Fe;Ce++){const ze=Ee[Ce];wr(q,$,A,ze)}Ft&&Ke.render(A);for(let Ce=0,Fe=Ee.length;Ce<Fe;Ce++){const ze=Ee[Ce];Mr(E,A,ze,ze.viewport)}}else $.length>0&&wr(q,$,A,X),Ft&&Ke.render(A),Mr(E,A,X);k!==null&&D===0&&(F.updateMultisampleRenderTarget(k),F.updateRenderTargetMipmap(k)),A.isScene===!0&&A.onAfterRender(N,A,X),Tt.resetDefaultState(),R=-1,b=null,P.pop(),P.length>0?(v=P[P.length-1],pe===!0&&Me.setGlobalState(N.clippingPlanes,v.state.camera)):v=null,L.pop(),L.length>0?E=L[L.length-1]:E=null};function Si(A,X,ee,q){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)ee=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)v.pushLight(A),A.castShadow&&v.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||J.intersectsSprite(A)){q&&je.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Te);const Ce=de.update(A),Fe=A.material;Fe.visible&&E.push(A,Ce,Fe,ee,je.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||J.intersectsObject(A))){const Ce=de.update(A),Fe=A.material;if(q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),je.copy(A.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),je.copy(Ce.boundingSphere.center)),je.applyMatrix4(A.matrixWorld).applyMatrix4(Te)),Array.isArray(Fe)){const ze=Ce.groups;for(let tt=0,Je=ze.length;tt<Je;tt++){const He=ze[tt],xt=Fe[He.materialIndex];xt&&xt.visible&&E.push(A,Ce,xt,ee,je.z,He)}}else Fe.visible&&E.push(A,Ce,Fe,ee,je.z,null)}}const Ee=A.children;for(let Ce=0,Fe=Ee.length;Ce<Fe;Ce++)Si(Ee[Ce],X,ee,q)}function Mr(A,X,ee,q){const $=A.opaque,Ee=A.transmissive,Ce=A.transparent;v.setupLightsView(ee),pe===!0&&Me.setGlobalState(N.clippingPlanes,ee),q&&Ye.viewport(z.copy(q)),$.length>0&&Wi($,X,ee),Ee.length>0&&Wi(Ee,X,ee),Ce.length>0&&Wi(Ce,X,ee),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function wr(A,X,ee,q){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[q.id]===void 0&&(v.state.transmissionRenderTarget[q.id]=new Zr(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float")?za:Vi,minFilter:qr,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));const Ee=v.state.transmissionRenderTarget[q.id],Ce=q.viewport||z;Ee.setSize(Ce.z*N.transmissionResolutionScale,Ce.w*N.transmissionResolutionScale);const Fe=N.getRenderTarget();N.setRenderTarget(Ee),N.getClearColor(ue),fe=N.getClearAlpha(),fe<1&&N.setClearColor(16777215,.5),N.clear(),Ft&&Ke.render(ee);const ze=N.toneMapping;N.toneMapping=yr;const tt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),v.setupLightsView(q),pe===!0&&Me.setGlobalState(N.clippingPlanes,q),Wi(A,ee,q),F.updateMultisampleRenderTarget(Ee),F.updateRenderTargetMipmap(Ee),mt.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let He=0,xt=X.length;He<xt;He++){const at=X[He],Ht=at.object,kt=at.geometry,_t=at.material,qe=at.group;if(_t.side===Oi&&Ht.layers.test(q.layers)){const Vt=_t.side;_t.side=Ln,_t.needsUpdate=!0,Wa(Ht,ee,q,kt,_t,qe),_t.side=Vt,_t.needsUpdate=!0,Je=!0}}Je===!0&&(F.updateMultisampleRenderTarget(Ee),F.updateRenderTargetMipmap(Ee))}N.setRenderTarget(Fe),N.setClearColor(ue,fe),tt!==void 0&&(q.viewport=tt),N.toneMapping=ze}function Wi(A,X,ee){const q=X.isScene===!0?X.overrideMaterial:null;for(let $=0,Ee=A.length;$<Ee;$++){const Ce=A[$],Fe=Ce.object,ze=Ce.geometry,tt=q===null?Ce.material:q,Je=Ce.group;Fe.layers.test(ee.layers)&&Wa(Fe,X,ee,ze,tt,Je)}}function Wa(A,X,ee,q,$,Ee){A.onBeforeRender(N,X,ee,q,$,Ee),A.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),$.onBeforeRender(N,X,ee,q,A,Ee),$.transparent===!0&&$.side===Oi&&$.forceSinglePass===!1?($.side=Ln,$.needsUpdate=!0,N.renderBufferDirect(ee,X,q,$,A,Ee),$.side=Er,$.needsUpdate=!0,N.renderBufferDirect(ee,X,q,$,A,Ee),$.side=Oi):N.renderBufferDirect(ee,X,q,$,A,Ee),A.onAfterRender(N,X,ee,q,$,Ee)}function Jr(A,X,ee){X.isScene!==!0&&(X=Pt);const q=Ge.get(A),$=v.state.lights,Ee=v.state.shadowsArray,Ce=$.state.version,Fe=We.getParameters(A,$.state,Ee,X,ee),ze=We.getProgramCacheKey(Fe);let tt=q.programs;q.environment=A.isMeshStandardMaterial?X.environment:null,q.fog=X.fog,q.envMap=(A.isMeshStandardMaterial?Z:w).get(A.envMap||q.environment),q.envMapRotation=q.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,tt===void 0&&(A.addEventListener("dispose",st),tt=new Map,q.programs=tt);let Je=tt.get(ze);if(Je!==void 0){if(q.currentProgram===Je&&q.lightsStateVersion===Ce)return hi(A,Fe),Je}else Fe.uniforms=We.getUniforms(A),A.onBeforeCompile(Fe,N),Je=We.acquireProgram(Fe,ze),tt.set(ze,Je),q.uniforms=Fe.uniforms;const He=q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(He.clippingPlanes=Me.uniform),hi(A,Fe),q.needsLights=Bl(A),q.lightsStateVersion=Ce,q.needsLights&&(He.ambientLightColor.value=$.state.ambient,He.lightProbe.value=$.state.probe,He.directionalLights.value=$.state.directional,He.directionalLightShadows.value=$.state.directionalShadow,He.spotLights.value=$.state.spot,He.spotLightShadows.value=$.state.spotShadow,He.rectAreaLights.value=$.state.rectArea,He.ltc_1.value=$.state.rectAreaLTC1,He.ltc_2.value=$.state.rectAreaLTC2,He.pointLights.value=$.state.point,He.pointLightShadows.value=$.state.pointShadow,He.hemisphereLights.value=$.state.hemi,He.directionalShadowMap.value=$.state.directionalShadowMap,He.directionalShadowMatrix.value=$.state.directionalShadowMatrix,He.spotShadowMap.value=$.state.spotShadowMap,He.spotLightMatrix.value=$.state.spotLightMatrix,He.spotLightMap.value=$.state.spotLightMap,He.pointShadowMap.value=$.state.pointShadowMap,He.pointShadowMatrix.value=$.state.pointShadowMatrix),q.currentProgram=Je,q.uniformsList=null,Je}function Xa(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=Pl.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function hi(A,X){const ee=Ge.get(A);ee.outputColorSpace=X.outputColorSpace,ee.batching=X.batching,ee.batchingColor=X.batchingColor,ee.instancing=X.instancing,ee.instancingColor=X.instancingColor,ee.instancingMorph=X.instancingMorph,ee.skinning=X.skinning,ee.morphTargets=X.morphTargets,ee.morphNormals=X.morphNormals,ee.morphColors=X.morphColors,ee.morphTargetsCount=X.morphTargetsCount,ee.numClippingPlanes=X.numClippingPlanes,ee.numIntersection=X.numClipIntersection,ee.vertexAlphas=X.vertexAlphas,ee.vertexTangents=X.vertexTangents,ee.toneMapping=X.toneMapping}function $a(A,X,ee,q,$){X.isScene!==!0&&(X=Pt),F.resetTextureUnits();const Ee=X.fog,Ce=q.isMeshStandardMaterial?X.environment:null,Fe=k===null?N.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Xs,ze=(q.isMeshStandardMaterial?Z:w).get(q.envMap||Ce),tt=q.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Je=!!ee.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),He=!!ee.morphAttributes.position,xt=!!ee.morphAttributes.normal,at=!!ee.morphAttributes.color;let Ht=yr;q.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Ht=N.toneMapping);const kt=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,_t=kt!==void 0?kt.length:0,qe=Ge.get(q),Vt=v.state.lights;if(pe===!0&&(Se===!0||A!==b)){const on=A===b&&q.id===R;Me.setState(q,A,on)}let gt=!1;q.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Vt.state.version||qe.outputColorSpace!==Fe||$.isBatchedMesh&&qe.batching===!1||!$.isBatchedMesh&&qe.batching===!0||$.isBatchedMesh&&qe.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&qe.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&qe.instancing===!1||!$.isInstancedMesh&&qe.instancing===!0||$.isSkinnedMesh&&qe.skinning===!1||!$.isSkinnedMesh&&qe.skinning===!0||$.isInstancedMesh&&qe.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&qe.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&qe.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&qe.instancingMorph===!1&&$.morphTexture!==null||qe.envMap!==ze||q.fog===!0&&qe.fog!==Ee||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Me.numPlanes||qe.numIntersection!==Me.numIntersection)||qe.vertexAlphas!==tt||qe.vertexTangents!==Je||qe.morphTargets!==He||qe.morphNormals!==xt||qe.morphColors!==at||qe.toneMapping!==Ht||qe.morphTargetsCount!==_t)&&(gt=!0):(gt=!0,qe.__version=q.version);let un=qe.currentProgram;gt===!0&&(un=Jr(q,X,$));let Xi=!1,yn=!1,Mi=!1;const Nt=un.getUniforms(),dn=qe.uniforms;if(Ye.useProgram(un.program)&&(Xi=!0,yn=!0,Mi=!0),q.id!==R&&(R=q.id,yn=!0),Xi||b!==A){Ye.buffers.depth.getReversed()?(_e.copy(A.projectionMatrix),N_(_e),P_(_e),Nt.setValue(H,"projectionMatrix",_e)):Nt.setValue(H,"projectionMatrix",A.projectionMatrix),Nt.setValue(H,"viewMatrix",A.matrixWorldInverse);const tn=Nt.map.cameraPosition;tn!==void 0&&tn.setValue(H,$e.setFromMatrixPosition(A.matrixWorld)),ft.logarithmicDepthBuffer&&Nt.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Nt.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,yn=!0,Mi=!0)}if($.isSkinnedMesh){Nt.setOptional(H,$,"bindMatrix"),Nt.setOptional(H,$,"bindMatrixInverse");const on=$.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),Nt.setValue(H,"boneTexture",on.boneTexture,F))}$.isBatchedMesh&&(Nt.setOptional(H,$,"batchingTexture"),Nt.setValue(H,"batchingTexture",$._matricesTexture,F),Nt.setOptional(H,$,"batchingIdTexture"),Nt.setValue(H,"batchingIdTexture",$._indirectTexture,F),Nt.setOptional(H,$,"batchingColorTexture"),$._colorsTexture!==null&&Nt.setValue(H,"batchingColorTexture",$._colorsTexture,F));const en=ee.morphAttributes;if((en.position!==void 0||en.normal!==void 0||en.color!==void 0)&&et.update($,ee,un),(yn||qe.receiveShadow!==$.receiveShadow)&&(qe.receiveShadow=$.receiveShadow,Nt.setValue(H,"receiveShadow",$.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(dn.envMap.value=ze,dn.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&X.environment!==null&&(dn.envMapIntensity.value=X.environmentIntensity),yn&&(Nt.setValue(H,"toneMappingExposure",N.toneMappingExposure),qe.needsLights&&Ya(dn,Mi),Ee&&q.fog===!0&&be.refreshFogUniforms(dn,Ee),be.refreshMaterialUniforms(dn,q,V,oe,v.state.transmissionRenderTarget[A.id]),Pl.upload(H,Xa(qe),dn,F)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Pl.upload(H,Xa(qe),dn,F),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Nt.setValue(H,"center",$.center),Nt.setValue(H,"modelViewMatrix",$.modelViewMatrix),Nt.setValue(H,"normalMatrix",$.normalMatrix),Nt.setValue(H,"modelMatrix",$.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const on=q.uniformsGroups;for(let tn=0,Et=on.length;tn<Et;tn++){const pi=on[tn];W.update(pi,un),W.bind(pi,un)}}return un}function Ya(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function Bl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(A,X,ee){Ge.get(A.texture).__webglTexture=X,Ge.get(A.depthTexture).__webglTexture=ee;const q=Ge.get(A);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=ee===void 0,q.__autoAllocateDepthBuffer||mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,X){const ee=Ge.get(A);ee.__webglFramebuffer=X,ee.__useDefaultFramebuffer=X===void 0};const qa=H.createFramebuffer();this.setRenderTarget=function(A,X=0,ee=0){k=A,O=X,D=ee;let q=!0,$=null,Ee=!1,Ce=!1;if(A){const ze=Ge.get(A);if(ze.__useDefaultFramebuffer!==void 0)Ye.bindFramebuffer(H.FRAMEBUFFER,null),q=!1;else if(ze.__webglFramebuffer===void 0)F.setupRenderTarget(A);else if(ze.__hasExternalTextures)F.rebindTextures(A,Ge.get(A.texture).__webglTexture,Ge.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const He=A.depthTexture;if(ze.__boundDepthTexture!==He){if(He!==null&&Ge.has(He)&&(A.width!==He.image.width||A.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(A)}}const tt=A.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Ce=!0);const Je=Ge.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Je[X])?$=Je[X][ee]:$=Je[X],Ee=!0):A.samples>0&&F.useMultisampledRTT(A)===!1?$=Ge.get(A).__webglMultisampledFramebuffer:Array.isArray(Je)?$=Je[ee]:$=Je,z.copy(A.viewport),re.copy(A.scissor),te=A.scissorTest}else z.copy(U).multiplyScalar(V).floor(),re.copy(ie).multiplyScalar(V).floor(),te=De;if(ee!==0&&($=qa),Ye.bindFramebuffer(H.FRAMEBUFFER,$)&&q&&Ye.drawBuffers(A,$),Ye.viewport(z),Ye.scissor(re),Ye.setScissorTest(te),Ee){const ze=Ge.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+X,ze.__webglTexture,ee)}else if(Ce){const ze=Ge.get(A.texture),tt=X;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,ze.__webglTexture,ee,tt)}else if(A!==null&&ee!==0){const ze=Ge.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,ze.__webglTexture,ee)}R=-1},this.readRenderTargetPixels=function(A,X,ee,q,$,Ee,Ce){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=Ge.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ce!==void 0&&(Fe=Fe[Ce]),Fe){Ye.bindFramebuffer(H.FRAMEBUFFER,Fe);try{const ze=A.texture,tt=ze.format,Je=ze.type;if(!ft.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-q&&ee>=0&&ee<=A.height-$&&H.readPixels(X,ee,q,$,rt.convert(tt),rt.convert(Je),Ee)}finally{const ze=k!==null?Ge.get(k).__webglFramebuffer:null;Ye.bindFramebuffer(H.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(A,X,ee,q,$,Ee,Ce){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=Ge.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ce!==void 0&&(Fe=Fe[Ce]),Fe){const ze=A.texture,tt=ze.format,Je=ze.type;if(!ft.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=A.width-q&&ee>=0&&ee<=A.height-$){Ye.bindFramebuffer(H.FRAMEBUFFER,Fe);const He=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,He),H.bufferData(H.PIXEL_PACK_BUFFER,Ee.byteLength,H.STREAM_READ),H.readPixels(X,ee,q,$,rt.convert(tt),rt.convert(Je),0);const xt=k!==null?Ge.get(k).__webglFramebuffer:null;Ye.bindFramebuffer(H.FRAMEBUFFER,xt);const at=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await R_(H,at,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,He),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Ee),H.deleteBuffer(He),H.deleteSync(at),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,X=null,ee=0){A.isTexture!==!0&&(Us("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,A=arguments[1]);const q=Math.pow(2,-ee),$=Math.floor(A.image.width*q),Ee=Math.floor(A.image.height*q),Ce=X!==null?X.x:0,Fe=X!==null?X.y:0;F.setTexture2D(A,0),H.copyTexSubImage2D(H.TEXTURE_2D,ee,0,0,Ce,Fe,$,Ee),Ye.unbindTexture()};const Ka=H.createFramebuffer(),Za=H.createFramebuffer();this.copyTextureToTexture=function(A,X,ee=null,q=null,$=0,Ee=null){A.isTexture!==!0&&(Us("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,A=arguments[1],X=arguments[2],Ee=arguments[3]||0,ee=null),Ee===null&&($!==0?(Us("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ee=$,$=0):Ee=0);let Ce,Fe,ze,tt,Je,He,xt,at,Ht;const kt=A.isCompressedTexture?A.mipmaps[Ee]:A.image;if(ee!==null)Ce=ee.max.x-ee.min.x,Fe=ee.max.y-ee.min.y,ze=ee.isBox3?ee.max.z-ee.min.z:1,tt=ee.min.x,Je=ee.min.y,He=ee.isBox3?ee.min.z:0;else{const en=Math.pow(2,-$);Ce=Math.floor(kt.width*en),Fe=Math.floor(kt.height*en),A.isDataArrayTexture?ze=kt.depth:A.isData3DTexture?ze=Math.floor(kt.depth*en):ze=1,tt=0,Je=0,He=0}q!==null?(xt=q.x,at=q.y,Ht=q.z):(xt=0,at=0,Ht=0);const _t=rt.convert(X.format),qe=rt.convert(X.type);let Vt;X.isData3DTexture?(F.setTexture3D(X,0),Vt=H.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(F.setTexture2DArray(X,0),Vt=H.TEXTURE_2D_ARRAY):(F.setTexture2D(X,0),Vt=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,X.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,X.unpackAlignment);const gt=H.getParameter(H.UNPACK_ROW_LENGTH),un=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Xi=H.getParameter(H.UNPACK_SKIP_PIXELS),yn=H.getParameter(H.UNPACK_SKIP_ROWS),Mi=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,kt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,kt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,tt),H.pixelStorei(H.UNPACK_SKIP_ROWS,Je),H.pixelStorei(H.UNPACK_SKIP_IMAGES,He);const Nt=A.isDataArrayTexture||A.isData3DTexture,dn=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){const en=Ge.get(A),on=Ge.get(X),tn=Ge.get(en.__renderTarget),Et=Ge.get(on.__renderTarget);Ye.bindFramebuffer(H.READ_FRAMEBUFFER,tn.__webglFramebuffer),Ye.bindFramebuffer(H.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let pi=0;pi<ze;pi++)Nt&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ge.get(A).__webglTexture,$,He+pi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ge.get(X).__webglTexture,Ee,Ht+pi)),H.blitFramebuffer(tt,Je,Ce,Fe,xt,at,Ce,Fe,H.DEPTH_BUFFER_BIT,H.NEAREST);Ye.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if($!==0||A.isRenderTargetTexture||Ge.has(A)){const en=Ge.get(A),on=Ge.get(X);Ye.bindFramebuffer(H.READ_FRAMEBUFFER,Ka),Ye.bindFramebuffer(H.DRAW_FRAMEBUFFER,Za);for(let tn=0;tn<ze;tn++)Nt?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,en.__webglTexture,$,He+tn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,en.__webglTexture,$),dn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,on.__webglTexture,Ee,Ht+tn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,on.__webglTexture,Ee),$!==0?H.blitFramebuffer(tt,Je,Ce,Fe,xt,at,Ce,Fe,H.COLOR_BUFFER_BIT,H.NEAREST):dn?H.copyTexSubImage3D(Vt,Ee,xt,at,Ht+tn,tt,Je,Ce,Fe):H.copyTexSubImage2D(Vt,Ee,xt,at,tt,Je,Ce,Fe);Ye.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else dn?A.isDataTexture||A.isData3DTexture?H.texSubImage3D(Vt,Ee,xt,at,Ht,Ce,Fe,ze,_t,qe,kt.data):X.isCompressedArrayTexture?H.compressedTexSubImage3D(Vt,Ee,xt,at,Ht,Ce,Fe,ze,_t,kt.data):H.texSubImage3D(Vt,Ee,xt,at,Ht,Ce,Fe,ze,_t,qe,kt):A.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Ee,xt,at,Ce,Fe,_t,qe,kt.data):A.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Ee,xt,at,kt.width,kt.height,_t,kt.data):H.texSubImage2D(H.TEXTURE_2D,Ee,xt,at,Ce,Fe,_t,qe,kt);H.pixelStorei(H.UNPACK_ROW_LENGTH,gt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,un),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Xi),H.pixelStorei(H.UNPACK_SKIP_ROWS,yn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Mi),Ee===0&&X.generateMipmaps&&H.generateMipmap(Vt),Ye.unbindTexture()},this.copyTextureToTexture3D=function(A,X,ee=null,q=null,$=0){return A.isTexture!==!0&&(Us("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ee=arguments[0]||null,q=arguments[1]||null,A=arguments[2],X=arguments[3],$=arguments[4]||0),Us('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,X,ee,q,$)},this.initRenderTarget=function(A){Ge.get(A).__webglFramebuffer===void 0&&F.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?F.setTextureCube(A,0):A.isData3DTexture?F.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?F.setTexture2DArray(A,0):F.setTexture2D(A,0),Ye.unbindTexture()},this.resetState=function(){O=0,D=0,k=null,Ye.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=wt._getDrawingBufferColorSpace(e),n.unpackColorSpace=wt._getUnpackColorSpace()}}function XM(){const s=it.useRef(null);return it.useEffect(()=>{const e=s.current;if(!e)return;const n=e.clientWidth||380,r=e.clientHeight||380,o=new ny,l=new Zn(45,n/r,.1,1e3);l.position.z=320;const u=new WM({alpha:!0,antialias:!0});u.setSize(n,r),u.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(u.domElement);const f=new La;o.add(f);const m=new tf(70,2),g=new Ia({color:16735758,wireframe:!0,transparent:!0,opacity:.35}),x=new Qn(m,g);f.add(x);const _=new Il(105,1.2,16,100),y=new Ia({color:16742953,transparent:!0,opacity:.65}),S=new Qn(_,y);S.rotation.x=Math.PI/3,f.add(S);const T=new Il(120,1,16,100),C=new Ia({color:16753920,transparent:!0,opacity:.45}),E=new Qn(T,C);E.rotation.y=Math.PI/4,E.rotation.x=Math.PI/6,f.add(E);const v=75,L=new fi,P=new Float32Array(v*3);for(let se=0;se<v;se++){const oe=Math.acos(-1+2*se/v),V=Math.sqrt(v*Math.PI)*oe,ce=95+(Math.random()*10-5);P[se*3]=ce*Math.cos(V)*Math.sin(oe),P[se*3+1]=ce*Math.sin(V)*Math.sin(oe),P[se*3+2]=ce*Math.cos(oe)}L.setAttribute("position",new di(P,3));const N=new xg({color:16735758,size:4,transparent:!0,opacity:.85}),G=new sy(L,N);f.add(G);let O=0,D=0,k=0,R=0;const b=se=>{const oe=e.getBoundingClientRect(),V=(se.clientX-oe.left)/oe.width-.5,ce=(se.clientY-oe.top)/oe.height-.5;k=V*.8,R=ce*.8};window.addEventListener("mousemove",b);let z,re=!0;const te=new IntersectionObserver(([se])=>{re=se.isIntersecting});te.observe(e);const ue=()=>{z=requestAnimationFrame(ue),re&&(O+=(k-O)*.05,D+=(R-D)*.05,f.rotation.y+=.005,f.rotation.x=D*.5,f.rotation.z=O*.5,x.rotation.y-=.003,S.rotation.z+=.008,E.rotation.y-=.006,u.render(o,l))};ue();const fe=()=>{if(!e)return;const se=e.clientWidth,oe=e.clientHeight;l.aspect=se/oe,l.updateProjectionMatrix(),u.setSize(se,oe)};return window.addEventListener("resize",fe),()=>{window.removeEventListener("mousemove",b),window.removeEventListener("resize",fe),cancelAnimationFrame(z),te.disconnect(),e&&u.domElement&&e.removeChild(u.domElement),u.dispose(),m.dispose(),g.dispose(),_.dispose(),y.dispose(),T.dispose(),C.dispose(),L.dispose(),N.dispose()}},[]),h.jsx("div",{ref:s,className:"relative w-full h-[320px] sm:h-[380px] flex items-center justify-center pointer-events-none"})}const $M=`
  @keyframes continuousGlitch1 {
    0% {
      clip-path: polygon(0 0, 0 0, 0 0, 0 0);
      transform: translate(0, 0);
      opacity: 0;
    }
    6% {
      clip-path: polygon(0 18%, 100% 18%, 100% 34%, 0 34%);
      transform: translate(-4px, -1px);
      opacity: 0.95;
    }
    10% {
      clip-path: polygon(0 44%, 100% 44%, 100% 56%, 0 56%);
      transform: translate(4px, 1px);
      opacity: 0.9;
    }
    14% {
      clip-path: polygon(0 0, 0 0, 0 0, 0 0);
      transform: translate(0, 0);
      opacity: 0;
    }
    38% {
      clip-path: polygon(0 0, 0 0, 0 0, 0 0);
      transform: translate(0, 0);
      opacity: 0;
    }
    42% {
      clip-path: polygon(0 66%, 100% 66%, 100% 84%, 0 84%);
      transform: translate(-5px, 0px);
      opacity: 0.95;
    }
    46% {
      clip-path: polygon(0 10%, 100% 10%, 100% 25%, 0 25%);
      transform: translate(3px, -1px);
      opacity: 0.85;
    }
    50% {
      clip-path: polygon(0 0, 0 0, 0 0, 0 0);
      transform: translate(0, 0);
      opacity: 0;
    }
    72% {
      clip-path: polygon(0 0, 0 0, 0 0, 0 0);
      transform: translate(0, 0);
      opacity: 0;
    }
    76% {
      clip-path: polygon(0 32%, 100% 32%, 100% 46%, 0 46%);
      transform: translate(-4px, 1px);
      opacity: 0.9;
    }
    80% {
      clip-path: polygon(0 76%, 100% 76%, 100% 90%, 0 90%);
      transform: translate(4px, -1px);
      opacity: 0.85;
    }
    84% {
      clip-path: polygon(0 0, 0 0, 0 0, 0 0);
      transform: translate(0, 0);
      opacity: 0;
    }
    100% {
      clip-path: polygon(0 0, 0 0, 0 0, 0 0);
      transform: translate(0, 0);
      opacity: 0;
    }
  }

  @keyframes continuousGlitch2 {
    0% {
      clip-path: polygon(0 0, 0 0, 0 0, 0 0);
      transform: translate(0, 0);
      opacity: 0;
    }
    18% {
      clip-path: polygon(0 0, 0 0, 0 0, 0 0);
      transform: translate(0, 0);
      opacity: 0;
    }
    22% {
      clip-path: polygon(0 52%, 100% 52%, 100% 70%, 0 70%);
      transform: translate(5px, 1px);
      opacity: 0.92;
    }
    26% {
      clip-path: polygon(0 14%, 100% 14%, 100% 28%, 0 28%);
      transform: translate(-4px, -1px);
      opacity: 0.85;
    }
    30% {
      clip-path: polygon(0 0, 0 0, 0 0, 0 0);
      transform: translate(0, 0);
      opacity: 0;
    }
    54% {
      clip-path: polygon(0 0, 0 0, 0 0, 0 0);
      transform: translate(0, 0);
      opacity: 0;
    }
    58% {
      clip-path: polygon(0 26%, 100% 26%, 100% 42%, 0 42%);
      transform: translate(5px, -1px);
      opacity: 0.9;
    }
    62% {
      clip-path: polygon(0 78%, 100% 78%, 100% 94%, 0 94%);
      transform: translate(-4px, 1px);
      opacity: 0.85;
    }
    66% {
      clip-path: polygon(0 0, 0 0, 0 0, 0 0);
      transform: translate(0, 0);
      opacity: 0;
    }
    90% {
      clip-path: polygon(0 0, 0 0, 0 0, 0 0);
      transform: translate(0, 0);
      opacity: 0;
    }
    93% {
      clip-path: polygon(0 38%, 100% 38%, 100% 54%, 0 54%);
      transform: translate(-5px, 0);
      opacity: 0.9;
    }
    97% {
      clip-path: polygon(0 0, 0 0, 0 0, 0 0);
      transform: translate(0, 0);
      opacity: 0;
    }
    100% {
      clip-path: polygon(0 0, 0 0, 0 0, 0 0);
      transform: translate(0, 0);
      opacity: 0;
    }
  }

  @keyframes continuousScanLine {
    0% {
      top: 15%;
      opacity: 0;
      transform: scaleX(0.3);
    }
    15% {
      opacity: 0.9;
      transform: scaleX(1.05);
    }
    30% {
      top: 85%;
      opacity: 0;
      transform: scaleX(0.5);
    }
    100% {
      top: 85%;
      opacity: 0;
    }
  }

  @keyframes microJitter {
    0%, 100% { transform: translate(0, 0); }
    12% { transform: translate(-1px, 0.5px); }
    14% { transform: translate(1.5px, -0.5px); }
    16% { transform: translate(0, 0); }
    58% { transform: translate(1px, -1px); }
    60% { transform: translate(-1px, 0.5px); }
    62% { transform: translate(0, 0); }
    86% { transform: translate(1px, 0.5px); }
    88% { transform: translate(0, 0); }
  }
`;function YM(){const s="Yogeswar S",[e,n]=it.useState("init"),[r,o]=it.useState(""),[l,u]=it.useState(!1);return it.useEffect(()=>{const f=setTimeout(()=>{n("typing")},500);return()=>clearTimeout(f)},[]),it.useEffect(()=>{if(e!=="typing")return;let f=0;const m=setInterval(()=>{f<=s.length?(o(s.slice(0,f)),f++):(clearInterval(m),n("ready"),u(!0))},85);return()=>clearInterval(m)},[e]),h.jsxs("section",{id:"home",className:"relative min-h-screen pt-24 sm:pt-28 pb-16 flex items-center justify-center overflow-hidden",children:[h.jsx("style",{children:$M}),h.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full",children:h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center",children:[h.jsxs("div",{className:"lg:col-span-7 flex flex-col items-start text-left z-10",children:[h.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-black/60 border border-[#FF5E0E]/40 font-mono text-xs text-[#FF7A29] mb-5 shadow-[0_0_15px_rgba(255,94,14,0.15)] select-none",children:[h.jsx("span",{className:"text-[#FF5E0E] font-bold",children:">"}),h.jsx("span",{className:"tracking-widest font-semibold",children:"INITIALIZING..."}),h.jsx("span",{className:"w-1.5 h-3 bg-[#FF5E0E] animate-pulse ml-0.5 inline-block"})]}),h.jsx("div",{className:"relative select-none mb-4 cursor-pointer group",children:h.jsxs("h1",{className:"font-display font-extrabold text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-[1.08] relative inline-block",style:{animation:l?"microJitter 2.8s infinite ease-in-out":"none"},children:[h.jsx("span",{className:"relative z-10",children:r||" "}),h.jsx("span",{className:"inline-block w-[3px] sm:w-[4px] h-[0.82em] bg-[#FF5E0E] ml-1.5 sm:ml-2 align-middle animate-[pulse_1s_infinite] shadow-[0_0_8px_#FF5E0E] relative z-10"}),l&&h.jsxs(h.Fragment,{children:[h.jsx("span",{"aria-hidden":"true",className:"absolute inset-0 text-[#FF5E0E] select-none pointer-events-none",style:{zIndex:12,filter:"drop-shadow(0 0 7px #FF5E0E)",animation:"continuousGlitch1 2.4s infinite linear"},children:r}),h.jsx("span",{"aria-hidden":"true",className:"absolute inset-0 text-[#FFAE5E] select-none pointer-events-none",style:{zIndex:13,filter:"drop-shadow(0 0 6px #FFAE5E)",animation:"continuousGlitch2 3.1s infinite linear"},children:r}),h.jsx("div",{className:"absolute left-[-12px] right-[-12px] h-[1.5px] bg-[#FF5E0E] pointer-events-none shadow-[0_0_10px_#FF5E0E]",style:{zIndex:14,animation:"continuousScanLine 3.6s infinite ease-in-out"}})]})]})}),h.jsx("div",{className:`transition-all duration-700 delay-100 ${l?"opacity-100 translate-y-0":"opacity-0 translate-y-3"}`,children:h.jsxs("h2",{className:"text-base sm:text-lg md:text-xl font-medium text-gray-200 mb-3 flex flex-wrap items-center gap-x-2.5 gap-y-1",children:[h.jsx("span",{className:"text-white font-semibold",children:"Cyber Security"}),h.jsx("span",{className:"text-[#FF5E0E]",children:"•"}),h.jsx("span",{className:"text-gray-200",children:"Website Designing & Building"}),h.jsx("span",{className:"text-[#FF5E0E]",children:"•"}),h.jsx("span",{className:"text-gray-300 font-medium",children:"Vibe Coding & Problem Solving"}),h.jsx("span",{className:"text-[#FF5E0E] font-mono font-bold animate-pulse",children:"_"})]})}),h.jsxs("div",{className:`transition-all duration-700 delay-200 ${l?"opacity-100 translate-y-0":"opacity-0 translate-y-3"}`,children:[h.jsxs("div",{className:"font-mono text-xs text-gray-400 tracking-wide mb-2 flex items-center gap-2",children:[h.jsx("span",{className:"text-gray-300 font-medium",children:"Student"}),h.jsx("span",{className:"text-[#FF5E0E]/60",children:"|"}),h.jsx("span",{className:"text-gray-300 font-medium",children:"Developer"}),h.jsx("span",{className:"text-[#FF5E0E]/60",children:"|"}),h.jsx("span",{className:"text-gray-300 font-medium",children:"Problem Solver"})]}),h.jsx("p",{className:"text-sm sm:text-base text-gray-400 leading-relaxed max-w-2xl mb-8 font-light",children:"Building secure & creative digital experiences. Motivated Computer Science & Engineering (Cyber Security) student with a passion for designing and building modern web experiences through rapid vibe coding and rigorous problem-solving foundations."})]}),h.jsxs("div",{className:`flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto transition-all duration-700 delay-300 ${l?"opacity-100 translate-y-0":"opacity-0 translate-y-3"}`,children:[h.jsxs("a",{href:"#project",className:"group inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-[#FF5E0E] text-black font-semibold text-sm transition-all duration-300 hover:bg-[#FF7A29] hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(255,94,14,0.45)] interactive-element w-full sm:w-auto justify-center",children:[h.jsx("span",{children:"View Projects"}),h.jsx("span",{className:"w-6 h-6 rounded-full bg-black/15 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1",children:h.jsx(Ex,{size:14,strokeWidth:2.5})})]}),h.jsxs("a",{href:wn.resumePdf,download:"Yogeswar_Resume.pdf",className:"inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-[#FF5E0E]/50 text-white font-semibold text-sm transition-all duration-200 group interactive-element w-full sm:w-auto",children:[h.jsx(Ua,{className:"w-4 h-4 text-[#FF5E0E] group-hover:-translate-y-0.5 transition-transform"}),h.jsx("span",{children:"Download Resume"})]}),h.jsxs("a",{href:"#contact",className:"inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-gray-300 hover:text-white text-sm font-medium transition-colors interactive-element w-full sm:w-auto group",children:[h.jsx(Bm,{className:"w-4 h-4 text-[#FF5E0E] group-hover:scale-110 transition-transform"}),h.jsx("span",{children:"Contact Me"})]})]}),h.jsxs("div",{className:`grid grid-cols-3 gap-4 p-4 rounded-2xl bg-black/40 border border-white/[0.08] backdrop-blur-md w-full max-w-lg shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-700 delay-400 ${l?"opacity-100 translate-y-0":"opacity-0 translate-y-3"}`,children:[h.jsxs("div",{children:[h.jsx("div",{className:"font-display font-bold text-xl sm:text-2xl text-white",children:"74%"}),h.jsx("div",{className:"font-mono text-[11px] text-gray-400",children:"Diploma 1st Class"})]}),h.jsxs("div",{className:"border-l border-white/[0.08] pl-4",children:[h.jsx("div",{className:"font-display font-bold text-xl sm:text-2xl text-[#FF7A29]",children:"100%"}),h.jsx("div",{className:"font-mono text-[11px] text-gray-400",children:"Internship Attendance"})]}),h.jsxs("div",{className:"border-l border-white/[0.08] pl-4",children:[h.jsx("div",{className:"font-display font-bold text-xl sm:text-2xl text-white",children:"8+"}),h.jsx("div",{className:"font-mono text-[11px] text-gray-400",children:"Verified Certs & Skills"})]})]})]}),h.jsxs("div",{className:"lg:col-span-5 flex flex-col items-center justify-center relative",children:[h.jsx("div",{className:"absolute -top-14 inset-x-0 flex items-center justify-center opacity-30 pointer-events-none",children:h.jsx(XM,{})}),h.jsx("div",{className:"relative z-20 w-full flex justify-center",children:h.jsx(Ov,{photoUrl:"/assets/new_pic.png",isContinuousGlitch:!0})})]})]})})]})}const qM=[{label:"Website Designing & Building",icon:Gd,desc:"Responsive, aesthetic, modern web interfaces & layouts"},{label:"Vibe Coding & Prototyping",icon:Xd,desc:"Fast AI-assisted development with engineering discipline"},{label:"Problem Solving & Logic",icon:jd,desc:"Algorithmic thinking, data structures & clean debugging"},{label:"Cyber Security & Malware",icon:jm,desc:"Threat intelligence, malware summarization & defense"},{label:"Applied AI & ML",icon:km,desc:"Smart log parsing, heuristic analysis & data modeling"}];function KM(){return h.jsx("section",{id:"about",className:"py-24 relative border-t border-white/[0.05]",children:h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[h.jsxs("div",{className:"flex flex-col items-start mb-16",children:[h.jsxs("div",{className:"font-mono text-xs font-semibold text-[#FF5E0E] uppercase tracking-widest mb-2 flex items-center gap-2",children:[h.jsx("span",{className:"w-2 h-2 rounded-full bg-[#FF5E0E]"}),h.jsx("span",{children:"01 // About Me"})]}),h.jsxs("h2",{className:"font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight",children:["From Foundations to ",h.jsx("span",{className:"text-[#FF5E0E]",children:"Cyber Security & Web Craft"})]}),h.jsx("p",{className:"mt-3 text-sm sm:text-base text-gray-400 max-w-2xl",children:"A continuous trajectory rooted in engineering fundamentals, driven by a passion for modern website design, rapid vibe coding, and resilient defensive systems."})]}),h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-10 items-start",children:[h.jsxs("div",{className:"lg:col-span-7 p-6 sm:p-8 rounded-2xl glass-panel relative overflow-hidden",children:[h.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-[#FF5E0E]/10 rounded-full blur-2xl pointer-events-none"}),h.jsxs("div",{className:"flex items-center gap-2 font-mono text-xs text-gray-400 mb-6 pb-4 border-b border-white/[0.06]",children:[h.jsx(Wd,{className:"w-4 h-4 text-[#FF5E0E]"}),h.jsx("span",{children:"DEVELOPER_PROFILE_OBJECTIVE.md"})]}),h.jsxs("div",{className:"space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed font-light",children:[h.jsxs("p",{children:["My journey into technology began with my ",h.jsx("strong",{className:"text-white font-semibold",children:"Diploma in Computer Engineering"})," (74% First Class with Distinction), where I developed a robust foundational mastery of programming, web design, relational databases, hardware interfacing, and computer networks."]}),h.jsxs("p",{children:["Today, as a ",h.jsx("strong",{className:"text-white font-semibold",children:"B.E. CSE (Cyber Security)"})," student at Velammal College of Engineering & Technology, I combine security engineering with my deep interest in ",h.jsx("strong",{className:"text-[#FF7A29] font-medium",children:"website designing and building"}),"."]}),h.jsxs("p",{children:["I actively embrace modern ",h.jsx("strong",{className:"text-white font-semibold",children:'"vibe coding"'}),"—leveraging AI-accelerated workflows for lightning-fast prototyping—while keeping every solution anchored in deep ",h.jsx("strong",{className:"text-white font-semibold",children:"problem-solving knowledge"}),", core computer science logic, and clean code principles."]}),h.jsxs("p",{children:["From authoring the ",h.jsx("strong",{className:"text-[#FF9436] font-medium",children:"Intelligent Malware Report Summarizer"})," to hardware IoT telemetry, I bring disciplined consistency—maintaining 100% attendance during my Elysium Technologies internship—to drive every initiative from concept to completion."]})]}),h.jsx("div",{className:"mt-8 pt-6 border-t border-white/[0.06] flex flex-wrap items-center gap-2.5",children:["Website Designing","Vibe Coding","Problem Solving","Cyber Security","Malware Summarizer","Python & C","Modern UI/UX","Networks & Linux"].map(s=>h.jsxs("span",{className:"px-3 py-1 rounded-md text-xs font-mono bg-white/[0.03] border border-white/[0.08] text-gray-300",children:["#",s]},s))})]}),h.jsx("div",{className:"lg:col-span-5 flex flex-col gap-3.5",children:qM.map(s=>{const e=s.icon;return h.jsxs("div",{className:"p-4 rounded-xl glass-panel glass-panel-hover flex items-start gap-4 group interactive-element",children:[h.jsx("div",{className:"w-10 h-10 rounded-lg bg-[#FF5E0E]/10 border border-[#FF5E0E]/30 flex items-center justify-center text-[#FF5E0E] shrink-0 group-hover:scale-110 transition-transform",children:h.jsx(e,{className:"w-5 h-5"})}),h.jsxs("div",{children:[h.jsxs("h3",{className:"font-display font-semibold text-sm sm:text-base text-white group-hover:text-[#FF5E0E] transition-colors flex items-center gap-1",children:[h.jsx("span",{children:s.label}),h.jsx(Mx,{className:"w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity"})]}),h.jsx("p",{className:"font-mono text-xs text-gray-400 mt-0.5",children:s.desc})]})]},s.label)})})]})]})})}const ZM={Layers:zm,ShieldCheck:xv,Cpu:km,Rocket:fv};function QM(){const[s,e]=it.useState(el[0].id),n=el.find(r=>r.id===s)||el[0];return h.jsx("section",{id:"journey",className:"py-24 relative border-t border-white/[0.05]",children:h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[h.jsxs("div",{className:"flex flex-col items-start mb-16",children:[h.jsxs("div",{className:"font-mono text-xs font-semibold text-[#FF5E0E] uppercase tracking-widest mb-2 flex items-center gap-2",children:[h.jsx("span",{className:"w-2 h-2 rounded-full bg-[#FF5E0E]"}),h.jsx("span",{children:"02 // The Trajectory"})]}),h.jsxs("h2",{className:"font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight",children:["Where My ",h.jsx("span",{className:"text-[#FF5E0E]",children:"Journey Started"})]}),h.jsx("p",{className:"mt-3 text-sm sm:text-base text-gray-400 max-w-2xl",children:"My Diploma in Computer Engineering is the foundational bedrock that led toward advanced Cyber Security specialization."})]}),h.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8",children:el.map(r=>{const o=ZM[r.icon]||zm,l=r.id===s;return h.jsxs("div",{onClick:()=>e(r.id),className:`p-5 rounded-2xl cursor-pointer transition-all duration-300 relative overflow-hidden interactive-element ${l?"bg-[#101420] border-2 border-[#FF5E0E] shadow-[0_0_30px_rgba(255,94,14,0.25)] -translate-y-1":"glass-panel hover:border-white/20"}`,children:[h.jsxs("div",{className:"flex items-center justify-between mb-4",children:[h.jsxs("span",{className:`font-mono text-xs font-bold px-2 py-1 rounded ${l?"bg-[#FF5E0E] text-black":"bg-white/5 text-gray-400"}`,children:["STAGE ",r.id]}),h.jsx("div",{className:`w-8 h-8 rounded-lg flex items-center justify-center ${l?"text-[#FF5E0E] bg-[#FF5E0E]/20":"text-gray-400 bg-white/5"}`,children:h.jsx(o,{className:"w-4 h-4"})})]}),h.jsx("h3",{className:`font-display font-bold text-base mb-1 ${l?"text-white":"text-gray-200"}`,children:r.title}),h.jsx("p",{className:"font-mono text-xs text-gray-400 mb-2 truncate",children:r.subtitle}),h.jsx("div",{className:"text-[11px] text-[#FF9436] font-mono",children:r.period})]},r.id)})}),h.jsxs("div",{className:"p-6 sm:p-8 rounded-2xl glass-panel border border-[#FF5E0E]/30 relative overflow-hidden transition-all duration-300",children:[h.jsx("div",{className:"absolute top-0 right-0 w-64 h-64 bg-[#FF5E0E]/10 rounded-full blur-3xl pointer-events-none"}),h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-center",children:[h.jsxs("div",{className:"lg:col-span-8",children:[h.jsxs("div",{className:"flex items-center gap-2 mb-2 font-mono text-xs text-[#FF7A29]",children:[h.jsxs("span",{children:["STAGE ",n.id]}),h.jsx("span",{children:"•"}),h.jsx("span",{children:n.institution})]}),h.jsx("h3",{className:"font-display font-bold text-2xl sm:text-3xl text-white mb-2",children:n.subtitle}),h.jsx("div",{className:"inline-block px-3 py-1 rounded-md bg-[#FF5E0E]/15 border border-[#FF5E0E]/30 text-[#FF9436] font-mono text-xs font-semibold mb-4",children:n.grade}),h.jsx("p",{className:"text-sm sm:text-base text-gray-300 leading-relaxed max-w-3xl mb-6",children:n.description}),h.jsxs("div",{children:[h.jsx("div",{className:"text-xs font-mono uppercase text-gray-400 mb-2",children:"Key Competencies Acquired:"}),h.jsx("div",{className:"flex flex-wrap gap-2",children:n.keySkills.map(r=>h.jsxs("span",{className:"px-3 py-1.5 rounded-lg bg-black/40 border border-white/10 text-xs font-mono text-white flex items-center gap-1.5",children:[h.jsx(Oa,{className:"w-3.5 h-3.5 text-[#FF5E0E]"}),r]},r))})]})]}),h.jsxs("div",{className:"lg:col-span-4 p-5 rounded-xl bg-black/50 border border-white/[0.08] font-mono text-xs text-gray-300 space-y-3",children:[h.jsx("div",{className:"text-[#FF5E0E] font-bold pb-2 border-b border-white/10",children:"PATHWAY PROGRESSION"}),h.jsxs("div",{className:"space-y-2",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("span",{className:"text-[#FF5E0E]",children:"01"}),h.jsx("span",{children:"Diploma Foundations (74%)"})]}),h.jsx("div",{className:"text-gray-500 pl-4",children:"↓ Technical Bedrock"}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("span",{className:"text-[#FF5E0E]",children:"02"}),h.jsx("span",{children:"B.E. CSE Cyber Security"})]}),h.jsx("div",{className:"text-gray-500 pl-4",children:"↓ Practical Defense"}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("span",{className:"text-[#FF5E0E]",children:"03"}),h.jsx("span",{children:"Applied ML & Weather IoT Project"})]}),h.jsx("div",{className:"text-gray-500 pl-4",children:"↓ Enterprise Readiness"}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("span",{className:"text-[#FF5E0E]",children:"04"}),h.jsx("span",{children:"Future Security Engineering"})]})]})]})]})]})]})})}const JM={Code2:jd,Globe:Yx,Database:Gx,Shield:jm,Terminal:Wd,Cloud:Ox,HardDrive:Qx};function ew(){const[s,e]=it.useState(null);return h.jsx("section",{id:"foundation",className:"py-24 relative border-t border-white/[0.05]",children:h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[h.jsxs("div",{className:"flex flex-col items-start mb-16",children:[h.jsxs("div",{className:"font-mono text-xs font-semibold text-[#FF5E0E] uppercase tracking-widest mb-2 flex items-center gap-2",children:[h.jsx("span",{className:"w-2 h-2 rounded-full bg-[#FF5E0E]"}),h.jsx("span",{children:"03 // Core Architecture"})]}),h.jsxs("h2",{className:"font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight",children:["My Technical ",h.jsx("span",{className:"text-[#FF5E0E]",children:"Foundation"})]}),h.jsx("p",{className:"mt-3 text-sm sm:text-base text-gray-400 max-w-2xl",children:"The comprehensive technical competencies established during my Diploma in Computer Engineering that empower my cybersecurity focus."})]}),h.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5",children:Cv.map(n=>{const r=JM[n.icon]||jd;return n.id,h.jsxs("div",{onMouseEnter:()=>e(n.id),onMouseLeave:()=>e(null),className:"p-6 rounded-2xl glass-panel glass-panel-hover transition-all duration-300 relative group interactive-element flex flex-col justify-between",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between mb-4",children:[h.jsx("div",{className:"w-12 h-12 rounded-xl bg-[#FF5E0E]/10 border border-[#FF5E0E]/30 flex items-center justify-center text-[#FF5E0E] group-hover:bg-[#FF5E0E] group-hover:text-black transition-all duration-300",children:h.jsx(r,{className:"w-6 h-6"})}),h.jsx("span",{className:"font-mono text-[10px] text-gray-500 group-hover:text-[#FF7A29] transition-colors",children:"FOUNDATION"})]}),h.jsx("h3",{className:"font-display font-bold text-lg text-white mb-2 group-hover:text-[#FF5E0E] transition-colors",children:n.title}),h.jsx("p",{className:"text-xs text-gray-400 leading-relaxed mb-6 font-light",children:n.description})]}),h.jsx("div",{className:"pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5",children:n.skills.map(o=>h.jsx("span",{className:"px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-gray-300 group-hover:border-[#FF5E0E]/30 group-hover:text-white transition-colors",children:o},o))})]},n.id)})})]})})}function tw(){const[s,e]=it.useState(tl[0].id),n=tl.find(r=>r.id===s)||tl[0];return h.jsx("section",{id:"skills",className:"py-24 relative border-t border-white/[0.05]",children:h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[h.jsxs("div",{className:"flex flex-col items-start mb-16",children:[h.jsxs("div",{className:"font-mono text-xs font-semibold text-[#FF5E0E] uppercase tracking-widest mb-2 flex items-center gap-2",children:[h.jsx("span",{className:"w-2 h-2 rounded-full bg-[#FF5E0E]"}),h.jsx("span",{children:"04 // Technical Competencies"})]}),h.jsxs("h2",{className:"font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight",children:["Technology ",h.jsx("span",{className:"text-[#FF5E0E]",children:"Orbit"})]}),h.jsx("p",{className:"mt-3 text-sm sm:text-base text-gray-400 max-w-2xl",children:"An interactive multi-dimensional constellation of skills rooted in my computer engineering foundation."})]}),h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-center",children:[h.jsxs("div",{className:"lg:col-span-7 flex flex-col items-center",children:[h.jsxs("div",{className:"mb-8 p-4 rounded-2xl bg-gradient-to-r from-[#FF5E0E]/20 via-[#FF7A29]/10 to-transparent border border-[#FF5E0E]/40 flex items-center gap-3 w-full max-w-md shadow-[0_0_30px_rgba(255,94,14,0.15)]",children:[h.jsx("div",{className:"w-10 h-10 rounded-xl bg-[#FF5E0E] text-black font-mono font-bold flex items-center justify-center shrink-0",children:"YS"}),h.jsxs("div",{children:[h.jsx("div",{className:"font-mono text-xs text-[#FF7A29] font-bold",children:"ORBITAL SYSTEM CORE"}),h.jsx("div",{className:"font-display font-bold text-white text-base",children:"Yogeswar S • CSE (Cyber Security)"})]})]}),h.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3 w-full",children:tl.map(r=>{const o=r.id===s;return h.jsxs("button",{onClick:()=>e(r.id),className:`p-4 rounded-xl text-left transition-all duration-300 relative overflow-hidden interactive-element ${o?"bg-[#121622] border-2 border-[#FF5E0E] shadow-[0_0_20px_rgba(255,94,14,0.3)] -translate-y-1":"glass-panel hover:border-white/20"}`,children:[h.jsx("div",{className:"font-mono text-[10px] text-gray-400 uppercase mb-1",children:r.category}),h.jsx("div",{className:`font-display font-bold text-sm ${o?"text-[#FF7A29]":"text-white"}`,children:r.name})]},r.id)})})]}),h.jsxs("div",{className:"lg:col-span-5 p-6 sm:p-8 rounded-2xl glass-panel border border-[#FF5E0E]/30 relative overflow-hidden",children:[h.jsx("div",{className:"absolute top-0 right-0 w-48 h-48 bg-[#FF5E0E]/10 rounded-full blur-2xl pointer-events-none"}),h.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-white/10 mb-6",children:[h.jsxs("div",{children:[h.jsx("span",{className:"font-mono text-[11px] text-[#FF9436] uppercase tracking-wider",children:"ACTIVE ORBIT"}),h.jsx("h3",{className:"font-display font-bold text-2xl text-white",children:n.name})]}),h.jsxs("span",{className:"font-mono text-xs text-gray-400 bg-white/5 px-2.5 py-1 rounded",children:[n.skills.length," Core Skills"]})]}),h.jsx("div",{className:"space-y-3",children:n.skills.map((r,o)=>h.jsxs("div",{className:"p-3.5 rounded-xl bg-black/40 border border-white/[0.08] flex items-center justify-between group hover:border-[#FF5E0E]/40 transition-colors",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsxs("div",{className:"w-7 h-7 rounded-lg bg-[#FF5E0E]/10 border border-[#FF5E0E]/30 flex items-center justify-center text-[#FF5E0E] font-mono text-xs",children:["0",o+1]}),h.jsx("span",{className:"font-mono text-sm text-white font-medium",children:r})]}),h.jsx(Oa,{className:"w-4 h-4 text-[#FF5E0E] opacity-75"})]},r))}),h.jsxs("div",{className:"mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-2 font-mono text-[11px] text-gray-400",children:[h.jsx(yv,{className:"w-3.5 h-3.5 text-[#FF5E0E]"}),h.jsx("span",{children:"Competencies verified via Academic Resume & Practical Lab Coursework"})]})]})]})]})})}function nw({onOpenCert:s}){return h.jsx("section",{id:"experience",className:"py-24 relative border-t border-white/[0.05]",children:h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[h.jsxs("div",{className:"flex flex-col items-start mb-16",children:[h.jsxs("div",{className:"font-mono text-xs font-semibold text-[#FF5E0E] uppercase tracking-widest mb-2 flex items-center gap-2",children:[h.jsx("span",{className:"w-2 h-2 rounded-full bg-[#FF5E0E]"}),h.jsx("span",{children:"05 // Industry Experience"})]}),h.jsxs("h2",{className:"font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight",children:["Internship ",h.jsx("span",{className:"text-[#FF5E0E]",children:"Timeline"})]}),h.jsx("p",{className:"mt-3 text-sm sm:text-base text-gray-400 max-w-2xl",children:"Practical exposure and hands-on industry training in cyber security fundamentals and applied machine learning."})]}),h.jsxs("div",{className:"p-6 sm:p-10 rounded-2xl glass-panel border border-white/10 hover:border-[#FF5E0E]/40 transition-all duration-300 relative overflow-hidden",children:[h.jsx("div",{className:"absolute top-0 right-0 w-80 h-80 bg-[#FF5E0E]/10 rounded-full blur-3xl pointer-events-none"}),h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",children:[h.jsxs("div",{className:"lg:col-span-7",children:[h.jsxs("div",{className:"flex flex-wrap items-center gap-2.5 mb-4",children:[h.jsx("span",{className:"px-3 py-1 rounded-full bg-[#FF5E0E]/15 border border-[#FF5E0E]/30 text-[#FF9436] font-mono text-xs font-semibold",children:"INTERNSHIP"}),h.jsxs("span",{className:"px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-semibold flex items-center gap-1.5",children:[h.jsx(Oa,{className:"w-3.5 h-3.5"}),"100% Attendance Maintained"]})]}),h.jsx("h3",{className:"font-display font-bold text-2xl sm:text-3xl text-white mb-2",children:kr.role}),h.jsxs("div",{className:"flex flex-wrap items-center gap-4 text-xs font-mono text-gray-300 mb-6",children:[h.jsxs("div",{className:"flex items-center gap-1.5 text-[#FF7A29]",children:[h.jsx(Im,{className:"w-4 h-4"}),h.jsx("span",{children:kr.company})]}),h.jsxs("div",{className:"flex items-center gap-1.5 text-gray-400",children:[h.jsx(Um,{className:"w-4 h-4"}),h.jsx("span",{children:kr.period})]}),h.jsxs("div",{className:"flex items-center gap-1.5 text-gray-400",children:[h.jsx(Hm,{className:"w-4 h-4"}),h.jsx("span",{children:kr.location})]})]}),h.jsx("div",{className:"space-y-3 mb-8",children:kr.highlights.map((e,n)=>h.jsxs("div",{className:"flex items-start gap-3 text-sm text-gray-300 leading-relaxed",children:[h.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#FF5E0E] mt-2 shrink-0"}),h.jsx("span",{children:e})]},n))}),h.jsx("div",{className:"pt-4 border-t border-white/[0.06] flex items-center justify-between",children:h.jsx("div",{className:"font-mono text-xs text-gray-400 truncate max-w-sm",children:kr.verification})})]}),h.jsxs("div",{className:"lg:col-span-5 flex flex-col items-center justify-center",children:[h.jsxs("div",{onClick:()=>s&&s("elysium-internship"),className:"group cursor-pointer relative rounded-xl overflow-hidden border border-white/15 bg-black/60 p-2 hover:border-[#FF5E0E] transition-all duration-300 shadow-xl interactive-element",children:[h.jsx("img",{src:kr.certificateImage,alt:"Elysium Technologies Internship Certificate",className:"w-full h-auto rounded-lg object-contain transition-transform duration-300 group-hover:scale-[1.02]"}),h.jsxs("div",{className:"absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-mono text-xs font-bold backdrop-blur-xs",children:[h.jsx(Dm,{className:"w-4 h-4 text-[#FF5E0E]"}),h.jsx("span",{children:"Click to Expand Certificate"})]})]}),h.jsx("span",{className:"font-mono text-[11px] text-gray-400 mt-3 text-center",children:"Visual Evidence: Official Elysium Technologies Certificate (Ref: EGC: ETPL: 2025-2026)"})]})]})]})]})})}function iw(){const[s,e]=it.useState(nl[0].id),[n,r]=it.useState("summary"),[o,l]=it.useState(34),[u,f]=it.useState(68),m=nl.find(x=>x.id===s)||nl[0],g=o>42||u>80;return h.jsx("section",{id:"project",className:"py-24 relative border-t border-white/[0.05]",children:h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[h.jsxs("div",{className:"flex flex-col items-start mb-12",children:[h.jsxs("div",{className:"font-mono text-xs font-semibold text-[#FF5E0E] uppercase tracking-widest mb-2 flex items-center gap-2",children:[h.jsx("span",{className:"w-2 h-2 rounded-full bg-[#FF5E0E]"}),h.jsx("span",{children:"06 // Engineering Projects"})]}),h.jsxs("h2",{className:"font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight",children:["Featured ",h.jsx("span",{className:"text-[#FF5E0E]",children:"Projects"})]}),h.jsx("p",{className:"mt-3 text-sm sm:text-base text-gray-400 max-w-2xl",children:"Practical security research and capstone engineering combining cyber defense, intelligent report summarization, and embedded IoT systems."})]}),h.jsx("div",{className:"flex flex-wrap gap-3 mb-10",children:nl.map(x=>{const _=x.id===s;return h.jsxs("button",{onClick:()=>e(x.id),className:`flex items-center gap-2.5 px-5 py-3 rounded-xl font-mono text-xs transition-all duration-300 interactive-element ${_?"bg-[#FF5E0E] text-black font-bold shadow-[0_0_25px_rgba(255,94,14,0.35)] -translate-y-0.5":"glass-panel text-gray-300 hover:text-white hover:border-white/20"}`,children:[x.id==="malware-summarizer"?h.jsx(Vm,{className:"w-4 h-4"}):h.jsx(uv,{className:"w-4 h-4"}),h.jsx("span",{children:x.title}),h.jsx("span",{className:`text-[10px] px-2 py-0.5 rounded-full ${_?"bg-black/20 text-black":"bg-white/10 text-[#FF9436]"}`,children:x.badge})]},x.id)})}),h.jsxs("div",{className:"p-6 sm:p-10 rounded-2xl glass-panel border border-[#FF5E0E]/30 relative overflow-hidden",children:[h.jsx("div",{className:"absolute top-0 right-0 w-96 h-96 bg-[#FF5E0E]/10 rounded-full blur-3xl pointer-events-none"}),h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-10 items-start",children:[h.jsxs("div",{className:"lg:col-span-7",children:[h.jsxs("div",{className:"flex flex-wrap items-center gap-2.5 mb-3",children:[h.jsx("span",{className:"px-3 py-1 rounded-md bg-[#FF5E0E]/15 border border-[#FF5E0E]/30 text-[#FF9436] font-mono text-xs font-semibold",children:m.category}),h.jsx("span",{className:"font-mono text-xs text-gray-400",children:m.period})]}),h.jsx("h3",{className:"font-display font-bold text-2xl sm:text-4xl text-white mb-4 leading-tight",children:m.title}),h.jsx("p",{className:"text-sm sm:text-base text-gray-300 leading-relaxed mb-6 font-light",children:m.summary}),h.jsx("div",{className:"space-y-2.5 mb-8",children:m.highlights.map((x,_)=>h.jsxs("div",{className:"flex items-start gap-3 text-xs sm:text-sm text-gray-300 leading-relaxed",children:[h.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#FF5E0E] mt-2 shrink-0"}),h.jsx("span",{children:x})]},_))}),h.jsxs("div",{className:"mb-8",children:[h.jsx("div",{className:"font-mono text-xs text-gray-400 uppercase tracking-wider mb-3",children:"SYSTEM ARCHITECTURAL PIPELINE"}),h.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-5 gap-2",children:m.workflowSteps.map(x=>h.jsxs("div",{className:"p-2.5 rounded-lg bg-black/40 border border-white/10 flex flex-col justify-between",children:[h.jsx("div",{className:"font-mono text-[10px] text-[#FF5E0E] font-bold",children:x.step}),h.jsx("div",{className:"font-display font-semibold text-xs text-white mt-1",children:x.label})]},x.step))})]}),h.jsxs("div",{children:[h.jsx("div",{className:"font-mono text-xs text-gray-400 uppercase tracking-wider mb-2",children:"TECHNOLOGIES & TOOLS"}),h.jsx("div",{className:"flex flex-wrap gap-2",children:m.techStack.map(x=>h.jsx("span",{className:"px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 font-mono text-xs text-white",children:x},x))})]})]}),h.jsxs("div",{className:"lg:col-span-5",children:[m.id==="malware-summarizer"&&h.jsxs("div",{className:"p-6 rounded-xl bg-black/80 border border-white/15 relative shadow-2xl",children:[h.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-white/10 mb-4 font-mono text-xs",children:[h.jsxs("div",{className:"flex items-center gap-2 text-white font-bold",children:[h.jsx(Nx,{className:"w-4 h-4 text-[#FF5E0E]"}),h.jsx("span",{children:"MALWARE REPORT ANALYZER"})]}),h.jsxs("span",{className:"text-[10px] text-emerald-400 font-mono flex items-center gap-1",children:[h.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"}),"ANALYZER ONLINE"]})]}),h.jsxs("div",{className:"flex gap-2 mb-4",children:[h.jsx("button",{onClick:()=>r("summary"),className:`flex-1 py-1.5 px-3 rounded-lg font-mono text-[11px] transition-all ${n==="summary"?"bg-[#FF5E0E] text-black font-bold shadow-md":"bg-white/5 text-gray-400 hover:text-white"}`,children:"AI Executive Summary"}),h.jsx("button",{onClick:()=>r("raw"),className:`flex-1 py-1.5 px-3 rounded-lg font-mono text-[11px] transition-all ${n==="raw"?"bg-[#FF5E0E] text-black font-bold shadow-md":"bg-white/5 text-gray-400 hover:text-white"}`,children:"Raw Sandbox Telemetry"})]}),n==="summary"?h.jsxs("div",{className:"space-y-3 font-mono text-xs",children:[h.jsxs("div",{className:"p-3 rounded-lg bg-red-950/30 border border-red-500/30",children:[h.jsxs("div",{className:"flex justify-between items-center text-red-400 font-bold mb-1",children:[h.jsx("span",{children:"THREAT SCORE: 9.4 / 10"}),h.jsx("span",{className:"text-[10px] bg-red-500/20 px-2 py-0.5 rounded text-red-300",children:"CRITICAL"})]}),h.jsxs("div",{className:"text-gray-300 text-[11px]",children:[h.jsx("strong",{children:"Classification:"})," InfoStealer / Dynamic Injection Payload"]})]}),h.jsxs("div",{className:"p-3 rounded-lg bg-black/60 border border-white/10 space-y-2",children:[h.jsx("div",{className:"text-[#FF7A29] font-bold text-[11px]",children:"IDENTIFIED MITRE ATT&CK TECHNIQUES:"}),h.jsxs("ul",{className:"text-[11px] text-gray-300 space-y-1 pl-1",children:[h.jsxs("li",{children:["• ",h.jsx("strong",{className:"text-white",children:"T1055"})," — Process Injection (VirtualAllocEx, WriteProcessMemory)"]}),h.jsxs("li",{children:["• ",h.jsx("strong",{className:"text-white",children:"T1547.001"})," — Registry Run Keys Persistence"]}),h.jsxs("li",{children:["• ",h.jsx("strong",{className:"text-white",children:"T1071.001"})," — C2 Beaconing via Port 8443"]})]})]}),h.jsxs("div",{className:"p-3 rounded-lg bg-emerald-950/25 border border-emerald-500/30 text-emerald-300 text-[11px] space-y-1",children:[h.jsxs("div",{className:"font-bold text-emerald-400 flex items-center gap-1.5",children:[h.jsx(Dp,{className:"w-3.5 h-3.5"}),"ACTIONABLE REMEDIATION PLAN:"]}),h.jsx("div",{children:"1. Isolate endpoint 192.168.1.105 from LAN immediately."}),h.jsx("div",{children:"2. Block egress traffic to C2 IP 194.26.29.13."}),h.jsx("div",{children:"3. Terminate hijacked child svchost.exe PID 4128."})]})]}):h.jsxs("div",{className:"p-3.5 rounded-lg bg-[#040508] border border-white/10 font-mono text-[11px] text-gray-300 space-y-1 max-h-64 overflow-y-auto",children:[h.jsx("div",{className:"text-gray-500 text-[10px] mb-1",children:"# RAW CAPE/CUCKOO EXECUTION TRACE"}),h.jsx("div",{className:"text-yellow-400",children:'> NtCreateProcess: "sample_dropper.exe" (PID: 3820)'}),h.jsx("div",{className:"text-gray-400",children:"> Kernel32.VirtualAllocEx(hProcess=0x44, size=0x2000, PAGE_EXECUTE_READWRITE)"}),h.jsx("div",{className:"text-red-400",children:"> WriteProcessMemory: injecting shellcode into PID 4128 (svchost.exe)"}),h.jsx("div",{className:"text-gray-400",children:"> RegSetValueEx: HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run\\Updater"}),h.jsx("div",{className:"text-cyan-400",children:"> Socket.Connect: 194.26.29.13:8443 (TLS handshake initiated)"}),h.jsx("div",{className:"text-emerald-400",children:"> Telemetry parsed by Intelligent Summarizer pipeline."})]}),h.jsx("div",{className:"mt-4 text-[10px] font-mono text-gray-400 text-center",children:"Simulates automated parsing of multi-stage raw malware reports into structured executive intelligence."})]}),m.id==="weather-sms"&&h.jsxs("div",{className:"p-6 rounded-xl bg-black/80 border border-white/15 relative shadow-2xl",children:[h.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-white/10 mb-5 font-mono text-xs text-gray-400",children:[h.jsxs("div",{className:"flex items-center gap-2 text-white font-bold",children:[h.jsx(_x,{className:"w-4 h-4 text-[#FF5E0E]"}),h.jsx("span",{children:"EMBEDDED HARDWARE SIMULATOR"})]}),h.jsx("span",{className:"text-[10px] text-emerald-400",children:"ONLINE"})]}),h.jsxs("div",{className:"space-y-4 mb-6",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex justify-between font-mono text-xs mb-1",children:[h.jsx("span",{className:"text-gray-300",children:"Temperature Sensor:"}),h.jsxs("span",{className:`font-bold ${o>42?"text-red-400":"text-[#FF7A29]"}`,children:[o," °C ",o>42&&"(Threshold Exceeded!)"]})]}),h.jsx("input",{type:"range",min:"15",max:"60",value:o,onChange:x=>l(Number(x.target.value)),className:"w-full accent-[#FF5E0E] bg-white/10 cursor-pointer"})]}),h.jsxs("div",{children:[h.jsxs("div",{className:"flex justify-between font-mono text-xs mb-1",children:[h.jsx("span",{className:"text-gray-300",children:"Humidity Sensor:"}),h.jsxs("span",{className:`font-bold ${u>80?"text-red-400":"text-[#FF7A29]"}`,children:[u," % ",u>80&&"(Threshold Exceeded!)"]})]}),h.jsx("input",{type:"range",min:"20",max:"99",value:u,onChange:x=>f(Number(x.target.value)),className:"w-full accent-[#FF5E0E] bg-white/10 cursor-pointer"})]})]}),h.jsxs("div",{className:"p-3.5 rounded-lg bg-[#040508] border border-white/10 font-mono text-xs space-y-2",children:[h.jsx("div",{className:"text-gray-500 text-[10px]",children:"# MCU SERIAL CONSOLE [BAUD: 9600]"}),h.jsxs("div",{className:"text-gray-300 text-[11px]",children:["Readings: Temp=",o,"°C | Hum=",u,"%"]}),g?h.jsxs("div",{className:"p-2.5 rounded bg-red-950/40 border border-red-500/40 text-red-300 text-[11px] space-y-1 animate-pulse",children:[h.jsxs("div",{className:"flex items-center gap-1.5 font-bold text-red-400",children:[h.jsx(Mv,{className:"w-3.5 h-3.5"}),"CRITICAL THRESHOLD TRIGGERED!"]}),h.jsx("div",{children:'> AT+CMGS="+91XXXXXXXXXX"'}),h.jsx("div",{children:"> ALERT: Weather threshold breach detected!"}),h.jsx("div",{className:"text-emerald-400 font-bold",children:"> OK: SMS Sent Successfully"})]}):h.jsxs("div",{className:"p-2.5 rounded bg-emerald-950/30 border border-emerald-500/30 text-emerald-300 text-[11px] flex items-center gap-2",children:[h.jsx(Dp,{className:"w-3.5 h-3.5 text-emerald-400"}),h.jsx("span",{children:"Parameters within safe limits. Standby telemetry."})]})]}),h.jsx("div",{className:"mt-4 text-[10px] font-mono text-gray-400 text-center",children:"Interactive demonstration of the SMS threshold logic designed for the capstone."})]})]})]})]})]})})}function rw({onSelectCert:s}){const[e,n]=it.useState("All"),r=["All","Cyber Security","Artificial Intelligence","Data Science","IoT & Embedded","Industry Internship"],o=e==="All"?Ju:Ju.filter(l=>l.category===e||e==="Industry Internship"&&l.id==="elysium-internship");return h.jsx("section",{id:"certificates",className:"py-24 relative border-t border-white/[0.05]",children:h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[h.jsxs("div",{className:"flex flex-col items-start mb-12",children:[h.jsxs("div",{className:"font-mono text-xs font-semibold text-[#FF5E0E] uppercase tracking-widest mb-2 flex items-center gap-2",children:[h.jsx("span",{className:"w-2 h-2 rounded-full bg-[#FF5E0E]"}),h.jsx("span",{children:"07 // Verified Credentials"})]}),h.jsxs("h2",{className:"font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight",children:["Certifications ",h.jsx("span",{className:"text-[#FF5E0E]",children:"Gallery"})]}),h.jsx("p",{className:"mt-3 text-sm sm:text-base text-gray-400 max-w-2xl",children:"Official credentials earned across Cyber Security, Artificial Intelligence, Data Science, IoT, and Web Development. Click any card to preview the full certificate."})]}),h.jsx("div",{className:"flex flex-wrap gap-2 mb-10",children:r.map(l=>h.jsx("button",{onClick:()=>n(l),className:`px-4 py-2 rounded-xl text-xs font-mono transition-all interactive-element ${e===l?"bg-[#FF5E0E] text-black font-bold shadow-[0_0_15px_rgba(255,94,14,0.3)]":"glass-panel text-gray-300 hover:text-white hover:border-white/20"}`,children:l},l))}),h.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",children:o.map(l=>h.jsxs("div",{onClick:()=>s(l.id),className:"group cursor-pointer rounded-2xl glass-panel glass-panel-hover overflow-hidden transition-all duration-300 flex flex-col justify-between interactive-element hover:-translate-y-1.5",children:[h.jsxs("div",{className:"relative aspect-[16/11] bg-black/60 overflow-hidden border-b border-white/[0.06]",children:[h.jsx("img",{src:l.image,alt:l.title,className:"w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105",loading:"lazy"}),h.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity"}),h.jsx("div",{className:"absolute top-3 left-3 z-10 font-mono text-[10px] font-semibold px-2.5 py-1 rounded bg-black/75 backdrop-blur-md border border-white/10 text-white",children:l.issuer}),h.jsx("div",{className:"absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]",children:h.jsxs("div",{className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FF5E0E] text-black font-mono text-xs font-bold shadow-lg",children:[h.jsx(Av,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"View Certificate"})]})})]}),h.jsxs("div",{className:"p-5 flex flex-col flex-grow justify-between",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between font-mono text-[10px] text-[#FF7A29] mb-1.5",children:[h.jsx("span",{children:l.category}),h.jsx("span",{children:l.issueDate})]}),h.jsx("h3",{className:"font-display font-bold text-sm sm:text-base text-white group-hover:text-[#FF5E0E] transition-colors leading-snug mb-2",children:l.title}),l.score&&h.jsxs("div",{className:"inline-block px-2.5 py-1 rounded bg-[#FF5E0E]/15 border border-[#FF5E0E]/30 text-[#FF9436] font-mono text-xs font-bold mb-2",children:["Score: ",l.score]}),h.jsx("p",{className:"text-xs text-gray-400 line-clamp-2 font-light mb-4",children:l.description})]}),h.jsxs("div",{className:"pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono",children:[h.jsxs("span",{className:"text-gray-400 flex items-center gap-1",children:[h.jsx(Oa,{className:"w-3.5 h-3.5 text-emerald-400"}),"Verified"]}),l.verifyUrl&&h.jsxs("a",{href:l.verifyUrl,target:"_blank",rel:"noopener noreferrer",onClick:u=>u.stopPropagation(),className:"text-[#FF7A29] hover:text-white flex items-center gap-1 font-semibold",children:[h.jsx("span",{children:"Verify"}),h.jsx(Om,{className:"w-3 h-3"})]})]})]})]},l.id))})]})})}function sw({certId:s,onClose:e}){const n=Ju.find(r=>r.id===s);return it.useEffect(()=>{const r=o=>{o.key==="Escape"&&e()};return window.addEventListener("keydown",r),()=>window.removeEventListener("keydown",r)},[e]),n?h.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn",children:h.jsxs("div",{className:"relative w-full max-w-4xl max-h-[90vh] bg-[#0A0D14] border border-[#FF5E0E]/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col",onClick:r=>r.stopPropagation(),children:[h.jsxs("div",{className:"p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-black/50",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"font-mono text-[10px] text-[#FF7A29] uppercase",children:[n.issuer," • ",n.category]}),h.jsx("h3",{className:"font-display font-bold text-lg sm:text-xl text-white",children:n.title})]}),h.jsx("button",{onClick:e,className:"p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors interactive-element","aria-label":"Close modal",children:h.jsx(Gm,{className:"w-5 h-5"})})]}),h.jsxs("div",{className:"overflow-y-auto p-4 sm:p-6 space-y-6",children:[h.jsx("div",{className:"rounded-xl overflow-hidden bg-black/70 border border-white/10 flex items-center justify-center p-2",children:h.jsx("img",{src:n.image,alt:n.title,className:"max-h-[58vh] w-auto object-contain rounded-lg shadow-xl"})}),h.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[h.jsxs("div",{className:"p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2",children:[h.jsxs("div",{className:"font-mono text-xs text-gray-400 flex items-center gap-2",children:[h.jsx(Um,{className:"w-4 h-4 text-[#FF5E0E]"}),h.jsxs("span",{children:["Issue Date: ",h.jsx("strong",{className:"text-white",children:n.issueDate})]})]}),h.jsxs("div",{className:"font-mono text-xs text-gray-400 flex items-center gap-2",children:[h.jsx(Im,{className:"w-4 h-4 text-[#FF5E0E]"}),h.jsxs("span",{children:["Issuer: ",h.jsx("strong",{className:"text-white",children:n.issuer})]})]}),n.score&&h.jsxs("div",{className:"font-mono text-xs text-gray-400 flex items-center gap-2",children:[h.jsx(Dm,{className:"w-4 h-4 text-[#FF5E0E]"}),h.jsxs("span",{children:["Consolidated Score: ",h.jsx("strong",{className:"text-[#FF9436]",children:n.score})]})]}),n.scoreBreakdown&&h.jsx("div",{className:"font-mono text-[11px] text-gray-500 pl-6",children:n.scoreBreakdown}),n.certId&&h.jsxs("div",{className:"font-mono text-[11px] text-gray-400",children:["Cert ID: ",h.jsx("span",{className:"text-white select-all",children:n.certId})]})]}),h.jsxs("div",{className:"p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between",children:[h.jsx("p",{className:"text-xs text-gray-300 leading-relaxed font-light mb-4",children:n.description}),n.verifyUrl?h.jsxs("a",{href:n.verifyUrl,target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#FF5E0E] hover:bg-[#FF7A29] text-black font-mono text-xs font-bold transition-all shadow-[0_0_20px_rgba(255,94,14,0.3)] interactive-element",children:[h.jsx("span",{children:"Verify Credential Online"}),h.jsx(Om,{className:"w-3.5 h-3.5"})]}):h.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-emerald-400",children:[h.jsx(Oa,{className:"w-4 h-4"}),h.jsx("span",{children:"Verified Document from Academic Records"})]})]})]})]}),h.jsx("div",{className:"p-4 border-t border-white/10 bg-black/40 flex justify-end",children:h.jsx("button",{onClick:e,className:"px-5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono text-xs transition-colors",children:"Close Preview"})})]})}):null}function aw(){return h.jsx("section",{id:"education",className:"py-24 relative border-t border-white/[0.05]",children:h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[h.jsxs("div",{className:"flex flex-col items-start mb-16",children:[h.jsxs("div",{className:"font-mono text-xs font-semibold text-[#FF5E0E] uppercase tracking-widest mb-2 flex items-center gap-2",children:[h.jsx("span",{className:"w-2 h-2 rounded-full bg-[#FF5E0E]"}),h.jsx("span",{children:"08 // Academic Trajectory"})]}),h.jsxs("h2",{className:"font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight",children:["Education ",h.jsx("span",{className:"text-[#FF5E0E]",children:"Timeline"})]}),h.jsx("p",{className:"mt-3 text-sm sm:text-base text-gray-400 max-w-2xl",children:"A clear evolution from secondary school to comprehensive computer engineering diploma, leading to bachelor's specialization in cybersecurity."})]}),h.jsx("div",{className:"space-y-6 relative before:absolute before:inset-0 before:left-8 sm:before:left-1/2 before:w-0.5 before:bg-gradient-to-b before:from-[#FF5E0E] before:via-white/10 before:to-transparent",children:Rv.map((s,e)=>{const n=s.type==="specialization",r=s.type==="foundation";return h.jsxs("div",{className:`relative flex flex-col sm:flex-row items-start sm:items-center ${e%2===0?"sm:flex-row-reverse":""} gap-6 sm:gap-12 group`,children:[h.jsx("div",{className:"absolute left-8 sm:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-[#0A0D14] border-2 border-[#FF5E0E] flex items-center justify-center text-[#FF5E0E] z-10 group-hover:scale-125 transition-transform shadow-[0_0_15px_rgba(255,94,14,0.4)]",children:h.jsx(Kx,{className:"w-4 h-4"})}),h.jsx("div",{className:"w-full sm:w-[calc(50%-3rem)] pl-16 sm:pl-0",children:h.jsxs("div",{className:`p-6 rounded-2xl glass-panel glass-panel-hover transition-all duration-300 border ${n?"border-[#FF5E0E]/40 shadow-[0_0_25px_rgba(255,94,14,0.15)]":r?"border-white/15":"border-white/[0.06]"}`,children:[h.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 mb-2",children:[h.jsx("span",{className:`px-2.5 py-0.5 rounded-full font-mono text-[10px] font-bold ${n?"bg-[#FF5E0E] text-black":r?"bg-[#FF5E0E]/20 text-[#FF9436]":"bg-white/10 text-gray-400"}`,children:n?"SPECIALIZATION":r?"CORE FOUNDATION":"SECONDARY"}),h.jsx("span",{className:"font-mono text-xs text-gray-400",children:s.period})]}),h.jsx("h3",{className:"font-display font-bold text-lg sm:text-xl text-white mb-1",children:s.degree}),h.jsx("div",{className:"font-mono text-xs text-[#FF7A29] mb-3",children:s.institution}),h.jsx("div",{className:"inline-block px-2.5 py-1 rounded bg-black/40 border border-white/10 text-xs font-mono font-semibold text-emerald-400 mb-3",children:s.status}),h.jsx("p",{className:"text-xs sm:text-sm text-gray-400 font-light leading-relaxed",children:s.description})]})})]},s.degree)})})]})})}const ow={ShieldAlert:Vm,BrainCircuit:Cx,Layout:Gd,Zap:Xd};function lw(){return h.jsx("section",{className:"py-24 relative border-t border-white/[0.05]",children:h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[h.jsxs("div",{className:"mb-20",children:[h.jsxs("div",{className:"font-mono text-xs font-semibold text-[#FF5E0E] uppercase tracking-widest mb-2 flex items-center gap-2",children:[h.jsx("span",{className:"w-2 h-2 rounded-full bg-[#FF5E0E]"}),h.jsx("span",{children:"09 // Focus Vectors"})]}),h.jsxs("h2",{className:"font-display font-bold text-3xl sm:text-4xl text-white tracking-tight mb-8",children:["Areas of ",h.jsx("span",{className:"text-[#FF5E0E]",children:"Interest"})]}),h.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5",children:Nv.map(s=>{const e=ow[s.icon]||Gd;return h.jsxs("div",{className:"p-6 rounded-2xl glass-panel glass-panel-hover transition-all duration-300 group interactive-element",children:[h.jsx("div",{className:"w-12 h-12 rounded-xl bg-[#FF5E0E]/10 border border-[#FF5E0E]/30 flex items-center justify-center text-[#FF5E0E] mb-4 group-hover:bg-[#FF5E0E] group-hover:text-black transition-all duration-300",children:h.jsx(e,{className:"w-6 h-6"})}),h.jsx("h3",{className:"font-display font-bold text-base text-white group-hover:text-[#FF5E0E] transition-colors mb-2",children:s.title}),h.jsx("p",{className:"text-xs text-gray-400 font-light leading-relaxed",children:s.description})]},s.title)})})]}),h.jsxs("div",{children:[h.jsxs("div",{className:"font-mono text-xs font-semibold text-[#FF5E0E] uppercase tracking-widest mb-2 flex items-center gap-2",children:[h.jsx("span",{className:"w-2 h-2 rounded-full bg-[#FF5E0E]"}),h.jsx("span",{children:"10 // Core Competencies"})]}),h.jsxs("h2",{className:"font-display font-bold text-3xl sm:text-4xl text-white tracking-tight mb-8",children:["Verified ",h.jsx("span",{className:"text-[#FF5E0E]",children:"Strengths"})]}),h.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5",children:Pv.map((s,e)=>h.jsxs("div",{className:"p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-[#FF5E0E]/30 transition-all duration-300",children:[h.jsxs("div",{className:"font-mono text-xs text-[#FF7A29] font-bold mb-2 flex items-center gap-1.5",children:[h.jsx(Xd,{className:"w-3.5 h-3.5"}),h.jsxs("span",{children:["STRENGTH // 0",e+1]})]}),h.jsx("h3",{className:"font-display font-semibold text-sm sm:text-base text-white mb-2",children:s.title}),h.jsx("p",{className:"text-xs text-gray-400 font-light leading-relaxed",children:s.description})]},s.title))})]})]})})}function cw({onShowToast:s}){const[e,n]=it.useState(!1),[r,o]=it.useState({name:"",email:"",message:""}),[l,u]=it.useState("idle"),f=()=>{navigator.clipboard.writeText(wn.email),n(!0),s&&s("Email copied to clipboard!"),setTimeout(()=>n(!1),2e3)},m=g=>{g.preventDefault(),!(!r.name||!r.email||!r.message)&&(u("sending"),setTimeout(()=>{u("sent"),s&&s("Message simulated! (Frontend demo form)"),setTimeout(()=>{o({name:"",email:"",message:""}),u("idle")},3e3)},1200))};return h.jsx("section",{id:"contact",className:"py-24 relative border-t border-white/[0.05]",children:h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[h.jsxs("div",{className:"flex flex-col items-start mb-16",children:[h.jsxs("div",{className:"font-mono text-xs font-semibold text-[#FF5E0E] uppercase tracking-widest mb-2 flex items-center gap-2",children:[h.jsx("span",{className:"w-2 h-2 rounded-full bg-[#FF5E0E]"}),h.jsx("span",{children:"11 // Connect"})]}),h.jsxs("h2",{className:"font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight",children:["Let's Build Something ",h.jsx("span",{className:"text-[#FF5E0E]",children:"Meaningful"})]}),h.jsx("p",{className:"mt-3 text-sm sm:text-base text-gray-400 max-w-2xl",children:"Seeking opportunities in Cyber Security, Applied Machine Learning, and Software Engineering. Let's discuss collaborations or security research."})]}),h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-10",children:[h.jsxs("div",{className:"lg:col-span-5 space-y-6",children:[h.jsxs("div",{className:"p-6 rounded-2xl glass-panel border border-[#FF5E0E]/30 relative overflow-hidden",children:[h.jsx("div",{className:"font-mono text-xs text-[#FF7A29] uppercase mb-1",children:"CONTACT DIRECTORY"}),h.jsx("h3",{className:"font-display font-bold text-2xl text-white mb-6",children:wn.name}),h.jsxs("div",{className:"space-y-4 font-mono text-xs",children:[h.jsxs("div",{className:"flex items-center justify-between p-3 rounded-xl bg-black/40 border border-white/10",children:[h.jsxs("div",{className:"flex items-center gap-2.5 text-gray-200",children:[h.jsx(Bm,{className:"w-4 h-4 text-[#FF5E0E]"}),h.jsx("a",{href:`mailto:${wn.email}`,className:"hover:text-[#FF5E0E] transition-colors",children:wn.email})]}),h.jsx("button",{onClick:f,className:"p-1.5 rounded bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors interactive-element",title:"Copy Email",children:e?h.jsx(Dx,{className:"w-3.5 h-3.5 text-emerald-400"}):h.jsx(Hx,{className:"w-3.5 h-3.5"})})]}),h.jsxs("div",{className:"flex items-center gap-2.5 p-3 rounded-xl bg-black/40 border border-white/10 text-gray-200",children:[h.jsx(lv,{className:"w-4 h-4 text-[#FF5E0E]"}),h.jsx("a",{href:`tel:${wn.phone.replace(/\s+/g,"")}`,className:"hover:text-[#FF5E0E] transition-colors",children:wn.phone})]}),h.jsxs("div",{className:"flex items-center gap-2.5 p-3 rounded-xl bg-black/40 border border-white/10 text-gray-300",children:[h.jsx(Hm,{className:"w-4 h-4 text-[#FF5E0E]"}),h.jsx("span",{children:wn.location})]}),h.jsx("div",{className:"flex items-center justify-between p-3 rounded-xl bg-black/40 border border-white/10 text-gray-200",children:h.jsxs("div",{className:"flex items-center gap-2.5",children:[h.jsx(tv,{className:"w-4 h-4 text-[#FF5E0E]"}),h.jsx("a",{href:wn.linkedin,target:"_blank",rel:"noopener noreferrer",className:"hover:text-[#FF5E0E] transition-colors",children:wn.linkedinHandle})]})})]})]}),h.jsxs("div",{className:"p-6 rounded-2xl glass-panel space-y-3",children:[h.jsx("div",{className:"font-mono text-xs text-gray-400 uppercase",children:"OFFICIAL RESUME DOWNLOAD"}),h.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[h.jsxs("a",{href:wn.resumePdf,download:"Yogeswar_Resume.pdf",className:"flex items-center justify-center gap-2 py-3 rounded-xl bg-[#FF5E0E] hover:bg-[#FF7A29] text-black font-mono text-xs font-bold transition-all shadow-[0_0_20px_rgba(255,94,14,0.3)] interactive-element",children:[h.jsx(Ua,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"PDF Resume"})]}),h.jsxs("a",{href:wn.resumeDocx,download:"Yogeswar_Resume.docx",className:"flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-xs font-semibold transition-all interactive-element",children:[h.jsx(Ua,{className:"w-3.5 h-3.5 text-[#FF5E0E]"}),h.jsx("span",{children:"Word DOCX"})]})]})]})]}),h.jsxs("div",{className:"lg:col-span-7 p-6 sm:p-8 rounded-2xl glass-panel border border-white/10 relative",children:[h.jsxs("div",{className:"flex items-center gap-2 font-mono text-xs text-gray-400 mb-6 pb-3 border-b border-white/[0.06]",children:[h.jsx(Wd,{className:"w-4 h-4 text-[#FF5E0E]"}),h.jsx("span",{children:"DISPATCH_MESSAGE_PACKET.sh"})]}),h.jsxs("form",{onSubmit:m,className:"space-y-4",children:[h.jsxs("div",{children:[h.jsx("label",{className:"block font-mono text-xs text-gray-400 mb-1.5",children:"YOUR NAME"}),h.jsx("input",{type:"text",required:!0,value:r.name,onChange:g=>o({...r,name:g.target.value}),placeholder:"e.g. Alex Henderson",className:"w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-[#FF5E0E] focus:outline-none text-white font-mono text-xs transition-colors"})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block font-mono text-xs text-gray-400 mb-1.5",children:"EMAIL ADDRESS"}),h.jsx("input",{type:"email",required:!0,value:r.email,onChange:g=>o({...r,email:g.target.value}),placeholder:"alex@company.com",className:"w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-[#FF5E0E] focus:outline-none text-white font-mono text-xs transition-colors"})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block font-mono text-xs text-gray-400 mb-1.5",children:"MESSAGE CONTENT"}),h.jsx("textarea",{rows:"4",required:!0,value:r.message,onChange:g=>o({...r,message:g.target.value}),placeholder:"Inquiry regarding security internships, developer roles, or projects...",className:"w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-[#FF5E0E] focus:outline-none text-white font-mono text-xs transition-colors resize-none"})]}),h.jsxs("div",{className:"pt-2 flex flex-col sm:flex-row items-center justify-between gap-4",children:[h.jsxs("button",{type:"submit",disabled:l==="sending",className:"w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#FF5E0E] hover:bg-[#FF7A29] text-black font-mono text-xs font-bold transition-all shadow-[0_0_20px_rgba(255,94,14,0.3)] disabled:opacity-50 interactive-element",children:[h.jsx(pv,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:l==="sending"?"Dispatching...":l==="sent"?"Dispatched!":"Send Message"})]}),h.jsx("span",{className:"font-mono text-[11px] text-gray-500 text-center sm:text-right",children:"(Frontend interface demonstration • Direct mail to yogesyogi13@gmail.com)"})]})]})]})]})]})})}function uw(){const s=()=>{window.scrollTo({top:0,behavior:"smooth"})};return h.jsx("footer",{className:"py-12 border-t border-white/[0.08] bg-[#040507] relative",children:h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx("div",{className:"w-8 h-8 rounded-lg bg-[#FF5E0E]/10 border border-[#FF5E0E]/30 flex items-center justify-center text-[#FF5E0E] font-mono font-bold text-xs",children:"YS"}),h.jsxs("div",{children:[h.jsx("div",{className:"font-display font-bold text-white text-sm",children:wn.name}),h.jsx("div",{className:"font-mono text-[10px] text-gray-500",children:"B.E. CSE (Cyber Security) • Velammal College of Engg & Tech"})]})]}),h.jsx("div",{className:"font-mono text-[11px] text-gray-400 text-center",children:"Designed with precision & engineered on authentic academic credentials."}),h.jsxs("button",{onClick:s,className:"flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/5 hover:bg-[#FF5E0E] text-gray-400 hover:text-black font-mono text-xs transition-all interactive-element","aria-label":"Back to top",children:[h.jsx("span",{children:"Top"}),h.jsx(Tx,{className:"w-3.5 h-3.5"})]})]})})}function dw(){const[s,e]=it.useState(null),[n,r]=it.useState(null),o=l=>{r(l),setTimeout(()=>{r(null)},2800)};return h.jsxs("div",{className:"relative min-h-screen bg-[#060709] text-white selection:bg-[#FF5E0E] selection:text-black",children:[h.jsx(hx,{}),h.jsx(px,{}),h.jsx(Fv,{}),h.jsxs("main",{className:"relative z-10",children:[h.jsx(YM,{}),h.jsx(KM,{}),h.jsx(QM,{}),h.jsx(ew,{}),h.jsx(tw,{}),h.jsx(nw,{onOpenCert:l=>e(l)}),h.jsx(iw,{}),h.jsx(rw,{onSelectCert:l=>e(l)}),h.jsx(aw,{}),h.jsx(lw,{}),h.jsx(cw,{onShowToast:o})]}),h.jsx(uw,{}),s&&h.jsx(sw,{certId:s,onClose:()=>e(null)}),n&&h.jsxs("div",{className:"fixed bottom-6 right-6 z-50 px-4 py-2.5 rounded-xl bg-[#0D1017] border border-[#FF5E0E]/50 text-white font-mono text-xs shadow-2xl flex items-center gap-2 animate-bounce",children:[h.jsx("span",{className:"w-2 h-2 rounded-full bg-[#FF5E0E]"}),h.jsx("span",{children:n})]})]})}fx.createRoot(document.getElementById("root")).render(h.jsx(sx.StrictMode,{children:h.jsx(dw,{})}));
