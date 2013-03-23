
function getUserInfo (username) {
    var dfd = $.Deferred();
    var user_data;
    var ajax_url = 'http://api.twitter.com/1/users/show.json?screen_name=';
    $.ajax({
        url : ajax_url+username,
        dataType : "jsonp",
        success : dfd.resolve
    });
    return dfd.promise();
}

function getBday (date) {
    var parsedDate = Date.parse(date);
    var bday = parsedDate.getDate();
    bday += '.' + (parsedDate.getMonth()+1) + '.';
    bday += parsedDate.getFullYear();
    return bday;
}

function loadBirthdays () {
    var url = 'http://search.twitter.com/search.json?callback=?&rpp=15&q=to%3Acsscreatures';
    $.getJSON( url, function (data) {
        tweets.empty();
        $.each( data.results, function (i,tweet) {
            getUserInfo(tweet.from_user).then(function (results) { 
                $.cookie(results.status.id, results);
                var html = '<li>';
                var image = results.profile_image_url.replace('normal', 'bigger');
                html += '<div class="icon"><img src="'+image+'" alt="'+results.name+'" /></div>';
                html += '<a href="http://twitter.com/'+results.screen_name+'" class="name" target="_blank">'+results.name+'</a>';
                html += '<span class="bday">' +getBday(results.created_at)+ '</span>';
                html += '</li>';
                tweets.append(html);
            });
        });
    });
    $.cookie('cache', 1);
}

function loadCachedBirthdays () {
    tweets.empty();
    var cookies = $.cookie();
    $.each( cookies, function (i, cookie) {
        if (typeof cookie === 'object') {
            var html = '<li>';
            var image = cookie.profile_image_url.replace('normal', 'bigger');
            html += '<div class="icon"><img src="'+image+'" alt="'+cookie.name+'" /></div>';
            html += '<a href="http://twitter.com/'+cookie.screen_name+'" class="name" target="_blank">'+cookie.name+'</a>';
            html += '<span class="bday">' +getBday(cookie.created_at)+ '</span>';
            html += '</li>';
            tweets.append(html);
        }
    });
}

(function () {
    tweets = $('.tweets');
    var exptime = new Date;
    exptime.setTime(exptime.getTime() + (6 * 60 * 1000)); 
    $.cookie.json = true;
    $.cookie.defaults = { expires: exptime, path: '/twitterbday' };
    $.ajaxSetup({ cache: true });
    if ($.cookie('cache') == null) {
        console.log('uncached version');
        loadBirthdays();
    } else {
        console.log('cached version');
        loadCachedBirthdays();
    };
})();