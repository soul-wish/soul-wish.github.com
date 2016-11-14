$(document).ready(function() {
    $.get('http://fontawesome.io/icons.yml').then(function(data) {
        $('#icons').val(JSON.stringify(jsyaml.load(data), undefined, 4));
        var editor = CodeMirror.fromTextArea(document.getElementById('icons'), {
            lineNumbers: true,
            mode:  {name: 'javascript', json: true},
            theme: 'material'
        });
    });
});
