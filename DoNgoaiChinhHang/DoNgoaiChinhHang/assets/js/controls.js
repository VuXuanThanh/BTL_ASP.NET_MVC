google.maps.__gjsload__("controls", function (_) {
    var Jra,
        qC,
        Kra,
        rC,
        sC,
        tC,
        uC,
        Lra,
        vC,
        Mra,
        wC,
        xC,
        Nra,
        Ora,
        Pra,
        Qra,
        yC,
        Sra,
        zC,
        AC,
        BC,
        DC,
        Tra,
        Ura,
        Vra,
        Wra,
        EC,
        FC,
        GC,
        HC,
        Xra,
        Yra,
        IC,
        JC,
        KC,
        asa,
        LC,
        MC,
        NC,
        bsa,
        OC,
        esa,
        dsa,
        csa,
        fsa,
        PC,
        RC,
        hsa,
        isa,
        jsa,
        gsa,
        SC,
        VC,
        lsa,
        ksa,
        WC,
        XC,
        nsa,
        msa,
        osa,
        psa,
        qsa,
        ZC,
        $C,
        rsa,
        ssa,
        tsa,
        aD,
        wsa,
        vsa,
        xsa,
        cD,
        bD,
        ysa,
        Dsa,
        Csa,
        zsa,
        Asa,
        Bsa,
        dD,
        Esa,
        eD,
        Fsa,
        fD,
        gD,
        Gsa,
        Isa,
        Hsa,
        Jsa,
        hD,
        jD,
        iD,
        lD,
        Ksa,
        Lsa,
        mD,
        Msa,
        nD,
        Nsa,
        Qsa,
        Osa,
        Psa,
        Tsa,
        Ssa,
        Rsa,
        Vsa,
        oD,
        Wsa,
        pD,
        qD,
        Xsa,
        Ysa,
        Zsa,
        $sa,
        rD,
        ata,
        dta,
        bta,
        cta,
        eta,
        fta,
        sD,
        ita,
        gta,
        hta,
        uD,
        jta,
        xD,
        wD,
        kta,
        lta,
        vD,
        yD,
        zD,
        nta,
        AD,
        BD,
        DD,
        CD,
        ota,
        ED,
        FD,
        pta,
        GD,
        qta,
        rta,
        sta,
        HD,
        vta,
        wta,
        tta,
        ID,
        yta,
        xta,
        zta,
        Ata,
        KD,
        JD,
        Cta,
        Dta,
        LD,
        Mta,
        Sta,
        ND,
        MD,
        Tta,
        Jta,
        Lta,
        Gta,
        Ita,
        Uta,
        Hta,
        Kta,
        Nta,
        Fta,
        Wta,
        Xta,
        Yta,
        Zta,
        $ta,
        OD,
        Eta,
        Pta,
        Rta,
        Qta,
        Ota,
        aua,
        bua,
        Vta,
        cua,
        dua,
        PD,
        eua,
        fua,
        QD,
        gua,
        hua,
        RD;
    Jra = function (a, b) {
        _.ld(a, b);
    };
    qC = function (a) {
        a.style.textAlign = _.Ur.Tc() ? "right" : "left";
    };
    Kra = function (a, b) {
        b = b instanceof _.Yc ? b : _.qla(b);
        a.href = _.Bt(b);
    };
    rC = function (a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        a.classList.add.apply(a.classList, _.oa(c.map(_.Xt)));
    };
    sC = function (a) {
        return "none" != a.style.display;
    };
    tC = function (a) {
        var b = void 0 === b ? !1 : b;
        return new _.z.Promise(function (c, d) {
            window.requestAnimationFrame(function () {
                try {
                    a ? (_.tx(a, b) ? c() : d(Error("Error focusing element: The element is not focused after the focus attempt."))) : d(Error("Error focusing element: null element cannot be focused"));
                } catch (e) {
                    d(e);
                }
            });
        });
    };
    uC = function (a, b) {
        return _.woa(b).filter(function (c) {
            return c === a.g || c === a.i || (c.offsetWidth && c.offsetHeight && "hidden" !== window.getComputedStyle(c).visibility);
        });
    };
    Lra = function (a, b) {
        var c = b.filter(function (h) {
                return a.ownerElement.contains(h);
            }),
            d = b.indexOf(c[0]),
            e = b.indexOf(a.g, d),
            f = b.indexOf(a.i, e);
        b = b.indexOf(c[c.length - 1], f);
        c = _.A([d, e, f, b]);
        for (var g = c.next(); !g.done; g = c.next());
        return { gw: d, co: e, xr: f, hw: b };
    };
    vC = function (a) {
        tC(a).catch(function () {});
    };
    Mra = function (a) {
        a.o && a.o.remove();
        _.Eoa(a.H);
    };
    wC = function (a) {
        "none" !== a.element.style.display &&
            (a.trigger("hide"),
            Mra(a),
            (a.element.style.display = "none"),
            tC(a.N).catch(function () {
                a.Ah && a.Ah();
            }));
    };
    xC = function (a) {
        _.Xg.call(this, a);
        var b = this;
        this.ownerElement = a.ownerElement;
        this.content = a.content;
        this.Ah = a.Ah;
        this.label = a.label;
        this.km = a.km;
        this.Km = a.Km;
        this.N = null;
        this.g = document.createElement("div");
        this.g.tabIndex = 0;
        this.g.setAttribute("aria-hidden", "true");
        this.i = this.g.cloneNode(!0);
        this.j = null;
        _.im(_.Hra, this.element);
        rC(this.element, "modal-overlay-view");
        this.element.setAttribute("role", "dialog");
        (this.km && this.label) || (this.km ? this.element.setAttribute("aria-labelledby", this.km) : this.label && this.element.setAttribute("aria-label", this.label));
        _.qk.Yd && !this.content.hasAttribute("tabindex") && this.content instanceof HTMLDivElement ? (this.content.tabIndex = -1) : (this.content.tabIndex = this.content.tabIndex);
        _.Au(this.content);
        this.element.appendChild(this.g);
        this.element.appendChild(this.content);
        this.element.appendChild(this.i);
        this.element.style.display = "none";
        this.H = new _.wx(this);
        this.o = null;
        this.element.addEventListener("click", function (c) {
            (b.content.contains(c.target) && c.target !== c.currentTarget) || wC(b);
        });
        this.Km && _.I.forward(this, "hide", this.Km);
        _.Wg(this, a, xC, "ModalOverlayView");
    };
    Nra = function (a, b, c) {
        var d = a.length,
            e = "string" === typeof a ? a.split("") : a;
        for (--d; 0 <= d; --d) d in e && b.call(c, e[d], d, a);
    };
    Ora = function (a) {
        if (a instanceof _.id) return a;
        var b = "object" == typeof a,
            c = null;
        b && a.bo && (c = a.rj());
        return _.kd(_.Ifa(b && a.Zg ? a.Ad() : String(a)), c);
    };
    Pra = function (a) {
        return String(a).replace(/\-([a-z])/g, function (b, c) {
            return c.toUpperCase();
        });
    };
    Qra = function () {
        return _.Qea.some(function (a) {
            return !!document[a];
        });
    };
    yC = function (a) {
        a.style.visibility = "";
    };
    Sra = function (a, b) {
        var c = Rra[b];
        if (!c) {
            var d = Pra(b);
            c = d;
            void 0 === a.style[d] && ((d = _.Bu() + _.vla(d)), void 0 !== a.style[d] && (c = d));
            Rra[b] = c;
        }
        return c;
    };
    zC = function (a, b, c) {
        if ("string" === typeof b) (b = Sra(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = Sra(c, d);
                f && (c.style[f] = e);
            }
    };
    AC = function (a, b, c) {
        if (b instanceof _.vl) {
            var d = b.x;
            b = b.y;
        } else (d = b), (b = c);
        a.style.left = _.Cu(d, !1);
        a.style.top = _.Cu(b, !1);
    };
    BC = function (a) {
        return new _.nt(a.offsetWidth, a.offsetHeight);
    };
    _.CC = function (a, b) {
        _.qk.Yd ? (a.style.styleFloat = b) : (a.style.cssFloat = b);
    };
    DC = function (a, b) {
        a.style.WebkitBorderRadius = b;
        a.style.borderRadius = b;
        a.style.MozBorderRadius = b;
    };
    Tra = function (a, b) {
        a.style.WebkitBorderTopLeftRadius = b;
        a.style.WebkitBorderTopRightRadius = b;
        a.style.borderTopLeftRadius = b;
        a.style.borderTopRightRadius = b;
        a.style.MozBorderTopLeftRadius = b;
        a.style.MozBorderTopRightRadius = b;
    };
    Ura = function (a, b) {
        a.style.WebkitBorderBottomLeftRadius = b;
        a.style.WebkitBorderBottomRightRadius = b;
        a.style.borderBottomLeftRadius = b;
        a.style.borderBottomRightRadius = b;
        a.style.MozBorderBottomLeftRadius = b;
        a.style.MozBorderBottomRightRadius = b;
    };
    Vra = function (a) {
        var b = _.Bl(2);
        a.style.WebkitBorderBottomLeftRadius = b;
        a.style.WebkitBorderTopLeftRadius = b;
        a.style.borderBottomLeftRadius = b;
        a.style.borderTopLeftRadius = b;
        a.style.MozBorderBottomLeftRadius = b;
        a.style.MozBorderTopLeftRadius = b;
    };
    Wra = function (a) {
        var b = _.Bl(2);
        a.style.WebkitBorderBottomRightRadius = b;
        a.style.WebkitBorderTopRightRadius = b;
        a.style.borderBottomRightRadius = b;
        a.style.borderTopRightRadius = b;
        a.style.MozBorderBottomRightRadius = b;
        a.style.MozBorderTopRightRadius = b;
    };
    EC = function (a, b) {
        b = b || {};
        var c = a.style;
        c.color = "black";
        c.fontFamily = "Roboto,Arial,sans-serif";
        _.wn(a);
        _.vn(a);
        b.title && a.setAttribute("title", b.title);
        c = _.ur() ? 1.38 : 1;
        a = a.style;
        a.fontSize = _.Bl(b.fontSize || 11);
        a.backgroundColor = "#fff";
        for (var d = [], e = 0, f = _.Se(b.padding); e < f; ++e) d.push(_.Bl(c * b.padding[e]));
        a.padding = d.join(" ");
        b.width && (a.width = _.Bl(c * b.width));
    };
    FC = function (a) {
        return 40 < a ? a / 2 - 2 : 28 > a ? a - 10 : 18;
    };
    GC = function (a, b, c) {
        this.g = a;
        this.i = _.zx(a, b.getDiv());
        _.ou(a);
        a = this.o = _.nn("a");
        a.setAttribute("target", "_blank");
        a.setAttribute("rel", "noopener");
        a.setAttribute("title", "B\u00e1o c\u00e1o l\u1ed7i trong b\u1ea3n \u0111\u1ed3 \u0111\u01b0\u1eddng ho\u1eb7c h\u00ecnh \u1ea3nh \u0111\u1ebfn Google");
        _.mla(a, "B\u00e1o c\u00e1o l\u1ed7i trong b\u1ea3n \u0111\u1ed3 \u0111\u01b0\u1eddng ho\u1eb7c h\u00ecnh \u1ea3nh \u0111\u1ebfn Google");
        _.on("B\u00e1o c\u00e1o m\u1ed9t l\u1ed7i b\u1ea3n \u0111\u1ed3", a);
        _.xqa(a);
        _.I.addDomListener(a, "click", function () {
            _.Ml(b, "Rc");
        });
        this.i.appendChild(a);
        this.H = b;
        this.j = "";
        this.N = c;
    };
    HC = function (a) {
        var b = a.get("mapSize"),
            c = a.get("available"),
            d = !1 !== a.get("enabled");
        if (b && void 0 !== c) {
            var e = a.get("mapTypeId");
            b = 300 <= b.width && c && _.Wla(e) && d;
            sC(a.g) !== b && (_.nu(a.g, b), a.set("width", _.ni(a.g).width), _.I.trigger(a.g, "resize"));
            b ? (_.uu(), _.Zg(a.H, "Rs"), _.Nl("Rs", "-p", a)) : _.Ol("Rs", "-p", a);
            a.set("rmiLinkData", c ? Xra(a) : void 0);
        }
    };
    Xra = function (a) {
        return { label: "B\u00e1o c\u00e1o m\u1ed9t l\u1ed7i b\u1ea3n \u0111\u1ed3", tooltip: "B\u00e1o c\u00e1o l\u1ed7i trong b\u1ea3n \u0111\u1ed3 \u0111\u01b0\u1eddng ho\u1eb7c h\u00ecnh \u1ea3nh \u0111\u1ebfn Google", url: a.j };
    };
    Yra = function (a, b) {
        a.items = a.items || [];
        var c = (a.items[b] = a.items[b] || {}),
            d = _.Cqa(a, b);
        if (!c.ff) {
            a.i = a.i || new _.M(0, 0);
            var e = (a.items[0] && a.items[0].ff) || new _.M(0, 0);
            c.ff = new _.M(e.x + a.i.x * b, e.y + a.i.y * b);
        }
        return { url: d, size: c.ve || a.ve, scaledSize: a.g.size, origin: c.ff, anchor: c.anchor || a.anchor };
    };
    _.$ra = function (a, b) {
        var c = document.createElement("div"),
            d = c.style;
        d.backgroundColor = "white";
        d.fontWeight = "500";
        d.fontFamily = "Roboto, sans-serif";
        d.padding = "15px 25px";
        d.boxSizing = "border-box";
        d.top = "5px";
        d = document.createElement("div");
        var e = document.createElement("img");
        e.alt = "";
        e.src = _.zn + "api-3/images/google_gray.svg";
        e.style.border = e.style.margin = e.style.padding = 0;
        e.style.height = "17px";
        e.style.verticalAlign = "middle";
        e.style.width = "52px";
        _.vn(e);
        d.appendChild(e);
        c.appendChild(d);
        d = document.createElement("div");
        d.style.lineHeight = "20px";
        d.style.margin = "15px 0";
        e = document.createElement("span");
        e.style.color = "rgba(0,0,0,0.87)";
        e.style.fontSize = "14px";
        e.innerText = "Trang n\u00e0y kh\u00f4ng th\u1ec3 t\u1ea3i Google Maps \u0111\u00fang c\u00e1ch.";
        d.appendChild(e);
        c.appendChild(d);
        d = document.createElement("table");
        d.style.width = "100%";
        e = document.createElement("tr");
        var f = document.createElement("td");
        f.style.lineHeight = "16px";
        f.style.verticalAlign = "middle";
        var g = document.createElement("a");
        Kra(g, b);
        g.innerText = "B\u1ea1n c\u00f3 s\u1edf h\u1eefu trang web n\u00e0y kh\u00f4ng?";
        g.target = "_blank";
        g.setAttribute("rel", "noopener");
        g.style.color = "rgba(0, 0, 0, 0.54)";
        g.style.fontSize = "12px";
        g.onclick = function () {
            _.Zg(a, "Dl");
        };
        f.appendChild(g);
        e.appendChild(f);
        _.hm(Zra);
        b = document.createElement("td");
        b.style.textAlign = "right";
        f = document.createElement("button");
        f.className = "dismissButton";
        f.innerText = "OK";
        f.onclick = function () {
            a.removeChild(c);
            _.I.trigger(a, "dmd");
            _.Zg(a, "Dd");
        };
        b.appendChild(f);
        e.appendChild(b);
        d.appendChild(e);
        c.appendChild(d);
        a.appendChild(c);
        _.Zg(a, "D0");
        return c;
    };
    IC = function (a) {
        var b = this;
        this.i = a;
        this.ob = new _.Di(function () {
            return b.j();
        }, 0);
        _.I.zc(a, "resize", this, this.j);
        this.g = new _.z.Map();
        this.o = new _.z.Map();
        a = _.A([1, 2, 3, 5, 7, 4, 13, 8, 6, 9, 10, 11, 12]);
        for (var c = a.next(); !c.done; c = a.next()) {
            c = c.value;
            var d = document.createElement("div");
            this.i.appendChild(d);
            this.o.set(c, d);
            this.g.set(c, []);
        }
    };
    JC = function (a, b) {
        if (!sC(a)) return 0;
        b = !b && _.Mt(a.getAttribute("controlWidth"));
        if (!_.af(b) || isNaN(b)) b = a.offsetWidth;
        a = _.Iu(a);
        b += _.Mt(a.marginLeft) || 0;
        return (b += _.Mt(a.marginRight) || 0);
    };
    KC = function (a, b) {
        if (!sC(a)) return 0;
        b = !b && _.Mt(a.getAttribute("controlHeight"));
        if (!_.af(b) || isNaN(b)) b = a.offsetHeight;
        a = _.Iu(a);
        b += _.Mt(a.marginTop) || 0;
        return (b += _.Mt(a.marginBottom) || 0);
    };
    asa = function (a) {
        for (var b = 0, c = _.A(a), d = c.next(); !d.done; d = c.next()) b = Math.max(d.value.height, b);
        d = c = 0;
        for (var e = a.length; 0 < e; --e) {
            var f = a[e - 1];
            if (b === f.height) {
                f.width > d && f.width > f.height ? (d = f.height) : (c = f.width);
                break;
            } else d = Math.max(f.height, d);
        }
        return new _.Tg(c, d);
    };
    LC = function (a, b, c, d) {
        var e = 0,
            f = 0,
            g = [];
        a = _.A(a);
        for (var h = a.next(); !h.done; h = a.next()) {
            var k = h.value;
            h = k.border;
            k = k.element;
            var l = JC(k);
            var m = JC(k, !0),
                p = KC(k),
                q = KC(k, !0);
            k.style[b] = _.Bl("left" === b ? e : e + (l - m));
            k.style[c] = _.Bl("top" === c ? 0 : p - q);
            l = e + l;
            p > f && ((f = p), d.push({ minWidth: e, height: f }));
            e = l;
            h || g.push(new _.Tg(e, p));
            yC(k);
        }
        return asa(g);
    };
    MC = function (a, b, c, d) {
        var e = 0,
            f = [];
        a = _.A(a);
        for (var g = a.next(); !g.done; g = a.next()) {
            var h = g.value;
            g = h.border;
            h = h.element;
            for (var k = JC(h), l = KC(h), m = JC(h, !0), p = KC(h, !0), q = 0, r = _.A(d), t = r.next(); !t.done; t = r.next()) {
                t = t.value;
                if (t.minWidth > k) break;
                q = t.height;
            }
            e = Math.max(q, e);
            h.style[c] = _.Bl("top" === c ? e : e + l - p);
            h.style[b] = _.Bl("left" === b ? 0 : k - m);
            e += l;
            g || f.push(new _.Tg(k, e));
            yC(h);
        }
        return asa(f);
    };
    NC = function (a, b, c, d) {
        for (var e = 0, f = 0, g = _.A(a), h = g.next(); !h.done; h = g.next()) {
            var k = h.value;
            h = k.border;
            k = k.element;
            var l = JC(k),
                m = KC(k),
                p = JC(k, !0);
            "left" === b ? (k.style.left = 0) : "right" === b ? (k.style.right = _.Bl(l - p)) : (k.style.left = _.Bl((c - p) / 2));
            e += m;
            h || (f = Math.max(l, f));
        }
        b = (d - e) / 2;
        a = _.A(a);
        for (c = a.next(); !c.done; c = a.next()) (c = c.value.element), (c.style.top = _.Bl(b)), (b += KC(c)), yC(c);
        return f;
    };
    bsa = function (a, b, c) {
        for (var d = 0, e = 0, f = _.A(a), g = f.next(); !g.done; g = f.next()) {
            var h = g.value;
            g = h.border;
            h = h.element;
            var k = JC(h),
                l = KC(h),
                m = KC(h, !0);
            h.style[b] = _.Bl("top" === b ? 0 : l - m);
            d += k;
            g || (e = Math.max(l, e));
        }
        b = (c - d) / 2;
        a = _.A(a);
        for (c = a.next(); !c.done; c = a.next()) (c = c.value.element), (c.style.left = _.Bl(b)), (b += JC(c)), yC(c);
        return e;
    };
    OC = function (a, b, c, d, e, f, g) {
        this.label = a || "";
        this.alt = b || "";
        this.o = f || null;
        this.Gg = c;
        this.g = d;
        this.j = e;
        this.i = g || null;
    };
    esa = function (a, b) {
        var c = this;
        this.N = a;
        b = b || ["roadmap", "satellite", "hybrid", "terrain"];
        var d = _.ll(b, "terrain") && _.ll(b, "roadmap"),
            e = _.ll(b, "hybrid") && _.ll(b, "satellite");
        this.j = {};
        this.o = [];
        this.i = this.H = this.g = null;
        _.I.addListener(this, "maptypeid_changed", function () {
            var k = c.get("mapTypeId");
            c.i && c.i.set("display", "satellite" == k);
            c.g && c.g.set("display", "roadmap" == k);
        });
        _.I.addListener(this, "zoom_changed", function () {
            if (c.g) {
                var k = c.get("zoom");
                c.g.set("enabled", k <= c.H);
            }
        });
        b = _.A(b);
        for (var f = b.next(); !f.done; f = b.next())
            if (((f = f.value), "hybrid" != f || !e))
                if ("terrain" != f || !d) {
                    var g = a.get(f);
                    if (g) {
                        var h = null;
                        "roadmap" == f
                            ? d &&
                              ((this.g = csa(this, "terrain", "roadmap", "terrain", void 0, "Thu nh\u1ecf \u0111\u1ec3 hi\u1ec3n th\u1ecb b\u1ea3n \u0111\u1ed3 ph\u1ed1 c\u00f3 \u0111\u1ecba h\u00ecnh")),
                              (h = [[this.g]]),
                              (this.H = a.get("terrain").maxZoom))
                            : ("satellite" != f && "hybrid" != f) || !e || ((this.i = dsa(this)), (h = [[this.i]]));
                        this.o.push(new OC(g.name, g.alt, "mapTypeId", f, null, null, h));
                    }
                }
    };
    dsa = function (a) {
        a = csa(a, "hybrid", "satellite", "labels", "Nh\u00e3n");
        a.set("enabled", !0);
        return a;
    };
    csa = function (a, b, c, d, e, f) {
        var g = a.N.get(b);
        e = new OC(e || g.name, g.alt, d, !0, !1, f);
        a.j[b] = { mapTypeId: c, Ik: d, value: !0 };
        a.j[c] = { mapTypeId: c, Ik: d, value: !1 };
        return e;
    };
    fsa = function (a, b, c) {
        if (!a || !b || "number" !== typeof c) return null;
        c = Math.pow(2, -c);
        var d = a.fromLatLngToPoint(b);
        return _.rt(a.fromPointToLatLng(new _.M(d.x + c, d.y)), b);
    };
    PC = function (a) {
        this.i = a;
        this.g = null;
    };
    RC = function (a) {
        _.ox.call(this, a, QC);
        _.Gw(a, QC) ||
            _.Fw(
                a,
                QC,
                { options: 0 },
                [
                    "div",
                    ,
                    1,
                    0,
                    [
                        " ",
                        ["img", 8, 1, 1],
                        " ",
                        ["button", , 1, 2, [" ", ["img", 8, 1, 3], " ", ["img", 8, 1, 4], " ", ["img", 8, 1, 5], " "]],
                        " ",
                        ["button", , , 12, [" ", ["img", 8, 1, 6], " ", ["img", 8, 1, 7], " ", ["img", 8, 1, 8], " "]],
                        " ",
                        ["button", , , 13, [" ", ["img", 8, 1, 9], " ", ["img", 8, 1, 10], " ", ["img", 8, 1, 11], " "]],
                        " <div> ",
                        ["div", , , 14, ["Xoay ch\u1ebf \u0111\u1ed9 xem"]],
                        " ",
                        ["div", , , 15],
                        " ",
                        ["div", , , 16],
                        " </div> ",
                    ],
                ],
                [],
                gsa()
            );
    };
    hsa = function (a) {
        return _.T(a.options, "", -7, -3);
    };
    isa = function (a) {
        return _.T(a.options, "", -8, -3);
    };
    jsa = function (a) {
        return _.T(a.options, "", -9, -3);
    };
    gsa = function () {
        return [
            ["$t", "t-avKK8hDgg9Q", "$a", [7, , , , , "gm-compass"]],
            [
                "$a",
                [
                    8,
                    ,
                    ,
                    ,
                    function (a) {
                        return _.T(a.options, "", -3, -3);
                    },
                    "src",
                    ,
                    ,
                    1,
                ],
                "$a",
                [0, , , , "48", "height", , 1],
                "$a",
                [0, , , , "48", "width", , 1],
            ],
            [
                "$a",
                [7, , , , , "gm-control-active", , 1],
                "$a",
                [7, , , , , "gm-compass-needle", , 1],
                "$a",
                [
                    5,
                    5,
                    ,
                    ,
                    function (a) {
                        return a.Cc ? _.Hv("-webkit-transform", "rotate(" + String(_.T(a.options, 0, -1)) + "deg)") : "rotate(" + String(_.T(a.options, 0, -1)) + "deg)";
                    },
                    "-webkit-transform",
                    ,
                    ,
                    1,
                ],
                "$a",
                [
                    5,
                    5,
                    ,
                    ,
                    function (a) {
                        return a.Cc ? _.Hv("-ms-transform", "rotate(" + String(_.T(a.options, 0, -1)) + "deg)") : "rotate(" + String(_.T(a.options, 0, -1)) + "deg)";
                    },
                    "-ms-transform",
                    ,
                    ,
                    1,
                ],
                "$a",
                [
                    5,
                    5,
                    ,
                    ,
                    function (a) {
                        return a.Cc ? _.Hv("-moz-transform", "rotate(" + String(_.T(a.options, 0, -1)) + "deg)") : "rotate(" + String(_.T(a.options, 0, -1)) + "deg)";
                    },
                    "-moz-transform",
                    ,
                    ,
                    1,
                ],
                "$a",
                [
                    5,
                    5,
                    ,
                    ,
                    function (a) {
                        return a.Cc ? _.Hv("transform", "rotate(" + String(_.T(a.options, 0, -1)) + "deg)") : "rotate(" + String(_.T(a.options, 0, -1)) + "deg)";
                    },
                    "transform",
                    ,
                    ,
                    1,
                ],
                "$a",
                [0, , , , "button", "type", , 1],
                "$a",
                [
                    22,
                    ,
                    ,
                    ,
                    function () {
                        return "compass.north";
                    },
                    "jsaction",
                    ,
                    1,
                ],
            ],
            [
                "$a",
                [
                    8,
                    ,
                    ,
                    ,
                    function (a) {
                        return _.T(a.options, "", -4, -3);
                    },
                    "src",
                    ,
                    ,
                    1,
                ],
                "$a",
                [0, , , , "false", "draggable", , 1],
                "$a",
                [0, , , , "48", "height", , 1],
                "$a",
                [0, , , , "20", "width", , 1],
            ],
            [
                "$a",
                [
                    8,
                    ,
                    ,
                    ,
                    function (a) {
                        return _.T(a.options, "", -5, -3);
                    },
                    "src",
                    ,
                    ,
                    1,
                ],
                "$a",
                [0, , , , "false", "draggable", , 1],
                "$a",
                [0, , , , "48", "height", , 1],
                "$a",
                [0, , , , "20", "width", , 1],
            ],
            [
                "$a",
                [
                    8,
                    ,
                    ,
                    ,
                    function (a) {
                        return _.T(a.options, "", -6, -3);
                    },
                    "src",
                    ,
                    ,
                    1,
                ],
                "$a",
                [0, , , , "false", "draggable", , 1],
                "$a",
                [0, , , , "48", "height", , 1],
                "$a",
                [0, , , , "20", "width", , 1],
            ],
            ["$a", [8, , , , hsa, "src", , , 1], "$a", [0, , , , "false", "draggable", , 1], "$a", [0, , , , "48", "height", , 1], "$a", [0, , , , "14", "width", , 1]],
            ["$a", [8, , , , isa, "src", , , 1], "$a", [0, , , , "false", "draggable", , 1], "$a", [0, , , , "48", "height", , 1], "$a", [0, , , , "14", "width", , 1]],
            ["$a", [8, , , , jsa, "src", , , 1], "$a", [0, , , , "false", "draggable", , 1], "$a", [0, , , , "48", "height", , 1], "$a", [0, , , , "14", "width", , 1]],
            ["$a", [8, , , , hsa, "src", , , 1], "$a", [0, , , , "false", "draggable", , 1], "$a", [0, , , , "48", "height", , 1], "$a", [0, , , , "14", "width", , 1]],
            ["$a", [8, , , , isa, "src", , , 1], "$a", [0, , , , "false", "draggable", , 1], "$a", [0, , , , "48", "height", , 1], "$a", [0, , , , "14", "width", , 1]],
            ["$a", [8, , , , jsa, "src", , , 1], "$a", [0, , , , "false", "draggable", , 1], "$a", [0, , , , "48", "height", , 1], "$a", [0, , , , "14", "width", , 1]],
            [
                "$a",
                [7, , , , , "gm-control-active", , 1],
                "$a",
                [7, , , , , "gm-compass-turn", , 1],
                "$a",
                [0, , , , "button", "type", , 1],
                "$a",
                [
                    22,
                    ,
                    ,
                    ,
                    function () {
                        return "compass.counterclockwise";
                    },
                    "jsaction",
                    ,
                    1,
                ],
            ],
            [
                "$a",
                [7, , , , , "gm-control-active", , 1],
                "$a",
                [7, , , , , "gm-compass-turn", , 1],
                "$a",
                [7, , , , , "gm-compass-turn-opposite", , 1],
                "$a",
                [0, , , , "button", "type", , 1],
                "$a",
                [
                    22,
                    ,
                    ,
                    ,
                    function () {
                        return "compass.clockwise";
                    },
                    "jsaction",
                    ,
                    1,
                ],
            ],
            ["$a", [7, , , , , "gm-compass-tooltip-text", , 1]],
            ["$a", [7, , , , , "gm-compass-arrow-right", , 1], "$a", [7, , , , , "gm-compass-arrow-right-outer", , 1]],
            ["$a", [7, , , , , "gm-compass-arrow-right", , 1], "$a", [7, , , , , "gm-compass-arrow-right-inner", , 1]],
        ];
    };
    SC = function (a) {
        _.G(this, a, 9);
    };
    VC = function (a) {
        a = _.db(a);
        delete TC[a];
        _.oc(TC) && UC && UC.stop();
    };
    lsa = function () {
        UC ||
            (UC = new _.Di(function () {
                ksa();
            }, 20));
        var a = UC;
        0 != a.Rh || a.start();
    };
    ksa = function () {
        var a = _.ob();
        _.nc(TC, function (b) {
            msa(b, a);
        });
        _.oc(TC) || lsa();
    };
    WC = function () {
        _.Wd.call(this);
        this.g = 0;
        this.endTime = this.startTime = null;
    };
    XC = function (a, b, c, d) {
        WC.call(this);
        if (!Array.isArray(a) || !Array.isArray(b)) throw Error("Start and end parameters must be arrays");
        if (a.length != b.length) throw Error("Start and end points must be the same length");
        this.j = a;
        this.O = b;
        this.duration = c;
        this.o = d;
        this.coords = [];
        this.progress = 0;
        this.N = null;
    };
    nsa = function (a) {
        if (0 == a.g) (a.progress = 0), (a.coords = a.j);
        else if (1 == a.g) return;
        VC(a);
        var b = _.ob();
        a.startTime = b;
        -1 == a.g && (a.startTime -= a.duration * a.progress);
        a.endTime = a.startTime + a.duration;
        a.N = a.startTime;
        a.progress || a.i("begin");
        a.i("play");
        -1 == a.g && a.i("resume");
        a.g = 1;
        var c = _.db(a);
        c in TC || (TC[c] = a);
        lsa();
        msa(a, b);
    };
    msa = function (a, b) {
        b < a.startTime && ((a.endTime = b + a.endTime - a.startTime), (a.startTime = b));
        a.progress = (b - a.startTime) / (a.endTime - a.startTime);
        1 < a.progress && (a.progress = 1);
        a.N = b;
        osa(a, a.progress);
        1 == a.progress ? ((a.g = 0), VC(a), a.i("finish"), a.i("end")) : 1 == a.g && a.i("animate");
    };
    osa = function (a, b) {
        "function" === typeof a.o && (b = a.o(b));
        a.coords = Array(a.j.length);
        for (var c = 0; c < a.j.length; c++) a.coords[c] = (a.O[c] - a.j[c]) * b + a.j[c];
    };
    psa = function (a, b) {
        _.Dd.call(this, a);
        this.coords = b.coords;
        this.x = b.coords[0];
        this.y = b.coords[1];
        this.z = b.coords[2];
        this.duration = b.duration;
        this.progress = b.progress;
        this.state = b.g;
    };
    qsa = function (a) {
        return 3 * a * a - 2 * a * a * a;
    };
    ZC = function (a, b, c) {
        var d = this;
        this.i = a;
        b /= 40;
        a.nb.style.transform = "scale(" + b + ")";
        a.nb.style.transformOrigin = "left";
        a.nb.setAttribute("controlWidth", Math.round(48 * b));
        a.nb.setAttribute("controlHeight", Math.round(48 * b));
        a.addListener("compass.clockwise", "click", function () {
            return rsa(d, !0);
        });
        a.addListener("compass.counterclockwise", "click", function () {
            return rsa(d, !1);
        });
        a.addListener("compass.north", "click", function () {
            var e = d.get("pov");
            if (e) {
                var f = _.tl(e.heading);
                ssa(d, f, 180 > f ? 0 : 360, e.pitch, 0);
            }
        });
        this.g = null;
        this.j = !1;
        _.im(YC, c);
    };
    $C = function (a) {
        var b = a.get("mapSize"),
            c = a.get("panControl"),
            d = !!a.get("disableDefaultUI");
        a.i.nb.style.visibility = c || (void 0 === c && !d && b && 200 <= b.width && 200 <= b.height) ? "" : "hidden";
        _.I.trigger(a.i.nb, "resize");
    };
    rsa = function (a, b) {
        var c = a.get("pov");
        if (c) {
            var d = _.tl(c.heading);
            ssa(a, d, b ? 90 * Math.floor((d + 100) / 90) : 90 * Math.ceil((d - 100) / 90), c.pitch, c.pitch);
        }
    };
    ssa = function (a, b, c, d, e) {
        var f = new _.wx();
        a.g && a.g.stop();
        b = a.g = new XC([b, d], [c, e], 1200, qsa);
        f.listen(b, "animate", function (g) {
            return tsa(a, !1, g);
        });
        _.Doa(f, b, "finish", function (g) {
            return tsa(a, !0, g);
        });
        nsa(b);
    };
    tsa = function (a, b, c) {
        a.j = !0;
        var d = a.get("pov");
        d && (a.set("pov", { heading: c.coords[0], pitch: c.coords[1], zoom: d.zoom }), (a.j = !1), b && (a.g = null));
    };
    aD = function (a, b, c, d) {
        a.innerText = "";
        b = _.A(
            b
                ? 1 == c
                    ? [_.NA["fullscreen_exit_normal.svg"], _.NA["fullscreen_exit_hover_dark.svg"], _.NA["fullscreen_exit_active_dark.svg"]]
                    : [_.NA["fullscreen_exit_normal.svg"], _.NA["fullscreen_exit_hover.svg"], _.NA["fullscreen_exit_active.svg"]]
                : 1 == c
                ? [_.NA["fullscreen_enter_normal.svg"], _.NA["fullscreen_enter_hover_dark.svg"], _.NA["fullscreen_enter_active_dark.svg"]]
                : [_.NA["fullscreen_enter_normal.svg"], _.NA["fullscreen_enter_hover.svg"], _.NA["fullscreen_enter_active.svg"]]
        );
        for (c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            var e = document.createElement("img");
            e.style.width = e.style.height = _.Bl(FC(d));
            e.src = c;
            e.alt = "";
            a.appendChild(e);
        }
    };
    wsa = function (a, b, c, d) {
        var e = this;
        this.j = a;
        this.o = d;
        this.g = b;
        b.style.cursor = "pointer";
        this.Me = c;
        this.i = Qra();
        this.H = [];
        this.N = function () {
            e.Me.set(_.zca(e.j));
        };
        this.refresh = function () {
            var f = e.get("display"),
                g = !!e.get("disableDefaultUI");
            _.nu(e.g, ((void 0 === f && !g) || !!f) && e.i);
            _.I.trigger(e.g, "resize");
        };
        this.i &&
            (_.im(YC, a),
            b.setAttribute("class", "gm-control-active gm-fullscreen-control"),
            DC(b, _.Bl(_.yx(d))),
            (b.style.width = b.style.height = _.Bl(d)),
            _.sx(b, "0 1px 4px -1px rgba(0,0,0,0.3)"),
            (a = this.get("controlStyle") || 0),
            aD(b, this.Me.get(), a, d),
            (b.style.overflow = "hidden"),
            _.I.addDomListener(b, "click", function () {
                if (e.Me.get())
                    for (var f = _.A(_.Oea), g = f.next(); !g.done; g = f.next()) {
                        if (((g = g.value), g in document)) {
                            document[g]();
                            break;
                        }
                    }
                else {
                    f = _.A(_.Pea);
                    for (g = f.next(); !g.done; g = f.next()) e.H.push(_.I.addDomListener(document, g.value, e.N));
                    f = e.j;
                    g = _.A(_.Rea);
                    for (var h = g.next(); !h.done; h = g.next())
                        if (((h = h.value), h in f)) {
                            f[h]();
                            break;
                        }
                }
            }));
        _.I.addListener(this, "disabledefaultui_changed", this.refresh);
        _.I.addListener(this, "display_changed", this.refresh);
        _.I.addListener(this, "maptypeid_changed", function () {
            var f = "streetview" == e.get("mapTypeId") ? 1 : 0;
            e.set("controlStyle", f);
            e.g.style.margin = _.Bl(e.o >> 2);
            e.refresh();
        });
        _.I.addListener(this, "controlstyle_changed", function () {
            var f = e.get("controlStyle");
            null != f && ((e.g.style.backgroundColor = usa[f].backgroundColor), e.i && aD(e.g, e.Me.get(), f, e.o));
        });
        this.Me.addListener(function () {
            _.I.trigger(e.j, "resize");
            e.Me.get() || vsa(e);
            if (e.i) {
                var f = e.get("controlStyle") || 0;
                aD(e.g, e.Me.get(), f, e.o);
            }
        });
        this.refresh();
    };
    vsa = function (a) {
        for (var b = _.A(a.H), c = b.next(); !c.done; c = b.next()) _.I.removeListener(c.value);
        a.H.length = 0;
    };
    xsa = function (a, b) {
        var c = a.O;
        if (c) b(c);
        else {
            var d = d ? Math.min(d, screen.width) : screen.width;
            var e = _.nn("div", document.body, new _.M(-screen.width, -screen.height), new _.Tg(d, screen.height));
            e.style.visibility = "hidden";
            a.H ? a.H++ : ((a.H = 1), _.nn("div", e, _.kk).appendChild(a));
            window.setTimeout(function () {
                c = a.O;
                if (!c) {
                    var f = a.parentNode,
                        g = a.offsetWidth,
                        h = a.offsetHeight;
                    if ((_.qk.Yd && 9 === document.documentMode) || _.qk.O) ++g, ++h;
                    c = new _.Tg(Math.min(d, g), Math.min(screen.height, h));
                    for (a.O = c; f.firstChild; ) f.removeChild(f.firstChild);
                    _.fm(f);
                }
                a.H--;
                a.H || (a.O = null);
                _.fm(e);
                e = null;
                b(c);
            }, 0);
        }
    };
    cD = function (a, b) {
        _.tu(a);
        _.sn(a, 1000001);
        this.We = a;
        this.N = _.nn("div", a);
        this.i = _.zx(this.N, b);
        this.j = 0;
        this.o = _.zx(_.nn("div"), b);
        this.o.textContent = "Ph\u00edm t\u1eaft";
        a = _.Bx("Ph\u00edm t\u1eaft");
        this.i.appendChild(a);
        a.textContent = "Ph\u00edm t\u1eaft";
        a.style.color = "#000000";
        a.style.display = "inline-block";
        a.style.fontFamily = "inherit";
        a.style.lineHeight = "normal";
        _.I.Vh(a, "click", this);
        this.g = a;
        a = new Image();
        a.src = _.NA["keyboard_icon.svg"];
        a.alt = "";
        a.style.height = "10px";
        a.style.width = "16px";
        a.style.verticalAlign = "middle";
        this.H = a;
        bD(this);
    };
    bD = function (a) {
        var b, c, d, e;
        _.Ha(function (f) {
            if (1 == f.g) return (b = a.get("size")) ? _.yk(f, ysa(a), 2) : f.return();
            c = f.i;
            var g = a.get("rmiWidth") || 0,
                h = a.get("tosWidth") || 0,
                k = a.get("scaleWidth") || 0,
                l = a.get("copyrightControlWidth") || 0;
            d = g + h + k + l;
            e = b.width - d;
            c > e ? ((a.g.textContent = ""), a.g.appendChild(a.H)) : (a.g.textContent = "Ph\u00edm t\u1eaft");
            a.set("width", BC(a.i).width);
            _.I.trigger(a, "resize");
            f.g = 0;
        });
    };
    ysa = function (a) {
        return _.Ha(function (b) {
            return b.return(
                new _.z.Promise(function (c) {
                    a.j
                        ? c(a.j)
                        : xsa(a.o, function (d) {
                              c(d.width);
                          });
                })
            );
        });
    };
    Dsa = function (a, b) {
        var c = this;
        this.g = document.activeElement === this.element;
        this.i = a;
        this.j = b;
        this.We = _.nn("div");
        this.element = zsa(this);
        Asa(this);
        _.I.addDomListener(this.element, "focus", function () {
            c.g = !0;
            Bsa(c);
        });
        _.I.addDomListener(this.element, "blur", function () {
            c.g = !1;
            Asa(c);
        });
        _.I.addListener(this, "resize", function () {
            Csa(c);
        });
        _.I.forward(a, "resize", this);
    };
    Csa = function (a) {
        a.g &&
            setTimeout(function () {
                return Bsa(a);
            });
    };
    zsa = function (a) {
        var b = _.Bx("Ph\u00edm t\u1eaft");
        a.We.appendChild(b);
        _.sn(b, 1000002);
        b.style.position = "absolute";
        b.style.backgroundColor = "transparent";
        b.style.border = "none";
        _.I.Vh(b, "click", a.i.g);
        return b;
    };
    Asa = function (a) {
        a.element.style.left = "-100000px";
        a.element.style.top = "-100000px";
    };
    Bsa = function (a) {
        var b = a.i.g.getBoundingClientRect(),
            c = b.height,
            d = b.width,
            e = b.left;
        b = b.top;
        var f = a.j.getBoundingClientRect(),
            g = f.left;
        f = f.top;
        a.element.style.height = c + "px";
        a.element.style.width = d + "px";
        a.element.style.left = e - g + "px";
        a.element.style.top = b - f + "px";
    };
    dD = function (a, b, c) {
        this.g = a;
        this.i = [];
        this.o = void 0 === c ? 0 : c;
        this.H = (this.j = 3 === b || 12 === b || 6 === b || 9 === b) ? Nra.bind(this) : _.Nb.bind(this);
        a.setAttribute("controlWidth", 0);
        a.setAttribute("controlHeight", 0);
    };
    Esa = function (a, b) {
        var c = {
            element: b,
            height: 0,
            width: 0,
            Oo: _.I.addListener(b, "resize", function () {
                return eD(a, c);
            }),
        };
        return c;
    };
    eD = function (a, b) {
        b.width = _.Mt(b.element.getAttribute("controlWidth"));
        b.height = _.Mt(b.element.getAttribute("controlHeight"));
        b.width || (b.width = b.element.offsetWidth);
        b.height || (b.height = b.element.offsetHeight);
        var c = 0;
        b = _.A(a.i);
        for (var d = b.next(); !d.done; d = b.next()) {
            var e = d.value;
            d = e.element;
            e = e.width;
            sC(d) && "hidden" != d.style.visibility && (c = Math.max(c, e));
        }
        var f = 0,
            g = !1,
            h = a.o;
        a.H(a.i, function (k) {
            var l = k.element,
                m = k.height;
            k = k.width;
            sC(l) && "hidden" != l.style.visibility && (g ? (f += h) : (g = !0), (l.style.left = _.Bl((c - k) / 2)), (l.style.top = _.Bl(f)), (f += m));
        });
        b = c;
        d = f;
        a.g.setAttribute("controlWidth", b);
        a.g.setAttribute("controlHeight", d);
        _.nu(a.g, b || d);
        _.I.trigger(a.g, "resize");
    };
    Fsa = function (a, b) {
        var c = document.createElement("div");
        c.className = "infomsg";
        a.appendChild(c);
        var d = c.style;
        d.background = "#F9EDBE";
        d.border = "1px solid #F0C36D";
        d.borderRadius = "2px";
        d.boxSizing = "border-box";
        d.boxShadow = "0 2px 4px rgba(0,0,0,0.2)";
        d.fontFamily = "Roboto,Arial,sans-serif";
        d.fontSize = "12px";
        d.fontWeight = "400";
        d.left = "10%";
        d.g = "2px";
        d.padding = "5px 14px";
        d.position = "absolute";
        d.textAlign = "center";
        d.top = "10px";
        d.webkitBorderRadius = "2px";
        d.width = "80%";
        d.zIndex = 24601;
        c.innerText =
            "B\u1ea1n \u0111ang s\u1eed d\u1ee5ng tr\u00ecnh duy\u1ec7t kh\u00f4ng \u0111\u01b0\u1ee3c API JavaScript cu\u0309a Google Maps h\u00f4\u0303 tr\u01a1\u0323. H\u00e3y xem x\u00e9t thay \u0111\u1ed5i tr\u00ecnh duy\u1ec7t c\u1ee7a b\u1ea1n.";
        d = document.createElement("a");
        b && (c.appendChild(document.createTextNode(" ")), c.appendChild(d), (d.innerText = "T\u00ecm hi\u1ec3u th\u00eam"), (d.href = b), (d.target = "_blank"));
        b = document.createElement("a");
        c.appendChild(document.createTextNode(" "));
        c.appendChild(b);
        b.innerText = "Lo\u1ea1i b\u1ecf";
        b.target = "_blank";
        d.style.paddingLeft = b.style.paddingLeft = "0.8em";
        d.style.boxSizing = b.style.boxSizing = "border-box";
        d.style.color = b.style.color = "black";
        d.style.cursor = b.style.cursor = "pointer";
        d.style.textDecoration = b.style.textDecoration = "underline";
        d.style.whiteSpace = b.style.whiteSpace = "nowrap";
        b.onclick = function () {
            a.removeChild(c);
        };
    };
    fD = function (a) {
        this.g = a.replace("www.google", "maps.google");
    };
    gD = function (a) {
        a.style.marginLeft = _.Bl(5);
        a.style.marginRight = _.Bl(5);
        _.sn(a, 1e6);
        this.j = a;
        a = this.i = _.nn("a", a);
        var b = a.style;
        b.position = "static";
        b.overflow = "visible";
        _.CC(a, "none");
        a.style.display = "inline";
        a.setAttribute("target", "_blank");
        a.setAttribute("rel", "noopener");
        b = _.nn("div");
        var c = new _.Tg(66, 26);
        _.mi(b, c);
        a.appendChild(b);
        this.g = _.KA(null, b, _.kk, c);
        _.wn(b);
        _.qu(b, "pointer");
    };
    Gsa = function (a, b) {
        a = a.g;
        _.JA(a, b ? _.An("api-3/images/google_white5", !0) : _.An("api-3/images/google4", !0), a.o);
    };
    Isa = function (a, b, c) {
        function d() {
            var g = f.get("hasCustomStyles"),
                h = a.getMapTypeId();
            Gsa(e, g || "satellite" == h || "hybrid" == h);
        }
        var e = Hsa(a, b, c),
            f = a.__gm;
        _.I.addListener(f, "hascustomstyles_changed", d);
        _.I.addListener(a, "maptypeid_changed", d);
        d();
        return e;
    };
    Hsa = function (a, b, c) {
        function d() {
            var g = c && a.get("passiveLogo");
            f.setUrl(g ? null : b.get("url"));
        }
        var e = _.nn("div"),
            f = new gD(e);
        _.I.addListener(a, "passivelogo_changed", d);
        _.I.addListener(b, "url_changed", d);
        d();
        return f;
    };
    Jsa = function (a, b, c, d) {
        function e() {
            0 != f.get("enabled") && (null != d && f.get("active") ? f.set("value", d) : f.set("value", c));
        }
        var f = this;
        _.I.addListener(this, "value_changed", function () {
            f.set("active", f.get("value") == c);
        });
        new _.Dn(a, b, e);
        "click" == b &&
            "button" != a.tagName.toLowerCase() &&
            new _.Dn(a, "keydown", function (g) {
                ("Enter" != g.key && " " != g.key) || e();
            });
        _.I.addListener(this, "display_changed", function () {
            _.nu(a, 0 != f.get("display"));
        });
    };
    hD = function (a, b, c, d) {
        return new Jsa(a, b, c, d);
    };
    jD = function (a, b, c, d, e) {
        var f = this;
        this.g = _.Bx(d.title);
        (this.o = d.Ar || !1) && this.g.setAttribute("aria-pressed", !1);
        _.Au(this.g);
        a.appendChild(this.g);
        _.vt(this.g);
        this.i = this.g.style;
        this.i.overflow = "hidden";
        d.ko ? qC(this.g) : (this.i.textAlign = "center");
        d.height && ((this.i.height = _.Bl(d.height)), (this.i.display = "table-cell"), (this.i.verticalAlign = "middle"));
        this.i.position = "relative";
        EC(this.g, d);
        d.Em && Vra(this.g);
        d.Po && Wra(this.g);
        this.g.style.webkitBackgroundClip = "padding-box";
        this.g.style.backgroundClip = "padding-box";
        this.g.style.MozBackgroundClip = "padding";
        this.H = d.aq || !1;
        this.N = d.Em || !1;
        _.sx(this.g, "0 1px 4px -1px rgba(0,0,0,0.3)");
        this.g.appendChild(b);
        d.rw
            ? ((a = _.KA(_.An("arrow-down"), this.g)),
              _.mn(a, new _.M(6, 0), !_.Ur.Tc()),
              (a.style.top = "50%"),
              (a.style.marginTop = _.Bl(-2)),
              this.set("active", !1),
              this.g.setAttribute("aria-haspopup", "true"),
              this.g.setAttribute("aria-expanded", "false"))
            : ((a = e(this.g, "click", c)), a.bindTo("value", this), this.bindTo("active", a), a.bindTo("enabled", this));
        d.aq && (this.i.fontWeight = "500");
        this.j = _.Mt(this.i.paddingLeft) || 0;
        d.ko || ((this.i.fontWeight = "500"), (d = this.g.offsetWidth - this.j - (_.Mt(this.i.paddingRight) || 0)), (this.i.fontWeight = ""), _.af(d) && 0 <= d && (this.i.minWidth = _.Bl(d)));
        new _.Dn(this.g, "click", function (g) {
            !1 !== f.get("enabled") && _.I.trigger(f, "click", g);
        });
        new _.Dn(this.g, "keydown", function (g) {
            !1 !== f.get("enabled") && _.I.trigger(f, "keydown", g);
        });
        new _.Dn(this.g, "blur", function (g) {
            !1 !== f.get("enabled") && _.I.trigger(f, "blur", g);
        });
        new _.Dn(this.g, "mouseover", function () {
            return iD(f, !0);
        });
        new _.Dn(this.g, "mouseout", function () {
            return iD(f, !1);
        });
        _.I.addListener(this, "enabled_changed", function () {
            return iD(f, !1);
        });
        _.I.addListener(this, "active_changed", function () {
            return iD(f, !1);
        });
    };
    iD = function (a, b) {
        var c = !!a.get("active") || a.H;
        0 == a.get("enabled") ? ((a.i.color = "gray"), (b = c = !1)) : ((a.i.color = c || b ? "#000" : "#565656"), a.o && a.g.setAttribute("aria-pressed", c));
        a.N || (a.i.borderLeft = "0");
        _.af(a.j) && (a.i.paddingLeft = _.Bl(a.j));
        a.i.fontWeight = c ? "500" : "";
        a.i.backgroundColor = b ? "#ebebeb" : "#fff";
    };
    _.kD = function (a, b, c, d) {
        return new jD(a, b, c, d, hD);
    };
    lD = function (a, b, c, d, e) {
        this.g = _.nn("li", a);
        this.g.tabIndex = -1;
        this.g.setAttribute("role", "menuitemcheckbox");
        this.g.setAttribute("aria-label", e.title);
        _.Au(this.g);
        this.i = new Image();
        this.i.src = _.NA["checkbox_checked.svg"];
        this.j = new Image();
        this.j.src = _.NA["checkbox_empty.svg"];
        this.j.alt = this.i.alt = "";
        a = _.nn("span", this.g);
        a.appendChild(this.i);
        a.appendChild(this.j);
        this.o = _.nn("label", this.g);
        b = _.Hf(b);
        _.ld(this.o, b);
        EC(this.g, e);
        e = _.Ur.Tc();
        _.vt(this.g);
        qC(this.g);
        this.j.style.height = this.i.style.height = "1em";
        this.j.style.width = this.i.style.width = "1em";
        this.j.style.transform = this.i.style.transform = "translateY(0.15em)";
        this.o.style.cursor = "inherit";
        this.g.style.backgroundColor = "#fff";
        this.g.style.whiteSpace = "nowrap";
        this.g.style[e ? "paddingLeft" : "paddingRight"] = _.Bl(8);
        Ksa(this, c, d);
    };
    Ksa = function (a, b, c) {
        _.I.xc(a, "active_changed", function () {
            var d = !!a.get("active");
            _.nu(a.i, d);
            _.nu(a.j, !d);
            a.g.setAttribute("aria-checked", d);
        });
        _.I.addDomListener(a.g, "mouseover", function () {
            Lsa(a, !0);
        });
        _.I.addDomListener(a.g, "mouseout", function () {
            Lsa(a, !1);
        });
        b = hD(a.g, "click", b, c);
        b.bindTo("value", a);
        b.bindTo("display", a);
        a.bindTo("active", b);
    };
    Lsa = function (a, b) {
        a.g.style.backgroundColor = b ? "#ebebeb" : "#fff";
    };
    mD = function (a, b, c, d) {
        var e = (this.g = _.nn("li", a));
        EC(e, d);
        _.on(b, e);
        e.style.backgroundColor = "#fff";
        e.tabIndex = -1;
        e.setAttribute("role", "menuitem");
        _.Au(e);
        _.I.bind(this, "active_changed", this, function () {
            e.style.fontWeight = this.get("active") ? "500" : "";
        });
        _.I.bind(this, "enabled_changed", this, function () {
            var f = 0 != this.get("enabled");
            e.style.color = f ? "black" : "gray";
            (f = f ? d.title : d.hv) && e.setAttribute("title", f);
        });
        a = hD(e, "click", c);
        a.bindTo("value", this);
        a.bindTo("display", this);
        a.bindTo("enabled", this);
        this.bindTo("active", a);
        _.I.zc(e, "mouseover", this, function () {
            0 != this.get("enabled") && ((e.style.backgroundColor = "#ebebeb"), (e.style.color = "#000"));
        });
        _.I.addDomListener(e, "mouseout", function () {
            e.style.backgroundColor = "#fff";
            e.style.color = "#565656";
        });
    };
    Msa = function (a) {
        var b = _.nn("div", a);
        b.style.margin = "1px 0";
        b.style.borderTop = "1px solid #ebebeb";
        a = this.get("display");
        b && b.setAttribute("aria-hidden", "true");
        b.style.visibility = b.style.visibility || "inherit";
        b.style.display = a ? "" : "none";
        _.I.bind(this, "display_changed", this, function () {
            _.nu(b, 0 != this.get("display"));
        });
    };
    nD = function (a, b, c, d, e, f) {
        f = f || {};
        this.O = a;
        this.H = b;
        a = this.g = _.nn("ul", b);
        a.style.backgroundColor = "white";
        a.style.listStyle = "none";
        a.style.margin = a.style.padding = 0;
        _.sn(a, -1);
        a.style.padding = _.Bl(2);
        Ura(a, _.Bl(_.yx(d)));
        _.sx(a, "0 1px 4px -1px rgba(0,0,0,0.3)");
        f.position ? _.mn(a, f.position, f.wy) : ((a.style.position = "absolute"), (a.style.top = "100%"), (a.style.left = "0"), (a.style.right = "0"));
        qC(a);
        _.ou(a);
        this.o = [];
        this.j = null;
        this.i = e;
        e = this.i.id || (this.i.id = _.Sda());
        a.setAttribute("role", "menu");
        for (a.setAttribute("aria-labelledby", e); _.Se(c); ) {
            e = c.shift();
            f = _.A(e);
            for (b = f.next(); !b.done; b = f.next()) {
                b = b.value;
                var g = void 0,
                    h = { title: b.alt, hv: b.o || void 0, fontSize: FC(d), padding: [(1 + d) >> 3] };
                null != b.j ? (g = new lD(a, b.label, b.g, b.j, h)) : (g = new mD(a, b.label, b.g, h));
                g.bindTo("value", this.O, b.Gg);
                g.bindTo("display", b);
                g.bindTo("enabled", b);
                this.o.push(g);
            }
            f = _.u(c, "flat").call(c);
            f.length && ((b = new Msa(a)), Nsa(b, e, f));
        }
    };
    Nsa = function (a, b, c) {
        function d() {
            function e(f) {
                f = _.A(f);
                for (var g = f.next(); !g.done; g = f.next()) if (0 != g.value.get("display")) return !0;
                return !1;
            }
            a.set("display", e(b) && e(c));
        }
        _.Nb(b.concat(c), function (e) {
            _.I.addListener(e, "display_changed", d);
        });
    };
    Qsa = function (a) {
        var b = a.g;
        if (!b.listeners) {
            var c = a.H;
            b.listeners = [
                _.I.addDomListener(c, "mouseout", function () {
                    b.timeout = window.setTimeout(function () {
                        a.set("active", !1);
                    }, 1e3);
                }),
                _.I.zc(c, "mouseover", a, a.N),
                _.I.addDomListener(document.body, "click", function (e) {
                    for (e = e.target; e; ) {
                        if (e == c) return;
                        e = e.parentNode;
                    }
                    a.set("active", !1);
                }),
                _.I.addDomListener(b, "keydown", function (e) {
                    return Osa(a, e);
                }),
                _.I.addDomListener(
                    b,
                    "blur",
                    function () {
                        setTimeout(function () {
                            b.contains(document.activeElement) || a.set("active", !1);
                        }, 0);
                    },
                    !0
                ),
            ];
        }
        _.pu(b);
        a.i.setAttribute("aria-expanded", "true");
        if (a.H.contains(document.activeElement)) {
            var d = _.u(a.o, "find").call(a.o, function (e) {
                return !1 !== e.get("display");
            });
            d && Psa(a, d);
        }
    };
    Osa = function (a, b) {
        if ("Escape" === b.key || "Esc" === b.key) a.set("active", !1);
        else {
            var c = a.o.filter(function (e) {
                    return !1 !== e.get("display");
                }),
                d = a.j ? c.indexOf(a.j) : 0;
            if ("ArrowUp" === b.key) d--;
            else if ("ArrowDown" === b.key) d++;
            else if ("Home" === b.key) d = 0;
            else if ("End" === b.key) d = c.length - 1;
            else return;
            d = (d + c.length) % c.length;
            Psa(a, c[d]);
        }
    };
    Psa = function (a, b) {
        a.j = b;
        b.Sb().focus();
    };
    Tsa = function (a, b, c, d) {
        var e = this;
        this.i = a;
        this.j = d;
        this.g = [];
        _.I.addListener(this, "fontloaded_changed", function () {
            if (e.get("fontLoaded")) {
                for (var h = e.g.length, k = 0, l = 0; l < h; ++l) {
                    var m = _.ni(e.g[l].parentNode),
                        p = l == h - 1;
                    e.g[l].$q && _.mn(e.g[l].$q.g, new _.M(p ? 0 : k, m.height), p);
                    k += m.width;
                }
                e.g.length = 0;
            }
        });
        _.I.addListener(this, "mapsize_changed", function () {
            return Rsa(e);
        });
        _.I.addListener(this, "display_changed", function () {
            return Rsa(e);
        });
        d = b.length;
        for (var f = 0, g = 0; g < d; ++g) f = Ssa(this, c, b[g], f, 0 == g, g == d - 1);
        _.uu();
        _.qu(a, "pointer");
    };
    Ssa = function (a, b, c, d, e, f) {
        var g = document.createElement("div");
        a.i.appendChild(g);
        _.CC(g, "left");
        _.im(Usa, a.i);
        _.Mm(g, "gm-style-mtc");
        var h = _.on(c.label, a.i, !0);
        b = b(g, h, c.g, { title: c.alt, padding: [0, 17], height: a.j, fontSize: FC(a.j), Em: e, Po: f, Ar: !0 });
        g.style.position = "relative";
        e = b.Sb();
        new _.Dn(e, "focusin", function () {
            g.style.zIndex = 1;
        });
        new _.Dn(e, "focusout", function () {
            g.style.zIndex = 0;
        });
        c.Gg && b.bindTo("value", a, c.Gg);
        e = null;
        h = _.ni(g);
        c.i && ((e = new nD(a, g, c.i, a.j, b.Sb(), { position: new _.M(f ? 0 : d, h.height), wy: f })), Vsa(g, b, e));
        a.g.push({ parentNode: g, $q: e });
        return (d += h.width);
    };
    Rsa = function (a) {
        var b = a.get("mapSize");
        b = !!(a.get("display") || (b && 200 <= b.width && 200 <= b.height));
        _.nu(a.i, b);
        _.I.trigger(a.i, "resize");
    };
    Vsa = function (a, b, c) {
        new _.Dn(a, "click", function () {
            return c.set("active", !0);
        });
        new _.Dn(a, "mouseover", function () {
            b.get("active") && c.set("active", !0);
        });
        _.I.addDomListener(b, "active_changed", function () {
            b.get("active") || c.set("active", !1);
        });
        _.I.addListener(b, "keydown", function (d) {
            ("ArrowDown" !== d.key && "ArrowUp" !== d.key) || c.set("active", !0);
        });
    };
    oD = function (a, b, c) {
        var d = this;
        _.uu();
        _.qu(a, "pointer");
        qC(a);
        a.style.width = _.Bl(120);
        _.im(Usa, document.head);
        _.Mm(a, "gm-style-mtc");
        var e = _.on("", a, !0),
            f = _.kD(a, e, null, { title: "Thay \u0111\u1ed5i ki\u1ec3u b\u1ea3n \u0111\u1ed3", rw: !0, ko: !0, aq: !0, padding: [8, 17], fontSize: 18, Em: !0, Po: !0 }),
            g = {},
            h = [b];
        b = _.A(b);
        for (var k = b.next(); !k.done; k = b.next()) (k = k.value), "mapTypeId" == k.Gg && (g[k.g] = k.label), k.i && h.push.apply(h, _.oa(k.i));
        this.addListener("maptypeid_changed", function () {
            _.mu(e, g[d.get("mapTypeId")] || "");
        });
        this.g = new nD(this, a, h, c, f.Sb());
        f.addListener("click", function () {
            d.g.set("active", !d.g.get("active"));
        });
        f.addListener("keydown", function (l) {
            ("ArrowDown" !== l.key && "ArrowUp" !== l.key) || d.g.set("active", !0);
        });
        this.i = a;
    };
    Wsa = function (a) {
        var b = a.get("mapSize");
        b = !!(a.get("display") || (b && 200 <= b.width && 200 <= b.height));
        _.nu(a.i, b);
        _.I.trigger(a.i, "resize");
    };
    pD = function (a) {
        this.i = a;
        this.g = !1;
    };
    qD = function (a, b, c) {
        a.get(b) !== c && ((a.g = !0), a.set(b, c), (a.g = !1));
    };
    Xsa = function (a) {
        var b = a.get("internalMapTypeId");
        _.Te(a.i, function (c, d) {
            d.mapTypeId == b && d.Ik && a.get(d.Ik) == d.value && (b = c);
        });
        qD(a, "mapTypeId", b);
    };
    Ysa = function (a, b, c) {
        a.innerText = "";
        b = _.A(b ? [_.NA["tilt_45_normal.svg"], _.NA["tilt_45_hover.svg"], _.NA["tilt_45_active.svg"]] : [_.NA["tilt_0_normal.svg"], _.NA["tilt_0_hover.svg"], _.NA["tilt_0_active.svg"]]);
        for (var d = b.next(); !d.done; d = b.next()) {
            d = d.value;
            var e = document.createElement("img");
            e.style.width = _.Bl(FC(c));
            e.src = d;
            a.appendChild(e);
        }
    };
    Zsa = function (a, b, c) {
        for (var d = _.A([_.NA["rotate_right_normal.svg"], _.NA["rotate_right_hover.svg"], _.NA["rotate_right_active.svg"]]), e = d.next(); !e.done; e = d.next()) {
            e = e.value;
            var f = document.createElement("img"),
                g = _.Bl(FC(b) + 2);
            f.style.width = g;
            f.style.height = g;
            f.src = e;
            a.style.transform = c ? "scaleX(-1)" : "";
            a.appendChild(f);
        }
    };
    $sa = function (a) {
        var b = _.nn("div");
        b.style.position = "relative";
        b.style.overflow = "hidden";
        b.style.width = _.Bl((3 * a) / 4);
        b.style.height = _.Bl(1);
        b.style.margin = "0 5px";
        b.style.backgroundColor = "rgb(230, 230, 230)";
        return b;
    };
    rD = function (a, b, c, d) {
        var e = this;
        c = _.ei[43] ? "rgb(34, 34, 34)" : "rgb(255, 255, 255)";
        _.im(YC, d);
        this.N = b;
        this.V = a;
        this.o = _.nn("div", a);
        this.o.style.backgroundColor = c;
        _.sx(this.o, "0 1px 4px -1px rgba(0,0,0,0.3)");
        DC(this.o, _.Bl(_.yx(b)));
        this.g = _.Bx("Xoay b\u1ea3n \u0111\u1ed3 theo chi\u1ec1u kim \u0111\u1ed3ng h\u1ed3");
        this.g.style.left = "0";
        this.g.style.top = "0";
        this.g.style.overflow = "hidden";
        this.g.setAttribute("class", "gm-control-active");
        _.qu(this.g, "pointer");
        _.mi(this.g, new _.Tg(b, b));
        _.wn(this.g);
        Zsa(this.g, b, !1);
        this.o.appendChild(this.g);
        this.O = $sa(b);
        this.o.appendChild(this.O);
        this.i = _.Bx("Xoay b\u1ea3n \u0111\u1ed3 ng\u01b0\u1ee3c chi\u1ec1u kim \u0111\u1ed3ng h\u1ed3");
        this.i.style.left = "0";
        this.i.style.top = "0";
        this.i.style.overflow = "hidden";
        this.i.setAttribute("class", "gm-control-active");
        _.qu(this.i, "pointer");
        _.mi(this.i, new _.Tg(b, b));
        _.wn(this.i);
        Zsa(this.i, b, !0);
        this.o.appendChild(this.i);
        this.T = $sa(b);
        this.o.appendChild(this.T);
        this.j = _.Bx("Nghi\u00eang b\u1ea3n \u0111\u1ed3");
        this.j.style.left = this.j.style.top = "0";
        this.j.style.overflow = "hidden";
        this.j.setAttribute("class", "gm-tilt gm-control-active");
        _.qu(this.j, "pointer");
        Ysa(this.j, !1, b);
        _.mi(this.j, new _.Tg(b, b));
        _.wn(this.j);
        this.o.appendChild(this.j);
        this.H = !0;
        _.I.zc(this.g, "click", this, this.$);
        _.I.zc(this.i, "click", this, this.ha);
        _.I.zc(this.j, "click", this, this.ka);
        _.I.addListener(this, "aerialavailableatzoom_changed", function () {
            return e.refresh();
        });
        _.I.addListener(this, "tilt_changed", function () {
            e.H = 0 != e.get("tilt");
            e.refresh();
        });
        _.I.addListener(this, "mapsize_changed", function () {
            e.refresh();
        });
        _.I.addListener(this, "rotatecontrol_changed", function () {
            e.refresh();
        });
    };
    ata = function (a, b, c) {
        a = new rD(a, b, { cache: !0 }, c);
        a.bindTo("mapSize", this);
        a.bindTo("rotateControl", this);
        a.bindTo("aerialAvailableAtZoom", this);
        a.bindTo("heading", this);
        a.bindTo("tilt", this);
    };
    dta = function (a, b, c) {
        var d = this;
        this.H = a;
        this.N = c;
        this.i = _.wh(0);
        c = new _.Ad(_.wl(b));
        this.O = _.Bd(c, "span");
        c.appendChild(b, this.O);
        this.g = _.Bd(c, "div");
        c.appendChild(b, this.g);
        bta(this, c);
        this.j = !0;
        this.o = 0;
        _.Nd(a, "click", function () {
            d.j = !d.j;
            cta(d);
        });
        this.N.xc(function () {
            return cta(d);
        });
    };
    bta = function (a, b) {
        zC(a.g, "position", "relative");
        zC(a.g, "display", "inline-block");
        a.g.style.height = _.Cu(8, !0);
        zC(a.g, "bottom", "-1px");
        var c = _.Bd(b, "div");
        b.appendChild(a.g, c);
        _.Du(c, "100%", 4);
        zC(c, "position", "absolute");
        AC(c, 0, 0);
        c = _.Bd(b, "div");
        b.appendChild(a.g, c);
        _.Du(c, 4, 8);
        AC(c, 0, 0);
        zC(c, "backgroundColor", "#fff");
        c = _.Bd(b, "div");
        b.appendChild(a.g, c);
        _.Du(c, 4, 8);
        zC(c, "position", "absolute");
        zC(c, "backgroundColor", "#fff");
        zC(c, "right", "0px");
        zC(c, "bottom", "0px");
        c = _.Bd(b, "div");
        b.appendChild(a.g, c);
        zC(c, "position", "absolute");
        zC(c, "backgroundColor", "#666");
        c.style.height = _.Cu(2, !0);
        zC(c, "left", "1px");
        zC(c, "bottom", "1px");
        zC(c, "right", "1px");
        c = _.Bd(b, "div");
        b.appendChild(a.g, c);
        zC(c, "position", "absolute");
        _.Du(c, 2, 6);
        AC(c, 1, 1);
        zC(c, "backgroundColor", "#666");
        c = _.Bd(b, "div");
        b.appendChild(a.g, c);
        _.Du(c, 2, 6);
        zC(c, "position", "absolute");
        zC(c, "backgroundColor", "#666");
        zC(c, "bottom", "1px");
        zC(c, "right", "1px");
    };
    cta = function (a) {
        var b = a.N.get();
        b &&
            ((b = eta(a, b)),
            Jra(a.O, Ora(b.jv + "\u00a0")),
            (a.g.style.width = _.Cu(b.Rx + 4, !0)),
            a.o ||
                (a.o = _.C.setTimeout(function () {
                    a.o = 0;
                    a.i.set(BC(a.H).width);
                }, 50)));
    };
    eta = function (a, b) {
        b *= 80;
        return a.j ? fta(b / 1e3, "km", b, "m") : fta(b / 1609.344, "d\u1eb7m", 3.28084 * b, "b\u1ed9");
    };
    fta = function (a, b, c, d) {
        var e = a;
        1 > a && ((e = c), (b = d));
        for (a = 1; e >= 10 * a; ) a *= 10;
        e >= 5 * a && (a *= 5);
        e >= 2 * a && (a *= 2);
        return { Rx: Math.round((80 * a) / e), jv: a + " " + b };
    };
    sD = function (a, b, c, d) {
        a.innerText = "";
        b = _.A(
            0 == b
                ? 1 == c
                    ? [_.NA["zoom_in_normal.svg"], _.NA["zoom_in_hover_dark.svg"], _.NA["zoom_in_active_dark.svg"]]
                    : [_.NA["zoom_in_normal.svg"], _.NA["zoom_in_hover.svg"], _.NA["zoom_in_active.svg"]]
                : 1 == c
                ? [_.NA["zoom_out_normal.svg"], _.NA["zoom_out_hover_dark.svg"], _.NA["zoom_out_active_dark.svg"]]
                : [_.NA["zoom_out_normal.svg"], _.NA["zoom_out_hover.svg"], _.NA["zoom_out_active.svg"]]
        );
        for (c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            var e = document.createElement("img");
            e.style.width = e.style.height = _.Bl(FC(d));
            e.src = c;
            e.alt = "";
            a.appendChild(e);
        }
    };
    ita = function (a, b, c, d) {
        var e = this;
        this.o = a;
        this.i = b;
        this.g = _.nn("div", a);
        _.wn(this.g);
        _.vn(this.g);
        _.sx(this.g, "0 1px 4px -1px rgba(0,0,0,0.3)");
        DC(this.g, _.Bl(_.yx(b)));
        this.g.style.cursor = "pointer";
        _.im(YC, d);
        _.I.addDomListener(this.g, "mouseover", function () {
            e.set("mouseover", !0);
        });
        _.I.addDomListener(this.g, "mouseout", function () {
            e.set("mouseover", !1);
        });
        this.H = gta(this, this.g, 0);
        this.j = _.nn("div", this.g);
        this.j.style.position = "relative";
        this.j.style.overflow = "hidden";
        this.j.style.width = _.Bl((3 * b) / 4);
        this.j.style.height = _.Bl(1);
        this.j.style.margin = "0 5px";
        this.N = gta(this, this.g, 1);
        _.I.addListener(this, "display_changed", function () {
            return hta(e);
        });
        _.I.addListener(this, "mapsize_changed", function () {
            return hta(e);
        });
        _.I.addListener(this, "maptypeid_changed", function () {
            var f = e.get("mapTypeId");
            e.set("controlStyle", (("satellite" == f || "hybrid" == f) && _.ei[43]) || "streetview" == f ? 1 : 0);
        });
        _.I.addListener(this, "controlstyle_changed", function () {
            var f = e.get("controlStyle");
            if (null != f) {
                var g = tD[f];
                sD(e.H, 0, f, e.i);
                sD(e.N, 1, f, e.i);
                e.g.style.backgroundColor = g.backgroundColor;
                e.j.style.backgroundColor = g.Uq;
            }
        });
    };
    gta = function (a, b, c) {
        var d = _.Bx(0 == c ? "Ph\u00f3ng to" : "Thu nh\u1ecf");
        b.appendChild(d);
        _.I.addDomListener(d, "click", function () {
            var e = 0 == c ? 1 : -1;
            a.set("zoom", a.get("zoom") + e);
        });
        d.setAttribute("class", "gm-control-active");
        d.style.overflow = "hidden";
        b = a.get("controlStyle");
        sD(d, c, b, a.i);
        return d;
    };
    hta = function (a) {
        var b = a.get("mapSize");
        if ((b && 200 <= b.width && 200 <= b.height) || a.get("display")) {
            _.pu(a.o);
            b = a.i;
            var c = 2 * a.i + 1;
            a.g.style.width = _.Bl(b);
            a.g.style.height = _.Bl(c);
            a.o.setAttribute("controlWidth", b);
            a.o.setAttribute("controlHeight", c);
            _.I.trigger(a.o, "resize");
            b = a.H.style;
            b.width = _.Bl(a.i);
            b.height = _.Bl(a.i);
            b.left = b.top = "0";
            a.j.style.top = "0";
            b = a.N.style;
            b.width = _.Bl(a.i);
            b.height = _.Bl(a.i);
            b.left = b.top = "0";
        } else _.ou(a.o);
    };
    uD = function (a, b, c, d) {
        a = this.g = _.nn("div");
        _.tu(a);
        b = new ita(a, b, c, d);
        b.bindTo("mapSize", this);
        b.bindTo("display", this, "display");
        b.bindTo("mapTypeId", this);
        b.bindTo("zoom", this);
        this.Cl = b;
    };
    jta = function (a) {
        a.Cl && (a.Cl.unbindAll(), (a.Cl = null));
    };
    xD = function (a, b, c) {
        _.tu(a);
        _.sn(a, 1000001);
        this.g = a;
        var d = _.nn("div", a);
        a = _.zx(d, b);
        this.O = d;
        this.H = _.zx(_.nn("div"), b);
        b = _.Bx("D\u1eef li\u1ec7u B\u1ea3n \u0111\u1ed3");
        a.appendChild(b);
        _.pn(b, "D\u1eef li\u1ec7u B\u1ea3n \u0111\u1ed3");
        b.style.color = "#000000";
        b.style.display = "inline-block";
        b.style.fontFamily = "inherit";
        b.style.lineHeight = "normal";
        _.I.Vh(b, "click", this);
        this.o = b;
        this.j = _.nn("span", a);
        this.i = vD(this);
        this.N = c;
        wD(this);
    };
    wD = function (a) {
        var b, c, d, e, f, g, h, k;
        _.Ha(function (l) {
            if (1 == l.g) return (b = a.get("size")) ? _.yk(l, kta(a), 2) : l.return();
            c = l.i;
            d = lta(a);
            _.Zt(a.j, d);
            e = b.width - a.i;
            f = c > e;
            g = !a.get("hide");
            _.nu(a.g, g && !!d);
            _.nu(a.o, !(!d || !f));
            _.nu(a.j, !(!d || f));
            h = 12 + _.ni(a.j).width + _.ni(a.o).width;
            k = g ? h : 0;
            a.g.style.width = _.Bl(k);
            a.set("width", k);
            _.I.trigger(a.g, "resize");
            l.g = 0;
        });
    };
    kta = function (a) {
        return _.Ha(function (b) {
            return b.return(
                new _.z.Promise(function (c) {
                    xsa(a.H, function (d) {
                        c(d.width);
                    });
                })
            );
        });
    };
    lta = function (a) {
        var b = a.get("attributionText") || "H\u00ecnh \u1ea3nh c\u00f3 th\u1ec3 c\u00f3 b\u1ea3n quy\u1ec1n";
        a.N && (b = b.replace("Map data", "Map Data"));
        return b;
    };
    vD = function (a) {
        var b = a.get("rmiWidth") || 0,
            c = a.get("tosWidth") || 0,
            d = a.get("scaleWidth") || 0;
        a = a.get("keyboardWidth") || 0;
        return b + c + d + a;
    };
    yD = function (a) {
        a.i = vD(a);
        wD(a);
    };
    zD = function (a) {
        _.Xg.call(this, a);
        this.content = a.content;
        this.Ah = a.Ah;
        this.ownerElement = a.ownerElement;
        this.title = a.title;
        _.im(mta, this.element);
        rC(this.element, "dialog-view");
        var b = nta(this);
        this.g = new xC({ label: this.title, content: b, ownerElement: this.ownerElement, element: this.element, Km: this, Ah: this.Ah });
        _.Wg(this, a, zD, "DialogView");
    };
    nta = function (a) {
        var b = document.createElement("div"),
            c = document.createElement("div"),
            d = document.createElement("div"),
            e = document.createElement("h2"),
            f = new _.OA({ Mi: new _.M(0, 0), Dh: new _.Tg(24, 24), label: "\u0110o\u0301ng h\u00f4\u0323p thoa\u0323i", offset: new _.M(24, 24) });
        e.textContent = a.title;
        f.element.style.position = "static";
        f.element.addEventListener("click", function () {
            wC(a.g);
        });
        d.appendChild(e);
        d.appendChild(f.element);
        c.appendChild(a.content);
        b.appendChild(d);
        b.appendChild(c);
        rC(d, "dialog-view--header");
        rC(b, "dialog-view--content");
        rC(c, "dialog-view--inner-content");
        return b;
    };
    AD = function (a, b) {
        this.j = a;
        this.i = document.createElement("div");
        this.i.style.color = "#222";
        this.i.style.maxWidth = "280px";
        this.g = new zD({ content: this.i, Ah: b, ownerElement: a, title: "D\u1eef li\u1ec7u B\u1ea3n \u0111\u1ed3" });
        rC(this.g.element, "copyright-dialog-view");
    };
    BD = function (a) {
        _.au(a, "gmnoprint");
        _.Mm(a, "gmnoscreen");
        this.g = a;
        a = this.i = _.nn("div", a);
        a.style.fontFamily = "Roboto,Arial,sans-serif";
        a.style.fontSize = _.Bl(11);
        a.style.color = "#000000";
        a.style.direction = "ltr";
        a.style.textAlign = "right";
        a.style.backgroundColor = "#f5f5f5";
    };
    DD = function (a, b) {
        _.tu(a);
        _.sn(a, 1000001);
        this.g = a;
        this.i = _.zx(a, b);
        this.j = a = _.nn("a", this.i);
        a.style.textDecoration = "none";
        _.qu(a, "pointer");
        _.pn(a, "\u0110i\u1ec1u kho\u1ea3n s\u1eed d\u1ee5ng");
        Kra(a, _.sia);
        a.target = "_blank";
        a.setAttribute("rel", "noopener");
        a.style.color = "#000000";
        CD(this);
    };
    CD = function (a) {
        a.set("width", _.ni(a.i).width);
    };
    ota = function (a, b, c, d) {
        var e = new cD(_.nn("div"), a);
        e.bindTo("keyboardShortcutsShown", this);
        e.bindTo("size", this);
        e.bindTo("fontLoaded", this);
        e.bindTo("scaleWidth", this);
        e.bindTo("rmiWidth", this);
        d = new xD(document.createElement("div"), a, d);
        d.bindTo("size", this);
        d.bindTo("rmiWidth", this);
        d.bindTo("attributionText", this);
        d.bindTo("fontLoaded", this);
        d.bindTo("isCustomPanorama", this);
        var f = c.__gm.get("innerContainer"),
            g = new AD(b, function () {
                tC(f).catch(function () {});
            });
        g.bindTo("attributionText", this);
        _.I.addListener(d, "click", function () {
            return g.set("visible", !0);
        });
        b = new BD(document.createElement("div"));
        b.bindTo("attributionText", this);
        a = new DD(document.createElement("div"), a);
        a.bindTo("fontLoaded", this);
        a.bindTo("mapTypeId", this);
        e.bindTo("tosWidth", a, "width");
        e.bindTo("copyrightControlWidth", d, "width");
        d.bindTo("keyboardWidth", e, "width");
        d.bindTo("tosWidth", a, "width");
        d.bindTo("mapTypeId", this);
        d.bindTo("scaleWidth", this);
        d.bindTo("keyboardShortcutsShown", this);
        c && _.ei[28] ? (d.bindTo("hide", c, "hideLegalNotices"), b.bindTo("hide", c, "hideLegalNotices"), a.bindTo("hide", c, "hideLegalNotices")) : (d.bindTo("isCustomPanorama", this), b.bindTo("hide", this, "isCustomPanorama"));
        this.i = d;
        this.j = b;
        this.o = a;
        this.g = e;
    };
    ED = function (a) {
        this.g = a;
    };
    FD = function (a, b) {
        _.wn(a);
        _.vn(a);
        a.style.fontFamily = "Roboto,Arial,sans-serif";
        a.style.fontSize = _.Bl(Math.round((11 * b) / 40));
        a.style.textAlign = "center";
        _.sx(a, "rgba(0, 0, 0, 0.3) 0px 1px 4px -1px");
        a.setAttribute("controlWidth", _.Bl(b));
        _.qu(a, "pointer");
        this.i = [];
        this.g = b;
        this.j = a;
    };
    pta = function (a, b, c) {
        _.I.addDomListener(b, "mouseover", function () {
            b.style.color = "#bbb";
            b.style.fontWeight = "bold";
        });
        _.I.addDomListener(b, "mouseout", function () {
            b.style.color = "#999";
            b.style.fontWeight = "400";
        });
        _.I.zc(b, "click", a, function () {
            a.set("pano", c);
        });
    };
    GD = function (a, b) {
        var c = this;
        this.H = a;
        _.Mm(a, "gm-svpc");
        a.setAttribute("dir", "ltr");
        a.setAttribute("title", "K\u00e9o Ng\u01b0\u1eddi h\u00ecnh m\u1eafc \u00e1o v\u00e0o b\u1ea3n \u0111\u1ed3 \u0111\u1ec3 m\u1edf Ch\u1ebf \u0111\u1ed9 xem ph\u1ed1");
        a.style.backgroundColor = "#fff";
        this.g = { em: null, active: null, bm: null };
        this.i = b;
        this.j = !0;
        qta(this);
        this.set("position", _.eC.Tr.offset);
        _.I.zc(a, "mouseover", this, this.N);
        _.I.zc(a, "mouseout", this, this.O);
        a = this.o = new _.ZA(a);
        a.bindTo("position", this);
        _.I.forward(a, "dragstart", this);
        _.I.forward(a, "drag", this);
        _.I.forward(a, "dragend", this);
        var d = this;
        _.I.addListener(a, "dragend", function () {
            d.set("position", _.eC.Tr.offset);
        });
        _.I.addListener(this, "mode_changed", function () {
            var e = c.get("mode");
            c.o.get("enabled") || c.o.set("enabled", !0);
            rta(c, e);
        });
        _.I.addListener(this, "display_changed", function () {
            return sta(c);
        });
        _.I.addListener(this, "mapsize_changed", function () {
            return sta(c);
        });
        this.set("mode", 1);
    };
    qta = function (a) {
        for (var b in a.g) {
            var c = a.g[b];
            c && c.parentNode && _.xd(c);
            a.g[b] = null;
        }
        b = a.H;
        if (a.j) {
            _.pu(b);
            c = new _.Tg(a.i, a.i);
            _.sx(b, "0 1px 4px -1px rgba(0,0,0,0.3)");
            DC(b, _.Bl(40 < a.i ? Math.round(a.i / 20) : 2));
            b.style.width = _.Bl(c.width);
            b.style.height = _.Bl(c.height);
            var d = 32 > a.i ? a.i - 2 : 40 > a.i ? 30 : 10 + a.i / 2,
                e = _.nn("div", b);
            e.style.position = "absolute";
            e.style.left = "50%";
            e.style.top = "50%";
            var f = _.vd("IMG");
            a.g.em = f;
            f.src = _.NA["pegman_dock_normal.svg"];
            f.style.width = f.style.height = _.Bl(d);
            f.style.position = "absolute";
            f.style.transform = "translate(-50%, -50%)";
            f.style.pointerEvents = "none";
            e.appendChild(f);
            f = _.vd("IMG");
            a.g.active = f;
            f.src = _.NA["pegman_dock_active.svg"];
            f.style.display = "none";
            f.style.width = f.style.height = _.Bl(d);
            f.style.position = "absolute";
            f.style.transform = "translate(-50%, -50%)";
            f.style.pointerEvents = "none";
            e.appendChild(f);
            f = _.vd("IMG");
            a.g.bm = f;
            f.style.display = "none";
            f.style.width = f.style.height = _.Bl((4 * d) / 3);
            f.style.position = "absolute";
            f.style.transform = "translate(-60%, -45%)";
            f.style.pointerEvents = "none";
            e.appendChild(f);
            f.src = _.NA["pegman_dock_hover.svg"];
            a.g.em.setAttribute("aria-label", "Ki\u1ec3m so\u00e1t ng\u01b0\u1eddi h\u00ecnh m\u1eafc \u00e1o trong ch\u1ebf \u0111\u1ed9 xem ph\u1ed1");
            a.g.active.setAttribute("aria-label", "Ng\u01b0\u1eddi h\u00ecnh m\u1eafc \u00e1o \u1edf \u0111\u1ea7u B\u1ea3n \u0111\u1ed3");
            a.g.bm.setAttribute("aria-label", "Ki\u1ec3m so\u00e1t ng\u01b0\u1eddi h\u00ecnh m\u1eafc \u00e1o trong ch\u1ebf \u0111\u1ed9 xem ph\u1ed1");
            b.setAttribute("controlWidth", c.width);
            b.setAttribute("controlHeight", c.height);
            _.I.trigger(b, "resize");
            rta(a, a.get("mode"));
        } else _.ou(b), _.I.trigger(b, "resize");
    };
    rta = function (a, b) {
        a.j && ((a = a.g), (a.em.style.display = a.bm.style.display = a.active.style.display = "none"), 1 == b ? (a.em.style.display = "") : 2 == b ? (a.bm.style.display = "") : (a.active.style.display = ""));
    };
    sta = function (a) {
        var b = a.get("mapSize");
        b = !!a.get("display") || !!(b && 200 <= b.width && b && 200 <= b.height);
        a.j != b && ((a.j = b), qta(a));
    };
    HD = function (a) {
        a = { clickable: !1, crossOnDrag: !1, draggable: !0, map: a, mapOnly: !0, pegmanMarker: !0, zIndex: 1e6 };
        this.ha = _.eC.Ei;
        this.na = _.eC.xy;
        this.o = 0;
        this.T = this.N = -1;
        this.j = 0;
        this.H = this.O = null;
        this.i = _.Cg("mode");
        this.g = _.Dg("mode");
        var b = (this.ka = new _.zh(a));
        b.setDraggable(!0);
        var c = (this.V = new _.zh(a)),
            d = (this.$ = new _.zh(a));
        this.g(1);
        this.set("heading", 0);
        b.bindTo("icon", this, "pegmanIcon");
        b.bindTo("position", this, "dragPosition");
        b.bindTo("dragging", this);
        var e = this;
        c.bindTo("icon", this, "lilypadIcon");
        _.I.addListener(this, "position_changed", function () {
            c.set("position", e.get("position"));
        });
        c.bindTo("dragging", this);
        d.set("cursor", _.Rha);
        d.set("icon", Yra(this.na, 0));
        _.I.addListener(this, "dragposition_changed", function () {
            d.set("position", e.get("dragPosition"));
        });
        d.bindTo("dragging", this);
        _.I.addListener(this, "dragstart", this.Xt);
        _.I.addListener(this, "drag", this.Yt);
        _.I.addListener(this, "dragend", this.Wt);
        _.I.forward(b, "dragstart", this);
        _.I.forward(b, "drag", this);
        _.I.forward(b, "dragend", this);
    };
    vta = function (a) {
        var b = a.i(),
            c = _.RA(b);
        a.ka.setVisible(c || 7 == b);
        var d = a.set;
        c ? ((b = a.i() - 3), (b = Yra(a.ha, b))) : 7 == b ? ((b = tta(a)), a.T != b && ((a.T = b), (a.O = { url: uta[b], scaledSize: new _.Tg(49, 52), anchor: new _.M(25, 35) })), (b = a.O)) : (b = void 0);
        d.call(a, "pegmanIcon", b);
    };
    wta = function (a) {
        a.V.setVisible(!1);
        a.$.setVisible(_.RA(a.i()));
    };
    tta = function (a) {
        (a = _.Mt(a.get("heading")) % 360) || (a = 0);
        0 > a && (a += 360);
        return Math.round((a / 360) * 16) % 16;
    };
    ID = function (a, b, c, d, e, f, g, h, k, l) {
        this.g = a;
        this.ha = f;
        this.T = e;
        this.O = g;
        this.ka = h;
        this.na = l || null;
        this.ta = d;
        this.N = this.o = !1;
        this.V = null;
        this.nn(1);
        xta(this, c, b);
        this.i = new _.aB(k);
        k || (this.i.bindTo("mapHeading", this), this.i.bindTo("tilt", this));
        this.i.bindTo("client", this);
        this.i.bindTo("client", a, "svClient");
        this.j = this.$ = null;
        this.H = _.cB(c, d);
    };
    yta = function (a, b) {
        return _.We(b - (a || 0), 0, 360);
    };
    xta = function (a, b, c) {
        var d = a.g.__gm,
            e = new GD(b, a.ka);
        e.bindTo("mode", a);
        e.bindTo("mapSize", a);
        e.bindTo("display", a);
        var f = new HD(a.g);
        f.bindTo("mode", a);
        f.bindTo("dragPosition", a);
        f.bindTo("position", a);
        var g = new _.QA(["mapHeading", "streetviewHeading"], "heading", yta);
        g.bindTo("streetviewHeading", a, "heading");
        g.bindTo("mapHeading", a.g, "heading");
        f.bindTo("heading", g);
        a.bindTo("pegmanDragging", f, "dragging");
        d.bindTo("pegmanDragging", a);
        _.I.bind(e, "dragstart", a, function () {
            var h = this;
            this.H = _.cB(b, this.ta);
            _.Pf("streetview").then(function (k) {
                if (!h.$) {
                    var l = (0, _.lb)(h.T.getUrl, h.T),
                        m = d.get("panes");
                    k = h.$ = new k.iu(m.floatPane, l, h.ha);
                    k.bindTo("description", h);
                    k.bindTo("mode", h);
                    k.bindTo("thumbnailPanoId", h, "panoId");
                    k.bindTo("pixelBounds", d);
                    l = new _.PA(function (p) {
                        p = new _.Bn(h.g, h.O, p);
                        h.O.Mb(p);
                        return p;
                    });
                    l.bindTo("latLngPosition", f, "dragPosition");
                    k.bindTo("pixelPosition", l);
                }
            });
        });
        _.Nb(["dragstart", "drag", "dragend"], function (h) {
            _.I.addListener(e, h, function () {
                _.I.trigger(f, h, { latLng: f.get("position"), pixel: e.get("position") });
            });
        });
        _.I.addListener(e, "position_changed", function () {
            var h = e.get("position");
            (h = c({ clientX: h.x + a.H.x, clientY: h.y + a.H.y })) && f.set("dragPosition", h);
        });
        _.I.addListener(f, "dragend", (0, _.lb)(a.Or, a, !1));
        _.I.addListener(f, "hover", (0, _.lb)(a.Or, a, !0));
    };
    zta = function (a) {
        var b = a.g.overlayMapTypes,
            c = a.i;
        b.forEach(function (d, e) {
            d == c && b.removeAt(e);
        });
        a.o = !1;
    };
    Ata = function (a) {
        var b = a.get("projection");
        b && b.i && (a.g.overlayMapTypes.push(a.i), (a.o = !0));
    };
    KD = function (a) {
        a = void 0 === a ? {} : a;
        _.Xg.call(this, a);
        this.i = [
            { description: JD("Di chuy\u1ec3n sang tr\u00e1i"), jh: this.g(37) },
            { description: JD("Di chuy\u1ec3n sang ph\u1ea3i"), jh: this.g(39) },
            { description: JD("Di chuy\u1ec3n l\u00ean"), jh: this.g(38) },
            { description: JD("Di chuy\u1ec3n xu\u1ed1ng"), jh: this.g(40) },
            { description: JD("Di chuy\u1ec3n sang tr\u00e1i 75%"), jh: this.g(36) },
            { description: JD("Di chuy\u1ec3n sang ph\u1ea3i 75%"), jh: this.g(35) },
            { description: JD("Di chuy\u1ec3n l\u00ean tr\u00ean 75%"), jh: this.g(33) },
            { description: JD("Di chuy\u1ec3n xu\u1ed1ng d\u01b0\u1edbi 75%"), jh: this.g(34) },
            { description: JD("Ph\u00f3ng to"), jh: this.g(107) },
            { description: JD("Thu nh\u1ecf"), jh: this.g(109) },
        ];
        _.im(Bta, this.element);
        rC(this.element, "keyboard-shortcuts-view");
        _.uu();
        var b = document.createElement("table"),
            c = document.createElement("tbody");
        b.appendChild(c);
        for (var d = _.A(this.i), e = d.next(); !e.done; e = d.next()) {
            e = e.value;
            var f = e.description,
                g = document.createElement("tr");
            g.appendChild(e.jh);
            g.appendChild(f);
            c.appendChild(g);
        }
        this.element.appendChild(b);
        _.Wg(this, a, KD, "KeyboardShortcutsView");
    };
    JD = function (a) {
        var b = document.createElement("td");
        b.textContent = a;
        return b;
    };
    Cta = function (a, b) {
        a = { content: new KD().element, Ah: b, ownerElement: a, title: "Ph\u00edm t\u1eaft" };
        a = new zD(a);
        rC(a.element, "keyboard-shortcuts-dialog-view");
        return a;
    };
    Dta = function () {
        return "@media print {  .gm-style .gmnoprint, .gmnoprint {    display:none  }}@media screen {  .gm-style .gmnoscreen, .gmnoscreen {    display:none  }}";
    };
    LD = function (a) {
        var b = this;
        this.ob = new _.Di(function () {
            b.j[1] && Eta(b);
            b.j[0] && Fta(b);
            if (b.j[2]) {
                if (b.va) {
                    var e = b.va;
                    zC(e.H, "display", "none");
                    e.i.set(0);
                    b.va = null;
                }
                b.O && (b.i.Jg(b.O), (b.O = null));
                e = b.get("scaleControl");
                void 0 !== e && _.Zg(b.g, e ? "Csy" : "Csn");
                e &&
                    ((b.O = _.nn("div")),
                    b.i.addElement(b.O, 12, !0, -1001),
                    _.vn(b.O),
                    _.wn(b.O),
                    (b.va = new dta(b.O, _.zx(b.O, b.T), new _.Cn([_.No(b, "projection"), _.No(b, "bottomRight"), _.No(b, "zoom")], fsa))),
                    _.I.trigger(b.O, "resize"),
                    b.$ && _.Mo(b.$, "scaleWidth", b.va.i));
            }
            b.j[3] && Gta(b);
            b.j = {};
            b.get("disableDefaultUI") && !b.N && _.Zg(b.g, "Cdn");
        }, 0);
        this.i = a.Dr || null;
        this.wa = a.Lj;
        this.Ja = a.Mw || null;
        this.o = a.controlSize;
        this.tb = a.Nu || null;
        this.g = a.map || null;
        this.N = a.Uy || null;
        this.Qb = a.Vy || null;
        this.Gb = a.Ty || null;
        this.Fb = a.Jc || null;
        this.ab = !!a.xw;
        this.wb = this.vb = this.yb = !1;
        this.H = this.Bb = this.Ca = null;
        this.T = a.ir;
        this.ub = _.Bx("Chuy\u1ec3n \u0111\u1ed5i ch\u1ebf \u0111\u1ed9 xem to\u00e0n m\u00e0n h\u00ecnh");
        this.ka = null;
        this.Hb = a.hm;
        this.V = null;
        this.Oa = !1;
        this.O = this.va = null;
        this.Ha = [];
        this.ta = null;
        this.Jb = {};
        this.j = {};
        this.na = this.Ba = this.Aa = this.Ga = null;
        this.Ka = _.nn("div");
        this.ha = null;
        this.Ia = !1;
        _.wn(this.Ka);
        _.jm(Dta, this.T);
        var c = (this.Ta = new fD(_.te(_.Fe(_.Ge), 14)));
        c.bindTo("center", this);
        c.bindTo("zoom", this);
        c.bindTo("mapTypeId", this);
        c.bindTo("pano", this);
        c.bindTo("position", this);
        c.bindTo("pov", this);
        c.bindTo("heading", this);
        c.bindTo("tilt", this);
        a.map &&
            _.I.addListener(c, "url_changed", function () {
                a.map.set("mapUrl", c.get("url"));
            });
        var d = new ED(_.Fe(_.Ge));
        d.bindTo("center", this);
        d.bindTo("zoom", this);
        d.bindTo("mapTypeId", this);
        d.bindTo("pano", this);
        d.bindTo("heading", this);
        this.Lb = d;
        Hta(this);
        this.$ = Ita(this);
        Gta(this);
        Jta(this, a.Mq);
        this.Ca = new Dsa(this.$.g, this.wa);
        a.Ss && Kta(this);
        this.keyboardShortcuts_changed();
        _.ei[35] && Lta(this);
        Mta(this);
    };
    Mta = function (a) {
        _.Pf("util").then(function (b) {
            b.g.g(function () {
                a.Ia = !0;
                Nta(a);
                a.ha && (a.ha.set("display", !1), a.ha.unbindAll(), (a.ha = null));
            });
        });
    };
    Sta = function (a) {
        if (Ota(a) != a.Bb || Pta(a) != a.yb || Qta(a) != a.wb || MD(a) != a.Oa || Rta(a) != a.vb) a.j[1] = !0;
        a.j[0] = !0;
        _.Ei(a.ob);
    };
    ND = function (a) {
        return a.get("disableDefaultUI");
    };
    MD = function (a) {
        var b = a.get("streetViewControl"),
            c = a.get("disableDefaultUI"),
            d = !!a.get("size");
        (void 0 !== b || c) && _.Zg(a.g, b ? "Cvy" : "Cvn");
        null == b && (b = !c);
        a = d && !a.N;
        return b && a;
    };
    Tta = function (a) {
        return !a.get("disableDefaultUI") && !!a.N;
    };
    Jta = function (a, b) {
        var c = a.i;
        _.Nb(b, function (d, e) {
            if (d) {
                var f = function (g) {
                    if (g) {
                        var h = g.index;
                        _.af(h) || (h = 1e3);
                        h = Math.max(h, -999);
                        _.sn(g, Math.min(999999, g.style.zIndex || 0));
                        c.addElement(g, e, !1, h);
                    }
                };
                d.forEach(f);
                _.I.addListener(d, "insert_at", function (g) {
                    f(d.getAt(g));
                });
                _.I.addListener(d, "remove_at", function (g, h) {
                    c.Jg(h);
                });
            }
        });
    };
    Lta = function (a) {
        if (a.g) {
            var b = new PC(document.createElement("div"));
            b.bindTo("card", a.g.__gm);
            b = b.getDiv();
            a.i.addElement(b, 1, !0, 0.1);
        }
    };
    Gta = function (a) {
        a.ka && (a.ka.unbindAll(), vsa(a.ka), (a.ka = null), a.i.Jg(a.ub));
        var b = _.Bx("Chuy\u1ec3n \u0111\u1ed5i ch\u1ebf \u0111\u1ed9 xem to\u00e0n m\u00e0n h\u00ecnh"),
            c = new wsa(a.T, b, a.Hb, a.o);
        c.bindTo("display", a, "fullscreenControl");
        c.bindTo("disableDefaultUI", a);
        c.bindTo("mapTypeId", a);
        var d = a.get("fullscreenControlOptions") || {};
        a.i.addElement(b, (d && d.position) || 7, !0, -1007);
        a.ka = c;
        a.ub = b;
    };
    Ita = function (a) {
        var b = new ota(a.wa, a.T, a.g || a.N, a.ab);
        b.bindTo("size", a);
        b.bindTo("rmiWidth", a);
        b.bindTo("attributionText", a);
        b.bindTo("fontLoaded", a);
        b.bindTo("mapTypeId", a);
        b.bindTo("isCustomPanorama", a);
        b.bindTo("logoWidth", a);
        var c = b.i.getDiv();
        a.i.addElement(c, 12, !0, -1e3);
        c = b.j.getDiv();
        a.i.addElement(c, 12, !0, -1005);
        c = b.o.getDiv();
        a.i.addElement(c, 12, !0, -1002);
        b.g.addListener("click", function () {
            Uta(a);
        });
        return b;
    };
    Uta = function (a) {
        a = a.g.__gm;
        var b = a.get("innerContainer"),
            c = a.nb,
            d = Cta(c, function () {
                tC(b).catch(function () {});
            });
        c.appendChild(d.element);
        d.show();
        d.addListener("hide", function () {
            c.removeChild(d.element);
        });
    };
    Hta = function (a) {
        if (!_.ei[2]) {
            var b = !!_.ei[21];
            a.g ? (b = Isa(a.g, a.Ta, b)) : ((b = Hsa(a.N, a.Ta, b)), Gsa(b, !0));
            b = b.getDiv();
            a.i.addElement(b, 10, !0, -1e3);
            a.set("logoWidth", b.offsetWidth);
        }
    };
    Kta = function (a) {
        var b = _.Fe(_.Ge);
        if (!_.ur()) {
            var c = document.createElement("div"),
                d = new GC(c, a.g, _.te(b, 14));
            a.i.addElement(c, 12, !0, -1003);
            d.bindTo("available", a, "rmiAvailable");
            d.bindTo("bounds", a);
            _.ei[17] ? (d.bindTo("enabled", a, "reportErrorControl"), a.g.bindTo("rmiLinkData", d)) : d.set("enabled", !0);
            d.bindTo("mapSize", a, "size");
            d.bindTo("mapTypeId", a);
            d.bindTo("sessionState", a.Lb);
            a.bindTo("rmiWidth", d, "width");
            _.I.addListener(d, "rmilinkdata_changed", function () {
                var e = d.get("rmiLinkData");
                a.g.set("rmiUrl", e && e.url);
            });
        }
    };
    Nta = function (a) {
        a.Fa && (a.Fa.unbindAll && a.Fa.unbindAll(), (a.Fa = null));
        a.Ga && (a.Ga.unbindAll(), (a.Ga = null));
        a.Aa && (a.Aa.unbindAll(), (a.Aa = null));
        a.ta && (Vta(a, a.ta), _.Pi(a.ta.nb), (a.ta = null));
    };
    Fta = function (a) {
        Nta(a);
        if (a.Ja && !a.Ia) {
            var b = Wta(a);
            if (b) {
                var c = _.nn("div");
                _.tu(c);
                c.style.margin = _.Bl(a.o >> 2);
                _.I.addDomListener(c, "mouseover", function () {
                    _.sn(c, 1e6);
                });
                _.I.addDomListener(c, "mouseout", function () {
                    _.sn(c, 0);
                });
                _.sn(c, 0);
                var d = a.get("mapTypeControlOptions") || {},
                    e = (a.Aa = new esa(a.Ja, d.mapTypeIds));
                e.bindTo("aerialAvailableAtZoom", a);
                e.bindTo("zoom", a);
                var f = e.o;
                a.i.addElement(c, d.position || 1, !1, 0.2);
                d = null;
                2 == b ? ((d = new oD(c, f, a.o)), e.bindTo("mapTypeId", d)) : (d = new Tsa(c, f, _.kD, a.o));
                b = a.Ga = new pD(e.j);
                b.set("labels", !0);
                d.bindTo("mapTypeId", b, "internalMapTypeId");
                d.bindTo("labels", b);
                d.bindTo("terrain", b);
                d.bindTo("tilt", a, "desiredTilt");
                d.bindTo("fontLoaded", a);
                d.bindTo("mapSize", a, "size");
                d.bindTo("display", a, "mapTypeControl");
                b.bindTo("mapTypeId", a);
                _.I.trigger(c, "resize");
                a.ta = { nb: c, lm: null };
                a.Fa = d;
            }
        }
    };
    Wta = function (a) {
        if (!a.Ja) return null;
        var b = (a.get("mapTypeControlOptions") || {}).style || 0,
            c = a.get("mapTypeControl"),
            d = ND(a);
        if ((void 0 === c && d) || (void 0 !== c && !c)) return _.Zg(a.g, "Cmn"), null;
        1 == b ? _.Zg(a.g, "Cmh") : 2 == b && _.Zg(a.g, "Cmd");
        return 2 == b || 1 == b ? b : 1;
    };
    Xta = function (a, b) {
        b = a.V = new uD(b, a.o, _.Ur.Tc(), a.T);
        b.bindTo("zoomRange", a);
        b.bindTo("display", a, "zoomControl");
        b.bindTo("disableDefaultUI", a);
        b.bindTo("mapSize", a, "size");
        b.bindTo("mapTypeId", a);
        b.bindTo("zoom", a);
        return b.getDiv();
    };
    Yta = function (a) {
        var b = new _.vx(RC, { rtl: _.Ur.Tc() }),
            c = new ZC(b, a.o, a.T);
        c.bindTo("pov", a);
        c.bindTo("disableDefaultUI", a);
        c.bindTo("panControl", a);
        c.bindTo("mapSize", a, "size");
        return b.nb;
    };
    Zta = function (a) {
        var b = _.nn("div");
        _.tu(b);
        a.H = new ata(b, a.o, a.T);
        a.H.bindTo("mapSize", a, "size");
        a.H.bindTo("rotateControl", a);
        a.H.bindTo("heading", a);
        a.H.bindTo("tilt", a);
        a.H.bindTo("aerialAvailableAtZoom", a);
        return b;
    };
    $ta = function (a) {
        var b = _.nn("div"),
            c = (a.Ba = new FD(b, a.o));
        c.bindTo("pano", a);
        c.bindTo("floors", a);
        c.bindTo("floorId", a);
        return b;
    };
    OD = function (a) {
        a.j[1] = !0;
        _.Ei(a.ob);
    };
    Eta = function (a) {
        function b(m, p) {
            if (!l[m]) {
                var q = a.o >> 2,
                    r = 12 + (a.o >> 1),
                    t = document.createElement("div");
                _.tu(t);
                _.Mm(t, "gm-bundled-control");
                10 == m || 11 == m || 12 == m || 6 == m || 9 == m ? _.Mm(t, "gm-bundled-control-on-bottom") : _.au(t, "gm-bundled-control-on-bottom");
                t.style.margin = _.Bl(q);
                _.vn(t);
                l[m] = new dD(t, m, r);
                a.i.addElement(t, m, !1, 0.1);
            }
            m = l[m];
            m.add(p);
            a.Ha.push({ nb: p, lm: m });
        }
        function c(m) {
            return (a.get(m) || {}).position;
        }
        a.V && (jta(a.V), a.V.unbindAll(), (a.V = null));
        a.H && (a.H.unbindAll(), (a.H = null));
        a.Ba && (a.Ba.unbindAll(), (a.Ba = null));
        for (var d = _.A(a.Ha), e = d.next(); !e.done; e = d.next()) Vta(a, e.value);
        a.Ha = [];
        d = a.yb = Pta(a);
        var f = (a.Bb = Ota(a)),
            g = (a.Oa = MD(a)),
            h = (a.wb = Qta(a));
        a.vb = Rta(a);
        e = d && (c("panControlOptions") || 9);
        d = f && (c("zoomControlOptions") || (3 == f && 6) || 9);
        var k = 3 == f || _.ur();
        g = g && (c("streetViewControlOptions") || 9);
        h = h && (c("rotateControlOptions") || (k && 6) || 9);
        var l = a.Jb;
        d && ((f = Xta(a, f)), b(d, f));
        g && (aua(a), b(g, a.Ka));
        e && a.N && _.un.g && ((f = Yta(a)), b(e, f));
        h && ((e = Zta(a)), b(h, e));
        a.na && (a.na.remove(), (a.na = null));
        if ((e = Tta(a) && 9)) (f = $ta(a)), b(e, f);
        a.H && a.V && a.V.Cl && h == d && a.H.bindTo("mouseover", a.V.Cl);
        d = _.A(a.Ha);
        for (e = d.next(); !e.done; e = d.next()) _.I.trigger(e.value.nb, "resize");
    };
    Pta = function (a) {
        var b = a.get("panControl"),
            c = ND(a);
        if (void 0 !== b || c) return a.N || _.Zg(a.g, b ? "Cpy" : "Cpn"), !!b;
        b = a.get("size");
        return _.ur() || !b ? !1 : (400 <= b.width && 370 <= b.height) || !!a.N;
    };
    Rta = function (a) {
        return a.N ? !1 : ND(a) ? 1 == a.get("myLocationControl") : 0 != a.get("myLocationControl");
    };
    Qta = function (a) {
        var b = a.get("rotateControl"),
            c = ND(a);
        (void 0 !== b || c) && _.Zg(a.g, b ? "Cry" : "Crn");
        return !a.get("size") || a.N ? !1 : c ? 1 == b : 0 != b;
    };
    Ota = function (a) {
        var b = a.get("zoomControl"),
            c = ND(a);
        return 0 == b || (c && void 0 === b) ? (a.N || _.Zg(a.g, "Czn"), null) : a.get("size") ? 1 : null;
    };
    aua = function (a) {
        if (!a.ha && !a.Ia && a.tb && a.g) {
            var b = (a.ha = new ID(a.g, a.tb, a.Ka, a.T, a.Qb, _.Ge, a.Fb, a.o, a.ab, a.Gb || void 0));
            b.bindTo("mapHeading", a, "heading");
            b.bindTo("tilt", a);
            b.bindTo("projection", a.g);
            b.bindTo("mapTypeId", a);
            a.bindTo("panoramaVisible", b);
            b.bindTo("mapSize", a, "size");
            b.bindTo("display", a, "streetViewControl");
            b.bindTo("disableDefaultUI", a);
            bua(a);
        }
    };
    bua = function (a) {
        var b = a.ha;
        if (b) {
            var c = b.V,
                d = a.get("streetView");
            if (d != c) {
                if (c) {
                    var e = c.__gm;
                    e.unbind("result");
                    e.unbind("heading");
                    c.unbind("passiveLogo");
                    c.g.removeListener(a.Xs, a);
                    c.g.set(!1);
                }
                d &&
                    ((c = d.__gm),
                    null != c.get("result") && b.set("result", c.get("result")),
                    c.bindTo("result", b),
                    null != c.get("heading") && b.set("heading", c.get("heading")),
                    c.bindTo("heading", b),
                    d.bindTo("passiveLogo", a),
                    d.g.addListener(a.Xs, a),
                    a.set("panoramaVisible", d.get("visible")),
                    b.bindTo("client", d));
                b.V = d;
            }
        }
    };
    Vta = function (a, b) {
        b.lm ? (b.lm.remove(b.nb), delete b.lm) : a.i.Jg(b.nb);
    };
    cua = function (a, b, c, d, e, f, g, h, k, l, m, p, q, r, t) {
        var v = b.get("streetView");
        k = b.__gm;
        if (v && k) {
            p = new _.eB(new _.Ke(_.Ge.W[1]).getStreetView(), v.get("client"));
            v = _.wca[v.get("client")];
            var w = new LD({
                    Nu: function (F) {
                        return q.fromContainerPixelToLatLng(new _.M(F.clientX, F.clientY));
                    },
                    Mq: b.controls,
                    ir: l,
                    hm: m,
                    Dr: a,
                    map: b,
                    Mw: b.mapTypes,
                    Lj: d,
                    Ss: !0,
                    Jc: r,
                    controlSize: b.get("controlSize") || 40,
                    Ty: v,
                    Vy: p,
                    xw: t,
                }),
                x = new _.QA(["bounds"], "bottomRight", function (F) {
                    return F && _.Uk(F);
                }),
                y,
                H;
            _.I.xc(b, "idle", function () {
                var F = b.get("bounds");
                F != y && (w.set("bounds", F), x.set("bounds", F), (y = F));
                F = b.get("center");
                F != H && (w.set("center", F), (H = F));
            });
            w.bindTo("bottomRight", x);
            w.bindTo("disableDefaultUI", b);
            w.bindTo("heading", b);
            w.bindTo("projection", b);
            w.bindTo("reportErrorControl", b);
            w.bindTo("passiveLogo", b);
            w.bindTo("zoom", k);
            w.bindTo("mapTypeId", c);
            w.bindTo("attributionText", e);
            w.bindTo("zoomRange", g);
            w.bindTo("aerialAvailableAtZoom", h);
            w.bindTo("tilt", h);
            w.bindTo("desiredTilt", h);
            w.bindTo("keyboardShortcuts", b, "keyboardShortcuts", !0);
            w.bindTo("mapTypeControlOptions", b, null, !0);
            w.bindTo("panControlOptions", b, null, !0);
            w.bindTo("rotateControlOptions", b, null, !0);
            w.bindTo("scaleControlOptions", b, null, !0);
            w.bindTo("streetViewControlOptions", b, null, !0);
            w.bindTo("zoomControlOptions", b, null, !0);
            w.bindTo("mapTypeControl", b);
            w.bindTo("myLocationControlOptions", b);
            w.bindTo("fullscreenControlOptions", b, null, !0);
            b.get("fullscreenControlOptions") && w.notify("fullscreenControlOptions");
            w.bindTo("panControl", b);
            w.bindTo("rotateControl", b);
            w.bindTo("motionTrackingControl", b);
            w.bindTo("motionTrackingControlOptions", b, null, !0);
            w.bindTo("scaleControl", b);
            w.bindTo("streetViewControl", b);
            w.bindTo("fullscreenControl", b);
            w.bindTo("zoomControl", b);
            w.bindTo("myLocationControl", b);
            w.bindTo("rmiAvailable", f, "available");
            w.bindTo("streetView", b);
            w.bindTo("fontLoaded", k);
            w.bindTo("size", k);
            k.bindTo("renderHeading", w);
            _.I.forward(w, "panbyfraction", k);
        }
    };
    dua = function (a, b, c, d, e, f, g, h) {
        var k = new LD({ Mq: f, ir: d, hm: h, Dr: e, Lj: c, controlSize: g.get("controlSize") || 40, Ss: !1, Uy: g });
        k.set("streetViewControl", !1);
        k.bindTo("attributionText", b, "copyright");
        k.set("mapTypeId", "streetview");
        k.set("tilt", !0);
        k.bindTo("heading", b);
        k.bindTo("zoom", b, "zoomFinal");
        k.bindTo("zoomRange", b);
        k.bindTo("pov", b, "pov");
        k.bindTo("position", g);
        k.bindTo("pano", g);
        k.bindTo("passiveLogo", g);
        k.bindTo("floors", b);
        k.bindTo("floorId", b);
        k.bindTo("rmiWidth", g);
        k.bindTo("fullscreenControlOptions", g, null, !0);
        k.bindTo("panControlOptions", g, null, !0);
        k.bindTo("zoomControlOptions", g, null, !0);
        k.bindTo("fullscreenControl", g);
        k.bindTo("panControl", g);
        k.bindTo("zoomControl", g);
        k.bindTo("disableDefaultUI", g);
        k.bindTo("fontLoaded", g.__gm);
        k.bindTo("size", b);
        a.view &&
            a.view.addListener("scene_changed", function () {
                var l = a.view.get("scene");
                k.set("isCustomPanorama", "c" == l);
            });
        k.ob.ke();
        _.I.forward(k, "panbyfraction", a);
    };
    PD = function (a, b, c) {
        this.ka = a;
        this.ha = b;
        this.$ = c;
        this.j = this.i = 0;
        this.o = null;
        this.T = this.g = 0;
        this.N = this.V = null;
        _.I.zc(a, "keydown", this, this.Uv);
        _.I.zc(a, "keypress", this, this.Mu);
        _.I.zc(a, "keyup", this, this.iy);
        this.H = {};
        this.O = {};
    };
    eua = function (a) {
        var b = a.get("zoom");
        _.af(b) && a.set("zoom", b + 1);
    };
    fua = function (a) {
        var b = a.get("zoom");
        _.af(b) && a.set("zoom", b - 1);
    };
    QD = function (a, b, c) {
        _.I.trigger(a, "panbyfraction", b, c);
    };
    gua = function (a, b) {
        return !!(b.target !== a.ka || b.ctrlKey || b.altKey || b.metaKey || 0 == a.get("enabled"));
    };
    hua = function (a, b, c, d, e) {
        var f = new PD(b, d, e);
        f.bindTo("zoom", a);
        f.bindTo("enabled", a, "keyboardShortcuts");
        d && f.bindTo("tilt", a.__gm);
        e && f.bindTo("heading", a);
        (d || e) && _.I.forward(f, "tiltrotatebynow", a.__gm);
        _.I.forward(f, "panbyfraction", a.__gm);
        _.I.forward(f, "panbynow", a.__gm);
        _.I.forward(f, "panby", a.__gm);
        var g = a.__gm.O,
            h;
        _.I.xc(a, "streetview_changed", function () {
            var k = a.get("streetView"),
                l = h;
            l && _.I.removeListener(l);
            h = null;
            k &&
                (h = _.I.xc(k, "visible_changed", function () {
                    k.getVisible() && k === g ? (b.blur(), (c.style.visibility = "hidden")) : (c.style.visibility = "");
                }));
        });
    };
    RD = function () {
        this.Qp = IC;
        this.Jw = cua;
        this.Lw = dua;
        this.Kw = hua;
    };
    _.Tc.prototype.rj = _.xk(9, function () {
        return 1;
    });
    _.Yc.prototype.rj = _.xk(8, function () {
        return 1;
    });
    _.id.prototype.rj = _.xk(7, function () {
        return this.i;
    });
    _.B(xC, _.Xg);
    xC.prototype.T = function (a) {
        this.j = a.relatedTarget;
        if (this.ownerElement.contains(this.element)) {
            uC(this, this.content);
            var b = uC(this, document.body),
                c = a.target,
                d = Lra(this, b);
            a.target === this.g
                ? ((c = d.gw), (a = d.co), (d = d.xr), this.element.contains(this.j) ? (--c, 0 <= c ? vC(b[c]) : vC(b[d - 1])) : vC(b[a + 1]))
                : a.target === this.i
                ? ((c = d.co), (a = d.xr), (d = d.hw), this.element.contains(this.j) ? ((d += 1), d < b.length ? vC(b[d]) : vC(b[c + 1])) : vC(b[a - 1]))
                : ((d = d.co), this.ownerElement.contains(c) && !this.element.contains(c) && vC(b[d + 1]));
        }
    };
    xC.prototype.O = function (a) {
        ("Escape" === a.key || "Esc" === a.key) &&
            this.ownerElement.contains(this.element) &&
            "none" !== this.element.style.display &&
            this.element.contains(document.activeElement) &&
            document.activeElement &&
            (wC(this), a.stopPropagation());
    };
    xC.prototype.show = function (a) {
        this.N = document.activeElement;
        this.element.style.display = "";
        a ? a() : ((a = uC(this, this.content)), vC(a[0]));
        this.o = _.I.zc(this.ownerElement, "focus", this, this.T, !0);
        this.H.listen(this.element, "keydown", this.O);
    };
    var Rra = {};
    _.B(GC, _.J);
    _.n = GC.prototype;
    _.n.sessionState_changed = function () {
        var a = this.get("sessionState");
        if (a) {
            var b = new _.Vz();
            _.Hk(b, a);
            new _.ny(_.ue(b, 9)).W[0] = 1;
            b.W[11] = !0;
            a = _.lqa(b, this.N);
            a += "&rapsrc=apiv3";
            this.o.setAttribute("href", a);
            this.j = a;
            this.get("available") && this.set("rmiLinkData", Xra(this));
        }
    };
    _.n.available_changed = function () {
        HC(this);
    };
    _.n.enabled_changed = function () {
        HC(this);
    };
    _.n.mapTypeId_changed = function () {
        HC(this);
    };
    _.n.mapSize_changed = function () {
        HC(this);
    };
    var Zra = _.rl(
        _.Qc(
            ".dismissButton{background-color:#fff;border:1px solid #dadce0;color:#1a73e8;border-radius:4px;font-family:Roboto,sans-serif;font-size:14px;height:36px;cursor:pointer;padding:0 24px}.dismissButton:hover{background-color:rgba(66,133,244,0.04);border:1px solid #d2e3fc}.dismissButton:focus{background-color:rgba(66,133,244,0.12);border:1px solid #d2e3fc;outline:0}.dismissButton:focus:not(:focus-visible){background-color:#fff;border:1px solid #dadce0;outline:none}.dismissButton:focus-visible{background-color:rgba(66,133,244,0.12);border:1px solid #d2e3fc;outline:0}.dismissButton:hover:focus{background-color:rgba(66,133,244,0.16);border:1px solid #d2e2fd}.dismissButton:hover:focus:not(:focus-visible){background-color:rgba(66,133,244,0.04);border:1px solid #d2e3fc}.dismissButton:hover:focus-visible{background-color:rgba(66,133,244,0.16);border:1px solid #d2e2fd}.dismissButton:active{background-color:rgba(66,133,244,0.16);border:1px solid #d2e2fd;box-shadow:0 1px 2px 0 rgba(60,64,67,0.3),0 1px 3px 1px rgba(60,64,67,0.15)}.dismissButton:disabled{background-color:#fff;border:1px solid #f1f3f4;color:#3c4043}\n"
        )
    );
    var iua = new _.z.Set([3, 12, 6, 9]);
    _.B(IC, _.J);
    IC.prototype.Ob = function () {
        return _.ni(this.i);
    };
    IC.prototype.addElement = function (a, b, c, d) {
        var e = this;
        c = void 0 === c ? !1 : c;
        var f = this.g.get(b);
        if (f) {
            d = void 0 !== d && _.af(d) ? d : f.length;
            var g;
            for (g = 0; g < f.length && !(f[g].index > d); ++g);
            f.splice(g, 0, {
                element: a,
                border: !!c,
                index: d,
                listener: _.I.addListener(a, "resize", function () {
                    return _.Ei(e.ob);
                }),
            });
            _.rn(a);
            a.style.visibility = "hidden";
            c = this.o.get(b);
            b = iua.has(b) ? f.length - g - 1 : g;
            c.insertBefore(a, c.children[b]);
            _.Ei(this.ob);
        }
    };
    IC.prototype.Jg = function (a) {
        a.parentNode && a.parentNode.removeChild(a);
        for (var b = _.A(_.u(this.g, "values").call(this.g)), c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            for (var d = 0; d < c.length; ++d)
                if (c[d].element === a) {
                    var e = a;
                    e.style.top = "auto";
                    e.style.bottom = "auto";
                    e.style.left = "auto";
                    e.style.right = "auto";
                    _.I.removeListener(c[d].listener);
                    c.splice(d, 1);
                }
        }
        _.Ei(this.ob);
    };
    IC.prototype.j = function () {
        var a = this.Ob(),
            b = a.width;
        a = a.height;
        var c = this.g,
            d = [],
            e = LC(c.get(1), "left", "top", d),
            f = MC(c.get(5), "left", "top", d);
        d = [];
        var g = LC(c.get(10), "left", "bottom", d),
            h = MC(c.get(6), "left", "bottom", d);
        d = [];
        var k = LC(c.get(3), "right", "top", d),
            l = MC(c.get(7), "right", "top", d);
        d = [];
        var m = LC(c.get(12), "right", "bottom", d);
        d = MC(c.get(9), "right", "bottom", d);
        var p = bsa(c.get(11), "bottom", b),
            q = bsa(c.get(2), "top", b),
            r = NC(c.get(4), "left", b, a);
        NC(c.get(13), "center", b, a);
        c = NC(c.get(8), "right", b, a);
        this.set(
            "bounds",
            new _.ii([
                new _.M(Math.max(r, e.width, g.width, f.width, h.width) || 0, Math.max(q, e.height, f.height, k.height, l.height) || 0),
                new _.M(b - (Math.max(c, k.width, m.width, l.width, d.width) || 0), a - (Math.max(p, g.height, m.height, h.height, d.height) || 0)),
            ])
        );
    };
    _.D(OC, _.J);
    _.B(esa, _.J);
    _.B(PC, _.J);
    PC.prototype.card_changed = function () {
        var a = this.get("card");
        this.g && this.i.removeChild(this.g);
        if (a) {
            var b = (this.g = _.nn("div"));
            b.style.backgroundColor = "white";
            b.appendChild(a);
            b.style.margin = _.Bl(10);
            b.style.padding = _.Bl(1);
            _.sx(b, "0 1px 4px -1px rgba(0,0,0,0.3)");
            DC(b, _.Bl(2));
            this.i.appendChild(b);
            this.g = b;
        } else this.g = null;
    };
    PC.prototype.getDiv = function () {
        return this.i;
    };
    var YC = _.rl(
        _.Qc(
            ".gm-control-active>img{box-sizing:content-box;display:none;left:50%;pointer-events:none;position:absolute;top:50%;transform:translate(-50%,-50%)}.gm-control-active>img:nth-child(1){display:block}.gm-control-active:hover>img:nth-child(1),.gm-control-active:active>img:nth-child(1){display:none}.gm-control-active:hover>img:nth-child(2),.gm-control-active:active>img:nth-child(3){display:block}\n"
        )
    );
    _.D(RC, _.rx);
    RC.prototype.fill = function (a) {
        _.px(this, 0, _.fw(a));
    };
    var QC = "t-avKK8hDgg9Q";
    _.D(SC, _.E);
    SC.prototype.getHeading = function () {
        return _.se(this, 0);
    };
    SC.prototype.setHeading = function (a) {
        _.Fk(this, 0, a);
    }; /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    var TC = {},
        UC = null;
    _.D(WC, _.Wd);
    WC.prototype.i = function (a) {
        this.Ub(a);
    };
    _.D(XC, WC);
    XC.prototype.stop = function (a) {
        VC(this);
        this.g = 0;
        a && (this.progress = 1);
        osa(this, this.progress);
        this.i("stop");
        this.i("end");
    };
    XC.prototype.Hc = function () {
        0 == this.g || this.stop(!1);
        this.i("destroy");
        XC.Df.Hc.call(this);
    };
    XC.prototype.i = function (a) {
        this.Ub(new psa(a, this));
    };
    _.D(psa, _.Dd);
    _.B(ZC, _.J);
    ZC.prototype.changed = function () {
        !this.j && this.g && (this.g.stop(), (this.g = null));
        var a = this.get("pov");
        if (a) {
            var b = new SC();
            b.setHeading(_.We(-a.heading, 0, 360));
            _.Hk(new _.rv(_.ue(b, 2)), _.sv(_.Qt(_.NA["compass_background.svg"])));
            _.Hk(new _.rv(_.ue(b, 3)), _.sv(_.Qt(_.NA["compass_needle_normal.svg"])));
            _.Hk(new _.rv(_.ue(b, 4)), _.sv(_.Qt(_.NA["compass_needle_hover.svg"])));
            _.Hk(new _.rv(_.ue(b, 5)), _.sv(_.Qt(_.NA["compass_needle_active.svg"])));
            _.Hk(new _.rv(_.ue(b, 6)), _.sv(_.Qt(_.NA["compass_rotate_normal.svg"])));
            _.Hk(new _.rv(_.ue(b, 7)), _.sv(_.Qt(_.NA["compass_rotate_hover.svg"])));
            _.Hk(new _.rv(_.ue(b, 8)), _.sv(_.Qt(_.NA["compass_rotate_active.svg"])));
            this.i.update([b]);
        }
    };
    ZC.prototype.mapSize_changed = function () {
        $C(this);
    };
    ZC.prototype.disableDefaultUI_changed = function () {
        $C(this);
    };
    ZC.prototype.panControl_changed = function () {
        $C(this);
    };
    _.B(wsa, _.J);
    var usa = [
        { Dv: -52, close: -78, top: -86, backgroundColor: "#fff" },
        { Dv: 0, close: -26, top: -86, backgroundColor: "#222" },
    ];
    _.B(cD, _.J);
    _.n = cD.prototype;
    _.n.fontLoaded_changed = function () {
        var a = this,
            b;
        return _.Ha(function (c) {
            if (1 == c.g) return (b = a), _.yk(c, ysa(a), 2);
            b.j = c.i;
            bD(a);
            c.g = 0;
        });
    };
    _.n.size_changed = function () {
        bD(this);
    };
    _.n.rmiWidth_changed = function () {
        bD(this);
    };
    _.n.tosWidth_changed = function () {
        bD(this);
    };
    _.n.scaleWidth_changed = function () {
        bD(this);
    };
    _.n.copyrightControlWidth_changed = function () {
        bD(this);
    };
    _.n.keyboardShortcutsShown_changed = function () {
        this.get("keyboardShortcutsShown") && _.uu();
        this.set("width", BC(this.i).width);
    };
    _.B(Dsa, _.J);
    dD.prototype.add = function (a) {
        a.style.position = "absolute";
        this.j ? this.g.insertBefore(a, this.g.firstChild) : this.g.appendChild(a);
        a = Esa(this, a);
        this.i.push(a);
        eD(this, a);
    };
    dD.prototype.remove = function (a) {
        var b = this;
        this.g.removeChild(a);
        Nra(this.i, function (c, d) {
            c.element === a && (b.i.splice(d, 1), c && (eD(b, c), c.Oo && (_.I.removeListener(c.Oo), delete c.Oo)));
        });
    };
    _.D(fD, _.J);
    fD.prototype.changed = function (a) {
        if ("url" != a)
            if (this.get("pano")) {
                a = this.get("pov");
                var b = this.get("position");
                a && b && ((a = _.nqa(a, b, this.get("pano"), this.g)), this.set("url", a));
            } else {
                a = {};
                if ((b = this.get("center"))) (b = new _.yf(b.lat(), b.lng())), (a.ll = b.toUrlValue());
                b = this.get("zoom");
                _.af(b) && (a.z = b);
                b = this.get("mapTypeId");
                (b = "terrain" == b ? "p" : "hybrid" == b ? "h" : _.Ir[b]) && (a.t = b);
                if ((b = this.get("pano"))) {
                    a.z = 17;
                    a.layer = "c";
                    var c = this.get("position");
                    c && (a.cbll = c.toUrlValue());
                    a.panoid = b;
                    (b = this.get("pov")) && (a.cbp = "12," + b.heading + ",," + Math.max(b.zoom - 3) + "," + -b.pitch);
                }
                a.hl = _.De(_.Fe(_.Ge));
                a.gl = _.Ee(_.Fe(_.Ge));
                a.mapclient = _.ei[35] ? "embed" : "apiv3";
                var d = [];
                _.Te(a, function (e, f) {
                    d.push(e + "=" + f);
                });
                this.set("url", this.g + "?" + d.join("&"));
            }
    };
    gD.prototype.getDiv = function () {
        return this.j;
    };
    gD.prototype.setUrl = function (a) {
        a ? (this.i.setAttribute("href", a), this.i.setAttribute("title", "M\u1edf khu v\u1ef1c n\u00e0y trong Google Maps (m\u1edf c\u1eeda s\u1ed5 m\u1edbi)")) : (this.i.removeAttribute("title"), this.i.removeAttribute("href"));
    };
    _.B(Jsa, _.J);
    _.B(jD, _.J);
    jD.prototype.Sb = function () {
        return this.g;
    };
    _.B(lD, _.J);
    lD.prototype.Sb = function () {
        return this.g;
    };
    _.B(mD, _.J);
    mD.prototype.Sb = function () {
        return this.g;
    };
    _.D(Msa, _.J);
    _.B(nD, _.J);
    nD.prototype.N = function () {
        var a = this.g;
        a.timeout && (window.clearTimeout(a.timeout), (a.timeout = null));
    };
    nD.prototype.active_changed = function () {
        this.N();
        if (this.get("active")) Qsa(this);
        else {
            var a = this.g;
            a.listeners && (_.Nb(a.listeners, _.I.removeListener), (a.listeners = null));
            a.contains(document.activeElement) && this.i.focus();
            this.j = null;
            _.ou(a);
            this.i.setAttribute("aria-expanded", "false");
        }
    };
    var Usa = _.rl(_.Qc(".gm-style .gm-style-mtc label,.gm-style .gm-style-mtc div{font-weight:400}.gm-style .gm-style-mtc ul,.gm-style .gm-style-mtc li{box-sizing:border-box}\n"));
    _.B(Tsa, _.J);
    _.B(oD, _.J);
    oD.prototype.mapSize_changed = function () {
        Wsa(this);
    };
    oD.prototype.display_changed = function () {
        Wsa(this);
    };
    _.B(pD, _.J);
    pD.prototype.changed = function (a) {
        if (!this.g)
            if ("mapTypeId" == a) {
                a = this.get("mapTypeId");
                var b = this.i[a];
                b && b.mapTypeId && (a = b.mapTypeId);
                qD(this, "internalMapTypeId", a);
                b && b.Ik && qD(this, b.Ik, b.value);
            } else Xsa(this);
    };
    _.B(rD, _.J);
    rD.prototype.$ = function () {
        var a = +this.get("heading") || 0;
        this.set("heading", (a + 270) % 360);
    };
    rD.prototype.ha = function () {
        var a = +this.get("heading") || 0;
        this.set("heading", (a + 90) % 360);
    };
    rD.prototype.ka = function () {
        this.H = !this.H;
        this.set("tilt", this.H ? 45 : 0);
    };
    rD.prototype.refresh = function () {
        var a = this.get("mapSize"),
            b = !!this.get("aerialAvailableAtZoom");
        a = !!this.get("rotateControl") || (a && 200 <= a.width && 200 <= a.height);
        b = b && a;
        a = this.V;
        Ysa(this.j, this.H, this.N);
        this.g.style.display = this.H ? "block" : "none";
        this.O.style.display = this.H ? "block" : "none";
        this.i.style.display = this.H ? "block" : "none";
        this.T.style.display = this.H ? "block" : "none";
        var c = this.N,
            d = Math.floor(3 * this.N) + 2;
        d = this.H ? d : this.N;
        this.o.style.width = _.Bl(c);
        this.o.style.height = _.Bl(d);
        a.setAttribute("controlWidth", c);
        a.setAttribute("controlHeight", d);
        _.nu(a, b);
        _.I.trigger(a, "resize");
    };
    _.B(ata, _.J);
    var tD = {},
        jua = (tD[0] = {});
    jua.backgroundColor = "#fff";
    jua.Uq = "#e6e6e6";
    var kua = (tD[1] = {});
    kua.backgroundColor = "#222";
    kua.Uq = "#1a1a1a";
    _.B(ita, _.J);
    _.B(uD, _.J);
    uD.prototype.getDiv = function () {
        return this.g;
    };
    _.B(xD, _.J);
    _.n = xD.prototype;
    _.n.fontLoaded_changed = function () {
        wD(this);
    };
    _.n.size_changed = function () {
        wD(this);
    };
    _.n.attributionText_changed = function () {
        _.Zt(this.H, lta(this));
        wD(this);
    };
    _.n.rmiWidth_changed = function () {
        yD(this);
    };
    _.n.tosWidth_changed = function () {
        yD(this);
    };
    _.n.scaleWidth_changed = function () {
        yD(this);
    };
    _.n.keyboardWidth_changed = function () {
        this.i = vD(this);
    };
    _.n.keyboardShortcutsShown_changed = function () {
        wD(this);
    };
    _.n.hide_changed = function () {
        var a = !this.get("hide");
        _.nu(this.g, a);
        a && _.uu();
    };
    _.n.mapTypeId_changed = function () {
        "streetview" === this.get("mapTypeId") && (_.Ax(this.O), (this.o.style.color = "#fff"));
    };
    _.n.getDiv = function () {
        return this.g;
    };
    var mta = _.rl(
        _.Qc(
            ".xxGHyP-dialog-view{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-moz-box-sizing:border-box;box-sizing:border-box;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:8px}.xxGHyP-dialog-view .uNGBb-dialog-view--content{background:#fff;border-radius:8px;-moz-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-flex:0;-webkit-flex:0 0 auto;-moz-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;max-height:100%;max-width:100%;padding:24px 8px 8px;position:relative}.xxGHyP-dialog-view .uNGBb-dialog-view--content .uNGjD-dialog-view--header{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:20px;padding:0 16px}.xxGHyP-dialog-view .uNGBb-dialog-view--content .uNGjD-dialog-view--header h2{font-family:Google Sans,Roboto,Arial,sans-serif;line-height:24px;font-size:16px;letter-spacing:.00625em;font-weight:500;color:#3c4043;margin:0 16px 0 0}[dir=rtl] .xxGHyP-dialog-view .uNGBb-dialog-view--content .uNGjD-dialog-view--header h2{margin:0 0 0 16px}.xxGHyP-dialog-view .uNGBb-dialog-view--content .BEIBcM-dialog-view--inner-content{font-family:Roboto,Arial,sans-serif;font-size:13px;padding:0 16px 16px;overflow:auto}\n"
        )
    );
    _.B(zD, _.Xg);
    zD.prototype.show = function () {
        this.g.show();
    };
    _.B(AD, _.J);
    AD.prototype.Sb = function () {
        return this.g.element;
    };
    AD.prototype.visible_changed = function () {
        this.get("visible") ? (_.uu(), this.j.appendChild(this.g.element), this.g.show()) : wC(this.g.g);
    };
    AD.prototype.attributionText_changed = function () {
        var a = this.get("attributionText") || "";
        (this.i.textContent = a) || wC(this.g.g);
    };
    _.B(BD, _.J);
    BD.prototype.attributionText_changed = function () {
        var a = this.get("attributionText") || "";
        _.pn(this.i, a);
    };
    BD.prototype.hide_changed = function () {
        var a = !this.get("hide");
        _.nu(this.g, a);
        a && _.uu();
    };
    BD.prototype.getDiv = function () {
        return this.g;
    };
    _.B(DD, _.J);
    DD.prototype.hide_changed = function () {
        var a = !this.get("hide");
        _.nu(this.g, a);
        CD(this);
        a && _.uu();
    };
    DD.prototype.mapTypeId_changed = function () {
        "streetview" == this.get("mapTypeId") && (_.Ax(this.g), (this.j.style.color = "#fff"));
    };
    DD.prototype.fontLoaded_changed = function () {
        CD(this);
    };
    DD.prototype.getDiv = function () {
        return this.g;
    };
    _.B(ota, _.J);
    _.D(ED, _.J);
    ED.prototype.changed = function (a) {
        if ("sessionState" != a) {
            a = new _.Vz();
            var b = this.get("zoom"),
                c = this.get("center"),
                d = this.get("pano");
            if ((null != b && null != c) || null != d) {
                var e = this.g;
                new _.jy(_.ue(a, 1)).W[0] = _.De(e);
                new _.jy(_.ue(a, 1)).W[1] = _.Ee(e);
                e = _.pA(a);
                var f = this.get("mapTypeId");
                "hybrid" == f || "satellite" == f ? (e.W[0] = 3) : ((e.W[0] = 0), "terrain" == f && ((f = new _.hy(_.ue(a, 4))), _.xe(f, 0, 4)));
                f = new _.Mx(_.ue(e, 1));
                f.W[0] = 2;
                if (c) {
                    var g = c.lng();
                    _.Fk(f, 1, g);
                    c = c.lat();
                    _.Fk(f, 2, c);
                }
                "number" === typeof b && _.Fk(f, 5, b);
                f.setHeading(this.get("heading") || 0);
                d && (new _.ry(_.ue(e, 2)).W[0] = d);
                this.set("sessionState", a);
            } else this.set("sessionState", null);
        }
    };
    _.B(FD, _.J);
    FD.prototype.floors_changed = function () {
        var a = this.get("floorId"),
            b = this.get("floors"),
            c = this.j;
        if (1 < _.Se(b)) {
            _.pu(c);
            _.Nb(this.i, function (g) {
                _.fm(g);
            });
            this.i = [];
            for (var d = b.length, e = d - 1; 0 <= e; --e) {
                var f = _.Bx(b[e].description || b[e].Sp || "T\u1ea7ng");
                b[e].Hn == a
                    ? ((f.style.color = "#aaa"), (f.style.fontWeight = "bold"), (f.style.backgroundColor = "#333"))
                    : (pta(this, f, b[e].Qx), (f.style.color = "#999"), (f.style.fontWeight = "400"), (f.style.backgroundColor = "#222"));
                f.style.height = f.style.width = _.Bl(this.g);
                e == d - 1 ? Tra(f, _.Bl(_.yx(this.g))) : 0 == e && Ura(f, _.Bl(_.yx(this.g)));
                _.on(b[e].Sp, f);
                c.appendChild(f);
                this.i.push(f);
            }
            setTimeout(function () {
                _.I.trigger(c, "resize");
            });
        } else _.ou(c);
    };
    _.B(GD, _.J);
    GD.prototype.N = function () {
        1 == this.get("mode") && this.set("mode", 2);
    };
    GD.prototype.O = function () {
        2 == this.get("mode") && this.set("mode", 1);
    };
    var lua = [
            _.NA["lilypad_0.svg"],
            _.NA["lilypad_1.svg"],
            _.NA["lilypad_2.svg"],
            _.NA["lilypad_3.svg"],
            _.NA["lilypad_4.svg"],
            _.NA["lilypad_5.svg"],
            _.NA["lilypad_6.svg"],
            _.NA["lilypad_7.svg"],
            _.NA["lilypad_8.svg"],
            _.NA["lilypad_9.svg"],
            _.NA["lilypad_10.svg"],
            _.NA["lilypad_11.svg"],
            _.NA["lilypad_12.svg"],
            _.NA["lilypad_13.svg"],
            _.NA["lilypad_14.svg"],
            _.NA["lilypad_15.svg"],
        ],
        uta = [
            _.NA["lilypad_pegman_0.svg"],
            _.NA["lilypad_pegman_1.svg"],
            _.NA["lilypad_pegman_2.svg"],
            _.NA["lilypad_pegman_3.svg"],
            _.NA["lilypad_pegman_4.svg"],
            _.NA["lilypad_pegman_5.svg"],
            _.NA["lilypad_pegman_6.svg"],
            _.NA["lilypad_pegman_7.svg"],
            _.NA["lilypad_pegman_8.svg"],
            _.NA["lilypad_pegman_9.svg"],
            _.NA["lilypad_pegman_10.svg"],
            _.NA["lilypad_pegman_11.svg"],
            _.NA["lilypad_pegman_12.svg"],
            _.NA["lilypad_pegman_13.svg"],
            _.NA["lilypad_pegman_14.svg"],
            _.NA["lilypad_pegman_15.svg"],
        ];
    _.B(HD, _.J);
    _.n = HD.prototype;
    _.n.mode_changed = function () {
        vta(this);
        wta(this);
    };
    _.n.heading_changed = function () {
        7 == this.i() && vta(this);
    };
    _.n.position_changed = function () {
        var a = this.i();
        if (5 == a || 6 == a || 3 == a || 4 == a)
            if (this.get("position")) {
                this.V.setVisible(!0);
                this.$.setVisible(!1);
                a = this.set;
                var b = tta(this);
                this.N != b && ((this.N = b), (this.H = { url: lua[b], scaledSize: new _.Tg(49, 52), anchor: new _.M(25, 35) }));
                a.call(this, "lilypadIcon", this.H);
            } else (a = this.i()), 5 == a ? this.g(6) : 3 == a && this.g(4);
        else (b = this.get("position")) && 1 == a && this.g(7), this.set("dragPosition", b);
    };
    _.n.Xt = function (a) {
        this.set("dragging", !0);
        this.g(5);
        this.o = a.pixel.x;
    };
    _.n.Yt = function (a) {
        var b = this;
        a = a.pixel.x;
        a > b.o + 5 ? (this.g(5), (b.o = a)) : a < b.o - 5 && (this.g(3), (b.o = a));
        wta(this);
        window.clearTimeout(b.j);
        b.j = window.setTimeout(function () {
            _.I.trigger(b, "hover");
            b.j = 0;
        }, 300);
    };
    _.n.Wt = function () {
        this.set("dragging", !1);
        this.g(1);
        window.clearTimeout(this.j);
        this.j = 0;
    };
    _.D(ID, _.J);
    _.n = ID.prototype;
    _.n.mode_changed = function () {
        var a = _.RA(this.Zt());
        a != this.o && (a ? Ata(this) : zta(this));
    };
    _.n.tilt_changed = ID.prototype.heading_changed = function () {
        this.o && (zta(this), Ata(this));
    };
    _.n.Or = function (a) {
        var b = this,
            c = this.get("dragPosition"),
            d = this.g.getZoom(),
            e = Math.max(50, 35 * Math.pow(2, 16 - d));
        this.set("hover", a);
        this.N = !1;
        _.Pf("streetview").then(function (f) {
            var g = b.na || void 0;
            b.j || ((b.j = new f.hu(g)), b.j.bindTo("result", b, null, !0));
            b.j.getPanoramaByLocation(c, e, g ? void 0 : 100 > e ? "nearest" : "best");
        });
    };
    _.n.result_changed = function () {
        var a = this.get("result"),
            b = a && a.location;
        this.set("position", b && b.latLng);
        this.set("description", b && b.shortDescription);
        this.set("panoId", b && b.pano);
        this.N ? this.nn(1) : this.get("hover") || this.set("panoramaVisible", !!a);
    };
    _.n.panoramaVisible_changed = function () {
        this.N = 0 == this.get("panoramaVisible");
        var a = this.get("panoramaVisible"),
            b = this.get("hover");
        a || b || this.nn(1);
        a && this.notify("position");
    };
    _.n.Zt = _.Cg("mode");
    _.n.nn = _.Dg("mode");
    var Bta = _.rl(
        _.Qc(
            ".LGLeeN-keyboard-shortcuts-view{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.LGLeeN-keyboard-shortcuts-view table,.LGLeeN-keyboard-shortcuts-view tbody,.LGLeeN-keyboard-shortcuts-view td,.LGLeeN-keyboard-shortcuts-view tr{background:inherit;border:none;margin:0;padding:0}.LGLeeN-keyboard-shortcuts-view td{color:#000;padding:6px;vertical-align:middle;white-space:nowrap}.LGLeeN-keyboard-shortcuts-view td .VdnQmO-keyboard-shortcuts-view--shortcut-key{background-color:#e8eaed;border-radius:2px;-moz-box-sizing:border-box;box-sizing:border-box;display:inline-block;min-height:20px;min-width:20px;padding:2px 4px;position:relative;text-align:center}.LGLeeN-keyboard-shortcuts-view td .VdnQmO-keyboard-shortcuts-view--shortcut-key kbd{background:inherit;border-radius:0;border:none;color:inherit;font-family:Google Sans Text,Roboto,Arial,sans-serif;line-height:16px;margin:0;padding:0}\n"
        )
    );
    _.B(KD, _.Xg);
    KD.prototype.g = function (a) {
        for (var b = [], c = 0; c < arguments.length; ++c) b[c - 0] = arguments[c];
        c = document.createElement("td");
        c.style.textAlign = _.Ur.Tc() ? "left" : "right";
        b = _.A(b);
        for (var d = b.next(); !d.done; d = b.next()) {
            d = d.value;
            var e = document.createElement("div"),
                f = document.createElement("kbd");
            rC(e, "keyboard-shortcuts-view--shortcut-key");
            switch (d) {
                case 37:
                    f.textContent = "\u2190";
                    f.setAttribute("aria-label", "M\u0169i t\u00ean tr\u00e1i");
                    break;
                case 39:
                    f.textContent = "\u2192";
                    f.setAttribute("aria-label", "M\u0169i t\u00ean ph\u1ea3i");
                    break;
                case 38:
                    f.textContent = "\u2191";
                    f.setAttribute("aria-label", "M\u0169i t\u00ean l\u00ean");
                    break;
                case 40:
                    f.textContent = "\u2193";
                    f.setAttribute("aria-label", "M\u0169i t\u00ean xu\u1ed1ng");
                    break;
                case 36:
                    f.textContent = "Di chuy\u1ec3n l\u00ean tr\u00ean";
                    break;
                case 35:
                    f.textContent = "Di chuy\u1ec3n xu\u1ed1ng d\u01b0\u1edbi";
                    break;
                case 33:
                    f.textContent = "Di chuy\u1ec3n l\u00ean";
                    break;
                case 34:
                    f.textContent = "Di chuy\u1ec3n xu\u1ed1ng";
                    break;
                case 107:
                    f.textContent = "+";
                    break;
                case 109:
                    f.textContent = "-";
                    break;
                default:
                    continue;
            }
            e.appendChild(f);
            c.appendChild(e);
        }
        return c;
    };
    _.B(LD, _.J);
    _.n = LD.prototype;
    _.n.disableDefaultUI_changed = function () {
        Sta(this);
    };
    _.n.size_changed = function () {
        Sta(this);
    };
    _.n.mapTypeId_changed = function () {
        MD(this) != this.Oa && ((this.j[1] = !0), _.Ei(this.ob));
        this.na && this.na.setMapTypeId(this.get("mapTypeId"));
    };
    _.n.mapTypeControl_changed = function () {
        this.j[0] = !0;
        _.Ei(this.ob);
    };
    _.n.mapTypeControlOptions_changed = function () {
        this.j[0] = !0;
        _.Ei(this.ob);
    };
    _.n.fullscreenControlOptions_changed = function () {
        this.j[3] = !0;
        _.Ei(this.ob);
    };
    _.n.scaleControl_changed = function () {
        this.j[2] = !0;
        _.Ei(this.ob);
    };
    _.n.scaleControlOptions_changed = function () {
        this.j[2] = !0;
        _.Ei(this.ob);
    };
    _.n.keyboardShortcuts_changed = function () {
        var a = !!this.Ca.We.parentElement,
            b;
        (b = !this.g) || ((b = this.g), (b = !(void 0 === b.get("keyboardShortcuts") || b.get("keyboardShortcuts"))));
        (b = !b) && !a
            ? ((a = this.Ca.We), this.i.addElement(this.$.g.We, 12, !0, -999), this.wa.insertBefore(a, this.wa.children[0]), this.$.set("keyboardShortcutsShown", !0))
            : !b && a && ((a = this.Ca.We), this.i.Jg(this.$.g.We), this.wa.removeChild(a), this.$.set("keyboardShortcutsShown", !1));
    };
    _.n.panControl_changed = function () {
        OD(this);
    };
    _.n.panControlOptions_changed = function () {
        OD(this);
    };
    _.n.rotateControl_changed = function () {
        OD(this);
    };
    _.n.rotateControlOptions_changed = function () {
        OD(this);
    };
    _.n.streetViewControl_changed = function () {
        OD(this);
    };
    _.n.streetViewControlOptions_changed = function () {
        OD(this);
    };
    _.n.zoomControl_changed = function () {
        OD(this);
    };
    _.n.zoomControlOptions_changed = function () {
        OD(this);
    };
    _.n.myLocationControl_changed = function () {
        OD(this);
    };
    _.n.myLocationControlOptions_changed = function () {
        OD(this);
    };
    _.n.streetView_changed = function () {
        bua(this);
    };
    _.n.Xs = function (a) {
        this.get("panoramaVisible") != a && this.set("panoramaVisible", a);
    };
    _.n.panoramaVisible_changed = function () {
        var a = this.get("streetView");
        a && a.g.set(!!this.get("panoramaVisible"));
    };
    var mua = [37, 38, 39, 40],
        nua = [38, 40],
        oua = [37, 39],
        pua = { 38: [0, -1], 40: [0, 1], 37: [-1, 0], 39: [1, 0] },
        qua = { 38: [0, 1], 40: [0, -1], 37: [-1, 0], 39: [1, 0] };
    var SD = Object.freeze([].concat(_.oa(nua), _.oa(oua)));
    _.B(PD, _.J);
    _.n = PD.prototype;
    _.n.Uv = function (a) {
        if (gua(this, a)) return !0;
        var b = !1;
        switch (a.keyCode) {
            case 38:
            case 40:
            case 37:
            case 39:
                b = a.shiftKey && 0 <= oua.indexOf(a.keyCode) && this.$ && !this.i;
                (a.shiftKey && 0 <= nua.indexOf(a.keyCode) && this.ha && !this.i) || b
                    ? ((this.O[a.keyCode] = !0), this.j || ((this.T = 0), (this.g = 1), this.Wq()))
                    : this.j || ((this.H[a.keyCode] = 1), this.i || ((this.o = new _.SA(100)), this.Vq()));
                b = !0;
                break;
            case 34:
                QD(this, 0, 0.75);
                b = !0;
                break;
            case 33:
                QD(this, 0, -0.75);
                b = !0;
                break;
            case 36:
                QD(this, -0.75, 0);
                b = !0;
                break;
            case 35:
                QD(this, 0.75, 0);
                b = !0;
                break;
            case 187:
            case 107:
                eua(this);
                b = !0;
                break;
            case 189:
            case 109:
                fua(this), (b = !0);
        }
        switch (a.which) {
            case 61:
            case 43:
                eua(this);
                b = !0;
                break;
            case 45:
            case 95:
            case 173:
                fua(this), (b = !0);
        }
        b && (_.Tf(a), _.Uf(a));
        return !b;
    };
    _.n.Mu = function (a) {
        if (gua(this, a)) return !0;
        switch (a.keyCode) {
            case 38:
            case 40:
            case 37:
            case 39:
            case 34:
            case 33:
            case 36:
            case 35:
            case 187:
            case 107:
            case 189:
            case 109:
                return _.Tf(a), _.Uf(a), !1;
        }
        switch (a.which) {
            case 61:
            case 43:
            case 45:
            case 95:
            case 173:
                return _.Tf(a), _.Uf(a), !1;
        }
        return !0;
    };
    _.n.iy = function (a) {
        var b = !1;
        switch (a.keyCode) {
            case 38:
            case 40:
            case 37:
            case 39:
                (this.H[a.keyCode] = null), (this.O[a.keyCode] = !1), (b = !0);
        }
        return !b;
    };
    _.n.Vq = function () {
        for (var a = 0, b = 0, c = !1, d = _.A(mua), e = d.next(); !e.done; e = d.next()) (e = e.value), this.H[e] && ((e = _.A(pua[e])), (c = e.next().value), (e = e.next().value), (a += c), (b += e), (c = !0));
        c
            ? ((c = 1), _.TA(this.o) && (c = this.o.next()), (d = Math.round(35 * c * a)), (c = Math.round(35 * c * b)), 0 === d && (d = a), 0 === c && (c = b), _.I.trigger(this, "panbynow", d, c, 1), (this.i = _.Ot(this, this.Vq, 10)))
            : (this.i = 0);
    };
    _.n.Wq = function () {
        for (var a = 0, b = 0, c = !1, d = 0; d < SD.length; d++) this.O[SD[d]] && ((c = qua[SD[d]]), (a += c[0]), (b += c[1]), (c = !0));
        c
            ? (_.I.trigger(this, "tiltrotatebynow", this.g * a, this.g * b), (this.j = _.Ot(this, this.Wq, 10)), (this.g = Math.min(1.8, this.g + 0.01)), this.T++, (this.V = { x: a, y: b }))
            : ((this.j = 0), (this.N = new _.SA(Math.min(Math.round(this.T / 2), 35), 1)), _.Ot(this, this.Xq, 10));
    };
    _.n.Xq = function () {
        if (!this.j && !this.i && _.TA(this.N)) {
            var a = this.V,
                b = a.x;
            a = a.y;
            var c = this.N.next();
            _.I.trigger(this, "tiltrotatebynow", this.g * c * b, this.g * c * a);
            _.Ot(this, this.Xq, 10);
        }
    };
    RD.prototype.Rs = function (a, b) {
        a = _.$ra(a, b).style;
        a.border = "1px solid rgba(0,0,0,0.12)";
        a.borderRadius = "5px";
        a.left = "50%";
        a.maxWidth = "375px";
        a.msTransform = "translateX(-50%)";
        a.position = "absolute";
        a.transform = "translateX(-50%)";
        a.width = "calc(100% - 10px)";
        a.zIndex = "1";
    };
    RD.prototype.bp = function (a) {
        if ((_.ei[43] ? 0 : _.Li()) && !a.__gm_bbsp) {
            a.__gm_bbsp = !0;
            var b = new _.Xm((_.qe(_.Fe(_.Ge), 15) ? "http://" : "https://") + "developers.google.com/maps/documentation/javascript/error-messages#unsupported-browsers");
            new Fsa(a, b);
        }
    };
    _.Qf("controls", new RD());
});
