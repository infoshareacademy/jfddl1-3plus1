/**
 * Created by leon on 18.04.17.
 */
$('#modal-newsletter form').on('submit', function() {
    $.cookie('modalnewsletter', 'true', { expires: 365 });
    window.open('http://feedburner.google.com/fb/a/mailverify?uri=webmastah', 'popupwindow', 'scrollbars=yes,width=550,height=520');
    $('#modal-newsletter').modal('hide');
});

// cookies
var CookieAlert = {
    defines: {
        divID: "CookieAlert",
        cookieName: "agreeCookies",
        cookieValue: "yes",
        cookieExpire: 3
    },
    options: {
        style: "dark",
        position: "bottom",
        opacity: 1,
        displayTime: 0,
        text: "Ten serwis wykorzystuje pliki cookies. Korzystanie z witryny oznacza zgodÄ na ich zapis lub odczyt wg ustawieĹ przeglÄdarki.",
        cookiePolicy: "http://wszystkoociasteczkach"
    },
    setCookie: function(e, o, i) {
        document.cookie = e + "=" + escape(o) + (null === i ? "" : "; expires=" + i.toGMTString()) + "; path=/"
    },
    checkCookie: function(e) {
        if ("" !== document.cookie) {
            var o = document.cookie.split("; ");
            for (i = 0; i < o.length; i++) {
                var t = o[i].split("=")[0],
                    n = o[i].split("=")[1];
                if (t == e) return unescape(n)
            }
        }
    },
    removeDiv: function(e) {
        var o = document.getElementById(e);
        document.body.removeChild(o);
        var i = new Date;
        i.setMonth(i.getMonth() + this.defines.cookieExpire), this.setCookie(this.defines.cookieName, this.defines.cookieValue, i)
    },
    fadeOut: function(e, o) {
        div = document.getElementById(o), div.style.opacity = e / 100, div.style.filter = "alpha(opacity=" + e + ")", 1 == e && (div.style.display = "none", done = !0)
    },
    init: function(e) {
        var o = CookieAlert;
        window.onload = function() {
            for (var i in e) o.options[i] = e[i];
            var t = document.createElement("div");
            t.setAttribute("id", o.defines.divID);
            var n = "position:fixed;" + o.options.position + ":-1px;left:0px;right:0px;width:100%;z-index:1000;padding:10px;font-family:Arial;font-size:14px;opacity:" + o.options.opacity + ";";
            switch (o.options.style) {
                case "light":
                    n += "background-color:#FFF; color:#373737; text-shadow: 1px 1px 0px rgba(0,0,0,0.1); border-top:1px solid #ccc; border-bottom:1px solid #ccc; box-shadow:0px 0px 8px rgba(0, 0, 0, 0.15);";
                    break;
                case "dark":
                    n += "background-color:#1b1b1b; color:#999; text-shadow: 1px 1px 0px rgba(255,255,255,0.1); border-top:1px solid #444; border-bottom:1px solid #444; box-shadow:0px 0px 8px rgba(0, 0, 0, 0.15);"
            }
            t.setAttribute("style", n);
            var s = '<div style="width:52px;display:inline-block;vertical-align:middle;text-align:right;">';
            s += '<a href="' + o.options.cookiePolicy + '"><img src="http://cookiealert.sruu.pl/images/' + o.options.style + '/info.png" style="border:0;" title="Informacje o ciasteczkach"/></a>', s += '<img src="http://cookiealert.sruu.pl/images/' + o.options.style + '/close.png" id="CookieAlertClose" style="border:0;cursor:pointer;margin-left:8px;" title="Zamknij komunikat"/>', s += "</div>";
            var a = '<div style="width:calc(100% - 72px);display:inline-block;vertical-align:middle;text-align:center;">' + o.options.text + "</div>" + s;
            t.innerHTML = a, o.checkCookie(o.defines.cookieName) != o.defines.cookieValue && (document.body.appendChild(t), document.getElementById("CookieAlertClose").addEventListener("click", function() {
                o.removeDiv(o.defines.divID)
            }, !1), o.options.displayTime > 0 && setTimeout(function() {
                for (var e = 100; e >= 1; e--) setTimeout("CookieAlert.fadeOut(" + e + ", CookieAlert.defines.divID)", -1 * (e - 100) * 5)
            }, o.options.displayTime))
        }
    }
};

CookieAlert.init({
    style: 'dark',
    position: 'bottom',
    opacity: '1',
    displayTime: 0,
    cookiePolicy: 'http://wszystkoociasteczkach.pl/',
    text: 'Ten serwis wykorzystuje pliki cookies. Korzystanie z witryny oznacza zgodę na ich zapis lub odczyt wg ustawień przeglądarki.'
});

