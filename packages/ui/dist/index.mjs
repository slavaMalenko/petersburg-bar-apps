import y, { css as b } from "styled-components";
import Ue, { forwardRef as P, useRef as De, useImperativeHandle as Ye, useState as We, useEffect as wr, memo as Cr } from "react";
import { motion as S } from "framer-motion";
var Y;
((t) => {
  t.displayFlex = b`
        display: flex;
    `, t.justifySpaceBetween = b`
        justify-content: space-between;
    `, t.justifySpaceAround = b`
        justify-content: space-around;
    `, t.justifyCenter = b`
        justify-content: center;
    `, t.alignItemsCenter = b`
        align-items: center;
    `, t.flexDirectionColumn = b`
        flex-direction: column;
    `, t.flexWrap = b`
        flex-wrap: wrap;
    `;
})(Y || (Y = {}));
var I;
((t) => {
  t.pointer = b`
        cursor: pointer;
    `, t.cursorDefault = b`
        cursor: default;
    `, t.cursorGrab = b`
        cursor: grab;
    `, t.cursorGrabbing = b`
        cursor: grabbing;
    `, t.selectNone = b`
        user-select: none;
    `, t.overflowHidden = b`
        overflow: hidden;
    `, t.hoverFrame = b`
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
    `;
})(I || (I = {}));
var F;
((t) => {
  t.fontFamilySofiaSansSemiCondensed = b`
        font-family: 'Sofia Sans Semi Condensed', sans-serif;
    `, t.colorWhite = b`
        color: #fff;
    `, t.textAlignCenter = b`
        text-align: center;
    `, t.textTransformUppercase = b`
        text-transform: uppercase;
    `;
})(F || (F = {}));
var G = { exports: {} }, V = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var je;
function Sr() {
  if (je) return V;
  je = 1;
  var t = Ue, a = Symbol.for("react.element"), d = Symbol.for("react.fragment"), u = Object.prototype.hasOwnProperty, p = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, x = { key: !0, ref: !0, __self: !0, __source: !0 };
  function v(m, A, w) {
    var C, _ = {}, j = null, L = null;
    w !== void 0 && (j = "" + w), A.key !== void 0 && (j = "" + A.key), A.ref !== void 0 && (L = A.ref);
    for (C in A) u.call(A, C) && !x.hasOwnProperty(C) && (_[C] = A[C]);
    if (m && m.defaultProps) for (C in A = m.defaultProps, A) _[C] === void 0 && (_[C] = A[C]);
    return { $$typeof: a, type: m, key: j, ref: L, props: _, _owner: p.current };
  }
  return V.Fragment = d, V.jsx = v, V.jsxs = v, V;
}
var M = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function Tr() {
  return Oe || (Oe = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Ue, a = Symbol.for("react.element"), d = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), v = Symbol.for("react.provider"), m = Symbol.for("react.context"), A = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), C = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), oe = Symbol.iterator, Le = "@@iterator";
    function Ne(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = oe && e[oe] || e[Le];
      return typeof r == "function" ? r : null;
    }
    var B = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(e) {
      {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
          n[o - 1] = arguments[o];
        Qe("error", e, n);
      }
    }
    function Qe(e, r, n) {
      {
        var o = B.ReactDebugCurrentFrame, c = o.getStackAddendum();
        c !== "" && (r += "%s", n = n.concat([c]));
        var l = n.map(function(s) {
          return String(s);
        });
        l.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, l);
      }
    }
    var ze = !1, He = !1, Ke = !1, Ge = !1, Xe = !1, ae;
    ae = Symbol.for("react.module.reference");
    function qe(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === u || e === x || Xe || e === p || e === w || e === C || Ge || e === L || ze || He || Ke || typeof e == "object" && e !== null && (e.$$typeof === j || e.$$typeof === _ || e.$$typeof === v || e.$$typeof === m || e.$$typeof === A || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ae || e.getModuleId !== void 0));
    }
    function Je(e, r, n) {
      var o = e.displayName;
      if (o)
        return o;
      var c = r.displayName || r.name || "";
      return c !== "" ? n + "(" + c + ")" : n;
    }
    function ie(e) {
      return e.displayName || "Context";
    }
    function O(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case u:
          return "Fragment";
        case d:
          return "Portal";
        case x:
          return "Profiler";
        case p:
          return "StrictMode";
        case w:
          return "Suspense";
        case C:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            var r = e;
            return ie(r) + ".Consumer";
          case v:
            var n = e;
            return ie(n._context) + ".Provider";
          case A:
            return Je(e, e.render, "ForwardRef");
          case _:
            var o = e.displayName || null;
            return o !== null ? o : O(e.type) || "Memo";
          case j: {
            var c = e, l = c._payload, s = c._init;
            try {
              return O(s(l));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var k = Object.assign, W = 0, se, ce, le, ue, fe, de, pe;
    function ve() {
    }
    ve.__reactDisabledLog = !0;
    function Ze() {
      {
        if (W === 0) {
          se = console.log, ce = console.info, le = console.warn, ue = console.error, fe = console.group, de = console.groupCollapsed, pe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ve,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        W++;
      }
    }
    function er() {
      {
        if (W--, W === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: k({}, e, {
              value: se
            }),
            info: k({}, e, {
              value: ce
            }),
            warn: k({}, e, {
              value: le
            }),
            error: k({}, e, {
              value: ue
            }),
            group: k({}, e, {
              value: fe
            }),
            groupCollapsed: k({}, e, {
              value: de
            }),
            groupEnd: k({}, e, {
              value: pe
            })
          });
        }
        W < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var X = B.ReactCurrentDispatcher, q;
    function N(e, r, n) {
      {
        if (q === void 0)
          try {
            throw Error();
          } catch (c) {
            var o = c.stack.trim().match(/\n( *(at )?)/);
            q = o && o[1] || "";
          }
        return `
` + q + e;
      }
    }
    var J = !1, Q;
    {
      var rr = typeof WeakMap == "function" ? WeakMap : Map;
      Q = new rr();
    }
    function ge(e, r) {
      if (!e || J)
        return "";
      {
        var n = Q.get(e);
        if (n !== void 0)
          return n;
      }
      var o;
      J = !0;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var l;
      l = X.current, X.current = null, Ze();
      try {
        if (r) {
          var s = function() {
            throw Error();
          };
          if (Object.defineProperty(s.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(s, []);
            } catch ($) {
              o = $;
            }
            Reflect.construct(e, [], s);
          } else {
            try {
              s.call();
            } catch ($) {
              o = $;
            }
            e.call(s.prototype);
          }
        } else {
          try {
            throw Error();
          } catch ($) {
            o = $;
          }
          e();
        }
      } catch ($) {
        if ($ && o && typeof $.stack == "string") {
          for (var i = $.stack.split(`
`), R = o.stack.split(`
`), g = i.length - 1, h = R.length - 1; g >= 1 && h >= 0 && i[g] !== R[h]; )
            h--;
          for (; g >= 1 && h >= 0; g--, h--)
            if (i[g] !== R[h]) {
              if (g !== 1 || h !== 1)
                do
                  if (g--, h--, h < 0 || i[g] !== R[h]) {
                    var T = `
` + i[g].replace(" at new ", " at ");
                    return e.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", e.displayName)), typeof e == "function" && Q.set(e, T), T;
                  }
                while (g >= 1 && h >= 0);
              break;
            }
        }
      } finally {
        J = !1, X.current = l, er(), Error.prepareStackTrace = c;
      }
      var D = e ? e.displayName || e.name : "", $e = D ? N(D) : "";
      return typeof e == "function" && Q.set(e, $e), $e;
    }
    function tr(e, r, n) {
      return ge(e, !1);
    }
    function nr(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function z(e, r, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ge(e, nr(e));
      if (typeof e == "string")
        return N(e);
      switch (e) {
        case w:
          return N("Suspense");
        case C:
          return N("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case A:
            return tr(e.render);
          case _:
            return z(e.type, r, n);
          case j: {
            var o = e, c = o._payload, l = o._init;
            try {
              return z(l(c), r, n);
            } catch {
            }
          }
        }
      return "";
    }
    var H = Object.prototype.hasOwnProperty, Ae = {}, he = B.ReactDebugCurrentFrame;
    function K(e) {
      if (e) {
        var r = e._owner, n = z(e.type, e._source, r ? r.type : null);
        he.setExtraStackFrame(n);
      } else
        he.setExtraStackFrame(null);
    }
    function or(e, r, n, o, c) {
      {
        var l = Function.call.bind(H);
        for (var s in e)
          if (l(e, s)) {
            var i = void 0;
            try {
              if (typeof e[s] != "function") {
                var R = Error((o || "React class") + ": " + n + " type `" + s + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[s] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw R.name = "Invariant Violation", R;
              }
              i = e[s](r, s, o, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (g) {
              i = g;
            }
            i && !(i instanceof Error) && (K(c), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", n, s, typeof i), K(null)), i instanceof Error && !(i.message in Ae) && (Ae[i.message] = !0, K(c), E("Failed %s type: %s", n, i.message), K(null));
          }
      }
    }
    var ar = Array.isArray;
    function Z(e) {
      return ar(e);
    }
    function ir(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, n = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function sr(e) {
      try {
        return xe(e), !1;
      } catch {
        return !0;
      }
    }
    function xe(e) {
      return "" + e;
    }
    function be(e) {
      if (sr(e))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ir(e)), xe(e);
    }
    var me = B.ReactCurrentOwner, cr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ye, Re;
    function lr(e) {
      if (H.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ur(e) {
      if (H.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function fr(e, r) {
      typeof e.ref == "string" && me.current;
    }
    function dr(e, r) {
      {
        var n = function() {
          ye || (ye = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function pr(e, r) {
      {
        var n = function() {
          Re || (Re = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var vr = function(e, r, n, o, c, l, s) {
      var i = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: n,
        props: s,
        // Record the component responsible for creating this element.
        _owner: l
      };
      return i._store = {}, Object.defineProperty(i._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(i, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.defineProperty(i, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    };
    function gr(e, r, n, o, c) {
      {
        var l, s = {}, i = null, R = null;
        n !== void 0 && (be(n), i = "" + n), ur(r) && (be(r.key), i = "" + r.key), lr(r) && (R = r.ref, fr(r, c));
        for (l in r)
          H.call(r, l) && !cr.hasOwnProperty(l) && (s[l] = r[l]);
        if (e && e.defaultProps) {
          var g = e.defaultProps;
          for (l in g)
            s[l] === void 0 && (s[l] = g[l]);
        }
        if (i || R) {
          var h = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && dr(s, h), R && pr(s, h);
        }
        return vr(e, i, R, c, o, me.current, s);
      }
    }
    var ee = B.ReactCurrentOwner, Ee = B.ReactDebugCurrentFrame;
    function U(e) {
      if (e) {
        var r = e._owner, n = z(e.type, e._source, r ? r.type : null);
        Ee.setExtraStackFrame(n);
      } else
        Ee.setExtraStackFrame(null);
    }
    var re;
    re = !1;
    function te(e) {
      return typeof e == "object" && e !== null && e.$$typeof === a;
    }
    function we() {
      {
        if (ee.current) {
          var e = O(ee.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Ar(e) {
      return "";
    }
    var Ce = {};
    function hr(e) {
      {
        var r = we();
        if (!r) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (r = `

Check the top-level render call using <` + n + ">.");
        }
        return r;
      }
    }
    function Se(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = hr(r);
        if (Ce[n])
          return;
        Ce[n] = !0;
        var o = "";
        e && e._owner && e._owner !== ee.current && (o = " It was passed a child from " + O(e._owner.type) + "."), U(e), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, o), U(null);
      }
    }
    function Te(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Z(e))
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            te(o) && Se(o, r);
          }
        else if (te(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var c = Ne(e);
          if (typeof c == "function" && c !== e.entries)
            for (var l = c.call(e), s; !(s = l.next()).done; )
              te(s.value) && Se(s.value, r);
        }
      }
    }
    function xr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var n;
        if (typeof r == "function")
          n = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === A || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === _))
          n = r.propTypes;
        else
          return;
        if (n) {
          var o = O(r);
          or(n, e.props, "prop", o, e);
        } else if (r.PropTypes !== void 0 && !re) {
          re = !0;
          var c = O(r);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", c || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function br(e) {
      {
        for (var r = Object.keys(e.props), n = 0; n < r.length; n++) {
          var o = r[n];
          if (o !== "children" && o !== "key") {
            U(e), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), U(null);
            break;
          }
        }
        e.ref !== null && (U(e), E("Invalid attribute `ref` supplied to `React.Fragment`."), U(null));
      }
    }
    function _e(e, r, n, o, c, l) {
      {
        var s = qe(e);
        if (!s) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var R = Ar();
          R ? i += R : i += we();
          var g;
          e === null ? g = "null" : Z(e) ? g = "array" : e !== void 0 && e.$$typeof === a ? (g = "<" + (O(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : g = typeof e, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", g, i);
        }
        var h = gr(e, r, n, c, l);
        if (h == null)
          return h;
        if (s) {
          var T = r.children;
          if (T !== void 0)
            if (o)
              if (Z(T)) {
                for (var D = 0; D < T.length; D++)
                  Te(T[D], e);
                Object.freeze && Object.freeze(T);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Te(T, e);
        }
        return e === u ? br(h) : xr(h), h;
      }
    }
    function mr(e, r, n) {
      return _e(e, r, n, !0);
    }
    function yr(e, r, n) {
      return _e(e, r, n, !1);
    }
    var Rr = yr, Er = mr;
    M.Fragment = u, M.jsx = Rr, M.jsxs = Er;
  }()), M;
}
var ke;
function _r() {
  return ke || (ke = 1, process.env.NODE_ENV === "production" ? G.exports = Sr() : G.exports = Tr()), G.exports;
}
var f = _r(), Ie;
((t) => {
  t.getAnimateBlock = ({
    block: a,
    custom: d,
    children: u,
    animation: p,
    props: x = {}
  }) => {
    const v = a;
    return /* @__PURE__ */ f.jsx(v, { custom: d, variants: p, ...x, children: u && u });
  };
})(Ie || (Ie = {}));
var Fe;
((t) => {
  t.appearanceOnTheLeft = (a = 1, d = 0.1, u = 0.5) => ({
    hidden: {
      x: -100,
      opacity: 0
    },
    visible: (p) => ({
      x: 0,
      opacity: a,
      transition: { type: "tween", delay: p * d, duration: u }
    })
  }), t.appearanceOnTheRight = (a = 1, d = 0.1, u = 0.5) => ({
    hidden: {
      x: 100,
      opacity: 0
    },
    visible: (p) => ({
      x: 0,
      opacity: a,
      transition: { type: "tween", delay: p * d, duration: u }
    })
  }), t.appearanceOnTheTop = (a = 1, d = 0.1) => ({
    hidden: {
      y: -100,
      opacity: 0
    },
    visible: (u) => ({
      y: 0,
      opacity: a,
      transition: { delay: u * d }
    })
  });
})(Fe || (Fe = {}));
const $r = y.div`
    width: 100%;
    max-width: 1220px;
    margin: 0 auto;
    padding: 0 10px;
`, Pt = ({ children: t }) => /* @__PURE__ */ f.jsx($r, { children: t }), Bt = () => /* @__PURE__ */ f.jsx("div", { children: "EmptyComponent" }), { displayFlex: jr, justifyCenter: Or } = Y, { textTransformUppercase: kr, fontFamilySofiaSansSemiCondensed: Ir } = F, { selectNone: Fr, pointer: Pr } = I, Br = y.div`
    ${jr}
    ${Or}
`, Ur = y(S.span)`
    ${kr}
    ${Fr}
    display: inline-block;
    padding: 10px 20px;
    text-align: center;
    background-color: #fff;
    font-weight: 700;
    font-size: 20px;
    border-radius: 5px;
    transition: all 0.2s linear;
    ${({ $commonStyles: t }) => t || ""}
    ${Ir}
    ${Pr}
`, Dr = P(
  ({ scrollToTitle: t = !1, title: a, $commonStyles: d }, u) => {
    const p = De(null);
    return Ye(u, () => p.current), /* @__PURE__ */ f.jsx(Br, { children: /* @__PURE__ */ f.jsx(
      Ur,
      {
        ref: p,
        $commonStyles: d,
        onClick: () => {
          t && p.current && window.scrollTo({
            top: p.current.offsetTop - 30,
            behavior: "smooth"
          });
        },
        children: a
      }
    ) });
  }
), Ut = S(Dr), Dt = y.div`
    width: 100%;
    height: 1px;
    background: #fff;
    margin: 20px 0;
`, { colorWhite: Yr, textTransformUppercase: Wr, fontFamilySofiaSansSemiCondensed: Vr, textAlignCenter: Mr } = F, Lr = y(S.h1)`
    letter-spacing: 3px;
    font-size: 45px;
    font-weight: 900;
    margin-top: 20px;
    margin-bottom: 20px;
    ${I.selectNone};
    ${Mr};
    ${Vr};
    ${Wr};
    ${({ $commonStyles: t }) => t || ""};
    ${({ isColorWhite: t = !0 }) => t ? Yr : ""};
`, Nr = P(({ text: t, $commonStyles: a, isColorWhite: d }, u) => /* @__PURE__ */ f.jsx(Lr, { ref: u, $commonStyles: a, isColorWhite: d, children: t })), Yt = S(Nr), { displayFlex: Qr, justifyCenter: zr } = Y, { selectNone: Hr, pointer: Kr } = I, { colorWhite: Gr, textTransformUppercase: Xr, fontFamilySofiaSansSemiCondensed: qr, textAlignCenter: Jr } = F, Zr = y.div`
    ${Qr}
    ${zr}
`, ne = y.div`
    background: #ff6200;
    top: 0;
    left: -405px;
    width: 400px;
    height: 50px;
    position: absolute;
    transition: all 0.3s linear;
    z-index: 1;
`, Pe = y(S.div)`
    ${qr}
    ${Hr}
    ${Xr}
    ${Gr}
    ${Kr}
    ${Jr}
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
        background: ${({ $isFilling: t }) => t ? "#ff6200" : "rgb(213, 98, 29)"};
    }

    ${({ $hoverRight: t }) => t ? `&:hover ${ne} { left: 0; }` : ""}
    ${({ $isFilling: t, $hoverRight: a }) => t && !a ? "background: rgb(213, 98, 29);" : ""}
    ${({ $verticalMargin: t }) => t ? `margin: ${t}px 0;` : ""}
    ${({ $marginBottom: t }) => t ? `margin-bottom: ${t}px;` : ""}
    ${({ $commonStyles: t }) => t || ""}
`, Be = y.div`
    position: relative;
    z-index: 2;
`, et = P(
  ({
    text: t,
    $commonStyles: a,
    $verticalMargin: d,
    $marginBottom: u,
    onClick: p,
    $isFilling: x = !0,
    center: v = !1,
    $hoverRight: m = !1
  }, A) => v ? /* @__PURE__ */ f.jsx(Zr, { children: /* @__PURE__ */ f.jsxs(
    Pe,
    {
      ref: A,
      $commonStyles: a,
      $hoverRight: m,
      $isFilling: x,
      $marginBottom: u,
      $verticalMargin: d,
      role: "button",
      onClick: (w) => p && p(w),
      children: [
        /* @__PURE__ */ f.jsx(Be, { children: t }),
        /* @__PURE__ */ f.jsx(ne, {})
      ]
    }
  ) }) : /* @__PURE__ */ f.jsxs(
    Pe,
    {
      ref: A,
      $commonStyles: a,
      $hoverRight: m,
      $isFilling: x,
      $marginBottom: u,
      $verticalMargin: d,
      role: "button",
      onClick: (w) => p && p(w),
      children: [
        /* @__PURE__ */ f.jsx(Be, { children: t }),
        /* @__PURE__ */ f.jsx(ne, {})
      ]
    }
  )
), Wt = S(et), rt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAASCAYAAABit09LAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABnSURBVHgB3ZLBDYAwCEXBCdxAR3AE3cCR3AQ3cQQdRSfAT+TgoRWv7Ut+SMgrJA1EH6hqi4z0Q9r1QZqchLIhg7euaJKxFiG5KKEE7Hv697ucmFottctL8nqY+USZkMNbHUVg2mwbbpE8/RFX/KsQAAAAAElFTkSuQmCC", { displayFlex: tt, justifySpaceBetween: nt, alignItemsCenter: ot } = Y, { pointer: at, selectNone: it } = I, { colorWhite: st, fontFamilySofiaSansSemiCondensed: ct, textTransformUppercase: lt } = F, ut = y.div`
    ${ct}
    ${st}
    ${it}
    ${({ height: t, isOpenBlock: a }) => a ? `height: ${t}px;` : "height: 58px;"}
    min-height: 63px;
    width: 100%;
    ${({ isOpenBlock: t }) => t ? "background: rgba(213, 98, 29, 1);" : "background: rgba(213, 98, 29, 0.1);"}
    border-radius: 5px;
    overflow: hidden;
    margin-bottom: 20px;
    transition: all 0.25s linear;
`, ft = y.div`
    ${tt}
    ${ot}
    ${nt}
    ${at}
`, dt = y.div`
    ${lt}
    letter-spacing: 3px;
    font-weight: 700;
    font-size: 19px;
    padding: 22px 0 22px 40px;
`, pt = y.img`
    padding: 0 40px;
    width: 12px;
    height: 21px;
    transition: all 0.25s linear;
    transform: ${({ isOpenBlock: t }) => t ? "rotate(270deg);" : "rotate(90deg);"};
`, vt = y.div`
    padding: 15px 0 15px 40px;
`, gt = P(
  ({ title: t, description: a, isOpenBlock: d, setOpenBlockIndex: u, index: p }, x) => {
    const v = De(null);
    Ye(x, () => v.current);
    const [m, A] = We();
    return wr(() => {
      var w;
      v.current && A((w = v == null ? void 0 : v.current) == null ? void 0 : w.scrollHeight);
    }, []), /* @__PURE__ */ f.jsxs(ut, { ref: v, height: m ?? 0, isOpenBlock: d, children: [
      /* @__PURE__ */ f.jsxs(
        ft,
        {
          onClick: () => {
            u(p);
          },
          children: [
            /* @__PURE__ */ f.jsx(dt, { children: t }),
            /* @__PURE__ */ f.jsx(pt, { isOpenBlock: d, src: rt })
          ]
        }
      ),
      /* @__PURE__ */ f.jsx(vt, { children: a })
    ] });
  }
), At = S(gt), Vt = Cr(({ descriptionBlocks: t, localStorageKey: a }) => {
  const [d, u] = We(
    (a ? Number(localStorage.getItem(a)) : 0) || 0
  ), p = (x) => {
    const v = typeof x == "function" ? x(d) : x;
    u(v), a && localStorage.setItem(a, v.toString());
  };
  return /* @__PURE__ */ f.jsx(S.div, { initial: "hidden", whileInView: "visible", children: t.map(({ title: x, description: v }, m) => /* @__PURE__ */ f.jsx(
    At,
    {
      custom: m,
      description: v,
      index: m,
      isOpenBlock: m === d,
      setOpenBlockIndex: p,
      title: x
    },
    `${x} ${m}`
  )) });
}), ht = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAOCAYAAAAi2ky3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADMSURBVHgBnZIBEcIwDEU7DgGVUAmVAA6QMAfUATgYDnYomIThYKCgOBgOSsolR66kZd27+7e2aZK/bEqtJISwA3WgOa63lckaHkfQAWRVLdh9DF88itClZAs6oXUirs/4SsQkWge5pDsRzwwW5/Sp9S7pzl04vNcL8ZYXyTGgSx1klxHLHUXLLbvsYwMWmzJF5tKQPw5YER/yjJT38x81TfNi2wFkVJ4HLTaqjP4Tv9UUeoL2oKsQv6sl4HwM27tFgxYKaeGMPsCFn78BwXmQVfQgM1gAAAAASUVORK5CYII=", xt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADSSURBVHgBnVMBEcIwDEynYBLmACSAApAwCTjYHAAKCgrAQZGAg87B5iAkUI40V3Kwv8ut958mn9zqELGBDybn3MQH4mv6dBSs85n5I+m3d3LKqUGCyBFz1EJbKc2ru17pseKukGMnznf4gjRZq+jz07ZyOco1KAe95Y75Ku1MuuSR92CAV6HcDRRrmcAuo+rYUSwVF9h9IbctdsV5CGCMcsL/ke1cFyyN/guiVbQxisbUtJ9T9FK45EXOoaAHBwbw9XtsKRaJ4qd3FTo/go24MjwAv5H2y3MxyG4AAAAASUVORK5CYII=", { displayFlex: bt, justifyCenter: mt, alignItemsCenter: yt } = Y, { pointer: Rt, selectNone: Et } = I, { fontFamilySofiaSansSemiCondensed: wt, textTransformUppercase: Ct, colorWhite: St, textAlignCenter: Tt } = F, Ve = y(S.div)`
    background: #ff6200;
    top: 0;
    left: -405px;
    width: 400px;
    height: 50px;
    position: absolute;
    transition: all 0.5s linear;
    z-index: 1;
`, _t = y(S.div)`
    ${wt}
    ${Et}
  ${Ct}
  ${St}
  ${Rt}
  ${Tt}
  ${bt}
  ${mt}
  ${yt}
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

    &:hover ${Ve} {
        left: 0;
    }
`, $t = y(S.img)`
    position: relative;
    z-index: 2;
    width: 20px;
    height: 12px;
`, Me = P(({ type: t }, a) => /* @__PURE__ */ f.jsxs(_t, { ref: a, children: [
  /* @__PURE__ */ f.jsx($t, { src: t === "telegram" ? ht : xt }),
  /* @__PURE__ */ f.jsx(Ve, {})
] })), jt = P((t, a) => /* @__PURE__ */ f.jsx(Me, { ref: a, type: "telegram" })), Mt = S(jt), Ot = P((t, a) => /* @__PURE__ */ f.jsx(Me, { ref: a, type: "vk" })), Lt = S(Ot);
export {
  et as Button,
  Pt as Container,
  Dt as Dividing,
  Bt as EmptyComponent,
  Wt as MButton,
  Mt as MTelegramIcon,
  Yt as MTitle,
  Lt as MVkIcon,
  Ut as MWhitePlate,
  Vt as RetractableBlocks,
  jt as TelegramIcon,
  Nr as Title,
  Ot as VkIcon,
  Dr as WhitePlate,
  Ie as animationBlock,
  Fe as animationVariants,
  I as commonStyles,
  Y as flexStyles,
  F as textStyles
};
