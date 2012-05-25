window.BoardListView = Backbone.View.extend({

    tagName:'ul',

    initialize:function () {
        this.model.bind("reset", this.render, this);
        var self = this;
        this.model.bind("add", function (board) {
            $(self.el).append(new BoardListItemView({model:board}).render().el);
        });
    },

    render:function (eventName) {
        _.each(this.model.models, function (board) {
            $(this.el).append(new BoardListItemView({model:board}).render().el);
        }, this);
        return this;
    }
});

window.BoardListItemView = Backbone.View.extend({

    tagName:"li",

    initialize:function () {
        this.template = _.template(tpl.get('board-list-item'));
        this.model.bind("change", this.render, this);
        this.model.bind("destroy", this.close, this);
    },

    render:function (eventName) {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    }

});