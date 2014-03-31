$(function() {
    var server,
        messages;

    server = new Firebase("https://boiling-fire-1984.firebaseio.com");
    messages = server.child("messages");
    messages.push({name: "Soulwish", text: "Hello!"});
});