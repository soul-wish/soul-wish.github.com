
function getUserInfo (username) {
    var dfd = $.Deferred();
    var ajax_url = 'http://api.twitter.com/1/users/show.json?screen_name=';
    $.ajax({
        url : ajax_url+username,
        dataType : "jsonp",
        success : dfd.resolve
    });
    return dfd.promise();
}

function getBday (date) {
    var monthNames = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    var bdate = new Date(date)
    var bday = bdate.getDate();
    bday += ' ' + monthNames[bdate.getMonth()] + ' ';
    bday += bdate.getFullYear() + ' года';
    return bday;
}

function getWord (days, form1, form2, form3) {
    word = (
        days % 10 == 1 && days % 100 != 11 
            ? form1
            : days % 10 >= 2 && days % 10 <= 4 && (days % 100 < 10 || days % 100 >= 20) 
                ? form2
                : form3
    );
    return word;
}

function getDays (date) {
    var days,
        day,
        curDate = new Date(),
        usrDate = new Date(date),
        delta = curDate - usrDate;
    days = Math.floor(delta / 1000 / 60 / 60 / 24);
    day = getWord(days, 'день', 'дня', 'дней');
    days = days.toString();
    days += ' ' + day;
    return days;
}

function tweetMe (results) {
    var button = 'http://twitter.com/share?url=http%3A%2F%2Fsoulwish.pp.ua%2Ftwitterbday&text=';
    button += getBday(results.created_at);
    button += ' мой Твиттер День Рождения! @';
    button += results.screen_name + ' с Твиттером уже ';
    button += getDays(results.created_at);
    button += '&via=tweet_bday';
    button = button.replace(/ /gi, '%20');
    return button;
}

function loadBirthdays () {
    var url = 'http://search.twitter.com/search.json?callback=?&rpp=15&q=@tweet_bday';
    var count = 1;
    $.getJSON( url, function (data) {
        tweets.empty();
        $.each( data.results, function (i,tweet) {
            getUserInfo(tweet.from_user).then(function (results) { 
                localStorage[count] = JSON.stringify(results);
                var html = '<li>';
                var image = results.profile_image_url.replace('normal', 'bigger');
                html += '<div class="icon"><img src="'+image+'" alt="'+results.name+'" /></div>';
                html += '<a href="http://twitter.com/'+results.screen_name+'" class="name" target="_blank">'+results.name+'</a>';
                html += '<span class="bday">' +getBday(results.created_at)+ '</span>';
                html += '<span class="bday">' +getDays(results.created_at)+ '</span>';
                html += '<a href="'+tweetMe(results)+'" title="Твитнуть" class="tweetme">&nbsp;</a>'
                html += '</li>';
                tweets.append(html);
                count++;
            });
        });
    });
    $.cookie('cache', 1);
}

function loadCachedBirthdays () {
    tweets.empty();
    var user;
    var storageLength = localStorage.length;
    for (var i=1; i<=storageLength; i++) {
        user = JSON.parse(localStorage[i]);
        if (typeof user === 'object') {
            var html = '<li>';
            var image = user.profile_image_url.replace('normal', 'bigger');
            html += '<div class="icon"><img src="'+image+'" alt="'+user.name+'" /></div>';
            html += '<a href="http://twitter.com/'+user.screen_name+'" class="name" target="_blank">'+user.name+'</a>';
            html += '<span class="bday">' +getBday(user.created_at)+ '</span>';
            html += '<span class="bday">' +getDays(user.created_at)+ '</span>';
            html += '<a href="'+tweetMe(user)+'" title="Твитнуть" class="tweetme">&nbsp;</a>'
            html += '</li>';
            tweets.append(html);
        }
    }
}

(function () {
    tweets = $('.tweets');
    var exptime = new Date;
    exptime.setTime(exptime.getTime() + (6 * 60 * 1000)); 
    $.cookie.json = true;
    $.cookie.defaults = { expires: exptime, path: '/twitterbday' };
    $.ajaxSetup({ cache: true });
    if ($.cookie('cache') == null) {
        loadBirthdays();
    } else {
        loadCachedBirthdays();
    };
    $('.info').on('click', function (e) {
        e.preventDefault();
        $('.infobar').slideToggle('slow');
        $(this).toggleClass('active');
    });
})();