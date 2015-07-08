define('jquery', [], function() { return jQuery; });
define('modernizr', [], function() { return Modernizr });

require.config({
    enforceDefine: true,
    paths: {
        smoothScroll: 'libs/smoothscroll.min',
        fastclick: 'libs/fastclick',
        scrollSpy: 'libs/scrollspy.min',
    },
});

requirejs(["app/back-to-top"]);
requirejs(["app/fixed-nav"]);
requirejs(["app/polyfills"]);
requirejs(["app/collapsible"]);

var hasClass = function (elem, className) {
    return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}

var addClass = function (elem, className) {
    if (!hasClass(elem, className)) {
        elem.className += ' ' + className;
    }
}

var removeClass = function (elem, className) {
    var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}
