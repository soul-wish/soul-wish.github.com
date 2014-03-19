document.addEventListener('DOMContentLoaded', function(){
    var request = new XMLHttpRequest(),
        element = document.querySelector('.quote'),
        button = document.querySelector('.reload');

    function loadQuote() {
        request.open('GET', 'https://api.github.com/zen', true);
        request.onload = function() {
            if (request.status >= 200 && request.status < 400){
                element.innerHTML = request.responseText;
            } else {
                element.innerHTML = '// API rate limit exceeded...';
            }
        };
        request.onerror = function() {
            console.log('Something is wrong...');
        };
        request.send();
    };

    loadQuote();

    button.addEventListener('click', loadQuote);
});