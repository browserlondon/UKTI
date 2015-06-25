require(['fastclick'], function(FastClick) {

    var app = {};

    app.fastclick = (function() {
        var module = {};

        module.init = function() {
            if ('addEventListener' in document) {
                document.addEventListener('DOMContentLoaded', function() {
                    FastClick.attach(document.body);
                }, false);
            }
        };

        return module;
    })();

    app.fastclick.init();

});