google.maps.__gjsload__("map", function (_) {
    var ms = function (a, b) {
            return "start" == b ? a.o : a.T[b];
        },
        Fia = function (a, b) {
            if (a === b) return !0;
            if (a.byteLength !== b.byteLength) return !1;
            for (var c = 0; c < a.byteLength; c++) if (a[c] !== b[c]) return !1;
            return !0;
        },
        ns = function (a) {
            this.g = null;
            this.i = a;
        },
        os = function (a) {
            if (null == a) throw Error("value must not be null");
            return new ns(a);
        },
        Gia = function (a) {
            _.G(this, a, 3);
        },
        ps = function (a) {
            _.G(this, a, 4);
        },
        Hia = function () {
            var a = _.Pe();
            return _.se(a, 16);
        },
        Iia = function (a, b) {
            return a.g ? new _.Jh(b.g, b.i) : _.Lh(a, _.$k(_.al(a, b)));
        },
        qs = function (a) {
            for (var b = _.Ce(a, 0), c = [], d = 0; d < b; d++) c.push(a.getUrl(d));
            return c;
        },
        Jia = function (a, b) {
            a = qs(new _.Je(a.g.W[7]));
            return _.Ak(a, function (c) {
                return c + "deg=" + b + "&";
            });
        },
        Kia = function (a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) if (e in d && b.call(void 0, d[e], e, a)) return e;
            return -1;
        },
        Lia = function (a) {
            if (!a.g) return null;
            var b = _.te(a.g, 2) || null;
            if (_.Ek(a.g, 11)) {
                a = _.Qk(_.Sk(a.g));
                if (!a || !_.Ek(a, 2)) return null;
                a = new _.Ok(a.W[2]);
                for (var c = 0; c < _.Ce(a, 0); c++) {
                    var d = new _.Nk(_.Ae(a, 0, c));
                    if (26 === d.getType())
                        for (var e = 0; e < _.Ce(d, 1); e++) {
                            var f = new _.Jk(_.Ae(d, 1, e));
                            if ("styles" === f.getKey()) return f.Db();
                        }
                }
            }
            return b;
        },
        Mia = function (a) {
            if (!a.g) return !1;
            var b = _.qe(a.g, 3);
            _.Ek(a.g, 11) && ((a = (a = _.Sk(a.g)) && _.Ek(a, 1) && _.Ek(new ps(a.W[1]), 2) ? new Gia(new ps(a.W[1]).W[2]) : null), (a = !(!a || !_.qe(a, 0))), (b = b || a));
            return b;
        },
        Nia = function (a) {
            try {
                return _.C.JSON.parse(a);
            } catch (b) {}
            a = String(a);
            if (
                /^\s*$/.test(a)
                    ? 0
                    : /^[\],:{}\s\u2028\u2029]*$/.test(
                          a
                              .replace(/\\["\\\/bfnrtu]/g, "@")
                              .replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]")
                              .replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, "")
                      )
            )
                try {
                    return eval("(" + a + ")");
                } catch (b) {}
            throw Error("Invalid JSON string: " + a);
        },
        Oia = function (a) {
            if (a.g) {
                a: {
                    a = a.g.responseText;
                    if (_.C.JSON)
                        try {
                            var b = _.C.JSON.parse(a);
                            break a;
                        } catch (c) {}
                    b = Nia(a);
                }
                return b;
            }
        },
        Pia = function (a) {
            var b;
            _.Ha(function (c) {
                1 != c.g && ((b = c.i), b.g.i(a, 0));
                c.g = 0;
            });
        },
        Qia = function (a, b, c) {
            var d = a.mc.g,
                e = a.mc.i,
                f = a.Eb.g,
                g = a.Eb.i,
                h = a.toSpan(),
                k = h.lat();
            h = h.lng();
            a.Sf() && (g += 360);
            d -= b * k;
            e += b * k;
            f -= b * h;
            g += b * h;
            c && ((a = Math.min(k, h) / c), (a = Math.max(1e-6, a)), (d = a * Math.floor(d / a)), (e = a * Math.ceil(e / a)), (f = a * Math.floor(f / a)), (g = a * Math.ceil(g / a)));
            if ((a = 360 <= g - f)) (f = -180), (g = 180);
            return new _.zg(new _.yf(d, f, a), new _.yf(e, g, a));
        },
        rs = function () {
            this.Ma = new _.sh();
        },
        Ria = function (a) {
            _.cca(a.Ma, function (b) {
                b(null);
            });
        },
        ss = function (a) {
            this.g = new rs();
            this.i = a;
        },
        Sia = function (a, b) {
            return (a.get("featureRects") || []).some(function (c) {
                return c.contains(b);
            });
        },
        ts = function (a, b) {
            if (!b) return 0;
            var c = 0,
                d = a.mc,
                e = a.Eb;
            b = _.A(b);
            for (var f = b.next(); !f.done; f = b.next()) {
                var g = f.value;
                if (a.intersects(g)) {
                    f = g.mc;
                    var h = g.Eb;
                    if (g.Tg(a)) return 1;
                    g = e.contains(h.g) && h.contains(e.g) && !e.equals(h) ? _.wg(h.g, e.i) + _.wg(e.g, h.i) : _.wg(e.contains(h.g) ? h.g : e.g, e.contains(h.i) ? h.i : e.i);
                    c += g * (Math.min(d.i, f.i) - Math.max(d.g, f.g));
                }
            }
            return (c /= (d.isEmpty() ? 0 : d.i - d.g) * _.xg(e));
        },
        Tia = function () {
            return function (a, b) {
                if (a && b) return 0.9 <= ts(a, b);
            };
        },
        Via = function () {
            var a = Uia,
                b = !1;
            return function (c, d) {
                if (c && d) {
                    if (0.999999 > ts(c, d)) return (b = !1);
                    c = Qia(c, (a - 1) / 2);
                    return 0.999999 < ts(c, d) ? (b = !0) : b;
                }
            };
        },
        Wia = function (a, b) {
            var c = null;
            a &&
                a.some(function (d) {
                    (d = d.Ch(b)) && 68 === d.getType() && (c = d);
                    return !!c;
                });
            return c;
        },
        Xia = function (a, b, c) {
            var d = null;
            if ((b = Wia(b, c))) d = b;
            else if (a && ((d = new _.Yl()), _.Zl(d, a.type), a.params)) for (var e in a.params) (b = _.$l(d)), _.Xl(b, e), (c = a.params[e]) && (b.W[1] = c);
            return d;
        },
        Yia = function (a, b, c, d, e, f, g, h) {
            var k = new _.fr();
            _.gr(k, a, b, "hybrid" != c);
            null != c && _.Fha(k, c, 0, d);
            g &&
                g.forEach(function (l) {
                    return k.Mb(l, c, !1);
                });
            e &&
                _.Nb(e, function (l) {
                    return _.hr(k, l);
                });
            f && _.sq(f, _.Hm(_.dr(k.g)));
            h && _.Hha(k, h);
            return k.g;
        },
        Zia = function (a, b, c, d, e) {
            var f = [],
                g = [];
            (b = Xia(b, d, a)) && f.push(b);
            if (c) {
                var h = _.sq(c, void 0);
                f.push(h);
            }
            d &&
                d.forEach(function (q) {
                    (q = _.Cha(q)) && g.push(q);
                });
            if (e) {
                if (e.Ul) var k = e.Ul;
                if (e.paintExperimentIds) var l = e.paintExperimentIds;
                if ((c = e.Ys) && !_.oc(c))
                    for (h || ((h = new _.Yl()), _.Zl(h, 26), f.push(h)), c = _.A(_.u(Object, "entries").call(Object, c)), d = c.next(); !d.done; d = c.next()) {
                        b = _.A(d.value);
                        d = b.next().value;
                        b = b.next().value;
                        var m = _.$l(h);
                        _.Xl(m, d);
                        m.W[1] = b;
                    }
                var p = e.stylers;
                p &&
                    p.length &&
                    ((f = f.filter(function (q) {
                        return !p.some(function (r) {
                            return r.getType() === q.getType();
                        });
                    })),
                    f.push.apply(f, _.oa(p)));
            }
            return { mapTypes: _.nia[a], stylers: f, dh: g, paintExperimentIds: l, Uf: k };
        },
        us = function (a, b, c, d, e, f, g, h, k, l, m, p, q, r, t) {
            this.H = a;
            this.j = b;
            this.projection = c;
            this.maxZoom = d;
            this.tileSize = new _.Tg(256, 256);
            this.name = e;
            this.alt = f;
            this.$ = g;
            this.heading = r;
            this.Ek = _.af(r);
            this.Uj = h;
            this.__gmsd = k;
            this.mapTypeId = l;
            this.V = void 0 === t ? !1 : t;
            this.g = null;
            this.O = m;
            this.o = p;
            this.N = q;
            this.triggersTileLoadEvent = !0;
            this.i = _.wh({});
            this.T = null;
        },
        vs = function (a, b, c, d, e, f) {
            us.call(this, a.H, a.j, a.projection, a.maxZoom, a.name, a.alt, a.$, a.Uj, a.__gmsd, a.mapTypeId, a.O, a.o, a.N, a.heading, a.V);
            this.T = Zia(this.mapTypeId, this.__gmsd, b, e, f);
            if (this.j) {
                a = this.i;
                var g = a.set,
                    h = this.o,
                    k = this.N,
                    l = this.mapTypeId,
                    m = this.O,
                    p = [],
                    q = Xia(this.__gmsd, e, l);
                q && p.push(q);
                q = new _.Yl();
                _.Zl(q, 37);
                _.Xl(_.$l(q), "smartmaps");
                p.push(q);
                b = { Pe: Yia(h, k, l, m, p, b, e, f), uh: c, scale: d };
                g.call(a, b);
            }
        },
        $ia = function (a, b, c) {
            var d = document.createElement("div"),
                e = document.createElement("div"),
                f = document.createElement("span");
            f.innerText = "For development purposes only";
            f.style.i = "break-all";
            e.appendChild(f);
            f = e.style;
            f.color = "white";
            f.fontFamily = "Roboto, sans-serif";
            f.fontSize = "14px";
            f.textAlign = "center";
            f.position = "absolute";
            f.left = "0";
            f.top = "50%";
            f.transform = "translateY(-50%)";
            f.msTransform = "translateY(-50%)";
            f.maxHeight = "100%";
            f.width = "100%";
            f.overflow = "hidden";
            d.appendChild(e);
            e = d.style;
            e.backgroundColor = "rgba(0, 0, 0, 0.5)";
            e.position = "absolute";
            e.overflow = "hidden";
            e.top = "0";
            e.left = "0";
            e.width = b + "px";
            e.height = c + "px";
            e.zIndex = 100;
            a.appendChild(d);
        },
        ws = function (a, b, c, d, e) {
            e = void 0 === e ? {} : e;
            this.g = a;
            this.i = b.slice(0);
            this.j = e.$d || _.Ta;
            this.loaded = _.z.Promise.all(
                b.map(function (f) {
                    return f.loaded;
                })
            ).then(function () {});
            d && $ia(this.g, c.Na, c.Pa);
        },
        xs = function (a, b) {
            this.Yb = a[0].Yb;
            this.i = a;
            this.Ee = a[0].Ee;
            this.g = void 0 === b ? !1 : b;
        },
        ys = function (a, b, c, d, e, f, g, h) {
            var k = this;
            this.i = a;
            this.O = _.Ak(b || [], function (l) {
                return l.replace(/&$/, "");
            });
            this.V = c;
            this.T = d;
            this.g = e;
            this.N = f;
            this.j = g;
            this.loaded = new _.z.Promise(function (l) {
                k.H = l;
            });
            this.o = !1;
            h && ((a = this.Sb()), $ia(a, f.size.Na, f.size.Pa));
            aja(this);
        },
        aja = function (a) {
            var b = a.i.bc,
                c = b.Ua,
                d = b.Va,
                e = b.kb;
            if (a.j && ((b = _.Tl(_.mo(a.N, { Ua: c + 0.5, Va: d + 0.5, kb: e }), null)), !Sia(a.j, b))) {
                a.o = !0;
                a.j.Ef().addListenerOnce(function () {
                    return aja(a);
                });
                return;
            }
            a.o = !1;
            b = 2 == a.g || 4 == a.g ? a.g : 1;
            b = Math.min(1 << e, b);
            for (var f = a.V && 4 != b, g = e, h = b; 1 < h; h /= 2) g--;
            (c = a.T({ Ua: c, Va: d, kb: e }))
                ? ((c = _.gn(_.gn(_.gn(new _.Xm(_.Mha(a.O, c)), "x", c.Ua), "y", c.Va), "z", g)), 1 != b && _.gn(c, "w", a.N.size.Na / b), f && (b *= 2), 1 != b && _.gn(c, "scale", b), a.i.setUrl(c.toString()).then(a.H))
                : a.i.setUrl("").then(a.H);
        },
        bja = function (a, b, c, d, e, f, g, h) {
            this.i = a || [];
            this.O = new _.Tg(e.size.Na, e.size.Pa);
            this.T = b;
            this.j = c;
            this.g = d;
            this.Ee = 1;
            this.Yb = e;
            this.o = f;
            this.H = void 0 === g ? !1 : g;
            this.N = h;
        },
        cja = function (a, b) {
            this.i = a;
            this.g = b;
            this.Yb = _.so;
            this.Ee = 1;
        },
        dja = function (a, b, c, d, e, f, g) {
            this.i = void 0 === g ? !1 : g;
            this.g = e;
            this.o = new _.Ih();
            this.j = _.De(c);
            this.H = _.Ee(c);
            this.O = _.se(b, 14);
            this.N = _.se(b, 15);
            this.T = new _.ada(a, b, c);
            this.$ = f;
            this.V = function () {
                _.Zg(d, "Sni");
            };
        },
        zs = function (a, b, c, d) {
            d = void 0 === d ? { Se: null } : d;
            var e = _.af(d.heading),
                f = (("hybrid" == b && !e) || "terrain" == b || "roadmap" == b) && 0 != d.Bu,
                g = d.Se;
            if ("satellite" == b) {
                var h;
                e ? (h = Jia(a.T, d.heading || 0)) : (h = qs(new _.Je(a.T.g.W[1])));
                b = new _.qo({ Na: 256, Pa: 256 }, e ? 45 : 0, d.heading || 0);
                return new bja(h, f && 1 < _.yn(), _.pr(d.heading), (g && g.scale) || null, b, e ? a.$ : null, !!d.Nq, a.V);
            }
            return new _.or(_.cl(a.T), "Xin l\u1ed7i, ch\u00fang t\u00f4i kh\u00f4ng c\u00f3 h\u00ecnh \u1ea3nh \u1edf \u0111\u00e2y.", f && 1 < _.yn(), _.pr(d.heading), c, g, d.heading, a.V);
        },
        eja = function (a) {
            function b(c, d) {
                if (!d || !d.Pe) return d;
                var e = new _.yq(_.ufa(d.Pe));
                _.Zl(_.Hm(_.dr(e)), c);
                return { scale: d.scale, uh: d.uh, Pe: e };
            }
            return function (c) {
                var d = zs(a, "roadmap", a.g, { Bu: !1, Se: b(3, c.Se().get()) }),
                    e = zs(a, "roadmap", a.g, { Se: b(18, c.Se().get()) });
                d = new xs([d, e]);
                c = zs(a, "roadmap", a.g, { Se: c.Se().get() });
                return new cja(d, c);
            };
        },
        fja = function (a) {
            return function (b, c) {
                var d = b.Se().get(),
                    e = zs(a, "satellite", null, { heading: b.heading, Se: d, Nq: !1 });
                b = zs(a, "hybrid", a.g, { heading: b.heading, Se: d });
                return new xs([e, b], c);
            };
        },
        gja = function (a, b) {
            return new us(
                fja(a),
                a.g,
                "number" === typeof b ? new _.Ql(b) : a.o,
                "number" === typeof b ? 21 : 22,
                "K\u1ebft h\u1ee3p",
                "Hi\u1ec3n th\u1ecb h\u00ecnh \u1ea3nh c\u00f3 t\u00ean ph\u1ed1",
                _.Ir.hybrid,
                "m@" + a.O,
                { type: 68, params: { set: "RoadmapSatellite" } },
                "hybrid",
                a.N,
                a.j,
                a.H,
                b,
                a.i
            );
        },
        hja = function (a) {
            return function (b, c) {
                return zs(a, "satellite", null, { heading: b.heading, Se: b.Se().get(), Nq: c });
            };
        },
        ija = function (a, b) {
            var c = "number" === typeof b;
            return new us(
                hja(a),
                null,
                "number" === typeof b ? new _.Ql(b) : a.o,
                c ? 21 : 22,
                "V\u1ec7 tinh",
                "Hi\u1ec3n th\u1ecb h\u00ecnh \u1ea3nh qua v\u1ec7 tinh",
                c ? "a" : _.Ir.satellite,
                null,
                null,
                "satellite",
                a.N,
                a.j,
                a.H,
                b,
                a.i
            );
        },
        jja = function (a, b) {
            return function (c) {
                return zs(a, b, a.g, { Se: c.Se().get() });
            };
        },
        kja = function (a, b, c) {
            c = void 0 === c ? {} : c;
            var d = [0, 90, 180, 270];
            if ("hybrid" == b) for (b = gja(a), b.g = {}, d = _.A(d), c = d.next(); !c.done; c = d.next()) (c = c.value), (b.g[c] = gja(a, c));
            else if ("satellite" == b) for (b = ija(a), b.g = {}, d = _.A(d), c = d.next(); !c.done; c = d.next()) (c = c.value), (b.g[c] = ija(a, c));
            else
                b =
                    "roadmap" == b && 1 < _.yn() && c.pv
                        ? new us(eja(a), a.g, a.o, 22, "B\u1ea3n \u0111\u1ed3", "Hi\u1ec3n th\u1ecb b\u1ea3n \u0111\u1ed3 ph\u1ed1", _.Ir.roadmap, "m@" + a.O, { type: 68, params: { set: "Roadmap" } }, "roadmap", a.N, a.j, a.H, void 0, a.i)
                        : "terrain" == b
                        ? new us(
                              jja(a, "terrain"),
                              a.g,
                              a.o,
                              21,
                              "\u0110\u1ecba h\u00ecnh",
                              "Hi\u1ec3n th\u1ecb b\u1ea3n \u0111\u1ed3 ph\u1ed1 v\u1edbi \u0111\u1ecba h\u00ecnh",
                              _.Ir.terrain,
                              "r@" + a.O,
                              { type: 68, params: { set: "Terrain" } },
                              "terrain",
                              a.N,
                              a.j,
                              a.H,
                              void 0,
                              a.i
                          )
                        : new us(
                              jja(a, "roadmap"),
                              a.g,
                              a.o,
                              22,
                              "B\u1ea3n \u0111\u1ed3",
                              "Hi\u1ec3n th\u1ecb b\u1ea3n \u0111\u1ed3 ph\u1ed1",
                              _.Ir.roadmap,
                              "m@" + a.O,
                              { type: 68, params: { set: "Roadmap" } },
                              "roadmap",
                              a.N,
                              a.j,
                              a.H,
                              void 0,
                              a.i
                          );
            return b;
        },
        lja = function (a) {
            if (!b) {
                var b = document.createElement("div");
                b.style.pointerEvents = "none";
                b.style.width = "100%";
                b.style.height = "100%";
                b.style.boxSizing = "border-box";
                b.style.position = "absolute";
                b.style.zIndex = 1000002;
                b.style.opacity = 0;
                b.style.border = "2px solid #1a73e8";
            }
            new _.Dn(a, "focus", function () {
                b.style.opacity = _.Sr ? (_.tr(a, ":focus-visible") ? 1 : 0) : !1 === _.Rr ? 0 : 1;
            });
            new _.Dn(a, "blur", function () {
                b.style.opacity = 0;
            });
            return b;
        },
        mja = function (a) {
            _.G(this, a, 2);
        },
        As = function (a) {
            _.G(this, a, 14);
        },
        nja = function (a) {
            Bs || ((Bs = { oa: "mu4sesbebbeesb" }), (Bs.Da = [_.Jl()]));
            var b = Bs;
            return _.wi.g(a.Kb(), b);
        },
        Cs = function (a) {
            _.G(this, a, 2);
        },
        Ds = function (a) {
            _.G(this, a, 2);
        },
        Es = function (a) {
            _.G(this, a, 4);
        },
        Fs = function (a) {
            _.G(this, a, 1);
        },
        Gs = function (a) {
            _.G(this, a, 8);
        },
        pja = function (a) {
            this.g = a;
            this.i = _.nn("p", a);
            this.o = 0;
            _.Mm(a, "gm-style-pbc");
            _.Mm(this.i, "gm-style-pbt");
            _.im(oja, a);
            a.style.transitionDuration = "0";
            a.style.opacity = 0;
            _.wn(a);
        },
        qja = function (a, b) {
            var c = _.qk.V ? "S\u1eed d\u1ee5ng \u2318 + cu\u1ed9n \u0111\u1ec3 thu ph\u00f3ng b\u1ea3n \u0111\u1ed3" : "S\u1eed d\u1ee5ng ctrl + cu\u1ed9n \u0111\u1ec3 thu ph\u00f3ng b\u1ea3n \u0111\u1ed3";
            a.i.textContent = (void 0 === b ? 0 : b) ? c : "S\u1eed d\u1ee5ng hai ng\u00f3n tay \u0111\u1ec3 di chuy\u1ec3n b\u1ea3n \u0111\u1ed3";
            a.g.style.transitionDuration = "0.3s";
            a.g.style.opacity = 1;
        },
        rja = function (a) {
            a.g.style.transitionDuration = "0.8s";
            a.g.style.opacity = 0;
        },
        sja = function () {
            var a = window.innerWidth / (document.body.scrollWidth + 1);
            return 0.95 > window.innerHeight / (document.body.scrollHeight + 1) || 0.95 > a || _.Aga();
        },
        tja = function (a, b, c, d) {
            return 0 == b ? "none" : "none" == c || "greedy" == c || "zoomaroundcenter" == c ? c : d ? "greedy" : "cooperative" == c || a() ? "cooperative" : "greedy";
        },
        uja = function (a) {
            return new _.Cn([a.draggable, a.av, a.hm], _.zk(tja, sja));
        },
        wja = function (a, b, c, d) {
            var e = this;
            this.g = a;
            this.o = b;
            this.N = c.Bf;
            this.O = d;
            this.H = 0;
            this.j = null;
            this.i = !1;
            _.ho(c.Gh, {
                Sd: function (f) {
                    Hs(e, "mousedown", f.coords, f.Ib);
                },
                ii: function (f) {
                    e.o.Zl() || ((e.j = f), 5 < Date.now() - e.H && vja(e));
                },
                be: function (f) {
                    Hs(e, "mouseup", f.coords, f.Ib);
                },
                onClick: function (f) {
                    var g = f.coords,
                        h = f.event;
                    f = f.Ni;
                    3 === h.button ? f || Hs(e, "rightclick", g, h.Ib) : f ? Hs(e, "dblclick", g, h.Ib, _.Gn("dblclick", g, h.Ib)) : Hs(e, "click", g, h.Ib, _.Gn("click", g, h.Ib));
                },
                Ei: {
                    hi: function (f, g) {
                        e.i || ((e.i = !0), Hs(e, "dragstart", f.Jd, g.Ib));
                    },
                    Gj: function (f, g) {
                        var h = e.i ? "drag" : "mousemove";
                        Hs(e, h, f.Jd, g.Ib, _.Gn(h, f.Jd, g.Ib));
                    },
                    Ti: function (f, g) {
                        e.i && ((e.i = !1), Hs(e, "dragend", f, g.Ib));
                    },
                },
                Fj: function (f) {
                    _.On(f);
                    Hs(e, "contextmenu", f.coords, f.Ib);
                },
            }).Zi(!0);
            new _.En(c.Bf, c.Gh, {
                Fk: function (f) {
                    return Hs(e, "mouseout", f, f);
                },
                Gk: function (f) {
                    return Hs(e, "mouseover", f, f);
                },
            });
        },
        vja = function (a) {
            if (a.j) {
                var b = a.j;
                xja(a, "mousemove", b.coords, b.Ib);
                a.j = null;
                a.H = Date.now();
            }
        },
        Hs = function (a, b, c, d, e) {
            vja(a);
            xja(a, b, c, d, e);
        },
        xja = function (a, b, c, d, e) {
            var f = e || d,
                g = a.o.Pf(c),
                h = _.Tl(g, a.g.getProjection()),
                k = a.N.getBoundingClientRect();
            c = new _.Fn(h, f, new _.M(c.clientX - k.left, c.clientY - k.top), new _.M(g.g, g.i));
            var l = !!d && !!d.touches,
                m = !!d && "touch" === d.pointerType,
                p = !!d && !!window.MSPointerEvent && d.pointerType === window.MSPointerEvent.MSPOINTER_TYPE_TOUCH;
            f = a.g.__gm.o;
            g = b;
            h = f.j;
            var q = c.domEvent && _.Tk(c.domEvent);
            if (f.g) {
                k = f.g;
                var r = f.o;
            } else if ("mouseout" == g || q) r = k = null;
            else {
                for (var t = 0; (k = h[t++]); ) {
                    var v = c.Tb,
                        w = c.latLng;
                    (r = k.j(c, !1)) && !k.i(g, r) && ((r = null), (c.Tb = v), (c.latLng = w));
                    if (r) break;
                }
                if (!r && (l || m || p)) for (l = 0; (k = h[l++]) && ((m = c.Tb), (p = c.latLng), (r = k.j(c, !0)) && !k.i(g, r) && ((r = null), (c.Tb = m), (c.latLng = p)), !r); );
            }
            if (k != f.i || r != f.H) f.i && f.i.handleEvent("mouseout", c, f.H), (f.i = k), (f.H = r), k && k.handleEvent("mouseover", c, r);
            k ? ("mouseover" == g || "mouseout" == g ? (r = !1) : (k.handleEvent(g, c, r), (r = !0))) : (r = !!q);
            if (r) d && e && _.Tk(e) && _.Uf(d);
            else {
                a.g.__gm.set("cursor", a.g.get("draggableCursor"));
                ("dragstart" !== b && "drag" !== b && "dragend" !== b) || _.I.trigger(a.g.__gm, b, c);
                if ("none" === a.O.get()) {
                    if ("dragstart" === b || "dragend" === b) return;
                    "drag" === b && (b = "mousemove");
                }
                "dragstart" === b || "drag" === b || "dragend" === b ? _.I.trigger(a.g, b) : _.I.trigger(a.g, b, c);
            }
        },
        Is = function (a, b, c) {
            function d() {
                var p = a.__gm.get("baseMapType");
                p && !p.Ek && (0 !== a.getTilt() && a.setTilt(0), 0 != a.getHeading() && a.setHeading(0));
                var q = Is.Gv(a.getDiv());
                q.width -= e;
                q.width = Math.max(1, q.width);
                q.height -= f;
                q.height = Math.max(1, q.height);
                p = a.getProjection();
                q = Is.Hv(p, b, q);
                var r = Is.Nv(b, p);
                if (_.af(q) && r) {
                    var t = _.Lh(_.Kh(q, a.getTilt() || 0, a.getHeading() || 0), { Na: g / 2, Pa: h / 2 });
                    r = _.Xk(_.Sl(r, p), t);
                    r = _.Tl(r, p);
                    null == r && console.warn("Unable to calculate new map center.");
                    a.setCenter(r);
                    a.setZoom(q);
                }
            }
            var e = 80,
                f = 80,
                g = 0,
                h = 0;
            if ("number" === typeof c) e = f = 2 * c - 0.01;
            else if (c) {
                var k = c.left || 0,
                    l = c.right || 0,
                    m = c.bottom || 0;
                c = c.top || 0;
                e = k + l - 0.01;
                f = c + m - 0.01;
                h = c - m;
                g = k - l;
            }
            a.getProjection() ? d() : _.I.addListenerOnce(a, "projection_changed", d);
        },
        Dja = function (a, b, c, d, e, f) {
            var g = yja,
                h = this;
            this.O = a;
            this.N = b;
            this.i = c;
            this.j = d;
            this.H = g;
            e.addListener(function () {
                return zja(h);
            });
            f.addListener(function () {
                return zja(h);
            });
            this.o = f;
            this.g = [];
            _.I.addListener(c, "insert_at", function (k) {
                Aja(h, k);
            });
            _.I.addListener(c, "remove_at", function (k) {
                var l = h.g[k];
                l && (h.g.splice(k, 1), Bja(h), l.clear());
            });
            _.I.addListener(c, "set_at", function (k) {
                var l = h.i.getAt(k);
                Cja(h, l);
                k = h.g[k];
                (l = Js(h, l)) ? _.oo(k, l) : k.clear();
            });
            this.i.forEach(function (k, l) {
                Aja(h, l);
            });
        },
        zja = function (a) {
            for (var b = a.g.length, c = 0; c < b; ++c) _.oo(a.g[c], Js(a, a.i.getAt(c)));
        },
        Aja = function (a, b) {
            var c = a.i.getAt(b);
            Cja(a, c);
            var d = a.H(a.N, b, a.j, function (e) {
                var f = a.i.getAt(b);
                !e && f && _.I.trigger(f, "tilesloaded");
            });
            _.oo(d, Js(a, c));
            a.g.splice(b, 0, d);
            Bja(a, b);
        },
        Bja = function (a, b) {
            for (var c = 0; c < a.g.length; ++c) c != b && a.g[c].setZIndex(c);
        },
        Cja = function (a, b) {
            if (b) {
                var c = "Oto";
                switch (b.mapTypeId) {
                    case "roadmap":
                        c = "Otm";
                        break;
                    case "satellite":
                        c = "Otk";
                        break;
                    case "hybrid":
                        c = "Oth";
                        break;
                    case "terrain":
                        c = "Otr";
                }
                b instanceof _.rj && (c = "Ots");
                a.O(c);
            }
        },
        Js = function (a, b) {
            return b ? (b instanceof _.qj ? b.se(a.o.get()) : new _.to(b)) : null;
        },
        yja = function (a, b, c, d) {
            return new _.no(function (e, f) {
                e = new _.ko(a, b, c, _.Fo(e), f, { vk: !0 });
                c.Mb(e);
                return e;
            }, d);
        },
        Ks = function (a, b) {
            this.g = a;
            this.i = b;
        },
        Eja = function (a, b, c, d, e) {
            return d
                ? new Ks(a, function () {
                      return e;
                  })
                : _.ei[23]
                ? new Ks(a, function (f) {
                      var g = c.get("scale");
                      return 2 == g || 4 == g ? b : f;
                  })
                : a;
        },
        Fja = function (a) {
            var b;
            _.Ha(function (c) {
                if (1 == c.g) return (c.N = 2), _.yk(c, a, 4);
                2 != c.g ? ((b = c.i) && Pia(b), (c.g = 0), (c.N = 0)) : ((c.N = 0), (c.o = null), (c.g = 0));
            });
        },
        Gja = function (a, b, c, d) {
            function e(f, g, h) {
                var k = a.getCenter(),
                    l = a.getZoom(),
                    m = a.getProjection();
                if (k && null != l && m) {
                    var p = a.getTilt() || 0,
                        q = a.getHeading() || 0,
                        r = _.Kh(l, p, q);
                    f = _.Wk(_.Sl(k, m), _.Lh(r, { Na: f, Pa: g }));
                    c.ee({ center: f, zoom: l, heading: q, tilt: p }, h);
                }
            }
            _.I.addListener(b, "panby", function (f, g) {
                e(f, g, !0);
            });
            _.I.addListener(b, "panbynow", function (f, g) {
                e(f, g, !1);
            });
            _.I.addListener(b, "panbyfraction", function (f, g) {
                var h = c.getBoundingClientRect();
                f *= h.right - h.left;
                g *= h.bottom - h.top;
                e(f, g, !0);
            });
            _.I.addListener(b, "pantolatlngbounds", function (f, g) {
                _.hha(a, c, f, g);
            });
            _.I.addListener(b, "panto", function (f) {
                if (f instanceof _.yf) {
                    var g = a.getCenter(),
                        h = a.getZoom(),
                        k = a.getProjection();
                    g && null != h && k ? ((f = _.Sl(f, k)), (g = _.Sl(g, k)), d.ee({ center: _.Zk(d.Jc.He, f, g), zoom: h, heading: a.getHeading() || 0, tilt: a.getTilt() || 0 })) : a.setCenter(f);
                } else throw Error("panTo: latLng must be of type LatLng");
            });
        },
        Hja = function (a, b, c) {
            _.I.addListener(b, "tiltrotatebynow", function (d, e) {
                var f = a.getCenter(),
                    g = a.getZoom(),
                    h = a.getProjection();
                if (f && null != g && h) {
                    var k = a.getTilt() || 0,
                        l = a.getHeading() || 0;
                    c.ee({ center: _.Sl(f, h), zoom: g, heading: l + d, tilt: k + e }, !1);
                }
            });
        },
        Jja = function (a, b, c) {
            this.i = a;
            this.g = b;
            this.j = function () {
                return new _.Go();
            };
            b ? ((a = _.bda(c, b)) ? Ls(this, a, os(_.te(_.Ge, 40))) : Ija(this)) : Ls(this, null, null);
        },
        Ls = function (a, b, c) {
            a.i.__gm.va(new _.am(b, c));
        },
        Ija = function (a) {
            var b = a.i.__gm,
                c = b.get("blockingLayerCount") || 0;
            b.set("blockingLayerCount", c + 1);
            c = "https://maps.googleapis.com/maps/api/mapsjs/mapConfigs:batchGet?map_ids=" + (a.g + "&language=" + _.De(_.Fe(_.Ge)) + "&region=" + _.Ee(_.Fe(_.Ge)) + "&alt=protojson");
            var d = "Google Maps JavaScript API: Unable to fetch configuration for mapId " + a.g,
                e = a.j();
            e.listen("complete", function () {
                if (_.Ko(e)) {
                    var f = Oia(e),
                        g = new mja(f);
                    f = new _.Ie(_.Ae(g, 0, 0));
                    g = os(_.te(g, 1));
                    f && f.Kb().length ? Ls(a, f, g) : (console.error(d), Ls(a, null, null));
                } else console.error(d), Ls(a, null, null);
                b.V.then(function () {
                    var h = b.get("blockingLayerCount") || 0;
                    b.set("blockingLayerCount", h - 1);
                });
            });
            e.send(c);
        },
        Kja = function () {
            var a = null,
                b = null,
                c = !1;
            return function (d, e, f) {
                if (f) return null;
                if (b == d && c == e) return a;
                b = d;
                c = e;
                a = null;
                d instanceof _.qj ? (a = d.se(e)) : d && (a = new _.to(d));
                return a;
            };
        },
        Ms = function (a, b, c, d, e) {
            this.j = a;
            this.N = !1;
            d = _.No(this, "apistyle");
            var f = _.No(this, "authUser"),
                g = _.No(this, "baseMapType"),
                h = _.No(this, "scale"),
                k = _.No(this, "tilt");
            a = _.No(this, "blockingLayerCount");
            this.g = _.xh();
            this.i = null;
            var l = (0, _.lb)(this.Lu, this);
            b = new _.Cn([d, f, b, g, h, k, e], l);
            _.Mo(this, "tileMapType", b);
            this.H = new _.Cn([b, c, a], Kja());
        },
        Lja = function (a, b) {
            var c = a.__gm;
            b = new Ms(a.mapTypes, c.i, b, _.zk(_.Zg, a), c.Hh);
            b.bindTo("heading", a);
            b.bindTo("mapTypeId", a);
            _.ei[23] && b.bindTo("scale", a);
            b.bindTo("apistyle", c);
            b.bindTo("authUser", c);
            b.bindTo("tilt", c);
            b.bindTo("blockingLayerCount", c);
            return b;
        },
        Ns = function () {},
        Mja = function (a, b) {
            this.g = a;
            this.H = b;
            this.o = 0;
            this.i = this.j = void 0;
        },
        Os = function () {
            this.g = this.i = !1;
        },
        Ps = function (a) {
            if (a.get("mapTypeId")) {
                var b = a.set;
                var c = a.get("zoom") || 0,
                    d = a.get("desiredTilt");
                if (a.g) var e = 0;
                else if (((e = Nja(a)), null == e)) e = null;
                else {
                    var f = _.af(d) && 22.5 < d;
                    c = !_.af(d) && 18 <= c;
                    e = e && (f || c) ? 45 : 0;
                }
                b.call(a, "actualTilt", e);
                a.set("aerialAvailableAtZoom", Nja(a));
            }
        },
        Nja = function (a) {
            var b = a.get("mapTypeId"),
                c = a.get("zoom");
            return !a.g && ("satellite" == b || "hybrid" == b) && 12 <= c && a.get("aerial");
        },
        Oja = function (a, b, c) {
            if (!a.isEmpty()) {
                var d = function (k) {
                        return _.Zg(b, k);
                    },
                    e = Lia(a);
                e && d("MIdRs");
                var f = _.Zfa(a, d),
                    g = _.aga(a),
                    h = g;
                g && g.stylers && (h = _.u(Object, "assign").call(Object, {}, g, { stylers: [] }));
                (e || f.length || g) &&
                    _.I.xc(b, "maptypeid_changed", function () {
                        var k = c.i.get();
                        "roadmap" === b.get("mapTypeId")
                            ? (c.set("apistyle", e || null),
                              c.set("hasCustomStyles", !!e),
                              f.forEach(function (l) {
                                  k = k.Lf(l);
                              }),
                              c.i.set(k),
                              c.Hh.set(g))
                            : (c.set("apistyle", null),
                              c.set("hasCustomStyles", !1),
                              f.forEach(function (l) {
                                  k = k.Mg(l);
                              }),
                              c.i.set(k),
                              c.Hh.set(h));
                    });
            }
        },
        Rs = function (a, b) {
            var c = this;
            this.o = !1;
            var d = new _.Di(function () {
                c.notify("bounds");
                Pja(c);
            }, 0);
            this.map = a;
            this.N = !1;
            this.i = null;
            this.j = function () {
                _.Ei(d);
            };
            this.g = this.H = !1;
            this.Jc = b(function (e, f) {
                c.N = !0;
                var g = c.map.getProjection();
                (c.i && f.min.equals(c.i.min) && f.max.equals(c.i.max)) || ((c.i = f), c.j());
                if (!c.g) {
                    c.g = !0;
                    try {
                        var h = _.Tl(e.center, g, !0),
                            k = c.map.getCenter();
                        !h || (k && h.equals(k)) || c.map.setCenter(h);
                        var l = Math.round(e.zoom);
                        c.map.getZoom() != l && c.map.setZoom(l);
                    } finally {
                        c.g = !1;
                    }
                }
            });
            a.bindTo("bounds", this, void 0, !0);
            a.addListener("center_changed", function () {
                return Qs(c);
            });
            a.addListener("zoom_changed", function () {
                return Qs(c);
            });
            a.addListener("projection_changed", function () {
                return Qs(c);
            });
            a.addListener("tilt_changed", function () {
                return Qs(c);
            });
            a.addListener("heading_changed", function () {
                return Qs(c);
            });
            Qs(this);
        },
        Qs = function (a) {
            if (!a.H) {
                a.j();
                var b = a.Jc.zf(),
                    c = a.map.getTilt() || 0,
                    d = !b || b.tilt != c,
                    e = a.map.getHeading() || 0,
                    f = !b || b.heading != e;
                if (!a.g || d || f) {
                    a.H = !0;
                    try {
                        var g = a.map.getProjection(),
                            h = a.map.getCenter(),
                            k = a.map.getZoom();
                        Math.round(k) !== k && "number" === typeof k && _.Zg(a.map, "BSzwf");
                        if (g && h && null != k && !isNaN(h.lat()) && !isNaN(h.lng())) {
                            var l = _.Sl(h, g),
                                m = !b || b.zoom != k || d || f;
                            a.Jc.ee({ center: l, zoom: k, tilt: c, heading: e }, a.N && m);
                        }
                    } finally {
                        a.H = !1;
                    }
                }
            }
        },
        Pja = function (a) {
            if (!a.o) {
                a.o = !0;
                var b = function () {
                    a.Jc.Zl() ? _.Bo(b) : ((a.o = !1), _.I.trigger(a.map, "idle"));
                };
                _.Bo(b);
            }
        },
        Vja = function (a) {
            if (!a) return "";
            for (var b = [], c = _.A(a), d = c.next(); !d.done; d = c.next()) {
                d = d.value;
                var e = d.featureType,
                    f = d.elementType,
                    g = d.stylers;
                d = [];
                var h;
                (h = e) ? ((h = h.toLowerCase()), (h = Qja.hasOwnProperty(h) ? Qja[h] : Rja.hasOwnProperty(h) ? Rja[h] : null)) : (h = null);
                h && d.push("s.t:" + h);
                null != e && null == h && _.jf(_.hf("invalid style feature type: " + e, null));
                e = f && Sja[f.toLowerCase()];
                (e = null != e ? e : null) && d.push("s.e:" + e);
                null != f && null == e && _.jf(_.hf("invalid style element type: " + f, null));
                if (g)
                    for (f = _.A(g), e = f.next(); !e.done; e = f.next()) {
                        a: {
                            g = void 0;
                            e = e.value;
                            for (g in e) {
                                h = e[g];
                                var k = (g && Tja[g.toLowerCase()]) || null;
                                if (k && (_.af(h) || _.cf(h) || _.mba(h)) && h) {
                                    "color" == g && Uja.test(h) && (h = "#ff" + h.substr(1));
                                    g = "p." + k + ":" + h;
                                    break a;
                                }
                            }
                            g = void 0;
                        }
                        g && d.push(g);
                    }
                (d = d.join("|")) && b.push(d);
            }
            b = b.join(",");
            return b.length > (_.ei[131] ? 12288 : 1e3) ? (_.ef("Custom style string for " + a.toString()), "") : b;
        },
        Ss = function () {},
        Us = function (a, b, c, d, e, f, g) {
            var h = this;
            this.H = this.i = null;
            this.$ = a;
            this.g = c;
            this.V = b;
            this.o = d;
            this.j = !1;
            this.N = 1;
            this.ob = new _.Di(function () {
                var k = h.get("bounds");
                if (k && !_.Vk(k).equals(_.Uk(k))) {
                    var l = h.i;
                    var m = Wja(h);
                    var p = h.get("bounds"),
                        q = Ts(h);
                    _.af(m) && p && q ? ((m = q + "|" + m), 45 == h.get("tilt") && !h.j && (m += "|" + (h.get("heading") || 0))) : (m = null);
                    if ((m = h.i = m)) {
                        if (((l = m != l) || (l = (l = h.get("bounds")) ? (h.H ? !h.H.Tg(l) : !0) : !1), l)) {
                            for (var r in h.g) h.g[r].set("featureRects", void 0);
                            ++h.N;
                            l = (0, _.lb)(h.ha, h, h.N, Ts(h));
                            p = h.get("bounds");
                            Ts(h);
                            q = Xja(h);
                            if (p && _.af(q)) {
                                m = new As();
                                m.W[3] = h.$;
                                m.setZoom(Wja(h));
                                m.W[4] = q;
                                q = 45 == h.get("tilt") && !h.j;
                                q = ((m.W[6] = q) && h.get("heading")) || 0;
                                m.W[7] = q;
                                _.ei[43] ? (m.W[10] = 78) : _.ei[35] && (m.W[10] = 289);
                                (q = h.get("baseMapType")) && q.Uj && h.o && (m.W[5] = q.Uj);
                                p = h.H = Qia(p, 1, 10);
                                q = new _.Fl(_.ue(m, 0));
                                var t = _.Gl(q);
                                _.Dl(t, p.getSouthWest().lat());
                                _.El(t, p.getSouthWest().lng());
                                q = _.Hl(q);
                                _.Dl(q, p.getNorthEast().lat());
                                _.El(q, p.getNorthEast().lng());
                                h.O && h.T ? ((h.T = !1), (m.W[11] = 1), m.setUrl(h.ta.substring(0, 1024)), (m.W[13] = h.O)) : (m.W[11] = 2);
                                Yja(m, l);
                            }
                        }
                    } else h.set("attributionText", "");
                    h.V.set("latLng", k && k.getCenter());
                    for (r in h.g) h.g[r].set("viewport", k);
                }
            }, 0);
            this.O = e;
            this.ta = f;
            this.T = !0;
            this.na = g;
        },
        Yja = function (a, b) {
            a = nja(a);
            _.ir(_.Cj, _.Kr + "/maps/api/js/ViewportInfoService.GetViewportInfo", _.Ui, a, function (c) {
                b(new Gs(c));
            });
        },
        Zja = function (a) {
            var b = Ts(a);
            if ("hybrid" == b || "satellite" == b) var c = a.ka;
            a.V.set("maxZoomRects", c);
        },
        Wja = function (a) {
            a = a.get("zoom");
            return _.af(a) ? Math.round(a) : a;
        },
        Ts = function (a) {
            return (a = a.get("baseMapType")) && a.mapTypeId;
        },
        $ja = function (a) {
            var b = new _.Cl(a.W[0]);
            a = new _.Cl(a.W[1]);
            return _.Ag(_.se(b, 0), _.se(b, 1), _.se(a, 0), _.se(a, 1));
        },
        Xja = function (a) {
            a = a.get("baseMapType");
            if (!a) return null;
            switch (a.mapTypeId) {
                case "roadmap":
                    return 0;
                case "terrain":
                    return 4;
                case "hybrid":
                    return 3;
                case "satellite":
                    return a.Ek ? 5 : 2;
            }
            return null;
        },
        Vs = function (a, b, c) {
            b = void 0 === b ? -Infinity : b;
            c = void 0 === c ? Infinity : c;
            return b > c ? (b + c) / 2 : Math.max(Math.min(a, c), b);
        },
        Ws = function (a, b, c, d, e) {
            this.i = a && { min: a.min, max: a.min.g <= a.max.g ? a.max : new _.Jh(a.max.g + 256, a.max.i), KA: a.max.g - a.min.g, LA: a.max.i - a.min.i };
            var f = this.i;
            f && c.width && c.height
                ? ((a = _.u(Math, "log2").call(Math, c.width / (f.max.g - f.min.g))),
                  (f = _.u(Math, "log2").call(Math, c.height / (f.max.i - f.min.i))),
                  (e = Math.max(b ? b.min : 0, (void 0 === e ? 0 : e) ? Math.max(Math.ceil(a), Math.ceil(f)) : Math.min(Math.floor(a), Math.floor(f)))))
                : (e = b ? b.min : 0);
            this.g = { min: e, max: Math.min(b ? b.max : Infinity, 30) };
            this.g.max = Math.max(this.g.min, this.g.max);
            this.j = c;
            this.o = d;
        },
        Xs = function (a, b) {
            this.g = a;
            this.j = b;
            this.i = !1;
            this.update();
        },
        Ys = function (a) {
            this.g = a;
        },
        aka = function (a, b) {
            function c(d) {
                var e = b.getAt(d);
                if (e instanceof _.rj) {
                    d = e.get("styles");
                    var f = Vja(d);
                    e.se = function (g) {
                        var h = g ? ("hybrid" == e.g ? "" : "p.s:-60|p.l:-60") : f,
                            k = kja(a, e.g);
                        return new vs(k, h, null, null, null, null).se(g);
                    };
                }
            }
            _.I.addListener(b, "insert_at", c);
            _.I.addListener(b, "set_at", c);
            b.forEach(function (d, e) {
                return c(e);
            });
        },
        Zs = function () {
            this.j = new rs();
            this.i = {};
            this.g = {};
        },
        bka = function (a, b) {
            if (b.xj()) {
                a.i = {};
                a.g = {};
                for (var c = 0; c < b.xj(); ++c) {
                    var d = new Es(_.Ae(b, 0, c)),
                        e = d.getTile(),
                        f = e.getZoom(),
                        g = e.Sa();
                    e = e.Qa();
                    d = _.se(d, 2);
                    var h = a.i;
                    h[f] = h[f] || {};
                    h[f][g] = h[f][g] || {};
                    h[f][g][e] = d;
                    a.g[f] = Math.max(a.g[f] || 0, d);
                }
                Ria(a.j);
            }
        },
        $s = function (a) {
            var b = this;
            this.g = a;
            a.addListener(function () {
                return b.notify("style");
            });
        },
        at = function (a, b) {
            this.N = a;
            this.j = this.o = this.g = null;
            a && ((this.g = _.ln(this.i).createElement("div")), (this.g.style.width = "1px"), (this.g.style.height = "1px"), _.sn(this.g, 1e3));
            this.i = b;
            this.j && (_.I.removeListener(this.j), (this.j = null));
            this.N && b && (this.j = _.I.addDomListener(b, "mousemove", (0, _.lb)(this.H, this), !0));
            this.title_changed();
        },
        cka = function (a, b, c, d) {
            this.g = a;
            this.o = b;
            this.i = c;
            this.j = d;
        },
        eka = function (a, b, c, d, e) {
            var f = this;
            this.j = b;
            this.O = c;
            this.H = d;
            this.N = e;
            this.o = null;
            this.i = this.g = 0;
            this.T = new _.km(function () {
                f.g = 0;
                f.i = 0;
            }, 1e3);
            new _.Dn(a, "wheel", function (g) {
                return dka(f, g);
            });
        },
        dka = function (a, b) {
            if (!_.Tk(b)) {
                var c = a.H();
                if (0 != c) {
                    var d = null == c && !b.ctrlKey && !b.altKey && !b.metaKey && !b.buttons;
                    c = a.O(d ? 1 : 4);
                    if ("none" != c && ("cooperative" != c || !d)) {
                        _.Sf(b);
                        var e = (b.deltaY || b.wheelDelta || 0) * (1 == b.deltaMode ? 16 : 1);
                        d = a.N();
                        if (!d && ((0 < e && e < a.i) || (0 > e && e > a.i))) a.i = e;
                        else if (((a.i = e), (a.g += e), a.T.ke(), (e = a.j.zf()), d || !(16 > Math.abs(a.g)))) {
                            if (d) {
                                16 < Math.abs(a.g) && (a.g = _.ul(0 > a.g ? -16 : 16, a.g, 0.01));
                                var f = -(a.g / 16) / 5;
                            } else f = -_.u(Math, "sign").call(Math, a.g);
                            a.g = 0;
                            b = "zoomaroundcenter" == c ? e.center : a.j.Pf(b);
                            d
                                ? fka(a.j, f, b)
                                : ((c = Math.round(e.zoom + f)),
                                  a.o != c &&
                                      (gka(a.j, c, b, function () {
                                          a.o = null;
                                      }),
                                      (a.o = c)));
                        }
                    }
                }
            }
        },
        bt = function (a, b, c) {
            this.j = a;
            this.o = b;
            this.i = c || null;
            this.g = null;
        },
        ct = function (a, b, c, d) {
            this.i = a;
            this.o = b;
            this.H = c;
            this.j = d || null;
            this.g = null;
        },
        hka = function (a, b) {
            return { Jd: a.i.Pf(b.Jd), radius: b.radius, zoom: a.i.zf().zoom };
        },
        ika = function (a, b, c, d, e) {
            function f() {
                return !1;
            }
            d =
                void 0 === d
                    ? function () {
                          return "greedy";
                      }
                    : d;
            var g = void 0 === e ? {} : e;
            e =
                void 0 === g.Yq
                    ? function () {
                          return !0;
                      }
                    : g.Yq;
            var h = void 0 === g.nv ? !1 : g.nv,
                k =
                    void 0 === g.ss
                        ? function () {
                              return null;
                          }
                        : g.ss;
            g = {
                Jm: void 0 === g.Jm ? !1 : g.Jm,
                onClick: function (p) {
                    var q = p.coords,
                        r = p.event;
                    p.Ni && ((r = 3 == r.button), m.i() && ((p = m.o(4)), "none" != p && ((r = m.g.zf().zoom + (r ? -1 : 1)), m.j() || (r = Math.round(r)), (q = "zoomaroundcenter" == p ? m.g.zf().center : m.g.Pf(q)), gka(m.g, r, q))));
                },
            };
            var l = _.ho(b.Bf, g);
            new eka(b.Bf, a, d, k, f);
            var m = new cka(a, d, e, f);
            g.Ei = new ct(a, d, l, c);
            h && (g.mv = new bt(a, l, c));
            return l;
        },
        jka = function (a, b, c) {
            var d = Math.cos((-b * Math.PI) / 180);
            b = Math.sin((-b * Math.PI) / 180);
            c = _.Xk(c, a);
            return new _.Jh(c.g * d - c.i * b + a.g, c.g * b + c.i * d + a.i);
        },
        kka = function (a, b, c) {
            this.i = a;
            this.j = b;
            this.g = c;
        },
        lka = function (a, b, c) {
            this.g = b;
            this.Nb = c;
            this.j = b.heading + 360 * Math.round((c.heading - b.heading) / 360);
            var d = a.width || 1,
                e = a.height || 1;
            a = new kka(b.center.g / d, b.center.i / e, 0.5 * Math.pow(2, -b.zoom));
            d = new kka(c.center.g / d, c.center.i / e, 0.5 * Math.pow(2, -c.zoom));
            this.i = (d.g - a.g) / a.g;
            this.Kc = _.u(Math, "hypot").call(
                Math,
                (0.5 * _.u(Math, "hypot").call(Math, d.i - a.i, d.j - a.j, d.g - a.g) * (this.i ? _.u(Math, "log1p").call(Math, this.i) / this.i : 1)) / a.g,
                0.005 * (c.tilt - b.tilt),
                0.007 * (c.heading - this.j)
            );
            this.Oi = [];
            b = this.g.zoom;
            if (this.g.zoom < this.Nb.zoom)
                for (;;) {
                    b = 3 * Math.floor(b / 3 + 1);
                    if (b >= this.Nb.zoom) break;
                    this.Oi.push((Math.abs(b - this.g.zoom) / Math.abs(this.Nb.zoom - this.g.zoom)) * this.Kc);
                }
            else if (this.g.zoom > this.Nb.zoom)
                for (;;) {
                    b = 3 * Math.ceil(b / 3 - 1);
                    if (b <= this.Nb.zoom) break;
                    this.Oi.push((Math.abs(b - this.g.zoom) / Math.abs(this.Nb.zoom - this.g.zoom)) * this.Kc);
                }
        },
        nka = function (a, b) {
            var c = void 0 === b ? {} : b;
            b = void 0 === c.ov ? 300 : c.ov;
            var d = void 0 === c.maxDistance ? Infinity : c.maxDistance,
                e = void 0 === c.ef ? function () {} : c.ef;
            c = void 0 === c.speed ? 1.5 : c.speed;
            this.wd = a;
            this.ef = e;
            this.i = new mka(c / 1e3, b);
            this.g = a.Kc <= d ? 0 : -1;
        },
        mka = function (a, b) {
            this.i = a;
            this.o = b;
            this.g = Math.PI / 2 / b;
            this.j = a / this.g;
        },
        oka = function (a) {
            return {
                wd: {
                    Nb: a,
                    Rb: function () {
                        return a;
                    },
                    Oi: [],
                    Kc: 0,
                },
                Rb: function () {
                    return { xd: a, done: 0 };
                },
                ef: function () {},
            };
        },
        pka = function (a, b, c) {
            this.ka = b;
            this.ha = c;
            this.o = {};
            this.j = this.g = null;
            this.H = new _.Jh(0, 0);
            this.T = null;
            this.na = a.Bf;
            this.O = a.Eg;
            this.N = a.Vg;
            this.$ = _.Co();
            this.ha.oo && (this.N.style.willChange = this.O.style.willChange = "transform");
            this.V = this.i = void 0;
        },
        qka = function (a, b, c, d) {
            var e = b.center,
                f = b.heading,
                g = b.tilt,
                h = _.Kh(b.zoom, g, f, a.i);
            a.g = { center: e, scale: h };
            b = a.getBounds(b);
            e = a.H = Iia(h, e);
            a.j = { Na: 0, Pa: 0 };
            var k = a.$;
            k && (a.N.style[k] = a.O.style[k] = "translate(" + a.j.Na + "px," + a.j.Pa + "px)");
            a.ha.oo || (a.N.style.willChange = a.O.style.willChange = "");
            k = a.getBoundingClientRect(!0);
            for (var l in a.o) a.o[l].qd(b, a.H, h, f, g, e, { Na: k.width, Pa: k.height }, { ow: d, ah: !0, timestamp: c });
        },
        rka = function (a, b, c, d) {
            this.o = a;
            this.H = d;
            this.j = c;
            this.T = _.Bo;
            this.i = null;
            this.O = !1;
            this.g = null;
            this.N = !0;
            this.V = b;
        },
        ska = function (a) {
            var b = Date.now();
            return a.g ? a.g.Rb(b).xd : null;
        },
        tka = function (a) {
            return a.g ? a.g.type : void 0;
        },
        dt = function (a) {
            a.O ||
                ((a.O = !0),
                a.T(function (b) {
                    a.O = !1;
                    if (a.g) {
                        var c = a.g,
                            d = c.Rb(b),
                            e = d.xd;
                        d = d.done;
                        0 == d && ((a.g = null), c.ef());
                        e ? (a.i = e = a.j.Pj(e)) : (e = a.i);
                        e && (0 == d && a.N ? qka(a.o, e, b, !1) : (a.o.qd(e, b, c.wd), (1 != d && 0 != d) || dt(a)));
                        e && !c.wd && a.H(e);
                    } else a.i && qka(a.o, a.i, b, !0);
                    a.N = !1;
                }));
        },
        et = function (a, b, c) {
            var d = _.Kh(a.zoom, a.tilt, a.heading),
                e = _.Kh(b, a.tilt, a.heading);
            return { center: _.Wk(c, _.Lh(e, _.al(d, _.Xk(a.center, c)))), zoom: b, heading: a.heading, tilt: a.tilt };
        },
        ft = function (a, b, c, d) {
            this.j = b;
            this.H = c;
            this.N = d;
            this.o = a;
            this.i = [];
            this.g = null;
            this.wd = void 0;
        },
        uka = function (a, b) {
            a.o = b;
            a.H();
            var c = _.Ao ? _.C.performance.now() : Date.now();
            a.g = { Xf: c, xd: b };
            (0 < a.i.length && 10 > c - a.i.slice(-1)[0].Xf) || (a.i.push({ Xf: c, xd: b }), 10 < a.i.length && a.i.splice(0, 1));
        },
        gt = function (a, b) {
            this.wd = a;
            this.g = b;
        },
        vka = function (a, b, c, d) {
            var e = a.zoom - b.zoom,
                f = a.zoom;
            f = -0.1 > e ? Math.floor(f) : 0.1 < e ? Math.ceil(f) : Math.round(f);
            e = d + (1e3 * Math.sqrt((_.u(Math, "hypot").call(Math, a.center.g - b.center.g, a.center.i - b.center.i) * Math.pow(2, a.zoom)) / c)) / 3.2;
            var g = d + (1e3 * (0.5 - Math.abs((a.zoom % 1) - 0.5))) / 2;
            this.Kc = (0 >= c ? g : Math.max(g, e)) - d;
            d = 0 >= c ? 0 : (a.center.g - b.center.g) / c;
            b = 0 >= c ? 0 : (a.center.i - b.center.i) / c;
            this.g = 0.5 * this.Kc * d;
            this.i = 0.5 * this.Kc * b;
            this.j = a;
            this.Nb = { center: _.Wk(a.center, new _.Jh((this.Kc * d) / 2, (this.Kc * b) / 2)), heading: a.heading, tilt: a.tilt, zoom: f };
            this.Oi = [];
        },
        wka = function (a, b, c, d) {
            b = a.zoom - b.zoom;
            c = 0 >= c ? 0 : b / c;
            this.Kc = (1e3 * Math.sqrt(Math.abs(c))) / 0.4;
            this.g = (this.Kc * c) / 2;
            c = a.zoom + this.g;
            b = et(a, c, d).center;
            this.j = a;
            this.i = d;
            this.Nb = { center: b, heading: a.heading, tilt: a.tilt, zoom: c };
            this.Oi = [];
        },
        xka = function (a, b, c) {
            var d = _.u(Math, "hypot").call(Math, a.center.g - b.center.g, a.center.i - b.center.i) * Math.pow(2, a.zoom);
            this.Kc = (1e3 * Math.sqrt(0 >= c ? 0 : d / c)) / 3.2;
            d = 0 >= c ? 0 : (a.center.i - b.center.i) / c;
            this.g = (this.Kc * (0 >= c ? 0 : (a.center.g - b.center.g) / c)) / 2;
            this.i = (this.Kc * d) / 2;
            this.Nb = { center: _.Wk(a.center, new _.Jh(this.g, this.i)), heading: a.heading, tilt: a.tilt, zoom: a.zoom };
            this.Oi = [];
        },
        yka = function (a, b, c, d, e) {
            c = 0 >= c ? 0 : b / c;
            b = d + Math.min(1e3 * Math.sqrt(Math.abs(c)), 1e3) / 2;
            c = ((b - d) * c) / 2;
            var f = jka(e, -c, a.center);
            this.Kc = b - d;
            this.i = c;
            this.g = e;
            this.Nb = { center: f, heading: a.heading + c, tilt: a.tilt, zoom: a.zoom };
            this.Oi = [];
        },
        zka = function (a, b, c) {
            var d = this;
            this.i = a(function () {
                dt(d.g);
            });
            this.g = new rka(
                this.i,
                b,
                {
                    Pj: function (e) {
                        return e;
                    },
                    xk: function () {
                        return { min: 0, max: 1e3 };
                    },
                },
                function (e) {
                    return c(e, d.i.getBounds(e));
                }
            );
            this.j = b;
            this.He = _.Jea;
        },
        gka = function (a, b, c, d) {
            d = void 0 === d ? function () {} : d;
            var e = a.g.xk(),
                f = a.zf();
            b = Math.min(b, e.max);
            b = Math.max(b, e.min);
            f && ((b = et(f, b, c)), (d = a.j(a.i.getBoundingClientRect(!0), f, b, d)), a.g.Eh(d));
        },
        fka = function (a, b, c) {
            var d = void 0 === d ? function () {} : d;
            var e;
            if ((e = 0 === tka(a.g) ? ska(a.g) : a.zf())) {
                b = e.zoom + b;
                var f = a.g.xk();
                b = Math.min(b, f.max);
                b = Math.max(b, f.min);
                f = a.Mn();
                (f && f.zoom === b) || ((c = et(e, b, c)), (d = a.j(a.i.getBoundingClientRect(!0), e, c, d)), (d.type = 0), a.g.Eh(d));
            }
        },
        Aka = function (a, b) {
            var c = a.zf();
            if (!c) return null;
            b = new ft(
                c,
                b,
                function () {
                    dt(a.g);
                },
                function (d) {
                    a.g.Eh(d);
                }
            );
            a.g.Eh(b);
            return b;
        },
        Bka = function (a, b, c) {
            c = void 0 === c ? {} : c;
            var d = 0 != c.Cu,
                e = !!c.oo;
            return new zka(
                function (f) {
                    return new pka(a, f, { oo: e });
                },
                function (f, g, h, k) {
                    return new nka(new lka(f, g, h), { ef: k, maxDistance: d ? 1.5 : 0 });
                },
                b
            );
        },
        Cka = function (a, b, c) {
            _.Te(_.yda, function (d, e) {
                b.set(e, kja(a, e, { pv: c }));
            });
        },
        Dka = function (a, b) {
            function c(e) {
                switch (e.mapTypeId) {
                    case "roadmap":
                        return "Tm";
                    case "satellite":
                        return e.Ek ? "Ta" : "Tk";
                    case "hybrid":
                        return e.Ek ? "Ta" : "Th";
                    case "terrain":
                        return "Tr";
                    default:
                        return "To";
                }
            }
            _.I.xc(b, "basemaptype_changed", function () {
                var e = b.get("baseMapType");
                e && _.Zg(a, c(e));
            });
            var d = a.__gm;
            _.I.xc(d, "hascustomstyles_changed", function () {
                if (d.get("hasCustomStyles")) {
                    _.Zg(a, "Ts");
                    var e = d.get("apistyle");
                    e &&
                        _.Pf("stats").then(function (f) {
                            f.ta(e);
                        });
                }
            });
        },
        Eka = function (a) {
            if (a && _.ln(a.getDiv()) && _.ur()) {
                _.Zg(a, "Tdev");
                var b = document.querySelector('meta[name="viewport"]');
                (b = b && b.content) && b.match(/width=device-width/) && _.Zg(a, "Mfp");
            }
        },
        Fka = function () {
            var a = new ss(Tia()),
                b = {};
            b.obliques = new ss(Via());
            b.report_map_issue = a;
            return b;
        },
        Gka = function (a) {
            var b = a.get("embedReportOnceLog");
            if (b) {
                var c = function () {
                    for (; b.getLength(); ) {
                        var d = b.pop();
                        _.Zg(a, d);
                    }
                };
                _.I.addListener(b, "insert_at", c);
                c();
            } else
                _.I.addListenerOnce(a, "embedreportoncelog_changed", function () {
                    Gka(a);
                });
        },
        Hka = function (a) {
            var b = a.get("embedFeatureLog");
            if (b) {
                var c = function () {
                    for (; b.getLength(); ) {
                        var d = b.pop();
                        _.Ml(a, d);
                    }
                };
                _.I.addListener(b, "insert_at", c);
                c();
            } else
                _.I.addListenerOnce(a, "embedfeaturelog_changed", function () {
                    Hka(a);
                });
        },
        ht = function () {};
    ns.prototype.equals = function (a) {
        return this === a ? !0 : a instanceof ns ? Fia(_.Ik(this), _.Ik(a)) : !1;
    };
    ns.prototype.isEmpty = function () {
        return (null != this.g && 0 == this.g.byteLength) || (null != this.i && 0 == this.i.length) ? !0 : !1;
    };
    _.D(Gia, _.E);
    _.D(ps, _.E);
    var Qja = {
            all: 0,
            administrative: 1,
            "administrative.country": 17,
            "administrative.province": 18,
            "administrative.locality": 19,
            "administrative.neighborhood": 20,
            "administrative.land_parcel": 21,
            poi: 2,
            "poi.business": 33,
            "poi.government": 34,
            "poi.school": 35,
            "poi.medical": 36,
            "poi.attraction": 37,
            "poi.place_of_worship": 38,
            "poi.sports_complex": 39,
            "poi.park": 40,
            road: 3,
            "road.highway": 49,
            "road.highway.controlled_access": 785,
            "road.arterial": 50,
            "road.local": 51,
            "road.local.drivable": 817,
            "road.local.trail": 818,
            transit: 4,
            "transit.line": 65,
            "transit.line.rail": 1041,
            "transit.line.ferry": 1042,
            "transit.line.transit_layer": 1043,
            "transit.station": 66,
            "transit.station.rail": 1057,
            "transit.station.bus": 1058,
            "transit.station.airport": 1059,
            "transit.station.ferry": 1060,
            landscape: 5,
            "landscape.man_made": 81,
            "landscape.man_made.building": 1297,
            "landscape.man_made.business_corridor": 1299,
            "landscape.natural": 82,
            "landscape.natural.landcover": 1313,
            "landscape.natural.terrain": 1314,
            water: 6,
        },
        Rja = {
            "poi.business.shopping": 529,
            "poi.business.food_and_drink": 530,
            "poi.business.gas_station": 531,
            "poi.business.car_rental": 532,
            "poi.business.lodging": 533,
            "landscape.man_made.business_corridor": 1299,
            "landscape.man_made.building": 1297,
        },
        Sja = { all: "", geometry: "g", "geometry.fill": "g.f", "geometry.stroke": "g.s", labels: "l", "labels.icon": "l.i", "labels.text": "l.t", "labels.text.fill": "l.t.f", "labels.text.stroke": "l.t.s" };
    rs.prototype.addListener = function (a, b) {
        this.Ma.addListener(a, b);
    };
    rs.prototype.addListenerOnce = function (a, b) {
        this.Ma.addListenerOnce(a, b);
    };
    rs.prototype.removeListener = function (a, b) {
        this.Ma.removeListener(a, b);
    };
    _.B(ss, _.J);
    ss.prototype.Ef = function () {
        return this.g;
    };
    ss.prototype.changed = function (a) {
        if ("available" != a) {
            "featureRects" == a && Ria(this.g);
            a = this.get("viewport");
            var b = this.get("featureRects");
            a = this.i(a, b);
            null != a && a != this.get("available") && this.set("available", a);
        }
    };
    _.B(us, _.qj);
    us.prototype.se = function (a) {
        return this.H(this, void 0 === a ? !1 : a);
    };
    us.prototype.Se = function () {
        return this.i;
    };
    _.B(vs, us);
    ws.prototype.Sb = function () {
        return this.g;
    };
    ws.prototype.df = function () {
        return _.Qb(this.i, function (a) {
            return a.df();
        });
    };
    ws.prototype.release = function () {
        for (var a = _.A(this.i), b = a.next(); !b.done; b = a.next()) b.value.release();
        this.j();
    };
    xs.prototype.Je = function (a, b) {
        b = void 0 === b ? {} : b;
        var c = _.vd("DIV"),
            d = _.Ak(this.i, function (e, f) {
                e = e.Je(a);
                var g = e.Sb();
                g.style.position = "absolute";
                g.style.zIndex = f;
                c.appendChild(g);
                return e;
            });
        return new ws(c, d, this.Yb.size, this.g, { $d: b.$d });
    };
    ys.prototype.Sb = function () {
        return this.i.Sb();
    };
    ys.prototype.df = function () {
        return !this.o && this.i.df();
    };
    ys.prototype.release = function () {
        this.i.release();
    };
    bja.prototype.Je = function (a, b) {
        a = new _.kr(a, this.O, _.vd("DIV"), { errorMessage: "Xin l\u1ed7i, ch\u00fang t\u00f4i kh\u00f4ng c\u00f3 h\u00ecnh \u1ea3nh \u1edf \u0111\u00e2y.", $d: b && b.$d, Lr: this.N || void 0 });
        return new ys(a, this.i, this.T, this.j, this.g, this.Yb, this.o, this.H);
    };
    var Ika = [
        { Om: 108.25, Nm: 109.625, Rm: 49, Qm: 51.5 },
        { Om: 109.625, Nm: 109.75, Rm: 49, Qm: 50.875 },
        { Om: 109.75, Nm: 110.5, Rm: 49, Qm: 50.625 },
        { Om: 110.5, Nm: 110.625, Rm: 49, Qm: 49.75 },
    ];
    cja.prototype.Je = function (a, b) {
        a: {
            var c = a.kb;
            if (!(7 > c)) {
                var d = 1 << (c - 7);
                c = a.Ua / d;
                d = a.Va / d;
                for (var e = _.A(Ika), f = e.next(); !f.done; f = e.next())
                    if (((f = f.value), c >= f.Om && c <= f.Nm && d >= f.Rm && d <= f.Qm)) {
                        c = !0;
                        break a;
                    }
            }
            c = !1;
        }
        return c ? this.g.Je(a, b) : this.i.Je(a, b);
    };
    _.D(mja, _.E);
    var Bs;
    _.D(As, _.E);
    _.n = As.prototype;
    _.n.getZoom = function () {
        return _.se(this, 1);
    };
    _.n.setZoom = function (a) {
        this.W[1] = a;
    };
    _.n.Wc = function () {
        return _.re(this, 4);
    };
    _.n.getUrl = function () {
        return _.te(this, 12);
    };
    _.n.setUrl = function (a) {
        this.W[12] = a;
    };
    _.D(Cs, _.E);
    Cs.prototype.clearRect = function () {
        _.ve(this, 1);
    };
    _.D(Ds, _.E);
    Ds.prototype.clearRect = function () {
        _.ve(this, 1);
    };
    _.D(Es, _.E);
    Es.prototype.Qd = function () {
        return _.te(this, 0);
    };
    Es.prototype.getTile = function () {
        return new _.Jm(this.W[1]);
    };
    Es.prototype.eh = function () {
        return new _.Jm(_.ue(this, 1));
    };
    _.D(Fs, _.E);
    Fs.prototype.xj = function () {
        return _.Ce(this, 0);
    };
    Fs.prototype.lr = function () {
        return ((_.O = _.Gk(this, 0, Es).slice()), _.u(_.O, "values")).call(_.O);
    };
    _.D(Gs, _.E);
    Gs.prototype.getStatus = function () {
        return _.re(this, 4, -1);
    };
    Gs.prototype.getAttribution = function () {
        return _.te(this, 0);
    };
    Gs.prototype.setAttribution = function (a) {
        this.W[0] = a;
    };
    var oja = _.rl(
        _.Qc(
            ".gm-style-pbc{transition:opacity ease-in-out;background-color:rgba(0,0,0,0.45);text-align:center}.gm-style-pbt{font-size:22px;color:white;font-family:Roboto,Arial,sans-serif;position:relative;margin:0;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}\n"
        )
    );
    pja.prototype.j = function (a) {
        var b = this;
        clearTimeout(this.o);
        1 == a
            ? (qja(this, !0),
              (this.o = setTimeout(function () {
                  return rja(b);
              }, 1500)))
            : 2 == a
            ? qja(this, !1)
            : 3 == a
            ? rja(this)
            : 4 == a && ((this.g.style.transitionDuration = "0.2s"), (this.g.style.opacity = 0));
    };
    Is.Gv = _.ni;
    Is.Hv = function (a, b, c) {
        var d = b.getSouthWest();
        b = b.getNorthEast();
        var e = d.lng(),
            f = b.lng();
        e > f && (d = new _.yf(d.lat(), e - 360, !0));
        d = a.fromLatLngToPoint(d);
        b = a.fromLatLngToPoint(b);
        a = Math.max(d.x, b.x) - Math.min(d.x, b.x);
        d = Math.max(d.y, b.y) - Math.min(d.y, b.y);
        return a > c.width || d > c.height ? 0 : Math.floor(Math.min(_.yl(c.width + 1e-12) - _.yl(a + 1e-12), _.yl(c.height + 1e-12) - _.yl(d + 1e-12)));
    };
    Is.Nv = function (a, b) {
        a = _.dm(b, a, 0);
        return _.cm(b, new _.M((a.hb + a.rb) / 2, (a.Xa + a.mb) / 2), 0);
    };
    Ks.prototype.to = function (a) {
        return this.i(this.g.to(a));
    };
    Ks.prototype.On = function (a) {
        return this.i(this.g.On(a));
    };
    Ks.prototype.Ef = function () {
        return this.g.Ef();
    };
    _.D(Ms, _.J);
    _.n = Ms.prototype;
    _.n.mapTypeId_changed = function () {
        var a = this.get("mapTypeId");
        this.wl(a);
    };
    _.n.heading_changed = function () {
        var a = this.get("heading");
        if ("number" === typeof a) {
            var b = _.We(90 * Math.round(a / 90), 0, 360);
            a != b ? this.set("heading", b) : ((a = this.get("mapTypeId")), this.wl(a));
        }
    };
    _.n.tilt_changed = function () {
        var a = this.get("mapTypeId");
        this.wl(a);
    };
    _.n.setMapTypeId = function (a) {
        this.wl(a);
        this.set("mapTypeId", a);
    };
    _.n.wl = function (a) {
        var b = this.get("heading") || 0,
            c = this.j.get(a),
            d = this.get("tilt");
        if (this.get("tilt") && !this.N && c && c instanceof us && c.g && c.g[b]) c = c.g[b];
        else if (0 == d && 0 != b) {
            this.set("heading", 0);
            return;
        }
        (c && c == this.O) ||
            (this.o && (_.I.removeListener(this.o), (this.o = null)),
            (b = (0, _.lb)(this.wl, this, a)),
            a && (this.o = _.I.addListener(this.j, a.toLowerCase() + "_changed", b)),
            c && c instanceof _.rj ? ((a = c.g), this.set("styles", c.get("styles")), this.set("baseMapType", this.j.get(a))) : (this.set("styles", null), this.set("baseMapType", c)),
            this.set("maxZoom", c && c.maxZoom),
            this.set("minZoom", c && c.minZoom),
            (this.O = c));
    };
    _.n.Lu = function (a, b, c, d, e, f, g) {
        if (void 0 == f) return null;
        if (d instanceof us) {
            a = new vs(d, a, b, e, c, g);
            if ((b = this.i instanceof vs))
                if (((b = this.i), b == a)) b = !0;
                else if (b && a) {
                    if ((c = b.heading == a.heading && b.projection == a.projection && b.Uj == a.Uj))
                        (b = b.i.get()), (c = a.i.get()), (c = b == c ? !0 : b && c ? b.scale == c.scale && b.uh == c.uh && (b.Pe == c.Pe ? !0 : b.Pe && c.Pe ? b.Pe.equals(c.Pe) : !1) : !1);
                    b = c;
                } else b = !1;
            b || ((this.i = a), this.g.set(a.T));
        } else (this.i = d), this.g.get() && this.g.set(null);
        return this.i;
    };
    _.D(Ns, _.J);
    Ns.prototype.changed = function (a) {
        if ("maxZoomRects" == a || "latLng" == a) {
            a = this.get("latLng");
            var b = this.get("maxZoomRects");
            if (a && b) {
                for (var c = void 0, d = 0, e; (e = b[d++]); ) a && e.bounds.contains(a) && (c = Math.max(c || 0, e.maxZoom));
                a = c;
                a != this.get("maxZoom") && this.set("maxZoom", a);
            } else void 0 != this.get("maxZoom") && this.set("maxZoom", void 0);
        }
    };
    Mja.prototype.moveCamera = function (a) {
        var b = this.g.getCenter(),
            c = this.g.getZoom(),
            d = this.g.getProjection(),
            e = null != c || null != a.zoom;
        if ((b || a.center) && e && d) {
            e = a.center ? _.Cf(a.center) : b;
            c = null != a.zoom ? a.zoom : c;
            var f = this.g.getTilt() || 0,
                g = this.g.getHeading() || 0;
            2 === this.o
                ? ((f = null != a.tilt ? a.tilt : f), (g = null != a.heading ? a.heading : g))
                : 0 === this.o
                ? ((this.j = a.tilt), (this.i = a.heading))
                : (a.tilt || a.heading) && console.warn("google.maps.moveCamera() CameraOptions includes tilt or heading, which are not supported on raster maps");
            a = _.Sl(e, d);
            b && b !== e && ((b = _.Sl(b, d)), (a = _.Zk(this.H.He, a, b)));
            this.H.ee({ center: a, zoom: c, heading: g, tilt: f }, !1);
        }
    };
    _.B(Os, _.J);
    _.n = Os.prototype;
    _.n.actualTilt_changed = function () {
        var a = this.get("actualTilt");
        if (null != a && a != this.get("tilt")) {
            this.i = !0;
            try {
                this.set("tilt", a);
            } finally {
                this.i = !1;
            }
        }
    };
    _.n.tilt_changed = function () {
        if (!this.i) {
            var a = this.get("tilt");
            a != this.get("desiredTilt") ? this.set("desiredTilt", a) : a != this.get("actualTilt") && this.set("actualTilt", this.get("actualTilt"));
        }
    };
    _.n.aerial_changed = function () {
        Ps(this);
    };
    _.n.mapTypeId_changed = function () {
        Ps(this);
    };
    _.n.zoom_changed = function () {
        Ps(this);
    };
    _.n.desiredTilt_changed = function () {
        Ps(this);
    };
    _.B(Rs, _.J);
    Rs.prototype.ee = function (a) {
        this.Jc.ee(a, !0);
        this.j();
    };
    Rs.prototype.getBounds = function () {
        var a = this.map.get("center"),
            b = this.map.get("zoom");
        if (a && null != b) {
            var c = this.map.get("tilt") || 0,
                d = this.map.get("heading") || 0;
            var e = this.map.getProjection();
            a = { center: _.Sl(a, e), zoom: b, tilt: c, heading: d };
            a = this.Jc.Ln(a);
            e = _.Wfa(a, e, !1);
        } else e = null;
        return e;
    };
    var Tja = { hue: "h", saturation: "s", lightness: "l", gamma: "g", invert_lightness: "il", visibility: "v", color: "c", weight: "w" };
    var Uja = /^#[0-9a-fA-F]{6}$/;
    _.D(Ss, _.J);
    Ss.prototype.changed = function (a) {
        if ("apistyle" != a && "hasCustomStyles" != a) {
            var b = this.get("mapTypeStyles") || this.get("styles");
            this.set("hasCustomStyles", _.Se(b));
            a = [];
            _.ei[13] && a.push({ featureType: "poi.business", elementType: "labels", stylers: [{ visibility: "off" }] });
            _.$e(a, b);
            b = this.get("uDS") ? ("hybrid" == this.get("mapTypeId") ? "" : "p.s:-60|p.l:-60") : Vja(a);
            b != this.g && ((this.g = b), this.notify("apistyle"));
            a.length && (!b || 1e3 < b.length) && _.rh(_.zk(_.I.trigger, this, "styleerror", b.length));
        }
    };
    Ss.prototype.getApistyle = function () {
        return this.g;
    };
    _.D(Us, _.J);
    Us.prototype.changed = function (a) {
        "attributionText" != a && ("baseMapType" == a && (Zja(this), (this.i = null)), _.Ei(this.ob));
    };
    Us.prototype.ha = function (a, b, c) {
        1 == _.re(c, 7) && this.na(new _.Im(c.W[6]));
        if (a == this.N) {
            Ts(this) == b && this.set("attributionText", decodeURIComponent(c.getAttribution()));
            this.o && bka(this.o, new Fs(c.W[3]));
            var d = {};
            a = 0;
            for (var e = _.Ce(c, 1); a < e; ++a) {
                b = new Cs(_.Ae(c, 1, a));
                var f = _.te(b, 0);
                b = new _.Fl(b.W[1]);
                b = $ja(b);
                d[f] = d[f] || [];
                d[f].push(b);
            }
            _.nc(this.g, function (h, k) {
                h.set("featureRects", d[k] || []);
            });
            e = _.Ce(c, 2);
            f = this.ka = Array(e);
            for (a = 0; a < e; ++a) {
                b = new Ds(_.Ae(c, 2, a));
                var g = _.se(b, 0);
                b = $ja(new _.Fl(b.W[1]));
                f[a] = { bounds: b, maxZoom: g };
            }
            Zja(this);
        }
    };
    Ws.prototype.Pj = function (a) {
        var b = a.center,
            c = a.zoom,
            d = a.heading;
        a = a.tilt;
        c = Vs(c, this.g.min, this.g.max);
        this.o && (a = Vs(a, 0, 15.5 <= c ? 67.5 : 14 < c ? 45 + (22.5 * (c - 14)) / 1.5 : 10 < c ? 30 + (15 * (c - 10)) / 4 : 30));
        d = ((d % 360) + 360) % 360;
        if (!this.i || !this.j.width || !this.j.height) return { center: b, zoom: c, heading: d, tilt: a };
        var e = this.j.width / Math.pow(2, c),
            f = this.j.height / Math.pow(2, c);
        b = new _.Jh(Vs(b.g, this.i.min.g + e / 2, this.i.max.g - e / 2), Vs(b.i, this.i.min.i + f / 2, this.i.max.i - f / 2));
        return { center: b, zoom: c, heading: d, tilt: a };
    };
    Ws.prototype.xk = function () {
        return { min: this.g.min, max: this.g.max };
    };
    _.D(Xs, _.J);
    Xs.prototype.changed = function (a) {
        "zoomRange" != a && "boundsRange" != a && this.update();
    };
    Xs.prototype.update = function () {
        var a = null,
            b = this.get("restriction");
        b && _.Zg(this.j, "Mbr");
        var c = this.get("projection");
        if (b) {
            a = _.Sl(b.latLngBounds.getSouthWest(), c);
            var d = _.Sl(b.latLngBounds.getNorthEast(), c);
            a = { min: new _.Jh(_.ug(b.latLngBounds.Eb) ? -Infinity : a.g, d.i), max: new _.Jh(_.ug(b.latLngBounds.Eb) ? Infinity : d.g, a.i) };
            d = 1 == b.strictBounds;
        }
        b = new _.Cga(this.get("minZoom") || 0, this.get("maxZoom") || 30);
        c = this.get("mapTypeMinZoom");
        var e = this.get("mapTypeMaxZoom"),
            f = this.get("trackerMaxZoom");
        _.af(c) && (b.min = Math.max(b.min, c));
        _.af(f) ? (b.max = Math.min(b.max, f)) : _.af(e) && (b.max = Math.min(b.max, e));
        _.of(function (g) {
            return g.min <= g.max;
        }, "minZoom cannot exceed maxZoom")(b);
        c = this.g.getBoundingClientRect();
        d = new Ws(a, b, { width: c.width, height: c.height }, this.i, d);
        this.g.To(d);
        this.set("zoomRange", b);
        this.set("boundsRange", a);
    };
    _.D(Ys, _.J);
    Ys.prototype.immutable_changed = function () {
        var a = this,
            b = a.get("immutable"),
            c = a.i;
        b != c &&
            (_.Te(a.g, function (d) {
                (c && c[d]) !== (b && b[d]) && a.set(d, b && b[d]);
            }),
            (a.i = b));
    };
    Zs.prototype.to = function (a) {
        var b = this.i,
            c = a.Ua,
            d = a.Va;
        a = a.kb;
        return (b[a] && b[a][c] && b[a][c][d]) || 0;
    };
    Zs.prototype.On = function (a) {
        return this.g[a] || 0;
    };
    Zs.prototype.Ef = function () {
        return this.j;
    };
    _.B($s, _.J);
    $s.prototype.changed = function (a) {
        "tileMapType" != a && "style" != a && this.notify("style");
    };
    $s.prototype.getStyle = function () {
        var a = [],
            b = this.get("tileMapType");
        if (b instanceof us && (b = b.__gmsd)) {
            var c = new _.Yl();
            _.Zl(c, b.type);
            if (b.params)
                for (var d in b.params) {
                    var e = _.$l(c);
                    _.Xl(e, d);
                    var f = b.params[d];
                    f && (e.W[1] = f);
                }
            a.push(c);
        }
        d = new _.Yl();
        _.Zl(d, 37);
        _.Xl(_.$l(d), "smartmaps");
        a.push(d);
        this.g.get().forEach(function (g) {
            g.styler && a.push(g.styler);
        });
        return a;
    };
    _.D(at, _.J);
    at.prototype.O = function () {
        if (this.i) {
            var a = this.get("title");
            a ? this.i.setAttribute("title", a) : this.i.removeAttribute("title");
            if (this.g && this.o) {
                a = this.i;
                if (1 == a.nodeType) {
                    try {
                        var b = a.getBoundingClientRect();
                    } catch (c) {
                        b = { left: 0, top: 0, right: 0, bottom: 0 };
                    }
                    b = new _.vl(b.left, b.top);
                } else (b = a.changedTouches ? a.changedTouches[0] : a), (b = new _.vl(b.clientX, b.clientY));
                _.mn(this.g, new _.M(this.o.clientX - b.x, this.o.clientY - b.y));
                this.i.appendChild(this.g);
            }
        }
    };
    at.prototype.title_changed = at.prototype.O;
    at.prototype.H = function (a) {
        this.o = { clientX: a.clientX, clientY: a.clientY };
    };
    bt.prototype.hi = function (a, b) {
        var c = this;
        b.stop();
        if (!this.g) {
            this.i && _.qr(this.i, !0);
            var d = Aka(this.j, function () {
                c.g = null;
                c.o.reset(b);
            });
            d ? (this.g = { origin: a.Jd, Px: this.j.zf().zoom, lk: d }) : this.o.reset(b);
        }
    };
    bt.prototype.Gj = function (a) {
        if (this.g) {
            var b = this.j.zf();
            uka(this.g.lk, { center: b.center, zoom: this.g.Px + (a.Jd.clientY - this.g.origin.clientY) / 128, heading: b.heading, tilt: b.tilt });
        }
    };
    bt.prototype.Ti = function () {
        this.i && _.qr(this.i, !1);
        this.g && this.g.lk.release();
        this.g = null;
    };
    ct.prototype.hi = function (a, b) {
        var c = this,
            d = !this.g && 1 == b.button && 1 == a.sm,
            e = this.o(d ? 2 : 4);
        "none" == e ||
            ("cooperative" == e && d) ||
            (b.stop(),
            this.g
                ? (this.g.ym = hka(this, a))
                : (this.j && _.qr(this.j, !0),
                  (d = Aka(this.i, function () {
                      c.g = null;
                      c.H.reset(b);
                  }))
                      ? (this.g = { ym: hka(this, a), lk: d })
                      : this.H.reset(b)));
    };
    ct.prototype.Gj = function (a) {
        if (this.g) {
            var b = this.o(4);
            if ("none" != b) {
                var c = this.i.zf();
                b = "zoomaroundcenter" == b && 1 < a.sm ? c.center : _.Xk(_.Wk(c.center, this.g.ym.Jd), this.i.Pf(a.Jd));
                uka(this.g.lk, { center: b, zoom: this.g.ym.zoom + Math.log(a.radius / this.g.ym.radius) / Math.LN2, heading: c.heading, tilt: c.tilt });
            }
        }
    };
    ct.prototype.Ti = function () {
        this.o(3);
        this.j && _.qr(this.j, !1);
        this.g && this.g.lk.release();
        this.g = null;
    };
    lka.prototype.Rb = function (a) {
        if (0 >= a) return this.g;
        if (a >= this.Kc) return this.Nb;
        a /= this.Kc;
        var b = this.i ? _.u(Math, "expm1").call(Math, a * _.u(Math, "log1p").call(Math, this.i)) / this.i : a;
        return {
            center: new _.Jh(this.g.center.g * (1 - b) + this.Nb.center.g * b, this.g.center.i * (1 - b) + this.Nb.center.i * b),
            zoom: this.g.zoom * (1 - a) + this.Nb.zoom * a,
            heading: this.j * (1 - a) + this.Nb.heading * a,
            tilt: this.g.tilt * (1 - a) + this.Nb.tilt * a,
        };
    };
    nka.prototype.Rb = function (a) {
        if (!this.g) {
            var b = this.i,
                c = this.wd.Kc;
            this.g = a + (c < b.j ? Math.acos(1 - (c / b.i) * b.g) / b.g : b.o + (c - b.j) / b.i);
            return { done: 1, xd: this.wd.Rb(0) };
        }
        a >= this.g ? (a = { done: 0, xd: this.wd.Nb }) : ((b = this.i), (a = this.g - a), (a = { done: 1, xd: this.wd.Rb(this.wd.Kc - (a < b.o ? ((1 - Math.cos(a * b.g)) * b.i) / b.g : b.j + b.i * (a - b.o))) }));
        return a;
    };
    _.n = pka.prototype;
    _.n.Mb = function (a) {
        var b = _.db(a);
        if (!this.o[b]) {
            if ("function" === typeof a.Pv) {
                var c = a.Il;
                c && ((this.i = c), (this.V = b));
            }
            this.o[b] = a;
            this.ka();
        }
    };
    _.n.Kg = function (a) {
        var b = _.db(a);
        this.o[b] && (b === this.V && (this.V = this.i = void 0), a.dispose(), delete this.o[b]);
    };
    _.n.Dk = function () {
        this.T = null;
        this.ka();
    };
    _.n.getBoundingClientRect = function (a) {
        return ((void 0 === a ? 0 : a) ? this.T : null) || (this.T = this.na.getBoundingClientRect());
    };
    _.n.getBounds = function (a, b) {
        var c = void 0 === b ? {} : b,
            d = void 0 === c.top ? 0 : c.top;
        b = void 0 === c.left ? 0 : c.left;
        var e = void 0 === c.bottom ? 0 : c.bottom;
        c = void 0 === c.right ? 0 : c.right;
        var f = this.getBoundingClientRect(!0);
        b -= f.width / 2;
        c = f.width / 2 - c;
        b > c && (b = c = (b + c) / 2);
        var g = d - f.height / 2;
        e = f.height / 2 - e;
        g > e && (g = e = (g + e) / 2);
        if (this.i) {
            var h = { Na: f.width, Pa: f.height },
                k = a.center,
                l = a.zoom,
                m = a.tilt;
            a = a.heading;
            b += f.width / 2;
            c += f.width / 2;
            g += f.height / 2;
            e += f.height / 2;
            f = this.i.i(b, g, k, l, m, a, h);
            d = this.i.i(b, e, k, l, m, a, h);
            b = this.i.i(c, g, k, l, m, a, h);
            c = this.i.i(c, e, k, l, m, a, h);
        } else
            (h = _.Kh(a.zoom, a.tilt, a.heading)),
                (f = _.Wk(a.center, _.Lh(h, { Na: b, Pa: g }))),
                (d = _.Wk(a.center, _.Lh(h, { Na: c, Pa: g }))),
                (c = _.Wk(a.center, _.Lh(h, { Na: c, Pa: e }))),
                (b = _.Wk(a.center, _.Lh(h, { Na: b, Pa: e })));
        return { min: new _.Jh(Math.min(f.g, d.g, c.g, b.g), Math.min(f.i, d.i, c.i, b.i)), max: new _.Jh(Math.max(f.g, d.g, c.g, b.g), Math.max(f.i, d.i, c.i, b.i)) };
    };
    _.n.Pf = function (a) {
        var b = this.getBoundingClientRect(void 0);
        if (this.g) {
            var c = { Na: b.width, Pa: b.height };
            return this.i
                ? this.i.i(a.clientX - b.left, a.clientY - b.top, this.g.center, _.bl(this.g.scale), this.g.scale.tilt, this.g.scale.heading, c)
                : _.Wk(this.g.center, _.Lh(this.g.scale, { Na: a.clientX - (b.left + b.right) / 2, Pa: a.clientY - (b.top + b.bottom) / 2 }));
        }
        return new _.Jh(0, 0);
    };
    _.n.hp = function (a) {
        if (!this.g) return { clientX: 0, clientY: 0 };
        var b = this.getBoundingClientRect();
        if (this.i) return (a = this.i.g(a, this.g.center, _.bl(this.g.scale), this.g.scale.tilt, this.g.scale.heading, { Na: b.width, Pa: b.height })), { clientX: b.left + a[0], clientY: b.top + a[1] };
        a = _.al(this.g.scale, _.Xk(a, this.g.center));
        return { clientX: (b.left + b.right) / 2 + a.Na, clientY: (b.top + b.bottom) / 2 + a.Pa };
    };
    _.n.qd = function (a, b, c) {
        var d = a.center,
            e = _.Kh(a.zoom, a.tilt, a.heading, this.i),
            f = !e.equals(this.g && this.g.scale);
        this.g = { scale: e, center: d };
        if ((f || this.i) && this.j) this.H = Iia(e, _.Wk(d, _.Lh(e, this.j)));
        else if (((this.j = _.$k(_.al(e, _.Xk(this.H, d)))), (d = this.$))) (this.N.style[d] = this.O.style[d] = "translate(" + this.j.Na + "px," + this.j.Pa + "px)"), (this.N.style.willChange = this.O.style.willChange = "transform");
        d = _.Xk(this.H, _.Lh(e, this.j));
        f = this.getBounds(a);
        var g = this.getBoundingClientRect(!0),
            h;
        for (h in this.o) this.o[h].qd(f, this.H, e, a.heading, a.tilt, d, { Na: g.width, Pa: g.height }, { ow: !0, ah: !1, wd: c, timestamp: b });
    };
    _.n = rka.prototype;
    _.n.zf = function () {
        return this.i;
    };
    _.n.ee = function (a, b) {
        a = this.j.Pj(a);
        this.i && b ? this.Eh(this.V(this.o.getBoundingClientRect(!0), this.i, a, function () {})) : this.Eh(oka(a));
    };
    _.n.Mn = function () {
        return this.g ? (this.g.wd ? this.g.wd.Nb : null) : this.i;
    };
    _.n.Zl = function () {
        return !!this.g;
    };
    _.n.To = function (a) {
        this.j = a;
        !this.g && this.i && ((a = this.j.Pj(this.i)), (a.center == this.i.center && a.zoom == this.i.zoom && a.heading == this.i.heading && a.tilt == this.i.tilt) || this.Eh(oka(a)));
    };
    _.n.xk = function () {
        return this.j.xk();
    };
    _.n.Wo = function (a) {
        this.T = a;
    };
    _.n.Eh = function (a) {
        this.g && this.g.ef();
        this.g = a;
        this.N = !0;
        (a = a.wd) && this.H(this.j.Pj(a.Nb));
        dt(this);
    };
    _.n.Dk = function () {
        this.o.Dk();
        this.g && this.g.wd ? this.H(this.j.Pj(this.g.wd.Nb)) : this.i && this.H(this.i);
    };
    ft.prototype.ef = function () {
        this.j && (this.j(), (this.j = null));
    };
    ft.prototype.Rb = function () {
        return { xd: this.o, done: this.j ? 2 : 0 };
    };
    ft.prototype.release = function (a) {
        var b = this,
            c = _.Ao ? _.C.performance.now() : Date.now();
        if (!(0 >= this.i.length) && this.g) {
            var d = Kia(this.i, function (f) {
                return 125 > c - f.Xf && 10 <= b.g.Xf - f.Xf;
            });
            d = 0 > d ? this.g : this.i[d];
            var e = this.g.Xf - d.Xf;
            switch (this.g.xd.heading !== d.xd.heading && a ? 3 : 0) {
                case 3:
                    a = new yka(this.g.xd, -180 + _.tl(this.g.xd.heading - d.xd.heading - -180), e, c, a || this.g.xd.center);
                    break;
                case 2:
                    a = new wka(this.g.xd, d.xd, e, a || this.g.xd.center);
                    break;
                case 1:
                    a = new xka(this.g.xd, d.xd, e);
                    break;
                default:
                    a = new vka(this.g.xd, d.xd, e, c);
            }
            this.N(new gt(a, c));
        }
    };
    gt.prototype.ef = function () {};
    gt.prototype.Rb = function (a) {
        a -= this.g;
        return { xd: this.wd.Rb(a), done: a < this.wd.Kc ? 1 : 0 };
    };
    vka.prototype.Rb = function (a) {
        if (a >= this.Kc) return this.Nb;
        a = Math.min(1, 1 - a / this.Kc);
        return { center: _.Xk(this.Nb.center, new _.Jh(this.g * a * a * a, this.i * a * a * a)), zoom: this.Nb.zoom - a * (this.Nb.zoom - this.j.zoom), tilt: this.Nb.tilt, heading: this.Nb.heading };
    };
    wka.prototype.Rb = function (a) {
        if (a >= this.Kc) return this.Nb;
        a = Math.min(1, 1 - a / this.Kc);
        a = this.Nb.zoom - a * a * a * this.g;
        return { center: et(this.j, a, this.i).center, zoom: a, tilt: this.Nb.tilt, heading: this.Nb.heading };
    };
    xka.prototype.Rb = function (a) {
        if (a >= this.Kc) return this.Nb;
        a = Math.min(1, 1 - a / this.Kc);
        return { center: _.Xk(this.Nb.center, new _.Jh(this.g * a * a * a, this.i * a * a * a)), zoom: this.Nb.zoom, tilt: this.Nb.tilt, heading: this.Nb.heading };
    };
    yka.prototype.Rb = function (a) {
        if (a >= this.Kc) return this.Nb;
        a = Math.min(1, 1 - a / this.Kc);
        a *= this.i * a * a;
        return { center: jka(this.g, a, this.Nb.center), zoom: this.Nb.zoom, tilt: this.Nb.tilt, heading: this.Nb.heading - a };
    };
    _.n = zka.prototype;
    _.n.Mb = function (a) {
        this.i.Mb(a);
    };
    _.n.Kg = function (a) {
        this.i.Kg(a);
    };
    _.n.getBoundingClientRect = function () {
        return this.i.getBoundingClientRect();
    };
    _.n.Pf = function (a) {
        return this.i.Pf(a);
    };
    _.n.hp = function (a) {
        return this.i.hp(a);
    };
    _.n.zf = function () {
        return this.g.zf();
    };
    _.n.Ln = function (a, b) {
        return this.i.getBounds(a, b);
    };
    _.n.Mn = function () {
        return this.g.Mn();
    };
    _.n.refresh = function () {
        dt(this.g);
    };
    _.n.ee = function (a, b) {
        this.g.ee(a, b);
    };
    _.n.Eh = function (a) {
        this.g.Eh(a);
    };
    _.n.To = function (a) {
        this.g.To(a);
    };
    _.n.Wo = function (a) {
        this.g.Wo(a);
    };
    _.n.Zl = function () {
        return this.g.Zl();
    };
    _.n.Dk = function () {
        this.g.Dk();
    };
    var Uia = Math.sqrt(2);
    ht.prototype.i = function (a, b, c, d, e, f, g) {
        var h = _.De(_.Fe(_.Ge)),
            k = a.__gm,
            l = a.getDiv();
        if (l) {
            _.I.addDomListenerOnce(
                c,
                "mousedown",
                function () {
                    _.Zg(a, "Mi");
                },
                !0
            );
            var m = new _.bia({ We: c, Qq: l, Kq: !0, wr: _.qe(_.Fe(_.Ge), 15), backgroundColor: b.backgroundColor, Zo: !0, Yd: _.qk.Yd, ww: !0 }),
                p = m.Eg,
                q = new _.J();
            _.sn(m.g, 0);
            k.set("panes", m.li);
            k.set("innerContainer", m.Bf);
            var r = new Ns(),
                t = Fka(),
                v,
                w,
                x = _.se(_.Pe(), 14);
            l = Hia();
            var y = 0 < l ? l : x,
                H = a.get("noPerTile") && _.ei[15];
            (l = b.mapId || null) && _.Zg(a, "MId");
            var F = function (Q) {
                _.Pf("util").then(function (ea) {
                    ea.i.g(Q);
                    setTimeout(
                        function () {
                            return _.Yha(ea.g, 1);
                        },
                        _.Ek(_.Ge, 38) ? _.se(_.Ge, 38) : 5e3
                    );
                    ea.o(a);
                });
            };
            (function () {
                var Q = new Zs();
                v = Eja(Q, x, a, H, y);
                w = new Us(h, r, t, H ? null : Q, _.qe(_.Ge, 42), _.xn(), F);
            })();
            w.bindTo("tilt", a);
            w.bindTo("heading", a);
            w.bindTo("bounds", a);
            w.bindTo("zoom", a);
            var L = new dja(new _.Ke(_.ue(_.Ge, 1)), _.Pe(), _.Fe(_.Ge), a, v, t.obliques, !!l);
            Cka(L, a.mapTypes, b.enableSplitTiles);
            k.set("eventCapturer", m.Gh);
            k.set("panBlock", m.i);
            var K = _.wh(!1),
                U = Lja(a, K);
            w.bindTo("baseMapType", U);
            L = k.uj = U.H;
            var da = uja({ draggable: _.No(a, "draggable"), av: _.No(a, "gestureHandling"), hm: k.Me }),
                ia = !_.ei[20] || 0 != a.get("animatedZoom"),
                sa = null,
                ka = !1,
                ta = null,
                ua = new Rs(a, function (Q) {
                    return Bka(m, Q, { Cu: ia });
                }),
                ma = ua.Jc,
                $a = function (Q) {
                    a.get("tilesloading") != Q && a.set("tilesloading", Q);
                    Q ||
                        (sa && sa(),
                        ka || ((ka = !0), _.qe(_.Ge, 42) || F(null), d && d.g && _.Fi(d.g), ta && (ma.Kg(ta), (ta = null)), f && (f.done("wmb", "wmc"), d && d.get("loading") && f.done("smb")), Fja(g)),
                        _.I.trigger(a, "tilesloaded"));
                },
                za = new _.no(function (Q, ea) {
                    Q = new _.ko(p, 0, ma, _.Fo(Q), ea, { vk: !0 });
                    ma.Mb(Q);
                    return Q;
                }, $a),
                Y = _.Hi();
            new Jja(a, l, Y);
            k.V.then(function (Q) {
                Oja(Q, a, k);
            });
            k.V.then(function (Q) {
                Mia(Q)
                    ? (_.Zg(a, "Wma"),
                      f &&
                          (_.Nd(_.Zd, "done", function (ea) {
                              if ((ea = ea.zv)) {
                                  var Ma = ea.o,
                                      zb = ms(ea, "wml") - Ma,
                                      Ya = ms(ea, "wmc") - Ma;
                                  _.Ml(a, "Wmr", ms(ea, "wmr") - Ma);
                                  _.Ml(a, "Wml", zb);
                                  _.Ml(a, "Wmc", Ya);
                                  ms(ea, "smr") && _.Ml(a, "Wsr", ms(ea, "smr") - Ma);
                                  ms(ea, "smc") && _.Ml(a, "Wsc", ms(ea, "smc") - Ma);
                              }
                          }),
                          _.ce(f, "wmb", "wmr"),
                          f.done("main-actionflow-branch")),
                      _.Pf("webgl").then(function (ea) {
                          f && f.Xf("wml");
                          var Ma = !1,
                              zb = Q.isEmpty() ? os(_.te(_.Ge, 40)) : Q.i;
                          try {
                              var Ya = ea.Vu(m.Bf, $a, ma, U.g, _.Fe(_.Ge), zb, _.cl(Y, !0), qs(new _.Je(Y.g.W[1])), a, y);
                          } catch (Kb) {
                              Ma = !0;
                          } finally {
                              Ma ? k.ka(!1) : (k.ka(!0), (k.Ff = Ya), ma.Wo(Ya.It()), _.Zg(a, "Wms"));
                          }
                      }))
                    : k.ka(!1);
            });
            k.j.then(function (Q) {
                w.j = Q;
                if ((U.N = Q))
                    U.g.xc(function (Ma) {
                        Ma ? za.clear() : _.oo(za, U.H.get());
                    });
                else {
                    var ea = null;
                    U.H.xc(function (Ma) {
                        ea != Ma && ((ea = Ma), _.oo(za, Ma));
                    });
                }
            });
            k.set("cursor", a.get("draggableCursor"));
            new wja(a, ma, m, da);
            var aa = _.No(a, "draggingCursor"),
                qa = _.No(k, "cursor"),
                Aa = new pja(k.get("panBlock"));
            aa = new _.rr(m.Bf, aa, qa);
            var eb = ika(
                ma,
                m,
                aa,
                function (Q) {
                    var ea = da.get();
                    Aa.j("cooperative" == ea ? Q : 4);
                    return ea;
                },
                {
                    Jm: !0,
                    Yq: function () {
                        return !a.get("disableDoubleClickZoom");
                    },
                    ss: function () {
                        return a.get("scrollwheel");
                    },
                }
            );
            da.xc(function (Q) {
                eb.Zi("cooperative" == Q || "none" == Q);
            });
            e({ map: a, Jc: ma, uj: L, li: m.li });
            k.j.then(function (Q) {
                Q ||
                    _.Pf("onion").then(function (ea) {
                        ea.i(a, v);
                    });
            });
            _.ei[35] && (Gka(a), Hka(a));
            var Ja = new Os();
            Ja.bindTo("tilt", a);
            Ja.bindTo("zoom", a);
            Ja.bindTo("mapTypeId", a);
            Ja.bindTo("aerial", t.obliques, "available");
            _.z.Promise.all([k.j, k.V]).then(function (Q) {
                Q = _.A(Q);
                var ea = Q.next().value;
                Q.next();
                (Ja.g = ea) && Ps(Ja);
            });
            k.bindTo("tilt", Ja, "actualTilt");
            _.I.addListener(w, "attributiontext_changed", function () {
                a.set("mapDataProviders", w.get("attributionText"));
            });
            if (!l) {
                var xb = new Ss();
                _.Pf("util").then(function (Q) {
                    Q.g.g(function () {
                        K.set(!0);
                        xb.set("uDS", !0);
                    });
                });
                xb.bindTo("styles", a);
                xb.bindTo("mapTypeId", U);
                xb.bindTo("mapTypeStyles", U, "styles");
                k.bindTo("apistyle", xb);
                k.bindTo("hasCustomStyles", xb);
                _.I.forward(xb, "styleerror", a);
            }
            e = new $s(k.i);
            e.bindTo("tileMapType", U);
            k.bindTo("style", e);
            var Da = new _.Bn(a, ma, function () {
                    var Q = k.set;
                    if (Da.H && Da.o && Da.g && Da.j && Da.i) {
                        if (Da.g.g) {
                            var ea = Da.g.g.g(Da.o, Da.j, _.bl(Da.g), Da.g.tilt, Da.g.heading, Da.i);
                            var Ma = new _.M(-ea[0], -ea[1]);
                            ea = new _.M(Da.i.Na - ea[0], Da.i.Pa - ea[1]);
                        } else (Ma = _.al(Da.g, _.Xk(Da.H.min, Da.o))), (ea = _.al(Da.g, _.Xk(Da.H.max, Da.o))), (Ma = new _.M(Ma.Na, Ma.Pa)), (ea = new _.M(ea.Na, ea.Pa));
                        Ma = new _.ii([Ma, ea]);
                    } else Ma = null;
                    Q.call(k, "pixelBounds", Ma);
                }),
                ya = Da;
            ma.Mb(Da);
            k.set("projectionController", Da);
            k.set("mouseEventTarget", {});
            new at(_.qk.i, m.Bf).bindTo("title", k);
            d &&
                (d.j.xc(function () {
                    var Q = d.j.get();
                    ta || !Q || ka || ((ta = new _.Er(p, -1, Q, ma.He)), d.g && _.Fi(d.g), ma.Mb(ta));
                }),
                d.bindTo("tilt", k),
                d.bindTo("size", k));
            k.bindTo("zoom", a);
            k.bindTo("center", a);
            k.bindTo("size", q);
            k.bindTo("baseMapType", U);
            a.set("tosUrl", _.sia);
            e = new Ys({ projection: 1 });
            e.bindTo("immutable", k, "baseMapType");
            aa = new _.jr({ projection: new _.Ih() });
            aa.bindTo("projection", e);
            a.bindTo("projection", aa);
            Gja(a, k, ma, ua);
            Hja(a, k, ma);
            var Za = new Mja(a, ma);
            _.I.addListener(k, "movecamera", function (Q) {
                Za.moveCamera(Q);
            });
            k.j.then(function (Q) {
                Za.o = Q ? 2 : 1;
                if (void 0 !== Za.j || void 0 !== Za.i) Za.moveCamera({ tilt: Za.j, heading: Za.i }), (Za.j = void 0), (Za.i = void 0);
            });
            var ab = new Xs(ma, a);
            ab.bindTo("mapTypeMaxZoom", U, "maxZoom");
            ab.bindTo("mapTypeMinZoom", U, "minZoom");
            ab.bindTo("maxZoom", a);
            ab.bindTo("minZoom", a);
            ab.bindTo("trackerMaxZoom", r, "maxZoom");
            ab.bindTo("restriction", a);
            ab.bindTo("projection", a);
            k.j.then(function (Q) {
                ab.i = Q;
                ab.update();
            });
            var Rb = new _.sr(_.ln(c));
            k.bindTo("fontLoaded", Rb);
            e = k.O;
            e.bindTo("scrollwheel", a);
            e.bindTo("disableDoubleClickZoom", a);
            e = function () {
                var Q = a.get("streetView");
                Q ? (a.bindTo("svClient", Q, "client"), Q.__gm.bindTo("fontLoaded", Rb)) : (a.unbind("svClient"), a.set("svClient", null));
            };
            e();
            _.I.addListener(a, "streetview_changed", e);
            a.g ||
                ((sa = function () {
                    sa = null;
                    _.z.Promise.all([_.Pf("controls"), k.j, k.V]).then(function (Q) {
                        var ea = _.A(Q);
                        Q = ea.next().value;
                        var Ma = ea.next().value;
                        ea.next();
                        ea = new Q.Qp(m.g);
                        k.set("layoutManager", ea);
                        Q.Jw(ea, a, U, m.g, w, t.report_map_issue, ab, Ja, m.Gh, c, k.Me, v, ya, ma, Ma);
                        Q.Kw(a, m.Bf, m.g, Ma && !1, Ma && !1);
                        Q.bp(c);
                    });
                }),
                _.Zg(a, "Mm"),
                b.v2 && _.Zg(a, "Mz"),
                _.Nl("Mm", "-p", a),
                Dka(a, U),
                Eka(a));
            b = new dja(
                new _.Ke(_.ue(_.Ge, 1)),
                _.Pe(),
                _.Fe(_.Ge),
                a,
                new Ks(v, function (Q) {
                    return H ? y : Q || x;
                }),
                t.obliques,
                !!l
            );
            aka(b, a.overlayMapTypes);
            new Dja(_.zk(_.Zg, a), m.li.mapPane, a.overlayMapTypes, ma, L, K);
            _.ei[35] && k.bindTo("card", a);
            _.ei[15] && k.bindTo("authUser", a);
            var Oa = 0,
                Na = 0,
                bb = function () {
                    var Q = m.g,
                        ea = Q.clientWidth;
                    Q = Q.clientHeight;
                    if (Oa != ea || Na != Q) (Oa = ea), (Na = Q), ma && ma.Dk(), q.set("size", new _.Tg(ea, Q)), ab.update();
                },
                mb = document.createElement("iframe");
            mb.setAttribute("aria-hidden", "true");
            mb.frameBorder = "0";
            mb.tabIndex = -1;
            mb.style.cssText = "z-index: -1; position: absolute; width: 100%;height: 100%; top: 0; left: 0; border: none";
            _.I.addDomListener(mb, "load", function () {
                bb();
                _.I.addDomListener(mb.contentWindow, "resize", bb);
            });
            m.g.appendChild(mb);
            b = lja(m.Bf);
            m.g.appendChild(b);
        }
    };
    ht.prototype.fitBounds = Is;
    ht.prototype.g = function (a, b, c, d, e) {
        a = new _.kr(a, b, c, {});
        a.setUrl(d).then(e);
        return a;
    };
    _.Qf("map", new ht());
});
