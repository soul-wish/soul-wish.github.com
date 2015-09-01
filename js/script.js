(function () {
    var year,
        date = new Date(),
        oldTranslate,
        newTranslate,
        enRu = $('.en-ru'),
        translate = $('.translate');

    year = date.getFullYear();
    $('.copy').append(year);
    enRu.on('click', function(){
        translate.each(function() {
            oldTranslate = $(this).text();
            newTranslate = $(this).attr('data-translate');
            $(this).attr('data-translate', oldTranslate).text(newTranslate);
        });
    });
    console.log('%c Hey Ya! Welcome to my website ;)', 'font-size: 40px; line-height: 2; font-weight: bold; text-align: center; color: orange');
})();