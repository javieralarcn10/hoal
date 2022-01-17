var splitbee = (function(exports) {
    "use strict";
    var __assign = function() {
        return (__assign =
            Object.assign ||
            function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var a in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e;
            }).apply(this, arguments);
    };

    function __awaiter(e, t, n, r) {
        return new(n || (n = Promise))(function(a, o) {
            function i(e) {
                try {
                    c(r.next(e));
                } catch (e) {
                    o(e);
                }
            }

            function s(e) {
                try {
                    c(r.throw(e));
                } catch (e) {
                    o(e);
                }
            }

            function c(e) {
                e.done ?
                    a(e.value) :
                    new n(function(t) {
                        t(e.value);
                    }).then(i, s);
            }
            c((r = r.apply(e, t || [])).next());
        });
    }

    function __generator(e, t) {
        var n,
            r,
            a,
            o,
            i = {
                label: 0,
                sent: function() {
                    if (1 & a[0]) throw a[1];
                    return a[1];
                },
                trys: [],
                ops: [],
            };
        return (
            (o = { next: s(0), throw: s(1), return: s(2) }),
            "function" == typeof Symbol &&
            (o[Symbol.iterator] = function() {
                return this;
            }),
            o
        );

        function s(o) {
            return function(s) {
                return (function(o) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; i;)
                        try {
                            if (((n = 1), r && (a = 2 & o[0] ? r.return : o[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, o[1])).done)) return a;
                            switch (((r = 0), a && (o = [2 & o[0], a.value]), o[0])) {
                                case 0:
                                case 1:
                                    a = o;
                                    break;
                                case 4:
                                    return i.label++, { value: o[1], done: !1 };
                                case 5:
                                    i.label++, (r = o[1]), (o = [0]);
                                    continue;
                                case 7:
                                    (o = i.ops.pop()), i.trys.pop();
                                    continue;
                                default:
                                    if (!(a = (a = i.trys).length > 0 && a[a.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        i = 0;
                                        continue;
                                    }
                                    if (3 === o[0] && (!a || (o[1] > a[0] && o[1] < a[3]))) {
                                        i.label = o[1];
                                        break;
                                    }
                                    if (6 === o[0] && i.label < a[1]) {
                                        (i.label = a[1]), (a = o);
                                        break;
                                    }
                                    if (a && i.label < a[2]) {
                                        (i.label = a[2]), i.ops.push(o);
                                        break;
                                    }
                                    a[2] && i.ops.pop(), i.trys.pop();
                                    continue;
                            }
                            o = t.call(e, i);
                        } catch (e) {
                            (o = [6, e]), (r = 0);
                        } finally {
                            n = a = 0;
                        }
                    if (5 & o[0]) throw o[1];
                    return { value: o[0] ? o[1] : void 0, done: !0 };
                })([o, s]);
            };
        }
    }
    var is404Page = function() {
            return __awaiter(void 0, void 0, void 0, function() {
                return __generator(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return /[^0-9.,]404[^0-9.,]/.test(document.documentElement.innerHTML) ? [
                                4,
                                fetch(window.location.href, { method: "head" })
                                .then(function(e) {
                                    return e.status;
                                })
                                .catch(function() {}),
                            ] : [2, 0];
                        case 1:
                            return [2, 404 === e.sent() ? 1 : 0];
                    }
                });
            });
        },
        referrerSent = !1,
        userIdKey = "_userId",
        setUserId = function(e) {
            return setStorageSafe(userIdKey, e);
        },
        getUserId = function() {
            return getStorageSafe(userIdKey);
        },
        removeUserId = function() {
            return removeStorageSafe(userIdKey);
        },
        request = function(e) {
            var t = e.path,
                n = e.body,
                r = e.setReferrer;
            return __awaiter(void 0, void 0, Promise, function() {
                var e, a, o, i, s, c, d;
                return __generator(this, function(u) {
                    switch (u.label) {
                        case 0:
                            if (shouldNotTrack || splitbeeDnt) return [2, { response: void 0 }];
                            (e = getUserCookie()), (a = getUserId()), (o = document.referrer), (i = 0 === o.indexOf(location.protocol + "//" + location.host) ? void 0 : o), (u.label = 1);
                        case 1:
                            return (
                                u.trys.push([1, 4, , 5]), [
                                    4,
                                    fetch(ENDPOINT + t, {
                                        method: "POST",
                                        credentials: "include",
                                        headers: __assign(__assign(__assign(__assign(__assign({ "Content-Type": "application/json" }, e && { uid: e }), a && { userId: a }), sbp && { sbp: sbp }), isNoCookie && { "no-cookie": "1" }), {
                                            "context-id": getContextId(),
                                            "x-origin": document.location.href,
                                        }),
                                        body: JSON.stringify(__assign(__assign({}, n), i && !referrerSent && r && { referrer: i })),
                                    }),
                                ]
                            );
                        case 2:
                            return (s = u.sent()), i && (referrerSent = !0), [4, s.json()];
                        case 3:
                            return (c = u.sent()), (d = s.headers.get("uid")), setTempUid(d), d && !isNoCookie && setUserCookie(d), [2, { response: c || {}, statusCode: s.status }];
                        case 4:
                            return u.sent(), [2, { response: void 0, statusCode: 404 }];
                        case 5:
                            return [2];
                    }
                });
            });
        },
        sendBeacon = function(e) {
            return __awaiter(void 0, void 0, void 0, function() {
                return __generator(this, function(t) {
                    try {
                        navigator && navigator.sendBeacon && !splitbeeDnt && navigator.sendBeacon(ENDPOINT + "/end", JSON.stringify(__assign(__assign({}, e), { headers: __assign({}, sbp && { sbp: sbp }) })));
                    } catch (e) {}
                    return [2];
                });
            });
        },
        genId = function() {
            return (Math.random() + "").replace("0.", "");
        },
        is404 = 0,
        alreadySend = !1;
    window.sbCtx = window.sbCtx || genId();
    var newReqId = function() {
            (alreadySend = !1),
            (window.sbCtx = genId()),
            is404Page().then(function(e) {
                e && (sendEnd(getBeaconData()), (alreadySend = !0));
            });
        },
        getContextId = function() {
            return window.sbCtx;
        },
        pause = !1,
        secondsActive = 0,
        idleS = 0;
    setInterval(function() {
        pause || ((secondsActive += 1), (idleS += 1) >= 30 && (pause = !0));
    }, 1e3);
    var resetIdle = function() {
            idleS = 0;
        },
        setInactive = function() {
            pause = !0;
        },
        setActive = function() {
            (pause = !1), (idleS = 0);
        },
        resetTime = function() {
            secondsActive = 0;
        };
    window.addEventListener("blur", setInactive),
        window.addEventListener("focus", setActive), ["mousemove", "scroll"].forEach(function(e) {
            return document.addEventListener(e, resetIdle);
        });
    var getBeaconData = function(e) {
            var t,
                n = document.activeElement;
            if (n) {
                var r = n.href;
                if (r) {
                    var a = new URL(r);
                    window.location.hostname !== a.hostname && (t = r);
                }
            }
            return { uid: getUserCookie(), userId: getUserId(), contextId: getContextId(), origin: document.location.href, is404: is404, data: { duration: secondsActive, destination: t } };
        },
        sendEnd = function(e) {
            alreadySend || sendBeacon(e);
        };
    window.addEventListener("beforeunload", function(e) {
        return sendEnd(getBeaconData());
    });
    var cs = document.currentScript,
        dataset = cs.dataset,
        splitbeeToken = dataset.token,
        deprecatedId = dataset.splitbeeid,
        sbp = splitbeeToken || deprecatedId,
        doNotTrack = "1" === window.doNotTrack || "1" === navigator.doNotTrack,
        respectDnt = dataset.respectDnt,
        shouldNotTrack = doNotTrack && respectDnt,
        isDefer = cs.defer || cs.async,
        removeTrailingSlash = function(e) {
            return e.replace(/\/$/, "");
        },
        isNoCookie = void 0 !== dataset.noCookie,
        enableCookie = function(e) {
            setUserCookie(e ? genUid() : tempUid), (isNoCookie = !1), newReqId();
        },
        customApi = dataset.api,
        apiFromScript = cs.src.includes("splitbee.io") ? void 0 : new URL(cs.src).origin,
        tempUid,
        setTempUid = function(e) {
            tempUid = e;
        },
        setStorageSafe = function(e, t) {
            try {
                localStorage.setItem(e, t);
            } catch (e) {}
        },
        getStorageSafe = function(e) {
            try {
                return localStorage.getItem(e);
            } catch (e) {}
        },
        removeStorageSafe = function(e) {
            try {
                localStorage.removeItem(e);
            } catch (e) {}
        },
        dntKey = "splitbee-dnt";
    "?dnt" === document.location.search && setStorageSafe(dntKey, "1");
    var splitbeeDnt = "1" === getStorageSafe(dntKey),
        genUid = function() {
            return Math.random().toString(36).substring(2, 15);
        },
        domain = "splitbee.io",
        ENDPOINT = customApi || apiFromScript || "https://hive." + domain,
        sbKey = "sb_uid",
        sbKeyWithProject = sbKey + (sbp ? "_" + sbp : ""),
        crossDomain = !!sbp,
        setUserCookie = function(e) {
            if (e) {
                var t = window.location.hostname,
                    n = t.match(/\w*\.\w*$/gi),
                    r = crossDomain && n ? n[0] : t,
                    a = new Date();
                a.setTime(a.getTime() + 15768e7);
                var o = "expires=" + a.toUTCString();
                document.cookie = sbKeyWithProject + "=" + e + ";path=/;SameSite=Lax;" + o + (crossDomain ? ";domain=" + r : "");
            }
        },
        getUserCookie = function() {
            var e = document.cookie
                .split(/; */)
                .map(function(e) {
                    var t = e.split("="),
                        n = t[0],
                        r = t.slice(1);
                    return { key: n, val: decodeURIComponent(r.join("=")) };
                })
                .find(function(e) {
                    return e.key === sbKey || e.key === sbKeyWithProject;
                });
            if (!e && !isNoCookie) {
                var t = genUid();
                return setUserCookie(t), t;
            }
            return e ? e.val : void 0;
        },
        applyChanges = function(changes) {
            changes.forEach(function(r) {
                document.querySelectorAll(r.selector).forEach(function(e) {
                    r.attributes.forEach(function(attr) {
                        "onclick" === attr.key ?
                            e.addEventListener("click", function() {
                                eval(attr.value);
                            }) :
                            "class" === attr.key ?
                            e.classList.add(attr.value) :
                            (e[attr.key] = attr.value);
                    });
                });
            });
        },
        removeHidden = function() {
            var e = document.querySelector("#estyle");
            e && e.remove();
        },
        isRedirect = function(e) {
            return "redirect" === e.type;
        },
        to,
        isAnchorElement = function(e) {
            return "a" === e.tagName.toLowerCase();
        },
        serializeForm = function(e) {
            for (var t, n = {}, r = e.elements, a = 0; a < r.length; a++) {
                var o = r[a],
                    i = o.dataset.splitbeeProperty;
                if (i) t || (t = {}), (t["true" === i ? o.name : i] = o.value);
                ["password"].includes(o.type) || "" === o.value || "" === o.name || (n[o.name] = o.value);
            }
            return { data: n, user: t };
        },
        blankEvent = "_blank",
        addListener = function(e, t, n) {
            "FORM" === e.tagName ?
                (e.onsubmit = function(n) {
                    return __awaiter(void 0, void 0, void 0, function() {
                        var n;
                        return __generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return (n = serializeForm(e)), [4, track(t, n.data)];
                                case 1:
                                    return r.sent(), n.user && user.set(n.user), [2];
                            }
                        });
                    });
                }) :
                e.addEventListener("click", function(r) {
                    return __awaiter(this, void 0, void 0, function() {
                        return __generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return isAnchorElement(e) ? (r.preventDefault(), e.getAttribute("target") === blankEvent || r.metaKey ? (window.open(e.href, blankEvent), track(t, n), [3, 3]) : [3, 1]) : [3, 4];
                                case 1:
                                    return [4, track(t, n)];
                                case 2:
                                    a.sent(), (location.href = e.href), (a.label = 3);
                                case 3:
                                    return [3, 5];
                                case 4:
                                    track(t, n), (a.label = 5);
                                case 5:
                                    return [2];
                            }
                        });
                    });
                });
        },
        addEventTracking = function(e) {
            e &&
                e.forEach(function(e) {
                    var t = setInterval(function() {
                        var n = document.querySelectorAll(e.selector);
                        0 !== n.length &&
                            (n.forEach(function(t) {
                                    addListener(t, e.event);
                                }),
                                clearInterval(t));
                    }, 1e3);
                });
        },
        domChanges = [],
        trackingEvents = [],
        afterLoaded = function() {
            applyChanges(domChanges), addEventTracking(trackingEvents);
        };
    document.addEventListener("DOMContentLoaded", afterLoaded);
    var initSplitbee = function(e) {
            return __awaiter(void 0, void 0, void 0, function() {
                var t, n, r, a, o;
                return __generator(this, function(i) {
                    switch (i.label) {
                        case 0:
                            isDefer || (document.head.insertAdjacentHTML("afterbegin", '<style id="estyle">body{opacity:0;overflow:hidden;}</style>'), (to = setTimeout(removeHidden, 500))), newReqId(), (i.label = 1);
                        case 1:
                            return i.trys.push([1, 3, , 4]), [4, request({ path: "/i", setReferrer: !0, body: __assign({ origin: window.location.href }, e && { eid: e }) })];
                        case 2:
                            if (((t = i.sent()), (n = t.response), (r = t.statusCode), to && clearTimeout(to), !n)) return [2];
                            if ((n.actions && (trackingEvents = n.actions), "redirect" === (a = n.type) && isRedirect(n) && n.changes.url)) {
                                if ((o = window.origin + n.changes.url) && "" !== o && removeTrailingSlash(o) !== removeTrailingSlash(window.location.href) && 200 === r) return window.location.replace(o), [2];
                                removeHidden();
                            }
                            return (
                                removeHidden(),
                                "changes" === a &&
                                n &&
                                !isRedirect(n) &&
                                ((domChanges = n.changes),
                                    applyChanges(n.changes),
                                    setInterval(function() {
                                        applyChanges(n.changes);
                                    }, 500)), [3, 4]
                            );
                        case 3:
                            return i.sent(), removeHidden(), [3, 4];
                        case 4:
                            return addEventTracking(trackingEvents), [2];
                    }
                });
            });
        },
        trackedElements = new WeakMap(),
        k = "data-splitbee-event",
        datasetKey = "splitbeeEvent",
        autoTrack = function() {
            [].slice.call(document.querySelectorAll("[" + k + "]")).forEach(function(e) {
                if (!trackedElements.has(e)) {
                    var t = {},
                        n = Object.keys(e.dataset);
                    n.length > 0 ?
                        n.forEach(function(n) {
                            if (n !== datasetKey) {
                                var r = e.dataset[n],
                                    a = n.replace(datasetKey, "");
                                (a = a[0].toLocaleLowerCase() + a.slice(1)), r && t && (t[a] = r);
                            }
                        }) :
                        (t = void 0),
                        trackedElements.set(e, !0),
                        addListener(e, e.dataset[datasetKey], t);
                }
            });
        },
        track = function(e, t) {
            return request({ path: "/t", body: { event: e, data: t } });
        },
        user = {
            set: function(e) {
                var t = e.id,
                    n = e.email,
                    r = e.userId || t || n;
                r && !getUserId() && setUserId(r), request({ path: "/user", body: e });
            },
        };
    if (!window.splitbeeLoaded) {
        initSplitbee();
        var pushState = history.pushState;
        (history.pushState = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            var n = e[2],
                r = "string" == typeof n ? window.location.pathname != n.split("?")[0] : n && window.location.href !== n.href,
                a = getBeaconData();
            pushState.apply(history, e), r && sendEnd(a), r && (initSplitbee(), resetTime());
        }),
        window.addEventListener("popstate", function() {
                sendEnd(getBeaconData()), initSplitbee(), resetTime();
            }),
            setInterval(autoTrack, 500),
            (window.splitbeeLoaded = !0);
    }
    var init = initSplitbee,
        reset = function() {
            removeUserId(), setUserCookie(genUid()), newReqId();
        },
        enableCookie$1 = enableCookie;
    return (exports.enableCookie = enableCookie$1), (exports.init = init), (exports.reset = reset), (exports.track = track), (exports.user = user), exports;
})({});