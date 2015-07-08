/*
 *   fixedNav
 */
require(['jquery', 'modernizr'], function($, Modernizr) {

    var app = {};

    app.fixedNav = (function() {
        var module = {};

        var $fixedNav = $('.nav--fixed');

        // Creates a spacer, this is to push the content of the page down the same size of the floating menu
        var $fixedNavSpacer = $('<div />', {
            "class": "nav-spacer",
            "height": $fixedNav.outerHeight()
        });

        var offset = 0;
        var minWidth = Modernizr.mq('only screen and (min-width: 1060px)');
        var windowWidth = $(window).width();

        module.init = function() {

            var removeSpacer = function() {
                $fixedNavSpacer.remove();
            };

            var addSpacer = function() {
                $fixedNav
                    .before($fixedNavSpacer);
            };

            var fixedNav = function() {
                $fixedNav
                    .addClass("is-fixed")
            };

            var relativeNav = function() {
                $fixedNavSpacer.remove();
                $fixedNav
                    .removeClass("is-fixed")
            };


            var navController = function() {
                if (minWidth === true) {
                    if (!$fixedNav.hasClass('is-fixed') && $(window).scrollTop() > $fixedNav.offset().top) {
                        addSpacer();
                        fixedNav();
                    } else if ($fixedNav.hasClass('is-fixed') && $(window).scrollTop() < $fixedNavSpacer.offset().top) {
                        relativeNav();
                    }
                }
            };

            $(window).scroll(function() {
                navController();
            });

            navController();
        };

        return module;
    })();

    $(document).ready(function() {
        app.fixedNav.init();
    });
});