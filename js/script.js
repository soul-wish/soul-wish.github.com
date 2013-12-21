(function () {
    var year,
        date = new Date(),
        oldTranslate,
        newTranslate,
        enRu = $('.en-ru'),
        translate = $('.translate');
    year = date.getFullYear();
    $('.copy').append(year);
    $('ul.projects').roundabout({
        autoplay: 'true',
        autoplayDuration: 8000,
        autoplayPauseOnHover: 'true'
    });
    $('a.info').on('click', function (e) {
    	e.preventDefault();
    	$(this).parent().find('.testimonial').show(300);
    });
    $('a.close').on('click', function (e) {
    	e.preventDefault();
    	$(this).parent().hide(300);
    });
    enRu.on('click', function(){
        translate.each(function() {
            oldTranslate = $(this).text();
            newTranslate = $(this).attr('data-translate');
            $(this).attr('data-translate', oldTranslate).text(newTranslate);
        });
    });
})();