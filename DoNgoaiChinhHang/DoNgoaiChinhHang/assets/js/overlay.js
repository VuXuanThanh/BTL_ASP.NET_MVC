google.maps.__gjsload__("overlay", function (_) {
    var it = function (a) {
            this.g = a;
        },
        Jka = function () {},
        jt = function (a) {
            a.Bo = a.Bo || new Jka();
            return a.Bo;
        },
        Kka = function (a) {
            this.ob = new _.Di(function () {
                var b = a.Bo;
                if (a.getPanes()) {
                    if (a.getProjection()) {
                        if (!b.wn && a.onAdd) a.onAdd();
                        b.wn = !0;
                        a.draw();
                    }
                } else {
                    if (b.wn)
                        if (a.onRemove) a.onRemove();
                        else a.remove();
                    b.wn = !1;
                }
            }, 0);
        },
        Lka = function (a, b) {
            function c() {
                return _.Ei(e.ob);
            }
            var d = jt(a),
                e = d.vm;
            e || (e = d.vm = new Kka(a));
            _.Nb(d.Ma || [], _.I.removeListener);
            var f = (d.Ab = d.Ab || new _.Fr()),
                g = b.__gm;
            f.bindTo("zoom", g);
            f.bindTo("offset", g);
            f.bindTo("center", g, "projectionCenterQ");
            f.bindTo("projection", b);
            f.bindTo("projectionTopLeft", g);
            f = d.bs = d.bs || new it(f);
            f.bindTo("zoom", g);
            f.bindTo("offset", g);
            f.bindTo("projection", b);
            f.bindTo("projectionTopLeft", g);
            a.bindTo("projection", f, "outProjection");
            a.bindTo("panes", g);
            d.Ma = [_.I.addListener(a, "panes_changed", c), _.I.addListener(g, "zoom_changed", c), _.I.addListener(g, "offset_changed", c), _.I.addListener(b, "projection_changed", c), _.I.addListener(g, "projectioncenterq_changed", c)];
            c();
            b instanceof _.hg && (_.Zg(b, "Ox"), _.Nl("Ox", "-p", a));
        },
        Pka = function (a) {
            if (a) {
                var b = a.getMap();
                if (Mka(a) !== b && b && b instanceof _.hg) {
                    var c = b.__gm;
                    c.overlayLayer
                        ? (a.__gmop = new Nka(b, a, c.overlayLayer))
                        : c.g.then(function (d) {
                              d = d.Jc;
                              var e = new kt(b, d);
                              d.Mb(e);
                              c.overlayLayer = e;
                              Oka(a);
                              Pka(a);
                          });
                }
            }
        },
        Oka = function (a) {
            if (a) {
                var b = a.__gmop;
                b && ((a.__gmop = null), _.Ol("Ox", "-p", b.g), b.g.unbindAll(), b.g.set("panes", null), b.g.set("projection", null), b.j.Lg(b), b.i && ((b.i = !1), b.g.onRemove ? b.g.onRemove() : b.g.remove()));
            }
        },
        Mka = function (a) {
            return (a = a.__gmop) ? a.map : null;
        },
        Nka = function (a, b, c) {
            this.map = a;
            this.g = b;
            this.j = c;
            this.i = !1;
            _.Zg(this.map, "Ox");
            _.Nl("Ox", "-p", this.g);
            c.Kf(this);
        },
        Qka = function (a, b) {
            a.g.get("projection") != b && (a.g.bindTo("panes", a.map.__gm), a.g.set("projection", b));
        },
        kt = function (a, b) {
            this.o = a;
            this.j = b;
            this.g = null;
            this.i = [];
        };
    _.D(it, _.J);
    it.prototype.changed = function (a) {
        "outProjection" != a && ((a = !!(this.get("offset") && this.get("projectionTopLeft") && this.get("projection") && _.af(this.get("zoom")))), a == !this.get("outProjection") && this.set("outProjection", a ? this.g : null));
    };
    var lt = {};
    _.D(Kka, _.J);
    lt.Kf = function (a) {
        if (a) {
            var b = a.getMap();
            (jt(a).Ir || null) !== b && (b && Lka(a, b), (jt(a).Ir = b));
        }
    };
    lt.Lg = function (a) {
        var b = jt(a),
            c = b.Ab;
        c && c.unbindAll();
        (c = b.bs) && c.unbindAll();
        a.unbindAll();
        a.set("panes", null);
        a.set("projection", null);
        b.Ma && _.Nb(b.Ma, _.I.removeListener);
        b.Ma = null;
        b.vm && (b.vm.ob.ke(), (b.vm = null));
        _.Ol("Ox", "-p", a);
        delete jt(a).Ir;
    };
    var mt = {};
    Nka.prototype.draw = function () {
        this.i || ((this.i = !0), this.g.onAdd && this.g.onAdd());
        this.g.draw && this.g.draw();
    };
    kt.prototype.dispose = function () {};
    kt.prototype.qd = function (a, b, c, d, e, f, g, h) {
        var k = (this.g = this.g || new _.Bn(this.o, this.j, function () {}));
        k.qd(a, b, c, d, e, f, g, h);
        a = _.A(this.i);
        for (b = a.next(); !b.done; b = a.next()) (b = b.value), Qka(b, k), b.draw();
    };
    kt.prototype.Kf = function (a) {
        this.i.push(a);
        this.g && Qka(a, this.g);
        this.j.refresh();
    };
    kt.prototype.Lg = function (a) {
        _.Xb(this.i, a);
    };
    mt.Kf = Pka;
    mt.Lg = Oka;
    _.Qf("overlay", {
        Vp: function (a) {
            if (a) {
                (0, lt.Lg)(a);
                (0, mt.Lg)(a);
                var b = a.getMap();
                b && (b instanceof _.hg ? (0, mt.Kf)(a) : (0, lt.Kf)(a));
            }
        },
        preventMapHitsFrom: function (a) {
            _.ho(a, {
                onClick: function (b) {
                    return _.Mn(b.event);
                },
                Sd: function (b) {
                    return _.Jn(b);
                },
                ii: function (b) {
                    return _.Kn(b);
                },
                Fe: function (b) {
                    return _.Kn(b);
                },
                be: function (b) {
                    return _.Ln(b);
                },
            }).Zi(!0);
        },
        preventMapHitsAndGesturesFrom: function (a) {
            a.addEventListener("click", _.Uf);
            a.addEventListener("contextmenu", _.Uf);
            a.addEventListener("dblclick", _.Uf);
            a.addEventListener("mousedown", _.Uf);
            a.addEventListener("mousemove", _.Uf);
            a.addEventListener("MSPointerDown", _.Uf);
            a.addEventListener("pointerdown", _.Uf);
            a.addEventListener("touchstart", _.Uf);
            a.addEventListener("wheel", _.Uf);
        },
    });
});
