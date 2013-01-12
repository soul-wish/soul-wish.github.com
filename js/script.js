(function () {
    var year,
        date = new Date();
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
})();