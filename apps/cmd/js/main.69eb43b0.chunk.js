(this["webpackJsonpwowpricebot-web2"] = this["webpackJsonpwowpricebot-web2"] || []).push([[0], { 13: function (e, a, t) { }, 14: function (e, a, t) { }, 17: function (e, a, t) { "use strict"; t.r(a); var l = t(0), n = t.n(l), r = t(6), c = t.n(r), o = (t(13), t(1)), s = t(3), m = (t(14), t(7)), i = n.a.createElement("svg", { className: "bi bi-star-fill", width: "1em", height: "1em", viewBox: "0 0 16 16", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg" }, n.a.createElement("path", { d: "M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" })), d = n.a.createElement("svg", { className: "bi bi-arrow-down", width: "1em", height: "1em", viewBox: "0 0 16 16", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg" }, n.a.createElement("path", { "fill-rule": "evenodd", d: "M4.646 9.646a.5.5 0 01.708 0L8 12.293l2.646-2.647a.5.5 0 01.708.708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 010-.708z", "clip-rule": "evenodd" }), n.a.createElement("path", { "fill-rule": "evenodd", d: "M8 2.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V3a.5.5 0 01.5-.5z", "clip-rule": "evenodd" })), u = n.a.createElement("svg", { className: "bi bi-arrow-up", width: "1em", height: "1em", viewBox: "0 0 16 16", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg" }, n.a.createElement("path", { "fill-rule": "evenodd", d: "M8 3.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V4a.5.5 0 01.5-.5z", "clip-rule": "evenodd" }), n.a.createElement("path", { "fill-rule": "evenodd", d: "M7.646 2.646a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L8 3.707 5.354 6.354a.5.5 0 11-.708-.708l3-3z", "clip-rule": "evenodd" })), p = ["all", "price", "alarms", "config", "premium"], g = [{ cmd: "price", shortDesc: "Lets you check auction house price of an item", color: "#7FFFD4", tags: ["price"], syntax: ["price", "item name"], example: "price black lotus" }, { cmd: "stackprice", shortDesc: "Lets you check auction house price for for a whole stack of an item", color: "#7FFFD4", tags: ["stackprice"], syntax: ["stackprice", "item name"], example: "stackprice dreamfoil" }, { cmd: "craftprice", shortDesc: "Check crafting reagent prices and profitability", color: "#FFD47F", tags: ["price"], syntax: ["craftprice", "item name"], example: "craftprice elixir of the mongoose" }, { cmd: "enchantprice", shortDesc: "Check enchant material prices and total cost", color: "#428CFF", tags: ["price", "premium"], syntax: ["enchantprice", "spell/enchant name"], example: "enchantprice Enchant Weapon - Spell Power" }, { cmd: "transmute", shortDesc: "Check transmute prices and profitability", color: "#0D9981", tags: ["price", "premium"], syntax: ["transmute", "spell/transmute name"], example: "transmute Transmute: Elemental Fire" }, { cmd: "alarm-add", shortDesc: "Watch for price changes for an item on AH", tags: ["premium", "alarms"], syntax: ["alarm-add", "item name", "gt | lt", "amount in gold | amount in %", "quantity (optional)"], example: n.a.createElement(n.a.Fragment, null, n.a.createElement("p", null, "Note: Lt = Less than, gt = Greater than", n.a.createElement("br", null), "Due to the complexity of this command, here are multiple example usage cases:"), n.a.createElement("ul", null, n.a.createElement("li", null, n.a.createElement("span", { style: { fontWeight: "bold" } }, "alarm-add black lotus gt 200g 1"), n.a.createElement("ul", null, n.a.createElement("li", null, "Notify when (at least 1) black lotus is ", n.a.createElement("strong", null, "g"), "reater ", n.a.createElement("strong", null, "t"), "han (gt) 200g")), " "), n.a.createElement("li", null, n.a.createElement("span", { style: { fontWeight: "bold" } }, "alarm-add black lotus gt 180g 5"), n.a.createElement("ul", null, n.a.createElement("li", null, "Notify when (at least 5) black lotus is ", n.a.createElement("strong", null, "g"), "reater ", n.a.createElement("strong", null, "t"), "han (gt) 180g")), " "), n.a.createElement("li", null, n.a.createElement("span", { style: { fontWeight: "bold" } }, "alarm-add black lotus lt 150g"), n.a.createElement("ul", null, n.a.createElement("li", null, "Notify when (at least 1) black lotus is ", n.a.createElement("strong", null, "l"), "ess ", n.a.createElement("strong", null, "t"), "han (lt) 150g")), " "), n.a.createElement("li", null, n.a.createElement("span", { style: { fontWeight: "bold" } }, "alarm-add Bloodvine gt 20%"), n.a.createElement("ul", null, n.a.createElement("li", null, "Notify when (at least 1) Bloodvine is ", n.a.createElement("strong", null, "g"), "reater ", n.a.createElement("strong", null, "t"), "han (gt) current price + 20%")), " "), n.a.createElement("li", null, n.a.createElement("span", { style: { fontWeight: "bold" } }, "alarm-add Bloodvine lt 10%"), n.a.createElement("ul", null, n.a.createElement("li", null, "Notify when (at least 1) Bloodvine is ", n.a.createElement("strong", null, "l"), "ess ", n.a.createElement("strong", null, "t"), "han (lt) current price - 10%")), " "))) }, { cmd: "alarm-list", shortDesc: "List all active alarms / price triggers", tags: ["premium", "alarms"], syntax: ["alarm-list"], example: "alarm-list" }, { cmd: "alarm-remove", shortDesc: "Remove an alarm", tags: ["premium", "alarms"], syntax: ["alarm-remove", "id"], example: "alarm-remove 17" }, { cmd: "wowpricebot-serversetup", shortDesc: "Configure your server to use WoWPriceBot", tags: ["config"], syntax: ["wowpricebot-serversetup", "realmname-faction", "channel (optional)"], example: n.a.createElement("ul", null, n.a.createElement("li", null, "wowpricebot-serversetup noggenfogger-alliance"), n.a.createElement("li", null, "wowpricebot-serversetup mirage-raceway-horde"), n.a.createElement("li", null, "wowpricebot-serversetup noggenfogger-horde *"), n.a.createElement("li", null, "wowpricebot-serversetup noggenfogger-horde ah-bot-channel")) }, { cmd: "wowpricebot-channel-list", shortDesc: "List current configured channels (advanced)", tags: ["config"], syntax: ["wowpricebot-channel-list"], example: "wowpricebot-channel-list" }, { cmd: "wowpricebot-channel-add", shortDesc: "Add override for a specific channel (advanced)", tags: ["config"], syntax: ["wowpricebot-channel-add", "realmname-faction", "channel-name"], example: n.a.createElement("ul", null, n.a.createElement("li", null, "wowpricebot-channel-add firemaw-horde chat-horde"), n.a.createElement("li", null, "wowpricebot-channel-add firemaw-alliance chat-alliance")) }, { cmd: "wowpricebot-channel-remove", shortDesc: "Remove override for a specific channel (advanced)", tags: ["config"], syntax: ["wowpricebot-channel-remove", "channel name"], example: "wowpricebot-channel-remove chat-horde" }, { cmd: "wowpricebot-language", shortDesc: "Switch the bot language", tags: ["config"], syntax: ["wowpricebot-language", "language code"], example: n.a.createElement("ul", null, n.a.createElement("li", null, "wowpricebot-language de", n.a.createElement("ul", null, n.a.createElement("li", null, "Supported languages: en, ru, de, fr, zh, es")))) }], h = function (e) { var a, t = Object(l.useState)(!1), r = Object(s.a)(t, 2), c = r[0], p = r[1], g = [], h = Object(o.a)(e.cmd.syntax.slice(1)); try { for (h.s(); !(a = h.n()).done;) { var E = a.value; g.push(n.a.createElement(n.a.Fragment, null, n.a.createElement("span", null, " "), n.a.createElement("span", { style: { color: "#08596E" } }, "[", E, "]"))) } } catch (w) { h.e(w) } finally { h.f() } return n.a.createElement("div", { className: "card cmdBlock" }, n.a.createElement("div", { className: "card-body" }, n.a.createElement("div", { className: "cmd-heading", onClick: function () { return p(!c) } }, n.a.createElement("div", { className: "row" }, n.a.createElement("div", { className: "col-sm-10 col-md-11" }, n.a.createElement("h5", { className: "card-title" }, n.a.createElement("span", { style: { color: void 0 === e.cmd.color ? "white" : e.cmd.color } }, e.cmd.cmd)), n.a.createElement("h6", null, " - ", e.cmd.shortDesc)), n.a.createElement("div", { className: "col-sm-2 col-md-1", style: { textAlign: "right" } }, n.a.createElement("span", { style: { color: "white", fontSize: 20 } }, c ? u : d)))), e.cmd.tags.includes("price") && n.a.createElement("span", { className: "badge badge-primary" }, "Price"), n.a.createElement("span", null, " "), e.cmd.tags.includes("alarms") && n.a.createElement("span", { className: "badge badge-warning" }, "Alarms"), n.a.createElement("span", null, " "), e.cmd.tags.includes("premium") && n.a.createElement("span", { className: "badge badge-success" }, "Premium ", i), n.a.createElement("span", null, " "), e.cmd.tags.includes("config") && n.a.createElement("span", { className: "badge badge-light" }, "Config"), n.a.createElement(m.Collapse, { isOpened: c }, n.a.createElement("hr", null), n.a.createElement("div", { className: "blockMain" }, n.a.createElement("div", { className: "card" }, n.a.createElement("div", { className: "card-body", style: { padding: 5 } }, n.a.createElement("h5", { className: "card-title", style: { color: "#2E2E2E" } }, "Usage"), n.a.createElement("p", { className: "card-text" }, n.a.createElement("span", { style: { color: "black" } }, e.cmd.syntax[0]), " ", g))), n.a.createElement("div", { className: "card" }, n.a.createElement("div", { className: "card-body", style: { padding: 5 } }, n.a.createElement("h5", { className: "card-title", style: { color: "#2E2E2E" } }, "Example"), n.a.createElement("p", { className: "card-text" }, n.a.createElement("span", { style: { color: "black" } }, e.cmd.example)))))))) }; var E = function () { var e = Object(l.useState)(""), a = Object(s.a)(e, 2), t = a[0], r = a[1], c = t.toLowerCase(), m = Object(l.useState)("all"), d = Object(s.a)(m, 2), u = d[0], E = d[1]; return n.a.createElement("div", { className: "App" }, n.a.createElement("input", { className: "searchInput", type: "text", placeholder: "Search for command \ud83d\udd0d", value: t, onChange: function (e) { r(e.target.value) } }), n.a.createElement("br", null), n.a.createElement("div", null, function () { var e, a = [], t = Object(o.a)(p); try { var l = function () { var t = e.value; a.push(n.a.createElement(n.a.Fragment, null, n.a.createElement("a", { onClick: function () { E(t) }, className: (u === t ? "tagSelector-active" : "tagSelector-inactive") + " tagSelector", key: "tag-" + t }, t, " ", "premium" === t ? i : void 0), n.a.createElement("span", null, " "))) }; for (t.s(); !(e = t.n()).done;)l() } catch (r) { t.e(r) } finally { t.f() } return a }()), n.a.createElement("br", null), function () { var e, a = [], t = Object(o.a)(g); try { for (t.s(); !(e = t.n()).done;) { var l = e.value; if ("all" === u || l.tags.includes(u)) { var r, s = !1, m = Object(o.a)(l.tags); try { for (m.s(); !(r = m.n()).done;) { if (r.value.includes(c)) { s = !0; break } } } catch (i) { m.e(i) } finally { m.f() } (l.cmd.toLowerCase().includes(c) || s) && a.push(n.a.createElement(h, { cmd: l, key: "cmd-" + l.cmd })) } } } catch (i) { t.e(i) } finally { t.f() } return a }()) }; Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)); c.a.render(n.a.createElement(n.a.StrictMode, null, n.a.createElement(E, null)), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then((function (e) { e.unregister() })).catch((function (e) { console.error(e.message) })) }, 8: function (e, a, t) { e.exports = t(17) } }, [[8, 1, 2]]]);
