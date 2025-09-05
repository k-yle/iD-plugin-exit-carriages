function F0(l, o) {
  for (var s = 0; s < o.length; s++) {
    const r = o[s];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const u in r)
        if (u !== "default" && !(u in l)) {
          const f = Object.getOwnPropertyDescriptor(r, u);
          f && Object.defineProperty(l, u, f.get ? f : {
            enumerable: !0,
            get: () => r[u]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(l, Symbol.toStringTag, { value: "Module" }));
}
function yy(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l;
}
var Eu = { exports: {} }, yi = {};
var Eh;
function I0() {
  if (Eh) return yi;
  Eh = 1;
  var l = Symbol.for("react.transitional.element"), o = Symbol.for("react.fragment");
  function s(r, u, f) {
    var d = null;
    if (f !== void 0 && (d = "" + f), u.key !== void 0 && (d = "" + u.key), "key" in u) {
      f = {};
      for (var p in u)
        p !== "key" && (f[p] = u[p]);
    } else f = u;
    return u = f.ref, {
      $$typeof: l,
      type: r,
      key: d,
      ref: u !== void 0 ? u : null,
      props: f
    };
  }
  return yi.Fragment = o, yi.jsx = s, yi.jsxs = s, yi;
}
var Ch;
function tb() {
  return Ch || (Ch = 1, Eu.exports = I0()), Eu.exports;
}
var w = tb(), Cu = { exports: {} }, vi = {}, Ru = { exports: {} }, Au = {};
var Rh;
function eb() {
  return Rh || (Rh = 1, (function(l) {
    function o(U, F) {
      var V = U.length;
      U.push(F);
      t: for (; 0 < V; ) {
        var et = V - 1 >>> 1, C = U[et];
        if (0 < u(C, F))
          U[et] = F, U[V] = C, V = et;
        else break t;
      }
    }
    function s(U) {
      return U.length === 0 ? null : U[0];
    }
    function r(U) {
      if (U.length === 0) return null;
      var F = U[0], V = U.pop();
      if (V !== F) {
        U[0] = V;
        t: for (var et = 0, C = U.length, G = C >>> 1; et < G; ) {
          var lt = 2 * (et + 1) - 1, nt = U[lt], I = lt + 1, ht = U[I];
          if (0 > u(nt, V))
            I < C && 0 > u(ht, nt) ? (U[et] = ht, U[I] = V, et = I) : (U[et] = nt, U[lt] = V, et = lt);
          else if (I < C && 0 > u(ht, V))
            U[et] = ht, U[I] = V, et = I;
          else break t;
        }
      }
      return F;
    }
    function u(U, F) {
      var V = U.sortIndex - F.sortIndex;
      return V !== 0 ? V : U.id - F.id;
    }
    if (l.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var f = performance;
      l.unstable_now = function() {
        return f.now();
      };
    } else {
      var d = Date, p = d.now();
      l.unstable_now = function() {
        return d.now() - p;
      };
    }
    var y = [], h = [], g = 1, S = null, b = 3, x = !1, R = !1, _ = !1, M = typeof setTimeout == "function" ? setTimeout : null, j = typeof clearTimeout == "function" ? clearTimeout : null, B = typeof setImmediate < "u" ? setImmediate : null;
    function H(U) {
      for (var F = s(h); F !== null; ) {
        if (F.callback === null) r(h);
        else if (F.startTime <= U)
          r(h), F.sortIndex = F.expirationTime, o(y, F);
        else break;
        F = s(h);
      }
    }
    function $(U) {
      if (_ = !1, H(U), !R)
        if (s(y) !== null)
          R = !0, ot();
        else {
          var F = s(h);
          F !== null && ft($, F.startTime - U);
        }
    }
    var q = !1, k = -1, W = 5, J = -1;
    function Z() {
      return !(l.unstable_now() - J < W);
    }
    function P() {
      if (q) {
        var U = l.unstable_now();
        J = U;
        var F = !0;
        try {
          t: {
            R = !1, _ && (_ = !1, j(k), k = -1), x = !0;
            var V = b;
            try {
              e: {
                for (H(U), S = s(y); S !== null && !(S.expirationTime > U && Z()); ) {
                  var et = S.callback;
                  if (typeof et == "function") {
                    S.callback = null, b = S.priorityLevel;
                    var C = et(
                      S.expirationTime <= U
                    );
                    if (U = l.unstable_now(), typeof C == "function") {
                      S.callback = C, H(U), F = !0;
                      break e;
                    }
                    S === s(y) && r(y), H(U);
                  } else r(y);
                  S = s(y);
                }
                if (S !== null) F = !0;
                else {
                  var G = s(h);
                  G !== null && ft(
                    $,
                    G.startTime - U
                  ), F = !1;
                }
              }
              break t;
            } finally {
              S = null, b = V, x = !1;
            }
            F = void 0;
          }
        } finally {
          F ? it() : q = !1;
        }
      }
    }
    var it;
    if (typeof B == "function")
      it = function() {
        B(P);
      };
    else if (typeof MessageChannel < "u") {
      var ct = new MessageChannel(), dt = ct.port2;
      ct.port1.onmessage = P, it = function() {
        dt.postMessage(null);
      };
    } else
      it = function() {
        M(P, 0);
      };
    function ot() {
      q || (q = !0, it());
    }
    function ft(U, F) {
      k = M(function() {
        U(l.unstable_now());
      }, F);
    }
    l.unstable_IdlePriority = 5, l.unstable_ImmediatePriority = 1, l.unstable_LowPriority = 4, l.unstable_NormalPriority = 3, l.unstable_Profiling = null, l.unstable_UserBlockingPriority = 2, l.unstable_cancelCallback = function(U) {
      U.callback = null;
    }, l.unstable_continueExecution = function() {
      R || x || (R = !0, ot());
    }, l.unstable_forceFrameRate = function(U) {
      0 > U || 125 < U ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : W = 0 < U ? Math.floor(1e3 / U) : 5;
    }, l.unstable_getCurrentPriorityLevel = function() {
      return b;
    }, l.unstable_getFirstCallbackNode = function() {
      return s(y);
    }, l.unstable_next = function(U) {
      switch (b) {
        case 1:
        case 2:
        case 3:
          var F = 3;
          break;
        default:
          F = b;
      }
      var V = b;
      b = F;
      try {
        return U();
      } finally {
        b = V;
      }
    }, l.unstable_pauseExecution = function() {
    }, l.unstable_requestPaint = function() {
    }, l.unstable_runWithPriority = function(U, F) {
      switch (U) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          U = 3;
      }
      var V = b;
      b = U;
      try {
        return F();
      } finally {
        b = V;
      }
    }, l.unstable_scheduleCallback = function(U, F, V) {
      var et = l.unstable_now();
      switch (typeof V == "object" && V !== null ? (V = V.delay, V = typeof V == "number" && 0 < V ? et + V : et) : V = et, U) {
        case 1:
          var C = -1;
          break;
        case 2:
          C = 250;
          break;
        case 5:
          C = 1073741823;
          break;
        case 4:
          C = 1e4;
          break;
        default:
          C = 5e3;
      }
      return C = V + C, U = {
        id: g++,
        callback: F,
        priorityLevel: U,
        startTime: V,
        expirationTime: C,
        sortIndex: -1
      }, V > et ? (U.sortIndex = V, o(h, U), s(y) === null && U === s(h) && (_ ? (j(k), k = -1) : _ = !0, ft($, V - et))) : (U.sortIndex = C, o(y, U), R || x || (R = !0, ot())), U;
    }, l.unstable_shouldYield = Z, l.unstable_wrapCallback = function(U) {
      var F = b;
      return function() {
        var V = b;
        b = F;
        try {
          return U.apply(this, arguments);
        } finally {
          b = V;
        }
      };
    };
  })(Au)), Au;
}
var Ah;
function nb() {
  return Ah || (Ah = 1, Ru.exports = eb()), Ru.exports;
}
var Du = { exports: {} }, gt = {};
var Dh;
function lb() {
  if (Dh) return gt;
  Dh = 1;
  var l = Symbol.for("react.transitional.element"), o = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), f = Symbol.for("react.consumer"), d = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), h = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), S = Symbol.iterator;
  function b(C) {
    return C === null || typeof C != "object" ? null : (C = S && C[S] || C["@@iterator"], typeof C == "function" ? C : null);
  }
  var x = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, R = Object.assign, _ = {};
  function M(C, G, lt) {
    this.props = C, this.context = G, this.refs = _, this.updater = lt || x;
  }
  M.prototype.isReactComponent = {}, M.prototype.setState = function(C, G) {
    if (typeof C != "object" && typeof C != "function" && C != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, C, G, "setState");
  }, M.prototype.forceUpdate = function(C) {
    this.updater.enqueueForceUpdate(this, C, "forceUpdate");
  };
  function j() {
  }
  j.prototype = M.prototype;
  function B(C, G, lt) {
    this.props = C, this.context = G, this.refs = _, this.updater = lt || x;
  }
  var H = B.prototype = new j();
  H.constructor = B, R(H, M.prototype), H.isPureReactComponent = !0;
  var $ = Array.isArray, q = { H: null, A: null, T: null, S: null }, k = Object.prototype.hasOwnProperty;
  function W(C, G, lt, nt, I, ht) {
    return lt = ht.ref, {
      $$typeof: l,
      type: C,
      key: G,
      ref: lt !== void 0 ? lt : null,
      props: ht
    };
  }
  function J(C, G) {
    return W(
      C.type,
      G,
      void 0,
      void 0,
      void 0,
      C.props
    );
  }
  function Z(C) {
    return typeof C == "object" && C !== null && C.$$typeof === l;
  }
  function P(C) {
    var G = { "=": "=0", ":": "=2" };
    return "$" + C.replace(/[=:]/g, function(lt) {
      return G[lt];
    });
  }
  var it = /\/+/g;
  function ct(C, G) {
    return typeof C == "object" && C !== null && C.key != null ? P("" + C.key) : G.toString(36);
  }
  function dt() {
  }
  function ot(C) {
    switch (C.status) {
      case "fulfilled":
        return C.value;
      case "rejected":
        throw C.reason;
      default:
        switch (typeof C.status == "string" ? C.then(dt, dt) : (C.status = "pending", C.then(
          function(G) {
            C.status === "pending" && (C.status = "fulfilled", C.value = G);
          },
          function(G) {
            C.status === "pending" && (C.status = "rejected", C.reason = G);
          }
        )), C.status) {
          case "fulfilled":
            return C.value;
          case "rejected":
            throw C.reason;
        }
    }
    throw C;
  }
  function ft(C, G, lt, nt, I) {
    var ht = typeof C;
    (ht === "undefined" || ht === "boolean") && (C = null);
    var tt = !1;
    if (C === null) tt = !0;
    else
      switch (ht) {
        case "bigint":
        case "string":
        case "number":
          tt = !0;
          break;
        case "object":
          switch (C.$$typeof) {
            case l:
            case o:
              tt = !0;
              break;
            case g:
              return tt = C._init, ft(
                tt(C._payload),
                G,
                lt,
                nt,
                I
              );
          }
      }
    if (tt)
      return I = I(C), tt = nt === "" ? "." + ct(C, 0) : nt, $(I) ? (lt = "", tt != null && (lt = tt.replace(it, "$&/") + "/"), ft(I, G, lt, "", function(zt) {
        return zt;
      })) : I != null && (Z(I) && (I = J(
        I,
        lt + (I.key == null || C && C.key === I.key ? "" : ("" + I.key).replace(
          it,
          "$&/"
        ) + "/") + tt
      )), G.push(I)), 1;
    tt = 0;
    var Nt = nt === "" ? "." : nt + ":";
    if ($(C))
      for (var bt = 0; bt < C.length; bt++)
        nt = C[bt], ht = Nt + ct(nt, bt), tt += ft(
          nt,
          G,
          lt,
          ht,
          I
        );
    else if (bt = b(C), typeof bt == "function")
      for (C = bt.call(C), bt = 0; !(nt = C.next()).done; )
        nt = nt.value, ht = Nt + ct(nt, bt++), tt += ft(
          nt,
          G,
          lt,
          ht,
          I
        );
    else if (ht === "object") {
      if (typeof C.then == "function")
        return ft(
          ot(C),
          G,
          lt,
          nt,
          I
        );
      throw G = String(C), Error(
        "Objects are not valid as a React child (found: " + (G === "[object Object]" ? "object with keys {" + Object.keys(C).join(", ") + "}" : G) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return tt;
  }
  function U(C, G, lt) {
    if (C == null) return C;
    var nt = [], I = 0;
    return ft(C, nt, "", "", function(ht) {
      return G.call(lt, ht, I++);
    }), nt;
  }
  function F(C) {
    if (C._status === -1) {
      var G = C._result;
      G = G(), G.then(
        function(lt) {
          (C._status === 0 || C._status === -1) && (C._status = 1, C._result = lt);
        },
        function(lt) {
          (C._status === 0 || C._status === -1) && (C._status = 2, C._result = lt);
        }
      ), C._status === -1 && (C._status = 0, C._result = G);
    }
    if (C._status === 1) return C._result.default;
    throw C._result;
  }
  var V = typeof reportError == "function" ? reportError : function(C) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var G = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof C == "object" && C !== null && typeof C.message == "string" ? String(C.message) : String(C),
        error: C
      });
      if (!window.dispatchEvent(G)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", C);
      return;
    }
    console.error(C);
  };
  function et() {
  }
  return gt.Children = {
    map: U,
    forEach: function(C, G, lt) {
      U(
        C,
        function() {
          G.apply(this, arguments);
        },
        lt
      );
    },
    count: function(C) {
      var G = 0;
      return U(C, function() {
        G++;
      }), G;
    },
    toArray: function(C) {
      return U(C, function(G) {
        return G;
      }) || [];
    },
    only: function(C) {
      if (!Z(C))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return C;
    }
  }, gt.Component = M, gt.Fragment = s, gt.Profiler = u, gt.PureComponent = B, gt.StrictMode = r, gt.Suspense = y, gt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = q, gt.act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, gt.cache = function(C) {
    return function() {
      return C.apply(null, arguments);
    };
  }, gt.cloneElement = function(C, G, lt) {
    if (C == null)
      throw Error(
        "The argument must be a React element, but you passed " + C + "."
      );
    var nt = R({}, C.props), I = C.key, ht = void 0;
    if (G != null)
      for (tt in G.ref !== void 0 && (ht = void 0), G.key !== void 0 && (I = "" + G.key), G)
        !k.call(G, tt) || tt === "key" || tt === "__self" || tt === "__source" || tt === "ref" && G.ref === void 0 || (nt[tt] = G[tt]);
    var tt = arguments.length - 2;
    if (tt === 1) nt.children = lt;
    else if (1 < tt) {
      for (var Nt = Array(tt), bt = 0; bt < tt; bt++)
        Nt[bt] = arguments[bt + 2];
      nt.children = Nt;
    }
    return W(C.type, I, void 0, void 0, ht, nt);
  }, gt.createContext = function(C) {
    return C = {
      $$typeof: d,
      _currentValue: C,
      _currentValue2: C,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, C.Provider = C, C.Consumer = {
      $$typeof: f,
      _context: C
    }, C;
  }, gt.createElement = function(C, G, lt) {
    var nt, I = {}, ht = null;
    if (G != null)
      for (nt in G.key !== void 0 && (ht = "" + G.key), G)
        k.call(G, nt) && nt !== "key" && nt !== "__self" && nt !== "__source" && (I[nt] = G[nt]);
    var tt = arguments.length - 2;
    if (tt === 1) I.children = lt;
    else if (1 < tt) {
      for (var Nt = Array(tt), bt = 0; bt < tt; bt++)
        Nt[bt] = arguments[bt + 2];
      I.children = Nt;
    }
    if (C && C.defaultProps)
      for (nt in tt = C.defaultProps, tt)
        I[nt] === void 0 && (I[nt] = tt[nt]);
    return W(C, ht, void 0, void 0, null, I);
  }, gt.createRef = function() {
    return { current: null };
  }, gt.forwardRef = function(C) {
    return { $$typeof: p, render: C };
  }, gt.isValidElement = Z, gt.lazy = function(C) {
    return {
      $$typeof: g,
      _payload: { _status: -1, _result: C },
      _init: F
    };
  }, gt.memo = function(C, G) {
    return {
      $$typeof: h,
      type: C,
      compare: G === void 0 ? null : G
    };
  }, gt.startTransition = function(C) {
    var G = q.T, lt = {};
    q.T = lt;
    try {
      var nt = C(), I = q.S;
      I !== null && I(lt, nt), typeof nt == "object" && nt !== null && typeof nt.then == "function" && nt.then(et, V);
    } catch (ht) {
      V(ht);
    } finally {
      q.T = G;
    }
  }, gt.unstable_useCacheRefresh = function() {
    return q.H.useCacheRefresh();
  }, gt.use = function(C) {
    return q.H.use(C);
  }, gt.useActionState = function(C, G, lt) {
    return q.H.useActionState(C, G, lt);
  }, gt.useCallback = function(C, G) {
    return q.H.useCallback(C, G);
  }, gt.useContext = function(C) {
    return q.H.useContext(C);
  }, gt.useDebugValue = function() {
  }, gt.useDeferredValue = function(C, G) {
    return q.H.useDeferredValue(C, G);
  }, gt.useEffect = function(C, G) {
    return q.H.useEffect(C, G);
  }, gt.useId = function() {
    return q.H.useId();
  }, gt.useImperativeHandle = function(C, G, lt) {
    return q.H.useImperativeHandle(C, G, lt);
  }, gt.useInsertionEffect = function(C, G) {
    return q.H.useInsertionEffect(C, G);
  }, gt.useLayoutEffect = function(C, G) {
    return q.H.useLayoutEffect(C, G);
  }, gt.useMemo = function(C, G) {
    return q.H.useMemo(C, G);
  }, gt.useOptimistic = function(C, G) {
    return q.H.useOptimistic(C, G);
  }, gt.useReducer = function(C, G, lt) {
    return q.H.useReducer(C, G, lt);
  }, gt.useRef = function(C) {
    return q.H.useRef(C);
  }, gt.useState = function(C) {
    return q.H.useState(C);
  }, gt.useSyncExternalStore = function(C, G, lt) {
    return q.H.useSyncExternalStore(
      C,
      G,
      lt
    );
  }, gt.useTransition = function() {
    return q.H.useTransition();
  }, gt.version = "19.0.0", gt;
}
var Oh;
function Pu() {
  return Oh || (Oh = 1, Du.exports = lb()), Du.exports;
}
var Ou = { exports: {} }, xe = {};
var _h;
function ab() {
  if (_h) return xe;
  _h = 1;
  var l = Pu();
  function o(y) {
    var h = "https://react.dev/errors/" + y;
    if (1 < arguments.length) {
      h += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var g = 2; g < arguments.length; g++)
        h += "&args[]=" + encodeURIComponent(arguments[g]);
    }
    return "Minified React error #" + y + "; visit " + h + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function s() {
  }
  var r = {
    d: {
      f: s,
      r: function() {
        throw Error(o(522));
      },
      D: s,
      C: s,
      L: s,
      m: s,
      X: s,
      S: s,
      M: s
    },
    p: 0,
    findDOMNode: null
  }, u = Symbol.for("react.portal");
  function f(y, h, g) {
    var S = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: u,
      key: S == null ? null : "" + S,
      children: y,
      containerInfo: h,
      implementation: g
    };
  }
  var d = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(y, h) {
    if (y === "font") return "";
    if (typeof h == "string")
      return h === "use-credentials" ? h : "";
  }
  return xe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, xe.createPortal = function(y, h) {
    var g = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!h || h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11)
      throw Error(o(299));
    return f(y, h, null, g);
  }, xe.flushSync = function(y) {
    var h = d.T, g = r.p;
    try {
      if (d.T = null, r.p = 2, y) return y();
    } finally {
      d.T = h, r.p = g, r.d.f();
    }
  }, xe.preconnect = function(y, h) {
    typeof y == "string" && (h ? (h = h.crossOrigin, h = typeof h == "string" ? h === "use-credentials" ? h : "" : void 0) : h = null, r.d.C(y, h));
  }, xe.prefetchDNS = function(y) {
    typeof y == "string" && r.d.D(y);
  }, xe.preinit = function(y, h) {
    if (typeof y == "string" && h && typeof h.as == "string") {
      var g = h.as, S = p(g, h.crossOrigin), b = typeof h.integrity == "string" ? h.integrity : void 0, x = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
      g === "style" ? r.d.S(
        y,
        typeof h.precedence == "string" ? h.precedence : void 0,
        {
          crossOrigin: S,
          integrity: b,
          fetchPriority: x
        }
      ) : g === "script" && r.d.X(y, {
        crossOrigin: S,
        integrity: b,
        fetchPriority: x,
        nonce: typeof h.nonce == "string" ? h.nonce : void 0
      });
    }
  }, xe.preinitModule = function(y, h) {
    if (typeof y == "string")
      if (typeof h == "object" && h !== null) {
        if (h.as == null || h.as === "script") {
          var g = p(
            h.as,
            h.crossOrigin
          );
          r.d.M(y, {
            crossOrigin: g,
            integrity: typeof h.integrity == "string" ? h.integrity : void 0,
            nonce: typeof h.nonce == "string" ? h.nonce : void 0
          });
        }
      } else h == null && r.d.M(y);
  }, xe.preload = function(y, h) {
    if (typeof y == "string" && typeof h == "object" && h !== null && typeof h.as == "string") {
      var g = h.as, S = p(g, h.crossOrigin);
      r.d.L(y, g, {
        crossOrigin: S,
        integrity: typeof h.integrity == "string" ? h.integrity : void 0,
        nonce: typeof h.nonce == "string" ? h.nonce : void 0,
        type: typeof h.type == "string" ? h.type : void 0,
        fetchPriority: typeof h.fetchPriority == "string" ? h.fetchPriority : void 0,
        referrerPolicy: typeof h.referrerPolicy == "string" ? h.referrerPolicy : void 0,
        imageSrcSet: typeof h.imageSrcSet == "string" ? h.imageSrcSet : void 0,
        imageSizes: typeof h.imageSizes == "string" ? h.imageSizes : void 0,
        media: typeof h.media == "string" ? h.media : void 0
      });
    }
  }, xe.preloadModule = function(y, h) {
    if (typeof y == "string")
      if (h) {
        var g = p(h.as, h.crossOrigin);
        r.d.m(y, {
          as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0,
          crossOrigin: g,
          integrity: typeof h.integrity == "string" ? h.integrity : void 0
        });
      } else r.d.m(y);
  }, xe.requestFormReset = function(y) {
    r.d.r(y);
  }, xe.unstable_batchedUpdates = function(y, h) {
    return y(h);
  }, xe.useFormState = function(y, h, g) {
    return d.H.useFormState(y, h, g);
  }, xe.useFormStatus = function() {
    return d.H.useHostTransitionStatus();
  }, xe.version = "19.0.0", xe;
}
var Mh;
function vy() {
  if (Mh) return Ou.exports;
  Mh = 1;
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (o) {
        console.error(o);
      }
  }
  return l(), Ou.exports = ab(), Ou.exports;
}
var zh;
function ob() {
  if (zh) return vi;
  zh = 1;
  var l = nb(), o = Pu(), s = vy();
  function r(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function u(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  var f = Symbol.for("react.element"), d = Symbol.for("react.transitional.element"), p = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), b = Symbol.for("react.consumer"), x = Symbol.for("react.context"), R = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), H = Symbol.for("react.offscreen"), $ = Symbol.for("react.memo_cache_sentinel"), q = Symbol.iterator;
  function k(t) {
    return t === null || typeof t != "object" ? null : (t = q && t[q] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var W = Symbol.for("react.client.reference");
  function J(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === W ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case y:
        return "Fragment";
      case p:
        return "Portal";
      case g:
        return "Profiler";
      case h:
        return "StrictMode";
      case _:
        return "Suspense";
      case M:
        return "SuspenseList";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case x:
          return (t.displayName || "Context") + ".Provider";
        case b:
          return (t._context.displayName || "Context") + ".Consumer";
        case R:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case j:
          return e = t.displayName || null, e !== null ? e : J(t.type) || "Memo";
        case B:
          e = t._payload, t = t._init;
          try {
            return J(t(e));
          } catch {
          }
      }
    return null;
  }
  var Z = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, P = Object.assign, it, ct;
  function dt(t) {
    if (it === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        it = e && e[1] || "", ct = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + it + t + ct;
  }
  var ot = !1;
  function ft(t, e) {
    if (!t || ot) return "";
    ot = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var K = function() {
                throw Error();
              };
              if (Object.defineProperty(K.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(K, []);
                } catch (L) {
                  var N = L;
                }
                Reflect.construct(t, [], K);
              } else {
                try {
                  K.call();
                } catch (L) {
                  N = L;
                }
                t.call(K.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (L) {
                N = L;
              }
              (K = t()) && typeof K.catch == "function" && K.catch(function() {
              });
            }
          } catch (L) {
            if (L && N && typeof L.stack == "string")
              return [L.stack, N.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var i = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      i && i.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var c = a.DetermineComponentFrameRoot(), m = c[0], v = c[1];
      if (m && v) {
        var T = m.split(`
`), D = v.split(`
`);
        for (i = a = 0; a < T.length && !T[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; i < D.length && !D[i].includes(
          "DetermineComponentFrameRoot"
        ); )
          i++;
        if (a === T.length || i === D.length)
          for (a = T.length - 1, i = D.length - 1; 1 <= a && 0 <= i && T[a] !== D[i]; )
            i--;
        for (; 1 <= a && 0 <= i; a--, i--)
          if (T[a] !== D[i]) {
            if (a !== 1 || i !== 1)
              do
                if (a--, i--, 0 > i || T[a] !== D[i]) {
                  var Y = `
` + T[a].replace(" at new ", " at ");
                  return t.displayName && Y.includes("<anonymous>") && (Y = Y.replace("<anonymous>", t.displayName)), Y;
                }
              while (1 <= a && 0 <= i);
            break;
          }
      }
    } finally {
      ot = !1, Error.prepareStackTrace = n;
    }
    return (n = t ? t.displayName || t.name : "") ? dt(n) : "";
  }
  function U(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return dt(t.type);
      case 16:
        return dt("Lazy");
      case 13:
        return dt("Suspense");
      case 19:
        return dt("SuspenseList");
      case 0:
      case 15:
        return t = ft(t.type, !1), t;
      case 11:
        return t = ft(t.type.render, !1), t;
      case 1:
        return t = ft(t.type, !0), t;
      default:
        return "";
    }
  }
  function F(t) {
    try {
      var e = "";
      do
        e += U(t), t = t.return;
      while (t);
      return e;
    } catch (n) {
      return `
Error generating stack: ` + n.message + `
` + n.stack;
    }
  }
  function V(t) {
    var e = t, n = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do
        e = t, (e.flags & 4098) !== 0 && (n = e.return), t = e.return;
      while (t);
    }
    return e.tag === 3 ? n : null;
  }
  function et(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function C(t) {
    if (V(t) !== t)
      throw Error(r(188));
  }
  function G(t) {
    var e = t.alternate;
    if (!e) {
      if (e = V(t), e === null) throw Error(r(188));
      return e !== t ? null : t;
    }
    for (var n = t, a = e; ; ) {
      var i = n.return;
      if (i === null) break;
      var c = i.alternate;
      if (c === null) {
        if (a = i.return, a !== null) {
          n = a;
          continue;
        }
        break;
      }
      if (i.child === c.child) {
        for (c = i.child; c; ) {
          if (c === n) return C(i), t;
          if (c === a) return C(i), e;
          c = c.sibling;
        }
        throw Error(r(188));
      }
      if (n.return !== a.return) n = i, a = c;
      else {
        for (var m = !1, v = i.child; v; ) {
          if (v === n) {
            m = !0, n = i, a = c;
            break;
          }
          if (v === a) {
            m = !0, a = i, n = c;
            break;
          }
          v = v.sibling;
        }
        if (!m) {
          for (v = c.child; v; ) {
            if (v === n) {
              m = !0, n = c, a = i;
              break;
            }
            if (v === a) {
              m = !0, a = c, n = i;
              break;
            }
            v = v.sibling;
          }
          if (!m) throw Error(r(189));
        }
      }
      if (n.alternate !== a) throw Error(r(190));
    }
    if (n.tag !== 3) throw Error(r(188));
    return n.stateNode.current === n ? t : e;
  }
  function lt(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = lt(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  var nt = Array.isArray, I = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ht = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, tt = [], Nt = -1;
  function bt(t) {
    return { current: t };
  }
  function zt(t) {
    0 > Nt || (t.current = tt[Nt], tt[Nt] = null, Nt--);
  }
  function Ot(t, e) {
    Nt++, tt[Nt] = t.current, t.current = e;
  }
  var ae = bt(null), ze = bt(null), be = bt(null), Ve = bt(null);
  function Ne(t, e) {
    switch (Ot(be, e), Ot(ze, t), Ot(ae, null), t = e.nodeType, t) {
      case 9:
      case 11:
        e = (e = e.documentElement) && (e = e.namespaceURI) ? Ip(e) : 0;
        break;
      default:
        if (t = t === 8 ? e.parentNode : e, e = t.tagName, t = t.namespaceURI)
          t = Ip(t), e = th(t, e);
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    zt(ae), Ot(ae, e);
  }
  function fe() {
    zt(ae), zt(ze), zt(be);
  }
  function Vt(t) {
    t.memoizedState !== null && Ot(Ve, t);
    var e = ae.current, n = th(e, t.type);
    e !== n && (Ot(ze, t), Ot(ae, n));
  }
  function Ge(t) {
    ze.current === t && (zt(ae), zt(ze)), Ve.current === t && (zt(Ve), fi._currentValue = ht);
  }
  var It = Object.prototype.hasOwnProperty, sn = l.unstable_scheduleCallback, cn = l.unstable_cancelCallback, un = l.unstable_shouldYield, yo = l.unstable_requestPaint, Re = l.unstable_now, vo = l.unstable_getCurrentPriorityLevel, da = l.unstable_ImmediatePriority, ma = l.unstable_UserBlockingPriority, nl = l.unstable_NormalPriority, go = l.unstable_LowPriority, pa = l.unstable_IdlePriority, ha = l.log, bo = l.unstable_setDisableYieldValue, wn = null, de = null;
  function So(t) {
    if (de && typeof de.onCommitFiberRoot == "function")
      try {
        de.onCommitFiberRoot(
          wn,
          t,
          void 0,
          (t.current.flags & 128) === 128
        );
      } catch {
      }
  }
  function Ae(t) {
    if (typeof ha == "function" && bo(t), de && typeof de.setStrictMode == "function")
      try {
        de.setStrictMode(wn, t);
      } catch {
      }
  }
  var oe = Math.clz32 ? Math.clz32 : zl, _l = Math.log, Ml = Math.LN2;
  function zl(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (_l(t) / Ml | 0) | 0;
  }
  var fn = 128, je = 4194304;
  function jt(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 4194176;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function ll(t, e) {
    var n = t.pendingLanes;
    if (n === 0) return 0;
    var a = 0, i = t.suspendedLanes, c = t.pingedLanes, m = t.warmLanes;
    t = t.finishedLanes !== 0;
    var v = n & 134217727;
    return v !== 0 ? (n = v & ~i, n !== 0 ? a = jt(n) : (c &= v, c !== 0 ? a = jt(c) : t || (m = v & ~m, m !== 0 && (a = jt(m))))) : (v = n & ~i, v !== 0 ? a = jt(v) : c !== 0 ? a = jt(c) : t || (m = n & ~m, m !== 0 && (a = jt(m)))), a === 0 ? 0 : e !== 0 && e !== a && (e & i) === 0 && (i = a & -a, m = e & -e, i >= m || i === 32 && (m & 4194176) !== 0) ? e : a;
  }
  function Nl(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function xo(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
        return e + 250;
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ya() {
    var t = fn;
    return fn <<= 1, (fn & 4194176) === 0 && (fn = 128), t;
  }
  function xt() {
    var t = je;
    return je <<= 1, (je & 62914560) === 0 && (je = 4194304), t;
  }
  function me(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function pe(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function He(t, e, n, a, i, c) {
    var m = t.pendingLanes;
    t.pendingLanes = n, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= n, t.entangledLanes &= n, t.errorRecoveryDisabledLanes &= n, t.shellSuspendCounter = 0;
    var v = t.entanglements, T = t.expirationTimes, D = t.hiddenUpdates;
    for (n = m & ~n; 0 < n; ) {
      var Y = 31 - oe(n), K = 1 << Y;
      v[Y] = 0, T[Y] = -1;
      var N = D[Y];
      if (N !== null)
        for (D[Y] = null, Y = 0; Y < N.length; Y++) {
          var L = N[Y];
          L !== null && (L.lane &= -536870913);
        }
      n &= ~K;
    }
    a !== 0 && Tn(t, a, 0), c !== 0 && i === 0 && t.tag !== 0 && (t.suspendedLanes |= c & ~(m & ~e));
  }
  function Tn(t, e, n) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var a = 31 - oe(e);
    t.entangledLanes |= e, t.entanglements[a] = t.entanglements[a] | 1073741824 | n & 4194218;
  }
  function al(t, e) {
    var n = t.entangledLanes |= e;
    for (t = t.entanglements; n; ) {
      var a = 31 - oe(n), i = 1 << a;
      i & e | t[a] & e && (t[a] |= e), n &= ~i;
    }
  }
  function ol(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function jl() {
    var t = I.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : gh(t.type));
  }
  function wo(t, e) {
    var n = I.p;
    try {
      return I.p = t, e();
    } finally {
      I.p = n;
    }
  }
  var De = Math.random().toString(36).slice(2), Jt = "__reactFiber$" + De, St = "__reactProps$" + De, yt = "__reactContainer$" + De, he = "__reactEvents$" + De, En = "__reactListeners$" + De, Pf = "__reactHandles$" + De, Wf = "__reactResources$" + De, To = "__reactMarker$" + De;
  function xs(t) {
    delete t[Jt], delete t[St], delete t[he], delete t[En], delete t[Pf];
  }
  function Hl(t) {
    var e = t[Jt];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
      if (e = n[yt] || n[Jt]) {
        if (n = e.alternate, e.child !== null || n !== null && n.child !== null)
          for (t = lh(t); t !== null; ) {
            if (n = t[Jt]) return n;
            t = lh(t);
          }
        return e;
      }
      t = n, n = t.parentNode;
    }
    return null;
  }
  function va(t) {
    if (t = t[Jt] || t[yt]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function Eo(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(r(33));
  }
  function ga(t) {
    var e = t[Wf];
    return e || (e = t[Wf] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function ie(t) {
    t[To] = !0;
  }
  var Ff = /* @__PURE__ */ new Set(), If = {};
  function Ul(t, e) {
    ba(t, e), ba(t + "Capture", e);
  }
  function ba(t, e) {
    for (If[t] = e, t = 0; t < e.length; t++)
      Ff.add(e[t]);
  }
  var Hn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), kv = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), td = {}, ed = {};
  function Qv(t) {
    return It.call(ed, t) ? !0 : It.call(td, t) ? !1 : kv.test(t) ? ed[t] = !0 : (td[t] = !0, !1);
  }
  function Ni(t, e, n) {
    if (Qv(e))
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var a = e.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + n);
      }
  }
  function ji(t, e, n) {
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + n);
    }
  }
  function Un(t, e, n, a) {
    if (a === null) t.removeAttribute(n);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, "" + a);
    }
  }
  function Xe(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function nd(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function Zv(t) {
    var e = nd(t) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      e
    ), a = "" + t[e];
    if (!t.hasOwnProperty(e) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var i = n.get, c = n.set;
      return Object.defineProperty(t, e, {
        configurable: !0,
        get: function() {
          return i.call(this);
        },
        set: function(m) {
          a = "" + m, c.call(this, m);
        }
      }), Object.defineProperty(t, e, {
        enumerable: n.enumerable
      }), {
        getValue: function() {
          return a;
        },
        setValue: function(m) {
          a = "" + m;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[e];
        }
      };
    }
  }
  function Hi(t) {
    t._valueTracker || (t._valueTracker = Zv(t));
  }
  function ld(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(), a = "";
    return t && (a = nd(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== n ? (e.setValue(t), !0) : !1;
  }
  function Ui(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Kv = /[\n"\\]/g;
  function ke(t) {
    return t.replace(
      Kv,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function ws(t, e, n, a, i, c, m, v) {
    t.name = "", m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? t.type = m : t.removeAttribute("type"), e != null ? m === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Xe(e)) : t.value !== "" + Xe(e) && (t.value = "" + Xe(e)) : m !== "submit" && m !== "reset" || t.removeAttribute("value"), e != null ? Ts(t, m, Xe(e)) : n != null ? Ts(t, m, Xe(n)) : a != null && t.removeAttribute("value"), i == null && c != null && (t.defaultChecked = !!c), i != null && (t.checked = i && typeof i != "function" && typeof i != "symbol"), v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? t.name = "" + Xe(v) : t.removeAttribute("name");
  }
  function ad(t, e, n, a, i, c, m, v) {
    if (c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (t.type = c), e != null || n != null) {
      if (!(c !== "submit" && c !== "reset" || e != null))
        return;
      n = n != null ? "" + Xe(n) : "", e = e != null ? "" + Xe(e) : n, v || e === t.value || (t.value = e), t.defaultValue = e;
    }
    a = a ?? i, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = v ? t.checked : !!a, t.defaultChecked = !!a, m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (t.name = m);
  }
  function Ts(t, e, n) {
    e === "number" && Ui(t.ownerDocument) === t || t.defaultValue === "" + n || (t.defaultValue = "" + n);
  }
  function Sa(t, e, n, a) {
    if (t = t.options, e) {
      e = {};
      for (var i = 0; i < n.length; i++)
        e["$" + n[i]] = !0;
      for (n = 0; n < t.length; n++)
        i = e.hasOwnProperty("$" + t[n].value), t[n].selected !== i && (t[n].selected = i), i && a && (t[n].defaultSelected = !0);
    } else {
      for (n = "" + Xe(n), e = null, i = 0; i < t.length; i++) {
        if (t[i].value === n) {
          t[i].selected = !0, a && (t[i].defaultSelected = !0);
          return;
        }
        e !== null || t[i].disabled || (e = t[i]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function od(t, e, n) {
    if (e != null && (e = "" + Xe(e), e !== t.value && (t.value = e), n == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + Xe(n) : "";
  }
  function id(t, e, n, a) {
    if (e == null) {
      if (a != null) {
        if (n != null) throw Error(r(92));
        if (nt(a)) {
          if (1 < a.length) throw Error(r(93));
          a = a[0];
        }
        n = a;
      }
      n == null && (n = ""), e = n;
    }
    n = Xe(e), t.defaultValue = n, a = t.textContent, a === n && a !== "" && a !== null && (t.value = a);
  }
  function xa(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var Jv = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function rd(t, e, n) {
    var a = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? a ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : a ? t.setProperty(e, n) : typeof n != "number" || n === 0 || Jv.has(e) ? e === "float" ? t.cssFloat = n : t[e] = ("" + n).trim() : t[e] = n + "px";
  }
  function sd(t, e, n) {
    if (e != null && typeof e != "object")
      throw Error(r(62));
    if (t = t.style, n != null) {
      for (var a in n)
        !n.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "");
      for (var i in e)
        a = e[i], e.hasOwnProperty(i) && n[i] !== a && rd(t, i, a);
    } else
      for (var c in e)
        e.hasOwnProperty(c) && rd(t, c, e[c]);
  }
  function Es(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Pv = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Wv = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function $i(t) {
    return Wv.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  var Cs = null;
  function Rs(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var wa = null, Ta = null;
  function cd(t) {
    var e = va(t);
    if (e && (t = e.stateNode)) {
      var n = t[St] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (ws(
            t,
            n.value,
            n.defaultValue,
            n.defaultValue,
            n.checked,
            n.defaultChecked,
            n.type,
            n.name
          ), e = n.name, n.type === "radio" && e != null) {
            for (n = t; n.parentNode; ) n = n.parentNode;
            for (n = n.querySelectorAll(
              'input[name="' + ke(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < n.length; e++) {
              var a = n[e];
              if (a !== t && a.form === t.form) {
                var i = a[St] || null;
                if (!i) throw Error(r(90));
                ws(
                  a,
                  i.value,
                  i.defaultValue,
                  i.defaultValue,
                  i.checked,
                  i.defaultChecked,
                  i.type,
                  i.name
                );
              }
            }
            for (e = 0; e < n.length; e++)
              a = n[e], a.form === t.form && ld(a);
          }
          break t;
        case "textarea":
          od(t, n.value, n.defaultValue);
          break t;
        case "select":
          e = n.value, e != null && Sa(t, !!n.multiple, e, !1);
      }
    }
  }
  var As = !1;
  function ud(t, e, n) {
    if (As) return t(e, n);
    As = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (As = !1, (wa !== null || Ta !== null) && (Sr(), wa && (e = wa, t = Ta, Ta = wa = null, cd(e), t)))
        for (e = 0; e < t.length; e++) cd(t[e]);
    }
  }
  function Co(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var a = n[St] || null;
    if (a === null) return null;
    n = a[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) || (t = t.type, a = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !a;
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (n && typeof n != "function")
      throw Error(
        r(231, e, typeof n)
      );
    return n;
  }
  var Ds = !1;
  if (Hn)
    try {
      var Ro = {};
      Object.defineProperty(Ro, "passive", {
        get: function() {
          Ds = !0;
        }
      }), window.addEventListener("test", Ro, Ro), window.removeEventListener("test", Ro, Ro);
    } catch {
      Ds = !1;
    }
  var il = null, Os = null, Bi = null;
  function fd() {
    if (Bi) return Bi;
    var t, e = Os, n = e.length, a, i = "value" in il ? il.value : il.textContent, c = i.length;
    for (t = 0; t < n && e[t] === i[t]; t++) ;
    var m = n - t;
    for (a = 1; a <= m && e[n - a] === i[c - a]; a++) ;
    return Bi = i.slice(t, 1 < a ? 1 - a : void 0);
  }
  function Li(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function Yi() {
    return !0;
  }
  function dd() {
    return !1;
  }
  function Oe(t) {
    function e(n, a, i, c, m) {
      this._reactName = n, this._targetInst = i, this.type = a, this.nativeEvent = c, this.target = m, this.currentTarget = null;
      for (var v in t)
        t.hasOwnProperty(v) && (n = t[v], this[v] = n ? n(c) : c[v]);
      return this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1) ? Yi : dd, this.isPropagationStopped = dd, this;
    }
    return P(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Yi);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Yi);
      },
      persist: function() {
      },
      isPersistent: Yi
    }), e;
  }
  var $l = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, qi = Oe($l), Ao = P({}, $l, { view: 0, detail: 0 }), Fv = Oe(Ao), _s, Ms, Do, Vi = P({}, Ao, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ns,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== Do && (Do && t.type === "mousemove" ? (_s = t.screenX - Do.screenX, Ms = t.screenY - Do.screenY) : Ms = _s = 0, Do = t), _s);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : Ms;
    }
  }), md = Oe(Vi), Iv = P({}, Vi, { dataTransfer: 0 }), tg = Oe(Iv), eg = P({}, Ao, { relatedTarget: 0 }), zs = Oe(eg), ng = P({}, $l, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), lg = Oe(ng), ag = P({}, $l, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), og = Oe(ag), ig = P({}, $l, { data: 0 }), pd = Oe(ig), rg = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, sg = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, cg = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function ug(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = cg[t]) ? !!e[t] : !1;
  }
  function Ns() {
    return ug;
  }
  var fg = P({}, Ao, {
    key: function(t) {
      if (t.key) {
        var e = rg[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = Li(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? sg[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ns,
    charCode: function(t) {
      return t.type === "keypress" ? Li(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? Li(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), dg = Oe(fg), mg = P({}, Vi, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), hd = Oe(mg), pg = P({}, Ao, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ns
  }), hg = Oe(pg), yg = P({}, $l, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), vg = Oe(yg), gg = P({}, Vi, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), bg = Oe(gg), Sg = P({}, $l, {
    newState: 0,
    oldState: 0
  }), xg = Oe(Sg), wg = [9, 13, 27, 32], js = Hn && "CompositionEvent" in window, Oo = null;
  Hn && "documentMode" in document && (Oo = document.documentMode);
  var Tg = Hn && "TextEvent" in window && !Oo, yd = Hn && (!js || Oo && 8 < Oo && 11 >= Oo), vd = " ", gd = !1;
  function bd(t, e) {
    switch (t) {
      case "keyup":
        return wg.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Sd(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var Ea = !1;
  function Eg(t, e) {
    switch (t) {
      case "compositionend":
        return Sd(e);
      case "keypress":
        return e.which !== 32 ? null : (gd = !0, vd);
      case "textInput":
        return t = e.data, t === vd && gd ? null : t;
      default:
        return null;
    }
  }
  function Cg(t, e) {
    if (Ea)
      return t === "compositionend" || !js && bd(t, e) ? (t = fd(), Bi = Os = il = null, Ea = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
          if (e.char && 1 < e.char.length)
            return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return yd && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var Rg = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function xd(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Rg[t.type] : e === "textarea";
  }
  function wd(t, e, n, a) {
    wa ? Ta ? Ta.push(a) : Ta = [a] : wa = a, e = Cr(e, "onChange"), 0 < e.length && (n = new qi(
      "onChange",
      "change",
      null,
      n,
      a
    ), t.push({ event: n, listeners: e }));
  }
  var _o = null, Mo = null;
  function Ag(t) {
    Kp(t, 0);
  }
  function Gi(t) {
    var e = Eo(t);
    if (ld(e)) return t;
  }
  function Td(t, e) {
    if (t === "change") return e;
  }
  var Ed = !1;
  if (Hn) {
    var Hs;
    if (Hn) {
      var Us = "oninput" in document;
      if (!Us) {
        var Cd = document.createElement("div");
        Cd.setAttribute("oninput", "return;"), Us = typeof Cd.oninput == "function";
      }
      Hs = Us;
    } else Hs = !1;
    Ed = Hs && (!document.documentMode || 9 < document.documentMode);
  }
  function Rd() {
    _o && (_o.detachEvent("onpropertychange", Ad), Mo = _o = null);
  }
  function Ad(t) {
    if (t.propertyName === "value" && Gi(Mo)) {
      var e = [];
      wd(
        e,
        Mo,
        t,
        Rs(t)
      ), ud(Ag, e);
    }
  }
  function Dg(t, e, n) {
    t === "focusin" ? (Rd(), _o = e, Mo = n, _o.attachEvent("onpropertychange", Ad)) : t === "focusout" && Rd();
  }
  function Og(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Gi(Mo);
  }
  function _g(t, e) {
    if (t === "click") return Gi(e);
  }
  function Mg(t, e) {
    if (t === "input" || t === "change")
      return Gi(e);
  }
  function zg(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var Ue = typeof Object.is == "function" ? Object.is : zg;
  function zo(t, e) {
    if (Ue(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var n = Object.keys(t), a = Object.keys(e);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var i = n[a];
      if (!It.call(e, i) || !Ue(t[i], e[i]))
        return !1;
    }
    return !0;
  }
  function Dd(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Od(t, e) {
    var n = Dd(t);
    t = 0;
    for (var a; n; ) {
      if (n.nodeType === 3) {
        if (a = t + n.textContent.length, t <= e && a >= e)
          return { node: n, offset: e - t };
        t = a;
      }
      t: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break t;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Dd(n);
    }
  }
  function _d(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? _d(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function Md(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = Ui(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = Ui(t.document);
    }
    return e;
  }
  function $s(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  function Ng(t, e) {
    var n = Md(e);
    e = t.focusedElem;
    var a = t.selectionRange;
    if (n !== e && e && e.ownerDocument && _d(e.ownerDocument.documentElement, e)) {
      if (a !== null && $s(e)) {
        if (t = a.start, n = a.end, n === void 0 && (n = t), "selectionStart" in e)
          e.selectionStart = t, e.selectionEnd = Math.min(
            n,
            e.value.length
          );
        else if (n = (t = e.ownerDocument || document) && t.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var i = e.textContent.length, c = Math.min(a.start, i);
          a = a.end === void 0 ? c : Math.min(a.end, i), !n.extend && c > a && (i = a, a = c, c = i), i = Od(e, c);
          var m = Od(
            e,
            a
          );
          i && m && (n.rangeCount !== 1 || n.anchorNode !== i.node || n.anchorOffset !== i.offset || n.focusNode !== m.node || n.focusOffset !== m.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), n.removeAllRanges(), c > a ? (n.addRange(t), n.extend(m.node, m.offset)) : (t.setEnd(
            m.node,
            m.offset
          ), n.addRange(t)));
        }
      }
      for (t = [], n = e; n = n.parentNode; )
        n.nodeType === 1 && t.push({
          element: n,
          left: n.scrollLeft,
          top: n.scrollTop
        });
      for (typeof e.focus == "function" && e.focus(), e = 0; e < t.length; e++)
        n = t[e], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var jg = Hn && "documentMode" in document && 11 >= document.documentMode, Ca = null, Bs = null, No = null, Ls = !1;
  function zd(t, e, n) {
    var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ls || Ca == null || Ca !== Ui(a) || (a = Ca, "selectionStart" in a && $s(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), No && zo(No, a) || (No = a, a = Cr(Bs, "onSelect"), 0 < a.length && (e = new qi(
      "onSelect",
      "select",
      null,
      e,
      n
    ), t.push({ event: e, listeners: a }), e.target = Ca)));
  }
  function Bl(t, e) {
    var n = {};
    return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n;
  }
  var Ra = {
    animationend: Bl("Animation", "AnimationEnd"),
    animationiteration: Bl("Animation", "AnimationIteration"),
    animationstart: Bl("Animation", "AnimationStart"),
    transitionrun: Bl("Transition", "TransitionRun"),
    transitionstart: Bl("Transition", "TransitionStart"),
    transitioncancel: Bl("Transition", "TransitionCancel"),
    transitionend: Bl("Transition", "TransitionEnd")
  }, Ys = {}, Nd = {};
  Hn && (Nd = document.createElement("div").style, "AnimationEvent" in window || (delete Ra.animationend.animation, delete Ra.animationiteration.animation, delete Ra.animationstart.animation), "TransitionEvent" in window || delete Ra.transitionend.transition);
  function Ll(t) {
    if (Ys[t]) return Ys[t];
    if (!Ra[t]) return t;
    var e = Ra[t], n;
    for (n in e)
      if (e.hasOwnProperty(n) && n in Nd)
        return Ys[t] = e[n];
    return t;
  }
  var jd = Ll("animationend"), Hd = Ll("animationiteration"), Ud = Ll("animationstart"), Hg = Ll("transitionrun"), Ug = Ll("transitionstart"), $g = Ll("transitioncancel"), $d = Ll("transitionend"), Bd = /* @__PURE__ */ new Map(), Ld = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
    " "
  );
  function dn(t, e) {
    Bd.set(t, e), Ul(e, [t]);
  }
  var Qe = [], Aa = 0, qs = 0;
  function Xi() {
    for (var t = Aa, e = qs = Aa = 0; e < t; ) {
      var n = Qe[e];
      Qe[e++] = null;
      var a = Qe[e];
      Qe[e++] = null;
      var i = Qe[e];
      Qe[e++] = null;
      var c = Qe[e];
      if (Qe[e++] = null, a !== null && i !== null) {
        var m = a.pending;
        m === null ? i.next = i : (i.next = m.next, m.next = i), a.pending = i;
      }
      c !== 0 && Yd(n, i, c);
    }
  }
  function ki(t, e, n, a) {
    Qe[Aa++] = t, Qe[Aa++] = e, Qe[Aa++] = n, Qe[Aa++] = a, qs |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
  }
  function Vs(t, e, n, a) {
    return ki(t, e, n, a), Qi(t);
  }
  function rl(t, e) {
    return ki(t, null, null, e), Qi(t);
  }
  function Yd(t, e, n) {
    t.lanes |= n;
    var a = t.alternate;
    a !== null && (a.lanes |= n);
    for (var i = !1, c = t.return; c !== null; )
      c.childLanes |= n, a = c.alternate, a !== null && (a.childLanes |= n), c.tag === 22 && (t = c.stateNode, t === null || t._visibility & 1 || (i = !0)), t = c, c = c.return;
    i && e !== null && t.tag === 3 && (c = t.stateNode, i = 31 - oe(n), c = c.hiddenUpdates, t = c[i], t === null ? c[i] = [e] : t.push(e), e.lane = n | 536870912);
  }
  function Qi(t) {
    if (50 < ai)
      throw ai = 0, Kc = null, Error(r(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Da = {}, qd = /* @__PURE__ */ new WeakMap();
  function Ze(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = qd.get(t);
      return n !== void 0 ? n : (e = {
        value: t,
        source: e,
        stack: F(e)
      }, qd.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: F(e)
    };
  }
  var Oa = [], _a = 0, Zi = null, Ki = 0, Ke = [], Je = 0, Yl = null, $n = 1, Bn = "";
  function ql(t, e) {
    Oa[_a++] = Ki, Oa[_a++] = Zi, Zi = t, Ki = e;
  }
  function Vd(t, e, n) {
    Ke[Je++] = $n, Ke[Je++] = Bn, Ke[Je++] = Yl, Yl = t;
    var a = $n;
    t = Bn;
    var i = 32 - oe(a) - 1;
    a &= ~(1 << i), n += 1;
    var c = 32 - oe(e) + i;
    if (30 < c) {
      var m = i - i % 5;
      c = (a & (1 << m) - 1).toString(32), a >>= m, i -= m, $n = 1 << 32 - oe(e) + i | n << i | a, Bn = c + t;
    } else
      $n = 1 << c | n << i | a, Bn = t;
  }
  function Gs(t) {
    t.return !== null && (ql(t, 1), Vd(t, 1, 0));
  }
  function Xs(t) {
    for (; t === Zi; )
      Zi = Oa[--_a], Oa[_a] = null, Ki = Oa[--_a], Oa[_a] = null;
    for (; t === Yl; )
      Yl = Ke[--Je], Ke[Je] = null, Bn = Ke[--Je], Ke[Je] = null, $n = Ke[--Je], Ke[Je] = null;
  }
  var Te = null, ye = null, _t = !1, mn = null, Cn = !1, ks = Error(r(519));
  function Vl(t) {
    var e = Error(r(418, ""));
    throw Uo(Ze(e, t)), ks;
  }
  function Gd(t) {
    var e = t.stateNode, n = t.type, a = t.memoizedProps;
    switch (e[Jt] = t, e[St] = a, n) {
      case "dialog":
        Rt("cancel", e), Rt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        Rt("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < ii.length; n++)
          Rt(ii[n], e);
        break;
      case "source":
        Rt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        Rt("error", e), Rt("load", e);
        break;
      case "details":
        Rt("toggle", e);
        break;
      case "input":
        Rt("invalid", e), ad(
          e,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        ), Hi(e);
        break;
      case "select":
        Rt("invalid", e);
        break;
      case "textarea":
        Rt("invalid", e), id(e, a.value, a.defaultValue, a.children), Hi(e);
    }
    n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || e.textContent === "" + n || a.suppressHydrationWarning === !0 || Fp(e.textContent, n) ? (a.popover != null && (Rt("beforetoggle", e), Rt("toggle", e)), a.onScroll != null && Rt("scroll", e), a.onScrollEnd != null && Rt("scrollend", e), a.onClick != null && (e.onclick = Rr), e = !0) : e = !1, e || Vl(t);
  }
  function Xd(t) {
    for (Te = t.return; Te; )
      switch (Te.tag) {
        case 3:
        case 27:
          Cn = !0;
          return;
        case 5:
        case 13:
          Cn = !1;
          return;
        default:
          Te = Te.return;
      }
  }
  function jo(t) {
    if (t !== Te) return !1;
    if (!_t) return Xd(t), _t = !0, !1;
    var e = !1, n;
    if ((n = t.tag !== 3 && t.tag !== 27) && ((n = t.tag === 5) && (n = t.type, n = !(n !== "form" && n !== "button") || fu(t.type, t.memoizedProps)), n = !n), n && (e = !0), e && ye && Vl(t), Xd(t), t.tag === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      t: {
        for (t = t.nextSibling, e = 0; t; ) {
          if (t.nodeType === 8)
            if (n = t.data, n === "/$") {
              if (e === 0) {
                ye = hn(t.nextSibling);
                break t;
              }
              e--;
            } else
              n !== "$" && n !== "$!" && n !== "$?" || e++;
          t = t.nextSibling;
        }
        ye = null;
      }
    } else
      ye = Te ? hn(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Ho() {
    ye = Te = null, _t = !1;
  }
  function Uo(t) {
    mn === null ? mn = [t] : mn.push(t);
  }
  var $o = Error(r(460)), kd = Error(r(474)), Qs = { then: function() {
  } };
  function Qd(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function Ji() {
  }
  function Zd(t, e, n) {
    switch (n = t[n], n === void 0 ? t.push(e) : n !== e && (e.then(Ji, Ji), e = n), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, t === $o ? Error(r(483)) : t;
      default:
        if (typeof e.status == "string") e.then(Ji, Ji);
        else {
          if (t = Yt, t !== null && 100 < t.shellSuspendCounter)
            throw Error(r(482));
          t = e, t.status = "pending", t.then(
            function(a) {
              if (e.status === "pending") {
                var i = e;
                i.status = "fulfilled", i.value = a;
              }
            },
            function(a) {
              if (e.status === "pending") {
                var i = e;
                i.status = "rejected", i.reason = a;
              }
            }
          );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, t === $o ? Error(r(483)) : t;
        }
        throw Bo = e, $o;
    }
  }
  var Bo = null;
  function Kd() {
    if (Bo === null) throw Error(r(459));
    var t = Bo;
    return Bo = null, t;
  }
  var Ma = null, Lo = 0;
  function Pi(t) {
    var e = Lo;
    return Lo += 1, Ma === null && (Ma = []), Zd(Ma, t, e);
  }
  function Yo(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function Wi(t, e) {
    throw e.$$typeof === f ? Error(r(525)) : (t = Object.prototype.toString.call(e), Error(
      r(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function Jd(t) {
    var e = t._init;
    return e(t._payload);
  }
  function Pd(t) {
    function e(O, A) {
      if (t) {
        var z = O.deletions;
        z === null ? (O.deletions = [A], O.flags |= 16) : z.push(A);
      }
    }
    function n(O, A) {
      if (!t) return null;
      for (; A !== null; )
        e(O, A), A = A.sibling;
      return null;
    }
    function a(O) {
      for (var A = /* @__PURE__ */ new Map(); O !== null; )
        O.key !== null ? A.set(O.key, O) : A.set(O.index, O), O = O.sibling;
      return A;
    }
    function i(O, A) {
      return O = bl(O, A), O.index = 0, O.sibling = null, O;
    }
    function c(O, A, z) {
      return O.index = z, t ? (z = O.alternate, z !== null ? (z = z.index, z < A ? (O.flags |= 33554434, A) : z) : (O.flags |= 33554434, A)) : (O.flags |= 1048576, A);
    }
    function m(O) {
      return t && O.alternate === null && (O.flags |= 33554434), O;
    }
    function v(O, A, z, X) {
      return A === null || A.tag !== 6 ? (A = Yc(z, O.mode, X), A.return = O, A) : (A = i(A, z), A.return = O, A);
    }
    function T(O, A, z, X) {
      var at = z.type;
      return at === y ? Y(
        O,
        A,
        z.props.children,
        X,
        z.key
      ) : A !== null && (A.elementType === at || typeof at == "object" && at !== null && at.$$typeof === B && Jd(at) === A.type) ? (A = i(A, z.props), Yo(A, z), A.return = O, A) : (A = hr(
        z.type,
        z.key,
        z.props,
        null,
        O.mode,
        X
      ), Yo(A, z), A.return = O, A);
    }
    function D(O, A, z, X) {
      return A === null || A.tag !== 4 || A.stateNode.containerInfo !== z.containerInfo || A.stateNode.implementation !== z.implementation ? (A = qc(z, O.mode, X), A.return = O, A) : (A = i(A, z.children || []), A.return = O, A);
    }
    function Y(O, A, z, X, at) {
      return A === null || A.tag !== 7 ? (A = Fl(
        z,
        O.mode,
        X,
        at
      ), A.return = O, A) : (A = i(A, z), A.return = O, A);
    }
    function K(O, A, z) {
      if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
        return A = Yc(
          "" + A,
          O.mode,
          z
        ), A.return = O, A;
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case d:
            return z = hr(
              A.type,
              A.key,
              A.props,
              null,
              O.mode,
              z
            ), Yo(z, A), z.return = O, z;
          case p:
            return A = qc(
              A,
              O.mode,
              z
            ), A.return = O, A;
          case B:
            var X = A._init;
            return A = X(A._payload), K(O, A, z);
        }
        if (nt(A) || k(A))
          return A = Fl(
            A,
            O.mode,
            z,
            null
          ), A.return = O, A;
        if (typeof A.then == "function")
          return K(O, Pi(A), z);
        if (A.$$typeof === x)
          return K(
            O,
            dr(O, A),
            z
          );
        Wi(O, A);
      }
      return null;
    }
    function N(O, A, z, X) {
      var at = A !== null ? A.key : null;
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return at !== null ? null : v(O, A, "" + z, X);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case d:
            return z.key === at ? T(O, A, z, X) : null;
          case p:
            return z.key === at ? D(O, A, z, X) : null;
          case B:
            return at = z._init, z = at(z._payload), N(O, A, z, X);
        }
        if (nt(z) || k(z))
          return at !== null ? null : Y(O, A, z, X, null);
        if (typeof z.then == "function")
          return N(
            O,
            A,
            Pi(z),
            X
          );
        if (z.$$typeof === x)
          return N(
            O,
            A,
            dr(O, z),
            X
          );
        Wi(O, z);
      }
      return null;
    }
    function L(O, A, z, X, at) {
      if (typeof X == "string" && X !== "" || typeof X == "number" || typeof X == "bigint")
        return O = O.get(z) || null, v(A, O, "" + X, at);
      if (typeof X == "object" && X !== null) {
        switch (X.$$typeof) {
          case d:
            return O = O.get(
              X.key === null ? z : X.key
            ) || null, T(A, O, X, at);
          case p:
            return O = O.get(
              X.key === null ? z : X.key
            ) || null, D(A, O, X, at);
          case B:
            var Et = X._init;
            return X = Et(X._payload), L(
              O,
              A,
              z,
              X,
              at
            );
        }
        if (nt(X) || k(X))
          return O = O.get(z) || null, Y(A, O, X, at, null);
        if (typeof X.then == "function")
          return L(
            O,
            A,
            z,
            Pi(X),
            at
          );
        if (X.$$typeof === x)
          return L(
            O,
            A,
            z,
            dr(A, X),
            at
          );
        Wi(A, X);
      }
      return null;
    }
    function rt(O, A, z, X) {
      for (var at = null, Et = null, ut = A, mt = A = 0, ce = null; ut !== null && mt < z.length; mt++) {
        ut.index > mt ? (ce = ut, ut = null) : ce = ut.sibling;
        var Mt = N(
          O,
          ut,
          z[mt],
          X
        );
        if (Mt === null) {
          ut === null && (ut = ce);
          break;
        }
        t && ut && Mt.alternate === null && e(O, ut), A = c(Mt, A, mt), Et === null ? at = Mt : Et.sibling = Mt, Et = Mt, ut = ce;
      }
      if (mt === z.length)
        return n(O, ut), _t && ql(O, mt), at;
      if (ut === null) {
        for (; mt < z.length; mt++)
          ut = K(O, z[mt], X), ut !== null && (A = c(
            ut,
            A,
            mt
          ), Et === null ? at = ut : Et.sibling = ut, Et = ut);
        return _t && ql(O, mt), at;
      }
      for (ut = a(ut); mt < z.length; mt++)
        ce = L(
          ut,
          O,
          mt,
          z[mt],
          X
        ), ce !== null && (t && ce.alternate !== null && ut.delete(
          ce.key === null ? mt : ce.key
        ), A = c(
          ce,
          A,
          mt
        ), Et === null ? at = ce : Et.sibling = ce, Et = ce);
      return t && ut.forEach(function(Rl) {
        return e(O, Rl);
      }), _t && ql(O, mt), at;
    }
    function vt(O, A, z, X) {
      if (z == null) throw Error(r(151));
      for (var at = null, Et = null, ut = A, mt = A = 0, ce = null, Mt = z.next(); ut !== null && !Mt.done; mt++, Mt = z.next()) {
        ut.index > mt ? (ce = ut, ut = null) : ce = ut.sibling;
        var Rl = N(O, ut, Mt.value, X);
        if (Rl === null) {
          ut === null && (ut = ce);
          break;
        }
        t && ut && Rl.alternate === null && e(O, ut), A = c(Rl, A, mt), Et === null ? at = Rl : Et.sibling = Rl, Et = Rl, ut = ce;
      }
      if (Mt.done)
        return n(O, ut), _t && ql(O, mt), at;
      if (ut === null) {
        for (; !Mt.done; mt++, Mt = z.next())
          Mt = K(O, Mt.value, X), Mt !== null && (A = c(Mt, A, mt), Et === null ? at = Mt : Et.sibling = Mt, Et = Mt);
        return _t && ql(O, mt), at;
      }
      for (ut = a(ut); !Mt.done; mt++, Mt = z.next())
        Mt = L(ut, O, mt, Mt.value, X), Mt !== null && (t && Mt.alternate !== null && ut.delete(Mt.key === null ? mt : Mt.key), A = c(Mt, A, mt), Et === null ? at = Mt : Et.sibling = Mt, Et = Mt);
      return t && ut.forEach(function(W0) {
        return e(O, W0);
      }), _t && ql(O, mt), at;
    }
    function Zt(O, A, z, X) {
      if (typeof z == "object" && z !== null && z.type === y && z.key === null && (z = z.props.children), typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case d:
            t: {
              for (var at = z.key; A !== null; ) {
                if (A.key === at) {
                  if (at = z.type, at === y) {
                    if (A.tag === 7) {
                      n(
                        O,
                        A.sibling
                      ), X = i(
                        A,
                        z.props.children
                      ), X.return = O, O = X;
                      break t;
                    }
                  } else if (A.elementType === at || typeof at == "object" && at !== null && at.$$typeof === B && Jd(at) === A.type) {
                    n(
                      O,
                      A.sibling
                    ), X = i(A, z.props), Yo(X, z), X.return = O, O = X;
                    break t;
                  }
                  n(O, A);
                  break;
                } else e(O, A);
                A = A.sibling;
              }
              z.type === y ? (X = Fl(
                z.props.children,
                O.mode,
                X,
                z.key
              ), X.return = O, O = X) : (X = hr(
                z.type,
                z.key,
                z.props,
                null,
                O.mode,
                X
              ), Yo(X, z), X.return = O, O = X);
            }
            return m(O);
          case p:
            t: {
              for (at = z.key; A !== null; ) {
                if (A.key === at)
                  if (A.tag === 4 && A.stateNode.containerInfo === z.containerInfo && A.stateNode.implementation === z.implementation) {
                    n(
                      O,
                      A.sibling
                    ), X = i(A, z.children || []), X.return = O, O = X;
                    break t;
                  } else {
                    n(O, A);
                    break;
                  }
                else e(O, A);
                A = A.sibling;
              }
              X = qc(z, O.mode, X), X.return = O, O = X;
            }
            return m(O);
          case B:
            return at = z._init, z = at(z._payload), Zt(
              O,
              A,
              z,
              X
            );
        }
        if (nt(z))
          return rt(
            O,
            A,
            z,
            X
          );
        if (k(z)) {
          if (at = k(z), typeof at != "function") throw Error(r(150));
          return z = at.call(z), vt(
            O,
            A,
            z,
            X
          );
        }
        if (typeof z.then == "function")
          return Zt(
            O,
            A,
            Pi(z),
            X
          );
        if (z.$$typeof === x)
          return Zt(
            O,
            A,
            dr(O, z),
            X
          );
        Wi(O, z);
      }
      return typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint" ? (z = "" + z, A !== null && A.tag === 6 ? (n(O, A.sibling), X = i(A, z), X.return = O, O = X) : (n(O, A), X = Yc(z, O.mode, X), X.return = O, O = X), m(O)) : n(O, A);
    }
    return function(O, A, z, X) {
      try {
        Lo = 0;
        var at = Zt(
          O,
          A,
          z,
          X
        );
        return Ma = null, at;
      } catch (ut) {
        if (ut === $o) throw ut;
        var Et = Ie(29, ut, null, O.mode);
        return Et.lanes = X, Et.return = O, Et;
      } finally {
      }
    };
  }
  var Gl = Pd(!0), Wd = Pd(!1), za = bt(null), Fi = bt(0);
  function Fd(t, e) {
    t = Jn, Ot(Fi, t), Ot(za, e), Jn = t | e.baseLanes;
  }
  function Zs() {
    Ot(Fi, Jn), Ot(za, za.current);
  }
  function Ks() {
    Jn = Fi.current, zt(za), zt(Fi);
  }
  var Pe = bt(null), Rn = null;
  function sl(t) {
    var e = t.alternate;
    Ot(te, te.current & 1), Ot(Pe, t), Rn === null && (e === null || za.current !== null || e.memoizedState !== null) && (Rn = t);
  }
  function Id(t) {
    if (t.tag === 22) {
      if (Ot(te, te.current), Ot(Pe, t), Rn === null) {
        var e = t.alternate;
        e !== null && e.memoizedState !== null && (Rn = t);
      }
    } else cl();
  }
  function cl() {
    Ot(te, te.current), Ot(Pe, Pe.current);
  }
  function Ln(t) {
    zt(Pe), Rn === t && (Rn = null), zt(te);
  }
  var te = bt(0);
  function Ii(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!"))
          return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    return null;
  }
  var Bg = typeof AbortController < "u" ? AbortController : function() {
    var t = [], e = this.signal = {
      aborted: !1,
      addEventListener: function(n, a) {
        t.push(a);
      }
    };
    this.abort = function() {
      e.aborted = !0, t.forEach(function(n) {
        return n();
      });
    };
  }, Lg = l.unstable_scheduleCallback, Yg = l.unstable_NormalPriority, ee = {
    $$typeof: x,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Js() {
    return {
      controller: new Bg(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function qo(t) {
    t.refCount--, t.refCount === 0 && Lg(Yg, function() {
      t.controller.abort();
    });
  }
  var Vo = null, Ps = 0, Na = 0, ja = null;
  function qg(t, e) {
    if (Vo === null) {
      var n = Vo = [];
      Ps = 0, Na = nu(), ja = {
        status: "pending",
        value: void 0,
        then: function(a) {
          n.push(a);
        }
      };
    }
    return Ps++, e.then(tm, tm), e;
  }
  function tm() {
    if (--Ps === 0 && Vo !== null) {
      ja !== null && (ja.status = "fulfilled");
      var t = Vo;
      Vo = null, Na = 0, ja = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function Vg(t, e) {
    var n = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(i) {
        n.push(i);
      }
    };
    return t.then(
      function() {
        a.status = "fulfilled", a.value = e;
        for (var i = 0; i < n.length; i++) (0, n[i])(e);
      },
      function(i) {
        for (a.status = "rejected", a.reason = i, i = 0; i < n.length; i++)
          (0, n[i])(void 0);
      }
    ), a;
  }
  var em = Z.S;
  Z.S = function(t, e) {
    typeof e == "object" && e !== null && typeof e.then == "function" && qg(t, e), em !== null && em(t, e);
  };
  var Xl = bt(null);
  function Ws() {
    var t = Xl.current;
    return t !== null ? t : Yt.pooledCache;
  }
  function tr(t, e) {
    e === null ? Ot(Xl, Xl.current) : Ot(Xl, e.pool);
  }
  function nm() {
    var t = Ws();
    return t === null ? null : { parent: ee._currentValue, pool: t };
  }
  var ul = 0, wt = null, Ut = null, Pt = null, er = !1, Ha = !1, kl = !1, nr = 0, Go = 0, Ua = null, Gg = 0;
  function Kt() {
    throw Error(r(321));
  }
  function Fs(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!Ue(t[n], e[n])) return !1;
    return !0;
  }
  function Is(t, e, n, a, i, c) {
    return ul = c, wt = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, Z.H = t === null || t.memoizedState === null ? Ql : fl, kl = !1, c = n(a, i), kl = !1, Ha && (c = am(
      e,
      n,
      a,
      i
    )), lm(t), c;
  }
  function lm(t) {
    Z.H = An;
    var e = Ut !== null && Ut.next !== null;
    if (ul = 0, Pt = Ut = wt = null, er = !1, Go = 0, Ua = null, e) throw Error(r(300));
    t === null || re || (t = t.dependencies, t !== null && fr(t) && (re = !0));
  }
  function am(t, e, n, a) {
    wt = t;
    var i = 0;
    do {
      if (Ha && (Ua = null), Go = 0, Ha = !1, 25 <= i) throw Error(r(301));
      if (i += 1, Pt = Ut = null, t.updateQueue != null) {
        var c = t.updateQueue;
        c.lastEffect = null, c.events = null, c.stores = null, c.memoCache != null && (c.memoCache.index = 0);
      }
      Z.H = Zl, c = e(n, a);
    } while (Ha);
    return c;
  }
  function Xg() {
    var t = Z.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? Xo(e) : e, t = t.useState()[0], (Ut !== null ? Ut.memoizedState : null) !== t && (wt.flags |= 1024), e;
  }
  function tc() {
    var t = nr !== 0;
    return nr = 0, t;
  }
  function ec(t, e, n) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~n;
  }
  function nc(t) {
    if (er) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      er = !1;
    }
    ul = 0, Pt = Ut = wt = null, Ha = !1, Go = nr = 0, Ua = null;
  }
  function _e() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Pt === null ? wt.memoizedState = Pt = t : Pt = Pt.next = t, Pt;
  }
  function Wt() {
    if (Ut === null) {
      var t = wt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Ut.next;
    var e = Pt === null ? wt.memoizedState : Pt.next;
    if (e !== null)
      Pt = e, Ut = t;
    else {
      if (t === null)
        throw wt.alternate === null ? Error(r(467)) : Error(r(310));
      Ut = t, t = {
        memoizedState: Ut.memoizedState,
        baseState: Ut.baseState,
        baseQueue: Ut.baseQueue,
        queue: Ut.queue,
        next: null
      }, Pt === null ? wt.memoizedState = Pt = t : Pt = Pt.next = t;
    }
    return Pt;
  }
  var lr;
  lr = function() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  };
  function Xo(t) {
    var e = Go;
    return Go += 1, Ua === null && (Ua = []), t = Zd(Ua, t, e), e = wt, (Pt === null ? e.memoizedState : Pt.next) === null && (e = e.alternate, Z.H = e === null || e.memoizedState === null ? Ql : fl), t;
  }
  function ar(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Xo(t);
      if (t.$$typeof === x) return Se(t);
    }
    throw Error(r(438, String(t)));
  }
  function lc(t) {
    var e = null, n = wt.updateQueue;
    if (n !== null && (e = n.memoCache), e == null) {
      var a = wt.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (e = {
        data: a.data.map(function(i) {
          return i.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = { data: [], index: 0 }), n === null && (n = lr(), wt.updateQueue = n), n.memoCache = e, n = e.data[e.index], n === void 0)
      for (n = e.data[e.index] = Array(t), a = 0; a < t; a++)
        n[a] = $;
    return e.index++, n;
  }
  function Yn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function or(t) {
    var e = Wt();
    return ac(e, Ut, t);
  }
  function ac(t, e, n) {
    var a = t.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = n;
    var i = t.baseQueue, c = a.pending;
    if (c !== null) {
      if (i !== null) {
        var m = i.next;
        i.next = c.next, c.next = m;
      }
      e.baseQueue = i = c, a.pending = null;
    }
    if (c = t.baseState, i === null) t.memoizedState = c;
    else {
      e = i.next;
      var v = m = null, T = null, D = e, Y = !1;
      do {
        var K = D.lane & -536870913;
        if (K !== D.lane ? (Dt & K) === K : (ul & K) === K) {
          var N = D.revertLane;
          if (N === 0)
            T !== null && (T = T.next = {
              lane: 0,
              revertLane: 0,
              action: D.action,
              hasEagerState: D.hasEagerState,
              eagerState: D.eagerState,
              next: null
            }), K === Na && (Y = !0);
          else if ((ul & N) === N) {
            D = D.next, N === Na && (Y = !0);
            continue;
          } else
            K = {
              lane: 0,
              revertLane: D.revertLane,
              action: D.action,
              hasEagerState: D.hasEagerState,
              eagerState: D.eagerState,
              next: null
            }, T === null ? (v = T = K, m = c) : T = T.next = K, wt.lanes |= N, Sl |= N;
          K = D.action, kl && n(c, K), c = D.hasEagerState ? D.eagerState : n(c, K);
        } else
          N = {
            lane: K,
            revertLane: D.revertLane,
            action: D.action,
            hasEagerState: D.hasEagerState,
            eagerState: D.eagerState,
            next: null
          }, T === null ? (v = T = N, m = c) : T = T.next = N, wt.lanes |= K, Sl |= K;
        D = D.next;
      } while (D !== null && D !== e);
      if (T === null ? m = c : T.next = v, !Ue(c, t.memoizedState) && (re = !0, Y && (n = ja, n !== null)))
        throw n;
      t.memoizedState = c, t.baseState = m, t.baseQueue = T, a.lastRenderedState = c;
    }
    return i === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function oc(t) {
    var e = Wt(), n = e.queue;
    if (n === null) throw Error(r(311));
    n.lastRenderedReducer = t;
    var a = n.dispatch, i = n.pending, c = e.memoizedState;
    if (i !== null) {
      n.pending = null;
      var m = i = i.next;
      do
        c = t(c, m.action), m = m.next;
      while (m !== i);
      Ue(c, e.memoizedState) || (re = !0), e.memoizedState = c, e.baseQueue === null && (e.baseState = c), n.lastRenderedState = c;
    }
    return [c, a];
  }
  function om(t, e, n) {
    var a = wt, i = Wt(), c = _t;
    if (c) {
      if (n === void 0) throw Error(r(407));
      n = n();
    } else n = e();
    var m = !Ue(
      (Ut || i).memoizedState,
      n
    );
    if (m && (i.memoizedState = n, re = !0), i = i.queue, sc(sm.bind(null, a, i, t), [
      t
    ]), i.getSnapshot !== e || m || Pt !== null && Pt.memoizedState.tag & 1) {
      if (a.flags |= 2048, $a(
        9,
        rm.bind(
          null,
          a,
          i,
          n,
          e
        ),
        { destroy: void 0 },
        null
      ), Yt === null) throw Error(r(349));
      c || (ul & 60) !== 0 || im(a, e, n);
    }
    return n;
  }
  function im(t, e, n) {
    t.flags |= 16384, t = { getSnapshot: e, value: n }, e = wt.updateQueue, e === null ? (e = lr(), wt.updateQueue = e, e.stores = [t]) : (n = e.stores, n === null ? e.stores = [t] : n.push(t));
  }
  function rm(t, e, n, a) {
    e.value = n, e.getSnapshot = a, cm(e) && um(t);
  }
  function sm(t, e, n) {
    return n(function() {
      cm(e) && um(t);
    });
  }
  function cm(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !Ue(t, n);
    } catch {
      return !0;
    }
  }
  function um(t) {
    var e = rl(t, 2);
    e !== null && Ee(e, t, 2);
  }
  function ic(t) {
    var e = _e();
    if (typeof t == "function") {
      var n = t;
      if (t = n(), kl) {
        Ae(!0);
        try {
          n();
        } finally {
          Ae(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Yn,
      lastRenderedState: t
    }, e;
  }
  function fm(t, e, n, a) {
    return t.baseState = n, ac(
      t,
      Ut,
      typeof a == "function" ? a : Yn
    );
  }
  function kg(t, e, n, a, i) {
    if (sr(t)) throw Error(r(485));
    if (t = e.action, t !== null) {
      var c = {
        payload: i,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(m) {
          c.listeners.push(m);
        }
      };
      Z.T !== null ? n(!0) : c.isTransition = !1, a(c), n = e.pending, n === null ? (c.next = e.pending = c, dm(e, c)) : (c.next = n.next, e.pending = n.next = c);
    }
  }
  function dm(t, e) {
    var n = e.action, a = e.payload, i = t.state;
    if (e.isTransition) {
      var c = Z.T, m = {};
      Z.T = m;
      try {
        var v = n(i, a), T = Z.S;
        T !== null && T(m, v), mm(t, e, v);
      } catch (D) {
        rc(t, e, D);
      } finally {
        Z.T = c;
      }
    } else
      try {
        c = n(i, a), mm(t, e, c);
      } catch (D) {
        rc(t, e, D);
      }
  }
  function mm(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(a) {
        pm(t, e, a);
      },
      function(a) {
        return rc(t, e, a);
      }
    ) : pm(t, e, n);
  }
  function pm(t, e, n) {
    e.status = "fulfilled", e.value = n, hm(e), t.state = n, e = t.pending, e !== null && (n = e.next, n === e ? t.pending = null : (n = n.next, e.next = n, dm(t, n)));
  }
  function rc(t, e, n) {
    var a = t.pending;
    if (t.pending = null, a !== null) {
      a = a.next;
      do
        e.status = "rejected", e.reason = n, hm(e), e = e.next;
      while (e !== a);
    }
    t.action = null;
  }
  function hm(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function ym(t, e) {
    return e;
  }
  function vm(t, e) {
    if (_t) {
      var n = Yt.formState;
      if (n !== null) {
        t: {
          var a = wt;
          if (_t) {
            if (ye) {
              e: {
                for (var i = ye, c = Cn; i.nodeType !== 8; ) {
                  if (!c) {
                    i = null;
                    break e;
                  }
                  if (i = hn(
                    i.nextSibling
                  ), i === null) {
                    i = null;
                    break e;
                  }
                }
                c = i.data, i = c === "F!" || c === "F" ? i : null;
              }
              if (i) {
                ye = hn(
                  i.nextSibling
                ), a = i.data === "F!";
                break t;
              }
            }
            Vl(a);
          }
          a = !1;
        }
        a && (e = n[0]);
      }
    }
    return n = _e(), n.memoizedState = n.baseState = e, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ym,
      lastRenderedState: e
    }, n.queue = a, n = Hm.bind(
      null,
      wt,
      a
    ), a.dispatch = n, a = ic(!1), c = mc.bind(
      null,
      wt,
      !1,
      a.queue
    ), a = _e(), i = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, a.queue = i, n = kg.bind(
      null,
      wt,
      i,
      c,
      n
    ), i.dispatch = n, a.memoizedState = t, [e, n, !1];
  }
  function gm(t) {
    var e = Wt();
    return bm(e, Ut, t);
  }
  function bm(t, e, n) {
    e = ac(
      t,
      e,
      ym
    )[0], t = or(Yn)[0], e = typeof e == "object" && e !== null && typeof e.then == "function" ? Xo(e) : e;
    var a = Wt(), i = a.queue, c = i.dispatch;
    return n !== a.memoizedState && (wt.flags |= 2048, $a(
      9,
      Qg.bind(null, i, n),
      { destroy: void 0 },
      null
    )), [e, c, t];
  }
  function Qg(t, e) {
    t.action = e;
  }
  function Sm(t) {
    var e = Wt(), n = Ut;
    if (n !== null)
      return bm(e, n, t);
    Wt(), e = e.memoizedState, n = Wt();
    var a = n.queue.dispatch;
    return n.memoizedState = t, [e, a, !1];
  }
  function $a(t, e, n, a) {
    return t = { tag: t, create: e, inst: n, deps: a, next: null }, e = wt.updateQueue, e === null && (e = lr(), wt.updateQueue = e), n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (a = n.next, n.next = t, t.next = a, e.lastEffect = t), t;
  }
  function xm() {
    return Wt().memoizedState;
  }
  function ir(t, e, n, a) {
    var i = _e();
    wt.flags |= t, i.memoizedState = $a(
      1 | e,
      n,
      { destroy: void 0 },
      a === void 0 ? null : a
    );
  }
  function rr(t, e, n, a) {
    var i = Wt();
    a = a === void 0 ? null : a;
    var c = i.memoizedState.inst;
    Ut !== null && a !== null && Fs(a, Ut.memoizedState.deps) ? i.memoizedState = $a(e, n, c, a) : (wt.flags |= t, i.memoizedState = $a(1 | e, n, c, a));
  }
  function wm(t, e) {
    ir(8390656, 8, t, e);
  }
  function sc(t, e) {
    rr(2048, 8, t, e);
  }
  function Tm(t, e) {
    return rr(4, 2, t, e);
  }
  function Em(t, e) {
    return rr(4, 4, t, e);
  }
  function Cm(t, e) {
    if (typeof e == "function") {
      t = t();
      var n = e(t);
      return function() {
        typeof n == "function" ? n() : e(null);
      };
    }
    if (e != null)
      return t = t(), e.current = t, function() {
        e.current = null;
      };
  }
  function Rm(t, e, n) {
    n = n != null ? n.concat([t]) : null, rr(4, 4, Cm.bind(null, e, t), n);
  }
  function cc() {
  }
  function Am(t, e) {
    var n = Wt();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    return e !== null && Fs(e, a[1]) ? a[0] : (n.memoizedState = [t, e], t);
  }
  function Dm(t, e) {
    var n = Wt();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    if (e !== null && Fs(e, a[1]))
      return a[0];
    if (a = t(), kl) {
      Ae(!0);
      try {
        t();
      } finally {
        Ae(!1);
      }
    }
    return n.memoizedState = [a, e], a;
  }
  function uc(t, e, n) {
    return n === void 0 || (ul & 1073741824) !== 0 ? t.memoizedState = e : (t.memoizedState = n, t = _p(), wt.lanes |= t, Sl |= t, n);
  }
  function Om(t, e, n, a) {
    return Ue(n, e) ? n : za.current !== null ? (t = uc(t, n, a), Ue(t, e) || (re = !0), t) : (ul & 42) === 0 ? (re = !0, t.memoizedState = n) : (t = _p(), wt.lanes |= t, Sl |= t, e);
  }
  function _m(t, e, n, a, i) {
    var c = I.p;
    I.p = c !== 0 && 8 > c ? c : 8;
    var m = Z.T, v = {};
    Z.T = v, mc(t, !1, e, n);
    try {
      var T = i(), D = Z.S;
      if (D !== null && D(v, T), T !== null && typeof T == "object" && typeof T.then == "function") {
        var Y = Vg(
          T,
          a
        );
        ko(
          t,
          e,
          Y,
          Ye(t)
        );
      } else
        ko(
          t,
          e,
          a,
          Ye(t)
        );
    } catch (K) {
      ko(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: K },
        Ye()
      );
    } finally {
      I.p = c, Z.T = m;
    }
  }
  function Zg() {
  }
  function fc(t, e, n, a) {
    if (t.tag !== 5) throw Error(r(476));
    var i = Mm(t).queue;
    _m(
      t,
      i,
      e,
      ht,
      n === null ? Zg : function() {
        return zm(t), n(a);
      }
    );
  }
  function Mm(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: ht,
      baseState: ht,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Yn,
        lastRenderedState: ht
      },
      next: null
    };
    var n = {};
    return e.next = {
      memoizedState: n,
      baseState: n,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Yn,
        lastRenderedState: n
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function zm(t) {
    var e = Mm(t).next.queue;
    ko(t, e, {}, Ye());
  }
  function dc() {
    return Se(fi);
  }
  function Nm() {
    return Wt().memoizedState;
  }
  function jm() {
    return Wt().memoizedState;
  }
  function Kg(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = Ye();
          t = pl(n);
          var a = hl(e, t, n);
          a !== null && (Ee(a, e, n), Ko(a, e, n)), e = { cache: Js() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function Jg(t, e, n) {
    var a = Ye();
    n = {
      lane: a,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, sr(t) ? Um(e, n) : (n = Vs(t, e, n, a), n !== null && (Ee(n, t, a), $m(n, e, a)));
  }
  function Hm(t, e, n) {
    var a = Ye();
    ko(t, e, n, a);
  }
  function ko(t, e, n, a) {
    var i = {
      lane: a,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (sr(t)) Um(e, i);
    else {
      var c = t.alternate;
      if (t.lanes === 0 && (c === null || c.lanes === 0) && (c = e.lastRenderedReducer, c !== null))
        try {
          var m = e.lastRenderedState, v = c(m, n);
          if (i.hasEagerState = !0, i.eagerState = v, Ue(v, m))
            return ki(t, e, i, 0), Yt === null && Xi(), !1;
        } catch {
        } finally {
        }
      if (n = Vs(t, e, i, a), n !== null)
        return Ee(n, t, a), $m(n, e, a), !0;
    }
    return !1;
  }
  function mc(t, e, n, a) {
    if (a = {
      lane: 2,
      revertLane: nu(),
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, sr(t)) {
      if (e) throw Error(r(479));
    } else
      e = Vs(
        t,
        n,
        a,
        2
      ), e !== null && Ee(e, t, 2);
  }
  function sr(t) {
    var e = t.alternate;
    return t === wt || e !== null && e === wt;
  }
  function Um(t, e) {
    Ha = er = !0;
    var n = t.pending;
    n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e;
  }
  function $m(t, e, n) {
    if ((n & 4194176) !== 0) {
      var a = e.lanes;
      a &= t.pendingLanes, n |= a, e.lanes = n, al(t, n);
    }
  }
  var An = {
    readContext: Se,
    use: ar,
    useCallback: Kt,
    useContext: Kt,
    useEffect: Kt,
    useImperativeHandle: Kt,
    useLayoutEffect: Kt,
    useInsertionEffect: Kt,
    useMemo: Kt,
    useReducer: Kt,
    useRef: Kt,
    useState: Kt,
    useDebugValue: Kt,
    useDeferredValue: Kt,
    useTransition: Kt,
    useSyncExternalStore: Kt,
    useId: Kt
  };
  An.useCacheRefresh = Kt, An.useMemoCache = Kt, An.useHostTransitionStatus = Kt, An.useFormState = Kt, An.useActionState = Kt, An.useOptimistic = Kt;
  var Ql = {
    readContext: Se,
    use: ar,
    useCallback: function(t, e) {
      return _e().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: Se,
    useEffect: wm,
    useImperativeHandle: function(t, e, n) {
      n = n != null ? n.concat([t]) : null, ir(
        4194308,
        4,
        Cm.bind(null, e, t),
        n
      );
    },
    useLayoutEffect: function(t, e) {
      return ir(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      ir(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var n = _e();
      e = e === void 0 ? null : e;
      var a = t();
      if (kl) {
        Ae(!0);
        try {
          t();
        } finally {
          Ae(!1);
        }
      }
      return n.memoizedState = [a, e], a;
    },
    useReducer: function(t, e, n) {
      var a = _e();
      if (n !== void 0) {
        var i = n(e);
        if (kl) {
          Ae(!0);
          try {
            n(e);
          } finally {
            Ae(!1);
          }
        }
      } else i = e;
      return a.memoizedState = a.baseState = i, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: i
      }, a.queue = t, t = t.dispatch = Jg.bind(
        null,
        wt,
        t
      ), [a.memoizedState, t];
    },
    useRef: function(t) {
      var e = _e();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = ic(t);
      var e = t.queue, n = Hm.bind(null, wt, e);
      return e.dispatch = n, [t.memoizedState, n];
    },
    useDebugValue: cc,
    useDeferredValue: function(t, e) {
      var n = _e();
      return uc(n, t, e);
    },
    useTransition: function() {
      var t = ic(!1);
      return t = _m.bind(
        null,
        wt,
        t.queue,
        !0,
        !1
      ), _e().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, n) {
      var a = wt, i = _e();
      if (_t) {
        if (n === void 0)
          throw Error(r(407));
        n = n();
      } else {
        if (n = e(), Yt === null) throw Error(r(349));
        (Dt & 60) !== 0 || im(a, e, n);
      }
      i.memoizedState = n;
      var c = { value: n, getSnapshot: e };
      return i.queue = c, wm(sm.bind(null, a, c, t), [
        t
      ]), a.flags |= 2048, $a(
        9,
        rm.bind(
          null,
          a,
          c,
          n,
          e
        ),
        { destroy: void 0 },
        null
      ), n;
    },
    useId: function() {
      var t = _e(), e = Yt.identifierPrefix;
      if (_t) {
        var n = Bn, a = $n;
        n = (a & ~(1 << 32 - oe(a) - 1)).toString(32) + n, e = ":" + e + "R" + n, n = nr++, 0 < n && (e += "H" + n.toString(32)), e += ":";
      } else
        n = Gg++, e = ":" + e + "r" + n.toString(32) + ":";
      return t.memoizedState = e;
    },
    useCacheRefresh: function() {
      return _e().memoizedState = Kg.bind(
        null,
        wt
      );
    }
  };
  Ql.useMemoCache = lc, Ql.useHostTransitionStatus = dc, Ql.useFormState = vm, Ql.useActionState = vm, Ql.useOptimistic = function(t) {
    var e = _e();
    e.memoizedState = e.baseState = t;
    var n = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: null,
      lastRenderedState: null
    };
    return e.queue = n, e = mc.bind(
      null,
      wt,
      !0,
      n
    ), n.dispatch = e, [t, e];
  };
  var fl = {
    readContext: Se,
    use: ar,
    useCallback: Am,
    useContext: Se,
    useEffect: sc,
    useImperativeHandle: Rm,
    useInsertionEffect: Tm,
    useLayoutEffect: Em,
    useMemo: Dm,
    useReducer: or,
    useRef: xm,
    useState: function() {
      return or(Yn);
    },
    useDebugValue: cc,
    useDeferredValue: function(t, e) {
      var n = Wt();
      return Om(
        n,
        Ut.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = or(Yn)[0], e = Wt().memoizedState;
      return [
        typeof t == "boolean" ? t : Xo(t),
        e
      ];
    },
    useSyncExternalStore: om,
    useId: Nm
  };
  fl.useCacheRefresh = jm, fl.useMemoCache = lc, fl.useHostTransitionStatus = dc, fl.useFormState = gm, fl.useActionState = gm, fl.useOptimistic = function(t, e) {
    var n = Wt();
    return fm(n, Ut, t, e);
  };
  var Zl = {
    readContext: Se,
    use: ar,
    useCallback: Am,
    useContext: Se,
    useEffect: sc,
    useImperativeHandle: Rm,
    useInsertionEffect: Tm,
    useLayoutEffect: Em,
    useMemo: Dm,
    useReducer: oc,
    useRef: xm,
    useState: function() {
      return oc(Yn);
    },
    useDebugValue: cc,
    useDeferredValue: function(t, e) {
      var n = Wt();
      return Ut === null ? uc(n, t, e) : Om(
        n,
        Ut.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = oc(Yn)[0], e = Wt().memoizedState;
      return [
        typeof t == "boolean" ? t : Xo(t),
        e
      ];
    },
    useSyncExternalStore: om,
    useId: Nm
  };
  Zl.useCacheRefresh = jm, Zl.useMemoCache = lc, Zl.useHostTransitionStatus = dc, Zl.useFormState = Sm, Zl.useActionState = Sm, Zl.useOptimistic = function(t, e) {
    var n = Wt();
    return Ut !== null ? fm(n, Ut, t, e) : (n.baseState = t, [t, n.queue.dispatch]);
  };
  function pc(t, e, n, a) {
    e = t.memoizedState, n = n(a, e), n = n == null ? e : P({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var hc = {
    isMounted: function(t) {
      return (t = t._reactInternals) ? V(t) === t : !1;
    },
    enqueueSetState: function(t, e, n) {
      t = t._reactInternals;
      var a = Ye(), i = pl(a);
      i.payload = e, n != null && (i.callback = n), e = hl(t, i, a), e !== null && (Ee(e, t, a), Ko(e, t, a));
    },
    enqueueReplaceState: function(t, e, n) {
      t = t._reactInternals;
      var a = Ye(), i = pl(a);
      i.tag = 1, i.payload = e, n != null && (i.callback = n), e = hl(t, i, a), e !== null && (Ee(e, t, a), Ko(e, t, a));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var n = Ye(), a = pl(n);
      a.tag = 2, e != null && (a.callback = e), e = hl(t, a, n), e !== null && (Ee(e, t, n), Ko(e, t, n));
    }
  };
  function Bm(t, e, n, a, i, c, m) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, c, m) : e.prototype && e.prototype.isPureReactComponent ? !zo(n, a) || !zo(i, c) : !0;
  }
  function Lm(t, e, n, a) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, a), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, a), e.state !== t && hc.enqueueReplaceState(e, e.state, null);
  }
  function Kl(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var a in e)
        a !== "ref" && (n[a] = e[a]);
    }
    if (t = t.defaultProps) {
      n === e && (n = P({}, n));
      for (var i in t)
        n[i] === void 0 && (n[i] = t[i]);
    }
    return n;
  }
  var cr = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  };
  function Ym(t) {
    cr(t);
  }
  function qm(t) {
    console.error(t);
  }
  function Vm(t) {
    cr(t);
  }
  function ur(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Gm(t, e, n) {
    try {
      var a = t.onCaughtError;
      a(n.value, {
        componentStack: n.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null
      });
    } catch (i) {
      setTimeout(function() {
        throw i;
      });
    }
  }
  function yc(t, e, n) {
    return n = pl(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      ur(t, e);
    }, n;
  }
  function Xm(t) {
    return t = pl(t), t.tag = 3, t;
  }
  function km(t, e, n, a) {
    var i = n.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var c = a.value;
      t.payload = function() {
        return i(c);
      }, t.callback = function() {
        Gm(e, n, a);
      };
    }
    var m = n.stateNode;
    m !== null && typeof m.componentDidCatch == "function" && (t.callback = function() {
      Gm(e, n, a), typeof i != "function" && (xl === null ? xl = /* @__PURE__ */ new Set([this]) : xl.add(this));
      var v = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: v !== null ? v : ""
      });
    });
  }
  function Pg(t, e, n, a, i) {
    if (n.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (e = n.alternate, e !== null && Zo(
        e,
        n,
        i,
        !0
      ), n = Pe.current, n !== null) {
        switch (n.tag) {
          case 13:
            return Rn === null ? Wc() : n.alternate === null && Qt === 0 && (Qt = 3), n.flags &= -257, n.flags |= 65536, n.lanes = i, a === Qs ? n.flags |= 16384 : (e = n.updateQueue, e === null ? n.updateQueue = /* @__PURE__ */ new Set([a]) : e.add(a), Ic(t, a, i)), !1;
          case 22:
            return n.flags |= 65536, a === Qs ? n.flags |= 16384 : (e = n.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, n.updateQueue = e) : (n = e.retryQueue, n === null ? e.retryQueue = /* @__PURE__ */ new Set([a]) : n.add(a)), Ic(t, a, i)), !1;
        }
        throw Error(r(435, n.tag));
      }
      return Ic(t, a, i), Wc(), !1;
    }
    if (_t)
      return e = Pe.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = i, a !== ks && (t = Error(r(422), { cause: a }), Uo(Ze(t, n)))) : (a !== ks && (e = Error(r(423), {
        cause: a
      }), Uo(
        Ze(e, n)
      )), t = t.current.alternate, t.flags |= 65536, i &= -i, t.lanes |= i, a = Ze(a, n), i = yc(
        t.stateNode,
        a,
        i
      ), Mc(t, i), Qt !== 4 && (Qt = 2)), !1;
    var c = Error(r(520), { cause: a });
    if (c = Ze(c, n), ni === null ? ni = [c] : ni.push(c), Qt !== 4 && (Qt = 2), e === null) return !0;
    a = Ze(a, n), n = e;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, t = i & -i, n.lanes |= t, t = yc(n.stateNode, a, t), Mc(n, t), !1;
        case 1:
          if (e = n.type, c = n.stateNode, (n.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || c !== null && typeof c.componentDidCatch == "function" && (xl === null || !xl.has(c))))
            return n.flags |= 65536, i &= -i, n.lanes |= i, i = Xm(i), km(
              i,
              t,
              n,
              a
            ), Mc(n, i), !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Qm = Error(r(461)), re = !1;
  function ve(t, e, n, a) {
    e.child = t === null ? Wd(e, null, n, a) : Gl(
      e,
      t.child,
      n,
      a
    );
  }
  function Zm(t, e, n, a, i) {
    n = n.render;
    var c = e.ref;
    if ("ref" in a) {
      var m = {};
      for (var v in a)
        v !== "ref" && (m[v] = a[v]);
    } else m = a;
    return Pl(e), a = Is(
      t,
      e,
      n,
      m,
      c,
      i
    ), v = tc(), t !== null && !re ? (ec(t, e, i), qn(t, e, i)) : (_t && v && Gs(e), e.flags |= 1, ve(t, e, a, i), e.child);
  }
  function Km(t, e, n, a, i) {
    if (t === null) {
      var c = n.type;
      return typeof c == "function" && !Lc(c) && c.defaultProps === void 0 && n.compare === null ? (e.tag = 15, e.type = c, Jm(
        t,
        e,
        c,
        a,
        i
      )) : (t = hr(
        n.type,
        null,
        a,
        e,
        e.mode,
        i
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (c = t.child, !Cc(t, i)) {
      var m = c.memoizedProps;
      if (n = n.compare, n = n !== null ? n : zo, n(m, a) && t.ref === e.ref)
        return qn(t, e, i);
    }
    return e.flags |= 1, t = bl(c, a), t.ref = e.ref, t.return = e, e.child = t;
  }
  function Jm(t, e, n, a, i) {
    if (t !== null) {
      var c = t.memoizedProps;
      if (zo(c, a) && t.ref === e.ref)
        if (re = !1, e.pendingProps = a = c, Cc(t, i))
          (t.flags & 131072) !== 0 && (re = !0);
        else
          return e.lanes = t.lanes, qn(t, e, i);
    }
    return vc(
      t,
      e,
      n,
      a,
      i
    );
  }
  function Pm(t, e, n) {
    var a = e.pendingProps, i = a.children, c = (e.stateNode._pendingVisibility & 2) !== 0, m = t !== null ? t.memoizedState : null;
    if (Qo(t, e), a.mode === "hidden" || c) {
      if ((e.flags & 128) !== 0) {
        if (a = m !== null ? m.baseLanes | n : n, t !== null) {
          for (i = e.child = t.child, c = 0; i !== null; )
            c = c | i.lanes | i.childLanes, i = i.sibling;
          e.childLanes = c & ~a;
        } else e.childLanes = 0, e.child = null;
        return Wm(
          t,
          e,
          a,
          n
        );
      }
      if ((n & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && tr(
          e,
          m !== null ? m.cachePool : null
        ), m !== null ? Fd(e, m) : Zs(), Id(e);
      else
        return e.lanes = e.childLanes = 536870912, Wm(
          t,
          e,
          m !== null ? m.baseLanes | n : n,
          n
        );
    } else
      m !== null ? (tr(e, m.cachePool), Fd(e, m), cl(), e.memoizedState = null) : (t !== null && tr(e, null), Zs(), cl());
    return ve(t, e, i, n), e.child;
  }
  function Wm(t, e, n, a) {
    var i = Ws();
    return i = i === null ? null : { parent: ee._currentValue, pool: i }, e.memoizedState = {
      baseLanes: n,
      cachePool: i
    }, t !== null && tr(e, null), Zs(), Id(e), t !== null && Zo(t, e, a, !0), null;
  }
  function Qo(t, e) {
    var n = e.ref;
    if (n === null)
      t !== null && t.ref !== null && (e.flags |= 2097664);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(r(284));
      (t === null || t.ref !== n) && (e.flags |= 2097664);
    }
  }
  function vc(t, e, n, a, i) {
    return Pl(e), n = Is(
      t,
      e,
      n,
      a,
      void 0,
      i
    ), a = tc(), t !== null && !re ? (ec(t, e, i), qn(t, e, i)) : (_t && a && Gs(e), e.flags |= 1, ve(t, e, n, i), e.child);
  }
  function Fm(t, e, n, a, i, c) {
    return Pl(e), e.updateQueue = null, n = am(
      e,
      a,
      n,
      i
    ), lm(t), a = tc(), t !== null && !re ? (ec(t, e, c), qn(t, e, c)) : (_t && a && Gs(e), e.flags |= 1, ve(t, e, n, c), e.child);
  }
  function Im(t, e, n, a, i) {
    if (Pl(e), e.stateNode === null) {
      var c = Da, m = n.contextType;
      typeof m == "object" && m !== null && (c = Se(m)), c = new n(a, c), e.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, c.updater = hc, e.stateNode = c, c._reactInternals = e, c = e.stateNode, c.props = a, c.state = e.memoizedState, c.refs = {}, Oc(e), m = n.contextType, c.context = typeof m == "object" && m !== null ? Se(m) : Da, c.state = e.memoizedState, m = n.getDerivedStateFromProps, typeof m == "function" && (pc(
        e,
        n,
        m,
        a
      ), c.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (m = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), m !== c.state && hc.enqueueReplaceState(c, c.state, null), Po(e, a, c, i), Jo(), c.state = e.memoizedState), typeof c.componentDidMount == "function" && (e.flags |= 4194308), a = !0;
    } else if (t === null) {
      c = e.stateNode;
      var v = e.memoizedProps, T = Kl(n, v);
      c.props = T;
      var D = c.context, Y = n.contextType;
      m = Da, typeof Y == "object" && Y !== null && (m = Se(Y));
      var K = n.getDerivedStateFromProps;
      Y = typeof K == "function" || typeof c.getSnapshotBeforeUpdate == "function", v = e.pendingProps !== v, Y || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (v || D !== m) && Lm(
        e,
        c,
        a,
        m
      ), ml = !1;
      var N = e.memoizedState;
      c.state = N, Po(e, a, c, i), Jo(), D = e.memoizedState, v || N !== D || ml ? (typeof K == "function" && (pc(
        e,
        n,
        K,
        a
      ), D = e.memoizedState), (T = ml || Bm(
        e,
        n,
        T,
        a,
        N,
        D,
        m
      )) ? (Y || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = a, e.memoizedState = D), c.props = a, c.state = D, c.context = m, a = T) : (typeof c.componentDidMount == "function" && (e.flags |= 4194308), a = !1);
    } else {
      c = e.stateNode, _c(t, e), m = e.memoizedProps, Y = Kl(n, m), c.props = Y, K = e.pendingProps, N = c.context, D = n.contextType, T = Da, typeof D == "object" && D !== null && (T = Se(D)), v = n.getDerivedStateFromProps, (D = typeof v == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (m !== K || N !== T) && Lm(
        e,
        c,
        a,
        T
      ), ml = !1, N = e.memoizedState, c.state = N, Po(e, a, c, i), Jo();
      var L = e.memoizedState;
      m !== K || N !== L || ml || t !== null && t.dependencies !== null && fr(t.dependencies) ? (typeof v == "function" && (pc(
        e,
        n,
        v,
        a
      ), L = e.memoizedState), (Y = ml || Bm(
        e,
        n,
        Y,
        a,
        N,
        L,
        T
      ) || t !== null && t.dependencies !== null && fr(t.dependencies)) ? (D || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(a, L, T), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(
        a,
        L,
        T
      )), typeof c.componentDidUpdate == "function" && (e.flags |= 4), typeof c.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || m === t.memoizedProps && N === t.memoizedState || (e.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || m === t.memoizedProps && N === t.memoizedState || (e.flags |= 1024), e.memoizedProps = a, e.memoizedState = L), c.props = a, c.state = L, c.context = T, a = Y) : (typeof c.componentDidUpdate != "function" || m === t.memoizedProps && N === t.memoizedState || (e.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || m === t.memoizedProps && N === t.memoizedState || (e.flags |= 1024), a = !1);
    }
    return c = a, Qo(t, e), a = (e.flags & 128) !== 0, c || a ? (c = e.stateNode, n = a && typeof n.getDerivedStateFromError != "function" ? null : c.render(), e.flags |= 1, t !== null && a ? (e.child = Gl(
      e,
      t.child,
      null,
      i
    ), e.child = Gl(
      e,
      null,
      n,
      i
    )) : ve(t, e, n, i), e.memoizedState = c.state, t = e.child) : t = qn(
      t,
      e,
      i
    ), t;
  }
  function tp(t, e, n, a) {
    return Ho(), e.flags |= 256, ve(t, e, n, a), e.child;
  }
  var gc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function bc(t) {
    return { baseLanes: t, cachePool: nm() };
  }
  function Sc(t, e, n) {
    return t = t !== null ? t.childLanes & ~n : 0, e && (t |= tn), t;
  }
  function ep(t, e, n) {
    var a = e.pendingProps, i = !1, c = (e.flags & 128) !== 0, m;
    if ((m = c) || (m = t !== null && t.memoizedState === null ? !1 : (te.current & 2) !== 0), m && (i = !0, e.flags &= -129), m = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (_t) {
        if (i ? sl(e) : cl(), _t) {
          var v = ye, T;
          if (T = v) {
            t: {
              for (T = v, v = Cn; T.nodeType !== 8; ) {
                if (!v) {
                  v = null;
                  break t;
                }
                if (T = hn(
                  T.nextSibling
                ), T === null) {
                  v = null;
                  break t;
                }
              }
              v = T;
            }
            v !== null ? (e.memoizedState = {
              dehydrated: v,
              treeContext: Yl !== null ? { id: $n, overflow: Bn } : null,
              retryLane: 536870912
            }, T = Ie(
              18,
              null,
              null,
              0
            ), T.stateNode = v, T.return = e, e.child = T, Te = e, ye = null, T = !0) : T = !1;
          }
          T || Vl(e);
        }
        if (v = e.memoizedState, v !== null && (v = v.dehydrated, v !== null))
          return v.data === "$!" ? e.lanes = 16 : e.lanes = 536870912, null;
        Ln(e);
      }
      return v = a.children, a = a.fallback, i ? (cl(), i = e.mode, v = wc(
        { mode: "hidden", children: v },
        i
      ), a = Fl(
        a,
        i,
        n,
        null
      ), v.return = e, a.return = e, v.sibling = a, e.child = v, i = e.child, i.memoizedState = bc(n), i.childLanes = Sc(
        t,
        m,
        n
      ), e.memoizedState = gc, a) : (sl(e), xc(e, v));
    }
    if (T = t.memoizedState, T !== null && (v = T.dehydrated, v !== null)) {
      if (c)
        e.flags & 256 ? (sl(e), e.flags &= -257, e = Tc(
          t,
          e,
          n
        )) : e.memoizedState !== null ? (cl(), e.child = t.child, e.flags |= 128, e = null) : (cl(), i = a.fallback, v = e.mode, a = wc(
          { mode: "visible", children: a.children },
          v
        ), i = Fl(
          i,
          v,
          n,
          null
        ), i.flags |= 2, a.return = e, i.return = e, a.sibling = i, e.child = a, Gl(
          e,
          t.child,
          null,
          n
        ), a = e.child, a.memoizedState = bc(n), a.childLanes = Sc(
          t,
          m,
          n
        ), e.memoizedState = gc, e = i);
      else if (sl(e), v.data === "$!") {
        if (m = v.nextSibling && v.nextSibling.dataset, m) var D = m.dgst;
        m = D, a = Error(r(419)), a.stack = "", a.digest = m, Uo({ value: a, source: null, stack: null }), e = Tc(
          t,
          e,
          n
        );
      } else if (re || Zo(t, e, n, !1), m = (n & t.childLanes) !== 0, re || m) {
        if (m = Yt, m !== null) {
          if (a = n & -n, (a & 42) !== 0) a = 1;
          else
            switch (a) {
              case 2:
                a = 1;
                break;
              case 8:
                a = 4;
                break;
              case 32:
                a = 16;
                break;
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
                a = 64;
                break;
              case 268435456:
                a = 134217728;
                break;
              default:
                a = 0;
            }
          if (a = (a & (m.suspendedLanes | n)) !== 0 ? 0 : a, a !== 0 && a !== T.retryLane)
            throw T.retryLane = a, rl(t, a), Ee(m, t, a), Qm;
        }
        v.data === "$?" || Wc(), e = Tc(
          t,
          e,
          n
        );
      } else
        v.data === "$?" ? (e.flags |= 128, e.child = t.child, e = f0.bind(
          null,
          t
        ), v._reactRetry = e, e = null) : (t = T.treeContext, ye = hn(
          v.nextSibling
        ), Te = e, _t = !0, mn = null, Cn = !1, t !== null && (Ke[Je++] = $n, Ke[Je++] = Bn, Ke[Je++] = Yl, $n = t.id, Bn = t.overflow, Yl = e), e = xc(
          e,
          a.children
        ), e.flags |= 4096);
      return e;
    }
    return i ? (cl(), i = a.fallback, v = e.mode, T = t.child, D = T.sibling, a = bl(T, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = T.subtreeFlags & 31457280, D !== null ? i = bl(D, i) : (i = Fl(
      i,
      v,
      n,
      null
    ), i.flags |= 2), i.return = e, a.return = e, a.sibling = i, e.child = a, a = i, i = e.child, v = t.child.memoizedState, v === null ? v = bc(n) : (T = v.cachePool, T !== null ? (D = ee._currentValue, T = T.parent !== D ? { parent: D, pool: D } : T) : T = nm(), v = {
      baseLanes: v.baseLanes | n,
      cachePool: T
    }), i.memoizedState = v, i.childLanes = Sc(
      t,
      m,
      n
    ), e.memoizedState = gc, a) : (sl(e), n = t.child, t = n.sibling, n = bl(n, {
      mode: "visible",
      children: a.children
    }), n.return = e, n.sibling = null, t !== null && (m = e.deletions, m === null ? (e.deletions = [t], e.flags |= 16) : m.push(t)), e.child = n, e.memoizedState = null, n);
  }
  function xc(t, e) {
    return e = wc(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function wc(t, e) {
    return Ap(t, e, 0, null);
  }
  function Tc(t, e, n) {
    return Gl(e, t.child, null, n), t = xc(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function np(t, e, n) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e), Ac(t.return, e, n);
  }
  function Ec(t, e, n, a, i) {
    var c = t.memoizedState;
    c === null ? t.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: n,
      tailMode: i
    } : (c.isBackwards = e, c.rendering = null, c.renderingStartTime = 0, c.last = a, c.tail = n, c.tailMode = i);
  }
  function lp(t, e, n) {
    var a = e.pendingProps, i = a.revealOrder, c = a.tail;
    if (ve(t, e, a.children, n), a = te.current, (a & 2) !== 0)
      a = a & 1 | 2, e.flags |= 128;
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = e.child; t !== null; ) {
          if (t.tag === 13)
            t.memoizedState !== null && np(t, n, e);
          else if (t.tag === 19)
            np(t, n, e);
          else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue;
          }
          if (t === e) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
              break t;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      a &= 1;
    }
    switch (Ot(te, a), i) {
      case "forwards":
        for (n = e.child, i = null; n !== null; )
          t = n.alternate, t !== null && Ii(t) === null && (i = n), n = n.sibling;
        n = i, n === null ? (i = e.child, e.child = null) : (i = n.sibling, n.sibling = null), Ec(
          e,
          !1,
          i,
          n,
          c
        );
        break;
      case "backwards":
        for (n = null, i = e.child, e.child = null; i !== null; ) {
          if (t = i.alternate, t !== null && Ii(t) === null) {
            e.child = i;
            break;
          }
          t = i.sibling, i.sibling = n, n = i, i = t;
        }
        Ec(
          e,
          !0,
          n,
          null,
          c
        );
        break;
      case "together":
        Ec(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function qn(t, e, n) {
    if (t !== null && (e.dependencies = t.dependencies), Sl |= e.lanes, (n & e.childLanes) === 0)
      if (t !== null) {
        if (Zo(
          t,
          e,
          n,
          !1
        ), (n & e.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && e.child !== t.child)
      throw Error(r(153));
    if (e.child !== null) {
      for (t = e.child, n = bl(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null; )
        t = t.sibling, n = n.sibling = bl(t, t.pendingProps), n.return = e;
      n.sibling = null;
    }
    return e.child;
  }
  function Cc(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && fr(t)));
  }
  function Wg(t, e, n) {
    switch (e.tag) {
      case 3:
        Ne(e, e.stateNode.containerInfo), dl(e, ee, t.memoizedState.cache), Ho();
        break;
      case 27:
      case 5:
        Vt(e);
        break;
      case 4:
        Ne(e, e.stateNode.containerInfo);
        break;
      case 10:
        dl(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (sl(e), e.flags |= 128, null) : (n & e.child.childLanes) !== 0 ? ep(t, e, n) : (sl(e), t = qn(
            t,
            e,
            n
          ), t !== null ? t.sibling : null);
        sl(e);
        break;
      case 19:
        var i = (t.flags & 128) !== 0;
        if (a = (n & e.childLanes) !== 0, a || (Zo(
          t,
          e,
          n,
          !1
        ), a = (n & e.childLanes) !== 0), i) {
          if (a)
            return lp(
              t,
              e,
              n
            );
          e.flags |= 128;
        }
        if (i = e.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), Ot(te, te.current), a) break;
        return null;
      case 22:
      case 23:
        return e.lanes = 0, Pm(t, e, n);
      case 24:
        dl(e, ee, t.memoizedState.cache);
    }
    return qn(t, e, n);
  }
  function ap(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        re = !0;
      else {
        if (!Cc(t, n) && (e.flags & 128) === 0)
          return re = !1, Wg(
            t,
            e,
            n
          );
        re = (t.flags & 131072) !== 0;
      }
    else
      re = !1, _t && (e.flags & 1048576) !== 0 && Vd(e, Ki, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          t = e.pendingProps;
          var a = e.elementType, i = a._init;
          if (a = i(a._payload), e.type = a, typeof a == "function")
            Lc(a) ? (t = Kl(a, t), e.tag = 1, e = Im(
              null,
              e,
              a,
              t,
              n
            )) : (e.tag = 0, e = vc(
              null,
              e,
              a,
              t,
              n
            ));
          else {
            if (a != null) {
              if (i = a.$$typeof, i === R) {
                e.tag = 11, e = Zm(
                  null,
                  e,
                  a,
                  t,
                  n
                );
                break t;
              } else if (i === j) {
                e.tag = 14, e = Km(
                  null,
                  e,
                  a,
                  t,
                  n
                );
                break t;
              }
            }
            throw e = J(a) || a, Error(r(306, e, ""));
          }
        }
        return e;
      case 0:
        return vc(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 1:
        return a = e.type, i = Kl(
          a,
          e.pendingProps
        ), Im(
          t,
          e,
          a,
          i,
          n
        );
      case 3:
        t: {
          if (Ne(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(r(387));
          var c = e.pendingProps;
          i = e.memoizedState, a = i.element, _c(t, e), Po(e, c, null, n);
          var m = e.memoizedState;
          if (c = m.cache, dl(e, ee, c), c !== i.cache && Dc(
            e,
            [ee],
            n,
            !0
          ), Jo(), c = m.element, i.isDehydrated)
            if (i = {
              element: c,
              isDehydrated: !1,
              cache: m.cache
            }, e.updateQueue.baseState = i, e.memoizedState = i, e.flags & 256) {
              e = tp(
                t,
                e,
                c,
                n
              );
              break t;
            } else if (c !== a) {
              a = Ze(
                Error(r(424)),
                e
              ), Uo(a), e = tp(
                t,
                e,
                c,
                n
              );
              break t;
            } else
              for (ye = hn(
                e.stateNode.containerInfo.firstChild
              ), Te = e, _t = !0, mn = null, Cn = !0, n = Wd(
                e,
                null,
                c,
                n
              ), e.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Ho(), c === a) {
              e = qn(
                t,
                e,
                n
              );
              break t;
            }
            ve(t, e, c, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return Qo(t, e), t === null ? (n = rh(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = n : _t || (n = e.type, t = e.pendingProps, a = Ar(
          be.current
        ).createElement(n), a[Jt] = e, a[St] = t, ge(a, n, t), ie(a), e.stateNode = a) : e.memoizedState = rh(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return Vt(e), t === null && _t && (a = e.stateNode = ah(
          e.type,
          e.pendingProps,
          be.current
        ), Te = e, Cn = !0, ye = hn(
          a.firstChild
        )), a = e.pendingProps.children, t !== null || _t ? ve(
          t,
          e,
          a,
          n
        ) : e.child = Gl(
          e,
          null,
          a,
          n
        ), Qo(t, e), e.child;
      case 5:
        return t === null && _t && ((i = a = ye) && (a = A0(
          a,
          e.type,
          e.pendingProps,
          Cn
        ), a !== null ? (e.stateNode = a, Te = e, ye = hn(
          a.firstChild
        ), Cn = !1, i = !0) : i = !1), i || Vl(e)), Vt(e), i = e.type, c = e.pendingProps, m = t !== null ? t.memoizedProps : null, a = c.children, fu(i, c) ? a = null : m !== null && fu(i, m) && (e.flags |= 32), e.memoizedState !== null && (i = Is(
          t,
          e,
          Xg,
          null,
          null,
          n
        ), fi._currentValue = i), Qo(t, e), ve(t, e, a, n), e.child;
      case 6:
        return t === null && _t && ((t = n = ye) && (n = D0(
          n,
          e.pendingProps,
          Cn
        ), n !== null ? (e.stateNode = n, Te = e, ye = null, t = !0) : t = !1), t || Vl(e)), null;
      case 13:
        return ep(t, e, n);
      case 4:
        return Ne(
          e,
          e.stateNode.containerInfo
        ), a = e.pendingProps, t === null ? e.child = Gl(
          e,
          null,
          a,
          n
        ) : ve(
          t,
          e,
          a,
          n
        ), e.child;
      case 11:
        return Zm(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 7:
        return ve(
          t,
          e,
          e.pendingProps,
          n
        ), e.child;
      case 8:
        return ve(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 12:
        return ve(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 10:
        return a = e.pendingProps, dl(e, e.type, a.value), ve(
          t,
          e,
          a.children,
          n
        ), e.child;
      case 9:
        return i = e.type._context, a = e.pendingProps.children, Pl(e), i = Se(i), a = a(i), e.flags |= 1, ve(t, e, a, n), e.child;
      case 14:
        return Km(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 15:
        return Jm(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 19:
        return lp(t, e, n);
      case 22:
        return Pm(t, e, n);
      case 24:
        return Pl(e), a = Se(ee), t === null ? (i = Ws(), i === null && (i = Yt, c = Js(), i.pooledCache = c, c.refCount++, c !== null && (i.pooledCacheLanes |= n), i = c), e.memoizedState = {
          parent: a,
          cache: i
        }, Oc(e), dl(e, ee, i)) : ((t.lanes & n) !== 0 && (_c(t, e), Po(e, null, null, n), Jo()), i = t.memoizedState, c = e.memoizedState, i.parent !== a ? (i = { parent: a, cache: a }, e.memoizedState = i, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = i), dl(e, ee, a)) : (a = c.cache, dl(e, ee, a), a !== i.cache && Dc(
          e,
          [ee],
          n,
          !0
        ))), ve(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(r(156, e.tag));
  }
  var Rc = bt(null), Jl = null, Vn = null;
  function dl(t, e, n) {
    Ot(Rc, e._currentValue), e._currentValue = n;
  }
  function Gn(t) {
    t._currentValue = Rc.current, zt(Rc);
  }
  function Ac(t, e, n) {
    for (; t !== null; ) {
      var a = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e), t === n) break;
      t = t.return;
    }
  }
  function Dc(t, e, n, a) {
    var i = t.child;
    for (i !== null && (i.return = t); i !== null; ) {
      var c = i.dependencies;
      if (c !== null) {
        var m = i.child;
        c = c.firstContext;
        t: for (; c !== null; ) {
          var v = c;
          c = i;
          for (var T = 0; T < e.length; T++)
            if (v.context === e[T]) {
              c.lanes |= n, v = c.alternate, v !== null && (v.lanes |= n), Ac(
                c.return,
                n,
                t
              ), a || (m = null);
              break t;
            }
          c = v.next;
        }
      } else if (i.tag === 18) {
        if (m = i.return, m === null) throw Error(r(341));
        m.lanes |= n, c = m.alternate, c !== null && (c.lanes |= n), Ac(m, n, t), m = null;
      } else m = i.child;
      if (m !== null) m.return = i;
      else
        for (m = i; m !== null; ) {
          if (m === t) {
            m = null;
            break;
          }
          if (i = m.sibling, i !== null) {
            i.return = m.return, m = i;
            break;
          }
          m = m.return;
        }
      i = m;
    }
  }
  function Zo(t, e, n, a) {
    t = null;
    for (var i = e, c = !1; i !== null; ) {
      if (!c) {
        if ((i.flags & 524288) !== 0) c = !0;
        else if ((i.flags & 262144) !== 0) break;
      }
      if (i.tag === 10) {
        var m = i.alternate;
        if (m === null) throw Error(r(387));
        if (m = m.memoizedProps, m !== null) {
          var v = i.type;
          Ue(i.pendingProps.value, m.value) || (t !== null ? t.push(v) : t = [v]);
        }
      } else if (i === Ve.current) {
        if (m = i.alternate, m === null) throw Error(r(387));
        m.memoizedState.memoizedState !== i.memoizedState.memoizedState && (t !== null ? t.push(fi) : t = [fi]);
      }
      i = i.return;
    }
    t !== null && Dc(
      e,
      t,
      n,
      a
    ), e.flags |= 262144;
  }
  function fr(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Ue(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function Pl(t) {
    Jl = t, Vn = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function Se(t) {
    return op(Jl, t);
  }
  function dr(t, e) {
    return Jl === null && Pl(t), op(t, e);
  }
  function op(t, e) {
    var n = e._currentValue;
    if (e = { context: e, memoizedValue: n, next: null }, Vn === null) {
      if (t === null) throw Error(r(308));
      Vn = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else Vn = Vn.next = e;
    return n;
  }
  var ml = !1;
  function Oc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function _c(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function pl(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function hl(t, e, n) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (Xt & 2) !== 0) {
      var i = a.pending;
      return i === null ? e.next = e : (e.next = i.next, i.next = e), a.pending = e, e = Qi(t), Yd(t, null, n), e;
    }
    return ki(t, a, e, n), Qi(t);
  }
  function Ko(t, e, n) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194176) !== 0)) {
      var a = e.lanes;
      a &= t.pendingLanes, n |= a, e.lanes = n, al(t, n);
    }
  }
  function Mc(t, e) {
    var n = t.updateQueue, a = t.alternate;
    if (a !== null && (a = a.updateQueue, n === a)) {
      var i = null, c = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var m = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          c === null ? i = c = m : c = c.next = m, n = n.next;
        } while (n !== null);
        c === null ? i = c = e : c = c.next = e;
      } else i = c = e;
      n = {
        baseState: a.baseState,
        firstBaseUpdate: i,
        lastBaseUpdate: c,
        shared: a.shared,
        callbacks: a.callbacks
      }, t.updateQueue = n;
      return;
    }
    t = n.lastBaseUpdate, t === null ? n.firstBaseUpdate = e : t.next = e, n.lastBaseUpdate = e;
  }
  var zc = !1;
  function Jo() {
    if (zc) {
      var t = ja;
      if (t !== null) throw t;
    }
  }
  function Po(t, e, n, a) {
    zc = !1;
    var i = t.updateQueue;
    ml = !1;
    var c = i.firstBaseUpdate, m = i.lastBaseUpdate, v = i.shared.pending;
    if (v !== null) {
      i.shared.pending = null;
      var T = v, D = T.next;
      T.next = null, m === null ? c = D : m.next = D, m = T;
      var Y = t.alternate;
      Y !== null && (Y = Y.updateQueue, v = Y.lastBaseUpdate, v !== m && (v === null ? Y.firstBaseUpdate = D : v.next = D, Y.lastBaseUpdate = T));
    }
    if (c !== null) {
      var K = i.baseState;
      m = 0, Y = D = T = null, v = c;
      do {
        var N = v.lane & -536870913, L = N !== v.lane;
        if (L ? (Dt & N) === N : (a & N) === N) {
          N !== 0 && N === Na && (zc = !0), Y !== null && (Y = Y.next = {
            lane: 0,
            tag: v.tag,
            payload: v.payload,
            callback: null,
            next: null
          });
          t: {
            var rt = t, vt = v;
            N = e;
            var Zt = n;
            switch (vt.tag) {
              case 1:
                if (rt = vt.payload, typeof rt == "function") {
                  K = rt.call(Zt, K, N);
                  break t;
                }
                K = rt;
                break t;
              case 3:
                rt.flags = rt.flags & -65537 | 128;
              case 0:
                if (rt = vt.payload, N = typeof rt == "function" ? rt.call(Zt, K, N) : rt, N == null) break t;
                K = P({}, K, N);
                break t;
              case 2:
                ml = !0;
            }
          }
          N = v.callback, N !== null && (t.flags |= 64, L && (t.flags |= 8192), L = i.callbacks, L === null ? i.callbacks = [N] : L.push(N));
        } else
          L = {
            lane: N,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null
          }, Y === null ? (D = Y = L, T = K) : Y = Y.next = L, m |= N;
        if (v = v.next, v === null) {
          if (v = i.shared.pending, v === null)
            break;
          L = v, v = L.next, L.next = null, i.lastBaseUpdate = L, i.shared.pending = null;
        }
      } while (!0);
      Y === null && (T = K), i.baseState = T, i.firstBaseUpdate = D, i.lastBaseUpdate = Y, c === null && (i.shared.lanes = 0), Sl |= m, t.lanes = m, t.memoizedState = K;
    }
  }
  function ip(t, e) {
    if (typeof t != "function")
      throw Error(r(191, t));
    t.call(e);
  }
  function rp(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++)
        ip(n[t], e);
  }
  function Wo(t, e) {
    try {
      var n = e.updateQueue, a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var i = a.next;
        n = i;
        do {
          if ((n.tag & t) === t) {
            a = void 0;
            var c = n.create, m = n.inst;
            a = c(), m.destroy = a;
          }
          n = n.next;
        } while (n !== i);
      }
    } catch (v) {
      Bt(e, e.return, v);
    }
  }
  function yl(t, e, n) {
    try {
      var a = e.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var c = i.next;
        a = c;
        do {
          if ((a.tag & t) === t) {
            var m = a.inst, v = m.destroy;
            if (v !== void 0) {
              m.destroy = void 0, i = e;
              var T = n;
              try {
                v();
              } catch (D) {
                Bt(
                  i,
                  T,
                  D
                );
              }
            }
          }
          a = a.next;
        } while (a !== c);
      }
    } catch (D) {
      Bt(e, e.return, D);
    }
  }
  function sp(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        rp(e, n);
      } catch (a) {
        Bt(t, t.return, a);
      }
    }
  }
  function cp(t, e, n) {
    n.props = Kl(
      t.type,
      t.memoizedProps
    ), n.state = t.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (a) {
      Bt(t, e, a);
    }
  }
  function Wl(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        var a = t.stateNode;
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var i = a;
            break;
          default:
            i = a;
        }
        typeof n == "function" ? t.refCleanup = n(i) : n.current = i;
      }
    } catch (c) {
      Bt(t, e, c);
    }
  }
  function $e(t, e) {
    var n = t.ref, a = t.refCleanup;
    if (n !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (i) {
          Bt(t, e, i);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (i) {
          Bt(t, e, i);
        }
      else n.current = null;
  }
  function up(t) {
    var e = t.type, n = t.memoizedProps, a = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && a.focus();
          break t;
        case "img":
          n.src ? a.src = n.src : n.srcSet && (a.srcset = n.srcSet);
      }
    } catch (i) {
      Bt(t, t.return, i);
    }
  }
  function fp(t, e, n) {
    try {
      var a = t.stateNode;
      w0(a, t.type, n, e), a[St] = e;
    } catch (i) {
      Bt(t, t.return, i);
    }
  }
  function dp(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 || t.tag === 4;
  }
  function Nc(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || dp(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 27 && t.tag !== 18; ) {
        if (t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function jc(t, e, n) {
    var a = t.tag;
    if (a === 5 || a === 6)
      t = t.stateNode, e ? n.nodeType === 8 ? n.parentNode.insertBefore(t, e) : n.insertBefore(t, e) : (n.nodeType === 8 ? (e = n.parentNode, e.insertBefore(t, n)) : (e = n, e.appendChild(t)), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = Rr));
    else if (a !== 4 && a !== 27 && (t = t.child, t !== null))
      for (jc(t, e, n), t = t.sibling; t !== null; )
        jc(t, e, n), t = t.sibling;
  }
  function mr(t, e, n) {
    var a = t.tag;
    if (a === 5 || a === 6)
      t = t.stateNode, e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (a !== 4 && a !== 27 && (t = t.child, t !== null))
      for (mr(t, e, n), t = t.sibling; t !== null; )
        mr(t, e, n), t = t.sibling;
  }
  var Xn = !1, kt = !1, Hc = !1, mp = typeof WeakSet == "function" ? WeakSet : Set, se = null, pp = !1;
  function Fg(t, e) {
    if (t = t.containerInfo, cu = Nr, t = Md(t), $s(t)) {
      if ("selectionStart" in t)
        var n = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          n = (n = t.ownerDocument) && n.defaultView || window;
          var a = n.getSelection && n.getSelection();
          if (a && a.rangeCount !== 0) {
            n = a.anchorNode;
            var i = a.anchorOffset, c = a.focusNode;
            a = a.focusOffset;
            try {
              n.nodeType, c.nodeType;
            } catch {
              n = null;
              break t;
            }
            var m = 0, v = -1, T = -1, D = 0, Y = 0, K = t, N = null;
            e: for (; ; ) {
              for (var L; K !== n || i !== 0 && K.nodeType !== 3 || (v = m + i), K !== c || a !== 0 && K.nodeType !== 3 || (T = m + a), K.nodeType === 3 && (m += K.nodeValue.length), (L = K.firstChild) !== null; )
                N = K, K = L;
              for (; ; ) {
                if (K === t) break e;
                if (N === n && ++D === i && (v = m), N === c && ++Y === a && (T = m), (L = K.nextSibling) !== null) break;
                K = N, N = K.parentNode;
              }
              K = L;
            }
            n = v === -1 || T === -1 ? null : { start: v, end: T };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (uu = { focusedElem: t, selectionRange: n }, Nr = !1, se = e; se !== null; )
      if (e = se, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null)
        t.return = e, se = t;
      else
        for (; se !== null; ) {
          switch (e = se, c = e.alternate, t = e.flags, e.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && c !== null) {
                t = void 0, n = e, i = c.memoizedProps, c = c.memoizedState, a = n.stateNode;
                try {
                  var rt = Kl(
                    n.type,
                    i,
                    n.elementType === n.type
                  );
                  t = a.getSnapshotBeforeUpdate(
                    rt,
                    c
                  ), a.__reactInternalSnapshotBeforeUpdate = t;
                } catch (vt) {
                  Bt(
                    n,
                    n.return,
                    vt
                  );
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (t = e.stateNode.containerInfo, n = t.nodeType, n === 9)
                  pu(t);
                else if (n === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      pu(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(r(163));
          }
          if (t = e.sibling, t !== null) {
            t.return = e.return, se = t;
            break;
          }
          se = e.return;
        }
    return rt = pp, pp = !1, rt;
  }
  function hp(t, e, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Qn(t, n), a & 4 && Wo(5, n);
        break;
      case 1:
        if (Qn(t, n), a & 4)
          if (t = n.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (v) {
              Bt(n, n.return, v);
            }
          else {
            var i = Kl(
              n.type,
              e.memoizedProps
            );
            e = e.memoizedState;
            try {
              t.componentDidUpdate(
                i,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (v) {
              Bt(
                n,
                n.return,
                v
              );
            }
          }
        a & 64 && sp(n), a & 512 && Wl(n, n.return);
        break;
      case 3:
        if (Qn(t, n), a & 64 && (a = n.updateQueue, a !== null)) {
          if (t = null, n.child !== null)
            switch (n.child.tag) {
              case 27:
              case 5:
                t = n.child.stateNode;
                break;
              case 1:
                t = n.child.stateNode;
            }
          try {
            rp(a, t);
          } catch (v) {
            Bt(n, n.return, v);
          }
        }
        break;
      case 26:
        Qn(t, n), a & 512 && Wl(n, n.return);
        break;
      case 27:
      case 5:
        Qn(t, n), e === null && a & 4 && up(n), a & 512 && Wl(n, n.return);
        break;
      case 12:
        Qn(t, n);
        break;
      case 13:
        Qn(t, n), a & 4 && gp(t, n);
        break;
      case 22:
        if (i = n.memoizedState !== null || Xn, !i) {
          e = e !== null && e.memoizedState !== null || kt;
          var c = Xn, m = kt;
          Xn = i, (kt = e) && !m ? vl(
            t,
            n,
            (n.subtreeFlags & 8772) !== 0
          ) : Qn(t, n), Xn = c, kt = m;
        }
        a & 512 && (n.memoizedProps.mode === "manual" ? Wl(n, n.return) : $e(n, n.return));
        break;
      default:
        Qn(t, n);
    }
  }
  function yp(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, yp(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && xs(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var Ft = null, Be = !1;
  function kn(t, e, n) {
    for (n = n.child; n !== null; )
      vp(t, e, n), n = n.sibling;
  }
  function vp(t, e, n) {
    if (de && typeof de.onCommitFiberUnmount == "function")
      try {
        de.onCommitFiberUnmount(wn, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        kt || $e(n, e), kn(
          t,
          e,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        kt || $e(n, e);
        var a = Ft, i = Be;
        for (Ft = n.stateNode, kn(
          t,
          e,
          n
        ), n = n.stateNode, e = n.attributes; e.length; )
          n.removeAttributeNode(e[0]);
        xs(n), Ft = a, Be = i;
        break;
      case 5:
        kt || $e(n, e);
      case 6:
        i = Ft;
        var c = Be;
        if (Ft = null, kn(
          t,
          e,
          n
        ), Ft = i, Be = c, Ft !== null)
          if (Be)
            try {
              t = Ft, a = n.stateNode, t.nodeType === 8 ? t.parentNode.removeChild(a) : t.removeChild(a);
            } catch (m) {
              Bt(
                n,
                e,
                m
              );
            }
          else
            try {
              Ft.removeChild(n.stateNode);
            } catch (m) {
              Bt(
                n,
                e,
                m
              );
            }
        break;
      case 18:
        Ft !== null && (Be ? (e = Ft, n = n.stateNode, e.nodeType === 8 ? mu(
          e.parentNode,
          n
        ) : e.nodeType === 1 && mu(e, n), hi(e)) : mu(Ft, n.stateNode));
        break;
      case 4:
        a = Ft, i = Be, Ft = n.stateNode.containerInfo, Be = !0, kn(
          t,
          e,
          n
        ), Ft = a, Be = i;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        kt || yl(2, n, e), kt || yl(4, n, e), kn(
          t,
          e,
          n
        );
        break;
      case 1:
        kt || ($e(n, e), a = n.stateNode, typeof a.componentWillUnmount == "function" && cp(
          n,
          e,
          a
        )), kn(
          t,
          e,
          n
        );
        break;
      case 21:
        kn(
          t,
          e,
          n
        );
        break;
      case 22:
        kt || $e(n, e), kt = (a = kt) || n.memoizedState !== null, kn(
          t,
          e,
          n
        ), kt = a;
        break;
      default:
        kn(
          t,
          e,
          n
        );
    }
  }
  function gp(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        hi(t);
      } catch (n) {
        Bt(e, e.return, n);
      }
  }
  function Ig(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new mp()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new mp()), e;
      default:
        throw Error(r(435, t.tag));
    }
  }
  function Uc(t, e) {
    var n = Ig(t);
    e.forEach(function(a) {
      var i = d0.bind(null, t, a);
      n.has(a) || (n.add(a), a.then(i, i));
    });
  }
  function We(t, e) {
    var n = e.deletions;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var i = n[a], c = t, m = e, v = m;
        t: for (; v !== null; ) {
          switch (v.tag) {
            case 27:
            case 5:
              Ft = v.stateNode, Be = !1;
              break t;
            case 3:
              Ft = v.stateNode.containerInfo, Be = !0;
              break t;
            case 4:
              Ft = v.stateNode.containerInfo, Be = !0;
              break t;
          }
          v = v.return;
        }
        if (Ft === null) throw Error(r(160));
        vp(c, m, i), Ft = null, Be = !1, c = i.alternate, c !== null && (c.return = null), i.return = null;
      }
    if (e.subtreeFlags & 13878)
      for (e = e.child; e !== null; )
        bp(e, t), e = e.sibling;
  }
  var pn = null;
  function bp(t, e) {
    var n = t.alternate, a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        We(e, t), Fe(t), a & 4 && (yl(3, t, t.return), Wo(3, t), yl(5, t, t.return));
        break;
      case 1:
        We(e, t), Fe(t), a & 512 && (kt || n === null || $e(n, n.return)), a & 64 && Xn && (t = t.updateQueue, t !== null && (a = t.callbacks, a !== null && (n = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = n === null ? a : n.concat(a))));
        break;
      case 26:
        var i = pn;
        if (We(e, t), Fe(t), a & 512 && (kt || n === null || $e(n, n.return)), a & 4) {
          var c = n !== null ? n.memoizedState : null;
          if (a = t.memoizedState, n === null)
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  a = t.type, n = t.memoizedProps, i = i.ownerDocument || i;
                  e: switch (a) {
                    case "title":
                      c = i.getElementsByTagName("title")[0], (!c || c[To] || c[Jt] || c.namespaceURI === "http://www.w3.org/2000/svg" || c.hasAttribute("itemprop")) && (c = i.createElement(a), i.head.insertBefore(
                        c,
                        i.querySelector("head > title")
                      )), ge(c, a, n), c[Jt] = t, ie(c), a = c;
                      break t;
                    case "link":
                      var m = uh(
                        "link",
                        "href",
                        i
                      ).get(a + (n.href || ""));
                      if (m) {
                        for (var v = 0; v < m.length; v++)
                          if (c = m[v], c.getAttribute("href") === (n.href == null ? null : n.href) && c.getAttribute("rel") === (n.rel == null ? null : n.rel) && c.getAttribute("title") === (n.title == null ? null : n.title) && c.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                            m.splice(v, 1);
                            break e;
                          }
                      }
                      c = i.createElement(a), ge(c, a, n), i.head.appendChild(c);
                      break;
                    case "meta":
                      if (m = uh(
                        "meta",
                        "content",
                        i
                      ).get(a + (n.content || ""))) {
                        for (v = 0; v < m.length; v++)
                          if (c = m[v], c.getAttribute("content") === (n.content == null ? null : "" + n.content) && c.getAttribute("name") === (n.name == null ? null : n.name) && c.getAttribute("property") === (n.property == null ? null : n.property) && c.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && c.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                            m.splice(v, 1);
                            break e;
                          }
                      }
                      c = i.createElement(a), ge(c, a, n), i.head.appendChild(c);
                      break;
                    default:
                      throw Error(r(468, a));
                  }
                  c[Jt] = t, ie(c), a = c;
                }
                t.stateNode = a;
              } else
                fh(
                  i,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = ch(
                i,
                a,
                t.memoizedProps
              );
          else
            c !== a ? (c === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : c.count--, a === null ? fh(
              i,
              t.type,
              t.stateNode
            ) : ch(
              i,
              a,
              t.memoizedProps
            )) : a === null && t.stateNode !== null && fp(
              t,
              t.memoizedProps,
              n.memoizedProps
            );
        }
        break;
      case 27:
        if (a & 4 && t.alternate === null) {
          i = t.stateNode, c = t.memoizedProps;
          try {
            for (var T = i.firstChild; T; ) {
              var D = T.nextSibling, Y = T.nodeName;
              T[To] || Y === "HEAD" || Y === "BODY" || Y === "SCRIPT" || Y === "STYLE" || Y === "LINK" && T.rel.toLowerCase() === "stylesheet" || i.removeChild(T), T = D;
            }
            for (var K = t.type, N = i.attributes; N.length; )
              i.removeAttributeNode(N[0]);
            ge(i, K, c), i[Jt] = t, i[St] = c;
          } catch (rt) {
            Bt(t, t.return, rt);
          }
        }
      case 5:
        if (We(e, t), Fe(t), a & 512 && (kt || n === null || $e(n, n.return)), t.flags & 32) {
          i = t.stateNode;
          try {
            xa(i, "");
          } catch (rt) {
            Bt(t, t.return, rt);
          }
        }
        a & 4 && t.stateNode != null && (i = t.memoizedProps, fp(
          t,
          i,
          n !== null ? n.memoizedProps : i
        )), a & 1024 && (Hc = !0);
        break;
      case 6:
        if (We(e, t), Fe(t), a & 4) {
          if (t.stateNode === null)
            throw Error(r(162));
          a = t.memoizedProps, n = t.stateNode;
          try {
            n.nodeValue = a;
          } catch (rt) {
            Bt(t, t.return, rt);
          }
        }
        break;
      case 3:
        if (_r = null, i = pn, pn = Dr(e.containerInfo), We(e, t), pn = i, Fe(t), a & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            hi(e.containerInfo);
          } catch (rt) {
            Bt(t, t.return, rt);
          }
        Hc && (Hc = !1, Sp(t));
        break;
      case 4:
        a = pn, pn = Dr(
          t.stateNode.containerInfo
        ), We(e, t), Fe(t), pn = a;
        break;
      case 12:
        We(e, t), Fe(t);
        break;
      case 13:
        We(e, t), Fe(t), t.child.flags & 8192 && t.memoizedState !== null != (n !== null && n.memoizedState !== null) && (kc = Re()), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Uc(t, a)));
        break;
      case 22:
        if (a & 512 && (kt || n === null || $e(n, n.return)), T = t.memoizedState !== null, D = n !== null && n.memoizedState !== null, Y = Xn, K = kt, Xn = Y || T, kt = K || D, We(e, t), kt = K, Xn = Y, Fe(t), e = t.stateNode, e._current = t, e._visibility &= -3, e._visibility |= e._pendingVisibility & 2, a & 8192 && (e._visibility = T ? e._visibility & -2 : e._visibility | 1, T && (e = Xn || kt, n === null || D || e || Ba(t)), t.memoizedProps === null || t.memoizedProps.mode !== "manual"))
          t: for (n = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26 || e.tag === 27) {
              if (n === null) {
                D = n = e;
                try {
                  if (i = D.stateNode, T)
                    c = i.style, typeof c.setProperty == "function" ? c.setProperty(
                      "display",
                      "none",
                      "important"
                    ) : c.display = "none";
                  else {
                    m = D.stateNode, v = D.memoizedProps.style;
                    var L = v != null && v.hasOwnProperty("display") ? v.display : null;
                    m.style.display = L == null || typeof L == "boolean" ? "" : ("" + L).trim();
                  }
                } catch (rt) {
                  Bt(D, D.return, rt);
                }
              }
            } else if (e.tag === 6) {
              if (n === null) {
                D = e;
                try {
                  D.stateNode.nodeValue = T ? "" : D.memoizedProps;
                } catch (rt) {
                  Bt(D, D.return, rt);
                }
              }
            } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              n === e && (n = null), e = e.return;
            }
            n === e && (n = null), e.sibling.return = e.return, e = e.sibling;
          }
        a & 4 && (a = t.updateQueue, a !== null && (n = a.retryQueue, n !== null && (a.retryQueue = null, Uc(t, n))));
        break;
      case 19:
        We(e, t), Fe(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Uc(t, a)));
        break;
      case 21:
        break;
      default:
        We(e, t), Fe(t);
    }
  }
  function Fe(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        if (t.tag !== 27) {
          t: {
            for (var n = t.return; n !== null; ) {
              if (dp(n)) {
                var a = n;
                break t;
              }
              n = n.return;
            }
            throw Error(r(160));
          }
          switch (a.tag) {
            case 27:
              var i = a.stateNode, c = Nc(t);
              mr(t, c, i);
              break;
            case 5:
              var m = a.stateNode;
              a.flags & 32 && (xa(m, ""), a.flags &= -33);
              var v = Nc(t);
              mr(t, v, m);
              break;
            case 3:
            case 4:
              var T = a.stateNode.containerInfo, D = Nc(t);
              jc(
                t,
                D,
                T
              );
              break;
            default:
              throw Error(r(161));
          }
        }
      } catch (Y) {
        Bt(t, t.return, Y);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Sp(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        Sp(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
      }
  }
  function Qn(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        hp(t, e.alternate, e), e = e.sibling;
  }
  function Ba(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          yl(4, e, e.return), Ba(e);
          break;
        case 1:
          $e(e, e.return);
          var n = e.stateNode;
          typeof n.componentWillUnmount == "function" && cp(
            e,
            e.return,
            n
          ), Ba(e);
          break;
        case 26:
        case 27:
        case 5:
          $e(e, e.return), Ba(e);
          break;
        case 22:
          $e(e, e.return), e.memoizedState === null && Ba(e);
          break;
        default:
          Ba(e);
      }
      t = t.sibling;
    }
  }
  function vl(t, e, n) {
    for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var a = e.alternate, i = t, c = e, m = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          vl(
            i,
            c,
            n
          ), Wo(4, c);
          break;
        case 1:
          if (vl(
            i,
            c,
            n
          ), a = c, i = a.stateNode, typeof i.componentDidMount == "function")
            try {
              i.componentDidMount();
            } catch (D) {
              Bt(a, a.return, D);
            }
          if (a = c, i = a.updateQueue, i !== null) {
            var v = a.stateNode;
            try {
              var T = i.shared.hiddenCallbacks;
              if (T !== null)
                for (i.shared.hiddenCallbacks = null, i = 0; i < T.length; i++)
                  ip(T[i], v);
            } catch (D) {
              Bt(a, a.return, D);
            }
          }
          n && m & 64 && sp(c), Wl(c, c.return);
          break;
        case 26:
        case 27:
        case 5:
          vl(
            i,
            c,
            n
          ), n && a === null && m & 4 && up(c), Wl(c, c.return);
          break;
        case 12:
          vl(
            i,
            c,
            n
          );
          break;
        case 13:
          vl(
            i,
            c,
            n
          ), n && m & 4 && gp(i, c);
          break;
        case 22:
          c.memoizedState === null && vl(
            i,
            c,
            n
          ), Wl(c, c.return);
          break;
        default:
          vl(
            i,
            c,
            n
          );
      }
      e = e.sibling;
    }
  }
  function $c(t, e) {
    var n = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== n && (t != null && t.refCount++, n != null && qo(n));
  }
  function Bc(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && qo(t));
  }
  function gl(t, e, n, a) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        xp(
          t,
          e,
          n,
          a
        ), e = e.sibling;
  }
  function xp(t, e, n, a) {
    var i = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        gl(
          t,
          e,
          n,
          a
        ), i & 2048 && Wo(9, e);
        break;
      case 3:
        gl(
          t,
          e,
          n,
          a
        ), i & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && qo(t)));
        break;
      case 12:
        if (i & 2048) {
          gl(
            t,
            e,
            n,
            a
          ), t = e.stateNode;
          try {
            var c = e.memoizedProps, m = c.id, v = c.onPostCommit;
            typeof v == "function" && v(
              m,
              e.alternate === null ? "mount" : "update",
              t.passiveEffectDuration,
              -0
            );
          } catch (T) {
            Bt(e, e.return, T);
          }
        } else
          gl(
            t,
            e,
            n,
            a
          );
        break;
      case 23:
        break;
      case 22:
        c = e.stateNode, e.memoizedState !== null ? c._visibility & 4 ? gl(
          t,
          e,
          n,
          a
        ) : Fo(t, e) : c._visibility & 4 ? gl(
          t,
          e,
          n,
          a
        ) : (c._visibility |= 4, La(
          t,
          e,
          n,
          a,
          (e.subtreeFlags & 10256) !== 0
        )), i & 2048 && $c(
          e.alternate,
          e
        );
        break;
      case 24:
        gl(
          t,
          e,
          n,
          a
        ), i & 2048 && Bc(e.alternate, e);
        break;
      default:
        gl(
          t,
          e,
          n,
          a
        );
    }
  }
  function La(t, e, n, a, i) {
    for (i = i && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
      var c = t, m = e, v = n, T = a, D = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          La(
            c,
            m,
            v,
            T,
            i
          ), Wo(8, m);
          break;
        case 23:
          break;
        case 22:
          var Y = m.stateNode;
          m.memoizedState !== null ? Y._visibility & 4 ? La(
            c,
            m,
            v,
            T,
            i
          ) : Fo(
            c,
            m
          ) : (Y._visibility |= 4, La(
            c,
            m,
            v,
            T,
            i
          )), i && D & 2048 && $c(
            m.alternate,
            m
          );
          break;
        case 24:
          La(
            c,
            m,
            v,
            T,
            i
          ), i && D & 2048 && Bc(m.alternate, m);
          break;
        default:
          La(
            c,
            m,
            v,
            T,
            i
          );
      }
      e = e.sibling;
    }
  }
  function Fo(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t, a = e, i = a.flags;
        switch (a.tag) {
          case 22:
            Fo(n, a), i & 2048 && $c(
              a.alternate,
              a
            );
            break;
          case 24:
            Fo(n, a), i & 2048 && Bc(a.alternate, a);
            break;
          default:
            Fo(n, a);
        }
        e = e.sibling;
      }
  }
  var Io = 8192;
  function Ya(t) {
    if (t.subtreeFlags & Io)
      for (t = t.child; t !== null; )
        wp(t), t = t.sibling;
  }
  function wp(t) {
    switch (t.tag) {
      case 26:
        Ya(t), t.flags & Io && t.memoizedState !== null && q0(
          pn,
          t.memoizedState,
          t.memoizedProps
        );
        break;
      case 5:
        Ya(t);
        break;
      case 3:
      case 4:
        var e = pn;
        pn = Dr(t.stateNode.containerInfo), Ya(t), pn = e;
        break;
      case 22:
        t.memoizedState === null && (e = t.alternate, e !== null && e.memoizedState !== null ? (e = Io, Io = 16777216, Ya(t), Io = e) : Ya(t));
        break;
      default:
        Ya(t);
    }
  }
  function Tp(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function ti(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          se = a, Cp(
            a,
            t
          );
        }
      Tp(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Ep(t), t = t.sibling;
  }
  function Ep(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        ti(t), t.flags & 2048 && yl(9, t, t.return);
        break;
      case 3:
        ti(t);
        break;
      case 12:
        ti(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 4 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -5, pr(t)) : ti(t);
        break;
      default:
        ti(t);
    }
  }
  function pr(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          se = a, Cp(
            a,
            t
          );
        }
      Tp(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          yl(8, e, e.return), pr(e);
          break;
        case 22:
          n = e.stateNode, n._visibility & 4 && (n._visibility &= -5, pr(e));
          break;
        default:
          pr(e);
      }
      t = t.sibling;
    }
  }
  function Cp(t, e) {
    for (; se !== null; ) {
      var n = se;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          yl(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var a = n.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          qo(n.memoizedState.cache);
      }
      if (a = n.child, a !== null) a.return = n, se = a;
      else
        t: for (n = t; se !== null; ) {
          a = se;
          var i = a.sibling, c = a.return;
          if (yp(a), a === n) {
            se = null;
            break t;
          }
          if (i !== null) {
            i.return = c, se = i;
            break t;
          }
          se = c;
        }
    }
  }
  function t0(t, e, n, a) {
    this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ie(t, e, n, a) {
    return new t0(t, e, n, a);
  }
  function Lc(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function bl(t, e) {
    var n = t.alternate;
    return n === null ? (n = Ie(
      t.tag,
      e,
      t.key,
      t.mode
    ), n.elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = t.flags & 31457280, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n.refCleanup = t.refCleanup, n;
  }
  function Rp(t, e) {
    t.flags &= 31457282;
    var n = t.alternate;
    return n === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = n.childLanes, t.lanes = n.lanes, t.child = n.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = n.memoizedProps, t.memoizedState = n.memoizedState, t.updateQueue = n.updateQueue, t.type = n.type, e = n.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function hr(t, e, n, a, i, c) {
    var m = 0;
    if (a = t, typeof t == "function") Lc(t) && (m = 1);
    else if (typeof t == "string")
      m = L0(
        t,
        n,
        ae.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case y:
          return Fl(n.children, i, c, e);
        case h:
          m = 8, i |= 24;
          break;
        case g:
          return t = Ie(12, n, e, i | 2), t.elementType = g, t.lanes = c, t;
        case _:
          return t = Ie(13, n, e, i), t.elementType = _, t.lanes = c, t;
        case M:
          return t = Ie(19, n, e, i), t.elementType = M, t.lanes = c, t;
        case H:
          return Ap(n, i, c, e);
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case S:
              case x:
                m = 10;
                break t;
              case b:
                m = 9;
                break t;
              case R:
                m = 11;
                break t;
              case j:
                m = 14;
                break t;
              case B:
                m = 16, a = null;
                break t;
            }
          m = 29, n = Error(
            r(130, t === null ? "null" : typeof t, "")
          ), a = null;
      }
    return e = Ie(m, n, e, i), e.elementType = t, e.type = a, e.lanes = c, e;
  }
  function Fl(t, e, n, a) {
    return t = Ie(7, t, a, e), t.lanes = n, t;
  }
  function Ap(t, e, n, a) {
    t = Ie(22, t, a, e), t.elementType = H, t.lanes = n;
    var i = {
      _visibility: 1,
      _pendingVisibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null,
      _current: null,
      detach: function() {
        var c = i._current;
        if (c === null) throw Error(r(456));
        if ((i._pendingVisibility & 2) === 0) {
          var m = rl(c, 2);
          m !== null && (i._pendingVisibility |= 2, Ee(m, c, 2));
        }
      },
      attach: function() {
        var c = i._current;
        if (c === null) throw Error(r(456));
        if ((i._pendingVisibility & 2) !== 0) {
          var m = rl(c, 2);
          m !== null && (i._pendingVisibility &= -3, Ee(m, c, 2));
        }
      }
    };
    return t.stateNode = i, t;
  }
  function Yc(t, e, n) {
    return t = Ie(6, t, null, e), t.lanes = n, t;
  }
  function qc(t, e, n) {
    return e = Ie(
      4,
      t.children !== null ? t.children : [],
      t.key,
      e
    ), e.lanes = n, e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, e;
  }
  function Zn(t) {
    t.flags |= 4;
  }
  function Dp(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !dh(e)) {
      if (e = Pe.current, e !== null && ((Dt & 4194176) === Dt ? Rn !== null : (Dt & 62914560) !== Dt && (Dt & 536870912) === 0 || e !== Rn))
        throw Bo = Qs, kd;
      t.flags |= 8192;
    }
  }
  function yr(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? xt() : 536870912, t.lanes |= e, Va |= e);
  }
  function ei(t, e) {
    if (!_t)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var n = null; e !== null; )
            e.alternate !== null && (n = e), e = e.sibling;
          n === null ? t.tail = null : n.sibling = null;
          break;
        case "collapsed":
          n = t.tail;
          for (var a = null; n !== null; )
            n.alternate !== null && (a = n), n = n.sibling;
          a === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null;
      }
  }
  function Gt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, n = 0, a = 0;
    if (e)
      for (var i = t.child; i !== null; )
        n |= i.lanes | i.childLanes, a |= i.subtreeFlags & 31457280, a |= i.flags & 31457280, i.return = t, i = i.sibling;
    else
      for (i = t.child; i !== null; )
        n |= i.lanes | i.childLanes, a |= i.subtreeFlags, a |= i.flags, i.return = t, i = i.sibling;
    return t.subtreeFlags |= a, t.childLanes = n, e;
  }
  function e0(t, e, n) {
    var a = e.pendingProps;
    switch (Xs(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Gt(e), null;
      case 1:
        return Gt(e), null;
      case 3:
        return n = e.stateNode, a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), Gn(ee), fe(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (t === null || t.child === null) && (jo(e) ? Zn(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, mn !== null && (Jc(mn), mn = null))), Gt(e), null;
      case 26:
        return n = e.memoizedState, t === null ? (Zn(e), n !== null ? (Gt(e), Dp(e, n)) : (Gt(e), e.flags &= -16777217)) : n ? n !== t.memoizedState ? (Zn(e), Gt(e), Dp(e, n)) : (Gt(e), e.flags &= -16777217) : (t.memoizedProps !== a && Zn(e), Gt(e), e.flags &= -16777217), null;
      case 27:
        Ge(e), n = be.current;
        var i = e.type;
        if (t !== null && e.stateNode != null)
          t.memoizedProps !== a && Zn(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(r(166));
            return Gt(e), null;
          }
          t = ae.current, jo(e) ? Gd(e) : (t = ah(i, a, n), e.stateNode = t, Zn(e));
        }
        return Gt(e), null;
      case 5:
        if (Ge(e), n = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== a && Zn(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(r(166));
            return Gt(e), null;
          }
          if (t = ae.current, jo(e))
            Gd(e);
          else {
            switch (i = Ar(
              be.current
            ), t) {
              case 1:
                t = i.createElementNS(
                  "http://www.w3.org/2000/svg",
                  n
                );
                break;
              case 2:
                t = i.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  n
                );
                break;
              default:
                switch (n) {
                  case "svg":
                    t = i.createElementNS(
                      "http://www.w3.org/2000/svg",
                      n
                    );
                    break;
                  case "math":
                    t = i.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    t = i.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild);
                    break;
                  case "select":
                    t = typeof a.is == "string" ? i.createElement("select", { is: a.is }) : i.createElement("select"), a.multiple ? t.multiple = !0 : a.size && (t.size = a.size);
                    break;
                  default:
                    t = typeof a.is == "string" ? i.createElement(n, { is: a.is }) : i.createElement(n);
                }
            }
            t[Jt] = e, t[St] = a;
            t: for (i = e.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6)
                t.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                i.child.return = i, i = i.child;
                continue;
              }
              if (i === e) break t;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === e)
                  break t;
                i = i.return;
              }
              i.sibling.return = i.return, i = i.sibling;
            }
            e.stateNode = t;
            t: switch (ge(t, n, a), n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!a.autoFocus;
                break t;
              case "img":
                t = !0;
                break t;
              default:
                t = !1;
            }
            t && Zn(e);
          }
        }
        return Gt(e), e.flags &= -16777217, null;
      case 6:
        if (t && e.stateNode != null)
          t.memoizedProps !== a && Zn(e);
        else {
          if (typeof a != "string" && e.stateNode === null)
            throw Error(r(166));
          if (t = be.current, jo(e)) {
            if (t = e.stateNode, n = e.memoizedProps, a = null, i = Te, i !== null)
              switch (i.tag) {
                case 27:
                case 5:
                  a = i.memoizedProps;
              }
            t[Jt] = e, t = !!(t.nodeValue === n || a !== null && a.suppressHydrationWarning === !0 || Fp(t.nodeValue, n)), t || Vl(e);
          } else
            t = Ar(t).createTextNode(
              a
            ), t[Jt] = e, e.stateNode = t;
        }
        return Gt(e), null;
      case 13:
        if (a = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (i = jo(e), a !== null && a.dehydrated !== null) {
            if (t === null) {
              if (!i) throw Error(r(318));
              if (i = e.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(r(317));
              i[Jt] = e;
            } else
              Ho(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Gt(e), i = !1;
          } else
            mn !== null && (Jc(mn), mn = null), i = !0;
          if (!i)
            return e.flags & 256 ? (Ln(e), e) : (Ln(e), null);
        }
        if (Ln(e), (e.flags & 128) !== 0)
          return e.lanes = n, e;
        if (n = a !== null, t = t !== null && t.memoizedState !== null, n) {
          a = e.child, i = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (i = a.alternate.memoizedState.cachePool.pool);
          var c = null;
          a.memoizedState !== null && a.memoizedState.cachePool !== null && (c = a.memoizedState.cachePool.pool), c !== i && (a.flags |= 2048);
        }
        return n !== t && n && (e.child.flags |= 8192), yr(e, e.updateQueue), Gt(e), null;
      case 4:
        return fe(), t === null && iu(e.stateNode.containerInfo), Gt(e), null;
      case 10:
        return Gn(e.type), Gt(e), null;
      case 19:
        if (zt(te), i = e.memoizedState, i === null) return Gt(e), null;
        if (a = (e.flags & 128) !== 0, c = i.rendering, c === null)
          if (a) ei(i, !1);
          else {
            if (Qt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (c = Ii(t), c !== null) {
                  for (e.flags |= 128, ei(i, !1), t = c.updateQueue, e.updateQueue = t, yr(e, t), e.subtreeFlags = 0, t = n, n = e.child; n !== null; )
                    Rp(n, t), n = n.sibling;
                  return Ot(
                    te,
                    te.current & 1 | 2
                  ), e.child;
                }
                t = t.sibling;
              }
            i.tail !== null && Re() > vr && (e.flags |= 128, a = !0, ei(i, !1), e.lanes = 4194304);
          }
        else {
          if (!a)
            if (t = Ii(c), t !== null) {
              if (e.flags |= 128, a = !0, t = t.updateQueue, e.updateQueue = t, yr(e, t), ei(i, !0), i.tail === null && i.tailMode === "hidden" && !c.alternate && !_t)
                return Gt(e), null;
            } else
              2 * Re() - i.renderingStartTime > vr && n !== 536870912 && (e.flags |= 128, a = !0, ei(i, !1), e.lanes = 4194304);
          i.isBackwards ? (c.sibling = e.child, e.child = c) : (t = i.last, t !== null ? t.sibling = c : e.child = c, i.last = c);
        }
        return i.tail !== null ? (e = i.tail, i.rendering = e, i.tail = e.sibling, i.renderingStartTime = Re(), e.sibling = null, t = te.current, Ot(te, a ? t & 1 | 2 : t & 1), e) : (Gt(e), null);
      case 22:
      case 23:
        return Ln(e), Ks(), a = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192), a ? (n & 536870912) !== 0 && (e.flags & 128) === 0 && (Gt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Gt(e), n = e.updateQueue, n !== null && yr(e, n.retryQueue), n = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), a = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), a !== n && (e.flags |= 2048), t !== null && zt(Xl), null;
      case 24:
        return n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), Gn(ee), Gt(e), null;
      case 25:
        return null;
    }
    throw Error(r(156, e.tag));
  }
  function n0(t, e) {
    switch (Xs(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return Gn(ee), fe(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return Ge(e), null;
      case 13:
        if (Ln(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(r(340));
          Ho();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return zt(te), null;
      case 4:
        return fe(), null;
      case 10:
        return Gn(e.type), null;
      case 22:
      case 23:
        return Ln(e), Ks(), t !== null && zt(Xl), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return Gn(ee), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Op(t, e) {
    switch (Xs(e), e.tag) {
      case 3:
        Gn(ee), fe();
        break;
      case 26:
      case 27:
      case 5:
        Ge(e);
        break;
      case 4:
        fe();
        break;
      case 13:
        Ln(e);
        break;
      case 19:
        zt(te);
        break;
      case 10:
        Gn(e.type);
        break;
      case 22:
      case 23:
        Ln(e), Ks(), t !== null && zt(Xl);
        break;
      case 24:
        Gn(ee);
    }
  }
  var l0 = {
    getCacheForType: function(t) {
      var e = Se(ee), n = e.data.get(t);
      return n === void 0 && (n = t(), e.data.set(t, n)), n;
    }
  }, a0 = typeof WeakMap == "function" ? WeakMap : Map, Xt = 0, Yt = null, Ct = null, Dt = 0, qt = 0, Le = null, Kn = !1, qa = !1, Vc = !1, Jn = 0, Qt = 0, Sl = 0, Il = 0, Gc = 0, tn = 0, Va = 0, ni = null, Dn = null, Xc = !1, kc = 0, vr = 1 / 0, gr = null, xl = null, br = !1, ta = null, li = 0, Qc = 0, Zc = null, ai = 0, Kc = null;
  function Ye() {
    if ((Xt & 2) !== 0 && Dt !== 0)
      return Dt & -Dt;
    if (Z.T !== null) {
      var t = Na;
      return t !== 0 ? t : nu();
    }
    return jl();
  }
  function _p() {
    tn === 0 && (tn = (Dt & 536870912) === 0 || _t ? ya() : 536870912);
    var t = Pe.current;
    return t !== null && (t.flags |= 32), tn;
  }
  function Ee(t, e, n) {
    (t === Yt && qt === 2 || t.cancelPendingCommit !== null) && (Ga(t, 0), Pn(
      t,
      Dt,
      tn,
      !1
    )), pe(t, n), ((Xt & 2) === 0 || t !== Yt) && (t === Yt && ((Xt & 2) === 0 && (Il |= n), Qt === 4 && Pn(
      t,
      Dt,
      tn,
      !1
    )), On(t));
  }
  function Mp(t, e, n) {
    if ((Xt & 6) !== 0) throw Error(r(327));
    var a = !n && (e & 60) === 0 && (e & t.expiredLanes) === 0 || Nl(t, e), i = a ? r0(t, e) : Fc(t, e, !0), c = a;
    do {
      if (i === 0) {
        qa && !a && Pn(t, e, 0, !1);
        break;
      } else if (i === 6)
        Pn(
          t,
          e,
          0,
          !Kn
        );
      else {
        if (n = t.current.alternate, c && !o0(n)) {
          i = Fc(t, e, !1), c = !1;
          continue;
        }
        if (i === 2) {
          if (c = e, t.errorRecoveryDisabledLanes & c)
            var m = 0;
          else
            m = t.pendingLanes & -536870913, m = m !== 0 ? m : m & 536870912 ? 536870912 : 0;
          if (m !== 0) {
            e = m;
            t: {
              var v = t;
              i = ni;
              var T = v.current.memoizedState.isDehydrated;
              if (T && (Ga(v, m).flags |= 256), m = Fc(
                v,
                m,
                !1
              ), m !== 2) {
                if (Vc && !T) {
                  v.errorRecoveryDisabledLanes |= c, Il |= c, i = 4;
                  break t;
                }
                c = Dn, Dn = i, c !== null && Jc(c);
              }
              i = m;
            }
            if (c = !1, i !== 2) continue;
          }
        }
        if (i === 1) {
          Ga(t, 0), Pn(t, e, 0, !0);
          break;
        }
        t: {
          switch (a = t, i) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((e & 4194176) === e) {
                Pn(
                  a,
                  e,
                  tn,
                  !Kn
                );
                break t;
              }
              break;
            case 2:
              Dn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if (a.finishedWork = n, a.finishedLanes = e, (e & 62914560) === e && (c = kc + 300 - Re(), 10 < c)) {
            if (Pn(
              a,
              e,
              tn,
              !Kn
            ), ll(a, 0) !== 0) break t;
            a.timeoutHandle = eh(
              zp.bind(
                null,
                a,
                n,
                Dn,
                gr,
                Xc,
                e,
                tn,
                Il,
                Va,
                Kn,
                2,
                -0,
                0
              ),
              c
            );
            break t;
          }
          zp(
            a,
            n,
            Dn,
            gr,
            Xc,
            e,
            tn,
            Il,
            Va,
            Kn,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    On(t);
  }
  function Jc(t) {
    Dn === null ? Dn = t : Dn.push.apply(
      Dn,
      t
    );
  }
  function zp(t, e, n, a, i, c, m, v, T, D, Y, K, N) {
    var L = e.subtreeFlags;
    if ((L & 8192 || (L & 16785408) === 16785408) && (ui = { stylesheets: null, count: 0, unsuspend: Y0 }, wp(e), e = V0(), e !== null)) {
      t.cancelPendingCommit = e(
        Lp.bind(
          null,
          t,
          n,
          a,
          i,
          m,
          v,
          T,
          1,
          K,
          N
        )
      ), Pn(t, c, m, !D);
      return;
    }
    Lp(
      t,
      n,
      a,
      i,
      m,
      v,
      T,
      Y,
      K,
      N
    );
  }
  function o0(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if ((n === 0 || n === 11 || n === 15) && e.flags & 16384 && (n = e.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var a = 0; a < n.length; a++) {
          var i = n[a], c = i.getSnapshot;
          i = i.value;
          try {
            if (!Ue(c(), i)) return !1;
          } catch {
            return !1;
          }
        }
      if (n = e.child, e.subtreeFlags & 16384 && n !== null)
        n.return = e, e = n;
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    }
    return !0;
  }
  function Pn(t, e, n, a) {
    e &= ~Gc, e &= ~Il, t.suspendedLanes |= e, t.pingedLanes &= ~e, a && (t.warmLanes |= e), a = t.expirationTimes;
    for (var i = e; 0 < i; ) {
      var c = 31 - oe(i), m = 1 << c;
      a[c] = -1, i &= ~m;
    }
    n !== 0 && Tn(t, n, e);
  }
  function Sr() {
    return (Xt & 6) === 0 ? (oi(0), !1) : !0;
  }
  function Pc() {
    if (Ct !== null) {
      if (qt === 0)
        var t = Ct.return;
      else
        t = Ct, Vn = Jl = null, nc(t), Ma = null, Lo = 0, t = Ct;
      for (; t !== null; )
        Op(t.alternate, t), t = t.return;
      Ct = null;
    }
  }
  function Ga(t, e) {
    t.finishedWork = null, t.finishedLanes = 0;
    var n = t.timeoutHandle;
    n !== -1 && (t.timeoutHandle = -1, E0(n)), n = t.cancelPendingCommit, n !== null && (t.cancelPendingCommit = null, n()), Pc(), Yt = t, Ct = n = bl(t.current, null), Dt = e, qt = 0, Le = null, Kn = !1, qa = Nl(t, e), Vc = !1, Va = tn = Gc = Il = Sl = Qt = 0, Dn = ni = null, Xc = !1, (e & 8) !== 0 && (e |= e & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a; ) {
        var i = 31 - oe(a), c = 1 << i;
        e |= t[i], a &= ~c;
      }
    return Jn = e, Xi(), n;
  }
  function Np(t, e) {
    wt = null, Z.H = An, e === $o ? (e = Kd(), qt = 3) : e === kd ? (e = Kd(), qt = 4) : qt = e === Qm ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, Le = e, Ct === null && (Qt = 1, ur(
      t,
      Ze(e, t.current)
    ));
  }
  function jp() {
    var t = Z.H;
    return Z.H = An, t === null ? An : t;
  }
  function Hp() {
    var t = Z.A;
    return Z.A = l0, t;
  }
  function Wc() {
    Qt = 4, Kn || (Dt & 4194176) !== Dt && Pe.current !== null || (qa = !0), (Sl & 134217727) === 0 && (Il & 134217727) === 0 || Yt === null || Pn(
      Yt,
      Dt,
      tn,
      !1
    );
  }
  function Fc(t, e, n) {
    var a = Xt;
    Xt |= 2;
    var i = jp(), c = Hp();
    (Yt !== t || Dt !== e) && (gr = null, Ga(t, e)), e = !1;
    var m = Qt;
    t: do
      try {
        if (qt !== 0 && Ct !== null) {
          var v = Ct, T = Le;
          switch (qt) {
            case 8:
              Pc(), m = 6;
              break t;
            case 3:
            case 2:
            case 6:
              Pe.current === null && (e = !0);
              var D = qt;
              if (qt = 0, Le = null, Xa(t, v, T, D), n && qa) {
                m = 0;
                break t;
              }
              break;
            default:
              D = qt, qt = 0, Le = null, Xa(t, v, T, D);
          }
        }
        i0(), m = Qt;
        break;
      } catch (Y) {
        Np(t, Y);
      }
    while (!0);
    return e && t.shellSuspendCounter++, Vn = Jl = null, Xt = a, Z.H = i, Z.A = c, Ct === null && (Yt = null, Dt = 0, Xi()), m;
  }
  function i0() {
    for (; Ct !== null; ) Up(Ct);
  }
  function r0(t, e) {
    var n = Xt;
    Xt |= 2;
    var a = jp(), i = Hp();
    Yt !== t || Dt !== e ? (gr = null, vr = Re() + 500, Ga(t, e)) : qa = Nl(
      t,
      e
    );
    t: do
      try {
        if (qt !== 0 && Ct !== null) {
          e = Ct;
          var c = Le;
          e: switch (qt) {
            case 1:
              qt = 0, Le = null, Xa(t, e, c, 1);
              break;
            case 2:
              if (Qd(c)) {
                qt = 0, Le = null, $p(e);
                break;
              }
              e = function() {
                qt === 2 && Yt === t && (qt = 7), On(t);
              }, c.then(e, e);
              break t;
            case 3:
              qt = 7;
              break t;
            case 4:
              qt = 5;
              break t;
            case 7:
              Qd(c) ? (qt = 0, Le = null, $p(e)) : (qt = 0, Le = null, Xa(t, e, c, 7));
              break;
            case 5:
              var m = null;
              switch (Ct.tag) {
                case 26:
                  m = Ct.memoizedState;
                case 5:
                case 27:
                  var v = Ct;
                  if (!m || dh(m)) {
                    qt = 0, Le = null;
                    var T = v.sibling;
                    if (T !== null) Ct = T;
                    else {
                      var D = v.return;
                      D !== null ? (Ct = D, xr(D)) : Ct = null;
                    }
                    break e;
                  }
              }
              qt = 0, Le = null, Xa(t, e, c, 5);
              break;
            case 6:
              qt = 0, Le = null, Xa(t, e, c, 6);
              break;
            case 8:
              Pc(), Qt = 6;
              break t;
            default:
              throw Error(r(462));
          }
        }
        s0();
        break;
      } catch (Y) {
        Np(t, Y);
      }
    while (!0);
    return Vn = Jl = null, Z.H = a, Z.A = i, Xt = n, Ct !== null ? 0 : (Yt = null, Dt = 0, Xi(), Qt);
  }
  function s0() {
    for (; Ct !== null && !un(); )
      Up(Ct);
  }
  function Up(t) {
    var e = ap(t.alternate, t, Jn);
    t.memoizedProps = t.pendingProps, e === null ? xr(t) : Ct = e;
  }
  function $p(t) {
    var e = t, n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Fm(
          n,
          e,
          e.pendingProps,
          e.type,
          void 0,
          Dt
        );
        break;
      case 11:
        e = Fm(
          n,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          Dt
        );
        break;
      case 5:
        nc(e);
      default:
        Op(n, e), e = Ct = Rp(e, Jn), e = ap(n, e, Jn);
    }
    t.memoizedProps = t.pendingProps, e === null ? xr(t) : Ct = e;
  }
  function Xa(t, e, n, a) {
    Vn = Jl = null, nc(e), Ma = null, Lo = 0;
    var i = e.return;
    try {
      if (Pg(
        t,
        i,
        e,
        n,
        Dt
      )) {
        Qt = 1, ur(
          t,
          Ze(n, t.current)
        ), Ct = null;
        return;
      }
    } catch (c) {
      if (i !== null) throw Ct = i, c;
      Qt = 1, ur(
        t,
        Ze(n, t.current)
      ), Ct = null;
      return;
    }
    e.flags & 32768 ? (_t || a === 1 ? t = !0 : qa || (Dt & 536870912) !== 0 ? t = !1 : (Kn = t = !0, (a === 2 || a === 3 || a === 6) && (a = Pe.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Bp(e, t)) : xr(e);
  }
  function xr(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Bp(
          e,
          Kn
        );
        return;
      }
      t = e.return;
      var n = e0(
        e.alternate,
        e,
        Jn
      );
      if (n !== null) {
        Ct = n;
        return;
      }
      if (e = e.sibling, e !== null) {
        Ct = e;
        return;
      }
      Ct = e = t;
    } while (e !== null);
    Qt === 0 && (Qt = 5);
  }
  function Bp(t, e) {
    do {
      var n = n0(t.alternate, t);
      if (n !== null) {
        n.flags &= 32767, Ct = n;
        return;
      }
      if (n = t.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !e && (t = t.sibling, t !== null)) {
        Ct = t;
        return;
      }
      Ct = t = n;
    } while (t !== null);
    Qt = 6, Ct = null;
  }
  function Lp(t, e, n, a, i, c, m, v, T, D) {
    var Y = Z.T, K = I.p;
    try {
      I.p = 2, Z.T = null, c0(
        t,
        e,
        n,
        a,
        K,
        i,
        c,
        m,
        v,
        T,
        D
      );
    } finally {
      Z.T = Y, I.p = K;
    }
  }
  function c0(t, e, n, a, i, c, m, v) {
    do
      ka();
    while (ta !== null);
    if ((Xt & 6) !== 0) throw Error(r(327));
    var T = t.finishedWork;
    if (a = t.finishedLanes, T === null) return null;
    if (t.finishedWork = null, t.finishedLanes = 0, T === t.current) throw Error(r(177));
    t.callbackNode = null, t.callbackPriority = 0, t.cancelPendingCommit = null;
    var D = T.lanes | T.childLanes;
    if (D |= qs, He(
      t,
      a,
      D,
      c,
      m,
      v
    ), t === Yt && (Ct = Yt = null, Dt = 0), (T.subtreeFlags & 10256) === 0 && (T.flags & 10256) === 0 || br || (br = !0, Qc = D, Zc = n, m0(nl, function() {
      return ka(), null;
    })), n = (T.flags & 15990) !== 0, (T.subtreeFlags & 15990) !== 0 || n ? (n = Z.T, Z.T = null, c = I.p, I.p = 2, m = Xt, Xt |= 4, Fg(t, T), bp(T, t), Ng(uu, t.containerInfo), Nr = !!cu, uu = cu = null, t.current = T, hp(t, T.alternate, T), yo(), Xt = m, I.p = c, Z.T = n) : t.current = T, br ? (br = !1, ta = t, li = a) : Yp(t, D), D = t.pendingLanes, D === 0 && (xl = null), So(T.stateNode), On(t), e !== null)
      for (i = t.onRecoverableError, T = 0; T < e.length; T++)
        D = e[T], i(D.value, {
          componentStack: D.stack
        });
    return (li & 3) !== 0 && ka(), D = t.pendingLanes, (a & 4194218) !== 0 && (D & 42) !== 0 ? t === Kc ? ai++ : (ai = 0, Kc = t) : ai = 0, oi(0), null;
  }
  function Yp(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, qo(e)));
  }
  function ka() {
    if (ta !== null) {
      var t = ta, e = Qc;
      Qc = 0;
      var n = ol(li), a = Z.T, i = I.p;
      try {
        if (I.p = 32 > n ? 32 : n, Z.T = null, ta === null)
          var c = !1;
        else {
          n = Zc, Zc = null;
          var m = ta, v = li;
          if (ta = null, li = 0, (Xt & 6) !== 0)
            throw Error(r(331));
          var T = Xt;
          if (Xt |= 4, Ep(m.current), xp(m, m.current, v, n), Xt = T, oi(0, !1), de && typeof de.onPostCommitFiberRoot == "function")
            try {
              de.onPostCommitFiberRoot(wn, m);
            } catch {
            }
          c = !0;
        }
        return c;
      } finally {
        I.p = i, Z.T = a, Yp(t, e);
      }
    }
    return !1;
  }
  function qp(t, e, n) {
    e = Ze(n, e), e = yc(t.stateNode, e, 2), t = hl(t, e, 2), t !== null && (pe(t, 2), On(t));
  }
  function Bt(t, e, n) {
    if (t.tag === 3)
      qp(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          qp(
            e,
            t,
            n
          );
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (xl === null || !xl.has(a))) {
            t = Ze(n, t), n = Xm(2), a = hl(e, n, 2), a !== null && (km(
              n,
              a,
              e,
              t
            ), pe(a, 2), On(a));
            break;
          }
        }
        e = e.return;
      }
  }
  function Ic(t, e, n) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new a0();
      var i = /* @__PURE__ */ new Set();
      a.set(e, i);
    } else
      i = a.get(e), i === void 0 && (i = /* @__PURE__ */ new Set(), a.set(e, i));
    i.has(n) || (Vc = !0, i.add(n), t = u0.bind(null, t, e, n), e.then(t, t));
  }
  function u0(t, e, n) {
    var a = t.pingCache;
    a !== null && a.delete(e), t.pingedLanes |= t.suspendedLanes & n, t.warmLanes &= ~n, Yt === t && (Dt & n) === n && (Qt === 4 || Qt === 3 && (Dt & 62914560) === Dt && 300 > Re() - kc ? (Xt & 2) === 0 && Ga(t, 0) : Gc |= n, Va === Dt && (Va = 0)), On(t);
  }
  function Vp(t, e) {
    e === 0 && (e = xt()), t = rl(t, e), t !== null && (pe(t, e), On(t));
  }
  function f0(t) {
    var e = t.memoizedState, n = 0;
    e !== null && (n = e.retryLane), Vp(t, n);
  }
  function d0(t, e) {
    var n = 0;
    switch (t.tag) {
      case 13:
        var a = t.stateNode, i = t.memoizedState;
        i !== null && (n = i.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    a !== null && a.delete(e), Vp(t, n);
  }
  function m0(t, e) {
    return sn(t, e);
  }
  var wr = null, Qa = null, tu = !1, Tr = !1, eu = !1, ea = 0;
  function On(t) {
    t !== Qa && t.next === null && (Qa === null ? wr = Qa = t : Qa = Qa.next = t), Tr = !0, tu || (tu = !0, h0(p0));
  }
  function oi(t, e) {
    if (!eu && Tr) {
      eu = !0;
      do
        for (var n = !1, a = wr; a !== null; ) {
          if (t !== 0) {
            var i = a.pendingLanes;
            if (i === 0) var c = 0;
            else {
              var m = a.suspendedLanes, v = a.pingedLanes;
              c = (1 << 31 - oe(42 | t) + 1) - 1, c &= i & ~(m & ~v), c = c & 201326677 ? c & 201326677 | 1 : c ? c | 2 : 0;
            }
            c !== 0 && (n = !0, kp(a, c));
          } else
            c = Dt, c = ll(
              a,
              a === Yt ? c : 0
            ), (c & 3) === 0 || Nl(a, c) || (n = !0, kp(a, c));
          a = a.next;
        }
      while (n);
      eu = !1;
    }
  }
  function p0() {
    Tr = tu = !1;
    var t = 0;
    ea !== 0 && (T0() && (t = ea), ea = 0);
    for (var e = Re(), n = null, a = wr; a !== null; ) {
      var i = a.next, c = Gp(a, e);
      c === 0 ? (a.next = null, n === null ? wr = i : n.next = i, i === null && (Qa = n)) : (n = a, (t !== 0 || (c & 3) !== 0) && (Tr = !0)), a = i;
    }
    oi(t);
  }
  function Gp(t, e) {
    for (var n = t.suspendedLanes, a = t.pingedLanes, i = t.expirationTimes, c = t.pendingLanes & -62914561; 0 < c; ) {
      var m = 31 - oe(c), v = 1 << m, T = i[m];
      T === -1 ? ((v & n) === 0 || (v & a) !== 0) && (i[m] = xo(v, e)) : T <= e && (t.expiredLanes |= v), c &= ~v;
    }
    if (e = Yt, n = Dt, n = ll(
      t,
      t === e ? n : 0
    ), a = t.callbackNode, n === 0 || t === e && qt === 2 || t.cancelPendingCommit !== null)
      return a !== null && a !== null && cn(a), t.callbackNode = null, t.callbackPriority = 0;
    if ((n & 3) === 0 || Nl(t, n)) {
      if (e = n & -n, e === t.callbackPriority) return e;
      switch (a !== null && cn(a), ol(n)) {
        case 2:
        case 8:
          n = ma;
          break;
        case 32:
          n = nl;
          break;
        case 268435456:
          n = pa;
          break;
        default:
          n = nl;
      }
      return a = Xp.bind(null, t), n = sn(n, a), t.callbackPriority = e, t.callbackNode = n, e;
    }
    return a !== null && a !== null && cn(a), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function Xp(t, e) {
    var n = t.callbackNode;
    if (ka() && t.callbackNode !== n)
      return null;
    var a = Dt;
    return a = ll(
      t,
      t === Yt ? a : 0
    ), a === 0 ? null : (Mp(t, a, e), Gp(t, Re()), t.callbackNode != null && t.callbackNode === n ? Xp.bind(null, t) : null);
  }
  function kp(t, e) {
    if (ka()) return null;
    Mp(t, e, !0);
  }
  function h0(t) {
    C0(function() {
      (Xt & 6) !== 0 ? sn(da, t) : t();
    });
  }
  function nu() {
    return ea === 0 && (ea = ya()), ea;
  }
  function Qp(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : $i("" + t);
  }
  function Zp(t, e) {
    var n = e.ownerDocument.createElement("input");
    return n.name = e.name, n.value = e.value, t.id && n.setAttribute("form", t.id), e.parentNode.insertBefore(n, e), t = new FormData(t), n.parentNode.removeChild(n), t;
  }
  function y0(t, e, n, a, i) {
    if (e === "submit" && n && n.stateNode === i) {
      var c = Qp(
        (i[St] || null).action
      ), m = a.submitter;
      m && (e = (e = m[St] || null) ? Qp(e.formAction) : m.getAttribute("formAction"), e !== null && (c = e, m = null));
      var v = new qi(
        "action",
        "action",
        null,
        a,
        i
      );
      t.push({
        event: v,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (ea !== 0) {
                  var T = m ? Zp(i, m) : new FormData(i);
                  fc(
                    n,
                    {
                      pending: !0,
                      data: T,
                      method: i.method,
                      action: c
                    },
                    null,
                    T
                  );
                }
              } else
                typeof c == "function" && (v.preventDefault(), T = m ? Zp(i, m) : new FormData(i), fc(
                  n,
                  {
                    pending: !0,
                    data: T,
                    method: i.method,
                    action: c
                  },
                  c,
                  T
                ));
            },
            currentTarget: i
          }
        ]
      });
    }
  }
  for (var lu = 0; lu < Ld.length; lu++) {
    var au = Ld[lu], v0 = au.toLowerCase(), g0 = au[0].toUpperCase() + au.slice(1);
    dn(
      v0,
      "on" + g0
    );
  }
  dn(jd, "onAnimationEnd"), dn(Hd, "onAnimationIteration"), dn(Ud, "onAnimationStart"), dn("dblclick", "onDoubleClick"), dn("focusin", "onFocus"), dn("focusout", "onBlur"), dn(Hg, "onTransitionRun"), dn(Ug, "onTransitionStart"), dn($g, "onTransitionCancel"), dn($d, "onTransitionEnd"), ba("onMouseEnter", ["mouseout", "mouseover"]), ba("onMouseLeave", ["mouseout", "mouseover"]), ba("onPointerEnter", ["pointerout", "pointerover"]), ba("onPointerLeave", ["pointerout", "pointerover"]), Ul(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Ul(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Ul("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Ul(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Ul(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Ul(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var ii = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), b0 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ii)
  );
  function Kp(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var a = t[n], i = a.event;
      a = a.listeners;
      t: {
        var c = void 0;
        if (e)
          for (var m = a.length - 1; 0 <= m; m--) {
            var v = a[m], T = v.instance, D = v.currentTarget;
            if (v = v.listener, T !== c && i.isPropagationStopped())
              break t;
            c = v, i.currentTarget = D;
            try {
              c(i);
            } catch (Y) {
              cr(Y);
            }
            i.currentTarget = null, c = T;
          }
        else
          for (m = 0; m < a.length; m++) {
            if (v = a[m], T = v.instance, D = v.currentTarget, v = v.listener, T !== c && i.isPropagationStopped())
              break t;
            c = v, i.currentTarget = D;
            try {
              c(i);
            } catch (Y) {
              cr(Y);
            }
            i.currentTarget = null, c = T;
          }
      }
    }
  }
  function Rt(t, e) {
    var n = e[he];
    n === void 0 && (n = e[he] = /* @__PURE__ */ new Set());
    var a = t + "__bubble";
    n.has(a) || (Jp(e, t, 2, !1), n.add(a));
  }
  function ou(t, e, n) {
    var a = 0;
    e && (a |= 4), Jp(
      n,
      t,
      a,
      e
    );
  }
  var Er = "_reactListening" + Math.random().toString(36).slice(2);
  function iu(t) {
    if (!t[Er]) {
      t[Er] = !0, Ff.forEach(function(n) {
        n !== "selectionchange" && (b0.has(n) || ou(n, !1, t), ou(n, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Er] || (e[Er] = !0, ou("selectionchange", !1, e));
    }
  }
  function Jp(t, e, n, a) {
    switch (gh(e)) {
      case 2:
        var i = k0;
        break;
      case 8:
        i = Q0;
        break;
      default:
        i = bu;
    }
    n = i.bind(
      null,
      e,
      n,
      t
    ), i = void 0, !Ds || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (i = !0), a ? i !== void 0 ? t.addEventListener(e, n, {
      capture: !0,
      passive: i
    }) : t.addEventListener(e, n, !0) : i !== void 0 ? t.addEventListener(e, n, {
      passive: i
    }) : t.addEventListener(e, n, !1);
  }
  function ru(t, e, n, a, i) {
    var c = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (; ; ) {
        if (a === null) return;
        var m = a.tag;
        if (m === 3 || m === 4) {
          var v = a.stateNode.containerInfo;
          if (v === i || v.nodeType === 8 && v.parentNode === i)
            break;
          if (m === 4)
            for (m = a.return; m !== null; ) {
              var T = m.tag;
              if ((T === 3 || T === 4) && (T = m.stateNode.containerInfo, T === i || T.nodeType === 8 && T.parentNode === i))
                return;
              m = m.return;
            }
          for (; v !== null; ) {
            if (m = Hl(v), m === null) return;
            if (T = m.tag, T === 5 || T === 6 || T === 26 || T === 27) {
              a = c = m;
              continue t;
            }
            v = v.parentNode;
          }
        }
        a = a.return;
      }
    ud(function() {
      var D = c, Y = Rs(n), K = [];
      t: {
        var N = Bd.get(t);
        if (N !== void 0) {
          var L = qi, rt = t;
          switch (t) {
            case "keypress":
              if (Li(n) === 0) break t;
            case "keydown":
            case "keyup":
              L = dg;
              break;
            case "focusin":
              rt = "focus", L = zs;
              break;
            case "focusout":
              rt = "blur", L = zs;
              break;
            case "beforeblur":
            case "afterblur":
              L = zs;
              break;
            case "click":
              if (n.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              L = md;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              L = tg;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              L = hg;
              break;
            case jd:
            case Hd:
            case Ud:
              L = lg;
              break;
            case $d:
              L = vg;
              break;
            case "scroll":
            case "scrollend":
              L = Fv;
              break;
            case "wheel":
              L = bg;
              break;
            case "copy":
            case "cut":
            case "paste":
              L = og;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              L = hd;
              break;
            case "toggle":
            case "beforetoggle":
              L = xg;
          }
          var vt = (e & 4) !== 0, Zt = !vt && (t === "scroll" || t === "scrollend"), O = vt ? N !== null ? N + "Capture" : null : N;
          vt = [];
          for (var A = D, z; A !== null; ) {
            var X = A;
            if (z = X.stateNode, X = X.tag, X !== 5 && X !== 26 && X !== 27 || z === null || O === null || (X = Co(A, O), X != null && vt.push(
              ri(A, X, z)
            )), Zt) break;
            A = A.return;
          }
          0 < vt.length && (N = new L(
            N,
            rt,
            null,
            n,
            Y
          ), K.push({ event: N, listeners: vt }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (N = t === "mouseover" || t === "pointerover", L = t === "mouseout" || t === "pointerout", N && n !== Cs && (rt = n.relatedTarget || n.fromElement) && (Hl(rt) || rt[yt]))
            break t;
          if ((L || N) && (N = Y.window === Y ? Y : (N = Y.ownerDocument) ? N.defaultView || N.parentWindow : window, L ? (rt = n.relatedTarget || n.toElement, L = D, rt = rt ? Hl(rt) : null, rt !== null && (Zt = V(rt), vt = rt.tag, rt !== Zt || vt !== 5 && vt !== 27 && vt !== 6) && (rt = null)) : (L = null, rt = D), L !== rt)) {
            if (vt = md, X = "onMouseLeave", O = "onMouseEnter", A = "mouse", (t === "pointerout" || t === "pointerover") && (vt = hd, X = "onPointerLeave", O = "onPointerEnter", A = "pointer"), Zt = L == null ? N : Eo(L), z = rt == null ? N : Eo(rt), N = new vt(
              X,
              A + "leave",
              L,
              n,
              Y
            ), N.target = Zt, N.relatedTarget = z, X = null, Hl(Y) === D && (vt = new vt(
              O,
              A + "enter",
              rt,
              n,
              Y
            ), vt.target = z, vt.relatedTarget = Zt, X = vt), Zt = X, L && rt)
              e: {
                for (vt = L, O = rt, A = 0, z = vt; z; z = Za(z))
                  A++;
                for (z = 0, X = O; X; X = Za(X))
                  z++;
                for (; 0 < A - z; )
                  vt = Za(vt), A--;
                for (; 0 < z - A; )
                  O = Za(O), z--;
                for (; A--; ) {
                  if (vt === O || O !== null && vt === O.alternate)
                    break e;
                  vt = Za(vt), O = Za(O);
                }
                vt = null;
              }
            else vt = null;
            L !== null && Pp(
              K,
              N,
              L,
              vt,
              !1
            ), rt !== null && Zt !== null && Pp(
              K,
              Zt,
              rt,
              vt,
              !0
            );
          }
        }
        t: {
          if (N = D ? Eo(D) : window, L = N.nodeName && N.nodeName.toLowerCase(), L === "select" || L === "input" && N.type === "file")
            var at = Td;
          else if (xd(N))
            if (Ed)
              at = Mg;
            else {
              at = Og;
              var Et = Dg;
            }
          else
            L = N.nodeName, !L || L.toLowerCase() !== "input" || N.type !== "checkbox" && N.type !== "radio" ? D && Es(D.elementType) && (at = Td) : at = _g;
          if (at && (at = at(t, D))) {
            wd(
              K,
              at,
              n,
              Y
            );
            break t;
          }
          Et && Et(t, N, D), t === "focusout" && D && N.type === "number" && D.memoizedProps.value != null && Ts(N, "number", N.value);
        }
        switch (Et = D ? Eo(D) : window, t) {
          case "focusin":
            (xd(Et) || Et.contentEditable === "true") && (Ca = Et, Bs = D, No = null);
            break;
          case "focusout":
            No = Bs = Ca = null;
            break;
          case "mousedown":
            Ls = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ls = !1, zd(K, n, Y);
            break;
          case "selectionchange":
            if (jg) break;
          case "keydown":
          case "keyup":
            zd(K, n, Y);
        }
        var ut;
        if (js)
          t: {
            switch (t) {
              case "compositionstart":
                var mt = "onCompositionStart";
                break t;
              case "compositionend":
                mt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                mt = "onCompositionUpdate";
                break t;
            }
            mt = void 0;
          }
        else
          Ea ? bd(t, n) && (mt = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (mt = "onCompositionStart");
        mt && (yd && n.locale !== "ko" && (Ea || mt !== "onCompositionStart" ? mt === "onCompositionEnd" && Ea && (ut = fd()) : (il = Y, Os = "value" in il ? il.value : il.textContent, Ea = !0)), Et = Cr(D, mt), 0 < Et.length && (mt = new pd(
          mt,
          t,
          null,
          n,
          Y
        ), K.push({ event: mt, listeners: Et }), ut ? mt.data = ut : (ut = Sd(n), ut !== null && (mt.data = ut)))), (ut = Tg ? Eg(t, n) : Cg(t, n)) && (mt = Cr(D, "onBeforeInput"), 0 < mt.length && (Et = new pd(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          Y
        ), K.push({
          event: Et,
          listeners: mt
        }), Et.data = ut)), y0(
          K,
          t,
          D,
          n,
          Y
        );
      }
      Kp(K, e);
    });
  }
  function ri(t, e, n) {
    return {
      instance: t,
      listener: e,
      currentTarget: n
    };
  }
  function Cr(t, e) {
    for (var n = e + "Capture", a = []; t !== null; ) {
      var i = t, c = i.stateNode;
      i = i.tag, i !== 5 && i !== 26 && i !== 27 || c === null || (i = Co(t, n), i != null && a.unshift(
        ri(t, i, c)
      ), i = Co(t, e), i != null && a.push(
        ri(t, i, c)
      )), t = t.return;
    }
    return a;
  }
  function Za(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Pp(t, e, n, a, i) {
    for (var c = e._reactName, m = []; n !== null && n !== a; ) {
      var v = n, T = v.alternate, D = v.stateNode;
      if (v = v.tag, T !== null && T === a) break;
      v !== 5 && v !== 26 && v !== 27 || D === null || (T = D, i ? (D = Co(n, c), D != null && m.unshift(
        ri(n, D, T)
      )) : i || (D = Co(n, c), D != null && m.push(
        ri(n, D, T)
      ))), n = n.return;
    }
    m.length !== 0 && t.push({ event: e, listeners: m });
  }
  var S0 = /\r\n?/g, x0 = /\u0000|\uFFFD/g;
  function Wp(t) {
    return (typeof t == "string" ? t : "" + t).replace(S0, `
`).replace(x0, "");
  }
  function Fp(t, e) {
    return e = Wp(e), Wp(t) === e;
  }
  function Rr() {
  }
  function $t(t, e, n, a, i, c) {
    switch (n) {
      case "children":
        typeof a == "string" ? e === "body" || e === "textarea" && a === "" || xa(t, a) : (typeof a == "number" || typeof a == "bigint") && e !== "body" && xa(t, "" + a);
        break;
      case "className":
        ji(t, "class", a);
        break;
      case "tabIndex":
        ji(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ji(t, n, a);
        break;
      case "style":
        sd(t, a, c);
        break;
      case "data":
        if (e !== "object") {
          ji(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(n);
          break;
        }
        a = $i("" + a), t.setAttribute(n, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof c == "function" && (n === "formAction" ? (e !== "input" && $t(t, e, "name", i.name, i, null), $t(
            t,
            e,
            "formEncType",
            i.formEncType,
            i,
            null
          ), $t(
            t,
            e,
            "formMethod",
            i.formMethod,
            i,
            null
          ), $t(
            t,
            e,
            "formTarget",
            i.formTarget,
            i,
            null
          )) : ($t(t, e, "encType", i.encType, i, null), $t(t, e, "method", i.method, i, null), $t(t, e, "target", i.target, i, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(n);
          break;
        }
        a = $i("" + a), t.setAttribute(n, a);
        break;
      case "onClick":
        a != null && (t.onclick = Rr);
        break;
      case "onScroll":
        a != null && Rt("scroll", t);
        break;
      case "onScrollEnd":
        a != null && Rt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(r(61));
          if (n = a.__html, n != null) {
            if (i.children != null) throw Error(r(60));
            t.innerHTML = n;
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        n = $i("" + a), t.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          n
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(n, "" + a) : t.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(n, "") : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        a === !0 ? t.setAttribute(n, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(n, a) : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? t.setAttribute(n, a) : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? t.removeAttribute(n) : t.setAttribute(n, a);
        break;
      case "popover":
        Rt("beforetoggle", t), Rt("toggle", t), Ni(t, "popover", a);
        break;
      case "xlinkActuate":
        Un(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        Un(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        Un(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        Un(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        Un(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        Un(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        Un(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        Un(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        Un(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        Ni(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = Pv.get(n) || n, Ni(t, n, a));
    }
  }
  function su(t, e, n, a, i, c) {
    switch (n) {
      case "style":
        sd(t, a, c);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(r(61));
          if (n = a.__html, n != null) {
            if (i.children != null) throw Error(r(60));
            t.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof a == "string" ? xa(t, a) : (typeof a == "number" || typeof a == "bigint") && xa(t, "" + a);
        break;
      case "onScroll":
        a != null && Rt("scroll", t);
        break;
      case "onScrollEnd":
        a != null && Rt("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = Rr);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!If.hasOwnProperty(n))
          t: {
            if (n[0] === "o" && n[1] === "n" && (i = n.endsWith("Capture"), e = n.slice(2, i ? n.length - 7 : void 0), c = t[St] || null, c = c != null ? c[n] : null, typeof c == "function" && t.removeEventListener(e, c, i), typeof a == "function")) {
              typeof c != "function" && c !== null && (n in t ? t[n] = null : t.hasAttribute(n) && t.removeAttribute(n)), t.addEventListener(e, a, i);
              break t;
            }
            n in t ? t[n] = a : a === !0 ? t.setAttribute(n, "") : Ni(t, n, a);
          }
    }
  }
  function ge(t, e, n) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Rt("error", t), Rt("load", t);
        var a = !1, i = !1, c;
        for (c in n)
          if (n.hasOwnProperty(c)) {
            var m = n[c];
            if (m != null)
              switch (c) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  i = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, e));
                default:
                  $t(t, e, c, m, n, null);
              }
          }
        i && $t(t, e, "srcSet", n.srcSet, n, null), a && $t(t, e, "src", n.src, n, null);
        return;
      case "input":
        Rt("invalid", t);
        var v = c = m = i = null, T = null, D = null;
        for (a in n)
          if (n.hasOwnProperty(a)) {
            var Y = n[a];
            if (Y != null)
              switch (a) {
                case "name":
                  i = Y;
                  break;
                case "type":
                  m = Y;
                  break;
                case "checked":
                  T = Y;
                  break;
                case "defaultChecked":
                  D = Y;
                  break;
                case "value":
                  c = Y;
                  break;
                case "defaultValue":
                  v = Y;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (Y != null)
                    throw Error(r(137, e));
                  break;
                default:
                  $t(t, e, a, Y, n, null);
              }
          }
        ad(
          t,
          c,
          v,
          T,
          D,
          m,
          i,
          !1
        ), Hi(t);
        return;
      case "select":
        Rt("invalid", t), a = m = c = null;
        for (i in n)
          if (n.hasOwnProperty(i) && (v = n[i], v != null))
            switch (i) {
              case "value":
                c = v;
                break;
              case "defaultValue":
                m = v;
                break;
              case "multiple":
                a = v;
              default:
                $t(t, e, i, v, n, null);
            }
        e = c, n = m, t.multiple = !!a, e != null ? Sa(t, !!a, e, !1) : n != null && Sa(t, !!a, n, !0);
        return;
      case "textarea":
        Rt("invalid", t), c = i = a = null;
        for (m in n)
          if (n.hasOwnProperty(m) && (v = n[m], v != null))
            switch (m) {
              case "value":
                a = v;
                break;
              case "defaultValue":
                i = v;
                break;
              case "children":
                c = v;
                break;
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(r(91));
                break;
              default:
                $t(t, e, m, v, n, null);
            }
        id(t, a, i, c), Hi(t);
        return;
      case "option":
        for (T in n)
          if (n.hasOwnProperty(T) && (a = n[T], a != null))
            switch (T) {
              case "selected":
                t.selected = a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                $t(t, e, T, a, n, null);
            }
        return;
      case "dialog":
        Rt("cancel", t), Rt("close", t);
        break;
      case "iframe":
      case "object":
        Rt("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ii.length; a++)
          Rt(ii[a], t);
        break;
      case "image":
        Rt("error", t), Rt("load", t);
        break;
      case "details":
        Rt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        Rt("error", t), Rt("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (D in n)
          if (n.hasOwnProperty(D) && (a = n[D], a != null))
            switch (D) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, e));
              default:
                $t(t, e, D, a, n, null);
            }
        return;
      default:
        if (Es(e)) {
          for (Y in n)
            n.hasOwnProperty(Y) && (a = n[Y], a !== void 0 && su(
              t,
              e,
              Y,
              a,
              n,
              void 0
            ));
          return;
        }
    }
    for (v in n)
      n.hasOwnProperty(v) && (a = n[v], a != null && $t(t, e, v, a, n, null));
  }
  function w0(t, e, n, a) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var i = null, c = null, m = null, v = null, T = null, D = null, Y = null;
        for (L in n) {
          var K = n[L];
          if (n.hasOwnProperty(L) && K != null)
            switch (L) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                T = K;
              default:
                a.hasOwnProperty(L) || $t(t, e, L, null, a, K);
            }
        }
        for (var N in a) {
          var L = a[N];
          if (K = n[N], a.hasOwnProperty(N) && (L != null || K != null))
            switch (N) {
              case "type":
                c = L;
                break;
              case "name":
                i = L;
                break;
              case "checked":
                D = L;
                break;
              case "defaultChecked":
                Y = L;
                break;
              case "value":
                m = L;
                break;
              case "defaultValue":
                v = L;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (L != null)
                  throw Error(r(137, e));
                break;
              default:
                L !== K && $t(
                  t,
                  e,
                  N,
                  L,
                  a,
                  K
                );
            }
        }
        ws(
          t,
          m,
          v,
          T,
          D,
          Y,
          c,
          i
        );
        return;
      case "select":
        L = m = v = N = null;
        for (c in n)
          if (T = n[c], n.hasOwnProperty(c) && T != null)
            switch (c) {
              case "value":
                break;
              case "multiple":
                L = T;
              default:
                a.hasOwnProperty(c) || $t(
                  t,
                  e,
                  c,
                  null,
                  a,
                  T
                );
            }
        for (i in a)
          if (c = a[i], T = n[i], a.hasOwnProperty(i) && (c != null || T != null))
            switch (i) {
              case "value":
                N = c;
                break;
              case "defaultValue":
                v = c;
                break;
              case "multiple":
                m = c;
              default:
                c !== T && $t(
                  t,
                  e,
                  i,
                  c,
                  a,
                  T
                );
            }
        e = v, n = m, a = L, N != null ? Sa(t, !!n, N, !1) : !!a != !!n && (e != null ? Sa(t, !!n, e, !0) : Sa(t, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        L = N = null;
        for (v in n)
          if (i = n[v], n.hasOwnProperty(v) && i != null && !a.hasOwnProperty(v))
            switch (v) {
              case "value":
                break;
              case "children":
                break;
              default:
                $t(t, e, v, null, a, i);
            }
        for (m in a)
          if (i = a[m], c = n[m], a.hasOwnProperty(m) && (i != null || c != null))
            switch (m) {
              case "value":
                N = i;
                break;
              case "defaultValue":
                L = i;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (i != null) throw Error(r(91));
                break;
              default:
                i !== c && $t(t, e, m, i, a, c);
            }
        od(t, N, L);
        return;
      case "option":
        for (var rt in n)
          if (N = n[rt], n.hasOwnProperty(rt) && N != null && !a.hasOwnProperty(rt))
            switch (rt) {
              case "selected":
                t.selected = !1;
                break;
              default:
                $t(
                  t,
                  e,
                  rt,
                  null,
                  a,
                  N
                );
            }
        for (T in a)
          if (N = a[T], L = n[T], a.hasOwnProperty(T) && N !== L && (N != null || L != null))
            switch (T) {
              case "selected":
                t.selected = N && typeof N != "function" && typeof N != "symbol";
                break;
              default:
                $t(
                  t,
                  e,
                  T,
                  N,
                  a,
                  L
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var vt in n)
          N = n[vt], n.hasOwnProperty(vt) && N != null && !a.hasOwnProperty(vt) && $t(t, e, vt, null, a, N);
        for (D in a)
          if (N = a[D], L = n[D], a.hasOwnProperty(D) && N !== L && (N != null || L != null))
            switch (D) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (N != null)
                  throw Error(r(137, e));
                break;
              default:
                $t(
                  t,
                  e,
                  D,
                  N,
                  a,
                  L
                );
            }
        return;
      default:
        if (Es(e)) {
          for (var Zt in n)
            N = n[Zt], n.hasOwnProperty(Zt) && N !== void 0 && !a.hasOwnProperty(Zt) && su(
              t,
              e,
              Zt,
              void 0,
              a,
              N
            );
          for (Y in a)
            N = a[Y], L = n[Y], !a.hasOwnProperty(Y) || N === L || N === void 0 && L === void 0 || su(
              t,
              e,
              Y,
              N,
              a,
              L
            );
          return;
        }
    }
    for (var O in n)
      N = n[O], n.hasOwnProperty(O) && N != null && !a.hasOwnProperty(O) && $t(t, e, O, null, a, N);
    for (K in a)
      N = a[K], L = n[K], !a.hasOwnProperty(K) || N === L || N == null && L == null || $t(t, e, K, N, a, L);
  }
  var cu = null, uu = null;
  function Ar(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Ip(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function th(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function fu(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var du = null;
  function T0() {
    var t = window.event;
    return t && t.type === "popstate" ? t === du ? !1 : (du = t, !0) : (du = null, !1);
  }
  var eh = typeof setTimeout == "function" ? setTimeout : void 0, E0 = typeof clearTimeout == "function" ? clearTimeout : void 0, nh = typeof Promise == "function" ? Promise : void 0, C0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof nh < "u" ? function(t) {
    return nh.resolve(null).then(t).catch(R0);
  } : eh;
  function R0(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function mu(t, e) {
    var n = e, a = 0;
    do {
      var i = n.nextSibling;
      if (t.removeChild(n), i && i.nodeType === 8)
        if (n = i.data, n === "/$") {
          if (a === 0) {
            t.removeChild(i), hi(e);
            return;
          }
          a--;
        } else n !== "$" && n !== "$?" && n !== "$!" || a++;
      n = i;
    } while (n);
    hi(e);
  }
  function pu(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (e = e.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          pu(n), xs(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(n);
    }
  }
  function A0(t, e, n, a) {
    for (; t.nodeType === 1; ) {
      var i = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (a) {
        if (!t[To])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (c = t.getAttribute("rel"), c === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (c !== i.rel || t.getAttribute("href") !== (i.href == null ? null : i.href) || t.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin) || t.getAttribute("title") !== (i.title == null ? null : i.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (c = t.getAttribute("src"), (c !== (i.src == null ? null : i.src) || t.getAttribute("type") !== (i.type == null ? null : i.type) || t.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin)) && c && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var c = i.name == null ? null : "" + i.name;
        if (i.type === "hidden" && t.getAttribute("name") === c)
          return t;
      } else return t;
      if (t = hn(t.nextSibling), t === null) break;
    }
    return null;
  }
  function D0(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = hn(t.nextSibling), t === null)) return null;
    return t;
  }
  function hn(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F")
          break;
        if (e === "/$") return null;
      }
    }
    return t;
  }
  function lh(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (e === 0) return t;
          e--;
        } else n === "/$" && e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function ah(t, e, n) {
    switch (e = Ar(n), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(r(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(r(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(r(454));
        return t;
      default:
        throw Error(r(451));
    }
  }
  var en = /* @__PURE__ */ new Map(), oh = /* @__PURE__ */ new Set();
  function Dr(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.ownerDocument;
  }
  var Wn = I.d;
  I.d = {
    f: O0,
    r: _0,
    D: M0,
    C: z0,
    L: N0,
    m: j0,
    X: U0,
    S: H0,
    M: $0
  };
  function O0() {
    var t = Wn.f(), e = Sr();
    return t || e;
  }
  function _0(t) {
    var e = va(t);
    e !== null && e.tag === 5 && e.type === "form" ? zm(e) : Wn.r(t);
  }
  var Ka = typeof document > "u" ? null : document;
  function ih(t, e, n) {
    var a = Ka;
    if (a && typeof e == "string" && e) {
      var i = ke(e);
      i = 'link[rel="' + t + '"][href="' + i + '"]', typeof n == "string" && (i += '[crossorigin="' + n + '"]'), oh.has(i) || (oh.add(i), t = { rel: t, crossOrigin: n, href: e }, a.querySelector(i) === null && (e = a.createElement("link"), ge(e, "link", t), ie(e), a.head.appendChild(e)));
    }
  }
  function M0(t) {
    Wn.D(t), ih("dns-prefetch", t, null);
  }
  function z0(t, e) {
    Wn.C(t, e), ih("preconnect", t, e);
  }
  function N0(t, e, n) {
    Wn.L(t, e, n);
    var a = Ka;
    if (a && t && e) {
      var i = 'link[rel="preload"][as="' + ke(e) + '"]';
      e === "image" && n && n.imageSrcSet ? (i += '[imagesrcset="' + ke(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (i += '[imagesizes="' + ke(
        n.imageSizes
      ) + '"]')) : i += '[href="' + ke(t) + '"]';
      var c = i;
      switch (e) {
        case "style":
          c = Ja(t);
          break;
        case "script":
          c = Pa(t);
      }
      en.has(c) || (t = P(
        {
          rel: "preload",
          href: e === "image" && n && n.imageSrcSet ? void 0 : t,
          as: e
        },
        n
      ), en.set(c, t), a.querySelector(i) !== null || e === "style" && a.querySelector(si(c)) || e === "script" && a.querySelector(ci(c)) || (e = a.createElement("link"), ge(e, "link", t), ie(e), a.head.appendChild(e)));
    }
  }
  function j0(t, e) {
    Wn.m(t, e);
    var n = Ka;
    if (n && t) {
      var a = e && typeof e.as == "string" ? e.as : "script", i = 'link[rel="modulepreload"][as="' + ke(a) + '"][href="' + ke(t) + '"]', c = i;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          c = Pa(t);
      }
      if (!en.has(c) && (t = P({ rel: "modulepreload", href: t }, e), en.set(c, t), n.querySelector(i) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(ci(c)))
              return;
        }
        a = n.createElement("link"), ge(a, "link", t), ie(a), n.head.appendChild(a);
      }
    }
  }
  function H0(t, e, n) {
    Wn.S(t, e, n);
    var a = Ka;
    if (a && t) {
      var i = ga(a).hoistableStyles, c = Ja(t);
      e = e || "default";
      var m = i.get(c);
      if (!m) {
        var v = { loading: 0, preload: null };
        if (m = a.querySelector(
          si(c)
        ))
          v.loading = 5;
        else {
          t = P(
            { rel: "stylesheet", href: t, "data-precedence": e },
            n
          ), (n = en.get(c)) && hu(t, n);
          var T = m = a.createElement("link");
          ie(T), ge(T, "link", t), T._p = new Promise(function(D, Y) {
            T.onload = D, T.onerror = Y;
          }), T.addEventListener("load", function() {
            v.loading |= 1;
          }), T.addEventListener("error", function() {
            v.loading |= 2;
          }), v.loading |= 4, Or(m, e, a);
        }
        m = {
          type: "stylesheet",
          instance: m,
          count: 1,
          state: v
        }, i.set(c, m);
      }
    }
  }
  function U0(t, e) {
    Wn.X(t, e);
    var n = Ka;
    if (n && t) {
      var a = ga(n).hoistableScripts, i = Pa(t), c = a.get(i);
      c || (c = n.querySelector(ci(i)), c || (t = P({ src: t, async: !0 }, e), (e = en.get(i)) && yu(t, e), c = n.createElement("script"), ie(c), ge(c, "link", t), n.head.appendChild(c)), c = {
        type: "script",
        instance: c,
        count: 1,
        state: null
      }, a.set(i, c));
    }
  }
  function $0(t, e) {
    Wn.M(t, e);
    var n = Ka;
    if (n && t) {
      var a = ga(n).hoistableScripts, i = Pa(t), c = a.get(i);
      c || (c = n.querySelector(ci(i)), c || (t = P({ src: t, async: !0, type: "module" }, e), (e = en.get(i)) && yu(t, e), c = n.createElement("script"), ie(c), ge(c, "link", t), n.head.appendChild(c)), c = {
        type: "script",
        instance: c,
        count: 1,
        state: null
      }, a.set(i, c));
    }
  }
  function rh(t, e, n, a) {
    var i = (i = be.current) ? Dr(i) : null;
    if (!i) throw Error(r(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (e = Ja(n.href), n = ga(
          i
        ).hoistableStyles, a = n.get(e), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(e, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          t = Ja(n.href);
          var c = ga(
            i
          ).hoistableStyles, m = c.get(t);
          if (m || (i = i.ownerDocument || i, m = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, c.set(t, m), (c = i.querySelector(
            si(t)
          )) && !c._p && (m.instance = c, m.state.loading = 5), en.has(t) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, en.set(t, n), c || B0(
            i,
            t,
            n,
            m.state
          ))), e && a === null)
            throw Error(r(528, ""));
          return m;
        }
        if (e && a !== null)
          throw Error(r(529, ""));
        return null;
      case "script":
        return e = n.async, n = n.src, typeof n == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = Pa(n), n = ga(
          i
        ).hoistableScripts, a = n.get(e), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, n.set(e, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(r(444, t));
    }
  }
  function Ja(t) {
    return 'href="' + ke(t) + '"';
  }
  function si(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function sh(t) {
    return P({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function B0(t, e, n, a) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? a.loading = 1 : (e = t.createElement("link"), a.preload = e, e.addEventListener("load", function() {
      return a.loading |= 1;
    }), e.addEventListener("error", function() {
      return a.loading |= 2;
    }), ge(e, "link", n), ie(e), t.head.appendChild(e));
  }
  function Pa(t) {
    return '[src="' + ke(t) + '"]';
  }
  function ci(t) {
    return "script[async]" + t;
  }
  function ch(t, e, n) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var a = t.querySelector(
            'style[data-href~="' + ke(n.href) + '"]'
          );
          if (a)
            return e.instance = a, ie(a), a;
          var i = P({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return a = (t.ownerDocument || t).createElement(
            "style"
          ), ie(a), ge(a, "style", i), Or(a, n.precedence, t), e.instance = a;
        case "stylesheet":
          i = Ja(n.href);
          var c = t.querySelector(
            si(i)
          );
          if (c)
            return e.state.loading |= 4, e.instance = c, ie(c), c;
          a = sh(n), (i = en.get(i)) && hu(a, i), c = (t.ownerDocument || t).createElement("link"), ie(c);
          var m = c;
          return m._p = new Promise(function(v, T) {
            m.onload = v, m.onerror = T;
          }), ge(c, "link", a), e.state.loading |= 4, Or(c, n.precedence, t), e.instance = c;
        case "script":
          return c = Pa(n.src), (i = t.querySelector(
            ci(c)
          )) ? (e.instance = i, ie(i), i) : (a = n, (i = en.get(c)) && (a = P({}, n), yu(a, i)), t = t.ownerDocument || t, i = t.createElement("script"), ie(i), ge(i, "link", a), t.head.appendChild(i), e.instance = i);
        case "void":
          return null;
        default:
          throw Error(r(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (a = e.instance, e.state.loading |= 4, Or(a, n.precedence, t));
    return e.instance;
  }
  function Or(t, e, n) {
    for (var a = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), i = a.length ? a[a.length - 1] : null, c = i, m = 0; m < a.length; m++) {
      var v = a[m];
      if (v.dataset.precedence === e) c = v;
      else if (c !== i) break;
    }
    c ? c.parentNode.insertBefore(t, c.nextSibling) : (e = n.nodeType === 9 ? n.head : n, e.insertBefore(t, e.firstChild));
  }
  function hu(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function yu(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var _r = null;
  function uh(t, e, n) {
    if (_r === null) {
      var a = /* @__PURE__ */ new Map(), i = _r = /* @__PURE__ */ new Map();
      i.set(n, a);
    } else
      i = _r, a = i.get(n), a || (a = /* @__PURE__ */ new Map(), i.set(n, a));
    if (a.has(t)) return a;
    for (a.set(t, null), n = n.getElementsByTagName(t), i = 0; i < n.length; i++) {
      var c = n[i];
      if (!(c[To] || c[Jt] || t === "link" && c.getAttribute("rel") === "stylesheet") && c.namespaceURI !== "http://www.w3.org/2000/svg") {
        var m = c.getAttribute(e) || "";
        m = t + m;
        var v = a.get(m);
        v ? v.push(c) : a.set(m, [c]);
      }
    }
    return a;
  }
  function fh(t, e, n) {
    t = t.ownerDocument || t, t.head.insertBefore(
      n,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function L0(t, e, n) {
    if (n === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
          break;
        return !0;
      case "link":
        if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
          break;
        switch (e.rel) {
          case "stylesheet":
            return t = e.disabled, typeof e.precedence == "string" && t == null;
          default:
            return !0;
        }
      case "script":
        if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
          return !0;
    }
    return !1;
  }
  function dh(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var ui = null;
  function Y0() {
  }
  function q0(t, e, n) {
    if (ui === null) throw Error(r(475));
    var a = ui;
    if (e.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (e.state.loading & 4) === 0) {
      if (e.instance === null) {
        var i = Ja(n.href), c = t.querySelector(
          si(i)
        );
        if (c) {
          t = c._p, t !== null && typeof t == "object" && typeof t.then == "function" && (a.count++, a = Mr.bind(a), t.then(a, a)), e.state.loading |= 4, e.instance = c, ie(c);
          return;
        }
        c = t.ownerDocument || t, n = sh(n), (i = en.get(i)) && hu(n, i), c = c.createElement("link"), ie(c);
        var m = c;
        m._p = new Promise(function(v, T) {
          m.onload = v, m.onerror = T;
        }), ge(c, "link", n), e.instance = c;
      }
      a.stylesheets === null && (a.stylesheets = /* @__PURE__ */ new Map()), a.stylesheets.set(e, t), (t = e.state.preload) && (e.state.loading & 3) === 0 && (a.count++, e = Mr.bind(a), t.addEventListener("load", e), t.addEventListener("error", e));
    }
  }
  function V0() {
    if (ui === null) throw Error(r(475));
    var t = ui;
    return t.stylesheets && t.count === 0 && vu(t, t.stylesheets), 0 < t.count ? function(e) {
      var n = setTimeout(function() {
        if (t.stylesheets && vu(t, t.stylesheets), t.unsuspend) {
          var a = t.unsuspend;
          t.unsuspend = null, a();
        }
      }, 6e4);
      return t.unsuspend = e, function() {
        t.unsuspend = null, clearTimeout(n);
      };
    } : null;
  }
  function Mr() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) vu(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var zr = null;
  function vu(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, zr = /* @__PURE__ */ new Map(), e.forEach(G0, t), zr = null, Mr.call(t));
  }
  function G0(t, e) {
    if (!(e.state.loading & 4)) {
      var n = zr.get(t);
      if (n) var a = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), zr.set(t, n);
        for (var i = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), c = 0; c < i.length; c++) {
          var m = i[c];
          (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") && (n.set(m.dataset.precedence, m), a = m);
        }
        a && n.set(null, a);
      }
      i = e.instance, m = i.getAttribute("data-precedence"), c = n.get(m) || a, c === a && n.set(null, i), n.set(m, i), this.count++, a = Mr.bind(this), i.addEventListener("load", a), i.addEventListener("error", a), c ? c.parentNode.insertBefore(i, c.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(i, t.firstChild)), e.state.loading |= 4;
    }
  }
  var fi = {
    $$typeof: x,
    Provider: null,
    Consumer: null,
    _currentValue: ht,
    _currentValue2: ht,
    _threadCount: 0
  };
  function X0(t, e, n, a, i, c, m, v) {
    this.tag = 1, this.containerInfo = t, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = me(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.finishedLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = me(0), this.hiddenUpdates = me(null), this.identifierPrefix = a, this.onUncaughtError = i, this.onCaughtError = c, this.onRecoverableError = m, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = v, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function mh(t, e, n, a, i, c, m, v, T, D, Y, K) {
    return t = new X0(
      t,
      e,
      n,
      m,
      v,
      T,
      D,
      K
    ), e = 1, c === !0 && (e |= 24), c = Ie(3, null, null, e), t.current = c, c.stateNode = t, e = Js(), e.refCount++, t.pooledCache = e, e.refCount++, c.memoizedState = {
      element: a,
      isDehydrated: n,
      cache: e
    }, Oc(c), t;
  }
  function ph(t) {
    return t ? (t = Da, t) : Da;
  }
  function hh(t, e, n, a, i, c) {
    i = ph(i), a.context === null ? a.context = i : a.pendingContext = i, a = pl(e), a.payload = { element: n }, c = c === void 0 ? null : c, c !== null && (a.callback = c), n = hl(t, a, e), n !== null && (Ee(n, t, e), Ko(n, t, e));
  }
  function yh(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function gu(t, e) {
    yh(t, e), (t = t.alternate) && yh(t, e);
  }
  function vh(t) {
    if (t.tag === 13) {
      var e = rl(t, 67108864);
      e !== null && Ee(e, t, 67108864), gu(t, 67108864);
    }
  }
  var Nr = !0;
  function k0(t, e, n, a) {
    var i = Z.T;
    Z.T = null;
    var c = I.p;
    try {
      I.p = 2, bu(t, e, n, a);
    } finally {
      I.p = c, Z.T = i;
    }
  }
  function Q0(t, e, n, a) {
    var i = Z.T;
    Z.T = null;
    var c = I.p;
    try {
      I.p = 8, bu(t, e, n, a);
    } finally {
      I.p = c, Z.T = i;
    }
  }
  function bu(t, e, n, a) {
    if (Nr) {
      var i = Su(a);
      if (i === null)
        ru(
          t,
          e,
          a,
          jr,
          n
        ), bh(t, a);
      else if (K0(
        i,
        t,
        e,
        n,
        a
      ))
        a.stopPropagation();
      else if (bh(t, a), e & 4 && -1 < Z0.indexOf(t)) {
        for (; i !== null; ) {
          var c = va(i);
          if (c !== null)
            switch (c.tag) {
              case 3:
                if (c = c.stateNode, c.current.memoizedState.isDehydrated) {
                  var m = jt(c.pendingLanes);
                  if (m !== 0) {
                    var v = c;
                    for (v.pendingLanes |= 2, v.entangledLanes |= 2; m; ) {
                      var T = 1 << 31 - oe(m);
                      v.entanglements[1] |= T, m &= ~T;
                    }
                    On(c), (Xt & 6) === 0 && (vr = Re() + 500, oi(0));
                  }
                }
                break;
              case 13:
                v = rl(c, 2), v !== null && Ee(v, c, 2), Sr(), gu(c, 2);
            }
          if (c = Su(a), c === null && ru(
            t,
            e,
            a,
            jr,
            n
          ), c === i) break;
          i = c;
        }
        i !== null && a.stopPropagation();
      } else
        ru(
          t,
          e,
          a,
          null,
          n
        );
    }
  }
  function Su(t) {
    return t = Rs(t), xu(t);
  }
  var jr = null;
  function xu(t) {
    if (jr = null, t = Hl(t), t !== null) {
      var e = V(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (t = et(e), t !== null) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return jr = t, null;
  }
  function gh(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (vo()) {
          case da:
            return 2;
          case ma:
            return 8;
          case nl:
          case go:
            return 32;
          case pa:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var wu = !1, wl = null, Tl = null, El = null, di = /* @__PURE__ */ new Map(), mi = /* @__PURE__ */ new Map(), Cl = [], Z0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function bh(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        wl = null;
        break;
      case "dragenter":
      case "dragleave":
        Tl = null;
        break;
      case "mouseover":
      case "mouseout":
        El = null;
        break;
      case "pointerover":
      case "pointerout":
        di.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        mi.delete(e.pointerId);
    }
  }
  function pi(t, e, n, a, i, c) {
    return t === null || t.nativeEvent !== c ? (t = {
      blockedOn: e,
      domEventName: n,
      eventSystemFlags: a,
      nativeEvent: c,
      targetContainers: [i]
    }, e !== null && (e = va(e), e !== null && vh(e)), t) : (t.eventSystemFlags |= a, e = t.targetContainers, i !== null && e.indexOf(i) === -1 && e.push(i), t);
  }
  function K0(t, e, n, a, i) {
    switch (e) {
      case "focusin":
        return wl = pi(
          wl,
          t,
          e,
          n,
          a,
          i
        ), !0;
      case "dragenter":
        return Tl = pi(
          Tl,
          t,
          e,
          n,
          a,
          i
        ), !0;
      case "mouseover":
        return El = pi(
          El,
          t,
          e,
          n,
          a,
          i
        ), !0;
      case "pointerover":
        var c = i.pointerId;
        return di.set(
          c,
          pi(
            di.get(c) || null,
            t,
            e,
            n,
            a,
            i
          )
        ), !0;
      case "gotpointercapture":
        return c = i.pointerId, mi.set(
          c,
          pi(
            mi.get(c) || null,
            t,
            e,
            n,
            a,
            i
          )
        ), !0;
    }
    return !1;
  }
  function Sh(t) {
    var e = Hl(t.target);
    if (e !== null) {
      var n = V(e);
      if (n !== null) {
        if (e = n.tag, e === 13) {
          if (e = et(n), e !== null) {
            t.blockedOn = e, wo(t.priority, function() {
              if (n.tag === 13) {
                var a = Ye(), i = rl(n, a);
                i !== null && Ee(i, n, a), gu(n, a);
              }
            });
            return;
          }
        } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Hr(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = Su(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var a = new n.constructor(
          n.type,
          n
        );
        Cs = a, n.target.dispatchEvent(a), Cs = null;
      } else
        return e = va(n), e !== null && vh(e), t.blockedOn = n, !1;
      e.shift();
    }
    return !0;
  }
  function xh(t, e, n) {
    Hr(t) && n.delete(e);
  }
  function J0() {
    wu = !1, wl !== null && Hr(wl) && (wl = null), Tl !== null && Hr(Tl) && (Tl = null), El !== null && Hr(El) && (El = null), di.forEach(xh), mi.forEach(xh);
  }
  function Ur(t, e) {
    t.blockedOn === e && (t.blockedOn = null, wu || (wu = !0, l.unstable_scheduleCallback(
      l.unstable_NormalPriority,
      J0
    )));
  }
  var $r = null;
  function wh(t) {
    $r !== t && ($r = t, l.unstable_scheduleCallback(
      l.unstable_NormalPriority,
      function() {
        $r === t && ($r = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e], a = t[e + 1], i = t[e + 2];
          if (typeof a != "function") {
            if (xu(a || n) === null)
              continue;
            break;
          }
          var c = va(n);
          c !== null && (t.splice(e, 3), e -= 3, fc(
            c,
            {
              pending: !0,
              data: i,
              method: n.method,
              action: a
            },
            a,
            i
          ));
        }
      }
    ));
  }
  function hi(t) {
    function e(T) {
      return Ur(T, t);
    }
    wl !== null && Ur(wl, t), Tl !== null && Ur(Tl, t), El !== null && Ur(El, t), di.forEach(e), mi.forEach(e);
    for (var n = 0; n < Cl.length; n++) {
      var a = Cl[n];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < Cl.length && (n = Cl[0], n.blockedOn === null); )
      Sh(n), n.blockedOn === null && Cl.shift();
    if (n = (t.ownerDocument || t).$$reactFormReplay, n != null)
      for (a = 0; a < n.length; a += 3) {
        var i = n[a], c = n[a + 1], m = i[St] || null;
        if (typeof c == "function")
          m || wh(n);
        else if (m) {
          var v = null;
          if (c && c.hasAttribute("formAction")) {
            if (i = c, m = c[St] || null)
              v = m.formAction;
            else if (xu(i) !== null) continue;
          } else v = m.action;
          typeof v == "function" ? n[a + 1] = v : (n.splice(a, 3), a -= 3), wh(n);
        }
      }
  }
  function Tu(t) {
    this._internalRoot = t;
  }
  Br.prototype.render = Tu.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(r(409));
    var n = e.current, a = Ye();
    hh(n, a, t, e, null, null);
  }, Br.prototype.unmount = Tu.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      t.tag === 0 && ka(), hh(t.current, 2, null, t, null, null), Sr(), e[yt] = null;
    }
  };
  function Br(t) {
    this._internalRoot = t;
  }
  Br.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = jl();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < Cl.length && e !== 0 && e < Cl[n].priority; n++) ;
      Cl.splice(n, 0, t), n === 0 && Sh(t);
    }
  };
  var Th = o.version;
  if (Th !== "19.0.0")
    throw Error(
      r(
        527,
        Th,
        "19.0.0"
      )
    );
  I.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(r(188)) : (t = Object.keys(t).join(","), Error(r(268, t)));
    return t = G(e), t = t !== null ? lt(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var P0 = {
    bundleType: 0,
    version: "19.0.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: Z,
    findFiberByHostInstance: Hl,
    reconcilerVersion: "19.0.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Lr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Lr.isDisabled && Lr.supportsFiber)
      try {
        wn = Lr.inject(
          P0
        ), de = Lr;
      } catch {
      }
  }
  return vi.createRoot = function(t, e) {
    if (!u(t)) throw Error(r(299));
    var n = !1, a = "", i = Ym, c = qm, m = Vm, v = null;
    return e != null && (e.unstable_strictMode === !0 && (n = !0), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (i = e.onUncaughtError), e.onCaughtError !== void 0 && (c = e.onCaughtError), e.onRecoverableError !== void 0 && (m = e.onRecoverableError), e.unstable_transitionCallbacks !== void 0 && (v = e.unstable_transitionCallbacks)), e = mh(
      t,
      1,
      !1,
      null,
      null,
      n,
      a,
      i,
      c,
      m,
      v,
      null
    ), t[yt] = e.current, iu(
      t.nodeType === 8 ? t.parentNode : t
    ), new Tu(e);
  }, vi.hydrateRoot = function(t, e, n) {
    if (!u(t)) throw Error(r(299));
    var a = !1, i = "", c = Ym, m = qm, v = Vm, T = null, D = null;
    return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onUncaughtError !== void 0 && (c = n.onUncaughtError), n.onCaughtError !== void 0 && (m = n.onCaughtError), n.onRecoverableError !== void 0 && (v = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (T = n.unstable_transitionCallbacks), n.formState !== void 0 && (D = n.formState)), e = mh(
      t,
      1,
      !0,
      e,
      n ?? null,
      a,
      i,
      c,
      m,
      v,
      T,
      D
    ), e.context = ph(null), n = e.current, a = Ye(), i = pl(a), i.callback = null, hl(n, i, a), e.current.lanes = a, pe(e, a), On(e), t[yt] = e.current, iu(t), new Br(e);
  }, vi.version = "19.0.0", vi;
}
var Nh;
function ib() {
  if (Nh) return Cu.exports;
  Nh = 1;
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (o) {
        console.error(o);
      }
  }
  return l(), Cu.exports = ob(), Cu.exports;
}
var rb = ib(), E = Pu();
const Jr = /* @__PURE__ */ yy(E), sb = /* @__PURE__ */ F0({
  __proto__: null,
  default: Jr
}, [E]);
function Mn(l) {
  return Object.keys(l);
}
function _u(l) {
  return l && typeof l == "object" && !Array.isArray(l);
}
function Wu(l, o) {
  const s = { ...l }, r = o;
  return _u(l) && _u(o) && Object.keys(o).forEach((u) => {
    _u(r[u]) && u in l ? s[u] = Wu(s[u], r[u]) : s[u] = r[u];
  }), s;
}
function cb(l) {
  return l.replace(/[A-Z]/g, (o) => `-${o.toLowerCase()}`);
}
function ub(l) {
  return typeof l != "string" || !l.includes("var(--mantine-scale)") ? l : l.match(/^calc\((.*?)\)$/)?.[1].split("*")[0].trim();
}
function fb(l) {
  const o = ub(l);
  return typeof o == "number" ? o : typeof o == "string" ? o.includes("calc") || o.includes("var") ? o : o.includes("px") ? Number(o.replace("px", "")) : o.includes("rem") ? Number(o.replace("rem", "")) * 16 : o.includes("em") ? Number(o.replace("em", "")) * 16 : Number(o) : NaN;
}
function Mu(l) {
  return l === "0rem" ? "0rem" : `calc(${l} * var(--mantine-scale))`;
}
function gy(l, { shouldScale: o = !1 } = {}) {
  function s(r) {
    if (r === 0 || r === "0")
      return `0${l}`;
    if (typeof r == "number") {
      const u = `${r / 16}${l}`;
      return o ? Mu(u) : u;
    }
    if (typeof r == "string") {
      if (r === "" || r.startsWith("calc(") || r.startsWith("clamp(") || r.includes("rgba("))
        return r;
      if (r.includes(","))
        return r.split(",").map((f) => s(f)).join(",");
      if (r.includes(" "))
        return r.split(" ").map((f) => s(f)).join(" ");
      if (r.includes(l))
        return o ? Mu(r) : r;
      const u = r.replace("px", "");
      if (!Number.isNaN(Number(u))) {
        const f = `${Number(u) / 16}${l}`;
        return o ? Mu(f) : f;
      }
    }
    return r;
  }
  return s;
}
const Q = gy("rem", { shouldScale: !0 }), jh = gy("em");
function ns(l) {
  return Object.keys(l).reduce((o, s) => (l[s] !== void 0 && (o[s] = l[s]), o), {});
}
function by(l) {
  if (typeof l == "number")
    return !0;
  if (typeof l == "string") {
    if (l.startsWith("calc(") || l.startsWith("var(") || l.includes(" ") && l.trim() !== "")
      return !0;
    const o = /^[+-]?[0-9]+(\.[0-9]+)?(px|em|rem|ex|ch|lh|rlh|vw|vh|vmin|vmax|vb|vi|svw|svh|lvw|lvh|dvw|dvh|cm|mm|in|pt|pc|q|cqw|cqh|cqi|cqb|cqmin|cqmax|%)?$/;
    return l.trim().split(/\s+/).every((r) => o.test(r));
  }
  return !1;
}
function oo(l) {
  return Array.isArray(l) || l === null ? !1 : typeof l == "object" ? l.type !== E.Fragment : !1;
}
function io(l) {
  const o = E.createContext(null);
  return [({ children: u, value: f }) => /* @__PURE__ */ w.jsx(o.Provider, { value: f, children: u }), () => {
    const u = E.useContext(o);
    if (u === null)
      throw new Error(l);
    return u;
  }];
}
function Fu(l = null) {
  const o = E.createContext(l);
  return [({ children: u, value: f }) => /* @__PURE__ */ w.jsx(o.Provider, { value: f, children: u }), () => E.useContext(o)];
}
function Pr(l, o) {
  let s = l;
  for (; (s = s.parentElement) && !s.matches(o); )
    ;
  return s;
}
function db(l, o, s) {
  for (let r = l - 1; r >= 0; r -= 1)
    if (!o[r].disabled)
      return r;
  if (s) {
    for (let r = o.length - 1; r > -1; r -= 1)
      if (!o[r].disabled)
        return r;
  }
  return l;
}
function mb(l, o, s) {
  for (let r = l + 1; r < o.length; r += 1)
    if (!o[r].disabled)
      return r;
  if (s) {
    for (let r = 0; r < o.length; r += 1)
      if (!o[r].disabled)
        return r;
  }
  return l;
}
function pb(l, o, s) {
  return Pr(l, s) === Pr(o, s);
}
function hb({
  parentSelector: l,
  siblingSelector: o,
  onKeyDown: s,
  loop: r = !0,
  activateOnFocus: u = !1,
  dir: f = "rtl",
  orientation: d
}) {
  return (p) => {
    s?.(p);
    const y = Array.from(
      Pr(p.currentTarget, l)?.querySelectorAll(
        o
      ) || []
    ).filter((b) => pb(p.currentTarget, b, l)), h = y.findIndex((b) => p.currentTarget === b), g = mb(h, y, r), S = db(h, y, r);
    switch (p.key) {
      case "ArrowRight":
        break;
      case "ArrowLeft":
        break;
      case "ArrowUp": {
        p.stopPropagation(), p.preventDefault(), y[S].focus(), u && y[S].click();
        break;
      }
      case "ArrowDown": {
        p.stopPropagation(), p.preventDefault(), y[g].focus(), u && y[g].click();
        break;
      }
      case "Home": {
        p.stopPropagation(), p.preventDefault(), !y[0].disabled && y[0].focus();
        break;
      }
      case "End": {
        p.stopPropagation(), p.preventDefault();
        const b = y.length - 1;
        !y[b].disabled && y[b].focus();
        break;
      }
    }
  };
}
const yb = {
  app: 100,
  modal: 200,
  popover: 300,
  overlay: 400,
  max: 9999
};
function vb(l) {
  return yb[l];
}
const gb = () => {
};
function bb(l, o = { active: !0 }) {
  return typeof l != "function" || !o.active ? o.onKeyDown || gb : (s) => {
    s.key === "Escape" && (l(s), o.onTrigger?.());
  };
}
function le(l, o = "size", s = !0) {
  if (l !== void 0)
    return by(l) ? s ? Q(l) : l : `var(--${o}-${l})`;
}
function Hh(l) {
  return le(l, "mantine-spacing");
}
function ca(l) {
  return l === void 0 ? "var(--mantine-radius-default)" : le(l, "mantine-radius");
}
function nn(l) {
  return le(l, "mantine-font-size");
}
function Sb(l) {
  if (l)
    return le(l, "mantine-shadow", !1);
}
function _n(l, o) {
  return (s) => {
    l?.(s), o?.(s);
  };
}
function xb(l, o, s) {
  return s ? Array.from(
    Pr(s, o)?.querySelectorAll(l) || []
  ).findIndex((r) => r === s) : null;
}
function wb() {
  const [l, o] = E.useState(-1);
  return [l, { setHovered: o, resetHovered: () => o(-1) }];
}
function Tb() {
  return `mantine-${Math.random().toString(36).slice(2, 11)}`;
}
function na(l) {
  const o = E.useRef(l);
  return E.useEffect(() => {
    o.current = l;
  }), E.useMemo(() => (...s) => o.current?.(...s), []);
}
function ls(l, o) {
  const s = na(l), r = E.useRef(0);
  return E.useEffect(() => () => window.clearTimeout(r.current), []), E.useCallback(
    (...u) => {
      window.clearTimeout(r.current), r.current = window.setTimeout(() => s(...u), o);
    },
    [s, o]
  );
}
const Uh = ["mousedown", "touchstart"];
function Eb(l, o, s) {
  const r = E.useRef();
  return E.useEffect(() => {
    const u = (f) => {
      const { target: d } = f ?? {};
      if (Array.isArray(s)) {
        const p = d?.hasAttribute("data-ignore-outside-clicks") || !document.body.contains(d) && d.tagName !== "HTML";
        s.every((h) => !!h && !f.composedPath().includes(h)) && !p && l();
      } else r.current && !r.current.contains(d) && l();
    };
    return (o || Uh).forEach((f) => document.addEventListener(f, u)), () => {
      (o || Uh).forEach((f) => document.removeEventListener(f, u));
    };
  }, [r, l, s]), r;
}
function Cb(l, o) {
  try {
    return l.addEventListener("change", o), () => l.removeEventListener("change", o);
  } catch {
    return l.addListener(o), () => l.removeListener(o);
  }
}
function Rb(l, o) {
  return typeof window < "u" && "matchMedia" in window ? window.matchMedia(l).matches : !1;
}
function Ab(l, o, { getInitialValueInEffect: s } = {
  getInitialValueInEffect: !0
}) {
  const [r, u] = E.useState(
    s ? o : Rb(l)
  ), f = E.useRef();
  return E.useEffect(() => {
    if ("matchMedia" in window)
      return f.current = window.matchMedia(l), u(f.current.matches), Cb(f.current, (d) => u(d.matches));
  }, [l]), r;
}
const Ci = typeof document < "u" ? E.useLayoutEffect : E.useEffect;
function oa(l, o) {
  const s = E.useRef(!1);
  E.useEffect(
    () => () => {
      s.current = !1;
    },
    []
  ), E.useEffect(() => {
    if (s.current)
      return l();
    s.current = !0;
  }, o);
}
function Db({ opened: l, shouldReturnFocus: o = !0 }) {
  const s = E.useRef(), r = () => {
    s.current && "focus" in s.current && typeof s.current.focus == "function" && s.current?.focus({ preventScroll: !0 });
  };
  return oa(() => {
    let u = -1;
    const f = (d) => {
      d.key === "Tab" && window.clearTimeout(u);
    };
    return document.addEventListener("keydown", f), l ? s.current = document.activeElement : o && (u = window.setTimeout(r, 10)), () => {
      window.clearTimeout(u), document.removeEventListener("keydown", f);
    };
  }, [l, o]), r;
}
const Ob = /input|select|textarea|button|object/, Sy = "a, input, select, textarea, button, object, [tabindex]";
function _b(l) {
  return l.style.display === "none";
}
function Mb(l) {
  if (l.getAttribute("aria-hidden") || l.getAttribute("hidden") || l.getAttribute("type") === "hidden")
    return !1;
  let s = l;
  for (; s && !(s === document.body || s.nodeType === 11); ) {
    if (_b(s))
      return !1;
    s = s.parentNode;
  }
  return !0;
}
function xy(l) {
  let o = l.getAttribute("tabindex");
  return o === null && (o = void 0), parseInt(o, 10);
}
function Yu(l) {
  const o = l.nodeName.toLowerCase(), s = !Number.isNaN(xy(l));
  return /* @ts-expect-error function accepts any html element but if it is a button, it should not be disabled to trigger the condition */ (Ob.test(o) && !l.disabled || l instanceof HTMLAnchorElement && l.href || s) && Mb(l);
}
function wy(l) {
  const o = xy(l);
  return (Number.isNaN(o) || o >= 0) && Yu(l);
}
function zb(l) {
  return Array.from(l.querySelectorAll(Sy)).filter(wy);
}
function Nb(l, o) {
  const s = zb(l);
  if (!s.length) {
    o.preventDefault();
    return;
  }
  const r = s[o.shiftKey ? 0 : s.length - 1], u = l.getRootNode();
  let f = r === u.activeElement || l === u.activeElement;
  const d = u.activeElement;
  if (d.tagName === "INPUT" && d.getAttribute("type") === "radio" && (f = s.filter(
    (g) => g.getAttribute("type") === "radio" && g.getAttribute("name") === d.getAttribute("name")
  ).includes(r)), !f)
    return;
  o.preventDefault();
  const y = s[o.shiftKey ? s.length - 1 : 0];
  y && y.focus();
}
function jb(l = !0) {
  const o = E.useRef(), s = (u) => {
    let f = u.querySelector("[data-autofocus]");
    if (!f) {
      const d = Array.from(u.querySelectorAll(Sy));
      f = d.find(wy) || d.find(Yu) || null, !f && Yu(u) && (f = u);
    }
    f && f.focus({ preventScroll: !0 });
  }, r = E.useCallback(
    (u) => {
      l && u !== null && o.current !== u && (u ? (setTimeout(() => {
        u.getRootNode() && s(u);
      }), o.current = u) : o.current = null);
    },
    [l]
  );
  return E.useEffect(() => {
    if (!l)
      return;
    o.current && setTimeout(() => s(o.current));
    const u = (f) => {
      f.key === "Tab" && o.current && Nb(o.current, f);
    };
    return document.addEventListener("keydown", u), () => document.removeEventListener("keydown", u);
  }, [l]), r;
}
const Hb = Jr.useId || (() => {
});
function Ub() {
  const l = Hb();
  return l ? `mantine-${l.replace(/:/g, "")}` : "";
}
function ro(l) {
  const o = Ub(), [s, r] = E.useState(o);
  return Ci(() => {
    r(Tb());
  }, []), typeof l == "string" ? l : typeof window > "u" ? o : s;
}
function Ty(l, o) {
  typeof l == "function" ? l(o) : typeof l == "object" && l !== null && "current" in l && (l.current = o);
}
function $b(...l) {
  return (o) => {
    l.forEach((s) => Ty(s, o));
  };
}
function ue(...l) {
  return E.useCallback($b(...l), l);
}
function Al({
  value: l,
  defaultValue: o,
  finalValue: s,
  onChange: r = () => {
  }
}) {
  const [u, f] = E.useState(
    o !== void 0 ? o : s
  ), d = (p, ...y) => {
    f(p), r?.(p, ...y);
  };
  return l !== void 0 ? [l, r, !0] : [u, d, !1];
}
function Bb(l, o) {
  return Ab("(prefers-reduced-motion: reduce)", l, o);
}
function Lb(l, o, s = { autoInvoke: !1 }) {
  const r = E.useRef(null), u = E.useCallback(
    (...d) => {
      r.current || (r.current = window.setTimeout(() => {
        l(d), r.current = null;
      }, o));
    },
    [o]
  ), f = E.useCallback(() => {
    r.current && (window.clearTimeout(r.current), r.current = null);
  }, []);
  return E.useEffect(() => (s.autoInvoke && u(), f), [f, u]), { start: u, clear: f };
}
function Yb(l, o, s) {
  const r = E.useRef(), u = E.useRef(null);
  return E.useEffect(() => {
    const f = typeof s == "function" ? s() : s;
    return (f || u.current) && (r.current = new MutationObserver(l), r.current.observe(f || u.current, o)), () => {
      r.current?.disconnect();
    };
  }, [l, o]), u;
}
function qb() {
  const [l, o] = E.useState(!1);
  return E.useEffect(() => o(!0), []), l;
}
function Vb() {
  return typeof process < "u" && process.env ? "production" : "development";
}
function Ey(l) {
  const o = Jr.version;
  return typeof Jr.version != "string" || o.startsWith("18.") ? l?.ref : l?.props?.ref;
}
function Cy(l) {
  var o, s, r = "";
  if (typeof l == "string" || typeof l == "number") r += l;
  else if (typeof l == "object") if (Array.isArray(l)) {
    var u = l.length;
    for (o = 0; o < u; o++) l[o] && (s = Cy(l[o])) && (r && (r += " "), r += s);
  } else for (s in l) l[s] && (r && (r += " "), r += s);
  return r;
}
function el() {
  for (var l, o, s = 0, r = "", u = arguments.length; s < u; s++) (l = arguments[s]) && (o = Cy(l)) && (r && (r += " "), r += o);
  return r;
}
const Gb = {};
function Xb(l) {
  const o = {};
  return l.forEach((s) => {
    Object.entries(s).forEach(([r, u]) => {
      o[r] ? o[r] = el(o[r], u) : o[r] = u;
    });
  }), o;
}
function as({ theme: l, classNames: o, props: s, stylesCtx: r }) {
  const f = (Array.isArray(o) ? o : [o]).map(
    (d) => typeof d == "function" ? d(l, s, r) : d || Gb
  );
  return Xb(f);
}
function Wr({ theme: l, styles: o, props: s, stylesCtx: r }) {
  return (Array.isArray(o) ? o : [o]).reduce((f, d) => typeof d == "function" ? { ...f, ...d(l, s, r) } : { ...f, ...d }, {});
}
const Ry = E.createContext(null);
function ua() {
  const l = E.useContext(Ry);
  if (!l)
    throw new Error("[@mantine/core] MantineProvider was not found in tree");
  return l;
}
function kb() {
  return ua().cssVariablesResolver;
}
function Qb() {
  return ua().classNamesPrefix;
}
function Iu() {
  return ua().getStyleNonce;
}
function Zb() {
  return ua().withStaticClasses;
}
function Kb() {
  return ua().headless;
}
function Jb() {
  return ua().stylesTransform?.sx;
}
function Pb() {
  return ua().stylesTransform?.styles;
}
function Wb(l) {
  return /^#?([0-9A-F]{3}){1,2}([0-9A-F]{2})?$/i.test(l);
}
function Fb(l) {
  let o = l.replace("#", "");
  if (o.length === 3) {
    const d = o.split("");
    o = [
      d[0],
      d[0],
      d[1],
      d[1],
      d[2],
      d[2]
    ].join("");
  }
  if (o.length === 8) {
    const d = parseInt(o.slice(6, 8), 16) / 255;
    return {
      r: parseInt(o.slice(0, 2), 16),
      g: parseInt(o.slice(2, 4), 16),
      b: parseInt(o.slice(4, 6), 16),
      a: d
    };
  }
  const s = parseInt(o, 16), r = s >> 16 & 255, u = s >> 8 & 255, f = s & 255;
  return {
    r,
    g: u,
    b: f,
    a: 1
  };
}
function Ib(l) {
  const [o, s, r, u] = l.replace(/[^0-9,./]/g, "").split(/[/,]/).map(Number);
  return { r: o, g: s, b: r, a: u || 1 };
}
function t1(l) {
  const o = /^hsla?\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*(,\s*(0?\.\d+|\d+(\.\d+)?))?\s*\)$/i, s = l.match(o);
  if (!s)
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    };
  const r = parseInt(s[1], 10), u = parseInt(s[2], 10) / 100, f = parseInt(s[3], 10) / 100, d = s[5] ? parseFloat(s[5]) : void 0, p = (1 - Math.abs(2 * f - 1)) * u, y = r / 60, h = p * (1 - Math.abs(y % 2 - 1)), g = f - p / 2;
  let S, b, x;
  return y >= 0 && y < 1 ? (S = p, b = h, x = 0) : y >= 1 && y < 2 ? (S = h, b = p, x = 0) : y >= 2 && y < 3 ? (S = 0, b = p, x = h) : y >= 3 && y < 4 ? (S = 0, b = h, x = p) : y >= 4 && y < 5 ? (S = h, b = 0, x = p) : (S = p, b = 0, x = h), {
    r: Math.round((S + g) * 255),
    g: Math.round((b + g) * 255),
    b: Math.round((x + g) * 255),
    a: d || 1
  };
}
function tf(l) {
  return Wb(l) ? Fb(l) : l.startsWith("rgb") ? Ib(l) : l.startsWith("hsl") ? t1(l) : {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  };
}
function Yr(l, o) {
  if (l.startsWith("var("))
    return `color-mix(in srgb, ${l}, black ${o * 100}%)`;
  const { r: s, g: r, b: u, a: f } = tf(l), d = 1 - o, p = (y) => Math.round(y * d);
  return `rgba(${p(s)}, ${p(r)}, ${p(u)}, ${f})`;
}
function wi(l, o) {
  return typeof l.primaryShade == "number" ? l.primaryShade : o === "dark" ? l.primaryShade.dark : l.primaryShade.light;
}
function zu(l) {
  return l <= 0.03928 ? l / 12.92 : ((l + 0.055) / 1.055) ** 2.4;
}
function e1(l) {
  const o = l.match(/oklch\((.*?)%\s/);
  return o ? parseFloat(o[1]) : null;
}
function n1(l) {
  if (l.startsWith("oklch("))
    return (e1(l) || 0) / 100;
  const { r: o, g: s, b: r } = tf(l), u = o / 255, f = s / 255, d = r / 255, p = zu(u), y = zu(f), h = zu(d);
  return 0.2126 * p + 0.7152 * y + 0.0722 * h;
}
function gi(l, o = 0.179) {
  return l.startsWith("var(") ? !1 : n1(l) > o;
}
function so({
  color: l,
  theme: o,
  colorScheme: s
}) {
  if (typeof l != "string")
    throw new Error(
      `[@mantine/core] Failed to parse color. Expected color to be a string, instead got ${typeof l}`
    );
  if (l === "bright")
    return {
      color: l,
      value: s === "dark" ? o.white : o.black,
      shade: void 0,
      isThemeColor: !1,
      isLight: gi(
        s === "dark" ? o.white : o.black,
        o.luminanceThreshold
      ),
      variable: "--mantine-color-bright"
    };
  if (l === "dimmed")
    return {
      color: l,
      value: s === "dark" ? o.colors.dark[2] : o.colors.gray[7],
      shade: void 0,
      isThemeColor: !1,
      isLight: gi(
        s === "dark" ? o.colors.dark[2] : o.colors.gray[6],
        o.luminanceThreshold
      ),
      variable: "--mantine-color-dimmed"
    };
  if (l === "white" || l === "black")
    return {
      color: l,
      value: l === "white" ? o.white : o.black,
      shade: void 0,
      isThemeColor: !1,
      isLight: gi(
        l === "white" ? o.white : o.black,
        o.luminanceThreshold
      ),
      variable: `--mantine-color-${l}`
    };
  const [r, u] = l.split("."), f = u ? Number(u) : void 0, d = r in o.colors;
  if (d) {
    const p = f !== void 0 ? o.colors[r][f] : o.colors[r][wi(o, s || "light")];
    return {
      color: r,
      value: p,
      shade: f,
      isThemeColor: d,
      isLight: gi(p, o.luminanceThreshold),
      variable: u ? `--mantine-color-${r}-${f}` : `--mantine-color-${r}-filled`
    };
  }
  return {
    color: l,
    value: l,
    isThemeColor: d,
    isLight: gi(l, o.luminanceThreshold),
    shade: f,
    variable: void 0
  };
}
function la(l, o) {
  const s = so({ color: l || o.primaryColor, theme: o });
  return s.variable ? `var(${s.variable})` : l;
}
function $h(l, o) {
  const s = {
    from: l?.from || o.defaultGradient.from,
    to: l?.to || o.defaultGradient.to,
    deg: l?.deg || o.defaultGradient.deg || 0
  }, r = la(s.from, o), u = la(s.to, o);
  return `linear-gradient(${s.deg}deg, ${r} 0%, ${u} 100%)`;
}
function Fn(l, o) {
  if (typeof l != "string" || o > 1 || o < 0)
    return "rgba(0, 0, 0, 1)";
  if (l.startsWith("var(")) {
    const f = (1 - o) * 100;
    return `color-mix(in srgb, ${l}, transparent ${f}%)`;
  }
  if (l.startsWith("oklch"))
    return l.includes("/") ? l.replace(/\/\s*[\d.]+\s*\)/, `/ ${o})`) : l.replace(")", ` / ${o})`);
  const { r: s, g: r, b: u } = tf(l);
  return `rgba(${s}, ${r}, ${u}, ${o})`;
}
const Wa = Fn, l1 = ({
  color: l,
  theme: o,
  variant: s,
  gradient: r,
  autoContrast: u
}) => {
  const f = so({ color: l, theme: o }), d = typeof u == "boolean" ? u : o.autoContrast;
  if (s === "filled") {
    const p = d && f.isLight ? "var(--mantine-color-black)" : "var(--mantine-color-white)";
    return f.isThemeColor ? f.shade === void 0 ? {
      background: `var(--mantine-color-${l}-filled)`,
      hover: `var(--mantine-color-${l}-filled-hover)`,
      color: p,
      border: `${Q(1)} solid transparent`
    } : {
      background: `var(--mantine-color-${f.color}-${f.shade})`,
      hover: `var(--mantine-color-${f.color}-${f.shade === 9 ? 8 : f.shade + 1})`,
      color: p,
      border: `${Q(1)} solid transparent`
    } : {
      background: l,
      hover: Yr(l, 0.1),
      color: p,
      border: `${Q(1)} solid transparent`
    };
  }
  if (s === "light") {
    if (f.isThemeColor) {
      if (f.shade === void 0)
        return {
          background: `var(--mantine-color-${l}-light)`,
          hover: `var(--mantine-color-${l}-light-hover)`,
          color: `var(--mantine-color-${l}-light-color)`,
          border: `${Q(1)} solid transparent`
        };
      const p = o.colors[f.color][f.shade];
      return {
        background: Fn(p, 0.1),
        hover: Fn(p, 0.12),
        color: `var(--mantine-color-${f.color}-${Math.min(f.shade, 6)})`,
        border: `${Q(1)} solid transparent`
      };
    }
    return {
      background: Fn(l, 0.1),
      hover: Fn(l, 0.12),
      color: l,
      border: `${Q(1)} solid transparent`
    };
  }
  if (s === "outline")
    return f.isThemeColor ? f.shade === void 0 ? {
      background: "transparent",
      hover: `var(--mantine-color-${l}-outline-hover)`,
      color: `var(--mantine-color-${l}-outline)`,
      border: `${Q(1)} solid var(--mantine-color-${l}-outline)`
    } : {
      background: "transparent",
      hover: Fn(o.colors[f.color][f.shade], 0.05),
      color: `var(--mantine-color-${f.color}-${f.shade})`,
      border: `${Q(1)} solid var(--mantine-color-${f.color}-${f.shade})`
    } : {
      background: "transparent",
      hover: Fn(l, 0.05),
      color: l,
      border: `${Q(1)} solid ${l}`
    };
  if (s === "subtle") {
    if (f.isThemeColor) {
      if (f.shade === void 0)
        return {
          background: "transparent",
          hover: `var(--mantine-color-${l}-light-hover)`,
          color: `var(--mantine-color-${l}-light-color)`,
          border: `${Q(1)} solid transparent`
        };
      const p = o.colors[f.color][f.shade];
      return {
        background: "transparent",
        hover: Fn(p, 0.12),
        color: `var(--mantine-color-${f.color}-${Math.min(f.shade, 6)})`,
        border: `${Q(1)} solid transparent`
      };
    }
    return {
      background: "transparent",
      hover: Fn(l, 0.12),
      color: l,
      border: `${Q(1)} solid transparent`
    };
  }
  return s === "transparent" ? f.isThemeColor ? f.shade === void 0 ? {
    background: "transparent",
    hover: "transparent",
    color: `var(--mantine-color-${l}-light-color)`,
    border: `${Q(1)} solid transparent`
  } : {
    background: "transparent",
    hover: "transparent",
    color: `var(--mantine-color-${f.color}-${Math.min(f.shade, 6)})`,
    border: `${Q(1)} solid transparent`
  } : {
    background: "transparent",
    hover: "transparent",
    color: l,
    border: `${Q(1)} solid transparent`
  } : s === "white" ? f.isThemeColor ? f.shade === void 0 ? {
    background: "var(--mantine-color-white)",
    hover: Yr(o.white, 0.01),
    color: `var(--mantine-color-${l}-filled)`,
    border: `${Q(1)} solid transparent`
  } : {
    background: "var(--mantine-color-white)",
    hover: Yr(o.white, 0.01),
    color: `var(--mantine-color-${f.color}-${f.shade})`,
    border: `${Q(1)} solid transparent`
  } : {
    background: "var(--mantine-color-white)",
    hover: Yr(o.white, 0.01),
    color: l,
    border: `${Q(1)} solid transparent`
  } : s === "gradient" ? {
    background: $h(r, o),
    hover: $h(r, o),
    color: "var(--mantine-color-white)",
    border: "none"
  } : s === "default" ? {
    background: "var(--mantine-color-default)",
    hover: "var(--mantine-color-default-hover)",
    color: "var(--mantine-color-default-color)",
    border: `${Q(1)} solid var(--mantine-color-default-border)`
  } : {};
}, a1 = {
  dark: [
    "#C9C9C9",
    "#b8b8b8",
    "#828282",
    "#696969",
    "#424242",
    "#3b3b3b",
    "#2e2e2e",
    "#242424",
    "#1f1f1f",
    "#141414"
  ],
  gray: [
    "#f8f9fa",
    "#f1f3f5",
    "#e9ecef",
    "#dee2e6",
    "#ced4da",
    "#adb5bd",
    "#868e96",
    "#495057",
    "#343a40",
    "#212529"
  ],
  red: [
    "#fff5f5",
    "#ffe3e3",
    "#ffc9c9",
    "#ffa8a8",
    "#ff8787",
    "#ff6b6b",
    "#fa5252",
    "#f03e3e",
    "#e03131",
    "#c92a2a"
  ],
  pink: [
    "#fff0f6",
    "#ffdeeb",
    "#fcc2d7",
    "#faa2c1",
    "#f783ac",
    "#f06595",
    "#e64980",
    "#d6336c",
    "#c2255c",
    "#a61e4d"
  ],
  grape: [
    "#f8f0fc",
    "#f3d9fa",
    "#eebefa",
    "#e599f7",
    "#da77f2",
    "#cc5de8",
    "#be4bdb",
    "#ae3ec9",
    "#9c36b5",
    "#862e9c"
  ],
  violet: [
    "#f3f0ff",
    "#e5dbff",
    "#d0bfff",
    "#b197fc",
    "#9775fa",
    "#845ef7",
    "#7950f2",
    "#7048e8",
    "#6741d9",
    "#5f3dc4"
  ],
  indigo: [
    "#edf2ff",
    "#dbe4ff",
    "#bac8ff",
    "#91a7ff",
    "#748ffc",
    "#5c7cfa",
    "#4c6ef5",
    "#4263eb",
    "#3b5bdb",
    "#364fc7"
  ],
  blue: [
    "#e7f5ff",
    "#d0ebff",
    "#a5d8ff",
    "#74c0fc",
    "#4dabf7",
    "#339af0",
    "#228be6",
    "#1c7ed6",
    "#1971c2",
    "#1864ab"
  ],
  cyan: [
    "#e3fafc",
    "#c5f6fa",
    "#99e9f2",
    "#66d9e8",
    "#3bc9db",
    "#22b8cf",
    "#15aabf",
    "#1098ad",
    "#0c8599",
    "#0b7285"
  ],
  teal: [
    "#e6fcf5",
    "#c3fae8",
    "#96f2d7",
    "#63e6be",
    "#38d9a9",
    "#20c997",
    "#12b886",
    "#0ca678",
    "#099268",
    "#087f5b"
  ],
  green: [
    "#ebfbee",
    "#d3f9d8",
    "#b2f2bb",
    "#8ce99a",
    "#69db7c",
    "#51cf66",
    "#40c057",
    "#37b24d",
    "#2f9e44",
    "#2b8a3e"
  ],
  lime: [
    "#f4fce3",
    "#e9fac8",
    "#d8f5a2",
    "#c0eb75",
    "#a9e34b",
    "#94d82d",
    "#82c91e",
    "#74b816",
    "#66a80f",
    "#5c940d"
  ],
  yellow: [
    "#fff9db",
    "#fff3bf",
    "#ffec99",
    "#ffe066",
    "#ffd43b",
    "#fcc419",
    "#fab005",
    "#f59f00",
    "#f08c00",
    "#e67700"
  ],
  orange: [
    "#fff4e6",
    "#ffe8cc",
    "#ffd8a8",
    "#ffc078",
    "#ffa94d",
    "#ff922b",
    "#fd7e14",
    "#f76707",
    "#e8590c",
    "#d9480f"
  ]
}, Bh = "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji", ef = {
  scale: 1,
  fontSmoothing: !0,
  focusRing: "auto",
  white: "#fff",
  black: "#000",
  colors: a1,
  primaryShade: { light: 6, dark: 8 },
  primaryColor: "blue",
  variantColorResolver: l1,
  autoContrast: !1,
  luminanceThreshold: 0.3,
  fontFamily: Bh,
  fontFamilyMonospace: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  respectReducedMotion: !1,
  cursorType: "default",
  defaultGradient: { from: "blue", to: "cyan", deg: 45 },
  defaultRadius: "sm",
  activeClassName: "mantine-active",
  focusClassName: "",
  headings: {
    fontFamily: Bh,
    fontWeight: "700",
    textWrap: "wrap",
    sizes: {
      h1: { fontSize: Q(34), lineHeight: "1.3" },
      h2: { fontSize: Q(26), lineHeight: "1.35" },
      h3: { fontSize: Q(22), lineHeight: "1.4" },
      h4: { fontSize: Q(18), lineHeight: "1.45" },
      h5: { fontSize: Q(16), lineHeight: "1.5" },
      h6: { fontSize: Q(14), lineHeight: "1.5" }
    }
  },
  fontSizes: {
    xs: Q(12),
    sm: Q(14),
    md: Q(16),
    lg: Q(18),
    xl: Q(20)
  },
  lineHeights: {
    xs: "1.4",
    sm: "1.45",
    md: "1.55",
    lg: "1.6",
    xl: "1.65"
  },
  radius: {
    xs: Q(2),
    sm: Q(4),
    md: Q(8),
    lg: Q(16),
    xl: Q(32)
  },
  spacing: {
    xs: Q(10),
    sm: Q(12),
    md: Q(16),
    lg: Q(20),
    xl: Q(32)
  },
  breakpoints: {
    xs: "36em",
    sm: "48em",
    md: "62em",
    lg: "75em",
    xl: "88em"
  },
  shadows: {
    xs: `0 ${Q(1)} ${Q(3)} rgba(0, 0, 0, 0.05), 0 ${Q(1)} ${Q(2)} rgba(0, 0, 0, 0.1)`,
    sm: `0 ${Q(1)} ${Q(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${Q(10)} ${Q(
      15
    )} ${Q(-5)}, rgba(0, 0, 0, 0.04) 0 ${Q(7)} ${Q(7)} ${Q(-5)}`,
    md: `0 ${Q(1)} ${Q(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${Q(20)} ${Q(
      25
    )} ${Q(-5)}, rgba(0, 0, 0, 0.04) 0 ${Q(10)} ${Q(10)} ${Q(-5)}`,
    lg: `0 ${Q(1)} ${Q(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${Q(28)} ${Q(
      23
    )} ${Q(-7)}, rgba(0, 0, 0, 0.04) 0 ${Q(12)} ${Q(12)} ${Q(-7)}`,
    xl: `0 ${Q(1)} ${Q(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${Q(36)} ${Q(
      28
    )} ${Q(-7)}, rgba(0, 0, 0, 0.04) 0 ${Q(17)} ${Q(17)} ${Q(-7)}`
  },
  other: {},
  components: {}
};
function Lh(l) {
  return l === "auto" || l === "dark" || l === "light";
}
function o1({
  key: l = "mantine-color-scheme-value"
} = {}) {
  let o;
  return {
    get: (s) => {
      if (typeof window > "u")
        return s;
      try {
        const r = window.localStorage.getItem(l);
        return Lh(r) ? r : s;
      } catch {
        return s;
      }
    },
    set: (s) => {
      try {
        window.localStorage.setItem(l, s);
      } catch (r) {
        console.warn(
          "[@mantine/core] Local storage color scheme manager was unable to save color scheme.",
          r
        );
      }
    },
    subscribe: (s) => {
      o = (r) => {
        r.storageArea === window.localStorage && r.key === l && Lh(r.newValue) && s(r.newValue);
      }, window.addEventListener("storage", o);
    },
    unsubscribe: () => {
      window.removeEventListener("storage", o);
    },
    clear: () => {
      window.localStorage.removeItem(l);
    }
  };
}
const i1 = "[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color", Yh = "[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }";
function Nu(l) {
  return l < 0 || l > 9 ? !1 : parseInt(l.toString(), 10) === l;
}
function qh(l) {
  if (!(l.primaryColor in l.colors))
    throw new Error(i1);
  if (typeof l.primaryShade == "object" && (!Nu(l.primaryShade.dark) || !Nu(l.primaryShade.light)))
    throw new Error(Yh);
  if (typeof l.primaryShade == "number" && !Nu(l.primaryShade))
    throw new Error(Yh);
}
function r1(l, o) {
  if (!o)
    return qh(l), l;
  const s = Wu(l, o);
  return o.fontFamily && !o.headings?.fontFamily && (s.headings.fontFamily = o.fontFamily), qh(s), s;
}
const nf = E.createContext(null), s1 = () => E.useContext(nf) || ef;
function Sn() {
  const l = E.useContext(nf);
  if (!l)
    throw new Error(
      "@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app"
    );
  return l;
}
function Ay({
  theme: l,
  children: o,
  inherit: s = !0
}) {
  const r = s1(), u = E.useMemo(
    () => r1(s ? r : ef, l),
    [l, r, s]
  );
  return /* @__PURE__ */ w.jsx(nf.Provider, { value: u, children: o });
}
Ay.displayName = "@mantine/core/MantineThemeProvider";
function c1() {
  const l = Sn(), o = Iu(), s = Mn(l.breakpoints).reduce((r, u) => {
    const f = l.breakpoints[u].includes("px"), d = fb(l.breakpoints[u]), p = f ? `${d - 0.1}px` : jh(d - 0.1), y = f ? `${d}px` : jh(d);
    return `${r}@media (max-width: ${p}) {.mantine-visible-from-${u} {display: none !important;}}@media (min-width: ${y}) {.mantine-hidden-from-${u} {display: none !important;}}`;
  }, "");
  return /* @__PURE__ */ w.jsx(
    "style",
    {
      "data-mantine-styles": "classes",
      nonce: o?.(),
      dangerouslySetInnerHTML: { __html: s }
    }
  );
}
function ju(l) {
  return Object.entries(l).map(([o, s]) => `${o}: ${s};`).join("");
}
function bi(l, o) {
  return (Array.isArray(l) ? l : [l]).reduce((r, u) => `${u}{${r}}`, o);
}
function u1(l, o) {
  const s = ju(l.variables), r = s ? bi(o, s) : "", u = ju(l.dark), f = ju(l.light), d = u ? bi(o === ":host" ? `${o}([data-mantine-color-scheme="dark"])` : `${o}[data-mantine-color-scheme="dark"]`, u) : "", p = f ? bi(o === ":host" ? `${o}([data-mantine-color-scheme="light"])` : `${o}[data-mantine-color-scheme="light"]`, f) : "";
  return `${r}${d}${p}`;
}
function Dy({ color: l, theme: o, autoContrast: s }) {
  return (typeof s == "boolean" ? s : o.autoContrast) && so({ color: l || o.primaryColor, theme: o }).isLight ? "var(--mantine-color-black)" : "var(--mantine-color-white)";
}
function Vh(l, o) {
  return Dy({
    color: l.colors[l.primaryColor][wi(l, o)],
    theme: l,
    autoContrast: null
  });
}
function qr({
  theme: l,
  color: o,
  colorScheme: s,
  name: r = o,
  withColorValues: u = !0
}) {
  if (!l.colors[o])
    return {};
  if (s === "light") {
    const p = wi(l, "light"), y = {
      [`--mantine-color-${r}-text`]: `var(--mantine-color-${r}-filled)`,
      [`--mantine-color-${r}-filled`]: `var(--mantine-color-${r}-${p})`,
      [`--mantine-color-${r}-filled-hover`]: `var(--mantine-color-${r}-${p === 9 ? 8 : p + 1})`,
      [`--mantine-color-${r}-light`]: Wa(l.colors[o][p], 0.1),
      [`--mantine-color-${r}-light-hover`]: Wa(l.colors[o][p], 0.12),
      [`--mantine-color-${r}-light-color`]: `var(--mantine-color-${r}-${p})`,
      [`--mantine-color-${r}-outline`]: `var(--mantine-color-${r}-${p})`,
      [`--mantine-color-${r}-outline-hover`]: Wa(l.colors[o][p], 0.05)
    };
    return u ? {
      [`--mantine-color-${r}-0`]: l.colors[o][0],
      [`--mantine-color-${r}-1`]: l.colors[o][1],
      [`--mantine-color-${r}-2`]: l.colors[o][2],
      [`--mantine-color-${r}-3`]: l.colors[o][3],
      [`--mantine-color-${r}-4`]: l.colors[o][4],
      [`--mantine-color-${r}-5`]: l.colors[o][5],
      [`--mantine-color-${r}-6`]: l.colors[o][6],
      [`--mantine-color-${r}-7`]: l.colors[o][7],
      [`--mantine-color-${r}-8`]: l.colors[o][8],
      [`--mantine-color-${r}-9`]: l.colors[o][9],
      ...y
    } : y;
  }
  const f = wi(l, "dark"), d = {
    [`--mantine-color-${r}-text`]: `var(--mantine-color-${r}-4)`,
    [`--mantine-color-${r}-filled`]: `var(--mantine-color-${r}-${f})`,
    [`--mantine-color-${r}-filled-hover`]: `var(--mantine-color-${r}-${f === 9 ? 8 : f + 1})`,
    [`--mantine-color-${r}-light`]: Wa(
      l.colors[o][Math.max(0, f - 2)],
      0.15
    ),
    [`--mantine-color-${r}-light-hover`]: Wa(
      l.colors[o][Math.max(0, f - 2)],
      0.2
    ),
    [`--mantine-color-${r}-light-color`]: `var(--mantine-color-${r}-${Math.max(f - 5, 0)})`,
    [`--mantine-color-${r}-outline`]: `var(--mantine-color-${r}-${Math.max(f - 4, 0)})`,
    [`--mantine-color-${r}-outline-hover`]: Wa(
      l.colors[o][Math.max(f - 4, 0)],
      0.05
    )
  };
  return u ? {
    [`--mantine-color-${r}-0`]: l.colors[o][0],
    [`--mantine-color-${r}-1`]: l.colors[o][1],
    [`--mantine-color-${r}-2`]: l.colors[o][2],
    [`--mantine-color-${r}-3`]: l.colors[o][3],
    [`--mantine-color-${r}-4`]: l.colors[o][4],
    [`--mantine-color-${r}-5`]: l.colors[o][5],
    [`--mantine-color-${r}-6`]: l.colors[o][6],
    [`--mantine-color-${r}-7`]: l.colors[o][7],
    [`--mantine-color-${r}-8`]: l.colors[o][8],
    [`--mantine-color-${r}-9`]: l.colors[o][9],
    ...d
  } : d;
}
function f1(l) {
  return !!l && typeof l == "object" && "mantine-virtual-color" in l;
}
function Fa(l, o, s) {
  Mn(o).forEach(
    (r) => Object.assign(l, { [`--mantine-${s}-${r}`]: o[r] })
  );
}
const Oy = (l) => {
  const o = wi(l, "light"), s = l.defaultRadius in l.radius ? l.radius[l.defaultRadius] : Q(l.defaultRadius), r = {
    variables: {
      "--mantine-scale": l.scale.toString(),
      "--mantine-cursor-type": l.cursorType,
      "--mantine-color-scheme": "light dark",
      "--mantine-webkit-font-smoothing": l.fontSmoothing ? "antialiased" : "unset",
      "--mantine-moz-font-smoothing": l.fontSmoothing ? "grayscale" : "unset",
      "--mantine-color-white": l.white,
      "--mantine-color-black": l.black,
      "--mantine-line-height": l.lineHeights.md,
      "--mantine-font-family": l.fontFamily,
      "--mantine-font-family-monospace": l.fontFamilyMonospace,
      "--mantine-font-family-headings": l.headings.fontFamily,
      "--mantine-heading-font-weight": l.headings.fontWeight,
      "--mantine-heading-text-wrap": l.headings.textWrap,
      "--mantine-radius-default": s,
      // Primary colors
      "--mantine-primary-color-filled": `var(--mantine-color-${l.primaryColor}-filled)`,
      "--mantine-primary-color-filled-hover": `var(--mantine-color-${l.primaryColor}-filled-hover)`,
      "--mantine-primary-color-light": `var(--mantine-color-${l.primaryColor}-light)`,
      "--mantine-primary-color-light-hover": `var(--mantine-color-${l.primaryColor}-light-hover)`,
      "--mantine-primary-color-light-color": `var(--mantine-color-${l.primaryColor}-light-color)`
    },
    light: {
      "--mantine-primary-color-contrast": Vh(l, "light"),
      "--mantine-color-bright": "var(--mantine-color-black)",
      "--mantine-color-text": l.black,
      "--mantine-color-body": l.white,
      "--mantine-color-error": "var(--mantine-color-red-6)",
      "--mantine-color-placeholder": "var(--mantine-color-gray-5)",
      "--mantine-color-anchor": `var(--mantine-color-${l.primaryColor}-${o})`,
      "--mantine-color-default": "var(--mantine-color-white)",
      "--mantine-color-default-hover": "var(--mantine-color-gray-0)",
      "--mantine-color-default-color": "var(--mantine-color-black)",
      "--mantine-color-default-border": "var(--mantine-color-gray-4)",
      "--mantine-color-dimmed": "var(--mantine-color-gray-6)"
    },
    dark: {
      "--mantine-primary-color-contrast": Vh(l, "dark"),
      "--mantine-color-bright": "var(--mantine-color-white)",
      "--mantine-color-text": "var(--mantine-color-dark-0)",
      "--mantine-color-body": "var(--mantine-color-dark-7)",
      "--mantine-color-error": "var(--mantine-color-red-8)",
      "--mantine-color-placeholder": "var(--mantine-color-dark-3)",
      "--mantine-color-anchor": `var(--mantine-color-${l.primaryColor}-4)`,
      "--mantine-color-default": "var(--mantine-color-dark-6)",
      "--mantine-color-default-hover": "var(--mantine-color-dark-5)",
      "--mantine-color-default-color": "var(--mantine-color-white)",
      "--mantine-color-default-border": "var(--mantine-color-dark-4)",
      "--mantine-color-dimmed": "var(--mantine-color-dark-2)"
    }
  };
  Fa(r.variables, l.breakpoints, "breakpoint"), Fa(r.variables, l.spacing, "spacing"), Fa(r.variables, l.fontSizes, "font-size"), Fa(r.variables, l.lineHeights, "line-height"), Fa(r.variables, l.shadows, "shadow"), Fa(r.variables, l.radius, "radius"), l.colors[l.primaryColor].forEach((f, d) => {
    r.variables[`--mantine-primary-color-${d}`] = `var(--mantine-color-${l.primaryColor}-${d})`;
  }), Mn(l.colors).forEach((f) => {
    const d = l.colors[f];
    if (f1(d)) {
      Object.assign(
        r.light,
        qr({
          theme: l,
          name: d.name,
          color: d.light,
          colorScheme: "light",
          withColorValues: !0
        })
      ), Object.assign(
        r.dark,
        qr({
          theme: l,
          name: d.name,
          color: d.dark,
          colorScheme: "dark",
          withColorValues: !0
        })
      );
      return;
    }
    d.forEach((p, y) => {
      r.variables[`--mantine-color-${f}-${y}`] = p;
    }), Object.assign(
      r.light,
      qr({
        theme: l,
        color: f,
        colorScheme: "light",
        withColorValues: !1
      })
    ), Object.assign(
      r.dark,
      qr({
        theme: l,
        color: f,
        colorScheme: "dark",
        withColorValues: !1
      })
    );
  });
  const u = l.headings.sizes;
  return Mn(u).forEach((f) => {
    r.variables[`--mantine-${f}-font-size`] = u[f].fontSize, r.variables[`--mantine-${f}-line-height`] = u[f].lineHeight, r.variables[`--mantine-${f}-font-weight`] = u[f].fontWeight || l.headings.fontWeight;
  }), r;
};
function d1({ theme: l, generator: o }) {
  const s = Oy(l), r = o?.(l);
  return r ? Wu(s, r) : s;
}
const Hu = Oy(ef);
function m1(l) {
  const o = {
    variables: {},
    light: {},
    dark: {}
  };
  return Mn(l.variables).forEach((s) => {
    Hu.variables[s] !== l.variables[s] && (o.variables[s] = l.variables[s]);
  }), Mn(l.light).forEach((s) => {
    Hu.light[s] !== l.light[s] && (o.light[s] = l.light[s]);
  }), Mn(l.dark).forEach((s) => {
    Hu.dark[s] !== l.dark[s] && (o.dark[s] = l.dark[s]);
  }), o;
}
function p1(l) {
  return `
  ${l}[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }
  ${l}[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }
`;
}
function _y({
  cssVariablesSelector: l,
  deduplicateCssVariables: o
}) {
  const s = Sn(), r = Iu(), u = kb(), f = d1({ theme: s, generator: u }), d = l === ":root" && o, p = d ? m1(f) : f, y = u1(p, l);
  return y ? /* @__PURE__ */ w.jsx(
    "style",
    {
      "data-mantine-styles": !0,
      nonce: r?.(),
      dangerouslySetInnerHTML: {
        __html: `${y}${d ? "" : p1(l)}`
      }
    }
  ) : null;
}
_y.displayName = "@mantine/CssVariables";
function h1() {
  const l = console.error;
  console.error = (...o) => {
    o.length > 1 && typeof o[0] == "string" && o[0].toLowerCase().includes("extra attributes from the server") && typeof o[1] == "string" && o[1].toLowerCase().includes("data-mantine-color-scheme") || l(...o);
  };
}
function Ia(l, o) {
  const s = typeof window < "u" && "matchMedia" in window && window.matchMedia("(prefers-color-scheme: dark)").matches, r = l !== "auto" ? l : s ? "dark" : "light";
  o()?.setAttribute("data-mantine-color-scheme", r);
}
function y1({
  manager: l,
  defaultColorScheme: o,
  getRootElement: s,
  forceColorScheme: r
}) {
  const u = E.useRef(), [f, d] = E.useState(() => l.get(o)), p = r || f, y = E.useCallback(
    (g) => {
      r || (Ia(g, s), d(g), l.set(g));
    },
    [l.set, p, r]
  ), h = E.useCallback(() => {
    d(o), Ia(o, s), l.clear();
  }, [l.clear, o]);
  return E.useEffect(() => (l.subscribe(y), l.unsubscribe), [l.subscribe, l.unsubscribe]), Ci(() => {
    Ia(l.get(o), s);
  }, []), E.useEffect(() => {
    if (r)
      return Ia(r, s), () => {
      };
    r === void 0 && Ia(f, s), typeof window < "u" && "matchMedia" in window && (u.current = window.matchMedia("(prefers-color-scheme: dark)"));
    const g = (S) => {
      f === "auto" && Ia(S.matches ? "dark" : "light", s);
    };
    return u.current?.addEventListener("change", g), () => u.current?.removeEventListener("change", g);
  }, [f, r]), { colorScheme: p, setColorScheme: y, clearColorScheme: h };
}
function v1({
  respectReducedMotion: l,
  getRootElement: o
}) {
  Ci(() => {
    l && o()?.setAttribute("data-respect-reduced-motion", "true");
  }, [l]);
}
h1();
function My({
  theme: l,
  children: o,
  getStyleNonce: s,
  withStaticClasses: r = !0,
  withGlobalClasses: u = !0,
  deduplicateCssVariables: f = !0,
  withCssVariables: d = !0,
  cssVariablesSelector: p = ":root",
  classNamesPrefix: y = "mantine",
  colorSchemeManager: h = o1(),
  defaultColorScheme: g = "light",
  getRootElement: S = () => document.documentElement,
  cssVariablesResolver: b,
  forceColorScheme: x,
  stylesTransform: R
}) {
  const { colorScheme: _, setColorScheme: M, clearColorScheme: j } = y1({
    defaultColorScheme: g,
    forceColorScheme: x,
    manager: h,
    getRootElement: S
  });
  return v1({
    respectReducedMotion: l?.respectReducedMotion || !1,
    getRootElement: S
  }), /* @__PURE__ */ w.jsx(
    Ry.Provider,
    {
      value: {
        colorScheme: _,
        setColorScheme: M,
        clearColorScheme: j,
        getRootElement: S,
        classNamesPrefix: y,
        getStyleNonce: s,
        cssVariablesResolver: b,
        cssVariablesSelector: p,
        withStaticClasses: r,
        stylesTransform: R
      },
      children: /* @__PURE__ */ w.jsxs(Ay, { theme: l, children: [
        d && /* @__PURE__ */ w.jsx(
          _y,
          {
            cssVariablesSelector: p,
            deduplicateCssVariables: f
          }
        ),
        u && /* @__PURE__ */ w.jsx(c1, {}),
        o
      ] })
    }
  );
}
My.displayName = "@mantine/core/MantineProvider";
function os({
  classNames: l,
  styles: o,
  props: s,
  stylesCtx: r
}) {
  const u = Sn();
  return {
    resolvedClassNames: as({
      theme: u,
      classNames: l,
      props: s,
      stylesCtx: r || void 0
    }),
    resolvedStyles: Wr({
      theme: u,
      styles: o,
      props: s,
      stylesCtx: r || void 0
    })
  };
}
const g1 = {
  always: "mantine-focus-always",
  auto: "mantine-focus-auto",
  never: "mantine-focus-never"
};
function b1({ theme: l, options: o, unstyled: s }) {
  return el(
    o?.focusable && !s && (l.focusClassName || g1[l.focusRing]),
    o?.active && !s && l.activeClassName
  );
}
function S1({
  selector: l,
  stylesCtx: o,
  options: s,
  props: r,
  theme: u
}) {
  return as({
    theme: u,
    classNames: s?.classNames,
    props: s?.props || r,
    stylesCtx: o
  })[l];
}
function Gh({
  selector: l,
  stylesCtx: o,
  theme: s,
  classNames: r,
  props: u
}) {
  return as({ theme: s, classNames: r, props: u, stylesCtx: o })[l];
}
function x1({ rootSelector: l, selector: o, className: s }) {
  return l === o ? s : void 0;
}
function w1({ selector: l, classes: o, unstyled: s }) {
  return s ? void 0 : o[l];
}
function T1({
  themeName: l,
  classNamesPrefix: o,
  selector: s,
  withStaticClass: r
}) {
  return r === !1 ? [] : l.map((u) => `${o}-${u}-${s}`);
}
function E1({
  themeName: l,
  theme: o,
  selector: s,
  props: r,
  stylesCtx: u
}) {
  return l.map(
    (f) => as({
      theme: o,
      classNames: o.components[f]?.classNames,
      props: r,
      stylesCtx: u
    })?.[s]
  );
}
function C1({
  options: l,
  classes: o,
  selector: s,
  unstyled: r
}) {
  return l?.variant && !r ? o[`${s}--${l.variant}`] : void 0;
}
function R1({
  theme: l,
  options: o,
  themeName: s,
  selector: r,
  classNamesPrefix: u,
  classNames: f,
  classes: d,
  unstyled: p,
  className: y,
  rootSelector: h,
  props: g,
  stylesCtx: S,
  withStaticClasses: b,
  headless: x,
  transformedStyles: R
}) {
  return el(
    b1({ theme: l, options: o, unstyled: p || x }),
    E1({ theme: l, themeName: s, selector: r, props: g, stylesCtx: S }),
    C1({ options: o, classes: d, selector: r, unstyled: p }),
    Gh({ selector: r, stylesCtx: S, theme: l, classNames: f, props: g }),
    Gh({ selector: r, stylesCtx: S, theme: l, classNames: R, props: g }),
    S1({ selector: r, stylesCtx: S, options: o, props: g, theme: l }),
    x1({ rootSelector: h, selector: r, className: y }),
    w1({ selector: r, classes: d, unstyled: p || x }),
    b && !x && T1({
      themeName: s,
      classNamesPrefix: u,
      selector: r,
      withStaticClass: o?.withStaticClass
    }),
    o?.className
  );
}
function A1({
  theme: l,
  themeName: o,
  props: s,
  stylesCtx: r,
  selector: u
}) {
  return o.map(
    (f) => Wr({
      theme: l,
      styles: l.components[f]?.styles,
      props: s,
      stylesCtx: r
    })[u]
  ).reduce((f, d) => ({ ...f, ...d }), {});
}
function qu({ style: l, theme: o }) {
  return Array.isArray(l) ? [...l].reduce(
    (s, r) => ({ ...s, ...qu({ style: r, theme: o }) }),
    {}
  ) : typeof l == "function" ? l(o) : l ?? {};
}
function D1(l) {
  return l.reduce((o, s) => (s && Object.keys(s).forEach((r) => {
    o[r] = { ...o[r], ...ns(s[r]) };
  }), o), {});
}
function O1({
  vars: l,
  varsResolver: o,
  theme: s,
  props: r,
  stylesCtx: u,
  selector: f,
  themeName: d,
  headless: p
}) {
  return D1([
    p ? {} : o?.(s, r, u),
    ...d.map((y) => s.components?.[y]?.vars?.(s, r, u)),
    l?.(s, r, u)
  ])?.[f];
}
function _1({
  theme: l,
  themeName: o,
  selector: s,
  options: r,
  props: u,
  stylesCtx: f,
  rootSelector: d,
  styles: p,
  style: y,
  vars: h,
  varsResolver: g,
  headless: S,
  withStylesTransform: b
}) {
  return {
    ...!b && A1({ theme: l, themeName: o, props: u, stylesCtx: f, selector: s }),
    ...!b && Wr({ theme: l, styles: p, props: u, stylesCtx: f })[s],
    ...!b && Wr({ theme: l, styles: r?.styles, props: r?.props || u, stylesCtx: f })[s],
    ...O1({ theme: l, props: u, stylesCtx: f, vars: h, varsResolver: g, selector: s, themeName: o, headless: S }),
    ...d === s ? qu({ style: y, theme: l }) : null,
    ...qu({ style: r?.style, theme: l })
  };
}
function M1({ props: l, stylesCtx: o, themeName: s }) {
  const r = Sn(), u = Pb()?.();
  return {
    getTransformedStyles: (d) => u ? [
      ...d.map(
        (y) => u(y, { props: l, theme: r, ctx: o })
      ),
      ...s.map(
        (y) => u(r.components[y]?.styles, { props: l, theme: r, ctx: o })
      )
    ].filter(Boolean) : [],
    withStylesTransform: !!u
  };
}
function Ht({
  name: l,
  classes: o,
  props: s,
  stylesCtx: r,
  className: u,
  style: f,
  rootSelector: d = "root",
  unstyled: p,
  classNames: y,
  styles: h,
  vars: g,
  varsResolver: S
}) {
  const b = Sn(), x = Qb(), R = Zb(), _ = Kb(), M = (Array.isArray(l) ? l : [l]).filter((H) => H), { withStylesTransform: j, getTransformedStyles: B } = M1({
    props: s,
    stylesCtx: r,
    themeName: M
  });
  return (H, $) => ({
    className: R1({
      theme: b,
      options: $,
      themeName: M,
      selector: H,
      classNamesPrefix: x,
      classNames: y,
      classes: o,
      unstyled: p,
      className: u,
      rootSelector: d,
      props: s,
      stylesCtx: r,
      withStaticClasses: R,
      headless: _,
      transformedStyles: B([$?.styles, h])
    }),
    style: _1({
      theme: b,
      themeName: M,
      selector: H,
      options: $,
      props: s,
      stylesCtx: r,
      rootSelector: d,
      styles: h,
      style: f,
      vars: g,
      varsResolver: S,
      headless: _,
      withStylesTransform: j
    })
  });
}
function st(l, o, s) {
  const r = Sn(), u = r.components[l]?.defaultProps, f = typeof u == "function" ? u(r) : u;
  return { ...o, ...f, ...ns(s) };
}
function Uu(l) {
  return Mn(l).reduce(
    (o, s) => l[s] !== void 0 ? `${o}${cb(s)}:${l[s]};` : o,
    ""
  ).trim();
}
function z1({ selector: l, styles: o, media: s, container: r }) {
  const u = o ? Uu(o) : "", f = Array.isArray(s) ? s.map((p) => `@media${p.query}{${l}{${Uu(p.styles)}}}`) : [], d = Array.isArray(r) ? r.map(
    (p) => `@container ${p.query}{${l}{${Uu(p.styles)}}}`
  ) : [];
  return `${u ? `${l}{${u}}` : ""}${f.join("")}${d.join("")}`.trim();
}
function zy(l) {
  const o = Iu();
  return /* @__PURE__ */ w.jsx(
    "style",
    {
      "data-mantine-styles": "inline",
      nonce: o?.(),
      dangerouslySetInnerHTML: { __html: z1(l) }
    }
  );
}
function Ri(l) {
  const {
    m: o,
    mx: s,
    my: r,
    mt: u,
    mb: f,
    ml: d,
    mr: p,
    me: y,
    ms: h,
    p: g,
    px: S,
    py: b,
    pt: x,
    pb: R,
    pl: _,
    pr: M,
    pe: j,
    ps: B,
    bd: H,
    bg: $,
    c: q,
    opacity: k,
    ff: W,
    fz: J,
    fw: Z,
    lts: P,
    ta: it,
    lh: ct,
    fs: dt,
    tt: ot,
    td: ft,
    w: U,
    miw: F,
    maw: V,
    h: et,
    mih: C,
    mah: G,
    bgsz: lt,
    bgp: nt,
    bgr: I,
    bga: ht,
    pos: tt,
    top: Nt,
    left: bt,
    bottom: zt,
    right: Ot,
    inset: ae,
    display: ze,
    flex: be,
    hiddenFrom: Ve,
    visibleFrom: Ne,
    lightHidden: fe,
    darkHidden: Vt,
    sx: Ge,
    ...It
  } = l;
  return { styleProps: ns({
    m: o,
    mx: s,
    my: r,
    mt: u,
    mb: f,
    ml: d,
    mr: p,
    me: y,
    ms: h,
    p: g,
    px: S,
    py: b,
    pt: x,
    pb: R,
    pl: _,
    pr: M,
    pe: j,
    ps: B,
    bd: H,
    bg: $,
    c: q,
    opacity: k,
    ff: W,
    fz: J,
    fw: Z,
    lts: P,
    ta: it,
    lh: ct,
    fs: dt,
    tt: ot,
    td: ft,
    w: U,
    miw: F,
    maw: V,
    h: et,
    mih: C,
    mah: G,
    bgsz: lt,
    bgp: nt,
    bgr: I,
    bga: ht,
    pos: tt,
    top: Nt,
    left: bt,
    bottom: zt,
    right: Ot,
    inset: ae,
    display: ze,
    flex: be,
    hiddenFrom: Ve,
    visibleFrom: Ne,
    lightHidden: fe,
    darkHidden: Vt,
    sx: Ge
  }), rest: It };
}
const N1 = {
  m: { type: "spacing", property: "margin" },
  mt: { type: "spacing", property: "marginTop" },
  mb: { type: "spacing", property: "marginBottom" },
  ml: { type: "spacing", property: "marginLeft" },
  mr: { type: "spacing", property: "marginRight" },
  ms: { type: "spacing", property: "marginInlineStart" },
  me: { type: "spacing", property: "marginInlineEnd" },
  mx: { type: "spacing", property: "marginInline" },
  my: { type: "spacing", property: "marginBlock" },
  p: { type: "spacing", property: "padding" },
  pt: { type: "spacing", property: "paddingTop" },
  pb: { type: "spacing", property: "paddingBottom" },
  pl: { type: "spacing", property: "paddingLeft" },
  pr: { type: "spacing", property: "paddingRight" },
  ps: { type: "spacing", property: "paddingInlineStart" },
  pe: { type: "spacing", property: "paddingInlineEnd" },
  px: { type: "spacing", property: "paddingInline" },
  py: { type: "spacing", property: "paddingBlock" },
  bd: { type: "border", property: "border" },
  bg: { type: "color", property: "background" },
  c: { type: "textColor", property: "color" },
  opacity: { type: "identity", property: "opacity" },
  ff: { type: "fontFamily", property: "fontFamily" },
  fz: { type: "fontSize", property: "fontSize" },
  fw: { type: "identity", property: "fontWeight" },
  lts: { type: "size", property: "letterSpacing" },
  ta: { type: "identity", property: "textAlign" },
  lh: { type: "lineHeight", property: "lineHeight" },
  fs: { type: "identity", property: "fontStyle" },
  tt: { type: "identity", property: "textTransform" },
  td: { type: "identity", property: "textDecoration" },
  w: { type: "spacing", property: "width" },
  miw: { type: "spacing", property: "minWidth" },
  maw: { type: "spacing", property: "maxWidth" },
  h: { type: "spacing", property: "height" },
  mih: { type: "spacing", property: "minHeight" },
  mah: { type: "spacing", property: "maxHeight" },
  bgsz: { type: "size", property: "backgroundSize" },
  bgp: { type: "identity", property: "backgroundPosition" },
  bgr: { type: "identity", property: "backgroundRepeat" },
  bga: { type: "identity", property: "backgroundAttachment" },
  pos: { type: "identity", property: "position" },
  top: { type: "size", property: "top" },
  left: { type: "size", property: "left" },
  bottom: { type: "size", property: "bottom" },
  right: { type: "size", property: "right" },
  inset: { type: "size", property: "inset" },
  display: { type: "identity", property: "display" },
  flex: { type: "identity", property: "flex" }
};
function lf(l, o) {
  const s = so({ color: l, theme: o });
  return s.color === "dimmed" ? "var(--mantine-color-dimmed)" : s.color === "bright" ? "var(--mantine-color-bright)" : s.variable ? `var(${s.variable})` : s.color;
}
function j1(l, o) {
  const s = so({ color: l, theme: o });
  return s.isThemeColor && s.shade === void 0 ? `var(--mantine-color-${s.color}-text)` : lf(l, o);
}
function H1(l, o) {
  if (typeof l == "number")
    return Q(l);
  if (typeof l == "string") {
    const [s, r, ...u] = l.split(" ").filter((d) => d.trim() !== "");
    let f = `${Q(s)}`;
    return r && (f += ` ${r}`), u.length > 0 && (f += ` ${lf(u.join(" "), o)}`), f.trim();
  }
  return l;
}
const Xh = {
  text: "var(--mantine-font-family)",
  mono: "var(--mantine-font-family-monospace)",
  monospace: "var(--mantine-font-family-monospace)",
  heading: "var(--mantine-font-family-headings)",
  headings: "var(--mantine-font-family-headings)"
};
function U1(l) {
  return typeof l == "string" && l in Xh ? Xh[l] : l;
}
const $1 = ["h1", "h2", "h3", "h4", "h5", "h6"];
function B1(l, o) {
  return typeof l == "string" && l in o.fontSizes ? `var(--mantine-font-size-${l})` : typeof l == "string" && $1.includes(l) ? `var(--mantine-${l}-font-size)` : typeof l == "number" || typeof l == "string" ? Q(l) : l;
}
function L1(l) {
  return l;
}
const Y1 = ["h1", "h2", "h3", "h4", "h5", "h6"];
function q1(l, o) {
  return typeof l == "string" && l in o.lineHeights ? `var(--mantine-line-height-${l})` : typeof l == "string" && Y1.includes(l) ? `var(--mantine-${l}-line-height)` : l;
}
function V1(l) {
  return typeof l == "number" ? Q(l) : l;
}
function G1(l, o) {
  if (typeof l == "number")
    return Q(l);
  if (typeof l == "string") {
    const s = l.replace("-", "");
    if (!(s in o.spacing))
      return Q(l);
    const r = `--mantine-spacing-${s}`;
    return l.startsWith("-") ? `calc(var(${r}) * -1)` : `var(${r})`;
  }
  return l;
}
const $u = {
  color: lf,
  textColor: j1,
  fontSize: B1,
  spacing: G1,
  identity: L1,
  size: V1,
  lineHeight: q1,
  fontFamily: U1,
  border: H1
};
function kh(l) {
  return l.replace("(min-width: ", "").replace("em)", "");
}
function X1({
  media: l,
  ...o
}) {
  const r = Object.keys(l).sort((u, f) => Number(kh(u)) - Number(kh(f))).map((u) => ({ query: u, styles: l[u] }));
  return { ...o, media: r };
}
function k1(l) {
  if (typeof l != "object" || l === null)
    return !1;
  const o = Object.keys(l);
  return !(o.length === 1 && o[0] === "base");
}
function Q1(l) {
  return typeof l == "object" && l !== null ? "base" in l ? l.base : void 0 : l;
}
function Z1(l) {
  return typeof l == "object" && l !== null ? Mn(l).filter((o) => o !== "base") : [];
}
function K1(l, o) {
  return typeof l == "object" && l !== null && o in l ? l[o] : l;
}
function Ny({
  styleProps: l,
  data: o,
  theme: s
}) {
  return X1(
    Mn(l).reduce(
      (r, u) => {
        if (u === "hiddenFrom" || u === "visibleFrom" || u === "sx")
          return r;
        const f = o[u], d = Array.isArray(f.property) ? f.property : [f.property], p = Q1(l[u]);
        if (!k1(l[u]))
          return d.forEach((h) => {
            r.inlineStyles[h] = $u[f.type](p, s);
          }), r;
        r.hasResponsiveStyles = !0;
        const y = Z1(l[u]);
        return d.forEach((h) => {
          p && (r.styles[h] = $u[f.type](p, s)), y.forEach((g) => {
            const S = `(min-width: ${s.breakpoints[g]})`;
            r.media[S] = {
              ...r.media[S],
              [h]: $u[f.type](
                K1(l[u], g),
                s
              )
            };
          });
        }), r;
      },
      {
        hasResponsiveStyles: !1,
        styles: {},
        inlineStyles: {},
        media: {}
      }
    )
  );
}
function jy() {
  return `__m__-${E.useId().replace(/:/g, "")}`;
}
function Hy(l) {
  return l.startsWith("data-") ? l : `data-${l}`;
}
function J1(l) {
  return Object.keys(l).reduce((o, s) => {
    const r = l[s];
    return r === void 0 || r === "" || r === !1 || r === null || (o[Hy(s)] = l[s]), o;
  }, {});
}
function Uy(l) {
  return l ? typeof l == "string" ? { [Hy(l)]: !0 } : Array.isArray(l) ? [...l].reduce(
    (o, s) => ({ ...o, ...Uy(s) }),
    {}
  ) : J1(l) : null;
}
function Vu(l, o) {
  return Array.isArray(l) ? [...l].reduce(
    (s, r) => ({ ...s, ...Vu(r, o) }),
    {}
  ) : typeof l == "function" ? l(o) : l ?? {};
}
function P1({
  theme: l,
  style: o,
  vars: s,
  styleProps: r
}) {
  const u = Vu(o, l), f = Vu(s, l);
  return { ...u, ...f, ...r };
}
const $y = E.forwardRef(
  ({
    component: l,
    style: o,
    __vars: s,
    className: r,
    variant: u,
    mod: f,
    size: d,
    hiddenFrom: p,
    visibleFrom: y,
    lightHidden: h,
    darkHidden: g,
    renderRoot: S,
    __size: b,
    ...x
  }, R) => {
    const _ = Sn(), M = l || "div", { styleProps: j, rest: B } = Ri(x), $ = Jb()?.()?.(j.sx), q = jy(), k = Ny({
      styleProps: j,
      theme: _,
      data: N1
    }), W = {
      ref: R,
      style: P1({
        theme: _,
        style: o,
        vars: s,
        styleProps: k.inlineStyles
      }),
      className: el(r, $, {
        [q]: k.hasResponsiveStyles,
        "mantine-light-hidden": h,
        "mantine-dark-hidden": g,
        [`mantine-hidden-from-${p}`]: p,
        [`mantine-visible-from-${y}`]: y
      }),
      "data-variant": u,
      "data-size": by(d) ? void 0 : d || void 0,
      size: b,
      ...Uy(f),
      ...B
    };
    return /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
      k.hasResponsiveStyles && /* @__PURE__ */ w.jsx(
        zy,
        {
          selector: `.${q}`,
          styles: k.styles,
          media: k.media
        }
      ),
      typeof S == "function" ? S(W) : /* @__PURE__ */ w.jsx(M, { ...W })
    ] });
  }
);
$y.displayName = "@mantine/core/Box";
const pt = $y;
function By(l) {
  return l;
}
function Tt(l) {
  const o = E.forwardRef(l);
  return o.extend = By, o.withProps = (s) => {
    const r = E.forwardRef((u, f) => /* @__PURE__ */ w.jsx(o, { ...s, ...u, ref: f }));
    return r.extend = o.extend, r.displayName = `WithProps(${o.displayName})`, r;
  }, o;
}
function Ol(l) {
  const o = E.forwardRef(l);
  return o.withProps = (s) => {
    const r = E.forwardRef((u, f) => /* @__PURE__ */ w.jsx(o, { ...s, ...u, ref: f }));
    return r.extend = o.extend, r.displayName = `WithProps(${o.displayName})`, r;
  }, o.extend = By, o;
}
const W1 = E.createContext({
  dir: "ltr",
  toggleDirection: () => {
  },
  setDirection: () => {
  }
});
function is() {
  return E.useContext(W1);
}
var af = vy();
const F1 = /* @__PURE__ */ yy(af), [I1, an] = io(
  "ScrollArea.Root component was not found in tree"
);
function eo(l, o) {
  const s = na(o);
  Ci(() => {
    let r = 0;
    if (l) {
      const u = new ResizeObserver(() => {
        cancelAnimationFrame(r), r = window.requestAnimationFrame(s);
      });
      return u.observe(l), () => {
        window.cancelAnimationFrame(r), u.unobserve(l);
      };
    }
  }, [l, s]);
}
const tS = E.forwardRef((l, o) => {
  const { style: s, ...r } = l, u = an(), [f, d] = E.useState(0), [p, y] = E.useState(0), h = !!(f && p);
  return eo(u.scrollbarX, () => {
    const g = u.scrollbarX?.offsetHeight || 0;
    u.onCornerHeightChange(g), y(g);
  }), eo(u.scrollbarY, () => {
    const g = u.scrollbarY?.offsetWidth || 0;
    u.onCornerWidthChange(g), d(g);
  }), h ? /* @__PURE__ */ w.jsx("div", { ...r, ref: o, style: { ...s, width: f, height: p } }) : null;
}), eS = E.forwardRef((l, o) => {
  const s = an(), r = !!(s.scrollbarX && s.scrollbarY);
  return s.type !== "scroll" && r ? /* @__PURE__ */ w.jsx(tS, { ...l, ref: o }) : null;
}), nS = {
  scrollHideDelay: 1e3,
  type: "hover"
}, Ly = E.forwardRef((l, o) => {
  const s = st("ScrollAreaRoot", nS, l), { type: r, scrollHideDelay: u, scrollbars: f, ...d } = s, [p, y] = E.useState(null), [h, g] = E.useState(null), [S, b] = E.useState(null), [x, R] = E.useState(null), [_, M] = E.useState(null), [j, B] = E.useState(0), [H, $] = E.useState(0), [q, k] = E.useState(!1), [W, J] = E.useState(!1), Z = ue(o, (P) => y(P));
  return /* @__PURE__ */ w.jsx(
    I1,
    {
      value: {
        type: r,
        scrollHideDelay: u,
        scrollArea: p,
        viewport: h,
        onViewportChange: g,
        content: S,
        onContentChange: b,
        scrollbarX: x,
        onScrollbarXChange: R,
        scrollbarXEnabled: q,
        onScrollbarXEnabledChange: k,
        scrollbarY: _,
        onScrollbarYChange: M,
        scrollbarYEnabled: W,
        onScrollbarYEnabledChange: J,
        onCornerWidthChange: B,
        onCornerHeightChange: $
      },
      children: /* @__PURE__ */ w.jsx(
        pt,
        {
          ...d,
          ref: Z,
          __vars: {
            "--sa-corner-width": f !== "xy" ? "0px" : `${j}px`,
            "--sa-corner-height": f !== "xy" ? "0px" : `${H}px`
          }
        }
      )
    }
  );
});
Ly.displayName = "@mantine/core/ScrollAreaRoot";
function Yy(l, o) {
  const s = l / o;
  return Number.isNaN(s) ? 0 : s;
}
function rs(l) {
  const o = Yy(l.viewport, l.content), s = l.scrollbar.paddingStart + l.scrollbar.paddingEnd, r = (l.scrollbar.size - s) * o;
  return Math.max(r, 18);
}
function qy(l, o) {
  return (s) => {
    if (l[0] === l[1] || o[0] === o[1])
      return o[0];
    const r = (o[1] - o[0]) / (l[1] - l[0]);
    return o[0] + r * (s - l[0]);
  };
}
function lS(l, [o, s]) {
  return Math.min(s, Math.max(o, l));
}
function Qh(l, o, s = "ltr") {
  const r = rs(o), u = o.scrollbar.paddingStart + o.scrollbar.paddingEnd, f = o.scrollbar.size - u, d = o.content - o.viewport, p = f - r, y = s === "ltr" ? [0, d] : [d * -1, 0], h = lS(l, y);
  return qy([0, d], [0, p])(h);
}
function aS(l, o, s, r = "ltr") {
  const u = rs(s), f = u / 2, d = o || f, p = u - d, y = s.scrollbar.paddingStart + d, h = s.scrollbar.size - s.scrollbar.paddingEnd - p, g = s.content - s.viewport, S = r === "ltr" ? [0, g] : [g * -1, 0];
  return qy([y, h], S)(l);
}
function Vy(l, o) {
  return l > 0 && l < o;
}
function Fr(l) {
  return l ? parseInt(l, 10) : 0;
}
function aa(l, o, { checkForDefaultPrevented: s = !0 } = {}) {
  return (r) => {
    l?.(r), (s === !1 || !r.defaultPrevented) && o?.(r);
  };
}
const [oS, Gy] = io(
  "ScrollAreaScrollbar was not found in tree"
), Xy = E.forwardRef((l, o) => {
  const {
    sizes: s,
    hasThumb: r,
    onThumbChange: u,
    onThumbPointerUp: f,
    onThumbPointerDown: d,
    onThumbPositionChange: p,
    onDragScroll: y,
    onWheelScroll: h,
    onResize: g,
    ...S
  } = l, b = an(), [x, R] = E.useState(null), _ = ue(o, (J) => R(J)), M = E.useRef(null), j = E.useRef(""), { viewport: B } = b, H = s.content - s.viewport, $ = na(h), q = na(p), k = ls(g, 10), W = (J) => {
    if (M.current) {
      const Z = J.clientX - M.current.left, P = J.clientY - M.current.top;
      y({ x: Z, y: P });
    }
  };
  return E.useEffect(() => {
    const J = (Z) => {
      const P = Z.target;
      x?.contains(P) && $(Z, H);
    };
    return document.addEventListener("wheel", J, { passive: !1 }), () => document.removeEventListener("wheel", J, { passive: !1 });
  }, [B, x, H, $]), E.useEffect(q, [s, q]), eo(x, k), eo(b.content, k), /* @__PURE__ */ w.jsx(
    oS,
    {
      value: {
        scrollbar: x,
        hasThumb: r,
        onThumbChange: na(u),
        onThumbPointerUp: na(f),
        onThumbPositionChange: q,
        onThumbPointerDown: na(d)
      },
      children: /* @__PURE__ */ w.jsx(
        "div",
        {
          ...S,
          ref: _,
          "data-mantine-scrollbar": !0,
          style: { position: "absolute", ...S.style },
          onPointerDown: aa(l.onPointerDown, (J) => {
            J.preventDefault(), J.button === 0 && (J.target.setPointerCapture(J.pointerId), M.current = x.getBoundingClientRect(), j.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", W(J));
          }),
          onPointerMove: aa(l.onPointerMove, W),
          onPointerUp: aa(l.onPointerUp, (J) => {
            J.preventDefault();
            const Z = J.target;
            Z.hasPointerCapture(J.pointerId) && Z.releasePointerCapture(J.pointerId), document.body.style.webkitUserSelect = j.current, M.current = null;
          })
        }
      )
    }
  );
}), ky = E.forwardRef(
  (l, o) => {
    const { sizes: s, onSizesChange: r, style: u, ...f } = l, d = an(), [p, y] = E.useState(), h = E.useRef(null), g = ue(o, h, d.onScrollbarXChange);
    return E.useEffect(() => {
      h.current && y(getComputedStyle(h.current));
    }, [h]), /* @__PURE__ */ w.jsx(
      Xy,
      {
        "data-orientation": "horizontal",
        ...f,
        ref: g,
        sizes: s,
        style: {
          ...u,
          "--sa-thumb-width": `${rs(s)}px`
        },
        onThumbPointerDown: (S) => l.onThumbPointerDown(S.x),
        onDragScroll: (S) => l.onDragScroll(S.x),
        onWheelScroll: (S, b) => {
          if (d.viewport) {
            const x = d.viewport.scrollLeft + S.deltaX;
            l.onWheelScroll(x), Vy(x, b) && S.preventDefault();
          }
        },
        onResize: () => {
          h.current && d.viewport && p && r({
            content: d.viewport.scrollWidth,
            viewport: d.viewport.offsetWidth,
            scrollbar: {
              size: h.current.clientWidth,
              paddingStart: Fr(p.paddingLeft),
              paddingEnd: Fr(p.paddingRight)
            }
          });
        }
      }
    );
  }
);
ky.displayName = "@mantine/core/ScrollAreaScrollbarX";
const Qy = E.forwardRef(
  (l, o) => {
    const { sizes: s, onSizesChange: r, style: u, ...f } = l, d = an(), [p, y] = E.useState(), h = E.useRef(null), g = ue(o, h, d.onScrollbarYChange);
    return E.useEffect(() => {
      h.current && y(window.getComputedStyle(h.current));
    }, []), /* @__PURE__ */ w.jsx(
      Xy,
      {
        ...f,
        "data-orientation": "vertical",
        ref: g,
        sizes: s,
        style: {
          "--sa-thumb-height": `${rs(s)}px`,
          ...u
        },
        onThumbPointerDown: (S) => l.onThumbPointerDown(S.y),
        onDragScroll: (S) => l.onDragScroll(S.y),
        onWheelScroll: (S, b) => {
          if (d.viewport) {
            const x = d.viewport.scrollTop + S.deltaY;
            l.onWheelScroll(x), Vy(x, b) && S.preventDefault();
          }
        },
        onResize: () => {
          h.current && d.viewport && p && r({
            content: d.viewport.scrollHeight,
            viewport: d.viewport.offsetHeight,
            scrollbar: {
              size: h.current.clientHeight,
              paddingStart: Fr(p.paddingTop),
              paddingEnd: Fr(p.paddingBottom)
            }
          });
        }
      }
    );
  }
);
Qy.displayName = "@mantine/core/ScrollAreaScrollbarY";
const ss = E.forwardRef((l, o) => {
  const { orientation: s = "vertical", ...r } = l, { dir: u } = is(), f = an(), d = E.useRef(null), p = E.useRef(0), [y, h] = E.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), g = Yy(y.viewport, y.content), S = {
    ...r,
    sizes: y,
    onSizesChange: h,
    hasThumb: g > 0 && g < 1,
    onThumbChange: (x) => {
      d.current = x;
    },
    onThumbPointerUp: () => {
      p.current = 0;
    },
    onThumbPointerDown: (x) => {
      p.current = x;
    }
  }, b = (x, R) => aS(x, p.current, y, R);
  return s === "horizontal" ? /* @__PURE__ */ w.jsx(
    ky,
    {
      ...S,
      ref: o,
      onThumbPositionChange: () => {
        if (f.viewport && d.current) {
          const x = f.viewport.scrollLeft, R = Qh(x, y, u);
          d.current.style.transform = `translate3d(${R}px, 0, 0)`;
        }
      },
      onWheelScroll: (x) => {
        f.viewport && (f.viewport.scrollLeft = x);
      },
      onDragScroll: (x) => {
        f.viewport && (f.viewport.scrollLeft = b(x, u));
      }
    }
  ) : s === "vertical" ? /* @__PURE__ */ w.jsx(
    Qy,
    {
      ...S,
      ref: o,
      onThumbPositionChange: () => {
        if (f.viewport && d.current) {
          const x = f.viewport.scrollTop, R = Qh(x, y);
          y.scrollbar.size === 0 ? d.current.style.opacity = "0" : d.current.style.opacity = "1", d.current.style.transform = `translate3d(0, ${R}px, 0)`;
        }
      },
      onWheelScroll: (x) => {
        f.viewport && (f.viewport.scrollTop = x);
      },
      onDragScroll: (x) => {
        f.viewport && (f.viewport.scrollTop = b(x));
      }
    }
  ) : null;
});
ss.displayName = "@mantine/core/ScrollAreaScrollbarVisible";
const of = E.forwardRef(
  (l, o) => {
    const s = an(), { forceMount: r, ...u } = l, [f, d] = E.useState(!1), p = l.orientation === "horizontal", y = ls(() => {
      if (s.viewport) {
        const h = s.viewport.offsetWidth < s.viewport.scrollWidth, g = s.viewport.offsetHeight < s.viewport.scrollHeight;
        d(p ? h : g);
      }
    }, 10);
    return eo(s.viewport, y), eo(s.content, y), r || f ? /* @__PURE__ */ w.jsx(
      ss,
      {
        "data-state": f ? "visible" : "hidden",
        ...u,
        ref: o
      }
    ) : null;
  }
);
of.displayName = "@mantine/core/ScrollAreaScrollbarAuto";
const Zy = E.forwardRef(
  (l, o) => {
    const { forceMount: s, ...r } = l, u = an(), [f, d] = E.useState(!1);
    return E.useEffect(() => {
      const { scrollArea: p } = u;
      let y = 0;
      if (p) {
        const h = () => {
          window.clearTimeout(y), d(!0);
        }, g = () => {
          y = window.setTimeout(() => d(!1), u.scrollHideDelay);
        };
        return p.addEventListener("pointerenter", h), p.addEventListener("pointerleave", g), () => {
          window.clearTimeout(y), p.removeEventListener("pointerenter", h), p.removeEventListener("pointerleave", g);
        };
      }
    }, [u.scrollArea, u.scrollHideDelay]), s || f ? /* @__PURE__ */ w.jsx(
      of,
      {
        "data-state": f ? "visible" : "hidden",
        ...r,
        ref: o
      }
    ) : null;
  }
);
Zy.displayName = "@mantine/core/ScrollAreaScrollbarHover";
const iS = E.forwardRef(
  (l, o) => {
    const { forceMount: s, ...r } = l, u = an(), f = l.orientation === "horizontal", [d, p] = E.useState("hidden"), y = ls(() => p("idle"), 100);
    return E.useEffect(() => {
      if (d === "idle") {
        const h = window.setTimeout(() => p("hidden"), u.scrollHideDelay);
        return () => window.clearTimeout(h);
      }
    }, [d, u.scrollHideDelay]), E.useEffect(() => {
      const { viewport: h } = u, g = f ? "scrollLeft" : "scrollTop";
      if (h) {
        let S = h[g];
        const b = () => {
          const x = h[g];
          S !== x && (p("scrolling"), y()), S = x;
        };
        return h.addEventListener("scroll", b), () => h.removeEventListener("scroll", b);
      }
    }, [u.viewport, f, y]), s || d !== "hidden" ? /* @__PURE__ */ w.jsx(
      ss,
      {
        "data-state": d === "hidden" ? "hidden" : "visible",
        ...r,
        ref: o,
        onPointerEnter: aa(l.onPointerEnter, () => p("interacting")),
        onPointerLeave: aa(l.onPointerLeave, () => p("idle"))
      }
    ) : null;
  }
), Gu = E.forwardRef(
  (l, o) => {
    const { forceMount: s, ...r } = l, u = an(), { onScrollbarXEnabledChange: f, onScrollbarYEnabledChange: d } = u, p = l.orientation === "horizontal";
    return E.useEffect(() => (p ? f(!0) : d(!0), () => {
      p ? f(!1) : d(!1);
    }), [p, f, d]), u.type === "hover" ? /* @__PURE__ */ w.jsx(Zy, { ...r, ref: o, forceMount: s }) : u.type === "scroll" ? /* @__PURE__ */ w.jsx(iS, { ...r, ref: o, forceMount: s }) : u.type === "auto" ? /* @__PURE__ */ w.jsx(of, { ...r, ref: o, forceMount: s }) : u.type === "always" ? /* @__PURE__ */ w.jsx(ss, { ...r, ref: o }) : null;
  }
);
Gu.displayName = "@mantine/core/ScrollAreaScrollbar";
function rS(l, o = () => {
}) {
  let s = { left: l.scrollLeft, top: l.scrollTop }, r = 0;
  return (function u() {
    const f = { left: l.scrollLeft, top: l.scrollTop }, d = s.left !== f.left, p = s.top !== f.top;
    (d || p) && o(), s = f, r = window.requestAnimationFrame(u);
  })(), () => window.cancelAnimationFrame(r);
}
const Ky = E.forwardRef((l, o) => {
  const { style: s, ...r } = l, u = an(), f = Gy(), { onThumbPositionChange: d } = f, p = ue(o, (g) => f.onThumbChange(g)), y = E.useRef(), h = ls(() => {
    y.current && (y.current(), y.current = void 0);
  }, 100);
  return E.useEffect(() => {
    const { viewport: g } = u;
    if (g) {
      const S = () => {
        if (h(), !y.current) {
          const b = rS(g, d);
          y.current = b, d();
        }
      };
      return d(), g.addEventListener("scroll", S), () => g.removeEventListener("scroll", S);
    }
  }, [u.viewport, h, d]), /* @__PURE__ */ w.jsx(
    "div",
    {
      "data-state": f.hasThumb ? "visible" : "hidden",
      ...r,
      ref: p,
      style: {
        width: "var(--sa-thumb-width)",
        height: "var(--sa-thumb-height)",
        ...s
      },
      onPointerDownCapture: aa(l.onPointerDownCapture, (g) => {
        const b = g.target.getBoundingClientRect(), x = g.clientX - b.left, R = g.clientY - b.top;
        f.onThumbPointerDown({ x, y: R });
      }),
      onPointerUp: aa(l.onPointerUp, f.onThumbPointerUp)
    }
  );
});
Ky.displayName = "@mantine/core/ScrollAreaThumb";
const Xu = E.forwardRef(
  (l, o) => {
    const { forceMount: s, ...r } = l, u = Gy();
    return s || u.hasThumb ? /* @__PURE__ */ w.jsx(Ky, { ref: o, ...r }) : null;
  }
);
Xu.displayName = "@mantine/core/ScrollAreaThumb";
const Jy = E.forwardRef(
  ({ children: l, style: o, ...s }, r) => {
    const u = an(), f = ue(r, u.onViewportChange);
    return /* @__PURE__ */ w.jsx(
      pt,
      {
        ...s,
        ref: f,
        style: {
          overflowX: u.scrollbarXEnabled ? "scroll" : "hidden",
          overflowY: u.scrollbarYEnabled ? "scroll" : "hidden",
          ...o
        },
        children: /* @__PURE__ */ w.jsx("div", { style: { minWidth: "100%", display: "table" }, ref: u.onContentChange, children: l })
      }
    );
  }
);
Jy.displayName = "@mantine/core/ScrollAreaViewport";
var rf = { root: "m_d57069b5", viewport: "m_c0783ff9", viewportInner: "m_f8f631dd", scrollbar: "m_c44ba933", thumb: "m_d8b5e363", corner: "m_21657268" };
const Py = {
  scrollHideDelay: 1e3,
  type: "hover",
  scrollbars: "xy"
}, sS = (l, { scrollbarSize: o }) => ({
  root: {
    "--scrollarea-scrollbar-size": Q(o)
  }
}), co = Tt((l, o) => {
  const s = st("ScrollArea", Py, l), {
    classNames: r,
    className: u,
    style: f,
    styles: d,
    unstyled: p,
    scrollbarSize: y,
    vars: h,
    type: g,
    scrollHideDelay: S,
    viewportProps: b,
    viewportRef: x,
    onScrollPositionChange: R,
    children: _,
    offsetScrollbars: M,
    scrollbars: j,
    onBottomReached: B,
    onTopReached: H,
    ...$
  } = s, [q, k] = E.useState(!1), W = Ht({
    name: "ScrollArea",
    props: s,
    classes: rf,
    className: u,
    style: f,
    classNames: r,
    styles: d,
    unstyled: p,
    vars: h,
    varsResolver: sS
  });
  return /* @__PURE__ */ w.jsxs(
    Ly,
    {
      type: g === "never" ? "always" : g,
      scrollHideDelay: S,
      ref: o,
      scrollbars: j,
      ...W("root"),
      ...$,
      children: [
        /* @__PURE__ */ w.jsx(
          Jy,
          {
            ...b,
            ...W("viewport", { style: b?.style }),
            ref: x,
            "data-offset-scrollbars": M === !0 ? "xy" : M || void 0,
            "data-scrollbars": j || void 0,
            onScroll: (J) => {
              b?.onScroll?.(J), R?.({ x: J.currentTarget.scrollLeft, y: J.currentTarget.scrollTop });
              const { scrollTop: Z, scrollHeight: P, clientHeight: it } = J.currentTarget;
              Z - (P - it) >= 0 && B?.(), Z === 0 && H?.();
            },
            children: _
          }
        ),
        (j === "xy" || j === "x") && /* @__PURE__ */ w.jsx(
          Gu,
          {
            ...W("scrollbar"),
            orientation: "horizontal",
            "data-hidden": g === "never" || void 0,
            forceMount: !0,
            onMouseEnter: () => k(!0),
            onMouseLeave: () => k(!1),
            children: /* @__PURE__ */ w.jsx(Xu, { ...W("thumb") })
          }
        ),
        (j === "xy" || j === "y") && /* @__PURE__ */ w.jsx(
          Gu,
          {
            ...W("scrollbar"),
            orientation: "vertical",
            "data-hidden": g === "never" || void 0,
            forceMount: !0,
            onMouseEnter: () => k(!0),
            onMouseLeave: () => k(!1),
            children: /* @__PURE__ */ w.jsx(Xu, { ...W("thumb") })
          }
        ),
        /* @__PURE__ */ w.jsx(
          eS,
          {
            ...W("corner"),
            "data-hovered": q || void 0,
            "data-hidden": g === "never" || void 0
          }
        )
      ]
    }
  );
});
co.displayName = "@mantine/core/ScrollArea";
const sf = Tt((l, o) => {
  const {
    children: s,
    classNames: r,
    styles: u,
    scrollbarSize: f,
    scrollHideDelay: d,
    type: p,
    dir: y,
    offsetScrollbars: h,
    viewportRef: g,
    onScrollPositionChange: S,
    unstyled: b,
    variant: x,
    viewportProps: R,
    scrollbars: _,
    style: M,
    vars: j,
    onBottomReached: B,
    onTopReached: H,
    ...$
  } = st("ScrollAreaAutosize", Py, l);
  return /* @__PURE__ */ w.jsx(pt, { ...$, ref: o, style: [{ display: "flex", overflow: "auto" }, M], children: /* @__PURE__ */ w.jsx(pt, { style: { display: "flex", flexDirection: "column", flex: 1 }, children: /* @__PURE__ */ w.jsx(
    co,
    {
      classNames: r,
      styles: u,
      scrollHideDelay: d,
      scrollbarSize: f,
      type: p,
      dir: y,
      offsetScrollbars: h,
      viewportRef: g,
      onScrollPositionChange: S,
      unstyled: b,
      variant: x,
      viewportProps: R,
      vars: j,
      scrollbars: _,
      onBottomReached: B,
      onTopReached: H,
      children: s
    }
  ) }) });
});
co.classes = rf;
sf.displayName = "@mantine/core/ScrollAreaAutosize";
sf.classes = rf;
co.Autosize = sf;
var Wy = { root: "m_87cf2631" };
const cS = {
  __staticSelector: "UnstyledButton"
}, uo = Ol(
  (l, o) => {
    const s = st("UnstyledButton", cS, l), {
      className: r,
      component: u = "button",
      __staticSelector: f,
      unstyled: d,
      classNames: p,
      styles: y,
      style: h,
      ...g
    } = s, S = Ht({
      name: f,
      props: s,
      classes: Wy,
      className: r,
      style: h,
      classNames: p,
      styles: y,
      unstyled: d
    });
    return /* @__PURE__ */ w.jsx(
      pt,
      {
        ...S("root", { focusable: !0 }),
        component: u,
        ref: o,
        type: u === "button" ? "button" : void 0,
        ...g
      }
    );
  }
);
uo.classes = Wy;
uo.displayName = "@mantine/core/UnstyledButton";
var Fy = { root: "m_515a97f8" };
const uS = {}, cf = Tt((l, o) => {
  const s = st("VisuallyHidden", uS, l), { classNames: r, className: u, style: f, styles: d, unstyled: p, vars: y, ...h } = s, g = Ht({
    name: "VisuallyHidden",
    classes: Fy,
    props: s,
    className: u,
    style: f,
    classNames: r,
    styles: d,
    unstyled: p
  });
  return /* @__PURE__ */ w.jsx(pt, { component: "span", ref: o, ...g("root"), ...h });
});
cf.classes = Fy;
cf.displayName = "@mantine/core/VisuallyHidden";
function cs() {
  return typeof window < "u";
}
function fo(l) {
  return Iy(l) ? (l.nodeName || "").toLowerCase() : "#document";
}
function qe(l) {
  var o;
  return (l == null || (o = l.ownerDocument) == null ? void 0 : o.defaultView) || window;
}
function jn(l) {
  var o;
  return (o = (Iy(l) ? l.ownerDocument : l.document) || window.document) == null ? void 0 : o.documentElement;
}
function Iy(l) {
  return cs() ? l instanceof Node || l instanceof qe(l).Node : !1;
}
function Ce(l) {
  return cs() ? l instanceof Element || l instanceof qe(l).Element : !1;
}
function Nn(l) {
  return cs() ? l instanceof HTMLElement || l instanceof qe(l).HTMLElement : !1;
}
function Zh(l) {
  return !cs() || typeof ShadowRoot > "u" ? !1 : l instanceof ShadowRoot || l instanceof qe(l).ShadowRoot;
}
function Ai(l) {
  const {
    overflow: o,
    overflowX: s,
    overflowY: r,
    display: u
  } = vn(l);
  return /auto|scroll|overlay|hidden|clip/.test(o + r + s) && !["inline", "contents"].includes(u);
}
function fS(l) {
  return ["table", "td", "th"].includes(fo(l));
}
function us(l) {
  return [":popover-open", ":modal"].some((o) => {
    try {
      return l.matches(o);
    } catch {
      return !1;
    }
  });
}
function uf(l) {
  const o = ff(), s = Ce(l) ? vn(l) : l;
  return s.transform !== "none" || s.perspective !== "none" || (s.containerType ? s.containerType !== "normal" : !1) || !o && (s.backdropFilter ? s.backdropFilter !== "none" : !1) || !o && (s.filter ? s.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (s.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (s.contain || "").includes(r));
}
function dS(l) {
  let o = Dl(l);
  for (; Nn(o) && !no(o); ) {
    if (uf(o))
      return o;
    if (us(o))
      return null;
    o = Dl(o);
  }
  return null;
}
function ff() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function no(l) {
  return ["html", "body", "#document"].includes(fo(l));
}
function vn(l) {
  return qe(l).getComputedStyle(l);
}
function fs(l) {
  return Ce(l) ? {
    scrollLeft: l.scrollLeft,
    scrollTop: l.scrollTop
  } : {
    scrollLeft: l.scrollX,
    scrollTop: l.scrollY
  };
}
function Dl(l) {
  if (fo(l) === "html")
    return l;
  const o = (
    // Step into the shadow DOM of the parent of a slotted node.
    l.assignedSlot || // DOM Element detected.
    l.parentNode || // ShadowRoot detected.
    Zh(l) && l.host || // Fallback.
    jn(l)
  );
  return Zh(o) ? o.host : o;
}
function tv(l) {
  const o = Dl(l);
  return no(o) ? l.ownerDocument ? l.ownerDocument.body : l.body : Nn(o) && Ai(o) ? o : tv(o);
}
function Ti(l, o, s) {
  var r;
  o === void 0 && (o = []), s === void 0 && (s = !0);
  const u = tv(l), f = u === ((r = l.ownerDocument) == null ? void 0 : r.body), d = qe(u);
  if (f) {
    const p = ku(d);
    return o.concat(d, d.visualViewport || [], Ai(u) ? u : [], p && s ? Ti(p) : []);
  }
  return o.concat(u, Ti(u, [], s));
}
function ku(l) {
  return l.parent && Object.getPrototypeOf(l.parent) ? l.frameElement : null;
}
const gn = Math.min, we = Math.max, Ir = Math.round, Vr = Math.floor, zn = (l) => ({
  x: l,
  y: l
}), mS = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, pS = {
  start: "end",
  end: "start"
};
function Qu(l, o, s) {
  return we(l, gn(o, s));
}
function In(l, o) {
  return typeof l == "function" ? l(o) : l;
}
function bn(l) {
  return l.split("-")[0];
}
function mo(l) {
  return l.split("-")[1];
}
function df(l) {
  return l === "x" ? "y" : "x";
}
function mf(l) {
  return l === "y" ? "height" : "width";
}
function tl(l) {
  return ["top", "bottom"].includes(bn(l)) ? "y" : "x";
}
function pf(l) {
  return df(tl(l));
}
function hS(l, o, s) {
  s === void 0 && (s = !1);
  const r = mo(l), u = pf(l), f = mf(u);
  let d = u === "x" ? r === (s ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return o.reference[f] > o.floating[f] && (d = ts(d)), [d, ts(d)];
}
function yS(l) {
  const o = ts(l);
  return [Zu(l), o, Zu(o)];
}
function Zu(l) {
  return l.replace(/start|end/g, (o) => pS[o]);
}
function vS(l, o, s) {
  const r = ["left", "right"], u = ["right", "left"], f = ["top", "bottom"], d = ["bottom", "top"];
  switch (l) {
    case "top":
    case "bottom":
      return s ? o ? u : r : o ? r : u;
    case "left":
    case "right":
      return o ? f : d;
    default:
      return [];
  }
}
function gS(l, o, s, r) {
  const u = mo(l);
  let f = vS(bn(l), s === "start", r);
  return u && (f = f.map((d) => d + "-" + u), o && (f = f.concat(f.map(Zu)))), f;
}
function ts(l) {
  return l.replace(/left|right|bottom|top/g, (o) => mS[o]);
}
function bS(l) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...l
  };
}
function hf(l) {
  return typeof l != "number" ? bS(l) : {
    top: l,
    right: l,
    bottom: l,
    left: l
  };
}
function lo(l) {
  const {
    x: o,
    y: s,
    width: r,
    height: u
  } = l;
  return {
    width: r,
    height: u,
    top: s,
    left: o,
    right: o + r,
    bottom: s + u,
    x: o,
    y: s
  };
}
function Kh(l, o, s) {
  let {
    reference: r,
    floating: u
  } = l;
  const f = tl(o), d = pf(o), p = mf(d), y = bn(o), h = f === "y", g = r.x + r.width / 2 - u.width / 2, S = r.y + r.height / 2 - u.height / 2, b = r[p] / 2 - u[p] / 2;
  let x;
  switch (y) {
    case "top":
      x = {
        x: g,
        y: r.y - u.height
      };
      break;
    case "bottom":
      x = {
        x: g,
        y: r.y + r.height
      };
      break;
    case "right":
      x = {
        x: r.x + r.width,
        y: S
      };
      break;
    case "left":
      x = {
        x: r.x - u.width,
        y: S
      };
      break;
    default:
      x = {
        x: r.x,
        y: r.y
      };
  }
  switch (mo(o)) {
    case "start":
      x[d] -= b * (s && h ? -1 : 1);
      break;
    case "end":
      x[d] += b * (s && h ? -1 : 1);
      break;
  }
  return x;
}
const SS = async (l, o, s) => {
  const {
    placement: r = "bottom",
    strategy: u = "absolute",
    middleware: f = [],
    platform: d
  } = s, p = f.filter(Boolean), y = await (d.isRTL == null ? void 0 : d.isRTL(o));
  let h = await d.getElementRects({
    reference: l,
    floating: o,
    strategy: u
  }), {
    x: g,
    y: S
  } = Kh(h, r, y), b = r, x = {}, R = 0;
  for (let _ = 0; _ < p.length; _++) {
    const {
      name: M,
      fn: j
    } = p[_], {
      x: B,
      y: H,
      data: $,
      reset: q
    } = await j({
      x: g,
      y: S,
      initialPlacement: r,
      placement: b,
      strategy: u,
      middlewareData: x,
      rects: h,
      platform: d,
      elements: {
        reference: l,
        floating: o
      }
    });
    g = B ?? g, S = H ?? S, x = {
      ...x,
      [M]: {
        ...x[M],
        ...$
      }
    }, q && R <= 50 && (R++, typeof q == "object" && (q.placement && (b = q.placement), q.rects && (h = q.rects === !0 ? await d.getElementRects({
      reference: l,
      floating: o,
      strategy: u
    }) : q.rects), {
      x: g,
      y: S
    } = Kh(h, b, y)), _ = -1);
  }
  return {
    x: g,
    y: S,
    placement: b,
    strategy: u,
    middlewareData: x
  };
};
async function yf(l, o) {
  var s;
  o === void 0 && (o = {});
  const {
    x: r,
    y: u,
    platform: f,
    rects: d,
    elements: p,
    strategy: y
  } = l, {
    boundary: h = "clippingAncestors",
    rootBoundary: g = "viewport",
    elementContext: S = "floating",
    altBoundary: b = !1,
    padding: x = 0
  } = In(o, l), R = hf(x), M = p[b ? S === "floating" ? "reference" : "floating" : S], j = lo(await f.getClippingRect({
    element: (s = await (f.isElement == null ? void 0 : f.isElement(M))) == null || s ? M : M.contextElement || await (f.getDocumentElement == null ? void 0 : f.getDocumentElement(p.floating)),
    boundary: h,
    rootBoundary: g,
    strategy: y
  })), B = S === "floating" ? {
    x: r,
    y: u,
    width: d.floating.width,
    height: d.floating.height
  } : d.reference, H = await (f.getOffsetParent == null ? void 0 : f.getOffsetParent(p.floating)), $ = await (f.isElement == null ? void 0 : f.isElement(H)) ? await (f.getScale == null ? void 0 : f.getScale(H)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, q = lo(f.convertOffsetParentRelativeRectToViewportRelativeRect ? await f.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: p,
    rect: B,
    offsetParent: H,
    strategy: y
  }) : B);
  return {
    top: (j.top - q.top + R.top) / $.y,
    bottom: (q.bottom - j.bottom + R.bottom) / $.y,
    left: (j.left - q.left + R.left) / $.x,
    right: (q.right - j.right + R.right) / $.x
  };
}
const xS = (l) => ({
  name: "arrow",
  options: l,
  async fn(o) {
    const {
      x: s,
      y: r,
      placement: u,
      rects: f,
      platform: d,
      elements: p,
      middlewareData: y
    } = o, {
      element: h,
      padding: g = 0
    } = In(l, o) || {};
    if (h == null)
      return {};
    const S = hf(g), b = {
      x: s,
      y: r
    }, x = pf(u), R = mf(x), _ = await d.getDimensions(h), M = x === "y", j = M ? "top" : "left", B = M ? "bottom" : "right", H = M ? "clientHeight" : "clientWidth", $ = f.reference[R] + f.reference[x] - b[x] - f.floating[R], q = b[x] - f.reference[x], k = await (d.getOffsetParent == null ? void 0 : d.getOffsetParent(h));
    let W = k ? k[H] : 0;
    (!W || !await (d.isElement == null ? void 0 : d.isElement(k))) && (W = p.floating[H] || f.floating[R]);
    const J = $ / 2 - q / 2, Z = W / 2 - _[R] / 2 - 1, P = gn(S[j], Z), it = gn(S[B], Z), ct = P, dt = W - _[R] - it, ot = W / 2 - _[R] / 2 + J, ft = Qu(ct, ot, dt), U = !y.arrow && mo(u) != null && ot !== ft && f.reference[R] / 2 - (ot < ct ? P : it) - _[R] / 2 < 0, F = U ? ot < ct ? ot - ct : ot - dt : 0;
    return {
      [x]: b[x] + F,
      data: {
        [x]: ft,
        centerOffset: ot - ft - F,
        ...U && {
          alignmentOffset: F
        }
      },
      reset: U
    };
  }
}), wS = function(l) {
  return l === void 0 && (l = {}), {
    name: "flip",
    options: l,
    async fn(o) {
      var s, r;
      const {
        placement: u,
        middlewareData: f,
        rects: d,
        initialPlacement: p,
        platform: y,
        elements: h
      } = o, {
        mainAxis: g = !0,
        crossAxis: S = !0,
        fallbackPlacements: b,
        fallbackStrategy: x = "bestFit",
        fallbackAxisSideDirection: R = "none",
        flipAlignment: _ = !0,
        ...M
      } = In(l, o);
      if ((s = f.arrow) != null && s.alignmentOffset)
        return {};
      const j = bn(u), B = tl(p), H = bn(p) === p, $ = await (y.isRTL == null ? void 0 : y.isRTL(h.floating)), q = b || (H || !_ ? [ts(p)] : yS(p)), k = R !== "none";
      !b && k && q.push(...gS(p, _, R, $));
      const W = [p, ...q], J = await yf(o, M), Z = [];
      let P = ((r = f.flip) == null ? void 0 : r.overflows) || [];
      if (g && Z.push(J[j]), S) {
        const ot = hS(u, d, $);
        Z.push(J[ot[0]], J[ot[1]]);
      }
      if (P = [...P, {
        placement: u,
        overflows: Z
      }], !Z.every((ot) => ot <= 0)) {
        var it, ct;
        const ot = (((it = f.flip) == null ? void 0 : it.index) || 0) + 1, ft = W[ot];
        if (ft)
          return {
            data: {
              index: ot,
              overflows: P
            },
            reset: {
              placement: ft
            }
          };
        let U = (ct = P.filter((F) => F.overflows[0] <= 0).sort((F, V) => F.overflows[1] - V.overflows[1])[0]) == null ? void 0 : ct.placement;
        if (!U)
          switch (x) {
            case "bestFit": {
              var dt;
              const F = (dt = P.filter((V) => {
                if (k) {
                  const et = tl(V.placement);
                  return et === B || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  et === "y";
                }
                return !0;
              }).map((V) => [V.placement, V.overflows.filter((et) => et > 0).reduce((et, C) => et + C, 0)]).sort((V, et) => V[1] - et[1])[0]) == null ? void 0 : dt[0];
              F && (U = F);
              break;
            }
            case "initialPlacement":
              U = p;
              break;
          }
        if (u !== U)
          return {
            reset: {
              placement: U
            }
          };
      }
      return {};
    }
  };
};
function ev(l) {
  const o = gn(...l.map((f) => f.left)), s = gn(...l.map((f) => f.top)), r = we(...l.map((f) => f.right)), u = we(...l.map((f) => f.bottom));
  return {
    x: o,
    y: s,
    width: r - o,
    height: u - s
  };
}
function TS(l) {
  const o = l.slice().sort((u, f) => u.y - f.y), s = [];
  let r = null;
  for (let u = 0; u < o.length; u++) {
    const f = o[u];
    !r || f.y - r.y > r.height / 2 ? s.push([f]) : s[s.length - 1].push(f), r = f;
  }
  return s.map((u) => lo(ev(u)));
}
const ES = function(l) {
  return l === void 0 && (l = {}), {
    name: "inline",
    options: l,
    async fn(o) {
      const {
        placement: s,
        elements: r,
        rects: u,
        platform: f,
        strategy: d
      } = o, {
        padding: p = 2,
        x: y,
        y: h
      } = In(l, o), g = Array.from(await (f.getClientRects == null ? void 0 : f.getClientRects(r.reference)) || []), S = TS(g), b = lo(ev(g)), x = hf(p);
      function R() {
        if (S.length === 2 && S[0].left > S[1].right && y != null && h != null)
          return S.find((M) => y > M.left - x.left && y < M.right + x.right && h > M.top - x.top && h < M.bottom + x.bottom) || b;
        if (S.length >= 2) {
          if (tl(s) === "y") {
            const P = S[0], it = S[S.length - 1], ct = bn(s) === "top", dt = P.top, ot = it.bottom, ft = ct ? P.left : it.left, U = ct ? P.right : it.right, F = U - ft, V = ot - dt;
            return {
              top: dt,
              bottom: ot,
              left: ft,
              right: U,
              width: F,
              height: V,
              x: ft,
              y: dt
            };
          }
          const M = bn(s) === "left", j = we(...S.map((P) => P.right)), B = gn(...S.map((P) => P.left)), H = S.filter((P) => M ? P.left === B : P.right === j), $ = H[0].top, q = H[H.length - 1].bottom, k = B, W = j, J = W - k, Z = q - $;
          return {
            top: $,
            bottom: q,
            left: k,
            right: W,
            width: J,
            height: Z,
            x: k,
            y: $
          };
        }
        return b;
      }
      const _ = await f.getElementRects({
        reference: {
          getBoundingClientRect: R
        },
        floating: r.floating,
        strategy: d
      });
      return u.reference.x !== _.reference.x || u.reference.y !== _.reference.y || u.reference.width !== _.reference.width || u.reference.height !== _.reference.height ? {
        reset: {
          rects: _
        }
      } : {};
    }
  };
};
async function CS(l, o) {
  const {
    placement: s,
    platform: r,
    elements: u
  } = l, f = await (r.isRTL == null ? void 0 : r.isRTL(u.floating)), d = bn(s), p = mo(s), y = tl(s) === "y", h = ["left", "top"].includes(d) ? -1 : 1, g = f && y ? -1 : 1, S = In(o, l);
  let {
    mainAxis: b,
    crossAxis: x,
    alignmentAxis: R
  } = typeof S == "number" ? {
    mainAxis: S,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: S.mainAxis || 0,
    crossAxis: S.crossAxis || 0,
    alignmentAxis: S.alignmentAxis
  };
  return p && typeof R == "number" && (x = p === "end" ? R * -1 : R), y ? {
    x: x * g,
    y: b * h
  } : {
    x: b * h,
    y: x * g
  };
}
const RS = function(l) {
  return l === void 0 && (l = 0), {
    name: "offset",
    options: l,
    async fn(o) {
      var s, r;
      const {
        x: u,
        y: f,
        placement: d,
        middlewareData: p
      } = o, y = await CS(o, l);
      return d === ((s = p.offset) == null ? void 0 : s.placement) && (r = p.arrow) != null && r.alignmentOffset ? {} : {
        x: u + y.x,
        y: f + y.y,
        data: {
          ...y,
          placement: d
        }
      };
    }
  };
}, AS = function(l) {
  return l === void 0 && (l = {}), {
    name: "shift",
    options: l,
    async fn(o) {
      const {
        x: s,
        y: r,
        placement: u
      } = o, {
        mainAxis: f = !0,
        crossAxis: d = !1,
        limiter: p = {
          fn: (M) => {
            let {
              x: j,
              y: B
            } = M;
            return {
              x: j,
              y: B
            };
          }
        },
        ...y
      } = In(l, o), h = {
        x: s,
        y: r
      }, g = await yf(o, y), S = tl(bn(u)), b = df(S);
      let x = h[b], R = h[S];
      if (f) {
        const M = b === "y" ? "top" : "left", j = b === "y" ? "bottom" : "right", B = x + g[M], H = x - g[j];
        x = Qu(B, x, H);
      }
      if (d) {
        const M = S === "y" ? "top" : "left", j = S === "y" ? "bottom" : "right", B = R + g[M], H = R - g[j];
        R = Qu(B, R, H);
      }
      const _ = p.fn({
        ...o,
        [b]: x,
        [S]: R
      });
      return {
        ..._,
        data: {
          x: _.x - s,
          y: _.y - r,
          enabled: {
            [b]: f,
            [S]: d
          }
        }
      };
    }
  };
}, DS = function(l) {
  return l === void 0 && (l = {}), {
    options: l,
    fn(o) {
      const {
        x: s,
        y: r,
        placement: u,
        rects: f,
        middlewareData: d
      } = o, {
        offset: p = 0,
        mainAxis: y = !0,
        crossAxis: h = !0
      } = In(l, o), g = {
        x: s,
        y: r
      }, S = tl(u), b = df(S);
      let x = g[b], R = g[S];
      const _ = In(p, o), M = typeof _ == "number" ? {
        mainAxis: _,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ..._
      };
      if (y) {
        const H = b === "y" ? "height" : "width", $ = f.reference[b] - f.floating[H] + M.mainAxis, q = f.reference[b] + f.reference[H] - M.mainAxis;
        x < $ ? x = $ : x > q && (x = q);
      }
      if (h) {
        var j, B;
        const H = b === "y" ? "width" : "height", $ = ["top", "left"].includes(bn(u)), q = f.reference[S] - f.floating[H] + ($ && ((j = d.offset) == null ? void 0 : j[S]) || 0) + ($ ? 0 : M.crossAxis), k = f.reference[S] + f.reference[H] + ($ ? 0 : ((B = d.offset) == null ? void 0 : B[S]) || 0) - ($ ? M.crossAxis : 0);
        R < q ? R = q : R > k && (R = k);
      }
      return {
        [b]: x,
        [S]: R
      };
    }
  };
}, OS = function(l) {
  return l === void 0 && (l = {}), {
    name: "size",
    options: l,
    async fn(o) {
      var s, r;
      const {
        placement: u,
        rects: f,
        platform: d,
        elements: p
      } = o, {
        apply: y = () => {
        },
        ...h
      } = In(l, o), g = await yf(o, h), S = bn(u), b = mo(u), x = tl(u) === "y", {
        width: R,
        height: _
      } = f.floating;
      let M, j;
      S === "top" || S === "bottom" ? (M = S, j = b === (await (d.isRTL == null ? void 0 : d.isRTL(p.floating)) ? "start" : "end") ? "left" : "right") : (j = S, M = b === "end" ? "top" : "bottom");
      const B = _ - g.top - g.bottom, H = R - g.left - g.right, $ = gn(_ - g[M], B), q = gn(R - g[j], H), k = !o.middlewareData.shift;
      let W = $, J = q;
      if ((s = o.middlewareData.shift) != null && s.enabled.x && (J = H), (r = o.middlewareData.shift) != null && r.enabled.y && (W = B), k && !b) {
        const P = we(g.left, 0), it = we(g.right, 0), ct = we(g.top, 0), dt = we(g.bottom, 0);
        x ? J = R - 2 * (P !== 0 || it !== 0 ? P + it : we(g.left, g.right)) : W = _ - 2 * (ct !== 0 || dt !== 0 ? ct + dt : we(g.top, g.bottom));
      }
      await y({
        ...o,
        availableWidth: J,
        availableHeight: W
      });
      const Z = await d.getDimensions(p.floating);
      return R !== Z.width || _ !== Z.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function nv(l) {
  const o = vn(l);
  let s = parseFloat(o.width) || 0, r = parseFloat(o.height) || 0;
  const u = Nn(l), f = u ? l.offsetWidth : s, d = u ? l.offsetHeight : r, p = Ir(s) !== f || Ir(r) !== d;
  return p && (s = f, r = d), {
    width: s,
    height: r,
    $: p
  };
}
function vf(l) {
  return Ce(l) ? l : l.contextElement;
}
function to(l) {
  const o = vf(l);
  if (!Nn(o))
    return zn(1);
  const s = o.getBoundingClientRect(), {
    width: r,
    height: u,
    $: f
  } = nv(o);
  let d = (f ? Ir(s.width) : s.width) / r, p = (f ? Ir(s.height) : s.height) / u;
  return (!d || !Number.isFinite(d)) && (d = 1), (!p || !Number.isFinite(p)) && (p = 1), {
    x: d,
    y: p
  };
}
const _S = /* @__PURE__ */ zn(0);
function lv(l) {
  const o = qe(l);
  return !ff() || !o.visualViewport ? _S : {
    x: o.visualViewport.offsetLeft,
    y: o.visualViewport.offsetTop
  };
}
function MS(l, o, s) {
  return o === void 0 && (o = !1), !s || o && s !== qe(l) ? !1 : o;
}
function ia(l, o, s, r) {
  o === void 0 && (o = !1), s === void 0 && (s = !1);
  const u = l.getBoundingClientRect(), f = vf(l);
  let d = zn(1);
  o && (r ? Ce(r) && (d = to(r)) : d = to(l));
  const p = MS(f, s, r) ? lv(f) : zn(0);
  let y = (u.left + p.x) / d.x, h = (u.top + p.y) / d.y, g = u.width / d.x, S = u.height / d.y;
  if (f) {
    const b = qe(f), x = r && Ce(r) ? qe(r) : r;
    let R = b, _ = ku(R);
    for (; _ && r && x !== R; ) {
      const M = to(_), j = _.getBoundingClientRect(), B = vn(_), H = j.left + (_.clientLeft + parseFloat(B.paddingLeft)) * M.x, $ = j.top + (_.clientTop + parseFloat(B.paddingTop)) * M.y;
      y *= M.x, h *= M.y, g *= M.x, S *= M.y, y += H, h += $, R = qe(_), _ = ku(R);
    }
  }
  return lo({
    width: g,
    height: S,
    x: y,
    y: h
  });
}
function gf(l, o) {
  const s = fs(l).scrollLeft;
  return o ? o.left + s : ia(jn(l)).left + s;
}
function av(l, o, s) {
  s === void 0 && (s = !1);
  const r = l.getBoundingClientRect(), u = r.left + o.scrollLeft - (s ? 0 : (
    // RTL <body> scrollbar.
    gf(l, r)
  )), f = r.top + o.scrollTop;
  return {
    x: u,
    y: f
  };
}
function zS(l) {
  let {
    elements: o,
    rect: s,
    offsetParent: r,
    strategy: u
  } = l;
  const f = u === "fixed", d = jn(r), p = o ? us(o.floating) : !1;
  if (r === d || p && f)
    return s;
  let y = {
    scrollLeft: 0,
    scrollTop: 0
  }, h = zn(1);
  const g = zn(0), S = Nn(r);
  if ((S || !S && !f) && ((fo(r) !== "body" || Ai(d)) && (y = fs(r)), Nn(r))) {
    const x = ia(r);
    h = to(r), g.x = x.x + r.clientLeft, g.y = x.y + r.clientTop;
  }
  const b = d && !S && !f ? av(d, y, !0) : zn(0);
  return {
    width: s.width * h.x,
    height: s.height * h.y,
    x: s.x * h.x - y.scrollLeft * h.x + g.x + b.x,
    y: s.y * h.y - y.scrollTop * h.y + g.y + b.y
  };
}
function NS(l) {
  return Array.from(l.getClientRects());
}
function jS(l) {
  const o = jn(l), s = fs(l), r = l.ownerDocument.body, u = we(o.scrollWidth, o.clientWidth, r.scrollWidth, r.clientWidth), f = we(o.scrollHeight, o.clientHeight, r.scrollHeight, r.clientHeight);
  let d = -s.scrollLeft + gf(l);
  const p = -s.scrollTop;
  return vn(r).direction === "rtl" && (d += we(o.clientWidth, r.clientWidth) - u), {
    width: u,
    height: f,
    x: d,
    y: p
  };
}
function HS(l, o) {
  const s = qe(l), r = jn(l), u = s.visualViewport;
  let f = r.clientWidth, d = r.clientHeight, p = 0, y = 0;
  if (u) {
    f = u.width, d = u.height;
    const h = ff();
    (!h || h && o === "fixed") && (p = u.offsetLeft, y = u.offsetTop);
  }
  return {
    width: f,
    height: d,
    x: p,
    y
  };
}
function US(l, o) {
  const s = ia(l, !0, o === "fixed"), r = s.top + l.clientTop, u = s.left + l.clientLeft, f = Nn(l) ? to(l) : zn(1), d = l.clientWidth * f.x, p = l.clientHeight * f.y, y = u * f.x, h = r * f.y;
  return {
    width: d,
    height: p,
    x: y,
    y: h
  };
}
function Jh(l, o, s) {
  let r;
  if (o === "viewport")
    r = HS(l, s);
  else if (o === "document")
    r = jS(jn(l));
  else if (Ce(o))
    r = US(o, s);
  else {
    const u = lv(l);
    r = {
      x: o.x - u.x,
      y: o.y - u.y,
      width: o.width,
      height: o.height
    };
  }
  return lo(r);
}
function ov(l, o) {
  const s = Dl(l);
  return s === o || !Ce(s) || no(s) ? !1 : vn(s).position === "fixed" || ov(s, o);
}
function $S(l, o) {
  const s = o.get(l);
  if (s)
    return s;
  let r = Ti(l, [], !1).filter((p) => Ce(p) && fo(p) !== "body"), u = null;
  const f = vn(l).position === "fixed";
  let d = f ? Dl(l) : l;
  for (; Ce(d) && !no(d); ) {
    const p = vn(d), y = uf(d);
    !y && p.position === "fixed" && (u = null), (f ? !y && !u : !y && p.position === "static" && !!u && ["absolute", "fixed"].includes(u.position) || Ai(d) && !y && ov(l, d)) ? r = r.filter((g) => g !== d) : u = p, d = Dl(d);
  }
  return o.set(l, r), r;
}
function BS(l) {
  let {
    element: o,
    boundary: s,
    rootBoundary: r,
    strategy: u
  } = l;
  const d = [...s === "clippingAncestors" ? us(o) ? [] : $S(o, this._c) : [].concat(s), r], p = d[0], y = d.reduce((h, g) => {
    const S = Jh(o, g, u);
    return h.top = we(S.top, h.top), h.right = gn(S.right, h.right), h.bottom = gn(S.bottom, h.bottom), h.left = we(S.left, h.left), h;
  }, Jh(o, p, u));
  return {
    width: y.right - y.left,
    height: y.bottom - y.top,
    x: y.left,
    y: y.top
  };
}
function LS(l) {
  const {
    width: o,
    height: s
  } = nv(l);
  return {
    width: o,
    height: s
  };
}
function YS(l, o, s) {
  const r = Nn(o), u = jn(o), f = s === "fixed", d = ia(l, !0, f, o);
  let p = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const y = zn(0);
  if (r || !r && !f)
    if ((fo(o) !== "body" || Ai(u)) && (p = fs(o)), r) {
      const b = ia(o, !0, f, o);
      y.x = b.x + o.clientLeft, y.y = b.y + o.clientTop;
    } else u && (y.x = gf(u));
  const h = u && !r && !f ? av(u, p) : zn(0), g = d.left + p.scrollLeft - y.x - h.x, S = d.top + p.scrollTop - y.y - h.y;
  return {
    x: g,
    y: S,
    width: d.width,
    height: d.height
  };
}
function Bu(l) {
  return vn(l).position === "static";
}
function Ph(l, o) {
  if (!Nn(l) || vn(l).position === "fixed")
    return null;
  if (o)
    return o(l);
  let s = l.offsetParent;
  return jn(l) === s && (s = s.ownerDocument.body), s;
}
function iv(l, o) {
  const s = qe(l);
  if (us(l))
    return s;
  if (!Nn(l)) {
    let u = Dl(l);
    for (; u && !no(u); ) {
      if (Ce(u) && !Bu(u))
        return u;
      u = Dl(u);
    }
    return s;
  }
  let r = Ph(l, o);
  for (; r && fS(r) && Bu(r); )
    r = Ph(r, o);
  return r && no(r) && Bu(r) && !uf(r) ? s : r || dS(l) || s;
}
const qS = async function(l) {
  const o = this.getOffsetParent || iv, s = this.getDimensions, r = await s(l.floating);
  return {
    reference: YS(l.reference, await o(l.floating), l.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function VS(l) {
  return vn(l).direction === "rtl";
}
const GS = {
  convertOffsetParentRelativeRectToViewportRelativeRect: zS,
  getDocumentElement: jn,
  getClippingRect: BS,
  getOffsetParent: iv,
  getElementRects: qS,
  getClientRects: NS,
  getDimensions: LS,
  getScale: to,
  isElement: Ce,
  isRTL: VS
};
function XS(l, o) {
  let s = null, r;
  const u = jn(l);
  function f() {
    var p;
    clearTimeout(r), (p = s) == null || p.disconnect(), s = null;
  }
  function d(p, y) {
    p === void 0 && (p = !1), y === void 0 && (y = 1), f();
    const {
      left: h,
      top: g,
      width: S,
      height: b
    } = l.getBoundingClientRect();
    if (p || o(), !S || !b)
      return;
    const x = Vr(g), R = Vr(u.clientWidth - (h + S)), _ = Vr(u.clientHeight - (g + b)), M = Vr(h), B = {
      rootMargin: -x + "px " + -R + "px " + -_ + "px " + -M + "px",
      threshold: we(0, gn(1, y)) || 1
    };
    let H = !0;
    function $(q) {
      const k = q[0].intersectionRatio;
      if (k !== y) {
        if (!H)
          return d();
        k ? d(!1, k) : r = setTimeout(() => {
          d(!1, 1e-7);
        }, 1e3);
      }
      H = !1;
    }
    try {
      s = new IntersectionObserver($, {
        ...B,
        // Handle <iframe>s
        root: u.ownerDocument
      });
    } catch {
      s = new IntersectionObserver($, B);
    }
    s.observe(l);
  }
  return d(!0), f;
}
function kS(l, o, s, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: u = !0,
    ancestorResize: f = !0,
    elementResize: d = typeof ResizeObserver == "function",
    layoutShift: p = typeof IntersectionObserver == "function",
    animationFrame: y = !1
  } = r, h = vf(l), g = u || f ? [...h ? Ti(h) : [], ...Ti(o)] : [];
  g.forEach((j) => {
    u && j.addEventListener("scroll", s, {
      passive: !0
    }), f && j.addEventListener("resize", s);
  });
  const S = h && p ? XS(h, s) : null;
  let b = -1, x = null;
  d && (x = new ResizeObserver((j) => {
    let [B] = j;
    B && B.target === h && x && (x.unobserve(o), cancelAnimationFrame(b), b = requestAnimationFrame(() => {
      var H;
      (H = x) == null || H.observe(o);
    })), s();
  }), h && !y && x.observe(h), x.observe(o));
  let R, _ = y ? ia(l) : null;
  y && M();
  function M() {
    const j = ia(l);
    _ && (j.x !== _.x || j.y !== _.y || j.width !== _.width || j.height !== _.height) && s(), _ = j, R = requestAnimationFrame(M);
  }
  return s(), () => {
    var j;
    g.forEach((B) => {
      u && B.removeEventListener("scroll", s), f && B.removeEventListener("resize", s);
    }), S?.(), (j = x) == null || j.disconnect(), x = null, y && cancelAnimationFrame(R);
  };
}
const QS = RS, ZS = AS, KS = wS, JS = OS, Wh = xS, PS = ES, WS = DS, FS = (l, o, s) => {
  const r = /* @__PURE__ */ new Map(), u = {
    platform: GS,
    ...s
  }, f = {
    ...u.platform,
    _c: r
  };
  return SS(l, o, {
    ...u,
    platform: f
  });
};
var Qr = typeof document < "u" ? E.useLayoutEffect : E.useEffect;
function es(l, o) {
  if (l === o)
    return !0;
  if (typeof l != typeof o)
    return !1;
  if (typeof l == "function" && l.toString() === o.toString())
    return !0;
  let s, r, u;
  if (l && o && typeof l == "object") {
    if (Array.isArray(l)) {
      if (s = l.length, s !== o.length) return !1;
      for (r = s; r-- !== 0; )
        if (!es(l[r], o[r]))
          return !1;
      return !0;
    }
    if (u = Object.keys(l), s = u.length, s !== Object.keys(o).length)
      return !1;
    for (r = s; r-- !== 0; )
      if (!{}.hasOwnProperty.call(o, u[r]))
        return !1;
    for (r = s; r-- !== 0; ) {
      const f = u[r];
      if (!(f === "_owner" && l.$$typeof) && !es(l[f], o[f]))
        return !1;
    }
    return !0;
  }
  return l !== l && o !== o;
}
function rv(l) {
  return typeof window > "u" ? 1 : (l.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Fh(l, o) {
  const s = rv(l);
  return Math.round(o * s) / s;
}
function Lu(l) {
  const o = E.useRef(l);
  return Qr(() => {
    o.current = l;
  }), o;
}
function IS(l) {
  l === void 0 && (l = {});
  const {
    placement: o = "bottom",
    strategy: s = "absolute",
    middleware: r = [],
    platform: u,
    elements: {
      reference: f,
      floating: d
    } = {},
    transform: p = !0,
    whileElementsMounted: y,
    open: h
  } = l, [g, S] = E.useState({
    x: 0,
    y: 0,
    strategy: s,
    placement: o,
    middlewareData: {},
    isPositioned: !1
  }), [b, x] = E.useState(r);
  es(b, r) || x(r);
  const [R, _] = E.useState(null), [M, j] = E.useState(null), B = E.useCallback((V) => {
    V !== k.current && (k.current = V, _(V));
  }, []), H = E.useCallback((V) => {
    V !== W.current && (W.current = V, j(V));
  }, []), $ = f || R, q = d || M, k = E.useRef(null), W = E.useRef(null), J = E.useRef(g), Z = y != null, P = Lu(y), it = Lu(u), ct = Lu(h), dt = E.useCallback(() => {
    if (!k.current || !W.current)
      return;
    const V = {
      placement: o,
      strategy: s,
      middleware: b
    };
    it.current && (V.platform = it.current), FS(k.current, W.current, V).then((et) => {
      const C = {
        ...et,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: ct.current !== !1
      };
      ot.current && !es(J.current, C) && (J.current = C, af.flushSync(() => {
        S(C);
      }));
    });
  }, [b, o, s, it, ct]);
  Qr(() => {
    h === !1 && J.current.isPositioned && (J.current.isPositioned = !1, S((V) => ({
      ...V,
      isPositioned: !1
    })));
  }, [h]);
  const ot = E.useRef(!1);
  Qr(() => (ot.current = !0, () => {
    ot.current = !1;
  }), []), Qr(() => {
    if ($ && (k.current = $), q && (W.current = q), $ && q) {
      if (P.current)
        return P.current($, q, dt);
      dt();
    }
  }, [$, q, dt, P, Z]);
  const ft = E.useMemo(() => ({
    reference: k,
    floating: W,
    setReference: B,
    setFloating: H
  }), [B, H]), U = E.useMemo(() => ({
    reference: $,
    floating: q
  }), [$, q]), F = E.useMemo(() => {
    const V = {
      position: s,
      left: 0,
      top: 0
    };
    if (!U.floating)
      return V;
    const et = Fh(U.floating, g.x), C = Fh(U.floating, g.y);
    return p ? {
      ...V,
      transform: "translate(" + et + "px, " + C + "px)",
      ...rv(U.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: s,
      left: et,
      top: C
    };
  }, [s, p, U.floating, g.x, g.y]);
  return E.useMemo(() => ({
    ...g,
    update: dt,
    refs: ft,
    elements: U,
    floatingStyles: F
  }), [g, dt, ft, U, F]);
}
const tx = (l) => {
  function o(s) {
    return {}.hasOwnProperty.call(s, "current");
  }
  return {
    name: "arrow",
    options: l,
    fn(s) {
      const {
        element: r,
        padding: u
      } = typeof l == "function" ? l(s) : l;
      return r && o(r) ? r.current != null ? Wh({
        element: r.current,
        padding: u
      }).fn(s) : {} : r ? Wh({
        element: r,
        padding: u
      }).fn(s) : {};
    }
  };
}, ex = (l, o) => ({
  ...QS(l),
  options: [l, o]
}), nx = (l, o) => ({
  ...ZS(l),
  options: [l, o]
}), Ih = (l, o) => ({
  ...WS(l),
  options: [l, o]
}), ty = (l, o) => ({
  ...KS(l),
  options: [l, o]
}), lx = (l, o) => ({
  ...JS(l),
  options: [l, o]
}), ey = (l, o) => ({
  ...PS(l),
  options: [l, o]
}), ax = (l, o) => ({
  ...tx(l),
  options: [l, o]
}), sv = {
  ...sb
}, ox = sv.useInsertionEffect, ix = ox || ((l) => l());
function rx(l) {
  const o = E.useRef(() => {
  });
  return ix(() => {
    o.current = l;
  }), E.useCallback(function() {
    for (var s = arguments.length, r = new Array(s), u = 0; u < s; u++)
      r[u] = arguments[u];
    return o.current == null ? void 0 : o.current(...r);
  }, []);
}
var Ku = typeof document < "u" ? E.useLayoutEffect : E.useEffect;
let ny = !1, sx = 0;
const ly = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + sx++
);
function cx() {
  const [l, o] = E.useState(() => ny ? ly() : void 0);
  return Ku(() => {
    l == null && o(ly());
  }, []), E.useEffect(() => {
    ny = !0;
  }, []), l;
}
const ux = sv.useId, fx = ux || cx;
function dx() {
  const l = /* @__PURE__ */ new Map();
  return {
    emit(o, s) {
      var r;
      (r = l.get(o)) == null || r.forEach((u) => u(s));
    },
    on(o, s) {
      l.set(o, [...l.get(o) || [], s]);
    },
    off(o, s) {
      var r;
      l.set(o, ((r = l.get(o)) == null ? void 0 : r.filter((u) => u !== s)) || []);
    }
  };
}
const mx = /* @__PURE__ */ E.createContext(null), px = /* @__PURE__ */ E.createContext(null), hx = () => {
  var l;
  return ((l = E.useContext(mx)) == null ? void 0 : l.id) || null;
}, yx = () => E.useContext(px);
function vx(l) {
  const {
    open: o = !1,
    onOpenChange: s,
    elements: r
  } = l, u = fx(), f = E.useRef({}), [d] = E.useState(() => dx()), p = hx() != null, [y, h] = E.useState(r.reference), g = rx((x, R, _) => {
    f.current.openEvent = x ? R : void 0, d.emit("openchange", {
      open: x,
      event: R,
      reason: _,
      nested: p
    }), s?.(x, R, _);
  }), S = E.useMemo(() => ({
    setPositionReference: h
  }), []), b = E.useMemo(() => ({
    reference: y || r.reference || null,
    floating: r.floating || null,
    domReference: r.reference
  }), [y, r.reference, r.floating]);
  return E.useMemo(() => ({
    dataRef: f,
    open: o,
    onOpenChange: g,
    elements: b,
    events: d,
    floatingId: u,
    refs: S
  }), [o, g, b, d, u, S]);
}
function gx(l) {
  l === void 0 && (l = {});
  const {
    nodeId: o
  } = l, s = vx({
    ...l,
    elements: {
      reference: null,
      floating: null,
      ...l.elements
    }
  }), r = l.rootContext || s, u = r.elements, [f, d] = E.useState(null), [p, y] = E.useState(null), g = u?.domReference || f, S = E.useRef(null), b = yx();
  Ku(() => {
    g && (S.current = g);
  }, [g]);
  const x = IS({
    ...l,
    elements: {
      ...u,
      ...p && {
        reference: p
      }
    }
  }), R = E.useCallback((H) => {
    const $ = Ce(H) ? {
      getBoundingClientRect: () => H.getBoundingClientRect(),
      contextElement: H
    } : H;
    y($), x.refs.setReference($);
  }, [x.refs]), _ = E.useCallback((H) => {
    (Ce(H) || H === null) && (S.current = H, d(H)), (Ce(x.refs.reference.current) || x.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    H !== null && !Ce(H)) && x.refs.setReference(H);
  }, [x.refs]), M = E.useMemo(() => ({
    ...x.refs,
    setReference: _,
    setPositionReference: R,
    domReference: S
  }), [x.refs, _, R]), j = E.useMemo(() => ({
    ...x.elements,
    domReference: g
  }), [x.elements, g]), B = E.useMemo(() => ({
    ...x,
    ...r,
    refs: M,
    elements: j,
    nodeId: o
  }), [x, M, j, o, r]);
  return Ku(() => {
    r.dataRef.current.floatingContext = B;
    const H = b?.nodesRef.current.find(($) => $.id === o);
    H && (H.context = B);
  }), E.useMemo(() => ({
    ...x,
    context: B,
    refs: M,
    elements: j
  }), [x, M, j, B]);
}
function bx(l, o) {
  if (l === "rtl" && (o.includes("right") || o.includes("left"))) {
    const [s, r] = o.split("-"), u = s === "right" ? "left" : "right";
    return r === void 0 ? u : `${u}-${r}`;
  }
  return o;
}
function ay(l, o, s, r) {
  return l === "center" || r === "center" ? { top: o } : l === "end" ? { bottom: s } : l === "start" ? { top: s } : {};
}
function oy(l, o, s, r, u) {
  return l === "center" || r === "center" ? { left: o } : l === "end" ? { [u === "ltr" ? "right" : "left"]: s } : l === "start" ? { [u === "ltr" ? "left" : "right"]: s } : {};
}
const Sx = {
  bottom: "borderTopLeftRadius",
  left: "borderTopRightRadius",
  right: "borderBottomLeftRadius",
  top: "borderBottomRightRadius"
};
function xx({
  position: l,
  arrowSize: o,
  arrowOffset: s,
  arrowRadius: r,
  arrowPosition: u,
  arrowX: f,
  arrowY: d,
  dir: p
}) {
  const [y, h = "center"] = l.split("-"), g = {
    width: o,
    height: o,
    transform: "rotate(45deg)",
    position: "absolute",
    [Sx[y]]: r
  }, S = -o / 2;
  return y === "left" ? {
    ...g,
    ...ay(h, d, s, u),
    right: S,
    borderLeftColor: "transparent",
    borderBottomColor: "transparent",
    clipPath: "polygon(100% 0, 0 0, 100% 100%)"
  } : y === "right" ? {
    ...g,
    ...ay(h, d, s, u),
    left: S,
    borderRightColor: "transparent",
    borderTopColor: "transparent",
    clipPath: "polygon(0 100%, 0 0, 100% 100%)"
  } : y === "top" ? {
    ...g,
    ...oy(h, f, s, u, p),
    bottom: S,
    borderTopColor: "transparent",
    borderLeftColor: "transparent",
    clipPath: "polygon(0 100%, 100% 100%, 100% 0)"
  } : y === "bottom" ? {
    ...g,
    ...oy(h, f, s, u, p),
    top: S,
    borderBottomColor: "transparent",
    borderRightColor: "transparent",
    clipPath: "polygon(0 100%, 0 0, 100% 0)"
  } : {};
}
const cv = E.forwardRef(
  ({
    position: l,
    arrowSize: o,
    arrowOffset: s,
    arrowRadius: r,
    arrowPosition: u,
    visible: f,
    arrowX: d,
    arrowY: p,
    style: y,
    ...h
  }, g) => {
    const { dir: S } = is();
    return f ? /* @__PURE__ */ w.jsx(
      "div",
      {
        ...h,
        ref: g,
        style: {
          ...y,
          ...xx({
            position: l,
            arrowSize: o,
            arrowOffset: s,
            arrowRadius: r,
            arrowPosition: u,
            dir: S,
            arrowX: d,
            arrowY: p
          })
        }
      }
    ) : null;
  }
);
cv.displayName = "@mantine/core/FloatingArrow";
const [wx, uv] = io(
  "Popover component was not found in the tree"
);
function bf({
  children: l,
  active: o = !0,
  refProp: s = "ref",
  innerRef: r
}) {
  const u = jb(o), f = ue(u, r);
  return oo(l) ? E.cloneElement(l, { [s]: f }) : l;
}
function fv(l) {
  return /* @__PURE__ */ w.jsx(cf, { tabIndex: -1, "data-autofocus": !0, ...l });
}
bf.displayName = "@mantine/core/FocusTrap";
fv.displayName = "@mantine/core/FocusTrapInitialFocus";
bf.InitialFocus = fv;
function Tx(l) {
  const o = document.createElement("div");
  return o.setAttribute("data-portal", "true"), typeof l.className == "string" && o.classList.add(...l.className.split(" ").filter(Boolean)), typeof l.style == "object" && Object.assign(o.style, l.style), typeof l.id == "string" && o.setAttribute("id", l.id), o;
}
const Ex = {}, dv = E.forwardRef((l, o) => {
  const { children: s, target: r, ...u } = st("Portal", Ex, l), [f, d] = E.useState(!1), p = E.useRef(null);
  return Ci(() => (d(!0), p.current = r ? typeof r == "string" ? document.querySelector(r) : r : Tx(u), Ty(o, p.current), !r && p.current && document.body.appendChild(p.current), () => {
    !r && p.current && document.body.removeChild(p.current);
  }), [r]), !f || !p.current ? null : af.createPortal(/* @__PURE__ */ w.jsx(w.Fragment, { children: s }), p.current);
});
dv.displayName = "@mantine/core/Portal";
function mv({ withinPortal: l = !0, children: o, ...s }) {
  return l ? /* @__PURE__ */ w.jsx(dv, { ...s, children: o }) : /* @__PURE__ */ w.jsx(w.Fragment, { children: o });
}
mv.displayName = "@mantine/core/OptionalPortal";
const Si = (l) => ({
  in: { opacity: 1, transform: "scale(1)" },
  out: { opacity: 0, transform: `scale(.9) translateY(${Q(l === "bottom" ? 10 : -10)})` },
  transitionProperty: "transform, opacity"
}), Gr = {
  fade: {
    in: { opacity: 1 },
    out: { opacity: 0 },
    transitionProperty: "opacity"
  },
  "fade-up": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: `translateY(${Q(30)}` },
    transitionProperty: "opacity, transform"
  },
  "fade-down": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: `translateY(${Q(-30)}` },
    transitionProperty: "opacity, transform"
  },
  "fade-left": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: `translateX(${Q(30)}` },
    transitionProperty: "opacity, transform"
  },
  "fade-right": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: `translateX(${Q(-30)}` },
    transitionProperty: "opacity, transform"
  },
  scale: {
    in: { opacity: 1, transform: "scale(1)" },
    out: { opacity: 0, transform: "scale(0)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "scale-y": {
    in: { opacity: 1, transform: "scaleY(1)" },
    out: { opacity: 0, transform: "scaleY(0)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "scale-x": {
    in: { opacity: 1, transform: "scaleX(1)" },
    out: { opacity: 0, transform: "scaleX(0)" },
    common: { transformOrigin: "left" },
    transitionProperty: "transform, opacity"
  },
  "skew-up": {
    in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
    out: { opacity: 0, transform: `translateY(${Q(-20)}) skew(-10deg, -5deg)` },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "skew-down": {
    in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
    out: { opacity: 0, transform: `translateY(${Q(20)}) skew(-10deg, -5deg)` },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-left": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${Q(20)}) rotate(-5deg)` },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-right": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${Q(20)}) rotate(5deg)` },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "slide-down": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: "translateY(-100%)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "slide-up": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: "translateY(100%)" },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "slide-left": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: "translateX(100%)" },
    common: { transformOrigin: "left" },
    transitionProperty: "transform, opacity"
  },
  "slide-right": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: "translateX(-100%)" },
    common: { transformOrigin: "right" },
    transitionProperty: "transform, opacity"
  },
  pop: {
    ...Si("bottom"),
    common: { transformOrigin: "center center" }
  },
  "pop-bottom-left": {
    ...Si("bottom"),
    common: { transformOrigin: "bottom left" }
  },
  "pop-bottom-right": {
    ...Si("bottom"),
    common: { transformOrigin: "bottom right" }
  },
  "pop-top-left": {
    ...Si("top"),
    common: { transformOrigin: "top left" }
  },
  "pop-top-right": {
    ...Si("top"),
    common: { transformOrigin: "top right" }
  }
}, iy = {
  entering: "in",
  entered: "in",
  exiting: "out",
  exited: "out",
  "pre-exiting": "out",
  "pre-entering": "out"
};
function Cx({
  transition: l,
  state: o,
  duration: s,
  timingFunction: r
}) {
  const u = {
    transitionDuration: `${s}ms`,
    transitionTimingFunction: r
  };
  return typeof l == "string" ? l in Gr ? {
    transitionProperty: Gr[l].transitionProperty,
    ...u,
    ...Gr[l].common,
    ...Gr[l][iy[o]]
  } : {} : {
    transitionProperty: l.transitionProperty,
    ...u,
    ...l.common,
    ...l[iy[o]]
  };
}
function Rx({
  duration: l,
  exitDuration: o,
  timingFunction: s,
  mounted: r,
  onEnter: u,
  onExit: f,
  onEntered: d,
  onExited: p,
  enterDelay: y,
  exitDelay: h
}) {
  const g = Sn(), S = Bb(), b = g.respectReducedMotion ? S : !1, [x, R] = E.useState(b ? 0 : l), [_, M] = E.useState(r ? "entered" : "exited"), j = E.useRef(-1), B = E.useRef(-1), H = E.useRef(-1), $ = (k) => {
    const W = k ? u : f, J = k ? d : p;
    window.clearTimeout(j.current);
    const Z = b ? 0 : k ? l : o;
    R(Z), Z === 0 ? (typeof W == "function" && W(), typeof J == "function" && J(), M(k ? "entered" : "exited")) : H.current = requestAnimationFrame(() => {
      F1.flushSync(() => {
        M(k ? "pre-entering" : "pre-exiting");
      }), H.current = requestAnimationFrame(() => {
        typeof W == "function" && W(), M(k ? "entering" : "exiting"), j.current = window.setTimeout(() => {
          typeof J == "function" && J(), M(k ? "entered" : "exited");
        }, Z);
      });
    });
  }, q = (k) => {
    if (window.clearTimeout(B.current), typeof (k ? y : h) != "number") {
      $(k);
      return;
    }
    B.current = window.setTimeout(
      () => {
        $(k);
      },
      k ? y : h
    );
  };
  return oa(() => {
    q(r);
  }, [r]), E.useEffect(
    () => () => {
      window.clearTimeout(j.current), cancelAnimationFrame(H.current);
    },
    []
  ), {
    transitionDuration: x,
    transitionStatus: _,
    transitionTimingFunction: s || "ease"
  };
}
function ds({
  keepMounted: l,
  transition: o = "fade",
  duration: s = 250,
  exitDuration: r = s,
  mounted: u,
  children: f,
  timingFunction: d = "ease",
  onExit: p,
  onEntered: y,
  onEnter: h,
  onExited: g,
  enterDelay: S,
  exitDelay: b
}) {
  const { transitionDuration: x, transitionStatus: R, transitionTimingFunction: _ } = Rx({
    mounted: u,
    exitDuration: r,
    duration: s,
    timingFunction: d,
    onExit: p,
    onEntered: y,
    onEnter: h,
    onExited: g,
    enterDelay: S,
    exitDelay: b
  });
  return x === 0 ? u ? /* @__PURE__ */ w.jsx(w.Fragment, { children: f({}) }) : l ? f({ display: "none" }) : null : R === "exited" ? l ? f({ display: "none" }) : null : /* @__PURE__ */ w.jsx(w.Fragment, { children: f(
    Cx({
      transition: o,
      duration: x,
      state: R,
      timingFunction: _
    })
  ) });
}
ds.displayName = "@mantine/core/Transition";
var pv = { dropdown: "m_38a85659", arrow: "m_a31dc6c1" };
const Ax = {}, Sf = Tt((l, o) => {
  const s = st("PopoverDropdown", Ax, l), {
    className: r,
    style: u,
    vars: f,
    children: d,
    onKeyDownCapture: p,
    variant: y,
    classNames: h,
    styles: g,
    ...S
  } = s, b = uv(), x = Db({
    opened: b.opened,
    shouldReturnFocus: b.returnFocus
  }), R = b.withRoles ? {
    "aria-labelledby": b.getTargetId(),
    id: b.getDropdownId(),
    role: "dialog",
    tabIndex: -1
  } : {}, _ = ue(o, b.floating);
  return b.disabled ? null : /* @__PURE__ */ w.jsx(mv, { ...b.portalProps, withinPortal: b.withinPortal, children: /* @__PURE__ */ w.jsx(
    ds,
    {
      mounted: b.opened,
      ...b.transitionProps,
      transition: b.transitionProps?.transition || "fade",
      duration: b.transitionProps?.duration ?? 150,
      keepMounted: b.keepMounted,
      exitDuration: typeof b.transitionProps?.exitDuration == "number" ? b.transitionProps.exitDuration : b.transitionProps?.duration,
      children: (M) => /* @__PURE__ */ w.jsx(bf, { active: b.trapFocus && b.opened, innerRef: _, children: /* @__PURE__ */ w.jsxs(
        pt,
        {
          ...R,
          ...S,
          variant: y,
          onKeyDownCapture: bb(b.onClose, {
            active: b.closeOnEscape,
            onTrigger: x,
            onKeyDown: p
          }),
          "data-position": b.placement,
          "data-fixed": b.floatingStrategy === "fixed" || void 0,
          ...b.getStyles("dropdown", {
            className: r,
            props: s,
            classNames: h,
            styles: g,
            style: [
              {
                ...M,
                zIndex: b.zIndex,
                top: b.y ?? 0,
                left: b.x ?? 0,
                width: b.width === "target" ? void 0 : Q(b.width)
              },
              b.resolvedStyles.dropdown,
              g?.dropdown,
              u
            ]
          }),
          children: [
            d,
            /* @__PURE__ */ w.jsx(
              cv,
              {
                ref: b.arrowRef,
                arrowX: b.arrowX,
                arrowY: b.arrowY,
                visible: b.withArrow,
                position: b.placement,
                arrowSize: b.arrowSize,
                arrowRadius: b.arrowRadius,
                arrowOffset: b.arrowOffset,
                arrowPosition: b.arrowPosition,
                ...b.getStyles("arrow", {
                  props: s,
                  classNames: h,
                  styles: g
                })
              }
            )
          ]
        }
      ) })
    }
  ) });
});
Sf.classes = pv;
Sf.displayName = "@mantine/core/PopoverDropdown";
const Dx = {
  refProp: "ref",
  popupType: "dialog"
}, hv = Tt((l, o) => {
  const { children: s, refProp: r, popupType: u, ...f } = st(
    "PopoverTarget",
    Dx,
    l
  );
  if (!oo(s))
    throw new Error(
      "Popover.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const d = f, p = uv(), y = ue(p.reference, Ey(s), o), h = p.withRoles ? {
    "aria-haspopup": u,
    "aria-expanded": p.opened,
    "aria-controls": p.getDropdownId(),
    id: p.getTargetId()
  } : {};
  return E.cloneElement(s, {
    ...d,
    ...h,
    ...p.targetProps,
    className: el(p.targetProps.className, d.className, s.props.className),
    [r]: y,
    ...p.controlled ? null : { onClick: p.onToggle }
  });
});
hv.displayName = "@mantine/core/PopoverTarget";
function Ox({
  opened: l,
  floating: o,
  position: s,
  positionDependencies: r
}) {
  const [u, f] = E.useState(0);
  E.useEffect(() => {
    if (o.refs.reference.current && o.refs.floating.current && l)
      return kS(
        o.refs.reference.current,
        o.refs.floating.current,
        o.update
      );
  }, [
    o.refs.reference.current,
    o.refs.floating.current,
    l,
    u,
    s
  ]), oa(() => {
    o.update();
  }, r), oa(() => {
    f((d) => d + 1);
  }, [l]);
}
function _x(l) {
  if (l === void 0)
    return { shift: !0, flip: !0 };
  const o = { ...l };
  return l.shift === void 0 && (o.shift = !0), l.flip === void 0 && (o.flip = !0), o;
}
function Mx(l, o) {
  const s = _x(l.middlewares), r = [ex(l.offset)];
  return s.shift && r.push(
    nx(
      typeof s.shift == "boolean" ? { limiter: Ih(), padding: 5 } : { limiter: Ih(), padding: 5, ...s.shift }
    )
  ), s.flip && r.push(
    typeof s.flip == "boolean" ? ty() : ty(s.flip)
  ), s.inline && r.push(
    typeof s.inline == "boolean" ? ey() : ey(s.inline)
  ), r.push(ax({ element: l.arrowRef, padding: l.arrowOffset })), (s.size || l.width === "target") && r.push(
    lx({
      ...typeof s.size == "boolean" ? {} : s.size,
      apply({ rects: u, availableWidth: f, availableHeight: d, ...p }) {
        const h = o().refs.floating.current?.style ?? {};
        s.size && (typeof s.size == "object" && s.size.apply ? s.size.apply({ rects: u, availableWidth: f, availableHeight: d, ...p }) : Object.assign(h, {
          maxWidth: `${f}px`,
          maxHeight: `${d}px`
        })), l.width === "target" && Object.assign(h, {
          width: `${u.reference.width}px`
        });
      }
    })
  ), r;
}
function zx(l) {
  const [o, s] = Al({
    value: l.opened,
    defaultValue: l.defaultOpened,
    finalValue: !1,
    onChange: l.onChange
  }), r = E.useRef(o), u = () => {
    o && s(!1);
  }, f = () => s(!o), d = gx({
    strategy: l.strategy,
    placement: l.position,
    middleware: Mx(l, () => d)
  });
  return Ox({
    opened: o,
    position: l.position,
    positionDependencies: l.positionDependencies || [],
    floating: d
  }), oa(() => {
    l.onPositionChange?.(d.placement);
  }, [d.placement]), oa(() => {
    o !== r.current && (o ? l.onOpen?.() : l.onClose?.()), r.current = o;
  }, [o, l.onClose, l.onOpen]), {
    floating: d,
    controlled: typeof l.opened == "boolean",
    opened: o,
    onClose: u,
    onToggle: f
  };
}
const Nx = {
  position: "bottom",
  offset: 8,
  positionDependencies: [],
  transitionProps: { transition: "fade", duration: 150 },
  middlewares: { flip: !0, shift: !0, inline: !1 },
  arrowSize: 7,
  arrowOffset: 5,
  arrowRadius: 0,
  arrowPosition: "side",
  closeOnClickOutside: !0,
  withinPortal: !0,
  closeOnEscape: !0,
  trapFocus: !1,
  withRoles: !0,
  returnFocus: !1,
  clickOutsideEvents: ["mousedown", "touchstart"],
  zIndex: vb("popover"),
  __staticSelector: "Popover",
  width: "max-content"
}, jx = (l, { radius: o, shadow: s }) => ({
  dropdown: {
    "--popover-radius": o === void 0 ? void 0 : ca(o),
    "--popover-shadow": Sb(s)
  }
});
function xn(l) {
  const o = st("Popover", Nx, l), {
    children: s,
    position: r,
    offset: u,
    onPositionChange: f,
    positionDependencies: d,
    opened: p,
    transitionProps: y,
    onExitTransitionEnd: h,
    onEnterTransitionEnd: g,
    width: S,
    middlewares: b,
    withArrow: x,
    arrowSize: R,
    arrowOffset: _,
    arrowRadius: M,
    arrowPosition: j,
    unstyled: B,
    classNames: H,
    styles: $,
    closeOnClickOutside: q,
    withinPortal: k,
    portalProps: W,
    closeOnEscape: J,
    clickOutsideEvents: Z,
    trapFocus: P,
    onClose: it,
    onOpen: ct,
    onChange: dt,
    zIndex: ot,
    radius: ft,
    shadow: U,
    id: F,
    defaultOpened: V,
    __staticSelector: et,
    withRoles: C,
    disabled: G,
    returnFocus: lt,
    variant: nt,
    keepMounted: I,
    vars: ht,
    floatingStrategy: tt,
    ...Nt
  } = o, bt = Ht({
    name: et,
    props: o,
    classes: pv,
    classNames: H,
    styles: $,
    unstyled: B,
    rootSelector: "dropdown",
    vars: ht,
    varsResolver: jx
  }), { resolvedStyles: zt } = os({ classNames: H, styles: $, props: o }), Ot = E.useRef(null), [ae, ze] = E.useState(null), [be, Ve] = E.useState(null), { dir: Ne } = is(), fe = ro(F), Vt = zx({
    middlewares: b,
    width: S,
    position: bx(Ne, r),
    offset: typeof u == "number" ? u + (x ? R / 2 : 0) : u,
    arrowRef: Ot,
    arrowOffset: _,
    onPositionChange: f,
    positionDependencies: d,
    opened: p,
    defaultOpened: V,
    onChange: dt,
    onOpen: ct,
    onClose: it,
    strategy: tt
  });
  Eb(() => q && Vt.onClose(), Z, [
    ae,
    be
  ]);
  const Ge = E.useCallback(
    (un) => {
      ze(un), Vt.floating.refs.setReference(un);
    },
    [Vt.floating.refs.setReference]
  ), It = E.useCallback(
    (un) => {
      Ve(un), Vt.floating.refs.setFloating(un);
    },
    [Vt.floating.refs.setFloating]
  ), sn = E.useCallback(() => {
    y?.onExited?.(), h?.();
  }, [y?.onExited, h]), cn = E.useCallback(() => {
    y?.onEntered?.(), g?.();
  }, [y?.onEntered, g]);
  return /* @__PURE__ */ w.jsx(
    wx,
    {
      value: {
        returnFocus: lt,
        disabled: G,
        controlled: Vt.controlled,
        reference: Ge,
        floating: It,
        x: Vt.floating.x,
        y: Vt.floating.y,
        arrowX: Vt.floating?.middlewareData?.arrow?.x,
        arrowY: Vt.floating?.middlewareData?.arrow?.y,
        opened: Vt.opened,
        arrowRef: Ot,
        transitionProps: { ...y, onExited: sn, onEntered: cn },
        width: S,
        withArrow: x,
        arrowSize: R,
        arrowOffset: _,
        arrowRadius: M,
        arrowPosition: j,
        placement: Vt.floating.placement,
        trapFocus: P,
        withinPortal: k,
        portalProps: W,
        zIndex: ot,
        radius: ft,
        shadow: U,
        closeOnEscape: J,
        onClose: Vt.onClose,
        onToggle: Vt.onToggle,
        getTargetId: () => `${fe}-target`,
        getDropdownId: () => `${fe}-dropdown`,
        withRoles: C,
        targetProps: Nt,
        __staticSelector: et,
        classNames: H,
        styles: $,
        unstyled: B,
        variant: nt,
        keepMounted: I,
        getStyles: bt,
        resolvedStyles: zt,
        floatingStrategy: tt
      },
      children: s
    }
  );
}
xn.Target = hv;
xn.Dropdown = Sf;
xn.displayName = "@mantine/core/Popover";
xn.extend = (l) => l;
var yn = { root: "m_5ae2e3c", barsLoader: "m_7a2bd4cd", bar: "m_870bb79", "bars-loader-animation": "m_5d2b3b9d", dotsLoader: "m_4e3f22d7", dot: "m_870c4af", "loader-dots-animation": "m_aac34a1", ovalLoader: "m_b34414df", "oval-loader-animation": "m_f8e89c4b" };
const yv = E.forwardRef(({ className: l, ...o }, s) => /* @__PURE__ */ w.jsxs(pt, { component: "span", className: el(yn.barsLoader, l), ...o, ref: s, children: [
  /* @__PURE__ */ w.jsx("span", { className: yn.bar }),
  /* @__PURE__ */ w.jsx("span", { className: yn.bar }),
  /* @__PURE__ */ w.jsx("span", { className: yn.bar })
] }));
yv.displayName = "@mantine/core/Bars";
const vv = E.forwardRef(({ className: l, ...o }, s) => /* @__PURE__ */ w.jsxs(pt, { component: "span", className: el(yn.dotsLoader, l), ...o, ref: s, children: [
  /* @__PURE__ */ w.jsx("span", { className: yn.dot }),
  /* @__PURE__ */ w.jsx("span", { className: yn.dot }),
  /* @__PURE__ */ w.jsx("span", { className: yn.dot })
] }));
vv.displayName = "@mantine/core/Dots";
const gv = E.forwardRef(({ className: l, ...o }, s) => /* @__PURE__ */ w.jsx(pt, { component: "span", className: el(yn.ovalLoader, l), ...o, ref: s }));
gv.displayName = "@mantine/core/Oval";
const bv = {
  bars: yv,
  oval: gv,
  dots: vv
}, Hx = {
  loaders: bv,
  type: "oval"
}, Ux = (l, { size: o, color: s }) => ({
  root: {
    "--loader-size": le(o, "loader-size"),
    "--loader-color": s ? la(s, l) : void 0
  }
}), Di = Tt((l, o) => {
  const s = st("Loader", Hx, l), {
    size: r,
    color: u,
    type: f,
    vars: d,
    className: p,
    style: y,
    classNames: h,
    styles: g,
    unstyled: S,
    loaders: b,
    variant: x,
    children: R,
    ..._
  } = s, M = Ht({
    name: "Loader",
    props: s,
    classes: yn,
    className: p,
    style: y,
    classNames: h,
    styles: g,
    unstyled: S,
    vars: d,
    varsResolver: Ux
  });
  return R ? /* @__PURE__ */ w.jsx(pt, { ...M("root"), ref: o, ..._, children: R }) : /* @__PURE__ */ w.jsx(
    pt,
    {
      ...M("root"),
      ref: o,
      component: b[f],
      variant: x,
      size: r,
      ..._
    }
  );
});
Di.defaultLoaders = bv;
Di.classes = yn;
Di.displayName = "@mantine/core/Loader";
var ms = { root: "m_8d3f4000", icon: "m_8d3afb97", loader: "m_302b9fb1", group: "m_1a0f1b21" };
const ry = {
  orientation: "horizontal"
}, $x = (l, { borderWidth: o }) => ({
  group: { "--ai-border-width": Q(o) }
}), xf = Tt((l, o) => {
  const s = st("ActionIconGroup", ry, l), {
    className: r,
    style: u,
    classNames: f,
    styles: d,
    unstyled: p,
    orientation: y,
    vars: h,
    borderWidth: g,
    variant: S,
    mod: b,
    ...x
  } = st("ActionIconGroup", ry, l), R = Ht({
    name: "ActionIconGroup",
    props: s,
    classes: ms,
    className: r,
    style: u,
    classNames: f,
    styles: d,
    unstyled: p,
    vars: h,
    varsResolver: $x,
    rootSelector: "group"
  });
  return /* @__PURE__ */ w.jsx(
    pt,
    {
      ...R("group"),
      ref: o,
      variant: S,
      mod: [{ "data-orientation": y }, b],
      role: "group",
      ...x
    }
  );
});
xf.classes = ms;
xf.displayName = "@mantine/core/ActionIconGroup";
const Bx = {}, Lx = (l, { size: o, radius: s, variant: r, gradient: u, color: f, autoContrast: d }) => {
  const p = l.variantColorResolver({
    color: f || l.primaryColor,
    theme: l,
    gradient: u,
    variant: r || "filled",
    autoContrast: d
  });
  return {
    root: {
      "--ai-size": le(o, "ai-size"),
      "--ai-radius": s === void 0 ? void 0 : ca(s),
      "--ai-bg": f || r ? p.background : void 0,
      "--ai-hover": f || r ? p.hover : void 0,
      "--ai-hover-color": f || r ? p.hoverColor : void 0,
      "--ai-color": p.color,
      "--ai-bd": f || r ? p.border : void 0
    }
  };
}, Ei = Ol((l, o) => {
  const s = st("ActionIcon", Bx, l), {
    className: r,
    unstyled: u,
    variant: f,
    classNames: d,
    styles: p,
    style: y,
    loading: h,
    loaderProps: g,
    size: S,
    color: b,
    radius: x,
    __staticSelector: R,
    gradient: _,
    vars: M,
    children: j,
    disabled: B,
    "data-disabled": H,
    autoContrast: $,
    mod: q,
    ...k
  } = s, W = Ht({
    name: ["ActionIcon", R],
    props: s,
    className: r,
    style: y,
    classes: ms,
    classNames: d,
    styles: p,
    unstyled: u,
    vars: M,
    varsResolver: Lx
  });
  return /* @__PURE__ */ w.jsxs(
    uo,
    {
      ...W("root", { active: !B && !h && !H }),
      ...k,
      unstyled: u,
      variant: f,
      size: S,
      disabled: B || h,
      ref: o,
      mod: [{ loading: h, disabled: B || H }, q],
      children: [
        /* @__PURE__ */ w.jsx(ds, { mounted: !!h, transition: "slide-down", duration: 150, children: (J) => /* @__PURE__ */ w.jsx(pt, { component: "span", ...W("loader", { style: J }), "aria-hidden": !0, children: /* @__PURE__ */ w.jsx(Di, { color: "var(--ai-color)", size: "calc(var(--ai-size) * 0.55)", ...g }) }) }),
        /* @__PURE__ */ w.jsx(pt, { component: "span", mod: { loading: h }, ...W("icon"), children: j })
      ]
    }
  );
});
Ei.classes = ms;
Ei.displayName = "@mantine/core/ActionIcon";
Ei.Group = xf;
const Sv = E.forwardRef(
  ({ size: l = "var(--cb-icon-size, 70%)", style: o, ...s }, r) => /* @__PURE__ */ w.jsx(
    "svg",
    {
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: { ...o, width: l, height: l },
      ref: r,
      ...s,
      children: /* @__PURE__ */ w.jsx(
        "path",
        {
          d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
          fill: "currentColor",
          fillRule: "evenodd",
          clipRule: "evenodd"
        }
      )
    }
  )
);
Sv.displayName = "@mantine/core/CloseIcon";
var xv = { root: "m_86a44da5", "root--subtle": "m_220c80f2" };
const Yx = {
  variant: "subtle"
}, qx = (l, { size: o, radius: s, iconSize: r }) => ({
  root: {
    "--cb-size": le(o, "cb-size"),
    "--cb-radius": s === void 0 ? void 0 : ca(s),
    "--cb-icon-size": Q(r)
  }
}), ps = Ol((l, o) => {
  const s = st("CloseButton", Yx, l), {
    iconSize: r,
    children: u,
    vars: f,
    radius: d,
    className: p,
    classNames: y,
    style: h,
    styles: g,
    unstyled: S,
    "data-disabled": b,
    disabled: x,
    variant: R,
    icon: _,
    mod: M,
    ...j
  } = s, B = Ht({
    name: "CloseButton",
    props: s,
    className: p,
    style: h,
    classes: xv,
    classNames: y,
    styles: g,
    unstyled: S,
    vars: f,
    varsResolver: qx
  });
  return /* @__PURE__ */ w.jsxs(
    uo,
    {
      ref: o,
      ...j,
      unstyled: S,
      variant: R,
      disabled: x,
      mod: [{ disabled: x || b }, M],
      ...B("root", { variant: R, active: !x && !b }),
      children: [
        _ || /* @__PURE__ */ w.jsx(Sv, {}),
        u
      ]
    }
  );
});
ps.classes = xv;
ps.displayName = "@mantine/core/CloseButton";
const [Vx, Oi] = Fu({
  offsetBottom: !1,
  offsetTop: !1,
  describedBy: void 0,
  getStyles: null,
  inputId: void 0,
  labelId: void 0
});
var on = { wrapper: "m_6c018570", input: "m_8fb7ebe7", section: "m_82577fc2", placeholder: "m_88bacfd0", root: "m_46b77525", label: "m_8fdc1311", required: "m_78a94662", error: "m_8f816625", description: "m_fe47ce59" };
const sy = {}, Gx = (l, { size: o }) => ({
  description: {
    "--input-description-size": o === void 0 ? void 0 : `calc(${nn(o)} - ${Q(2)})`
  }
}), hs = Tt((l, o) => {
  const s = st("InputDescription", sy, l), {
    classNames: r,
    className: u,
    style: f,
    styles: d,
    unstyled: p,
    vars: y,
    size: h,
    __staticSelector: g,
    __inheritStyles: S = !0,
    variant: b,
    ...x
  } = st("InputDescription", sy, s), R = Oi(), _ = Ht({
    name: ["InputWrapper", g],
    props: s,
    classes: on,
    className: u,
    style: f,
    classNames: r,
    styles: d,
    unstyled: p,
    rootSelector: "description",
    vars: y,
    varsResolver: Gx
  }), M = S && R?.getStyles || _;
  return /* @__PURE__ */ w.jsx(
    pt,
    {
      component: "p",
      ref: o,
      variant: b,
      size: h,
      ...M("description", R?.getStyles ? { className: u, style: f } : void 0),
      ...x
    }
  );
});
hs.classes = on;
hs.displayName = "@mantine/core/InputDescription";
const Xx = {}, kx = (l, { size: o }) => ({
  error: {
    "--input-error-size": o === void 0 ? void 0 : `calc(${nn(o)} - ${Q(2)})`
  }
}), ys = Tt((l, o) => {
  const s = st("InputError", Xx, l), {
    classNames: r,
    className: u,
    style: f,
    styles: d,
    unstyled: p,
    vars: y,
    size: h,
    __staticSelector: g,
    __inheritStyles: S = !0,
    variant: b,
    ...x
  } = s, R = Ht({
    name: ["InputWrapper", g],
    props: s,
    classes: on,
    className: u,
    style: f,
    classNames: r,
    styles: d,
    unstyled: p,
    rootSelector: "error",
    vars: y,
    varsResolver: kx
  }), _ = Oi(), M = S && _?.getStyles || R;
  return /* @__PURE__ */ w.jsx(
    pt,
    {
      component: "p",
      ref: o,
      variant: b,
      size: h,
      ...M("error", _?.getStyles ? { className: u, style: f } : void 0),
      ...x
    }
  );
});
ys.classes = on;
ys.displayName = "@mantine/core/InputError";
const cy = {
  labelElement: "label"
}, Qx = (l, { size: o }) => ({
  label: {
    "--input-label-size": nn(o),
    "--input-asterisk-color": void 0
  }
}), vs = Tt((l, o) => {
  const s = st("InputLabel", cy, l), {
    classNames: r,
    className: u,
    style: f,
    styles: d,
    unstyled: p,
    vars: y,
    labelElement: h,
    size: g,
    required: S,
    htmlFor: b,
    onMouseDown: x,
    children: R,
    __staticSelector: _,
    variant: M,
    mod: j,
    ...B
  } = st("InputLabel", cy, s), H = Ht({
    name: ["InputWrapper", _],
    props: s,
    classes: on,
    className: u,
    style: f,
    classNames: r,
    styles: d,
    unstyled: p,
    rootSelector: "label",
    vars: y,
    varsResolver: Qx
  }), $ = Oi(), q = $?.getStyles || H;
  return /* @__PURE__ */ w.jsxs(
    pt,
    {
      ...q("label", $?.getStyles ? { className: u, style: f } : void 0),
      component: h,
      variant: M,
      size: g,
      ref: o,
      htmlFor: h === "label" ? b : void 0,
      mod: [{ required: S }, j],
      onMouseDown: (k) => {
        x?.(k), !k.defaultPrevented && k.detail > 1 && k.preventDefault();
      },
      ...B,
      children: [
        R,
        S && /* @__PURE__ */ w.jsx("span", { ...q("required"), "aria-hidden": !0, children: " *" })
      ]
    }
  );
});
vs.classes = on;
vs.displayName = "@mantine/core/InputLabel";
const uy = {}, wf = Tt((l, o) => {
  const s = st("InputPlaceholder", uy, l), {
    classNames: r,
    className: u,
    style: f,
    styles: d,
    unstyled: p,
    vars: y,
    __staticSelector: h,
    variant: g,
    error: S,
    mod: b,
    ...x
  } = st("InputPlaceholder", uy, s), R = Ht({
    name: ["InputPlaceholder", h],
    props: s,
    classes: on,
    className: u,
    style: f,
    classNames: r,
    styles: d,
    unstyled: p,
    rootSelector: "placeholder"
  });
  return /* @__PURE__ */ w.jsx(
    pt,
    {
      ...R("placeholder"),
      mod: [{ error: !!S }, b],
      component: "span",
      variant: g,
      ref: o,
      ...x
    }
  );
});
wf.classes = on;
wf.displayName = "@mantine/core/InputPlaceholder";
function Zx(l, { hasDescription: o, hasError: s }) {
  const r = l.findIndex((y) => y === "input"), u = l.slice(0, r), f = l.slice(r + 1), d = o && u.includes("description") || s && u.includes("error");
  return { offsetBottom: o && f.includes("description") || s && f.includes("error"), offsetTop: d };
}
const Kx = {
  labelElement: "label",
  inputContainer: (l) => l,
  inputWrapperOrder: ["label", "description", "input", "error"]
}, Jx = (l, { size: o }) => ({
  label: {
    "--input-label-size": nn(o),
    "--input-asterisk-color": void 0
  },
  error: {
    "--input-error-size": o === void 0 ? void 0 : `calc(${nn(o)} - ${Q(2)})`
  },
  description: {
    "--input-description-size": o === void 0 ? void 0 : `calc(${nn(o)} - ${Q(2)})`
  }
}), Tf = Tt((l, o) => {
  const s = st("InputWrapper", Kx, l), {
    classNames: r,
    className: u,
    style: f,
    styles: d,
    unstyled: p,
    vars: y,
    size: h,
    variant: g,
    __staticSelector: S,
    inputContainer: b,
    inputWrapperOrder: x,
    label: R,
    error: _,
    description: M,
    labelProps: j,
    descriptionProps: B,
    errorProps: H,
    labelElement: $,
    children: q,
    withAsterisk: k,
    id: W,
    required: J,
    __stylesApiProps: Z,
    mod: P,
    ...it
  } = s, ct = Ht({
    name: ["InputWrapper", S],
    props: Z || s,
    classes: on,
    className: u,
    style: f,
    classNames: r,
    styles: d,
    unstyled: p,
    vars: y,
    varsResolver: Jx
  }), dt = {
    size: h,
    variant: g,
    __staticSelector: S
  }, ot = ro(W), ft = typeof k == "boolean" ? k : J, U = H?.id || `${ot}-error`, F = B?.id || `${ot}-description`, V = ot, et = !!_ && typeof _ != "boolean", C = !!M, G = `${et ? U : ""} ${C ? F : ""}`, lt = G.trim().length > 0 ? G.trim() : void 0, nt = j?.id || `${ot}-label`, I = R && /* @__PURE__ */ w.jsx(
    vs,
    {
      labelElement: $,
      id: nt,
      htmlFor: V,
      required: ft,
      ...dt,
      ...j,
      children: R
    },
    "label"
  ), ht = C && /* @__PURE__ */ w.jsx(
    hs,
    {
      ...B,
      ...dt,
      size: B?.size || dt.size,
      id: B?.id || F,
      children: M
    },
    "description"
  ), tt = /* @__PURE__ */ w.jsx(E.Fragment, { children: b(q) }, "input"), Nt = et && /* @__PURE__ */ E.createElement(
    ys,
    {
      ...H,
      ...dt,
      size: H?.size || dt.size,
      key: "error",
      id: H?.id || U
    },
    _
  ), bt = x.map((zt) => {
    switch (zt) {
      case "label":
        return I;
      case "input":
        return tt;
      case "description":
        return ht;
      case "error":
        return Nt;
      default:
        return null;
    }
  });
  return /* @__PURE__ */ w.jsx(
    Vx,
    {
      value: {
        getStyles: ct,
        describedBy: lt,
        inputId: V,
        labelId: nt,
        ...Zx(x, { hasDescription: C, hasError: et })
      },
      children: /* @__PURE__ */ w.jsx(
        pt,
        {
          ref: o,
          variant: g,
          size: h,
          mod: [{ error: !!_ }, P],
          ...ct("root"),
          ...it,
          children: bt
        }
      )
    }
  );
});
Tf.classes = on;
Tf.displayName = "@mantine/core/InputWrapper";
const Px = {
  variant: "default",
  leftSectionPointerEvents: "none",
  rightSectionPointerEvents: "none",
  withAria: !0,
  withErrorStyles: !0
}, Wx = (l, o, s) => ({
  wrapper: {
    "--input-margin-top": s.offsetTop ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
    "--input-margin-bottom": s.offsetBottom ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
    "--input-height": le(o.size, "input-height"),
    "--input-fz": nn(o.size),
    "--input-radius": o.radius === void 0 ? void 0 : ca(o.radius),
    "--input-left-section-width": o.leftSectionWidth !== void 0 ? Q(o.leftSectionWidth) : void 0,
    "--input-right-section-width": o.rightSectionWidth !== void 0 ? Q(o.rightSectionWidth) : void 0,
    "--input-padding-y": o.multiline ? le(o.size, "input-padding-y") : void 0,
    "--input-left-section-pointer-events": o.leftSectionPointerEvents,
    "--input-right-section-pointer-events": o.rightSectionPointerEvents
  }
}), ln = Ol((l, o) => {
  const s = st("Input", Px, l), {
    classNames: r,
    className: u,
    style: f,
    styles: d,
    unstyled: p,
    required: y,
    __staticSelector: h,
    __stylesApiProps: g,
    size: S,
    wrapperProps: b,
    error: x,
    disabled: R,
    leftSection: _,
    leftSectionProps: M,
    leftSectionWidth: j,
    rightSection: B,
    rightSectionProps: H,
    rightSectionWidth: $,
    rightSectionPointerEvents: q,
    leftSectionPointerEvents: k,
    variant: W,
    vars: J,
    pointer: Z,
    multiline: P,
    radius: it,
    id: ct,
    withAria: dt,
    withErrorStyles: ot,
    mod: ft,
    inputSize: U,
    ...F
  } = s, { styleProps: V, rest: et } = Ri(F), C = Oi(), G = { offsetBottom: C?.offsetBottom, offsetTop: C?.offsetTop }, lt = Ht({
    name: ["Input", h],
    props: g || s,
    classes: on,
    className: u,
    style: f,
    classNames: r,
    styles: d,
    unstyled: p,
    stylesCtx: G,
    rootSelector: "wrapper",
    vars: J,
    varsResolver: Wx
  }), nt = dt ? {
    required: y,
    disabled: R,
    "aria-invalid": !!x,
    "aria-describedby": C?.describedBy,
    id: C?.inputId || ct
  } : {};
  return /* @__PURE__ */ w.jsxs(
    pt,
    {
      ...lt("wrapper"),
      ...V,
      ...b,
      mod: [
        {
          error: !!x && ot,
          pointer: Z,
          disabled: R,
          multiline: P,
          "data-with-right-section": !!B,
          "data-with-left-section": !!_
        },
        ft
      ],
      variant: W,
      size: S,
      children: [
        _ && /* @__PURE__ */ w.jsx(
          "div",
          {
            ...M,
            "data-position": "left",
            ...lt("section", {
              className: M?.className,
              style: M?.style
            }),
            children: _
          }
        ),
        /* @__PURE__ */ w.jsx(
          pt,
          {
            component: "input",
            ...et,
            ...nt,
            ref: o,
            required: y,
            mod: { disabled: R, error: !!x && ot },
            variant: W,
            __size: U,
            ...lt("input")
          }
        ),
        B && /* @__PURE__ */ w.jsx(
          "div",
          {
            ...H,
            "data-position": "right",
            ...lt("section", {
              className: H?.className,
              style: H?.style
            }),
            children: B
          }
        )
      ]
    }
  );
});
ln.classes = on;
ln.Wrapper = Tf;
ln.Label = vs;
ln.Error = ys;
ln.Description = hs;
ln.Placeholder = wf;
ln.displayName = "@mantine/core/Input";
function Fx(l, o, s) {
  const r = st(l, o, s), {
    label: u,
    description: f,
    error: d,
    required: p,
    classNames: y,
    styles: h,
    className: g,
    unstyled: S,
    __staticSelector: b,
    __stylesApiProps: x,
    errorProps: R,
    labelProps: _,
    descriptionProps: M,
    wrapperProps: j,
    id: B,
    size: H,
    style: $,
    inputContainer: q,
    inputWrapperOrder: k,
    withAsterisk: W,
    variant: J,
    vars: Z,
    mod: P,
    ...it
  } = r, { styleProps: ct, rest: dt } = Ri(it), ot = {
    label: u,
    description: f,
    error: d,
    required: p,
    classNames: y,
    className: g,
    __staticSelector: b,
    __stylesApiProps: x || r,
    errorProps: R,
    labelProps: _,
    descriptionProps: M,
    unstyled: S,
    styles: h,
    size: H,
    style: $,
    inputContainer: q,
    inputWrapperOrder: k,
    withAsterisk: W,
    variant: J,
    id: B,
    mod: P,
    ...j
  };
  return {
    ...dt,
    classNames: y,
    styles: h,
    unstyled: S,
    wrapperProps: { ...ot, ...ct },
    inputProps: {
      required: p,
      classNames: y,
      styles: h,
      unstyled: S,
      size: H,
      __staticSelector: b,
      __stylesApiProps: x || r,
      error: d,
      variant: J,
      id: B
    }
  };
}
const Ix = {
  __staticSelector: "InputBase",
  withAria: !0
}, _i = Ol((l, o) => {
  const { inputProps: s, wrapperProps: r, ...u } = Fx("InputBase", Ix, l);
  return /* @__PURE__ */ w.jsx(ln.Wrapper, { ...r, children: /* @__PURE__ */ w.jsx(ln, { ...s, ...u, ref: o }) });
});
_i.classes = { ...ln.classes, ...ln.Wrapper.classes };
_i.displayName = "@mantine/core/InputBase";
const t2 = {
  gap: { type: "spacing", property: "gap" },
  rowGap: { type: "spacing", property: "rowGap" },
  columnGap: { type: "spacing", property: "columnGap" },
  align: { type: "identity", property: "alignItems" },
  justify: { type: "identity", property: "justifyContent" },
  wrap: { type: "identity", property: "flexWrap" },
  direction: { type: "identity", property: "flexDirection" }
};
var wv = { root: "m_8bffd616" };
const e2 = {}, Ef = Ol((l, o) => {
  const s = st("Flex", e2, l), {
    classNames: r,
    className: u,
    style: f,
    styles: d,
    unstyled: p,
    vars: y,
    gap: h,
    rowGap: g,
    columnGap: S,
    align: b,
    justify: x,
    wrap: R,
    direction: _,
    ...M
  } = s, j = Ht({
    name: "Flex",
    classes: wv,
    props: s,
    className: u,
    style: f,
    classNames: r,
    styles: d,
    unstyled: p,
    vars: y
  }), B = Sn(), H = jy(), $ = Ny({
    styleProps: { gap: h, rowGap: g, columnGap: S, align: b, justify: x, wrap: R, direction: _ },
    theme: B,
    data: t2
  });
  return /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
    $.hasResponsiveStyles && /* @__PURE__ */ w.jsx(
      zy,
      {
        selector: `.${H}`,
        styles: $.styles,
        media: $.media
      }
    ),
    /* @__PURE__ */ w.jsx(
      pt,
      {
        ref: o,
        ...j("root", {
          className: H,
          style: ns($.inlineStyles)
        }),
        ...M
      }
    )
  ] });
});
Ef.classes = wv;
Ef.displayName = "@mantine/core/Flex";
function n2(l, o) {
  if (!o || !l)
    return !1;
  let s = o.parentNode;
  for (; s != null; ) {
    if (s === l)
      return !0;
    s = s.parentNode;
  }
  return !1;
}
function l2({
  target: l,
  parent: o,
  ref: s,
  displayAfterTransitionEnd: r
}) {
  const u = E.useRef(), [f, d] = E.useState(!1), [p, y] = E.useState(
    typeof r == "boolean" ? r : !1
  ), h = () => {
    if (!l || !o)
      return;
    const x = l.getBoundingClientRect(), R = o.getBoundingClientRect(), _ = {
      top: x.top - R.top,
      left: x.left - R.left,
      width: x.width,
      height: x.height
    };
    s.current && (s.current.style.transform = `translateY(${_.top}px) translateX(${_.left}px)`, s.current.style.width = `${_.width}px`, s.current.style.height = `${_.height}px`);
  }, g = () => {
    window.clearTimeout(u.current), s.current && (s.current.style.transitionDuration = "0ms"), h(), u.current = window.setTimeout(() => {
      s.current && (s.current.style.transitionDuration = "");
    }, 30);
  }, S = E.useRef(), b = E.useRef();
  return E.useEffect(() => {
    if (h(), l)
      return S.current = new ResizeObserver(g), S.current.observe(l), o && (b.current = new ResizeObserver(g), b.current.observe(o)), () => {
        S.current?.disconnect(), b.current?.disconnect();
      };
  }, [o, l]), E.useEffect(() => {
    if (o) {
      const x = (R) => {
        n2(R.target, o) && (g(), y(!1));
      };
      return o.addEventListener("transitionend", x), () => {
        o.removeEventListener("transitionend", x);
      };
    }
  }, [o]), Lb(
    () => {
      Vb() !== "test" && d(!0);
    },
    20,
    { autoInvoke: !0 }
  ), Yb(
    (x) => {
      x.forEach((R) => {
        R.type === "attributes" && R.attributeName === "dir" && g();
      });
    },
    { attributes: !0, attributeFilter: ["dir"] },
    () => document.documentElement
  ), { initialized: f, hidden: p };
}
var Tv = { root: "m_96b553a6" };
const a2 = {}, o2 = (l, { transitionDuration: o }) => ({
  root: {
    "--transition-duration": typeof o == "number" ? `${o}ms` : o
  }
}), Cf = Tt((l, o) => {
  const s = st("FloatingIndicator", a2, l), {
    classNames: r,
    className: u,
    style: f,
    styles: d,
    unstyled: p,
    vars: y,
    target: h,
    parent: g,
    transitionDuration: S,
    mod: b,
    displayAfterTransitionEnd: x,
    ...R
  } = s, _ = Ht({
    name: "FloatingIndicator",
    classes: Tv,
    props: s,
    className: u,
    style: f,
    classNames: r,
    styles: d,
    unstyled: p,
    vars: y,
    varsResolver: o2
  }), M = E.useRef(null), { initialized: j, hidden: B } = l2({
    target: h,
    parent: g,
    ref: M,
    displayAfterTransitionEnd: x
  }), H = ue(o, M);
  return !h || !g ? null : /* @__PURE__ */ w.jsx(pt, { ref: H, mod: [{ initialized: j, hidden: B }, b], ..._("root"), ...R });
});
Cf.displayName = "@mantine/core/FloatingIndicator";
Cf.classes = Tv;
function Ev(l) {
  return typeof l == "string" ? { value: l, label: l } : "value" in l && !("label" in l) ? { value: l.value, label: l.value, disabled: l.disabled } : typeof l == "number" ? { value: l.toString(), label: l.toString() } : "group" in l ? {
    group: l.group,
    items: l.items.map((o) => Ev(o))
  } : l;
}
function Cv(l) {
  return l ? l.map((o) => Ev(o)) : [];
}
function Rf(l) {
  return l.reduce((o, s) => "group" in s ? { ...o, ...Rf(s.items) } : (o[s.value] = s, o), {});
}
var Me = { dropdown: "m_88b62a41", search: "m_985517d8", options: "m_b2821a6e", option: "m_92253aa5", empty: "m_2530cd1d", header: "m_858f94bd", footer: "m_82b967cb", group: "m_254f3e4f", groupLabel: "m_2bb2e9e5", chevron: "m_2943220b", optionsDropdownOption: "m_390b5f4", optionsDropdownCheckIcon: "m_8ee53fc2" };
const i2 = {
  error: null
}, r2 = (l, { size: o }) => ({
  chevron: {
    "--combobox-chevron-size": le(o, "combobox-chevron-size")
  }
}), Af = Tt((l, o) => {
  const s = st("ComboboxChevron", i2, l), { size: r, error: u, style: f, className: d, classNames: p, styles: y, unstyled: h, vars: g, mod: S, ...b } = s, x = Ht({
    name: "ComboboxChevron",
    classes: Me,
    props: s,
    style: f,
    className: d,
    classNames: p,
    styles: y,
    unstyled: h,
    vars: g,
    varsResolver: r2,
    rootSelector: "chevron"
  });
  return /* @__PURE__ */ w.jsx(
    pt,
    {
      component: "svg",
      ...b,
      ...x("chevron"),
      size: r,
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      mod: ["combobox-chevron", { error: u }, S],
      ref: o,
      children: /* @__PURE__ */ w.jsx(
        "path",
        {
          d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z",
          fill: "currentColor",
          fillRule: "evenodd",
          clipRule: "evenodd"
        }
      )
    }
  );
});
Af.classes = Me;
Af.displayName = "@mantine/core/ComboboxChevron";
const [s2, rn] = io(
  "Combobox component was not found in tree"
), Rv = E.forwardRef(
  ({ size: l, onMouseDown: o, onClick: s, onClear: r, ...u }, f) => /* @__PURE__ */ w.jsx(
    ps,
    {
      ref: f,
      size: l || "sm",
      variant: "transparent",
      tabIndex: -1,
      "aria-hidden": !0,
      ...u,
      onMouseDown: (d) => {
        d.preventDefault(), o?.(d);
      },
      onClick: (d) => {
        r(), s?.(d);
      }
    }
  )
);
Rv.displayName = "@mantine/core/ComboboxClearButton";
const c2 = {}, Df = Tt((l, o) => {
  const { classNames: s, styles: r, className: u, style: f, hidden: d, ...p } = st(
    "ComboboxDropdown",
    c2,
    l
  ), y = rn();
  return /* @__PURE__ */ w.jsx(
    xn.Dropdown,
    {
      ...p,
      ref: o,
      role: "presentation",
      "data-hidden": d || void 0,
      ...y.getStyles("dropdown", { className: u, style: f, classNames: s, styles: r })
    }
  );
});
Df.classes = Me;
Df.displayName = "@mantine/core/ComboboxDropdown";
const u2 = {
  refProp: "ref"
}, Av = Tt((l, o) => {
  const { children: s, refProp: r } = st("ComboboxDropdownTarget", u2, l);
  if (rn(), !oo(s))
    throw new Error(
      "Combobox.DropdownTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  return /* @__PURE__ */ w.jsx(xn.Target, { ref: o, refProp: r, children: s });
});
Av.displayName = "@mantine/core/ComboboxDropdownTarget";
const f2 = {}, Of = Tt((l, o) => {
  const { classNames: s, className: r, style: u, styles: f, vars: d, ...p } = st(
    "ComboboxEmpty",
    f2,
    l
  ), y = rn();
  return /* @__PURE__ */ w.jsx(
    pt,
    {
      ref: o,
      ...y.getStyles("empty", { className: r, classNames: s, styles: f, style: u }),
      ...p
    }
  );
});
Of.classes = Me;
Of.displayName = "@mantine/core/ComboboxEmpty";
function _f({
  onKeyDown: l,
  withKeyboardNavigation: o,
  withAriaAttributes: s,
  withExpandedAttribute: r,
  targetType: u,
  autoComplete: f
}) {
  const d = rn(), [p, y] = E.useState(null), h = (S) => {
    if (l?.(S), !d.readOnly && o) {
      if (S.nativeEvent.isComposing)
        return;
      if (S.nativeEvent.code === "ArrowDown" && (S.preventDefault(), d.store.dropdownOpened ? y(d.store.selectNextOption()) : (d.store.openDropdown("keyboard"), y(d.store.selectActiveOption()), d.store.updateSelectedOptionIndex("selected", { scrollIntoView: !0 }))), S.nativeEvent.code === "ArrowUp" && (S.preventDefault(), d.store.dropdownOpened ? y(d.store.selectPreviousOption()) : (d.store.openDropdown("keyboard"), y(d.store.selectActiveOption()), d.store.updateSelectedOptionIndex("selected", { scrollIntoView: !0 }))), S.nativeEvent.code === "Enter" || S.nativeEvent.code === "NumpadEnter") {
        if (S.nativeEvent.keyCode === 229)
          return;
        const b = d.store.getSelectedOptionIndex();
        d.store.dropdownOpened && b !== -1 ? (S.preventDefault(), d.store.clickSelectedOption()) : u === "button" && (S.preventDefault(), d.store.openDropdown("keyboard"));
      }
      S.nativeEvent.code === "Escape" && d.store.closeDropdown("keyboard"), S.nativeEvent.code === "Space" && u === "button" && (S.preventDefault(), d.store.toggleDropdown("keyboard"));
    }
  };
  return {
    ...s ? {
      "aria-haspopup": "listbox",
      "aria-expanded": r && !!(d.store.listId && d.store.dropdownOpened) || void 0,
      "aria-controls": d.store.dropdownOpened ? d.store.listId : void 0,
      "aria-activedescendant": d.store.dropdownOpened && p || void 0,
      autoComplete: f,
      "data-expanded": d.store.dropdownOpened || void 0,
      "data-mantine-stop-propagation": d.store.dropdownOpened || void 0
    } : {},
    onKeyDown: h
  };
}
const d2 = {
  refProp: "ref",
  targetType: "input",
  withKeyboardNavigation: !0,
  withAriaAttributes: !0,
  withExpandedAttribute: !1,
  autoComplete: "off"
}, Dv = Tt((l, o) => {
  const {
    children: s,
    refProp: r,
    withKeyboardNavigation: u,
    withAriaAttributes: f,
    withExpandedAttribute: d,
    targetType: p,
    autoComplete: y,
    ...h
  } = st("ComboboxEventsTarget", d2, l);
  if (!oo(s))
    throw new Error(
      "Combobox.EventsTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const g = rn(), S = _f({
    targetType: p,
    withAriaAttributes: f,
    withKeyboardNavigation: u,
    withExpandedAttribute: d,
    onKeyDown: s.props.onKeyDown,
    autoComplete: y
  });
  return E.cloneElement(s, {
    ...S,
    ...h,
    [r]: ue(o, g.store.targetRef, Ey(s))
  });
});
Dv.displayName = "@mantine/core/ComboboxEventsTarget";
const m2 = {}, Mf = Tt((l, o) => {
  const { classNames: s, className: r, style: u, styles: f, vars: d, ...p } = st(
    "ComboboxFooter",
    m2,
    l
  ), y = rn();
  return /* @__PURE__ */ w.jsx(
    pt,
    {
      ref: o,
      ...y.getStyles("footer", { className: r, classNames: s, style: u, styles: f }),
      ...p,
      onMouseDown: (h) => {
        h.preventDefault();
      }
    }
  );
});
Mf.classes = Me;
Mf.displayName = "@mantine/core/ComboboxFooter";
const p2 = {}, zf = Tt((l, o) => {
  const { classNames: s, className: r, style: u, styles: f, vars: d, children: p, label: y, ...h } = st(
    "ComboboxGroup",
    p2,
    l
  ), g = rn();
  return /* @__PURE__ */ w.jsxs(
    pt,
    {
      ref: o,
      ...g.getStyles("group", { className: r, classNames: s, style: u, styles: f }),
      ...h,
      children: [
        y && /* @__PURE__ */ w.jsx("div", { ...g.getStyles("groupLabel", { classNames: s, styles: f }), children: y }),
        p
      ]
    }
  );
});
zf.classes = Me;
zf.displayName = "@mantine/core/ComboboxGroup";
const h2 = {}, Nf = Tt((l, o) => {
  const { classNames: s, className: r, style: u, styles: f, vars: d, ...p } = st(
    "ComboboxHeader",
    h2,
    l
  ), y = rn();
  return /* @__PURE__ */ w.jsx(
    pt,
    {
      ref: o,
      ...y.getStyles("header", { className: r, classNames: s, style: u, styles: f }),
      ...p,
      onMouseDown: (h) => {
        h.preventDefault();
      }
    }
  );
});
Nf.classes = Me;
Nf.displayName = "@mantine/core/ComboboxHeader";
function Ov({
  value: l,
  valuesDivider: o = ",",
  ...s
}) {
  return /* @__PURE__ */ w.jsx(
    "input",
    {
      type: "hidden",
      value: Array.isArray(l) ? l.join(o) : l || "",
      ...s
    }
  );
}
Ov.displayName = "@mantine/core/ComboboxHiddenInput";
const y2 = {}, jf = Tt((l, o) => {
  const s = st("ComboboxOption", y2, l), {
    classNames: r,
    className: u,
    style: f,
    styles: d,
    vars: p,
    onClick: y,
    id: h,
    active: g,
    onMouseDown: S,
    onMouseOver: b,
    disabled: x,
    selected: R,
    mod: _,
    ...M
  } = s, j = rn(), B = E.useId(), H = h || B;
  return /* @__PURE__ */ w.jsx(
    pt,
    {
      ...j.getStyles("option", { className: u, classNames: r, styles: d, style: f }),
      ...M,
      ref: o,
      id: H,
      mod: [
        "combobox-option",
        { "combobox-active": g, "combobox-disabled": x, "combobox-selected": R },
        _
      ],
      role: "option",
      onClick: ($) => {
        x ? $.preventDefault() : (j.onOptionSubmit?.(s.value, s), y?.($));
      },
      onMouseDown: ($) => {
        $.preventDefault(), S?.($);
      },
      onMouseOver: ($) => {
        j.resetSelectionOnOptionHover && j.store.resetSelectedOption(), b?.($);
      }
    }
  );
});
jf.classes = Me;
jf.displayName = "@mantine/core/ComboboxOption";
const v2 = {}, Hf = Tt((l, o) => {
  const s = st("ComboboxOptions", v2, l), { classNames: r, className: u, style: f, styles: d, id: p, onMouseDown: y, labelledBy: h, ...g } = s, S = rn(), b = ro(p);
  return E.useEffect(() => {
    S.store.setListId(b);
  }, [b]), /* @__PURE__ */ w.jsx(
    pt,
    {
      ref: o,
      ...S.getStyles("options", { className: u, style: f, classNames: r, styles: d }),
      ...g,
      id: b,
      role: "listbox",
      "aria-labelledby": h,
      onMouseDown: (x) => {
        x.preventDefault(), y?.(x);
      }
    }
  );
});
Hf.classes = Me;
Hf.displayName = "@mantine/core/ComboboxOptions";
const g2 = {
  withAriaAttributes: !0,
  withKeyboardNavigation: !0
}, Uf = Tt((l, o) => {
  const s = st("ComboboxSearch", g2, l), {
    classNames: r,
    styles: u,
    unstyled: f,
    vars: d,
    withAriaAttributes: p,
    onKeyDown: y,
    withKeyboardNavigation: h,
    size: g,
    ...S
  } = s, b = rn(), x = b.getStyles("search"), R = _f({
    targetType: "input",
    withAriaAttributes: p,
    withKeyboardNavigation: h,
    withExpandedAttribute: !1,
    onKeyDown: y,
    autoComplete: "off"
  });
  return /* @__PURE__ */ w.jsx(
    ln,
    {
      ref: ue(o, b.store.searchRef),
      classNames: [{ input: x.className }, r],
      styles: [{ input: x.style }, u],
      size: g || b.size,
      ...R,
      ...S,
      __staticSelector: "Combobox"
    }
  );
});
Uf.classes = Me;
Uf.displayName = "@mantine/core/ComboboxSearch";
const b2 = {
  refProp: "ref",
  targetType: "input",
  withKeyboardNavigation: !0,
  withAriaAttributes: !0,
  withExpandedAttribute: !1,
  autoComplete: "off"
}, _v = Tt((l, o) => {
  const {
    children: s,
    refProp: r,
    withKeyboardNavigation: u,
    withAriaAttributes: f,
    withExpandedAttribute: d,
    targetType: p,
    autoComplete: y,
    ...h
  } = st("ComboboxTarget", b2, l);
  if (!oo(s))
    throw new Error(
      "Combobox.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const g = rn(), S = _f({
    targetType: p,
    withAriaAttributes: f,
    withKeyboardNavigation: u,
    withExpandedAttribute: d,
    onKeyDown: s.props.onKeyDown,
    autoComplete: y
  }), b = E.cloneElement(s, {
    ...S,
    ...h
  });
  return /* @__PURE__ */ w.jsx(xn.Target, { ref: ue(o, g.store.targetRef), children: b });
});
_v.displayName = "@mantine/core/ComboboxTarget";
function S2(l, o, s) {
  for (let r = l - 1; r >= 0; r -= 1)
    if (!o[r].hasAttribute("data-combobox-disabled"))
      return r;
  if (s) {
    for (let r = o.length - 1; r > -1; r -= 1)
      if (!o[r].hasAttribute("data-combobox-disabled"))
        return r;
  }
  return l;
}
function x2(l, o, s) {
  for (let r = l + 1; r < o.length; r += 1)
    if (!o[r].hasAttribute("data-combobox-disabled"))
      return r;
  if (s) {
    for (let r = 0; r < o.length; r += 1)
      if (!o[r].hasAttribute("data-combobox-disabled"))
        return r;
  }
  return l;
}
function w2(l) {
  for (let o = 0; o < l.length; o += 1)
    if (!l[o].hasAttribute("data-combobox-disabled"))
      return o;
  return -1;
}
function $f({
  defaultOpened: l,
  opened: o,
  onOpenedChange: s,
  onDropdownClose: r,
  onDropdownOpen: u,
  loop: f = !0,
  scrollBehavior: d = "instant"
} = {}) {
  const [p, y] = Al({
    value: o,
    defaultValue: l,
    finalValue: !1,
    onChange: s
  }), h = E.useRef(null), g = E.useRef(-1), S = E.useRef(null), b = E.useRef(null), x = E.useRef(-1), R = E.useRef(-1), _ = E.useRef(-1), M = E.useCallback(
    (U = "unknown") => {
      p || (y(!0), u?.(U));
    },
    [y, u, p]
  ), j = E.useCallback(
    (U = "unknown") => {
      p && (y(!1), r?.(U));
    },
    [y, r, p]
  ), B = E.useCallback(
    (U = "unknown") => {
      p ? j(U) : M(U);
    },
    [j, M, p]
  ), H = E.useCallback(() => {
    const U = document.querySelector(`#${h.current} [data-combobox-selected]`);
    U?.removeAttribute("data-combobox-selected"), U?.removeAttribute("aria-selected");
  }, []), $ = E.useCallback(
    (U) => {
      const V = document.getElementById(h.current)?.querySelectorAll("[data-combobox-option]");
      if (!V)
        return null;
      const et = U >= V.length ? 0 : U < 0 ? V.length - 1 : U;
      return g.current = et, V?.[et] && !V[et].hasAttribute("data-combobox-disabled") ? (H(), V[et].setAttribute("data-combobox-selected", "true"), V[et].setAttribute("aria-selected", "true"), V[et].scrollIntoView({ block: "nearest", behavior: d }), V[et].id) : null;
    },
    [d, H]
  ), q = E.useCallback(() => {
    const U = document.querySelector(
      `#${h.current} [data-combobox-active]`
    );
    if (U) {
      const F = document.querySelectorAll(
        `#${h.current} [data-combobox-option]`
      ), V = Array.from(F).findIndex((et) => et === U);
      return $(V);
    }
    return $(0);
  }, [$]), k = E.useCallback(
    () => $(
      x2(
        g.current,
        document.querySelectorAll(`#${h.current} [data-combobox-option]`),
        f
      )
    ),
    [$, f]
  ), W = E.useCallback(
    () => $(
      S2(
        g.current,
        document.querySelectorAll(`#${h.current} [data-combobox-option]`),
        f
      )
    ),
    [$, f]
  ), J = E.useCallback(
    () => $(
      w2(
        document.querySelectorAll(`#${h.current} [data-combobox-option]`)
      )
    ),
    [$]
  ), Z = E.useCallback(
    (U = "selected", F) => {
      _.current = window.setTimeout(() => {
        const V = document.querySelectorAll(
          `#${h.current} [data-combobox-option]`
        ), et = Array.from(V).findIndex(
          (C) => C.hasAttribute(`data-combobox-${U}`)
        );
        g.current = et, F?.scrollIntoView && V[et]?.scrollIntoView({ block: "nearest", behavior: d });
      }, 0);
    },
    []
  ), P = E.useCallback(() => {
    g.current = -1, H();
  }, [H]), it = E.useCallback(() => {
    document.querySelectorAll(
      `#${h.current} [data-combobox-option]`
    )?.[g.current]?.click();
  }, []), ct = E.useCallback((U) => {
    h.current = U;
  }, []), dt = E.useCallback(() => {
    x.current = window.setTimeout(() => S.current.focus(), 0);
  }, []), ot = E.useCallback(() => {
    R.current = window.setTimeout(() => b.current.focus(), 0);
  }, []), ft = E.useCallback(() => g.current, []);
  return E.useEffect(
    () => () => {
      window.clearTimeout(x.current), window.clearTimeout(R.current), window.clearTimeout(_.current);
    },
    []
  ), {
    dropdownOpened: p,
    openDropdown: M,
    closeDropdown: j,
    toggleDropdown: B,
    selectedOptionIndex: g.current,
    getSelectedOptionIndex: ft,
    selectOption: $,
    selectFirstOption: J,
    selectActiveOption: q,
    selectNextOption: k,
    selectPreviousOption: W,
    resetSelectedOption: P,
    updateSelectedOptionIndex: Z,
    listId: h.current,
    setListId: ct,
    clickSelectedOption: it,
    searchRef: S,
    focusSearchInput: dt,
    targetRef: b,
    focusTarget: ot
  };
}
const T2 = {
  keepMounted: !0,
  withinPortal: !0,
  resetSelectionOnOptionHover: !1,
  width: "target",
  transitionProps: { transition: "fade", duration: 0 }
}, E2 = (l, { size: o, dropdownPadding: s }) => ({
  options: {
    "--combobox-option-fz": nn(o),
    "--combobox-option-padding": le(o, "combobox-option-padding")
  },
  dropdown: {
    "--combobox-padding": s === void 0 ? void 0 : Q(s),
    "--combobox-option-fz": nn(o),
    "--combobox-option-padding": le(o, "combobox-option-padding")
  }
});
function At(l) {
  const o = st("Combobox", T2, l), {
    classNames: s,
    styles: r,
    unstyled: u,
    children: f,
    store: d,
    vars: p,
    onOptionSubmit: y,
    onClose: h,
    size: g,
    dropdownPadding: S,
    resetSelectionOnOptionHover: b,
    __staticSelector: x,
    readOnly: R,
    ..._
  } = o, M = $f(), j = d || M, B = Ht({
    name: x || "Combobox",
    classes: Me,
    props: o,
    classNames: s,
    styles: r,
    unstyled: u,
    vars: p,
    varsResolver: E2
  }), H = () => {
    h?.(), j.closeDropdown();
  };
  return /* @__PURE__ */ w.jsx(
    s2,
    {
      value: {
        getStyles: B,
        store: j,
        onOptionSubmit: y,
        size: g,
        resetSelectionOnOptionHover: b,
        readOnly: R
      },
      children: /* @__PURE__ */ w.jsx(
        xn,
        {
          opened: j.dropdownOpened,
          ..._,
          onChange: ($) => !$ && H(),
          withRoles: !1,
          unstyled: u,
          children: f
        }
      )
    }
  );
}
const C2 = (l) => l;
At.extend = C2;
At.classes = Me;
At.displayName = "@mantine/core/Combobox";
At.Target = _v;
At.Dropdown = Df;
At.Options = Hf;
At.Option = jf;
At.Search = Uf;
At.Empty = Of;
At.Chevron = Af;
At.Footer = Mf;
At.Header = Nf;
At.EventsTarget = Dv;
At.DropdownTarget = Av;
At.Group = zf;
At.ClearButton = Rv;
At.HiddenInput = Ov;
function R2({ size: l, style: o, ...s }) {
  const r = l !== void 0 ? { width: Q(l), height: Q(l), ...o } : o;
  return /* @__PURE__ */ w.jsx(
    "svg",
    {
      viewBox: "0 0 10 7",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: r,
      "aria-hidden": !0,
      ...s,
      children: /* @__PURE__ */ w.jsx(
        "path",
        {
          d: "M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z",
          fill: "currentColor",
          fillRule: "evenodd",
          clipRule: "evenodd"
        }
      )
    }
  );
}
function ra(l) {
  return "group" in l;
}
function Mv({
  options: l,
  search: o,
  limit: s
}) {
  const r = o.trim().toLowerCase(), u = [];
  for (let f = 0; f < l.length; f += 1) {
    const d = l[f];
    if (u.length === s)
      return u;
    ra(d) && u.push({
      group: d.group,
      items: Mv({
        options: d.items,
        search: o,
        limit: s - u.length
      })
    }), ra(d) || d.label.toLowerCase().includes(r) && u.push(d);
  }
  return u;
}
function A2(l) {
  if (l.length === 0)
    return !0;
  for (const o of l)
    if (!("group" in o) || o.items.length > 0)
      return !1;
  return !0;
}
function zv(l, o = /* @__PURE__ */ new Set()) {
  if (Array.isArray(l))
    for (const s of l)
      if (ra(s))
        zv(s.items, o);
      else {
        if (typeof s.value > "u")
          throw new Error("[@mantine/core] Each option must have value property");
        if (typeof s.value != "string")
          throw new Error(
            `[@mantine/core] Option value must be a string, other data formats are not supported, got ${typeof s.value}`
          );
        if (o.has(s.value))
          throw new Error(
            `[@mantine/core] Duplicate options are not supported. Option with value "${s.value}" was provided more than once`
          );
        o.add(s.value);
      }
}
function D2(l, o) {
  return Array.isArray(l) ? l.includes(o) : l === o;
}
function Nv({
  data: l,
  withCheckIcon: o,
  value: s,
  checkIconPosition: r,
  unstyled: u,
  renderOption: f
}) {
  if (!ra(l)) {
    const p = D2(s, l.value), y = o && p && /* @__PURE__ */ w.jsx(R2, { className: Me.optionsDropdownCheckIcon }), h = /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
      r === "left" && y,
      /* @__PURE__ */ w.jsx("span", { children: l.label }),
      r === "right" && y
    ] });
    return /* @__PURE__ */ w.jsx(
      At.Option,
      {
        value: l.value,
        disabled: l.disabled,
        className: el({ [Me.optionsDropdownOption]: !u }),
        "data-reverse": r === "right" || void 0,
        "data-checked": p || void 0,
        "aria-selected": p,
        active: p,
        children: typeof f == "function" ? f({ option: l, checked: p }) : h
      }
    );
  }
  const d = l.items.map((p) => /* @__PURE__ */ w.jsx(
    Nv,
    {
      data: p,
      value: s,
      unstyled: u,
      withCheckIcon: o,
      checkIconPosition: r,
      renderOption: f
    },
    p.value
  ));
  return /* @__PURE__ */ w.jsx(At.Group, { label: l.group, children: d });
}
function jv({
  data: l,
  hidden: o,
  hiddenWhenEmpty: s,
  filter: r,
  search: u,
  limit: f,
  maxDropdownHeight: d,
  withScrollArea: p = !0,
  filterOptions: y = !0,
  withCheckIcon: h = !1,
  value: g,
  checkIconPosition: S,
  nothingFoundMessage: b,
  unstyled: x,
  labelId: R,
  renderOption: _,
  scrollAreaProps: M,
  "aria-label": j
}) {
  zv(l);
  const H = typeof u == "string" ? (r || Mv)({
    options: l,
    search: y ? u : "",
    limit: f ?? 1 / 0
  }) : l, $ = A2(H), q = H.map((k) => /* @__PURE__ */ w.jsx(
    Nv,
    {
      data: k,
      withCheckIcon: h,
      value: g,
      checkIconPosition: S,
      unstyled: x,
      renderOption: _
    },
    ra(k) ? k.group : k.value
  ));
  return /* @__PURE__ */ w.jsx(At.Dropdown, { hidden: o || s && $, children: /* @__PURE__ */ w.jsxs(At.Options, { labelledBy: R, "aria-label": j, children: [
    p ? /* @__PURE__ */ w.jsx(
      co.Autosize,
      {
        mah: d ?? 220,
        type: "scroll",
        scrollbarSize: "var(--combobox-padding)",
        offsetScrollbars: "y",
        ...M,
        children: q
      }
    ) : q,
    $ && b && /* @__PURE__ */ w.jsx(At.Empty, { children: b })
  ] }) });
}
var gs = { root: "m_77c9d27d", inner: "m_80f1301b", label: "m_811560b9", section: "m_a74036a", loader: "m_a25b86ee", group: "m_80d6d844" };
const fy = {
  orientation: "horizontal"
}, O2 = (l, { borderWidth: o }) => ({
  group: { "--button-border-width": Q(o) }
}), Bf = Tt((l, o) => {
  const s = st("ButtonGroup", fy, l), {
    className: r,
    style: u,
    classNames: f,
    styles: d,
    unstyled: p,
    orientation: y,
    vars: h,
    borderWidth: g,
    variant: S,
    mod: b,
    ...x
  } = st("ButtonGroup", fy, l), R = Ht({
    name: "ButtonGroup",
    props: s,
    classes: gs,
    className: r,
    style: u,
    classNames: f,
    styles: d,
    unstyled: p,
    vars: h,
    varsResolver: O2,
    rootSelector: "group"
  });
  return /* @__PURE__ */ w.jsx(
    pt,
    {
      ...R("group"),
      ref: o,
      variant: S,
      mod: [{ "data-orientation": y }, b],
      role: "group",
      ...x
    }
  );
});
Bf.classes = gs;
Bf.displayName = "@mantine/core/ButtonGroup";
const _2 = {
  in: { opacity: 1, transform: `translate(-50%, calc(-50% + ${Q(1)}))` },
  out: { opacity: 0, transform: "translate(-50%, -200%)" },
  common: { transformOrigin: "center" },
  transitionProperty: "transform, opacity"
}, M2 = {}, z2 = (l, { radius: o, color: s, gradient: r, variant: u, size: f, justify: d, autoContrast: p }) => {
  const y = l.variantColorResolver({
    color: s || l.primaryColor,
    theme: l,
    gradient: r,
    variant: u || "filled",
    autoContrast: p
  });
  return {
    root: {
      "--button-justify": d,
      "--button-height": le(f, "button-height"),
      "--button-padding-x": le(f, "button-padding-x"),
      "--button-fz": f?.includes("compact") ? nn(f.replace("compact-", "")) : nn(f),
      "--button-radius": o === void 0 ? void 0 : ca(o),
      "--button-bg": s || u ? y.background : void 0,
      "--button-hover": s || u ? y.hover : void 0,
      "--button-color": y.color,
      "--button-bd": s || u ? y.border : void 0,
      "--button-hover-color": s || u ? y.hoverColor : void 0
    }
  };
}, bs = Ol((l, o) => {
  const s = st("Button", M2, l), {
    style: r,
    vars: u,
    className: f,
    color: d,
    disabled: p,
    children: y,
    leftSection: h,
    rightSection: g,
    fullWidth: S,
    variant: b,
    radius: x,
    loading: R,
    loaderProps: _,
    gradient: M,
    classNames: j,
    styles: B,
    unstyled: H,
    "data-disabled": $,
    autoContrast: q,
    mod: k,
    ...W
  } = s, J = Ht({
    name: "Button",
    props: s,
    classes: gs,
    className: f,
    style: r,
    classNames: j,
    styles: B,
    unstyled: H,
    vars: u,
    varsResolver: z2
  }), Z = !!h, P = !!g;
  return /* @__PURE__ */ w.jsxs(
    uo,
    {
      ref: o,
      ...J("root", { active: !p && !R && !$ }),
      unstyled: H,
      variant: b,
      disabled: p || R,
      mod: [
        {
          disabled: p || $,
          loading: R,
          block: S,
          "with-left-section": Z,
          "with-right-section": P
        },
        k
      ],
      ...W,
      children: [
        /* @__PURE__ */ w.jsx(ds, { mounted: !!R, transition: _2, duration: 150, children: (it) => /* @__PURE__ */ w.jsx(pt, { component: "span", ...J("loader", { style: it }), "aria-hidden": !0, children: /* @__PURE__ */ w.jsx(
          Di,
          {
            color: "var(--button-color)",
            size: "calc(var(--button-height) / 1.8)",
            ..._
          }
        ) }) }),
        /* @__PURE__ */ w.jsxs("span", { ...J("inner"), children: [
          h && /* @__PURE__ */ w.jsx(pt, { component: "span", ...J("section"), mod: { position: "left" }, children: h }),
          /* @__PURE__ */ w.jsx(pt, { component: "span", mod: { loading: R }, ...J("label"), children: y }),
          g && /* @__PURE__ */ w.jsx(pt, { component: "span", ...J("section"), mod: { position: "right" }, children: g })
        ] })
      ]
    }
  );
});
bs.classes = gs;
bs.displayName = "@mantine/core/Button";
bs.Group = Bf;
function N2({ open: l, close: o, openDelay: s, closeDelay: r }) {
  const u = E.useRef(-1), f = E.useRef(-1), d = () => {
    window.clearTimeout(u.current), window.clearTimeout(f.current);
  }, p = () => {
    d(), s === 0 || s === void 0 ? l() : u.current = window.setTimeout(l, s);
  }, y = () => {
    d(), r === 0 || r === void 0 ? o() : f.current = window.setTimeout(o, r);
  };
  return E.useEffect(() => d, []), { openDropdown: p, closeDropdown: y };
}
const [j2, Mi] = io(
  "Menu component was not found in the tree"
);
var po = { dropdown: "m_dc9b7c9f", label: "m_9bfac126", divider: "m_efdf90cb", item: "m_99ac2aa1", itemLabel: "m_5476e0d3", itemSection: "m_8b75e504" };
const H2 = {}, Lf = Tt((l, o) => {
  const { classNames: s, className: r, style: u, styles: f, vars: d, ...p } = st(
    "MenuDivider",
    H2,
    l
  ), y = Mi();
  return /* @__PURE__ */ w.jsx(
    pt,
    {
      ref: o,
      ...y.getStyles("divider", { className: r, style: u, styles: f, classNames: s }),
      ...p
    }
  );
});
Lf.classes = po;
Lf.displayName = "@mantine/core/MenuDivider";
const U2 = {}, Yf = Tt((l, o) => {
  const {
    classNames: s,
    className: r,
    style: u,
    styles: f,
    vars: d,
    onMouseEnter: p,
    onMouseLeave: y,
    onKeyDown: h,
    children: g,
    ...S
  } = st("MenuDropdown", U2, l), b = E.useRef(null), x = Mi(), R = _n(h, (j) => {
    (j.key === "ArrowUp" || j.key === "ArrowDown") && (j.preventDefault(), b.current?.querySelectorAll("[data-menu-item]:not(:disabled)")[0]?.focus());
  }), _ = _n(
    p,
    () => (x.trigger === "hover" || x.trigger === "click-hover") && x.openDropdown()
  ), M = _n(
    y,
    () => (x.trigger === "hover" || x.trigger === "click-hover") && x.closeDropdown()
  );
  return /* @__PURE__ */ w.jsxs(
    xn.Dropdown,
    {
      ...S,
      onMouseEnter: _,
      onMouseLeave: M,
      role: "menu",
      "aria-orientation": "vertical",
      ref: ue(o, b),
      ...x.getStyles("dropdown", {
        className: r,
        style: u,
        styles: f,
        classNames: s,
        withStaticClass: !1
      }),
      tabIndex: -1,
      "data-menu-dropdown": !0,
      onKeyDown: R,
      children: [
        /* @__PURE__ */ w.jsx("div", { tabIndex: -1, "data-autofocus": !0, "data-mantine-stop-propagation": !0, style: { outline: 0 } }),
        g
      ]
    }
  );
});
Yf.classes = po;
Yf.displayName = "@mantine/core/MenuDropdown";
const $2 = {}, qf = Ol((l, o) => {
  const {
    classNames: s,
    className: r,
    style: u,
    styles: f,
    vars: d,
    color: p,
    closeMenuOnClick: y,
    leftSection: h,
    rightSection: g,
    children: S,
    disabled: b,
    ...x
  } = st("MenuItem", $2, l), R = Mi(), _ = Sn(), { dir: M } = is(), j = E.useRef(), B = R.getItemIndex(j.current), H = x, $ = _n(H.onMouseLeave, () => R.setHovered(-1)), q = _n(
    H.onMouseEnter,
    () => R.setHovered(R.getItemIndex(j.current))
  ), k = _n(H.onClick, () => {
    typeof y == "boolean" ? y && R.closeDropdownImmediately() : R.closeOnItemClick && R.closeDropdownImmediately();
  }), W = _n(
    H.onFocus,
    () => R.setHovered(R.getItemIndex(j.current))
  ), J = p ? _.variantColorResolver({ color: p, theme: _, variant: "light" }) : void 0, Z = p ? so({ color: p, theme: _ }) : null;
  return /* @__PURE__ */ w.jsxs(
    uo,
    {
      ...x,
      unstyled: R.unstyled,
      tabIndex: R.menuItemTabIndex,
      onFocus: W,
      ...R.getStyles("item", { className: r, style: u, styles: f, classNames: s }),
      ref: ue(j, o),
      role: "menuitem",
      disabled: b,
      "data-menu-item": !0,
      "data-disabled": b || void 0,
      "data-hovered": R.hovered === B ? !0 : void 0,
      "data-mantine-stop-propagation": !0,
      onMouseEnter: q,
      onMouseLeave: $,
      onClick: k,
      onKeyDown: hb({
        siblingSelector: "[data-menu-item]",
        parentSelector: "[data-menu-dropdown]",
        activateOnFocus: !1,
        loop: R.loop,
        dir: M,
        orientation: "vertical",
        onKeyDown: H.onKeyDown
      }),
      __vars: {
        "--menu-item-color": Z?.isThemeColor && Z?.shade === void 0 ? `var(--mantine-color-${Z.color}-6)` : J?.color,
        "--menu-item-hover": J?.hover
      },
      children: [
        h && /* @__PURE__ */ w.jsx("div", { ...R.getStyles("itemSection", { styles: f, classNames: s }), "data-position": "left", children: h }),
        S && /* @__PURE__ */ w.jsx("div", { ...R.getStyles("itemLabel", { styles: f, classNames: s }), children: S }),
        g && /* @__PURE__ */ w.jsx("div", { ...R.getStyles("itemSection", { styles: f, classNames: s }), "data-position": "right", children: g })
      ]
    }
  );
});
qf.classes = po;
qf.displayName = "@mantine/core/MenuItem";
const B2 = {}, Vf = Tt((l, o) => {
  const { classNames: s, className: r, style: u, styles: f, vars: d, ...p } = st(
    "MenuLabel",
    B2,
    l
  ), y = Mi();
  return /* @__PURE__ */ w.jsx(
    pt,
    {
      ref: o,
      ...y.getStyles("label", { className: r, style: u, styles: f, classNames: s }),
      ...p
    }
  );
});
Vf.classes = po;
Vf.displayName = "@mantine/core/MenuLabel";
const L2 = {
  refProp: "ref"
}, Hv = E.forwardRef((l, o) => {
  const { children: s, refProp: r, ...u } = st("MenuTarget", L2, l);
  if (!oo(s))
    throw new Error(
      "Menu.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const f = Mi(), d = _n(s.props.onClick, () => {
    f.trigger === "click" ? f.toggleDropdown() : f.trigger === "click-hover" && (f.setOpenedViaClick(!0), f.opened || f.openDropdown());
  }), p = _n(
    s.props.onMouseEnter,
    () => (f.trigger === "hover" || f.trigger === "click-hover") && f.openDropdown()
  ), y = _n(s.props.onMouseLeave, () => {
    (f.trigger === "hover" || f.trigger === "click-hover" && !f.openedViaClick) && f.closeDropdown();
  });
  return /* @__PURE__ */ w.jsx(xn.Target, { refProp: r, popupType: "menu", ref: o, ...u, children: E.cloneElement(s, {
    onClick: d,
    onMouseEnter: p,
    onMouseLeave: y,
    "data-expanded": f.opened ? !0 : void 0
  }) });
});
Hv.displayName = "@mantine/core/MenuTarget";
const Y2 = {
  trapFocus: !0,
  closeOnItemClick: !0,
  clickOutsideEvents: ["mousedown", "touchstart", "keydown"],
  loop: !0,
  trigger: "click",
  openDelay: 0,
  closeDelay: 100,
  menuItemTabIndex: -1
};
function ne(l) {
  const o = st("Menu", Y2, l), {
    children: s,
    onOpen: r,
    onClose: u,
    opened: f,
    defaultOpened: d,
    trapFocus: p,
    onChange: y,
    closeOnItemClick: h,
    loop: g,
    closeOnEscape: S,
    trigger: b,
    openDelay: x,
    closeDelay: R,
    classNames: _,
    styles: M,
    unstyled: j,
    variant: B,
    vars: H,
    menuItemTabIndex: $,
    keepMounted: q,
    ...k
  } = o, W = Ht({
    name: "Menu",
    classes: po,
    props: o,
    classNames: _,
    styles: M,
    unstyled: j
  }), [J, { setHovered: Z, resetHovered: P }] = wb(), [it, ct] = Al({
    value: f,
    defaultValue: d,
    finalValue: !1,
    onChange: y
  }), [dt, ot] = E.useState(!1), ft = () => {
    ct(!1), ot(!1), it && u?.();
  }, U = () => {
    ct(!0), !it && r?.();
  }, F = () => {
    it ? ft() : U();
  }, { openDropdown: V, closeDropdown: et } = N2({ open: U, close: ft, closeDelay: R, openDelay: x }), C = (nt) => xb("[data-menu-item]", "[data-menu-dropdown]", nt), { resolvedClassNames: G, resolvedStyles: lt } = os({
    classNames: _,
    styles: M,
    props: o
  });
  return oa(() => {
    P();
  }, [it]), /* @__PURE__ */ w.jsx(
    j2,
    {
      value: {
        getStyles: W,
        opened: it,
        toggleDropdown: F,
        getItemIndex: C,
        hovered: J,
        setHovered: Z,
        openedViaClick: dt,
        setOpenedViaClick: ot,
        closeOnItemClick: h,
        closeDropdown: b === "click" ? ft : et,
        openDropdown: b === "click" ? U : V,
        closeDropdownImmediately: ft,
        loop: g,
        trigger: b,
        unstyled: j,
        menuItemTabIndex: $
      },
      children: /* @__PURE__ */ w.jsx(
        xn,
        {
          ...k,
          opened: it,
          onChange: F,
          defaultOpened: d,
          trapFocus: q ? !1 : p,
          closeOnEscape: S,
          __staticSelector: "Menu",
          classNames: G,
          styles: lt,
          unstyled: j,
          variant: B,
          keepMounted: q,
          children: s
        }
      )
    }
  );
}
ne.extend = (l) => l;
ne.classes = po;
ne.displayName = "@mantine/core/Menu";
ne.Item = qf;
ne.Label = Vf;
ne.Dropdown = Yf;
ne.Target = Hv;
ne.Divider = Lf;
const [q2, Gf] = Fu(), [V2, G2] = Fu();
var Ss = { root: "m_7cda1cd6", "root--default": "m_44da308b", "root--contrast": "m_e3a01f8", label: "m_1e0e6180", remove: "m_ae386778", group: "m_1dcfd90b" };
const X2 = {}, k2 = (l, { gap: o }, { size: s }) => ({
  group: {
    "--pg-gap": o !== void 0 ? le(o) : le(s, "pg-gap")
  }
}), Xf = Tt((l, o) => {
  const s = st("PillGroup", X2, l), { classNames: r, className: u, style: f, styles: d, unstyled: p, vars: y, size: h, disabled: g, ...S } = s, x = Gf()?.size || h || void 0, R = Ht({
    name: "PillGroup",
    classes: Ss,
    props: s,
    className: u,
    style: f,
    classNames: r,
    styles: d,
    unstyled: p,
    vars: y,
    varsResolver: k2,
    stylesCtx: { size: x },
    rootSelector: "group"
  });
  return /* @__PURE__ */ w.jsx(V2, { value: { size: x, disabled: g }, children: /* @__PURE__ */ w.jsx(pt, { ref: o, size: x, ...R("group"), ...S }) });
});
Xf.classes = Ss;
Xf.displayName = "@mantine/core/PillGroup";
const Q2 = {
  variant: "default"
}, Z2 = (l, { radius: o }, { size: s }) => ({
  root: {
    "--pill-fz": le(s, "pill-fz"),
    "--pill-height": le(s, "pill-height"),
    "--pill-radius": o === void 0 ? void 0 : ca(o)
  }
}), sa = Tt((l, o) => {
  const s = st("Pill", Q2, l), {
    classNames: r,
    className: u,
    style: f,
    styles: d,
    unstyled: p,
    vars: y,
    variant: h,
    children: g,
    withRemoveButton: S,
    onRemove: b,
    removeButtonProps: x,
    radius: R,
    size: _,
    disabled: M,
    mod: j,
    ...B
  } = s, H = G2(), $ = Gf(), q = _ || H?.size || void 0, k = $?.variant === "filled" ? "contrast" : h || "default", W = Ht({
    name: "Pill",
    classes: Ss,
    props: s,
    className: u,
    style: f,
    classNames: r,
    styles: d,
    unstyled: p,
    vars: y,
    varsResolver: Z2,
    stylesCtx: { size: q }
  });
  return /* @__PURE__ */ w.jsxs(
    pt,
    {
      component: "span",
      ref: o,
      variant: k,
      size: q,
      ...W("root", { variant: k }),
      mod: [
        { "with-remove": S && !M, disabled: M || H?.disabled },
        j
      ],
      ...B,
      children: [
        /* @__PURE__ */ w.jsx("span", { ...W("label"), children: g }),
        S && /* @__PURE__ */ w.jsx(
          ps,
          {
            variant: "transparent",
            radius: R,
            tabIndex: -1,
            "aria-hidden": !0,
            unstyled: p,
            ...x,
            ...W("remove", {
              className: x?.className,
              style: x?.style
            }),
            onMouseDown: (J) => {
              J.preventDefault(), J.stopPropagation(), x?.onMouseDown?.(J);
            },
            onClick: (J) => {
              J.stopPropagation(), b?.(), x?.onClick?.(J);
            }
          }
        )
      ]
    }
  );
});
sa.classes = Ss;
sa.displayName = "@mantine/core/Pill";
sa.Group = Xf;
var Uv = { field: "m_45c4369d" };
const K2 = {
  type: "visible"
}, kf = Tt((l, o) => {
  const s = st("PillsInputField", K2, l), {
    classNames: r,
    className: u,
    style: f,
    styles: d,
    unstyled: p,
    vars: y,
    type: h,
    disabled: g,
    id: S,
    pointer: b,
    mod: x,
    ...R
  } = s, _ = Gf(), M = Oi(), j = Ht({
    name: "PillsInputField",
    classes: Uv,
    props: s,
    className: u,
    style: f,
    classNames: r,
    styles: d,
    unstyled: p,
    rootSelector: "field"
  }), B = g || _?.disabled;
  return /* @__PURE__ */ w.jsx(
    pt,
    {
      component: "input",
      ref: ue(o, _?.fieldRef),
      "data-type": h,
      disabled: B,
      mod: [{ disabled: B, pointer: b }, x],
      ...j("field"),
      ...R,
      id: M?.inputId || S,
      "aria-invalid": _?.hasError,
      "aria-describedby": M?.describedBy,
      type: "text",
      onMouseDown: (H) => !b && H.stopPropagation()
    }
  );
});
kf.classes = Uv;
kf.displayName = "@mantine/core/PillsInputField";
const J2 = {}, ao = Tt((l, o) => {
  const s = st("PillsInput", J2, l), {
    children: r,
    onMouseDown: u,
    onClick: f,
    size: d,
    disabled: p,
    __staticSelector: y,
    error: h,
    variant: g,
    ...S
  } = s, b = E.useRef();
  return /* @__PURE__ */ w.jsx(q2, { value: { fieldRef: b, size: d, disabled: p, hasError: !!h, variant: g }, children: /* @__PURE__ */ w.jsx(
    _i,
    {
      size: d,
      error: h,
      variant: g,
      component: "div",
      ref: o,
      onMouseDown: (x) => {
        x.preventDefault(), u?.(x), b.current?.focus();
      },
      onClick: (x) => {
        x.preventDefault(), f?.(x), b.current?.focus();
      },
      ...S,
      multiline: !0,
      disabled: p,
      __staticSelector: y || "PillsInput",
      withAria: !1,
      children: r
    }
  ) });
});
ao.displayName = "@mantine/core/PillsInput";
ao.Field = kf;
function P2({ data: l, value: o }) {
  const s = o.map((u) => u.trim().toLowerCase());
  return l.reduce((u, f) => (ra(f) ? u.push({
    group: f.group,
    items: f.items.filter(
      (d) => s.indexOf(d.value.toLowerCase().trim()) === -1
    )
  }) : s.indexOf(f.value.toLowerCase().trim()) === -1 && u.push(f), u), []);
}
const W2 = {
  maxValues: 1 / 0,
  withCheckIcon: !0,
  checkIconPosition: "left",
  hiddenInputValuesDivider: ","
}, Qf = Tt((l, o) => {
  const s = st("MultiSelect", W2, l), {
    classNames: r,
    className: u,
    style: f,
    styles: d,
    unstyled: p,
    vars: y,
    size: h,
    value: g,
    defaultValue: S,
    onChange: b,
    onKeyDown: x,
    variant: R,
    data: _,
    dropdownOpened: M,
    defaultDropdownOpened: j,
    onDropdownOpen: B,
    onDropdownClose: H,
    selectFirstOptionOnChange: $,
    onOptionSubmit: q,
    comboboxProps: k,
    filter: W,
    limit: J,
    withScrollArea: Z,
    maxDropdownHeight: P,
    searchValue: it,
    defaultSearchValue: ct,
    onSearchChange: dt,
    readOnly: ot,
    disabled: ft,
    onFocus: U,
    onBlur: F,
    onPaste: V,
    radius: et,
    rightSection: C,
    rightSectionWidth: G,
    rightSectionPointerEvents: lt,
    rightSectionProps: nt,
    leftSection: I,
    leftSectionWidth: ht,
    leftSectionPointerEvents: tt,
    leftSectionProps: Nt,
    inputContainer: bt,
    inputWrapperOrder: zt,
    withAsterisk: Ot,
    labelProps: ae,
    descriptionProps: ze,
    errorProps: be,
    wrapperProps: Ve,
    description: Ne,
    label: fe,
    error: Vt,
    maxValues: Ge,
    searchable: It,
    nothingFoundMessage: sn,
    withCheckIcon: cn,
    checkIconPosition: un,
    hidePickedOptions: yo,
    withErrorStyles: Re,
    name: vo,
    form: da,
    id: ma,
    clearable: nl,
    clearButtonProps: go,
    hiddenInputProps: pa,
    placeholder: ha,
    hiddenInputValuesDivider: bo,
    required: wn,
    mod: de,
    renderOption: So,
    onRemove: Ae,
    onClear: oe,
    scrollAreaProps: _l,
    ...Ml
  } = s, zl = ro(ma), fn = Cv(_), je = Rf(fn), jt = $f({
    opened: M,
    defaultOpened: j,
    onDropdownOpen: B,
    onDropdownClose: () => {
      H?.(), jt.resetSelectedOption();
    }
  }), {
    styleProps: ll,
    rest: { type: Nl, autoComplete: xo, ...ya }
  } = Ri(Ml), [xt, me] = Al({
    value: g,
    defaultValue: S,
    finalValue: [],
    onChange: b
  }), [pe, He] = Al({
    value: it,
    defaultValue: ct,
    finalValue: "",
    onChange: dt
  }), Tn = Ht({
    name: "MultiSelect",
    classes: {},
    props: s,
    classNames: r,
    styles: d,
    unstyled: p
  }), { resolvedClassNames: al, resolvedStyles: ol } = os({
    props: s,
    styles: d,
    classNames: r
  }), jl = (St) => {
    x?.(St), St.key === " " && !It && (St.preventDefault(), jt.toggleDropdown()), St.key === "Backspace" && pe.length === 0 && xt.length > 0 && (Ae?.(xt[xt.length - 1]), me(xt.slice(0, xt.length - 1)));
  }, wo = xt.map((St, yt) => /* @__PURE__ */ w.jsx(
    sa,
    {
      withRemoveButton: !ot && !je[St]?.disabled,
      onRemove: () => {
        me(xt.filter((he) => St !== he)), Ae?.(St);
      },
      unstyled: p,
      disabled: ft,
      ...Tn("pill"),
      children: je[St]?.label || St
    },
    `${St}-${yt}`
  ));
  E.useEffect(() => {
    $ && jt.selectFirstOption();
  }, [$, xt]);
  const De = nl && xt.length > 0 && !ft && !ot && /* @__PURE__ */ w.jsx(
    At.ClearButton,
    {
      size: h,
      ...go,
      onClear: () => {
        oe?.(), me([]), He("");
      }
    }
  ), Jt = P2({ data: fn, value: xt });
  return /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
    /* @__PURE__ */ w.jsxs(
      At,
      {
        store: jt,
        classNames: al,
        styles: ol,
        unstyled: p,
        size: h,
        readOnly: ot,
        __staticSelector: "MultiSelect",
        onOptionSubmit: (St) => {
          q?.(St), He(""), jt.updateSelectedOptionIndex("selected"), xt.includes(je[St].value) ? (me(xt.filter((yt) => yt !== je[St].value)), Ae?.(je[St].value)) : xt.length < Ge && me([...xt, je[St].value]);
        },
        ...k,
        children: [
          /* @__PURE__ */ w.jsx(At.DropdownTarget, { children: /* @__PURE__ */ w.jsx(
            ao,
            {
              ...ll,
              __staticSelector: "MultiSelect",
              classNames: al,
              styles: ol,
              unstyled: p,
              size: h,
              className: u,
              style: f,
              variant: R,
              disabled: ft,
              radius: et,
              rightSection: C || De || /* @__PURE__ */ w.jsx(At.Chevron, { size: h, error: Vt, unstyled: p }),
              rightSectionPointerEvents: lt || (De ? "all" : "none"),
              rightSectionWidth: G,
              rightSectionProps: nt,
              leftSection: I,
              leftSectionWidth: ht,
              leftSectionPointerEvents: tt,
              leftSectionProps: Nt,
              inputContainer: bt,
              inputWrapperOrder: zt,
              withAsterisk: Ot,
              labelProps: ae,
              descriptionProps: ze,
              errorProps: be,
              wrapperProps: Ve,
              description: Ne,
              label: fe,
              error: Vt,
              multiline: !0,
              withErrorStyles: Re,
              __stylesApiProps: {
                ...s,
                rightSectionPointerEvents: lt || (De ? "all" : "none"),
                multiline: !0
              },
              pointer: !It,
              onClick: () => It ? jt.openDropdown() : jt.toggleDropdown(),
              "data-expanded": jt.dropdownOpened || void 0,
              id: zl,
              required: wn,
              mod: de,
              children: /* @__PURE__ */ w.jsxs(sa.Group, { disabled: ft, unstyled: p, ...Tn("pillsList"), children: [
                wo,
                /* @__PURE__ */ w.jsx(At.EventsTarget, { autoComplete: xo, children: /* @__PURE__ */ w.jsx(
                  ao.Field,
                  {
                    ...ya,
                    ref: o,
                    id: zl,
                    placeholder: ha,
                    type: !It && !ha ? "hidden" : "visible",
                    ...Tn("inputField"),
                    unstyled: p,
                    onFocus: (St) => {
                      U?.(St), It && jt.openDropdown();
                    },
                    onBlur: (St) => {
                      F?.(St), jt.closeDropdown(), He("");
                    },
                    onKeyDown: jl,
                    value: pe,
                    onChange: (St) => {
                      He(St.currentTarget.value), It && jt.openDropdown(), $ && jt.selectFirstOption();
                    },
                    disabled: ft,
                    readOnly: ot || !It,
                    pointer: !It
                  }
                ) })
              ] })
            }
          ) }),
          /* @__PURE__ */ w.jsx(
            jv,
            {
              data: yo ? Jt : fn,
              hidden: ot || ft,
              filter: W,
              search: pe,
              limit: J,
              hiddenWhenEmpty: !sn,
              withScrollArea: Z,
              maxDropdownHeight: P,
              filterOptions: It,
              value: xt,
              checkIconPosition: un,
              withCheckIcon: cn,
              nothingFoundMessage: sn,
              unstyled: p,
              labelId: fe ? `${zl}-label` : void 0,
              "aria-label": fe ? void 0 : Ml["aria-label"],
              renderOption: So,
              scrollAreaProps: _l
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ w.jsx(
      At.HiddenInput,
      {
        name: vo,
        valuesDivider: bo,
        value: xt,
        form: da,
        disabled: ft,
        ...pa
      }
    )
  ] });
});
Qf.classes = { ..._i.classes, ...At.classes };
Qf.displayName = "@mantine/core/MultiSelect";
var $v = { root: "m_cf365364", indicator: "m_9e182ccd", label: "m_1738fcb2", input: "m_1714d588", control: "m_69686b9b", innerLabel: "m_78882f40" };
const F2 = {
  withItemsBorders: !0
}, I2 = (l, { radius: o, color: s, transitionDuration: r, size: u, transitionTimingFunction: f }) => ({
  root: {
    "--sc-radius": o === void 0 ? void 0 : ca(o),
    "--sc-color": s ? la(s, l) : void 0,
    "--sc-shadow": s ? void 0 : "var(--mantine-shadow-xs)",
    "--sc-transition-duration": r === void 0 ? void 0 : `${r}ms`,
    "--sc-transition-timing-function": f,
    "--sc-padding": le(u, "sc-padding"),
    "--sc-font-size": nn(u)
  }
}), Zf = Tt((l, o) => {
  const s = st("SegmentedControl", F2, l), {
    classNames: r,
    className: u,
    style: f,
    styles: d,
    unstyled: p,
    vars: y,
    data: h,
    value: g,
    defaultValue: S,
    onChange: b,
    size: x,
    name: R,
    disabled: _,
    readOnly: M,
    fullWidth: j,
    orientation: B,
    radius: H,
    color: $,
    transitionDuration: q,
    transitionTimingFunction: k,
    variant: W,
    autoContrast: J,
    withItemsBorders: Z,
    mod: P,
    ...it
  } = s, ct = Ht({
    name: "SegmentedControl",
    props: s,
    classes: $v,
    className: u,
    style: f,
    classNames: r,
    styles: d,
    unstyled: p,
    vars: y,
    varsResolver: I2
  }), dt = Sn(), ot = h.map(
    (tt) => typeof tt == "string" ? { label: tt, value: tt } : tt
  ), ft = qb(), [U, F] = E.useState(null), [V, et] = E.useState({}), C = (tt, Nt) => {
    V[Nt] = tt, et(V);
  }, [G, lt] = Al({
    value: g,
    defaultValue: S,
    finalValue: Array.isArray(h) ? ot.find((tt) => !tt.disabled)?.value ?? h[0]?.value ?? null : null,
    onChange: b
  }), nt = ro(R), I = ot.map((tt) => /* @__PURE__ */ E.createElement(
    pt,
    {
      ...ct("control"),
      mod: { active: G === tt.value, orientation: B },
      key: tt.value
    },
    /* @__PURE__ */ E.createElement(
      "input",
      {
        ...ct("input"),
        disabled: _ || tt.disabled,
        type: "radio",
        name: nt,
        value: tt.value,
        id: `${nt}-${tt.value}`,
        checked: G === tt.value,
        onChange: () => !M && lt(tt.value),
        "data-focus-ring": dt.focusRing,
        key: `${tt.value}-input`
      }
    ),
    /* @__PURE__ */ E.createElement(
      pt,
      {
        component: "label",
        ...ct("label"),
        mod: {
          active: G === tt.value && !(_ || tt.disabled),
          disabled: _ || tt.disabled,
          "read-only": M
        },
        htmlFor: `${nt}-${tt.value}`,
        ref: (Nt) => C(Nt, tt.value),
        __vars: {
          "--sc-label-color": $ !== void 0 ? Dy({ color: $, theme: dt, autoContrast: J }) : void 0
        },
        key: `${tt.value}-label`
      },
      /* @__PURE__ */ w.jsx("span", { ...ct("innerLabel"), children: tt.label })
    )
  )), ht = ue(o, (tt) => F(tt));
  return h.length === 0 ? null : /* @__PURE__ */ w.jsxs(
    pt,
    {
      ...ct("root"),
      variant: W,
      size: x,
      ref: ht,
      mod: [
        {
          "full-width": j,
          orientation: B,
          initialized: ft,
          "with-items-borders": Z
        },
        P
      ],
      ...it,
      role: "radiogroup",
      "data-disabled": _,
      children: [
        typeof G == "string" && /* @__PURE__ */ w.jsx(
          Cf,
          {
            target: V[G],
            parent: U,
            component: "span",
            transitionDuration: "var(--sc-transition-duration)",
            ...ct("indicator")
          }
        ),
        I
      ]
    }
  );
});
Zf.classes = $v;
Zf.displayName = "@mantine/core/SegmentedControl";
const [tw, ew] = io(
  "Table component was not found in the tree"
);
var zi = { table: "m_b23fa0ef", th: "m_4e7aa4f3", tr: "m_4e7aa4fd", td: "m_4e7aa4ef", tbody: "m_b2404537", thead: "m_b242d975", caption: "m_9e5a3ac7", scrollContainer: "m_a100c15", scrollContainerInner: "m_62259741" };
function nw(l, o) {
  if (!o)
    return;
  const s = {};
  return o.columnBorder && l.withColumnBorders && (s["data-with-column-border"] = !0), o.rowBorder && l.withRowBorders && (s["data-with-row-border"] = !0), o.striped && l.striped && (s["data-striped"] = l.striped), o.highlightOnHover && l.highlightOnHover && (s["data-hover"] = !0), o.captionSide && l.captionSide && (s["data-side"] = l.captionSide), o.stickyHeader && l.stickyHeader && (s["data-sticky"] = !0), s;
}
function fa(l, o) {
  const s = `Table${l.charAt(0).toUpperCase()}${l.slice(1)}`, r = Tt((u, f) => {
    const d = st(s, {}, u), { classNames: p, className: y, style: h, styles: g, ...S } = d, b = ew();
    return /* @__PURE__ */ w.jsx(
      pt,
      {
        component: l,
        ref: f,
        ...nw(b, o),
        ...b.getStyles(l, { className: y, classNames: p, style: h, styles: g, props: d }),
        ...S
      }
    );
  });
  return r.displayName = `@mantine/core/${s}`, r.classes = zi, r;
}
const Ju = fa("th", { columnBorder: !0 }), Bv = fa("td", { columnBorder: !0 }), Zr = fa("tr", {
  rowBorder: !0,
  striped: !0,
  highlightOnHover: !0
}), Lv = fa("thead", { stickyHeader: !0 }), Yv = fa("tbody"), qv = fa("tfoot"), Vv = fa("caption", { captionSide: !0 });
function Kf({ data: l }) {
  return /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
    l.caption && /* @__PURE__ */ w.jsx(Vv, { children: l.caption }),
    l.head && /* @__PURE__ */ w.jsx(Lv, { children: /* @__PURE__ */ w.jsx(Zr, { children: l.head.map((o, s) => /* @__PURE__ */ w.jsx(Ju, { children: o }, s)) }) }),
    l.body && /* @__PURE__ */ w.jsx(Yv, { children: l.body.map((o, s) => /* @__PURE__ */ w.jsx(Zr, { children: o.map((r, u) => /* @__PURE__ */ w.jsx(Bv, { children: r }, u)) }, s)) }),
    l.foot && /* @__PURE__ */ w.jsx(qv, { children: /* @__PURE__ */ w.jsx(Zr, { children: l.foot.map((o, s) => /* @__PURE__ */ w.jsx(Ju, { children: o }, s)) }) })
  ] });
}
Kf.displayName = "@mantine/core/TableDataRenderer";
const lw = {
  type: "scrollarea"
}, aw = (l, { minWidth: o, type: s }) => ({
  scrollContainer: {
    "--table-min-width": Q(o),
    "--table-overflow": s === "native" ? "auto" : void 0
  }
}), Jf = Tt((l, o) => {
  const s = st("TableScrollContainer", lw, l), {
    classNames: r,
    className: u,
    style: f,
    styles: d,
    unstyled: p,
    vars: y,
    children: h,
    minWidth: g,
    type: S,
    ...b
  } = s, x = Ht({
    name: "TableScrollContainer",
    classes: zi,
    props: s,
    className: u,
    style: f,
    classNames: r,
    styles: d,
    unstyled: p,
    vars: y,
    varsResolver: aw,
    rootSelector: "scrollContainer"
  });
  return /* @__PURE__ */ w.jsx(
    pt,
    {
      component: S === "scrollarea" ? co : "div",
      ...S === "scrollarea" ? { offsetScrollbars: "x" } : {},
      ref: o,
      ...x("scrollContainer"),
      ...b,
      children: /* @__PURE__ */ w.jsx("div", { ...x("scrollContainerInner"), children: h })
    }
  );
});
Jf.classes = zi;
Jf.displayName = "@mantine/core/TableScrollContainer";
const ow = {
  withRowBorders: !0,
  verticalSpacing: 7
}, iw = (l, {
  layout: o,
  captionSide: s,
  horizontalSpacing: r,
  verticalSpacing: u,
  borderColor: f,
  stripedColor: d,
  highlightOnHoverColor: p,
  striped: y,
  highlightOnHover: h,
  stickyHeaderOffset: g,
  stickyHeader: S
}) => ({
  table: {
    "--table-layout": o,
    "--table-caption-side": s,
    "--table-horizontal-spacing": Hh(r),
    "--table-vertical-spacing": Hh(u),
    "--table-border-color": f ? la(f, l) : void 0,
    "--table-striped-color": y && d ? la(d, l) : void 0,
    "--table-highlight-on-hover-color": h && p ? la(p, l) : void 0,
    "--table-sticky-header-offset": S ? Q(g) : void 0
  }
}), Lt = Tt((l, o) => {
  const s = st("Table", ow, l), {
    classNames: r,
    className: u,
    style: f,
    styles: d,
    unstyled: p,
    vars: y,
    horizontalSpacing: h,
    verticalSpacing: g,
    captionSide: S,
    stripedColor: b,
    highlightOnHoverColor: x,
    striped: R,
    highlightOnHover: _,
    withColumnBorders: M,
    withRowBorders: j,
    withTableBorder: B,
    borderColor: H,
    layout: $,
    variant: q,
    data: k,
    children: W,
    stickyHeader: J,
    stickyHeaderOffset: Z,
    mod: P,
    ...it
  } = s, ct = Ht({
    name: "Table",
    props: s,
    className: u,
    style: f,
    classes: zi,
    classNames: r,
    styles: d,
    unstyled: p,
    rootSelector: "table",
    vars: y,
    varsResolver: iw
  });
  return /* @__PURE__ */ w.jsx(
    tw,
    {
      value: {
        getStyles: ct,
        stickyHeader: J,
        striped: R === !0 ? "odd" : R || void 0,
        highlightOnHover: _,
        withColumnBorders: M,
        withRowBorders: j,
        captionSide: S || "bottom"
      },
      children: /* @__PURE__ */ w.jsx(
        pt,
        {
          component: "table",
          variant: q,
          ref: o,
          mod: [{ "data-with-table-border": B }, P],
          ...ct("table"),
          ...it,
          children: W || !!k && /* @__PURE__ */ w.jsx(Kf, { data: k })
        }
      )
    }
  );
});
Lt.classes = zi;
Lt.displayName = "@mantine/core/Table";
Lt.Td = Bv;
Lt.Th = Ju;
Lt.Tr = Zr;
Lt.Thead = Lv;
Lt.Tbody = Yv;
Lt.Tfoot = qv;
Lt.Caption = Vv;
Lt.ScrollContainer = Jf;
Lt.DataRenderer = Kf;
function rw({ data: l, value: o }) {
  const s = o.map((u) => u.trim().toLowerCase());
  return l.reduce((u, f) => (ra(f) ? u.push({
    group: f.group,
    items: f.items.filter(
      (d) => s.indexOf(d.label.toLowerCase().trim()) === -1
    )
  }) : s.indexOf(f.label.toLowerCase().trim()) === -1 && u.push(f), u), []);
}
function sw(l, o) {
  return l ? o.split(new RegExp(`[${l.join("")}]`)).map((s) => s.trim()).filter((s) => s !== "") : [o];
}
function dy({
  splitChars: l,
  allowDuplicates: o,
  maxTags: s,
  value: r,
  currentTags: u
}) {
  const f = sw(l, r), d = o ? [...u, ...f] : [.../* @__PURE__ */ new Set([...u, ...f])];
  return s ? d.slice(0, s) : d;
}
const cw = {
  maxTags: 1 / 0,
  allowDuplicates: !1,
  acceptValueOnBlur: !0,
  splitChars: [","],
  hiddenInputValuesDivider: ","
}, xi = Tt((l, o) => {
  const s = st("TagsInput", cw, l), {
    classNames: r,
    className: u,
    style: f,
    styles: d,
    unstyled: p,
    vars: y,
    size: h,
    value: g,
    defaultValue: S,
    onChange: b,
    onKeyDown: x,
    maxTags: R,
    allowDuplicates: _,
    onDuplicate: M,
    variant: j,
    data: B,
    dropdownOpened: H,
    defaultDropdownOpened: $,
    onDropdownOpen: q,
    onDropdownClose: k,
    selectFirstOptionOnChange: W,
    onOptionSubmit: J,
    comboboxProps: Z,
    filter: P,
    limit: it,
    withScrollArea: ct,
    maxDropdownHeight: dt,
    searchValue: ot,
    defaultSearchValue: ft,
    onSearchChange: U,
    readOnly: F,
    disabled: V,
    splitChars: et,
    onFocus: C,
    onBlur: G,
    onPaste: lt,
    radius: nt,
    rightSection: I,
    rightSectionWidth: ht,
    rightSectionPointerEvents: tt,
    rightSectionProps: Nt,
    leftSection: bt,
    leftSectionWidth: zt,
    leftSectionPointerEvents: Ot,
    leftSectionProps: ae,
    inputContainer: ze,
    inputWrapperOrder: be,
    withAsterisk: Ve,
    required: Ne,
    labelProps: fe,
    descriptionProps: Vt,
    errorProps: Ge,
    wrapperProps: It,
    description: sn,
    label: cn,
    error: un,
    withErrorStyles: yo,
    name: Re,
    form: vo,
    id: da,
    clearable: ma,
    clearButtonProps: nl,
    hiddenInputProps: go,
    hiddenInputValuesDivider: pa,
    mod: ha,
    renderOption: bo,
    onRemove: wn,
    onClear: de,
    scrollAreaProps: So,
    acceptValueOnBlur: Ae,
    ...oe
  } = s, _l = ro(da), Ml = Cv(B), zl = Rf(Ml), fn = E.useRef(null), je = ue(fn, o), jt = $f({
    opened: H,
    defaultOpened: $,
    onDropdownOpen: q,
    onDropdownClose: () => {
      k?.(), jt.resetSelectedOption();
    }
  }), {
    styleProps: ll,
    rest: { type: Nl, autoComplete: xo, ...ya }
  } = Ri(oe), [xt, me] = Al({
    value: g,
    defaultValue: S,
    finalValue: [],
    onChange: b
  }), [pe, He] = Al({
    value: ot,
    defaultValue: ft,
    finalValue: "",
    onChange: U
  }), Tn = Ht({
    name: "TagsInput",
    classes: {},
    props: s,
    classNames: r,
    styles: d,
    unstyled: p
  }), { resolvedClassNames: al, resolvedStyles: ol } = os({
    props: s,
    styles: d,
    classNames: r
  }), jl = (yt) => {
    const he = xt.some((En) => En.toLowerCase() === yt.toLowerCase());
    he && M?.(yt), (!he || he && _) && xt.length < R && (J?.(yt), He(""), yt.length > 0 && me([...xt, yt]));
  }, wo = (yt) => {
    if (x?.(yt), yt.isPropagationStopped())
      return;
    const he = pe.trim(), { length: En } = he;
    if (et.includes(yt.key) && En > 0 && (me(
      dy({
        splitChars: et,
        allowDuplicates: _,
        maxTags: R,
        value: pe,
        currentTags: xt
      })
    ), He(""), yt.preventDefault()), yt.key === "Enter" && En > 0 && !yt.nativeEvent.isComposing) {
      if (yt.preventDefault(), !!document.querySelector(
        `#${jt.listId} [data-combobox-option][data-combobox-selected]`
      ))
        return;
      jl(he);
    }
    yt.key === "Backspace" && En === 0 && xt.length > 0 && !yt.nativeEvent.isComposing && (wn?.(xt[xt.length - 1]), me(xt.slice(0, xt.length - 1)));
  }, De = (yt) => {
    if (lt?.(yt), yt.preventDefault(), yt.clipboardData) {
      const he = yt.clipboardData.getData("text/plain");
      me(
        dy({
          splitChars: et,
          allowDuplicates: _,
          maxTags: R,
          value: `${pe}${he}`,
          currentTags: xt
        })
      ), He("");
    }
  }, Jt = xt.map((yt, he) => /* @__PURE__ */ w.jsx(
    sa,
    {
      withRemoveButton: !F,
      onRemove: () => {
        const En = xt.slice();
        En.splice(he, 1), me(En), wn?.(yt);
      },
      unstyled: p,
      disabled: V,
      ...Tn("pill"),
      children: yt
    },
    `${yt}-${he}`
  ));
  E.useEffect(() => {
    W && jt.selectFirstOption();
  }, [W, xt, pe]);
  const St = ma && xt.length > 0 && !V && !F && /* @__PURE__ */ w.jsx(
    At.ClearButton,
    {
      size: h,
      ...nl,
      onClear: () => {
        me([]), He(""), fn.current?.focus(), jt.openDropdown(), de?.();
      }
    }
  );
  return /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
    /* @__PURE__ */ w.jsxs(
      At,
      {
        store: jt,
        classNames: al,
        styles: ol,
        unstyled: p,
        size: h,
        readOnly: F,
        __staticSelector: "TagsInput",
        onOptionSubmit: (yt) => {
          J?.(yt), He(""), xt.length < R && me([...xt, zl[yt].label]), jt.resetSelectedOption();
        },
        ...Z,
        children: [
          /* @__PURE__ */ w.jsx(At.DropdownTarget, { children: /* @__PURE__ */ w.jsx(
            ao,
            {
              ...ll,
              __staticSelector: "TagsInput",
              classNames: al,
              styles: ol,
              unstyled: p,
              size: h,
              className: u,
              style: f,
              variant: j,
              disabled: V,
              radius: nt,
              rightSection: I || St,
              rightSectionWidth: ht,
              rightSectionPointerEvents: tt,
              rightSectionProps: Nt,
              leftSection: bt,
              leftSectionWidth: zt,
              leftSectionPointerEvents: Ot,
              leftSectionProps: ae,
              inputContainer: ze,
              inputWrapperOrder: be,
              withAsterisk: Ve,
              required: Ne,
              labelProps: fe,
              descriptionProps: Vt,
              errorProps: Ge,
              wrapperProps: It,
              description: sn,
              label: cn,
              error: un,
              multiline: !0,
              withErrorStyles: yo,
              __stylesApiProps: { ...s, multiline: !0 },
              id: _l,
              mod: ha,
              children: /* @__PURE__ */ w.jsxs(sa.Group, { disabled: V, unstyled: p, ...Tn("pillsList"), children: [
                Jt,
                /* @__PURE__ */ w.jsx(At.EventsTarget, { autoComplete: xo, children: /* @__PURE__ */ w.jsx(
                  ao.Field,
                  {
                    ...ya,
                    ref: je,
                    ...Tn("inputField"),
                    unstyled: p,
                    onKeyDown: wo,
                    onFocus: (yt) => {
                      C?.(yt), jt.openDropdown();
                    },
                    onBlur: (yt) => {
                      G?.(yt), Ae && jl(pe), jt.closeDropdown();
                    },
                    onPaste: De,
                    value: pe,
                    onChange: (yt) => He(yt.currentTarget.value),
                    required: Ne && xt.length === 0,
                    disabled: V,
                    readOnly: F,
                    id: _l
                  }
                ) })
              ] })
            }
          ) }),
          /* @__PURE__ */ w.jsx(
            jv,
            {
              data: rw({ data: Ml, value: xt }),
              hidden: F || V,
              filter: P,
              search: pe,
              limit: it,
              hiddenWhenEmpty: !0,
              withScrollArea: ct,
              maxDropdownHeight: dt,
              unstyled: p,
              labelId: cn ? `${_l}-label` : void 0,
              "aria-label": cn ? void 0 : oe["aria-label"],
              renderOption: bo,
              scrollAreaProps: So
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ w.jsx(
      At.HiddenInput,
      {
        name: Re,
        form: vo,
        value: xt,
        valuesDivider: pa,
        disabled: V,
        ...go
      }
    )
  ] });
});
xi.classes = { ..._i.classes, ...At.classes };
xi.displayName = "@mantine/core/TagsInput";
var uw = {
  outline: {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  },
  filled: {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    stroke: "none"
  }
};
const ho = (l, o, s, r) => {
  const u = E.forwardRef(
    ({ color: f = "currentColor", size: d = 24, stroke: p = 2, title: y, className: h, children: g, ...S }, b) => E.createElement(
      "svg",
      {
        ref: b,
        ...uw[l],
        width: d,
        height: d,
        className: ["tabler-icon", `tabler-icon-${o}`, h].join(" "),
        strokeWidth: p,
        stroke: f,
        ...S
      },
      [
        y && E.createElement("title", { key: "svg-title" }, y),
        ...r.map(([x, R]) => E.createElement(x, R)),
        ...Array.isArray(g) ? g : [g]
      ]
    )
  );
  return u.displayName = `${s}`, u;
};
var fw = ho("outline", "arrow-down", "IconArrowDown", [["path", { d: "M12 5l0 14", key: "svg-0" }], ["path", { d: "M18 13l-6 6", key: "svg-1" }], ["path", { d: "M6 13l6 6", key: "svg-2" }]]);
var my = ho("outline", "arrow-up", "IconArrowUp", [["path", { d: "M12 5l0 14", key: "svg-0" }], ["path", { d: "M18 11l-6 -6", key: "svg-1" }], ["path", { d: "M6 11l6 -6", key: "svg-2" }]]);
var py = ho("outline", "copy", "IconCopy", [["path", { d: "M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z", key: "svg-0" }], ["path", { d: "M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1", key: "svg-1" }]]);
var dw = ho("outline", "flip-horizontal", "IconFlipHorizontal", [["path", { d: "M3 12l18 0", key: "svg-0" }], ["path", { d: "M7 16l10 0l-10 5l0 -5", key: "svg-1" }], ["path", { d: "M7 8l10 0l-10 -5l0 5", key: "svg-2" }]]);
var mw = ho("outline", "row-insert-top", "IconRowInsertTop", [["path", { d: "M4 18v-4a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z", key: "svg-0" }], ["path", { d: "M12 9v-4", key: "svg-1" }], ["path", { d: "M10 7l4 0", key: "svg-2" }]]);
var pw = ho("outline", "trash", "IconTrash", [["path", { d: "M4 7l16 0", key: "svg-0" }], ["path", { d: "M10 11l0 6", key: "svg-1" }], ["path", { d: "M14 11l0 6", key: "svg-2" }], ["path", { d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12", key: "svg-3" }], ["path", { d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3", key: "svg-4" }]]);
const Gv = [":forward", ":backward", ""], hw = [
  "escalator",
  "lift",
  "stairs",
  "flat",
  "ramp"
];
function hy(l, o) {
  return Object.fromEntries(
    Object.entries(l).filter((s) => !o.includes(s[0]))
  );
}
const yw = () => crypto.getRandomValues(new Uint32Array(2)).join(""), Kr = (l) => l && l !== "no" && l !== "none", Xr = (l) => Kr(l) ? l : "", kr = (l, o) => l ? l.split(o) : [];
function vw(l) {
  return Object.values(l).every((o) => !Array.isArray(o));
}
function gw({ dir: l, rows: o, otherTags: s }) {
  const r = {}, u = o.map((h) => h.type?.join(";") || "no").join("|");
  u && (r[`exit:carriages${l}`] = u);
  const f = o.map((h) => h.dest?.join(";") || "none");
  f.some(Kr) && (r[`destination:carriages${l}`] = f.join("|"));
  const d = o.map((h) => h.destSymbol?.join(";") || "none");
  d.some(Kr) && (r[`destination:symbol:carriages${l}`] = d.join("|"));
  const p = o.map((h) => h.destRef?.join(";") || "none");
  p.some(Kr) && (r[`destination:ref:carriages${l}`] = p.join("|"));
  const y = Gv.filter((h) => h !== l);
  for (const h of y)
    delete s[`exit:carriages${h}`], delete s[`destination:carriages${h}`], delete s[`destination:symbol:carriages${h}`], delete s[`destination:ref:carriages${h}`];
  return { ...s, ...r };
}
function bw(l) {
  const o = l["exit:carriages"] ? "" : l["exit:carriages:backward"] ? ":backward" : ":forward", s = `exit:carriages${o}`, r = `destination:carriages${o}`, u = `destination:ref:carriages${o}`, f = `destination:symbol:carriages${o}`, d = l[s]?.split("|").map(Xr) || [], p = l[r]?.split("|").map(Xr) || [], y = l[u]?.split("|").map(Xr) || [], h = l[f]?.split("|").map(Xr) || [], g = structuredClone(l);
  return delete g[s], delete g[r], delete g[u], delete g[f], {
    dir: o,
    rows: d.map((S, b) => ({
      key: b,
      type: kr(S, ";"),
      dest: kr(p[b], ";"),
      destRef: kr(y[b], ";"),
      destSymbol: kr(h[b], ";")
    })),
    otherTags: g
  };
}
const Sw = "" + new URL("styles.css", import.meta.url).href, xw = "" + new URL("main.css", import.meta.url).href, ww = ({ domRoot: l, children: o }) => {
  const s = {
    components: { Portal: { defaultProps: { target: l } } }
  };
  return /* @__PURE__ */ w.jsxs(
    My,
    {
      cssVariablesSelector: l.tagName,
      getRootElement: () => l,
      theme: s,
      children: [
        /* @__PURE__ */ w.jsx("link", { rel: "stylesheet", href: Sw }),
        /* @__PURE__ */ w.jsx("link", { rel: "stylesheet", href: xw }),
        o
      ]
    }
  );
}, Xv = ({
  domRoot: l,
  tagsStore: o
}) => {
  const s = E.useSyncExternalStore(o.subscribe, o.getValue);
  if (!vw(s))
    return /* @__PURE__ */ w.jsx(w.Fragment, { children: "cannot use in this field with a multiselect" });
  const r = bw(s), u = (f) => {
    o.setValue(gw(f));
  };
  return /* @__PURE__ */ w.jsx(ww, { domRoot: l, children: /* @__PURE__ */ w.jsxs("div", { className: "container", children: [
    /* @__PURE__ */ w.jsxs(Ef, { gap: 8, align: "center", children: [
      /* @__PURE__ */ w.jsx(
        Zf,
        {
          size: "xs",
          color: "blue",
          data: Gv.filter(Boolean).map((f) => ({
            value: f,
            label: f || "*"
          })),
          value: r.dir,
          onChange: (f) => u({ ...r, dir: f }),
          disabled: !r.rows.length
        }
      ),
      /* @__PURE__ */ w.jsx(
        Ei,
        {
          variant: "light",
          onClick: () => {
            u({
              ...r,
              rows: [...r.rows, { key: yw() }]
            });
          },
          children: /* @__PURE__ */ w.jsx(mw, {})
        }
      ),
      /* @__PURE__ */ w.jsx(
        Ei,
        {
          variant: "light",
          onClick: () => {
            u({ ...r, rows: [...r.rows].reverse() });
          },
          children: /* @__PURE__ */ w.jsx(dw, {})
        }
      )
    ] }),
    /* @__PURE__ */ w.jsx("div", { className: "wrap", children: /* @__PURE__ */ w.jsxs(Lt, { className: "table", children: [
      /* @__PURE__ */ w.jsx(Lt.Thead, { children: /* @__PURE__ */ w.jsxs(Lt.Tr, { children: [
        /* @__PURE__ */ w.jsx(Lt.Th, { children: "Num" }),
        /* @__PURE__ */ w.jsx(Lt.Th, { children: "Type" }),
        /* @__PURE__ */ w.jsx(Lt.Th, { children: "To" }),
        /* @__PURE__ */ w.jsx(Lt.Th, { children: "Symbol" }),
        /* @__PURE__ */ w.jsx(Lt.Th, { children: "Exit Num" })
      ] }) }),
      /* @__PURE__ */ w.jsx(Lt.Tbody, { children: r.rows.map((f, d) => {
        function p(b) {
          const x = structuredClone(r.rows);
          Object.assign(x[d], b), u({ ...r, rows: x });
        }
        function y(b) {
          const x = structuredClone(r.rows), R = x[d];
          x[d] = x[d + b], x[d + b] = R, u({ ...r, rows: x });
        }
        function h(b) {
          const x = structuredClone(r.rows);
          x[d] = {
            ...x[d + b],
            key: x[d].key
            // keep the original key
          }, u({ ...r, rows: x });
        }
        const g = r.rows[d - 1] || { _: 0 }, S = JSON.stringify(hy(f, ["key", "type"])) === JSON.stringify(hy(g, ["key", "type"])) && (f.dest?.length || f.destRef?.length || f.destSymbol?.length);
        return /* @__PURE__ */ w.jsxs(Lt.Tr, { children: [
          /* @__PURE__ */ w.jsx(Lt.Td, { children: /* @__PURE__ */ w.jsxs(ne, { shadow: "md", width: 200, children: [
            /* @__PURE__ */ w.jsx(ne.Target, { children: /* @__PURE__ */ w.jsxs(bs, { size: "xs", variant: "outline", children: [
              "# ",
              d + 1
            ] }) }),
            /* @__PURE__ */ w.jsxs(ne.Dropdown, { children: [
              /* @__PURE__ */ w.jsx(
                ne.Item,
                {
                  leftSection: /* @__PURE__ */ w.jsx(pw, {}),
                  color: "red",
                  onClick: () => {
                    const b = [...r.rows];
                    b.splice(d, 1), u({ ...r, rows: b });
                  },
                  children: "Delete"
                }
              ),
              /* @__PURE__ */ w.jsx(ne.Divider, {}),
              /* @__PURE__ */ w.jsx(
                ne.Item,
                {
                  leftSection: /* @__PURE__ */ w.jsx(my, {}),
                  disabled: !d,
                  onClick: () => y(-1),
                  children: "Move Up"
                }
              ),
              /* @__PURE__ */ w.jsx(
                ne.Item,
                {
                  leftSection: /* @__PURE__ */ w.jsx(fw, {}),
                  disabled: d === r.rows.length - 1,
                  onClick: () => y(1),
                  children: "Move Down"
                }
              ),
              /* @__PURE__ */ w.jsx(ne.Divider, {}),
              S ? /* @__PURE__ */ w.jsx(
                ne.Item,
                {
                  leftSection: /* @__PURE__ */ w.jsx(my, {}),
                  disabled: !0,
                  children: "Unlink from previous car"
                }
              ) : /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
                /* @__PURE__ */ w.jsx(
                  ne.Item,
                  {
                    leftSection: /* @__PURE__ */ w.jsx(py, {}),
                    disabled: !d,
                    onClick: () => h(-1),
                    children: "Copy from previous car"
                  }
                ),
                /* @__PURE__ */ w.jsx(
                  ne.Item,
                  {
                    leftSection: /* @__PURE__ */ w.jsx(py, {}),
                    disabled: d === r.rows.length - 1,
                    onClick: () => h(1),
                    children: "Copy from next car"
                  }
                )
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ w.jsx(Lt.Td, { children: /* @__PURE__ */ w.jsx(
            Qf,
            {
              size: "xs",
              multiple: !0,
              data: hw,
              value: f.type || [],
              onChange: (b) => p({ type: b })
            }
          ) }),
          S ? /* @__PURE__ */ w.jsx(Lt.Td, { colSpan: 3, children: /* @__PURE__ */ w.jsx("em", { children: "(same as previous)" }) }) : /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
            /* @__PURE__ */ w.jsx(Lt.Td, { children: /* @__PURE__ */ w.jsx(
              xi,
              {
                size: "xs",
                value: f.dest,
                onChange: (b) => p({ dest: b })
              }
            ) }),
            /* @__PURE__ */ w.jsx(Lt.Td, { children: /* @__PURE__ */ w.jsx(
              xi,
              {
                size: "xs",
                value: f.destSymbol,
                onChange: (b) => p({ destSymbol: b })
              }
            ) }),
            /* @__PURE__ */ w.jsx(Lt.Td, { children: /* @__PURE__ */ w.jsx(
              xi,
              {
                size: "xs",
                value: f.destRef,
                onChange: (b) => p({ destRef: b })
              }
            ) })
          ] })
        ] }, f.key);
      }) })
    ] }) })
  ] }) });
};
Xv.displayName = "ExitCarriages";
class Tw extends HTMLElement {
  #t;
  #e;
  #n;
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this.#t = document.createElement("body"), this.shadowRoot.append(this.#t), this.#e = rb.createRoot(this.#t);
  }
  init(o) {
    this.#n = o, this.#e.render(/* @__PURE__ */ w.jsx(Xv, { domRoot: this.#t, ...this.#n }));
  }
  disconnectedCallback() {
    this.#e.unmount();
  }
}
export {
  Tw as default
};
//# sourceMappingURL=iD-plugin.js.map
