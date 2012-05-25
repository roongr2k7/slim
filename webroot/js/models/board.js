window.Board = Backbone.Model.extend({
    urlRoot:"/boards",
});

window.BoardCollection = Backbone.Collection.extend({
    model:Board,
    url:"/boards"
});