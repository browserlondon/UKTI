// define('jquery', [], function() {
//     return jQuery;
// });

// require.config({
//     paths: {
//         modernizr: 'libs/modernizr-custom',
//         smoothScroll: 'libs/smoothscroll.min',
//         fastclick: 'libs/fastclick',
//         scrollSpy: 'libs/scrollspy.min',
//         fancybox: 'libs/fancybox.min',
//     },
// });

// requirejs(["app/click"]);
// requirejs(["app/polyfills"]);
// requirejs(["app/smooth"]);
// requirejs(["app/back-to-top"]);
// requirejs(["app/animations"]);
// requirejs(["app/navigation"]);

// var hasClass = function (elem, className) {
//     return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
// }

// var addClass = function (elem, className) {
//     if (!hasClass(elem, className)) {
//         elem.className += ' ' + className;
//     }
// }

// var removeClass = function (elem, className) {
//     var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
//     if (hasClass(elem, className)) {
//         while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
//             newClass = newClass.replace(' ' + className + ' ', ' ');
//         }
//         elem.className = newClass.replace(/^\s+|\s+$/g, '');
//     }
// }
