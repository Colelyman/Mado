var aa, ba, ca, da, ea, fa, ga, ha, b, ia = 0,
    e;

function f() {
    0 == ia ? ia = g.scrollHeight : ia < g.scrollHeight && !0 == ja && ($(g).scrollTop(g.scrollHeight - g.offsetHeight), $(h).scrollTop(h.scrollHeight - h.offsetHeight));
    ka();
    g.clientHeight < g.scrollHeight ? $(la).css("display", "none") : $(la).css("display", "block")
}

function k() {
    void 0 != ma && (na(ma), ma = void 0)
}

function oa() {
    marked(g.value, function (a, c) {
        chrome.fileSystem.chooseEntry({
            type: "saveFile",
            suggestedName: pa() + ".html"
        }, function (a) {
            a && a.createWriter(function (a) {
                a.write(new Blob([c], {
                    type: "text/HTML"
                }))
            }, k)
        })
    })
}

function m(a) {
    return a.substring(a.lastIndexOf("/") + 1)
}

function pa() {
    var a = n.innerHTML;
    return "" == a ? "document" : a.substring(a.lastIndexOf("/") + 1, a.lastIndexOf("."))
}

function qa(a) {
    p("Window '" + a + "' opened");
    chrome.app.window.create(a, {
        bounds: {
            left: Math.round(window.screenX + ($(window).width() - 498) / 2),
            top: Math.round(window.screenY + ($(window).height() - 664) / 2),
            width: 498,
            height: 664
        },
        frame: "none",
        minWidth: 498,
        minHeight: 664,
        maxWidth: 498,
        maxHeight: 664
    });
    ra.click()
}

function sa() {
    chrome.storage.local.get("displaySize", function (a) {
        void 0 != a.displaySize ? "small" == a.displaySize ? $("body").attr("class", "small") : "medium" == a.displaySize ? $("body").attr("class", " ") : $("body").attr("class", "big") : (chrome.storage.local.set({
            displaySize: "medium"
        }), $("body").attr("class", " "))
    })
}

function ta() {
    p("New file");
    0 < g.value.length && g.value != ua ? chrome.app.window.create("mado.html", {
        bounds: {
            left: window.screenX + 20,
            top: window.screenY + 20,
            width: window.innerWidth,
            height: window.innerHeight
        },
        frame: "none",
        minWidth: 750,
        minHeight: 330
    }) : g.value == ua && (g.value = "", f(), $(g).focus())
}

function va(a) {
    p("File opened");
    a.file(function (c) {
        var d = new FileReader;
        d.onload = function (c) {
            "" != g.value ? chrome.storage.local.set({
                tempFileEntry: chrome.fileSystem.retainEntry(a)
            }, ta) : (g.value = c.target.result, b = a, q = g.value, f(), n.innerHTML = m(a.fullPath) + "&nbsp;-", ha.innerHTML = m(a.fullPath) + " - Mado");
            wa(a)
        };
        d.readAsText(c)
    }, k)
}

function xa() {
    chrome.fileSystem.chooseEntry({
        type: "openFile",
        accepts: [{
            extensions: ["markdown", "md", "txt"]
        }]
    }, function (a) {
        a && va(a)
    })
}

function ya() {
    chrome.fileSystem.chooseEntry({
        type: "saveFile",
        suggestedName: "document.md"
    }, function (a) {
        a && a.createWriter(function (c) {
            e = !1;
            c.onwriteend = function () {
                e ? (b = a, wa(b), q = g.value, za(), n.innerHTML = m(a.fullPath) + "&nbsp;-", ha.innerHTML = m(fileToOpen.fullPath) + " - Mado") : (e = !0, this.truncate(this.position))
            };
            c.write(new Blob([g.value], {
                type: "plain/text"
            }))
        }, k)
    })
}

