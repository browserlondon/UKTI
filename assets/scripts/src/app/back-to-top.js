define(function() {

    var app = {};

    app.jump = (function() {
        var module = {};

        module.init = function() {
            var backToTopLink = document.querySelector('.back-to-top'),
                offset = 500;

            var backToTopController = function() {
                var scrollBarPosition = window.pageYOffset | document.body.scrollTop;
                if(backToTopLink) {
                    if (scrollBarPosition > offset) {
                        if (backToTopLink.classList) {
                            backToTopLink.classList.add('back-to-top--active');
                        } else {
                            backToTopLink.className += ' ' + 'back-to-top--active';
                        }
                    } else {
                        if(backToTopLink.classList.contains('back-to-top--active')) {
                            backToTopLink.classList.remove('back-to-top--active');
                        }
                    }
                }
            };

            document.addEventListener('scroll', backToTopController);

            backToTopController();
        };

        return module;
    })();

    app.jump.init();
});

    
