/*! medium-zoom 1.0.6 | MIT License | https://github.com/francoischalifour/medium-zoom */ !function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).mediumZoom = t();
}(this, function() {
    "use strict";
    var e1 = Object.assign || function(e) {
        for(var t = 1; t < arguments.length; t++){
            var o = arguments[t];
            for(var n in o)Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
        }
        return e;
    }, t1 = function(e) {
        return "IMG" === e.tagName;
    }, o1 = function(e) {
        return e && 1 === e.nodeType;
    }, n1 = function(e) {
        return ".svg" === (e.currentSrc || e.src).substr(-4).toLowerCase();
    }, i1 = function(e2) {
        try {
            return Array.isArray(e2) ? e2.filter(t1) : function(e) {
                return NodeList.prototype.isPrototypeOf(e);
            }(e2) ? [].slice.call(e2).filter(t1) : o1(e2) ? [
                e2
            ].filter(t1) : "string" == typeof e2 ? [].slice.call(document.querySelectorAll(e2)).filter(t1) : [];
        } catch (e) {
            throw new TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom");
        }
    }, r1 = function(e) {
        var t = document.createElement("div");
        return t.classList.add("medium-zoom-overlay"), t.style.background = e, t;
    }, d1 = function(e) {
        var t = e.getBoundingClientRect(), o = t.top, n = t.left, i = t.width, r = t.height, d = e.cloneNode(), m = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0, a = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
        return d.removeAttribute("id"), d.style.position = "absolute", d.style.top = o + m + "px", d.style.left = n + a + "px", d.style.width = i + "px", d.style.height = r + "px", d.style.transform = "", d;
    }, m1 = function(t, o) {
        var n = e1({
            bubbles: !1,
            cancelable: !1,
            detail: void 0
        }, o);
        if ("function" == typeof window.CustomEvent) return new CustomEvent(t, n);
        var i = document.createEvent("CustomEvent");
        return i.initCustomEvent(t, n.bubbles, n.cancelable, n.detail), i;
    };
    return function(e, t) {
        void 0 === t && (t = {});
        var o = t.insertAt;
        if (e && "undefined" != typeof document) {
            var n = document.head || document.getElementsByTagName("head")[0], i = document.createElement("style");
            i.type = "text/css", "top" === o && n.firstChild ? n.insertBefore(i, n.firstChild) : n.appendChild(i), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(document.createTextNode(e));
        }
    }(".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}"), function t2(a1) {
        var l1 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, c1 = window.Promise || function(e) {
            function t() {}
            e(t, t);
        }, u1 = function(e) {
            var t = e.target;
            t !== N ? -1 !== O.indexOf(t) && w1({
                target: t
            }) : E1();
        }, s1 = function() {
            if (!A && T.original) {
                var e = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
                Math.abs(k - e) > S.scrollOffset && setTimeout(E1, 150);
            }
        }, f1 = function(e) {
            var t = e.key || e.keyCode;
            "Escape" !== t && "Esc" !== t && 27 !== t || E1();
        }, p1 = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t;
            if (t.background && (N.style.background = t.background), t.container && t.container instanceof Object && (n.container = e1({}, S.container, t.container)), t.template) {
                var i = o1(t.template) ? t.template : document.querySelector(t.template);
                n.template = i;
            }
            return S = e1({}, S, n), O.forEach(function(e) {
                e.dispatchEvent(m1("medium-zoom:update", {
                    detail: {
                        zoom: j
                    }
                }));
            }), j;
        }, g1 = function() {
            var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return t2(e1({}, S, o));
        }, v1 = function() {
            for(var e3 = arguments.length, t3 = Array(e3), o2 = 0; o2 < e3; o2++)t3[o2] = arguments[o2];
            var n = t3.reduce(function(e, t) {
                return [].concat(e, i1(t));
            }, []);
            return n.filter(function(e) {
                return -1 === O.indexOf(e);
            }).forEach(function(e) {
                O.push(e), e.classList.add("medium-zoom-image");
            }), x.forEach(function(e4) {
                var t = e4.type, o = e4.listener, i = e4.options;
                n.forEach(function(e) {
                    e.addEventListener(t, o, i);
                });
            }), j;
        }, h1 = function() {
            for(var e5 = arguments.length, t4 = Array(e5), o = 0; o < e5; o++)t4[o] = arguments[o];
            T.zoomed && E1();
            var n = t4.length > 0 ? t4.reduce(function(e, t) {
                return [].concat(e, i1(t));
            }, []) : O;
            return n.forEach(function(e) {
                e.classList.remove("medium-zoom-image"), e.dispatchEvent(m1("medium-zoom:detach", {
                    detail: {
                        zoom: j
                    }
                }));
            }), O = O.filter(function(e) {
                return -1 === n.indexOf(e);
            }), j;
        }, z1 = function(e, t) {
            var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return O.forEach(function(n) {
                n.addEventListener("medium-zoom:" + e, t, o);
            }), x.push({
                type: "medium-zoom:" + e,
                listener: t,
                options: o
            }), j;
        }, y1 = function(e, t) {
            var o3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return O.forEach(function(n) {
                n.removeEventListener("medium-zoom:" + e, t, o3);
            }), x = x.filter(function(o) {
                return !(o.type === "medium-zoom:" + e && o.listener.toString() === t.toString());
            }), j;
        }, b1 = function() {
            var t5 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, i2 = t5.target, r2 = function() {
                var t = {
                    width: document.documentElement.clientWidth,
                    height: document.documentElement.clientHeight,
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0
                }, i = void 0, r = void 0;
                if (S.container) {
                    if (S.container instanceof Object) i = (t = e1({}, t, S.container)).width - t.left - t.right - 2 * S.margin, r = t.height - t.top - t.bottom - 2 * S.margin;
                    else {
                        var d = (o1(S.container) ? S.container : document.querySelector(S.container)).getBoundingClientRect(), m = d.width, a = d.height, l = d.left, c = d.top;
                        t = e1({}, t, {
                            width: m,
                            height: a,
                            left: l,
                            top: c
                        });
                    }
                }
                i = i || t.width - 2 * S.margin, r = r || t.height - 2 * S.margin;
                var u = T.zoomedHd || T.original, s = n1(u) ? i : u.naturalWidth || i, f = n1(u) ? r : u.naturalHeight || r, p = u.getBoundingClientRect(), g = p.top, v = p.left, h = p.width, z = p.height, y = Math.min(s, i) / h, b = Math.min(f, r) / z, E = Math.min(y, b), w = "scale(" + E + ") translate3d(" + ((i - h) / 2 - v + S.margin + t.left) / E + "px, " + ((r - z) / 2 - g + S.margin + t.top) / E + "px, 0)";
                T.zoomed.style.transform = w, T.zoomedHd && (T.zoomedHd.style.transform = w);
            };
            return new c1(function(e) {
                if (i2 && -1 === O.indexOf(i2)) e(j);
                else if (T.zoomed) e(j);
                else {
                    if (i2) T.original = i2;
                    else {
                        if (!(O.length > 0)) return void e(j);
                        var t = O;
                        T.original = t[0];
                    }
                    if (T.original.dispatchEvent(m1("medium-zoom:open", {
                        detail: {
                            zoom: j
                        }
                    })), k = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0, A = !0, T.zoomed = d1(T.original), document.body.appendChild(N), S.template) {
                        var n = o1(S.template) ? S.template : document.querySelector(S.template);
                        T.template = document.createElement("div"), T.template.appendChild(n.content.cloneNode(!0)), document.body.appendChild(T.template);
                    }
                    if (document.body.appendChild(T.zoomed), window.requestAnimationFrame(function() {
                        document.body.classList.add("medium-zoom--opened");
                    }), T.original.classList.add("medium-zoom-image--hidden"), T.zoomed.classList.add("medium-zoom-image--opened"), T.zoomed.addEventListener("click", E1), T.zoomed.addEventListener("transitionend", function t() {
                        A = !1, T.zoomed.removeEventListener("transitionend", t), T.original.dispatchEvent(m1("medium-zoom:opened", {
                            detail: {
                                zoom: j
                            }
                        })), e(j);
                    }), T.original.getAttribute("data-zoom-src")) {
                        T.zoomedHd = T.zoomed.cloneNode(), T.zoomedHd.removeAttribute("srcset"), T.zoomedHd.removeAttribute("sizes"), T.zoomedHd.src = T.zoomed.getAttribute("data-zoom-src"), T.zoomedHd.onerror = function() {
                            clearInterval(a), console.warn("Unable to reach the zoom image target " + T.zoomedHd.src), T.zoomedHd = null, r2();
                        };
                        var a = setInterval(function() {
                            T.zoomedHd.complete && (clearInterval(a), T.zoomedHd.classList.add("medium-zoom-image--opened"), T.zoomedHd.addEventListener("click", E1), document.body.appendChild(T.zoomedHd), r2());
                        }, 10);
                    } else if (T.original.hasAttribute("srcset")) {
                        T.zoomedHd = T.zoomed.cloneNode(), T.zoomedHd.removeAttribute("sizes"), T.zoomedHd.removeAttribute("loading");
                        var l = T.zoomedHd.addEventListener("load", function() {
                            T.zoomedHd.removeEventListener("load", l), T.zoomedHd.classList.add("medium-zoom-image--opened"), T.zoomedHd.addEventListener("click", E1), document.body.appendChild(T.zoomedHd), r2();
                        });
                    } else r2();
                }
            });
        }, E1 = function() {
            return new c1(function(e) {
                if (!A && T.original) A = !0, document.body.classList.remove("medium-zoom--opened"), T.zoomed.style.transform = "", T.zoomedHd && (T.zoomedHd.style.transform = ""), T.template && (T.template.style.transition = "opacity 150ms", T.template.style.opacity = 0), T.original.dispatchEvent(m1("medium-zoom:close", {
                    detail: {
                        zoom: j
                    }
                })), T.zoomed.addEventListener("transitionend", function t() {
                    T.original.classList.remove("medium-zoom-image--hidden"), document.body.removeChild(T.zoomed), T.zoomedHd && document.body.removeChild(T.zoomedHd), document.body.removeChild(N), T.zoomed.classList.remove("medium-zoom-image--opened"), T.template && document.body.removeChild(T.template), A = !1, T.zoomed.removeEventListener("transitionend", t), T.original.dispatchEvent(m1("medium-zoom:closed", {
                        detail: {
                            zoom: j
                        }
                    })), T.original = null, T.zoomed = null, T.zoomedHd = null, T.template = null, e(j);
                });
                else e(j);
            });
        }, w1 = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.target;
            return T.original ? E1() : b1({
                target: t
            });
        }, L = function() {
            return S;
        }, H = function() {
            return O;
        }, C = function() {
            return T.original;
        }, O = [], x = [], A = !1, k = 0, S = l1, T = {
            original: null,
            zoomed: null,
            zoomedHd: null,
            template: null
        };
        "[object Object]" === Object.prototype.toString.call(a1) ? S = a1 : (a1 || "string" == typeof a1) && v1(a1), S = e1({
            margin: 0,
            background: "#fff",
            scrollOffset: 40,
            container: null,
            template: null
        }, S);
        var N = r1(S.background);
        document.addEventListener("click", u1), document.addEventListener("keyup", f1), document.addEventListener("scroll", s1), window.addEventListener("resize", E1);
        var j = {
            open: b1,
            close: E1,
            toggle: w1,
            update: p1,
            clone: g1,
            attach: v1,
            detach: h1,
            on: z1,
            off: y1,
            getOptions: L,
            getImages: H,
            getZoomedImage: C
        };
        return j;
    };
});

//# sourceMappingURL=details.ff81cea9.js.map
