document.addEventListener('DOMContentLoaded', function(){
    var request = new XMLHttpRequest(),
        element = document.querySelector('.quote');;
    request.open('GET', 'https://api.github.com/zen', true);
    request.onload = function() {
        if (request.status >= 200 && request.status < 400){
            element.innerHTML = request.responseText;
        } else {
            console.log('API rate limit exceeded...');
        }
    };
    request.onerror = function() {
        console.log('Something is wrong...');
    };
    request.send();
});