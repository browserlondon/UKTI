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