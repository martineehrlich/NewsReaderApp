NewsReader.Routers.NewsReader = Backbone.Router.extend({
  routes: {
    "": "feedIndex",
    "feeds/:id": "feedShow"
  },

  initialize: function () {
    this.$el = $("#content");
    this.collection = new NewsReader.Collections.Feeds();
  },

  feedIndex: function () {
    this.collection.fetch();
    var view = new NewsReader.Views.feedIndex({
      collection: this.collection
    });
    this.swapView(view);
  },

  feedShow: function (id) {
    var feed = this.collection.getOrFetch(id);
    // feed.fetch();
    var view = new NewsReader.Views.feedShow({
      model: feed
      // collection: this.collection
    });
    this.swapView(view);
  },

  swapView: function (view) {
    this._view && this._view.remove();
    this._view = view;
    this.$el.html(view.render().$el);
  }
});
