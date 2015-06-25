require(['jquery', 'modernizr'], function($) {

    var app = {};

    app.modernizrSVG = (function(){
        var module = {};

        var $svgImage = $('*[src*="svg"]');

        module.init = function(){
            if (Modernizr.svg) {
                return;
            } else {
                $svgImage.attr('src', function(){
                    return $(this).attr('src').replace('.svg', '.png');
                });
            }
        };

        return module;
    })();

    $(document).ready(function() {
        app.modernizrSVG.init();
    });
});