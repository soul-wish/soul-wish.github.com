(function() {
    var App = {
        Models: {},
        Views: {},
        Collections: {}
    };

    App.Models.Message = Backbone.Model.extend({
        defaults: {
            author: '',
            message: ''
        }
    });

    App.Views.Message = Backbone.View.extend({
        tagName: 'li',
        template: _.template('<%= text %><button class="edit">edit</button><button class="delete">delete</button>'),
        initialize: function() {
            this.model.on('change', this.render, this);
            this.model.on('destroy', this.removeMessage, this);
        },
        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });

    App.Collections.Messages = Backbone.Firebase.Collection.extend({
        model: App.Models.Message,
        firebase: new Firebase("https://boiling-fire-1984.firebaseio.com/messages")
    });

    App.Views.App = Backbone.View.extend({
        tagName: 'ul',
        initialize: function() {
            this.collection.on('add', this.addMessage, this);
        },
        render: function() {
            this.collection.each(this.addMessage, this);
            return this;
        },
        addMessage: function(message) {
            var messageView = new App.Views.Message({model: message});
            this.$el.append(messageView.render().el);
        }
    });

    App.Views.AddMessage = Backbone.View.extend({
        el: '.form',
        events: {
            'submit': 'submit'
        },
        submit: function(e) {
            e.preventDefault();
            var newMessage = $(e.currentTarget).find('.input').val();
            var message = new App.Models.Message({message: newMessage});
            this.collection.add(message);
        }
    });

//    var collection = new App.Collections.Message([model1, model2, model3]);
//    collection = new Messages();

//    var addMessage = new App.Views.AddMessage({collection: collection})
    var view = new App.Views.App({collection: collection});
    $('.list').append(view.render().el);
}());
