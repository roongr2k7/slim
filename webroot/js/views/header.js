window.HeaderView = Backbone.View.extend({

    initialize:function () {
        this.template = _.template(tpl.get('header'));
    },

    render:function (eventName) {
        $(this.el).html(this.template());
        return this;
    },

    events:{
        "click .new":"newBoard"
    },

    newBoard:function (event) {
        app.navigate("boards/add", true);
        return false;
    }

});