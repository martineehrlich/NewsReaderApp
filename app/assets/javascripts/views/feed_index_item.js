NewsReader.Views.IndexItem = Backbone.View.extend({
  template: JST["feed/index_item"],
  tagName: "li",
  className: "index-item",

  events: {
    "click button.delete-feed": "deleteFeed"
  },

  deleteFeed: function (e) {
    var id = +$(e.currentTarget).data("id");
    this.collection.get(id).destroy();
  },

  render: function () {
    var content = this.template({feed: this.model});
    this.$el.html(content);
    return this;
  }
});
