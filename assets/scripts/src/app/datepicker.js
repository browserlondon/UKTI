require(['jquery', 'pikaday'], function($) {

    var app = {};

    app.datepicker = (function() {
        var module = {};

        module.init = function() {
            $datepicker = $('.datepicker')[0];
            // activate datepickers for all elements with a class of `datepicker`
            $datepicker.pikaday({ firstDay: 1 });
        };

        return module;
    })();

    app.datepicker.init();

});