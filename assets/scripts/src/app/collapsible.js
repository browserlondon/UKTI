require(['jquery'], function($) {

    var app = {};

    app.collapsible = (function() {
        var module = {};

        module.init = function() {
            var $collapsibleToggle = $('.js-collapsible-toggle');

            $collapsibleToggle.on('click', function(e) {
                var $this = $(this);
                var $parent = $this.closest('.section');
                var hideText = $this.data('hide-text');
                var showText = $this.data('show-text');

                if($parent.hasClass('closed')) {
                    if(hideText) {
                        $this.text(hideText);
                    } else {
                        $this.text('Hide fields');
                    }
                    $parent.removeClass('closed').addClass('open');
                } else {
                    if(showText) {
                        $this.text(showText);
                    } else {
                        $this.text('Show fields');
                    }
                    $parent.removeClass('open').addClass('closed');
                }

                e.preventDefault;
            });
        };

        return module;
    })();

    
    $(document).ready(function() {
        app.collapsible.init();
    });

});
