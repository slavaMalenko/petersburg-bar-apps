(function(o,a){typeof exports=="object"&&typeof module<"u"?a(exports,require("styled-components"),require("react"),require("framer-motion")):typeof define=="function"&&define.amd?define(["exports","styled-components","react","framer-motion"],a):(o=typeof globalThis<"u"?globalThis:o||self,a(o.PetersburgBarUI={},o.styled,o.React,o.framerMotion))})(this,function(o,a,R,w){"use strict";o.flexStyles=void 0,(t=>{t.displayFlex=a.css`
        display: flex;
    `,t.justifySpaceBetween=a.css`
        justify-content: space-between;
    `,t.justifySpaceAround=a.css`
        justify-content: space-around;
    `,t.justifyCenter=a.css`
        justify-content: center;
    `,t.alignItemsCenter=a.css`
        align-items: center;
    `,t.flexDirectionColumn=a.css`
        flex-direction: column;
    `,t.flexWrap=a.css`
        flex-wrap: wrap;
    `})(o.flexStyles||(o.flexStyles={})),o.commonStyles=void 0,(t=>{t.pointer=a.css`
        cursor: pointer;
    `,t.cursorDefault=a.css`
        cursor: default;
    `,t.cursorGrab=a.css`
        cursor: grab;
    `,t.cursorGrabbing=a.css`
        cursor: grabbing;
    `,t.selectNone=a.css`
        user-select: none;
    `,t.overflowHidden=a.css`
        overflow: hidden;
    `,t.hoverFrame=a.css`
        position: relative;
        box-sizing: border-box;
        transition: all 0.2s linear;

        &::before,
        &::after {
            content: '';
            position: absolute;
            transition: 0.3s ease-in-out;
            width: 0;
            height: 0;
        }
        &::before {
            top: 0;
            left: 0;
            border-top: 0px solid #d5621d;
            border-left: 0px solid #d5621d;
        }
        &::after {
            right: 0;
            bottom: 0;
            border-bottom: 0px solid #d5621d;
            border-right: 0px solid #d5621d;
        }
        &:hover::before {
            border-top: 1px solid #d5621d;
            border-left: 1px solid #d5621d;
        }
        &:hover::after {
            border-bottom: 1px solid #d5621d;
            border-right: 1px solid #d5621d;
        }
        &:hover::before,
        &:hover::after {
            width: calc(100% + 9px);
            height: calc(100% + 9px);
        }
    `})(o.commonStyles||(o.commonStyles={})),o.textStyles=void 0,(t=>{t.fontFamilySofiaSansSemiCondensed=a.css`
        font-family: 'Sofia Sans Semi Condensed', sans-serif;
    `,t.colorWhite=a.css`
        color: #fff;
    `,t.textAlignCenter=a.css`
        text-align: center;
    `,t.textTransformUppercase=a.css`
        text-transform: uppercase;
    `})(o.textStyles||(o.textStyles={}));var W={exports:{}},U={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var re;function Ye(){if(re)return U;re=1;var t=R,s=Symbol.for("react.element"),v=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,g=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x={key:!0,ref:!0,__self:!0,__source:!0};function h(S,m,C){var T,j={},O=null,V=null;C!==void 0&&(O=""+C),m.key!==void 0&&(O=""+m.key),m.ref!==void 0&&(V=m.ref);for(T in m)d.call(m,T)&&!x.hasOwnProperty(T)&&(j[T]=m[T]);if(S&&S.defaultProps)for(T in m=S.defaultProps,m)j[T]===void 0&&(j[T]=m[T]);return{$$typeof:s,type:S,key:O,ref:V,props:j,_owner:g.current}}return U.Fragment=v,U.jsx=h,U.jsxs=h,U}var D={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var te;function We(){return te||(te=1,process.env.NODE_ENV!=="production"&&function(){var t=R,s=Symbol.for("react.element"),v=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),g=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),h=Symbol.for("react.provider"),S=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),T=Symbol.for("react.suspense_list"),j=Symbol.for("react.memo"),O=Symbol.for("react.lazy"),V=Symbol.for("react.offscreen"),pe=Symbol.iterator,Gr="@@iterator";function Xr(e){if(e===null||typeof e!="object")return null;var r=pe&&e[pe]||e[Gr];return typeof r=="function"?r:null}var F=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function y(e){{for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];Jr("error",e,n)}}function Jr(e,r,n){{var i=F.ReactDebugCurrentFrame,u=i.getStackAddendum();u!==""&&(r+="%s",n=n.concat([u]));var f=n.map(function(l){return String(l)});f.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,f)}}var Zr=!1,qr=!1,et=!1,rt=!1,tt=!1,ve;ve=Symbol.for("react.module.reference");function nt(e){return!!(typeof e=="string"||typeof e=="function"||e===d||e===x||tt||e===g||e===C||e===T||rt||e===V||Zr||qr||et||typeof e=="object"&&e!==null&&(e.$$typeof===O||e.$$typeof===j||e.$$typeof===h||e.$$typeof===S||e.$$typeof===m||e.$$typeof===ve||e.getModuleId!==void 0))}function ot(e,r,n){var i=e.displayName;if(i)return i;var u=r.displayName||r.name||"";return u!==""?n+"("+u+")":n}function ge(e){return e.displayName||"Context"}function I(e){if(e==null)return null;if(typeof e.tag=="number"&&y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case d:return"Fragment";case v:return"Portal";case x:return"Profiler";case g:return"StrictMode";case C:return"Suspense";case T:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case S:var r=e;return ge(r)+".Consumer";case h:var n=e;return ge(n._context)+".Provider";case m:return ot(e,e.render,"ForwardRef");case j:var i=e.displayName||null;return i!==null?i:I(e.type)||"Memo";case O:{var u=e,f=u._payload,l=u._init;try{return I(l(f))}catch{return null}}}return null}var P=Object.assign,Y=0,he,Ae,me,be,xe,Re,Se;function Ee(){}Ee.__reactDisabledLog=!0;function it(){{if(Y===0){he=console.log,Ae=console.info,me=console.warn,be=console.error,xe=console.group,Re=console.groupCollapsed,Se=console.groupEnd;var e={configurable:!0,enumerable:!0,value:Ee,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}Y++}}function at(){{if(Y--,Y===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:P({},e,{value:he}),info:P({},e,{value:Ae}),warn:P({},e,{value:me}),error:P({},e,{value:be}),group:P({},e,{value:xe}),groupCollapsed:P({},e,{value:Re}),groupEnd:P({},e,{value:Se})})}Y<0&&y("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var K=F.ReactCurrentDispatcher,G;function L(e,r,n){{if(G===void 0)try{throw Error()}catch(u){var i=u.stack.trim().match(/\n( *(at )?)/);G=i&&i[1]||""}return`
`+G+e}}var X=!1,N;{var st=typeof WeakMap=="function"?WeakMap:Map;N=new st}function ye(e,r){if(!e||X)return"";{var n=N.get(e);if(n!==void 0)return n}var i;X=!0;var u=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var f;f=K.current,K.current=null,it();try{if(r){var l=function(){throw Error()};if(Object.defineProperty(l.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(l,[])}catch(k){i=k}Reflect.construct(e,[],l)}else{try{l.call()}catch(k){i=k}e.call(l.prototype)}}else{try{throw Error()}catch(k){i=k}e()}}catch(k){if(k&&i&&typeof k.stack=="string"){for(var c=k.stack.split(`
`),E=i.stack.split(`
`),A=c.length-1,b=E.length-1;A>=1&&b>=0&&c[A]!==E[b];)b--;for(;A>=1&&b>=0;A--,b--)if(c[A]!==E[b]){if(A!==1||b!==1)do if(A--,b--,b<0||c[A]!==E[b]){var _=`
`+c[A].replace(" at new "," at ");return e.displayName&&_.includes("<anonymous>")&&(_=_.replace("<anonymous>",e.displayName)),typeof e=="function"&&N.set(e,_),_}while(A>=1&&b>=0);break}}}finally{X=!1,K.current=f,at(),Error.prepareStackTrace=u}var B=e?e.displayName||e.name:"",De=B?L(B):"";return typeof e=="function"&&N.set(e,De),De}function ct(e,r,n){return ye(e,!1)}function lt(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function M(e,r,n){if(e==null)return"";if(typeof e=="function")return ye(e,lt(e));if(typeof e=="string")return L(e);switch(e){case C:return L("Suspense");case T:return L("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case m:return ct(e.render);case j:return M(e.type,r,n);case O:{var i=e,u=i._payload,f=i._init;try{return M(f(u),r,n)}catch{}}}return""}var Q=Object.prototype.hasOwnProperty,we={},Ce=F.ReactDebugCurrentFrame;function H(e){if(e){var r=e._owner,n=M(e.type,e._source,r?r.type:null);Ce.setExtraStackFrame(n)}else Ce.setExtraStackFrame(null)}function ut(e,r,n,i,u){{var f=Function.call.bind(Q);for(var l in e)if(f(e,l)){var c=void 0;try{if(typeof e[l]!="function"){var E=Error((i||"React class")+": "+n+" type `"+l+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[l]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw E.name="Invariant Violation",E}c=e[l](r,l,i,n,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(A){c=A}c&&!(c instanceof Error)&&(H(u),y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",i||"React class",n,l,typeof c),H(null)),c instanceof Error&&!(c.message in we)&&(we[c.message]=!0,H(u),y("Failed %s type: %s",n,c.message),H(null))}}}var ft=Array.isArray;function J(e){return ft(e)}function dt(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,n=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return n}}function pt(e){try{return Te(e),!1}catch{return!0}}function Te(e){return""+e}function _e(e){if(pt(e))return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",dt(e)),Te(e)}var je=F.ReactCurrentOwner,vt={key:!0,ref:!0,__self:!0,__source:!0},ke,Oe;function gt(e){if(Q.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function ht(e){if(Q.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function At(e,r){typeof e.ref=="string"&&je.current}function mt(e,r){{var n=function(){ke||(ke=!0,y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};n.isReactWarning=!0,Object.defineProperty(e,"key",{get:n,configurable:!0})}}function bt(e,r){{var n=function(){Oe||(Oe=!0,y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};n.isReactWarning=!0,Object.defineProperty(e,"ref",{get:n,configurable:!0})}}var xt=function(e,r,n,i,u,f,l){var c={$$typeof:s,type:e,key:r,ref:n,props:l,_owner:f};return c._store={},Object.defineProperty(c._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(c,"_self",{configurable:!1,enumerable:!1,writable:!1,value:i}),Object.defineProperty(c,"_source",{configurable:!1,enumerable:!1,writable:!1,value:u}),Object.freeze&&(Object.freeze(c.props),Object.freeze(c)),c};function Rt(e,r,n,i,u){{var f,l={},c=null,E=null;n!==void 0&&(_e(n),c=""+n),ht(r)&&(_e(r.key),c=""+r.key),gt(r)&&(E=r.ref,At(r,u));for(f in r)Q.call(r,f)&&!vt.hasOwnProperty(f)&&(l[f]=r[f]);if(e&&e.defaultProps){var A=e.defaultProps;for(f in A)l[f]===void 0&&(l[f]=A[f])}if(c||E){var b=typeof e=="function"?e.displayName||e.name||"Unknown":e;c&&mt(l,b),E&&bt(l,b)}return xt(e,c,E,u,i,je.current,l)}}var Z=F.ReactCurrentOwner,Ie=F.ReactDebugCurrentFrame;function $(e){if(e){var r=e._owner,n=M(e.type,e._source,r?r.type:null);Ie.setExtraStackFrame(n)}else Ie.setExtraStackFrame(null)}var q;q=!1;function ee(e){return typeof e=="object"&&e!==null&&e.$$typeof===s}function Pe(){{if(Z.current){var e=I(Z.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function St(e){return""}var Fe={};function Et(e){{var r=Pe();if(!r){var n=typeof e=="string"?e:e.displayName||e.name;n&&(r=`

Check the top-level render call using <`+n+">.")}return r}}function $e(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var n=Et(r);if(Fe[n])return;Fe[n]=!0;var i="";e&&e._owner&&e._owner!==Z.current&&(i=" It was passed a child from "+I(e._owner.type)+"."),$(e),y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',n,i),$(null)}}function Be(e,r){{if(typeof e!="object")return;if(J(e))for(var n=0;n<e.length;n++){var i=e[n];ee(i)&&$e(i,r)}else if(ee(e))e._store&&(e._store.validated=!0);else if(e){var u=Xr(e);if(typeof u=="function"&&u!==e.entries)for(var f=u.call(e),l;!(l=f.next()).done;)ee(l.value)&&$e(l.value,r)}}}function yt(e){{var r=e.type;if(r==null||typeof r=="string")return;var n;if(typeof r=="function")n=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===m||r.$$typeof===j))n=r.propTypes;else return;if(n){var i=I(r);ut(n,e.props,"prop",i,e)}else if(r.PropTypes!==void 0&&!q){q=!0;var u=I(r);y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",u||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function wt(e){{for(var r=Object.keys(e.props),n=0;n<r.length;n++){var i=r[n];if(i!=="children"&&i!=="key"){$(e),y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",i),$(null);break}}e.ref!==null&&($(e),y("Invalid attribute `ref` supplied to `React.Fragment`."),$(null))}}function Ue(e,r,n,i,u,f){{var l=nt(e);if(!l){var c="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(c+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var E=St();E?c+=E:c+=Pe();var A;e===null?A="null":J(e)?A="array":e!==void 0&&e.$$typeof===s?(A="<"+(I(e.type)||"Unknown")+" />",c=" Did you accidentally export a JSX literal instead of a component?"):A=typeof e,y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",A,c)}var b=Rt(e,r,n,u,f);if(b==null)return b;if(l){var _=r.children;if(_!==void 0)if(i)if(J(_)){for(var B=0;B<_.length;B++)Be(_[B],e);Object.freeze&&Object.freeze(_)}else y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Be(_,e)}return e===d?wt(b):yt(b),b}}function Ct(e,r,n){return Ue(e,r,n,!0)}function Tt(e,r,n){return Ue(e,r,n,!1)}var _t=Tt,jt=Ct;D.Fragment=d,D.jsx=_t,D.jsxs=jt}()),D}var ne;function Ve(){return ne||(ne=1,process.env.NODE_ENV==="production"?W.exports=Ye():W.exports=We()),W.exports}var p=Ve();o.animationBlock=void 0,(t=>{t.getAnimateBlock=({block:s,custom:v,children:d,animation:g,props:x={}})=>{const h=s;return p.jsx(h,{custom:v,variants:g,...x,children:d&&d})}})(o.animationBlock||(o.animationBlock={})),o.animationVariants=void 0,(t=>{t.appearanceOnTheLeft=(s=1,v=.1,d=.5)=>({hidden:{x:-100,opacity:0},visible:g=>({x:0,opacity:s,transition:{type:"tween",delay:g*v,duration:d}})}),t.appearanceOnTheRight=(s=1,v=.1,d=.5)=>({hidden:{x:100,opacity:0},visible:g=>({x:0,opacity:s,transition:{type:"tween",delay:g*v,duration:d}})}),t.appearanceOnTheTop=(s=1,v=.1)=>({hidden:{y:-100,opacity:0},visible:d=>({y:0,opacity:s,transition:{delay:d*v}})})})(o.animationVariants||(o.animationVariants={}));const Le=a.div`
    width: 100%;
    max-width: 1220px;
    margin: 0 auto;
    padding: 0 10px;
`,Ne=({children:t})=>p.jsx(Le,{children:t}),Me=()=>p.jsx("div",{children:"EmptyComponent"}),{displayFlex:Qe,justifyCenter:He}=o.flexStyles,{textTransformUppercase:ze,fontFamilySofiaSansSemiCondensed:Ke}=o.textStyles,{selectNone:Ge,pointer:Xe}=o.commonStyles,Je=a.div`
    ${Qe}
    ${He}
`,Ze=a(w.motion.span)`
    ${ze}
    ${Ge}
    display: inline-block;
    padding: 10px 20px;
    text-align: center;
    background-color: #fff;
    font-weight: 700;
    font-size: 20px;
    border-radius: 5px;
    transition: all 0.2s linear;
    ${({$commonStyles:t})=>t||""}
    ${Ke}
    ${Xe}
`,oe=R.forwardRef(({scrollToTitle:t=!1,title:s,$commonStyles:v},d)=>{const g=R.useRef(null);return R.useImperativeHandle(d,()=>g.current),p.jsx(Je,{children:p.jsx(Ze,{ref:g,$commonStyles:v,onClick:()=>{t&&g.current&&window.scrollTo({top:g.current.offsetTop-30,behavior:"smooth"})},children:s})})}),qe=w.motion(oe),er=a.div`
    width: 100%;
    height: 1px;
    background: #fff;
    margin: 20px 0;
`,{colorWhite:rr,textTransformUppercase:tr,fontFamilySofiaSansSemiCondensed:nr,textAlignCenter:or}=o.textStyles,ir=a(w.motion.h1)`
    letter-spacing: 3px;
    font-size: 45px;
    font-weight: 900;
    margin-top: 20px;
    margin-bottom: 20px;
    ${o.commonStyles.selectNone};
    ${or};
    ${nr};
    ${tr};
    ${({$commonStyles:t})=>t||""};
    ${({isColorWhite:t=!0})=>t?rr:""};
`,ie=R.forwardRef(({text:t,$commonStyles:s,isColorWhite:v},d)=>p.jsx(ir,{ref:d,$commonStyles:s,isColorWhite:v,children:t})),ar=w.motion(ie),{displayFlex:sr,justifyCenter:cr}=o.flexStyles,{selectNone:lr,pointer:ur}=o.commonStyles,{colorWhite:fr,textTransformUppercase:dr,fontFamilySofiaSansSemiCondensed:pr,textAlignCenter:vr}=o.textStyles,gr=a.div`
    ${sr}
    ${cr}
`,z=a.div`
    background: #ff6200;
    top: 0;
    left: -405px;
    width: 400px;
    height: 50px;
    position: absolute;
    transition: all 0.3s linear;
    z-index: 1;
`,ae=a(w.motion.div)`
    ${pr}
    ${lr}
    ${dr}
    ${fr}
    ${ur}
    ${vr}
    position: relative;
    border: 2px solid #d5621d;
    border-radius: 5px;

    padding: 10px 30px;
    max-width: 150px;
    max-height: 50px;
    font-weight: 700;
    font-size: 20px;
    transition: all 0.2s linear;
    overflow: hidden;

    &:hover {
        background: ${({$isFilling:t})=>t?"#ff6200":"rgb(213, 98, 29)"};
    }

    ${({$hoverRight:t})=>t?`&:hover ${z} { left: 0; }`:""}
    ${({$isFilling:t,$hoverRight:s})=>t&&!s?"background: rgb(213, 98, 29);":""}
    ${({$verticalMargin:t})=>t?`margin: ${t}px 0;`:""}
    ${({$marginBottom:t})=>t?`margin-bottom: ${t}px;`:""}
    ${({$commonStyles:t})=>t||""}
`,se=a.div`
    position: relative;
    z-index: 2;
`,ce=R.forwardRef(({text:t,$commonStyles:s,$verticalMargin:v,$marginBottom:d,onClick:g,$isFilling:x=!0,center:h=!1,$hoverRight:S=!1},m)=>h?p.jsx(gr,{children:p.jsxs(ae,{ref:m,$commonStyles:s,$hoverRight:S,$isFilling:x,$marginBottom:d,$verticalMargin:v,role:"button",onClick:C=>g&&g(C),children:[p.jsx(se,{children:t}),p.jsx(z,{})]})}):p.jsxs(ae,{ref:m,$commonStyles:s,$hoverRight:S,$isFilling:x,$marginBottom:d,$verticalMargin:v,role:"button",onClick:C=>g&&g(C),children:[p.jsx(se,{children:t}),p.jsx(z,{})]})),hr=w.motion(ce),Ar="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAASCAYAAABit09LAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABnSURBVHgB3ZLBDYAwCEXBCdxAR3AE3cCR3AQ3cQQdRSfAT+TgoRWv7Ut+SMgrJA1EH6hqi4z0Q9r1QZqchLIhg7euaJKxFiG5KKEE7Hv697ucmFottctL8nqY+USZkMNbHUVg2mwbbpE8/RFX/KsQAAAAAElFTkSuQmCC",{displayFlex:mr,justifySpaceBetween:br,alignItemsCenter:xr}=o.flexStyles,{pointer:Rr,selectNone:Sr}=o.commonStyles,{colorWhite:Er,fontFamilySofiaSansSemiCondensed:yr,textTransformUppercase:wr}=o.textStyles,Cr=a.div`
    ${yr}
    ${Er}
    ${Sr}
    ${({height:t,isOpenBlock:s})=>s?`height: ${t}px;`:"height: 58px;"}
    min-height: 63px;
    width: 100%;
    ${({isOpenBlock:t})=>t?"background: rgba(213, 98, 29, 1);":"background: rgba(213, 98, 29, 0.1);"}
    border-radius: 5px;
    overflow: hidden;
    margin-bottom: 20px;
    transition: all 0.25s linear;
`,Tr=a.div`
    ${mr}
    ${xr}
    ${br}
    ${Rr}
`,_r=a.div`
    ${wr}
    letter-spacing: 3px;
    font-weight: 700;
    font-size: 19px;
    padding: 22px 0 22px 40px;
`,jr=a.img`
    padding: 0 40px;
    width: 12px;
    height: 21px;
    transition: all 0.25s linear;
    transform: ${({isOpenBlock:t})=>t?"rotate(270deg);":"rotate(90deg);"};
`,kr=a.div`
    padding: 15px 0 15px 40px;
`,Or=R.forwardRef(({title:t,description:s,isOpenBlock:v,setOpenBlockIndex:d,index:g},x)=>{const h=R.useRef(null);R.useImperativeHandle(x,()=>h.current);const[S,m]=R.useState();return R.useEffect(()=>{var C;h.current&&m((C=h==null?void 0:h.current)==null?void 0:C.scrollHeight)},[]),p.jsxs(Cr,{ref:h,height:S??0,isOpenBlock:v,children:[p.jsxs(Tr,{onClick:()=>{d(g)},children:[p.jsx(_r,{children:t}),p.jsx(jr,{isOpenBlock:v,src:Ar})]}),p.jsx(kr,{children:s})]})}),Ir=w.motion(Or),Pr=R.memo(({descriptionBlocks:t,localStorageKey:s})=>{const[v,d]=R.useState((s?Number(localStorage.getItem(s)):0)||0),g=x=>{const h=typeof x=="function"?x(v):x;d(h),s&&localStorage.setItem(s,h.toString())};return p.jsx(w.motion.div,{initial:"hidden",whileInView:"visible",children:t.map(({title:x,description:h},S)=>p.jsx(Ir,{custom:S,description:h,index:S,isOpenBlock:S===v,setOpenBlockIndex:g,title:x},`${x} ${S}`))})}),Fr="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAOCAYAAAAi2ky3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADMSURBVHgBnZIBEcIwDEU7DgGVUAmVAA6QMAfUATgYDnYomIThYKCgOBgOSsolR66kZd27+7e2aZK/bEqtJISwA3WgOa63lckaHkfQAWRVLdh9DF88itClZAs6oXUirs/4SsQkWge5pDsRzwwW5/Sp9S7pzl04vNcL8ZYXyTGgSx1klxHLHUXLLbvsYwMWmzJF5tKQPw5YER/yjJT38x81TfNi2wFkVJ4HLTaqjP4Tv9UUeoL2oKsQv6sl4HwM27tFgxYKaeGMPsCFn78BwXmQVfQgM1gAAAAASUVORK5CYII=",$r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADSSURBVHgBnVMBEcIwDEynYBLmACSAApAwCTjYHAAKCgrAQZGAg87B5iAkUI40V3Kwv8ut958mn9zqELGBDybn3MQH4mv6dBSs85n5I+m3d3LKqUGCyBFz1EJbKc2ru17pseKukGMnznf4gjRZq+jz07ZyOco1KAe95Y75Ku1MuuSR92CAV6HcDRRrmcAuo+rYUSwVF9h9IbctdsV5CGCMcsL/ke1cFyyN/guiVbQxisbUtJ9T9FK45EXOoaAHBwbw9XtsKRaJ4qd3FTo/go24MjwAv5H2y3MxyG4AAAAASUVORK5CYII=",{displayFlex:Br,justifyCenter:Ur,alignItemsCenter:Dr}=o.flexStyles,{pointer:Yr,selectNone:Wr}=o.commonStyles,{fontFamilySofiaSansSemiCondensed:Vr,textTransformUppercase:Lr,colorWhite:Nr,textAlignCenter:Mr}=o.textStyles,le=a(w.motion.div)`
    background: #ff6200;
    top: 0;
    left: -405px;
    width: 400px;
    height: 50px;
    position: absolute;
    transition: all 0.5s linear;
    z-index: 1;
`,Qr=a(w.motion.div)`
    ${Vr}
    ${Wr}
  ${Lr}
  ${Nr}
  ${Yr}
  ${Mr}
  ${Br}
  ${Ur}
  ${Dr}
  position: relative;
    border: 2px solid #d5621d;
    border-radius: 5px;
    z-index: 2;

    width: 40px;
    height: 40px;
    box-sizing: border-box;
    font-weight: 700;
    font-size: 20px;
    transition: all 0.5s linear;
    overflow: hidden;

    &:hover {
        background: rgb(213, 98, 29);
    }

    &:hover ${le} {
        left: 0;
    }
`,Hr=a(w.motion.img)`
    position: relative;
    z-index: 2;
    width: 20px;
    height: 12px;
`,ue=R.forwardRef(({type:t},s)=>p.jsxs(Qr,{ref:s,children:[p.jsx(Hr,{src:t==="telegram"?Fr:$r}),p.jsx(le,{})]})),fe=R.forwardRef((t,s)=>p.jsx(ue,{ref:s,type:"telegram"})),zr=w.motion(fe),de=R.forwardRef((t,s)=>p.jsx(ue,{ref:s,type:"vk"})),Kr=w.motion(de);o.Button=ce,o.Container=Ne,o.Dividing=er,o.EmptyComponent=Me,o.MButton=hr,o.MTelegramIcon=zr,o.MTitle=ar,o.MVkIcon=Kr,o.MWhitePlate=qe,o.RetractableBlocks=Pr,o.TelegramIcon=fe,o.Title=ie,o.VkIcon=de,o.WhitePlate=oe,Object.defineProperty(o,Symbol.toStringTag,{value:"Module"})});
