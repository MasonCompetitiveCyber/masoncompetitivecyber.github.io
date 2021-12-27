﻿var matched, browser;
// Use of jQuery.browser is frowned upon.
// More details: http://api.jquery.com/jQuery.browser
// jQuery.uaMatch maintained for back-compat
jQuery.uaMatch = function (ua) {
    ua = ua.toLowerCase();
    var match = /(chrome)[ \/]([\w.]+)/.exec(ua) ||
        /(webkit)[ \/]([\w.]+)/.exec(ua) ||
        /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) ||
        /(msie) ([\w.]+)/.exec(ua) ||
        ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) ||
        [];

    return {
        browser: match[1] || "",
        version: match[2] || "0"
    };
};

matched = jQuery.uaMatch(navigator.userAgent);
browser = {};
if (matched.browser) {
    browser[matched.browser] = true;
    browser.version = matched.version;
}
// Chrome is Webkit, but Webkit is also Safari.
if (browser.chrome) {
    browser.webkit = true;
} else if (browser.webkit) {
    browser.safari = true;
}
jQuery.browser = browser;

$(document).ready(function () {
    $('iframe').each(function () {/*fix youtube z-index*/
        var ifr_source = $(this).attr('src') || "";
        if (ifr_source.length > 0) {
            var url = $(this).attr("src");
            if (url.indexOf("youtube.com") >= 0) {
                if (url.indexOf("?") >= 0) {
                    $(this).attr("src", url + "&wmode=transparent");
                } else {
                    $(this).attr("src", url + "?wmode=transparent");
                }
            }
        }
    });

    $('.ddmenu li.dropdown').hover(function () {
        if ($.browser.msie && (parseInt($.browser.version, 10) === 8 || parseInt($.browser.version, 10) === 7)) {
            $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
            return;
        }
        var width = Math.max($(window).innerWidth(), window.innerWidth);
        if (width > 979) $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
    }, function () {
        if ($.browser.msie && (parseInt($.browser.version, 10) === 8 || parseInt($.browser.version, 10) === 7)) {
            $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
            return;
        }
        var width = Math.max($(window).innerWidth(), window.innerWidth);
        if (width > 979) $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
    });

    $('.ddmenu li.dropdown').click(function () {
        $('.dropdown-menu').stop(true, true).delay(200).fadeOut();
        var width = Math.max($(window).innerWidth(), window.innerWidth);
        if (width <= 1024) {
            if ($(this).find('.dropdown-menu').css('display') == 'none') {
                $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
                return false;
            } else {
                /*dropdown already opened. then goto parent link.*/
            }
        }
    });

});

var getJSON = function (url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function () {
        var status = xhr.status;
        if (status === 200) {
            callback(null, xhr.response);
        } else {
            callback(status, xhr.response);
        }
    };
    xhr.send();
};


/*! konami-js v1.0.1 | http://mck.me/mit-license */
var Konami = {}; (function (d, e) { var f = d.sequence = function () { var b = Array.prototype.slice.call(arguments), c = 0; return function (a) { a = a || e.event; a = a.keyCode || a.which || a; if (a === b[c] || a === b[c = 0]) a = b[++c], "function" === typeof a && (a(), c = 0) } }; d.code = function (b) { return f(38, 38, 40, 40, 37, 39, 37, 39, 66, 65, b) } })(Konami, window);

$(document).on('keyup',

    Konami.code(function () {
        audio = new Audio("random/mainframe.wav");
        audio.play();
        audio.loop = true;
    })

);
