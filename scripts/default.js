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

document.addEventListener("keyup",
    Konami.code(function () {
        audio = new Audio("/random/mainframe.wav");
        audio.play();
        audio.loop = true;
    })

);
