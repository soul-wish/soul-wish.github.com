(function () {
    var year,
        date = new Date(),
        oldTranslate,
        newTranslate,
        enRu = $('.en-ru'),
        translate = $('.translate'),
        pageBg1 = $('.page-bg1'),
        pageBg2 = $('.page-bg2'),
        pageBg3 = $('.page-bg3');

    $.fn.bgParallax = function(options) {
        var defaults = { moveFactor: 5, zIndexValue: "-1", targetContainer: 'body' };
    
        var options = $.extend(defaults, options);
    
        return this.each(function() {
            var o = options;
            var background = $(this);
            
            $(o.targetContainer).on('mousemove', function(e){
            
                mouseX = e.pageX;
                mouseY = e.pageY;
                
                windowWidth = $(window).width();
                windowHeight = $(window).height();
                
                percentX = ((mouseX/windowWidth)*o.moveFactor) - (o.moveFactor/2);
                percentY = ((mouseY/windowHeight)*o.moveFactor) - (o.moveFactor/2);

                leftString = (0-percentX-o.moveFactor)+"%";
                rightString = (0-percentX-o.moveFactor)+"%";
                topString = (0-percentY-o.moveFactor)+"%";
                bottomString = (0-percentY-o.moveFactor)+"%";

                background[0].style.left = leftString;
                // background[0].style.right = rightString;
                background[0].style.top = topString;
                // background[0].style.bottom = bottomString;
                if(o.zIndexValue) { 
                    background[0].style.zIndex = o.zIndexValue;
                }
            });
        });
    };
    
    pageBg1.bgParallax({
        moveFactor: 1
    });

    pageBg2.bgParallax({
        moveFactor: 3
    });

    pageBg3.bgParallax({
        moveFactor: 9
    });

    year = date.getFullYear();
    $('.copy').append(year);
    enRu.on('click', function(){
        translate.each(function() {
            oldTranslate = $(this).text();
            newTranslate = $(this).attr('data-translate');
            $(this).attr('data-translate', oldTranslate).text(newTranslate);
        });
    });
})();