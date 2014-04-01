$(function() {
    var server,
        messages;

    server = new Firebase("https://boiling-fire-1984.firebaseio.com");
    messages = server.child("messages");
    messages.push({name: "Soulwish", text: "Hello!"});
    // check if name in localstorage exists
    // if it doesnt - show auth form (just 'insert name' - something like this)
    // save name in localstorage and show chat
    // if name exists - just show chat
});