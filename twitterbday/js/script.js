
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
    //var parsedDate = Date.parse(date);
    var bdate = new Date(date)
    var bday = bdate.getDate();
    bday += '.' + (bdate.getMonth()+1) + '.';
    bday += bdate.getFullYear();
    return bday;
}

function loadBirthdays () {
    var url = 'http://search.twitter.com/search.json?callback=?&rpp=5&q=to%3Acsscreatures';
    var count = 1;
    $.getJSON( url, function (data) {
        tweets.empty();
        $.each( data.results, function (i,tweet) {
            getUserInfo(tweet.from_user).then(function (results) { 
                //$.cookie(results.status.id, results);
                localStorage[count] = JSON.stringify(results);
                console.log('2');
                var html = '<li>';
                var image = results.profile_image_url.replace('normal', 'bigger');
                html += '<div class="icon"><img src="'+image+'" alt="'+results.name+'" /></div>';
                html += '<a href="http://twitter.com/'+results.screen_name+'" class="name" target="_blank">'+results.name+'</a>';
                html += '<span class="bday">' +getBday(results.created_at)+ '</span>';
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
    //var cookies = $.cookie();
    for (var i=1; i<6; i++) {
        user = JSON.parse(localStorage[i]);
        console.log(i);
        if (user === 'string') {
            console.log('1');
            var html = '<li>';
            var image = user.profile_image_url.replace('normal', 'bigger');
            html += '<div class="icon"><img src="'+image+'" alt="'+user.name+'" /></div>';
            html += '<a href="http://twitter.com/'+user.screen_name+'" class="name" target="_blank">'+user.name+'</a>';
            html += '<span class="bday">' +getBday(user.created_at)+ '</span>';
            html += '</li>';
            tweets.append(html);
        }
    }
    // $.each( cookies, function (i, cookie) {
    //     if (typeof cookie === 'object') {
    //         var html = '<li>';
    //         var image = cookie.profile_image_url.replace('normal', 'bigger');
    //         html += '<div class="icon"><img src="'+image+'" alt="'+cookie.name+'" /></div>';
    //         html += '<a href="http://twitter.com/'+cookie.screen_name+'" class="name" target="_blank">'+cookie.name+'</a>';
    //         html += '<span class="bday">' +getBday(cookie.created_at)+ '</span>';
    //         html += '</li>';
    //         tweets.append(html);
    //     }
    // });
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