function Aa() {
    void 0 == b || "md&nbsp;-" != n.innerHTML.substring(n.innerHTML.length - 9) ? ya() : b.createWriter(function (a) {
        e = !1;
        a.onwriteend = function () {
            e ? (wa(b), q = g.value, za()) : (e = !0, this.truncate(this.position))
        };
        a.write(new Blob([g.value], {
            type: "plain/text"
        }))
    }, k)
}
chrome.storage.onChanged.addListener(function (a) {
    for (key in a) "analytics" == key ? Ba() : "displaySize" == key ? sa() : "gfm" == key && Ca()
});
$(document).click(function (a) {
    $(a.target).closest(Da).length && "tool-displayer hidden" == Ea.className ? (Ea.className = "tool-displayer", r.focus()) : "tool-displayer hidden" == Ea.className || $(a.target).closest(r).length || $(a.target).closest(s).length || (r.value = "", t(1), s.className = "hidden", Ea.className = "tool-displayer hidden");
    $(a.target).closest(Fa).length && "tool-displayer hidden" == u.className ? (v.innerHTML = "Choose an image", w.value = "", x = g.value, y = void 0, u.className = "tool-displayer", g.selectionStart != g.selectionEnd ||
        $(g).is(":focus") ? (startSelect = g.selectionStart, z = g.selectionEnd) : z = startSelect = g.value.length, startSelect != z && g.setSelectionRange(startSelect, z), A = z, x = g.value.substring(startSelect, z), /!\[.*\]\(.*\)/.test(x) && "!" == x[0] && ")" == x[x.length - 1] ? (y = /!\[.*\]\(.*\s+".*"\)/.test(x) ? x.match(/\(.*\)/)[0].substring(2, x.match(/\(.*\s+"/)[0].length - 2).replace(/\\/g, "/") : x.match(/\(.*\)/)[0].substring(2, x.match(/\(.*\)/)[0].length - 1).replace(/\\/g, "/"), Ga(m(y)), w.value = x.match(/!\[.+\]/)[0].substring(2, x.match(/!\[.+\]/)[0].length -
            1)) : w.value = x, $(g).a(A)) : "tool-displayer" != u.className || $(a.target).closest(Ha).length && !$(a.target).closest(document.getElementById("insert-image")).length || ($(a.target).closest(document.getElementById("insert-image")).length ? Ia() : u.className = "tool-displayer hidden");
    $(a.target).closest(Ja).length && "tool-displayer hidden" == B.className ? (C.value = "", D.value = "", x = g.value, B.className = "tool-displayer", g.selectionStart != g.selectionEnd || $(g).is(":focus") ? (startSelect = g.selectionStart, z = g.selectionEnd) : z =
        startSelect = g.value.length, startSelect != z && g.setSelectionRange(startSelect, z), A = z, x = g.value.substring(startSelect, z), /\[.*\]\(.*\)/.test(x) && "[" == x[0] && ")" == x[x.length - 1] ? (D.value = x.match(/\[.*\]/)[0].substring(1, x.match(/\[.*\]/)[0].length - 1), C.value = x.match(/\(.*\)/)[0].substring(1, x.match(/\(.*\)/)[0].length - 1)) : D.value = x, $(g).a(A), C.focus()) : "tool-displayer" != B.className || $(a.target).closest(B).length && !$(a.target).closest(document.getElementById("insert-link")).length || ($(a.target).closest(document.getElementById("insert-link")).length ?
        Ka() : B.className = "tool-displayer hidden");
    $(a.target).closest(ra).length && "hidden" == La.className ? La.className = " " : "hidden" == La.className || $(a.target).closest(Ma).length || (La.className = "hidden");
    $(a.target).closest(Na).length && "tool-displayer hidden" == E.className ? (E.className = "tool-displayer", F.value = "", G.value = "", x = g.value, E.className = "tool-displayer", g.selectionStart != g.selectionEnd || $(g).is(":focus") ? (startSelect = g.selectionStart, z = g.selectionEnd) : z = startSelect = g.value.length, startSelect != z && g.setSelectionRange(startSelect,
        z), A = z, x = g.value.substring(startSelect, z), /!\[.*\]\(.*\)/.test(x) && "!" == x[0] && ")" == x[x.length - 1] ? (G.value = x.match(/!\[.*\]/)[0].substring(2, x.match(/!\[.*\]/)[0].length - 1), F.value = x.match(/\(.*\)/)[0].substring(1, x.match(/\(.*\)/)[0].length - 1)) : G.value = x, $(g).a(A), F.focus()) : "tool-displayer" != E.className || $(a.target).closest(E).length && !$(a.target).closest(document.getElementById("insert-webimage")).length || ($(a.target).closest(document.getElementById("insert-webimage")).length ? Oa() : E.className = "tool-displayer hidden");
    $(a.target).closest(ea).length && "hidden" == H.className ? (Pa(), H.className = "") : "hidden" == H.className || $(a.target).closest(I).length || (H.className = "hidden");
    $(a.target).closest(Qa).length && "tool-displayer hidden" == J.className ? J.className = "tool-displayer" : "tool-displayer hidden" == J.className || $(a.target).closest(J).length || (J.className = "tool-displayer hidden");
    "visible" != Ra.className || $(a.target).closest(Sa).length && !$(a.target).closest(Ta).length || (Ra.className = "hidden")
});
var Ua, Va = !1,
    Wa = [".markdown", ".md", ".txt"],
    Xa;

function Ya(a) {
    var c = document.querySelector("body"),
        d = 0;
    this.g = function (a) {
        a.stopPropagation();
        a.preventDefault();
        d++;
        c.classList.add("dropping")
    };
    this.i = function (a) {
        Va || (Ua.className = "dragging", Va = 1);
        a.stopPropagation();
        a.preventDefault()
    };
    this.h = function (a) {
        Ua.removeAttribute("class");
        Va = 0;
        a.stopPropagation();
        a.preventDefault();
        0 >= --d && (c.classList.remove("dropping"), d = 0)
    };
    this.j = function (d) {
        Ua.removeAttribute("class");
        Va = 0;
        d.stopPropagation();
        d.preventDefault();
        c.classList.remove("dropping");
        a(d.dataTransfer)
    };
    c.addEventListener("dragenter", this.g, !1);
    c.addEventListener("dragover", this.i, !1);
    c.addEventListener("dragleave", this.h, !1);
    c.addEventListener("drop", this.j, !1)
}
var la, h, g, Za, ua = "# Dear user,\n\nThanks for installing **Mado**. For your first launch, here is some information:\n\n* Mado handles .md, .markdown and .txt files, can save these files as .md (the official extension for MarkDown files) and offers an export in .html.\n* You can click the number of words in the bottom-right corner to see the number of characters in your document (and *vice versa*). Click the eye icon next to it to change the style of the HTML view.\n* Mado uses Google Analytics to know in real time how many users are currently running the app, for statistical analysis only. You can deactivate it anytime in the settings (top-right button, \u201cSettings\u201d section).\n* See the keyboard shortcuts (top-right button, \u201cShortcuts\u201d section) to use Mado in depth.\n\nWe hope you will enjoy Mado,\n\n**[A+A](https://twitter.com/AplusA_io)**\n\n***\n\nP.S. This message will not appear anymore. Click \u201cNew\u201d in the navbar to start using Mado.",
    x,
    K, z, A;

function ka() {
    0 < g.value.length ? (void 0 == Za ? chrome.storage.local.get("gfm", function (a) {
        void 0 != a.gfm ? marked.setOptions({
            gfm: a.gfm
        }) : (chrome.storage.local.set({
            gfm: !0
        }), marked.setOptions({
            gfm: !0
        }));
        Ca()
    }) : marked.setOptions({
        gfm: Za
    }), marked(g.value, function (a, c) {
        for (var d = L = 0; d < M.length; d++) M[d][2] = !1;
        K = c;
        N()
    })) : (h.innerHTML = "See the result here", O.innerHTML = "&nbsp;0 characters&nbsp;", P.innerHTML = "&nbsp;0 words&nbsp;", za())
}

function $a() {
    Q = R = void 0;
    for (var a = 0; a < M.length; a++)!1 == M[a][2] && (M = M.splice(M[a], 1));
    h.innerHTML = K;
    $("#html-conversion a").each(function () {
        "#" != $(this).attr("href").substring(0, 1) && "http" != $(this).attr("href").substring(0, 4) && $(this).attr("href", "http://" + $(this).attr("href"));
        $(this).attr("target", "_blank")
    });
    $("#html-conversion .nofile, #html-conversion .nofile-link, #html-conversion .nofile-visual").on("click", ab);
    Countable.once(h, function (a) {
        O.innerHTML = "&nbsp;" + a.characters + " characters&nbsp;";
        P.innerHTML =
            "&nbsp;" + a.words + " words&nbsp;";
        1 == a.characters && (O.innerHTML = "&nbsp;" + a.characters + " character&nbsp;");
        1 == a.words && (P.innerHTML = "&nbsp;" + a.words + " word&nbsp;")
    }, {
        stripTags: !0
    });
    za()
}

function Ca() {
    chrome.storage.local.get("gfm", function (a) {
        void 0 != a.gfm ? Za = a.gfm : (chrome.storage.local.set({
            gfm: !0
        }), Za = !0);
        f()
    })
}
$.fn.a = function (a) {
    var c = startSelect;
    a || (a = c);
    this.each(function () {
        this.setSelectionRange ? (this.focus(), this.setSelectionRange(c, a)) : this.createTextRange && (this.createTextRange(), range.collapse(!0), range.moveEnd("character", a), range.moveStart("character", c), range.select())
    })
};
var O, bb, n, P;

function cb() {
    "none" == O.style.display ? ($(O).css("display", "inline"), $(P).css("display", "none"), p("Number of chars diplayed")) : ($(O).css("display", "none"), $(P).css("display", "inline"), p("Number of words diplayed"))
}
var r, Da, Ea, S, s, db, T = [
        [
            ["Headers", "Titles"], "Six sizes available, the size depends on the numbers of #. <br> #Big title (size 1, the biggest). <br> ####A less impresive title (size 4 on 6).", 'Six sizes available, the size depends on the numbers of #.<h1 id="big-title-size-1-the-biggest-">Big title (size 1, the biggest).</h1><h4 id="a-less-impresive-title-size-4-on-6-br-">A less impresive title (size 4 on 6).</h4>'
        ],
        [
            ["Bold", "Strong emphasis"], '<span class="help-code">**bold**</span> or <span class="help-code">__bold__</span>',
            "<strong>Bold</strong>"
        ],
        [
            ["Italic", "Emphasis"], '<span class="help-code">*italic*</span> or <span class="help-code">_italic_</span>', "<em>Italic</em>"
        ],
        [
            ["Bold italic", "Combined emphasis"], '<span class="help-code">**_ bold italic_**</span> or <span class="help-code">*__bold italic__*</span> or <span class="help-code">***this***</span> or <span class="help-code">___this___</span>', "<strong><em>Bold italic</em></strong>"
        ],
        [
            ["Ordered lists"], "1. First ordered list item. <br>2. Another item.", "<ol><li>First ordered list item</li><li>Another item.</li></ol>"
        ],
        [
            ["Unordered lists"], "* An item. <br>* A second item (you can also use + or -).", "<ul><li>An item. </li><li>A second item (you can also use + or -).</li></ul>"
        ],
        [
            ["Inline-style links"], '<span class="help-code">[Hypertext](http://aplusa.io/mado)</span><br>(Can be used to create an anchor.)', '<a target="_blank" href="http://aplusa.io/mado">Hypertext</a>'
        ],
        [
            ["Reference-style links"], '<span class="help-code">[Hypertext][1]<br>[1]: http://aplusa.io/mado</span>', '<a target="_blank" href="http://aplusa.io/mado">Hypertext</a>'
        ],
        [
            ["Images (inline)", "Pictures (inline)"], '<span class="help-code">![alt text](path/to/image.jpg "Title")</span>', '<div class="example-image"></div>'
        ],
        [
            ["Images (reference-style)", "Pictures (reference-style)"], '<span class="help-code">![alt text][image Id] <br> [image Id]: path/to/image.jpg "Title"</span>', '<div class="example-image"></div>'
        ],
        [
            ["Blocks of code"], '<span class="help-code">```Text between three back-ticks is a block of code.```<br>&nbsp;&nbsp;&nbsp;&nbsp;Text after four spaces is also a block of code.</span>',
            "<code>Write your code between three back-ticks to make a block of code.</code><br><code>You can also write code by indent your text with four spaces.</code>"
        ],
        [
            ["Blockquotes"], '> Blockquotes only need <span class="help-code">></span> to work. <br><br> <span class="help-code">> Two blockquotes without a break (a line who isn\'t a blockquote)  are a single quote.</span>', "<blockquote>Blockquotes only need &gt; to work. To separate two blockquotes, insert a blank line between them.</blockquote>"
        ],
        [
            ["Inline HTML",
                "HTML in Markdown"
            ], '<span class="help-code">It &lt;strong>works&lt;/strong>.</span>', "It <strong>works<strong>"
        ],
        [
            ["Horizontal rules"], '<span class="help-code">*** <br> You can use Hyphens, asterisks or underscores. <br> ---</span>', "<hr> You can use Hyphens, asterisks or underscores.<hr>"
        ],
        [
            ["Line breaks"], 'To separate two paragraphs, press <span class="help-code">Enter</span> twice.<br><br>And you have a new paragraph.', "<p>To separate two paragraphs, press Enter twice.</p><p>And you have a new paragraph!</p>"
        ],
        [
            ["Tables", "Arrays"], "| Tables&nbsp; | Are&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Cool&nbsp;&nbsp;|<br>| -------- |:----------------:| ------:|<br>| col 3 is | right-aligned | $13 &nbsp;&nbsp; |<br>| col 2 is | centered&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | $37 &nbsp;&nbsp; |", '<table> <thead><tr> <th>Tables</th> <th align="center">Are</th> <th align="right">Cool</th> </tr></thead> <tbody> <tr> <td>col 3 is</td> <td align="center">right-aligned</td> <td align="right">$13</td> </tr> <tr> <td>col 2 is</td> <td align="center">centered</td> <td align="right">$37</td> </tr> </tbody> </table>'
        ],
        [
            ["Question"], "Seriously?", "Life's most persistent and urgent question is, 'What are you doing for others?'."
        ]
    ];

function eb() {
    for (var a = 1; 3 >= a; a++) "result switched" == document.getElementById("result-" + a).className && (document.getElementById("result-" + a).className = "result");
    if (0 == r.value.length) s.className = "hidden", t(3), fb();
    else if (3 > r.value.length) s.className = "one-result no-result", t(2), 1 == r.value.length ? document.getElementById("answer-1").innerHTML = "Add two more characters" : 2 == r.value.length && (document.getElementById("answer-1").innerHTML = "Add one more character"), fb();
    else {
        for (a = S = 0; a < T.length && 3 > S; a++)
            for (var c =
                0; c < T[a][0].length; c++) - 1 < T[a][0][c].toLowerCase().indexOf(r.value.toLowerCase()) && (db = T[a][0][c].toLowerCase().indexOf(r.value.toLowerCase()), document.getElementById("answer-" + (S + 1)).innerHTML = '<h1 class="help-title">' + T[a][0][c].substring(0, db) + '<span class="match">' + T[a][0][c].substr(db, r.value.length) + "</span>" + T[a][0][c].substring(db + r.value.length) + "</h1>" + T[a][1], document.getElementById("example-" + (S + 1)).innerHTML = T[a][2], S++, c = T[a][0].length);
        switch (S) {
        case 0:
            document.getElementById("answer-1").innerHTML =
                "No help found.";
            s.className = "one-result no-result";
            t(2);
            break;
        case 1:
            s.className = "one-result";
            t(2);
            break;
        case 2:
            s.className = "two-results";
            t(3);
            break;
        case 3:
            s.className = "three-results"
        }
    }
}

function t(a) {
    for (; 3 >= a; a++) "" == document.getElementById("answer-" + a).innerHTML ? a = 3 : (document.getElementById("answer-" + a).innerHTML = "", document.getElementById("result-" + a).className = "result", document.getElementById("example-" + a).innerHTML = "")
}

function fb() {
    for (var a = 0, c = 1; 3 >= c; c++) "" != $("#answer-" + c).html() ? ($("#result-" + c).css("display", "block"), $("#answer-" + c).outerHeight() >= $("#example-" + c).outerHeight() ? $("#result-" + c).css("height", $("#answer-" + c).outerHeight() + "px") : $("#result-" + c).css("height", $("#example-" + c).outerHeight() + "px"), a += $("#result-" + c).outerHeight()) : ($("#result-" + c).css("height", 0), $("#result-" + c).css("display", "none"));
    $(s).css("height", a + "px")
}
var w, gb, hb, Fa, Ha, v, u, ib, jb = [],
    kb, y, R, L = 0,
    M = [],
    lb = "png bmp jpeg jpg gif png svg xbm webp".split(" "),
    Q, mb, nb = [],
    U;

function Ia() {
    "" == w.value ? (w.setAttribute("class", "flash"), w.focus(), w.removeAttribute("class")) : void 0 != y && (u.className = "tool-displayer hidden", g.focus(), $(g).a(A))
}

function ob() {
    g.value = g.value.substring(0, startSelect) + x + g.value.substring(A, g.length);
    f();
    u.className = "tool-displayer hidden";
    g.focus();
    $(g).a(z)
}

function ab() {
    chrome.mediaGalleries.getMediaFileSystems({
        interactive: "yes"
    }, pb)
}

function qb(a) {
    jb = a;
    rb(0)
}

function N() {
    if (-1 != K.indexOf('<img src="', L)) {
        L = K.indexOf('<img src="', L) + 10;
        mb = !1;
        R = K.substring(L, K.indexOf('"', L));
        for (var a = nb.length = 0; a < M.length; a++) nb.push(M[a][0]);
        U = nb.indexOf(R); - 1 < lb.indexOf(R.substr(R.lastIndexOf(".") + 1).toLowerCase()) ? ("http://" == R.substring(0, 7) || "https://" == R.substring(0, 8) ? navigator.onLine ? -1 < U ? (K = K.substring(0, L) + M[U][1] + K.substring(L + R.length), M[U][2] = !0) : (mb = !0, sb()) : K = K.substring(0, L - 10) + '<span class="nofile-link"> <span class="nofile-visual">Internet not available</span>&nbsp;</span><img class="nofile" srcset="img/nointernet.png 1x, img/nointernet@2x.png 2x' + K.substring(L +
            R.length) : "data:" != R.substring(0, 5) && "blob:" != R.substring(0, 5) && (-1 < U ? (K = K.substring(0, L) + M[U][1] + K.substring(L + R.length), M[U][2] = !0) : (mb = !0, Q = !1, pb())), mb || N()) : "data:" != R.substring(0, 5) && "blob:" != R.substring(0, 5) && (K = K.substring(0, L - 10) + '<span class="nofile-link"> <span class="nofile-visual">This is not an image</span>&nbsp;</span><img class="nofile" srcset="img/notimage.png 1x, img/notimage@2x.png 2x' + K.substring(L + R.length), N())
    } else $a()
}

function rb(a) {
    !1 == Q ? a < jb.length ? (ib = a, jb.forEach(function (c, d) {
        d == a && void 0 != R && !1 == Q && c.root.createReader().readEntries(tb)
    })) : (K = K.substring(0, L - 10) + '<span class="nofile-link"> <span class="nofile-visual">' + m(R.replace(/\\/g, "/")) + ' not found</span>&nbsp;</span><img class="nofile" srcset="img/nofile.png 1x, img/nofile@2x.png 2x' + K.substring(L + R.length), -1 != K.indexOf('<img src="', L) ? N() : $a()) : (M.length = 0, ub())
}

function vb(a) {
    jb[ib].root.getFile(a, {
        create: !1
    }, function (a) {
        a.file(function (a) {
            var c = new FileReader;
            c.onloadend = function () {
                M.push([R, this.result, !0]);
                K = K.substring(0, L) + this.result + K.substring(L + R.length);
                Q = !0; - 1 != K.indexOf('<img src="', L) ? N() : $a()
            };
            c.readAsDataURL(a)
        })
    })
}

function tb(a) {
    for (var c = 0; c < a.length && !1 == Q; c++)
        if (a[c].isDirectory && -1 != R.indexOf(a[c].fullPath)) {
            a[c].createReader().readEntries(tb);
            break
        } else if (-1 != R.indexOf(a[c].fullPath)) {
        vb(a[c].fullPath);
        break
    } else c == a.length - 1 && rb(ib + 1)
}

function wb() {
    chrome.fileSystem.chooseEntry({
        type: "openFile",
        accepts: [{
            mimeTypes: ["image/*"]
        }]
    }, function (a) {
        a && chrome.fileSystem.getDisplayPath(a, function (a) {
            Ga(m(a.replace(/\\/g, "/")));
            y = a.replace(/\\/g, "/");
            ub();
            w.focus()
        })
    })
}

function ub() {
    kb = "![" + w.value + "](" + y + ")";
    $(g).innerText = $(g).innerText + kb;
    void 0 == A && (A = z);
    g.value = g.value.substring(0, startSelect) + kb + g.value.substring(A, g.length);
    A = (g.value.substring(0, startSelect) + kb).length;
    f()
}

function Ga(a) {
    v.innerHTML = a;
    15 < v.innerHTML.length && (v.innerHTML = v.innerHTML.substring(0, 6) + "(…)" + v.innerHTML.substring(v.innerHTML.length - 6, v.innerHTML.length))
}

function pb() {
    chrome.mediaGalleries.getMediaFileSystems({
        interactive: "no"
    }, qb)
}
var xb, D, yb, Ja, B, C;

function Ka() {
    "" == C.value ? (C.setAttribute("class", "tool-first-item flash"), C.focus(), C.setAttribute("class", "tool-first-item")) : (B.className = "tool-displayer hidden", g.focus(), $(g).a(A))
}

function zb() {
    g.value = g.value.substring(0, startSelect) + x + g.value.substring(A, g.length);
    f();
    B.className = "tool-displayer hidden";
    g.focus();
    $(g).a(z)
}

function Ab() {
    yb = "" == D.value ? "[" + C.value + "](" + C.value + ")" : "[" + D.value + "](" + C.value + ")";
    void 0 == A && (A = z);
    g.value = g.value.substring(0, startSelect) + yb + g.value.substring(A, g.length);
    A = (g.value.substring(0, startSelect) + yb).length;
    f()
}
var ra, La, Ma, Bb, Cb, Db, Eb, Na, E, F, G, Fb;

function Oa() {
    "" == F.value ? (F.setAttribute("class", "tool-first-item flash"), F.focus(), F.setAttribute("class", "tool-first-item")) : (E.className = "tool-displayer hidden", g.focus(), $(g).a(A))
}

function Gb() {
    g.value = g.value.substring(0, startSelect) + x + g.value.substring(A, g.length);
    f();
    E.className = "tool-displayer hidden";
    g.focus();
    $(g).a(z)
}

function Hb() {
    Fb = "" == G.value ? "![" + F.value + "](" + F.value + ")" : "![" + G.value + "](" + F.value + ")";
    void 0 == A && (A = z);
    g.value = g.value.substring(0, startSelect) + Fb + g.value.substring(A, g.length);
    A = (g.value.substring(0, startSelect) + Fb).length;
    f()
}

function Ib(a) {
    var c = R,
        d = new XMLHttpRequest;
    d.responseType = "blob";
    d.onload = function () {
        a(window.URL.createObjectURL(d.response), c)
    };
    d.open("GET", c, !0);
    d.send()
}

function sb() {
    Ib(function (a) {
        K = K.replace(R, a);
        M.push([R, a, !0]); - 1 != K.indexOf('<img src="', L) ? N() : $a()
    })
}
window.onload = function () {
    aa = document.getElementById("export");
    ba = document.getElementById("new");
    ca = document.getElementById("open");
    da = document.getElementById("print");
    ea = document.getElementById("recent");
    fa = document.getElementById("save");
    ga = document.getElementById("save-as");
    ha = document.getElementsByTagName("title")[0];
    Ua = document.getElementById("document");
    la = document.getElementById("center-line-container");
    h = document.getElementById("html-conversion");
    g = document.getElementById("markdown");
    O = document.getElementById("character-nb");
    bb = document.getElementById("link-url");
    n = document.getElementById("doc-name");
    P = document.getElementById("word-nb");
    r = document.getElementById("help-input");
    Da = document.getElementById("help-button");
    Ea = document.getElementById("help-input-displayer");
    s = document.getElementById("help-results-container");
    gb = document.getElementById("cancel-image");
    hb = document.getElementById("galleries-button");
    Fa = document.getElementById("image-button");
    u = document.getElementById("image-insertion-displayer");
    Ha = document.getElementById("image-insertion-box");
    v = document.getElementById("browse-image");
    w = document.getElementById("alt-input");
    xb = document.getElementById("cancel-link");
    Ja = document.getElementById("link-button");
    B = document.getElementById("link-insertion-displayer");
    C = document.getElementById("url-input");
    D = document.getElementById("hypertext-input");
    ra = document.getElementById("more-button");
    La = document.getElementById("more-displayer");
    Ma = document.getElementById("more-container");
    Bb = document.getElementById("settings");
    Cb = document.getElementById("q-and-a");
    Db = document.getElementById("shortcuts");
    Eb = document.getElementById("about");
    cancelOnlineImageButton = document.getElementById("cancel-webimage");
    Na = document.getElementById("webimage-button");
    F = document.getElementById("webimage-url");
    G = document.getElementById("webimage-alt-input");
    E = document.getElementById("webimage-insertion-displayer");
    ea = document.getElementById("recent-button");
    H = document.getElementById("recent-files-displayer");
    I = document.getElementById("recent-files-container");
    Qa = document.getElementById("style-tool");
    J = document.getElementById("style-tool-displayer");
    Jb = document.getElementById("home-style");
    Kb = document.getElementById("clinic-style");
    Lb = document.getElementById("tramway-style");
    Mb = document.getElementById("mado-footer");
    Nb = document.getElementById("workspace");
    Ob = document.getElementById("switch-cursor");
    Pb = document.getElementById("switch-md");
    Qb = document.getElementById("switch-both");
    Rb = document.getElementById("switch-html");
    V.push(Pb, Qb, Rb);
    Ta = document.getElementById("cancel");
    Ra = document.getElementById("close-alert-displayer");
    Sb = document.getElementsByTagName("head")[0];
    Tb = document.getElementById("quit");
    Ub = document.getElementById("save-quit");
    Vb = document.getElementById("save-state");
    Sa = document.getElementById("window-close");
    Wb = document.getElementById("window-close-button");
    Xb = document.getElementById("window-maximize");
    Yb = document.getElementById("window-minimize");
    chrome.storage.local.get("tempFileEntry", function (a) {
        void 0 != a.tempFileEntry ? chrome.fileSystem.restoreEntry(a.tempFileEntry, function (a) {
            b = a;
            chrome.storage.local.remove("tempFileEntry");
            b.file(function (a) {
                var c = new FileReader;
                c.onload = function (a) {
                    g.value = a.target.result;
                    q = g.value;
                    f();
                    n.innerHTML = m(b.fullPath) + "&nbsp;-";
                    ha.innerHTML = m(b.fullPath) + " - Mado"
                };
                c.readAsText(a)
            }, k)
        }) : q = void 0
    });
    sa();
    $(ba).on("click", ta);
    Mousetrap.bind(["command+n", "ctrl+n"], function () {
        ta();
        return !1
    });
    $(ca).on("click", xa);
    Mousetrap.bind(["command+o", "ctrl+o"], function () {
        xa();
        return !1
    });
    $(fa).on("click", Aa);
    Mousetrap.bind(["command+s", "ctrl+s"], function () {
        Aa();
        return !1
    });
    $(ga).on("click", ya);
    Mousetrap.bind(["command+shift+s",
        "ctrl+shift+s"
    ], function () {
        ya();
        return !1
    });
    $(aa).on("click", oa);
    $(da).on("click", function () {
        window.print()
    });
    Mousetrap.bind(["command+p", "ctrl+p"], function () {
        window.print();
        return !1
    });
    new Ya(function (a) {
        a = a.items[0].webkitGetAsEntry();
        Xa = a.fullPath; - 1 != Wa.indexOf(Xa.substring(Xa.lastIndexOf("."), Xa.length)) && va(a)
    });
    Ca();
    $(O).css("display", "none");
    chrome.storage.local.get("firstLaunch", function (a) {
        void 0 == a.firstLaunch && (void 0 == q && (g.value = ua, f()), chrome.storage.local.set({
            firstLaunch: !1
        }))
    });
    $(g).focus();
    $(g).on("input propertychange", function () {
        f();
        Zb()
    });
    $(g).on("paste", Zb);
    $(g).keydown(function (a) {
        9 == a.keyCode && a.preventDefault()
    });
    $("#html-conversion").on("click", "a", function (a) {
        -1 != a.currentTarget.href.indexOf("chrome-extension://") && (a.preventDefault(), "" != a.currentTarget.hash && 0 != $(a.currentTarget.hash).length && $("#html-conversion").scrollTop($(a.currentTarget.hash).position().top))
    });
    $(O).on("click", cb);
    $(P).on("click", cb);
    $("#html-conversion").on("mouseenter", "a", function (a) {
        bb.innerHTML = -1 == a.currentTarget.href.indexOf("chrome-extension://") ? a.currentTarget.href : a.currentTarget.hash;
        bb.className = "show"
    });
    $("#html-conversion").on("mouseleave", "a", function () {
        bb.className = ""
    });
    Mousetrap.bind(["command+h", "ctrl+h"], function () {
        $(Da).click();
        return !1
    });
    $(r).keyup(function (a) {
        27 == a.keyCode && $(Da).click()
    });
    $(r).on("input propertychange", eb);
    $("#result-switch-1, #result-switch-2, #result-switch-3").on("click", function (a) {
        a = a.target.id.substr(a.target.id.length - 1);
        document.getElementById("result-" +
            a).className = "result" == document.getElementById("result-" + a).className ? "result switched" : "result";
        r.focus()
    });
    $("#answer-1, #answer-2, #answer-3, #example-1, #example-2, #example-3").mutate("height", fb);
    $(v).on("click", wb);
    $(hb).on("click", ab);
    $(w).keyup(function (a) {
        13 == a.keyCode ? Ia() : 27 == a.keyCode ? ob() : ub()
    });
    $(gb).on("click", ob);
    Mousetrap.bind(["command+k", "ctrl+k"], function () {
        $(Ja).click();
        return !1
    });
    $(C).keyup(function (a) {
        13 == a.keyCode ? Ka() : 27 == a.keyCode ? zb() : Ab()
    });
    $(D).keydown(function (a) {
        9 == a.keyCode &&
            (a.preventDefault(), $(C).select())
    });
    $(D).keyup(function (a) {
        13 == a.keyCode ? Ka() : 27 == a.keyCode ? zb() : Ab()
    });
    $(xb).on("click", zb);
    $(Bb).on("click", function () {
        qa("more/settings.html")
    });
    $(Cb).on("click", function () {
        qa("more/qanda.html")
    });
    $(Db).on("click", function () {
        qa("more/shortcuts.html")
    });
    $(Eb).on("click", function () {
        qa("more/about.html")
    });
    $(F).keyup(function (a) {
        13 == a.keyCode ? Oa() : 27 == a.keyCode ? Gb() : Hb()
    });
    $(G).keydown(function (a) {
        9 == a.keyCode && (a.preventDefault(), $(F).select())
    });
    $(G).keyup(function (a) {
        13 ==
            a.keyCode ? Oa() : 27 == a.keyCode ? Gb() : Hb()
    });
    $(cancelOnlineImageButton).on("click", Gb);
    Pa();
    1600 > chrome.app.window.current().getBounds().width && $b();
    $(g).on("scroll", function () {
        $(g).is(":hover") && ac("markdown")
    });
    $(h).on("scroll", function () {
        $(h).is(":hover") && ac("HTML")
    });
    navigator.onLine && (bc = analytics.getService("Mado"), Ba(), cc = bc.getTracker("UA-45134408-1"), cc.sendAppView("mainWindow"));
    dc();
    $(Jb).on("click", function () {
        ec("home")
    });
    $(Kb).on("click", function () {
        ec("clinic")
    });
    $(Lb).on("click", function () {
        ec("tramway")
    });
    1159 < chrome.app.window.current().getBounds().width ?
        Qb.className = "switch-button activated" : (Pb.className = "switch-button activated", Nb.className = "markdown-view");
    chrome.app.window.current().getBounds();
    $(Pb).on("click", function () {
        fc(this.id, "markdown-view")
    });
    $(Qb).on("click", function () {
        fc(this.id, "normal")
    });
    $(Rb).on("click", function () {
        fc(this.id, "conversion-view")
    });
    Mousetrap.bind(["command+alt+left", "ctrl+alt+left"], function () {
        gc("left");
        return !1
    });
    Mousetrap.bind(["command+alt+right", "ctrl+alt+right"], function () {
        gc("right");
        return !1
    });
    W.setAttribute("rel",
        "stylesheet");
    W.setAttribute("type", "text/css"); - 1 != navigator.appVersion.indexOf("Mac") ? (W.setAttribute("href", "css/window-frame-mac.css"), Wb.setAttribute("class", "cta little-icon-mac-close"), Xb.setAttribute("class", "cta little-icon-mac-maximize"), Yb.setAttribute("class", "cta little-icon-mac-minimize")) : -1 != navigator.appVersion.indexOf("Win") ? (W.setAttribute("href", "css/window-frame-windows.css"), Wb.setAttribute("class", "cta little-icon-win-close"), Xb.setAttribute("class", "cta little-icon-win-maximize"),
        Yb.setAttribute("class", "cta little-icon-win-minimize")) : -1 != navigator.appVersion.indexOf("Linux") ? (W.setAttribute("href", "css/window-frame-linux.css"), Wb.setAttribute("class", "cta little-icon-lin-close"), Xb.setAttribute("class", "cta little-icon-lin-maximize"), Yb.setAttribute("class", "cta little-icon-lin-minimize")) : (W.setAttribute("href", "css/window-frame-chromeos.css"), Wb.setAttribute("class", "cta little-icon-chr-close"), Xb.setAttribute("class", "cta little-icon-chr-maximize"), Yb.setAttribute("class",
        "cta little-icon-chr-minimize"));
    Sb.appendChild(W);
    hc = chrome.app.window.current().getBounds();
    $(Tb).on("click", ic);
    $(Ub).on("click", jc);
    $(Wb).on("click", kc);
    Mousetrap.bind(["command+w", "ctrl+w"], function () {
        kc();
        return !1
    });
    $(Xb).on("click", lc);
    $(Yb).on("click", mc)
};
var H, I, X, Y = "",
    ma, Z = {}, nc = "recentFile1 recentFile2 recentFile3 recentFile4 recentFile5 recentFile6 recentFile7 recentFileId1 recentFileId2 recentFileId3 recentFileId4 recentFileId5 recentFileId6 recentFileId7".split(" ");

function oc(a) {
    7 >= a && chrome.storage.local.get(nc, function (c) {
        void 0 != c["recentFile" + a] && chrome.fileSystem.isRestorable(c["recentFileId" + a], function (d) {
            d ? chrome.fileSystem.restoreEntry(c["recentFileId" + a], function (c) {
                c ? oc(a + 1) : (document.getElementById("recent-" + a).setAttribute("class", "recent-file deleted"), pc(a, "check"))
            }) : (document.getElementById("recent-" + a).setAttribute("class", "recent-file deleted"), pc(a, "check"))
        })
    })
}

function Pa() {
    oc(1);
    I.innerHTML = " ";
    chrome.storage.local.get(nc, function (a) {
        for (var c = 1; 7 >= c; c++)
            if (void 0 != a["recentFile" + c]) I.innerHTML += '<li class="recent-file" id="recent-' + c + '"><div class="recent-file-wrapped"><p>' + m(a["recentFile" + c].toString()) + '</p><div class="delete-recent-button little-icon-delete" id="delete-button-' + c + '"></div></div></li>';
            else break;
        $(".recent-file").on("click", function (a) {
            $(a.target).closest("#delete-button-" + this.id.charAt(this.id.length - 1)).length || (ma = this.id.charAt(this.id.length -
                1).valueOf(), Y = "recentFileId" + this.id.charAt(this.id.length - 1), chrome.storage.local.get(Y, function (a) {
                chrome.fileSystem.restoreEntry(a[Y], function (a) {
                    va(a);
                    H.className = "hidden"
                })
            }))
        });
        $(".delete-recent-button").on("click", function () {
            na(this.id.charAt(this.id.length - 1))
        });
        X = document.createElement("li");
        X.setAttribute("id", "recent-files-info");
        " " != I.innerHTML ? (X.setAttribute("class", "clear-all"), X.innerHTML = '<div class="icon-recent-clear"></div><span class="clear-all-text">Clear all</span>') : (X.setAttribute("class",
            " "), X.innerHTML = "No recent document.");
        I.appendChild(X);
        $(".clear-all").on("click", function () {
            qc()
        })
    })
}

function wa(a, c) {
    chrome.storage.local.get(nc, function (d) {
        for (var l = 1; 7 >= l; l++)
            if (void 0 == d["recentFile" + l] || d["recentFile" + l] == a.fullPath || 7 == l) {
                for (; 0 < l; l--) 1 < l ? (Y = ("recentFileId" + l).toString(), Z[Y] = d["recentFileId" + (l - 1)], chrome.storage.local.set(Z), Z = {}, Y = ("recentFile" + l).toString(), Z[Y] = d["recentFile" + (l - 1)], chrome.storage.local.set(Z), Z = {}) : (chrome.storage.local.set({
                        recentFileId1: chrome.fileSystem.retainEntry(a)
                    }), chrome.storage.local.set({
                        recentFile1: a.fullPath
                    }), Pa(), void 0 != c && "quit" == c &&
                    ic());
                break
            }
    })
}

function na(a) {
    document.getElementById("recent-" + a).setAttribute("class", "recent-file deleted");
    setTimeout(function () {
        pc(a, "display")
    }, 100)
}

function pc(a, c) {
    chrome.storage.local.get(nc, function (d) {
        if (void 0 != d["recentFile" + a]) {
            for (var l = parseInt(a); 7 >= l; l++)
                if (void 0 != d["recentFile" + (l + 1)]) Y = ("recentFileId" + l).toString(), Z[Y] = d["recentFileId" + (l + 1)], chrome.storage.local.set(Z), Z = {}, Y = ("recentFile" + l).toString(), Z[Y] = d["recentFile" + (l + 1)], chrome.storage.local.set(Z), Z = {};
                else {
                    Y = ("recentFileId" + l).toString();
                    chrome.storage.local.remove(Y);
                    Y = ("recentFile" + l).toString();
                    chrome.storage.local.remove(Y);
                    Y = "";
                    break
                }
                "display" == c ? Pa() : "check" ==
                c && oc(a)
        }
    })
}

function qc() {
    chrome.storage.local.get(nc, function (a) {
        for (var c = 1; 7 >= c; c++)
            if (void 0 == a["recentFile" + (c + 1)]) {
                rc(c);
                break
            }
    })
}

function rc(a) {
    chrome.storage.local.get(nc, function () {
        Y = ("recentFileId" + a).toString();
        chrome.storage.local.remove(Y);
        Y = ("recentFile" + a).toString();
        chrome.storage.local.remove(Y);
        Y = "";
        1 < a ? rc(a - 1) : I.innerHTML = '<li id="recent-files-info" class=" ">No recent document.</li>'
    })
}

function $b() {
    $(aa).attr("title", "Export");
    $(ba).attr("title", "New");
    $(ca).attr("title", "Open");
    $(da).attr("title", "Print");
    $(ea).attr("title", "Recent");
    $(fa).attr("title", "Save");
    $(ga).attr("title", "Save as")
}
var ja;

function ac(a) {
    "markdown" == a ? $(h).scrollTop($(g).scrollTop() / (g.scrollHeight - g.offsetHeight) * (h.scrollHeight - h.offsetHeight)) : $(g).scrollTop($(h).scrollTop() / (h.scrollHeight - h.offsetHeight) * (g.scrollHeight - g.offsetHeight));
    ja = $(g).scrollTop() + g.offsetHeight == g.scrollHeight ? !0 : !1
}
var bc, cc, sc = 0,
    tc = new Date;

function Zb() {
    sc++;
    0 == sc % 50 && p("50 inputs in the textarea")
}

function uc() {
    void 0 != bc && void 0 != cc && navigator.onLine && chrome.storage.local.get("analytics", function (a) {
        !1 != a.analytics && cc.sendEvent("Window lifetime", "Window has been closed", (parseInt(((new Date).getTime() - tc.getTime()) / 1E3 / 60) + ":" + parseInt(((new Date).getTime() - tc.getTime()) / 1E3 % 60)).toString())
    })
}

function p(a) {
    void 0 != bc && void 0 != cc && navigator.onLine && chrome.storage.local.get("analytics", function (c) {
        !1 != c.analytics && cc.sendEvent(a)
    })
}

function Ba() {
    chrome.storage.local.get("analytics", function (a) {
        void 0 != a.analytics ? bc.t.setTrackingPermitted(a.analytics) : (chrome.storage.local.set({
            analytics: !0
        }), bc.t.setTrackingPermitted(!0))
    })
}
var Qa, J, Kb, Jb, Lb;

function dc() {
    chrome.storage.local.get("style", function (a) {
        void 0 != a.style ? ("home" == a.style ? Jb.checked = !0 : "clinic" == a.style ? Kb.checked = !0 : Lb.checked = !0, vc(a.style)) : (Jb.checked = !0, ec("home"))
    })
}

function ec(a) {
    vc(a);
    chrome.storage.local.set({
        style: a
    })
}

function vc(a) {
    for (var c = 0; c < document.styleSheets.length; c++) - 1 != document.styleSheets.item(c).href.indexOf("css/themes/") && (-1 == document.styleSheets.item(c).href.indexOf(a) ? document.styleSheets.item(c).disabled = !0 : document.styleSheets.item(c).disabled = !1)
}
var Mb, Ob, Qb, Rb, Pb, Nb, V = [];

function fc(a, c) {
    for (var d = 0; d < V.length; d++) V[d].className = V[d].id != a ? "switch-button" : "switch-button activated";
    Nb.className = c;
    Ob.className = c;
    "markdown-view" == c ? Mb.className = c : Mb.removeAttribute("class")
}

function gc(a) {
    if (1159 < window.innerWidth)
        for (var c = 0; c < V.length; c++) "switch-button activated" == V[c].className && ("left" == a && 0 < c ? V[c - 1].click() : "right" == a && c < V.length - 1 && V[c + 1].click(), c = V.length);
    else "left" == a ? Pb.click() : Rb.click()
}
var Ta, Ra, Sb, hc, q, Tb, Ub, Vb, W = document.createElement("link"),
    Sa, Wb, Xb, Yb, wc;

function za() {
    Vb.innerHTML = "" != g.value ? void 0 == q || g.value != q ? '<span class="little-icon-unsaved"></span>' : "" : void 0 != q ? '<span class="little-icon-unsaved"></span>' : ""
}

function kc() {
    chrome.runtime.getBackgroundPage(function (a) {
        a.jBond(chrome.app.window.current().getBounds())
    });
    '<span class="little-icon-unsaved"></span>' == Vb.innerHTML ? Ra.className = "visible" : (uc(), chrome.app.window.current().close())
}

function lc() {
    -1 == navigator.appVersion.indexOf("Win") ? chrome.app.window.current().isMaximized() ? chrome.app.window.current().restore() : chrome.app.window.current().maximize() : chrome.app.window.current().getBounds().width < screen.availWidth || chrome.app.window.current().getBounds().height < screen.availHeight ? (wc = chrome.app.window.current().getBounds(), chrome.app.window.current().setBounds({
        left: screen.availLeft,
        top: screen.availTop,
        width: screen.availWidth,
        height: screen.availHeight
    })) : void 0 != wc ? chrome.app.window.current().setBounds(wc) :
        chrome.app.window.current().setBounds({
            left: (screen.availWidth - Math.round(0.85 * screen.width)) / 2,
            top: (screen.availHeight - Math.round(0.85 * screen.height)) / 2,
            width: Math.round(0.85 * screen.width),
            height: Math.round(0.85 * screen.height)
        })
}

function mc() {
    chrome.app.window.current().minimize()
}

function ic() {
    uc();
    chrome.runtime.getBackgroundPage(function (a) {
        a.jBond(chrome.app.window.current().getBounds())
    })
}

function xc() {
    b.createWriter(function (a) {
        e = !1;
        a.onwriteend = function () {
            e ? wa(b, "quit") : (e = !0, this.truncate(this.position))
        };
        a.write(new Blob([g.value], {
            type: "plain/text"
        }))
    }, k)
}

function yc() {
    chrome.fileSystem.chooseEntry({
        type: "saveFile",
        suggestedName: "document.md"
    }, function (a) {
        a && a.createWriter(function (c) {
            e = !1;
            c.onwriteend = function () {
                e ? wa(a, "quit") : (e = !0, this.truncate(this.position))
            };
            c.write(new Blob([g.value], {
                type: "plain/text"
            }))
        }, k)
    })
}

function jc() {
    void 0 == b || "md&nbsp;-" != n.innerHTML.substring(n.innerHTML.length - 9) ? yc() : xc()
}
chrome.app.window.current().onBoundsChanged.addListener(function () {
    1160 > chrome.app.window.current().getBounds().width && "switch-button activated" == Qb.className ? Pb.click() : 1160 <= chrome.app.window.current().getBounds().width && 1160 > hc.width && Qb.click();
    1600 > chrome.app.window.current().getBounds().width && 1600 <= hc.width ? $b() : 1600 <= chrome.app.window.current().getBounds().width && 1600 > hc.width && ($(aa).removeAttr("title"), $(ba).removeAttr("title"), $(ca).attr("title"), $(da).attr("title"), $(ea).attr("title"),
        $(fa).attr("title"), $(ga).attr("title"));
    hc = chrome.app.window.current().getBounds()
});