Backbone.View.prototype.close = function () {
    console.log('Closing view ' + this);
    if (this.beforeClose) {
        this.beforeClose();
    }
    this.remove();
    this.unbind();
};

var AppRouter = Backbone.Router.extend({

    initialize:function () {
        $('#header').html(new HeaderView().render().el);
    },

    routes:{
        "":"list",
        "boards/add":"newBoard",
        "boards/:id":"boardDetails"
    },

    list:function () {
        this.before();
    },

    boardDetails:function (id) {
        this.before(function () {
            var board = app.boardList.get(id);
            app.showView('#content', new BoardView({model:board}));
        });
    },

    newBoard:function () {
        this.before(function () {
            app.showView('#content', new BoardView({model:new Board()}));
        });
    },

    showView:function (selector, view) {
        if (this.currentView)
            this.currentView.close();
        $(selector).html(view.render().el);
        this.currentView = view;
        return view;
    },

    before:function (callback) {
        if (this.boardList) {
            if (callback) callback();
        } else {
            this.boardList = new BoardCollection();
            this.boardList.fetch({success:function () {
                $('#sidebar').html(new BoardListView({model:app.boardList}).render().el);
                if (callback) callback();
            }});
            console.log(this.boardList);
        }
    }

});

tpl.loadTemplates(['header', 'board-details', 'board-list-item'], function () {
    app = new AppRouter();
    Backbone.history.start();
});