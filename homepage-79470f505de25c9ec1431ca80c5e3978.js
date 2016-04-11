/*!
 * jQuery JavaScript Library v1.8.3
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: Tue Nov 13 2012 08:20:33 GMT-0500 (Eastern Standard Time)
 */
(function(e, t) {
    function _(e) {
        var t = M[e] = {};
        return v.each(e.split(y), function(e, n) {
            t[n] = !0
        }), t
    }

    function H(e, n, r) {
        if (r === t && e.nodeType === 1) {
            var i = "data-" + n.replace(P, "-$1").toLowerCase();
            r = e.getAttribute(i);
            if (typeof r == "string") {
                try {
                    r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : +r + "" === r ? +r : D.test(r) ? v.parseJSON(r) : r
                } catch (s) {}
                v.data(e, n, r)
            } else r = t
        }
        return r
    }

    function B(e) {
        var t;
        for (t in e) {
            if (t === "data" && v.isEmptyObject(e[t])) continue;
            if (t !== "toJSON") return !1
        }
        return !0
    }

    function et() {
        return !1
    }

    function tt() {
        return !0
    }

    function ut(e) {
        return !e || !e.parentNode || e.parentNode.nodeType === 11
    }

    function at(e, t) {
        do e = e[t]; while (e && e.nodeType !== 1);
        return e
    }

    function ft(e, t, n) {
        t = t || 0;
        if (v.isFunction(t)) return v.grep(e, function(e, r) {
            var i = !!t.call(e, r, e);
            return i === n
        });
        if (t.nodeType) return v.grep(e, function(e, r) {
            return e === t === n
        });
        if (typeof t == "string") {
            var r = v.grep(e, function(e) {
                return e.nodeType === 1
            });
            if (it.test(t)) return v.filter(t, r, !n);
            t = v.filter(t, r)
        }
        return v.grep(e, function(e, r) {
            return v.inArray(e, t) >= 0 === n
        })
    }

    function lt(e) {
        var t = ct.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            while (t.length) n.createElement(t.pop());
        return n
    }

    function Lt(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
    }

    function At(e, t) {
        if (t.nodeType !== 1 || !v.hasData(e)) return;
        var n, r, i, s = v._data(e),
            o = v._data(t, s),
            u = s.events;
        if (u) {
            delete o.handle, o.events = {};
            for (n in u)
                for (r = 0, i = u[n].length; r < i; r++) v.event.add(t, n, u[n][r])
        }
        o.data && (o.data = v.extend({}, o.data))
    }

    function Ot(e, t) {
        var n;
        if (t.nodeType !== 1) return;
        t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), n = t.nodeName.toLowerCase(), n === "object" ? (t.parentNode && (t.outerHTML = e.outerHTML), v.support.html5Clone && e.innerHTML && !v.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : n === "input" && Et.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : n === "option" ? t.selected = e.defaultSelected : n === "input" || n === "textarea" ? t.defaultValue = e.defaultValue : n === "script" && t.text !== e.text && (t.text = e.text), t.removeAttribute(v.expando)
    }

    function Mt(e) {
        return typeof e.getElementsByTagName != "undefined" ? e.getElementsByTagName("*") : typeof e.querySelectorAll != "undefined" ? e.querySelectorAll("*") : []
    }

    function _t(e) {
        Et.test(e.type) && (e.defaultChecked = e.checked)
    }

    function Qt(e, t) {
        if (t in e) return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1),
            r = t,
            i = Jt.length;
        while (i--) {
            t = Jt[i] + n;
            if (t in e) return t
        }
        return r
    }

    function Gt(e, t) {
        return e = t || e, v.css(e, "display") === "none" || !v.contains(e.ownerDocument, e)
    }

    function Yt(e, t) {
        var n, r, i = [],
            s = 0,
            o = e.length;
        for (; s < o; s++) {
            n = e[s];
            if (!n.style) continue;
            i[s] = v._data(n, "olddisplay"), t ? (!i[s] && n.style.display === "none" && (n.style.display = ""), n.style.display === "" && Gt(n) && (i[s] = v._data(n, "olddisplay", nn(n.nodeName)))) : (r = Dt(n, "display"), !i[s] && r !== "none" && v._data(n, "olddisplay", r))
        }
        for (s = 0; s < o; s++) {
            n = e[s];
            if (!n.style) continue;
            if (!t || n.style.display === "none" || n.style.display === "") n.style.display = t ? i[s] || "" : "none"
        }
        return e
    }

    function Zt(e, t, n) {
        var r = Rt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function en(e, t, n, r) {
        var i = n === (r ? "border" : "content") ? 4 : t === "width" ? 1 : 0,
            s = 0;
        for (; i < 4; i += 2) n === "margin" && (s += v.css(e, n + $t[i], !0)), r ? (n === "content" && (s -= parseFloat(Dt(e, "padding" + $t[i])) || 0), n !== "margin" && (s -= parseFloat(Dt(e, "border" + $t[i] + "Width")) || 0)) : (s += parseFloat(Dt(e, "padding" + $t[i])) || 0, n !== "padding" && (s += parseFloat(Dt(e, "border" + $t[i] + "Width")) || 0));
        return s
    }

    function tn(e, t, n) {
        var r = t === "width" ? e.offsetWidth : e.offsetHeight,
            i = !0,
            s = v.support.boxSizing && v.css(e, "boxSizing") === "border-box";
        if (r <= 0 || r == null) {
            r = Dt(e, t);
            if (r < 0 || r == null) r = e.style[t];
            if (Ut.test(r)) return r;
            i = s && (v.support.boxSizingReliable || r === e.style[t]), r = parseFloat(r) || 0
        }
        return r + en(e, t, n || (s ? "border" : "content"), i) + "px"
    }

    function nn(e) {
        if (Wt[e]) return Wt[e];
        var t = v("<" + e + ">").appendTo(i.body),
            n = t.css("display");
        t.remove();
        if (n === "none" || n === "") {
            Pt = i.body.appendChild(Pt || v.extend(i.createElement("iframe"), {
                frameBorder: 0,
                width: 0,
                height: 0
            }));
            if (!Ht || !Pt.createElement) Ht = (Pt.contentWindow || Pt.contentDocument).document, Ht.write("<!doctype html><html><body>"), Ht.close();
            t = Ht.body.appendChild(Ht.createElement(e)), n = Dt(t, "display"), i.body.removeChild(Pt)
        }
        return Wt[e] = n, n
    }

    function fn(e, t, n, r) {
        var i;
        if (v.isArray(t)) v.each(t, function(t, i) {
            n || sn.test(e) ? r(e, i) : fn(e + "[" + (typeof i == "object" ? t : "") + "]", i, n, r)
        });
        else if (!n && v.type(t) === "object")
            for (i in t) fn(e + "[" + i + "]", t[i], n, r);
        else r(e, t)
    }

    function Cn(e) {
        return function(t, n) {
            typeof t != "string" && (n = t, t = "*");
            var r, i, s, o = t.toLowerCase().split(y),
                u = 0,
                a = o.length;
            if (v.isFunction(n))
                for (; u < a; u++) r = o[u], s = /^\+/.test(r), s && (r = r.substr(1) || "*"), i = e[r] = e[r] || [], i[s ? "unshift" : "push"](n)
        }
    }

    function kn(e, n, r, i, s, o) {
        s = s || n.dataTypes[0], o = o || {}, o[s] = !0;
        var u, a = e[s],
            f = 0,
            l = a ? a.length : 0,
            c = e === Sn;
        for (; f < l && (c || !u); f++) u = a[f](n, r, i), typeof u == "string" && (!c || o[u] ? u = t : (n.dataTypes.unshift(u), u = kn(e, n, r, i, u, o)));
        return (c || !u) && !o["*"] && (u = kn(e, n, r, i, "*", o)), u
    }

    function Ln(e, n) {
        var r, i, s = v.ajaxSettings.flatOptions || {};
        for (r in n) n[r] !== t && ((s[r] ? e : i || (i = {}))[r] = n[r]);
        i && v.extend(!0, e, i)
    }

    function An(e, n, r) {
        var i, s, o, u, a = e.contents,
            f = e.dataTypes,
            l = e.responseFields;
        for (s in l) s in r && (n[l[s]] = r[s]);
        while (f[0] === "*") f.shift(), i === t && (i = e.mimeType || n.getResponseHeader("content-type"));
        if (i)
            for (s in a)
                if (a[s] && a[s].test(i)) {
                    f.unshift(s);
                    break
                }
        if (f[0] in r) o = f[0];
        else {
            for (s in r) {
                if (!f[0] || e.converters[s + " " + f[0]]) {
                    o = s;
                    break
                }
                u || (u = s)
            }
            o = o || u
        }
        if (o) return o !== f[0] && f.unshift(o), r[o]
    }

    function On(e, t) {
        var n, r, i, s, o = e.dataTypes.slice(),
            u = o[0],
            a = {},
            f = 0;
        e.dataFilter && (t = e.dataFilter(t, e.dataType));
        if (o[1])
            for (n in e.converters) a[n.toLowerCase()] = e.converters[n];
        for (; i = o[++f];)
            if (i !== "*") {
                if (u !== "*" && u !== i) {
                    n = a[u + " " + i] || a["* " + i];
                    if (!n)
                        for (r in a) {
                            s = r.split(" ");
                            if (s[1] === i) {
                                n = a[u + " " + s[0]] || a["* " + s[0]];
                                if (n) {
                                    n === !0 ? n = a[r] : a[r] !== !0 && (i = s[0], o.splice(f--, 0, i));
                                    break
                                }
                            }
                        }
                    if (n !== !0)
                        if (n && e["throws"]) t = n(t);
                        else try {
                            t = n(t)
                        } catch (l) {
                            return {
                                state: "parsererror",
                                error: n ? l : "No conversion from " + u + " to " + i
                            }
                        }
                }
                u = i
            }
        return {
            state: "success",
            data: t
        }
    }

    function Fn() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function In() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function $n() {
        return setTimeout(function() {
            qn = t
        }, 0), qn = v.now()
    }

    function Jn(e, t) {
        v.each(t, function(t, n) {
            var r = (Vn[t] || []).concat(Vn["*"]),
                i = 0,
                s = r.length;
            for (; i < s; i++)
                if (r[i].call(e, t, n)) return
        })
    }

    function Kn(e, t, n) {
        var r, i = 0,
            s = 0,
            o = Xn.length,
            u = v.Deferred().always(function() {
                delete a.elem
            }),
            a = function() {
                var t = qn || $n(),
                    n = Math.max(0, f.startTime + f.duration - t),
                    r = n / f.duration || 0,
                    i = 1 - r,
                    s = 0,
                    o = f.tweens.length;
                for (; s < o; s++) f.tweens[s].run(i);
                return u.notifyWith(e, [f, i, n]), i < 1 && o ? n : (u.resolveWith(e, [f]), !1)
            },
            f = u.promise({
                elem: e,
                props: v.extend({}, t),
                opts: v.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: qn || $n(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n, r) {
                    var i = v.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
                    return f.tweens.push(i), i
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? f.tweens.length : 0;
                    for (; n < r; n++) f.tweens[n].run(1);
                    return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]), this
                }
            }),
            l = f.props;
        Qn(l, f.opts.specialEasing);
        for (; i < o; i++) {
            r = Xn[i].call(f, e, l, f.opts);
            if (r) return r
        }
        return Jn(f, l), v.isFunction(f.opts.start) && f.opts.start.call(e, f), v.fx.timer(v.extend(a, {
            anim: f,
            queue: f.opts.queue,
            elem: e
        })), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
    }

    function Qn(e, t) {
        var n, r, i, s, o;
        for (n in e) {
            r = v.camelCase(n), i = t[r], s = e[n], v.isArray(s) && (i = s[1], s = e[n] = s[0]), n !== r && (e[r] = s, delete e[n]), o = v.cssHooks[r];
            if (o && "expand" in o) {
                s = o.expand(s), delete e[r];
                for (n in s) n in e || (e[n] = s[n], t[n] = i)
            } else t[r] = i
        }
    }

    function Gn(e, t, n) {
        var r, i, s, o, u, a, f, l, c, h = this,
            p = e.style,
            d = {},
            m = [],
            g = e.nodeType && Gt(e);
        n.queue || (l = v._queueHooks(e, "fx"), l.unqueued == null && (l.unqueued = 0, c = l.empty.fire, l.empty.fire = function() {
            l.unqueued || c()
        }), l.unqueued++, h.always(function() {
            h.always(function() {
                l.unqueued--, v.queue(e, "fx").length || l.empty.fire()
            })
        })), e.nodeType === 1 && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], v.css(e, "display") === "inline" && v.css(e, "float") === "none" && (!v.support.inlineBlockNeedsLayout || nn(e.nodeName) === "inline" ? p.display = "inline-block" : p.zoom = 1)), n.overflow && (p.overflow = "hidden", v.support.shrinkWrapBlocks || h.done(function() {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (r in t) {
            s = t[r];
            if (Un.exec(s)) {
                delete t[r], a = a || s === "toggle";
                if (s === (g ? "hide" : "show")) continue;
                m.push(r)
            }
        }
        o = m.length;
        if (o) {
            u = v._data(e, "fxshow") || v._data(e, "fxshow", {}), "hidden" in u && (g = u.hidden), a && (u.hidden = !g), g ? v(e).show() : h.done(function() {
                v(e).hide()
            }), h.done(function() {
                var t;
                v.removeData(e, "fxshow", !0);
                for (t in d) v.style(e, t, d[t])
            });
            for (r = 0; r < o; r++) i = m[r], f = h.createTween(i, g ? u[i] : 0), d[i] = u[i] || v.style(e, i), i in u || (u[i] = f.start, g && (f.end = f.start, f.start = i === "width" || i === "height" ? 1 : 0))
        }
    }

    function Yn(e, t, n, r, i) {
        return new Yn.prototype.init(e, t, n, r, i)
    }

    function Zn(e, t) {
        var n, r = {
                height: e
            },
            i = 0;
        t = t ? 1 : 0;
        for (; i < 4; i += 2 - t) n = $t[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function tr(e) {
        return v.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1
    }
    var n, r, i = e.document,
        s = e.location,
        o = e.navigator,
        u = e.jQuery,
        a = e.$,
        f = Array.prototype.push,
        l = Array.prototype.slice,
        c = Array.prototype.indexOf,
        h = Object.prototype.toString,
        p = Object.prototype.hasOwnProperty,
        d = String.prototype.trim,
        v = function(e, t) {
            return new v.fn.init(e, t, n)
        },
        m = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
        g = /\S/,
        y = /\s+/,
        b = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        w = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        E = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        S = /^[\],:{}\s]*$/,
        x = /(?:^|:|,)(?:\s*\[)+/g,
        T = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        N = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
        C = /^-ms-/,
        k = /-([\da-z])/gi,
        L = function(e, t) {
            return (t + "").toUpperCase()
        },
        A = function() {
            i.addEventListener ? (i.removeEventListener("DOMContentLoaded", A, !1), v.ready()) : i.readyState === "complete" && (i.detachEvent("onreadystatechange", A), v.ready())
        },
        O = {};
    v.fn = v.prototype = {
        constructor: v,
        init: function(e, n, r) {
            var s, o, u, a;
            if (!e) return this;
            if (e.nodeType) return this.context = this[0] = e, this.length = 1, this;
            if (typeof e == "string") {
                e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3 ? s = [null, e, null] : s = w.exec(e);
                if (s && (s[1] || !n)) {
                    if (s[1]) return n = n instanceof v ? n[0] : n, a = n && n.nodeType ? n.ownerDocument || n : i, e = v.parseHTML(s[1], a, !0), E.test(s[1]) && v.isPlainObject(n) && this.attr.call(e, n, !0), v.merge(this, e);
                    o = i.getElementById(s[2]);
                    if (o && o.parentNode) {
                        if (o.id !== s[2]) return r.find(e);
                        this.length = 1, this[0] = o
                    }
                    return this.context = i, this.selector = e, this
                }
                return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e)
            }
            return v.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), v.makeArray(e, this))
        },
        selector: "",
        jquery: "1.8.3",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return l.call(this)
        },
        get: function(e) {
            return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
        },
        pushStack: function(e, t, n) {
            var r = v.merge(this.constructor(), e);
            return r.prevObject = this, r.context = this.context, t === "find" ? r.selector = this.selector + (this.selector ? " " : "") + n : t && (r.selector = this.selector + "." + t + "(" + n + ")"), r
        },
        each: function(e, t) {
            return v.each(this, e, t)
        },
        ready: function(e) {
            return v.ready.promise().done(e), this
        },
        eq: function(e) {
            return e = +e, e === -1 ? this.slice(e) : this.slice(e, e + 1)
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        slice: function() {
            return this.pushStack(l.apply(this, arguments), "slice", l.call(arguments).join(","))
        },
        map: function(e) {
            return this.pushStack(v.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: f,
        sort: [].sort,
        splice: [].splice
    }, v.fn.init.prototype = v.fn, v.extend = v.fn.extend = function() {
        var e, n, r, i, s, o, u = arguments[0] || {},
            a = 1,
            f = arguments.length,
            l = !1;
        typeof u == "boolean" && (l = u, u = arguments[1] || {}, a = 2), typeof u != "object" && !v.isFunction(u) && (u = {}), f === a && (u = this, --a);
        for (; a < f; a++)
            if ((e = arguments[a]) != null)
                for (n in e) {
                    r = u[n], i = e[n];
                    if (u === i) continue;
                    l && i && (v.isPlainObject(i) || (s = v.isArray(i))) ? (s ? (s = !1, o = r && v.isArray(r) ? r : []) : o = r && v.isPlainObject(r) ? r : {}, u[n] = v.extend(l, o, i)) : i !== t && (u[n] = i)
                }
            return u
    }, v.extend({
        noConflict: function(t) {
            return e.$ === v && (e.$ = a), t && e.jQuery === v && (e.jQuery = u), v
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? v.readyWait++ : v.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? --v.readyWait : v.isReady) return;
            if (!i.body) return setTimeout(v.ready, 1);
            v.isReady = !0;
            if (e !== !0 && --v.readyWait > 0) return;
            r.resolveWith(i, [v]), v.fn.trigger && v(i).trigger("ready").off("ready")
        },
        isFunction: function(e) {
            return v.type(e) === "function"
        },
        isArray: Array.isArray || function(e) {
            return v.type(e) === "array"
        },
        isWindow: function(e) {
            return e != null && e == e.window
        },
        isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function(e) {
            return e == null ? String(e) : O[h.call(e)] || "object"
        },
        isPlainObject: function(e) {
            if (!e || v.type(e) !== "object" || e.nodeType || v.isWindow(e)) return !1;
            try {
                if (e.constructor && !p.call(e, "constructor") && !p.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            var r;
            for (r in e);
            return r === t || p.call(e, r)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        error: function(e) {
            throw new Error(e)
        },
        parseHTML: function(e, t, n) {
            var r;
            return !e || typeof e != "string" ? null : (typeof t == "boolean" && (n = t, t = 0), t = t || i, (r = E.exec(e)) ? [t.createElement(r[1])] : (r = v.buildFragment([e], t, n ? null : []), v.merge([], (r.cacheable ? v.clone(r.fragment) : r.fragment).childNodes)))
        },
        parseJSON: function(t) {
            if (!t || typeof t != "string") return null;
            t = v.trim(t);
            if (e.JSON && e.JSON.parse) return e.JSON.parse(t);
            if (S.test(t.replace(T, "@").replace(N, "]").replace(x, ""))) return (new Function("return " + t))();
            v.error("Invalid JSON: " + t)
        },
        parseXML: function(n) {
            var r, i;
            if (!n || typeof n != "string") return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch (s) {
                r = t
            }
            return (!r || !r.documentElement || r.getElementsByTagName("parsererror").length) && v.error("Invalid XML: " + n), r
        },
        noop: function() {},
        globalEval: function(t) {
            t && g.test(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(C, "ms-").replace(k, L)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, n, r) {
            var i, s = 0,
                o = e.length,
                u = o === t || v.isFunction(e);
            if (r) {
                if (u) {
                    for (i in e)
                        if (n.apply(e[i], r) === !1) break
                } else
                    for (; s < o;)
                        if (n.apply(e[s++], r) === !1) break
            } else if (u) {
                for (i in e)
                    if (n.call(e[i], i, e[i]) === !1) break
            } else
                for (; s < o;)
                    if (n.call(e[s], s, e[s++]) === !1) break; return e
        },
        trim: d && !d.call("﻿ ") ? function(e) {
            return e == null ? "" : d.call(e)
        } : function(e) {
            return e == null ? "" : (e + "").replace(b, "")
        },
        makeArray: function(e, t) {
            var n, r = t || [];
            return e != null && (n = v.type(e), e.length == null || n === "string" || n === "function" || n === "regexp" || v.isWindow(e) ? f.call(r, e) : v.merge(r, e)), r
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (c) return c.call(t, e, n);
                r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0;
                for (; n < r; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, n) {
            var r = n.length,
                i = e.length,
                s = 0;
            if (typeof r == "number")
                for (; s < r; s++) e[i++] = n[s];
            else
                while (n[s] !== t) e[i++] = n[s++];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            var r, i = [],
                s = 0,
                o = e.length;
            n = !!n;
            for (; s < o; s++) r = !!t(e[s], s), n !== r && i.push(e[s]);
            return i
        },
        map: function(e, n, r) {
            var i, s, o = [],
                u = 0,
                a = e.length,
                f = e instanceof v || a !== t && typeof a == "number" && (a > 0 && e[0] && e[a - 1] || a === 0 || v.isArray(e));
            if (f)
                for (; u < a; u++) i = n(e[u], u, r), i != null && (o[o.length] = i);
            else
                for (s in e) i = n(e[s], s, r), i != null && (o[o.length] = i);
            return o.concat.apply([], o)
        },
        guid: 1,
        proxy: function(e, n) {
            var r, i, s;
            return typeof n == "string" && (r = e[n], n = e, e = r), v.isFunction(e) ? (i = l.call(arguments, 2), s = function() {
                return e.apply(n, i.concat(l.call(arguments)))
            }, s.guid = e.guid = e.guid || v.guid++, s) : t
        },
        access: function(e, n, r, i, s, o, u) {
            var a, f = r == null,
                l = 0,
                c = e.length;
            if (r && typeof r == "object") {
                for (l in r) v.access(e, n, l, r[l], 1, o, i);
                s = 1
            } else if (i !== t) {
                a = u === t && v.isFunction(i), f && (a ? (a = n, n = function(e, t, n) {
                    return a.call(v(e), n)
                }) : (n.call(e, i), n = null));
                if (n)
                    for (; l < c; l++) n(e[l], r, a ? i.call(e[l], l, n(e[l], r)) : i, u);
                s = 1
            }
            return s ? e : f ? n.call(e) : c ? n(e[0], r) : o
        },
        now: function() {
            return (new Date).getTime()
        }
    }), v.ready.promise = function(t) {
        if (!r) {
            r = v.Deferred();
            if (i.readyState === "complete") setTimeout(v.ready, 1);
            else if (i.addEventListener) i.addEventListener("DOMContentLoaded", A, !1), e.addEventListener("load", v.ready, !1);
            else {
                i.attachEvent("onreadystatechange", A), e.attachEvent("onload", v.ready);
                var n = !1;
                try {
                    n = e.frameElement == null && i.documentElement
                } catch (s) {}
                n && n.doScroll && function o() {
                    if (!v.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (e) {
                            return setTimeout(o, 50)
                        }
                        v.ready()
                    }
                }()
            }
        }
        return r.promise(t)
    }, v.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(e, t) {
        O["[object " + t + "]"] = t.toLowerCase()
    }), n = v(i);
    var M = {};
    v.Callbacks = function(e) {
        e = typeof e == "string" ? M[e] || _(e) : v.extend({}, e);
        var n, r, i, s, o, u, a = [],
            f = !e.once && [],
            l = function(t) {
                n = e.memory && t, r = !0, u = s || 0, s = 0, o = a.length, i = !0;
                for (; a && u < o; u++)
                    if (a[u].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                        n = !1;
                        break
                    }
                i = !1, a && (f ? f.length && l(f.shift()) : n ? a = [] : c.disable())
            },
            c = {
                add: function() {
                    if (a) {
                        var t = a.length;
                        (function r(t) {
                            v.each(t, function(t, n) {
                                var i = v.type(n);
                                i === "function" ? (!e.unique || !c.has(n)) && a.push(n) : n && n.length && i !== "string" && r(n)
                            })
                        })(arguments), i ? o = a.length : n && (s = t, l(n))
                    }
                    return this
                },
                remove: function() {
                    return a && v.each(arguments, function(e, t) {
                        var n;
                        while ((n = v.inArray(t, a, n)) > -1) a.splice(n, 1), i && (n <= o && o--, n <= u && u--)
                    }), this
                },
                has: function(e) {
                    return v.inArray(e, a) > -1
                },
                empty: function() {
                    return a = [], this
                },
                disable: function() {
                    return a = f = n = t, this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return f = t, n || c.disable(), this
                },
                locked: function() {
                    return !f
                },
                fireWith: function(e, t) {
                    return t = t || [], t = [e, t.slice ? t.slice() : t], a && (!r || f) && (i ? f.push(t) : l(t)), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return c
    }, v.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", v.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", v.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", v.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return v.Deferred(function(n) {
                            v.each(t, function(t, r) {
                                var s = r[0],
                                    o = e[t];
                                i[r[1]](v.isFunction(o) ? function() {
                                    var e = o.apply(this, arguments);
                                    e && v.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === i ? n : this, [e])
                                } : n[s])
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return e != null ? v.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, v.each(t, function(e, s) {
                var o = s[2],
                    u = s[3];
                r[s[1]] = o.add, u && o.add(function() {
                    n = u
                }, t[e ^ 1][2].disable, t[2][2].lock), i[s[0]] = o.fire, i[s[0] + "With"] = o.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t = 0,
                n = l.call(arguments),
                r = n.length,
                i = r !== 1 || e && v.isFunction(e.promise) ? r : 0,
                s = i === 1 ? e : v.Deferred(),
                o = function(e, t, n) {
                    return function(r) {
                        t[e] = this, n[e] = arguments.length > 1 ? l.call(arguments) : r, n === u ? s.notifyWith(t, n) : --i || s.resolveWith(t, n)
                    }
                },
                u, a, f;
            if (r > 1) {
                u = new Array(r), a = new Array(r), f = new Array(r);
                for (; t < r; t++) n[t] && v.isFunction(n[t].promise) ? n[t].promise().done(o(t, f, n)).fail(s.reject).progress(o(t, a, u)) : --i
            }
            return i || s.resolveWith(f, n), s.promise()
        }
    }), v.support = function() {
        var t, n, r, s, o, u, a, f, l, c, h, p = i.createElement("div");
        p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*"), r = p.getElementsByTagName("a")[0];
        if (!n || !r || !n.length) return {};
        s = i.createElement("select"), o = s.appendChild(i.createElement("option")), u = p.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t = {
            leadingWhitespace: p.firstChild.nodeType === 3,
            tbody: !p.getElementsByTagName("tbody").length,
            htmlSerialize: !!p.getElementsByTagName("link").length,
            style: /top/.test(r.getAttribute("style")),
            hrefNormalized: r.getAttribute("href") === "/a",
            opacity: /^0.5/.test(r.style.opacity),
            cssFloat: !!r.style.cssFloat,
            checkOn: u.value === "on",
            optSelected: o.selected,
            getSetAttribute: p.className !== "t",
            enctype: !!i.createElement("form").enctype,
            html5Clone: i.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
            boxModel: i.compatMode === "CSS1Compat",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, u.checked = !0, t.noCloneChecked = u.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !o.disabled;
        try {
            delete p.test
        } catch (d) {
            t.deleteExpando = !1
        }!p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick", h = function() {
            t.noCloneEvent = !1
        }), p.cloneNode(!0).fireEvent("onclick"), p.detachEvent("onclick", h)), u = i.createElement("input"), u.value = "t", u.setAttribute("type", "radio"), t.radioValue = u.value === "t", u.setAttribute("checked", "checked"), u.setAttribute("name", "t"), p.appendChild(u), a = i.createDocumentFragment(), a.appendChild(p.lastChild), t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, t.appendChecked = u.checked, a.removeChild(u), a.appendChild(p);
        if (p.attachEvent)
            for (l in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) f = "on" + l, c = f in p, c || (p.setAttribute(f, "return;"), c = typeof p[f] == "function"), t[l + "Bubbles"] = c;
        return v(function() {
            var n, r, s, o, u = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
                a = i.getElementsByTagName("body")[0];
            if (!a) return;
            n = i.createElement("div"), n.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", a.insertBefore(n, a.firstChild), r = i.createElement("div"), n.appendChild(r), r.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", s = r.getElementsByTagName("td"), s[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = s[0].offsetHeight === 0, s[0].style.display = "", s[1].style.display = "none", t.reliableHiddenOffsets = c && s[0].offsetHeight === 0, r.innerHTML = "", r.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = r.offsetWidth === 4, t.doesNotIncludeMarginInBodyOffset = a.offsetTop !== 1, e.getComputedStyle && (t.pixelPosition = (e.getComputedStyle(r, null) || {}).top !== "1%", t.boxSizingReliable = (e.getComputedStyle(r, null) || {
                width: "4px"
            }).width === "4px", o = i.createElement("div"), o.style.cssText = r.style.cssText = u, o.style.marginRight = o.style.width = "0", r.style.width = "1px", r.appendChild(o), t.reliableMarginRight = !parseFloat((e.getComputedStyle(o, null) || {}).marginRight)), typeof r.style.zoom != "undefined" && (r.innerHTML = "", r.style.cssText = u + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = r.offsetWidth === 3, r.style.display = "block", r.style.overflow = "visible", r.innerHTML = "<div></div>", r.firstChild.style.width = "5px", t.shrinkWrapBlocks = r.offsetWidth !== 3, n.style.zoom = 1), a.removeChild(n), n = r = s = o = null
        }), a.removeChild(p), n = r = s = o = u = a = p = null, t
    }();
    var D = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        P = /([A-Z])/g;
    v.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (v.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(e) {
            return e = e.nodeType ? v.cache[e[v.expando]] : e[v.expando], !!e && !B(e)
        },
        data: function(e, n, r, i) {
            if (!v.acceptData(e)) return;
            var s, o, u = v.expando,
                a = typeof n == "string",
                f = e.nodeType,
                l = f ? v.cache : e,
                c = f ? e[u] : e[u] && u;
            if ((!c || !l[c] || !i && !l[c].data) && a && r === t) return;
            c || (f ? e[u] = c = v.deletedIds.pop() || v.guid++ : c = u), l[c] || (l[c] = {}, f || (l[c].toJSON = v.noop));
            if (typeof n == "object" || typeof n == "function") i ? l[c] = v.extend(l[c], n) : l[c].data = v.extend(l[c].data, n);
            return s = l[c], i || (s.data || (s.data = {}), s = s.data), r !== t && (s[v.camelCase(n)] = r), a ? (o = s[n], o == null && (o = s[v.camelCase(n)])) : o = s, o
        },
        removeData: function(e, t, n) {
            if (!v.acceptData(e)) return;
            var r, i, s, o = e.nodeType,
                u = o ? v.cache : e,
                a = o ? e[v.expando] : v.expando;
            if (!u[a]) return;
            if (t) {
                r = n ? u[a] : u[a].data;
                if (r) {
                    v.isArray(t) || (t in r ? t = [t] : (t = v.camelCase(t), t in r ? t = [t] : t = t.split(" ")));
                    for (i = 0, s = t.length; i < s; i++) delete r[t[i]];
                    if (!(n ? B : v.isEmptyObject)(r)) return
                }
            }
            if (!n) {
                delete u[a].data;
                if (!B(u[a])) return
            }
            o ? v.cleanData([e], !0) : v.support.deleteExpando || u != u.window ? delete u[a] : u[a] = null
        },
        _data: function(e, t, n) {
            return v.data(e, t, n, !0)
        },
        acceptData: function(e) {
            var t = e.nodeName && v.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), v.fn.extend({
        data: function(e, n) {
            var r, i, s, o, u, a = this[0],
                f = 0,
                l = null;
            if (e === t) {
                if (this.length) {
                    l = v.data(a);
                    if (a.nodeType === 1 && !v._data(a, "parsedAttrs")) {
                        s = a.attributes;
                        for (u = s.length; f < u; f++) o = s[f].name, o.indexOf("data-") || (o = v.camelCase(o.substring(5)), H(a, o, l[o]));
                        v._data(a, "parsedAttrs", !0)
                    }
                }
                return l
            }
            return typeof e == "object" ? this.each(function() {
                v.data(this, e)
            }) : (r = e.split(".", 2), r[1] = r[1] ? "." + r[1] : "", i = r[1] + "!", v.access(this, function(n) {
                if (n === t) return l = this.triggerHandler("getData" + i, [r[0]]), l === t && a && (l = v.data(a, e), l = H(a, e, l)), l === t && r[1] ? this.data(r[0]) : l;
                r[1] = n, this.each(function() {
                    var t = v(this);
                    t.triggerHandler("setData" + i, r), v.data(this, e, n), t.triggerHandler("changeData" + i, r)
                })
            }, null, n, arguments.length > 1, null, !1))
        },
        removeData: function(e) {
            return this.each(function() {
                v.removeData(this, e)
            })
        }
    }), v.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = v._data(e, t), n && (!r || v.isArray(n) ? r = v._data(e, t, v.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = v.queue(e, t),
                r = n.length,
                i = n.shift(),
                s = v._queueHooks(e, t),
                o = function() {
                    v.dequeue(e, t)
                };
            i === "inprogress" && (i = n.shift(), r--), i && (t === "fx" && n.unshift("inprogress"), delete s.stop, i.call(e, o, s)), !r && s && s.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return v._data(e, n) || v._data(e, n, {
                empty: v.Callbacks("once memory").add(function() {
                    v.removeData(e, t + "queue", !0), v.removeData(e, n, !0)
                })
            })
        }
    }), v.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return typeof e != "string" && (n = e, e = "fx", r--), arguments.length < r ? v.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = v.queue(this, e, n);
                v._queueHooks(this, e), e === "fx" && t[0] !== "inprogress" && v.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                v.dequeue(this, e)
            })
        },
        delay: function(e, t) {
            return e = v.fx ? v.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, n) {
            var r, i = 1,
                s = v.Deferred(),
                o = this,
                u = this.length,
                a = function() {
                    --i || s.resolveWith(o, [o])
                };
            typeof e != "string" && (n = e, e = t), e = e || "fx";
            while (u--) r = v._data(o[u], e + "queueHooks"), r && r.empty && (i++, r.empty.add(a));
            return a(), s.promise(n)
        }
    });
    var j, F, I, q = /[\t\r\n]/g,
        R = /\r/g,
        U = /^(?:button|input)$/i,
        z = /^(?:button|input|object|select|textarea)$/i,
        W = /^a(?:rea|)$/i,
        X = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        V = v.support.getSetAttribute;
    v.fn.extend({
        attr: function(e, t) {
            return v.access(this, v.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                v.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return v.access(this, v.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = v.propFix[e] || e, this.each(function() {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {}
            })
        },
        addClass: function(e) {
            var t, n, r, i, s, o, u;
            if (v.isFunction(e)) return this.each(function(t) {
                v(this).addClass(e.call(this, t, this.className))
            });
            if (e && typeof e == "string") {
                t = e.split(y);
                for (n = 0, r = this.length; n < r; n++) {
                    i = this[n];
                    if (i.nodeType === 1)
                        if (!i.className && t.length === 1) i.className = e;
                        else {
                            s = " " + i.className + " ";
                            for (o = 0, u = t.length; o < u; o++) s.indexOf(" " + t[o] + " ") < 0 && (s += t[o] + " ");
                            i.className = v.trim(s)
                        }
                }
            }
            return this
        },
        removeClass: function(e) {
            var n, r, i, s, o, u, a;
            if (v.isFunction(e)) return this.each(function(t) {
                v(this).removeClass(e.call(this, t, this.className))
            });
            if (e && typeof e == "string" || e === t) {
                n = (e || "").split(y);
                for (u = 0, a = this.length; u < a; u++) {
                    i = this[u];
                    if (i.nodeType === 1 && i.className) {
                        r = (" " + i.className + " ").replace(q, " ");
                        for (s = 0, o = n.length; s < o; s++)
                            while (r.indexOf(" " + n[s] + " ") >= 0) r = r.replace(" " + n[s] + " ", " ");
                        i.className = e ? v.trim(r) : ""
                    }
                }
            }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
                r = typeof t == "boolean";
            return v.isFunction(e) ? this.each(function(n) {
                v(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if (n === "string") {
                    var i, s = 0,
                        o = v(this),
                        u = t,
                        a = e.split(y);
                    while (i = a[s++]) u = r ? u : !o.hasClass(i), o[u ? "addClass" : "removeClass"](i)
                } else if (n === "undefined" || n === "boolean") this.className && v._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : v._data(this, "__className__") || ""
            })
        },
        hasClass: function(e) {
            var t = " " + e + " ",
                n = 0,
                r = this.length;
            for (; n < r; n++)
                if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(q, " ").indexOf(t) >= 0) return !0;
            return !1
        },
        val: function(e) {
            var n, r, i, s = this[0];
            if (!arguments.length) {
                if (s) return n = v.valHooks[s.type] || v.valHooks[s.nodeName.toLowerCase()], n && "get" in n && (r = n.get(s, "value")) !== t ? r : (r = s.value, typeof r == "string" ? r.replace(R, "") : r == null ? "" : r);
                return
            }
            return i = v.isFunction(e), this.each(function(r) {
                var s, o = v(this);
                if (this.nodeType !== 1) return;
                i ? s = e.call(this, r, o.val()) : s = e, s == null ? s = "" : typeof s == "number" ? s += "" : v.isArray(s) && (s = v.map(s, function(e) {
                    return e == null ? "" : e + ""
                })), n = v.valHooks[this.type] || v.valHooks[this.nodeName.toLowerCase()];
                if (!n || !("set" in n) || n.set(this, s, "value") === t) this.value = s
            })
        }
    }), v.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            },
            select: {
                get: function(e) {
                    var t, n, r = e.options,
                        i = e.selectedIndex,
                        s = e.type === "select-one" || i < 0,
                        o = s ? null : [],
                        u = s ? i + 1 : r.length,
                        a = i < 0 ? u : s ? i : 0;
                    for (; a < u; a++) {
                        n = r[a];
                        if ((n.selected || a === i) && (v.support.optDisabled ? !n.disabled : n.getAttribute("disabled") === null) && (!n.parentNode.disabled || !v.nodeName(n.parentNode, "optgroup"))) {
                            t = v(n).val();
                            if (s) return t;
                            o.push(t)
                        }
                    }
                    return o
                },
                set: function(e, t) {
                    var n = v.makeArray(t);
                    return v(e).find("option").each(function() {
                        this.selected = v.inArray(v(this).val(), n) >= 0
                    }), n.length || (e.selectedIndex = -1), n
                }
            }
        },
        attrFn: {},
        attr: function(e, n, r, i) {
            var s, o, u, a = e.nodeType;
            if (!e || a === 3 || a === 8 || a === 2) return;
            if (i && v.isFunction(v.fn[n])) return v(e)[n](r);
            if (typeof e.getAttribute == "undefined") return v.prop(e, n, r);
            u = a !== 1 || !v.isXMLDoc(e), u && (n = n.toLowerCase(), o = v.attrHooks[n] || (X.test(n) ? F : j));
            if (r !== t) {
                if (r === null) {
                    v.removeAttr(e, n);
                    return
                }
                return o && "set" in o && u && (s = o.set(e, r, n)) !== t ? s : (e.setAttribute(n, r + ""), r)
            }
            return o && "get" in o && u && (s = o.get(e, n)) !== null ? s : (s = e.getAttribute(n), s === null ? t : s)
        },
        removeAttr: function(e, t) {
            var n, r, i, s, o = 0;
            if (t && e.nodeType === 1) {
                r = t.split(y);
                for (; o < r.length; o++) i = r[o], i && (n = v.propFix[i] || i, s = X.test(i), s || v.attr(e, i, ""), e.removeAttribute(V ? i : n), s && n in e && (e[n] = !1))
            }
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (U.test(e.nodeName) && e.parentNode) v.error("type property can't be changed");
                    else if (!v.support.radioValue && t === "radio" && v.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            },
            value: {
                get: function(e, t) {
                    return j && v.nodeName(e, "button") ? j.get(e, t) : t in e ? e.value : null
                },
                set: function(e, t, n) {
                    if (j && v.nodeName(e, "button")) return j.set(e, t, n);
                    e.value = t
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(e, n, r) {
            var i, s, o, u = e.nodeType;
            if (!e || u === 3 || u === 8 || u === 2) return;
            return o = u !== 1 || !v.isXMLDoc(e), o && (n = v.propFix[n] || n, s = v.propHooks[n]), r !== t ? s && "set" in s && (i = s.set(e, r, n)) !== t ? i : e[n] = r : s && "get" in s && (i = s.get(e, n)) !== null ? i : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : z.test(e.nodeName) || W.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }), F = {
        get: function(e, n) {
            var r, i = v.prop(e, n);
            return i === !0 || typeof i != "boolean" && (r = e.getAttributeNode(n)) && r.nodeValue !== !1 ? n.toLowerCase() : t
        },
        set: function(e, t, n) {
            var r;
            return t === !1 ? v.removeAttr(e, n) : (r = v.propFix[n] || n, r in e && (e[r] = !0), e.setAttribute(n, n.toLowerCase())), n
        }
    }, V || (I = {
        name: !0,
        id: !0,
        coords: !0
    }, j = v.valHooks.button = {
        get: function(e, n) {
            var r;
            return r = e.getAttributeNode(n), r && (I[n] ? r.value !== "" : r.specified) ? r.value : t
        },
        set: function(e, t, n) {
            var r = e.getAttributeNode(n);
            return r || (r = i.createAttribute(n), e.setAttributeNode(r)), r.value = t + ""
        }
    }, v.each(["width", "height"], function(e, t) {
        v.attrHooks[t] = v.extend(v.attrHooks[t], {
            set: function(e, n) {
                if (n === "") return e.setAttribute(t, "auto"), n
            }
        })
    }), v.attrHooks.contenteditable = {
        get: j.get,
        set: function(e, t, n) {
            t === "" && (t = "false"), j.set(e, t, n)
        }
    }), v.support.hrefNormalized || v.each(["href", "src", "width", "height"], function(e, n) {
        v.attrHooks[n] = v.extend(v.attrHooks[n], {
            get: function(e) {
                var r = e.getAttribute(n, 2);
                return r === null ? t : r
            }
        })
    }), v.support.style || (v.attrHooks.style = {
        get: function(e) {
            return e.style.cssText.toLowerCase() || t
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    }), v.support.optSelected || (v.propHooks.selected = v.extend(v.propHooks.selected, {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    })), v.support.enctype || (v.propFix.enctype = "encoding"), v.support.checkOn || v.each(["radio", "checkbox"], function() {
        v.valHooks[this] = {
            get: function(e) {
                return e.getAttribute("value") === null ? "on" : e.value
            }
        }
    }), v.each(["radio", "checkbox"], function() {
        v.valHooks[this] = v.extend(v.valHooks[this], {
            set: function(e, t) {
                if (v.isArray(t)) return e.checked = v.inArray(v(e).val(), t) >= 0
            }
        })
    });
    var $ = /^(?:textarea|input|select)$/i,
        J = /^([^\.]*|)(?:\.(.+)|)$/,
        K = /(?:^|\s)hover(\.\S+|)\b/,
        Q = /^key/,
        G = /^(?:mouse|contextmenu)|click/,
        Y = /^(?:focusinfocus|focusoutblur)$/,
        Z = function(e) {
            return v.event.special.hover ? e : e.replace(K, "mouseenter$1 mouseleave$1")
        };
    v.event = {
            add: function(e, n, r, i, s) {
                var o, u, a, f, l, c, h, p, d, m, g;
                if (e.nodeType === 3 || e.nodeType === 8 || !n || !r || !(o = v._data(e))) return;
                r.handler && (d = r, r = d.handler, s = d.selector), r.guid || (r.guid = v.guid++), a = o.events, a || (o.events = a = {}), u = o.handle, u || (o.handle = u = function(e) {
                    return typeof v == "undefined" || !!e && v.event.triggered === e.type ? t : v.event.dispatch.apply(u.elem, arguments)
                }, u.elem = e), n = v.trim(Z(n)).split(" ");
                for (f = 0; f < n.length; f++) {
                    l = J.exec(n[f]) || [], c = l[1], h = (l[2] || "").split(".").sort(), g = v.event.special[c] || {}, c = (s ? g.delegateType : g.bindType) || c, g = v.event.special[c] || {}, p = v.extend({
                        type: c,
                        origType: l[1],
                        data: i,
                        handler: r,
                        guid: r.guid,
                        selector: s,
                        needsContext: s && v.expr.match.needsContext.test(s),
                        namespace: h.join(".")
                    }, d), m = a[c];
                    if (!m) {
                        m = a[c] = [], m.delegateCount = 0;
                        if (!g.setup || g.setup.call(e, i, h, u) === !1) e.addEventListener ? e.addEventListener(c, u, !1) : e.attachEvent && e.attachEvent("on" + c, u)
                    }
                    g.add && (g.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), s ? m.splice(m.delegateCount++, 0, p) : m.push(p), v.event.global[c] = !0
                }
                e = null
            },
            global: {},
            remove: function(e, t, n, r, i) {
                var s, o, u, a, f, l, c, h, p, d, m, g = v.hasData(e) && v._data(e);
                if (!g || !(h = g.events)) return;
                t = v.trim(Z(t || "")).split(" ");
                for (s = 0; s < t.length; s++) {
                    o = J.exec(t[s]) || [], u = a = o[1], f = o[2];
                    if (!u) {
                        for (u in h) v.event.remove(e, u + t[s], n, r, !0);
                        continue
                    }
                    p = v.event.special[u] || {}, u = (r ? p.delegateType : p.bindType) || u, d = h[u] || [], l = d.length, f = f ? new RegExp("(^|\\.)" + f.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                    for (c = 0; c < d.length; c++) m = d[c], (i || a === m.origType) && (!n || n.guid === m.guid) && (!f || f.test(m.namespace)) && (!r || r === m.selector || r === "**" && m.selector) && (d.splice(c--, 1), m.selector && d.delegateCount--, p.remove && p.remove.call(e, m));
                    d.length === 0 && l !== d.length && ((!p.teardown || p.teardown.call(e, f, g.handle) === !1) && v.removeEvent(e, u, g.handle), delete h[u])
                }
                v.isEmptyObject(h) && (delete g.handle, v.removeData(e, "events", !0))
            },
            customEvent: {
                getData: !0,
                setData: !0,
                changeData: !0
            },
            trigger: function(n, r, s, o) {
                if (!s || s.nodeType !== 3 && s.nodeType !== 8) {
                    var u, a, f, l, c, h, p, d, m, g, y = n.type || n,
                        b = [];
                    if (Y.test(y + v.event.triggered)) return;
                    y.indexOf("!") >= 0 && (y = y.slice(0, -1), a = !0), y.indexOf(".") >= 0 && (b = y.split("."), y = b.shift(), b.sort());
                    if ((!s || v.event.customEvent[y]) && !v.event.global[y]) return;
                    n = typeof n == "object" ? n[v.expando] ? n : new v.Event(y, n) : new v.Event(y), n.type = y, n.isTrigger = !0, n.exclusive = a, n.namespace = b.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, h = y.indexOf(":") < 0 ? "on" + y : "";
                    if (!s) {
                        u = v.cache;
                        for (f in u) u[f].events && u[f].events[y] && v.event.trigger(n, r, u[f].handle.elem, !0);
                        return
                    }
                    n.result = t, n.target || (n.target = s), r = r != null ? v.makeArray(r) : [], r.unshift(n), p = v.event.special[y] || {};
                    if (p.trigger && p.trigger.apply(s, r) === !1) return;
                    m = [
                        [s, p.bindType || y]
                    ];
                    if (!o && !p.noBubble && !v.isWindow(s)) {
                        g = p.delegateType || y, l = Y.test(g + y) ? s : s.parentNode;
                        for (c = s; l; l = l.parentNode) m.push([l, g]), c = l;
                        c === (s.ownerDocument || i) && m.push([c.defaultView || c.parentWindow || e, g])
                    }
                    for (f = 0; f < m.length && !n.isPropagationStopped(); f++) l = m[f][0], n.type = m[f][1], d = (v._data(l, "events") || {})[n.type] && v._data(l, "handle"), d && d.apply(l, r), d = h && l[h], d && v.acceptData(l) && d.apply && d.apply(l, r) === !1 && n.preventDefault();
                    return n.type = y, !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(s.ownerDocument, r) === !1) && (y !== "click" || !v.nodeName(s, "a")) && v.acceptData(s) && h && s[y] && (y !== "focus" && y !== "blur" || n.target.offsetWidth !== 0) && !v.isWindow(s) && (c = s[h], c && (s[h] = null), v.event.triggered = y, s[y](), v.event.triggered = t, c && (s[h] = c)), n.result
                }
                return
            },
            dispatch: function(n) {
                n = v.event.fix(n || e.event);
                var r, i, s, o, u, a, f, c, h, p, d = (v._data(this, "events") || {})[n.type] || [],
                    m = d.delegateCount,
                    g = l.call(arguments),
                    y = !n.exclusive && !n.namespace,
                    b = v.event.special[n.type] || {},
                    w = [];
                g[0] = n, n.delegateTarget = this;
                if (b.preDispatch && b.preDispatch.call(this, n) === !1) return;
                if (m && (!n.button || n.type !== "click"))
                    for (s = n.target; s != this; s = s.parentNode || this)
                        if (s.disabled !== !0 || n.type !== "click") {
                            u = {}, f = [];
                            for (r = 0; r < m; r++) c = d[r], h = c.selector, u[h] === t && (u[h] = c.needsContext ? v(h, this).index(s) >= 0 : v.find(h, this, null, [s]).length), u[h] && f.push(c);
                            f.length && w.push({
                                elem: s,
                                matches: f
                            })
                        }
                d.length > m && w.push({
                    elem: this,
                    matches: d.slice(m)
                });
                for (r = 0; r < w.length && !n.isPropagationStopped(); r++) {
                    a = w[r], n.currentTarget = a.elem;
                    for (i = 0; i < a.matches.length && !n.isImmediatePropagationStopped(); i++) {
                        c = a.matches[i];
                        if (y || !n.namespace && !c.namespace || n.namespace_re && n.namespace_re.test(c.namespace)) n.data = c.data, n.handleObj = c, o = ((v.event.special[c.origType] || {}).handle || c.handler).apply(a.elem, g), o !== t && (n.result = o, o === !1 && (n.preventDefault(), n.stopPropagation()))
                    }
                }
                return b.postDispatch && b.postDispatch.call(this, n), n.result
            },
            props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, n) {
                    var r, s, o, u = n.button,
                        a = n.fromElement;
                    return e.pageX == null && n.clientX != null && (r = e.target.ownerDocument || i, s = r.documentElement, o = r.body, e.pageX = n.clientX + (s && s.scrollLeft || o && o.scrollLeft || 0) - (s && s.clientLeft || o && o.clientLeft || 0), e.pageY = n.clientY + (s && s.scrollTop || o && o.scrollTop || 0) - (s && s.clientTop || o && o.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a), !e.which && u !== t && (e.which = u & 1 ? 1 : u & 2 ? 3 : u & 4 ? 2 : 0), e
                }
            },
            fix: function(e) {
                if (e[v.expando]) return e;
                var t, n, r = e,
                    s = v.event.fixHooks[e.type] || {},
                    o = s.props ? this.props.concat(s.props) : this.props;
                e = v.Event(r);
                for (t = o.length; t;) n = o[--t], e[n] = r[n];
                return e.target || (e.target = r.srcElement || i), e.target.nodeType === 3 && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, r) : e
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    delegateType: "focusin"
                },
                blur: {
                    delegateType: "focusout"
                },
                beforeunload: {
                    setup: function(e, t, n) {
                        v.isWindow(this) && (this.onbeforeunload = n)
                    },
                    teardown: function(e, t) {
                        this.onbeforeunload === t && (this.onbeforeunload = null)
                    }
                }
            },
            simulate: function(e, t, n, r) {
                var i = v.extend(new v.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                r ? v.event.trigger(i, null, t) : v.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
            }
        }, v.event.handle = v.event.dispatch, v.removeEvent = i.removeEventListener ? function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        } : function(e, t, n) {
            var r = "on" + t;
            e.detachEvent && (typeof e[r] == "undefined" && (e[r] = null), e.detachEvent(r, n))
        }, v.Event = function(e, t) {
            if (!(this instanceof v.Event)) return new v.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? tt : et) : this.type = e, t && v.extend(this, t), this.timeStamp = e && e.timeStamp || v.now(), this[v.expando] = !0
        }, v.Event.prototype = {
            preventDefault: function() {
                this.isDefaultPrevented = tt;
                var e = this.originalEvent;
                if (!e) return;
                e.preventDefault ? e.preventDefault() : e.returnValue = !1
            },
            stopPropagation: function() {
                this.isPropagationStopped = tt;
                var e = this.originalEvent;
                if (!e) return;
                e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = tt, this.stopPropagation()
            },
            isDefaultPrevented: et,
            isPropagationStopped: et,
            isImmediatePropagationStopped: et
        }, v.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(e, t) {
            v.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, r = this,
                        i = e.relatedTarget,
                        s = e.handleObj,
                        o = s.selector;
                    if (!i || i !== r && !v.contains(r, i)) e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t;
                    return n
                }
            }
        }), v.support.submitBubbles || (v.event.special.submit = {
            setup: function() {
                if (v.nodeName(this, "form")) return !1;
                v.event.add(this, "click._submit keypress._submit", function(e) {
                    var n = e.target,
                        r = v.nodeName(n, "input") || v.nodeName(n, "button") ? n.form : t;
                    r && !v._data(r, "_submit_attached") && (v.event.add(r, "submit._submit", function(e) {
                        e._submit_bubble = !0
                    }), v._data(r, "_submit_attached", !0))
                })
            },
            postDispatch: function(e) {
                e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && v.event.simulate("submit", this.parentNode, e, !0))
            },
            teardown: function() {
                if (v.nodeName(this, "form")) return !1;
                v.event.remove(this, "._submit")
            }
        }), v.support.changeBubbles || (v.event.special.change = {
            setup: function() {
                if ($.test(this.nodeName)) {
                    if (this.type === "checkbox" || this.type === "radio") v.event.add(this, "propertychange._change", function(e) {
                        e.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                    }), v.event.add(this, "click._change", function(e) {
                        this._just_changed && !e.isTrigger && (this._just_changed = !1), v.event.simulate("change", this, e, !0)
                    });
                    return !1
                }
                v.event.add(this, "beforeactivate._change", function(e) {
                    var t = e.target;
                    $.test(t.nodeName) && !v._data(t, "_change_attached") && (v.event.add(t, "change._change", function(e) {
                        this.parentNode && !e.isSimulated && !e.isTrigger && v.event.simulate("change", this.parentNode, e, !0)
                    }), v._data(t, "_change_attached", !0))
                })
            },
            handle: function(e) {
                var t = e.target;
                if (this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox") return e.handleObj.handler.apply(this, arguments)
            },
            teardown: function() {
                return v.event.remove(this, "._change"), !$.test(this.nodeName)
            }
        }), v.support.focusinBubbles || v.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = 0,
                r = function(e) {
                    v.event.simulate(t, e.target, v.event.fix(e), !0)
                };
            v.event.special[t] = {
                setup: function() {
                    n++ === 0 && i.addEventListener(e, r, !0)
                },
                teardown: function() {
                    --n === 0 && i.removeEventListener(e, r, !0)
                }
            }
        }), v.fn.extend({
            on: function(e, n, r, i, s) {
                var o, u;
                if (typeof e == "object") {
                    typeof n != "string" && (r = r || n, n = t);
                    for (u in e) this.on(u, n, r, e[u], s);
                    return this
                }
                r == null && i == null ? (i = n, r = n = t) : i == null && (typeof n == "string" ? (i = r, r = t) : (i = r, r = n, n = t));
                if (i === !1) i = et;
                else if (!i) return this;
                return s === 1 && (o = i, i = function(e) {
                    return v().off(e), o.apply(this, arguments)
                }, i.guid = o.guid || (o.guid = v.guid++)), this.each(function() {
                    v.event.add(this, e, i, r, n)
                })
            },
            one: function(e, t, n, r) {
                return this.on(e, t, n, r, 1)
            },
            off: function(e, n, r) {
                var i, s;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, v(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if (typeof e == "object") {
                    for (s in e) this.off(s, n, e[s]);
                    return this
                }
                if (n === !1 || typeof n == "function") r = n, n = t;
                return r === !1 && (r = et), this.each(function() {
                    v.event.remove(this, e, r, n)
                })
            },
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            live: function(e, t, n) {
                return v(this.context).on(e, this.selector, t, n), this
            },
            die: function(e, t) {
                return v(this.context).off(e, this.selector || "**", t), this
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
            },
            trigger: function(e, t) {
                return this.each(function() {
                    v.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                if (this[0]) return v.event.trigger(e, t, this[0], !0)
            },
            toggle: function(e) {
                var t = arguments,
                    n = e.guid || v.guid++,
                    r = 0,
                    i = function(n) {
                        var i = (v._data(this, "lastToggle" + e.guid) || 0) % r;
                        return v._data(this, "lastToggle" + e.guid, i + 1), n.preventDefault(), t[i].apply(this, arguments) || !1
                    };
                i.guid = n;
                while (r < t.length) t[r++].guid = n;
                return this.click(i)
            },
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            v.fn[t] = function(e, n) {
                return n == null && (n = e, e = null), arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }, Q.test(t) && (v.event.fixHooks[t] = v.event.keyHooks), G.test(t) && (v.event.fixHooks[t] = v.event.mouseHooks)
        }),
        function(e, t) {
            function nt(e, t, n, r) {
                n = n || [], t = t || g;
                var i, s, a, f, l = t.nodeType;
                if (!e || typeof e != "string") return n;
                if (l !== 1 && l !== 9) return [];
                a = o(t);
                if (!a && !r)
                    if (i = R.exec(e))
                        if (f = i[1]) {
                            if (l === 9) {
                                s = t.getElementById(f);
                                if (!s || !s.parentNode) return n;
                                if (s.id === f) return n.push(s), n
                            } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(f)) && u(t, s) && s.id === f) return n.push(s), n
                        } else {
                            if (i[2]) return S.apply(n, x.call(t.getElementsByTagName(e), 0)), n;
                            if ((f = i[3]) && Z && t.getElementsByClassName) return S.apply(n, x.call(t.getElementsByClassName(f), 0)), n
                        }
                return vt(e.replace(j, "$1"), t, n, r, a)
            }

            function rt(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return n === "input" && t.type === e
                }
            }

            function it(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return (n === "input" || n === "button") && t.type === e
                }
            }

            function st(e) {
                return N(function(t) {
                    return t = +t, N(function(n, r) {
                        var i, s = e([], n.length, t),
                            o = s.length;
                        while (o--) n[i = s[o]] && (n[i] = !(r[i] = n[i]))
                    })
                })
            }

            function ot(e, t, n) {
                if (e === t) return n;
                var r = e.nextSibling;
                while (r) {
                    if (r === t) return -1;
                    r = r.nextSibling
                }
                return 1
            }

            function ut(e, t) {
                var n, r, s, o, u, a, f, l = L[d][e + " "];
                if (l) return t ? 0 : l.slice(0);
                u = e, a = [], f = i.preFilter;
                while (u) {
                    if (!n || (r = F.exec(u))) r && (u = u.slice(r[0].length) || u), a.push(s = []);
                    n = !1;
                    if (r = I.exec(u)) s.push(n = new m(r.shift())), u = u.slice(n.length), n.type = r[0].replace(j, " ");
                    for (o in i.filter)(r = J[o].exec(u)) && (!f[o] || (r = f[o](r))) && (s.push(n = new m(r.shift())), u = u.slice(n.length), n.type = o, n.matches = r);
                    if (!n) break
                }
                return t ? u.length : u ? nt.error(e) : L(e, a).slice(0)
            }

            function at(e, t, r) {
                var i = t.dir,
                    s = r && t.dir === "parentNode",
                    o = w++;
                return t.first ? function(t, n, r) {
                    while (t = t[i])
                        if (s || t.nodeType === 1) return e(t, n, r)
                } : function(t, r, u) {
                    if (!u) {
                        var a, f = b + " " + o + " ",
                            l = f + n;
                        while (t = t[i])
                            if (s || t.nodeType === 1) {
                                if ((a = t[d]) === l) return t.sizset;
                                if (typeof a == "string" && a.indexOf(f) === 0) {
                                    if (t.sizset) return t
                                } else {
                                    t[d] = l;
                                    if (e(t, r, u)) return t.sizset = !0, t;
                                    t.sizset = !1
                                }
                            }
                    } else
                        while (t = t[i])
                            if (s || t.nodeType === 1)
                                if (e(t, r, u)) return t
                }
            }

            function ft(e) {
                return e.length > 1 ? function(t, n, r) {
                    var i = e.length;
                    while (i--)
                        if (!e[i](t, n, r)) return !1;
                    return !0
                } : e[0]
            }

            function lt(e, t, n, r, i) {
                var s, o = [],
                    u = 0,
                    a = e.length,
                    f = t != null;
                for (; u < a; u++)
                    if (s = e[u])
                        if (!n || n(s, r, i)) o.push(s), f && t.push(u);
                return o
            }

            function ct(e, t, n, r, i, s) {
                return r && !r[d] && (r = ct(r)), i && !i[d] && (i = ct(i, s)), N(function(s, o, u, a) {
                    var f, l, c, h = [],
                        p = [],
                        d = o.length,
                        v = s || dt(t || "*", u.nodeType ? [u] : u, []),
                        m = e && (s || !t) ? lt(v, h, e, u, a) : v,
                        g = n ? i || (s ? e : d || r) ? [] : o : m;
                    n && n(m, g, u, a);
                    if (r) {
                        f = lt(g, p), r(f, [], u, a), l = f.length;
                        while (l--)
                            if (c = f[l]) g[p[l]] = !(m[p[l]] = c)
                    }
                    if (s) {
                        if (i || e) {
                            if (i) {
                                f = [], l = g.length;
                                while (l--)(c = g[l]) && f.push(m[l] = c);
                                i(null, g = [], f, a)
                            }
                            l = g.length;
                            while (l--)(c = g[l]) && (f = i ? T.call(s, c) : h[l]) > -1 && (s[f] = !(o[f] = c))
                        }
                    } else g = lt(g === o ? g.splice(d, g.length) : g), i ? i(null, o, g, a) : S.apply(o, g)
                })
            }

            function ht(e) {
                var t, n, r, s = e.length,
                    o = i.relative[e[0].type],
                    u = o || i.relative[" "],
                    a = o ? 1 : 0,
                    f = at(function(e) {
                        return e === t
                    }, u, !0),
                    l = at(function(e) {
                        return T.call(t, e) > -1
                    }, u, !0),
                    h = [function(e, n, r) {
                        return !o && (r || n !== c) || ((t = n).nodeType ? f(e, n, r) : l(e, n, r))
                    }];
                for (; a < s; a++)
                    if (n = i.relative[e[a].type]) h = [at(ft(h), n)];
                    else {
                        n = i.filter[e[a].type].apply(null, e[a].matches);
                        if (n[d]) {
                            r = ++a;
                            for (; r < s; r++)
                                if (i.relative[e[r].type]) break;
                            return ct(a > 1 && ft(h), a > 1 && e.slice(0, a - 1).join("").replace(j, "$1"), n, a < r && ht(e.slice(a, r)), r < s && ht(e = e.slice(r)), r < s && e.join(""))
                        }
                        h.push(n)
                    }
                return ft(h)
            }

            function pt(e, t) {
                var r = t.length > 0,
                    s = e.length > 0,
                    o = function(u, a, f, l, h) {
                        var p, d, v, m = [],
                            y = 0,
                            w = "0",
                            x = u && [],
                            T = h != null,
                            N = c,
                            C = u || s && i.find.TAG("*", h && a.parentNode || a),
                            k = b += N == null ? 1 : Math.E;
                        T && (c = a !== g && a, n = o.el);
                        for (;
                            (p = C[w]) != null; w++) {
                            if (s && p) {
                                for (d = 0; v = e[d]; d++)
                                    if (v(p, a, f)) {
                                        l.push(p);
                                        break
                                    }
                                T && (b = k, n = ++o.el)
                            }
                            r && ((p = !v && p) && y--, u && x.push(p))
                        }
                        y += w;
                        if (r && w !== y) {
                            for (d = 0; v = t[d]; d++) v(x, m, a, f);
                            if (u) {
                                if (y > 0)
                                    while (w--) !x[w] && !m[w] && (m[w] = E.call(l));
                                m = lt(m)
                            }
                            S.apply(l, m), T && !u && m.length > 0 && y + t.length > 1 && nt.uniqueSort(l)
                        }
                        return T && (b = k, c = N), x
                    };
                return o.el = 0, r ? N(o) : o
            }

            function dt(e, t, n) {
                var r = 0,
                    i = t.length;
                for (; r < i; r++) nt(e, t[r], n);
                return n
            }

            function vt(e, t, n, r, s) {
                var o, u, f, l, c, h = ut(e),
                    p = h.length;
                if (!r && h.length === 1) {
                    u = h[0] = h[0].slice(0);
                    if (u.length > 2 && (f = u[0]).type === "ID" && t.nodeType === 9 && !s && i.relative[u[1].type]) {
                        t = i.find.ID(f.matches[0].replace($, ""), t, s)[0];
                        if (!t) return n;
                        e = e.slice(u.shift().length)
                    }
                    for (o = J.POS.test(e) ? -1 : u.length - 1; o >= 0; o--) {
                        f = u[o];
                        if (i.relative[l = f.type]) break;
                        if (c = i.find[l])
                            if (r = c(f.matches[0].replace($, ""), z.test(u[0].type) && t.parentNode || t, s)) {
                                u.splice(o, 1), e = r.length && u.join("");
                                if (!e) return S.apply(n, x.call(r, 0)), n;
                                break
                            }
                    }
                }
                return a(e, h)(r, t, s, n, z.test(e)), n
            }

            function mt() {}
            var n, r, i, s, o, u, a, f, l, c, h = !0,
                p = "undefined",
                d = ("sizcache" + Math.random()).replace(".", ""),
                m = String,
                g = e.document,
                y = g.documentElement,
                b = 0,
                w = 0,
                E = [].pop,
                S = [].push,
                x = [].slice,
                T = [].indexOf || function(e) {
                    var t = 0,
                        n = this.length;
                    for (; t < n; t++)
                        if (this[t] === e) return t;
                    return -1
                },
                N = function(e, t) {
                    return e[d] = t == null || t, e
                },
                C = function() {
                    var e = {},
                        t = [];
                    return N(function(n, r) {
                        return t.push(n) > i.cacheLength && delete e[t.shift()], e[n + " "] = r
                    }, e)
                },
                k = C(),
                L = C(),
                A = C(),
                O = "[\\x20\\t\\r\\n\\f]",
                M = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
                _ = M.replace("w", "w#"),
                D = "([*^$|!~]?=)",
                P = "\\[" + O + "*(" + M + ")" + O + "*(?:" + D + O + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + _ + ")|)|)" + O + "*\\]",
                H = ":(" + M + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + P + ")|[^:]|\\\\.)*|.*))\\)|)",
                B = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + O + "*((?:-\\d)?\\d*)" + O + "*\\)|)(?=[^-]|$)",
                j = new RegExp("^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$", "g"),
                F = new RegExp("^" + O + "*," + O + "*"),
                I = new RegExp("^" + O + "*([\\x20\\t\\r\\n\\f>+~])" + O + "*"),
                q = new RegExp(H),
                R = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
                U = /^:not/,
                z = /[\x20\t\r\n\f]*[+~]/,
                W = /:not\($/,
                X = /h\d/i,
                V = /input|select|textarea|button/i,
                $ = /\\(?!\\)/g,
                J = {
                    ID: new RegExp("^#(" + M + ")"),
                    CLASS: new RegExp("^\\.(" + M + ")"),
                    NAME: new RegExp("^\\[name=['\"]?(" + M + ")['\"]?\\]"),
                    TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + P),
                    PSEUDO: new RegExp("^" + H),
                    POS: new RegExp(B, "i"),
                    CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + O + "*(even|odd|(([+-]|)(\\d*)n|)" + O + "*(?:([+-]|)" + O + "*(\\d+)|))" + O + "*\\)|)", "i"),
                    needsContext: new RegExp("^" + O + "*[>+~]|" + B, "i")
                },
                K = function(e) {
                    var t = g.createElement("div");
                    try {
                        return e(t)
                    } catch (n) {
                        return !1
                    } finally {
                        t = null
                    }
                },
                Q = K(function(e) {
                    return e.appendChild(g.createComment("")), !e.getElementsByTagName("*").length
                }),
                G = K(function(e) {
                    return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== p && e.firstChild.getAttribute("href") === "#"
                }),
                Y = K(function(e) {
                    e.innerHTML = "<select></select>";
                    var t = typeof e.lastChild.getAttribute("multiple");
                    return t !== "boolean" && t !== "string"
                }),
                Z = K(function(e) {
                    return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !e.getElementsByClassName || !e.getElementsByClassName("e").length ? !1 : (e.lastChild.className = "e", e.getElementsByClassName("e").length === 2)
                }),
                et = K(function(e) {
                    e.id = d + 0, e.innerHTML = "<a name='" + d + "'></a><div name='" + d + "'></div>", y.insertBefore(e, y.firstChild);
                    var t = g.getElementsByName && g.getElementsByName(d).length === 2 + g.getElementsByName(d + 0).length;
                    return r = !g.getElementById(d), y.removeChild(e), t
                });
            try {
                x.call(y.childNodes, 0)[0].nodeType
            } catch (tt) {
                x = function(e) {
                    var t, n = [];
                    for (; t = this[e]; e++) n.push(t);
                    return n
                }
            }
            nt.matches = function(e, t) {
                return nt(e, null, null, t)
            }, nt.matchesSelector = function(e, t) {
                return nt(t, null, null, [e]).length > 0
            }, s = nt.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (i === 1 || i === 9 || i === 11) {
                        if (typeof e.textContent == "string") return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += s(e)
                    } else if (i === 3 || i === 4) return e.nodeValue
                } else
                    for (; t = e[r]; r++) n += s(t);
                return n
            }, o = nt.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? t.nodeName !== "HTML" : !1
            }, u = nt.contains = y.contains ? function(e, t) {
                var n = e.nodeType === 9 ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !!(r && r.nodeType === 1 && n.contains && n.contains(r))
            } : y.compareDocumentPosition ? function(e, t) {
                return t && !!(e.compareDocumentPosition(t) & 16)
            } : function(e, t) {
                while (t = t.parentNode)
                    if (t === e) return !0;
                return !1
            }, nt.attr = function(e, t) {
                var n, r = o(e);
                return r || (t = t.toLowerCase()), (n = i.attrHandle[t]) ? n(e) : r || Y ? e.getAttribute(t) : (n = e.getAttributeNode(t), n ? typeof e[t] == "boolean" ? e[t] ? t : null : n.specified ? n.value : null : null)
            }, i = nt.selectors = {
                cacheLength: 50,
                createPseudo: N,
                match: J,
                attrHandle: G ? {} : {
                    href: function(e) {
                        return e.getAttribute("href", 2)
                    },
                    type: function(e) {
                        return e.getAttribute("type")
                    }
                },
                find: {
                    ID: r ? function(e, t, n) {
                        if (typeof t.getElementById !== p && !n) {
                            var r = t.getElementById(e);
                            return r && r.parentNode ? [r] : []
                        }
                    } : function(e, n, r) {
                        if (typeof n.getElementById !== p && !r) {
                            var i = n.getElementById(e);
                            return i ? i.id === e || typeof i.getAttributeNode !== p && i.getAttributeNode("id").value === e ? [i] : t : []
                        }
                    },
                    TAG: Q ? function(e, t) {
                        if (typeof t.getElementsByTagName !== p) return t.getElementsByTagName(e)
                    } : function(e, t) {
                        var n = t.getElementsByTagName(e);
                        if (e === "*") {
                            var r, i = [],
                                s = 0;
                            for (; r = n[s]; s++) r.nodeType === 1 && i.push(r);
                            return i
                        }
                        return n
                    },
                    NAME: et && function(e, t) {
                        if (typeof t.getElementsByName !== p) return t.getElementsByName(name)
                    },
                    CLASS: Z && function(e, t, n) {
                        if (typeof t.getElementsByClassName !== p && !n) return t.getElementsByClassName(e)
                    }
                },
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace($, ""), e[3] = (e[4] || e[5] || "").replace($, ""), e[2] === "~=" && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), e[1] === "nth" ? (e[2] || nt.error(e[0]), e[3] = +(e[3] ? e[4] + (e[5] || 1) : 2 * (e[2] === "even" || e[2] === "odd")), e[4] = +(e[6] + e[7] || e[2] === "odd")) : e[2] && nt.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n;
                        if (J.CHILD.test(e[0])) return null;
                        if (e[3]) e[2] = e[3];
                        else if (t = e[4]) q.test(t) && (n = ut(t, !0)) && (n = t.indexOf(")", t.length - n) - t.length) && (t = t.slice(0, n), e[0] = e[0].slice(0, n)), e[2] = t;
                        return e.slice(0, 3)
                    }
                },
                filter: {
                    ID: r ? function(e) {
                        return e = e.replace($, ""),
                            function(t) {
                                return t.getAttribute("id") === e
                            }
                    } : function(e) {
                        return e = e.replace($, ""),
                            function(t) {
                                var n = typeof t.getAttributeNode !== p && t.getAttributeNode("id");
                                return n && n.value === e
                            }
                    },
                    TAG: function(e) {
                        return e === "*" ? function() {
                            return !0
                        } : (e = e.replace($, "").toLowerCase(), function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        })
                    },
                    CLASS: function(e) {
                        var t = k[d][e + " "];
                        return t || (t = new RegExp("(^|" + O + ")" + e + "(" + O + "|$)")) && k(e, function(e) {
                            return t.test(e.className || typeof e.getAttribute !== p && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, t, n) {
                        return function(r, i) {
                            var s = nt.attr(r, e);
                            return s == null ? t === "!=" : t ? (s += "", t === "=" ? s === n : t === "!=" ? s !== n : t === "^=" ? n && s.indexOf(n) === 0 : t === "*=" ? n && s.indexOf(n) > -1 : t === "$=" ? n && s.substr(s.length - n.length) === n : t === "~=" ? (" " + s + " ").indexOf(n) > -1 : t === "|=" ? s === n || s.substr(0, n.length + 1) === n + "-" : !1) : !0
                        }
                    },
                    CHILD: function(e, t, n, r) {
                        return e === "nth" ? function(e) {
                            var t, i, s = e.parentNode;
                            if (n === 1 && r === 0) return !0;
                            if (s) {
                                i = 0;
                                for (t = s.firstChild; t; t = t.nextSibling)
                                    if (t.nodeType === 1) {
                                        i++;
                                        if (e === t) break
                                    }
                            }
                            return i -= r, i === n || i % n === 0 && i / n >= 0
                        } : function(t) {
                            var n = t;
                            switch (e) {
                                case "only":
                                case "first":
                                    while (n = n.previousSibling)
                                        if (n.nodeType === 1) return !1;
                                    if (e === "first") return !0;
                                    n = t;
                                case "last":
                                    while (n = n.nextSibling)
                                        if (n.nodeType === 1) return !1;
                                    return !0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || nt.error("unsupported pseudo: " + e);
                        return r[d] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? N(function(e, n) {
                            var i, s = r(e, t),
                                o = s.length;
                            while (o--) i = T.call(e, s[o]), e[i] = !(n[i] = s[o])
                        }) : function(e) {
                            return r(e, 0, n)
                        }) : r
                    }
                },
                pseudos: {
                    not: N(function(e) {
                        var t = [],
                            n = [],
                            r = a(e.replace(j, "$1"));
                        return r[d] ? N(function(e, t, n, i) {
                            var s, o = r(e, null, i, []),
                                u = e.length;
                            while (u--)
                                if (s = o[u]) e[u] = !(t[u] = s)
                        }) : function(e, i, s) {
                            return t[0] = e, r(t, null, s, n), !n.pop()
                        }
                    }),
                    has: N(function(e) {
                        return function(t) {
                            return nt(e, t).length > 0
                        }
                    }),
                    contains: N(function(e) {
                        return function(t) {
                            return (t.textContent || t.innerText || s(t)).indexOf(e) > -1
                        }
                    }),
                    enabled: function(e) {
                        return e.disabled === !1
                    },
                    disabled: function(e) {
                        return e.disabled === !0
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return t === "input" && !!e.checked || t === "option" && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    parent: function(e) {
                        return !i.pseudos.empty(e)
                    },
                    empty: function(e) {
                        var t;
                        e = e.firstChild;
                        while (e) {
                            if (e.nodeName > "@" || (t = e.nodeType) === 3 || t === 4) return !1;
                            e = e.nextSibling
                        }
                        return !0
                    },
                    header: function(e) {
                        return X.test(e.nodeName)
                    },
                    text: function(e) {
                        var t, n;
                        return e.nodeName.toLowerCase() === "input" && (t = e.type) === "text" && ((n = e.getAttribute("type")) == null || n.toLowerCase() === t)
                    },
                    radio: rt("radio"),
                    checkbox: rt("checkbox"),
                    file: rt("file"),
                    password: rt("password"),
                    image: rt("image"),
                    submit: it("submit"),
                    reset: it("reset"),
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return t === "input" && e.type === "button" || t === "button"
                    },
                    input: function(e) {
                        return V.test(e.nodeName)
                    },
                    focus: function(e) {
                        var t = e.ownerDocument;
                        return e === t.activeElement && (!t.hasFocus || t.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    active: function(e) {
                        return e === e.ownerDocument.activeElement
                    },
                    first: st(function() {
                        return [0]
                    }),
                    last: st(function(e, t) {
                        return [t - 1]
                    }),
                    eq: st(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: st(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: st(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: st(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                        return e
                    }),
                    gt: st(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }, f = y.compareDocumentPosition ? function(e, t) {
                return e === t ? (l = !0, 0) : (!e.compareDocumentPosition || !t.compareDocumentPosition ? e.compareDocumentPosition : e.compareDocumentPosition(t) & 4) ? -1 : 1
            } : function(e, t) {
                if (e === t) return l = !0, 0;
                if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex;
                var n, r, i = [],
                    s = [],
                    o = e.parentNode,
                    u = t.parentNode,
                    a = o;
                if (o === u) return ot(e, t);
                if (!o) return -1;
                if (!u) return 1;
                while (a) i.unshift(a), a = a.parentNode;
                a = u;
                while (a) s.unshift(a), a = a.parentNode;
                n = i.length, r = s.length;
                for (var f = 0; f < n && f < r; f++)
                    if (i[f] !== s[f]) return ot(i[f], s[f]);
                return f === n ? ot(e, s[f], -1) : ot(i[f], t, 1)
            }, [0, 0].sort(f), h = !l, nt.uniqueSort = function(e) {
                var t, n = [],
                    r = 1,
                    i = 0;
                l = h, e.sort(f);
                if (l) {
                    for (; t = e[r]; r++) t === e[r - 1] && (i = n.push(r));
                    while (i--) e.splice(n[i], 1)
                }
                return e
            }, nt.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, a = nt.compile = function(e, t) {
                var n, r = [],
                    i = [],
                    s = A[d][e + " "];
                if (!s) {
                    t || (t = ut(e)), n = t.length;
                    while (n--) s = ht(t[n]), s[d] ? r.push(s) : i.push(s);
                    s = A(e, pt(i, r))
                }
                return s
            }, g.querySelectorAll && function() {
                var e, t = vt,
                    n = /'|\\/g,
                    r = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                    i = [":focus"],
                    s = [":active"],
                    u = y.matchesSelector || y.mozMatchesSelector || y.webkitMatchesSelector || y.oMatchesSelector || y.msMatchesSelector;
                K(function(e) {
                    e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || i.push("\\[" + O + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || i.push(":checked")
                }), K(function(e) {
                    e.innerHTML = "<p test=''></p>", e.querySelectorAll("[test^='']").length && i.push("[*^$]=" + O + "*(?:\"\"|'')"), e.innerHTML = "<input type='hidden'/>", e.querySelectorAll(":enabled").length || i.push(":enabled", ":disabled")
                }), i = new RegExp(i.join("|")), vt = function(e, r, s, o, u) {
                    if (!o && !u && !i.test(e)) {
                        var a, f, l = !0,
                            c = d,
                            h = r,
                            p = r.nodeType === 9 && e;
                        if (r.nodeType === 1 && r.nodeName.toLowerCase() !== "object") {
                            a = ut(e), (l = r.getAttribute("id")) ? c = l.replace(n, "\\$&") : r.setAttribute("id", c), c = "[id='" + c + "'] ", f = a.length;
                            while (f--) a[f] = c + a[f].join("");
                            h = z.test(e) && r.parentNode || r, p = a.join(",")
                        }
                        if (p) try {
                            return S.apply(s, x.call(h.querySelectorAll(p), 0)), s
                        } catch (v) {} finally {
                            l || r.removeAttribute("id")
                        }
                    }
                    return t(e, r, s, o, u)
                }, u && (K(function(t) {
                    e = u.call(t, "div");
                    try {
                        u.call(t, "[test!='']:sizzle"), s.push("!=", H)
                    } catch (n) {}
                }), s = new RegExp(s.join("|")), nt.matchesSelector = function(t, n) {
                    n = n.replace(r, "='$1']");
                    if (!o(t) && !s.test(n) && !i.test(n)) try {
                        var a = u.call(t, n);
                        if (a || e || t.document && t.document.nodeType !== 11) return a
                    } catch (f) {}
                    return nt(n, null, null, [t]).length > 0
                })
            }(), i.pseudos.nth = i.pseudos.eq, i.filters = mt.prototype = i.pseudos, i.setFilters = new mt, nt.attr = v.attr, v.find = nt, v.expr = nt.selectors, v.expr[":"] = v.expr.pseudos, v.unique = nt.uniqueSort, v.text = nt.getText, v.isXMLDoc = nt.isXML, v.contains = nt.contains
        }(e);
    var nt = /Until$/,
        rt = /^(?:parents|prev(?:Until|All))/,
        it = /^.[^:#\[\.,]*$/,
        st = v.expr.match.needsContext,
        ot = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    v.fn.extend({
        find: function(e) {
            var t, n, r, i, s, o, u = this;
            if (typeof e != "string") return v(e).filter(function() {
                for (t = 0, n = u.length; t < n; t++)
                    if (v.contains(u[t], this)) return !0
            });
            o = this.pushStack("", "find", e);
            for (t = 0, n = this.length; t < n; t++) {
                r = o.length, v.find(e, this[t], o);
                if (t > 0)
                    for (i = r; i < o.length; i++)
                        for (s = 0; s < r; s++)
                            if (o[s] === o[i]) {
                                o.splice(i--, 1);
                                break
                            }
            }
            return o
        },
        has: function(e) {
            var t, n = v(e, this),
                r = n.length;
            return this.filter(function() {
                for (t = 0; t < r; t++)
                    if (v.contains(this, n[t])) return !0
            })
        },
        not: function(e) {
            return this.pushStack(ft(this, e, !1), "not", e)
        },
        filter: function(e) {
            return this.pushStack(ft(this, e, !0), "filter", e)
        },
        is: function(e) {
            return !!e && (typeof e == "string" ? st.test(e) ? v(e, this.context).index(this[0]) >= 0 : v.filter(e, this).length > 0 : this.filter(e).length > 0)
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                s = [],
                o = st.test(e) || typeof e != "string" ? v(e, t || this.context) : 0;
            for (; r < i; r++) {
                n = this[r];
                while (n && n.ownerDocument && n !== t && n.nodeType !== 11) {
                    if (o ? o.index(n) > -1 : v.find.matchesSelector(n, e)) {
                        s.push(n);
                        break
                    }
                    n = n.parentNode
                }
            }
            return s = s.length > 1 ? v.unique(s) : s, this.pushStack(s, "closest", e)
        },
        index: function(e) {
            return e ? typeof e == "string" ? v.inArray(this[0], v(e)) : v.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function(e, t) {
            var n = typeof e == "string" ? v(e, t) : v.makeArray(e && e.nodeType ? [e] : e),
                r = v.merge(this.get(), n);
            return this.pushStack(ut(n[0]) || ut(r[0]) ? r : v.unique(r))
        },
        addBack: function(e) {
            return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
        }
    }), v.fn.andSelf = v.fn.addBack, v.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && t.nodeType !== 11 ? t : null
        },
        parents: function(e) {
            return v.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return v.dir(e, "parentNode", n)
        },
        next: function(e) {
            return at(e, "nextSibling")
        },
        prev: function(e) {
            return at(e, "previousSibling")
        },
        nextAll: function(e) {
            return v.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return v.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return v.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return v.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return v.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return v.sibling(e.firstChild)
        },
        contents: function(e) {
            return v.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : v.merge([], e.childNodes)
        }
    }, function(e, t) {
        v.fn[e] = function(n, r) {
            var i = v.map(this, t, n);
            return nt.test(e) || (r = n), r && typeof r == "string" && (i = v.filter(r, i)), i = this.length > 1 && !ot[e] ? v.unique(i) : i, this.length > 1 && rt.test(e) && (i = i.reverse()), this.pushStack(i, e, l.call(arguments).join(","))
        }
    }), v.extend({
        filter: function(e, t, n) {
            return n && (e = ":not(" + e + ")"), t.length === 1 ? v.find.matchesSelector(t[0], e) ? [t[0]] : [] : v.find.matches(e, t)
        },
        dir: function(e, n, r) {
            var i = [],
                s = e[n];
            while (s && s.nodeType !== 9 && (r === t || s.nodeType !== 1 || !v(s).is(r))) s.nodeType === 1 && i.push(s), s = s[n];
            return i
        },
        sibling: function(e, t) {
            var n = [];
            for (; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
            return n
        }
    });
    var ct = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        ht = / jQuery\d+="(?:null|\d+)"/g,
        pt = /^\s+/,
        dt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        vt = /<([\w:]+)/,
        mt = /<tbody/i,
        gt = /<|&#?\w+;/,
        yt = /<(?:script|style|link)/i,
        bt = /<(?:script|object|embed|option|style)/i,
        wt = new RegExp("<(?:" + ct + ")[\\s/>]", "i"),
        Et = /^(?:checkbox|radio)$/,
        St = /checked\s*(?:[^=]|=\s*.checked.)/i,
        xt = /\/(java|ecma)script/i,
        Tt = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
        Nt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        },
        Ct = lt(i),
        kt = Ct.appendChild(i.createElement("div"));
    Nt.optgroup = Nt.option, Nt.tbody = Nt.tfoot = Nt.colgroup = Nt.caption = Nt.thead, Nt.th = Nt.td, v.support.htmlSerialize || (Nt._default = [1, "X<div>", "</div>"]), v.fn.extend({
            text: function(e) {
                return v.access(this, function(e) {
                    return e === t ? v.text(this) : this.empty().append((this[0] && this[0].ownerDocument || i).createTextNode(e))
                }, null, e, arguments.length)
            },
            wrapAll: function(e) {
                if (v.isFunction(e)) return this.each(function(t) {
                    v(this).wrapAll(e.call(this, t))
                });
                if (this[0]) {
                    var t = v(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                        var e = this;
                        while (e.firstChild && e.firstChild.nodeType === 1) e = e.firstChild;
                        return e
                    }).append(this)
                }
                return this
            },
            wrapInner: function(e) {
                return v.isFunction(e) ? this.each(function(t) {
                    v(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = v(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = v.isFunction(e);
                return this.each(function(n) {
                    v(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    v.nodeName(this, "body") || v(this).replaceWith(this.childNodes)
                }).end()
            },
            append: function() {
                return this.domManip(arguments, !0, function(e) {
                    (this.nodeType === 1 || this.nodeType === 11) && this.appendChild(e)
                })
            },
            prepend: function() {
                return this.domManip(arguments, !0, function(e) {
                    (this.nodeType === 1 || this.nodeType === 11) && this.insertBefore(e, this.firstChild)
                })
            },
            before: function() {
                if (!ut(this[0])) return this.domManip(arguments, !1, function(e) {
                    this.parentNode.insertBefore(e, this)
                });
                if (arguments.length) {
                    var e = v.clean(arguments);
                    return this.pushStack(v.merge(e, this), "before", this.selector)
                }
            },
            after: function() {
                if (!ut(this[0])) return this.domManip(arguments, !1, function(e) {
                    this.parentNode.insertBefore(e, this.nextSibling)
                });
                if (arguments.length) {
                    var e = v.clean(arguments);
                    return this.pushStack(v.merge(this, e), "after", this.selector)
                }
            },
            remove: function(e, t) {
                var n, r = 0;
                for (;
                    (n = this[r]) != null; r++)
                    if (!e || v.filter(e, [n]).length) !t && n.nodeType === 1 && (v.cleanData(n.getElementsByTagName("*")), v.cleanData([n])), n.parentNode && n.parentNode.removeChild(n);
                return this
            },
            empty: function() {
                var e, t = 0;
                for (;
                    (e = this[t]) != null; t++) {
                    e.nodeType === 1 && v.cleanData(e.getElementsByTagName("*"));
                    while (e.firstChild) e.removeChild(e.firstChild)
                }
                return this
            },
            clone: function(e, t) {
                return e = e == null ? !1 : e, t = t == null ? e : t, this.map(function() {
                    return v.clone(this, e, t)
                })
            },
            html: function(e) {
                return v.access(this, function(e) {
                    var n = this[0] || {},
                        r = 0,
                        i = this.length;
                    if (e === t) return n.nodeType === 1 ? n.innerHTML.replace(ht, "") : t;
                    if (typeof e == "string" && !yt.test(e) && (v.support.htmlSerialize || !wt.test(e)) && (v.support.leadingWhitespace || !pt.test(e)) && !Nt[(vt.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = e.replace(dt, "<$1></$2>");
                        try {
                            for (; r < i; r++) n = this[r] || {}, n.nodeType === 1 && (v.cleanData(n.getElementsByTagName("*")), n.innerHTML = e);
                            n = 0
                        } catch (s) {}
                    }
                    n && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function(e) {
                return ut(this[0]) ? this.length ? this.pushStack(v(v.isFunction(e) ? e() : e), "replaceWith", e) : this : v.isFunction(e) ? this.each(function(t) {
                    var n = v(this),
                        r = n.html();
                    n.replaceWith(e.call(this, t, r))
                }) : (typeof e != "string" && (e = v(e).detach()), this.each(function() {
                    var t = this.nextSibling,
                        n = this.parentNode;
                    v(this).remove(), t ? v(t).before(e) : v(n).append(e)
                }))
            },
            detach: function(e) {
                return this.remove(e, !0)
            },
            domManip: function(e, n, r) {
                e = [].concat.apply([], e);
                var i, s, o, u, a = 0,
                    f = e[0],
                    l = [],
                    c = this.length;
                if (!v.support.checkClone && c > 1 && typeof f == "string" && St.test(f)) return this.each(function() {
                    v(this).domManip(e, n, r)
                });
                if (v.isFunction(f)) return this.each(function(i) {
                    var s = v(this);
                    e[0] = f.call(this, i, n ? s.html() : t), s.domManip(e, n, r)
                });
                if (this[0]) {
                    i = v.buildFragment(e, this, l), o = i.fragment, s = o.firstChild, o.childNodes.length === 1 && (o = s);
                    if (s) {
                        n = n && v.nodeName(s, "tr");
                        for (u = i.cacheable || c - 1; a < c; a++) r.call(n && v.nodeName(this[a], "table") ? Lt(this[a], "tbody") : this[a], a === u ? o : v.clone(o, !0, !0))
                    }
                    o = s = null, l.length && v.each(l, function(e, t) {
                        t.src ? v.ajax ? v.ajax({
                            url: t.src,
                            type: "GET",
                            dataType: "script",
                            async: !1,
                            global: !1,
                            "throws": !0
                        }) : v.error("no ajax") : v.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Tt, "")), t.parentNode && t.parentNode.removeChild(t)
                    })
                }
                return this
            }
        }), v.buildFragment = function(e, n, r) {
            var s, o, u, a = e[0];
            return n = n || i, n = !n.nodeType && n[0] || n, n = n.ownerDocument || n, e.length === 1 && typeof a == "string" && a.length < 512 && n === i && a.charAt(0) === "<" && !bt.test(a) && (v.support.checkClone || !St.test(a)) && (v.support.html5Clone || !wt.test(a)) && (o = !0, s = v.fragments[a], u = s !== t), s || (s = n.createDocumentFragment(), v.clean(e, n, s, r), o && (v.fragments[a] = u && s)), {
                fragment: s,
                cacheable: o
            }
        }, v.fragments = {}, v.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            v.fn[e] = function(n) {
                var r, i = 0,
                    s = [],
                    o = v(n),
                    u = o.length,
                    a = this.length === 1 && this[0].parentNode;
                if ((a == null || a && a.nodeType === 11 && a.childNodes.length === 1) && u === 1) return o[t](this[0]), this;
                for (; i < u; i++) r = (i > 0 ? this.clone(!0) : this).get(), v(o[i])[t](r), s = s.concat(r);
                return this.pushStack(s, e, o.selector)
            }
        }), v.extend({
            clone: function(e, t, n) {
                var r, i, s, o;
                v.support.html5Clone || v.isXMLDoc(e) || !wt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (kt.innerHTML = e.outerHTML, kt.removeChild(o = kt.firstChild));
                if ((!v.support.noCloneEvent || !v.support.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !v.isXMLDoc(e)) {
                    Ot(e, o), r = Mt(e), i = Mt(o);
                    for (s = 0; r[s]; ++s) i[s] && Ot(r[s], i[s])
                }
                if (t) {
                    At(e, o);
                    if (n) {
                        r = Mt(e), i = Mt(o);
                        for (s = 0; r[s]; ++s) At(r[s], i[s])
                    }
                }
                return r = i = null, o
            },
            clean: function(e, t, n, r) {
                var s, o, u, a, f, l, c, h, p, d, m, g, y = t === i && Ct,
                    b = [];
                if (!t || typeof t.createDocumentFragment == "undefined") t = i;
                for (s = 0;
                    (u = e[s]) != null; s++) {
                    typeof u == "number" && (u += "");
                    if (!u) continue;
                    if (typeof u == "string")
                        if (!gt.test(u)) u = t.createTextNode(u);
                        else {
                            y = y || lt(t), c = t.createElement("div"), y.appendChild(c), u = u.replace(dt, "<$1></$2>"), a = (vt.exec(u) || ["", ""])[1].toLowerCase(), f = Nt[a] || Nt._default, l = f[0], c.innerHTML = f[1] + u + f[2];
                            while (l--) c = c.lastChild;
                            if (!v.support.tbody) {
                                h = mt.test(u), p = a === "table" && !h ? c.firstChild && c.firstChild.childNodes : f[1] === "<table>" && !h ? c.childNodes : [];
                                for (o = p.length - 1; o >= 0; --o) v.nodeName(p[o], "tbody") && !p[o].childNodes.length && p[o].parentNode.removeChild(p[o])
                            }!v.support.leadingWhitespace && pt.test(u) && c.insertBefore(t.createTextNode(pt.exec(u)[0]), c.firstChild), u = c.childNodes, c.parentNode.removeChild(c)
                        }
                    u.nodeType ? b.push(u) : v.merge(b, u)
                }
                c && (u = c = y = null);
                if (!v.support.appendChecked)
                    for (s = 0;
                        (u = b[s]) != null; s++) v.nodeName(u, "input") ? _t(u) : typeof u.getElementsByTagName != "undefined" && v.grep(u.getElementsByTagName("input"), _t);
                if (n) {
                    m = function(e) {
                        if (!e.type || xt.test(e.type)) return r ? r.push(e.parentNode ? e.parentNode.removeChild(e) : e) : n.appendChild(e)
                    };
                    for (s = 0;
                        (u = b[s]) != null; s++)
                        if (!v.nodeName(u, "script") || !m(u)) n.appendChild(u), typeof u.getElementsByTagName != "undefined" && (g = v.grep(v.merge([], u.getElementsByTagName("script")), m), b.splice.apply(b, [s + 1, 0].concat(g)), s += g.length)
                }
                return b
            },
            cleanData: function(e, t) {
                var n, r, i, s, o = 0,
                    u = v.expando,
                    a = v.cache,
                    f = v.support.deleteExpando,
                    l = v.event.special;
                for (;
                    (i = e[o]) != null; o++)
                    if (t || v.acceptData(i)) {
                        r = i[u], n = r && a[r];
                        if (n) {
                            if (n.events)
                                for (s in n.events) l[s] ? v.event.remove(i, s) : v.removeEvent(i, s, n.handle);
                            a[r] && (delete a[r], f ? delete i[u] : i.removeAttribute ? i.removeAttribute(u) : i[u] = null, v.deletedIds.push(r))
                        }
                    }
            }
        }),
        function() {
            var e, t;
            v.uaMatch = function(e) {
                e = e.toLowerCase();
                var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
                return {
                    browser: t[1] || "",
                    version: t[2] || "0"
                }
            }, e = v.uaMatch(o.userAgent), t = {}, e.browser && (t[e.browser] = !0, t.version = e.version), t.chrome ? t.webkit = !0 : t.webkit && (t.safari = !0), v.browser = t, v.sub = function() {
                function e(t, n) {
                    return new e.fn.init(t, n)
                }
                v.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function(r, i) {
                    return i && i instanceof v && !(i instanceof e) && (i = e(i)), v.fn.init.call(this, r, i, t)
                }, e.fn.init.prototype = e.fn;
                var t = e(i);
                return e
            }
        }();
    var Dt, Pt, Ht, Bt = /alpha\([^)]*\)/i,
        jt = /opacity=([^)]*)/,
        Ft = /^(top|right|bottom|left)$/,
        It = /^(none|table(?!-c[ea]).+)/,
        qt = /^margin/,
        Rt = new RegExp("^(" + m + ")(.*)$", "i"),
        Ut = new RegExp("^(" + m + ")(?!px)[a-z%]+$", "i"),
        zt = new RegExp("^([-+])=(" + m + ")", "i"),
        Wt = {
            BODY: "block"
        },
        Xt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Vt = {
            letterSpacing: 0,
            fontWeight: 400
        },
        $t = ["Top", "Right", "Bottom", "Left"],
        Jt = ["Webkit", "O", "Moz", "ms"],
        Kt = v.fn.toggle;
    v.fn.extend({
        css: function(e, n) {
            return v.access(this, function(e, n, r) {
                return r !== t ? v.style(e, n, r) : v.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function() {
            return Yt(this, !0)
        },
        hide: function() {
            return Yt(this)
        },
        toggle: function(e, t) {
            var n = typeof e == "boolean";
            return v.isFunction(e) && v.isFunction(t) ? Kt.apply(this, arguments) : this.each(function() {
                (n ? e : Gt(this)) ? v(this).show(): v(this).hide()
            })
        }
    }), v.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Dt(e, "opacity");
                        return n === "" ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": v.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, n, r, i) {
            if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) return;
            var s, o, u, a = v.camelCase(n),
                f = e.style;
            n = v.cssProps[a] || (v.cssProps[a] = Qt(f, a)), u = v.cssHooks[n] || v.cssHooks[a];
            if (r === t) return u && "get" in u && (s = u.get(e, !1, i)) !== t ? s : f[n];
            o = typeof r, o === "string" && (s = zt.exec(r)) && (r = (s[1] + 1) * s[2] + parseFloat(v.css(e, n)), o = "number");
            if (r == null || o === "number" && isNaN(r)) return;
            o === "number" && !v.cssNumber[a] && (r += "px");
            if (!u || !("set" in u) || (r = u.set(e, r, i)) !== t) try {
                f[n] = r
            } catch (l) {}
        },
        css: function(e, n, r, i) {
            var s, o, u, a = v.camelCase(n);
            return n = v.cssProps[a] || (v.cssProps[a] = Qt(e.style, a)), u = v.cssHooks[n] || v.cssHooks[a], u && "get" in u && (s = u.get(e, !0, i)), s === t && (s = Dt(e, n)), s === "normal" && n in Vt && (s = Vt[n]), r || i !== t ? (o = parseFloat(s), r || v.isNumeric(o) ? o || 0 : s) : s
        },
        swap: function(e, t, n) {
            var r, i, s = {};
            for (i in t) s[i] = e.style[i], e.style[i] = t[i];
            r = n.call(e);
            for (i in t) e.style[i] = s[i];
            return r
        }
    }), e.getComputedStyle ? Dt = function(t, n) {
        var r, i, s, o, u = e.getComputedStyle(t, null),
            a = t.style;
        return u && (r = u.getPropertyValue(n) || u[n], r === "" && !v.contains(t.ownerDocument, t) && (r = v.style(t, n)), Ut.test(r) && qt.test(n) && (i = a.width, s = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = u.width, a.width = i, a.minWidth = s, a.maxWidth = o)), r
    } : i.documentElement.currentStyle && (Dt = function(e, t) {
        var n, r, i = e.currentStyle && e.currentStyle[t],
            s = e.style;
        return i == null && s && s[t] && (i = s[t]), Ut.test(i) && !Ft.test(t) && (n = s.left, r = e.runtimeStyle && e.runtimeStyle.left, r && (e.runtimeStyle.left = e.currentStyle.left), s.left = t === "fontSize" ? "1em" : i, i = s.pixelLeft + "px", s.left = n, r && (e.runtimeStyle.left = r)), i === "" ? "auto" : i
    }), v.each(["height", "width"], function(e, t) {
        v.cssHooks[t] = {
            get: function(e, n, r) {
                if (n) return e.offsetWidth === 0 && It.test(Dt(e, "display")) ? v.swap(e, Xt, function() {
                    return tn(e, t, r)
                }) : tn(e, t, r)
            },
            set: function(e, n, r) {
                return Zt(e, n, r ? en(e, t, r, v.support.boxSizing && v.css(e, "boxSizing") === "border-box") : 0)
            }
        }
    }), v.support.opacity || (v.cssHooks.opacity = {
        get: function(e, t) {
            return jt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = v.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
                s = r && r.filter || n.filter || "";
            n.zoom = 1;
            if (t >= 1 && v.trim(s.replace(Bt, "")) === "" && n.removeAttribute) {
                n.removeAttribute("filter");
                if (r && !r.filter) return
            }
            n.filter = Bt.test(s) ? s.replace(Bt, i) : s + " " + i
        }
    }), v(function() {
        v.support.reliableMarginRight || (v.cssHooks.marginRight = {
            get: function(e, t) {
                return v.swap(e, {
                    display: "inline-block"
                }, function() {
                    if (t) return Dt(e, "marginRight")
                })
            }
        }), !v.support.pixelPosition && v.fn.position && v.each(["top", "left"], function(e, t) {
            v.cssHooks[t] = {
                get: function(e, n) {
                    if (n) {
                        var r = Dt(e, t);
                        return Ut.test(r) ? v(e).position()[t] + "px" : r
                    }
                }
            }
        })
    }), v.expr && v.expr.filters && (v.expr.filters.hidden = function(e) {
        return e.offsetWidth === 0 && e.offsetHeight === 0 || !v.support.reliableHiddenOffsets && (e.style && e.style.display || Dt(e, "display")) === "none"
    }, v.expr.filters.visible = function(e) {
        return !v.expr.filters.hidden(e)
    }), v.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        v.cssHooks[e + t] = {
            expand: function(n) {
                var r, i = typeof n == "string" ? n.split(" ") : [n],
                    s = {};
                for (r = 0; r < 4; r++) s[e + $t[r] + t] = i[r] || i[r - 2] || i[0];
                return s
            }
        }, qt.test(e) || (v.cssHooks[e + t].set = Zt)
    });
    var rn = /%20/g,
        sn = /\[\]$/,
        on = /\r?\n/g,
        un = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        an = /^(?:select|textarea)/i;
    v.fn.extend({
        serialize: function() {
            return v.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? v.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || an.test(this.nodeName) || un.test(this.type))
            }).map(function(e, t) {
                var n = v(this).val();
                return n == null ? null : v.isArray(n) ? v.map(n, function(e, n) {
                    return {
                        name: t.name,
                        value: e.replace(on, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(on, "\r\n")
                }
            }).get()
        }
    }), v.param = function(e, n) {
        var r, i = [],
            s = function(e, t) {
                t = v.isFunction(t) ? t() : t == null ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        n === t && (n = v.ajaxSettings && v.ajaxSettings.traditional);
        if (v.isArray(e) || e.jquery && !v.isPlainObject(e)) v.each(e, function() {
            s(this.name, this.value)
        });
        else
            for (r in e) fn(r, e[r], n, s);
        return i.join("&").replace(rn, "+")
    };
    var ln, cn, hn = /#.*$/,
        pn = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        dn = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        vn = /^(?:GET|HEAD)$/,
        mn = /^\/\//,
        gn = /\?/,
        yn = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        bn = /([?&])_=[^&]*/,
        wn = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        En = v.fn.load,
        Sn = {},
        xn = {},
        Tn = ["*/"] + ["*"];
    try {
        cn = s.href
    } catch (Nn) {
        cn = i.createElement("a"), cn.href = "", cn = cn.href
    }
    ln = wn.exec(cn.toLowerCase()) || [], v.fn.load = function(e, n, r) {
        if (typeof e != "string" && En) return En.apply(this, arguments);
        if (!this.length) return this;
        var i, s, o, u = this,
            a = e.indexOf(" ");
        return a >= 0 && (i = e.slice(a, e.length), e = e.slice(0, a)), v.isFunction(n) ? (r = n, n = t) : n && typeof n == "object" && (s = "POST"), v.ajax({
            url: e,
            type: s,
            dataType: "html",
            data: n,
            complete: function(e, t) {
                r && u.each(r, o || [e.responseText, t, e])
            }
        }).done(function(e) {
            o = arguments, u.html(i ? v("<div>").append(e.replace(yn, "")).find(i) : e)
        }), this
    }, v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(e, t) {
        v.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), v.each(["get", "post"], function(e, n) {
        v[n] = function(e, r, i, s) {
            return v.isFunction(r) && (s = s || i, i = r, r = t), v.ajax({
                type: n,
                url: e,
                data: r,
                success: i,
                dataType: s
            })
        }
    }), v.extend({
        getScript: function(e, n) {
            return v.get(e, t, n, "script")
        },
        getJSON: function(e, t, n) {
            return v.get(e, t, n, "json")
        },
        ajaxSetup: function(e, t) {
            return t ? Ln(e, v.ajaxSettings) : (t = e, e = v.ajaxSettings), Ln(e, t), e
        },
        ajaxSettings: {
            url: cn,
            isLocal: dn.test(ln[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": Tn
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": e.String,
                "text html": !0,
                "text json": v.parseJSON,
                "text xml": v.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: Cn(Sn),
        ajaxTransport: Cn(xn),
        ajax: function(e, n) {
            function T(e, n, s, a) {
                var l, y, b, w, S, T = n;
                if (E === 2) return;
                E = 2, u && clearTimeout(u), o = t, i = a || "", x.readyState = e > 0 ? 4 : 0, s && (w = An(c, x, s));
                if (e >= 200 && e < 300 || e === 304) c.ifModified && (S = x.getResponseHeader("Last-Modified"), S && (v.lastModified[r] = S), S = x.getResponseHeader("Etag"), S && (v.etag[r] = S)), e === 304 ? (T = "notmodified", l = !0) : (l = On(c, w), T = l.state, y = l.data, b = l.error, l = !b);
                else {
                    b = T;
                    if (!T || e) T = "error", e < 0 && (e = 0)
                }
                x.status = e, x.statusText = (n || T) + "", l ? d.resolveWith(h, [y, T, x]) : d.rejectWith(h, [x, T, b]), x.statusCode(g), g = t, f && p.trigger("ajax" + (l ? "Success" : "Error"), [x, c, l ? y : b]), m.fireWith(h, [x, T]), f && (p.trigger("ajaxComplete", [x, c]), --v.active || v.event.trigger("ajaxStop"))
            }
            typeof e == "object" && (n = e, e = t), n = n || {};
            var r, i, s, o, u, a, f, l, c = v.ajaxSetup({}, n),
                h = c.context || c,
                p = h !== c && (h.nodeType || h instanceof v) ? v(h) : v.event,
                d = v.Deferred(),
                m = v.Callbacks("once memory"),
                g = c.statusCode || {},
                b = {},
                w = {},
                E = 0,
                S = "canceled",
                x = {
                    readyState: 0,
                    setRequestHeader: function(e, t) {
                        if (!E) {
                            var n = e.toLowerCase();
                            e = w[n] = w[n] || e, b[e] = t
                        }
                        return this
                    },
                    getAllResponseHeaders: function() {
                        return E === 2 ? i : null
                    },
                    getResponseHeader: function(e) {
                        var n;
                        if (E === 2) {
                            if (!s) {
                                s = {};
                                while (n = pn.exec(i)) s[n[1].toLowerCase()] = n[2]
                            }
                            n = s[e.toLowerCase()]
                        }
                        return n === t ? null : n
                    },
                    overrideMimeType: function(e) {
                        return E || (c.mimeType = e), this
                    },
                    abort: function(e) {
                        return e = e || S, o && o.abort(e), T(0, e), this
                    }
                };
            d.promise(x), x.success = x.done, x.error = x.fail, x.complete = m.add, x.statusCode = function(e) {
                if (e) {
                    var t;
                    if (E < 2)
                        for (t in e) g[t] = [g[t], e[t]];
                    else t = e[x.status], x.always(t)
                }
                return this
            }, c.url = ((e || c.url) + "").replace(hn, "").replace(mn, ln[1] + "//"), c.dataTypes = v.trim(c.dataType || "*").toLowerCase().split(y), c.crossDomain == null && (a = wn.exec(c.url.toLowerCase()), c.crossDomain = !(!a || a[1] === ln[1] && a[2] === ln[2] && (a[3] || (a[1] === "http:" ? 80 : 443)) == (ln[3] || (ln[1] === "http:" ? 80 : 443)))), c.data && c.processData && typeof c.data != "string" && (c.data = v.param(c.data, c.traditional)), kn(Sn, c, n, x);
            if (E === 2) return x;
            f = c.global, c.type = c.type.toUpperCase(), c.hasContent = !vn.test(c.type), f && v.active++ === 0 && v.event.trigger("ajaxStart");
            if (!c.hasContent) {
                c.data && (c.url += (gn.test(c.url) ? "&" : "?") + c.data, delete c.data), r = c.url;
                if (c.cache === !1) {
                    var N = v.now(),
                        C = c.url.replace(bn, "$1_=" + N);
                    c.url = C + (C === c.url ? (gn.test(c.url) ? "&" : "?") + "_=" + N : "")
                }
            }(c.data && c.hasContent && c.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", c.contentType), c.ifModified && (r = r || c.url, v.lastModified[r] && x.setRequestHeader("If-Modified-Since", v.lastModified[r]), v.etag[r] && x.setRequestHeader("If-None-Match", v.etag[r])), x.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + (c.dataTypes[0] !== "*" ? ", " + Tn + "; q=0.01" : "") : c.accepts["*"]);
            for (l in c.headers) x.setRequestHeader(l, c.headers[l]);
            if (!c.beforeSend || c.beforeSend.call(h, x, c) !== !1 && E !== 2) {
                S = "abort";
                for (l in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) x[l](c[l]);
                o = kn(xn, c, n, x);
                if (!o) T(-1, "No Transport");
                else {
                    x.readyState = 1, f && p.trigger("ajaxSend", [x, c]), c.async && c.timeout > 0 && (u = setTimeout(function() {
                        x.abort("timeout")
                    }, c.timeout));
                    try {
                        E = 1, o.send(b, T)
                    } catch (k) {
                        if (!(E < 2)) throw k;
                        T(-1, k)
                    }
                }
                return x
            }
            return x.abort()
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var Mn = [],
        _n = /\?/,
        Dn = /(=)\?(?=&|$)|\?\?/,
        Pn = v.now();
    v.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Mn.pop() || v.expando + "_" + Pn++;
            return this[e] = !0, e
        }
    }), v.ajaxPrefilter("json jsonp", function(n, r, i) {
        var s, o, u, a = n.data,
            f = n.url,
            l = n.jsonp !== !1,
            c = l && Dn.test(f),
            h = l && !c && typeof a == "string" && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Dn.test(a);
        if (n.dataTypes[0] === "jsonp" || c || h) return s = n.jsonpCallback = v.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, o = e[s], c ? n.url = f.replace(Dn, "$1" + s) : h ? n.data = a.replace(Dn, "$1" + s) : l && (n.url += (_n.test(f) ? "&" : "?") + n.jsonp + "=" + s), n.converters["script json"] = function() {
            return u || v.error(s + " was not called"), u[0]
        }, n.dataTypes[0] = "json", e[s] = function() {
            u = arguments
        }, i.always(function() {
            e[s] = o, n[s] && (n.jsonpCallback = r.jsonpCallback, Mn.push(s)), u && v.isFunction(o) && o(u[0]), u = o = t
        }), "script"
    }), v.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(e) {
                return v.globalEval(e), e
            }
        }
    }), v.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), v.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, r = i.head || i.getElementsByTagName("head")[0] || i.documentElement;
            return {
                send: function(s, o) {
                    n = i.createElement("script"), n.async = "async", e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, i) {
                        if (i || !n.readyState || /loaded|complete/.test(n.readyState)) n.onload = n.onreadystatechange = null, r && n.parentNode && r.removeChild(n), n = t, i || o(200, "success")
                    }, r.insertBefore(n, r.firstChild)
                },
                abort: function() {
                    n && n.onload(0, 1)
                }
            }
        }
    });
    var Hn, Bn = e.ActiveXObject ? function() {
            for (var e in Hn) Hn[e](0, 1)
        } : !1,
        jn = 0;
    v.ajaxSettings.xhr = e.ActiveXObject ? function() {
            return !this.isLocal && Fn() || In()
        } : Fn,
        function(e) {
            v.extend(v.support, {
                ajax: !!e,
                cors: !!e && "withCredentials" in e
            })
        }(v.ajaxSettings.xhr()), v.support.ajax && v.ajaxTransport(function(n) {
            if (!n.crossDomain || v.support.cors) {
                var r;
                return {
                    send: function(i, s) {
                        var o, u, a = n.xhr();
                        n.username ? a.open(n.type, n.url, n.async, n.username, n.password) : a.open(n.type, n.url, n.async);
                        if (n.xhrFields)
                            for (u in n.xhrFields) a[u] = n.xhrFields[u];
                        n.mimeType && a.overrideMimeType && a.overrideMimeType(n.mimeType), !n.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (u in i) a.setRequestHeader(u, i[u])
                        } catch (f) {}
                        a.send(n.hasContent && n.data || null), r = function(e, i) {
                            var u, f, l, c, h;
                            try {
                                if (r && (i || a.readyState === 4)) {
                                    r = t, o && (a.onreadystatechange = v.noop, Bn && delete Hn[o]);
                                    if (i) a.readyState !== 4 && a.abort();
                                    else {
                                        u = a.status, l = a.getAllResponseHeaders(), c = {}, h = a.responseXML, h && h.documentElement && (c.xml = h);
                                        try {
                                            c.text = a.responseText
                                        } catch (p) {}
                                        try {
                                            f = a.statusText
                                        } catch (p) {
                                            f = ""
                                        }!u && n.isLocal && !n.crossDomain ? u = c.text ? 200 : 404 : u === 1223 && (u = 204)
                                    }
                                }
                            } catch (d) {
                                i || s(-1, d)
                            }
                            c && s(u, f, c, l)
                        }, n.async ? a.readyState === 4 ? setTimeout(r, 0) : (o = ++jn, Bn && (Hn || (Hn = {}, v(e).unload(Bn)), Hn[o] = r), a.onreadystatechange = r) : r()
                    },
                    abort: function() {
                        r && r(0, 1)
                    }
                }
            }
        });
    var qn, Rn, Un = /^(?:toggle|show|hide)$/,
        zn = new RegExp("^(?:([-+])=|)(" + m + ")([a-z%]*)$", "i"),
        Wn = /queueHooks$/,
        Xn = [Gn],
        Vn = {
            "*": [function(e, t) {
                var n, r, i = this.createTween(e, t),
                    s = zn.exec(t),
                    o = i.cur(),
                    u = +o || 0,
                    a = 1,
                    f = 20;
                if (s) {
                    n = +s[2], r = s[3] || (v.cssNumber[e] ? "" : "px");
                    if (r !== "px" && u) {
                        u = v.css(i.elem, e, !0) || n || 1;
                        do a = a || ".5", u /= a, v.style(i.elem, e, u + r); while (a !== (a = i.cur() / o) && a !== 1 && --f)
                    }
                    i.unit = r, i.start = u, i.end = s[1] ? u + (s[1] + 1) * n : n
                }
                return i
            }]
        };
    v.Animation = v.extend(Kn, {
        tweener: function(e, t) {
            v.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            var n, r = 0,
                i = e.length;
            for (; r < i; r++) n = e[r], Vn[n] = Vn[n] || [], Vn[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? Xn.unshift(e) : Xn.push(e)
        }
    }), v.Tween = Yn, Yn.prototype = {
        constructor: Yn,
        init: function(e, t, n, r, i, s) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = s || (v.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Yn.propHooks[this.prop];
            return e && e.get ? e.get(this) : Yn.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Yn.propHooks[this.prop];
            return this.options.duration ? this.pos = t = v.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Yn.propHooks._default.set(this), this
        }
    }, Yn.prototype.init.prototype = Yn.prototype, Yn.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return e.elem[e.prop] == null || !!e.elem.style && e.elem.style[e.prop] != null ? (t = v.css(e.elem, e.prop, !1, ""), !t || t === "auto" ? 0 : t) : e.elem[e.prop]
            },
            set: function(e) {
                v.fx.step[e.prop] ? v.fx.step[e.prop](e) : e.elem.style && (e.elem.style[v.cssProps[e.prop]] != null || v.cssHooks[e.prop]) ? v.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, Yn.propHooks.scrollTop = Yn.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, v.each(["toggle", "show", "hide"], function(e, t) {
        var n = v.fn[t];
        v.fn[t] = function(r, i, s) {
            return r == null || typeof r == "boolean" || !e && v.isFunction(r) && v.isFunction(i) ? n.apply(this, arguments) : this.animate(Zn(t, !0), r, i, s)
        }
    }), v.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(Gt).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = v.isEmptyObject(e),
                s = v.speed(t, n, r),
                o = function() {
                    var t = Kn(this, v.extend({}, e), s);
                    i && t.stop(!0)
                };
            return i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
        },
        stop: function(e, n, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return typeof e != "string" && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    n = e != null && e + "queueHooks",
                    s = v.timers,
                    o = v._data(this);
                if (n) o[n] && o[n].stop && i(o[n]);
                else
                    for (n in o) o[n] && o[n].stop && Wn.test(n) && i(o[n]);
                for (n = s.length; n--;) s[n].elem === this && (e == null || s[n].queue === e) && (s[n].anim.stop(r), t = !1, s.splice(n, 1));
                (t || !r) && v.dequeue(this, e)
            })
        }
    }), v.each({
        slideDown: Zn("show"),
        slideUp: Zn("hide"),
        slideToggle: Zn("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        v.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), v.speed = function(e, t, n) {
        var r = e && typeof e == "object" ? v.extend({}, e) : {
            complete: n || !n && t || v.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !v.isFunction(t) && t
        };
        r.duration = v.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in v.fx.speeds ? v.fx.speeds[r.duration] : v.fx.speeds._default;
        if (r.queue == null || r.queue === !0) r.queue = "fx";
        return r.old = r.complete, r.complete = function() {
            v.isFunction(r.old) && r.old.call(this), r.queue && v.dequeue(this, r.queue)
        }, r
    }, v.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, v.timers = [], v.fx = Yn.prototype.init, v.fx.tick = function() {
        var e, n = v.timers,
            r = 0;
        qn = v.now();
        for (; r < n.length; r++) e = n[r], !e() && n[r] === e && n.splice(r--, 1);
        n.length || v.fx.stop(), qn = t
    }, v.fx.timer = function(e) {
        e() && v.timers.push(e) && !Rn && (Rn = setInterval(v.fx.tick, v.fx.interval))
    }, v.fx.interval = 13, v.fx.stop = function() {
        clearInterval(Rn), Rn = null
    }, v.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, v.fx.step = {}, v.expr && v.expr.filters && (v.expr.filters.animated = function(e) {
        return v.grep(v.timers, function(t) {
            return e === t.elem
        }).length
    });
    var er = /^(?:body|html)$/i;
    v.fn.offset = function(e) {
        if (arguments.length) return e === t ? this : this.each(function(t) {
            v.offset.setOffset(this, e, t)
        });
        var n, r, i, s, o, u, a, f = {
                top: 0,
                left: 0
            },
            l = this[0],
            c = l && l.ownerDocument;
        if (!c) return;
        return (r = c.body) === l ? v.offset.bodyOffset(l) : (n = c.documentElement, v.contains(n, l) ? (typeof l.getBoundingClientRect != "undefined" && (f = l.getBoundingClientRect()), i = tr(c), s = n.clientTop || r.clientTop || 0, o = n.clientLeft || r.clientLeft || 0, u = i.pageYOffset || n.scrollTop, a = i.pageXOffset || n.scrollLeft, {
            top: f.top + u - s,
            left: f.left + a - o
        }) : f)
    }, v.offset = {
        bodyOffset: function(e) {
            var t = e.offsetTop,
                n = e.offsetLeft;
            return v.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(v.css(e, "marginTop")) || 0, n += parseFloat(v.css(e, "marginLeft")) || 0), {
                top: t,
                left: n
            }
        },
        setOffset: function(e, t, n) {
            var r = v.css(e, "position");
            r === "static" && (e.style.position = "relative");
            var i = v(e),
                s = i.offset(),
                o = v.css(e, "top"),
                u = v.css(e, "left"),
                a = (r === "absolute" || r === "fixed") && v.inArray("auto", [o, u]) > -1,
                f = {},
                l = {},
                c, h;
            a ? (l = i.position(), c = l.top, h = l.left) : (c = parseFloat(o) || 0, h = parseFloat(u) || 0), v.isFunction(t) && (t = t.call(e, n, s)), t.top != null && (f.top = t.top - s.top + c), t.left != null && (f.left = t.left - s.left + h), "using" in t ? t.using.call(e, f) : i.css(f)
        }
    }, v.fn.extend({
        position: function() {
            if (!this[0]) return;
            var e = this[0],
                t = this.offsetParent(),
                n = this.offset(),
                r = er.test(t[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : t.offset();
            return n.top -= parseFloat(v.css(e, "marginTop")) || 0, n.left -= parseFloat(v.css(e, "marginLeft")) || 0, r.top += parseFloat(v.css(t[0], "borderTopWidth")) || 0, r.left += parseFloat(v.css(t[0], "borderLeftWidth")) || 0, {
                top: n.top - r.top,
                left: n.left - r.left
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || i.body;
                while (e && !er.test(e.nodeName) && v.css(e, "position") === "static") e = e.offsetParent;
                return e || i.body
            })
        }
    }), v.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, n) {
        var r = /Y/.test(n);
        v.fn[e] = function(i) {
            return v.access(this, function(e, i, s) {
                var o = tr(e);
                if (s === t) return o ? n in o ? o[n] : o.document.documentElement[i] : e[i];
                o ? o.scrollTo(r ? v(o).scrollLeft() : s, r ? s : v(o).scrollTop()) : e[i] = s
            }, e, i, arguments.length, null)
        }
    }), v.each({
        Height: "height",
        Width: "width"
    }, function(e, n) {
        v.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function(r, i) {
            v.fn[i] = function(i, s) {
                var o = arguments.length && (r || typeof i != "boolean"),
                    u = r || (i === !0 || s === !0 ? "margin" : "border");
                return v.access(this, function(n, r, i) {
                    var s;
                    return v.isWindow(n) ? n.document.documentElement["client" + e] : n.nodeType === 9 ? (s = n.documentElement, Math.max(n.body["scroll" + e], s["scroll" + e], n.body["offset" + e], s["offset" + e], s["client" + e])) : i === t ? v.css(n, r, i, u) : v.style(n, r, i, u)
                }, n, o ? i : t, o, null)
            }
        })
    }), e.jQuery = e.$ = v, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return v
    })
})(window),
function(e, t) {
    var n = function() {
        var t = e._data(document, "events");
        return t && t.click && e.grep(t.click, function(e) {
            return e.namespace === "rails"
        }).length
    };
    n() && e.error("jquery-ujs has already been loaded!");
    var r;
    e.rails = r = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",
        disableSelector: "input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
        fileInputSelector: "input:file",
        linkDisableSelector: "a[data-disable-with]",
        CSRFProtection: function(t) {
            var n = e('meta[name="csrf-token"]').attr("content");
            n && t.setRequestHeader("X-CSRF-Token", n)
        },
        fire: function(t, n, r) {
            var i = e.Event(n);
            return t.trigger(i, r), i.result !== !1
        },
        confirm: function(e) {
            return confirm(e)
        },
        ajax: function(t) {
            return e.ajax(t)
        },
        href: function(e) {
            return e.attr("href")
        },
        handleRemote: function(n) {
            var i, s, o, u, a, f, l, c;
            if (r.fire(n, "ajax:before")) {
                u = n.data("cross-domain"), a = u === t ? null : u, f = n.data("with-credentials") || null, l = n.data("type") || e.ajaxSettings && e.ajaxSettings.dataType;
                if (n.is("form")) {
                    i = n.attr("method"), s = n.attr("action"), o = n.serializeArray();
                    var h = n.data("ujs:submit-button");
                    h && (o.push(h), n.data("ujs:submit-button", null))
                } else n.is(r.inputChangeSelector) ? (i = n.data("method"), s = n.data("url"), o = n.serialize(), n.data("params") && (o = o + "&" + n.data("params"))) : (i = n.data("method"), s = r.href(n), o = n.data("params") || null);
                c = {
                    type: i || "GET",
                    data: o,
                    dataType: l,
                    beforeSend: function(e, i) {
                        return i.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + i.accepts.script), r.fire(n, "ajax:beforeSend", [e, i])
                    },
                    success: function(e, t, r) {
                        n.trigger("ajax:success", [e, t, r])
                    },
                    complete: function(e, t) {
                        n.trigger("ajax:complete", [e, t])
                    },
                    error: function(e, t, r) {
                        n.trigger("ajax:error", [e, t, r])
                    },
                    xhrFields: {
                        withCredentials: f
                    },
                    crossDomain: a
                }, s && (c.url = s);
                var p = r.ajax(c);
                return n.trigger("ajax:send", p), p
            }
            return !1
        },
        handleMethod: function(n) {
            var i = r.href(n),
                s = n.data("method"),
                o = n.attr("target"),
                u = e("meta[name=csrf-token]").attr("content"),
                a = e("meta[name=csrf-param]").attr("content"),
                f = e('<form method="post" action="' + i + '"></form>'),
                l = '<input name="_method" value="' + s + '" type="hidden" />';
            a !== t && u !== t && (l += '<input name="' + a + '" value="' + u + '" type="hidden" />'), o && f.attr("target", o), f.hide().append(l).appendTo("body"), f.submit()
        },
        disableFormElements: function(t) {
            t.find(r.disableSelector).each(function() {
                var t = e(this),
                    n = t.is("button") ? "html" : "val";
                t.data("ujs:enable-with", t[n]()), t[n](t.data("disable-with")), t.prop("disabled", !0)
            })
        },
        enableFormElements: function(t) {
            t.find(r.enableSelector).each(function() {
                var t = e(this),
                    n = t.is("button") ? "html" : "val";
                t.data("ujs:enable-with") && t[n](t.data("ujs:enable-with")), t.prop("disabled", !1)
            })
        },
        allowAction: function(e) {
            var t = e.data("confirm"),
                n = !1,
                i;
            return t ? (r.fire(e, "confirm") && (n = r.confirm(t), i = r.fire(e, "confirm:complete", [n])), n && i) : !0
        },
        blankInputs: function(t, n, r) {
            var i = e(),
                s, o, u = n || "input,textarea",
                a = t.find(u);
            return a.each(function() {
                s = e(this), o = s.is(":checkbox,:radio") ? s.is(":checked") : s.val();
                if (!o == !r) {
                    if (s.is(":radio") && a.filter('input:radio:checked[name="' + s.attr("name") + '"]').length) return !0;
                    i = i.add(s)
                }
            }), i.length ? i : !1
        },
        nonBlankInputs: function(e, t) {
            return r.blankInputs(e, t, !0)
        },
        stopEverything: function(t) {
            return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
        },
        callFormSubmitBindings: function(n, r) {
            var i = n.data("events"),
                s = !0;
            return i !== t && i.submit !== t && e.each(i.submit, function(e, t) {
                if (typeof t.handler == "function") return s = t.handler(r)
            }), s
        },
        disableElement: function(e) {
            e.data("ujs:enable-with", e.html()), e.html(e.data("disable-with")), e.bind("click.railsDisable", function(e) {
                return r.stopEverything(e)
            })
        },
        enableElement: function(e) {
            e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.data("ujs:enable-with", !1)), e.unbind("click.railsDisable")
        }
    }, r.fire(e(document), "rails:attachBindings") && (e.ajaxPrefilter(function(e, t, n) {
        e.crossDomain || r.CSRFProtection(n)
    }), e(document).delegate(r.linkDisableSelector, "ajax:complete", function() {
        r.enableElement(e(this))
    }), e(document).delegate(r.linkClickSelector, "click.rails", function(n) {
        var i = e(this),
            s = i.data("method"),
            o = i.data("params");
        if (!r.allowAction(i)) return r.stopEverything(n);
        i.is(r.linkDisableSelector) && r.disableElement(i);
        if (i.data("remote") !== t) {
            if ((n.metaKey || n.ctrlKey) && (!s || s === "GET") && !o) return !0;
            var u = r.handleRemote(i);
            return u === !1 ? r.enableElement(i) : u.error(function() {
                r.enableElement(i)
            }), !1
        }
        if (i.data("method")) return r.handleMethod(i), !1
    }), e(document).delegate(r.inputChangeSelector, "change.rails", function(t) {
        var n = e(this);
        return r.allowAction(n) ? (r.handleRemote(n), !1) : r.stopEverything(t)
    }), e(document).delegate(r.formSubmitSelector, "submit.rails", function(n) {
        var i = e(this),
            s = i.data("remote") !== t,
            o = r.blankInputs(i, r.requiredInputSelector),
            u = r.nonBlankInputs(i, r.fileInputSelector);
        if (!r.allowAction(i)) return r.stopEverything(n);
        if (o && i.attr("novalidate") == t && r.fire(i, "ajax:aborted:required", [o])) return r.stopEverything(n);
        if (s) {
            if (u) {
                setTimeout(function() {
                    r.disableFormElements(i)
                }, 13);
                var a = r.fire(i, "ajax:aborted:file", [u]);
                return a || setTimeout(function() {
                    r.enableFormElements(i)
                }, 13), a
            }
            return !e.support.submitBubbles && e().jquery < "1.7" && r.callFormSubmitBindings(i, n) === !1 ? r.stopEverything(n) : (r.handleRemote(i), !1)
        }
        setTimeout(function() {
            r.disableFormElements(i)
        }, 13)
    }), e(document).delegate(r.formInputClickSelector, "click.rails", function(t) {
        var n = e(this);
        if (!r.allowAction(n)) return r.stopEverything(t);
        var i = n.attr("name"),
            s = i ? {
                name: i,
                value: n.val()
            } : null;
        n.closest("form").data("ujs:submit-button", s)
    }), e(document).delegate(r.formSubmitSelector, "ajax:beforeSend.rails", function(t) {
        this == t.target && r.disableFormElements(e(this))
    }), e(document).delegate(r.formSubmitSelector, "ajax:complete.rails", function(t) {
        this == t.target && r.enableFormElements(e(this))
    }), e(function() {
        csrf_token = e("meta[name=csrf-token]").attr("content"), csrf_param = e("meta[name=csrf-param]").attr("content"), e('form input[name="' + csrf_param + '"]').val(csrf_token)
    }))
}(jQuery),
function() {
    var e = this,
        t = e._,
        n = {},
        r = Array.prototype,
        i = Object.prototype,
        s = Function.prototype,
        o = r.push,
        u = r.slice,
        a = r.concat,
        f = r.unshift,
        l = i.toString,
        c = i.hasOwnProperty,
        h = r.forEach,
        p = r.map,
        d = r.reduce,
        v = r.reduceRight,
        m = r.filter,
        g = r.every,
        y = r.some,
        b = r.indexOf,
        w = r.lastIndexOf,
        E = Array.isArray,
        S = Object.keys,
        x = s.bind,
        T = function(e) {
            if (e instanceof T) return e;
            if (!(this instanceof T)) return new T(e);
            this._wrapped = e
        };
    typeof exports != "undefined" ? (typeof module != "undefined" && module.exports && (exports = module.exports = T), exports._ = T) : e._ = T, T.VERSION = "1.4.2";
    var N = T.each = T.forEach = function(e, t, r) {
        if (e == null) return;
        if (h && e.forEach === h) e.forEach(t, r);
        else if (e.length === +e.length) {
            for (var i = 0, s = e.length; i < s; i++)
                if (t.call(r, e[i], i, e) === n) return
        } else
            for (var o in e)
                if (T.has(e, o) && t.call(r, e[o], o, e) === n) return
    };
    T.map = T.collect = function(e, t, n) {
        var r = [];
        return e == null ? r : p && e.map === p ? e.map(t, n) : (N(e, function(e, i, s) {
            r[r.length] = t.call(n, e, i, s)
        }), r)
    }, T.reduce = T.foldl = T.inject = function(e, t, n, r) {
        var i = arguments.length > 2;
        e == null && (e = []);
        if (d && e.reduce === d) return r && (t = T.bind(t, r)), i ? e.reduce(t, n) : e.reduce(t);
        N(e, function(e, s, o) {
            i ? n = t.call(r, n, e, s, o) : (n = e, i = !0)
        });
        if (!i) throw new TypeError("Reduce of empty array with no initial value");
        return n
    }, T.reduceRight = T.foldr = function(e, t, n, r) {
        var i = arguments.length > 2;
        e == null && (e = []);
        if (v && e.reduceRight === v) return r && (t = T.bind(t, r)), arguments.length > 2 ? e.reduceRight(t, n) : e.reduceRight(t);
        var s = e.length;
        if (s !== +s) {
            var o = T.keys(e);
            s = o.length
        }
        N(e, function(u, a, f) {
            a = o ? o[--s] : --s, i ? n = t.call(r, n, e[a], a, f) : (n = e[a], i = !0)
        });
        if (!i) throw new TypeError("Reduce of empty array with no initial value");
        return n
    }, T.find = T.detect = function(e, t, n) {
        var r;
        return C(e, function(e, i, s) {
            if (t.call(n, e, i, s)) return r = e, !0
        }), r
    }, T.filter = T.select = function(e, t, n) {
        var r = [];
        return e == null ? r : m && e.filter === m ? e.filter(t, n) : (N(e, function(e, i, s) {
            t.call(n, e, i, s) && (r[r.length] = e)
        }), r)
    }, T.reject = function(e, t, n) {
        var r = [];
        return e == null ? r : (N(e, function(e, i, s) {
            t.call(n, e, i, s) || (r[r.length] = e)
        }), r)
    }, T.every = T.all = function(e, t, r) {
        t || (t = T.identity);
        var i = !0;
        return e == null ? i : g && e.every === g ? e.every(t, r) : (N(e, function(e, s, o) {
            if (!(i = i && t.call(r, e, s, o))) return n
        }), !!i)
    };
    var C = T.some = T.any = function(e, t, r) {
        t || (t = T.identity);
        var i = !1;
        return e == null ? i : y && e.some === y ? e.some(t, r) : (N(e, function(e, s, o) {
            if (i || (i = t.call(r, e, s, o))) return n
        }), !!i)
    };
    T.contains = T.include = function(e, t) {
        var n = !1;
        return e == null ? n : b && e.indexOf === b ? e.indexOf(t) != -1 : (n = C(e, function(e) {
            return e === t
        }), n)
    }, T.invoke = function(e, t) {
        var n = u.call(arguments, 2);
        return T.map(e, function(e) {
            return (T.isFunction(t) ? t : e[t]).apply(e, n)
        })
    }, T.pluck = function(e, t) {
        return T.map(e, function(e) {
            return e[t]
        })
    }, T.where = function(e, t) {
        return T.isEmpty(t) ? [] : T.filter(e, function(e) {
            for (var n in t)
                if (t[n] !== e[n]) return !1;
            return !0
        })
    }, T.max = function(e, t, n) {
        if (!t && T.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.max.apply(Math, e);
        if (!t && T.isEmpty(e)) return -Infinity;
        var r = {
            computed: -Infinity
        };
        return N(e, function(e, i, s) {
            var o = t ? t.call(n, e, i, s) : e;
            o >= r.computed && (r = {
                value: e,
                computed: o
            })
        }), r.value
    }, T.min = function(e, t, n) {
        if (!t && T.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.min.apply(Math, e);
        if (!t && T.isEmpty(e)) return Infinity;
        var r = {
            computed: Infinity
        };
        return N(e, function(e, i, s) {
            var o = t ? t.call(n, e, i, s) : e;
            o < r.computed && (r = {
                value: e,
                computed: o
            })
        }), r.value
    }, T.shuffle = function(e) {
        var t, n = 0,
            r = [];
        return N(e, function(e) {
            t = T.random(n++), r[n - 1] = r[t], r[t] = e
        }), r
    };
    var k = function(e) {
        return T.isFunction(e) ? e : function(t) {
            return t[e]
        }
    };
    T.sortBy = function(e, t, n) {
        var r = k(t);
        return T.pluck(T.map(e, function(e, t, i) {
            return {
                value: e,
                index: t,
                criteria: r.call(n, e, t, i)
            }
        }).sort(function(e, t) {
            var n = e.criteria,
                r = t.criteria;
            if (n !== r) {
                if (n > r || n === void 0) return 1;
                if (n < r || r === void 0) return -1
            }
            return e.index < t.index ? -1 : 1
        }), "value")
    };
    var L = function(e, t, n, r) {
        var i = {},
            s = k(t);
        return N(e, function(t, o) {
            var u = s.call(n, t, o, e);
            r(i, u, t)
        }), i
    };
    T.groupBy = function(e, t, n) {
        return L(e, t, n, function(e, t, n) {
            (T.has(e, t) ? e[t] : e[t] = []).push(n)
        })
    }, T.countBy = function(e, t, n) {
        return L(e, t, n, function(e, t, n) {
            T.has(e, t) || (e[t] = 0), e[t] ++
        })
    }, T.sortedIndex = function(e, t, n, r) {
        n = n == null ? T.identity : k(n);
        var i = n.call(r, t),
            s = 0,
            o = e.length;
        while (s < o) {
            var u = s + o >>> 1;
            n.call(r, e[u]) < i ? s = u + 1 : o = u
        }
        return s
    }, T.toArray = function(e) {
        return e ? e.length === +e.length ? u.call(e) : T.values(e) : []
    }, T.size = function(e) {
        return e.length === +e.length ? e.length : T.keys(e).length
    }, T.first = T.head = T.take = function(e, t, n) {
        return t != null && !n ? u.call(e, 0, t) : e[0]
    }, T.initial = function(e, t, n) {
        return u.call(e, 0, e.length - (t == null || n ? 1 : t))
    }, T.last = function(e, t, n) {
        return t != null && !n ? u.call(e, Math.max(e.length - t, 0)) : e[e.length - 1]
    }, T.rest = T.tail = T.drop = function(e, t, n) {
        return u.call(e, t == null || n ? 1 : t)
    }, T.compact = function(e) {
        return T.filter(e, function(e) {
            return !!e
        })
    };
    var A = function(e, t, n) {
        return N(e, function(e) {
            T.isArray(e) ? t ? o.apply(n, e) : A(e, t, n) : n.push(e)
        }), n
    };
    T.flatten = function(e, t) {
        return A(e, t, [])
    }, T.without = function(e) {
        return T.difference(e, u.call(arguments, 1))
    }, T.uniq = T.unique = function(e, t, n, r) {
        var i = n ? T.map(e, n, r) : e,
            s = [],
            o = [];
        return N(i, function(n, r) {
            if (t ? !r || o[o.length - 1] !== n : !T.contains(o, n)) o.push(n), s.push(e[r])
        }), s
    }, T.union = function() {
        return T.uniq(a.apply(r, arguments))
    }, T.intersection = function(e) {
        var t = u.call(arguments, 1);
        return T.filter(T.uniq(e), function(e) {
            return T.every(t, function(t) {
                return T.indexOf(t, e) >= 0
            })
        })
    }, T.difference = function(e) {
        var t = a.apply(r, u.call(arguments, 1));
        return T.filter(e, function(e) {
            return !T.contains(t, e)
        })
    }, T.zip = function() {
        var e = u.call(arguments),
            t = T.max(T.pluck(e, "length")),
            n = new Array(t);
        for (var r = 0; r < t; r++) n[r] = T.pluck(e, "" + r);
        return n
    }, T.object = function(e, t) {
        var n = {};
        for (var r = 0, i = e.length; r < i; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
        return n
    }, T.indexOf = function(e, t, n) {
        if (e == null) return -1;
        var r = 0,
            i = e.length;
        if (n) {
            if (typeof n != "number") return r = T.sortedIndex(e, t), e[r] === t ? r : -1;
            r = n < 0 ? Math.max(0, i + n) : n
        }
        if (b && e.indexOf === b) return e.indexOf(t, n);
        for (; r < i; r++)
            if (e[r] === t) return r;
        return -1
    }, T.lastIndexOf = function(e, t, n) {
        if (e == null) return -1;
        var r = n != null;
        if (w && e.lastIndexOf === w) return r ? e.lastIndexOf(t, n) : e.lastIndexOf(t);
        var i = r ? n : e.length;
        while (i--)
            if (e[i] === t) return i;
        return -1
    }, T.range = function(e, t, n) {
        arguments.length <= 1 && (t = e || 0, e = 0), n = arguments[2] || 1;
        var r = Math.max(Math.ceil((t - e) / n), 0),
            i = 0,
            s = new Array(r);
        while (i < r) s[i++] = e, e += n;
        return s
    };
    var O = function() {};
    T.bind = function(e, t) {
        var n, r;
        if (e.bind === x && x) return x.apply(e, u.call(arguments, 1));
        if (!T.isFunction(e)) throw new TypeError;
        return r = u.call(arguments, 2), n = function() {
            if (this instanceof n) {
                O.prototype = e.prototype;
                var i = new O,
                    s = e.apply(i, r.concat(u.call(arguments)));
                return Object(s) === s ? s : i
            }
            return e.apply(t, r.concat(u.call(arguments)))
        }
    }, T.bindAll = function(e) {
        var t = u.call(arguments, 1);
        return t.length == 0 && (t = T.functions(e)), N(t, function(t) {
            e[t] = T.bind(e[t], e)
        }), e
    }, T.memoize = function(e, t) {
        var n = {};
        return t || (t = T.identity),
            function() {
                var r = t.apply(this, arguments);
                return T.has(n, r) ? n[r] : n[r] = e.apply(this, arguments)
            }
    }, T.delay = function(e, t) {
        var n = u.call(arguments, 2);
        return setTimeout(function() {
            return e.apply(null, n)
        }, t)
    }, T.defer = function(e) {
        return T.delay.apply(T, [e, 1].concat(u.call(arguments, 1)))
    }, T.throttle = function(e, t) {
        var n, r, i, s, o, u, a = T.debounce(function() {
            o = s = !1
        }, t);
        return function() {
            n = this, r = arguments;
            var f = function() {
                i = null, o && (u = e.apply(n, r)), a()
            };
            return i || (i = setTimeout(f, t)), s ? o = !0 : (s = !0, u = e.apply(n, r)), a(), u
        }
    }, T.debounce = function(e, t, n) {
        var r, i;
        return function() {
            var s = this,
                o = arguments,
                u = function() {
                    r = null, n || (i = e.apply(s, o))
                },
                a = n && !r;
            return clearTimeout(r), r = setTimeout(u, t), a && (i = e.apply(s, o)), i
        }
    }, T.once = function(e) {
        var t = !1,
            n;
        return function() {
            return t ? n : (t = !0, n = e.apply(this, arguments), e = null, n)
        }
    }, T.wrap = function(e, t) {
        return function() {
            var n = [e];
            return o.apply(n, arguments), t.apply(this, n)
        }
    }, T.compose = function() {
        var e = arguments;
        return function() {
            var t = arguments;
            for (var n = e.length - 1; n >= 0; n--) t = [e[n].apply(this, t)];
            return t[0]
        }
    }, T.after = function(e, t) {
        return e <= 0 ? t() : function() {
            if (--e < 1) return t.apply(this, arguments)
        }
    }, T.keys = S || function(e) {
        if (e !== Object(e)) throw new TypeError("Invalid object");
        var t = [];
        for (var n in e) T.has(e, n) && (t[t.length] = n);
        return t
    }, T.values = function(e) {
        var t = [];
        for (var n in e) T.has(e, n) && t.push(e[n]);
        return t
    }, T.pairs = function(e) {
        var t = [];
        for (var n in e) T.has(e, n) && t.push([n, e[n]]);
        return t
    }, T.invert = function(e) {
        var t = {};
        for (var n in e) T.has(e, n) && (t[e[n]] = n);
        return t
    }, T.functions = T.methods = function(e) {
        var t = [];
        for (var n in e) T.isFunction(e[n]) && t.push(n);
        return t.sort()
    }, T.extend = function(e) {
        return N(u.call(arguments, 1), function(t) {
            for (var n in t) e[n] = t[n]
        }), e
    }, T.pick = function(e) {
        var t = {},
            n = a.apply(r, u.call(arguments, 1));
        return N(n, function(n) {
            n in e && (t[n] = e[n])
        }), t
    }, T.omit = function(e) {
        var t = {},
            n = a.apply(r, u.call(arguments, 1));
        for (var i in e) T.contains(n, i) || (t[i] = e[i]);
        return t
    }, T.defaults = function(e) {
        return N(u.call(arguments, 1), function(t) {
            for (var n in t) e[n] == null && (e[n] = t[n])
        }), e
    }, T.clone = function(e) {
        return T.isObject(e) ? T.isArray(e) ? e.slice() : T.extend({}, e) : e
    }, T.tap = function(e, t) {
        return t(e), e
    };
    var M = function(e, t, n, r) {
        if (e === t) return e !== 0 || 1 / e == 1 / t;
        if (e == null || t == null) return e === t;
        e instanceof T && (e = e._wrapped), t instanceof T && (t = t._wrapped);
        var i = l.call(e);
        if (i != l.call(t)) return !1;
        switch (i) {
            case "[object String]":
                return e == String(t);
            case "[object Number]":
                return e != +e ? t != +t : e == 0 ? 1 / e == 1 / t : e == +t;
            case "[object Date]":
            case "[object Boolean]":
                return +e == +t;
            case "[object RegExp]":
                return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
        }
        if (typeof e != "object" || typeof t != "object") return !1;
        var s = n.length;
        while (s--)
            if (n[s] == e) return r[s] == t;
        n.push(e), r.push(t);
        var o = 0,
            u = !0;
        if (i == "[object Array]") {
            o = e.length, u = o == t.length;
            if (u)
                while (o--)
                    if (!(u = M(e[o], t[o], n, r))) break
        } else {
            var a = e.constructor,
                f = t.constructor;
            if (a !== f && !(T.isFunction(a) && a instanceof a && T.isFunction(f) && f instanceof f)) return !1;
            for (var c in e)
                if (T.has(e, c)) {
                    o++;
                    if (!(u = T.has(t, c) && M(e[c], t[c], n, r))) break
                }
            if (u) {
                for (c in t)
                    if (T.has(t, c) && !(o--)) break;
                u = !o
            }
        }
        return n.pop(), r.pop(), u
    };
    T.isEqual = function(e, t) {
        return M(e, t, [], [])
    }, T.isEmpty = function(e) {
        if (e == null) return !0;
        if (T.isArray(e) || T.isString(e)) return e.length === 0;
        for (var t in e)
            if (T.has(e, t)) return !1;
        return !0
    }, T.isElement = function(e) {
        return !!e && e.nodeType === 1
    }, T.isArray = E || function(e) {
        return l.call(e) == "[object Array]"
    }, T.isObject = function(e) {
        return e === Object(e)
    }, N(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(e) {
        T["is" + e] = function(t) {
            return l.call(t) == "[object " + e + "]"
        }
    }), T.isArguments(arguments) || (T.isArguments = function(e) {
        return !!e && !!T.has(e, "callee")
    }), typeof /./ != "function" && (T.isFunction = function(e) {
        return typeof e == "function"
    }), T.isFinite = function(e) {
        return T.isNumber(e) && isFinite(e)
    }, T.isNaN = function(e) {
        return T.isNumber(e) && e != +e
    }, T.isBoolean = function(e) {
        return e === !0 || e === !1 || l.call(e) == "[object Boolean]"
    }, T.isNull = function(e) {
        return e === null
    }, T.isUndefined = function(e) {
        return e === void 0
    }, T.has = function(e, t) {
        return c.call(e, t)
    }, T.noConflict = function() {
        return e._ = t, this
    }, T.identity = function(e) {
        return e
    }, T.times = function(e, t, n) {
        for (var r = 0; r < e; r++) t.call(n, r)
    }, T.random = function(e, t) {
        return t == null && (t = e, e = 0), e + (0 | Math.random() * (t - e + 1))
    };
    var _ = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "/": "&#x2F;"
        }
    };
    _.unescape = T.invert(_.escape);
    var D = {
        escape: new RegExp("[" + T.keys(_.escape).join("") + "]", "g"),
        unescape: new RegExp("(" + T.keys(_.unescape).join("|") + ")", "g")
    };
    T.each(["escape", "unescape"], function(e) {
        T[e] = function(t) {
            return t == null ? "" : ("" + t).replace(D[e], function(t) {
                return _[e][t]
            })
        }
    }), T.result = function(e, t) {
        if (e == null) return null;
        var n = e[t];
        return T.isFunction(n) ? n.call(e) : n
    }, T.mixin = function(e) {
        N(T.functions(e), function(t) {
            var n = T[t] = e[t];
            T.prototype[t] = function() {
                var e = [this._wrapped];
                return o.apply(e, arguments), F.call(this, n.apply(T, e))
            }
        })
    };
    var P = 0;
    T.uniqueId = function(e) {
        var t = P++;
        return e ? e + t : t
    }, T.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var H = /(.)^/,
        B = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "	": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        j = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    T.template = function(e, t, n) {
        n = T.defaults({}, n, T.templateSettings);
        var r = new RegExp([(n.escape || H).source, (n.interpolate || H).source, (n.evaluate || H).source].join("|") + "|$", "g"),
            i = 0,
            s = "__p+='";
        e.replace(r, function(t, n, r, o, u) {
            s += e.slice(i, u).replace(j, function(e) {
                return "\\" + B[e]
            }), s += n ? "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : o ? "';\n" + o + "\n__p+='" : "", i = u + t.length
        }), s += "';\n", n.variable || (s = "with(obj||{}){\n" + s + "}\n"), s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n";
        try {
            var o = new Function(n.variable || "obj", "_", s)
        } catch (u) {
            throw u.source = s, u
        }
        if (t) return o(t, T);
        var a = function(e) {
            return o.call(this, e, T)
        };
        return a.source = "function(" + (n.variable || "obj") + "){\n" + s + "}", a
    }, T.chain = function(e) {
        return T(e).chain()
    };
    var F = function(e) {
        return this._chain ? T(e).chain() : e
    };
    T.mixin(T), N(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
        var t = r[e];
        T.prototype[e] = function() {
            var n = this._wrapped;
            return t.apply(n, arguments), (e == "shift" || e == "splice") && n.length === 0 && delete n[0], F.call(this, n)
        }
    }), N(["concat", "join", "slice"], function(e) {
        var t = r[e];
        T.prototype[e] = function() {
            return F.call(this, t.apply(this._wrapped, arguments))
        }
    }), T.extend(T.prototype, {
        chain: function() {
            return this._chain = !0, this
        },
        value: function() {
            return this._wrapped
        }
    })
}.call(this),
    function(e, t, n) {
        "use strict";

        function r(n) {
            tt = this, n = n || {}, at = n.constants || {};
            if (n.easing)
                for (var r in n.easing) I[r] = n.easing[r];
            rt = {
                beforerender: n.beforerender,
                render: n.render
            }, it = n.forceHeight !== !1, pt = n.smoothScrolling !== !1, dt = {
                targetTop: tt.getScrollTop()
            }, it && (ut = n.scale || 1), Q(o, [c], [h]);
            if (it) {
                var s = t.getElementById("skrollr-body") || t.createElement("div"),
                    a = s.style;
                a.minWidth = "1px", a.position = "absolute", a.top = a.zIndex = "0", s.id || (a.width = "1px", a.right = "0", u.appendChild(s)), ot = function() {
                    st = 0, q(), a.height = "1700px", i.iscroll && e.setTimeout(function() {
                        i.iscroll.refresh()
                    }, 0)
                }
            } else ot = function() {
                st = u.scrollHeight - o.clientHeight, q(), vt = !0, i.iscroll && e.setTimeout(function() {
                    i.iscroll.refresh()
                }, 0)
            };
            return tt.refresh(), K("resize", ot),
                function f() {
                    x(f), U()
                }(), tt
        }
        var i = e.skrollr = {
                get: function() {
                    return tt
                },
                init: function(e) {
                    return tt || new r(e)
                },
                VERSION: "0.5.5"
            },
            s = Object.prototype.hasOwnProperty,
            o = t.documentElement,
            u = t.body,
            a = "rendered",
            f = "un" + a,
            l = "skrollable",
            c = "skrollr",
            h = "no-" + c,
            p = "linear",
            d = 1e3,
            v = 200,
            m = "start",
            g = "end",
            y = "top",
            b = "center",
            w = "bottom",
            E = "___has_rendered_class",
            S = "___skrollable_id",
            x = e.requestAnimationFrame;
        (function() {
            var t = ["ms", "moz", "webkit", "o"],
                n;
            for (n = 0; n < t.length && !x; n++) x = e[t[n] + "RequestAnimationFrame"];
            var r = 0;
            x || (x = function(t) {
                var n = Z(),
                    i = Math.max(0, 30 - (n - r));
                e.setTimeout(function() {
                    t(n + i)
                }, i), r = n + i
            })
        })();
        var T = /^\s*(.+)\s*$/m,
            N = /^data(?:-(_\w+))?(?:-?(-?\d+))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,
            C = /\s*([a-z\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,
            k = /^([a-z\-]+)\[(\w+)\]$/,
            L = /-([a-z])/g,
            A = function(e, t) {
                return t.toUpperCase()
            },
            O = /[\-+]?[\d]*\.?[\d]+/g,
            M = /\{\?\}/g,
            _ = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,
            D = /[a-z\-]+-gradient/g,
            P = /^O|Moz|webkit|ms/,
            H, B;
        if (e.getComputedStyle) {
            var j = e.getComputedStyle(u, null);
            for (var F in j) {
                H = F.match(P) || +F == F && j[F].match(P);
                if (H) break
            }
        }
        H = (H || [""])[0], B = "-" + H.toLowerCase() + "-", P = n;
        var I = {
            begin: function() {
                return 0
            },
            end: function() {
                return 1
            },
            linear: function(e) {
                return e
            },
            quadratic: function(e) {
                return e * e
            },
            cubic: function(e) {
                return e * e * e
            },
            swing: function(e) {
                return -Math.cos(e * Math.PI) / 2 + .5
            },
            sqrt: function(e) {
                return Math.sqrt(e)
            },
            bounce: function(e) {
                var t;
                if (e <= .5083) t = 3;
                else if (e <= .8489) t = 9;
                else if (e <= .96208) t = 27;
                else {
                    if (!(e <= .99981)) return 1;
                    t = 91
                }
                return 1 - Math.abs(3 * Math.cos(e * t * 1.028) / t)
            }
        };
        r.prototype.refresh = function(e) {
            var r, i = !1;
            e === n ? (i = !0, nt = [], mt = 0, e = t.getElementsByTagName("*")) : e = [].concat(e);
            for (r = 0; r < e.length; r++) {
                var s = e[r],
                    o = s,
                    u = [],
                    c = pt;
                if (!s.attributes) continue;
                for (var h = 0; h < s.attributes.length; h++) {
                    var p = s.attributes[h];
                    if (p.name === "data-anchor-target") {
                        o = t.querySelector(p.value);
                        if (o === null) throw 'Unable to find anchor target "' + p.value + '"';
                        continue
                    }
                    if (p.name === "data-smooth-scrolling") {
                        c = p.value !== "off";
                        continue
                    }
                    var d = p.name.match(N);
                    if (d !== null) {
                        var v = d[1];
                        v = v && at[v.substr(1)] || 0;
                        var y = (d[2] | 0) + v,
                            b = d[3],
                            w = d[4] || b,
                            E = {
                                offset: y,
                                props: p.value,
                                element: s
                            };
                        u.push(E), !b || b === m || b === g ? (E.mode = "absolute", b === g ? E.isEnd = !0 : (E.frame = y * ut, delete E.offset)) : (E.mode = "relative", E.anchors = [b, w])
                    }
                }
                if (u.length) {
                    var x, T, C;
                    !i && S in s ? (C = s[S], x = nt[C].styleAttr, T = nt[C].classAttr) : (C = s[S] = mt++, x = s.style.cssText, T = s.className), nt[C] = {
                        element: s,
                        styleAttr: x,
                        classAttr: T,
                        anchorTarget: o,
                        keyFrames: u,
                        smoothScrolling: c
                    }, Q(s, [l, f], [a])
                }
            }
            ot();
            for (r = 0; r < e.length; r++) {
                var k = nt[e[r][S]];
                if (k === n) continue;
                k.keyFrames.sort(et), z(k), X(k)
            }
            return tt
        }, r.prototype.relativeToAbsolute = function(e, t, n) {
            var r = o.clientHeight,
                i = e.getBoundingClientRect(),
                s = i.top,
                u = i.bottom - i.top;
            return t === w ? s -= r : t === b && (s -= r / 2), n === w ? s += u : n === b && (s += u / 2), s += tt.getScrollTop(), s + .5 | 0
        }, r.prototype.animateTo = function(e, t) {
            t = t || {};
            var r = Z(),
                i = tt.getScrollTop();
            return ht = {
                startTop: i,
                topDiff: e - i,
                targetTop: e,
                duration: t.duration || d,
                startTime: r,
                endTime: r + (t.duration || d),
                easing: I[t.easing || p],
                done: t.done
            }, ht.topDiff || (ht.done && ht.done.call(tt, !1), ht = n), tt
        }, r.prototype.stopAnimateTo = function() {
            ht && ht.done && ht.done.call(tt, !0), ht = n
        }, r.prototype.isAnimatingTo = function() {
            return !!ht
        }, r.prototype.setScrollTop = function(t) {
            return i.iscroll ? i.iscroll.scrollTo(0, -t) : e.scrollTo(0, t), tt
        }, r.prototype.getScrollTop = function() {
            return i.iscroll ? -i.iscroll.y : e.pageYOffset || o.scrollTop || u.scrollTop || 0
        }, r.prototype.on = function(e, t) {
            return rt[e] = t, tt
        }, r.prototype.off = function(e) {
            return delete rt[e], tt
        };
        var q = function() {
                var e, t, n, r, i, s, o, u, a;
                for (s = 0; s < nt.length; s++) {
                    e = nt[s], t = e.element, n = e.anchorTarget, r = e.keyFrames;
                    for (o = 0; o < r.length; o++) i = r[o], i.mode === "relative" && (u = t.style.cssText, a = t.className, t.style.cssText = e.styleAttr, t.className = e.classAttr, i.frame = tt.relativeToAbsolute(n, i.anchors[0], i.anchors[1]) - i.offset, t.style.cssText = u, t.className = a), it && !i.isEnd && i.frame > st && (st = i.frame)
                }
                for (s = 0; s < nt.length; s++) {
                    e = nt[s], r = e.keyFrames;
                    for (o = 0; o < r.length; o++) i = r[o], i.isEnd && (i.frame = st - i.offset)
                }
            },
            R = function(e, t) {
                for (var n = 0; n < nt.length; n++) {
                    var r = nt[n],
                        o = r.smoothScrolling ? e : t,
                        u = r.keyFrames,
                        l = u[0].frame,
                        c = u[u.length - 1].frame,
                        h = o <= l,
                        p = o >= c,
                        d, v;
                    if (h || p) {
                        var m = u[h ? 0 : u.length - 1].props;
                        for (d in m) s.call(m, d) && (v = J(m[d].value), i.setStyle(r.element, d, v));
                        r[E] && (o < l || o > c) && (Q(r.element, [f], [a]), r[E] = !1);
                        continue
                    }
                    r[E] || (Q(r.element, [a], [f]), r[E] = !0);
                    for (var g = 0; g < u.length - 1; g++)
                        if (o >= u[g].frame && o <= u[g + 1].frame) {
                            var y = u[g],
                                b = u[g + 1];
                            for (d in y.props)
                                if (s.call(y.props, d)) {
                                    var w = (o - y.frame) / (b.frame - y.frame);
                                    w = y.props[d].easing(w), v = $(y.props[d].value, b.props[d].value, w), v = J(v), i.setStyle(r.element, d, v)
                                }
                            break
                        }
                }
            },
            U = function() {
                var e = tt.getScrollTop(),
                    t, r = Z(),
                    i;
                if (ht) r >= ht.endTime ? (e = ht.targetTop, t = ht.done, ht = n) : (i = ht.easing((r - ht.startTime) / ht.duration), e = ht.startTop + i * ht.topDiff | 0), tt.setScrollTop(e);
                else {
                    var s = dt.targetTop - e;
                    s && (dt = {
                        startTop: lt,
                        topDiff: e - lt,
                        targetTop: e,
                        startTime: ct,
                        endTime: ct + v
                    }), r <= dt.endTime && (i = I.sqrt((r - dt.startTime) / v), e = dt.startTop + i * dt.topDiff | 0)
                }
                e < 0 && (e = 0);
                if (vt || lt !== e) {
                    ft = e >= lt ? "down" : "up", vt = !1;
                    var o = {
                            curTop: e,
                            lastTop: lt,
                            maxTop: st,
                            direction: ft
                        },
                        u = rt.beforerender && rt.beforerender.call(tt, o);
                    u !== !1 && (R(e, tt.getScrollTop()), lt = e, rt.render && rt.render.call(tt, o)), t && t.call(tt, !1)
                }
                ct = r
            },
            z = function(e) {
                for (var t = 0; t < e.keyFrames.length; t++) {
                    var n = e.keyFrames[t],
                        r, i, s, o = {},
                        u;
                    while ((u = C.exec(n.props)) !== null) s = u[1], i = u[2], r = s.match(k), r !== null ? (s = r[1], r = r[2]) : r = p, i = i.indexOf("!") ? W(i) : [i.slice(1)], o[s] = {
                        value: i,
                        easing: I[r]
                    };
                    n.props = o
                }
            },
            W = function(e) {
                var t = [];
                return _.lastIndex = 0, e = e.replace(_, function(e) {
                    return e.replace(O, function(e) {
                        return e / 255 * 100 + "%"
                    })
                }), D.lastIndex = 0, e = e.replace(D, function(e) {
                    return B + e
                }), e = e.replace(O, function(e) {
                    return t.push(+e), "{?}"
                }), t.unshift(e), t
            },
            X = function(e) {
                var t = {},
                    n;
                for (n = 0; n < e.keyFrames.length; n++) V(e.keyFrames[n], t);
                t = {};
                for (n = e.keyFrames.length - 1; n >= 0; n--) V(e.keyFrames[n], t)
            },
            V = function(e, t) {
                var n;
                for (n in t) s.call(e.props, n) || (e.props[n] = t[n]);
                for (n in e.props) t[n] = e.props[n]
            },
            $ = function(e, t, n) {
                if (e.length !== t.length) throw "Can't interpolate between \"" + e[0] + '" and "' + t[0] + '"';
                var r = [e[0]];
                for (var i = 1; i < e.length; i++) r[i] = e[i] + (t[i] - e[i]) * n;
                return r
            },
            J = function(e) {
                var t = 1;
                return M.lastIndex = 0, e[0].replace(M, function() {
                    return e[t++]
                })
            };
        i.setStyle = function(e, t, n) {
            var r = e.style;
            t = t.replace(L, A).replace("-", "");
            if (t === "zIndex") r[t] = "" + (n | 0);
            else if (t === "float") r.styleFloat = r.cssFloat = n;
            else try {
                r[H + t.slice(0, 1).toUpperCase() + t.slice(1)] = n, r[t] = n
            } catch (i) {}
        };
        var K = function(t, n) {
                e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent("on" + t, n)
            },
            Q = function(t, n, r) {
                var i = "className";
                e.SVGElement && t instanceof e.SVGElement && (t = t[i], i = "baseVal");
                var s = t[i];
                for (var o = 0; o < n.length; o++) Y(s).indexOf(Y(n[o])) === -1 && (s += " " + n[o]);
                for (var u = 0; u < r.length; u++) s = Y(s).replace(Y(r[u]), " ");
                t[i] = G(s)
            },
            G = function(e) {
                return e.replace(T, "$1")
            },
            Y = function(e) {
                return " " + e + " "
            },
            Z = Date.now || function() {
                return +(new Date)
            },
            et = function(e, t) {
                return e.frame - t.frame
            },
            tt, nt, rt, it, st = 0,
            ot, ut = 1,
            at, ft = "down",
            lt = -1,
            ct = Z(),
            ht, pt, dt, vt, mt = 0
    }(window, document), ! function(e) {
        "use strict";
        var t = function(e, t) {
            this.init("tooltip", e, t)
        };
        t.prototype = {
            constructor: t,
            init: function(t, n, r) {
                var i, s;
                this.type = t, this.$element = e(n), this.options = this.getOptions(r), this.enabled = !0, this.options.trigger != "manual" && (i = this.options.trigger == "hover" ? "mouseenter" : "focus", s = this.options.trigger == "hover" ? "mouseleave" : "blur", this.$element.on(i, this.options.selector, e.proxy(this.enter, this)), this.$element.on(s, this.options.selector, e.proxy(this.leave, this))), this.options.selector ? this._options = e.extend({}, this.options, {
                    trigger: "manual",
                    selector: ""
                }) : this.fixTitle()
            },
            getOptions: function(t) {
                return t = e.extend({}, e.fn[this.type].defaults, t, this.$element.data()), t.delay && typeof t.delay == "number" && (t.delay = {
                    show: t.delay,
                    hide: t.delay
                }), t
            },
            enter: function(t) {
                var n = e(t.currentTarget)[this.type](this._options).data(this.type);
                if (!n.options.delay || !n.options.delay.show) return n.show();
                clearTimeout(this.timeout), n.hoverState = "in", this.timeout = setTimeout(function() {
                    n.hoverState == "in" && n.show()
                }, n.options.delay.show)
            },
            leave: function(t) {
                var n = e(t.currentTarget)[this.type](this._options).data(this.type);
                this.timeout && clearTimeout(this.timeout);
                if (!n.options.delay || !n.options.delay.hide) return n.hide();
                n.hoverState = "out", this.timeout = setTimeout(function() {
                    n.hoverState == "out" && n.hide()
                }, n.options.delay.hide)
            },
            show: function() {
                var e, t, n, r, i, s, o;
                if (this.hasContent() && this.enabled) {
                    e = this.tip(), this.setContent(), this.options.animation && e.addClass("fade"), s = typeof this.options.placement == "function" ? this.options.placement.call(this, e[0], this.$element[0]) : this.options.placement, t = /in/.test(s), e.remove().css({
                        top: 0,
                        left: 0,
                        display: "block"
                    }).appendTo(t ? this.$element : document.body), n = this.getPosition(t), r = e[0].offsetWidth, i = e[0].offsetHeight;
                    switch (t ? s.split(" ")[1] : s) {
                        case "bottom":
                            o = {
                                top: n.top + n.height,
                                left: n.left + n.width / 2 - r / 2
                            };
                            break;
                        case "top":
                            o = {
                                top: n.top - i,
                                left: n.left + n.width / 2 - r / 2
                            };
                            break;
                        case "left":
                            o = {
                                top: n.top + n.height / 2 - i / 2,
                                left: n.left - r
                            };
                            break;
                        case "right":
                            o = {
                                top: n.top + n.height / 2 - i / 2,
                                left: n.left + n.width
                            }
                    }
                    e.css(o).addClass(s).addClass("in")
                }
            },
            isHTML: function(e) {
                return typeof e != "string" || e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3 || /^(?:[^<]*<[\w\W]+>[^>]*$)/.exec(e)
            },
            setContent: function() {
                var e = this.tip(),
                    t = this.getTitle();
                e.find(".tooltip-inner")[this.isHTML(t) ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
            },
            hide: function() {
                function r() {
                    var t = setTimeout(function() {
                        n.off(e.support.transition.end).remove()
                    }, 500);
                    n.one(e.support.transition.end, function() {
                        clearTimeout(t), n.remove()
                    })
                }
                var t = this,
                    n = this.tip();
                n.removeClass("in"), e.support.transition && this.$tip.hasClass("fade") ? r() : n.remove()
            },
            fixTitle: function() {
                var e = this.$element;
                (e.attr("title") || typeof e.attr("data-original-title") != "string") && e.attr("data-original-title", e.attr("title") || "").removeAttr("title")
            },
            hasContent: function() {
                return this.getTitle()
            },
            getPosition: function(t) {
                return e.extend({}, t ? {
                    top: 0,
                    left: 0
                } : this.$element.offset(), {
                    width: this.$element[0].offsetWidth,
                    height: this.$element[0].offsetHeight
                })
            },
            getTitle: function() {
                var e, t = this.$element,
                    n = this.options;
                return e = t.attr("data-original-title") || (typeof n.title == "function" ? n.title.call(t[0]) : n.title), e
            },
            tip: function() {
                return this.$tip = this.$tip || e(this.options.template)
            },
            validate: function() {
                this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
            },
            enable: function() {
                this.enabled = !0
            },
            disable: function() {
                this.enabled = !1
            },
            toggleEnabled: function() {
                this.enabled = !this.enabled
            },
            toggle: function() {
                this[this.tip().hasClass("in") ? "hide" : "show"]()
            }
        }, e.fn.tooltip = function(n) {
            return this.each(function() {
                var r = e(this),
                    i = r.data("tooltip"),
                    s = typeof n == "object" && n;
                i || r.data("tooltip", i = new t(this, s)), typeof n == "string" && i[n]()
            })
        }, e.fn.tooltip.Constructor = t, e.fn.tooltip.defaults = {
            animation: !0,
            placement: "top",
            selector: !1,
            template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover",
            title: "",
            delay: 0
        }
    }(window.jQuery), ! function(e) {
        "use strict";
        var t = function(e, t) {
            this.init("popover", e, t)
        };
        t.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype, {
            constructor: t,
            setContent: function() {
                var e = this.tip(),
                    t = this.getTitle(),
                    n = this.getContent();
                e.find(".popover-title")[this.isHTML(t) ? "html" : "text"](t), e.find(".popover-content > *")[this.isHTML(n) ? "html" : "text"](n), e.removeClass("fade top bottom left right in")
            },
            hasContent: function() {
                return this.getTitle() || this.getContent()
            },
            getContent: function() {
                var e, t = this.$element,
                    n = this.options;
                return e = t.attr("data-content") || (typeof n.content == "function" ? n.content.call(t[0]) : n.content), e
            },
            tip: function() {
                return this.$tip || (this.$tip = e(this.options.template)), this.$tip
            }
        }), e.fn.popover = function(n) {
            return this.each(function() {
                var r = e(this),
                    i = r.data("popover"),
                    s = typeof n == "object" && n;
                i || r.data("popover", i = new t(this, s)), typeof n == "string" && i[n]()
            })
        }, e.fn.popover.Constructor = t, e.fn.popover.defaults = e.extend({}, e.fn.tooltip.defaults, {
            placement: "right",
            content: "",
            template: '<div class="popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>'
        })
    }(window.jQuery),
    function(e) {
        var t = function() {
            var t = {},
                n = {
                    years: "datepickerViewYears",
                    moths: "datepickerViewMonths",
                    days: "datepickerViewDays"
                },
                r = {
                    wrapper: '<div class="datepicker"><a class="next_month" href="#" /><a class="prev_month" href="#" /><div class="datepickerBorderT" /><div class="datepickerBorderB" /><div class="datepickerBorderL" /><div class="datepickerBorderR" /><div class="datepickerBorderTL" /><div class="datepickerBorderTR" /><div class="datepickerBorderBL" /><div class="datepickerBorderBR" /><div class="datepickerContainer"><table cellspacing="0" cellpadding="0"><tbody><tr></tr></tbody></table></div></div>',
                    head: ["<td>", '<table cellspacing="0" cellpadding="0">', "<thead>", "<tr>", '<th class="datepickerGoPrev"><a href="#"><span><%=prev%></span></a></th>', '<th colspan="7" class="datepickerMonth"><a href="#"><span></span></a></th>', '<th class="datepickerGoNext"><a href="#"><span><%=next%></span></a></th>', "</tr>", '<tr class="datepickerDoW">', '<th class="datepickerWeekHeader"><span><%=week%></span></th>', "<th><span><%=day1%></span></th>", "<th><span><%=day2%></span></th>", "<th><span><%=day3%></span></th>", "<th><span><%=day4%></span></th>", "<th><span><%=day5%></span></th>", "<th><span><%=day6%></span></th>", "<th><span><%=day7%></span></th>", "</tr>", "</thead>", "</table></td>"],
                    space: '<td class="datepickerSpace"><div></div></td>',
                    days: ['<tbody class="datepickerDays">', "<tr>", '<th class="datepickerWeek"><a href="#"><span><%=weeks[0].week%></span></a></th>', '<td class="<%=weeks[0].days[0].classname%>"><a href="#"><span><%=weeks[0].days[0].text%></span></a></td>', '<td class="<%=weeks[0].days[1].classname%>"><a href="#"><span><%=weeks[0].days[1].text%></span></a></td>', '<td class="<%=weeks[0].days[2].classname%>"><a href="#"><span><%=weeks[0].days[2].text%></span></a></td>', '<td class="<%=weeks[0].days[3].classname%>"><a href="#"><span><%=weeks[0].days[3].text%></span></a></td>', '<td class="<%=weeks[0].days[4].classname%>"><a href="#"><span><%=weeks[0].days[4].text%></span></a></td>', '<td class="<%=weeks[0].days[5].classname%>"><a href="#"><span><%=weeks[0].days[5].text%></span></a></td>', '<td class="<%=weeks[0].days[6].classname%>"><a href="#"><span><%=weeks[0].days[6].text%></span></a></td>', "</tr>", "<tr>", '<th class="datepickerWeek"><a href="#"><span><%=weeks[1].week%></span></a></th>', '<td class="<%=weeks[1].days[0].classname%>"><a href="#"><span><%=weeks[1].days[0].text%></span></a></td>', '<td class="<%=weeks[1].days[1].classname%>"><a href="#"><span><%=weeks[1].days[1].text%></span></a></td>', '<td class="<%=weeks[1].days[2].classname%>"><a href="#"><span><%=weeks[1].days[2].text%></span></a></td>', '<td class="<%=weeks[1].days[3].classname%>"><a href="#"><span><%=weeks[1].days[3].text%></span></a></td>', '<td class="<%=weeks[1].days[4].classname%>"><a href="#"><span><%=weeks[1].days[4].text%></span></a></td>', '<td class="<%=weeks[1].days[5].classname%>"><a href="#"><span><%=weeks[1].days[5].text%></span></a></td>', '<td class="<%=weeks[1].days[6].classname%>"><a href="#"><span><%=weeks[1].days[6].text%></span></a></td>', "</tr>", "<tr>", '<th class="datepickerWeek"><a href="#"><span><%=weeks[2].week%></span></a></th>', '<td class="<%=weeks[2].days[0].classname%>"><a href="#"><span><%=weeks[2].days[0].text%></span></a></td>', '<td class="<%=weeks[2].days[1].classname%>"><a href="#"><span><%=weeks[2].days[1].text%></span></a></td>', '<td class="<%=weeks[2].days[2].classname%>"><a href="#"><span><%=weeks[2].days[2].text%></span></a></td>', '<td class="<%=weeks[2].days[3].classname%>"><a href="#"><span><%=weeks[2].days[3].text%></span></a></td>', '<td class="<%=weeks[2].days[4].classname%>"><a href="#"><span><%=weeks[2].days[4].text%></span></a></td>', '<td class="<%=weeks[2].days[5].classname%>"><a href="#"><span><%=weeks[2].days[5].text%></span></a></td>', '<td class="<%=weeks[2].days[6].classname%>"><a href="#"><span><%=weeks[2].days[6].text%></span></a></td>', "</tr>", "<tr>", '<th class="datepickerWeek"><a href="#"><span><%=weeks[3].week%></span></a></th>', '<td class="<%=weeks[3].days[0].classname%>"><a href="#"><span><%=weeks[3].days[0].text%></span></a></td>', '<td class="<%=weeks[3].days[1].classname%>"><a href="#"><span><%=weeks[3].days[1].text%></span></a></td>', '<td class="<%=weeks[3].days[2].classname%>"><a href="#"><span><%=weeks[3].days[2].text%></span></a></td>', '<td class="<%=weeks[3].days[3].classname%>"><a href="#"><span><%=weeks[3].days[3].text%></span></a></td>', '<td class="<%=weeks[3].days[4].classname%>"><a href="#"><span><%=weeks[3].days[4].text%></span></a></td>', '<td class="<%=weeks[3].days[5].classname%>"><a href="#"><span><%=weeks[3].days[5].text%></span></a></td>', '<td class="<%=weeks[3].days[6].classname%>"><a href="#"><span><%=weeks[3].days[6].text%></span></a></td>', "</tr>", "<tr>", '<th class="datepickerWeek"><a href="#"><span><%=weeks[4].week%></span></a></th>', '<td class="<%=weeks[4].days[0].classname%>"><a href="#"><span><%=weeks[4].days[0].text%></span></a></td>', '<td class="<%=weeks[4].days[1].classname%>"><a href="#"><span><%=weeks[4].days[1].text%></span></a></td>', '<td class="<%=weeks[4].days[2].classname%>"><a href="#"><span><%=weeks[4].days[2].text%></span></a></td>', '<td class="<%=weeks[4].days[3].classname%>"><a href="#"><span><%=weeks[4].days[3].text%></span></a></td>', '<td class="<%=weeks[4].days[4].classname%>"><a href="#"><span><%=weeks[4].days[4].text%></span></a></td>', '<td class="<%=weeks[4].days[5].classname%>"><a href="#"><span><%=weeks[4].days[5].text%></span></a></td>', '<td class="<%=weeks[4].days[6].classname%>"><a href="#"><span><%=weeks[4].days[6].text%></span></a></td>', "</tr>", "<tr>", '<th class="datepickerWeek"><a href="#"><span><%=weeks[5].week%></span></a></th>', '<td class="<%=weeks[5].days[0].classname%>"><a href="#"><span><%=weeks[5].days[0].text%></span></a></td>', '<td class="<%=weeks[5].days[1].classname%>"><a href="#"><span><%=weeks[5].days[1].text%></span></a></td>', '<td class="<%=weeks[5].days[2].classname%>"><a href="#"><span><%=weeks[5].days[2].text%></span></a></td>', '<td class="<%=weeks[5].days[3].classname%>"><a href="#"><span><%=weeks[5].days[3].text%></span></a></td>', '<td class="<%=weeks[5].days[4].classname%>"><a href="#"><span><%=weeks[5].days[4].text%></span></a></td>', '<td class="<%=weeks[5].days[5].classname%>"><a href="#"><span><%=weeks[5].days[5].text%></span></a></td>', '<td class="<%=weeks[5].days[6].classname%>"><a href="#"><span><%=weeks[5].days[6].text%></span></a></td>', "</tr>", "</tbody>"],
                    months: ['<tbody class="<%=className%>">', "<tr>", '<td colspan="2"><a href="#"><span><%=data[0]%></span></a></td>', '<td colspan="2"><a href="#"><span><%=data[1]%></span></a></td>', '<td colspan="2"><a href="#"><span><%=data[2]%></span></a></td>', '<td colspan="2"><a href="#"><span><%=data[3]%></span></a></td>', "</tr>", "<tr>", '<td colspan="2"><a href="#"><span><%=data[4]%></span></a></td>', '<td colspan="2"><a href="#"><span><%=data[5]%></span></a></td>', '<td colspan="2"><a href="#"><span><%=data[6]%></span></a></td>', '<td colspan="2"><a href="#"><span><%=data[7]%></span></a></td>', "</tr>", "<tr>", '<td colspan="2"><a href="#"><span><%=data[8]%></span></a></td>', '<td colspan="2"><a href="#"><span><%=data[9]%></span></a></td>', '<td colspan="2"><a href="#"><span><%=data[10]%></span></a></td>', '<td colspan="2"><a href="#"><span><%=data[11]%></span></a></td>', "</tr>", "</tbody>"]
                },
                i = {
                    flat: !1,
                    starts: 1,
                    prev: "&#9664;",
                    next: "&#9654;",
                    lastSel: !1,
                    mode: "single",
                    view: "days",
                    calendars: 1,
                    format: "Y-m-d",
                    position: "bottom",
                    eventName: "click",
                    onRender: function() {
                        return {}
                    },
                    onChange: function() {
                        return !0
                    },
                    onShow: function() {
                        return !0
                    },
                    onBeforeShow: function() {
                        return !0
                    },
                    onHide: function() {
                        return !0
                    },
                    locale: {
                        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                        daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                        daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
                        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                        monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                        weekMin: "wk"
                    }
                },
                s = function(t) {
                    var n = e(t).data("datepicker"),
                        i = e(t),
                        s = Math.floor(n.calendars / 2),
                        o, a, f, l, c = 0,
                        h, p, d, v, m, g;
                    i.find("td>table tbody").remove();
                    for (var y = 0; y < n.calendars; y++) {
                        o = new Date(n.current), o.addMonths(-s + y), g = i.find("table").eq(y + 1);
                        switch (g[0].className) {
                            case "datepickerViewDays":
                                f = u(o, "B Y");
                                break;
                            case "datepickerViewMonths":
                                f = o.getFullYear();
                                break;
                            case "datepickerViewYears":
                                f = o.getFullYear() - 6 + " - " + (o.getFullYear() + 5)
                        }
                        g.find("thead tr:first th:eq(1) span").text(f), f = o.getFullYear() - 6, a = {
                            data: [],
                            className: "datepickerYears"
                        };
                        for (var b = 0; b < 12; b++) a.data.push(f + b);
                        m = tmpl(r.months.join(""), a), o.setDate(1), a = {
                            weeks: [],
                            test: 10
                        }, l = o.getMonth();
                        var f = (o.getDay() - n.starts) % 7;
                        o.addDays(-(f + (f < 0 ? 7 : 0))), h = -1, c = 0;
                        while (c < 42) {
                            d = parseInt(c / 7, 10), v = c % 7, a.weeks[d] || (h = o.getWeekNumber(), a.weeks[d] = {
                                week: h,
                                days: []
                            }), a.weeks[d].days[v] = {
                                text: o.getDate(),
                                classname: []
                            }, l != o.getMonth() && a.weeks[d].days[v].classname.push("datepickerNotInMonth"), o.getDay() == 0 && a.weeks[d].days[v].classname.push("datepickerSunday"), o.getDay() == 6 && a.weeks[d].days[v].classname.push("datepickerSaturday");
                            var w = n.onRender(o),
                                E = o.valueOf();
                            (w.selected || n.date == E || e.inArray(E, n.date) > -1 || n.mode == "range" && E >= n.date[0] && E <= n.date[1]) && a.weeks[d].days[v].classname.push("datepickerSelected"), w.disabled && a.weeks[d].days[v].classname.push("datepickerDisabled"), w.className && a.weeks[d].days[v].classname.push(w.className), a.weeks[d].days[v].classname = a.weeks[d].days[v].classname.join(" "), c++, o.addDays(1)
                        }
                        m = tmpl(r.days.join(""), a) + m, a = {
                            data: n.locale.monthsShort,
                            className: "datepickerMonths"
                        }, m = tmpl(r.months.join(""), a) + m, g.append(m)
                    }
                },
                o = function(e, t) {
                    if (e.constructor == Date) return new Date(e);
                    var n = e.split(/\W+/),
                        r = t.split(/\W+/),
                        i, s, o, u, a, f = new Date;
                    for (var l = 0; l < n.length; l++) switch (r[l]) {
                        case "d":
                        case "e":
                            i = parseInt(n[l], 10);
                            break;
                        case "m":
                            s = parseInt(n[l], 10) - 1;
                            break;
                        case "Y":
                        case "y":
                            o = parseInt(n[l], 10), o += o > 100 ? 0 : o < 29 ? 2e3 : 1900;
                            break;
                        case "H":
                        case "I":
                        case "k":
                        case "l":
                            u = parseInt(n[l], 10);
                            break;
                        case "P":
                        case "p":
                            /pm/i.test(n[l]) && u < 12 ? u += 12 : /am/i.test(n[l]) && u >= 12 && (u -= 12);
                            break;
                        case "M":
                            a = parseInt(n[l], 10)
                    }
                    return new Date(o === undefined ? f.getFullYear() : o, s === undefined ? f.getMonth() : s, i === undefined ? f.getDate() : i, u === undefined ? f.getHours() : u, a === undefined ? f.getMinutes() : a, 0)
                },
                u = function(e, t) {
                    var n = e.getMonth(),
                        r = e.getDate(),
                        i = e.getFullYear(),
                        s = e.getWeekNumber(),
                        o = e.getDay(),
                        u = {},
                        a = e.getHours(),
                        f = a >= 12,
                        l = f ? a - 12 : a,
                        c = e.getDayOfYear();
                    l == 0 && (l = 12);
                    var h = e.getMinutes(),
                        p = e.getSeconds(),
                        d = t.split(""),
                        v;
                    for (var m = 0; m < d.length; m++) {
                        v = d[m];
                        switch (d[m]) {
                            case "a":
                                v = e.getDayName();
                                break;
                            case "A":
                                v = e.getDayName(!0);
                                break;
                            case "b":
                                v = e.getMonthName();
                                break;
                            case "B":
                                v = e.getMonthName(!0);
                                break;
                            case "C":
                                v = 1 + Math.floor(i / 100);
                                break;
                            case "d":
                                v = r < 10 ? "0" + r : r;
                                break;
                            case "e":
                                v = r;
                                break;
                            case "H":
                                v = a < 10 ? "0" + a : a;
                                break;
                            case "I":
                                v = l < 10 ? "0" + l : l;
                                break;
                            case "j":
                                v = c < 100 ? c < 10 ? "00" + c : "0" + c : c;
                                break;
                            case "k":
                                v = a;
                                break;
                            case "l":
                                v = l;
                                break;
                            case "m":
                                v = n < 9 ? "0" + (1 + n) : 1 + n;
                                break;
                            case "M":
                                v = h < 10 ? "0" + h : h;
                                break;
                            case "p":
                            case "P":
                                v = f ? "PM" : "AM";
                                break;
                            case "s":
                                v = Math.floor(e.getTime() / 1e3);
                                break;
                            case "S":
                                v = p < 10 ? "0" + p : p;
                                break;
                            case "u":
                                v = o + 1;
                                break;
                            case "w":
                                v = o;
                                break;
                            case "y":
                                v = ("" + i).substr(2, 2);
                                break;
                            case "Y":
                                v = i
                        }
                        d[m] = v
                    }
                    return d.join("")
                },
                a = function(e) {
                    if (Date.prototype.tempDate) return;
                    Date.prototype.tempDate = null, Date.prototype.months = e.months, Date.prototype.monthsShort = e.monthsShort, Date.prototype.days = e.days, Date.prototype.daysShort = e.daysShort, Date.prototype.getMonthName = function(e) {
                        return this[e ? "months" : "monthsShort"][this.getMonth()]
                    }, Date.prototype.getDayName = function(e) {
                        return this[e ? "days" : "daysShort"][this.getDay()]
                    }, Date.prototype.addDays = function(e) {
                        this.setDate(this.getDate() + e), this.tempDate = this.getDate()
                    }, Date.prototype.addMonths = function(e) {
                        this.tempDate == null && (this.tempDate = this.getDate()), this.setDate(1), this.setMonth(this.getMonth() + e), this.setDate(Math.min(this.tempDate, this.getMaxDays()))
                    }, Date.prototype.addYears = function(e) {
                        this.tempDate == null && (this.tempDate = this.getDate()), this.setDate(1), this.setFullYear(this.getFullYear() + e), this.setDate(Math.min(this.tempDate, this.getMaxDays()))
                    }, Date.prototype.getMaxDays = function() {
                        var e = new Date(Date.parse(this)),
                            t = 28,
                            n;
                        n = e.getMonth(), t = 28;
                        while (e.getMonth() == n) t++, e.setDate(t);
                        return t - 1
                    }, Date.prototype.getFirstDay = function() {
                        var e = new Date(Date.parse(this));
                        return e.setDate(1), e.getDay()
                    }, Date.prototype.getWeekNumber = function() {
                        var e = new Date(this);
                        e.setDate(e.getDate() - (e.getDay() + 6) % 7 + 3);
                        var t = e.valueOf();
                        return e.setMonth(0), e.setDate(4), Math.round((t - e.valueOf()) / 6048e5) + 1
                    }, Date.prototype.getDayOfYear = function() {
                        var e = new Date(this.getFullYear(), this.getMonth(), this.getDate(), 0, 0, 0),
                            t = new Date(this.getFullYear(), 0, 0, 0, 0, 0),
                            n = e - t;
                        return Math.floor(n / 24 * 60 * 60 * 1e3)
                    }
                },
                f = function(t) {
                    var n = e(t).data("datepicker"),
                        r = e("#" + n.id);
                    if (!n.extraHeight) {
                        var i = e(t).find("div");
                        n.extraHeight = i.get(0).offsetHeight + i.get(1).offsetHeight, n.extraWidth = i.get(2).offsetWidth + i.get(3).offsetWidth
                    }
                    var s = r.find("table:first").get(0),
                        o = s.offsetWidth,
                        u = s.offsetHeight;
                    r.css({
                        width: o + n.extraWidth + "px",
                        height: u + n.extraHeight + "px"
                    }).find("div.datepickerContainer").css({
                        width: o + "px",
                        height: u + "px"
                    })
                },
                l = function(t) {
                    e(t.target).is("span") && (t.target = t.target.parentNode);
                    var n = e(t.target);
                    if (n.is("a")) {
                        t.target.blur();
                        if (n.hasClass("datepickerDisabled")) return !1;
                        var r = e(this).data("datepicker"),
                            i = n.parent(),
                            o = i.parent().parent().parent(),
                            a = e("table", this).index(o.get(0)) - 1,
                            f = new Date(r.current),
                            l = !1,
                            h = !1;
                        if (i.is("th")) {
                            if (i.hasClass("datepickerWeek") && r.mode == "range" && !i.next().hasClass("datepickerDisabled")) {
                                var p = parseInt(i.next().text(), 10);
                                f.addMonths(a - Math.floor(r.calendars / 2)), i.next().hasClass("datepickerNotInMonth") && f.addMonths(p > 15 ? -1 : 1), f.setDate(p), r.date[0] = f.setHours(0, 0, 0, 0).valueOf(), f.setHours(23, 59, 59, 0), f.addDays(6), r.date[1] = f.valueOf(), h = !0, l = !0, r.lastSel = !1
                            } else if (i.hasClass("datepickerMonth")) {
                                f.addMonths(a - Math.floor(r.calendars / 2));
                                switch (o.get(0).className) {
                                    case "datepickerViewDays":
                                        o.get(0).className = "datepickerViewMonths", n.find("span").text(f.getFullYear());
                                        break;
                                    case "datepickerViewMonths":
                                        o.get(0).className = "datepickerViewYears", n.find("span").text(f.getFullYear() - 6 + " - " + (f.getFullYear() + 5));
                                        break;
                                    case "datepickerViewYears":
                                        o.get(0).className = "datepickerViewDays", n.find("span").text(u(f, "B, Y"))
                                }
                            } else if (i.parent().parent().is("thead")) {
                                switch (o.get(0).className) {
                                    case "datepickerViewDays":
                                        r.current.addMonths(i.hasClass("datepickerGoPrev") ? -1 : 1);
                                        break;
                                    case "datepickerViewMonths":
                                        r.current.addYears(i.hasClass("datepickerGoPrev") ? -1 : 1);
                                        break;
                                    case "datepickerViewYears":
                                        r.current.addYears(i.hasClass("datepickerGoPrev") ? -12 : 12)
                                }
                                h = !0
                            }
                        } else if (i.is("td") && !i.hasClass("datepickerDisabled")) {
                            switch (o.get(0).className) {
                                case "datepickerViewMonths":
                                    r.current.setMonth(o.find("tbody.datepickerMonths td").index(i)), r.current.setFullYear(parseInt(o.find("thead th.datepickerMonth span").text(), 10)), r.current.addMonths(Math.floor(r.calendars / 2) - a), o.get(0).className = "datepickerViewDays";
                                    break;
                                case "datepickerViewYears":
                                    r.current.setFullYear(parseInt(n.text(), 10)), o.get(0).className = "datepickerViewMonths";
                                    break;
                                default:
                                    var p = parseInt(n.text(), 10);
                                    f.addMonths(a - Math.floor(r.calendars / 2)), i.hasClass("datepickerNotInMonth") && f.addMonths(p > 15 ? -1 : 1), f.setDate(p);
                                    switch (r.mode) {
                                        case "multiple":
                                            p = f.setHours(0, 0, 0, 0).valueOf(), e.inArray(p, r.date) > -1 ? e.each(r.date, function(e, t) {
                                                if (t == p) return r.date.splice(e, 1), !1
                                            }) : r.date.push(p);
                                            break;
                                        case "range":
                                            r.lastSel || (r.date[0] = f.setHours(0, 0, 0, 0).valueOf()), p = f.setHours(23, 59, 59, 0).valueOf(), p < r.date[0] ? (r.date[1] = r.date[0] + 86399e3, r.date[0] = p - 86399e3) : r.date[1] = p, r.lastSel = !r.lastSel;
                                            break;
                                        default:
                                            r.date = f.valueOf()
                                    }
                            }
                            h = !0, l = !0
                        }
                        h && s(this), l && r.onChange.apply(this, c(r))
                    }
                    return !1
                },
                c = function(t) {
                    var n;
                    return t.mode == "single" ? (n = new Date(t.date), [u(n, t.format), n, t.el]) : (n = [
                        [],
                        [], t.el
                    ], e.each(t.date, function(e, r) {
                        var i = new Date(r);
                        n[0].push(u(i, t.format)), n[1].push(i)
                    }), n)
                },
                h = function() {
                    var e = document.compatMode == "CSS1Compat";
                    return {
                        l: window.pageXOffset || (e ? document.documentElement.scrollLeft : document.body.scrollLeft),
                        t: window.pageYOffset || (e ? document.documentElement.scrollTop : document.body.scrollTop),
                        w: window.innerWidth || (e ? document.documentElement.clientWidth : document.body.clientWidth),
                        h: window.innerHeight || (e ? document.documentElement.clientHeight : document.body.clientHeight)
                    }
                },
                p = function(e, t, n) {
                    if (e == t) return !0;
                    if (e.contains) return e.contains(t);
                    if (e.compareDocumentPosition) return !!(e.compareDocumentPosition(t) & 16);
                    var r = t.parentNode;
                    while (r && r != n) {
                        if (r == e) return !0;
                        r = r.parentNode
                    }
                    return !1
                },
                d = function(t) {
                    var n = e("#" + e(this).data("datepickerId"));
                    if (!n.is(":visible")) {
                        var r = n.get(0);
                        s(r);
                        var i = n.data("datepicker");
                        i.onBeforeShow.apply(this, [n.get(0)]);
                        var o = e(this).offset(),
                            u = h(),
                            a = o.top,
                            l = o.left,
                            c = e.curCSS(r, "display");
                        n.css({
                            visibility: "hidden",
                            display: "block"
                        }), f(r);
                        switch (i.position) {
                            case "top":
                                a -= r.offsetHeight;
                                break;
                            case "left":
                                l -= r.offsetWidth;
                                break;
                            case "right":
                                l += this.offsetWidth;
                                break;
                            case "bottom":
                                a += this.offsetHeight
                        }
                        a + r.offsetHeight > u.t + u.h && (a = o.top - r.offsetHeight), a < u.t && (a = o.top + this.offsetHeight + r.offsetHeight), l + r.offsetWidth > u.l + u.w && (l = o.left - r.offsetWidth), l < u.l && (l = o.left + this.offsetWidth), n.css({
                            visibility: "visible",
                            display: "block",
                            top: a + "px",
                            left: l + "px"
                        }), i.onShow.apply(this, [n.get(0)]) != 0 && n.show(), e(document).bind("mousedown", {
                            cal: n,
                            trigger: this
                        }, v)
                    }
                    return !1
                },
                v = function(t) {
                    t.target != t.data.trigger && !p(t.data.cal.get(0), t.target, t.data.cal.get(0)) && (t.data.cal.data("datepicker").onHide.apply(this, [t.data.cal.get(0)]) != 0 && t.data.cal.hide(), e(document).unbind("mousedown", v))
                };
            return {
                init: function(t) {
                    return t = e.extend({}, i, t || {}), a(t.locale), t.calendars = Math.max(1, parseInt(t.calendars, 10) || 1), t.mode = /single|multiple|range/.test(t.mode) ? t.mode : "single", this.each(function() {
                        if (!e(this).data("datepicker")) {
                            t.el = this, t.date.constructor == String && (t.date = o(t.date, t.format), t.date.setHours(0, 0, 0, 0));
                            if (t.mode != "single")
                                if (t.date.constructor != Array) t.date = [t.date.valueOf()], t.mode == "range" && t.date.push((new Date(t.date[0])).setHours(23, 59, 59, 0).valueOf());
                                else {
                                    for (var i = 0; i < t.date.length; i++) t.date[i] = o(t.date[i], t.format).setHours(0, 0, 0, 0).valueOf();
                                    t.mode == "range" && (t.date[1] = (new Date(t.date[1])).setHours(23, 59, 59, 0).valueOf())
                                } else t.date = t.date.valueOf();
                            t.current ? t.current = o(t.current, t.format) : t.current = new Date, t.current.setDate(1), t.current.setHours(0, 0, 0, 0);
                            var u = "datepicker_" + parseInt(Math.random() * 1e3),
                                a;
                            t.id = u, e(this).data("datepickerId", t.id);
                            var c = e(r.wrapper).attr("id", u).bind("click", l).data("datepicker", t);
                            t.className && c.addClass(t.className);
                            var h = "";
                            for (var i = 0; i < t.calendars; i++) a = t.starts, i > 0 && (h += r.space), h += tmpl(r.head.join(""), {
                                week: t.locale.weekMin,
                                prev: t.prev,
                                next: t.next,
                                day1: t.locale.daysMin[a++ % 7],
                                day2: t.locale.daysMin[a++ % 7],
                                day3: t.locale.daysMin[a++ % 7],
                                day4: t.locale.daysMin[a++ % 7],
                                day5: t.locale.daysMin[a++ % 7],
                                day6: t.locale.daysMin[a++ % 7],
                                day7: t.locale.daysMin[a++ % 7]
                            });
                            c.find("tr:first").append(h).find("table").addClass(n[t.view]), s(c.get(0)), t.flat ? (c.appendTo(this).show().css("position", "relative"), f(c.get(0))) : (c.appendTo(document.body), e(this).bind(t.eventName, d))
                        }
                    })
                },
                showPicker: function() {
                    return this.each(function() {
                        e(this).data("datepickerId") && d.apply(this)
                    })
                },
                hidePicker: function() {
                    return this.each(function() {
                        e(this).data("datepickerId") && e("#" + e(this).data("datepickerId")).hide()
                    })
                },
                setDate: function(t, n) {
                    return this.each(function() {
                        if (e(this).data("datepickerId")) {
                            var r = e("#" + e(this).data("datepickerId")),
                                i = r.data("datepicker");
                            i.date = t, i.date.constructor == String && (i.date = o(i.date, i.format), i.date.setHours(0, 0, 0, 0));
                            if (i.mode != "single")
                                if (i.date.constructor != Array) i.date = [i.date.valueOf()], i.mode == "range" && i.date.push((new Date(i.date[0])).setHours(23, 59, 59, 0).valueOf());
                                else {
                                    for (var u = 0; u < i.date.length; u++) i.date[u] = o(i.date[u], i.format).setHours(0, 0, 0, 0).valueOf();
                                    i.mode == "range" && (i.date[1] = (new Date(i.date[1])).setHours(23, 59, 59, 0).valueOf())
                                } else i.date = i.date.valueOf();
                            n && (i.current = new Date(i.mode != "single" ? i.date[0] : i.date)), s(r.get(0))
                        }
                    })
                },
                getDate: function(t) {
                    if (this.size() > 0) return c(e("#" + e(this).data("datepickerId")).data("datepicker"))[t ? 0 : 1]
                },
                clear: function() {
                    return this.each(function() {
                        if (e(this).data("datepickerId")) {
                            var t = e("#" + e(this).data("datepickerId")),
                                n = t.data("datepicker");
                            n.mode != "single" && (n.date = [], s(t.get(0)))
                        }
                    })
                },
                fixLayout: function() {
                    return this.each(function() {
                        if (e(this).data("datepickerId")) {
                            var t = e("#" + e(this).data("datepickerId")),
                                n = t.data("datepicker");
                            n.flat && f(t.get(0))
                        }
                    })
                }
            }
        }();
        e.fn.extend({
            DatePicker: t.init,
            DatePickerHide: t.hidePicker,
            DatePickerShow: t.showPicker,
            DatePickerSetDate: t.setDate,
            DatePickerGetDate: t.getDate,
            DatePickerClear: t.clear,
            DatePickerLayout: t.fixLayout
        })
    }(jQuery),
    function() {
        var e = {};
        this.tmpl = function t(n, r) {
            var i = /\W/.test(n) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + n.replace(/[\r\t\n]/g, " ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : e[n] = e[n] || t(document.getElementById(n).innerHTML);
            return r ? i(r) : i
        }
    }(), typeof GPH == "undefined" && (GPH = {}), GPH.SiteHeader = function() {
        var e = function(e) {
            this.$el = e.find(".header_background, .nav_list_left, .nav_list_right, .social_icons"), this.height = this.$el.height(), this.animating_hide = !1, this.animating_show = !1, this.hide_timeout = !1, this.inited = !1
        };
        return e.prototype = {
            hide: function() {
                if (this.animating_hide || this.$el.hasClass("off_screen") || $doc.scrollTop() <= 50) return;
                this.animating_hide = !0, this.animating_show = !1, this.$el.stop().animate({
                    top: -this.height,
                    opacity: 0
                }, function() {
                    this.animating_hide = !1
                }).addClass("off_screen")
            },
            show: function() {
                if (this.animating_show || !this.$el.hasClass("off_screen")) return;
                this.animating_show = !0, this.animating_hide = !1, this.$el.stop().animate({
                    top: 0,
                    opacity: 1
                }, function() {
                    this.animating_show = !1
                }).removeClass("off_screen")
            }
        }, e
    }(), typeof GPH == "undefined" && (GPH = {}), GPH.TabModule = function() {
        var e = function(e) {
                return e.split("/").pop()
            },
            t = function(t, n) {
                this.$el = t, this.$container = n, this.href = this.$el.attr("href"), this.id = e(this.href), this.$tab_content = this.$container.find(".tab_content[data-tab-content=" + this.id + "]"), this.is_active = this.$el.hasClass("active")
            };
        t.prototype = {
            show: function() {
                this.is_active = !0, this.$el.addClass("active"), this.$tab_content.addClass("active")
            },
            hide: function() {
                this.is_active = !1, this.$el.removeClass("active"), this.$tab_content.removeClass("active")
            }
        };
        var n = function(e) {
            this.$el = e, this.id = this.$el.attr("data-tab-module-id"), this.tabs = {}, this.$tabs = this.$el.find(".tab"), this.$tab_contents = $doc.find(".tab_contents[data-tab-module-id=" + this.id + "]");
            var n = this,
                r;
            this.$tabs.each(function() {
                r = new t($(this), n.$tab_contents), n.tabs[r.id.toString()] = r
            }), this.inited = !1, this.init()
        };
        return n.prototype = {
            init: function() {
                if (this.inited) return;
                var t = this,
                    n;
                this.$tabs.bind("click", function(r) {
                    r.preventDefault(), n = t.tabs[e(this.href)], n.is_active ? (n.hide(), t.$el.trigger("TabModule:Hide")) : (t.hide_tabs(), n.show(), t.$el.trigger("TabModule:Show"))
                }), this.inited = !0
            },
            hide_tabs: function() {
                _.each(this.tabs, function(e) {
                    e.hide()
                }), this.$el.trigger("TabModule:Hide")
            },
            hide_tab_contents: function() {
                this.hide_tabs(), this.$tab_contents.css({
                    height: 0,
                    opacity: 0
                })
            }
        }, n
    }(), typeof GPH == "undefined" && (GPH = {}), GPH.PopOver = function() {
        var e, t = function(t) {
            var n = this;
            this.$trigger = t, this.$content = $(this.$trigger.attr("data-popover-content")), this.custom_placement = this.$trigger.attr("data-custom-placement"), this.custom_class = this.$trigger.attr("data-custom-class"), this.$trigger.popover({
                content: this.$content.html(),
                trigger: "click"
            }), this.$trigger.bind("click", function(e) {
                e.preventDefault()
            }), is_touch_device ? this.$trigger.bind("touchstart", function(e) {
                return n.show(), $doc.find("body").bind("touchstart.popover_touch", function(e) {
                    $(e.target).parents(".popover, .popover_trigger").length || (n.hide(), $(this).unbind(".popover_touch"))
                }), !1
            }) : (this.$trigger.bind("mouseenter", function(t) {
                clearTimeout(e), n.show()
            }), this.$trigger.bind("mouseleave", function(t) {
                e = setTimeout(function() {
                    n.hide()
                }, 250)
            }))
        };
        return t.prototype = {
            show: function() {
                var t = this,
                    n = $(".popover").remove();
                this.$trigger.popover("show"), n = $(".popover"), is_touch_device || (n.bind("mouseenter", function(t) {
                    clearTimeout(e)
                }), n.bind("mouseleave", function(n) {
                    e = setTimeout(function() {
                        t.hide()
                    }, 250)
                })), t.custom_placement && $(".popover").css({
                    "margin-top": t.custom_placement
                }), $(".popover").addClass(t.custom_class), $(".popover").animate({
                    opacity: 1
                }, 300)
            },
            hide: function() {
                var e = this;
                $(".popover").animate({
                    opacity: 0
                }, 300, function() {
                    e.$trigger.popover("hide")
                })
            }
        }, t
    }(), typeof GPH == "undefined" && (GPH = {});
var is_touch_device = "ontouchstart" in document.documentElement,
    down = is_touch_device ? "touchstart" : "mousedown",
    up = is_touch_device ? "touchend" : "mouseup",
    move = is_touch_device ? "touchmove" : "mousemove";
GPH.Slider = function() {
    var e = function(e) {
        this.$slider_wrap = e, this.$gutter = this.$slider_wrap.find(".gutter"), this.$slider = this.$slider_wrap.find(".slider"), this.slider_offset = this.$slider.width() / 2, this.slider_min = 0, this.slider_max = this.$gutter.width() - this.$slider.width(), this.value = 0, this.percentage = 0, this.update_gutter_positions();
        var t, n = this;
        this.$slider.bind(down, function(e) {
            e.preventDefault(), n.update_gutter_positions(), $doc.bind(move + ".slider", function(e) {
                e.preventDefault(), client_x = e.clientX ? e.clientX : e.originalEvent.pageX, t = client_x - n.gutter_left - n.slider_offset, t > n.slider_max && (t = n.slider_max), t < n.slider_min && (t = n.slider_min), n.percentage = t / n.slider_max, n.$slider.css("left", t), n.$slider.trigger("sliding")
            }), $doc.bind(up + ".slider", function(e) {
                e.preventDefault(), $doc.unbind(".slider")
            })
        })
    };
    return e.prototype = {
        update_gutter_positions: function() {
            this.gutter_left = this.$gutter.offset().left, this.gutter_right = this.gutter_left + this.$gutter.width()
        }
    }, e
}(), typeof GPH == "undefined" && (GPH = {}), GPH.DatePicker = function() {
    var e = function(e) {
        this.$wrap = e, this.$el = this.$wrap.find(".calendars"), this.$arrival_wrap = this.$wrap.find(".arrival"), this.$arrival_field = this.$arrival_wrap.find(".arrival_input"), this.$departure_wrap = this.$wrap.find(".departure"), this.$departure_field = this.$departure_wrap.find(".departure_input"), this.$date_fields = this.$arrival_field.add(this.$departure_field), this.arrival_date = this.get_arrival_date(), this.departure_date = this.get_departure_date(), this.date_range = this.get_date_range(), this.start_calendar = new Date(this.date_range[0]), this.start_calendar.setMonth(this.start_calendar.getMonth() + 1);
        var t = this;
        this.jq_date_picker = this.$el.DatePicker({
            flat: !0,
            format: "m/d/Y",
            date: t.date_range,
            current: t.start_calendar,
            calendars: 2,
            starts: 0,
            mode: "range",
            onRender: function(e) {
                var t = new Date,
                    n = new Date;
                return t.setHours(0, 0, 0, 0), n.setHours(0, 0, 0, 0), n.setFullYear(t.getFullYear() + 1), {
                    disabled: e < t || e > n
                }
            },
            onChange: function(e, n) {
                t.set_arrival_date(e[0]), t.set_departure_date(e[1]);
                var r = t.$el.find(".datepickerSelected:not(.datepickerNotInMonth)").length;
                r == 1 ? (t.$departure_wrap.addClass("focused"), t.$departure_field.val("")) : t.$departure_wrap.removeClass("focused")
            }
        }), this.$date_fields.bind("keyup keydown keypress input", function(e) {
            t.jq_date_picker.DatePickerSetDate(t.get_date_range())
        }), this.$date_fields.bind("focus", function(e) {
            t.$date_fields.parent().removeClass("focused"), $(this).parent().addClass("focused")
        }), this.$date_fields.bind("blur", function(e) {
            $(this).parent().removeClass("focused"), GPH.DateFormatter.fully_format_input($(this)), t.prevent_time_travel()
        }), this.$el.find(".datepickerMonth a").bind("click", function(e) {
            return !1
        }), this.next_month_trigger = this.$el.find(".next_month"), this.prev_month_trigger = this.$el.find(".prev_month"), this.next_month_trigger.bind("click", function(e) {
            e.preventDefault();
            var n = t.$el.find(".datepickerDays").last().find("td:not(.datepickerNotInMonth)").last();
            n.hasClass("datepickerDisabled") || t.$el.find(".datepickerGoNext a").first().trigger("click")
        }), this.prev_month_trigger.bind("click", function(e) {
            e.preventDefault();
            var n = t.$el.find(".datepickerDays").first().find("td:not(.datepickerNotInMonth)").first();
            n.hasClass("datepickerDisabled") || t.$el.find(".datepickerGoPrev a").first().trigger("click")
        })
    };
    return e.prototype = {
        date_field_focused: function() {
            var e = !1;
            return $.each(this.$date_fields, function() {
                $(this).is(":focus") && (e = !0)
            }), e
        },
        prevent_time_travel: function() {
            var e = this;
            setTimeout(function() {
                if (!e.date_field_focused()) {
                    var t = e.get_date_range();
                    e.$arrival_field.removeClass("TOUCHED") && e.$departure_field.removeClass("TOUCHED"), e.set_arrival_date(t[0]), e.set_departure_date(t[1])
                }
            }, 0)
        },
        get_arrival_date: function() {
            return this.arrival_date = this.$arrival_field.val()
        },
        set_arrival_date: function(e) {
            return this.arrival_date = this.$arrival_field.val(e)
        },
        get_departure_date: function() {
            return this.departure_date = this.$departure_field.val()
        },
        set_departure_date: function(e) {
            return this.departure_date = this.$departure_field.val(e)
        },
        get_date_range: function() {
            var e = this.get_arrival_date(),
                t = this.get_departure_date();
            return new Date(e) < new Date(t) ? this.date_range = [e, t] : this.date_range = [t, e]
        }
    }, e
}(), typeof GPH == "undefined" && (GPH = {}), GPH.DateFormatter = function() {
    return {
        ensure_characters: function(e) {
            var t = e.val();
            t = t.replace(/[^0-9\/]/g, ""), e.val(t)
        },
        prevent_past_date: function(e) {
            var t = e.val(),
                n = new Date,
                r = new Date(t);
            n.setHours(0, 0, 0, 0), r.setHours(0, 0, 0, 0), r < n && (t = [n.getMonth() + 1, n.getDate(), n.getFullYear()].join("/")), e.val(t)
        },
        prevent_future_date: function(e) {
            var t = e.val(),
                n = new Date(t),
                r = new Date;
            r.setFullYear(r.getFullYear() + 1), n.setHours(0, 0, 0, 0), r.setHours(0, 0, 0, 0), n > r && (t = [r.getMonth() + 1, r.getDate(), r.getFullYear()].join("/")), e.val(t)
        },
        constrain_date_range: function(e) {
            GPH.DateFormatter.prevent_past_date(e), GPH.DateFormatter.prevent_future_date(e)
        },
        fully_format_input: function(e) {
            GPH.DateFormatter.ensure_characters(e), GPH.DateFormatter.constrain_date_range(e)
        }
    }
}(), Array.prototype.indexOf || (Array.prototype.indexOf = function(e, t) {
    for (var n = t || 0, r = this.length; n < r; n++)
        if (this[n] === e) return n;
    return -1
});
var _gaq = _gaq || [];
_gaq.push(["_setAccount", window.GA_ACCT]), _gaq.push(["_trackPageview"]),
    function() {
        var e = document.createElement("script");
        e.type = "text/javascript", e.async = !0, e.src = "https://ssl.google-analytics.com/ga.js";
        var t = document.getElementsByTagName("script")[0];
        t.parentNode.insertBefore(e, t)
    }(), ga_tracking = function(e) {
        var t = e(document),
            n = e(window),
            r = 300,
            i = {},
            s = function(e) {
                return o(e) ? (e = "_trackEvent, " + e, e.replace(/\s*,\s*/g, ",").split(",")) : !1
            },
            o = function(e) {
                if (!e || e == "") return !1;
                var t = e.replace(/\s*,\s*/g, ",").split(",");
                return t.length < 2 || t.indexOf(null) >= 0 ? !1 : !0
            },
            u = function(e, t) {
                while (!e.getAttribute(t)) e = e.parentNode;
                return e
            },
            a = function(e, t, n) {
                var r;
                e = u(e, t);
                if (n && e.getAttribute(t) == "tracked") return;
                r = s(e.getAttribute(t)), r && _gaq.push(r), n && e.setAttribute(t, "tracked")
            };
        return t.delegate("[data-ga-track-click-event]", "click", function(e) {
            a(e.target, "data-ga-track-click-event")
        }), t.delegate("[data-ga-track-hover-event]", "mouseenter", function(e) {
            a(e.target, "data-ga-track-hover-event")
        }), t.delegate("[data-ga-track-scroll-event]", "mouseleave", function(e) {
            n.unbind(".ga_track_scroll_event")
        }), t.delegate("[data-ga-track-scroll-event]", "mouseenter", function(e) {
            var t = e.target;
            n.bind("scroll.ga_track_scroll_event", function(e) {
                i.scroll_timer && clearTimeout(i.scroll_timer), i.scroll_timer = setTimeout(function() {
                    a(t, "data-ga-track-scroll-event")
                }, r)
            })
        }), t.delegate("[data-ga-track-page-scrolled-to-bottom-event]", "mouseenter", function(e) {
            var s = e.target;
            n.bind("scroll.ga_track_page_scrolled_to_bottom_event", function(e) {
                i.scroll_page_end_timer && clearTimeout(i.scroll_page_end_timer), i.scroll_page_end_timer = setTimeout(function() {
                    t.scrollTop() == t.height() - n.height() && a(s, "data-ga-track-page-scrolled-to-bottom-event", !0)
                }, r)
            })
        }), t.delegate("[data-ga-track-page-scrolled-to-bottom-event]", "mouseleave", function(e) {
            n.unbind(".ga_track_page_scrolled_to_bottom_event")
        }), {
            track_event: function(e) {
                ga_command_array = s(e), ga_command_array && _gaq.push(ga_command_array)
            }
        }
    }(jQuery), typeof GPH == "undefined" && (GPH = {});
var is_touch_device = "ontouchstart" in document.documentElement,
    enter = is_touch_device ? "click" : "mouseenter",
    leave = is_touch_device ? "click" : "mouseleave";
GPH.Expanders = function() {
    var e = [];
    return {
        clear: function() {
            for (var t = 0, n = e.length; t < n; t++) clearTimeout(e[t])
        },
        init: function() {
            var t = 300,
                n = function(r) {
                    r.find(".layer_2").animate({
                        opacity: 1
                    }, t), r.find(".layer_3").animate({
                        opacity: 1
                    }, t * 2), r.find(".layer_4").animate({
                        opacity: 1
                    }, t * 3), r.find(".layer_2, .layer_3, .layer_4").animate({
                        opacity: 0
                    }, t * 4), e.push(setTimeout(function() {
                        n(r)
                    }, t * 5))
                };
            if (is_touch_device) $doc.find(".blinker .layer").css("opacity", 1);
            else {
                var r = 0;
                $doc.find(".expand_wrap").each(function() {
                    (function(r, i) {
                        e.push(setTimeout(function() {
                            n(r)
                        }, t * i))
                    })($(this), r++)
                })
            }
            if (!$("#chapter_1_section_2").hasClass("inited")) {
                var i = $doc.find(".blinker");
                i.bind(enter + ".blinker_events", function(e) {
                    var t = $(this),
                        n = t.parents(".expand_wrap"),
                        r = n.find(".expandable");
                    setTimeout(function() {
                        n.siblings().trigger(leave);
                        if (n.hasClass("animating")) return !1;
                        t.fadeOut(), n.addClass("animating"), t.css({
                            opacity: 0
                        }), r.animate({
                            width: "100%",
                            height: "100%",
                            "margin-top": "0%"
                        }, 300, function() {
                            n.removeClass("animating")
                        })
                    }, 0)
                }), $doc.find(".expand_wrap").bind(leave, function(e) {
                    e.stopImmediatePropagation();
                    var t = $(this),
                        n = t.find(".expandable"),
                        r = t.find(".blinker");
                    r.fadeIn(), n.animate({
                        width: "0%",
                        height: "0%",
                        "margin-top": "50%"
                    }, 300, function() {
                        r.css({
                            opacity: 1
                        })
                    })
                }), $("#chapter_1_section_2").addClass("inited")
            }
        },
        update: function(e, t) {
            var n, e, r, i;
            i = $doc.find("#chapter_1_section_2_background"), r = $doc.find("#chapter_1_section_2"), r.css({
                width: e,
                height: t,
                "margin-left": i.css("margin-left")
            }), $doc.find(".expand_wrap").each(function() {
                $(this).css("height", e * .2)
            })
        }
    }
}(), typeof GPH == "undefined" && (GPH = {}), GPH.ResizeBackgrounds = function(e) {
    e && $doc.find(".RESIZED").removeClass("RESIZED");
    var t = $win.width(),
        n = $win.height(),
        r, i, s, o, u, a, f = $doc.find("#chapter_1_section_2"),
        l = function(e, t, n) {
            return n * t / e
        },
        c = function(e, t, n) {
            return n * e / t
        };
    $doc.find(".background_image").each(function() {
        r = $(this), i = o = parseInt(r.attr("width"), 10), s = u = parseInt(r.attr("height"), 10), is_touch_device || (o == 1024 ? (i = o = 1440, s = u = u * 1440 / 1024) : (s = u = 1440, i = o = o * 1440 / 1024)), t = $win.width(), n = $win.height(), i < t && (o = t, u = l(i, s, o)), .5 * u < n && (u = n * 1.5, o = c(i, s, u)), o < t && (o = t * 1.5, u = l(i, s, o)), r.css({
            width: o + "px",
            height: u + "px"
        }), r.addClass("RESIZED").css({}), r.attr("id") == "chapter_1_section_2_background" && GPH.Expanders.update(o, u)
    })
}, typeof GPH == "undefined" && (GPH = {}), GPH.Triangles = function() {
    return {
        add_triangles: function() {
            $doc.find(".add_triangles").each(function() {
                var e = $(this),
                    t = [];
                e.hasClass("top_left") && t.push($('<div class="triangle top_left dark"></div>')), e.hasClass("top_right") && t.push($('<div class="triangle top_right dark"></div>')), e.hasClass("bottom_right") && t.push($('<div class="triangle bottom_right dark"></div>')), e.hasClass("bottom_left") && t.push($('<div class="triangle bottom_left dark"></div>')), e.hasClass("top_left") && t.push($('<div class="triangle top_left"></div>')), e.hasClass("top_right") && t.push($('<div class="triangle top_right"></div>')), e.hasClass("bottom_right") && t.push($('<div class="triangle bottom_right"></div>')), e.hasClass("bottom_left") && t.push($('<div class="triangle bottom_left"></div>'));
                for (var n = 0, r = t.length; n < r; n++) e.append(t[n])
            })
        },
        adjust_triangle_edges: function() {
            var e = $win.width(),
                t = $win.height(),
                n, r, i, s, o, u;
            n = Math.tan(31.5 * (Math.PI / 180)) * e, i = e + "px", r = n + "px";
            var s, o;
            $doc.find(".add_triangles").each(function() {
                s = $(this), s.css({
                    height: "100%"
                }), o = s.data();
                for (var e in o) s.data(e).match(/jscalc-start_height/) ? s.attr("data-" + e, o[e].replace(/jscalc-start_height/, n * 3 + "px")) : s.data(e).match(/jscalc-mid_height/) ? s.attr("data-" + e, o[e].replace(/jscalc-mid_height/, "0px")) : s.data(e).match(/jscalc-end_height/) && s.attr("data-" + e, o[e].replace(/jscalc-end_height/, -(n * 3) + "px"));
                s.find(".triangle.top_left").css({
                    "border-width": r + " " + i + " 0 0",
                    bottom: -n + 1
                }), s.find(".triangle.top_left.dark").css({
                    bottom: -n
                }), s.find(".triangle.top_right").css({
                    "border-width": "0 " + i + " " + r + " 0",
                    bottom: -n + 1
                }), s.find(".triangle.top_right.dark").css({
                    bottom: -n
                }), s.find(".triangle.bottom_right").css({
                    "border-width": "0 0 " + r + " " + i,
                    top: -n + 1 + "px"
                }), s.find(".triangle.bottom_right.dark").css({
                    top: -n + "px"
                }), s.find(".triangle.bottom_left").css({
                    "border-width": r + " 0 0 " + i,
                    top: -n + 1 + "px"
                }), s.find(".triangle.bottom_left.dark").css({
                    top: -n + "px"
                })
            })
        }
    }
}(), typeof GPH == "undefined" && (GPH = {}), GPH.SplashOfColor = function() {
    var e = new GPH.Slider($("#splash_of_color")),
        t = $doc.find(".background_bw"),
        n = $doc.find(".background_blue"),
        r = $doc.find(".background_red");
    e.$slider_wrap.off(".slider"), e.$slider_wrap.on("sliding.slider", ".slider", function(i) {
        var s = Math.round(e.percentage * 100);
        s >= 0 && s <= 30 && t.css({
            opacity: s / 30
        });
        if (s >= 40 && s <= 70) {
            var o = s - 40;
            n.css({
                opacity: 1 - o / 30
            })
        }
        if (s >= 70 && s <= 100) {
            var o = s - 70;
            r.css({
                opacity: o / 30
            })
        }
    })
}, typeof GPH == "undefined" && (GPH = {}), GPH.LazyLoad = function(e) {
    e && $doc.find(".LOADED").removeClass("LOADED");
    var t = GPH.skrollr.getScrollTop();
    $doc.find(".background_image, .lazy_load").each(function() {
        var e = $(this),
            n = (!is_touch_device || is_retina) && e.data("src1440") ? e.data("src1440") : e.data("src");
        need_at = parseInt(e.data("needed-at"), 10), need_at = need_at == 0 ? 1 : need_at, n && need_at && (t >= need_at - 2e3 && t <= need_at + 3e3 ? e.hasClass("LOADED") || e.attr("src", n).addClass("LOADED") : e.hasClass("LOADED") && e.attr("src", "/assets/blank.gif").removeClass("LOADED"))
    })
}, typeof GPH == "undefined" && (GPH = {}), GPH.UpdateFooterLinks = function() {
    var e = GPH.skrollr.getScrollTop(),
        t = $doc.find("#footer_nav .nav a"),
        n;
    e >= 1200 && e < 4950 ? (n = $doc.find("#footer_nav .nav a:lt(1)"), n.last().hasClass("TRACKED") || (ga_tracking.track_event("Chapter, Scroll, I"), n.addClass("TRACKED"))) : e >= 4950 && e < 8700 ? (n = $doc.find("#footer_nav .nav a:lt(2)"), n.last().hasClass("TRACKED") || (ga_tracking.track_event("Chapter, Scroll, II"), n.addClass("TRACKED"))) : e >= 8700 && e < 14700 ? (n = $doc.find("#footer_nav .nav a:lt(3)"), n.last().hasClass("TRACKED") || (ga_tracking.track_event("Chapter, Scroll, III"), n.addClass("TRACKED"))) : e >= 14700 && e < 17700 ? (n = $doc.find("#footer_nav .nav a:lt(4)"), n.last().hasClass("TRACKED") || (ga_tracking.track_event("Chapter, Scroll, IV"), n.addClass("TRACKED"))) : e >= 17700 && (n = $doc.find("#footer_nav .nav a:lt(5)"), n.last().hasClass("TRACKED") || (ga_tracking.track_event("Chapter, Scroll, V"), n.addClass("TRACKED"))), t.removeClass("active"), n && n.addClass("active")
}, typeof GPH == "undefined" && (GPH = {}), GPH.Events = function() {
    var e = function() {
            var e = GPH.site_header,
                t = GPH.tab_modules.site_header,
                n = t.$tab_contents,
                r, i;
            if (!is_touch_device) {
                var s;
                $doc.scroll(function(t) {
                    s = GPH.skrollr ? GPH.skrollr.getScrollTop() : $doc.scrollTop(), s >= 50 && scroll_percentage < 1 ? (e.hide(), GPH.tab_modules.site_header.hide_tab_contents()) : e.show()
                })
            }
            is_touch_device || ($doc.find("#site_logo, #header, #site_sub_header").mouseenter(function() {
                clearInterval(e.hide_timeout), e.show()
            }), $doc.find("#main_container").mouseenter(function(t) {
                e.hide_timeout = setTimeout(function() {
                    e.hide(), GPH.tab_modules.site_header.hide_tab_contents()
                }, 150)
            })), GPH.tab_modules.site_header.$el.bind("TabModule:Show", function(e) {
                var t = n.find(".tab_content.active"),
                    r = t.height();
                n.css({
                    height: r,
                    opacity: 1
                })
            }), GPH.tab_modules.site_header.$el.bind("TabModule:Hide", function(e) {
                n.css({
                    height: 0,
                    opacity: 0
                }), _.each(t.tabs, function(e) {
                    e.hide()
                })
            }), GPH.tab_modules.site_header.$el.bind("TabModule:Show", function() {
                GPH.tab_modules.site_header.$tab_contents.find(".active .swappable").animate({
                    opacity: 1
                }, 300)
            }), GPH.tab_modules.site_header.$el.bind("TabModule:Hide", function() {
                GPH.tab_modules.site_header.$tab_contents.find(".tab_content .swappable").css({
                    opacity: 0
                })
            })
        },
        t = function() {
            var e = $doc.find("#reservation_flyout"),
                t = function() {
                    e.find(".arrival_input").focus(), e.animate({
                        right: "0"
                    }, 300, function() {
                        s()
                    })
                },
                n = function() {
                    e.animate({
                        right: "-534px"
                    }, 300, function() {
                        i()
                    })
                },
                r = is_touch_device ? "touchstart" : "click",
                i = function() {
                    e.bind(r + ".reservation_open", function(n) {
                        GPH.tab_modules.site_header.hide_tab_contents(), t(), e.unbind(".reservation_open")
                    })
                },
                s = function() {
                    $doc.find("body").bind(r + ".reservation_close", function(e) {
                        if ($(e.target).hasClass("reserve_room") || !$(e.target).parents("#reservation_flyout").length) n(), $doc.find("body").unbind(".reservation_close")
                    })
                };
            i(), $doc.find("form.reserve_form").submit(function(e) {
                var t = $(e.target),
                    n = "https://gc.synxis.com/rez.aspx?Hotel=14305&Chain=5154&locale=en-US&start=availresults&src=gramercy",
                    r = t.find(".arrival_input").val().split("/");
                return departure_date = t.find(".departure_input").val().split("/"), arrival_month = r[0], arrival_day = r[1], arrival_year = r[2], departure_month = departure_date[0], departure_day = departure_date[1], departure_year = departure_date[2], adults = t.find(".guest_a").val(), children = t.find(".guest_c").val(), arrival_month && arrival_day && arrival_year && (n += "&arrive=" + arrival_month.toUpperCase() + "-" + arrival_day + "-" + arrival_year), departure_month && departure_day && departure_year && (n += "&depart=" + departure_month.toUpperCase() + "-" + departure_day + "-" + departure_year), adults != "adults" && (n += "&adult=" + adults), children != "children" && (n += "&children=" + children), window.location = n, !1
            }), $doc.on("click", ".submit_reserve_form", function(e) {
                e.preventDefault(), $(this).parents("form").first().submit()
            })
        };
    return {
        init: function() {
            var n = new GPH.DatePicker($doc.find("#reservation_flyout")),
                r;
            $doc.find(".tab.reserve").bind("click", function() {
                setTimeout(function() {
                    r || (r = new GPH.DatePicker($doc.find("#main_nav_reserve_form")))
                }, 0)
            }), e(), t()
        }
    }
}(), $(function() {
    typeof GPH == "undefined" && (GPH = {}), window.$doc = $(document), window.$win = $(window), window.$body = $($doc.find("body")), window.is_touch_device = "ontouchstart" in document.documentElement, window.is_retina = window.devicePixelRatio > 1, window.scroll_percentage = 0;
    var e = function() {
        var t = $doc.find("#scroll_diamond"),
            n = !1;
        t.find(".inner_scroll_1").animate({
            opacity: 1
        }, 300, function() {
            t.find(".inner_scroll_2").animate({
                opacity: 1
            }, 300, function() {
                t.find(".inner_scroll_3").animate({
                    opacity: 1
                }, 300, function() {
                    t.find(".inner_scroll_1, .inner_scroll_2, .inner_scroll_3").animate({
                        opacity: 0
                    }, 500, function() {
                        setTimeout(function() {
                            n || (n = !0, e())
                        }, 300)
                    })
                })
            })
        })
    };
    is_touch_device ? $doc.find("#scroll_diamond").find(".inner_scroll_1, .inner_scroll_2, .inner_scroll_3").css({
        opacity: 1
    }) : e(), GPH.site_header = new GPH.SiteHeader($("#header")), GPH.tab_modules = {};
    var t;
    $doc.find(".tab_controls").each(function() {
        t = new GPH.TabModule($(this)), GPH.tab_modules[t.id] = t
    }), GPH.Triangles.add_triangles(), GPH.Triangles.adjust_triangle_edges(), is_touch_device && $doc.find(".triangle").remove(), GPH.Events.init(), GPH.skrollr = skrollr.init(), $doc.find("#scroll_diamond").click(function(e) {
        e.preventDefault()
    }), $doc.delegate(".chapter_anchor, #site_logo", "click", function(e) {
        e.preventDefault();
        if (GPH.jumping) return;
        GPH.jumping = !0, $(this).addClass("TRACKED");
        if ($(this).attr("id") == "site_logo") var t = 1;
        else var t = parseInt($(this).attr("href").split("#")[1], 10);
        var n = $("#jump_shim");
        n.css({
            display: "block"
        }).animate({
            opacity: 1
        }, 500, function() {
            GPH.skrollr.setScrollTop(t), setTimeout(function() {
                n.animate({
                    opacity: 0
                }, 500, function() {
                    n.css({
                        display: "none",
                        opacity: 0
                    }), GPH.jumping = !1, GPH.LazyLoad()
                })
            }, 500)
        })
    });
    if (!is_touch_device) {
        GPH.pop_overs = [];
        var n;
        $doc.find(".popover_trigger").each(function() {
            n = new GPH.PopOver($(this)), n.show(), n.hide(), GPH.pop_overs.push(n)
        })
    } else $doc.find(".popover_trigger").click(function(e) {
        e.preventDefault()
    });
    var r = is_touch_device ? "orientationchange" : "resize";
    $win.bind(r, function() {
        is_touch_device || GPH.Triangles.adjust_triangle_edges(), GPH.ResizeBackgrounds(!0), GPH.Expanders.update(), GPH.skrollr.animateTo(GPH.skrollr.getScrollTop())
    }), GPH.skrollr_top = 0, GPH.ResizeBackgrounds(), GPH.LazyLoad(), GPH.Expanders.init(), $doc.find(".initial").removeClass("unrendered").addClass("rendered");
    var i = !1,
        s = function() {
            GPH.UpdateFooterLinks(), GPH.LazyLoad();
            var e = GPH.skrollr.getScrollTop();
            if (i) return;
            e >= 3400 && e <= 3750 && (i = !0, GPH.SplashOfColor())
        },
        o = function() {
            return sp = 100 * GPH.skrollr.getScrollTop() / (2750 - $win.height()) / 100, sp = sp > 1 ? 1 : sp < 0 ? 0 : sp, window.scroll_percentage = sp
        };
    is_touch_device ? $doc.find("#skrollr-body").bind("touchmove", _.throttle(s, 500)) : $win.bind("scroll", function() {
        o(), GPH.skrollr.getScrollTop() > 980 && GPH.skrollr.setScrollTop(980), s()
    }), is_touch_device && ($doc.find(".chapter_diamond.filler, .expendable, .popover_content").remove(), $doc.find(".popover_trigger").removeClass("popover_trigger"))
});